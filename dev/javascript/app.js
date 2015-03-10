$(document).ready(function() {

	$('#elite').click(function(){
		$('input.upgrade').val('ELITE');
	});    
	$('#professional').click(function(){
		$('input.upgrade').val('PROFESSIONAL');
	});    
	$('#business').click(function(){
		$('input.upgrade').val('BUSINESS');
	}); 

	$('.submitButton').click(function(){
 
	$.post("send.php", $("#upgrade").serialize(),  function(data) {   });
 
	$('#success').html('Message sent!');
	$('#success').hide(2000);
 
	});   

	// $('nav ul li a').smoothScroll();

});
