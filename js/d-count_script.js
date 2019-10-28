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

doomsday = new Date()
doomsday.setSeconds(doomsday.getSeconds() + 3)

//카운트 함수 정의
function ddaycount(){
	//숫자 이미지 배열
	arr = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
	]
	
	
	today = new Date()
	howfar = doomsday - today
	
	if(howfar>0){
		setTimeout('ddaycount()',1000)
	}else{
		clearTimeout('ddaycount()')
		document.getElementById('countment').innerHTML='카운트가 종료되었습니다.'
	/* 	window.open("http://localhost:8081/project03/logOut.jsp"); */
		location.href = "logOut.jsp";
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
	
	document.getElementById('secs10').innerHTML=arr[tenth(s)];
	document.getElementById('secs1').innerHTML=arr[unit(s)];
	if(d<10){d='00'+d}else if(d<100){d='0'+d}
	if(h<10){h='0'+h}
	if(m<10){m='0'+m}
	if(s<10){s='0'+s}
}














