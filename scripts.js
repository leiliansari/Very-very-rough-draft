$("document").ready(function(){


	// $(".hide").hide();
	$(".hidePhoto").hide();

	$(".dropdown").click(dropDown);

	function dropDown(){ 
		$(".hide").slideToggle();
		// $(".hide").slideDown();
		// $(".dropdown").attr("id","drawUp");
		console.log("something happening!");
		};

	// $("#drawUp").click(drawItUp);

	// function drawItUp(){
	// 	$(".hide").slideUp();
	// 	console.log("not going up?");
	// };

	});
