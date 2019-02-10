/**
    @author: Lapys Dev Team
    @description: LapysJS is an intuitive, minimalist web library for quick development.
    @version: 0.0.7
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Supported environment standards:
                -- ECMAScript 2, 3rd Edition (1999)
                -- JavaScript v1.3

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

    --- UPDATE REQUIRED ---
        #Lapys:
            - Test for `Symbol` objects as well.
            - Test all explicitly requested methods & properties.
            - CRUNCH LAG!!!

            - Target development environments (these environments may lack a core & modern JavaScript feature or not work for some other reasons..):
                -- Internet Explorer 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- Netscape (browser) --- NOTE (Lapys) -> Deprecated.
                    --- Netscape 2
                    --- Netscape 4
                -- others...
*/
(function Main() {
    /* Initialization
            --- NOTE ---
                #Lapys: Initialize global objects.
    */
        // Arguments --- NOTE (Lapys) -> The arguments received by the main sub-routine.
        var args = [],

        // Author
        AUTHOR = "Lapys",

        // Description
        DESCRIPTION = "LapysJS is an intuitive, minimalist web library for quick development.",

        // Global --- NOTE (Lapys) -> The JavaScript global object of the current environment.
        GLOBAL = null,

        // Lapys Development Kit --- NOTE (Lapys) -> Integration of the Lapys Development Kit into JavaScript.
        LapysDevelopmentKit = new (function LapysDevelopmentKit() {
            // Initialization > Target
            var that = this;

            // Modification > Target
                // Constants --- REDACT ---
                that.constants = {number: {}, string: {}};

                // Data --- NOTE (Lapys) -> Custom data objects.
                that.data = {};

                // Environment --- NOTE (Lapys) -> Properties of the current development environment. --- REDACT ---
                that.environment = {global: null, state: "unknown", type: "standard", vendors: []};

                // Functions
                that.functions = {};

                // Information
                that.information = {
                    // Messages --- REDACT ---
                    messages: {debugging: {}, error: {}},

                    // Settings --- NOTE (Lapys) -> Determine how the development kit integrates.
                    settings: {}
                };

                // Math
                that.math = {};

                // Objects --- NOTE (Lapys) -> Different from the conventional Lapys Development Kit
                that.objects = {};

                // Storage --- REDACT ---
                that.storage = {registry: {}};

                // Test --- NOTE (Lapys) -> Not really unit code tests, more or less a container for secondary methods.
                that.test = {};

            // Return
            return that
        }),

        // Private --- NOTE (Lapys) -> Object passed around within the Lapys Development Kit only.
        PRIVATE = null,

        // Strict --- NOTE (Lapys) -> Cause alternative logical paths within a function or method.
        STRICT = false,

        // State --- NOTE (Lapys) -> A zero state means null errors.
        STATE = +0,
            // Initiate Error
            INITIATE_ERROR_STATE = -2,

            // Update Error
            UPDATE_ERROR_STATE = -3,

        // Undefined --- NOTE (Lapys) -> Specify `undefined`.
        undefined = void +0,

        // Unique --- NOTE (Lapys) -> Unique object.
        UNIQUE = {},

        // Uniform Resource Locator
        URL = "https://www.github.com/LapysDev/LapysJS",

        // Version
        VERSION = "0.0.7";

    /* Definition */
        // Lapys Development Kit (...) --- NOTE (Lapys) -> Abbreviate the Lapys Development Kit for quicker developments.
        var LDK = LapysDevelopmentKit,
            LDKC = LapysDevelopmentKit.constants,
            LDKD = LapysDevelopmentKit.data,
            LDKE = LapysDevelopmentKit.environment,
            LDKF = LapysDevelopmentKit.functions,
            LDKI = LapysDevelopmentKit.information,
            LDKM = LapysDevelopmentKit.math,
            LDKO = LapysDevelopmentKit.objects,
            LDKS = LapysDevelopmentKit.storage,
                LDKR = LapysDevelopmentKit.storage.registry,
            LDKT = LapysDevelopmentKit.test;

    /* Modification
            --- NOTE ---
                #Lapys: Best to modify the Lapys Development Kit externally.
    */
        /* Lapys Development Kit */
            /* Data
                    --- NOTE ---
                        #Lapys: Normally, with private methods & properties in the Lapys Development Kit
                            basic private-scoped security measures are not taken,

                            but in the case of possibly global custom data types,
                            we still assert some level of security.
            */
                // Clock --- NOTE (Lapys) -> For asynchronous processes only.
                LapysDevelopmentKit.data.clock = function Clock() {};
                    // Prototype
                    LapysDevelopmentKit.data.clockPrototype = LapysDevelopmentKit.data.clock.prototype;
                        /* Check
                                --- NOTE ---
                                    #Lapys: Asynchronous `LapysDevelopmentKit.functions.assert` using `Observer` objects or
                                        asynchronous reverse-condition `while` statement.
                        */
                        LapysDevelopmentKit.data.clockPrototype.check = function check(condition, ontrue, onfalse) {
                            var that = this;

                            // Error
                            LDKT.targetIsOfConstructor(that, LDKF.isClock, "Clock");

                            // Initialization > Observer
                            var observer = new LDKD.observer(condition, ontrue, LDKF.getArgumentsLength(arguments) > 2 ? onfalse : null);

                            // Target > Wind
                            that.wind(function() { observer.observe() && this.stop() });

                            // Return
                            return observer
                        };

                        // Stop
                        LapysDevelopmentKit.data.clockPrototype.stop = function stop(frame) { LDKF.isFrame(frame) || LDKF.error("Argument specified must be a `Frame`."); LDKD.framePrototype.stop.call(frame) };

                        /* Thread
                                --- UPDATE REQUIRED ---
                                    #Lapys: Multi-threading parallelism, maybe?
                                        - Although how would Web Workers `Worker` objects or any solution as such be integrated into the library?
                        */
                        LapysDevelopmentKit.data.clockPrototype.thread = function thread() {};

                        // Tick
                        LapysDevelopmentKit.data.clockPrototype.tick = function tick(handler, delay) { var callback = handler; handler = function() { callback.call(this); LDKD.framePrototype.stop.call(this) }; return LapysDevelopmentKit.data.clockPrototype.wind.apply(this, arguments) };

                        // Timestamp
                        LapysDevelopmentKit.data.clockPrototype.timestamp = function timestamp() { LDKT.targetIsOfConstructor(this, LDKF.isClock, "Clock"); return LDKC.hasPerformanceObject ? LDKF.performancePrototypeNow(LDKC.performance) : LDKF.dateNow() };

                        // Wind
                        LapysDevelopmentKit.data.clockPrototype.wind = function wind(handler, interval) {
                            // Error
                            LDKT.targetIsOfConstructor(this, LDKF.isClock, "Clock");

                            // Initialization
                                // Frame
                                var frame = new LDKD.frame(handler),

                                // Frame ID
                                frameId,

                                // Tick --- NOTE (Lapys) -> Number of ticks animated/ wound.
                                tick = -1;

                            // (Update > Interval) | Error --- NOTE (Lapys) -> Since the `setInterval` function is opted out, we'll run each tick at 60 frames per second (hence the division).
                            (LDKF.getArgumentsLength(arguments) > 1) || (interval = +0);
                            interval > -1 && LDKF.numberPrototypeIsSafeInteger(interval) ? interval = LDKM.ceil(interval / 16.666666666666668) : LDKF.throwTypeError("Second argument must be a safe positive integer.");

                            // Wind
                            (function animationFrame() {
                                // Logic
                                switch (frame.state) {
                                    // Un-played, Playing
                                    case "unplayed": case "playing":
                                        // Logic > (...)
                                        if ((tick += 1) == interval) { frame.play(); tick = -1 }

                                        // Update > Frame ID
                                        frameId = LDKF.requestAnimationFrame(animationFrame);

                                        // [Break]
                                        break;

                                    // Stopped
                                    case "stopped":
                                        // Frame > Stop
                                        frame.stop();

                                        // Cancel Animation Frame > (...)
                                        LDKF.isVoid(frameId) || LDKF.cancelAnimationFrame(frameId)
                                }
                            })();

                            // Return
                            return frame
                        };

                // Frame
                LapysDevelopmentKit.data.frame = function Frame(action) {
                    // (...)
                    LDKT.targetIsOfConstructor(this, LDKF.isFrame, "Frame");
                    LDKF.isFunction(action) ? this.action = action : LDKF.error("Argument must be a function.");

                    // Return
                    return this
                };
                    // Prototype
                    LapysDevelopmentKit.data.framePrototype = LapysDevelopmentKit.data.frame.prototype;
                        // Action --- NOTE (Lapys) -> The Action performed when the Frame is played.
                        LapysDevelopmentKit.data.framePrototype.action = null;

                        // Current Tick
                        LapysDevelopmentKit.data.framePrototype.currentTick = +0;

                        // Pause --- NOTE (Lapys) -> Honestly, this property is more for semantics than anything...
                        LapysDevelopmentKit.data.framePrototype.pause = function pause() {
                            // Error
                            LDKT.targetIsOfConstructor(this, LDKF.isFrame, "Frame");

                            // Modification > Target > State
                            (this.state == "paused" || this.state == "stopped") || (this.state = "paused")
                        };

                        // Play
                        LapysDevelopmentKit.data.framePrototype.play = function play() {
                            // Error
                            LDKT.targetIsOfConstructor(this, LDKF.isFrame, "Frame");

                            // Logic
                            if (this.state != "stopped") {
                                // Modification > Target > State
                                (this.state == "playing") || (this.state = "playing");

                                // Target > Action
                                if (!LDKF.isNull(this.action)) return this.action.call(this, (this.currentTick += 1) - 1)
                            }
                        };

                        // State
                        LapysDevelopmentKit.data.framePrototype.state = "unplayed";

                        // Stop
                        LapysDevelopmentKit.data.framePrototype.stop = function stop() {
                            // Error
                            LDKF.isFrame(this) || LDKF.error.invalidType("Frame");

                            // Modification > Target > State
                            return this.state == "stopped" ? false : !!(this.state = "stopped")
                        };

                // Observer
                LapysDevelopmentKit.data.observer = function Observer(condition, ontrue, onfalse) {
                    // Initialization > Length
                    var length = LDKF.getArgumentsLength(arguments);

                    // (...)
                    LDKT.targetIsOfConstructor(this, LDKF.isObserver, "Observer");

                    // Update > (Condition, On (False, True))
                    length || (condition = null); (length > 2) || (onfalse = null); (length > 1) || (ontrue = null);

                    // Error
                    LDKF.isFunction(condition) || LDKF.isNull(condition) || LDKF.error("First argument specified must be a function.");
                    LDKF.isFunction(ontrue) || LDKF.isNull(ontrue) || LDKF.error("Second argument specified must be a function.");
                    LDKF.isFunction(onfalse) || LDKF.isNull(onfalse) || LDKF.error("Third argument specified must be a function.");

                    // Modification > Target > (Condition, On (False, True))
                    this.condition = condition; this.onfalse = onfalse; this.ontrue = ontrue;

                    // Return
                    return this
                };
                    // Prototype
                    LapysDevelopmentKit.data.observerPrototype = LapysDevelopmentKit.data.observer.prototype;
                        // Condition
                        LapysDevelopmentKit.data.observerPrototype.condition = null;

                        // Observe
                        LapysDevelopmentKit.data.observerPrototype.observe = function observe() {
                            // Error
                            LDKT.targetIsOfConstructor(this, LDKF.isObserver, "Observer");

                            // Target > On (True, False)
                            LDKF.isNull(this.condition) || (
                                (this.state = !!this.condition.apply(this, arguments)) ?
                                    (LDKF.isNull(this.ontrue) || this.ontrue.apply(this, arguments)) :
                                    (LDKF.isNull(this.onfalse) || this.onfalse.apply(this, arguments))
                            );

                            // Return
                            return this.state
                        };

                        // On (False, True)
                        LapysDevelopmentKit.data.observerPrototype.onfalse = null;
                        LapysDevelopmentKit.data.observerPrototype.ontrue = null;

                        // State
                        LapysDevelopmentKit.data.observerPrototype.state = null;

            /* Functions */
                // Array
                LapysDevelopmentKit.functions.array = function array(elements) {
                    // Initialization > (Array, Index, Iterator, Length)
                    var array = [], index = -1,
                        iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                    // Loop
                    while (iterator) {
                        // Initialization > Element
                        var element = arguments[length - (iterator -= 1) - 1];

                        // Logic
                        if (LDKF.isArrayLike(element)) {
                            // Initialization > Array-Like Length
                            var arrayLikeLength = LDKF.arrayLikePrototypeLength(element);

                            // Loop > Update > Array
                            while (arrayLikeLength) array[index += 1] = LDKF.arrayLikePrototypeElementAt(element, arrayLikeLength -= 1)
                        }

                        else
                            // Update > Array
                            array[index += 1] = element
                    }

                    // Return
                    return array
                };
                    /* Prototype
                            --- NOTE ---
                                #Lapys:
                                    - All array methods affect the source/ target object.
                                    - All non-decided array manipulation methods (`LapysDevelopmentKit.functions.arrayPrototypeAdd`, `LapysDevelopmentKit.functions.arrayPrototypeRemove`, e.t.c.) normally default to function from the back of the target array.
                                    - Array filtering methods such as `LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicatedFromBack` are capable of matching multiple elements.

                            --- WARN ---
                                #Lapys:
                                    - Array methods that use a function parameter must callback with `key, value` arguments, not `value` alone.
                                    - Each array method assumes the source Array is always complete (non-holey or non-sparse, but rather dense or packed).
                                    - Ensure each method is not heavily dependent on another,
                                        interoperability may be key, but performance is the zenith here.
                    */
                        // Add
                        LapysDevelopmentKit.functions.arrayPrototypeAdd = function arrayPrototypeAdd(array, element) { return LDKF.arrayPrototypeAddToFront.apply(LDKF, arguments) };

                        // Add To Back --- NOTE (Lapys) -> Faster than `Array.prototype.unshift`.
                        LapysDevelopmentKit.functions.arrayPrototypeAddToBack = function arrayPrototypeAddToBack(array, element) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (length) {
                                // Update > (Length, Array)
                                length -= 1;
                                array[(length + iterator) - 1] = array[length]
                            }

                            // Loop
                            while (iterator != 1) {
                                // Update > (Iterator, Array)
                                iterator -= 1;
                                array[iterator - 1] = arguments[iterator]
                            }

                            // Return
                            return array
                        };

                        // Add To Front --- NOTE (Lapys) -> Consider using `Array.prototype.push` for performance boosts.
                        LapysDevelopmentKit.functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, element) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator != 1) {
                                // Update > (Iterator, Array)
                                iterator -= 1;
                                array[iterator + (length - 1)] = arguments[iterator]
                            }

                            // Return
                            return array
                        };

                        // Build --- NOTE (Lapys) -> Similar to `Array.prototype.map`.
                        LapysDevelopmentKit.functions.arrayPrototypeBuild = function arrayPrototypeBuild(array, callbacks) {
                            // Initialization > (Iterator, (Array) Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator,
                                arrayLength = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator != 1) {
                                // Initialization > (Callback, Array Iterator)
                                var callback = arguments[length - (iterator -= 1)], arrayIterator = arrayLength;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > Array Index
                                    var arrayIndex = arrayLength - (arrayIterator -= 1) - 1;

                                    // Update > Array
                                    array[arrayIndex] = callback.call(array, arrayIndex, array[arrayIndex])
                                }
                            }

                            // Return
                            return array
                        };

                        // Clone --- WARN (Lapys) -> Except for high-end performance purposes, defer to `LapysDevelopmentKit.functions.objectPrototypeClone` instead.
                        LapysDevelopmentKit.functions.arrayPrototypeClone = function arrayPrototypeClone(array) {
                            // Initialization > (Clone, Iterator)
                            var clone = [], iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Update > Clone
                            while (iterator) clone[iterator -= 1] = array[iterator];

                            // Return
                            return clone
                        };

                        // Concatenate
                        LapysDevelopmentKit.functions.arrayPrototypeConcatenate = function arrayPrototypeConcatenate(array, arrays) {
                            // Initialization > (Index, Iterator, Length)
                            var index = LDKF.arrayPrototypeLength(array) - 1,
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > (Concatenation) (Iterator, Length)
                                var concatenation = arguments[length - (iterator -= 1)],
                                    concatenationIterator = LDKF.arrayPrototypeLength(concatenation), concatenationLength = concatenationIterator;

                                // Loop > Update > Array
                                while (concatenationIterator)
                                    array[index += 1] = concatenation[concatenationLength - (concatenationIterator -= 1) - 1]
                            }

                            // Return
                            return array
                        };

                        // Cut
                        LapysDevelopmentKit.functions.arrayPrototypeCut = function arrayPrototypeCut(array, lengths) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Argument
                                var argument = arguments[length - (iterator -= 1)];

                                // Update > Array
                                LDKF.arrayPrototypeCutLeft(LDKF.arrayPrototypeCutRight(array, argument), argument)
                            }

                            // Return
                            return array
                        };

                        // Cut Index
                        LapysDevelopmentKit.functions.arrayPrototypeCutIndex = function arrayPrototypeCutIndex(array, indexes) {
                            // Initialization > (Iterator, (Array) Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator,
                                arrayLength = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Index
                                var index = arguments[length - (iterator -= 1)];

                                // Logic
                                if (~index && index < arrayLength) {
                                    // Loop > Update > (Index, Array)
                                    while (index != arrayLength) { index += 1; array[index - 1] = array[index] }

                                    // Update > Array Length
                                    arrayLength -= 1
                                }
                            }

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, arrayLength);

                            // Return
                            return array
                        };

                        // Cut Left
                        LapysDevelopmentKit.functions.arrayPrototypeCutLeft = function arrayPrototypeCutLeft(array, lengths) {
                            // Initialization > (Iterator, (Array) Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator,
                                arrayLength = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Index
                                var index = arguments[length - (iterator -= 1)];

                                // Logic
                                if (index < arrayLength) {
                                    // Initialization > Array Iterator
                                    var arrayIterator = arrayLength;

                                    // Loop > Update > Array (Iterator)
                                    while (arrayIterator) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = array[arrayLength - (arrayIterator - index) - 1] }

                                    // Update > Array Length
                                    arrayLength -= index
                                }

                                else
                                    // Update > Array Length
                                    arrayLength = +0
                            }

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, arrayLength);

                            // Return
                            return array
                        };

                        // Cut Right
                        LapysDevelopmentKit.functions.arrayPrototypeCutRight = function arrayPrototypeCutRight(array, lengths) {
                            // Initialization > (Iterator, (Array) Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator,
                                arrayLength = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Index
                                var index = arguments[length - (iterator -= 1)];

                                // Update > Array Length
                                arrayLength = (index = arrayLength - index) > +0 ? index : +0
                            }

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, arrayLength);

                            // Return
                            return array
                        };

                        // Depth --- CHECKPOINT ---
                        LapysDevelopmentKit.functions.arrayPrototypeDepth = function arrayPrototypeDepth(array) {};

                        // Distinct
                        LapysDevelopmentKit.functions.arrayPrototypeDistinct = function arrayPrototypeDistinct(array) {
                            // Initialization > (Distinct, Index, Iterator, Length)
                            var distinct = [], index = -1,
                                iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Loop
                            while (iterator) {
                                // Initialization > Element
                                var element = array[length - (iterator -= 1) - 1];

                                // Update > Distinct
                                LDKF.arrayPrototypeIncludes(distinct, element) || (distinct[index += 1] = element)
                            }

                            // Return
                            return distinct
                        };

                        // Every
                        LapysDevelopmentKit.functions.arrayPrototypeEvery = function arrayPrototypeEvery(array, callback) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Loop
                            while (iterator) {
                                // Initialization > Index
                                var index = length - (iterator -= 1) - 1;

                                // Logic
                                if (!callback.call(array, index, array[index])) return false
                            }

                            // Return
                            return true
                        };

                        // Fill
                        LapysDevelopmentKit.functions.arrayPrototypeFill = function arrayPrototypeFill(arrayA, arrayB) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(arrayB);

                            // Update > Array A
                            LDKF.arrayPrototypeFree(arrayA);

                            // Loop > Update > (Iterator, Array A)
                            while (iterator) { iterator -= 1; arrayA[iterator] = arrayB[iterator] }

                            // Return
                            return arrayA
                        };

                        // Filter
                        LapysDevelopmentKit.functions.arrayPrototypeFilter = function arrayPrototypeFilter(array, callbacks) {
                            // Update > Array
                            array = LDKF.arrayPrototypeFilterRight.apply(LDKF, arguments);

                            // Return
                            return LDKF.arrayPrototypeFilterLeft.apply(LDKF, arguments)
                        };

                        // Filter Left
                        LapysDevelopmentKit.functions.arrayPrototypeFilterLeft = function arrayPrototypeFilterLeft(array, callbacks) {
                            // Initialization > (Iterator, Length, Array (Index, Length))
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator,
                                arrayIndex = +0, arrayLength = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Callback
                                var callback = arguments[length - (iterator -= 1)];

                                // Loop
                                while (callback.call(array, arrayIndex, array[arrayIndex])) {
                                    // Update > Array Index
                                    arrayIndex += 1;

                                    // Logic > [Break]
                                    if (arrayIndex == arrayLength) break
                                }
                            }

                            // Update > Array
                            LDKF.arrayPrototypeCutLeft(array, arrayIndex);

                            // Return
                            return array
                        };

                        // Filter Right
                        LapysDevelopmentKit.functions.arrayPrototypeFilterRight = function arrayPrototypeFilterRight(array, callbacks) {
                            // Initialization > (Iterator, Length, Array (Length, Index))
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator,
                                arrayLength = LDKF.arrayPrototypeLength(array), arrayIndex = arrayLength - 1;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Callback
                                var callback = arguments[length - (iterator -= 1)];

                                // Loop > Update > Array Index
                                while (arrayIndex && callback.call(array, arrayIndex, array[arrayIndex]))
                                    arrayIndex -= 1
                            }

                            // Update > Array
                            LDKF.arrayPrototypeCutRight(array, arrayLength - arrayIndex - 1);

                            // Return
                            return array
                        };

                        // Find
                        LapysDevelopmentKit.functions.arrayPrototypeFind = function arrayPrototypeFind(array, callback) { return LDKF.arrayPrototypeFindFromBack(array, callback) };

                        // Find From Back
                        LapysDevelopmentKit.functions.arrayPrototypeFindFromBack = function arrayPrototypeFindFromBack(array, callback) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Loop
                            while (iterator) {
                                // Initialization > Index
                                var index = length - (iterator -= 1) - 1;

                                // Logic > Return
                                if (callback.call(array, index, array[index])) return array[index]
                            }
                        };

                        // Find From Front
                        LapysDevelopmentKit.functions.arrayPrototypeFindFromFront = function arrayPrototypeFindFromFront(array, callback) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator) {
                                // Update > Iterator
                                iterator -= 1;

                                // Logic > Return
                                if (callback.call(array, iterator, array[iterator])) return array[iterator]
                            }
                        };

                        // First
                        LapysDevelopmentKit.functions.arrayPrototypeFirst = function arrayPrototypeFirst(array) {
                            // Initialization > Key
                            var key;

                            // Loop
                            for (key in array)
                                // Logic > Return --- NOTE (Lapys) -> Fortunately, the `for...in` statement sorts the keys of an object before iteration.
                                if (LDKF.stringPrototypeIsNumeric(key)) return array[LDKF.toNumber(key)]
                        };

                        // For Each
                        LapysDevelopmentKit.functions.arrayPrototypeForEach = function arrayPrototypeForEach(array, callback) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Loop > (...)
                            while (iterator) { var index = length - (iterator -= 1) - 1; callback.call(array, index, array[index]) }

                            // Return
                            return array
                        };

                        // Free
                        LapysDevelopmentKit.functions.arrayPrototypeFree = function arrayPrototypeFree(array) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Deletion --- NOTE (Lapys) -> Some environments do not resize the Array properly.
                            while (iterator) LDKF.objectPrototypeDeleteProperty(array, iterator -= 1);

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, +0);

                            // Return
                            return array
                        };

                        // Includes
                        LapysDevelopmentKit.functions.arrayPrototypeIncludes = function arrayPrototypeIncludes(array, element) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (array[iterator -= 1] === element) return true;

                            // Return
                            return false
                        };

                        // Index
                        LapysDevelopmentKit.functions.arrayPrototypeIndex = function arrayPrototypeIndex(array, element) { return LDKF.arrayPrototypeIndexFromBack(array, element) };

                        // Index From Back
                        LapysDevelopmentKit.functions.arrayPrototypeIndexFromBack = function arrayPrototypeIndexFromBack(array, element) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Loop
                            while (iterator) {
                                // Initialization > Index
                                var index = length - (iterator -= 1) - 1;

                                // Logic > Return
                                if (array[index] === element) return index
                            }

                            // Return
                            return -1
                        };

                        // Index From Front
                        LapysDevelopmentKit.functions.arrayPrototypeIndexFromFront = function arrayPrototypeIndexFromFront(array, element) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (array[iterator -= 1] === element) return iterator;

                            // Return
                            return -1
                        };

                        // Insert
                        LapysDevelopmentKit.functions.arrayPrototypeInsert = function arrayPrototypeInsert(array, element, index) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Logic > Loop > Update > (Array, Iterator)
                            if (index < length) while (iterator != index) { array[iterator] = array[iterator - 1]; iterator -= 1 }

                            // Update > Array
                            array[index] = element;

                            // Return
                            return array
                        };

                        // Instance
                        LapysDevelopmentKit.functions.arrayPrototypeInstance = function arrayPrototypeInstance(array, element) {
                            // Initialization > (Array Iterator, Index, Instances, Length)
                            var arrayIterator = LDKF.arrayPrototypeLength(array),
                                index = -1, instances = [],
                                length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (arrayIterator) {
                                // Logic
                                if (length != 1) {
                                    // Initialization > Specified (Index) --- NOTE (Lapys) -> Target only the Arguments specified.
                                    var specified = [], specifiedIndex = -1;

                                    // Loop
                                    while (arrayIterator) {
                                        // Initialization > (Is Specified, Iterator)
                                        var isSpecified = true, iterator = length;

                                        // Update > Array Iterator
                                        arrayIterator -= 1;

                                        // Loop
                                        while (iterator != 1) {
                                            // Update > Iterator
                                            iterator -= 1;

                                            // Logic > [Break]
                                            if (array[arrayIterator] === arguments[iterator]) break;

                                            // Update > Is Specified
                                            isSpecified = !(array[arrayIterator] !== arguments[iterator] && iterator == 1)
                                        }

                                        // Update > Specified
                                        isSpecified && (specified[specifiedIndex += 1] = array[arrayIterator])
                                    }

                                    // Update > Array (Iterator)
                                    array = specified;
                                    arrayIterator = LDKF.arrayPrototypeLength(array)
                                }

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > (Element, Instances Iterator, Is Distinct)
                                    var element = array[arrayIterator -= 1], instancesIterator = index + 1, isDistinct = true;

                                    // Loop
                                    while (instancesIterator) {
                                        // Initialization > Instance
                                        var instance = instances[instancesIterator -= 1];

                                        // Logic
                                        if (instance.element === element) {
                                            // Modification > Instance > Occurrence
                                            instance.occurrence += 1;

                                            // Update > Is Distinct
                                            isDistinct = false;

                                            // [Break]
                                            break
                                        }
                                    }

                                    // Update > Instances
                                    isDistinct && (instances[index += 1] = {element: element, occurrence: 1})
                                }
                            }

                            // Return
                            return length == 2 ? (instances[+0] || {occurrence: +0}).occurrence : instances
                        };

                        // Is Distinct
                        LapysDevelopmentKit.functions.arrayPrototypeIsDistinct = function arrayPrototypeIsDistinct(array) {
                            // Initialization > (Indexed, Iterator)
                            var indexed = [], iterator = LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (iterator) {
                                // Initialization > Element
                                var element = array[iterator -= 1];

                                // Logic > Return
                                if (LDKF.arrayPrototypeIncludes(indexed, element)) return false;

                                // Update > Indexed
                                indexed[iterator] = element
                            }

                            // Return
                            return true
                        };

                        // Last
                        LapysDevelopmentKit.functions.arrayPrototypeLast = function arrayPrototypeLast(array) {
                            // Initialization > ((Former) Key, Is Indexing Numeric Keys)
                            var formerKey, isIndexingNumericKeys = false, key;

                            // Loop
                            for (key in array) {
                                // Initialization > Key Is Numeric
                                var keyIsNumeric = LDKF.stringPrototypeIsNumeric(key);

                                // Logic
                                if (isIndexingNumericKeys) {
                                    // Logic > Return
                                    if (!keyIsNumeric) return array[LDKF.toNumber(formerKey)]
                                }

                                else if (keyIsNumeric)
                                    // Update > Is Indexing Numeric Keys
                                    isIndexingNumericKeys = true;

                                // Update > Former Key
                                formerKey = key
                            }

                            // Return
                            return array[LDKF.toNumber(formerKey)]
                        };

                        // Length --- NOTE (Lapys) -> Fortunately, the `length` property of arrays is consistent with the object itself.
                        LapysDevelopmentKit.functions.arrayPrototypeLength = function arrayPrototypeLength(array) { return array.length };

                        // Like
                        LapysDevelopmentKit.functions.arrayPrototypeLike = function arrayPrototypeLike(arrayA, arrayB) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(arrayB);

                            // Loop > Logic > Return
                            while (iterator) if (!LDKF.arrayPrototypeIncludes(arrayA, arrayB[iterator -= 1])) return false;

                            // Return
                            return true
                        };

                        // Match --- NOTE (Lapys) -> Similar to `Array.prototype.filter`.
                        LapysDevelopmentKit.functions.arrayPrototypeMatch = function arrayPrototypeMatch(array, callback) {
                            // Initialization > (Iterator, Length, Matches (Index))
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator,
                                matches = [], matchesIndex = -1;

                            // Loop
                            while (iterator) {
                                // Initialization > (Index, Element)
                                var index = length - (iterator -= 1) - 1, element = array[index];

                                // Update > Matches
                                callback.call(array, index, element) && (matches[matchesIndex += 1] = element)
                            }

                            // Return
                            return matches
                        };

                        // Only
                        LapysDevelopmentKit.functions.arrayPrototypeOnly = function arrayPrototypeOnly(array, element) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (array[iterator -= 1] !== element) return false;

                            // Return
                            return true
                        };

                        // Pad --- NOTE (Lapys) -> Fills either side of an array with default-value elements; In JavaScript's case, that would be `undefined`.
                        LapysDevelopmentKit.functions.arrayPrototypePad = function arrayPrototypePad(array) {
                            // Update > Array
                            array = LDKF.arrayPrototypePadRight.apply(LDKF, arguments);

                            // Return
                            return LDKF.arrayPrototypePadLeft.apply(LDKF, arguments)
                        };

                        // Pad Left
                        LapysDevelopmentKit.functions.arrayPrototypePadLeft = function arrayPrototypePadLeft(array, length) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Update > (Iterator, Array)
                            while (iterator) { iterator -= 1; array[iterator + length] = array[iterator] }
                            while (length) array[length -= 1] = undefined;

                            // Return
                            return array
                        };

                        // Pad Right
                        LapysDevelopmentKit.functions.arrayPrototypePadRight = function arrayPrototypePadRight(array, length) {
                            // Update > Length
                            length += LDKF.arrayPrototypeLength(array);

                            // Loop > Update > (Length, Array)
                            while (length) { length -= 1; array[length] = array[length] }

                            // Return
                            return array
                        };

                        // Random
                        LapysDevelopmentKit.functions.arrayPrototypeRandom = function arrayPrototypeRandomIndex(array) { return array[LDKF.arrayPrototypeRandomIndex(array)] };

                        // Random Index
                        LapysDevelopmentKit.functions.arrayPrototypeRandomIndex = function arrayPrototypeRandomIndex(array) { return LDKM.int(LDKM.random() * LDKF.arrayPrototypeLength(array)) };

                        // Remove --- NOTE (Lapys) -> Consider using `Array.prototype.splice` for performance boosts.
                        LapysDevelopmentKit.functions.arrayPrototypeRemove = function arrayPrototypeRemove(array, element) { return LDKF.arrayPrototypeRemoveFromBack.apply(LDKF, arguments) };

                        // Remove All --- NOTE (Lapys) -> Implicitly functions as `LapysDevelopmentKit.functions.arrayPrototypeFree` if no Element is specified.
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveAll = function arrayPrototypeRemoveAll(array, element) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Logic
                            if (length == 1)
                                // Update > Array
                                LDKF.arrayPrototypeFree(array);

                            else
                                // Loop
                                while (iterator != 1) {
                                    // Initialization > Index
                                    var index;

                                    // Update > Element
                                    element = arguments[length - (iterator -= 1)];

                                    // Loop > Update > Array
                                    while (~(index = LDKF.arrayPrototypeIndexFromFront(array, element)))
                                        LDKF.arrayPrototypeCutIndex(array, index)
                                }

                            // Return
                            return array
                        };

                        // Remove Duplicate --- NOTE (Lapys) -> An element is a duplicate when it has multiple instances.
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicate = function arrayPrototypeRemoveDuplicate(array) { return LDKF.arrayPrototypeRemoveDuplicateFromBack(array) };

                        // Remove Duplicate From Back
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicateFromBack = function arrayPrototypeRemoveDuplicateFromBack(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceDuplicateFromBack(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Remove Duplicate From Front
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicateFromFront = function arrayPrototypeRemoveDuplicateFromFront(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceDuplicateFromFront(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Remove Duplicates
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicates = function arrayPrototypeRemoveDuplicates(array) { return LDKF.arrayPrototypeRemoveDuplicatesFromBack(array) };

                        // Remove Duplicates From Back
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicatesFromBack = function arrayPrototypeRemoveDuplicatesFromBack(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceDuplicatesFromBack(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Remove Duplicates From Front
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveDuplicatesFromFront = function arrayPrototypeRemoveDuplicatesFromFront(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceDuplicatesFromFront(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Remove From Back
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveFromBack = function arrayPrototypeRemoveFromBack(array, element) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop > Update > Array
                            while (iterator != 1) LDKF.arrayPrototypeCutIndex(array, LDKF.arrayPrototypeIndexFromBack(array, arguments[length - (iterator -= 1)]));

                            // Return
                            return array
                        };

                        // Remove From Front
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveFromFront = function arrayPrototypeRemoveFromFront(array, element) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop > Update > Array
                            while (iterator != 1) LDKF.arrayPrototypeCutIndex(array, LDKF.arrayPrototypeIndexFromFront(array, arguments[length - (iterator -= 1)]));

                            // Return
                            return array
                        };

                        // Remove Repeat
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveRepeat = function arrayPrototypeRemoveRepeat(array) { return LDKF.arrayPrototypeRemoveRepeatFromBack(array) };

                        // Remove Repeat From Back
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveRepeatFromBack = function arrayPrototypeRemoveRepeatFromBack(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceRepeatFromBack(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Remove Repeat From Front
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveRepeatFromFront = function arrayPrototypeRemoveRepeatFromFront(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceRepeatFromFront(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Remove Repeats
                        LapysDevelopmentKit.functions.arrayPrototypeRemoveRepeats = function arrayPrototypeRemoveRepeats(array) {
                            // Update > Array
                            LDKF.arrayPrototypeReplaceRepeats(array, UNIQUE);
                            LDKF.arrayPrototypeRemoveAll(array, UNIQUE);

                            // Return
                            return array
                        };

                        // Replace
                        LapysDevelopmentKit.functions.arrayPrototypeReplace = function arrayPrototypeReplace(array, element, replacement) { return LDKF.arrayPrototypeReplaceFromBack.apply(LDKF, arguments) };

                        // Replace All
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceAll = function arrayPrototypeReplaceAll(array, element, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 2)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveAll(array, element);

                            else {
                                // Initialization > Index
                                var index;

                                // Loop > Update > Array
                                while (~(index = LDKF.arrayPrototypeIndexFromFront(array, element))) array[index] = replacement
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicate
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceDuplicate = function arrayPrototypeReplaceDuplicate(array, replacement) { return LDKF.arrayPrototypeReplaceDuplicateFromBack.apply(LDKF, arguments) };

                        // Replace Duplicate From Back
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceDuplicateFromBack = function arrayPrototypeReplaceDuplicateFromBack(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveDuplicateFromBack(array);

                            else {
                                // Initialization > (Iterator, Length)
                                var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                                // Logic
                                if (length) {
                                    // Initialization > Instances (Length)
                                    var instances = LDKF.arrayPrototypeInstance(array), instancesLength = LDKF.arrayPrototypeLength(instances);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Index, Element, Instances Iterator)
                                        var index = length - (iterator -= 1) - 1, element = array[index], instancesIterator = instancesLength;

                                        // Loop
                                        while (instancesIterator) {
                                            // Initialization > Instance
                                            var instance = instances[instancesIterator -= 1];

                                            // Logic
                                            if (element === instance.element && instance.occurrence > 1) {
                                                // Update > Array
                                                array[index] = replacement;

                                                // Modification > Instance > Occurrence
                                                instance.occurrence = +0;

                                                // [Break]
                                                break
                                            }
                                        }
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicate From Front
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceDuplicateFromFront = function arrayPrototypeReplaceDuplicateFromFront(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveDuplicateFromFront(array);

                            else {
                                // Initialization > Iterator
                                var iterator = LDKF.arrayPrototypeLength(array);

                                // Logic
                                if (iterator) {
                                    // Initialization > Instances (Length)
                                    var instances = LDKF.arrayPrototypeInstance(array), instancesLength = LDKF.arrayPrototypeLength(instances);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Element, Instances Iterator)
                                        var element = array[iterator -= 1], instancesIterator = instancesLength;

                                        // Loop
                                        while (instancesIterator) {
                                            // Initialization > Instance
                                            var instance = instances[instancesIterator -= 1];

                                            // Logic
                                            if (element === instance.element && instance.occurrence > 1) {
                                                // Update > Array
                                                array[iterator] = replacement;

                                                // Modification > Instance > Occurrence
                                                instance.occurrence = +0;

                                                // [Break]
                                                break
                                            }
                                        }
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicates
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceDuplicates = function arrayPrototypeReplaceDuplicates(array, replacement) { return LDKF.arrayPrototypeReplaceDuplicatesFromBack.apply(LDKF, arguments) };

                        // Replace Duplicates From Back
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceDuplicatesFromBack = function arrayPrototypeReplaceDuplicatesFromBack(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveDuplicatesFromBack(array);

                            else {
                                // Initialization > (Constructor, Iterator)
                                var constructor = function() {}, iterator = LDKF.arrayPrototypeLength(array);

                                // Loop > Update > Array
                                while (!LDKF.arrayPrototypeIsDistinct(array)) LDKF.arrayPrototypeReplaceDuplicateFromBack(array, new constructor);

                                // Loop
                                while (iterator) {
                                    // Initialization > Element
                                    var element = array[iterator -= 1];

                                    // Update > Array
                                    (element && element instanceof constructor) && (array[iterator] = replacement)
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Duplicates From Front
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceDuplicatesFromFront = function arrayPrototypeReplaceDuplicatesFromFront(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveDuplicatesFromFront(array);

                            else {
                                // Initialization > (Constructor, Iterator)
                                var constructor = function() {}, iterator = LDKF.arrayPrototypeLength(array);

                                // Loop > Update > Array
                                while (!LDKF.arrayPrototypeIsDistinct(array)) LDKF.arrayPrototypeReplaceDuplicateFromFront(array, new constructor);

                                // Loop
                                while (iterator) {
                                    // Initialization > Element
                                    var element = array[iterator -= 1];

                                    // Update > Array
                                    (element && element instanceof constructor) && (array[iterator] = replacement)
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace From Back
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceFromBack = function arrayPrototypeReplaceFromBack(array, element, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 2)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveFromBack(array, element);

                            else {
                                // Initialization > Index
                                var index = LDKF.arrayPrototypeIndexFromBack(array, element);

                                // Update > Array
                                ~index && (array[index] = replacement)
                            }

                            // Return
                            return array
                        };

                        // Replace From Front
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceFromFront = function arrayPrototypeReplaceFromFront(array, element, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 2)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveFromFront(array, element);

                            else {
                                // Initialization > Index
                                var index = LDKF.arrayPrototypeIndexFromFront(array, element);

                                // Update > Array
                                ~index && (array[index] = replacement)
                            }

                            // Return
                            return array
                        };

                        // Replace Repeat
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceRepeat = function arrayPrototypeReplaceRepeat(array, replacement) { return LDKF.arrayPrototypeReplaceRepeatFromBack.apply(LDKF, arguments) };

                        // Replace Repeat From Back
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceRepeatFromBack = function arrayPrototypeReplaceRepeatFromBack(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveRepeatFromBack(array);

                            else {
                                // Initialization > (Iterator, Length)
                                var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                                // Logic
                                if (length) {
                                    // Initialization > Instances (Length)
                                    var instances = LDKF.arrayPrototypeInstance(array), instancesLength = LDKF.arrayPrototypeLength(instances);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Index, Element, Instances Iterator)
                                        var index = length - (iterator -= 1) - 1, element = array[index], instancesIterator = instancesLength;

                                        // Loop
                                        while (instancesIterator) {
                                            // Initialization > Instance
                                            var instance = instances[instancesIterator -= 1];

                                            // Logic
                                            if (element === instance.element)
                                                // Logic
                                                if (!instance.occurrence) {
                                                    // Update > Array
                                                    array[index] = replacement;

                                                    // Modification > Instance > Element --- NOTE (Lapys) -> Prevent this instance from being indexed.
                                                    instance.element = UNIQUE
                                                }

                                                else if (instance.occurrence > 1)
                                                    // Modification > Instance > Occurrence
                                                    instance.occurrence = +0
                                        }
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Repeat From Front
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceRepeatFromFront = function arrayPrototypeReplaceRepeatFromFront(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveRepeatFromFront(array);

                            else {
                                // Initialization > Iterator
                                var iterator = LDKF.arrayPrototypeLength(array);

                                // Logic
                                if (iterator) {
                                    // Initialization > Instances (Length)
                                    var instances = LDKF.arrayPrototypeInstance(array), instancesLength = LDKF.arrayPrototypeLength(instances);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Element, Instances Iterator)
                                        var element = array[iterator -= 1], instancesIterator = instancesLength;

                                        // Loop
                                        while (instancesIterator) {
                                            // Initialization > Instance
                                            var instance = instances[instancesIterator -= 1];

                                            // Logic
                                            if (element === instance.element)
                                                // Logic
                                                if (!instance.occurrence) {
                                                    // Update > Array
                                                    array[iterator] = replacement;

                                                    // Modification > Instance > Element --- NOTE (Lapys) -> Prevent this instance from being indexed.
                                                    instance.element = UNIQUE
                                                }

                                                else if (instance.occurrence > 1)
                                                    // Modification > Instance > Occurrence
                                                    instance.occurrence = +0
                                        }
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Replace Repeats
                        LapysDevelopmentKit.functions.arrayPrototypeReplaceRepeats = function arrayPrototypeReplaceRepeats(array, replacement) {
                            // Logic
                            if (LDKF.getArgumentsLength(arguments) == 1)
                                // Update > Array
                                LDKF.arrayPrototypeRemoveRepeats(array);

                            else {
                                // Initialization > Iterator
                                var iterator = LDKF.arrayPrototypeLength(array);

                                // Logic
                                if (iterator) {
                                    // Initialization > Instances (Length)
                                    var instances = LDKF.arrayPrototypeInstance(array), instancesLength = LDKF.arrayPrototypeLength(instances);

                                    // Loop
                                    while (iterator) {
                                        // Initialization > (Element, Instances Iterator)
                                        var element = array[iterator -= 1], instancesIterator = instancesLength;

                                        // Loop
                                        while (instancesIterator) {
                                            // Initialization > Instance
                                            var instance = instances[instancesIterator -= 1];

                                            // Logic
                                            if (element === instance.element && instance.occurrence != 1) {
                                                // Update > Array
                                                array[iterator] = replacement;

                                                // [Break]
                                                break
                                            }
                                        }
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Resize --- NOTE (Lapys) -> The Array is returned within private contexts.
                        LapysDevelopmentKit.functions.arrayPrototypeResize = function arrayPrototypeResize(array, length) { LDKF.objectPrototypeSetProperty(array, "length", length); return array };

                        // Reverse
                        LapysDevelopmentKit.functions.arrayPrototypeReverse = function arrayPrototypeReverse(array) {
                            // Initialization > (Iterator, Length, Reverse)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator,
                                reverse = [];

                            // Loop
                            while (iterator) {
                                // Update > (Iterator, Reverse)
                                iterator -= 1;
                                reverse[length - iterator - 1] = array[iterator]
                            }

                            // Return
                            return reverse
                        };

                        // Shift Left
                        LapysDevelopmentKit.functions.arrayPrototypeShiftLeft = function arrayPrototypeShiftLeft(array, length) {
                            // Logic
                            if (LDKF.numberPrototypeIsPositiveInteger(length)) {
                                // Initialization > Array Length
                                var arrayLength = LDKF.arrayPrototypeLength(array);

                                // Logic
                                if (length > arrayLength - 1)
                                    // Update > Array
                                    LDKF.arrayPrototypeFree(array);

                                else {
                                    // Initialization > Array Iterator
                                    var arrayIterator = arrayLength;

                                    // Loop
                                    while (arrayIterator) {
                                        // Initialization > Array Index
                                        var arrayIndex = arrayLength - (arrayIterator -= 1) - 1;

                                        // Update > Array
                                        (length < arrayIndex + 1) && (array[arrayIndex - length] = array[arrayIndex])
                                    }

                                    // Update > Array
                                    LDKF.arrayPrototypeResize(array, arrayLength - length)
                                }

                                // Return
                                return array
                            }

                            else
                                // Error
                                LDKF.error("Invalid array length: `" + LDKF.toString(length) + '`')
                        };

                        // Shift Right
                        LapysDevelopmentKit.functions.arrayPrototypeShiftRight = function arrayPrototypeShiftRight(array, length) {
                            // Logic
                            if (LDKF.numberPrototypeIsPositiveInteger(length)) {
                                // Initialization > Array Iterator
                                var arrayIterator = LDKF.arrayPrototypeLength(array);

                                // Loop
                                while (arrayIterator) {
                                    // Update > Array (Iterator)
                                    arrayIterator -= 1;
                                    array[arrayIterator + length] = array[arrayIterator]
                                }

                                // Loop > Deletion --- NOTE (Lapys) -> Free up some memory.
                                while (arrayIterator != length) LDKF.objectPrototypeDeleteProperty(array, (arrayIterator += 1) - 1);

                                // Return
                                return array
                            }

                            else
                                // Error
                                LDKF.error("Invalid array length: `" + LDKF.toString(length) + '`')
                        };

                        // Shuffle
                        LapysDevelopmentKit.functions.arrayPrototypeShuffle = function arrayPrototypeShuffle(array) {
                            // Initialization > (Length, Set, Shuffle)
                            var length = LDKF.arrayPrototypeLength(array),
                                set = LDKF.arrayPrototypeFill([], array),
                                shuffle = [], shuffleIndex = -1;

                            // Loop
                            while (length) {
                                // Initialization > (Index, Element)
                                var index, element;

                                // Loop
                                do {
                                    // Update > (Index, Element)
                                    index = LDKF.arrayPrototypeRandomIndex(set);
                                    element = set[index]
                                } while (element === UNIQUE);

                                // Update > (Length, Set, Shuffle)
                                length -= 1;
                                set[index] = UNIQUE;
                                shuffle[shuffleIndex += 1] = element
                            }

                            // Return
                            return shuffle
                        };

                        // Some
                        LapysDevelopmentKit.functions.arrayPrototypeSome = function arrayPrototypeSome(array, callback) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (callback(array[iterator -= 1])) return true;

                            // Return
                            return false
                        };

                        // Trim
                        LapysDevelopmentKit.functions.arrayPrototypeTrim = function arrayPrototypeTrim(array, element) {
                            // Update > Array
                            array = LDKF.arrayPrototypeTrimRight.apply(LDKF, arguments);

                            // Return
                            return LDKF.arrayPrototypeTrimLeft.apply(LDKF, arguments)
                        };

                        // Trim Left --- CHECKPOINT ---
                        LapysDevelopmentKit.functions.arrayPrototypeTrimLeft = function arrayPrototypeTrimLeft(array, element) {};

                        // Trim Right --- CHECKPOINT ---
                        LapysDevelopmentKit.functions.arrayPrototypeTrimRight = function arrayPrototypeTrimRight(array, element) {};

                    /* Size
                            --- NOTE ---
                                #Lapys:
                                    - Avoid `Array.prototype.length` or `LapysDevelopmentKit.functions.arrayPrototypeLength` because most JavaScript engines do not optimize for parsing sparse arrays to non-empty arrays.
                                    - If performance is necessary, use the `STRICT` clause to create a holey array quickly.
                    */
                    LapysDevelopmentKit.functions.arraySize = function arraySize(length, STRICT) {
                        // Initialization > Array
                        var array = [];

                        // Logic > Update > Array
                        if (STRICT) LDKF.arrayPrototypeResize(array, length);
                        else while (length) array[length -= 1] = undefined;

                        // Return
                        return array
                    };

                // Array-Like > Prototype
                    // Element At --- NOTE (Lapys) -> Some prototype methods used may be invalid in indexing the Array-Like object.
                    LapysDevelopmentKit.functions.arrayLikePrototypeElementAt = function arrayLikePrototypeElementAt(arrayLike, index) {
                        // Logic > Return
                        if (LDKF.isArguments(arrayLike)) return arrayLike[index];
                        else if (LDKF.isArray(arrayLike)) return arrayLike[index];
                        else if (LDKF.isAudioParameterMap(arrayLike)) return LDKF.audioParameterMapPrototypeGet(arrayLike, index);
                        else if (LDKF.isCSSNumericArray(arrayLike)) return arrayLike[index];
                        else if (LDKF.isCSSRuleList(arrayLike)) return LDKF.cssRuleListPrototypeItem(arrayLike, index);
                        else if (LDKF.isCSSStyleDeclaration(arrayLike)) return LDKF.cssStyleDeclarationPrototypeItem(arrayLike, index);
                        else if (LDKF.isDataTransferItemList(arrayLike)) return arrayLike[index];
                        else if (LDKF.isDOMRectangleList(arrayLike)) return LDKF.domRectangleListPrototypeItem(arrayLike, index);
                        else if (LDKF.isDOMStringList(arrayLike)) return LDKF.domStringListPrototypeItem(arrayLike, index);
                        else if (LDKF.isDOMTokenList(arrayLike)) return LDKF.domTokenListPrototypeItem(arrayLike, index);
                        else if (LDKF.isFileList(arrayLike)) return LDKF.fileListPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLAllCollection(arrayLike)) return LDKF.htmlAllCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLCollection(arrayLike)) return LDKF.htmlCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLFormControlsCollection(arrayLike)) return LDKF.htmlFormControlsCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLOptionsCollection(arrayLike)) return LDKF.htmlOptionsCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isMap(arrayLike)) return LDKF.mapPrototypeGet(arrayLike, index);
                        else if (LDKF.isMediaKeyStatusMap(arrayLike)) return LDKF.mediaKeyStatusMapPrototypeGet(arrayLike, index);
                        else if (LDKF.isMediaList(arrayLike)) return LDKF.mediaListPrototypeItem(arrayLike, index);
                        else if (LDKF.isMIMETypeArray(arrayLike)) return LDKF.mimeTypeArrayPrototypeItem(arrayLike, index);
                        else if (LDKF.isNamedNodeMap(arrayLike)) return LDKF.namedNodeMapPrototypeItem(arrayLike, index);
                        else if (LDKF.isNodeList(arrayLike)) return LDKF.nodeListPrototypeItem(arrayLike, item);
                        else if (LDKF.isPluginArray(arrayLike)) return LDKF.pluginArrayPrototypeItem(arrayLike, index);
                        else if (LDKF.isRadioNodeList(arrayLike)) return LDKF.radioNodeListPrototypeItem(arrayLike, index);
                        else if (LDKF.isSet(arrayLike)) return arrayLike[index];
                        else if (LDKF.isSourceBufferList(arrayLike)) return arrayLike[index];
                        else if (LDKF.isStylePropertyMap(arrayLike)) return LDKF.stylePropertyMapPrototypeGet(arrayLike, index);
                        else if (LDKF.isStylePropertyMapReadOnly(arrayLike)) return LDKF.stylePropertyMapReadOnlyPrototypeGet(arrayLike, index);
                        else if (LDKF.isStyleSheetList(arrayLike)) return LDKF.styleSheetListPrototypeItem(arrayLike, index);
                        else if (LDKF.isSVGLengthList(arrayLike)) return LDKF.svgLengthListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGNumberList(arrayLike)) return LDKF.svgNumberListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGPointList(arrayLike)) return LDKF.svgPointListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGStringList(arrayLike)) return LDKF.svgStringListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGTransformList(arrayLike)) return LDKF.svgTransformListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isTextTrackCueList(arrayLike)) return LDKF.textTrackCueListPrototypeGetCueById(arrayLike, index);
                        else if (LDKF.isTextTrackList(arrayLike)) return LDKF.textTrackListPrototypeGetTrackById(arrayLike, index);
                        else if (LDKF.isTouchList(arrayLike)) return LDKF.touchListPrototypeItem(arrayLike, index);
                        else if (LDKF.isTypedArrayLike(arrayLike)) return arrayLike[index];

                        // Return
                        return arrayLike[index]
                    };

                    // Length
                    LapysDevelopmentKit.functions.arrayLikePrototypeLength = function arrayLikePrototypeLength(arrayLike) {
                        // Logic > Return
                        if (LDKF.isArguments(arrayLike)) return LDKF.getArgumentsLength(arrayLike);
                        else if (LDKF.isArray(arrayLike)) return LDKF.arrayPrototypeLength(arrayLike);
                        else if (LDKF.isAudioParameterMap(arrayLike)) return LDKF.audioParameterMapPrototypeSize(arrayLike);
                        else if (LDKF.isCSSNumericArray(arrayLike)) return LDKF.cssNumericArrayPrototypeLength(arrayLike);
                        else if (LDKF.isCSSRuleList(arrayLike)) return LDKF.cssRuleListPrototypeLength(arrayLike);
                        else if (LDKF.isCSSStyleDeclaration(arrayLike)) return LDKF.cssStyleDeclarationPrototypeLength(arrayLike);
                        else if (LDKF.isDataTransferItemList(arrayLike)) return LDKF.dataTransferItemListPrototypeLength(arrayLike);
                        else if (LDKF.isDOMRectangleList(arrayLike)) return LDKF.domRectangleListPrototypeLength(arrayLike);
                        else if (LDKF.isDOMStringList(arrayLike)) return LDKF.domStringListPrototypeLength(arrayLike);
                        else if (LDKF.isDOMTokenList(arrayLike)) return LDKF.domTokenListPrototypeLength(arrayLike);
                        else if (LDKF.isFileList(arrayLike)) return LDKF.fileListPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLAllCollection(arrayLike)) return LDKF.htmlAllCollectionPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLCollection(arrayLike)) return LDKF.htmlCollectionPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLFormControlsCollection(arrayLike)) return LDKF.htmlFormControlsCollectionPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLOptionsCollection(arrayLike)) return LDKF.htmlOptionsCollectionPrototypeLength(arrayLike);
                        else if (LDKF.isLapysJSNodeList(arrayLike)) return LDKF.lapysJSNodeListPrototypeLength(arrayLike);
                        else if (LDKF.isMap(arrayLike)) return LDKF.mapPrototypeSize(arrayLike);
                        else if (LDKF.isMediaKeyStatusMap(arrayLike)) return LDKF.mediaKeyStatusMapPrototypeLength(arrayLike);
                        else if (LDKF.isMediaList(arrayLike)) return LDKF.mediaListPrototypeLength(arrayLike);
                        else if (LDKF.isMIMETypeArray(arrayLike)) return LDKF.mimeTypeArrayPrototypeLength(arrayLike);
                        else if (LDKF.isNamedNodeMap(arrayLike)) return LDKF.namedNodeMapPrototypeLength(arrayLike);
                        else if (LDKF.isNodeList(arrayLike)) return LDKF.nodeListPrototypeLength(arrayLike);
                        else if (LDKF.isPluginArray(arrayLike)) return LDKF.pluginArrayPrototypeLength(arrayLike);
                        else if (LDKF.isRadioNodeList(arrayLike)) return LDKF.radioNodeListPrototypeLength(arrayLike);
                        else if (LDKF.isSet(arrayLike)) return LDKF.setPrototypeSize(arrayLike);
                        else if (LDKF.isSourceBufferList(arrayLike)) return LDKF.sourceBufferListPrototypeLength(arrayLike);
                        else if (LDKF.isStylePropertyMap(arrayLike)) return LDKF.stylePropertyMapPrototypeSize(arrayLike);
                        else if (LDKF.isStylePropertyMapReadOnly(arrayLike)) return LDKF.stylePropertyMapReadOnlyPrototypeSize(arrayLike);
                        else if (LDKF.isStyleSheetList(arrayLike)) return LDKF.styleSheetListPrototypeLength(arrayLike);
                        else if (LDKF.isSVGLengthList(arrayLike)) return LDKF.svgLengthListPrototypeNumberOfItems(arrayLike);
                        else if (LDKF.isSVGNumberList(arrayLike)) return LDKF.svgNumberListPrototypeNumberOfItems(arrayLike);
                        else if (LDKF.isSVGPointList(arrayLike)) return LDKF.svgPointListPrototypeNumberOfItems(arrayLike);
                        else if (LDKF.isSVGStringList(arrayLike)) return LDKF.svgStringListPrototypeNumberOfItems(arrayLike);
                        else if (LDKF.isSVGTransformList(arrayLike)) return LDKF.svgTransformListPrototypeNumberOfItems(arrayLike);
                        else if (LDKF.isTextTrackCueList(arrayLike)) return LDKF.textTrackCueListPrototypeLength(arrayLike);
                        else if (LDKF.isTextTrackList(arrayLike)) return LDKF.textTrackListPrototypeLength(arrayLike);
                        else if (LDKF.isTouchList(arrayLike)) return LDKF.touchListPrototypeLength(arrayLike);
                        else if (LDKF.isTypedArrayLike(arrayLike)) return LDKF.typedArrayLikePrototypeLength(arrayLike);

                        // Initialization > (Key, Length)
                        var key, length = -1;

                        // Loop > Update > Length
                        for (key in arrayLike) LDKF.stringPrototypeIsNumeric(key) && (function(index) { (index > length) && (length = index) })(LDKF.toNumber(key));

                        // Return
                        return length + 1
                    };

                // Audio Parameter Map > Prototype
                    // Get
                    LapysDevelopmentKit.functions.audioParameterMapPrototypeGet = function audioParameterMapPrototypeGet(audioParameterMap, index) { return LDKO.audioParameterMapPrototypeGet.call(audioParameterMap, index) };

                    // Size
                    LapysDevelopmentKit.functions.audioParameterMapPrototypeSize = function audioParameterMapPrototypeSize(audioParameterMap) { return LDKO.audioParameterMapPrototypeSizeGetter.call(audioParameterMap) };

                // Cancel Animation Frame
                LapysDevelopmentKit.functions.cancelAnimationFrame = function cancelAnimationFrame(handle) { return LDKO.cancelAnimationFrame.call(GLOBAL, handle) };

                // Clear Interval
                LapysDevelopmentKit.functions.clearInterval = function clearInterval(timeoutId) {
                    // Initialization > Iterator
                    var iterator = LDKF.arrayPrototypeLength(LDKR.timeoutIDs);

                    // Loop
                    while (iterator)
                        // Logic
                        if (LDKR.timeoutIDs[iterator -= 1] === timeoutId) {
                            // Update > (((Lapys Development Kit > Settings) > Registry) > Timeout IDs)
                            LDKR.timeoutIDs[iterator] = UNIQUE;

                            // Return
                            return true
                        }

                    // Return
                    return false
                };

                // Clear Timeout
                LapysDevelopmentKit.functions.clearTimeout = function clearTimeout(timeoutId) { return LDKO.clearTimeout.call === LDKO.functionPrototypeCall ? LDKO.clearTimeout.call(GLOBAL, timeoutId) : LDKO.clearTimeout(timeoutId) };

                // Console
                    // Group
                    LapysDevelopmentKit.functions.consoleGroup = function consoleGroup() {
                        // Error Handling > (...)
                        try { LDKO.consoleGroup.apply(LDKC.console, arguments) }
                        catch (error) { LDKO.consoleGroup(LDKT.argumentsToConsoleStream.apply(LDKT, arguments)) }
                    };

                    // Group End
                    LapysDevelopmentKit.functions.consoleGroupEnd = function consoleGroupEnd() {
                        // Error Handling > (...)
                        try { LDKO.consoleGroupEnd() }
                        catch (error) { LDKO.consoleGroupEnd.call(LDKC.console) }
                    };

                    // Log
                    LapysDevelopmentKit.functions.consoleLog = function consoleLog() {
                        // Error Handling > (...)
                        try { LDKO.consoleLog.apply(LDKC.console, arguments) }
                        catch (error) { LDKO.consoleLog(LDKT.argumentsToConsoleStream.apply(LDKT, arguments)) }
                    };

                    // Warn
                    LapysDevelopmentKit.functions.consoleWarn = function consoleWarn() {
                        // Error Handling > (...)
                        try { LDKO.consoleWarn.apply(LDKC.console, arguments) }
                        catch (error) { LDKO.consoleWarn(LDKT.argumentsToConsoleStream.apply(LDKT, arguments)) }
                    };

                // Create Function --- WARN (Lapys) -> Avoid familiar use of this method as it heavily depends on the `eval` function.
                LapysDevelopmentKit.functions.createFunction = function createFunction(name, options, body) {
                    // Initialization > (Length, Source)
                    var length = LDKF.getArgumentsLength(arguments), source = "";

                    // Logic
                    if (!length)
                        // Update > Source
                        source = "function() {}";

                    else if (length == 1)
                        // Update > Source
                        source = "function " + name + "() {}";

                    else {
                        // Update > Name
                        name = name ? LDKF.toString(name) : "";

                        // Error --- NOTE (Lapys) -> Ensure the Name argument is syntactically valid.
                        try { name && LDKF.eval("var " + name) } catch (error) { LDKF.error("Invalid name `" + name + "` for function") }

                        // Update > Options --- NOTE (Lapys) -> Parse the given Options argument.
                        LDKF.isString(options) && (options = {params: [options]});
                        LDKF.isArray(options) && (options = {params: options});

                        // Error --- NOTE (Lapys) -> Still parse the given Options argument.
                        LDKF.isJSON(options) ?
                            (
                                !LDKF.objectPrototypeHasProperty(options, "params") &&
                                !LDKF.objectPrototypeHasProperty(options, "type")
                            ) && LDKF.error("The second argument given must either have a `params` or `type` property") :
                            LDKF.error("The second argument must be options for the function or parameters");

                        // Initialization > (Parameters (Count), Type) --- NOTE (Lapys) -> Again, still parse the given Options argument.
                        var paramsCount, parameters = LDKF.objectPrototypeHasProperty(options, "params") ? (function(parameters) {
                            // Update > Parameters
                            LDKF.isString(parameters) && (parameters = LDKF.objectPrototypeSetProperty(options, "params", [parameters]));

                            // Initialization > (Iterator, Length, Source) --- NOTE (Lapys) -> Parameters Count gets updated here.
                            var iterator = paramsCount = LDKF.arrayPrototypeLength(parameters), length = iterator, source = "";

                            // Loop
                            while (iterator) {
                                // Initialization > Parameter
                                var parameter = parameters[length - (iterator -= 1) - 1];

                                // Error Handling > (...)
                                try { LDKF.eval("(function(" + parameter + ") {})") }
                                catch (error) { LDKF.error("Function parameter `" + parameter + "` is syntactically invalid: '" + LDKF.errorPrototypeGetMessage(error) + '\'') }

                                // Update > Source
                                source += parameter + (iterator ? ", " : "")
                            }

                            // Return
                            return source
                        })(LDKF.objectPrototypeGetProperty(options, "params")) : "",
                            type = LDKF.objectPrototypeHasProperty(options, "type") ? LDKF.objectPrototypeGetProperty(options, "type") : "default";

                        // Error
                        (type == "arrow" || type == "class" || type == "default" || type == "generator") || LDKF.error("Invalid type `" + LDKF.toString(type) + "` for function");

                        // Logic --- NOTE (Lapys) -> Construct the code of an arrow function.
                        if (type == "arrow") {
                            // Update > Source
                            source += paramsCount == 1 && (function(parameter) {
                                // Initialization > Iterator
                                var iterator = -1;

                                // Loop
                                while (true) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(parameter, iterator += 1);

                                    // Logic > Return
                                    if (!character) return true;
                                    if (character != ' ' && !LDKF.stringPrototypeIsVariableCharacter(character)) return character != '='
                                }
                            })(parameters) ? "" : '(';

                            // Update > Source
                            source += (parameters ? (parameters + (LDKF.stringPrototypeCharacterAt(source, +0) ? ')' : "")) : "()") + " => ";

                            // Logic
                            if (length != 2) {
                                // Error Handling
                                try {
                                    // Execution
                                    LDKF.eval(source + body)
                                } catch (error) {
                                    // Initialization > Delimiter
                                    var delimiter = LDKF.stringPrototypeIncludes(body, '\n') ? '\n' : ' ';

                                    // Update > Body
                                    body = '{' + delimiter + body + delimiter + '}'
                                }

                                // Update > Source
                                source += body
                            }

                            else
                                // Update > Source
                                source += "{}"
                        }

                        else {
                            // Update > Body --- NOTE (Lapys) -> If the Body argument is not specified.
                            (length == 2) && (body = "");
                            body = LDKF.stringPrototypeTrim(body, ' ');

                            // Initialization > (Base Constructor, Body Delimiter)
                            var baseConstructor = LDKF.objectPrototypeHasProperty(options, "extends") ? LDKF.objectPrototypeGetProperty(options, "extends") : "",
                                bodyDelimiter = body ? (LDKF.stringPrototypeIncludes(body, '\n') ? '\n' : ' ') : "";

                            // Update > (Body, Source)
                            body = bodyDelimiter + body + bodyDelimiter;
                            source += type == "class" ?
                                (
                                    LDKC.allowsClassKeyword ?
                                        ("class" + (name ? ' ' + name + ' ' : ' ') + (baseConstructor && name ? "extends (" + baseConstructor + ") " : "") + "{ constructor(" + parameters + ") {" + body + "} }") :
                                        ("(function() { var method = function " + (name ? ' ' + name : "") + "(" + parameters + ") {" + body + "};" + (baseConstructor ? " method.prototype = LapysJS.tmp.evalScope.objectCreate(" + baseConstructor + "); " : "") + "return method })()")
                                ) :
                                "function" + (type == "generator" ? '*' : "") + (name ? ' ' + name : "") + "(" + parameters + ") {" + body + '}'
                        }
                    }

                    // Return
                    return LDKF.eval("(function() { return (" + source + ") })()")
                };

                // CSS Numeric Array
                    // Length
                    LapysDevelopmentKit.functions.cssNumericArrayPrototypeLength = function cssNumericArrayPrototypeLength(cssNumericArray) { return LDKO.cssNumericArrayPrototypeLengthGetter.call(cssNumericArray) };

                // CSS Rule List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.cssRuleListPrototypeItem = function cssRuleListPrototypeItem(cssRuleList, index) { return LDKO.cssRuleListPrototypeItem.call(cssRuleList, index) };

                    // Length
                    LapysDevelopmentKit.functions.cssRuleListPrototypeLength = function cssRuleListPrototypeLength(cssRuleList) { return LDKO.cssRuleListPrototypeLengthGetter.call(cssRuleList) };

                // CSS Style Declaration > Prototype
                    // Item
                    LapysDevelopmentKit.functions.cssStyleDeclarationPrototypeItem = function cssStyleDeclarationPrototypeItem(cssStyleDeclaration, index) { return LDKO.cssStyleDeclarationPrototypeItem.call(cssStyleDeclaration, index) };

                    // Length
                    LapysDevelopmentKit.functions.cssStyleDeclarationPrototypeLength = function cssStyleDeclarationPrototypeLength(cssStyleDeclaration) { return LDKO.cssStyleDeclarationPrototypeLengthGetter.call(cssStyleDeclaration) };

                // Data Transfer Item List > Prototype
                    // Length
                    LapysDevelopmentKit.functions.dataTransferItemListPrototypeLength = function dataTransferItemListPrototypeLength(dataTransferItemList) { return LDKO.dataTransferItemListPrototypeLengthGetter.call(dataTransferItemList) };

                // Date
                    // Now
                    LapysDevelopmentKit.functions.dateNow = function dateNow() { return LDKO.dateNow() };

                // Document > Prototype
                    // Create Element
                    LapysDevelopmentKit.functions.documentPrototypeCreateElement = function documentPrototypeCreateElement(document, localName) {
                        // Logic
                        if (LDKF.getArgumentsLength(arguments) == 1) {
                            // Update > (Local Name, Document)
                            localName = arguments[+0];
                            document = LDKC.document
                        }

                        // Return
                        return LDKO.documentPrototypeCreateElement.call(document, localName)
                    };

                // DOM Rectangle List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.domRectangleListPrototypeItem = function domRectangleListPrototypeItem(domRectangleList, index) { return LDKO.domRectangleListPrototypeItem.call(domRectangleList, index) };

                    // Length
                    LapysDevelopmentKit.functions.domRectangleListPrototypeLength = function domRectangleListPrototypeLength(domRectangleList) { return LDKO.domRectangleListPrototypeLengthGetter.call(domRectangleList) };

                // DOM String List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.domStringListPrototypeItem = function domStringListPrototypeItem(domStringList, index) { return LDKO.domStringListPrototypeItem.call(domStringList, index) };

                    // Length
                    LapysDevelopmentKit.functions.domStringListPrototypeLength = function domStringListPrototypeLength(domStringList) { return LDKO.domStringListPrototypeLengthGetter.call(domStringList) };

                // DOM Token List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.domTokenListPrototypeItem = function domTokenListPrototypeItem(domTokenList, index) { return LDKO.domTokenListPrototypeItem.call(domTokenList, index) };

                    // Length
                    LapysDevelopmentKit.functions.domTokenListPrototypeLength = function domTokenListPrototypeLength(domTokenList) { return LDKO.domTokenListPrototypeLengthGetter.call(domTokenList) };

                // Error --- NOTE (Lapys) -> The methods used in the function's statements are indicative of when errors are expected to be possibly thrown in the code.
                LapysDevelopmentKit.functions.error = function error() {
                    // Logic > Error
                    if (LDKC.hasLapysJSErrorConstructor) LDKF.throwLapysJSError.apply(LDKF, arguments);
                    else throw (LDKF.toDebugMessage.apply(LDKF, arguments))
                };
                    // Invalid Type
                    LapysDevelopmentKit.functions.error.invalidType = function invalidType(type) { return LDKF.error("`this` must be a `" + type + "`.") };

                    // Library Is Pre-Installed
                    LapysDevelopmentKit.functions.error.libraryIsPreInstalled = function libraryIsPreInstalled() { return LDKF.error(LDKI.messages.error.libraryIsPreInstalled) };

                    // Native To Environment
                    LapysDevelopmentKit.functions.error.nativeToEnvironment = function nativeToEnvironment(feature) { return LDKF.error("The " + LDKF.toString(feature) + LDKI.messages.error.nativeToEnvironmentSuffix) };

                    // Prototype
                        // Get Message
                        LapysDevelopmentKit.functions.errorPrototypeGetMessage = function errorPrototypeGetMessage(error) { return LDKF.objectPrototypeHasProperty(error, "message") ? LDKF.objectPrototypeGetProperty(error, "message") : (LDKF.objectPrototypeHasProperty(error, "description") ? LDKF.objectPrototypeGetProperty(error, "description") : null) };

                        // Set Message
                        LapysDevelopmentKit.functions.errorPrototypeSetMessage = function errorPrototypeSetMessage(error, message) {
                            // Initialization > Former Message
                            var formerMessage = {
                                // Description
                                description: LDKF.objectPrototypeHasProperty(error, "description") ? LDKF.objectPrototypeGetProperty(error, "description") : null,

                                // Message
                                message: LDKF.objectPrototypeHasProperty(error, "message") ? LDKF.objectPrototypeGetProperty(error, "message") : null
                            };

                            // Logic
                            if (!LDKF.isNull(formerMessage.description)) {
                                // Modification > Error > Description
                                LDKF.objectPrototypeSetProperty(error, "description", message);
                                (formerMessage.description === LDKF.objectPrototypeGetProperty(error, "description")) || LDKF.objectDefineProperty(error, "description", {configurable: true, enumerable: true, value: message, writable: true})
                            }

                            // Logic
                            if (!LDKF.isNull(formerMessage.message)) {
                                // Modification > Error > Message
                                LDKF.objectPrototypeSetProperty(error, "message", message);
                                (formerMessage.message === LDKF.objectPrototypeGetProperty(error, "message")) || LDKF.objectDefineProperty(error, "message", {configurable: true, enumerable: true, value: message, writable: true})
                            }

                            // Return
                            return message
                        };

                // Evaluate --- WARN (Lapys) -> Powerful, but slows down performance.
                LapysDevelopmentKit.functions.eval = function evaluate(source) { return LDKO.eval.call(GLOBAL, source) };

                // File List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.fileListPrototypeItem = function fileListPrototypeItem(fileList, index) { return LDKO.fileListPrototypeItem.call(fileList, index) };

                    // Length
                    LapysDevelopmentKit.functions.fileListPrototypeLength = function fileListPrototypeLength(fileList) { return LDKO.fileListPrototypeLengthGetter.call(fileList) };

                // Function > Prototype
                    // Get Body --- NOTE (Lapys) -> The function turned out huge because of the recursive nature of different function types (class extensions, function parameters and so on).
                    LapysDevelopmentKit.functions.functionPrototypeGetBody = function functionPrototypeGetBody(method) {
                        // Initialization > (Source, Stream, Syntax Type)
                        var source = LDKF.functionPrototypeToSourceString(method),
                            stream = "",
                            syntaxType = LDKF.functionPrototypeGetSyntaxType(method);

                        // Initialization > (Allow Stream, Body Is Indexed, Character, Is Within Scope, Iterator, Scope Lock, Stream, Stream Lock)
                        var allowStream = true,
                            bodyIsIndexed = false,
                            character,
                            isWithinScope = +0,
                            iterator = -1,
                            scopeLock = null, scopeLockLevel = +0,
                            stream = "", streamLock = null;

                        // Loop
                        while (!bodyIsIndexed) {
                            // Update > Character
                            character = LDKF.stringPrototypeCharacterAt(source, iterator += 1);

                            // Logic
                            if (allowStream) {
                                // Logic
                                if (character == '/' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '/') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = "//";

                                    // [Continue]
                                    continue
                                }

                                else if (character == '/' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '*') {
                                    // Update > Allow Stream
                                    allowStream = false;

                                    // [Continue]
                                    continue
                                }

                                else if (character == '\'' || character == '"') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = character;

                                    // [Continue]
                                    continue
                                }

                                // Logic --- NOTE (Lapys) -> Watch for the implicit local scope created by the non-local `extends` keyword and extended constructor.
                                if (
                                    syntaxType == "class" && !isWithinScope &&
                                    LDKF.stringPrototypeSlice(source, iterator, iterator + 7) == "extends" &&
                                    (function(iterator) {
                                        // Loop
                                        while (true) {
                                            // {Loop Ending Logic} Logic
                                                // {} --- NOTE (Lapys) -> Do not define extended & locally scoped constructors because they are handled validly (and implicitly) by the generic Scope Hierarchy Logic.
                                                if (LDKF.stringPrototypeCharacterAt(source, iterator) == '(')
                                                    // Return
                                                    return false;

                                                // {}
                                                else if (LDKF.stringPrototypeCharacterAt(source, iterator) != ' ')
                                                    // Return
                                                    return true;

                                            // Update > Iterator --- NOTE (Lapys) -> Update the state of the Loop Ending Logic.
                                            iterator += 1
                                        }
                                    })(iterator + 7)
                                ) {
                                    // Update > Scope Lock (Level)
                                    scopeLock = "extends";
                                    scopeLockLevel += 1
                                }

                                // Logic
                                if (!isWithinScope)
                                    // Logic
                                    switch (syntaxType) {
                                        // Arrow
                                        case "arrow":
                                            // Logic
                                            if (character == '=' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '>') {
                                                // Update > (Body Is Indexed, Iterator)
                                                bodyIsIndexed = true;
                                                iterator += 2
                                            }

                                            // [Break]
                                            break;

                                        // Class
                                        case "class":
                                            // Logic --- NOTE (Lapys) -> Due to the `extends` keyword, classes require scope detection.
                                            if (character == '{' && LDKF.isNull(scopeLock) && !isWithinScope) {
                                                // Update > (Body Is Indexed, Iterator)
                                                bodyIsIndexed = true;
                                                iterator -= 1
                                            }

                                            // [Break]
                                            break;

                                        // Default
                                        case "default":
                                            // Logic
                                            if (character == '{') {
                                                // Update > Body Is Indexed
                                                bodyIsIndexed = true;
                                                iterator -= 1
                                            }

                                            // [Break]
                                            break;

                                        // Generator
                                        case "generator":
                                            // Logic
                                            if (character == '{') {
                                                // Update > Body Is Indexed
                                                bodyIsIndexed = true;
                                                iterator -= 1
                                            }

                                            // [Break]
                                            break
                                    }

                                // [Scope Hierarchy Logic] Logic > Update > Within Scope
                                if (character == '(' || character == '{' || character == '[') isWithinScope += 1;
                                else if (character == ')' || character == '}' || character == ']') isWithinScope -= 1;

                                // Scope Lock --- NOTE (Lapys) -> Detect the end of an extended constructor (and extended constructor chain (using the Scope Lock Level variable)).
                                (character == '}' && scopeLock == "extends" && !isWithinScope) && ((scopeLockLevel -= 1) || (scopeLock = null))
                            }

                            else if (character == '\n' && streamLock == "//") {
                                // Update > (Allow) Stream (Lock)
                                allowStream = true;
                                streamLock = null;

                                // [Continue]
                                continue
                            }

                            else if (character == '*' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '/') {
                                // Update > Allow Stream
                                allowStream = true;

                                // [Continue]
                                continue
                            }

                            else if ((character == '\'' || character == '"') && character == streamLock) {
                                // Update > (Allow) Stream (Lock)
                                allowStream = true;
                                streamLock = null;

                                // [Continue]
                                continue
                            }
                        }

                        // Loop > Update > Stream
                        while (character)
                            (character = LDKF.stringPrototypeCharacterAt(source, iterator += 1)) && (stream += character);

                        // Return
                        return stream
                    };

                    // Get Head --- NOTE (Lapys) -> Mostly, the problem stems from implicit class extensions...
                    LapysDevelopmentKit.functions.functionPrototypeGetHead = function functionPrototypeGetHead(method) {
                        // Initialization > (Source, Stream, Syntax Type)
                        var source = LDKF.functionPrototypeToSourceString(method),
                            stream = "",
                            syntaxType = LDKF.functionPrototypeGetSyntaxType(method);

                        // Initialization > (Allow Stream, Body Is Indexed, Character, Is Within Scope, Iterator, Scope Lock, Stream, Stream Lock, Was Within Scope)
                        var allowStream = true,
                            bodyIsIndexed = false,
                            character,
                            isWithinScope = +0,
                            iterator = -1,
                            scopeLock = null,
                            stream = "", streamLock = null,
                            wasWithinScope = 1;

                        // Loop
                        while (true) {
                            // Update > Character
                            character = LDKF.stringPrototypeCharacterAt(source, iterator += 1);

                            // Logic
                            if (allowStream) {
                                // Logic
                                if (character == '/' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '/') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = "//"
                                }

                                else if (character == '/' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '*')
                                    // Update > Allow Stream
                                    allowStream = false;

                                else if (character == '\'' || character == '"') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = character
                                }

                                // Update > Was Within Scope --- NOTE (Lapys) -> Implicit `extends` keyword scopes are only valid with `class` or `function` syntax-ed functions.
                                (syntaxType == "class") && (
                                    LDKF.objectPrototypeIs.OR(LDKF.stringPrototypeSlice(source, iterator, iterator + 6), "class ", "class\n") ||
                                    LDKF.objectPrototypeIs.OR(LDKF.stringPrototypeSlice(source, iterator, iterator + 9), "function ", "function(", "function\n")
                                ) && (wasWithinScope -= 1);

                                // Logic > [Break]
                                if (
                                    ((character == '=' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '>') && syntaxType == "arrow" && !isWithinScope) ||
                                    (character == '{' && !isWithinScope && syntaxType == "class" && !wasWithinScope) ||
                                    (character == '{' && !isWithinScope && (syntaxType == "default" || syntaxType == "generator"))
                                ) break;

                                // Logic
                                if (character == '(' || character == '{' || character == '[') {
                                    // Update > (Is, Was) Within Scope
                                    isWithinScope += 1;
                                    (syntaxType == "class") && (character == '{') && (wasWithinScope += 1)
                                }

                                else if (character == ')' || character == '}' || character == ']')
                                    // Update > Is Within Scope
                                    isWithinScope -= 1
                            }

                            else if (character == '\n' && streamLock == "//") {
                                // Update > (Allow) Stream (Lock)
                                allowStream = true;
                                streamLock = null
                            }

                            else if (character == '*' && LDKF.stringPrototypeCharacterAt(source, iterator + 1) == '/')
                                // Update > Allow Stream
                                allowStream = true;

                            else if ((character == '\'' || character == '"') && streamLock == character) {
                                // Update > (Allow) Stream (Lock)
                                allowStream = true;
                                streamLock = null
                            }

                            // Update > Stream
                            stream += character
                        }

                        // Return
                        return stream
                    };

                    // Get Name
                    LapysDevelopmentKit.functions.functionPrototypeGetName = function functionPrototypeGetName(method) {
                        // Initialization > (Source, Stream, Syntax Type)
                        var source = LDKF.functionPrototypeToSourceString(method),
                            stream = "",
                            syntaxType = LDKF.functionPrototypeGetSyntaxType(method);

                        // Logic
                        switch (syntaxType) {
                            // Arrow
                            case "arrow":
                                // (...)
                                return "";

                                // [Break]
                                break;

                            // Class
                            case "class":
                                // (...)
                                var iterator = 6; while (LDKF.stringPrototypeCharacterAt(source, iterator) == '_' || LDKF.stringPrototypeCharacterAt(source, iterator) == '$' || LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeCharacterAt(source, iterator)) || (iterator && LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(source, iterator)))) stream += LDKF.stringPrototypeCharacterAt(source, (iterator += 1) - 1); return stream;

                                // [Break]
                                break;

                            // Default
                            case "default":
                                // (...)
                                var iterator = 9; while (LDKF.stringPrototypeCharacterAt(source, iterator) == '_' || LDKF.stringPrototypeCharacterAt(source, iterator) == '$' || LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeCharacterAt(source, iterator)) || (iterator && LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(source, iterator)))) stream += LDKF.stringPrototypeCharacterAt(source, (iterator += 1) - 1); return stream;

                                // [Break]
                                break;

                            // Generator
                            case "generator":
                                // Initialization > (Iterator, Character)
                                var iterator = LDKF.stringPrototypeIndex(source, '*') + 1,
                                    character = LDKF.stringPrototypeCharacterAt(source, iterator);

                                // Loop
                                while (character == ' ' || LDKF.stringPrototypeIsAlphabet(character)) {
                                    // Update > (Stream, Character)
                                    (character == ' ') || (stream += character);
                                    character = LDKF.stringPrototypeCharacterAt(source, iterator += 1)
                                }

                                // Return
                                return stream
                        }

                        // Return
                        return ""
                    };

                    // Get Parameters
                    LapysDevelopmentKit.functions.functionPrototypeGetParameters = function functionPrototypeGetParameters(method) {
                        // Initialization > Parameters (Iterator)
                        var parameters = [], parametersIterator = -1;

                        // Initialization > (Syntax Type, Head)
                        var syntaxType = LDKF.functionPrototypeGetSyntaxType(method),
                            head = LDKF.functionPrototypeGetHead(method);

                        // Update > Head
                        head = syntaxType == "class" ?
                            (function(source) {
                                // Initialization > (Is Within Scope, Iterator, Length, Stream)
                                var isWithinScope = false,
                                    iterator = LDKF.stringPrototypeLength(source),
                                    length = iterator,
                                    stream = "";

                                // Loop
                                while (iterator) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(source, length - (iterator -= 1) - 1);

                                    // Logic > Update > Is Within Scope
                                    if (character == '(' || character == '{' || character == '[') isWithinScope += 1;
                                    else if (character == ')' || character == '}' || character == ']') isWithinScope -= 1;

                                    // Update > Stream
                                    stream += character;

                                    // Logic > Break
                                    if (character == ')' && !isWithinScope) break
                                }

                                // Return
                                return stream
                            })(LDKF.stringPrototypeTrimLeft(LDKF.functionPrototypeGetBody(method), [' ', '{', "constructor"])) :
                            (syntaxType == "arrow" ? head : LDKF.stringPrototypeTrimLeft(head,
                                [
                                    "class ", "class\n",
                                    "function ", "function(", "function\n",
                                    "function*",
                                    ' ', '*', '\n'
                                ],
                                LDKC.string.variableCharacters,
                                [' ', '\n']
                            ));

                        // Initialization > (Character, Iterator, Parameter, Is Within Scope)
                        var character,
                            iterator = LDKF.stringPrototypeLength(head), length = iterator,
                            parameter = "",
                            isWithinScope = -1;

                        // Loop
                        while (iterator) {
                            // Update > Character
                            character = LDKF.stringPrototypeCharacterAt(head, length - (iterator -= 1) - 1);

                            // Logic > Update > Is Within Scope
                            if (character == '(' || character == '{' || character == '[') isWithinScope += 1;
                            else if (character == ')' || character == '}' || character == ']') isWithinScope -= 1;

                            // Logic
                            if (character == ',' && !isWithinScope) {
                                // Update > Parameter(s)
                                parameters[parametersIterator += 1] = parameter;
                                parameter = "";

                                // [Continue]
                                continue
                            }

                            // Update > Parameter
                            parameter += character
                        }

                        // Update > Parameters
                        parameters[parametersIterator += 1] = parameter;
                        parameters[+0] = LDKF.stringPrototypeTrimLeft(parameters[+0], [' ', '(']);
                        parameters[parametersIterator] = LDKF.stringPrototypeTrimRight(parameters[parametersIterator], [' ', ')']);
                        parametersIterator += 1;

                        // Loop
                        while (parametersIterator) {
                            // Update > Parameters (Iterator)
                            parametersIterator -= 1;
                            parameter = LDKF.stringPrototypeTrim(parameters[parametersIterator]);
                            parameters[parametersIterator] = {
                                // Name
                                name: (function() {
                                    // Initialization > (Iterator, Length, Name)
                                    var iterator = -1, length = LDKF.stringPrototypeLength(parameter),
                                        name = "";

                                    // Loop
                                    while (iterator != length) {
                                        // Initialization > Character
                                        var character = LDKF.stringPrototypeCharacterAt(parameter, iterator += 1);

                                        // Logic > [Break]
                                        if (character == '=') break;

                                        // Update > Name
                                        name += character
                                    }

                                    // Return
                                    return LDKF.stringPrototypeTrim(name)
                                })(),

                                // Value
                                value: (function() {
                                    // Initialization > (Allow Stream, Iterator, Length, Value)
                                    var allowStream = false,
                                        iterator = -1, length = LDKF.stringPrototypeLength(parameter) - 1,
                                        value = "";

                                    // Loop
                                    while (iterator != length) {
                                        // Initialization > Character
                                        var character = LDKF.stringPrototypeCharacterAt(parameter, iterator += 1);

                                        // Update > (Value | Allow Stream)
                                        allowStream ? value += character : ((character == '=') && (allowStream = true))
                                    }

                                    // Return
                                    return LDKF.stringPrototypeTrim(value)
                                })(),

                                // To String
                                toString: function toString() { return parameters[parametersIterator].name + parameters[parametersIterator].value }
                            }
                        }

                        // Return
                        return parameters
                    };

                    // Get Syntax Type
                    LapysDevelopmentKit.functions.functionPrototypeGetSyntaxType = function functionPrototypeGetSyntaxType(method) {
                        // Initialization > Source
                        var source = LDKF.functionPrototypeToSourceString(method);

                        // Logic
                        if (source != "undefined")
                            // Logic > Return
                            if (LDKF.stringPrototypeCharacterAt(source, +0) == 'c' && LDKF.stringPrototypeCharacterAt(source, 1) == 'l' && LDKF.stringPrototypeCharacterAt(source, 2) == 'a' && LDKF.stringPrototypeCharacterAt(source, 3) == 's' && LDKF.stringPrototypeCharacterAt(source, 4) == 's') return "class";
                            else if (LDKF.stringPrototypeCharacterAt(source, +0) == 'f' && LDKF.stringPrototypeCharacterAt(source, 1) == 'u' && LDKF.stringPrototypeCharacterAt(source, 2) == 'n' && LDKF.stringPrototypeCharacterAt(source, 3) == 'c' && LDKF.stringPrototypeCharacterAt(source, 4) == 't' && LDKF.stringPrototypeCharacterAt(source, 5) == 'i' && LDKF.stringPrototypeCharacterAt(source, 6) == 'o' && LDKF.stringPrototypeCharacterAt(source, 7) == 'n') return (function() {
                                // Initialization > (Iterator, Length)
                                var iterator = 7, length = LDKF.stringPrototypeLength(source);

                                // Loop
                                while (iterator != length) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(source, iterator += 1);

                                    // Logic > Return
                                    if (character == '(') return false;
                                    else if (character == '*') return true
                                }
                            })() ? "generator" : "default";
                            else if (
                                // NOTE (Lapys) -> Not all arrow functions begin with English characters.
                                LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeCharacterAt(source, +0)) ||
                                LDKF.stringPrototypeCharacterAt(source, +0) == '_' || LDKF.stringPrototypeCharacterAt(source, +0) == '$' || LDKF.stringPrototypeCharacterAt(source, +0) == '(' ||
                                LDKF.stringPrototypeIncludes(source, "=>")
                            ) return "arrow";

                        // Return
                        return null
                    };

                    // Is Arrow
                    LapysDevelopmentKit.functions.functionPrototypeIsArrow = function functionPrototypeIsArrow(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "arrow" };

                    // Is Class
                    LapysDevelopmentKit.functions.functionPrototypeIsClass = function functionPrototypeIsClass(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "class" };

                    // Is Generator
                    LapysDevelopmentKit.functions.functionPrototypeIsGenerator = function functionPrototypeIsGenerator(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "generator" };

                    // Is Default
                    LapysDevelopmentKit.functions.functionPrototypeIsDefault = function functionPrototypeIsDefault(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "default" };

                    // Is Native
                    LapysDevelopmentKit.functions.functionPrototypeIsNative = function functionPrototypeIsNative(method, STRICT) {
                        // Initialization > ((Allow) Stream (Lock), Source, Iterator, Length)
                        var allowStream = true,
                            source = LDKF.functionPrototypeToSourceString(method),
                            iterator = LDKF.stringPrototypeLength(source),
                            length = iterator,
                            stream = "",
                            streamLock = null;

                        // Logic
                        if (!STRICT) {
                            // Logic > Return
                            if (LDKF.isNonConstructible(method)) return false;
                            if (LDKF.isNull(LDKF.functionPrototypeGetSyntaxType(method))) return true
                        }

                        // Loop
                        while (iterator > +0) {
                            // Initialization > Character
                            var character = LDKF.stringPrototypeCharacterAt(source, length - (iterator -= 1) - 1);

                            // Logic
                            if (allowStream) {
                                // Logic
                                if (character == '/' && LDKF.stringPrototypeCharacterAt(source, length - iterator) == '/') {
                                    // Update > ((Allow) Stream (Lock), Iterator)
                                    allowStream = false;
                                    iterator -= 1;
                                    streamLock = "//";

                                    // [Continue]
                                    continue
                                }

                                else if (character == '/' && LDKF.stringPrototypeCharacterAt(source, length - iterator) == '*') {
                                    // Update > (Allow Stream, Iterator)
                                    allowStream = false;
                                    iterator -= 1;

                                    // [Continue]
                                    continue
                                }

                                else if (character == '\'' || character == '"') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = character;

                                    // [Continue]
                                    continue
                                }

                                // Update > Stream
                                stream += character
                            }

                            else if (character == '\n' && streamLock == "//") {
                                // Update > ((Allow) Stream (Lock), Iterator)
                                allowStream = true;
                                iterator += 1;
                                streamLock = null
                            }

                            else if (character == '*' && LDKF.stringPrototypeCharacterAt(source, length - iterator) == '/') {
                                // Update > (Allow Stream, Iterator)
                                allowStream = true;
                                iterator -= 1;

                                // [Continue]
                                continue
                            }

                            else if ((character == '\'' || character == '"') && character == streamLock) {
                                // Update > (Allow) Stream (Lock)
                                allowStream = true;
                                streamLock = null;

                                // [Continue]
                                continue
                            }
                        }

                        // Return
                        return LDKF.stringPrototypeIncludes(stream, "[Command Line API]") || LDKF.stringPrototypeIncludes(stream, "[native code]")
                    };
                        // Is Arrow
                        LapysDevelopmentKit.functions.functionPrototypeIsNativeArrow = function functionPrototypeIsArrow(method) { return LDKF.functionPrototypeIsArrow(method) && LDKF.functionPrototypeIsNative(method) };

                        // Is Class
                        LapysDevelopmentKit.functions.functionPrototypeIsNativeClass = function functionPrototypeIsClass(method) { return LDKF.functionPrototypeIsClass(method) && LDKF.functionPrototypeIsNative(method) };

                        // Is Default
                        LapysDevelopmentKit.functions.functionPrototypeIsNativeDefault = function functionPrototypeIsClass(method) { return LDKF.functionPrototypeIsDefault(method) && LDKF.functionPrototypeIsNative(method) };

                        // Is Generator
                        LapysDevelopmentKit.functions.functionPrototypeIsNativeGenerator = function functionPrototypeIsGenerator(method) { return LDKF.functionPrototypeIsGenerator(method) && LDKF.functionPrototypeIsNative(method) };

                    // Is User-Defined
                    LapysDevelopmentKit.functions.functionPrototypeIsUserDefined = function functionPrototypeIsUserDefined(method) { return !LDKF.functionPrototypeIsNative(method) };

                    // Measure
                    LapysDevelopmentKit.functions.functionPrototypeMeasure = function functionPrototypeMeasure(method) {
                        // Initialization > (Arguments, Timestamp)
                        var args = (function(args) {
                            // Initialization > (Argument List, Index, Iterator, Length)
                            var argumentList = [], index = -1,
                                iterator = LDKF.getArgumentsLength(args), length = iterator;

                            // Loop > Update > Argument List
                            while (iterator != 1) argumentList[index += 1] = args[length - (iterator -= 1)];

                            // Return
                            return argumentList
                        })(arguments), timestamp = LDKC.clock.timestamp();

                        // Method
                        method.apply(this, args);

                        // Return
                        return LDKC.clock.timestamp() - timestamp
                    };

                    // To Source String
                    LapysDevelopmentKit.functions.functionPrototypeToSourceString = function functionPrototypeToSourceString(method) { return LDKF.stringPrototypeTrim(LDKF.toString(method) || "") };

                // Get Arguments Length --- NOTE (Lapys) -> Fortunately, the `arguments.length` property is immutable.
                LapysDevelopmentKit.functions.getArgumentsLength = function getArgumentsLength(argumentsList) { return argumentsList.length };

                // HTML All Collection > Prototype
                    // Item
                    LapysDevelopmentKit.functions.htmlAllCollectionPrototypeItem = function htmlAllCollectionPrototypeItem(htmlAllCollection, index) { return LDKO.htmlAllCollectionPrototypeItem.call(htmlAllCollection, index) };

                    // Length
                    LapysDevelopmentKit.functions.htmlAllCollectionPrototypeLength = function htmlAllCollectionPrototypeLength(htmlAllCollection) { return LDKO.htmlAllCollectionPrototypeLengthGetter.call(htmlAllCollection) };

                // HTML Collection > Prototype
                    // Item
                    LapysDevelopmentKit.functions.htmlCollectionPrototypeItem = function htmlCollectionPrototypeItem(htmlCollection, index) { return LDKO.htmlCollectionPrototypeItem.call(htmlCollection, index) };

                    // Length
                    LapysDevelopmentKit.functions.htmlCollectionPrototypeLength = function htmlCollectionPrototypeLength(htmlCollection) { return LDKO.htmlCollectionPrototypeLengthGetter.call(htmlCollection) };

                // HTML Form Controls Collection > Prototype
                    // Item
                    LapysDevelopmentKit.functions.htmlFormControlsCollectionPrototypeItem = function htmlFormControlsCollectionPrototypeItem(htmlFormControlsCollection, index) { return LDKO.htmlFormControlsCollectionPrototypeItem.call(htmlFormControlsCollection, index) };

                    // Length
                    LapysDevelopmentKit.functions.htmlFormControlsCollectionPrototypeLength = function htmlFormControlsCollectionPrototypeLength(htmlFormControlsCollection) { return LDKO.htmlFormControlsCollectionPrototypeLengthGetter.call(htmlFormControlsCollection) };

                // HTML Options Collection > Prototype
                    // Item
                    LapysDevelopmentKit.functions.htmlOptionsCollectionPrototypeItem = function htmlOptionsCollectionPrototypeItem(htmlOptionsCollection, index) { return LDKO.htmlOptionsCollectionPrototypeItem.call(htmlOptionsCollection, index) };

                    // Length
                    LapysDevelopmentKit.functions.htmlOptionsCollectionPrototypeLength = function htmlOptionsCollectionPrototypeLength(htmlOptionsCollection) { return LDKO.htmlOptionsCollectionPrototypeLengthGetter.call(htmlOptionsCollection) };

                // Is Abort Error
                LapysDevelopmentKit.functions.isAbortError = function isAbortError(arg) { return LDKT.isConstructibleObject(arg, LDKO.abortError, LDKO.abortErrorPrototype) };

                // Is Arguments
                LapysDevelopmentKit.functions.isArguments = function isArguments(arg) { return LDKF.objectPrototypeConstructor(arg) === LDKO.object && LDKF.isFunction(LDKF.objectPrototypeGetProperty(arg, "callee")) && LDKF.objectPrototypeHasProperty(arg, "length") && LDKF.objectPrototypeIs.OR(LDKF.toString(arg), "[object Arguments]", "[object Object]") };

                // Is Array
                LapysDevelopmentKit.functions.isArray = function isArray(arg) {
                    // Error Handling > Return
                    try { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKF.objectPrototypeConstructor(arg) === LDKO.array && (!LDKC.has__Proto__Accessor || LDKF.isNull(LDKF.objectPrototypeGet__Prototype__(LDKF.objectPrototypeGet__Prototype__(LDKF.objectPrototypeGet__Prototype__(arg))))) }
                    catch (error) {}

                    // Return
                    return false
                };

                // Is Array-Like --- NOTE (Lapys) -> The first of confusingly named test methods.
                LapysDevelopmentKit.functions.isArrayLike = function isArrayLike(arg) { return LDKF.isArray(arg) || LDKF.isStrictlyArrayLike(arg) };

                // Is Attribute
                LapysDevelopmentKit.functions.isAttribute = function isAttribute(arg) { return LDKT.isConstructibleObject(arg, LDKO.attribute, LDKO.attributePrototype) };

                // Is Audio Parameter Map
                LapysDevelopmentKit.functions.isAudioParameterMap = function isAudioParameterMap(arg) { return LDKC.hasAudioParameterMapConstructor ? LDKT.isConstructibleObject(arg, LDKO.audioParameterMap, LDKO.audioParameterMapPrototype) : LDKF.isStrictlyAudioParameterMapLike(arg) };

                // Is Boolean
                LapysDevelopmentKit.functions.isBoolean = function isBoolean(arg) { return typeof arg == "boolean" };

                // Is Clock
                LapysDevelopmentKit.functions.isClock = function isClock(arg) { return LDKT.isConstructibleObject(arg, LDKD.clock, LDKD.clockPrototype) };

                // Is Constraint Error
                LapysDevelopmentKit.functions.isConstraintError = function isConstraintError(arg) { return LDKT.isConstructibleObject(arg, LDKO.constraintError, LDKO.constraintErrorPrototype) };

                // Is Constraint Not Satisfied Error
                LapysDevelopmentKit.functions.isConstraintNotSatisfiedError = function isConstraintNotSatisfiedError(arg) { return LDKT.isConstructibleObject(arg, LDKO.constraintNotSatisfiedError, LDKO.constraintNotSatisfiedErrorPrototype) };

                // Is Constructible
                LapysDevelopmentKit.functions.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                // Is CSS Numeric Array
                LapysDevelopmentKit.functions.isCSSNumericArray = function isCSSNumericArray(arg) { return LDKC.hasCSSNumericArrayConstructor ? LDKT.isConstructibleObject(arg, LDKO.cssNumericArray, LDKO.cssNumericArrayPrototype) : LDKF.isStrictlyCSSNumericArrayLike(arg) };

                // Is CSS Rule List
                LapysDevelopmentKit.functions.isCSSRuleList = function isCSSRuleList(arg) { return LDKC.hasCSSRuleListConstructor ? LDKT.isConstructibleObject(arg, LDKO.cssRuleList, LDKO.cssRuleListPrototype) : LDKF.isStrictlyCSSRuleListLike(arg) };

                // Is CSS Style Declaration
                LapysDevelopmentKit.functions.isCSSStyleDeclaration = function isCSSStyleDeclaration(arg) { return LDKC.hasCSSStyleDeclarationConstructor ? LDKT.isConstructibleObject(arg, LDKO.cssStyleDeclaration, LDKO.cssStyleDeclarationPrototype) : LDKF.isStrictlyCSSStyleDeclarationLike(arg) };

                // Is Data Error
                LapysDevelopmentKit.functions.isDataError = function isDataError(arg) { return LDKT.isConstructibleObject(arg, LDKO.dataError, LDKO.dataErrorPrototype) };

                // Is Data Clone Error
                LapysDevelopmentKit.functions.isDataCloneError = function isDataCloneError(arg) { return LDKT.isConstructibleObject(arg, LDKO.dataCloneError, LDKO.dataCloneErrorPrototype) };

                // Is Data Transfer Item List
                LapysDevelopmentKit.functions.isDataTransferItemList = function isDataTransferItemList(arg) { return LDKC.hasDataTransferItemListConstructor ? LDKT.isConstructibleObject(arg, LDKO.dataTransterItemList, LDKO.dataTransterItemListPrototype) : LDKF.isStrictlyDataTransferItemListLike(arg) };

                // Is Devices Not Found Error
                LapysDevelopmentKit.functions.isDevicesNotFoundError = function isDevicesNotFoundError(arg) { return LDKT.isConstructibleObject(arg, LDKO.devicesNotFoundError, LDKO.devicesNotFoundErrorPrototype) };

                // Is Document
                LapysDevelopmentKit.functions.isDocument = function isDocument(arg, PRIVATE) { return LDKC.hasDocumentConstructor ? LDKT.isConstructibleObject(arg, LDKO.document, LDKO.documentPrototype) : LDKF.isStrictlyDocumentLike(arg, PRIVATE) };

                // Is Document-Like
                LapysDevelopmentKit.functions.isDocumentLike = function isDocumentLike(arg, PRIVATE) { return LDKF.isDocument(arg, PRIVATE) || LDKF.isStrictlyDocumentLike(arg, PRIVATE) };

                // Is Document Type
                LapysDevelopmentKit.functions.isDocumentType = function isDocumentType(arg) { return LDKT.isConstructibleObject(arg, LDKO.documentType, LDKO.documentTypePrototype) };

                // Is DOM Error
                LapysDevelopmentKit.functions.isDOMError = function isDOMError(arg) { return LDKT.isConstructibleObject(arg, LDKO.domError, LDKO.domErrorPrototype) };

                // Is DOM Exception
                LapysDevelopmentKit.functions.isDOMException = function isDOMException(arg) { return LDKT.isConstructibleObject(arg, LDKO.domException, LDKO.domExceptionPrototype) };

                // Is DOM Rectangle List
                LapysDevelopmentKit.functions.isDOMRectangleList = function isDOMRectangleList(arg) { return LDKC.hasDOMRectangleListConstructor ? LDKT.isConstructibleObject(arg, LDKO.domRectangleList, LDKO.domRectangleListPrototype) : LDKF.isStrictlyDOMRectangleListLike(arg) };

                // Is DOM String List
                LapysDevelopmentKit.functions.isDOMStringList = function isDOMStringList(arg) { return LDKC.hasDOMStringListConstructor ? LDKT.isConstructibleObject(arg, LDKO.domStringList, LDKO.domStringListPrototype) : LDKF.isStrictlyDOMStringListLike(arg) };

                // Is DOM Token List
                LapysDevelopmentKit.functions.isDOMTokenList = function isDOMTokenList(arg) { return LDKC.hasDOMTokenListConstructor ? LDKT.isConstructibleObject(arg, LDKO.domTokenList, LDKO.domTokenListPrototype) : LDKF.isStrictlyDOMTokenListLike(arg) };

                // Is Element
                LapysDevelopmentKit.functions.isElement = function isElement(arg, PRIVATE) { return LDKC.hasElementConstructor ? LDKT.isConstructibleObject(arg, LDKO.element, LDKO.elementPrototype) : LDKF.isStrictlyElementLike(arg, PRIVATE) };

                // Is Element-Like
                LapysDevelopmentKit.functions.isElementLike = function isElementLike(arg, PRIVATE) { return LDKF.isElement(arg, PRIVATE) || LDKF.isStrictlyElementLike(arg, PRIVATE) };

                // Is Encoding Error
                LapysDevelopmentKit.functions.isEncodingError = function isEncodingError(arg) { return LDKT.isConstructibleObject(arg, LDKO.encodingError, LDKO.encodingErrorPrototype) };

                // Is Error
                LapysDevelopmentKit.functions.isError = function isError(arg) { return LDKT.isConstructibleObject(arg, LDKO.error, LDKO.errorPrototype) };

                // Is Error-Like
                LapysDevelopmentKit.functions.isErrorLike = function isErrorLike(arg) { return LDKF.isError(arg) || LDKF.isStrictlyErrorLike(arg) };

                // Is Evaluation Error
                LapysDevelopmentKit.functions.isEvalError = function isEvalError(arg) { return LDKT.isConstructibleObject(arg, LDKO.evalError, LDKO.evalErrorPrototype) };

                // Is Event
                LapysDevelopmentKit.functions.isEvent = function isEvent(arg, PRIVATE) { return LDKC.hasEventConstructor ? LDKT.isConstructibleObject(arg, LDKO.event, LDKO.eventPrototype) : LDKF.isStrictlyEventLike(arg, PRIVATE) };

                // Is Event Exception
                LapysDevelopmentKit.functions.isEventException = function isEventException(arg) { return LDKT.isConstructibleObject(arg, LDKO.eventException, LDKO.eventExceptionPrototype) };

                // Is Event-Like --- NOTE (Lapys) -> Oddly enough, `KeyEvent` is not an `Event`-based object.
                LapysDevelopmentKit.functions.isEventLike = function isEventLike(arg, PRIVATE) { return LDKF.isEvent(arg, PRIVATE) || LDKF.isStrictlyEventLike(arg, PRIVATE) };

                // Is Event Target
                LapysDevelopmentKit.functions.isEventTarget = function isEventTarget(arg, PRIVATE) { return LDKC.hasEventTargetConstructor ? LDKT.isConstructibleObject(arg, LDKO.eventTarget, LDKO.eventTargetPrototype) : LDKF.isStrictlyEventTargetLike(arg, PRIVATE) };

                // Is Event Target-Like
                LapysDevelopmentKit.functions.isEventTargetLike = function isEventTargetLike(arg, PRIVATE) { return LDKF.isEventTarget(arg, PRIVATE) || LDKF.isStrictlyEventTargetLike(arg, PRIVATE) };

                // Is File List
                LapysDevelopmentKit.functions.isFileList = function isFileList(arg) { return LDKC.hasFileListConstructor ? LDKT.isConstructibleObject(arg, LDKO.fileList, LDKO.fileListPrototype) : LDKF.isStrictlyFileListLike(arg) };

                // Is Frame
                LapysDevelopmentKit.functions.isFrame = function isFrame(arg) { return LDKT.isConstructibleObject(arg, LDKD.frame, LDKD.framePrototype) };

                // Is Function
                LapysDevelopmentKit.functions.isFunction = function isFunction(arg, STRICT) {
                    // Return
                    return typeof arg == "function" || (function() {
                        // Logic
                        if (
                            !LDKF.isVoid(LDKF, "activeXObject") || (
                                LDKF.objectPrototypeHasProperty(GLOBAL, "ActiveXObject") &&
                                (function(method) {
                                    // Is Active X Object Constructor
                                    var isActiveXObjectConstructor = LDKF.objectPrototypeIs.OR(typeof method, "function", "undefined") && LDKF.functionPrototypeIsNative(method, STRICT = true);

                                    // Modification > (Lapys Development Kit > Objects) > Active X Object
                                    isActiveXObjectConstructor && (LDKO.activeXObject = method);

                                    // Return
                                    return isActiveXObjectConstructor
                                })(LDKF.objectPrototypeGetProperty(GLOBAL, "ActiveXObject"))
                            )
                        )
                            // Return --- NOTE (Lapys) -> Other ways to determine if the Argument is a function (due to differing JavaScript environments).
                            return (typeof arg == "string" && arg === "[object]") ||
                                (typeof arg == "object" && LDKF.functionPrototypeIsDefault(arg));

                        else
                            // Return
                            return false
                    })()
                };

                // Is Hierarchy Request Error
                LapysDevelopmentKit.functions.isHierarchyRequestError = function isHierarchyRequestError(arg) { return LDKT.isConstructibleObject(arg, LDKO.hierarchyRequestError, LDKO.hierarchyRequestErrorPrototype) };

                // Is HTML All Collection
                LapysDevelopmentKit.functions.isHTMLAllCollection = function isHTMLAllCollection(arg, PRIVATE) { return LDKC.hasHTMLAllCollectionConstructor ? LDKF.objectPrototypePrototype(arg) === LDKO.htmlAllCollectionPrototype : LDKF.isStrictlyHTMLAllCollectionLike(arg, PRIVATE) };

                // Is HTML All Collection-Like
                LapysDevelopmentKit.functions.isHTMLAllCollectionLike = function isHTMLAllCollectionLike(arg, PRIVATE) { return LDKF.isHTMLAllCollection(arg, PRIVATE) || LDKF.isStrictlyHTMLAllCollectionLike(arg, PRIVATE) };

                // Is HTML Body Element
                LapysDevelopmentKit.functions.isHTMLBodyElement = function isHTMLBodyElement(arg, PRIVATE) { return LDKC.hasHTMLBodyElementConstructor ? LDKT.isConstructibleObject(arg, LDKO.htmlCollection, LDKO.htmlCollectionPrototype) : LDKF.isStrictlyHTMLBodyElementLike(arg, PRIVATE) };

                // Is HTML Body Element-Like
                LapysDevelopmentKit.functions.isHTMLBodyElementLike = function isHTMLBodyElementLike(arg, PRIVATE) { return LDKF.isHTMLBodyElement(arg, PRIVATE) || LDKF.isStrictlyHTMLBodyElementLike(arg, PRIVATE) };

                // Is HTML Collection
                LapysDevelopmentKit.functions.isHTMLCollection = function isHTMLCollection(arg, PRIVATE) { return LDKC.hasHTMLCollectionConstructor ? LDKT.isConstructibleObject(arg, LDKO.htmlCollection, LDKO.htmlCollectionPrototype) : LDKF.isStrictlyHTMLCollectionLike(arg, PRIVATE) };

                // Is HTML Collection-Like
                LapysDevelopmentKit.functions.isHTMLCollectionLike = function isHTMLCollectionLike(arg, PRIVATE) { return LDKF.isHTMLCollection(arg, PRIVATE) || LDKF.isStrictlyHTMLCollectionLike(arg, PRIVATE) };

                // Is HTML Document
                LapysDevelopmentKit.functions.isHTMLDocument = function isHTMLDocument(arg, PRIVATE) { return LDKC.hasHTMLDocumentConstructor ? LDKT.isConstructibleObject(arg, LDKO.htmlDocument, LDKO.htmlDocumentPrototype) : LDKF.isStrictlyHTMLDocumentLike(arg, PRIVATE) };

                // Is HTML Document-Like
                LapysDevelopmentKit.functions.isHTMLDocumentLike = function isHTMLDocumentLike(arg, PRIVATE) { return LDKF.isHTMLDocument(arg, PRIVATE) || LDKF.isStrictlyHTMLDocumentLike(arg, PRIVATE) };

                // Is HTML Element
                LapysDevelopmentKit.functions.isHTMLElement = function isHTMLElement(arg, PRIVATE) { return LDKC.hasHTMLElementConstructor ? LDKT.isConstructibleObject(arg, LDKO.htmlElement, LDKO.htmlElementPrototype) : LDKF.isStrictlyHTMLElementLike(arg, PRIVATE) };

                // Is HTML Element-Like
                LapysDevelopmentKit.functions.isHTMLElementLike = function isHTMLElementLike(arg, PRIVATE) { return LDKF.isHTMLElement(arg, PRIVATE) || LDKF.isStrictlyHTMLElementLike(arg, PRIVATE) };

                // Is HTML Form Controls Collection
                LapysDevelopmentKit.functions.isHTMLFormControlsCollection = function isHTMLFormControlsCollection(arg) { return LDKC.hasHTMLFormControlsCollectionConstructor ? LDKT.isConstructibleObject(arg, LDKO.htmlFormControlsCollection, LDKO.htmlFormControlsCollectionPrototype) : LDKF.isStrictlyHTMLFormControlsCollectionLike(arg) };

                // Is HTML Options Collection
                LapysDevelopmentKit.functions.isHTMLOptionsCollection = function isHTMLOptionsCollection(arg) { return LDKC.hasHTMLOptionsCollectionConstructor ? LDKT.isConstructibleObject(arg, LDKO.htmlOptionsCollection, LDKO.htmlOptionsCollectionPrototype) : LDKF.isStrictlyHTMLOptionsCollectionLike(arg) };

                // Is Index Size Error
                LapysDevelopmentKit.functions.isIndexSizeError = function isIndexSizeError(arg) { return LDKT.isConstructibleObject(arg, LDKO.indexSizeError, LDKO.indexSizeErrorPrototype) };

                // Is Internal Error
                LapysDevelopmentKit.functions.isInternalError = function isInternalError(arg) { return LDKT.isConstructibleObject(arg, LDKO.internalError, LDKO.internalErrorPrototype) };

                // Is Invalid Access Error
                LapysDevelopmentKit.functions.isInvalidAccessError = function isInvalidAccessError(arg) { return LDKT.isConstructibleObject(arg, LDKO.invalidAccessError, LDKO.invalidAccessErrorPrototype) };

                // Is Invalid Character Error
                LapysDevelopmentKit.functions.isInvalidCharacterError = function isInvalidCharacterError(arg) { return LDKT.isConstructibleObject(arg, LDKO.invalidCharacterError, LDKO.invalidCharacterErrorPrototype) };

                // Is Invalid Modification Error
                LapysDevelopmentKit.functions.isInvalidModificationError = function isInvalidModificationError(arg) { return LDKT.isConstructibleObject(arg, LDKO.invalidModificationError, LDKO.invalidModificationErrorPrototype) };

                // Is Invalid Node Type Error
                LapysDevelopmentKit.functions.isInvalidNodeTypeError = function isInvalidNodeTypeError(arg) { return LDKT.isConstructibleObject(arg, LDKO.invalidNodeTypeError, LDKO.invalidNodeTypeErrorPrototype) };

                // Is Invalid State Error
                LapysDevelopmentKit.functions.isInvalidStateError = function isInvalidStateError(arg) { return LDKT.isConstructibleObject(arg, LDKO.invalidStateError, LDKO.invalidStateErrorPrototype) };

                // Is JSON {Object}
                LapysDevelopmentKit.functions.isJSON = function isJSON(arg) { return LDKT.isConstructibleObject(arg, LDKO.object, LDKO.objectPrototype) };

                // Is LapysJS Error
                LapysDevelopmentKit.functions.isLapysJSError = function isLapysJSError(arg) { return LDKT.isConstructibleObject(arg, LDKO.lapysJSError, LDKO.lapysJSErrorPrototype) };

                // Is LapysJS Error-Like
                LapysDevelopmentKit.functions.isLapysJSErrorLike = function isLapysJSErrorLike(arg) { return LDKF.isLapysJSError(arg) || LDKF.isStrictlyLapysJSErrorLike(arg) };

                // Is LapysJS Initiate Error
                LapysDevelopmentKit.functions.isLapysJSInitiateError = function isLapysJSInitiateError(arg) { return LDKT.isConstructibleObject(arg, LDKO.lapysJSInitiateError, LDKO.lapysJSInitiateErrorPrototype) };

                // Is LapysJS Node List
                LapysDevelopmentKit.functions.isLapysJSNodeList = function isLapysJSNodeList(arg) { return LDKT.isConstructibleObject(arg, LDKO.lapysJSNodeList, LDKO.lapysJSNodeListPrototype) };

                // Is LapysJS Update Error
                LapysDevelopmentKit.functions.isLapysJSUpdateError = function isLapysJSUpdateError(arg) { return LDKT.isConstructibleObject(arg, LDKO.lapysJSUpdateError, LDKO.lapysJSUpdateErrorPrototype) };

                // Is Map
                LapysDevelopmentKit.functions.isMap = function isMap(arg) { return LDKC.hasMapConstructor ? LDKT.isConstructibleObject(arg, LDKO.map, LDKO.mapPrototype) : LDKF.isStrictlyMapLike(arg) };

                // Is Media Error
                LapysDevelopmentKit.functions.isMediaError = function isMediaError(arg) { return LDKT.isConstructibleObject(arg, LDKO.mediaError, LDKO.mediaErrorPrototype) };

                // Is Media Key Error
                LapysDevelopmentKit.functions.isMediaKeyError = function isMediaKeyError(arg) { return LDKT.isConstructibleObject(arg, LDKO.mediaKeyError, LDKO.mediaKeyErrorPrototype) };

                // Is Media Key Status Map
                LapysDevelopmentKit.functions.isMediaKeyStatusMap = function isMediaKeyStatusMap(arg) { return LDKC.hasMediaKeyStatusMapConstructor ? LDKT.isConstructibleObject(arg, LDKO.mediaKeyStatusMap, LDKO.mediaKeyStatusMapPrototype) : LDKF.isStrictlyMediaKeyStatusMapLike(arg) };

                // Is Media List
                LapysDevelopmentKit.functions.isMediaList = function isMediaList(arg) { return LDKC.hasMediaListConstructor ? LDKT.isConstructibleObject(arg, LDKO.mediaList, LDKO.mediaListPrototype) : LDKF.isStrictlyMediaListLike(arg) };

                // Is Media Stream Error
                LapysDevelopmentKit.functions.isMediaStreamError = function isMediaStreamError(arg) { return LDKT.isConstructibleObject(arg, LDKO.mediaStreamError, LDKO.mediaStreamErrorPrototype) };

                // Is MIME Type Array
                LapysDevelopmentKit.functions.isMIMETypeArray = function isMIMETypeArray(arg) { return LDKT.isConstructibleObject(arg, LDKO.mimeTypeArray, LDKO.mimeTypeArrayPrototype) };

                // Is MS Media Key Error
                LapysDevelopmentKit.functions.isMSMediaKeyError = function isMSMediaKeyError(arg) { return LDKT.isConstructibleObject(arg, LDKO.msMediaKeyError, LDKO.msMediaKeyErrorPrototype) };

                // Is Named Node Map
                LapysDevelopmentKit.functions.isNamedNodeMap = function isNamedNodeMap(arg, PRIVATE) { return LDKC.hasNamedNodeMapConstructor ? LDKT.isConstructibleObject(arg, LDKO.namedNodeMap, LDKO.namedNodeMapPrototype) : LDKF.isStrictlyNamedNodeMapLike(arg, PRIVATE) };

                // Is Named Node Map-Like
                LapysDevelopmentKit.functions.isNamedNodeMapLike = function isNamedNodeMapLike(arg, PRIVATE) { return LDKF.isNamedNodeMap(arg, PRIVATE) || LDKF.isStrictlyNamedNodeMapLike(arg, PRIVATE) };

                // Is Namespace Error
                LapysDevelopmentKit.functions.isNamespaceError = function isNamespaceError(arg) { return LDKT.isConstructibleObject(arg, LDKO.namespaceError, LDKO.namespaceErrorPrototype) };

                // Is Navigator User Media Error
                LapysDevelopmentKit.functions.isNavigatorUserMediaError = function isNavigatorUserMediaError(arg) { return LDKT.isConstructibleObject(arg, LDKO.navigatorUserMediaError, LDKO.navigatorUserMediaErrorPrototype) };

                // Is Network Error
                LapysDevelopmentKit.functions.isNetworkError = function isNetworkError(arg) { return LDKT.isConstructibleObject(arg, LDKO.networkError, LDKO.networkErrorPrototype) };

                // Is No Modification Allowed Error
                LapysDevelopmentKit.functions.isNoModificationAllowedError = function isNoModificationAllowedError(arg) { return LDKT.isConstructibleObject(arg, LDKO.noModificationAllowedError, LDKO.noModificationAllowedErrorPrototype) };

                // Is Node
                LapysDevelopmentKit.functions.isNode = function isNode(arg, PRIVATE) { return LDKC.hasNodeConstructor ? LDKT.isConstructibleObject(arg, LDKO.node, LDKO.nodePrototype) : LDKF.isStrictlyNodeLike(arg, PRIVATE) };

                // Is Node-Like
                LapysDevelopmentKit.functions.isNodeLike = function isNodeLike(arg, PRIVATE) { return LDKF.isNode(arg, PRIVATE) || LDKF.isStrictlyNodeLike(arg, PRIVATE) };

                // Is Node List
                LapysDevelopmentKit.functions.isNodeList = function isNodeList(arg, PRIVATE) { return LDKC.hasNodeListConstructor ? LDKT.isConstructibleObject(arg, LDKO.nodeList, LDKO.nodeListPrototype) : LDKF.isStrictlyNodeListLike(arg, PRIVATE) };

                // Is Node List-Like
                LapysDevelopmentKit.functions.isNodeListLike = function isNodeListLike(arg, PRIVATE) { return LDKF.isNodeList(arg, PRIVATE) || LDKF.isStrictlyNodeListLike(arg, PRIVATE) };

                // Is Non-Constructible
                LapysDevelopmentKit.functions.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                // Is Not Allowed Error
                LapysDevelopmentKit.functions.isNotAllowedError = function isNotAllowedError(arg) { return LDKT.isConstructibleObject(arg, LDKO.notAllowedError, LDKO.notAllowedErrorPrototype) };

                // Is Not Found Error
                LapysDevelopmentKit.functions.isNotFoundError = function isNotFoundError(arg) { return LDKT.isConstructibleObject(arg, LDKO.notFoundError, LDKO.notFoundErrorPrototype) };

                // Is Not Readable Error
                LapysDevelopmentKit.functions.isNotReadableError = function isNotReadableError(arg) { return LDKT.isConstructibleObject(arg, LDKO.notReadableError, LDKO.notReadableErrorPrototype) };

                // Is Not Supported Error
                LapysDevelopmentKit.functions.isNotSupportedError = function isNotSupportedError(arg) { return LDKT.isConstructibleObject(arg, LDKO.notSupportedError, LDKO.notSupportedErrorPrototype) };

                // Is Notify Paint Event
                LapysDevelopmentKit.functions.isNotifyPaintEvent = function isNotifyPaintEvent(arg) { return LDKT.isConstructibleObject(arg, LDKO.notifyPaintEvent, LDKO.notifyPaintEventPrototype) };

                // Is Null
                LapysDevelopmentKit.functions.isNull = function isNull(arg) { return arg === null };

                // Is Number
                LapysDevelopmentKit.functions.isNumber = function isNumber(arg) { return typeof arg == "number" };

                // Is Observer
                LapysDevelopmentKit.functions.isObserver = function isObserver(arg) { return LDKT.isConstructibleObject(arg, LDKD.observer, LDKD.observerPrototype) };

                // Is Operation Error
                LapysDevelopmentKit.functions.isOperationError = function isOperationError(arg) { return LDKT.isConstructibleObject(arg, LDKO.operationError, LDKO.operationErrorPrototype) };

                // Is Over-Constrained Error
                LapysDevelopmentKit.functions.isOverConstrainedError = function isOverConstrainedError(arg) { return LDKT.isConstructibleObject(arg, LDKO.overConstrainedError, LDKO.overConstrainedErrorPrototype) };

                // Is Permission Denied Error
                LapysDevelopmentKit.functions.isPermissionDeniedError = function isPermissionDeniedError(arg) { return LDKT.isConstructibleObject(arg, LDKO.permissionDeniedError, LDKO.permissionDeniedErrorPrototype) };

                // Is Plugin Array
                LapysDevelopmentKit.functions.isPluginArray = function isPluginArray(arg) { return LDKT.isConstructibleObject(arg, LDKO.pluginArray, LDKO.pluginArrayPrototype) };

                // Is Primitive
                LapysDevelopmentKit.functions.isPrimitive = function isPrimitive(arg) { return LDKF.isBoolean(arg) || LDKF.isNumber(arg) || LDKF.isString(arg) || LDKF.isSymbol(arg) };

                // Is Quota Exceeded Error
                LapysDevelopmentKit.functions.isQuotaExceededError = function isQuotaExceededError(arg) { return LDKT.isConstructibleObject(arg, LDKO.quotaExceededError, LDKO.quotaExceededErrorPrototype) };

                // Is Radio Node List
                LapysDevelopmentKit.functions.isRadioNodeList = function isRadioNodeList(arg) { return LDKC.hasRadioNodeListConstructor ? LDKT.isConstructibleObject(arg, LDKO.radioNodeList, LDKO.radioNodeListPrototype) : LDKF.isStrictlyRadioNodeListLike(arg) };

                // Is Range Error
                LapysDevelopmentKit.functions.isRangeError = function isRangeError(arg) { return LDKT.isConstructibleObject(arg, LDKO.rangeError, LDKO.rangeErrorPrototype) };

                // Is Read-Only Error
                LapysDevelopmentKit.functions.isReadOnlyError = function isReadOnlyError(arg) { return LDKT.isConstructibleObject(arg, LDKO.readOnlyError, LDKO.readOnlyErrorPrototype) };

                // Is Reference Error
                LapysDevelopmentKit.functions.isReferenceError = function isReferenceError(arg) { return LDKT.isConstructibleObject(arg, LDKO.referenceError, LDKO.referenceErrorPrototype) };

                // Is Regular Expression
                LapysDevelopmentKit.functions.isRegularExpression = function isRegularExpression(arg) { return typeof arg == "object" && LDKT.isConstructibleObject(arg, LDKO.regularExpression, LDKO.regularExpressionPrototype) };

                // Is Security Error
                LapysDevelopmentKit.functions.isSecurityError = function isSecurityError(arg) { return LDKT.isConstructibleObject(arg, LDKO.securityError, LDKO.securityErrorPrototype) };

                // Is Set
                LapysDevelopmentKit.functions.isSet = function isSet(arg) { return LDKC.hasSetConstructor ? LDKT.isConstructibleObject(arg, LDKO.set, LDKO.setPrototype) : LDKF.isStrictlySetLike(arg) };

                // Is Source Buffer List
                LapysDevelopmentKit.functions.isSourceBufferList = function isSourceBufferList(arg) { return LDKC.hasSourceBufferListConstructor ? LDKT.isConstructibleObject(arg, LDKO.sourceBufferList, LDKO.sourceBufferListPrototype) : LDKF.isStrictlySourceBufferListLike(arg) };

                // Is Speech Recognition Error
                LapysDevelopmentKit.functions.isSpeechRecognitionError = function isSpeechRecognitionError(arg) { return LDKT.isConstructibleObject(arg, LDKO.speechRecognitionError, LDKO.speechRecognitionErrorPrototype) };

                // Is Stereo Panner Node
                LapysDevelopmentKit.functions.isStereoPannerNode = function isStereoPannerNode(arg) { return LDKT.isConstructibleObject(arg, LDKO.stereoPannerNode, LDKO.stereoPannerNodePrototype) };

                /* Is Strictly Array-Like
                        --- NOTE ---
                            #Lapys:
                                - The first of many confusingly named 'type-detection' methods.
                                - Test a suite of array-like objects.
                                - Not sure if `PerformanceObserverEntryList`, `PresentationConnectionList`, `SVGAnimatedLengthList`, `SVGAnimatedNumberList`, and `SVGAnimatedTransformList` objects are array-like objects.
                */
                LapysDevelopmentKit.functions.isStrictlyArrayLike = function isStrictlyArrayLike(arg) {
                    // Return
                    return LDKF.isArguments(arg) || LDKF.isAudioParameterMap(arg) ||
                        LDKF.isCSSNumericArray(arg) || LDKF.isCSSRuleList(arg) || LDKF.isCSSStyleDeclaration(arg) ||
                        LDKF.isDataTransferItemList(arg) || LDKF.isDOMRectangleList(arg) || LDKF.isDOMStringList(arg) || LDKF.isDOMTokenList(arg) ||
                        LDKF.isFileList(arg) ||
                        LDKF.isHTMLAllCollection(arg) || LDKF.isHTMLCollection(arg) || LDKF.isHTMLFormControlsCollection(arg) || LDKF.isHTMLOptionsCollection(arg) ||
                        LDKF.isLapysJSNodeList(arg) ||
                        LDKF.isMap(arg) || LDKF.isMediaKeyStatusMap(arg) || LDKF.isMediaList(arg) || LDKF.isMIMETypeArray(arg) ||
                        LDKF.isNamedNodeMap(arg) || LDKF.isNodeList(arg) ||
                        LDKF.isPluginArray(arg) ||
                        LDKF.isRadioNodeList(arg) ||
                        LDKF.isSet(arg) || LDKF.isSourceBufferList(arg) || LDKF.isStylePropertyMap(arg) || LDKF.isStylePropertyMapReadOnly(arg) || LDKF.isStyleSheetList(arg) || LDKF.isSVGLengthList(arg) || LDKF.isSVGNumberList(arg) || LDKF.isSVGPointList(arg) || LDKF.isSVGStringList(arg) || LDKF.isSVGTransformList(arg) ||
                        LDKF.isTextTrackCueList(arg) || LDKF.isTextTrackList(arg) || LDKF.isTouchList(arg) || LDKF.isTypedArrayLike(arg)
                };

                // Is Strictly Audio Parameter Map-Like
                LapysDevelopmentKit.functions.isStrictlyAudioParameterMapLike = function isStrictlyAudioParameterMapLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasAudioParameterMapConstructor ? arg instanceof LDKO.audioParameterMap : (
                            LDKT.isAudioParameterMapPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isAudioParameterMapPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKF.isAudioParameterMapPrototypeGetMethod(LDKF.objectPrototypeGetProperty(arg, "get")) &&
                            LDKT.isAudioParameterMapPrototypeHasMethod(LDKF.objectPrototypeGetProperty(arg, "has")) &&
                            LDKT.isAudioParameterMapPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "size")) &&
                            LDKT.isAudioParameterMapPrototypeValuesMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly CSS Numeric Array-Like
                LapysDevelopmentKit.functions.isStrictlyCSSNumericArrayLike = function isStrictlyCSSNumericArrayLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasCSSNumericArrayConstructor ? arg instanceof LDKO.cssNumericArray : (
                            LDKT.isCSSNumericArrayPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isCSSNumericArrayPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKT.isCSSNumericArrayPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isCSSNumericArrayPrototypeValueMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly CSS Rule List-Like
                LapysDevelopmentKit.functions.isStrictlyCSSRuleListLike = function isStrictlyCSSRuleListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasCSSStyleDeclarationConstructor ? arg instanceof LDKO.cssStyleDeclaration : (
                            LDKT.isCSSRuleListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly CSS Style Declaration-Like
                LapysDevelopmentKit.functions.isStrictlyCSSStyleDeclarationLike = function isStrictlyCSSStyleDeclarationLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasCSSStyleDeclarationConstructor ? arg instanceof LDKO.cssStyleDeclaration : (
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "cssFloat")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "cssText")) &&
                            LDKT.isCSSStyleDeclarationPrototypeGetPropertyPriorityMethod(LDKF.objectPrototypeGetProperty(arg, "getPropertyPriority")) &&
                            LDKT.isCSSStyleDeclarationPrototypeGetPropertyPriorityMethod(LDKF.objectPrototypeGetProperty(arg, "getPropertyValue")) &&
                            LDKT.isCSSStyleDeclarationPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isCSSStyleDeclarationPrototypeRemovePropertyMethod(LDKF.objectPrototypeGetProperty(arg, "removeProperty")) &&
                            LDKT.isCSSStyleDeclarationPrototypeSetPropertyMethod(LDKF.objectPrototypeGetProperty(arg, "setProperty"))
                        )
                    )
                };

                // Is Strictly Data Transfer Item List-Like
                LapysDevelopmentKit.functions.isStrictlyDataTransferItemListLike = function isStrictlyDataTransferItemListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDataTransferItemListConstructor ? arg instanceof LDKO.dataTransferItemList : (
                            LDKT.isDataTransferItemListPrototypeAddMethod(LDKF.objectPrototypeGetProperty(arg, "add")) &&
                            LDKT.isDataTransferItemListPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isDataTransferItemListPrototypeRemoveMethod(LDKF.objectPrototypeGetProperty(arg, "remove"))
                        )
                    )
                };

                // Is Strictly Document-Like
                LapysDevelopmentKit.functions.isStrictlyDocumentLike = function isStrictlyDocumentLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDocumentConstructor ? arg instanceof LDKO.document : (
                            LDKF.isNodeLike(arg, PRIVATE = "Document") &&
                            LDKF.isHTMLElementLike(LDKF.objectPrototypeGetProperty(arg, "activeElement")) &&
                            LDKF.stringPrototypeIsHexadecimalCode(LDKF.objectPrototypeGetProperty(arg, "alinkColor")) &&
                            LDKF.isHTMLAllCollection(LDKF.objectPrototypeGetProperty(arg, "all")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "anchors")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "applets")) &&
                            LDKF.stringPrototypeIsHexadecimalCode(LDKF.objectPrototypeGetProperty(arg, "bgColor")) &&
                            LDKF.isHTMLBodyElement(LDKF.objectPrototypeGetProperty(arg, "body")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "charset")) &&
                            LDKT.isDocumentPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isDocumentPrototypeCloseMethod(LDKF.objectPrototypeGetProperty(arg, "close")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "compatMode")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "cookie")) &&
                            LDKT.isDocumentPrototypeCreateAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "createAttribute")) &&
                            LDKT.isDocumentPrototypeCreateCommentMethod(LDKF.objectPrototypeGetProperty(arg, "createComment")) &&
                            LDKT.isDocumentPrototypeCreateDocumentFragmentMethod(LDKF.objectPrototypeGetProperty(arg, "createDocumentFragment")) &&
                            LDKT.isDocumentPrototypeCreateElementMethod(LDKF.objectPrototypeGetProperty(arg, "createElement")) &&
                            LDKT.isDocumentPrototypeCreateTextNodeMethod(LDKF.objectPrototypeGetProperty(arg, "createTextNode")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "designMode")) &&
                            (function(documentType) { return LDKC.hasDocumentTypeConstructor ? LDKF.isDocumentType(documentType) : true })(LDKF.objectPrototypeGetProperty(arg, "doctype")) &&
                            LDKF.isHTMLElementLike(LDKF.objectPrototypeGetProperty(arg, "documentElement")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "domain")) &&
                            LDKT.isDocumentPrototypeElementFromPointMethod(LDKF.objectPrototypeGetProperty(arg, "elementFromPoint")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "embeds")) &&
                            LDKT.isDocumentPrototypeExecCommandMethod(LDKF.objectPrototypeGetProperty(arg, "execCommand")) &&
                            LDKF.stringPrototypeIsHexadecimalCode(LDKF.objectPrototypeGetProperty(arg, "fgColor")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "firstChild")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "forms")) &&
                            LDKT.isDocumentPrototypeGetElementByIdMethod(LDKF.objectPrototypeGetProperty(arg, "getElementById")) &&
                            LDKT.isDocumentPrototypeGetElementsByNameMethod(LDKF.objectPrototypeGetProperty(arg, "getElementsByName")) &&
                            LDKT.isDocumentPrototypeGetElementsByTagNameMethod(LDKF.objectPrototypeGetProperty(arg, "getElementsByTagName")) &&
                            LDKT.isDocumentPrototypeHasFocusMethod(LDKF.objectPrototypeGetProperty(arg, "hasFocus")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "images")) &&
                            LDKF.objectPrototypeGetProperty(arg, "implementation") &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "lastChild")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "lastModified")) &&
                            LDKF.stringPrototypeIsHexadecimalCode(LDKF.objectPrototypeGetProperty(arg, "linkColor")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "links")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "nextSibling")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "previousSibling")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onclick")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncontextmenu")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondblclick")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragstart")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeydown")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeypress")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeyup")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousedown")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousemove")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseout")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseover")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousewheel")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onreadystatechange")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselectionchange")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselectstart")) &&
                            LDKT.isDocumentPrototypeOpenMethod(LDKF.objectPrototypeGetProperty(arg, "open")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "parentNode")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "plugins")) &&
                            LDKT.isDocumentPrototypeQueryCommandEnabledMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandEnabled")) &&
                            LDKT.isDocumentPrototypeQueryCommandIndetermMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandIndeterm")) &&
                            LDKT.isDocumentPrototypeQueryCommandStateMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandState")) &&
                            LDKT.isDocumentPrototypeQueryCommandSupportedMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandSupported")) &&
                            LDKT.isDocumentPrototypeQueryCommandValueMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandValue")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "readyState")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "referrer")) &&
                            LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "scripts")) &&
                            LDKF.isStyleSheetList(LDKF.objectPrototypeGetProperty(arg, "styleSheets")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "title")) &&
                            LDKF.stringPrototypeIsHexadecimalCode(LDKF.objectPrototypeGetProperty(arg, "vlinkColor")) &&
                            LDKT.isDocumentPrototypeWriteMethod(LDKF.objectPrototypeGetProperty(arg, "write")) &&
                            LDKT.isDocumentPrototypeWriteLineMethod(LDKF.objectPrototypeGetProperty(arg, "writeln")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "URL"))
                        )
                    )
                };

                // Is Strictly Document Type-Like
                LapysDevelopmentKit.functions.isStrictlyDocumentTypeLike = function isStrictlyDocumentTypeLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDocumentTypeConstructor ? arg instanceof LDKO.documentType : (
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "baseURI")) &&
                            LDKT.isNodeList(LDKF.objectPrototypeGetProperty(arg, "childNodes")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "firstChild")) &&
                            LDKF.isBoolean(LDKF.objectPrototypeGetProperty(arg, "isConnected")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "lastChild")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "name")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "nextSibling")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "nodeName")) &&
                            (function(nodeType) { return LDKF.numberPrototypeIsPositiveInteger(nodeType) && nodeType == LDKO.nodePrototypeDocumentTypeNode })(LDKF.objectPrototypeGetProperty(arg, "nodeType")) &&
                            (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "previousSibling")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "publicId")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "systemId"))
                        )
                    )
                };

                // Is Strictly DOM Rectangle List-Like
                LapysDevelopmentKit.functions.isStrictlyDOMRectangleListLike = function isStrictlyDOMRectangleListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDOMRectangleListConstructor ? arg instanceof LDKO.domRectangleList : (
                            LDKT.isDOMRectangleListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly DOM String List-Like
                LapysDevelopmentKit.functions.isStrictlyDOMStringListLike = function isStrictlyDOMStringListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDOMStringListConstructor ? arg instanceof LDKO.domStringList : (
                            LDKT.isDOMStringListPrototypeContainsMethod(LDKF.objectPrototypeGetProperty(arg, "contains")) &&
                            LDKT.isDOMStringListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly DOM Token List-Like
                LapysDevelopmentKit.functions.isStrictlyDOMTokenListLike = function isStrictlyDOMTokenListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDOMTokenListConstructor ? arg instanceof LDKO.domTokenList : (
                            LDKT.isDOMTokenListPrototypeAddMethod(LDKF.objectPrototypeGetProperty(arg, "add")) &&
                            LDKT.isDOMTokenListPrototypeContainsMethod(LDKF.objectPrototypeGetProperty(arg, "contains")) &&
                            LDKT.isDOMTokenListPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isDOMTokenListPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKT.isDOMTokenListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKT.isDOMTokenListPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isDOMTokenListPrototypeRemoveMethod(LDKF.objectPrototypeGetProperty(arg, "remove")) &&
                            LDKT.isDOMTokenListPrototypeReplaceMethod(LDKF.objectPrototypeGetProperty(arg, "replace")) &&
                            LDKT.isDOMTokenListPrototypeSupportsMethod(LDKF.objectPrototypeGetProperty(arg, "supports")) &&
                            LDKT.isDOMTokenListPrototypeToggleMethod(LDKF.objectPrototypeGetProperty(arg, "toggle")) &&
                            LDKT.isDOMTokenListPrototypeValuesMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly Element-Like
                LapysDevelopmentKit.functions.isStrictlyElementLike = function isStrictlyElementLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasElementConstructor ? arg instanceof LDKO.element : (
                            LDKT.isComponent(arg) || (
                                LDKF.isNodeLike(arg) &&
                                LDKF.isNodeList(LDKF.objectPrototypeGetProperty(arg, "childNodes")) &&
                                LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "children")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "className")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientHeight")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientLeft")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientTop")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientWidth")) &&
                                LDKT.isElementPrototypeGetAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "getAttribute")) &&
                                LDKT.isElementPrototypeGetAttributeNodeMethod(LDKF.objectPrototypeGetProperty(arg, "getAttributeNode")) &&
                                LDKT.isElementPrototypeGetBoundingClientRectangleMethod(LDKF.objectPrototypeGetProperty(arg, "getBoundingClientRect")) &&
                                LDKT.isElementPrototypeGetClientRectanglesMethod(LDKF.objectPrototypeGetProperty(arg, "getClientRects")) &&
                                LDKT.isElementPrototypeGetElementsByTagNameMethod(LDKF.objectPrototypeGetProperty(arg, "getElementsByTagName")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "id")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "innerHTML")) &&
                                LDKT.isElementPrototypeInsertAdjacentElementMethod(LDKF.objectPrototypeGetProperty(arg, "insertAdjacentElement")) &&
                                LDKT.isElementPrototypeInsertAdjacentHTMLMethod(LDKF.objectPrototypeGetProperty(arg, "insertAdjacentHTML")) &&
                                LDKT.isElementPrototypeInsertAdjacentTextMethod(LDKF.objectPrototypeGetProperty(arg, "insertAdjacentText")) &&
                                (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "nextSibling")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforecopy")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforecut")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforepaste")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "outerHTML")) &&
                                LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "parentNode")) &&
                                (function(node) { return LDKF.isNull(node) || LDKF.isNodeLike(node) })(LDKF.objectPrototypeGetProperty(arg, "previousSibling")) &&
                                LDKT.isElementPrototypeRemoveAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "removeAttribute")) &&
                                LDKT.isElementPrototypeRemoveAttributeNodeMethod(LDKF.objectPrototypeGetProperty(arg, "removeAttributeNode")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollHeight")) &&
                                LDKT.isElementPrototypeScrollIntoViewMethod(LDKF.objectPrototypeGetProperty(arg, "scrollIntoView")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollLeft")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollTop")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollWidth")) &&
                                LDKT.isElementPrototypeSetAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "setAttribute")) &&
                                LDKT.isElementPrototypeSetAttributeNodeMethod(LDKF.objectPrototypeGetProperty(arg, "setAttributeNode")) &&
                                LDKT.isElementName(LDKF.objectPrototypeGetProperty(arg, "tagName"))
                            )
                        )
                    )
                };

                // Is Strictly Error-Like --- NOTE (Lapys) -> Test a specific suite of error types.
                LapysDevelopmentKit.functions.isStrictlyErrorLike = function isStrictlyErrorLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKF.isAbortError(arg) ||
                        LDKF.isConstraintError(arg) || LDKF.isConstraintNotSatisfiedError(arg) ||
                        LDKF.isDataError(arg) || LDKF.isDataCloneError(arg) || LDKF.isDevicesNotFoundError(arg) || LDKF.isDOMError(arg) || LDKF.isDOMException(arg) ||
                        LDKF.isEncodingError(arg) || LDKF.isEvalError(arg) || LDKF.isEventException(arg) ||
                        LDKF.isHierarchyRequestError(arg) ||
                        LDKF.isIndexSizeError(arg) || LDKF.isInternalError(arg) || LDKF.isInvalidAccessError(arg) || LDKF.isInvalidCharacterError(arg) || LDKF.isInvalidModificationError(arg) || LDKF.isInvalidNodeTypeError(arg) || LDKF.isInvalidStateError(arg) ||
                        LDKF.isLapysJSErrorLike(arg) ||
                        LDKF.isMediaError(arg) || LDKF.isMediaKeyError(arg) || LDKF.isMediaStreamError(arg) || LDKF.isMSMediaKeyError(arg) ||
                        LDKF.isNamespaceError(arg) || LDKF.isNavigatorUserMediaError(arg) || LDKF.isNetworkError(arg) || LDKF.isNoModificationAllowedError(arg) || LDKF.isNotAllowedError(arg) || LDKF.isNotFoundError(arg) || LDKF.isNotReadableError(arg) || LDKF.isNotSupportedError(arg) ||
                        LDKF.isOperationError(arg) || LDKF.isOverConstrainedError(arg) ||
                        LDKF.isPermissionDeniedError(arg) || LDKF.isQuotaExceededError(arg) ||
                        LDKF.isRangeError(arg) || LDKF.isReadOnlyError(arg) || LDKF.isReferenceError(arg) ||
                        LDKF.isSecurityError(arg) || LDKF.isSpeechRecognitionError(arg) || LDKF.isSyntaxError(arg) ||
                        LDKF.isTimeoutError(arg) || LDKF.isTrackStartError(arg) || LDKF.isTransactionInactiveError(arg) || LDKF.isTypeError(arg) || LDKF.isTypeMismatchError(arg) ||
                        LDKF.isUnknownError(arg) || LDKF.isURIError(arg) || LDKF.isURLMismatchError(arg) ||
                        LDKF.isVersionError(arg) ||
                        LDKF.isWebkitSpeechRecognitionError(arg) || LDKF.isWrongDocumentError(arg)
                    )
                };

                // Is Strictly Event-Like --- UPDATE REQUIRED (Lapys) -> Stronger testing required.
                LapysDevelopmentKit.functions.isStrictlyEventLike = function isStrictlyEventLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasEventConstructor ? arg instanceof LDKO.event : (
                            LDKF.objectPrototypeHasProperty(arg, "returnValue") &&
                            LDKF.objectPrototypeHasProperty(arg, "srcElement") &&
                            LDKF.objectPrototypeHasProperty(arg, "type") &&
                            LDKF.arrayPrototypeLength(LDKF.objectGetOwnPropertyNames(arg)) > 2
                        )
                    )
                };

                // Is Strictly Event Target-Like
                LapysDevelopmentKit.functions.isStrictlyEventTargetLike = function isStrictlyEventTargetLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasEventTargetConstructor ? arg instanceof LDKO.eventTarget : (
                            (
                                LDKT.isEventTargetPrototypeAddEventListenerMethod(LDKF.objectPrototypeGetProperty(arg, "addEventListener")) &&
                                LDKT.isEventTargetPrototypeRemoveEventListenerMethod(LDKF.objectPrototypeGetProperty(arg, "removeEventListener"))
                            ) ||
                            (
                                LDKT.isEventTargetPrototypeAttachEventMethod(LDKF.objectPrototypeGetProperty(arg, "attachEvent")) &&
                                LDKT.isEventTargetPrototypeDetachEventMethod(LDKF.objectPrototypeGetProperty(arg, "detachEvent"))
                            )
                        )
                    )
                };

                // Is Strictly File List-Like
                LapysDevelopmentKit.functions.isStrictlyFileListLike = function isStrictlyFileListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasFileListConstructor ? arg instanceof LDKO.fileList : (
                            LDKT.isFileListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly HTML All Collection-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLAllCollectionLike = function isStrictlyHTMLAllCollectionLike(arg, PRIVATE) {
                    // Return
                    return (typeof arg == "object" || LDKF.isVoid(arg)) && (
                        LDKC.hasHTMLAllCollectionConstructor ? arg instanceof LDKO.htmlAllCollection : (
                            LDKT.isHTMLAllCollectionPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isHTMLAllCollectionPrototypeNamedItemMethod(LDKF.objectPrototypeGetProperty(arg, "namedItem"))
                        )
                    )
                };

                // Is Strictly HTML Body Element-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLBodyElementLike = function isStrictlyHTMLBodyElementLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLBodyElementConstructor ? arg instanceof LDKO.htmlBodyElement : (
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "aLink")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "background")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "bgColor")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "link")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onafterprint")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforeprint")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforeunload")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onhashchange")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onoffline")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ononline")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onunload")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "vLink")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "text"))
                        )
                    )
                };

                // Is Strictly HTML Collection-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLCollectionLike = function isStrictlyHTMLCollectionLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLCollectionConstructor ? arg instanceof LDKO.htmlCollection : (
                            LDKT.isHTMLCollectionPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isHTMLCollectionPrototypeNamedItemMethod(LDKF.objectPrototypeGetProperty(arg, "namedItem"))
                        )
                    )
                };

                // Is Strictly HTML Document-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLDocumentLike = function isStrictlyHTMLDocumentLike(arg) { return typeof arg == "object" && (LDKC.hasHTMLDocumentConstructor ? arg instanceof LDKO.htmlDocument : LDKF.isDocumentLike(arg)) };

                // Is Strictly HTML Element-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLElementLike = function isStrictlyHTMLElementLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLElementConstructor ? arg instanceof LDKO.htmlElement : (
                            LDKT.isComponent(arg) || (
                                LDKF.isElementLike(arg) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "accessKey")) &&
                                LDKT.isHTMLElementPrototypeBlurMethod(LDKF.objectPrototypeGetProperty(arg, "blur")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "contentEditable")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "dir")) &&
                                LDKT.isHTMLElementPrototypeFocusMethod(LDKF.objectPrototypeGetProperty(arg, "focus")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "innerText")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "lang")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetHeight")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetLeft")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetTop")) &&
                                LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetWidth")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onblur")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onclick")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncontextmenu")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncopy")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncuechange")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncut")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondblclick")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondrag")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragend")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragenter")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragleave")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragover")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragstart")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondrop")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onfocus")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oninvalid")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeydown")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeypress")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeyup")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousedown")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseenter")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseleave")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousemove")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseout")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseover")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseup")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousewheel")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onpaste")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onresize")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onscroll")) &&
                                LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselectstart")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "outerText")) &&
                                LDKF.isBoolean(LDKF.objectPrototypeGetProperty(arg, "spellcheck")) &&
                                LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "tabIndex")) &&
                                LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "title"))
                            )
                        )
                    )
                };

                // Is Strictly HTML Form Controls Collection-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLFormControlsCollectionLike = function isStrictlyHTMLFormControlsCollectionLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLFormControlsCollectionConstructor ? arg instanceof LDKO.htmlFormControlsCollection : (
                            LDKT.isHTMLFormControlsCollectionPrototypeNamedItemMethod(LDKF.objectPrototypeGetProperty(arg, "namedItem")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly HTML Options Collection-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLOptionsCollectionLike = function isStrictlyHTMLOptionsCollectionLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLOptionsCollectionConstructor ? arg instanceof LDKO.htmlOptionsCollection : (
                            LDKT.isHTMLOptionsCollectionPrototypeAddMethod(LDKF.objectPrototypeGetProperty(arg, "add")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isHTMLOptionsCollectionPrototypeRemoveMethod(LDKF.objectPrototypeGetProperty(arg, "remove")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "selectedIndex"))
                        )
                    )
                };

                // Is Strictly LapysJS Error-Like
                LapysDevelopmentKit.functions.isStrictlyLapysJSErrorLike = function isStrictlyLapysJSErrorLike(arg) { return LDKF.isLapysJSInitiateError(arg) || LDKF.isLapysJSUpdateError(arg) };

                // Is Strictly Map-Like
                LapysDevelopmentKit.functions.isStrictlyMapLike = function isStrictlyMapLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasMapConstructor ? arg instanceof LDKO.map : (
                            LDKT.isMapPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isMapPrototypeDeleteMethod(LDKF.objectPrototypeGetProperty(arg, "delete")) &&
                            LDKT.isMapPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isMapPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKT.isMapPrototypeGetMethod(LDKF.objectPrototypeGetProperty(arg, "get")) &&
                            LDKT.isMapPrototypeHasMethod(LDKF.objectPrototypeGetProperty(arg, "has")) &&
                            LDKT.isMapPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKT.isMapPrototypeSetMethod(LDKF.objectPrototypeGetProperty(arg, "set")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "size")) &&
                            LDKT.isMapPrototypeValuesMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly Media Key Status Map-Like
                LapysDevelopmentKit.functions.isStrictlyMediaKeyStatusMapLike = function isStrictlyMediaKeyStatusMapLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasMediaKeyStatusMapConstructor ? arg instanceof LDKO.mediaKeyStatusMap : (
                            LDKT.isMediaKeyStatusMapPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isMediaKeyStatusMapPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKT.isMediaKeyStatusMapPrototypeGetMethod(LDKF.objectPrototypeGetProperty(arg, "get")) &&
                            LDKT.isMediaKeyStatusMapPrototypeHasMethod(LDKF.objectPrototypeGetProperty(arg, "has")) &&
                            LDKT.isMediaKeyStatusMapPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "size")) &&
                            LDKT.isMediaKeyStatusMapPrototypeValuesMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly Media List-Like
                LapysDevelopmentKit.functions.isStrictlyMediaListLike = function isStrictlyMediaListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasMediaListConstructor ? arg instanceof LDKO.mediaList : (
                            LDKT.isMediaListPrototypeAppendMediumMethod(LDKF.objectPrototypeGetProperty(arg, "appendMedium")) &&
                            LDKT.isMediaListPrototypeDeleteMediumMethod(LDKF.objectPrototypeGetProperty(arg, "deleteMedium")) &&
                            LDKT.isMediaListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "mediaText"))
                        )
                    )
                };

                // Is Strictly Named Node Map-Like
                LapysDevelopmentKit.functions.isStrictlyNamedNodeMapLike = function isStrictlyNamedNodeMapLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasNamedNodeMapConstructor ? arg instanceof LDKO.namedNodeMap : (
                            LDKT.isNamedNodeMapPrototypeGetNamedItemMethod(LDKF.objectPrototypeGetProperty(arg, "getNamedItem")) &&
                            LDKT.isNamedNodeMapPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isNamedNodeMapPrototypeRemoveNamedItemMethod(LDKF.objectPrototypeGetProperty(arg, "removeNamedItem")) &&
                            LDKT.isNamedNodeMapPrototypeSetNamedItemMethod(LDKF.objectPrototypeGetProperty(arg, "setNamedItem"))
                        )
                    )
                };

                // Is Strictly Node-Like
                LapysDevelopmentKit.functions.isStrictlyNodeLike = function isStrictlyNodeLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasNodeConstructor ? arg instanceof LDKO.node : (
                            LDKF.isEventTargetLike(arg) || (
                                LDKT.isNodePrototypeAppendChildMethod(LDKF.objectPrototypeGetProperty(arg, "appendChild")) &&
                                LDKF.isNodeList(LDKF.objectPrototypeGetProperty(arg, "childNodes")) &&
                                LDKT.isNodePrototypeCloneNodeMethod(LDKF.objectPrototypeGetProperty(arg, "cloneNode")) &&
                                (PRIVATE == "Document" ? true : LDKT.isNodePrototypeContainsMethod(LDKF.objectPrototypeGetProperty(arg, "contains"))) &&
                                LDKT.isNodePrototypeHasChildNodesMethod(LDKF.objectPrototypeGetProperty(arg, "hasChildNodes")) &&
                                LDKT.isNodePrototypeInsertBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertBefore")) &&
                                LDKT.isElementName(LDKF.objectPrototypeGetProperty(arg, "nodeName")) &&
                                (function(nodeType) { return LDKF.numberPrototypeIsPositiveInteger(nodeType) && nodeType == LDKO.nodePrototypeElementNode })(LDKF.objectPrototypeGetProperty(arg, "nodeType")) &&
                                (PRIVATE == "Document" ? true : LDKT.isNodePrototypeNormalizeMethod(LDKF.objectPrototypeGetProperty(arg, "normalize"))) &&
                                LDKT.isNodePrototypeRemoveChildMethod(LDKF.objectPrototypeGetProperty(arg, "removeChild")) &&
                                LDKT.isNodePrototypeReplaceChildMethod(LDKF.objectPrototypeGetProperty(arg, "replaceChild"))
                            )
                        )
                    )
                };

                // Is Strictly Node List-Like
                LapysDevelopmentKit.functions.isStrictlyNodeListLike = function isStrictlyNodeListLike(arg, PRIVATE) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasNodeListConstructor ? arg instanceof LDKO.nodeList : (
                            LDKT.isNodeListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly Radio Node List-Like
                LapysDevelopmentKit.functions.isStrictlyRadioNodeListLike = function isStrictlyRadioNodeListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasRadioNodeListConstructor ? arg instanceof LDKO.radioNodeList : (
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "value"))
                        )
                    )
                };

                // Is Strictly Set-Like
                LapysDevelopmentKit.functions.isStrictlySetLike = function isStrictlySetLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSetConstructor ? arg instanceof LDKO.set : (
                            LDKT.isSetPrototypeAddMethod(LDKF.objectPrototypeGetProperty(arg, "add")) &&
                            LDKT.isSetPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isSetPrototypeDeleteMethod(LDKF.objectPrototypeGetProperty(arg, "delete")) &&
                            LDKT.isSetPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isSetPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKT.isSetPrototypeHasMethod(LDKF.objectPrototypeGetProperty(arg, "has")) &&
                            LDKT.isSetPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "size")) &&
                            LDKT.isSetPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly Source Buffer List-Like
                LapysDevelopmentKit.functions.isStrictlySourceBufferListLike = function isStrictlySourceBufferListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSourceBufferListConstructor ? arg instanceof LDKO.sourceBufferList : (
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onaddsourcebuffer")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onremovesourcebuffer"))
                        )
                    )
                };

                // Is Strictly Style Property Map-Like
                LapysDevelopmentKit.functions.isStrictlyStylePropertyMapLike = function isStrictlyStylePropertyMapLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasStylePropertyMapConstructor ? arg instanceof LDKO.stylePropertyMap : (
                            LDKT.isStylePropertyMapPrototypeAppendMethod(LDKF.objectPrototypeGetProperty(arg, "append")) &&
                            LDKT.isStylePropertyMapPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isStylePropertyMapPrototypeDeleteMethod(LDKF.objectPrototypeGetProperty(arg, "delete")) &&
                            LDKT.isStylePropertyMapPrototypeSetMethod(LDKF.objectPrototypeGetProperty(arg, "set")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "size"))
                        )
                    )
                };

                // Is Strictly Style Property Map Read-Only-Like
                LapysDevelopmentKit.functions.isStrictlyStylePropertyMapReadOnlyLike = function isStrictlyStylePropertyMapReadOnlyLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasStylePropertyMapReadOnlyConstructor ? arg instanceof LDKO.stylePropertyMapReadOnly : (
                            LDKT.isStylePropertyMapReadOnlyPrototypeEntriesMethod(LDKF.objectPrototypeGetProperty(arg, "entries")) &&
                            LDKT.isStylePropertyMapReadOnlyPrototypeForEachMethod(LDKF.objectPrototypeGetProperty(arg, "forEach")) &&
                            LDKT.isStylePropertyMapReadOnlyPrototypeGetMethod(LDKF.objectPrototypeGetProperty(arg, "get")) &&
                            LDKT.isStylePropertyMapReadOnlyPrototypeGetAllMethod(LDKF.objectPrototypeGetProperty(arg, "getAll")) &&
                            LDKT.isStylePropertyMapReadOnlyPrototypeHasMethod(LDKF.objectPrototypeGetProperty(arg, "has")) &&
                            LDKT.isStylePropertyMapReadOnlyPrototypeKeysMethod(LDKF.objectPrototypeGetProperty(arg, "keys")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "size")) &&
                            LDKT.isStylePropertyMapReadOnlyPrototypeValuesMethod(LDKF.objectPrototypeGetProperty(arg, "values"))
                        )
                    )
                };

                // Is Strictly Style Sheet List-Like
                LapysDevelopmentKit.functions.isStrictlyStyleSheetListLike = function isStrictlyStyleSheetListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasStyleSheetListConstructor ? arg instanceof LDKO.styleSheetList : (
                            LDKT.isStyleSheetListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly SVG Length-Like
                LapysDevelopmentKit.functions.isStrictlySVGLengthLike = function isStrictlySVGLengthLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSVGLengthConstructor ? arg instanceof LDKO.svgLength : (
                            LDKT.isSVGLengthPrototypeConvertToSpecifiedUnitsMethod(LDKF.objectPrototypeGetProperty(arg, "convertToSpecifiedUnits")) &&
                            LDKT.isSVGLengthPrototypeNewValueSpecifiedUnitsMethod(LDKF.objectPrototypeGetProperty(arg, "newValueSpecifiedUnits")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_CM")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_EMS")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_EXS")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_IN")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_MM")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_NUMBER")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_PC")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_PERCENTAGE")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_PT")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_PX")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "SVG_LENGTHTYPE_UNKNOWN")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "unitType")) &&
                            (
                                (function() {
                                    // Initialization > Return Value
                                    var returnValue = false;

                                    // Error Handling > (...)
                                    try { arg.value } catch (error) { LDKF.isDOMException(error) && (returnValue = true) }

                                    // Return
                                    return returnValue
                                })() || LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "value"))
                            ) &&
                            LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "valueAsString")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "valueInSpecifiedUnits"))
                        )
                    )
                };

                // Is Strictly SVG Length List-Like
                LapysDevelopmentKit.functions.isStrictlySVGLengthListLike = function isStrictlySVGLengthListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSVGLengthListConstructor ? arg instanceof LDKO.svgLengthList : (
                            LDKT.isSVGLengthListPrototypeAppendItemMethod(LDKF.objectPrototypeGetProperty(arg, "appendItem")) &&
                            LDKT.isSVGLengthListPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isSVGLengthListPrototypeGetItemMethod(LDKF.objectPrototypeGetProperty(arg, "getItem")) &&
                            LDKT.isSVGLengthListPrototypeInitializeMethod(LDKF.objectPrototypeGetProperty(arg, "initialize")) &&
                            LDKT.isSVGLengthListPrototypeInsertItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertItemBefore")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isSVGLengthListPrototypeRemoveItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "removeItem")) &&
                            LDKT.isSVGLengthListPrototypeReplaceItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "replaceItem"))
                        )
                    )
                };

                // Is Strictly SVG Number List-Like
                LapysDevelopmentKit.functions.isStrictlySVGNumberListLike = function isStrictlySVGNumberListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSVGNumberListConstructor ? arg instanceof LDKO.svgNumberList : (
                            LDKT.isSVGNumberListPrototypeAppendItemMethod(LDKF.objectPrototypeGetProperty(arg, "appendItem")) &&
                            LDKT.isSVGNumberListPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isSVGNumberListPrototypeGetItemMethod(LDKF.objectPrototypeGetProperty(arg, "getItem")) &&
                            LDKT.isSVGNumberListPrototypeInitializeMethod(LDKF.objectPrototypeGetProperty(arg, "initialize")) &&
                            LDKT.isSVGNumberListPrototypeInsertItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertItemBefore")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isSVGNumberListPrototypeRemoveItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "removeItem")) &&
                            LDKT.isSVGNumberListPrototypeReplaceItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "replaceItem"))
                        )
                    )
                };

                // Is Strictly SVG Point List-Like
                LapysDevelopmentKit.functions.isStrictlySVGPointListLike = function isStrictlySVGPointListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSVGPointListConstructor ? arg instanceof LDKO.svgPointList : (
                            LDKT.isSVGPointListPrototypeAppendItemMethod(LDKF.objectPrototypeGetProperty(arg, "appendItem")) &&
                            LDKT.isSVGPointListPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isSVGPointListPrototypeGetItemMethod(LDKF.objectPrototypeGetProperty(arg, "getItem")) &&
                            LDKT.isSVGPointListPrototypeInitializeMethod(LDKF.objectPrototypeGetProperty(arg, "initialize")) &&
                            LDKT.isSVGPointListPrototypeInsertItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertItemBefore")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isSVGPointListPrototypeRemoveItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "removeItem")) &&
                            LDKT.isSVGPointListPrototypeReplaceItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "replaceItem"))
                        )
                    )
                };

                // Is Strictly SVG String List-Like
                LapysDevelopmentKit.functions.isStrictlySVGStringListLike = function isStrictlySVGStringListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSVGStringListConstructor ? arg instanceof LDKO.svgStringList : (
                            LDKT.isSVGStringListPrototypeAppendItemMethod(LDKF.objectPrototypeGetProperty(arg, "appendItem")) &&
                            LDKT.isSVGStringListPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isSVGStringListPrototypeGetItemMethod(LDKF.objectPrototypeGetProperty(arg, "getItem")) &&
                            LDKT.isSVGStringListPrototypeInitializeMethod(LDKF.objectPrototypeGetProperty(arg, "initialize")) &&
                            LDKT.isSVGStringListPrototypeInsertItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertItemBefore")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isSVGStringListPrototypeRemoveItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "removeItem")) &&
                            LDKT.isSVGStringListPrototypeReplaceItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "replaceItem"))
                        )
                    )
                };

                // Is Strictly SVG Transform List-Like
                LapysDevelopmentKit.functions.isStrictlySVGTransformListLike = function isStrictlySVGTransformListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasSVGTransformListConstructor ? arg instanceof LDKO.svgTransformList : (
                            LDKT.isSVGTransformListPrototypeAppendItemMethod(LDKF.objectPrototypeGetProperty(arg, "appendItem")) &&
                            LDKT.isSVGTransformListPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) &&
                            LDKT.isSVGTransformListPrototypeConsolidateMethod(LDKF.objectPrototypeGetProperty(arg, "consolidate")) &&
                            LDKT.isSVGTransformListPrototypeCreateSVGTransformFromMatrixMethod(LDKF.objectPrototypeGetProperty(arg, "createSVGTransformFromMatrix")) &&
                            LDKT.isSVGTransformListPrototypeGetItemMethod(LDKF.objectPrototypeGetProperty(arg, "getItem")) &&
                            LDKT.isSVGTransformListPrototypeInitializeMethod(LDKF.objectPrototypeGetProperty(arg, "initialize")) &&
                            LDKT.isSVGTransformListPrototypeInsertItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertItemBefore")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isSVGTransformListPrototypeRemoveItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "removeItem")) &&
                            LDKT.isSVGTransformListPrototypeReplaceItemBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "replaceItem"))
                        )
                    )
                };

                // Is Strictly Text Track Cue List-Like
                LapysDevelopmentKit.functions.isStrictlyTextTrackCueListLike = function isStrictlyTextTrackCueListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasTextTrackCueListConstructor ? arg instanceof LDKO.textTrackCueList : (
                            LDKT.isTextTrackCueListPrototypeGetCueByIdMethod(LDKF.objectPrototypeGetProperty(arg, "getCueById")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly Text Track List-Like
                LapysDevelopmentKit.functions.isStrictlyTextTrackListLike = function isStrictlyTextTrackListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasTextTrackListConstructor ? arg instanceof LDKO.textTrackList : (
                            LDKT.isTextTrackListPrototypeGetTrackByIdMethod(LDKF.objectPrototypeGetProperty(arg, "getTrackById")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onaddtrack")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onchange")) &&
                            LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onremovetrack"))
                        )
                    )
                };

                // Is Strictly Touch List-Like
                LapysDevelopmentKit.functions.isStrictlyTouchListLike = function isStrictlyTouchListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasTouchListConstructor ? arg instanceof LDKO.touchList : (
                            LDKT.isTouchListPrototypeItemMethod(LDKF.objectPrototypeGetProperty(arg, "item")) &&
                            LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "length"))
                        )
                    )
                };

                // Is Strictly XML Document-Like
                LapysDevelopmentKit.functions.isStrictlyXMLDocumentLike = function isStrictlyXMLDocumentLike(arg) { return typeof arg == "object" && (LDKC.hasXMLDocumentConstructor ? arg instanceof LDKO.xmlDocument : LDKF.isDocumentLike(arg)) };

                // Is String
                LapysDevelopmentKit.functions.isString = function isString(arg) { return typeof arg == "string" };

                // Is Style Property Map
                LapysDevelopmentKit.functions.isStylePropertyMap = function isStylePropertyMap(arg) { return LDKC.hasStylePropertyMapConstructor ? LDKT.isConstructibleObject(arg, LDKO.stylePropertyMap, LDKO.stylePropertyMapPrototype) : LDKF.isStrictlyStylePropertyMapLike(arg) };

                // Is Style Property Map Read-Only
                LapysDevelopmentKit.functions.isStylePropertyMapReadOnly = function isStylePropertyMapReadOnly(arg) { return LDKC.hasStylePropertyMapReadOnlyConstructor ? LDKT.isConstructibleObject(arg, LDKO.stylePropertyMapReadOnly, LDKO.stylePropertyMapReadOnlyPrototype) : LDKF.isStrictlyStylePropertyMapReadOnlyLike(arg) };

                // Is Style Sheet List
                LapysDevelopmentKit.functions.isStyleSheetList = function isStyleSheetList(arg, PRIVATE) { return LDKC.hasStyleSheetListConstructor ? LDKT.isConstructibleObject(arg, LDKO.styleSheetList, LDKO.styleSheetListPrototype) : LDKF.isStrictlyStyleSheetListLike(arg, PRIVATE) };

                // Is SVG Length
                LapysDevelopmentKit.functions.isSVGLength = function isSVGLength(arg) { return LDKC.hasSVGLengthConstructor ? LDKT.isConstructibleObject(arg, LDKO.svgLength, LDKO.svgLengthPrototype) : LDKF.isStrictlySVGLengthLike(arg) };

                // Is SVG Length List
                LapysDevelopmentKit.functions.isSVGLengthList = function isSVGLengthList(arg) { return LDKC.hasSVGLengthListConstructor ? LDKT.isConstructibleObject(arg, LDKO.svgLengthList, LDKO.svgLengthListPrototype) : LDKF.isStrictlySVGLengthListLike(arg) };

                // Is SVG Number List
                LapysDevelopmentKit.functions.isSVGNumberList = function isSVGNumberList(arg) { return LDKC.hasSVGNumberListConstructor ? LDKT.isConstructibleObject(arg, LDKO.svgNumberList, LDKO.svgNumberListPrototype) : LDKF.isStrictlySVGNumberListLike(arg) };

                // Is SVG Point List
                LapysDevelopmentKit.functions.isSVGPointList = function isSVGPointList(arg) { return LDKC.hasSVGPointListConstructor ? LDKT.isConstructibleObject(arg, LDKO.svgPointList, LDKO.svgPointListPrototype) : LDKF.isStrictlySVGPointListLike(arg) };

                // Is SVG String List
                LapysDevelopmentKit.functions.isSVGStringList = function isSVGStringList(arg) { return LDKC.hasSVGStringListConstructor ? LDKT.isConstructibleObject(arg, LDKO.svgStringList, LDKO.svgStringListPrototype) : LDKF.isStrictlySVGStringListLike(arg) };

                // Is SVG Transform List
                LapysDevelopmentKit.functions.isSVGTransformList = function isSVGTransformList(arg) { return LDKC.hasSVGTransformListConstructor ? LDKT.isConstructibleObject(arg, LDKO.svgTransformList, LDKO.svgTransformListPrototype) : LDKF.isStrictlySVGTransformListLike(arg) };

                // Is Symbol
                LapysDevelopmentKit.functions.isSymbol = function isSymbol(arg) { return typeof arg == "symbol" };

                // Is Syntax Error
                LapysDevelopmentKit.functions.isSyntaxError = function isSyntaxError(arg) { return LDKT.isConstructibleObject(arg, LDKO.syntaxError, LDKO.syntaxErrorPrototype) };

                // Is Text Track Cue List
                LapysDevelopmentKit.functions.isTextTrackCueList = function isTextTrackCueList(arg) { return LDKC.hasTextTrackCueListConstructor ? LDKT.isConstructibleObject(arg, LDKO.textTrackCueList, LDKO.textTrackCueListPrototype) : LDKF.isStrictlyTextTrackCueListLike(arg) };

                // Is Text Track List
                LapysDevelopmentKit.functions.isTextTrackList = function isTextTrackList(arg) { return LDKC.hasTextTrackListConstructor ? LDKT.isConstructibleObject(arg, LDKO.textTrackList, LDKO.textTrackListPrototype) : LDKF.isStrictlyTextTrackListLike(arg) };

                // Is Timeout Error
                LapysDevelopmentKit.functions.isTimeoutError = function isTimeoutError(arg) { return LDKT.isConstructibleObject(arg, LDKO.timeoutError, LDKO.timeoutErrorPrototype) };

                // Is Touch List
                LapysDevelopmentKit.functions.isTouchList = function isTouchList(arg) { return LDKC.hasTouchListConstructor ? LDKT.isConstructibleObject(arg, LDKO.touchList, LDKO.touchListPrototype) : LDKF.isStrictlyTouchListLike(arg) };

                // Is Track Start Error
                LapysDevelopmentKit.functions.isTrackStartError = function isTrackStartError(arg) { return LDKT.isConstructibleObject(arg, LDKO.trackStartError, LDKO.trackStartErrorPrototype) };

                // Is Transaction Inactive Error
                LapysDevelopmentKit.functions.isTransactionInactiveError = function isTransactionInactiveError(arg) { return LDKT.isConstructibleObject(arg, LDKO.transactionInactiveError, LDKO.transactionInactiveErrorPrototype) };

                // Is Typed Array-Like
                LapysDevelopmentKit.functions.isTypedArrayLike = function isTypedArrayLike(arg) {
                    // Return
                    return LDKF.isBigInt64Array(arg) || LDKF.isBigUint64Array(arg) ||
                        LDKF.isFloat32Array(arg) || LDKF.isFloat64Array(arg) ||
                        LDKF.isInt8Array(arg) || LDKF.isInt16Array(arg) || LDKF.isInt32Array(arg) ||
                        LDKF.isUint8Array(arg) || LDKF.isUint8ClampedArray(arg) || LDKF.isUint16Array(arg) || LDKF.isUint32Array(arg)
                };

                // Is Type Error
                LapysDevelopmentKit.functions.isTypeError = function isTypeError(arg) { return LDKT.isConstructibleObject(arg, LDKO.typeError, LDKO.typeErrorPrototype) };

                // Is Type Mismatch Error
                LapysDevelopmentKit.functions.isTypeMismatchError = function isTypeMismatchError(arg) { return LDKT.isConstructibleObject(arg, LDKO.typeMismatchError, LDKO.typeMismatchErrorPrototype) };

                // Is Unknown Error
                LapysDevelopmentKit.functions.isUnknownError = function isUnknownError(arg) { return LDKT.isConstructibleObject(arg, LDKO.unknownError, LDKO.unknownErrorPrototype) };

                // Is URI Error
                LapysDevelopmentKit.functions.isURIError = function isURIError(arg) { return LDKT.isConstructibleObject(arg, LDKO.uriError, LDKO.uriErrorPrototype) };

                // Is URL Mismatch Error
                LapysDevelopmentKit.functions.isURLMismatchError = function isURLMismatchError(arg) { return LDKT.isConstructibleObject(arg, LDKO.urlMismatchError, LDKO.urlMismatchErrorPrototype) };

                // Is Version Error
                LapysDevelopmentKit.functions.isVersionError = function isVersionError(arg) { return LDKT.isConstructibleObject(arg, LDKO.versionError, LDKO.versionErrorPrototype) };

                // Is Void --- NOTE (Lapys) -> Unfortunately, `HTMLAllCollection` objects are also seen as void in modern development environments.
                LapysDevelopmentKit.functions.isVoid = function isVoid(arg) { return typeof arg == "undefined" };

                // Is Webkit Speech Recognition Error
                LapysDevelopmentKit.functions.isWebkitSpeechRecognitionError = function isWebkitSpeechRecognitionError(arg) { return LDKT.isConstructibleObject(arg, LDKO.webkitSpeechRecognitionError, LDKO.webkitSpeechRecognitionErrorPrototype) };

                // Is Window
                LapysDevelopmentKit.functions.isWindow = function isWindow(arg) { return LDKT.isConstructibleObject(arg, LDKO.window, LDKO.windowPrototype) };

                // Is Wrong Document Error
                LapysDevelopmentKit.functions.isWrongDocumentError = function isWrongDocumentError(arg) { return LDKT.isConstructibleObject(arg, LDKO.wrongDocumentError, LDKO.wrongDocumentErrorPrototype) };

                // Is XML Document
                LapysDevelopmentKit.functions.isXMLDocument = function isXMLDocument(arg) { return LDKC.hasXMLDocumentConstructor ? LDKT.isConstructibleObject(arg, LDKO.xmlDocument, LDKO.xmlDocumentPrototype) : LDKF.isStrictlyXMLDocumentLike(arg) };

                // Is XML Document-Like
                LapysDevelopmentKit.functions.isXMLDocumentLike = function isXMLDocumentLike(arg) { return LDKF.isXMLDocument(arg) || LDKF.isStrictlyXMLDocumentLike(arg) };

                // Is XML HTTP Request Event Target
                LapysDevelopmentKit.functions.isXMLHTTPRequestEventTarget = function isXMLHTTPRequestEventTarget(arg) { return LDKT.isConstructibleObject(arg, LDKO.xmlHTTPRequestEventTarget, LDKO.xmlHTTPRequestEventTargetPrototype) };

                // Is 8-Bit Integer Array
                LapysDevelopmentKit.functions.isInt8Array = function isInt8Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.int8Array, LDKO.int8ArrayPrototype) };

                // Is 8-Bit Unsigned Integer Array
                LapysDevelopmentKit.functions.isUint8Array = function isUint8Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.uint8Array, LDKO.uint8ArrayPrototype) };

                // Is 8-Bit Unsigned Integer Clamped Array
                LapysDevelopmentKit.functions.isUint8ClampedArray = function isUint8ClampedArray(arg) { return LDKT.isConstructibleObject(arg, LDKO.uint8ClampedArray, LDKO.uint8ClampedArrayPrototype) };

                // Is 16-Bit Integer Array
                LapysDevelopmentKit.functions.isInt16Array = function isInt16Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.int16Array, LDKO.int16ArrayPrototype) };

                // Is 16-Bit Unsigned Integer Array
                LapysDevelopmentKit.functions.isUint16Array = function isUint16Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.uint16Array, LDKO.uint16ArrayPrototype) };

                // Is 32-Bit Float Array
                LapysDevelopmentKit.functions.isFloat32Array = function isFloat32Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.float32Array, LDKO.float32ArrayPrototype) };

                // Is 32-Bit Integer Array
                LapysDevelopmentKit.functions.isInt32Array = function isInt32Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.int32Array, LDKO.int32ArrayPrototype) };

                // Is 32-Bit Unsigned Integer Array
                LapysDevelopmentKit.functions.isUint32Array = function isUint32Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.uint32Array, LDKO.uint32ArrayPrototype) };

                // Is 64-Bit Big Integer Array
                LapysDevelopmentKit.functions.isBigInt64Array = function isBigInt64Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.bigInt64Array, LDKO.bigInt64ArrayPrototype) };

                // Is 64-Bit Big Unsigned Integer Array
                LapysDevelopmentKit.functions.isBigUint64Array = function isBigUint64Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.bigUint64Array, LDKO.bigUint64ArrayPrototype) };

                // Is 64-Bit Float Array
                LapysDevelopmentKit.functions.isFloat64Array = function isFloat64Array(arg) { return LDKT.isConstructibleObject(arg, LDKO.float64Array, LDKO.float64ArrayPrototype) };

                // Map > Prototype
                    // Get
                    LapysDevelopmentKit.functions.mapPrototypeGet = function mapPrototypeGet(map, key) { return LDKO.mapPrototypeGet.call(map, key) };

                    // Size
                    LapysDevelopmentKit.functions.mapPrototypeSize = function mapPrototypeSize(map) { return LDKO.mapPrototypeSizeGetter.call(map) };

                // Media Key Status Map > Prototype
                    // Get
                    LapysDevelopmentKit.functions.mediaKeyStatusMapPrototypeGet = function mediaKeyStatusMapPrototypeGet(mediaKeyStatusMap, keyId) { return LDKO.mediaKeyStatusMapPrototypeGet.call(mediaKeyStatusMap, keyId) };

                    // Length
                    LapysDevelopmentKit.functions.mediaKeyStatusMapPrototypeLength = function mediaKeyStatusMapPrototypeLength(mediaKeyStatusMap) { return LDKO.mediaKeyStatusMapPrototypeLengthGetter.call(mediaKeyStatusMap) };

                // Media List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.mediaListPrototypeItem = function mediaListPrototypeItem(mediaList, index) { return LDKO.mediaListPrototypeItem.call(mediaList, index) };

                    // Length
                    LapysDevelopmentKit.functions.mediaListPrototypeLength = function mediaListPrototypeLength(mediaList) { return LDKO.mediaListPrototypeLengthGetter.call(mediaList) };

                // MIME Type Array > Prototype
                    // Item
                    LapysDevelopmentKit.functions.mimeTypeArrayPrototypeItem = function mimeTypeArrayPrototypeItem(mimeTypeArray, index) { return LDKO.mimeTypeArrayPrototypeItem.call(mimeTypeArray, index) };

                    // Length
                    LapysDevelopmentKit.functions.mimeTypeArrayPrototypeLength = function mimeTypeArrayPrototypeLength(mimeTypeArray) { return LDKO.mimeTypeArrayPrototypeLengthGetter.call(mimeTypeArray) };

                // Named Node Map > Prototype
                    // Item
                    LapysDevelopmentKit.functions.namedNodeMapPrototypeItem = function namedNodeMapPrototypeItem(namedNodeMap, index) { return LDKO.namedNodeMapPrototypeItem.call(namedNodeMap, index) };

                    // Length
                    LapysDevelopmentKit.functions.namedNodeMapPrototypeLength = function namedNodeMapPrototypeLength(namedNodeMap) { return LDKO.namedNodeMapPrototypeLengthGetter.call(namedNodeMap) };

                // Node List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.nodeListPrototypeItem = function nodeListPrototypeItem(nodeList, index) { return LDKO.nodeListPrototypeItem.call(nodeList, index) };

                    // Length
                    LapysDevelopmentKit.functions.nodeListPrototypeLength = function nodeListPrototypeLength(nodeList) { return LDKO.nodeListPrototypeLengthGetter.call(nodeList) };

                // Number > Prototype
                    // Is Finite
                    LapysDevelopmentKit.functions.numberPrototypeIsFinite = function numberPrototypeIsFinite(number) { return !LDKF.numberPrototypeIsInfinite(number) };

                    // Is Infinite
                    LapysDevelopmentKit.functions.numberPrototypeIsInfinite = function numberPrototypeIsInfinite(number) { var string = LDKF.toString(number); return LDKF.isNumber(number) && string == "Infinity" || string == "-Infinity" };

                    // Is Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsInteger = function numberPrototypeIsInteger(number) { return number == LDKM.int(number) };

                    // Is NaN
                    LapysDevelopmentKit.functions.numberPrototypeIsNaN = function numberPrototypeIsNaN(number) { return LDKF.isNumber(number) && LDKF.toString(number) == "NaN" };

                    // Is Negative --- NOTE (Lapys) -> In JavaScript's case, also tests for negative zero.
                    LapysDevelopmentKit.functions.numberPrototypeIsNegative = function numberPrototypeIsNegative(number) { return number < +0 || LDKF.numberPrototypeIsNegativeZero(number) };

                    // Is Negative Infinity
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeInfinity = function numberPrototypeIsNegativeInfinity(number) { return LDKF.numberPrototypeIsInfinite(number) && LDKF.numberPrototypeIsNegative(number) };

                    // Is Negative Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeInteger = function numberPrototypeIsNegativeInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsNegative(number) };

                    // Is Negative Zero
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeZero = function numberPrototypeIsNegativeZero(number) { return LDKF.objectIs(number, -0) };

                    // Is Non-Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsNonInteger = function numberPrototypeIsNonInteger(number) { return !LDKF.numberPrototypeIsInteger(number) };

                    // Is Positive
                    LapysDevelopmentKit.functions.numberPrototypeIsPositive = function numberPrototypeIsPositive(number) { return number > +0 || LDKF.numberPrototypeIsPositiveZero(number) };

                    // Is Positive Infinity
                    LapysDevelopmentKit.functions.numberPrototypeIsPositiveInfinity = function numberPrototypeIsPositiveInfinity(number) { return LDKF.numberPrototypeIsInfinite(number) && LDKF.numberPrototypeIsPositive(number) };

                    // Is Positive Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsPositiveInteger = function numberPrototypeIsPositiveInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsPositive(number) };

                    // Is Positive Zero
                    LapysDevelopmentKit.functions.numberPrototypeIsPositiveZero = function numberPrototypeIsPositiveZero(number) { return LDKF.objectIs(number, +0) };

                    // Is Safe
                    LapysDevelopmentKit.functions.numberPrototypeIsSafe = function numberPrototypeIsSafe(number) { return number < (LDKC.number.maximumValue = 0x1FFFFFFFFFFFFF) && LDKF.numberPrototypeIsFinite(number) && !LDKF.numberPrototypeIsNaN(number) };

                    // Is Safe Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsSafeInteger = function numberPrototypeIsSafeInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsSafe(number) };

                // Object
                    // Create
                    LapysDevelopmentKit.functions.objectCreate = function objectCreate() { return LDKO.objectCreate.apply(this, arguments) };

                    // Define Property
                    LapysDevelopmentKit.functions.objectDefineProperty = function objectDefineProperty(object, key, descriptor) { return LDKO.objectDefineProperty(object, key, descriptor) };
                        // Constant
                        LapysDevelopmentKit.functions.objectDefineConstantProperty = function objectDefineConstantProperty(object, key, descriptor) {
                            // Modification > Descriptor > (Configurable, Writable)
                            LDKF.objectDefineProperty(descriptor, "configurable", {enumerable: true, value: false});
                            LDKF.objectPrototypeHasProperty(descriptor, "value") && LDKF.objectDefineProperty(descriptor, "writable", {enumerable: true, value: false});

                            // Modification > Object > [Key]
                            LDKF.objectDefineProperty(object, key, descriptor)
                        };

                    // Is
                    LapysDevelopmentKit.functions.objectIs = function objectIs(objectA, objectB) { return objectA === objectB ? +0 !== objectA || 1 / objectA == 1 / objectB: objectA !== objectA && objectB !== objectB };

                    // Get Own Property Descriptor
                    LapysDevelopmentKit.functions.objectGetOwnPropertyDescriptor = function objectGetOwnPropertyDescriptor(object, propertyName) { return LDKO.objectGetOwnPropertyDescriptor(object, propertyName) };

                    // Get Own Property Names
                    LapysDevelopmentKit.functions.objectGetOwnPropertyNames = function objectGetOwnPropertyNames(object) { return LDKO.objectGetOwnPropertyNames(object) };

                    // Get Own Property Symbols
                    LapysDevelopmentKit.functions.objectGetOwnPropertySymbols = function objectGetOwnPropertySymbols(object) { return LDKO.objectGetOwnPropertySymbols(object) };

                    // Get Prototype Of
                    LapysDevelopmentKit.functions.objectGetPrototypeOf = function objectGetPrototypeOf(object) { return LDKO.objectGetPrototypeOf(object) };

                    // Keys
                    LapysDevelopmentKit.functions.objectKeys = function objectKeys(object) { return LDKO.objectKeys(object) };

                    // Prototype
                        // Constructor --- NOTE (Lapys) -> The `instanceof` keyword proved fruitless here.
                        LapysDevelopmentKit.functions.objectPrototypeConstructor = function objectPrototypeConstructor(object, STRICT) {
                            // Initialization > (Constructor, Is Constructible)
                            var constructor, isConstructible = LDKF.isConstructible(object);

                            // Error Handling
                            try { if (typeof (constructor = isConstructible ? object.constructor : undefined) != "function") throw {} }
                            catch (error) {
                                // Error Handling > Update > Constructor --- NOTE (Lapys) -> It is assumed the object is of the `Object` constructor.
                                try { constructor = isConstructible ? (LDKF.objectPrototypeGet__Prototype__(object, STRICT = true) || {}).constructor : undefined }
                                catch (error) { constructor = undefined }
                            }

                            // Logic
                            if (!STRICT)
                                // Error Handling > Update > Constructor
                                try { (!LDKF.isFunction(constructor) && !LDKF.isNull(constructor)) && (constructor = undefined) }
                                catch (error) { (typeof constructor != "function" && !LDKF.isNull(constructor)) && (constructor = undefined) }

                            // Return
                            return constructor
                        };

                        // Delete Property --- NOTE (Lapys) -> Must be syntax-specific.
                        LapysDevelopmentKit.functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, propertyName) { return delete object[propertyName] };

                        // Get __Prototype__
                        LapysDevelopmentKit.functions.objectPrototypeGet__Prototype__ = function objectPrototypeGet__Prototype__(object, STRICT) {
                            // Initialization > __Prototype__
                            var __proto__ = undefined;

                            // Error Handling
                            try {
                                // Logic > Update > __Prototype__
                                if (LDKF.objectPrototypeHasProperty(object, "__proto__")) __proto__ = object.__proto__;
                                else if (typeof LDKO.objectGetPrototypeOf == "function") __proto__ = LDKF.objectGetPrototypeOf(object)
                            } catch (error) {}

                            // Logic
                            if (!STRICT && LDKF.isVoid(__proto__)) {
                                // Initialization > Constructor
                                var constructor = LDKF.objectPrototypeConstructor(object);

                                // Update > __Prototype__
                                LDKF.isConstructible(constructor) && (__proto__ = LDKF.objectPrototypeGetProperty(constructor, "prototype"))
                            }

                            // Return
                            return __proto__
                        };

                        // Get Property
                        LapysDevelopmentKit.functions.objectPrototypeGetProperty = function objectPrototypeGetProperty(object, propertyName) { try { return object[propertyName] } catch (error) {} };

                        // Is
                        LapysDevelopmentKit.functions.objectPrototypeIs = function objectPrototypeIs(objectA, objectB) { return objectA === objectB };
                            // OR --- NOTE (Lapys) -> Literally for syntax only.
                            LapysDevelopmentKit.functions.objectPrototypeIs.OR = function OR(object) {
                                // Initialization > iterator
                                var iterator = LDKF.getArgumentsLength(arguments);

                                // Loop > Logic > Return
                                while (iterator != 1) if (LDKF.objectPrototypeIs(object, arguments[iterator -= 1])) return true;

                                // Return
                                return false
                            };

                        /* Is Unique
                                --- NOTE ---
                                    #Lapys: Check if an object references only itself (is unique).

                                --- WARN ---
                                    #Lapys: Only use within the context of testing various JavaScript objects (e.g.: `PluginArray` would be uniquely different from all other indexed objects unless edited by the user).
                        */
                        LapysDevelopmentKit.functions.objectPrototypePropertyIsUnique = function objectPrototypePropertyIsUnique(object, propertyName) {
                            // Initialization > (Iterator, Length, Property Value)
                            var iterator = LDKF.arrayPrototypeLength(LDKS.registry["UNIQUE"]),
                                length = iterator,
                                propertyValue = LDKF.objectPrototypeGetProperty(object, propertyName);

                            // Loop
                            while (iterator) {
                                // Initialization > Registered
                                var registered = LDKS.registry["UNIQUE"][iterator -= 1];

                                // Logic
                                if (!(registered.propertyName === propertyName && registered.object === object) && registered.propertyValue === propertyValue)
                                    // Return
                                    return false;

                                else if (registered.propertyName === propertyName && registered.object === object) {
                                    // Initialization > Value
                                    var value = LDKF.objectPrototypeGetProperty(registered.object, registered.propertyName);

                                    // Modification > Registered  > Property Value
                                    (registered.propertyValue === value) || (registered.propertyValue = value);

                                    // Return
                                    return true
                                }
                            }

                            // Update > (Lapys Development Kit > Data > Lists > Unique)
                            LDKF.objectPrototypeHasProperty(object, propertyName) && (LDKS.registry["UNIQUE"][length] = {object: object, propertyName: propertyName, propertyValue: propertyValue});

                            // Return
                            return true
                        };

                        // Iterate --- NOTE (Lapys) -> Index all properties of an object.
                        LapysDevelopmentKit.functions.objectPrototypeIterate = function objectPrototypeIterate(object, callback) {
                            // Initialization > (Key, (Property) (Names, Symbols) (Iterator, Length), Properties (Iterator, Length))
                            var key,
                                propertyNames = (function() { try { return LDKF.objectGetOwnPropertyNames(object) || [] } catch (error) {} })(),
                                propertyNamesIterator = LDKF.arrayPrototypeLength(propertyNames), propertyNamesLength = propertyNamesIterator,
                                propertySymbols = (function() { try { return LDKF.isFunction(LDKO.objectGetOwnPropertySymbols) ? LDKF.objectGetOwnPropertySymbols(object) : [] } catch (error) {} })(),
                                propertySymbolsIterator = LDKF.arrayPrototypeLength(propertySymbols), propertySymbolsLength = propertySymbolsIterator,
                                property, properties = [],
                                propertiesIterator = +0, propertiesLength;

                            // Function
                                // Add To Properties
                                function addToProperties(key, value, descriptor) {
                                    // Logic
                                    if (!isIncludedToProperties(key)) {
                                        // Initialization > (Descriptor, Value)
                                        var descriptor = LDKF.objectGetOwnPropertyDescriptor(object, key), value = LDKF.objectPrototypeGetProperty(object, key);

                                        // Update > Properties (Iterator)
                                        properties[propertiesIterator] = {key: key, value: value, descriptor: descriptor};
                                        propertiesIterator += 1
                                    }
                                }

                                function isIncludedToProperties(key) {
                                    // Initialization > Iterator
                                    var iterator = propertiesIterator;

                                    // Loop > Logic > Return
                                    while (iterator) if (properties[iterator -= 1] === key) return true;

                                    // Return
                                    return false
                                }

                            // Loop > Add to Properties
                            while (propertyNamesIterator) addToProperties(propertyNames[propertyNamesLength - (propertyNamesIterator -= 1) - 1]);
                            while (propertySymbolsIterator) addToProperties(propertySymbols[propertySymbolsLength - (propertySymbolsIterator -= 1) - 1]);

                            // Update > Properties Length
                            propertiesLength = propertiesIterator;

                            // Loop
                            while (propertiesIterator) {
                                // Update > Property
                                property = properties[propertiesLength - (propertiesIterator -= 1) - 1];

                                // Callback
                                callback(property.key, property.value, property.descriptor);
                            }

                            // Return
                            return object
                        };

                        // Prototype --- NOTE (Lapys) -> Same as `<object>.__proto__ || Object.getPrototypeOf(<object>)`, not `<object>.prototype`.
                        LapysDevelopmentKit.functions.objectPrototypePrototype = function objectPrototypePrototype(object) { return LDKF.objectPrototypeGet__Prototype__(object) };

                        // Prototype Chain --- NOTE (Lapys) -> Mostly for debugging only.
                        LapysDevelopmentKit.functions.objectPrototypePrototypeChain = function objectPrototypePrototypeChain(object) {
                            // Initialization > (Former) Prototype (Chain (Iterator))
                            var formerPrototype, prototype = LDKF.objectPrototypePrototype(object),
                                prototypeChain = [], prototypeChainIterator = -1;

                            // Loop
                            while (formerPrototype !== prototype && !LDKF.isNull(prototype)) {
                                // Update > (Former) Prototype (Chain)
                                prototypeChain[prototypeChainIterator += 1] = prototype;
                                formerPrototype = prototype;
                                prototype = LDKF.objectPrototypePrototype(prototype)
                            }

                            // Return
                            return prototypeChain
                        };

                        // Has Own Property
                        LapysDevelopmentKit.functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, propertyName) { return LDKO.objectPrototypeHasOwnProperty.call(object, propertyName) };

                        // Has Property
                        LapysDevelopmentKit.functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyName) { try { return propertyName in object } catch (error) {} return false };

                        // Replace Property
                        LapysDevelopmentKit.functions.objectPrototypeReplaceProperty = function objectPrototypeReplaceProperty(object, formerPropertyName, propertyName) {
                            // Initialization > Value
                            var value = LDKF.objectPrototypeGetProperty(object, formerPropertyName);

                            // Modification > Object > [Property Name]
                            LDKF.objectPrototypeSetProperty(object, propertyName, value);

                            // Deletion
                            LDKF.objectPrototypeDeleteProperty(object, formerPropertyName);

                            // Return
                            return value
                        };

                        // Set __Prototype__ --- WARN (NOTE) -> Accessors are not available in some environments.
                        LapysDevelopmentKit.functions.objectPrototypeSet__Prototype__ = function objectPrototypeSet__Prototype__(object, __proto__) {
                            // Error Handling
                            try {
                                // Logic > (...)
                                    // (...)
                                    if (LDKF.objectPrototypeHasProperty(object, "__proto__")) LDKF.objectPrototypeSetProperty(object, "__proto__", __proto__);

                                    // (...)
                                    else if (typeof LDKO.objectSetPrototypeOf == "function") LDKF.objectSetPrototypeOf(object, __proto__);

                                    // (...) NOTE (Lapys) -> Shamelessly mimic mutating an object's prototype.
                                    else {
                                        // Initialization > (__Prototype__ Keys, Iterator, Length)
                                        var __proto__Keys = LDKF.objectGetOwnPropertyNames(__proto__),
                                            iterator = LDKF.arrayPrototypeLength(__proto__Keys), length = iterator;

                                        // Loop
                                        while (iterator) {
                                            // Initialization > __Prototype__ Key
                                            var __proto__Key = __proto__Keys[length - (iterator -= 1) - 1];

                                            // Error Handling
                                            try {
                                                // Initialization > __Prototype__ Descriptor
                                                var __proto__PropertyDescriptor = LDKF.objectGetOwnPropertyDescriptor(object, __proto__Key);

                                                // Modification > Object > [__Prototype__ Key]
                                                __proto__PropertyDescriptor && (LDKF.objectPrototypeHasProperty(__proto__PropertyDescriptor, "get") || LDKF.objectPrototypeHasProperty(__proto__PropertyDescriptor, "set")) ?
                                                    LDKF.objectDefineProperty(object, __proto__Key, __proto__PropertyDescriptor) :
                                                    LDKF.objectPrototypeSetProperty(object, __proto__Key, __proto__[__proto__Key])
                                            } catch (error) {}
                                        }
                                    }
                            } catch (error) {}
                        };

                        // Set Properties
                        LapysDevelopmentKit.functions.objectPrototypeSetProperties = function objectPrototypeSetProperties(object, properties) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(properties), length = iterator;

                            // Loop > Modification > Object > (...)
                            while (iterator) LDKF.objectPrototypeSetProperty(object, properties[length - (iterator -= 1) - 1])
                        };

                        // Set Property
                        LapysDevelopmentKit.functions.objectPrototypeSetProperty = function objectPrototypeSetProperty(object, property, value) {
                            // Logic > (...)
                            if (LDKF.getArgumentsLength(arguments) === 3) return LDKF.objectPrototypeSetProperty(object, {name: property, value: value});
                            else try { return object[property.name] = property.value } catch (error) {}
                        };
                            // Innumerable Variable
                            LapysDevelopmentKit.functions.objectSetInnumerableVariableProperty = function objectSetInnumerableVariableProperty(object, key, value) { LDKF.objectDefineProperty(object, key, {configurable: true, enumerable: false, value: value, writable: true}) };
                                // When Property Is Void
                                LapysDevelopmentKit.functions.objectSetInnumerableVariableProperty.whenPropertyIsVoid = function whenPropertyIsVoid(object, key, value) { LDKF.objectPrototypeHasProperty(object, key) || LDKF.objectSetInnumerableVariableProperty(object, key, value) };

                            // Getter
                                // Innumerable Variable
                                LapysDevelopmentKit.functions.objectSetInnumerableVariableGetterProperty = function objectSetInnumerableVariableGetterProperty(object, key, value) { LDKF.objectDefineProperty(object, key, {configurable: true, enumerable: false, get: value}) };
                                    // When Property Is Void
                                    LapysDevelopmentKit.functions.objectSetInnumerableVariableGetterProperty.whenPropertyIsVoid = function whenPropertyIsVoid(object, key, value) { LDKF.objectPrototypeHasProperty(object, key) || LDKF.objectSetInnumerableVariableGetterProperty(object, key, value) };

                    // Set Prototype Of
                    LapysDevelopmentKit.functions.objectSetPrototypeOf = function objectSetPrototypeOf(object, __proto__) { return LDKO.objectSetPrototypeOf(object, __proto__) };

                // Performance > Prototype
                    // Now
                    LapysDevelopmentKit.functions.performancePrototypeNow = function performancePrototypeNow(performance) { return LDKO.performancePrototypeNow.call(LDKF.getArgumentsLength(performance) ? performance : LDKC.performance) };

                // Plugin Array > Prototype
                    // Item
                    LapysDevelopmentKit.functions.pluginArrayPrototypeItem = function pluginArrayPrototypeItem(pluginArray, index) { return LDKO.pluginArrayPrototypeItem.call(pluginArray, index) };

                    // Length
                    LapysDevelopmentKit.functions.pluginArrayPrototypeLength = function pluginArrayPrototypeLength(pluginArray) { return LDKO.pluginArrayPrototypeLengthGetter.call(pluginArray) };

                // Print --- NOTE (Lapys) -> Only use within the main phases (`INITIATE`, `UPDATE` and `TERMINATE`).
                LapysDevelopmentKit.functions.print = function print(arg) {
                    // (...)
                    LDKF.consoleLog.apply(LDKF, arguments);

                    // Logic > Return
                    if (LDKF.getArgumentsLength(arguments) == 1) return arg
                };

                // Radio Node List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.radioNodeListPrototypeItem = function radioNodeListPrototypeItem(radioNodeList, index) { return LDKO.radioNodeListPrototypeItem.call(radioNodeList, index) };

                    // Length
                    LapysDevelopmentKit.functions.radioNodeListPrototypeLength = function radioNodeListPrototypeLength(radioNodeList) { return LDKO.radioNodeListPrototypeLengthGetter.call(radioNodeList) };

                // Register Custom Element
                LapysDevelopmentKit.functions.registerCustomElement = function registerCustomElement() {
                    // Return
                    return LDKC.supportsCustomElements ?
                        LDKO.customElementRegistryPrototypeDefine.apply(LDKC.customElements, arguments) :
                        LDKO.documentPrototypeRegisterElement.apply(LDKC.document, arguments)
                };

                // Regular Expression
                LapysDevelopmentKit.functions.regularExpression = function regularExpression(source) { return LDKF.getArgumentsLength(arguments) ? LDKO.regularExpression(source) : new LDKO.regularExpression };

                // Request Animation Frame
                LapysDevelopmentKit.functions.requestAnimationFrame = function requestAnimationFrame(method) { return LDKO.requestAnimationFrame.call(GLOBAL, method) };

                // Set > Prototype
                    // Size
                    LapysDevelopmentKit.functions.setPrototypeSize = function setPrototypeSize(set) { return LDKO.setPrototypeSizeGetter.call(set) };

                // Set Interval
                LapysDevelopmentKit.functions.setInterval = function setInterval(handler, delay) {
                    // Initialization > (Arguments, Method, Timeout ID, Timeout Index)
                    var args = arguments, method = handler, timeoutId, timeoutIndex = LDKF.arrayPrototypeLength(LDKR.timeoutIDs);

                    // Update > Handler
                    handler = function() {
                        // Logic
                        if (LDKR.timeoutIDs[timeoutIndex] !== UNIQUE) {
                            // Initialization > Return Value
                            var returnValue = method.apply(this, arguments);

                            // Clear Timeout > Timeout ID
                            LDKF.clearTimeout(timeoutId);
                            timeoutId = LDKF.setTimeout.apply(GLOBAL, args);

                            // Return
                            return returnValue
                        }
                    };

                    // Update > (Timeout ID, (...))
                    timeoutId = LDKF.setTimeout.apply(GLOBAL, args);
                    LDKR.timeoutIDs[timeoutIndex] = timeoutId;

                    // Return
                    return timeoutId
                };

                // Set Timeout
                LapysDevelopmentKit.functions.setTimeout = function setTimeout(handler, delay) {
                    // Initialization > Method
                    var method = handler;

                    // Update > Handler
                    handler = function() { return method.apply(this, arguments) };

                    // Return
                    return LDKO.setTimeout.apply(GLOBAL, arguments)
                };

                // Source Buffer List > Prototype
                    // Length
                    LapysDevelopmentKit.functions.sourceBufferListPrototypeLength = function sourceBufferListPrototypeLength(sourceBufferList) { return LDKO.sourceBufferListPrototypeLengthGetter.call(sourceBufferList) };

                // String > Prototype
                    // Character At
                    LapysDevelopmentKit.functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(string, index) {
                        // Update > String
                        (LDKF.objectPrototypeConstructor(string) === LDKO.string) && (string = LDKF.toString(string));

                        // Logic > Error --- WARN (Lapys) -> Prevent erroneously using this method with a non-string.
                        (typeof string == "string") || LDKF.error("Argument specified must be a string");

                        // Logic > Return
                        if (LDKF.getArgumentsLength(arguments) < 2) return undefined;

                        // Return
                        return string[index] || LDKO.stringPrototypeCharacterAt.call(string, index) || undefined
                    };

                    // Character Code At
                    LapysDevelopmentKit.functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, index) { return LDKO.stringPrototypeCharacterCodeAt.call(string, index) };

                    // Length
                    LapysDevelopmentKit.functions.stringPrototypeLength = function stringPrototypeLength(string) { var length = +0; while (!LDKF.isVoid(LDKF.stringPrototypeCharacterAt(string, length))) length += 1; return length };

                    // Includes
                    LapysDevelopmentKit.functions.stringPrototypeIncludes = function stringPrototypeIncludes(string, match) {
                        // Initialization > (Iterator, (Match) Length)
                        var iterator = LDKF.stringPrototypeLength(string), length = iterator,
                            matchLength = LDKF.stringPrototypeLength(match);

                        // Logic > Return
                        if (!matchLength) return true;

                        // Loop
                        while (iterator) {
                            // Initialization > (Index, Match Iterator)
                            var index = length - (iterator -= 1) - 1, matchIterator = matchLength;

                            // Loop
                            while (matchIterator) {
                                // Initialization > Match Index
                                var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                // Logic
                                if (LDKF.stringPrototypeCharacterAt(string, index + matchIndex) != LDKF.stringPrototypeCharacterAt(match, matchIndex))
                                    // [Break]
                                    break;

                                else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, index + matchIndex) == LDKF.stringPrototypeCharacterAt(match, matchIndex))
                                    // Return
                                    return true
                            }
                        }

                        // Return
                        return false
                    };

                    // Index
                    LapysDevelopmentKit.functions.stringPrototypeIndex = function stringPrototypeIndex(string, matches) {
                        // Initialization > Length
                        var length = LDKF.getArgumentsLength(arguments);

                        // Logic
                        if (length == 1)
                            // Return
                            return -1;

                        else if (length == 2) {
                            // Update > Matches
                            LDKF.isArray(matches) || (matches = [matches]);

                            // Initialization > (Indexes (Iterator), Length, (Matches) (Iterator, Length))
                            var indexes = [], indexesIterator = -1,
                                length = LDKF.stringPrototypeLength(string),
                                matchesIterator = LDKF.arrayPrototypeLength(matches), matchesLength = matchesIterator;

                            // Loop
                            while (matchesIterator) {
                                // Initialization > (Match) (Iterator, Length)
                                var match = LDKF.stringPrototypeCharacterAt(matches, matchesIterator -= 1),
                                    matchIterator = LDKF.stringPrototypeLength(match), matchLength = matchIterator;

                                // Logic
                                if (matchLength)
                                    // Logic
                                    if (matchLength == 1) {
                                        // Initialization > Iterator
                                        var iterator = +0;

                                        // Loop > Update > Iterator
                                        while (iterator != length && LDKF.stringPrototypeCharacterAt(string, iterator) != match)
                                            iterator += 1;

                                        // Logic > Update > Indexes
                                        if (iterator == length) indexes[indexesIterator += 1] = -1;
                                        else indexes[indexesIterator += 1] = iterator
                                    }

                                    else {
                                        // Initialization > Iterator
                                        var iterator = length;

                                        // Loop
                                        while (iterator) {
                                            // Initialization > Index
                                            var index = length - (iterator -= 1) - 1;

                                            // Update > Match Iterator
                                            matchIterator = matchLength;

                                            // Loop
                                            while (matchIterator) {
                                                // Initialization > Match Index
                                                var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                // Logic
                                                if (LDKF.stringPrototypeCharacterAt(string, index + matchIndex) != LDKF.stringPrototypeCharacterAt(match, matchIndex))
                                                    // [Break]
                                                    break;

                                                else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, index + matchIndex) == LDKF.stringPrototypeCharacterAt(match, matchIndex))
                                                    // Update > Indexes
                                                    indexes[indexesIterator += 1] = index
                                            }
                                        }
                                    }

                                else
                                    // Update > Indexes
                                    indexes[indexesIterator += 1] = -1
                            }

                            // Update > (Index, Indexes Iterator)
                            index = -1;
                            indexesIterator += 1;

                            // Loop
                            while (indexesIterator) {
                                // Update > Indexes Iterator
                                indexesIterator -= 1;

                                // Logic > Update > Index
                                if (index < indexes[indexesIterator]) index = indexes[indexesIterator]
                            }

                            // Return
                            return index
                        }

                        else {
                            // Initialization > (Iterator, New Matches)
                            var iterator = -1, newMatches = [];

                            // Loop > Update > New Matches
                            while (length != 1) newMatches[iterator += 1] = arguments[length -= 1];

                            // Return
                            return LDKF.stringPrototypeIndex(string, newMatches)
                        }
                    };

                    // Is Alphabet
                    LapysDevelopmentKit.functions.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(character) { return character && (character == 'a' || character == 'A' || character == 'b' || character == 'B' || character == 'c' || character == 'C' || character == 'd' || character == 'D' || character == 'e' || character == 'E' || character == 'f' || character == 'F' || character == 'g' || character == 'G' || character == 'h' || character == 'H' || character == 'i' || character == 'I' || character == 'j' || character == 'J' || character == 'k' || character == 'K' || character == 'l' || character == 'L' || character == 'm' || character == 'M' || character == 'n' || character == 'N' || character == 'o' || character == 'O' || character == 'p' || character == 'P' || character == 'q' || character == 'Q' || character == 'r' || character == 'R' || character == 's' || character == 'S' || character == 't' || character == 'T' || character == 'u' || character == 'U' || character == 'v' || character == 'V' || character == 'w' || character == 'W' || character == 'x' || character == 'X' || character == 'y' || character == 'Y' || character == 'z' || character == 'Z') };

                    // Is Digit
                    LapysDevelopmentKit.functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(character) { return character && (character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9') };

                    // Is Hexadecimal
                    LapysDevelopmentKit.functions.stringPrototypeIsHexadecimal = function stringPrototypeIsHexadecimalCode(string) {
                        // Initialization > Iterator
                        var iterator = LDKF.stringPrototypeLength(string);

                        // Loop
                        while (iterator) if (!LDKF.stringPrototypeIsHexadecimalCharacter(LDKF.stringPrototypeCharacterAt(string, iterator -= 1))) return false;

                        // Return
                        return true
                    };

                    // Is Hexadecimal Character
                    LapysDevelopmentKit.functions.stringPrototypeIsHexadecimalCharacter = function stringPrototypeIsHexadecimalCharacter(character) { return character && LDKF.arrayPrototypeIncludes(LDKC.string.hexadecimal, character) };

                    // Is Hexadecimal Code
                    LapysDevelopmentKit.functions.stringPrototypeIsHexadecimalCode = function stringPrototypeIsHexadecimalCode(string) {
                        // Logic > Return
                        if (!LDKF.isString(string)) return false;

                        // Initialization > Iterator
                        var iterator = LDKF.stringPrototypeLength(string);

                        // Loop
                        while (iterator) {
                            // Initialization > Character
                            var character = LDKF.stringPrototypeCharacterAt(string, iterator -= 1);

                            // Logic > Return
                            if (character != '#' && !LDKF.stringPrototypeIsHexadecimalCharacter(character)) return false
                        }

                        // Return
                        return true
                    };

                    // Is Lower
                    LapysDevelopmentKit.functions.stringPrototypeIsLower = function stringPrototypeIsLower(string) {
                        // Initialization > Iterator
                        var iterator = LDKF.stringPrototypeLength(string);

                        // Loop > Logic > Return
                        while (iterator) if (!LDKF.stringPrototypeIsLowerCharacter(LDKF.stringPrototypeCharacterAt(string, iterator -= 1))) return false;

                        // Return
                        return true
                    };

                    // Is Lower Character
                    LapysDevelopmentKit.functions.stringPrototypeIsLowerCharacter = function stringPrototypeIsLowerCharacter(character) { return character && !LDKF.arrayPrototypeIncludes(LDKC.string.uppercaseAlphabets, character) };

                    // Is Numeric
                    LapysDevelopmentKit.functions.stringPrototypeIsNumeric = function stringPrototypeIsNumeric(string) { var iterator = LDKF.stringPrototypeLength(string); while (iterator) if (!LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(string, iterator -= 1))) return false; return !!string };

                    // Is Upper
                    LapysDevelopmentKit.functions.stringPrototypeIsUpper = function stringPrototypeIsUpper(string) {
                        // Initialization > Iterator
                        var iterator = LDKF.stringPrototypeLength(string);

                        // Loop > Logic > Return
                        while (iterator) if (!LDKF.stringPrototypeIsUpperCharacter(LDKF.stringPrototypeCharacterAt(string, iterator -= 1))) return false;

                        // Return
                        return true
                    };

                    // Is Upper Character
                    LapysDevelopmentKit.functions.stringPrototypeIsUpperCharacter = function stringPrototypeIsUpperCharacter(character) { return character && !LDKF.arrayPrototypeIncludes(LDKC.string.lowercaseAlphabets, character) };

                    // Is Variable Character
                    LapysDevelopmentKit.functions.stringPrototypeIsVariableCharacter = function stringPrototypeIsVariableCharacter(character) {
                        // Return
                        return character && (LDKF.arrayPrototypeIncludes(LDKC.string.variableCharacters, character) || (function() {
                            // Initialization > Is Variable Character
                            var isVariableCharacter = true;

                            // Error Handling > (...)
                            try { LDKF.eval("var " + character) } catch (error) { isVariableCharacter = false }

                            // Return
                            return isVariableCharacter
                        })())
                    };

                    // Remove All
                    LapysDevelopmentKit.functions.stringPrototypeRemoveAll = function stringPrototypeRemoveAll(string, matches) { return LDKF.stringPrototypeReplaceAll(string, matches, "") };

                    // Replace All
                    LapysDevelopmentKit.functions.stringPrototypeReplaceAll = function stringPrototypeReplaceAll(string, matches, replacement) {
                        // Initialization > Length
                        var length = LDKF.getArgumentsLength(arguments);

                        // Logic
                        if (length > 2) {
                            // Initialization > (Iterator, Stream)
                            var iterator = LDKF.stringPrototypeLength(string), stream = "";

                            // Update > (Length, Matches)
                            length = iterator;
                            LDKF.isArray(matches) || (matches = [matches]);

                            // Initialization > (Matches Length, Replacement Is String)
                            var matchesLength = LDKF.arrayPrototypeLength(matches),
                                replacementIsString = LDKF.isString(replacement);

                            // Loop
                            while (iterator > +0) {
                                // Initialization > (Index, Match Found, Matches Iterator)
                                var index = length - (iterator -= 1) - 1,
                                    matchFound = false,
                                    matchesIterator = matchesLength;

                                // Loop
                                while (matchesIterator) {
                                    // Initialization > Match (Iterator)
                                    var match = matches[matchesLength - (matchesIterator -= 1) - 1],
                                        matchIterator = LDKF.stringPrototypeLength(match), matchLength = matchIterator;

                                    // Loop
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(string, index + matchIndex) != LDKF.stringPrototypeCharacterAt(match, matchIndex))
                                            // [Break]
                                            break;

                                        else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, index + matchIndex) == LDKF.stringPrototypeCharacterAt(match, matchIndex)) {
                                            // Initialization > Former Index
                                            var formerIndex = index;

                                            // Update > (Index, Match Found, Stream) --- NOTE (Lapys) -> If the replacement is not a string, it is assumed to be a mapping callback.
                                            index = length - (iterator -= matchLength - 1) - 1;
                                            matchFound = true;
                                            stream += replacementIsString ? replacement : replacement(match, formerIndex, string);

                                            // [Break]
                                            break
                                        }
                                    }
                                }

                                // Update > Stream
                                matchFound || (stream += LDKF.stringPrototypeCharacterAt(string, index))
                            }

                            // Return
                            return stream
                        }

                        else if (length == 2)
                            // Return
                            return LDKF.stringPrototypeReplaceAll(string, matches, "");

                        else if (length == 1)
                            // Return
                            return string;

                        else
                            // Return
                            return ""
                    };

                    // Slice
                    LapysDevelopmentKit.functions.stringPrototypeSlice = function stringPrototypeSlice(string, begin, end) {
                        // Initialization > ((Arguments) Length, Stream)
                        var argumentsLength = LDKF.getArgumentsLength(arguments),
                            length = LDKF.stringPrototypeLength(string),
                            stream = "";

                        // Logic > Return
                        if (!string) return stream;

                        // Update > End
                        (argumentsLength < 2) && (begin = +0);
                        (argumentsLength < 3) && (end = length);

                        // Logic > Update > Begin
                        if (!LDKF.numberPrototypeIsSafeInteger(begin)) begin = +0;
                        else begin = LDKM.rebound(begin, length);

                        // Logic
                        if (!LDKF.numberPrototypeIsSafeInteger(end)) {
                            // Logic > Update > End
                            if (LDKF.numberPrototypeIsPositiveInfinity(end)) end = length;
                            else end = +0
                        }

                        else
                            end = LDKM.rebound(end, length);

                        // Logic > Loop > Update > Stream
                        if (begin < end) while (begin != end) stream += LDKF.stringPrototypeCharacterAt(string, (begin += 1) - 1);

                        // Return
                        return stream
                    };

                    // Start
                    LapysDevelopmentKit.functions.stringPrototypeStart = function stringPrototypeStart(string) {
                        // Initialization > (Iterator, Stream)
                        var iterator = LDKF.stringPrototypeLength(string), length = iterator,
                            stream = "";

                        // Loop
                        while (iterator) {
                            // Initialization > (Index, (Previous) Character)
                            var index = length - (iterator -= 1) - 1,
                                character = LDKF.stringPrototypeCharacterAt(string, index), previousCharacter = LDKF.stringPrototypeCharacterAt(string, index - 1);

                            // Update > Stream
                            stream += (
                                LDKF.stringPrototypeIsLowerCharacter(character) &&
                                ((previousCharacter != '_' && !LDKF.stringPrototypeIsAlphabet(previousCharacter) && !LDKF.stringPrototypeIsDigit(previousCharacter)) || !~index)
                            ) ? LDKF.stringPrototypeToUpper(character) : character
                        }

                        // Return
                        return stream
                    };

                    // To Lower
                    LapysDevelopmentKit.functions.stringPrototypeToLower = function stringPrototypeToLower(string) {
                        // Initialization > (Iterator, Length, Stream)
                        var iterator = LDKF.stringPrototypeLength(string), length = iterator,
                            stream = "";

                        // Loop
                        while (iterator) {
                            // Initialization > (Character< Index)
                            var character = LDKF.stringPrototypeCharacterAt(string, length - (iterator -= 1) - 1), index = LDKF.arrayPrototypeIndex(LDKC.string.uppercaseAlphabets, character);

                            // Update > Character
                            stream += ~index ? LDKC.string.lowercaseAlphabets[index] : character
                        }

                        // Return
                        return stream
                    };

                    // To Upper
                    LapysDevelopmentKit.functions.stringPrototypeToUpper = function stringPrototypeToUpper(string) {
                        // Initialization > (Iterator, Length, Stream)
                        var iterator = LDKF.stringPrototypeLength(string), length = iterator,
                            stream = "";

                        // Loop
                        while (iterator) {
                            // Initialization > (Character< Index)
                            var character = LDKF.stringPrototypeCharacterAt(string, length - (iterator -= 1) - 1), index = LDKF.arrayPrototypeIndex(LDKC.string.lowercaseAlphabets, character);

                            // Update > Character
                            stream += ~index ? LDKC.string.uppercaseAlphabets[index] : character
                        }

                        // Return
                        return stream
                    };

                    // Trim
                    LapysDevelopmentKit.functions.stringPrototypeTrim = function stringPrototypeTrim(string, matches) {
                        // Update > String
                        string = LDKF.stringPrototypeTrimRight.apply(LDKF, arguments);

                        // Return
                        return LDKF.stringPrototypeTrimLeft.apply(LDKF, arguments)
                    };

                    // Trim Left
                    LapysDevelopmentKit.functions.stringPrototypeTrimLeft = function stringPrototypeTrimLeft(string, matches) {
                        // Initialization > Length
                        var length = LDKF.getArgumentsLength(arguments);

                        // Logic
                        if (length > 2) {
                            // Initialization > Iterator
                            var iterator = length;

                            // Loop > Update > String
                            while (iterator != 1) string = LDKF.stringPrototypeTrimLeft(string, arguments[length - (iterator -= 1)]);

                            // Return
                            return string
                        }

                        else if (length) {
                            // Initialization > (Iterator, Stream)
                            var iterator = +0, stream = "";

                            // Updates > Matches
                            length == 1 ? matches = [' ', '\n'] : (LDKF.isArray(matches) || (matches = [matches]));

                            // Initialization > Matches (Iterator, Length)
                            var matchesIterator = LDKF.arrayPrototypeLength(matches), matchesLength = matchesIterator;

                            // Logic
                            if (LDKF.stringPrototypeLength(matches[+0]) == 1 && (!matchesLength || matchesLength == 1)) {
                                // Logic > Loop > Update > Iterator
                                if (matchesLength) while (LDKF.stringPrototypeCharacterAt(string, iterator) == matches[+0]) iterator += 1;
                            }

                            else
                                // Loop
                                while (matchesIterator) {
                                    // Initialization > (Match) (Iterator, Length)
                                    var match = LDKF.toString(matches[matchesLength - (matchesIterator -= 1) - 1]),
                                        matchIterator = LDKF.stringPrototypeLength(match), matchLength = matchIterator;

                                    // Loop
                                    while (matchIterator) {
                                        // Update > Match Iterator
                                        matchIterator -= 1;

                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(string, iterator + matchIterator) != LDKF.stringPrototypeCharacterAt(match, matchIterator))
                                            // [Break]
                                            break;

                                        else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, iterator) == LDKF.stringPrototypeCharacterAt(match, +0)) {
                                            // Update > (Iterator, Matches Iterator)
                                            iterator += matchLength;
                                            matchesIterator = matchesLength
                                        }
                                    }
                                }

                            // Update > (Length, Stream)
                            length = LDKF.stringPrototypeLength(string) - 1;
                            stream = iterator ? LDKF.stringPrototypeSlice(string, iterator, -1) : string;

                            // Return
                            return stream
                        }

                        else
                            // Return
                            return ""
                    };

                    // Trim Right
                    LapysDevelopmentKit.functions.stringPrototypeTrimRight = function stringPrototypeTrimRight(string, matches) {
                        // Initialization > Length
                        var length = LDKF.getArgumentsLength(arguments);

                        // Logic
                        if (length > 2) {
                            // Initialization > Iterator
                            var iterator = length;

                            // Loop > Update > String
                            while (iterator != 1) string = LDKF.stringPrototypeTrimRight(string, arguments[length - (iterator -= 1)]);

                            // Return
                            return string
                        }

                        else if (length) {
                            // Initialization > (Iterator, Stream)
                            var iterator = +0, stream = "";

                            // Updates > Matches
                            length == 1 ? matches = [' ', '\n'] : (LDKF.isArray(matches) || (matches = [matches]));

                            // Initialization > Matches (Iterator, Length)
                            var matchesIterator = LDKF.arrayPrototypeLength(matches), matchesLength = matchesIterator;

                            // Update > Length
                            length = LDKF.stringPrototypeLength(string);

                            // Logic
                            if (LDKF.stringPrototypeLength(matches[+0]) == 1 && (!matchesLength || matchesLength == 1)) {
                                // Logic
                                if (matchesLength) {
                                    // Initialization > Index
                                    var index = length - 1;

                                    // Loop > Update > (Index, Iterator)
                                    while (index && LDKF.stringPrototypeCharacterAt(string, index) == matches[+0]) { index -= 1; iterator += 1 }
                                }
                            }

                            else
                                // Loop
                                while (matchesIterator) {
                                    // Initialization > (Match) (Iterator, Length)
                                    var match = LDKF.toString(matches[matchesLength - (matchesIterator -= 1) - 1]),
                                        matchIterator = LDKF.stringPrototypeLength(match), matchLength = matchIterator;

                                    // Loop
                                    while (matchIterator) {
                                        // Update > Match Iterator
                                        matchIterator -= 1;

                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(string, length - iterator - (matchLength - matchIterator - 1) - 1) != LDKF.stringPrototypeCharacterAt(match, matchIterator))
                                            // [Break]
                                            break;

                                        else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, length - iterator - (matchLength - 1) - 1) == LDKF.stringPrototypeCharacterAt(match, +0)) {
                                            // Update > (Iterator, Matches Iterator)
                                            iterator += matchLength;
                                            matchesIterator = matchesLength;
                                        }
                                    }
                                }

                            // Update > Stream
                            stream = iterator ? LDKF.stringPrototypeSlice(string, +0, length - (iterator + 1) + 1) : string;

                            // Return
                            return stream
                        }

                        else
                            // Return
                            return ""
                    };

                // Style Property Map > Prototype
                    // Get
                    LapysDevelopmentKit.functions.stylePropertyMapPrototypeGet = function stylePropertyMapPrototypeGet(stylePropertyMap, property) { return LDKO.stylePropertyMapPrototypeGet.call(stylePropertyMap, property) };

                    // Size
                    LapysDevelopmentKit.functions.stylePropertyMapPrototypeSize = function stylePropertyMapPrototypeSize(stylePropertyMap) { return LDKO.stylePropertyMapPrototypeSizeGetter.call(stylePropertyMap) };

                // Style Property Map Read-Only > Prototype
                    // Get
                    LapysDevelopmentKit.functions.stylePropertyMapReadOnlyPrototypeGet = function stylePropertyMapReadOnlyPrototypeGet(stylePropertyMapReadOnly, property) { return LDKO.stylePropertyMapReadOnlyPrototypeGet.call(stylePropertyMapReadOnly, property) };

                    // Size
                    LapysDevelopmentKit.functions.stylePropertyMapReadOnlyPrototypeSize = function stylePropertyMapReadOnlyPrototypeSize(stylePropertyMapReadOnly) { return LDKO.stylePropertyMapReadOnlyPrototypeSizeGetter.call(stylePropertyMapReadOnly) };

                // Style Sheet List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.styleSheetListPrototypeItem = function styleSheetListPrototypeItem(styleSheetList, property) { return LDKO.styleSheetListPrototypeItem.call(styleSheetList, property) };

                    // Length
                    LapysDevelopmentKit.functions.styleSheetListPrototypeLength = function styleSheetListPrototypeLength(styleSheetList) { return LDKO.styleSheetListPrototypeLengthGetter.call(styleSheetList) };

                // SVG Length List > Prototype
                    // Get Item
                    LapysDevelopmentKit.functions.svgLengthListPrototypeGetItem = function svgLengthListPrototypeGetItem(svgLengthList, index) { return LDKO.svgLengthListPrototypeGetItem.call(svgLengthList, index) };

                    // Number Of Items
                    LapysDevelopmentKit.functions.svgLengthListPrototypeNumberOfItems = function svgLengthListPrototypeNumberOfItems(svgLengthList) { return LDKO.svgLengthListPrototypeNumberOfItemsGetter.call(svgLengthList) };

                // SVG Number List > Prototype
                    // Get Item
                    LapysDevelopmentKit.functions.svgNumberListPrototypeGetItem = function svgNumberListPrototypeGetItem(svgNumberList, index) { return LDKO.svgNumberListPrototypeGetItem.call(svgNumberList, index) };

                    // Number Of Items
                    LapysDevelopmentKit.functions.svgNumberListPrototypeNumberOfItems = function svgNumberListPrototypeNumberOfItems(svgNumberList) { return LDKO.svgNumberListPrototypeNumberOfItemsGetter.call(svgNumberList) };

                // SVG Point List > Prototype
                    // Get Item
                    LapysDevelopmentKit.functions.svgPointListPrototypeGetItem = function svgPointListPrototypeGetItem(svgPointList, index) { return LDKO.svgPointListPrototypeGetItem.call(svgPointList, index) };

                    // Number Of Items
                    LapysDevelopmentKit.functions.svgPointListPrototypeNumberOfItems = function svgPointListPrototypeNumberOfItems(svgPointList) { return LDKO.svgPointListPrototypeNumberOfItemsGetter.call(svgPointList) };

                // SVG String List > Prototype
                    // Get Item
                    LapysDevelopmentKit.functions.svgStringListPrototypeGetItem = function svgStringListPrototypeGetItem(svgStringList, index) { return LDKO.svgStringListPrototypeGetItem.call(svgStringList, index) };

                    // Number Of Items
                    LapysDevelopmentKit.functions.svgStringListPrototypeNumberOfItems = function svgStringListPrototypeNumberOfItems(svgStringList) { return LDKO.svgStringListPrototypeNumberOfItemsGetter.call(svgStringList) };

                // SVG Transform List > Prototype
                    // Get Item
                    LapysDevelopmentKit.functions.svgTransformListPrototypeGetItem = function svgTransformListPrototypeGetItem(svgTransformList, index) { return LDKO.svgTransformListPrototypeGetItem.call(svgTransformList, index) };

                    // Number Of Items
                    LapysDevelopmentKit.functions.svgTransformListPrototypeNumberOfItems = function svgTransformListPrototypeNumberOfItems(svgTransformList) { return LDKO.svgTransformListPrototypeNumberOfItemsGetter.call(svgTransformList) };

                // Symbol
                LapysDevelopmentKit.functions.symbol = function symbol(description) { return LDKF.getArgumentsLength(arguments) ? LDKO.symbol(description) : LDKO.symbol() };

                // Text Track Cue List > Prototype
                    // Get Cue By ID
                    LapysDevelopmentKit.functions.textTrackCueListPrototypeGetCueById = function textTrackCueListPrototypeGetCueById(textTrackCueList, id) { return LDKO.textTrackCueListPrototypeGetCueById.call(textTrackCueList, id) };

                    // Length
                    LapysDevelopmentKit.functions.textTrackCueListPrototypeLength = function textTrackCueListPrototypeLength(textTrackCueList) { return LDKO.textTrackCueListPrototypeLengthGetter.call(textTrackCueList) };

                // Text Track List > Prototype
                    // Get Track By ID
                    LapysDevelopmentKit.functions.textTrackListPrototypeGetTrackById = function textTrackListPrototypeGetTrackById(textTrackList, id) { return LDKO.textTrackListPrototypeGetTrackById.call(textTrackList, id) };

                    // Length
                    LapysDevelopmentKit.functions.textTrackListPrototypeLength = function textTrackListPrototypeLength(textTrackList) { return LDKO.textTrackListPrototypeLengthGetter.call(textTrackList) };

                // Throw Error
                LapysDevelopmentKit.functions.throwError = function throwError(message) {
                    // Error Handling
                    try { throw new LDKO.error }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw LapysJS Error
                LapysDevelopmentKit.functions.throwLapysJSError = function throwLapysJSError() { throw new LDKD.lapysJSError(LDKF.toDebugMessage.apply(LDKD, arguments)) };

                // Throw LapysJS Initiate Error
                LapysDevelopmentKit.functions.throwLapysJSInitiateError = function throwLapysJSInitiateError() { throw new LDKD.lapysJSInitiateError(LDKF.toDebugMessage.apply(LDKD, arguments)) };

                // Throw LapysJS Update Error
                LapysDevelopmentKit.functions.throwLapysJSUpdateError = function throwLapysJSUpdateError() { throw new LDKD.lapysJSInitiateError(LDKF.toDebugMessage.apply(LDKD, arguments)) };

                // Throw Type Error
                LapysDevelopmentKit.functions.throwTypeError = function throwTypeError(message) {
                    // Error Handling
                    try { throw new LDKO.typeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // To Debug Message
                LapysDevelopmentKit.functions.toDebugMessage = function toDebugMessage(message) { return LDKI.messages.debugging.prefix + LDKF.toString(LDKF.getArgumentsLength(arguments) ? message : "") + LDKI.messages.debugging.suffix };

                // To Number
                LapysDevelopmentKit.functions.toNumber = function toNumber(arg) { if (LDKF.isNumber(arg)) return arg - +0; else { try { arg = arg - +0 } catch (error) { try { arg = LDKO.number(arg) } catch (error) { try { arg = LDKF.toNumber(LDKF.string(arg)) } catch (error) {} } } return arg } };

                // To String
                LapysDevelopmentKit.functions.toString = function toString(arg) {
                    // Logic > Return
                    if (LDKF.isString(arg)) return arg;

                    // Function > (Explicit, Implicit) Cast
                    function explicitCast(arg) { return LDKO.string(arg) }
                    function implicitCast(arg) { return arg + "" }

                    // Error Handling
                    try { if (LDKF.objectPrototypeHasProperty(LDKO, "string")) return explicitCast(arg) } catch (error) {}
                    try { return implicitCast(arg) } catch (error) {}
                };

                // Touch List > Prototype
                    // Item
                    LapysDevelopmentKit.functions.touchListPrototypeItem = function touchListPrototypeItem(touchList, index) { return LDKO.touchListPrototypeItem.call(touchList, index) };

                    // Length
                    LapysDevelopmentKit.functions.touchListPrototypeLength = function touchListPrototypeLength(touchList) { return LDKO.touchListPrototypeLengthGetter.call(touchList) };

                // Typed Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.typedArrayLikePrototypeLength = function typedArrayLikePrototypeLength(typedArrayLike) {
                        // Logic > Return
                        if (LDKF.isBigInt64Array(typedArrayLike)) return LDKF.bigInt64ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isBigUint64Array(typedArrayLike)) return LDKF.bigUint64ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isFloat32Array(typedArrayLike)) return LDKF.float32ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isFloat64Array(typedArrayLike)) return LDKF.float64ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isInt8Array(typedArrayLike)) return LDKF.int8ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isInt16Array(typedArrayLike)) return LDKF.int16ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isInt32Array(typedArrayLike)) return LDKF.int32ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isUint8Array(typedArrayLike)) return LDKF.uint8ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isUint8ClampedArray(typedArrayLike)) return LDKF.uint8ClampedArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isUint16Array(typedArrayLike)) return LDKF.uint16ArrayPrototypeLength(typedArrayLike);
                        else if (LDKF.isUint32Array(typedArrayLike)) return LDKF.uint32ArrayPrototypeLength(typedArrayLike)
                    };

                // Warn --- WARN (Lapys) -> Only use within the main phases: `INITATE`, `UPDATE` and `TERMINATE`.
                LapysDevelopmentKit.functions.warn = function warn(arg) { LDKF.consoleWarn.apply(this, arguments) };

                // 8-Bit Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.int8ArrayPrototypeLength = function int8ArrayPrototypeLength(int8Array) { return LDKO.int8ArrayPrototypeLengthGetter.call(int8Array) };

                // 8-Bit Unsigned Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.uint8ArrayPrototypeLength = function uint8ArrayPrototypeLength(uint8Array) { return LDKO.uint8ArrayPrototypeLengthGetter.call(uint8Array) };

                // 8-Bit Unsigned Integer Clamped Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.uint8ClampedArrayPrototypeLength = function uint8ClampedArrayPrototypeLength(uint8ClampedArray) { return LDKO.uint8ClampedArrayPrototypeLengthGetter.call(uint8ClampedArray) };

                // 16-Bit Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.int16ArrayPrototypeLength = function int16ArrayPrototypeLength(int16Array) { return LDKO.int16ArrayPrototypeLengthGetter.call(int16Array) };

                // 16-Bit Unsigned Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.uint16ArrayPrototypeLength = function uint16ArrayPrototypeLength(uint16Array) { return LDKO.uint16ArrayPrototypeLengthGetter.call(uint16Array) };

                // 32-Bit Float Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.float32ArrayPrototypeLength = function float32ArrayPrototypeLength(float32Array) { return LDKO.float32ArrayPrototypeLengthGetter.call(float32Array) };

                // 32-Bit Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.int32ArrayPrototypeLength = function int32ArrayPrototypeLength(int32Array) { return LDKO.int32ArrayPrototypeLengthGetter.call(int32Array) };

                // 32-Bit Unsigned Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.uint32ArrayPrototypeLength = function uint32ArrayPrototypeLength(uint32Array) { return LDKO.uint32ArrayPrototypeLengthGetter.call(uint32Array) };

                // 64-Bit Big Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.bigInt64ArrayPrototypeLength = function bigInt64ArrayPrototypeLength(bigInt64Array) { return LDKO.bigInt64ArrayPrototypeLengthGetter.call(bigInt64Array) };

                // 64-Bit Big Unsigned Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.bigUint64ArrayPrototypeLength = function bigUint64ArrayPrototypeLength(bigUint64Array) { return LDKO.bigUint64ArrayPrototypeLengthGetter.call(bigUint64Array) };

                // 64-Bit Float Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.float64ArrayPrototypeLength = function float64ArrayPrototypeLength(float64Array) { return LDKO.float64ArrayPrototypeLengthGetter.call(float64Array) };

                // 64-Bit Unsigned Integer Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.uint64ArrayPrototypeLength = function uint64ArrayPrototypeLength(uint64Array) { return LDKO.uint64ArrayPrototypeLengthGetter.call(uint64Array) };

            /* Information */
                // Messages
                    // Debugging
                        // Prefix
                        LapysDevelopmentKit.information.messages.debugging.prefix = "[LapysJS v" + VERSION + "] ->\n    ";

                        // Suffix
                        LapysDevelopmentKit.information.messages.debugging.suffix = '\n';

                    // Error
                        // Compatible with Library Suffix
                        LapysDevelopmentKit.information.messages.error.compatibleWithLibrarySuffix = " is not compatible with this library";

                        // JavaScript Engine Support Suffix
                        LapysDevelopmentKit.information.messages.error.javaScriptEngineSupportSuffix = " must be supported by this JavaScript engine";

                        // Library Is Pre-Installed
                        LapysDevelopmentKit.information.messages.error.libraryIsPreInstalled = "The library is already installed";

                        // Native to Environment Suffix
                        LapysDevelopmentKit.information.messages.error.nativeToEnvironmentSuffix = " must be native to this development environment to install the library";

            /* Math */
                // Absolute
                LapysDevelopmentKit.math.abs = function abs(number, STRICT) { return (STRICT ? number < +0 : LDKF.numberPrototypeIsNegative(number)) ? -number : number };

                // Ceiling
                LapysDevelopmentKit.math.ceil = function ceil(number) { return LDKM.int(number) + !!(number % 1) };

                // Integer
                LapysDevelopmentKit.math.int = function int(number) { return number - number % 1 };

                /* [Ranged] Rebound
                        --- NOTE ---
                            #Lapys:
                                - Mostly for array indexes...
                                - The method is precise up to 6 decimal places.
                                - End is assumed to be greater than Start.
                */
                LapysDevelopmentKit.math.rebound = function rebound(index, start, end) {
                    // Logic
                    if (LDKF.getArgumentsLength(arguments) == 2)
                        // Return
                        return LDKM.rebound(index, +0, arguments[1]);

                    else if (index == end)
                        // Return
                        return end;

                    else if (index == start)
                        // Return
                        return start;

                    else if (index < start ^ index > end)
                        // Logic
                        if (index > end)
                            // Logic
                            if (LDKF.numberPrototypeIsPositive(end))
                                // Loop > Update > Index
                                while (index > end) index -= end;

                            else
                                // Loop
                                while (index > end) {
                                    // Loop
                                    if (index + end < start) {
                                        // Update > Index
                                        index += start;

                                        // [Break]
                                        break
                                    }

                                    else
                                        // Update > Index
                                        index += end
                                }

                        else {
                            // Initialization > Difference
                            var difference = LDKM.abs(end - start), iterator = 1;

                            // Loop > Update > Iterator
                            while (index != start - iterator) iterator += 1;
                            while (iterator > difference) iterator -= difference;

                            // Return
                            return end - (iterator - 1)
                        }

                    // Return
                    return index
                };

            /* Storage */
                // Registry
                    // Timeout IDs
                    LapysDevelopmentKit.storage.registry.timeoutIDs = [];

                    // Unique --- NOTE (Lapys) -> List of all queried/ used JavaScript objects.
                    LapysDevelopmentKit.storage.registry["UNIQUE"] = [];

            /* Test */
                // Arguments to Console Stream --- NOTE (Lapys) -> Convert arguments to a console output-like stream.
                LapysDevelopmentKit.test.argumentsToConsoleStream = function argumentsToConsoleStream() {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = LDKF.getArgumentsLength(arguments), length = iterator, stream = "";

                    // Loop > Update > Stream
                    while (iterator) stream += LDKF.toString(arguments[length - (iterator -= 1) - 1]) + (iterator ? ' ' : "");

                    // Return
                    return stream
                };

                // Create Error Pseudo-Constructor
                LapysDevelopmentKit.test.createErrorPseudoConstructor = function createErrorPseudoConstructor(errorName, baseConstructorSourceString, prototypeSourceString) {
                    // Update > Prototype Source String
                    (LDKF.getArgumentsLength(arguments) > 2) || (prototypeSourceString = "LapysJS.tmp.evalScope.errorPrototype");

                    // Initialization > (Index, Constructor (Source String))
                    var index = LDKF.arrayPrototypeLength(LapysJS.tmp.evalScope.customErrorConstructors),
                        constructor = LDKC.allowsClassKeyword ?
                            LDKF.createFunction(
                                errorName, {"extends": baseConstructorSourceString, params: ["message", "stack"], type: "class"},
                                "var length = LapysJS.tmp.evalScope.getArgumentsLength(arguments);" +
                                "(length ? (length == 1 ? super(message) : super(message, stack)) : super());" +
                                "(typeof LapysJS.tmp.evalScope.errorCaptureStackTrace == \"function\" && LapysJS.tmp.evalScope.functionPrototypeIsNative(LapysJS.tmp.evalScope.errorCaptureStackTrace)) && LapysJS.tmp.evalScope.errorCaptureStackTrace(this, " + errorName + ")"
                            ) :
                            LDKF.createFunction(errorName, [], "return " + baseConstructorSourceString + ".apply(LapysJS.tmp.evalScope.global, arguments)"),
                        constructorSourceString = "LapysJS.tmp.evalScope.customErrorConstructors[" + index +']';

                    // Update > (LapysJS > Temporary Data > Custom Error Constructors)
                    LapysJS.tmp.evalScope.customErrorConstructors[index] = constructor;

                    // Return
                    return LDKF.createFunction(
                        errorName, ["message", "stack"],
                        "var length = LapysJS.tmp.evalScope.getArgumentsLength(arguments)," +
                            "error = length ? (length == 1 ? new " + constructorSourceString + "(message) : new " + constructorSourceString + "(message, stack)) : new " + constructorSourceString + ';' +
                        "LapysJS.tmp.evalScope.allowsClassKeyword || LapysJS.tmp.evalScope.objectPrototypeSet__Prototype__(error, (function() { try { return LapysJS.tmp.evalScope.objectCreate(" + prototypeSourceString + ") } catch (error) {} return LapysJS.tmp.evalScope.objectCreate(LapysJS.tmp.evalScope.errorPrototype) })());" +
                        "LapysJS.tmp.evalScope.objectPrototypeSetProperty(error, \"name\", \"" + errorName + "\");" +
                        "return error"
                    )
                };

                // Environment Vendor Is --- NOTE (Lapys) -> Test that the specified vendor is currently existing.
                LapysDevelopmentKit.test.environmentVendorIs = function environmentVendorIs(vendor) {
                    // Initialization > Iterator
                    var iterator = LDKF.arrayPrototypeLength(LDKE.vendors);

                    // Loop > Logic > Return
                    while (iterator) if (LDKE.vendors[iterator -= 1] == vendor) return true;

                    // Return
                    return false
                };

                // Get Array-Like Prototype Length Descriptor Getter
                LapysDevelopmentKit.test.getArrayLikePrototypeLengthDescriptorGetter = function getArrayLikePrototypeLengthDescriptorGetter(object, propertyName, propertySourceString) {
                    // Logic
                    if (LDKF.isConstructible(object)) {
                        // Initialization > Descriptor
                        var descriptor = LDKF.objectGetOwnPropertyDescriptor(object, propertyName);

                        // Logic > Return
                        if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor.get;
                        else return ({get: function() {
                            // Return
                            return LDKF.isArrayLike(this) ? (function(propertyValue) {
                                // Return
                                return LDKF.numberPrototypeIsPositiveInteger(propertyValue) ? propertyValue : LDKF.error.nativeToEnvironment('`' + propertySourceString + "` accessor")
                            })(LDKF.objectPrototypeGetProperty(this, propertyName)) : LDKF.throwTypeError("Illegal invocation")
                        }}).get
                    }
                };

                // Is Audio Parameter Map Prototype Entries Method
                LapysDevelopmentKit.test.isAudioParameterMapPrototypeEntriesMethod = function isAudioParameterMapPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is Audio Parameter Map Prototype For Each Method
                LapysDevelopmentKit.test.isAudioParameterMapPrototypeForEachMethod = function isAudioParameterMapPrototypeForEachMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "forEach" && LDKF.functionPrototypeIsNative(method) };

                // Is Audio Parameter Map Prototype Get Method
                LapysDevelopmentKit.test.isAudioParameterMapPrototypeGetMethod = function isAudioParameterMapPrototypeGetMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "get" && LDKF.functionPrototypeIsNative(method) };

                // Is Audio Parameter Map Prototype Has Method
                LapysDevelopmentKit.test.isAudioParameterMapPrototypeHasMethod = function isAudioParameterMapPrototypeHasMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "has" && LDKF.functionPrototypeIsNative(method) };

                // Is Audio Parameter Map Prototype Keys Method
                LapysDevelopmentKit.test.isAudioParameterMapPrototypeKeysMethod = function isAudioParameterMapPrototypeKeysMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "keys" && LDKF.functionPrototypeIsNative(method) };

                // Is Audio Parameter Map Prototype Values Method
                LapysDevelopmentKit.test.isAudioParameterMapPrototypeValuesMethod = function isAudioParameterMapPrototypeValuesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is {Registered} Component --- CHECKPOINT --- NOTE (Lapys) -> Is the Argument a component like an Accordion or Picture-in-Picture 'window'?
                LapysDevelopmentKit.test.isComponent = function isComponent(arg) {};

                // Is Console Method --- NOTE (Lapys) -> Test the `console` object's methods.
                LapysDevelopmentKit.test.isConsoleMethod = function isConsoleMethod(method) {
                    // Initialization > (Console Has Prototype, Method Name)
                    var consoleHasPrototype = LDKF.objectPrototypeHasProperty(LDKO, "consolePrototype"),
                        methodName = LDKF.functionPrototypeGetName(method);

                    // Return
                    return (consoleHasPrototype && methodName == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" && LDKF.functionPrototypeIsUserDefined(method)) ||
                        (consoleHasPrototype && !methodName && LDKF.functionPrototypeIsNative(method)) ||
                        (function() {
                            // Initialization > Is Non-Stringifiable
                            var isNonStringifiable = false;

                            // Error Handling > Update > Is Non-Stringifiable
                            try { LDKO.string(method) } catch (error) { isNonStringifiable = true }

                            // Return
                            return isNonStringifiable
                        })()
                };

                /* Is Constructible Object
                        --- NOTE ---
                            #Lapys: Apparently, if the constructor or prototype being tested do not exist,
                                as with most JavaScript objects, the test returns `false`.

                        --- WARN ---
                            #Lapys: Defer to `LapysDevelopmentKit.functions.isConstructible` instead for type-detection.
                */
                LapysDevelopmentKit.test.isConstructibleObject = function isConstructibleObject(arg, constructor, prototype, STRICT) {
                    // Return
                    return (STRICT ? true : typeof arg == "object") && LDKF.isConstructible(arg) && (
                        LDKF.objectPrototypeConstructor(arg) === constructor &&
                        (function(argPrototype) { return LDKC.hasActiveXObjectConstructor && LDKF.isVoid(argPrototype) ? true : argPrototype === prototype })(LDKF.objectPrototypePrototype(arg))
                    )
                };

                // Is CSS Numeric Array Prototype Entries Method
                LapysDevelopmentKit.test.isCSSNumericArrayPrototypeEntriesMethod = function isCSSNumericArrayPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Numeric Array Prototype For Each Method
                LapysDevelopmentKit.test.isCSSNumericArrayPrototypeForEachMethod = function isCSSNumericArrayPrototypeForEachMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "forEach" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Numeric Array Prototype Keys Method
                LapysDevelopmentKit.test.isCSSNumericArrayPrototypeKeysMethod = function isCSSNumericArrayPrototypeKeysMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "keys" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Numeric Array Prototype Values Method
                LapysDevelopmentKit.test.isCSSNumericArrayPrototypeValuesMethod = function isCSSNumericArrayPrototypeValuesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Rule List Prototype Item Method
                LapysDevelopmentKit.test.isCSSRuleListPrototypeItemMethod = function isCSSRuleListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Style Declaration Prototype Get Property Priority Method
                LapysDevelopmentKit.test.isCSSStyleDeclarationPrototypeGetPropertyPriorityMethod = function isCSSStyleDeclarationPrototypeGetPropertyPriorityMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getPropertyPriority" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Style Declaration Prototype Get Property Value Method
                LapysDevelopmentKit.test.isCSSStyleDeclarationPrototypeGetPropertyValueMethod = function isCSSStyleDeclarationPrototypeGetPropertyValueMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getPropertyValue" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Style Declaration Prototype Item Method
                LapysDevelopmentKit.test.isCSSStyleDeclarationPrototypeItemMethod = function isCSSStyleDeclarationPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Style Declaration Prototype Remove Property Method
                LapysDevelopmentKit.test.isCSSStyleDeclarationPrototypeRemovePropertyMethod = function isCSSStyleDeclarationPrototypeRemovePropertyMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeProperty" && LDKF.functionPrototypeIsNative(method) };

                // Is CSS Style Declaration Prototype Set Property Method
                LapysDevelopmentKit.test.isCSSStyleDeclarationPrototypeSetPropertyMethod = function isCSSStyleDeclarationPrototypeSetPropertyMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "setProperty" && LDKF.functionPrototypeIsNative(method) };

                // Is Data Transfer Item List Prototype Add Method
                LapysDevelopmentKit.test.isDataTransferItemListPrototypeAddMethod = function isDataTransferItemListPrototypeAddMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "add" && LDKF.functionPrototypeIsNative(method) };

                // Is Data Transfer Item List Prototype Clear Method
                LapysDevelopmentKit.test.isDataTransferItemListPrototypeClearMethod = function isDataTransferItemListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is Data Transfer Item List Prototype Remove Method
                LapysDevelopmentKit.test.isDataTransferItemListPrototypeRemoveMethod = function isDataTransferItemListPrototypeRemoveMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "remove" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Clear Method
                LapysDevelopmentKit.test.isDocumentPrototypeClearMethod = function isDocumentPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Close Method
                LapysDevelopmentKit.test.isDocumentPrototypeCloseMethod = function isDocumentPrototypeCloseMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "close" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Attribute Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateAttributeMethod = function isDocumentPrototypeCreateAttributeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createAttribute" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Comment Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateCommentMethod = function isDocumentPrototypeCreateCommentMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createComment" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Document Fragment Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateDocumentFragmentMethod = function isDocumentPrototypeCreateDocumentFragmentMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createDocumentFragment" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Element Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateElementMethod = function isDocumentPrototypeCreateElementMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createElement" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Text Node Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateTextNodeMethod = function isDocumentPrototypeCreateTextNodeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createTextNode" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Element From Point Method
                LapysDevelopmentKit.test.isDocumentPrototypeElementFromPointMethod = function isDocumentPrototypeElementFromPointMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "elementFromPoint" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Execute Command Method
                LapysDevelopmentKit.test.isDocumentPrototypeExecCommandMethod = function isDocumentPrototypeExecCommandMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "execCommand" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Get Element By ID Method
                LapysDevelopmentKit.test.isDocumentPrototypeGetElementByIdMethod = function isDocumentPrototypeGetElementByIdMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getElementById" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Get Elements By Name Method
                LapysDevelopmentKit.test.isDocumentPrototypeGetElementsByNameMethod = function isDocumentPrototypeGetElementsByNameMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getElementsByName" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Get Elements By Tag Name Method
                LapysDevelopmentKit.test.isDocumentPrototypeGetElementsByTagNameMethod = function isDocumentPrototypeGetElementsByTagNameMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getElementsByTagName" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Has Focus Method
                LapysDevelopmentKit.test.isDocumentPrototypeHasFocusMethod = function isDocumentPrototypeHasFocusMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "hasFocus" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Open Method
                LapysDevelopmentKit.test.isDocumentPrototypeOpenMethod = function isDocumentPrototypeOpenMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "open" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Enabled Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandEnabledMethod = function isDocumentPrototypeQueryCommandEnabledMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "queryCommandEnabled" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Indeterm Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandIndetermMethod = function isDocumentPrototypeQueryCommandIndetermMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "queryCommandIndeterm" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command State Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandStateMethod = function isDocumentPrototypeQueryCommandStateMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "queryCommandState" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Supported Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandSupportedMethod = function isDocumentPrototypeQueryCommandSupportedMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "queryCommandSupported" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Value Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandValueMethod = function isDocumentPrototypeQueryCommandValueMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "queryCommandValue" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Write Method
                LapysDevelopmentKit.test.isDocumentPrototypeWriteMethod = function isDocumentPrototypeWriteMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "write" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Write Line Method
                LapysDevelopmentKit.test.isDocumentPrototypeWriteLineMethod = function isDocumentPrototypeWriteLineMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "writeln" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Rectangle List Prototype Item Method
                LapysDevelopmentKit.test.isDOMRectangleListPrototypeItemMethod = function isDOMRectangleListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM String List Prototype Clear Method
                LapysDevelopmentKit.test.isDOMStringListPrototypeClearMethod = function isDOMStringListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM String List Prototype Item Method
                LapysDevelopmentKit.test.isDOMStringListPrototypeItemMethod = function isDOMStringListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Add Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeAddMethod = function isDOMTokenListPrototypeAddMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "add" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Contains Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeContainsMethod = function isDOMTokenListPrototypeContainsMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "contains" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Entries Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeEntriesMethod = function isDOMTokenListPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype For Each Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeForEachMethod = function isDOMTokenListPrototypeForEachMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "forEach" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Item Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeItemMethod = function isDOMTokenListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Keys Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeKeysMethod = function isDOMTokenListPrototypeKeysMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "keys" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Remove Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeRemoveMethod = function isDOMTokenListPrototypeRemoveMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "remove" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Replace Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeReplaceMethod = function isDOMTokenListPrototypeReplaceMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "replace" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Supports Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeSupportsMethod = function isDOMTokenListPrototypeSupportsMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "supports" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Toggle Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeToggleMethod = function isDOMTokenListPrototypeToggleMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "toggle" && LDKF.functionPrototypeIsNative(method) };

                // Is DOM Token List Prototype Values Method
                LapysDevelopmentKit.test.isDOMTokenListPrototypeValuesMethod = function isDOMTokenListPrototypeValuesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Name
                LapysDevelopmentKit.test.isElementName = function isElementName(arg) {
                    // Logic > Return
                    if (!LDKF.isString(name)) return false;

                    // Initialization > Iterator
                    var iterator = LDKF.stringPrototypeLength(name), length = iterator;

                    // Loop
                    while (iterator) {
                        // Initialization > (Index, Character)
                        var index = length - (iterator -= 1) - 1,
                            character = LDKF.stringPrototypeCharacterAt(name, index);

                        // Logic
                        if (index ? (character != '-' && character != '_' && !LDKF.stringPrototypeIsAlphabet(character) && !LDKF.stringPrototypeIsDigit(character)) : !LDKF.stringPrototypeIsAlphabet(character)) {
                            // Initialization > Is Valid Non-Tested Character
                            var isValidNonTestedCharacter = true;

                            // Error Handling > (...)
                            try { LDKF.documentPrototypeCreateElement(character) }
                            catch (error) { isValidNonTestedCharacter = false }

                            // Return
                            return isValidNonTestedCharacter
                        }
                    }

                    // Return
                    return true
                };

                // Is Element Prototype Get Attribute Method
                LapysDevelopmentKit.test.isElementPrototypeGetAttributeMethod = function isElementPrototypeGetAttributeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getAttribute" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Get Attribute Node Method
                LapysDevelopmentKit.test.isElementPrototypeGetAttributeNodeMethod = function isElementPrototypeGetAttributeNodeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getAttributeNode" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Get Bounding Client Rectangle Method
                LapysDevelopmentKit.test.isElementPrototypeGetBoundingClientRectangleMethod = function isElementPrototypeGetBoundingClientRectangleMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getBoundingClientRect" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Get Client Rectangles Method
                LapysDevelopmentKit.test.isElementPrototypeGetClientRectanglesMethod = function isElementPrototypeGetClientRectanglesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getClientRects" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Get Elements By Tag Name Method
                LapysDevelopmentKit.test.isElementPrototypeGetElementsByTagNameMethod = function isElementPrototypeGetElementsByTagNameMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getElementsByTagName" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Insert Adjacent Element Method
                LapysDevelopmentKit.test.isElementPrototypeInsertAdjacentElementMethod = function isElementPrototypeInsertAdjacentElementMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertAdjacentElement" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Insert Adjacent HTML Method
                LapysDevelopmentKit.test.isElementPrototypeInsertAdjacentHTMLMethod = function isElementPrototypeInsertAdjacentHTMLMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertAdjacentHTML" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Insert Adjacent Text Method
                LapysDevelopmentKit.test.isElementPrototypeInsertAdjacentTextMethod = function isElementPrototypeInsertAdjacentTextMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertAdjacentText" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Remove Attribute Method
                LapysDevelopmentKit.test.isElementPrototypeRemoveAttributeMethod = function isElementPrototypeRemoveAttributeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeAttribute" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Remove Attribute Node Method
                LapysDevelopmentKit.test.isElementPrototypeRemoveAttributeNodeMethod = function isElementPrototypeRemoveAttributeNodeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeAttributeNode" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Scroll Into View Method
                LapysDevelopmentKit.test.isElementPrototypeScrollIntoViewMethod = function isElementPrototypeScrollIntoViewMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "scrollIntoView" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Set Attribute Method
                LapysDevelopmentKit.test.isElementPrototypeSetAttributeMethod = function isElementPrototypeSetAttributeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "setAttribute" && LDKF.functionPrototypeIsNative(method) };

                // Is Element Prototype Set Attribute Node Method
                LapysDevelopmentKit.test.isElementPrototypeSetAttributeNodeMethod = function isElementPrototypeSetAttributeNodeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "setAttributeNode" && LDKF.functionPrototypeIsNative(method) };

                // Is Event Handler
                LapysDevelopmentKit.test.isEventHandler = function isEventHandler(arg) { return LDKF.isNull(arg) || LDKF.isFunction(arg) };

                // Is Event Target Prototype Add Event Listener Method
                LapysDevelopmentKit.test.isEventTargetPrototypeAddEventListenerMethod = function isEventTargetPrototypeAddEventListenerMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "addEventListener" && LDKF.functionPrototypeIsNative(method) };

                // Is Event Target Prototype Attach Event Method
                LapysDevelopmentKit.test.isEventTargetPrototypeAttachEventMethod = function isEventTargetPrototypeAttachEventMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "attachEvent" && LDKF.functionPrototypeIsNative(method) };

                // Is Event Target Prototype Detach Event Method
                LapysDevelopmentKit.test.isEventTargetPrototypeDetachEventMethod = function isEventTargetPrototypeDetachEventMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "detachEvent" && LDKF.functionPrototypeIsNative(method) };

                // Is Event Target Prototype Remove Event Listener Method
                LapysDevelopmentKit.test.isEventTargetPrototypeRemoveEventListenerMethod = function isEventTargetPrototypeRemoveEventListenerMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeEventListener" && LDKF.functionPrototypeIsNative(method) };

                // Is File List Prototype Item Method
                LapysDevelopmentKit.test.isFileListPrototypeItemMethod = function isFileListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML All Collection Prototype Item Method
                LapysDevelopmentKit.test.isHTMLAllCollectionPrototypeItemMethod = function isHTMLAllCollectionPrototypeItemMethod(method) { return LDKF.isFunction(method) && (LDKF.functionPrototypeGetName(method) || "item") == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML All Collection Prototype Named Item Method
                LapysDevelopmentKit.test.isHTMLAllCollectionPrototypeNamedItemMethod = function isHTMLAllCollectionPrototypeNamedItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "namedItem" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Collection Prototype Item Method
                LapysDevelopmentKit.test.isHTMLCollectionPrototypeItemMethod = function isHTMLCollectionPrototypeItemMethod(method) { return LDKF.isFunction(method) && (LDKF.functionPrototypeGetName(method) || "item") == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Collection Prototype Named Item Method
                LapysDevelopmentKit.test.isHTMLCollectionPrototypeNamedItemMethod = function isHTMLCollectionPrototypeNamedItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "namedItem" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Element Prototype Blur Method
                LapysDevelopmentKit.test.isHTMLElementPrototypeBlurMethod = function isHTMLElementPrototypeBlurMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "blur" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Element Prototype Focus Method
                LapysDevelopmentKit.test.isHTMLElementPrototypeFocusMethod = function isHTMLElementPrototypeFocusMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "focus" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Form Controls Collection Prototype Named Item Method
                LapysDevelopmentKit.test.isHTMLFormControlsCollectionPrototypeNamedItemMethod = function isHTMLFormControlsCollectionPrototypeNamedItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "namedItem" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Options Collection Prototype Add Method
                LapysDevelopmentKit.test.isHTMLOptionsCollectionPrototypeAddMethod = function isHTMLOptionsCollectionPrototypeAddMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "add" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Options Collection Prototype Remove Method
                LapysDevelopmentKit.test.isHTMLOptionsCollectionPrototypeRemoveMethod = function isHTMLOptionsCollectionPrototypeRemoveMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "remove" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Clear Method
                LapysDevelopmentKit.test.isMapPrototypeClearMethod = function isMapPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Delete Method
                LapysDevelopmentKit.test.isMapPrototypeDeleteMethod = function isMapPrototypeDeleteMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "delete" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Entries Method
                LapysDevelopmentKit.test.isMapPrototypeEntriesMethod = function isMapPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype For Each Method
                LapysDevelopmentKit.test.isMapPrototypeForEachMethod = function isMapPrototypeForEachMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "forEach" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Get Method
                LapysDevelopmentKit.test.isMapPrototypeGetMethod = function isMapPrototypeGetMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "get" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Has Method
                LapysDevelopmentKit.test.isMapPrototypeHasMethod = function isMapPrototypeHasMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "has" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Keys Method
                LapysDevelopmentKit.test.isMapPrototypeKeysMethod = function isMapPrototypeKeysMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "keys" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Set Method
                LapysDevelopmentKit.test.isMapPrototypeSetMethod = function isMapPrototypeSetMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "set" && LDKF.functionPrototypeIsNative(method) };

                // Is Map Prototype Values Method
                LapysDevelopmentKit.test.isMapPrototypeValuesMethod = function isMapPrototypeValuesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is Media Key Status Map Prototype Entries Method
                LapysDevelopmentKit.test.isMediaKeyStatusMapPrototypeEntriesMethod = function isMediaKeyStatusMapPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is Media Key Status Map Prototype For Each Method
                LapysDevelopmentKit.test.isMediaKeyStatusMapPrototypeForEachMethod = function isMediaKeyStatusMapPrototypeForEachMethod(method) { return LDKF.isFunction(method) && !LDKF.functionPrototypeGetName(method) && LDKF.functionPrototypeIsNative(method) };

                // Is Media Key Status Map Prototype Get Method
                LapysDevelopmentKit.test.isMediaKeyStatusMapPrototypeGetMethod = function isMediaKeyStatusMapPrototypeGetMethod(method) { return LDKF.isFunction(method) && !LDKF.functionPrototypeGetName(method) && LDKF.functionPrototypeIsNative(method) };

                // Is Media Key Status Map Prototype Has Method
                LapysDevelopmentKit.test.isMediaKeyStatusMapPrototypeHasMethod = function isMediaKeyStatusMapPrototypeHasMethod(method) { return LDKF.isFunction(method) && !LDKF.functionPrototypeGetName(method) && LDKF.functionPrototypeIsNative(method) };

                // Is Media Key Status Map Prototype Keys Method
                LapysDevelopmentKit.test.isMediaKeyStatusMapPrototypeKeysMethod = function isMediaKeyStatusMapPrototypeKeysMethod(method) { return LDKF.isFunction(method) && !LDKF.functionPrototypeGetName(method) && LDKF.functionPrototypeIsNative(method) };

                // Is Media Key Status Map Prototype Values Method
                LapysDevelopmentKit.test.isMediaKeyStatusMapPrototypeValuesMethod = function isMediaKeyStatusMapPrototypeValuesMethod(method) { return LDKF.isFunction(method) && !LDKF.functionPrototypeGetName(method) && LDKF.functionPrototypeIsNative(method) };

                // Is Media List Prototype Append Medium Method
                LapysDevelopmentKit.test.isMediaListPrototypeAppendMediumMethod = function isMediaListPrototypeAppendMediumMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendMedium" && LDKF.functionPrototypeIsNative(method) };

                // Is Media List Prototype Delete Medium Method
                LapysDevelopmentKit.test.isMediaListPrototypeDeleteMediumMethod = function isMediaListPrototypeDeleteMediumMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "deleteMedium" && LDKF.functionPrototypeIsNative(method) };

                // Is Media List Prototype Item Method
                LapysDevelopmentKit.test.isMediaListPrototypeItemMethod = function isMediaListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is Named Node Map Prototype Get Named Item Method
                LapysDevelopmentKit.test.isNamedNodeMapPrototypeGetNamedItemMethod = function isNamedNodeMapPrototypeGetNamedItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getNamedItem" && LDKF.functionPrototypeIsNative(method) };

                // Is Named Node Map Prototype Item Method
                LapysDevelopmentKit.test.isNamedNodeMapPrototypeItemMethod = function isNamedNodeMapPrototypeItemMethod(method) { return LDKF.isFunction(method) && (LDKF.functionPrototypeGetName(method) || "item") == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is Named Node Map Prototype Remove Named Item Method
                LapysDevelopmentKit.test.isNamedNodeMapPrototypeRemoveNamedItemMethod = function isNamedNodeMapPrototypeRemoveNamedItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeNamedItem" && LDKF.functionPrototypeIsNative(method) };

                // Is Named Node Map Prototype Set Named Item Method
                LapysDevelopmentKit.test.isNamedNodeMapPrototypeSetNamedItemMethod = function isNamedNodeMapPrototypeSetNamedItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "setNamedItem" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Append Child Method
                LapysDevelopmentKit.test.isNodePrototypeAppendChildMethod = function isNodePrototypeAppendChildMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendChild" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Clone Node Method
                LapysDevelopmentKit.test.isNodePrototypeCloneNodeMethod = function isNodePrototypeCloneNodeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "cloneNode" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Contains Method
                LapysDevelopmentKit.test.isNodePrototypeContainsMethod = function isNodePrototypeContainsMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "contains" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Has Child Nodes Method
                LapysDevelopmentKit.test.isNodePrototypeHasChildNodesMethod = function isNodePrototypeHasChildNodesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "hasChildNodes" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Insert Before Method
                LapysDevelopmentKit.test.isNodePrototypeInsertBeforeMethod = function isNodePrototypeInsertBeforeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertBefore" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Normalize Method
                LapysDevelopmentKit.test.isNodePrototypeNormalizeMethod = function isNodePrototypeNormalizeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "normalize" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Remove Child Method
                LapysDevelopmentKit.test.isNodePrototypeRemoveChildMethod = function isNodePrototypeRemoveChildMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeChild" && LDKF.functionPrototypeIsNative(method) };

                // Is Node Prototype Replace Child Method
                LapysDevelopmentKit.test.isNodePrototypeReplaceChildMethod = function isNodePrototypeReplaceChildMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "replaceChild" && LDKF.functionPrototypeIsNative(method) };

                // Is Node List Prototype Item Method
                LapysDevelopmentKit.test.isNodeListPrototypeItemMethod = function isNodeListPrototypeItemMethod(method) { return LDKF.isFunction(method) && (LDKF.functionPrototypeGetName(method) || "item") == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is Object Native Constructor --- NOTE (Lapys) -> Should only be called from `LapysDevelopmentKit.test.queryObjectNativeConstructor`.
                LapysDevelopmentKit.test.isObjectNativeConstructor = function isObjectNativeConstructor(object, options, STRICT) {
                    // Initialization > (Constructor (Name), Property Name, Target)
                    var constructor = options.constructorObject,
                        constructorName = LDKF.toString(options.constructorName),
                        propertyName = options.propertyName,
                        that = this;

                    // Logic
                    if (LDKF.objectPrototypeHasProperty(object, propertyName) && LDKT.isPublicConstructor(constructor))
                        // Logic
                        if (
                            (LDKF.functionPrototypeGetName(constructor) || constructorName) == constructorName ||
                            (STRICT ?
                                (
                                    (typeof constructor == "function" || typeof constructor == "object") &&
                                    LDKF.objectPrototypeIs.OR(LDKF.toString(constructor), constructorName, "[object]", "[object " + constructorName + ']', "[object " + constructorName + "Constructor]")
                                ) :
                                false
                            )
                        )
                            // Return
                            return LDKF.objectPrototypePropertyIsUnique(object, propertyName);

                        else if (that === LDKF.error)
                            // Error
                            LDKF.error.nativeToEnvironment('`' + constructorName + "` constructor");

                    // Return
                    return false
                };

                // Is Object Native Method
                LapysDevelopmentKit.test.isObjectNativeMethod = function isObjectNativeMethod(object, options, STRICT) {
                    // Initialization > Method (Name)
                    var method = options.methodObject, methodName = options.methodName, propertyName = options.propertyName, propertySourceString = options.propertySourceString;

                    // Logic
                    if (LDKF.objectPrototypeHasProperty(object, propertyName) && !LDKF.isVoid(method))
                        // Logic
                        if (
                            (
                                LDKF.isFunction(method) &&
                                (LDKF.functionPrototypeGetName(method) || (STRICT ? methodName : "")) == methodName &&
                                LDKF.functionPrototypeIsNative(method)
                            ) || (
                                LDKF.isString(method) &&
                                method === "[Interface prototype object]"
                            )
                        )
                            // Return
                            return LDKF.objectPrototypePropertyIsUnique(object, propertyName);

                        else if (this === LDKF.error)
                            // Error
                            LDKF.error.nativeToEnvironment('`' + (propertySourceString || "<Object>.") + methodName + "` method");

                    // Return
                    return false
                };

                // Is Public Constructor --- NOTE (Lapys) -> Test that the environment allows access to and utilizes the specified argument.
                LapysDevelopmentKit.test.isPublicConstructor = function isPublicConstructor(arg) { return !LDKF.isVoid(arg) && LDKF.functionPrototypeIsNative(arg) };

                // Is Set Prototype Add Method
                LapysDevelopmentKit.test.isSetPrototypeAddMethod = function isSetPrototypeAddMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "add" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype Clear Method
                LapysDevelopmentKit.test.isSetPrototypeClearMethod = function isSetPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype Delete Method
                LapysDevelopmentKit.test.isSetPrototypeDeleteMethod = function isSetPrototypeDeleteMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "delete" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype Entries Method
                LapysDevelopmentKit.test.isSetPrototypeEntriesMethod = function isSetPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype For Each Method
                LapysDevelopmentKit.test.isSetPrototypeForEachMethod = function isSetPrototypeForEachMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "forEach" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype Has Method
                LapysDevelopmentKit.test.isSetPrototypeHasMethod = function isSetPrototypeHasMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "has" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype Keys Method
                LapysDevelopmentKit.test.isSetPrototypeKeysMethod = function isSetPrototypeKeysMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is Set Prototype Values Method
                LapysDevelopmentKit.test.isSetPrototypeValuesMethod = function isSetPrototypeValuesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Prototype Append Method
                LapysDevelopmentKit.test.isStylePropertyMapPrototypeAppendMethod = function isStylePropertyMapPrototypeAppendMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "append" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Prototype Clear Method
                LapysDevelopmentKit.test.isStylePropertyMapPrototypeClearMethod = function isStylePropertyMapPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Prototype Delete Method
                LapysDevelopmentKit.test.isStylePropertyMapPrototypeDeleteMethod = function isStylePropertyMapPrototypeDeleteMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "delete" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Prototype Set Method
                LapysDevelopmentKit.test.isStylePropertyMapPrototypeSetMethod = function isStylePropertyMapPrototypeSetMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "set" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype Entries Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeEntriesMethod = function isStylePropertyMapReadOnlyPrototypeEntriesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "entries" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype For Each Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeForEachMethod = function isStylePropertyMapReadOnlyPrototypeForEachMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "forEach" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype Get Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeGetMethod = function isStylePropertyMapReadOnlyPrototypeGetMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "get" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype Get All Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeGetAllMethod = function isStylePropertyMapReadOnlyPrototypeGetAllMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getAll" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype Has Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeHasMethod = function isStylePropertyMapReadOnlyPrototypeHasMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "has" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype Keys Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeKeysMethod = function isStylePropertyMapReadOnlyPrototypeKeysMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "keys" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Property Map Read-Only Prototype Values Method
                LapysDevelopmentKit.test.isStylePropertyMapReadOnlyPrototypeValuesMethod = function isStylePropertyMapReadOnlyPrototypeValuesMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "values" && LDKF.functionPrototypeIsNative(method) };

                // Is Style Sheet List Prototype Item Method
                LapysDevelopmentKit.test.isStyleSheetListPrototypeItemMethod = function isStyleSheetListPrototypeItemMethod(method) { return LDKF.isFunction(method) && (LDKF.functionPrototypeGetName(method) || "item") == "item" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length Prototype Convert To Specified Units Method
                LapysDevelopmentKit.test.isSVGLengthPrototypeConvertToSpecifiedUnitsMethod = function isSVGLengthPrototypeConvertToSpecifiedUnitsMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "convertToSpecifiedUnits" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length Prototype New Value Specified Units Method
                LapysDevelopmentKit.test.isSVGLengthPrototypeNewValueSpecifiedUnitsMethod = function isSVGLengthPrototypeNewValueSpecifiedUnitsMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "newValueSpecifiedUnits" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Append Item Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeAppendItemMethod = function isSVGLengthListPrototypeAppendItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Clear Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeClearMethod = function isSVGLengthListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Get Item Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeGetItemMethod = function isSVGLengthListPrototypeGetItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Initialize Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeInitializeMethod = function isSVGLengthListPrototypeInitializeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "initialize" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Insert Item Before Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeInsertItemBeforeMethod = function isSVGLengthListPrototypeInsertItemBeforeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertItemBefore" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Remove Item Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeRemoveItemMethod = function isSVGLengthListPrototypeRemoveItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Length List Prototype Replace Item Method
                LapysDevelopmentKit.test.isSVGLengthListPrototypeReplaceItemMethod = function isSVGLengthListPrototypeReplaceItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "replaceItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Append Item Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeAppendItemMethod = function isSVGNumberListPrototypeAppendItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Clear Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeClearMethod = function isSVGNumberListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Get Item Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeGetItemMethod = function isSVGNumberListPrototypeGetItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Initialize Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeInitializeMethod = function isSVGNumberListPrototypeInitializeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "initialize" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Insert Item Before Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeInsertItemBeforeMethod = function isSVGNumberListPrototypeInsertItemBeforeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertItemBefore" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Remove Item Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeRemoveItemMethod = function isSVGNumberListPrototypeRemoveItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Number List Prototype Replace Item Method
                LapysDevelopmentKit.test.isSVGNumberListPrototypeReplaceItemMethod = function isSVGNumberListPrototypeReplaceItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "replaceItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Point List Prototype Append Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeAppendItemMethod = function isSVGPointListPrototypeAppendItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Point List Prototype Clear Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeClearMethod = function isSVGPointListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Point List Prototype Get Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeGetItemMethod = function isSVGPointListPrototypeGetItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Point List Prototype Initialize Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeInitializeMethod = function isSVGPointListPrototypeInitializeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "initialize" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Point List Prototype Insert Before Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeInsertItemBeforeMethod = function isSVGPointListPrototypeInsertItemBeforeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertItemBefore" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Point List Prototype Remove Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeRemoveItemMethod = function isSVGPointListPrototypeRemoveItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Append Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeAppendItemMethod = function isSVGPointListPrototypeAppendItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Clear Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeClearMethod = function isSVGPointListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Get Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeGetItemMethod = function isSVGPointListPrototypeGetItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Initialize Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeInitializeMethod = function isSVGPointListPrototypeInitializeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "initialize" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Insert Item Before Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeInsertItemBeforeMethod = function isSVGPointListPrototypeInsertItemBeforeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertItemBefore" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Remove Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeRemoveItemMethod = function isSVGPointListPrototypeRemoveItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG String List Prototype Replace Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeReplaceItemMethod = function isSVGPointListPrototypeReplaceItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "replaceItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Append Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeAppendItemMethod = function isSVGPointListPrototypeAppendItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "appendItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Clear Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeClearMethod = function isSVGPointListPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Consolidate Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeConsolidateMethod = function isSVGPointListPrototypeConsolidateMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "consolidate" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Create SVG Transform From Matrix Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeCreateSVGTransformFromMatrixMethod = function isSVGPointListPrototypeCreateSVGTransformFromMatrixMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createSVGTransformFromMatrix" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Get Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeGetItemMethod = function isSVGPointListPrototypeGetItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Initialize Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeInitializeMethod = function isSVGPointListPrototypeInitializeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "initialize" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Insert Item Before Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeInsertItemBeforeMethod = function isSVGPointListPrototypeInsertItemBeforeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "insertItemBefore" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Remove Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeRemoveItemMethod = function isSVGPointListPrototypeRemoveItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "removeItem" && LDKF.functionPrototypeIsNative(method) };

                // Is SVG Transform List Prototype Replace Item Method
                LapysDevelopmentKit.test.isSVGPointListPrototypeReplaceItemMethod = function isSVGPointListPrototypeReplaceItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "replaceItem" && LDKF.functionPrototypeIsNative(method) };

                // Is Text Track Cue List Prototype Get Cue By ID Method
                LapysDevelopmentKit.test.isTextTrackCueListPrototypeGetCueByIdMethod = function isTextTrackCueListPrototypeGetCueByIdMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getCueById" && LDKF.functionPrototypeIsNative(method) };

                // Is Text Track List Prototype Get Track By ID Method
                LapysDevelopmentKit.test.isTextTrackListPrototypeGetTrackByIdMethod = function isTextTrackListPrototypeGetTrackByIdMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getTrackById" && LDKF.functionPrototypeIsNative(method) };

                // Is Touch List Prototype Item Method
                LapysDevelopmentKit.test.isTouchListPrototypeItemMethod = function isTouchListPrototypeItemMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "item" && LDKF.functionPrototypeIsNative(method) };

                /* Method Is Standard
                        --- NOTE ---
                            #Lapys: Crude version of `LapysDevelopmentKit.functions.functionPrototypeIsNative`
                                for testing `Function.prototype.apply` and `Function.prototype.call` to be native methods.

                        --- WARN ---
                            #Lapys: Defer to `LapysDevelopmentKit.functions.functionPrototypeIsNative` instead.
                */
                LapysDevelopmentKit.test.methodIsStandard = function methodIsStandard(method, methodName, methodNameLength) {
                    // Initialization > (...) --- NOTE (Lapys) -> Constant error codes.
                    var STRING_PROTOTYPE_CHAR_AT_METHOD_IS_USER_DEFINED = 1;

                    // Error Handling
                    try {
                        // Initialization > Source
                        var source = method + "";

                        // Return
                        return typeof method == "function" && (function() {
                            // Function
                                // Get Character From Index
                                function getCharacterFromIndex(string, index) {
                                    // Error Handling
                                    try {
                                        // Initialization > Character
                                        var character = string.charAt(index) || undefined;

                                        // Error
                                        if (!isCharacter(character)) throw {};

                                        // Return
                                        return character
                                    } catch (error) {
                                        // Error
                                        throw STRING_PROTOTYPE_CHAR_AT_METHOD_IS_USER_DEFINED
                                    }
                                }

                                // Is Character
                                function isCharacter(arg) { return typeof arg == "string" && isSafeNumber(arg.length) && arg.length === 1 }

                                // Is Safe Number
                                function isSafeNumber(arg) {
                                    // Initialization > Stream
                                    var stream;

                                    // Error Handling > Update > Stream
                                    try { stream = arg + "" } catch (error) {}

                                    // Return
                                    return typeof arg == "number" && stream != "Infinity" && stream != "-Infinity" && stream != "NaN"
                                }

                            // Initialization > (Allow Stream, Is Standard, Iterator, Length, Match (Length), Stream Lock)
                            var allowStream = true,
                                isStandard = false,
                                iterator = -1, length,
                                match = ['[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']'], matchLength = 13,
                                streamLock = null;

                            // Loop
                            while (iterator != -2 && (!~iterator || isCharacter(getCharacterFromIndex(source, iterator)))) {
                                // Update > Length
                                length = iterator += 1;

                                // Initialization > (Character, Match Iterator)
                                var character = getCharacterFromIndex(source, iterator),
                                    matchIterator = matchLength;

                                // Logic
                                if (allowStream) {
                                    // Logic
                                    if (character == '/' && getCharacterFromIndex(source, iterator + 1) == '/') {
                                        // Update > (Allow Stream, Stream Lock)
                                        allowStream = false;
                                        streamLock = "//";

                                        // [Continue]
                                        continue
                                    }

                                    else if (character == '/' && getCharacterFromIndex(source, iterator + 1) == '*') {
                                        // Update > Allow Stream
                                        allowStream = false;

                                        // [Continue]
                                        continue
                                    }

                                    else if (character == '\'' || character == '"') {
                                        // Update > (Allow Stream, Stream Lock)
                                        allowStream = false;
                                        streamLock = character;

                                        // [Continue]
                                        continue
                                    }

                                    // Loop
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic
                                        if (getCharacterFromIndex(source, iterator + matchIndex) != match[matchIndex])
                                            // [Break]
                                            break;

                                        else if (!matchIterator && getCharacterFromIndex(source, iterator + matchIndex) == match[matchIndex]) {
                                            // Update > (Iterator, Is Standard)
                                            iterator = -2;
                                            isStandard = true
                                        }
                                    }
                                }

                                else if (character == '\n' && streamLock == "//") {
                                    // Update > (Allow Stream, Stream Lock)
                                    allowStream = true;
                                    streamLock = null
                                }

                                else if (character == '*' && getCharacterFromIndex(source, iterator + 1) == '/')
                                    // Update > Allow Stream
                                    allowStream = true;

                                else if ((character == '\'' || character == '"') && character == streamLock) {
                                    // Update > (Allow Stream, Stream Lock)
                                    allowStream = true;
                                    streamLock = null
                                }
                            }

                            // Logic --- NOTE (Lapys) -> Also test for the method's name as well.
                            if (methodName && methodNameLength) {
                                // Update > (Iterator, Match (Length))
                                iterator = 7;
                                match = methodName;
                                matchLength = methodNameLength;

                                // Loop
                                while (iterator != -2 && iterator != length) {
                                    // Update > Iterator
                                    iterator += 1;

                                    // Initialization > Match Iterator
                                    var matchIterator = matchLength;

                                    // Loop
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic
                                        if (getCharacterFromIndex(source, iterator + matchIndex) != match[matchIndex])
                                            // [Break]
                                            break;

                                        else if (!matchIterator && getCharacterFromIndex(source, iterator + matchIndex) == match[matchIndex]) {
                                            // Update > (Is Standard, Iterator)
                                            isStandard = true;
                                            iterator = -2
                                        }
                                    }
                                }

                                // Update > Is Standard
                                (iterator == length) && (isStandard = false)
                            }

                            // Return
                            return isStandard
                        })()
                    } catch (error) {
                        // Logic
                        switch (error) {
                            // (...)
                            case STRING_PROTOTYPE_CHAR_AT_METHOD_IS_USER_DEFINED:
                                // Error
                                console.log(method);
                                LDKT.throwError("`String.prototype.charAt` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
                        }
                    }

                    // Return
                    return false
                };

                // Query Object Constructor Native Method --- WARN (Lapys) -> For `Object` methodS only.
                LapysDevelopmentKit.test.queryObjectConstructorNativeMethod = function queryObjectConstructorNativeMethod(propertyName, propertyValueTester) {
                    // Initialization > Query
                    var query = {
                        // Alternatives
                        alternatives: [],

                        // On Query Failed
                        onqueryfailed: function onqueryfailed(propertyValue, propertyValueTester) {
                            // Update > Query > Alternatives
                            query.alternatives[LDKF.arrayPrototypeLength(query.alternatives)] = {
                                // Property Value
                                propertyValue: propertyValue,

                                // Property Value Tester --- NOTE (Lapys) -> Assert if the Property Value is valid; If invalid, the current Method is nullified.
                                propertyValueTester: LDKF.getArgumentsLength(arguments) > 1 ? propertyValueTester : function() { return true }
                            };

                            // Return
                            return query
                        },

                        // Query
                        query: function(alternativesTester) {
                            // Initialization > Method
                            var method;

                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.object, query.propertyName) && (LDKF.getArgumentsLength(arguments) ? alternativesTester() : true)) {
                                // Update > Method
                                method = LDKF.objectPrototypeGetProperty(LDKO.object, query.propertyName);

                                // Error
                                query.propertyValueTester(method) || LDKF.error.nativeToEnvironment("`Object." + query.propertyName + "` method")
                            }

                            else {
                                // Initialization > (Iterator, Length)
                                var iterator = LDKF.arrayPrototypeLength(query.alternatives), length = iterator;

                                // Loop --- NOTE (Lapys) -> Iterate through other alternative Methods.
                                while (iterator) {
                                    // Initialization > Alternative
                                    var alternative = query.alternatives[length - (iterator -= 1) - 1];

                                    // Update > Method
                                    method = alternative.propertyValue;

                                    // Logic > (...) --- NOTE (Lapys) -> Test the method.
                                    if (alternative.propertyValueTester(method)) break;
                                    else method = undefined
                                }
                            }

                            // Return
                            return method
                        }
                    };

                    // Modification > Query Property (Name, Value Tester)
                    query.propertyName = propertyName;
                    query.propertyValueTester = LDKF.getArgumentsLength(arguments) > 1 ? propertyValueTester : function(method) { return LDKF.functionPrototypeGetName(method) == query.propertyName && LDKF.functionPrototypeIsNative(method) };

                    // Return
                    return query
                };

                // Query Object Native Constructor
                LapysDevelopmentKit.test.queryObjectNativeConstructor = function queryObjectNativeConstructor(object, options, STRICT) {
                    // Update > Options
                    (LDKF.isString(options) || LDKF.isSymbol(options)) && (options = {propertyName: options});

                    // Modification > Options > (...)
                    LDKF.objectPrototypeHasOwnProperty(options, "constructor") && LDKF.objectPrototypeReplaceProperty(options, "constructor", "constructorObject");
                    LDKF.objectPrototypeHasProperty(options, "name") && LDKF.objectPrototypeReplaceProperty(options, "name", "propertyName");
                    LDKF.objectPrototypeHasProperty(options, "constructorName") || (options.constructorName = options.propertyName);
                    LDKF.objectPrototypeHasProperty(options, "constructorObject") || (options.constructorObject = LDKF.objectPrototypeGetProperty(object, options.STRICT ? options.propertyName : options.constructorName));

                    // Logic > Return
                    if (LDKT.isObjectNativeConstructor.call(LDKF.error, object, options, STRICT)) return options.constructorObject
                };

                // Query Object Native Method --- NOTE (Lapys) -> Practically code duplication at this point, but semantics dictate that these must be separate functions.
                LapysDevelopmentKit.test.queryObjectNativeMethod = function queryObjectNativeMethod(object, options, STRICT) {
                    // Update > Options
                    (LDKF.isString(options) || LDKF.isSymbol(options)) && (options = {propertyName: options});

                    // Modification > Options > (...)
                    LDKF.objectPrototypeHasOwnProperty(options, "method") && LDKF.objectPrototypeReplaceProperty(options, "method", "methodObject");
                    LDKF.objectPrototypeHasProperty(options, "name") && LDKF.objectPrototypeReplaceProperty(options, "name", "propertyName");
                    LDKF.objectPrototypeHasProperty(options, "methodName") || (options.methodName = options.propertyName);
                    LDKF.objectPrototypeHasProperty(options, "methodObject") || (options.methodObject = LDKF.objectPrototypeGetProperty(object, options.STRICT ? options.propertyName : options.methodName));
                    LDKF.objectPrototypeHasProperty(options, "source") && LDKF.objectPrototypeReplaceProperty(options, "source", "propertySourceString");
                    LDKF.objectPrototypeHasProperty(options, "propertySourceString") || (options.propertySourceString = null);

                    // Logic > Return
                    if (LDKT.isObjectNativeMethod.call(LDKF.error, object, options, STRICT)) return options.methodObject
                };

                // Target Is Of Constructor
                LapysDevelopmentKit.test.targetIsOfConstructor = function targetIsOfConstructor(arg, condition, constructorName) { return condition.call(this, arg) || LDKF.error.invalidType(constructorName) };

                // Throw Error --- WARN (Lapys) -> Defer to `LapysDevelopmentKit.functions.error` instead.
                LapysDevelopmentKit.test.throwError = function throwError(message) { throw (LDKI.messages.debugging.prefix + message + LDKI.messages.debugging.suffix) };

                // Is Function Prototype Apply Method --- NOTE (Lapys) -> The tests are also executed after initialization.
                LapysDevelopmentKit.test.isFunctionPrototypeApplyMethod = function isFunctionPrototypeApplyMethod(method) { return LDKT.methodIsStandard(method, ['a', 'p', 'p', 'l', 'y'], 5) };
                LDKT.isFunctionPrototypeApplyMethod((function() { try { return LDKO.functionPrototypeApply = Main.apply } catch (error) {} })()) || LDKT.throwError("`Function.prototype.apply` method" + LDKI.messages.error.nativeToEnvironmentSuffix);

                // Is Function Prototype Call Method
                LapysDevelopmentKit.test.isFunctionPrototypeCallMethod = function isFunctionPrototypeCallMethod(method) { return LDKT.methodIsStandard(method, ['c', 'a', 'l', 'l'], 4) };
                LDKT.isFunctionPrototypeCallMethod((function() { try { return LDKO.functionPrototypeCall = Main.call } catch (error) {} })()) || LDKT.throwError("`Function.prototype.call` method" + LDKI.messages.error.nativeToEnvironmentSuffix);

            /* Objects */
                // String > Prototype
                    /* Character At
                            --- WARN ---
                                #Lapys: Specifically for legacy versions of the Internet Explorer web browser.
                                    - Fortunately, syntactic indexing still works for non-string objects (such as array-like objects).
                                    - Unfortunately, this takes priority over default string character indexing in most other programming languages (which means insignificantly slower processing speeds).
                    */
                    LapysDevelopmentKit.objects.stringPrototypeCharacterAt = (function() {
                        // Initialization > Method
                        var method;

                        // Error Handling
                        try {
                            // Update > Method
                            method = "".charAt;

                            // Logic > Error
                            if (!(typeof method == "function" && LDKF.objectPrototypeIs.OR(method + "", "function charAt() { [native code] }", "function charAt() {\n    [native code]\n}", "\nfunction charAt() {\n    [native code]\n}\n"))) throw UNIQUE
                        } catch (error) {
                            // (Update > Method) | Error
                            ' '[+0] === ' ' ?
                                method = function charAt(index) { return LDKF.toString(this)[LDKF.getArgumentsLength(arguments) ? index : +0] } :
                                LDKF.error.nativeToEnvironment("`String.prototype.charAt` method")
                        }

                        // Return
                        return method
                    })();

                    // Character Code At --- NOTE (Lapys) -> Used for the `LapysDevelopmentKit.math.random.generateSeeder` method.
                    LapysDevelopmentKit.objects.stringPrototypeCharacterCodeAt = (function() {
                        // Initialization > Method --- NOTE (Lapys) -> The `UNIQUE` object here is a placeholder.
                        var method = UNIQUE;

                        // Error Handling
                        try {
                            // Update > Method
                            method = "".charCodeAt;

                            // Logic > Error
                            if (!(typeof method == "function" && LDKF.objectPrototypeIs.OR(method + "", "function charCodeAt() { [native code] }", "function charCodeAt() {\n    [native code]\n}", "\nfunction charCodeAt() {\n    [native code]\n}\n"))) throw UNIQUE
                        } catch (error) {
                            // (Update > Method) | Error
                            method === UNIQUE ?
                                method = function charCodeAt(index) { switch(LDKF.stringPrototypeCharacterAt(this,index)){case ' ':return 32;break;case '!':return 33;break;case '"':return 34;break;case '#':return 35;break;case '$':return 36;break;case '%':return 37;break;case '&':return 38;break;case '\'':return 39;break;case '(':return 40;break;case ')':return 41;break;case '*':return 42;break;case '+':return 43;break;case ',':return 44;break;case '-':return 45;break;case '.':return 46;break;case '/':return 47;break;case '0':return 48;break;case '1':return 49;break;case '2':return 50;break;case '3':return 51;break;case '4':return 52;break;case '5':return 53;break;case '6':return 54;break;case '7':return 55;break;case '8':return 56;break;case '9':return 57;break;case ':':return 58;break;case ';':return 59;break;case '<':return 60;break;case '=':return 61;break;case '>':return 62;break;case '?':return 63;break;case '@':return 64;break;case 'A':return 65;break;case 'B':return 66;break;case 'C':return 67;break;case 'D':return 68;break;case 'E':return 69;break;case 'F':return 70;break;case 'G':return 71;break;case 'H':return 72;break;case 'I':return 73;break;case 'J':return 74;break;case 'K':return 75;break;case 'L':return 76;break;case 'M':return 77;break;case 'N':return 78;break;case 'O':return 79;break;case 'P':return 80;break;case 'Q':return 81;break;case 'R':return 82;break;case 'S':return 83;break;case 'T':return 84;break;case 'U':return 85;break;case 'V':return 86;break;case 'W':return 87;break;case 'X':return 88;break;case 'Y':return 89;break;case 'Z':return 90;break;case '[':return 91;break;case '\\':return 92;break;case ']':return 93;break;case '^':return 94;break;case '_':return 95;break;case '`':return 96;break;case 'a':return 97;break;case 'b':return 98;break;case 'c':return 99;break;case 'd':return 100;break;case 'e':return 101;break;case 'f':return 102;break;case 'g':return 103;break;case 'h':return 104;break;case 'i':return 105;break;case 'j':return 106;break;case 'k':return 107;break;case 'l':return 108;break;case 'm':return 109;break;case 'n':return 110;break;case 'o':return 111;break;case 'p':return 112;break;case 'q':return 113;break;case 'r':return 114;break;case 's':return 115;break;case 't':return 116;break;case 'u':return 117;break;case 'v':return 118;break;case 'w':return 119;break;case 'x':return 120;break;case 'y':return 121;break;case 'z':return 122;break;case '{':return 123;break;case '|':return 124;break;case '}':return 125;break;case '~':return 126;break;case ' ':return 160;break;case '¡':return 161;break;case '¢':return 162;break;case '£':return 163;break;case '¤':return 164;break;case '¥':return 165;break;case '¦':return 166;break;case '§':return 167;break;case '¨':return 168;break;case '©':return 169;break;case 'ª':return 170;break;case '«':return 171;break;case '¬':return 172;break;case '­':return 173;break;case '®':return 174;break;case '¯':return 175;break;case '°':return 176;break;case '±':return 177;break;case '²':return 178;break;case '³':return 179;break;case '´':return 180;break;case 'µ':return 181;break;case '¶':return 182;break;case '·':return 183;break;case '¸':return 184;break;case '¹':return 185;break;case 'º':return 186;break;case '»':return 187;break;case '¼':return 188;break;case '½':return 189;break;case '¾':return 190;break;case '¿':return 191;break;case 'À':return 192;break;case 'Á':return 193;break;case 'Â':return 194;break;case 'Ã':return 195;break;case 'Ä':return 196;break;case 'Å':return 197;break;case 'Æ':return 198;break;case 'Ç':return 199;break;case 'È':return 200;break;case 'É':return 201;break;case 'Ê':return 202;break;case 'Ë':return 203;break;case 'Ì':return 204;break;case 'Í':return 205;break;case 'Î':return 206;break;case 'Ï':return 207;break;case 'Ð':return 208;break;case 'Ñ':return 209;break;case 'Ò':return 210;break;case 'Ó':return 211;break;case 'Ô':return 212;break;case 'Õ':return 213;break;case 'Ö':return 214;break;case '×':return 215;break;case 'Ø':return 216;break;case 'Ù':return 217;break;case 'Ú':return 218;break;case 'Û':return 219;break;case 'Ü':return 220;break;case 'Ý':return 221;break;case 'Þ':return 222;break;case 'ß':return 223;break;case 'à':return 224;break;case 'á':return 225;break;case 'â':return 226;break;case 'ã':return 227;break;case 'ä':return 228;break;case 'å':return 229;break;case 'æ':return 230;break;case 'ç':return 231;break;case 'è':return 232;break;case 'é':return 233;break;case 'ê':return 234;break;case 'ë':return 235;break;case 'ì':return 236;break;case 'í':return 237;break;case 'î':return 238;break;case 'ï':return 239;break;case 'ð':return 240;break;case 'ñ':return 241;break;case 'ò':return 242;break;case 'ó':return 243;break;case 'ô':return 244;break;case 'õ':return 245;break;case 'ö':return 246;break;case '÷':return 247;break;case 'ø':return 248;break;case 'ù':return 249;break;case 'ú':return 250;break;case 'û':return 251;break;case 'ü':return 252;break;case 'ý':return 253;break;case 'þ':return 254;break;case 'ÿ':return 255;break;case 'Ā':return 256;break;case 'ā':return 257;break;case 'Ă':return 258;break;case 'ă':return 259;break;case 'Ą':return 260;break;case 'ą':return 261;break;case 'Ć':return 262;break;case 'ć':return 263;break;case 'Ĉ':return 264;break;case 'ĉ':return 265;break;case 'Ċ':return 266;break;case 'ċ':return 267;break;case 'Č':return 268;break;case 'č':return 269;break;case 'Ď':return 270;break;case 'ď':return 271;break;case 'Đ':return 272;break;case 'đ':return 273;break;case 'Ē':return 274;break;case 'ē':return 275;break;case 'Ĕ':return 276;break;case 'ĕ':return 277;break;case 'Ė':return 278;break;case 'ė':return 279;break;case 'Ę':return 280;break;case 'ę':return 281;break;case 'Ě':return 282;break;case 'ě':return 283;break;case 'Ĝ':return 284;break;case 'ĝ':return 285;break;case 'Ğ':return 286;break;case 'ğ':return 287;break;case 'Ġ':return 288;break;case 'ġ':return 289;break;case 'Ģ':return 290;break;case 'ģ':return 291;break;case 'Ĥ':return 292;break;case 'ĥ':return 293;break;case 'Ħ':return 294;break;case 'ħ':return 295;break;case 'Ĩ':return 296;break;case 'ĩ':return 297;break;case 'Ī':return 298;break;case 'ī':return 299;break;case 'Ĭ':return 300;break;case 'ĭ':return 301;break;case 'Į':return 302;break;case 'į':return 303;break;case 'İ':return 304;break;case 'ı':return 305;break;case 'Ĳ':return 306;break;case 'ĳ':return 307;break;case 'Ĵ':return 308;break;case 'ĵ':return 309;break;case 'Ķ':return 310;break;case 'ķ':return 311;break;case 'ĸ':return 312;break;case 'Ĺ':return 313;break;case 'ĺ':return 314;break;case 'Ļ':return 315;break;case 'ļ':return 316;break;case 'Ľ':return 317;break;case 'ľ':return 318;break;case 'Ŀ':return 319;break;case 'ŀ':return 320;break;case 'Ł':return 321;break;case 'ł':return 322;break;case 'Ń':return 323;break;case 'ń':return 324;break;case 'Ņ':return 325;break;case 'ņ':return 326;break;case 'Ň':return 327;break;case 'ň':return 328;break;case 'ŉ':return 329;break;case 'Ŋ':return 330;break;case 'ŋ':return 331;break;case 'Ō':return 332;break;case 'ō':return 333;break;case 'Ŏ':return 334;break;case 'ŏ':return 335;break;case 'Ő':return 336;break;case 'ő':return 337;break;case 'Œ':return 338;break;case 'œ':return 339;break;case 'Ŕ':return 340;break;case 'ŕ':return 341;break;case 'Ŗ':return 342;break;case 'ŗ':return 343;break;case 'Ř':return 344;break;case 'ř':return 345;break;case 'Ś':return 346;break;case 'ś':return 347;break;case 'Ŝ':return 348;break;case 'ŝ':return 349;break;case 'Ş':return 350;break;case 'ş':return 351;break;case 'Š':return 352;break;case 'š':return 353;break;case 'Ţ':return 354;break;case 'ţ':return 355;break;case 'Ť':return 356;break;case 'ť':return 357;break;case 'Ŧ':return 358;break;case 'ŧ':return 359;break;case 'Ũ':return 360;break;case 'ũ':return 361;break;case 'Ū':return 362;break;case 'ū':return 363;break;case 'Ŭ':return 364;break;case 'ŭ':return 365;break;case 'Ů':return 366;break;case 'ů':return 367;break;case 'Ű':return 368;break;case 'ű':return 369;break;case 'Ų':return 370;break;case 'ų':return 371;break;case 'Ŵ':return 372;break;case 'ŵ':return 373;break;case 'Ŷ':return 374;break;case 'ŷ':return 375;break;case 'Ÿ':return 376;break;case 'Ź':return 377;break;case 'ź':return 378;break;case 'Ż':return 379;break;case 'ż':return 380;break;case 'Ž':return 381;break;case 'ž':return 382;break;case 'ſ':return 383;break;case 'ƀ':return 384;break;case 'Ɓ':return 385;break;case 'Ƃ':return 386;break;case 'ƃ':return 387;break;case 'Ƅ':return 388;break;case 'ƅ':return 389;break;case 'Ɔ':return 390;break;case 'Ƈ':return 391;break;case 'ƈ':return 392;break;case 'Ɖ':return 393;break;case 'Ɗ':return 394;break;case 'Ƌ':return 395;break;case 'ƌ':return 396;break;case 'ƍ':return 397;break;case 'Ǝ':return 398;break;case 'Ə':return 399;break;case 'Ɛ':return 400;break;case 'Ƒ':return 401;break;case 'ƒ':return 402;break;case 'Ɠ':return 403;break;case 'Ɣ':return 404;break;case 'ƕ':return 405;break;case 'Ɩ':return 406;break;case 'Ɨ':return 407;break;case 'Ƙ':return 408;break;case 'ƙ':return 409;break;case 'ƚ':return 410;break;case 'ƛ':return 411;break;case 'Ɯ':return 412;break;case 'Ɲ':return 413;break;case 'ƞ':return 414;break;case 'Ɵ':return 415;break;case 'Ơ':return 416;break;case 'ơ':return 417;break;case 'Ƣ':return 418;break;case 'ƣ':return 419;break;case 'Ƥ':return 420;break;case 'ƥ':return 421;break;case 'Ʀ':return 422;break;case 'Ƨ':return 423;break;case 'ƨ':return 424;break;case 'Ʃ':return 425;break;case 'ƪ':return 426;break;case 'ƫ':return 427;break;case 'Ƭ':return 428;break;case 'ƭ':return 429;break;case 'Ʈ':return 430;break;case 'Ư':return 431;break;case 'ư':return 432;break;case 'Ʊ':return 433;break;case 'Ʋ':return 434;break;case 'Ƴ':return 435;break;case 'ƴ':return 436;break;case 'Ƶ':return 437;break;case 'ƶ':return 438;break;case 'Ʒ':return 439;break;case 'Ƹ':return 440;break;case 'ƹ':return 441;break;case 'ƺ':return 442;break;case 'ƻ':return 443;break;case 'Ƽ':return 444;break;case 'ƽ':return 445;break;case 'ƾ':return 446;break;case 'ƿ':return 447;break;case 'ǀ':return 448;break;case 'ǁ':return 449;break;case 'ǂ':return 450;break;case 'ǃ':return 451;break;case 'Ǆ':return 452;break;case 'ǅ':return 453;break;case 'ǆ':return 454;break;case 'Ǉ':return 455;break;case 'ǈ':return 456;break;case 'ǉ':return 457;break;case 'Ǌ':return 458;break;case 'ǋ':return 459;break;case 'ǌ':return 460;break;case 'Ǎ':return 461;break;case 'ǎ':return 462;break;case 'Ǐ':return 463;break;case 'ǐ':return 464;break;case 'Ǒ':return 465;break;case 'ǒ':return 466;break;case 'Ǔ':return 467;break;case 'ǔ':return 468;break;case 'Ǖ':return 469;break;case 'ǖ':return 470;break;case 'Ǘ':return 471;break;case 'ǘ':return 472;break;case 'Ǚ':return 473;break;case 'ǚ':return 474;break;case 'Ǜ':return 475;break;case 'ǜ':return 476;break;case 'ǝ':return 477;break;case 'Ǟ':return 478;break;case 'ǟ':return 479;break;case 'Ǡ':return 480;break;case 'ǡ':return 481;break;case 'Ǣ':return 482;break;case 'ǣ':return 483;break;case 'Ǥ':return 484;break;case 'ǥ':return 485;break;case 'Ǧ':return 486;break;case 'ǧ':return 487;break;case 'Ǩ':return 488;break;case 'ǩ':return 489;break;case 'Ǫ':return 490;break;case 'ǫ':return 491;break;case 'Ǭ':return 492;break;case 'ǭ':return 493;break;case 'Ǯ':return 494;break;case 'ǯ':return 495;break;case 'ǰ':return 496;break;case 'Ǳ':return 497;break;case 'ǲ':return 498;break;case 'ǳ':return 499;break;case 'Ǵ':return 500;break;case 'ǵ':return 501;break;case 'Ƕ':return 502;break;case 'Ƿ':return 503;break;case 'Ǹ':return 504;break;case 'ǹ':return 505;break;case 'Ǻ':return 506;break;case 'ǻ':return 507;break;case 'Ǽ':return 508;break;case 'ǽ':return 509;break;case 'Ǿ':return 510;break;case 'ǿ':return 511;break;case '𝌀':return 29440;break;case '𝌁':return 29441;break;case '𝌂':return 29442;break;case '𝌃':return 29443;break;case '𝌄':return 29444;break;case '𝌅':return 29445;break;case '𝌆':return 29446;break;case '𝌇':return 29447;break;case '𝌈':return 29448;break;case '𝌉':return 29449;break;case '𝌊':return 29450;break;case '𝌋':return 29451;break;case '𝌌':return 29452;break;case '𝌍':return 29453;break;case '𝌎':return 29454;break;case '𝌏':return 29455;break;case '𝌐':return 29456;break;case '𝌑':return 29457;break;case '𝌒':return 29458;break;case '𝌓':return 29459;break;case '𝌔':return 29460;break;case '𝌕':return 29461;break;case '𝌖':return 29462;break;case '𝌗':return 29463;break;case '𝌘':return 29464;break;case '𝌙':return 29465;break;case '𝌚':return 29466;break;case '𝌛':return 29467;break;case '𝌜':return 29468;break;case '𝌝':return 29469;break;case '𝌞':return 29470;break;case '𝌟':return 29471;break;case '𝌠':return 29472;break;case '𝌡':return 29473;break;case '𝌢':return 29474;break;case '𝌣':return 29475;break;case '𝌤':return 29476;break;case '𝌥':return 29477;break;case '𝌦':return 29478;break;case '𝌧':return 29479;break;case '𝌨':return 29480;break;case '𝌩':return 29481;break;case '𝌪':return 29482;break;case '𝌫':return 29483;break;case '𝌬':return 29484;break;case '𝌭':return 29485;break;case '𝌮':return 29486;break;case '𝌯':return 29487;break;case '𝌰':return 29488;break;case '𝌱':return 29489;break;case '𝌲':return 29490;break;case '𝌳':return 29491;break;case '𝌴':return 29492;break;case '𝌵':return 29493;break;case '𝌶':return 29494;break;case '𝌷':return 29495;break;case '𝌸':return 29496;break;case '𝌹':return 29497;break;case '𝌺':return 29498;break;case '𝌻':return 29499;break;case '𝌼':return 29500;break;case '𝌽':return 29501;break;case '𝌾':return 29502;break;case '𝌿':return 29503;break;case '𝍀':return 29504;break;case '𝍁':return 29505;break;case '𝍂':return 29506;break;case '𝍃':return 29507;break;case '𝍄':return 29508;break;case '𝍅':return 29509;break;case '𝍆':return 29510;break;case '𝍇':return 29511;break;case '𝍈':return 29512;break;case '𝍉':return 29513;break;case '𝍊':return 29514;break;case '𝍋':return 29515;break;case '𝍌':return 29516;break;case '𝍍':return 29517;break;case '𝍎':return 29518;break;case '𝍏':return 29519;break;case '𝍐':return 29520;break;case '𝍑':return 29521;break;case '𝍒':return 29522;break;case '𝍓':return 29523;break;case '𝍔':return 29524;break;case '𝍕':return 29525;break;case '𝍖':return 29526;break;case '𝐀':return 29696;break;case '𝐁':return 29697;break;case '𝐂':return 29698;break;case '𝐃':return 29699;break;case '𝐄':return 29700;break;case '𝐅':return 29701;break;case '𝐆':return 29702;break;case '𝐇':return 29703;break;case '𝐈':return 29704;break;case '𝐉':return 29705;break;case '𝐊':return 29706;break;case '𝐋':return 29707;break;case '𝐌':return 29708;break;case '𝐍':return 29709;break;case '𝐎':return 29710;break;case '𝐏':return 29711;break;case '𝐐':return 29712;break;case '𝐑':return 29713;break;case '𝐒':return 29714;break;case '𝐓':return 29715;break;case '𝐔':return 29716;break;case '𝐕':return 29717;break;case '𝐖':return 29718;break;case '𝐗':return 29719;break;case '𝐘':return 29720;break;case '𝐙':return 29721;break;case '𝐚':return 29722;break;case '𝐛':return 29723;break;case '𝐜':return 29724;break;case '𝐝':return 29725;break;case '𝐞':return 29726;break;case '𝐟':return 29727;break;case '𝐠':return 29728;break;case '𝐡':return 29729;break;case '𝐢':return 29730;break;case '𝐣':return 29731;break;case '𝐤':return 29732;break;case '𝐥':return 29733;break;case '𝐦':return 29734;break;case '𝐧':return 29735;break;case '𝐨':return 29736;break;case '𝐩':return 29737;break;case '𝐪':return 29738;break;case '𝐫':return 29739;break;case '𝐬':return 29740;break;case '𝐭':return 29741;break;case '𝐮':return 29742;break;case '𝐯':return 29743;break;case '𝐰':return 29744;break;case '𝐱':return 29745;break;case '𝐲':return 29746;break;case '𝐳':return 29747;break;case '𝐴':return 29748;break;case '𝐵':return 29749;break;case '𝐶':return 29750;break;case '𝐷':return 29751;break;case '𝐸':return 29752;break;case '𝐹':return 29753;break;case '𝐺':return 29754;break;case '𝐻':return 29755;break;case '𝐼':return 29756;break;case '𝐽':return 29757;break;case '𝐾':return 29758;break;case '𝐿':return 29759;break;case '𝑀':return 29760;break;case '𝑁':return 29761;break;case '𝑂':return 29762;break;case '𝑃':return 29763;break;case '𝑄':return 29764;break;case '𝑅':return 29765;break;case '𝑆':return 29766;break;case '𝑇':return 29767;break;case '𝑈':return 29768;break;case '𝑉':return 29769;break;case '𝑊':return 29770;break;case '𝑋':return 29771;break;case '𝑌':return 29772;break;case '𝑍':return 29773;break;case '𝑎':return 29774;break;case '𝑏':return 29775;break;case '𝑐':return 29776;break;case '𝑑':return 29777;break;case '𝑒':return 29778;break;case '𝑓':return 29779;break;case '𝑔':return 29780;break;case '𝑕':return 29781;break;case '𝑖':return 29782;break;case '𝑗':return 29783;break;case '𝑘':return 29784;break;case '𝑙':return 29785;break;case '𝑚':return 29786;break;case '𝑛':return 29787;break;case '𝑜':return 29788;break;case '𝑝':return 29789;break;case '𝑞':return 29790;break;case '𝑟':return 29791;break;case '𝑠':return 29792;break;case '𝑡':return 29793;break;case '𝑢':return 29794;break;case '𝑣':return 29795;break;case '𝑤':return 29796;break;case '𝑥':return 29797;break;case '𝑦':return 29798;break;case '𝑧':return 29799;break;case '𝑨':return 29800;break;case '𝑩':return 29801;break;case '𝑪':return 29802;break;case '𝑫':return 29803;break;case '𝑬':return 29804;break;case '𝑭':return 29805;break;case '𝑮':return 29806;break;case '𝑯':return 29807;break;case '𝑰':return 29808;break;case '𝑱':return 29809;break;case '𝑲':return 29810;break;case '𝑳':return 29811;break;case '𝑴':return 29812;break;case '𝑵':return 29813;break;case '𝑶':return 29814;break;case '𝑷':return 29815;break;case '𝑸':return 29816;break;case '𝑹':return 29817;break;case '𝑺':return 29818;break;case '𝑻':return 29819;break;case '𝑼':return 29820;break;case '𝑽':return 29821;break;case '𝑾':return 29822;break;case '𝑿':return 29823;break;case '𝒀':return 29824;break;case '𝒁':return 29825;break;case '𝒂':return 29826;break;case '𝒃':return 29827;break;case '𝒄':return 29828;break;case '𝒅':return 29829;break;case '𝒆':return 29830;break;case '𝒇':return 29831;break;case '𝒈':return 29832;break;case '𝒉':return 29833;break;case '𝒊':return 29834;break;case '𝒋':return 29835;break;case '𝒌':return 29836;break;case '𝒍':return 29837;break;case '𝒎':return 29838;break;case '𝒏':return 29839;break;case '𝒐':return 29840;break;case '𝒑':return 29841;break;case '𝒒':return 29842;break;case '𝒓':return 29843;break;case '𝒔':return 29844;break;case '𝒕':return 29845;break;case '𝒖':return 29846;break;case '𝒗':return 29847;break;case '𝒘':return 29848;break;case '𝒙':return 29849;break;case '𝒚':return 29850;break;case '𝒛':return 29851;break;case '𝒜':return 29852;break;case '𝒞':return 29854;break;case '𝒟':return 29855;break;case '𝒢':return 29858;break;case '𝒥':return 29861;break;case '𝒦':return 29862;break;case '𝒧':return 29863;break;case '𝒨':return 29864;break;case '𝒩':return 29865;break;case '𝒪':return 29866;break;case '𝒫':return 29867;break;case '𝒬':return 29868;break;case '𝒮':return 29870;break;case '𝒯':return 29871;break;case '𝒰':return 29872;break;case '𝒱':return 29873;break;case '𝒲':return 29874;break;case '𝒳':return 29875;break;case '𝒴':return 29876;break;case '𝒵':return 29877;break;case '𝒶':return 29878;break;case '𝒷':return 29879;break;case '𝒸':return 29880;break;case '𝒹':return 29881;break;case '𝒻':return 29883;break;case '𝒽':return 29885;break;case '𝒾':return 29886;break;case '𝒿':return 29887;break;case '𝓀':return 29888;break;case '𝓁':return 29889;break;case '𝓂':return 29890;break;case '𝓃':return 29891;break;case '𝓅':return 29893;break;case '𝓆':return 29894;break;case '𝓇':return 29895;break;case '𝓈':return 29896;break;case '𝓉':return 29897;break;case '𝓊':return 29898;break;case '𝓋':return 29899;break;case '𝓌':return 29900;break;case '𝓍':return 29901;break;case '𝓎':return 29902;break;case '𝓏':return 29903;break;case '𝓐':return 29904;break;case '𝓑':return 29905;break;case '𝓒':return 29906;break;case '𝓓':return 29907;break;case '𝓔':return 29908;break;case '𝓕':return 29909;break;case '𝓖':return 29910;break;case '𝓗':return 29911;break;case '𝓘':return 29912;break;case '𝓙':return 29913;break;case '𝓚':return 29914;break;case '𝓛':return 29915;break;case '𝓜':return 29916;break;case '𝓝':return 29917;break;case '𝓞':return 29918;break;case '𝓟':return 29919;break;case '𝓠':return 29920;break;case '𝓡':return 29921;break;case '𝓢':return 29922;break;case '𝓣':return 29923;break;case '𝓤':return 29924;break;case '𝓥':return 29925;break;case '𝓦':return 29926;break;case '𝓧':return 29927;break;case '𝓨':return 29928;break;case '𝓩':return 29929;break;case '𝓪':return 29930;break;case '𝓫':return 29931;break;case '𝓬':return 29932;break;case '𝓭':return 29933;break;case '𝓮':return 29934;break;case '𝓯':return 29935;break;case '𝓰':return 29936;break;case '𝓱':return 29937;break;case '𝓲':return 29938;break;case '𝓳':return 29939;break;case '𝓴':return 29940;break;case '𝓵':return 29941;break;case '𝓶':return 29942;break;case '𝓷':return 29943;break;case '𝓸':return 29944;break;case '𝓹':return 29945;break;case '𝓺':return 29946;break;case '𝓻':return 29947;break;case '𝓼':return 29948;break;case '𝓽':return 29949;break;case '𝓾':return 29950;break;case '𝓿':return 29951;break;case '𝔀':return 29952;break;case '𝔁':return 29953;break;case '𝔂':return 29954;break;case '𝔃':return 29955;break;case '𝔄':return 29956;break;case '𝔅':return 29957;break;case '𝔆':return 29958;break;case '𝔇':return 29959;break;case '𝔈':return 29960;break;case '𝔉':return 29961;break;case '𝔊':return 29962;break;case '𝔋':return 29963;break;case '𝔌':return 29964;break;case '𝔍':return 29965;break;case '𝔎':return 29966;break;case '𝔏':return 29967;break;case '𝔐':return 29968;break;case '𝔑':return 29969;break;case '𝔒':return 29970;break;case '𝔓':return 29971;break;case '𝔔':return 29972;break;case '𝔖':return 29974;break;case '𝔗':return 29975;break;case '𝔘':return 29976;break;case '𝔙':return 29977;break;case '𝔚':return 29978;break;case '𝔛':return 29979;break;case '𝔜':return 29980;break;case '𝔞':return 29982;break;case '𝔟':return 29983;break;case '𝔠':return 29984;break;case '𝔡':return 29985;break;case '𝔢':return 29986;break;case '𝔣':return 29987;break;case '𝔤':return 29988;break;case '𝔥':return 29989;break;case '𝔦':return 29990;break;case '𝔧':return 29991;break;case '𝔨':return 29992;break;case '𝔩':return 29993;break;case '𝔪':return 29994;break;case '𝔫':return 29995;break;case '𝔬':return 29996;break;case '𝔭':return 29997;break;case '𝔮':return 29998;break;case '𝔯':return 29999;break;case '𝔰':return 30000;break;case '𝔱':return 30001;break;case '𝔲':return 30002;break;case '𝔳':return 30003;break;case '𝔴':return 30004;break;case '𝔵':return 30005;break;case '𝔶':return 30006;break;case '𝔷':return 30007;break;case '𝔸':return 30008;break;case '𝔹':return 30009;break;case '𝔻':return 30011;break;case '𝔼':return 30012;break;case '𝔽':return 30013;break;case '𝔾':return 30014;break;case '𝕀':return 30016;break;case '𝕁':return 30017;break;case '𝕂':return 30018;break;case '𝕃':return 30019;break;case '𝕄':return 30020;break;case '𝕆':return 30022;break;case '𝕊':return 30026;break;case '𝕋':return 30027;break;case '𝕌':return 30028;break;case '𝕍':return 30029;break;case '𝕎':return 30030;break;case '𝕏':return 30031;break;case '𝕐':return 30032;break;case '𝕒':return 30034;break;case '𝕓':return 30035;break;case '𝕔':return 30036;break;case '𝕕':return 30037;break;case '𝕖':return 30038;break;case '𝕗':return 30039;break;case '𝕘':return 30040;break;case '𝕙':return 30041;break;case '𝕚':return 30042;break;case '𝕛':return 30043;break;case '𝕜':return 30044;break;case '𝕝':return 30045;break;case '𝕞':return 30046;break;case '𝕟':return 30047;break;case '𝕠':return 30048;break;case '𝕡':return 30049;break;case '𝕢':return 30050;break;case '𝕣':return 30051;break;case '𝕤':return 30052;break;case '𝕥':return 30053;break;case '𝕦':return 30054;break;case '𝕧':return 30055;break;case '𝕨':return 30056;break;case '𝕩':return 30057;break;case '𝕪':return 30058;break;case '𝕫':return 30059;break;case '𝕬':return 30060;break;case '𝕭':return 30061;break;case '𝕮':return 30062;break;case '𝕯':return 30063;break;case '𝕰':return 30064;break;case '𝕱':return 30065;break;case '𝕲':return 30066;break;case '𝕳':return 30067;break;case '𝕴':return 30068;break;case '𝕵':return 30069;break;case '𝕶':return 30070;break;case '𝕷':return 30071;break;case '𝕸':return 30072;break;case '𝕹':return 30073;break;case '𝕺':return 30074;break;case '𝕻':return 30075;break;case '𝕼':return 30076;break;case '𝕽':return 30077;break;case '𝕾':return 30078;break;case '𝕿':return 30079;break;case '𝖀':return 30080;break;case '𝖁':return 30081;break;case '𝖂':return 30082;break;case '𝖃':return 30083;break;case '𝖄':return 30084;break;case '𝖅':return 30085;break;case '𝖆':return 30086;break;case '𝖇':return 30087;break;case '𝖈':return 30088;break;case '𝖉':return 30089;break;case '𝖊':return 30090;break;case '𝖋':return 30091;break;case '𝖌':return 30092;break;case '𝖍':return 30093;break;case '𝖎':return 30094;break;case '𝖏':return 30095;break;case '𝖐':return 30096;break;case '𝖑':return 30097;break;case '𝖒':return 30098;break;case '𝖓':return 30099;break;case '𝖔':return 30100;break;case '𝖕':return 30101;break;case '𝖖':return 30102;break;case '𝖗':return 30103;break;case '𝖘':return 30104;break;case '𝖙':return 30105;break;case '𝖚':return 30106;break;case '𝖛':return 30107;break;case '𝖜':return 30108;break;case '𝖝':return 30109;break;case '𝖞':return 30110;break;case '𝖟':return 30111;break;case '𝖠':return 30112;break;case '𝖡':return 30113;break;case '𝖢':return 30114;break;case '𝖣':return 30115;break;case '𝖤':return 30116;break;case '𝖥':return 30117;break;case '𝖦':return 30118;break;case '𝖧':return 30119;break;case '𝖨':return 30120;break;case '𝖩':return 30121;break;case '𝖪':return 30122;break;case '𝖫':return 30123;break;case '𝖬':return 30124;break;case '𝖭':return 30125;break;case '𝖮':return 30126;break;case '𝖯':return 30127;break;case '𝖰':return 30128;break;case '𝖱':return 30129;break;case '𝖲':return 30130;break;case '𝖳':return 30131;break;case '𝖴':return 30132;break;case '𝖵':return 30133;break;case '𝖶':return 30134;break;case '𝖷':return 30135;break;case '𝖸':return 30136;break;case '𝖹':return 30137;break;case '𝖺':return 30138;break;case '𝖻':return 30139;break;case '𝖼':return 30140;break;case '𝖽':return 30141;break;case '𝖾':return 30142;break;case '𝖿':return 30143;break;case '𝗀':return 30144;break;case '𝗁':return 30145;break;case '𝗂':return 30146;break;case '𝗃':return 30147;break;case '𝗄':return 30148;break;case '𝗅':return 30149;break;case '𝗆':return 30150;break;case '𝗇':return 30151;break;case '𝗈':return 30152;break;case '𝗉':return 30153;break;case '𝗊':return 30154;break;case '𝗋':return 30155;break;case '𝗌':return 30156;break;case '𝗍':return 30157;break;case '𝗎':return 30158;break;case '𝗏':return 30159;break;case '𝗐':return 30160;break;case '𝗑':return 30161;break;case '𝗒':return 30162;break;case '𝗓':return 30163;break;case '𝗔':return 30164;break;case '𝗕':return 30165;break;case '𝗖':return 30166;break;case '𝗗':return 30167;break;case '𝗘':return 30168;break;case '𝗙':return 30169;break;case '𝗚':return 30170;break;case '𝗛':return 30171;break;case '𝗜':return 30172;break;case '𝗝':return 30173;break;case '𝗞':return 30174;break;case '𝗟':return 30175;break;case '𝗠':return 30176;break;case '𝗡':return 30177;break;case '𝗢':return 30178;break;case '𝗣':return 30179;break;case '𝗤':return 30180;break;case '𝗥':return 30181;break;case '𝗦':return 30182;break;case '𝗧':return 30183;break;case '𝗨':return 30184;break;case '𝗩':return 30185;break;case '𝗪':return 30186;break;case '𝗫':return 30187;break;case '𝗬':return 30188;break;case '𝗭':return 30189;break;case '𝗮':return 30190;break;case '𝗯':return 30191;break;case '𝗰':return 30192;break;case '𝗱':return 30193;break;case '𝗲':return 30194;break;case '𝗳':return 30195;break;case '𝗴':return 30196;break;case '𝗵':return 30197;break;case '𝗶':return 30198;break;case '𝗷':return 30199;break;case '𝗸':return 30200;break;case '𝗹':return 30201;break;case '𝗺':return 30202;break;case '𝗻':return 30203;break;case '𝗼':return 30204;break;case '𝗽':return 30205;break;case '𝗾':return 30206;break;case '𝗿':return 30207;break;case '𝘀':return 30208;break;case '𝘁':return 30209;break;case '𝘂':return 30210;break;case '𝘃':return 30211;break;case '𝘄':return 30212;break;case '𝘅':return 30213;break;case '𝘆':return 30214;break;case '𝘇':return 30215;break;case '𝘈':return 30216;break;case '𝘉':return 30217;break;case '𝘊':return 30218;break;case '𝘋':return 30219;break;case '𝘌':return 30220;break;case '𝘍':return 30221;break;case '𝘎':return 30222;break;case '𝘏':return 30223;break;case '𝘐':return 30224;break;case '𝘑':return 30225;break;case '𝘒':return 30226;break;case '𝘓':return 30227;break;case '𝘔':return 30228;break;case '𝘕':return 30229;break;case '𝘖':return 30230;break;case '𝘗':return 30231;break;case '𝘘':return 30232;break;case '𝘙':return 30233;break;case '𝘚':return 30234;break;case '𝘛':return 30235;break;case '𝘜':return 30236;break;case '𝘝':return 30237;break;case '𝘞':return 30238;break;case '𝘟':return 30239;break;case '𝘠':return 30240;break;case '𝘡':return 30241;break;case '𝘢':return 30242;break;case '𝘣':return 30243;break;case '𝘤':return 30244;break;case '𝘥':return 30245;break;case '𝘦':return 30246;break;case '𝘧':return 30247;break;case '𝘨':return 30248;break;case '𝘩':return 30249;break;case '𝘪':return 30250;break;case '𝘫':return 30251;break;case '𝘬':return 30252;break;case '𝘭':return 30253;break;case '𝘮':return 30254;break;case '𝘯':return 30255;break;case '𝘰':return 30256;break;case '𝘱':return 30257;break;case '𝘲':return 30258;break;case '𝘳':return 30259;break;case '𝘴':return 30260;break;case '𝘵':return 30261;break;case '𝘶':return 30262;break;case '𝘷':return 30263;break;case '𝘸':return 30264;break;case '𝘹':return 30265;break;case '𝘺':return 30266;break;case '𝘻':return 30267;break;case '𝘼':return 30268;break;case '𝘽':return 30269;break;case '𝘾':return 30270;break;case '𝘿':return 30271;break;case '𝙀':return 30272;break;case '𝙁':return 30273;break;case '𝙂':return 30274;break;case '𝙃':return 30275;break;case '𝙄':return 30276;break;case '𝙅':return 30277;break;case '𝙆':return 30278;break;case '𝙇':return 30279;break;case '𝙈':return 30280;break;case '𝙉':return 30281;break;case '𝙊':return 30282;break;case '𝙋':return 30283;break;case '𝙌':return 30284;break;case '𝙍':return 30285;break;case '𝙎':return 30286;break;case '𝙏':return 30287;break;case '𝙐':return 30288;break;case '𝙑':return 30289;break;case '𝙒':return 30290;break;case '𝙓':return 30291;break;case '𝙔':return 30292;break;case '𝙕':return 30293;break;case '𝙖':return 30294;break;case '𝙗':return 30295;break;case '𝙘':return 30296;break;case '𝙙':return 30297;break;case '𝙚':return 30298;break;case '𝙛':return 30299;break;case '𝙜':return 30300;break;case '𝙝':return 30301;break;case '𝙞':return 30302;break;case '𝙟':return 30303;break;case '𝙠':return 30304;break;case '𝙡':return 30305;break;case '𝙢':return 30306;break;case '𝙣':return 30307;break;case '𝙤':return 30308;break;case '𝙥':return 30309;break;case '𝙦':return 30310;break;case '𝙧':return 30311;break;case '𝙨':return 30312;break;case '𝙩':return 30313;break;case '𝙪':return 30314;break;case '𝙫':return 30315;break;case '𝙬':return 30316;break;case '𝙭':return 30317;break;case '𝙮':return 30318;break;case '𝙯':return 30319;break;case '𝙰':return 30320;break;case '𝙱':return 30321;break;case '𝙲':return 30322;break;case '𝙳':return 30323;break;case '𝙴':return 30324;break;case '𝙵':return 30325;break;case '𝙶':return 30326;break;case '𝙷':return 30327;break;case '𝙸':return 30328;break;case '𝙹':return 30329;break;case '𝙺':return 30330;break;case '𝙻':return 30331;break;case '𝙼':return 30332;break;case '𝙽':return 30333;break;case '𝙾':return 30334;break;case '𝙿':return 30335;break;case '𝚀':return 30336;break;case '𝚁':return 30337;break;case '𝚂':return 30338;break;case '𝚃':return 30339;break;case '𝚄':return 30340;break;case '𝚅':return 30341;break;case '𝚆':return 30342;break;case '𝚇':return 30343;break;case '𝚈':return 30344;break;case '𝚉':return 30345;break;case '𝚊':return 30346;break;case '𝚋':return 30347;break;case '𝚌':return 30348;break;case '𝚍':return 30349;break;case '𝚎':return 30350;break;case '𝚏':return 30351;break;case '𝚐':return 30352;break;case '𝚑':return 30353;break;case '𝚒':return 30354;break;case '𝚓':return 30355;break;case '𝚔':return 30356;break;case '𝚕':return 30357;break;case '𝚖':return 30358;break;case '𝚗':return 30359;break;case '𝚘':return 30360;break;case '𝚙':return 30361;break;case '𝚚':return 30362;break;case '𝚛':return 30363;break;case '𝚜':return 30364;break;case '𝚝':return 30365;break;case '𝚞':return 30366;break;case '𝚟':return 30367;break;case '𝚠':return 30368;break;case '𝚡':return 30369;break;case '𝚢':return 30370;break;case '𝚣':return 30371;break;case '𝚤':return 30372;break;case '𝚥':return 30373;break;case '𝚦':return 30374;break;case '𝚧':return 30375;break;case '𝚨':return 30376;break;case '𝚩':return 30377;break;case '𝚪':return 30378;break;case '𝚫':return 30379;break;case '𝚬':return 30380;break;case '𝚭':return 30381;break;case '𝚮':return 30382;break;case '𝚯':return 30383;break;case '𝚰':return 30384;break;case '𝚱':return 30385;break;case '𝚲':return 30386;break;case '𝚳':return 30387;break;case '𝚴':return 30388;break;case '𝚵':return 30389;break;case '𝚶':return 30390;break;case '𝚷':return 30391;break;case '𝚸':return 30392;break;case '𝚹':return 30393;break;case '𝚺':return 30394;break;case '𝚻':return 30395;break;case '𝚼':return 30396;break;case '𝚽':return 30397;break;case '𝚾':return 30398;break;case '𝚿':return 30399;break;case '𝛀':return 30400;break;case '𝛁':return 30401;break;case '𝛂':return 30402;break;case '𝛃':return 30403;break;case '𝛄':return 30404;break;case '𝛅':return 30405;break;case '𝛆':return 30406;break;case '𝛇':return 30407;break;case '𝛈':return 30408;break;case '𝛉':return 30409;break;case '𝛊':return 30410;break;case '𝛋':return 30411;break;case '𝛌':return 30412;break;case '𝛍':return 30413;break;case '𝛎':return 30414;break;case '𝛏':return 30415;break;case '𝛐':return 30416;break;case '𝛑':return 30417;break;case '𝛒':return 30418;break;case '𝛓':return 30419;break;case '𝛔':return 30420;break;case '𝛕':return 30421;break;case '𝛖':return 30422;break;case '𝛗':return 30423;break;case '𝛘':return 30424;break;case '𝛙':return 30425;break;case '𝛚':return 30426;break;case '𝛛':return 30427;break;case '𝛜':return 30428;break;case '𝛝':return 30429;break;case '𝛞':return 30430;break;case '𝛟':return 30431;break;case '𝛠':return 30432;break;case '𝛡':return 30433;break;case '𝛢':return 30434;break;case '𝛣':return 30435;break;case '𝛤':return 30436;break;case '𝛥':return 30437;break;case '𝛦':return 30438;break;case '𝛧':return 30439;break;case '𝛨':return 30440;break;case '𝛩':return 30441;break;case '𝛪':return 30442;break;case '𝛫':return 30443;break;case '𝛬':return 30444;break;case '𝛭':return 30445;break;case '𝛮':return 30446;break;case '𝛯':return 30447;break;case '𝛰':return 30448;break;case '𝛱':return 30449;break;case '𝛲':return 30450;break;case '𝛳':return 30451;break;case '𝛴':return 30452;break;case '𝛵':return 30453;break;case '𝛶':return 30454;break;case '𝛷':return 30455;break;case '𝛸':return 30456;break;case '𝛹':return 30457;break;case '𝛺':return 30458;break;case '𝛻':return 30459;break;case '𝛼':return 30460;break;case '𝛽':return 30461;break;case '𝛾':return 30462;break;case '𝛿':return 30463;break;case '𝜀':return 30464;break;case '𝜁':return 30465;break;case '𝜂':return 30466;break;case '𝜃':return 30467;break;case '𝜄':return 30468;break;case '𝜅':return 30469;break;case '𝜆':return 30470;break;case '𝜇':return 30471;break;case '𝜈':return 30472;break;case '𝜉':return 30473;break;case '𝜊':return 30474;break;case '𝜋':return 30475;break;case '𝜌':return 30476;break;case '𝜍':return 30477;break;case '𝜎':return 30478;break;case '𝜏':return 30479;break;case '𝜐':return 30480;break;case '𝜑':return 30481;break;case '𝜒':return 30482;break;case '𝜓':return 30483;break;case '𝜔':return 30484;break;case '𝜕':return 30485;break;case '𝜖':return 30486;break;case '𝜗':return 30487;break;case '𝜘':return 30488;break;case '𝜙':return 30489;break;case '𝜚':return 30490;break;case '𝜛':return 30491;break;case '𝜜':return 30492;break;case '𝜝':return 30493;break;case '𝜞':return 30494;break;case '𝜟':return 30495;break;case '𝜠':return 30496;break;case '𝜡':return 30497;break;case '𝜢':return 30498;break;case '𝜣':return 30499;break;case '𝜤':return 30500;break;case '𝜥':return 30501;break;case '𝜦':return 30502;break;case '𝜧':return 30503;break;case '𝜨':return 30504;break;case '𝜩':return 30505;break;case '𝜪':return 30506;break;case '𝜫':return 30507;break;case '𝜬':return 30508;break;case '𝜭':return 30509;break;case '𝜮':return 30510;break;case '𝜯':return 30511;break;case '𝜰':return 30512;break;case '𝜱':return 30513;break;case '𝜲':return 30514;break;case '𝜳':return 30515;break;case '𝜴':return 30516;break;case '𝜵':return 30517;break;case '𝜶':return 30518;break;case '𝜷':return 30519;break;case '𝜸':return 30520;break;case '𝜹':return 30521;break;case '𝜺':return 30522;break;case '𝜻':return 30523;break;case '𝜼':return 30524;break;case '𝜽':return 30525;break;case '𝜾':return 30526;break;case '𝜿':return 30527;break;case '𝝀':return 30528;break;case '𝝁':return 30529;break;case '𝝂':return 30530;break;case '𝝃':return 30531;break;case '𝝄':return 30532;break;case '𝝅':return 30533;break;case '𝝆':return 30534;break;case '𝝇':return 30535;break;case '𝝈':return 30536;break;case '𝝉':return 30537;break;case '𝝊':return 30538;break;case '𝝋':return 30539;break;case '𝝌':return 30540;break;case '𝝍':return 30541;break;case '𝝎':return 30542;break;case '𝝏':return 30543;break;case '𝝐':return 30544;break;case '𝝑':return 30545;break;case '𝝒':return 30546;break;case '𝝓':return 30547;break;case '𝝔':return 30548;break;case '𝝕':return 30549;break;case '𝝖':return 30550;break;case '𝝗':return 30551;break;case '𝝘':return 30552;break;case '𝝙':return 30553;break;case '𝝚':return 30554;break;case '𝝛':return 30555;break;case '𝝜':return 30556;break;case '𝝝':return 30557;break;case '𝝞':return 30558;break;case '𝝟':return 30559;break;case '𝝠':return 30560;break;case '𝝡':return 30561;break;case '𝝢':return 30562;break;case '𝝣':return 30563;break;case '𝝤':return 30564;break;case '𝝥':return 30565;break;case '𝝦':return 30566;break;case '𝝧':return 30567;break;case '𝝨':return 30568;break;case '𝝩':return 30569;break;case '𝝪':return 30570;break;case '𝝫':return 30571;break;case '𝝬':return 30572;break;case '𝝭':return 30573;break;case '𝝮':return 30574;break;case '𝝯':return 30575;break;case '𝝰':return 30576;break;case '𝝱':return 30577;break;case '𝝲':return 30578;break;case '𝝳':return 30579;break;case '𝝴':return 30580;break;case '𝝵':return 30581;break;case '𝝶':return 30582;break;case '𝝷':return 30583;break;case '𝝸':return 30584;break;case '𝝹':return 30585;break;case '𝝺':return 30586;break;case '𝝻':return 30587;break;case '𝝼':return 30588;break;case '𝝽':return 30589;break;case '𝝾':return 30590;break;case '𝝿':return 30591;break;case '𝞀':return 30592;break;case '𝞁':return 30593;break;case '𝞂':return 30594;break;case '𝞃':return 30595;break;case '𝞄':return 30596;break;case '𝞅':return 30597;break;case '𝞆':return 30598;break;case '𝞇':return 30599;break;case '𝞈':return 30600;break;case '𝞉':return 30601;break;case '𝞊':return 30602;break;case '𝞋':return 30603;break;case '𝞌':return 30604;break;case '𝞍':return 30605;break;case '𝞎':return 30606;break;case '𝞏':return 30607;break;case '𝞐':return 30608;break;case '𝞑':return 30609;break;case '𝞒':return 30610;break;case '𝞓':return 30611;break;case '𝞔':return 30612;break;case '𝞕':return 30613;break;case '𝞖':return 30614;break;case '𝞗':return 30615;break;case '𝞘':return 30616;break;case '𝞙':return 30617;break;case '𝞚':return 30618;break;case '𝞛':return 30619;break;case '𝞜':return 30620;break;case '𝞝':return 30621;break;case '𝞞':return 30622;break;case '𝞟':return 30623;break;case '𝞠':return 30624;break;case '𝞡':return 30625;break;case '𝞢':return 30626;break;case '𝞣':return 30627;break;case '𝞤':return 30628;break;case '𝞥':return 30629;break;case '𝞦':return 30630;break;case '𝞧':return 30631;break;case '𝞨':return 30632;break;case '𝞩':return 30633;break;case '𝞪':return 30634;break;case '𝞫':return 30635;break;case '𝞬':return 30636;break;case '𝞭':return 30637;break;case '𝞮':return 30638;break;case '𝞯':return 30639;break;case '𝞰':return 30640;break;case '𝞱':return 30641;break;case '𝞲':return 30642;break;case '𝞳':return 30643;break;case '𝞴':return 30644;break;case '𝞵':return 30645;break;case '𝞶':return 30646;break;case '𝞷':return 30647;break;case '𝞸':return 30648;break;case '𝞹':return 30649;break;case '𝞺':return 30650;break;case '𝞻':return 30651;break;case '𝞼':return 30652;break;case '𝞽':return 30653;break;case '𝞾':return 30654;break;case '𝞿':return 30655;break;case '𝟀':return 30656;break;case '𝟁':return 30657;break;case '𝟂':return 30658;break;case '𝟃':return 30659;break;case '𝟄':return 30660;break;case '𝟅':return 30661;break;case '𝟆':return 30662;break;case '𝟇':return 30663;break;case '𝟈':return 30664;break;case '𝟉':return 30665;break;case '𝟊':return 30666;break;case '𝟋':return 30667;break;case '𝟌':return 30668;break;case '𝟍':return 30669;break;case '𝟎':return 30670;break;case '𝟏':return 30671;break;case '𝟐':return 30672;break;case '𝟑':return 30673;break;case '𝟒':return 30674;break;case '𝟓':return 30675;break;case '𝟔':return 30676;break;case '𝟕':return 30677;break;case '𝟖':return 30678;break;case '𝟗':return 30679;break;case '𝟘':return 30680;break;case '𝟙':return 30681;break;case '𝟚':return 30682;break;case '𝟛':return 30683;break;case '𝟜':return 30684;break;case '𝟝':return 30685;break;case '𝟞':return 30686;break;case '𝟟':return 30687;break;case '𝟠':return 30688;break;case '𝟡':return 30689;break;case '𝟢':return 30690;break;case '𝟣':return 30691;break;case '𝟤':return 30692;break;case '𝟥':return 30693;break;case '𝟦':return 30694;break;case '𝟧':return 30695;break;case '𝟨':return 30696;break;case '𝟩':return 30697;break;case '𝟪':return 30698;break;case '𝟫':return 30699;break;case '𝟬':return 30700;break;case '𝟭':return 30701;break;case '𝟮':return 30702;break;case '𝟯':return 30703;break;case '𝟰':return 30704;break;case '𝟱':return 30705;break;case '𝟲':return 30706;break;case '𝟳':return 30707;break;case '𝟴':return 30708;break;case '𝟵':return 30709;break;case '𝟶':return 30710;break;case '𝟷':return 30711;break;case '𝟸':return 30712;break;case '𝟹':return 30713;break;case '𝟺':return 30714;break;case '𝟻':return 30715;break;case '𝟼':return 30716;break;case '𝟽':return 30717;break;case '𝟾':return 30718;break;case '𝟿':return 30719;break;case '🀀':return 36864;break;case '🀁':return 36865;break;case '🀂':return 36866;break;case '🀃':return 36867;break;case '🀄':return 36868;break;case '🀅':return 36869;break;case '🀆':return 36870;break;case '🀇':return 36871;break;case '🀈':return 36872;break;case '🀉':return 36873;break;case '🀊':return 36874;break;case '🀋':return 36875;break;case '🀌':return 36876;break;case '🀍':return 36877;break;case '🀎':return 36878;break;case '🀏':return 36879;break;case '🀐':return 36880;break;case '🀑':return 36881;break;case '🀒':return 36882;break;case '🀓':return 36883;break;case '🀔':return 36884;break;case '🀕':return 36885;break;case '🀖':return 36886;break;case '🀗':return 36887;break;case '🀘':return 36888;break;case '🀙':return 36889;break;case '🀚':return 36890;break;case '🀛':return 36891;break;case '🀜':return 36892;break;case '🀝':return 36893;break;case '🀞':return 36894;break;case '🀟':return 36895;break;case '🀠':return 36896;break;case '🀡':return 36897;break;case '🀢':return 36898;break;case '🀣':return 36899;break;case '🀤':return 36900;break;case '🀥':return 36901;break;case '🀦':return 36902;break;case '🀧':return 36903;break;case '🀨':return 36904;break;case '🀩':return 36905;break;case '🀪':return 36906;break;case '🀫':return 36907;break;case '🀬':return 36908;break;case '🀭':return 36909;break;case '🀮':return 36910;break;case '🀯':return 36911;break;case '🀰':return 36912;break;case '🀱':return 36913;break;case '🀲':return 36914;break;case '🀳':return 36915;break;case '🀴':return 36916;break;case '🀵':return 36917;break;case '🀶':return 36918;break;case '🀷':return 36919;break;case '🀸':return 36920;break;case '🀹':return 36921;break;case '🀺':return 36922;break;case '🀻':return 36923;break;case '🀼':return 36924;break;case '🀽':return 36925;break;case '🀾':return 36926;break;case '🀿':return 36927;break;case '🁀':return 36928;break;case '🁁':return 36929;break;case '🁂':return 36930;break;case '🁃':return 36931;break;case '🁄':return 36932;break;case '🁅':return 36933;break;case '🁆':return 36934;break;case '🁇':return 36935;break;case '🁈':return 36936;break;case '🁉':return 36937;break;case '🁊':return 36938;break;case '🁋':return 36939;break;case '🁌':return 36940;break;case '🁍':return 36941;break;case '🁎':return 36942;break;case '🁏':return 36943;break;case '🁐':return 36944;break;case '🁑':return 36945;break;case '🁒':return 36946;break;case '🁓':return 36947;break;case '🁔':return 36948;break;case '🁕':return 36949;break;case '🁖':return 36950;break;case '🁗':return 36951;break;case '🁘':return 36952;break;case '🁙':return 36953;break;case '🁚':return 36954;break;case '🁛':return 36955;break;case '🁜':return 36956;break;case '🁝':return 36957;break;case '🁞':return 36958;break;case '🁟':return 36959;break;case '🁠':return 36960;break;case '🁡':return 36961;break;case '🁢':return 36962;break;case '🁣':return 36963;break;case '🁤':return 36964;break;case '🁥':return 36965;break;case '🁦':return 36966;break;case '🁧':return 36967;break;case '🁨':return 36968;break;case '🁩':return 36969;break;case '🁪':return 36970;break;case '🁫':return 36971;break;case '🁬':return 36972;break;case '🁭':return 36973;break;case '🁮':return 36974;break;case '🁯':return 36975;break;case '🁰':return 36976;break;case '🁱':return 36977;break;case '🁲':return 36978;break;case '🁳':return 36979;break;case '🁴':return 36980;break;case '🁵':return 36981;break;case '🁶':return 36982;break;case '🁷':return 36983;break;case '🁸':return 36984;break;case '🁹':return 36985;break;case '🁺':return 36986;break;case '🁻':return 36987;break;case '🁼':return 36988;break;case '🁽':return 36989;break;case '🁾':return 36990;break;case '🁿':return 36991;break;case '🂀':return 36992;break;case '🂁':return 36993;break;case '🂂':return 36994;break;case '🂃':return 36995;break;case '🂄':return 36996;break;case '🂅':return 36997;break;case '🂆':return 36998;break;case '🂇':return 36999;break;case '🂈':return 37000;break;case '🂉':return 37001;break;case '🂊':return 37002;break;case '🂋':return 37003;break;case '🂌':return 37004;break;case '🂍':return 37005;break;case '🂎':return 37006;break;case '🂏':return 37007;break;case '🂐':return 37008;break;case '🂑':return 37009;break;case '🂒':return 37010;break;case '🂓':return 37011;break;case '🂔':return 37012;break;case '🂕':return 37013;break;case '🂖':return 37014;break;case '🂗':return 37015;break;case '🂘':return 37016;break;case '🂙':return 37017;break;case '🂚':return 37018;break;case '🂛':return 37019;break;case '🂜':return 37020;break;case '🂝':return 37021;break;case '🂞':return 37022;break;case '🂟':return 37023;break;case '🂠':return 37024;break;case '🂡':return 37025;break;case '🂢':return 37026;break;case '🂣':return 37027;break;case '🂤':return 37028;break;case '🂥':return 37029;break;case '🂦':return 37030;break;case '🂧':return 37031;break;case '🂨':return 37032;break;case '🂩':return 37033;break;case '🂪':return 37034;break;case '🂫':return 37035;break;case '🂬':return 37036;break;case '🂭':return 37037;break;case '🂮':return 37038;break;case '🂯':return 37039;break;case '🂰':return 37040;break;case '🂱':return 37041;break;case '🂲':return 37042;break;case '🂳':return 37043;break;case '🂴':return 37044;break;case '🂵':return 37045;break;case '🂶':return 37046;break;case '🂷':return 37047;break;case '🂸':return 37048;break;case '🂹':return 37049;break;case '🂺':return 37050;break;case '🂻':return 37051;break;case '🂼':return 37052;break;case '🂽':return 37053;break;case '🂾':return 37054;break;case '🂿':return 37055;break;case '🃀':return 37056;break;case '🃁':return 37057;break;case '🃂':return 37058;break;case '🃃':return 37059;break;case '🃄':return 37060;break;case '🃅':return 37061;break;case '🃆':return 37062;break;case '🃇':return 37063;break;case '🃈':return 37064;break;case '🃉':return 37065;break;case '🃊':return 37066;break;case '🃋':return 37067;break;case '🃌':return 37068;break;case '🃍':return 37069;break;case '🃎':return 37070;break;case '🃏':return 37071;break;case '🃐':return 37072;break;case '🃑':return 37073;break;case '🃒':return 37074;break;case '🃓':return 37075;break;case '🃔':return 37076;break;case '🃕':return 37077;break;case '🃖':return 37078;break;case '🃗':return 37079;break;case '🃘':return 37080;break;case '🃙':return 37081;break;case '🃚':return 37082;break;case '🃛':return 37083;break;case '🃜':return 37084;break;case '🃝':return 37085;break;case '🃞':return 37086;break;case '🃟':return 37087;break;case '🃠':return 37088;break;case '🃡':return 37089;break;case '🃢':return 37090;break;case '🃣':return 37091;break;case '🃤':return 37092;break;case '🃥':return 37093;break;case '🃦':return 37094;break;case '🃧':return 37095;break;case '🃨':return 37096;break;case '🃩':return 37097;break;case '🃪':return 37098;break;case '🃫':return 37099;break;case '🃬':return 37100;break;case '🃭':return 37101;break;case '🃮':return 37102;break;case '🃯':return 37103;break;case '🃰':return 37104;break;case '🃱':return 37105;break;case '🃲':return 37106;break;case '🃳':return 37107;break;case '🃴':return 37108;break;case '🃵':return 37109;break;case '🄀':return 37120;break;case '🄁':return 37121;break;case '🄂':return 37122;break;case '🄃':return 37123;break;case '🄄':return 37124;break;case '🄅':return 37125;break;case '🄆':return 37126;break;case '🄇':return 37127;break;case '🄈':return 37128;break;case '🄉':return 37129;break;case '🄊':return 37130;break;case '🄋':return 37131;break;case '🄌':return 37132;break;case '🄍':return 37133;break;case '🄎':return 37134;break;case '🄏':return 37135;break;case '🄐':return 37136;break;case '🄑':return 37137;break;case '🄒':return 37138;break;case '🄓':return 37139;break;case '🄔':return 37140;break;case '🄕':return 37141;break;case '🄖':return 37142;break;case '🄗':return 37143;break;case '🄘':return 37144;break;case '🄙':return 37145;break;case '🄚':return 37146;break;case '🄛':return 37147;break;case '🄜':return 37148;break;case '🄝':return 37149;break;case '🄞':return 37150;break;case '🄟':return 37151;break;case '🄠':return 37152;break;case '🄡':return 37153;break;case '🄢':return 37154;break;case '🄣':return 37155;break;case '🄤':return 37156;break;case '🄥':return 37157;break;case '🄦':return 37158;break;case '🄧':return 37159;break;case '🄨':return 37160;break;case '🄩':return 37161;break;case '🄪':return 37162;break;case '🄫':return 37163;break;case '🄬':return 37164;break;case '🄭':return 37165;break;case '🄮':return 37166;break;case '🄯':return 37167;break;case '🄰':return 37168;break;case '🄱':return 37169;break;case '🄲':return 37170;break;case '🄳':return 37171;break;case '🄴':return 37172;break;case '🄵':return 37173;break;case '🄶':return 37174;break;case '🄷':return 37175;break;case '🄸':return 37176;break;case '🄹':return 37177;break;case '🄺':return 37178;break;case '🄻':return 37179;break;case '🄼':return 37180;break;case '🄽':return 37181;break;case '🄾':return 37182;break;case '🄿':return 37183;break;case '🅀':return 37184;break;case '🅁':return 37185;break;case '🅂':return 37186;break;case '🅃':return 37187;break;case '🅄':return 37188;break;case '🅅':return 37189;break;case '🅆':return 37190;break;case '🅇':return 37191;break;case '🅈':return 37192;break;case '🅉':return 37193;break;case '🅊':return 37194;break;case '🅋':return 37195;break;case '🅌':return 37196;break;case '🅍':return 37197;break;case '🅎':return 37198;break;case '🅏':return 37199;break;case '🅐':return 37200;break;case '🅑':return 37201;break;case '🅒':return 37202;break;case '🅓':return 37203;break;case '🅔':return 37204;break;case '🅕':return 37205;break;case '🅖':return 37206;break;case '🅗':return 37207;break;case '🅘':return 37208;break;case '🅙':return 37209;break;case '🅚':return 37210;break;case '🅛':return 37211;break;case '🅜':return 37212;break;case '🅝':return 37213;break;case '🅞':return 37214;break;case '🅟':return 37215;break;case '🅠':return 37216;break;case '🅡':return 37217;break;case '🅢':return 37218;break;case '🅣':return 37219;break;case '🅤':return 37220;break;case '🅥':return 37221;break;case '🅦':return 37222;break;case '🅧':return 37223;break;case '🅨':return 37224;break;case '🅩':return 37225;break;case '🅪':return 37226;break;case '🅫':return 37227;break;case '🅬':return 37228;break;case '🅭':return 37229;break;case '🅮':return 37230;break;case '🅯':return 37231;break;case '🅰':return 37232;break;case '🅱':return 37233;break;case '🅲':return 37234;break;case '🅳':return 37235;break;case '🅴':return 37236;break;case '🅵':return 37237;break;case '🅶':return 37238;break;case '🅷':return 37239;break;case '🅸':return 37240;break;case '🅹':return 37241;break;case '🅺':return 37242;break;case '🅻':return 37243;break;case '🅼':return 37244;break;case '🅽':return 37245;break;case '🅾':return 37246;break;case '🅿':return 37247;break;case '🆀':return 37248;break;case '🆁':return 37249;break;case '🆂':return 37250;break;case '🆃':return 37251;break;case '🆄':return 37252;break;case '🆅':return 37253;break;case '🆆':return 37254;break;case '🆇':return 37255;break;case '🆈':return 37256;break;case '🆉':return 37257;break;case '🆊':return 37258;break;case '🆋':return 37259;break;case '🆌':return 37260;break;case '🆍':return 37261;break;case '🆎':return 37262;break;case '🆏':return 37263;break;case '🆐':return 37264;break;case '🆑':return 37265;break;case '🆒':return 37266;break;case '🆓':return 37267;break;case '🆔':return 37268;break;case '🆕':return 37269;break;case '🆖':return 37270;break;case '🆗':return 37271;break;case '🆘':return 37272;break;case '🆙':return 37273;break;case '🆚':return 37274;break;case '🇦':return 37350;break;case '🇧':return 37351;break;case '🇨':return 37352;break;case '🇩':return 37353;break;case '🇪':return 37354;break;case '🇫':return 37355;break;case '🇬':return 37356;break;case '🇭':return 37357;break;case '🇮':return 37358;break;case '🇯':return 37359;break;case '🇰':return 37360;break;case '🇱':return 37361;break;case '🇲':return 37362;break;case '🇳':return 37363;break;case '🇴':return 37364;break;case '🇵':return 37365;break;case '🇶':return 37366;break;case '🇷':return 37367;break;case '🇸':return 37368;break;case '🇹':return 37369;break;case '🇺':return 37370;break;case '🇻':return 37371;break;case '🇼':return 37372;break;case '🇽':return 37373;break;case '🇾':return 37374;break;case '🇿':return 37375;break;case '🈀':return 37376;break;case '🈁':return 37377;break;case '🈂':return 37378;break;case '🈐':return 37392;break;case '🈑':return 37393;break;case '🈒':return 37394;break;case '🈓':return 37395;break;case '🈔':return 37396;break;case '🈕':return 37397;break;case '🈖':return 37398;break;case '🈗':return 37399;break;case '🈘':return 37400;break;case '🈙':return 37401;break;case '🈚':return 37402;break;case '🈛':return 37403;break;case '🈜':return 37404;break;case '🈝':return 37405;break;case '🈞':return 37406;break;case '🈟':return 37407;break;case '🈠':return 37408;break;case '🈡':return 37409;break;case '🈢':return 37410;break;case '🈣':return 37411;break;case '🈤':return 37412;break;case '🈥':return 37413;break;case '🈦':return 37414;break;case '🈧':return 37415;break;case '🈨':return 37416;break;case '🈩':return 37417;break;case '🈪':return 37418;break;case '🈫':return 37419;break;case '🈬':return 37420;break;case '🈭':return 37421;break;case '🈮':return 37422;break;case '🈯':return 37423;break;case '🈰':return 37424;break;case '🈱':return 37425;break;case '🈲':return 37426;break;case '🈳':return 37427;break;case '🈴':return 37428;break;case '🈵':return 37429;break;case '🈶':return 37430;break;case '🈷':return 37431;break;case '🈸':return 37432;break;case '🈹':return 37433;break;case '🈺':return 37434;break;case '🉀':return 37440;break;case '🉁':return 37441;break;case '🉂':return 37442;break;case '🉃':return 37443;break;case '🉄':return 37444;break;case '🉅':return 37445;break;case '🉆':return 37446;break;case '🉇':return 37447;break;case '🉈':return 37448;break;case '🉐':return 37456;break;case '🉑':return 37457;break;case '🌀':return 37632;break;case '🌁':return 37633;break;case '🌂':return 37634;break;case '🌃':return 37635;break;case '🌄':return 37636;break;case '🌅':return 37637;break;case '🌆':return 37638;break;case '🌇':return 37639;break;case '🌈':return 37640;break;case '🌉':return 37641;break;case '🌊':return 37642;break;case '🌋':return 37643;break;case '🌌':return 37644;break;case '🌍':return 37645;break;case '🌎':return 37646;break;case '🌏':return 37647;break;case '🌐':return 37648;break;case '🌑':return 37649;break;case '🌒':return 37650;break;case '🌓':return 37651;break;case '🌔':return 37652;break;case '🌕':return 37653;break;case '🌖':return 37654;break;case '🌗':return 37655;break;case '🌘':return 37656;break;case '🌙':return 37657;break;case '🌚':return 37658;break;case '🌛':return 37659;break;case '🌜':return 37660;break;case '🌝':return 37661;break;case '🌞':return 37662;break;case '🌟':return 37663;break;case '🌠':return 37664;break;case '🌡':return 37665;break;case '🌢':return 37666;break;case '🌣':return 37667;break;case '🌤':return 37668;break;case '🌥':return 37669;break;case '🌦':return 37670;break;case '🌧':return 37671;break;case '🌨':return 37672;break;case '🌩':return 37673;break;case '🌪':return 37674;break;case '🌫':return 37675;break;case '🌬':return 37676;break;case '🌭':return 37677;break;case '🌮':return 37678;break;case '🌯':return 37679;break;case '🌰':return 37680;break;case '🌱':return 37681;break;case '🌲':return 37682;break;case '🌳':return 37683;break;case '🌴':return 37684;break;case '🌵':return 37685;break;case '🌶':return 37686;break;case '🌷':return 37687;break;case '🌸':return 37688;break;case '🌹':return 37689;break;case '🌺':return 37690;break;case '🌻':return 37691;break;case '🌼':return 37692;break;case '🌽':return 37693;break;case '🌾':return 37694;break;case '🌿':return 37695;break;case '🍀':return 37696;break;case '🍁':return 37697;break;case '🍂':return 37698;break;case '🍃':return 37699;break;case '🍄':return 37700;break;case '🍅':return 37701;break;case '🍆':return 37702;break;case '🍇':return 37703;break;case '🍈':return 37704;break;case '🍉':return 37705;break;case '🍊':return 37706;break;case '🍋':return 37707;break;case '🍌':return 37708;break;case '🍍':return 37709;break;case '🍎':return 37710;break;case '🍏':return 37711;break;case '🍐':return 37712;break;case '🍑':return 37713;break;case '🍒':return 37714;break;case '🍓':return 37715;break;case '🍔':return 37716;break;case '🍕':return 37717;break;case '🍖':return 37718;break;case '🍗':return 37719;break;case '🍘':return 37720;break;case '🍙':return 37721;break;case '🍚':return 37722;break;case '🍛':return 37723;break;case '🍜':return 37724;break;case '🍝':return 37725;break;case '🍞':return 37726;break;case '🍟':return 37727;break;case '🍠':return 37728;break;case '🍡':return 37729;break;case '🍢':return 37730;break;case '🍣':return 37731;break;case '🍤':return 37732;break;case '🍥':return 37733;break;case '🍦':return 37734;break;case '🍧':return 37735;break;case '🍨':return 37736;break;case '🍩':return 37737;break;case '🍪':return 37738;break;case '🍫':return 37739;break;case '🍬':return 37740;break;case '🍭':return 37741;break;case '🍮':return 37742;break;case '🍯':return 37743;break;case '🍰':return 37744;break;case '🍱':return 37745;break;case '🍲':return 37746;break;case '🍳':return 37747;break;case '🍴':return 37748;break;case '🍵':return 37749;break;case '🍶':return 37750;break;case '🍷':return 37751;break;case '🍸':return 37752;break;case '🍹':return 37753;break;case '🍺':return 37754;break;case '🍻':return 37755;break;case '🍼':return 37756;break;case '🍽':return 37757;break;case '🍾':return 37758;break;case '🍿':return 37759;break;case '🎀':return 37760;break;case '🎁':return 37761;break;case '🎂':return 37762;break;case '🎃':return 37763;break;case '🎄':return 37764;break;case '🎅':return 37765;break;case '🎆':return 37766;break;case '🎇':return 37767;break;case '🎈':return 37768;break;case '🎉':return 37769;break;case '🎊':return 37770;break;case '🎋':return 37771;break;case '🎌':return 37772;break;case '🎍':return 37773;break;case '🎎':return 37774;break;case '🎏':return 37775;break;case '🎐':return 37776;break;case '🎑':return 37777;break;case '🎒':return 37778;break;case '🎓':return 37779;break;case '🎔':return 37780;break;case '🎕':return 37781;break;case '🎖':return 37782;break;case '🎗':return 37783;break;case '🎘':return 37784;break;case '🎙':return 37785;break;case '🎚':return 37786;break;case '🎛':return 37787;break;case '🎜':return 37788;break;case '🎝':return 37789;break;case '🎞':return 37790;break;case '🎟':return 37791;break;case '🎠':return 37792;break;case '🎡':return 37793;break;case '🎢':return 37794;break;case '🎣':return 37795;break;case '🎤':return 37796;break;case '🎥':return 37797;break;case '🎦':return 37798;break;case '🎧':return 37799;break;case '🎨':return 37800;break;case '🎩':return 37801;break;case '🎪':return 37802;break;case '🎫':return 37803;break;case '🎬':return 37804;break;case '🎭':return 37805;break;case '🎮':return 37806;break;case '🎯':return 37807;break;case '🎰':return 37808;break;case '🎱':return 37809;break;case '🎲':return 37810;break;case '🎳':return 37811;break;case '🎴':return 37812;break;case '🎵':return 37813;break;case '🎶':return 37814;break;case '🎷':return 37815;break;case '🎸':return 37816;break;case '🎹':return 37817;break;case '🎺':return 37818;break;case '🎻':return 37819;break;case '🎼':return 37820;break;case '🎽':return 37821;break;case '🎾':return 37822;break;case '🎿':return 37823;break;case '🏀':return 37824;break;case '🏁':return 37825;break;case '🏂':return 37826;break;case '🏃':return 37827;break;case '🏄':return 37828;break;case '🏅':return 37829;break;case '🏆':return 37830;break;case '🏇':return 37831;break;case '🏈':return 37832;break;case '🏉':return 37833;break;case '🏊':return 37834;break;case '🏋':return 37835;break;case '🏌':return 37836;break;case '🏍':return 37837;break;case '🏎':return 37838;break;case '🏏':return 37839;break;case '🏐':return 37840;break;case '🏑':return 37841;break;case '🏒':return 37842;break;case '🏓':return 37843;break;case '🏔':return 37844;break;case '🏕':return 37845;break;case '🏖':return 37846;break;case '🏗':return 37847;break;case '🏘':return 37848;break;case '🏙':return 37849;break;case '🏚':return 37850;break;case '🏛':return 37851;break;case '🏜':return 37852;break;case '🏝':return 37853;break;case '🏞':return 37854;break;case '🏟':return 37855;break;case '🏠':return 37856;break;case '🏡':return 37857;break;case '🏢':return 37858;break;case '🏣':return 37859;break;case '🏤':return 37860;break;case '🏥':return 37861;break;case '🏦':return 37862;break;case '🏧':return 37863;break;case '🏨':return 37864;break;case '🏩':return 37865;break;case '🏪':return 37866;break;case '🏫':return 37867;break;case '🏬':return 37868;break;case '🏭':return 37869;break;case '🏮':return 37870;break;case '🏯':return 37871;break;case '🏰':return 37872;break;case '🏱':return 37873;break;case '🏲':return 37874;break;case '🏳':return 37875;break;case '🏴':return 37876;break;case '🏵':return 37877;break;case '🏶':return 37878;break;case '🏷':return 37879;break;case '🏸':return 37880;break;case '🏹':return 37881;break;case '🏺':return 37882;break;case '🏻':return 37883;break;case '🏼':return 37884;break;case '🏽':return 37885;break;case '🏾':return 37886;break;case '🏿':return 37887;break;case '🐀':return 37888;break;case '🐁':return 37889;break;case '🐂':return 37890;break;case '🐃':return 37891;break;case '🐄':return 37892;break;case '🐅':return 37893;break;case '🐆':return 37894;break;case '🐇':return 37895;break;case '🐈':return 37896;break;case '🐉':return 37897;break;case '🐊':return 37898;break;case '🐋':return 37899;break;case '🐌':return 37900;break;case '🐍':return 37901;break;case '🐎':return 37902;break;case '🐏':return 37903;break;case '🐐':return 37904;break;case '🐑':return 37905;break;case '🐒':return 37906;break;case '🐓':return 37907;break;case '🐔':return 37908;break;case '🐕':return 37909;break;case '🐖':return 37910;break;case '🐗':return 37911;break;case '🐘':return 37912;break;case '🐙':return 37913;break;case '🐚':return 37914;break;case '🐛':return 37915;break;case '🐜':return 37916;break;case '🐝':return 37917;break;case '🐞':return 37918;break;case '🐟':return 37919;break;case '🐠':return 37920;break;case '🐡':return 37921;break;case '🐢':return 37922;break;case '🐣':return 37923;break;case '🐤':return 37924;break;case '🐥':return 37925;break;case '🐦':return 37926;break;case '🐧':return 37927;break;case '🐨':return 37928;break;case '🐩':return 37929;break;case '🐪':return 37930;break;case '🐫':return 37931;break;case '🐬':return 37932;break;case '🐭':return 37933;break;case '🐮':return 37934;break;case '🐯':return 37935;break;case '🐰':return 37936;break;case '🐱':return 37937;break;case '🐲':return 37938;break;case '🐳':return 37939;break;case '🐴':return 37940;break;case '🐵':return 37941;break;case '🐶':return 37942;break;case '🐷':return 37943;break;case '🐸':return 37944;break;case '🐹':return 37945;break;case '🐺':return 37946;break;case '🐻':return 37947;break;case '🐼':return 37948;break;case '🐽':return 37949;break;case '🐾':return 37950;break;case '🐿':return 37951;break;case '👀':return 37952;break;case '👁':return 37953;break;case '👂':return 37954;break;case '👃':return 37955;break;case '👄':return 37956;break;case '👅':return 37957;break;case '👆':return 37958;break;case '👇':return 37959;break;case '👈':return 37960;break;case '👉':return 37961;break;case '👊':return 37962;break;case '👋':return 37963;break;case '👌':return 37964;break;case '👍':return 37965;break;case '👎':return 37966;break;case '👏':return 37967;break;case '👐':return 37968;break;case '👑':return 37969;break;case '👒':return 37970;break;case '👓':return 37971;break;case '👔':return 37972;break;case '👕':return 37973;break;case '👖':return 37974;break;case '👗':return 37975;break;case '👘':return 37976;break;case '👙':return 37977;break;case '👚':return 37978;break;case '👛':return 37979;break;case '👜':return 37980;break;case '👝':return 37981;break;case '👞':return 37982;break;case '👟':return 37983;break;case '👠':return 37984;break;case '👡':return 37985;break;case '👢':return 37986;break;case '👣':return 37987;break;case '👤':return 37988;break;case '👥':return 37989;break;case '👦':return 37990;break;case '👧':return 37991;break;case '👨':return 37992;break;case '👩':return 37993;break;case '👪':return 37994;break;case '👫':return 37995;break;case '👬':return 37996;break;case '👭':return 37997;break;case '👮':return 37998;break;case '👯':return 37999;break;case '👰':return 38000;break;case '👱':return 38001;break;case '👲':return 38002;break;case '👳':return 38003;break;case '👴':return 38004;break;case '👵':return 38005;break;case '👶':return 38006;break;case '👷':return 38007;break;case '👸':return 38008;break;case '👹':return 38009;break;case '👺':return 38010;break;case '👻':return 38011;break;case '👼':return 38012;break;case '👽':return 38013;break;case '👾':return 38014;break;case '👿':return 38015;break;case '💀':return 38016;break;case '💁':return 38017;break;case '💂':return 38018;break;case '💃':return 38019;break;case '💄':return 38020;break;case '💅':return 38021;break;case '💆':return 38022;break;case '💇':return 38023;break;case '💈':return 38024;break;case '💉':return 38025;break;case '💊':return 38026;break;case '💋':return 38027;break;case '💌':return 38028;break;case '💍':return 38029;break;case '💎':return 38030;break;case '💏':return 38031;break;case '💐':return 38032;break;case '💑':return 38033;break;case '💒':return 38034;break;case '💓':return 38035;break;case '💔':return 38036;break;case '💕':return 38037;break;case '💖':return 38038;break;case '💗':return 38039;break;case '💘':return 38040;break;case '💙':return 38041;break;case '💚':return 38042;break;case '💛':return 38043;break;case '💜':return 38044;break;case '💝':return 38045;break;case '💞':return 38046;break;case '💟':return 38047;break;case '💠':return 38048;break;case '💡':return 38049;break;case '💢':return 38050;break;case '💣':return 38051;break;case '💤':return 38052;break;case '💥':return 38053;break;case '💦':return 38054;break;case '💧':return 38055;break;case '💨':return 38056;break;case '💩':return 38057;break;case '💪':return 38058;break;case '💫':return 38059;break;case '💬':return 38060;break;case '💭':return 38061;break;case '💮':return 38062;break;case '💯':return 38063;break;case '💰':return 38064;break;case '💱':return 38065;break;case '💲':return 38066;break;case '💳':return 38067;break;case '💴':return 38068;break;case '💵':return 38069;break;case '💶':return 38070;break;case '💷':return 38071;break;case '💸':return 38072;break;case '💹':return 38073;break;case '💺':return 38074;break;case '💻':return 38075;break;case '💼':return 38076;break;case '💽':return 38077;break;case '💾':return 38078;break;case '💿':return 38079;break;case '📀':return 38080;break;case '📁':return 38081;break;case '📂':return 38082;break;case '📃':return 38083;break;case '📄':return 38084;break;case '📅':return 38085;break;case '📆':return 38086;break;case '📇':return 38087;break;case '📈':return 38088;break;case '📉':return 38089;break;case '📊':return 38090;break;case '📋':return 38091;break;case '📌':return 38092;break;case '📍':return 38093;break;case '📎':return 38094;break;case '📏':return 38095;break;case '📐':return 38096;break;case '📑':return 38097;break;case '📒':return 38098;break;case '📓':return 38099;break;case '📔':return 38100;break;case '📕':return 38101;break;case '📖':return 38102;break;case '📗':return 38103;break;case '📘':return 38104;break;case '📙':return 38105;break;case '📚':return 38106;break;case '📛':return 38107;break;case '📜':return 38108;break;case '📝':return 38109;break;case '📞':return 38110;break;case '📟':return 38111;break;case '📠':return 38112;break;case '📡':return 38113;break;case '📢':return 38114;break;case '📣':return 38115;break;case '📤':return 38116;break;case '📥':return 38117;break;case '📦':return 38118;break;case '📧':return 38119;break;case '📨':return 38120;break;case '📩':return 38121;break;case '📪':return 38122;break;case '📫':return 38123;break;case '📬':return 38124;break;case '📭':return 38125;break;case '📮':return 38126;break;case '📯':return 38127;break;case '📰':return 38128;break;case '📱':return 38129;break;case '📲':return 38130;break;case '📳':return 38131;break;case '📴':return 38132;break;case '📵':return 38133;break;case '📶':return 38134;break;case '📷':return 38135;break;case '📸':return 38136;break;case '📹':return 38137;break;case '📺':return 38138;break;case '📻':return 38139;break;case '📼':return 38140;break;case '📽':return 38141;break;case '📾':return 38142;break;case '📿':return 38143;break;case '🔀':return 38144;break;case '🔁':return 38145;break;case '🔂':return 38146;break;case '🔃':return 38147;break;case '🔄':return 38148;break;case '🔅':return 38149;break;case '🔆':return 38150;break;case '🔇':return 38151;break;case '🔈':return 38152;break;case '🔉':return 38153;break;case '🔊':return 38154;break;case '🔋':return 38155;break;case '🔌':return 38156;break;case '🔍':return 38157;break;case '🔎':return 38158;break;case '🔏':return 38159;break;case '🔐':return 38160;break;case '🔑':return 38161;break;case '🔒':return 38162;break;case '🔓':return 38163;break;case '🔔':return 38164;break;case '🔕':return 38165;break;case '🔖':return 38166;break;case '🔗':return 38167;break;case '🔘':return 38168;break;case '🔙':return 38169;break;case '🔚':return 38170;break;case '🔛':return 38171;break;case '🔜':return 38172;break;case '🔝':return 38173;break;case '🔞':return 38174;break;case '🔟':return 38175;break;case '🔠':return 38176;break;case '🔡':return 38177;break;case '🔢':return 38178;break;case '🔣':return 38179;break;case '🔤':return 38180;break;case '🔥':return 38181;break;case '🔦':return 38182;break;case '🔧':return 38183;break;case '🔨':return 38184;break;case '🔩':return 38185;break;case '🔪':return 38186;break;case '🔫':return 38187;break;case '🔬':return 38188;break;case '🔭':return 38189;break;case '🔮':return 38190;break;case '🔯':return 38191;break;case '🔰':return 38192;break;case '🔱':return 38193;break;case '🔲':return 38194;break;case '🔳':return 38195;break;case '🔴':return 38196;break;case '🔵':return 38197;break;case '🔶':return 38198;break;case '🔷':return 38199;break;case '🔸':return 38200;break;case '🔹':return 38201;break;case '🔺':return 38202;break;case '🔻':return 38203;break;case '🔼':return 38204;break;case '🔽':return 38205;break;case '🔾':return 38206;break;case '🔿':return 38207;break;case '🕀':return 38208;break;case '🕁':return 38209;break;case '🕂':return 38210;break;case '🕃':return 38211;break;case '🕄':return 38212;break;case '🕅':return 38213;break;case '🕆':return 38214;break;case '🕇':return 38215;break;case '🕈':return 38216;break;case '🕉':return 38217;break;case '🕊':return 38218;break;case '🕋':return 38219;break;case '🕌':return 38220;break;case '🕍':return 38221;break;case '🕎':return 38222;break;case '🕏':return 38223;break;case '🕐':return 38224;break;case '🕑':return 38225;break;case '🕒':return 38226;break;case '🕓':return 38227;break;case '🕔':return 38228;break;case '🕕':return 38229;break;case '🕖':return 38230;break;case '🕗':return 38231;break;case '🕘':return 38232;break;case '🕙':return 38233;break;case '🕚':return 38234;break;case '🕛':return 38235;break;case '🕜':return 38236;break;case '🕝':return 38237;break;case '🕞':return 38238;break;case '🕟':return 38239;break;case '🕠':return 38240;break;case '🕡':return 38241;break;case '🕢':return 38242;break;case '🕣':return 38243;break;case '🕤':return 38244;break;case '🕥':return 38245;break;case '🕦':return 38246;break;case '🕧':return 38247;break;case '🕨':return 38248;break;case '🕩':return 38249;break;case '🕪':return 38250;break;case '🕫':return 38251;break;case '🕬':return 38252;break;case '🕭':return 38253;break;case '🕮':return 38254;break;case '🕯':return 38255;break;case '🕰':return 38256;break;case '🕱':return 38257;break;case '🕲':return 38258;break;case '🕳':return 38259;break;case '🕴':return 38260;break;case '🕵':return 38261;break;case '🕶':return 38262;break;case '🕷':return 38263;break;case '🕸':return 38264;break;case '🕹':return 38265;break;case '🕺':return 38266;break;case '🕻':return 38267;break;case '🕼':return 38268;break;case '🕽':return 38269;break;case '🕾':return 38270;break;case '🕿':return 38271;break;case '🖀':return 38272;break;case '🖁':return 38273;break;case '🖂':return 38274;break;case '🖃':return 38275;break;case '🖄':return 38276;break;case '🖅':return 38277;break;case '🖆':return 38278;break;case '🖇':return 38279;break;case '🖈':return 38280;break;case '🖉':return 38281;break;case '🖊':return 38282;break;case '🖋':return 38283;break;case '🖌':return 38284;break;case '🖍':return 38285;break;case '🖎':return 38286;break;case '🖏':return 38287;break;case '🖐':return 38288;break;case '🖑':return 38289;break;case '🖒':return 38290;break;case '🖓':return 38291;break;case '🖔':return 38292;break;case '🖕':return 38293;break;case '🖖':return 38294;break;case '🖗':return 38295;break;case '🖘':return 38296;break;case '🖙':return 38297;break;case '🖚':return 38298;break;case '🖛':return 38299;break;case '🖜':return 38300;break;case '🖝':return 38301;break;case '🖞':return 38302;break;case '🖟':return 38303;break;case '🖠':return 38304;break;case '🖡':return 38305;break;case '🖢':return 38306;break;case '🖣':return 38307;break;case '🖤':return 38308;break;case '🖥':return 38309;break;case '🖦':return 38310;break;case '🖧':return 38311;break;case '🖨':return 38312;break;case '🖩':return 38313;break;case '🖪':return 38314;break;case '🖫':return 38315;break;case '🖬':return 38316;break;case '🖭':return 38317;break;case '🖮':return 38318;break;case '🖯':return 38319;break;case '🖰':return 38320;break;case '🖱':return 38321;break;case '🖲':return 38322;break;case '🖳':return 38323;break;case '🖴':return 38324;break;case '🖵':return 38325;break;case '🖶':return 38326;break;case '🖷':return 38327;break;case '🖸':return 38328;break;case '🖹':return 38329;break;case '🖺':return 38330;break;case '🖻':return 38331;break;case '🖼':return 38332;break;case '🖽':return 38333;break;case '🖾':return 38334;break;case '🖿':return 38335;break;case '🗀':return 38336;break;case '🗁':return 38337;break;case '🗂':return 38338;break;case '🗃':return 38339;break;case '🗄':return 38340;break;case '🗅':return 38341;break;case '🗆':return 38342;break;case '🗇':return 38343;break;case '🗈':return 38344;break;case '🗉':return 38345;break;case '🗊':return 38346;break;case '🗋':return 38347;break;case '🗌':return 38348;break;case '🗍':return 38349;break;case '🗎':return 38350;break;case '🗏':return 38351;break;case '🗐':return 38352;break;case '🗑':return 38353;break;case '🗒':return 38354;break;case '🗓':return 38355;break;case '🗔':return 38356;break;case '🗕':return 38357;break;case '🗖':return 38358;break;case '🗗':return 38359;break;case '🗘':return 38360;break;case '🗙':return 38361;break;case '🗚':return 38362;break;case '🗛':return 38363;break;case '🗜':return 38364;break;case '🗝':return 38365;break;case '🗞':return 38366;break;case '🗟':return 38367;break;case '🗠':return 38368;break;case '🗡':return 38369;break;case '🗢':return 38370;break;case '🗣':return 38371;break;case '🗤':return 38372;break;case '🗥':return 38373;break;case '🗦':return 38374;break;case '🗧':return 38375;break;case '🗨':return 38376;break;case '🗩':return 38377;break;case '🗪':return 38378;break;case '🗫':return 38379;break;case '🗬':return 38380;break;case '🗭':return 38381;break;case '🗮':return 38382;break;case '🗯':return 38383;break;case '🗰':return 38384;break;case '🗱':return 38385;break;case '🗲':return 38386;break;case '🗳':return 38387;break;case '🗴':return 38388;break;case '🗵':return 38389;break;case '🗶':return 38390;break;case '🗷':return 38391;break;case '🗸':return 38392;break;case '🗹':return 38393;break;case '🗺':return 38394;break;case '🗻':return 38395;break;case '🗼':return 38396;break;case '🗽':return 38397;break;case '🗾':return 38398;break;case '🗿':return 38399;break;case '😀':return 38400;break;case '😁':return 38401;break;case '😂':return 38402;break;case '😃':return 38403;break;case '😄':return 38404;break;case '😅':return 38405;break;case '😆':return 38406;break;case '😇':return 38407;break;case '😈':return 38408;break;case '😉':return 38409;break;case '😊':return 38410;break;case '😋':return 38411;break;case '😌':return 38412;break;case '😍':return 38413;break;case '😎':return 38414;break;case '😏':return 38415;break;case '😐':return 38416;break;case '😑':return 38417;break;case '😒':return 38418;break;case '😓':return 38419;break;case '😔':return 38420;break;case '😕':return 38421;break;case '😖':return 38422;break;case '😗':return 38423;break;case '😘':return 38424;break;case '😙':return 38425;break;case '😚':return 38426;break;case '😛':return 38427;break;case '😜':return 38428;break;case '😝':return 38429;break;case '😞':return 38430;break;case '😟':return 38431;break;case '😠':return 38432;break;case '😡':return 38433;break;case '😢':return 38434;break;case '😣':return 38435;break;case '😤':return 38436;break;case '😥':return 38437;break;case '😦':return 38438;break;case '😧':return 38439;break;case '😨':return 38440;break;case '😩':return 38441;break;case '😪':return 38442;break;case '😫':return 38443;break;case '😬':return 38444;break;case '😭':return 38445;break;case '😮':return 38446;break;case '😯':return 38447;break;case '😰':return 38448;break;case '😱':return 38449;break;case '😲':return 38450;break;case '😳':return 38451;break;case '😴':return 38452;break;case '😵':return 38453;break;case '😶':return 38454;break;case '😷':return 38455;break;case '😸':return 38456;break;case '😹':return 38457;break;case '😺':return 38458;break;case '😻':return 38459;break;case '😼':return 38460;break;case '😽':return 38461;break;case '😾':return 38462;break;case '😿':return 38463;break;case '🙀':return 38464;break;case '🙁':return 38465;break;case '🙂':return 38466;break;case '🙃':return 38467;break;case '🙄':return 38468;break;case '🙅':return 38469;break;case '🙆':return 38470;break;case '🙇':return 38471;break;case '🙈':return 38472;break;case '🙉':return 38473;break;case '🙊':return 38474;break;case '🙋':return 38475;break;case '🙌':return 38476;break;case '🙍':return 38477;break;case '🙎':return 38478;break;case '🙏':return 38479;break;case '🙐':return 38480;break;case '🙑':return 38481;break;case '🙒':return 38482;break;case '🙓':return 38483;break;case '🙔':return 38484;break;case '🙕':return 38485;break;case '🙖':return 38486;break;case '🙗':return 38487;break;case '🙘':return 38488;break;case '🙙':return 38489;break;case '🙚':return 38490;break;case '🙛':return 38491;break;case '🙜':return 38492;break;case '🙝':return 38493;break;case '🙞':return 38494;break;case '🙟':return 38495;break;case '🙠':return 38496;break;case '🙡':return 38497;break;case '🙢':return 38498;break;case '🙣':return 38499;break;case '🙤':return 38500;break;case '🙥':return 38501;break;case '🙦':return 38502;break;case '🙧':return 38503;break;case '🙨':return 38504;break;case '🙩':return 38505;break;case '🙪':return 38506;break;case '🙫':return 38507;break;case '🙬':return 38508;break;case '🙭':return 38509;break;case '🙮':return 38510;break;case '🙯':return 38511;break;case '🙰':return 38512;break;case '🙱':return 38513;break;case '🙲':return 38514;break;case '🙳':return 38515;break;case '🙴':return 38516;break;case '🙵':return 38517;break;case '🙶':return 38518;break;case '🙷':return 38519;break;case '🙸':return 38520;break;case '🙹':return 38521;break;case '🙺':return 38522;break;case '🙻':return 38523;break;case '🙼':return 38524;break;case '🙽':return 38525;break;case '🙾':return 38526;break;case '🙿':return 38527;break;case '🚀':return 38528;break;case '🚁':return 38529;break;case '🚂':return 38530;break;case '🚃':return 38531;break;case '🚄':return 38532;break;case '🚅':return 38533;break;case '🚆':return 38534;break;case '🚇':return 38535;break;case '🚈':return 38536;break;case '🚉':return 38537;break;case '🚊':return 38538;break;case '🚋':return 38539;break;case '🚌':return 38540;break;case '🚍':return 38541;break;case '🚎':return 38542;break;case '🚏':return 38543;break;case '🚐':return 38544;break;case '🚑':return 38545;break;case '🚒':return 38546;break;case '🚓':return 38547;break;case '🚔':return 38548;break;case '🚕':return 38549;break;case '🚖':return 38550;break;case '🚗':return 38551;break;case '🚘':return 38552;break;case '🚙':return 38553;break;case '🚚':return 38554;break;case '🚛':return 38555;break;case '🚜':return 38556;break;case '🚝':return 38557;break;case '🚞':return 38558;break;case '🚟':return 38559;break;case '🚠':return 38560;break;case '🚡':return 38561;break;case '🚢':return 38562;break;case '🚣':return 38563;break;case '🚤':return 38564;break;case '🚥':return 38565;break;case '🚦':return 38566;break;case '🚧':return 38567;break;case '🚨':return 38568;break;case '🚩':return 38569;break;case '🚪':return 38570;break;case '🚫':return 38571;break;case '🚬':return 38572;break;case '🚭':return 38573;break;case '🚮':return 38574;break;case '🚯':return 38575;break;case '🚰':return 38576;break;case '🚱':return 38577;break;case '🚲':return 38578;break;case '🚳':return 38579;break;case '🚴':return 38580;break;case '🚵':return 38581;break;case '🚶':return 38582;break;case '🚷':return 38583;break;case '🚸':return 38584;break;case '🚹':return 38585;break;case '🚺':return 38586;break;case '🚻':return 38587;break;case '🚼':return 38588;break;case '🚽':return 38589;break;case '🚾':return 38590;break;case '🚿':return 38591;break;case '🛀':return 38592;break;case '🛁':return 38593;break;case '🛂':return 38594;break;case '🛃':return 38595;break;case '🛄':return 38596;break;case '🛅':return 38597;break;case '🛆':return 38598;break;case '🛇':return 38599;break;case '🛈':return 38600;break;case '🛉':return 38601;break;case '🛊':return 38602;break;case '🛋':return 38603;break;case '🛌':return 38604;break;case '🛍':return 38605;break;case '🛎':return 38606;break;case '🛏':return 38607;break;case '🛐':return 38608;break;case '🛑':return 38609;break;case '🛒':return 38610;break;case '🛠':return 38624;break;case '🛡':return 38625;break;case '🛢':return 38626;break;case '🛣':return 38627;break;case '🛤':return 38628;break;case '🛥':return 38629;break;case '🛦':return 38630;break;case '🛧':return 38631;break;case '🛨':return 38632;break;case '🛩':return 38633;break;case '🛪':return 38634;break;case '🛫':return 38635;break;case '🛬':return 38636;break;case '🛰':return 38640;break;case '🛱':return 38641;break;case '🛲':return 38642;break;case '🛳':return 38643;break;case '🛴':return 38644;break;case '🛵':return 38645;break;case '🛶':return 38646;break;case '🛷':return 38647;break;case '🛸':return 38648;break;case '🜀':return 38656;break;case '🜁':return 38657;break;case '🜂':return 38658;break;case '🜃':return 38659;break;case '🜄':return 38660;break;case '🜅':return 38661;break;case '🜆':return 38662;break;case '🜇':return 38663;break;case '🜈':return 38664;break;case '🜉':return 38665;break;case '🜊':return 38666;break;case '🜋':return 38667;break;case '🜌':return 38668;break;case '🜍':return 38669;break;case '🜎':return 38670;break;case '🜏':return 38671;break;case '🜐':return 38672;break;case '🜑':return 38673;break;case '🜒':return 38674;break;case '🜓':return 38675;break;case '🜔':return 38676;break;case '🜕':return 38677;break;case '🜖':return 38678;break;case '🜗':return 38679;break;case '🜘':return 38680;break;case '🜙':return 38681;break;case '🜚':return 38682;break;case '🜛':return 38683;break;case '🜜':return 38684;break;case '🜝':return 38685;break;case '🜞':return 38686;break;case '🜟':return 38687;break;case '🜠':return 38688;break;case '🜡':return 38689;break;case '🜢':return 38690;break;case '🜣':return 38691;break;case '🜤':return 38692;break;case '🜥':return 38693;break;case '🜦':return 38694;break;case '🜧':return 38695;break;case '🜨':return 38696;break;case '🜩':return 38697;break;case '🜪':return 38698;break;case '🜫':return 38699;break;case '🜬':return 38700;break;case '🜭':return 38701;break;case '🜮':return 38702;break;case '🜯':return 38703;break;case '🜰':return 38704;break;case '🜱':return 38705;break;case '🜲':return 38706;break;case '🜳':return 38707;break;case '🜴':return 38708;break;case '🜵':return 38709;break;case '🜶':return 38710;break;case '🜷':return 38711;break;case '🜸':return 38712;break;case '🜹':return 38713;break;case '🜺':return 38714;break;case '🜻':return 38715;break;case '🜼':return 38716;break;case '🜽':return 38717;break;case '🜾':return 38718;break;case '🜿':return 38719;break;case '🝀':return 38720;break;case '🝁':return 38721;break;case '🝂':return 38722;break;case '🝃':return 38723;break;case '🝄':return 38724;break;case '🝅':return 38725;break;case '🝆':return 38726;break;case '🝇':return 38727;break;case '🝈':return 38728;break;case '🝉':return 38729;break;case '🝊':return 38730;break;case '🝋':return 38731;break;case '🝌':return 38732;break;case '🝍':return 38733;break;case '🝎':return 38734;break;case '🝏':return 38735;break;case '🝐':return 38736;break;case '🝑':return 38737;break;case '🝒':return 38738;break;case '🝓':return 38739;break;case '🝔':return 38740;break;case '🝕':return 38741;break;case '🝖':return 38742;break;case '🝗':return 38743;break;case '🝘':return 38744;break;case '🝙':return 38745;break;case '🝚':return 38746;break;case '🝛':return 38747;break;case '🝜':return 38748;break;case '🝝':return 38749;break;case '🝞':return 38750;break;case '🝟':return 38751;break;case '🝠':return 38752;break;case '🝡':return 38753;break;case '🝢':return 38754;break;case '🝣':return 38755;break;case '🝤':return 38756;break;case '🝥':return 38757;break;case '🝦':return 38758;break;case '🝧':return 38759;break;case '🝨':return 38760;break;case '🝩':return 38761;break;case '🝪':return 38762;break;case '🝫':return 38763;break;case '🝬':return 38764;break;case '🝭':return 38765;break;case '🝮':return 38766;break;case '🝯':return 38767;break;case '🝰':return 38768;break;case '🝱':return 38769;break;case '🝲':return 38770;break;case '🝳':return 38771;break;case '🞀':return 38784;break;case '🞁':return 38785;break;case '🞂':return 38786;break;case '🞃':return 38787;break;case '🞄':return 38788;break;case '🞅':return 38789;break;case '🞇':return 38791;break;case '🞉':return 38793;break;case '🞌':return 38796;break;case '🞍':return 38797;break;case '🞑':return 38801;break;case '🞒':return 38802;break;case '🞓':return 38803;break;case '🞔':return 38804;break;case '🞕':return 38805;break;case '🞖':return 38806;break;case '🞗':return 38807;break;case '🞘':return 38808;break;case '🞙':return 38809;break;case '🞚':return 38810;break;case '🞛':return 38811;break;case '🞜':return 38812;break;case '🞝':return 38813;break;case '🞞':return 38814;break;case '🞟':return 38815;break;case '🞠':return 38816;break;case '🞡':return 38817;break;case '🞢':return 38818;break;case '🞣':return 38819;break;case '🞤':return 38820;break;case '🞥':return 38821;break;case '🞦':return 38822;break;case '🞧':return 38823;break;case '🞨':return 38824;break;case '🞩':return 38825;break;case '🞪':return 38826;break;case '🞫':return 38827;break;case '🞬':return 38828;break;case '🞭':return 38829;break;case '🞮':return 38830;break;case '🞯':return 38831;break;case '🞰':return 38832;break;case '🞱':return 38833;break;case '🞲':return 38834;break;case '🞳':return 38835;break;case '🞴':return 38836;break;case '🞵':return 38837;break;case '🞶':return 38838;break;case '🞷':return 38839;break;case '🞸':return 38840;break;case '🞹':return 38841;break;case '🞺':return 38842;break;case '🞻':return 38843;break;case '🞼':return 38844;break;case '🞽':return 38845;break;case '🞾':return 38846;break;case '🞿':return 38847;break;case '🟀':return 38848;break;case '🟂':return 38850;break;case '🟃':return 38851;break;case '🟄':return 38852;break;case '🟆':return 38854;break;case '🟇':return 38855;break;case '🟈':return 38856;break;case '🟉':return 38857;break;case '🟊':return 38858;break;case '🟋':return 38859;break;case '🟌':return 38860;break;case '🟍':return 38861;break;case '🟎':return 38862;break;case '🟐':return 38864;break;case '🟒':return 38866;break;case '🟔':return 38868;break;case '🠀':return 38912;break;case '🠁':return 38913;break;case '🠂':return 38914;break;case '🠃':return 38915;break;case '🠄':return 38916;break;case '🠅':return 38917;break;case '🠆':return 38918;break;case '🠇':return 38919;break;case '🠈':return 38920;break;case '🠉':return 38921;break;case '🠊':return 38922;break;case '🠋':return 38923;break;case '🠐':return 38928;break;case '🠑':return 38929;break;case '🠒':return 38930;break;case '🠓':return 38931;break;case '🠔':return 38932;break;case '🠕':return 38933;break;case '🠖':return 38934;break;case '🠗':return 38935;break;case '🠘':return 38936;break;case '🠙':return 38937;break;case '🠚':return 38938;break;case '🠛':return 38939;break;case '🠜':return 38940;break;case '🠝':return 38941;break;case '🠞':return 38942;break;case '🠟':return 38943;break;case '🠠':return 38944;break;case '🠡':return 38945;break;case '🠢':return 38946;break;case '🠣':return 38947;break;case '🠤':return 38948;break;case '🠥':return 38949;break;case '🠦':return 38950;break;case '🠧':return 38951;break;case '🠨':return 38952;break;case '🠩':return 38953;break;case '🠪':return 38954;break;case '🠫':return 38955;break;case '🠬':return 38956;break;case '🠭':return 38957;break;case '🠮':return 38958;break;case '🠯':return 38959;break;case '🠰':return 38960;break;case '🠱':return 38961;break;case '🠲':return 38962;break;case '🠳':return 38963;break;case '🠴':return 38964;break;case '🠵':return 38965;break;case '🠶':return 38966;break;case '🠷':return 38967;break;case '🠸':return 38968;break;case '🠹':return 38969;break;case '🠺':return 38970;break;case '🠻':return 38971;break;case '🠼':return 38972;break;case '🠽':return 38973;break;case '🠾':return 38974;break;case '🠿':return 38975;break;case '🡀':return 38976;break;case '🡁':return 38977;break;case '🡂':return 38978;break;case '🡃':return 38979;break;case '🡄':return 38980;break;case '🡅':return 38981;break;case '🡆':return 38982;break;case '🡇':return 38983;break;case '🡈':return 38984;break;case '🡉':return 38985;break;case '🡊':return 38986;break;case '🡋':return 38987;break;case '🡌':return 38988;break;case '🡍':return 38989;break;case '🡎':return 38990;break;case '🡏':return 38991;break;case '🡐':return 38992;break;case '🡑':return 38993;break;case '🡒':return 38994;break;case '🡓':return 38995;break;case '🡔':return 38996;break;case '🡕':return 38997;break;case '🡖':return 38998;break;case '🡗':return 38999;break;case '🡘':return 39000;break;case '🡙':return 39001;break;case '🡠':return 39008;break;case '🡡':return 39009;break;case '🡢':return 39010;break;case '🡣':return 39011;break;case '🡤':return 39012;break;case '🡥':return 39013;break;case '🡦':return 39014;break;case '🡧':return 39015;break;case '🡨':return 39016;break;case '🡩':return 39017;break;case '🡪':return 39018;break;case '🡫':return 39019;break;case '🡬':return 39020;break;case '🡭':return 39021;break;case '🡮':return 39022;break;case '🡯':return 39023;break;case '🡰':return 39024;break;case '🡱':return 39025;break;case '🡲':return 39026;break;case '🡳':return 39027;break;case '🡴':return 39028;break;case '🡵':return 39029;break;case '🡶':return 39030;break;case '🡷':return 39031;break;case '🡸':return 39032;break;case '🡹':return 39033;break;case '🡺':return 39034;break;case '🡻':return 39035;break;case '🡼':return 39036;break;case '🡽':return 39037;break;case '🡾':return 39038;break;case '🡿':return 39039;break;case '🢀':return 39040;break;case '🢁':return 39041;break;case '🢂':return 39042;break;case '🢃':return 39043;break;case '🢄':return 39044;break;case '🢅':return 39045;break;case '🢆':return 39046;break;case '🢇':return 39047;break;case '🢐':return 39056;break;case '🢑':return 39057;break;case '🢒':return 39058;break;case '🢓':return 39059;break;case '🢔':return 39060;break;case '🢕':return 39061;break;case '🢖':return 39062;break;case '🢗':return 39063;break;case '🢘':return 39064;break;case '🢙':return 39065;break;case '🢚':return 39066;break;case '🢛':return 39067;break;case '🢜':return 39068;break;case '🢝':return 39069;break;case '🢞':return 39070;break;case '🢟':return 39071;break;case '🢠':return 39072;break;case '🢡':return 39073;break;case '🢢':return 39074;break;case '🢣':return 39075;break;case '🢤':return 39076;break;case '🢥':return 39077;break;case '🢦':return 39078;break;case '🢧':return 39079;break;case '🢨':return 39080;break;case '🢩':return 39081;break;case '🢪':return 39082;break;case '🢫':return 39083;break;case '🢬':return 39084;break;case '🢭':return 39085;break;case '🤐':return 39184;break;case '🤑':return 39185;break;case '🤒':return 39186;break;case '🤓':return 39187;break;case '🤔':return 39188;break;case '🤕':return 39189;break;case '🤖':return 39190;break;case '🤗':return 39191;break;case '🤘':return 39192;break;case '🤙':return 39193;break;case '🤚':return 39194;break;case '🤛':return 39195;break;case '🤜':return 39196;break;case '🤝':return 39197;break;case '🤞':return 39198;break;case '🤟':return 39199;break;case '🤠':return 39200;break;case '🤡':return 39201;break;case '🤢':return 39202;break;case '🤣':return 39203;break;case '🤤':return 39204;break;case '🤥':return 39205;break;case '🤦':return 39206;break;case '🤧':return 39207;break;case '🤨':return 39208;break;case '🤩':return 39209;break;case '🤪':return 39210;break;case '🤫':return 39211;break;case '🤬':return 39212;break;case '🤭':return 39213;break;case '🤮':return 39214;break;case '🤯':return 39215;break;case '🤰':return 39216;break;case '🤱':return 39217;break;case '🤲':return 39218;break;case '🤳':return 39219;break;case '🤴':return 39220;break;case '🤵':return 39221;break;case '🤶':return 39222;break;case '🤷':return 39223;break;case '🤸':return 39224;break;case '🤹':return 39225;break;case '🤺':return 39226;break;case '🤻':return 39227;break;case '🤼':return 39228;break;case '🤽':return 39229;break;case '🤾':return 39230;break;case '🤿':return 39231;break;case '🥀':return 39232;break;case '🥁':return 39233;break;case '🥂':return 39234;break;case '🥃':return 39235;break;case '🥄':return 39236;break;case '🥅':return 39237;break;case '🥆':return 39238;break;case '🥇':return 39239;break;case '🥈':return 39240;break;case '🥉':return 39241;break;case '🥊':return 39242;break;case '🥋':return 39243;break;case '🥌':return 39244;break;case '🥍':return 39245;break;case '🥎':return 39246;break;case '🥏':return 39247;break;case '🥐':return 39248;break;case '🥑':return 39249;break;case '🥒':return 39250;break;case '🥓':return 39251;break;case '🥔':return 39252;break;case '🥕':return 39253;break;case '🥖':return 39254;break;case '🥗':return 39255;break;case '🥘':return 39256;break;case '🥙':return 39257;break;case '🥚':return 39258;break;case '🥛':return 39259;break;case '🥜':return 39260;break;case '🥝':return 39261;break;case '🥞':return 39262;break;case '🥟':return 39263;break;case '🥠':return 39264;break;case '🥡':return 39265;break;case '🥢':return 39266;break;case '🥣':return 39267;break;case '🥤':return 39268;break;case '🥥':return 39269;break;case '🥦':return 39270;break;case '🥧':return 39271;break;case '🥨':return 39272;break;case '🥩':return 39273;break;case '🥪':return 39274;break;case '🥫':return 39275;break;case '🦀':return 39296;break;case '🦁':return 39297;break;case '🦂':return 39298;break;case '🦃':return 39299;break;case '🦄':return 39300;break;case '🦅':return 39301;break;case '🦆':return 39302;break;case '🦇':return 39303;break;case '🦈':return 39304;break;case '🦉':return 39305;break;case '🦊':return 39306;break;case '🦋':return 39307;break;case '🦌':return 39308;break;case '🦍':return 39309;break;case '🦎':return 39310;break;case '🦏':return 39311;break;case '🦐':return 39312;break;case '🦑':return 39313;break;case '🦒':return 39314;break;case '🦓':return 39315;break;case '🦔':return 39316;break;case '🦕':return 39317;break;case '🦖':return 39318;break;case '🦗':return 39319;break;case '🧀':return 39360;break;case '🧐':return 39376;break;case '🧑':return 39377;break;case '🧒':return 39378;break;case '🧓':return 39379;break;case '🧔':return 39380;break;case '🧕':return 39381;break;case '🧖':return 39382;break;case '🧗':return 39383;break;case '🧘':return 39384;break;case '🧙':return 39385;break;case '🧚':return 39386;break;case '🧛':return 39387;break;case '🧜':return 39388;break;case '🧝':return 39389;break;case '🧞':return 39390;break;case '🧟':return 39391;break;case '🧠':return 39392;break;case '🧡':return 39393;break;case '🧢':return 39394;break;case '🧣':return 39395;break;case '🧤':return 39396;break;case '🧥':return 39397;break;case '🧦':return 39398;break;default:return LDKC.number.nan} } :
                                LDKF.error.nativeToEnvironment("`String.prototype.charCodeAt` method")
                        }

                        // Return
                        return method
                    })();

                // Object --- NOTE (Lapys) -> Each `Object` property is unique to varying degrees, hence why there's no global testing method for them.
                LapysDevelopmentKit.objects.object = (function() {
                    // Initialization > Constructor
                    var constructor = LDKF.objectPrototypeGetProperty({}, "constructor");

                    // Return
                    return LDKF.functionPrototypeGetName(constructor) == "Object" && LDKF.functionPrototypeIsNative(constructor) ? constructor : LDKF.error.nativeToEnvironment("`Object` constructor")
                })();
                    // Create
                    LapysDevelopmentKit.objects.objectCreate = LDKT.queryObjectConstructorNativeMethod("create").
                        onqueryfailed(function create(prototype) {
                            // Function > Constructor
                            function constructor() {}

                            // Modification > Constructor > Prototype
                            constructor.prototype = prototype;

                            // Initialization > Object
                            var object = new constructor;

                            // Modification > Object > Constructor --- NOTE (Lapys) -> JavaScript semantics.
                            LDKF.isConstructible(prototype) && (object.constructor = constructor);

                            // Return
                            return object
                        }).query();

                    // Define Property
                    LapysDevelopmentKit.objects.objectDefineProperty = LDKT.queryObjectConstructorNativeMethod("defineProperty").
                        onqueryfailed(function defineProperty(object, key, descriptor) {
                            // Error Handling > Return
                            try { return method(object, key, descriptor) } catch (error) {}

                            // Initialization > Is (Accessor, Mutator, Getter-Setter, Value, Writable)
                            var isAccessor = LDKF.objectPrototypeHasProperty(descriptor, "get"),
                                isMutator = LDKF.objectPrototypeHasProperty(descriptor, "set"),
                                isGetterSetter = isAccessor || isMutator,
                                isValue = LDKF.objectPrototypeHasProperty(descriptor, "value"),
                                isWritable = LDKF.objectPrototypeHasProperty(descriptor, "writable");

                            // Logic
                            if (isGetterSetter && (isValue || isWritable))
                                // Error
                                LDKF.error("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute.");

                            else if (isGetterSetter) {
                                // Modification > Object > [Key]
                                (isAccessor && LDKC.has__Define__GetterProperty) &&
                                LDKO.objectPrototype__DefineGetter__.call(object, key, LDKF.objectPrototypeGetProperty(descriptor, "get"));

                                (isMutator && LDKC.has__Define__SetterProperty) &&
                                LDKO.objectPrototype__DefineSetter__.call(object, key, LDKF.objectPrototypeGetProperty(descriptor, "set"))
                            }

                            else if (isValue)
                                // Modification > Object > [Key]
                                object[key] = LDKF.objectPrototypeGetProperty(descriptor, "value");

                            // Return
                            return object
                        }).query(function() {
                            // Error Handling > (...) --- NOTE (Lapys) -> Determine if the `Object.defineProperty` method is standard.
                            try { LDKF.objectPrototypeGetProperty(LDKO.object, "defineProperty")({}, "", {}); return true }
                            catch (error) {}
                        });

                    // Get Own Property Descriptor
                    LapysDevelopmentKit.objects.objectGetOwnPropertyDescriptor = LDKT.queryObjectConstructorNativeMethod("getOwnPropertyDescriptor").
                        onqueryfailed(function getOwnPropertyDescriptor(object, key) {
                            // Logic
                            if (LDKC.has__Lookup__GetterProperty && LDKC.has__Lookup__SetterProperty) {
                                // Initialization > (Accessor, Mutator)
                                var accessor = LDKO.objects.objectPrototype__LookupGetter__.call(object, key),
                                    mutator = LDKO.objects.objectPrototype__LookupSetter__.call(object, key);

                                // Logic > Return
                                if (accessor || mutator) return {configurable: true, enumerable: true, get: accessor, set: mutator}
                            }

                            // Return
                            return {configurable: true, enumerable: true, value: LDKF.objectPrototypeGetProperty(object, key), writable: true}
                        }).query(function() {
                            // Error Handling > (...) --- NOTE (Lapys) -> Determine if the `Object.defineProperty` method is standard.
                            try { LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyDescriptor")({}, ""); return true }
                            catch (error) {}
                        });

                    // Get Own Property Names
                    LapysDevelopmentKit.objects.objectGetOwnPropertyNames = LDKT.queryObjectConstructorNativeMethod("getOwnPropertyNames").
                        onqueryfailed(function getOwnPropertyNames(object) {
                            // Initialization > (Index, Key, Property Names)
                            var index = -1, key, propertyNames = [];

                            // Loop > Update > Property Names
                            for (key in object) LDKF.objectPrototypeHasOwnProperty(object, key) && (propertyNames[index += 1] = key);

                            // Return
                            return propertyNames
                        }).query();

                    // Get Own Property Symbols
                    LapysDevelopmentKit.objects.objectGetOwnPropertySymbols = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertySymbols")) {
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertySymbols");

                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.getOwnPropertySymbols` method")
                        }

                        // Return
                        return method
                    })();

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
                                try {
                                    // Logic
                                    if (LDKF.objectPrototypeHasOwnProperty(object, propertyName)) {
                                        // Update > Own Value
                                        ownValue = object[propertyName];

                                        // Deletion
                                        LDKF.objectPrototypeDeleteProperty(object, propertyName);

                                        // Return
                                        return object[propertyName]
                                    }
                                } catch (error) { throw error }

                                // Return
                                return object[propertyName]
                            }

                            // Update > Method
                            method = LDKC.has__Proto__Accessor ?
                                function getPrototypeOf(object) { return getPrototypeValue(object, "__proto__") } :
                                function getPrototypeOf(object) { try { return getPrototypeValue(object, "constructor").prototype || LDKO.objectPrototype } catch (error) {} }
                        }

                        // Update > Method
                        (typeof method == "function") || (method = undefined);

                        // Return
                        return method
                    })();

                    // Keys
                    LapysDevelopmentKit.objects.objectKeys = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "keys")) {
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "keys");

                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.keys` method")
                        }

                        else if (typeof LDKO.objectGetOwnPropertyNames == "function")
                            // Update > Method
                            method = function keys(object) {
                                // Initialization > (Property Names, Iterator, Length, Index, Keys)
                                var propertyNames = LDKF.objectGetOwnPropertyNames(object),
                                    iterator = LDKF.arrayPrototypeLength(keys), length = iterator,
                                    index = -1, keys = [];

                                // Loop
                                while (iterator) {
                                    // Initialization > Property Name
                                    var propertyName = propertyNames[length - (iterator -= 1) - 1];

                                    // Update > Keys
                                    LDKF.objectPrototypeHasOwnProperty(object, propertyName) &&
                                    (keys[index += 1] = propertyName)
                                }

                                // Return
                                return keys
                            };

                        else
                            // Update > Method
                            method = function keys(object) {
                                // Initialization > (Index, Key(s))
                                var index = -1, key, keys = [];

                                // Loop > Update > Keys
                                for (key in object) LDKF.objectPrototypeHasOwnProperty(object, key) && (keys[index += 1] = key);

                                // Return
                                return keys
                            };

                        // Return
                        return method
                    })();

                    // Prototype --- NOTE (Lapys) -> Fortunately, the `prototype` property is immutable for constructors (as it should be).
                    LapysDevelopmentKit.objects.objectPrototype = LDKF.objectPrototypeGetProperty(LDKO.object, "prototype");
                        // Has Own Property
                        LapysDevelopmentKit.objects.objectPrototypeHasOwnProperty = (function() {
                            // Initialization > Method
                            var method;

                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "hasOwnProperty")) {
                                // Update > Method
                                method = LDKF.objectPrototypeGetProperty(LDKO.objectPrototype, "hasOwnProperty");

                                // Error
                                LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.prototype.hasOwnProperty` method")
                            }

                            else
                                // Update > Method
                                method = function hasOwnProperty(propertyName) {
                                    // Initialization > (Key, Object)
                                    var key, object = this;

                                    // Loop > Logic > Return
                                    for (key in object) if (key === propertyName) return true;

                                    // Return
                                    return false
                                };

                            // Return
                            return method
                        })();

                    // Set Prototype Of --- CITE (Lapys) -> `https://gist.github.com/edoardocavazza/47246856759f2273e48b`
                    LapysDevelopmentKit.objects.objectSetPrototypeOf = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "setPrototypeOf")) {
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "setPrototypeOf");

                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.setPrototypeOf` method")
                        }

                        else if (LDKC.has__Proto__Accessor)
                            // Update > Method
                            method = function setPrototypeOf(object, prototype) { LDKF.objectPrototypeSetProperty(object, "__proto__", prototype) };

                        // Update > Method
                        (typeof method == "function") || (method = undefined);

                        // Return
                        return method
                    })();

            /* Constants */
                // Has __Define__ Getter Property
                LapysDevelopmentKit.constants.has__Define__GetterProperty = typeof __defineGetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__DefineGetter__ = __defineGetter__);

                // Has __Define__ Setter Property
                LapysDevelopmentKit.constants.has__Define__SetterProperty = typeof __defineSetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__DefineSetter__ = __defineSetter__);

                // Has __Lookup__ Getter Property
                LapysDevelopmentKit.constants.has__Lookup__GetterProperty = typeof __lookupGetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__LookupGetter__ = __lookupGetter__);

                // Has __Lookup__ Setter Property
                LapysDevelopmentKit.constants.has__Lookup__SetterProperty = typeof __lookupSetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__LookupSetter__ = __lookupSetter__);

                // Has __Prototype__ Accessor
                LapysDevelopmentKit.constants.has__Proto__Accessor = LDKF.objectPrototypeHasProperty({}, "__proto__");

                // Is Web Environment --- UPDATE REQUIRED (Lapys) -> Test here should be improved.
                LapysDevelopmentKit.constants.isWebEnvironment = typeof window == "object" && LDKF.isConstructible(window);

                // Number
                    // Infinity
                    LapysDevelopmentKit.constants.number.infinity = 1 / +0;

                    // Maximum Array Length
                    LapysDevelopmentKit.constants.number.maximumArrayLength = -1 >>> +0;

                    // Not-a-Number
                    LapysDevelopmentKit.constants.number.nan = +0 / +0;

                // String --- NOTE (Lapys) -> Code duplication, I know.
                    // Alphabets
                    LapysDevelopmentKit.constants.string.alphabets = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];

                    // Alphanumerics
                    LapysDevelopmentKit.constants.string.alphanumerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];

                    // Binary
                    LapysDevelopmentKit.constants.string.binary = ['0', '1'];

                    // Digits
                    LapysDevelopmentKit.constants.string.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

                    // Hexadecimal
                    LapysDevelopmentKit.constants.string.hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F'];

                    // Lowercase Alphabets
                    LapysDevelopmentKit.constants.string.lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

                    // Octal
                    LapysDevelopmentKit.constants.string.octal = ['0', '1', '2', '3', '4', '5', '6', '7'];

                    // Uppercase Alphabets
                    LapysDevelopmentKit.constants.string.uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

                    // [Explicit] Variable Characters
                    LapysDevelopmentKit.constants.string.variableCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9''a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];

            /* Environment > (...)
                    --- NOTE ---
                        #Lapys: Configure the Lapys Development Kit to the current environment.
                            - It tests validly because the `typeof` keyword does not assert reference errors.
            */
            (function() {
                // Logic
                if (typeof window != "undefined") {
                    // Modification > (Lapys Development Kit > Environment) > (Global, State, Type)
                    LapysDevelopmentKit.environment.global = window;
                    LapysDevelopmentKit.environment.state = "ok";
                    LapysDevelopmentKit.environment.type = "standard";

                    // [Angular JS] Logic
                    if (typeof angular == "object" && LDKF.objectPrototypeConstructor(angular) === LDKO.object && LDKF.toString(angular) == "[object Object]") {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "angular"
                    }

                    // [Electron JS] Logic
                    if (
                        LDKF.objectPrototypeHasProperty(window, "process") && (function() {
                            // Error Handling
                            try {
                                // Initialization > Process
                                var process;

                                // Logic > Return
                                if (process = LDKF.objectPrototypeGetProperty(window, "process"))
                                    return LDKF.objectPrototypeHasProperty(process, "type") && !!process.type &&
                                        LDKF.objectPrototypeHasProperty(process, "versions") && typeof LDKF.objectPrototypeGetProperty(LDKF.objectPrototypeGetProperty(process, "versions"), "electron") == "string"
                            } catch (error) {}
                        })()
                    ) {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework";
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "Electron JS"
                    }

                    // [jQuery] Logic
                    if (
                        typeof jQuery == "function" && LDKF.functionPrototypeIsUserDefined(jQuery) &&
                        typeof $ == "function" && LDKF.functionPrototypeIsUserDefined($)
                    ) {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "jQuery"
                    }

                    // [React JS] Logic
                    if (typeof React == "object" && LDKF.objectPrototypeConstructor(React) === LDKO.object && LDKF.toString(React) == "[object Object]") {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "React JS"
                    }

                    // [Vue JS] Logic
                    if (typeof Vue == "function" && LDKF.functionPrototypeIsUserDefined(Vue)) {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "Vue JS"
                    }
                }

                // [Node.js] Logic
                if (
                    typeof global != "undefined" && typeof module != "undefined" && (function() {
                        // Error Handling > Return
                        try { return LDKF.toString(global) == "[object global]" && LDKF.objectPrototypeConstructor(global) === LDKO.object && typeof module.exports == "object" && LDKF.toString(module.exports) == "[object Object]" } catch (error) {}

                        // Return
                        return false
                    })
                ) {
                    // Modification > (Lapys Development Kit > Environment) > (Global(s), Type, Vendors)
                    LapysDevelopmentKit.environment.global = global;
                    LapysDevelopmentKit.environment.globals = LDKC.isWebEnvironment ? [global, module, window] : [global, module];
                    LapysDevelopmentKit.environment.type = "runtime";
                    LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "Node.js";

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
                                    typeof LDKF.objectPrototypeGet__Prototype__(process) == "object"
                                ) { var argv = process.argv; if (!!argv && typeof argv == "object" && LDKF.isArray(argv)) return argv }
                            }
                        } catch (error) {}

                        // Return
                        return []
                    })(), iterator = LDKF.arrayPrototypeLength(argv), length = iterator;

                    // Loop > Update > Arguments --- NOTE (Lapys) -> Update the global `args` variable.
                    while (iterator) LDKF.arrayPrototypeAddToFront(args, argv[length - (iterator -= 1) - 1])
                }

                // Update > Global
                GLOBAL = LapysDevelopmentKit.environment.global
            })();

            /* Objects */
                // Abort Error
                LapysDevelopmentKit.objects.abortError = LDKT.queryObjectNativeConstructor(GLOBAL, "AbortError");
                    // Prototype
                    LapysDevelopmentKit.objects.abortErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.abortError, "prototype");

                // Array
                LapysDevelopmentKit.objects.array = LDKF.objectPrototypeConstructor([]);
                    // Prototype
                    LapysDevelopmentKit.objects.arrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.array, "prototype");

                // Constraint Error
                LapysDevelopmentKit.objects.constraintError = LDKT.queryObjectNativeConstructor(GLOBAL, "ConstraintError");
                    // Prototype
                    LapysDevelopmentKit.objects.constraintErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.constraintError, "prototype");

                // Constraint Not Satisfied Error
                LapysDevelopmentKit.objects.constraintNotSatisfiedError = LDKT.queryObjectNativeConstructor(GLOBAL, "ConstraintNotSatisfiedError");
                    // Prototype
                    LapysDevelopmentKit.objects.constraintNotSatisfiedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.constraintNotSatisfiedError, "prototype");

                // Data Error
                LapysDevelopmentKit.objects.dataError = LDKT.queryObjectNativeConstructor(GLOBAL, "DataError");
                    // Prototype
                    LapysDevelopmentKit.objects.dataErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.dataError, "prototype");

                // Data Clone Error
                LapysDevelopmentKit.objects.dataCloneError = LDKT.queryObjectNativeConstructor(GLOBAL, "DataCloneError");
                    // Prototype
                    LapysDevelopmentKit.objects.dataCloneErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.dataCloneError, "prototype");

                // Devices Not Found Error
                LapysDevelopmentKit.objects.devicesNotFoundError = LDKT.queryObjectNativeConstructor(GLOBAL, "DevicesNotFoundError");
                    // Prototype
                    LapysDevelopmentKit.objects.devicesNotFoundErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.devicesNotFoundError, "prototype");

                // DOM Error
                LapysDevelopmentKit.objects.domError = LDKC.isWebEnvironment ? LDKT.queryObjectNativeConstructor(GLOBAL, "DOMError", STRICT = true) : undefined;
                    // Prototype
                    LapysDevelopmentKit.objects.domErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.domError, "prototype");

                // DOM Exception
                LapysDevelopmentKit.objects.domException = LDKC.isWebEnvironment ? LDKT.queryObjectNativeConstructor(GLOBAL, "DOMException", STRICT = true) : undefined;
                    // Prototype
                    LapysDevelopmentKit.objects.domExceptionPrototype = LDKF.objectPrototypeGetProperty(LDKO.domException, "prototype");

                // Encoding Error
                LapysDevelopmentKit.objects.encodingError = LDKT.queryObjectNativeConstructor(GLOBAL, "EncodingError");
                    // Prototype
                    LapysDevelopmentKit.objects.encodingErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.encodingError, "prototype");

                // Type Error --- NOTE (Lapys) -> Pretty convenient compared to requesting the global object for the constructor.
                LapysDevelopmentKit.objects.typeError = (function() {
                    // Initialization > Constructor
                    var constructor;

                    // Error Handling > (...)
                    try { undefined[""] }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Return
                    return constructor
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.typeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.typeError, "prototype");

                // Error
                LapysDevelopmentKit.objects.error = (function() {
                    // Initialization > (Is Standard, Object)
                    var isStandard = true, constructor;

                    // Function > Test
                    function test() { return LDKF.functionPrototypeGetName(constructor) == "Error" || LDKF.functionPrototypeIsNative(constructor) }

                    // Logic
                    if (LDKC.has__Proto__Accessor)
                        // Error Handling
                        try { LDKF.throwTypeError() }
                        catch (error) {
                            // Update > Object
                            constructor = LDKF.objectPrototypeConstructor(LDKF.objectPrototypeGet__Prototype__(LDKF.objectPrototypeGet__Prototype__(error)));
                            test() || (isStandard = false)
                        }

                    else
                        // Update > Is Standard
                        isStandard = false;

                    // Logic
                    if (!isStandard) {
                        // Update > Object
                        constructor = LDKT.queryObjectNativeConstructor(GLOBAL, "Error");

                        // Error
                        test() || LDKF.error.nativeToEnvironment("`Error` constructor")
                    }

                    // Return
                    return constructor
                })();
                    // Capture Stack Trace
                    LapysDevelopmentKit.objects.errorCaptureStackTrace = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKO.error, "captureStackTrace");

                        // Logic > Return
                        if (!LDKF.isVoid(method) && LDKF.functionPrototypeGetName(method) == "captureStackTrace" && LDKF.functionPrototypeIsNative(method)) return method
                    })();

                    // Prototype
                    LapysDevelopmentKit.objects.errorPrototype = LDKF.objectPrototypeGetProperty(LDKO.error, "prototype");

                // Evaluate
                LapysDevelopmentKit.objects.eval = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "eval");

                    // Logic
                    if (!LDKF.isVoid(method))
                        // Logic > (...)
                        if (LDKF.functionPrototypeGetName(method) == "eval" && LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error.nativeToEnvironment("`eval` function")
                })();

                // Evaluation Error
                LapysDevelopmentKit.objects.evalError = LDKT.queryObjectNativeConstructor(GLOBAL, "EvalError", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.evalErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.evalError, "prototype");

                // Event Exception
                LapysDevelopmentKit.objects.eventException = LDKT.queryObjectNativeConstructor(GLOBAL, "EventException");
                    // Prototype
                    LapysDevelopmentKit.objects.eventExceptionPrototype = LDKF.objectPrototypeGetProperty(LDKO.eventException, "prototype");

                // Function
                LapysDevelopmentKit.objects["function"] = LDKF.objectPrototypeConstructor(function() {});
                    // Prototype --- NOTE (Lapys) -> Try to convert `Function.prototype.apply` and `Function.prototype.call` to constant methods.
                    LapysDevelopmentKit.objects.functionPrototype = LDKF.objectPrototypeGetProperty(LDKO["function"], "prototype");
                        // Apply
                        LDKF.objectDefineProperty(LDKO.functionPrototype, "apply", (function() {
                            // Initialization > Descriptor
                            var descriptor = LDKF.objectGetOwnPropertyDescriptor(LDKO.functionPrototype, "apply");

                            // Modification > Descriptor > (Configurable, Writable)
                            descriptor.configurable = false;
                            descriptor.writable = false;

                            // Return
                            return descriptor
                        })());

                        // Call
                        LDKF.objectDefineProperty(LDKO.functionPrototype, "call", (function() {
                            // Initialization > Descriptor
                            var descriptor = LDKF.objectGetOwnPropertyDescriptor(LDKO.functionPrototype, "call");

                            // Modification > Descriptor > (Configurable, Writable)
                            descriptor.configurable = false;
                            descriptor.writable = false;

                            // Return
                            return descriptor
                        })());

                // Hierarchy Request Error
                LapysDevelopmentKit.objects.hierarchyRequestError = LDKT.queryObjectNativeConstructor(GLOBAL, "HierarchyRequestError");
                    // Prototype
                    LapysDevelopmentKit.objects.hierarchyRequestErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.hierarchyRequestError, "prototype");

                // Index Size Error
                LapysDevelopmentKit.objects.indexSizeError = LDKT.queryObjectNativeConstructor(GLOBAL, "IndexSizeError");
                    // Prototype
                    LapysDevelopmentKit.objects.indexSizeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.indexSizeError, "prototype");

                // Internal Error
                LapysDevelopmentKit.objects.internalError = (function() {
                    // Initialization > Constructor
                    var constructor;

                    // Function > Test
                    function test() { return (LDKF.functionPrototypeGetName(constructor) || "InternalError") == "InternalError" && LDKF.functionPrototypeIsNative(constructor) }

                    // Error Handling > (...)
                    try { (function InternalError(){InternalError()})() }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Logic
                    if (!test()) {
                        // Update > Constructor
                        constructor = LDKT.queryObjectNativeConstructor(GLOBAL, "InternalError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return undefined
                    }

                    // Return
                    return constructor
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.internalErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.internalError, "prototype");

                // Invalid Access Error
                LapysDevelopmentKit.objects.invalidAccessError = LDKT.queryObjectNativeConstructor(GLOBAL, "InvalidAccessError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidAccessErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidAccessError, "prototype");

                // Invalid Character Error
                LapysDevelopmentKit.objects.invalidCharacterError = LDKT.queryObjectNativeConstructor(GLOBAL, "InvalidCharacterError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidCharacterErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidCharacterError, "prototype");

                // Invalid Modification Error
                LapysDevelopmentKit.objects.invalidModificationError = LDKT.queryObjectNativeConstructor(GLOBAL, "InvalidModificationError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidModificationErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidModificationError, "prototype");

                // Invalid Node Type Error
                LapysDevelopmentKit.objects.invalidNodeTypeError = LDKT.queryObjectNativeConstructor(GLOBAL, "InvalidNodeTypeError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidNodeTypeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidNodeTypeError, "prototype");

                // Invalid State Error
                LapysDevelopmentKit.objects.invalidStateError = LDKT.queryObjectNativeConstructor(GLOBAL, "InvalidStateError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidStateErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidStateError, "prototype");

                // Media Error
                LapysDevelopmentKit.objects.mediaError = LDKT.queryObjectNativeConstructor(GLOBAL, "MediaError", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mediaErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaError, "prototype");

                // Media Key Error
                LapysDevelopmentKit.objects.mediaKeyError = LDKT.queryObjectNativeConstructor(GLOBAL, "MediaKeyError");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaKeyErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaKeyError, "prototype");

                // Media Stream Error
                LapysDevelopmentKit.objects.mediaStreamError = LDKT.queryObjectNativeConstructor(GLOBAL, "MediaStreamError");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamError, "prototype");

                // Microsoft Media Key Error
                LapysDevelopmentKit.objects.msMediaKeyError = LDKT.queryObjectNativeConstructor(GLOBAL, "MSMediaKeyError");
                    // Prototype
                    LapysDevelopmentKit.objects.msMediaKeyErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.msMediaKeyError, "prototype");

                // Namespace Error
                LapysDevelopmentKit.objects.namespaceError = LDKT.queryObjectNativeConstructor(GLOBAL, "NamespaceError");
                    // Prototype
                    LapysDevelopmentKit.objects.namespaceErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.namespaceError, "prototype");

                // Navigator User Media Error
                LapysDevelopmentKit.objects.navigatorUserMediaError = LDKT.queryObjectNativeConstructor(GLOBAL, "NavigatorUserMediaError");
                    // Prototype
                    LapysDevelopmentKit.objects.navigatorUserMediaErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.navigatorUserMediaError, "prototype");

                // Network Error
                LapysDevelopmentKit.objects.networkError = LDKT.queryObjectNativeConstructor(GLOBAL, "NetworkError");
                    // Prototype
                    LapysDevelopmentKit.objects.networkErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.networkError, "prototype");

                // No Modification Allowed Error
                LapysDevelopmentKit.objects.noModificationAllowedError = LDKT.queryObjectNativeConstructor(GLOBAL, "NoModificationAllowedError");
                    // Prototype
                    LapysDevelopmentKit.objects.noModificationAllowedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.noModificationAllowedError, "prototype");

                // Not Allowed Error
                LapysDevelopmentKit.objects.notAllowedError = LDKT.queryObjectNativeConstructor(GLOBAL, "NotAllowedError");
                    // Prototype
                    LapysDevelopmentKit.objects.notAllowedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notAllowedError, "prototype");

                // Not Found Error
                LapysDevelopmentKit.objects.notFoundError = LDKT.queryObjectNativeConstructor(GLOBAL, "NotFoundError");
                    // Prototype
                    LapysDevelopmentKit.objects.notFoundErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notFoundError, "prototype");

                // Not Readable Error
                LapysDevelopmentKit.objects.notReadableError = LDKT.queryObjectNativeConstructor(GLOBAL, "NotReadableError");
                    // Prototype
                    LapysDevelopmentKit.objects.notReadableErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notReadableError, "prototype");

                // Not Supported Error
                LapysDevelopmentKit.objects.notSupportedError = LDKT.queryObjectNativeConstructor(GLOBAL, "NotSupportedError");
                    // Prototype
                    LapysDevelopmentKit.objects.notSupportedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notSupportedError, "prototype");

                // Number
                LapysDevelopmentKit.objects.number = LDKF.objectPrototypeConstructor(+0);

                // Operation Error
                LapysDevelopmentKit.objects.operationError = LDKT.queryObjectNativeConstructor(GLOBAL, "OperationError");
                    // Prototype
                    LapysDevelopmentKit.objects.operationErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.operationError, "prototype");

                // Over-Constrained Error
                LapysDevelopmentKit.objects.overConstrainedError = LDKT.queryObjectNativeConstructor(GLOBAL, "OverconstrainedError");
                    // Prototype
                    LapysDevelopmentKit.objects.overConstrainedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.overConstrainedError, "prototype");

                // Permission Denied Error
                LapysDevelopmentKit.objects.permissionDeniedError = LDKT.queryObjectNativeConstructor(GLOBAL, "PermissionDeniedError");
                    // Prototype
                    LapysDevelopmentKit.objects.permissionDeniedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.permissionDeniedError, "prototype");

                // Quota Exceeded Error
                LapysDevelopmentKit.objects.quotaExceededError = LDKT.queryObjectNativeConstructor(GLOBAL, "QuotaExceededError");
                    // Prototype
                    LapysDevelopmentKit.objects.quotaExceededErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.quotaExceededError, "prototype");

                // Range Error
                LapysDevelopmentKit.objects.rangeError = (function() {
                    // Initialization > Constructor
                    var constructor;

                    // Function > Test
                    function test() { return (LDKF.functionPrototypeGetName(constructor) || "RangeError") == "RangeError" && LDKF.functionPrototypeIsNative(constructor) }

                    // Error Handling > (...)
                    try { (function RangeError(){RangeError()})() }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Logic
                    if (!test()) {
                        // Update > Constructor
                        constructor = LDKT.queryObjectNativeConstructor(GLOBAL, "RangeError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return undefined
                    }

                    // Return
                    return constructor
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.rangeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.rangeError, "prototype");

                // Read-Only Error
                LapysDevelopmentKit.objects.readOnlyError = LDKT.queryObjectNativeConstructor(GLOBAL, "ReadOnlyError");
                    // Prototype
                    LapysDevelopmentKit.objects.readOnlyErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.readOnlyError, "prototype");

                // Reference Error
                LapysDevelopmentKit.objects.referenceError = (function() {
                    // Initialization > (Constructor, Variable Name)
                    var constructor, variableName = 'a';

                    // Function > Test
                    function test() { return constructor !== LDKO.typeError && (LDKF.functionPrototypeGetName(constructor) || "ReferenceError") == "ReferenceError" && LDKF.functionPrototypeIsNative(constructor) }

                    // Loop > Update > Variable Name
                    while (LDKF.objectPrototypeHasProperty(GLOBAL, variableName)) variableName += 'a';

                    // Error Handling > (...)
                    try { LDKF.eval(variableName) }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Logic
                    if (!test()) {
                        // Update > Constructor
                        constructor = LDKT.queryObjectNativeConstructor(GLOBAL, "ReferenceError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return undefined
                    }

                    // Return
                    return constructor
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.referenceErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.referenceError, "prototype");

                // Regular Expression
                LapysDevelopmentKit.objects.regularExpression = LDKF.objectPrototypeConstructor(/ /);
                    // Prototype
                    LapysDevelopmentKit.objects.regularExpressionPrototype = LDKF.objectPrototypeGetProperty(LDKO.regularExpression, "prototype");

                // Security Error
                LapysDevelopmentKit.objects.securityError = LDKT.queryObjectNativeConstructor(GLOBAL, "SecurityError");
                    // Prototype
                    LapysDevelopmentKit.objects.securityErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.securityError, "prototype");

                // Speech Recognition Error
                LapysDevelopmentKit.objects.speechRecognitionError = LDKT.queryObjectNativeConstructor(GLOBAL, "SpeechRecognitionError");
                    // Prototype
                    LapysDevelopmentKit.objects.speechRecognitionErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.speechRecognitionError, "prototype");

                // String
                LapysDevelopmentKit.objects.string = LDKF.objectPrototypeConstructor("");

                // Symbol
                LapysDevelopmentKit.objects.symbol = LDKT.queryObjectNativeConstructor(GLOBAL, "Symbol");
                    // Iterator
                    LapysDevelopmentKit.objects.symbolIterator = LDKF.objectPrototypeGetProperty(LDKO.symbol, "iterator");

                    // To String Tag
                    LapysDevelopmentKit.objects.symbolToStringTag = LDKF.objectPrototypeGetProperty(LDKO.symbol, "toStringTag");

                // Syntax Error
                LapysDevelopmentKit.objects.syntaxError = (function() {
                    // Initialization > Constructor
                    var constructor;

                    // Error Handling > (...)
                    try { LDKF.eval('(') }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Return
                    return constructor
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.syntaxErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.syntaxError, "prototype");

                // Timeout Error
                LapysDevelopmentKit.objects.timeoutError = LDKT.queryObjectNativeConstructor(GLOBAL, "TimeoutError");
                    // Prototype
                    LapysDevelopmentKit.objects.timeoutErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.timeoutError, "prototype");

                // Track Start Error
                LapysDevelopmentKit.objects.trackStartError = LDKT.queryObjectNativeConstructor(GLOBAL, "TrackStartError");
                    // Prototype
                    LapysDevelopmentKit.objects.trackStartErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.trackStartError, "prototype");

                // Transaction Inactive Error
                LapysDevelopmentKit.objects.transactionInactiveError = LDKT.queryObjectNativeConstructor(GLOBAL, "TransactionInactiveError");
                    // Prototype
                    LapysDevelopmentKit.objects.transactionInactiveErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.transactionInactiveError, "prototype");

                // Type Mismatch Error
                LapysDevelopmentKit.objects.typeMismatchError = LDKT.queryObjectNativeConstructor(GLOBAL, "TypeMismatchError");
                    // Prototype
                    LapysDevelopmentKit.objects.typeMismatchErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.typeMismatchError, "prototype");

                // Unknown Error
                LapysDevelopmentKit.objects.unknownError = LDKT.queryObjectNativeConstructor(GLOBAL, "UnknownError");
                    // Prototype
                    LapysDevelopmentKit.objects.unknownErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.unknownError, "prototype");

                // URI Error --- NOTE (Lapys) -> Can be generated via code like `decodeURIComponent("a%AFc")`
                LapysDevelopmentKit.objects.uriError = LDKT.queryObjectNativeConstructor(GLOBAL, "URIError");
                    // Prototype
                    LapysDevelopmentKit.objects.uriErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.uriError, "prototype");

                // URL Mismatch Error
                LapysDevelopmentKit.objects.urlMismatchError = LDKT.queryObjectNativeConstructor(GLOBAL, "URLMismatchError");
                    // Prototype
                    LapysDevelopmentKit.objects.urlMismatchErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.urlMismatchError, "prototype");

                // Version Error
                LapysDevelopmentKit.objects.versionError = LDKT.queryObjectNativeConstructor(GLOBAL, "VersionError");
                    // Prototype
                    LapysDevelopmentKit.objects.versionErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.versionError, "prototype");

                // Webkit Speech Recognition Error
                LapysDevelopmentKit.objects.webkitSpeechRecognitionError = LDKT.queryObjectNativeConstructor(GLOBAL, {constructorName: "SpeechRecognitionError", name: "webkitSpeechRecognitionError", STRICT: true});
                    // Prototype
                    LapysDevelopmentKit.objects.webkitSpeechRecognitionErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.webkitSpeechRecognitionError, "prototype");

                // Wrong Document Error
                LapysDevelopmentKit.objects.wrongDocumentError = LDKT.queryObjectNativeConstructor(GLOBAL, "WrongDocumentError");
                    // Prototype
                    LapysDevelopmentKit.objects.wrongDocumentErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.wrongDocumentError, "prototype");

            /* Constants */
                // Allows `class` Keyword --- NOTE (Lapys) -> Some environments do not support the `class` keyword although it even exists syntactically.
                LapysDevelopmentKit.constants.allowsClassKeyword = (function() {
                    // Initialization > Allows `class` Keyword
                    var allowsClassKeyword = true;

                    // Error Handling > (...)
                    try { LDKF.eval("(class {})") }
                    catch (error) { allowsClassKeyword = false }

                    // Return
                    return allowsClassKeyword
                })();

                // Environment Vendor Includes Node.js
                LapysDevelopmentKit.constants.isNode_jsEnvironment = LDKT.environmentVendorIs("Node.js");

        /* Global */
            /* LapysJS --- NOTE (Lapys) -> Purposely made complicated. */
            (function() {
                // Error--- NOTE (Lapys) -> Initial test for if the library is pre-installed here.
                (function(LapysJS) {
                    // Return
                    return typeof LapysJS == "object" && LDKF.isConstructible(LapysJS) && LDKF.toString(LapysJS) == "LapysJS v" + VERSION && LDKF.isVoid(LDKF.objectPrototypeGetProperty(LapysJS, "constructor"))
                })(LDKF.objectPrototypeGetProperty(GLOBAL, "LapysJS")) && LDKF.error.libraryIsPreInstalled();

                // (...) --- NOTE (Lapys) -> Update the Lapys Development Kit settings.
                (function(options) {
                    // Function
                        // Add Setting
                        function addSetting(setting, type, DEFAULT) {
                            // Initialization > Has Default
                            var hasDEFAULT = LDKF.arrayPrototypeLength(arguments) > 2;

                            // Update > Type
                            type || (type = "boolean");

                            // Modification > (Lapys Development Kit > Settings) > [Setting]
                            LDKI.settings[setting] = LDKF.objectPrototypeHasProperty(options, setting) ?
                                (function(setting) {
                                    // Logic > Return
                                    switch (type) {
                                        // Boolean
                                        case "boolean": return !!setting; break;

                                        // Number
                                        case "number": return LDKF.toNumber(setting); break;

                                        // String
                                        case "string": return LDKF.toString(setting)
                                    }
                                })(LDKF.objectPrototypeGetProperty(options, setting)) :
                                (hasDEFAULT ? DEFAULT : (function() {
                                    // Logic > Return
                                    switch (type) {
                                        // Boolean
                                        case "boolean": return false; break;

                                        // Number
                                        case "number": return +0; break;

                                        // String
                                        case "string": return ""
                                    }
                                })())
                        }

                        // Add Settings List
                        function addSettingsList(setting, DEFAULT) {
                            // Initialization > Has Default
                            var hasDEFAULT = LDKF.arrayPrototypeLength(arguments) > 1;

                            // Modification > (Lapys Development Kit > Settings) > [Setting]
                            LDKI.settings[setting] = LDKF.objectPrototypeHasProperty(options, setting) ?
                                (function(settingList) { return LDKF.isArray(settingList) ? settingList : (hasDEFAULT ? DEFAULT : []) })(LDKF.objectPrototypeGetProperty(options, setting)) :
                                (hasDEFAULT ? DEFAULT : [])
                        }

                    // Modification > Options
                        // Components
                        addSettingsList("components", ["accordion", "audio", "carousel", "drag-drop", "dropdown", "dynamic-text", "dynamic-time", "marquee", "pagination", "picture-in-picture", "scrollbar", "table", "toast", "tooltip", "video"]);

                        // Debug Mode
                        addSetting("debugMode", "boolean");

                        // Features
                        addSettingsList("features", ["fixed-long-scrolling", "focus-attribute", "momentum-scrolling", "long-scrolling", "script-attribute", "smooth-scrolling", "snap-scrolling"]);

                        // Global --- NOTE (Lapys) -> The global setting is really just an excuse to allow for an option to processing time.
                        addSettingsList("global", ["app", '$']);

                        // Prototypes
                        addSettingsList("prototypes", ["Array", "Date", "Element", "Function", "Object", "String"])
                })(LDKF.objectPrototypeHasProperty(GLOBAL, "LapysJS") ? LDKF.objectPrototypeGetProperty(GLOBAL, "LapysJS") : {});

                // Modification > Global > LapysJS
                LDKF.objectDefineProperty(GLOBAL, "LapysJS", {
                    // Configurable
                    configurable: false,

                    // Enumerable
                    enumerable: false,

                    // Value
                    value: (function() {
                        // Initialization > LapysJS
                        var LapysJS = new ((function() {
                            // Initialization > Constructor
                            var constructor = function LapysJS() {};

                            // Modification > Constructor > Prototype --- NOTE (Lapys) -> Made it as finicky as wanted, in this case: making the constructor and prototype `undefined`.
                            constructor.prototype = (function() {
                                // Initialization > Prototype
                                var prototype = new ((function() {
                                    // Initialization > Constructor
                                    var constructor = function() {};

                                    // Modification > Constructor > Prototype
                                    constructor.prototype = {constructor: undefined};

                                    // Return
                                    return constructor
                                })());

                                // Modification > Prototype
                                    // Temporary
                                    prototype.tmp = {};

                                    // To String
                                    prototype.toString = function toString() { return "LapysJS v" + VERSION };

                                // Return
                                return prototype
                            })();

                            // Return
                            return constructor
                        })());

                        // Modification > LapysJS > Processing Duration
                        LDKF.objectDefineConstantProperty(LapysJS, "processingDuration", {value: new (function LapysJSProcessingDuration() {})});
                            // Initiate
                            LapysJS.processingDuration.initiate = +0;

                            // Update
                            LapysJS.processingDuration.update = +0;

                        // Return
                        return LapysJS
                    })(),

                    // Writable
                    writable: false
                })
            })();
                // Environment
                LapysJS.environment = {};
                    // Global
                    LapysJS.environment.global = GLOBAL;

                    // Specifications
                    LapysJS.environment.specifications = {};
                        // Allows `class` Keyword
                        LapysJS.environment.specifications.allowsClassKeyword = LDKC.allowsClassKeyword;

                // Process
                LapysJS.process = {};
                    // Arguments
                    LapysJS.process.args = args;

                // Temporary Data --- NOTE (Lapys) -> Exposed private memory.
                    // Evaluation Scope
                    LapysJS.tmp.evalScope = new function EvaluationScope() {};
                        // Allows Class Keyword
                        LapysJS.tmp.evalScope.allowsClassKeyword = LDKC.allowsClassKeyword;

                        // Custom Error Constructors
                        LapysJS.tmp.evalScope.customErrorConstructors = [];

                        // Error
                        LapysJS.tmp.evalScope.error = LDKO.error;
                            // Capture Stack Trace
                            LapysJS.tmp.evalScope.errorCaptureStackTrace = LDKO.errorCaptureStackTrace;

                            // Prototype
                            LapysJS.tmp.evalScope.errorPrototype = LDKO.errorPrototype;

                        // Function > Prototype
                            // Is Native
                            LapysJS.tmp.evalScope.functionPrototypeIsNative = LDKF.functionPrototypeIsNative;

                        // Get Arguments Length
                        LapysJS.tmp.evalScope.getArgumentsLength = LDKF.getArgumentsLength;

                        // Global
                        LapysJS.tmp.evalScope.global = GLOBAL;

                        // Object
                            // Create
                            LapysJS.tmp.evalScope.objectCreate = LDKF.objectCreate;

                            // Prototype
                                // Set __Prototype__
                                LapysJS.tmp.evalScope.objectPrototypeSet__Prototype__ = LDKF.objectPrototypeSet__Prototype__;

                                // Set Property
                                LapysJS.tmp.evalScope.objectPrototypeSetProperty = LDKF.objectPrototypeSetProperty;

                // Version --- CHECKPOINT --- Immutable Accessor.
                LapysJS.version = VERSION;

        /* Lapys Development Kit */
            /* Data */
                /* LapysJS Error
                        --- NOTE ---
                            #Lapys: With code duplication, the custom LapysJS errors would be processed faster.
                                - This custom error pseudo constructor registers the first constructor unto the `LapysJS.tmp.evalScope.customErrorConstructors` registry.
                */
                LapysDevelopmentKit.data.lapysJSError = LDKT.createErrorPseudoConstructor("LapysJSError", "LapysJS.tmp.evalScope.error");
                    // (...) --- NOTE (Lapys) -> Access the `LapysJS.tmp.evalScope.customErrorConstructors` registry, rather than constructing a new `LapysJSError` object an querying its constructor.
                    (LapysDevelopmentKit.objects.lapysJSError = LapysJS.tmp.evalScope.lapysJSError = LapysJS.tmp.evalScope.customErrorConstructors[+0]);

                    // Prototype
                    LapysDevelopmentKit.data.lapysJSErrorPrototype = LapysDevelopmentKit.objects.lapysJSErrorPrototype = LapysJS.tmp.evalScope.lapysJSErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.lapysJSError, "prototype");

                    // LapysJS Initiate Error
                    LapysDevelopmentKit.data.lapysJSInitiateError = LDKT.createErrorPseudoConstructor("LapysJSInitiateError", "LapysJS.tmp.evalScope.lapysJSError", "LapysJS.tmp.evalScope.lapysJSErrorPrototype");
                        // (...)
                        (LapysDevelopmentKit.objects.lapysJSInitiateError = LapysJS.tmp.evalScope.customErrorConstructors[1]);

                    // LapysJS Update Error
                    LapysDevelopmentKit.data.lapysJSUpdateError = LDKT.createErrorPseudoConstructor("LapysJSUpdateError", "LapysJS.tmp.evalScope.lapysJSError", "LapysJS.tmp.evalScope.lapysJSErrorPrototype");
                        // (...)
                        (LapysDevelopmentKit.objects.lapysJSUpdateError = LapysJS.tmp.evalScope.customErrorConstructors[2]);

                // LapysJS Node List --- CHECKPOINT ---
                LapysDevelopmentKit.data.lapysJSNodeList = function LapysJSNodeList() {};
                    // Prototype
                    LapysDevelopmentKit.data.lapysJSNodeListPrototype;
                        // Length Getter
                        LapysDevelopmentKit.data.lapysJSNodeListPrototypeLengthGetter = function length() { return this.length };

                // LapysJS Pseudo Number --- CHECKPOINT ---
                // LapysJS Promise --- CHECKPOINT ---
                // LapysJS Safe Number --- CHECKPOINT ---

            /* Objects */
                // Active X Object
                LDKF.objectPrototypeHasProperty(LDKO, "activeXObject") || (LapysDevelopmentKit.objects.activeXObject = LDKT.queryObjectNativeConstructor(GLOBAL, "ActiveXObject"));
                    // Prototype
                    LapysDevelopmentKit.objects.activeXObjectPrototype = LDKF.objectPrototypeGetProperty(LDKO.activeXObject, "prototype");

                // Attribute
                LapysDevelopmentKit.objects.attribute = LDKT.queryObjectNativeConstructor(GLOBAL, "Attr", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.attributePrototype = LDKF.objectPrototypeGetProperty(LDKO.attribute, "prototype");

                // Audio Parameter Map
                LapysDevelopmentKit.objects.audioParameterMap = LDKT.queryObjectNativeConstructor(GLOBAL, "AudioParamMap");
                    // Prototype
                    LapysDevelopmentKit.objects.audioParameterMapPrototype = LDKF.objectPrototypeGetProperty(LDKO.audioParameterMap, "prototype");
                        // Get
                        LapysDevelopmentKit.objects.audioParameterMapPrototypeGet = LDKT.queryObjectNativeMethod(LDKO.audioParameterMapPrototype, {name: "get", source: "AudioParamMap.prototype.get"});

                        // Size Getter
                        LapysDevelopmentKit.objects.audioParameterMapPrototypeSizeGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.audioParameterMapPrototype, "size");

                // Cancel Animation Frame
                LapysDevelopmentKit.objects.cancelAnimationFrame = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "mozCancelAnimationFrame") || LDKF.objectPrototypeGetProperty(GLOBAL, "msCancelAnimationFrame") || LDKF.objectPrototypeGetProperty(GLOBAL, "webkitCancelAnimationFrame") || LDKF.objectPrototypeGetProperty(GLOBAL, "cancelAnimationFrame");

                    // Logic
                    if (!LDKF.isVoid(method))
                        // Logic > (...)
                        if (
                            LDKF.objectPrototypeIs.OR(LDKF.functionPrototypeGetName(method), "mozCancelAnimationFrame", "msCancelAnimationFrame", "webkitCancelAnimationFrame", "cancelAnimationFrame") &&
                            LDKF.functionPrototypeIsNative(method)
                        ) return method;
                        else LDKF.error.nativeToEnvironment("`cancelAnimationFrame` function");

                    else
                        // Return
                        return function cancelAnimationFrame(handle) { return LDKF.clearTimeout(handle) }
                })();

                // Clear Timeout
                LapysDevelopmentKit.objects.clearTimeout = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "clearTimeout");

                    // Logic > (...)
                    if (
                        (LDKC.isNode_jsEnvironment ? "clearTimeout" : LDKF.functionPrototypeGetName(method)) == "clearTimeout" &&
                        (LDKC.isNode_jsEnvironment || LDKF.functionPrototypeIsNative(method))
                    ) return method;
                    else LDKF.error.nativeToEnvironment("`clearTimeout` function")
                })();

                // CSS Numeric Array
                LapysDevelopmentKit.objects.cssNumericArray = LDKT.queryObjectNativeConstructor(GLOBAL, "CSSNumericArray");
                    // Prototype
                    LapysDevelopmentKit.objects.cssNumericArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.cssNumericArray, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.cssNumericArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.cssNumericArrayPrototype, "length");

                // CSS Rule List
                LapysDevelopmentKit.objects.cssRuleList = LDKT.queryObjectNativeConstructor(GLOBAL, "CSSRuleList");
                    // Prototype
                    LapysDevelopmentKit.objects.cssRuleListPrototype = LDKF.objectPrototypeGetProperty(LDKO.cssRuleList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.cssRuleListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.cssRuleListPrototype, {name: "item", source: "CSSRuleList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.cssRuleListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.cssRuleListPrototype, "length");

                // CSS Style Declaration
                LapysDevelopmentKit.objects.cssStyleDeclaration = LDKT.queryObjectNativeConstructor(GLOBAL, "CSSStyleDeclaration");
                    // Prototype
                    LapysDevelopmentKit.objects.cssStyleDeclarationPrototype = LDKF.objectPrototypeGetProperty(LDKO.cssStyleDeclaration, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.cssStyleDeclarationPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.cssStyleDeclarationPrototype, {name: "item", source: "CSSStyleDeclaration.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.cssStyleDeclarationPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.cssStyleDeclarationPrototype, "length");

                // Custom Element Registry
                LapysDevelopmentKit.objects.customElementRegistry = LDKT.queryObjectNativeConstructor(GLOBAL, "CustomElementRegistry");
                    // Prototype
                    LapysDevelopmentKit.objects.customElementRegistryPrototype = LDKF.objectPrototypeGetProperty(LDKO.customElementRegistry, "prototype");
                        // Define
                        LapysDevelopmentKit.objects.customElementRegistryPrototypeDefine = (function() {
                            // Initialization > Method
                            var method = LDKF.objectPrototypeGetProperty(LDKO.customElementRegistryPrototype, "define");

                            // Logic
                            if (!LDKF.isVoid(method))
                                // Logic > (...)
                                if (LDKF.functionPrototypeGetName(method) == "define" && LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error.nativeToEnvironment("`CustomElementRegistry.prototype.define` method")
                        })();

                // Data Transfer Item List
                LapysDevelopmentKit.objects.dataTransferItemList = LDKT.queryObjectNativeConstructor(GLOBAL, "DataTransferItemList");
                    // Prototype
                    LapysDevelopmentKit.objects.dataTransferItemListPrototype = LDKF.objectPrototypeGetProperty(LDKO.dataTransferItemList, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.dataTransferItemListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.dataTransferItemListPrototype, "length");

                // Date
                LapysDevelopmentKit.objects.date = LDKT.queryObjectNativeConstructor(GLOBAL, "Date");
                    // Now
                    LapysDevelopmentKit.objects.dateNow = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKO.date, "now");

                        // Logic > (...)
                        if (LDKF.functionPrototypeGetName(method) == "now" && LDKF.functionPrototypeIsNative(method)) return method;
                        else LDKF.error.nativeToEnvironment("`Date.now` method")
                    })();

                    // Prototype
                    LapysDevelopmentKit.objects.datePrototype = LDKF.objectPrototypeGetProperty(LDKO.date, "prototype");

                // Document
                LapysDevelopmentKit.objects.document = LDKT.queryObjectNativeConstructor(GLOBAL, "Document", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.documentPrototype = LDKF.objectPrototypeGetProperty(LDKO.document, "prototype");
                        // Register Element
                        LapysDevelopmentKit.objects.documentPrototypeRegisterElement = (function() {
                            // Initialization > Method
                            var method = LDKF.objectPrototypeGetProperty(LDKO.documentPrototype, "registerElement");

                            // Logic
                            if (!LDKF.isVoid(method))
                                // Logic > (...)
                                if (!LDKF.functionPrototypeGetName(method) && LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Document.prototype.registerElement` method")
                        })();

                // Document Fragment
                LapysDevelopmentKit.objects.documentFragment = LDKT.queryObjectNativeConstructor(GLOBAL, "DocumentFragment", STRICT = true);

                // Document Type
                LapysDevelopmentKit.objects.documentType = LDKT.queryObjectNativeConstructor(GLOBAL, "DocumentType");
                    // Prototype
                    LapysDevelopmentKit.objects.documentTypePrototype = LDKF.objectPrototypeGetProperty(LDKO.documentType, "prototype");

                // DOM Rectangle
                LapysDevelopmentKit.objects.domRectangle = LDKT.queryObjectNativeConstructor(GLOBAL, "DOMRect");

                // DOM Rectangle List
                LapysDevelopmentKit.objects.domRectangleList = LDKT.queryObjectNativeConstructor(GLOBAL, "DOMRectList");
                    // Prototype
                    LapysDevelopmentKit.objects.domRectangleListPrototype = LDKF.objectPrototypeGetProperty(LDKO.domRectangleList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.domRectangleListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.domRectangleListPrototype, {name: "item", source: "DOMRectList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.domRectangleListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.domRectangleListPrototype, "length");

                // DOM String List
                LapysDevelopmentKit.objects.domStringList = LDKT.queryObjectNativeConstructor(GLOBAL, "DOMStringList");
                    // Prototype
                    LapysDevelopmentKit.objects.domStringListPrototype = LDKF.objectPrototypeGetProperty(LDKO.domStringList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.domStringListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.domStringListPrototype, {name: "item", source: "DOMStringList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.domStringListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.domStringListPrototype, "length");

                // DOM Token List
                LapysDevelopmentKit.objects.domTokenList = LDKT.queryObjectNativeConstructor(GLOBAL, "DOMTokenList");
                    // Prototype
                    LapysDevelopmentKit.objects.domTokenListPrototype = LDKF.objectPrototypeGetProperty(LDKO.domTokenList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.domTokenListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.domTokenListPrototype, {name: "item", source: "DOMTokenList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.domTokenListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.domTokenListPrototype, "length");

                // Element
                LapysDevelopmentKit.objects.element = LDKT.queryObjectNativeConstructor(GLOBAL, "Element", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.elementPrototype = LDKF.objectPrototypeGetProperty(LDKO.element, "prototype");

                // Event
                LapysDevelopmentKit.objects.event = LDKT.queryObjectNativeConstructor(GLOBAL, "Event", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.eventPrototype = LDKF.objectPrototypeGetProperty(LDKO.event, "prototype");

                // Event Target
                LapysDevelopmentKit.objects.eventTarget = LDKT.queryObjectNativeConstructor(GLOBAL, "EventTarget");
                    // Prototype
                    LapysDevelopmentKit.objects.eventTargetPrototype = LDKF.objectPrototypeGetProperty(LDKO.eventTarget, "prototype");

                // File
                LapysDevelopmentKit.objects.file = LDKT.queryObjectNativeConstructor(GLOBAL, "File", STRICT = true);

                // File List
                LapysDevelopmentKit.objects.fileList = LDKT.queryObjectNativeConstructor(GLOBAL, "FileList");
                    // Prototype
                    LapysDevelopmentKit.objects.fileListPrototype = LDKF.objectPrototypeGetProperty(LDKO.fileList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.fileListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.fileListPrototype, {name: "item", source: "FileList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.fileListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.fileListPrototype, "length");

                // HTML All Collection
                LapysDevelopmentKit.objects.htmlAllCollection = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLAllCollection", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlAllCollectionPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlAllCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.htmlAllCollectionPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.htmlAllCollectionPrototype, {name: "item", source: "HTMLAllCollection.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.htmlAllCollectionPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.htmlAllCollectionPrototype, "length");

                // HTML Audio Element
                LapysDevelopmentKit.objects.htmlAudioElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLAudioElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlAudioElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlAudioElement, "prototype");

                // HTML Body Element
                LapysDevelopmentKit.objects.htmlBodyElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLBodyElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlBodyElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlBodyElement, "prototype");

                // HTML Collection
                LapysDevelopmentKit.objects.htmlCollection = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLCollection", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlCollectionPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.htmlCollectionPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.htmlCollectionPrototype, {name: "item", source: "HTMLCollection.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.htmlCollectionPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.htmlCollectionPrototype, "length");

                // HTML Document
                LapysDevelopmentKit.objects.htmlDocument = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLDocument", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlDocumentPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlDocument, "prototype");

                // HTML Element
                LapysDevelopmentKit.objects.htmlElement = LapysJS.tmp.evalScope.htmlElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlElement, "prototype");

                // HTML Form Controls Collection
                LapysDevelopmentKit.objects.htmlFormControlsCollection = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLFormControlsCollection");
                    // Prototype
                    LapysDevelopmentKit.objects.htmlFormControlsCollectionPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlFormControlsCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.htmlFormControlsCollectionPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.htmlFormControlsCollectionPrototype, {name: "item", source: "HTMLFormControlsCollection.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.htmlFormControlsCollectionPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.htmlFormControlsCollectionPrototype, "length");

                // HTML Head Element
                LapysDevelopmentKit.objects.htmlHeadElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLHeadElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlHeadElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlHeadElement, "prototype");

                // HTML Image Element
                LapysDevelopmentKit.objects.htmlImageElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLImageElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlImageElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlImageElement, "prototype");

                // HTML Input Element
                LapysDevelopmentKit.objects.htmlInputElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLInputElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlInputElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlInputElement, "prototype");

                // HTML Internal Frame Element
                LapysDevelopmentKit.objects.htmlIFrameElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLIFrameElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlIFrameElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlIFrameElement, "prototype");

                // HTML HTML Element
                LapysDevelopmentKit.objects.htmlHtmlElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLHtmlElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlHtmlElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlHtmlElement, "prototype");

                // HTML Options Collection
                LapysDevelopmentKit.objects.htmlOptionsCollection = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLOptionsCollection");
                    // Prototype
                    LapysDevelopmentKit.objects.htmlOptionsCollectionPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlOptionsCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.htmlOptionsCollectionPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.htmlOptionsCollectionPrototype, {name: "item", source: "HTMLOptionsCollection.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.htmlOptionsCollectionPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.htmlOptionsCollectionPrototype, "length");

                // HTML Table Element
                LapysDevelopmentKit.objects.htmlTableElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTableElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableElement, "prototype");

                // HTML Table Caption Element
                LapysDevelopmentKit.objects.htmlTableCaptionElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTableCaptionElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableCaptionElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableCaptionElement, "prototype");

                // HTML Table Cell Element
                LapysDevelopmentKit.objects.htmlTableCellElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTableCellElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableCellElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableCellElement, "prototype");

                // HTML Table Column Element
                LapysDevelopmentKit.objects.htmlTableColumnElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTableColumnElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableColumnElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableColumnElement, "prototype");

                // HTML Table Row Element
                LapysDevelopmentKit.objects.htmlTableRowElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTableRowElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableRowElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableRowElement, "prototype");

                // HTML Table Section Element
                LapysDevelopmentKit.objects.htmlTableSectionElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTableSectionElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableSectionElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableSectionElement, "prototype");

                // HTML Textarea Element
                LapysDevelopmentKit.objects.htmlTextAreaElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTextAreaElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTextAreaElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTextAreaElement, "prototype");

                // HTML Time Element
                LapysDevelopmentKit.objects.htmlTimeElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTimeElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTimeElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTimeElement, "prototype");

                // HTML Title Element
                LapysDevelopmentKit.objects.htmlTitleElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLTitleElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTitleElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTitleElement, "prototype");

                // HTML Script Element
                LapysDevelopmentKit.objects.htmlScriptElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLScriptElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlScriptElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlScriptElement, "prototype");

                // HTML Style Element
                LapysDevelopmentKit.objects.htmlStyleElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLStyleElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlStyleElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlStyleElement, "prototype");

                // HTML Unknown Element
                LapysDevelopmentKit.objects.htmlUnknownElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLUnknownElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlUnknownElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlUnknownElement, "prototype");

                // HTML Video Element
                LapysDevelopmentKit.objects.htmlVideoElement = LDKT.queryObjectNativeConstructor(GLOBAL, "HTMLVideoElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlVideoElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlVideoElement, "prototype");

                // Image
                LapysDevelopmentKit.objects.image = (function() {
                    // Error Handling > Return
                    try { return LDKT.queryObjectNativeConstructor(GLOBAL, "Image", STRICT = true) } catch (error) {}

                    // Return
                    return LDKT.queryObjectNativeConstructor(GLOBAL, {constructorName: "HTMLImageElement", name: "Image", STRICT: true}, STRICT = true)
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.imagePrototype = LDKF.objectPrototypeGetProperty(LDKO.image, "prototype");

                // Map
                LapysDevelopmentKit.objects.map = LDKT.queryObjectNativeConstructor(GLOBAL, "Map");
                    // Prototype
                    LapysDevelopmentKit.objects.mapPrototype = LDKF.objectPrototypeGetProperty(LDKO.map, "prototype");
                        // Get
                        LapysDevelopmentKit.objects.mapPrototypeGet = LDKT.queryObjectNativeMethod(LDKO.mapPrototype, {name: "get", source: "Map.prototype.get"});

                        // Size Getter
                        LapysDevelopmentKit.objects.mapPrototypeSizeGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.mapPrototype, "size");

                // Math
                LapysDevelopmentKit.constants.math = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "Math");

                    // Logic > (...)
                    if (
                        typeof object == "object" &&
                        LDKF.toString(object) == "[object Math]" &&
                        (function(constructor) { return constructor === LDKO.object || LDKF.isVoid(constructor) })(LDKF.objectPrototypeConstructor(object)) &&
                        (function(prototype) { return prototype === LDKO.objectPrototype || LDKF.isVoid(prototype) })(LDKF.objectPrototypePrototype(object))
                    ) return object;
                    else LDKF.error.nativeToEnvironment("`Math` object")
                })();

                // Media Key Status Map
                LapysDevelopmentKit.objects.mediaKeyStatusMap = LDKT.queryObjectNativeConstructor(GLOBAL, "MediaKeyStatusMap");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaKeyStatusMapPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaKeyStatusMap, "prototype");
                        // Get
                        LapysDevelopmentKit.objects.mediaKeyStatusMapPrototypeGet = LDKT.queryObjectNativeMethod(LDKO.mediaKeyStatusMapPrototype, {name: "get", source: "MediaKeyStatusMap.prototype.get"}, STRICT = true);

                        // Length Getter
                        LapysDevelopmentKit.objects.mediaKeyStatusMapPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.mediaKeyStatusMapPrototype, "size");

                // Media List
                LapysDevelopmentKit.objects.mediaList = LDKT.queryObjectNativeConstructor(GLOBAL, "MediaList", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mediaListPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.mediaListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.mediaListPrototype, {name: "item", source: "MediaList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.mediaListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.mediaListPrototype, "length");

                // MIME Type Array
                LapysDevelopmentKit.objects.mimeTypeArray = LDKT.queryObjectNativeConstructor(GLOBAL, "MimeTypeArray", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mimeTypeArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.mimeTypeArray, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.mimeTypeArrayPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.mimeTypeArrayPrototype, {name: "item", source: "MimeTypeArray.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.mimeTypeArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.mimeTypeArrayPrototype, "length");

                // Mutation Event
                LapysDevelopmentKit.objects.mutationEvent = LDKT.queryObjectNativeConstructor(GLOBAL, "MutationEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mutationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mutationEvent, "prototype");

                // Named Node Map
                LapysDevelopmentKit.objects.namedNodeMap = LDKT.queryObjectNativeConstructor(GLOBAL, "NamedNodeMap", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.namedNodeMapPrototype = LDKF.objectPrototypeGetProperty(LDKO.namedNodeMap, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.namedNodeMapPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.namedNodeMapPrototype, {name: "item", source: "NamedNodeMap.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.namedNodeMapPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.namedNodeMapPrototype, "length");

                // Node
                LapysDevelopmentKit.objects.node = LDKT.queryObjectNativeConstructor(GLOBAL, "Node", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.nodePrototype = LDKF.objectPrototypeGetProperty(LDKO.node, "prototype");
                        // Document Type Node
                        LapysDevelopmentKit.objects.nodePrototypeDocumentTypeNode = (function() {
                            // Initialization > Number
                            var number = LDKF.objectPrototypeGetProperty(LDKO.nodePrototype, "DOCUMENT_TYPE_NODE");

                            // Logic
                            if (!LDKF.isVoid(number))
                                // Logic > (...)
                                if (LDKF.numberPrototypeIsPositiveInteger(number)) return number;
                                else LDKF.error.nativeToEnvironment("`Node.prototype.DOCUMENT_TYPE_NODE` property")
                        })();

                        // Element Node
                        LapysDevelopmentKit.objects.nodePrototypeElementNode = (function() {
                            // Initialization > Number
                            var number = LDKF.objectPrototypeGetProperty(LDKO.nodePrototype, "ELEMENT_NODE");

                            // Logic
                            if (!LDKF.isVoid(number))
                                // Logic > (...)
                                if (LDKF.numberPrototypeIsPositiveInteger(number)) return number;
                                else LDKF.error.nativeToEnvironment("`Node.prototype.ELEMENT_NODE` property")
                        })();

                // Node List
                LapysDevelopmentKit.objects.nodeList = LDKT.queryObjectNativeConstructor(GLOBAL, "NodeList", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.nodeListPrototype = LDKF.objectPrototypeGetProperty(LDKO.nodeList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.nodeListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.nodeListPrototype, {name: "item", source: "NodeList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.nodeListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.nodeListPrototype, "length");

                // Notification
                LapysDevelopmentKit.objects.notification = LDKT.queryObjectNativeConstructor(GLOBAL, "Notification");

                // Performance
                LapysDevelopmentKit.objects.performance = LDKT.queryObjectNativeConstructor(GLOBAL, "Performance", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.performancePrototype = LDKF.objectPrototypeGetProperty(LDKO.performance, "prototype");
                        // Now
                        LapysDevelopmentKit.objects.performancePrototypeNow = (function() {
                            // Initialization > Method
                            var method = LDKF.objectPrototypeGetProperty(LDKO.performancePrototype, "now");

                            // Logic > (...)
                            if (LDKF.isVoid(method)) return function now() { return LDKF.dateNow() };
                            else if (LDKF.functionPrototypeGetName(method) == "now" && LDKF.functionPrototypeIsNative(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Performance.prototype.now` method")
                        })();

                // Performance
                LapysDevelopmentKit.constants.performance = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "performance");

                    // Logic
                    if (!LDKF.isVoid(object))
                        // Logic > (...)
                        if (
                            typeof object == "object" &&
                            (function(stream) { return stream == "[object]" || stream == "[object Object]" || stream == "[object Performance]" })(LDKF.toString(object)) &&
                            (function(constructor) { return constructor === LDKO.object || constructor === LDKO.performance || LDKF.isVoid(constructor) })(LDKF.objectPrototypeConstructor(object)) &&
                            (function(prototype) { return (prototype === LDKO.objectPrototype || prototype === LDKO.performancePrototype) || LDKF.isVoid(prototype) })(LDKF.objectPrototypePrototype(object))
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`performance` object")
                })();

                // Plugin Array
                LapysDevelopmentKit.objects.pluginArray = LDKT.queryObjectNativeConstructor(GLOBAL, "PluginArray", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.pluginArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.pluginArray, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.pluginArrayPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.pluginArrayPrototype, {name: "item", source: "PluginArray.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.pluginArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.pluginArrayPrototype, "length");

                // Radio Node List
                LapysDevelopmentKit.objects.radioNodeList = LDKT.queryObjectNativeConstructor(GLOBAL, "RadioNodeList");
                    // Prototype
                    LapysDevelopmentKit.objects.radioNodeListPrototype = LDKF.objectPrototypeGetProperty(LDKO.radioNodeList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.radioNodeListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.radioNodeListPrototype, {name: "item", source: "RadioNodeList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.radioNodeListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.radioNodeListPrototype, "length");

                // Range
                LapysDevelopmentKit.objects.range = LDKT.queryObjectNativeConstructor(GLOBAL, "Range", STRICT = true);

                // Request Animation Frame
                LapysDevelopmentKit.objects.requestAnimationFrame = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "mozRequestAnimationFrame") || LDKF.objectPrototypeGetProperty(GLOBAL, "msRequestAnimationFrame") || LDKF.objectPrototypeGetProperty(GLOBAL, "webkitRequestAnimationFrame") || LDKF.objectPrototypeGetProperty(GLOBAL, "requestAnimationFrame");

                    // Logic
                    if (!LDKF.isVoid(method))
                        // Logic > (...)
                        if (
                            LDKF.objectPrototypeIs.OR(LDKF.functionPrototypeGetName(method), "mozRequestAnimationFrame", "msRequestAnimationFrame", "webkitRequestAnimationFrame", "requestAnimationFrame") &&
                            LDKF.functionPrototypeIsNative(method)
                        ) return method;
                        else LDKF.error.nativeToEnvironment("`requestAnimationFrame` function");

                    else
                        // Return
                        return function requestAnimationFrame(method) { return LDKF.setTimeout(method) }
                })();

                // Selection
                LapysDevelopmentKit.objects.selection = LDKT.queryObjectNativeConstructor(GLOBAL, "Selection", STRICT = true);

                // Set
                LapysDevelopmentKit.objects.set = LDKT.queryObjectNativeConstructor(GLOBAL, "Set");
                    // Prototype
                    LapysDevelopmentKit.objects.setPrototype = LDKF.objectPrototypeGetProperty(LDKO.set, "prototype");
                        // Size Getter
                        LapysDevelopmentKit.objects.setPrototypeSizeGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.setPrototype, "size");

                // Set Timeout
                LapysDevelopmentKit.objects.setTimeout = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "setTimeout");

                    // Logic > (...)
                    if (
                        LDKF.functionPrototypeGetName(method) == "setTimeout" &&
                        (LDKC.isNode_jsEnvironment || LDKF.functionPrototypeIsNative(method))
                    ) return method;
                    else LDKF.error.nativeToEnvironment("`setTimeout` function")
                })();

                // Set
                LapysDevelopmentKit.objects.sourceBufferList = LDKT.queryObjectNativeConstructor(GLOBAL, "SourceBufferList");
                    // Prototype
                    LapysDevelopmentKit.objects.sourceBufferListPrototype = LDKF.objectPrototypeGetProperty(LDKO.sourceBufferList, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.sourceBufferListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.sourceBufferListPrototype, "length");

                // Style Property Map
                LapysDevelopmentKit.objects.stylePropertyMap = LDKT.queryObjectNativeConstructor(GLOBAL, "StylePropertyMap");
                    // Prototype
                    LapysDevelopmentKit.objects.stylePropertyMapPrototype = LDKF.objectPrototypeGetProperty(LDKO.stylePropertyMap, "prototype");
                        // Get
                        LapysDevelopmentKit.objects.stylePropertyMapPrototypeGet = LDKT.queryObjectNativeMethod(LDKO.stylePropertyMapPrototype, {name: "get", source: "StylePropertyMap.prototype.get"});

                        // Size Getter
                        LapysDevelopmentKit.objects.stylePropertyMapPrototypeSizeGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.stylePropertyMapPrototype, "size");

                // Style Property Map Read-Only
                LapysDevelopmentKit.objects.stylePropertyMapReadOnly = LDKT.queryObjectNativeConstructor(GLOBAL, "StylePropertyMapReadOnly");
                    // Prototype
                    LapysDevelopmentKit.objects.stylePropertyMapReadOnlyPrototype = LDKF.objectPrototypeGetProperty(LDKO.stylePropertyMapReadOnly, "prototype");
                        // Get
                        LapysDevelopmentKit.objects.stylePropertyMapReadOnlyPrototypeGet = LDKT.queryObjectNativeMethod(LDKO.stylePropertyMapReadOnlyPrototype, {name: "get", source: "StylePropertyMapReadOnly.prototype.get"});

                        // Size Getter
                        LapysDevelopmentKit.objects.stylePropertyMapReadOnlyPrototypeSizeGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.stylePropertyMapReadOnlyPrototype, "size");

                // Style Sheet List
                LapysDevelopmentKit.objects.styleSheetList = LDKT.queryObjectNativeConstructor(GLOBAL, "StyleSheetList", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.styleSheetListPrototype = LDKF.objectPrototypeGetProperty(LDKO.styleSheetList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.styleSheetListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.styleSheetListPrototype, {name: "item", source: "StyleSheetList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.styleSheetListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.styleSheetListPrototype, "length");

                // SVG Length
                LapysDevelopmentKit.objects.svgLength = LDKT.queryObjectNativeConstructor(GLOBAL, "SVGLength");
                    // Prototype
                    LapysDevelopmentKit.objects.svgLengthPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgLength, "prototype");

                // SVG Length List
                LapysDevelopmentKit.objects.svgLengthList = LDKT.queryObjectNativeConstructor(GLOBAL, "SVGLengthList");
                    // Prototype
                    LapysDevelopmentKit.objects.svgLengthListPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgLengthList, "prototype");
                        // Get Item
                        LapysDevelopmentKit.objects.svgLengthListPrototypeGetItem = LDKT.queryObjectNativeMethod(LDKO.svgLengthListPrototype, {name: "getItem", source: "SVGLengthList.prototype.getItem"});

                        // Number of Items Getter
                        LapysDevelopmentKit.objects.svgLengthListPrototypeNumberOfItemsGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.svgLengthListPrototype, "numberOfItems");

                // SVG Number List
                LapysDevelopmentKit.objects.svgNumberList = LDKT.queryObjectNativeConstructor(GLOBAL, "SVGNumberList");
                    // Prototype
                    LapysDevelopmentKit.objects.svgNumberListPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgNumberList, "prototype");
                        // Get Item
                        LapysDevelopmentKit.objects.svgNumberListPrototypeGetItem = LDKT.queryObjectNativeMethod(LDKO.svgNumberListPrototype, {name: "getItem", source: "SVGNumberList.prototype.getItem"});

                        // Number of Items Getter
                        LapysDevelopmentKit.objects.svgNumberListPrototypeNumberOfItemsGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.svgNumberListPrototype, "numberOfItems");

                // SVG Point List
                LapysDevelopmentKit.objects.svgPointList = LDKT.queryObjectNativeConstructor(GLOBAL, "SVGPointList");
                    // Prototype
                    LapysDevelopmentKit.objects.svgPointListPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgPointList, "prototype");
                        // Get Item
                        LapysDevelopmentKit.objects.svgPointListPrototypeGetItem = LDKT.queryObjectNativeMethod(LDKO.svgPointListPrototype, {name: "getItem", source: "SVGPointList.prototype.getItem"});

                        // Number of Items Getter
                        LapysDevelopmentKit.objects.svgPointListPrototypeNumberOfItemsGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.svgPointListPrototype, "numberOfItems");

                // SVG String List
                LapysDevelopmentKit.objects.svgStringList = LDKT.queryObjectNativeConstructor(GLOBAL, "SVGStringList");
                    // Prototype
                    LapysDevelopmentKit.objects.svgStringListPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgStringList, "prototype");
                        // Get Item
                        LapysDevelopmentKit.objects.svgStringListPrototypeGetItem = LDKT.queryObjectNativeMethod(LDKO.svgStringListPrototype, {name: "getItem", source: "SVGStringList.prototype.getItem"});

                        // Number of Items Getter
                        LapysDevelopmentKit.objects.svgStringListPrototypeNumberOfItemsGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.svgStringListPrototype, "numberOfItems");

                // SVG Transform List
                LapysDevelopmentKit.objects.svgTransformList = LDKT.queryObjectNativeConstructor(GLOBAL, "SVGTransformList");
                    // Prototype
                    LapysDevelopmentKit.objects.svgTransformListPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgTransformList, "prototype");
                        // Get Item
                        LapysDevelopmentKit.objects.svgTransformListPrototypeGetItem = LDKT.queryObjectNativeMethod(LDKO.svgTransformListPrototype, {name: "getItem", source: "SVGTransformList.prototype.getItem"});

                        // Number of Items Getter
                        LapysDevelopmentKit.objects.svgTransformListPrototypeNumberOfItemsGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.svgTransformListPrototype, "numberOfItems");

                // Text
                LapysDevelopmentKit.objects.text = LDKT.queryObjectNativeConstructor(GLOBAL, "Text", STRICT = true);

                // Text Track Cue List
                LapysDevelopmentKit.objects.textTrackCueList = LDKT.queryObjectNativeConstructor(GLOBAL, "TextTrackCueList");
                    // Prototype
                    LapysDevelopmentKit.objects.textTrackCueListPrototype = LDKF.objectPrototypeGetProperty(LDKO.textTrackCueList, "prototype");
                        // Get Cue By Id
                        LapysDevelopmentKit.objects.textTrackCueListPrototypeGetCueById = LDKT.queryObjectNativeMethod(LDKO.textTrackCueListPrototype, {name: "getCueById", source: "TextTrackCueList.prototype.getCueById"});

                        // Length Getter
                        LapysDevelopmentKit.objects.textTrackCueListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.textTrackCueListPrototype, "length");

                // Text Track List
                LapysDevelopmentKit.objects.textTrackList = LDKT.queryObjectNativeConstructor(GLOBAL, "TextTrackList");
                    // Prototype
                    LapysDevelopmentKit.objects.textTrackListPrototype = LDKF.objectPrototypeGetProperty(LDKO.textTrackList, "prototype");
                        // Get Track By Id
                        LapysDevelopmentKit.objects.textTrackListPrototypeGetTrackById = LDKT.queryObjectNativeMethod(LDKO.textTrackListPrototype, {name: "getTrackById", source: "TextTrackList.prototype.getTrackById"});

                        // Length Getter
                        LapysDevelopmentKit.objects.textTrackListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.textTrackListPrototype, "length");

                // Touch
                LapysDevelopmentKit.objects.touch = LDKT.queryObjectNativeConstructor(GLOBAL, "Touch");

                // Touch List
                LapysDevelopmentKit.objects.touchList = LDKT.queryObjectNativeConstructor(GLOBAL, "TouchList");
                    // Prototype
                    LapysDevelopmentKit.objects.touchListPrototype = LDKF.objectPrototypeGetProperty(LDKO.touchList, "prototype");
                        // Item
                        LapysDevelopmentKit.objects.touchListPrototypeItem = LDKT.queryObjectNativeMethod(LDKO.touchListPrototype, {name: "item", source: "TouchList.prototype.item"});

                        // Length Getter
                        LapysDevelopmentKit.objects.touchListPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.touchListPrototype, "length");

                // Window
                LapysDevelopmentKit.objects.window = LDKT.queryObjectNativeConstructor(GLOBAL, "Window", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.windowPrototype = LDKF.objectPrototypeGetProperty(LDKO.window, "prototype");

                // XML Document
                LapysDevelopmentKit.objects.xmlDocument = (function() {
                    // Error Handling > Return
                    try { return LDKT.queryObjectNativeConstructor(GLOBAL, "XMLDocument", STRICT = true) } catch (error) {}

                    // Return
                    return LDKT.queryObjectNativeConstructor(GLOBAL, {constructorName: "Document", name: "XMLDocument", STRICT: true}, STRICT = true)
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.xmlDocumentPrototype = LDKF.objectPrototypeGetProperty(LDKO.xmlDocument, "prototype");

                // XML HTTP Request Event Target
                LapysDevelopmentKit.objects.xmlHTTPRequestEventTarget = LDKT.queryObjectNativeConstructor(GLOBAL, "XMLHttpRequestEventTarget", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.xmlHTTPRequestEventTargetPrototype = LDKF.objectPrototypeGetProperty(LDKO.xmlHTTPRequestEventTarget, "prototype");

                // 8-Bit Integer Array
                LapysDevelopmentKit.objects.int8Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Int8Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.int8ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.int8Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.int8ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.int8ArrayPrototype, "length");

                // 8-Bit Unsigned Integer Array
                LapysDevelopmentKit.objects.uint8Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Uint8Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.uint8ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.uint8Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.uint8ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.uint8ArrayPrototype, "length");

                // 8-Bit Unsigned Integer Clamped Array
                LapysDevelopmentKit.objects.uint8ClampedArray = LDKT.queryObjectNativeConstructor(GLOBAL, "Uint8ClampedArray");
                    // Prototype
                    LapysDevelopmentKit.objects.uint8ClampedArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.uint8ClampedArray, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.uint8ClampedArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.uint8ClampedArrayPrototype, "length");

                // 16-Bit Integer Array
                LapysDevelopmentKit.objects.int16Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Int16Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.int16ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.int16Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.int16ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.int16ArrayPrototype, "length");

                // 16-Bit Unsigned Integer Array
                LapysDevelopmentKit.objects.uint16Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Uint16Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.uint16ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.uint16Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.uint16ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.uint16ArrayPrototype, "length");

                // 32-Bit Float Array
                LapysDevelopmentKit.objects.float32Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Float32Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.float32ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.float32Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.float32ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.float32ArrayPrototype, "length");

                // 32-Bit Integer Array
                LapysDevelopmentKit.objects.int32Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Int32Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.int32ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.int32Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.int32ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.int32ArrayPrototype, "length");

                // 64-Bit Big Integer Array
                LapysDevelopmentKit.objects.bigInt64Array = LDKT.queryObjectNativeConstructor(GLOBAL, "BigInt64Array");
                    // Prototype
                    LapysDevelopmentKit.objects.bigInt64ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.bigInt64Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.bigInt64ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.bigInt64ArrayPrototype, "length");

                // 64-Bit Big Unsigned Integer Array
                LapysDevelopmentKit.objects.bigUint64Array = LDKT.queryObjectNativeConstructor(GLOBAL, "BigUint64Array");
                    // Prototype
                    LapysDevelopmentKit.objects.bigUint64ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.bigUint64Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.bigUint64ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.bigUint64ArrayPrototype, "length");

                // 64-Bit Float Array
                LapysDevelopmentKit.objects.float64Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Float64Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.float64ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.float64Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.float64ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.float64ArrayPrototype, "length");

                // 32-Bit Unsigned Integer Array
                LapysDevelopmentKit.objects.uint32Array = LDKT.queryObjectNativeConstructor(GLOBAL, "Uint32Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.uint32ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.uint32Array, "prototype");
                        // Length Getter
                        LapysDevelopmentKit.objects.uint32ArrayPrototypeLengthGetter = LDKT.getArrayLikePrototypeLengthDescriptorGetter(LDKO.uint32ArrayPrototype, "length");

            /* Constants */
                // Has Active X Object Constructor
                LapysDevelopmentKit.constants.hasActiveXObjectConstructor = LDKT.isPublicConstructor(LDKO.activeXObject);

                // Has Audio Parameter Map Constructor
                LapysDevelopmentKit.constants.hasAudioParameterMapConstructor = LDKT.isPublicConstructor(LDKO.audioParameterMap);

                // Has CSS Numeric Array Constructor
                LapysDevelopmentKit.constants.hasCSSNumericArrayConstructor = LDKT.isPublicConstructor(LDKO.cssNumericArray);

                // Has CSS Rule List Constructor
                LapysDevelopmentKit.constants.hasCSSRuleListConstructor = LDKT.isPublicConstructor(LDKO.cssRuleList);

                // Has CSS Style Declaration Constructor
                LapysDevelopmentKit.constants.hasCSSStyleDeclarationConstructor = LDKT.isPublicConstructor(LDKO.cssStyleDeclaration);

                // Has Data Transfer Item List Constructor
                LapysDevelopmentKit.constants.hasDataTransferItemListConstructor = LDKT.isPublicConstructor(LDKO.dataTransferItemList);

                // Has Document Constructor
                LapysDevelopmentKit.constants.hasDocumentConstructor = LDKT.isPublicConstructor(LDKO.document);

                // Has Document Type Constructor
                LapysDevelopmentKit.constants.hasDocumentTypeConstructor = LDKT.isPublicConstructor(LDKO.documentType);

                // Has DOM Rectangle List Constructor
                LapysDevelopmentKit.constants.hasDOMRectangleListConstructor = LDKT.isPublicConstructor(LDKO.domRectangleList);

                // Has DOM String List Constructor
                LapysDevelopmentKit.constants.hasDOMStringListConstructor = LDKT.isPublicConstructor(LDKO.domStringList);

                // Has DOM Token List Constructor
                LapysDevelopmentKit.constants.hasDOMTokenListConstructor = LDKT.isPublicConstructor(LDKO.domTokenList);

                // Has Element Constructor
                LapysDevelopmentKit.constants.hasElementConstructor = LDKT.isPublicConstructor(LDKO.element);

                // Has Error Constructor
                LapysDevelopmentKit.constants.hasErrorConstructor = LDKT.isPublicConstructor(LDKO.error);

                // Has Event Constructor
                LapysDevelopmentKit.constants.hasEventConstructor = LDKT.isPublicConstructor(LDKO.event);

                // Has Event Target Constructor
                LapysDevelopmentKit.constants.hasEventTargetConstructor = LDKT.isPublicConstructor(LDKO.eventTarget);

                // Has File List Constructor
                LapysDevelopmentKit.constants.hasFileListConstructor = LDKT.isPublicConstructor(LDKO.fileList);

                // Has HTML All Collection Constructor
                LapysDevelopmentKit.constants.hasHTMLAllCollectionConstructor = LDKT.isPublicConstructor(LDKO.htmlAllCollection);

                // Has HTML Body Element Constructor
                LapysDevelopmentKit.constants.hasHTMLBodyElementConstructor = LDKT.isPublicConstructor(LDKO.htmlBodyElement);

                // Has HTML Document Constructor
                LapysDevelopmentKit.constants.hasHTMLDocumentConstructor = LDKT.isPublicConstructor(LDKO.htmlDocument);

                // Has HTML Collection Constructor
                LapysDevelopmentKit.constants.hasHTMLCollectionConstructor = LDKT.isPublicConstructor(LDKO.htmlCollection);

                // Has HTML Element Constructor
                LapysDevelopmentKit.constants.hasHTMLElementConstructor = LDKT.isPublicConstructor(LDKO.htmlElement);

                // Has HTML Form Controls Collection Constructor
                LapysDevelopmentKit.constants.hasHTMLFormControlsCollectionConstructor = LDKT.isPublicConstructor(LDKO.htmlFormControlsCollection);

                // Has HTML Options Collection Constructor
                LapysDevelopmentKit.constants.hasHTMLOptionsCollectionConstructor = LDKT.isPublicConstructor(LDKO.htmlOptionsCollection);

                // Has HTML Unknown Element Constructor
                LapysDevelopmentKit.constants.hasHTMLUnknownElementConstructor = LDKT.isPublicConstructor(LDKO.htmlUnknownElement);

                // Has LapysJS Error Constructor
                LapysDevelopmentKit.constants.hasLapysJSErrorConstructor = LDKF.objectPrototypeHasProperty(LDKD, "lapysJSError");

                // Has Map Constructor
                LapysDevelopmentKit.constants.hasMapConstructor = LDKT.isPublicConstructor(LDKO.map);

                // Has Media Key Status Map Constructor
                LapysDevelopmentKit.constants.hasMediaKeyStatusMapConstructor = LDKT.isPublicConstructor(LDKO.mediaKeyStatusMap);

                // Has Media List Constructor
                LapysDevelopmentKit.constants.hasMediaListConstructor = LDKT.isPublicConstructor(LDKO.mediaList);

                // Has Named Node Map Constructor
                LapysDevelopmentKit.constants.hasNamedNodeMapConstructor = LDKT.isPublicConstructor(LDKO.namedNodeMap);

                // Has Node Constructor
                LapysDevelopmentKit.constants.hasNodeConstructor = LDKT.isPublicConstructor(LDKO.node);

                // Has Node List Constructor
                LapysDevelopmentKit.constants.hasNodeListConstructor = LDKT.isPublicConstructor(LDKO.nodeList);

                // Has Radio Node List Constructor
                LapysDevelopmentKit.constants.hasRadioNodeListConstructor = LDKT.isPublicConstructor(LDKO.radioNodeList);

                // Has Set Constructor
                LapysDevelopmentKit.constants.hasSetConstructor = LDKT.isPublicConstructor(LDKO.set);

                // Has Source Buffer List Constructor
                LapysDevelopmentKit.constants.hasSourceBufferListConstructor = LDKT.isPublicConstructor(LDKO.sourceBufferList);

                // Has Style Property Map Constructor
                LapysDevelopmentKit.constants.hasStylePropertyMapConstructor = LDKT.isPublicConstructor(LDKO.stylePropertyMap);

                // Has Style Property Map Read-Only Constructor
                LapysDevelopmentKit.constants.hasStylePropertyMapReadOnlyConstructor = LDKT.isPublicConstructor(LDKO.stylePropertyMapReadOnly);

                // Has SVG Length Constructor
                LapysDevelopmentKit.constants.hasSVGLengthConstructor = LDKT.isPublicConstructor(LDKO.svgLength);

                // Has SVG Length List Constructor
                LapysDevelopmentKit.constants.hasSVGLengthListConstructor = LDKT.isPublicConstructor(LDKO.svgLengthList);

                // Has SVG Number List Constructor
                LapysDevelopmentKit.constants.hasSVGNumberListConstructor = LDKT.isPublicConstructor(LDKO.svgNumberList);

                // Has SVG Point List Constructor
                LapysDevelopmentKit.constants.hasSVGPointListConstructor = LDKT.isPublicConstructor(LDKO.svgPointList);

                // Has SVG String List Constructor
                LapysDevelopmentKit.constants.hasSVGStringListConstructor = LDKT.isPublicConstructor(LDKO.svgStringList);

                // Has SVG Transform List Constructor
                LapysDevelopmentKit.constants.hasSVGTransformListConstructor = LDKT.isPublicConstructor(LDKO.svgTransformList);

                // Has Text Track Cue List Constructor
                LapysDevelopmentKit.constants.hasTextTrackCueListConstructor = LDKT.isPublicConstructor(LDKO.textTrackCueList);

                // Has Text Track List Constructor
                LapysDevelopmentKit.constants.hasTextTrackListConstructor = LDKT.isPublicConstructor(LDKO.textTrackList);

                // Has Touch List Constructor
                LapysDevelopmentKit.constants.hasTouchListConstructor = LDKT.isPublicConstructor(LDKO.touchList);

                // Has XML Document Constructor
                LapysDevelopmentKit.constants.hasXMLDocumentConstructor = LDKT.isPublicConstructor(LDKO.xmlDocument);

                // Has 8-Bit Integer Array Constructor
                LapysDevelopmentKit.constants.hasInt8ArrayConstructor = LDKT.isPublicConstructor(LDKO.int8Array);

                // Has 8-Bit Unsigned Integer Clamped Array Constructor
                LapysDevelopmentKit.constants.hasUint8ClampedArrayConstructor = LDKT.isPublicConstructor(LDKO.uint8ClampedArray);

                // Has 8-Bit Unsigned Integer Array Constructor
                LapysDevelopmentKit.constants.hasUint8ArrayConstructor = LDKT.isPublicConstructor(LDKO.uint8Array);

                // Has 16-Bit Integer Array Constructor
                LapysDevelopmentKit.constants.hasInt16ArrayConstructor = LDKT.isPublicConstructor(LDKO.int16Array);

                // Has 16-Bit Unsigned Integer Array Constructor
                LapysDevelopmentKit.constants.hasUint16ArrayConstructor = LDKT.isPublicConstructor(LDKO.uint16Array);

                // Has 32-Bit Float Array Constructor
                LapysDevelopmentKit.constants.hasFloat32ArrayConstructor = LDKT.isPublicConstructor(LDKO.float32Array);

                // Has 32-Bit Integer Array Constructor
                LapysDevelopmentKit.constants.hasInt32ArrayConstructor = LDKT.isPublicConstructor(LDKO.int32Array);

                // Has 32-Bit Unsigned Integer Array Constructor
                LapysDevelopmentKit.constants.hasUint32ArrayConstructor = LDKT.isPublicConstructor(LDKO.uint32Array);

                // Has 64-Bit Big Integer Array Constructor
                LapysDevelopmentKit.constants.hasBigInt64ArrayConstructor = LDKT.isPublicConstructor(LDKO.bigInt64Array);

                // Has 64-Bit Big Unsigned Integer Array Constructor
                LapysDevelopmentKit.constants.hasBigUint64ArrayConstructor = LDKT.isPublicConstructor(LDKO.bigUint64Array);

                // Has 64-Bit Float Array Constructor
                LapysDevelopmentKit.constants.hasFloat64ArrayConstructor = LDKT.isPublicConstructor(LDKO.float64Array);

                // Supports Custom Elements
                LapysDevelopmentKit.constants.supportsCustomElements = LDKC.allowsClassKeyword && LDKT.isPublicConstructor(LDKO.customElementRegistry);

            /* Constants, Objects */
                // Console --- NOTE (Lapys) -> The test for the `console` methods are similar to most other native constructor tests.
                LapysDevelopmentKit.constants.console = (function() {
                    // Initialization > (Object, (Has) Prototype)
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "console"),
                        prototype = LDKF.objectPrototypePrototype(object),
                        hasPrototype = !LDKF.isVoid(prototype);

                    // Modification > (Lapys Development Kit > Objects) > (Console > Prototype)
                    hasPrototype && (LDKO.consolePrototype = prototype);

                    // Logic > (...) --- NOTE (Lapys) -> The `LapysDevelopmentKit.objects.console` constructor gets defined here.
                    if (
                        typeof object == "object" &&
                        (function(stream) { return stream == "[object Console]" || stream == "[object console]" || stream == "[object Object]" })(LDKF.toString(object)) &&
                        (LDKT.environmentVendorIs("Node.js") ?
                            (function(constructor) {
                                // Return
                                return (LDKF.functionPrototypeGetName(constructor) == "Console" && LDKF.functionPrototypeIsUserDefined(constructor))
                            })(LDKO.console = LDKF.objectPrototypeConstructor(object)) :
                            (function(constructor) {
                                // Return
                                return constructor === LDKO.object || (
                                    LDKF.toString(constructor) == "[object Console]" || (
                                        LDKF.functionPrototypeGetName(constructor) == "Console" &&
                                        LDKF.functionPrototypeIsNative(constructor)
                                    )
                                )
                            })(LDKO.console = LDKF.objectPrototypeConstructor(object, STRICT = true))
                        ) &&
                        (hasPrototype ? prototype !== LDKO.object && (function(stream) { return stream == "[object ConsolePrototype]" || stream == "[object Object]" })(LDKF.toString(prototype)) : true)
                    ) return object;
                    else LDKF.error.nativeToEnvironment("`console` object")
                })();
                    // Group
                    LapysDevelopmentKit.objects.consoleGroup = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.console, "group");

                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(method) == "group" && LDKF.functionPrototypeIsNative(method)) || LDKT.isConsoleMethod(method)) return method;
                        else LDKF.error.nativeToEnvironment("`console.group` method")
                    })();

                    // Group End
                    LapysDevelopmentKit.objects.consoleGroupEnd = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.console, "groupEnd");

                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(method) == "groupEnd" && LDKF.functionPrototypeIsNative(method)) || LDKT.isConsoleMethod(method)) return method;
                        else LDKF.error.nativeToEnvironment("`console.groupEnd` method")
                    })();

                    // Log
                    LapysDevelopmentKit.objects.consoleLog = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.console, "log");

                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(method) == "log" && LDKF.functionPrototypeIsNative(method)) || LDKT.isConsoleMethod(method)) return method;
                        else LDKF.error.nativeToEnvironment("`console.log` method")
                    })();

                    // Warn
                    LapysDevelopmentKit.objects.consoleWarn = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.console, "warn");

                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(method) == "warn" && LDKF.functionPrototypeIsNative(method)) || LDKT.isConsoleMethod(method)) return method;
                        else LDKF.error.nativeToEnvironment("`console.warn` method")
                    })();

                // Custom Elements
                LapysDevelopmentKit.constants.customElements = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "customElements");

                    // Logic
                    if (LDKC.isWebEnvironment && LDKC.supportsCustomElements)
                        // Logic > (...)
                        if (
                            typeof object == "object" &&
                            LDKF.toString(object) == "[object CustomElementRegistry]" &&
                            LDKF.objectPrototypeConstructor(customElements) === LDKO.customElementRegistry &&
                            LDKF.objectPrototypePrototype(customElements) === LDKO.customElementRegistryPrototype
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`customElements` object")
                })();

                // Document --- NOTE (Lapys) -> The constant points to the document initiating this script.
                LapysDevelopmentKit.constants.document = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "document");

                    // Logic
                    if (LDKC.isWebEnvironment)
                        // Logic > (...)
                        if (
                            typeof object == "object" &&
                            (function(stream) { return stream == "[object]" || stream == "[object Document]" || stream == "[object HTMLDocument]" })(LDKF.toString(object)) &&
                            (function(constructor) { return LDKF.isNull(constructor) || constructor === LDKO.document || constructor === LDKO.htmlDocument || constructor === LDKO.object })(LDKF.objectPrototypeConstructor(object, STRICT = true)) &&
                            (function(prototype) { return (prototype === LDKO.objectPrototype || LDKF.isVoid(prototype)) || (LDKC.hasDocumentConstructor && prototype === LDKO.documentPrototype) || (LDKC.hasHTMLDocumentConstructor && prototype === LDKO.htmlDocumentPrototype) })(LDKF.objectPrototypePrototype(object))
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`document` object")
                })();
                    // Prototype
                        // Create Element
                        LapysDevelopmentKit.objects.documentPrototypeCreateElement = (function() {
                            // Initialization > Method
                            var method = LDKF.objectPrototypeGetProperty(LDKC.hasDocumentConstructor ? LDKO.documentPrototype : LDKC.document, "createElement");

                            // Logic
                            if (LDKC.isWebEnvironment)
                                // Logic > (...)
                                if (LDKF.functionPrototypeGetName(method) == "createElement" && LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Document.prototype.createElement` method")
                        })();

            /* Constants */
                // HTML Div Element
                LapysDevelopmentKit.constants.htmlDivElement = LDKC.isWebEnvironment ? LDKF.documentPrototypeCreateElement("div") : undefined;

                // Supports Standard Custom Elements
                LapysDevelopmentKit.constants.supportsStandardCustomElements = LDKC.allowsClassKeyword && LDKC.supportsCustomElements;

            /* Objects */
                // Element > Prototype
                    // Get Attribute
                    LapysDevelopmentKit.objects.elementPrototypeGetAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getAttribute");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetAttributeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getAttribute` method")
                    })();

                    // Get Attribute Node
                    LapysDevelopmentKit.objects.elementPrototypeGetAttributeNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getAttributeNode");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetAttributeNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getAttribute` method")
                    })();

                    // Get Bounding Client Rectangle
                    LapysDevelopmentKit.objects.elementPrototypeGetBoundingClientRectangle = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getBoundingClientRect");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetBoundingClientRectangleMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getBoundingClientRect` method")
                    })();

                    // Get Client Rectangles
                    LapysDevelopmentKit.objects.elementPrototypeGetClientRectangles = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getBoundingClientRect");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetBoundingClientRectangleMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getBoundingClientRect` method")
                    })();

                    // Get Elements By Tag Name
                    LapysDevelopmentKit.objects.elementPrototypeGetElementsByTagName = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getElementsByTagName");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetElementsByTagNameMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getElementsByTagName` method")
                    })();

                    // Has Attribute
                    LapysDevelopmentKit.objects.elementPrototypeHasAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "hasAttribute");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic
                            if (LDKF.isVoid(method))
                                // Return
                                return function hasAttribute(name) { return LDKF.isElementLike(this) ? LDKF.elementPrototypeGetAttribute(this, name) : LDKF.error("`this` must be an element") };

                            else
                                // Logic > (...)
                                if (LDKF.functionPrototypeGetName(method) == "hasAttribute" && LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Element.prototype.hasAttribute` method")
                    })();

                    // Has Attributes
                    LapysDevelopmentKit.objects.elementPrototypeHasAttributes = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "hasAttributes");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic
                            if (LDKF.isVoid(method))
                                // Return
                                return function hasAttributes(names) {
                                    // Error
                                    LDKF.isElementLike(this) || LDKF.error("`this` must be an element");

                                    // Initialization > (Iterator, Return Value)
                                    var iterator = LDKF.getArgumentsLength(arguments), returnValue = false;

                                    // Logic > Return
                                    if (!iterator) return false;

                                    // Loop > Logic > Return
                                    while (iterator) if (!LDKF.elementPrototypeHasAttribute(this, arguments[iterator -= 1])) return false;

                                    // Return
                                    return true
                                };

                            else
                                // Logic > (...)
                                if (LDKF.functionPrototypeGetName(method) == "hasAttributes" && LDKF.functionPrototypeIsNative(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Element.prototype.hasAttributes` method")
                    })();

                    // Insert Adjacent Element
                    LapysDevelopmentKit.objects.elementPrototypeInsertAdjacentElement = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "insertAdjacentElement");

                        // Update > Method
                        LDKF.isVoid(method) && (method = LDKF.objectPrototypeGetProperty(LDKO.htmlElementPrototype, "insertAdjacentElement"));

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeInsertAdjacentElementMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.insertAdjacentElement` method")
                    })();

                    // Insert Adjacent HTML
                    LapysDevelopmentKit.objects.elementPrototypeInsertAdjacentHTML = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "insertAdjacentHTML");

                        // Update > Method
                        LDKF.isVoid(method) && (method = LDKF.objectPrototypeGetProperty(LDKO.htmlElementPrototype, "insertAdjacentHTML"));

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeInsertAdjacentHTMLMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.insertAdjacentHTML` method")
                    })();

                    // Insert Adjacent Text
                    LapysDevelopmentKit.objects.elementPrototypeInsertAdjacentText = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "insertAdjacentText");

                        // Update > Method
                        LDKF.isVoid(method) && (method = LDKF.objectPrototypeGetProperty(LDKO.htmlElementPrototype, "insertAdjacentText"));

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeInsertAdjacentTextMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.insertAdjacentText` method")
                    })();

                    // Remove Attribute
                    LapysDevelopmentKit.objects.elementPrototypeRemoveAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "removeAttribute");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeRemoveAttributeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.removeAttribute` method")
                    })();

                    // Remove Attribute Node
                    LapysDevelopmentKit.objects.elementPrototypeRemoveAttributeNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "removeAttributeNode");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeRemoveAttributeNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.removeAttributeNode` method")
                    })();

                    // Set Attribute
                    LapysDevelopmentKit.objects.elementPrototypeSetAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "setAttribute");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeSetAttributeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.setAttribute` method")
                    })();

                    // Set Attribute Node
                    LapysDevelopmentKit.objects.elementPrototypeSetAttributeNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "setAttributeNode");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeSetAttributeNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.setAttributeNode` method")
                    })();

                // Event Target > Prototype
                    // Add Event Listener
                    LapysDevelopmentKit.objects.eventTargetPrototypeAddEventListener = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasEventTargetConstructor ? LDKO.eventTargetPrototype : LDKC.htmlDivElement, "addEventListener");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic
                            if (!LDKF.isVoid(method))
                                // Logic > (...)
                                if (LDKT.isEventTargetPrototypeAddEventListenerMethod(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Node.prototype.addEventListener` method")
                    })();

                    // Attach Event
                    LapysDevelopmentKit.objects.eventTargetPrototypeAttachEvent = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasEventTargetConstructor ? LDKO.eventTargetPrototype : LDKC.htmlDivElement, "attachEvent");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic
                            if (!LDKF.isVoid(method))
                                // Logic > (...)
                                if (LDKT.isEventTargetPrototypeAttachEventMethod(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Node.prototype.attachEvent` method")
                    })();

                    // Detach Event
                    LapysDevelopmentKit.objects.eventTargetPrototypeDetachEvent = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasEventTargetConstructor ? LDKO.eventTargetPrototype : LDKC.htmlDivElement, "detachEvent");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic
                            if (!LDKF.isVoid(method))
                                // Logic > (...)
                                if (LDKT.isEventTargetPrototypeDetachEventMethod(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Node.prototype.detachEvent` method")
                    })();

                    // Remove Event Listener
                    LapysDevelopmentKit.objects.eventTargetPrototypeRemoveEventListener = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasEventTargetConstructor ? LDKO.eventTargetPrototype : LDKC.htmlDivElement, "removeEventListener");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic
                            if (!LDKF.isVoid(method))
                                // Logic > (...)
                                if (LDKT.isEventTargetPrototypeRemoveEventListenerMethod(method)) return method;
                                else LDKF.error.nativeToEnvironment("`Node.prototype.removeEventListener` method")
                    })();

                // HTML Element > Prototype
                    // Blur
                    LapysDevelopmentKit.objects.htmlElementPrototypeBlur = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasHTMLElementConstructor ? LDKO.htmlElementPrototype : LDKC.htmlDivElement, "blur");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isHTMLElementPrototypeBlurMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`HTMLElement.prototype.blur` method")
                    })();

                    // Focus
                    LapysDevelopmentKit.objects.htmlElementPrototypeFocus = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasHTMLElementConstructor ? LDKO.htmlElementPrototype : LDKC.htmlDivElement, "focus");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isHTMLElementPrototypeFocusMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`HTMLElement.prototype.focus` method")
                    })();

                // Node > Prototype
                    // Append Child
                    LapysDevelopmentKit.objects.nodePrototypeAppendChild = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "appendChild");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeAppendChildMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.appendChild` method")
                    })();

                    // Clone Node
                    LapysDevelopmentKit.objects.nodePrototypeCloneNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "cloneNode");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeCloneNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.cloneNode` method")
                    })();

                    // Contains
                    LapysDevelopmentKit.objects.nodePrototypeContains = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "contains");

                        // Update > Method
                        LDKF.isVoid(method) && (method = LDKF.objectPrototypeGetProperty(LDKO.htmlElementPrototype, "contains"));

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeContainsMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.contains` method")
                    })();

                    // Has Child Nodes
                    LapysDevelopmentKit.objects.nodePrototypeHasChildNodes = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "hasChildNodes");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeHasChildNodesMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.hasChildNodes` method")
                    })();

                    // Insert Before
                    LapysDevelopmentKit.objects.nodePrototypeInsertBefore = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "insertBefore");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeInsertBeforeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.insertBefore` method")
                    })();

                    // Normalize
                    LapysDevelopmentKit.objects.nodePrototypeNormalize = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "normalize");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeNormalizeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.normalize` method")
                    })();

                    // Remove Child
                    LapysDevelopmentKit.objects.nodePrototypeRemoveChild = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "removeChild");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeRemoveChildMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.removeChild` method")
                    })();

                    // Replace Child
                    LapysDevelopmentKit.objects.nodePrototypeReplaceChild = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "replaceChild");

                        // Logic
                        if (LDKC.isWebEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeReplaceChildMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.replaceChild` method")
                    })();

            /* Functions */
                // Element > Prototype
                    // Add To Attribute --- CHECKPOINT ---
                    // Add To Class --- CHECKPOINT ---
                    // Get Attribute --- CHECKPOINT ---
                    // Get Attribute Node --- CHECKPOINT ---
                    // Has Attribute --- CHECKPOINT ---
                    // Has Attribute Node --- CHECKPOINT ---
                    // Has Attributes --- CHECKPOINT ---
                    // Has In Attribute --- CHECKPOINT ---
                    // Has In Class --- CHECKPOINT ---
                    // Remove Attribute --- CHECKPOINT ---
                    // Remove Attribute Node --- CHECKPOINT ---
                    // Remove From Attribute --- CHECKPOINT ---
                    // Remove From Class --- CHECKPOINT ---
                    // Replace Attribute --- CHECKPOINT ---
                    // Replace Attribute Node --- CHECKPOINT ---
                    // Replace In Attribute --- CHECKPOINT ---
                    // Replace From Attribute --- CHECKPOINT ---
                    // Set Attribute --- CHECKPOINT ---
                    // Set Attribute Node --- CHECKPOINT ---

                // HTML Element > Prototype
                    // Blur --- CHECKPOINT ---
                    // Click --- CHECKPOINT ---
                    // Focus --- CHECKPOINT ---

            /* Data
                    --- NOTE ---
                        #Lapys: All data types here do not expose their constructors explicitly.
            */
                // Component --- CHECKPOINT --- NOTE (Lapys) -> All components extend to this constructor (which extends to `HTMLElement`).
                    // Accordion --- CHECKPOINT ---
                    // Carousel --- CHECKPOINT ---
                    // DragDrop --- CHECKPOINT ---
                    // Dropdown --- CHECKPOINT ---
                    // Dynamic Text --- CHECKPOINT ---
                        // Dynamic Cursor --- CHECKPOINT ---
                        // Dynamic Character --- CHECKPOINT ---
                    // Dynamic Time --- CHECKPOINT ---
                    // Marquee --- CHECKPOINT ---
                    // Media --- CHECKPOINT ---
                        // Audio --- CHECKPOINT ---
                        // Video --- CHECKPOINT ---
                    // Pagination --- CHECKPOINT ---
                    // Picture-in-Picture --- CHECKPOINT ---
                    // Scrollbar --- CHECKPOINT ---
                    // Table --- CHECKPOINT ---
                    // Toast --- CHECKPOINT ---
                    // Tooltip --- CHECKPOINT ---

            /* Math */
                // Integer Multiplication --- CITE (Lapys) -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill`.
                LapysDevelopmentKit.math.imul = function imul(numberA, numberB) {
                    // Initialization > Number (A, B) (Maximum, Minimum)
                    var numberAMaximum = (numberA >>> 16) & 0xFFFF, numberAMinimum = numberA & 0xFFFF,
                        numberBMaximum = (numberB >>> 16) & 0xFFFF, numberBMinimum = numberB & 0xFFFF;

                    // Return --- NOTE (Lapys) -> Sign unsigned value.
                    return ((numberAMinimum * numberBMinimum) + (((numberAMaximum * numberBMinimum + numberAMinimum * numberBMaximum) << 16) >>> +0) | +0)
                };

                // Random
                LapysDevelopmentKit.math.random = function random() { return LDKM.random.randomizer() };
                    // Generate Seed ---- NOTE (Lapys) -> Creates a XOR FNV 1A state.
                    LapysDevelopmentKit.math.random.generateSeeder = function xfnv1a(seed) {
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
                    LapysDevelopmentKit.math.random.generateRandomizer = function sfc32(hashA, hashB, hashC, hashD) {
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
                    LapysDevelopmentKit.math.random.randomizer = (function(seeder) { return LDKM.random.generateRandomizer(seeder(), seeder(), seeder(), seeder()) })(LDKM.random.generateSeeder(""));

            /* Constants */
                // Clock
                LapysDevelopmentKit.constants.clock = new LDKD.clock;

                // Performance Is Void
                LapysDevelopmentKit.constants.hasPerformanceObject = !LDKF.isVoid(LDKC.performance);

    /* Phase */
        /* Initiate
                --- NOTE ---
                    #Lapys:
                        - Update the LapysJS objects.
                        - Modify object prototypes (e.g.: `Array.prototype`, `Function.prototype`, e.t.c.).
                        - Initiate global functions and objects (e.g.: `array`, `func`, e.t.c.).
        */
        function INITIATE() {
            // --- CHECKPOINT ---
            LDKC.has__Define__GetterProperty || LDKF.warn("No accessors");
            LDKC.has__Proto__Accessor || LDKF.warn("No `__proto__` property");

            /* Modification */
                /* LapysJS */
                    // Components --- NOTE (Lapys) -> The components are actually not constructors.
                    LDKF.objectDefineConstantProperty(LapysJS, "components", {value: new (function LapysJSComponents() {})});
                        // Accordion
                        LDKF.objectDefineConstantProperty(LapysJS.components, "Accordion", {value: function Accordion() { return LDKD.component.accordion.apply(LDKD.component, arguments) }});

                        // Carousel --- CHECKPOINT ---
                        // Drag & Drop
                        // Dropdown --- NOTE (Lapys) -> Or Dropmenu.
                        // Dynamic Text
                        // Dynamic Time
                        // Marquee --- NOTE (Lapys) -> Or Roulette.
                        // Media
                            // Audio
                            // Video
                        // Pagination
                        // Picture-in-Picture
                        // Scrollbar
                        // Table
                        // Toast --- NOTE (Lapys) -> Or Snack Bar.
                        // Tooltip

                    // Debug Mode
                    LDKF.objectDefineConstantProperty(LapysJS, "debugMode", {value: LDKI.settings.debugMode});

                    // Features --- CHECKPOINT ---
                    LDKF.objectDefineConstantProperty(LapysJS, "features", {value: LDKI.settings.features});
                        // Attributes
                            // Focus
                            // Script

                        // Scrolling
                            // Fixed Long-Scrolling
                            // Long Scrolling
                            // Momentum Scrolling
                            // Smooth Scrolling
                            // Snap Scrolling

                // Array
                    // Distinct
                    LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.array, "distinct", function distinct(array) {
                        // Return
                        return LDKF.isArray(array) ? LDKF.arrayPrototypeDistinct(array) : LDKF.error("Argument specified must be an array")
                    });

                    // First
                    LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.array, "first", function first(array) {
                        // Return
                        return LDKF.isArray(array) ? LDKF.arrayPrototypeFirst(array) : LDKF.error("Argument specified must be an array")
                    });

                    // Last
                    LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.array, "last", function last(array) {
                        // Return
                        return LDKF.isArray(array) ? LDKF.arrayPrototypeLast(array) : LDKF.error("Argument specified must be an array")
                    });

                    // [Logic] Prototype

                // Date > Prototype --- CHECKPOINT ---
                    // Now
                    // To ISO String

                // Element > Prototype
                    // Momentum Scroll By
                    // Momentum Scroll into View
                    // Momentum Scroll To

                // [Logic] Function > Prototype

                // Object > Prototype
                    // Define
                    // Describe
                    // Free
                    // Freeze
                    // Keys
                    // Melt
                    // __Prototype__
                    // __Prototype Chain__
                    // Undefine
                    // Values

                // String > Prototype
                    // Trim
                    // Trim End
                    // Trim Left
                    // Trim Right
                    // Trim Start

            /* Global */
                // Application
                // Array
                // Bits --- NOTE (Lapys) -> Experimental.
                    // AND
                    // OR
                    // Shift Left
                    // Shift Right
                    // Two's Complement

                // Boolean
                    // AND
                    // NAND
                    // NOR
                    // NOT
                    // OR
                    // XNOR
                    // XOR

                // Browser
                // Check
                // Chain
                // Copy
                // Create Attribute
                // Create Document Fragment
                // Create Element
                // Cut
                // Download
                // Execute
                // File
                // Float
                // Free Input
                // Function
                LDKF.objectDefineProperty(GLOBAL, "func", {configurable: true, enumerable: false, value: function func() { return LDKF.createFunction.apply(LDKF, arguments) }, writable: true});
                    // Extend --- CHECKPOINT ---
                    LDKF.objectDefineProperty(GLOBAL.func, "extend", {configurable: true, enumerable: false, value: function extend(derived, base) { LDKF.objectPrototypeSetProperty(derived, "prototype", LDKF.objectPrototypeGetProperty(base, "prototype")); return derived }, writable: true});

                // Global This --- NOTE (Lapys) -> To be honest, the `globalThis` property does not always match the global object.
                LDKF.objectPrototypeHasProperty(GLOBAL, "globalThis") || LDKF.objectDefineProperty(GLOBAL, "globalThis", {configurable: true, enumerable: false, value: GLOBAL, writable: true});

                // Integer
                // Interval
                // Lapys Development Kit
                LapysJS.debugMode && LDKF.objectPrototypeSetProperties(GLOBAL, [
                    {name: "LapysDevelopmentKit", value: LapysDevelopmentKit}, {name: "LDK", value: LapysDevelopmentKit},
                    {name: "LDKC", value: LapysDevelopmentKit.constants},
                    {name: "LDKD", value: LapysDevelopmentKit.data},
                    {name: "LDKE", value: LapysDevelopmentKit.environment},
                    {name: "LDKF", value: LapysDevelopmentKit.functions},
                    {name: "LDKI", value: LapysDevelopmentKit.information},
                    {name: "LDKM", value: LapysDevelopmentKit.math},
                    {name: "LDKO", value: LapysDevelopmentKit.objects},
                    {name: "LDKS", value: LapysDevelopmentKit.storage},
                    {name: "LDKT", value: LapysDevelopmentKit.test}
                ]);

                // Length
                // Mathematics
                // Maximum
                // [Get] Maximum [Object]
                // Minimum
                // [Get] Minimum [Object]
                // Momentum Scroll By
                // Momentum Scroll Into View
                // Momentum Scroll To
                // Now
                // Number
                // Object
                    // Concatenate
                    // Define Property
                    // Flatten
                    // Get Own Property Descriptor
                    // Get Own Property Descriptors
                    // Get Own Property Names
                    // Get Own Property Symbols
                    // Get Own Property Values
                    // Get Prototype Of
                    // Keys
                    // Port
                    // Set Prototype Of
                    // Watch

                // Once
                // On Attribute Added
                // On Attribute Change
                // On Attribute Count Change
                // On Attribute Removed
                // On DOM Change
                // On DOM Node Added
                // On DOM Node Count Change
                // On DOM Node Removed
                // On DOM Ready
                // On Element Added
                // On Element Change
                // On Element Count Change
                // On Element Removed
                // On Node Added
                // On Node Count Change
                // On Node Removed
                // On Property Added
                // On Property Change
                // On Property Count Change
                // On Property Removed
                // Paste
                // Print
                // Random
                // Random Set
                // Regular Expression
                // Repeat
                // String
                // Strict Input
                // Symbol
                // Timeout
                // When
                // $a
                // $c
                // $d
                // $i
                // $n
                // $p
                // $t
                // $$
        }

        /* Update
                --- NOTE ---
                    #Lapys:
                        - Integrate LapysJS components during runtime.
                        - Integrate LapysJS features during runtime.
        */
        function UPDATE() {}

    // Initiate
    try { STATE || LDKF.objectDefineConstantProperty(LapysJS.processingDuration, "initiate", {value: LDKF.functionPrototypeMeasure(INITIATE)}) }
    catch (error) { PRIVATE = error; STATE = INITIATE_ERROR_STATE }

    // Update
    try { STATE || LDKF.objectDefineConstantProperty(LapysJS.processingDuration, "update", {value: LDKF.functionPrototypeMeasure(UPDATE)}) }
    catch (error) { PRIVATE = error; STATE = UPDATE_ERROR_STATE }

    // Logic > Error
    switch (STATE) {
        // Initiate
        case INITIATE_ERROR_STATE: LDKF.throwLapysJSInitiateError("Error initializing library:\n\t\r" + LDKF.errorPrototypeGetMessage(PRIVATE)); break;

        // Update
        case UPDATE_ERROR_STATE: LDKF.throwLapysJSUpdateError("Error integrating library runtime:\n\t\r" + LDKF.errorPrototypeGetMessage(PRIVATE))
    }

    // [Console Messages] Console > Group
    LDKF.consoleGroup("LapysJS v" + VERSION);
        // Console > Log
        LDKF.consoleLog("Debug Mode =", LapysJS.debugMode);
        LDKF.consoleLog("Processing Duration =", LapysJS.processingDuration.initiate + LapysJS.processingDuration.update);
        LDKF.consoleLog('\n');
    LDKF.consoleGroupEnd();

    // Return
    return STATE
})()
