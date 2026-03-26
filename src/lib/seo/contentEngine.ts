/**
 * Anti-Thin Content System
 * Core logic to generate programmatic, semi-unique SEO content.
 */

const EXPLANATION_TEMPLATES = [
    (num: number, unit: string) => `Die genaue Berechnung von ${num} ${unit} in der Zukunft oder Vergangenheit erfordert Präzision. Unser Rechner nimmt Ihnen diese Arbeit ab und berücksichtigt alle kalendarischen Besonderheiten, wie etwa Schaltjahre oder unregelmäßige Monatslängen.`,
    (num: number, unit: string) => `Wenn Sie wissen möchten, welches Datum genau in ${num} ${unit} ist, sind Sie hier richtig. Dieses Tool liefert Ihnen sofort das exakte Ergebnis in Echtzeit, sodass Sie keine Kalenderseiten mehr zählen müssen.`,
    (num: number, unit: string) => `Egal, ob Sie ein Projekt planen oder einen wichtigen Meilenstein im Auge behalten wollen: Zu wissen, was in exakt ${num} ${unit} passiert, ist entscheidend. Wir berechnen das Datum absolut fehlerfrei für Sie.`,
    (num: number, unit: string) => `Eine Frist von ${num} ${unit} kann im Alltag oder im Berufsleben schnell vorkommen. Lassen Sie unseren Algorithmus die exakte Bestimmung des Zieldatums übernehmen, damit Sie sich auf das Wesentliche konzentrieren können.`
];

const USE_CASES = [
    'Projektmanagement und Meilenstein-Planung',
    'Vertragsfristen und Kündigungsfristen',
    'Reisevorbereitungen und Visa-Gültigkeiten',
    'Schwangerschafts-Countdowns oder Hochzeitsplanung',
    'Prüfungsvorbereitungen für Schule und Studium',
    'Ablaufdaten für Lizenzen und Zertifikate'
];

/**
 * Deterministically pick an item from an array based on a number to ensure
 * the same URL always gets the same content variation.
 */
function pickVariation<T>(arr: T[], seed: number): T {
    const index = seed % arr.length;
    return arr[index];
}

export function generateContextualInsight(num: number, unit: string): string {
    if (unit === 'tage') {
        const monthsApprox = (num / 30.44).toFixed(1);
        const weeksApprox = (num / 7).toFixed(1);
        if (num >= 30 && num < 365) {
            return `Zur Einordnung: ${num} Tage entsprechen ungefähr ${monthsApprox} Monaten oder ${weeksApprox} Wochen. Dies ist ein typischer Zeitraum für mittelfristige Zielsetzungen.`;
        } else if (num >= 365) {
            const yearsApprox = (num / 365.25).toFixed(1);
            return `Zur Einordnung: ${num} Tage entsprechen rund ${yearsApprox} Jahren. Ein beachtlicher Zeitraum, in dem exakte Kalenderberechnungen unerlässlich sind.`;
        } else if (num >= 7) {
            return `Zur Einordnung: ${num} Tage sind exakt ${weeksApprox} Wochen.`;
        }
    }
    return `Die Berechnung von ${num} ${unit} ist ein Standardverfahren im täglichen Zeitmanagement.`;
}

export function generateSEOContent(intent: string, slug: string, numValue?: number): { paragraphs: string[], useCases: string[] } {
    const seed = numValue || slug.length;
    
    // 1. Unique Explanation (Rotation)
    const unit = slug.includes('tage') ? 'Tage' : slug.includes('monate') ? 'Monate' : slug.includes('jahre') ? 'Jahre' : 'Einheiten';
    const explanation = EXPLANATION_TEMPLATES[seed % EXPLANATION_TEMPLATES.length](numValue || 0, unit);

    // 2. Contextual Insight
    const insight = numValue ? generateContextualInsight(numValue, unit.toLowerCase()) : 'Egal welches Datum Sie berechnen, Genauigkeit steht an erster Stelle.';

    // 3. Meaning & Depth (Anti-thin expansion to hit word count)
    const depthPara = `Die manuelle Berechnung von Datumsdifferenzen wie beim Thema ${intent} ${slug.replace(/-/g, ' ')} ist oft fehleranfällig. Ein bloßes Überschlagen reicht gerade im rechtlichen oder geschäftlichen Kontext nicht aus. Unser Programmcode nutzt modernste Zeitbibliotheken, um Schaltsekunden, Zeitzonenwechsel und länderspezifische Feiertagsregelungen (sofern aktiviert) in die Kalkulation mit einzubeziehen.`;

    // 4. Use cases picking
    const pickedCases = [
        pickVariation(USE_CASES, seed),
        pickVariation(USE_CASES, seed + 1),
        pickVariation(USE_CASES, seed + 2)
    ];

    return {
        paragraphs: [explanation, insight, depthPara],
        useCases: pickedCases
    };
}

export function generateDynamicFAQs(intent: string, slug: string, numValue?: number) {
    const unit = slug.includes('tage') ? 'Tage' : slug.includes('monate') ? 'Monate' : 'Einheiten';
    const valueStr = numValue ? `${numValue} ${unit}` : slug.replace(/-/g, ' ');

    return [
        {
            question: `Wie genau funktioniert der Rechner für ${valueStr}?`,
            answer: `Der Rechner analysiert das Startdatum und addiert oder subtrahiert exakt ${valueStr} unter Berücksichtigung von Schaltjahren und exakten Monatslängen.`
        },
        {
            question: numValue && unit === 'Tage' ? `Ist ${valueStr} ungefähr ${(numValue / 30.4).toFixed(1)} Monate?` : `Wofür nutzt man die Berechnung von ${valueStr}?`,
            answer: numValue && unit === 'Tage' ? `Ja, mathematisch gesehen entsprechen ${valueStr} etwa ${(numValue / 30.4).toFixed(1)} Monaten, da ein durchschnittlicher Monat 30,44 Tage hat.` : `Typischerweise für Fristenberechnungen, Projektplanung und persönliche Countdowns.`
        },
        {
            question: `Berücksichtigt das Tool bei ${valueStr} auch Wochenenden?`,
            answer: `Standardmäßig werden bei der Addition von Laufzeiten alle Kalendertage (inkl. Wochenenden) gezählt. Für reine Werktage nutzen Sie unseren separaten Arbeitstage-Rechner.`
        }
    ];
}
