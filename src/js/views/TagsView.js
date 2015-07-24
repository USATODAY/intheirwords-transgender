define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/TagView',
    'dataManager',
    'api/analytics'
  ],
  function(jQuery, _, Backbone, TagView, dataManager, Analytics) {
    return Backbone.View.extend({
        initialize: function() {
           this.listenTo(this.collection, 'change:isActive', this.filter);
           this.listenTo(Backbone, 'video:set', this.advanceSub);
           // this.listenTo(Backbone, 'video:next', this.advanceSub);
           this.listenTo(Backbone, 'tags:reset', this.onTagsReset);
           this.listenTo(Backbone, "video:loaded", this.onVideoLoad);
        },
        events: {
            "click .tags-next-button": "onNextClick",
            "click .iapp-topics-back-button": "onBackClick"
        },
        className: 'iapp-panel iapp-tag-panel upcoming',
        template: templates['tags.html'],
        greetingTemplate: templates['greeting.html'],
        render: function(data) {

            //temp remove once config is in place
            var config = { isMobile: false};

            var _this = this;
            this.$el.html(this.template({tag_text: dataManager.data.tag_text, head: dataManager.data.project_head, greeting: this.getGreeting()}));
            
            this.collection.each(function(tagModel) {
                 var tagView = new TagView({model: tagModel});
                 _this.$('.iapp-tag-container').append(tagView.render().el);
            });

            _.defer(function() {
                    this.$('.iapp-tag-container').isotope({
                        itemSelector: '.iapp-tag-item',
                        transitionDuration: (!config.isMobile) ? '0.4s' : 0,
                        layoutMode: 'fitRows'

                });
            });
            
            return this;
        },
        onNextClick: function() {
            Analytics.trackEvent('Tags next button clicked');
            Backbone.trigger("tags:set");
        },
        onBackClick: function() {
            Backbone.trigger("app:goBack");
        },
        filter: function() {
            this.$('.iapp-tag-container').isotope({filter: ':not(.unavailable)'});
            if (this.collection.where({'isActive': true}).length > 0) {
                this.showNext(true);
            } else {
                this.showNext(false);
            }
        },
        showNext: function(blnShow) {
            if(blnShow === true) {
               $('.tags-next-button').removeClass('hide'); 
            } else {
                $('.tags-next-button').addClass('hide');
            }
            
        },
        getGreeting: function() {
            var greetings = ['this morning?', 'this afternoon?', 'this evening?'];
            var date = new Date();
            var hour = date.getHours();
            var result;

            if (hour < 12) {
                result = greetings[0];
            } else if (hour < 18){
                result = greetings[1];
            } else {
                result = greetings[2];
            }
            return result.toUpperCase();
        },
        renderGreeting: function(selectedVideoModel) {
            this.$('.iapp-tag-intro').html(this.greetingTemplate(selectedVideoModel.toJSON()));
        },
        advanceSub: function(selectedVideoModel) {
            Backbone.trigger("app:advance");
            /*
            this.renderGreeting(selectedVideoModel);
            
            this.$('.iapp-tag-sub1').removeClass('active').addClass('done');
            this.$('.iapp-tag-intro').removeClass('upcoming').addClass('active');

             _.delay(function() {
                Backbone.trigger("app:advance");
                _.delay(function() {
                    this.$('.iapp-tag-sub1').addClass('active').removeClass('done');
                    this.$('.iapp-tag-intro').addClass('upcoming').removeClass('active');
                }, 1000);
               
            }, this.addDelay);

            */
        },
        addDelay: 3000,
        onTagsReset: function() {
            this.$('.iapp-tag-container').isotope('layout');
        }
    });


});
