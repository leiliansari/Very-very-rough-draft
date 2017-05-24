$("document").ready(function(){


	// $(".hide").hide();
	$(".hidePhoto").hide();

	$(".headNav").click(dropDown);

	function dropDown(){ 
		$(".headNavHide").slideToggle();
		// $(".hide").slideDown();
		// $(".dropdown").attr("id","drawUp");
		console.log("something happening!");
		};

	$(".footNav").click(dropDownFoot);

	function dropDownFoot(){ 
		$(".hidefoot").slideToggle();
		// $(".hide").slideDown();
		// $(".dropdown").attr("id","drawUp");
		console.log("something happening!");
		};

	// $("#drawUp").click(drawItUp);

	// function drawItUp(){
	// 	$(".hide").slideUp();
	// 	console.log("not going up?");
	// };

// var mq = window.matchMedia( "(max-width: 650px)" );

// if (mq.matches){
// //window width is at least 650px
// 	$(".main>script").hide();
	
// }else{
// 	$("#readMore").html("<span><button>Read More</button></span>");
// 	$("button").click(showScript);

// 	function showScript(){
// 		$(".main script").show();
// 	}
	
// //window width is less than 650px
// }




});
