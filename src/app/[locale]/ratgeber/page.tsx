import Link from 'next/link';

export const metadata = {
    title: 'Ratgeber Datumsberechnung - Alle Themen & Guides',
    description: 'Vertiefende Guides und Erklärungen rund um Datumsberechnung, Fristen, Werktage und Schaltjahre.'
};

export default async function RatgeberIndexPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    // Correct links based on Authority Articles strategy pointing to existing @/lib/articles
    const articles = [
        { slug: 'arbeitstage-berechnen', title: 'Wie berechnet man Arbeitstage und Werktage?' },
        { slug: 'schaltjahre-erklaert', title: 'Schaltjahre einfach erklärt: Warum es den 29. Februar gibt' },
        { slug: 'wochen-im-jahr', title: 'Wie viele Wochen hat ein Jahr?' }
    ];

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Ratgeber & Guides
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Bauen Sie Fachwissen rund um Zeit, Fristen und Kalendersysteme auf.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                    <article key={article.slug} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-neon/50 transition-colors group">
                        <Link href={`/${locale}/ratgeber/${article.slug}`} className="block">
                            <h2 className="text-xl font-bold mb-4 group-hover:text-neon transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-white/60 mb-6">
                                Lesen Sie unseren ausführlichen Guide zu diesem Thema und verstehen Sie die kalendarischen Zusammenhänge.
                            </p>
                            <span className="text-neon-blue font-semibold flex items-center gap-2">
                                Artikel lesen
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return [
        { locale: 'de' },
        { locale: 'en' }
    ];
}
