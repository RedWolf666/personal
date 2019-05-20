let newYear = (function(){
    let {_windowBox} = _utils
    //自动播放音频
    $('audio')[0].addEventListener('canplay',function(){
        $('audio')[0].play()
    })
    //rem适配
    let media = () => {
        let mult = _windowBox('clientWidth')/750*100
        mult>100&&(mult=100)
        document.documentElement.style.fontSize = mult + 'px'
        $('.center').css('display','block')
    }
    let auto = () => {
        window.onresize = () => {
            media()
        }
    }
    let move = () => {
        $('.center').click(function(){
            $('.sao').css('opacity','1').css('bottom','55%')
            $('.page1_font').css('display','block')
            let timer = setTimeout(function(){
                $('.page1_font').html('扫描完成')
                mySwiper.slideTo(1, 800, true)
                $('.swiper-slide:nth-of-type(2) .page_start').css('animation','change 0.5s 1s 1 forwards')
                clearInterval(timer)
                move1()
            },1500)
        })
    }
    let move1 = () => {
        $('.sen').addClass('animated fadeInUp').css('display','block') 
        $('.sen')[0].addEventListener('animationend',function(){
            $('.welcome').css('display','block')
            $('.title').addClass('animated fadeInUp').css('opacity','0.9')
        }) 
    }
    let move2 = () => {
        $('.swiper-slide:nth-of-type(3) .page_start').css('animation','change 1.5s 0s 1 forwards')
        $('.swiper-slide:nth-of-type(3) .rect').addClass('animated zoomIn').css('display','block') 
        $('.swiper-slide:nth-of-type(3) .rect')[0].addEventListener('animationend',function(){
            $(this).children('.title1').css('display','block').addClass('animated slideInUp')
            $(this).children('.title2').css('display','block').addClass('animated slideInDown')
            $(this).children('.title3').css('display','block').addClass('animated lightSpeedIn')
            $(this).children('.line').css('display','block').addClass('animated zoomIn')
            $(this).children('.title4').css('display','block').addClass('animated slideInLeft')
            $(this).children('.title5').css('display','block').addClass('animated slideInUp')
            $(this).children('.title6').css('display','block').addClass('animated slideInDown')
            $(this).children('.title7').css('display','block')
        }) 
    }
    let move3 = () => {
        $('.swiper-slide:nth-of-type(4) .page_start').css('animation','change 1.5s 0s 1 forwards')
        $('.swiper-slide:nth-of-type(4) .rect').addClass('animated zoomIn').css('display','block') 
        $('.swiper-slide:nth-of-type(4) .rect')[0].addEventListener('animationend',function(){
            $(this).children('.title1').css('display','block').addClass('animated slideInUp')
            $(this).children('.title2').css('display','block').addClass('animated slideInDown')
            $(this).children('.title3').css('display','block').addClass('animated lightSpeedIn')
            $(this).children('.line').css('display','block').addClass('animated zoomIn')
            $(this).children('.title4').css('display','block').addClass('animated slideInLeft')
            $(this).children('.title5').css('display','block').addClass('animated slideInRight')
            $(this).children('.title7').css('display','block')
        }) 
    }
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        effect : 'fade',
        fadeEffect: {
            crossFade: true,
        },
        // allowTouchMove:false,
        loop: false, // 循环模式选项
        on: {
            slideChangeTransitionEnd: function(){
                if(this.activeIndex==2)
                {
                    move2()
                }
                else if(this.activeIndex==3){
                    move3()
                }
            },
        },
    })  
    //music的播放与暂停
    let music = () => {
        $('.music').on('touchstart',function(){
            $(this).hasClass('pause')?$(this).removeClass('pause'):$(this).addClass('pause')
            $(this).hasClass('pause')?$('audio')[0].pause():$('audio')[0].play()
        })
    }


    return{
        init(){            
            media()
            music()
            auto()
            move()
        }
    }
})()
window.onload = function(){
    newYear.init()
}
