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

	$('button#business').click(function(){
		$('input.budget').val('$500/mo');
	})

	$('button#professional').click(function(){
	$('input.budget').val('$1000/mo');
	})

	$('button#elite').click(function(){
	$('input.budget').val('$1500/mo');
	})



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

	$("#upgrade").submit(function() {
        var agentPackage = $("input.upgrade").val();
        return "No Upgrade Selected" == agentPackage ? ($("input.submitButton").attr("readonly"), alert("Please select a package."), !1) : void 0
    });

    $("")

	$('#upgrade').submit(function(){
		var sEmail = $("input.email").val();
		var agentPackage = $("input.upgrade").val();
		var form = $(this);
		var postUrl = form.attr('action');
		var postdata = form.serialize();
		if (agentPackage != "No Upgrade Selected" && validateEmail(sEmail)) {
		$.post(postUrl,postdata,function(data){
			console.log(data);
			var thankyouUrl = 'http://marketing.teamleads.com/thankyou.php?email='+data.email+'&package='+data.package;
			$('.modalBox2').removeClass('hidden');
			$('#thankyouModal').attr('src', thankyouUrl);
		},'JSON')
		return false;
		} else {
		alert('Please enter valid Email Address.')
		return false;
		}
	});

	function validateEmail(sEmail) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (filter.test(sEmail)) {
	return true;
	}
	else {
	return false;
	}
	}



});