define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, templates){
        return Backbone.View.extend({
            initialize: function() {
              this.listenTo(Backbone, "window:resize", this.reformatVideos);
              this.listenTo(Backbone, "video:ready", this.onVideoReady);
              this.listenTo(Backbone, "video:ended", this.onVideoEnded);

            },
            template: templates['brightcove.html'],
            className: 'iapp-brightcove-wrap',
            render: function() {

              
              this.$el.html(this.template(this.model.toJSON()));
              return this;
            },
            activate: function() {
              brightcove.createExperiences();
            },
            reformatVideos: function() {
                var fullHeight, fullWidth;
                var numWindowWidth = window.innerWidth;
                if (window.innerWidth / window.innerHeight < 1920 / 1080) {
                  var numWidth = 100 * ((1920 / 1080) / (window.innerWidth / window.innerHeight));

                  this.$el.css({"top": "0%", "left" : ((100 - numWidth) / 2).toString() + "%", "width": numWidth.toString() + "%", "height": "100%"});
                  if(this.bcExperience !== undefined) {

                    if (this.bcExperience.experience.type == "html") {
                      //convert percent to pixels
                      fullWidth = numWidth/100 * window.innerWidth;
                      fullHeight = window.innerHeight;
                      this.bcExperience.setSize(fullWidth, fullHeight);
                    } 

                  } else {
                  }

                } else {
                  var numHeight = 100 * ((1080/ 1920) / (window.innerHeight/window.innerWidth));
                  this.$el.css({"left" : "0%"});
                  this.$el.css({"top" : ((100 - numHeight) / 2).toString() + "%", "height": numHeight.toString() + "%", "width": "100%"});

                   if(this.bcExperience !== undefined) {

                     if (this.bcExperience.experience.type == "html") {
                      //convert percent to pixels
                      fullHeight = numHeight/100 * window.innerHeight;
                      fullWidth = window.innerWidth;

                   
                      this.bcExperience.setSize(fullWidth, fullHeight);
                    }
                    
                  } else {
                  }
                }


            
            },
            onVideoReady: function(bcObj) {
              this.bcPlayer = bcObj.player;
              this.bcExperience = bcObj.experience;
              this.reformatVideos();
              this.pauseVideo();
              Backbone.trigger("video:loaded");
            },
            
            pauseVideo: function() {
              this.bcPlayer.pause();
            },

            playVideo: function() {
              this.bcPlayer.play();
            },

            setVideo: function(bcId) {
              this.bcPlayer.cueVideoByID(bcId);
            },

            onVideoEnded: function(bcObj) {
              // bcObj.experience.unload();
              // this.remove();
            } 
        });
});
