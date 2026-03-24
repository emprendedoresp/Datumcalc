import { CalculatorCore } from '@/components/calculator/CalculatorCore';
import { getTranslations } from 'next-intl/server';
import { NewsletterSignup } from '@/components/monetization/NewsletterSignup';
import { SmartInputBar } from '@/components/SmartInputBar';
import { HomepageSEO } from '@/components/seo/HomepageSEO';

export default async function Home() {
    const t = await getTranslations('Header');

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8 space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
                    Berechne exakte Zeitspannen, addiere Tage oder finde heraus, wie viele Arbeitstage zwischen zwei Daten liegen. Schnell, präzise und kostenlos.
                </p>
            </div>

            <SmartInputBar />

            <div className="w-full max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-[#0a0a0a] backdrop-blur-2xl p-4 md:p-8 min-h-[400px] shadow-2xl mb-16">
                <CalculatorCore />
            </div>

            <HomepageSEO />

            <div className="max-w-4xl mx-auto mt-16">
                <NewsletterSignup />
            </div>
        </main>
    );
}
