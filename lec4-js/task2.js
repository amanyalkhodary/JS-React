const users = [
    { name: "Ahmed", email: "ahmad@gmail.com", type: "admin" },
    { name: "Amany", email: "amany@gmail.com", type: "user" },
    { name: "aseel", email: "aseel@gmail.com", type: "admin" },
    { name: "Nedaa", email: "nedaa@gmail.com", type: "user" },
    { name: "karam", email: "karam@gmail.com", type: "admin" },
    { name: "Eman", email: "eman@gmail.com", type: "user" },
    { name: "Mohammed", email: "mohammed@gmail.com", type: "admin" },
];
let adminCount = 0;
let userCount = 0;

users.forEach((user) => {
    if (user.type === "admin") {
        userCount++;
    } else if (user.type === "user") {
        userCount++;
    }
});

console.log("Admin Count:", adminCount);
console.log("User Count:", userCount);