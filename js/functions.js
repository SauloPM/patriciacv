$(window).on("load", function() {

    // WOW
    new WOW({
        mobile: false
    }).init();

    // Smooth Scrolling Links
    $(".smooth-scrolling").click(function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({ scrollTop: $(target).offset().top }, 1500, 'easeInOutExpo');
    });

    // ─────────────── //
    //     SPINNER     //
    // ─────────────── //

    hideSpinner();

    // Spinner hidding
    function hideSpinner () {
        $("#preloader .bar").fadeOut(500, function () {
            $("#preloader").delay(500).fadeOut(500);
            setTimeout(function () { $("body").css("overflow", "visible"); }, 500);
        });
    }

    // ────────────────── //
    //     TOP BUTTON     //
    // ────────────────── //

    showTopButton();

    $(document).scroll(function() {
        showTopButton();
    });

    // Top button revealing
    function showTopButton () {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
            $(".top-button").css("opacity", "1");
        else
            $(".top-button").css("opacity", "0");
    }

    // ────────────── //
    //     NAVBAR     //
    // ────────────── //

    fixNavbar();
    highlightNavbar();

    $(document).scroll(function() {
        fixNavbar();
        highlightNavbar();
    });

    // Stycky Navigation Bar
    function fixNavbar() {
        if ($(document).scrollTop() > 75) {
            $("nav").css("padding-top", "50px");
            $("nav .bar").css({"position" : "fixed", "box-shadow" : "none"});
        }
        else {
            $("nav").css("padding-top", "0");
            $("nav .bar").css({"position" : "relative", "box-shadow" : "0 0 5px rgb(65,180,205)"});
        }
    }

    // Current Item Highlighting
    function highlightNavbar() {

        console.log($("#info").position().top);

        // Information
        if ($(this).scrollTop() < $("#info").position().top - 150) {
            $("nav .item").removeClass("active");
            $("nav .item:nth-child(1)").addClass("active");
        }

        // Career
        if ($(this).scrollTop() >= $("#career").position().top -150) {
            $("nav .item").removeClass("active");
            $("nav .item:nth-child(2)").addClass("active");
        }

        // Skills
        if ($(this).scrollTop() >= $("#skills").position().top - 150) {
            $("nav .item").removeClass("active");
            $("nav .item:nth-child(3)").addClass("active");
        }

        // Training
        if ($(this).scrollTop() >= $("#training").position().top - 150) {
            $("nav .item").removeClass("active");
            $("nav .item:nth-child(4)").addClass("active");
        }

        // Contact
        if ($(this).scrollTop() >= $("#contact").position().top - 300) {
            $("nav .item").removeClass("active");
            $("nav .item:nth-child(5)").addClass("active");
        }
    }

});