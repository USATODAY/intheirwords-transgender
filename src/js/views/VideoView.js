define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'views/BrightcoveView',
    'views/ShareView',
    'views/VideoShareView',
    'views/ProjectShareView',
    'views/CreditView',
    'views/CommentView',
    'models/CreditsModel',
    'models/ShareModel',
    'models/config',
    'dataManager',
    'router',
    'templates',
    'api/analytics'
  ],
  function(jQuery, _, Backbone, BrightcoveView, ShareView, VideoShareView, ProjectShareView, CreditsView, CommentView, CreditsModel, ShareModel, config, dataManager, router, templates, Analytics) {

    return Backbone.View.extend({
        initialize: function() {
           this.listenTo(Backbone, "render:video", this.renderVideo); 
           this.listenTo(Backbone, "video:loaded", this.onVideoLoad);
           this.listenTo(Backbone, "video:play", this.updatePlayButtonPlay);
           this.listenTo(Backbone, "video:pause", this.updatePlayButtonPause);
           this.listenTo(Backbone, "video:ended", this.onVideoEnded);
           this.listenTo(Backbone, "get:video", this.onGetVideo);
           this.listenTo(Backbone, "update:video", this.updateView);
           this.listenTo(Backbone, "share:close", this.onShareClose);
           this.listenTo(Backbone, "tags:set", this.onTagsSet);
           // this.collection.getAvailableTags();
           
        },
        events: {
            'click .iapp-video-more-button': 'onMoreClick',
            'click .iapp-video-discuss-button': 'onShareClick',
            'click .iapp-video-share-button': 'onVideoShareClick',
            'click .iapp-comment-button': 'onCommentClick',
            'click .iapp-project-share-button': 'onProjectShareClick',
            'click .iapp-video-credits-button': 'onCreditsClick',
            'click .iapp-video-home': 'onHomeClick',
            'click .iapp-video-replay-button': 'onReplayClick',
            'click .iapp-video-play-button': 'onPlayClick',
            'click .iapp-center-video-play-button': 'onPlayClick',
            'click .iapp-video-topics-button': 'onTopicsClick',
            'click .iapp-video-back-button': 'onTopicsClick',
            'click .iapp-video-back-to-topics': 'onTopicsClick',
            'click .iapp-center-video-next-button': 'onSkipClick'
 
        },
        className: 'iapp-panel iapp-video-panel upcoming',
        template: templates['video.html'],
        render: function(videoModel) {
            // console.log(this.collection);
            if (videoModel !== undefined) {
                this.selectedVideoModel = videoModel;
            } 
            
            this.$el.html(this.template(this.selectedVideoModel.toJSON()));

            this.addShare();
            this.addCredits();

            
            return this;
        },
        renderVideo: function() {
            //get random video based on sellected tags from the collection
            // var selectedVideoModel = this.collection.pickVideo()
            
            router.navigate('video/' + this.selectedVideoModel.get('video_clip'));

            this.brightcoveView = new BrightcoveView({model: this.selectedVideoModel});
            this.$el.append(this.brightcoveView.render().el);
            this.brightcoveView.activate();

            // console.log(brightcoveView);
            var currentVideo = this.collection.find(function(video) {
                return video.isActive === true;
            });

            
        },
        onMoreClick: function() {
            Analytics.trackEvent("More videos button clicked");
            Backbone.trigger('index:show');
        },
        onCreditsClick: function() {
            Backbone.trigger('credits:show');
        },        
        onTagsSet: function() {
            this.selectedVideoModel = this.collection.pickVideo();
            Backbone.trigger('video:set', this.selectedVideoModel);
        },
        onReplayClick: function() {
            var _this = this;
            Analytics.trackEvent("Video replay button clicked");
            Backbone.trigger('index:hide');
            this.brightcoveView.bcPlayer.getIsPlaying(cb);
            function cb(result) {
                if (result) {
                    _this.brightcoveView.bcPlayer.seek(0);
                    
                } else {
                     _this.brightcoveView.bcPlayer.seek(0);
                    _this.brightcoveView.playVideo();
                    
                }
            }
            
        },
        onSkipClick: function() {
            var _this = this;
            this.brightcoveView.bcPlayer.getVideoDuration(false, skipCB);
            function skipCB(duration) {
                _this.brightcoveView.bcPlayer.seek(duration);
            }
        },
        onPlayClick: function() {
            Analytics.trackEvent("Video play/pause button clicked");
            this.brightcoveView.bcPlayer.getIsPlaying(cb);
            var _this = this;
            function cb(result) {
                if (result) {
                    _this.brightcoveView.pauseVideo();
                    _this.$('.iapp-video-play-button').find('.iapp-button-text').text("Play");
                    _this.$('.iapp-center-video-play-button').addClass('play').removeClass('pause');
                } else {
                    _this.brightcoveView.playVideo();
                    _this.$('.iapp-video-play-button').find('.iapp-button-text').text("Pause");
                    _this.$('.iapp-center-video-play-button').addClass('pause').removeClass('play');
                }
            }
        },
        updatePlayButtonPlay: function() {
            this.$('.iapp-video-play-button').find('.iapp-button-text').text("Pause");
            this.$('.iapp-center-video-play-button').addClass('pause').removeClass('play');
        },
        updatePlayButtonPause: function() {
            this.$('.iapp-video-play-button').find('.iapp-button-text').text("Play");
            this.$('.iapp-center-video-play-button').addClass('play').removeClass('pause');
        },
        onTopicsClick: function() {
            this.brightcoveView.pauseVideo();
            Backbone.trigger('index:hide');
            Backbone.trigger('app:goBack');
            Backbone.trigger('tags:reset');
        },
        updateView: function(newVideoModel) {


            this.$('.iapp-video-loader').removeClass('done');

            this.selectedVideoModel = newVideoModel;
            router.navigate('video/' + this.selectedVideoModel.get('video_clip'));


            var newData = newVideoModel.toJSON();



            this.brightcoveView.setVideo(this.selectedVideoModel.get('brightcoveid'));
            this.addShare();


            //add dom updating for other video info

            this.$('.iapp-video-greeting').html(newData.userName + ' ' + newData.intro);

            this.$('.iapp-video-description').html(newData.videodescription);

            this.$('.iapp-video-question-loader').html(newData.questionasked);

            var _this = this;
            _.delay(function() {
                this.$('.iapp-video-loader').addClass('done');
                _this.brightcoveView.playVideo();
            }, 3000);

        },
        onGetVideo: function() {
            //get random video based on sellected tags from the collection
            // this.selectedVideoModel = this.collection.pickVideo()
            // this.renderVideo();
        },
        onShareClick: function() {
            Analytics.trackEvent('Video share button clicked');
            this.brightcoveView.$el.addClass('iapp-blur');
            this.$('.iapp-video-info').addClass('iapp-blur');
            $('.iapp-header').addClass('iapp-blur');
            $('.iapp-index-panel').addClass('iapp-blur');

            this.shareView.$el.addClass('active').removeClass('upcoming');
            this.brightcoveView.pauseVideo();
        },
        onVideoShareClick: function() {
            Analytics.trackEvent('Video share button clicked');
            this.brightcoveView.$el.addClass('iapp-blur');
            this.$('.iapp-video-info').addClass('iapp-blur');
            $('.iapp-header').addClass('iapp-blur');
            $('.iapp-index-panel').addClass('iapp-blur');

            this.videoShareView.$el.addClass('active').removeClass('upcoming');
            this.brightcoveView.pauseVideo();
        },
        onProjectShareClick: function() {
            Analytics.trackEvent('Project share button clicked');
            this.brightcoveView.$el.addClass('iapp-blur');
            this.$('.iapp-video-info').addClass('iapp-blur');
            $('.iapp-header').addClass('iapp-blur');
            $('.iapp-index-panel').addClass('iapp-blur');

            this.projectShareView.$el.addClass('active').removeClass('upcoming');
            this.brightcoveView.pauseVideo();
        },
        onCommentClick: function() {
            Analytics.trackEvent('Comment button clicked');
            this.brightcoveView.$el.addClass('iapp-blur');
            this.$('.iapp-video-info').addClass('iapp-blur');
            $('.iapp-header').addClass('iapp-blur');
            $('.iapp-index-panel').addClass('iapp-blur');

            this.commentView.$el.addClass('active').removeClass('upcoming');
            this.brightcoveView.pauseVideo();
        },
        onHomeClick: function() {
            Analytics.trackEvent('Home button clicked');
            this.brightcoveView.pauseVideo();
            Backbone.trigger("app:goHome");
        },
        addShare: function() {

            if (config.isMobile) {
                if (this.shareView === undefined) {
                    this.shareView = new ShareView({model:  this.selectedVideoModel});
                    $('.iapp-wrap').append(this.shareView.render().el);
                } else {
                    this.shareView.remove();
                    this.shareView = new ShareView({model:  this.selectedVideoModel});
                    $('.iapp-wrap').append(this.shareView.render().el);
                }

                this.shareView.addFbEmbed();
            } else {
                if (this.videoShareView === undefined) {
                    console.log("add video share");
                    this.videoShareView = new VideoShareView({model: this.selectedVideoModel});
                    $('.iapp-wrap').append(this.videoShareView.render().el);
                } else {
                    this.videoShareView.remove();
                    this.videoShareView = new VideoShareView({model: this.selectedVideoModel});
                    $('.iapp-wrap').append(this.videoShareView.render().el);
                }

                if (this.projectShareView === undefined) {
                    this.projectShareView = new ProjectShareView({model: new ShareModel({default_share_language: dataManager.data.project_share_text, still_image: 'http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/fb-post.jpg'})});
                    $('.iapp-wrap').append(this.projectShareView.render().el);
                }

                if (this.commentView === undefined) {
                    this.commentView = new CommentView();
                    $('.iapp-wrap').append(this.commentView.render().el);
                    this.commentView.addFBEmbed();
                }
            
            }

                        
        },
        onShareClose: function() {
            this.brightcoveView.$el.removeClass('iapp-blur');
            this.$('.iapp-video-info').removeClass('iapp-blur');
            $('.iapp-header').removeClass('iapp-blur');
             $('.iapp-index-panel').removeClass('iapp-blur');
        },
        addCredits: function() {
            if (this.creditsView === undefined) {
                 this.creditsView = new CreditsView({model: new CreditsModel()});
                $('.iapp-wrap').append(this.creditsView.render().el);
            }
           
        },
        onVideoEnded: function() {
            Analytics.trackEvent("Video finished");
            console.log("video ended");
            if (this.collection._availableVids.length > 0) {
                var selectedVideoModel = this.collection.pickVideo();
                this.updateView(selectedVideoModel);
            } else {
                 if (!config.isMobile) {
                    Backbone.trigger('index:show');
                }
            }
        },

        onVideoLoad: function() {
            console.log("video load");
            var _this = this;
            _.delay(function() {
                this.$('.iapp-video-loader').addClass('done');
                _this.brightcoveView.playVideo();
            }, 3000);
        }
    });


});
