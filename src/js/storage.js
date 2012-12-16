/*
 * Storage class : declaration AND instanciation
 */

var Storage = window.chromeBootstrap.Storage = (function() {

    var Storage = function() {
        this.patterns = {};
        
        // Default parameters
        this.params = {
            'sync': true
        };
    };

    var fn = Storage.prototype;

    /*
    /*
     * Parameters
     */

    fn.setParam = function(id, value) {
        this.params[id] = value;
        return this; // Chaining
    };

    fn.getParam = function(id) {
        return this.params[id];
    };

     * Patterns
     */

    fn.setPattern = function(id, scheme, event, storeAction, loadAction) {
        var _this = this,
            pattern = this.patterns[id] = {};
        
        pattern.scheme = scheme;
        pattern.event = event;

        // Store and load actions are wrapped inside functions to easily retrieve and provide data

        pattern.storeEvent = function(event) {
            var value = storeAction(event); // The Event object is provided to the storage function but isn't required
            _this.store();
        };

        pattern.loadEvent = function() {
            var value = _this.load(id); // The pattern id is required
            loadAction(value);
        };

        return this; // Chaining
    };

    // Returns the pattern that suits the given node, or null.
    fn.getPattern = function(node) {
        var patterns = this.patterns;

        for(var i in patterns) {
            if(node.is(patterns[i].scheme)) {
                return patterns[i];
            }
        }

        return null;
    };

    fn.removePattern = function(id) {
        this.patterns[id] = null;
    };

    /*
     * Events
     */

    fn.setBinding = function(node, type) {
        var pattern = this.getPattern(node); // An event can't be added without a valid pattern
        
        pattern && node[type](pattern.event, pattern.storeEvent);

        return !!pattern;
    }

    fn.bind = function(node) {
        return this.setBinding(node, 'on');
    };

    fn.unbind = function(node) {
        return this.setBinding(node, 'off');
    };

    /*
     * Storage
     */

    fn.store = function(id, value) {
        localStorage[id] = JSON.stringify(value);
    };

    fn.load = function(id), {
        return JSON.parse(localStorage[id]);
    };

    /*
     * Object exposure
     */

    return new Storage();

})();