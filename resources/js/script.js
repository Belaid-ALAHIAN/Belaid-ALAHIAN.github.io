$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--def-tribu').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    


    /* Navigation scroll */
   $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset('20px').top
            }, 1000);
            return false;
          }
        }
      });
    });


   /* Animations on scroll */
    $('.js--wp1').waypoint(function(direction) {
        $('.js--wp1').addClass('animated slideInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp2').waypoint(function(direction) {
        $('.js--wp2').addClass('animated swing');
    }, {
        offset: '40%'
    });

    $('.js--wp3').waypoint(function(direction) {
        $('.js--wp3').addClass('animated zoomIn');
    }, {
        offset: '40%'
    });

    $('.js--wp4').waypoint(function(direction) {
        $('.js--wp4').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });



    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }    
   });
});



  
    
