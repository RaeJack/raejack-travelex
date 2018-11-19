$(document).ready(function(){


	$("#my-contact-form").validate({

		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",


		rules:{
			name: true
	},

		email: true,
		required: true
	},

		message:{
			maxLength: 2000
			required: true

 }

 		maessage: {
		name: "Please enter your name"
		required
		}


}, submitHnadler : function(form){
	$("#form")
}




