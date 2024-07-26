function add() {
    var a=Number(document.getElementById("valu_1").value);
    var b=Number(document.getElementById("valu_2").value);
    if(a >5 && a < 300){
        if(b>50 && b<300){
            var c=b/100;
            var d=c*c;
            e=a/d;
            e = Math.round(e*10)/10;
            document.getElementById("result").innerHTML=e;
             

          }  else{
            document.getElementById("result").innerHTML="Invalid Height";
        }

    }
    else{
        document.getElementById("result").innerHTML="Invalid weight";
    }
    
    
}
