$(document).ready(function () {

    // Navbar functionality
    // Opens/Closes nav menu on click of hamburger menu
    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    // Closes all dropdown menus when a nav menu link is clicked
    $(".navLink").click(function () {
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
        $(".has-dropdown").removeClass("is-active");
        $(".navbar-dropdown").addClass("invis");
    });
    // Opens/Closes dropdown menu on click of dropdown title
    $("#navPortfolio").click(function () {
        $("#navPortfolioHasDropdown").toggleClass("is-active");
        $("#navPortfolioDropdown").toggleClass("invis");
    });
    $("#navContacts").click(function () {
        $("#navContactsHasDropdown").toggleClass("is-active");
        $("#navContactsDropdown").toggleClass("invis");
    });
    // Closes all nav menus when clicking...
    $(document).click(function () {
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
        $(".has-dropdown").removeClass("is-active");
        $(".navbar-dropdown").addClass("invis");
    });
    // ...except when clicking the mobile nav-bar or the dropdown menus
    $(".navbar-brand").click(function (e) {
        e.stopPropagation();
    });
    $(".navbar-menu").click(function (e) {
        e.stopPropagation();
    });

});