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
    
    .setPattern('textarea', 'textarea', 'keyup', function() {
            
    })
    
    .setPattern('radio', 'input[type=radio]', 'change', function() {
            
    })
    
    .setPattern('checkbox', 'input[type=checkbox]', 'change', function() {
            
    })
    
    .setPattern('select', 'select', 'change', function() {
            
    });