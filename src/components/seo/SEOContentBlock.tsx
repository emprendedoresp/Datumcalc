import { generateSEOContent } from '@/lib/seo/contentEngine';

export function SEOContentBlock({ intent, slug, locale }: { intent: string; slug: string; locale: string }) {
    const match = slug.match(/^(\d+)-/);
    const numValue = match ? parseInt(match[1]) : undefined;
    const content = generateSEOContent(intent, slug, locale, numValue);

    return (
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 capitalize text-white">
                Warum {intent} für {slug.replace(/-/g, ' ')} wichtig ist
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-lg">
                {content.paragraphs.map((p, i) => (
                    <p key={i}>
                        {i === 0 && <strong>{intent} {slug.replace(/-/g, ' ')}: </strong>}
                        {p}
                    </p>
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-neon">Top Anwendungsfälle</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/70">
                    {content.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                            {useCase}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
