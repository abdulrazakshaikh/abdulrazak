jQuery(document).ready(function() {
    abdul_tm_cursor();
});

// load function
$(window).load('body', function() {
    abdul_tm_my_load();
});

// function abdul_tm_my_load() {
//     $(".logo-wrap").hover(function(){
//        alert();
//     });
// };

// $('.logo-wrap').trigger('mouseenter').delay(5000);

// $(document).ready(function () {
//     setTimeout(function() {
//          $('.logo-wrap').trigger('mouseover');
//          // alert('sdsdds');
//     }, 3000);
// });


// $(document).ready(function () {

//     setTimeout(function() {
//         $(".logo-wrap").mouseover(function(){
//             // $(".logo-wrap").css("background-color", "yellow");
//             $('.logo-wrap').trigger('mouseover');
//         });
//         // $('.logo-wrap').trigger('mouseover');
//          // alert('sdsdds');
//     }, 3000);
// });



function abdul_tm_my_load() {
    "use strict";
    var speed = 500;
    setTimeout(function() {
        abdul_tm_preloader();
    }, speed);
    setTimeout(function() {
        jQuery('body').addClass('loaded');
    }, speed + 2000);
    setTimeout(function(){
      $('.logo-wrap').addClass('active');
    }, speed + 2000);
    setTimeout(function(){
      $('.logo-wrap').removeClass('active');
    }, speed + 4000);

    // setTimeout(function(){
    //   $('.loader-wrap').addClass('is-hidden');
    // }, speed + 1000);
    // setTimeout(function() {
    //     jQuery('.spinner-border').remove();
    // }, speed + 1000);
    // setTimeout(function() {
    //     jQuery('.shane_tm_down').addClass('loaded');
    // }, speed + 2000);
    // setTimeout(function() {
    //     jQuery('.shane_tm_topbar').addClass('loaded');
    // }, speed + 4200);
}

// preloader function
function abdul_tm_preloader() {
    "use strict";
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');
    if (!isMobile) {
        setTimeout(function() {
            preloader.addClass('preloaded');
        }, 800);
        setTimeout(function() {
            preloader.remove();
        }, 2000);
    } else {
        preloader.remove();
    }
}

// toggleClass in Body when Menu open
// $(document).ready(function () {
//     $('.nav-link').click(function() {
//         $('body').toggleClass('has-active-menu');
//     });
// });

// tooltip
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
});

// cursor
function abdul_tm_cursor() {
    "use strict";
    var myCursor = jQuery('.mouse-cursor');
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner")
              , t = document.querySelector(".cursor-outer");
            let n, i = 0, o = !1;
            window.onmousemove = function(s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)",
                n = s.clientY,
                i = s.clientX
            }
            ,
            $("body").on("mouseenter", "a, .cursor-pointer", function() {
                e.classList.add("cursor-hover"),
                t.classList.add("cursor-hover")
            }),
            $("body").on("mouseleave", "a, .cursor-pointer", function() {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"))
            }),
            e.style.visibility = "visible",
            t.style.visibility = "visible"
        }
    }
}