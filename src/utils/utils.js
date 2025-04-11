export const getNextTenDays = (customDate) => {
    const dates = [];
    const today = new Date(customDate);

    for (let i = 0; i <= 10; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        dates.push(nextDate.toISOString().split('T')[0]); // Format: YYYY-MM-DD
    }

    return dates;
};