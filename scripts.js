$("document").ready(function(){

	// $("#landing").click(showSite);

	// function showSite(){
	// 	$(".landing").slideUp(1200);
	// 	// $(".landing").hide();
	// 	$("#all").slideDown();
	// };

	$(".hidePhoto").hide();

	$(".headNav").click(dropDown);

	function dropDown(){ 
		$(".headNavHide").slideToggle();
		// $(".hide").slideDown();
		// $(".dropdown").attr("id","drawUp");
		console.log("something happening!");
		};


	$(".hamburger").click(dropNav);

	function dropNav(){
		$(".line").slideToggle();
	};

	$(".footNav").click(dropDownFoot);

	function dropDownFoot(){ 
		$(".hidefoot").slideToggle();
		// $(".hide").slideDown();
		// $(".dropdown").attr("id","drawUp");
		console.log("something happening!");
		};

	$("#navbutton").click(slideUp);

	function slideUp(){
		$("#header").css("position","absolute");
		$("#navbutton").hide();
		$("#downbutton").show();
	};

	// $("#downbutton").click(fixNav)

	// function fixNav(){
	// 	$("#header").css("position","fixed");
	// 	$("#downbutton").hide();
	// 	$("#navbutton").show();
	// 	console.log("something");
	// }

	if ($(window).scrollTop()>0){
		$("#navbutton").show();
		console.log("scrolling!");
	}else{
		$("#navbutton").hide();
	};

	$("#backTop").click(backToTop);

	function backToTop(){
		document.body.scrollTop=0;
	};

	// $("#drawUp").click(drawItUp);

	// function drawItUp(){
	// 	$(".hide").slideUp();
	// 	console.log("not going up?");
	// };

var mq = window.matchMedia( "(max-width: 650px)" );

if (mq.matches){
//window width is at least 650px
	$("#miniNav").show();
	$("#miniNav").click(function(){
		$(".inactive").slideToggleoggle();
	});
	
}else{
};

// 	function showScript(){
// 		$(".main script").show();
// 	}
	
// //window width is less than 650px
// }




});
