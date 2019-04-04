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
        // Global --- NOTE (Lapys) -> The global object of the current environment.
        var GLOBAL = null,

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
        undefined = void +0,

        // Unique --- NOTE (Lapys) -> Unique object.
        UNIQUE = {};

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

                // Keywords > (...) --- NOTE (Lapys) -> Store the keyword strings as arrays because older browsers defer to the `String.prototype.charAt` method rather than syntactic string indexing (i.e.: the `[]` operation).
                LapysDevelopmentKit.Constants.Keywords["extends"] = ['e', 'x', 't', 'e', 'n', 'd', 's'];
                LapysDevelopmentKit.Constants.Keywords.nativeFunctionCodes = [
                    ['[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'],
                    ['[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']']
                ];

                // String > (...)
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
                                while ((iterator -= 1) != halfLength) { array[iterator - 1] = arguments[iterator]; array[length - iterator - 1] = arguments[length - iterator] }
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
                                while (arrayIterator) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = arguments[length - iterator][arrayIterator] }

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
                                        while (index != arrayLength) array[index] = array[index += 1];

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
                                            while (arrayIterator != arrayLength) { array[arrayIterator] = array[arrayIterator + cutLength + 1]; arrayIterator += 1 }
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
                                boolean = length != 1;

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
                                while (filterLength != arrayLength && filter.call(array, filterLength, array[filterLength])) filterLength += 1;

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
                                while (arrayIterator != arrayLength) {
                                    // Initialization > Element
                                    var element = array[arrayIterator];

                                    // Logic --- NOTE (Lapys) -> Flatten the Element (Sub-Array) unto the Array.
                                    if (LDKF.isArray(element)) {
                                        // Initialization > (Array Index, Sub Array (Length, Iterator))
                                        var arrayIndex = arrayLength,
                                            subarray = element,
                                            subarrayLength = LDKF.arrayPrototypeLength(subarray), subarrayIterator = subarrayLength;

                                        // Loop > Update > (Sub Array Iterator, Array)
                                        while ((arrayIndex -= 1) != arrayIterator) array[arrayIndex + subarrayLength - 1] = array[arrayIndex];
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

                                    // Loop > (...)
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
                                    while (arrayIterator != quarterArrayLength) {
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
                                    while (arrayIterator != quarterArrayLength) {
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
                                while (arrayIterator != index) { arrayIterator -= 1; array[arrayIterator + 1] = array[arrayIterator] }
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
                                        while (arrayIterator != insertIndex) { arrayIterator -= 1; array[arrayIterator + insertionLength + 1] = array[arrayIterator] }
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
                                // Loop > (...); Return
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

                            // (Loop > )Update > (...)
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

                            // Loop > Update > (...)
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
                            while (arrayIterator != halfArrayLength) {
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
                                        while (arrayIterator != arrayLength) { array[arrayIterator] = array[arrayIterator + index]; arrayIterator += 1 }

                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength)
                                    }

                                    else if (index > length) {
                                        // (Loop > )Update > (...)
                                        (index > arrayLength - 1) && (index = arrayLength - 1);
                                        arrayLength = (arrayLength - index) + length + 1;
                                        while (length != index + 2) { length += 1; array[length] = array[arrayIterator + index]; arrayIterator += 1 }

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
                                            while (!~priority && (iterator != elementAStringLength && iterator != elementBStringLength)) {
                                                // Initialization > Element (A, B) String Character Index (Is Invalid)
                                                var elementAStringCharacterIndex = LDKF.arrayPrototypeIndexFromFront(LDKC.String.sortableCharacters, LDKF.stringPrototypeCharacterAt(elementAString, iterator), STRICT = 64),
                                                        elementAStringCharacterIndexIsInvalid = !~elementAStringCharacterIndex,
                                                    elementBStringCharacterIndex = LDKF.arrayPrototypeIndexFromFront(LDKC.String.sortableCharacters, LDKF.stringPrototypeCharacterAt(elementBString, iterator), STRICT = 64),
                                                        elementBStringCharacterIndexIsInvalid = !~elementBStringCharacterIndex;

                                                // Update > (Priority, Iterator)
                                                priority = ~elementBStringCharacterIndex;
                                                (elementAStringCharacterIndex == elementBStringCharacterIndex) ||
                                                (priority = +(elementAStringCharacterIndex != sorter(elementAStringCharacterIndex, elementBStringCharacterIndex, STRICT = true)));
                                                iterator += 1
                                            }

                                            // Update > Priority
                                            ~priority || (priority = +(iterator != elementAStringLength))
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
                                while (trimLength != arrayLength && array[trimLength] === element) trimLength += 1;

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

                        // Logic > (...)
                        if (USE_LENGTH_PROPERTY) LDKF.arrayPrototypeResize(array, length, STRICT = USE_LENGTH_PROPERTY);
                        else while (length) array[length -= 1] = undefined;

                        // Return
                        return array
                    };

                // Array-Like > Prototype
                    // Element At
                    // Length

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
                            while (functionBodySourceIndex != sourceLength) { functionBodySource += LDKF.stringPrototypeCharacterAt(source, functionBodySourceIndex); functionBodySourceIndex += 1 }

                            // Return
                            return functionBodySource
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
                                // Initialization > Uses Function Keyword
                                var usesFunctionKeyword = LDKF.stringPrototypeCharacterAt(source, +0) == 'f' && LDKF.stringPrototypeCharacterAt(source, 1) == 'u' && LDKF.stringPrototypeCharacterAt(source, 2) == 'n' && LDKF.stringPrototypeCharacterAt(source, 3) == 'c' && LDKF.stringPrototypeCharacterAt(source, 4) == 't' && LDKF.stringPrototypeCharacterAt(source, 5) == 'i' && LDKF.stringPrototypeCharacterAt(source, 6) == 'o' && LDKF.stringPrototypeCharacterAt(source, 7) == 'n';

                                // Logic
                                if (usesFunctionKeyword || LDKF.stringPrototypeCharacterAt(source, +0) == '(') {
                                    // Initialization > Iterator
                                    var hasIndexedFunctionSourceHead = false, iterator = +0;

                                    // Loop
                                    LDKF.iterateSource(source, function(character, index) {
                                        // Update > Function Head Source
                                        functionHeadSource += character;

                                        // Logic > Update > (...)
                                        switch (character) {
                                            case '(': iterator += 1; hasIndexedFunctionSourceHead || (hasIndexedFunctionSourceHead = true); break;
                                            case ')': iterator -= 1
                                        }

                                        // Logic > (...) --- NOTE (Lapys) -> Iterator serves a different purpose at this point of code.
                                        if (hasIndexedFunctionSourceHead && !iterator) { iterator = index; this.stop() }
                                    }, STRICT = false, STRICT = true);

                                    // [Additive Source] Logic
                                        // [Arrow]
                                        if (LDKF.functionPrototypeIsArrow(routine, STRICT = source))
                                            // Loop
                                            LDKF.iterateSource(source, function(character, index) {
                                                // Update > Function Head Source
                                                functionHeadSource += character;

                                                // Target > Stop
                                                (character == '>' && LDKF.stringPrototypeCharacterAt(source, index - 1) == '=') && this.stop()
                                            }, STRICT = false, STRICT = true, STRICT = iterator)
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
                        LapysDevelopmentKit.Functions.functionPrototypeIsClass = function functionPrototypeIsClass(routine, SOURCE_STRING) { var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine); return LDKF.stringPrototypeCharacterAt(source, +0) == 'c' && LDKF.stringPrototypeCharacterAt(source, 1) == 'l' && LDKF.stringPrototypeCharacterAt(source, 2) == 'a' && LDKF.stringPrototypeCharacterAt(source, 3) == 's' && LDKF.stringPrototypeCharacterAt(source, 4) == 's' };

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
                                    while (lookupSyntaxIterator != lookupSyntaxLength && lookupSyntax[lookupSyntaxIterator] == (lookupSyntaxIterator ? LDKF.stringPrototypeCharacterAt(source, index + lookupSyntaxIterator) : character))
                                        lookupSyntaxIterator += 1;

                                    // Logic
                                    if (lookupSyntaxIterator == lookupSyntaxLength) {
                                        // Update > Is Extended Class
                                        isExtendedClass = true;

                                        // Target > Stop
                                        this.stop()
                                    }
                                }, STRICT = true, STRICT = false, STRICT = 5)
                            }

                            // Return
                            return isExtendedClass
                        };

                        // Is Default
                        LapysDevelopmentKit.Functions.functionPrototypeIsDefault = function functionPrototypeIsDefault(routine, SOURCE_STRING) { return !LDKF.functionPrototypeIsArrow(routine, SOURCE_STRING) && !LDKF.functionPrototypeIsClass(routine, SOURCE_STRING) && !LDKF.functionPrototypeIsGenerator(routine, SOURCE_STRING) };

                        // Is Generator
                        LapysDevelopmentKit.Functions.functionPrototypeIsGenerator = function functionPrototypeIsGenerator(routine, SOURCE_STRING) {
                            // Initialization > (Is Generator, Source)
                            var isGenerator = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.stringPrototypeCharacterAt(source, +0) == 'f' &&
                            LDKF.stringPrototypeCharacterAt(source, 1) == 'u' &&
                            LDKF.stringPrototypeCharacterAt(source, 2) == 'n' &&
                            LDKF.stringPrototypeCharacterAt(source, 3) == 'c' &&
                            LDKF.stringPrototypeCharacterAt(source, 4) == 't' &&
                            LDKF.stringPrototypeCharacterAt(source, 5) == 'i' &&
                            LDKF.stringPrototypeCharacterAt(source, 6) == 'o' &&
                            LDKF.stringPrototypeCharacterAt(source, 7) == 'n' &&
                            LDKF.iterateSource(source, function(character, index) {
                                // Update > Is Generator
                                (character == '*') && (isGenerator = true);

                                // Target > Stop
                                isGenerator && this.stop()
                            }, STRICT = true, STRICT = false, STRICT = 8);

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
                                    while (lookupSyntaxIterator != lookupSyntaxLength && lookupSyntax[lookupSyntaxIterator] == (lookupSyntaxIterator ? LDKF.stringPrototypeCharacterAt(source, index + lookupSyntaxIterator) : character))
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

                        // Name --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.functionPrototypeName = function functionPrototypeName() {};

                        // Parameters --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.functionPrototypeParameters = function functionPrototypeParameters() {};

                        // Parameters Length
                        LapysDevelopmentKit.Functions.functionPrototypeParametersLength = function functionPrototypeParametersLength(routine) { return LDKF.arrayPrototypeLength(LDKF.functionPrototypeParameters(routine)) };

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
                LapysDevelopmentKit.Functions.isFunction = function isFunction(arg) { return typeof arg == "function" };

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
                LapysDevelopmentKit.Functions.iterateSource = function iterateSource(source, handler, IGNORE, IS_FUNCTION, STARTING_ITERATION_INDEX) {
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

                        // Source (Length, Iterator)
                        sourceLength = LDKF.stringPrototypeLength(source) - STARTING_ITERATION_INDEX, sourceIterator = sourceLength,

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
                            sourceIndex = (sourceLength - (sourceIterator -= 1) - 1) + STARTING_ITERATION_INDEX,
                            character = LDKF.stringPrototypeCharacterAt(source, sourceIndex);

                        // Logic
                        if (allowSyntaxParsing) {
                            // Logic > (...)
                            if (character == '/') {
                                // Initialization > Next Character
                                var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceIndex + 1);

                                // Logic > Update > (...)
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
                                // Logic > Update > (...)
                                if (IS_FUNCTION && !hasIndexedFunctionSourceBody) hasIndexedFunctionSourceBody = true;
                                else { syntaxGroups[syntaxGroupsLength] = "object-literal"; syntaxGroupsLength += 1 }

                            else if (currentSyntaxGroup == "syntax-group" && (character == ')')) { skipIterationFor = currentSyntaxGroup; syntaxGroupsLength -= 1 }
                            else if (character == '(')
                                // Logic > Update > (...)
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

                            // Logic > Update > (...)
                            if (allowSyntaxParsing) { skipIterationFor = currentSyntaxGroup; syntaxGroupsLength -= 1 }
                        }

                        // Update > Current Syntax Group
                        currentSyntaxGroup = syntaxGroupsLength ? syntaxGroups[syntaxGroupsLength - 1] : null;

                        // Handler
                        (
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
                        ) || handler.call(ITERATOR, character, sourceIndex)
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

                    // Has Same Inheritance
                    LapysDevelopmentKit.Functions.objectHasSameInheritance = function objectHasSameInheritance(objectA, objectB) { return LDKF.objectPrototypeConstructor(objectA) === LDKF.objectPrototypeConstructor(objectB) && LDKF.objectPrototypePrototype(objectA) === LDKF.objectPrototypePrototype(objectB) };

                    // Is
                    LapysDevelopmentKit.Functions.objectIs = function objectIs(objectA, objectB) { return objectA === objectB ? +0 !== objectA || 1 / objectA == 1 / objectB: objectA !== objectA && objectB !== objectB };

                    // Prototype
                        // Constructor --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.objectPrototypeConstructor = function objectPrototypeConstructor(object) { return object.constructor };

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
                                        while (recordedDepthTreeIterator != recordedDepthTreeLength) {
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
                            } while (depthTreeIterator != recordedDepthTreeLength && !hasRecursiveReference);

                            // Update > Depth
                            hasRecursiveReference && (depth = LDKC.Number.Infinity);

                            // Return
                            return depth
                        };

                        // Has Property [By Name]
                        LapysDevelopmentKit.Functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyName) { return propertyName in object };

                        // Prototype --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.objectPrototypePrototype = function objectPrototypePrototype(object) { return Object.getPrototypeOf(object) };

                /* String */
                    // Prototype
                        // Character At --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(string, index) { return string.charAt(index) || string[index] || null };

                        // Character Code At --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, index) { return string.charCodeAt(index) || -1 };

                        // Cut
                        LapysDevelopmentKit.Functions.stringPrototypeCut = function stringPrototypeCut(string, length, STRING_LENGTH) { return LDKF.stringPrototypeCutLeft(LDKF.stringPrototypeCutRight(string, length, STRING_LENGTH), length, STRING_LENGTH) };

                        // Cut Left
                        LapysDevelopmentKit.Functions.stringPrototypeCutLeft = function stringPrototypeCutLeft(string, length, STRING_LENGTH) {
                            // Initialization > (Cut, String Length)
                            var cut = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic > Loop > Update > (Cut, Length)
                            if (stringLength && length < stringLength) while (length != stringLength) { cut += string[length]; length += 1 }

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
                                while (length) cut = string[length -= 1] + cut
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
                                    // (Loop > )Update > (...)
                                    (length > stringLength - 1) && (length = stringLength - 1);
                                    while (index != length + 1) { slice += string[index]; index += 1 }
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
                                        while (cutLength != stringLength && trimIterator)
                                            // Loop
                                            while (trimIterator) {
                                                // Initialization > (Trim Element) (Iterator, Length)
                                                var trimElement = trim[trimIterator -= 1],
                                                    trimElementIterator = +0, trimElementLength = LDKF.stringPrototypeLength(trimElement);

                                                // Logic
                                                if (trimElementLength < stringLength - cutLength + 1)
                                                    // Loop
                                                    while (trimElementIterator != trimElementLength) {
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
                                        while (cutLength != stringLength && trimIterator)
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

                // To String --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Functions.toString = function toString(arg) { return arg + "" };

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
                    LapysDevelopmentKit.Information.Settings.DebugMode = LapysJS.publicMode;

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
                        while (iterator != length) {
                            // Update > (..., Iterator)
                            tmp = LDKM.imul(tmp ^ LDKF.stringPrototypeCharacterCodeAt(seed, iterator), 0x1000193);
                            iterator += 1
                        }

                        // Return
                        return function seeder() {
                            // Update > (...)
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

                        // Logic > (...)
                        if (index < start) { while (LDKM.abs(start - index) > difference) index += difference; return end - LDKM.abs(start - index) }
                        else if (index > end) { while (LDKM.abs(end - index) > difference) index -= difference; return start + LDKM.abs(end - index) }
                    }
                };

                // Unsign
                LapysDevelopmentKit.Mathematics.unsign = function unsign(number) { return number >>> +0 };

            /* Storage */
                // Registry > ... --- REDACT (Lapys)
                LapysDevelopmentKit.Storage.Registry.TimeoutID = [];

            /* Test */
                // Is Console Method --- CHECKPOINT (Lapys)
                // Is Native Constructor Of Object --- CHECKPOINT (Lapys)
                // Is Native Method Of Object --- CHECKPOINT (Lapys)

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
                    // Character At --- CHECKPOINT (Lapys)
                    // Character Code At --- CHECKPOINT (Lapys)

                // Object --- UPDATE REQUIRED (Lapys) -> Is there a "safe" way to collect this value?
                    // Create --- CHECKPOINT (Lapys)
                    // Define Getter --- CHECKPOINT (Lapys)
                    // Define Property --- CHECKPOINT (Lapys)
                    // Define Setter --- CHECKPOINT (Lapys)
                    // Get Own Property Descriptor --- CHECKPOINT (Lapys)
                    // Get Own Property Names --- CHECKPOINT (Lapys)
                    // Get Own Property Symbols --- CHECKPOINT (Lapys)
                    // Get Prototype Of --- CHECKPOINT (Lapys) --- CITE (Lapys) -> `https://gist.github.com/subtleGradient/1052392`.
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
                    // Has Prototype Property --- CHECKPOINT (Lapys)
                    // Is Browser Environment --- CHECKPOINT (Lapys)

                /* Environment --- NOTE (Lapys) -> Fortunately, the `typeof` keyword does not assert `ReferenceError`'s. */

                /* Objects --- NOTE (Lapys) -> Collect a myriad of native JavaScript values. */
                    // Abort Error --- CHECKPOINT (Lapys)
                        // Prototype --- CHECKPOINT (Lapys)

                    // Array --- CHECKPOINT (Lapys)
                        // Prototype --- CHECKPOINT (Lapys)

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
        window["LDKC"] = LapysDevelopmentKit.Constants;L
        window["LDKD"] = LapysDevelopmentKit.Data;
        window["LDKE"] = LapysDevelopmentKit.Environment;
        window["LDKF"] = LapysDevelopmentKit.Functions;
        window["LDKI"] = LapysDevelopmentKit.Information;
        window["LDKM"] = LapysDevelopmentKit.Mathematics;
        window["LDKO"] = LapysDevelopmentKit.Objects;
        window["LDKS"] = LapysDevelopmentKit.Storage;
        window["LDKT"] = LapysDevelopmentKit.Test;

    // Return
    return +0
})()
