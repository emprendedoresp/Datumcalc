import { CalculatorCore } from '@/components/calculator/CalculatorCore';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { SEOContentBlock } from '@/components/seo/SEOContentBlock';
import { FAQBlock } from '@/components/seo/FAQBlock';
import { InternalLinksBlock } from '@/components/seo/InternalLinksBlock';
import { addDays, addMonths, addYears, differenceInDays, format } from 'date-fns';
import { de, enUS } from 'date-fns/locale';

const intentToModeMap: Record<string, string> = {
    'differenz': 'difference',
    'difference': 'difference',
    'addieren': 'add_subtract',
    'add': 'add_subtract',
    'arbeitstage': 'business_days',
    'business': 'business_days',
    'alter': 'age',
    'age': 'age'
};
export const revalidate = 86400; // 24 hours ISR revalidation

function computeInstantResult(intent: string, slugStr: string, localeStr: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const loc = localeStr === 'en' ? enUS : de;

    try {
        if (intent === 'addieren' || intent === 'add') {
            const match = slugStr.match(/^(\d+)-(tage|monate|jahre)-ab-heute$/);
            if (match) {
                const amount = parseInt(match[1], 10);
                const unit = match[2];
                let resultDate;
                if (unit === 'tage') resultDate = addDays(today, amount);
                else if (unit === 'monate') resultDate = addMonths(today, amount);
                else if (unit === 'jahre') resultDate = addYears(today, amount);

                if (resultDate) {
                    return {
                        headline: `In ${amount} ${unit.charAt(0).toUpperCase() + unit.slice(1)} ist`,
                        highlight: format(resultDate, 'EEEE, dd. MMMM yyyy', { locale: loc }),
                        subtext: `Ausgehend von heute (${format(today, 'dd.MM.yyyy')})`
                    };
                }
            }
        }

        if (intent === 'differenz' || intent === 'difference') {
            const match = slugStr.match(/^tage-bis-(.+)$/);
            if (match) {
                const eventStr = match[1].toLowerCase();
                let targetDate = new Date(today.getFullYear(), 0, 1);
                let eventName = '';
                let found = false;

                if (eventStr === 'weihnachten') {
                    targetDate = new Date(today.getFullYear(), 11, 25);
                    eventName = 'Weihnachten';
                    found = true;
                } else if (eventStr === 'silvester') {
                    targetDate = new Date(today.getFullYear(), 11, 31);
                    eventName = 'Silvester';
                    found = true;
                } else if (eventStr === 'sommeranfang') {
                    targetDate = new Date(today.getFullYear(), 5, 21);
                    eventName = 'Sommeranfang';
                    found = true;
                } else if (eventStr === 'ostern') {
                    const yr = today.getFullYear();
                    // simplistic easter approx for MVP
                    if (yr === 2024) targetDate = new Date(2024, 2, 31);
                    else if (yr === 2025) targetDate = new Date(2025, 3, 20);
                    else if (yr === 2026) targetDate = new Date(2026, 3, 5);
                    else targetDate = new Date(yr, 3, 10);
                    eventName = 'Ostern';
                    found = true;
                }

                if (found) {
                    if (today > targetDate) {
                        targetDate.setFullYear(targetDate.getFullYear() + 1);
                    }
                    const diff = differenceInDays(targetDate, today);
                    return {
                        headline: `Bis ${eventName} sind es noch`,
                        highlight: `${diff} Tage`,
                        subtext: `Das Datum ist der ${format(targetDate, 'dd. MMMM yyyy', { locale: loc })}`
                    };
                }
            }
        }
    } catch (e) { }

    return null;
}

export default async function ProgrammaticPage({
    params
}: {
    params: Promise<{ locale: string; intent: string; slug: string[] }>
}) {
    const { locale, intent, slug } = await params;
    const mode = intentToModeMap[intent.toLowerCase()];

    if (!mode) {
        notFound();
    }

    const slugStr = slug.join('-');
    const instantResult = computeInstantResult(intent.toLowerCase(), slugStr, locale);

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* 1. Dynamic Engaging Hero Result */}
            {instantResult ? (
                <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <p className="text-2xl md:text-3xl font-medium text-white/50 tracking-wide uppercase">
                        {instantResult.headline}
                    </p>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neon to-neon-blue drop-shadow-[0_0_40px_rgba(255,0,85,0.3)] py-4">
                        {instantResult.highlight}
                    </h1>
                    <p className="text-lg text-white/40">
                        {instantResult.subtext}
                    </p>
                </div>
            ) : (
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight capitalize">
                        {intent} {slugStr.replace(/-/g, ' ')}
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Nutze unseren Rechner für {intent} {slugStr.replace(/-/g, ' ')}
                    </p>
                </div>
            )}

            {/* 2. Embedded Core Calculator */}
            <div className="w-full max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-[#0a0a0a] backdrop-blur-2xl p-6 md:p-8 min-h-[400px] shadow-2xl mb-24">
                <CalculatorCore initialMode={mode as any} />
            </div>

            {/* 3. SEO Hub & Content Layout */}
            <div className="max-w-4xl mx-auto space-y-16">
                <SEOContentBlock intent={intent} slug={slugStr} />
                <InternalLinksBlock locale={locale} intent={intent} />
                <FAQBlock intent={intent} slug={slugStr} />
            </div>
        </main>
    );
}

export function generateStaticParams() {
    const topNumbers = ['30', '60', '90', '100'];
    const intents = ['differenz', 'addieren'];
    const locales = ['de', 'en'];
    const params = [];

    for (const locale of locales) {
        for (const intent of intents) {
            for (const num of topNumbers) {
                params.push({
                    locale,
                    intent,
                    slug: [num, 'tage', 'ab', 'heute']
                });
            }
        }
    }

    // Add specific events
    for (const locale of locales) {
        params.push({ locale, intent: 'differenz', slug: ['tage', 'bis', 'weihnachten'] });
        params.push({ locale, intent: 'differenz', slug: ['tage', 'bis', 'silvester'] });
        params.push({ locale, intent: 'differenz', slug: ['tage', 'bis', 'ostern'] });
        params.push({ locale, intent: 'differenz', slug: ['tage', 'bis', 'sommeranfang'] });
    }

    return params;
}
