
function Special() {

    document.getElementById("demo").innerHTML = "Dodge Grand Carvan";
}

function checkF() {
            var ch;
            ch = document.getElementById("checkfin").value;
              if(ch == "yes"){

                  document.getElementById("demo2").innerHTML = "You're approved!";
            }
              else if(ch == "Yes"){

                  document.getElementById("demo2").innerHTML = "You're approved!";
            }
              else if(ch == "Yes."){

                  document.getElementById("demo2").innerHTML = "You're approved!";
            }
              else if(ch == "yes."){

                  document.getElementById("demo2").innerHTML = "You're approved!";
            }
              else if(ch == "yes, I do."){

                  document.getElementById("demo2").innerHTML = "You're approved!";
            }
              else if(ch == "Yes, I do."){

                  document.getElementById("demo2").innerHTML = "You're approved!";
            }
            else {
                document.getElementById("demo2").innerHTML = "You are not approved. Please try again or visit us in person.";
          }

}
function checkButton() {
            if(document.getElementById('kona').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("kona").value
                    + " vehicle is selected.";
            }
            else if(document.getElementById('santafe').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("santafe").value
                    + " vehicle is selected.";
            }
            else if(document.getElementById('caravan').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("caravan").value
                    + " vehicle is selected.";
            }
            else if(document.getElementById('impala').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("impala").value
                    + " vehicle is selected.";
            }
            else {
                document.getElementById("error").innerHTML
                    = "You have not selected any car";
            }
        }
function checkName(){
  var ch;
  ch = document.getElementById("char").value;
  if (ch)
  {

        document.getElementById("sub").innerHTML = "Thanks!";
  }
  else {
      document.getElementById("sub").innerHTML = "Please submit a name.";
}
}
function checkCar(){

  var rand = Math.floor(Math.random() * 4) + 1
        if (rand == 1){
          document.getElementById("demo4").innerHTML = "You got the Caravan";
          document.getElementById("car").src = "images/van.png";
        }
        if (rand == 2){
          document.getElementById("demo4").innerHTML = "You got the Santa Fe";
          document.getElementById("car").src = "images/sfback.png";

        }
        if (rand == 3){
          document.getElementById("demo4").innerHTMl = "You got the Maxima (not for sale right now)";
          document.getElementById("car").src = "images/tc.png";
        }
        if (rand == 4){
          document.getElementById("demo4").innerHTML = "You got the Town and Country (not for sale right now)";
          document.getElementById("car").src = "images/maxima.png";
        }
}
