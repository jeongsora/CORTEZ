$(function(){
	

//1.메인화면 사라지는 함수
var hideMain=function(){
	$("#main>.img").stop().hide();
	$("#main").delay(1000).stop().fadeOut(1300,function(){
		$("body").removeClass("ovh");
	});
};

var showMain=function(){
	$("#main").delay(1000).stop().fadeIn(1300,function(){
		$("body").addClass("ovh");
	});
}

//2.btm로고
var btmLogo=function(){
	$("#wrap>header>.btm").stop().animate({
		bottom:"10%"
	});

	if($(window).width()<769){
		$("#wrap>header>.btm").stop().animate({
			bottom:"17%"
		});
	}
}

var btmLogo_2=function(){
	$("#wrap>header>.btm").stop().animate({
		bottom:"4%"
	});
}

//3.메인메뉴 애니메이션 함수
var gnb_Ani=function(){
	$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).parent().siblings().css({
		visibility:"hidden",
		opacity: 0,
		width:"0%",
		"transition":"all 0.5s"
	});

	$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).css({
		width:"100%",
		"top":"-40%",
		"font-size":280,
		"transition":"all 1s"
	});

	if($(window).width()<769){
		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).parent().siblings().stop().hide();

		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).css({
			"top":"50%",
			"font-size":180,
			"transition":"all 1s"
		});

		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).children("span").css({
			"font-size":20,
			"transition":"all 1s"
		});
	}
};
	
var gnb_Ani_2=function(){
	$("#wrap>header>.gnb>ul>li>a").parent().siblings().css({
		visibility:"visible",
		opacity: 1,
		width:"100%",
		"transition":"all 0.5s"
	});

	$("#wrap>header>.gnb>ul>li>a").css({
		"top":"0%",
		"font-size":150,
		"transition":"all 1s"
	});
	
	if($(window).width()<769){
		$("#wrap>header>.gnb>ul>li>a").parent().siblings().stop().show();
		$("#wrap>header>.gnb>ul>li>a").css({
			"top":"0%",
			"font-size":55,
			"transition":"all 1s"
		});

		$("#wrap>header>.gnb>ul>li>a").children("span").css({
			"font-size":10,
			"transition":"all 1s"
		});
	}
	
};

//4.각메뉴별 내용 보여지는 함수
var contShow=function(){
	$("section>article").not('#main,#cont_foot').eq(nowIdx).stop().fadeIn(2000);
};

var contHide=function(){
	$("section>article").not('#main,#cont_foot').stop().fadeOut(2000);
};
	
//5.내용별 footer bgc, on클래스 붙이는 함수
var footBgc=function(){
	$("#cont_foot").css({"background-color":foot_bgc[nowIdx]});
	$("#cont_foot>.fnb>ul>li").eq(nowIdx).addClass("on").siblings().removeClass("on");
};
	if($(window).width()<769){
			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).parent().siblings().stop().hide();

			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).css({
				"top":"50%",
				"font-size":180,
				"transition":"all 1s"
			});

			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).children("span").css({
				"font-size":20,
				"transition":"all 1s"
			});
		}
	
	

	
	
	if($(window).width()<769){
			$("#wrap>header>.gnb>ul>li>a").parent().stop().show();
			$("#wrap>header>.gnb>ul>li>a").css({
				"top":"0%",
				"font-size":55,
				"transition":"all 1s"
			});

			$("#wrap>header>.gnb>ul>li>a").children("span").css({
				"font-size":10,
				"transition":"all 1s"
			});
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$("article>.btn>a.home").on("click",function(){
		window.location.reload(true);
	});
	
	
	
	
	
	$("#track>.btn>a.streets").click(function(evt){
		evt.preventDefault();
		$("#streets").stop().fadeIn();
		$("#track").stop().fadeOut();
		
		$("#wrap>header>.gnb>ul>li").eq(nowIdx).fadeOut();
		$("#wrap>header>.gnb>ul>li").eq(nowIdx+1).fadeIn();
	});
	
	var $prevBtn=$("section>article>.btn>a.prev");
	var $nextBtn=$("section>article>.btn>a.next");
	
	$prevBtn.on("click",function(evt){
		evt.preventDefault();
		console.log(nowIdx);
		
		var contIdx=[];
		$("section>article").not('#main,#cont_foot').each(function(idx){
			contIdx[idx]=idx;
			console.log(contIdx);
			if(nowIdx==contIdx[idx]){
				nowIdx--;
				$("section>article").not('#main,#cont_foot').eq(nowIdx).fadeIn().siblings().fadeOut();
		
				
			}
		});
	});
	
	$nextBtn.on("click",function(evt){
		evt.preventDefault();
		console.log(nowIdx);
		
	});
	
	
	
	
	
	
	
	
	
	
	
	//서브페이지별 왼쪽,오른쪽 버튼
	$("#track>.btn>a.streets").click(function(evt){
		evt.preventDefault();
		$("#streets").stop().fadeIn();
		$("#track").stop().fadeOut();
	});
	
	$("#streets>.btn>.track").click(function(evt){
		evt.preventDefault();
		$("#track").stop().fadeIn();
		$("#streets").stop().fadeOut();
	});
	
	$("#streets>.btn>.screen").click(function(evt){
		evt.preventDefault();
		$("#screen").stop().fadeIn();
		$("#streets").stop().fadeOut();
	});
	
	$("#screen>.btn>.streets").click(function(evt){
		evt.preventDefault();
		$("#streets").stop().fadeIn();
		$("#screen").stop().fadeOut();
	});
	
	$("#screen>.btn>.stage").click(function(evt){
		evt.preventDefault();
		$("#stage").stop().fadeIn();
		$("#screen").stop().fadeOut();
	});
	
	$("#stage>.btn>.screen").click(function(evt){
		evt.preventDefault();
		$("#screen").stop().fadeIn();
		$("#stage").stop().fadeOut();
	});
	
	//서브페이지별 비디오
	var $imgbtn=$("section>article>.cont_container>.cont>.img>a");
	
	var $video1=document.getElementById("#vdo_click_1");
	var $video2=document.getElementById("#vdo_click_2");
	
	var start1=function(){
		$video1.load();
		$video1.play();
	};
	
	var start2=function(){
		$video2.load();
		$video2.play();
	};
	
	$imgbtn.on("click",function(evt){
		evt.preventDefault();
		$(this).children("img").css({
			visibility:"hidden"
		}).siblings("#vdo_click_1").css({
			visibility:"visible"
		});
		
		start1();
		
	});
	
	$imgbtn.on("click",function(evt){
		evt.preventDefault();
		$(this).children("img").css({
			visibility:"hidden"
		}).siblings("#vdo_click_2").css({
			visibility:"visible"
		});
		
		start2();
	});
})