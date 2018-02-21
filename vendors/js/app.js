/**
    @author: Lapys Dev Team
    @description: App JS is a web framework for configuring web pages to perform more like mobile apps.
    @version: 0.0.1
*/
(function AppJSScript(window = window, document = window.document, global = typeof global != 'undefined' ? global : null, undefined = window.undefined || void 0, LapysJS = typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false })) {
    /* {Global Object Test} Logic
            If
                LapysJS is ready.
    */
    if (typeof LapysJS == 'object' && (LapysJS || new (function Data() {})).ready === true) {
        /* Global Data
                --- NOTE ---
                    @lapys: Variables defined in all caps represent constants.
        */
            // Application
                /* Logic
                        [if:else if:else statement]

                        --- NOTE ---
                            @lapys: Configure the application from here.

                    > Modification > Application
                */
                if (typeof app == 'object') {
                    // Author
                    app.author = app.author || 'Author`s Name';

                    // Cache Control
                    app.cacheControl = app.cacheControl || 'cache';

                    // Character Set
                    app.charset = app.charset || document.characterSet || 'UTF-8';

                    // Copyright
                    app.copyright = app.copyright || 'Copyright Owner`s Name';

                    // Description
                    app.description = app.description || 'Description of the Application.';

                    // Robots
                    app.robots = app.robots || 'none';

                    // Theme Color
                    app.themeColor = app.themeColor || 'rgba(0, 0, 0, 0)';

                    // Viewport
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (global.RESPONSIVE_VIEW) {
                            // Height
                            app.viewport.height = app.viewport.height || 'device-height';

                            // Initial Scale
                            app.viewport.initialScale = app.viewport.initialScale || 1;

                            // Maximum Scale
                            app.viewport.maximumScale = app.viewport.maximumScale || 2;

                            // Minimal U.I.
                            app.viewport.minimalUI = true;

                            // Minimum Scale
                            app.viewport.minimumScale = app.viewport.minimumScale || .1;

                            // Target Density D.P.I.
                            app.viewport.targetDensityDPI = app.viewport.targetDensityDPI || 96;

                            // User Scalable
                            app.viewport.userScalable = app.viewport.userScalable || true;

                            // Width
                            app.viewport.width = app.viewport.width || 'device-width'
                        }
                }

            // CSS > Style
                // Error Handling
                try {
                    !eval(getQueryParameterByName('revealElementsBoundingBox')) || css.style('revealElementsBoundingBoxOptionsStylesheet', ':nth-child(odd) { outline: 1px solid #00F } :nth-child(even) { outline: 1px solid #F00 }')
                }

                catch (error) {
                    (getQueryParameterByName('revealElementsBoundingBox') != 'true') || css.style('revealElementsBoundingBoxOptionsStylesheet', ':nth-child(odd) { outline: 1px solid #00F } :nth-child(even) { outline: 1px solid #F00 }')
                }

            // Document > Favorite Icon
            (len(document.favicon) > 0) || (document.favicon = 'favicon.ico');

        /* DOM Elements */
            // Component
                // <dynamic-text-component>
                    // Initialization > Dynamic Text Component
                    def('DynamicTextComponent', {
                        // Value
                        value: class DynamicTextComponent extends HTMLElement {
                            // Constructor
                            constructor() {
                                // Super
                                super();

                                // Return
                                return registerElement() ? void 0 : createElement('dynamic-text-component', '.dynamic-text')
                            }
                        },

                        // Writable
                        writable: false
                    });

                    // Registration
                    !registerElement() || registerElement('dynamic-text-component', DynamicTextComponent);

                    // On Node Count Change
                    onNodeCountChange(document.documentElement, function DynamicTextComponentModifier() {
                        // Repeat
                        !$$('dynamic-text-component:not(.dynamic-text)', 0) || repeat(index => {
                            // Modification > <dynamic-text-component> > Class
                            $t('dynamic-text-component', index).addClass('dynamic-text')
                        }, $t('dynamic-text-component', 'length'));

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while ($$('dynamic-text-component:not(.dynamic-text)', 0))
                            $$('dynamic-text-component:not(.dynamic-text)', 0).delete()
                    });

            // Element
                // <jumbotron-element>
                    // Initialization > HTML Jumbotron Element
                    def('HTMLJumbotronElement', {
                        // Value
                        value: class HTMLJumbotronElement extends HTMLElement {
                            // Constructor
                            constructor() {
                                // Super
                                super();

                                // Return
                                return registerElement() ? void 0 : createElement('jumbotron-element', '.jumbotron')
                            }
                        },

                        // Writable
                        writable: false
                    });

                    // Registration
                    !registerElement() || registerElement('jumbotron-element', HTMLJumbotronElement);

                    // On Node Count Change
                    onNodeCountChange(document.body, function JumbotronElementModifier() {
                        // Repeat
                        !$$('jumbotron-element:not(.jumbotron)', 0) || repeat(index => {
                            // Modification > <jumbotron-element> > Class
                            $t('jumbotron-element', index).addClass('jumbotron')
                        }, $t('jumbotron-element', 'length'));

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while ($$('jumbotron-element:not(.jumbotron)', 0))
                            $$('jumbotron-element:not(.jumbotron)', 0).delete()
                    });

                // <logo-element>
                    // Initialization > HTML Logo Element
                    def('HTMLLogoElement', {
                        // Value
                        value: class HTMLLogoElement extends HTMLElement {
                            // Constructor
                            constructor() {
                                // Super
                                super();

                                // Modification > Target
                                    // Image
                                    this.def('img', {
                                        // Get
                                        get: function() {
                                            // Return
                                            return this.$t('img', 0)
                                        }
                                    });

                                    // Source
                                    this.def('src', {
                                        // Get
                                        get: function getSrc() {
                                            // Return
                                            return this.attr('src') || this.img.src
                                        },

                                        // Set
                                        set: function setSrc() {
                                            // Modification > ((Target) > Image) > Source
                                            !getType(this.img).hasText(/\belement\b/) || (this.img.src = str(arguments[0]));
                                            this.delAttr('src')
                                        }
                                    });

                                // Return
                                return registerElement() ? void 0 : 'logo-element'.html
                            }
                        },

                        // Writable
                        writable: false
                    });

                    // Registration
                    !registerElement() || registerElement('logo-element', HTMLLogoElement);

                    // On Node Count Change
                    onNodeCountChange(document.documentElement, function LogoElementModifier() {
                        /* Loop
                                [do:while statement]

                            > Repeat
                        */
                        while ($t('logo-element', 0) && !$$('logo-element > img', 0))
                            repeat(index => {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (!$t('logo-element', index).img) {
                                    // Modification > <logo-element>
                                        // Draggable
                                        $t('logo-element', index).draggable = false;

                                        // Inner HTML
                                        $t('logo-element', index).innerHTML = '<img>';

                                        // Image
                                            // Class
                                            $t('logo-element', index).img.addClass('responsive');

                                            // Draggable
                                            $t('logo-element', index).img.draggable = false;

                                            // Source
                                            $t('logo-element', index).img.src = $t('logo-element', index).src
                                }
                            }, len($t('logo-element', 'array')))
                    });

        /* Function */
            // On DOM Ready
            onDOMReady(function updateLapysJSPlugIns() {
                // Function > Main
                function main() {
                    // Insertion
                    LapysJS.debug.addNewElement();

                    //Deletion
                    LapysJS.debug.delOldElement()
                };
                main();
                timeout(main, 3e3)
            })
    }

    else
        /* Execution
                --- NOTE ---
                    @lapys: Prevent compressors and minifiers from redacting the name
                        of the Error.
        */
        eval("throw new (class AppJSScriptError extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,AppJSScriptError)}})('[AppJS] => AppJS requires LapysJS to run.\\nYou can download the library here: `https://github.com/LapysDev/LapysJS`\\r')")
})(window, window.document, typeof global != 'undefined' ? global : null, window.undefined || void 0, typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false }))
