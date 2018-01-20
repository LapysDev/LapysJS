/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    /* Global Data */
        /* String */
            // Parse HTML Entities to Text
            (getType(String.prototype.parseHTMLEntitiesToText) == 'function') || String.prototype.def('parseHTMLEntitiesToText', {
                // Value
                value: function parseHTMLEntitiesToText() {
                    // Return
                    return createElement('span', '', this).textContent
                },

                // Writable
                writable: false
            });

        /* Processing Load Time */
        def('PROCESSING_LOAD_TIME', 0);
            /* {Increment Processing Load Time} Check
                    --- NOTE ---
                        @lapys: Increment the Load Time of Processing
                            until the Document is completely loaded.
            */
            check(function incrementPROCESSING_LOAD_TIME() {
                // Update > Processing Load Time
                PROCESSING_LOAD_TIME += 1;

                // Return
                return document.readyState == 'complete'
            });

        /* Allow Alternative Resource Files */
        def('ALLOW_ALTERNATIVE_RESOURCE_FILES', {
            /* Value
                    --- NOTE ---
                        @lapys: Set to 'true' to have the current script add assumed files to the project,
                            set to 'false' otherwise.
            */
            value: true,

            // Writable
            writable: false
        });

        /* Application */
            // Modification > Application
                // Author
                app.author = 'Lapys Dev Team';

                // Cache Control
                app.cacheControl = 'cache';

                // Character Set
                app.charset = document.characterSet || 'UTF-8';

                // Copyright
                app.copyright = 'Lapys Dev Team';

                // Description
                app.description = 'Client-Side Web Library';

                // Keywords
                app.keywords = 'Lapys, Lapys Dev, LapysJS';

                // Name
                app.name = 'LapysJS';

                // Robots
                app.robots = 'none';

                // Theme Color
                app.themeColor = '#0023FF';

                // Viewport
                    // Height
                    app.viewport.height = 'device-height';

                    // Initial Scale
                    app.viewport.initialScale = 1;

                    // Maximum Scale
                    check(function() { return !!window.num }, function() { app.viewport.maximumScale = num(app.viewport.initialScale) * 2 });

                    // Minimal U.I.
                    app.viewport.minimalUI = true;

                    // Minimum Scale
                    check(function() { return !!window.num }, function() { app.viewport.minimumScale = num(app.viewport.initialScale) / 2 });

                    // Target Density D.P.I.
                    app.viewport.targetDensityDPI = 96;

                    // User Scalable
                    app.viewport.userScalable = true;

                    // Width
                    app.viewport.width = 'device-width';

        /* Minify Asset Files */
        def('MINIFY_ASSET_FILES', {
            /* Value
                    --- NOTE ---
                        @lapys: Set to 'true' to use the minified CSS and JS asset files,
                            set to 'false' to use CSS and JS asset files as they are.
            */
            value: false,

            // Writable
            writable: false
        });

        /* Reveal Elements Bounding Box */
        def('REVEAL_ELEMENTS_BOUNDING_BOX', {
            /* Value
                    --- NOTE ---
                        @lapys: Set to 'true' to display all elements` bounding boxes through CSS outlines,
                            set to 'false' otherwise.
            */
            value: (function() {
                /* Logic
                        [switch:case:default statement]

                    > Return
                */
                switch (getQueryParameterByName('revealElementsBoundingBox')) {
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
                        return false
                }

                // Return
                return false
            })(),

            // Writable
            writable: false
        });

        /* CSS */
            // Link
                // LapysJS Stylesheet
                !ALLOW_ALTERNATIVE_RESOURCE_FILES || css.link('LapysJSStylesheet', {href: decodeURIComponent(LapysJS.script.src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

                // Base Stylesheet
                !ALLOW_ALTERNATIVE_RESOURCE_FILES || css.link('baseStylesheet', {href: decodeURIComponent((document.currentScript || $$(`script[src*='base.'][src*='.js']`) || $$('script', $$('script', '~length'))).src.replace(/js/g, 'css')).replace(/(\.css)([^(\.css)]*)$/, !!MINIFY_ASSET_FILES ? '.min$1' : '$&'), media: 'all', rel: 'stylesheet', type: 'text/css'});

                // Documents Stylesheet
                !ALLOW_ALTERNATIVE_RESOURCE_FILES || css.link('docsStylesheet', {href: decodeURIComponent($$('link[data-id=baseStylesheet').href.replace(/base./g, 'docs.')).replace(/(\.css)([^(\.css)]*)$/, !!MINIFY_ASSET_FILES ? '.min$1' : '$&'), media: 'all', rel: 'stylesheet', type: 'text/css'})

                // Document Stylesheet
                !ALLOW_ALTERNATIVE_RESOURCE_FILES || css.link('documentStylesheet', {href: decodeURIComponent($$('link[data-id=baseStylesheet').href.replace(/base./g, (file.name || 'index') + '.')).replace(/(\.css)([^(\.css)]*)$/, !!MINIFY_ASSET_FILES ? '.min$1' : '$&'), media: 'all', rel: 'stylesheet', type: 'text/css'});

            // Style
                // Reveal Elements Bounding Box
                !REVEAL_ELEMENTS_BOUNDING_BOX || css.style('revealElementsBoundingBoxOptionsStylesheet', ':nth-child(odd) { outline: 1px solid blue } :nth-child(even) { outline: 1px solid red }');

        /* Dynamic Assets URL */
        def('DYNAMIC_ASSETS_URL', {
            // Value
            value: (function() {
                // Initialization > Data
                let data = '';

                /* Logic
                        [if:else if:else statement]

                    > Update > Data
                */
                if (location.href.hasText('LapysJS/pages/'))
                    data = `../${data}`;

                // Return
                return data
            })(),

            // Writable
            writable: false
        });

        /* Document */
            // Favorite Icon
            !ALLOW_ALTERNATIVE_RESOURCE_FILES || (document.favicon = `${DYNAMIC_ASSETS_URL}assets/img/ico/icon.ico`);

            // Title
            document.title = app.name || 'LapysJS';

        /* Epsilon */
        def('EPSILON', {
            // Value
            value: Number.EPSILON,

            // Writable
            writable: false
        });

        /* JavaScript */
            // Source
                /* Documents Script
                        --- NOTE ---
                            @lapys:
                                While the Base Script is meant for consistency across all
                                forms of projects,

                                the Docs (Documents) Scripts is meant for additional functions
                                specific to the current project.
                */
                !ALLOW_ALTERNATIVE_RESOURCE_FILES || js.src('docsScript', {src: decodeURIComponent((document.currentScript || $$(`script[src*='base.'][src*='.js']`) || $$('script', $$('script', '~length'))).src.replace(/base./g, 'docs.')).replace(/(\.js)([^(\.js)]*)$/, !!MINIFY_ASSET_FILES ? '.min$1' : '$&'), type: 'text/javascript'});

                // Document Script
                !ALLOW_ALTERNATIVE_RESOURCE_FILES || js.src('documentScript', {src: decodeURIComponent((document.currentScript || $$(`script[src*='base.'][src*='.js']`) || $$('script', $$('script', '~length'))).src.replace(/base./g, (file.name || 'index') + '.')).replace(/(\.js)([^(\.js)]*)$/, !!MINIFY_ASSET_FILES ? '.min$1' : '$&'), type: 'text/javascript'});

        /* LapysJS */
            // $
                // Import
                    // Font
                        // Calibri Light
                        LapysJS.$.import('font', {format: 'truetype', name: 'Calibri Light', url: `${DYNAMIC_ASSETS_URL}assets/fonts/calibri-light.ttf`});

                        // Calibri
                        LapysJS.$.import('font', {format: 'truetype', name: 'Calibri', url: `${DYNAMIC_ASSETS_URL}assets/fonts/calibri.ttf`});

                        // Droid Serif
                        LapysJS.$.import('font', {format: 'truetype', name: 'Droid Serif', url: `${DYNAMIC_ASSETS_URL}assets/fonts/droid-serif.ttf`});

                        // Open Sans
                        LapysJS.$.import('font', {format: 'truetype', name: 'Open Sans', url: `${DYNAMIC_ASSETS_URL}assets/fonts/open-sans.ttf`});

                        // Roboto Mono
                        LapysJS.$.import('font', {format: 'truetype', name: 'Roboto Mono', url: `${DYNAMIC_ASSETS_URL}assets/fonts/roboto-mono.ttf`});

                        // The Woodlands
                        LapysJS.$.import('font', {format: 'truetype', name: 'The Woodlands', url: `${DYNAMIC_ASSETS_URL}assets/fonts/the-woodlands.ttf`});

                        // Trajan Pro
                        LapysJS.$.import('font', {name: 'Trajan Pro', url: `${DYNAMIC_ASSETS_URL}assets/fonts/trajan-pro.otf`});

        /* Maximum Safe Integer */
        def('MAX_SAFE_INT', {
            // Value
            value: Number.MAX_SAFE_INTEGER,

            // Writable
            writable: false
        });

        /* Maximum Number */
        def('MAX_NUM', {
            // Value
            value: Number.MAX_VALUE,

            // Writable
            writable: false
        });

        /* Minimum Safe Integer */
        def('MIN_SAFE_INT', {
            // Value
            value: Number.MIN_SAFE_INTEGER,

            // Writable
            writable: false
        });

        /* Minimum Number */
        def('MIN_NUM', {
            // Value
            value: Number.MIN_VALUE,

            // Writable
            writable: false
        });

        /* Navigation Links */
        def('NAVIGATION_LINKS', {
            // Value
            value: new (function NavigationLinksArray() {
                // Initialization > Data
                let data = [
                    // Get Started
                    new (function NavigationLink() {
                        // Modification > Target > (...)
                        this.href = `${DYNAMIC_ASSETS_URL}pages/get-started.html`;
                        this.target = '_self';
                        this.title = 'Let&rsquo;s begin shall we?'.parseHTMLEntitiesToText();
                        this.textContent = 'Get Started'
                    }),

                    // GitHub
                    new (function NavigationLink() {
                        // Modification > Target > (...)
                        this.href = 'https://github.com/LapysDev/LapysJS';
                        this.target = '_blank';
                        this.title = 'See how the library&rsquo;s doing.'.parseHTMLEntitiesToText();
                        this.textContent = 'GitHub'
                    })
                ];

                /* Loop
                        Index Data.

                    > Modification > Target > [Data]
                */
                for (let i = 0; i < len(data); i += 1)
                    this.def(i, {
                        // Value
                        value: data[i],

                        // Writable
                        writable: false
                    });

                // Modification > Target > Length
                this.def('length', {
                    // Value
                    value: len(data),

                    // Writable
                    writable: false
                })
            }),

            // Writable
            writable: false
        });

        /* Number */
            // Percent
            (getType(Number.prototype.perc) == 'function') || Number.prototype.def('perc', {
                // Value
                value: function percent() {
                    // Return
                    return getType(this) == 'number' ? this * (arguments[0] / 100) : arguments[0] / 100
                },

                // Writable
                writable: false
            });

        /* Percent */
        def('perc', {
            // Value
            value: function percent() {
                // Return
                return getType(this) == 'number' ? this * (arguments[0] / 100) : arguments[0] / 100
            },

            // Writable
            writable: false
        });

        /* Supports Web GL */
        def('SUPPORTS_WEBGL', {
            // Get
            get: function SUPPORTS_WEBGL() {
                // Return
                return ('canvas'.html.getContext('webgl') || 'canvas'.html.getContext('experimental-webgl')) && ('canvas'.html.getContext('webgl') || 'canvas'.html.getContext('experimental-webgl')) instanceof window.WebGLRenderingContext
            }
        });

    /* Classes */
        /* HTML Access Value Element */
        def('HTMLAccessValueElement', {
            // Value
            value: class HTMLAccessValueElement extends HTMLElement {
                // Constructor
                constructor() {
                    // Super
                    !registerElement() || super();

                    // Return
                    return registerElement() ? void 0 : createElement('access-value')
                }
            }
        });

        /* HTML Accordion Component */
        def('HTMLAccordionComponent', {
            // Value
            value: class HTMLAccordionComponent extends HTMLElement {
                // Constructor
                constructor() {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (registerElement()) {
                        // Super
                        super();

                        // Initialization > Target
                        let that = this;

                        // Timeout
                        timeout(function() {
                            // Modification > Target > Class
                            that.addClass('accordion')
                        })
                    }

                    // Return
                    return registerElement() ? void 0 : createElement('accordion-component', '.accordion[data-event-type=click')
                };

                // Connected Callback
                connectedCallback() {
                    // Modification > Target > Data Event Type
                    this.attr('data-event-type', 'click')
                }
            },

            // Writable
            writable: false
        });

        /* HTML Carousel Component */
        def('HTMLCarouselComponent', {
            // Value
            value: class HTMLCarouselComponent extends HTMLElement {
                // Constructor
                constructor() {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (registerElement()) {
                        // Super
                        super();

                        // Initialization > Target
                        let that = this;

                        // Timeout
                        timeout(function() {
                            // Modification > Target > Class
                            that.addClass('carousel')
                        })
                    }

                    // Return
                    return registerElement() ? void 0 : createElement('carousel-component', '.carousel[data-buttons][data-indicators')
                };

                // Connected Callback
                connectedCallback() {
                    // Modification > Target
                        // Data Buttons
                        this.setAttr('data-buttons');

                        // Data Indicators
                        this.setAttr('data-indicators')
                }
            },

            // Writable
            writable: false
        });

        /* HTML Dropdown Component */
        def('HTMLDropdownComponent', {
            // Value
            value: class HTMLDropdownComponent extends HTMLElement {
                /* Constructor
                        --- NOTE ---
                            @lapys: Is called when the 'new' operator is used
                                with the class.
                */
                constructor() {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (registerElement()) {
                        // Super
                        super();

                        // Initialization > Target
                        let that = this;

                        // Timeout
                        timeout(function() {
                            // Modification > Target > Class
                            that.addClass('dropdown')
                        })
                    }

                    // Return
                    return registerElement() ? void 0 : createElement('dropdown-component', '.dropdown[data-event-type=click')
                };

                /* Connected Callback
                        --- NOTE ---
                            @lapys: Is called when an instance of the class
                                is inserted in the DOM.
                */
                connectedCallback() {
                    // Modification > Target > Data Event Type
                    this.attr('data-event-type', 'click')
                }
            },

            // Writable
            writable: false
        });

        /* HTML DynamicText Component */
        def('HTMLDynamicTextComponent', {
            // Value
            value: class HTMLDynamicTextComponent extends HTMLElement {
                // Constructor
                constructor() {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (registerElement()) {
                        // Super
                        super();

                        // Initialization > Target
                        let that = this;

                        // Timeout
                        timeout(function() {
                            // Modification > Target > Class
                            that.addClass('dynamic-text')
                        })
                    }

                    // Return
                    return registerElement() ? void 0 : createElement('dynamic-text-component', '.dynamic-text')
                };

                // Connected Callback
                connectedCallback() {
                    // Modification > Target
                        // Data Text Function Separator
                        this.attr('data-text-function-separator', this.attr('data-text-function-separator') || ';');

                        // Data Text Separator
                        this.attr('data-text-separator', this.attr('data-text-separator') || ',')
                }
            },

            // Writable
            writable: false
        });

        /* HTML Jumbotron Element */
        def('HTMLJumbotronElement', {
            // Value
            value: class HTMLJumbotronElement extends HTMLElement {
                // Constructor
                constructor() {
                    // Initialization > Data
                    let result = registerElement() ? 'jumbotron-element' : createElement('jumbotron-element', '.jumbotron');

                    /* Logic
                            [if:else if:else statement]
                    */
                    if (registerElement()) {
                        // Super
                        super();

                        // Initialization > Target
                        let that = this;

                        // Timeout
                        timeout(function() {
                            // Modification > Target
                                // Class
                                that.addClass('jumbotron');

                                // Sections
                                (getType(that.sections) == 'array') || that.def('sections', {
                                    // Get
                                    get: function sections() {
                                        // Initialization > (Data, Metadata, Target)
                                        let data = [...this.children],
                                            metadata = [],
                                            that = this;

                                        /* Loop
                                                Index Data.

                                            > Update > Metadata
                                        */
                                        for (let i = 0; i < len(data); i += 1) {
                                            (data[i] != this.$$('[data-id=bottomSection', 0)) || metadata.push(this.$$('[data-id=bottomSection', 0));
                                            (data[i] != this.$$('[data-id=midSection', 0)) || metadata.push(this.$$('[data-id=midSection', 0));
                                            (data[i] != this.$$('[data-id=topSection', 0)) || metadata.push(this.$$('[data-id=topSection', 0))
                                        }

                                        // Modification > Metadata
                                            // Bottom
                                            metadata.def('bottom', {
                                                // Get
                                                get: function bottom() {
                                                    // Return
                                                    return metadata[metadata.indexOf(that.$$('[data-id=bottomSection', 0))] || null
                                                }
                                            });

                                            // Mid
                                            metadata.def('mid', {
                                                // Get
                                                get: function mid() {
                                                    // Return
                                                    return metadata[metadata.indexOf(that.$$('[data-id=midSection', 0))] || null
                                                }
                                            });

                                            // Top
                                            metadata.def('top', {
                                                // Get
                                                get: function top() {
                                                    // Return
                                                    return metadata[metadata.indexOf(that.$$('[data-id=topSection', 0))] || null
                                                }
                                            });

                                        // Return
                                        return metadata
                                    }
                                });
                                    // Bottom Section
                                    ('bottomSection' in that) || that.def('bottomSection', {
                                        // Get
                                        get: function bottomSection() {
                                            // Return
                                            return this.sections.bottom
                                        }
                                    });
                                        // Foot
                                        ('foot' in that) || that.def('foot', {
                                            // Get
                                            get: function foot() {
                                                // Return
                                                return this.sections.bottom
                                            }
                                        });

                                    // Mid Section
                                    ('midSection' in that) || that.def('midSection', {
                                        // Get
                                        get: function midSection() {
                                            // Return
                                            return this.sections.mid
                                        }
                                    });
                                        // Body
                                        ('body' in that) || that.def('body', {
                                            // Get
                                            get: function body() {
                                                // Return
                                                return this.sections.mid
                                            }
                                        });

                                    // Top Section
                                    ('topSection' in that) || that.def('topSection', {
                                        // Get
                                        get: function topSection() {
                                            // Return
                                            return this.sections.top
                                        }
                                    });
                                        // Head
                                        ('head' in that) || that.def('head', {
                                            // Get
                                            get: function head() {
                                                // Return
                                                return this.sections.top
                                            }
                                        })
                        })
                    }

                    else {
                        // Modification > Data
                            // Sections
                            (getType(result.sections) == 'array') || result.def('sections', {
                                // Get
                                get: function sections() {
                                    // Initialization > (Data, Metadata, Target)
                                    let data = [...this.children],
                                        metadata = [],
                                        that = this;

                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i = 0; i < len(data); i += 1) {
                                        (data[i] != this.$$('[data-id=bottomSection', 0)) || metadata.push(this.$$('[data-id=bottomSection', 0));
                                        (data[i] != this.$$('[data-id=midSection', 0)) || metadata.push(this.$$('[data-id=midSection', 0));
                                        (data[i] != this.$$('[data-id=topSection', 0)) || metadata.push(this.$$('[data-id=topSection', 0))
                                    }

                                    // Modification > Metadata
                                        // Bottom
                                        metadata.def('bottom', {
                                            // Get
                                            get: function bottom() {
                                                // Return
                                                return metadata[metadata.indexOf(that.$$('[data-id=bottomSection', 0))] || null
                                            }
                                        });

                                        // Mid
                                        metadata.def('mid', {
                                            // Get
                                            get: function mid() {
                                                // Return
                                                return metadata[metadata.indexOf(that.$$('[data-id=midSection', 0))] || null
                                            }
                                        });

                                        // Top
                                        metadata.def('top', {
                                            // Get
                                            get: function top() {
                                                // Return
                                                return metadata[metadata.indexOf(that.$$('[data-id=topSection', 0))] || null
                                            }
                                        });

                                    // Return
                                    return metadata
                                }
                            });
                                // Bottom Section
                                result.def('bottomSection', {
                                    // Get
                                    get: function bottomSection() {
                                        // Return
                                        return this.sections.bottom
                                    }
                                });
                                    // Foot
                                    result.def('foot', {
                                        // Get
                                        get: function foot() {
                                            // Return
                                            return this.sections.bottom
                                        }
                                    });

                                // Mid Section
                                result.def('midSection', {
                                    // Get
                                    get: function midSection() {
                                        // Return
                                        return this.sections.mid
                                    }
                                });
                                    // Body
                                    result.def('body', {
                                        // Get
                                        get: function body() {
                                            // Return
                                            return this.sections.mid
                                        }
                                    });

                                // Top Section
                                result.def('topSection', {
                                    // Get
                                    get: function topSection() {
                                        // Return
                                        return this.sections.top
                                    }
                                });
                                    // Head
                                    result.def('head', {
                                        // Get
                                        get: function head() {
                                            // Return
                                            return this.sections.top
                                        }
                                    })
                    }

                    // Return
                    return registerElement() ? void 0 : (result.hasClass('jumbotron') ? result : createElement('jumbotron-element', '.jumbotron'))
                }
            },

            // Writable
            writable: false
        });

    /* DOM Elements */
        /* <access-value> */
            // Registration
            !registerElement() || registerElement('access-value', HTMLAccessValueElement);

            // On Node Added
            onNodeAdded(document.body, function() {
                /* Loop
                        Index <access-value>.

                    > Modification > <access-value> > Outer HTML
                */
                while ($$('access-value', 0))
                    $$('access-value', 0).outerHTML = eval($$('access-value', 0).attr('value') || '')
            });

        /* <accordion-component> */
            // Registration
            !registerElement() || registerElement('accordion-component', HTMLAccordionComponent);

            // On Node Added
            registerElement() || onNodeAdded(document.body, function() {
                /* Loop
                        Index <accordion-component>.

                    > Modification > <accordion-component>
                */
                while ($$('accordion-component:not(.accordion)', 0)) {
                    // Data Event Type
                    $$('accordion-component:not(.accordion)', 0).attr('data-event-type', 'click');

                    // Class
                    $$('accordion-component:not(.accordion)', 0).addClass('accordion')
                }
            });

        /* <body> */
            // Check
            check(function() {
                // Return
                return !!document.body
            }, function() {
                // Modification > <body>
                    // Class
                    document.body.addClass('sans-serif');

                    // Style
                    document.body.setCSS({
                        // Font
                        font: {
                            // Family
                            family: '"Open Sans", "Calibri Light", "Droid Serif", sans-serif'
                        }
                    })
            });

        /* <carousel-component> */
            /* Loop
                    Index <carousel-component>.

                > Modification > <carousel-component>
            */
            while ($$('carousel-component:not(.carousel)', 0)) {
                // Data Buttons
                $$('carousel-component:not(.carousel)', 0).setAttr('data-buttons');

                // Data Indicators
                $$('carousel-component:not(.carousel)', 0).setAttr('data-indicators');

                // Class
                $$('carousel-component:not(.carousel)', 0).addClass('carousel')
            }

            // Registration
            !registerElement() || registerElement('carousel-component', HTMLCarouselComponent);

            // On Node Added
            registerElement() || onNodeAdded(document.body, function() {
                /* Loop
                        Index <carousel-component>.

                    > Modification > <carousel-component>
                */
                while ($$('carousel-component:not(.carousel)', 0)) {
                    // Data Buttons
                    $$('carousel-component:not(.carousel)', 0).setAttr('data-buttons');

                    // Data Indicators
                    $$('carousel-component:not(.carousel)', 0).setAttr('data-indicators');

                    // Class
                    $$('carousel-component:not(.carousel)', 0).addClass('carousel')
                }
            });

        /* <dropdown-component> */
            // Registration
            !registerElement() || registerElement('dropdown-component', HTMLDropdownComponent);

            // On Node Added
            registerElement() || onNodeAdded(document.body, function() {
                /* Loop
                        Index <dropdown-component>.

                    > Modification > <dropdown-component>
                */
                while ($$('dropdown-component:not(.dropdown)', 0)) {
                    // Data Event Type
                    $$('dropdown-component:not(.dropdown)', 0).attr('data-event-type', 'click');

                    // Class
                    $$('dropdown-component:not(.dropdown)', 0).addClass('dropdown')
                }
            });

        /* <dynamic-text-component> */
            // Registration
            !registerElement() || registerElement('dynamic-text-component', HTMLDynamicTextComponent);

            // On Node Added
            registerElement() || onNodeAdded(document.body, function() {
                /* Loop
                        Index <dynamic-text-component>.

                    > Modification > <dynamic-text-component>
                */
                while ($$('dynamic-text-component:not(.dynamic-text)', 0)) {
                    // Data Text Function Separator
                    $$('dynamic-text-component:not(.dynamic-text)', 0).attr('data-text-function-separator', $$('dynamic-text-component:not(.dynamic-text)', 0).attr('data-text-function-separator') || ';');

                    // Data Text Separator
                    $$('dynamic-text-component:not(.dynamic-text)', 0).attr('data-text-separator', $$('dynamic-text-component:not(.dynamic-text)', 0).attr('data-text-separator') || ',');

                    // Class
                    $$('dynamic-text-component:not(.dynamic-text)', 0).addClass('dynamic-text')
                }
            });

        /* <jumbotron-element> */
            // Registration
            !registerElement() || registerElement('jumbotron-element', HTMLJumbotronElement);

            // On Node Added
            registerElement() || onNodeAdded(document.body, function() {
                /* Loop
                        Index <jumbotron-element>.

                    > Modification > <jumbotron-element>
                */
                while ($$('jumbotron-element:not(.jumbotron)', 0)) {
                    // Modification > <jumbotron-element>
                        // Sections
                        (getType($$('jumbotron-element:not(.jumbotron)', 0).sections) == 'array') || $$('jumbotron-element:not(.jumbotron)', 0).def('sections', {
                            // Get
                            get: function sections() {
                                // Initialization > (Data, Metadata, Target)
                                let data = Array.from(this.children),
                                    metadata = [],
                                    that = this;

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i = 0; i < len(data); i += 1) {
                                    (data[i] != this.$$('[data-id=bottomSection', 0)) || metadata.push(this.$$('[data-id=bottomSection', 0));
                                    (data[i] != this.$$('[data-id=midSection', 0)) || metadata.push(this.$$('[data-id=midSection', 0));
                                    (data[i] != this.$$('[data-id=topSection', 0)) || metadata.push(this.$$('[data-id=topSection', 0))
                                }

                                // Modification > Metadata
                                    // Bottom
                                    metadata.def('bottom', {
                                        // Get
                                        get: function bottom() {
                                            // Return
                                            return metadata[metadata.indexOf(that.$$('[data-id=bottomSection', 0))] || null
                                        }
                                    });

                                    // Mid
                                    metadata.def('mid', {
                                        // Get
                                        get: function mid() {
                                            // Return
                                            return metadata[metadata.indexOf(that.$$('[data-id=midSection', 0))] || null
                                        }
                                    });

                                    // Top
                                    metadata.def('top', {
                                        // Get
                                        get: function top() {
                                            // Return
                                            return metadata[metadata.indexOf(that.$$('[data-id=topSection', 0))] || null
                                        }
                                    });

                                // Return
                                return metadata
                            }
                        });
                            // Bottom Section
                            ('bottomSection' in $$('jumbotron-element:not(.jumbotron)', 0)) || $$('jumbotron-element:not(.jumbotron)', 0).def('bottomSection', {
                                // Get
                                get: function bottomSection() {
                                    // Return
                                    return this.sections.bottom
                                }
                            });
                                // Foot
                                ('foot' in $$('jumbotron-element:not(.jumbotron)', 0)) || $$('jumbotron-element:not(.jumbotron)', 0).def('foot', {
                                    // Get
                                    get: function foot() {
                                        // Return
                                        return this.sections.bottom
                                    }
                                });

                            // Mid Section
                            ('midSection' in $$('jumbotron-element:not(.jumbotron)', 0)) || $$('jumbotron-element:not(.jumbotron)', 0).def('midSection', {
                                // Get
                                get: function midSection() {
                                    // Return
                                    return this.sections.mid
                                }
                            });
                                // Body
                                ('body' in $$('jumbotron-element:not(.jumbotron)', 0)) || $$('jumbotron-element:not(.jumbotron)', 0).def('body', {
                                    // Get
                                    get: function body() {
                                        // Return
                                        return this.sections.mid
                                    }
                                });

                            // Top Section
                            ('topSection' in $$('jumbotron-element:not(.jumbotron)', 0)) || $$('jumbotron-element:not(.jumbotron)', 0).def('topSection', {
                                // Get
                                get: function topSection() {
                                    // Return
                                    return this.sections.top
                                }
                            });
                                // Head
                                ('head' in $$('jumbotron-element:not(.jumbotron)', 0)) || $$('jumbotron-element:not(.jumbotron)', 0).def('head', {
                                    // Get
                                    get: function head() {
                                        // Return
                                        return this.sections.top
                                    }
                                });

                        // Class
                        $$('jumbotron-element:not(.jumbotron)', 0).addClass('jumbotron')
                }
            });

    /* Functions */
        /* (Console) > Log */
        console.log(`[${app.name}] =>\n`);
        console.log(`    Allow_Alternative_Resource_Files`, ALLOW_ALTERNATIVE_RESOURCE_FILES);
        console.log(`    Dynamic_Assets_URL`, `"${DYNAMIC_ASSETS_URL}"`);
        console.log(`    Minify_Asset_Files`, MINIFY_ASSET_FILES);
        console.log(`    Navigation_Links`, NAVIGATION_LINKS);
        console.log(`    Reveal_Elements_BoundingBox`, REVEAL_ELEMENTS_BOUNDING_BOX);
        console.log(`    Supports_WebGL`, SUPPORTS_WEBGL);
        console.log(`    $location`, location.href.getAfterChar('LapysJS'));

        /* Polyfills
                --- NOTE ---
                    @lapys: All polyfills are compressed or minified.
        */
            // Text Content
            Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&function(){var a=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return a.get.call(this)},set:function(b){return a.set.call(this,b)}})}();

        /* {Modify DOM Elements} On Node Added */
        onNodeAdded(document.body, function modifyDOMElements() {
            // DOM Elements
                // <script>
                    /* Loop
                            [for statement]

                        > Modification > <script> > Language
                    */
                    for (let i = 0; i < $$('script[language', 'length'); i += 1)
                        $$('script[language', i).delAttr('language');

            // Function
                // Create Button
                function createButton(element, innerHTML = '', properties = {}) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if ((element.attr('data-id') || '').hasText('text')) {
                        // Insertion
                        element.insertAdjacentHTML('afterend', `<button data-id=button>${innerHTML}</button>`);

                        // Create Object
                        createObject(element.nextElementSibling, properties)
                    }

                    else
                        // Insertion
                        element.parent.insertChild('end', createElement('button', '[data-id=button', str(innerHTML), properties))
                };

                // Create Header
                function createHeader(element, innerHTML = '', properties = {}) {
                    if ((element.attr('data-id') || '').hasText('subheader')) {
                        // Insertion
                        element.insertAdjacentHTML('beforebegin', `<div data-id=header>${innerHTML}</div>`);

                        // Create Object
                        createObject(element.previousElementSibling, properties)
                    }

                    else
                        // Insertion
                        element.parent.insertChild('begin', createElement('div', '[data-id=header', str(innerHTML), properties))
                };

                // Create Sub Header
                function createSubHeader(element, innerHTML = '', properties = {}) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if ((element.attr('data-id') || '').hasText('button')) {
                        // Initialization > Data
                        let data = element.parent._$(`[data-id*='text'`) ? element.parent._$(`[data-id*='text'`) : element;

                        // Insertion
                        data.insertAdjacentHTML('beforebegin', `<div data-id=subheader>${innerHTML}</div>`);

                        // Crete Object
                        createObject(data.previousElementSibling, properties)
                    }

                    else if ((element.attr('data-id') || '').hasText('header')) {
                        // Insertion
                        element.insertAdjacentHTML('afterend', `<div data-id=subheader>${innerHTML}</div>`);

                        // Create Object
                        createObject(element.nextElementSibling, properties)
                    }

                    else if ((element.attr('data-id') || '').hasText('text')) {
                        // Insertion
                        element.insertAdjacentHTML('beforebegin', `<div data-id=subheader>${innerHTML}</div>`);

                        // Create Object
                        createObject(element.previousElementSibling, properties)
                    }
                };

                // Create Text
                function createText(element, innerHTML = '', properties = {}) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if ((element.attr('data-id') || '').hasText('button')) {
                        // Insertion
                        element.insertAdjacentHTML('beforebegin', `<span data-id=text>${innerHTML}</span>`);

                        // Create Object
                        createObject(element.previousElementSibling, properties)
                    }

                    else if ((element.attr('data-id') || '').hasText('header')) {
                        // Initialization > Data
                        let data = element.parent._$(`[data-id*='subheader'`) ? element.parent._$(`[data-id*='subheader'`) : element;

                        // Insertion
                        data.insertAdjacentHTML('afterend', `<span data-id=text>${innerHTML}</span>`);

                        // Create Object
                        createObject(data.nextElementSibling, properties)
                    }

                    else if ((element.attr('data-id') || '').hasText('subheader')) {
                        // Insertion
                        element.insertAdjacentHTML('afterend', `<span data-id=text>${innerHTML}</span>`);

                        // Create Object
                        createObject(element.nextElementSibling, properties)
                    }
                };

                // Assets
                    // Button
                    (function button() {
                        /* Loop
                                Index Buttons.
                        */
                        for (let i = 0; i < $$(`[data-id*='button'`, 'length'); i += 1)
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (!$$(`[data-id*='button'`, i)['LapysJS isAltered']) {
                                // Modification > Button
                                    // Button
                                    $$(`[data-id*='button'`, i).def('button', {
                                        // Get
                                        get: function button() {
                                            // Return
                                            return this
                                        }
                                    });

                                    // Header
                                    $$(`[data-id*='button'`, i).def('header', {
                                        // Get
                                        get: function header() {
                                            // Return
                                            return this.parent.$$(`[data-id*='header'`, 0) || null
                                        }
                                    });

                                    // Sub Header
                                    $$(`[data-id*='button'`, i).def('subheader', {
                                        // Get
                                        get: function subheader() {
                                            // Return
                                            return this.parent.$$(`[data-id*='subheader'`, 0) || null
                                        }
                                    });

                                    // Text
                                    $$(`[data-id*='button'`, i).def('text', {
                                        // Get
                                        get: function text() {
                                            // Return
                                            return this.parent.$$(`[data-id*='text'`, 0) || null
                                        }
                                    });

                                    // Content
                                    $$(`[data-id*='button'`, i).def('content', {
                                        // Get
                                        get: function getContent() {
                                            // Return
                                            return this.textContent
                                        },

                                        // Set
                                        set: function setContent() {
                                            // Modification > Target > Text Content
                                            this.textContent = arguments[0]
                                        }
                                    });

                                    // Create Header
                                    $$(`[data-id*='button'`, i).def('createHeader', {
                                        // Value
                                        value: function() {
                                            // Create Header
                                            createHeader(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create SubHeader
                                    $$(`[data-id*='button'`, i).def('createSubHeader', {
                                        // Value
                                        value: function() {
                                            // Create SubHeader
                                            createSubHeader(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create Text
                                    $$(`[data-id*='button'`, i).def('createText', {
                                        // Value
                                        value: function() {
                                            // Create Text
                                            createText(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Hyperlink
                                    $$(`[data-id*='button'`, i).def('hyperlink', {
                                        // Get
                                        get: function getHyperlink() {
                                            // Return
                                            return this.attr('href')
                                        },

                                        // Set
                                        set: function setHyperlink() {
                                            // Modification > Target > Hyperlink Reference
                                            this.attr('href', arguments[0])
                                        }
                                    });

                                    // Hyperlink Reference
                                    $$(`[data-id*='button'`, i).def('href', {
                                        // Get
                                        get: function getHyperlinkReference() {
                                            // Return
                                            return this.attr('href')
                                        },

                                        // Set
                                        set: function setHyperlinkReference() {
                                            // Modification > Target > Hyperlink Reference
                                            this.attr('href', arguments[0])
                                        }
                                    });

                                    // Tool Tip
                                    $$(`[data-id*='button'`, i).def('tooltip', {
                                        // Get
                                        get: function getTooltip() {
                                            // Return
                                            return this.attr('data-title')
                                        },

                                        // Set
                                        set: function setTooltip() {
                                            // Modification > Target > Data Title
                                            this.attr('data-title', arguments[0])
                                        }
                                    });

                                    // Is Altered
                                    $$(`[data-id*='button'`, i)['LapysJS isAltered'] = true
                            }
                    })();

                    // Header
                    (function header() {
                        /* Loop
                                Index Headers.
                        */
                        for (let i = 0; i < $$(`[data-id*='header'`, 'length'); i += 1)
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (!$$(`[data-id*='header'`, i)['LapysJS isAltered']) {
                                // Modification > Header
                                    // Button
                                    $$(`[data-id*='header'`, i).def('button', {
                                        // Get
                                        get: function button() {
                                            // Return
                                            return this.parent.$$(`[data-id*='button'`, 0) || null
                                        }
                                    });

                                    // Header
                                    $$(`[data-id*='header'`, i).def('header', {
                                        // Get
                                        get: function header() {
                                            // Return
                                            return this
                                        }
                                    });

                                    // Sub Header
                                    $$(`[data-id*='header'`, i).def('subheader', {
                                        // Get
                                        get: function subheader() {
                                            // Return
                                            return this.parent.$$(`[data-id*='subheader'`, 0) || null
                                        }
                                    });

                                    // Text
                                    $$(`[data-id*='header'`, i).def('text', {
                                        // Get
                                        get: function text() {
                                            // Return
                                            return this.parent.$$(`[data-id*='text'`, 0) || null
                                        }
                                    });

                                    // Content
                                    $$(`[data-id*='header'`, i).def('content', {
                                        // Get
                                        get: function getContent() {
                                            // Return
                                            return this.textContent
                                        },

                                        // Set
                                        set: function setContent() {
                                            // Modification > Target > Text Content
                                            this.textContent = arguments[0]
                                        }
                                    });

                                    // Create Button
                                    $$(`[data-id*='header'`, i).def('createButton', {
                                        // Value
                                        value: function() {
                                            // Create Button
                                            createButton(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create SubHeader
                                    $$(`[data-id*='header'`, i).def('createSubHeader', {
                                        // Value
                                        value: function() {
                                            // Create SubHeader
                                            createSubHeader(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create Text
                                    $$(`[data-id*='header'`, i).def('createText', {
                                        // Value
                                        value: function() {
                                            // Create Text
                                            createText(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Description
                                    $$(`[data-id*='header'`, i).def('description', {
                                        // Get
                                        get: function getDescription() {
                                            // Return
                                            return this.attr('description')
                                        },

                                        // Set
                                        set: function setDescription() {
                                            // Modification > Target > Description
                                            this.attr('description', arguments[0])
                                        }
                                    });

                                    // Hyperlink
                                    $$(`[data-id*='header'`, i).def('hyperlink', {
                                        // Get
                                        get: function getHyperlink() {
                                            // Return
                                            return this.attr('href')
                                        },

                                        // Set
                                        set: function setHyperlink() {
                                            // Modification > Target > Hyperlink Reference
                                            this.attr('href', arguments[0])
                                        }
                                    });

                                    // Hyperlink Reference
                                    $$(`[data-id*='header'`, i).def('href', {
                                        // Get
                                        get: function getHyperlinkReference() {
                                            // Return
                                            return this.attr('href')
                                        },

                                        // Set
                                        set: function setHyperlinkReference() {
                                            // Modification > Target > Hyperlink Reference
                                            this.attr('href', arguments[0])
                                        }
                                    });

                                    // Is Altered
                                    $$(`[data-id*='header'`, i)['LapysJS isAltered'] = true
                            }
                    })();

                    // Sub Header
                    (function subHeader() {
                        /* Loop
                                Index SubHeaders.
                        */
                        for (let i = 0; i < $$(`[data-id*='subheader'`, 'length'); i += 1)
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (!$$(`[data-id*='subheader'`, i)['LapysJS isAltered']) {
                                // Modification > Header
                                    // Button
                                    $$(`[data-id*='subheader'`, i).def('button', {
                                        // Get
                                        get: function button() {
                                            // Return
                                            return this.parent.$$(`[data-id*='button'`, 0) || null
                                        }
                                    });

                                    // Header
                                    $$(`[data-id*='subheader'`, i).def('header', {
                                        // Get
                                        get: function header() {
                                            // Return
                                            return this.parent.$$(`[data-id*='header'`, 0) || null
                                        }
                                    });

                                    // Sub Header
                                    $$(`[data-id*='subheader'`, i).def('subheader', {
                                        // Get
                                        get: function subheader() {
                                            // Return
                                            return this
                                        }
                                    });

                                    // Text
                                    $$(`[data-id*='subheader'`, i).def('text', {
                                        // Get
                                        get: function text() {
                                            // Return
                                            return this.parent.$$(`[data-id*='text'`, 0) || null
                                        }
                                    });

                                    // Content
                                    $$(`[data-id*='subheader'`, i).def('content', {
                                        // Get
                                        get: function getContent() {
                                            // Return
                                            return this.textContent
                                        },

                                        // Set
                                        set: function setContent() {
                                            // Modification > Target > Text Content
                                            this.textContent = arguments[0]
                                        }
                                    });

                                    // Create Button
                                    $$(`[data-id*='subheader'`, i).def('createButton', {
                                        // Value
                                        value: function() {
                                            // Create Button
                                            createButton(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create SubHeader
                                    $$(`[data-id*='subheader'`, i).def('createSubHeader', {
                                        // Value
                                        value: function() {
                                            // Create SubHeader
                                            createSubHeader(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create Text
                                    $$(`[data-id*='subheader'`, i).def('createText', {
                                        // Value
                                        value: function() {
                                            // Create Text
                                            createText(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Is Altered
                                    $$(`[data-id*='subheader'`, i)['LapysJS isAltered'] = true
                            }
                    })();

                    // Text
                    (function text() {
                        /* Loop
                                Index Text.
                        */
                        for (let i = 0; i < $$(`[data-id*='text'`, 'length'); i += 1)
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (!$$(`[data-id*='text'`, i)['LapysJS isAltered']) {
                                // Modification > Header
                                    // Button
                                    $$(`[data-id*='text'`, i).def('button', {
                                        // Get
                                        get: function button() {
                                            // Return
                                            return this.parent.$$(`[data-id*='button'`, 0) || null
                                        }
                                    });

                                    // Header
                                    $$(`[data-id*='text'`, i).def('header', {
                                        // Get
                                        get: function header() {
                                            // Return
                                            return this.parent.$$(`[data-id*='header'`, 0) || null
                                        }
                                    });

                                    // Sub Header
                                    $$(`[data-id*='text'`, i).def('subheader', {
                                        // Get
                                        get: function subheader() {
                                            // Return
                                            return this.parent.$$(`[data-id*='subheader'`, 0) || null
                                        }
                                    });

                                    // Text
                                    $$(`[data-id*='text'`, i).def('text', {
                                        // Get
                                        get: function text() {
                                            // Return
                                            return this
                                        }
                                    });

                                    // Content
                                    $$(`[data-id*='text'`, i).def('content', {
                                        // Get
                                        get: function getContent() {
                                            // Return
                                            return this.textContent
                                        },

                                        // Set
                                        set: function setContent() {
                                            // Modification > Target > Text Content
                                            this.textContent = arguments[0]
                                        }
                                    });

                                    // Create Button
                                    $$(`[data-id*='text'`, i).def('createButton', {
                                        // Value
                                        value: function() {
                                            // Create Button
                                            createButton(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create Dummy Text
                                    $$(`[data-id*='text'`, i).def('createDummyText', {
                                        // Value
                                        value: function createDummyText() {
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Modification > Target > Inner HTML
                                            */
                                            switch (arguments[0]) {
                                                // 1
                                                case 1:
                                                    this.innerHTML = (function() {
                                                        // Initialization > Data
                                                        data = '';

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Data
                                                        */
                                                        for (let i = 0; i < len(' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   ') * (int(rand(14, 16)) * .25); i += 1)
                                                            data += rand(1, 10) > 9 ? '&nbsp;' : ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   '[int(rand(0, len(' '.repeat(106))))];

                                                        // Return
                                                        return '.' + data + '.'
                                                    })();
                                                    break;

                                                // 2
                                                case 2:
                                                    this.innerHTML = (function() {
                                                        // Initialization > Data
                                                        data = '';

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Data
                                                        */
                                                        for (let i = 0; i < len(' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   ') * (int(rand(14, 16)) * .5); i += 1)
                                                            data += rand(1, 10) > 9 ? '&nbsp;' : ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   '[int(rand(0, len(' '.repeat(106))))];

                                                        // Return
                                                        return '.' + data + '.'
                                                    })();
                                                    break;

                                                // 3
                                                case 3:
                                                    this.innerHTML = (function() {
                                                        // Initialization > Data
                                                        data = '';

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Data
                                                        */
                                                        for (let i = 0; i < len(' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   ') * (int(rand(14, 16)) * 1); i += 1)
                                                            data += rand(1, 10) > 9 ? '&nbsp;' : ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   '[int(rand(0, len(' '.repeat(106))))];

                                                        // Return
                                                        return '.' + data + '.'
                                                    })();
                                                    break;

                                                // 4
                                                case 4:
                                                    this.innerHTML = (function() {
                                                        // Initialization > Data
                                                        data = '';

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Data
                                                        */
                                                        for (let i = 0; i < len(' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   ') * (int(rand(14, 16)) * 1.5); i += 1)
                                                            data += rand(1, 10) > 9 ? '&nbsp;' : ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   '[int(rand(0, len(' '.repeat(106))))];

                                                        // Return
                                                        return '.' + data + '.'
                                                    })();
                                                    break;

                                                // 5
                                                case 5:
                                                    this.innerHTML = (function() {
                                                        // Initialization > Data
                                                        data = '';

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Data
                                                        */
                                                        for (let i = 0; i < len(' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   ') * (int(rand(14, 16)) * 2); i += 1)
                                                            data += rand(1, 10) > 9 ? '&nbsp;' : ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z   '[int(rand(0, len(' '.repeat(106))))];

                                                        // Return
                                                        return '.' + data + '.'
                                                    })()
                                            }
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create SubHeader
                                    $$(`[data-id*='text'`, i).def('createSubHeader', {
                                        // Value
                                        value: function() {
                                            // Create SubHeader
                                            createSubHeader(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Create Text
                                    $$(`[data-id*='text'`, i).def('createText', {
                                        // Value
                                        value: function() {
                                            // Create Text
                                            createText(this, arguments[0], arguments[1])
                                        },

                                        // Writable
                                        writable: false
                                    });

                                    // Is Altered
                                    $$(`[data-id*='text'`, i)['LapysJS isAltered'] = true
                            }
                    })()
        });

        /* On DOM Ready */
        onDOMReady(function() {
            // Function
                /* Stop Loading Document
                        --- NOTE ---
                            @lapys: When the DOM is ready,
                                stop the page from still loading after 10 seconds.
                */
                (function stopLoadingDocument() {
                    // Global > Stop
                    global.stop();
                })();

                /* Modify DOM Structure
                        --- NOTE ---
                            @lapys: Modify some parts of the DOM to make
                                it lighter. e.g.: Removing unnecessary elements.
                */
                (function modifyDOMStructure() {
                    /* Loop
                            [do:while statement]

                            --- NOTE ---
                                @lapys: Remove all non-head element based elements.

                        > Deletion
                    */
                    while (document.head.$$(':not(link):not(meta):not(script):not(style):not(title)', 0))
                        document.head.$$(':not(link):not(meta):not(script):not(style):not(title)', 0).delete();

                    /* Loop
                            [do:while statement]

                            --- NOTE ---
                                @lapys: Remove all scripts,
                                    scripts are not used anymore after they have been executed.

                        > Deletion
                    */
                    while ($$(`script:not([src*='lapys.'])`, 0))
                        $$(`script:not([src*='lapys.'])`, 0).delete()
                })()
        }, 1e4);

        /* {Stop Loading Document} Timeout
                --- NOTE ---
                    @lapys: Stop the page from loading after 15 seconds.
        */
        timeout(function stopLoadingDocument() {
            // Global > Stop
            global.stop()
        }, 1.5e4)
}
