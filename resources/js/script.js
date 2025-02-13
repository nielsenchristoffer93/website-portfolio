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

// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}
