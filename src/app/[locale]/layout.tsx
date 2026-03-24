import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Datumsrechner | Date Calculator",
    description: "Advanced Date and Time Calculator",
};

export default async function LocaleLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${inter.variable} h-full antialiased dark`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": "Datumsrechner",
                            "applicationCategory": "CalculatorApplication",
                            "operatingSystem": "All",
                            "offers": {
                                "@type": "Offer",
                                "price": "0"
                            }
                        })
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col selection:bg-neon/30">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <div className="flex-1 flex flex-col z-10">{children}</div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
