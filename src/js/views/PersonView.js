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
                'click .iapp-person-image-wrap': 'onClick'
            },
            template: templates['person.html'],
            className: 'iapp-person-item',
            onClick: function() {
                Analytics.trackEvent("Person Index Person Clicked");
                Backbone.trigger("person:selected", this.model);
            }
        });
});
