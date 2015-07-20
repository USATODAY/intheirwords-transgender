define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/PersonModel'
    ], 
    function(jQuery, _, Backbone, PersonModel) {
        return Backbone.Collection.extend({
            model: PersonModel
        });
});