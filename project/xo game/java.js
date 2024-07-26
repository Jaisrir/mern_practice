let val = "X";

    function update(obj){
        if(obj.innerHTML == ""){
            if(val == "X"){
                obj.innerHTML = val;
                val = "O";
            }
            else{
                obj.innerHTML = val;
                val = "X";
            }
        }
        
    }
    
 