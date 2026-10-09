function filter_email(email){
   return !email.toLowerCase().includes("test");
}

let count=parseInt(prompt("ادخل عدد المستخدمين:"));
let users=[];

for(let i=0; i< count; i++){
    let name=prompt(`ادخل اسم المستخدم ${i+1}:`);
    let email= prompt(`ادخل ايميل المستخدم${i+1}:`);

    users.push({name,email});

    let validUsers=users.filter(user =>filter_email(user.email));

    console.log("المستخدمون المقبولين:" ,validUsers);
    alert(`تم قبول ${validUsers.length} من اصل${count} مستخدمين`)
    
}
