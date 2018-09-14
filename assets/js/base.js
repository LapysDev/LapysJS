/** Function > Main
    @author: Lapys Dev Team
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Returns 1 if there`s an error, returns 0 otherwise.
            - Over its years of development, the library is still a bare-bones version of what it could be and code could still be improved (innovative re-factoring).
*/
window && (function Main(args) {
    /* Modification */
        // Application
            // X UA Compatible
            app.xUACompatible = 'chrome=1, IE=Edge';

            // Viewport
                // Height
                app.viewport.height = 'device-height';

                // Initial Scale
                app.viewport.initialScale = 1;

                // Maximum Scale
                app.viewport.maximumScale = 2;

                // Minimal UI
                app.viewport.minimalUI = true;

                // Minimum Scale
                app.viewport.minimumScale = 2;

                // Target Density Pixels
                app.viewport.targetDensityDPI = 96;

                // User Scalable
                app.viewport.userScalable = true;

                // Width
                app.viewport.width = 'device-width';

        // Document
            // Jumbotrons
            document.def('jumbotrons', {
                // Configurable
                configurable: !0,

                // Get
                get: function jumbotrons() { return $$('jumbotron-element, .jumbotron') }
            });

    /* Functions */
        // On DOM Ready
        onDOMReady(function onDOMReady() {
            // Modify DOM
            (function modifyDOM() {
                // Global Data
                    // Control
                    var control = $i('control');

                // Function
                    // Update Control
                    LDKF.isHTMLElement(control) && (function updateControl() {
                        // Initialization
                        var controlContents = createDocumentFragment.html();

                        // Modification > Control > Class
                        control.addClass('col-grp');

                        // Insertion
                        control.insertChild(controlContents)
                    })();

                // Repeat
                    // {Jumbotron}
                    repeat(document.jumbotrons, function(key, value) {
                        // Modification > Value > Class
                        value.hasClass('jumbotron') || value.addClass('jumbotron')
                    });

                    // {Fixed Groups}
                    repeat($$('.fixed-grp, .fixed-group'), function(key, value) {
                        // Initialization > (Children, Length)
                        var children = value.children,
                            length = children.length;

                        // Repeat
                        repeat(children, function(key, value) {
                            // Modification > Value > Class
                            value.hasClass('grid-' + length) || value.addClass('grid-' + length)
                        })
                    })
            })()
        });

    // Return
    return 0
})([])
