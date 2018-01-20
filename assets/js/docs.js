/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    /* Global Data */
        /* Element */
            // Clear HTML
            (typeof Element.prototype.clearHTML == 'function') || Element.prototype.def('clearHTML', {
                // Value
                value: function clearHTML() {
                    // Modification > Target > Inner HTML
                    (typeof this.tagName != 'string') || (this.innerHTML = '')
                },

                // Writable
                writable: false
            });

    /* Functions */
        /* Index */
        global.index = function index() {
            /* Loop
                    Index Argument 1.
            */
            for (let i = 0; i < len(arguments[1]); i += 1)
                /* Logic
                        [switch:case:default statement]
                */
                switch (typeof arguments[0]) {
                    // Function
                    case 'function':
                        // Argument 0
                        arguments[0].apply(this, [...arguments].slice(2).addElementToBack(i));
                        break;

                    // String
                    case 'string':
                        // Execution
                        eval(`(function() {let index = ${i};\n${arguments[0]}\n})()`)
                }
        }

    /* Components */
        /* Header Navigation Bar */
            // Index
            index(function(index) {
                // Modification > Header Navigation Bar > Script
                $$('[role=header-navigation-bar', index).setAttr('script');

                /* Check
                        --- NOTE ---
                            @lapys: The runtime of the Script attribute to the Script property
                                has a slight delay which must be accounted for.
                */
                check(function() {
                    // Return
                    return 'script' in $$('[role=header-navigation-bar', index)
                }, function() {
                    timeout(function() {
                        // Modification > Header Navigation Bar > Script
                        $$('[role=header-navigation-bar', index).script =
                            'this.clearHTML();' +
                            'index(function(index,that) {' +
                                'that.innerHTML += `<a class="button-0 center col-1 single-line smooth transparent-button upper" href="${NAVIGATION_LINKS[index].href}" target=${NAVIGATION_LINKS[index].target} title="${NAVIGATION_LINKS[index].title}">${NAVIGATION_LINKS[index].textContent}</a>`' +
                            '}, len(NAVIGATION_LINKS), this)'
                    }, 100)
                })
            }, $$('[role=header-navigation-bar', 'length'))
}
