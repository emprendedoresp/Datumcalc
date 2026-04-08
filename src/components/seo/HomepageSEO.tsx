import { Link } from '@/i18n/routing';
import { CheckCircle2, CalendarCheck2, Clock4, Users, ShieldCheck } from 'lucide-react';

const siteUrl = 'https://datums-rechner.com';
const dateModified = new Date().toISOString().split('T')[0];

const homepageFAQs = [
    {
        question: 'Sind die Berechnungen zeitzonenunabhängig?',
        answer: 'Ja. Die interne Logik unseres Datumsrechners greift auf lokalisierte und neutralisierte UTC-Zeitstempel zurück. Die Dauer zwischen zwei Daten bleibt unabhängig von Ihrer aktuellen Zeitzone exakt identisch.',
    },
    {
        question: 'Werden Feiertage bei den Arbeitstagen berücksichtigt?',
        answer: 'In der aktuellen Basisversion werden reguläre Wochenenden (Samstag und Sonntag) sicher herausgefiltert. Die Unterstützung für länderspezifische gesetzliche Feiertage (z.B. Weihnachten, Ostern) wird in Kürze in den Einstellungen konfigurierbar sein.',
    },
    {
        question: 'Werden Schaltjahre wie der 29. Februar korrekt berechnet?',
        answer: 'Absolut. Unsere Core-Engine basiert auf ISO-8601-Standards und berechnet Schaltjahre, Schaltsekunden und wechselnde Monatslängen auf den Tag genau, ohne Rundungsfehler.',
    },
    {
        question: 'Wie viele Tage hat ein Jahr?',
        answer: 'Ein Normaljahr hat 365 Tage. Ein Schaltjahr hat 366 Tage und tritt alle vier Jahre auf (mit Ausnahmen für säkulare Jahre). Unser Rechner berücksichtigt dies automatisch.',
    },
    {
        question: 'Kann ich den Datumsrechner kostenlos nutzen?',
        answer: 'Ja, der Datumsrechner ist vollständig kostenlos und ohne Anmeldung nutzbar. Alle Berechnungen – Datumsdifferenz, Datum addieren und Arbeitstage – stehen unbegrenzt zur Verfügung.',
    },
];

export function HomepageSEO() {
    const topQueries = [
        { title: '30 Tage ab heute',   url: '/addieren/30-tage-ab-heute' },
        { title: '60 Tage ab heute',   url: '/addieren/60-tage-ab-heute' },
        { title: '90 Tage ab heute',   url: '/addieren/90-tage-ab-heute' },
        { title: '100 Tage ab heute',  url: '/addieren/100-tage-ab-heute' },
        { title: '6 Monate ab heute',  url: '/addieren/6-monate-ab-heute' },
        { title: '1 Jahr ab heute',    url: '/addieren/1-jahr-ab-heute' },
    ];

    const eventQueries = [
        { title: 'Tage bis Weihnachten',    url: '/differenz/tage-bis-weihnachten' },
        { title: 'Tage bis Silvester',      url: '/differenz/tage-bis-silvester' },
        { title: 'Tage bis Ostern',         url: '/differenz/tage-bis-ostern' },
        { title: 'Tage bis Sommeranfang',   url: '/differenz/tage-bis-sommeranfang' },
        { title: 'Tage bis Neujahr',        url: '/differenz/tage-bis-neujahr' },
        { title: 'Tage bis zum Urlaub',     url: '/differenz/tage-bis-urlaub' },
    ];

    const guides = [
        { title: 'Schaltjahre einfach erklärt',   url: '/ratgeber/schaltjahre-erklaert' },
        { title: 'Wie berechnet man Arbeitstage?', url: '/ratgeber/arbeitstage-berechnen' },
        { title: 'Wie viele Wochen hat ein Jahr?', url: '/ratgeber/wochen-im-jahr' },
        { title: 'Was ist ISO 8601?',              url: '/ratgeber/iso-8601-erklaert' },
    ];

    const trustSignals = [
        { icon: CheckCircle2, label: 'ISO 8601 konform', color: 'text-green-400' },
        { icon: CalendarCheck2, label: 'Schaltjahre berechnet', color: 'text-neon-blue' },
        { icon: Clock4, label: 'Sekundenschnell', color: 'text-neon' },
        { icon: ShieldCheck, label: '100% kostenlos', color: 'text-white/70' },
        { icon: Users, label: 'Millionen Nutzer', color: 'text-purple-400' },
    ];

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': homepageFAQs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer,
            },
        })),
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${siteUrl}/#article`,
        'headline': 'Der ultimative Datumsrechner – Zeitspannen, Fristen & Arbeitstage berechnen',
        'description': 'Kostenloser Online-Datumsrechner für exakte Datumsdifferenzen, das Addieren von Tagen und die Berechnung von Netto-Arbeitstagen. ISO 8601 konform und schaltjahrgenau.',
        'url': siteUrl,
        'dateModified': dateModified,
        'datePublished': '2024-01-01',
        'author': {
            '@type': 'Organization',
            'name': 'Datumsrechner',
            '@id': `${siteUrl}/#organization`,
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'Datumsrechner',
            '@id': `${siteUrl}/#organization`,
        },
        'inLanguage': 'de',
        'about': [
            { '@type': 'Thing', 'name': 'Datumsberechnung' },
            { '@type': 'Thing', 'name': 'Kalender' },
            { '@type': 'Thing', 'name': 'Arbeitstage' },
            { '@type': 'Thing', 'name': 'ISO 8601' },
        ],
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': siteUrl,
        },
    };

    return (
        <article className="w-full max-w-7xl mx-auto mt-24 mb-16 space-y-24">

            {/* JSON-LD Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            {/* ── 1. Trust Signals Bar ── */}
            <section
                aria-label="Vertrauenssignale"
                className="flex flex-wrap justify-center gap-4 animate-slide-up-fade"
            >
                {trustSignals.map(({ icon: Icon, label, color }, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-sm font-medium text-white/60"
                    >
                        <Icon className={`w-4 h-4 shrink-0 ${color}`} aria-hidden="true" />
                        {label}
                    </div>
                ))}
            </section>

            {/* ── 2. Internal Linking Mesh (Semantic Navigation) ── */}
            <nav aria-label="Beliebte Datumssuchen" className="space-y-10 animate-slide-up-fade">
                <header className="border-b border-white/10 pb-6 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold tracking-tight">Entdecke den Datumsrechner</h2>
                    <p className="text-white/50 mt-2 text-lg">Häufig gesuchte Fristen und Ereignisse auf einen Klick.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Fristen */}
                    <div className="bg-white/[0.02] p-7 rounded-3xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                        <h3 className="text-neon font-bold text-xl mb-5 flex items-center gap-2">
                            <CalendarCheck2 className="w-5 h-5" aria-hidden="true" />
                            Beliebte Fristen
                        </h3>
                        <ul className="space-y-3">
                            {topQueries.map((q, i) => (
                                <li key={i}>
                                    <Link
                                        href={q.url}
                                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="text-neon/40 group-hover:text-neon text-xs transition-colors" aria-hidden="true">▶</span>
                                        {q.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ereignisse */}
                    <div className="bg-white/[0.02] p-7 rounded-3xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                        <h3 className="text-neon-blue font-bold text-xl mb-5 flex items-center gap-2">
                            <Clock4 className="w-5 h-5" aria-hidden="true" />
                            Ereignisse & Countdowns
                        </h3>
                        <ul className="space-y-3">
                            {eventQueries.map((q, i) => (
                                <li key={i}>
                                    <Link
                                        href={q.url}
                                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="text-neon-blue/40 group-hover:text-neon-blue text-xs transition-colors" aria-hidden="true">▶</span>
                                        {q.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ratgeber */}
                    <div className="bg-white/[0.02] p-7 rounded-3xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-400" aria-hidden="true" />
                            Ratgeber & Wissen
                        </h3>
                        <ul className="space-y-3">
                            {guides.map((q, i) => (
                                <li key={i}>
                                    <Link
                                        href={q.url}
                                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="text-white/20 group-hover:text-white/60 text-xs transition-colors" aria-hidden="true">▶</span>
                                        {q.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ── 3. SEO Content Block with Semantic Table ── */}
            <section aria-labelledby="seo-content-heading" className="animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                <div className="prose prose-invert max-w-4xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <header>
                        <h2 id="seo-content-heading" className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                            Der ultimative Datumsrechner für Profis und Alltag
                        </h2>
                    </header>

                    <p className="text-white/70 text-lg leading-relaxed mb-6">
                        Egal ob Sie Projektfristen planen, Ihr genaues Alter in Tagen berechnen oder wissen möchten, an welchem Wochentag ein bestimmtes Datum liegt – unser <strong>Datumsrechner</strong> liefert sekundenschnelle, präzise Antworten. Die Ergebnisse sind perfekt für Kalender, Countdowns und rechtliche Fristen.
                    </p>

                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Mit unserem Tool können Sie <strong>Tage zwischen zwei Daten berechnen</strong>, <strong>Datum addieren oder subtrahieren</strong> sowie <strong>Netto-Arbeitstage</strong> ermitteln – alles in einem einzigen, intuitiven Interface. Keine Anmeldung, keine Werbung, kein Datenschutzproblem.
                    </p>

                    {/* Semantic Table for Featured Snippets */}
                    <h3 className="text-white text-xl font-bold mb-4">Anwendungsfälle im Überblick</h3>
                    <div className="overflow-x-auto my-6 rounded-2xl border border-white/10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.03]">
                                    <th scope="col" className="py-4 px-5 font-bold text-white/90">Anwendungsfall</th>
                                    <th scope="col" className="py-4 px-5 font-bold text-white/90">Empfohlenes Tool</th>
                                    <th scope="col" className="py-4 px-5 font-bold text-white/90 hidden md:table-cell">Typisches Beispiel</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/60 divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-5 text-neon font-medium">Fristen &amp; Kündigungen</td>
                                    <td className="py-4 px-5"><Link href="/addieren" className="underline underline-offset-2 hover:text-white transition-colors">Datum addieren</Link></td>
                                    <td className="py-4 px-5 hidden md:table-cell">&quot;14 Tage ab heute&quot;</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-5 text-neon-blue font-medium">Projektplanung</td>
                                    <td className="py-4 px-5"><Link href="/arbeitstage" className="underline underline-offset-2 hover:text-white transition-colors">Arbeitstage</Link></td>
                                    <td className="py-4 px-5 hidden md:table-cell">&quot;Netto Arbeitstage im Q4&quot;</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-5 text-white font-medium">Event Countdowns</td>
                                    <td className="py-4 px-5"><Link href="/differenz" className="underline underline-offset-2 hover:text-white transition-colors">Differenz</Link></td>
                                    <td className="py-4 px-5 hidden md:table-cell">&quot;Tage bis zum Urlaub&quot;</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-5 text-purple-400 font-medium">Alter berechnen</td>
                                    <td className="py-4 px-5"><Link href="/alter" className="underline underline-offset-2 hover:text-white transition-colors">Alter</Link></td>
                                    <td className="py-4 px-5 hidden md:table-cell">&quot;Alter in Tagen&quot;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-white/70 text-lg leading-relaxed mt-6">
                        Unser System berücksichtigt dank fortschrittlicher <strong>ISO-8601 Kalender-Algorithmen</strong> komplexe Faktoren wie Schaltjahre sowie unregelmäßige Monatslängen völlig automatisch. Das garantiert 100% mathematische Genauigkeit – ohne Rundungsfehler.
                    </p>
                </div>
            </section>

            {/* ── 4. How It Works (HowTo-aligned) ── */}
            <section aria-labelledby="howto-heading" className="max-w-4xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.15s' }}>
                <header className="text-center mb-10">
                    <h2 id="howto-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Wie funktioniert der Datumsrechner?</h2>
                    <p className="text-white/50 text-lg">In drei einfachen Schritten zum Ergebnis.</p>
                </header>
                <ol className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            step: '1',
                            title: 'Tool auswählen',
                            desc: 'Wählen Sie aus Datumsdifferenz, Datum addieren, Arbeitstage oder Alter berechnen.',
                            color: 'from-neon/20 to-transparent border-neon/20',
                            accent: 'text-neon',
                        },
                        {
                            step: '2',
                            title: 'Datum eingeben',
                            desc: 'Geben Sie Start- und Enddatum ein oder wählen Sie aus dem Kalender-Picker.',
                            color: 'from-neon-blue/20 to-transparent border-neon-blue/20',
                            accent: 'text-neon-blue',
                        },
                        {
                            step: '3',
                            title: 'Ergebnis erhalten',
                            desc: 'Das Ergebnis erscheint sofort – in Tagen, Wochen, Monaten und Jahren.',
                            color: 'from-purple-500/20 to-transparent border-purple-500/20',
                            accent: 'text-purple-400',
                        },
                    ].map(({ step, title, desc, color, accent }) => (
                        <li key={step} className={`relative p-7 rounded-3xl bg-gradient-to-br ${color} border backdrop-blur-sm`}>
                            <span className={`text-5xl font-black ${accent} opacity-20 absolute top-4 right-6 select-none leading-none`} aria-hidden="true">
                                {step}
                            </span>
                            <span className={`inline-flex items-center justify-center w-9 h-9 rounded-xl text-sm font-black ${accent} bg-white/5 border border-white/10 mb-4`}>
                                {step}
                            </span>
                            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                            <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* ── 5. FAQ Schema UI ── */}
            <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto space-y-6 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                <header className="text-center mb-6">
                    <h2 id="faq-heading" className="text-4xl font-extrabold mb-3 tracking-tight">Häufig gestellte Fragen</h2>
                    <p className="text-white/50 text-lg">Experten-Antworten rund um die Datumsberechnung.</p>
                </header>
                <div className="space-y-3">
                    {homepageFAQs.map((faq, i) => (
                        <details
                            key={i}
                            className="bg-white/[0.02] border border-white/[0.07] rounded-2xl px-6 py-5 group cursor-pointer hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <summary className="font-semibold text-lg list-none flex justify-between items-center text-white/85 group-hover:text-white select-none">
                                {faq.question}
                                <span
                                    aria-hidden="true"
                                    className="ml-4 shrink-0 text-neon group-open:rotate-180 transition-transform duration-300 text-xs bg-neon/10 w-7 h-7 rounded-full flex items-center justify-center"
                                >
                                    ▼
                                </span>
                            </summary>
                            <p className="text-white/60 mt-4 leading-relaxed text-base border-l-2 border-neon-blue/30 pl-4">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

        </article>
    );
}
