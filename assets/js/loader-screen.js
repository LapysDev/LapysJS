    // Function > Loader Screen Script
    (function LoaderScreenScript(window = window, document = window.document, undefined = window.undefined || void 0) {
        // Initialization > (Processing Time, Condition, Timeout, Loader (...))
        let processingTime = 0,
            condition = function condition() {
                // Return
                return document.body
            },
            timeout = function timeout() {
                // Return
                return (processingTime * 1e3) / 2
            },
            loaderScreenBase = [],
            loaderScreenClearInterval = typeof requestAnimationFrame == 'function' ? function clearInterval() {
                /* Update > Loader Screen Base
                        --- NOTE ---
                            @lapys: Since this function is barely used,
                                just clear the whole data.
                */
                loaderScreenBase = []
            } : clearInterval,
            loaderScreenFontSize = typeof window.loaderScreenFontSize != 'undefined' ? loaderScreenFontSize : 14,
            loaderScreenMargin = typeof window.loaderScreenMargin != 'undefined' ? loaderScreenMargin : 10,
            loaderScreenMessage = typeof window.loaderScreenMessage != 'undefined' ? loaderScreenMessage : 'Loading, please wait&hellip;',
            loaderScreenOpacity = typeof window.loaderScreenOpacity != 'undefined' ? loaderScreenOpacity : .75,
            loaderScreenTransition = typeof window.loaderScreenTransition != 'undefined' ? loaderScreenTransition : .675,
            loaderScreenWidth = typeof window.loaderScreenWidth != 'undefined' ? loaderScreenWidth : 7.5,
            loaderScreenInterval = typeof requestAnimationFrame == 'function' ? function interval(callback) {
                // Update > Loader Screen Base
                loaderScreenBase.push(callback);

                // Function > Main
                (function main() {
                    // Callback
                    callback();

                    // Request Animation Frame
                    (loaderScreenBase.indexOf(callback) < 0) || requestAnimationFrame(main)
                })()
            } : setInterval,
            loaderScreenTimeout = setTimeout;

        // Function > Update
        function update() {
            // Loader Screen Timeout
            loaderScreenTimeout(function() {
                // Initialization > (Data, Metadata)
                var data = document.createElement('loader-screen-element'),
                    metadata = loaderScreenInterval(function() {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (document.readyState == 'complete') {
                            // Alpha
                            alpha();

                            // Test
                            test()
                        }
                    });

                // Insertion
                document.body.appendChild(data);

                // Style > <body> > Overflow
                document.body.style = ('overflow: hidden !important; pointer-events: none !important; user-drag: none !important; user-select: none !important;' + (document.body.getAttribute('style') || ' ')).trim();

                // Modification > Data
                    // Inner HTML
                    data.innerHTML =
                        '<style media=all type=text/css>' +
                            'body::selection {' +
                                'background-color: transparent !important;' +
                                'text-shadow: none !important' +
                            '} ' +
                            '@keyframes rotate {' +
                                '0% { transform: rotate(0) }' +
                                'to { transform: rotate(360deg) }' +
                            '}' +
                        '</style>' +
                        "<div style='animation: rotate 1s ease-in-out 0s infinite backwards; border: " + loaderScreenWidth + "px solid rgba(0, 0, 0, " + loaderScreenOpacity + "); border-top-color: rgba(0, 51, 255, " + loaderScreenOpacity + "); border-radius: 50%; height: 75px; margin: 0 auto; margin-bottom: " + loaderScreenMargin + "px; width: 75px'> </div>" +
                        "<small style='color: rgba(127, 127, 127, .675); font-family: \"Open Sans\", \"Calibri Light\", Calibri, sans-serif; font-size: " + loaderScreenFontSize + "px !important; margin: 0 auto; margin-top: " + loaderScreenMargin + "px; text-align: center'> " + loaderScreenMessage + " </small>";

                    // Style
                    data.style = 'align-items: center; background-color: rgba(255, 255, 255, .9999); display: flex; flex-direction: column; height: ' + innerHeight + 'px; justify-content: center; left: 0; margin: auto; max-height: 100% !important; max-width: 100% !important; min-height: 100vh; min-width: 100vh; position: fixed; top: 0; transition: ' + loaderScreenTransition + 's ease-in-out; width: ' + innerWidth + 'px; z-index: 2147483647';

                // Function
                    // Alpha
                    function alpha() {
                        // Loader Screen Clear Interval
                        loaderScreenClearInterval(metadata)
                    };

                    // Test
                    function test() {
                        // Style > Data
                            // Background Color
                            data.style.backgroundColor = 'transparent';

                            // Opacity
                            data.style.opacity = 0;

                        // Loader Screen Timeout
                        loaderScreenTimeout(function() {
                            // Deletion
                            data.remove();

                            // Modification > <body> > Style
                            document.body.style = document.body.getAttribute('style').replace('overflow: hidden !important;', '').replace('pointer-events: none !important;', '').replace('user-drag: none !important;', '').replace('user-select: none !important;', '');
                            (document.body.getAttribute('style') || '').trim() || document.body.removeAttribute('style')
                        }, ((+getComputedStyle(data).getPropertyValue('animation-delay').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('animation-duration').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('transition-delay').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('transition-duration').replace(/[a-zA-Z]/g, '').trim()) * 1e3) + 100);
                    }
            }, timeout())
        };

        /* Logic
                [if:else if:else statement]
        */
        if (condition())
            // Update
            update();

        else {
            // Initialization > Data
            var data = loaderScreenInterval(function() {
                /* Logic
                        [if:else if:else statement]
                */
                if (condition()) {
                    // Update > Processing Time
                    processingTime += 1;

                    // Update
                    update();

                    // Metadata
                    metadata()
                }
            });

            // Function > Metadata
            function metadata() {
                // Loader Screen Clear Interval
                loaderScreenClearInterval(data);

                /* Logic
                        [if:else if:else statement]

                    > Deletion
                */
                if ('data' in window && typeof data == 'undefined')
                    delete window.data
            }
        }
    })(window, window.document, window.undefined || void 0)
