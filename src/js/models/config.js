define(
  [
    'jquery'
  ],
  function(jQuery) {



    var isMobile, 
        fb_app_id,
        page_ssl;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile= true;
    }

    page_ssl = window.location.protocol == 'https:';
    fb_app_id = staticInfo.facebook.app_id;

    var config_obj = {
        isMobile: isMobile,
        fb_app_id: fb_app_id,
        staticInfo: staticInfo,
        page_ssl: page_ssl
    };

    return config_obj;
});