let input = prompt("enter a positive number:");

let number = Number(input);

if (input === null || inputnput.trim() === "" || isNaN(number) || number < 0) {
    console.log("pleace enter a volid positive number !");
} else {
    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }

    console.log(`The factorial of ${number} is:${factorial}`);
}






