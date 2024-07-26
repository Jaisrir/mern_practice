// function palindrome(){
//     var a=document.getElementById("input-text").value;
//     let i =0;
//     let j =a.length-1;
// while(i<=j){
//     if(a.charAt(i)===a.charAt(j)){
//     document.getElementById("result").innerHTML=a +" is PALINDROME"

// }else{
//     document.getElementById("result").innerHTML=a +" is NOT-PALINDROME"
// }
// i++
// j--

// }

    
// }
// palindrome();

function palindrome(){
    var a=document.getElementById("input-text").value;
    let i =0;
    let j =a.length-1;
while(i<=j){
    if(a.charAt(i)!=a.charAt(j)){
    document.getElementById("result").innerHTML=a +" is NOT-PALINDROME"

}else{
    document.getElementById("result").innerHTML=a +" is PALINDROME"
}
i++
j--

}

    
}
palindrome();