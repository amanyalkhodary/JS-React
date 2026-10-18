
let car = {
    passengerFare: 3,
    tripsPerDay: 15,
    minPassengers: 25,
    maxPassengers: 30,
    nonPayingPercentage: 15,
    maintenancePercentage: 40,
    fuelPercentage: 30,
    workingDaysPerWeek: 6,
    weeksPerMonth: 4
};

function calculateGrossRevenue(car, passengersPerTrip) {
    return car.passengerFare * passengersPerTrip * car.tripsPerDay;
}


function calculateActualRevenue(car, grossRevenue) {
    return grossRevenue * (1 - car.nonPayingPercentage / 100);
}


function calculateMaintenance(car, grossRevenue) {
    return grossRevenue * car.maintenancePercentage / 100;
}


function calculateFuel(car, grossRevenue) {
    return grossRevenue * car.fuelPercentage / 100;
}

function calculateDailyProfit(car, passengersPerTrip) {
    let grossRevenue = calculateGrossRevenue(car, passengersPerTrip);
    let actualRevenue = calculateActualRevenue(car, grossRevenue);
    let maintenance = calculateMaintenance(car, grossRevenue);
    let fuel = calculateFuel(car, grossRevenue);

    return actualRevenue - maintenance - fuel;
}


function calculateWeeklyProfit(car, passengersPerTrip) {
    return calculateDailyProfit(car, passengersPerTrip)
        * car.workingDaysPerWeek;
}

function calculateMonthlyProfit(car, passengersPerTrip) {
    return calculateWeeklyProfit(car, passengersPerTrip)
        * car.weeksPerMonth;
}

function calculateFinalMonthlyProfit(car, passengersPerTrip, repairCost) {
    return calculateMonthlyProfit(car, passengersPerTrip) - repairCost;
}

let passengers = Number(
    prompt("أدخلي عدد الركاب في الرحلة (25 أو 30):")
);

let repairCost = Number(
    prompt("أدخلي تكلفة العطل الإضافي خلال الشهر:")
);

if (passengers < car.minPassengers || passengers > car.maxPassengers) {
    console.log("عدد الركاب يجب أن يكون بين 25 و30.");


} else if (repairCost < 0 || !Number.isFinite(repairCost)) {


    console.log("تكلفة العطل غير صحيحة.");

} else {
    let grossRevenue = calculateGrossRevenue(car, passengers);

    let actualRevenue = calculateActualRevenue(car, grossRevenue);

    let maintenance = calculateMaintenance(car, grossRevenue);

    let fuel = calculateFuel(car, grossRevenue);
      
    let dailyProfit = calculateDailyProfit(car, passengers);

    let weeklyProfit = calculateWeeklyProfit(car, passengers);

    let monthlyProfit = calculateMonthlyProfit(car, passengers);

    let finalProfit = calculateFinalMonthlyProfit(
        car, passengers, repairCost
    );

    console.log("الإيراد الإجمالي اليومي:", grossRevenue, "شيكل");
    console.log("الإيراد الفعلي اليومي:", actualRevenue, "شيكل");
    console.log("مصاريف الصيانة اليومية:", maintenance, "شيكل");
    console.log("مصاريف المحروقات اليومية:", fuel, "شيكل");
    console.log("صافي الربح اليومي:", dailyProfit, "شيكل");
    console.log("صافي الربح الأسبوعي:", weeklyProfit, "شيكل");
    console.log("صافي الربح الشهري:", monthlyProfit, "شيكل");
    console.log("الربح الشهري بعد خصم العطل:", finalProfit, "شيكل");
}

