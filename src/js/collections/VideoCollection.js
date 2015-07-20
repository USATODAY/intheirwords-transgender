define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/VideoModel'
  ], function(jQuery, _, Backbone, VideoModel){

    return Backbone.Collection.extend({
        initialize: function() {
           
            this.listenTo(Backbone, 'filters:update', this.onFilterUpdate);
            availableTags = [];
            
        },
        model: VideoModel,
        onFilterUpdate: function(filterArray) {
           this.filterByTagArray(filterArray);
           var availableTags = this.getAvailableTags();
           Backbone.trigger("videos:filtered", availableTags);
        },

        getAvailableTags: function() {
            availableTags = [];

            _.each(this._availableVids, function(model) {
                availableTags = _.union(availableTags, model.get('tags'));
            });
            return availableTags;
        },
        filterByTagArray: function(filterArray) {
            var _this = this;

            this.each(function(model) {
                var modelTags = model.get('tags');
                var intersection = _.intersection(filterArray, modelTags);
                var isAvailable = intersection.length > 0;

                if (isAvailable) {
                    model.set({'isAvailable': true, 'numTagsApplicable': intersection.length});
                } else {
                    model.set({'isAvailable': false, 'numTagsApplicable': 0});
                }
            });

            //cache a copy of filtered vids, sorted by number of tags they apply for
            this._availableVids = this.where({'isAvailable': true});
            this._availableVids = _.sortBy(this._availableVids, function(vidModel) {
                return - vidModel.get('numTagsApplicable');
            });

        },
        pickVideo: function() {
            //return and remove the first video
            return this._availableVids.shift();
        },

        arrContains: function(array1, array2) {
            // var diff = _.difference(array1, array2);
            // if (diff.length === 0) {
                // return true;
            // } else {
                // return false;
            // }
            
            var intersection = _.intersection(array1, array2);
            if (intersection.length > 0) {
                return true;
            } else  {
                return false;
            }
        },

        _availableVids: []
        
    });

});
