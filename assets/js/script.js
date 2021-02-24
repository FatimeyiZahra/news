$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function () {
    // for navbar side menu------------------------------------------------------
    $(".fa-search").click(function (e) {
        e.preventDefault();
        $(".top-search").slideToggle("show");
    });

    $(".side-menu-icon").click(function (e) {
        e.preventDefault();
        $(".side-menu").addClass("open")
    });

    $(".close-side").click(function (e) {
        e.preventDefault();
        $(".side-menu").removeClass("open")
    })
    //--------------------------------------------------------------------------------------
});