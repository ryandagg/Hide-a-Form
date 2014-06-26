$(document).on('ready', function() {
  $(".submitBtn").on('click', function(){
  	// console.log("click")
  	$(".profileUpdate").show();
  	$(".submitBtn").text("Submit & Hide")

  	// submit information & udate static profile
  	$(".submitBtn").on("click", function(){
  		// console.log("click")
  		$(".profileUpdate").hide();
  		$(".submitBtn").text("Update");
  	})
  })
});