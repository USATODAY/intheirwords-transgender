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
        initialize: function() {
            this.listenTo(this.model, "change:isAvailable", this.onModelChangeAvailability);
            this.listenTo(this.model, "change:isActive", this.onModelChangeActive);
        },
        events:  {
            'click': 'onClick'
        },
        className: 'iapp-tag-item',
        template: templates['tag.html'],
        render: function(data) {
            this.$el.html(this.template(this.model.toJSON()));    
            return this;
        },
        onClick: function() {
            Analytics.trackEvent('tag clicked');
            //toggle active state of model when tag is clicked
            this.model.set({'isActive': !this.model.get('isActive')});

        },
        onModelChangeAvailability: function(e) {
            // console.log("tag viwe on model change");
            if (this.model.get('isAvailable')) {
               this.$el.removeClass('unavailable'); 
            } else {
                this.$el.addClass('unavailable');
            }
        },

        onModelChangeActive: function() {
            if (this.model.get('isActive')) {
               this.$el.addClass('active'); 
            } else {
                this.$el.removeClass('active'); 
            }
        }
    });


});
