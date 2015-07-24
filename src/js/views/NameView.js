define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'api/analytics'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics) {
    return Backbone.View.extend({
        initialize: function() {
           // this.listenTo(Backbone, 'name:set', this.onUserSet); 

        },
        events: {
            "click .name-next-button": "onNextClick",
            "click .iapp-name-skip-button": "onNextClick",
            "click .iapp-name-back-button": "onBackClick",
            'keyup .iapp-name-input': "onKeyPress"
        },
        className: 'iapp-panel iapp-name-panel upcoming',
        template: templates['name.html'],
        render: function() {
            this.$el.html(this.template({userName: this.userName, head: dataManager.data.project_head, name_text: dataManager.data.name_text, greeting: this.getGreeting()}));
            return this;
        },
        onNextClick: function() {
            Analytics.trackEvent('Name next button clicked');
            this.goToNext();
        },
        onBackClick: function(){
            Backbone.trigger("app:goBack");
        },
        onKeyPress: function(e) {
            if(e.keyCode == 13) {
                this.goToNext();
            }
        },
        userName: '',
        onUserSet: function() {
            this.render();
            _.defer(function() {
                this.$('.iapp-name-input-panel').removeClass('active').addClass('done');
                this.$('.iapp-name-thankyou-panel').removeClass('upcoming').addClass('active');
            }, this);


            _.delay(function() {
                Backbone.trigger("app:advance");
                // Backbone.trigger("get:video");
            }, this.addDelay);
        },
        goToNext: function() {

            // var $input = this.$('.iapp-name-input');
            // $input.blur();
            // this.userName = $input.val();
            Backbone.trigger("app:advance");
            Backbone.trigger("name:set", "");
        },
        getGreeting: function() {
            var greetings = ['Good morning.', 'Good afternoon.', 'Good evening.'];
            var date = new Date();
            var hour = date.getHours();
            var result;

            if (hour < 12) {
                result = greetings[0];
            } else if (hour < 18){
                result = greetings[1];
            } else {
                result = greetings[2];
            }
            return result;
        },
        addDelay: 4000

    });


});
