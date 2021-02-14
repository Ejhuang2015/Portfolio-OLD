$(document).ready(function() {

    // Navbar functionality
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(".navLink").click(function() {
        console.log(this);
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        $(".navbar-dropdown").addClass("invis");
    });

    $(".navbar-link").click(function() {
        $(".has-dropdown").toggleClass("is-active");
        $(".navbar-dropdown").toggleClass("invis");
    });

  });