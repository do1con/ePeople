/* window.open("popup/popup.html", "", "resizable=no,toolbar=no,width=400, height=380, location=no, directories=no, status=no")
 */
jQuery(document).ready(function(){

	 $('.focus').each(function(){
		var placeHolder = $(this);
		var defVal = this.defaultValue;
		function focused(){
			placeHolder.val('');
		};
		function blurred(){
			placeHolder.val(defVal);
		};
		placeHolder.focus(function(){
			if(placeHolder.val()===defVal){
				placeHolder.focused();
			};
			if(placeHolder.val()===defVal){
				this.blurred();
			};
		});
		
	}); 
	var contentList = $('.listed');
	$.getJSON('data.json',function(list){
		$.each(list,function(i,column){
			var text_category = column.category;
			var text_title = column.title;
			var text_div = column.solveDiv;
			var text_date = column.date;
			var text_view = column.view;
			var text_content = column.content;
			var column = $('<div class="column cf"/>');
			var q = $('<span class="Q fl"/>').text('Q');
			var category = $('<span class="fl category"/>').text(text_category);
			var title = $('<span class="fl titleName">').html(text_title);
			var date = $('<span class="date fl"/>').text(text_date);
			var view = $('<span class="view fl"/>').text(text_view);
			var plusButton = $('<span class="fl plusButton"/>').text('+');
			
			var texts = $('<div class="texts cf"/>');
			var a = $('<span class="Q_Line fl"/>').text('A');
			var content = $('<span class="actualContent fl"/>').html(text_content);
			
			column.append(q);
			column.append(category);
			column.append(title);
			column.append(date);
			column.append(view);
			column.append(plusButton);
			texts.append(a);
			texts.append(content);
			contentList.append(column);
			contentList.append(texts);
			
			var class_opened = 'opened';
			$('.listed').each(function(){
				var list = $(this);
				var allColumn = list.find('.column');
				var allTexts = list.find('.texts');
				function closeAll(){
					allTexts.removeClass(class_opened);
				};
				
				function open(texts){
					texts.addClass(class_opened);
				};
				closeAll();
				allColumn.click(function(){
					var Column = $(this);
					var texts = Column.next();
					closeAll();
					open(texts);
				});
			});
		});
	}); 

});