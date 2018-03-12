/* Function > Base Script
        --- NOTE ---
            @lapys:
                - Variables defined in all caps represent constants (except in private/ special cases).

        --- WARN ---
            @lapys:
                - Do not use template strings, defer to standard string concatenation instead.
*/
(function BaseScript(window = window, document = window.document, global = typeof global != 'undefined' ? global : null, undefined = window.undefined || void 0, LapysJS = typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false })) {
    // Polyfill
        // Data
        let _data = new (function Data() {});

    /* {Global Object Test} Logic
            If
                LapysJS is ready.
    */
    if (typeof LapysJS == 'object' && (LapysJS || _data).ready === true) {
        /* Function */
            // Log
                // Initialization > Log
                let _log = log.clone(true);

                // Definition
                def('log', function log() {
                    // Initialization > Arguments
                    let args = [...arguments];

                    // Log
                    _log.apply(global, args);

                    // Return
                    return len(args) > 1 ? args : args[0]
                });

        /* Global Data */
            // Application
                /* Logic
                        [if:else if:else statement]

                        --- NOTE ---
                            @lapys: Configure the 'application' from here.

                    > Modification > Application
                */
                if (getType(app) == 'application-information') {
                    // Author
                    app.author = 'Lapys Dev Team';

                    // Cache Control
                    app.cacheControl = 'cache';

                    // Character Encoding Set
                    app.charset = 'characterSet' in document ? document.characterSet : 'UTF-8';

                    // Copyright
                    app.copyright = 'Lapys Dev Team';

                    // Description
                    app.description = 'LapysJS is a JavaScript library with its independent CSS counterpart designed to simplify JavaScript';

                    // Keywords
                    app.keywords = 'JavaScript Library, Lapys Dev, LapysJS, Simplify JavaScript';

                    // Name
                    app.name = 'LapysJS | Building web frameworks';

                    // Robots
                    app.robots = 'none';

                    // Theme Color
                    app.themeColor = '#0033FF';

                    // Version
                    app.version = LapysJS.version
                }

            // Document
                // Favorite Icon
                    // Initialization > Favorite Icon URL
                    let faviconURL = null;

                    // Check
                    check(function() {
                        // Return
                        return hasProperty('info')
                    }, function() {
                        // LapysJS > Component > Image
                        new LapysJS.component.Image(new (function Object() {
                            // Initialization > (Data, Target)
                            let data = info.dynamicAssetsURL + 'favicon.ico',
                                that = this;

                            // On Error
                            that.onerror = function() {
                                // Update > Favorite Icon URL
                                faviconURL = info.dynamicAssetsURL + 'assets/img/ico/icon.ico'
                            },

                            // On Load
                            that.onload = function() {
                                // Update > Favorite Icon URL
                                faviconURL = data
                            },

                            // Source
                            that.src = data
                        }));

                        // Check
                        check(function() {
                            // Return
                            return faviconURL !== null
                        }, function() {
                            // Modification > Document > Favorite Icon
                            document.favicon = faviconURL
                        })
                    });

                // Title
                document.title = 'LapysJS';

            // Information (Manager)
            def('informationManager', {
                // Value
                value: new (function InformationManager() {
                    // Initialization > (Reset-Set, Target)
                    let rs = true,
                        that = this,
                        _that = that.constructor.prototype;

                    // Function
                        // Import Alternative Resources
                        function importAlternativeResources() {
                            // Target > Log
                            that.log('Importing alternative resource files.');

                            // Initialization > (Data, Metadata, Alpha)
                            let data = location.href,
                                metadata = data.getAfterChar('/', true) || that.homePageFile.name,
                                alpha = that.dynamicAssetsURL;

                            // Function > Update
                            function update() {
                                // Return
                                return decodeURIComponent(arguments[1] ? arguments[0].replace(/css/g, 'js') : arguments[0].replace(/js/g, 'css'))
                            }

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (rs) {
                                // LapysJS > $ > Import
                                    // Calibri Light
                                    LapysJS.$.import('font', {format: 'truetype', name: 'Calibri Light', url: alpha + 'assets/fonts/ttf/calibri-light.ttf'});

                                    // Calibri
                                    LapysJS.$.import('font', {format: 'truetype', name: 'Calibri', url: alpha + 'assets/fonts/ttf/calibri.ttf'});

                                    // Droid Serif
                                    LapysJS.$.import('font', {format: 'truetype', name: 'Droid Serif', url: alpha + 'assets/fonts/ttf/droid-serif.ttf'});

                                    // Open Sans
                                    LapysJS.$.import('font', {format: 'truetype', name: 'Open Sans', url: alpha + 'assets/fonts/ttf/open-sans.ttf'});

                                    // PT Sans
                                    LapysJS.$.import('font', {format: 'truetype', name: 'PT Sans', url: alpha + 'assets/fonts/ttf/pt-sans.ttf'});

                                    // Roboto Mono
                                    LapysJS.$.import('font', {format: 'truetype', name: 'Roboto Mono', url: alpha + 'assets/fonts/ttf/roboto-mono.ttf'});

                                // Update > Reset-Set
                                rs = false
                            }

                            // JavaScript > Source
                                // Document Script
                                $$("script[src*='" + metadata + ".'][src*='.js'", 0) || js.src(false, alpha + 'assets/js/index.js', {type: 'text/javascript'});

                            // CSS > Link
                                // LapysJS Stylesheet
                                $$("link[href*='lapys.'][href*='.css'", 0) || css.link(false, update(LapysJS.script.src), {media: 'all', rel: 'stylesheet', type: 'text/css'});

                                // Base Stylesheet
                                $$("link[href*='" + (that.script.src.getAfterChar('/', true) || 'base').getBeforeChar('.', true) + ".'][href*='.css'", 0) || css.link(false, update(that.script.src), {media: 'all', rel: 'stylesheet', type: 'text/css'});

                                // App JS Stylesheet
                                !LapysJS.perm.vendors.hasElement('AppJS') || css.link(false, update(LapysJS.perm.vendors.appJS.script.src), {media: 'all', rel: 'stylesheet', type: 'text/css'});

                                // Interval JS Stylesheet
                                !LapysJS.perm.vendors.hasElement('IntervalJS') || css.link(false, update(LapysJS.perm.vendors.intervalJS.script.src), {media: 'all', rel: 'stylesheet', type: 'text/css'});

                                // Document Stylesheet
                                    // Check
                                    check(function() {
                                        // Return
                                        return (LapysJS.tmp || _data).message == 'Document Script installed.'
                                    }, function() {
                                        // (...)
                                        $$("link[href*='" + metadata + ".'][href*='.css'", 0) || css.link(false, update(($$("script[src*='" + metadata + ".'][src*='.js'", 0) || LapysJS.tmp.script).src), {media: 'all', rel: 'stylesheet', type: 'text/css'})
                                    })
                        }

                    // Initialization
                        // Alternative Resources
                        let ALTERNATIVE_RESOURCES = false,
                            // (...) Object
                            alternativeResourcesObject = onPropertyAccess({
                                // Set
                                set: function onpropertychange() {
                                    // Import Alternative Resources
                                    !arguments[0] || importAlternativeResources();

                                    // Update > Alternative Resources
                                    ALTERNATIVE_RESOURCES = arguments[0]
                                }
                            }, function onpropertyaccess() {
                                /*
                                        --- NOTE ---
                                            @lapys: This function is detecting if the Alternative Resources Object
                                                has been accessed.
                                */
                            }),

                        // Dynamic Assets URL
                        DYNAMIC_ASSETS_URL = (function() {
                            // Initialization > (Data, Metadata)
                            let data = '',
                                metadata = location.href;

                            // Function > Test
                            function test() {
                                // Return
                                return arguments[0].getBeforeChar('/', true)
                            }

                            /* Logic
                                    [if:else if:else statement]

                                > Update > Data
                            */
                                // {Home}
                                if (test(metadata).endsWith('LapysJS'))
                                    data = '';

                                // {Internal Page}
                                else if (test(metadata).endsWith('pages'))
                                    data = '../';

                            // Return
                            return data
                        })(),

                        // Home Page File
                        HOME_PAGE_FILE = new File([str(document.doctype) + $1.outerHTML], 'index', {type: 'text/html'});
                            // On DOM Ready
                            onDOMReady(function() {
                                // Update > Home Page File
                                HOME_PAGE_FILE = new File([str(document.doctype) + $1.outerHTML], 'index', {type: 'text/html'})
                            });

                    // Modification > Target
                        // Alternative Resources
                        _that.def('alternativeResources', {
                            // Get
                            get: function getAlternativeResources() {
                                // Return
                                return ALTERNATIVE_RESOURCES
                            },

                            // Set
                            set: function setAlternativeResources() {
                                // Return
                                return alternativeResourcesObject.set(arguments[0])
                            }
                        });

                        // Debugger
                        _that.def('debugger', {
                            // Value
                            value: new (function Debugger() {
                                // Initialization > Target
                                let that = this,
                                    _that = [that.constructor.prototype, global];

                                // Modification > Target
                                    // Define
                                    hasProperty('define') || repeat((index, limit, data, key, value) => {
                                        // Modification > Value > Define
                                        value.def('define', {
                                            // Value
                                            value: function define() {
                                                // Initialization > Arguments
                                                let args = [...arguments];

                                                // Return
                                                return eval((function() {
                                                    // Initialization > Data
                                                    let data = 'new LapysJSFunction(';

                                                    /* Loop
                                                            Index Arguments.

                                                        > Update > Data
                                                    */
                                                    for (let i in args)
                                                        data += 'args[' + i + '], ';

                                                    // Return
                                                    return data + ')'
                                                })())
                                            }
                                        })
                                    }, _that);

                                    // False
                                    hasProperty('False') || repeat((index, limit, data, key, value) => {
                                        // Modification > Value > False
                                        value.def('False', {value: bool()})
                                    }, _that);

                                    // True
                                    hasProperty('True') || repeat((index, limit, data, key, value) => {
                                        // Modification > Value > True
                                        value.def('True', {value: bool(true)})
                                    }, _that)
                            })
                        });

                        // Dynamic Assets URL
                        _that.def('dynamicAssetsURL', {
                            // Get
                            get: function dynamicAssetsURL() {
                                // Return
                                return DYNAMIC_ASSETS_URL
                            }
                        });

                        // Home Page File
                        _that.def('homePageFile', {
                            // Get
                            get: function homePageFile() {
                                // Return
                                return HOME_PAGE_FILE
                            }
                        });

                        // Log
                        _that.def('log', {
                            // Value
                            value: function Log() {
                                // Initialization > Data
                                let data = createElement('div', '', '[Information Manager] => ' + str(arguments[0])).textContent;

                                // Log
                                log.apply(console, browser.ie ? [data] : ['%c' + data, 'font-style: oblique'])
                            }
                        });

                        // Navigation Links
                        _that.def('navigationLinks', {
                            // Value
                            value: new (function NavigationLinks() {
                                /* Initialization > (Data, Metadata, Alpha, Target)
                                        --- NOTE ---
                                            @lapys: The `target` property for objects
                                                in Alpha default to `_self`, not `undefined`.
                                */
                                let data = _that.dynamicAssetsURL,
                                    metadata = _that.homePageFile,
                                    alpha = [
                                        // Home
                                        {
                                            href: data + metadata.name + '.' + metadata.type.getAfterChar('/'),
                                            name: 'home', target: '_self', text: 'LapysJS',
                                            title: 'LapysJS | Home'
                                        },

                                        // JavaScript
                                        {
                                            href: data + 'assets/pages/javascript.html',
                                            name: 'javascript', text: 'JavaScript',
                                            title: 'Our JavaScript Compendium'
                                        }
                                    ],
                                    that = this;

                                /* Loop
                                        Index Alpha.

                                    > Modification > Target > ([Loop Counter], [String])
                                */
                                for (let i in alpha) {
                                    (getType(alpha[i]) != 'object') || that.def([i, alpha[i].name], {
                                        // Value
                                        value: Object.assign(new (function NavigationLink() {}), alpha[i])
                                    });
                                        // Target
                                        'target' in that[i] || (that[i].target = '_self');
                                        'target' in that[alpha[i].name] || (that[alpha[i].name].target = '_self')
                                }

                                // Modification > Target > To HTML Syntax
                                that.def('toHTMLSyntax', {
                                    // Value
                                    value: function toHTMLSyntax() {
                                        // Initialization > Data
                                        let data = '';

                                        /* Loop
                                                Index Alpha.
                                        */
                                        for (let i of alpha) {
                                            // Update > Data
                                            data += '<a';

                                            /* Loop
                                                    [for statement]
                                            */
                                            for (let j in i) {
                                                // Initialization > Metadata
                                                let metadata = str(i[j]);

                                                // Update > Data
                                                !(j != 'name' && j != 'text') || (data += ' ' + j.replace(/\btitle\b/, 'data-title') + "=" + (metadata.hasText(' ') ? "'" + metadata + "'" : metadata));
                                            }

                                            // Update > Data
                                            'target' in alpha || (data += " target=_self");
                                            data += '>' + ('text' in i ? str(i.text) : '') + '</a>\n'
                                        }

                                        // Return
                                        return data.trim()
                                    }
                                })
                            })
                        });
                            // Definition
                            _that.def('nav', {
                                // Get
                                get: function navigationLinks() {
                                    // Return
                                    return _that.navigationLinks
                                }
                            });

                        // Script
                        _that.def('script', {
                            // Value
                            value: document.currentScript || $$("script[src*='base.'][src*='.js'", 0) || document.scripts.lastElement
                        })
                })
            });
                // Definition
                def('info', {
                    // Get
                    get: function getInformationManager() {
                        // Return
                        return informationManager
                    }
                });

                // Modification( > Information Manager)
                    /* Alternative Resources
                            --- NOTE ---
                                @lapys:
                                    Set to `false` to prevent this script from requesting and/ or importing assumed resource files,
                                    set to `true` otherwise.
                    */
                    info.alternativeResources = true;

        /* Functions */
            // Careful Sourcing
            let carefulSourcing = function carefulSourcing(event) {
                // Initialization > (Data, Metadata)
                let data = this.attr('data-href'),
                    metadata = this.hasAttr('href-data') ? this.attr('href-data') : '';

                // LapysJS > $ > Request
                new LapysJS.$.request('GET', data, {
                    // On Load
                    onload: function onload(event) {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!str(this.status).startsWith('40')) {
                            // Information Manager > Log
                            info.log('Status: "' + this.statusText + '"');

                            // {Redirect} Click
                            click(createElement('a', '', '', {href: ('target' in event ? event.target : event).responseURL + metadata}))
                        }
                    },

                    // On Load End
                    onloadend: function onloadend(event) {
                        // Information Manager > Log
                        (this.status != 404) || info.log('Status: "' + this.statusText + '"')
                    }
                })
            };

            // On DOM Ready
            onDOMReady(function() {
                /* Special Information here */
            }, 3e3);

            // {Remove Redundant Nodes} On Node Added
            onNodeAdded($1, function removeRedundantNodes() {
                // Function
                    // Remove All HTML Script Element
                    (function removeAllHTMLScriptElement() {
                        // Repeat
                        repeat((index, limit, data, key, value) => {
                            // Deletion
                            value.delete()
                        }, $$('script', 'array'))
                    })();

                    // Remove All Comment
                    (function removeAllComment() {
                        // Repeat
                        repeat((index, limit, data, key, value) => {
                            // Repeat
                            repeat((index, limit, data, key, value) => {
                                // Deletion
                                !value || (value.nodeType != 8) || value.delete()
                            }, value.childNodes)
                        }, $$('*', 'array'))
                    })()
            });

            // {Careful Links} On Node Change
            onNodeChange($1, function carefulLinks() {
                // Repeat
                repeat((index, limit, data, key, value) => {
                    // Event > Value > Click
                    value.hasAttr('data-href') || value.delEvent('click', carefulSourcing)
                }, $t('a', 'array'));

                repeat((index, limit, data, key, value) => {
                    // Event > Value > Click
                    value.setEvent('click', carefulSourcing)
                }, $$('a[data-href', 'array'))
            })
    }
})(window, window.document, typeof global != 'undefined' ? global : null, window.undefined || void 0, typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false }))
