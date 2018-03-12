/* {Global Object Test} Logic
        If
            LapysJS is ready.
*/
if (typeof LapysJS == 'object' && (LapysJS || new (function Data() {})).ready === true) {
    /* Global Data */
        // Document > Title
        document.title = [document.title, app.name.getAfterChar('|')].join(' | ').replace(/  /g, ' ').trim().capital();

        // LapysJS > Temporary Data
        LapysJS.tmp = {message: 'Document Script installed.', script: document.currentScript};

    /* Functions */
        // Add Class List
        addClassList('Size: Page', 'fill-w fill-h min-full-h');

        // Interval
        !LapysJS.vendors.hasElement('appJS') || interval(function changeAppJSScreenCoverView() {
            // Initialization > Data
            let data = LapysJS.vendors.appJS.screenCover;

            // Modification > Data > Hidden
            !data || (data.hidden = innerHeight < 320 || innerWidth < 320 ? true : false)
        }, LapysJS.vendors.appJS.tickSpeed || 1e3);

        // On Node Change
        onNodeChange($1, function() {
            // Repeat
            repeat(function correctActivatePageSectionIndex(index, limit, data, key, value) {
                // Event > Value > Focus
                value.setEvent('focus', function() {
                    // Timeout
                    timeout(resetPageSection, 300)
                })
            }, $$('a, button', 'array'))
        });

        // On DOM Ready
        onDOMReady(function() {
            /* Global Data */
                // Active Page Section Index
                let activePageSectionIndex = 0;

                // Is Scrolling
                let isScrolling = false;

                // Touch Section (X, Y)
                let touchSectionX = 0,
                    touchSectionY = 0;

            /* Assets */
                // Preset Classes
                    // Repeat
                    repeat(function importPresetClasses(index, limit, data, key, value) {
                        // Modification > Value > Page Section
                        value.setAttr('page-section', index);

                        // Set Class List
                        setClassList('Size: Page', value)
                    }, document.main.children);

            /* Components */
                // Features
                    // Repeat
                    repeat(function identifyFeatures(index, limit, data, keys, value) {
                        // Initialization > Metadata
                        let metadata = value._$('[data-id=header', 0).innerText.removeChar(/ |\n/g).replace(/[A-Z]{2,}/g, data => {
                            // Return
                            return data.lower()
                        }).replace(/[A-Z]/g, data => {
                            // Return
                            return '-' + data.lower()
                        }).lower();

                        // Modification > Value > ID
                        $i(metadata) ? value.id = metadata + '_' + $i(metadata, '~length') : value.id = metadata
                    }, $$('#features > [role=container', 0)._$('*', 'array'));

                // Jumbotron
                    // Container
                        // Header
                        $i('jumbotron').$$('[role=container] > [data-id=header').innerHTML = (function() {
                            // Initialization > (Data, Metadata)
                            let data = app.name.getBeforeChar('|').trim().capital().camel(),
                                metadata = data.getBeforeChar(/[A-Z]/);

                            // Update > Data
                            data = '<span data-id=0>' + metadata.capital() + '</span><span data-id=1>' + data.removeChar(metadata).capital() + '</span>';

                            // Return
                            return data
                        })();

                        // Sub Header
                        $i('jumbotron').$$('[role=container] > [data-id=subheader').innerHTML = app.name.getAfterChar('|').trim();

                    // Container
                        // Call To Action B > <a>
                            // Event > Mouse (Leave, Over)
                            $i('jumbotron').$$('[role=container] > button[data-id=callToActionB] > a').setEvent('blur focus mouseleave mouseover', function innerParticles(event) {
                                // Initialization > Target
                                let that = this;

                                // Timeout
                                timeout(function() {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (event.type == 'blur' || event.type == 'mouseleave')
                                        // Check
                                        check(function() {
                                            // Return
                                            return !len(that.children)
                                        }, function() {
                                            // Style > Target > Overflow
                                            that.delStyle('overflow')
                                        }, function() {
                                            // Deletion
                                            that.lastElementChild.delete()
                                        });

                                    else if (event.type == 'focus' || event.type == 'mouseover')
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (innerWidth > 768 && !len(that.children)) {
                                            // Initialization > Data
                                            let data = createElement('div', '.absolute.no-overflow.z-0[role=container', '<div id=particles-js> </div>');

                                            // Insertion
                                            that.insertChild('end', data);

                                            // Style > Target > Overflow
                                            that.setCSS('overflow', 'hidden');

                                            // Initialization > Data
                                            let _data = data.parentElement;

                                            // Style > Data
                                            data.setCSS({
                                                // Height
                                                height: _data.height,

                                                // Margin
                                                margin: 'auto',

                                                // Transform
                                                transform: 'translate(-' + _data.getCSS('padding-left') + ', -' + (_data.height - num(_data.getCSS('padding-top'))) + 'px)',

                                                // Width
                                                width: _data.width
                                            });

                                            // Timeout
                                            timeout(function() {
                                                // Check
                                                check(function() {
                                                    // Return
                                                    return len(that.children) == 1
                                                }, '', function() {
                                                    // Deletion
                                                    !that.lastElementChild || that.removeChild(that.lastElementChild)
                                                })
                                            });

                                            // Check
                                            check(function() {
                                                // Return
                                                return data
                                            }, scriptParticles)
                                        }
                                }, (getTransitionDelay(that) + getTransitionDuration(that)) + 100)
                            });

            /* Function */
                // Reset Page Section
                def('resetPageSection', {
                    // Value
                    value: function resetPageSection() {
                        // Scroll To
                        scrollTo(0, 0);

                        // Toggle Page Section
                        togglePageSection(false)
                    }
                });

                // Script Particles
                function scriptParticles() {
                    // JS > Source
                    js.src('particlesJSScript', 'vendors/js/particles.min.js', {type: 'text/javascript'});

                    // Check
                    check(function() {
                        // Return
                        return hasProperty('particlesJS')
                    }, function() {
                        // JS > Source
                        js.src('particlesJSScript', 'vendors/js/particles-js-config.min.js', {type: 'text/javascript'})
                    })
                };

                // Toggle Page Section
                def('togglePageSection', {
                    // Value
                    value: function togglePageSection() {
                        // Initialization > Data
                        let data = $$('main > [page-section="' + (localStorage['LapysJS activePageSectionIndex'] = activePageSectionIndex) + '"', 0);

                        // Error Handling
                        try {
                            // (Smooth |) Scroll To
                            !arguments[0] ? (function() {
                                scrollTo(0, 0);
                                scrollTo(data.offset.left, data.offset.top)
                            })() : smoothScrollTo({
                                // Duration
                                duration: .75,

                                // On Smooth Scroll End
                                onsmoothscrollend: function() {
                                    // Update > Is Scrolling
                                    isScrolling = false;

                                    // Style > Target > Pointer Event
                                    this.delStyle('pointer-events')
                                },

                                // On Smooth Scroll Start
                                onsmoothscrollstart: function() {
                                    // Update > Is Scrolling
                                    isScrolling = true;

                                    // Style > Target > Pointer Event
                                    this.setCSS('pointer-events', 'none')
                                },

                                // Target
                                target: data,

                                // Timing Function
                                timingFunction: 'ease-in-out'
                            })
                        }

                        catch (error) {
                            // Local Storage > Remove Item
                            localStorage.removeItem('LapysJS activePageSectionIndex');

                            // Scroll To
                            scrollTo(0, 0)
                        }
                    }
                });
                !('LapysJS activePageSectionIndex' in localStorage) || (activePageSectionIndex = num(localStorage['LapysJS activePageSectionIndex']));
                check(function() {
                    // Return
                    return $$('main > [page-section="' + $$('main > [page-section', '~length') + '"', 0)
                }, togglePageSection);

            /* Event */
                // Window
                    // Blur, Resize
                    setEvent('blur resize', function correctActivatePageSectionIndex() {
                        // Reset Page Section
                        resetPageSection();
                        resetPageSection()
                    });

                // <body>
                    // Key Up
                    document.body.setEvent('keyup mousewheel touchend touchstart', function updateActivePageSectionIndex(event) {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!isScrolling) {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (event.constructor == KeyboardEvent) {
                                // Initialization > (Data, Metadata)
                                let data = event.code,
                                    metadata = $$('main > [page-section', 'array'),
                                    _metadata = len(metadata),
                                    _data = when(
                                        // Arrow (Down | Right)
                                        data == 'ArrowDown' || data == 'ArrowRight', function() {
                                            // Update > Active Page Section Index
                                            activePageSectionIndex += 1;
                                            (activePageSectionIndex < _metadata) || (activePageSectionIndex = 0);

                                            // Return
                                            return null
                                        },

                                        // Arrow (Left | Up)
                                        data == 'ArrowLeft' || data == 'ArrowUp', function() {
                                            // Update > Active Page Section Index
                                            activePageSectionIndex -= 1;
                                            (activePageSectionIndex > -1) || (activePageSectionIndex = ~-_metadata);

                                            // Return
                                            return null
                                        },

                                        // Arrow (Down, Right) | Page Down
                                        data == 'ArrowDown' || data == 'ArrowRight' || data == 'PageDown', function() {
                                            // Update > Active Page Section Index
                                            activePageSectionIndex += 1;
                                            (activePageSectionIndex < _metadata) || (activePageSectionIndex = ~-_metadata);

                                            // Return
                                            return null
                                        },

                                        // Escape
                                        data == 'Escape', function() {
                                            // Toggle Fullscreen
                                            (screen.height != innerHeight) || toggleFullscreen()
                                        },

                                        // Page Up
                                        data == 'PageUp', function() {
                                            // Update > Active Page Section Index
                                            activePageSectionIndex -= 1;
                                            (activePageSectionIndex > -1) || (activePageSectionIndex = 0);

                                            // Return
                                            return null
                                        },

                                        // (Digit | Number Pad) (0-9)
                                        data.startsWith('Digit') || data.startsWith('Numpad'), function() {
                                            // Initialization > Alpha
                                            let alpha = activePageSectionIndex;

                                            // Update > Active Page Section Index
                                            ((activePageSectionIndex = num(data.getAfterChar(/[a-z]/, true))) < _metadata) || (activePageSectionIndex = alpha);

                                            // Return
                                            return null
                                        },

                                        // End
                                        data == 'End', function() {
                                            // Update > Active Page Section Index
                                            activePageSectionIndex = ~-_metadata;

                                            // Return
                                            return null
                                        },

                                        // Home
                                        data == 'Home', function() {
                                            // Update > Active Page Section Index
                                            activePageSectionIndex = 0;

                                            // Return
                                            return null
                                        },

                                        // Tab
                                        data == 'Tab', function() {
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Update > Active Page Section Index
                                            */
                                            if (!$$(':focus', 0)) {
                                                activePageSectionIndex += 1;
                                                (activePageSectionIndex < _metadata) || (activePageSectionIndex = ~-_metadata)
                                            }

                                            // Return
                                            return null
                                        }
                                    );

                                // Toggle Page Section
                                (_data !== null) || togglePageSection()
                            }

                            else if (event.constructor == TouchEvent) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (event.type == 'touchend') {
                                    // Initialization > (Data, Metadata)
                                    let data = innerWidth > 768 ? 100 : innerWidth.perc(25),
                                        metadata = $$('main > [page-section', 'array'),
                                        _metadata = len(metadata);

                                    /* Logic
                                            [if:else if:else statement]

                                        > Update > Active Page Section Index
                                    */
                                    if (event.coordY < touchSectionY && touchSectionY - event.coordY > data) {
                                        activePageSectionIndex += 1;
                                        (activePageSectionIndex < _metadata) || (activePageSectionIndex = 0)
                                    }

                                    else if (event.coordY > touchSectionY && event.coordY - touchSectionY > data) {
                                        activePageSectionIndex -= 1;
                                        (activePageSectionIndex > -1) || (activePageSectionIndex = ~-_metadata)
                                    }

                                    // Toggle Page Section
                                    togglePageSection()
                                }

                                else if (event.type == 'touchstart') {
                                    // Update > Touch Section (X, Y)
                                    touchSectionX = event.coordX;
                                    touchSectionY = event.coordY
                                }
                            }

                            else if (event.constructor == WheelEvent) {
                                // Initialization > Data
                                let data = event.targetNode;

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (data.scrollHeight - (data.height / 2) < data.height) {
                                    // Initialization > (Data, Metadata)
                                    let data,
                                        metadata = $$('main > [page-section', 'array'),
                                        _metadata = len(metadata);

                                    /* Logic
                                            [if:else if:else statement]

                                        > Update > Active Page Section Index
                                    */
                                    if (event.wheelDelta > -1) {
                                        activePageSectionIndex -= 1;
                                        (activePageSectionIndex > -1) || (activePageSectionIndex = ~-_metadata)
                                    }

                                    else if (event.wheelDelta < 0) {
                                        activePageSectionIndex += 1;
                                        (activePageSectionIndex < _metadata) || (activePageSectionIndex = 0)
                                    }

                                    // Toggle Page Section
                                    togglePageSection()
                                }
                            }
                        }
                    })
        })
}

else
    // Error
    throw new Error('Can not execute script without LapysJS.')
