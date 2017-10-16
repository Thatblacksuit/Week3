$( document ).ready(function() {
    console.log( "ready!" );

    var count = 1
    
    //Store Data
window.localStorage.setItem("pen", "Blue");
window.localStorage.setItem("phone", "Samsung");
window.localStorage.setItem("notepad", "Lined");
window.localStorage.setItem("laptop", "Asus");
window.localStorage.setItem("watch", "Timex");
  
    //Retrieve Data
var Item1 = window.localStorage.getItem("pen");
var Item2 = window.localStorage.getItem("phone");
var Item3 = window.localStorage.getItem("notepad");
var Item4 = window.localStorage.getItem("laptop");
var Item5 = window.localStorage.getItem("watch");
    


    //Display Data
$("#result1").text(Item1);
$("#result2").text(Item2);
$("#result3").text(Item3);
$("#result4").text(Item4);
$("#result5").text(Item5);
    
$("#numberofitems").text(localStorage.length);    
});