/* Function > Base Script
        --- WARN ---
            @lapys: Do not use template strings, defer to standard concatenation instead.
*/
(function BaseScript(window = window, document = window.document, global = typeof global != 'undefined' ? global : null, undefined = window.undefined || void 0, LapysJS = typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false })) {
    /* {Global Object Test} Logic
            If
                LapysJS is ready.
    */
    if (typeof LapysJS == 'object' && (LapysJS || new (function Data() {})).ready === true) {
        /* Global Data
                --- NOTE ---
                    @lapys: Variables defined in all caps represent constants.
        */
            // Allow Alternative Resource Files
            def('ALLOW_ALTERNATIVE_RESOURCE_FILES', {
                // Value
                value: !global.ALLOW_ALTERNATIVE_RESOURCE_FILES ? true : ALLOW_ALTERNATIVE_RESOURCE_FILES,

                // Writable
                writable: false
            });

            // Application
                /* Logic
                        [if:else if:else statement]

                        --- NOTE ---
                            @lapys: Configure the application from here.

                    > Modification > Application
                */
                if (typeof app == 'object') {
                    // Author
                    app.author = 'Lapys Dev Team';

                    // Cache Control
                    app.cacheControl = 'cache';

                    // Character Encoding Set
                    app.charset = 'characterSet' in document ? document.characterSet : 'UTF-8';

                    // Copyright
                    app.copyright = 'Lapys Dev Team';

                    // Description
                    app.description = 'LapysJS is a JavaScript library with its independent CSS counterpart designed to simplify JavaScript';

                    // Keywords
                    app.keywords = 'JavaScript Library, Lapys Dev, LapysJS, Simplify JavaScript';

                    // Name
                    app.name = 'LapysJS';

                    // Robots
                    app.robots = 'none';

                    // Theme Color
                    app.themeColor = '#0033FF';

                    // Version
                    app.version = LapysJS.version
                }

            // Dynamic Assets URL
            def('DYNAMIC_ASSETS_URL', {
                // Value
                value: (function() {
                    // Initialization > Data
                    let data = '';

                    /* Logic
                            [if:else if:else statement]

                        > Update > Data
                    */
                        // {Home}
                        if (location.href.getBeforeChar('/', true).endsWith('LapysJS'))
                            data = '';

                        // {Internal Page}
                        else if (location.href.getBeforeChar('/', true).endsWith('pages'))
                            data = '../';

                    // Return
                    return data
                })(),

                // Writable
                writable: false
            });

            // CSS > Link
                /* Logic
                        [if:else if:else statement]
                */
                if (ALLOW_ALTERNATIVE_RESOURCE_FILES) {
                    // LapysJS Stylesheet
                    css.link('LapysJSStylesheet', {href: decodeURIComponent(LapysJS.script.src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

                    // Base Stylesheet
                    css.link('LapysJSStylesheet', {href: decodeURIComponent($$("script[src*='base.'][src*='.js'", 0).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

                    // App JS Stylesheet
                    !$$("script[src*='app.'][src*='.js'", 0) || css.link('LapysJSStylesheet', {href: decodeURIComponent($$("script[src*='app.'][src*='.js'", 0).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

                    // Interval JS Stylesheet
                    !$$("script[src*='interval.'][src*='.js'", 0) || css.link('LapysJSStylesheet', {href: decodeURIComponent($$("script[src*='interval.'][src*='.js'", 0).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

                    // Document Stylesheet
                    !$$("script[data-id*='documentScript'", 0) || css.link('LapysJSStylesheet', {href: decodeURIComponent($$("script[data-id*='documentScript'", 0).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'})
                }

            // Document
                // Favorite Icon
                    // Initialization > Favorite Icon URL
                    let faviconURL = null;

                    // LapysJS > Component > Image
                    new LapysJS.component.Image(new (function Object() {
                        // Initialization > Data
                        let data = DYNAMIC_ASSETS_URL + 'favicon.ico';

                        // On Error
                        this.onerror = function() {
                            // Update > Favorite Icon URL
                            faviconURL = DYNAMIC_ASSETS_URL + 'assets/img/ico/icon.ico'
                        },

                        // On Load
                        this.onload = function() {
                            // Update > Favorite Icon URL
                            faviconURL = data
                        },

                        // Source
                        this.src = data
                    }));

                    // Check
                    check(function checkFavoriteIconReady() {
                        // Return
                        return faviconURL !== null
                    }, function setFavoriteIcon() {
                        // Modification > Document > Favorite Icon
                        document.favicon = faviconURL
                    });

                // Title
                document.title = 'LapysJS';

            // LapysJS > $ > Import > Font
                // Calibri Light
                LapysJS.$.import.font({format: 'truetype', name: 'Calibri Light', src: DYNAMIC_ASSETS_URL + 'assets/fonts/calibri-light.ttf'});

                // Calibri
                LapysJS.$.import.font({format: 'truetype', name: 'Calibri', src: DYNAMIC_ASSETS_URL + 'assets/fonts/calibri.ttf'});

                // Droid Serif
                LapysJS.$.import.font({format: 'truetype', name: 'Droid Serif', src: DYNAMIC_ASSETS_URL + 'assets/fonts/droid-serif.ttf'});

                // Open Sans
                LapysJS.$.import.font({format: 'truetype', name: 'Open Sans', src: DYNAMIC_ASSETS_URL + 'assets/fonts/open-sans.ttf'});

                // PT Sans
                LapysJS.$.import.font({format: 'truetype', name: 'PT Sans', src: DYNAMIC_ASSETS_URL + 'assets/fonts/pt-sans.ttf'});

                // Roboto Mono
                LapysJS.$.import.font({format: 'truetype', name: 'PT Sans', src: DYNAMIC_ASSETS_URL + 'assets/fonts/roboto-mono.ttf'});

            // Navigation Links
            def('NAVIGATION_LINKS', new (function NavigationLinksList() {
                // Initialization > (Data, Target)
                let data = [
                    // LapysJS
                    new (function NavigationLinks() {
                        // Modification > Target > (...)
                        this.class = 'col-1';
                        this.href = 'index.html';
                        this.role = 'home';
                        this.target = '_self';
                        this.textContent = 'LapysJS';
                        this.title = 'Back to the main hub'
                    }),

                    // JavaScript
                    new (function NavigationLinks() {
                        // Modification > Target > (...)
                        this.class = 'col-1';
                        this.href = 'pages/javascript.html';
                        this.role = 'javascript';
                        this.target = '_self';
                        this.textContent = 'JavaScript';
                        this.title = 'Reference our JavaScript documentation'
                    })
                ], that = this;

                // Repeat
                repeat(index => {
                    // Modification > Target > [Index]
                    that[index] = data[index]
                }, len(data));

                // Modification > Target > Length
                that.length = data.length
            }));

            // Random Version Number
            def('RANDOM_VER_NUMBER', {
                /* Value
                        --- NOTE ---
                            @lapys: This simulates the current date in milliseconds,
                                slices to the first 5 characters and provides the format
                                x.xxx.x
                */
                value: str(+date).slice(-5).replace(/[0-9]/, '$&.').reverse().replace(/[0-9]/, '$&.').reverse(),

                // Writable
                writable: false
            });

        /* Functions */
            // On Node Added
            onNodeAdded(document.documentElement, function() {
                /* Loop
                        [do:while statement]

                        --- NOTE ---
                            @lapys: Attempt to update the
                                caching power and the script breakage of
                                scripting files in <script> elements.

                    > Modification > <script> > Source
                */
                while ($$("script:not([src*='?'])", 0))
                    $$("script:not([src*='?'])", 0).src = decodeURIComponent($$("script:not([src*='?'])", 0).src + '?' + RANDOM_VER_NUMBER)
            });

            // On DOM Ready
            onDOMReady(function() {
                /* DOM Elements */
                    // <script>
                        // On Node Added
                        onNodeAdded(document.documentElement, function() {
                            // Repeat
                            repeat(function() {
                                // Deletion
                                $t('script', 0).delete()
                            }, $t('script', 'length'))
                        });

                /* Assets */
                    // Navigation Links Container > Repeat
                    !global.NAVIGATION_LINKS_MODIFIER || repeat(index => {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!$$("[role*='navigation-links-container'", index)['BaseScript elementIsModified']) {
                            // Modification > Navigation Links Container > Inner HTML
                            $$("[role*='navigation-links-container'", index).innerHTML = '';

                            // Repeat
                            repeat(metaIndex => {
                                // Modification > Navigation Links Container > Inner HTML
                                $$("[role*='navigation-links-container'", index).innerHTML +=
                                    "<a " + (function() {
                                        // Initialization > Data
                                        let data = '';

                                        /* Loop
                                                Index Navigation Links.

                                            > Update > Data
                                        */
                                        for (let i in NAVIGATION_LINKS[metaIndex])
                                            !(i != 'href' && i != 'target' && i != 'textContent' && i != 'title') || (data += i + "='" + NAVIGATION_LINKS[metaIndex][i] + "'");

                                        // Return
                                        return data
                                    })() + ('title' in NAVIGATION_LINKS[metaIndex] ? "data-title='" + NAVIGATION_LINKS[metaIndex].title + "' " : '') + "href='" + DYNAMIC_ASSETS_URL + NAVIGATION_LINKS[metaIndex].href + "' target='" + (NAVIGATION_LINKS[metaIndex].target || '_self') + "''>" +
                                        NAVIGATION_LINKS[metaIndex].textContent +
                                    '</a>'
                            }, len(NAVIGATION_LINKS));

                            // Modification > Navigation Links Container > Element Is Modified
                            $$("[role*='navigation-links-container'", index)['BaseScript elementIsModified'] = true
                        }
                    }, $$("[role*='navigation-links-container'", 'length'))
            });
    }

    else
        // Error
        throw new Error('Can not execute script without LapysJS.')
})(window, window.document, typeof global != 'undefined' ? global : null, window.undefined || void 0, typeof LapysJS != 'undefined' ? LapysJS : new (function LapysJS() { this.ready = false }))
