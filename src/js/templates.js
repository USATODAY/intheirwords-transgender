define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["CommentView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    <h2 class="iapp-share-intro iapp-panel-text-main">Comment</h2>\n    \n    <div id="iapp-fb-embed"></div>\n</div>\n';

}
return __p
};

this["templates"]["IntroVideo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (! isMobile) { ;
__p += '\n<video id="introvid" class="bgvideo" loop autoplay poster="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/intro_bg_still.jpg">\n    <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.mp4" type="video/mp4" />\n    <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.ogv" type="video/ogg" />\n</video>\n';
 } else { ;
__p += '\n<img class="iapp-intro-bg-image" src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/mobile_intro.gif" alt="">\n';
 } ;
__p += '\n\n<div class="iapp-intro-video-overlay"></div>\n';

}
return __p
};

this["templates"]["ProjectShareView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    <h2 class="iapp-share-intro iapp-panel-text-main">Share this project</h2>\n    \n    <p class="iapp-share-preview">' +
((__t = (default_share_language)) == null ? '' : __t) +
'</p>\n    \n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&hashtags=intheirwords" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (still_image)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/facebook.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/email.svg" alt="Email share"></a>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["VideoShareView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    ';
 if (userName != "") { ;
__p += '\n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn, ' +
((__t = (userName)) == null ? '' : __t) +
'. Continue this conversation by sharing this video.</h2>\n    ';
} else { ;
__p += '\n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn. Continue this conversation by sharing this video.</h2>\n    ';
};
__p += '\n    \n    <p class="iapp-share-preview">' +
((__t = (sharelanguage)) == null ? '' : __t) +
' #' +
((__t = (hashtags)) == null ? '' : __t) +
'</p>\n    \n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&hashtags=' +
((__t = (hashtags)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/facebook.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/email.svg" alt="Email share"></a>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-header">\n    <a href="' +
((__t = (page_url)) == null ? '' : __t) +
'"><img class=\'iapp-usat-logo-image\' src="' +
((__t = (logo)) == null ? '' : __t) +
'" alt="USA TODAY"></a>\n    <div>\n        \n    <a href="https://twitter.com/hashtag/InTheirWords" target="_blank" class="iapp-project-title">\n        ' +
((__t = (title)) == null ? '' : __t) +
'\n    </a>\n    </div>\n</div>\n\n\n';

}
return __p
};

this["templates"]["brightcove.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Start of Brightcove Player -->\n\n<div style="display:none">\nInteractives video player with single clip \n</div>\n\n\n<object id="myExperience' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" class="BrightcoveExperience">\n  <param name="bgcolor" value="#FFFFFF" />\n  <param name="width" value="640" />\n  <param name="height" value="390" />\n  <param name="playerID" value="4191673832001" />\n  <param name="playerKey" value="AQ~~,AAAABvaL8JE~,ufBHq_I6Fnz1-5Tv-uC_zxqKqCr-Phqa" />\n  <param name="isSlim" value="true" />\n  <param name="dynamicStreaming" value="true" />\n  <param name="includeAPI" value="true" />\n    \n  <param name="@videoPlayer" value="' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" />\n  <param name="templateReadyHandler" value="onTemplateReady" />\n  <param name="wmode" value="opaque" />\n  <param name="autoStart" value="false" />\n</object>\n\n\n<!-- End of Brightcove Player -->\n';

}
return __p
};

this["templates"]["clip.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = (stillimage)) == null ? '' : __t) +
'" alt="' +
((__t = (interviewee)) == null ? '' : __t) +
'" class="iapp-index-clip-img">\n<div class="iapp-clip-quote-containter">\n    <h2 class="iapp-clip-quote-text">' +
((__t = (video_quotes)) == null ? '' : __t) +
'</h2>\n</div>';

}
return __p
};

this["templates"]["credits.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-credits-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/close.svg" alt="close"></div>\n<div class="iapp-content-wrap">\n    <h2 class="iapp-section-header iapp-panel-text-main">About</h2>\n    <p class="iapp-section-text">' +
((__t = (credits_intro)) == null ? '' : __t) +
'</p>\n    <h2 class="iapp-section-header iapp-panel-text-main">Credits</h2>\n    <h3 class="iapp-project-credits">\n        ';
 _.each(project_credits, function(creditObj) { 
             if (creditObj.credit_url != null && creditObj.credit_text != "@USATODAY") { ;
__p += '\n            <a href="' +
((__t = (creditObj.credit_url)) == null ? '' : __t) +
'" class="iapp-project-credit-link" target="_blank">' +
((__t = (creditObj.credit_text)) == null ? '' : __t) +
'</a>,\n            ';
  } else if (creditObj.credit_url != null){;
__p += '\n            <a href="' +
((__t = (creditObj.credit_url)) == null ? '' : __t) +
'" class="iapp-project-credit-link" target="_blank">' +
((__t = (creditObj.credit_text)) == null ? '' : __t) +
'</a>\n            ';
  } else {;
__p += '\n            <span class="iapp-project-credit-text">' +
((__t = (creditObj.credit_text)) == null ? '' : __t) +
'</span>\n            ';
  } ;
__p += '\n         ';
  }) ;
__p += '\n    </h3>\n</div>\n';

}
return __p
};

this["templates"]["greeting.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-content-wrap">\n    <h2 class="iapp-section-header iapp-panel-text-main">' +
((__t = (questionasked)) == null ? '' : __t) +
'</h2>\n</div>\n';

}
return __p
};

this["templates"]["indextab.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="iapp-flip-item">\n    <div class="iapp-people-index iapp-flip-front">\n        <div class="iapp-index-close iapp-clickable">\n            <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close">\n        </div>\n    </div>\n    <div class="iapp-clip-index iapp-flip-back">\n        <div class="iapp-index-back-close button iapp-button-small">\n            <div class="iapp-button-text">BACK</div>\n        </div>\n        <div class="iapp-clip-container"></div>\n    </div>\n</div>';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-intro-content-wrap iapp-content-wrap">\n    <div class="iapp-content-card">\n        <h2 class="iapp-intro-header iapp-panel-text-main">' +
((__t = (title)) == null ? '' : __t) +
'</h2>\n        <h3 class="iapp-intro-subtitle">' +
((__t = (sub_title)) == null ? '' : __t) +
'</h3>\n        <div class="intro-next-button button iapp-button-large"><div class="iapp-button-text">Begin</div></div>\n    </div>  \n</div>\n';

}
return __p
};

this["templates"]["name.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-name-input-panel active">\n    <div class="iapp-button-small iapp-name-back-button button">\n        <div class="iapp-button-text">\n            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                 viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n            <polygon points="431.2,166.6 275.9,166.6 275.9,124.5 168.8,200 275.9,275.5 275.9,233.4 431.2,233.4 "/>\n            </svg>\n        </div>\n        <div class="iapp-back-button-label">Back</div>\n    </div>\n    <div class="iapp-content-wrap">\n        <p class="iapp-name-greeting iapp-panel-text-chatter">' +
((__t = (head)) == null ? '' : __t) +
'</p>\n        <div class="name-next-button button iapp-clickable iapp-button-large"><div class="iapp-button-text">Next</div></div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["otherProjectLink.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-project-promo">\n    <a href="' +
((__t = (link_url)) == null ? '' : __t) +
'" >\n        <div class="iapp-person-image-wrap iapp-clickable">\n            <img src="' +
((__t = (link_image)) == null ? '' : __t) +
'" alt="' +
((__t = (link_text)) == null ? '' : __t) +
'" class="iapp-person-item-img">\n            <div class="iapp-person-more-video-button">\n                See Project\n            </div>\n        </div>\n    </a>\n    <div class="iapp-person-text">\n        <h3 class="iapp-person-name">' +
((__t = (link_text)) == null ? '' : __t) +
'</h3>\n        <p class="iapp-person-bio">' +
((__t = (link_info)) == null ? '' : __t) +
'</p>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["person.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-person-image-wrap iapp-clickable">\n    <img src="' +
((__t = (person_still)) == null ? '' : __t) +
'" alt="' +
((__t = (person_name)) == null ? '' : __t) +
'" class="iapp-person-item-img">\n    <div class="iapp-person-more-video-button">\n        More videos\n    </div>\n</div>\n<div class="iapp-person-text">\n    <h3 class="iapp-person-name">' +
((__t = (person_name)) == null ? '' : __t) +
'</h3>\n    <p class="iapp-person-bio">' +
((__t = (person_bio)) == null ? '' : __t) +
'</p>\n</div>\n\n';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    ';
 if (userName != "") { ;
__p += '\n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn, ' +
((__t = (userName)) == null ? '' : __t) +
'. Continue this conversation by sharing this video.</h2>\n    ';
} else { ;
__p += '\n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn. Continue this conversation by sharing this video.</h2>\n    ';
};
__p += '\n    \n    <p class="iapp-share-preview">' +
((__t = (sharelanguage)) == null ? '' : __t) +
' #' +
((__t = (hashtags)) == null ? '' : __t) +
'</p>\n    \n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&hashtags=' +
((__t = (hashtags)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/facebook.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/email.svg" alt="Email share"></a>\n    </div>\n    <div id="iapp-fb-embed"></div>\n</div>\n';

}
return __p
};

this["templates"]["tag.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = (tagPretty)) == null ? '' : __t) +
'\n';

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-tag-sub1 active">\n    <div class="iapp-button-small iapp-topics-back-button button">\n        <div class="iapp-button-text">\n            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                 viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n            <polygon points="431.2,166.6 275.9,166.6 275.9,124.5 168.8,200 275.9,275.5 275.9,233.4 431.2,233.4 "/>\n            </svg>\n        </div>\n        <div class="iapp-back-button-label">Back</div>\n    </div>\n    <div class="iapp-content-wrap">\n        <h2 class="iapp-section-header iapp-panel-text-main">' +
((__t = (tag_text)) == null ? '' : __t) +
' ' +
((__t = (greeting)) == null ? '' : __t) +
'</h2>\n        <div class="iapp-tag-container">\n            \n        </div>\n    \n        <div class="tags-next-button button iapp-button-large hide iapp-clickable">\n            <div class="iapp-button-text">Next</div>\n        </div>\n    \n    </div>\n</div>\n\n<div class="iapp-panel iapp-tag-intro upcoming">\n\n    \n</div>\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

this["templates"]["video.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-video-back-button button iapp-button-small">\n    <div class="iapp-button-text">\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n             viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n        <polygon points="431.2,166.6 275.9,166.6 275.9,124.5 168.8,200 275.9,275.5 275.9,233.4 431.2,233.4 "/>\n        </svg>\n    </div>\n    <div class="iapp-back-button-label">Back</div>\n</div>\n<div class="iapp-button-text">Back to topics</div>\n\n<div class="iapp-video-info">\n     ';
 if (userName != "") { ;
__p += '\n    <h4 class=\'iapp-video-greeting\'>' +
((__t = (userName)) == null ? '' : __t) +
', ' +
((__t = (intro)) == null ? '' : __t) +
'</h4>\n    ';
} else { ;
__p += '\n    <h4 class=\'iapp-video-greeting\'>' +
((__t = (intro)) == null ? '' : __t) +
'</h4>\n    ';
};
__p += '\n    \n';
 if (isMobile) { ;
__p += '\n    <div class="iapp-video-info-buttons">\n        <div class="iapp-video-more-button button "><div class="iapp-button-text">More Videos</div></div>\n        <div class="iapp-video-discuss-button button iapp-button-small"><div class="iapp-button-text">Share</div></div>\n        <div class="iapp-video-credits-button button iapp-button-small"><div class="iapp-button-text">Credits</div></div>\n        <div class="iapp-video-play-button button iapp-button-small"><div class="iapp-button-text">Pause</div></div>\n        <div class="iapp-video-replay-button button iapp-button-small"><div class="iapp-button-text">Replay</div></div>\n        \n        \n    </div>\n\n    ';
 } else {;
__p += '\n        <h4 class="iapp-video-share-button iapp-clickable">Share this video</h4>\n    ';
 } ;
__p += '\n\n</div>\n\n<div class="iapp-video-loader">\n    <div class="iapp-content-wrap">\n        <h2 class="iapp-video-question-loader">' +
((__t = ( questionasked )) == null ? '' : __t) +
'</h2>\n        <div class="loader-img-wrap">\n            <img class="loader-img" src="http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/loader-white.svg" alt="Loading">\n        </div>\n    </div>\n</div>\n\n\n';
 if (!isMobile) { ;
__p += '\n<div class="iapp-video-desktop-controls">\n    <ul class="iapp-left-video-nav">\n        <li class="iapp-clickable iapp-video-home">Home</li>\n        <li class="iapp-clickable iapp-video-back-to-topics">Back to Topics</li>\n        <li class="iapp-clickable iapp-video-more-button">All Videos</li>\n        <li class="iapp-clickable iapp-comment-button">Comment</li>\n        <li class="iapp-clickable iapp-video-credits-button">About This Project</li>\n        <li class="iapp-clickable iapp-project-share-button">Share This Project</li>\n    </ul>\n\n    <div class="iapp-center-video-controls">\n        <div class="iapp-center-video-controls-button-wrap">\n            <div class="iapp-center-video-replay-button iapp-video-replay-button button iapp-button-small"><div class="iapp-button-text">\n\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n<path d="M300.2,74.8l14.6-14.6l-25.5-25.5l-37.8,37.8l-0.1-0.1L225.8,98l63.7,63.7l25.5-25.6l-15-15.3l0,0c43.7,0,79,35.4,79,79.1\n\ts-35.4,79-79,79s-79-35.4-79-79c0-0.2,0-0.5,0-0.8h-46.2c0,0,0,0.5,0,0.6c0,69.2,56.1,125.4,125.3,125.4s125.2-56,125.2-125.2\n\tC425.2,131,369.2,75,300.2,74.8z M277,98l0.6-0.6v1.2L277,98z"/>\n</svg>\n\n            </div></div>\n            <div class="iapp-center-video-play-button button "><div class="iapp-button-text">\n                    \n                    <svg class="iapp-pause-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n                        <g><rect x="211.2" y="75.2" width="71.2" height="250.4"/><rect x="316.8" y="75.2" width="71.2" height="250.4"/></g></svg>\n                    \n                    <svg class="iapp-play-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n                        <polygon points="388.5,200 211.2,325 211.2,75 "/>\n                    </svg>\n\n            </div>\n        </div>\n            <div class="iapp-center-video-next-button button iapp-button-small"><div class="iapp-button-text">\n                    \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">\n<polygon points="337.8,148.8 337.6,149 262.9,74.3 212.6,124.6 287.3,199.4 211.9,274.7 262.2,325 388.1,199.2 "/>\n</svg>\n\n</div></div>\n        </div>\n        <div class="iapp-center-video-controls-label-wrap">\n            <div class="iapp-center-video-control-label iapp-center-replay-label">Replay</div>\n            <div class="iapp-center-video-control-label iapp-center-play-label">Pause</div>\n            <div class="iapp-center-video-control-label iapp-center-next-label">Next</div>\n        </div>\n    </div>\n\n</div>\n\n';
 } ;
__p += '\n';

}
return __p
};

  return this["templates"];

});