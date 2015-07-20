define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'dataManager',
    'api/analytics',
    'views/BrightcoveView',
    'views/IntroView',
    'views/TagsView',
    'collections/TagCollection',
    'views/NameView',
    'views/VideoView',
    'views/IndexView',
    'collections/VideoCollection',
    'collections/PeopleCollection',
    'router',
    'models/config',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, BrightcoveView, IntroView, TagsView, TagCollection, NameView, VideoView, IndexView, VideoCollection, PeopleCollection, router, config, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:advance", this.goForward);
                this.listenTo(Backbone, "app:goHome", this.goHome);
                this.listenTo(Backbone, "app:goBack", this.goBack);
                this.listenTo(Backbone, "name:set", this.onNameSet);
                this.listenTo(Backbone, "router:video", this.onVideoRoute);
                if (!config.isMobile) {
                    this.logoURL = $('.site-nav-logo-img').attr('src');
                } else {
                    var logo = $('.header-logo');
                    var bg = logo.css('background');

                    this.logoURL = bg.substring(bg.indexOf('url(') + 4, bg.indexOf('.png') + 4);
                }
                
                
            },
            events: {
                'click .intro-next-button': 'onNextClick',
                'click .iapp-usat-logo-image': 'onLogoClick'
            },
            onDataReady: function() {
                this.render();
                Backbone.history.start();
                _.delay(function() {
                    this.$('.iapp-preloader').fadeOut(250);
                }, 1000);
                
            },
            onNextClick: function() {
                Analytics.trackEvent('Into next button click.');
                Backbone.trigger("app:advance");
            },
            onLogoClick: function(e) {
                e.preventDefault();
                router.navigate('', {trigger: true});
                window.location.reload();
            },
            onNameSet: function(name) {
                dataManager.userName = name;
            },
            onPanelScroll: function(e) {
                if (e.currentTarget.scrollTop > 0) {
                    $('.iapp-header').addClass('iapp-fadeOut');
                } else {
                    $('.iapp-header').removeClass('iapp-fadeOut');
                }
            },
            onVideoRoute: function(clip_name) {

                
                this.goToVideo(this.videoCollection.findWhere({'video_clip': clip_name}));
            },
            render: function() {
                var splitTitle = dataManager.data.title.split("");
                this.$el.append(this.template({logo: this.logoURL, title: dataManager.data.title, page_url: this.getURL(), split_title: splitTitle}));
                this.addSubViews();
                return this;
            },
            template: templates["app.html"],
            subViews: [],
            addSubViews: function() {
                // console.log(dataManager);
               var introView = new IntroView();
               this.$el.append(introView.render(dataManager.data).el);
               // introView.renderVideo();
               this.subViews.push(introView);

               var nameView = new NameView();
               this.$el.append(nameView.render().el);
               this.subViews.push(nameView);

               var tagsView = new TagsView({collection: new TagCollection(dataManager.data.tags)});
               this.$el.append(tagsView.render().el);
               this.subViews.push(tagsView);

               var videoCollection = new VideoCollection(dataManager.data.videos);
               this.videoCollection = videoCollection;

               var videoView = new VideoView({collection: videoCollection});
               
               this.subViews.push(videoView);

               var peopleCollection = new PeopleCollection(dataManager.data.people);
               var indexView = new IndexView({collection: peopleCollection, videoCollection: videoCollection});

               this.subViews.push(indexView);

               this.$('.iapp-panel').scroll(this.onPanelScroll);
            },
            currentSubView: 0,
            goForward: function() {
                
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];

                if (this.currentSubView == 3) {
                    this.$el.append(this.subViews[3].render().el);
                    this.subViews[3].renderVideo();

                    this.$el.append(this.subViews[4].render().el);
                }

                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goToVideo: function(videoModel) {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView = 3;
                var newSub = this.subViews[this.currentSubView];
                this.$el.append(this.subViews[3].render(videoModel).el);
                this.subViews[3].renderVideo();

                this.$el.append(this.subViews[4].render().el);
                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goBack: function() {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView--;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            goHome: function() {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView = 0;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            getURL: function() {
                 return 'http://' + window.location.hostname + window.location.pathname;
            }
        });
});
