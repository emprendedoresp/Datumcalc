import { Link } from '@/i18n/routing';

export function HomepageSEO() {
    const topQueries = [
        { title: '30 Tage ab heute', url: '/addieren/30-tage-ab-heute' },
        { title: '60 Tage ab heute', url: '/addieren/60-tage-ab-heute' },
        { title: '90 Tage ab heute', url: '/addieren/90-tage-ab-heute' },
        { title: '100 Tage ab heute', url: '/addieren/100-tage-ab-heute' },
        { title: '6 Monate ab heute', url: '/addieren/6-monate-ab-heute' },
    ];

    const eventQueries = [
        { title: 'Tage bis Weihnachten', url: '/differenz/tage-bis-weihnachten' },
        { title: 'Tage bis Silvester', url: '/differenz/tage-bis-silvester' },
        { title: 'Tage bis Ostern', url: '/differenz/tage-bis-ostern' },
        { title: 'Tage bis Sommeranfang', url: '/differenz/tage-bis-sommeranfang' },
    ];

    return (
        <article className="w-full max-w-7xl mx-auto mt-24 mb-16 space-y-32">

            {/* 1. Internal Linking Mesh (Semantic Navigation) */}
            <nav aria-label="Beliebte Datumssuchen" className="space-y-12 animate-slide-up-fade">
                <header className="border-b border-white/10 pb-6 mb-8 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold tracking-tight">Entdecke den Datumsrechner</h2>
                    <p className="text-white/50 mt-2 text-lg">Häufig gesuchte Fristen und Ereignisse auf einen Klick.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                        <h3 className="text-neon font-bold text-xl mb-6 flex items-center gap-2">Beliebte Fristen</h3>
                        <ul className="space-y-4">
                            {topQueries.map((q, i) => (
                                <li key={i}><Link href={q.url} className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><span className="text-neon/50 text-xs">▶</span>{q.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                        <h3 className="text-neon-blue font-bold text-xl mb-6 flex items-center gap-2">Ereignisse</h3>
                        <ul className="space-y-4">
                            {eventQueries.map((q, i) => (
                                <li key={i}><Link href={q.url} className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><span className="text-neon-blue/50 text-xs">▶</span>{q.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                        <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">Ratgeber</h3>
                        <ul className="space-y-4">
                            <li><Link href="/ratgeber/schaltjahre-erklaert" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><span className="text-white/30 text-xs">▶</span>Schaltjahre einfach erklärt</Link></li>
                            <li><Link href="/ratgeber/arbeitstage-berechnen" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><span className="text-white/30 text-xs">▶</span>Wie berechnet man Arbeitstage?</Link></li>
                            <li><Link href="/ratgeber/wochen-im-jahr" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><span className="text-white/30 text-xs">▶</span>Wie viele Wochen hat ein Jahr?</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* 2. SEO Content Block with Semantic Table */}
            <section className="animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                <div className="prose prose-invert max-w-4xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <header>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                            Der ultimative Datumsrechner für Profis und Alltag
                        </h2>
                    </header>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Egal ob Sie Projektfristen planen, Ihr genaues Alter in Tagen berechnen oder wissen möchten, an welchem Wochentag ein bestimmtes Datum liegt – unser Datumsrechner liefert sekundenschnelle, präzise Antworten. Die Ergebnisse sind perfekt für Kalender, Countdowns und rechtliche Fristen.
                    </p>
                    
                    {/* Semantic Table for Featured Snippets */}
                    <div className="overflow-x-auto my-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-white/90">
                                    <th className="py-4 font-bold">Anwendungsfall</th>
                                    <th className="py-4 font-bold">Empfohlenes Tool</th>
                                    <th className="py-4 font-bold">Typisches Beispiel</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/60 divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-neon">Fristen & Kündigungen</td>
                                    <td className="py-4">Datum addieren</td>
                                    <td className="py-4">"14 Tage ab heute"</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-neon-blue">Projektplanung</td>
                                    <td className="py-4">Arbeitstage</td>
                                    <td className="py-4">"Netto Arbeitstage im Q4"</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-white">Event Countdowns</td>
                                    <td className="py-4">Differenz</td>
                                    <td className="py-4">"Tage bis zum Urlaub"</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-white/70 text-lg leading-relaxed">
                        Unser System berücksichtigt dank fortschrittlicher ISO-8601 Kalender-Algorithmen komplexe Faktoren wie Schaltjahre sowie unregelmäßige Monatslängen völlig automatisch. Das garantiert 100% mathematische Genauigkeit.
                    </p>
                </div>
            </section>

            {/* 3. FAQ Schema UI */}
            <section className="max-w-4xl mx-auto space-y-10 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                <header className="text-center">
                    <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Häufig gestellte Fragen (FAQ)</h2>
                    <p className="text-white/50 text-lg">Experten-Antworten rund um die Datumsberechnung.</p>
                </header>
                <div className="space-y-4">
                    <details className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 group cursor-pointer hover:border-white/20 transition-all duration-300">
                        <summary className="font-bold text-xl list-none flex justify-between items-center text-white/90 group-hover:text-white">
                            Sind die Berechnungen zeitzonenunabhängig?
                            <span className="text-neon group-open:rotate-180 transition-transform text-sm bg-neon/10 w-8 h-8 rounded-full flex items-center justify-center">▼</span>
                        </summary>
                        <p className="text-white/60 mt-6 leading-relaxed cursor-text text-lg border-l-2 border-neon/30 pl-4">
                            Ja. Die interne Logik unseres Datumsrechners greift auf lokalisierte und neutralisierte UTC-Zeitstempel zurück. Die Dauer zwischen zwei Daten bleibt unabhängig von Ihrer aktuellen Zeitzone exakt identisch.
                        </p>
                    </details>
                    <details className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 group cursor-pointer hover:border-white/20 transition-all duration-300">
                        <summary className="font-bold text-xl list-none flex justify-between items-center text-white/90 group-hover:text-white">
                            Werden Feiertage bei den Arbeitstagen berücksichtigt?
                            <span className="text-neon group-open:rotate-180 transition-transform text-sm bg-neon/10 w-8 h-8 rounded-full flex items-center justify-center">▼</span>
                        </summary>
                        <p className="text-white/60 mt-6 leading-relaxed cursor-text text-lg border-l-2 border-neon/30 pl-4">
                            In der aktuellen Basisversion werden reguläre Wochenenden (Samstag und Sonntag) sicher herausgefiltert. Die Unterstützung für länderspezifische gesetzliche Feiertage (z.B. Weihnachten, Ostern) wird in Kürze in den Einstellungen konfigurierbar sein.
                        </p>
                    </details>
                    <details className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 group cursor-pointer hover:border-white/20 transition-all duration-300">
                        <summary className="font-bold text-xl list-none flex justify-between items-center text-white/90 group-hover:text-white">
                            Werden Schaltjahre wie der 29. Februar korrekt berechnet?
                            <span className="text-neon group-open:rotate-180 transition-transform text-sm bg-neon/10 w-8 h-8 rounded-full flex items-center justify-center">▼</span>
                        </summary>
                        <p className="text-white/60 mt-6 leading-relaxed cursor-text text-lg border-l-2 border-neon/30 pl-4">
                            Absolut. Unsere Core-Engine basiert auf ISO-Standards und berechnet Schaltjahre, Schaltsekunden und wechselnde Monatslängen auf den Tag genau, ohne Rundungsfehler.
                        </p>
                    </details>
                </div>
            </section>

        </article>
    );
}
