/* Global Data */
    /* Document */
        // Title
        document.title += ' | Get Started';

    /* Lapys */
        // Permanent Data
            // Active Slide
            LapysJS.permanentData.activeSlide = [0, 0, 0];

            // Single Quote
            LapysJS.permanentData.singleQuote = `'`;

/* Components */
    /* Page Carousel */
        /* Check
                --- NOTE ---
                    @lapys: Use the Check function to determine
                        when the element is available rather than
                        using the On DOM Ready.
        */
        check(function() {
            // Return
            return !!$$('#pageCarousel', 0)
        }, function() {
            // Definition > Page Carousel
            let pageCarousel = $$('#pageCarousel', 0);
                // Background
                pageCarousel.background = pageCarousel.$$('#background', 0);

                // Interval
                interval(function() {
                    for (let i = 0; i < len(pageCarousel.background.children); i += 1)
                        pageCarousel.background.children[i].delAttr('data-selected')
                }, 333);

            /* Check
                    --- WARN ---
                        @lapys: This ensures all Carousels are oriented properly.
            */
            check(function() {
                // Error Handling
                try {
                    // Return
                    return !!$$(`carousel-component:not(.no-carousel)`, 0).slides[~-len($$(`carousel-component:not(.no-carousel)`, 0).slides)].hasClass(`slide`)
                }

                catch (error) {
                    // Return
                    return false
                }
            }, function() {
                /* Logic
                        [if:else if:else statement]
                */
                if (!LapysJS.permanentData.keyPressed) {
                    /* Loop
                            Index all <carousel-component>.

                        > <carousel-component> > Toggle Slide
                    */
                    for (let i = 0; i < $$(`carousel-component:not(.no-carousel)`, `length`); i += 1)
                       $$(`carousel-component:not(.no-carousel)`, i).toggleSlide(1);

                    // Timeout
                    timeout(function() {
                        /* Loop
                                Index all <carousel-component>.

                            > <carousel-component> > Toggle Slide
                        */
                        for (let i = 0; i < $$(`carousel-component:not(.no-carousel)`, `length`); i += 1)
                            $$(`carousel-component:not(.no-carousel)`, i).toggleSlide(0)
                    }, 500)
                }
            })
        });

/* Events */
    /* [Element] */
        // Check
            // Key Down
            check(function() {
                // Return
                return !!$$(`iframe[src='about:blank']`, 0) && !!$$('.syntax-highlighted[onclick', 0)
            }, function() {
                // Timeout
                timeout(function() {
                    $$('.syntax-highlighted[onclick').invokeEvent('keyup', function() {
                        // <iframe> > Content Window > Document
                            // Open
                            $$(`iframe[src='about:blank']`).contentWindow.document.open();

                            // Write
                            $$(`iframe[src='about:blank']`).contentWindow.document.write(str(this.innerText).replace(/\&lt;/g, '<').replace(/\&nbsp;/g, ' ').replace(/~/g, '    '));

                            // Document Element > Inner HTML
                            $$(`iframe[src='about:blank']`).contentWindow.document.documentElement.innerHTML = $$(`iframe[src='about:blank']`).contentWindow.document.documentElement.innerHTML.replace(/\&lt;/g, '<').replace(/\&nbsp;/g, ' ').replace(/~/g, '    ');

                            // Insertion
                            !$$(`iframe[src='about:blank']`).contentWindow.document.querySelector('body').querySelector('title') || $$(`iframe[src='about:blank']`).contentWindow.document.documentElement.querySelector('head').appendChild($$(`iframe[src='about:blank']`).contentWindow.document.querySelector('body').querySelector('title'));
                                /* Loop
                                        [for statement]
                                */
                                for (let i = ~-$$(`iframe[src='about:blank']`).contentWindow.document.querySelector('body').querySelectorAll('link, meta').length; i > -1; i -= 1)
                                    $$(`iframe[src='about:blank']`).contentWindow.document.documentElement.querySelector('head').appendChild($$(`iframe[src='about:blank']`).contentWindow.document.querySelector('body').querySelectorAll('link, meta')[i])
                    })
                }, 1000)
            });

    /* <body> */
        // Click
        document.body.setEvent(`click`, function(event) {
            /* Logic
                    [if:else if:else statement]

                > Modification > [Element] > (On Mouse Leave, Style > Max Height, Previous Element Sibling > Style > (Height, Opacity), Parent > Parent > Parent > Parent > Toggle Slide)
            */
            if (
                event.path[0] !== $$('.syntax-highlighted[onclick') &&
                !$$('[data-focus', 0)
            ) {
                $$('.syntax-highlighted[onclick').onmouseleave = function() { this.setCSS({maxHeight: `47.5%`}); this.previousElementSibling.setCSS({height: `100%`, opacity: `1`}) };
                $$('.syntax-highlighted[onclick').setCSS({maxHeight: `47.5%`}); $$('.syntax-highlighted[onclick').previousElementSibling.setCSS({height: `100%`, opacity: `1`});
                $$('.syntax-highlighted[onclick').parent.parent.parent.parent.toggleSlide=function toggleSlide(){let data=parseNumber(String(arguments[0]).replace(/ /g,``));for(let i=0;i<this.slides.length;i+=1){this.slides[i].removeAttribute(`data-active`);(this.slides[i].getCSS(`display`).indexOf(`inline`)<0)||(this.slides[i].setCSS(`display`,this.slides[i].getCSS(`display`).replace(`inline-`,``)+` !important`));(i>=data)||this.slides[i].setCSS(`left`,`-${this.offset.left - this.slides[i].offset.width}px`);(i!==data)||this.slides[i].setCSS(`left`,`0px`);(i<=data)||this.slides[i].setCSS(`left`, `${this.offset.right}px`);this.slides[i].setCSS(`top`,`-${this.slides[i].offset.height * i}px`)}this.slides[data].setAttribute(`data-active`,``)}
            }
        })
