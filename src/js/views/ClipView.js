define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates',
        'api/analytics'
    ],
    function(jQuery, _, Backbone, templates, Analytics) {
        return Backbone.View.extend({
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            events: {
                'click': 'onClick'
            },
            template: templates['clip.html'],
            className: function() {
                return 'iapp-clip-index-item iapp-clickable ' + this.model.get('first_name');
            },
            onClick: function() {
                Analytics.trackEvent('Clip index video clicked');
                Backbone.trigger("update:video", this.model);
                Backbone.trigger("index:hide");
            }
        });


});
