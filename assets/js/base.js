// Function > Main
(function Main(argc, argv) {
    // Initialization > (LapysJS) (Error, Development Kit (...))
    const LapysJS = argv[0],
        LapysJSError = argv[1],
        LDK = argv[2],
        LDKC = LDK.constants,
        LDKE = LDK.features,
        LDKF = LDK.storage.functions,
        LDKG = LDK.global,
        LDKI = LDK.info,
        LDKO = LDK.objects,
        tmp = LDK.tmp.valueOf(),
        tmpObjects = LDK.tmp.objects;

    /* Global Data */
        // Manager
        def('MANAGER', {
            // Value
            value: new (def('Manager', class Manager {
                // Constructor
                constructor() {
                    // Initialization > Manager (Constructor, Prototype)
                    let manager = this,
                        managerConstructor = manager.constructor,
                        managerProto = manager.__proto__;

                    // Modification > Manager Prototype
                        // (To String, Value Of, (...))
                        managerProto.def('toString', {value: function toString() { return managerProto.valueOf() }});
                        managerProto.def('valueOf', {value: function valueOf() { return manager }});
                        managerProto.def(Symbol.toStringTag, {value: 'Manager'});

                    // Return
                    return manager
                }
            }))
        });
            // Information
            MANAGER.__proto__.def('info', {
                // Dynamic URL
                dynamicURL: def('DYNAMIC_URL', (function() {
                    // Initialization > URL
                    let url = '';

                    // Return
                    return url
                })())
            });

            // Types
            MANAGER.__proto__.def('types', LDKF.customObject('ManagerTypesList', {
                // Web
                web: def('WebManager', {
                    // Value
                    value: new (class WebManager extends MANAGER.constructor {
                        // Constructor
                        constructor() {
                            // Initialization > (Length, Super Arguments)
                            let length = arguments.length,
                                superArguments = 'super(';

                            // Repeat
                            repeat(iterator => superArguments += 'arguments[' + iterator + ']' + (iterator == length - 1 ? '' : ''), length);

                            // Execution
                            eval(superArguments + ')');

                            // Initialization > Target
                            let that = this,
                                $that = that.__proto__;

                            // Modification > Target
                                // Global
                                $that.def('global', {
                                    // Assets
                                    assets: {
                                        // Images
                                        images: {
                                            // Logo
                                            logo: DYNAMIC_URL + 'assets/img/png/logo.png'
                                        }
                                    }
                                });

                            // Return
                            return that
                        }
                    })
                })
            }));

        // Assets --- CHECKPOINT ---
        def('ASSETS', {
            // Value
            value: (function() {
                // Initialization > Object
                let object = {};

                // Return
                return object
            })()
        });

    // Return
    return 0
})([''], [LapysJS, LapysJSError, LapysJS.valueOf()])
