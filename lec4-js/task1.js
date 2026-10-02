let userName=prompt("Enter your name:");
let userAge=prompt("Enter your age:")

let user={

    name:userName,
    age:Number(userAge),
    hasAccess:Number(userAge) >20 ?true:false
};
console.log(user);
