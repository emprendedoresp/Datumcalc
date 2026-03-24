'use client';

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Intended for API Integration (e.g. Mailchimp/ConvertKit)
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setEmail('');
        }
    };

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="max-w-xl mx-auto text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon to-neon-blue shadow-[0_0_20px_rgba(255,0,85,0.3)]">
                    <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Bleiben Sie auf dem Laufenden</h3>
                <p className="mb-8 text-white/60">
                    Erhalten Sie einmal im Monat unsere besten Tipps rund um Zeitmanagement, Rechner und neue Features. Kein Spam.
                </p>

                {submitted ? (
                    <div className="flex items-center justify-center gap-2 text-green-400 font-medium py-3 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Erfolgreich angemeldet! Danke.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="relative flex max-w-md mx-auto items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ihre E-Mail-Adresse"
                            className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-5 pr-14 text-white placeholder-white/40 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-1.5 top-1.5 bottom-1.5 flex w-10 items-center justify-center rounded-xl bg-neon text-white transition-all hover:bg-neon-blue hover:scale-105"
                            aria-label="Abonnieren"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
