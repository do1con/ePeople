jQuery(document).ready(function(){
	$('.line>a>div').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		//src_off = images/menu01_off.png
		var src_on = src_off.replace('_black','_white');
		//src_on = images/menu01_on.png
		$('<img />').attr('src',src_on);
		a.bind('mouseenter focus', function(){
			img.attr('src',src_on);
		});
		a.bind('mouseleave blur', function(){
			img.attr('src',src_off);
		});
		/* a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		); */	
	});
});