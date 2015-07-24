define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/config',
    'views/BrightcoveView'
  ],
  function(jQuery, _, Backbone, templates, config, BrightcoveView) {
    return Backbone.View.extend({
        initialize: function() {
            this.listenTo(Backbone, "window:resize", this.resizeVideo);
        },
        className: 'iapp-panel active iapp-intro-panel',
        template: templates['intro.html'],
        render: function(data) {
            this.$el.html(this.template({head: data.project_head, chatter: data.intro_text, title: data.title, sub_title: data.sub_title}));
            this.renderVideo();
            return this;
        },
        createVideoModel: function() {
            var videoModel = new Backbone.Model({brightcoveid: 4189256781001, ready_handler: 'introTemplateReady'});
            return videoModel;
        },

        videoTemplate: templates["IntroVideo.html"],

        renderVideo: function() {
            this.$el.append(this.videoTemplate({ video_name: "intro_bg", isMobile: config.isMobile }));
            this.resizeVideo();
        },

        resizeVideo: function() {
            var $videoEl = this.$('video');
            if (window.innerWidth / window.innerHeight < 1920 / 1080) {
                var numWidth = 100 * ((1920 / 1080) / (window.innerWidth / window.innerHeight));
                $videoEl.css({"width" : numWidth.toString() + "%", "left" : ((100 - numWidth) / 2).toString() + "%"});
            } else {
                $videoEl.css({"width" : "100%", "left" : "0%"});
            }
        }
    });


});
