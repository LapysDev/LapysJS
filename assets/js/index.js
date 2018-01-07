/* Global Data */
    /* Document */
        // Title
        document.title += ' | Client-Side Web Library';

    // {Header Navigation Bar Construction} On DOM Ready
    onDOMReady(function headerNavigationBarConstruction() {
        /* Components */
            /* Mast Head */
                // Definition > Header Navigation Bar
                let headerNavigationBar = $$('#masthead').sections.bottom;

        /* Event */
            // Resize, Scroll
            invokeEvent('resize scroll', function() {
                /* Logic
                        If
                            Scroll Y is greater than Inner Height
                                or
                            Scroll Y equals the Inner Height.
                */
                if (scrollY >= innerHeight) {
                    // Modification
                        // Header Navigation Bar > (Class, Role)
                        headerNavigationBar.addClass('card', 'smooth', 'z-5');
                        headerNavigationBar.role = 'header-navigation-bar';

                    /* Loop
                            Index the Header Navigation Bar's children.

                        > Modification > (Header Navigation Bar > Children) > Data Title Style
                    */
                    for (let i = 0; i < len(headerNavigationBar.children); i += 1)
                        headerNavigationBar.children[i].attr('data-title-style', `margin-left: -30px; margin-top: ${headerNavigationBar.offset.height}px`);
                }

                else {
                    // Modification
                        // Header Navigation Bar > (Class, Role)
                        headerNavigationBar.delClass('card', 'smooth', 'z-5');
                        headerNavigationBar.role = '';

                    /* Loop
                            Index the Header Navigation Bar's children.

                        > Modification > (Header Navigation Bar > Children) > Data Title Style
                    */
                    for (let i = 0; i < len(headerNavigationBar.children); i += 1)
                        headerNavigationBar.children[i].attr('data-title-style', `margin-left: -30px; margin-top: ${-65}px`);
                }
            })
    })
