function calculateNetProfit(hoursPerDay, hourlyRate) {
    const operationalCostRate = hourlyRate <= 30 ? 0.40 : 0.20;

    const dailyGross = hoursPerDay * hourlyRate;
    const weeklyGross = dailyGross * 6;
    const weeklyNet = weeklyGross * (1 - operationalCostRate);
    const monthlyNet = weeklyNet * 4;

    console.log(`ساعات العمل اليومية: ${hoursPerDay}`);
    console.log(`سعر الساعة: ${hourlyRate}`);
    console.log(`نسبة التكاليف التشغيلية: ${operationalCostRate * 100}%`);
    console.log(`صافي الربح الأسبوعي: ${weeklyNet.toFixed(2)}`);
    console.log(`صافي الربح الشهري: ${monthlyNet.toFixed(2)}`);

    return {
        weeklyNet: weeklyNet,
        monthlyNet: monthlyNet
    };
}


calculateNetProfit(8, 30);