'use client';

import { useState } from 'react';
import { calculateAge } from '@/lib/calculator';

export function AgeCalculator() {
    const [birthdate, setBirthdate] = useState<string>('');

    const calculate = () => {
        if (!birthdate) return null;
        return calculateAge(new Date(birthdate));
    };

    const result = calculate();

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Geburtsdatum</label>
                    <input
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
            </div>

            {result && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 space-y-4">
                    <h3 className="text-lg font-medium text-white/80">Dein Alter</h3>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-neon-blue">
                        {result.years} Jahre
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                        <div>
                            <p className="text-sm text-white/50">Monate</p>
                            <p className="font-medium">{result.months}</p>
                        </div>
                        <div>
                            <p className="text-sm text-white/50">Tage</p>
                            <p className="font-medium">{result.days}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm text-white/50">Gesamte Lebenstage</p>
                            <p className="font-medium">{result.totalDays} Tage</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
