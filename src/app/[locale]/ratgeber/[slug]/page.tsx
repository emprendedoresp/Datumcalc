import { getArticleBySlug, articles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import { CalculatorCore } from '@/components/calculator/CalculatorCore';

export const revalidate = 86400; // 24 hours ISR

export function generateStaticParams() {
    return articles.map(a => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) notFound();

    return (
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-16 space-y-6 text-center">
                <p className="text-sm font-bold tracking-widest uppercase text-neon">
                    {article.publishedAt} • {article.readTime}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    {article.title}
                </h1>
                <p className="text-xl text-white/50 max-w-3xl mx-auto mt-6 leading-relaxed">
                    {article.description}
                </p>
            </div>

            <article
                className="prose prose-invert prose-lg max-w-none prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-white prose-a:text-neon hover:prose-a:text-neon-blue prose-p:text-white/70 prose-li:text-white/70 bg-gradient-to-br from-[#1a1a1a] to-transparent rounded-[2.5rem] p-8 md:p-14 border border-white/5 mb-16 shadow-2xl"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-20 bg-[#050505] rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-3xl">
                <h3 className="text-center text-neon-blue font-bold uppercase tracking-widest text-sm mb-4">Gleich ausprobieren</h3>
                <h4 className="text-3xl font-bold text-center mb-10">Berechne dein Datum jetzt sofort</h4>
                <div className="max-w-3xl mx-auto">
                    <CalculatorCore />
                </div>
            </div>
        </main>
    );
}
