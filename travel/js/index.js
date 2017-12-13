var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', 
    pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
    }, 
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    }, 
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});

var music=document.querySelector(".music");
var rr=document.getElementById("rr");
var ee=document.getElementById("ee");
var flag = 1;
        music.onclick = function () {
            if (flag == 1) {
                rr.style.animation = "none";
                ee.pause();
                flag = 0;
            }
            else {
                rr.style.animation = "bb 1s infinite linear";
                ee.play();
                flag = 1;
            }
        };

