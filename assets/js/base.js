/* Function > Main
    @author: Lapys Dev Team
    @url: https://www.lapysjs.com
*/
(function Main(argc, argv) {
    /* Logic
            [if:else if:else statement]

        > Return
    */
    if (!window)
        return;

    // Function > Initialize
    (function Init(window = window.parent, document = window.parent.document, global = typeof global != 'undefined' ? global : null, undefined = window.parent.undefined || void 0) {
        /* Global Data
                --- NOTE ---
                    #lapys: Constants are defined in capital
                        but should originate from the Information Manager.
        */
            // Temporary Data
            let tmp = new (function LapysJSObject() {});

            // Application
                // Author
                app.author = 'Lapys Dev Team';

                // Cache Control
                app.cacheControl = 'cache';

                // Character Set
                app.charset = 'UTF-8';

                // Description
                app.description = sequence('A framework that&rsquo;s yours', 'HTML');

                // Height
                app.height = 'device-height';

                // Keywords
                app.keywords = 'Lapys, JavaScript Library';

                // Name
                app.name = 'LapysJS';

                // Robots
                app.robots = 'none';

                // Theme Color
                app.themeColor = '#0033FF';

                // User Scalable
                app.userScalable = true;

                // Viewport
                    // Initial Scale
                    app.viewport.initialScale = 1;

                    // Maximum Scale
                    app.viewport.maximumScale = 2;

                    // Minimum Scale
                    app.viewport.minimumScale = .1;

                    // Target Density DPI
                    app.viewport.targetDensityDPI = 96;

                // Width
                app.width = 'device-width';

            // Document
                // Title
                document.title = 'LapysJS';

            // Default Root File
            def('DEFAULT_ROOT_FILE', {
                // Get
                get: function defaultRootFile() {
                    // Return
                    return (window.informationManager || tmp).defaultRootFile
                }
            });

            // Dynamic Assets URL
            def('DYNAMIC_ASSETS_URL', {
                // Get
                get: function dynamicAssetsURL() {
                    // Return
                    return (window.informationManager || tmp).dynamicAssetsURL
                }
            });

            // Information Manger
            def('informationManager', {
                // Value
                value: (function InformationManager() {
                    // Initialization > (Data, Temporary Data)
                    let data = namedObject('InformationManager'),
                        _data = data.constructor.prototype,
                        tmp = str(location.href.removeChar(location.search).getAfterChar('/', true).trimRightChar(/\\|#|\?/).getBeforeChar('.', true));

                    // Modification > Data
                        // Default Root File
                        _data.def('defaultRootFile', {
                            // Get
                            get: function defaultRootFile() {
                                // Initialization > Data
                                let data = namedObject('DefaultRootFile', {
                                    // Name
                                    name: 'index'
                                });

                                // Return
                                return data
                            }
                        });

                        // Dynamic Assets URL
                        _data.def('dynamicAssetsURL', {
                            // Get
                            get: function dynamicAssetsURL() {
                                // Initialization > (Data, Metadata)
                                let data = location.href,
                                    metadata = data.trimRightChar(/[^\w\/]/);

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (metadata.endsWith(app.name + '/'))
                                    data = '';

                                else if (metadata.endsWith('pages/') || metadata.getBeforeChar('/', True).endsWith('pages/'))
                                    data = '../';

                                // Return
                                return data
                            }
                        });

                        // Import Resources
                        _data.def('importResources', {
                            // Value
                            value: function importResources() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = stringify([...arguments]),
                                    data = args[0],
                                    metadata = args[1];

                                // When
                                when(
                                    // CSS
                                    metadata == 'css' || metadata == 'stylesheet', function() {
                                        // LapysJS > $ > Import > CSS
                                        LapysJS.$.import.css('external', (DYNAMIC_ASSETS_URL || '') + (eval(args[2]) ? 'assets' : 'vendors') + '/css/' + data + '.' + (eval(args[3]) ? 'min.' : '') + 'css')
                                    },

                                    // Font
                                    metadata == 'font', function() {
                                        // LapysJS > $ > Import > Font
                                        LapysJS.$.import.font(data, {
                                            // Format
                                            format: 4 in args ? args[4] : 'truetype',

                                            // Source
                                            src: (DYNAMIC_ASSETS_URL || '') + 'assets/font/' + args[3] + '/' + args[2] + '.' + args[3]
                                        })
                                    },

                                    // JavaScript
                                    metadata == 'javascript' || metadata == 'js', function() {
                                        // LapysJS > $ > Import > JavaScript
                                        LapysJS.$.import.js('external', (DYNAMIC_ASSETS_URL || '') + (eval(args[2]) ? 'assets' : 'vendors') + '/js/' + data + '.' + (eval(args[3]) ? 'min.' : '') + 'js')
                                    },
                                    ''
                                )
                            }
                        });
                            // {Font}
                                // Candara
                                _data.importResources('Candara', 'font', 'candara', 'ttf', 'truetype');

                                // Gadugi
                                _data.importResources('Gadugi', 'font', 'gadugi', 'ttf', 'truetype');

                                // Raleway
                                _data.importResources('Raleway', 'font', 'raleway', 'ttf', 'truetype');

                            // {JavaScript}
                                // Application Script
                                _data.importResources('app', 'js', false);

                                // Document Script
                                _data.importResources(tmp || _data.defaultRootFile.name, 'js', true);

                            // {Stylesheet}
                                // Application Stylesheet
                                _data.importResources('app', 'css', false);

                                // Base Stylesheet
                                _data.importResources('base', 'css', true);

                                // Document Stylesheet
                                _data.importResources(tmp || _data.defaultRootFile.name, 'css', true);

                        // Navigation Links
                        _data.def('navigationLinks', {
                            // Value
                            value: (function navigationLinks() {
                                // Initialization > Data
                                let data = namedArray('NavigationLinks',
                                    // Home
                                    namedObject('NavigationLink', {
                                        content: 'LapysJS',
                                        id: 'home',
                                        name: 'Home',
                                        title: 'Home'
                                    })
                                );

                                /* Loop
                                        Index Data.
                                */
                                for (let i of data) {
                                    // Initialization > Metadata
                                    let metadata = i.name.lower().replace(/\-/g, '_');

                                    // Modification > Data > [Loop Counter]
                                    !(!(metadata in data) && metadata !== 'length') || (data[metadata] = i)
                                }

                                // Return
                                return data
                            })()
                        });

                    // Return
                    return data
                })()
            });
                // Definition
                    // Information
                    def('info', {
                        // Get
                        get: function InformationManager() {
                            // Return
                            return informationManager
                        }
                    });

                    // Navigation
                    def('nav', {
                        // Get
                        get: function navigation() {
                            // Return
                            return informationManager.navigationLinks
                        }
                    })
    })(window.parent, window.parent.document, typeof global != 'undefined' ? global : null, window.undefined || void 0)
})(Number(), String())
