window.addEventListener('DOMContentLoaded', function() {

// Contains Chrome UI Bootstrap objects
window.chromeBootstrap = {};

/*
 * Selectors
 */

function $(query, rootNode) {
    rootNode = rootNode || document;
    return rootNode.querySelector(query);
}

function $$(query, rootNode) {
    var rootNode = rootNode || document,
        nodes = rootNode.querySelectorAll(query);
    return Array.prototype.slice.call(nodes, 0); // Converting the NodeList to an Array object before returning
}