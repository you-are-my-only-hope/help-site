$(document).ready(function(){


	$("#javascript").click(function(){

		$(".table").html("");

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
		var div_else = $("<div>");
		var div_var_btn = $("<button>");
		var div_if_btn = $("<button>");
		var div_else_btn = $("<button>");

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

		div_else.attr({
			"class": "collapsible-body"

		});

		div_var_btn.text("Variables");
		div_if_btn.text("If");
		div_else_btn.text("Else");

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

		div_else_btn.attr({
			"id": "else",
			"class": "waves-teal btn-flat center-align guide",
			"data-index": "else"
		});

		div_head.appendTo(li);
		div_variable.appendTo(li);
		div_if.appendTo(li);
		div_else.appendTo(li);
		div_var_btn.appendTo(div_variable);
		div_if_btn.appendTo(div_if);
		div_else_btn.appendTo(div_else);

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
				case "else":
					else_statement();
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



	$(".display").html("");

	var div = $("<div>");
	var div_ex1 = $("<div>");

	div.attr({
		"class": "center-align"
	});

	var text = "<h3>If Statement</h3><h4>Block Level Code</h4><p>HAS to take a parameter</p><p>Does not need a else statement unless needed</p><p>Start with key work 'if'</p><p>Then () this is where the parameter is entered</p><p>Then curly braces </p>"; 


	var text_ex1 = "<h5>Example 1</h5> \
					<br> \
					<p><font color='red'>if</font> (<font color='blue'>5</font> <font color='red'>==</font> <font color='blue'>5</font>) { </p> \
					<br> \
					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
					<br> \
					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
					} // End of If Statement" ;

	div.append(text);
	div_ex1.append(text_ex1);

	$(".display").html(div);
	$(".display").append(div_ex1);

} // End of If Statement Function


function else_statement(){

	$(".display").html("");

	var div = $("<div>");
	var div_ex1 = $("<div>");

	div.attr({
		"class": "center-align"
	});

	var text = "<h3>Else Statement</h3><h4>Block Level Code</h4><p>Else does NOT take a parameter</p><p>Has to have an if statement attached to it</p><p>Start with an if key work</p><p>TAfter the curly brace for the if statement</p><p>type the key word else</p>"; 


	var text_ex1 = "<h5>Example 1</h5> \
					<br> \
					<p><font color='red'>if</font> (<font color='blue'>5</font> <font color='red'>==</font> <font color='blue'>6</font>) { </p> \
					<br> \
					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
					<br> \
					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
					} <font color='red'>else</font> {  \
					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
					} // End of If Else Statement";

	div.append(text);
	div_ex1.append(text_ex1);

	$(".display").html(div);
	$(".display").append(div_ex1);

} // End of Else Statement


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