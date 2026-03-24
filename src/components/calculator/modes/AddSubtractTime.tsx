'use client';

import { useState } from 'react';
import { calculateOffsetDate, TimeUnit, Operation } from '@/lib/calculator';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

export function AddSubtractTime() {
    const [baseDate, setBaseDate] = useState<string>('');
    const [amount, setAmount] = useState<number | ''>('');
    const [unit, setUnit] = useState<TimeUnit>('days');
    const [operation, setOperation] = useState<Operation>('add');

    const calculate = () => {
        if (!baseDate || amount === '' || isNaN(amount)) return null;
        return calculateOffsetDate(new Date(baseDate), Number(amount), unit, operation);
    };

    const result = calculate();

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-white/80">Aktion</label>
                    <select
                        value={operation}
                        onChange={(e) => setOperation(e.target.value as Operation)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors appearance-none"
                    >
                        <option value="add" className="bg-background text-white">Addieren</option>
                        <option value="subtract" className="bg-background text-white">Subtrahieren</option>
                    </select>
                </div>

                <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-white/80">Anzahl</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value === '' ? '' : parseInt(e.target.value))}
                        min="0"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                </div>

                <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-white/80">Einheit</label>
                    <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value as TimeUnit)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors appearance-none"
                    >
                        <option value="days" className="bg-background text-white">Tage</option>
                        <option value="weeks" className="bg-background text-white">Wochen</option>
                        <option value="months" className="bg-background text-white">Monate</option>
                        <option value="years" className="bg-background text-white">Jahre</option>
                    </select>
                </div>

                <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-white/80">Startdatum</label>
                    <input
                        type="date"
                        value={baseDate}
                        onChange={(e) => setBaseDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
            </div>

            {result && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 space-y-4">
                    <h3 className="text-lg font-medium text-white/80">Ergebnis Datum</h3>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-neon-blue">
                        {format(result, 'EEEE, dd. MMMM yyyy', { locale: de })}
                    </p>
                </div>
            )}
        </div>
    );
}
