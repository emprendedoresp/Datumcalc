import { Link } from '@/i18n/routing';
import { CANONICAL_QUERIES } from '@/lib/seo/queryModel';

export function InternalLinksBlock({ locale, intent, slug }: { locale: string; intent: string; slug: string }) {
    // Dynamically build related links (±10% numeric variations, 1 event, 1 use case)
    const links: { label: string; urlSlug: string; type: string }[] = [];
    
    const match = slug.match(/^(\d+)-/);
    const numValue = match ? parseInt(match[1]) : 0;

    if (numValue > 0) {
        // +-10%, +-20% logic approx
        const v1 = Math.round(numValue * 0.8);
        const v2 = Math.round(numValue * 0.9);
        const v3 = Math.round(numValue * 1.1);
        const v4 = Math.round(numValue * 1.2);
        links.push({ label: `${v1} Tage ab heute`, urlSlug: `addieren/${v1}-tage-ab-heute`, type: 'Variation' });
        links.push({ label: `${v2} Tage ab heute`, urlSlug: `addieren/${v2}-tage-ab-heute`, type: 'Variation' });
        links.push({ label: `${v3} Tage ab heute`, urlSlug: `addieren/${v3}-tage-ab-heute`, type: 'Variation' });
        links.push({ label: `${v4} Tage ab heute`, urlSlug: `addieren/${v4}-tage-ab-heute`, type: 'Variation' });
    } else {
        links.push({ label: '30 Tage ab heute', urlSlug: 'addieren/30-tage-ab-heute', type: 'Beliebt' });
        links.push({ label: '90 Tage ab heute', urlSlug: 'addieren/90-tage-ab-heute', type: 'Beliebt' });
        links.push({ label: '100 Tage ab heute', urlSlug: 'addieren/100-tage-ab-heute', type: 'Beliebt' });
        links.push({ label: '365 Tage ab heute', urlSlug: 'addieren/365-tage-ab-heute', type: 'Beliebt' });
    }

    // Add more event & guide links
    links.push({ label: 'Tage bis Weihnachten', urlSlug: 'differenz/tage-bis-weihnachten', type: 'Event' });
    links.push({ label: 'Tage bis Silvester', urlSlug: 'differenz/tage-bis-silvester', type: 'Event' });
    links.push({ label: 'Was ist ein Arbeitstag?', urlSlug: 'ratgeber/was-ist-ein-arbeitstag', type: 'Ratgeber' });
    links.push({ label: 'Schaltjahre erklärt', urlSlug: 'ratgeber/schaltjahre-erklaert', type: 'Ratgeber' });

    return (
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="text-xl font-bold mb-6 text-white">Verwandte Berechnungen & Themen</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link
                            href={`/${link.urlSlug}`}
                            className="block p-4 rounded-xl bg-black/40 border border-white/5 hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all group"
                        >
                            <span className="text-xs font-medium text-neon uppercase tracking-wider mb-2 block">{link.type}</span>
                            <span className="text-white/80 group-hover:text-white flex items-center gap-2">
                                {link.label}
                                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
