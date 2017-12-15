/* Classes */
    /* HTML Accordion Component */
    class HTMLAccordionComponent extends HTMLElement {
        // Constructor
        constructor() {
            // Super
            super();

            // Modification > Target
                // Set Timeout
                setTimeout(() => {
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
                // Set Timeout
                setTimeout(() => {
                    // Class
                    this.addClass('carousel');

                    // Data Auto
                    this.attr('data-auto', this.attr('data-auto').trim() || 'right_3')
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
                // Set Timeout
                setTimeout(() => {
                    // Data ID
                    this.setDataAttr('id', 'developerCanvas');

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
                // Set Timeout
                setTimeout(() => {
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
                // Set Timeout
                setTimeout(() => {
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
                // Set Timeout
                setTimeout(() => {
                    // Class
                    this.addClass('jumbotron');

                    // Style > Overflow
                    this.setCSS('overflow', 'hidden')
                })
        }
    };

/* Global Data */
    // Initialization > Processing Initialization Time
    let processingInitializationTime = +date;

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
                    return (arguments[0] || '').toString(16).length == 1 ? `0${(arguments[0] || '').toString(16)}` : (arguments[0] || '').toString(16)
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
                        (colorSequence.length !== 3) || (colorSequence = [
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
                    return `${this.toRGB(arguments[0] || '').replace('rgb', 'rgba').slice(0, -')'.length)}, ${arguments[1] || 1})`
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

    /* CSS */
        // Link
            // LapysJS Stylesheet
            css.link('LapysJSStylesheet', {href: decodeURIComponent(LapysJS.script.src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

            // Base Stylesheet
            css.link('baseStylesheet', {href: decodeURIComponent(($$(`script[src*='base.js'`, 0) || 'script'.html).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

            // Document Stylesheet
                /* Set Timeout
                        --- NOTE ---
                            @lapys: The Document Script may not be defined yet.
                */
                setTimeout(() => {
                    css.link('documentStylesheet', {href: decodeURIComponent(($$('script[data-id=documentScript', 0) || 'script'.html).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'})
                });

    /* Document */
        // Modification
            // Fav Icon
            document.favicon = 'assets/img/ico/icon.ico';

            // Title
            document.title = 'LapysJS';

/* DOM Elements */
    /* <body> */
        // Style > <body> > (Background Color, Color, Font (Family, Size, Style, Variant, Weight), Line Height)
        document.body.setCSS('background-color', app.color.secondaryBackgroundColor);
        document.body.setCSS('color', app.color.secondaryForegroundColor);
        document.body.setCSS('font-family', app.font.family);
        document.body.setCSS('font-size', `${parseNumber(app.font.size)}px`);
        document.body.setCSS('font-style', app.font.style);
        document.body.setCSS('font-variant', app.font.variant);
        document.body.setCSS('font-weight', app.font.weight);
        document.body.setCSS('line-height', app.font.lineHeight);

    /* <accordion-component> */
        // Registration
        registerElement('accordion-component', HTMLAccordionComponent);

    /* <carousel-component> */
        // Registration
        registerElement('carousel-component', HTMLCarouselComponent);

    /* <developer-canvas> */
        // Registration
        registerElement('developer-canvas', HTMLDeveloperCanvasElement);

    /* <dropdown-component> */
        // Registration
        registerElement('dropdown-component', HTMLDropdownComponent);

    /* <dynamic-text-component> */
        // Registration
        registerElement('dynamic-text-component', HTMLDynamicTextComponent);

    /* <jumbotron-element> */
        // Registration
        registerElement('jumbotron-element', HTMLJumbotronElement);

/* Components */
    /* Syntax Highlighted */
        // Function > Modify Syntax Highlighted Code
        global.modifySyntaxHighlightedCode = func();

        // On DOM Ready
        onDOMReady(modifySyntaxHighlightedCode = function modifySyntaxHighlightedCode() {
            // Initialization > Syntax Highlighted Code
            let syntaxHighlightedCode = $$('code.syntax-highlighted', 'array');

            /* Loop
                    Index all Syntax Highlighted Code.
            */
            for (let i = 0; i < syntaxHighlightedCode.length; i += 1) {
                for (let j = syntaxHighlightedCode[i].$$('[data-id=highlightColor', '~length'); j > -1; j -= 1)
                    syntaxHighlightedCode[i].$$('[data-id=highlightColor', j).outerHTML = syntaxHighlightedCode[i].$$('[data-id=highlightColor', j).innerHTML;

                // Modification > Syntax Highlighted Code
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
                    });

                    // Spell Check
                    syntaxHighlightedCode[i].spellcheck = false;

                    // Inner HTML
                    (syntaxHighlightedCode[i].innerHTML[0] !== '\n') || (syntaxHighlightedCode[i].innerHTML = syntaxHighlightedCode[i].innerHTML.replace('\n', ''));
                        /* Set Timeout
                                --- NOTE ---
                                    @lapys: Allow all proper highlighting,
                                        if any to be done.

                                        - Regular Expression Modification List
                                            -- Replaced all Tildes with 'Tabs'.
                                            -- Ensured newline at the End of Code.
                                                @lapys: Not really Regular Expression but it is still nice.
                        */
                        setTimeout(() => {
                            syntaxHighlightedCode[i].innerHTML = syntaxHighlightedCode[i].innerHTML.replace(/~/g, data => {
                                // Return
                                return `<span data-id=tab style='color: transparent !important'>${'*'.repeat(+syntaxHighlightedCode[i].tabSpacing || 4)}</span>`
                            }).replace(/\n/g, `<span data-id=newline><br></span>`);

                            !syntaxHighlightedCode[i].format.hasElement('ensure-newline-at-eof') || (typeof syntaxHighlightedCode[i].$$('[data-id=newline', (syntaxHighlightedCode[i].$$('[data-id=newline', '~length')).previousElementSibling).attr === 'function' ? syntaxHighlightedCode[i].$$('[data-id=newline', (syntaxHighlightedCode[i].$$('[data-id=newline', '~length')).previousElementSibling).attr('data-id') === 'newline' : false) || (syntaxHighlightedCode[i].$$('[data-id=newline', syntaxHighlightedCode[i].$$('[data-id=newline', '~length')).innerHTML = `<br><br>`)
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
                            }).replace(/&lt;/g, `<span data-id=highlightColor role=arithmetic><</span>`).replace(/&gt;/g, `<span data-id=highlightColor role=arithmetic>></span>`).replace(/&amp;/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/&hellip;/g, '...').replace(/~/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/!/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/\*/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/\|/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/:/g, `<span data-id=highlightColor role=symbol>$&</span>`).replace(/%/g, `<span data-id=highlightColor role=arithmetic>$&</span>`).replace(/'([a-z]|[A-Z]|[0-9]|[\"\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}'/g, data => {
                                // Return
                                return `<span data-id=highlightColor role=string>${data[0]}${data.slice(1, -1)}${data.lastChar}</span>`
                            }).replace(/"([a-z]|[A-Z]|[0-9]|[\'\`\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}"/g, data => {
                                // Return
                                return `<span data-id=highlightColor role=string>${data[0]}${data.slice(1, -1)}${data.lastChar}</span>`
                            }).replace(/`([a-z]|[A-Z]|[0-9]|['|"\\\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}`/g, data => {
                                // Return
                                return `<span data-id=highlightColor role=string>${data[0]}${data.slice(1, -1)}${data.lastChar}</span>`
                            }).replace(/[0-9]/g, `<span data-id=highlightColor role=numeral>$&</span>`).replace(/const/g, `<span data-id=highlightColor role=identifier>$&</span>`).replace(/let/g, `<span data-id=highlightColor role=identifier>$&</span>`).replace(/var/g, `<span data-id=highlightColor role=identifier>$&</span>`).replace(/function ([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,}\(/g, data => {
                                return `<span data-id=highlightColor role=identifier>function</span> <span data-id=highlightColor role=function>${data.slice('function '.length, -'('.length)}</span>(`
                            }).replace(/(|([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,})(|\.)([a-z]|[A-Z]|\$|_)([a-z]|[A-Z]|[0-9]|\$|_){1,}\(/g, data => {
                                // Return
                                return `<span data-id=highlightColor role=identifier>${data.getBeforeChar('.').getBeforeChar('(')}</span>${data.hasText('.') ? '.' : ''}<span data-id=highlightColor role=function>${`.${data.getAfterChar('.')}`.replace('.', '').replace('(', '')}</span>(`
                            }).replace(/\.\.\./g, `<span data-id=highlightColor role=comment>$&</span>`);

                            /* Loop
                                    Index all the Element's Comments.
                            */
                            for (let i = 0; i < element.$$('[data-id=highlightColor][role=comment', 'length'); i += 1)
                                /* Loop
                                        While
                                            the Element's Comment still has a non-Comment child element.

                                    > Deletion
                                */
                                while (element.$$('[data-id=highlightColor][role=comment', i).$$(':not([role=comment])', 0))
                                    element.$$('[data-id=highlightColor][role=comment', i).$$(':not([role=comment])', 0).outerHTML = element.$$('[data-id=highlightColor][role=comment', i).$$(':not([role=comment])', 0).innerHTML
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
                        setTimeout(() => {
                            (syntaxHighlightedCode[i].highlightHTMLCode || (() => {}))(syntaxHighlightedCode[i])
                        });
                        break;

                    // CSS
                    case 'css':
                        setTimeout(() => {
                            (syntaxHighlightedCode[i].highlightCSSCode || (() => {}))(syntaxHighlightedCode[i])
                        });
                        break;

                    // JavaScript
                    case 'javascript':
                        setTimeout(() => {
                            (syntaxHighlightedCode[i].highlightJavaScriptCode || (() => {}))(syntaxHighlightedCode[i])
                        })
                }
            }
        }, 100)
