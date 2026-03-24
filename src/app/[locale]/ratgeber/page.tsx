import Link from 'next/link';
import { articles } from '@/lib/articles';

export default function RatgeberIndex() {
    return (
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ratgeber & Artikel</h1>
                <p className="text-lg text-white/60">
                    Wissenswertes über Kalender, Schaltjahre und die exakte Berechnung von Arbeitstagen.
                </p>
            </div>

            <div className="grid gap-8">
                {articles.map(article => (
                    <Link href={`/de/ratgeber/${article.slug}`} key={article.slug} className="block group">
                        <article className="bg-[#1a1a1a] border border-white/5 hover:border-neon/50 rounded-2xl p-6 md:p-8 transition-all shadow-xl hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,0,85,0.1)]">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold bg-white/5 text-neon-blue px-3 py-1 rounded-full">{article.readTime} Lesezeit</span>
                                <span className="text-sm text-white/40">{article.publishedAt}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-neon transition-colors">{article.title}</h2>
                            <p className="text-white/60 leading-relaxed text-lg">{article.description}</p>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
}
