$(function(){
	//로딩화면
	$("#loading>.load_content>.cortz").fadeIn();
	$("#loading>.load_content>.head").delay(500).fadeIn();
	$("#loading").delay(2700).fadeOut(2000,function(){
		$(this).remove();
		$("#wrap>header>.gnb").animate({
			top:"15%",
			opacity:1
		},1000);
	});
	
	/************************main-hover************************/
	var $gnb=$("#wrap>header>.gnb>ul>li>a");
	var nowIdx=0;
	
	var movArr=['images/video/anni_70.mp4','images/video/anni_80.mp4','images/video/anni_90.mp4','images/video/anni_00.mp4'];
	var imgArr=['images/bg70_P.jpg','images/bg80_P.jpg','images/bg90_P.jpg','images/bg00_P.jpg']
	
	$gnb.on("mouseover",function(){
		nowIdx=$(this).parent().index();
		//console.log(nowIdx);
		$("#main>.img").stop().fadeOut(50);
		$("#mov").attr({src:movArr[nowIdx],autoplay:"autoplay"}).css({
			visibility:"visible",
			opacity: 1,
			transition:"all 1s"
		});

		if($(window).width()<769){
			$(".mov>img").attr({src:imgArr[nowIdx]}).css({
				visibility:"visible",
				opacity: 1,
				transition:"all 1s"
			});
		}
		
		$("#wrap>header>.gnb>ul>li").eq(nowIdx).css({
			opacity:1,
			transition:"all 1s"
		}).siblings().stop().css({
			opacity:0.15,
			transition:"all 1s"
		});
	});
		
	$gnb.on("mouseleave",function(){
		$("#main>.img").stop().fadeIn();
		$("#mov").css({
			visibility:"hidden",
			opacity: 0,
			transition:"none"
		});

		
		if($(window).width()<769){
			$(".mov>img").attr({src:imgArr[nowIdx]}).css({
				visibility:"hidden",
				opacity: 0,
				transition:"none"
			});
		}
		
		$("#wrap>header>.gnb>ul>li").css({
			opacity:1,
			transition:"all 1s"
		});
	});	
	
	/************************main-click************************/
	//1.메인화면 사라지는 함수
	var hideMain=function(){
		$("#main>.img").stop().hide();
		$("#main").delay(1000).stop().fadeOut(1300,function(){
			$("body").removeClass("ovh");
		});
	};
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
	//3.메인메뉴 애니메이션 함수
	var gnb_Ani=function(){
		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).parent().siblings().stop().hide();
		
		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).css({
			width:"100%",
			"top":"-40%",
			"font-size":250,
			"transition":"all 1s"
		});
		
		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).children("span").css({
			"font-size":30,
			"transition":"all 1s"
		});
		
		if($(window).width()<769){
			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).parent().siblings().stop().hide();

			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).css({
				"top":"50%",
				"font-size":150,
				"transition":"all 1s"
			});

			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).children("span").css({
				"font-size":20,
				"transition":"all 1s"
			});
		}
	};
	//4.각메뉴별 내용 보여지는 함수
	var contShow=function(){
		$("section#contents>article").eq(nowIdx).stop().fadeIn(2000);
	};
	//5.내용별 footer bgc, on클래스 붙이는 함수
	var footBgc=function(){
		$("#cont_foot").css({"display":"block","background-color":foot_bgc[nowIdx]});
		$("#cont_foot>.fnb>ul>li").eq(nowIdx).addClass("on").siblings().removeClass("on");
	};
	
	var foot_bgc=['#FFCC48','#EB97B4','#B29BFF','#4978DC']; //footer bgc
	
	//main-click
	$gnb.on("click",function(evt){
		evt.preventDefault();
		hideMain(); //1.메인화면 사라지는 함수
		btmLogo(); //2.btm로고
		gnb_Ani(); //3.메인메뉴 애니메이션 함수
		contShow(); //4.각메뉴별 내용 보여지는 함수
		footBgc(); //5.내용별 footer bgc, on클래스 붙이는 함수
		
		//메인메뉴 before hide 처리
		$("#wrap>header>.gnb>ul>li").eq(nowIdx).addClass("on");
		
		$(window).on("resize",function(){
			btmLogo(); //2.btm로고
			gnb_Ani(); //3.메인메뉴 애니메이션 함수
			footBgc(); //5.내용별 footer bgc, on클래스 붙이는 함수
		});
	});
	
	/************************서브페이지-홈버튼************************/
	//1.메인화면 나타나는 함수
	var showMain=function(){
		$("#main").stop().fadeIn(1000,function(){
			$("body").addClass("ovh");
		});
	};
	//2.btm로고
	var btmLogo_2=function(){
		$("#wrap>header>.btm").stop().animate({
			bottom:"4%"
		});
	};
	//3.메인메뉴 애니메이션 함수
	var gnb_Ani_2=function(){
		$("#wrap>header>.gnb>ul>li>a").parent().siblings().stop().show();

		$("#wrap>header>.gnb>ul>li>a").css({
			"top":"0%",
			"font-size":150,
			"transition":"all 1s"
		});
		
		$("#wrap>header>.gnb>ul>li>a").children("span").css({
			"font-size":25,
			"transition":"all 1s"
		});

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
	};
	//4.각메뉴별 내용 사라지는 함수
	var contHide=function(){
		$("section#contents>article").stop().fadeOut(1000);
	};
	//5.footer bgc, hide 함수
	var footHide=function(){
		$("#cont_foot").stop().hide();
	};
	
	//home 버튼
	$("article>.btn>a.home").on("click",function(evt){
		evt.preventDefault();
		footHide(); //5.footer bgc, hide 함수
		showMain(); //1.메인화면 나타나는 함수
		btmLogo_2(); //2.btm로고
		gnb_Ani_2(); //3.메인메뉴 애니메이션 함수
		contHide(); //4.각메뉴별 내용 사라지는 함수
		
		//메인메뉴 before show 처리
		$("#wrap>header>.gnb>ul>li").removeClass("on");
		
		$(window).on("resize",function(){
			footHide(); //5.footer bgc, hide 함수
			btmLogo_2(); //2.btm로고
			gnb_Ani_2(); //3.메인메뉴 애니메이션 함수
		});
	});
	
	/************************서브페이지-이전,다음버튼************************/
	//서브페이지별 왼쪽,오른쪽 버튼
	var $prevBtn=$("section#contents>article>.btn>a.prev");
	var $nextBtn=$("section#contents>article>.btn>a.next");
	var oldIdx=0;
	//1.메인메뉴 변경 함수
	var gnb_Ani_3=function(){
		$("#wrap>header>.gnb>ul>li").eq(oldIdx).hide().removeClass("on").children().css({
			"font-size":150,
			"transition":"all 1s"
		});
		
		$("#wrap>header>.gnb>ul>li").eq(nowIdx).stop().fadeIn().addClass("on").children().css({
			width:"100%",
			"top":"-40%",
			"font-size":250,
			"transition":"all 1s"
		});
		
		$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).children("span").css({
			"font-size":30,
			"transition":"all 1s"
		});
		
		if($(window).width()<769){
			$("#wrap>header>.gnb>ul>li").eq(nowIdx).stop().fadeIn().addClass("on").children().css({
				width:"100%",
				"top":"50%",
				"font-size":150,
				"transition":"all 1s"
			});
			
			$("#wrap>header>.gnb>ul>li>a").eq(nowIdx).children("span").css({
				"font-size":20,
				"transition":"all 1s"
			});
		}
	};
	
	//다음 버튼
	$nextBtn.on("click",function(evt){
		evt.preventDefault();
		nowIdx++;
		oldIdx=nowIdx-1;
		footBgc(); //5.내용별 footer bgc, on클래스 붙이는 함수
		gnb_Ani_3(); //1.메인메뉴 변경 함수
		
		//각 메뉴별 내용 나타남
		var contIdx=[];
		$("section#contents>article").each(function(idx){
			contIdx[idx]=$("article").index(this);
			//console.log(contIdx);
			$("section#contents>article").eq(contIdx[nowIdx]).stop().fadeIn().siblings().stop().fadeOut();
		});
	});
	
	//이전버튼
	$prevBtn.on("click",function(evt){
		evt.preventDefault();
		nowIdx--;
		oldIdx=nowIdx+1;
		footBgc(); //5.내용별 footer bgc, on클래스 붙이는 함수
		gnb_Ani_3(); //1.메인메뉴 변경 함수
		
		//각 메뉴별 내용 나타남
		var contIdx=[];
		$("section#contents>article").each(function(idx){
			contIdx[idx]=$("article").index(this);
			//console.log(contIdx);
			$("section#contents>article").eq(contIdx[nowIdx]).stop().fadeIn().siblings().stop().fadeOut();
		});
	});
	
	/************************서브페이지-foot************************/
	var $fnb=$("#cont_foot>.fnb>ul>li>a");
	var footIdx=0;
	var gnb_Ani_4=function(){
		$("#wrap>header>.gnb>ul>li").eq(footIdx).stop().fadeIn().addClass("on").children().css({
			width:"100%",
			"top":"-40%",
			"font-size":250,
			"transition":"all 1s"
		});
		$("#wrap>header>.gnb>ul>li>a").eq(footIdx).children("span").css({
			"font-size":30,
			"transition":"all 1s"
		});
		$("#wrap>header>.gnb>ul>li").eq(footIdx).siblings().stop().fadeOut().removeClass("on").children().css({
			"font-size":150,
			"transition":"all 1s"
		});
		$("#wrap>header>.gnb>ul>li>a").eq(footIdx).siblings().children("span").css({
			"font-size":20,
			"transition":"all 1s"
		});
		$("#cont_foot").css({"background-color":foot_bgc[footIdx]});
		$("#cont_foot>.fnb>ul>li").eq(footIdx).addClass("on").siblings().removeClass("on");
		
		if($(window).width()<769){
			$("#wrap>header>.gnb>ul>li").eq(footIdx).stop().fadeIn().addClass("on").children().css({
				"top":"50%",
				"font-size":150,
				"transition":"all 1s"
			});
			$("#wrap>header>.gnb>ul>li>a").eq(footIdx).children("span").css({
				"font-size":20,
				"transition":"all 1s"
			});
			$("#wrap>header>.gnb>ul>li").eq(footIdx).siblings().stop().fadeOut().removeClass("on").children().css({
				"font-size":55,
				"transition":"all 1s"
			});
			$("#wrap>header>.gnb>ul>li>a").eq(footIdx).siblings().children("span").css({
				"font-size":10,
				"transition":"all 1s"
			});
			$("#cont_foot").css({"background-color":foot_bgc[footIdx]});
			$("#cont_foot>.fnb>ul>li").eq(footIdx).addClass("on").siblings().removeClass("on");
		}
	};
	
	$fnb.on("click",function(evt){
		evt.preventDefault();
		footIdx=$(this).parent().index();
		console.log(footIdx);
		
		gnb_Ani_4();
		
		$("html,body").stop().animate({
			"scrollTop":0
		});
		
		var contIdx=[];
		$("section#contents>article").each(function(idx){
			contIdx[idx]=$("article").index(this);
			//console.log(contIdx);
			$("section#contents>article").eq(contIdx[footIdx]).stop().fadeIn().siblings().stop().fadeOut();
		});
	});
	
	/************************서브페이지-video************************/
	/*var $imgbtn=$("#contents>article>.cont_container>.cont>.img>a");

	$imgbtn.click(function(evt){
		evt.preventDefault();
		$("#vdo_click_1").css({"visibility":"visible"},function(){
			$(this).attr({"autoplay":"autoplay"});
		});
	})	*/
	
});