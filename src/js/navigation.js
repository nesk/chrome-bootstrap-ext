/*
 * Navigation
 */

$$('.menu a').forEach(function(node) {

    node.addEventListener('click', function(event) {
        event.preventDefault();
        var selected = 'selected';

        // Unselecting all the views and menu buttons
            $$('.mainview > *').forEach(function(node) {
                node.classList.remove(selected);
            });

            $$('.menu li').forEach(function(node) {
                node.classList.remove(selected);
            });

        // Hiding the views after the CSS animation is done
            setTimeout(function() {
                $$('.mainview > *:not(.selected)').forEach(function(node) {
                    node.style.display = 'none';
                });
            }, 100);

        // Selecting the current button and the associated view
            var currentView = $(this.getAttribute('href'));
            
            this.parentNode.classList.add(selected);
            currentView.style.display = 'block';
        
            // This timer is necessary to apply the class after the display property has been correctly applied
            setTimeout(function() {
                currentView.classList.add(selected);
            }, 0);

        // Moving to the top of the page after the view has been fully displayed
            setTimeout(function() {
                $('body').scrollTop = 0;
            }, 200);
    });

});

$$('.mainview > *:not(.selected)').forEach(function(node) {
    node.style.display = 'none';
});