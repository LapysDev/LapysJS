/**
    @author: Lapys Dev Team
    @description: App JS is a web framework for configuring web pages to perform more like mobile apps.
    @version: 0.0.1

    --- WARN ---
        @lapys: Current issues to fix:
            - This script requires the LapysJS library to function,
            - This script needs to run before the LapysJS Plug-In Script Delay.
*/
(function AppJSScript(window = window.parent, document = window.parent.document, global = window.parent, undefined = window.parent.undefined || void 0) {
    /* Logic
            [if:else if:else statement]
    */
    if ('ready' in window.LapysJS) {
        /* Global Data */
            /* Application */
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

                // Name
                app.name = app.name || 'Name of the Application.';

                // Robots
                app.robots = app.robots || 'none';

                // Theme Color
                app.themeColor = app.themeColor || 'rgba(0, 0, 0, 0)';

                // Viewport
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (global.RESPONSIVE_VIEW === !0) {
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

            /* CSS */
                // Style
                    // Error Handling
                    try {
                        !eval(getQueryParameterByName('revealElementsBoundingBox')) || css.style('revealElementsBoundingBoxOptionsStylesheet', ':nth-child(odd) { outline: 1px solid blue } :nth-child(even) { outline: 1px solid red }')
                    }

                    catch (error) {
                        (getQueryParameterByName('revealElementsBoundingBox') != 'true') || css.style('revealElementsBoundingBoxOptionsStylesheet', ':nth-child(odd) { outline: 1px solid blue } :nth-child(even) { outline: 1px solid red }')
                    }

            /* Document */
                // Favorite Icon
                !document.favicon[0] || (document.favicon = 'favicon.ico');

        /* Classes */
            /* HTML Accordion Component */
            def('HTMLAccordionComponent', {
                // Value
                value: class HTMLAccordionComponent extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('accordion-component', '.accordion[data-event-type=click')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Class
                        this.addClass('accordion')
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Block List Component */
            def('HTMLBlockListComponent', {
                // Value
                value: class HTMLBlockListComponent extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('block-list', '.block-list')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Class
                        this.addClass('block-list')
                    }
                }
            });

            /* HTML Button Container */
            def('HTMLButtonContainer', {
                // Value
                value: class HTMLButtonContainer extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return 'button-container'.html
                    }
                }
            });

            /* HTML Carousel Component */
            def('HTMLCarouselComponent', {
                // Value
                value: class HTMLCarouselComponent extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('carousel-component', '.carousel[data-buttons][data-indicators')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Class
                        this.addClass('carousel')
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Dialog Component */
            def('HTMLDialogComponent', {
                // Value
                value: class HTMLDialogComponent extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('dialog-component', '.dialog')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Class
                        this.addClass('dialog')
                    }
                },

                // Writable
                writable: !1
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
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('dropdown-component', '.dropdown[data-event-type=click')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Class
                        this.addClass('dropdown')
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML DynamicText Component */
            def('HTMLDynamicTextComponent', {
                // Value
                value: class HTMLDynamicTextComponent extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('dynamic-text-component', '.dynamic-text')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Class
                        this.addClass('dynamic-text')
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Hyperlink Button */
            def('HTMLHyperlinkButton', {
                // Value
                value: class HTMLHyperlinkButton extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return 'hyperlink-button'.html
                    };

                    connectedCallback() {
                        // Modification > Target
                            // Hyperlink Reference
                            this.def('href', {
                                // Get
                                get: function() {
                                    // Return
                                    return this.attr('href')
                                },

                                // Set
                                set: function() {
                                    // Modification > Target > Hyperlink Reference
                                    this.setAttr('href', arguments[0])
                                }
                            });

                            // Target
                            this.def('target', {
                                // Get
                                get: function() {
                                    // Return
                                    return this.attr('target')
                                },

                                // Set
                                set: function() {
                                    // Modification > Target > Target
                                    this.setAttr('target', arguments[0])
                                }
                            })

                        // Event > Target > Click
                        this.setEvent('click', function() {
                            // LapsyJS > $ > Anchor
                            LapysJS.$.anchor(this.href, {target: str(this.target) || this.attr('target') || '_self'})
                        })
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Icon Element */
            def('HTMLIconElement', {
                // Value
                value: class HTMLIconElement extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return 'icon-element'.html
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target > Icon
                        this.def('icon', {
                            // Get
                            get: function() {
                                // Return
                                return this.$t('img', 0)
                            },

                            // Set
                            set: function() {
                                // Insertion
                                this.$t('img', 0) || this.insertChild('end', 'img'.html);

                                // Modification > (Target > <img>) > Source
                                this.$t('img', 0).src = arguments[0]
                            }
                        })
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Menu Button */
            def('HTMLMenuButton', {
                // Value
                value: class HTMLMenuButton extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return 'menu-button'.html
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Jumbotron Element */
            def('HTMLJumbotronElement', {
                // Value
                value: class HTMLJumbotronElement extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('jumbotron-element', '.jumbotron')
                    };

                    // Connected Callback
                    connectedCallback() {
                        // Modification > Target
                            // Sections
                            this.def('sections', {
                                // Get
                                get: function() {
                                    // Initialization > (Target, Data)
                                    let that = this,
                                        data = [...that._$('[data-id=bottomSection], [data-id=midSection], [data-id=topSection]', 'array')];

                                    // Modification > Data
                                        // Bottom
                                        data.def('bottom', {
                                            // Get
                                            get: function() {
                                                // Return
                                                return that._$('[data-id=bottomSection', 0)
                                            }
                                        });

                                        // Middle
                                        data.def('mid', {
                                            // Get
                                            get: function() {
                                                // Return
                                                return that._$('[data-id=midSection', 0)
                                            }
                                        });

                                        // Top
                                        data.def('top', {
                                            // Get
                                            get: function() {
                                                // Return
                                                return that._$('[data-id=topSection', 0)
                                            }
                                        });

                                    // Return
                                    return data
                                }
                            });

                            // Bottom Section
                            this.def('bottomSection', {
                                // Get
                                get: function() {
                                    // Return
                                    return this.sections.bottom
                                }
                            });
                                // Foot
                                this.def('foot', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.bottomSection
                                    }
                                });

                            // Middle Section
                            this.def('midSection', {
                                // Get
                                get: function() {
                                    // Return
                                    return this.sections.mid
                                }
                            });
                                // Body
                                this.def('body', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.midSection
                                    }
                                });

                            // Top Section
                            this.def('topSection', {
                                // Get
                                get: function() {
                                    // Return
                                    return this.sections.top
                                }
                            });
                                // Head
                                this.def('head', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.topSection
                                    }
                                });

                            // Class
                            this.addClass('jumbotron');

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while (this._$('[data-id=bottomSection', 1))
                            this._$('[data-id=bottomSection', 1).delete();

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while (this._$('[data-id=midSection', 1))
                            this._$('[data-id=midSection', 1).delete();

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while (this._$('[data-id=topSection', 1))
                            this._$('[data-id=topSection', 1).delete()
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Search Button */
            def('HTMLSearchButton', {
                // Value
                value: class HTMLSearchButton extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return 'search-button'.html
                    }
                },

                // Writable
                writable: !1
            });

            /* HTML Sound Effect Element */
            def('HTMLSoundEffectElement', {
                // Value
                value: class HTMLSoundEffectElement extends HTMLElement {
                    // Constructor
                    constructor() {
                        /* Logic
                                If
                                    CustomElementRegistry is valid.
                        */
                        if (registerElement()) {
                            // Super
                            super();

                            // Return
                            return
                        }

                        // Return
                        return createElement('sound-effect', '', '<audio> </audio>')
                    };

                    // Connected Callback
                    connectedCallback() {
                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while (this.children[1])
                            this.children[1].delete();

                        // Insertion
                        this.$t('audio', 0) || this.insertChild('end', 'audio'.html);

                        // Modification > Target > Audio
                        this.def('audio', {
                            // Get
                            get: function() {
                                // Return
                                return this.$t('audio', 0)
                            },

                            // Set
                            set: function() {
                                // Insertion
                                this.$t('audio', 0) || this.insertChild('end', 'audio'.html);

                                // Modification > (Target > <audio>) > Source
                                this.$t('audio', 0).src = str(arguments[0])
                            }
                        })
                    }
                }
            });

        /* DOM Elements */
            /* <accordion-component> */
                // Registration
                !registerElement() || registerElement('accordion-component', HTMLAccordionComponent);

                // Function > Evaluate Accordion Component
                function evaluateAccordionComponent() {
                    /* Loop
                            Index <accordion-component>.
                    */
                    while ($$('accordion-component:not(.accordion)', 0))
                        // Modification > <accordion-component> > Class
                        $$('accordion-component:not(.accordion)', 0).addClass('accordion')
                };
                registerElement() || evaluateAccordionComponent()
                registerElement() || onDOMNodeAdded(evaluateAccordionComponent);
                registerElement() || onDOMReady(evaluateAccordionComponent);

                // Timeout
                timeout(LapysJS.script.scriptNewAccordion, LapysJS.permanentData.pluginScriptDelay || (3e3 + 100))

            /* <block-list> */
                // Registration
                !registerElement() || registerElement('block-list', HTMLBlockListComponent);

                // Function > Evaluate Block List Component
                function evaluateBlockListComponent() {
                    /* Loop
                            Index <block-list>.

                        > Modification > <block-list>
                    */
                    while ($$('block-list:not(.block-list)', 0))
                        // Class
                        $$('block-list:not(.block-list)', 0).addClass('block-list')
                };
                registerElement() || evaluateBlockListComponent();
                registerElement() || onDOMNodeAdded(evaluateBlockListComponent);
                registerElement() || onDOMReady(evaluateBlockListComponent);

            /* <button-container> */
                // Registration
                !registerElement() || registerElement('button-container', HTMLButtonContainer);

            /* <carousel-component> */
                /* Loop
                        Index <carousel-component>.

                    > Modification > <carousel-component>
                */
                while ($$('carousel-component:not(.carousel)', 0))
                    // Class
                    $$('carousel-component:not(.carousel)', 0).addClass('carousel');

                // Registration
                !registerElement() || registerElement('carousel-component', HTMLCarouselComponent);

                // Function > Evaluate Carousel Component
                function evaluateCarouselComponent() {
                    /* Loop
                            Index <carousel-component>.

                        > Modification > <carousel-component>
                    */
                    while ($$('carousel-component:not(.carousel)', 0))
                        // Class
                        $$('carousel-component:not(.carousel)', 0).addClass('carousel')
                };
                registerElement() || evaluateCarouselComponent();
                registerElement() || onDOMNodeAdded(evaluateCarouselComponent);
                registerElement() || onDOMReady(evaluateCarouselComponent);

                // Timeout
                timeout(LapysJS.script.scriptCarousel, LapysJS.permanentData.pluginScriptDelay || (3e3 + 100))

            /* <dialog-component> */
                // Registration
                !registerElement() || registerElement('dialog-component', HTMLDialogComponent);

                // Function > Evaluate Dialog Component
                function evaluateDialogComponent() {
                    /* Loop
                            Index <dialog-component>.

                        > Modification > <dialog-component>
                    */
                    while ($$('dialog-component:not(.dialog)', 0))
                        // Class
                        $$('dialog-component:not(.dialog)', 0).addClass('dialog')
                };
                registerElement() || evaluateDialogComponent();
                registerElement() || onDOMNodeAdded(evaluateDialogComponent);
                registerElement() || onDOMReady(evaluateDialogComponent);

            /* <dropdown-component> */
                // Registration
                !registerElement() || registerElement('dropdown-component', HTMLDropdownComponent);

                // Function > Evaluate Dropdown Component
                function evaluateDropdownComponent() {
                    /* Loop
                            Index <dropdown-component>.

                        > Modification > <dropdown-component>
                    */
                    while ($$('dropdown-component:not(.dropdown)', 0))
                        // Class
                        $$('dropdown-component:not(.dropdown)', 0).addClass('dropdown')
                }
                registerElement() || evaluateDropdownComponent();
                registerElement() || onDOMNodeAdded(evaluateDropdownComponent);
                registerElement() || onDOMReady(evaluateDropdownComponent);

                // Timeout
                timeout(LapysJS.script.scriptNewDropdown, LapysJS.permanentData.pluginScriptDelay || (3e3 + 100))

            /* <dynamic-text-component> */
                // Registration
                !registerElement() || registerElement('dynamic-text-component', HTMLDynamicTextComponent);

                // Function > Evaluate Dynamic Text Component
                function evaluateDynamicTextComponent() {
                    /* Loop
                            Index <dynamic-text-component>.

                        > Modification > <dynamic-text-component>
                    */
                    while ($$('dynamic-text-component:not(.dynamic-text)', 0))
                        // Class
                        $$('dynamic-text-component:not(.dynamic-text)', 0).addClass('dynamic-text')
                };
                registerElement() || evaluateDynamicTextComponent();
                registerElement() || onDOMNodeAdded(evaluateDynamicTextComponent);
                registerElement() || onDOMReady(evaluateDynamicTextComponent);

                // Timeout
                timeout(LapysJS.script.scriptDynamicText, LapysJS.permanentData.pluginScriptDelay || (3e3 + 100))

            /* <hyperlink-button> */
                // Registration
                !registerElement() || registerElement('hyperlink-button', HTMLHyperlinkButton);

                // Function > Evaluate Hyperlink Button
                function evaluateHyperlinkButton() {
                    // Repeat
                    repeat(function(index) {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!$t('hyperlink-button', index)['LapysJS isModified']) {
                            // Event > <hyperlink-reference> > Click
                            $t('hyperlink-button', index).setEvent('click', function() {
                                // LapysJS > $ > Anchor
                                LapysJS.$.anchor(this.href, {target: str(this.target) || this.attr('target') || '_self'})
                            });

                            // Modification > <hyperlink-button>
                                // Hyperlink Reference
                                $t('hyperlink-button', index).hasProperty('href') || $t('hyperlink-button', index).def('href', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.attr('href')
                                    },

                                    // Set
                                    set: function() {
                                        // Modification > Target > Hyperlink Reference
                                        this.setAttr('href', arguments[0])
                                    }
                                });

                                // Target
                                $t('hyperlink-button', index).hasProperty('target') || $t('hyperlink-button', index).def('target', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.attr('target')
                                    },

                                    // Set
                                    set: function() {
                                        // Modification > Target > Target
                                        this.setAttr('target', arguments[0])
                                    }
                                });

                                // Is Modified
                                $t('hyperlink-button', index)['LapysJS isModified'] = true
                        }
                    }, $t('hyperlink-button', 'length'))
                };
                registerElement() || evaluateHyperlinkButton();
                registerElement() || onDOMNodeAdded(evaluateHyperlinkButton);
                registerElement() || onDOMReady(evaluateHyperlinkButton);

            /* <icon-element> */
                // Registration
                !registerElement() || registerElement('icon-element', HTMLIconElement);

                // Function > Evaluate Icon Element
                function evaluateIconElement() {
                    // Repeat
                    repeat(function(index) {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!$t('icon-element', index)['LapysJS isModified']) {
                            // Modification > <icon-element>
                                // Icon
                                $t('icon-element', index).hasProperty('icon') || $t('icon-element', index).def('icon', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.$t('img', 0)
                                    },

                                    // Set
                                    set: function() {
                                        // Insertion
                                        this.$t('img', 0) || this.insertChild('end', 'img'.html);

                                        // Modification > (Target > <img>) > Source
                                        this.$t('img', 0).src = arguments[0]
                                    }
                                });

                                // Is Modified
                                $t('icon-element', index)['LapysJS isModified'] = true
                        }

                        /* Logic
                                [if:else if:else statement]
                        */
                        if ($t('icon-element', index).hasAttr('src') || getType($t('icon-element', index).src) == 'string') {
                            // Modification > (<icon-element> > Icon) > Source
                            !($t('icon-element', index).attr('src') || $t('icon-element', index).src).trim() || ($t('icon-element', index).icon = $t('icon-element', index).attr('src') || $t('icon-element', index).src);

                            // Modification > <icon-element> > Source
                            $t('icon-element', index).delAttr('src');
                            $t('icon-element', index).src = ''
                        }
                    }, $t('icon-element', 'length'))
                };
                registerElement() || evaluateIconElement();
                registerElement() || onDOMNodeAdded(evaluateIconElement);
                registerElement() || onDOMReady(evaluateIconElement);

            /* <menu-button> */
                // Registration
                !registerElement() || registerElement('menu-button', HTMLMenuButton);

            /* <jumbotron-element> */
                // Registration
                !registerElement() || registerElement('jumbotron-element', HTMLJumbotronElement);

                // Function > Evaluate Jumbotron Element
                function evaluateJumbotronElement() {
                    // Repeat
                    repeat(function(index) {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!$$('jumbotron-element:not(.jumbotron)', index)['LapysJS isModified']) {
                            // Modification > Target
                                // Sections
                                $$('jumbotron-element:not(.jumbotron)', index).def('sections', {
                                    // Get
                                    get: function() {
                                        // Initialization > (Target, Data)
                                        let that = this,
                                            data = [...that._$('[data-id=bottomSection], [data-id=midSection], [data-id=topSection]', 'array')];

                                        // Modification > Data
                                            // Bottom
                                            data.def('bottom', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return that._$('[data-id=bottomSection', 0)
                                                }
                                            });

                                            // Middle
                                            data.def('mid', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return that._$('[data-id=midSection', 0)
                                                }
                                            });

                                            // Top
                                            data.def('top', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return that._$('[data-id=topSection', 0)
                                                }
                                            });

                                        // Return
                                        return data
                                    }
                                });

                                // Bottom Section
                                $$('jumbotron-element:not(.jumbotron)', index).def('bottomSection', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.sections.bottom
                                    }
                                });
                                    // Foot
                                    this.def('foot', {
                                        // Get
                                        get: function() {
                                            // Return
                                            return this.bottomSection
                                        }
                                    });

                                // Middle Section
                                $$('jumbotron-element:not(.jumbotron)', index).def('midSection', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.sections.mid
                                    }
                                });
                                    // Body
                                    this.def('body', {
                                        // Get
                                        get: function() {
                                            // Return
                                            return this.midSection
                                        }
                                    });

                                // Top Section
                                $$('jumbotron-element:not(.jumbotron)', index).def('topSection', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.sections.top
                                    }
                                });
                                    // Head
                                    this.def('head', {
                                        // Get
                                        get: function() {
                                            // Return
                                            return this.topSection
                                        }
                                    });

                                // Is Modified
                                $$('jumbotron-element:not(.jumbotron)', index)['LapysJS isModified'] = true;

                            /* Loop
                                    [do:while statement]

                                > Deletion
                            */
                            while ($$('jumbotron-element:not(.jumbotron)', index)._$('[data-id=bottomSection', 1))
                                this._$('[data-id=bottomSection', 1).delete();

                            /* Loop
                                    [do:while statement]

                                > Deletion
                            */
                            while ($$('jumbotron-element:not(.jumbotron)', index)._$('[data-id=midSection', 1))
                                this._$('[data-id=midSection', 1).delete();

                            /* Loop
                                    [do:while statement]

                                > Deletion
                            */
                            while ($$('jumbotron-element:not(.jumbotron)', index)._$('[data-id=topSection', 1))
                                this._$('[data-id=topSection', 1).delete();

                            // Modification > <jumbotron-element> > Class
                            $$('jumbotron-element:not(.jumbotron)', index).addClass('jumbotron')
                        }
                    }, $$('jumbotron-element:not(.jumbotron)', 'length'))
                };
                registerElement() || evaluateJumbotronElement();
                registerElement() || onDOMNodeAdded(evaluateJumbotronElement);
                registerElement() || onDOMReady(evaluateJumbotronElement);

            /* <search-button> */
                // Registration
                !registerElement() || registerElement('search-button', HTMLSearchButton);

            /* <sound-effect> */
                // Registration
                !registerElement() || registerElement('sound-effect', HTMLSoundEffectElement);

                // Function > Evaluate Sound Effect
                function evaluateSoundEffect() {
                    // Repeat
                    repeat(function(index) {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!$t('sound-effect', index)['LapysJS isModified']) {
                            // Insertion
                            $t('sound-effect', index).$t('audio', 0) || $t('sound-effect', index).insertChild('end', 'audio'.html);

                            // Modification > <sound-effect>
                                // Audio
                                $t('sound-effect', index).def('audio', {
                                    // Get
                                    get: function() {
                                        // Return
                                        return this.$t('audio', 0)
                                    }
                                });

                                // Pause
                                $t('sound-effect', index).def('pause', {
                                    // Value
                                    value: function pause() {
                                        // Target > Audio > Pause
                                        this.audio.pause()
                                    },

                                    // Writable
                                    writable: false
                                });

                                // Play
                                $t('sound-effect', index).def('play', {
                                    // Value
                                    value: function play() {
                                        // Target > Audio > Play
                                        this.audio.play();

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (getType(arguments[0]) == 'number') {
                                            // Target > Audio > Play
                                            this.audio.play();

                                            // Event > (Target > Audio) > Playing
                                            this.audio.attr('onplaying', `(this.currentTime < ${arguments[0] + 1}) || this.parent.stop()`)
                                        }
                                    },

                                    // Writable
                                    writable: false
                                });

                                // Stop
                                $t('sound-effect', index).def('stop', {
                                    // Value
                                    value: function stop() {
                                        // Target > Pause
                                        this.pause();

                                        // Modification > Target > Audio > Current Time
                                        this.audio.currentTime = 0
                                    },

                                    // Writable
                                    writable: false
                                });
                                    // Source
                                    $t('sound-effect', index).audio.src = $t('sound-effect', index).attr('src') || $t('sound-effect', index).src || '';

                                    // Volume
                                    $t('sound-effect', index).audio.volume = 1;

                                // Hidden
                                $t('sound-effect', index).hidden = true;

                            // Event > (<sound-effect> > Audio) > Playing
                            $t('sound-effect', index).audio.setEvent('playing', function() {
                                // Target > Parent > Stop
                                (this.currentTime < 31) || this.parent.stop()
                            });

                            // Modification > <sound-effect> > Is Modified
                            $t('sound-effect', index)['LapysJS isModified'] = true
                        }
                    }, $t('sound-effect', 'length'))
                };
                registerElement() || evaluateSoundEffect();
                registerElement() || onDOMNodeAdded(evaluateSoundEffect);
                registerElement() || onDOMReady(evaluateSoundEffect);

        /* Event */
            /* <body> */
                // Click
                !global.CLICK_COMMAND || document.documentElement.setEvent(getProperty('CLICK_COMMAND_SEQUENCE') || 'dblclick', function() {
                    // Invoke Fullscreen
                    getProperty('CLICK_COMMAND_FUNCTION') ? (getType('CLICK_COMMAND_FUNCTION') == 'function' ? CLICK_COMMAND_FUNCTION.apply(global, getType('CLICK_COMMAND_FUNCTION_ARGS') == 'array' ? [...CLICK_COMMAND_FUNCTION_ARGS] : []) : CLICK_COMMAND_FUNCTION) : invokeFullscreen(true)
                });

                // Key Up
                !global.KEY_COMMAND || document.body.setEvent(getProperty('KEY_COMMAND_SEQUENCE') || 'keyup', function(event) {
                    /* Logic
                            [switch:case:default statement]
                    */
                    switch (event.code) {
                        // Escape
                        case 'Escape':
                            // Invoke Fullscreen
                            !!global.KEY_COMMAND_DISALLOW_ESCAPE_FULLSCREEN || !$$('[data-fullscreen', 0) || invokeFullscreen(true);
                            break;

                        // Key F
                        case 'KeyF':
                            // Invoke Fullscreen
                            !!global.KEY_COMMAND_DISALLOW_TOGGLE_FULLSCREEN || invokeFullscreen(true);
                            break;

                        // Space
                        case 'Space':
                            // Key Command Function
                            !!global.KEY_COMMAND_DISALLOW_UNIQUE_FUNCTION || (getProperty('KEY_COMMAND_FUNCTION') ? (getType('KEY_COMMAND_FUNCTION') == 'function' ? KEY_COMMAND_FUNCTION.apply(global, getType('KEY_COMMAND_FUNCTION_ARGS') == 'array' ? [...KEY_COMMAND_FUNCTION_ARGS] : []) : KEY_COMMAND_FUNCTION) : false)
                    }
                });

        /* Function */
            /* Clear */
            (getType(global.CLEAR) == 'function') || def('CLEAR', {
                // Get
                get: function CLEAR() {
                    // Clear
                    clear();

                    // Return
                    return clear
                },

                // Set
                set: func()
            })
    }

    else {
        /* Initialization > (Data, Metadata)
                --- NOTE ---
                    @lapys: Prevent compressors and minifiers from redacting the name of the Error.
        */
        let data = 'AppJSScriptError',
            metadata = `Can not find the 'LapysJSScript' module.\n\tPlease download the library if missing at 'https://github.com/LapysDev/LapysJS'`;

        // Error Handling
        try {
            // Execution
            eval(`throw new (class ${data} extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,${data})}})('[App JS] => ${metadata}\r')`)
        }

        catch (error) {
            // Error Handling
            try {
                // Execution
                eval(`throw new (class ${data} extends Error {})('\n[App JS] => ${metadata}\r')`)
            }

            catch (error) {
                // Error Handling
                try {
                    // Throw
                    throw new (class AppJSScriptError extends Error {
                        // Constructor
                        constructor() {
                            // Super
                            super([...arguments]);

                            // Error > Capture Stack Trace
                            Error.captureStackTrace(this, AppJSScriptError)
                        }
                    })(`[App JS] => ${metadata}\r`)
                }

                catch (error) {
                    // Error Handling
                    try {
                        // Throw
                        throw new (class AppJSScriptError extends Error {})(`[App JS] => ${metadata}\r`)
                    }

                    catch (error) {
                        // Console > Error
                        console.error(`[App JS] => ${metadata}\r`)
                    }
                }
            }
        }
    }
})(window, document, window.global || null, void 0)
