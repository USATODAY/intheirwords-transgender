define(
    [
        'jquery',
        'underscore',
        'backbone',
        'dataManager'
    ],
    function(jQuery, _, Backbone, dataManager){

        return Backbone.Model.extend( {
            defaults: {
                'credits_intro': '',
                'project_credits': [],
            },

            initialize: function() {
                var arrCredits = dataManager.data.project_credits.split(' ');
                var creditsObjs = _.map(arrCredits, function(credit) {
                    if (credit.charAt(0) == '@') {
                        var twitterUrl = 'http://twitter.com/' + credit.substring(1);
                        return {
                            'credit_text': credit,
                            'credit_url': twitterUrl
                        };
                    } else {
                        return {
                            'credit_text': credit,
                            'credit_url': null
                        };
                    }
                });
                this.set({
                    'credits_intro': dataManager.data.credits_intro,
                    'project_credits': creditsObjs
                });
            }
    });

});
