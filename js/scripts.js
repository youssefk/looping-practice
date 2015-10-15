$(document).ready(function() {
  var flavors = ["chocolate", "vanilla", "cookie dough", "rainbow sherbert"]
  for (index = 0; index < flavors.length; index += 1){
    $('#flavorlist ul').append("<li>" + flavors[index] + "</li>");
  }

});
