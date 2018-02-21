/* {Global Object Test} Logic
        If
            LapysJS is ready.
*/
if (typeof LapysJS == 'object' && (LapysJS || new (function Data() {})).ready === true) {
    /* Global Data */
        // (Former) Current Slide
        let currentSlide = 0,
            formerCurrentSlide = 0;

        // Document > Title
            // Check
            check(function checkDocumentTitleReady() {
                // Return
                return document.title.hasText('LapysJS')
            }, function setDocumentTitle() {
                // Modification > Document > Title
                document.title += ' | Simplifying Web Programming'
            });

        /* Local Storage
                --- NOTE ---
                    @lapys: Store the highest and lowest total processing time
                        of LapysJS within a set of sessions.
        */
            // Maximum Total Processing Time
            'LapysJS maxTotalProcessingTime' in localStorage || (localStorage['LapysJS maxTotalProcessingTime'] = LapysJS.totalProcessingTime);
            localStorage['LapysJS maxTotalProcessingTime'] = num(localStorage['LapysJS maxTotalProcessingTime']) < LapysJS.totalProcessingTime ? LapysJS.totalProcessingTime : localStorage['LapysJS maxTotalProcessingTime'];

            // Minimum Total Processing Time
            'LapysJS minTotalProcessingTime' in localStorage || (localStorage['LapysJS minTotalProcessingTime'] = LapysJS.totalProcessingTime);
            localStorage['LapysJS minTotalProcessingTime'] = num(localStorage['LapysJS minTotalProcessingTime']) > LapysJS.totalProcessingTime ? LapysJS.totalProcessingTime : localStorage['LapysJS minTotalProcessingTime'];

    /* DOM Elements */
        // <main>
            // Repeat
            !document.main || repeat(index => {
                // Modification > (<main> > Child Element) > Slide Index
                document.main._$('[role=full-page', index).attr('slide-index', index)
            }, document.main._$('[role=full-page', 'length'));

    /* Function */
        // Initialize Particles JS Script
        function initParticlesJSScript() {
            // Style > Particles JS Backdrop > Opacity
            $i('particlesJSBackdrop').setCSS('opacity', 1);

            /* Loop
                    [do:while statement]
            */
            while ($$('particles-js', 'attr:pseudo-id', 0)) {
                // Initialization > Data
                let data = $$('particles-js', 'attr:pseudo-id', 0);

                // Modification > (ID, Pseudo ID)
                data.id = 'particles-js';
                data.delAttr('pseudo-id');

                /* Loop
                        [do:while statement]

                    > Deletion
                */
                while (data.$t('canvas', 0))
                    data.$t('canvas', 0).delete();

                // Insertion
                data.insertAdjacentHTML('afterend', data.outerHTML);

                // Deletion
                data.delete()
            }

            // JavaScript > Source
            js.src('particlesJSScript', {src: 'vendors/js/particles.min.js?' + RANDOM_VER_NUMBER, type: 'text/javascript'});

            // Check
            check(function checkParticlesJS() {
                // Return
                return typeof particlesJS == 'function'
            }, function configureParticlesJS() {
                // JavaScript > Source
                js.src('particlesJSConfigurationScript', {src: 'vendors/js/particles-js-config.min.js?' + RANDOM_VER_NUMBER, type: 'text/javascript'})
            })
        };

        // Stop Particles JS Script
        function stopParticlesJSScript() {
            // Style > Particles JS Backdrop > Opacity
            $i('particlesJSBackdrop').setCSS('opacity', 0);

            /* Loop
                    [do:while statement]
            */
            while ($i('particles-js', 0)) {
                // Initialization > Data
                let data = $i('particles-js', 0);

                // Modification > (Pseudo ID, ID)
                data.attr('pseudo-id', 'particles-js');
                data.delAttr('id');

                /* Loop
                        [do:while statement]

                    > Deletion
                */
                while (data.$t('canvas', 0))
                    data.$t('canvas', 0).delete();

                // Insertion
                data.insertAdjacentHTML('afterend', data.outerHTML);

                // Deletion
                data.delete()
            }
        };

        // Check
        check(function checkNavigationLinksContainerChildElements() {
            // Return
            return !!$$("[role*='navigation-links-container'] > *", 'length')
        }, function removeRedundantNavigationLinksContainerChildElement() {
            /* Assets */
                // Navigation Links Container
                    // Repeat
                    repeat(index => {
                        // Deletion
                        $$("[role*='navigation-links-container'", index).$$('home', 'attr:role', 0).delete()
                    }, $$("[role*='navigation-links-container'", 'length'))
        });

        // Slide
        function slide() {
            // Update > Former Current Slide
            formerCurrentSlide = currentSlide;

            /* Logic
                    [switch:case:default statement]

                > Update > Current Slide
            */
            switch (arguments[0]) {
                // 1
                case 1:
                    currentSlide = currentSlide + 1 > document.main._$('[role=full-page', '~length') ? 0 : currentSlide + 1;
                    break;

                // 2
                case 2:
                    currentSlide = currentSlide - 1 < 0 ? document.main._$('[role=full-page', '~length') : currentSlide - 1;
                    break;

                // 3
                case 3:
                    currentSlide = 0;
                    break;

                // 4
                case 4:
                    currentSlide = document.main._$('[role=full-page', '~length');
                    break;

                // 5
                case 5:
                    currentSlide = currentSlide + 1 > document.main._$('[role=full-page', '~length') ? document.main._$('[role=full-page', '~length') : currentSlide + 1;
                    break;

                // 6
                case 6:
                    currentSlide = currentSlide - 1 < 0 ? 0 : currentSlide - 1;
                    break;

                // 7
                case 7:
                    currentSlide = currentSlide
            }

            /* Scroll To
                    --- UPDATE REQUIRED ---
                        @lapys: Update this to a working Smooth Scroll To function.
            */
            (formerCurrentSlide == currentSlide) || scrollTo(document.main._$('[role=full-page', currentSlide).offset.left, document.main._$('[role=full-page', currentSlide).offset.top)
        };

    // Event
        // Window
            // Focus
            invokeEvent('focus', function() {
                // Slide
                slide(7)
            });

            // Resize
            invokeEvent('resize', function() {
                // (Initialize | Stop) Particles JS Script
                innerWidth > 768 ? initParticlesJSScript() : stopParticlesJSScript()
            });

        // <body>
            // Key Up
            document.body.setEvent('keyup', function(event) {
                /* Logic
                        [switch:case:default statement]

                    > Slide
                */
                switch (event.code) {
                    // Arrow Down
                    case 'ArrowDown':
                        slide(1);
                        break;

                    // Arrow Up
                    case 'ArrowUp':
                        slide(2);
                        break;

                    // End
                    case 'End':
                        slide(4);
                        break;

                    // Home
                    case 'Home':
                        slide(3);
                        break;

                    // PageDown
                    case 'PageDown':
                        slide(5);
                        break;

                    // PageUp
                    case 'PageUp':
                        slide(6)
                }
            })
}

else
    // Error
    throw new Error('Can not execute script without LapysJS.')
