$(document).ready(function () {

    // Click event for any anchor tag that's href starts with #
    $('a[href^="#"]').click(function (event) {

        // The id of the section we want to go to.
        var id = $(this).attr("href");

        // An offset to push the content down from the top.
        var offset = 60;

        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({
            scrollTop: target
        }, 0);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });

    /* Animations on scroll */
    // About image animation.
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });

    // About Text animation.
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    // Skills section animation.
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    // Timeline content left animation.
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });

    // Timeline time right animation.
    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    // Timeline content right animation.
    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    // Timeline time left animation.
    $('.js--wp-7').waypoint(function (direction) {
        $('.js--wp-7').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });

    // Timeline content left animation.
    $('.js--wp-8').waypoint(function (direction) {
        $('.js--wp-8').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });

    // Timeline time right animation.
    $('.js--wp-9').waypoint(function (direction) {
        $('.js--wp-9').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    // Timeline content right animation.
    $('.js--wp-10').waypoint(function (direction) {
        $('.js--wp-10').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    // Timeline time left animation.
    $('.js--wp-11').waypoint(function (direction) {
        $('.js--wp-11').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });

    // Timeline content left animation.
    $('.js--wp-12').waypoint(function (direction) {
        $('.js--wp-12').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    // Timeline time right animation.
    $('.js--wp-13').waypoint(function (direction) {
        $('.js--wp-13').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    // Variable for making the animation appear only once.
    // Only used for section-projects.
    var animated = false;
    
    // First 2 projects boxes animation.
    $('.js--wp-14').waypoint(function (direction) {
        /*$('.js--wp-14').addClass('animated fadeInUp');*/
        if(!animated){
            animateCSS('.js--wp-14', 'fadeInUp');
            animated = true;
        }
        
    }, {
        offset: '60%'
    });
    
    // Removes "animated" and the "animation" from class after load and sets the opacity of element to 1.
    // This must be done since otherwise the modal will be placed inside div.
    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            jQuery(element).css('opacity', '1');
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    // 3 and 4 projects boxes animation.
    $('.js--wp-15').waypoint(function (direction) {
        $('.js--wp-15').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    // 5 and 6 projects boxes animation.
    $('.js--wp-16').waypoint(function (direction) {
        $('.js--wp-16').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    // 7 and 8 projects boxes animation.
    $('.js--wp-17').waypoint(function (direction) {
        $('.js--wp-17').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    // Contact form animation.
    $('.js--wp-18').waypoint(function (direction) {
        $('.js--wp-18').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });


});
