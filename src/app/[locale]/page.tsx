import { CalculatorCore } from '@/components/calculator/CalculatorCore';
import { getTranslations } from 'next-intl/server';
import { NewsletterSignup } from '@/components/monetization/NewsletterSignup';
import { SmartInputBar } from '@/components/SmartInputBar';
import { HomepageSEO } from '@/components/seo/HomepageSEO';

export default async function Home() {
    const t = await getTranslations('Header');

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            {/* Semantic Header Block for Hero */}
            <header className="text-center mb-16 space-y-6 animate-slide-up-fade">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-blue mb-4">
                    <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                    Exakte Datumsberechnung für Profis
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                    Berechnen Sie exakte Zeitspannen, addieren Sie Tage oder ermitteln Sie Netto-Arbeitstage. <br className="hidden md:block" />Schnell, präzise und 100% kostenlos.
                </p>
            </header>

            {/* Smart Input Search */}
            <section aria-label="Schnellsuche" className="mb-12 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                <SmartInputBar />
            </section>

            {/* Core Calculator Hub */}
            <section aria-label="Hauptrechner" className="w-full max-w-5xl mx-auto rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl p-6 md:p-10 min-h-[400px] shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-24 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                <CalculatorCore />
            </section>

            {/* Semantic SEO & Content Blocks */}
            <HomepageSEO />

            {/* Monetization / CTA */}
            <aside aria-label="Newsletter Anmeldung" className="max-w-4xl mx-auto mt-24 mb-16">
                <NewsletterSignup />
            </aside>
        </main>
    );
}
