export interface Article {
    slug: string;
    title: string;
    description: string;
    content: string;
    publishedAt: string;
    readTime: string;
}

export const articles: Article[] = [
    {
        slug: 'schaltjahre-erklaert',
        title: 'Schaltjahre einfach erklärt: Warum es den 29. Februar gibt',
        description: 'Alles, was du über Schaltjahre wissen musst. Erfahre, warum unser Kalender alle vier Jahre einen zusätzlichen Tag benötigt und wie das berechnet wird.',
        publishedAt: '24. März 2024',
        readTime: '3 min',
        content: `
      <h2>Was ist ein Schaltjahr?</h2>
      <p>Ein Schaltjahr hat 366 statt der üblichen 365 Tage. Der zusätzliche Tag wird ans Ende des Februars angehängt – der 29. Februar. Dies ist notwendig, um unseren Kalender mit dem Sonnenjahr (der Zeit, die die Erde braucht, um die Sonne zu umkreisen) zu synchronisieren.</p>
      
      <h2>Warum brauchen wir Schaltjahre?</h2>
      <p>Die Erde benötigt nicht genau 365 Tage für einen Umlauf um die Sonne, sondern etwa 365,2422 Tage. Wenn wir jedes Jahr streng auf 365 Tage setzen würden, würde sich unser Kalender alle vier Jahre um fast einen ganzen Tag verschieben. Nach 100 Jahren wären das 24 Tage! Der Sommer im Juli würde irgendwann im tiefsten Winter stattfinden.</p>
      
      <h2>Die Schaltjahr-Regel</h2>
      <p>Die Berechnung ist nicht ganz so einfach wie "alle vier Jahre". Die genaue globale Regel lautet:</p>
      <ul>
        <li>Ein Jahr ist ein Schaltjahr, wenn es durch 4 teilbar ist.</li>
        <li><strong>Ausnahme:</strong> Wenn das Jahr durch 100 teilbar ist, ist es <em>kein</em> Schaltjahr.</li>
        <li><strong>Ausnahme der Ausnahme:</strong> Wenn das Jahr durch 400 teilbar ist, ist es doch wieder ein Schaltjahr.</li>
      </ul>
      <p>Deshalb war das Jahr 2000 ein Schaltjahr, das Jahr 1900 jedoch nicht.</p>
    `
    },
    {
        slug: 'arbeitstage-berechnen',
        title: 'Wie berechnet man Arbeitstage und Werktage?',
        description: 'Der Unterschied zwischen Kalendertagen, Werktagen und Arbeitstagen. Ein Guide für rechtliche Fristen und die Projektplanung.',
        publishedAt: '22. März 2024',
        readTime: '4 min',
        content: `
      <h2>Arbeitstage vs. Werktage</h2>
      <p>In Deutschland, Österreich und der Schweiz gibt es rechtliche und praktische Unterschiede zwischen diesen wichtigen Begriffen:</p>
      <ul>
        <li><strong>Kalendertage:</strong> Jeder Tag im Jahr, von Montag bis Sonntag.</li>
        <li><strong>Werktage:</strong> Alle Tage von Montag bis Samstag (ausgenommen gesetzliche Feiertage). So ist es oft im Zivil- und Mietrecht geregelt.</li>
        <li><strong>Arbeitstage:</strong> Üblicherweise Montag bis Freitag (ausgenommen gesetzliche Feiertage). Das ist die klassische 5-Tage-Woche im Büro.</li>
      </ul>

      <h2>Warum ist die genaue Berechnung wichtig?</h2>
      <p>Bei Kündigungsfristen, Lieferzeiten oder Projektmeilensteinen macht es einen gewaltigen Unterschied. Wenn ein Vertrag eine Frist von "10 Arbeitstagen" vorsieht, bedeutet das faktisch zwei volle Kalenderwochen inklusive der übersprungenen Wochenenden.</p>
      
      <h2>Automatische Berechnung</h2>
      <p>Die manuelle Zählung im Kalender ist fehleranfällig, insbesondere wenn Monate den Jahreswechsel kreuzen. Unser in die Plattform integrierter <strong>Arbeitstage-Rechner</strong> filtert automatisch die Wochenenden (Samstag und Sonntag) heraus, damit du stets die exakte Anzahl der Netto-Arbeitstage erhältst.</p>
    `
    },
    {
        slug: 'wochen-im-jahr',
        title: 'Wie viele Wochen hat ein Jahr?',
        description: 'Hat ein Jahr immer 52 Wochen? Erfahre mehr über ISO-Wochen, Schaltjahre und warum manche Jahre 53 Wochen haben.',
        publishedAt: '20. März 2024',
        readTime: '2 min',
        content: `
      <h2>Die 52-Wochen-Regel</h2>
      <p>Normalerweise geht man von 52 Wochen pro Jahr aus. Teilt man 365 durch 7 (Tage pro Woche), erhält man exakt 52,14. Ein normales Jahr hat also 52 volle Wochen und einen restlichen Tag. Ein Schaltjahr hat 52 Wochen und 2 restliche Tage.</p>

      <h2>Wann gibt es eine 53. Kalenderwoche?</h2>
      <p>In Europa richtet sich die Wochenzählung nach der strikten DIN-Norm (ISO 8601). Diese besagt auf internationaler Ebene:</p>
      <blockquote style="border-left: 4px solid #ff0055; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1rem; font-style: italic; background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.5rem;">
        Die Kalenderwoche 1 ist diejenige Woche, die den ersten Donnerstag des Jahres enthält.
      </blockquote>
      <p>Dadurch kommt es vor, dass ein Jahr 53 Kalenderwochen hat. Dies passiert immer dann, wenn ein gewöhnliches Jahr an einem Donnerstag beginnt (oder ein Schaltjahr an einem Mittwoch oder Donnerstag ansetzt).</p>

      <h2>Fazit zur Planung</h2>
      <p>Für die Gehaltsabrechnung, Urlaubsplanung oder Projektsteuerung ist die Kalenderwoche ein essenzielles Maß. Mit unserem Datumsrechner kannst du dir jegliche Kalender-Metriken jederzeit genau anzeigen lassen.</p>
    `
    }
];

export function getArticleBySlug(slug: string) {
    return articles.find(a => a.slug === slug);
}
