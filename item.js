// display contents of personal info ecperience projects etc

function show1(){
	$(".personal").css("display","block");
	$(".exp").css("display","none");
	$(".edu").css("display","none");
	$(".skill").css("display","none");
	$(".inter").css("display","none");
	$(".projects").css("display","none");
}

function show2(){
	$(".personal").css("display","none");
	$(".exp").css("display","block");
	$(".edu").css("display","none");
	$(".skill").css("display","none");
	$(".inter").css("display","none");
	$(".projects").css("display","none");
}

function show3(){
	$(".personal").css("display","none");
	$(".exp").css("display","none");
	$(".edu").css("display","block");
	$(".skill").css("display","none");
	$(".inter").css("display","none");
	$(".projects").css("display","none");
}

function show4(){
	$(".personal").css("display","none");
	$(".exp").css("display","none");
	$(".edu").css("display","none");
	$(".skill").css("display","block");
	$(".inter").css("display","none");
	$(".projects").css("display","none");
}

function show5(){
	$(".personal").css("display","none");
	$(".exp").css("display","none");
	$(".edu").css("display","none");
	$(".skill").css("display","none");
	$(".inter").css("display","block");
	$(".projects").css("display","none");
}
function show6(){
	$(".personal").css("display","none");
	$(".exp").css("display","none");
	$(".edu").css("display","none");
	$(".skill").css("display","none");
	$(".inter").css("display","none");
	$(".projects").css("display","block");
}

//to display about each project
function to(){
	$(".toDisp").css("display","block");
	$(".bookDisp").css("display","none");
	$(".portDisp").css("display","none");
	$(".flatDisp").css("display","none");
	$(".personal").css("display","none");
}
function book(){
	$(".toDisp").css("display","none");
	$(".bookDisp").css("display","block");
	$(".portDisp").css("display","none");
	$(".flatDisp").css("display","none");
}
function port(){
	$(".toDisp").css("display","none");
	$(".bookDisp").css("display","none");
	$(".portDisp").css("display","block");
	$(".flatDisp").css("display","none");
}
function flat(){
	$(".toDisp").css("display","none");
	$(".bookDisp").css("display","none");
	$(".portDisp").css("display","none");
	$(".flatDisp").css("display","block");
}