/**
    @author: Lapys Dev Team
    @description: LapysJS is an intuitive, minimalist web library for quick development.
    @version: 0.0.7
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Successful integration returns a 0, otherwise a 1.
            - Supported development environments (in order priority):
                -- Google Chrome (browser)
                -- Safari (browser)
                -- UC Browser (browser)
                -- Mozilla Firefox (browser)
                -- Opera (browser)
                -- Internet Explorer (browser)
                    --- Internet Explorer 9
                    --- Internet Explorer 10
                    --- Internet Explorer 11
                -- Microsoft Edge (browser)
                -- Android (browser)
                -- Node (development environment)
                -- Tor (browser)
            - The LapysJS library tries to be as independent of mutable native code as developers/ users could override key features necessary for scripting.
                -- 'Native' in the sense of JavaScript built-in & non-primitive methods, objects, properties & values,
                    all other vanilla features are allowed (such as control structures, language-specific keywords, primitive values and so on).
            - Over its years of development, the library is still a bare-bones version of what it could be (and code could definitely be re-factored).

    --- UPDATE REQUIRED ---
        #Lapys:
            - Target development environments (these environments may lack a core & modern JavaScript feature or not work for some other reasons..):
                -- Internet Explorer (browser)
                    --- Internet Explorer 5 --- NOTE (Lapys) -> Freezes indefinitely for non-apparent reasons.
                    --- Internet Explorer 7 --- NOTE (Lapys) -> Freezes indefinitely for non-apparent reasons.
                    --- Internet Explorer 8 --- NOTE (Lapys) -> Missing modern JavaScript feature.
                -- Samsung Internet --- NOTE (Lapys) -> Untested...
                -- Avast SafeZone Browser (browser) --- NOTE (Lapys) -> Untested...
                -- others...
*/
(function Main() {
    /* Initialization */
        // Arguments
        var args = [],

        // Lapys Development Kit
        LapysDevelopmentKit = {
            // Constants
            constants: {defaults: {}, number: {}, string: {}},

            // Environment
            environment: {global: null, state: "unknown", type: "standard"},

            // Functions
            functions: {},

            // Information
            information: {},

            // Math
            math: {},

            // Objects --- NOTE (Lapys) -> Different from the conventional Lapys Development Kit.
            objects: {},

            // Settings
            settings: {}
        },

        // Undefined
        undefined = void 0;

    /* Definition */
        // Lapys Development Kit (...)
        var LDK = LapysDevelopmentKit,
            LDKC = LapysDevelopmentKit.constants,
            LDKE = LapysDevelopmentKit.environment,
            LDKF = LapysDevelopmentKit.functions,
            LDKI = LapysDevelopmentKit.information,
            LDKM = LapysDevelopmentKit.math,
            LDKO = LapysDevelopmentKit.objects,
            LDKS = LapysDevelopmentKit.settings;

    /* Modification */
        /* Lapys Development Kit */
            // Constants
            // Functions
                // Is
                    // Void
                    LapysDevelopmentKit.functions.isVoid = function isVoid(arg) { return typeof arg == "undefined" };

                // String > Prototype
                    // Length
                    LapysDevelopmentKit.functions.stringPrototypeLength = function stringPrototypeLength(string) { var length = 0; while (!LDKF.isVoid(string[length])) length += 1; return length };

                    // Is Digit
                    LapysDevelopmentKit.functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(character) { return character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9' };

                    // Is Numeric
                    LapysDevelopmentKit.functions.stringPrototypeIsNumeric = function stringPrototypeIsNumeric(string) { var iterator = LDKF.stringPrototypeLength(string); while (iterator) if (!LDKF.stringPrototypeIsDigit(string[iterator -= 1])) return false; return true };

                // Array > Prototype
                    // Add To Front
                    LapysDevelopmentKit.functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, item) { array[LDKF.arrayPrototypeLength(array)] = item };

                    // Length --- NOTE (Lapys) -> Luckily, the `for...in` statement is compatible with modern browsers.
                    LapysDevelopmentKit.functions.arrayPrototypeLength = function arrayPrototypeLength(array) { var key, length = 0; for (key in array) LDKF.stringPrototypeIsNumeric(key) && (length += 1); return length };

                // Get Arguments Length --- NOTE (Lapys) -> Oddly enough, the `arguments.length` property is not mutable.
                LapysDevelopmentKit.functions.getArgumentsLength = function getArgumentsLength(argumentsList) { return argumentsList.length };

                // Is
                    // Constructible
                    LapysDevelopmentKit.functions.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                    // Non-Constructible
                    LapysDevelopmentKit.functions.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                    // Null
                    LapysDevelopmentKit.functions.isNull = function isNull(arg) { return arg === null };

                // Object
                    // Prototype
                        // Get Property
                        LapysDevelopmentKit.functions.objectPrototypeGetProperty = function objectPrototypeGetProperty(object, propertyName) { try { return object[propertyName] } catch (error) {} };

                        // Has Property
                        LapysDevelopmentKit.functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyName) { try { return propertyName in object } catch (error) {} return false };

                        // Set Property
                        LapysDevelopmentKit.functions.objectPrototypeSetProperty = function objectPrototypeSetProperty(object, property, value) {
                            // Logic > (...)
                            if (LDKF.getArgumentsLength(arguments) === 3) return LDKF.objectPrototypeSetProperty(object, {name: property, value: value});
                            else try { return object[property.name] = property.value } catch (error) {}
                        };

            // Objects
                // Object --- CHECKPOINT ---
                LapysDevelopmentKit.objects.object = ({}).constructor;
                    // Prototype --- CHECKPOINT ---
                    LapysDevelopmentKit.objects.objectPrototype = LDKO.object.prototype;
                        // Has Own Property
                        LapysDevelopmentKit.objects.objectPrototypeHasOwnProperty = LDKF.objectPrototypeGetProperty(LDKO.objectPrototype, "hasOwnProperty");

            // Functions
                // Object > Has Own Property --- UPDATE REQUIRED (Lapys) -> Should not use the `Function.prototype.call` method.
                LapysDevelopmentKit.functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, propertyName) { return LDKO.objectPrototypeHasOwnProperty.call(object, propertyName) };

            // Objects
                // Object
                    // Get Prototype Of --- CITE (Lapys) -> `https://gist.github.com/subtleGradient/1052392`.
                    LapysDevelopmentKit.objects.objectGetPrototypeOf = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "getPrototypeOf"))
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "getPrototypeOf");

                        else {
                            // Function > Get Prototype Value
                            function getPrototypeValue(object, propertyName) {
                                // Initialization > Own Value
                                var ownValue;

                                // Error Handling
                                try { if (LDKF.objectPrototypeHasOwnProperty(object, propertyName)) { ownValue = object[propertyName]; delete object[propertyName] } }
                                catch (error) { throw error }
                                finally { LDKF.objectPrototypeSetProperty(object, {name: propertyName, value: ownValue}) }
                            }

                            // Update > Method
                            method = typeof "".__proto__ == "object" ?
                                function getPrototypeOf(object) { return getPrototypeValue(object, "__proto__") } :
                                function getPrototypeOf(object) { return getPrototypeValue(object, "constructor").prototype }
                        }

                        // Update > Method
                        (typeof method == "function") || (method = undefined);

                        // Return
                        return method
                    })();

            // Functions
                // Object
                    // Get Prototype Of
                    LapysDevelopmentKit.functions.objectGetPrototypeOf = function objectGetPrototypeOf(object) { return LDKO.objectGetPrototypeOf(object) };

                    // Prototype
                        // __Proto__
                        LapysDevelopmentKit.functions.objectPrototype__Proto__ = function objectPrototype__Proto__(object) {
                            // Initialization > __Prototype__
                            var __proto__ = null;

                            // Error Handling
                            try {
                                // Logic > Update > __Prototype__
                                if (LDKF.objectPrototypeHasProperty(object, "__proto__")) __proto__ = object.__proto__;
                                else if (typeof LDKO.objectGetPrototypeOf == "function") __proto__ = LDKF.objectGetPrototypeOf(object)
                            } catch (error) {}

                            // Return
                            return __proto__
                        };

                        // Constructor
                        LapysDevelopmentKit.functions.objectPrototypeConstructor = function objectPrototypeConstructor(object) {
                            // Initialization > (Constructor, Is Constructible)
                            var constructor, isConstructible = LDKF.isConstructible(object);

                            // Error Handling
                            try { if (typeof (constructor = isConstructible ? object.constructor : null) != "function") throw {} }
                            catch (error) {
                                // Error Handling > Update > Constructor
                                try { constructor = isConstructible ? (LDKF.objectPrototype__Proto__(object) || {}).constructor : null }
                                catch (error) { constructor = null }
                            }

                            // Update > Constructor
                            (typeof constructor != "function" && !LDKF.isNull(constructor)) && (constructor = null);

                            // Return
                            return constructor
                        };

                // To String
                LapysDevelopmentKit.functions.toString = function toString(arg) { try { return arg + "" } catch (error) {} return LDKO.string(arg) };

            /* Environment > (...)
                    --- NOTE ---
                        #Lapys: Configure the Lapys Development Kit to the current environment.
                            - It tests properly because the `typeof` keyword does not assert reference errors.
            */
            (function() {
                // LapysDevelopmentKit.environment.type = "framework"; // NOTE (Lapys) -> Electron
                // LapysDevelopmentKit.environment.type = "library"; // NOTE (Lapys) -> LapysJS, jQuery
                // LapysDevelopmentKit.environment.type = "runtime"; // NOTE (Lapys) -> Node.js
                // LapysDevelopmentKit.environment.type = "standard"; // NOTE (Lapys) -> ...

                // Logic
                if (typeof window != "undefined") {
                    // Modification > (Lapys Development Kit > Environment) > (Global, State, Type)
                    LapysDevelopmentKit.environment.global = window;
                    LapysDevelopmentKit.environment.state = "ok";
                    LapysDevelopmentKit.environment.type = "standard";

                    // {Electron JS} Logic
                    if (
                        LDKF.objectPrototypeHasProperty(window, "process") && (function() {
                            try {
                                var process;
                                if (process = LDKF.objectPrototypeGetProperty(window, "process"))
                                    return LDKF.objectPrototypeHasProperty(process, "type") && !!process.type &&
                                        LDKF.objectPrototypeHasProperty(process, "versions") && typeof LDKF.objectPrototypeGetProperty(LDKF.objectPrototypeGetProperty(process, "versions"), "electron") == "string"
                            } catch (error) {}
                        })()
                    ) {
                        LapysDevelopmentKit.environment.global = window;
                        LapysDevelopmentKit.environment.state = "ok";
                        LapysDevelopmentKit.environment.type = "framework"
                    }
                }

                // {Node.js} Logic
                if (
                    typeof global != "undefined" && typeof module != "undefined" && (function() {
                        // Error Handling > Return
                        try { return LDKF.toString(global) == "[object global]" && LDKF.objectPrototypeConstructor(global) === LDKO.object && typeof module.exports == "object" && LDKF.toString(module.exports) == "[object Object]" } catch (error) {}

                        // Return
                        return false
                    })
                ) {
                    // Modification > (Lapys Development Kit > Environment) > (Global(s), State, Type)
                    LapysDevelopmentKit.environment.global = global;
                    LapysDevelopmentKit.environment.globals = [LapysDevelopmentKit.environment.global, module];
                    LapysDevelopmentKit.environment.state = "ok";
                    LapysDevelopmentKit.environment.type = "runtime";

                    // Initialization > Argument Variable --- NOTE (Lapys) -> Get the `argv` list to update the Arguments variable.
                    var argv = (function() {
                        // Error Handling
                        try {
                            // Logic
                            if ("process" in global) {
                                // Initialization > Process
                                var process = global.process;

                                // Logic
                                if (
                                    "argv" in process &&
                                    typeof process == "object" && LDKF.toString(process) == "[object process]" &&
                                    typeof LDKF.objectPrototype__Proto__(process) == "object"
                                ) { var argv = process.argv; if (!!argv && typeof argv == "object" && LDKF.objectPrototypeConstructor(arg) === LDKF.objectPrototypeConstructor([])) return argv }
                            }
                        } catch (error) {}

                        // Return
                        return []
                    })(), iterator = LDKF.arrayPrototypeLength(argv), length = iterator;

                    // Loop > Update > Arguments
                    while (iterator) LDKF.arrayPrototypeAddToFront(args, argv[length - (iterator -= 1) - 1])
                }
            })();

    /* Initialization */
        // Global
        var GLOBAL = LapysDevelopmentKit.environment.global;

    /* Modification */
        /* Lapys Development Kit */
            // Objects
                // Regular Expression
                LapysDevelopmentKit.objects.regularExpression = LDKF.objectPrototypeConstructor(/ /);

                // Symbol
                LapysDevelopmentKit.objects.symbol = LDKF.objectPrototypeGetProperty(GLOBAL, "Symbol");

            // Functions
                // Object
                    // Is
                    LapysDevelopmentKit.functions.objectIs = function objectIs(objectA, objectB) { return objectA === objectB ? 0 !== objectA || 1 / objectA == 1 / objectB: objectA !== objectA && objectB !== objectB };

                // Regular Expression
                LapysDevelopmentKit.functions.regularExpression = function regularExpression(source) { return LDKF.getArgumentsLength(arguments) ? LDKO.regularExpression(source) : new LDKO.regularExpression };

                // String > Prototype
                    // Is Empty
                    LapysDevelopmentKit.functions.stringPrototypeIsEmpty = function stringPrototypeIsEmpty(string) { return !string };

                // To String
                LapysDevelopmentKit.functions.toString = function toString(arg) {};

                // Is Array
                LapysDevelopmentKit.functions.isArray = function isArray(arg) {};

                // Is Boolean
                LapysDevelopmentKit.functions.isBoolean = function isBoolean(arg) { return typeof arg == "boolean" };

                // Is Default
                LapysDevelopmentKit.functions.isDefault = function isDefault(arg) {
                    // Logic > Return
                    if (LDKF.isArray(arg)) return LDKF.objectIs(LDKF.arrayPrototypeLength(arg), 0) && LDKF.stringPrototypeIsEmpty(LDKF.toString(arg));
                    else if (LDKF.isBoolean(arg)) return !arg;
                    else if (LDKF.isFunction(arg)) return LDKF.toString(arg) == "function() {}";
                    else if (LDKF.isNull(arg)) return true;
                    else if (LDKF.isNumber(arg)) return LDKF.objectIs(arg, 0);
                    else if (LDKF.isRegularExpression(arg)) return (function(string) { return string == "//" || string == "/(?:)/" })(LDKF.toString(arg));
                    else if (LDKF.isString(arg)) return LDKF.stringPrototypeIsEmpty(arg);
                    else if (LDKF.isSymbol(arg)) return /* CHECKPOINT */;
                    else if (LDKF.isVoid(arg)) return true;
                    else return LDKF.isObject(arg) && LDKF.objectIs(LDKF.arrayPrototypeLength(LDKF.objectKeys(arg)), 0)
                };

                // Is False Boolean
                LapysDevelopmentKit.functions.isFalseBoolean = function isFalseBoolean(arg) { return LDKF.isBoolean(arg) && !arg };

                // Is Function

                // Is Number
                LapysDevelopmentKit.functions.isNumber = function isNumber(arg) { return typeof arg == "number" };

                // Is Regular Expression

                // Is String
                LapysDevelopmentKit.functions.isString = function isString(arg) { return typeof arg == "string" };

                // Is True Boolean
                LapysDevelopmentKit.functions.isTrueBoolean = function isTrueBoolean(arg) { return LDKF.isBoolean(arg) && !!arg };

                // To Default
                LapysDevelopmentKit.functions.toDefault = function toDefault(arg) {
                    // Logic > (...)
                    if (LDKF.isArray(arg)) return [];
                    else if (LDKF.isBoolean(arg)) return false;
                    else if (LDKF.isDefault(arg)) return arg;
                    else if (LDKF.isFunction(arg)) return function() {};
                    else if (LDKF.isNull(arg)) return null;
                    else if (LDKF.isNumber(arg)) return 0;
                    else if (LDKF.isRegularExpression(arg)) return new LDKF.regularExpression;
                    else if (LDKF.isString(arg)) return "";
                    else if (LDKF.isSymbol(arg)) return /* CHECKPOINT */;
                    else if (LDKF.isVoid(arg)) return undefined;
                    else {
                        // Initialization > Constructor
                        var constructor = LDKF.objectPrototypeConstructor(arg);

                        // Logic
                        if (LDKF.isFunction(constructor)) {
                            // Error Handling > Return
                            try { return new constructor } catch (error) {}
                            try { return constructor() } catch (error) {}
                        }

                        else
                            // Return
                            return {}
                    }
                };

    /* Function */
        // Initiate
        function init() {}

        // Update
        function update() {}

        // Terminate
        function terminate() {}

    // Initiate
    init();

    // Update
    update();

    // Terminate
    terminate();

    // Return
    return 0
})()
