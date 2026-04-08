import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Common.titles' });
    return {
        title: `${t('privacy')} - Datumsrechner`,
        description: `Informationen darüber, wie wir Ihre Daten schützen und welche Dienste wir nutzen.`
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Common.titles' });

    return (
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
                {t('privacy')}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                    <p className="text-white/70 leading-relaxed font-bold">Allgemeine Hinweise</p>
                    <p className="text-white/70 leading-relaxed">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Cookies und Tracking</h2>
                    <p className="text-white/70 leading-relaxed">
                        Wir verwenden Cookies, um die Benutzerfreundlichkeit zu verbessern und den Website-Traffic zu analysieren. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2 underline decoration-neon/30">Google AdSense</h3>
                    <p className="text-white/70 leading-relaxed">
                        Diese Website nutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Inc. ("Google"). Google AdSense verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglichen.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Hosting und Protokollierung</h2>
                    <p className="text-white/70 leading-relaxed">
                        Die Website wird bei einem externen Dienstleister gehostet (Vercel). Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dies können IP-Adressen, Kontaktanfragen oder Metadaten sein.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Ihre Rechte</h2>
                    <p className="text-white/70 leading-relaxed">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Verantwortliche Stelle</h2>
                    <p className="text-white/70 leading-relaxed">
                        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                        Max Mustermann<br />
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        hello@datums-rechner.com
                    </p>
                </section>
            </div>
        </main>
    );
}
