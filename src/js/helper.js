define([], function() {
    return {
        cleanTag: function(string) {
            return string.trim().replace(/\s/g, "-").toLowerCase();
        }
    };
});
