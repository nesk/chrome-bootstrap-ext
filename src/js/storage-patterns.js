/*
 * Storage class : built-in patterns
 */

Storage

    .setPattern('text', 'input[type=text]', 'keyup',
        function() {
            return this.value;
        },
        function(value) {
            this.value = value;
        }
    )
    
    .setPattern('textarea', 'textarea', 'keyup',
        function() {
            return this.value;
        },
        function(value) {
            this.value = value;
        }
    )
    
    .setPattern('radio', 'input[type=radio]', 'change',
        function() {
            return this.checked;
        },
        function(value) {
            this.checked = value;
        }
    )
    
    .setPattern('checkbox', 'input[type=checkbox]', 'change',
        function() {
            return this.checked;
        },
        function(value) {
            this.checked = value;
        }
    )
    
    .setPattern('select', 'select', 'change',
        function() {
            return this.selectedIndex;
        },
        function(value) {
            this.selectedIndex = value;
        }
    );