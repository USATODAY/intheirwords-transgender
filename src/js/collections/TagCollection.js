define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/TagModel'
  ], function(jQuery, _, Backbone, TagModel){

    return Backbone.Collection.extend({
        model: TagModel,
        initialize: function() {
            
            this.on('change:isActive', this.onActiveChange); 
            this.listenTo(Backbone, 'tags:reset', this.onTagsReset);
        },

        onActiveChange: function() {
            var filterArray = _.map(this.where({'isActive': true}), function(model) {
                return model.get('tagName');
            });

            

            Backbone.trigger('filters:update', filterArray);
        },

        onVideosFiltered: function(availableTags) {
            
            
            this.each(function(model) {
                if (_.contains(availableTags, model.get('tagName'))) {
                    
                    model.set({'isAvailable': true});
                    
                } else {

                    model.set({'isAvailable': false});
                }
            });

            // console.log(this.where({'isAvailable': true}));
        },
        onTagsReset: function() {
            this.each(function(tag) {
                tag.set({'isActive': false});
            });
        }
             
        
    });

});
