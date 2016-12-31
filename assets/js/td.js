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
		var jf_subjects = ["Variables" , "If Statement" , "Else Statement" , "Else Statement" , "Else If Statement"];

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
				case "If Statement":
					PDFObject.embed("assets/latex/if/if.pdf", "#example1");
					break;
				case "Else Statement":
					
					break;
				case "elseif":
					
					break;

			} // End of Switch Statement

		}); // End of On Click Function



	$("#jQuery").click(function(){

		

	}); // End of jQuery Click Event



}); // End of Document Ready 


// function vars() {

// } // End of Vars Function

// function if_statement(){



// 	$(".display").html("");

// 	var div = $("<div>");
// 	var div_ex1 = $("<div>");
// 	var div_ex2 = $("<div>");
// 	var div_ex3 = $("<div>");

// 	div.attr({
// 		"class": "center-align"
// 	});

// 	div_ex1.attr({
// 		"class": "col s3"
// 	});

// 	div_ex1.attr({
// 		"class": "col s3"
// 	});

// 		div_ex1.attr({
// 		"class": "col s3"
// 	});

// 	var text = "<h3>If Statement</h3><h4>Block Level Code</h4><p>HAS to take a parameter</p><p>Does not need a else statement unless needed</p><p>Start with key work 'if'</p><p>Then () this is where the parameter is entered</p><p>Then curly braces </p>"; 


// 	var text_ex1 = "<h5>Example 1</h5> \
// 					<br> \
// 					<p><font color='red'>if</font> (<font color='blue'>5</font> <font color='red'>==</font> <font color='blue'>5</font>) { </p> \
// 					<br> \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<br> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
// 					} // End of If Statement" ;

// 	div.append(text);
// 	div_ex1.append(text_ex1);

// 	$(".display").html(div);
// 	$(".display").append(div_ex1);

// } // End of If Statement Function


// function else_statement(){

// 	$(".display").html("");

// 	var div = $("<div>");
// 	var div_ex1 = $("<div>");
// 	var div_ex2 = $("<div>");
// 	var div_ex3 = $("<div>");

// 	div.attr({
// 		"class": "center-align"
// 	});

// 	div_ex1.attr({
// 		"class": "col s4"
// 	});

// 	div_ex2.attr({
// 		"class": "col s4"
// 	});

// 	div_ex3.attr({
// 		"class": "col s4"
// 	});

// 	var text = "<h3>Else Statement</h3><h4>Block Level Code</h4><p>Else does NOT take a parameter</p><p>Has to have an if statement attached to it</p><p>Start with an if key work</p><p>After the curly brace for the if statement</p><p>type the key word else</p>"; 


// 	var text_ex1 = "<h5>Example 1</h5> \
// 					<br> \
// 					<p><font color='red'>if</font> (<font color='blue'>5</font> <font color='red'>==</font> <font color='blue'>6</font>) { </p> \
// 					<br> \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<br> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
// 					} <font color='red'>else</font> {  \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are not equal</font>');</p> \
// 					} // End of If Else Statement";

// 	var text_ex2 = "<h5>Example 2</h5> \
// 					<br> \
// 					<p>var <font color='blue'>user</font> = <font color='orange'>'fried eggs'</font>;</p> \
// 					<p><font color='red'>if</font> (<font color='blue'>user</font> <font color='red'>==</font> <font color='blue'> 'sunny side up'</font>) { </p> \
// 					<br> \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<br> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>Make sunny side up for the user</font>');</p> \
// 					} <font color='red'>else</font> {  \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>Make fried eggs for the user</font>');</p> \
// 					} // End of If Else Statement";

// 	div.append(text);
// 	div_ex1.append(text_ex1);
// 	div_ex2.append(text_ex2);

// 	$(".display").html(div);
// 	$(".display").append(div_ex1);
// 	$(".display").append(div_ex2);

// } // End of Else Statement


// function elseif_statement(){

// 	$(".display").html("");

// 	var div = $("<div>");
// 	var div_ex1 = $("<div>");
// 	var div_ex2 = $("<div>");
// 	var div_ex3 = $("<div>");

// 	div.attr({
// 		"class": "center-align"
// 	});

// 	div_ex1.attr({
// 		"class": "col s4"
// 	});

// 	div_ex2.attr({
// 		"class": "col s4"
// 	});

// 	div_ex3.attr({
// 		"class": "col s4"
// 	});

// 	var text = "<h3>Else If Statement</h3><h4>Block Level Code</h4><p>Else if does take a parameter</p><p>Has to have an if statement attached to it</p><p>Start with an if key work</p><p>After the curly brace for the if statement</p><p>type the key word else if</p>"; 


// 	var text_ex1 = "<h5>Example 1</h5> \
// 					<br> \
// 					<p><font color='red'>if</font> (<font color='blue'>5</font> <font color='red'>==</font> <font color='blue'>6</font>) { </p> \
// 					<br> \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<br> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
// 					} <font color='red'>else if </font>(<font color='blue'>5</font> <font color='red'>==</font> <font color='blue'>5</font>) {   \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>They are equal</font>');</p> \
// 					} // End of If Else if Statement";

// 	var text_ex2 = "<h5>Example 2</h5> \
// 					<br> \
// 					<p>var <font color='blue'>user</font> = <font color='orange'>'fried eggs'</font>;</p> \
// 					<p><font color='red'>if</font> (<font color='blue'>user</font> <font color='red'>==</font> <font color='blue'> 'sunny side up'</font>) { </p> \
// 					<br> \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<br> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>Make sunny side up for the user</font>');</p> \
// 					} <font color='red'>else if </font>(<font color='blue'>user</font> <font color='red'>==</font> <font color='blue'>'scrambled'</font>) {  \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>Make scrambled eggs for the user</font>');</p> \
// 					} <font color='red'>else if </font>(<font color='blue'>user</font> <font color='red'>==</font> <font color='blue'>'fried eggs'</font>) { \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is met or true in the ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>Make fried eggs for the user</font>');</p> \
// 					} <font color='red'>else</font> {  \
// 					<p> &nbsp &nbsp &nbsp	// If the condition is not met or true in the previous ()</p> \
// 					<p>	&nbsp &nbsp &nbsp // will do the logic inside the curly brace</p> \
// 					<p>	&nbsp &nbsp &nbsp console.log('<font color='orange'>No eggs for you</font>');</p> \
// 					} // End of If Else If Else Statement";

// 	div.append(text);
// 	div_ex1.append(text_ex1);
// 	div_ex2.append(text_ex2);

// 	$(".display").html(div);
// 	$(".display").append(div_ex1);
// 	$(".display").append(div_ex2);

 // End of Else if statement function


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