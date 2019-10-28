$.fn.focusText = function(){
    $(this).each(function(){
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
	return this;
};