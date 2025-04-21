

$(function(){

  //공지사항
  $(".notice-title").on('click', function (e) {
    if (!$(this).hasClass('open')) {
      $('.notice-title').removeClass('open');
      $('.notice-cont').slideUp(); 
      $(this).addClass('open');
      $(this).next('.notice-cont').slideDown();
   
    } else {
      $('.notice-title').removeClass('open');
      $('.notice-cont').slideUp();
    }
  });

  //nav
  $('.nav-list a[href^="#"]').on("click", function(e) {
    $('.header--inner').removeClass('is-menu-open');
    e.preventDefault();
      var n = $(e.currentTarget).attr("href")
        , t = $("#" == n || "" == n ? "html" : n).offset().top-30;
      return $("body,html").animate({
          scrollTop: t           
      }, 400);
      
  });

  $('.header-menu').on('click',function(){
    $('.header--inner').toggleClass('is-menu-open');
  });

  //popup
  // $('.list-item a').on('click', function(e) {
  //   e.preventDefault();
  //   var src = $(this).attr('data-src');
    
  //   $("#modal iframe").attr('src', src);    
  //   $('#modal').addClass('on');
  // });

  // $('.btn-close').on('click',function(){
  //   $('#modal').find('iframe').attr("src", "");
  //   $('#modal').removeClass('on');
  // });  

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  if(!isMobile) {
    TweenMax.staggerFrom('nav li',.5,{alpha:0,y:-30,delay:1.95},.2);
  }

  //animation
  TweenMax.from('header',.7,{alpha:0,x:-400,delay:1.35,ease: Power4.easeOut});
  TweenMax.from('h1',.5,{alpha:0,y:-30,delay:1.8});
  

  TweenMax.from('.top--inner',1,{alpha:0,scale:1.25});
  TweenMax.from('h2',.5,{alpha:0,scale:1.15,delay:.65,ease:Power3.easeIn});
  TweenMax.from('.btn-youtube',.8,{alpha:0,y:-50,delay:.95})
  

  TweenMax.set('.aniTitle',{alpha:0,x:-80});
  TweenMax.set('#calendar-wrap',{alpha:0,scale:1.15});
  TweenMax.set('.list-item li',{alpha:0,scale:0.85,y:30});
  TweenMax.set('.notice-list',{alpha:0,scale:1.15});
   
  function check_if_in_view() {
    var window_height =  $(window).height();
    var window_top_position =  $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    var calendarOff = $('#calendar-wrap').offset().top + 100;
    var calendarPos = calendarOff + $('#calendar-wrap').outerHeight();
    
    var listItemOff = $('.list-item').offset().top + 100;
    var listItemPos = listItemOff + $('.list-item').outerHeight();

    var noticeOff = $('.notice-list').offset().top + 100;
    var noticePos = noticeOff + $('.notice-list').outerHeight();

    $.each($('.aniTitle'), function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top + 100;
      var element_bottom_position = (element_top_position + element_height);
  
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        TweenMax.to($element,.6,{alpha:1,x:0,ease:Power4.easeOut})
      } 
    });

    if ((calendarPos >= window_top_position) && (calendarOff <= window_bottom_position)) {
       TweenMax.to('#calendar-wrap',1,{alpha:1,scale:1,ease:Power2.easeOut})
      } 
    if ((listItemPos >= window_top_position) && (listItemOff <= window_bottom_position)) {
      TweenMax.staggerTo('.list-item li',.6,{alpha:1,scale:1,y:0,ease:Power2.easeOut},.1)
    } 
    if ((noticePos >= window_top_position) && (noticeOff <= window_bottom_position)) {
      TweenMax.to('.notice-list',1,{alpha:1,scale:1,ease:Power2.easeOut})
    } 
  }
  
  $(window).on('scroll resize', check_if_in_view);
  $(window).trigger('scroll');

  
});

