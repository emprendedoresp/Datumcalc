import Head from 'next/head';

export function FAQBlock({ intent, slug }: { intent: string; slug: string }) {
    const faqs = [
        {
            question: `Wie genau funktioniert der Rechner für ${intent} ${slug.replace(/-/g, ' ')}?`,
            answer: `Der Rechner analysiert die Eingabedaten millisekundengenau unter Berücksichtigung von Zeitzonen, Schaltjahren und standardisierten Tageslängen.`
        },
        {
            question: `Ist die Berechnung kostenlos?`,
            answer: `Ja, unser Rechner ist zu 100% kostenlos nutzbar, ohne Anmeldung oder versteckte Kosten.`
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Häufig gestellte Fragen (FAQ)</h2>

            {/* Script for JSON-LD is manually injected safely */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-neon-blue">{faq.question}</h3>
                        <p className="text-white/70">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
