/*
Code In Line 113
*/
for(var count =1; count<11;count++){
    var text = document.createTextNode(count);
    var conta = document.getElementById("cont");
    var newNum = document.createElement("div");
    var br = document.createElement("br");
    if(count==4 || count==7 || count==10){
      conta.appendChild(br)
    }
    newNum.classList.add("number");
    newNum.classList.add("animated");
    newNum.classList.add("bounceIn");
    newNum.id = "yo"+count
    if(count==10){
      text = document.createTextNode("0");
    }
    newNum.appendChild(text);
    conta.appendChild(newNum);
  }
  var x = document.getElementById("x");
  x.addEventListener("click", function(){
    document.getElementById("field").value = "";
    /* A Cool Way Could Be:
    document.getElementById("field").classList.remove("bounceInUp");
    document.getElementById("field").classList.add("fadeOutUp");
    document.getElementById("field").classList.remove("fadeOutUp");
    document.getElementById("field").classList.add("bounceInUp");
   */
    counter=0;
  });
  
  var field = document.getElementById("field").innerHTML;
  var nums = document.getElementsByClassName("number");
  
  //making buttons add their values but not do more then 4 digits with counter
  //function just to get rid of this mess
  var counter =0
  func()
  
  function func(){
  nums[0].onclick = function(){
    if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "1";
    counter= counter+1
    }//else{check()} For Auto Check
  };
  nums[1].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "2";
    counter= counter+1
      }
  };
  
  nums[2].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "3";
    counter= counter+1
    }
  };
  
  nums[3].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "4";
    counter= counter+1
    }
  };
  
  nums[4].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "5";
    counter= counter+1
    }
  };
  
  nums[5].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "6";
    counter= counter+1
    }
  };
  nums[6].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "7";
    counter= counter+1
    }
  };
  
  nums[7].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "8";
    counter= counter+1
    }
  };
  nums[8].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "9";
    counter= counter+1
    }
  };
  
  nums[9].onclick = function(){
      if(counter<2){
      document.querySelector("input").value = document.querySelector("input").value + "0";
    counter= counter+1
    }
  };
  }
  document.querySelector("div").classList.add("animated")
  var animation="bounce"
  function check(){
    if(document.querySelector("input").value=="27"){
      document.querySelector("h2").innerHTML = "Correcto";
      document.querySelector("div").classList.add("animated","bounceOut");
      window.location.href = "http://rauljimenezgal.me/cmVnYWxvX2Nhcmxvc19jdW1wbGVfMjAyMQ==/cmVnYWxva2V5.html";
    }else{
      document.querySelector("h2").innerHTML = "Nope :c";
      document.getElementById("field").value = "";
        if(animation=="bounce"){
          document.querySelector("div").classList.remove("shake");
          document.querySelector("div").classList.add("bounce");
          animation="shake";
        }else{
          document.querySelector("div").classList.remove("bounce");
          document.querySelector("div").classList.add("shake");
          animation="bounce";
        }
      counter=0
    }
  }