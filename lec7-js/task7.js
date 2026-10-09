function checkOverLoad(users) {

    const totalWeight = users.reduce((sum, user) => sum + user.weight, 0);


    if (users.length >= 10 || totalWeight > 1000) {
        console.log("حمولة زائدة ");

    } else {
        console.log("الحمولة ضمن الحد المسموح به")
    }


}
const userList = [
    { name: "User1", weight: 80 },
    { name: "User2", weight: 95 },
];
checkOverLoad(usrerList);
