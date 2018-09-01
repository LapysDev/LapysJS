/* Function > Main */
(function Main(argc, argv) {
    // Update > Argument Count
    argc += argv.length;

    /* Modification */
        // Location > URL
        location.constructor.prototype.def('url', {
            // Get
            get: function getURL() {
                // Initialization > URL
                let url = {};

                // Modification > URL
                    // Origin
                    url.def('origin', {get: function origin() { return location.origin }});

                    // Path
                    url.def('path', {get: function path() { return location.href }});

                    // Query
                    url.def('query', {get: function query() { return location.search }});

                    // Type
                    url.def('type', {get: function type() { return location.protocol }});

                    // Value Of
                    url.def('valueOf', {value: function valueOf() { return url.path }});

                // Return
                return url
            },

            // Set
            set: function setURL(path) {
                // Location > Assign > Path
                location.assign(path)
            }
        });

    /* Global Data */
        // Author
        var AUTHOR = 'Lapys Dev Team',

        // Description
        DESCRIPTION = 'LapysJS is a code library challenged/ designed to stand out from other code sources using native & simplistic means.',

        // URL
        URL = 'https://www.github.com/LapysDev/LapysJS',

        // Version
        VERSION = '0.0.1',

        // Manager
        Manager = def('MANAGER', {value: new (function Manager() {
            // Initialization > Target
            let that = this;

            // Modification
                // Dynamic Text
                that.def('dynamicText', {value: (function dynamicText() {
                    // Initialization > (Current URL, (URL) (Path, Address))
                    let currentURL = location.url,
                        urlPath = currentURL.path,
                        urlAddress = getURLAddress(urlPath),
                        url = null;

                    function getURLAddress(url) {
                        // (Loop > )Update > URL
                        while (url.hasChar('&')) url = url.getBeforeChar('&', true);
                        while (url.hasChar('?')) url = url.getBeforeChar('?', true);
                        url.endsWith(/[^\w]/) && (url = url.getBeforeChar('/', true));

                        // Return
                        return url
                    }

                    // Logic > Update > URL
                    if (
                        urlPath == 'about:blank' ||
                        urlAddress.endsWith(/index(.html|)/) ||
                        urlAddress.endsWith('LapysJS') ||
                        getURLAddress(currentURL.origin).endsWith('localhost')
                    )
                        url = '';

                    else if (urlAddress.getBeforeChar('/', true).endsWith('pages'))
                        url = '../../';

                    // Return
                    return url
                })()});

            // Return
            return that
        })});

    /* Functions */
        // On DOM Ready
        onDOMReady(function onDOMReady() {

        })
})(0, [
    /* {Location}
            --- NOTE ---
                #Lapys: Location is a default argument value.
    */
    (function location(){try{return document.currentScript.src}catch(error){}return'*'})(),

    // {Parent Window}
    (function parentWindow(){try{return window.parent}catch(error){}return null})()
])
