/** Function > Main
    @author: Lapys Dev Team
    @description: AppJS is an extension of the AppJS library to serve as a foundation for starting projects.
    @version: 0.0.1
    @url: https://github.com/LapysDev/AppJS

    --- NOTE ---
        #lapys:
            - The Main function will return `1` if there`s an error and `0` if it ran successfully.
            - `1` represents an object (such as an error) being returned by this function.
*/
(function Main(args) {
    /* {Global Object Test} Logic
            [if statement]

            --- NOTE ---
                #lapys: Stop all processing if the
                    global object is not truthy.

        > Return
    */
    if (!window)
        return 1;

    /* {Browser Compatibility Test} Error Handling
            --- NOTE ---
                #lapys: Check if LapysJS exists and is the LapysJS object.
    */
    try { (LapysJS.constructor.name == 'LapysJS') || eval('error 001') }

    catch (error) {
        /* Execution > Error
                --- NOTE ---
                    #lapys: Prevent compressors and minifiers
                        from truncating the error type.
        */
        eval('throw new (class AppJSError extends (class AppJSError extends Error { constructor() { super("AppJS requires AppJS to install.\\n\\t" + error.message + "\\r") } }) { constructor() { super() } })')
    }

    /* Global Data */
        // AppJS Development Kit
        const AppJSDevelopmentKit = new (class AppJSDevelopmentKit extends (class DevelopmentKit {}) {
            // Constructor
            constructor() {
                // Super
                super();

                // Initialization > Target
                let that = this,
                    $that = that.constructor.prototype
            }
        });

    /* Function */
        /* Initialize
                --- NOTE ---
                    #lapys: Install the library.
        */
        function init(window, global, document, undefined, tmp) {
            // Error Handling
            try {
                /* {Library Pre-installation Test} Logic
                        [if statement]

                        --- NOTE ---
                            #lapys: Prevent the library from reinstalling itself.
                */
                if (typeof LapysJS.vendors.AppJS == 'undefined') {
                    // Update > LapysJS > Vendors
                    LapysJS.vendors.addElement(def('AppJS', {
                        // Value
                        value: new (class AppJS extends (class LapysJSVendor {}) {
                            // Constructor
                            constructor() {
                                // Super
                                super();

                                // Initialization > (Data, Processing Time, Target)
                                let data = new (function AppJS() {}),
                                    $data = data.constructor.prototype,
                                    processingTime = performance.now(),
                                    that = this;

                                // Modification > Data
                                    // Modification > Target
                                        // Miscellaneous
                                        $data.def('miscellaneous', {
                                            // Value
                                            value: new (function AppJSMiscellaneousData() {
                                                // Initialization > Target
                                                let that = this,
                                                    $that = that.constructor.prototype;

                                                // Modification > Target
                                                    // Custom Elements Allowed
                                                    $that.def('customElementsAllowed', {
                                                        // Value
                                                        value: registerElement(),

                                                        // Writable
                                                        writable: false
                                                    })
                                            })
                                        });
                                            // Definition
                                            $data.def('misc', {get: function miscellaneous() { return $data.miscellaneous }});

                                    // Script
                                    $data.def('script', {
                                        // Value
                                        value: document.currentScript,

                                        // Writable
                                        writable: false
                                    });

                                    // Total Processing Time
                                    $data.def('totalProcessingTime', {get: function() { return processingTime }});

                                    // Prototype
                                    $data.__proto__ = Object.create((new (class LapysJSVendor {})).constructor.prototype);

                                // Return
                                return data
                            }
                        })
                    }));

                    /* Global Data */
                        // HTML Jumbotron Element
                        def('HTMLJumbotronElement', (function() {
                            // Initialization > (Data, Metadata, Alpha)
                            let data = (function() {return 'jumbotron-element.jumbotron'.html}).getBody(),
                                metadata = (function() {let that=this;that.addClass('jumbotron')}).getBody(),
                                alpha = 'data = (class HTMLJumbotronElement extends ' + (AppJS.misc.customElementsAllowed ? 'HTMLElement' : '(class CustomElement {})') + ' { constructor() { super();\r' + (AppJS.misc.customElementsAllowed ? '' : data) + ' }; ' + (metadata ? 'connectedCallback() {' + metadata + '}' : '') + ' })';

                            // Return
                            return eval(alpha)
                        })());
                            // Registration
                            AppJS.misc.customElementsAllowed && registerElement('jumbotron-element', HTMLJumbotronElement)
                }

                /* Return
                        --- NOTE ---
                            #lapys: AppJS initialized properly.
                */
                return 0
            } catch (error) {
                // Set Timeout
                setTimeout(function() {
                    // Execution > Error
                    eval('throw new (class AppJSError extends Error { constructor() { super("AppJS did not install properly.\\n\\t" + error.message + "\\r") } })')
                });

                // Return
                return 1
            }
        }

        /* Update
                --- NOTE ---
                    #lapys: Allow services from the library to execute
                        after installation.
        */
        function update() {
            // Error Handling
            try {
                /* Execution > Error
                        --- NOTE ---
                            #lapys: Detect if the previous phase that is not the first
                                has executed without errors.
                */
                !arguments[arguments.length - 1] || eval('throw new (class AppJSProcessCycleError extends (class AppJSError extends Error { constructor() { super() } }) { constructor() { super() } })');

                /* Return
                        --- NOTE ---
                            #lapys: AppJS started services correctly.
                */
                return 0
            } catch (error) {
                // Set Timeout
                (error.constructor.name == 'AppJSProcessCycleError') || setTimeout(function() {
                    // Execution > Error
                    eval('throw new (class AppJSError extends Error { constructor() { super("Library services did not integrate correctly.\\n\\t" + error.message + "\\r") } })')
                });

                // Return
                return 1
            }
        }

        /* Terminate
                --- NOTE ---
                    #lapys: Termination process.
        */
        function terminate() {
            // Error Handling
            try {
                // Execution > Error
                !arguments[arguments.length - 1] || eval('throw new (class AppJSProcessCycleError extends (class AppJSError extends Error { constructor() { super() } }) { constructor() { super() } })');

                // Temporary Data > Functions > (...)
                tmp.functions.group('AppJS | ' + (AppJS.script.src.length > 150 ? AppJS.script.src.slice(0, 150) + '...' : AppJS.script.src) + ' (by Lapys Dev Team)');
                    tmp.functions.log('AppJS.processingTime', AppJS.def('totalProcessingTime', {value: performance.now() - AppJS.totalProcessingTime, writable: false}));
                    tmp.functions.log('AppJS.ready', true);
                tmp.functions.groupEnd();

                /* Return
                        --- NOTE ---
                            #lapys: The script ran smoothly.
                */
                return 0
            } catch (error) {
                // Set Timeout
                (error.constructor.name == 'AppJSProcessCycleError') || setTimeout(function() {
                    // Execution > Error
                    eval('throw new (class AppJSError extends Error { constructor() { super("Error in AppJS round-up process.\\n\\t" + error.message + "\\r") } })')
                });

                // Return
                return 1
            }
        }

        /* {Terminate} Return
                --- NOTE ---
                    #lapys: Each function (phase) is passed as a final parameter to
                        the succeeding phase.
        */
        return terminate.call(
            AppJSDevelopmentKit, window.parent, typeof global == 'undefined' ? void 0 : global, window.parent.document, void 0, tmp,

            // {Update}
            update.call(AppJSDevelopmentKit, window.parent, typeof global == 'undefined' ? void 0 : global, window.parent.document, void 0, tmp,
                // {Initialize}
                init.call(
                    AppJSDevelopmentKit, window.parent, typeof global == 'undefined' ? void 0 : global, window.parent.document, void 0, tmp,

                    // {[Function]}
                    (function() {})
                )
            )
        )
})([String()])
