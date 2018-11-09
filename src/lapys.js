/**
    @author: Lapys Dev Team
    @description: LapysJS is a minimalistic JavaScript library that incorporates native features only.
    @version: 0.0.6
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Modules are encased as functions.
            - Successful integration returns a 0, otherwise a 1.
            - Supported development environments:
                -- Google Chrome (browser)
                -- Internet Explorer (browser)
                    --- Internet Explorer 5
                    --- Internet Explorer 7
                    --- Internet Explorer 8
                    --- Internet Explorer 9
                    --- Internet Explorer 10
                    --- Internet Explorer 11
                -- Microsoft Edge (browser)
                -- Mozilla Firefox (browser)
                -- Node (development environment)
                -- Opera (browser)
                -- Tor (browser)
            - The library tries to be as independent of mutable native code as developers/ users could override key features necessary for scripting.
                -- 'Native' in the sense of JavaScript built-in & non-primitive methods, objects, properties & values,
                    all other vanilla features are allowed (such as control structures, language-specific keywords, primitive values and so on).
            - Over its years of development, the library is still a bare-bones version of what it could be (and code could definitely be re-factored).

    --- UPDATE REQUIRED ---
        #Lapys:
            - Target development environments:
                -- Avast SafeZone Browser (browser) --- NOTE (Lapys) -> Untested...
                -- Safari (browser)
                -- UC Browser (browser) --- NOTE (Lapys) -> Untested...
                -- others...
*/
(function() {
    // Initialization > (Arguments, Development Environments, Global)
    var args = [],
        DEVELOPMENT_ENVIRONMENT = {
            // Add
            add: function add(environment) {
                // Initialization > Environments
                var environments =  DEVELOPMENT_ENVIRONMENT.environments;

                // Update > Environments
                DEVELOPMENT_ENVIRONMENT.includes(environment) || (environments[environments.length] = environment)
            },

            // Environments
            environments: [],

            // Includes
            includes: function includes(environment) {
                // Initialization > (Environments, Iterator)
                var environments = DEVELOPMENT_ENVIRONMENT.environments, iterator = environments.length;

                // Loop > Logic > Return
                while (iterator) if (environments[iterator -= 1] === environment) return !0;

                // Return
                return !1
            },

            /* (Constructor > Prototype) */
            __proto__: new function DevelopmentEnvironment() {}
        }, GLOBAL = {
            // Add
            add: function add(arg, referenceName) { GLOBAL.objects[referenceName] = arg },

            // Define
            define: function define(arg, referenceName) {
                // Logic > Modification > Global > (Defined) Main > Argument
                if (!GLOBAL.definedMain) {
                    GLOBAL.definedMain = !0;
                    GLOBAL.main = arg
                }

                // Global > Add
                GLOBAL.add(arg, referenceName)
            },

            // Defined Main
            definedMain: !1,

            // Main --- NOTE (Lapys) -> The commonly referenced global object.
            main: null,

            // Objects --- NOTE (Lapys) -> Some development environments may contain multiple global objects.
            objects: {},

            /* Value Of */
            valueOf: function valueOf() { return GLOBAL.main },

            /* (Constructor > Prototype) */
            __proto__: new function Global() {}
        };

    // Logic --- NOTE (Lapys) -> Get the global object and return the current development environment as well.
        // {Browser}
        if (typeof window != "undefined") {
            // (...)
            DEVELOPMENT_ENVIRONMENT.add("Browser");
            GLOBAL.define(window, "window");

            // (...) {Electron JS}
            (
                "process" in window && (function() {
                    // Error Handling
                    try {
                        // Initialization > Process
                        var process;

                        // Logic > Return
                        if (process = window.process)
                            return "type" in process && process.type && "versions" && process && typeof process.versions["electron"] == "string"
                    } catch (error) {}
                })()
            ) && DEVELOPMENT_ENVIRONMENT.add("Electron JS")
        }

        // {Node JS}
        if (
            typeof global != "undefined" && typeof module != "undefined" && (function() {
                // Error Handling
                try {
                    // Logic
                    return global + "" == "[object global]" && global.constructor === ({}).constructor &&
                        typeof module.exports == "object" && module.exports + "" == "[object Object]"
                } catch (error) {}
            })()
        ) {
            // (...)
            DEVELOPMENT_ENVIRONMENT.add("Node JS");

            GLOBAL.define(global, "global");
            GLOBAL.add(module, "module");

            // Initialization > (...)
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
                            typeof process == "object" && process + "" == "[object process]" &&
                            typeof process.__proto__ == "object"
                        ) {
                            // Initialization > Argument Value
                            var argv = process.argv;

                            // Logic > Return
                            if (
                                typeof argv == "object" && !!argv &&
                                argv.constructor === [].constructor
                            ) return argv
                        }
                    }
                } catch (error) {}

                // Return
                return []
            })(), iterator = argv.length, length = iterator;

            // Loop > Update > Arguments
            while (iterator) args[length - (iterator -= 1) - 1] = argv[length - iterator - 1]
        }

    /* Function > Main */
    (function Main(DEVELOPMENT_ENVIRONMENT, GLOBAL, args) {
        /* Global Data
                --- WARN ---
                    #Lapys: Private global data.
                        - For compatibility & legacy reasons,
                            the `const` keyword will not be used to define constants and
                            the `let` keyword will not be used to locally define variables.
        */
            // Author --- NOTE (Lapys) -> Author of the library.
            var AUTHOR = "Lapys",

            // Description --- NOTE (Lapys) -> Description of the library.
            DESCRIPTION = "LapysJS is a minimalistic JavaScript library that incorporates native features only.",

            // Development Environment --- NOTE (Lapys) -> Different types of platforms that implement JavaScript.
                // Is Browser
                DEVELOPMENT_ENVIRONMENT_IS_BROWSER = DEVELOPMENT_ENVIRONMENT.includes("Browser"),

                // Node JS
                DEVELOPMENT_ENVIRONMENT_IS_NODEJS = DEVELOPMENT_ENVIRONMENT.includes("NodeJS"),

            // Global Main
            GLOBAL_MAIN = GLOBAL.valueOf(),

            // Library {Is} Pre-Installed --- NOTE (Lapys) -> This value may get updated in the code.
            LIBRARY_PREINSTALLED = !1,

            // URL --- NOTE (Lapys) -> External hyperlink reference to the library's open source code.
            URL = "https://www.github.com/LapysDev/LapysJS",

            // Version --- NOTE (Lapys) -> Current version of the library.
            VERSION = "0.0.6";

        /* Polyfill > (Constructor > Prototype)
                --- NOTE ---
                    #Lapys: Try to polyfill the `__proto__` property if the development environment does not implement it.
                        - At this point, it is improbable to code without mutable native JavaScript features.

                --- UPDATE REQUIRED ---
                    #Lapys: For some legacy environments (Internet Explorer...), the `Object.setPrototypeOf` method may not exist, in such scenario,
                        how will the property be polyfilled?
        */
        try {"__proto__"in{}||Object.defineProperty(Object.prototype,"__proto__",{configurable:!1,enumerable:!1,get:function(){try{return Object.getPrototypeOf(this)}catch(b){}return Object.getPrototypeOf(this)},set:function(b){var c=this;try{try{return Object.setPrototypeOf(c,b)}catch(e){}return Object.setPrototypeOf(c,b)}catch(e){for(var d in b)try{object[d]=b[d]}catch(f){}}return c}})}
        catch (error) {}

        /* Global Data --- NOTE (Lapys) -> Private data. */
            // False
            var FALSE = !1,

            // Hidden
            hidden = {},

            // True
            TRUE = !0,

            // Undefined
            undefined = void 0;

        /* Global Data --- NOTE (Lapys) -> Protected data. */
            /* Lapys Development Kit */
            var LapysDevelopmentKit = {
                // Features --- NOTE (Lapys) -> The level to which LapysJS can be customized by users.
                features: {
                    // Allow Application Model
                    allowAppModel: FALSE,

                    // Debugging Mode
                    debugMode: FALSE,

                    // Document Object Model
                    DOM: {
                        // Custom Elements --- NOTE (Lapys) -> To be registered.
                        customElements: ["jumbotron-element", "toast-element", "tooltip-element"],

                        // Dynamic Elements --- NOTE (Lapys) -> That can be implemented (or not).
                        dynamicElements: ["accordion", "carousel", "draggable", "dropdown", "dynamic-text", "dynamic-time", "marquee", "scrollbar", "table", "toast", "tooltip"],

                        // Dynamic Features
                        dynamicFeatures: ["focus-attribute", "script-attribute"]
                    }
                },

                // Functions --- NOTE (Lapys) -> 'Immutable', private modules.
                functions: {
                    /* Get */
                    get: {__proto__: new function Get() {}},

                    /* Set */
                    set: {__proto__: new function Set() {}}
                },

                // Information --- NOTE (Lapys) -> Information presented to the user from the library.
                information: {
                    // Debugging Messages
                    debuggingMessages: {},

                    // Defaults
                    defaults: {},

                    // Error Messages
                    errorMessages: {}
                },

                // Miscellaneous
                miscellaneous: {
                    // Global Regular Expression Patterns --- NOTE (Lapys) -> Reminiscent of the GREP (g/re/p) text editing program.
                    GREP: {},

                    // Specifications
                    specifications: {},

                    // Strings
                    strings: {
                        // Digits
                        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],

                        // Lowercase Alphabets
                        lowercaseAlphabets: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

                        // Uppercase Alphabets
                        uppercaseAlphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                    }
                },

                // Objects --- NOTE (Lapys) -> 'Immutable', private values.
                objects: {
                    /* Custom --- NOTE (Lapys) -> Custom LapysJS data types or objects (except `LapysJSError`). */
                    custom: {
                        // CSS Property-Value
                        cssPropertyValue: function CSSPropertyValue(property, value) {},

                        // CSS Property-Value List
                        cssPropertyValueList: function CSSPropertyValueList() {},

                        // LapysJS Error
                        lapysJSError: function LapysJSError(message, stack) {},

                        // LapysJS Node List
                        lapysJSNodeList: function LapysJSNodeList() {},

                        // Pseudo Number
                        pseudoNumber: function PseudoNumber(characteristics, mantissa) {},

                        // Safe Number
                        safeNumber: function SafeNumber() {},

                        // (Constructor > Prototype)
                        __proto__: new function Custom() {}
                    },

                    /* Descriptions */
                    descriptions: {__proto__: new function Descriptions() {}}
                },

                /* (Constructor > Prototype) */
                __proto__: new function LapysDevelopmentKit() {}
            }, LDK = LapysDevelopmentKit,
                LDKf = LDK.features,
                    LDKfD = LDKf.DOM,
                LDKF = LDK.functions,
                    LDKFG = LDKF.get,
                    LDKFS = LDKF.set,
                LDKI = LDK.information,
                    LDKID = LDKI.debuggingMessages,
                    LDKId = LDKI.defaults,
                    LDKIE = LDKI.errorMessages,
                LDKM = LDK.miscellaneous,
                    LDKMG = LDKM.GREP,
                    LDKMS = LDKM.specifications,
                    LDKMs = LDKM.strings,
                LDKO = LDK.objects,
                    LDKOC = LDKO.custom,
                    LDKOD = LDKO.descriptions,

            /* LapysJS */
            LapysJS = {__proto__: new function LapysJS() {}};

        /* Modification */
            /* Lapys Development Kit */
                // Function
                    // Absolute
                    LDKF.abs = function abs(arg) { return LDKF.numberPrototypeIsPositive(LDKF.isNumber(arg) ? arg : arg = LDKF.number(arg)) ? arg : -arg };

                    // Array
                        // Prototype
                            // Add
                                // To Back --- NOTE (Lapys) -> May be faster than JavaScript's `Array.prototype.unshift`.
                                LDKF.arrayPrototypeAddToBack = function arrayPrototypeAddToBack(array, item) {
                                    // Initialization > (Iterator, Length)
                                    var iterator = arguments.length, length = iterator;

                                    // Update > Array
                                    LDKF.arrayPrototypeShift.call(LDKF.arrayPrototypeAddToBack, array, length - 1);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Array
                                        index && (array[index - 1] = arguments[index])
                                    }

                                    // Return
                                    return array
                                };

                                // To Front
                                LDKF.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, item) {
                                    // Initialization > (Iterator, Length, Index)
                                    var arrayIndex = array.length - 1,
                                        iterator = arguments.length, length = iterator;

                                    // Loop
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Array
                                        index && (array[arrayIndex += 1] = arguments[index])
                                    }

                                    // Return
                                    return array
                                };

                            // Cut
                            LDKF.arrayPrototypeCut = function arrayPrototypeCut(array, amount) {
                                // Initialization > Target
                                var that = this;

                                // Function > Is Private Call
                                function IS_PRIVATE_CALL() { return that === LDKF.arrayPrototypeCutIndex || that === LDKF.arrayPrototypeShift }

                                // Logic
                                if (IS_PRIVATE_CALL() || (amount && LDKF.numberPrototypeIsInteger(amount)))
                                    // Logic
                                    if (that === LDKF.arrayPrototypeShift || LDKF.numberPrototypeIsNegative(amount)) {
                                        // Initialization > Length
                                        var length = array.length;

                                        // Loop
                                        while (amount && length) {
                                            // Initialization > Iterator
                                            var iterator = length;

                                            // Loop
                                            while (iterator) {
                                                // Initialization > Index
                                                var index = length - (iterator -= 1) - 1;

                                                // Update > Array
                                                index - 1 > 0 ? array[index - 1] = array[index] : array[0] = array[1]
                                            }

                                            // Update > (Amount, Length)
                                            amount += 1;
                                            length -= 1
                                        }

                                        // Update > Array
                                        array.length = length
                                    }

                                    else
                                        // Logic > Update > Array
                                        if (amount > array.length) array.length = 0;
                                        else array.length -= amount;

                                // Return
                                return array
                            };

                            // Cut Index
                            LDKF.arrayPrototypeCutIndex = function arrayPrototypeCutIndex(array, index) {
                                // Initialization > (Array Length, Iterator, Length)
                                var arrayLength = array.length - 1,
                                    iterator = arguments.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Arguments Index
                                    var argumentsIndex = length - (iterator -= 1) - 1;

                                    // Logic
                                    if (argumentsIndex) {
                                        // Initialization > Array Index
                                        var arrayIndex = arguments[argumentsIndex];

                                        // Logic
                                        if (!arrayIndex) {
                                            // Update > Array (Length)
                                            LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeCutIndex, array, -1);
                                            arrayLength -= 1
                                        }

                                        else if (arrayIndex == arrayLength) {
                                            // Update > Array (Length)
                                            LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeCutIndex, array, 1);
                                            arrayLength -= 1
                                        }

                                        else if (LDKF.withinFoci(arrayIndex, 0, arrayLength)) {
                                            // Initialization > Array Iterator
                                            var arrayIterator = arrayIndex;

                                            // Loop > Update > Array
                                            while (arrayIterator != arrayLength)
                                                array[arrayIterator] = array[arrayIterator += 1];

                                            // Update > Array Length
                                            arrayLength -= 1
                                        }
                                    }
                                }

                                // Update > Array
                                array.length = arrayLength + 1;

                                // Return
                                return array
                            };

                            // Includes
                            LDKF.arrayPrototypeIncludes = function arrayPrototypeIncludes(array, item) {
                                // Initialization > Iterator
                                var iterator = array.length;

                                // Loop > Logic > Return
                                while (iterator) if (array[iterator -= 1] === item) return TRUE;

                                // Return
                                return FALSE
                            };

                            // Index
                            LDKF.arrayPrototypeIndex = function arrayPrototypeIndex(array, item) {
                                // Initialization > (Iterator, Length)
                                var iterator = array.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Logic > Return
                                    if (array[index] === item) return index
                                }

                                // Return
                                return -1
                            };

                            // Insert Index
                            LDKF.arrayPrototypeInsertIndex = function arrayPrototypeInsertIndex(array, item, index) {
                                // Initialization > (Array Length, Iterator, Length)
                                var arrayLength = array.length,
                                    iterator = arguments.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Arguments Index
                                    var argumentsIndex = length - (iterator -= 1) - 1;

                                    // Logic
                                    if (argumentsIndex > 1) {
                                        // Initialization > Array Index
                                        var arrayIndex = arguments[argumentsIndex];

                                        // Logic
                                        if (!arrayIndex) {
                                            // Update > Array (Length)
                                            LDKF.arrayPrototypeAddToBack(array, item);
                                            arrayLength += 1
                                        }

                                        else if (arrayIndex == arrayLength)
                                            // Update > Array
                                            array[(arrayLength += 1) - 1] = item;

                                        // (...) --- NOTE (Lapys) -> Shift the items of the array from an index before appending the Item.
                                        else if (LDKF.withinFoci(arrayIndex, 0, arrayLength)) {
                                            // Initialization > Array Iterator
                                            var arrayIterator = (arrayLength += 1) - 1;

                                            // Loop > Update > Array
                                            while (arrayIterator != arrayIndex)
                                                array[arrayIterator] = array[arrayIterator -= 1];

                                            // Update > Array
                                            array[arrayIndex] = item
                                        }

                                        else if (arrayIndex > arrayLength) {
                                            // Update > Array (Length)
                                            array[arrayIndex] = item;
                                            arrayLength += 1
                                        }

                                        else {
                                            // Update > (Array) (Index, Length)
                                            arrayIndex = -arrayIndex;
                                            LDKF.arrayPrototypeShift(array, arrayIndex);
                                            array[0] = item;
                                            arrayLength += arrayIndex
                                        }
                                    }
                                }

                                // Return
                                return array
                            };

                            // Join
                            LDKF.arrayPrototypeJoin = function arrayPrototypeJoin(array, separator) {
                                // Initialization > (Iterator, Length, Stream)
                                var iterator = array.length, length = iterator,
                                    stream = "";

                                // Logic
                                if (LDKF.isFunction(separator))
                                    // Loop
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Stream
                                        stream += LDKF.string(separator.call(array, index, array[index]))
                                    }

                                else {
                                    // Update > Separator
                                    separator = LDKF.string(separator);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1, item = LDKF.string(array[index]);

                                        // Update > Stream
                                        stream += index == length - 1 ? item : item + separator
                                    }
                                }

                                // Return
                                return stream
                            };

                            // Last Index
                            LDKF.arrayPrototypeLastIndex = function arrayPrototypeLastIndex(array, item) {
                                // Initialization > Iterator
                                var iterator = array.length;

                                // Loop > Logic > Return
                                while (iterator) if (array[iterator -= 1] === item) return iterator;

                                // Return
                                return -1
                            };

                            // Range
                            LDKF.arrayPrototypeRange = function arrayPrototypeRange(array, start, end) {
                                // Update > Array
                                array = LDKF.arrayPrototypeShallowClone(array);

                                // Initialization > (Length, Index, Range)
                                var length = array.length, index = -1,
                                    range = [];

                                // Update > (Start, End)
                                (LDKF.numberPrototypeIsNaN(start) || LDKF.numberPrototypeIsNegativeInfinity(start)) && (start = 0);
                                (LDKF.numberPrototypeIsNaN(end) || LDKF.numberPrototypeIsNegativeInfinity(end)) && (end = 0);
                                LDKF.numberPrototypeIsPositiveInfinity(end) && (end = length);
                                LDKF.numberPrototypeIsPositiveInfinity(start) && (start = end);
                                LDKF.numberPrototypeIsNegative(start) && (start = LDKF.revolveWithinRange(start, 0, length));
                                LDKF.numberPrototypeIsNegative(end) && (end = LDKF.revolveWithinRange(end, 0, length));

                                // Logic
                                if (start > end) {
                                    // Initialization > Former Start
                                    var formerStart = start;

                                    // Update > (Start, End)
                                    start = end;
                                    end = formerStart
                                }

                                // Update > End
                                (end > length) && (end = length);

                                // Logic > Loop > Update > Range
                                if (start < end) while (start != end) range[index += 1] = array[start += 1];

                                // Return
                                return range
                            };

                            // Remove --- CHECKPOINT ---
                                // All
                                // From Back
                                // From Front

                            // Repeat
                            // Replace
                                // All
                                // From Back
                                // From Front

                            // Reverse

                            // Shallow Clone
                            LDKF.arrayPrototypeShallowClone = function arrayPrototypeShallowClone(array) {
                                // Initialization > (Clone, Iterator, Length)
                                var clone = [],
                                    iterator = array.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Update > Clone
                                    clone[index] = array[index]
                                }

                                // Return
                                return clone
                            }

                            // Shallow Concatenate
                            LDKF.arrayPrototypeShallowConcatenate = function arrayPrototypeShallowConcatenate(arrayA, arrayB) {
                                // Initialization > (Array, Index, Iterator, Length)
                                var array = [], index = -1,
                                    iterator = arguments.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Concatenation Array (Iterator, Length)
                                    var concatenationArray = arguments[length - (iterator -= 1) - 1],
                                        concatenationArrayIterator = concatenationArray.length, concatenationArrayLength = concatenationArrayIterator;

                                    // Loop > Update > Array
                                    while (concatenationArrayIterator)
                                        array[index += 1] = concatenationArray[concatenationArrayLength - (concatenationArrayIterator -= 1) - 1]
                                }

                                // Return
                                return array
                            };

                            // Source Concatenate
                            LDKF.arrayPrototypeSourceConcatenate = function arrayPrototypeSourceConcatenate(array, concatenationArray) {
                                // Initialization > (Array Index, Iterator, Length)
                                var arrayIndex = array.length - 1,
                                    iterator = arguments.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Logic
                                    if (index) {
                                        // Initialization > Concatenation Array (Iterator, Length)
                                        var $concatenationArray = arguments[index],
                                            concatenationArrayIterator = $concatenationArray.length, concatenationArrayLength = concatenationArrayIterator;

                                        // Loop > Update > Array
                                        while (concatenationArrayIterator)
                                            array[arrayIndex += 1] = $concatenationArray[concatenationArrayLength - (concatenationArrayIterator -= 1) - 1]
                                    }
                                }

                                // Return
                                return array
                            };

                            // Shift
                            LDKF.arrayPrototypeShift = function arrayPrototypeShift(array, amount) {
                                // Logic
                                if (this === LDKF.arrayPrototypeAddToBack || (amount && LDKF.numberPrototypeIsInteger(amount)))
                                    // Logic
                                    if (LDKF.numberPrototypeIsNegative(amount))
                                        // Update > Array
                                        LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeShift, array, amount);

                                    else {
                                        // Initialization > (Iterator, Length, Index)
                                        var iterator = array.length, length = iterator,
                                            index;

                                        // Loop > (...)
                                        while (iterator) array[index = length + (amount -= 1)] = array[iterator -= 1];
                                        while (index) delete array[index -= 1]
                                    }

                                // Return
                                return array
                            };

                            // Trim
                            // Trim Left
                            // Trim Right

                    // Boolean
                        // Prototype
                            // Is False
                            LDKF.booleanPrototypeIsFalse = function booleanPrototypeIsFalse(boolean) { return !boolean };

                            // Is True
                            LDKF.booleanPrototypeIsTrue = function booleanPrototypeIsTrue(boolean) { return !!boolean };

                    // Error
                    // Function
                        // Prototype
                            // Is Arrow
                            // Is Class
                            // Is Default
                            // Is Native
                    // Integer
                    LDKF.int = function int(arg) {
                        // Update > Number
                        var number = LDKF.number(arg);

                        // Return
                        return number - number % 1
                    };

                    /* Is */
                        // Array
                        // Array-Like
                        // Array Object
                        // Boolean
                        LDKF.isBoolean = function isBoolean(arg) { return typeof arg == "boolean" };

                        // Constructible
                        LDKF.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                        // Function --- CHECKPOINT ---
                        LDKF.isFunction = function isFunction(arg) { return typeof arg == "function" };

                        // Non-Constructible
                        LDKF.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                        // Number
                        LDKF.isNumber = function isNumber(arg) { return LDKF.isConstructible(arg) && typeof arg == "number" };

                        // Null
                        LDKF.isNull = function isNull(arg) { return !arg && arg === null && typeof arg == "object" };

                        // Regular Expression
                        // Strictly Array-Like
                        // Strictly Array Object
                        // String
                        LDKF.isString = function isString(arg) { return typeof arg == "string" };

                        // Symbol
                        LDKF.isSymbol = function isSymbol(arg) { return typeof arg == "symbol" };

                        // Void
                        LDKF.isVoid = function isVoid(arg) { return typeof arg == "undefined" };

                    // Iterate Object
                    // Number
                    LDKF.number = function number(arg) {
                        // Logic > (...)
                        if (!arguments.length) return 0;
                        else {
                            // Function > To Number From String
                            function toNumberFromString(arg) { return LDKO.number(LDKF.string(arg)) }

                            // Logic > (...)
                            if (LDKF.isSymbol(arg)) return toNumberFromString(arg);
                            else {
                                // Initialization > Value
                                var value;

                                // Error Handling > (...)
                                try { value = arg - 0 }
                                catch (error) {
                                    // Error Handling > Update > Value
                                    try { value = LDKO.number(arg) }
                                    catch (error) { value = toNumberFromString(arg) }
                                }

                                // Return
                                return value
                            }
                        }
                    };
                        // Prototype
                            // Is Even
                            LDKF.numberPrototypeIsEven = function numberPrototypeIsEven(number) { return LDKF.numberPrototypeIsInteger(number) && !(arg % 2) };

                            // Is Finite
                            LDKF.numberPrototypeIsFinite = function numberPrototypeIsFinite(number) { return !LDKF.numberPrototypeIsInfinite(number) };

                            // Is Infinite --- NOTE (Lapys) -> In the JavaScript sense.
                            LDKF.numberPrototypeIsInfinite = function numberPrototypeIsInfinite(number) {
                                // Update > Number
                                number = LDKF.abs(number);

                                // Return
                                return number + 1 == number - 1
                            };

                            // Is Integer
                            LDKF.numberPrototypeIsInteger = function numberPrototypeIsInteger(number) { return number === LDKF.int(number) };

                            // Is Not-a-Number
                            LDKF.numberPrototypeIsNaN = function numberPrototypeIsNaN(number) { return LDKF.isNumber(number) && LDKF.string(number) == "NaN" };

                            // Is Negative
                            LDKF.numberPrototypeIsNegative = function numberPrototypeIsNegative(number) { return number < 0 || LDKF.numberPrototypeIsNegativeZero(number) };

                            // Is Negative Infinity
                            LDKF.numberPrototypeIsNegativeInfinity = function numberPrototypeIsNegativeInfinity(number) { return LDKF.numberPrototypeIsNegative(number) && LDKF.numberPrototypeIsInfinite(number) };

                            // Is Negative Integer
                            LDKF.numberPrototypeIsNegativeInteger = function numberPrototypeIsNegativeInteger(number) { return LDKF.numberPrototypeIsNegative(number) && LDKF.numberPrototypeIsInteger(number) };

                            // Is Negative Zero
                            LDKF.numberPrototypeIsNegativeZero = function numberPrototypeIsNegativeZero(number) { return LDKF.objectIs(number, -0) };

                            // Is Non-Integer
                            LDKF.numberPrototypeIsNonInteger = function numberPrototypeIsNonInteger(number) { return !LDKF.numberPrototypeIsInteger(number) };

                            // Is Odd
                            LDKF.numberPrototypeIsOdd = function numberPrototypeIsOdd(number) { return LDKF.numberPrototypeIsInteger(number) && arg % 2 };

                            // Is Positive
                            LDKF.numberPrototypeIsPositive = function numberPrototypeIsPositive(number) { return number > 0 || LDKF.numberPrototypeIsPositiveZero(number) };

                            // Is Positive Infinity
                            LDKF.numberPrototypeIsPositiveInfinity = function numberPrototypeIsPositiveInfinity(number) { return LDKF.numberPrototypeIsPositive(number) && LDKF.numberPrototypeIsInfinite(number) };

                            // Is Positive Integer
                            LDKF.numberPrototypeIsPositiveInteger = function numberPrototypeIsPositiveInteger(number) { return LDKF.numberPrototypeIsPositive(number) && LDKF.numberPrototypeIsInteger(number) };

                            // Is Positive Zero
                            LDKF.numberPrototypeIsPositiveZero = function numberPrototypeIsPositiveZero(number) { return LDKF.objectIs(number, 0) };

                            // Is Safe
                            LDKF.numberPrototypeIsSafe = function numberPrototypeIsSafe(number) { return !(LDKF.numberPrototypeIsInfinite(number) || LDKF.numberPrototypeIsNaN(number)) && number >= -LDKO.numberMaxSafeInteger && number <= LDKO.numberMaxSafeInteger };

                            // Is Safe Integer
                            LDKF.numberPrototypeIsSafeInteger = function numberPrototypeIsSafeInteger(number) { return LDKF.numberPrototypeIsSafe(number) && LDKF.numberPrototypeIsInteger(number) };

                    // Object
                        // Is
                        LDKF.objectIs = function objectIs(argA, argB) { return argA === argB ? 0 !== argA || 1 / argA == 1 / argB: argA !== argA && argB !==argB };

                        // Prototype
                            // Delete Property
                            // Get Property
                            // Get Property Description
                            // Has Property
                            // Set Property
                            // Set Property Description
                    // Recur Object
                    // Repeat

                    // Revolve Within Range --- NOTE (Lapys) -> Helpful with negative indexes.
                    LDKF.revolveWithinRange = function revolveWithinRange(arg, start, end) {
                        // Initialization > Number
                        var number = LDKF.number(arg);

                        // Logic
                        if (start > end) {
                            // Initialization > Former Start
                            var formerStart = start;

                            // Update > (Start, End)
                            start = end;
                            end = formerStart
                        }

                        // Logic > Loop > Update > Number
                        if (number < start) while (number < start) number = end + number;
                        else if (number > end) while (number > end) number -= end;

                        // Return
                        return number
                    };

                    // String
                    LDKF.string = function string(arg) {
                        // Logic > (...)
                        if (!arguments.length) return "";
                        else if (LDKF.isSymbol(arg)) return LDKO.string(arg);
                        else try { return arg + "" } catch (error) {}

                        // Return
                        return LDKO.string(arg)
                    };
                        // Prototype
                            // Concatenate
                            // Cut
                            // Cut Index
                            // Includes
                            // Index
                            // Insert Index
                            // Is Alphabet
                            // Is Digit
                            // Is Lowercase
                            // Is Uppercase
                            // Last Index
                            // Range
                            // Remove
                                // All
                                // All From Back
                                // All From Front
                                // From Back
                                // From Front
                            // Repeat
                            // Replace
                                // All
                                // All From Back
                                // All From Front
                                // From Back
                                // From Front
                            // Reverse
                            // Shallow Clone
                            // Split
                            // Trim
                            // Trim Left
                            // Trim Right

                    // To Debug Message
                    LDKF.toDebugMessage = function toDebugMessage(message) {
                        // Update > Message
                        message = LDKF.stringPrototypeTrimRight(LDKF.string(message));

                        // Initialization > Message Last Character
                        var messageLastCharacter = message[message.length - 1];

                        // Return
                        return LDKId.prefix + message + (LDKF.stringPrototypeIsAlphabet(messageLastCharacter) || LDKF.stringPrototypeIsDigit(messageLastCharacter) ? '.' : "") + LDKId.suffix
                    };

                    // Warn

                    // Within Foci --- NOTE (Lapys) -> Exclusive conditioning...
                    LDKF.withinFoci = function withinFoci(arg, focusA, focusB) {
                        // Initialization > (Number, Length)
                        var number = this === LDKF.withinFociRange ? arg : LDKF.number(arg),
                            length = arguments.length;

                        // Logic > Return --- NOTE (Lapys) -> Not sure how to handle higher levels of focus.
                        if (length == 1) return TRUE;
                        else if (length == 2) return LDKF.objectIs(number, focusA);
                        else if (length == 3)
                            // (...) --- NOTE (Lapys) -> Focus A is assumed to be lesser than Focus B.
                            return number > focusA && number < focusB;

                        // Return
                        return null
                    };
                        // Range
                        LDKF.withinFociRange = function withinFociRange(arg, focusA, focusB) {
                            // Initialization > Length
                            var length = arguments.length;

                            // Logic > (...)
                            if (length == 1) return LDKF.withinFoci(arg);
                            else if (length == 2) return LDKF.withinFoci(arg, focusA);
                            else {
                                // Initialization > Number
                                var number = LDKF.number(arg);

                                // Logic > Return
                                if (length == 3) return number == focusA || number == focusB || LDKF.withinFoci.call(LDKF.withinFociRange, number, focusA, focusB)
                            }

                            // Return
                            return null
                        };

                    // Within Range --- NOTE (Lapys) -> Inclusive conditioning...
                    LDKF.withinRange = function withinRange(arg, focus, range) {
                        // Initialization > Number
                        var number = LDKF.number(arg);

                        // Return
                        return number >= focus - range && number <= focus + range
                    };

                    /* Get */
                        // Function
                            // Prototype
                                // Name
                                // Source Code
                                // Type

                        // Object
                            // Prototype
                                // Constructor
                                LDKFG.objectPrototypeConstructor = function objectPrototypeConstructor(object) {
                                    // Initialization > (Constructor, Object Is Constructible)
                                    var constructor, objectIsConstructible = LDKF.isConstructible(object);

                                    // Error Handling > (...)
                                    try { constructor = objectIsConstructible ? object.constructor : null }
                                    catch (error) {
                                        // Error Handling > Update > Constructor
                                        try { constructor = objectIsConstructible ? (LDKFG.objectPrototype__Proto__(object) || {}).constructor : null }
                                        catch (error) { constructor = null }
                                    }

                                    // Return
                                    return constructor
                                };

                                // {(Constructor > Prototype)}
                                LDKFG.objectPrototype__Proto__ = function objectPrototype__Proto__(object) {
                                    // Initialization > (...)
                                    var __proto__;

                                    // Error Handling > (...)
                                    try { __proto__ = object.__proto__ }
                                    catch (error) {
                                        // Error Handling > Update > (...)
                                        try { __proto__ = LDKO.objectGetPrototypeOf(object) }
                                        catch (error) { __proto__ = null }
                                    }

                                    // Return
                                    return __proto__
                                };

                    /* Set */

                // Information
                    // Debugging Messages
                        // Prefix
                        LDKId.prefix = "LapysJS [v" + VERSION + "] ->\n\t";

                        // Suffix
                        LDKId.suffix = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? '\r' : '\n';

                // Objects
                    // Number
                    LDKO.number = LDKFG.objectPrototypeConstructor(0);
                        // Maximum Safe Integer --- NOTE (Lapys) -> Fortunately, this value is independent of the JavaScript environment.
                        LDKO.numberMaxSafeInteger = 9007199254740991;

                    // Object
                    LDKO.object = LDKFG.objectPrototypeConstructor({});
                        // Get Prototype Of
                        LDKO.objectGetPrototypeOf = (function() {
                            // Return
                            return LDKO.object.getPrototypeOf
                        })();

                    // String
                    LDKO.string = LDKFG.objectPrototypeConstructor("");

            // LapysJS

            // Error > Prototype
                // Stack

            // Function > Prototype
                // Apply
                // Call

        console.log(LDK);
        GLOBAL_MAIN.LDK = LDK;
        GLOBAL_MAIN.LDKF = LDKF;
        GLOBAL_MAIN.LDKO = LDKO;
    })(DEVELOPMENT_ENVIRONMENT, GLOBAL, args)
})()
