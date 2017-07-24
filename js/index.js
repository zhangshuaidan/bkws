 //封装添加动画的方法
  $.fn.extend({
 	ani:function(x,t,d){
 		$(this).addClass("ani");
 		$(this).attr("swiper-animate-effect",x);
 		$(this).attr("swiper-animate-duration",t);
 		$(this).attr("swiper-animate-delay",d)
 	}
 });
 $("#text").ani("lightSpeedIn","1s","0.3s");
 $(".s13-con >p").eq(0).ani("bounceIn","1.5s","0.8s");
 $(".s13-con >p").eq(1).ani("bounceIn","1.5s","0.8s");
 $(".s13-con >p").eq(2).ani("bounceInDown","1.5s","1.5s");
 $(".s13-con >p").eq(3).ani("bounceInDown","1.5s","2.5s");
 
 $("#p12-pos").ani("rotateOut","20s","0.5s");
 
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',

	//添加动画
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
     
  } 
 });
 

   
    