define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {

    var hostname = window.location.hostname;

    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/data/data.json";

    }

    return {
        data: null,
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                _this.data = data[0];

                // call the organize tags function to get our tags
                _this.organizeTags();

                /***
                 * loop through each item and format/clean up data
                 * including standardizing video_clip slugs
                 * and creating an actual image url
                 */
                _.each(_this.data.videos, function(videoObj) {

                    videoObj.video_clip = videoObj.video_clip.toLowerCase().trim();

                    videoObj.stillimage = _this.data.base_url + videoObj.stillimage;
                });

                // loop through all the people and create the image URL

                _.each(_this.data.people, function(personObj) {
                   personObj.person_still = _this.data.base_url + personObj.person_still;
                });

                // trigger the dataReady Backbone even which kicks off the app 
                Backbone.trigger("dataReady", this);

            });
        },
        organizeTags: function() {
            var _this = this;
            var tags = [];

            //loop through each data item and and get all the possible tags and put them in a master list
            _.each(_this.data.videos, function(video) {
                    
                //split tags string into array (assumes it is a comma-seperated string list)
                if (video.tags !== "") {
                    video.tags = video.tags.toLowerCase();
                    video.tags = video.tags.split(", ");
                    video.tags = _.without(video.tags, "");

                }

                //loop through each tag in the array and turn it into object 

                _.each(video.tags, function(tag) {
                    //add each tag to master tags array
                    
                    var tagObj = {
                        tagName: cleanTagName(tag),
                        tagPretty: tag
                    };

                    tags.push(tagObj);
                });

                
                video.tags = _.map(video.tags, function(tag) {
                    return cleanTagName(tag);
                });

                function cleanTagName(tag) {
                    return tag.trim().replace(/\s/g, "-");
                }

            });

            //remove duplacate tags from array
            var uniqueTags = _.uniq(tags, function(tag) {
                return tag.tagName;
            });

            
            this.data.tags = uniqueTags;
        },
        userName: ''
    };


});
