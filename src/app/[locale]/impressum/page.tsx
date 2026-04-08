import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Common.titles' });
    return {
        title: `${t('imprint')} - Datumsrechner`,
        description: `Rechtliche Informationen und Kontakt zum Projekt Datumsrechner.`
    };
}

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Common.titles' });

    return (
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
                {t('imprint')}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                    <p className="text-white/70 leading-relaxed">
                        Max Mustermann<br />
                        Digital Solutions<br />
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                    <p className="text-white/70 leading-relaxed">
                        E-Mail: hello@datums-rechner.com<br />
                        Telefon: +49 (0) 123 456789 (optional)
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
                    <p className="text-white/70 leading-relaxed">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE 123 456 789
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Redaktionell verantwortlich</h2>
                    <p className="text-white/70 leading-relaxed">
                        Max Mustermann<br />
                        Musterstraße 123<br />
                        12345 Musterstadt
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
                    <p className="text-white/70 leading-relaxed">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                        <a href="https://ec.europa.eu/consumers/odr/" className="text-neon hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                    <p className="text-white/70 leading-relaxed">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>
            </div>
        </main>
    );
}
