$(document).ready(function(){
    $('.multiple-items').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
          
      
    $(window).scroll(function(){
        if($(window).scrollTop()> 200){
           $('.nav-hero').addClass('scroll');
           $('.nav-menu-up').fadeOut('slow')
        }else{
          $('.nav-hero').removeClass('scroll');
          $('.nav-menu-up').fadeIn('slow')
        }
    })
})