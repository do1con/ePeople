
jQuery(document).ready(function(){

	/*-------=========메인=======--------*/

	
	bb = true;
	$('.toggleBtn').click(function(){
		if(bb){
			$('.quickMenuList').stop().animate({'height':'230px'},500,function(){bb=false;});
		}else{
			$('.quickMenuList').stop().animate({'height':'0px'},500,function(){bb=true;});
		}
	});
	
	/* 메인 탑 메뉴 */
	
	var menu = $('#TopNav>li'); 	//1depth 입니다.
	var wrap = $('#menuArea');	//1 + 2depth 입니다.
	var menuHeight = wrap.height();
	// menuHeight = 1depth_height 입니다.
	var pageURL = location.href;
	// pageURL = 현재 페이지의 주소 입니다.
	// 예를들면 
	// http://www.hschool/project/sub/2depth_menu.html
	var activeMenu;
	menu.on({
		mouseover:function(){
			var tg = $(this);
			menu.removeClass('on');
			tg.addClass('on');
			var th = menuHeight + tg.find('>.width100').height();
			//var th = 1depth_height + 2depth_height
			wrap.stop().animate({'height':th},300);
		},
		mouseout:function(){
			var tg = $(this);
			// var th = 1depth_height + 2depth_height
			wrap.stop().animate({'height':menuHeight},300,function(){
				tg.removeClass('on');
			});
			
			//onActive();
		}
	});
	menu.each(function(i){ //0~4
		var tg = $(this);
		var sub = tg.find('>.width100>ul>li>ul>li');
		var menuURL = tg.children('a').attr('href');
		// menuURL = 2depth_menu.html
		var active = pageURL.indexOf(menuURL);
		if(active > -1) {activeMenu = tg;
		}
		
		sub.each(function(j){	// 2depth 길이만큼~
			var tg = $(this);
			var subURL = tg.children('a').attr('href');
			active = pageURL.indexOf(subURL);
			if(active > -1) activeMenu = tg;
		}); 
		sub.on({
			mouseover:function(){
				var tg = $(this);
				sub.removeClass('on');
				tg.addClass('on');
			}
			,mouseout:function(){
				var tg = $(this);
				tg.removeClass('on');
				//onActive();
			}
		});
	});
	//onActive();
	function onActive(){
		if(activeMenu) activeMenu.trigger('mouseover');
		//
	};
	
	/* 메인 컨텐츠 호버 메뉴 */
	$('.listMenu>ul>li').each(function(){
		var menu = $(this);
		menu.hover(function(){
				menu.find('ul').stop().fadeIn(200);
			},
			function(){
				menu.find('ul').stop().fadeOut(200);
			}
		);
	});
	
	/* 메인 비주얼 SLLLDIDE */
	
	var visual = $('#ssMainGrid>div');
	var button = $('.mainVisualGuide>.mvBtn');
	var pause = $('.mainVisualGuide>.player>.pause');
	var play = $('.mainVisualGuide>.player>.play');
	var current = 0;
	var time;
	
	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			if(i == current){return;}
			button.removeClass('on');
			tg.addClass('on');
			move(i);
		}
	});
	
	pause.click(function(){
		clearInterval(time);
		pause.hide();
		play.show();
	});
	play.click(function(){
		timer();
		play.hide();
		pause.show();
	});
	
	function move(i){
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		currentEl.css({left: '0%'}).stop().animate({left: '-100%'},function(){
		});
		if(i == 0){
			nextEl.find('img').css({'opacity':0});
			nextEl.find('h2').css({'opacity':0});
			nextEl.find('p').css({'opacity':0});
		}else if(i == 1){
			nextEl.find('img').css({'opacity':0});
			nextEl.find('h2').css({'opacity':0,'margin-left':'-100px'});
			nextEl.find('p').css({'opacity':0,'margin-top':'100px'});
		}else if(i == 2){
			nextEl.find('img').css({'opacity':0,'margin-top':'70px'});
			nextEl.find('h2').css({'opacity':0,'margin-left':'-100px'});
			nextEl.find('p').css({'opacity':0,'margin-top':'-100px'});
		}
		nextEl.css({left: '100%'}).stop().animate({left: '0%'},function(){
			if(i == 0){
				
				nextEl.find('img').css({'margin-top': '200px'}).animate({'margin-top': '120px','opacity':'1'},700,function(){
					nextEl.find('h2').css({'margin-left': '-100px'}).animate({'margin-left': '0px','opacity':'1'},700);
					nextEl.find('p').css({'margin-left': '200px'}).animate({'margin-left': '0px','opacity':'1'},700);
				});
			}else if(i == 1){
				nextEl.find('img').animate({'opacity':'1'},700,function(){
					nextEl.find('h2').animate({'opacity':'1','margin-left':'0'},700);
					nextEl.find('p').animate({'opacity':'1','margin-top':'50px'},700);
				});
			}else if(i == 2){
				nextEl.find('img').animate({'opacity':'1'},700,function(){
					nextEl.find('h2').animate({'opacity':'1','margin-left':'0'},700);
					nextEl.find('p').animate({'opacity':'1','margin-top':'30px'},700);
				});
			}
		});
		current = i;
	};
	
	timer(); 
	
	function timer(){
		time = setInterval(function(){
			var n = current + 1;
			if(n==visual.size()){n = 0;}
			button.eq(n).trigger('click');
		},2500);
	};
	
	function stopTimer(){
		clearInterval(time);
	};
	
	/* 메인베너 이벤트 */
	
	$('#mainBanner>.banner').each(function(){
		var banners = $(this);
		banners.css('margin-top','400px').fadeIn().animate({'margin-top': '50px', 'opacity':'1'},500);
	});
	
	
	/* 안전365 호버시 이벤트 */
    $('.safe365Width>div>div>a').each(function(){
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
	});
	
	
	/* 탭메뉴 */
	$('#ssLogin').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('.loginTab>a');
		var panelDivs = topDiv.find('div.tabs');
		var lastAnchor;
		var lastPanel;
		anchors.show();
		
		lastAnchor = anchors.filter('.on');
		//lastAnchor = <a href="#panel1-1" class="on">panel1</a>
		lastAnchor.css('border-bottom','0px solid #ffffff;');
		lastAnchor.css('color','#0a284c;');
		lastPanel = $(lastAnchor.attr('href'));
		//lastPanel = $('#panel1-1');
		
		panelDivs.hide();
		lastPanel.show();
		anchors.click(function(e){
			e.preventDefault();
			//하이퍼링크 중지(html에서 일어나는 기본 이벤트 중지)
			//return false; //preventDefault와 동일한 효과
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			if(currentAnchor.get(0)===lastAnchor.get(0)){ 
			//또클릭할 경우
				return;
			}
			lastPanel.stop().fadeOut(200,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop().fadeIn(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			});
		});
	});
	
	/* 공지사항 슬라이드 */
	var interval = 4000;
	var timer;
	$('.ssNoticeLine').each(function(){
		
		var container = $('.ssNoticeContainer');
		
		function switchImg(){
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			var last = anchors.last();
			first.stop().slideUp().appendTo(container);
			second.stop().slideDown();
		};

		function startTimer(){
		 	timer = setInterval(switchImg, interval);
		};

		function stopTimer(){
			clearInterval(timer);
		};

		container.find('a').hover(stopTimer, startTimer);
		startTimer();

	});

	/* 공지사항 버튼 */

		$('.ssNoticeLine>p>input').click(function(){

			var container = $('.ssNoticeContainer');
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			var third = anchors.eq(2);
			var last = anchors.last();

			var throttle = null;
			if (!throttle){

				throttle = setTimeout(function(){
					if($(this).hasClass('before')){

						last.slideDown(function(){
							last.prependTo(container);
						});
						first.slideUp(function(){
							first.insertAfter(last);
						});

					} else if ($(this).hasClass('pause')){

						clearInterval(timer);

					} else if ($(this).hasClass('next')){

					}
					throttle = null;
			},500);
			throttle();
		}
	});
	
	/* 나의 제안이 이렇게 반영되었어요 슬라이드 */
	var intervalCa = 6000;
	$('.cAnswerTap').each(function(){
		var timer;
		var container = $(this);
		
		function switchImg(){
			var anchors = container.find('.ssCivilAnswer');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			var last = anchors.last();
			first.stop().fadeOut().appendTo(container);
			second.stop().fadeIn();
			
		};
		function startTimer(){
			timer = setInterval(switchImg, intervalCa);
		};
		function stopTimer(){
			clearInterval(timer);
		};
		container.find('a').hover(stopTimer, startTimer);
		startTimer();
	});
	//말풍선
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition (x, y){
		balloon.css({left: x+4, top: y});
	};
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},300);
	};
	function hideBalloon(){
		balloon.stop().animate({opacity:0},300,function(){balloon.hide()});
	};
	$('.titled').each(function(){
		var element = $(this);
		var text = element.attr('title');
		// text = 도큐먼트를 기술하기 위한 언어입니다.
		element.attr('title','');
		element.hover(
			function(event){ //기본이벤트
				balloon.text(text);
				updateBalloonPosition(event.pageX, event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
	
	/*-------=========모든서브 lnb=======--------*/
	// var pageURL = location.href;
	// pageURL = 현재 페이지의 주소 입니다.
	// 예를들면 
	// http://www.hschool/project/sub/2depth_menu.html
	var activeSideMenu;
	
	function sideOnActive(){
		if(activeSideMenu) activeSideMenu.trigger('mouseover');
		//
	};
	
	$('#ssLnb>#ssSideMenu>ul').each(function(){
		var sideMenu = $(this).children('li');
		var sideMenuHeight;
		sideMenu.each(function(){
			var oneDepthLink = $(this).children('a').attr('href');
			var active = pageURL.indexOf(oneDepthLink);
			if(active > -1) {
				activeSideMenu = $(this);
			}
			$(this).find('ul>li').each(function(){
				var twoDepthLink = $(this).children('a').attr('href');
				active = pageURL.indexOf(twoDepthLink);
				if(active > -1) {
					activeSideMenu = $(this);
				}
			});
		});
		sideMenu.on({
			mouseover:function(){
				var listMenu = $(this).find('ul');
				var menuHeight = listMenu.height() + 50;
				
				$(this).animate({'height':menuHeight},50);
				$(this).addClass('current');
				listMenu.find('li').on({
					mouseover:function(){
						$(this).children('a').addClass('current');
					},
					mouseout:function(){
						$(this).children('a').removeClass('current');
						//sideOnActive(); // 이거 쓰면 콜백지옥
					}
				});
			},
			mouseout:function(){
				$(this).animate({'height':'50px'},50);
				$(this).removeClass('current');
				sideOnActive();
			}
		});
		sideOnActive();
	});

	/*-------=========서브1=======--------*/
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
	/*-------=========서브4=======--------*/
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
	/*-------=========서브5=======--------*/
	var contentList2 = $('.listed');
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
			contentList2.append(column);
			contentList2.append(texts);
			
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
	
/*-------=========플러그인=======--------*/
	/* 행사메뉴 호버 애니메이트 */
	$('.eventList>div').imageHover();
	
	/* 포커스 시 기본밸류 사라지는 이벤트 플러그인*/
	$('.focus').focusText();
});





