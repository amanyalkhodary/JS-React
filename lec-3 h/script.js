let purchases = Number(prompt("Enter the total purchase amount"))

let discount = 0;

if (purchases <= 200) {
    discount = 0;
} else {
    let discount15 = purchases * 0.15;

    if (discount15 > 100) {
        discount = purchases * 0.08;
    } else {
        discount = discount15
    }
}

let finalAmount = purchases - discount;

console.log("Purchase Amount:" + purchases + "NIS");
console.log("Discount:" + discount + "NIS");
console.log("Final Amount:" + finalAmount + "NIS");
