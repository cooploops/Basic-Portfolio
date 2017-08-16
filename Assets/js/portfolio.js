	// unblur them when you hover over each picture
$(document).ready(function(){

	$("#port1").hover(function(){
		$(this).css("filter", "none");
	},
		function(){
			$(this).css("filter", "blur(3px)");
	});

	$("#port2").hover(function(){
		$(this).css("filter", "none");
	},
		function(){
				$(this).css("filter", "blur(3px)");
	});	
	$("#port3").hover(function(){
		$(this).css("filter", "none");
	},
		function(){
			$(this).css("filter", "blur(3px)");
	});
	$("#port4").hover(function(){
		$(this).css("filter", "none");
	},
		function(){
			$(this).css("filter", "blur(3px)");
	});	
});