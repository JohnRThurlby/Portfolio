// Developed by John R. Thurlby, March. 2018.

$(document).ready(function() {

	$('#carousel-auto').carousel();
 
  setInterval(function() {
 
    $('#carousel-auto').carousel('next');
 
  }, 2500);

  $('.modal').modal();

  
   // Capture the form inputs
   $("#submit").on("click", function() {

    console.log("in submit")
   });
		
});