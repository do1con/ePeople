/* alert('a'); */

//숫자 자릿수 나누기
function unit(x){ //1의 자리 숫자 
	var m = x%10//x응10
	return m
}
function tenth(y){ //10의 자리 숫자 
	var m = y/10%10//10응10
	m = Math.floor(m)
	return m
}
function hund(z){ //100이상의 자리 숫자
	var m = z/100// 11234
	m = Math.floor(m)
	return m
}

//카운트 함수 정의
function ddaycount(){
	//숫자 이미지 배열
	arr = [
		'images/0.png',
		'images/1.png',
		'images/2.png',
		'images/3.png',
		'images/4.png',
		'images/5.png',
		'images/6.png',
		'images/7.png',
		'images/8.png',
		'images/9.png',
	]
	arr2 = [
		'images/D_00.png',
		'images/D_01.png',
		'images/D_02.png',
		'images/D_03.png',
		'images/D_04.png',
		'images/D_05.png',
		'images/D_06.png',
		'images/D_07.png',
		'images/D_08.png',
		'images/D_09.png',
	]
	doomsday = new Date('Dece 1, 2020 00:00:00')
	today = new Date()
	howfar = doomsday - today
	if(howfar>0){
		setTimeout('ddaycount()',1000)
	}else{
		clearTimeout('ddaycount()')
		document.getElementById('countment').innerHTML='카운트가 종료되었습니다.'
		return false
	}
	days = Math.floor(howfar/(1000*60*60*24))
	hours = Math.floor(howfar/(1000*60*60))
	mins = Math.floor(howfar/(1000*60))
	secs = Math.floor(howfar/(1000))	
	
	d = days
	h = hours-days*24
	m = mins-hours*60
	s = secs-mins*60
	
	document.getElementById('days10').setAttribute('src',arr[tenth(d)])
	document.getElementById('days1').setAttribute('src',arr[unit(d)])
	document.getElementById('hours10').setAttribute('src',arr2[tenth(h)])
	document.getElementById('hours1').setAttribute('src',arr2[unit(h)])
	document.getElementById('mins10').setAttribute('src',arr2[tenth(m)])
	document.getElementById('mins1').setAttribute('src',arr2[unit(m)])
	document.getElementById('secs10').setAttribute('src',arr2[tenth(s)])
	document.getElementById('secs1').setAttribute('src',arr2[unit(s)])
	if(d<10){d='00'+d}else if(d<100){d='0'+d}
	if(h<10){h='0'+h}
	if(m<10){m='0'+m}
	if(s<10){s='0'+s}
}














