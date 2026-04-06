'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { CalendarDays, Menu, X, PlusSquare, SplitSquareHorizontal, BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Header() {
    const t = useTranslations('Header');
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
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="bg-neon/10 p-2.5 rounded-xl group-hover:bg-neon/20 transition-all duration-300 group-hover:scale-105 border border-neon/20">
                            <CalendarDays className="w-5 h-5 text-neon" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            {t('title')}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md" aria-label="Main Navigation">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group">
                                <link.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-neon transition-all" />
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="lg:hidden p-2 text-white/70 hover:text-white relative z-50 rounded-xl bg-white/5 border border-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 bg-background/95 backdrop-blur-3xl z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="flex flex-col items-center justify-center h-full gap-8 px-6" aria-label="Mobile Navigation">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-4 text-2xl font-bold text-white/80 hover:text-neon transition-colors"
                        >
                            <link.icon className="w-6 h-6" />
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
