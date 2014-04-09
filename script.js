/* Exercise 2: Color picker */

$(document).ready(function () {
	

	var colors = ["red", "green", "yellow", "magenta", "grey", "brown", "blue", "orange", "silver", "gold", "violet", "rgb(100,123,232)"];
	$.each(colors, function(index, element) {
  // do something
  
  random_position = Math.floor( Math.random() * colors.length );
  $(".preview").css("background-color",colors[random_position]);
  $("#colors").prepend("<div class='item' style='background-color: " + element + ";'><div>");
  var previewColor = $(".preview").css("background-color");
$(".color-code").html(previewColor);
console.log("este es el color:" + previewColor);
	setbackgcolor(previewColor);
	addBox();


  });


	
});




function setbackgcolor(a) {

	
	
		
	$(document).on("mouseenter", "#colors .item", function () {
				
		var boxcolor = $(this).css("background-color");
		$(".preview").css("background-color",boxcolor);
		
		 

	}).on('mouseleave', "#colors .item", function() {
 $(".preview").css("background-color",a);
});
	
	
}
//Retrieve the color from the input field and add a box to the start of the #colors div 
//every time the Add to favorites button is pressed, by handling the click event.

function addBox () {
	




	$(document).on("click", "#add-to-favorite", function () {
		//var le = 

		//if ($("#colors .item").length < 16){
		var ca = $("#color").val();
		
		 $("#colors").prepend("<div class='item' style='background-color: " + ca + ";'><div>");
		 $("#color").val("").focus();


		//}
		console.log($("#colors .item").first().css("background-color"));

		//else
			//
			//{$("#colors .item").last().remove();}

if ($("#colors .item").length > 16) {
$("#colors .item").last().remove();
}




		


			});





	
	// body...
}



