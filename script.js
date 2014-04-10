/* Exercise 2: Color picker */

$(document).ready(function () {

	addBox();
	SavedColors();

});


function SavedColors () {
	var colors = ["red", "green", "yellow", "magenta", "grey", "brown", "blue", "orange", "silver", "gold", "violet", "rgb(100,123,232)"];// body...
	$.each(colors, function(index, element) 
		{random_position = Math.floor( Math.random() * colors.length );
			$(".preview").css("background-color",colors[random_position]);
			$("#colors").prepend("<div class='item' style='background-color: " + element + ";'><div>");
			var previewColor = $(".preview").css("background-color");
			$(".color-code").html(previewColor);
			setbackgcolor(previewColor);
		});
}


function setbackgcolor(a) {
	$(document).on("mouseenter", "#colors .item", function () {
		var boxcolor = $(this).css("background-color");
		$(".preview").css("background-color",boxcolor);
		$(".color-code").html(boxcolor);
	}).on('mouseleave', "#colors .item", function() {
		$(".preview").css("background-color",a);
		$(".color-code").html(a);
	}).on("keypress keydown keyup", "#color", function () {
		var c = $(this).val();
		var code = $(".preview").css("background-color",c);
		//console.log("valor de code" + code);

		var se= $(".preview").css("background-color");
		//console.log("valor de se" + se);
		$(".color-code").html(se);
		

	});
}
//Retrieve the color from the input field and add a box to the start of the #colors div 
//every time the Add to favorites button is pressed, by handling the click event.

function addBox () {
	$(document).on("click", "#add-to-favorite", function () {
		
		
		var ca = $("#color").val();
			//console.log(colors);
			$("#colors").prepend("<div class='item' style='background-color: " + ca + ";'><div>");
			$("#color").val("").focus();


			if ($("#colors .item").length > 16) {

				$("#colors .item").last().remove();
			}

		});

}



