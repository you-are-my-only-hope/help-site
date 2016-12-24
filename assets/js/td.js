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
		var div_var_btn = $("<button>")

		div_head.attr({
			"class": "collapsible-header",

		}); // End of Div Head attr

		div_head.text("JavaScript Basics");

		div_variable.attr({
			"class": "collapsible-body"

		}); // End of Div Sub attr

		div_var_btn.text("Variables");

		div_var_btn.attr({
			"id": "vars"
		});

		div_head.appendTo(li);
		div_variable.appendTo(li);
		div_var_btn.appendTo(div_variable);

		$('.collapsible').collapsible();

	}); // End of JavaScript Click Event

	$("#jQuery").click(function(){

		

	}); // End of jQuery Click Event



}); // End of Document Ready 



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