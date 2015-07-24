define(
  [
    'jquery',
    'underscore',
    'backbone',
    'config'
  ],
  function(jQuery, _, Backbone, config){

    return Backbone.Model.extend( {
        defaults: {
            'default_share_language': '',
            'still_image': '',
            'fbShare': '',
            'twitterShare': '',
            'share_language': '',  
            'encodedShare': '',
            'fb_id': '',
            'fb_redirect': 'http://' + window.location.hostname + '/pages/interactives/fb-share/',
            'email_link': ''

 

            
        },

        initialize: function() {
            var baseURL = window.location.origin + window.location.pathname;
           this.set({
                'baseURL': baseURL,
                'fbShare': this.createFbShareURL(baseURL),
                'twitterShare': this.createTwitterShareURL(baseURL),
                'share_language': config.defaultShareLanguage,
                'encodedShare': encodeURIComponent(this.get('default_share_language')),
                'fb_id': config.fb_app_id,
                'email_link': this.createEmailLink(baseURL)
                
            }); 

           this.listenTo(Backbone, "set:lab", this.onSetLab);
          
           
        },

        createFbShareURL: function(url) {   
            url = url.replace('#', '%23');
            return encodeURI(url); 
        },

        createTwitterShareURL: function(url) {

            return encodeURIComponent(url); 
        },

        createEmailLink: function(url) {
            return "mailto:?subject=" + config.projectTitle + "&body=" + encodeURIComponent(config.defaultShareLanguage) +  "%0d%0d" + this.createTwitterShareURL(url) + "&subject=";
        },

        updateLanguage: function(newShareStr) {
            this.set({
                'sharelanguage': newShareStr,
                'encodedShare': encodeURIComponent(newShareStr)
            });


        },

        updateUrls: function() {
            var shareUrl;
            var baseURL = this.get('baseURL');
            
            this.updateLanguage(this.get('default_share_language'));
            shareUrl = baseURL;

            this.set({
                'fbShare': this.createFbShareURL(shareUrl),
                'twitterShare': this.createTwitterShareURL(shareUrl),
                'email_link': this.createEmailLink(shareUrl)
            });

        }
    });

});
