let numberOfProducts=Number(
    prompt("Enter  number of products:")
);
let total=0;
let discountProducts=0;

for(let i=0; i< numberOfProducts; i++){

    let productName=prompt("Enter product name:");

    let price=Number(
        prompt("Enter product price:")
    );

    let quantity=Number(
        prompt("Enter quantity:")
    );

    let productTotal=price*quantity;

if(quantity >10){
    productTotal=productTotal*0.90;
    discountProducts++;

}
total=total+productTotal;

}

if(total>500 && discountProducts <2){
    total=total*0.08;
}

console.log("Final total:"+total);






