$('.mainimg img').hide();
$(".mainimg").mouseenter(
  function(){
    $('.mainimg img').fadeIn(150);
  }
)
$(".mainimg").mouseleave(
  function(){
    $('.mainimg img').fadeOut(150);
  }
)
$('.mainlist>ul>li').mouseenter(
  function(){
    $(this).children('nav').slideDown();
  }
)
$('.mainlist>ul>li').mouseleave(
    function(){
      $('.mainlist nav').hide();
    }
)
