'use client';

import { useState } from 'react';
import { calculateDateDifference } from '@/lib/calculator';
import { format } from 'date-fns';

export function DateDifference() {
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');

    const calculate = () => {
        if (!start || !end) return null;
        return calculateDateDifference(new Date(start), new Date(end));
    };

    const result = calculate();

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Startdatum</label>
                    <input
                        type="date"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Enddatum</label>
                    <input
                        type="date"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
            </div>

            {result && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 space-y-4">
                    <h3 className="text-lg font-medium text-white/80">Ergebnis</h3>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-neon-blue">
                        {result.totalDays} Tage
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                        <div>
                            <p className="text-sm text-white/50">Wochen</p>
                            <p className="font-medium">{result.weeksAndDays.weeks} w, {result.weeksAndDays.days} t</p>
                        </div>
                        <div>
                            <p className="text-sm text-white/50">Jahre, Monate, Tage</p>
                            <p className="font-medium">{result.yearsMonthsDays.years} j, {result.yearsMonthsDays.months} m, {result.yearsMonthsDays.days} t</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
