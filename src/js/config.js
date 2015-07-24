define([
   "jquery",
], function(jQuery) {
    //set project data URL here
    var dataURL = null;
    //set project image path here
    var imagePath = "";

    //set project default share language here
    var defaultShareLanguage = "Caitlyn Jenner and Laverne Cox are household names, but celebrity lives don't speak to the experiences of all transgender Americans. Hear men and women share their stories in this video interactive.";
    var defaultShareImage = "http://www.gannett-cdn.com/experiments/usatoday/2015/07/intheirwords-transgender/img/promo.jpg";
    var projectTitle = "#InTheirWords: Transgender voices in the U.S.";

    var isMobile, fb_app_id;
    var isTablet = false;

    var blnIframeEmbed = window != window.parent;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile = true;
    }

    if (isMobile === false) {
        if (Modernizr.touch && window.innerWidth < 1100) {
            isTablet = true;
        }
    }

    fb_app_id = staticInfo.facebook.app_id;

    return {
        image_path: imagePath,
        dataURL: dataURL,
        projectTitle: projectTitle,
        staticInfo: staticInfo,
        fb_app_id: fb_app_id,
        isMobile: isMobile,
        isTablet: isTablet,
        defaultShareLanguage: defaultShareLanguage,
        defaultShareImage: defaultShareImage,
        isIframe: blnIframeEmbed
    };
});
