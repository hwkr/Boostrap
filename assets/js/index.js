/**
 * Main JS file for Boohaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        //Print a pretty welcome message for explorers
        console.log('\r\n%c           *     ,MMM8&&&.            *\r\n%c                MMMM88&&&&&    .\r\n%c               MMMM88&&&&&&&\r\n%c   *           MMM88&&&&&&&&\r\n%c               MMM88&&&&&&&&\r\n%c               \'MMM88&&&&&&\'\r\n%c                 \'MMM8&&&\'      *    \r\n%c        |\\___\/|     \/\\___\/\\\r\n%c        )     (     )    ~( .              \'\r\n%c       =\\     \/=   =\\~    \/=\r\n%c         )===(       ) ~ (\r\n%c        \/     \\     \/     \\\r\n%c        |     |     ) ~   (\r\n%c       \/       \\   \/     ~ \\\r\n%c       \\       \/   \\~     ~\/\r\n%c_\/\\_\/\\_\/\\__  _\/_\/\\_\/\\__~__\/_\/\\_\/\\_\/\\_\/\\_\/\\_\r\n%c|  |  |  |( (  |  |  | ))  |  |  |  |  |  |\r\n%c|  |  |  | ) ) |  |  |\/\/|  |  |  |  |  |  |\r\n%c|  |  |  |(_(        ((          |  |  |  |\r\n%c|  |  |               \\)            |  |  |\r\n%c|         Want to work together?          |\r\n%c\r\n           github.com\/bitHero\r\n         twitter.com\/heroicByte',
            'color:#D0E3F1', 'color:#D0E3F1', 'color:#C0DAEC', 'color:#C0DAEC', 'color:#B0D1E8', 'color:#B0D1E8', 'color:#A1C7E3', 'color:#A1C7E3', 'color:#91BEDE', 'color:#91BEDE', 'color:#81B5D9', 'color:#81B5D9', 'color:#72ABD5', 'color:#72ABD5', 'color:#62A2D0', 'color:#62A2D0', 'color:#5299CB', 'color:#5299CB', 'color:#4390C7', 'color:#4390C7', 'color:#4390C7', 'color: #000000');

        //Background Check for main text
        try {
            BackgroundCheck.init({
                targets: '.auto-color',
                images: '.home-header'
            });
        }
        catch (err) {
            //Don't worry about background checker
        }

        // Popover, Tooltip and Dropdowns
        $(function () {
            $('[data-toggle="popover"]').popover();
            $('[data-toggle="tooltip"]').tooltip();
            $('.dropdown-toggle').dropdown();
        })


        //Watch for smooth scroll
        $(function () {
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    });

    $(window).load(function () {
        BackgroundCheck.refresh();
    });

    $('#navbar').on('shown.bs.collapse', function () {
        BackgroundCheck.refresh();
    })


}(jQuery));