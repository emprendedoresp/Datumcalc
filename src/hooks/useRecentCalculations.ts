import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CalculationRecord = {
    id: string;
    type: 'differenz' | 'add_subtract' | 'business_days' | 'age';
    title: string;
    result: string;
    timestamp: Date;
};

interface RecentCalculationsState {
    history: CalculationRecord[];
    addCalculation: (record: Omit<CalculationRecord, 'id' | 'timestamp'>) => void;
    clearHistory: () => void;
    removeCalculation: (id: string) => void;
}

export const useRecentCalculations = create<RecentCalculationsState>()(
    persist(
        (set) => ({
            history: [],
            addCalculation: (record) => set((state) => {
                const newRecord: CalculationRecord = {
                    ...record,
                    id: Math.random().toString(36).substring(2, 9),
                    timestamp: new Date()
                };
                // Keep last 10 records
                const updatedHistory = [newRecord, ...state.history].slice(0, 10);
                return { history: updatedHistory };
            }),
            clearHistory: () => set({ history: [] }),
            removeCalculation: (id) => set((state) => ({
                history: state.history.filter(r => r.id !== id)
            }))
        }),
        {
            name: 'datumsrechner-history',
        }
    )
);
