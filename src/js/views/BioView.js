define(
    [
        'jquery',
        'underscore',
        'backbone',
        'views/PersonView',
        'views/ClipView',
        'templates',
        'api/analytics'
    ],
    function(jQuery, _, Backbone, PersonView, ClipView, templates, Analytics) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, 'bio:show', this.onIndexShow);
                this.listenTo(Backbone, 'bio:hide', this.onIndexHide);
                this.listenTo(Backbone, 'person:selected', this.onPersonSelected);
                this.videoCollection = this.options.videoCollection;
            },
            render: function() {
                this.$el.html(this.template());
              
                this.renderPeople();
                return this;
            },
            renderPeople: function() {
                var _this = this;

                this.collection.each(function(personModel) {
                    var personView = new PersonView({model: personModel});
                    
                    _this.$('.iapp-people-index').append(personView.render().el);
                });

                var blackHistoryUrl = this.getProjectUrl('InTheirWords');
                this.$('.iapp-people-index').append(this.otherProjectLinkTemplate({link_image: "http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/intheirwords-blackhistory.jpg", link_url: blackHistoryUrl, link_text: "#InTheirWords Black History", link_info: "There is a new generation of voices shaping our national conversation about being black in the USA. We want to connect you to some of these voices."}));
                
                var womenHistoryUrl = this.getProjectUrl('InTheirWords-women');
                this.$('.iapp-people-index').append(this.otherProjectLinkTemplate({link_image: "http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/intheirwords-women.jpg", link_url: womenHistoryUrl, link_text: "#InTheirWords Women's History", link_info: "Women in America vote, run for public office and make up almost half of the workforce. Yet there are still challenges facing women in the USA. Hear women talk about issues, including pay equity, paid family leave, sexism and beauty standards."}));
            },
            getProjectUrl: function(path) {
                var origin = window.location.origin;
                return origin + "/pages/interactives/" + path;
            },

            otherProjectLinkTemplate: templates["otherProjectLink.html"],

            events: {
                'click .iapp-index-back-close': 'onBackCloseClick',
                'click .iapp-index-close': 'onIndexHide'
            },
            template: templates['biotab.html'],
            className: 'iapp-panel upcoming iapp-index-panel iapp-flip-container',
            onIndexShow: function() {
                this.$('.iapp-clip-container').isotope({
                    filter: "*"
                });
                this.$el.addClass('active').removeClass('upcoming');
            },
            onIndexHide: function() {
                this.$el.removeClass('active').addClass('upcoming');

                //not sure if we should flip this back over here or not discuss
                this.$('.iapp-flip-item').removeClass('iapp-flipped');
            },
            onPersonSelected: function(personModel) {
                this.$('.iapp-flip-item').addClass('iapp-flipped');
                var personFirstName = personModel.get('first_name');
                this.filterClips(personFirstName);

            },
            onBackCloseClick: function() {
                this.$('.iapp-flip-item').removeClass('iapp-flipped');
            },
            filterClips: function(filterParam) {
                this.$('.iapp-clip-container').isotope({
                    filter: "." + filterParam
                });
            }
        });

});
