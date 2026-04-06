import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-background/40 py-12 mt-auto z-10 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 text-sm text-white/40 text-center">
                
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
                    <p className="order-2 md:order-1">© {new Date().getFullYear()} Datumsrechner. Alle Rechte vorbehalten.</p>
                    
                    <div className="flex gap-6 order-1 md:order-2">
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                    </div>
                </div>

                <div className="w-full pt-8 border-t border-white/5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/20">Sprache wählen / Select Language</p>
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}
