/**
 * Main JS file for Boo behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.
        
        //$("#blog-logo").prependTo("#site-head-content");
        
        
        //Background Check for main text
        BackgroundCheck.init({
          targets: '.auto-color',
          images: '.home-header'
        });
        BackgroundCheck.refresh();
    });

}(jQuery));