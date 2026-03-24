import { ExternalLink, Percent } from 'lucide-react';

interface AffiliateCardProps {
    title: string;
    description: string;
    url: string;
    ctaText: string;
}

export function AffiliateCard({ title, description, url, ctaText }: AffiliateCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-neon/20 bg-neon/5 p-6 transition-all hover:bg-neon/10 hover:border-neon/40">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 flex h-16 w-16 items-center justify-center rounded-bl-3xl bg-gradient-to-br from-neon to-neon-blue shadow-[0_0_20px_rgba(255,0,85,0.3)]">
                <Percent className="h-6 w-6 text-white" />
            </div>
            <div className="pr-12">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-white">{title}</h3>
                <p className="mb-6 text-sm text-white/70">{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
                >
                    {ctaText}
                    <ExternalLink className="h-4 w-4" />
                </a>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neon/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    );
}
