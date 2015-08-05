/**
 * Main JS file for Boohaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        //Background Check for main text
        try {
            BackgroundCheck.init({
                targets: '.auto-color',
                images: '.home-header'
            });
        }
        catch (err) {
            console.log("Background Checker Failed to Initialize: " + err);
        }

        // Popover
        $(function () {
            $('[data-toggle="popover"]').popover()
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