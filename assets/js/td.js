$(document).ready(function(){


	$("#javascript").click(function(){

		var ul = $("<ul>");

		ul.attr({
			"class":            "collapsible",
			"data-collapsible": "accordion"
		}); // End ul attr 

		var li = $("<li>");

		ul.appendTo(".table");

		li.appendTo(ul);

		var div_head = $("<div>");
		var div_variable = $("<div>");
		var div_if = $("<div>");
		var div_var_btn = $("<button>");
		var div_if_btn = $("<button>");

		div_head.attr({
			"class": "collapsible-header",

		}); // End of Div Head attr

		div_head.text("JavaScript Basics");

		div_variable.attr({
			"class": "collapsible-body"

		}); // End of Div Sub attr

		div_if.attr({
			"class": "collapsible-body"

		});

		div_var_btn.text("Variables");
		div_if_btn.text("If");

		div_var_btn.attr({
			"id": "vars",
			"class": "waves-teal btn-flat center-align guide",
			"data-index": "vars"
		});

		div_if_btn.attr({
			"id": "if",
			"class": "waves-teal btn-flat center-align guide",
			"data-index": "if"
		});

		div_head.appendTo(li);
		div_variable.appendTo(li);
		div_if.appendTo(li);
		div_var_btn.appendTo(div_variable);
		div_if_btn.appendTo(div_if);

		$('.collapsible').collapsible();


		$(".guide").click(function(){

			var user = $(this);
			var user_pick = user.data("index");

			console.log(user);
			console.log(user_pick);

			switch(user_pick) {

				case "vars":
					vars();
					break;
				case "if":
					if_statement();
					break;

			} // End of Switch Statement

		}); // End of On Click Function

	}); // End of JavaScript Click Event

	$("#jQuery").click(function(){

		

	}); // End of jQuery Click Event



}); // End of Document Ready 


function vars() {

} // End of Vars Function

function if_statement(){

	var fs = require("fs");

	fs.readFile("../images/if_intro.js", "utf8", function(error, data) {

	  // We will then print the contents of data
	  console.log(data);

	  // Then split it by commas (to make it more readable)
	  var dataArr = data.split(",");

	  // We will then re-display the content as an array for later use.
	  console.log(dataArr);

	});


	$(".display").html("");

	var img = $("<img>");

	img.attr({
		"src": "assets/images/test.png"
	});

	$(".display").html(img);

} // End of If Statement Function




  // <ul class="collapsible" data-collapsible="accordion">
  //   <li>
  //     <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
  //     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  //   </li>
  //   <li>
  //     <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
  //     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  //   </li>
  //   <li>
  //     <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
  //     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  //   </li>
  // </ul>