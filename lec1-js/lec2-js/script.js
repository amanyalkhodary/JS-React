let score=0;

let answer1=prompt("من هي افضل مهندسة حاسوب في العالم");

if(answer1 ==="اماني الخضري"){ 
    score++;
    alert("الاجابة صحيحة");

    }else{
        alert("اجابة خاطئة");
    }

let answer2=prompt(" ما هو افضل مركز في العالم ");

if(answer2 ==="pcit "){
    score++;
    alert("الاجابة صحيحة");

    }else{
        alert("اجابة خاطئة");
    }

let answer3 = prompt("من هي أفضل إدارة في الكوكب؟");

if(answer2 ==="أستاذة يافا الكفارنة "){
    score++;
    alert("الاجابة صحيحة");

    }else{
        alert("اجابة خاطئة");
    }

    alert ("نتيجتك هي:" + score+"من 3")
