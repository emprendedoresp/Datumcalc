export function SEOContentBlock({ intent, slug }: { intent: string; slug: string }) {
    return (
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 capitalize">Warum {intent} für {slug.replace(/-/g, ' ')} wichtig ist</h2>
            <div className="space-y-4 text-white/70">
                <p>
                    Die Berechnung von Faktoren rund um <strong>{intent} {slug.replace(/-/g, ' ')}</strong>
                    ist in vielen alltäglichen und professionellen Situationen unerlässlich.
                    Egal ob für Projektmanagement, Fristen, rechtliche Vorgaben oder private Meilensteine:
                    Ein exakter Rechner liefert sofortige Ergebnisse ohne Fehlerpotenzial.
                </p>
                <p>
                    Unser intelligentes Tool berücksichtigt automatisch Schaltjahre, spezifische
                    Monatslängen und wahlweise sogar Feiertage. Verlassen Sie sich bei der Berechnung
                    von {intent.replace(/-/g, ' ')} auf höchste Präzision in Echtzeit.
                </p>
            </div>
        </section>
    );
}
