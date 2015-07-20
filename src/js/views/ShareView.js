define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates',
        'pym',
        'api/analytics'
    ],
    function(jQuery, _, Backbone, templates, pym, Analytics) {
        return Backbone.View.extend({
            render: function() {
                
                this.$el.html(this.template(this.model.toJSON()));


                return this;
            },
            events: {
                'click .iapp-share-close': 'onClickClose',
                'click .iapp-share-popup': 'onShareButtonClick'
            },
            addFbEmbed: function() {
                pym.Parent('iapp-fb-embed', 'http://www.gannett-cdn.com/experiments/usatoday/2015/04/intheirwords-lgbt-fb/index.html');
            },
            template: templates['share.html'],
            className: 'iapp-share-panel iapp-panel upcoming',
            onClickClose: function() {
                this.$el.addClass('upcoming').removeClass('active');
                Backbone.trigger('share:close');
            },
            onShareButtonClick: function(e) {
                Analytics.trackEvent('Social share button clicked');
                e.preventDefault();
                

              this.windowPopup(e.currentTarget.href, 500, 300);
            },
            windowPopup: function(url, width, height) {
                // Calculate the position of the popup so
                // it’s centered on the screen.
                var left = (screen.width / 2) - (width / 2),
                top = (screen.height / 2) - (height / 2);

                window.open(
                    url,
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
                );
            }
        });
});
