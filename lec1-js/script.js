function checkEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;


    if (email.includes("@gmail.com")) {
        document.getElementById("result").innerHTML = "الايميل المدخل صحيح"

    } else {
        document.getElementById("result").innerHTML = "الايميل خاطئ"
    }


}
