/*
 * i18n
 */

$$('[data-i18n]').forEach(function(node) {
    node.innerHTML = chrome.i18n.getMessage(node.dataset.i18n);
});