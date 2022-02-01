$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        $(".navbar").removeClass("sticky"); 
        if (scroll >= 50) { 
            $(".navbar").addClass("sticky");
        }
    }); 
});
 

new WOW().init(); 

 