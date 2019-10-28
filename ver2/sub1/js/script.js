/* window.open("popup/popup.html", "", "resizable=no,toolbar=no,width=400, height=380, location=no, directories=no, status=no")
 */
jQuery(document).ready(function(){
	$('.focus').each(function(){
		var guideText = this.defaultValue;
		//guideText = 이름을입력해주세요
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
			};
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText);
			};
		});
	});
	var blurred_class = 'blurredOut';
	$('.focus2').each(function(){
		var guideText = this.defaultValue;
		//guideText = 이름을입력해주세요
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass(blurred_class);
			};
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass(blurred_class);
			};
		});
		if(element.val()===guideText){
			element.addClass(blurred_class);
		};
	});
	var contentList = $('.contentList');
	$.getJSON('data.json',function(list){
		$.each(list,function(i,column){
			var text_num = column.num;
			var text_title = column.title;
			var text_div = column.solveDiv;
			var text_date = column.date;
			var column = $('<div class="column cf"/>');
			var num = $('<div class="num fl"/>').text(text_num);
			var title0 = $('<a href="#"/>').text(text_title);
			var title = $('<div class="title fl"/>').append(title0);
			var div = $('<div class="solveDiv fl"/>').text(text_div);
			var date = $('<div class="date fl"/>').text(text_date);
			column.append(num);
			column.append(title);
			column.append(div);
			column.append(date);
			contentList.append(column);
		});
	});
});