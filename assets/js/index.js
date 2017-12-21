/* Global Data */
    /* Document */
        // Title
        document.title += ' | Client-Side Web Library';

    /* Local Storage */
        // First Visit
            // Timeout
            timeout(() => {
                !!localStorage.firstVisit || (localStorage.firstVisit = true)
            });

            timeout(() => {
                localStorage.firstVisit = false
            }, 3600000 /* An hour... */);

/* Components */
    /* Mast Head */
        // Insertion
        !!localStorage.firstVisit || document.body.insertChild('begin',
            new LapysJS.component.Dialog(
                `<div style='font-size: 3.67em; font-weight: bold; padding-right: 10%; text-align: right; width: 90%'> <span class=pointer onclick='
                    // Initialization > Data
                    let data;

                    /* Loop
                            Index all Target\`s parents.
                    */
                    for (let i = 0; i < this.parentPath.length; i += 1)
                        // Error Handling
                        try {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this.parentPath[i].hasClass(\`${(new LapysJS.component.Dialog()).attr('class').split(/ /g)[0]}\`)) {
                                // Upate > Data
                                data = this.parentPath[i];

                                // Break
                                break
                            }
                        }

                        catch (error) {
                            // Update > Data
                            data = this.parent.parent;

                            // Break
                            break
                        }

                    // Style
                        // <body>
                        document.body.delStyle(\`overflow-x\`, \`auto\`);

                        // (Data | Target > Parent > Parent) > Opacity
                        (data || this.parent.parent).setCSS(\`opacity\`, \`0 !important\`);

                    // Timeout
                    timeout(() => {
                        // Deletion
                        (data || this.parent.parent).delete()
                    }, ((num((data || this.parent.parent).getCSS(\`transition-delay\`)) + num((data || this.parent.parent).getCSS(\`transition-duration\`))) * 1000) + 500)
                '>&times;</span> </div>` +

                `<div class=col-1 style='width: 90%'>` +
                    // Text Container
                    `<div class='col-1 grid-2 m-grid-1 t-grid-1' data-id=textContainer style='height: inherit'>` +
                        `<h1 data-id=header> LapysJS </h1>` +

                        `<p class=text-left data-id=description>` +
                            `Build responsive projects on the web with a new budding JavaScript library.` +
                            `<br 2>` +
                            `LapysJS is an open-source framework for developing with HTML, CSS, and JavaScript. <br>` +
                            `Quickly prototype your ideas or build your entire app with our responsive grid system, extensive new variables &amp; plugins and more.` +
                        `</p>` +

                        `<br 2>` +

                        `<small> Currently in version ${LapysJS.version}</small>` +
                    `</div>` +

                    // Icon Container
                    `<div class='col-1 grid-2 m-grid-1 t-grid-1' data-id=iconContainer style='height: inherit'>` +
                        `<img class='center responsive width-70' src=assets/img/png/icon.png>` +
                    `</div>` +
                `</div>`,
                {
                    CSSSelector: '.center-flex[data-id=mastHead',
                    style:
                        `color: #333333;` +
                        `height: 100%;` +
                        `left: 0;` +
                        `min-height: 100vh;` +
                        `padding: 0;` +
                        `right: 0;` +
                        `transition: .3s ease-in-out;` +
                        `width: 100% !important;` +
                        'z-index: 2147483644 !important'
                }
            )
        );

        // Style
            // <body> > Overflow X
            !!localStorage.firstVisit || document.body.setCSS('overflow', 'hidden');

    /* Jumbotron */
        /* Event */
            // Window > (Resize, Scroll)
            invokeEvent('resize scroll', () => {
                /* Logic
                        [if:else if:else statement]
                */
                if (
                    scrollY > innerHeight &&
                    innerWidth > 425
                ) {
                    // CSS > Style
                    $$('style[data-id=jumbotronButtonContainerCSS') || css.style(
                        'jumbotronButtonContainerCSS',
                        `#jumbotron > [data-id=buttons-container] > button {` +
                            `align-items: center;` +
                            `background-color: transparent;` +
                            `display: flex;` +
                            `flex-grow: 1;` +
                            `height: inherit !important;` +
                            `margin: 0;` +
                            `jusitfy-content: center;` +
                            `opacity: 1;` +
                            `padding: 0` +
                        `}` +
                            `#jumbotron > [data-id=buttons-container] > button a {` +
                                `background-color: transparent !important;` +
                                `padding: 0;` +
                                `zoom: .975` +
                            `}`
                    );

                    /* Loop
                            [for statement]

                        > Modification > Button > Data Title Style
                    */
                    for (let i = 0; i < ($$('#jumbotron > [data-id=buttons-container') || 'a'.html).$$('button', 'length'); i += 1)
                        ($$('#jumbotron > [data-id=buttons-container') || 'a'.html).$$('button', i).dataAttr('title-style', 'opacity: 0 !important');

                    // Modification > Buttons Container > Class
                    !$$('#jumbotron > [data-id=buttons-container') || $$('#jumbotron > [data-id=buttons-container').addClass('bg-c-darkgray', 'card', 'col-grp');

                    // Style
                        // Buttons Container
                        !$$('#jumbotron > [data-id=buttons-container') || $$('#jumbotron > [data-id=buttons-container').setCSS(
                            {
                                // Animation
                                animation: 'slideInFromTop .3s ease-in-out 0s 1 backwards',

                                // Background Color
                                backgroundColor: app.color.toRGBA(app.color.toHex(($$('[data-id=footer], #footer', 0) || {getCSS: () => { return '#555555' }}).getCSS('background-color')), .9) + ' !important',

                                // Border
                                border: 0,

                                // Height
                                height: '50px !important',

                                // Left
                                left: 0,

                                // Padding
                                padding: '0 2.5%',

                                // Position
                                position: 'fixed',

                                // Top
                                top: 0,

                                // Width
                                width: '95% !important',

                                // Z Index
                                zIndex: 5
                            }
                        )
                }

                else {
                    // Deletion
                    !$$('style[data-id=jumbotronButtonContainerCSS') || $$('style[data-id=jumbotronButtonContainerCSS').delete();

                    /* Loop
                            [for statement]

                        > Modification > Button > Data Title Style
                    */
                    for (let i = 0; i < ($$('#jumbotron > [data-id=buttons-container') || 'a'.html).$$('button', 'length'); i += 1)
                        ($$('#jumbotron > [data-id=buttons-container') || 'a'.html).$$('button', i).delAttr('data-title-style');

                    // Modification > Buttons Container > Class
                    !$$('#jumbotron > [data-id=buttons-container') || $$('#jumbotron > [data-id=buttons-container').delClass('bg-c-darkgray', 'card', 'col-grp');

                    // Style
                        // Buttons Container
                            // Animation
                            !$$('#jumbotron > [data-id=buttons-container') || $$('#jumbotron > [data-id=buttons-container').setCSS(
                                'animation',
                                'slideOutFromTop .3s ease-in-out 0s 1 backwards !important'
                            );

                            // Background Color, Border, Height, Left, Padding, Position, Top, Z Index
                            !$$('#jumbotron > [data-id=buttons-container') || $$('#jumbotron > [data-id=buttons-container').delStyle(
                                'background-color', 'border', 'height', 'left', 'padding', 'position', 'top', 'z-index'
                            )
                }
            });

        /* On DOM Ready
                --- NOTE ---
                    @lapys: Reduces the delay when the Dynamic Text gets to its third sequence,
                        and increases it otherwise.
        */
        !$$('#jumbotron > [data-id=headers-container] > [data-id=subheader] .dynamic-text') || onDOMReady(() => {
            // Initialization > Jumbotron Headers Container Sub Header
            let jumbotronHeadersContainerSubHeader = $$('#jumbotron > [data-id=headers-container] > [data-id=subheader] .dynamic-text');

            // On Node Change
            onNodeChange($$('#jumbotron > [data-id=headers-container] > [data-id=subheader'), () => {
                // Modification > Jumbotron Headers Container Sub Header > Data Text Function Delay
                jumbotronHeadersContainerSubHeader.innerText.hasText('&') ? jumbotronHeadersContainerSubHeader.dataAttr('text-function-delay', .05) : jumbotronHeadersContainerSubHeader.dataAttr('text-function-delay', .6)
            })
        })
