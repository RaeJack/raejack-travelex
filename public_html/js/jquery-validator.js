$(document).ready(function(){


	$("#my-form").validate({

		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

			// rules here define what is good or bad input
			// each rule starts with the form input element's NAME attribute
		rules:{
			name:{
				required: true
	},

		email:{
			email: true,
			required: true

	},

		message: {
			required: true,
			maxLength: 2000
			}
		},

// error messages to display to the end user when rules above don't pass
 		message:{
		name:{ "Please enter your name."
		},

			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			message: {
				required: "Please enter a message.",
				maxLength: "2000 characters max."
			}
		},

		// AJAX submit the form data to back end if rules pass
	 submitHandler: function(form){
		 $("#my-form").ajaxSubmit({
		type: "POST",
		url:$("my-contact-form").attr("action"),

		success: function(ajaxOutput){
			// clear the output area's formatting
			$("#output-area").css("display", "");

			// write the server's reply to the output area
			$("#output-area").html(ajaxOutput);

			// reset the form if it was successful
			if($(".alert-success").length >= 1) {
				$("#my-form")[0].reset();

				}
			}
		 })
		}
	 }) /* end validate function here */
	}); /*end document.ready()*/









