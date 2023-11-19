$(document).ready(function(){
    // Change color while scrool
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    });


    // Type JS
    var typed = new Typed(".element", {
        strings: ["Aspandyar Sharip", "a Backend Developer", "a Frontend(mb) Developer"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });


});
