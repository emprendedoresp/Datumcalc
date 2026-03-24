import { CalculatorCore } from '@/components/calculator/CalculatorCore';
import { getTranslations } from 'next-intl/server';
import { NewsletterSignup } from '@/components/monetization/NewsletterSignup';

export default async function Home() {
    const t = await getTranslations('Header');

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Berechne exakte Zeitspannen, addiere Tage oder finde heraus, wie viele Arbeitstage zwischen zwei Daten liegen. Schnell, präzise und kostenlos.
                </p>
            </div>

            <div className="w-full max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-8 min-h-[400px] shadow-2xl mb-12">
                <CalculatorCore />
            </div>

            <div className="max-w-4xl mx-auto">
                <NewsletterSignup />
            </div>
        </main>
    );
}
