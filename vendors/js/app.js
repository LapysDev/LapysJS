/** ([Function] > {LapysJS Script})
    @author: Lapys Dev Team
    @description: AppJS is a JavaScript framework designed to simplify the code process of LapysJS and make projects feel more like mobile applications (.a.k.a.: Progressive Web Applications).
    @version: 0.0.1
    @url: https://github.com/LapysDev/App-JS

        --- NOTE ---
            @lapys:
                - Variables defined in all caps represent constants (except in private/ special cases).

        --- WARN ---
            @lapys:
                - Do not use template strings, defer to standard string concatenation instead.
*/
(function AppJSScript(window = window, document = window.document, global = typeof global != 'undefined' ? global : null, undefined = window.undefined || void 0, LapysJS = typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false })) {
    // Polyfill
        // Data
        let _data = new (function Data() {});

    /* {Global Object Test} Logic
            If
                LapysJS is ready.
    */
    if (typeof LapysJS == 'object' && (LapysJS || _data).ready === true && !(LapysJS || _data).vendors.hasElement('AppJS')) {
        /* Global Data */
            // App JS Script Total Processing Time
            var AppJSScriptTotalProcessingTime = performance.now();

            // Application
                /* Logic
                        [if:else if:else statement]

                        --- NOTE ---
                            @lapys: Configure the 'application' from here.

                    > Modification > Application
                */
                if (getType(app) == 'application-information') {
                    /* Author
                            --- NOTE ---
                                @lapys: Creators of the app.
                    */
                    app.author = 'Lapys Dev Team';

                    /* Cache Control
                            --- NOTE ---
                                @lapys: Determine if information and requests to the app will be cached (or not).
                    */
                    app.cacheControl = 'cache';

                    /* Character Encoding Set
                            --- NOTE ---
                                @lapys: Character encoding software used in the application.
                    */
                    app.charset = 'characterSet' in document ? document.characterSet : 'UTF-8';

                    /* Copyright
                            --- NOTE ---
                                @lapys: Owners of the app.
                    */
                    app.copyright = 'Lapys Dev Team';

                    /* Description
                            --- NOTE ---
                                @lapys: App description here.
                    */
                    app.description = 'An application made with LapysJS';

                    /* Keywords
                            --- NOTE ---
                                @lapys: Search-engine optimization settings.
                                    Keywords are comma-separated.
                    */
                    app.keywords = 'Application, app';

                    /* Name
                            --- NOTE ---
                                @lapys: Name of the application here.
                    */
                    app.name = document.title || 'LapysJS Application';

                    /* Robots
                            --- NOTE ---
                                @lapys: Determine how robots will track (or not track) the project app.
                    */
                    app.robots = 'none';

                    /* Theme Color
                            --- NOTE ---
                                @lapys: Activity/ viewport/ window theme color on supporting devices.
                    */
                    app.themeColor = 'rgba(0, 0, 0, 0)';

                    /* Viewport
                            --- NOTE ---
                                @lapys: Revoke these settings via the syntax
                                    `!$$('meta[name=viewport', 0) || $$('meta[name=viewport', 0).delete()` or
                                    by tweaking some of the existing default values.
                    */
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!$$('meta[name=viewport', 0)) {
                            // Height
                            app.height = app.height || 'device-height';

                            // Initial Scale
                            app.viewport.initialScale = app.viewport.initialScale || 1;

                            // Maximum Scale
                            app.viewport.maximumScale = app.viewport.maximumScale || 2;

                            // Minimal UI
                            app.minimalUI = app.minimalUI || true;

                            // Minimum Scale
                            app.viewport.minimumScale = app.viewport.minimumScale || .1;

                            // Target Density D.P.I.
                            app.viewport.targetDensityDPI = app.viewport.targetDensityDPI || 96;

                            // User Scalable
                            app.userScalable = app.userScalable || true;

                            // Width
                            app.width = app.width || 'device-width'
                        }

                    /* Version
                            --- NOTE ---
                                @lapys: Development version of the app.
                    */
                    app.version = '1'
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
            len(document.favicon) || (document.favicon = 'favicon.ico');

            // LapysJS
                // Permanent Data > Vendors
                LapysJS.perm.vendors.addElement('AppJS');
                    // App JS
                    LapysJS.perm.vendors.def('appJS', {
                        // Value
                        value: new (class AppJS extends (class AppJS {}) {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Initialization > Target
                                let that = this,
                                    _that = that.constructor.prototype;

                                // Modification > Target
                                    // Permanent Data
                                    _that.def('permanentData', {
                                        // Value
                                        value: new (function AppJSScriptPermanentData() {
                                            // Initialization > Target
                                            let that = this,
                                                _that = that.constructor.prototype;

                                            // Modification > Target
                                                // Fallback
                                                _that.def('fallback', {
                                                    // Value
                                                    value: new (function AppJSScriptFallbackObject() {
                                                        // Initialization > Target
                                                        let that = this,
                                                            _that = that.constructor.prototype;

                                                        // Modification > Target
                                                            // Console
                                                            _that.def('console', {
                                                                // Value
                                                                value: (function() {
                                                                    // Initialization > Metadata
                                                                    let metadata = {};

                                                                    // Repeat
                                                                    repeat((index, limit, data, key, value) => {
                                                                        // Modification > Metadata > [Key]
                                                                        metadata[key] = value.clone(!0)
                                                                    }, console);

                                                                    // Return
                                                                    return metadata
                                                                })()
                                                            })
                                                    })
                                                })
                                        })
                                    });
                                        // Definition
                                        _that.def('perm', {
                                            // Get
                                            get: function permanentData() {
                                                // Return
                                                return _that.permanentData
                                            }
                                        });

                                    // Silence
                                    _that.def('silence', {
                                        // Value
                                        value: function silence() {
                                            // Initialization > (Arguments, Arguments Set, Data)
                                            let args = [...arguments],
                                                argsSet = args.slice(1),
                                                data = String(args[0]).trim(),
                                                _data = _that.silence;

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (args.length && data.startsWith('/'))
                                                /* Logic
                                                        [switch:case:default statement]

                                                    > [Function]
                                                */
                                                switch (data.slice(len('/'))) {
                                                    // Console
                                                    case 'console':
                                                        _data.console.apply(_data, argsSet)
                                                }
                                        }
                                    });
                                        // Console
                                        _that.silence.def('console', {
                                            // Value
                                            value: function Console() {
                                                // Initialization > Metadata
                                                let metadata = bool(arguments[0]),
                                                    _metadata = arguments.length;

                                                // Repeat
                                                metadata || !_metadata ? repeat((index, limit, data, key, value) => {
                                                    // Update > Console > [Value]
                                                    console[value] = func()
                                                }, console.keys()) : repeat((index, limit, data, key, value) => {
                                                    // Update > Console > [Value]
                                                    console[value] = _that.perm.fallback.console[value]
                                                }, console.keys());

                                                // Return
                                                return console
                                            }
                                        });

                                    // Screen Cover
                                    _that.def('screenCover', {
                                        // Get
                                        get: function screenCover() {
                                            // Return
                                            return $i('appJSScreenCover', 0)
                                        }
                                    });

                                    // Script
                                    _that.def('script', {
                                        // Value
                                        value: document.currentScript || $$("script[src*='app.'][src*='.js'", 0) || document.scripts.lastElement
                                    });

                                    // Temporary Data
                                    _that.def('temporaryData', void 0);
                                        // Interval
                                        interval(function() {
                                            // Update > Temporary Data > Temporary Data
                                            !_that.tmp || (_that.tmp = void 0)
                                        }, 6e4);

                                        // Definition
                                        _that.def('tmp', {
                                            // Get
                                            get: function getTemporaryData() {
                                                // Return
                                                return _that.temporaryData
                                            },

                                            // Set
                                            set: function setTemporaryData() {
                                                // Return
                                                return _that.temporaryData = arguments[0]
                                            }
                                        });

                                    // Tick Speed
                                    _that.def('tickSpeed', {value: 1e3})
                            }
                        })
                    })

        /* DOM Elements */
            // <jumbotron-element>
                // Registration
                !registerElement() || registerElement('jumbotron-element', def('HTMLJumbotronElement', {
                    // Value
                    value: class HTMLJumbotronElement extends HTMLElement {
                        // Constructor
                        constructor() {
                            // Super
                            super();

                            // Return
                            return registerElement() ? void 0 : createElement('jumbotron-element', '.jumbotron')
                        }

                        // Connected Callback
                        connectedCallback() {
                            // Return
                            return this.addClass('jumbotron')
                        }
                    }
                }));
                    // On Node Added
                    onNodeAdded($1, function() {
                        // {Compatibility Correction} Repeat
                        repeat(function compatibilityCorrection(index, limit, data, key, value) {
                            // Modification > Value > Class
                            value.addClass('jumbotron')
                        }, $$('jumbotron-element:not(.jumbotron)', 'array'))
                    });

            // <screen-cover>
                // Registration
                !registerElement() || registerElement('screen-cover', def('HTMLScreenCoverElement', {
                    // Value
                    value: class HTMLScreenCoverElement extends HTMLElement {
                        // Constructor
                        constructor() {
                            // Super
                            super();

                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = bool(args[0]),
                                that = this;

                            // Timeout
                            !len(args) || timeout(function() {
                                // Modification > Target > ID
                                !data || (that.id = 'appJSScreenCover')
                            });

                            // Return
                            return registerElement() ? void 0 : 'screen-cover'.html
                        }
                    }
                }));
                    // On DOM Ready
                    onDOMReady(function() {
                        // Initialization > (Data, Metadata)
                        let data = document.documentElement,
                            metadata = new HTMLScreenCoverElement(true);

                        // Insertion
                        $i('appJSScreenCover') || data.insertChild('begin', metadata);

                        // Function
                            // Check
                            !$i('appJSScreenCover') || check(function() {
                                // Return
                                return data._$('#appJSScreenCover')
                            }, '', function() {
                                // Insertion
                                (data = document.documentElement).insertChild('begin', $i('appJSScreenCover'))
                            });

                        // Modification > Metadata > Hidden
                        metadata.hidden = true
                    }, 0);

        // Console > (...)
        console.group('AppJS | LapysJS.vendors.appJS');
            browser.ie ? console.info('AppJS successfully installed.') : console.info('%cAppJS successfully installed.', 'font-style: oblique');
            console.log('AppJS.totalProcessingTime', LapysJS.vendors.appJS.constructor.prototype.def('totalProcessingTime', {
                // Value
                value: performance.now() - AppJSScriptTotalProcessingTime
            }));
        console.groupEnd()
    }

    else if ((LapysJS || _data).vendors.hasElement('AppJS'))
        /* Execution
                --- NOTE ---
                    @lapys: Prevent compressors and minifiers from redacting the name
                        of the Error.
        */
        eval("throw new (class AppJSScriptError extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,AppJSScriptError)}})('AppJS has already been executed.')");


    else
        /* Execution
                --- NOTE ---
                    @lapys: Prevent compressors and minifiers from redacting the name
                        of the Error.
        */
        eval("throw new (class AppJSScriptError extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,AppJSScriptError)}})('AppJS can not be executed without LapysJS.\n\thttps://www.lapysjs.com')")
})(window, window.document, typeof global != 'undefined' ? global : null, window.undefined || void 0, typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false }))
