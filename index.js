function calculate(){
    var first = parseInt(document.getElementById("first"). value) ;
    var second = parseInt(document.getElementById("second"). value );
    var operator = document.getElementById("operator"). value ;
    if(operator==="add"){
  document.getElementById("result").value = first+second;
    }
    if(operator==="subtract"){
        document.getElementById("result").value = first-second;
          }
          if(operator==="multiply"){
            document.getElementById("result").value = first*second;
              }
            if(operator==="divide"){
                document.getElementById("result").value = first/second;
                  }
}
