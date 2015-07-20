define(
    [
        'jquery',
        'underscore',
        'backbone',
        'helper'
    ],
    function(jQuery, _, Backbone, helper){

        return Backbone.Model.extend( {
            defaults: {
                'person_name': '',
                'person_bio': '',
                'person_still': '' 
            },

            initialize: function() {
                this.set({'first_name': helper.cleanTag(this.get('first_name'))});
            }
    });

});
