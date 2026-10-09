let text="نص طويل";

if(text.length >200){

    let result=text.slice(0,20) +".". repeat(text.length -40)+text.slice(-20);

console.log(result);
}
