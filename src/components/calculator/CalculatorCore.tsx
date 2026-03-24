'use client';

import { useState } from 'react';
import { DateDifference } from './modes/DateDifference';
import { AddSubtractTime } from './modes/AddSubtractTime';
import { BusinessDays } from './modes/BusinessDays';
import { AgeCalculator } from './modes/AgeCalculator';

type Mode = 'difference' | 'add_subtract' | 'business_days' | 'age';

interface CalculatorCoreProps {
    initialMode?: Mode;
}

export function CalculatorCore({ initialMode = 'difference' }: CalculatorCoreProps) {
    const [activeMode, setActiveMode] = useState<Mode>(initialMode);

    const tabs: { id: Mode; label: string }[] = [
        { id: 'difference', label: 'Differenz' },
        { id: 'add_subtract', label: 'Addieren / Subtrahieren' },
        { id: 'business_days', label: 'Arbeitstage' },
        { id: 'age', label: 'Alter' },
    ];

    return (
        <div className="w-full">
            {/* Tabs Menu */}
            <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-black/20 rounded-2xl border border-white/5">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveMode(tab.id)}
                        className={`flex-1 min-w-[120px] px-4 py-3 text-[15px] font-medium rounded-xl transition-all ${activeMode === tab.id
                            ? 'bg-gradient-to-r from-neon to-neon-blue text-white shadow-[0_0_15px_rgba(255,0,85,0.3)]'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Calculator Body */}
            <div className="min-h-[300px]">
                {activeMode === 'difference' && <DateDifference />}
                {activeMode === 'add_subtract' && <AddSubtractTime />}
                {activeMode === 'business_days' && <BusinessDays />}
                {activeMode === 'age' && <AgeCalculator />}
            </div>
        </div>
    );
}
