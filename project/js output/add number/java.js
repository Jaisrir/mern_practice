function  add() {
    var a=Number(document.getElementById("value_1").value);
    var b=Number(document.getElementById("value_2").value);
    var c=a+b;
    document.getElementById("result").innerHTML=c;
}
function  sub() {
    var a=Number(document.getElementById("value_1").value);
    var b=Number(document.getElementById("value_2").value);
    var c=a-b;
    document.getElementById("result").innerHTML=c;
}