// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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
document.getElementById("show-more-projects").addEventListener("click", function()
{
    var projects = document.getElementById("more-projects");
           
    if(projects.style.display == "none"){
        projects.style.display="block";
    }
    else {
        projects.style.display="none";
    }
});
