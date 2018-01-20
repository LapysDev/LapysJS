/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    /* Global Data */
        /* LapysJS */
            // Script
                // Enable
                check(function() {
                    // Return
                    return 'experimentalFeatures' in LapysJS
                }, function() {
                    // LapysJS > Script > Enable
                    LapysJS.script.enable = 'html-javascript'
                });

        /* Allow Particles JS Script */
        def('ALLOW_PARTICLES_JS_SCRIPT', {
            /* Value
                    --- NOTE ---
                        @lapys: Set to 'true' to use the ParticleJS script,
                            and 'false' to do otherwise.
            */
            value: (function() {
                // Initialization > Default
                let Default = true;

                /* Logic
                        [switch:case:default statement]

                    > Return
                */
                switch (getQueryParameterByName('allowParticlesJSScript')) {
                    // False
                    case 'false':
                        return false;
                        break;

                    // True
                    case 'true':
                        return true;
                        break;

                    // Null
                    case null:
                        return Default
                }

                // Return
                return Default
            })(),

            // Writable
            writable: false
        });

        /* Allow Dynamic Text Initialization Script */
        def('ALLOW_DYNAMIC_TEXT_INIT_SCRIPT', {
            /* Value
                    --- NOTE ---
                        @lapys: Set to 'true' to use the Dynamic Text initialization script,
                            and 'false' to do otherwise.
            */
            value: (function() {
                // Initialization > Default
                let Default = true;

                /* Logic
                        [switch:case:default statement]

                    > Return
                */
                switch (getQueryParameterByName('allowDynamicTextInitScript')) {
                    // False
                    case 'false':
                        return false;
                        break;

                    // True
                    case 'true':
                        return true;
                        break;

                    // Null
                    case null:
                        return Default
                }

                // Return
                return Default
            })(),

            // Writable
            writable: false
        });

        /* Document */
            // Title
            document.title += ' | Client-Side Web Library'
}
