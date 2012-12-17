/*
 * Modals
 */

$$('button[data-modal]').forEach(function(node) {

    node.addEventListener('click', function(event) {
        event.preventDefault();
        var modal = $('#' + this.dataset.modal).cloneNode(true);

        modal.removeAttribute('style'); // Displays the modal

        // Hides the modal if a button is clicked
        $$('button', modal).forEach(function(node) {
            node.addEventListener('click', function() {
                modal.classList.add('transparent');
                setTimeout(function() {
                    modal.parentNode.removeChild(modal);
                }, 1000);
            });
        });

        // Applies the pulse effect
            modal.addEventListener('click', function(event) {
                if(this == event.target) {
                    $('.page', modal).classList.add('pulse');
                }
            });

            $('.page', modal).addEventListener('webkitAnimationEnd', function() {
                this.classList.remove('pulse');
            });

        $('body').appendChild(modal);
    });

});