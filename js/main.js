$(window).scroll(function(){
    var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".hidden").removeClass("hidden");
        }
    if (scroll <= 500) {
        $(".footer").addClass("hidden");
        $(".home").addClass("hidden");
    }
})


       

  /*
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".clearHeader").addClass("darkHeader");
    }
});
*/