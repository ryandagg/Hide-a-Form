$(document).on('ready', function() {
  $(".submitBtn").on('click', function(){
  	// console.log("click")
  	console.log($('.profileUpdate').is(":hidden"))
  	console.log($(".profileUpdate").is(":visible"))

  	if($('.profileUpdate').is(":hidden")) {
	  	$(".profileUpdate").show();
	  	$(".submitBtn").text("Submit & Hide");
	}
  	else {
  		$(".profileUpdate").hide();
  		$(".submitBtn").text("Update");
  		$(".nameOut").text($(".nameIn").val());
  		$(".emailOut").text($(".emailIn").val());
  		$(".preferenceOut").text($(".preferenceIn").val());
  	}
  })
});