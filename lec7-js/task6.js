 const bannedWords=["تواصل","خارج","تيليجرام","فيسبوك"];

 let message=prompt("ادخل نص الرسالة:");
 
 let count=0;

for(let i=0; i< bannedWords.length; i++){
    if(message.includes(bannedWords[i])){
        count++;
    }
}
if(count>=2){
    alert("!هذة الجملة غير مرغوب فيها  داخل المنصة (تحتوي ع محاولة تواصل خارجي)")
}else{
   alert("تم قبول الرسالة وارسالها بنجاح") 
}
