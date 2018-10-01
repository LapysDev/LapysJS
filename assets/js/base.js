/** Function > Main
    @author: Lapys Dev Team
    @url: https://www.github.com/LapysDev/LapysJS
*/
window && (function Main(args) {
    /* Logic
            [if statement]

            --- NOTE ---
                #Lapys: Prerequisites for this script to function.
    */
    if (typeof LapysJS == 'object') {
        /* Global Data */
            // Body
            def('BODY', {value: document.body});

            // Elements Registrable
            def('ELEMENTS_REGISTRABLE', {value: registerElement()});

            // Head
            def('HEAD', {value: document.head});

            // Loader Element
            def('LoaderElement', (function() {
                // Register Element
                ELEMENTS_REGISTRABLE && registerElement('loading-element');

                // Return
                return function LoaderElement() {
                    // Initialization > Loading Screen
                    var loaderElement = 'loading-element'.html;

                    // Return
                    return loaderElement
                }
            })(), !0);

            // Loading Screen
            def('LoadingScreen', (function() {
                // Register Element
                ELEMENTS_REGISTRABLE && registerElement('loading-screen');

                // Return
                return function LoadingScreen() {
                    // Initialization > Loading Screen
                    var loadingScreen = 'loading-screen'.html;

                    // Return
                    return loadingScreen
                }
            })(), !0);

        /* Modification */
            /* Application
                    --- NOTE ---
                        #Lapys: Options for how the current document is handled dynamically.
            */
                /* Color
                        --- NOTE ---
                            #Lapys: Theme color for the application.
                */
                app.color = '#0066FF';

                /* Dynamic Title
                        --- NOTE ---
                            #Lapys: The document title is predicted from the current URL address.
                */
                app.dynamicTitle = !0;

                // Height
                app.height = 'device-height';

                /* Loading Screen
                        --- NOTE ---
                            #Lapys: Should the loading screen be injected into the current document?
                */
                app.loadingScreen = !0;

                // Name
                app.name = 'LapysJS';

                // Robots
                app.robots = 'index, no-follow';

                // Width
                app.width = 'device-width';

                // X UA Compatible
                app.xUACompatible = 'chrome=1, IE=Edge';

                // Services
                    // Apple
                        // Mobile Web App Capable
                        app.services.apple.mobileWebAppCapable = true;

                        // Touch Fullscreen
                        app.services.apple.touchFullscreen = true;

                // Viewport
                    // Initial Scale
                    app.viewport.initialScale = 1;

                    // Maximum Scale
                    app.viewport.maximumScale = 2;

                    // Minimal UI
                    app.viewport.minimalUI = true;

                    // Minimum Scale
                    app.viewport.minimumScale = .1;

                    // Target Density Pixels
                    app.viewport.targetDensityDPI = 96;

                    // User Scalable
                    app.viewport.userScalable = true;

        /* Function */
            // Inject Loading Screen
            app.loadingScreen && (function injectLoadingScreen() {
                // Initialization
                    // Loading Screen
                    def('LOADING_SCREEN', {
                        // Value
                        value: new LoadingScreen
                    });

                // Modification > Loading Screen
                    // Class
                    LOADING_SCREEN.addClass('center', 'flex');

                    // ID
                    LOADING_SCREEN.id = 'loadingScreen';

                    // Inner HTML
                    LOADING_SCREEN.innerHTML +=
                        // Container
                        "<div class='center flex reverse' role=container>" +
                            // Loader Element
                            "<loader-element>" +
                                // Spinner
                                "<div role=spinner> </div>" +
                            "</loader-element>" +

                            // Content
                            "<p role=content> Building the page </p>" +
                        "</div>";

                // Style > Loading Screen > Opacity
                LOADING_SCREEN.style.opacity = 0;

                // Insertion
                // BODY.insertChild(LOADING_SCREEN)
            })()
    }

    else {
        // Error
        throw new Error('Missing JavaScript framework or library');

        // Return
        return 1
    }

    // Return
    return 0
})([])
