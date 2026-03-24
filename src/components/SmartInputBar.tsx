'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Search } from 'lucide-react';

export function SmartInputBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const params = useParams();
    const locale = params?.locale || 'de';

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        // MVP intent parsing
        const lower = query.toLowerCase();
        let url = `/${locale}/`;

        if (lower.includes('tage ab heute') || lower.includes('tage nach')) {
            url += `addieren/${lower.replace(/ /g, '-')}`;
        } else if (lower.includes('tage bis') || lower.includes('tage vor')) {
            url += `differenz/${lower.replace(/ /g, '-')}`;
        } else if (lower.includes('arbeitstage') || lower.includes('werktage')) {
            url += `arbeitstage/${lower.replace(/ /g, '-')}`;
        } else if (lower.includes('alter') || lower.includes('alt')) {
            url += `alter/${lower.replace(/ /g, '-')}`;
        } else {
            // fallback search
            url += `addieren/${lower.replace(/ /g, '-')}`;
        }

        router.push(url);
    };

    return (
        <div className="w-full max-w-3xl mx-auto mb-16 px-4 md:px-0">
            <form onSubmit={handleSearch} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-[#0a0a0a] rounded-2xl border border-white/10 p-2 shadow-xl">
                    <Search className="w-6 h-6 text-white/50 ml-3" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Was möchtest du berechnen? (z.B. 100 Tage ab heute)"
                        className="w-full bg-transparent text-white placeholder-white/40 px-4 py-3 text-[17px] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-neon to-neon-blue text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                        Berechnen
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-5 text-sm font-medium text-white/40">
                    <span className="hidden sm:inline">Beliebte Suchen:</span>
                    <button type="button" onClick={() => setQuery('100 Tage ab heute')} className="hover:text-neon transition-colors">100 Tage ab heute</button>
                    <button type="button" onClick={() => setQuery('Tage bis Weihnachten')} className="hover:text-neon transition-colors">Tage bis Weihnachten</button>
                    <button type="button" onClick={() => setQuery('Arbeitstage 2024')} className="hover:text-neon transition-colors">Arbeitstage 2024</button>
                </div>
            </form>
        </div>
    );
}
