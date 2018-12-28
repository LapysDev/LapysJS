/**
    @author: Lapys Dev Team
    @description: LapysJS is a minimalistic JavaScript library that incorporates native features only.
    @version: 0.0.6
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Modules are encased as functions.
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
                // Logic
                if (!GLOBAL.definedMain) {
                    // Modification > Global > (Defined) Main > Argument
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
                            // Completion Error
                            lapysJSCompletionError: function LapysJSCompletionError(message, stack) {},

                            // Initialization Error
                            lapysJSInitializationError: function LapysJSInitializationError(message, stack) {},

                            // Installation Error
                            lapysJSInstallationError: function LapysJSInstallationError(message, stack) {},

                            // {Asynchronous} Update Error
                            lapysJSUpdateError: function LapysJSUpdateError(message, stack) {},

                        // LapysJS Node List
                        lapysJSNodeList: function LapysJSNodeList() {},

                        // Pseudo Number
                        pseudoNumber: function PseudoNumber(characteristics, mantissa) {},

                        // Safe Number
                        safeNumber: function SafeNumber(number) {},

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
                // Functions
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
                                function IS_PRIVATE_CALL() { return that === LDKF.arrayPrototypeCutIndex || that === LDKF.arrayPrototypeShift || that === LDKF.arrayPrototypeTrimLeft || that === LDKF.arrayPrototypeTrimRight }

                                // Logic
                                if (IS_PRIVATE_CALL() || (amount && LDKF.numberPrototypeIsInteger(amount)))
                                    // Logic
                                    if (that === LDKF.arrayPrototypeShift || that === LDKF.arrayPrototypeTrimLeft || LDKF.numberPrototypeIsNegative(amount)) {
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

                            // Filter Left
                            LDKF.arrayPrototypeFilterLeft = function arrayPrototypeFilterLeft(array, match) {
                                // Initialization > (Iterator, Array (Length))
                                var arrayLength = array.length,
                                    iterator = arguments.length, length = iterator;

                                // Logic
                                if (iterator < 2) {
                                    // Update > (Iterator, Match)
                                    iterator = 2;
                                    match = function match() { return LDKF.isVoid(arguments[1]) }
                                }

                                // Loop
                                while (arrayLength && iterator) {
                                    // Initialization > Arguments Match
                                    var argumentsMatch = arguments[iterator -= 1];

                                    // Logic
                                    if (iterator) {
                                        // Initialization > Former Array Length
                                        var formerArrayLength = arrayLength;

                                        // Loop
                                        while (arrayLength && argumentsMatch.call(array, 0, array[0])) {
                                            // Update > Array (Length)
                                            LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeTrimLeft, array, -1);
                                            arrayLength -= 1
                                        }

                                        // Update > Iterator
                                        (arrayLength == formerArrayLength) || (iterator = length)
                                    }
                                }

                                // Return
                                return array
                            };

                            // Filter Right
                            LDKF.arrayPrototypeFilterRight = function arrayPrototypeFilterRight(array, match) {
                                // Initialization > (Iterator, Array (Length))
                                var arrayLength = array.length,
                                    iterator = arguments.length, length = iterator;

                                // Logic
                                if (iterator < 2) {
                                    // Update > (Iterator, Match)
                                    iterator = 2;
                                    match = function match() { return LDKF.isVoid(arguments[1]) }
                                }

                                // Loop
                                while (arrayLength && iterator) {
                                    // Initialization > Arguments Match
                                    var argumentsMatch = arguments[iterator -= 1];

                                    // Logic
                                    if (iterator) {
                                        // Initialization > Former Array Length
                                        var formerArrayLength = arrayLength;

                                        // Loop
                                        while (arrayLength && argumentsMatch.call(array, arrayLength - 1, array[arrayLength - 1])) {
                                            // Update > Array (Length)
                                            LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeTrimRight, array, 1);
                                            arrayLength -= 1
                                        }

                                        // Update > Iterator
                                        (arrayLength == formerArrayLength) || (iterator = length)
                                    }
                                }

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

                            // Is Filled With Only --- CHECKPOINT ---
                            LDKF.arrayPrototypeIsFilledWithOnly = function arrayPrototypeIsFilledWithOnly(array, test) {
                                // Initialization > ((Test) Length, Iterator)
                                var length = array.length, iterator = length,
                                    testLength = test.length;
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

                            // Remove
                                // All
                                LDKF.arrayPrototypeRemoveAll = function arrayPrototypeRemoveAll(array, item) {
                                    // Initialization > (Iterator, Length)
                                    var iterator = arguments.length, length = iterator;

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Index, Arguments Item)
                                        var index = length - (iterator -= 1) - 1,
                                            argumentsItem = arguments[index];

                                        // Logic
                                        if (index) {
                                            // Initialization > Arguments Item Index
                                            var argumentsItemIndex = LDKF.arrayPrototypeLastIndex(array, argumentsItem);

                                            // Loop
                                            while (argumentsItemIndex != -1) {
                                                // Update > (Array, Arguments Item Index)
                                                LDKF.arrayPrototypeCutIndex(array, argumentsItemIndex);
                                                argumentsItemIndex = LDKF.arrayPrototypeLastIndex(array, argumentsItem)
                                            }
                                        }
                                    }

                                    // Return
                                    return array
                                };

                                // From Back
                                LDKF.arrayPrototypeRemoveFromBack = function arrayPrototypeRemoveFromBack(array, item) {
                                    // Initialization > (Iterator, Length)
                                    var iterator = arguments.length, length = iterator;

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Index, Arguments Item)
                                        var index = length - (iterator -= 1) - 1,
                                            argumentsItem = arguments[index];

                                        // Logic
                                        if (index) {
                                            // Initialization > Arguments Item Index
                                            var argumentsItemIndex;

                                            // Update > Array
                                            ((argumentsItemIndex = LDKF.arrayPrototypeIndex(array, argumentsItem)) == -1) || LDKF.arrayPrototypeCutIndex(array, argumentsItemIndex)
                                        }
                                    }

                                    // Return
                                    return array
                                };

                                // From Front
                                LDKF.arrayPrototypeRemoveFromFront = function arrayPrototypeRemoveFromFront(array, item) {
                                    // Initialization > (Iterator, Length)
                                    var iterator = arguments.length, length = iterator;

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Index, Arguments Item)
                                        var index = length - (iterator -= 1) - 1,
                                            argumentsItem = arguments[index];

                                        // Logic
                                        if (index) {
                                            // Initialization > Arguments Item Index
                                            var argumentsItemIndex;

                                            // Update > Array
                                            ((argumentsItemIndex = LDKF.arrayPrototypeLastIndex(array, argumentsItem)) == -1) || LDKF.arrayPrototypeCutIndex(array, argumentsItemIndex)
                                        }
                                    }

                                    // Return
                                    return array
                                };

                            // Repeat
                            LDKF.arrayPrototypeRepeat = function arrayPrototypeRepeat(array, amount) {
                                // Update > (Amount, Array)
                                (arguments.length > 1) || (amount = 1);
                                array = LDKF.arrayPrototypeShallowClone(array);

                                // Initialization > Repeat (Length)
                                var repeat = [], repeatLength = -1;

                                // Logic
                                if (LDKF.numberPrototypeIsPositive(amount)) {
                                    // Logic
                                    if (LDKF.numberPrototypeIsSafe(amount)) {
                                        // Initialization > Length
                                        var length = array.length;

                                        // Loop
                                        while (amount >= 1) {
                                            // Initialization > Iterator
                                            var iterator = length;

                                            // Loop > Update > Repeat
                                            while (iterator)
                                                repeat[repeatLength += 1] = array[length - (iterator -= 1) - 1];

                                            // Update > Amount
                                            amount -= 1
                                        }

                                        // Logic
                                        if (amount) {
                                            // Initialization > Index
                                            var index = -1;

                                            // Update > Amount
                                            amount = LDKF.perc(length, LDKF.int(amount * 100));

                                            // Loop
                                            while (amount >= 1) {
                                                // Update > (Repeat, Amount)
                                                repeat[repeatLength += 1] = array[index += 1];
                                                amount -= 1
                                            }

                                            // Update > Repeat
                                            (amount > .5) && (repeat[repeatLength += 1] = array[index += 1])
                                        }
                                    }
                                }

                                else
                                    // Error --- CHECKPOINT ---
                                    LDKF.error("Invalid count value");

                                // Return
                                return repeat
                            };

                            // Replace
                                // All
                                LDKF.arrayPrototypeReplaceAll = function arrayPrototypeReplaceAll(array, item, substitute) {
                                    // Initialization > (Iterator, Length, Replacement)
                                    var iterator = arguments.length, length = iterator,
                                        replacement = arguments[iterator - 1];

                                    // Logic
                                    if (iterator > 2)
                                        // Loop
                                        while (iterator) {
                                            // Initialization > (Index, Arguments Item)
                                            var index = length - (iterator -= 1) - 1,
                                                argumentsItem = arguments[index];

                                            // Logic
                                            if (index && iterator) {
                                                // Initialization > Arguments Item (Former) Index
                                                var argumentsItemFormerIndex,
                                                    argumentsItemIndex = LDKF.arrayPrototypeLastIndex(array, argumentsItem);

                                                // Loop
                                                while (argumentsItemIndex != -1 && argumentsItemIndex != argumentsItemFormerIndex) {
                                                    // Update > (Array, Arguments Item Index)
                                                    array[argumentsItemFormerIndex = argumentsItemIndex] = replacement;
                                                    argumentsItemIndex = LDKF.arrayPrototypeLastIndex(array, argumentsItem)
                                                }
                                            }
                                        }

                                    else
                                        // Update > Array
                                        LDKF.arrayPrototypeRemoveAll.apply(LDKF.arrayPrototypeReplaceAll, arguments);

                                    // Return
                                    return array
                                };

                                // From Back
                                LDKF.arrayPrototypeReplaceFromBack = function arrayPrototypeReplaceFromBack(array, item, substitute) {
                                    // Initialization > (Iterator, Length, Replacement)
                                    var iterator = arguments.length, length = iterator,
                                        replacement = arguments[iterator - 1];

                                    // Logic
                                    if (iterator > 2)
                                        // Loop
                                        while (iterator) {
                                            // Initialization > (Index, Arguments Item)
                                            var index = length - (iterator -= 1) - 1,
                                                argumentsItem = arguments[index];

                                            // Logic
                                            if (index) {
                                                // Initialization > Arguments Item Index
                                                var argumentsItemIndex;

                                                // Update > Array
                                                ((argumentsItemIndex = LDKF.arrayPrototypeIndex(array, argumentsItem)) == -1) || (array[argumentsItemIndex] = replacement)
                                            }
                                        }

                                    else
                                        // Update > Array
                                        LDKF.arrayPrototypeRemoveFromBack.apply(LDKF.arrayPrototypeReplaceFromBack, arguments);

                                    // Return
                                    return array
                                };

                                // From Front
                                LDKF.arrayPrototypeReplaceFromFront = function arrayPrototypeReplaceFromFront(array, item, substitute) {
                                    // Initialization > (Iterator, Length, Replacement)
                                    var iterator = arguments.length, length = iterator,
                                        replacement = arguments[iterator - 1];

                                    // Logic
                                    if (iterator > 2)
                                        // Loop
                                        while (iterator) {
                                            // Initialization > (Index, Arguments Item)
                                            var index = length - (iterator -= 1) - 1,
                                                argumentsItem = arguments[index];

                                            // Logic
                                            if (index) {
                                                // Initialization > Arguments Item Index
                                                var argumentsItemIndex;

                                                // Update > Array
                                                ((argumentsItemIndex = LDKF.arrayPrototypeLastIndex(array, argumentsItem)) == -1) || (array[argumentsItemIndex] = replacement)
                                            }
                                        }

                                    else
                                        // Update > Array
                                        LDKF.arrayPrototypeRemoveFromFront.apply(LDKF.arrayPrototypeReplaceFromFront, arguments);

                                    // Return
                                    return array
                                };

                            // Reverse
                            LDKF.arrayPrototypeReverse = function arrayPrototypeReverse(array) {
                                // Initialization > (Iterator, Length)
                                var iterator = -1, length = array.length;

                                // Loop
                                while (iterator < length - 1) {
                                    // Initialization > Item
                                    var item = array[iterator += 1];

                                    // Update > Array
                                    array[iterator] = array[length -= 1];
                                    array[length] = item
                                }

                                // Return
                                return array
                            };

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
                            LDKF.arrayPrototypeTrim = function arrayPrototypeTrim(array, match) {
                                // Update > Array
                                LDKF.arrayPrototypeTrimLeft.apply(LDKF.arrayPrototypeTrim, arguments);

                                // Return
                                return LDKF.arrayPrototypeTrimRight.apply(LDKF.arrayPrototypeTrim, arguments)
                            };

                            // Trim Left
                            LDKF.arrayPrototypeTrimLeft = function arrayPrototypeTrimLeft(array, match) {
                                // Initialization > (Iterator, Array (Length))
                                var arrayLength = array.length,
                                    iterator = arguments.length, length = iterator;

                                // Logic
                                if (iterator > 1)
                                    // Loop
                                    while (arrayLength && iterator) {
                                        // Initialization > Arguments Match
                                        var argumentsMatch = arguments[iterator -= 1];

                                        // Logic
                                        if (iterator) {
                                            // Initialization > Former Array Length
                                            var formerArrayLength = arrayLength;

                                            // Loop
                                            while (arrayLength && array[0] === argumentsMatch) {
                                                // Update > Array (Length)
                                                LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeTrimLeft, array, -1);
                                                arrayLength -= 1
                                            }

                                            // Update > Iterator
                                            (arrayLength == formerArrayLength) || (iterator = length)
                                        }
                                    }

                                else
                                    // Update > Array
                                    LDKF.arrayPrototypeFilterLeft(array, function() { return LDKF.isVoid(arguments[1]) });

                                // Return
                                return array
                            };

                            // Trim Right
                            LDKF.arrayPrototypeTrimRight = function arrayPrototypeTrimRight(array, match) {
                                // Initialization > (Iterator, Array (Length))
                                var arrayLength = array.length,
                                    iterator = arguments.length, length = iterator;

                                // Logic
                                if (iterator > 1)
                                    // Loop
                                    while (arrayLength && iterator) {
                                        // Initialization > Arguments Match
                                        var argumentsMatch = arguments[iterator -= 1];

                                        // Logic
                                        if (iterator) {
                                            // Initialization > Former Array Length
                                            var formerArrayLength = arrayLength;

                                            // Loop
                                            while (arrayLength && array[arrayLength - 1] === argumentsMatch) {
                                                // Update > Array (Length)
                                                LDKF.arrayPrototypeCut.call(LDKF.arrayPrototypeTrimRight, array, 1);
                                                arrayLength -= 1
                                            }

                                            // Update > Iterator
                                            (arrayLength == formerArrayLength) || (iterator = length)
                                        }
                                    }

                                else
                                    // Update > Array
                                    LDKF.arrayPrototypeFilterRight(array, function() { return LDKF.isVoid(arguments[1]) });

                                // Return
                                return array
                            };

                    // Boolean
                        // Prototype
                            // Is False
                            LDKF.booleanPrototypeIsFalse = function booleanPrototypeIsFalse(boolean) { return !boolean };

                            // Is True
                            LDKF.booleanPrototypeIsTrue = function booleanPrototypeIsTrue(boolean) { return !!boolean };

                    // Document
                        // Prototype
                            // Query Selector
                            LDKF.documentPrototypeQuerySelector = function documentPrototypeQuerySelector(document, selectors) { return LDKOD.documentPrototypeQuerySelector.value.apply(document, LDKF.arrayPrototypeCut(arguments, -1)) };

                    // Error --- CHECKPOINT ---
                    LDKF.error = function error(message, stack) { throw new Error(message) };
                        // Prototype
                            // Set Message
                            LDKF.errorPrototypeSetMessage = function errorPrototypeSetMessage(error, message) {
                                // Initialization > Former Message
                                var formerMessage = {
                                    // Description
                                    description: LDKF.objectPrototypeHasProperty(error, "description") ? LDKF.objectPrototypeGetProperty(error, "description") : hidden,

                                    // Message
                                    message: LDKF.objectPrototypeHasProperty(error, "message") ? LDKF.objectPrototypeGetProperty(error, "message") : hidden
                                };

                                // Modification > Error
                                    // Description > (...)
                                    if (formerMessage["description"] !== hidden) {
                                        LDKF.objectPrototypeSetProperty(error, "description", message);
                                        (formerMessage["description"] === message) || LDKF.objectPrototypeSetPropertyDescription(error, "description", {configurable: !0, enumerable: !0, value: message, writable: !0})
                                    }

                                    // Message > (...)
                                    if (formerMessage["message"] !== hidden) {
                                        LDKF.objectPrototypeSetProperty(error, "message", message);
                                        (formerMessage["message"] === message) || LDKF.objectPrototypeSetPropertyDescription(error, "message", {configurable: !0, enumerable: !0, value: message, writable: !0});
                                    }

                                // Return
                                return message
                            };

                    // Evaluate
                    LDKF.eval = function eval(source) {
                        // Error Handling > Return
                        try { return LDKO.eval.call(this, source) }
                        catch (error) {}

                        // Return
                        return LDKO.eval.call(GLOBAL_MAIN, source)
                    };

                    // Fallback Error
                    LDKF.fallbackError = function fallbackError(message) { throw LDKF.string(message) };

                    // Function
                        // Prototype
                            // Is Arrow
                            LDKF.functionPrototypeIsArrow = function functionPrototypeIsArrow(method) {
                                // Initialization > Type
                                var type = LDKFG.functionPrototypeType(method);

                                // Return
                                return !!(type && type[0] == 'a' && type[1] == 'r' && type[2] == 'r' && type[3] == 'o' && type[4] == 'w')
                            };
                                // Is Arrow Native
                                LDKF.functionPrototypeIsArrowNative = function functionPrototypeIsArrowNative(method) { return LDKF.functionPrototypeIsArrow(method) && LDKF.functionPrototypeIsNative(method) };

                            // Is Class
                            LDKF.functionPrototypeIsClass = function functionPrototypeIsClass(method) {
                                // Initialization > Type
                                var type = LDKFG.functionPrototypeType(method);

                                // Return
                                return !!(type && type[0] == 'c' && type[1] == 'l' && type[2] == 'a' && type[3] == 's' && type[4] == 's')
                            };
                                // Is Class Native
                                LDKF.functionPrototypeIsClassNative = function functionPrototypeIsClassNative(method) { return LDKF.functionPrototypeIsClass(method) && LDKF.functionPrototypeIsNative(method) };

                            // Is Default
                            LDKF.functionPrototypeIsDefault = function functionPrototypeIsDefault(method) {
                                // Initialization > Type
                                var type = LDKFG.functionPrototypeType(method);

                                // Return
                                return !!(type && type[0] == 'd' && type[1] == 'e' && type[2] == 'f' && type[3] == 'a' && type[4] == 'u' && type[5] == 'l' && type[6] == 't')
                            };
                                // Is Default Native
                                LDKF.functionPrototypeIsDefaultNative = function functionPrototypeIsDefaultNative(method) { return LDKF.functionPrototypeIsDefault(method) && LDKF.functionPrototypeIsNative(method) };

                            // Is Native
                            LDKF.functionPrototypeIsNative = function functionPrototypeIsNative(method) {
                                // Initialization > (Allow Stream, Iterator, Length, Matches (Length), Source, Stream-Lock)
                                var allowStream = TRUE,
                                    matches = ["[Command Line API]", "[native code]"],
                                    matchesLength = matches.length,
                                    source = LDKFG.functionPrototypeSourceCode(method),
                                    iterator = source.length, length = iterator,
                                    streamLock = null,
                                    type = this === LDKFG.functionPrototypeType ? null : LDKFG.functionPrototypeType.call(LDKF.functionPrototypeIsNative, method);

                                // Logic > Return
                                if (
                                    (this === LDKF.isFunction || this === LDKFG.functionPrototypeType ? TRUE : LDKF.isFunction(method)) &&
                                    !(type == "arrow" || type == "class" || type == "default")
                                ) return TRUE;

                                // Loop
                                while (iterator) {
                                    // Initialization > (Index, (Next) Character)
                                    var index = length - (iterator -= 1) - 1,
                                        character = source[index], nextCharacter = source[index + 1];

                                    // Logic
                                    if (allowStream) {
                                        // Logic
                                        if (character == '/' && nextCharacter == '*')
                                            // Update > Allow Stream
                                            allowStream = FALSE;

                                        else if (character == '\'' || character == '"') {
                                            // Update > (Allow Stream, Stream-Lock)
                                            allowStream = FALSE;
                                            streamLock = character
                                        }

                                        // Initialization > Matches Iterator
                                        var matchesIterator = matchesLength;

                                        // Loop
                                        while (matchesIterator) {
                                            // Initialization > (Match) (Iterator, Length)
                                            var match = matches[matchesIterator -= 1],
                                                matchIterator = match.length, matchLength = matchIterator;

                                            // Loop
                                            while (matchIterator) {
                                                // Initialization > Match Index
                                                var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                // Logic > (...)
                                                if (source[index + matchIndex] != match[matchIndex]) break;
                                                else if (!matchIterator) return TRUE
                                            }
                                        }
                                    }

                                    else if (character == '*' && nextCharacter == '/')
                                        // Update > Allow Stream
                                        allowStream = TRUE;

                                    else if (character == '\'' || character == '"' || character == streamLock) {
                                        // Update > (Allow Stream, Stream-Lock)
                                        allowStream = TRUE;
                                        streamLock = null
                                    }
                                }

                                // Return
                                return FALSE
                            };

                    // Integer
                    LDKF.int = function int(arg) {
                        // Update > Number
                        var number = LDKF.number(arg);

                        // Return
                        return number - number % 1
                    };

                    /* Is */
                        // Array
                        LDKF.isArray = function isArray(arg) {
                            // Error Handling > Return
                            try { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKFG.objectPrototypeConstructor(arg) === LDKO.array && LDKF.isNull(arg.__proto__.__proto__.__proto__) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKFG.objectPrototypeConstructor(arg) === LDKO.array }
                            catch (error) {}

                            // Return
                            return FALSE
                        };

                        // Array-Like
                        // Array Object

                        // Boolean
                        LDKF.isBoolean = function isBoolean(arg) { return typeof arg == "boolean" };

                        // Constructible
                        LDKF.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                        // Function
                        LDKF.isFunction = function isFunction(arg) {
                            // Return
                            return typeof arg == "function" || (function() {
                                // Logic > Return
                                if (
                                    LDKF.objectPrototypeHasProperty(GLOBAL_MAIN, "ActiveXObject") &&
                                    (function(method) { return method && LDKF.functionPrototypeIsNative.call(LDKF.isFunction, method) && LDKFG.functionPrototypeName(method) == "ActiveXObject" })(LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ActiveXObject"))
                                ) return typeof arg == "object" && LDKF.functionPrototypeIsDefault(arg)

                                // Return
                                return FALSE
                            })()
                        };

                        // Non-Constructible
                        LDKF.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                        // Number
                        LDKF.isNumber = function isNumber(arg) { return LDKF.isConstructible(arg) && typeof arg == "number" };

                        // Null
                        LDKF.isNull = function isNull(arg) { return !arg && arg === null && typeof arg == "object" };

                        // Object --- NOTE (Lapys) -> Only JSON-like objects.
                        LDKF.isObject = function isObject(arg) { return !(LDKF.isArray(arg) || LDKF.isBoolean(arg) || LDKF.isFunction(arg) || LDKF.isNumber(arg) || LDKF.isRegex(arg) || LDKF.isStrictlyArrayLike(arg) || LDKF.isStrictlyArrayObject(arg) || LDKF.isString(arg) || LDKF.isSymbol(arg) || LDKF.isVoid(arg)) };

                        // Regular Expression
                        LDKF.isRegex = function isRegex(arg) { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKFG.objectPrototypeConstructor(arg) === LDKO.regex && LDKF.isNull(arg.__proto__.__proto__.__proto__) };

                        // Strictly Array-Like --- CHECKPOINT ---
                        LDKF.isStrictlyArrayLike = function isStrictlyArrayLike(arg) { return FALSE };

                        // Strictly Array Object --- CHECKPOINT ---
                        LDKF.isStrictlyArrayObject = function isStrictlyArrayObject(arg) { return FALSE };

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
                        else if (LDKF.isNumber(arg)) return arg - 0;
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

                            // Is Infinite --- NOTE (Lapys) -> Inaccurate with non-safe numbers.
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
                        // Define Property
                        LDKF.objectDefineProperty = function objectDefineProperty() { try { return LDKO.objectDefineProperty.apply(this, arguments) } catch (error) {} };

                        // Get Own Property Descriptor
                        LDKF.objectGetOwnPropertyDescriptor = function objectGetOwnPropertyDescriptor() { return LDKO.objectGetOwnPropertyDescriptor.apply(this, arguments) };

                        // Get Prototype Of
                        LDKF.objectGetPrototypeOf = function objectGetPrototypeOf() { return LDKO.objectGetPrototypeOf.apply(this, arguments) };

                        // Is
                        LDKF.objectIs = function objectIs(argA, argB) { return argA === argB ? 0 !== argA || 1 / argA == 1 / argB: argA !== argA && argB !==argB };

                        // Keys
                        LDKF.objectKeys = function objectKeys(object) { return LDKO.objectKeys(object) };

                        // Prototype
                            // Delete Property
                            LDKF.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, key) { try { return delete object[key] } catch (error) {}  };

                            // Get Property
                            LDKF.objectPrototypeGetProperty = function objectPrototypeGetProperty(object, key) { try { return object[key] } catch (error) {} };

                            // Get Property Description --- CHECKPOINT ---
                            LDKF.objectPrototypeGetPropertyDescription

                            // Has Own Property
                            LDKF.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, key) { return LDKO.objectPrototypeHasOwnProperty.call(object, key) };

                            // Has Property
                            LDKF.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, key) { try { return key in object } catch (error) {} };

                            // Property Is Enumerable
                            LDKF.objectPrototypePropertyIsEnumerable = function objectPrototypePropertyIsEnumerable(object, key) { return LDKO.objectPrototypePropertyIsEnumerable.call(object, key) };

                            // Set Property
                            LDKF.objectPrototypeSetProperty = function objectPrototypeSetProperty(object, key, value) { try { return object[key] = value } catch (error) {} };

                            // Set Property Description --- CHECKPOINT ---
                            LDKF.objectPrototypeSetPropertyDescription

                            // To String
                            LDKF.objectPrototypeToString = function objectPrototypeToString(object) { return LDKO.objectPrototypeToString.call(object) };

                    // Percent
                    LDKF.perc = function perc(number, base) {
                        // Logic
                        if (arguments.length == 1) {
                            // Update > (Base, Number)
                            base = number;
                            number = 1
                        }

                        // Return
                        return number * (base / 100)
                    };

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
                            LDKF.stringPrototypeConcatenate = function stringPrototypeConcatenate(string, concatenationString) {
                                // Initialization > (Iterator, Length)
                                var iterator = arguments.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Update > String
                                    index && (string += LDKF.string(arguments[index]))
                                }

                                // Return
                                return string
                            };

                            // Cut
                            LDKF.stringPrototypeCut = function stringPrototypeCut(string, amount) {
                                // Initialization > Target
                                var that = this;

                                // Function > Is Private Call
                                function IS_PRIVATE_CALL() { return that === LDKF.stringPrototypeCutIndex || that === LDKF.stringPrototypeTrimLeft || that === LDKF.stringPrototypeTrimRight }

                                // Logic
                                if (IS_PRIVATE_CALL() || (amount && LDKF.numberPrototypeIsInteger(amount))) {
                                    // Initialization > (Length, Stream)
                                    var length = string.length, stream = "";

                                    // Logic
                                    if (that === LDKF.stringPrototypeTrimLeft || LDKF.numberPrototypeIsNegative(amount)) {
                                        // Update > Amount
                                        amount = -amount - 1;

                                        // Logic
                                        if (amount > length)
                                            // Update > String
                                            string = "";

                                        else {
                                            // Update > Length
                                            length -= 1;

                                            // Loop > Update > Stream
                                            while (amount != length)
                                                stream += string[amount += 1];

                                            // Update > String
                                            string = stream
                                        }
                                    }

                                    else
                                        // Logic
                                        if (amount > length)
                                            // Update > String
                                            string = "";

                                        else {
                                            // Initialization > Iterator
                                            var iterator = -1;

                                            // Update > Amount
                                            amount = length - amount - 1;

                                            // Loop > Update > Stream
                                            while (amount != iterator)
                                                stream += string[iterator += 1];

                                            // Update > String
                                            string = stream
                                        }
                                }

                                // Return
                                return string
                            };

                            // Cut Index
                            LDKF.stringPrototypeCutIndex = function stringPrototypeCutIndex(string, index) {
                                // Initialization > (Iterator, String (Length))
                                var iterator = arguments.length, length = iterator,
                                    stringLength = string.length;

                                // Loop
                                while (iterator) {
                                    // Initialization > Arguments Index
                                    var argumentsIndex = length - (iterator -= 1) - 1;

                                    // Logic
                                    if (argumentsIndex) {
                                        // Initialization > String Index
                                        var stringIndex = arguments[argumentsIndex];

                                        // Logic
                                        if (!stringIndex) {
                                            // Update > String (Length)
                                            string = LDKF.stringPrototypeCut.call(LDKF.stringPrototypeCutIndex, string, -1);
                                            stringLength -= 1;
                                        }

                                        else if (stringIndex == stringLength - 1) {
                                            // Update > String (Length)
                                            string = LDKF.stringPrototypeCut.call(LDKF.stringPrototypeCutIndex, string, 1);
                                            stringLength -= 1
                                        }

                                        else if (LDKF.withinFoci(stringIndex, 0, stringLength)) {
                                            // Initialization > (Stream, String Iterator)
                                            var stream = "", stringIterator = stringLength;

                                            // Loop
                                            while (stringIterator) {
                                                // Initialization > String Index
                                                var $stringIndex = stringLength - (stringIterator -= 1) - 1;

                                                // Update > Stream
                                                (stringIndex == $stringIndex) || (stream += string[$stringIndex])
                                            }

                                            // Update > String (Length)
                                            string = stream;
                                            stringLength -= 1
                                        }
                                    }
                                }

                                // Return
                                return string
                            };

                            // Includes
                            LDKF.stringPrototypeIncludes = function stringPrototypeIncludes(string, match) {
                            };

                            // Index
                            LDKF.stringPrototypeIndex = function stringPrototypeIndex(string, match) {
                                // Initialization > (Iterator, Match (Length))
                                var iterator = string.length, length = iterator,
                                    matchLength = match.length;

                                // Update > Match
                                match = LDKF.string(match);

                                // Loop
                                while (iterator) {
                                    // Initialization > (Index, Match Iterator)
                                    var index = length - (iterator -= 1) - 1,
                                        matchIterator = matchLength;

                                    // Loop
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic > (...)
                                        if (string[index + matchIndex] != match[matchIndex]) break;
                                        else if (!matchIterator) return index
                                    }
                                }

                                // Return
                                return -1
                            };

                            // Insert Index
                            LDKF.stringPrototypeInsertIndex = function stringPrototypeInsertIndex(string, insertion, index) {
                                // Initialization > (Iterator, (Insertion, String) (Length))
                                var iterator = arguments.length, length = iterator,
                                    insertionLength = (insertion = LDKF.string(insertion)).length,
                                    stringLength = string.length;

                                // Loop
                                while (iterator) {
                                    // Initialization > Arguments Index
                                    var argumentsIndex = length - (iterator -= 1) - 1;

                                    // Logic
                                    if (argumentsIndex > 1) {
                                        // Initialization > (Stream, String (Index (Found), Iterator))
                                        var stream = "",
                                            stringIndex = arguments[argumentsIndex],
                                            stringIndexFound = FALSE,
                                            stringIterator = stringLength;

                                        // Loop
                                        while (stringIterator) {
                                            // Initialization > (String Index, Character)
                                            var $stringIndex = stringLength - (stringIterator -= 1) - 1,
                                                character = string[$stringIndex];

                                            // Logic
                                            if (stringIndex == $stringIndex) {
                                                // Update > (Stream, String Index Found)
                                                stream += character + insertion;
                                                stringIndexFound = TRUE
                                            }

                                            else
                                                // Update > Stream
                                                stream += character
                                        }

                                        // Update > String (Length)
                                        stringIndexFound && (stringLength += insertionLength);
                                        string = stream
                                    }
                                }

                                // Return
                                return string
                            };

                            // Is Alphabet
                            LDKF.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(string) {
                                // Initialization > (Alphabets, Iterator, Length)
                                var alphabets = LDKF.arrayPrototypeShallowConcatenate(LDKMs.uppercaseAlphabets, LDKMs.lowercaseAlphabets),
                                    iterator = string.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Character
                                    var character = string[iterator -= 1];

                                    // Logic > Return
                                    if (!(LDKF.arrayPrototypeIncludes(alphabets, character)))
                                        return FALSE
                                }

                                // Return
                                return !!length
                            };

                            // Is Digit
                            LDKF.stringPrototypeIsDigit = function stringPrototypeIsDigit(string) {
                                // Initialization > (Iterator, Length)
                                var iterator = string.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Character
                                    var character = string[iterator -= 1];

                                    // Logic > Return
                                    if (!(LDKF.arrayPrototypeIncludes(LDKMs.digits, character)))
                                        return FALSE
                                }

                                // Return
                                return !!length
                            };

                            // Is Lowercase
                            // Is Uppercase
                            // Is Variable Name
                            LDKF.stringPrototypeIsVariableName = function stringPrototypeIsVariableName(string) {
                                // Initialization > (Iterator, Length)
                                var iterator = string.length, length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Character
                                    var character = string[iterator -= 1];

                                    // Logic > Return
                                    if (!(
                                        character == '$' || character == '_' ||
                                        LDKF.stringPrototypeIsAlphabet(character) || (iterator && LDKF.stringPrototypeIsDigit(character)) ||
                                        (function() { try { LDKF.eval("var " + character); return TRUE } catch (error) {} })()
                                    )) return FALSE
                                }

                                // Return
                                return !!length
                            };

                            // Last Index
                            LDKF.stringPrototypeLastIndex = function stringPrototypeLastIndex(string, match) {
                                // Initialization > (Iterator, Match (Length))
                                var iterator = string.length, length = iterator,
                                    matchLength = match.length;

                                // Update > Match
                                match = LDKF.string(match);

                                // Loop
                                while (iterator) {
                                    // Initialization > Match Iterator
                                    var matchIterator = matchLength;

                                    // Update > Iterator
                                    iterator -= 1;

                                    // Loop
                                    while (matchIterator) {
                                        // Update > Match Iterator
                                        matchIterator -= 1;

                                        // Logic > (...)
                                        if (string[iterator - (matchLength - matchIterator - 1)] != match[matchIterator]) break;
                                        else if (!matchIterator) return iterator - (matchLength - 1)
                                    }
                                }

                                // Return
                                return -1
                            };

                            // Pad
                            // Pad Left
                            // Pad Right

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
                            LDKF.stringPrototypeTrim = function stringPrototypeTrim(string, match) {
                                // Logic
                                if (arguments.length > 1) {
                                    // Update > (...)
                                    arguments[0] = string = LDKF.stringPrototypeTrimLeft.apply(LDKF.stringPrototypeTrim, arguments);

                                    // Return
                                    return LDKF.stringPrototypeTrimRight.apply(LDKF.stringPrototypeTrim, arguments)
                                }

                                else
                                    // Return
                                    return LDKF.stringPrototypeTrimLeft(LDKF.stringPrototypeTrimRight(string))
                            };

                            // Trim Left
                            LDKF.stringPrototypeTrimLeft = function stringPrototypeTrimLeft(string, match) {
                                // Initialization > Length
                                var length = arguments.length;

                                // Logic
                                if (length == 1)
                                    // Return
                                    return LDKF.stringPrototypeTrimLeft(string, [' ', '\n']);

                                else {
                                    // Initialization > (Iterator, Length, (Matches) (Length, Iterator), Stream)
                                    var iterator = 0,
                                        length = string.length,
                                        matches = LDKF.isArray(match) ? match : [match],
                                        matchesLength = matches.length,
                                        matchesIterator = matchesLength,
                                        stream = "";

                                    // Loop
                                    while (matchesIterator) {
                                        // Initialization > (Match) (Length, Iterator)
                                        var match = matches[matchesLength - (matchesIterator -= 1) - 1],
                                            matchLength = match.length,
                                            matchIterator = matchLength;

                                        // Loop
                                        while (matchIterator) {
                                            // Initialization > Match Index
                                            var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                            // Logic
                                            if (string[iterator + matchIndex] != match[matchIndex])
                                                // [Break]
                                                break;

                                            else if (string[iterator + matchIndex] == match[matchIndex] && !matchIterator) {
                                                // Update > (Matches) Iterator
                                                iterator += matchLength;
                                                matchesIterator = matchesLength;

                                                // [Break]
                                                break
                                            }
                                        }
                                    }

                                    // Loop > Update > Stream
                                    while (iterator != length)
                                        stream += string[(iterator += 1) - 1];

                                    // Return
                                    return stream
                                }
                            };

                            // Trim Right
                            LDKF.stringPrototypeTrimRight = function stringPrototypeTrimRight(string, match) {
                                // Initialization > Length
                                var length = arguments.length;

                                // Logic
                                if (length == 1)
                                    // Return
                                    return LDKF.stringPrototypeTrimRight(string, [' ', '\n']);

                                else {
                                    // Initialization > (Iterator, Length, (Matches) (Length, Iterator), Stream)
                                    var iterator = string.length,
                                        length = iterator,
                                        matches = LDKF.isArray(match) ? match : [match],
                                        matchesLength = matches.length,
                                        matchesIterator = matchesLength,
                                        stream = "";

                                    // Loop
                                    while (matchesIterator) {
                                        // Initialization > (Match) (Length, Iterator)
                                        var match = matches[matchesLength - (matchesIterator -= 1) - 1],
                                            matchLength = match.length,
                                            matchIterator = matchLength;

                                        // Loop
                                        while (matchIterator) {
                                            // Initialization > Match Index
                                            var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                            // Logic
                                            if (string[iterator - matchIndex - 1] != match[matchIterator])
                                                // [Break]
                                                break;

                                            else if (iterator > 0 && string[iterator - matchIndex - 1] == match[matchIterator] && !matchIterator) {
                                                // Update > (Matches) Iterator
                                                iterator -= matchLength;
                                                matchesIterator = matchesLength;

                                                // [Break]
                                                break
                                            }
                                        }
                                    }

                                    // Update > (Length, Iterator)
                                    length = iterator;
                                    iterator = 0;

                                    // Loop > Update > Stream
                                    while (iterator != length)
                                        stream += string[(iterator += 1) - 1];

                                    // Return
                                    return stream
                                }
                            };

                    // To Debug Message
                    LDKF.toDebugMessage = function toDebugMessage(message) {
                        // Initialization > Length
                        var length = arguments.length;

                        // Function
                            // Is List
                            function isList(arg) {
                                // Logic
                                if (LDKF.isArray(arg))
                                    // Return
                                    return TRUE;

                                else if (LDKF.isObject(arg)) {
                                    // Initialization > Keys
                                    var keys = LDKF.objectKeys(arg);

                                    // Return
                                    return LDKF.arrayPrototypeIsFilledWithOnly(keys, ["list"]) ||
                                        LDKF.arrayPrototypeIsFilledWithOnly(keys, ["end", "list"]) ||
                                        LDKF.arrayPrototypeIsFilledWithOnly(keys, ["end", "list", "sep"]) ||
                                        LDKF.arrayPrototypeIsFilledWithOnly(keys, ["list", "sep"])
                                }

                                // Return
                                return FALSE
                            }

                            // To List
                            function toList(array, separator, endSeparator) {
                                var length = array.length, iterator = length,
                                    list = "";

                                (arguments.length > 2) || (separator = ", ");
                                (arguments.length > 3) || (endSeparator = " and ");

                                // Logic
                                if (!LDKF.isObject(array))
                                    // Return
                                    return toList(
                                        array.list,
                                        LDKF.objectPrototypeHasProperty(array, "sep") ? LDKF.string(array.sep) : ", ",
                                        LDKF.objectPrototypeHasProperty(array, "end") ? LDKF.string(array.end) : " and "
                                    );

                                while (iterator) {
                                    var item = array[length - (iterator -= 1) - 1];

                                    if (!LDKF.isVoid(item)) {
                                        item = LDKF.string(item);
                                        list += item + (iterator ? separator : endSeparator)
                                    }
                                }

                                return list
                            }

                        // Update > Message
                        message = LDKF.stringPrototypeTrim(isList(message) ? toList(message) : LDKF.string(message));

                        // Logic
                        if ((length || 1) == 1) {
                            // Initialization > Message Last Character
                            var messageLastCharacter = message[message.length - 1];

                            // Return
                            return LDKId.prefix + message + (LDKF.stringPrototypeIsAlphabet(messageLastCharacter) || LDKF.stringPrototypeIsDigit(messageLastCharacter) ? '.' : "") + LDKId.suffix
                        }

                        else {
                            // Initialization > (Options, Prefix, Suffix, Message)
                            var options = arguments[1],
                                prefix = arguments[0],
                                suffix = arguments[2],
                                message = "";

                            // Update > Message
                            message = prefix;

                            // (
                            //     ["<prefix>", ["<list>"] -> "separator" -> "end separator"],
                            //     ["execute" -> "this" -> "that", "<qualifier>" -> "<specifier>"],
                            //     ["<suffix>", ["<list>"] -> "separator" -> "end separator"]
                            // )

                            // Return
                            return LDKF.toDebugMessage(message)
                        }
                    };

                    // Throw Abort Error
                    LDKF.throwAbortError = function throwAbortError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.abortError)) throw undefined;
                        else throw new LDKO.abortError(arguments.length ? message : "")
                    };

                    // Throw Constraint Error
                    LDKF.throwConstraintError = function throwConstraintError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.constraintError)) throw undefined;
                        else throw new LDKO.constraintError(arguments.length ? message : "")
                    };

                    // Throw Constraint Not Satisfied Error
                    LDKF.throwConstraintNotSatisfiedError = function throwConstraintNotSatisfiedError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.constraintNotSatisfiedError)) throw undefined;
                        else throw new LDKO.constraintNotSatisfiedError(arguments.length ? message : "")
                    };

                    // Throw Data Error
                    LDKF.throwDataError = function throwDataError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.dataError)) throw undefined;
                        else throw new LDKO.dataError(arguments.length ? message : "")
                    };

                    // Throw Data Clone Error
                    LDKF.throwDataCloneError = function throwDataCloneError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.dataCloneError)) throw undefined;
                        else throw new LDKO.dataCloneError(arguments.length ? message : "")
                    };

                    // Throw Devices Not Found Error
                    LDKF.throwDevicesNotFoundError = function throwDevicesNotFoundError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.devicesNotFoundError)) throw undefined;
                        else throw new LDKO.devicesNotFoundError(arguments.length ? message : "")
                    };

                    // Throw DOM Error
                    LDKF.throwDOMError = function throwDOMError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.domError)) throw undefined;
                        else throw new LDKO.domError(arguments.length ? message : "")
                    };

                    // Throw DOM Exception
                    LDKF.throwDOMException = function throwDOMException(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling
                        try { LDKF.documentPrototypeQuerySelector(LDKFG.windowDocument(), "") }
                        catch (error) {
                            // Logic
                            if (LDKFG.objectPrototypeConstructor(error) !== LDKO.domException)
                                // Logic > Error
                                if (LDKF.isVoid(LDKO.domException)) throw undefined;
                                else  throw new LDKO.domException(message);

                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Encoding Error
                    LDKF.throwEncodingError = function throwEncodingError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.encodingError)) throw undefined;
                        else throw new LDKO.encodingError(arguments.length ? message : "")
                    };

                    // Throw Error
                    LDKF.throwError = function throwError(message) { throw new LDKO.error(arguments.length ? message : "") };

                    // Throw Evaluation Error
                    LDKF.throwEvalError = function throwEvalError(message) { throw new LDKO.evalError(arguments.length ? message : "") };

                    // Throw Hierarchy Request Error
                    LDKF.throwHierarchyRequestError = function throwHierarchyRequestError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.hierarchyRequestError)) throw undefined;
                        else throw new LDKO.hierarchyRequestError(arguments.length ? message : "")
                    };

                    // Throw Index Size Error
                    LDKF.throwIndexSizeError = function throwIndexSizeError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.indexSizeError)) throw undefined;
                        else throw new LDKO.indexSizeError(arguments.length ? message : "")
                    };

                    // Throw Internal Error
                    LDKF.throwInternalError = function throwInternalError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { (function InternalError(){InternalError()})() }
                        catch (error) {
                            // Logic > Error
                            if (LDKFG.functionPrototypeName(LDKFG.objectPrototypeConstructor(error)) != "InternalError")
                                throw undefined;

                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Invalid Access Error
                    LDKF.throwInvalidAccessError = function throwInvalidAccessError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.invalidAccessError)) throw undefined;
                        else throw new LDKO.invalidAccessError(arguments.length ? message : "")
                    };

                    // Throw Invalid Character Error
                    LDKF.throwInvalidCharacterError = function throwInvalidCharacterError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.invalidCharacterError)) throw undefined;
                        else throw new LDKO.invalidCharacterError(arguments.length ? message : "")
                    };

                    // Throw Invalid Modification Error
                    LDKF.throwInvalidModificationError = function throwInvalidModificationError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.invalidModificationError)) throw undefined;
                        else throw new LDKO.invalidModificationError(arguments.length ? message : "")
                    };

                    // Throw Invalid Node Type Error
                    LDKF.throwInvalidNodeTypeError = function throwInvalidNodeTypeError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.invalidNodeTypeError)) throw undefined;
                        else throw new LDKO.invalidNodeTypeError(arguments.length ? message : "")
                    };

                    // Throw Invalid State Error
                    LDKF.throwInvalidStateError = function throwInvalidStateError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.invalidStateError)) throw undefined;
                        else throw new LDKO.invalidStateError(arguments.length ? message : "")
                    };

                    // Throw Media Error
                    LDKF.throwMediaError = function throwMediaError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.mediaError)) throw undefined;
                        else
                            // Error Handling
                            try { throw new LDKO.mediaError(arguments.length ? message : "") }
                            catch (error) {
                                // Logic > Error
                                if (LDKFG.objectPrototypeConstructor(error) !== LDKO.mediaError) throw undefined;
                                else throw error;
                            }
                    };

                    // Throw Media Key Error
                    LDKF.throwMediaKeyError = function throwMediaKeyError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.mediaKeyError)) throw undefined;
                        else throw new LDKO.mediaKeyError(arguments.length ? message : "")
                    };

                    // Throw Microsoft Media Key Error
                    LDKF.throwMSmediaKeyError = function throwMSmediaKeyError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.MSmediaKeyError)) throw undefined;
                        else throw new LDKO.MSmediaKeyError(arguments.length ? message : "")
                    };

                    // Throw Media Stream Error
                    LDKF.throwMediaStreamError = function throwMediaStreamError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.mediaStreamError)) throw undefined;
                        else throw new LDKO.mediaStreamError(arguments.length ? message : "")
                    };

                    // Throw Namespace Error
                    LDKF.throwNamespaceError = function throwNamespaceError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.namespaceError)) throw undefined;
                        else throw new LDKO.namespaceError(arguments.length ? message : "")
                    };

                    // Throw Navigator User Media Error
                    LDKF.throwNavigatorUserMediaError = function throwNavigatorUserMediaError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.navigatorUserMediaError)) throw undefined;
                        else throw new LDKO.navigatorUserMediaError(arguments.length ? message : "")
                    };

                    // Throw Network Error
                    LDKF.throwNetworkError = function throwNetworkError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.networkError)) throw undefined;
                        else throw new LDKO.networkError(arguments.length ? message : "")
                    };

                    // Throw No Modification Allowed Error
                    LDKF.throwNoModificationAllowedError = function throwNoModificationAllowedError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.noModificationAllowedError)) throw undefined;
                        else throw new LDKO.noModificationAllowedError(arguments.length ? message : "")
                    };

                    // Throw Not Allowed Error
                    LDKF.throwNotAllowedError = function throwNotAllowedError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.notAllowedError)) throw undefined;
                        else throw new LDKO.notAllowedError(arguments.length ? message : "")
                    };

                    // Throw Not Found Error
                    LDKF.throwNotFoundError = function throwNotFoundError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.notFoundError)) throw undefined;
                        else throw new LDKO.notFoundError(arguments.length ? message : "")
                    };

                    // Throw Not Readable Error
                    LDKF.throwNotReadableError = function throwNotReadableError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.notReadableError)) throw undefined;
                        else throw new LDKO.notReadableError(arguments.length ? message : "")
                    };

                    // Throw Not Supported Error
                    LDKF.throwNotSupportedError = function throwNotSupportedError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.notSupportedError)) throw undefined;
                        else throw new LDKO.notSupportedError(arguments.length ? message : "")
                    };

                    // Throw Operation Error
                    LDKF.throwOperationError = function throwOperationError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.operationError)) throw undefined;
                        else throw new LDKO.operationError(arguments.length ? message : "")
                    };

                    // Throw Over-Constrained Error
                    LDKF.throwOverConstrainedError = function throwOverConstrainedError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.overconstrainedError)) throw undefined;
                        else throw new LDKO.overconstrainedError("", arguments.length ? message : "")
                    };

                    // Throw Permission Denied Error
                    LDKF.throwPermissionDeniedError = function throwPermissionDeniedError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.permissionDeniedError)) throw undefined;
                        else throw new LDKO.permissionDeniedError(arguments.length ? message : "")
                    };

                    // Throw Quota Exceeded Error
                    LDKF.throwQuotaExceededError = function throwQuotaExceededError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.quotaExceededError)) throw undefined;
                        else throw new LDKO.quotaExceededError(arguments.length ? message : "")
                    };

                    // Throw Range Error
                    LDKF.throwRangeError = function throwRangeError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { (function RangeError(){RangeError()})() }
                        catch (error) {
                            // Logic > Error
                            if (LDKFG.objectPrototypeConstructor(error) !== LDKO.rangeError)
                                throw new LDKO.rangeError(message);

                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Read-Only Error
                    LDKF.throwReadOnlyError = function throwReadOnlyError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.readOnlyError)) throw undefined;
                        else throw new LDKO.readOnlyError(arguments.length ? message : "")
                    };

                    // Throw Reference Error
                    LDKF.throwReferenceError = function throwReferenceError(message) {
                        // Initialization > Variable Name
                        var variableName = 'a';

                        // Loop > Update > Variable Name
                        while (LDKF.objectPrototypeHasProperty(GLOBAL_MAIN[variableName]))
                            variableName += 'a';

                        // Error Handling
                        try { LDKF.eval(variableName) }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Security Error
                    LDKF.throwSecurityError = function throwSecurityError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.securityError)) throw undefined;
                        else throw new LDKO.securityError(arguments.length ? message : "")
                    };

                    // Throw Speech Recognition Error
                    LDKF.throwSpeechRecognitionError = function throwSpeechRecognitionError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.speechRecognitionError)) throw undefined;
                        else throw new LDKO.speechRecognitionError(arguments.length ? message : "")
                    };

                    // Throw Syntax Error
                    LDKF.throwSyntaxError = function throwSyntaxError(message) {
                        // Error Handling
                        try { LDKF.eval('(') }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Track Start Error
                    LDKF.throwTrackStartError = function throwTrackStartError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.trackStartError)) throw undefined;
                        else throw new LDKO.trackStartError(arguments.length ? message : "")
                    };

                    // Throw Timeout Error
                    LDKF.throwTimeoutError = function throwTimeoutError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.timeoutError)) throw undefined;
                        else throw new LDKO.timeoutError(arguments.length ? message : "")
                    };

                    // Throw Transaction Inactive Error
                    LDKF.throwTransactionInactiveError = function throwTransactionInactiveError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.transactionInactiveError)) throw undefined;
                        else throw new LDKO.transactionInactiveError(arguments.length ? message : "")
                    };

                    // Throw Type Error
                    LDKF.throwTypeError = function throwTypeError(message) {
                        // Error Handling
                        try { hidden.hidden() }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Type Mismatch Error
                    LDKF.throwTypeMismatchError = function throwTypeMismatchError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.typeMismatchError)) throw undefined;
                        else throw new LDKO.typeMismatchError(arguments.length ? message : "")
                    };

                    // Throw Unknown Error
                    LDKF.throwUnknownError = function throwUnknownError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.unknownError)) throw undefined;
                        else throw new LDKO.unknownError(arguments.length ? message : "")
                    };

                    // Throw URI Error
                    LDKF.throwURIError = function throwURIError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.uriError)) throw undefined;
                        else throw new LDKO.uriError(arguments.length ? message : "")
                    };

                    // Throw URL Mismatch Error
                    LDKF.throwURLMismatchError = function throwURLMismatchError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.urlMismatchError)) throw undefined;
                        else throw new LDKO.urlMismatchError(arguments.length ? message : "")
                    };

                    // Throw Version Error
                    LDKF.throwVersionError = function throwVersionError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.versionError)) throw undefined;
                        else throw new LDKO.versionError(arguments.length ? message : "")
                    };

                    // Throw Webkit Speech Recognition Error
                    LDKF.throwWebkitSpeechRecognitionError = function throwWebkitSpeechRecognitionError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.webkitSpeechRecognitionError)) throw undefined;
                        else throw new LDKO.webkitSpeechRecognitionError(arguments.length ? message : "")
                    };

                    // Throw Wrong Document Error
                    LDKF.throwWrongDocumentError = function throwWrongDocumentError(message) {
                        // Logic > Error
                        if (LDKF.isVoid(LDKO.wrongDocumentError)) throw undefined;
                        else throw new LDKO.wrongDocumentError(arguments.length ? message : "")
                    };

                    // Warn --- CHECKPOINT ---

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
                                LDKFG.functionPrototypeName = function functionPrototypeName(method) {
                                    // Initialization > Name
                                    var name = "";

                                    // Function > Get Name
                                    function getName(index) {
                                        // Initialization > (Source, Iterator, Length, Stream)
                                        var source = LDKFG.functionPrototypeSourceCode(method),
                                            iterator = index, length = source.length,
                                            stream = "";

                                        // Loop > Update > Iterator
                                        while ((source[iterator] == ' ' || source[iterator] == '\n') && iterator != length)
                                            iterator += 1;

                                        // Loop
                                        while (iterator != length && LDKF.stringPrototypeIsVariableName(source[iterator])) {
                                            // Update > (Stream, Iterator)
                                            stream += source[iterator];
                                            iterator += 1
                                        }

                                        // Return
                                        return stream
                                    }

                                    // Logic
                                    if (LDKF.functionPrototypeIsClass(method)) name = getName(5);
                                    else if (LDKF.functionPrototypeIsDefault(method)) name = getName(8);

                                    // Return
                                    return name
                                };

                                // Source Code
                                LDKFG.functionPrototypeSourceCode = function functionPrototypeSourceCode(method) { return LDKF.stringPrototypeTrim(LDKF.string(method) || "") };

                                // Type
                                LDKFG.functionPrototypeType = function functionPrototypeType(method) {
                                    // Initialization > (Method Is Native, Source, Type)
                                    var methodIsNative = this === LDKF.functionPrototypeIsNative ? FALSE : LDKF.functionPrototypeIsNative.call(LDKFG.functionPrototypeType, method),
                                        source = LDKFG.functionPrototypeSourceCode(method),
                                        type = "";

                                    // Logic
                                    if (source) {
                                        // Initialization > Stream
                                        var stream = source[0] + source[1] + source[2] + source[3] + source[4];

                                        // Logic > Update > Type
                                        if (stream == "class") type = methodIsNative ? "class-native" : "class";
                                        else if (stream + source[5] + source[6] + source[7] == "function") type = methodIsNative ? "default-native" : "default";
                                        else if (
                                            (source[0] == '(' || LDKF.stringPrototypeIsVariableName(source[0])) &&
                                            LDKF.stringPrototypeIncludes(source, "=>")
                                        ) type = methodIsNative ? "arrow-native" : "arrow";
                                        else type = null
                                    }

                                    else
                                        // Update > Type
                                        type = null;

                                    // Return
                                    return type
                                };

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

                                // Prototype
                                LDKFG.objectPrototypePrototype = function objectPrototypePrototype(object) {
                                    // Initialization > Prototype
                                    var prototype;

                                    // Error Handling > (...)
                                    try { prototype = object.prototype }
                                    catch (error) { prototype = null }

                                    // Return
                                    return prototype
                                };

                                // {(Constructor > Prototype)}
                                LDKFG.objectPrototype__Proto__ = function objectPrototype__Proto__(object) {
                                    // Initialization > (...)
                                    var __proto__;

                                    // Error Handling > (...)
                                    try {
                                        // Logic > (...)
                                        if (LDKF.objectPrototypeHasProperty(object, "__proto__")) __proto__ = object.__proto__;
                                        else throw {}
                                    } catch (error) {
                                        // Error Handling > Update > (...)
                                        try { __proto__ = LDKF.isFunction(LDKO.objectGetPrototypeOf) ? LDKF.objectGetPrototypeOf(object) : LDKFG.objectPrototypePrototype(LDKFG.objectPrototypeConstructor(object)) }
                                        catch (error) {}
                                    }

                                    // Return
                                    return __proto__
                                };

                                // {(Constructor > Prototype)} Tree
                                LDKFG.objectPrototype__Proto__Tree = function objectPrototype__Proto__Tree(object) {
                                    // Initialization > ((Constructor > Prototype), Tree (Index))
                                    var __proto__ = LDKFG.objectPrototype__Proto__(object),
                                        tree = [], treeIndex = -1;

                                    // Loop
                                    while (!LDKF.isNull(__proto__)) {
                                        // Update > (Tree, (Constructor > Prototype))
                                        tree[treeIndex += 1] = __proto__;
                                        __proto__ = LDKFG.objectPrototype__Proto__(__proto__)
                                    }

                                    // Return
                                    return tree
                                };

                        // Window
                            // Document
                            LDKFG.windowDocument = function windowDocument(window) { return LDKOD.windowDocument.get.call(arguments.length ? window : LDKO.$window) };

                    /* Set */

                // Information
                    // Debugging Messages
                        // Prefix
                        LDKId.prefix = "LapysJS [v" + VERSION + "] ->\n\t";

                        // Suffix
                        LDKId.suffix = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? '\r' : '\n';

                    // Error Messages
                        // Compatible with Library Suffix
                        LDKIE.compatibleWithLibrarySuffix = " is not compatible with this library";

                        // JavaScript Engine Support Suffix
                        LDKIE.javaScriptEngineSupportSuffix = " must be supported by this JavaScript engine"

                        // Native to Environment Suffix
                        LDKIE.nativeToEnvironmentSuffix = " must be native to this development environment to install the library";

                // Objects
                    // Abort Error
                    LDKO.abortError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "AbortError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "AbortError") == "AbortError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Array
                    LDKO.array = LDKFG.objectPrototypeConstructor([]);

                    // Constraint Error
                    LDKO.constraintError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ConstraintError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "ConstraintError") == "ConstraintError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Constraint Not Satisfied Error
                    LDKO.constraintNotSatisfiedError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ConstraintNotSatisfiedError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "ConstraintNotSatisfiedError") == "ConstraintNotSatisfiedError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Data Error
                    LDKO.dataError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DataError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "DataError") == "DataError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Data Clone Error
                    LDKO.dataCloneError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DataCloneError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "DataCloneError") == "DataCloneError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Devices Not Found Error
                    LDKO.devicesNotFoundError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DevicesNotFoundError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "DevicesNotFoundError") == "DevicesNotFoundError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Encoding Error
                    LDKO.encodingError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "EncodingError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "EncodingError") == "EncodingError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Error
                    LDKO.error = (function() {
                        // Initialization > Error Object
                        var errorObject;

                        // Error Handling > (...)
                        try { hidden.hidden() }
                        catch (error) {
                            // Update > Error Object
                            errorObject = LDKFG.objectPrototype__Proto__(error);
                            errorObject = errorObject ? LDKFG.objectPrototypeConstructor(LDKFG.objectPrototype__Proto__(errorObject)) :
                                (function() {
                                    // Initialization > Method
                                    var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "Error");

                                    // Logic > Error
                                    if (LDKFG.functionPrototypeName(method) == "Error" && LDKF.functionPrototypeIsNative(method)) return method;
                                    else LDKF.error("`Error` constructor" + LDKI.errorMessages.native_to_environment)
                                })()
                        }

                        // Return
                        return errorObject
                    })();

                    // Evaluate
                    LDKO.eval = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "eval");

                        // Logic > (...)
                        if (LDKFG.functionPrototypeName(method) == "eval" && LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`eval` function" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Number
                    LDKO.number = LDKFG.objectPrototypeConstructor(0);
                        // Maximum Safe Integer --- NOTE (Lapys) -> Fortunately, this value is independent of the JavaScript environment.
                        LDKO.numberMaxSafeInteger = 9007199254740991;

                    // Object
                    LDKO.object = LDKFG.objectPrototypeConstructor({});
                        // Define Property
                        LDKO.objectDefineProperty = (function() {
                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.object, "defineProperty")) {
                                // Initialization > Method
                                var method = LDKF.objectPrototypeGetProperty(LDKO.object, "defineProperty");

                                // Logic
                                if (LDKFG.functionPrototypeName(method) == "defineProperty" && LDKF.functionPrototypeIsNative(method)) {
                                    // Initialization > Is Valid
                                    var isValid = TRUE;

                                    // Error Handling > (...)
                                    try { method({}, "", {}) }
                                    catch (error) { isValid = FALSE }

                                    // Logic > (...)
                                    if (isValid) return method;
                                    else LDKF.error("`Object.defineProperty` method" + LDKIE.compatibleWithLibrarySuffix)
                                }

                                else
                                    // Error
                                    LDKF.error("`Object.defineProperty` method" + LDKIE.nativeToEnvironmentSuffix)
                            }

                            else
                                // Error
                                LDKF.error("`Object.defineProperty` method" + LDKIE.javaScriptEngineSupportSuffix)
                        })();

                        // Get Own Property Descriptor
                        LDKO.objectGetOwnPropertyDescriptor = (function() {
                            // Initialization > Method
                            var method = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyDescriptor");

                            // Logic
                            if (LDKFG.functionPrototypeName(method) == "getOwnPropertyDescriptor" && LDKF.functionPrototypeIsNative(method)) {
                                // Initialization > Is Valid
                                var isValid = TRUE;

                                // Error Handling > (...)
                                try { method({}, "") }
                                catch (error) { isValid = FALSE }

                                // Logic > (...)
                                if (isValid) return method;
                                else LDKF.error("`Object.getOwnPropertyDescriptor` method" + LDKIE.compatibleWithLibrarySuffix)
                            }

                            else
                                // Error
                                LDKF.error("`Object.getOwnPropertyDescriptor` method" + LDKIE.nativeToEnvironmentSuffix)
                        })();

                        // Get Prototype Of
                        LDKO.objectGetPrototypeOf = (function() {
                            // Initialization > Method
                            var method = LDKF.objectPrototypeGetProperty(LDKO.object, "getPrototypeOf");

                            // Logic > Return
                            if (LDKFG.functionPrototypeName(method) == "getPrototypeOf" && LDKF.functionPrototypeIsNative(method)) return method
                        })();

                        // Keys
                        LDKO.objectKeys = (function() {
                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.object, "keys")) {
                                // Initialization > Method
                                var method = LDKF.objectPrototypeGetProperty(LDKO.object, "keys");

                                // Logic > Return
                                if ((LDKFG.functionPrototypeName(method) || "keys") == "keys" || LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error("`Object.keys` method" + LDKIE.nativeToEnvironmentSuffix)
                            }

                            else
                                // Return
                                return (function() {
                                    // Initialization
                                        // Enumerate --- NOTE (Lapys) -> Are enumerations allowed in this version of JavaScript?
                                        var enumerate = LDKF.objectPrototypePropertyIsEnumerable({toString: null}, "toString"),

                                        // Enumerations --- NOTE (Lapys) -> Default properties to index with the `Object.keys` method.
                                        enumerations = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],

                                        // Enumerations Length
                                        enumerationsLength = enumerations.length;

                                    // Return
                                    return function keys(object) {
                                        // Error
                                        (typeof object !== "function" && (typeof object !== "object" || LDKF.isNull(object))) && LDKF.throwTypeError("Object.keys called on non-object");

                                        // Initialization > (Iterator, Property, Result)
                                        var iterator, property, result = [];

                                        // Loop > Update > Result
                                        for (property in object) LDKF.objectPrototypeHasOwnProperty(object, property) && (result[result.length] = property);

                                        // Logic
                                        if (!enumerate)
                                            /* Loop
                                                    Index Enumerations.
                                            */
                                            for (iterator; iterator != enumerationsLength; iterator += 1) {
                                                // Initialization > Enumeration
                                                var enumeration = enumerations[iterator];

                                                // Update > Result
                                                LDKF.objectPrototypeHasOwnProperty(object, enumeration) && (result[result.length] = enumeration)
                                            }

                                        // Return
                                        return result
                                    }
                                })()
                        })();

                        // Prototype
                        LDKO.objectPrototype = LDKFG.objectPrototypePrototype(LDKO.object);
                            // Has Own Property
                            LDKO.objectPrototypeHasOwnProperty = (function() {
                                // Initialization > Method
                                var method = LDKF.objectPrototypeGetProperty(LDKO.objectPrototype, "hasOwnProperty");

                                // Logic > Return
                                if (LDKFG.functionPrototypeName(method) == "hasOwnProperty" && LDKF.functionPrototypeIsNative(method)) return method
                                else LDKF.error("`Object.prototype.hasOwnProperty` method" + LDKIE.nativeToEnvironmentSuffix)
                            })();

                            // Property Is Enumerable
                            LDKO.objectPrototypePropertyIsEnumerable = (function() {
                                // Initialization > Method
                                var method = LDKF.objectPrototypeGetProperty(LDKO.objectPrototype, "propertyIsEnumerable");

                                // Logic > Return
                                if (LDKFG.functionPrototypeName(method) == "propertyIsEnumerable" && LDKF.functionPrototypeIsNative(method)) return method
                                else LDKF.error("`Object.prototype.propertyIsEnumerable` method" + LDKIE.nativeToEnvironmentSuffix)
                            })();

                            // To String
                            LDKO.objectPrototypeToString = (function() {
                                // Initialization > Method
                                var method = LDKF.objectPrototypeGetProperty(LDKO.objectPrototype, "toString");

                                // Logic > (...)
                                if (LDKFG.functionPrototypeName(method) == "toString" && LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error("`Object.prototype.toString` method" + LDKIE.nativeToEnvironmentSuffix)
                            })();

                    // DOM Error
                    LDKO.domError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DOMError");

                        // Logic > (...)
                        if (!LDKF.isVoid(method))
                            if ((LDKFG.functionPrototypeName(method) || "DOMError") == "DOMError" && (LDKF.objectPrototypeToString(method) == "[object DOMError]" || LDKF.functionPrototypeIsNative(method))) return method;
                            else LDKF.error("`DOMError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // DOM Exception
                    LDKO.domException = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DOMException");

                        // Logic > (...)
                        if (!LDKF.isVoid(method))
                            if ((LDKFG.functionPrototypeName(method) || "DOMException") == "DOMException" && (LDKF.objectPrototypeToString(method) == "[object DOMException]" || LDKF.functionPrototypeIsNative(method))) return method;
                            else LDKF.error("`DOMException` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Evaluation Error
                    LDKO.evalError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "EvalError");

                        // Logic > (...)
                        if ((LDKFG.functionPrototypeName(method) || "EvalError") == "EvalError" || LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`EvalError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Hierarchy Request Error
                    LDKO.hierarchyRequestError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "HierarchyRequestError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "HierarchyRequestError") == "HierarchyRequestError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Index Size Error
                    LDKO.indexSizeError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "IndexSizeError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "IndexSizeError") == "IndexSizeError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Invalid Access Error
                    LDKO.invalidAccessError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "InvalidAccessError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "InvalidAccessError") == "InvalidAccessError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Invalid Character Error
                    LDKO.invalidCharacterError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "InvalidCharacterError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "InvalidCharacterError") == "InvalidCharacterError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Invalid Modification Error
                    LDKO.invalidModificationError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "InvalidModificationError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "InvalidModificationError") == "InvalidModificationError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Invalid Node Type Error
                    LDKO.invalidNodeTypeError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "InvalidNodeTypeError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "InvalidNodeTypeError") == "InvalidNodeTypeError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Invalid State Error
                    LDKO.invalidStateError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "InvalidStateError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "InvalidStateError") == "InvalidStateError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Media Error
                    LDKO.mediaError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "MediaError");

                        // Logic > (...)
                        if (!LDKF.isVoid(method))
                            if ((LDKFG.functionPrototypeName(method) || "MediaError") == "MediaError" || LDKF.functionPrototypeIsNative(method)) return method;
                            else LDKF.error("`MediaError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Media Key Error
                    LDKO.mediaKeyError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "MediaKeyError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "MediaKeyError") == "MediaKeyError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Microsoft Media Key Error
                    LDKO.MSmediaKeyError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "MSMediaKeyError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "MSMediaKeyError") == "MSMediaKeyError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Media Stream Error
                    LDKO.mediaStreamError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "MediaStreamError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "MediaStreamError") == "MediaStreamError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Namespace Error
                    LDKO.namespaceError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NamespaceError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NamespaceError") == "NamespaceError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Navigator User Media Error
                    LDKO.navigatorUserMediaError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NavigatorUserMediaError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NavigatorUserMediaError") == "NavigatorUserMediaError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Network Error
                    LDKO.networkError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NetworkError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NetworkError") == "NetworkError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // No Modification Allowed Error
                    LDKO.noModificationAllowedError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NoModificationAllowedError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NoModificationAllowedError") == "NoModificationAllowedError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Not Allowed Error
                    LDKO.notAllowedError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NotAllowedError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NotAllowedError") == "NotAllowedError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Not Found Error
                    LDKO.notFoundError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NotFoundError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NotFoundError") == "NotFoundError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Not Readable Error
                    LDKO.notReadableError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NotReadableError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NotReadableError") == "NotReadableError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Not Supported Error
                    LDKO.notSupportedError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "NotSupportedError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "NotSupportedError") == "NotSupportedError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Operation Error
                    LDKO.operationError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "OperationError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "OperationError") == "OperationError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Over-Constrained Error
                    LDKO.overconstrainedError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "OverconstrainedError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "OverconstrainedError") == "OverconstrainedError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Permission Denied Error
                    LDKO.permissionDeniedError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "PermissionDeniedError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "PermissionDeniedError") == "PermissionDeniedError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Quota Exceeded Error
                    LDKO.quotaExceededError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "QuotaExceededError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "QuotaExceededError") == "QuotaExceededError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Range Error
                    LDKO.rangeError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "RangeError");

                        // Logic > (...)
                        if ((LDKFG.functionPrototypeName(method) || "RangeError") == "RangeError" || LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`RangeError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Read-Only Error
                    LDKO.readOnlyError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ReadOnlyError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "ReadOnlyError") == "ReadOnlyError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Reference Error
                    LDKO.referenceError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ReferenceError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "ReferenceError") == "ReferenceError" || LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`ReferenceError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Regular Expression
                    LDKO.regex = LDKFG.objectPrototypeConstructor(/ /);

                    // Security Error
                    LDKO.securityError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "SecurityError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "SecurityError") == "SecurityError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Speech Recognition Error
                    LDKO.speechRecognitionError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "SpeechRecognitionError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "SpeechRecognitionError") == "SpeechRecognitionError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Syntax Error
                    LDKO.syntaxError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "SyntaxError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "SyntaxError") == "SyntaxError" || LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`SyntaxError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Track Start Error
                    LDKO.trackStartError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "TrackStartError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "TrackStartError") == "TrackStartError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Timeout Error
                    LDKO.timeoutError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "TimeoutError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "TimeoutError") == "TimeoutError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Transaction Inactive Error
                    LDKO.transactionInactiveError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "TransactionInactiveError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "TransactionInactiveError") == "TransactionInactiveError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Type Error
                    LDKO.typeError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "TypeError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "TypeError") == "TypeError" || LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`TypeError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // Type Mismatch Error
                    LDKO.typeMismatchError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "TypeMismatchError ");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "TypeMismatchError ") == "TypeMismatchError " || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Unknown Error
                    LDKO.unknownError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "UnknownError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "UnknownError") == "UnknownError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // URI Error
                    LDKO.uriError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "URIError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "URIError") == "URIError" || LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error("`URIError` constructor" + LDKIE.nativeToEnvironmentSuffix)
                    })();

                    // URL Mismatch Error
                    LDKO.urlMismatchError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "URLMismatchError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "URLMismatchError") == "URLMismatchError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Version Error
                    LDKO.versionError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "VersionError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "VersionError") == "VersionError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Webkit Speech Recognition Error
                    LDKO.webkitSpeechRecognitionError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "webkitSpeechRecognitionError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "webkitSpeechRecognitionError") == "webkitSpeechRecognitionError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // Wrong Document Error
                    LDKO.wrongDocumentError = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "WrongDocumentError");

                        // Logic > Return
                        if ((LDKFG.functionPrototypeName(method) || "WrongDocumentError") == "WrongDocumentError" || LDKF.functionPrototypeIsNative(method)) return method;
                    })();

                    // String
                    LDKO.string = LDKFG.objectPrototypeConstructor("");

                    // Window --- NOTE (Lapys) -> The first step into the Graphical User-Interface in JavaScript.
                    LDKO.$window = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? GLOBAL_MAIN : undefined;
                    LDKO.window = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKFG.objectPrototypeConstructor(LDKO.$window) : undefined;
                        // Prototype
                        LDKO.windowPrototype = LDKFG.objectPrototypePrototype(LDKO.window);

                    /* Descriptions */
                        // Window
                            // Document
                            LDKOD.windowDocument = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? (function(descriptor) {
                                // Modification > Descriptor > Get
                                (descriptor && !LDKF.objectPrototypeHasProperty(descriptor, "get")) && (descriptor.get = LDKF.objectPrototypeHasProperty(descriptor, "value") ? function document() { return descriptor.value } : function document() { return LDKF.objectPrototypeGetProperty(LDKO.$window, "document") });

                                // Return
                                return descriptor
                            })(LDKF.objectGetOwnPropertyDescriptor(LDKO.$window, "document") || LDKF.objectGetOwnPropertyDescriptor(LDKO.windowPrototype, "document")) : undefined;

                    // Document
                    LDKO.document = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? (function(descriptor) {
                        // Initialization > ((Constructor > Prototype) Tree, Iterator)
                        var __proto__Tree = LDKFG.objectPrototype__Proto__Tree(LDKFG.windowDocument()),
                            iterator = __proto__Tree.length;

                        // Loop
                        while (iterator) {
                            // Initialization > (Constructor > Prototype) (String)
                            var __proto__ = __proto__Tree[iterator -= 1],
                                __proto__String = LDKF.string(__proto__);

                            // Logic > Return
                            if (__proto__String == "[object Document]" || __proto__String == "[object DocumentPrototype]")
                                return LDKFG.objectPrototypeConstructor(LDKO.documentPrototype = __proto__)
                        }
                    })() : undefined;

                    // HTML Document
                    LDKO.htmlDocument = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKFG.objectPrototypeConstructor(LDKFG.windowDocument()) : undefined;
                        // Prototype
                        LDKO.htmlDocumentPrototype = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKO.htmlDocument.prototype : undefined;

                    /* Descriptions */
                        // Document > Prototype
                            // Query Selector
                            LDKOD.documentPrototypeQuerySelector = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype, "querySelector") : undefined;

            // LapysJS

            // Error > Prototype
                // Stack

            // Function > Prototype
                // Apply
                // Call

        console.log(LDK);
        GLOBAL_MAIN.LDK = LDK;
        GLOBAL_MAIN.LDKF = LDKF;
        GLOBAL_MAIN.LDKO = LDKO
    })(DEVELOPMENT_ENVIRONMENT, GLOBAL, args)
})()
