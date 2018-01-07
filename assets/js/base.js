/* Classes */
    /* HTML Accordion Component */
    class HTMLAccordionComponent extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Timeout
                timeout(() => {
                    // Class
                    this.addClass('accordion');

                    // Data Event Type
                    this.attr('data-event-type', this.attr('data-event-type') || 'click')
                })
        }
    };

    /* HTML Carousel Component */
    class HTMLCarouselComponent extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Timeout
                timeout(() => {
                    // Class
                    this.addClass('carousel')
                })
        }
    };

    /* HTML Developer Canvas Element
            --- NOTE ---
                @lapys: The point of developer canvases are to
                    allow a developer creatively express oneself,

                    and not necessarily build components or functions that are within convention.
    */
    class HTMLDeveloperCanvasElement extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                /* Delete
                        --- NOTE ---
                            @lapys: Developer Canvases can not be deleted normally.
                */
                this.delete = func();

                // Timeout
                timeout(() => {
                    // Data ID
                    this.setAttr('data-id', 'developerCanvas');

                    // Description
                    this.def('description', {
                        // Get
                        get: function getDescription() {
                            // Return
                            return this.attr('description')
                        },

                        // Set
                        set: function setDescription() {
                            // Modification > Target > Description
                            this.attr('description', arguments[0] || '')
                        }
                    })
                })
        }
    }

    /* HTML Dropdown Component */
    class HTMLDropdownComponent extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Timeout
                timeout(() => {
                    // Class
                    this.addClass('dropdown');

                    // Data Event Type
                    this.attr('data-event-type', this.attr('data-event-type') || 'click');

                    // Data ID
                    this.attr('data-id', this.attr('data-id') || `dropdown${$$('.dropdown', '_length')}`)
                })
        }
    };

    /* HTML Dynamic Text Component */
    class HTMLDynamicTextComponent extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Timeout
                timeout(() => {
                    // Class
                    this.addClass('dynamic-text')
                })
        }
    };

    /* HTML Jumbotron Element */
    class HTMLJumbotronElement extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Timeout
                timeout(() => {
                    // Class
                    this.addClass('jumbotron');

                    // Style > Overflow
                    this.setCSS('overflow', 'hidden')
                });

                // Sections
                this.def('sections', {
                    get: function() {
                        // Initialization > Data
                        let data = [...this.children];

                        /* Loop
                                Index Data.

                            > Deletion
                        */
                        for (let i = 0; i < len(data); i += 1)
                            !(
                                !(data[i].attr('data-id') || '').hasText('bottomSection') &&
                                !(data[i].attr('data-id') || '').hasText('midSection') &&
                                !(data[i].attr('data-id') || '').hasText('topSection')
                            ) || (data[i].attr('data-id') || '').hasText('Section') || data[i].delete();

                        // Modification > Data > (Bottom, Middle, Top) Section
                        data.bottom = data[data.indexOf(this.$$('[data-id=bottomSection', 0))] || null;
                        data.mid = data[data.indexOf(this.$$('[data-id=midSection', 0))] || null;
                        data.top = data[data.indexOf(this.$$('[data-id=topSection', 0))] || null;

                        // Return
                        return data
                    }
                })

                // Bottom Section
                this.def('bottomSection', {
                    get: function() {
                        // Return
                        return this.sections.bottom
                    }
                });

                // Middle Section
                this.def('midSection', {
                    get: function() {
                        // Return
                        return this.sections.mid
                    }
                });

                // Top Section
                this.def('topSection', {
                    get: function() {
                        // Return
                        return this.sections.top
                    }
                })
        }
    };

    /* HTML Logo Element */
    class HTMLLogoElement extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Timeout
                timeout(() => {
                    // Class
                    this.addClass('logo', 'responsive');

                    // Data ID
                    this.attr('data-id', 'logo')
                });

                // Image
                this.def('image', {
                    // Get
                    get: function() {
                        // Return
                        return this.$$('img', 0)
                    },

                    // Set
                    set: function() {
                        // Insertion
                        this.$$('img', 0) || this.insertChild('begin', new LapysJS.component.Image());

                        // Modification > (Target > <img>) > Source
                        this.$$('img', 0).src = str(arguments[0])
                    }
                });

                // Source
                this.def('src', {
                    // Get
                    get: function() {
                        // Return
                        return (this.$$('img', 0) || {src: ''}).src
                    },

                    // Set
                    set: function() {
                        // Modification > (Target > <img>) > Source
                        (this.$$('img', 0) || {src: ''}).src = str(arguments[0])
                    }
                });
        }
    };

/* Global Data */
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
            if (location.href.getBeforeChar('/', true).endsWith('pages'))
                data = `../${data}`;

            // Return
            return data
        })(),

        // Writable
        writable: false
    });

    /* Application */
        // Modification
            // Author
            app.author = 'Lapys Dev Team';

            // Cache Control
            app.cacheControl = 'cache';

            // Character Set
            app.charset = 'UTF-8';

            // Color
            app.color = new (function ApplicationColor() {
                // Initialization > Component to Hexadecimal
                let componentToHex = function componentToHex() {
                    // Return
                    return len((arguments[0] || '').toString(16)) == 1 ? `0${(arguments[0] || '').toString(16)}` : (arguments[0] || '').toString(16)
                };

                // Primary
                    // Background Color
                    this.primaryBackgroundColor = '#0056FF';

                    // Foreground Color
                    this.primaryForegroundColor = '#EFEFEF';

                // Secondary
                    // Background Color
                    this.secondaryBackgroundColor = '#F7F7F7';

                    // Foreground Color
                    this.secondaryForegroundColor = '#333333';

                // To Hexadecimal
                this.constructor.prototype.toHex = function toHex() {
                    // Initialization > Color Sequence
                    let colorSequence = (() => {
                        /* Logic
                                If
                                    Argument 0 contains 'rgba',

                                else if
                                    Argument 0 contains 'rgb'.

                            > Return
                        */
                        if ((arguments[0] || '').hasText('rgba'))
                            return arguments[0].getAfterChar('rgba(').getBeforeChar(')').replace(/ /g, '').split(/,/g);

                        else if ((arguments[0] || '').hasText('rgb'))
                            return arguments[0].getAfterChar('rgb(').getBeforeChar(')').replace(/ /g, '').split(/,/g).concat(['1']);

                        // Return
                        return []
                    })();

                    // Return
                    return `#${componentToHex(colorSequence[0])}${componentToHex(colorSequence[1])}${componentToHex(colorSequence[2])}`
                };

                // To RGB
                this.constructor.prototype.toRGB = function toRGB() {
                    // Initialization > Color Sequence
                    let colorSequence;

                    /* Logic
                            If
                                The Argument 0 is a Hexadecimal.
                    */
                    if (
                        (arguments[0] || '').hasText('#') ||
                        /^#([A-Fa-f0-9]{3}){1, 2}$/.test(arguments[0] || '')
                    ) {
                        // Update > Color Sequence
                        colorSequence = (arguments[0] || '').substring(1).split('');
                        (len(colorSequence) !== 3) || (colorSequence = [
                            colorSequence[0], colorSequence[0],
                            colorSequence[1], colorSequence[1],
                            colorSequence[2], colorSequence[2]
                        ]);
                        colorSequence = `0x${colorSequence.join('')}`;

                        // Return
                        return `rgb(${[(colorSequence >> 16) & 255, (colorSequence >> 8) & 255, colorSequence & 255].join(',')})`.replace(/,/g, ', ')
                    }

                    else
                        // LapysJS > Error
                        LapysJS.error(`Illegal value parsed to 'toRGB' or 'toRGBA' method.`);

                    // Return
                    return ''
                };

                // To RGBA
                this.constructor.prototype.toRGBA = function toRGBA() {
                    // Return
                    return `${this.toRGB(arguments[0] || '').replace('rgb', 'rgba').slice(0, -len(')'))}, ${arguments[1] || 1})`
                }
            });

            // Copyright
            app.copyright = 'Lapys Dev Team';

            // Description
            app.description = 'LapysJS is a client-side CSS-JavaScript library designed to make web programming faster and more forgiving to build with.';

            // Font
            app.font = new (function ApplicationFont() {
                // Family
                this.family = 'Calibri Light';

                // Line Height
                this.lineHeight = '1.2375';

                // Size
                this.size = '17px';

                // Style
                this.style = 'normal';

                // Variant
                this.variant = 'normal';

                // Weight
                this.weight = 'normal'
            });

            // Keywords
            app.keywords = 'JavaScript Library, LapysJS, Simple Syntax, Web Client-Side Library';

            // Robots
            app.robots = 'none';

            // Theme Color
            app.themeColor = app.color.primaryBackgroundColor;

            // Viewport
                // Height
                app.viewport.height = 'device-height';

                // Initial Scale
                app.viewport.initialScale = 1;

                // Maximum Scale
                app.viewport.maximumScale = 2;

                // Minimal UI (User Interface)
                app.viewport.minimalUI = true;

                // Minimum Scale
                app.viewport.minimumScale = .1;

                // Target Density DPI
                app.viewport.targetDensityDPI = 96;

                // User Scalable
                app.viewport.userScalable = true;

                // Width
                app.viewport.width = 'device-width';

    /* HTML Canvas Element */
        // Modification > HTML Canvas Element
            // Draw
            HTMLCanvasElement.prototype.def('draw', {
                // Value
                value: function() {
                    /* Logic
                            If
                                the Target has a 2D Rendering Context.
                    */
                    if (this.renderingContext2D) {
                        // Target > Rendering Context 2D > Begin Path
                        this.renderingContext2D.beginPath();

                        /* Logic
                                If
                                    Argument 0 is a Function,

                                else if
                                    Argument 0 is a String.
                        */
                        if (typeof arguments[0] === 'function')
                            // Function > Argument 0
                            arguments[0].apply(this, [...arguments].slice(1).addElementToBack(this.renderingContext2D));

                        else if (typeof arguments[0] === 'string')
                            // Execution
                            eval(`(function(context) {${arguments[0]}})()`);

                        // Target > Rendering Context 2D > Close Path
                        this.renderingContext2D.closePath()
                    }

                    else
                        // LapysJS > Error
                        LapysJS.error(`HTMLCanvasElement missing 'renderingContext2D' property.`)
                },

                // Writable
                writable: false
            });

            // Erase
            HTMLCanvasElement.prototype.def('erase', {
                // Value
                value: function() {
                    /* Logic
                            If
                                the Target has a 2D Rendering Context.
                    */
                    if (this.renderingContext2D) {
                        /* Logic
                                Switch case to Argument 0.
                        */
                        switch (str(arguments[0])) {
                            // Rectangle
                            case 'rect':
                                // Target > Clear Rectangle
                                this.renderingContext2D.clearRect.apply(this.renderingContext2D, [...arguments].slice(1));
                                break
                        }
                    }

                    else
                        // LapysJS > Error
                        LapysJS.error(`HTMLCanvasElement missing 'renderingContext2D' property.`)
                },

                // Writable
                writable: false
            });

            // Height
            HTMLCanvasElement.prototype.def('setHeight', {
                // Value
                value: function() {
                    // Modification > Target > Height
                    this.attr('height', num(arguments[0]));
                    this.height = num(arguments[0])
                },

                // Writable
                writable: false
            });

            // Width
            HTMLCanvasElement.prototype.def('setWidth', {
                // Value
                value: function() {
                    // Modification > Target > Width
                    this.attr('width', num(arguments[0]));
                    this.width = num(arguments[0])
                },

                // Writable
                writable: false
            });

    /* Cosine */
    def('cos', {value: Math.cos, writable: false});

    /* CSS */
        // Link
            // LapysJS Stylesheet
            $$(`link[href*='lapys.min.css'`) || $$(`link[href*='lapys.css'`) || css.link('LapysJSStylesheet', {href: decodeURIComponent(LapysJS.script.src.replace(/js/g, 'css')) || `${DYNAMIC_ASSETS_URL}src/lapys.css`, media: 'all', rel: 'stylesheet', type: 'text/css'});

            // Base Stylesheet
            $$(`link[href*='base.css'`) || css.link('baseStylesheet', {href: decodeURIComponent(($$(`script[src*='base.js'`, 0) || 'script'.html).src.replace(/js/g, 'css')) || `${DYNAMIC_ASSETS_URL}assets/css/base.css`, media: 'all', rel: 'stylesheet', type: 'text/css'});

            // Document Stylesheet
                /* Timeout
                        --- NOTE ---
                            @lapys: The Document Script may not be defined yet.
                */
                timeout(() => {
                    !$$('script[data-id=documentScript', 0) || css.link('documentStylesheet', {href: DYNAMIC_ASSETS_URL + decodeURIComponent(($$('script[data-id=documentScript', 0) || 'script'.html).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'})
                });

    /* Document */
        // Modification
            // Favicon
            document.favicon = `${DYNAMIC_ASSETS_URL}assets/img/ico/icon.ico`;

            // Title
            document.title = 'LapysJS';

    /* LapysJS */
        // $ > Import
            // Calibri
            LapysJS.$.import('font', {format: 'truetype', name: 'Calibri', url: `${DYNAMIC_ASSETS_URL}assets/fonts/calibri.ttf`});

            // Calibri Light
            LapysJS.$.import('font', {format: 'truetype', name: 'Calibri Light', url: `${DYNAMIC_ASSETS_URL}assets/fonts/calibri-light.ttf`});

            // Open Sans
            LapysJS.$.import('font', {format: 'truetype', name: 'Open Sans', url: `${DYNAMIC_ASSETS_URL}assets/fonts/open-sans.ttf`});

    /* PI 2 */
    def('PI2', {value: PI * 2, writable: false});

    /* Request Animation Frame */
    global.requestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || global.mozRequestAnimationFrame;

    /* Sine */
    def('sin', {value: Math.sin, writable: false});

    /* Global */
        // Name
        global.name = 'LapysJS';

/* DOM Elements */
    /* All */
        /* {Modify DOM Element Tree} On DOM Ready
                --- NOTE ---
                    @lapys:
                        - Catch imported elements.
                        - Reduce the size of the DOM.
        */
        onDOMReady(function modifyDOMElementTree() {
            /* Loop
                    [do:while statement]

                > Deletion
            */
            while ($$('head br', 0))
                $$('head br', 0).delete();

            /* Loop
                    [do:while statement]

                > Deletion
            */
            while ($$('script', 0))
                $$('script', 0).delete()
        });

    /* <accordion-component> */
        // Registration
        registerElement('accordion-component', HTMLAccordionComponent);

    /* <body> */
        // Style > <body>
        document.body.setCSS({
            // Background Color
            backgroundColor: app.color.secondaryBackgroundColor,

            // Color
            color: app.color.secondaryForegroundColor,

            // Font
            font: {
                // Family
                family: app.font.family,

                // Size
                size: `${parseNumber(app.font.size)}px`,

                // Style
                style: app.font.style,

                // Variant
                variant: app.font.variant,

                // Weight
                weight: app.font.weight
            },

            // Line Height
            lineHeight: app.font.lineHeight
        });

    /* <bottom>, <top> */
        // On Node Ready
        onNodeAdded(document.body, element => {
            // Insertion
            element.$$('bottom#bottom', 0) || element.insertChild('end', createElement('bottom', '#bottom'));
            while (element.children[~-len(element.children)] !== element.$$('bottom#bottom', 0)) element.insertBefore(element.children[~-len(element.children)], $$('bottom#bottom', 0));

            element.$$('top#top', 0) || element.insertChild('begin', createElement('top', '#top'));
            while (element.children[0] !== element.$$('top#top', 0)) element.insertBefore($$('top#top', 0), element.children[0])
        }, document.body);

    /* <canvas> */
        // On Node Added
        onNodeAdded(document.body, function() {
            /* Loop
                    Index all <canvas>.

                > Modification > <canvas> > Rendering Context 2D
            */
            for (let i = 0; i < $$('canvas', 'length'); i += 1)
                if (($$('canvas', i).renderingContext2D || []).constructor !== CanvasRenderingContext2D) {
                    $$('canvas', i).def('renderingContext2D', {
                        // Value
                        value: $$('canvas', i).getContext('2d'),

                        // Writable
                        writable: false
                    });
                        // Modification
                            // Fill Color
                            $$('canvas', i).renderingContext2D.def('fillColor', {
                                // Value
                                value: function() {
                                    // Modification > Target > Fill (Style, Text)
                                    this.fillStyle = str(arguments[0]);
                                    this.fillText = str(arguments[0]);

                                    // Target > Stroke
                                    this.fill()
                                },

                                // Writable
                                writable: false
                            })

                            // Stroke Color
                            $$('canvas', i).renderingContext2D.def('strokeColor', {
                                // Value
                                value: function() {
                                    // Modification > Target > Stroke (Style, Text)
                                    this.strokeStyle = str(arguments[0]);
                                    this.strokeText = str(arguments[0]);

                                    // Target > Stroke
                                    this.stroke()
                                },

                                // Writable
                                writable: false
                            })
                }
        });

    /* <carousel-component> */
        // Registration
        registerElement('carousel-component', HTMLCarouselComponent);

    /* <developer-canvas> */
        // Registration
        registerElement('developer-canvas', HTMLDeveloperCanvasElement);

    /* <dialog>
            --- UPDATE REQUIRED ---
                @lapys: Needs to function.
    */
         // Function > Re-Orientate Device
        global.reorientateDevice = function reorientateDevice() {
            // Alert
            alert('Sorry, permission is not provided to re-orientate this device.')
        };

        // Event > Window > Resize
        invokeEvent('resize', function() {
             // Insertion
            (innerWidth >= 320) || $$('.dialog#reorientateDeviceDialog') || document.body.insertChild('end', new LapysJS.component.Dialog({
                CSSSelector: '.center.fill.flex-reverse.fixed.no-select.no-touch#reorientateDeviceDialog',
                innerHTML:
                    // Header
                    `<h1 class=well data-id=header style='background-color: rgba(0, 0, 0, .075); border: 0; box-shadow: none; font-size: 1.75em'> Sorry, but you can not view this page with your current device. </h1>` +

                    // Sub Header
                    `<h2 data-id=subheader style='font-size: 1em'> Try re-orientating your device for another result. </h2>` +

                    // Re-Orientate Device
                    `<button class='flat smooth upper' id=reorientateDevice onclick=reorientateDevice()>` +
                        `Button` +

                        // Document Stylesheet
                        `<style type=text/css>` +
                            // Components
                                // Re-Orientate Device
                                `#reorientateDevice {` +
                                    `background-color: ${app.themeColor};` +
                                    `border: 0;` +
                                    `border-radius: 2.5px;` +
                                    `color: #FFFFFF;` +
                                    `cursor: pointer;` +
                                    `font-size: 110%;` +
                                    `padding: 7.5px 15px` +
                                `}` +
                                    // States > Hover
                                    `#reorientateDevice:hover {` +
                                        `box-shadow: inset 0 0 0 500px rgba(0, 0, 0, .1)` +
                                    `}` +
                        `</style>` +
                    `</button>` +

                    // Document Stylesheet
                    `<style type=text/css>` +
                        // Components > Re-Orientate Device Dialog
                            // @media
                            `@media only all` +
                                `and (max-width: 319px) {` +
                                    // Re-Orientate Device Dialog
                                    `.dialog#reorientateDeviceDialog {` +
                                        `opacity: 0` +
                                    `}` +
                            `}` +
                    `</style>`,
                style: 'color: #565656'
            }));
        });

    /* <dropdown-component> */
        // Registration
        registerElement('dropdown-component', HTMLDropdownComponent);

    /* <dynamic-text-component> */
        // Registration
        registerElement('dynamic-text-component', HTMLDynamicTextComponent);

    /* <jumbotron-element> */
        // Registration
        registerElement('jumbotron-element', HTMLJumbotronElement);

        // On DOM Ready
        onDOMReady(function() {
            /* Loop
                    Index all <jumbotron-element>.

                > Insertion
            */
            for (let i = 0; i < $$('jumbotron-element', 'length'); i += 1) {
                $$('jumbotron-element', i).sections.top || $$('jumbotron-element', i).insertChild('end', createElement('div', '[data-id=topSection'));
                $$('jumbotron-element', i).sections.mid || $$('jumbotron-element', i).insertChild('end', createElement('div', '[data-id=midSection'));
                $$('jumbotron-element', i).sections.bottom || $$('jumbotron-element', i).insertChild('end', createElement('div', '[data-id=bottomSection'))
            }
        });

    /* <logo-element> */
        // Registration
        registerElement('logo-element', HTMLLogoElement);

        // On DOM Ready
        onDOMReady(function() {
            /* Loop
                    Index all <logo-element>.
            */
            for (let i = 0; i < $$('logo-element', 'length'); i += 1) {
                // Insertion
                $$('logo-element', i).image || $$('logo-element', i).insertChild('begin', new LapysJS.component.Image());

                // Modification > <logo-element> > Source
                $$('logo-element', i).src = $$('logo-element', i).src || $$('logo-element', i).attr('src') || `${DYNAMIC_ASSETS_URL}assets/img/png/icon.png`;
                $$('logo-element', i).delAttr('src')
            }
        });

        // On Node Added
        onNodeAdded(document.body, function() {
            /* Loop
                    Index all <logo-element>.
            */
            for (let i = 0; i < $$('logo-element', 'length'); i += 1) {
                // Insertion
                $$('logo-element', i).image || $$('logo-element', i).insertChild('begin', new LapysJS.component.Image());

                /* Loop
                        Index the <logo-element>`s attributes.
                */
                for (let j = 0; j < len($$('logo-element', i).attributes); j += 1)
                    /* Logic
                            If the attribute begins with 'img-'.
                    */
                    if ($$('logo-element', i).attributes[j].name.startsWith('img-')) {
                        // Modification
                            // (<logo-element> > Image) > [Attribute]
                            $$('logo-element', i).image.attr($$('logo-element', i).attributes[j].name.slice(len('img-')), $$('logo-element', i).attributes[j].value);

                            // <logo-element> > [Attribute]
                            $$('logo-element', i).delAttr($$('logo-element', i).attributes[j--])
                    }
            }
        });

    /* <script> */
        /* Loop
                Index all <script>

            > Modification > <script> > Language
        */
        for (let i = 0; i < $$(`script[type='text/javascript'`, 'length'); i += 1) {
            $$(`script[type='text/javascript'`, i).attr('language', 'javascript');
            $$(`script[type='text/javascript'`, i).language = 'javascript'
        }

/* Components */
    /* Footer */
        // On DOM Ready
        onDOMReady(() => {
            // Insertion
            (document.main || document.body).insertChild('end', createElement('footer', '.card.center-text.flat.no-select#footer[data-id=footer',
                `<div> ${app.author} &copy; 2017${date.getFullYear() > 2017 ? ` - ${date.getFullYear()}` : ''} </div>` +
                `<br>` +
                `<small> Some images are copyright of <strong>FreePik</strong> at <a href=https://www.freepik.com>www.freepik.com</a> and all ownership goes to the respective authors. </small>`, {
                    // Style
                    style: 'padding: 30px 0; text-indent: 15px'
                }
            ))
        });

    /* Syntax Highlighted */
        // Function > Modify Syntax Highlighted Code
        global.modifySyntaxHighlightedCode = function modifySyntaxHighlightedCode() {
            // Initialization > Syntax Highlighted Code
            let syntaxHighlightedCode = $$('code.syntax-highlighted', 'array');

            /* Loop
                    Index all Syntax Highlighted Code.
            */
            for (let i = 0; i < len(syntaxHighlightedCode); i += 1)
                /* Logic
                        [if:else if:else statement]
                */
                if (!syntaxHighlightedCode[i]['LapysJS isModified']) {
                    /* Loop
                            [for statement]

                        > Modification > (Syntax Highlighted Code > Highlight Color) > Outer HTML
                    */
                    for (let j = syntaxHighlightedCode[i].$$('[data-id=highlightColor', '~length'); j > -1; j -= 1)
                        syntaxHighlightedCode[i].$$('[data-id=highlightColor', j).outerHTML = syntaxHighlightedCode[i].$$('[data-id=highlightColor', j).innerHTML;

                    // Modification > Syntax Highlighted Code
                        // Inner HTML
                        syntaxHighlightedCode[i].innerHTML = syntaxHighlightedCode[i].innerText;

                        // Format
                        ((syntaxHighlightedCode[i].format || '').constructor === Array) || syntaxHighlightedCode[i].def('format', {
                            // Get
                            get: function getFormat() {
                                // Return
                                return (this.attr('format') || '').trim().split(/ /g)
                            },

                            // Set
                            set: function setFormat() {
                                // Modification > Target > Language
                                this.attr('format', (arguments[0] || '').toString().replace(/,/g, ' ').replace(/  /g, ' ').replace(/  /g, ' '))
                            }
                        });

                        // Language
                        (typeof syntaxHighlightedCode[i].language === 'string') || syntaxHighlightedCode[i].def('language', {
                            // Get
                            get: function getLanguage() {
                                // Return
                                return this.attr('language')
                            },

                            // Set
                            set: function setLanguage() {
                                // Modification > Target > Language
                                this.attr('language', arguments[0] || '')
                            }
                        });

                        // Tab Spacing
                            // Error Handling
                            try {
                                (typeof syntaxHighlightedCode[i].tabSpacing === 'string') || syntaxHighlightedCode[i].def('tabSpacing', {
                                    // Get
                                    get: function getTabSpacing() {
                                        // Return
                                        return this.attr('tab-spacing')
                                    },

                                    // Set
                                    set: function setTabSpacing() {
                                        // Modification > Target > Language
                                        this.attr('tab-spacing', int(arguments[0]) || '')
                                    }
                                })
                            }

                            catch (error) {};

                        // Spell Check
                        syntaxHighlightedCode[i].spellcheck = false;

                        // Inner HTML
                        (syntaxHighlightedCode[i].innerHTML[0] !== '\n') || (syntaxHighlightedCode[i].innerHTML = syntaxHighlightedCode[i].innerHTML.replace('\n', ''));
                            /* Timeout
                                    --- NOTE ---
                                        @lapys: Allow all proper highlighting,
                                            if any to be done.

                                            - Regular Expression Modification List
                                                -- Replaced all Tildes with 'Tabs'.
                                                -- Ensured newline at the End of Code.
                                                    @lapys: Not really Regular Expression but it is still nice.
                            */
                            timeout(() => {
                                /* Loop
                                        Index all the Syntax Highlighted Code's Comments.
                                */
                                for (let j = 0; j < syntaxHighlightedCode[i].$$('[data-id=highlightColor][role=comment', 'length'); j += 1)
                                    /* Loop
                                            While
                                                the Syntax Highlighted Code's Comment still has a non-Comment child element.

                                        > Deletion
                                    */
                                    while (syntaxHighlightedCode[i].$$('[data-id=highlightColor][role=comment', j).$$(':not([role=comment])', 0))
                                        syntaxHighlightedCode[i].$$('[data-id=highlightColor][role=comment', j).$$(':not([role=comment])', 0).outerHTML = syntaxHighlightedCode[i].$$('[data-id=highlightColor][role=comment', j).$$(':not([role=comment])', 0).innerHTML;

                                syntaxHighlightedCode[i].innerHTML = syntaxHighlightedCode[i].innerHTML.replace(/~/g, data => {
                                    // Return
                                    return `<span data-id=tab style='color: transparent !important'>${'&nbsp;'.repeat(+syntaxHighlightedCode[i].tabSpacing || 4)}</span>`
                                }).replace(/\n/g, `<span data-id=newline><br></span>`)
                            }, 100);

                        /* Content
                                --- NOTE ---
                                    @lapys: This represents a modified version of the element's source code (Inner Text).
                                        - Regular Expression Modification List
                                            -- Strings were replaced.
                                            -- Strings were replaced.
                                            -- Strings were replaced.
                        */
                        syntaxHighlightedCode[i].content = syntaxHighlightedCode[i].innerText.replace(/'([a-z]|[A-Z]|[0-9]|[\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}'/g, '').replace(/"([a-z]|[A-Z]|[0-9]|[\'\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}"/g, '').replace(/`([a-z]|[A-Z]|[0-9]|['|"\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}`/g, '');

                    /* Logic
                            If
                                the Syntax Highlighted Code's Language is null.

                            --- NOTE ---
                                @lapys: It's best to specify the language being used
                                    than slowing down the browser with this procedural automation
                                    for detecting the language.
                    */
                    if (syntaxHighlightedCode[i].language === null)
                        /* Logic
                                [if:else if:else statement]

                            > Modification > Syntax Highlighted Code > Language
                        */
                        if (
                            syntaxHighlightedCode[i].content.hasText('<!--', '-->') ||
                            syntaxHighlightedCode[i].content.hasText('<', '/>')
                        )
                            syntaxHighlightedCode[i].language = 'html';

                        else if (
                            (
                                (
                                    syntaxHighlightedCode[i].content.hasText('/*', '*/') &&
                                    !syntaxHighlightedCode[i].content.hasText('.')
                                ) ||
                                (
                                    syntaxHighlightedCode[i].content.hasText('{', '}') &&
                                    (
                                        syntaxHighlightedCode[i].content.hasText(':') ||
                                        syntaxHighlightedCode[i].content.hasText(':', ';') ||
                                        syntaxHighlightedCode[i].content.hasText('@', ';')
                                    )
                                )
                            ) &&
                            (
                                !syntaxHighlightedCode[i].content.hasText('[') &&
                                !syntaxHighlightedCode[i].content.hasText(']') &&
                                !syntaxHighlightedCode[i].content.hasText('<') &&
                                !syntaxHighlightedCode[i].content.hasText('=>') &&
                                !syntaxHighlightedCode[i].content.hasText('$') &&
                                !syntaxHighlightedCode[i].content.hasText('_') &&
                                !syntaxHighlightedCode[i].content.replace(/\/\*([a-z]|[A-Z]|[0-9]|[\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\*\//g, '').hasText('/') &&
                                !syntaxHighlightedCode[i].content.replace(/\/\*([a-z]|[A-Z]|[0-9]|[\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\*\//g, '').hasText('*')
                            )
                        )
                            syntaxHighlightedCode[i].language = 'css';

                        else if (
                            (
                                (
                                    syntaxHighlightedCode[i].content.hasText('//') ||
                                    syntaxHighlightedCode[i].content.hasText('/*', '*/')
                                ) ||
                                (
                                    syntaxHighlightedCode[i].content.hasText('(', ')') ||
                                    syntaxHighlightedCode[i].content.hasText('[', ']') ||
                                    syntaxHighlightedCode[i].content.hasText('{', '}')
                                ) ||
                                (
                                    syntaxHighlightedCode[i].content.hasText('.') ||
                                    syntaxHighlightedCode[i].content.hasText(',') ||
                                    syntaxHighlightedCode[i].content.hasText(':') ||
                                    syntaxHighlightedCode[i].content.hasText(';') ||
                                    syntaxHighlightedCode[i].content.hasText('?') ||
                                    syntaxHighlightedCode[i].content.hasText('!') ||
                                    syntaxHighlightedCode[i].content.hasText('+') ||
                                    syntaxHighlightedCode[i].content.hasText('-') ||
                                    syntaxHighlightedCode[i].content.hasText('*') ||
                                    syntaxHighlightedCode[i].content.hasText('/') ||
                                    syntaxHighlightedCode[i].content.hasText('<') ||
                                    syntaxHighlightedCode[i].content.hasText('>') ||
                                    syntaxHighlightedCode[i].content.hasText('=') ||
                                    syntaxHighlightedCode[i].content.hasText('$')
                                )
                            ) &&
                            (
                                !syntaxHighlightedCode[i].content.replace(/\/\*([a-z]|[A-Z]|[0-9]|[\'\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\+\,\-\.\;\$\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\*\//g, '').hasText('#') &&
                                !syntaxHighlightedCode[i].content.replace(/\/\*([a-z]|[A-Z]|[0-9]|[\'\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\+\,\-\.\;\$\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\*\//g, '').hasText('^') &&
                                !syntaxHighlightedCode[i].innerHTML.replace(/\/\/([a-z]|[A-Z]|[0-9]|[\'\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\*\(\)\+\,\-\.\;\$\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}(\<span data\-id=('|"|`)newline('|"|`)|\<span)/g, '').replace(/'([a-z]|[A-Z]|[0-9]|[\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}'/g, '').replace(/"([a-z]|[A-Z]|[0-9]|[\'\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}"/g, '').replace(/`([a-z]|[A-Z]|[0-9]|['|"\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}`/g, '').hasText('#') &&
                                !syntaxHighlightedCode[i].innerHTML.replace(/\/\/([a-z]|[A-Z]|[0-9]|[\'\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\*\(\)\+\,\-\.\;\$\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}(\<span data\-id=('|"|`)newline('|"|`)|\<span)/g, '').replace(/'([a-z]|[A-Z]|[0-9]|[\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}'/g, '').replace(/"([a-z]|[A-Z]|[0-9]|[\'\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}"/g, '').replace(/`([a-z]|[A-Z]|[0-9]|['|"\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}`/g, '').hasText('^')
                            )
                        )
                            syntaxHighlightedCode[i].language = 'javascript';

                    // Function > Syntax Highlighted Code
                        // Highlight JavaScript Code
                        (typeof syntaxHighlightedCode[i].highlightJavaScriptCode === 'function') || syntaxHighlightedCode[i].def('highlightJavaScriptCode', {
                            // Value
                            value: function highlightJavaScriptCode(element = 'a'.html) {
                                // Initialization > Random
                                let randomString = str(rand()).replace('.', '');

                                /* Modification > Element > Inner HTML
                                        --- NOTE ---
                                            @lapys:
                                                - Regular Expression Modification List
                                                    -- Highlighted all Arrow Functions (=>)
                                                    -- Highlighted all Potential Breakers (-, +, =).
                                                    -- Highlighted all Comments.
                                                        --- Highlighted all Single-Line Comments.
                                                        --- Highlighted all Multi-Line Comments.
                                                    -- Highlighted all Arithmetic Symbols (Tildes as well).
                                                    -- Highlighted all HTML Entity Identifiers (&lt; &gt;, &amp;, &hellip;).
                                                    -- Highlighted all Symbols.
                                                    -- Highlighted all Numbers.
                                                    -- Highlighted all Strings.
                                                        @lapys: Doing this first prevents all other Highlighted components from breaking.

                                                    -- Highlighted all Numbers.
                                                    -- Highlighted all Identifiers (const, let, var).
                                                    -- Highlighted all Functions (function).
                                                    -- Highlighted all Functions & Methods.
                                                    -- Highlighted all Horizontal Ellipsis.
                                */
                                element.innerHTML = element.innerHTML.replace(/=&gt;/g, `::lapysjs_arrowFunctionIdentifier${randomString}::`).replace(/\-/g, `<span data-id${randomString}highlightColor role${randomString}arithmetic>$&</span>`).replace(/\+/g, `<span data-id${randomString}highlightColor role${randomString}arithmetic>$&</span>`).replace(/=/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(RegExp(`data\\-id${randomString}highlightColor`, 'g'), data => {
                                    // Return
                                    return data.replace(randomString, '=')
                                }).replace(RegExp(`role${randomString}arithmetic`, 'g'), data => {
                                    // Return
                                    return data.replace(randomString, '=')
                                }).replace(/\/\/(.*[^\n])\n/g, `<span data-id=highlightColor role=comment>$&</span>`).replace(/\/\*.*([^\/|^\*])\*\//g, `<span data-id=highlightColor role=comment>$&</span>`).replace(/\\~/g, `<span data-id=tilde role=arithmetic></span>`).replace(/( |[0-9]|[a-z]|[A-Z]|\$|_|\])\//g, data => {
                                    // Return
                                    return `${data.replace('/', '')}<span data-id=highlightColor role=arithmetic>/</span>`
                                }).replace(RegExp(`(|([a-z]|[A-Z]|\\$|_)([a-z]|[A-Z]|[0-9]|\\$|_){1,} )::lapysjs_arrowFunctionIdentifier${randomString}::`, 'g'), data => {
                                    return `${data.hasText(' ') ? (data.getBeforeChar(' ') ? `<span data-id=highlightColor role=name-tag>${data.getBeforeChar(' ')}</span>` : '') : ''}${data.hasText(' ') ? ' ' : ''}<span data-id=highlightColor role=miscellaneous>=></span>`
                                }).replace(/function(| ){0,}([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,}\(([^\(|^\)]){0,}\)(| ){0,}\{/g, data => {
                                    // Return
                                    return `${data.getBeforeChar('(')}(<span data-id=highlightColor role=name-tag>${data.getAfterChar('(').getBeforeChar(')', 1).replace(/,/g, `<span data-id=highlightColor role=plain-text>,</span>`)}</span>)${data.getAfterChar(')', 1)}`
                                }).replace(/&lt;/g, `<span data-id=highlightColor role=arithmetic><</span>`).replace(/&gt;/g, `<span data-id=highlightColor role=arithmetic>></span>`).replace(/&amp;/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/&hellip;/g, '...').replace(/~/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/!/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/\^/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/\*/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/\|/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/:/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/%/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/'(\t|\r|\b|[a-z]|[A-Z]|[0-9]|[\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}'/g, data => {
                                    // Return
                                    return `<span data-id=highlightColor role=string>${data[0]}${data.slice(1, -1)}${data.lastChar}</span>`
                                }).replace(/"(\t|\r|\b|[a-z]|[A-Z]|[0-9]|[\'\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}"/g, data => {
                                    // Return
                                    return `<span data-id=highlightColor role=string>${data[0]}${data.slice(1, -1)}${data.lastChar}</span>`
                                }).replace(/`(\n|\t|\r|\b|[a-z]|[A-Z]|[0-9]|['|"\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}`/g, data => {
                                    // Return
                                    return `<span data-id=highlightColor role=string>${data[0]}${data.slice(1, -1)}${data.lastChar}</span>`
                                }).replace(/[0-9]/g, `<span data-id=highlightColor role=numeral>$&</span>`).replace(/const/g, `<span data-id=highlightColor role=identifier>$&</span>`).replace(/let/g, `<span data-id=highlightColor role=identifier>$&</span>`).replace(/var/g, `<span data-id=highlightColor role=identifier>$&</span>`).replace(/function ([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,}\(/g, data => {
                                    return `<span data-id=highlightColor role=identifier>function</span> <span data-id=highlightColor role=function>${data.slice(len('function '), -len('('))}</span>(`
                                }).replace(/(|([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,})(|\.)([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,}\(/g, data => {
                                    // Return
                                    return `<span data-id=highlightColor role=identifier>${data.getBeforeChar('.').getBeforeChar('(')}</span>${data.hasText('.') ? '.' : ''}<span data-id=highlightColor role=function>${`.${data.getAfterChar('.')}`.replace('.', '').replace('(', '')}</span>(`
                                }).replace(/\.\.\./g, `<span data-id=highlightColor role=comment>$&</span>`)
                            },

                            // Writable
                            writable: false
                        });

                    /* Logic
                            Switch case to
                                Syntax Highlighted Code's Language.

                        > Syntax Highlighted Code > Highlight ([Case]) Code
                    */
                    switch (syntaxHighlightedCode[i].language) {
                        // HTML
                        case 'html':
                            timeout(() => {
                                (syntaxHighlightedCode[i].highlightHTMLCode || (() => {}))(syntaxHighlightedCode[i])
                            });
                            break;

                        // CSS
                        case 'css':
                            timeout(() => {
                                (syntaxHighlightedCode[i].highlightCSSCode || (() => {}))(syntaxHighlightedCode[i])
                            });
                            break;

                        // JavaScript
                        case 'javascript':
                            timeout(() => {
                                (syntaxHighlightedCode[i].highlightJavaScriptCode || (() => {}))(syntaxHighlightedCode[i])
                            })
                    }

                    // Modification > Syntax Highlighted Code > Is Modified
                    syntaxHighlightedCode[i]['LapysJS isModified'] = true
                }

            // Return
            return modifySyntaxHighlightedCode
        };

        // On DOM Ready
        onDOMReady(function() {
            // Modify Syntax Highlighted Code
            modifySyntaxHighlightedCode();

            // Timeout
            timeout(function() {
                // Modify Syntax Highlighted Code
                modifySyntaxHighlightedCode()
            }, (LapysJS.permanentData.pluginScriptDelay || 3000) + (LapysJS.permanentData.pluginScriptDelay / 2 || 1500))
        })
