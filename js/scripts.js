$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
   var sentence = $("input#sentence").val();
   var newArray = sentence.split(" ");
   var values = [];

   
     function findValue(value) {
       if( value === "mama"){
         values.push(value);
         values.length;
};


};

var filtered = newArray.filter(findValue);
$("#result").text("mama" + values.length);
$("#result").show();








});
});
