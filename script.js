$(document).ready(function(){

     //Open hamburger menu on click
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('nav-open');
        $(this).toggleClass('open');
        $('.nav').show();
        
    });
    

    //hide menu when nav list item is clicked
    $('.nav li').click(function() {
        $('.nav').toggleClass('nav-open');
        $('.menu-toggle').toggleClass('open');
        
    });
    
});


$(window).scroll(function() {  //update this so that the logo stops fading at about 30%
    var scrollTop = $(this).scrollTop();

        $('.header-logo-img').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    
    
});



        
    });
    
