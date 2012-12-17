/*
 * Storage class : built-in patterns
 */

Storage

    .setPattern('text', 'input[name][type=text]', 'keyup',
        function() {
            return this.value;
        },
        function(value) {
            this.value = value;
        }
    )
    
    .setPattern('textarea', 'textarea[name]', 'keyup',
        function() {
            return this.value;
        },
        function(value) {
            this.value = value;
        }
    )
    
    .setPattern('radio', 'input[name][type=radio]', 'change',
        function() {
            return this.checked;
        },
        function(value) {
            this.checked = value;
        }
    )
    
    .setPattern('checkbox', 'input[name][type=checkbox]', 'change',
        function() {
            return this.checked;
        },
        function(value) {
            this.checked = value;
        }
    )
    
    .setPattern('select', 'select[name]', 'change',
        function() {
            return this.selectedIndex;
        },
        function(value) {
            this.selectedIndex = value;
        }
    );