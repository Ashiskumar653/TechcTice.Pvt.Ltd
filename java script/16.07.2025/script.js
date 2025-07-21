//   function greeting(){
//      console.log("Hello there")
//  }

//  greeting()

 function sum(num1, num2){
     return  num1+num2
 }
 let abc= sum(3,9);
 document.getElementById("demo").innerHTML=abc;
 console.log(abc);


//  function greetUser(){
//      let message = "Hey there! Welcome to my app!!"
//      return message ;
//  }

const laptop = {
    name: "Asus",
    proccesor: "intel-corei7",
    gen:"7gen",

    type: function() {
        console.log("Welcome to " + laptop.name + " " + laptop.proccesor + " " + laptop.gen);
    }
};
laptop.type();
