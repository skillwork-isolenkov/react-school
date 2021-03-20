$(document).ready(function () {
    let button = $("#lead-banner a");

    button[0].onclick = function () {
        $("#points-of-sale").toggleClass("open");
        return false;
    }

    let myLis = $("#points-of-sale li");

    myLis.on("click", function () {
        $(this).css({ "background": "pink" });

        myLis.off('click');
    })

    $(".slide-button-up").on("click", function () {
        $("#lead-banner").slideUp();
    });

    $(".slide-button-down").on("click", function () {
        $("#lead-banner").slideDown();
    });


    let allQuotes = $("blockquote");
    let currentQuote = 0;

    function changeQuote() {
        $(allQuotes[currentQuote]).fadeOut(200, function () {
            if (currentQuote == allQuotes.length - 1) {
                currentQuote == 0;
            } else {
                currentQuote++;
            }

            $(allQuotes[currentQuote]).fadeIn(200);
        });
    }

    let quoteTimer = setInterval(changeQuote, 3000);

});


