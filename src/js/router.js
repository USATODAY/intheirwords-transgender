define([
    "jquery",
    "underscore",
    'lib/BackboneRouter',
    ], 
    function($, _, Backbone) { 
        var Router = Backbone.Router.extend({

            routes: {
                "": "home",
                
                "video/:clip_name":                 "highlight",    // #/1

            },

            home: function() {
                Backbone.trigger("homeRoute");
            },

            highlight: function(clip_name) {
                Backbone.trigger("router:video", clip_name);
            }

        });


        return new Router();
});