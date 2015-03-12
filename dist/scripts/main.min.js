$(document).ready(function() {

	$('[marketing-options]').click(function(){
		var element = $(this); var type=$('[marketing-type].active').attr('marketing-type');
		var options = element.attr('marketing-options');
		$('input.upgrade').val(type+': '+options);
	})

	$('[pricing-options]').click(function(){
		var element = $(this); var type=$('[pricing-type]').attr('pricing-type');
		$('input.budget').val(type);
	})

	$('#email').focusout(function(){

	     $('#email').filter(function(){
	        var emil=$('#email').val();
	        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	         if( !emailReg.test( emil ) ) {
	            alert('Please enter valid email');
	         } else {
	            alert('Thank you for your valid email');
	            }
	         })
	     });
	});


	$('.uno').click(function(){
		$('.uno').addClass('active');
		$('.seoTitle').text('Search Engine Optimization');
		$('.second').removeClass('active');
		$('.third').removeClass('active');
		$("a[href='#highimpact']").attr('href', '#more');
		$("a[href='#social']").attr('href', '#more');
	});    
	$('.second').click(function(){
		$('.second').addClass('active');
		$('.seoTitle').text('Paid Search Packages');
		$('.uno').removeClass('active');
		$('.third').removeClass('active');
		$("a[href='#more']").attr('href', '#highimpact');
		$("a[href='#social']").attr('href', '#highimpact');
	});    
	$('.third').click(function(){
		$('.third').addClass('active');
		$('.seoTitle').text('Social Advertising');
		$('.uno').removeClass('active');
		$('.second').removeClass('active');
		$("a[href='#highimpact']").attr('href', '#social');
		$("a[href='#more']").attr('href', '#social');
	}); 

	$('#checkbox').click(function(){
		$('#terms').addAttr('checked');
	});

	$('.submitButton').click(function(){
 
	$.post("send.php", $("#upgrade").serialize(),  function(data) {   });
 
	$('#success').html('Message sent!');
	$('#success').hide(2000);
 
	});   

	$('.faq').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$('.social').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$('.highimpact').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$('.seo').click(function(){
    $('html, body').animate({
     	scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$('.subSeo').click(function(){
	$('html, body').animate({
	 	scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
	return false;
	});

	$('.subSearch').click(function(){
	$('html, body').animate({
	 	scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
	return false;
	});

	$('.subSocial').click(function(){
	$('html, body').animate({
	 	scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
	return false;
	});

	$('.modal').click(function(){
  	$('body').addClass('modal-open');
  	$('.modalBox').removeClass('hidden');
  	$('.overlay').removeClass('hidden');
	});

	$('.close').click(function () {
  	$('body').removeClass('modal-open');
  	$('.modalBox').addClass('hidden');
  	$('.overlay').addClass('hidden');
	});

	$('.close2').click(function () {
  	$('.modalBox2').addClass('hidden');
	});

	// $('nav ul li a').smoothScroll();

	$(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {    
        $('#topbutton').fadeIn("fast");       
        $('#topbutton').fadeOut("fast");      
    }
	});

	$('#topbutton').click(function() {            
    $('body,html').animate({
        scrollTop : 0                   
    }, 500);
	});

	$('#upgrade').submit(function(){
		var form = $(this);
		var postUrl = form.attr('action');
		var postdata = form.serialize();
		$.post(postUrl,postdata,function(data){
			console.log(data);
			var thankyouUrl = 'http://marketing.teamleads.com/thankyou.php?email='+data.email+'&package='+data.package;
			$('.modalBox2').removeClass('hidden');
			$('#thankyouModal').attr('src', thankyouUrl);
		},'JSON')
		return false;
	});

});


// var thankyou = {
// 	formData: {},
// 	init:function(){
// 		$.ajax({
// 			url:'/api/send_email',
// 			type: 'GET',
// 			dataType: 'json',
// 			success: thankyou.parseData()
// 		});
// 	},
// 	parseData:function(responseData){
// 		email = responseData.email;
// 		console.log(email);
// 		thankyou.updateDOM();
// 	},

// 	updateDOM: function(){
// 		$('.email').text(thankyou.email);
// 	}
// }