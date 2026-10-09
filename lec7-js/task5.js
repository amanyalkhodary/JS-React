const choices = ["حجر", "ورقة", "مقص"];

let userChoice = prompt("(حجر او ورقة او مقص):اختر");


if (!choices.includes(userChoice)) {
    alert("ادخال خاطئ ! يجب كتابة:حجر او ورقة او مقص");

} else {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    if (userChoice === computerChoice) {
        alert(`تعادل! أنت اخترت (${userChoice}) والكمبيوتر اختار (${computerChoice})`)

    } else if (
        (userChoice === "حجر" && computerChoice === "مقص") || (userChoice === "ورقة" && computerChoice === "حجر") || (userChoice === "مقص" && computerChoice === "ورقة ")
    ) {
        alert(`مبروك فزت! أنت (${userChoice}) والكمبيوتر (${computerChoice})`);
    } else {
        alert(`للأسف خسرت! أنت (${userChoice}) والكمبيوتر (${computerChoice})`);
    }


}
