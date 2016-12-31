$(document).ready(function(){

	// $("#test").click(function(){

	// 	PDFObject.embed("test.pdf", "#example1");

	// });

		$(".table").html("");

		var ul = $("<ul>");

		ul.attr({
			"class":            "collapsible",
			"data-collapsible": "accordion"
		}); // End ul attr 

		var li = $("<li>");

		ul.appendTo(".table");

		li.appendTo(ul);

		// JavaScript Foundation, Functions, Objects, Ajax  ---- Categories
		// 

		var div_head = $("<div>");

		div_head.attr({
			"class": "collapsible-header",

		}); // End of Div Head attr

		div_head.text("JavaScript Basics");

		div_head.appendTo(li);

		// JavaScript Foundations Subjects
		var jf_subjects = ["Variables" , "Array", "If Statement"  , "Else Statement" , "Else If Statement" , "Switch Statement"];

		for (var i = 0; i < jf_subjects.length; i++) {
			
			var div9 = $("<div>");

			div9.attr({
				"class": "collapsible-body"
			});

			var btn9 = $("<button>");

			btn9.text(jf_subjects[i]);

			btn9.attr({
				"id": jf_subjects[i],
				"class": "waves-teal btn-flat center-align guide",
				"data-index": jf_subjects[i]
			});

			div9.appendTo(li);

			btn9.appendTo(div9);


		} // End of For Loop I 

		
		$('.collapsible').collapsible();


		$(".guide").click(function(){

			var user = $(this);
			var user_pick = user.data("index");

			console.log(user);
			console.log(user_pick);

			switch(user_pick) {

				case "Variables":
					PDFObject.embed("assets/latex/variables/var.pdf", "#example1");
					break;
				case "Array":
					PDFObject.embed("assets/latex/array/array.pdf", "#example1");
					break;
				case "If Statement":
					PDFObject.embed("assets/latex/if/if.pdf", "#example1");
					break;

				case "Else Statement":
					PDFObject.embed("assets/latex/else/else.pdf", "#example1");
					break;
				case "Else If Statement":
					PDFObject.embed("assets/latex/elseif/elseif.pdf", "#example1");
					break;
				case "Switch Statement":
					PDFObject.embed("assets/latex/switch/switch.pdf", "#example1");
					break;

			} // End of Switch Statement

		}); // End of On Click Function


}); // End of Document Ready 


