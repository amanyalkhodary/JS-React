const meals = [
    { name: "شاورمااااا", price: 15 },
    { name: "مكسيكي برجر", price: 45 },
    { name: "باظظ", price: 55 },
    { name: "يطاطس", price: 10 },

];

function suggestMeals(budget) {
    let selectedMeals = [];
    let currentTotal = 0;

    for (let meal of meals) {
        if (currentTotal + meal.price <= budget) {
            selectedMeals.push(meal.name);
            currentTotal += meal.price;
        }
    }


    console.log("الوجبات المقترحة:", selectedMeals);
    console.log("المجموع:", currentTotal);

}
suggestMeals(55);