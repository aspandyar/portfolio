$(document).ready(function(){
    // Change nav color while scrool
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    });

    // Type JS in home page
    var typed = new Typed(".element", {
        strings: ["Aspandyar Sharip", "a Backend Developer", "a Frontend(mb) Developer"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    // progress bar in my skills
    var waypoint = new Waypoint({ //waypoint logic to static update progress bar
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');

            p[0].setAttribute("style", "width:70%;transition:1s all")
            p[1].setAttribute("style", "width:80%;transition:1.5s all")
            p[2].setAttribute("style", "width:50%;transition:2s all")
            p[3].setAttribute("style", "width:65%;transition:2.5s all")
            p[4].setAttribute("style", "width:50%;transition:3s all")
        },
        offset:'90%' // need to update earlier then needing place was got
      })
});
