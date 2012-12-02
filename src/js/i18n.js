$('[data-i18n]').each(function(i, node) {
    node.innerHTML = chrome.i18n.getMessage(node.dataset.i18n);
});