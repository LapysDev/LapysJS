/** Function > Main
    @author: Lapys Dev Team
    @description: LapysJS is an intuitive, minimalist web library for quick development.
    @version: 0.0.8
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Supported environment standards:
                -- ECMAScript 2, 3rd Edition (1999) - current...
                -- JavaScript v1.3 - current...

            - Supported development environments:
                -- Android (browser)
                -- Internet Explorer 5 - 11 (browser)
                -- Google Chrome (browser)
                -- Microsoft Edge (browser)
                -- Mozilla Firefox (browser)
                -- Node.js (runtime)
                -- Safari (browser)

            - The library makes an effort to use only native features of JavaScript to allow for interoperable compatibility with legacy environments
                and also avoids over-use (if any) of specific vendor (or engine-dependent) features.

                This is mainly due to subtle inconsistencies in the adaptation of the ECMAScript standards for JavaScript in web browsers and other run-times.
                (Hence the need for fallbacks, polyfills, shims and shivs (and HTML conditional comments)).

                This is also to implement the design standards of the Lapys Development Kit into JavaScript by defining its core concepts and mechanics:
                    -- private entities stay private (or at least constant): `Object.prototype`,
                    -- there is a single/ as few necessary ways to solve a problem: `String.prototype.trimEnd`, `String.prototype.trimRight`,
                    -- all versions are consistent: `String.prototype.charAt`, `requestAnimationFrame`, `webkitRequestAnimationFrame`,
                    -- syntax is intuitive and self-explanatory: `constructor`, `delete`, `isConnected`, `super`,
                    -- and so on...

            - Over its years of development, the library is still a bare-bones version of what it could be.

    --- RULES ---
        #Lapys:
            - All functions, modules, statements and variables must be lexicographically ordered (if possible).
            - All non-universal features are banned e.g.: Arrow functions, class objects, spread operators and so on.
            - Default and REST parameters are disallowed.
            - Due to the ECMAScript standard supporting negative zero, all positive integer zeros must be prefixed with the addition operator: `+`.

    --- UPDATE REQUIRED ---
        #Lapys:
            - Target development environments (these environments may lack a core & modern JavaScript feature or not work for some other reasons..):
                -- Internet Explorer 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- Netscape 2 & Netscape 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- others...
*/
(function Main() {
    /* Constants --- REDACT */
    var AUTHOR = "Lapys",
        DESCRIPTION = "LapysJS is an intuitive, minimalist web library for quick development.",
        URL = "https://www.github.com/LapysDev/LapysJS",
        VERSION = "0.0.8";

    /* Global */
        // Any --- NOTE (Lapys) -> Unique object (only feasible within JavaScript environments; for transferring non-specific data).
        var ANY = {},

        // Global --- NOTE (Lapys) -> The global object of the current environment.
        GLOBAL = null,

        // Lapys Development Kit --- REDACT --- UPDATE REQUIRED (Lapys) -> From quick inspection, re-asses the global `LapysJS` object differently.
        LapysDevelopmentKit = {
            Constants: {Keywords: {}, Number: {}, Objects: {}, String: {}},
            Data: {},
            Environment: {Data: {}, Type: null, State: "OK", Vendors: []},
            Functions: {},
            Information: {
                Messages: {Debugging: {}, Error: {}},
                Settings: {DebugMode: null, PublicMode: null}
            },
            Mathematics: {},
            Objects: {},
            Storage: {Registry: {}},
            Test: {}
        },

        // Strict --- NOTE (Lapys) -> Cause alternative logical paths within a function or method. Also known as an argument flag.
        STRICT = false,

        // Undefined --- NOTE (Lapys) -> Specify `undefined` whose global property value can be changed.
        undefined = void +0;

    /* Shorthands */
    var LDK = LapysDevelopmentKit,
        LDKC = LapysDevelopmentKit.Constants,
        LDKD = LapysDevelopmentKit.Data,
        LDKE = LapysDevelopmentKit.Environment,
        LDKF = LapysDevelopmentKit.Functions,
        LDKI = LapysDevelopmentKit.Information,
        LDKM = LapysDevelopmentKit.Mathematics,
        LDKO = LapysDevelopmentKit.Objects,
        LDKS = LapysDevelopmentKit.Storage,
        LDKT = LapysDevelopmentKit.Test;

    /* Modification */
        /* Lapys Development Kit */
            /* Constants --- REDACT */
                // Number > (Infinity, Not-A-Number)
                LapysDevelopmentKit.Constants.Number.Infinity = 1 / +0;
                LapysDevelopmentKit.Constants.Number.NaN = +0 / +0;

                // Keywords > ... --- NOTE (Lapys) -> Store the keyword strings as arrays because older browsers defer to the `String.prototype.charAt` method rather than syntactic string indexing (i.e.: the `[]` operation).
                LapysDevelopmentKit.Constants.Keywords["extends"] = ['e', 'x', 't', 'e', 'n', 'd', 's'];
                LapysDevelopmentKit.Constants.Keywords.nativeFunctionCodes = [
                    ['[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'],
                    ['[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']']
                ];

                // String > ...
                LapysDevelopmentKit.Constants.String.alphabets = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];
                LapysDevelopmentKit.Constants.String.binary = ['0', '1'];
                LapysDevelopmentKit.Constants.String.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                LapysDevelopmentKit.Constants.String.hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F'];
                LapysDevelopmentKit.Constants.String.lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                LapysDevelopmentKit.Constants.String.octal = ['0', '1', '2', '3', '4', '5', '6', '7'];
                LapysDevelopmentKit.Constants.String.uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                LapysDevelopmentKit.Constants.String.sortableCharacters = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '$'];
                LapysDevelopmentKit.Constants.String.variableCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '_', '$'];

            /* Data */
                /* Clock */
                LapysDevelopmentKit.Data.Clock = function Clock() {};
                    // Prototype
                    LapysDevelopmentKit.Data.ClockPrototype = LDKD.Clock.prototype;
                        // Check
                        LapysDevelopmentKit.Data.ClockPrototype.check = function check(condition, ontrue, onfalse) {};

                        // Stop
                        LapysDevelopmentKit.Data.ClockPrototype.stop = function stop(condition, ontrue, onfalse) {};

                        /* Thread
                                --- UPDATE REQUIRED ---
                                    #Lapys: Multi-threading parallelism, maybe?
                                        - Although how would Web Workers `Worker` objects or any solution as such be integrated into the library?
                        */
                        LapysDevelopmentKit.Data.ClockPrototype.thread = function thread() {};

                        // Tick
                        LapysDevelopmentKit.Data.ClockPrototype.tick = function tick(frameAction, delay) {};

                        // Timestamp
                        LapysDevelopmentKit.Data.ClockPrototype.timestamp = function timestamp() {};

                        // Wind
                        LapysDevelopmentKit.Data.ClockPrototype.wind = function wind(frameAction, interval) {};

                /* Component --- CHECKPOINT (Lapys) */
                    // Prototype --- CHECKPOINT (Lapys)

                    /* Accordion --- CHECKPOINT (Lapys) */
                    /* Carousel --- CHECKPOINT (Lapys) */
                    /* Drag-Drop --- CHECKPOINT (Lapys) */
                    /* Dropdown --- CHECKPOINT (Lapys) */
                    /* Dynamic Text --- CHECKPOINT (Lapys) */
                        /* Dynamic Character --- CHECKPOINT (Lapys) */
                        /* Dynamic Cursor --- CHECKPOINT (Lapys) */
                    /* Dynamic Time --- CHECKPOINT (Lapys) */
                    /* Marquee --- CHECKPOINT (Lapys) */
                    /* Media --- CHECKPOINT (Lapys) */
                        /* Audio --- CHECKPOINT (Lapys) */
                        /* Video --- CHECKPOINT (Lapys) */
                    /* Pagination --- CHECKPOINT (Lapys) */
                    /* Picture-In-Picture --- CHECKPOINT (Lapys) */
                    /* Scrollbar --- CHECKPOINT (Lapys) */
                    /* Table --- CHECKPOINT (Lapys) */
                    /* Toast --- CHECKPOINT (Lapys) */
                    /* Tooltip --- CHECKPOINT (Lapys) */

                /* Handler --- NOTE (Lapys) -> Autonomous wrapper for function handlers. */
                LapysDevelopmentKit.Data.Handler = function Handler() {};
                    // Prototype
                    LapysDevelopmentKit.Data.HandlerPrototype = LDKD.Handler.prototype;
                        // Routine
                        LapysDevelopmentKit.Data.HandlerPrototype.routine = null;

                /* Frame */
                LapysDevelopmentKit.Data.Frame = function Frame() {};
                    // Prototype
                    LapysDevelopmentKit.Data.FramePrototype = LDKD.Frame.prototype;
                        // Action --- NOTE (Lapys) -> The functions called when the frame performs an event.
                        LapysDevelopmentKit.Data.FramePrototype.actions = [];

                        // Add Actions
                        LapysDevelopmentKit.Data.FramePrototype.addAction = function addAction(handlerFunction) {};

                        // Change State
                        LapysDevelopmentKit.Data.FramePrototype.changeState = function changeState(state) {};

                        // Clear Actions
                        LapysDevelopmentKit.Data.FramePrototype.clearActions = function clearActions() {};

                        // Current Tick
                        LapysDevelopmentKit.Data.FramePrototype.currentTick = +0;

                        // Play
                        LapysDevelopmentKit.Data.FramePrototype.play = function play() {};

                        // Remove Actions
                        LapysDevelopmentKit.Data.FramePrototype.removeAction = function removeAction(handlerFunction) {};

                        // State
                        LapysDevelopmentKit.Data.FramePrototype.state = "unplayed";

                        // Update Current Tick
                        LapysDevelopmentKit.Data.FramePrototype.updateCurrentTick = function updateCurrentTick() {};

                /* Observer */
                LapysDevelopmentKit.Data.Observer = function Observer(condition, ontrue, onfalse) {};
                    // Prototype
                    LapysDevelopmentKit.Data.ObserverPrototype = LDKD.Observer.prototype;
                        // Condition
                        LapysDevelopmentKit.Data.ObserverPrototype.condition = new LDKD.Handler;

                        // Inference
                        LapysDevelopmentKit.Data.ObserverPrototype.inference = null;

                        // Observe
                        LapysDevelopmentKit.Data.ObserverPrototype.observe = function observe() {};

                        // On False
                        LapysDevelopmentKit.Data.ObserverPrototype.onfalse = new LDKD.Handler;

                        // On True
                        LapysDevelopmentKit.Data.ObserverPrototype.ontrue = new LDKD.Handler;

            /* Functions */
                // Array
                    /* Prototype
                            --- NOTE ---
                                #Lapys:
                                    - Most array methods process & return the source/ target Array.
                                    - All non-decided array manipulation methods (`LapysDevelopmentKit.functions.arrayPrototypeAdd`, `LapysDevelopmentKit.functions.arrayPrototypeRemove`, e.t.c.) normally default to function from the back of the target array.

                            --- WARN ---
                                #Lapys:
                                    - Array methods that use a function-type parameter must callback with `key, value` arguments, not `value` (or `value, key`) argument(s) alone;
                                        This is to keep the coherency between arrays & objects (to infer that arrays are objects).
                                    - Do not pass argument flags (e.g.: `STRICT` parameters) to variadic array methods.
                                    - Each array method assumes the source Array is always complete (non-holey or non-sparse, but rather dense or packed).
                                    - Ensure each method may not be heavily dependent on another, interoperability may be key, but performance is the zenith here.
                    */
                    LapysDevelopmentKit.Functions.array = function array() {};
                        // Add
                        LapysDevelopmentKit.Functions.arrayPrototypeAdd = function arrayPrototypeAdd(array, element) { return LDKF.arrayPrototypeAddToFront.apply(LDKF, arguments) };

                        // Add To Back
                        LapysDevelopmentKit.Functions.arrayPrototypeAddToBack = function arrayPrototypeAddToBack(array, element) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Logic
                            if (length > 1) {
                                // Initialization > Half Length
                                var halfLength = LDKM.int(length / 2) - 1;

                                // (Loop > )Update > Array
                                LDKF.arrayPrototypeShiftRight(array, length - 1, STRICT = true);
                                while ((iterator -= 1) ^ halfLength) { array[iterator - 1] = arguments[iterator]; array[length - iterator - 1] = arguments[length - iterator] }
                            }

                            // Return
                            return array
                        };

                        // Add To Front
                        LapysDevelopmentKit.Functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, element) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (length > 1) {
                                // Initialization > (Array Length, Iterator)
                                var arrayLength = LDKF.arrayPrototypeLength(array), iterator = length;

                                // Loop > Update > Array (Length)
                                while (iterator -= 1) { array[arrayLength] = arguments[length - iterator]; arrayLength += 1 }
                            }

                            // Return
                            return array
                        };

                        // Build --- NOTE (Lapys) -> Similar to the `Array.prototype.map` method.
                        LapysDevelopmentKit.Functions.arrayPrototypeBuild = function arrayPrototypeBuild(array, handler) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Length, Iterator)
                                var length = LDKF.getArgumentsLength(arguments), iterator = length;

                                // Loop
                                while (iterator -= 1) {
                                    // Initialization > (Array Iterator, Handler)
                                    var arrayIterator = arrayLength, handler = arguments[length - iterator];

                                    // Loop > Update > Array (Iterator)
                                    while (arrayIterator) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = handler.call(array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1]) }
                                }
                            }

                            // Return
                            return array
                        };

                        // Clone --- NOTE (Lapys) -> Except for extreme performance reasons, defer to the `LapysDevelopmentKit.functions.objectPrototypeClone` method instead.
                        LapysDevelopmentKit.Functions.arrayPrototypeClone = function arrayPrototypeClone(array, ARRAY_LENGTH) {
                            // Initialization > (Array Iterator, Clone)
                            var arrayIterator = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), clone = [];

                            // Loop > Update > (Array Iterator, Clone)
                            while (arrayIterator) { arrayIterator -= 1; clone[arrayIterator] = array[arrayIterator] }

                            // Return
                            return clone
                        };

                        // Concatenate
                        LapysDevelopmentKit.Functions.arrayPrototypeConcatenate = function arrayPrototypeConcatenate(array, concatenationArray) {
                            // Initialization > (Array Length, Length, Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop
                            while (iterator -= 1) {
                                // Initialization > Array Iterator
                                var arrayIterator = LDKF.arrayPrototypeLength(arguments[length - iterator]);

                                // Loop > Update > Array (Iterator)
                                while (arrayIterator) { arrayIterator -= 1; array[arrayLength + arrayIterator] = arguments[length - iterator][arrayIterator] }

                                // Update > Array Length --- NOTE (Lapys) -> Request for the new length of the array.
                                arrayLength = LDKF.arrayPrototypeLength(array)
                            }

                            // Return
                            return array
                        };

                        // Contains
                        LapysDevelopmentKit.Functions.arrayPrototypeContains = function arrayPrototypeContains(array, handler, ARRAY_LENGTH) { return !!~LDKF.arrayPrototypeFind(array, handler, STRICT = ARRAY_LENGTH) };

                        // Cut
                        LapysDevelopmentKit.Functions.arrayPrototypeCut = function arrayPrototypeCut(array, length, ARRAY_LENGTH) { return LDKF.arrayPrototypeCutLeft(LDKF.arrayPrototypeCutRight(array, length, STRICT = ARRAY_LENGTH), length, STRICT = ARRAY_LENGTH) };

                        // Cut At
                        LapysDevelopmentKit.Functions.arrayPrototypeCutAt = function arrayPrototypeCutAt(array, index, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > ((Former Array) Length, Iterator)
                                var formerArrayLength = arrayLength, length = LDKF.getArgumentsLength(arguments), iterator = length;

                                // Loop
                                while (arrayLength && (iterator -= 1)) {
                                    // Initialization > Index
                                    var index = arguments[length - iterator];

                                    // Logic
                                    if (index < arrayLength) {
                                        // Loop > Update > Array
                                        while (index ^ arrayLength) array[index] = array[index += 1];

                                        // Update > Array Length
                                        arrayLength -= 1
                                    }
                                }

                                // Update > Array
                                (arrayLength == formerArrayLength) || LDKF.arrayPrototypeResize(array, arrayLength, STRICT = true)
                            }

                            // Return
                            return array
                        };

                        // Cut Left
                        LapysDevelopmentKit.Functions.arrayPrototypeCutLeft = function arrayPrototypeCutLeft(array, length) { return LDKF.arrayPrototypeShiftLeft.apply(LDKF, arguments) };

                        // Cut Right
                        LapysDevelopmentKit.Functions.arrayPrototypeCutRight = function arrayPrototypeCutRight(array, length) {
                            // Logic
                            if (length) {
                                // Initialization > Array Length
                                var arrayLength = LDKF.arrayPrototypeLength(array);

                                // Update > Array
                                arrayLength && (length > arrayLength - 1 ? LDKF.arrayPrototypeFree(array) : LDKF.arrayPrototypeResize(array, arrayLength - length))
                            }

                            // Return
                            return array
                        };

                        // Cut Through --- NOTE (Lapys) -> Similar to the `Array.prototype.slice` method.
                        LapysDevelopmentKit.Functions.arrayPrototypeCutThrough = function arrayPrototypeCutThrough(array, index, length, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Logic
                                if (index == length)
                                    // Update > Array
                                    LDKF.arrayPrototypeCutAt(array, index);

                                else if (index < length && index < arrayLength) {
                                    // Logic
                                    if (index < arrayLength) {
                                        // Update > Length
                                        (length > arrayLength) && (length = arrayLength);

                                        // Logic
                                        if (!index && length == arrayLength)
                                            // Update > Array
                                            LDKF.arrayPrototypeFree(array);

                                        else {
                                            // Initialization > (Array Iterator, Cut Length)
                                            var arrayIterator = index, cutLength = length - index;

                                            // (Loop > )Update > Array (Iterator)
                                            while (arrayIterator ^ arrayLength) { array[arrayIterator] = array[arrayIterator + cutLength + 1]; arrayIterator += 1 }
                                            LDKF.arrayPrototypeResize(array, arrayLength == cutLength + index ? index : arrayLength - cutLength - 1)
                                        }
                                    }
                                }

                                else {
                                    // Update > Array
                                    (index > arrayLength) || LDKF.arrayPrototypeCutThrough(array, index, arrayLength);
                                    (length > arrayLength) || LDKF.arrayPrototypeCutThrough(array, +0, length)
                                }
                            }

                            // Return
                            return array
                        };

                        // Depth
                        LapysDevelopmentKit.Functions.arrayPrototypeDepth = function arrayPrototypeDepth(array) { return LDKF.objectPrototypeDepth(array) };

                        // Distinct --- NOTE (Lapys) -> Does not manipulate the specified Array.
                        LapysDevelopmentKit.Functions.arrayPrototypeDistinct = function arrayPrototypeDistinct(array, ARRAY_LENGTH) {
                            // Initialization > (Array Length, Distinct)
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), distinct = [];

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, Distinct (Iterator, Length))
                                var arrayIterator = arrayLength,
                                    distinctIterator = +0, distinctLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1], isDuplicate = false;

                                    // Update > Distinct Iterator
                                    distinctIterator = distinctLength;

                                    // Loop > Update > Is Duplicate
                                    while (distinctIterator) (element === distinct[distinctIterator -= 1]) && (isDuplicate = true);

                                    // Logic > Update > Distinct (Length)
                                    if (!isDuplicate) { distinct[distinctLength] = element; distinctLength += 1 }
                                }
                            }

                            // Return
                            return distinct
                        };

                        // Every
                        LapysDevelopmentKit.Functions.arrayPrototypeEvery = function arrayPrototypeEvery(array, handler) {
                            // Initialization > (Array Length, Boolean)
                            var arrayLength = LDKF.arrayPrototypeLength(array), boolean = false;

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Length, Iterator)
                                var length = LDKF.getArgumentsLength(arguments), iterator = length;

                                // Update > Boolean
                                boolean = length ^ 1;

                                // Loop
                                while (boolean && (iterator -= 1)) {
                                    // Initialization > (Array Iterator, Handler)
                                    var arrayIterator = arrayLength, handler = arguments[length - iterator];

                                    // Loop > Update > (Array Iterator, Boolean)
                                    while (arrayIterator && boolean) { arrayIterator -= 1; handler.call(array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1]) || (boolean = false) }
                                }
                            }

                            // Return
                            return boolean
                        };

                        // Fill
                        LapysDevelopmentKit.Functions.arrayPrototypeFill = function arrayPrototypeFill(array, patternElement) {
                            // Initialization > (Array (Length, Iterator), (Pattern) (Iterator, Length))
                            var arrayLength = LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength,
                                pattern = [], patternIterator = +0, patternLength = +0;

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Length, Iterator)
                                var length = LDKF.getArgumentsLength(arguments), iterator = length;

                                // Loop > Update > (Array (Iterator), (Pattern) (Iterator, Length))
                                while (iterator -= 1) { pattern[patternLength] = arguments[length - iterator]; patternLength += 1 }
                                while (arrayIterator) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = pattern[patternIterator]; ((patternIterator += 1) == patternLength) && (patternIterator = +0) }
                            }

                            // Return
                            return array
                        };

                        // Filter
                        LapysDevelopmentKit.Functions.arrayPrototypeFilter = function arrayPrototypeFilter(array, filter, ARRAY_LENGTH) { return LDKF.arrayPrototypeFilterRight(LDKF.arrayPrototypeFilterLeft(array, filter, STRICT = ARRAY_LENGTH), filter, STRICT = ARRAY_LENGTH) };

                        // Filter Left
                        LapysDevelopmentKit.Functions.arrayPrototypeFilterLeft = function arrayPrototypeFilterLeft(array, filter, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Filter Length
                                var filterLength = +0;

                                // Loop > Update > Filter Length
                                while (filterLength ^ arrayLength && filter.call(array, filterLength, array[filterLength])) filterLength += 1;

                                // Update > Array
                                LDKF.arrayPrototypeCutLeft(array, filterLength)
                            }

                            // Return
                            return array
                        };

                        // Filter Right
                        LapysDevelopmentKit.Functions.arrayPrototypeFilterRight = function arrayPrototypeFilterRight(array, filter, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Filter Length
                                var filterLength = arrayLength;

                                // Loop
                                while (~filterLength) {
                                    // Update > Filter Length
                                    filterLength -= 1;

                                    // Logic
                                    if (!~filterLength || !filter.call(array, filterLength, array[filterLength])) {
                                        // Update > (Array, Filter Length)
                                        LDKF.arrayPrototypeCutRight(array, arrayLength - filterLength - 1);
                                        filterLength = -1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Find
                        LapysDevelopmentKit.Functions.arrayPrototypeFind = function arrayPrototypeFind(array, finder, ARRAY_LENGTH) { return LDKF.arrayPrototypeFindFromBack(array, finder, STRICT = ARRAY_LENGTH) };

                        // Find From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeFindFromBack = function arrayPrototypeFindFromBack(array, finder, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Array Iterator
                                var arrayIterator = arrayLength;

                                // Loop
                                while (arrayIterator) {
                                    // Update > Array Iterator
                                    arrayIterator -= 1;

                                    // Logic > Return
                                    if (finder.call(array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1])) return arrayLength - arrayIterator - 1
                                }
                            }

                            // Return
                            return -1
                        };

                        // Find From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeFindFromFront = function arrayPrototypeFindFromFront(array, finder, ARRAY_LENGTH) {
                            // Initialization > Array Iterator
                            var arrayIterator = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayIterator)
                                // Loop
                                while (arrayIterator) {
                                    // Update > Array Iterator
                                    arrayIterator -= 1;

                                    // Logic > Return
                                    if (finder.call(array, arrayIterator, array[arrayIterator])) return arrayIterator
                                }

                            // Return
                            return -1
                        };

                        // First
                        LapysDevelopmentKit.Functions.arrayPrototypeFirst = function arrayPrototypeFirst(array) {
                            // Logic
                            if (LDKF.arrayPrototypeLength(array)) {
                                // Initialization > Index
                                var index;

                                // Loop > Logic > Return --- NOTE (Lapys) -> This works because the `for...in` loop iteration is ordered.
                                for (index in array) if (LDKF.stringPrototypeIsNumericInteger(index)) return array[LDKF.toNumber(index)]
                            }

                            // Return
                            return undefined
                        };

                        // Flatten
                        LapysDevelopmentKit.Functions.arrayPrototypeFlatten = function arrayPrototypeFlatten(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Array Iterator
                                var arrayIterator = +0;

                                // Loop
                                while (arrayIterator ^ arrayLength) {
                                    // Initialization > Element
                                    var element = array[arrayIterator];

                                    // Logic --- NOTE (Lapys) -> Flatten the Element (Sub-Array) unto the Array.
                                    if (LDKF.isArray(element)) {
                                        // Initialization > (Array Index, Sub Array (Length, Iterator))
                                        var arrayIndex = arrayLength,
                                            subarray = element,
                                            subarrayLength = LDKF.arrayPrototypeLength(subarray), subarrayIterator = subarrayLength;

                                        // Loop > Update > (Sub Array Iterator, Array)
                                        while ((arrayIndex -= 1) ^ arrayIterator) array[arrayIndex + subarrayLength - 1] = array[arrayIndex];
                                        while (subarrayIterator) { subarrayIterator -= 1; array[arrayIterator + subarrayIterator] = subarray[subarrayIterator] }

                                        // Update > Array Length
                                        arrayLength += subarrayLength - 1
                                    }

                                    // Update > Array Iterator
                                    arrayIterator += 1
                                }
                            }

                            // Return
                            return array
                        };

                        // For Each
                        LapysDevelopmentKit.Functions.arrayPrototypeForeach = function arrayPrototypeForeach(array, handler) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Length, Iterator)
                                var length = LDKF.getArgumentsLength(arguments), iterator = length;

                                // Loop
                                while (iterator -= 1) {
                                    // Initialization > (Array Iterator, Handler)
                                    var arrayIterator = arrayLength, handler = arguments[length - iterator];

                                    // Loop > ...
                                    while (arrayIterator) { arrayIterator -= 1; handler.call(array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1]) }
                                }
                            }

                            // Return
                            return array
                        };

                        // Free
                        LapysDevelopmentKit.Functions.arrayPrototypeFree = function arrayPrototypeFree(array, IGNORE_FREEING_MEMORY) {
                            // Logic --- NOTE (Lapys) -> Some JavaScript environments do not free the array properly.
                            if (!IGNORE_FREEING_MEMORY) {
                                // Initialization > Array Iterator
                                var arrayIterator = LDKF.arrayPrototypeLength(array);

                                // Loop > Update > Array
                                while (arrayIterator) LDKF.objectPrototypeDeleteProperty(array, arrayIterator -= 1);
                            }

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, +0, STRICT = true);

                            // Return
                            return array
                        };

                        /* Includes
                                --- NOTE ---
                                    #Lapys: This is faster than `O(n)` searches because statement evaluation is quicker than sentinel iteration in most (if not all) sequential programming languages.
                                        - At every iteration, 4 elements are checked at once, allowing higher certainty per iteration than single-element checks.
                                        - Because of this multiple-element check, the loop that indexes through the Array performs less work
                                            and there's less overhead for using sentinel iteration against statement evaluation.
                                        - This method is more performant than linear searches at `4` to `2^n` element checks per iteration.

                                --- WARN ---
                                    #Lapys: A linear end-to-end search will still be more efficient in it's own domain.
                                        - There might be performance loss when getting the focus points (e.g.: Half-Array Length) for the statement checks.
                                        - Each iteration might perform redundant & repeated checks; Even if the checks are accounted for, that will still result in minor performance drops.
                        */
                        LapysDevelopmentKit.Functions.arrayPrototypeIncludes = function arrayPrototypeIncludes(array, element, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength)
                                // Logic
                                if (arrayLength == 1)
                                    // Return
                                    return array[+0] === element;

                                else {
                                    // Initialization > (Array Iterator, Half Array Length, Quarter Array Length)
                                    var arrayIterator = arrayLength,
                                        halfArrayLength = LDKM.int(arrayLength / 2),
                                        quarterArrayLength = LDKM.int(halfArrayLength / 2);

                                    // Loop
                                    while (arrayIterator ^ quarterArrayLength) {
                                        // Update > Array Iterator
                                        arrayIterator -= 1;

                                        // Logic
                                        if (
                                            array[arrayLength - arrayIterator - 1] === element ||
                                            ((arrayIterator - halfArrayLength) > -1 && array[arrayIterator - halfArrayLength] === element) ||
                                            (halfArrayLength + (arrayLength - arrayIterator - 1) < arrayLength && array[halfArrayLength + (arrayLength - arrayIterator - 1)] === element) ||
                                            array[arrayIterator] === element
                                        )
                                            // Return
                                            return true
                                    }
                                }

                            // Return
                            return false
                        };

                        // Index
                        LapysDevelopmentKit.Functions.arrayPrototypeIndex = function arrayPrototypeIndex(array, element, ARRAY_LENGTH) { return LDKF.arrayPrototypeIndexFromBack(array, element, STRICT = ARRAY_LENGTH) };

                        // Index From --- NOTE (Lapys) -> Utilizes the same techniques used in the `LapysDevelopmentKit.Functions.arrayPrototypeIncludes` method to assert an index from either the beginning, end or middle of the Array.
                        LapysDevelopmentKit.Functions.arrayPrototypeIndexFrom = function arrayPrototypeIndexFrom(array, element, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength)
                                // Logic
                                if (arrayLength == 1)
                                    // Return
                                    return array[+0] === element ? +0 : -1;

                                else {
                                    // Initialization > (Array Iterator, Half Array Length, Quarter Array Length, Index(es))
                                    var arrayIterator = arrayLength,
                                        halfArrayLength = LDKM.int(arrayLength / 2),
                                        quarterArrayLength = LDKM.int(halfArrayLength / 2),
                                        index = +0, indexes = [];

                                    // Loop
                                    while (arrayIterator ^ quarterArrayLength) {
                                        // Update > (Array Iterator, Indexes)
                                        arrayIterator -= 1;
                                        indexes[+0] = arrayLength - arrayIterator - 1;
                                        indexes[1] = arrayIterator - halfArrayLength;
                                        indexes[2] = halfArrayLength + (arrayLength - arrayIterator - 1);
                                        indexes[3] = arrayIterator;

                                        // Logic
                                        if (
                                            ((array[indexes[+0]] === element) && (index = 1)) ||
                                            (indexes[1] > -1 && ((array[indexes[1]] === element) && (index = 2))) ||
                                            ((indexes[2] < arrayLength) && ((array[indexes[2]] === element) && (index = 3))) ||
                                            ((array[indexes[3]] === element) && (index = 4))
                                        )
                                            // Return
                                            return indexes[index - 1]
                                    }
                                }

                            // Return
                            return -1
                        };

                        // Index From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeIndexFromBack = function arrayPrototypeIndexFromBack(array, element, ARRAY_LENGTH) {
                            // Initialization > Array (Length, Iterator)
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength;

                            // Loop > Logic > Return
                            while (arrayIterator) if (array[arrayLength - (arrayIterator -= 1) - 1] === element) return arrayLength - arrayIterator - 1;

                            // Return
                            return -1
                        };

                        // Index From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeIndexFromFront = function arrayPrototypeIndexFromFront(array, element, ARRAY_LENGTH) {
                            // Initialization > Array (Length, Iterator)
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength;

                            // Loop > Logic > Return
                            while (arrayIterator) if (array[arrayIterator -= 1] === element) return arrayIterator;

                            // Return
                            return -1
                        };

                        // Insert At
                        LapysDevelopmentKit.Functions.arrayPrototypeInsertAt = function arrayPrototypeInsertAt(array, element, index, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength && index < arrayLength) {
                                // Initialization > Array Iterator
                                var arrayIterator = arrayLength;

                                // Loop > Update > Array (Iterator)
                                while (arrayIterator ^ index) { arrayIterator -= 1; array[arrayIterator + 1] = array[arrayIterator] }
                            }

                            // Update > Array
                            array[index] = element;

                            // Return
                            return array
                        };

                        // Insert Through
                        LapysDevelopmentKit.Functions.arrayPrototypeInsertThrough = function arrayPrototypeInsertThrough(array, patternElement, index, length) {
                            // Initialization > (Array Length, Arguments (Length, Iterator), Insert (Index, Length), (Pattern) (Iterator, Length))
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                argumentsLength = LDKF.getArgumentsLength(arguments), argumentsIterator = argumentsLength - 2,
                                insertIndex = arguments[argumentsLength - 2], insertLength = arguments[argumentsLength - 1],
                                pattern = [], patternIterator = +0, patternLength = +0;

                            // Loop > Update > Pattern (Length)
                            while (argumentsIterator -= 1) { pattern[argumentsIterator - 1] = arguments[argumentsIterator]; patternLength += 1 }

                            // Logic
                            if (arrayLength) {
                                // Logic
                                if (insertIndex == insertLength)
                                    // Update > Array
                                    LDKF.arrayPrototypeInsertAt(array, pattern[+0], insertIndex);

                                else if (insertIndex < insertLength) {
                                    // Logic
                                    if (insertIndex < arrayLength) {
                                        // Initialization > (Array Iterator, Insertion Length)
                                        var arrayIterator = arrayLength, insertionLength = insertLength - insertIndex;

                                        // Loop > Update > Array (Iterator)
                                        while (arrayIterator ^ insertIndex) { arrayIterator -= 1; array[arrayIterator + insertionLength + 1] = array[arrayIterator] }
                                    }
                                }

                                else {
                                    // Initialization > Arguments
                                    var args = LDKF.arrayPrototypeConcatenate([array], pattern);

                                    // Update > Array
                                    LDKF.arrayPrototypeInsertThrough.apply(LDKF, LDKF.arrayPrototypeConcatenate([], args, [+0, insertLength]));
                                    (insertIndex > arrayLength - 1) ? array[insertIndex] = pattern[+0] : LDKF.arrayPrototypeInsertThrough.apply(LDKF, LDKF.arrayPrototypeConcatenate([], args, [insertIndex, arrayLength - 1]))
                                }
                            }

                            // Loop
                            while (insertIndex < insertLength + 1) {
                                // Update > (Array, Insert Index, Pattern Iterator)
                                array[insertIndex] = pattern[patternIterator];
                                insertIndex += 1;
                                ((patternIterator += 1) == patternLength) && (patternIterator = +0)
                            }

                            // Return
                            return array
                        };

                        // Instance
                        LapysDevelopmentKit.Functions.arrayPrototypeInstance = function arrayPrototypeInstance(array, ARRAY_LENGTH) {
                            // Initialization > (Array Length, Instances)
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), instances = [];

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, Instances (Iterator, Length))
                                var arrayIterator = arrayLength,
                                    instancesIterator = +0, instancesLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Instance Found)
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1], instanceFound = false;

                                    // Update > Instances Iterator
                                    instancesIterator = instancesLength;

                                    // Loop
                                    while (instancesIterator) {
                                        // Initialization > Instance
                                        var instance = instances[instancesIterator -= 1];

                                        // Logic
                                        if (element === instance.element) {
                                            // Modification > Instance > Count
                                            instance.count += 1;

                                            // Update > (Instance > Instances, Instance Found)
                                            LDKF.arrayPrototypeAddToFront(instance.instances, arrayLength - arrayIterator - 1);
                                            instanceFound = true
                                        }
                                    }

                                    // Logic > Update > Instances (Length)
                                    if (!instanceFound) { instances[instancesLength] = {count: 1, element: element, instances: [arrayLength - arrayIterator - 1]}; instancesLength += 1 }
                                }
                            }

                            // Return
                            return instances
                        };

                        // Is Subset
                        LapysDevelopmentKit.Functions.arrayPrototypeIsSubset = function arrayPrototypeIsSubset(array, subset) {
                            // Initialization > (Array, Subset) Length
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                subsetLength = LDKF.arrayPrototypeLength(subset);

                            // Logic
                            if (arrayLength && arrayLength > subsetLength - 1) {
                                // Initialization > (Sentinel (Length), Subset Iterator)
                                var sentinel = LDKF.arrayPrototypeClone(array, STRICT = arrayLength), sentinelLength = arrayLength,
                                    subsetIterator = subsetLength;

                                // Loop --- NOTE (Lapys) -> Remove each element of the Subset if they exist.
                                while (subsetIterator) {
                                    // Initialization > Index
                                    var index = LDKF.arrayPrototypeIndexFromFront(sentinel, subset[subsetIterator -= 1], STRICT = sentinelLength);

                                    // Update > Sentinel
                                    ~index && LDKF.arrayPrototypeCutAt(sentinel, index, STRICT = (sentinelLength -= 1) + 1)
                                }

                                // Return
                                return sentinelLength == arrayLength - subsetLength
                            }

                            // Return
                            return false
                        };

                        // Is Superset
                        LapysDevelopmentKit.Functions.arrayPrototypeIsSuperset = function arrayPrototypeIsSuperset(array, superset) { return LDKF.arrayPrototypeIsSubset(superset, array) };

                        // Last
                        LapysDevelopmentKit.Functions.arrayPrototypeLast = function arrayPrototypeLast(array) {
                            // Logic
                            if (LDKF.arrayPrototypeLength(array)) {
                                // Initialization > Indexes (Iterator)
                                var indexes = [], indexesIterator = +0;

                                // Loop > Update > Indexes (Iterator) --- NOTE (Lapys) -> Unfortunately, the `for...in` statement does not iterate enumerable keys in reverse.
                                for (index in array) { indexes[indexesIterator] = index; indexesIterator += 1 }

                                // Loop
                                while (indexesIterator) {
                                    // Initialization > Index
                                    var index = indexes[indexesIterator -= 1];

                                    // Logic > Return
                                    if (LDKF.stringPrototypeIsNumericInteger(index)) return array[LDKF.toNumber(index)]
                                }
                            }

                            // Return
                            return undefined
                        };

                        // Length --- NOTE (Lapys) -> Arrays manage their own length. Although sparse arrays may manage invalid lengths.
                        LapysDevelopmentKit.Functions.arrayPrototypeLength = function arrayPrototypeLength(array) { return array.length };

                        // Like
                        LapysDevelopmentKit.Functions.arrayPrototypeLike = function arrayPrototypeLike(arrayA, arrayB, ARRAY_LENGTH) {
                            // Initialization > Iterator
                            var iterator = ARRAY_LENGTH || LDKF.arrayPrototypeLength(arrayA);

                            // Logic
                            if (ARRAY_LENGTH || iterator == LDKF.arrayPrototypeLength(arrayB)) {
                                // Loop > ...; Return
                                while (iterator) { iterator -= 1; if (arrayA[iterator] !== arrayB[iterator]) return false }
                                return true
                            }

                            // Return
                            return false
                        };

                        // Match --- NOTE (Lapys) -> Similar to the `Array.prototype.filter` method.
                        LapysDevelopmentKit.Functions.arrayPrototypeMatch = function arrayPrototypeMatch(array, matcher) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, Matches (Length))
                                var arrayIterator = arrayLength, matches = [], matchesLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > Element
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1];

                                    // Logic > Update > Matches (Length)
                                    if (matcher.call(array, arrayLength - arrayIterator - 1, element)) { matches[matchesLength] = element; matchesLength += 1 }
                                }
                            }

                            // Return
                            return matches
                        };

                        // Only
                        LapysDevelopmentKit.Functions.arrayPrototypeOnly = function arrayPrototypeOnly(array, element, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Array Iterator
                                var arrayIterator = arrayLength;

                                // Loop > Logic > Return
                                while (arrayIterator) if (array[arrayIterator -= 1] !== element) return false;

                                // Return
                                return true
                            }

                            // Return
                            return !!arrayLength
                        };

                        // Pad
                        LapysDevelopmentKit.Functions.arrayPrototypePad = function arrayPrototypePad(array, patternElement, length) {
                            // Update > Arguments
                            arguments[+0] = LDKF.arrayPrototypePadRight.apply(LDKF, arguments);

                            // Return
                            return LDKF.arrayPrototypePadLeft.apply(LDKF, arguments)
                        };

                        // Pad Left
                        LapysDevelopmentKit.Functions.arrayPrototypePadLeft = function arrayPrototypePadLeft(array, patternElement, length) {
                            // Initialization > (Array Iterator, (Arguments, Pad) Length, (Pattern) (Length, Iterator))
                            var arrayIterator = +0, argumentsLength = LDKF.getArgumentsLength(arguments),
                                padLength = arguments[argumentsLength - 1],
                                pattern = [], patternIterator = +0, patternLength = argumentsLength - 2;

                            // (Loop > )Update > ...
                            while (argumentsLength -= 1) pattern[argumentsLength - 1] = arguments[argumentsLength];
                            LDKF.arrayPrototypeShiftRight(array, padLength, STRICT = true);
                            while (padLength) { array[arrayIterator] = pattern[patternIterator]; arrayIterator += 1; padLength -= 1; ((patternIterator += 1) == patternLength) && (patternIterator = +0) }

                            // Return
                            return array
                        };

                        // Pad Right
                        LapysDevelopmentKit.Functions.arrayPrototypePadRight = function arrayPrototypePadRight(array, patternElement, length) {
                            // Initialization > ((Array, Arguments, Pad) Length, (Pattern) (Length, Iterator))
                            var arrayLength = LDKF.arrayPrototypeLength(array), argumentsLength = LDKF.getArgumentsLength(arguments),
                                padLength = arguments[argumentsLength - 1],
                                pattern = [], patternIterator = +0, patternLength = argumentsLength - 2;

                            // Loop > Update > ...
                            while (argumentsLength -= 1) pattern[argumentsLength - 1] = arguments[argumentsLength];
                            while (padLength) { array[arrayLength] = pattern[patternIterator]; arrayLength += 1; padLength -= 1; ((patternIterator += 1) == patternLength) && (patternIterator = +0) }

                            // Return
                            return array
                        };

                        // Random
                        LapysDevelopmentKit.Functions.arrayPrototypeRandom = function arrayPrototypeRandom(array) { return array[LDKF.arrayPrototypeRandomIndex(array)] };

                        // Random Index
                        LapysDevelopmentKit.Functions.arrayPrototypeRandomIndex = function arrayPrototypeRandomIndex(array, ARRAY_LENGTH) { return LDKM.int(LDKM.random() * (ARRAY_LENGTH || LDKF.arrayPrototypeLength(array))) };

                        // Remove
                        LapysDevelopmentKit.Functions.arrayPrototypeRemove = function arrayPrototypeRemove(array, element) { return LDKF.arrayPrototypeRemoveFromBack.apply(LDKF, arguments) };

                        // Remove All
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveAll = function arrayPrototypeRemoveAll(array, element) {
                            // Initialization > Array (Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array), length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (arrayLength && length > 1) {
                                // Initialization > (Index, Iterator)
                                var index, iterator = length;

                                // Loop > Loop > Update > Array (Length)
                                while (iterator -= 1) while (~(index = LDKF.arrayPrototypeIndexFrom(array, arguments[length - iterator], STRICT = arrayLength))) { LDKF.arrayPrototypeCutAt(array, index, STRICT = arrayLength); arrayLength -= 1 }
                            }

                            // Return
                            return array
                        };

                        // Remove Duplicate
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicate = function arrayPrototypeRemoveDuplicate(array, ARRAY_LENGTH) { return LDKF.arrayPrototypeRemoveDuplicateFromBack.apply(LDKF, arguments) };

                        // Remove Duplicate From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicateFromBack = function arrayPrototypeRemoveDuplicateFromBack(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length), Removed Duplicate)
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0,
                                    removedDuplicate = false;

                                // Loop
                                while (arrayIterator && !removedDuplicate) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate) {
                                        // Update > (Array, Removed Duplicate)
                                        LDKF.arrayPrototypeCutAt(array, arrayLength - arrayIterator - 1, STRICT = arrayLength);
                                        removedDuplicate = true
                                    }

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Remove Duplicate From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicateFromFront = function arrayPrototypeRemoveDuplicateFromFront(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length), Removed Duplicate)
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0,
                                    removedDuplicate = false;

                                // Loop
                                while (arrayIterator && !removedDuplicate) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayIterator -= 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate) {
                                        // Update > (Array, Removed Duplicate)
                                        LDKF.arrayPrototypeCutAt(array, arrayIterator, STRICT = arrayLength);
                                        removedDuplicate = true
                                    }

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Remove Duplicates
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicates = function arrayPrototypeRemoveDuplicates(array, ARRAY_LENGTH) { return LDKF.arrayPrototypeRemoveDuplicatesFromBack.apply(LDKF, arguments) };

                        // Remove Duplicates From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicatesFromBack = function arrayPrototypeRemoveDuplicatesFromBack(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length))
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate)
                                        // Update > Array
                                        LDKF.arrayPrototypeCutAt(array, arrayLength - arrayIterator - 1, STRICT = (arrayLength -= 1) + 1);

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Remove Duplicates From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicatesFromBack = function arrayPrototypeRemoveDuplicatesFromBack(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length))
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayIterator -= 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate)
                                        // Update > Array
                                        LDKF.arrayPrototypeCutAt(array, arrayIterator, STRICT = (arrayLength -= 1) + 1);

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Remove From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveFromBack = function arrayPrototypeRemoveFromBack(array, element) {
                            // Initialization > Array (Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array), length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (arrayLength && length > 1) {
                                // Initialization > (Index, Iterator)
                                var index, iterator = length;

                                // Loop > Update > Array
                                while (iterator -= 1)
                                    ~(index = LDKF.arrayPrototypeIndexFromBack(array, arguments[length - iterator], STRICT = arrayLength)) &&
                                    LDKF.arrayPrototypeCutAt(array, index, STRICT = (arrayLength -= 1) + 1)
                            }

                            // Return
                            return array
                        };

                        // Remove From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveFromFront = function arrayPrototypeRemoveFromFront(array, element) {
                            // Initialization > Array (Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array), length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (arrayLength && length > 1) {
                                // Initialization > (Index, Iterator)
                                var index, iterator = length;

                                // Loop > Update > Array
                                while (iterator -= 1)
                                    ~(index = LDKF.arrayPrototypeIndexFromFront(array, arguments[length - iterator], STRICT = arrayLength)) &&
                                    LDKF.arrayPrototypeCutAt(array, index, STRICT = (arrayLength -= 1) + 1)
                            }

                            // Return
                            return array
                        };

                        // Remove Repeat
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveRepeat = function arrayPrototypeRemoveRepeat(array, ARRAY_LENGTH) { return LDKF.arrayPrototypeRemoveRepeatFromBack.apply(LDKF, arguments) };

                        // Remove Repeat From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveRepeatFromBack = function arrayPrototypeRemoveRepeatFromBack(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Repeated (Length)
                                var repeated = LDKF.arrayPrototypeRepeated(array, STRICT = arrayLength), repeatedLength = LDKF.arrayPrototypeLength(repeated);

                                // Update > Array
                                repeatedLength && LDKF.arrayPrototypeCutAt(array, LDKF.arrayPrototypeIndexFromBack(array, repeated[+0]), STRICT = arrayLength)
                            }

                            // Return
                            return array
                        };

                        // Remove Repeat From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveRepeatFromFront = function arrayPrototypeRemoveRepeatFromFront(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic > Update > Array
                            if (arrayLength) { LDKF.arrayPrototypeReverse(array, STRICT = arrayLength); LDKF.arrayPrototypeRemoveRepeatFromBack(array, STRICT = arrayLength); LDKF.arrayPrototypeReverse(array) }

                            // Return
                            return array
                        };

                        // Remove Repeats
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveRepeats = function arrayPrototypeRemoveRepeats(array, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Repeated (Iterator)
                                var repeated = LDKF.arrayPrototypeRepeated(array), repeatedIterator = LDKF.arrayPrototypeLength(repeated);

                                // Loop > Update > Array
                                while (repeatedIterator) LDKF.arrayPrototypeRemoveAll(array, repeated[repeatedIterator -= 1])
                            }

                            // Return
                            return array
                        };

                        // Repeat
                        LapysDevelopmentKit.Functions.arrayPrototypeRepeat = function arrayPrototypeRepeat(array, iterationCount) {
                            // Initialization > Array
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (!iterationCount)
                                // Update > Array
                                LDKF.arrayPrototypeFree(array);

                            else if (arrayLength) {
                                // Initialization > (Former Array Length, Array Iterator)
                                var formerArrayLength = arrayLength, arrayIterator;

                                // Loop
                                while (iterationCount -= 1) {
                                    // Update > Array Iterator
                                    arrayIterator = formerArrayLength;

                                    // Loop > Update > (Array) (Iterator, Length)
                                    while (arrayIterator) { arrayIterator -= 1; array[arrayLength] = array[formerArrayLength - arrayIterator - 1]; arrayLength += 1 }
                                }
                            }

                            // Return
                            return array
                        };

                        // Repeated
                        LapysDevelopmentKit.Functions.arrayPrototypeRepeated = function arrayPrototypeRepeated(array, ARRAY_LENGTH) {
                            // Initialization > (Array Length, Repeated)
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), repeated = [];

                            // Logic
                            if (arrayLength) {
                                // Initialization > ((Instances) (Length, Iterator), Repeated Length)
                                var instances = LDKF.arrayPrototypeInstance(array, STRICT = arrayLength),
                                    instancesLength = LDKF.arrayPrototypeLength(instances),
                                    instancesIterator = instancesLength,
                                    repeatedLength = +0;

                                // Loop
                                while (instancesIterator) {
                                    // Initialization > Instance
                                    var instance = instances[instancesLength - (instancesIterator -= 1) - 1];

                                    // Logic > Update > Repeated (Length)
                                    if (~-instance.count) {
                                        repeated[repeatedLength] = instance.element;
                                        repeatedLength += 1
                                    }
                                }
                            }

                            // Return
                            return repeated
                        };

                        // Replace
                        LapysDevelopmentKit.Functions.arrayPrototypeReplace = function arrayPrototypeReplace(array, element, replacementElement) { return LDKF.arrayPrototypeReplaceFromBack.apply(LDKF, arguments) };

                        // Replace All
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceAll = function arrayPrototypeReplaceAll(array, element, replacementElement) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Index
                                var index;

                                // Loop > Update > Array
                                while (~(index = LDKF.arrayPrototypeIndexFrom(array, element)))
                                    array[index] = replacementElement
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicate
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicate = function arrayPrototypeRemoveDuplicate(array, replacementElement, ARRAY_LENGTH) { return LDKF.arrayPrototypeRemoveDuplicateFromBack.apply(LDKF, arguments) };

                        // Replace Duplicate From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceDuplicateFromBack = function arrayPrototypeReplaceDuplicateFromBack(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length), Replaced Duplicate)
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0,
                                    replacedDuplicate = false;

                                // Loop
                                while (arrayIterator && !replacedDuplicate) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate) {
                                        // Update > (Array, Replaced Duplicate)
                                        array[arrayLength - arrayIterator - 1] = replacementElement;
                                        replacedDuplicate = true
                                    }

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicate From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceDuplicateFromFront = function arrayPrototypeReplaceDuplicateFromFront(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length), Replaced Duplicate)
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0,
                                    replacedDuplicate = false;

                                // Loop
                                while (arrayIterator && !replacedDuplicate) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayIterator -= 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate) {
                                        // Update > (Array, Replaced Duplicate)
                                        array[arrayIterator] = replacementElement;
                                        replacedDuplicate = true
                                    }

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicates
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceDuplicates = function arrayPrototypeReplaceDuplicates(array, replacementElement, ARRAY_LENGTH) { return LDKF.arrayPrototypeReplaceDuplicatesFromBack.apply(LDKF, arguments) };

                        // Replace Duplicates From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceDuplicatesFromBack = function arrayPrototypeReplaceDuplicatesFromBack(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length))
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate)
                                        // Update > Array
                                        array[arrayLength - arrayIterator - 1] = replacementElement;

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicates From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceDuplicatesFromFront = function arrayPrototypeReplaceDuplicatesFromFront(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array Iterator, (Record) (Iterator, Length))
                                var arrayIterator = arrayLength,
                                    record = [], recordIterator = +0, recordLength = +0;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Is Duplicate)
                                    var element = array[arrayIterator -= 1], isDuplicate = false;

                                    // Update > Record Iterator
                                    recordIterator = recordLength;

                                    // Loop > Update > Is Duplicate
                                    while (!isDuplicate && recordIterator)
                                        (element === record[recordIterator -= 1]) && (isDuplicate = true);

                                    // Logic
                                    if (isDuplicate)
                                        // Update > Array
                                        array[arrayIterator] = replacementElement;

                                    else {
                                        // Update > Record (Length)
                                        record[recordLength] = element;
                                        recordLength += 1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceFromBack = function arrayPrototypeReplaceFromBack(array, element, replacementElement) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Index
                                var index = LDKF.arrayPrototypeIndexFromBack(array, element);

                                // Update > Array
                                ~index && (array[index] = replacementElement)
                            }

                            // Return
                            return array
                        };

                        // Replace From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceFromFront = function arrayPrototypeReplaceFromFront(array, element, replacementElement) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Index
                                var index = LDKF.arrayPrototypeIndexFromFront(array, element);

                                // Update > Array
                                ~index && (array[index] = replacementElement)
                            }

                            // Return
                            return array
                        };

                        // Replace Repeat
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceRepeat = function arrayPrototypeReplaceRepeat(array, replacementElement, ARRAY_LENGTH) { return LDKF.arrayPrototypeReplaceRepeatFromBack.apply(LDKF, arguments) };

                        // Replace Repeat From Back
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceRepeatFromBack = function arrayPrototypeReplaceRepeatFromBack(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Repeated
                                var repeated = LDKF.arrayPrototypeRepeated(array, STRICT = arrayLength), repeatedLength = LDKF.arrayPrototypeLength(repeated);

                                // Update > Array
                                repeatedLength && (array[LDKF.arrayPrototypeIndexFromBack(array, repeated[+0], STRICT = arrayLength)] = replacementElement)
                            }

                            // Return
                            return array
                        };

                        // Replace Repeat From Front
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceRepeatFromFront = function arrayPrototypeReplaceRepeatFromFront(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic > Update > Array
                            if (arrayLength) { LDKF.arrayPrototypeReverse(array, STRICT = arrayLength); LDKF.arrayPrototypeRemoveRepeatFromBack.apply(LDKF, arguments); LDKF.arrayPrototypeReverse(array) }

                            // Return
                            return array
                        };

                        // Replace Repeats
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceRepeats = function arrayPrototypeReplaceRepeats(array, replacementElement, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Repeated (Iterator)
                                var repeated = LDKF.arrayPrototypeRepeated(array), repeatedIterator = LDKF.arrayPrototypeLength(repeated);

                                // Loop > Update > Array
                                while (repeatedIterator) LDKF.arrayPrototypeReplaceAll(array, repeated[repeatedIterator -= 1], replacementElement)
                            }

                            // Return
                            return array
                        };

                        // Resize
                        LapysDevelopmentKit.Functions.arrayPrototypeResize = function arrayPrototypeResize(array, length, USE_LENGTH_PROPERTY) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Update > Array
                            !USE_LENGTH_PROPERTY && (length < +0 || !length) ? arrayLength && LDKF.arrayPrototypeFree(array) : array.length = length;

                            // Return
                            return array
                        };

                        // Reverse
                        LapysDevelopmentKit.Functions.arrayPrototypeReverse = function arrayPrototypeReverse(array, ARRAY_LENGTH) {
                            // Initialization > (Array (Length, Iterator), Half Array Length)
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength,
                                halfArrayLength = LDKM.int(arrayLength / 2);

                            // Loop
                            while (arrayIterator ^ halfArrayLength) {
                                // Initialization > Element
                                var element = array[arrayIterator -= 1];

                                // Update > Array
                                array[arrayIterator] = array[arrayLength - arrayIterator - 1]
                                array[arrayLength - arrayIterator - 1] = element
                            }

                            // Return
                            return array
                        };

                        // Shift Left
                        LapysDevelopmentKit.Functions.arrayPrototypeShiftLeft = function arrayPrototypeShiftLeft(array, length, PERSIST_UNUSED_ELEMENTS) {
                            // Logic
                            if (length) {
                                // Initialization > Array Length
                                var arrayLength = LDKF.arrayPrototypeLength(array);

                                // Logic
                                if (arrayLength)
                                    // Logic
                                    if (length > arrayLength - 1)
                                        // Update > Array
                                        LDKF.arrayPrototypeFree(array);

                                    else {
                                        // Initialization > Array Iterator
                                        var arrayIterator = arrayLength;

                                        // Loop > Update > Array (Iterator)
                                        while (arrayIterator) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = array[arrayLength - arrayIterator + (length - 1)] }

                                        // Update > Array
                                        PERSIST_UNUSED_ELEMENTS || LDKF.arrayPrototypeResize(array, arrayLength - length)
                                    }
                            }

                            // Return
                            return array
                        };

                        // Shift Right
                        LapysDevelopmentKit.Functions.arrayPrototypeShiftRight = function arrayPrototypeShiftRight(array, length, PERSIST_UNUSED_ELEMENTS) {
                            // Logic
                            if (length) {
                                // Initialization > Array Length
                                var arrayLength = LDKF.arrayPrototypeLength(array);

                                // Logic
                                if (arrayLength) {
                                    // Initialization > Array Iterator
                                    var arrayIterator = arrayLength;

                                    // Loop > Update > Array (Iterator)
                                    while (arrayIterator) { arrayIterator -= 1; array[arrayIterator + length] = array[arrayIterator] }

                                    // Logic > Loop > Update > Array
                                    if (!PERSIST_UNUSED_ELEMENTS) while (length) array[length -= 1] = undefined
                                }
                            }

                            // Return
                            return array
                        };

                        // Shuffle
                        LapysDevelopmentKit.Functions.arrayPrototypeShuffle = function arrayPrototypeShuffle(array) {
                            // Initialization > (Array Iterator, Sentinel)
                            var arrayIterator = LDKF.arrayPrototypeLength(array), sentinel = LDKF.arrayPrototypeClone(array);

                            // Loop
                            while (arrayIterator) {
                                // Update > Array Iterator
                                arrayIterator -= 1;

                                // Initialization > Source Index
                                var sourceIndex = LDKF.arrayPrototypeRandomIndex(sentinel, STRICT = arrayIterator + 1);

                                // Update > (Array, Sentinel)
                                array[arrayIterator] = sentinel[sourceIndex];
                                LDKF.arrayPrototypeCutAt(sentinel, sourceIndex, STRICT = arrayIterator + 1)
                            }

                            // Return
                            return array
                        };

                        // Slice
                        LapysDevelopmentKit.Functions.arrayPrototypeSlice = function arrayPrototypeSlice(array, index, length) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Array Iterator
                                var arrayIterator = +0;

                                // Logic
                                if (index > arrayLength - 1 && length > arrayLength - 1)
                                    // Update > Array
                                    LDKF.arrayPrototypeFree(array);

                                else {
                                    // Update > Length
                                    (length > arrayLength - 1) && (length = arrayLength - 1);

                                    // Logic
                                    if (index < length + 1 && index < arrayLength + 1) {
                                        // Update > Array Length
                                        arrayLength = length - index + 1;

                                        // Loop > Update > Array (Iterator)
                                        while (arrayIterator ^ arrayLength) { array[arrayIterator] = array[arrayIterator + index]; arrayIterator += 1 }

                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength)
                                    }

                                    else if (index > length) {
                                        // (Loop > )Update > ...
                                        (index > arrayLength - 1) && (index = arrayLength - 1);
                                        arrayLength = (arrayLength - index) + length + 1;
                                        while (length ^ index + 2) { length += 1; array[length] = array[arrayIterator + index]; arrayIterator += 1 }

                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength)
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Some
                        LapysDevelopmentKit.Functions.arrayPrototypeSome = function arrayPrototypeSome(array, handler) {
                            // Initialization > (Array Length, Boolean)
                            var arrayLength = LDKF.arrayPrototypeLength(array), boolean = false;

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Length, Iterator)
                                var length = LDKF.getArgumentsLength(arguments), iterator = length;

                                // Logic
                                if (length == 1)
                                    // Update > Boolean
                                    boolean = false;

                                else
                                    // Loop
                                    while (!boolean && (iterator -= 1)) {
                                        // Initialization > (Array Iterator, Handler)
                                        var arrayIterator = arrayLength, handler = arguments[length - iterator];

                                        // Loop > Update > (Array Iterator, Boolean)
                                        while (arrayIterator && !boolean) { arrayIterator -= 1; handler.call(array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1]) && (boolean = true) }
                                    }
                            }

                            // Return
                            return boolean
                        };

                        /* Sort
                                --- NOTE (Lapys) -> Ascending order by default; The Sorter must return the priority element it chose.
                                --- UPDATE REQUIRED (Lapys) -> Use an actual sorting algorithm.
                        */
                        LapysDevelopmentKit.Functions.arrayPrototypeSort = function arrayPrototypeSort(array, sorter, IS_NUMERIC_ARRAY) {
                            // Initialization > Array (Length, Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength;

                            /* Update > Sorter
                                    --- NOTE (Lapys) ->
                                        - The default sorter would have returned boolean,
                                            but because the Sorter argument is general-purpose that concept was defeated.
                                        - By default, Element A is prioritized.
                            */
                            (LDKF.getArgumentsLength(arguments) > 1) || (sorter = function sort(elementA, elementB, IS_NUMERIC_COMPARISON) {
                                // Initialization
                                    // Element A Is (Boolean, Number, Object, String)
                                    var elementAIsBoolean = !IS_NUMERIC_COMPARISON && LDKF.isBoolean(elementA),
                                    elementAIsNumber = LDKF.isNumber(elementA),
                                    elementAIsObject = !IS_NUMERIC_COMPARISON && (typeof elementA == "object" || LDKF.isFunction(elementA) || LDKF.isSymbol(elementA)),
                                    elementAIsString = !IS_NUMERIC_COMPARISON && LDKF.isString(elementA),

                                    // Element B Is (Boolean, Number, Object, String)
                                    elementBIsBoolean = !IS_NUMERIC_COMPARISON && LDKF.isBoolean(elementB),
                                    elementBIsNumber = LDKF.isNumber(elementB),
                                    elementBIsObject = !IS_NUMERIC_COMPARISON && (typeof elementB == "object" || LDKF.isFunction(elementB) || LDKF.isSymbol(elementB)),
                                    elementBIsString = !IS_NUMERIC_COMPARISON && LDKF.isString(elementB),

                                    // Priority Element
                                    priorityElement;

                                // Logic
                                    // [Numbers]
                                    if (
                                        IS_NUMERIC_COMPARISON || (
                                            (elementAIsBoolean || elementAIsNumber) &&
                                            (elementBIsBoolean || elementBIsNumber)
                                        )
                                    ) {
                                        // Update > (Element (A, B), Priority Element)
                                        elementAIsNumber || (elementA = LDKF.toNumber(elementA));
                                        elementBIsNumber || (elementB = LDKF.toNumber(elementB));
                                        priorityElement = elementA < elementB ? elementA : elementB
                                    }

                                    /* [Text]
                                             --- NOTE (Lapys) -> The code doesn't make this obvious yet, but the main thing is
                                                we iterate through both strings to assert which character has higher/ lower priority (as with numbers).
                                    */
                                    else if (elementAIsString && elementBIsString) {
                                        // Initialization > Element (A, B) String
                                        var elementAString = elementAIsString ? elementA : LDKF.toString(elementA),
                                            elementBString = elementBIsString ? elementB : LDKF.toString(elementB);

                                        // Logic
                                        if (!elementBString)
                                            // Update > Priority
                                            priority = 1;

                                        else {
                                            // Initialization > (Element (A, B) String Length, Iterator, Priority)
                                            var elementAStringLength = LDKF.stringPrototypeLength(elementAString),
                                                elementBStringLength = LDKF.stringPrototypeLength(elementBString),
                                                iterator = +0, priority = -1;

                                            // Loop
                                            while (!~priority && (iterator ^ elementAStringLength && iterator ^ elementBStringLength)) {
                                                // Initialization > Element (A, B) String Character Index (Is Invalid)
                                                var elementAStringCharacterIndex = LDKF.arrayPrototypeIndexFromFront(LDKC.String.sortableCharacters, LDKF.stringPrototypeCharacterAt(elementAString, iterator), STRICT = 64),
                                                        elementAStringCharacterIndexIsInvalid = !~elementAStringCharacterIndex,
                                                    elementBStringCharacterIndex = LDKF.arrayPrototypeIndexFromFront(LDKC.String.sortableCharacters, LDKF.stringPrototypeCharacterAt(elementBString, iterator), STRICT = 64),
                                                        elementBStringCharacterIndexIsInvalid = !~elementBStringCharacterIndex;

                                                // Update > (Priority, Iterator)
                                                priority = ~elementBStringCharacterIndex;
                                                (elementAStringCharacterIndex == elementBStringCharacterIndex) ||
                                                (priority = +(elementAStringCharacterIndex ^ sorter(elementAStringCharacterIndex, elementBStringCharacterIndex, STRICT = true)));
                                                iterator += 1
                                            }

                                            // Update > Priority
                                            ~priority || (priority = +(iterator ^ elementAStringLength))
                                        }

                                        // Update > Priority Element
                                        priorityElement = priority ? elementB : elementA
                                    }

                                    // [Edge-Cases]
                                    else if (
                                        ((elementAIsBoolean || elementAIsNumber) && !elementBIsNumber) ||
                                        (elementAIsString && elementBIsObject)
                                    )
                                        // Update > Priority Element
                                        priorityElement = elementA;

                                    // [Edge-Cases]
                                    else if (
                                        (!elementAIsNumber || (elementBIsBoolean || elementBIsNumber)) ||
                                        (elementAIsObject && elementBIsString)
                                    )
                                        // Update > Priority Element
                                        priorityElement = elementB;

                                    // [Other Data]
                                    else if (elementBIsObject)
                                        // Update > Priority Element
                                        priorityElement = elementA;

                                    // [Other Data]
                                    else if (elementAIsObject)
                                        // Update > Priority Element
                                        priorityElement = elementB;

                                // Return
                                return priorityElement
                            });

                            // Loop
                            while (arrayIterator -= 1) {
                                // Initialization > (Previous) Element
                                var element = array[arrayIterator], previousElement = array[arrayIterator - 1];

                                // Logic
                                if (previousElement !== element) {
                                    // Initialization > (Array Index, Re-Sort)
                                    var arrayIndex = 1, resort = false;

                                    // Loop
                                    while (~(arrayIterator - arrayIndex) && sorter(previousElement, element, IS_NUMERIC_ARRAY) === element) {
                                        // Update > (Array (Index), (Previous) Element, Re-Sort)
                                        array[arrayIterator - (arrayIndex - 1)] = previousElement;
                                        array[arrayIterator - arrayIndex] = element;
                                        arrayIndex += 1;

                                        element = array[arrayIterator - (arrayIndex - 1)];
                                        previousElement = array[arrayIterator - arrayIndex];

                                        resort || (resort = true)
                                    }

                                    // Update > Array Iterator
                                    resort && (arrayIterator += arrayIndex)
                                }
                            }

                            // Return
                            return array
                        };

                        // Swap
                        LapysDevelopmentKit.Functions.arrayPrototypeSwap = function arrayPrototypeSwap(array, index, swapIndex) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Logic
                            if (length && ~-length)
                                // Loop
                                while (~-(iterator -= 1)) {
                                    // Initialization > ((Swap) Index, Element)
                                    var index = arguments[length - iterator], swapIndex = arguments[(length - iterator) + 1];
                                    var element = array[index];

                                    // Update > Array
                                    array[index] = array[swapIndex];
                                    array[swapIndex] = element
                                }

                            // Return
                            return array
                        };

                        // Trim
                        LapysDevelopmentKit.Functions.arrayPrototypeTrim = function arrayPrototypeTrim(array, element, ARRAY_LENGTH) { return LDKF.arrayPrototypeTrimLeft(LDKF.arrayPrototypeTrimRight(array, element, STRICT = ARRAY_LENGTH), element, STRICT = ARRAY_LENGTH) };

                        // Trim Left
                        LapysDevelopmentKit.Functions.arrayPrototypeTrimLeft = function arrayPrototypeTrimLeft(array, element, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Trim Length
                                var trimLength = +0;

                                // Loop > Update > Trim Length
                                while (trimLength ^ arrayLength && array[trimLength] === element) trimLength += 1;

                                // Update > Array
                                LDKF.arrayPrototypeCutLeft(array, trimLength)
                            }

                            // Return
                            return array
                        };

                        // Trim Right
                        LapysDevelopmentKit.Functions.arrayPrototypeTrimRight = function arrayPrototypeTrimRight(array, element, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Trim Length
                                var trimLength = arrayLength;

                                // Loop
                                while (~trimLength) {
                                    // Update > Trim Length
                                    trimLength -= 1;

                                    // Logic
                                    if (!~trimLength || array[trimLength] !== element) {
                                        // Update > (Array, Trim Length)
                                        LDKF.arrayPrototypeCutRight(array, arrayLength - trimLength - 1);
                                        trimLength = -1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                    /* Size
                            --- WARN ---
                                #Lapys:
                                    - Avoid `Array.prototype.length` or `LapysDevelopmentKit.functions.arrayPrototypeLength` because most JavaScript engines do not optimize for parsing sparse arrays to non-empty arrays.
                                    - If performance is necessary, use the `USE_LENGTH_PROPERTY` clause to create a holey array quickly.
                    */
                    LDKF.arraySize = function arraySize(length, USE_LENGTH_PROPERTY) {
                        // Initialization > Array
                        var array = [];

                        // Logic > ...
                        if (USE_LENGTH_PROPERTY) LDKF.arrayPrototypeResize(array, length, STRICT = USE_LENGTH_PROPERTY);
                        else while (length) array[length -= 1] = undefined;

                        // Return
                        return array
                    };

                // Array-Like > Prototype
                    // Element At --- CHECKPOINT (Lapys)
                    // Length --- CHECKPOINT (Lapys)

                // Console
                    // Group --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.consoleGroup = function consoleGroup() {};

                    // Group End --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.consoleGroupEnd = function consoleGroupEnd() {};

                    // Log --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.consoleLog = function consoleLog() {};

                    // Warn --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.consoleWarn = function consoleWarn() {};

                // Element > Prototype
                    // Add To Attribute --- CHECKPOINT (Lapys)
                    // Add To Class --- CHECKPOINT (Lapys)
                    // Get Attribute --- CHECKPOINT (Lapys)
                    // Get Attribute Node --- CHECKPOINT (Lapys)
                    // Has Attribute --- CHECKPOINT (Lapys)
                    // Has Attribute Node --- CHECKPOINT (Lapys)
                    // Has Attributes --- CHECKPOINT (Lapys)
                    // Has In Attribute --- CHECKPOINT (Lapys)
                    // Has In Class --- CHECKPOINT (Lapys)
                    // Remove Attribute --- CHECKPOINT (Lapys)
                    // Remove Attribute Node --- CHECKPOINT (Lapys)
                    // Remove From Attribute --- CHECKPOINT (Lapys)
                    // Remove From Class --- CHECKPOINT (Lapys)
                    // Replace Attribute --- CHECKPOINT (Lapys)
                    // Replace Attribute Node --- CHECKPOINT (Lapys)
                    // Replace From Attribute --- CHECKPOINT (Lapys)
                    // Replace From Class --- CHECKPOINT (Lapys)
                    // Set Attribute --- CHECKPOINT (Lapys)
                    // Set Attribute Node --- CHECKPOINT (Lapys)

                // Error > Prototype
                    // Get Message
                    LapysDevelopmentKit.Functions.errorPrototypeGetMessage = function errorPrototypeGetMessage() {};

                // Function
                    // Prototype
                        // Body [Source]
                        LapysDevelopmentKit.Functions.functionPrototypeBody = function functionPrototypeBody(routine, SOURCE_STRING) {
                            // Initialization > (Function Body Source (Index), Source (Length))
                            var functionBodySource = "", functionBodySourceIndex = -1,
                                source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine),
                                sourceLength = LDKF.stringPrototypeLength(source);

                            // Logic
                            if (LDKF.functionPrototypeIsArrow(routine, STRICT = source) && LDKF.stringPrototypeLast(source) != '}')
                                // Update > Function Body Source Index
                                functionBodySourceIndex = LDKF.stringPrototypeLength(LDKF.functionPrototypeHead(routine, STRICT = source));

                            else {
                                // Initialization > (Source (Length, Iterator), Syntax Group Depth)
                                var sourceLength = LDKF.stringPrototypeLength(source), sourceIterator = sourceLength,
                                    syntaxGroupDepth = +0;

                                // Loop
                                while (sourceIterator) {
                                    // Logic > Update > Syntax Group Depth
                                    switch (LDKF.stringPrototypeCharacterAt(source, sourceIterator -= 1)) {
                                        case '{': syntaxGroupDepth -= 1; break;
                                        case '}': syntaxGroupDepth += 1
                                    }

                                    // Logic > Update > (Function Body Source Index, Source Iterator)
                                    if (!syntaxGroupDepth) { functionBodySourceIndex = sourceIterator; sourceIterator = +0 }
                                }
                            }

                            // Loop > Update > Function Head Source
                            while (functionBodySourceIndex ^ sourceLength) { functionBodySource += LDKF.stringPrototypeCharacterAt(source, functionBodySourceIndex); functionBodySourceIndex += 1 }

                            // Return
                            return functionBodySource
                        };

                        // Has Standard Source
                        LapysDevelopmentKit.Functions.functionPrototypeHasStandardSource = function functionPrototypeHasStandardSource(routine, SOURCE_STRING) {
                            // Initialization > Source
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Return --- NOTE (Lapys) -> Test all function types and assert if the Routine conforms to any type.
                            return LDKF.functionPrototypeIsArrow(routine, STRICT = source) ||
                                LDKF.functionPrototypeIsClass(routine, STRICT = source) ||
                                LDKF.functionPrototypeIsDefault(routine, STRICT = source) ||
                                LDKF.functionPrototypeIsGenerator(routine, STRICT = source)
                        };

                        // Head [Source]
                        LapysDevelopmentKit.Functions.functionPrototypeHead = function functionPrototypeHead(routine, SOURCE_STRING) {
                            // Initialization > Function Head (Source)
                            var functionHeadSource = "", source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Logic --- NOTE (Lapys) -> If Routine is a class, an algorithm similar to the one used in the `LapysDevelopmentKit.Functions.functionPrototypeBody` method will be used (which means potential code duplication).
                            if (LDKF.functionPrototypeIsClass(routine, STRICT = source)) {
                                // Initialization > Function Head Source Index
                                var functionHeadSourceIndex = LDKF.stringPrototypeLength(source) - LDKF.stringPrototypeLength(LDKF.functionPrototypeBody(routine, STRICT = source));

                                // Loop > Update > Function Head Source
                                while (functionHeadSourceIndex)
                                    functionHeadSource = LDKF.stringPrototypeCharacterAt(source, functionHeadSourceIndex -= 1) + functionHeadSource
                            }

                            else {
                                // Initialization > Uses `function` Keyword
                                var uses_function_Keyword = LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source);

                                // Logic
                                if (uses_function_Keyword || LDKF.stringPrototypeFirst(source) == '(') {
                                    // Initialization > Iterator
                                    var hasIndexedFunctionSourceHead = false, iterator = +0;

                                    // Loop
                                    LDKF.iterateSource(source, function(character, index) {
                                        // Update > Function Head Source
                                        functionHeadSource += character;

                                        // Logic > Update > ...
                                        switch (character) {
                                            case '(': iterator += 1; hasIndexedFunctionSourceHead || (hasIndexedFunctionSourceHead = true); break;
                                            case ')': iterator -= 1
                                        }

                                        // Logic > ... --- NOTE (Lapys) -> Iterator serves a different purpose at this point of code.
                                        if (hasIndexedFunctionSourceHead && !iterator) { iterator = index; this.stop() }
                                    }, STRICT = false, STRICT = true);

                                    // Logic
                                    if (LDKF.functionPrototypeIsArrow(routine, STRICT = source))
                                        // Loop
                                        LDKF.iterateSource(source, function(character, index) {
                                            // Update > Function Head Source
                                            functionHeadSource += character;

                                            // Target > Stop
                                            (character == '>' && LDKF.stringPrototypeCharacterAt(source, index - 1) == '=') && this.stop()
                                        }, STRICT = false, STRICT = true, STRICT = iterator + 1)
                                }

                                else if (LDKF.functionPrototypeIsArrow(routine, STRICT = source)) {
                                    // Initialization > Iterator
                                    var iterator = +0;

                                    // Loop
                                    while (!hasIndexedFunctionSourceHead) {
                                        // Initialization > Character
                                        var character = LDKF.stringPrototypeCharacterAt(source, iterator);

                                        // Update > (Function Head Source, Has Indexed Function Source Head, Iterator)
                                        functionHeadSource += character;
                                        hasIndexedFunctionSourceHead = character == '>' && LDKF.stringPrototypeCharacterAt(source, iterator - 1) == '=';
                                        iterator += 1
                                    }
                                }
                            }

                            // Return
                            return functionHeadSource
                        };

                        // Is Arrow
                        LapysDevelopmentKit.Functions.functionPrototypeIsArrow = function functionPrototypeIsArrow(routine, SOURCE_STRING) {
                            // Initialization > (Is Arrow, Source)
                            var isArrow = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.iterateSource(source, function(character, index) {
                                // Update > Is Arrow
                                (character == '=' && LDKF.stringPrototypeCharacterAt(source, index + 1) == '>') && (isArrow = true);

                                // Target > Stop
                                isArrow && this.stop()
                            }, STRICT = true, STRICT = false);

                            // Return
                            return isArrow
                        };

                        // Is Class
                        LapysDevelopmentKit.Functions.functionPrototypeIsClass = function functionPrototypeIsClass(routine, SOURCE_STRING) { var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine); return LDKF.stringPrototypeFirst(source) == 'c' && LDKF.stringPrototypeCharacterAt(source, 1) == 'l' && LDKF.stringPrototypeCharacterAt(source, 2) == 'a' && LDKF.stringPrototypeCharacterAt(source, 3) == 's' && LDKF.stringPrototypeCharacterAt(source, 4) == 's' };

                        // Is Extended Class
                        LapysDevelopmentKit.Functions.functionPrototypeIsExtendedClass = function functionPrototypeIsExtendedClass(routine, SOURCE_STRING) {
                            // Initialization > (Is Extended Class, Source)
                            var isExtendedClass = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Logic
                            if (LDKF.functionPrototypeIsClass(routine, STRICT = source)) {
                                // Initialization > Lookup Syntax (Length)
                                var lookupSyntax = LDKC.Keywords["extends"], lookupSyntaxLength = 7;

                                // Loop
                                LDKF.iterateSource(source, function(character, index) {
                                    // Initialization > Lookup Syntax Iterator
                                    var lookupSyntaxIterator = +0;

                                    // Loop > Update > Lookup Iterator
                                    while (lookupSyntaxIterator ^ lookupSyntaxLength && lookupSyntax[lookupSyntaxIterator] == (lookupSyntaxIterator ? LDKF.stringPrototypeCharacterAt(source, index + lookupSyntaxIterator) : character))
                                        lookupSyntaxIterator += 1;

                                    // Logic
                                    if (lookupSyntaxIterator == lookupSyntaxLength) {
                                        // Update > Is Extended Class
                                        isExtendedClass = !LDKF.stringPrototypeIsVariableCharacter(LDKF.stringPrototypeCharacterAt(source, index + lookupSyntaxIterator));

                                        // Target > Stop
                                        this.stop()
                                    }
                                }, STRICT = true, STRICT = false, STRICT = 5)
                            }

                            // Return
                            return isExtendedClass
                        };

                        // Is Default
                        LapysDevelopmentKit.Functions.functionPrototypeIsDefault = function functionPrototypeIsDefault(routine, SOURCE_STRING) {
                            // Initialization > (Is Default, Source)
                            var isDefault = false,
                                hasIndexedFunctionSourceHead = false,
                                source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source) &&
                            LDKF.iterateSource(source, function(character) { switch (character) { case '(': isDefault = true; this.stop(); break; case '*': this.stop() } }, STRICT = true, STRICT = true, STRICT = 8);

                            // Return
                            return isDefault
                        };

                        // Is Generator
                        LapysDevelopmentKit.Functions.functionPrototypeIsGenerator = function functionPrototypeIsGenerator(routine, SOURCE_STRING) {
                            // Initialization > (Is Generator, Source)
                            var isGenerator = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source) &&
                            LDKF.iterateSource(source, function(character) { if (character == '*') { isGenerator = true; this.stop() } }, STRICT = true, STRICT = false, STRICT = 8);

                            // Return
                            return isGenerator
                        };

                        // Is Native
                        LapysDevelopmentKit.Functions.functionPrototypeIsNative = function functionPrototypeIsNative(routine, SOURCE_STRING) {
                            // Initialization > (Is Native, Source)
                            var isNative = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Initialization > (Lookup Syntaxes) (Length(s))
                            var lookupSyntaxes = LDKC.Keywords.nativeFunctionCodes,
                                lookupSyntaxesLengths = [18, 13], // NOTE (Lapys) -> Basically, mapping `LapysDevelopmentKit.Constants.Keywords.nativeFunctionCodes` to its elements' lengths.
                                lookupSyntaxesLength = 2;

                            // Loop
                            LDKF.iterateSource(source, function(character, index) {
                                // Initialization > Lookup Syntaxes Iterator
                                var lookupSyntaxesIterator = lookupSyntaxesLength;

                                // Loop
                                while (lookupSyntaxesIterator) {
                                    // Update > Lookup Syntaxes Iterator
                                    lookupSyntaxesIterator -= 1;

                                    // Initialization > (Lookup Syntax) (Iterator, Length)
                                    var lookupSyntax = lookupSyntaxes[lookupSyntaxesIterator],
                                        lookupSyntaxIterator = +0, lookupSyntaxLength = lookupSyntaxesLengths[lookupSyntaxesIterator];

                                    // Loop > Update > Lookup Syntax Iterator
                                    while (lookupSyntaxIterator ^ lookupSyntaxLength && lookupSyntax[lookupSyntaxIterator] == (lookupSyntaxIterator ? LDKF.stringPrototypeCharacterAt(source, index + lookupSyntaxIterator) : character))
                                        lookupSyntaxIterator += 1;

                                    // Logic
                                    if (lookupSyntaxIterator == lookupSyntaxLength) {
                                        // Update > (Is Native, Lookup Syntaxes Iterator)
                                        isNative = true;
                                        lookupSyntaxesIterator = +0;
                                        this.stop()
                                    }
                                }
                            }, STRICT = {comments: true, delimiters: {arrays: false, objects: true, strings: true, syntax: true}}, STRICT = true);

                            // Return
                            return isNative
                        };

                        // Measure --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.functionPrototypeMeasure = function functionPrototypeMeasure(routine) {};

                        // Name
                        LapysDevelopmentKit.Functions.functionPrototypeName = function functionPrototypeName(routine, SOURCE_STRING) {
                            // Initialization > (Source, Function (Head Source, N), Uses `function` Keyword)
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine),
                                functionHeadSource = LDKF.functionPrototypeHead(routine, STRICT = source),
                                functionName = "",
                                uses_function_Keyword = LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source);

                            // Logic
                            if (uses_function_Keyword)
                                // Loop
                                LDKF.iterateSource(source, function(character, index) {
                                    // Target > Stop; Update > Function Name
                                    character == '(' ? this.stop() : (character == ' ' || character == '\n') || (functionName += character)
                                }, STRICT = true, STRICT = true, STRICT = 8);

                            else if (LDKF.functionPrototypeIsClass(routine, STRICT = source)) {
                                // Initialization > Has Indexed Function Source Name
                                var hasIndexedFunctionSourceName = false;

                                // Loop
                                LDKF.iterateSource(source, function(character, index) {
                                    // Logic
                                    if (hasIndexedFunctionSourceName)
                                        // Target > Stop
                                        this.stop();

                                    else {
                                        // Update > (Has Indexed Function Source Name | Function Name)
                                        (
                                            (character == '{') || (
                                                character == 'e' &&
                                                LDKF.stringPrototypeCharacterAt(source, index + 1) == 'x' &&
                                                LDKF.stringPrototypeCharacterAt(source, index + 2) == 't' &&
                                                LDKF.stringPrototypeCharacterAt(source, index + 3) == 'e' &&
                                                LDKF.stringPrototypeCharacterAt(source, index + 4) == 'n' &&
                                                LDKF.stringPrototypeCharacterAt(source, index + 5) == 'd' &&
                                                LDKF.stringPrototypeCharacterAt(source, index + 6) == 's'
                                            )
                                        ) ? hasIndexedFunctionSourceName = true : ((character == ' ' || character == '\n') || (functionName += character))
                                    }
                                }, STRICT = true, STRICT = true, STRUCT = 5)
                            }

                            // Return
                            return functionName
                        };

                        // Parameters --- UPDATE REQUIRED (Lapys) -> Stress-test eventually.
                        LapysDevelopmentKit.Functions.functionPrototypeParameters = function functionPrototypeParameters(routine, SOURCE_STRING) {
                            // Initialization > (Function (Parameters) Source, Iterator, Source)
                            var functionParametersSource = "",
                                iterator = +0, parameters = [],
                                source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Logic
                            if (LDKF.functionPrototypeIsClass(routine, STRICT = source)) {
                                // Initialization > (Function Body Source, Lookup Syntax (Length))
                                var functionBodySource = LDKF.functionPrototypeBody(routine, STRICT = source),
                                    lookupSyntax = ['c', 'o', 'n', 's', 't', 'r', 'u', 'c', 't', 'o', 'r'],
                                    lookupSyntaxLength = 11;

                                // Loop
                                LDKF.iterateSource(functionBodySource, function(character, index) {
                                    // Logic
                                    if (character == lookupSyntax[+0]) {
                                        // Initialization > Lookup Syntax Iterator
                                        var lookupSyntaxIterator = 1;

                                        // Loop > Update > Lookup Syntax Iterator
                                        while (lookupSyntaxIterator ^ lookupSyntaxLength && LDKF.stringPrototypeCharacterAt(functionBodySource, index + lookupSyntaxIterator) == lookupSyntax[lookupSyntaxIterator])
                                            lookupSyntaxIterator += 1;

                                        // Logic
                                        if (lookupSyntaxIterator == lookupSyntaxLength) {
                                            // Logic
                                            if (!LDKF.stringPrototypeIsVariableCharacter(LDKF.stringPrototypeCharacterAt(functionBodySource, index + lookupSyntaxIterator))) {
                                                // Initialization > (Lookup Syntax Index From Front, Syntax Group Depth)
                                                var lookupSyntaxIndexFromFront = index + lookupSyntaxIterator, syntaxGroupDepth = +0;

                                                // Loop
                                                LDKF.iterateSource(functionBodySource, function(character, index) {
                                                    // Logic > (Update > Syntax Group Depth; ...)
                                                    switch (character) { case '(': syntaxGroupDepth += 1; break; case ')': syntaxGroupDepth -= 1 }
                                                    if (character == ')' && !syntaxGroupDepth) { iterator = index; this.stop() }
                                                }, STRICT = true, STRICT = true, STRICT = lookupSyntaxIndexFromFront - 1, STRICT = true);

                                                // Loop
                                                while (iterator ^ lookupSyntaxIndexFromFront) {
                                                    // Initialization > Character
                                                    var character = LDKF.stringPrototypeCharacterAt(functionBodySource, iterator -= 1);

                                                    // Update > Function Parameters Source
                                                    (iterator == lookupSyntaxIndexFromFront && character == '(') || (functionParametersSource = character + functionParametersSource)
                                                }
                                            }

                                            // Target > Stop
                                            this.stop()
                                        }
                                    }
                                }, STRICT = true, STRICT = true)
                            }

                            else {
                                // Initialization > Function Head Source (Index)
                                var functionHeadSource = LDKF.functionPrototypeHead(routine, STRICT = source), functionHeadSourceIndex = +0;

                                // Logic
                                if (LDKF.stringPrototypeFirst(functionHeadSource) != '(' && LDKF.functionPrototypeIsArrow(routine, STRICT = source))
                                    // Loop
                                    LDKF.iterateSource(functionHeadSource, function(character, index) {
                                        // Logic > ...
                                        if (character == '>' && LDKF.stringPrototypeCharacterAt(functionHeadSource, index - 1) == '=') { iterator = index - 2; this.stop() }
                                    }, STRICT = true, STRICT = true);

                                else {
                                    // Initialization > Syntax Group Depth
                                    var syntaxGroupDepth = +0;

                                    // Loop
                                    LDKF.iterateSource(functionHeadSource, function(character, index) {
                                        // Logic > ...
                                        if (character == '(') { functionHeadSourceIndex = index; iterator = index - 1; this.stop() }
                                    }, STRICT = true, STRICT = true);

                                    LDKF.iterateSource(functionHeadSource, function(character, index) {
                                        // Logic > (Update > Syntax Group Depth; ...)
                                        switch (character) { case '(': syntaxGroupDepth += 1; break; case ')': syntaxGroupDepth -= 1 }
                                        if (character == ')' && !syntaxGroupDepth) { iterator = index; this.stop() }
                                    }, STRICT = true, STRICT = true, STRICT = iterator)
                                }

                                // Loop
                                while (iterator ^ functionHeadSourceIndex) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(functionHeadSource, iterator -= 1);

                                    // Update > Function Parameters Source
                                    (iterator == functionHeadSourceIndex && character == '(') || (functionParametersSource = character + functionParametersSource)
                                }
                            }

                            // Return
                            return functionParametersSource
                        };

                        // Parameters Length
                        LapysDevelopmentKit.Functions.functionPrototypeParametersLength = function functionPrototypeParametersLength(routine, SOURCE_STRING) { return LDKF.arrayPrototypeLength(LDKF.functionPrototypeParameters(routine, SOURCE_STRING)) };

                        // Source Begins With `function` Keyword
                        LapysDevelopmentKit.Functions.functionPrototypeSourceBeginsWith_function_Keyword = function functionPrototypeSourceBeginsWith_function_Keyword(routine, SOURCE_STRING) {
                            // Initialization > Source
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Return
                            return LDKF.stringPrototypeFirst(source) == 'f' && LDKF.stringPrototypeCharacterAt(source, 1) == 'u' && LDKF.stringPrototypeCharacterAt(source, 2) == 'n' && LDKF.stringPrototypeCharacterAt(source, 3) == 'c' && LDKF.stringPrototypeCharacterAt(source, 4) == 't' && LDKF.stringPrototypeCharacterAt(source, 5) == 'i' && LDKF.stringPrototypeCharacterAt(source, 6) == 'o' && LDKF.stringPrototypeCharacterAt(source, 7) == 'n'
                        };

                        // To Source String
                        LapysDevelopmentKit.Functions.functionPrototypeToSourceString = function functionPrototypeToSourceString(routine) { return LDKF.isNull(routine) ? "" : LDKF.stringPrototypeTrim(LDKF.toString(routine)) };

                // Get Arguments Length --- NOTE (Lapys) -> Argument objects store their own length.
                LapysDevelopmentKit.Functions.getArgumentsLength = function getArgumentsLength(argumentsObject) { return argumentsObject.length };

                // HTML Element > Prototype
                    // Blur --- CHECKPOINT (Lapys)
                    // Click --- CHECKPOINT (Lapys)
                    // Focus --- CHECKPOINT (Lapys)

                // Is Array --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.isArray = function isArray(arg) { return arg instanceof Array };

                // Is Boolean
                LapysDevelopmentKit.Functions.isBoolean = function isBoolean(arg) { return typeof arg == "boolean" };
                    // Is Negative Boolean
                    LapysDevelopmentKit.Functions.isNegativeBoolean = function isNegativeBoolean(arg) { return LDKF.isBoolean(arg) && arg === false };

                    // Is Positive Boolean
                    LapysDevelopmentKit.Functions.isPositiveBoolean = function isPositiveBoolean(arg) { return LDKF.isBoolean(arg) && arg === true };

                // Is Constructible
                LapysDevelopmentKit.Functions.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                // Is Function --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.isFunction = function isFunction(arg) {
                    // Logic
                    if (typeof arg == "function")
                        // Return
                        return true;

                    else if (LDKT.canParseStrings()) {}

                    else
                        // Return
                        return false
                };

                // Is Non-Constructible
                LapysDevelopmentKit.Functions.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                // Is Null
                LapysDevelopmentKit.Functions.isNull = function isNull(arg) { return null === arg };

                // Is Number
                LapysDevelopmentKit.Functions.isNumber = function isNumber(arg) { return typeof arg == "number" };

                // Is String
                LapysDevelopmentKit.Functions.isString = function isString(arg) { return typeof arg == "string" };

                // Is Symbol
                LapysDevelopmentKit.Functions.isSymbol = function isSymbol(arg) { return typeof arg == "symbol" };

                // Is Void --- NOTE (Lapys) -> Unfortunately, `HTMLAllCollection` objects are also seen as void in modern development environments.
                LapysDevelopmentKit.Functions.isVoid = function isVoid(arg) { return typeof arg == "undefined" };

                /* Iterate Source [String]
                        --- NOTE (Lapys) -> Iterate through JavaScript source syntax.
                            - The `this` object for the Handler points to an Iterator object.
                        --- WARN (Lapys) -> The handler is executed with `value, key` arguments rather than the reverse (`key, value`)
                            because this use-case (iterating through source code) is not publicly available to the library user (unless Debug Mode is enabled).
                */
                LapysDevelopmentKit.Functions.iterateSource = function iterateSource(source, handler, IGNORE, IS_FUNCTION, STARTING_ITERATION_INDEX, PARSE_FROM_STARTING_ITERATION_INDEX) {
                    // Initialization > (Has Indexed Function Source (Body, Head), Source (Length, Iterator))
                    var hasIndexedFunctionSourceBody = !IS_FUNCTION,
                        hasIndexedFunctionSourceHead = !IS_FUNCTION;

                    // Logic > Update > Ignore --- MINIFY --- NOTE (Lapys) -> Patch up the `IGNORE` flag object.
                    if (LDKF.isBoolean(IGNORE))
                        IGNORE = {comments: {multiline: IGNORE, singleline: IGNORE}, delimiters: {arrays: IGNORE, objects: IGNORE, syntax: IGNORE, strings: {literals: IGNORE ? "both" : "none", templates: IGNORE}}};

                    else {
                        IGNORE = IGNORE || {};
                        IGNORE = {
                            comments: LDKF.isBoolean(IGNORE.comments) ? {multiline: IGNORE.comments, singleline: IGNORE.comments} : {multiline: !!(IGNORE.comments || {}).multiline, singleline: !!(IGNORE.comments || {}).singleline},
                            delimiters: LDKF.isBoolean(IGNORE.delimiters) ? {
                                arrays: IGNORE.delimiters, objects: IGNORE.delimiters, syntax: IGNORE.delimiters,
                                strings: {literals: IGNORE.delimiters ? "both" : "none", templates: IGNORE.delimiters}
                            } : {
                                arrays: !!(IGNORE.delimiters || {}).arrays, objects: !!(IGNORE.delimiters || {}).objects, syntax: !!(IGNORE.delimiters || {}).syntax,
                                strings: LDKF.isBoolean((IGNORE.delimiters || {}).strings) ?
                                    {literals: (IGNORE.delimiters || {}).strings ? "both" : "none", templates: (IGNORE.delimiters || {}).strings} :
                                    {literals: ((IGNORE.delimiters || {}).strings || {}).literals || "none", templates: !!((IGNORE.delimiters || {}).strings || {}).templates}
                            }
                        }
                    }

                    // Update > Starting Iteration index
                    STARTING_ITERATION_INDEX = STARTING_ITERATION_INDEX || +0;

                    // Initialization
                        // Allow Syntax Parsing --- NOTE (Lapys) -> Ignore syntax within comments, strings and so on.
                        var allowSyntaxParsing = true,

                        // Forced Starting Source Iteration Index
                        forcedStartingSourceIterationIndex = PARSE_FROM_STARTING_ITERATION_INDEX ? STARTING_ITERATION_INDEX : +0,

                        // Source (Length, Iterator)
                        sourceLength = LDKF.stringPrototypeLength(source) - forcedStartingSourceIterationIndex,
                        sourceIterator = sourceLength,

                        // Syntax Groups (Length) --- NOTE (Lapys) -> Use an array to represent the depth of a syntax group (e.g.: `[]` has a depth of 1, `[[]]` has a depth of 2)
                        syntaxGroups = [], syntaxGroupsLength = +0,
                            // Current Syntax Group --- NOTE (Lapys) -> Represents the last member of the Syntax Groups array.
                            currentSyntaxGroup = null,

                        // Iterator --- REDACT
                        ITERATOR = {stop: function stop() { sourceIterator = +0 }};

                    // Loop --- UPDATE REQUIRED (Lapys) -> The logic for this loop could do with some legible compacting.
                    while (sourceIterator) {
                        // Initialization > (Skip Iteration For, Source Index, Character)
                        var skipIterationFor = null,
                            sourceIndex = (sourceLength - (sourceIterator -= 1) - 1) + forcedStartingSourceIterationIndex,
                            character = LDKF.stringPrototypeCharacterAt(source, sourceIndex);

                        // Logic
                        if (allowSyntaxParsing) {
                            // Logic > ...
                            if (character == '/') {
                                // Initialization > Next Character
                                var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceIndex + 1);

                                // Logic > Update > ...
                                if (nextCharacter == '*') { allowSyntaxParsing = false; syntaxGroups[syntaxGroupsLength] = "multiline-comment"; syntaxGroupsLength += 1 }
                                else if (nextCharacter == '/') { allowSyntaxParsing = false; syntaxGroups[syntaxGroupsLength] = "singleline-comment"; syntaxGroupsLength += 1 }
                            }

                            else if (character == '\'') { allowSyntaxParsing = false; syntaxGroups[syntaxGroupsLength] = "single-quote-string-literal"; syntaxGroupsLength += 1 }
                            else if (character == '"') { allowSyntaxParsing = false; syntaxGroups[syntaxGroupsLength] = "double-quote-string-literal"; syntaxGroupsLength += 1 }
                            else if (character == '`') { allowSyntaxParsing = false; syntaxGroups[syntaxGroupsLength] = "template-string"; syntaxGroupsLength += 1 }

                            else if (currentSyntaxGroup == "array-literal" && (character == ']')) { skipIterationFor = currentSyntaxGroup; syntaxGroupsLength -= 1 }
                            else if (character == '[') { syntaxGroups[syntaxGroupsLength] = "array-literal"; syntaxGroupsLength += 1 }

                            else if (currentSyntaxGroup == "object-literal" && (character == '}')) { skipIterationFor = currentSyntaxGroup; syntaxGroupsLength -= 1 }
                            else if (character == '{')
                                // Logic > Update > ...
                                if (IS_FUNCTION && !hasIndexedFunctionSourceBody) hasIndexedFunctionSourceBody = true;
                                else { syntaxGroups[syntaxGroupsLength] = "object-literal"; syntaxGroupsLength += 1 }

                            else if (currentSyntaxGroup == "syntax-group" && (character == ')')) { skipIterationFor = currentSyntaxGroup; syntaxGroupsLength -= 1 }
                            else if (character == '(')
                                // Logic > Update > ...
                                if (IS_FUNCTION && !hasIndexedFunctionSourceHead) hasIndexedFunctionSourceHead = true;
                                else { syntaxGroups[syntaxGroupsLength] = "syntax-group"; syntaxGroupsLength += 1 }
                        }

                        else {
                            // Logic
                            if (
                                (currentSyntaxGroup == "singleline-comment" && (character == '\n')) ||
                                (currentSyntaxGroup == "multiline-comment" && (character == '/' && LDKF.stringPrototypeCharacterAt(source, sourceIndex - 1) == '*'))
                            )
                                // Update > Allow Syntax Parsing
                                allowSyntaxParsing = true;

                            else {
                                // Initialization > (Preceding, Previous) Character
                                var precedingCharacter = LDKF.stringPrototypeCharacterAt(source, sourceIndex - 2),
                                    previousCharacter = LDKF.stringPrototypeCharacterAt(source, sourceIndex - 1);

                                // Update > Allow Syntax Parsing
                                (
                                    (previousCharacter != '\\' || (precedingCharacter == '\\' && previousCharacter == '\\')) &&
                                    (
                                        (currentSyntaxGroup == "single-quote-string-literal" && (character == '\'')) ||
                                        (currentSyntaxGroup == "double-quote-string-literal" && (character == '"')) ||
                                        (currentSyntaxGroup == "template-string" && (character == '`'))
                                    )
                                ) && (allowSyntaxParsing = true)
                            }

                            // Logic > Update > ...
                            if (allowSyntaxParsing) { skipIterationFor = currentSyntaxGroup; syntaxGroupsLength -= 1 }
                        }

                        // Update > Current Syntax Group
                        currentSyntaxGroup = syntaxGroupsLength ? syntaxGroups[syntaxGroupsLength - 1] : null;

                        // Handler
                        (!STARTING_ITERATION_INDEX || sourceIndex > STARTING_ITERATION_INDEX) && ((
                            (IGNORE.comments.multiline && (currentSyntaxGroup == "multiline-comment" || skipIterationFor == "multiline-comment")) ||
                            (IGNORE.comments.singleline && (currentSyntaxGroup == "singleline-comment" || skipIterationFor == "singleline-comment")) ||
                            (IGNORE.delimiters.arrays && (currentSyntaxGroup == "array-literal" || skipIterationFor == "array-literal")) ||
                            (IGNORE.delimiters.objects && (currentSyntaxGroup == "object-literal" || skipIterationFor == "object-literal")) ||
                            (IGNORE.delimiters.syntax && (currentSyntaxGroup == "syntax-group" || skipIterationFor == "syntax-group")) ||
                            (
                                (IGNORE.delimiters.strings.literals == "both" || IGNORE.delimiters.strings.literals == "double") &&
                                (currentSyntaxGroup == "double-quote-string-literal" || skipIterationFor == "double-quote-string-literal")
                            ) ||
                            (
                                (IGNORE.delimiters.strings.literals == "both" || IGNORE.delimiters.strings.literals == "single") &&
                                (currentSyntaxGroup == "single-quote-string-literal" || skipIterationFor == "single-quote-string-literal")
                            ) ||
                            (IGNORE.delimiters.strings.templates && (currentSyntaxGroup == "template-string" || skipIterationFor == "template-string"))
                        ) || handler.call(ITERATOR, character, sourceIndex))
                    }
                };

                /* Number */
                    // Prototype
                        // Is Equal
                        LapysDevelopmentKit.Functions.numberPrototypeIsEqual = function numberPrototypeIsEqual(numberA, numberB) { return !(numberA ^ numberB) };

                        // Is Even
                        LapysDevelopmentKit.Functions.numberPrototypeIsEven = function numberPrototypeIsEven(number) { return !(number & 1) && LDKF.numberPrototypeIsInteger(number) };

                        // Is Integer --- UPDATE REQUIRED (Lapys) -> Use bitwise operators.
                        LapysDevelopmentKit.Functions.numberPrototypeIsInteger = function numberPrototypeIsInteger(number) { return number == LDKM.int(number) };

                        // Is Negative Zero
                        LapysDevelopmentKit.Functions.numberPrototypeIsNegativeZero = function numberPrototypeIsNegativeZero(number) { return LDKF.objectIs(number, -0) };

                        // Is Odd
                        LapysDevelopmentKit.Functions.numberPrototypeIsOdd = function numberPrototypeIsOdd(number) { return (number & 1) && LDKF.numberPrototypeIsInteger(number) };

                /* Object */
                    // Get Own Non-Getter-Setter Property Names --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.objectGetOwnNonGetterSetterPropertyNames = function objectGetOwnNonGetterSetterPropertyNames(object) {
                        // Return
                        return Array.prototype.concat.call([], Object.getOwnPropertyNames(object), Object.getOwnPropertySymbols(object)).filter(function(propertyName) {
                            var descriptor = Object.getOwnPropertyDescriptor(object, propertyName);
                            return !LDKF.objectPrototypeHasProperty(descriptor, "get") && !LDKF.objectPrototypeHasProperty(descriptor, "set")
                        })
                    };

                    // Get Prototype Of
                    LapysDevelopmentKit.Functions.objectGetPrototypeOf = function objectGetPrototypeOf(object) { return LDKO.objectPrototypeOf(object) }

                    // Has Same Inheritance
                    LapysDevelopmentKit.Functions.objectHasSameInheritance = function objectHasSameInheritance(objectA, objectB) { return LDKF.objectPrototypeConstructor(objectA) === LDKF.objectPrototypeConstructor(objectB) && LDKF.objectPrototypePrototype(objectA) === LDKF.objectPrototypePrototype(objectB) };

                    // Is
                    LapysDevelopmentKit.Functions.objectIs = function objectIs(objectA, objectB) { return objectA === objectB ? +0 !== objectA || 1 / objectA == 1 / objectB: objectA !== objectA && objectB !== objectB };

                    // Prototype
                        // Constructor
                        LapysDevelopmentKit.Functions.objectPrototypeConstructor = function objectPrototypeConstructor(object) {
                            // Initialization > (Constructor, Is Constructible)
                            var constructor = null, isConstructible = LDKF.isConstructible(object);

                            // Error Handling --- NOTE (Lapys) -> In both cases, the Constructor is evaluated to if it is a function
                                // NOTE (Lapys) -> Request the object`s `constructor` property.
                                try { isConstructible && (constructor = object.constructor); LDKF.objectPrototypeIsOfConstructor(object, constructor) || LDKF.throwNonSpecifiedError() }

                                // NOTE (Lapys) -> Request the object`s prototype`s `constructor` property.
                                catch (error) { try { var prototype = LDKF.objectPrototypePrototype(object); isConstructible && prototype && (constructor = prototype.constructor); LDKF.objectPrototypeIsOfConstructor(object, constructor) || LDKF.throwNonSpecifiedError() } catch (error) { constructor = null } }

                            // Return
                            return constructor
                        };

                        // Delete Property [By Name]
                        LapysDevelopmentKit.Functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, propertyName) { delete object[propertyName]; return object };

                        // Depth
                        LapysDevelopmentKit.Functions.objectPrototypeDepth = function objectPrototypeDepth(object) {
                            // Initialization
                                // Depth
                                var depth = 1,

                                // Depth Tree --- NOTE (Lapys) -> Contains other objects within the object's properties similar to the Object.
                                depthTree = [],
                                    // Iterator, Length
                                    depthTreeIterator = +0, depthTreeLength = +0,

                                // Has Recursive Reference --- NOTE (Lapys) -> Terminate the depth search if a recursive reference is found.
                                hasRecursiveReference = false,

                                // Recorded References --- NOTE (Lapys) -> Record all references and values found within the search.
                                recordedReferences = [],
                                    recordedReferencesIterator = +0, recordedReferencesLength = +0,

                                // Recorded Depth Tree --- NOTE (Lapys) -> For miscellaneous actions, see code below for uses.
                                    // Iterator, Length
                                    recordedDepthTreeIterator = null, recordedDepthTreeLength = null;

                            // Initialization > (Object Property Names) (Length, Iterator)
                            var objectPropertyNames = LDKF.objectGetOwnNonGetterSetterPropertyNames(object),
                                objectPropertyNamesLength = LDKF.arrayPrototypeLength(objectPropertyNames),
                                objectPropertyNamesIterator = objectPropertyNamesLength;

                            // Loop --- NOTE (Lapys) -> Populate the Depth Tree with an initial layer.
                            while (objectPropertyNamesIterator) {
                                // Initialization > Object Property (Name, Value)
                                var objectPropertyName = objectPropertyNames[objectPropertyNamesLength - (objectPropertyNamesIterator -= 1) - 1],
                                    objectPropertyValue = object[objectPropertyName];

                                // Logic > Update > Depth Tree (Length)
                                if (LDKF.isConstructible(objectPropertyValue) && LDKF.objectHasSameInheritance(object, objectPropertyValue)) { depthTree[depthTreeLength] = objectPropertyValue; depthTreeLength += 1 }
                            }

                            // Loop --- NOTE (Lapys) -> Recur through the Object's properties.
                            do {
                                // Logic
                                if (recordedDepthTreeLength) {
                                    // Initialization > (Sub-Object) (Property Names (Length, Iterator))
                                    var subobject = depthTree[depthTreeIterator],
                                        subobjectPropertyNames = LDKF.objectGetOwnNonGetterSetterPropertyNames(subobject),
                                        subobjectPropertyNamesLength = LDKF.arrayPrototypeLength(subobject),
                                        subobjectPropertyNamesIterator = subobjectPropertyNamesLength;

                                    // Logic --- NOTE (Lapys) -> Check for circular/ recursive references to the main Object or its descendant properties.
                                    if (object === subobject)
                                        // Update > Has Recursive Reference
                                        hasRecursiveReference = true;

                                    else
                                        // Loop > Update > Has Recursive Reference
                                        for (recordedReferencesIterator = recordedReferencesLength; !hasRecursiveReference && recordedReferencesIterator; recordedReferencesIterator -= 1)
                                            (subobject === recordedReferences[recordedReferencesIterator]) && (hasRecursiveReference = true);

                                    // Logic
                                    if (!hasRecursiveReference) {
                                        // Loop
                                        while (subobjectPropertyNamesIterator) {
                                            // Initialization > Sub-Object Property (Name, Value)
                                            var subobjectPropertyName = subobjectPropertyNames[subobjectPropertyNamesLength - (subobjectPropertyNamesIterator -= 1) - 1],
                                                subobjectPropertyValue = subobject[subobjectPropertyName];

                                            // Logic > Update > Depth Tree (Length)
                                            if (LDKF.isConstructible(subobjectPropertyValue) && LDKF.objectHasSameInheritance(object, subobjectPropertyValue)) { depthTree[depthTreeLength] = subobjectPropertyValue; depthTreeLength += 1 }
                                        }

                                        // Update > Depth Tree Iterator
                                        depthTreeIterator += 1
                                    }
                                }

                                // Logic --- NOTE (Lapys) -> Represents when the search goes to a deeper layer/ level.
                                if (depthTreeIterator == recordedDepthTreeLength || !recordedDepthTreeLength) {
                                    // Logic
                                    if (recordedDepthTreeLength) {
                                        // Loop --- NOTE (Lapys) -> Record all references after iterating through them.
                                        while (recordedDepthTreeIterator ^ recordedDepthTreeLength) {
                                            // Update > Recorded References
                                            recordedReferences[recordedReferencesLength] = depthTree[recordedDepthTreeIterator];

                                            // Update > Recorded (Depth Tree Iterator, References Length)
                                            recordedDepthTreeIterator += 1;
                                            recordedReferencesLength += 1
                                        }

                                        // Update > Depth --- NOTE (Lapys) -> Semantically represents the current layer of properties recursively searched.
                                        depth += 1
                                    }

                                    // Update > Recorded Depth Tree Length
                                    recordedDepthTreeLength = depthTreeLength
                                }
                            } while (depthTreeIterator ^ recordedDepthTreeLength && !hasRecursiveReference);

                            // Update > Depth
                            hasRecursiveReference && (depth = LDKC.Number.Infinity);

                            // Return
                            return depth
                        };

                        // Has Property [By Name]
                        LapysDevelopmentKit.Functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyName) { return propertyName in object };

                        // Is Of Constructor
                        LapysDevelopmentKit.Functions.objectPrototypeIsOfConstructor = function objectPrototypeIsOfConstructor(object, constructor, ASSERT_BY_CONSTRUCTOR_VALUE) {
                            // Initialization > Is Of Constructor
                            var isOfConstructor = LDKF.isConstructible(object) && LDKF.isFunction(constructor) && (function() {
                                // Logic > Return
                                switch (typeof object) {
                                    case "boolean": return constructor === LDKO.boolean;
                                    case "function": return constructor === LDKO["function"];
                                    case "number": return constructor === LDKO.number;
                                    case "string": return constructor === LDKO.string;
                                    case "symbol": return constructor === LDKO.symbol;
                                    case "undefined": return false;
                                    default: return object instanceof constructor
                                }
                            })();

                            // Logic
                            if (ASSERT_BY_CONSTRUCTOR_VALUE)
                                // Error Handling > Update > Is Of Constructor
                                try { isOfConstructor = new constructor instanceof constructor }
                                catch (error) { LDKF.isTypeError(error) || (isOfConstructor = false) }

                            // Return
                            return isOfConstructor
                        };

                        // Prototype
                        LapysDevelopmentKit.Functions.objectPrototypePrototype = function objectPrototypePrototype(object) { return LDKF.objectGetPrototypeOf(object) };

                /* String */
                    // Prototype
                        // Character At --- NOTE (Lapys) -> Slower than array-like indexing because legacy environments do support such.
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(string, index) { return LDKF.getArgumentsLength(arguments) > 1 ? (LDKT.canParseStrings() ? LDKO.stringPrototypeCharacterAt.call(string, index) || string[index] || null : string[index] || null) : null };

                        // Character Code At
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, index) {
                            // Logic > ...
                            if (LDKF.getArgumentsLength(arguments) > 1) {
                                // Logic
                                if (LDKO.stringPrototypeCharacterCodeAt) {
                                    // Initialization > Character Code
                                    var characterCode = LDKO.stringPrototypeCharacterCodeAt.call(string, index);

                                    // Return
                                    return LDKF.isNumber(characterCode) ? characterCode : -1
                                }

                                else
                                    // Logic > Return
                                    switch(LDKF.stringPrototypeCharacterAt(string,index)){case ' ':return 32;break;case '!':return 33;break;case '"':return 34;break;case '#':return 35;break;case '$':return 36;break;case '%':return 37;break;case '&':return 38;break;case '\'':return 39;break;case '(':return 40;break;case ')':return 41;break;case '*':return 42;break;case '+':return 43;break;case ',':return 44;break;case '-':return 45;break;case '.':return 46;break;case '/':return 47;break;case '0':return 48;break;case '1':return 49;break;case '2':return 50;break;case '3':return 51;break;case '4':return 52;break;case '5':return 53;break;case '6':return 54;break;case '7':return 55;break;case '8':return 56;break;case '9':return 57;break;case ':':return 58;break;case ';':return 59;break;case '<':return 60;break;case '=':return 61;break;case '>':return 62;break;case '?':return 63;break;case '@':return 64;break;case 'A':return 65;break;case 'B':return 66;break;case 'C':return 67;break;case 'D':return 68;break;case 'E':return 69;break;case 'F':return 70;break;case 'G':return 71;break;case 'H':return 72;break;case 'I':return 73;break;case 'J':return 74;break;case 'K':return 75;break;case 'L':return 76;break;case 'M':return 77;break;case 'N':return 78;break;case 'O':return 79;break;case 'P':return 80;break;case 'Q':return 81;break;case 'R':return 82;break;case 'S':return 83;break;case 'T':return 84;break;case 'U':return 85;break;case 'V':return 86;break;case 'W':return 87;break;case 'X':return 88;break;case 'Y':return 89;break;case 'Z':return 90;break;case '[':return 91;break;case '\\':return 92;break;case ']':return 93;break;case '^':return 94;break;case '_':return 95;break;case '`':return 96;break;case 'a':return 97;break;case 'b':return 98;break;case 'c':return 99;break;case 'd':return 100;break;case 'e':return 101;break;case 'f':return 102;break;case 'g':return 103;break;case 'h':return 104;break;case 'i':return 105;break;case 'j':return 106;break;case 'k':return 107;break;case 'l':return 108;break;case 'm':return 109;break;case 'n':return 110;break;case 'o':return 111;break;case 'p':return 112;break;case 'q':return 113;break;case 'r':return 114;break;case 's':return 115;break;case 't':return 116;break;case 'u':return 117;break;case 'v':return 118;break;case 'w':return 119;break;case 'x':return 120;break;case 'y':return 121;break;case 'z':return 122;break;case '{':return 123;break;case '|':return 124;break;case '}':return 125;break;case '~':return 126;break;case ' ':return 160;break;case '¡':return 161;break;case '¢':return 162;break;case '£':return 163;break;case '¤':return 164;break;case '¥':return 165;break;case '¦':return 166;break;case '§':return 167;break;case '¨':return 168;break;case '©':return 169;break;case 'ª':return 170;break;case '«':return 171;break;case '¬':return 172;break;case '­':return 173;break;case '®':return 174;break;case '¯':return 175;break;case '°':return 176;break;case '±':return 177;break;case '²':return 178;break;case '³':return 179;break;case '´':return 180;break;case 'µ':return 181;break;case '¶':return 182;break;case '·':return 183;break;case '¸':return 184;break;case '¹':return 185;break;case 'º':return 186;break;case '»':return 187;break;case '¼':return 188;break;case '½':return 189;break;case '¾':return 190;break;case '¿':return 191;break;case 'À':return 192;break;case 'Á':return 193;break;case 'Â':return 194;break;case 'Ã':return 195;break;case 'Ä':return 196;break;case 'Å':return 197;break;case 'Æ':return 198;break;case 'Ç':return 199;break;case 'È':return 200;break;case 'É':return 201;break;case 'Ê':return 202;break;case 'Ë':return 203;break;case 'Ì':return 204;break;case 'Í':return 205;break;case 'Î':return 206;break;case 'Ï':return 207;break;case 'Ð':return 208;break;case 'Ñ':return 209;break;case 'Ò':return 210;break;case 'Ó':return 211;break;case 'Ô':return 212;break;case 'Õ':return 213;break;case 'Ö':return 214;break;case '×':return 215;break;case 'Ø':return 216;break;case 'Ù':return 217;break;case 'Ú':return 218;break;case 'Û':return 219;break;case 'Ü':return 220;break;case 'Ý':return 221;break;case 'Þ':return 222;break;case 'ß':return 223;break;case 'à':return 224;break;case 'á':return 225;break;case 'â':return 226;break;case 'ã':return 227;break;case 'ä':return 228;break;case 'å':return 229;break;case 'æ':return 230;break;case 'ç':return 231;break;case 'è':return 232;break;case 'é':return 233;break;case 'ê':return 234;break;case 'ë':return 235;break;case 'ì':return 236;break;case 'í':return 237;break;case 'î':return 238;break;case 'ï':return 239;break;case 'ð':return 240;break;case 'ñ':return 241;break;case 'ò':return 242;break;case 'ó':return 243;break;case 'ô':return 244;break;case 'õ':return 245;break;case 'ö':return 246;break;case '÷':return 247;break;case 'ø':return 248;break;case 'ù':return 249;break;case 'ú':return 250;break;case 'û':return 251;break;case 'ü':return 252;break;case 'ý':return 253;break;case 'þ':return 254;break;case 'ÿ':return 255;break;case 'Ā':return 256;break;case 'ā':return 257;break;case 'Ă':return 258;break;case 'ă':return 259;break;case 'Ą':return 260;break;case 'ą':return 261;break;case 'Ć':return 262;break;case 'ć':return 263;break;case 'Ĉ':return 264;break;case 'ĉ':return 265;break;case 'Ċ':return 266;break;case 'ċ':return 267;break;case 'Č':return 268;break;case 'č':return 269;break;case 'Ď':return 270;break;case 'ď':return 271;break;case 'Đ':return 272;break;case 'đ':return 273;break;case 'Ē':return 274;break;case 'ē':return 275;break;case 'Ĕ':return 276;break;case 'ĕ':return 277;break;case 'Ė':return 278;break;case 'ė':return 279;break;case 'Ę':return 280;break;case 'ę':return 281;break;case 'Ě':return 282;break;case 'ě':return 283;break;case 'Ĝ':return 284;break;case 'ĝ':return 285;break;case 'Ğ':return 286;break;case 'ğ':return 287;break;case 'Ġ':return 288;break;case 'ġ':return 289;break;case 'Ģ':return 290;break;case 'ģ':return 291;break;case 'Ĥ':return 292;break;case 'ĥ':return 293;break;case 'Ħ':return 294;break;case 'ħ':return 295;break;case 'Ĩ':return 296;break;case 'ĩ':return 297;break;case 'Ī':return 298;break;case 'ī':return 299;break;case 'Ĭ':return 300;break;case 'ĭ':return 301;break;case 'Į':return 302;break;case 'į':return 303;break;case 'İ':return 304;break;case 'ı':return 305;break;case 'Ĳ':return 306;break;case 'ĳ':return 307;break;case 'Ĵ':return 308;break;case 'ĵ':return 309;break;case 'Ķ':return 310;break;case 'ķ':return 311;break;case 'ĸ':return 312;break;case 'Ĺ':return 313;break;case 'ĺ':return 314;break;case 'Ļ':return 315;break;case 'ļ':return 316;break;case 'Ľ':return 317;break;case 'ľ':return 318;break;case 'Ŀ':return 319;break;case 'ŀ':return 320;break;case 'Ł':return 321;break;case 'ł':return 322;break;case 'Ń':return 323;break;case 'ń':return 324;break;case 'Ņ':return 325;break;case 'ņ':return 326;break;case 'Ň':return 327;break;case 'ň':return 328;break;case 'ŉ':return 329;break;case 'Ŋ':return 330;break;case 'ŋ':return 331;break;case 'Ō':return 332;break;case 'ō':return 333;break;case 'Ŏ':return 334;break;case 'ŏ':return 335;break;case 'Ő':return 336;break;case 'ő':return 337;break;case 'Œ':return 338;break;case 'œ':return 339;break;case 'Ŕ':return 340;break;case 'ŕ':return 341;break;case 'Ŗ':return 342;break;case 'ŗ':return 343;break;case 'Ř':return 344;break;case 'ř':return 345;break;case 'Ś':return 346;break;case 'ś':return 347;break;case 'Ŝ':return 348;break;case 'ŝ':return 349;break;case 'Ş':return 350;break;case 'ş':return 351;break;case 'Š':return 352;break;case 'š':return 353;break;case 'Ţ':return 354;break;case 'ţ':return 355;break;case 'Ť':return 356;break;case 'ť':return 357;break;case 'Ŧ':return 358;break;case 'ŧ':return 359;break;case 'Ũ':return 360;break;case 'ũ':return 361;break;case 'Ū':return 362;break;case 'ū':return 363;break;case 'Ŭ':return 364;break;case 'ŭ':return 365;break;case 'Ů':return 366;break;case 'ů':return 367;break;case 'Ű':return 368;break;case 'ű':return 369;break;case 'Ų':return 370;break;case 'ų':return 371;break;case 'Ŵ':return 372;break;case 'ŵ':return 373;break;case 'Ŷ':return 374;break;case 'ŷ':return 375;break;case 'Ÿ':return 376;break;case 'Ź':return 377;break;case 'ź':return 378;break;case 'Ż':return 379;break;case 'ż':return 380;break;case 'Ž':return 381;break;case 'ž':return 382;break;case 'ſ':return 383;break;case 'ƀ':return 384;break;case 'Ɓ':return 385;break;case 'Ƃ':return 386;break;case 'ƃ':return 387;break;case 'Ƅ':return 388;break;case 'ƅ':return 389;break;case 'Ɔ':return 390;break;case 'Ƈ':return 391;break;case 'ƈ':return 392;break;case 'Ɖ':return 393;break;case 'Ɗ':return 394;break;case 'Ƌ':return 395;break;case 'ƌ':return 396;break;case 'ƍ':return 397;break;case 'Ǝ':return 398;break;case 'Ə':return 399;break;case 'Ɛ':return 400;break;case 'Ƒ':return 401;break;case 'ƒ':return 402;break;case 'Ɠ':return 403;break;case 'Ɣ':return 404;break;case 'ƕ':return 405;break;case 'Ɩ':return 406;break;case 'Ɨ':return 407;break;case 'Ƙ':return 408;break;case 'ƙ':return 409;break;case 'ƚ':return 410;break;case 'ƛ':return 411;break;case 'Ɯ':return 412;break;case 'Ɲ':return 413;break;case 'ƞ':return 414;break;case 'Ɵ':return 415;break;case 'Ơ':return 416;break;case 'ơ':return 417;break;case 'Ƣ':return 418;break;case 'ƣ':return 419;break;case 'Ƥ':return 420;break;case 'ƥ':return 421;break;case 'Ʀ':return 422;break;case 'Ƨ':return 423;break;case 'ƨ':return 424;break;case 'Ʃ':return 425;break;case 'ƪ':return 426;break;case 'ƫ':return 427;break;case 'Ƭ':return 428;break;case 'ƭ':return 429;break;case 'Ʈ':return 430;break;case 'Ư':return 431;break;case 'ư':return 432;break;case 'Ʊ':return 433;break;case 'Ʋ':return 434;break;case 'Ƴ':return 435;break;case 'ƴ':return 436;break;case 'Ƶ':return 437;break;case 'ƶ':return 438;break;case 'Ʒ':return 439;break;case 'Ƹ':return 440;break;case 'ƹ':return 441;break;case 'ƺ':return 442;break;case 'ƻ':return 443;break;case 'Ƽ':return 444;break;case 'ƽ':return 445;break;case 'ƾ':return 446;break;case 'ƿ':return 447;break;case 'ǀ':return 448;break;case 'ǁ':return 449;break;case 'ǂ':return 450;break;case 'ǃ':return 451;break;case 'Ǆ':return 452;break;case 'ǅ':return 453;break;case 'ǆ':return 454;break;case 'Ǉ':return 455;break;case 'ǈ':return 456;break;case 'ǉ':return 457;break;case 'Ǌ':return 458;break;case 'ǋ':return 459;break;case 'ǌ':return 460;break;case 'Ǎ':return 461;break;case 'ǎ':return 462;break;case 'Ǐ':return 463;break;case 'ǐ':return 464;break;case 'Ǒ':return 465;break;case 'ǒ':return 466;break;case 'Ǔ':return 467;break;case 'ǔ':return 468;break;case 'Ǖ':return 469;break;case 'ǖ':return 470;break;case 'Ǘ':return 471;break;case 'ǘ':return 472;break;case 'Ǚ':return 473;break;case 'ǚ':return 474;break;case 'Ǜ':return 475;break;case 'ǜ':return 476;break;case 'ǝ':return 477;break;case 'Ǟ':return 478;break;case 'ǟ':return 479;break;case 'Ǡ':return 480;break;case 'ǡ':return 481;break;case 'Ǣ':return 482;break;case 'ǣ':return 483;break;case 'Ǥ':return 484;break;case 'ǥ':return 485;break;case 'Ǧ':return 486;break;case 'ǧ':return 487;break;case 'Ǩ':return 488;break;case 'ǩ':return 489;break;case 'Ǫ':return 490;break;case 'ǫ':return 491;break;case 'Ǭ':return 492;break;case 'ǭ':return 493;break;case 'Ǯ':return 494;break;case 'ǯ':return 495;break;case 'ǰ':return 496;break;case 'Ǳ':return 497;break;case 'ǲ':return 498;break;case 'ǳ':return 499;break;case 'Ǵ':return 500;break;case 'ǵ':return 501;break;case 'Ƕ':return 502;break;case 'Ƿ':return 503;break;case 'Ǹ':return 504;break;case 'ǹ':return 505;break;case 'Ǻ':return 506;break;case 'ǻ':return 507;break;case 'Ǽ':return 508;break;case 'ǽ':return 509;break;case 'Ǿ':return 510;break;case 'ǿ':return 511;break;case '𝌀':return 29440;break;case '𝌁':return 29441;break;case '𝌂':return 29442;break;case '𝌃':return 29443;break;case '𝌄':return 29444;break;case '𝌅':return 29445;break;case '𝌆':return 29446;break;case '𝌇':return 29447;break;case '𝌈':return 29448;break;case '𝌉':return 29449;break;case '𝌊':return 29450;break;case '𝌋':return 29451;break;case '𝌌':return 29452;break;case '𝌍':return 29453;break;case '𝌎':return 29454;break;case '𝌏':return 29455;break;case '𝌐':return 29456;break;case '𝌑':return 29457;break;case '𝌒':return 29458;break;case '𝌓':return 29459;break;case '𝌔':return 29460;break;case '𝌕':return 29461;break;case '𝌖':return 29462;break;case '𝌗':return 29463;break;case '𝌘':return 29464;break;case '𝌙':return 29465;break;case '𝌚':return 29466;break;case '𝌛':return 29467;break;case '𝌜':return 29468;break;case '𝌝':return 29469;break;case '𝌞':return 29470;break;case '𝌟':return 29471;break;case '𝌠':return 29472;break;case '𝌡':return 29473;break;case '𝌢':return 29474;break;case '𝌣':return 29475;break;case '𝌤':return 29476;break;case '𝌥':return 29477;break;case '𝌦':return 29478;break;case '𝌧':return 29479;break;case '𝌨':return 29480;break;case '𝌩':return 29481;break;case '𝌪':return 29482;break;case '𝌫':return 29483;break;case '𝌬':return 29484;break;case '𝌭':return 29485;break;case '𝌮':return 29486;break;case '𝌯':return 29487;break;case '𝌰':return 29488;break;case '𝌱':return 29489;break;case '𝌲':return 29490;break;case '𝌳':return 29491;break;case '𝌴':return 29492;break;case '𝌵':return 29493;break;case '𝌶':return 29494;break;case '𝌷':return 29495;break;case '𝌸':return 29496;break;case '𝌹':return 29497;break;case '𝌺':return 29498;break;case '𝌻':return 29499;break;case '𝌼':return 29500;break;case '𝌽':return 29501;break;case '𝌾':return 29502;break;case '𝌿':return 29503;break;case '𝍀':return 29504;break;case '𝍁':return 29505;break;case '𝍂':return 29506;break;case '𝍃':return 29507;break;case '𝍄':return 29508;break;case '𝍅':return 29509;break;case '𝍆':return 29510;break;case '𝍇':return 29511;break;case '𝍈':return 29512;break;case '𝍉':return 29513;break;case '𝍊':return 29514;break;case '𝍋':return 29515;break;case '𝍌':return 29516;break;case '𝍍':return 29517;break;case '𝍎':return 29518;break;case '𝍏':return 29519;break;case '𝍐':return 29520;break;case '𝍑':return 29521;break;case '𝍒':return 29522;break;case '𝍓':return 29523;break;case '𝍔':return 29524;break;case '𝍕':return 29525;break;case '𝍖':return 29526;break;case '𝐀':return 29696;break;case '𝐁':return 29697;break;case '𝐂':return 29698;break;case '𝐃':return 29699;break;case '𝐄':return 29700;break;case '𝐅':return 29701;break;case '𝐆':return 29702;break;case '𝐇':return 29703;break;case '𝐈':return 29704;break;case '𝐉':return 29705;break;case '𝐊':return 29706;break;case '𝐋':return 29707;break;case '𝐌':return 29708;break;case '𝐍':return 29709;break;case '𝐎':return 29710;break;case '𝐏':return 29711;break;case '𝐐':return 29712;break;case '𝐑':return 29713;break;case '𝐒':return 29714;break;case '𝐓':return 29715;break;case '𝐔':return 29716;break;case '𝐕':return 29717;break;case '𝐖':return 29718;break;case '𝐗':return 29719;break;case '𝐘':return 29720;break;case '𝐙':return 29721;break;case '𝐚':return 29722;break;case '𝐛':return 29723;break;case '𝐜':return 29724;break;case '𝐝':return 29725;break;case '𝐞':return 29726;break;case '𝐟':return 29727;break;case '𝐠':return 29728;break;case '𝐡':return 29729;break;case '𝐢':return 29730;break;case '𝐣':return 29731;break;case '𝐤':return 29732;break;case '𝐥':return 29733;break;case '𝐦':return 29734;break;case '𝐧':return 29735;break;case '𝐨':return 29736;break;case '𝐩':return 29737;break;case '𝐪':return 29738;break;case '𝐫':return 29739;break;case '𝐬':return 29740;break;case '𝐭':return 29741;break;case '𝐮':return 29742;break;case '𝐯':return 29743;break;case '𝐰':return 29744;break;case '𝐱':return 29745;break;case '𝐲':return 29746;break;case '𝐳':return 29747;break;case '𝐴':return 29748;break;case '𝐵':return 29749;break;case '𝐶':return 29750;break;case '𝐷':return 29751;break;case '𝐸':return 29752;break;case '𝐹':return 29753;break;case '𝐺':return 29754;break;case '𝐻':return 29755;break;case '𝐼':return 29756;break;case '𝐽':return 29757;break;case '𝐾':return 29758;break;case '𝐿':return 29759;break;case '𝑀':return 29760;break;case '𝑁':return 29761;break;case '𝑂':return 29762;break;case '𝑃':return 29763;break;case '𝑄':return 29764;break;case '𝑅':return 29765;break;case '𝑆':return 29766;break;case '𝑇':return 29767;break;case '𝑈':return 29768;break;case '𝑉':return 29769;break;case '𝑊':return 29770;break;case '𝑋':return 29771;break;case '𝑌':return 29772;break;case '𝑍':return 29773;break;case '𝑎':return 29774;break;case '𝑏':return 29775;break;case '𝑐':return 29776;break;case '𝑑':return 29777;break;case '𝑒':return 29778;break;case '𝑓':return 29779;break;case '𝑔':return 29780;break;case '𝑕':return 29781;break;case '𝑖':return 29782;break;case '𝑗':return 29783;break;case '𝑘':return 29784;break;case '𝑙':return 29785;break;case '𝑚':return 29786;break;case '𝑛':return 29787;break;case '𝑜':return 29788;break;case '𝑝':return 29789;break;case '𝑞':return 29790;break;case '𝑟':return 29791;break;case '𝑠':return 29792;break;case '𝑡':return 29793;break;case '𝑢':return 29794;break;case '𝑣':return 29795;break;case '𝑤':return 29796;break;case '𝑥':return 29797;break;case '𝑦':return 29798;break;case '𝑧':return 29799;break;case '𝑨':return 29800;break;case '𝑩':return 29801;break;case '𝑪':return 29802;break;case '𝑫':return 29803;break;case '𝑬':return 29804;break;case '𝑭':return 29805;break;case '𝑮':return 29806;break;case '𝑯':return 29807;break;case '𝑰':return 29808;break;case '𝑱':return 29809;break;case '𝑲':return 29810;break;case '𝑳':return 29811;break;case '𝑴':return 29812;break;case '𝑵':return 29813;break;case '𝑶':return 29814;break;case '𝑷':return 29815;break;case '𝑸':return 29816;break;case '𝑹':return 29817;break;case '𝑺':return 29818;break;case '𝑻':return 29819;break;case '𝑼':return 29820;break;case '𝑽':return 29821;break;case '𝑾':return 29822;break;case '𝑿':return 29823;break;case '𝒀':return 29824;break;case '𝒁':return 29825;break;case '𝒂':return 29826;break;case '𝒃':return 29827;break;case '𝒄':return 29828;break;case '𝒅':return 29829;break;case '𝒆':return 29830;break;case '𝒇':return 29831;break;case '𝒈':return 29832;break;case '𝒉':return 29833;break;case '𝒊':return 29834;break;case '𝒋':return 29835;break;case '𝒌':return 29836;break;case '𝒍':return 29837;break;case '𝒎':return 29838;break;case '𝒏':return 29839;break;case '𝒐':return 29840;break;case '𝒑':return 29841;break;case '𝒒':return 29842;break;case '𝒓':return 29843;break;case '𝒔':return 29844;break;case '𝒕':return 29845;break;case '𝒖':return 29846;break;case '𝒗':return 29847;break;case '𝒘':return 29848;break;case '𝒙':return 29849;break;case '𝒚':return 29850;break;case '𝒛':return 29851;break;case '𝒜':return 29852;break;case '𝒞':return 29854;break;case '𝒟':return 29855;break;case '𝒢':return 29858;break;case '𝒥':return 29861;break;case '𝒦':return 29862;break;case '𝒧':return 29863;break;case '𝒨':return 29864;break;case '𝒩':return 29865;break;case '𝒪':return 29866;break;case '𝒫':return 29867;break;case '𝒬':return 29868;break;case '𝒮':return 29870;break;case '𝒯':return 29871;break;case '𝒰':return 29872;break;case '𝒱':return 29873;break;case '𝒲':return 29874;break;case '𝒳':return 29875;break;case '𝒴':return 29876;break;case '𝒵':return 29877;break;case '𝒶':return 29878;break;case '𝒷':return 29879;break;case '𝒸':return 29880;break;case '𝒹':return 29881;break;case '𝒻':return 29883;break;case '𝒽':return 29885;break;case '𝒾':return 29886;break;case '𝒿':return 29887;break;case '𝓀':return 29888;break;case '𝓁':return 29889;break;case '𝓂':return 29890;break;case '𝓃':return 29891;break;case '𝓅':return 29893;break;case '𝓆':return 29894;break;case '𝓇':return 29895;break;case '𝓈':return 29896;break;case '𝓉':return 29897;break;case '𝓊':return 29898;break;case '𝓋':return 29899;break;case '𝓌':return 29900;break;case '𝓍':return 29901;break;case '𝓎':return 29902;break;case '𝓏':return 29903;break;case '𝓐':return 29904;break;case '𝓑':return 29905;break;case '𝓒':return 29906;break;case '𝓓':return 29907;break;case '𝓔':return 29908;break;case '𝓕':return 29909;break;case '𝓖':return 29910;break;case '𝓗':return 29911;break;case '𝓘':return 29912;break;case '𝓙':return 29913;break;case '𝓚':return 29914;break;case '𝓛':return 29915;break;case '𝓜':return 29916;break;case '𝓝':return 29917;break;case '𝓞':return 29918;break;case '𝓟':return 29919;break;case '𝓠':return 29920;break;case '𝓡':return 29921;break;case '𝓢':return 29922;break;case '𝓣':return 29923;break;case '𝓤':return 29924;break;case '𝓥':return 29925;break;case '𝓦':return 29926;break;case '𝓧':return 29927;break;case '𝓨':return 29928;break;case '𝓩':return 29929;break;case '𝓪':return 29930;break;case '𝓫':return 29931;break;case '𝓬':return 29932;break;case '𝓭':return 29933;break;case '𝓮':return 29934;break;case '𝓯':return 29935;break;case '𝓰':return 29936;break;case '𝓱':return 29937;break;case '𝓲':return 29938;break;case '𝓳':return 29939;break;case '𝓴':return 29940;break;case '𝓵':return 29941;break;case '𝓶':return 29942;break;case '𝓷':return 29943;break;case '𝓸':return 29944;break;case '𝓹':return 29945;break;case '𝓺':return 29946;break;case '𝓻':return 29947;break;case '𝓼':return 29948;break;case '𝓽':return 29949;break;case '𝓾':return 29950;break;case '𝓿':return 29951;break;case '𝔀':return 29952;break;case '𝔁':return 29953;break;case '𝔂':return 29954;break;case '𝔃':return 29955;break;case '𝔄':return 29956;break;case '𝔅':return 29957;break;case '𝔆':return 29958;break;case '𝔇':return 29959;break;case '𝔈':return 29960;break;case '𝔉':return 29961;break;case '𝔊':return 29962;break;case '𝔋':return 29963;break;case '𝔌':return 29964;break;case '𝔍':return 29965;break;case '𝔎':return 29966;break;case '𝔏':return 29967;break;case '𝔐':return 29968;break;case '𝔑':return 29969;break;case '𝔒':return 29970;break;case '𝔓':return 29971;break;case '𝔔':return 29972;break;case '𝔖':return 29974;break;case '𝔗':return 29975;break;case '𝔘':return 29976;break;case '𝔙':return 29977;break;case '𝔚':return 29978;break;case '𝔛':return 29979;break;case '𝔜':return 29980;break;case '𝔞':return 29982;break;case '𝔟':return 29983;break;case '𝔠':return 29984;break;case '𝔡':return 29985;break;case '𝔢':return 29986;break;case '𝔣':return 29987;break;case '𝔤':return 29988;break;case '𝔥':return 29989;break;case '𝔦':return 29990;break;case '𝔧':return 29991;break;case '𝔨':return 29992;break;case '𝔩':return 29993;break;case '𝔪':return 29994;break;case '𝔫':return 29995;break;case '𝔬':return 29996;break;case '𝔭':return 29997;break;case '𝔮':return 29998;break;case '𝔯':return 29999;break;case '𝔰':return 30000;break;case '𝔱':return 30001;break;case '𝔲':return 30002;break;case '𝔳':return 30003;break;case '𝔴':return 30004;break;case '𝔵':return 30005;break;case '𝔶':return 30006;break;case '𝔷':return 30007;break;case '𝔸':return 30008;break;case '𝔹':return 30009;break;case '𝔻':return 30011;break;case '𝔼':return 30012;break;case '𝔽':return 30013;break;case '𝔾':return 30014;break;case '𝕀':return 30016;break;case '𝕁':return 30017;break;case '𝕂':return 30018;break;case '𝕃':return 30019;break;case '𝕄':return 30020;break;case '𝕆':return 30022;break;case '𝕊':return 30026;break;case '𝕋':return 30027;break;case '𝕌':return 30028;break;case '𝕍':return 30029;break;case '𝕎':return 30030;break;case '𝕏':return 30031;break;case '𝕐':return 30032;break;case '𝕒':return 30034;break;case '𝕓':return 30035;break;case '𝕔':return 30036;break;case '𝕕':return 30037;break;case '𝕖':return 30038;break;case '𝕗':return 30039;break;case '𝕘':return 30040;break;case '𝕙':return 30041;break;case '𝕚':return 30042;break;case '𝕛':return 30043;break;case '𝕜':return 30044;break;case '𝕝':return 30045;break;case '𝕞':return 30046;break;case '𝕟':return 30047;break;case '𝕠':return 30048;break;case '𝕡':return 30049;break;case '𝕢':return 30050;break;case '𝕣':return 30051;break;case '𝕤':return 30052;break;case '𝕥':return 30053;break;case '𝕦':return 30054;break;case '𝕧':return 30055;break;case '𝕨':return 30056;break;case '𝕩':return 30057;break;case '𝕪':return 30058;break;case '𝕫':return 30059;break;case '𝕬':return 30060;break;case '𝕭':return 30061;break;case '𝕮':return 30062;break;case '𝕯':return 30063;break;case '𝕰':return 30064;break;case '𝕱':return 30065;break;case '𝕲':return 30066;break;case '𝕳':return 30067;break;case '𝕴':return 30068;break;case '𝕵':return 30069;break;case '𝕶':return 30070;break;case '𝕷':return 30071;break;case '𝕸':return 30072;break;case '𝕹':return 30073;break;case '𝕺':return 30074;break;case '𝕻':return 30075;break;case '𝕼':return 30076;break;case '𝕽':return 30077;break;case '𝕾':return 30078;break;case '𝕿':return 30079;break;case '𝖀':return 30080;break;case '𝖁':return 30081;break;case '𝖂':return 30082;break;case '𝖃':return 30083;break;case '𝖄':return 30084;break;case '𝖅':return 30085;break;case '𝖆':return 30086;break;case '𝖇':return 30087;break;case '𝖈':return 30088;break;case '𝖉':return 30089;break;case '𝖊':return 30090;break;case '𝖋':return 30091;break;case '𝖌':return 30092;break;case '𝖍':return 30093;break;case '𝖎':return 30094;break;case '𝖏':return 30095;break;case '𝖐':return 30096;break;case '𝖑':return 30097;break;case '𝖒':return 30098;break;case '𝖓':return 30099;break;case '𝖔':return 30100;break;case '𝖕':return 30101;break;case '𝖖':return 30102;break;case '𝖗':return 30103;break;case '𝖘':return 30104;break;case '𝖙':return 30105;break;case '𝖚':return 30106;break;case '𝖛':return 30107;break;case '𝖜':return 30108;break;case '𝖝':return 30109;break;case '𝖞':return 30110;break;case '𝖟':return 30111;break;case '𝖠':return 30112;break;case '𝖡':return 30113;break;case '𝖢':return 30114;break;case '𝖣':return 30115;break;case '𝖤':return 30116;break;case '𝖥':return 30117;break;case '𝖦':return 30118;break;case '𝖧':return 30119;break;case '𝖨':return 30120;break;case '𝖩':return 30121;break;case '𝖪':return 30122;break;case '𝖫':return 30123;break;case '𝖬':return 30124;break;case '𝖭':return 30125;break;case '𝖮':return 30126;break;case '𝖯':return 30127;break;case '𝖰':return 30128;break;case '𝖱':return 30129;break;case '𝖲':return 30130;break;case '𝖳':return 30131;break;case '𝖴':return 30132;break;case '𝖵':return 30133;break;case '𝖶':return 30134;break;case '𝖷':return 30135;break;case '𝖸':return 30136;break;case '𝖹':return 30137;break;case '𝖺':return 30138;break;case '𝖻':return 30139;break;case '𝖼':return 30140;break;case '𝖽':return 30141;break;case '𝖾':return 30142;break;case '𝖿':return 30143;break;case '𝗀':return 30144;break;case '𝗁':return 30145;break;case '𝗂':return 30146;break;case '𝗃':return 30147;break;case '𝗄':return 30148;break;case '𝗅':return 30149;break;case '𝗆':return 30150;break;case '𝗇':return 30151;break;case '𝗈':return 30152;break;case '𝗉':return 30153;break;case '𝗊':return 30154;break;case '𝗋':return 30155;break;case '𝗌':return 30156;break;case '𝗍':return 30157;break;case '𝗎':return 30158;break;case '𝗏':return 30159;break;case '𝗐':return 30160;break;case '𝗑':return 30161;break;case '𝗒':return 30162;break;case '𝗓':return 30163;break;case '𝗔':return 30164;break;case '𝗕':return 30165;break;case '𝗖':return 30166;break;case '𝗗':return 30167;break;case '𝗘':return 30168;break;case '𝗙':return 30169;break;case '𝗚':return 30170;break;case '𝗛':return 30171;break;case '𝗜':return 30172;break;case '𝗝':return 30173;break;case '𝗞':return 30174;break;case '𝗟':return 30175;break;case '𝗠':return 30176;break;case '𝗡':return 30177;break;case '𝗢':return 30178;break;case '𝗣':return 30179;break;case '𝗤':return 30180;break;case '𝗥':return 30181;break;case '𝗦':return 30182;break;case '𝗧':return 30183;break;case '𝗨':return 30184;break;case '𝗩':return 30185;break;case '𝗪':return 30186;break;case '𝗫':return 30187;break;case '𝗬':return 30188;break;case '𝗭':return 30189;break;case '𝗮':return 30190;break;case '𝗯':return 30191;break;case '𝗰':return 30192;break;case '𝗱':return 30193;break;case '𝗲':return 30194;break;case '𝗳':return 30195;break;case '𝗴':return 30196;break;case '𝗵':return 30197;break;case '𝗶':return 30198;break;case '𝗷':return 30199;break;case '𝗸':return 30200;break;case '𝗹':return 30201;break;case '𝗺':return 30202;break;case '𝗻':return 30203;break;case '𝗼':return 30204;break;case '𝗽':return 30205;break;case '𝗾':return 30206;break;case '𝗿':return 30207;break;case '𝘀':return 30208;break;case '𝘁':return 30209;break;case '𝘂':return 30210;break;case '𝘃':return 30211;break;case '𝘄':return 30212;break;case '𝘅':return 30213;break;case '𝘆':return 30214;break;case '𝘇':return 30215;break;case '𝘈':return 30216;break;case '𝘉':return 30217;break;case '𝘊':return 30218;break;case '𝘋':return 30219;break;case '𝘌':return 30220;break;case '𝘍':return 30221;break;case '𝘎':return 30222;break;case '𝘏':return 30223;break;case '𝘐':return 30224;break;case '𝘑':return 30225;break;case '𝘒':return 30226;break;case '𝘓':return 30227;break;case '𝘔':return 30228;break;case '𝘕':return 30229;break;case '𝘖':return 30230;break;case '𝘗':return 30231;break;case '𝘘':return 30232;break;case '𝘙':return 30233;break;case '𝘚':return 30234;break;case '𝘛':return 30235;break;case '𝘜':return 30236;break;case '𝘝':return 30237;break;case '𝘞':return 30238;break;case '𝘟':return 30239;break;case '𝘠':return 30240;break;case '𝘡':return 30241;break;case '𝘢':return 30242;break;case '𝘣':return 30243;break;case '𝘤':return 30244;break;case '𝘥':return 30245;break;case '𝘦':return 30246;break;case '𝘧':return 30247;break;case '𝘨':return 30248;break;case '𝘩':return 30249;break;case '𝘪':return 30250;break;case '𝘫':return 30251;break;case '𝘬':return 30252;break;case '𝘭':return 30253;break;case '𝘮':return 30254;break;case '𝘯':return 30255;break;case '𝘰':return 30256;break;case '𝘱':return 30257;break;case '𝘲':return 30258;break;case '𝘳':return 30259;break;case '𝘴':return 30260;break;case '𝘵':return 30261;break;case '𝘶':return 30262;break;case '𝘷':return 30263;break;case '𝘸':return 30264;break;case '𝘹':return 30265;break;case '𝘺':return 30266;break;case '𝘻':return 30267;break;case '𝘼':return 30268;break;case '𝘽':return 30269;break;case '𝘾':return 30270;break;case '𝘿':return 30271;break;case '𝙀':return 30272;break;case '𝙁':return 30273;break;case '𝙂':return 30274;break;case '𝙃':return 30275;break;case '𝙄':return 30276;break;case '𝙅':return 30277;break;case '𝙆':return 30278;break;case '𝙇':return 30279;break;case '𝙈':return 30280;break;case '𝙉':return 30281;break;case '𝙊':return 30282;break;case '𝙋':return 30283;break;case '𝙌':return 30284;break;case '𝙍':return 30285;break;case '𝙎':return 30286;break;case '𝙏':return 30287;break;case '𝙐':return 30288;break;case '𝙑':return 30289;break;case '𝙒':return 30290;break;case '𝙓':return 30291;break;case '𝙔':return 30292;break;case '𝙕':return 30293;break;case '𝙖':return 30294;break;case '𝙗':return 30295;break;case '𝙘':return 30296;break;case '𝙙':return 30297;break;case '𝙚':return 30298;break;case '𝙛':return 30299;break;case '𝙜':return 30300;break;case '𝙝':return 30301;break;case '𝙞':return 30302;break;case '𝙟':return 30303;break;case '𝙠':return 30304;break;case '𝙡':return 30305;break;case '𝙢':return 30306;break;case '𝙣':return 30307;break;case '𝙤':return 30308;break;case '𝙥':return 30309;break;case '𝙦':return 30310;break;case '𝙧':return 30311;break;case '𝙨':return 30312;break;case '𝙩':return 30313;break;case '𝙪':return 30314;break;case '𝙫':return 30315;break;case '𝙬':return 30316;break;case '𝙭':return 30317;break;case '𝙮':return 30318;break;case '𝙯':return 30319;break;case '𝙰':return 30320;break;case '𝙱':return 30321;break;case '𝙲':return 30322;break;case '𝙳':return 30323;break;case '𝙴':return 30324;break;case '𝙵':return 30325;break;case '𝙶':return 30326;break;case '𝙷':return 30327;break;case '𝙸':return 30328;break;case '𝙹':return 30329;break;case '𝙺':return 30330;break;case '𝙻':return 30331;break;case '𝙼':return 30332;break;case '𝙽':return 30333;break;case '𝙾':return 30334;break;case '𝙿':return 30335;break;case '𝚀':return 30336;break;case '𝚁':return 30337;break;case '𝚂':return 30338;break;case '𝚃':return 30339;break;case '𝚄':return 30340;break;case '𝚅':return 30341;break;case '𝚆':return 30342;break;case '𝚇':return 30343;break;case '𝚈':return 30344;break;case '𝚉':return 30345;break;case '𝚊':return 30346;break;case '𝚋':return 30347;break;case '𝚌':return 30348;break;case '𝚍':return 30349;break;case '𝚎':return 30350;break;case '𝚏':return 30351;break;case '𝚐':return 30352;break;case '𝚑':return 30353;break;case '𝚒':return 30354;break;case '𝚓':return 30355;break;case '𝚔':return 30356;break;case '𝚕':return 30357;break;case '𝚖':return 30358;break;case '𝚗':return 30359;break;case '𝚘':return 30360;break;case '𝚙':return 30361;break;case '𝚚':return 30362;break;case '𝚛':return 30363;break;case '𝚜':return 30364;break;case '𝚝':return 30365;break;case '𝚞':return 30366;break;case '𝚟':return 30367;break;case '𝚠':return 30368;break;case '𝚡':return 30369;break;case '𝚢':return 30370;break;case '𝚣':return 30371;break;case '𝚤':return 30372;break;case '𝚥':return 30373;break;case '𝚦':return 30374;break;case '𝚧':return 30375;break;case '𝚨':return 30376;break;case '𝚩':return 30377;break;case '𝚪':return 30378;break;case '𝚫':return 30379;break;case '𝚬':return 30380;break;case '𝚭':return 30381;break;case '𝚮':return 30382;break;case '𝚯':return 30383;break;case '𝚰':return 30384;break;case '𝚱':return 30385;break;case '𝚲':return 30386;break;case '𝚳':return 30387;break;case '𝚴':return 30388;break;case '𝚵':return 30389;break;case '𝚶':return 30390;break;case '𝚷':return 30391;break;case '𝚸':return 30392;break;case '𝚹':return 30393;break;case '𝚺':return 30394;break;case '𝚻':return 30395;break;case '𝚼':return 30396;break;case '𝚽':return 30397;break;case '𝚾':return 30398;break;case '𝚿':return 30399;break;case '𝛀':return 30400;break;case '𝛁':return 30401;break;case '𝛂':return 30402;break;case '𝛃':return 30403;break;case '𝛄':return 30404;break;case '𝛅':return 30405;break;case '𝛆':return 30406;break;case '𝛇':return 30407;break;case '𝛈':return 30408;break;case '𝛉':return 30409;break;case '𝛊':return 30410;break;case '𝛋':return 30411;break;case '𝛌':return 30412;break;case '𝛍':return 30413;break;case '𝛎':return 30414;break;case '𝛏':return 30415;break;case '𝛐':return 30416;break;case '𝛑':return 30417;break;case '𝛒':return 30418;break;case '𝛓':return 30419;break;case '𝛔':return 30420;break;case '𝛕':return 30421;break;case '𝛖':return 30422;break;case '𝛗':return 30423;break;case '𝛘':return 30424;break;case '𝛙':return 30425;break;case '𝛚':return 30426;break;case '𝛛':return 30427;break;case '𝛜':return 30428;break;case '𝛝':return 30429;break;case '𝛞':return 30430;break;case '𝛟':return 30431;break;case '𝛠':return 30432;break;case '𝛡':return 30433;break;case '𝛢':return 30434;break;case '𝛣':return 30435;break;case '𝛤':return 30436;break;case '𝛥':return 30437;break;case '𝛦':return 30438;break;case '𝛧':return 30439;break;case '𝛨':return 30440;break;case '𝛩':return 30441;break;case '𝛪':return 30442;break;case '𝛫':return 30443;break;case '𝛬':return 30444;break;case '𝛭':return 30445;break;case '𝛮':return 30446;break;case '𝛯':return 30447;break;case '𝛰':return 30448;break;case '𝛱':return 30449;break;case '𝛲':return 30450;break;case '𝛳':return 30451;break;case '𝛴':return 30452;break;case '𝛵':return 30453;break;case '𝛶':return 30454;break;case '𝛷':return 30455;break;case '𝛸':return 30456;break;case '𝛹':return 30457;break;case '𝛺':return 30458;break;case '𝛻':return 30459;break;case '𝛼':return 30460;break;case '𝛽':return 30461;break;case '𝛾':return 30462;break;case '𝛿':return 30463;break;case '𝜀':return 30464;break;case '𝜁':return 30465;break;case '𝜂':return 30466;break;case '𝜃':return 30467;break;case '𝜄':return 30468;break;case '𝜅':return 30469;break;case '𝜆':return 30470;break;case '𝜇':return 30471;break;case '𝜈':return 30472;break;case '𝜉':return 30473;break;case '𝜊':return 30474;break;case '𝜋':return 30475;break;case '𝜌':return 30476;break;case '𝜍':return 30477;break;case '𝜎':return 30478;break;case '𝜏':return 30479;break;case '𝜐':return 30480;break;case '𝜑':return 30481;break;case '𝜒':return 30482;break;case '𝜓':return 30483;break;case '𝜔':return 30484;break;case '𝜕':return 30485;break;case '𝜖':return 30486;break;case '𝜗':return 30487;break;case '𝜘':return 30488;break;case '𝜙':return 30489;break;case '𝜚':return 30490;break;case '𝜛':return 30491;break;case '𝜜':return 30492;break;case '𝜝':return 30493;break;case '𝜞':return 30494;break;case '𝜟':return 30495;break;case '𝜠':return 30496;break;case '𝜡':return 30497;break;case '𝜢':return 30498;break;case '𝜣':return 30499;break;case '𝜤':return 30500;break;case '𝜥':return 30501;break;case '𝜦':return 30502;break;case '𝜧':return 30503;break;case '𝜨':return 30504;break;case '𝜩':return 30505;break;case '𝜪':return 30506;break;case '𝜫':return 30507;break;case '𝜬':return 30508;break;case '𝜭':return 30509;break;case '𝜮':return 30510;break;case '𝜯':return 30511;break;case '𝜰':return 30512;break;case '𝜱':return 30513;break;case '𝜲':return 30514;break;case '𝜳':return 30515;break;case '𝜴':return 30516;break;case '𝜵':return 30517;break;case '𝜶':return 30518;break;case '𝜷':return 30519;break;case '𝜸':return 30520;break;case '𝜹':return 30521;break;case '𝜺':return 30522;break;case '𝜻':return 30523;break;case '𝜼':return 30524;break;case '𝜽':return 30525;break;case '𝜾':return 30526;break;case '𝜿':return 30527;break;case '𝝀':return 30528;break;case '𝝁':return 30529;break;case '𝝂':return 30530;break;case '𝝃':return 30531;break;case '𝝄':return 30532;break;case '𝝅':return 30533;break;case '𝝆':return 30534;break;case '𝝇':return 30535;break;case '𝝈':return 30536;break;case '𝝉':return 30537;break;case '𝝊':return 30538;break;case '𝝋':return 30539;break;case '𝝌':return 30540;break;case '𝝍':return 30541;break;case '𝝎':return 30542;break;case '𝝏':return 30543;break;case '𝝐':return 30544;break;case '𝝑':return 30545;break;case '𝝒':return 30546;break;case '𝝓':return 30547;break;case '𝝔':return 30548;break;case '𝝕':return 30549;break;case '𝝖':return 30550;break;case '𝝗':return 30551;break;case '𝝘':return 30552;break;case '𝝙':return 30553;break;case '𝝚':return 30554;break;case '𝝛':return 30555;break;case '𝝜':return 30556;break;case '𝝝':return 30557;break;case '𝝞':return 30558;break;case '𝝟':return 30559;break;case '𝝠':return 30560;break;case '𝝡':return 30561;break;case '𝝢':return 30562;break;case '𝝣':return 30563;break;case '𝝤':return 30564;break;case '𝝥':return 30565;break;case '𝝦':return 30566;break;case '𝝧':return 30567;break;case '𝝨':return 30568;break;case '𝝩':return 30569;break;case '𝝪':return 30570;break;case '𝝫':return 30571;break;case '𝝬':return 30572;break;case '𝝭':return 30573;break;case '𝝮':return 30574;break;case '𝝯':return 30575;break;case '𝝰':return 30576;break;case '𝝱':return 30577;break;case '𝝲':return 30578;break;case '𝝳':return 30579;break;case '𝝴':return 30580;break;case '𝝵':return 30581;break;case '𝝶':return 30582;break;case '𝝷':return 30583;break;case '𝝸':return 30584;break;case '𝝹':return 30585;break;case '𝝺':return 30586;break;case '𝝻':return 30587;break;case '𝝼':return 30588;break;case '𝝽':return 30589;break;case '𝝾':return 30590;break;case '𝝿':return 30591;break;case '𝞀':return 30592;break;case '𝞁':return 30593;break;case '𝞂':return 30594;break;case '𝞃':return 30595;break;case '𝞄':return 30596;break;case '𝞅':return 30597;break;case '𝞆':return 30598;break;case '𝞇':return 30599;break;case '𝞈':return 30600;break;case '𝞉':return 30601;break;case '𝞊':return 30602;break;case '𝞋':return 30603;break;case '𝞌':return 30604;break;case '𝞍':return 30605;break;case '𝞎':return 30606;break;case '𝞏':return 30607;break;case '𝞐':return 30608;break;case '𝞑':return 30609;break;case '𝞒':return 30610;break;case '𝞓':return 30611;break;case '𝞔':return 30612;break;case '𝞕':return 30613;break;case '𝞖':return 30614;break;case '𝞗':return 30615;break;case '𝞘':return 30616;break;case '𝞙':return 30617;break;case '𝞚':return 30618;break;case '𝞛':return 30619;break;case '𝞜':return 30620;break;case '𝞝':return 30621;break;case '𝞞':return 30622;break;case '𝞟':return 30623;break;case '𝞠':return 30624;break;case '𝞡':return 30625;break;case '𝞢':return 30626;break;case '𝞣':return 30627;break;case '𝞤':return 30628;break;case '𝞥':return 30629;break;case '𝞦':return 30630;break;case '𝞧':return 30631;break;case '𝞨':return 30632;break;case '𝞩':return 30633;break;case '𝞪':return 30634;break;case '𝞫':return 30635;break;case '𝞬':return 30636;break;case '𝞭':return 30637;break;case '𝞮':return 30638;break;case '𝞯':return 30639;break;case '𝞰':return 30640;break;case '𝞱':return 30641;break;case '𝞲':return 30642;break;case '𝞳':return 30643;break;case '𝞴':return 30644;break;case '𝞵':return 30645;break;case '𝞶':return 30646;break;case '𝞷':return 30647;break;case '𝞸':return 30648;break;case '𝞹':return 30649;break;case '𝞺':return 30650;break;case '𝞻':return 30651;break;case '𝞼':return 30652;break;case '𝞽':return 30653;break;case '𝞾':return 30654;break;case '𝞿':return 30655;break;case '𝟀':return 30656;break;case '𝟁':return 30657;break;case '𝟂':return 30658;break;case '𝟃':return 30659;break;case '𝟄':return 30660;break;case '𝟅':return 30661;break;case '𝟆':return 30662;break;case '𝟇':return 30663;break;case '𝟈':return 30664;break;case '𝟉':return 30665;break;case '𝟊':return 30666;break;case '𝟋':return 30667;break;case '𝟌':return 30668;break;case '𝟍':return 30669;break;case '𝟎':return 30670;break;case '𝟏':return 30671;break;case '𝟐':return 30672;break;case '𝟑':return 30673;break;case '𝟒':return 30674;break;case '𝟓':return 30675;break;case '𝟔':return 30676;break;case '𝟕':return 30677;break;case '𝟖':return 30678;break;case '𝟗':return 30679;break;case '𝟘':return 30680;break;case '𝟙':return 30681;break;case '𝟚':return 30682;break;case '𝟛':return 30683;break;case '𝟜':return 30684;break;case '𝟝':return 30685;break;case '𝟞':return 30686;break;case '𝟟':return 30687;break;case '𝟠':return 30688;break;case '𝟡':return 30689;break;case '𝟢':return 30690;break;case '𝟣':return 30691;break;case '𝟤':return 30692;break;case '𝟥':return 30693;break;case '𝟦':return 30694;break;case '𝟧':return 30695;break;case '𝟨':return 30696;break;case '𝟩':return 30697;break;case '𝟪':return 30698;break;case '𝟫':return 30699;break;case '𝟬':return 30700;break;case '𝟭':return 30701;break;case '𝟮':return 30702;break;case '𝟯':return 30703;break;case '𝟰':return 30704;break;case '𝟱':return 30705;break;case '𝟲':return 30706;break;case '𝟳':return 30707;break;case '𝟴':return 30708;break;case '𝟵':return 30709;break;case '𝟶':return 30710;break;case '𝟷':return 30711;break;case '𝟸':return 30712;break;case '𝟹':return 30713;break;case '𝟺':return 30714;break;case '𝟻':return 30715;break;case '𝟼':return 30716;break;case '𝟽':return 30717;break;case '𝟾':return 30718;break;case '𝟿':return 30719;break;case '🀀':return 36864;break;case '🀁':return 36865;break;case '🀂':return 36866;break;case '🀃':return 36867;break;case '🀄':return 36868;break;case '🀅':return 36869;break;case '🀆':return 36870;break;case '🀇':return 36871;break;case '🀈':return 36872;break;case '🀉':return 36873;break;case '🀊':return 36874;break;case '🀋':return 36875;break;case '🀌':return 36876;break;case '🀍':return 36877;break;case '🀎':return 36878;break;case '🀏':return 36879;break;case '🀐':return 36880;break;case '🀑':return 36881;break;case '🀒':return 36882;break;case '🀓':return 36883;break;case '🀔':return 36884;break;case '🀕':return 36885;break;case '🀖':return 36886;break;case '🀗':return 36887;break;case '🀘':return 36888;break;case '🀙':return 36889;break;case '🀚':return 36890;break;case '🀛':return 36891;break;case '🀜':return 36892;break;case '🀝':return 36893;break;case '🀞':return 36894;break;case '🀟':return 36895;break;case '🀠':return 36896;break;case '🀡':return 36897;break;case '🀢':return 36898;break;case '🀣':return 36899;break;case '🀤':return 36900;break;case '🀥':return 36901;break;case '🀦':return 36902;break;case '🀧':return 36903;break;case '🀨':return 36904;break;case '🀩':return 36905;break;case '🀪':return 36906;break;case '🀫':return 36907;break;case '🀬':return 36908;break;case '🀭':return 36909;break;case '🀮':return 36910;break;case '🀯':return 36911;break;case '🀰':return 36912;break;case '🀱':return 36913;break;case '🀲':return 36914;break;case '🀳':return 36915;break;case '🀴':return 36916;break;case '🀵':return 36917;break;case '🀶':return 36918;break;case '🀷':return 36919;break;case '🀸':return 36920;break;case '🀹':return 36921;break;case '🀺':return 36922;break;case '🀻':return 36923;break;case '🀼':return 36924;break;case '🀽':return 36925;break;case '🀾':return 36926;break;case '🀿':return 36927;break;case '🁀':return 36928;break;case '🁁':return 36929;break;case '🁂':return 36930;break;case '🁃':return 36931;break;case '🁄':return 36932;break;case '🁅':return 36933;break;case '🁆':return 36934;break;case '🁇':return 36935;break;case '🁈':return 36936;break;case '🁉':return 36937;break;case '🁊':return 36938;break;case '🁋':return 36939;break;case '🁌':return 36940;break;case '🁍':return 36941;break;case '🁎':return 36942;break;case '🁏':return 36943;break;case '🁐':return 36944;break;case '🁑':return 36945;break;case '🁒':return 36946;break;case '🁓':return 36947;break;case '🁔':return 36948;break;case '🁕':return 36949;break;case '🁖':return 36950;break;case '🁗':return 36951;break;case '🁘':return 36952;break;case '🁙':return 36953;break;case '🁚':return 36954;break;case '🁛':return 36955;break;case '🁜':return 36956;break;case '🁝':return 36957;break;case '🁞':return 36958;break;case '🁟':return 36959;break;case '🁠':return 36960;break;case '🁡':return 36961;break;case '🁢':return 36962;break;case '🁣':return 36963;break;case '🁤':return 36964;break;case '🁥':return 36965;break;case '🁦':return 36966;break;case '🁧':return 36967;break;case '🁨':return 36968;break;case '🁩':return 36969;break;case '🁪':return 36970;break;case '🁫':return 36971;break;case '🁬':return 36972;break;case '🁭':return 36973;break;case '🁮':return 36974;break;case '🁯':return 36975;break;case '🁰':return 36976;break;case '🁱':return 36977;break;case '🁲':return 36978;break;case '🁳':return 36979;break;case '🁴':return 36980;break;case '🁵':return 36981;break;case '🁶':return 36982;break;case '🁷':return 36983;break;case '🁸':return 36984;break;case '🁹':return 36985;break;case '🁺':return 36986;break;case '🁻':return 36987;break;case '🁼':return 36988;break;case '🁽':return 36989;break;case '🁾':return 36990;break;case '🁿':return 36991;break;case '🂀':return 36992;break;case '🂁':return 36993;break;case '🂂':return 36994;break;case '🂃':return 36995;break;case '🂄':return 36996;break;case '🂅':return 36997;break;case '🂆':return 36998;break;case '🂇':return 36999;break;case '🂈':return 37000;break;case '🂉':return 37001;break;case '🂊':return 37002;break;case '🂋':return 37003;break;case '🂌':return 37004;break;case '🂍':return 37005;break;case '🂎':return 37006;break;case '🂏':return 37007;break;case '🂐':return 37008;break;case '🂑':return 37009;break;case '🂒':return 37010;break;case '🂓':return 37011;break;case '🂔':return 37012;break;case '🂕':return 37013;break;case '🂖':return 37014;break;case '🂗':return 37015;break;case '🂘':return 37016;break;case '🂙':return 37017;break;case '🂚':return 37018;break;case '🂛':return 37019;break;case '🂜':return 37020;break;case '🂝':return 37021;break;case '🂞':return 37022;break;case '🂟':return 37023;break;case '🂠':return 37024;break;case '🂡':return 37025;break;case '🂢':return 37026;break;case '🂣':return 37027;break;case '🂤':return 37028;break;case '🂥':return 37029;break;case '🂦':return 37030;break;case '🂧':return 37031;break;case '🂨':return 37032;break;case '🂩':return 37033;break;case '🂪':return 37034;break;case '🂫':return 37035;break;case '🂬':return 37036;break;case '🂭':return 37037;break;case '🂮':return 37038;break;case '🂯':return 37039;break;case '🂰':return 37040;break;case '🂱':return 37041;break;case '🂲':return 37042;break;case '🂳':return 37043;break;case '🂴':return 37044;break;case '🂵':return 37045;break;case '🂶':return 37046;break;case '🂷':return 37047;break;case '🂸':return 37048;break;case '🂹':return 37049;break;case '🂺':return 37050;break;case '🂻':return 37051;break;case '🂼':return 37052;break;case '🂽':return 37053;break;case '🂾':return 37054;break;case '🂿':return 37055;break;case '🃀':return 37056;break;case '🃁':return 37057;break;case '🃂':return 37058;break;case '🃃':return 37059;break;case '🃄':return 37060;break;case '🃅':return 37061;break;case '🃆':return 37062;break;case '🃇':return 37063;break;case '🃈':return 37064;break;case '🃉':return 37065;break;case '🃊':return 37066;break;case '🃋':return 37067;break;case '🃌':return 37068;break;case '🃍':return 37069;break;case '🃎':return 37070;break;case '🃏':return 37071;break;case '🃐':return 37072;break;case '🃑':return 37073;break;case '🃒':return 37074;break;case '🃓':return 37075;break;case '🃔':return 37076;break;case '🃕':return 37077;break;case '🃖':return 37078;break;case '🃗':return 37079;break;case '🃘':return 37080;break;case '🃙':return 37081;break;case '🃚':return 37082;break;case '🃛':return 37083;break;case '🃜':return 37084;break;case '🃝':return 37085;break;case '🃞':return 37086;break;case '🃟':return 37087;break;case '🃠':return 37088;break;case '🃡':return 37089;break;case '🃢':return 37090;break;case '🃣':return 37091;break;case '🃤':return 37092;break;case '🃥':return 37093;break;case '🃦':return 37094;break;case '🃧':return 37095;break;case '🃨':return 37096;break;case '🃩':return 37097;break;case '🃪':return 37098;break;case '🃫':return 37099;break;case '🃬':return 37100;break;case '🃭':return 37101;break;case '🃮':return 37102;break;case '🃯':return 37103;break;case '🃰':return 37104;break;case '🃱':return 37105;break;case '🃲':return 37106;break;case '🃳':return 37107;break;case '🃴':return 37108;break;case '🃵':return 37109;break;case '🄀':return 37120;break;case '🄁':return 37121;break;case '🄂':return 37122;break;case '🄃':return 37123;break;case '🄄':return 37124;break;case '🄅':return 37125;break;case '🄆':return 37126;break;case '🄇':return 37127;break;case '🄈':return 37128;break;case '🄉':return 37129;break;case '🄊':return 37130;break;case '🄋':return 37131;break;case '🄌':return 37132;break;case '🄍':return 37133;break;case '🄎':return 37134;break;case '🄏':return 37135;break;case '🄐':return 37136;break;case '🄑':return 37137;break;case '🄒':return 37138;break;case '🄓':return 37139;break;case '🄔':return 37140;break;case '🄕':return 37141;break;case '🄖':return 37142;break;case '🄗':return 37143;break;case '🄘':return 37144;break;case '🄙':return 37145;break;case '🄚':return 37146;break;case '🄛':return 37147;break;case '🄜':return 37148;break;case '🄝':return 37149;break;case '🄞':return 37150;break;case '🄟':return 37151;break;case '🄠':return 37152;break;case '🄡':return 37153;break;case '🄢':return 37154;break;case '🄣':return 37155;break;case '🄤':return 37156;break;case '🄥':return 37157;break;case '🄦':return 37158;break;case '🄧':return 37159;break;case '🄨':return 37160;break;case '🄩':return 37161;break;case '🄪':return 37162;break;case '🄫':return 37163;break;case '🄬':return 37164;break;case '🄭':return 37165;break;case '🄮':return 37166;break;case '🄯':return 37167;break;case '🄰':return 37168;break;case '🄱':return 37169;break;case '🄲':return 37170;break;case '🄳':return 37171;break;case '🄴':return 37172;break;case '🄵':return 37173;break;case '🄶':return 37174;break;case '🄷':return 37175;break;case '🄸':return 37176;break;case '🄹':return 37177;break;case '🄺':return 37178;break;case '🄻':return 37179;break;case '🄼':return 37180;break;case '🄽':return 37181;break;case '🄾':return 37182;break;case '🄿':return 37183;break;case '🅀':return 37184;break;case '🅁':return 37185;break;case '🅂':return 37186;break;case '🅃':return 37187;break;case '🅄':return 37188;break;case '🅅':return 37189;break;case '🅆':return 37190;break;case '🅇':return 37191;break;case '🅈':return 37192;break;case '🅉':return 37193;break;case '🅊':return 37194;break;case '🅋':return 37195;break;case '🅌':return 37196;break;case '🅍':return 37197;break;case '🅎':return 37198;break;case '🅏':return 37199;break;case '🅐':return 37200;break;case '🅑':return 37201;break;case '🅒':return 37202;break;case '🅓':return 37203;break;case '🅔':return 37204;break;case '🅕':return 37205;break;case '🅖':return 37206;break;case '🅗':return 37207;break;case '🅘':return 37208;break;case '🅙':return 37209;break;case '🅚':return 37210;break;case '🅛':return 37211;break;case '🅜':return 37212;break;case '🅝':return 37213;break;case '🅞':return 37214;break;case '🅟':return 37215;break;case '🅠':return 37216;break;case '🅡':return 37217;break;case '🅢':return 37218;break;case '🅣':return 37219;break;case '🅤':return 37220;break;case '🅥':return 37221;break;case '🅦':return 37222;break;case '🅧':return 37223;break;case '🅨':return 37224;break;case '🅩':return 37225;break;case '🅪':return 37226;break;case '🅫':return 37227;break;case '🅬':return 37228;break;case '🅭':return 37229;break;case '🅮':return 37230;break;case '🅯':return 37231;break;case '🅰':return 37232;break;case '🅱':return 37233;break;case '🅲':return 37234;break;case '🅳':return 37235;break;case '🅴':return 37236;break;case '🅵':return 37237;break;case '🅶':return 37238;break;case '🅷':return 37239;break;case '🅸':return 37240;break;case '🅹':return 37241;break;case '🅺':return 37242;break;case '🅻':return 37243;break;case '🅼':return 37244;break;case '🅽':return 37245;break;case '🅾':return 37246;break;case '🅿':return 37247;break;case '🆀':return 37248;break;case '🆁':return 37249;break;case '🆂':return 37250;break;case '🆃':return 37251;break;case '🆄':return 37252;break;case '🆅':return 37253;break;case '🆆':return 37254;break;case '🆇':return 37255;break;case '🆈':return 37256;break;case '🆉':return 37257;break;case '🆊':return 37258;break;case '🆋':return 37259;break;case '🆌':return 37260;break;case '🆍':return 37261;break;case '🆎':return 37262;break;case '🆏':return 37263;break;case '🆐':return 37264;break;case '🆑':return 37265;break;case '🆒':return 37266;break;case '🆓':return 37267;break;case '🆔':return 37268;break;case '🆕':return 37269;break;case '🆖':return 37270;break;case '🆗':return 37271;break;case '🆘':return 37272;break;case '🆙':return 37273;break;case '🆚':return 37274;break;case '🇦':return 37350;break;case '🇧':return 37351;break;case '🇨':return 37352;break;case '🇩':return 37353;break;case '🇪':return 37354;break;case '🇫':return 37355;break;case '🇬':return 37356;break;case '🇭':return 37357;break;case '🇮':return 37358;break;case '🇯':return 37359;break;case '🇰':return 37360;break;case '🇱':return 37361;break;case '🇲':return 37362;break;case '🇳':return 37363;break;case '🇴':return 37364;break;case '🇵':return 37365;break;case '🇶':return 37366;break;case '🇷':return 37367;break;case '🇸':return 37368;break;case '🇹':return 37369;break;case '🇺':return 37370;break;case '🇻':return 37371;break;case '🇼':return 37372;break;case '🇽':return 37373;break;case '🇾':return 37374;break;case '🇿':return 37375;break;case '🈀':return 37376;break;case '🈁':return 37377;break;case '🈂':return 37378;break;case '🈐':return 37392;break;case '🈑':return 37393;break;case '🈒':return 37394;break;case '🈓':return 37395;break;case '🈔':return 37396;break;case '🈕':return 37397;break;case '🈖':return 37398;break;case '🈗':return 37399;break;case '🈘':return 37400;break;case '🈙':return 37401;break;case '🈚':return 37402;break;case '🈛':return 37403;break;case '🈜':return 37404;break;case '🈝':return 37405;break;case '🈞':return 37406;break;case '🈟':return 37407;break;case '🈠':return 37408;break;case '🈡':return 37409;break;case '🈢':return 37410;break;case '🈣':return 37411;break;case '🈤':return 37412;break;case '🈥':return 37413;break;case '🈦':return 37414;break;case '🈧':return 37415;break;case '🈨':return 37416;break;case '🈩':return 37417;break;case '🈪':return 37418;break;case '🈫':return 37419;break;case '🈬':return 37420;break;case '🈭':return 37421;break;case '🈮':return 37422;break;case '🈯':return 37423;break;case '🈰':return 37424;break;case '🈱':return 37425;break;case '🈲':return 37426;break;case '🈳':return 37427;break;case '🈴':return 37428;break;case '🈵':return 37429;break;case '🈶':return 37430;break;case '🈷':return 37431;break;case '🈸':return 37432;break;case '🈹':return 37433;break;case '🈺':return 37434;break;case '🉀':return 37440;break;case '🉁':return 37441;break;case '🉂':return 37442;break;case '🉃':return 37443;break;case '🉄':return 37444;break;case '🉅':return 37445;break;case '🉆':return 37446;break;case '🉇':return 37447;break;case '🉈':return 37448;break;case '🉐':return 37456;break;case '🉑':return 37457;break;case '🌀':return 37632;break;case '🌁':return 37633;break;case '🌂':return 37634;break;case '🌃':return 37635;break;case '🌄':return 37636;break;case '🌅':return 37637;break;case '🌆':return 37638;break;case '🌇':return 37639;break;case '🌈':return 37640;break;case '🌉':return 37641;break;case '🌊':return 37642;break;case '🌋':return 37643;break;case '🌌':return 37644;break;case '🌍':return 37645;break;case '🌎':return 37646;break;case '🌏':return 37647;break;case '🌐':return 37648;break;case '🌑':return 37649;break;case '🌒':return 37650;break;case '🌓':return 37651;break;case '🌔':return 37652;break;case '🌕':return 37653;break;case '🌖':return 37654;break;case '🌗':return 37655;break;case '🌘':return 37656;break;case '🌙':return 37657;break;case '🌚':return 37658;break;case '🌛':return 37659;break;case '🌜':return 37660;break;case '🌝':return 37661;break;case '🌞':return 37662;break;case '🌟':return 37663;break;case '🌠':return 37664;break;case '🌡':return 37665;break;case '🌢':return 37666;break;case '🌣':return 37667;break;case '🌤':return 37668;break;case '🌥':return 37669;break;case '🌦':return 37670;break;case '🌧':return 37671;break;case '🌨':return 37672;break;case '🌩':return 37673;break;case '🌪':return 37674;break;case '🌫':return 37675;break;case '🌬':return 37676;break;case '🌭':return 37677;break;case '🌮':return 37678;break;case '🌯':return 37679;break;case '🌰':return 37680;break;case '🌱':return 37681;break;case '🌲':return 37682;break;case '🌳':return 37683;break;case '🌴':return 37684;break;case '🌵':return 37685;break;case '🌶':return 37686;break;case '🌷':return 37687;break;case '🌸':return 37688;break;case '🌹':return 37689;break;case '🌺':return 37690;break;case '🌻':return 37691;break;case '🌼':return 37692;break;case '🌽':return 37693;break;case '🌾':return 37694;break;case '🌿':return 37695;break;case '🍀':return 37696;break;case '🍁':return 37697;break;case '🍂':return 37698;break;case '🍃':return 37699;break;case '🍄':return 37700;break;case '🍅':return 37701;break;case '🍆':return 37702;break;case '🍇':return 37703;break;case '🍈':return 37704;break;case '🍉':return 37705;break;case '🍊':return 37706;break;case '🍋':return 37707;break;case '🍌':return 37708;break;case '🍍':return 37709;break;case '🍎':return 37710;break;case '🍏':return 37711;break;case '🍐':return 37712;break;case '🍑':return 37713;break;case '🍒':return 37714;break;case '🍓':return 37715;break;case '🍔':return 37716;break;case '🍕':return 37717;break;case '🍖':return 37718;break;case '🍗':return 37719;break;case '🍘':return 37720;break;case '🍙':return 37721;break;case '🍚':return 37722;break;case '🍛':return 37723;break;case '🍜':return 37724;break;case '🍝':return 37725;break;case '🍞':return 37726;break;case '🍟':return 37727;break;case '🍠':return 37728;break;case '🍡':return 37729;break;case '🍢':return 37730;break;case '🍣':return 37731;break;case '🍤':return 37732;break;case '🍥':return 37733;break;case '🍦':return 37734;break;case '🍧':return 37735;break;case '🍨':return 37736;break;case '🍩':return 37737;break;case '🍪':return 37738;break;case '🍫':return 37739;break;case '🍬':return 37740;break;case '🍭':return 37741;break;case '🍮':return 37742;break;case '🍯':return 37743;break;case '🍰':return 37744;break;case '🍱':return 37745;break;case '🍲':return 37746;break;case '🍳':return 37747;break;case '🍴':return 37748;break;case '🍵':return 37749;break;case '🍶':return 37750;break;case '🍷':return 37751;break;case '🍸':return 37752;break;case '🍹':return 37753;break;case '🍺':return 37754;break;case '🍻':return 37755;break;case '🍼':return 37756;break;case '🍽':return 37757;break;case '🍾':return 37758;break;case '🍿':return 37759;break;case '🎀':return 37760;break;case '🎁':return 37761;break;case '🎂':return 37762;break;case '🎃':return 37763;break;case '🎄':return 37764;break;case '🎅':return 37765;break;case '🎆':return 37766;break;case '🎇':return 37767;break;case '🎈':return 37768;break;case '🎉':return 37769;break;case '🎊':return 37770;break;case '🎋':return 37771;break;case '🎌':return 37772;break;case '🎍':return 37773;break;case '🎎':return 37774;break;case '🎏':return 37775;break;case '🎐':return 37776;break;case '🎑':return 37777;break;case '🎒':return 37778;break;case '🎓':return 37779;break;case '🎔':return 37780;break;case '🎕':return 37781;break;case '🎖':return 37782;break;case '🎗':return 37783;break;case '🎘':return 37784;break;case '🎙':return 37785;break;case '🎚':return 37786;break;case '🎛':return 37787;break;case '🎜':return 37788;break;case '🎝':return 37789;break;case '🎞':return 37790;break;case '🎟':return 37791;break;case '🎠':return 37792;break;case '🎡':return 37793;break;case '🎢':return 37794;break;case '🎣':return 37795;break;case '🎤':return 37796;break;case '🎥':return 37797;break;case '🎦':return 37798;break;case '🎧':return 37799;break;case '🎨':return 37800;break;case '🎩':return 37801;break;case '🎪':return 37802;break;case '🎫':return 37803;break;case '🎬':return 37804;break;case '🎭':return 37805;break;case '🎮':return 37806;break;case '🎯':return 37807;break;case '🎰':return 37808;break;case '🎱':return 37809;break;case '🎲':return 37810;break;case '🎳':return 37811;break;case '🎴':return 37812;break;case '🎵':return 37813;break;case '🎶':return 37814;break;case '🎷':return 37815;break;case '🎸':return 37816;break;case '🎹':return 37817;break;case '🎺':return 37818;break;case '🎻':return 37819;break;case '🎼':return 37820;break;case '🎽':return 37821;break;case '🎾':return 37822;break;case '🎿':return 37823;break;case '🏀':return 37824;break;case '🏁':return 37825;break;case '🏂':return 37826;break;case '🏃':return 37827;break;case '🏄':return 37828;break;case '🏅':return 37829;break;case '🏆':return 37830;break;case '🏇':return 37831;break;case '🏈':return 37832;break;case '🏉':return 37833;break;case '🏊':return 37834;break;case '🏋':return 37835;break;case '🏌':return 37836;break;case '🏍':return 37837;break;case '🏎':return 37838;break;case '🏏':return 37839;break;case '🏐':return 37840;break;case '🏑':return 37841;break;case '🏒':return 37842;break;case '🏓':return 37843;break;case '🏔':return 37844;break;case '🏕':return 37845;break;case '🏖':return 37846;break;case '🏗':return 37847;break;case '🏘':return 37848;break;case '🏙':return 37849;break;case '🏚':return 37850;break;case '🏛':return 37851;break;case '🏜':return 37852;break;case '🏝':return 37853;break;case '🏞':return 37854;break;case '🏟':return 37855;break;case '🏠':return 37856;break;case '🏡':return 37857;break;case '🏢':return 37858;break;case '🏣':return 37859;break;case '🏤':return 37860;break;case '🏥':return 37861;break;case '🏦':return 37862;break;case '🏧':return 37863;break;case '🏨':return 37864;break;case '🏩':return 37865;break;case '🏪':return 37866;break;case '🏫':return 37867;break;case '🏬':return 37868;break;case '🏭':return 37869;break;case '🏮':return 37870;break;case '🏯':return 37871;break;case '🏰':return 37872;break;case '🏱':return 37873;break;case '🏲':return 37874;break;case '🏳':return 37875;break;case '🏴':return 37876;break;case '🏵':return 37877;break;case '🏶':return 37878;break;case '🏷':return 37879;break;case '🏸':return 37880;break;case '🏹':return 37881;break;case '🏺':return 37882;break;case '🏻':return 37883;break;case '🏼':return 37884;break;case '🏽':return 37885;break;case '🏾':return 37886;break;case '🏿':return 37887;break;case '🐀':return 37888;break;case '🐁':return 37889;break;case '🐂':return 37890;break;case '🐃':return 37891;break;case '🐄':return 37892;break;case '🐅':return 37893;break;case '🐆':return 37894;break;case '🐇':return 37895;break;case '🐈':return 37896;break;case '🐉':return 37897;break;case '🐊':return 37898;break;case '🐋':return 37899;break;case '🐌':return 37900;break;case '🐍':return 37901;break;case '🐎':return 37902;break;case '🐏':return 37903;break;case '🐐':return 37904;break;case '🐑':return 37905;break;case '🐒':return 37906;break;case '🐓':return 37907;break;case '🐔':return 37908;break;case '🐕':return 37909;break;case '🐖':return 37910;break;case '🐗':return 37911;break;case '🐘':return 37912;break;case '🐙':return 37913;break;case '🐚':return 37914;break;case '🐛':return 37915;break;case '🐜':return 37916;break;case '🐝':return 37917;break;case '🐞':return 37918;break;case '🐟':return 37919;break;case '🐠':return 37920;break;case '🐡':return 37921;break;case '🐢':return 37922;break;case '🐣':return 37923;break;case '🐤':return 37924;break;case '🐥':return 37925;break;case '🐦':return 37926;break;case '🐧':return 37927;break;case '🐨':return 37928;break;case '🐩':return 37929;break;case '🐪':return 37930;break;case '🐫':return 37931;break;case '🐬':return 37932;break;case '🐭':return 37933;break;case '🐮':return 37934;break;case '🐯':return 37935;break;case '🐰':return 37936;break;case '🐱':return 37937;break;case '🐲':return 37938;break;case '🐳':return 37939;break;case '🐴':return 37940;break;case '🐵':return 37941;break;case '🐶':return 37942;break;case '🐷':return 37943;break;case '🐸':return 37944;break;case '🐹':return 37945;break;case '🐺':return 37946;break;case '🐻':return 37947;break;case '🐼':return 37948;break;case '🐽':return 37949;break;case '🐾':return 37950;break;case '🐿':return 37951;break;case '👀':return 37952;break;case '👁':return 37953;break;case '👂':return 37954;break;case '👃':return 37955;break;case '👄':return 37956;break;case '👅':return 37957;break;case '👆':return 37958;break;case '👇':return 37959;break;case '👈':return 37960;break;case '👉':return 37961;break;case '👊':return 37962;break;case '👋':return 37963;break;case '👌':return 37964;break;case '👍':return 37965;break;case '👎':return 37966;break;case '👏':return 37967;break;case '👐':return 37968;break;case '👑':return 37969;break;case '👒':return 37970;break;case '👓':return 37971;break;case '👔':return 37972;break;case '👕':return 37973;break;case '👖':return 37974;break;case '👗':return 37975;break;case '👘':return 37976;break;case '👙':return 37977;break;case '👚':return 37978;break;case '👛':return 37979;break;case '👜':return 37980;break;case '👝':return 37981;break;case '👞':return 37982;break;case '👟':return 37983;break;case '👠':return 37984;break;case '👡':return 37985;break;case '👢':return 37986;break;case '👣':return 37987;break;case '👤':return 37988;break;case '👥':return 37989;break;case '👦':return 37990;break;case '👧':return 37991;break;case '👨':return 37992;break;case '👩':return 37993;break;case '👪':return 37994;break;case '👫':return 37995;break;case '👬':return 37996;break;case '👭':return 37997;break;case '👮':return 37998;break;case '👯':return 37999;break;case '👰':return 38000;break;case '👱':return 38001;break;case '👲':return 38002;break;case '👳':return 38003;break;case '👴':return 38004;break;case '👵':return 38005;break;case '👶':return 38006;break;case '👷':return 38007;break;case '👸':return 38008;break;case '👹':return 38009;break;case '👺':return 38010;break;case '👻':return 38011;break;case '👼':return 38012;break;case '👽':return 38013;break;case '👾':return 38014;break;case '👿':return 38015;break;case '💀':return 38016;break;case '💁':return 38017;break;case '💂':return 38018;break;case '💃':return 38019;break;case '💄':return 38020;break;case '💅':return 38021;break;case '💆':return 38022;break;case '💇':return 38023;break;case '💈':return 38024;break;case '💉':return 38025;break;case '💊':return 38026;break;case '💋':return 38027;break;case '💌':return 38028;break;case '💍':return 38029;break;case '💎':return 38030;break;case '💏':return 38031;break;case '💐':return 38032;break;case '💑':return 38033;break;case '💒':return 38034;break;case '💓':return 38035;break;case '💔':return 38036;break;case '💕':return 38037;break;case '💖':return 38038;break;case '💗':return 38039;break;case '💘':return 38040;break;case '💙':return 38041;break;case '💚':return 38042;break;case '💛':return 38043;break;case '💜':return 38044;break;case '💝':return 38045;break;case '💞':return 38046;break;case '💟':return 38047;break;case '💠':return 38048;break;case '💡':return 38049;break;case '💢':return 38050;break;case '💣':return 38051;break;case '💤':return 38052;break;case '💥':return 38053;break;case '💦':return 38054;break;case '💧':return 38055;break;case '💨':return 38056;break;case '💩':return 38057;break;case '💪':return 38058;break;case '💫':return 38059;break;case '💬':return 38060;break;case '💭':return 38061;break;case '💮':return 38062;break;case '💯':return 38063;break;case '💰':return 38064;break;case '💱':return 38065;break;case '💲':return 38066;break;case '💳':return 38067;break;case '💴':return 38068;break;case '💵':return 38069;break;case '💶':return 38070;break;case '💷':return 38071;break;case '💸':return 38072;break;case '💹':return 38073;break;case '💺':return 38074;break;case '💻':return 38075;break;case '💼':return 38076;break;case '💽':return 38077;break;case '💾':return 38078;break;case '💿':return 38079;break;case '📀':return 38080;break;case '📁':return 38081;break;case '📂':return 38082;break;case '📃':return 38083;break;case '📄':return 38084;break;case '📅':return 38085;break;case '📆':return 38086;break;case '📇':return 38087;break;case '📈':return 38088;break;case '📉':return 38089;break;case '📊':return 38090;break;case '📋':return 38091;break;case '📌':return 38092;break;case '📍':return 38093;break;case '📎':return 38094;break;case '📏':return 38095;break;case '📐':return 38096;break;case '📑':return 38097;break;case '📒':return 38098;break;case '📓':return 38099;break;case '📔':return 38100;break;case '📕':return 38101;break;case '📖':return 38102;break;case '📗':return 38103;break;case '📘':return 38104;break;case '📙':return 38105;break;case '📚':return 38106;break;case '📛':return 38107;break;case '📜':return 38108;break;case '📝':return 38109;break;case '📞':return 38110;break;case '📟':return 38111;break;case '📠':return 38112;break;case '📡':return 38113;break;case '📢':return 38114;break;case '📣':return 38115;break;case '📤':return 38116;break;case '📥':return 38117;break;case '📦':return 38118;break;case '📧':return 38119;break;case '📨':return 38120;break;case '📩':return 38121;break;case '📪':return 38122;break;case '📫':return 38123;break;case '📬':return 38124;break;case '📭':return 38125;break;case '📮':return 38126;break;case '📯':return 38127;break;case '📰':return 38128;break;case '📱':return 38129;break;case '📲':return 38130;break;case '📳':return 38131;break;case '📴':return 38132;break;case '📵':return 38133;break;case '📶':return 38134;break;case '📷':return 38135;break;case '📸':return 38136;break;case '📹':return 38137;break;case '📺':return 38138;break;case '📻':return 38139;break;case '📼':return 38140;break;case '📽':return 38141;break;case '📾':return 38142;break;case '📿':return 38143;break;case '🔀':return 38144;break;case '🔁':return 38145;break;case '🔂':return 38146;break;case '🔃':return 38147;break;case '🔄':return 38148;break;case '🔅':return 38149;break;case '🔆':return 38150;break;case '🔇':return 38151;break;case '🔈':return 38152;break;case '🔉':return 38153;break;case '🔊':return 38154;break;case '🔋':return 38155;break;case '🔌':return 38156;break;case '🔍':return 38157;break;case '🔎':return 38158;break;case '🔏':return 38159;break;case '🔐':return 38160;break;case '🔑':return 38161;break;case '🔒':return 38162;break;case '🔓':return 38163;break;case '🔔':return 38164;break;case '🔕':return 38165;break;case '🔖':return 38166;break;case '🔗':return 38167;break;case '🔘':return 38168;break;case '🔙':return 38169;break;case '🔚':return 38170;break;case '🔛':return 38171;break;case '🔜':return 38172;break;case '🔝':return 38173;break;case '🔞':return 38174;break;case '🔟':return 38175;break;case '🔠':return 38176;break;case '🔡':return 38177;break;case '🔢':return 38178;break;case '🔣':return 38179;break;case '🔤':return 38180;break;case '🔥':return 38181;break;case '🔦':return 38182;break;case '🔧':return 38183;break;case '🔨':return 38184;break;case '🔩':return 38185;break;case '🔪':return 38186;break;case '🔫':return 38187;break;case '🔬':return 38188;break;case '🔭':return 38189;break;case '🔮':return 38190;break;case '🔯':return 38191;break;case '🔰':return 38192;break;case '🔱':return 38193;break;case '🔲':return 38194;break;case '🔳':return 38195;break;case '🔴':return 38196;break;case '🔵':return 38197;break;case '🔶':return 38198;break;case '🔷':return 38199;break;case '🔸':return 38200;break;case '🔹':return 38201;break;case '🔺':return 38202;break;case '🔻':return 38203;break;case '🔼':return 38204;break;case '🔽':return 38205;break;case '🔾':return 38206;break;case '🔿':return 38207;break;case '🕀':return 38208;break;case '🕁':return 38209;break;case '🕂':return 38210;break;case '🕃':return 38211;break;case '🕄':return 38212;break;case '🕅':return 38213;break;case '🕆':return 38214;break;case '🕇':return 38215;break;case '🕈':return 38216;break;case '🕉':return 38217;break;case '🕊':return 38218;break;case '🕋':return 38219;break;case '🕌':return 38220;break;case '🕍':return 38221;break;case '🕎':return 38222;break;case '🕏':return 38223;break;case '🕐':return 38224;break;case '🕑':return 38225;break;case '🕒':return 38226;break;case '🕓':return 38227;break;case '🕔':return 38228;break;case '🕕':return 38229;break;case '🕖':return 38230;break;case '🕗':return 38231;break;case '🕘':return 38232;break;case '🕙':return 38233;break;case '🕚':return 38234;break;case '🕛':return 38235;break;case '🕜':return 38236;break;case '🕝':return 38237;break;case '🕞':return 38238;break;case '🕟':return 38239;break;case '🕠':return 38240;break;case '🕡':return 38241;break;case '🕢':return 38242;break;case '🕣':return 38243;break;case '🕤':return 38244;break;case '🕥':return 38245;break;case '🕦':return 38246;break;case '🕧':return 38247;break;case '🕨':return 38248;break;case '🕩':return 38249;break;case '🕪':return 38250;break;case '🕫':return 38251;break;case '🕬':return 38252;break;case '🕭':return 38253;break;case '🕮':return 38254;break;case '🕯':return 38255;break;case '🕰':return 38256;break;case '🕱':return 38257;break;case '🕲':return 38258;break;case '🕳':return 38259;break;case '🕴':return 38260;break;case '🕵':return 38261;break;case '🕶':return 38262;break;case '🕷':return 38263;break;case '🕸':return 38264;break;case '🕹':return 38265;break;case '🕺':return 38266;break;case '🕻':return 38267;break;case '🕼':return 38268;break;case '🕽':return 38269;break;case '🕾':return 38270;break;case '🕿':return 38271;break;case '🖀':return 38272;break;case '🖁':return 38273;break;case '🖂':return 38274;break;case '🖃':return 38275;break;case '🖄':return 38276;break;case '🖅':return 38277;break;case '🖆':return 38278;break;case '🖇':return 38279;break;case '🖈':return 38280;break;case '🖉':return 38281;break;case '🖊':return 38282;break;case '🖋':return 38283;break;case '🖌':return 38284;break;case '🖍':return 38285;break;case '🖎':return 38286;break;case '🖏':return 38287;break;case '🖐':return 38288;break;case '🖑':return 38289;break;case '🖒':return 38290;break;case '🖓':return 38291;break;case '🖔':return 38292;break;case '🖕':return 38293;break;case '🖖':return 38294;break;case '🖗':return 38295;break;case '🖘':return 38296;break;case '🖙':return 38297;break;case '🖚':return 38298;break;case '🖛':return 38299;break;case '🖜':return 38300;break;case '🖝':return 38301;break;case '🖞':return 38302;break;case '🖟':return 38303;break;case '🖠':return 38304;break;case '🖡':return 38305;break;case '🖢':return 38306;break;case '🖣':return 38307;break;case '🖤':return 38308;break;case '🖥':return 38309;break;case '🖦':return 38310;break;case '🖧':return 38311;break;case '🖨':return 38312;break;case '🖩':return 38313;break;case '🖪':return 38314;break;case '🖫':return 38315;break;case '🖬':return 38316;break;case '🖭':return 38317;break;case '🖮':return 38318;break;case '🖯':return 38319;break;case '🖰':return 38320;break;case '🖱':return 38321;break;case '🖲':return 38322;break;case '🖳':return 38323;break;case '🖴':return 38324;break;case '🖵':return 38325;break;case '🖶':return 38326;break;case '🖷':return 38327;break;case '🖸':return 38328;break;case '🖹':return 38329;break;case '🖺':return 38330;break;case '🖻':return 38331;break;case '🖼':return 38332;break;case '🖽':return 38333;break;case '🖾':return 38334;break;case '🖿':return 38335;break;case '🗀':return 38336;break;case '🗁':return 38337;break;case '🗂':return 38338;break;case '🗃':return 38339;break;case '🗄':return 38340;break;case '🗅':return 38341;break;case '🗆':return 38342;break;case '🗇':return 38343;break;case '🗈':return 38344;break;case '🗉':return 38345;break;case '🗊':return 38346;break;case '🗋':return 38347;break;case '🗌':return 38348;break;case '🗍':return 38349;break;case '🗎':return 38350;break;case '🗏':return 38351;break;case '🗐':return 38352;break;case '🗑':return 38353;break;case '🗒':return 38354;break;case '🗓':return 38355;break;case '🗔':return 38356;break;case '🗕':return 38357;break;case '🗖':return 38358;break;case '🗗':return 38359;break;case '🗘':return 38360;break;case '🗙':return 38361;break;case '🗚':return 38362;break;case '🗛':return 38363;break;case '🗜':return 38364;break;case '🗝':return 38365;break;case '🗞':return 38366;break;case '🗟':return 38367;break;case '🗠':return 38368;break;case '🗡':return 38369;break;case '🗢':return 38370;break;case '🗣':return 38371;break;case '🗤':return 38372;break;case '🗥':return 38373;break;case '🗦':return 38374;break;case '🗧':return 38375;break;case '🗨':return 38376;break;case '🗩':return 38377;break;case '🗪':return 38378;break;case '🗫':return 38379;break;case '🗬':return 38380;break;case '🗭':return 38381;break;case '🗮':return 38382;break;case '🗯':return 38383;break;case '🗰':return 38384;break;case '🗱':return 38385;break;case '🗲':return 38386;break;case '🗳':return 38387;break;case '🗴':return 38388;break;case '🗵':return 38389;break;case '🗶':return 38390;break;case '🗷':return 38391;break;case '🗸':return 38392;break;case '🗹':return 38393;break;case '🗺':return 38394;break;case '🗻':return 38395;break;case '🗼':return 38396;break;case '🗽':return 38397;break;case '🗾':return 38398;break;case '🗿':return 38399;break;case '😀':return 38400;break;case '😁':return 38401;break;case '😂':return 38402;break;case '😃':return 38403;break;case '😄':return 38404;break;case '😅':return 38405;break;case '😆':return 38406;break;case '😇':return 38407;break;case '😈':return 38408;break;case '😉':return 38409;break;case '😊':return 38410;break;case '😋':return 38411;break;case '😌':return 38412;break;case '😍':return 38413;break;case '😎':return 38414;break;case '😏':return 38415;break;case '😐':return 38416;break;case '😑':return 38417;break;case '😒':return 38418;break;case '😓':return 38419;break;case '😔':return 38420;break;case '😕':return 38421;break;case '😖':return 38422;break;case '😗':return 38423;break;case '😘':return 38424;break;case '😙':return 38425;break;case '😚':return 38426;break;case '😛':return 38427;break;case '😜':return 38428;break;case '😝':return 38429;break;case '😞':return 38430;break;case '😟':return 38431;break;case '😠':return 38432;break;case '😡':return 38433;break;case '😢':return 38434;break;case '😣':return 38435;break;case '😤':return 38436;break;case '😥':return 38437;break;case '😦':return 38438;break;case '😧':return 38439;break;case '😨':return 38440;break;case '😩':return 38441;break;case '😪':return 38442;break;case '😫':return 38443;break;case '😬':return 38444;break;case '😭':return 38445;break;case '😮':return 38446;break;case '😯':return 38447;break;case '😰':return 38448;break;case '😱':return 38449;break;case '😲':return 38450;break;case '😳':return 38451;break;case '😴':return 38452;break;case '😵':return 38453;break;case '😶':return 38454;break;case '😷':return 38455;break;case '😸':return 38456;break;case '😹':return 38457;break;case '😺':return 38458;break;case '😻':return 38459;break;case '😼':return 38460;break;case '😽':return 38461;break;case '😾':return 38462;break;case '😿':return 38463;break;case '🙀':return 38464;break;case '🙁':return 38465;break;case '🙂':return 38466;break;case '🙃':return 38467;break;case '🙄':return 38468;break;case '🙅':return 38469;break;case '🙆':return 38470;break;case '🙇':return 38471;break;case '🙈':return 38472;break;case '🙉':return 38473;break;case '🙊':return 38474;break;case '🙋':return 38475;break;case '🙌':return 38476;break;case '🙍':return 38477;break;case '🙎':return 38478;break;case '🙏':return 38479;break;case '🙐':return 38480;break;case '🙑':return 38481;break;case '🙒':return 38482;break;case '🙓':return 38483;break;case '🙔':return 38484;break;case '🙕':return 38485;break;case '🙖':return 38486;break;case '🙗':return 38487;break;case '🙘':return 38488;break;case '🙙':return 38489;break;case '🙚':return 38490;break;case '🙛':return 38491;break;case '🙜':return 38492;break;case '🙝':return 38493;break;case '🙞':return 38494;break;case '🙟':return 38495;break;case '🙠':return 38496;break;case '🙡':return 38497;break;case '🙢':return 38498;break;case '🙣':return 38499;break;case '🙤':return 38500;break;case '🙥':return 38501;break;case '🙦':return 38502;break;case '🙧':return 38503;break;case '🙨':return 38504;break;case '🙩':return 38505;break;case '🙪':return 38506;break;case '🙫':return 38507;break;case '🙬':return 38508;break;case '🙭':return 38509;break;case '🙮':return 38510;break;case '🙯':return 38511;break;case '🙰':return 38512;break;case '🙱':return 38513;break;case '🙲':return 38514;break;case '🙳':return 38515;break;case '🙴':return 38516;break;case '🙵':return 38517;break;case '🙶':return 38518;break;case '🙷':return 38519;break;case '🙸':return 38520;break;case '🙹':return 38521;break;case '🙺':return 38522;break;case '🙻':return 38523;break;case '🙼':return 38524;break;case '🙽':return 38525;break;case '🙾':return 38526;break;case '🙿':return 38527;break;case '🚀':return 38528;break;case '🚁':return 38529;break;case '🚂':return 38530;break;case '🚃':return 38531;break;case '🚄':return 38532;break;case '🚅':return 38533;break;case '🚆':return 38534;break;case '🚇':return 38535;break;case '🚈':return 38536;break;case '🚉':return 38537;break;case '🚊':return 38538;break;case '🚋':return 38539;break;case '🚌':return 38540;break;case '🚍':return 38541;break;case '🚎':return 38542;break;case '🚏':return 38543;break;case '🚐':return 38544;break;case '🚑':return 38545;break;case '🚒':return 38546;break;case '🚓':return 38547;break;case '🚔':return 38548;break;case '🚕':return 38549;break;case '🚖':return 38550;break;case '🚗':return 38551;break;case '🚘':return 38552;break;case '🚙':return 38553;break;case '🚚':return 38554;break;case '🚛':return 38555;break;case '🚜':return 38556;break;case '🚝':return 38557;break;case '🚞':return 38558;break;case '🚟':return 38559;break;case '🚠':return 38560;break;case '🚡':return 38561;break;case '🚢':return 38562;break;case '🚣':return 38563;break;case '🚤':return 38564;break;case '🚥':return 38565;break;case '🚦':return 38566;break;case '🚧':return 38567;break;case '🚨':return 38568;break;case '🚩':return 38569;break;case '🚪':return 38570;break;case '🚫':return 38571;break;case '🚬':return 38572;break;case '🚭':return 38573;break;case '🚮':return 38574;break;case '🚯':return 38575;break;case '🚰':return 38576;break;case '🚱':return 38577;break;case '🚲':return 38578;break;case '🚳':return 38579;break;case '🚴':return 38580;break;case '🚵':return 38581;break;case '🚶':return 38582;break;case '🚷':return 38583;break;case '🚸':return 38584;break;case '🚹':return 38585;break;case '🚺':return 38586;break;case '🚻':return 38587;break;case '🚼':return 38588;break;case '🚽':return 38589;break;case '🚾':return 38590;break;case '🚿':return 38591;break;case '🛀':return 38592;break;case '🛁':return 38593;break;case '🛂':return 38594;break;case '🛃':return 38595;break;case '🛄':return 38596;break;case '🛅':return 38597;break;case '🛆':return 38598;break;case '🛇':return 38599;break;case '🛈':return 38600;break;case '🛉':return 38601;break;case '🛊':return 38602;break;case '🛋':return 38603;break;case '🛌':return 38604;break;case '🛍':return 38605;break;case '🛎':return 38606;break;case '🛏':return 38607;break;case '🛐':return 38608;break;case '🛑':return 38609;break;case '🛒':return 38610;break;case '🛠':return 38624;break;case '🛡':return 38625;break;case '🛢':return 38626;break;case '🛣':return 38627;break;case '🛤':return 38628;break;case '🛥':return 38629;break;case '🛦':return 38630;break;case '🛧':return 38631;break;case '🛨':return 38632;break;case '🛩':return 38633;break;case '🛪':return 38634;break;case '🛫':return 38635;break;case '🛬':return 38636;break;case '🛰':return 38640;break;case '🛱':return 38641;break;case '🛲':return 38642;break;case '🛳':return 38643;break;case '🛴':return 38644;break;case '🛵':return 38645;break;case '🛶':return 38646;break;case '🛷':return 38647;break;case '🛸':return 38648;break;case '🜀':return 38656;break;case '🜁':return 38657;break;case '🜂':return 38658;break;case '🜃':return 38659;break;case '🜄':return 38660;break;case '🜅':return 38661;break;case '🜆':return 38662;break;case '🜇':return 38663;break;case '🜈':return 38664;break;case '🜉':return 38665;break;case '🜊':return 38666;break;case '🜋':return 38667;break;case '🜌':return 38668;break;case '🜍':return 38669;break;case '🜎':return 38670;break;case '🜏':return 38671;break;case '🜐':return 38672;break;case '🜑':return 38673;break;case '🜒':return 38674;break;case '🜓':return 38675;break;case '🜔':return 38676;break;case '🜕':return 38677;break;case '🜖':return 38678;break;case '🜗':return 38679;break;case '🜘':return 38680;break;case '🜙':return 38681;break;case '🜚':return 38682;break;case '🜛':return 38683;break;case '🜜':return 38684;break;case '🜝':return 38685;break;case '🜞':return 38686;break;case '🜟':return 38687;break;case '🜠':return 38688;break;case '🜡':return 38689;break;case '🜢':return 38690;break;case '🜣':return 38691;break;case '🜤':return 38692;break;case '🜥':return 38693;break;case '🜦':return 38694;break;case '🜧':return 38695;break;case '🜨':return 38696;break;case '🜩':return 38697;break;case '🜪':return 38698;break;case '🜫':return 38699;break;case '🜬':return 38700;break;case '🜭':return 38701;break;case '🜮':return 38702;break;case '🜯':return 38703;break;case '🜰':return 38704;break;case '🜱':return 38705;break;case '🜲':return 38706;break;case '🜳':return 38707;break;case '🜴':return 38708;break;case '🜵':return 38709;break;case '🜶':return 38710;break;case '🜷':return 38711;break;case '🜸':return 38712;break;case '🜹':return 38713;break;case '🜺':return 38714;break;case '🜻':return 38715;break;case '🜼':return 38716;break;case '🜽':return 38717;break;case '🜾':return 38718;break;case '🜿':return 38719;break;case '🝀':return 38720;break;case '🝁':return 38721;break;case '🝂':return 38722;break;case '🝃':return 38723;break;case '🝄':return 38724;break;case '🝅':return 38725;break;case '🝆':return 38726;break;case '🝇':return 38727;break;case '🝈':return 38728;break;case '🝉':return 38729;break;case '🝊':return 38730;break;case '🝋':return 38731;break;case '🝌':return 38732;break;case '🝍':return 38733;break;case '🝎':return 38734;break;case '🝏':return 38735;break;case '🝐':return 38736;break;case '🝑':return 38737;break;case '🝒':return 38738;break;case '🝓':return 38739;break;case '🝔':return 38740;break;case '🝕':return 38741;break;case '🝖':return 38742;break;case '🝗':return 38743;break;case '🝘':return 38744;break;case '🝙':return 38745;break;case '🝚':return 38746;break;case '🝛':return 38747;break;case '🝜':return 38748;break;case '🝝':return 38749;break;case '🝞':return 38750;break;case '🝟':return 38751;break;case '🝠':return 38752;break;case '🝡':return 38753;break;case '🝢':return 38754;break;case '🝣':return 38755;break;case '🝤':return 38756;break;case '🝥':return 38757;break;case '🝦':return 38758;break;case '🝧':return 38759;break;case '🝨':return 38760;break;case '🝩':return 38761;break;case '🝪':return 38762;break;case '🝫':return 38763;break;case '🝬':return 38764;break;case '🝭':return 38765;break;case '🝮':return 38766;break;case '🝯':return 38767;break;case '🝰':return 38768;break;case '🝱':return 38769;break;case '🝲':return 38770;break;case '🝳':return 38771;break;case '🞀':return 38784;break;case '🞁':return 38785;break;case '🞂':return 38786;break;case '🞃':return 38787;break;case '🞄':return 38788;break;case '🞅':return 38789;break;case '🞇':return 38791;break;case '🞉':return 38793;break;case '🞌':return 38796;break;case '🞍':return 38797;break;case '🞑':return 38801;break;case '🞒':return 38802;break;case '🞓':return 38803;break;case '🞔':return 38804;break;case '🞕':return 38805;break;case '🞖':return 38806;break;case '🞗':return 38807;break;case '🞘':return 38808;break;case '🞙':return 38809;break;case '🞚':return 38810;break;case '🞛':return 38811;break;case '🞜':return 38812;break;case '🞝':return 38813;break;case '🞞':return 38814;break;case '🞟':return 38815;break;case '🞠':return 38816;break;case '🞡':return 38817;break;case '🞢':return 38818;break;case '🞣':return 38819;break;case '🞤':return 38820;break;case '🞥':return 38821;break;case '🞦':return 38822;break;case '🞧':return 38823;break;case '🞨':return 38824;break;case '🞩':return 38825;break;case '🞪':return 38826;break;case '🞫':return 38827;break;case '🞬':return 38828;break;case '🞭':return 38829;break;case '🞮':return 38830;break;case '🞯':return 38831;break;case '🞰':return 38832;break;case '🞱':return 38833;break;case '🞲':return 38834;break;case '🞳':return 38835;break;case '🞴':return 38836;break;case '🞵':return 38837;break;case '🞶':return 38838;break;case '🞷':return 38839;break;case '🞸':return 38840;break;case '🞹':return 38841;break;case '🞺':return 38842;break;case '🞻':return 38843;break;case '🞼':return 38844;break;case '🞽':return 38845;break;case '🞾':return 38846;break;case '🞿':return 38847;break;case '🟀':return 38848;break;case '🟂':return 38850;break;case '🟃':return 38851;break;case '🟄':return 38852;break;case '🟆':return 38854;break;case '🟇':return 38855;break;case '🟈':return 38856;break;case '🟉':return 38857;break;case '🟊':return 38858;break;case '🟋':return 38859;break;case '🟌':return 38860;break;case '🟍':return 38861;break;case '🟎':return 38862;break;case '🟐':return 38864;break;case '🟒':return 38866;break;case '🟔':return 38868;break;case '🠀':return 38912;break;case '🠁':return 38913;break;case '🠂':return 38914;break;case '🠃':return 38915;break;case '🠄':return 38916;break;case '🠅':return 38917;break;case '🠆':return 38918;break;case '🠇':return 38919;break;case '🠈':return 38920;break;case '🠉':return 38921;break;case '🠊':return 38922;break;case '🠋':return 38923;break;case '🠐':return 38928;break;case '🠑':return 38929;break;case '🠒':return 38930;break;case '🠓':return 38931;break;case '🠔':return 38932;break;case '🠕':return 38933;break;case '🠖':return 38934;break;case '🠗':return 38935;break;case '🠘':return 38936;break;case '🠙':return 38937;break;case '🠚':return 38938;break;case '🠛':return 38939;break;case '🠜':return 38940;break;case '🠝':return 38941;break;case '🠞':return 38942;break;case '🠟':return 38943;break;case '🠠':return 38944;break;case '🠡':return 38945;break;case '🠢':return 38946;break;case '🠣':return 38947;break;case '🠤':return 38948;break;case '🠥':return 38949;break;case '🠦':return 38950;break;case '🠧':return 38951;break;case '🠨':return 38952;break;case '🠩':return 38953;break;case '🠪':return 38954;break;case '🠫':return 38955;break;case '🠬':return 38956;break;case '🠭':return 38957;break;case '🠮':return 38958;break;case '🠯':return 38959;break;case '🠰':return 38960;break;case '🠱':return 38961;break;case '🠲':return 38962;break;case '🠳':return 38963;break;case '🠴':return 38964;break;case '🠵':return 38965;break;case '🠶':return 38966;break;case '🠷':return 38967;break;case '🠸':return 38968;break;case '🠹':return 38969;break;case '🠺':return 38970;break;case '🠻':return 38971;break;case '🠼':return 38972;break;case '🠽':return 38973;break;case '🠾':return 38974;break;case '🠿':return 38975;break;case '🡀':return 38976;break;case '🡁':return 38977;break;case '🡂':return 38978;break;case '🡃':return 38979;break;case '🡄':return 38980;break;case '🡅':return 38981;break;case '🡆':return 38982;break;case '🡇':return 38983;break;case '🡈':return 38984;break;case '🡉':return 38985;break;case '🡊':return 38986;break;case '🡋':return 38987;break;case '🡌':return 38988;break;case '🡍':return 38989;break;case '🡎':return 38990;break;case '🡏':return 38991;break;case '🡐':return 38992;break;case '🡑':return 38993;break;case '🡒':return 38994;break;case '🡓':return 38995;break;case '🡔':return 38996;break;case '🡕':return 38997;break;case '🡖':return 38998;break;case '🡗':return 38999;break;case '🡘':return 39000;break;case '🡙':return 39001;break;case '🡠':return 39008;break;case '🡡':return 39009;break;case '🡢':return 39010;break;case '🡣':return 39011;break;case '🡤':return 39012;break;case '🡥':return 39013;break;case '🡦':return 39014;break;case '🡧':return 39015;break;case '🡨':return 39016;break;case '🡩':return 39017;break;case '🡪':return 39018;break;case '🡫':return 39019;break;case '🡬':return 39020;break;case '🡭':return 39021;break;case '🡮':return 39022;break;case '🡯':return 39023;break;case '🡰':return 39024;break;case '🡱':return 39025;break;case '🡲':return 39026;break;case '🡳':return 39027;break;case '🡴':return 39028;break;case '🡵':return 39029;break;case '🡶':return 39030;break;case '🡷':return 39031;break;case '🡸':return 39032;break;case '🡹':return 39033;break;case '🡺':return 39034;break;case '🡻':return 39035;break;case '🡼':return 39036;break;case '🡽':return 39037;break;case '🡾':return 39038;break;case '🡿':return 39039;break;case '🢀':return 39040;break;case '🢁':return 39041;break;case '🢂':return 39042;break;case '🢃':return 39043;break;case '🢄':return 39044;break;case '🢅':return 39045;break;case '🢆':return 39046;break;case '🢇':return 39047;break;case '🢐':return 39056;break;case '🢑':return 39057;break;case '🢒':return 39058;break;case '🢓':return 39059;break;case '🢔':return 39060;break;case '🢕':return 39061;break;case '🢖':return 39062;break;case '🢗':return 39063;break;case '🢘':return 39064;break;case '🢙':return 39065;break;case '🢚':return 39066;break;case '🢛':return 39067;break;case '🢜':return 39068;break;case '🢝':return 39069;break;case '🢞':return 39070;break;case '🢟':return 39071;break;case '🢠':return 39072;break;case '🢡':return 39073;break;case '🢢':return 39074;break;case '🢣':return 39075;break;case '🢤':return 39076;break;case '🢥':return 39077;break;case '🢦':return 39078;break;case '🢧':return 39079;break;case '🢨':return 39080;break;case '🢩':return 39081;break;case '🢪':return 39082;break;case '🢫':return 39083;break;case '🢬':return 39084;break;case '🢭':return 39085;break;case '🤐':return 39184;break;case '🤑':return 39185;break;case '🤒':return 39186;break;case '🤓':return 39187;break;case '🤔':return 39188;break;case '🤕':return 39189;break;case '🤖':return 39190;break;case '🤗':return 39191;break;case '🤘':return 39192;break;case '🤙':return 39193;break;case '🤚':return 39194;break;case '🤛':return 39195;break;case '🤜':return 39196;break;case '🤝':return 39197;break;case '🤞':return 39198;break;case '🤟':return 39199;break;case '🤠':return 39200;break;case '🤡':return 39201;break;case '🤢':return 39202;break;case '🤣':return 39203;break;case '🤤':return 39204;break;case '🤥':return 39205;break;case '🤦':return 39206;break;case '🤧':return 39207;break;case '🤨':return 39208;break;case '🤩':return 39209;break;case '🤪':return 39210;break;case '🤫':return 39211;break;case '🤬':return 39212;break;case '🤭':return 39213;break;case '🤮':return 39214;break;case '🤯':return 39215;break;case '🤰':return 39216;break;case '🤱':return 39217;break;case '🤲':return 39218;break;case '🤳':return 39219;break;case '🤴':return 39220;break;case '🤵':return 39221;break;case '🤶':return 39222;break;case '🤷':return 39223;break;case '🤸':return 39224;break;case '🤹':return 39225;break;case '🤺':return 39226;break;case '🤻':return 39227;break;case '🤼':return 39228;break;case '🤽':return 39229;break;case '🤾':return 39230;break;case '🤿':return 39231;break;case '🥀':return 39232;break;case '🥁':return 39233;break;case '🥂':return 39234;break;case '🥃':return 39235;break;case '🥄':return 39236;break;case '🥅':return 39237;break;case '🥆':return 39238;break;case '🥇':return 39239;break;case '🥈':return 39240;break;case '🥉':return 39241;break;case '🥊':return 39242;break;case '🥋':return 39243;break;case '🥌':return 39244;break;case '🥍':return 39245;break;case '🥎':return 39246;break;case '🥏':return 39247;break;case '🥐':return 39248;break;case '🥑':return 39249;break;case '🥒':return 39250;break;case '🥓':return 39251;break;case '🥔':return 39252;break;case '🥕':return 39253;break;case '🥖':return 39254;break;case '🥗':return 39255;break;case '🥘':return 39256;break;case '🥙':return 39257;break;case '🥚':return 39258;break;case '🥛':return 39259;break;case '🥜':return 39260;break;case '🥝':return 39261;break;case '🥞':return 39262;break;case '🥟':return 39263;break;case '🥠':return 39264;break;case '🥡':return 39265;break;case '🥢':return 39266;break;case '🥣':return 39267;break;case '🥤':return 39268;break;case '🥥':return 39269;break;case '🥦':return 39270;break;case '🥧':return 39271;break;case '🥨':return 39272;break;case '🥩':return 39273;break;case '🥪':return 39274;break;case '🥫':return 39275;break;case '🦀':return 39296;break;case '🦁':return 39297;break;case '🦂':return 39298;break;case '🦃':return 39299;break;case '🦄':return 39300;break;case '🦅':return 39301;break;case '🦆':return 39302;break;case '🦇':return 39303;break;case '🦈':return 39304;break;case '🦉':return 39305;break;case '🦊':return 39306;break;case '🦋':return 39307;break;case '🦌':return 39308;break;case '🦍':return 39309;break;case '🦎':return 39310;break;case '🦏':return 39311;break;case '🦐':return 39312;break;case '🦑':return 39313;break;case '🦒':return 39314;break;case '🦓':return 39315;break;case '🦔':return 39316;break;case '🦕':return 39317;break;case '🦖':return 39318;break;case '🦗':return 39319;break;case '🧀':return 39360;break;case '🧐':return 39376;break;case '🧑':return 39377;break;case '🧒':return 39378;break;case '🧓':return 39379;break;case '🧔':return 39380;break;case '🧕':return 39381;break;case '🧖':return 39382;break;case '🧗':return 39383;break;case '🧘':return 39384;break;case '🧙':return 39385;break;case '🧚':return 39386;break;case '🧛':return 39387;break;case '🧜':return 39388;break;case '🧝':return 39389;break;case '🧞':return 39390;break;case '🧟':return 39391;break;case '🧠':return 39392;break;case '🧡':return 39393;break;case '🧢':return 39394;break;case '🧣':return 39395;break;case '🧤':return 39396;break;case '🧥':return 39397;break;case '🧦':return 39398;break;default:return LDKC.Number.NaN}
                            }

                            else
                                // Return
                                return - 1
                        };

                        // Cut
                        LapysDevelopmentKit.Functions.stringPrototypeCut = function stringPrototypeCut(string, length, STRING_LENGTH) { return LDKF.stringPrototypeCutLeft(LDKF.stringPrototypeCutRight(string, length, STRING_LENGTH), length, STRING_LENGTH) };

                        // Cut Left
                        LapysDevelopmentKit.Functions.stringPrototypeCutLeft = function stringPrototypeCutLeft(string, length, STRING_LENGTH) {
                            // Initialization > (Cut, String Length)
                            var cut = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic > Loop > Update > (Cut, Length)
                            if (stringLength && length < stringLength) while (length ^ stringLength) { cut += LDKF.stringPrototypeCharacterAt(string, length); length += 1 }

                            // Return
                            return cut
                        };

                        // Cut Right
                        LapysDevelopmentKit.Functions.stringPrototypeCutRight = function stringPrototypeCutRight(string, length, STRING_LENGTH) {
                            // Initialization > (Cut, String Length)
                            var cut = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength && length < stringLength) {
                                // Update > Length
                                length = stringLength - length;

                                // Loop > Update > Cut
                                while (length) cut = LDKF.stringPrototypeCharacterAt(string, length -= 1) + cut
                            }

                            // Return
                            return cut
                        };

                        // First
                        LapysDevelopmentKit.Functions.stringPrototypeFirst = function stringPrototypeFirst(string) { return LDKF.stringPrototypeCharacterAt(string, +0) };

                        // Includes --- CHECKPOINT (Lapys)
                        // Index --- CHECKPOINT (Lapys)
                        // Is DOM Element Tag Name --- CHECKPOINT (Lapys)
                        // Is Alphabet --- CHECKPOINT (Lapys)

                        // Is Digit
                        LapysDevelopmentKit.Functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(string) { return LDKF.arrayPrototypeIncludes(LDKC.String.digits, string, STRICT = 10) };

                        // Is Lower --- CHECKPOINT (Lapys)
                        // Is Lower Character --- CHECKPOINT (Lapys)

                        // Is Numeric Integer
                        LapysDevelopmentKit.Functions.stringPrototypeIsNumericInteger = function stringPrototypeIsNumericInteger(string) {
                            // Initialization > String Iterator
                            var stringIterator = LDKF.stringPrototypeLength(string);

                            // Loop > Logic > Return
                            while (stringIterator) if (!LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1))) return false;

                            // Return
                            return true
                        };

                        // Is Upper --- CHECKPOINT (Lapys)
                        // Is Upper Character --- CHECKPOINT (Lapys)
                        // Is Variable Character
                        LapysDevelopmentKit.Functions.stringPrototypeIsVariableCharacter = function stringPrototypeIsVariableCharacter(string) { return LDKF.arrayPrototypeIncludes(LDKC.String.variableCharacters, string, STRICT = 64) };

                        // Is Variable Identifier --- CHECKPOINT (Lapys)

                        // Last
                        LapysDevelopmentKit.Functions.stringPrototypeLast = function stringPrototypeLast(string, STRING_LENGTH) { return LDKF.stringPrototypeCharacterAt(string, (STRING_LENGTH || LDKF.stringPrototypeLength(string)) - 1) };

                        // Length --- NOTE (Lapys) -> Similar to the `LapysDevelopmentKit.Functions.arrayPrototypeLength` method: Strings manage their own length.
                        LapysDevelopmentKit.Functions.stringPrototypeLength = function stringPrototypeLength(string) { return string.length };

                        // Lower --- CHECKPOINT (Lapys)
                        // Remove All --- CHECKPOINT (Lapys)
                        // Replace All --- CHECKPOINT (Lapys)

                        // Slice
                        LapysDevelopmentKit.Functions.stringPrototypeSlice = function stringPrototypeSlice(string, index, length) {
                            // Initialization > (Slice, String Length)
                            var slice = "", stringLength = LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength)
                                // Logic
                                if (index < length + 1 && index < stringLength + 1) {
                                    // (Loop > )Update > ...
                                    (length > stringLength - 1) && (length = stringLength - 1);
                                    while (index ^ length + 1) { slice += string[index]; index += 1 }
                                }

                                else if (index > length) {
                                    // Update > Slice
                                    slice += LDKF.stringPrototypeSlice(string, +0, length > stringLength - 1 ? stringLength : length);
                                    (index < stringLength) && (slice += LDKF.stringPrototypeSlice(string, index, stringLength))
                                }

                            // Return
                            return slice
                        };

                        // Start --- CHECKPOINT (Lapys)

                        // Trim
                        LapysDevelopmentKit.Functions.stringPrototypeTrim = function stringPrototypeTrim(string, substring) {
                            // Update > Arguments
                            arguments[+0] = LDKF.stringPrototypeTrimRight.apply(LDKF, arguments);

                            // Return
                            return LDKF.stringPrototypeTrimLeft.apply(LDKF, arguments)
                        };

                        // Trim Left
                        LapysDevelopmentKit.Functions.stringPrototypeTrimLeft = function stringPrototypeTrimLeft(string, substring) {
                            // Initialization > (Length, Trimmed)
                            var length = LDKF.getArgumentsLength(arguments), trimmed = string;

                            // Logic
                            if (length > 1) {
                                // Initialization > ((Cut, String) Length, Iterator)
                                var cutLength = +0, iterator = length,
                                    stringLength = LDKF.stringPrototypeLength(string);

                                // Logic
                                if (stringLength) {
                                    // Loop
                                    while (iterator -= 1) {
                                        // Initialization > Trim
                                        var trim = arguments[length - iterator];

                                        // Update > Trim --- NOTE (Lapys) -> Convert all "Sub String"'s to arrays.
                                        LDKF.isString(trim) && (trim = [trim]);

                                        // Initialization > Trim (Length, Iterator)
                                        var trimLength = LDKF.arrayPrototypeLength(trim), trimIterator = trimLength;

                                        // Loop
                                        while (cutLength ^ stringLength && trimIterator)
                                            // Loop
                                            while (trimIterator) {
                                                // Initialization > (Trim Element) (Iterator, Length)
                                                var trimElement = trim[trimIterator -= 1],
                                                    trimElementIterator = +0, trimElementLength = LDKF.stringPrototypeLength(trimElement);

                                                // Logic
                                                if (trimElementLength < stringLength - cutLength + 1)
                                                    // Loop
                                                    while (trimElementIterator ^ trimElementLength) {
                                                        // Logic > Update > (Cut Length, Trim Iterator)
                                                        if (LDKF.stringPrototypeCharacterAt(string, cutLength) == LDKF.stringPrototypeCharacterAt(trimElement, trimElementIterator)) { cutLength += 1; trimIterator = trimLength }

                                                        // Update > Trim Element Iterator
                                                        trimElementIterator += 1
                                                    }
                                            }
                                    }

                                    // Update > Trimmed
                                    trimmed = LDKF.stringPrototypeCutLeft(string, cutLength)
                                }
                            }

                            else
                                // Update > Trimmed
                                trimmed = LDKF.stringPrototypeTrimLeft(trimmed, [' ', '\n']);

                            // Return
                            return trimmed
                        };

                        // Trim Right
                        LapysDevelopmentKit.Functions.stringPrototypeTrimRight = function stringPrototypeTrimRight(string, substring) {
                            // Initialization > (Length, Trimmed)
                            var length = LDKF.getArgumentsLength(arguments), trimmed = string;

                            // Logic
                            if (length > 1) {
                                // Initialization > ((Cut, String) Length, Iterator)
                                var cutLength = +0, iterator = length,
                                    stringLength = LDKF.stringPrototypeLength(string);

                                // Logic
                                if (stringLength) {
                                    // Loop
                                    while (iterator -= 1) {
                                        // Initialization > Trim
                                        var trim = arguments[length - iterator];

                                        // Update > Trim --- NOTE (Lapys) -> Convert all "Sub String"'s to arrays.
                                        LDKF.isString(trim) && (trim = [trim]);

                                        // Initialization > Trim (Length, Iterator)
                                        var trimLength = LDKF.arrayPrototypeLength(trim), trimIterator = trimLength;

                                        // Loop
                                        while (cutLength ^ stringLength && trimIterator)
                                            // Loop
                                            while (trimIterator) {
                                                // Initialization > (Trim Element) (Iterator, Length)
                                                var trimElement = trim[trimIterator -= 1],
                                                    trimElementLength = LDKF.stringPrototypeLength(trimElement), trimElementIterator = trimElementLength;

                                                // Logic > Loop > Update > (Cut Length, Trim Iterator)
                                                if (trimElementLength < stringLength - cutLength + 1) while (trimElementIterator && LDKF.stringPrototypeCharacterAt(string, stringLength - cutLength - 1) == LDKF.stringPrototypeCharacterAt(trimElement, trimElementIterator -= 1)) { cutLength += 1; trimIterator = trimLength }
                                            }
                                    }

                                    // Update > Trimmed
                                    trimmed = LDKF.stringPrototypeCutRight(string, cutLength)
                                }
                            }

                            else
                                // Update > Trimmed
                                trimmed = LDKF.stringPrototypeTrimRight(trimmed, [' ', '\n']);

                            // Return
                            return trimmed
                        };

                        // Upper --- CHECKPOINT (Lapys)

                // Throw Error --- CHECKPOINT (Lapys)

                // Throw Feature Not Native Error --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.throwFeatureNotNativeError = function throwFeatureNotNativeError() {};

                // Throw LapysJS Error --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.throwLapysJSError = function throwLapysJSError() {};

                // Throw LapysJS Initiate Error --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.throwLapysJSInitiateError = function throwLapysJSInitiateError() {};

                // Throw LapysJS Terminate Error --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.throwLapysJSTerminateError = function throwLapysJSTerminateError() {};

                // Throw LapysJS Update Error --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.throwLapysJSUpdateError = function throwLapysJSUpdateError() {};

                // Throw Non-Specified Error --- NOTE (Lapys) -> Throw non-specified exception (not necessarily an `Error` object).
                LapysDevelopmentKit.Functions.throwNonSpecifiedError = function throwNonSpecifiedError() { throw ANY };

                // Throw Type Error --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.throwTypeError = function throwTypeError() {};

                // To Number
                LapysDevelopmentKit.Functions.toNumber = function toNumber(arg) {
                    // Initialization > Number
                    var number = arg;

                    // Logic
                    if (LDKF.isNumber(arg))
                        // Update > Number
                        number = arg - +0;

                    else {
                        // Initialization > Is Casted
                        var isCasted = false;

                        // Error Handling > Logic > Update > Number --- NOTE (Lapys) -> Unfortunately, converting an Argument to number can be very error-prone.
                        try { number = arg - +0; isCasted = true } catch (error) {}
                        try { if (!isCasted) { number = LDKO.number(arg); isCasted = true } } catch (error) {}
                        try { if (!isCasted) { number = LDKF.toNumber(LDKF.toString(arg)); isCasted = true } } catch (error) {}
                    }

                    // Return
                    return number
                };

                // To String
                LapysDevelopmentKit.Functions.toString = function toString(arg, USE_STRING_CONCATENATION) {
                    // Initialization > String
                    var string = null;

                    // Error Handling > ...
                    try { (USE_STRING_CONCATENATION || !LDKF.isSymbol(arg)) && (string = "" + arg) }
                    catch (error) { if (!USE_STRING_CONCATENATION) try { LDKO.string && (string = LDKO.string(arg)) } catch (error) {} }

                    // Error
                    LDKF.isNull(string) && LDKF.throwTypeError("Cannot convert argument to a string");

                    // Return
                    return string
                };

            /* Information */
                // Messages
                    // Debugging > (Prefix, Suffix)
                    LapysDevelopmentKit.Information.Messages.Debugging.Prefix = "[LapysJS v" + VERSION + "] ->\n\t";
                    LapysDevelopmentKit.Information.Messages.Debugging.Suffix = '\n';

                    // Error > ... --- REDACT
                    LapysDevelopmentKit.Information.Messages.Error.CompatibleWithLibrarySuffix = " is not compatible with the LapysJS library";
                    LapysDevelopmentKit.Information.Messages.Error.JavaScriptEngineSupportSuffix = " must be supported by this JavaScript engine";
                    LapysDevelopmentKit.Information.Messages.Error.LibraryIsPreinstalled = "The LapysJS library is already installed";
                    LapysDevelopmentKit.Information.Messages.Error.NativeToEnvironmentSuffix = " must be native to this development environment";

                // Settings
                    // Debug Mode --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Allows global & public access to the Lapys Development Kit if set to `true`.
                    LapysDevelopmentKit.Information.Settings.DebugMode = LapysJS.debugMode;

                    // Public Mode --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Prevents security testing for native JavaScript features before integration into the Lapys Development Kit if set to `true`.
                    LapysDevelopmentKit.Information.Settings.PublicMode = LapysJS.publicMode;

            /* Test */
                // Object > Prototype
                    // Can Parse Strings
                    LapysDevelopmentKit.Test.canParseStrings = function canParseStrings() { return typeof LDKO.stringPrototypeCharacterAt == "function" };

                    // Is Native Constructor Of Object
                    LapysDevelopmentKit.Test.objectPrototypeIsNativeConstructorOfObject = function objectPrototypeIsNativeConstructorOfObject(object, propertyName, CONSTRUCTOR, ASSERT_BY_CONSTRUCTOR_VALUE) { return LDKT.objectPrototypeIsNativeMethodOfObject(object, propertyName, STRICT = CONSTRUCTOR) && LDKF.objectPrototypeIsOfConstructor(object, CONSTRUCTOR || object[propertyName], STRICT = ASSERT_BY_CONSTRUCTOR_VALUE) };

                    // Is Native Method Of Object
                    LapysDevelopmentKit.Test.objectPrototypeIsNativeMethodOfObject = function objectPrototypeIsNativeMethodOfObject(object, propertyName, METHOD) {
                        // Error Handling
                        try {
                            // Initialization > Method
                            var method = METHOD || object[propertyName];

                            // Return
                            return LDKT.canParseStrings() && (
                                LDKF.isFunction(method) && LDKF.functionPrototypeHasStandardSource(method) &&
                                LDKF.functionPrototypeIsNative(method) && (LDKF.functionPrototypeName(method) || propertyName) == propertyName
                            )
                        } catch (error) {}

                        // Return
                        return false
                    };

            /* Mathematics */
                // Absolute --- NOTE (Lapys) -> This method assumes integers are stored as 32-bit two`s-complement values and that right-shifting performs sign extension.
                LapysDevelopmentKit.Mathematics.abs = function abs(number) { var mask = number >> 31; return (mask ^ number) - mask };

                // Ceiling
                LapysDevelopmentKit.Mathematics.ceil = function ceil(number) { return LDKM.int(number) + !!(number % 1) };

                // Integer
                LapysDevelopmentKit.Mathematics.int = function int(number) { return number - number % 1 };

                // Integer Multiplication --- CITE (Lapys) -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill`.
                LapysDevelopmentKit.Mathematics.imul = function imul(numberA, numberB) {
                    // Initialization > Number (A, B) (Maximum, Minimum)
                    var numberAMaximum = (numberA >>> 16) & 0xFFFF, numberAMinimum = numberA & 0xFFFF,
                        numberBMaximum = (numberB >>> 16) & 0xFFFF, numberBMinimum = numberB & 0xFFFF;

                    // Return --- NOTE (Lapys) -> Sign unsigned value.
                    return ((numberAMinimum * numberBMinimum) + (((numberAMaximum * numberBMinimum + numberAMinimum * numberBMaximum) << 16) >>> +0) | +0)
                };

                // Maximum --- NOTE (Lapys) -> Slower than the native `Math.max` method.
                LapysDevelopmentKit.Mathematics.max = function max() {
                    // Initialization > (Iterator, Maximum)
                    var iterator = LDKF.getArgumentsLength(arguments), maximum = iterator ? arguments[0] : null;

                    // Loop
                    while (iterator && ~iterator) {
                        // Initialization > Number A
                        var numberA = arguments[iterator -= 1];

                        // Logic
                        if (iterator) {
                            // Initialization > Number B
                            var numberB = arguments[iterator -= 1];

                            // Update > Number A (Lapys) -> Re-purpose Number A.
                            numberA = numberA > numberB ? numberA : numberB
                        }

                        // Update > Maximum
                        maximum = maximum > numberA ? maximum : numberA
                    }

                    // Return
                    return maximum
                };

                // Minimum --- NOTE (Lapys) -> Slower than the native `Math.min` method.
                LapysDevelopmentKit.Mathematics.min = function min() {
                    // Initialization > (Iterator, Maximum)
                    var iterator = LDKF.getArgumentsLength(arguments), minimum = iterator ? arguments[0] : null;

                    // Loop
                    while (iterator && ~iterator) {
                        // Initialization > Number A
                        var numberA = arguments[iterator -= 1];

                        // Logic
                        if (iterator) {
                            // Initialization > Number B
                            var numberB = arguments[iterator -= 1];

                            // Update > Number A (Lapys) -> Re-purpose Number A.
                            numberA = numberA < numberB ? numberA : numberB
                        }

                        // Update > Minimum
                        minimum = minimum < numberA ? minimum : numberA
                    }

                    // Return
                    return minimum
                };

                // Random
                LapysDevelopmentKit.Mathematics.random = function random() { return LDKM.random.randomizer() };
                    // Generate Seed ---- NOTE (Lapys) -> Creates a XOR FNV 1A state.
                    LapysDevelopmentKit.Mathematics.random.generateSeeder = function xfnv1a(seed) {
                        // Initialization > (Iterator, Length, ...)
                        var iterator = +0,
                            length = LDKF.stringPrototypeLength(seed ? seed : seed = ""),
                            tmp = 0x811C9DC5 >>> +0 /* NOTE (Lapys) -> Un-sign the number within a specific range. */;

                        // Loop
                        while (iterator ^ length) {
                            // Update > (..., Iterator)
                            tmp = LDKM.imul(tmp ^ LDKF.stringPrototypeCharacterCodeAt(seed, iterator), 0x1000193);
                            iterator += 1
                        }

                        // Return
                        return function seeder() {
                            // Update > ...
                            tmp += tmp << 13; tmp ^= tmp >>> 7;
                            tmp += tmp << 3; tmp ^= tmp >>> 17;

                            // Return
                            return (tmp += tmp << 5) >>> +0
                        }
                    };

                    // Generate Randomizer --- NOTE (Lapys) -> Or use Mulberry 32 (although it doesn't care about the Birthday Problem).
                    LapysDevelopmentKit.Mathematics.random.generateRandomizer = function sfc32(hashA, hashB, hashC, hashD) {
                        // Return
                        return function randomizer() {
                            // Update > Hash (A, B, C, D)
                            hashA >>>= +0; hashB >>>= +0; hashC >>>= +0; hashD >>>= +0;

                            // Initialization > Temporary
                            var tmp = (hashA + hashB) | +0;

                            // Update > (Hash (A, B, C, D), Temporary)
                            hashA = hashB ^ hashB >>> 9; hashB = hashC + (hashC << 3) | +0; hashC = (hashC << 21 | hashC >>> 11); hashD = hashD + 1 | +0;
                            tmp = tmp + hashD | +0;
                            hashC = hashC + tmp | +0;

                            // Return
                            return (tmp >>> +0) / 4294967296
                        }
                    };

                    // Randomizer
                    LapysDevelopmentKit.Mathematics.random.randomizer = (function(seeder) { return LDKM.random.generateRandomizer(seeder(), seeder(), seeder(), seeder()) })(LDKM.random.generateSeeder("LapysJS"));

                /* [Ranged] Rebound
                        --- NOTE (Lapys) ->
                            - Has common use in public array/ string manipulation methods.
                            - Revolve an Index through an infinite series with boundaries of Start and End.
                */
                LapysDevelopmentKit.Mathematics.rebound = function rebound(index, start, end) {
                    // Logic
                    if (index >= start && index <= end)
                        // Return
                        return index;

                    else {
                        // Initialization > Difference
                        var difference = end - start;

                        // Logic > ...
                        if (index < start) { while (LDKM.abs(start - index) > difference) index += difference; return end - LDKM.abs(start - index) }
                        else if (index > end) { while (LDKM.abs(end - index) > difference) index -= difference; return start + LDKM.abs(end - index) }
                    }
                };

                // Unsign
                LapysDevelopmentKit.Mathematics.unsign = function unsign(number) { return number >>> +0 };

            /* Storage */
                // Registry > ... --- REDACT (Lapys)
                LapysDevelopmentKit.Storage.Registry.TimeoutID = [];

            /* Objects
                    --- NOTE ---
                        #Lapys: Most validation-based syntax begins from here.
                            As stated at the beginning of this document,
                            the LapysJS library implicitly avoids modern ECMAScript features which are not compatible with legacy code to allow for universal compatibility.

                            This is done by security-checking each requested (by the library) native feature of the JavaScript language
                            to prevent the user from conforming the library to non-standardized forms i.e.:
                                The library solely communicates with the ECMAScript standard, not the developer`s interpretation.
            */
                // String > Prototype
                    // Character At --- NOTE (Lapys) -> This method is critical to most of LapysJS` functionality.
                    LapysDevelopmentKit.Objects.stringPrototypeCharacterAt = (function() {
                        // Initialization > Method
                        var method = "".charAt;

                        // Logic > ...
                        if (
                            LDKT.objectPrototypeIsNativeMethodOfObject("", "charAt", STRICT = method) ||
                            (function() { try { return method.call(' ', +0) == ' ' } catch (error) {} return false })()
                        ) return method;
                        else LDKF.throwFeatureNotNativeError("`String.prototype.charAt` method")
                    })();

                    // Character Code At
                    LapysDevelopmentKit.Objects.stringPrototypeCharacterCodeAt = (function() {
                        // Initialization > Method
                        var method = "".charCodeAt;

                        // Logic > ...
                        if (
                            LDKT.objectPrototypeIsNativeMethodOfObject("", "charCodeAt", STRICT = method) ||
                            (function() { try { return LDKF.isNumber(method.call(' ', +0)) } catch (error) {} return false })()
                        ) return method;
                        else LDKF.throwFeatureNotNativeError("`String.prototype.charAt` method")
                    })();

                // Object --- UPDATE REQUIRED (Lapys) -> Is there a "safe" way to collect this value?
                LapysDevelopmentKit.Objects.object = (function() {
                    // Initialization > Constructor
                    var constructor = ANY.constructor;

                    // Logic > ...
                    if (
                        LDKT.objectPrototypeIsNativeConstructorOfObject(null, "Object", STRICT = constructor, STRICT = true) && (function() {
                            // Error Handling
                            try {
                                // Return --- NOTE (Lapys) -> Test all literals to naïvely confirm .
                                return (function(array) { return typeof array == "object" })(constructor([])) &&
                                    (function(boolean) { return typeof boolean == "object" && LDKF.isNumber(boolean - +0) })(constructor(false)) &&
                                    (function(number) { return typeof number == "object" && LDKF.isNumber(number - +0) })(constructor(+0)) &&
                                    (function(string) { return typeof string == "object" && LDKF.isString(string + "") })(constructor("")) &&
                                    (function(regularExpression) { return typeof regularExpression == "object" })(constructor(/(?:)/)) &&
                                    (function(routine) { return LDKF.isFunction(routine) })(constructor(function() {}))
                            } catch (error) {}

                            // Return
                            return false
                        })()
                    ) return constructor;
                    else LDKF.throwFeatureNotNativeError("`Object` constructor")
                })();
                    // Create --- CHECKPOINT (Lapys)
                    // Define Getter --- CHECKPOINT (Lapys)
                    // Define Property --- CHECKPOINT (Lapys)
                    // Define Setter --- CHECKPOINT (Lapys)
                    // Get Own Property Descriptor --- CHECKPOINT (Lapys)
                    // Get Own Property Names --- CHECKPOINT (Lapys)
                    // Get Own Property Symbols --- CHECKPOINT (Lapys)

                    // Get Prototype Of
                    LapysDevelopmentKit.Objects.objectGetPrototypeOf = (function() {
                        // Initialization > Method
                        var method = LDKO.object.getPrototypeOf;

                        // Logic
                        if (LDKT.objectPrototypeIsNativeMethodOfObject(LDKO.object, "getPrototypeOf", STRICT = method))
                            // Return
                            return method;

                        else if (LDKF.isVoid(method) && LDKC.has___proto___Property)
                            // Return
                            return function getPrototypeOf(object) {
                                // Initialization > Prototype
                                var prototype = object.__proto__;

                                // Logic
                                if (LDKF.isVoid(prototype)) {
                                    // Initialization > Constructor
                                    var constructor = object.constructor;

                                    // Update > Prototype
                                    LDKF.objectPrototypeIsOfConstructor(object, constructor, STRICT = true) && (prototype = constructor.prototype)
                                }

                                // Logic > ...
                                if (typeof prototype == "object") return prototype;
                                else LDKF.throwTypeError("Object prototype must be an object itself")
                            };

                        else
                            // Error
                            LDKF.throwFeatureNotNativeError("`Object.getPrototypeOf` method")
                    })();

                    // Keys --- CHECKPOINT (Lapys)
                    // Lookup Getter --- CHECKPOINT (Lapys)
                    // Lookup Setter --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Fortunately, the `prototype` property of constructors (or functions) are immutable.
                    // Set Prototype Of --- CHECKPOINT (Lapys) --- CITE (Lapys) -> `https://gist.github.com/edoardocavazza/47246856759f2273e48b`

            /* Constants --- NOTE (Lapys) -> Constants are derived from objects. */
                // Has Define Getter Method --- CHECKPOINT (Lapys)
                // Has Define Setter Method --- CHECKPOINT (Lapys)
                // Has Lookup Getter Method --- CHECKPOINT (Lapys)
                // Has Lookup Setter Method --- CHECKPOINT (Lapys)
                // Has `__proto__` Property --- CHECKPOINT (Lapys)
                // Is Browser Environment --- CHECKPOINT (Lapys)

            /* Objects --- NOTE (Lapys) -> Collect a myriad of native JavaScript values. */
                // Abort Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Boolean --- CHECKPOINT (Lapys)

                // Constraint Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Constraint Not Satisfied Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Data Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Data Clone Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Devices Not Found Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // DOM Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // DOM Exception --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Encoding Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Function --- CHECKPOINT (Lapys)

                // Type Error --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Some error constructors will be thrown and caught instead of queried.
                    // Prototype --- CHECKPOINT (Lapys)

                // Error --- CHECKPOINT (Lapys)
                    // Capture Stack Trace --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Evaluate --- CHECKPOINT (Lapys)
                // Evaluation Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Event Exception --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Function --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Hierarchy Request Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Index Size Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Internal Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Invalid Access Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Invalid Character Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Invalid Modification Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Invalid Node Type Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Invalid State Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Media Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Media Key Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Media Stream Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Microsoft Media Key Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Namespace Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Navigator User Media Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Network Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // No Modification Allowed Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Not Allowed Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Not Found Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Not Readable Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Not Supported Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Number --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Operation Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Over-Constrained Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Permission Denied Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Quota Exceeded Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Range Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Read-Only Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Reference Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Regular Expression --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Security Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Speech Recognition Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // String --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Symbol --- CHECKPOINT (Lapys)
                    // Iterator --- CHECKPOINT (Lapys)
                    // Species --- CHECKPOINT (Lapys) -> Might be useful for class constructor behavior?
                    // To String Tag --- CHECKPOINT (Lapys)

                // Syntax Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Timeout Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Track Start Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Transaction Inactive Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Type Mismatch Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Unknown Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // URI Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // URL Mismatch Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Version Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Webkit Speech Recognition Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Wrong Document Error --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

            /* Constants */
                // Allows `class` Keyword --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Some environments have the `class` keyword, but not support it.
                // Is Angular JS Environment --- CHECKPOINT (Lapys)
                // Is Electron JS Environment --- CHECKPOINT (Lapys)
                // Is jQuery Environment --- CHECKPOINT (Lapys)
                // Is Node.js Environment --- CHECKPOINT (Lapys)
                // Is React JS Environment --- CHECKPOINT (Lapys)
                // Is Vue JS Environment --- CHECKPOINT (Lapys)

            /* Environment --- NOTE (Lapys) -> Fortunately, the `typeof` keyword does not assert `ReferenceError`'s. */

        /* Global --- NOTE (Lapys) -> Add unto the global object with the already collected data in the Lapys Development Kit. */
            /* LapysJS --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Purposely made complicated as a JavaScript object. */
                // Temporary Data > Evaluation Scope --- CHECKPOINT (Lapys)
                // Version --- CHECKPOINT (Lapys)

        /* Lapys Development Kit --- NOTE (Lapys) -> Continue updating the L.D.K. */
            /* Data */
                // LapysJS Error --- CHECKPOINT (Lapys)
                    // LapysJS Phase Error --- CHECKPOINT (Lapys)
                        // LapysJS Initiate Error --- CHECKPOINT (Lapys)
                        // LapysJS Terminate Error --- CHECKPOINT (Lapys)
                        // LapysJS Update Error --- CHECKPOINT (Lapys)

                // LapysJS Node List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Pseudo Number --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Safe Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Safe Number --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

            /* Constants, Objects --- NOTE (Lapys) -> Continue collecting a myriad of native JavaScript values. */
                // Active X Object --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Attribute --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Audio Parameter Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Cancel Animation Frame --- CHECKPOINT (Lapys)
                // Clear Timeout --- CHECKPOINT (Lapys)
                // CSS Numeric Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // CSS Rule List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // CSS Style Declaration --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Custom Element Registry --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Define --- CHECKPOINT (Lapys)

                // Data Transfer Item List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Date --- CHECKPOINT (Lapys)
                    // Now --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Document --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Register Element --- CHECKPOINT (Lapys)

                // Document Fragment --- CHECKPOINT (Lapys)
                // Document Type --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // DOM Rectangle --- CHECKPOINT (Lapys)
                // DOM Rectangle List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // DOM String List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // DOM Token List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Event --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Event Target --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // File --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // File List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // HTML All Collection --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // HTML Audio Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Body Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Collection --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // HTML Document --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Form Controls Collection --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // HTML Head Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Image Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Input Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Internal Frame Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML HTML Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Options Collection --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // HTML Table Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Table Caption Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Table Cell Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Table Column Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Table Row Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Table Section Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML TextArea Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Time Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Title Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Script Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Style Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Unknown Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // HTML Video Element --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Image --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // Math --- CHECKPOINT (Lapys)
                // Media Key Status Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // Media List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // MIDI Input Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // MIDI Output Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // MIME Type Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Mutation Event --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Named Node Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Node --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Document Type Node --- CHECKPOINT (Lapys)
                        // Element Node --- CHECKPOINT (Lapys)

                // Node List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Notification --- CHECKPOINT (Lapys)
                // Performance --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Now --- CHECKPOINT (Lapys)

                // Plugin Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Radio Node List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Range --- CHECKPOINT (Lapys)
                // Request Animation Frame --- CHECKPOINT (Lapys)
                // Selection --- CHECKPOINT (Lapys)
                // Set --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Set Timeout --- CHECKPOINT (Lapys)
                // Source Buffer List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Style Property Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // Style Property Map Read-Only --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // Style Sheet List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // SVG Length --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // SVG Length List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Item --- CHECKPOINT (Lapys)

                // SVG Number List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Item --- CHECKPOINT (Lapys)

                // SVG Point List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Item --- CHECKPOINT (Lapys)

                // SVG String List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Item --- CHECKPOINT (Lapys)

                // SVG Transform List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Item --- CHECKPOINT (Lapys)

                // Text --- CHECKPOINT (Lapys)
                // Text Track Cue List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Cue By ID --- CHECKPOINT (Lapys)

                // Text Track List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Track By ID --- CHECKPOINT (Lapys)

                // Touch --- CHECKPOINT (Lapys)
                // Touch List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Weak Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // Weak Set --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Webkit Speech Grammar List ---  CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Window --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // XML Document --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // XML HTTP Request Event Target --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // 8-Bit Integer Array --- CHECKPOINT (Lapys)
                // 8-Bit Unsigned Integer Array --- CHECKPOINT (Lapys)
                // 8-Bit Unsigned Clamped Integer Array --- CHECKPOINT (Lapys)
                // 16-Bit Integer Array --- CHECKPOINT (Lapys)
                // 16-Bit Unsigned Integer Array --- CHECKPOINT (Lapys)
                // 32-Bit Float Array --- CHECKPOINT (Lapys)
                // 32-Bit Integer Array --- CHECKPOINT (Lapys)
                // 32-Bit Unsigned Integer Array --- CHECKPOINT (Lapys)
                // 64-Bit Big Integer Array --- CHECKPOINT (Lapys)
                // 64-Bit Big Unsigned Integer Array --- CHECKPOINT (Lapys)
                // 64-Bit Float Array --- CHECKPOINT (Lapys)

            /* Constants, Objects */
                // Console
                    // Group --- CHECKPOINT (Lapys)
                    // Group End --- CHECKPOINT (Lapys)
                    // Log --- CHECKPOINT (Lapys)
                    // Warn --- CHECKPOINT (Lapys)

                // Custom Elements --- CHECKPOINT (Lapys)
                // Document
                    // Create Element --- CHECKPOINT (Lapys)
                // HTML LapysJS Element --- CHECKPOINT (Lapys)
                // Performance --- CHECKPOINT (Lapys)

            /* Constants */
                // Has Active X Object Constructor --- CHECKPOINT (Lapys)
                // Has Performance Object --- CHECKPOINT (Lapys)
                // Supports Custom Elements --- CHECKPOINT (Lapys)

            /* Objects */
                // Element > Prototype
                    // Get Attribute --- CHECKPOINT (Lapys)
                    // Get Attribute Node --- CHECKPOINT (Lapys)
                    // Get Bounding Client Rectangle --- CHECKPOINT (Lapys)
                    // Get Client Rectangles --- CHECKPOINT (Lapys)
                    // Get Elements By Tag Name --- CHECKPOINT (Lapys)
                    // Has Attribute --- CHECKPOINT (Lapys)
                    // Has Attributes --- CHECKPOINT (Lapys)
                    // Insert Adjacent Element --- CHECKPOINT (Lapys)
                    // Insert Adjacent HTML --- CHECKPOINT (Lapys)
                    // Insert Adjacent Text --- CHECKPOINT (Lapys)
                    // Remove Attribute --- CHECKPOINT (Lapys)
                    // Remove Attribute Node --- CHECKPOINT (Lapys)
                    // Set Attribute --- CHECKPOINT (Lapys)
                    // Set Attribute Node --- CHECKPOINT (Lapys)

                // Event Target > Prototype
                    // Add Event Listener --- CHECKPOINT (Lapys)
                    // Attach Event --- CHECKPOINT (Lapys)
                    // Detach Event --- CHECKPOINT (Lapys)
                    // Remove Event Listener --- CHECKPOINT (Lapys)

                // HTML Element > Prototype
                    // Blur --- CHECKPOINT (Lapys)
                    // Click --- CHECKPOINT (Lapys)
                    // Focus --- CHECKPOINT (Lapys)

                // Node > Prototype
                    // Append Child --- CHECKPOINT (Lapys)
                    // Clone Node --- CHECKPOINT (Lapys)
                    // Contains --- CHECKPOINT (Lapys)
                    // Has Child Nodes --- CHECKPOINT (Lapys)
                    // Insert Before --- CHECKPOINT (Lapys)
                    // Normalize --- CHECKPOINT (Lapys)
                    // Remove Child --- CHECKPOINT (Lapys)
                    // Replace Child --- CHECKPOINT (Lapys)

        /* Global > ... --- CHECKPOINT (Lapys) --- REDACT (Lapys) */
        window.LapysDevelopmentKit = LapysDevelopmentKit;
        window["LDK"] = LapysDevelopmentKit;
        window["LDKC"] = LapysDevelopmentKit.Constants;
        window["LDKD"] = LapysDevelopmentKit.Data;
        window["LDKE"] = LapysDevelopmentKit.Environment;
        window["LDKF"] = LapysDevelopmentKit.Functions;
        window["LDKI"] = LapysDevelopmentKit.Information;
        window["LDKM"] = LapysDevelopmentKit.Mathematics;
        window["LDKO"] = LapysDevelopmentKit.Objects;
        window["LDKS"] = LapysDevelopmentKit.Storage;
        window["LDKT"] = LapysDevelopmentKit.Test;

    /* Phase */
        /* Initiate --- CHECKPOINT (Lapys) */
        function Initiate() {
            // Warn --- CHECKPOINT (Lapys) -> Warn about missing properties such as `__defineGetter__` (or `__defineSetter__`) or `__proto__`.

            /* Modification */
                /* LapysJS */
                    // Components
                        // Accordion --- CHECKPOINT (Lapys)
                        // Audio --- CHECKPOINT (Lapys)
                        // Carousel --- CHECKPOINT (Lapys)
                        // Drag-Drop --- CHECKPOINT (Lapys)
                        // Dropdown --- CHECKPOINT (Lapys)
                        // Dynamic Text --- CHECKPOINT (Lapys)
                        // Dynamic Time --- CHECKPOINT (Lapys)
                        // Marquee --- CHECKPOINT (Lapys)
                        // Pagination --- CHECKPOINT (Lapys)
                        // Picture-In-Picture --- CHECKPOINT (Lapys)
                        // Scrollbar --- CHECKPOINT (Lapys)
                        // Table --- CHECKPOINT (Lapys)
                        // Toast --- CHECKPOINT (Lapys)
                        // Tooltip --- CHECKPOINT (Lapys)
                        // Video --- CHECKPOINT (Lapys)

                    // Debug Mode --- CHECKPOINT (Lapys)
                    // Features
                        // HTML Conditional Elements --- CHECKPOINT (Lapys)
                        // HTML Include Elements --- CHECKPOINT (Lapys)
                        // Script Attribute --- CHECKPOINT (Lapys)

                // Array --- NOTE (Lapys) -> From here, most of these modifications will be polyfills or added features.
                    // Distinct --- CHECKPOINT (Lapys)
                    // First --- CHECKPOINT (Lapys)
                    // Last --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Date > Prototype
                    // Now --- CHECKPOINT (Lapys)
                    // To ISO String --- CHECKPOINT (Lapys)

                // Element > Prototype
                    // Momentum Scroll By --- CHECKPOINT (Lapys)
                    // Momentum Scroll Into View --- CHECKPOINT (Lapys)
                    // Momentum Scroll To --- CHECKPOINT (Lapys)

                // Function > Prototype --- CHECKPOINT (Lapys)

                // Object > Prototype
                    // Define --- CHECKPOINT (Lapys)
                    // Describe --- CHECKPOINT (Lapys)
                    // Free --- CHECKPOINT (Lapys)
                    // Freeze --- CHECKPOINT (Lapys)
                    // Keys --- CHECKPOINT (Lapys)
                    // Melt --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> The `__proto__` property.
                    // Prototype Chain --- CHECKPOINT (Lapys)
                    // Undefine --- CHECKPOINT (Lapys)
                    // Values --- CHECKPOINT (Lapys)

                // String > Prototype
                    // To HTML --- CHECKPOINT (Lapys)
                    // Trim --- CHECKPOINT (Lapys)
                    // Trim End --- CHECKPOINT (Lapys)
                    // Trim Left --- CHECKPOINT (Lapys)
                    // Trim Right --- CHECKPOINT (Lapys)
                    // Trim Start --- CHECKPOINT (Lapys)

                /* Global */
                    // Application --- CHECKPOINT (Lapys)
                    // Array --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Boolean
                        // AND --- CHECKPOINT (Lapys)
                        // NAND --- CHECKPOINT (Lapys)
                        // NOR --- CHECKPOINT (Lapys)
                        // NOT --- CHECKPOINT (Lapys)
                        // OR --- CHECKPOINT (Lapys)
                        // XNOR --- CHECKPOINT (Lapys)
                        // XOR --- CHECKPOINT (Lapys)

                    // Boolean --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Browser --- CHECKPOINT (Lapys)
                    // Check --- CHECKPOINT (Lapys)
                    // Chain --- CHECKPOINT (Lapys)
                    // Copy --- CHECKPOINT (Lapys)
                    // Create Attribute --- CHECKPOINT (Lapys)
                    // Create Document Fragment --- CHECKPOINT (Lapys)
                    // Create Element --- CHECKPOINT (Lapys)
                    // Cut --- CHECKPOINT (Lapys)
                    // Download --- CHECKPOINT (Lapys)
                    // [Is] Execute[-able] --- CHECKPOINT (Lapys)
                    // File --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Float --- CHECKPOINT (Lapys)
                    // Free Input --- CHECKPOINT (Lapys)
                    // Function --- NOTE (Lapys) -> Not the constructor.
                        // Extend --- CHECKPOINT (Lapys)
                    // Global This --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Does not always match the global object.
                    // Integer --- CHECKPOINT (Lapys)
                    // Interval --- CHECKPOINT (Lapys)
                    /* Lapys Development Kit --- CHECKPOINT (Lapys) */
                    // Length --- CHECKPOINT (Lapys)
                    // Mathematics --- CHECKPOINT (Lapys)
                    // Maximum --- CHECKPOINT (Lapys)
                    // [Get] Maximum [Object] --- CHECKPOINT (Lapys)
                    // Minimum --- CHECKPOINT (Lapys)
                    // [Get] Minimum [Object] --- CHECKPOINT (Lapys)
                    // Momentum Scroll By --- CHECKPOINT (Lapys)
                    // Momentum Scroll Into View --- CHECKPOINT (Lapys)
                    // Momentum Scroll To --- CHECKPOINT (Lapys)
                    // Now --- CHECKPOINT (Lapys)
                    // Number --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Object
                        // Concatenate --- CHECKPOINT (Lapys)
                        // Define Property --- CHECKPOINT (Lapys)
                        // Flatten --- CHECKPOINT (Lapys)
                        // Get Depth --- CHECKPOINT (Lapys)
                        // Get Own Property Descriptor --- CHECKPOINT (Lapys)
                        // Get Own Property Descriptors --- CHECKPOINT (Lapys)
                        // Get Own Property Names --- CHECKPOINT (Lapys)
                        // Get Own Property Symbols --- CHECKPOINT (Lapys)
                        // Get Own Property Values --- CHECKPOINT (Lapys)
                        // Get Prototype Of --- CHECKPOINT (Lapys)
                        // Keys --- CHECKPOINT (Lapys)
                        // Port --- CHECKPOINT (Lapys)
                        // Set Prototype Of --- CHECKPOINT (Lapys)
                        // Watch --- CHECKPOINT (Lapys)

                    // Once --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Run a function once.
                    // On Attribute Added --- CHECKPOINT (Lapys)
                    // On Attribute Change --- CHECKPOINT (Lapys)
                    // On Attribute Count Change --- CHECKPOINT (Lapys)
                    // On Attribute Removed --- CHECKPOINT (Lapys)
                    // On DOM Change --- CHECKPOINT (Lapys)
                    // On DOM Node Added --- CHECKPOINT (Lapys)
                    // On DOM Node Count Change --- CHECKPOINT (Lapys)
                    // On DOM Node Removed --- CHECKPOINT (Lapys)
                    // On DOM Ready --- CHECKPOINT (Lapys)
                    // On Element Added --- CHECKPOINT (Lapys)
                    // On Element Change --- CHECKPOINT (Lapys)
                    // On Element Count Change --- CHECKPOINT (Lapys)
                    // On Element Removed --- CHECKPOINT (Lapys)
                    // On Node Added --- CHECKPOINT (Lapys)
                    // On Node Count Change --- CHECKPOINT (Lapys)
                    // On Node Removed --- CHECKPOINT (Lapys)
                    // On Property Added --- CHECKPOINT (Lapys)
                    // On Property Change --- CHECKPOINT (Lapys)
                    // On Property Count Change --- CHECKPOINT (Lapys)
                    // On Property Removed --- CHECKPOINT (Lapys)
                    // Paste --- CHECKPOINT (Lapys)
                    // Print --- CHECKPOINT (Lapys)
                    // Random --- CHECKPOINT (Lapys)
                    // Random Set --- CHECKPOINT (Lapys)
                    // Regular Expression --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Repeat --- CHECKPOINT (Lapys)
                    // String --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Strict[ly Watch] Input --- CHECKPOINT (Lapys)
                    // Symbol --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                    // Timeout --- CHECKPOINT (Lapys)
                    // When --- CHECKPOINT (Lapys)
                    // $a  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Parent Nodes Recursively (Ancestors) By Query Selector
                    // $c  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Elements By Class Attribute Value
                    // $d  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Immediate Children (Descendants) By Query Selector
                    // $i  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Elements By ID Attribute Value
                    // $n  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Next Sibling Nodes By Query Selector
                    // $p  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Previous Sibling Nodes By Query Selector
                    // $t  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Elements By Tag Name
                    // $$  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Nodes By Query Selector
        }

        /* Terminate --- CHECKPOINT (Lapys) */
        function Terminate() {}

        /* Update --- CHECKPOINT (Lapys) */
        function Update() {}

    /* Initiate
            --- NOTE ---
                #Lapys:
                    - Update the LapysJS object.
                    - Modify object prototypes (e.g.: `Array.prototype`, `Function.prototype` e.t.c.)
                        while adding polyfills for missing modern features.
                    - Initiate global functions and objects (e.g.: `array`, `func` e.t.c.)
    */
    try { LDKF.objectPrototypeDefineProperty(LapysJS.processingDuration, "initiate", {value: LDKF.functionPrototypeMeasure(Initiate)}) }
    catch (error) { LDKF.throwLapysJSInitiateError("Error initializing library:\n\t\r" + LDKF.errorPrototypeGetMessage(error)) }

    /* Update
            --- NOTE ---
                #Lapys:
                    - Integrate LapysJS components (e.g.: `Accordion`, `Tooltip`) during runtime.
                    - Integrate LapysJS features during runtime.
    */
    try { LDKF.objectPrototypeDefineProperty(LapysJS.processingDuration, "update", {value: LDKF.functionPrototypeMeasure(Update)}) }
    catch (error) { LDKF.throwLapysJSUpdateError("Error integrating library runtime:\n\t\r" + LDKF.errorPrototypeGetMessage(error)) }

    /* Terminate
            --- NOTE ---
                #Lapys:
                    - Notify user of the state of the library and library installation completion.
    */
    try {
        // ...
        LDKF.objectPrototypeDefineProperty(LapysJS.processingDuration, "terminate", {value: LDKF.functionPrototypeMeasure(Terminate)});
            LDKF.consoleLog("Processing Duration = ", LapysJS.processingDuration.initiate + LapysJS.processingDuration.update + LapysJS.processingDuration.terminate)
            LDKF.consoleLog('\n');
        LDKF.consoleGroupEnd()
    }
    catch (error) { LDKF.throwLapysJSTerminateError("Error completing library installation:\n\t\r" + LDKF.errorPrototypeGetMessage(error)) }

    // Return
    return +0
})()
