/*
 * Storage class : declaration AND instanciation
 */

var Storage = window.chromeBootstrap.Storage = {

    /*
     * Variables
     */

    patterns: {},
        
    // Default parameters
    params: {
        'sync': true
    },

    /*
     * Init
     */

    init: function(rootNode) {
        // The "sync" param impacts on the storage area
        this.storageArea = this.params.sync
            ? chrome.storage.sync
            : chrome.storage.local;

        var _this = this,
            nodes = $$('[data-storage]', rootNode);
        
        // Binds to each input with a "data-storage" attribute
        nodes.forEach(function(node) {
            _this.bind(node);
        });
    },

    /*
     * Parameters
     */

    setParam: function(id, value) {
        this.params[id] = value;
        return this; // Chaining
    },

    getParam: function(id) {
        return this.params[id];
    },

    /*
     * Patterns
     */

    setPattern: function(id, scheme, event, storeAction, loadAction) {
        var _this = this,
            pattern = this.patterns[id] = {};
        
        pattern.scheme = scheme;
        pattern.event = event;

        // Store and load actions are wrapped inside functions to easily retrieve and provide data

        pattern.storeEvent = function(event) {
            var target = event.currentTarget,
                value = storeAction.call(target, event); // The Event object is provided to the storage function but isn't required

            _this.store(target.name, value);
        };

        // Loads the data from the storage API and applies it to the node
        pattern.loadEvent = function(node) {
            _this.load(node.name, function(value) {
                loadAction.call(node, value); // loadAction is given as a callback through a wrapper which applies the correct "this" object
            });
        };

        return this; // Chaining
    },

    // Returns the pattern that suits the given node, or null.
    getPattern: function(node) {
        var patterns = this.patterns;

        for(var i in patterns) {
            if(node.webkitMatchesSelector(patterns[i].scheme)) {
                return patterns[i];
            }
        }

        return null;
    },

    removePattern: function(id) {
        this.patterns[id] = null;
    },

    /*
     * Events
     */

    setBinding: function(node, method) {
        var pattern = this.getPattern(node); // An event can't be added without a valid pattern

        pattern && node[method](pattern.event, pattern.storeEvent);

        return pattern;
    },

    bind: function(node) {
        var pattern = this.setBinding(node, 'addEventListener');
        pattern && pattern.loadEvent(node);
    },

    unbind: function(node) {
        this.setBinding(node, 'removeEventListener');
    },

    /*
     * Storage
     */

    store: function(id, value) {
        var items = {};
        items[id] = value;
        this.storageArea.set(items);
    },

    load: function(id, callback) {
        this.storageArea.get(id, function(items) {
            callback(items[id]);
        });
    }

};