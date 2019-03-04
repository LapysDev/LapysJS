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
                -- Avast Secure Browser (browser)
                -- Internet Explorer (browser)
                    --- Internet Explorer 5
                    --- Internet Explorer 6
                    --- Internet Explorer 7
                    --- Internet Explorer 8
                    --- Internet Explorer 9
                    --- Internet Explorer 10
                    --- Internet Explorer 11
                -- Google Chrome (browser)
                -- Microsoft Edge (browser)
                -- Mozilla Firefox (browser)
                -- Node.js (runtime)
                -- Opera (browser)
                -- Safari (browser)
                -- UC Browser (browser)

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
                -- Netscape (browser) --- NOTE (Lapys) -> Deprecated.
                    --- Netscape 2
                    --- Netscape 4
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

        // Lapys Development Kit --- REDACT
        LapysDevelopmentKit = {
            Constants: {Number: {}, String: {}},
            Data: {},
            Environment: {Data: {}, Type: null, State: "OK", Vendors: []},
            Functions: {},
            Information: {Messages: {Debugging: {}, Error: {}}, Settings: {DebugMode: false}},
            Mathematics: {},
            Objects: {},
            Storage: {Registry: {}},
            Test: {}
        },

        // Strict --- NOTE (Lapys) -> Cause alternative logical paths within a function or method.
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

                /* Handler --- NOTE (Lapys) -> Autonomous wrapper for function handlers. */
                LapysDevelopmentKit.Data.Handler = function Handler() {};
                    // Prototype
                    LapysDevelopmentKit.Data.HandlerPrototype = LDKD.Handler.prototype;
                        // Function
                        LapysDevelopmentKit.Data.HandlerPrototype["function"] = null;

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
                                    - All array methods process & return the source/ target object.
                                    - All non-decided array manipulation methods (`LapysDevelopmentKit.functions.arrayPrototypeAdd`, `LapysDevelopmentKit.functions.arrayPrototypeRemove`, e.t.c.) normally default to function from the back of the target array.

                            --- WARN ---
                                #Lapys:
                                    - Array methods that use a function-type parameter must callback with `key, value` arguments, not `value` alone.
                                    - Each array method assumes the source Array is always complete (non-holey or non-sparse, but rather dense or packed).
                                    - Ensure each method may not be heavily dependent on another, interoperability may be key, but performance is the zenith here.
                    */
                        // Add --- CHECKPOINT
                        LapysDevelopmentKit.Functions.arrayPrototypeAdd = function arrayPrototypeAdd(array, element) { return LDKF.arrayPrototypeAddToFront.apply(LDKF, arguments) };

                        // Add To Back
                        LapysDevelopmentKit.Functions.arrayPrototypeAddToBack = function arrayPrototypeAddToBack(array, element) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Logic
                            if (iterator > 1) {
                                // (Loop > )Update > Array
                                LDKF.arrayPrototypeShiftRight(array, length - 1, STRICT = true);
                                while (iterator -= 1) array[length - iterator - 1] = arguments[length - iterator]
                            }

                            // Return
                            return array
                        };

                        // Add To Front
                        LapysDevelopmentKit.Functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, element) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Logic
                            if (iterator == 2)
                                // Update > Array
                                array[LDKF.arrayPrototypeLength(array)] = element;

                            else if (iterator > 2) {
                                // Initialization > Array Length
                                var arrayLength = LDKF.arrayPrototypeLength(array);

                                // Loop > Update > Array (Length)
                                while (iterator -= 1) { array[arrayLength] = arguments[length - iterator]; arrayLength += 1 }
                            }

                            // Return
                            return array
                        };

                        // Build --- NOTE (Lapys) -> Similar to the `Array.prototype.map` method.
                        LapysDevelopmentKit.Functions.arrayPrototypeBuild = function arrayPrototypeBuild(array, handler) {
                            // Initialization > (Array Length, Length, Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop
                            while (iterator -= 1) {
                                // Initialization > (Array Iterator, Handler)
                                var arrayIterator = arrayLength, handler = arguments[length - iterator];

                                // Loop > (...)
                                while (arrayIterator) { var element = array[arrayIterator -= 1]; array[arrayIterator] = handler.call(array, arrayIterator, element) }
                            }

                            // Return
                            return array
                        };

                        // Clone --- MINIFY --- NOTE (Lapys) -> Except for extreme performance reasons, defer to the `LapysDevelopmentKit.functions.objectPrototypeClone` method instead.
                        LapysDevelopmentKit.Functions.arrayPrototypeClone = function arrayPrototypeClone(array) { var clone = [], iterator = LDKF.arrayPrototypeLength(array); while (iterator) { iterator -= 1; clone[iterator] = array[iterator]; } return clone };

                        // Concatenate
                        LapysDevelopmentKit.Functions.arrayPrototypeConcatenate = function arrayPrototypeConcatenate(array, arrayA) {
                            // Initialization > (Array Length, Length, Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop
                            while (iterator -= 1) {
                                // Initialization > Array Iterator
                                var arrayIterator = LDKF.arrayPrototypeLength(arguments[length - iterator]);

                                // Loop > Update > Array (Iterator)
                                while (arrayIterator) { arrayIterator -= 1; array[arrayIterator + arrayLength] = arguments[length - iterator][arrayIterator] }

                                // Update > Array Length
                                arrayLength = LDKF.arrayPrototypeLength(array)
                            }

                            // Return
                            return array
                        };

                        // Cut
                        LapysDevelopmentKit.Functions.arrayPrototypeCut = function arrayPrototypeCut(array, length) { return LDKF.arrayPrototypeCutLeft(LDKF.arrayPrototypeCutRight(array, length), length) };

                        // Cut At
                        LapysDevelopmentKit.Functions.arrayPrototypeCutAt = function arrayPrototypeCutAt(array, index) {
                            // Initialization > (Array Length, Length Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments), iterator = length;

                            while (arrayLength && (iterator -= 1)) {
                                // Initialization > Index
                                var index = arguments[length - iterator];

                                // Logic
                                if (index < arrayLength + 1) {
                                    // Loop > Update > (Array, Index)
                                    while (index != arrayLength) { array[index] = array[index + 1]; index += 1 }

                                    // Update > Array Length
                                    arrayLength -= 1
                                }
                            }

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, arrayLength, STRICT = true);

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
                                length > arrayLength - 1 ? LDKF.arrayPrototypeFree(array) : LDKF.arrayPrototypeResize(array, arrayLength - length)
                            }

                            // Return
                            return array
                        };

                        // Cut Through
                        LapysDevelopmentKit.Functions.arrayPrototypeCutThrough = function arrayPrototypeCutThrough(array, index, length) {
                            // Initialization > (Array Length, (Index, Length) Is Out Of Range)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                indexIsOutOfRange = index > arrayLength,
                                lengthIsOutOfRange = length > arrayLength;

                            // Logic
                            if (!indexIsOutOfRange || !lengthIsOutOfRange) {
                                // Update > (Index, Length)
                                (indexIsOutOfRange || index == arrayLength) && (index = arrayLength - 1);
                                (lengthIsOutOfRange || length == arrayLength) && (length = arrayLength - 1);

                                // Logic
                                if (index == length)
                                    // Update > Array
                                    LDKF.arrayPrototypeCutAt(array, index);

                                else if (index < length) {
                                    // Initialization > Shift Length
                                    var shiftLength = length - index;

                                    // Logic
                                    if (!index && shiftLength > arrayLength - 1)
                                        // Update > Array
                                        LDKF.arrayPrototypeFree(array);

                                    else {
                                        // Loop > Update > (Array, Index)
                                        while (index != arrayLength) { array[index] = array[index + shiftLength + 1]; index += 1 }

                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength - shiftLength - 1, STRICT = true)
                                    }
                                }

                                else {
                                    // Update > Array
                                    LDKF.arrayPrototypeCutThrough(array, index, arrayLength - 1);
                                    LDKF.arrayPrototypeCutThrough(array, 0, length)
                                }
                            }

                            // Return
                            return array
                        };

                        // Depth --- CHECKPOINT
                        LapysDevelopmentKit.Functions.arrayPrototypeDepth = function arrayPrototypeDepth(array) {
                            var arrayIterator = LDKF.arrayPrototypeLength(array),
                                depth = 1, depthTree = [], depthTreeLength = 0;

                            function arrayPrototypeIsDeep(array) {
                                var arrayIterator = LDKF.arrayPrototypeLength(array);
                                while (arrayIterator) if (LDKF.isArray(array[arrayIterator -= 1])) return true
                                return false
                            }

                            while (arrayIterator) {
                                var element = array[arrayIterator -= 1];

                                LDKF.isArray(element) && (depth += LDKF.arrayPrototypeDepth(element));

                                depthTree[depthTreeLength] = depth;
                                depth = 1; depthTreeLength += 1
                            }

                            return depthTreeLength ? Math.max.apply(Math, depthTree) : 1
                        };

                        // Distinct --- CHECKPOINT
                        // Every --- CHECKPOINT
                        // Fill --- CHECKPOINT
                        // Filter --- CHECKPOINT
                        // Filter Left --- CHECKPOINT
                        // Filter Right --- CHECKPOINT
                        // Find --- CHECKPOINT
                        // Find From Back --- CHECKPOINT
                        // Find From Front --- CHECKPOINT
                        // First --- CHECKPOINT
                        // For Each
                        LapysDevelopmentKit.Functions.arrayPrototypeForeach = function arrayPrototypeForeach(array, handler) {
                            // Initialization > Array (Length, Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength;

                            // Loop > (...)
                            while (arrayIterator) { arrayIterator -= 1; handler.call(array, array[arrayLength - arrayIterator - 1], arrayLength - arrayIterator - 1) }

                            // Return
                            return array
                        };

                        // Free
                        LapysDevelopmentKit.Functions.arrayPrototypeFree = function arrayPrototypeFree(array, STRICT) {
                            // Logic --- NOTE (Lapys) -> Some JavaScript environments do not free the array properly.
                            if (!STRICT) {
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

                        // Includes --- CHECKPOINT
                        // Index --- CHECKPOINT
                        // Index From Back --- CHECKPOINT
                        // Index From Front --- CHECKPOINT
                        // Insert At --- CHECKPOINT
                        // Insert Through --- CHECKPOINT
                        // Instance --- CHECKPOINT
                        // Is Distinct --- CHECKPOINT
                        // Last --- CHECKPOINT
                        // Length --- NOTE (Lapys) -> Arrays manage their own length.
                        LapysDevelopmentKit.Functions.arrayPrototypeLength = function arrayPrototypeLength(array) { return array.length };

                        // Like --- CHECKPOINT
                        // Match --- CHECKPOINT --- NOTE (Lapys) -> Similar to the `Array.prototype.filter` method.
                        // Only --- CHECKPOINT
                        // Pad --- CHECKPOINT
                        // Pad Left --- CHECKPOINT
                        // Pad Right --- CHECKPOINT
                        // Random --- CHECKPOINT
                        // Random Index --- CHECKPOINT
                        // Remove --- CHECKPOINT
                        // Remove All --- CHECKPOINT
                        // Remove Duplicate --- CHECKPOINT
                        // Remove Duplicate From Back --- CHECKPOINT
                        // Remove Duplicate From Front --- CHECKPOINT
                        // Remove Duplicates --- CHECKPOINT
                        // Remove Duplicates From Back --- CHECKPOINT
                        // Remove Duplicates From Front --- CHECKPOINT
                        // Remove From Back --- CHECKPOINT
                        // Remove From Front --- CHECKPOINT
                        // Remove Repeat --- CHECKPOINT
                        // Remove Repeat From Back --- CHECKPOINT
                        // Remove Repeat From Front --- CHECKPOINT
                        // Remove Repeats --- CHECKPOINT
                        // Replace --- CHECKPOINT
                        // Replace All --- CHECKPOINT
                        // Replace Duplicate --- CHECKPOINT
                        // Replace Duplicate From Back --- CHECKPOINT
                        // Replace Duplicate From Front --- CHECKPOINT
                        // Replace Duplicates --- CHECKPOINT
                        // Replace Duplicates From Back --- CHECKPOINT
                        // Replace Duplicates From Front --- CHECKPOINT
                        // Replace From Back --- CHECKPOINT
                        // Replace From Front --- CHECKPOINT
                        // Replace Repeat --- CHECKPOINT
                        // Replace Repeat From Back --- CHECKPOINT
                        // Replace Repeat From Front --- CHECKPOINT
                        // Replace Repeats --- CHECKPOINT
                        // Resize
                        LapysDevelopmentKit.Functions.arrayPrototypeResize = function arrayPrototypeResize(array, length, STRICT) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Update > Array
                            !STRICT && (length < +0 || !length) ? arrayLength && LDKF.arrayPrototypeFree(array) : array.length = length;

                            // Return
                            return array
                        };

                        // Reverse --- CHECKPOINT
                        // Shift Left
                        LapysDevelopmentKit.Functions.arrayPrototypeShiftLeft = function arrayPrototypeShiftLeft(array, length) {
                            // Logic
                            if (length) {
                                // Initialization > Array Length
                                var arrayLength = LDKF.arrayPrototypeLength(array);

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
                                    LDKF.arrayPrototypeResize(array, arrayLength - length)
                                }
                            }

                            // Return
                            return array
                        };

                        // Shift Right
                        LapysDevelopmentKit.Functions.arrayPrototypeShiftRight = function arrayPrototypeShiftRight(array, length, STRICT) {
                            // Logic
                            if (length) {
                                // Initialization > Array (Length, Iterator)
                                var arrayLength = LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength;

                                // Loop > Update > Array (Iterator)
                                while (arrayIterator) { arrayIterator -= 1; array[arrayIterator + length] = array[arrayIterator] }

                                // Logic > Loop > Update > Array
                                if (!STRICT) while (length) array[length -= 1] = undefined;
                            }

                            // Return
                            return array
                        };

                        // Shuffle --- CHECKPOINT
                        // Some --- CHECKPOINT
                        // Trim --- CHECKPOINT
                        // Trim Left --- CHECKPOINT
                        // Trim Right --- CHECKPOINT
                    /* Size
                            --- WARN ---
                                #Lapys:
                                    - Avoid `Array.prototype.length` or `LapysDevelopmentKit.functions.arrayPrototypeLength` because most JavaScript engines do not optimize for parsing sparse arrays to non-empty arrays.
                                    - If performance is necessary, use the `STRICT` clause to create a holey array quickly.
                    */

                // Get Arguments Length --- NOTE (Lapys) -> Argument objects store their own length.
                LapysDevelopmentKit.Functions.getArgumentsLength = function getArgumentsLength(argumentsObject) { return argumentsObject.length };

                // Is Array --- CHECKPOINT
                LapysDevelopmentKit.Functions.isArray = function isArray(arg) { return arg instanceof Array };

                // Is Null
                LapysDevelopmentKit.Functions.isNull = function isNull(arg) { return arg === null };

                // Object
                    // Prototype
                        // Delete Property [By Name]
                        LapysDevelopmentKit.Functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, propertyName) { delete object[propertyName]; return object };

        /* Window --- CHECKPOINT */
        window["LDK"]= LapysDevelopmentKit;
        window["LDKC"] = LapysDevelopmentKit.Constants;
        window["LDKD"] = LapysDevelopmentKit.Data;
        window["LDKE"] = LapysDevelopmentKit.Environment;
        window["LDKF"] = LapysDevelopmentKit.Functions;
        window["LDKI"] = LapysDevelopmentKit.Information;
        window["LDKM"] = LapysDevelopmentKit.Mathematics;
        window["LDKO"] = LapysDevelopmentKit.Objects;
        window["LDKS"] = LapysDevelopmentKit.Storage;
        window["LDKT"] = LapysDevelopmentKit.Test;

    // Return --- NOTE (Lapys) -> Homage to C/ C++.
    return 0
})()
