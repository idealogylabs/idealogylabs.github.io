/*  _______________________________________

    Header Begin
    _______________________________________  */   

$(document).ready(function () {
	$('input#desktop-q').click(function(e){
		e.stopPropagation();
	    if(!$('#desktop-q').hasClass('input-focus')){
	    	$('#desktop-q').addClass('input-focus');
	    }
	});
	
	$('.main-head').stickit({scope: StickScope.Document, className:'head-sticky', top: 0});
	
	$('.mega-menu > ul > li').mouseover(function() {
		       		
		$(this).parent('ul').find('li').removeClass('selected');
		$(this).addClass('selected');
		var li_index = $(this).index();
		$(this).parent().parent('.mega-menu').find('.vertical-menu-list').addClass('hide');
		$(this).parent().parent('.mega-menu').find('.vertical-menu-list').removeClass('show');
		
		$(this).parent().parent('.mega-menu').find('.vertical-menu-list').eq(li_index).removeClass('hide');
		$(this).parent().parent('.mega-menu').find('.vertical-menu-list').eq(li_index).addClass('show');
		
	});
	
	$('#horizontal-menu .nav > li').mouseleave(function() {
		
		$(this).find('.mega-menu ul > li').removeClass('selected');
		$(this).find('.mega-menu ul > li:first-child').addClass('selected');
		
		$(this).find('.mega-menu .vertical-menu-list').removeClass('show');
		$(this).find('.mega-menu .vertical-menu-list').addClass('hide');
		$(this).find('.mega-menu .vertical-menu-list').eq(0).addClass('show');
	});
 	//feedback form show and hide
	$('.feedback_switch > a, .btn-feedback-close').click(function(e){
		e.preventDefault();
		if($('.feedback_switch').hasClass('closed')){
			$('.feedback_switch').addClass('opened');
			$('.feedback_switch').removeClass('closed');
		}else{
			$('.feedback_switch').removeClass('opened');
			$('.feedback_switch').addClass('closed');
		}
	});
	// On click of search
	$(document).click(function() {   
		if($('#desktop-q').hasClass('input-focus')){
			$('#desktop-q').removeClass('input-focus');
		}
	});
	
});


/*=================responsive right navibar begin=========================================*/

$(".open-menu-btn").click(function(){
	$("body").css({"overflow-y":"hidden"});
});
$(document).on('click','.close-menu-btn',function(e){
	e.preventDefault();
	$("body").css({"overflow-y":"scroll"});
});

$(function() {
	$("#slidemenu").fullScreenNav();
});

 ! function(a, b, c) {
	function d(b, c) {
		this.element = b, this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.init()
	}

	var e = "fullScreenNav", f = {
		baseFontSize : Math,
		closeMenuBtnText : "",
		closeMenuBtnClass : ".close-menu-btn",
		fontSizeDivisor : 2.25,
		menuBtn : ".open-menu-btn",
		openClass : ".open"
	};
	d.prototype = {
		init : function() {
			var d = this, e = c.documentElement.clientHeight, f = a(this.element).find(".gw-submenu a"), g = e / f.length, h = this.settings.closeMenuBtnClass.split(".")[1], i = a("<a>", {
				"class" : h,
				text : this.settings.closeMenuBtnText,
				href : "#"
			});
			this.sizeLinks(f, g, this.settings), i.insertBefore(a(this.element).children("ul")), a(b).on("resize.fullScreenNav", function() {
				var a = c.documentElement.clientHeight, b = a / f.length;
				d.sizeLinks(f, b, d.settings)
			}), a(this.settings.menuBtn).add(i).add(f).on("click", function() {
				d.toggleMenu(this.element, this.settings)
			})
		},
		sizeLinks : function(a, b, c) {
			a.css({
				height : b / c.baseFontSize + "px",
				"line-height" : b / c.baseFontSize + "px",
				"font-size" : b / c.fontSizeDivisor / c.baseFontSize + "px"
			})
		},
		toggleMenu : function() {
			var b = this.settings.openClass.split(".")[1];
			a(this.element).toggleClass(b)
		}
	}, a.fn[e] = function(b) {
		return this.each(function() {
			a.data(this, "plugin_" + e) || a.data(this, "plugin_" + e, new d(this, b))
		}), this
	}
}(jQuery, window, document);

$(document).ready(function () {
    var nav = function () {
        $('.gw-nav > li > a').click(function () {
            var gw_nav = $('.gw-nav');
            gw_nav.find('li').removeClass('active');
            $('.gw-nav > li > ul > li').removeClass('active');

            var checkElement = $(this).parent();
            var ulDom = checkElement.find('.gw-submenu')[0];

            if (ulDom == undefined) {
                checkElement.addClass('active');
                $('.gw-nav').find('li').find('ul:visible').slideUp();
                return;
            }
            /*if (ulDom.style.display != 'block') {
                gw_nav.find('li').find('ul:visible').slideUp();
                gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                checkElement.removeClass('init-arrow-down');
                checkElement.removeClass('arrow-down');
                checkElement.addClass('arrow-up');
                checkElement.addClass('active');
                checkElement.find('ul').slideDown(300);
            } else {
                checkElement.removeClass('init-arrow-up');
                checkElement.removeClass('arrow-up');
                checkElement.removeClass('active');
                checkElement.addClass('arrow-down');
                checkElement.find('ul').slideUp(300);
            }*/
            if (ulDom.style.display != 'block') {
                gw_nav.find('li').find('ul:visible').slideUp();
                gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                checkElement.removeClass('init-arrow-down');
                checkElement.removeClass('arrow-down');
                checkElement.addClass('arrow-up');
                checkElement.addClass('active');
                checkElement.find('ul').slideDown(300);
            } else {
                checkElement.removeClass('init-arrow-up');
                checkElement.removeClass('arrow-up');
                checkElement.removeClass('active');
                checkElement.addClass('arrow-down');
                checkElement.find('ul').slideUp(300);
            }
        });
        $('.gw-nav > li > ul > li > a').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $('.gw-nav > li > ul > li').removeClass('active');
            $(this).parent().addClass('active')
        });
    };
    nav();
});
/*=================responsive right navibar End=========================================*/
/*  _______________________________________

    Header end
    _______________________________________  */
/*  _______________________________________

    accreditation carousel begin
    _______________________________________  */
   
$(document).ready(function() {
	var owl = $("#accreditation");		
  	owl.owlCarousel({		
	    itemsCustom : [
	      [0, 2],
	      [450, 2],
	      [600, 2],
	      [700, 3],
	      [1000, 5],
	      [1200, 5],
	      [1400, 5],
	      [1600, 5]
	    ],
	    navigation : true,
		pagination : false,
		navigationText : false
	});	
	
    var sub_video = $("#sub-video-carousel");
	sub_video.owlCarousel({
		itemsCustom : [
	      [0, 2],
	      [450, 2],
	      [600, 2],
	      [700, 3],
	      [1000, 5],
	      [1200, 5],
	      [1400, 5],
	      [1600, 5]
	    ],
		navigation : false,
		pagination : false,
		navigationText : false,
		addClassActive: true,
		rewindNav: false,
		afterAction: function(){
		  if ( this.itemsAmount > this.visibleItems.length ) {
		    $('.video-next').show();
		    $('.video-prev').show();

		    $('.video-next').removeClass('disabled');
		    $('.video-prev').removeClass('disabled');
		    if ( this.currentItem == 0 ) {
		      $('.video-prev').addClass('disabled');
		    }
		    if ( this.currentItem == this.maximumItem ) {
		      $('.video-next').addClass('disabled');
		    }

		  } else {
		    $('.video-next').hide();
		    $('.video-prev').hide();
		  }
		}
	});
	
	
	 // Custom Navigation Events
      $(".next").click(function(e){
      	e.preventDefault();
        sub_video.trigger('owl.next');
      })
      $(".prev").click(function(e){
      	e.preventDefault();
        sub_video.trigger('owl.prev');
      })

});  
/*  _______________________________________

    accreditation carousel end
    _______________________________________  */   
/*  _______________________________________

    typeahead Begin
    _______________________________________  */
   $(document).ready(function () {
		var path=$('#path').val();
		
		var data = [{"name":"Leadership Skills", "classroom": "icon-disable-blue", "virtual": "icon-disable-yellow", "online": "icon-disable-purple", "webinar":"icon-disable-green"}, {"name":"Leadership Skills hjvv", "classroom": "icon-enable-blue", "virtual": "icon-enable-yellow", "online": "icon-enable-purple", "webinar":"icon-enable-green"}, {"name":"PMP Certification Training", "classroom": "icon-enable-blue", "virtual": "icon-enable-yellow", "online": "icon-enable-purple", "webinar":"icon-enable-green"}, {"name":"PMP Certification Training", "classroom": "icon-disable-blue", "virtual": "icon-disable-yellow", "online": "icon-disable-purple", "webinar":"icon-disable-green"}, {"name":"Microsoft Project Training", "classroom": "icon-enable-blue", "virtual": "icon-enable-yellow", "online": "icon-enable-purple", "webinar":"icon-enable-green"}];
		
		$('#desktop-search').typeahead({
			minLength: 2,
			order: "asc",
			dynamic: true,
			delay: 1000,
			backdrop: false,
			display: "name",
			template: '<span class="name">{{name}}</span>',
			source: {
				user: {
					url: [{
						type: "POST",
						url: path+"home/get_typehead_names",
						data: {
							apiKey: "35e8959af42d73e1e172c2a2992f34f1",
							q: "{{query}}"
						},
						process: function (data) { return data; }
					}, 	]
				},
			},
			callback: {
				onClick: function (node, a, obj, e) {
					//var test= JSON.stringify(obj);
					//alert(obj['type']);
					if(obj['type']=='trainer')
						window.location=path+'trainer?q='+obj['name'];
					else
						window.location=path+'search?q='+obj['name'];
				}
			},
			debug: true
		});
		$('#desktop-q').typeahead({
			minLength: 2,
			order: "asc",
			dynamic: true,
			delay: 1000,
			backdrop: false,
			display: "name",
			template: '<span class="name">{{name}}</span>',
			source: {
				user: {
					url: [{
						type: "POST",
						url: path+"home/get_typehead_names",
						data: {
							apiKey: "35e8959af42d73e1e172c2a2992f34f1",
							q: "{{query}}"
						},
						process: function (data) { return data; }
					}, 	]
				},
			},
			callback: {
				onClick: function (node, a, obj, e) {
					//var test= JSON.stringify(obj);
					//alert(obj['type']);
					if(obj['type']=='trainer')
						window.location=path+'trainer?q='+obj['name'];
					else
						window.location=path+'search?q='+obj['name'];
				}
			},
			debug: true
		});
		
       $('#responsive-q').typeahead({
           minLength: 2,
			order: "asc",
			dynamic: true,
			delay: 500,
			backdrop: false,
			display: "name",
			template: '<span class="name">{{name}}</span>',
			source: {
				user: {
					url: [{
						type: "POST",
						url: "home/get_typehead_names",
						data: {
							apiKey: "35e8959af42d73e1e172c2a2992f34f1",
							q: "{{query}}"
						},
						process: function (data) { return data; }
					}, 	]
				},
			},
			callback: {
				onClick: function (node, a, obj, e) {
					//var test= JSON.stringify(obj);
					//alert(obj['type']);
					if(obj['type']=='trainer')
						window.location='trainer?q='+obj['name'];
					else
						window.location='search?q='+obj['name'];
				}
			},
			debug: true
        });
	});  
   
/*  _______________________________________

    typeahead end
    _______________________________________  */

//REQUEST FOR CALL BAC//
//====================//
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
		return false;
	} else {
		return true;
	}
}

 $(document).ready(function () {
	get_country();
	get_course();
	$('#request_for_call_back').on('click',function(){
		$('.text-error').addClass('hide');
		$('#r_name').val('');$('#r_email').val('');$('#r_course').val('');$('#r_country').val('');$('#r_city').val('');$('#r_phone').val('');$('#r_c_name').val('');$('#r_message').val('');
	});
	$('#send_btn').on('click',function(){
	$('.text-error').addClass('hide');
	var prefix=$('#prefix').val(),r_name=$('#r_name').val(),r_email=$('#r_email').val(),r_course=$('#r_course').val(),r_country=$('#r_country').val(),r_city=$('#r_city').val(),r_phone=$('#r_phone').val(),r_c_name=$('#r_c_name').val(),r_message=$('#r_message').val();
		if(r_name!='' && r_email!='' && r_phone!='' && r_phone.length>6 && r_message!='' && (r_course!='') && (r_country!='') && (r_city!='') && validateEmail(r_email)){
		$('#send_btn').attr('disabled','disabled');
		$('#send_btn').attr('value','Sending');
			$.ajax({
				url: prefix+'/auth/request_for_call_back',
				type: 'POST',
				data:{'r_name':r_name,'r_email':r_email,'r_course':r_course,'r_country':r_country,'r_city':r_city,'r_phone':r_phone,'r_c_name':r_c_name,'r_message':r_message},
				dataType: 'json'
			}).done(function(data){
				if(data){
					$('#requestcallback').modal('hide');
					$('#call_back_error').modal('show');
					$('#request_error').html('Request sent successfully');
					$('#request_error').removeClass('text-error');
					$('#request_error').addClass('text-success');
					$('#send_btn').attr('disabled',false);
				}else{
					$('#requestcallback').modal('hide');
					$('#call_back_error').modal('show');
					$('#request_error').html('Request not sent');
					$('#request_error').removeClass('text-success');
					$('#request_error').addClass('text-error');
					$('#send_btn').attr('disabled',false);
				}
			}).always(function(){
						ga('create', 'UA-26040453-1');
						ga('send', 'event', 'category-Request call back', 'action-Submit', 'label-call back  submit'); // signal GA that this is an event
			});
		}else{
			if(r_name==''){
				$('#r_name_error').html('Please enter your Name');
				$('#r_name_error').removeClass('hide');
			}
			if(r_message==''){
				$('#r_message_error').html('Please enter your Message');
				$('#r_message_error').removeClass('hide');
			}
			if(r_course==''){
				$('#r_course_error').html('Please select a Course');
				$('#r_course_error').removeClass('hide');
			}
			if(r_country==''){
				$('#r_country_error').html('Please select your Country');
				$('#r_country_error').removeClass('hide');
			}
			if(r_city==''){
				$('#r_city_error').html('Please select your City');
				$('#r_city_error').removeClass('hide');
			}
			if(r_email==''){
				$('#r_email_error').html('Please enter your Email-id');
				$('#r_email_error').removeClass('hide');
			}
			if(!validateEmail(r_email) && r_email!=''){
				$('#r_email_error').html('Entered Email-id is invalid');
				$('#r_email_error').removeClass('hide');
			}
			if(r_phone==''){
				$('#r_phone_error').html('Please enter your Phone number');
				$('#r_phone_error').removeClass('hide');
			}
			if(r_phone.length<=6 && r_phone!=''){
				$('#r_phone_error').html('Entered Phone number is invalid');
				$('#r_phone_error').removeClass('hide');
			}
			
		}
		
	});
	
	
	
	
});
	$(".numonly").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	function get_course(){
		// var prefix=$('#prefix').val();
		// $.ajax({
		// 		url: prefix+'/userprofile/get_course',
		// 		type: 'POST',
		// 		data: {},
		// 		dataType:'JSON',
		// 	}).done(function(data){
		// 		var i=0,html=''; 
		// 		html+="<option value='' selected>--Select a Course--</option>";
		// 		for(i=0;i<data.length;i++){
		// 			html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
		// 		}
		// 		$('#r_course').html(html);
		// 		$('#rit_course').html(html);
		// 		$('#riv_course').html(html);
		// 		$('#cp_course').html(html);
		// 		$('#cu_course').html(html);
		// 		$('#bi_course_name').html(html);
		// 		$('#pe_certification_interest').html(html);
		// 	});	
	}
	function get_country(){
		// var prefix=$('#prefix').val();
		// $.ajax({
		// 		url: prefix+'/userprofile/get_country_partner',
		// 		type: 'POST',
		// 		data: {},
		// 		dataType:'JSON',
		// 	}).done(function(data){
		// 		var i=0,html=''; 
		// 		html+="<option value='' selected>--Select your Country--</option>";
		// 		for(i=0;i<data.length;i++){
		// 			html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
		// 		}
		// 		$('#r_country').html(html);
		// 		$('#r_country1').html(html);
		// 		$('#rit_country').html(html);
		// 		$('#riv_country').html(html);
		// 		$('#cu_country').html(html);
		// 		$('#pe_country').html(html);
		// 	});	
	}
	$('#r_country').on('change',function(){
		var id = $(this).val();
		var prefix=$('#prefix').val();
		$.ajax({
			url: prefix+'/userprofile/get_city_partner',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			html+="<option value='' selected>--Select your City--</option>";
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
			}
			$('#r_city').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_country_code',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+=data[i]['name'];
			}
			$('#r_phone_code').val(html);
			
		});
	});
	$('#r_country1').on('change',function(){
		var id = $(this).val();
		var prefix=$('#prefix').val();
		$.ajax({
			url: prefix+'/userprofile/get_city_partner',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			html+="<option value='' selected>--Select your City--</option>";
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
			}
			$('#r_city1').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_country_code',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+=data[i]['name'];
			}
			$('#cp_phone_code').val(html);
			
		});
	});
	$('#rit_country').on('change',function(){
		var id = $(this).val();
		var prefix=$('#prefix').val();
		$.ajax({
			url: prefix+'/userprofile/get_city_partner',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			html+="<option value='' selected>--Select your City--</option>";
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
			}
			$('#rit_city').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_country_code',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+=data[i]['name'];
			}
			$('#rit_phone_code').val(html);
			
		});
	});
	$('#riv_country').on('change',function(){
		var id = $(this).val();
		var prefix=$('#prefix').val();
		$.ajax({
			url: prefix+'/userprofile/get_city_partner',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			html+="<option value='' selected>--Select your City--</option>";
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
			}
			$('#riv_city').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_currency',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"' selected disabled>"+data[i]['name']+"</option>";
			}
			$('#riv_currency').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_country_code',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+=data[i]['name'];
			}
			$('#riv_phone_code').val(html);
			
		});
	});
	$('#cu_country').on('change',function(){
		var id = $(this).val();
		var prefix=$('#prefix').val();
		$.ajax({
			url: prefix+'/userprofile/get_city_partner',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			html+="<option value='' selected>--Select your City--</option>";
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
			}
			$('#cu_city').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_country_code',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+=data[i]['name'];
			}
			$('#cu_phone_code').val(html);
			
		});
	});
	$('#pe_country').on('change',function(){
		var id = $(this).val();
		var prefix=$('#prefix').val();
		$.ajax({
			url: prefix+'/userprofile/get_city_partner',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			html+="<option value='' selected>--Select your City--</option>";
			for(i=0;i<data.length;i++){
				html+="<option value='"+data[i]['id']+"'>"+data[i]['name']+"</option>";
			}
			$('#pe_city').html(html);
			
		});	
		$.ajax({
			url: prefix+'/userprofile/get_country_code',
			type: 'POST',
			data: {'country_id':id},
			dataType:'JSON',
		}).done(function(data){
			var i=0,html=''; 
			for(i=0;i<data.length;i++){
				html+=data[i]['name'];
			}
			$('#pe_phone_code').val(html);
			
		});
	});
	$('#submit_request_inhouse').on('click',function(){
		$('.text-error').addClass('hide');
		var prefix=$('#prefix').val();
		rit_name=$('#rit_name').val(), 
		rit_organization=$('#rit_organization').val(), 
		rit_email=$('#rit_email').val(), 
		rit_course=$('#rit_course').val(), 
		rit_country=$('#rit_country').val(), 
		rit_city=$('#rit_city').val(), 
		rit_phone_number=$('#rit_phone_number').val(), 
		rit_participant=$('#rit_participant').val(), 
		rit_message=$('#rit_message').val();
		if(rit_name!='' && rit_organization!='' && rit_email!='' && rit_course!='' && rit_country!='' && rit_city!='' && rit_phone_number!='' && (rit_participant!='' && rit_participant!=0) && rit_message!='' && validateEmail(rit_email)){
			$('#submit_request_inhouse').attr('disabled','disabled');
			$('#submit_request_inhouse').attr('value','Sending');
				$.ajax({
					url: prefix+'/auth/submit_request_inhouse',
					type: 'POST',
					data:{'rit_name':rit_name, 'rit_organization':rit_organization, 'rit_email':rit_email, 'rit_course':rit_course, 'rit_country':rit_country, 'rit_city':rit_city, 'rit_phone_number':rit_phone_number, 'rit_participant':rit_participant, 'rit_message':rit_message},
					dataType: 'json'
				}).done(function(data){
					if(data){
						$('#request-inhouse').modal('hide');
						$('.drop_a_query_error').modal('show');
						$('.query_error').html('Request sent successfully');
						$('.query_error').removeClass('text-error');
						$('.query_error').addClass('text-success');
						$('#submit_request_inhouse').attr('disabled',false);
						$('#rit_name').val('');
						$('#rit_organization').val('');
						$('#rit_email').val('');
						$('#rit_course').val('');
						$('#rit_country').val('');
						$('#rit_city').val('');
						$('#rit_phone_number').val('');
						$('#rit_participant').val('');
						$('#rit_message').val('');
					}else{
						$('#request-inhouse').modal('hide');
						$('.drop_a_query_error').modal('show');
						$('.query_error').html('Request not sent, try again later');
						$('.query_error').removeClass('text-success');
						$('.query_error').addClass('text-error');
						$('#submit_request_inhouse').attr('disabled',false);
						$('#rit_name').val('');
						$('#rit_organization').val('');
						$('#rit_email').val('');
						$('#rit_course').val('');
						$('#rit_country').val('');
						$('#rit_city').val('');
						$('#rit_phone_number').val('');
						$('#rit_participant').val('');
						$('#rit_message').val('');
					}
					setTimeout(function(){location.reload();},2000);
				}).always(function(){
						ga('create', 'UA-26040453-1');
						ga('send', 'event', 'category-Request for Inhouse Training', 'action-submit', 'label-Request for inhouse submit'); // signal GA that this is an event
				});
		}
		else{
			if(rit_name==''){
				$('#rit_name_error').html('Please enter your Name');
				$('#rit_name_error').removeClass('hide');
			}
			if(rit_organization==''){
				$('#rit_organization_error').html('Please enter your Organization');
				$('#rit_organization_error').removeClass('hide');
			}
			if(rit_course==''){
				$('#rit_course_error').html('Please select a Course');
				$('#rit_course_error').removeClass('hide');
			}
			if(rit_country==''){
				$('#rit_country_error').html('Please select a Country');
				$('#rit_country_error').removeClass('hide');
			}
			if(rit_city==''){
				$('#rit_city_error').html('Please select a City');
				$('#rit_city_error').removeClass('hide');
			}
			if(rit_phone_number==''){
				$('#rit_phone_number_error').html('Please enter your Phone number');
				$('#rit_phone_number_error').removeClass('hide');
			}
			if(rit_participant=='' || rit_participant==0){
				$('#rit_participant_error').html('Please enter number of Participants');
				$('#rit_participant_error').removeClass('hide');
			}
			if(rit_email==''){
				$('#rit_email_error').html('Please enter your Email-id');
				$('#rit_email_error').removeClass('hide');
			}
			if(!validateEmail(rit_email) && rit_email!=''){
				$('#rit_email_error').html('Entered Email-id is invalid');
				$('#rit_email_error').removeClass('hide');
			}
			if(rit_message==''){
				$('#rit_message_error').html('Please enter your Message');
				$('#rit_message_error').removeClass('hide');
			}
		}
	});
	
	$('#submit_request_invoice').on('click',function(){
		$('.text-error').addClass('hide');
		var prefix=$('#prefix').val(); 
		riv_name=$('#riv_name').val(), 
		riv_email=$('#riv_email').val(), 
		riv_course=$('#riv_course').val(), 
		riv_country=$('#riv_country').val(), 
		riv_city=$('#riv_city').val(), 
		riv_phone_number=$('#riv_phone_number').val(), 
		riv_company_name=$('#riv_company_name').val(), 
		riv_participant=$('#riv_participant').val(), 
		riv_currency=$('#riv_currency').val(), 
		riv_amount=$('#riv_amount').val(), 
		riv_message=$('#riv_message').val();
		riv_billing_address=$('#riv_billing_address').val();
		if(riv_name!='' && riv_company_name!='' && riv_email!='' && riv_course!='' && riv_country!='' && riv_city!='' && riv_phone_number!='' && (riv_participant!='' && riv_participant!=0) && riv_currency!='' && riv_amount!='' && riv_message!='' && riv_billing_address!='' && validateEmail(riv_email)){
			$('#submit_request_invoice').attr('disabled','disabled');
			$('#submit_request_invoice').attr('value','Sending');
				$.ajax({
					url: prefix+'/auth/submit_request_invoice',
					type: 'POST',
					data:{'riv_name':riv_name, 'riv_company_name':riv_company_name, 'riv_email':riv_email, 'riv_course':riv_course, 'riv_country':riv_country, 'riv_city':riv_city, 'riv_phone_number':riv_phone_number, 'riv_participant':riv_participant, 'riv_currency':riv_currency, 'riv_amount':riv_amount,'riv_message':riv_message, 'riv_billing_address':riv_billing_address},
					dataType: 'json'
				}).done(function(data){
					if(data){
						$('#request-invoice').modal('hide');
						$('.drop_a_query_error').modal('show');
						$('.query_error').html('Request sent successfully');
						$('.query_error').removeClass('text-error');
						$('.query_error').addClass('text-success');
						$('#submit_request_invoice').attr('disabled',false);
						$('#riv_name').val('');
						$('#riv_company_name').val('');
						$('#riv_email').val('');
						$('#riv_course').val('');
						$('#riv_country').val('');
						$('#riv_city').val('');
						$('#riv_phone_number').val('');
						$('#riv_participant').val('');
						$('#riv_currency').val('');
						$('#riv_amount').val('');
						$('#riv_message').val('');
						$('#riv_billing_address').val('');
					}else{
						$('#request-invoice').modal('hide');
						$('.drop_a_query_error').modal('show');
						$('.query_error').html('Request not sent, try again later');
						$('.query_error').removeClass('text-success');
						$('.query_error').addClass('text-error');
						$('#submit_request_invoice').attr('disabled',false);
						$('#riv_name').val('');
						$('#riv_company_name').val('');
						$('#riv_email').val('');
						$('#riv_course').val('');
						$('#riv_country').val('');
						$('#riv_city').val('');
						$('#riv_phone_number').val('');
						$('#riv_participant').val('');
						$('#riv_currency').val('');
						$('#riv_amount').val('');
						$('#riv_message').val('');
						$('#riv_billing_address').val('');
					}
					setTimeout(function(){location.reload();},2000);
				}).always(function(){
						ga('create', 'UA-26040453-1');
						ga('send', 'event', 'category-Request for Invoice', 'action-submit', 'label-Invoice Submit'); // signal GA that this is an event
				});
		}
		else{
			if(riv_name==''){
				$('#riv_name_error').html('Please enter your Name');
				$('#riv_name_error').removeClass('hide');
			}
			if(riv_company_name==''){
				$('#riv_company_name_error').html('Please enter your Company Name');
				$('#riv_company_name_error').removeClass('hide');
			}
			if(riv_course==''){
				$('#riv_course_error').html('Please select a Course');
				$('#riv_course_error').removeClass('hide');
			}
			if(riv_country==''){
				$('#riv_country_error').html('Please select a Country');
				$('#riv_country_error').removeClass('hide');
			}
			if(riv_city==''){
				$('#riv_city_error').html('Please select a City');
				$('#riv_city_error').removeClass('hide');
			}
			if(riv_phone_number==''){
				$('#riv_phone_number_error').html('Please enter your Phone number');
				$('#riv_phone_number_error').removeClass('hide');
			}
			if(riv_participant=='' || riv_participant==0){
				$('#riv_participant_error').html('Please enter number of Participants');
				$('#riv_participant_error').removeClass('hide');
			}
			if(riv_email==''){
				$('#riv_email_error').html('Please enter your Email-id');
				$('#riv_email_error').removeClass('hide');
			}
			if(riv_currency==''){
				$('#riv_currency_error').html('Please select your Currency');
				$('#riv_currency_error').removeClass('hide');
			}
			if(riv_amount==''){
				$('#riv_amount_error').html('Please enter the Amount');
				$('#riv_amount_error').removeClass('hide');
			}
			if(!validateEmail(riv_email) && riv_email!=''){
				$('#riv_email_error').html('Entered Email-id is invalid');
				$('#riv_email_error').removeClass('hide');
			}
			if(riv_message==''){
				$('#riv_message_error').html('Please enter your Message');
				$('#riv_message_error').removeClass('hide');
			}
			if(riv_billing_address==''){
				$('#riv_billing_address_error').html('Please enter your Billing Address');
				$('#riv_billing_address_error').removeClass('hide');
			}
		}
	});

	$('#submit_support').on('click',function(){
		$('#support_name_error').html('');
		$('#support_email_error').html('');
		$('#support_message_error').html('');
		
		var support_name = $('#support_name').val();
		var support_email = $('#support_email').val();
		var support_message = $('#support_message').val();
		var prefix=$('#prefix').val();
		
		$('.text-error').addClass('hide');
		if(support_name!='' && support_email!='' && support_message!=''){
			var formData = new FormData($('#my_support')[0]);
			formData.append( 'support_name',support_name);
			formData.append( 'support_email',support_email);
			formData.append( 'support_message',support_message);
			$.ajax({
				url: prefix+'/userprofile/send_email',
				type:'POST',
				data: formData,
				processData: false,
				contentType: false,
				dataType:'JSON'
			}).done(function(data){
				if(data.status == "success"){
					$('.support_form').modal('hide');
					$('.drop_a_query_error').modal('show');
					$('.query_error').html('Request sent successfully');
					$('.query_error').removeClass('text-error');
					$('.query_error').addClass('text-success');
					$('#support_name').val('');
					$('#support_email').val('');
					$('#support_message').val('');
					$('.support_form').modal('hide');
				}
				else{
					$('.support_form').modal('hide');
					$('.drop_a_query_error').modal('show');
					$('.query_error').html('Error, please try again later!');
					$('.query_error').removeClass('text-error');
					$('.query_error').addClass('text-success');
					$('#support_name').val('');
					$('#support_email').val('');
					$('#support_message').val('');
					$('.support_form').modal('hide');
				}
			});
		}
		else{
			if(support_name==''){
				$('#support_name_error').html('Please enter your Name');
				$('#support_name_error').removeClass('hide');
			}
			if(support_email==''){
				$('#support_email_error').html('Please enter your EmailID');
				$('#support_email_error').removeClass('hide');
			}
			if(!validateEmail(support_email) && support_email!=''){
				$('#support_email_error').html('Entered Email-id is invalid');
				$('#support_email_error').removeClass('hide');
			}
			if(support_message==''){
				$('#support_message_error').html('Please enter your Message');
				$('#support_message_error').removeClass('hide');
			}
		}
	});
	
	
	$('#submit_feedback_form').on('click',function(){
		$('.text-error').addClass('hide');
		var prefix=$('#prefix').val(); 
		feedback_name=$('#feedback_name').val(), 
		feedback_email=$('#feedback_email').val(), 
		feedback_category=$('#feedback_category').val(), 
		feedback_message=$('#feedback_message').val();
		
		if(feedback_name!='' && feedback_email!='' && feedback_category!='' && feedback_message!=''){
			$('#submit_feedback_form').attr('disabled','disabled');
			$('#submit_feedback_form').attr('value','Sending');
				$.ajax({
					url: prefix+'/userprofile/submit_feedback_form',
					type: 'POST',
					data:{'feedback_name':feedback_name, 'feedback_email':feedback_email, 'feedback_category':feedback_category, 'feedback_message':feedback_message},
					dataType: 'json'
				}).done(function(data){
					if(data){
						$('#request-invoice').modal('hide');
						$('.drop_a_query_error').modal('show');
						$('.query_error').html('Request sent successfully');
						$('.query_error').removeClass('text-error');
						$('.query_error').addClass('text-success');
						$('#submit_feedback_form').attr('disabled',false);
						$('#feedback_name').val('');
						$('#feedback_email').val('');
						$('#feedback_category').val('');
						$('#feedback_message').val('');
					}else{
						$('#request-invoice').modal('hide');
						$('.drop_a_query_error').modal('show');
						$('.query_error').html('Request not sent, try again later');
						$('.query_error').removeClass('text-success');
						$('.query_error').addClass('text-error');
						$('#submit_feedback_form').attr('disabled',false);
						$('#feedback_name').val('');
						$('#feedback_email').val('');
						$('#feedback_category').val('');
						$('#feedback_message').val('');
						
					}
					setTimeout(function(){location.reload();},2000);
				});
		}
		else{
			if(feedback_name==''){
				$('#feedback_name_error').html('Please enter your Name');
				$('#feedback_name_error').removeClass('hide');
			}
			if(feedback_email==''){
				$('#feedback_email_error').html('Please enter your Email-id');
				$('#feedback_email_error').removeClass('hide');
			}
			if(!validateEmail(feedback_email) && feedback_email!=''){
				$('#feedback_email_error').html('Entered Email-id is invalid');
				$('#feedback_email_error').removeClass('hide');
			}
			if(feedback_message==''){
				$('#feedback_message_error').html('Please enter your Message');
				$('#feedback_message_error').removeClass('hide');
			}
			if(feedback_category==''){
				$('#feedback_category_error').html('Please select a Category');
				$('#feedback_category_error').removeClass('hide');
			}
		}
	});
	
// On click of document
$(document).click(function() { 

	if($('#offer-popup').hasClass('show')) {
			
		$("#offer-popup").removeClass('show');
		$("#offer-popup").addClass('hide');	
	}
});

// Special offer tooltip
$( ".offer-btn" ).click(function(e) {
	
	e.stopPropagation();

	if(!$('#offer-popup').hasClass('hide')) {

		$("#offer-popup").removeClass('show');
		$("#offer-popup").addClass('hide');	
	} else {
			
		$("#offer-popup").removeClass('hide');
		$("#offer-popup").addClass('show');	
	}
});
//Drop a Query
function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}

$('#submit_drop_a_query').on('click',function(){
	$('.text-error').addClass('hide');
	$('.text-success').addClass('hide');
	var course=$('#d_course').val(),prefix=$('#prefix').val(), name=$('#d_name').val(),email=$('#d_email').val(), phone=$('#d_phone').val(), query=$('#d_message').val();
	if(course!='' && name!='' && email!='' && query!='' && validateEmail(email) && phone!='' && phone.length>4){
		$('#submit_drop_a_query').attr('disabled','disabled');
		$('#submit_drop_a_query').attr('value','Sending');
			$.ajax({
				url: prefix+'/auth/ajax_drop_query',
				type: 'POST',
				data:{'course':course,'name':name, 'email':email, 'phone':phone, 'query':query},
				dataType: 'json'
			}).done(function(data){
				if(data){
					$('#drop_a_query').modal('hide');
					$('.drop_a_query_error').modal('show');
					$('.query_error').html('Request sent successfully');
					$('.query_error').removeClass('text-error');
					$('.query_error').addClass('text-success');
					$('#submit_drop_a_query').attr('disabled',false);
					$('#d_name').val('');
					$('#d_email').val('');
					$('#d_message').val('');
					$('#d_phone').val('');
				}else{
					$('#drop_a_query').modal('hide');
					$('.drop_a_query_error').modal('show');
					$('.query_error').html('Request not sent');
					$('.query_error').removeClass('text-success');
					$('.query_error').addClass('text-error');
					$('#submit_drop_a_query').attr('disabled',false);
					$('#d_name').val('');
					$('#d_email').val('');
					$('#d_message').val('');
					$('#d_phone').val('');
				}
				//setTimeout(function(){location.reload();},2000);
			}).always(function(){
					ga('create', 'UA-26040453-1');
					ga('send', 'event', 'category-Drop a Query', 'action-Submit', 'label-Drop a query submit'); // signal GA that this is an event
			});
	}
	else{
		if(name==''){
			$('#d_name_error').html('Please enter name');
			$('#d_name_error').removeClass('hide');
		}
		if(query==''){
			$('#d_message_error').html('Please enter message');
			$('#d_message_error').removeClass('hide');
		}
		if(email==''){
			$('#d_email_error').html('Please enter Email id');
			$('#d_email_error').removeClass('hide');
		}
		if(phone==''){
			$('#d_phone_error').html('Please enter your Phone');
			$('#d_phone_error').removeClass('hide');
		}
		if(!validateEmail(email) && email!=''){
			$('#d_email_error').html('Please enter valid email address');
			$('#d_email_error').removeClass('hide');
		}
		if(course==''){
			$('#d_course_error').html('Please select the course');
			$('#d_course_error').removeClass('hide');
		}
	}
});

//Drop a Query
$('#subscribe_btn').on('click',function () {
	var email=$('#subscribe').val();
	if(email!="" && validateEmail(email)){
		$('#subscribe_btn').attr('disabled','disabled');
		$.ajax({
			url: '/auth/ajax_subscribe',
			type: 'POST',
			data:{'email':email},
			dataType: 'json'
		}).done(function(data){
			$('#subscribe_btn').attr('disabled',false);
		});
	}else{
		if(email==''){
			$('#subscribe_error').html('This field is required');
			$('#subscribe_error').removeClass('hide');
		}
		if(!validateEmail(email) && email!=''){
			$('#subscribe_error').html('Enter Valid Email');
			$('#subscribe_error').removeClass('hide');
		}
	}
});
$('#query_btn').on('click',function () {
	$('.text-error').addClass('hide');
	$('.text-success').addClass('hide');
	$('#query_status').removeClass('text-error');
	$('#query_status').removeClass('text-success');
	var course=$('#q_course').val(),name=$('#q_name').val(),email=$('#q_email').val(),query=$('#query').val(),phone=$('#q_phone').val(),page=$('#page_name').val(),path=$('#path').val();;
	if(name!='' && course!='' && email!='' && query!='' && validateEmail(email) && phone.length>4){
		$('#query_btn').attr('disabled','disabled');
		$.ajax({
			url: path+'auth/ajax_drop_query',
			type: 'POST',
			data:{'course':course,'name':name,'email':email,'query':query,'phone':phone, 'page':page},
			dataType: 'json'
		}).done(function(data){
			if(data){
				$('#query_status').html('Message successfully sent.');
				$('#query_status').addClass('text-success');
				$('#query_status').removeClass('hide');
				$('#query_btn').attr('disabled',false);
				$('#q_name').val('');$('#q_email').val('');$('#query').val('');$('#q_phone').val('');
			}else{
				$('#query_status').html('Please try again later.');
				$('#query_status').addClass('text-error');
				$('#query_status').removeClass('hide');
			}
		}).always(function(){
				ga('create', 'UA-26040453-1');
				ga('send', 'event', 'category-Drop a Query', 'action-Submit', 'label-Drop a query submit'); // signal GA that this is an event
		});
	}else{
		if(name==''){
			$('#q_name_error').html('This field is required');
			$('#q_name_error').removeClass('hide');
		}
		if(email==''){
			$('#q_email_error').html('This field is required');
			$('#q_email_error').removeClass('hide');
		}
		if(phone==''){
			$('#q_phone_error').html('This field is required');
			$('#q_phone_error').removeClass('hide');
		}
		if(course==''){
			$('#q_course_error').html('This field is required');
			$('#q_course_error').removeClass('hide');
		}
		if(phone!='' && phone.length<5){
			$('#q_phone_error').html('Enter valid phone number');
			$('#q_phone_error').removeClass('hide');
		}
		if(!validateEmail(email) && email!=''){
			$('#q_email_error').html('Enter Valid Email');
			$('#q_email_error').removeClass('hide');
		}
		if(query==''){
			$('#query_error').html('This field is required');
			$('#query_error').removeClass('hide');
		}
	}
});
	
//Closing description label in all category pages
//===============================================
$('.close-description').on('click',function(){
	$('.category-description').addClass('hide');
}); 

$('.visible-in').on('shown.bs.collapse', function(){
$(this).parent().find(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-chevron-up").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
});

$('.ul-lists a.scroll-tab').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
})

$('.ul-lists a.scroll-tab').on('click', function (e) {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 80
    }, 'slow');
    e.preventDefault();
});
//Timezone
$("#timezone_btn").click(function(){
	var tid=$('#timezone').val();
	var cid=$('#country').val();
	var path=$('#path').val();
	if(tid != '' && tid != null && cid != '' && cid != null){
		$("#timezone_btn").attr('disabled','disabled');
		$.ajax({
			url: path+'webinar/set_timezone',
			type: 'POST',
			data:{'timezoneID':tid,'countryID':cid},
			dataType: 'json'
		}).done(function(data){
			window.location.reload();
		});
	}else{
		alert('Please try again later..');
	}
});
//Live chat 
//====================================
// window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
// d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
// _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
// $.src='//v2.zopim.com/?1nYTxEgVmvd5mYJ4Oo8tLPC5gZzJ3OsZ';z.t=+new Date;$.
// type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
