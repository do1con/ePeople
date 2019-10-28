$.fn.imageHover = function(){
	this.each(function(){
		var thing = $(this);
		var texts = thing.find('a>.texts');
		thing.hover(
			function(){
				texts.animate({'top':'0px'},300);
			}
			,function(){
				texts.animate({'top':'250px'},300);
			}
		);
	});
	return this;
};