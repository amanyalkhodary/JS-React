let secretNumber = Math.floor(Math.random() * 50) + 1;
let guess;

while (guess !== secretNumber) {
    guess = +prompt("خمن الرقم من 1 إلى 50:");

    if (guess < secretNumber) {
        alert("اعلى");

    } else if (guess > secretNumber) {
        alert("اقل")
    }

}
alert("مبروك الفوز")