'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { CalendarDays, Menu, X, PlusSquare, SplitSquareHorizontal, BookOpen, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Header() {
    const t = useTranslations('Header');
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/differenz', label: t('Nav.differenz'), icon: SplitSquareHorizontal },
        { href: '/addieren', label: t('Nav.addieren'), icon: PlusSquare },
        { href: '/ratgeber', label: t('Nav.ratgeber'), icon: BookOpen },
    ];

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#030303]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="bg-gradient-to-br from-neon to-neon-blue p-2.5 rounded-xl group-hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] transition-all duration-300 group-hover:scale-105 border border-white/20">
                            <CalendarDays className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter text-white">
                            {t('title')}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner" aria-label="Main Navigation">
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <Link 
                                    key={link.href} 
                                    href={link.href} 
                                    className={`relative flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all group overflow-hidden ${
                                        isActive ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <link.icon className={`w-4 h-4 transition-all ${isActive ? 'text-neon-blue' : 'opacity-50 group-hover:opacity-100 group-hover:text-neon'}`} />
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-neon-blue rounded-t-full shadow-[0_-2px_10px_rgba(0,210,255,0.8)]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center relative z-50">
                        <Link href="/addieren" className="group flex items-center gap-2 bg-white text-black font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Jetzt Berechnen
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="lg:hidden p-2 text-white/70 hover:text-white relative z-50 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 bg-[#030303]/95 backdrop-blur-3xl z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="flex flex-col items-center justify-center h-full gap-8 px-6" aria-label="Mobile Navigation">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-4 text-3xl font-black transition-colors ${
                                    isActive ? 'text-white' : 'text-white/50 hover:text-white'
                                }`}
                            >
                                <link.icon className={`w-8 h-8 ${isActive ? 'text-neon-blue' : ''}`} />
                                {link.label}
                                {isActive && <span className="w-2 h-2 rounded-full bg-neon-blue ml-2 animate-pulse" />}
                            </Link>
                        );
                    })}
                    
                    <Link 
                        href="/addieren" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-8 flex items-center gap-2 bg-gradient-to-r from-neon to-neon-blue text-white font-bold px-8 py-4 rounded-full"
                    >
                        Jetzt Berechnen <ArrowRight className="w-5 h-5" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
