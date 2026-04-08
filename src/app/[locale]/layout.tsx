import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import "../globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Datumsrechner | Date Calculator",
    description: "Advanced Date and Time Calculator – free, precise, and ISO 8601 compliant.",
};

const siteUrl = "https://www.datumsrechner.de";

export default async function LocaleLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "@id": `${siteUrl}/#webapp`,
        "name": locale === "de" ? "Datumsrechner" : "Date Calculator",
        "url": siteUrl,
        "applicationCategory": "CalculatorApplication",
        "operatingSystem": "All",
        "inLanguage": locale,
        "description": locale === "de"
            ? "Kostenloser Online-Datumsrechner für exakte Zeitspannen, Fristen und Arbeitstage – ISO 8601 konform."
            : "Free online date calculator for exact durations, deadlines and business days – ISO 8601 compliant.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
        },
        "creator": {
            "@type": "Organization",
            "name": "Datumsrechner",
            "url": siteUrl
        },
        "featureList": [
            "Date difference calculator",
            "Add/subtract days from a date",
            "Business days calculator",
            "Age calculator",
            "Countdown to events"
        ],
        "browserRequirements": "Requires JavaScript. Works in all modern browsers."
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Datumsrechner",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/og-image.png`,
            "width": 1200,
            "height": 630
        },
        "sameAs": []
    };

    return (
        <html lang={locale} className={`${inter.variable} h-full antialiased dark`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
            <body className="min-h-full flex flex-col selection:bg-neon/30">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main id="main-content" className="flex-1 flex flex-col z-10" tabIndex={-1}>
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
