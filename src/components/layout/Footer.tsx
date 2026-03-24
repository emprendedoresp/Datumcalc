import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-background/40 py-8 mt-auto z-10 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                <p>© {new Date().getFullYear()} Datumsrechner. Alle Rechte vorbehalten.</p>
                <div className="flex gap-4">
                    <Link href="/datenschutz" className="hover:text-white/80 transition-colors">Datenschutz</Link>
                    <Link href="/impressum" className="hover:text-white/80 transition-colors">Impressum</Link>
                </div>
            </div>
        </footer>
    );
}
