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
        // LapysJS
            // Add Feature
            LapysJS.addFeature('script-attribute');

        /* Global Data */
            /* False
                    --- NOTE ---
                        #Lapys: I like my constants capitalized...
            */
            def('FALSE', {value: false});

            // True
            def('TRUE', {value: true});

            // Body
            def('BODY', {value: document.body});

            // Elements Registrable
            def('ELEMENTS_REGISTRABLE', {value: registerElement()});

            // Head
            def('HEAD', {value: document.head});

            // Loader Element
            def('LoaderElement', (function() {
                // Register Element > <loading-element>
                ELEMENTS_REGISTRABLE && registerElement('loading-element');

                // Return
                return function LoaderElement() {
                    // Initialization > Loading Screen
                    var loaderElement = 'loading-element'.html;

                    // Return
                    return loaderElement
                }
            })());

            // Loading Screen
            def('LoadingScreen', (function() {
                // Register Element > <loading-screen>
                ELEMENTS_REGISTRABLE && registerElement('loading-screen');

                // Return
                return function LoadingScreen() {
                    // Initialization > Loading Screen
                    var loadingScreen = 'loading-screen'.html;

                    // Return
                    return loadingScreen
                }
            })());

        /* Modification */
            /* Application
                    --- NOTE ---
                        #Lapys: Options for how the current document is handled dynamically.
            */
                /* Color
                        --- NOTE ---
                            #Lapys: Theme color for the application.
                */
                app.color = '#06F';

                /* Dynamic Styling
                        --- NOTE ---
                            #Lapys: Allow for CSS calculations to be done in JavaScript via certain CSS selectors.
                */
                app.dynamicStyling = TRUE;

                /* Dynamic Title
                        --- NOTE ---
                            #Lapys: The document title is predicted from the current URL address.
                */
                app.dynamicTitle = TRUE;

                // Height
                app.height = 'device-height';

                /* Loading Screen
                        --- CHECKPOINT ---
                            #Lapys: Don`t forget to set this to `TRUE`.

                        --- NOTE ---
                            #Lapys: Should the loading screen be injected into the current document?
                */
                app.loadingScreen = FALSE;

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
                        app.services.apple.mobileWebAppCapable = TRUE;

                        // Touch Fullscreen
                        app.services.apple.touchFullscreen = TRUE;

                // Viewport
                    // Initial Scale
                    app.viewport.initialScale = 1;

                    // Maximum Scale
                    app.viewport.maximumScale = 2;

                    // Minimal UI
                    app.viewport.minimalUI = TRUE;

                    // Minimum Scale
                    app.viewport.minimumScale = .1;

                    // Target Density Pixels
                    app.viewport.targetDensityDPI = 96;

                    // User Scalable
                    app.viewport.userScalable = TRUE;

                // Watch for Dynamic Styles
                app.watchForDynamicStyles = FALSE;

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
                        "</div>" +

                        /* Document Style
                                --- NOTE ---
                                    #Lapys: This coerces a smooth transition back to the current document after the loader is done.
                        */
                        "<style> body > * { opacity: 0 } </style>";

                // Insertion
                BODY.insertChild(LOADING_SCREEN);

                // On DOM Ready > Remove Loading Screen
                onDOMReady(function removeLoadingScreen() {
                    // Initialization > Loading Screen : Animation Length
                    var LOADING_SCREEN_ANIMATION_LENGTH = LOADING_SCREEN.getAnimationLength();

                    // Timeout > Pause Removal
                    timeout(function pauseRemoval() {
                        // Style > Loading Screen > Animation
                        LOADING_SCREEN.setCSS('animation', LOADING_SCREEN.getCSS('animation').replace(LOADING_SCREEN.getCSS('animation-name'), 'fadeOut'));

                        // Timeout
                        timeout(function() {
                            // Deletion
                            LOADING_SCREEN.remove()
                        }, LOADING_SCREEN_ANIMATION_LENGTH)
                    }, LOADING_SCREEN_ANIMATION_LENGTH)
                })
            })();

            // On DOM Ready
            onDOMReady(function() {
                // Initialization > Dynamic Cursor Style Element
                var DYNAMIC_CURSOR_STYLE_ELEMENT = 'style[media=all][type=text/css]'.html;

                // Modification
                    // Dynamic Cursor Style Element > Inner HTML
                    DYNAMIC_CURSOR_STYLE_ELEMENT.innerHTML = '* { cursor: none }';

                // Function
                    // Restore Cursor
                    function restoreCursor() {
                        /* Logic
                                [if statement]
                        */
                        if (DYNAMIC_CURSOR_STYLE_ELEMENT.innerHTML) {
                            // Modification > Dynamic Cursor Style Element > Inner HTML
                            DYNAMIC_CURSOR_STYLE_ELEMENT.innerHTML = '';

                            // Timeout > Modification > Dynamic Cursor Style Element > Inner HTML
                            timeout(function() { DYNAMIC_CURSOR_STYLE_ELEMENT.innerHTML = '* { cursor: none }' }, 2e3)
                        }
                    }; restoreCursor();

                // Event
                    // Window > (Blur, Mouse Move)
                    addEvent(['blur', 'mousemove'], restoreCursor);

                // Insertion
                HEAD.insertChild(DYNAMIC_CURSOR_STYLE_ELEMENT);

                // Function
                    // Register Custom Elements
                    function registerCustomElements() {
                        /* Logic
                                [if statement]
                        */
                        if (ELEMENTS_REGISTRABLE) {
                            // Register Element
                                // <jumbotron-element>
                                registerElement('jumbotron-element');

                            // Global Data
                                // HTML Jumbotron Element
                                def('HTMLJumbotronElement', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !1,

                                    // Value
                                    value: 'jumbotron-element'.html.constructor,

                                    // Writable
                                    writable: !0
                                })
                        }
                    }; registerCustomElements()

                    // Style DOM Elements
                    function styleDOMElements() {
                        // Initialization > Fixed Groups
                        var fixedGroups = $$('.fixed-group, .fixed-grp', 'list');

                        // Repeat
                            // Fixed Groups
                            repeat(fixedGroups, function(key, value) {
                                // Initialization > Fixed Group (Children) (Length)
                                var fixedGroup = value,
                                    fixedGroupChildren = fixedGroup.children,
                                    fixedGroupChildrenLength = fixedGroupChildren.length;

                                // Repeat > Fixed Group Children
                                repeat(array(fixedGroupChildren), function(key, value) {
                                    // Initialization > Fixed Group Child
                                    var fixedGroupChild = value;

                                    // (Modification > Fixed Group Child > Class) | (Style > Fixed Group Child)
                                    fixedGroupChildrenLength < 13 ?
                                        fixedGroupChild.addClass('grid-' + fixedGroupChildrenLength) :
                                        fixedGroupChild.setCSS({
                                            // Flex
                                            flex: {
                                                // Basis
                                                basis: 100 / fixedGroupChildrenLength
                                            },

                                            // Height
                                            height: 100 / fixedGroupChildrenLength,

                                            // Minimum Height
                                            minHeight: 100 / fixedGroupChildrenLength,

                                            // Minimum Width
                                            minWidth: 100 / fixedGroupChildrenLength,

                                            // Width
                                            width: 100 / fixedGroupChildrenLength
                                        }, '%')
                                })
                            })
                    }; styleDOMElements();
                    app.dynamicStyling && onDOMElementAdded(styleDOMElements)
            })
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
