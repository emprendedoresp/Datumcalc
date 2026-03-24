import {
    differenceInDays,
    differenceInWeeks,
    differenceInMonths,
    differenceInYears,
    addDays, addWeeks, addMonths, addYears,
    subDays, subWeeks, subMonths, subYears,
    differenceInBusinessDays,
    addBusinessDays,
    isValid
} from 'date-fns';

export type TimeUnit = 'days' | 'weeks' | 'months' | 'years';
export type Operation = 'add' | 'subtract';

/**
 * 1. Date Difference
 */
export function calculateDateDifference(start: Date, end: Date) {
    if (!isValid(start) || !isValid(end)) return null;

    const isNegative = start > end;
    const s = isNegative ? end : start;
    const e = isNegative ? start : end;

    const totalDays = differenceInDays(e, s);

    const years = differenceInYears(e, s);
    const afterYears = addYears(s, years);
    const months = differenceInMonths(e, afterYears);
    const afterMonths = addMonths(afterYears, months);
    const days = differenceInDays(e, afterMonths);

    return {
        totalDays: (isNegative ? -1 : 1) * totalDays,
        weeksAndDays: {
            weeks: Math.floor(totalDays / 7),
            days: totalDays % 7
        },
        yearsMonthsDays: { years, months, days }
    };
}

/**
 * 2. Add / Subtract Time
 */
export function calculateOffsetDate(base: Date, amount: number, unit: TimeUnit, operation: Operation): Date | null {
    if (!isValid(base)) return null;
    if (isNaN(amount) || !isFinite(amount)) return null;

    const opMap = {
        add: { days: addDays, weeks: addWeeks, months: addMonths, years: addYears },
        subtract: { days: subDays, weeks: subWeeks, months: subMonths, years: subYears }
    };
    return opMap[operation][unit](base, amount);
}

/**
 * 3. Business Days
 */
export function getBusinessDays(start: Date, end: Date) {
    if (!isValid(start) || !isValid(end)) return null;
    return differenceInBusinessDays(end, start);
}

export function addBusinessDaysOffset(base: Date, amount: number) {
    if (!isValid(base) || isNaN(amount)) return null;
    return addBusinessDays(base, amount);
}

/**
 * 4. Age Calculator
 */
export function calculateAge(birthdate: Date, targetDate: Date = new Date()) {
    if (!isValid(birthdate) || !isValid(targetDate)) return null;

    const years = differenceInYears(targetDate, birthdate);
    const dateAfterYears = addYears(birthdate, years);
    const months = differenceInMonths(targetDate, dateAfterYears);
    const dateAfterMonths = addMonths(dateAfterYears, months);
    const days = differenceInDays(targetDate, dateAfterMonths);
    const totalDays = differenceInDays(targetDate, birthdate);

    return { years, months, days, totalDays };
}
