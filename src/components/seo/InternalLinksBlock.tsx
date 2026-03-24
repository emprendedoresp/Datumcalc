import Link from 'next/link';

export function InternalLinksBlock({ locale, intent }: { locale: string; intent: string }) {
    // Generate some related query permutations based on intent
    const links = [
        { label: '30 Tage ab heute', slug: '30-tage-ab-heute' },
        { label: '90 Tage ab heute', slug: '90-tage-ab-heute' },
        { label: 'Sechs Monate ab heute', slug: '6-monate-ab-heute' },
        { label: 'Arbeitstage im Jahr', slug: 'arbeitstage-jahr' },
    ];

    return (
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Verwandte Berechnungen</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link
                            href={`/${locale}/${intent}/${link.slug}`}
                            className="text-neon-blue hover:text-white transition-colors flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-neon"></span>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
