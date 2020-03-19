$(document).ready(function () {

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        myFunction()
    };

    // Get the header
    var header = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    // Show more projects when clicking on button.
    document.getElementById("show-more-projects").addEventListener("click", function () {
        var projects = document.getElementById("more-projects");


        console.log("#more-projects display: " + projects.style.display);

        if (projects.style.display == "none" || !projects.style.display) {
            // Show all projects.
            projects.style.display = "block";

            // Change Awesomefont icon.
            $(this).find('i').toggleClass('fas fa-arrow-up fas fa-arrow-down')

            // Scroll to id 'more-projects'
            /*var projectSection = document.getElementById("more-projects");
            projectSection.scrollIntoView();*/
            $('html, body').animate({
                scrollTop: $('#projects').offset().top - 60
            }, 0);
        } else {
            // Hide every projects except top 4.
            projects.style.display = "none";

            // Change Awesomefont icon.
            $(this).find('i').toggleClass('fas fa-arrow-up fas fa-arrow-down')

            // Scroll to id 'projects'
            /*var projectSectionAdded = document.getElementById("projects");
            projectSectionAdded.scrollIntoView();*/
            $('html, body').animate({
                scrollTop: $('#projects').offset().top - 60
            }, 0);
        }
    });

    // Get the modal
    var modal = document.getElementById("modal-1");
    var modal2 = document.getElementById("modal-2");
    
    // Get the button that opens the modal
    var btn = document.getElementById("modal-1-button");
    var btn2 = document.getElementById("modal-2-button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("btn-exit")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    
    btn2.onclick = function () {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Get the button that opens the next slide.
    var btnNext = document.getElementById("nextSlide");
    
    // Get the button that opens the next slide.
    var btnPrev = document.getElementById("prevSlide");
    
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    btnNext.onclick = function plusSlides() {
        showSlides(slideIndex += 1);
    }
    
    // Next/previous controls
    btnPrev.onclick = function minusSlides() {
        showSlides(slideIndex += -1);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

});
