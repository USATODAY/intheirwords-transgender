define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates'
    ],
    function(jQuery, _, Backbone, templates) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, 'credits:show', this.onCreditShow);
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            events: {
                'click .iapp-credits-close': 'onCloseClick'
            },
            template: templates['credits.html'],
            className: 'iapp-credits-panel iapp-panel upcoming',
            onCloseClick: function() {
               this.$el.removeClass('active').addClass('upcoming'); 
            },
            onCreditShow: function() {

                this.$el.addClass('active').removeClass('upcoming');
            }
        });


});
