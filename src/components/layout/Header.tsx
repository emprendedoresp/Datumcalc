import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-neon/10 p-2 rounded-xl group-hover:bg-neon/20 transition-colors">
                        <CalendarDays className="w-5 h-5 text-neon" />
                    </div>
                    <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Datumsrechner
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
                    <Link href="#differenz" className="hover:text-white transition-colors">Differenz</Link>
                    <Link href="#addieren" className="hover:text-white transition-colors">Addieren / Subtrahieren</Link>
                    <Link href="#arbeitstage" className="hover:text-white transition-colors">Arbeitstage</Link>
                    <Link href="#alter" className="hover:text-white transition-colors">Alter</Link>
                </nav>
            </div>
        </header>
    );
}
