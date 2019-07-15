/** [LapysJS] Main
    @author: Lapys Dev Team
    @description: LapysJS is a general-purpose, minimalist, semantic JavaScript library.
    @version: 0.0.8
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Details:
                -- Average Cumulative Processing Duration: 250ms
                -- Average File Upload Speed: 70ms
                -- Average Phase Processing Duration: 12.5ms
                -- Supported Development Environments:
                        --- Android (browser)
                        --- Internet Explorer 5 - 11 (browser)
                            ---- The `Ignore Missing Features` flag must be active (set to `true`) to run on versions 5 - 10.
                        --- Google Chrome (browser)
                        --- Microsoft Edge (browser)
                        --- Mozilla Firefox (browser)
                        --- Netscape Navigator 9
                        --- Node.js (runtime)
                        --- Safari (browser)

                -- Supported Environment Standards:
                    --- ECMAScript 2, 3rd Edition (1999) - current...
                    --- JavaScript v1.3 - current...

            - Notes:
                -- The library makes an effort to use only native features of JavaScript to allow for universal compatibility with legacy & modern host environments.

                    It also avoids liberal use of vendor-specific (or environment-restricted) features & APIs.
                    This is mainly due to subtle inconsistencies in the adoption of the ECMAScript standard for JavaScript in consumer software and custom runtimes
                    (Hence the need for conditional comments, fallbacks, polyfills, shims, shivs and so on).

                    Conversely, this decision supports the design standards of the Lapys Development Kit into JavaScript such as:
                        --- software to be executed has four phases: Initiate, Update, Reset, Terminate (also known as RIUT),
                        --- private and public features are independent & separate but still communicate between each other (private being the main authority),
                        --- multiple solutions (often special-purpose) are deferred in favor of a single general-purpose solution when feasible,
                        --- syntax is explained well enough to be understood without bias/ context (through the code and not comments),
                        --- and so on...

                -- Over its years of development, the library is still a bare-bones version of what it could be.

    --- RULES ---
        #Lapys:
            - All expressions/ statements/ values must be intentional (avoid the methodologies of Sloppy Mode in JavaScript [https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode]).
            - All features must be alphabetically defined & ordered if feasible.
            - All non-universal features are banned (e.g.: Arrow functions, class objects, REST parameters and so on).
            - Avoid naming an object property `constructor`, instead defer to `constructorRoutine` (it is not universally standard yet).
            - Avoid naming an object property `function`, instead defer to `routine` (it is not universally standard yet).
            - Due to the ECMAScript standard supporting multiple zeroes, it is a rule to explicitly & strictly differentiate between each of those values (except in special cases).
            - Inline function expressions are only allowed in:
                -- Defining the `Main` function or
                -- Defining a phase: `Initiate`, `Update`, `Reset` or `Terminate` or
                -- If the alternative is less efficient/ preferable.
            - Modules that allow public access to private features of the library should prefix the `$` character.

    --- UPDATE REQUIRED ---
        #Lapys:
            - Also check for vendor-specific features.
            - Add the concept of Lazy JS [http://danieltao.com/lazy.js/] to LapysJS.
            - Spoof-proof `.htc` file add-ons with LapysJS features (if possible).
            - Target development environments (these may lack a core (and/ or modern) JavaScript feature or not work for unknown reasons...):
                -- Internet Explorer 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- Netscape Navigator 2 - 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- others...
            - Update comment-based documentation to include the `Constant` label.

    --- WARN ---
        #Lapys:
            - The 'Ignore Missing Features` setting must be set to `true` to enable the library to work in legacy browsers like Internet Explorer.
            - The `LapysDevelopmentKit.Functions.stringPrototypeIsColor` method and `LapysDevelopmentKit.Objects.stringPrototypeCharacterCodeAt` polyfill are heavy in byte-size.
*/
+(function LapysJSMain() {
    /* Constant > ... --- REDACT (Lapys) */
    var AUTHOR = "Lapys",
        DESCRIPTION = "LapysJS is a general-purpose, minimalist, semantic JavaScript library",
        URL = "https://www.github.com/LapysDev/LapysJS",
        VERSION = "0.0.8";

    /* Global */
        // Any --- NOTE (Lapys) -> Unique object for representing non-specific data.
        var ANY = {},

        /* Global
                --- NOTE (Lapys) -> The global namespace of the current environment (hopefully points to the global object (e.g.: `global`, `window` e.t.c.)).
                --- WARN (Lapys) -> Always assumed to be constructible.
        */
        GLOBAL = this,

        // Lapys Development Kit
        LapysDevelopmentKit = (function() {
            // Class > Lapys Development Kit
            function LapysDevelopmentKit() {}
                // Temporary Data
                LapysDevelopmentKit.prototype.tmp = {};

            /* Definition > Lapys Development Kit */
            var LapysDevelopmentKit = new LapysDevelopmentKit;
                // Constants
                LapysDevelopmentKit.Constants = {Assertions: {}, Keywords: {}, Numbers: {}, Objects: {}, Strings: {}};

                // Data --- NOTE (Lapys) -> Custom-defined structure types.
                LapysDevelopmentKit.Data = {};

                // Environment --- NOTE (Lapys) -> Data about the current host environment.
                LapysDevelopmentKit.Environment = {Data: {}, Global: GLOBAL, Type: null, State: "OK", Vendors: []};

                // Function
                LapysDevelopmentKit.Functions = {
                    // Get Arguments (Callee, Length) --- NOTE (Lapys) -> Fortunately, `Arguments` manage their `callee` and ``length` property.
                    getArgumentsCallee: function getArgumentsCallee(argumentsObject) { return argumentsObject.callee },
                    getArgumentsLength: function getArgumentsLength(argumentsObject) { return argumentsObject.length },

                    /* Prototype To Array-Like Prototype
                            --- WARN ---
                                #Lapys: Only strict tests are permitted when accessing and/ or using the array-like methods
                                    defined by this function (mainly due to performance reasons).
    	            */
                    prototypeToArrayLikePrototype: function prototypeToArrayLikePrototype(prototype, CONSTRUCTOR) {
                        // Constant > (Constructor, Allow Array-Like Iterator Constructor)
                        var constructor = CONSTRUCTOR || LDKO.array,
                            allowArrayLikeIteratorConstructor = false;

                        // Class > Array-Like Iterator --- NOTE (Lapys) -> Structure for the `entries`, `keys` and `values` methods.
                        function ArrayLikeIterator() { if (allowArrayLikeIteratorConstructor) { allowArrayLikeIteratorConstructor = false; return new ArrayLikeIterator } }
                            // Prototype > (Constructor, Next)
                            ArrayLikeIterator.prototype.constructor = function Object() {} /* NOTE (Lapys) -> Lol... */;
                            ArrayLikeIterator.prototype.next = function next() {};

                        /* Modification > Prototype
                                --- CHECKPOINT (Lapys) -> Also define the library`s custom array prototype methods and properties.
                                --- NOTE (Lapys) -> We modify the prototype with array-like custom methods to allow array manipulation be consistent with non-array objects.
                        */
                            // Length
                            prototype.length = +null;

                            // Concatenate
                            prototype.concat = function concat(items) {
                                // Initialization > ((Concatenation) (Length), Iterator)
                                var concatenation = new constructor,
                                    concatenationLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                    length = LDKF.getArgumentsLength(arguments);

                                // Update > Concatenation
                                LDKF.arrayLikePrototypeCopy(concatenation, LDKF.toArray(this, STRICT = concatenationLength), STRICT = +0, STRICT = concatenationLength, STRICT = true);

                                // Modification > Concatenation > Length
                                LDKF.objectPrototypeSetProperty(concatenation, "length", concatenationLength, STRICT = true);

                                // Logic
                                if (length) {
                                    // Initialization > Iterator
                                    var iterator = length;

                                    // Loop
                                    while (iterator) {
                                        // Constant > Array-Like (Length)
                                        var arrayLike = arguments[length - (iterator -= 1) - 1], arrayLikeLength = LDKF.arrayLikePrototypeLength(arrayLike) || +0;

                                        // Update > ...
                                        concatenationLength += arrayLikeLength;
                                        LDKF.arrayPrototypeConcatenate(concatenation, LDKF.toArray(arrayLike, STRICT = arrayLikeLength));

                                        // Modification > Concatenation > Length
                                        LDKF.objectPrototypeSetProperty(concatenation, "length", concatenationLength, STRICT = true)
                                    }
                                }

                                // Update > Target
                                LDKF.arrayLikePrototypeLock(concatenation, STRICT = concatenationLength);

                                // Return
                                return concatenation
                            };

                            // Copy Within --- CITE (Lapys) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
                            prototype.copyWithin = function copyWithin(index, start, end) {
                                // Constant > Array-Like (Length)
                                var arrayLike = this, arrayLikeLength = LDKM.unsign(LDKF.arrayLikePrototypeLength(arrayLike) || +0);

                                // Update > (End, Index, Start)
                                end = LDKF.getArgumentsLength(arguments) > 2 ? LDKF.numberPrototypeShiftRight(LDKF.toNumber(end), +0) : arrayLikeLength;
                                index = LDKF.toNumber(index);
                                start = LDKF.toNumber(start);

                                // Constant > Relative (End, Start, Index)
                                var relativeEnd = LDKF.numberPrototypeShiftRight(end, +0),
                                    relativeStart = LDKF.numberPrototypeShiftRight(start, +0),
                                    relativeIndex = LDKF.numberPrototypeShiftRight(index, +0);

                                // Initialization > (From, Final, To)
                                var from = LDKF.numberPrototypeIsNegative(relativeStart) ? LDKM.maxInt(+0, arrayLikeLength + relativeStart) : LDKM.minInt(arrayLikeLength, relativeStart),
                                    final = LDKF.numberPrototypeIsNegative(relativeEnd) ? LDKM.maxInt(+0, arrayLikeLength + relativeEnd) : LDKM.minInt(arrayLikeLength, relativeEnd),
                                    to = LDKF.numberPrototypeIsNegative(relativeIndex) ? LDKM.maxInt(+0, arrayLikeLength + relativeIndex) : LDKM.minInt(arrayLikeLength, relativeIndex);
                                var direction = 1, iterator = LDKM.minInt(final - from, arrayLikeLength - to);

                                // Logic > Update > (Direction, From, To)
                                if (from < to && to < (from + iterator)) { direction = -1; from += iterator - 1; to += iterator - 1 }

                                // Logic
                                if (LDKF.numberPrototypeIsPositive(iterator)) {
                                    // Update > Array-Like
                                    LDKF.arrayLikePrototypeUnlock(arrayLike, STRICT = arrayLikeLength);

                                    // Loop
                                    while (LDKF.numberPrototypeIsPositive(iterator)) {
                                        // Logic > Update > Array-Like
                                        if (from in arrayLike) LDKF.arrayLikePrototypeSetIndex(arrayLike, to, LDKF.objectPrototypeGetProperty(arrayLike, LDKF.toString(from), STRICT = true), STRICT = true);
                                        else LDKF.objectPrototypeDeleteProperty(arrayLike, LDKF.toString(to));

                                        // Update > (From, To, Iterator)
                                        from += direction; to += direction; iterator -= 1
                                    }

                                    // Update > Array-Like
                                    LDKF.arrayLikePrototypeLock(arrayLike)
                                }

                                // Return
                                return arrayLike
                            };

                            // Entries
                            prototype.entries = function entries() {
                                // Constant > Array-Like
                                var arrayLike = this;

                                // Update > Allow Array-Like Iterator Constructor
                                allowArrayLikeIteratorConstructor = true;

                                // Constant > Array-Like Iterator (Index)
                                var arrayLikeIterator = LDKF.functionPrototypeCall(ArrayLikeIterator, LapysDevelopmentKit),
                                    arrayLikeIteratorIndex = +0;

                                // Modification > Array-Like Iterator > Next
                                arrayLikeIterator.next = function next() {
                                    // Logic > ...
                                    if (arrayLikeIteratorIndex == (LDKF.arrayLikePrototypeLength(arrayLike) || +0) - 1) return {done: true, value: undefined};
                                    else { arrayLikeIteratorIndex += 1; return {done: false, value: [arrayLikeIteratorIndex - 1, LDKF.arrayLikePrototypeElementAt(arrayLike, arrayLikeIteratorIndex - 1)]} }
                                };

                                // Return
                                return arrayLikeIterator
                            };

                            // Every
                            prototype.every = function every(callback, target) {
                                // Initialization > Array-Like (Length, Iterator)
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                    arrayLikeIterator = arrayLikeLength;

                                // Update > Target
                                (LDKF.getArgumentsLength(arguments) > 1) || (target = this);

                                // Loop
                                while (arrayLikeIterator) {
                                    // Constant > Array-Like Index
                                    var arrayLikeIndex = arrayLikeLength - (arrayLikeIterator -= 1) - 1;

                                    // Logic > Return
                                    if (!LDKF.functionPrototypeCall(callback, target, LDKF.arrayLikePrototypeElementAt(this, LDKF.arrayLikePrototypeElementAt(this, arrayLikeIndex), arrayLikeIndex, this)))
                                        return false
                                }

                                // Return
                                return true
                            };

                            // Fill
                            prototype.fill = function fill(value, start, end) {
                                // Constant > (Array-Like) Length
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0, length = LDKF.getArgumentsLength(arguments);

                                // Update > Start
                                (length > 1) || (start = +0);

                                // Logic
                                if (LDKF.numberPrototypeIsPositive(start)) {
                                    // Update > (End, Start)
                                    (length > 2) || (end = arrayLikeLength);
                                    (end > arrayLikeLength) && (end = arrayLikeLength);
                                    LDKF.numberPrototypeIsNegative(end) && (end = LDKM.abs(end));

                                    end = LDKM.int(end); start = LDKM.int(start);

                                    // Loop > Update > Array-Like
                                    while (end ^ start) LDKF.arrayLikePrototypeSetIndex(arrayLike, end -= 1, value, STRICT = true);
                                }

                                // Update > Target
                                LDKF.arrayLikePrototypeLock(this);

                                // Return
                                return this
                            };

                            // Find
                            prototype.find = function find(predicate, target) {
                                // Logic
                                if (LDKF.isFunction(predicate)) {
                                    // Initialization > Array-Like (Length, Iterator)
                                    var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                        arrayLikeIterator = arrayLikeLength;

                                    // Update > Target
                                    target = LDKF.getArgumentsLength(arguments) == 1 ? GLOBAL : LDKO.object(target);

                                    // Loop
                                    while (arrayLikeIterator) {
                                        // Constant > Array-Like (Index, Element)
                                        var arrayLikeIndex = arrayLikeLength - (arrayLikeIterator -= 1) - 1,
                                            arrayLikeElement = LDKF.arrayLikePrototypeElementAt(arrayLike, arrayLikeIndex);

                                        // Logic > Return
                                        if (LDKF.functionPrototypeCall(predicate, target, arrayLikeElement, arrayLikeIndex, this))
                                            return arrayLikeElement
                                    }
                                }

                                else
                                    // Error
                                    LDKF.throwTypeError(LDKF.toPrettyString(predicate) + " is not a function")
                            };

                            // Find Index
                            prototype.findIndex = function findIndex(predicate, target) {
                                // Logic
                                if (LDKF.isFunction(predicate)) {
                                    // Initialization > Array-Like (Length, Iterator)
                                    var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                        arrayLikeIterator = arrayLikeLength;

                                    // Update > Target
                                    target = LDKF.getArgumentsLength(arguments) == 1 ? GLOBAL : LDKO.object(target);

                                    // Loop
                                    while (arrayLikeIterator) {
                                        // Update > Array-Like Iterator
                                        arrayLikeIterator -= 1;

                                        // Logic > Return
                                        if (LDKF.functionPrototypeCall(predicate, target, LDKF.arrayLikePrototypeElementAt(arrayLike, arrayLikeLength - arrayLikeIterator - 1), arrayLikeLength - arrayLikeIterator - 1, this))
                                            return arrayLikeIndex
                                    }

                                    // Return
                                    return -1
                                }

                                else
                                    // Error
                                    LDKF.throwTypeError(LDKF.toPrettyString(predicate) + " is not a function")
                            };

                            // Flat
                            var prototypeFlat = (prototype.flat = function flat() {
                                // Constant > Flat Array(-Like)
                                var flatArray = LDKF.isArray(this) ? LDKF.arrayPrototypeClone(this) : LDKF.toArray(this),
                                    flatArrayLike = new constructor;

                                // Logic
                                if (LDKF.getArgumentsLength(flatArray)) {
                                    // Constant > Depth
                                    var depth = LDKF.toNumber(arguments[+0]) || +0;

                                    // Loop > Update > (Flat Array, Depth)
                                    while (depth) { LDKF.arrayPrototypeFlatten(flatArray); depth -= 1 }
                                }

                                else
                                    // Update > Flat Array
                                    LDKF.arrayPrototypeFlatten(flatArray);

                                // Constant > Flat Array Length
                                var flatArrayLength = LDKF.arrayPrototypeLength(flatArray);

                                // ...
                                LDKF.objectPrototypeSetProperty(flatArrayLike, "length", flatArrayLength, STRICT = true);

                                // Update > Flat Array-Like
                                LDKF.arrayLikePrototypeCopy(flatArrayLike, flatArray, STRICT = +0, STRICT = flatArrayLength, STRICT = true);
                                LDKF.arrayLikePrototypeLock(flatArrayLike);

                                // Return
                                return flatArrayLike
                            });

                            // Flat Map --- NOTE (Lapys) -> Mapping then flattening.
                            prototype.flatMap = function flatMap(callback, target) { return LDKF.functionPrototypeCall(prototypeFlat, LDKF.functionPrototypeApply(prototypeMap, this, arguments)) };

                            // For Each
                            prototype.forEach = function forEach(callback, target) {
                                // Logic
                                if (LDKF.isFunction(callback)) {
                                    // Constant > Array-Like (Length, Iterator)
                                    var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                        arrayLikeIterator = arrayLikeLength;

                                    // Update > Target
                                    target = LDKF.getArgumentsLength(arguments) == 1 ? GLOBAL : LDKO.object(target);

                                    // Loop > Update > (Array-Like Iterator, Callback)
                                    while (arrayLikeIterator) { arrayLikeIterator -= 1; callback(LDKF.arrayLikeElementAt(this, arrayLikeLength - arrayLikeIterator - 1), arrayLikeLength - arrayLikeIterator - 1, target) }
                                }

                                else
                                    // Error
                                    LDKF.throwTypeError(LDKF.toPrettyString(predicate) + " is not a function")
                            };

                            // Includes
                            prototype.includes = function includes(element, startIndex) {
                                // Constant > Array-Like Length
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0;

                                // Update > Start Index
                                startIndex = LDKF.getArgumentsLength(arguments) > 1 ? LDKM.int(LDKF.toNumber(startIndex), STRICT = true) || +0 : +0;
                                startIndex && LDKF.numberPrototypeIsNegative(startIndex) && (startIndex = +0);

                                // Logic
                                if (startIndex < arrayLikeLength)
                                    // Loop
                                    while (startIndex ^ arrayLikeLength) {
                                        // Logic > Return; Update > Start Index
                                        if (element === LDKF.arrayLikePrototypeElementAt(this, startIndex)) return true;
                                        startIndex += 1
                                    }

                                // Return
                                return false
                            };

                            // Index Of
                            prototype.indexOf = function indexOf(element, startIndex) {
                                // Constant > Array-Like Length
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0;

                                // Update > Start Index
                                startIndex = LDKF.getArgumentsLength(arguments) > 1 ? LDKM.int(LDKF.toNumber(startIndex), STRICT = true) || +0 : +0;
                                startIndex && LDKF.numberPrototypeIsNegative(startIndex) && (startIndex = +0);

                                // Logic
                                if (startIndex < arrayLikeLength)
                                    // Loop
                                    while (startIndex ^ arrayLikeLength) {
                                        // Logic > Return; Update > Start Index
                                        if (element === LDKF.arrayLikePrototypeElementAt(this, startIndex)) return startIndex;
                                        startIndex += 1
                                    }

                                // Return
                                return -1
                            };

                            // Join
                            prototype.join = function join(separator) {
                                // Constant > (Array-Like (Length, Iterator), String)
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                    arrayLikeIterator = arrayLikeLength,
                                    string = "";

                                // (Loop > )Update > (Separator, String)
                                LDKF.getArgumentsLength(arguments) || (separator = ", ");
                                while (arrayLikeIterator) string += LDKF.toString(LDKF.arrayLikePrototypeElementAt(this, arrayLikeLength - (arrayLikeIterator -= 1) - 1));

                                // Return
                                return string
                            };

                            // Keys
                            prototype.keys = function keys() {
                                // Constant > Array-Like Iterator
                                var arrayLike = this;

                                // Update > Allow Array-Like Iterator Constructor
                                allowArrayLikeIteratorConstructor = true;

                                // Constant > Array-Like Iterator (Index)
                                var arrayLikeIterator = LDKF.functionPrototypeCall(ArrayLikeIterator, LapysDevelopmentKit),
                                    arrayLikeIteratorIndex = +0;

                                // Modification > Array-Like Iterator > Next
                                arrayLikeIterator.next = function next() {
                                    // Logic > ...
                                    if (arrayLikeIteratorIndex == (LDKF.arrayLikePrototypeLength(arrayLike) || +0) - 1) return {done: true, value: undefined};
                                    else { arrayLikeIteratorIndex += 1; return {done: false, value: arrayLikeIteratorIndex - 1} }
                                };

                                // Return
                                return arrayLikeIterator
                            };

                            // Last Index Of
                            prototype.lastIndexOf = function lastIndexOf(element, startIndex) {
                                // Constant > Array-Like Length
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0;

                                // Update > Start Index
                                startIndex = LDKF.getArgumentsLength(arguments) > 1 ? LDKM.int(LDKF.toNumber(startIndex), STRICT = true) || +0 : +0;
                                (startIndex < arrayLikeLength) || (startIndex = arrayLikeLength - 1);

                                // Logic
                                if (!startIndex || LDKF.numberPrototypeIsPositive(startIndex)) {
                                    // Update > Start Index; Loop > Logic > Return
                                    startIndex += 1;
                                    while (startIndex) if (element === LDKF.arrayLikePrototypeElementAt(this, startIndex -= 1)) return startIndex
                                }

                                // Return
                                return -1
                            };

                            // Map
                            var prototypeMap = (prototype.map = function map(callback, target) {
                                // Logic
                                if (LDKF.isFunction(callback)) {
                                    // Constant > (Array-Like (Length, Iterator), Mapped Array)
                                    var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                        arrayLikeIterator = arrayLikeLength,
                                        mappedArray = new constructor;

                                    // Update > Target
                                    target = LDKF.getArgumentsLength(arguments) == 1 ? GLOBAL : LDKO.object(target);

                                    // Loop > Update > ...
                                    while (arrayLikeIterator) { arrayLikeIterator -= 1; LDKF.arrayLikePrototypeSetIndex(mappedArray, arrayLikeIterator, LDKF.functionPrototypeCall(callback, target, LDKF.arrayLikePrototypeElementAt(this, arrayLikeIterator, STRICT = true), arrayLikeIterator), STRICT = true) }

                                    // Modification > Mapped Array > Length
                                    LDKF.objectPrototypeSetProperty(mappedArray, "length", arrayLikeLength, STRICT = true);

                                    // Return
                                    return mappedArray
                                }

                                else
                                    // Error
                                    LDKF.throwTypeError(LDKF.toPrettyString(callback) + " is not a function")
                            });

                            // Pop
                            prototype.pop = function pop() {
                                // Constant > Array-Like Length
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this);

                                // Logic
                                if (arrayLikeLength) {
                                    // Constant > (Array-Like Index, Popped Array-Like Element)
                                    var arrayLikeIndex = LDKF.toString(arrayLikeLength - 1),
                                        poppedArrayLikeElement = LDKF.objectPrototypeGetProperty(this, arrayLikeIndex, STRICT = true);;

                                    // Deletion, (Modification > Target > ...)
                                    LDKF.objectDefineProperty(this, arrayLikeIndex, {configurable: true, enumerable: true, value: poppedArrayLikeElement, writable: true});
                                    LDKF.objectPrototypeDeleteProperty(this, arrayLikeIndex);
                                    LDKF.objectPrototypeSetProperty(this, "length", arrayLikeLength - 1, STRICT = true);

                                    // Return
                                    return poppedArrayLikeElement
                                }
                            };

                            // Push
                            prototype.push = function push(items) {
                                // Constant > Array-Like (Length)
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this),
                                    length = LDKF.getArgumentsLength(arguments);

                                // Logic
                                if (length) {
                                    // Initialization > (Array-Like Length, Iterator)
                                    var iterator = length;

                                    // Loop > Modification > Target > ...
                                    while (iterator) { LDKF.objectPrototypeDefineProperty(this, LDKF.toString(arrayLikeLength), {configurable: true, enumerable: true, value: arguments[length - (iterator -= 1) - 1], writable: false}); arrayLikeLength += 1 }

                                    // Modification > Target > Length
                                    LDKF.objectPrototypeSetProperty(this, "length", arrayLikeLength, STRICT = true)
                                }

                                // Return
                                return arrayLikeLength
                            };

                            // Reduce --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Continue cloning array methods.
                            prototype.reduce = function reduce(callback, value) { LDKF.arrayLikePrototypeLock(this) };

                            // Reduce Right --- CHECKPOINT (Lapys)
                            prototype.reduceRight = function reduceRight(callback, value) { LDKF.arrayLikePrototypeLock(this) };

                            // Reverse
                            prototype.reverse = function reverse() {
                                // Constant > Reversed Array
                                var reversedArray = LDKF.arrayPrototypeReverse(LDKF.isArray(this) ? LDKF.arrayPrototypeClone(this) : LDKF.toArray(this));

                                // Update > Target
                                LDKF.arrayLikePrototypeUnlock(this);
                                LDKF.arrayLikePrototypeCopy(this, reversedArray);
                                LDKF.arrayLikePrototypeLock(this);

                                // Return
                                return this
                            };

                            // Shift --- CHECKPOINT (Lapys)
                            prototype.shift = function shift() { LDKF.arrayLikePrototypeLock(this) };

                            // Slice --- CHECKPOINT (Lapys)
                            prototype.slice = function slice(start, end) { LDKF.arrayLikePrototypeLock(this) };

                            // Some
                            prototype.some = function some(callback, target) {
                                // Initialization > Array-Like (Length, Iterator)
                                var arrayLikeLength = LDKF.arrayLikePrototypeLength(this) || +0,
                                    arrayLikeIterator = arrayLikeLength;

                                // Update > Target
                                (LDKF.getArgumentsLength(arguments) > 1) || (target = this);

                                // Loop
                                while (arrayLikeIterator) {
                                    // Constant > Array-Like Index
                                    var arrayLikeIndex = arrayLikeLength - (arrayLikeIterator -= 1) - 1;

                                    // Logic > Return
                                    if (LDKF.functionPrototypeCall(callback, target, LDKF.arrayLikePrototypeElementAt(this, LDKF.arrayLikePrototypeElementAt(this, arrayLikeIndex), arrayLikeIndex, this)))
                                        return true
                                }

                                // Return
                                return false
                            };

                            // Sort --- CHECKPOINT (Lapys)
                            prototype.sort = function sort(comparator) { LDKF.arrayLikePrototypeLock(this) };

                            // Splice --- CHECKPOINT (Lapys)
                            prototype.splice = function splice(start, deleteCount, items) { LDKF.arrayLikePrototypeLock(this) };

                            // Unshift --- CHECKPOINT (Lapys)
                            prototype.unshift = function unshift(items) { LDKF.arrayLikePrototypeLock(this) };

                            // Values
                            prototype.values = function values() {
                                // Constant > Array-Like Iterator
                                var arrayLike = this;

                                // Update > Allow Array-Like Iterator Constructor
                                allowArrayLikeIteratorConstructor = true;

                                // Constant > Array-Like Iterator (Index)
                                var arrayLikeIterator = LDKF.functionPrototypeCall(ArrayLikeIterator, LapysDevelopmentKit),
                                    arrayLikeIteratorIndex = +0;

                                // Modification > Array-Like Iterator > Next
                                arrayLikeIterator.next = function next() {
                                    // Logic > ...
                                    if (arrayLikeIteratorIndex == (LDKF.arrayLikePrototypeLength(arrayLike) || +0) - 1) return {done: true, value: undefined};
                                    else { arrayLikeIteratorIndex += 1; return {done: false, value: LDKF.arrayLikePrototypeElementAt(arrayLike, arrayLikeIteratorIndex - 1)} }
                                };

                                // Return
                                return arrayLikeIterator
                            };

                        // Return
                        return prototype
                    }
                };

                // Information --- REDACT (Lapys)
                LapysDevelopmentKit.Information = {
                    Messages: {Debugging: {}, Error: {}},
                    Settings: {DebugMode: null, IgnoreMissingFeatures: false, PublicMode: null}
                };

                // Mathematics
                LapysDevelopmentKit.Mathematics = {};

                // Objects
                LapysDevelopmentKit.Objects = {};

                // Storage --- REDACT (Lapys)
                LapysDevelopmentKit.Storage = {
                    Records: {}, // NOTE (Lapys) -> Collection of values.
                    Registry: {} // NOTE (Lapys) -> Collection of lists of values.
                }

                // Test
                LapysDevelopmentKit.Test = {};

            // Return
            return LapysDevelopmentKit
        })(),

        // Strict --- NOTE (Lapys) -> Cause alternative logical paths within a function or method. Also known as an argument flag.
        STRICT = false,

        // Undefined --- NOTE (Lapys) -> Specify `undefined` whose global property value is mutable.
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
        /* Lapys Development Kit --- NOTE (Lapys) -> Building and integrating the LDK into JavaScript may be a major part of the LapysJS library. */
            /* Constants */
                // Number > ...
                LapysDevelopmentKit.Constants.Numbers.frameRate = 1000 / 60; // NOTE (Lapys) -> Lock time-controlled asynchronous processes to 60 frames a second.
                LapysDevelopmentKit.Constants.Numbers.Infinity = 1 / +0;
                LapysDevelopmentKit.Constants.Numbers.integerSize = 32; // NOTE (Lapys) -> JavaScript integers are 53-bit as well.
                LapysDevelopmentKit.Constants.Numbers.referenceSize = 4; // NOTE (Lapys) -> Assumed size of referrers in JavaScript (such as objects and symbols)
                LapysDevelopmentKit.Constants.Numbers.NaN = +0 / +0;

                /* Keywords > ... --- NOTE (Lapys) -> Store the keyword strings as arrays
                        because older browsers defer to the `String.prototype.charAt` method (which is not defined at this point in the code yet).
                        rather than the accepted standard string indexing operation (i.e.: using the `[]` token).
                */
                LapysDevelopmentKit.Constants.Keywords["extends"] = ['e', 'x', 't', 'e', 'n', 'd', 's'];
                LapysDevelopmentKit.Constants.Keywords.nativeFunctionCodes = [
                    ['[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'],
                    ['[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']']
                ];

                // String > ... --- NOTE (Lapys) -> Define references for string manipulation methods (rather than hard-coding the methods with each value represented below).
                LapysDevelopmentKit.Constants.Strings.alphabets = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];
                LapysDevelopmentKit.Constants.Strings.asciiCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', 'Ç', 'ü', 'é', 'â', 'ä', 'à', 'å', 'ç', 'ê', 'ë', 'è', 'ï', 'î', 'ì', 'Ä', 'Å', 'É', 'æ', 'Æ', 'ô', 'ö', 'ò', 'û', 'ù', 'ÿ', 'Ö', 'Ü', 'ø', '£', 'Ø', '×', 'ƒ', 'á', 'í', 'ó', 'ú', 'ñ', 'Ñ', 'ª', 'º', '¿', '®', '¬', '½', '¼', '¡', '«', '»', '░', '▒', '▓', '│', '┤', 'Á', 'Â', 'À', '©', '╣', '║', '╗', '╝', '¢', '¥', '┐', '└', '┴', '┬', '├', '─', '┼', 'ã', 'Ã', '╚', '╔', '╩', '╦', '╠', '═', '╬', '¤', 'ð', 'Ð', 'Ê', 'Ë', 'È', 'ı', 'Í', 'Î', 'Ï', '┘', '┌', '█', '▄', '¦', 'Ì', '▀', 'Ó', 'ß', 'Ô', 'Ò', 'õ', 'Õ', 'µ', 'þ', 'Þ', 'Ú', 'Û', 'Ù', 'ý', 'Ý', '¯', '´', '≡', '±', '‗', '¾', '¶', '§', '÷', '¸', '°', '¨', '·', '¹', '³', '²', '■', 'ñ', 'Ñ', '@', '¿', '?', '¡', '!', ':', '/', '\\', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ä', 'ë', 'ï', 'ö', 'ü', 'Ä', 'Ë', 'Ï', 'Ö', 'Ü', '½', '¼', '¾', '¹', '³', '²', 'ƒ', '±', '×', '÷', '$', '£', '¥', '¢', '¤', '®', '©', 'ª', 'º', '°', '"', '\'', '(', ')', '[', ']', '{', '}', '«', '»', '\0', '\1', '\2', '\3', '\4', '\5', '\6', '\7', '\u0008', '\u0009', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                LapysDevelopmentKit.Constants.Strings.binary = ['0', '1'];
                LapysDevelopmentKit.Constants.Strings.cssCharacterSequences = ['_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', "\\_", "\\0", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\\8", "\\9", "\\a", "\\A", "\\b", "\\B", "\\c", "\\C", "\\d", "\\D", "\\e", "\\E", "\\f", "\\F", "\\g", "\\G", "\\h", "\\H", "\\i", "\\I", "\\j", "\\J", "\\k", "\\K", "\\l", "\\L", "\\m", "\\M", "\\n", "\\N", "\\o", "\\O", "\\p", "\\P", "\\q", "\\Q", "\\r", "\\R", "\\s", "\\S", "\\t", "\\T", "\\u", "\\U", "\\v", "\\V", "\\w", "\\W", "\\x", "\\X", "\\y", "\\Y", "\\z", "\\Z", "\\!", "\\\"", "\\#", "\\$", "\\%", "\\&", "\\'", "\\(", "\\)", "\\*", "\\+", "\\,", "\\.", "\\/", "\\:", "\\:", "\\;", "\\<", "\\=", "\\>", "\\?", "\\@", "\\[", "\\\\", "\\]", "\\^", "\\`", "\\{", "\\|", "\\}", "\\~"];
                LapysDevelopmentKit.Constants.Strings.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                LapysDevelopmentKit.Constants.Strings.hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F'];
                LapysDevelopmentKit.Constants.Strings.htmlElementTagNames = ['a', "address", 'b', "blockquote", "body", "br", "cite", "code", "dd", "dl", "dt", "em", "form", "head", "hr", "html", "h1", "h2", "h3", "h4", "h5", "h6", 'i', "img", "input", "kbd", "li", "link", "meta", "ol", "option", 'p', "pre", "select", "strong", "textarea", "title", "ul", "var"];
                LapysDevelopmentKit.Constants.Strings.languageCodes = ["aa", "aar", "ab", "abk", "ace", "ach", "ada", "ady", "ae", "af", "afa", "afh", "afr", "ain", "ak", "aka", "akk", "alb", "ale", "alt", "am", "amh", "an", "ang", "anp", "apa", "ar", "ara", "arc", "arg", "arm", "arn", "arp", "art", "arw", "as", "asm", "ast", "ath", "aus", "av", "ava", "ave", "awa", "ay", "aym", "az", "aze", "ba", "bad", "bai", "bak", "bal", "bam", "ban", "baq", "bas", "bat", "be", "bej", "bel", "bem", "ben", "ber", "bg", "bh", "bho", "bi", "bih", "bik", "bis", "bla", "bm", "bn", "bnt", "bo", "bod", "bos", "br", "bra", "bre", "bs", "btk", "bua", "bug", "bul", "bur", "byn", "ca", "cad", "cai", "car", "cat", "cau", "ce", "ceb", "cel", "ces", "ch", "cha", "chb", "che", "chg", "chi", "chk", "chm", "chn", "cho", "chp", "chr", "chu", "chv", "chy", "cmc", "cnr", "co", "cop", "cor", "cos", "cpe", "cpf", "cpp", "cr", "cre", "crh", "crp", "cs", "csb", "cu", "cus", "cv", "cy", "cym", "cze", "da", "dak", "dan", "dar", "day", "de", "del", "den", "deu", "dgr", "din", "div", "doi", "dra", "dsb", "dua", "dum", "dut", "dv", "dyu", "dz", "dzo", "ee", "efi", "egy", "eka", "el", "ell", "elx", "en", "eng", "enm", "eo", "epo", "es", "est", "et", "eu", "eus", "ewe", "ewo", "fa", "fan", "fao", "fas", "fat", "ff", "fi", "fij", "fil", "fin", "fiu", "fj", "fo", "fon", "fr", "fra", "fre", "frm", "fro", "frr", "frs", "fry", "ful", "fur", "fy", "ga", "gaa", "gay", "gba", "gd", "gem", "geo", "ger", "gez", "gil", "gl", "gla", "gle", "glg", "glv", "gmh", "gn", "goh", "gon", "gor", "got", "grb", "grc", "gre", "grn", "gsw", "gu", "guj", "gv", "gwi", "ha", "hai", "hat", "hau", "haw", "he", "heb", "her", "hi", "hil", "him", "hin", "hit", "hmn", "hmo", "ho", "hr", "hrv", "hsb", "ht", "hu", "hun", "hup", "hy", "hye", "hz", "ia", "iba", "ibo", "ice", "id", "ido", "ie", "ig", "ii", "iii", "ijo", "ik", "iku", "ile", "ilo", "ina", "inc", "ind", "ine", "inh", "io", "ipk", "ira", "iro", "is", "isl", "it", "ita", "iu", "ja", "jav", "jbo", "jpn", "jpr", "jrb", "jv", "ka", "kaa", "kab", "kac", "kal", "kam", "kan", "kar", "kas", "kat", "kau", "kaw", "kaz", "kbd", "kg", "kha", "khi", "khm", "kho", "ki", "kik", "kin", "kir", "kj", "kk", "kl", "km", "kmb", "kn", "ko", "kok", "kom", "kon", "kor", "kos", "kpe", "kr", "krc", "krl", "kro", "kru", "ks", "ku", "kua", "kum", "kur", "kut", "kv", "kw", "ky", "la", "lad", "lah", "lam", "lao", "lat", "lav", "lb", "lezlim", "lg", "li", "lin", "lit", "ln", "lo", "lol", "loz", "lt", "ltz", "lu", "lua", "lub", "lug", "lui", "lun", "luo", "lus", "lv", "mac", "mad", "mag", "mah", "mai", "mak", "mal", "man", "mao", "map", "mar", "mas", "may", "mdf", "mdr", "men", "mg", "mga", "mh", "mi", "mic", "min", "mis", "mk", "mkd", "mkh", "ml", "mlg", "mlt", "mn", "mnc", "mnl", "mno", "moh", "mon", "mos", "mr", "mri", "ms", "msa", "mt", "mul", "mun", "mus", "mwl", "mwr", "my", "mya", "myn", "myv", "na", "nah", "nai", "nap", "nau", "nav", "nb", "nbl", "nd", "nde", "ndo", "nds", "ne", "nep", "new", "ng", "nia", "nic", "niu", "nl", "nld", "nn", "nno", "no", "nob", "nog", "non", "nor", "nqo", "nr", "nso", "nub", "nv", "nwc", "ny", "nya", "nym", "nyn", "nyo", "nzi", "oc", "oci", "oj", "oji", "om", "or", "ori", "orm", "os", "osa", "oss", "ota", "oto", "pa", "paa", "pag", "pal", "pam", "pan", "pap", "pau", "pcm", "peo", "per", "phi", "phn", "pi", "pl", "pli", "pol", "pon", "por", "pra", "pro", "ps", "pt", "pus", "qaa", "qtz", "qu", "que", "raj", "rap", "rar", "rm", "rn", "ro", "roa", "roh", "rom", "ron", "ru", "rum", "run", "rup", "rus", "rw", "sa", "sad", "sag", "sah", "sai", "sal", "sam", "san", "sas", "sat", "sc", "scn", "sco", "sd", "sel", "sem", "sg", "sga", "sgn", "shn", "si", "sid", "sin", "sio", "sit", "sk", "sl", "sla", "slk", "slo", "slv", "sm", "sma", "sme", "smi", "smj", "smn", "smo", "sms", "sn", "sna", "snd", "snk", "so", "sog", "som", "son", "sot", "spa", "sq", "sqi", "sr", "srd", "srp", "srr", "ss", "ssa", "ssw", "st", "su", "suk", "sun", "sus", "sux", "sv", "sw", "swa", "swe", "sws", "syc", "syr", "ta", "tah", "tai", "tam", "tat", "te", "tel", "tem", "ter", "tet", "tg", "tgk", "tgl", "th", "tha", "ti", "tib", "tig", "tir", "tiv", "tk", "tkl", "tl", "tlh", "tli", "tmh", "tn", "to", "tog", "ton", "tpi", "tr", "ts", "tsi", "tsn", "tso", "tt", "tuk", "tum", "tup", "tur", "tut", "tvl", "tw", "twi", "ty", "tyv", "udm", "ug", "uga", "uig", "uk", "ukr", "umb", "und", "ur", "urd", "uz", "uzb", "vai", "venve", "vi", "vie", "vo", "vol", "vot", "wa", "wak", "wal", "war", "was", "wel", "wen", "wln", "wo", "wol", "xal", "xh", "xho", "yao", "yap", "yi", "yid", "yo", "yor", "ypk", "za", "zap", "zbl", "zen", "zgh", "zh", "zha", "zho", "znd", "zu", "zul", "zun", "zxx", "zza"];
                LapysDevelopmentKit.Constants.Strings.lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                LapysDevelopmentKit.Constants.Strings.octal = ['0', '1', '2', '3', '4', '5', '6', '7'];
                LapysDevelopmentKit.Constants.Strings.trimmableCharacters = [' ', '\0', '\n'];
                LapysDevelopmentKit.Constants.Strings.uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                LapysDevelopmentKit.Constants.Strings.sortableCharacters = ['_', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '[', ']', '{', '}', '<', '>', '«', '»', '\\', '/', '+', '-', '*', '÷', '=', '@', '\'', '"', '#', '$', '%', '&']; // NOTE (Lapys) -> Not based on any standards.
                LapysDevelopmentKit.Constants.Strings.variableCharacters = ['_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '$'];

            /* Data
                    --- WARN ---
                        #Lapys:
                            - All the constructors defined within this container must only be called as constructors (using the `new` keyword).
                            - The prototype methods of each constructor should not assert its caller`s type (e.g.: `if this not instanceof Constructor: throw new TypeError`)
                                because they are private-only use and do not need error-handling from the user.
            */
                /* Array-Like --- NOTE (Lapys) -> Represents the base constructor of LapysJS array-like structures. */
                LapysDevelopmentKit.Data.ArrayLike = function ArrayLike() {};
                    // Prototype
                    LapysDevelopmentKit.Data.ArrayLikePrototype = (LapysDevelopmentKit.Data.ArrayLike.prototype = []);

                /* Clock --- NOTE (Lapys) -> Built for asynchronous processes (i.e.: date & time, parallel processing, performance benchmarking, threading e.t.c.). */
                LapysDevelopmentKit.Data.Clock = function Clock() {};
                    // Prototype
                    LapysDevelopmentKit.Data.ClockPrototype = LDKD.Clock.prototype;
                        // Check
                        LapysDevelopmentKit.Data.ClockPrototype.check = function check(condition, ontrue, onfalse) {
                            // Constant > (Clock, Frame, Observer, Length)
                            var clock = this,
                                observer = new LDKD.Observer,
                                frame = clock.wind(function() { observer.inference ? clock.stop(frame) : observer.observe() }),
                                length = LDKF.getArgumentsLength(arguments);

                            // Modification > Observer > (Condition, On (False, True))
                            observer.condition = new LDKD.Handler(length ? condition : null);
                            observer.onfalse = new LDKD.Handler(length > 2 ? onfalse : null);
                            observer.ontrue = new LDKD.Handler(length > 1 ? ontrue : null);

                            // Return
                            return clock
                        };

                        /* Thread
                                --- UPDATE REQUIRED ---
                                    #Lapys: Multi-threading parallelism, maybe?
                                        - Although how would Web Workers `Worker` objects or any solution as such be integrated into the library?
                        */
                        LapysDevelopmentKit.Data.ClockPrototype.thread = function thread() {
                            /*
                                source = `self.onmessage = function onmessage(event) {
                                    console.group("RECIEVED DATA");
                                        console.log(event.data);
                                        console.log("\\n");
                                    console.groupEnd();

                                    self.close()
                                }`;
                                file = new File([source], "", {type: "application/javascript"});
                                url = URL.createObjectURL(file);
                                worker = new Worker(url);

                                worker.postMessage({name: "Lapys", age: 22})
                            */
                        };

                        // Tick --- NOTE (Lapys) -> Frames can have the same ID but not the same state.
                        LapysDevelopmentKit.Data.ClockPrototype.tick = function tick(frameEvent, delay) {
                            // Update > Delay
                            delay = LDKF.toNumber(delay);

                            // Constant > Frame
                            var frame = new LDKD.Frame(frameEvent);

                            // Modification > Frame
                                // Data > ...
                                frame.data.hasDelay = !!delay;
                                frame.data.hasPlayed = false;
                                frame.data.interrupted = false;
                                frame.data.recursive = false;

                                // ID
                                frame.id = delay ? // NOTE (Lapys) -> Do not use the `LapysDevelopmentKit.Data.ClockPrototype.stop` method here. It is faster to stop the frame using inline statements than an independent function call.
                                    LDKF.setTimeout(function() { var frameHasPlayed = frame.data.hasPlayed, frameID = frame.id; frame.play(); if (!frameHasPlayed) { LDKF.clearTimeout(frameID); frame.data.hasPlayed = true } }, delay) :
                                    LDKF.requestAnimationFrame(function() { var frameHasPlayed = frame.data.hasPlayed, frameID = frame.id; frame.play(); if (!frameHasPlayed) { LDKF.cancelAnimationFrame(frameID); frame.data.hasPlayed = true } });

                            // Return
                            return frame
                        };

                        // Timestamp
                        LapysDevelopmentKit.Data.ClockPrototype.timestamp = function timestamp() { return LDKC.has_Performance_Constructor ? LDKF.functionPrototypeCall(LDKO.performancePrototypeNow, LDKC.Objects.performance) : LDKF.functionPrototypeCall(LDKO.dateNow, LDKO.date); };

                        // Stop
                        LapysDevelopmentKit.Data.ClockPrototype.stop = function stop(frame) {
                            // Logic
                            if (LDKF.objectPrototypeGetProperty(frame.data, "hasPlayed", STRICT = true))
                                // Return
                                return false;

                            else {
                                // Constant > Frame ID
                                var frameID = LDKF.toNumber(frame.id);

                                // ...; Modification > (Frame > Data) > (Has Played, Interrupted)
                                LDKF.objectPrototypeGetProperty(frame.data, "hasDelay", STRICT = true) ?
                                    LDKF.functionPrototypeCall(LDKF.objectPrototypeGetProperty(frame.data, "recursive", STRICT = true) ? LDKF.clearInterval : LDKF.clearTimeout, LDKF, frameID) :
                                    LDKF.cancelAnimationFrame(frameID);
                                frame.data.hasPlayed = true;
                                frame.data.interrupted = true;

                                // Return
                                return true
                            }
                        };

                        // Wind
                        LapysDevelopmentKit.Data.ClockPrototype.wind = function wind(frameEvent, interval) {
                            // Update > Interval
                            interval = LDKF.toNumber(interval);

                            // Constant > Frame
                            var frame = new LDKD.Frame(frameEvent);

                            // Modification > Frame
                                // Data > ...
                                frame.data.hasDelay = !!interval;
                                frame.data.hasPlayed = false;
                                frame.data.interrupted = false;
                                frame.data.recursive = true;

                                // ID
                                frame.id = interval ?
                                    LDKF.setInterval(function() { LDKF.objectPrototypeGetProperty(frame.data, "hasPlayed", STRICT = true) || frame.play() }, interval) :
                                    LDKF.requestAnimationFrame(function tick() { if (!LDKF.objectPrototypeGetProperty(frame.data, "hasPlayed", STRICT = true)) { frame.play(); frame.id = LDKF.requestAnimationFrame(tick) } });

                            // Return
                            return frame
                        };

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

                /* Consideration --- NOTE (Lapys) -> Wrapper for security-checking (check for spoofing) JavaScript features. */
                LapysDevelopmentKit.Data.Consideration = function Consideration() { this.context = null; this.data = {}; return this };
                    /* Prototype --- NOTE (Lapys) -> Contains data for all contexts of
                            - Base property identifiers (e.g.: `"methodIsNative"`) in a `Consideration``s `data` property are required for some of the `request...` methods of its prototype.
                    */
                    LapysDevelopmentKit.Data.ConsiderationPrototype = LDKD.Consideration.prototype;
                        // Add Alternate Condition --- NOTE (Lapys) -> Alternate conditions are evaluated last when requests are made.
                        LapysDevelopmentKit.Data.ConsiderationPrototype.addAlternateCondition = function addAlternateCondition(alternateCondition) { LDKF.arrayPrototypePush(this.alternateConditions, alternateCondition); return this };

                        // Add Condition --- NOTE (Lapys) -> Conditions are evaluated first when requests are made.
                        LapysDevelopmentKit.Data.ConsiderationPrototype.addCondition = function addCondition(condition) { LDKF.arrayPrototypePush(this.conditions, condition); return this };

                        // Add Conditional Fallback --- NOTE (Lapys) -> Conditional fallbacks are deferred to if all conditions fail.
                        LapysDevelopmentKit.Data.ConsiderationPrototype.addConditionalFallback = function addConditionalFallback(conditionalFallback, CONDITIONAL_FALLBACK_IS_FUNCTION) { LDKF.arrayPrototypePush(this.conditionalFallbacks, CONDITIONAL_FALLBACK_IS_FUNCTION ? {value: conditionalFallback} : conditionalFallback); return this };

                        /* Add Forced Condition
                                --- NOTE ---
                                    #Lapys:
                                        - Forced conditions are evaluated second when requests are made.
                                        - A condition is forced when it can re-evaluate a request`s assertion (e.g.: if a method is native) despite its value.
                        */
                        LapysDevelopmentKit.Data.ConsiderationPrototype.addForcedCondition = function addForcedCondition(condition) { LDKF.arrayPrototypePush(this.forcedConditions, condition); return this };

                        // Add To Consideration
                        LapysDevelopmentKit.Data.ConsiderationPrototype.addToConsideration = function addToConsideration(handler) { handler(this); return this };

                        // Request Native Constructor
                        LapysDevelopmentKit.Data.ConsiderationPrototype.requestNativeConstructor = function requestForNativeConstructor() {
                            // Initialization
                                // Consideration
                                var consideration = this,

                                // Considered --- NOTE (Lapys) -> Would have named this variable Consideration Data, but I felt the current name is more intuitive.
                                considered = consideration.data;

                            // Logic
                            if (!LDKI.Settings.PublicMode) {
                                // Constructor Is Native
                                var constructorIsNative = false;

                                // Logic
                                if (LDKT.objectPrototypeIsNativeConstructorOfObject(considered.object, considered.propertyName, STRICT = considered.constructorRoutine, STRICT = true)) {
                                    // Initialization > Iterator
                                    var iterator = LDKF.arrayPrototypeLength(consideration.conditions);

                                    // (Loop > )Update > Constructor Is Native
                                    constructorIsNative = true;
                                    while (constructorIsNative && iterator) constructorIsNative = LDKF.functionPrototypeCall(consideration.conditions[iterator -= 1], consideration, considered.constructorRoutine)
                                }

                                // Logic
                                if (!constructorIsNative) {
                                    // Initialization > Iterator
                                    var iterator = LDKF.arrayPrototypeLength(consideration.alternateConditions);

                                    // Loop > Update > Constructor Is Native
                                    while (!constructorIsNative && iterator) constructorIsNative = LDKF.functionPrototypeCall(consideration.alternateConditions[iterator -= 1], consideration, considered.constructorRoutine)
                                }

                                // Error
                                constructorIsNative || (
                                    considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR &&
                                    LDKF.throwFeatureNotNativeError(considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR)
                                )
                            }

                            // Error
                            LDKI.Settings.IgnoreMissingFeatures || (LDKF.isNonConstructible(considered.constructorRoutine) && (
                                considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR &&
                                LDKF.throwFeatureNotAvailableError(considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR)
                            ));

                            // Return
                            return considered.constructorRoutine
                        };

                        // Contexts --- REDACT (Lapys) -> Enumeration of the implied use of the `Consideration` object.
                        LapysDevelopmentKit.Data.ConsiderationPrototype.contexts = {NATIVE_FEATURE_ASSERTION: 1, SOURCE_STRING_TOKENS: 2};

                        // Request Native Method
                        LapysDevelopmentKit.Data.ConsiderationPrototype.requestNativeMethod = function requestForNativeMethod() {
                            // Constant > (Consideration, Considered)
                            var consideration = this, considered = consideration.data;

                            // Logic
                            if (LDKI.Settings.PublicMode) {
                                // Initialization > (Iterator, Method Is Available)
                                var iterator = LDKF.arrayPrototypeLength(consideration.forcedConditions),
                                    methodIsAvailable = LDKF.isConstructible(considered.method);

                                // Loop > Logic > Update > (Iterator, Method Is Available)
                                while (iterator) if (!LDKF.functionPrototypeCall(consideration.forcedConditions[iterator -= 1], consideration, considered.method)) { iterator = +0; methodIsAvailable = false }

                                // Constant > Length
                                var length = LDKF.arrayPrototypeLength(consideration.conditionalFallbacks);

                                // Update > Iterator
                                iterator = length;

                                // Loop
                                while (!methodIsAvailable && iterator) {
                                    // Constant > Conditional Fallback
                                    var conditionalFallback = consideration.conditionalFallbacks[length - (iterator -= 1) - 1];

                                    // Modification > Considered > Method
                                    !LDKF.objectPrototypeHasProperty(conditionalFallback, "condition") || LDKF.functionPrototypeCall(conditionalFallback.condition, consideration, considered.method, considered.object) && (considered.method = conditionalFallback.value);

                                    // Update > Method Is Available
                                    methodIsAvailable = LDKF.isConstructible(considered.method)
                                }

                                // Error
                                LDKI.Settings.IgnoreMissingFeatures || (methodIsAvailable || (
                                    considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR &&
                                    LDKF.throwFeatureNotAvailableError(considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR)
                                ))
                            }

                            else {
                                // Method Is Native
                                var methodIsNative = false;

                                // Logic
                                if (LDKT.objectPrototypeIsNativeMethodOfObject(considered.object, considered.propertyName, STRICT = considered.method)) {
                                    // Initialization > Iterator
                                    var iterator;

                                    // Update > Method Is Native
                                    methodIsNative = true;

                                    // Update > Iterator; Loop > Update > Method Is Native
                                    iterator = LDKF.arrayPrototypeLength(consideration.conditions);
                                    while (methodIsNative && iterator) methodIsNative = LDKF.functionPrototypeCall(consideration.conditions[iterator -= 1], consideration, considered.method);

                                    // Logic
                                    if (methodIsNative) {
                                        // Update > Iterator; Loop > Update > Method Is Native
                                        iterator = LDKF.arrayPrototypeLength(consideration.forcedConditions);
                                        while (methodIsNative && iterator) methodIsNative = LDKF.functionPrototypeCall(consideration.forcedConditions[iterator -= 1], consideration, considered.method)
                                    }
                                }

                                // Logic
                                if (!methodIsNative) {
                                    // Initialization > Iterator
                                    var iterator = LDKF.arrayPrototypeLength(consideration.alternateConditions);

                                    // Loop > Update > Method Is Native
                                    while (!methodIsNative && iterator) methodIsNative = LDKF.functionPrototypeCall(consideration.alternateConditions[iterator -= 1], consideration, considered.method);

                                    // Logic
                                    if (!methodIsNative && (considered.methodHasLegacyFunctionality || !LDKF.objectPrototypeHasProperty(considered.object, considered.propertyName))) {
                                        // Constant > Length
                                        var length = LDKF.arrayPrototypeLength(consideration.conditionalFallbacks);

                                        // Update > Iterator
                                        iterator = length;

                                        // Loop
                                        while (!methodIsNative && iterator) {
                                            // Constant > Conditional Fallback
                                            var conditionalFallback = consideration.conditionalFallbacks[length - (iterator -= 1) - 1];

                                            // Logic
                                            if (!LDKF.objectPrototypeHasProperty(conditionalFallback, "condition") || LDKF.functionPrototypeCall(conditionalFallback.condition, consideration, considered.method, considered.object)) {
                                                // Modification > Considered > Method
                                                considered.method = conditionalFallback.value;

                                                // Update > Method Is Native
                                                methodIsNative = true
                                            }
                                        }
                                    }
                                }

                                // Error
                                LDKI.Settings.IgnoreMissingFeatures || (methodIsNative || (
                                    considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR &&
                                    LDKF.throwFeatureNotNativeError(considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR)
                                ))
                            }

                            // Return
                            return considered.method
                        };

                        // Request Native Object --- NOTE (Lapys) -> Ironic, for distinguishing the native state of child objects of their parents is infeasible.
                        LapysDevelopmentKit.Data.ConsiderationPrototype.requestNativeObject = function requestForNativeObject() {
                            // Constant > (Consideration, Considered)
                            var consideration = this, considered = consideration.data;

                            // Logic
                            if (LDKI.Settings.PublicMode) {
                                // Initialization > (Iterator, Child Object Is Available)
                                var iterator = LDKF.arrayPrototypeLength(consideration.forcedConditions),
                                    childObjectIsAvailable = LDKF.isConstructible(considered.childObject);

                                // Loop > Logic > ...
                                while (iterator) if (!LDKF.functionPrototypeCall(consideration.forcedConditions[iterator -= 1], consideration, considered.childObject)) { iterator = +0; childObjectIsAvailable = false }

                                // Error
                                LDKI.Settings.IgnoreMissingFeatures || (childObjectIsAvailable || (
                                    considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR &&
                                    LDKF.throwFeatureNotAvailableError(considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR)
                                ))
                            }

                            else {
                                // Initialization > (Child Object Is Native, Iterator)
                                var childObjectIsNative = true, iterator = LDKF.arrayPrototypeLength(consideration.conditions);

                                // Loop > Update > Child Object Is Native
                                while (childObjectIsNative && iterator) childObjectIsNative = LDKF.functionPrototypeCall(consideration.conditions[iterator -= 1], consideration, considered.childObject);


                                // Logic
                                if (childObjectIsNative) {
                                    // Update > Iterator
                                    iterator = LDKF.arrayPrototypeLength(consideration.forcedConditions);

                                    // Loop > Update > Child Object Is Native
                                    while (childObjectIsNative && iterator) childObjectIsNative = LDKF.functionPrototypeCall(consideration.forcedConditions[iterator -= 1], consideration, considered.childObject);
                                }

                                // Logic
                                if (!childObjectIsNative) {
                                    // Initialization > Iterator
                                    var iterator = LDKF.arrayPrototypeLength(consideration.alternateConditions);

                                    // Loop > Update > Child Object Is Native
                                    while (!childObjectIsNative && iterator) childObjectIsNative = LDKF.functionPrototypeCall(consideration.alternateConditions[iterator -= 1], consideration, considered.childObject);

                                    // Logic
                                    if (!childObjectIsNative && !LDKF.objectPrototypeHasProperty(considered.object, considered.propertyName)) {
                                        // Initialization > Length
                                        var length = LDKF.arrayPrototypeLength(consideration.conditionalFallbacks);

                                        // Update > Iterator
                                        iterator = length;

                                        // Loop
                                        while (!childObjectIsNative && iterator) {
                                            // Initialization > Conditional Fallback
                                            var conditionalFallback = consideration.conditionalFallbacks[length - (iterator -= 1) - 1];

                                            // Logic > ...
                                            if (!LDKF.objectPrototypeHasProperty(conditionalFallback, "condition") || LDKF.functionPrototypeCall(conditionalFallback.condition, consideration, considered.childObject, considered.object)) {
                                                considered.childObject = conditionalFallback.value;
                                                childObjectIsNative = true
                                            }
                                        }
                                    }
                                }

                                // Error
                                LDKI.Settings.IgnoreMissingFeatures || (childObjectIsNative || (
                                    considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR &&
                                    LDKF.throwFeatureNotNativeError(considered.THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR)
                                ))
                            }

                            // Return
                            return considered.childObject
                        };

                        // Request Source --- CHECKPOINT (Lapys) -> This method and other related source manipulation methods.
                        LapysDevelopmentKit.Data.ConsiderationPrototype.requestSource = function requestSource() {
                            // Initialization > ((Consideration, Considered), (Tokens) (Length, Iterator), Source)
                            var consideration = this, considered = consideration.data;
                            var tokens = considered.tokens, tokensLength = considered.tokensLength, tokensIterator = tokensLength;
                            var source = "";

                            // Loop > Update > Source
                            while (tokensIterator) source += tokens[tokensLength - (tokensIterator -= 1) - 1].source;

                            // Return
                            return source
                        };

                /* Function Parameter --- NOTE (Lapys) -> Placeholder structure to represent function parameters. */
                LapysDevelopmentKit.Data.FunctionParameter = function FunctionParameter(name, value, TYPE) {
                    // Initialization > Function Parameter
                    var functionParameter = this;

                    // Logic
                    switch (LDKF.getArgumentsLength(arguments)) {
                        case 1:
                            // Initialization > Source
                            var source = arguments[+0];

                            // Modification > Function Parameter > (Name, (Raw, Value) Source)
                            functionParameter.name =  "";
                            functionParameter.rawSource = source;
                            functionParameter.source = LDKF.stringPrototypeTrim(source);
                            functionParameter.valueSource = "";

                            // ...
                            break;

                        case 2: case 3:
                            // Modification > Function Parameter > (Name, Type, Value (Source))
                            functionParameter.name = name;
                            TYPE && (functionParameter.type = TYPE);
                            functionParameter.value = null;
                            functionParameter.valueSource = value
                    }

                    // Return
                    return functionParameter
                };
                    // Prototype
                    LapysDevelopmentKit.Data.FunctionParameterPrototype = LDKD.FunctionParameter.prototype;
                        // Evaluate Value Source --- WARN (Lapys) -> If the `valueSource` string property is invalid, the exception thrown will be evaluated as the value instead.
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.evaluateValueSource = function evaluateValueSource(SILENCE_EXCEPTIONS) {
                            // Error Handling > ...
                            try { this.value = LDKF.eval(this.valueSource) }
                            catch (error) { if (SILENCE_EXCEPTIONS) this.value = error; else throw error }
                        };

                        // Name
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.name = null;

                        // Raw Source
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.rawSource = null;

                        // Source
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.source = null;

                        // To String --- NOTE (Lapys) -> Allows direct value comparisons (e.g.: `"functionParameter" == <FunctionParameter>`).
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.toString = function toString() { return this.rawSource };

                        // Type
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.type = "default";

                        // Value
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.value = undefined;

                        // Value Source
                        LapysDevelopmentKit.Data.FunctionParameterPrototype.valueSource = null;

                /* Function Parameter List --- WARN (Lapys) -> This constructor is not an array or array-like object constructor, just another placeholder. */
                LapysDevelopmentKit.Data.FunctionParameterList = function FunctionParameterList() {};
                    // Prototype
                    LapysDevelopmentKit.Data.FunctionParameterListPrototype = LDKF.prototypeToArrayLikePrototype(LDKD.FunctionParameterList.prototype = new LDKD.ArrayLike, STRICT = LDKD.FunctionParameterList);
                        // To String
                        LapysDevelopmentKit.Data.FunctionParameterListPrototype.toString = function toString() {
                            // Initialization > ((Function Parameter List) (Length, Iterator), String)
                            var functionParameterList = this,
                                functionParameterListLength = this.length || +0,
                                functionParameterListIterator = functionParameterListLength,
                                string = "";

                            // Loop --- NOTE (Lapys) -> Iterate through the `FunctionParameterList` as an array.
                            while (functionParameterListIterator) {
                                // Update > (Function Parameter List Iterator, String)
                                functionParameterListIterator -= 1;
                                string += LDKF.functionPrototypeCall(LDKD.FunctionParameterPrototype.toString, functionParameterList[functionParameterListLength - functionParameterListIterator - 1]) + (functionParameterListIterator ? ',' : "");
                            }

                            // Return
                            return string
                        };

                /* Handler
                        --- NOTE (Lapys) -> Autonomous sum type for function properties.
                        --- WARN (Lapys) -> Though the constructor is treated as able to create genuine JavaScript functors, it does not.
                */
                LapysDevelopmentKit.Data.Handler = function Handler(routine) {
                    // Initialization > Handler
                    var handler = this;

                    // Logic
                    if (LDKF.getArgumentsLength(arguments))
                        // Logic > ...
                        if (LDKF.isNull(routine) || LDKF.isFunction(routine)) handler.routine = routine;
                        else LDKF.throwTypeError("Constructor argument must be a function or `null`.");

                    // Return
                    return handler
                };
                    // Prototype
                    LapysDevelopmentKit.Data.HandlerPrototype = LDKD.Handler.prototype;
                        // Apply
                        LapysDevelopmentKit.Data.HandlerPrototype.apply = function apply(target, argumentsObject) { return LDKF.isNull(this.routine) ? undefined : LDKF.functionPrototypeApply(this.routine, target, argumentsObject) };

                        // Call
                        LapysDevelopmentKit.Data.HandlerPrototype.call = function call(target, argument) {
                            // Logic
                            if (LDKF.isNull(this.routine))
                                // Return
                                return undefined;

                            else {
                                // Initialization > (Arguments, Iterator)
                                var args = [], iterator = LDKF.getArgumentsLength(arguments);

                                // Logic > Loop > Update > (Iterator, Arguments)
                                if (iterator) while (iterator -= 1) args[iterator - 1] = arguments[iterator];

                                // Return
                                return LDKF.functionPrototypeApply(this.routine, target, args)
                            }
                        };

                        // Invoke --- NOTE (Lapys) -> Substitute for the `()` operator.
                        LapysDevelopmentKit.Data.HandlerPrototypeInvoke = (LapysDevelopmentKit.Data.HandlerPrototype.invoke = function invoke(argument) { return LDKF.isNull(this.routine) ? undefined : LDKF.functionPrototypeApply(this.routine, this, arguments) });

                        // Routine
                        LapysDevelopmentKit.Data.HandlerPrototype.routine = null;

                        // Value Of
                        LapysDevelopmentKit.Data.HandlerPrototype.valueOf = function valueOf() { return this.routine };

                /* Iterator --- NOTE (Lapys) -> General-purpose iteration object (mainly for semantics, really...) */
                LapysDevelopmentKit.Data.Iterator = function Iterator() {};

                /* Frame --- NOTE (Lapys) -> A unit of time. */
                LapysDevelopmentKit.Data.Frame = function Frame() {
                    // Initialization > Frame
                    var frame = this;

                    // Modification > Frame
                        // Events --- NOTE (Lapys) -> The functions called when the frame performs an event.
                        frame.events = LDKF.toArray(arguments);
                            // Count
                            frame.eventsCount = LDKF.getArgumentsLength(arguments);

                        // Current Tick, Data, ID
                        frame.currentTick = +0;
                        frame.data = {};
                        frame.id = null;

                    // Return
                    return frame
                };
                    // Prototype
                    LapysDevelopmentKit.Data.FramePrototype = LDKD.Frame.prototype;
                        // Add Event
                        LapysDevelopmentKit.Data.FramePrototype.addEvent = function addEvent(routine) { this.events[this.eventsCount] = routine; this.eventsCount += 1; return this };

                        // Clear Events
                        LapysDevelopmentKit.Data.FramePrototype.clearEvents = function clearEvents() { this.eventsCount = +0; return this };

                        // Play --- NOTE (Lapys) -> The play event.
                        LapysDevelopmentKit.Data.FramePrototype.play = function play() { var length = this.eventsCount; this.updateCurrentTick(); if (length) if (length ^ 1) { var events = this.events, iterator = length; while (iterator) LDKF.functionPrototypeApply(events[length - (iterator -= 1) - 1], this, arguments) } else { LDKF.functionPrototypeApply(this.events[+0], this, arguments) } return this };

                        // Remove Event
                        LapysDevelopmentKit.Data.FramePrototype.removeEvent = function removeEvent(routine) { LDKF.arrayPrototypeRemoveFrom(this.events, routine); return this };

                        // Update Current Tick
                        LapysDevelopmentKit.Data.FramePrototype.updateCurrentTick = function updateCurrentTick() { this.currentTick = this.currentTick ^ 0x1FFFFFFFFFFFFE ? this.currentTick + 1 : +0; return this };

                /* Node List --- NOTE (Lapys) -> Placeholder for an array-like that stores only `Node`(-like) objects. */
                LapysDevelopmentKit.Data.NodeList = function LapysJSNodeList() {};
                    // Prototype
                    LapysDevelopmentKit.Data.NodeListPrototype = LDKF.prototypeToArrayLikePrototype(LDKD.NodeList.prototype = new LDKD.ArrayLike, STRICT = LDKD.NodeList);

                /* Pseudo Integer --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Integers which are invulnerable to underflow/ overflow. --- UPDATE REQUIRED (Lapys) */
                LapysDevelopmentKit.Data.PseudoInteger = function PseudoInteger() {};

                /* Pseudo Number --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Numbers which are invulnerable to underflow/ overflow. --- UPDATE REQUIRED (Lapys) */
                LapysDevelopmentKit.Data.PseudoNumber = function PseudoNumber() {};

                /* Observer --- NOTE (Lapys) -> Asserts/ evaluates specific conditions. */
                LapysDevelopmentKit.Data.Observer = function Observer(condition, ontrue, onfalse) {
                    // Initialization > (Length, Observer)
                    var length = LDKF.getArgumentsLength(arguments), observer = this;

                    // Modification > Observer > (Condition, On (False, True))
                    observer.condition = new LDKD.Handler(length ? condition : null);
                    observer.onfalse = new LDKD.Handler(length > 2 ? onfalse : null);
                    observer.ontrue = new LDKD.Handler(length > 1 ? ontrue : null);

                    // Return
                    return observer
                };
                    // Prototype
                    LapysDevelopmentKit.Data.ObserverPrototype = LDKD.Observer.prototype;
                        // Condition
                        LapysDevelopmentKit.Data.ObserverPrototype.condition = new LDKD.Handler;

                        // Inference
                        LapysDevelopmentKit.Data.ObserverPrototype.inference = null;

                        // Observe
                        LapysDevelopmentKit.Data.ObserverPrototype.observe = function observe() { var evaluation = LDKF.functionPrototypeCall(LDKD.HandlerPrototypeInvoke, this.condition); LDKF.functionPrototypeCall(LDKD.HandlerPrototypeInvoke, evaluation ? this.ontrue : this.onfalse); return (this.inference = !!evaluation) };

                        // On False
                        LapysDevelopmentKit.Data.ObserverPrototype.onfalse = new LDKD.Handler;

                        // On True
                        LapysDevelopmentKit.Data.ObserverPrototype.ontrue = new LDKD.Handler;

                // Ranged Number --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> A number with limited bit field. By the default, the number does not overflow.
                LapysDevelopmentKit.Data.RangedNumber = function RangedNumber() {};

                /* Safe Array --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Depth-based array. */
                LapysDevelopmentKit.Data.SafeArray = function SafeArray() {};

                /* Safe Integer --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Performant `PseudoInteger` class. */
                LapysDevelopmentKit.Data.SafeInteger = function SafeInteger() {};

                /* Safe Number --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Performant `PseudoNumber` class. */
                LapysDevelopmentKit.Data.SafeNumber = function SafeNumber() {};

                /* Scope --- NOTE (Lapys) -> Semantics for context-based storage. */
                LapysDevelopmentKit.Data.Scope = function Scope() {};

                /* Token --- NOTE (Lapys) -> Structure data about text sequences within scripts. */
                LapysDevelopmentKit.Data.Token = function Token(type, source, children) { var token = this; token.children = LDKF.getArgumentsLength(arguments) > 2 ? (children || []) : []; token.source = source || ""; token.type = type || null; return this };
                    // Prototype
                    LapysDevelopmentKit.Data.TokenPrototype = LapysDevelopmentKit.Data.Token.prototype;
                        // Children --- NOTE (Lapys) -> Tokens within a token.
                        LapysDevelopmentKit.Data.TokenPrototype.children = null;

                        // Source
                        LapysDevelopmentKit.Data.TokenPrototype.source = null;

                        // Type
                        LapysDevelopmentKit.Data.TokenPrototype.type = null;

                        // To String
                        LapysDevelopmentKit.Data.TokenPrototype.toString = function toString() { return this.source || "" };

                        // Value Of
                        LapysDevelopmentKit.Data.TokenPrototype.valueOf = function valueOf() { return LDKF.functionPrototypeCall(LDKD.TokenPrototype.toString, this) };

                /* Vendor --- NOTE (Lapys) -> Semantic indication of a vendor framework or library. */
                LapysDevelopmentKit.Data.Vendor = function Vendor(name, namespace) { this.name = name; (LDKF.getArgumentsLength(arguments) ^ 1) && (this.valueOf = function valueOf() { return namespace }); return this };
                    // Prototype
                    LapysDevelopmentKit.Data.VendorPrototype = LapysDevelopmentKit.Data.Vendor.prototype;
                        // Name
                        LapysDevelopmentKit.Data.VendorPrototype.name = null;

                        // Namespace
                        LapysDevelopmentKit.Data.VendorPrototype.name = null;

                        // To String
                        LapysDevelopmentKit.Data.VendorPrototype.toString = function toString() { return this.name };

                        // Value Of --- NOTE (Lapys) -> Incentivized and permitted to be overridden.
                        LapysDevelopmentKit.Data.VendorPrototype.valueOf = function valueOf() { return LDKF.functionPrototypeCall(LDKD.VendorPrototype.toString, this) };

            /* Functions */
                // Array
                    /* Prototype
                            --- NOTE ---
                                #Lapys:
                                    - Most array methods process & return the source/ target Array.
                                    - All non-decided array manipulation methods (`LapysDevelopmentKit.functions.arrayPrototypeAdd`, `LapysDevelopmentKit.functions.arrayPrototypeRemove`, e.t.c.) normally default to function from the back of the target array (`LapysDevelopmentKit.Functions.arrayPrototypeAddToBack`, `LapysDevelopmentKit.Functions.arrayPrototypeRemoveFromBack`, e.t.c.).

                            --- RULES (Lapys) -> Do not pass argument flags (e.g.: `STRICT` parameters) to variadic array methods.
                            --- WARN ---
                                #Lapys:
                                    - Array methods that use a function-type parameter must callback with `key, value` arguments, not `value` (or `value, key`) argument(s) alone;
                                        This is to keep the coherency between arrays & objects (to infer that arrays are objects).
                                    - Each array method assumes the source Array is always complete (non-holey or non-sparse, but rather dense or packed).
                                    - Ensure each method may not be heavily dependent on another, interoperability may be key, but performance is the zenith here.
                    */
                    LapysDevelopmentKit.Functions.array = function array() {};
                        // Add
                        LapysDevelopmentKit.Functions.arrayPrototypeAdd = function arrayPrototypeAdd(array, element) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeAddToFront, LDKF, arguments) };

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
                                    while (arrayIterator) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = LDKF.functionPrototypeCall(handler, array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1]) }
                                }
                            }

                            // Return
                            return array
                        };

                        // Clone --- WARN (Lapys) -> Except for extreme performance reasons, defer to the `LapysDevelopmentKit.functions.objectPrototypeClone` method instead.
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
                                (length ^ 2) && (arrayLength = LDKF.arrayPrototypeLength(array))
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

                            // Logic > (Loop > )Update > Array
                            if (arrayLength && index < arrayLength) { while (index ^ arrayLength) array[index] = array[index += 1]; LDKF.arrayPrototypeResize(array, arrayLength - 1) }

                            // Return
                            return array
                        };

                        // Cut Left
                        LapysDevelopmentKit.Functions.arrayPrototypeCutLeft = function arrayPrototypeCutLeft(array, length) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeShiftLeft, LDKF, arguments) };

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

                        // Cut Through
                        LapysDevelopmentKit.Functions.arrayPrototypeCutThrough = function arrayPrototypeCutThrough(array, indexA, indexB, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (indexA == indexB)
                                // Update > Array
                                LDKF.arrayPrototypeCutAt(array, indexA, STRICT = arrayLength);

                            else if (indexA < indexB) {
                                // Logic
                                if (indexA < arrayLength) {
                                    // Update > Index B
                                    (indexB > arrayLength - 1) && (indexB = arrayLength - 1);

                                    // Initialization > (Index Difference, Array Iterator)
                                    var indexDifference = (indexB - indexA) + 1,
                                        arrayIterator = indexDifference;

                                    // (Loop > )Update > ...
                                    while (arrayIterator) { arrayIterator -= 1; array[indexA + (indexDifference - arrayIterator - 1)] = array[indexA + indexDifference + (indexDifference - arrayIterator - 1)] }
                                    LDKF.arrayPrototypeResize(array, arrayLength - indexDifference)
                                }
                            }

                            else
                                // Update > Array
                                ((indexA - indexB) ^ 1) && LDKF.arrayPrototypeCutThrough(array, indexB + 1, indexA - 1, STRICT = arrayLength);

                            // Return
                            return array
                        };

                        // Depth --- CHECKPOINT (Lapys) -> Fix.
                        LapysDevelopmentKit.Functions.arrayPrototypeDepth = function arrayPrototypeDepth(array, ARRAY_LENGTH) {
                            // Initialization > (Array Iterator, Depth, Tree (Length))
                            var arrayIterator = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array),
                                depth = 1,
                                tree = [], treeLength = +0;

                            // Loop
                            while (arrayIterator) {
                                // Initialization > Element
                                var element = array[arrayIterator -= 1];

                                // Logic
                                if (LDKF.isArray(element)) {
                                    // Initialization > Element Iterator
                                    var elementIterator = LDKF.arrayPrototypeLength(element);

                                    // Loop
                                    while (elementIterator) {
                                        // Update > Tree (Length)
                                        tree[treeLength] = element[elementIterator -= 1];
                                        treeLength += 1
                                    }
                                }

                                // Logic
                                if (!arrayIterator && treeLength) {
                                    // Initialization > (Has Deeper Layer, Tree Iterator)
                                    var hasDeeperLayer = false, treeIterator = treeLength;

                                    // Loop
                                    do {
                                        // Initialization > Sub Tree (Length)
                                        var subtree = [], subtreeLength = +0;

                                        // Update > (Depth, Has Deeper Layer, Tree Iterator)
                                        depth += 1;
                                        hasDeeperLayer = false;
                                        treeIterator = treeLength;

                                        // Loop
                                        while (treeIterator) {
                                            // Initialization > Sub Array
                                            var subarray = tree[treeIterator -= 1];

                                            // Logic
                                            if (LDKF.isArray(subarray)) {
                                                // Initialization > Sub Array Iterator
                                                var subarrayIterator = LDKF.arrayPrototypeLength(subarray);

                                                // Update > Has Deeper Layer
                                                hasDeeperLayer = true;

                                                // Loop
                                                while (subarrayIterator) {
                                                    // Update > Sub Tree (Length)
                                                    subtree[subtreeLength] = subarray[subarrayIterator -= 1];
                                                    subtreeLength += 1
                                                }
                                            }
                                        }

                                        // Update > Tree (Length)
                                        tree = subtree;
                                        treeLength = subtreeLength
                                    } while (hasDeeperLayer)
                                }
                            }

                            // Return
                            return depth
                        };

                        // Distinct --- WARN (Lapys) -> Does not manipulate the specified Array.
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
                            // Initialization > Length
                            var length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (length) {
                                // Initialization > Iterator
                                var iterator = length;

                                // Loop
                                while (iterator -= 1) {
                                    // Initialization > ((Array, Stop) Length, Array Iterator)
                                    var arrayLength = LDKF.arrayPrototypeLength(array),
                                        stopLength = LDKM.int(arrayLength / 4, STRICT = true),
                                        arrayIterator = arrayLength - ((stopLength * 3) - 1);

                                    // Update > Handler
                                    handler = arguments[length - iterator];

                                    // Loop
                                    while (arrayIterator) {
                                        // Update > Array Iterator
                                        arrayIterator -= 1;

                                        // Logic > Return
                                        if (
                                            !(
                                                LDKF.functionPrototypeCall(handler, array, arrayLength - arrayIterator, array[arrayLength - arrayIterator]) &&
                                                LDKF.functionPrototypeCall(handler, array, arrayLength - stopLength - arrayIterator, array[arrayLength - stopLength - arrayIterator]) &&
                                                LDKF.functionPrototypeCall(handler, array, arrayIterator + stopLength, array[arrayIterator + stopLength]) &&
                                                LDKF.functionPrototypeCall(handler, array, arrayIterator, array[arrayIterator])
                                            )
                                        ) return false
                                    }
                                }

                                // Return
                                return true
                            }

                            else
                                // Return
                                return false
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

                        // Filter --- NOTE (Lapys) -> Trim an Array using Filter routines.
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
                                while (filterLength ^ arrayLength && LDKF.functionPrototypeCall(filter, array, filterLength, array[filterLength])) filterLength += 1;

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
                                    if (!~filterLength || !LDKF.functionPrototypeCall(filter, array, filterLength, array[filterLength])) {
                                        // Update > (Array, Filter Length)
                                        LDKF.arrayPrototypeCutRight(array, arrayLength - filterLength - 1);
                                        filterLength = -1
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Find --- NOTE (Lapys) -> Return the index of an element within the Array using a Finder routine.
                        LapysDevelopmentKit.Functions.arrayPrototypeFind = function arrayPrototypeFind(array, finder, ARRAY_LENGTH) { return LDKF.arrayPrototypeFindFrom(array, finder, STRICT = ARRAY_LENGTH) };

                        // Find From
                        LapysDevelopmentKit.Functions.arrayPrototypeFindFrom = function arrayPrototypeFindFrom(array, finder, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                var arrayIndex = -1,
                                    stopLength = LDKM.int(arrayLength / 4, STRICT = true),
                                    arrayIterator = arrayLength - ((stopLength * 3) - 1);

                                var stopIndexes = [];

                                // Loop
                                while (!~arrayIndex && arrayIterator) {
                                    // Update > (Array Iterator, Stop Indexes)
                                    arrayIterator -= 1;
                                    stopIndexes[+0] = arrayLength - arrayIterator;
                                    stopIndexes[1] = arrayLength - stopLength - arrayIterator;
                                    stopIndexes[2] = arrayIterator + stopLength;
                                    stopIndexes[3] = arrayIterator;

                                    // Update > Array Index
                                    (
                                        (LDKF.functionPrototypeCall(finder, array, stopIndexes[+0], array[stopIndexes[+0]]) && (arrayIndex = stopIndexes[+0] + 1)) ||
                                        (LDKF.functionPrototypeCall(finder, array, stopIndexes[1], array[stopIndexes[1]]) && (arrayIndex = stopIndexes[1] + 1)) ||
                                        (LDKF.functionPrototypeCall(finder, array, stopIndexes[2], array[stopIndexes[2]]) && (arrayIndex = stopIndexes[2] + 1)) ||
                                        (LDKF.functionPrototypeCall(finder, array, stopIndexes[3], array[stopIndexes[3]]) && (arrayIndex = stopIndexes[3] + 1))
                                    ) && (arrayIndex -= 1)
                                }

                                // Return
                                return arrayIndex
                            }

                            // Return
                            return -1
                        };

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
                                    if (LDKF.functionPrototypeCall(finder, array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1])) return arrayLength - arrayIterator - 1
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
                                    if (LDKF.functionPrototypeCall(finder, array, arrayIterator, array[arrayIterator])) return arrayIterator
                                }

                            // Return
                            return -1
                        };

                        // First
                        LapysDevelopmentKit.Functions.arrayPrototypeFirst = function arrayPrototypeFirst(array, DEEP_SEARCH) {
                            // Logic
                            if (LDKF.arrayPrototypeLength(array))
                                // Logic
                                if (DEEP_SEARCH) {
                                    // Initialization > Index
                                    var index;

                                    // Loop > Logic > Return --- NOTE (Lapys) -> This works because the `for...in` loop iteration is ordered.
                                    for (index in array) if (LDKF.stringPrototypeIsPositiveNumericInteger(index)) return array[LDKF.toNumber(index)]
                                }

                                else
                                    // Return
                                    return array[+0];

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
                        LapysDevelopmentKit.Functions.arrayPrototypeForeach = function arrayPrototypeForeach(array, handler, REVERSE_INDEX) {
                            // Initialization > Array Iterator
                            var arrayIterator = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (REVERSE_INDEX)
                                // Loop > ...
                                while (arrayIterator) { arrayIterator -= 1; LDKF.functionPrototypeCall(handler, array, arrayIterator, array[arrayIterator]) }

                            else {
                                // Initialization > Array Length
                                var arrayLength = arrayIterator;

                                // Loop > ...
                                while (arrayIterator) { arrayIterator -= 1; LDKF.functionPrototypeCall(handler, array, arrayLength - arrayIterator - 1, array[arrayLength - arrayIterator - 1]) }
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

                        // Has --- NOTE (Lapys) -> Similar to `LapysDevelopmentKit.Functions.arrayPrototypeIncludes` but does not perform strict comparison (i.e.: `a === b`).
                        LapysDevelopmentKit.Functions.arrayPrototypeHas = function arrayPrototypeHas(array, element, ARRAY_LENGTH) {
                            // Initialization > (Clone, Iterator)
                            var clone = [], iterator = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Loop > Update > (Iterator, Clone)
                            while (iterator) { iterator -= 1; clone[iterator] = LDKF.objectPrototypeValueOf(array[iterator], STRICT = true) }

                            // Return
                            return LDKF.arrayPrototypeIncludes(clone, element)
                        };

                        // Includes
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
                                    // Initialization > (Stop Length, Array Iterator)
                                    var stopLength = LDKM.int(arrayLength / 4, STRICT = true),
                                        arrayIterator = arrayLength - ((stopLength * 3) - 1);

                                    // Loop
                                    while (arrayIterator) {
                                        // Update > Array Iterator
                                        arrayIterator -= 1;

                                        // Logic > Return
                                        if (
                                            (array[arrayLength - arrayIterator] === element) ||
                                            (array[arrayLength - stopLength - arrayIterator] === element) ||
                                            (array[arrayIterator + stopLength] === element) ||
                                            (array[arrayIterator] === element)
                                        ) return true
                                    }

                                    // Return
                                    return false
                                }

                            else
                                // Return
                                return false
                        };

                        // Index
                        LapysDevelopmentKit.Functions.arrayPrototypeIndex = function arrayPrototypeIndex(array, element, ARRAY_LENGTH) { return LDKF.arrayPrototypeIndexFrom(array, element, STRICT = ARRAY_LENGTH) };

                        // Index From
                        LapysDevelopmentKit.Functions.arrayPrototypeIndexFrom = function arrayPrototypeIndexFrom(array, element, ARRAY_LENGTH) {
                            // Initialization > Array Length
                            var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Array (Index, Iterator), Stop Length)
                                var arrayIndex = -1,
                                    stopLength = LDKM.int(arrayLength / 4, STRICT = true),
                                    arrayIterator = arrayLength - ((stopLength * 3) - 1);

                                // Initialization > Stop Indexes
                                var stopIndexes = [];

                                // Loop
                                while (!~arrayIndex && arrayIterator) {
                                    // Update > (Array Iterator, Stop Indexes)
                                    arrayIterator -= 1;
                                    stopIndexes[+0] = arrayLength - arrayIterator;
                                    stopIndexes[1] = arrayLength - stopLength - arrayIterator;
                                    stopIndexes[2] = arrayIterator + stopLength;
                                    stopIndexes[3] = arrayIterator;

                                    // Update > Array Index
                                    (
                                        ((array[stopIndexes[+0]] === element) && (arrayIndex = stopIndexes[+0] + 1)) ||
                                        ((array[stopIndexes[1]] === element) && (arrayIndex = stopIndexes[1] + 1)) ||
                                        ((array[stopIndexes[2]] === element) && (arrayIndex = stopIndexes[2] + 1)) ||
                                        ((array[stopIndexes[3]] === element) && (arrayIndex = stopIndexes[3] + 1))
                                    ) && (arrayIndex -= 1)
                                }

                                // Return
                                return arrayIndex
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
                        LapysDevelopmentKit.Functions.arrayPrototypeInsertAt = function arrayPrototypeInsertAt(array, index, element) {
                            // Initialization > Array Length
                            var length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (length && (length ^ 1) && (length ^ 2)) {
                                // Initialization > (Array (Length), Iterator)
                                var arrayLength = LDKF.arrayPrototypeLength(array),
                                    length = LDKF.getArgumentsLength(arguments) - 2,
                                    iterator = length;

                                // Logic
                                if (index == arrayLength || index > arrayLength)
                                    // Loop > Update > (Iterator, Array)
                                    while (iterator) { iterator -= 1; array[index + iterator] = arguments[2 + iterator] }

                                else {
                                    // Initialization > Array Iterator
                                    var arrayIterator = arrayLength;

                                    // (Loop > )Update > ...
                                    while (iterator) { iterator -= 1; array[arrayLength + iterator] = array[arrayLength - (length - iterator)] }
                                    while (arrayIterator ^ index) { array[arrayIterator] = array[arrayIterator - length]; arrayIterator -= 1 }
                                    iterator = length; while (iterator) { iterator -= 1; array[index + iterator] = arguments[2 + iterator] }
                                }
                            }

                            // Return
                            return array
                        };

                        // Insert Through --- WARN (Lapys) -> Index B must be greater than Index A.
                        LapysDevelopmentKit.Functions.arrayPrototypeInsertThrough = function arrayPrototypeInsertThrough(array, indexA, indexB, element) {
                            // Initialization > (Array) Length
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (indexA ^ indexB)
                                // Logic
                                if (indexB - indexA == length - 3) {
                                    // Initialization > (Arguments, Iterator)
                                    var args = [], iterator = length;

                                    // Loop > Update > Arguments
                                    while ((iterator -= 1) ^ 2) args[iterator - 3] = arguments[iterator];

                                    // Update > Array
                                    LDKF.functionPrototypeApply(LDKF.arrayPrototypeInsertAt, LDKF, LDKF.arrayPrototypeConcatenate([array, indexA], args))
                                }

                                else {
                                    // Initialization > Index
                                    var index = 3;

                                    // Logic
                                    if (indexA < indexB)
                                        // Logic
                                        if (indexA < arrayLength) {
                                            // Initialization > (Index Difference, Iterator)
                                            var indexDifference = indexB - indexA, iterator = arrayLength;

                                            // Loop > Update > Array
                                            while (iterator ^ indexA) array[(iterator + indexDifference) - 1] = array[iterator -= 1];

                                            // (Loop > )Update > ...
                                            iterator = indexA;
                                            while (iterator ^ indexB) { array[iterator] = arguments[index]; index += 1; (index == length) && (index = 3); iterator += 1 }
                                        }

                                        else {
                                            // Initialization > Iterator
                                            var iterator = indexA;

                                            // Loop > Update > ...
                                            while (iterator ^ indexB) { array[iterator] = arguments[index]; index += 1; (index == length) && (index = 3); iterator += 1 }
                                        }
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

                        // Intersect --- NOTE (Lapys) -> Like a mathematical set operation.
                        LapysDevelopmentKit.Functions.arrayPrototypeIntersect = function arrayPrototypeIntersect(arrayA, arrayB) {
                            // Initialization > (Largest (Array Length, Arrays (Length)), Intersection (Length), Length, Iterator)
                            var largestArrayLength = +0,
                                largestArrays = [], largestArraysLength = +0,
                                intersection = [], intersectionLength = +0,
                                length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop
                            while (iterator) {
                                // Initialization > Array (Length)
                                var array = arguments[length - (iterator -= 1) - 1], arrayLength = LDKF.arrayPrototypeLength(array);

                                // Update > Largest Array Length
                                largestArrayLength = largestArrayLength - ((largestArrayLength - arrayLength) & ((largestArrayLength - arrayLength) >> (LDKC.Numbers.integerSize - 1)));

                                // Logic --- NOTE (Lapys) -> There can be multiple largest arrays.
                                if (arrayLength == largestArrayLength) {
                                    // Update > Largest Arrays
                                    largestArrays[largestArraysLength] = array;
                                    largestArraysLength += 1
                                }
                            }

                            // Initialization > Largest Arrays Iterator; Loop --- NOTE (Lapys) -> Loop through the largest arrays only to improve the speed of this algorithm.
                            var largestArraysIterator = largestArraysLength;
                            while (largestArraysIterator) {
                                // Initialization > Largest Array (Iterator)
                                var largestArray = largestArrays[largestArraysIterator -= 1], largestArrayIterator = largestArrayLength;

                                // Loop
                                while (largestArrayIterator) {
                                    // Initialization > (Intersect, Largest Array Element)
                                    var intersect = true, largestArrayElement = largestArray[largestArrayIterator -= 1];

                                    // Update > Iterator; Loop --- NOTE (Lapys) -> Check if the other arrays specified contain the currently indexed Element.
                                    iterator = length;
                                    while (intersect && iterator) {
                                        // Initialization > Array
                                        var array = arguments[iterator -= 1];

                                        // Update > Intersect
                                        (array === largestArray) || (intersect = LDKF.arrayPrototypeIncludes(array, largestArrayElement))
                                    }

                                    // Logic
                                    if (intersect && !LDKF.arrayPrototypeIncludes(intersection, largestArrayElement, STRICT = intersectionLength)) {
                                        // Update > Intersection (Length)
                                        intersection[intersectionLength] = largestArrayElement;
                                        intersectionLength += 1
                                    }
                                }
                            }

                            // Return
                            return intersection
                        };

                        // Is
                        LapysDevelopmentKit.Functions.arrayPrototypeIs = function arrayPrototypeIs(arrayA, arrayB, ARRAY_LENGTH) {
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

                        // Join
                        LapysDevelopmentKit.Functions.arrayPrototypeJoin = function arrayPrototypeJoin(array, separator) {
                            // Initialization > (Array (Length, Iterator), String)
                            var arrayLength = LDKF.arrayPrototypeLength(array), arrayIterator = arrayLength,
                                string = "";

                            // Update > Separator
                            (LDKF.getArgumentsLength(arguments) < 2) && (separator = ", ");

                            // Loop > Update > String
                            while (arrayIterator) string += LDKF.toString(array[arrayLength - (arrayIterator -= 1) - 1]) + (arrayIterator ? separator : "");

                            // Return
                            return string
                        };

                        // Last
                        LapysDevelopmentKit.Functions.arrayPrototypeLast = function arrayPrototypeLast(array, DEEP_SEARCH) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength)
                                // Logic
                                if (DEEP_SEARCH) {
                                    // Initialization > Indexes (Iterator)
                                    var indexes = [], indexesIterator = +0;

                                    // Loop > Update > Indexes (Iterator) --- NOTE (Lapys) -> Unfortunately, the `for...in` statement does not iterate enumerable keys in reverse.
                                    for (index in array) { indexes[indexesIterator] = index; indexesIterator += 1 }

                                    // Loop
                                    while (indexesIterator) {
                                        // Initialization > Index
                                        var index = indexes[indexesIterator -= 1];

                                        // Logic > Return
                                        if (LDKF.stringPrototypeIsPositiveNumericInteger(index)) return array[LDKF.toNumber(index)]
                                    }
                                }

                                else
                                    // Return
                                    return array[arrayLength - 1];

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
                                while (iterator) { iterator -= 1; if (LDKF.objectPrototypeValueOf(arrayA[iterator]) != LDKF.objectPrototypeValueOf(arrayB[iterator])) return false }
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
                                    if (LDKF.functionPrototypeCall(matcher, array, arrayLength - arrayIterator - 1, element)) { matches[matchesLength] = element; matchesLength += 1 }
                                }

                                // Return
                                return matches
                            }

                            // Return
                            return []
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
                            arguments[+0] = LDKF.functionPrototypeApply(LDKF.arrayPrototypePadRight, LDKF, arguments);

                            // Return
                            return LDKF.functionPrototypeApply(LDKF.arrayPrototypePadLeft, LDKF, arguments)
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

                        // Pop --- NOTE (Lapys) -> Remove the last element from an Array. Returns the "popped" element.
                        LapysDevelopmentKit.Functions.arrayPrototypePop = function arrayPrototypePop(array, ARRAY_LENGTH) { var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array); if (arrayLength) { arrayLength -= 1; var element = array[arrayLength]; LDKF.arrayPrototypeResize(array, arrayLength); return element } };

                        // Push --- NOTE (Lapys) -> Add an element to the end of an Array.
                        LapysDevelopmentKit.Functions.arrayPrototypePush = function arrayPrototypePush(array, element, ARRAY_LENGTH) { var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array); array[arrayLength] = element; return arrayLength + 1 };

                        // Random
                        LapysDevelopmentKit.Functions.arrayPrototypeRandom = function arrayPrototypeRandom(array, ARRAY_LENGTH) { return array[LDKF.arrayPrototypeRandomIndex(array, STRICT = ARRAY_LENGTH)] };

                        // Random Index
                        LapysDevelopmentKit.Functions.arrayPrototypeRandomIndex = function arrayPrototypeRandomIndex(array, ARRAY_LENGTH) { return LDKM.int(LDKM.random() * (ARRAY_LENGTH || LDKF.arrayPrototypeLength(array))) };

                        // Remove
                        LapysDevelopmentKit.Functions.arrayPrototypeRemove = function arrayPrototypeRemove(array, element) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeRemoveFromBack, LDKF, arguments) };

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
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicate = function arrayPrototypeRemoveDuplicate(array, ARRAY_LENGTH) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeRemoveDuplicateFromBack, LDKF, arguments) };

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
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicates = function arrayPrototypeRemoveDuplicates(array, ARRAY_LENGTH) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeRemoveDuplicatesFromBack, LDKF, arguments) };

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
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicatesFromFront = function arrayPrototypeRemoveDuplicatesFromFront(array, ARRAY_LENGTH) {
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

                        // Remove From
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveFrom = function arrayPrototypeRemoveFrom(array, element) {
                            // Initialization > Array (Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array), length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (arrayLength && length > 1) {
                                // Initialization > (Index, Iterator)
                                var index, iterator = length;

                                // Loop > Update > Array
                                while (iterator -= 1)
                                    ~(index = LDKF.arrayPrototypeIndexFrom(array, arguments[length - iterator], STRICT = arrayLength)) &&
                                    LDKF.arrayPrototypeCutAt(array, index, STRICT = (arrayLength -= 1) + 1)
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
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveRepeat = function arrayPrototypeRemoveRepeat(array, ARRAY_LENGTH) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeRemoveRepeatFromBack, LDKF, arguments) };

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
                        LapysDevelopmentKit.Functions.arrayPrototypeReplace = function arrayPrototypeReplace(array, element, replacementElement) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeReplaceFromBack, LDKF, arguments) };

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
                        LapysDevelopmentKit.Functions.arrayPrototypeRemoveDuplicate = function arrayPrototypeRemoveDuplicate(array, replacementElement, ARRAY_LENGTH) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeRemoveDuplicateFromBack, LDKF, arguments) };

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
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceDuplicates = function arrayPrototypeReplaceDuplicates(array, replacementElement, ARRAY_LENGTH) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeReplaceDuplicatesFromBack, LDKF, arguments) };

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

                        // Replace From
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceFrom = function arrayPrototypeReplaceFrom(array, element, replacementElement) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Index
                                var index = LDKF.arrayPrototypeIndexFrom(array, element);

                                // Update > Array
                                ~index && (array[index] = replacementElement)
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
                        LapysDevelopmentKit.Functions.arrayPrototypeReplaceRepeat = function arrayPrototypeReplaceRepeat(array, replacementElement, ARRAY_LENGTH) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeReplaceRepeatFromBack, LDKF, arguments) };

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
                            if (arrayLength) { LDKF.arrayPrototypeReverse(array, STRICT = arrayLength); LDKF.functionPrototypeApply(LDKF.arrayPrototypeRemoveRepeatFromBack, LDKF, arguments); LDKF.arrayPrototypeReverse(array) }

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

                        // Resize --- NOTE (Lapys) -> The parameter flag `USE_LENGTH_PROPERTY` might be misleading, but the Array is resized using its `length` property.
                        LapysDevelopmentKit.Functions.arrayPrototypeResize = function arrayPrototypeResize(array, length, USE_LENGTH_PROPERTY) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // ...
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
                                array[arrayIterator] = array[arrayLength - arrayIterator - 1];
                                array[arrayLength - arrayIterator - 1] = element
                            }

                            // Return
                            return array
                        };

                        // Rotate Left --- NOTE (Lapys) -> Could have named it `LapysDevelopmentKit.Functions.arrayPrototypeRotateCounterClockwise` but that would be too long.
                        LapysDevelopmentKit.Functions.arrayPrototypeRotateLeft = function arrayPrototypeRotateLeft(array, length, ARRAY_LENGTH) {
                            // Logic
                            if (length) {
                                // Initialization > Array Length
                                var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                                // Loop > Update > Length
                                while (length > arrayLength) length -= arrayLength;

                                // Logic
                                if (arrayLength ^ length) {
                                    // Initialization > Array (Iterator, Slice)
                                    var arrayIterator = length, arraySlice = [];

                                    // (Loop > )Update > ...
                                    arrayIterator = length; while (arrayIterator) { arrayIterator -= 1; arraySlice[arrayIterator] = array[arrayIterator] }
                                    arrayIterator = arrayLength; while (arrayIterator ^ length) { arrayIterator -= 1; array[arrayLength - arrayIterator - 1] = array[arrayLength - arrayIterator + (length - 1)]  }
                                    arrayIterator = length; while (arrayIterator) { arrayIterator -= 1; array[(arrayLength - length) + arrayIterator] = arraySlice[arrayIterator]; }
                                }
                            }

                            // Return
                            return array
                        };

                        // Rotate Right
                        LapysDevelopmentKit.Functions.arrayPrototypeRotateRight = function arrayPrototypeRotateRight(array, length, ARRAY_LENGTH) {
                            // Logic
                            if (length) {
                                // Initialization > Array Length
                                var arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                                // Loop > Update > Length
                                while (length > arrayLength) length -= arrayLength;

                                // Logic
                                if (arrayLength ^ length) {
                                    // Initialization > Array (Iterator, Slice)
                                    var arrayIterator = arrayLength, arraySlice = [];

                                    // (Loop > )Update > ...
                                    while (arrayIterator) { arrayIterator -= 1; arraySlice[length - arrayIterator - 1] = array[arrayLength - arrayIterator - 1] }
                                    arrayIterator = arrayLength + 1; while (arrayIterator ^ length) { arrayIterator -= 1; array[arrayIterator - 1] = array[arrayIterator - length - 1] }
                                    arrayIterator = length; while (arrayIterator) { arrayIterator -= 1; array[arrayIterator] = arraySlice[arrayIterator] }
                                }
                            }

                            // Return
                            return array
                        };

                        // Shift Left --- NOTE (Lapys) -> Move the elements of an array backward to replace its first elements.
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

                        // Shift Right --- NOTE (Lapys) -> Shift the elements of an array forward in index.
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

                        // Slice --- NOTE (Lapys) -> Similar to the `Array.prototype.slice` method.
                        LapysDevelopmentKit.Functions.arrayPrototypeSlice = function arrayPrototypeSlice(array, indexA, indexB) {
                            // Initialization > Array Length
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > Array Iterator
                                var arrayIterator = +0;

                                // Logic
                                if (indexA > arrayLength - 1 && indexB > arrayLength - 1)
                                    // Update > Array
                                    LDKF.arrayPrototypeFree(array);

                                else {
                                    // Update > Index A
                                    (indexB > arrayLength - 1) && (indexB = arrayLength - 1);

                                    // Logic
                                    if (indexA < indexB + 1 && indexA < arrayLength + 1) {
                                        // Update > Array Length
                                        arrayLength = indexB - indexA + 1;

                                        // Loop > Update > Array (Iterator)
                                        while (arrayIterator ^ arrayLength) { array[arrayIterator] = array[arrayIterator + indexA]; arrayIterator += 1 }

                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength)
                                    }

                                    else if (indexA > indexB) {
                                        // Logic
                                        if (indexA > arrayLength)
                                            // Update > Array Length
                                            arrayLength = indexB + 1;

                                        else {
                                            // (Loop > )Update > ...
                                            arrayLength = (arrayLength - indexA) + indexB + 1;
                                            while (indexB ^ indexA + 2) { indexB += 1; array[indexB] = array[arrayIterator + indexA]; arrayIterator += 1 }
                                        }

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
                            // Initialization > Length
                            var length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (length) {
                                // Initialization > Iterator
                                var iterator = length;

                                // Loop
                                while (iterator -= 1) {
                                    // Initialization > ((Array, Stop) Length, Array Iterator)
                                    var arrayLength = LDKF.arrayPrototypeLength(array),
                                        stopLength = LDKM.int(arrayLength / 4, STRICT = true),
                                        arrayIterator = arrayLength - ((stopLength * 3) - 1);

                                    // Update > Handler
                                    handler = arguments[length - iterator];

                                    // Loop
                                    while (arrayIterator) {
                                        // Update > Array Iterator
                                        arrayIterator -= 1;

                                        // Logic > Return
                                        if (
                                            LDKF.functionPrototypeCall(handler, array, arrayLength - arrayIterator, array[arrayLength - arrayIterator]) ||
                                            LDKF.functionPrototypeCall(handler, array, arrayLength - stopLength - arrayIterator, array[arrayLength - stopLength - arrayIterator]) ||
                                            LDKF.functionPrototypeCall(handler, array, arrayIterator + stopLength, array[arrayIterator + stopLength]) ||
                                            LDKF.functionPrototypeCall(handler, array, arrayIterator, array[arrayIterator])
                                        ) return true
                                    }
                                }

                                // Return
                                return false
                            }

                            else
                                // Return
                                return false
                        };

                        // Sort
                        LapysDevelopmentKit.Functions.arrayPrototypeSort = function arrayPrototypeSort(array, sorter, IS_INTEGER_ARRAY, ARRAY_LENGTH) {
                            // Update > Sorter
                            (sorter === ANY) && (sorter = LDKF.arrayPrototypeSortSelector);
                            (LDKF.getArgumentsLength(arguments) > 1) || (sorter = IS_INTEGER_ARRAY ? LDKF.arrayPrototypeSortIntegerSelector : LDKF.arrayPrototypeSortSelector);

                            // Initialization > Array (Iterator, Length)
                            var arrayIterator = +0, arrayLength = ARRAY_LENGTH || LDKF.arrayPrototypeLength(array);

                            // Loop
                            while (arrayIterator ^ arrayLength) {
                                // Initialization > (Continue Iteration, Element)
                                var continueIteration = true, element = array[arrayIterator];

                                // Logic
                                if ((arrayIterator + 1) ^ arrayLength) {
                                    // Initialization > Next Element
                                    var nextElement = array[arrayIterator + 1];

                                    // Logic
                                    if (element !== nextElement && sorter(element, nextElement) === nextElement) {
                                        // Logic
                                        if (IS_INTEGER_ARRAY) {
                                            // Update > Array
                                            array[arrayIterator] ^= nextElement;
                                            array[arrayIterator + 1] ^= element;
                                            array[arrayIterator] ^= array[arrayIterator + 1]
                                        }

                                        else {
                                            // Update > Array
                                            array[arrayIterator + 1] = element;
                                            array[arrayIterator] = nextElement
                                        }

                                        // Update > (Array Iterator, Continue Iteration)
                                        arrayIterator = ~(arrayIterator - 1) ? arrayIterator - 1 : +0;
                                        continueIteration = false
                                    }
                                }

                                // Update > Array Iterator
                                continueIteration && (arrayIterator += 1)
                            }

                            // Return
                            return array
                        };

                        // Sort Integer Selector
                        LapysDevelopmentKit.Functions.arrayPrototypeSortIntegerSelector = function arrayPrototypeSortIntegerSelector(elementA, elementB) { return LDKF.arrayPrototypeSortSelector(elementA, elementB, STRICT = true) };

                        // Sort Selector
                        LapysDevelopmentKit.Functions.arrayPrototypeSortSelector = function arrayPrototypeSortSelector(elementA, elementB, PROCESS_AS_INTEGERS) {
                            // Logic
                            if (PROCESS_AS_INTEGERS)
                                // Return
                                return elementA - ((elementA - elementB) & LDKF.numberPrototypeShiftRight(elementB - elementA));

                            else {
                                // Initialization > Element (A, B) Is Number-Like
                                var elementAIsNumberLike = LDKF.isNumberLike(elementA), elementBIsNumberLike = LDKF.isNumberLike(elementB);

                                // Logic
                                if (elementAIsNumberLike && elementBIsNumberLike)
                                    // Return
                                    return LDKF.toNumber(elementB) < LDKF.toNumber(elementA) ? elementB : elementA;

                                else if (elementAIsNumberLike && !elementBIsNumberLike)
                                    // Return
                                    return elementA;

                                else if (!elementAIsNumberLike && elementBIsNumberLike)
                                    // Return
                                    return elementB;

                                else {
                                    // Initialization > Element (A, B) Is String
                                    var elementAIsString = LDKF.isString(elementA), elementBIsString = LDKF.isString(elementB);

                                    // Logic
                                    if (elementAIsString && elementBIsString)
                                        // Logic
                                        if (!elementA)
                                            // Return
                                            return elementA;

                                        else if (!elementB)
                                            // Return
                                            return elementB;

                                        else if (elementA == elementB)
                                            // Return
                                            return elementA;

                                        else {
                                            // Initialization > (Element (A, B) Length, Iterator, Length, Selection)
                                            var elementALength = LDKF.stringPrototypeLength(elementA), elementBLength = LDKF.stringPrototypeLength(elementB),
                                                iterator = +0, length = LDKM.min(elementALength, elementBLength),
                                                selection = null;

                                            // Loop
                                            while (iterator ^ length && LDKF.isNull(selection)) {
                                                // Initialization > Element (A, B) Character
                                                var elementACharacter = LDKF.stringPrototypeCharacterAt(elementA, iterator),
                                                    elementBCharacter = LDKF.stringPrototypeCharacterAt(elementB, iterator);

                                                // Logic
                                                if (elementACharacter == elementBCharacter)
                                                    // Update > Iterator
                                                    iterator += 1;

                                                else {
                                                    // Initialization > Index (A, B)
                                                    var indexA = LDKF.arrayPrototypeIndexFrom(LDKC.Strings.sortableCharacters, elementACharacter),
                                                        indexB = LDKF.arrayPrototypeIndexFrom(LDKC.Strings.sortableCharacters, elementBCharacter);

                                                    // Logic > Update > Selection
                                                    if (!~indexA || !~indexB) selection = elementACharacter > elementBCharacter ? elementA : elementB;
                                                    else selection = indexA < indexB ? elementA : elementB
                                                }
                                            }

                                            // Return
                                            return LDKF.isNull(selection) ? (elementBLength < elementALength ? elementB : elementA) : selection
                                        }

                                    else if (elementAIsString && !elementBIsString)
                                        // Return
                                        return elementA;

                                    else if (!elementAIsString && elementBIsString)
                                        // Return
                                        return elementB;

                                    else
                                        // Logic > Return
                                        if (LDKF.isConstructible(elementA)) return elementA;
                                        else if (LDKF.isConstructible(elementB)) return elementB;
                                        else if (LDKF.isNull(elementA)) return elementA;
                                        else if (LDKF.isNull(elementB)) return elementB;
                                        else return elementA
                                }
                            }
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

                        // Union --- NOTE (Lapys) -> Like a mathematical set operation; Unlike concatenation, it does not duplicate added elements and does not return the specified array.
                        LapysDevelopmentKit.Functions.arrayPrototypeUnion = function arrayPrototypeUnion(arrayA, arrayB) {
                            // Initialization > (Length, Iterator, Union (Length))
                            var length = LDKF.getArgumentsLength(arguments), iterator = length,
                                union = [], unionLength = +0;

                            // Loop
                            while (iterator) {
                                // Initialization > Array (Iterator, Length)
                                var array = arguments[length - (iterator -= 1) - 1],
                                    arrayLength = LDKF.arrayPrototypeLength(array),
                                    arrayIterator = arrayLength;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > Element
                                    var element = array[arrayLength - (arrayIterator -= 1) - 1];

                                    // Logic
                                    if (!LDKF.arrayPrototypeIncludes(union, element, STRICT = unionLength)) {
                                        // Update > Union
                                        union[unionLength] = element;
                                        unionLength += 1
                                    }
                                }
                            }

                            // Return
                            return union
                        };

                    /* Size
                            --- NOTE (Lapys) -> Creates a Java-like filled array if the `USE_LENGTH_PROPERTY` flag is not `true`.

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
                    // Copy
                    LapysDevelopmentKit.Functions.arrayLikePrototypeCopy = function arrayLikePrototypeCopy(arrayLike, arrayLikeToCopy, ARRAY_LIKE_LENGTH, ARRAY_LIKE_TO_COPY_LENGTH, SILENCE_EXCEPTIONS) {
                        // Initialization > ...
                        var arrayLikeIterator = ARRAY_LIKE_LENGTH || LDKF.arrayLikePrototypeLength(arrayLike),
                            arrayLikeToCopyLength = ARRAY_LIKE_TO_COPY_LENGTH || LDKF.arrayLikePrototypeLength(arrayLikeToCopy),
                            arrayLikeToCopyIterator = arrayLikeToCopyLength;

                        // Logic > Loop > Update > ...
                        if (arrayLikeIterator ^ (arrayLikeIterator - ((arrayLikeIterator - arrayLikeToCopyLength) & LDKF.numberPrototypeShiftRight(arrayLikeToCopyLength - arrayLikeIterator))))
                            while (arrayLikeIterator ^ arrayLikeToCopyLength) { arrayLikeIterator -= 1; LDKF.objectPrototypeDeleteProperty(arrayLike, arrayLikeIterator) }

                        // Loop > Update > ...
                        while (arrayLikeToCopyIterator) { arrayLikeToCopyIterator -= 1; LDKF.arrayLikePrototypeSetIndex(arrayLike, arrayLikeToCopyIterator, LDKF.arrayLikePrototypeElementAt(arrayLikeToCopy, arrayLikeToCopyIterator, STRICT = SILENCE_EXCEPTIONS), STRICT = SILENCE_EXCEPTIONS) }
                    };

                    // Element At --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.arrayLikePrototypeElementAt = function arrayLikePrototypeElementAt(arrayLike, index, SILENCE_EXCEPTIONS) {
                        // Logic > ...
                        if (LDKF.isArray(arrayLike)) return arrayLike[index];
                        else if (LDKF.isHTMLCollectionLike(arrayLike)) return LDKF.htmlCollectionPrototypeItem(arrayLike, index);
                        else try { return arrayLike[index] } catch (error) { if (!SILENCE_EXCEPTIONS) throw error }
                    };

                    // First
                    LapysDevelopmentKit.Functions.arrayLikePrototypeFirst = function arrayLikePrototypeFirst(arrayLike) {
                        // Return
                        return LDKF.isArray(arrayLike) ? LDKF.arrayPrototypeFirst(arrayLike) : LDKF.arrayLikePrototypeElementAt(arrayLike, +0)
                    };

                    // Last
                    LapysDevelopmentKit.Functions.arrayLikePrototypeLast = function arrayLikePrototypeLast(arrayLike, ARRAY_LIKE_LENGTH) {
                        // Logic
                        if (LDKF.isArray(arrayLike))
                            // Return
                            return LDKF.arrayPrototypeLast(arrayLike, STRICT = ARRAY_LIKE_LENGTH);

                        else {
                            // Initialization > Array-Like Length
                            var arrayLikeLength = ARRAY_LIKE_LENGTH || LDKF.arrayLikePrototypeLength(arrayLike);

                            // Return
                            return LDKF.arrayLikePrototypeElementAt(arrayLike, ~arrayLikeLength ? arrayLikeLength - 1 : arrayLikeLength)
                        }
                    };

                    // Length --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.arrayLikePrototypeLength = function arrayLikePrototypeLength(arrayLike) {
                        // Logic > Return
                        if (LDKF.isArray(arrayLike)) return LDKF.arrayPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLCollectionLike(arrayLike)) return LDKF.htmlCollectionPrototypeLength(arrayLike);
                        else { try { return LDKM.int(LDKF.toNumber(arrayLike.length)) } catch (error) {} return LDKC.Numbers.NaN }
                    };

                    /* Lock
                            --- NOTE (Lapys) -> Parse the properties of a LapysJS array-like constructor to be constant.
                            --- WARN (Lapys) -> The properties can still be re-defined using the `Object.defineProperty` method.
                    */
                    LapysDevelopmentKit.Functions.arrayLikePrototypeLock = function arrayLikePrototypeLock(arrayLike, ARRAY_LIKE_LENGTH) {
                        // Logic
                        if (!LDKF.isNativeArrayLike(arrayLike)) {
                            // Initialization > Array-Like (Length, Iterator)
                            var arrayLikeLength = ARRAY_LIKE_LENGTH || LDKM.int(LDKF.toNumber(LDKF.objectPrototypeGetProperty(arrayLike, "length", STRICT = true))),
                                arrayLikeIterator = arrayLikeLength;

                            // Modification > Array-Like > Length
                            LDKF.objectDefineProperty(arrayLike, "length", {configurable: true, enumerable: false, value: arrayLikeLength, writable: false});

                            // Loop > Update > Array-Like (Iterator)
                            while (arrayLikeIterator) { arrayLikeIterator -= 1; LDKF.objectDefineProperty(arrayLike, arrayLikeIterator, {configurable: true, enumerable: true, value: LDKF.objectPrototypeGetProperty(arrayLike, arrayLikeIterator, STRICT = true), writable: false}) }
                        }
                    };

                    // Set Index --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.arrayLikePrototypeSetIndex = function arrayLikePrototypeSetIndex(arrayLike, index, element, SILENCE_EXCEPTIONS) { try { arrayLike[index] = element } catch (error) { if (!SILENCE_EXCEPTIONS) throw error } return element };

                    // Unlock --- NOTE (Lapys) -> Parse the properties of a LapysJS array-like constructor to be mutable.
                    LapysDevelopmentKit.Functions.arrayLikePrototypeUnlock = function arrayLikePrototypeUnlock(arrayLike, ARRAY_LIKE_LENGTH) {
                        // Logic
                        if (!LDKF.isNativeArrayLike(arrayLike)) {
                            // Initialization > Array-Like (Length, Iterator)
                            var arrayLikeLength = ARRAY_LIKE_LENGTH || LDKM.int(LDKF.toNumber(LDKF.objectPrototypeGetProperty(arrayLike, "length", STRICT = true))),
                                arrayLikeIterator = arrayLikeLength;

                            // Modification > Array-Like > Length
                            LDKF.objectDefineProperty(arrayLike, "length", {configurable: true, enumerable: false, value: arrayLikeLength, writable: true});

                            // Loop > Update > Array-Like (Iterator)
                            while (arrayLikeIterator) { arrayLikeIterator -= 1; LDKF.objectDefineProperty(arrayLike, LDKF.toString(arrayLikeIterator), {configurable: true, enumerable: true, value: LDKF.objectPrototypeGetProperty(arrayLike, LDKF.toString(arrayLikeIterator), STRICT = true), writable: true}) }
                        }
                    };

                /* Assert
                        --- NOTE (Lapys) -> Observers could be used here but this method is meant to be lightweight.
                        --- WARN (Lapys) -> The On Fail parameter is assumed to be a function if passed.
                */
                LapysDevelopmentKit.Functions.assert = function assert(expressionValue, onfail) { return !!expressionValue || (LDKF.getArgumentsLength(arguments) > 1 ? onfail() : LDKF.throwAssertionFailError(), false) };

                // Cancel Animation Frame
                LapysDevelopmentKit.Functions.cancelAnimationFrame = function cancelAnimationFrame(frameID) { return LDKF.functionPrototypeCall(LDKO.cancelAnimationFrame, GLOBAL, frameID) };

                // Clear Interval
                LapysDevelopmentKit.Functions.clearInterval = function clearInterval(intervalID) { return LDKO.clearIntervalCall === LDKO.functionPrototypeCall ? LDKF.functionPrototypeCall(LDKO.clearInterval, GLOBAL, intervalID) : LDKO.clearInterval(intervalID) };

                // Clear Timeout
                LapysDevelopmentKit.Functions.clearTimeout = function clearTimeout(timeoutID) { return LDKO.clearTimeoutCall === LDKO.functionPrototypeCall ? LDKF.functionPrototypeCall(LDKO.clearTimeout, GLOBAL, timeoutID) : LDKO.clearTimeout(timeoutID) };

                // Console
                    // Group
                    LapysDevelopmentKit.Functions.consoleGroup = function consoleGroup() { try { return LDKF.functionPrototypeApply(LDKC.Objects.consoleGroup, LDKC.Objects.console, arguments) } catch (error) {} return LDKC.Objects.consoleGroup(LDKF.arrayPrototypeJoin(arguments, ' ')) };

                    // Group Collapsed
                    LapysDevelopmentKit.Functions.consoleGroupCollapsed = function consoleGroupCollapsed() { try { return LDKF.functionPrototypeApply(LDKC.Objects.consoleGroupCollapsed, LDKC.Objects.console, arguments) } catch (error) {} return LDKC.Objects.consoleGroupCollapsed(LDKF.arrayPrototypeJoin(arguments, ' ')) };

                    // Group End
                    LapysDevelopmentKit.Functions.consoleGroupEnd = function consoleGroupEnd() { try { return LDKF.functionPrototypeCall(LDKC.Objects.consoleGroupEnd, LDKC.Objects.console) } catch (error) {} return LDKC.Objects.consoleGroupEnd() };

                    // Log
                    LapysDevelopmentKit.Functions.consoleLog = function consoleLog() { try { return LDKF.functionPrototypeApply(LDKC.Objects.consoleLog, LDKC.Objects.console, arguments) } catch (error) {} return LDKC.Objects.consoleLog(LDKF.arrayPrototypeJoin(arguments, ' ')) };

                    // Warn --- NOTE (Lapys) -> Affected by the `Ignore Warnings` setting.
                    LapysDevelopmentKit.Functions.consoleWarn = function consoleWarn() { if (LDKI.Settings.IgnoreWarnings) return null; else { try { return LDKF.functionPrototypeApply(LDKC.Objects.consoleWarn, LDKC.Objects.console, arguments) } catch (error) {} return LDKC.Objects.consoleWarn(LDKF.arrayPrototypeJoin(arguments, ' ')) } };

                // Create Class --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Legacy-compatible class object creation.
                LapysDevelopmentKit.Functions.createClass = function createClass(options) {
                    // Initialization > Class Object
                    var classObject;

                    // Update > Options
                    LDKF.isFunction(options) && (options = {constructor: options});

                    // Initialization > (Constructor, Name)
                    var constructor = options.constructor,
                        constructorSource = LDKF.functionPrototypeToSourceString(constructor),
                        name = options.name || LDKF.functionPrototypeName(constructor, STRICT = constructorSource) || "";

                    // Logic
                    if (LDKC.Assertions.allows_class_Keyword)
                        // Logic
                        if (LDKF.functionPrototypeIsClass(constructor, STRICT = constructorSource))
                            // Update > Class Object
                            classObject = constructor;

                        else
                            // Update > Class Object
                            classObject = LDKF.eval(LDKF.stringPrototypeRemoveAll("\
                                class " + name + " {" +
                                    (LDKF.functionPrototypeHasEmptyBody(constructor, STRICT = constructorSource, STRICT = true) && LDKF.functionPrototypeIsNiladic(constructor, STRICT = constructorSource) ?
                                        "" :
                                        "\n\
                                        constructor(" + LDKF.functionPrototypeParametersSource(constructor, STRICT = constructorSource) + ") " +
                                            (function(constructorBodySource) {
                                                // Update > Constructor Body Source
                                                (LDKF.stringPrototypeFirst(constructorBodySource) == '{' && LDKF.stringPrototypeLast(constructorBodySource) == '}') || (constructorBodySource = "{ " + constructorBodySource + " }");

                                                // Return
                                                return constructorBodySource
                                            })(LDKF.functionPrototypeBody(constructor, STRICT = constructorSource)) +
                                        "\n"
                                    ) +
                                "}\
                            ", "                                ", STRICT = null, STRICT = 32));

                    else {
                        // Constant > Invalid Construction Error Message
                        var invalidConstructionErrorMessage = LDKF.stringPrototypeToInvalidConstructionErrorMessage(name ? '`' + name + '`' : "Constructor");

                        // Update > Class Object
                        classObject = LDKF.eval(
                            LDKF.functionPrototypeHead(constructor, STRICT = constructorSource) + ' ' +
                            (LDKF.functionPrototypeHasEmptyBody(constructor, STRICT = constructorSource) ?
                                "{ LapysJS.evaluationScope.objectPrototypeInstanceOf(this, LapysJS.evaluationScope.getArgumentsCallee(arguments), true) || LapysJS.evaluationScope.throwTypeError(\"" + invalidConstructionErrorMessage + "\") }" :
                                (function(constructorBodySource) {
                                    // Update > Constructor Body Source
                                    (LDKF.stringPrototypeFirst(constructorBodySource) == '{' && LDKF.stringPrototypeLast(constructorBodySource) == '}') && (constructorBodySource = LDKF.stringPrototypeCut(constructorBodySource, 1));

                                    // Return
                                    return "{\nif (LapysJS.evaluationScope.objectPrototypeInstanceOf(this, LapysJS.evaluationScope.getArgumentsCallee(arguments), true)) {\n" + constructorBodySource + "\n} else LapysJS.evaluationScope.throwTypeError(\"" + invalidConstructionErrorMessage + "\")\n}"
                                })(LDKF.functionPrototypeBody(constructor, STRICT = constructorSource))
                            )
                        )
                    }

                    // Return
                    return classObject
                };

                // Create Function --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Reminiscent of the previous versions of LapysJS (the `func` function for function source manipulation).
                LapysDevelopmentKit.Functions.createFunction = function createFunction(options) {};

                // Create Custom Error Constructor --- NOTE (Lapys) -> Examples include: `FeatureError`, `LapysJSError` and so on.
                LapysDevelopmentKit.Functions.createCustomErrorConstructor = function createCustomErrorConstructor(customErrorName, baseConstructor, BASE_CONSTRUCTOR_SOURCE) {
                    // Initialization > (Base Constructor Source, Use `setPrototypeOf` Method)
                    var baseConstructorSource, use__setPrototypeOf__Method = !LDKI.Settings.IgnoreMissingFeatures;

                    // Logic
                    if (BASE_CONSTRUCTOR_SOURCE)
                        // Update > Base Constructor Source
                        baseConstructorSource = BASE_CONSTRUCTOR_SOURCE;

                    else {
                        // Update > Base Constructor Source
                        baseConstructorSource = LDKF.stringPrototypeIdentifier(LDKF.functionPrototypeName(baseConstructor));

                        // Modification > (LapysJS > Evaluation Scope) > [Base Constructor Source]
                        LapysJS.evaluationScope[baseConstructorSource] = baseConstructor;

                        // Update > Base Constructor Source
                        baseConstructorSource = "LapysJS.evaluationScope[\"" + baseConstructorSource + "\"]"
                    }

                    // Return
                    return LDKC.Assertions.allows_class_Keyword ?
                        LDKF.eval(LDKF.stringPrototypeRemoveAll("\
                            class " + customErrorName + " extends " + baseConstructorSource + " {\n\
                                constructor(message, fileName, lineNumber) {\n\
                                    switch (LapysJS.evaluationScope.getArgumentsLength(arguments)) {\n\
                                        case +0: super(); break;\n\
                                        case 1: super(message); break;\n\
                                        case 2: super(message, fileName); break;\n\
                                        case 3: super(message, fileName, lineNumber)\n\
                                    }\n\
                                    \n\
                                    this.name = \"" + customErrorName + "\";\n\
                                    LapysJS.evaluationScope.errorCaptureStackTrace(this, " + customErrorName + ")\n\
                                }\n\
                            }\
                        ", "                            ", STRICT = null, STRICT = 28)) :
                        (function() {
                            // Definition > Custom Error
                            function CustomError(message, fileName, lineNumber) {
                                // Initialization > Error Instance
                                var errorInstance;

                                // Error Handling > Update > Error Instance
                                try { LDKF.functionPrototypeApply(LDKF.throwErrorByConstructor, LDKF, LDKF.arrayPrototypeConcatenate([baseConstructor], arguments)) }
                                catch (error) { errorInstance = error }

                                // Modification > Error Instance > Name
                                errorInstance.name = customErrorName;

                                // Update > Error Instance
                                use__setPrototypeOf__Method && LDKF.objectSetPrototypeOf(errorInstance, LDKF.objectGetPrototypeOf(this), STRICT = true);
                                LDKF.errorCaptureStackTrace(errorInstance, CustomError);

                                // Return
                                return errorInstance
                            };
                                // Prototype
                                var CustomErrorPrototype = LDKF.objectCreate(baseConstructor.prototype);

                            // Modification
                                // (Custom Error > Prototype) > Constructor
                                LDKF.objectDefineProperty(CustomErrorPrototype, "constructor", {configurable: true, enumerable: true, value: baseConstructor, writable: true});

                                // Custom Error > Prototype
                                CustomError.prototype = CustomErrorPrototype;

                            // Update > Custom Error
                            use__setPrototypeOf__Method && LDKF.objectSetPrototypeOf(CustomError, baseConstructor, STRICT = true);

                            // Return
                            return CustomError
                        })()
                };

                // Document > Prototype --- CHECKPOINT (Lapys)
                    // Create Element
                    LapysDevelopmentKit.Functions.documentPrototypeCreateElement = function documentPrototypeCreateElement(elementTagNames, DOCUMENT) { return LDKF.functionPrototypeCall(LDKO.documentPrototypeCreateElement, DOCUMENT || LDKC.Objects.document, elementTagNames) };

                    // Get Elements By Class Name
                    LapysDevelopmentKit.Functions.documentPrototypeGetElementsByClassName = function documentPrototypeGetElementsByClassName(classAttributeValue, DOCUMENT) { return LDKF.functionPrototypeCall(LDKO.documentPrototypeGetElementsByClassName, DOCUMENT || LDKC.Objects.document, classAttributeValue) };

                    // Get Elements By Tag Name
                    LapysDevelopmentKit.Functions.documentPrototypeGetElementsByTagName = function documentPrototypeGetElementsByTagName(tagName, DOCUMENT) { return LDKF.functionPrototypeCall(LDKO.documentPrototypeGetElementsByTagName, DOCUMENT || LDKC.Objects.document, tagName) };

                    // Query Selector
                    LapysDevelopmentKit.Functions.documentPrototypeQuerySelector = function documentPrototypeQuerySelector(cssSelectorSource, DOCUMENT) { return LDKF.functionPrototypeCall(LDKO.documentPrototypeQuerySelector, DOCUMENT || LDKC.Objects.document, cssSelectorSource) };

                    // Query Selector All
                    LapysDevelopmentKit.Functions.documentPrototypeQuerySelectorAll = function documentPrototypeQuerySelectorAll(cssSelectorSource, DOCUMENT) { return LDKF.functionPrototypeCall(LDKO.documentPrototypeQuerySelectorAll, DOCUMENT || LDKC.Objects.document, cssSelectorSource) };

                // Element > Prototype --- CHECKPOINT (Lapys)
                    // Get Attribute
                    LapysDevelopmentKit.Functions.elementPrototypeGetAttribute = function elementPrototypeGetAttribute(element, attributeName) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeGetAttribute, element, attributeName) };

                    // Get Attribute Node
                    LapysDevelopmentKit.Functions.elementPrototypeGetAttributeNode = function elementPrototypeGetAttributeNode(element, attributeName) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeGetAttributeNode, element, attributeName) };

                    // Has Attribute
                    LapysDevelopmentKit.Functions.elementPrototypeHasAttribute = function elementPrototypeHasAttribute(element, attributeName) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeHasAttribute, element, attributeName) };

                    // Has Attribute Node
                    LapysDevelopmentKit.Functions.elementPrototypeHasAttributeNode = function elementPrototypeHasAttributeNode(element, attributeName) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeHasAttributeNode, element, attributeName) };

                    // Remove Attribute
                    LapysDevelopmentKit.Functions.elementPrototypeRemoveAttribute = function elementPrototypeRemoveAttribute(element, attributeName) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeRemoveAttribute, element, attributeName) };

                    // Remove Attribute Node
                    LapysDevelopmentKit.Functions.elementPrototypeRemoveAttributeNode = function elementPrototypeRemoveAttributeNode(element, attributeName) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeRemoveAttributeNode, element, attributeName) };

                    // Set Attribute
                    LapysDevelopmentKit.Functions.elementPrototypeSetAttribute = function elementPrototypeSetAttribute(element, attributeName, attributeValue) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeSetAttribute, element, attributeName, attributeValue) };

                    // Set Attribute Node
                    LapysDevelopmentKit.Functions.elementPrototypeSetAttributeNode = function elementPrototypeSetAttributeNode(element, attributeName, attributeValue) { return LDKF.functionPrototypeCall(LDKO.elementPrototypeSetAttributeNode, element, attributeName, attributeValue) };


                // Error
                    // Capture Stack Trace --- WARN (Lapys) -> This method does nothing if some native features are unavailable.
                    LapysDevelopmentKit.Functions.errorCaptureStackTrace = function errorCaptureStackTrace(error, localContext) { LDKF.isFunction(LDKO.errorCaptureStackTrace, STRICT = true) && LDKO.errorCaptureStackTrace(error, localContext) };

                    // Prototype
                        // Get Message
                        LapysDevelopmentKit.Functions.errorPrototypeGetMessage = function errorPrototypeGetMessage(error) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(error, "message")) return LDKF.toString(LDKF.objectPrototypeGetProperty(error, "message", STRICT = true) || "");
                            else if (LDKF.objectPrototypeHasProperty(error, "description")) return LDKF.toString(LDKF.objectPrototypeGetProperty(error, "description", STRICT = true) || "");
                            else return null
                        };

                        // Set Message
                        LapysDevelopmentKit.Functions.errorPrototypeSetMessage = function errorPrototypeSetMessage(error, message) {
                            // Initialization > Former Message
                            var formerMessage = LDKF.errorPrototypeGetMessage(error);

                            // Logic
                            if (LDKF.objectPrototypeHasProperty(error, "description")) {
                                // Modification > Error > Description
                                LDKF.objectPrototypeSetProperty(error, "description", message, STRICT = true);
                                (formerMessage === LDKF.errorPrototypeGetMessage(error)) || LDKF.objectDefineProperty(error, "description", {configurable: true, enumerable: true, value: message, writable: true})
                            }

                            if (LDKF.objectPrototypeHasProperty(error, "message")) {
                                // Modification > Error > Message
                                LDKF.objectPrototypeSetProperty(error, "message", message, STRICT = true);
                                (formerMessage === LDKF.errorPrototypeGetMessage(error)) || LDKF.objectDefineProperty(error, "message", {configurable: true, enumerable: true, value: message, writable: true})
                            }
                        };

                // Evaluate
                LapysDevelopmentKit.Functions.eval = function evaluate(source, STRICT_EVALUATION) { STRICT_EVALUATION || (source = "(function() { return " + source + " })()"); return LDKF.functionPrototypeCall(LDKO.eval, GLOBAL, source) };

                // Function
                    // Prototype
                        /* Apply
                                --- WARN (Lapys) ->
                                    - While the `Function.prototype.apply` method is not referenced within the `LapysDevelopmentKit` namespace, it will defer to the Routine`s mutable `apply` method.
                                    - Unfortunately, the `Function.prototype.apply.apply` method is mutable and not spoofing-proof.
                        */
                        LapysDevelopmentKit.Functions.functionPrototypeApply = function functionPrototypeApply(routine, target, argumentsObject) { return LDKF.isVoid(LDKO.functionPrototypeApply) ? routine.apply(target, argumentsObject) : LDKO.functionPrototypeApply.apply(routine, [target, argumentsObject]) };

                        // Body [Source]
                        LapysDevelopmentKit.Functions.functionPrototypeBody = function functionPrototypeBody(routine, SOURCE_STRING, REMOVE_DELIMITERS, TRIM_SOURCE) {
                            // Initialization > (Function Body Source (Index), Source (Length))
                            var functionBodySource = "", functionBodySourceIndex = -1,
                                source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine),
                                sourceLength = LDKF.stringPrototypeLength(source);

                            // Logic
                            if (LDKF.functionPrototypeIsArrow(routine, STRICT = source) && LDKF.stringPrototypeLast(source, STRICT = sourceLength) != '}')
                                // Update > Function Body Source Index
                                functionBodySourceIndex = LDKF.stringPrototypeLength(LDKF.functionPrototypeHead(routine, STRICT = source)) + (LDKF.stringPrototypeFirst(source) == '(');

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

                            // Initialization > Function Body Source Length
                            var functionBodySourceLength = sourceLength - functionBodySourceIndex;

                            // Loop > Update > Function Head Source
                            while (functionBodySourceIndex ^ sourceLength) { functionBodySource += LDKF.stringPrototypeCharacterAt(source, functionBodySourceIndex); functionBodySourceIndex += 1 }

                            // Logic
                            if (REMOVE_DELIMITERS) {
                                // Initialization > Function Body ((Closing, Opening) Delimiter, Source Trimmed (Length))
                                var functionBodyClosingDelimiter = '}', functionBodyClosingDelimiterLength = 1,
                                    functionBodyOpeningDelimiter = '{', functionBodyOpeningDelimiterLength = 1,
                                    functionBodySourceTrimmed = LDKF.stringPrototypeTrim(functionBodySource),
                                    functionBodySourceTrimmedLength = LDKF.stringPrototypeLength(functionBodySourceTrimmed);

                                // Logic
                                if (
                                    LDKF.stringPrototypeBeginsWith(functionBodySourceTrimmed, functionBodyOpeningDelimiter, STRICT = functionBodySourceTrimmedLength, STRICT = functionBodyOpeningDelimiterLength) &&
                                    LDKF.stringPrototypeEndsWith(functionBodySourceTrimmed, functionBodyClosingDelimiter, STRICT = functionBodySourceTrimmedLength, STRICT = functionBodyClosingDelimiterLength)
                                ) {
                                    // Initialization > Function Body Source Opening Delimiter Index
                                    var functionBodySourceOpeningDelimiterIndex = LDKF.stringPrototypeIndexFromBack(functionBodySource, '{', STRICT = functionBodySourceLength, STRICT = 1);

                                    // Update > Function Body Source --- MINIFY (Lapys)
                                    functionBodySource = LDKF.stringPrototypeCutLeft(functionBodySource, functionBodySourceOpeningDelimiterIndex + functionBodyOpeningDelimiterLength, STRICT = functionBodySourceLength);

                                    // Update > Function Body Source Length
                                    functionBodySourceLength -= functionBodySourceOpeningDelimiterIndex + functionBodyOpeningDelimiterLength;

                                    // Update > Function Body Source --- MINIFY (Lapys)
                                    functionBodySource = LDKF.stringPrototypeCutRight(functionBodySource, functionBodySourceLength - ((LDKF.stringPrototypeIndexFromFront(functionBodySource, '}', STRICT = functionBodySourceLength, STRICT = functionBodyClosingDelimiterLength) - 1) + functionBodyClosingDelimiterLength), STRICT = functionBodySourceLength)
                                }
                            }

                            // Update > Function Body Source
                            TRIM_SOURCE && (functionBodySource = LDKF.stringPrototypeTrim(functionBodySource));

                            // Return
                            return functionBodySource
                        };

                        // Call --- NOTE (Lapys) -> Ironically does not utilize the `Function.prototype.call` method.
                        LapysDevelopmentKit.Functions.functionPrototypeCall = function functionPrototypeCall(routine, target, argument) {
                            // Initialization > (Arguments, Iterator)
                            var args = [], iterator = LDKF.getArgumentsLength(arguments) - 2;

                            // Logic > Loop > Update > (Iterator, Arguments)
                            if (LDKF.numberPrototypeIsPositive(iterator)) while (iterator) { iterator -= 1; args[iterator] = arguments[iterator + 2] }

                            // Return
                            return LDKF.functionPrototypeApply(routine, target, args)
                        };

                        // Has Empty Body
                        LapysDevelopmentKit.Functions.functionPrototypeHasEmptyBody = function functionPrototypeHasEmptyBody(routine, SOURCE_STRING, IGNORE_WHITE_SPACES) {
                            // Constant > Function Body Source
                            var functionBodySource = LDKF.functionPrototypeBody(routine, STRICT = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine), STRICT = true, STRICT = true);

                            // Return
                            return IGNORE_WHITE_SPACES ?
                                !LDKF.stringPrototypeTrim(LDKF.stringPrototypeCut(functionBodySource, 1), [' ', '\n']) :
                                !functionBodySource
                        };

                        // Has Standard Source
                        LapysDevelopmentKit.Functions.functionPrototypeHasStandardSource = function functionPrototypeHasStandardSource(routine, SOURCE_STRING) {
                            // Initialization > Source
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Return --- NOTE (Lapys) -> Test all function types and assert if the Routine conforms to any type.
                            return LDKF.functionPrototypeIsArrow(routine, STRICT = source) ||
                                LDKF.functionPrototypeIsAsynchronousDefault(routine, STRICT = source) ||
                                LDKF.functionPrototypeIsAsynchronousGenerator(routine, STRICT = source) ||
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
                                // Initialization > Begins With Keyword
                                var beginsWithKeyword = LDKF.functionPrototypeSourceBeginsWith_async_Keyword(routine, STRICT = source) || LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source);

                                // Logic
                                if (beginsWithKeyword || LDKF.stringPrototypeFirst(source) == '(') {
                                    // Initialization > Iterator
                                    var hasIndexedFunctionSourceHead = false, iterator = +0;

                                    // Loop
                                    LDKF.iterateJavaScriptSource(source, function(character, index) {
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
                                        LDKF.iterateJavaScriptSource(source, function(character, index) {
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
                            LDKF.iterateJavaScriptSource(source, function(character, index) { (character == '=' && LDKF.stringPrototypeCharacterAt(source, index + 1) == '>') && (isArrow = true); isArrow && this.stop() }, STRICT = true, STRICT = false);

                            // Return
                            return isArrow
                        };

                        // Is Asynchronous Default
                        LapysDevelopmentKit.Functions.functionPrototypeIsAsynchronousDefault = function functionPrototypeIsAsynchronousDefault(routine, SOURCE_STRING) {
                            // Initialization > (Is Default, Source)
                            var isDefault = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.functionPrototypeSourceBeginsWith_async_Keyword(routine, STRICT = source) &&
                            LDKF.iterateJavaScriptSource(source, function(character) { switch (character) { case '(': isDefault = true; this.stop(); break; case '*': isDefault = false; this.stop() } }, STRICT = true, STRICT = true, STRICT = 8);

                            // Return
                            return isDefault
                        };

                        // Is Asynchronous Generator
                        LapysDevelopmentKit.Functions.functionPrototypeIsAsynchronousGenerator = function functionPrototypeIsAsynchronousGenerator(routine, SOURCE_STRING) {
                            // Initialization > (Is Generator, Source)
                            var isGenerator = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.functionPrototypeSourceBeginsWith_async_Keyword(routine, STRICT = source) &&
                            LDKF.iterateJavaScriptSource(source, function(character) { if (character == '*') { isGenerator = true; this.stop() } }, STRICT = true, STRICT = false, STRICT = 8);

                            // Return
                            return isGenerator
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
                                LDKF.iterateJavaScriptSource(source, function(character, index) {
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
                            var isDefault = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source) &&
                            LDKF.iterateJavaScriptSource(source, function(character) {
                                switch (character) {
                                    case '(': isDefault = true; this.stop(); break;
                                    case '*': isDefault = false; this.stop()
                                }
                            }, STRICT = true, STRICT = true, STRICT = 8);

                            // Return
                            return isDefault
                        };

                        // Is Generator --- NOTE (Lapys) -> The generator should not be asynchronous.
                        LapysDevelopmentKit.Functions.functionPrototypeIsGenerator = function functionPrototypeIsGenerator(routine, SOURCE_STRING) {
                            // Initialization > (Is Generator, Source)
                            var isGenerator = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Loop
                            LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source) &&
                            LDKF.iterateJavaScriptSource(source, function(character) { if (character == '*') { isGenerator = true; this.stop() } }, STRICT = true, STRICT = false, STRICT = 8);

                            // Return
                            return isGenerator
                        };

                        // Is Native
                        LapysDevelopmentKit.Functions.functionPrototypeIsNative = function functionPrototypeIsNative(routine, SOURCE_STRING) {
                            // Initialization > (Is Native, Source)
                            var isNative = false, source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Logic
                            if (LDKF.functionPrototypeHasStandardSource(routine, STRICT = source)) {
                                // Initialization > (Lookup Syntaxes) (Length(s))
                                var lookupSyntaxes = LDKC.Keywords.nativeFunctionCodes,
                                    lookupSyntaxesLengths = [18, 13], // NOTE (Lapys) -> Basically, mapping `LapysDevelopmentKit.Constants.Keywords.nativeFunctionCodes` to its elements' lengths.
                                    lookupSyntaxesLength = 2;

                                // Loop
                                LDKF.iterateJavaScriptSource(source, function(character, index) {
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
                                }, STRICT = {comments: true, delimiters: {arrays: false, objects: true, strings: true, syntax: true}}, STRICT = true)
                            }

                            else
                                // Update > Is Native
                                isNative = true;

                            // Return
                            return isNative
                        };

                        // Is Niladic
                        LapysDevelopmentKit.Functions.functionPrototypeIsNiladic = function functionPrototypeIsNiladic(routine, SOURCE_STRING) { return !LDKF.stringPrototypeTrim(LDKF.functionPrototypeParametersSource(routine, STRICT = SOURCE_STRING)) };

                        // Is User-Defined
                        LapysDevelopmentKit.Functions.functionPrototypeIsUserDefined = function functionPrototypeIsUserDefined(routine, SOURCE_STRING) { var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine); return !LDKF.functionPrototypeIsNative(routine, STRICT = source) };

                        // Is Variadic
                        LapysDevelopmentKit.Functions.functionPrototypeIsVariadic = function functionPrototypeIsVariadic(routine, SOURCE_STRING) { return !LDKF.functionPrototypeIsNiladic(routine, STRICT = SOURCE_STRING) };

                        // Measure
                        LapysDevelopmentKit.Functions.functionPrototypeMeasure = function functionPrototypeMeasure(routine) {
                            // Initialization > Timestamp
                            var timestamp = LDKC.Objects.clock.timestamp();

                            // [Routine]
                            routine();

                            // Return --- NOTE (Lapys) -> Under the assumption that later received timestamps are accurate and a greater value than former.
                            return LDKC.Objects.clock.timestamp() - timestamp
                        };

                        // Name
                        LapysDevelopmentKit.Functions.functionPrototypeName = function functionPrototypeName(routine, SOURCE_STRING) {
                            // Initialization > (Source, Function (Head Source, Name), Begins With Keyword)
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine),
                                functionHeadSource = LDKF.functionPrototypeHead(routine, STRICT = source),
                                functionName = "",
                                beginsWithKeyword = LDKF.functionPrototypeSourceBeginsWith_async_Keyword(routine, STRICT = source) || LDKF.functionPrototypeSourceBeginsWith_function_Keyword(routine, STRICT = source);

                            // Logic
                            if (beginsWithKeyword)
                                // Loop
                                LDKF.iterateJavaScriptSource(source, function(character, index) {
                                    // Target > Stop; Update > Function Name
                                    character == '(' ? this.stop() : (LDKF.stringPrototypeIsVariableCharacter(character) && (functionName += character))
                                }, STRICT = true, STRICT = true, STRICT = LDKF.stringPrototypeIndexFromBack(source, "function", STRICT = null, STRICT = 8) + 8);

                            else if (LDKF.functionPrototypeIsClass(routine, STRICT = source)) {
                                // Initialization > Has Indexed Function Source Name
                                var hasIndexedFunctionSourceName = false;

                                // Loop
                                LDKF.iterateJavaScriptSource(source, function(character, index) {
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
                                }, STRICT = true, STRICT = true, STRICT = 5)
                            }

                            // Return
                            return functionName
                        };

                        // Parameters
                        LapysDevelopmentKit.Functions.functionPrototypeParameters = function functionPrototypeParameters(routine, SOURCE_STRING, EVALUATE_PARAMETER_VALUES) {
                            // Initialization > (Parameters (Iterator), Source, Function Parameters Source)
                            var parameters = new LDKD.FunctionParameterList, parametersIterator = +0,
                                source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine),
                                functionParametersSource = LDKF.functionPrototypeParametersSource(routine, STRICT = source);

                            // Loop
                            functionParametersSource && LDKF.iterateJavaScriptSource(functionParametersSource, function(character, index) {
                                // Logic > Update > (Has Multiple Parameters, Parameters (Iterator))
                                if (character == ',') { parameters[parametersIterator] = index; parametersIterator += 1 }
                            }, STRICT = true).then(function(length) {
                                // Update > Parameters (Iterator)
                                parameters[parametersIterator] = length; parametersIterator += 1
                            });

                            // Modification > Parameters > Length
                            parameters.length = parametersIterator;

                            // Loop
                            while (parametersIterator) {
                                // Update > Parameters Iterator
                                parametersIterator -= 1;

                                // Initialization > (Former Parameter Iterator, Is Destructured Parameter Source, Parameter (Iterator, Source (Length)))
                                var formerParameterIterator = parametersIterator ? parameters[parametersIterator - 1] : +0,
                                    isDestructuredParameterSource = false,
                                    parameterIterator = parameters[parametersIterator],
                                    parameterSource = "",
                                    parameterSourceLength = parameterIterator - formerParameterIterator;

                                // Loop > Update > Parameter Source
                                while (parameterIterator != formerParameterIterator + !!parametersIterator)
                                    parameterSource = LDKF.stringPrototypeCharacterAt(functionParametersSource, parameterIterator -= 1) + parameterSource;

                                // Initialization > ((Has Indexed) Parameter (Name, Value) Source, Parameter Value Source Iterator)
                                var hasIndexedParameterNameSource = false, parameterNameSource = "",
                                    hasIndexedParameterValueSource = false, parameterValueSource = "", parameterValueSourceIterator = +0;

                                // Loop
                                LDKF.iterateJavaScriptSource(parameterSource, function(character, index) {
                                    // Logic
                                    if (hasIndexedParameterNameSource) {
                                        // Logic > (Update > Parameter Value Source Iterator; Target > Stop)
                                        if (character == '=') { parameterValueSourceIterator = index; this.stop() }
                                    }

                                    else if (character == '.' && LDKF.stringPrototypeCharacterAt(parameterSource, index + 1) == '.' && LDKF.stringPrototypeCharacterAt(parameterSource, index + 2) == '.') {
                                        // Loop
                                        LDKF.iterateJavaScriptSource(parameterSource, function(character) {
                                            // Logic > (Update > Is Destructured Parameter Source; Target > Stop)
                                            if (character == '[') { isDestructuredParameterSource = true; this.stop() }
                                        }, STRICT = {comments: true}, STRICT = false, STRICT = index + 2, STRICT = true);

                                        // Logic
                                        if (isDestructuredParameterSource) {
                                            // Update > (Parameter Name Source, Parameter Value Source Iterator)
                                            parameterNameSource = parameterSource;
                                            parameterValueSourceIterator = parameterSourceLength - 1;

                                            // Target > Stop
                                            this.stop()
                                        }

                                        else {
                                            // (Update > Parameter Name Source; Target > Jump)
                                            parameterNameSource += "...";
                                            this.jump(2)
                                        }
                                    }

                                    else if (character == ' ' || character == '\n' || LDKF.stringPrototypeIsVariableCharacter(character))
                                        // Update > Parameter Name Source
                                        parameterNameSource += character;

                                    else
                                        // Update > Has Indexed Parameter Name Source
                                        hasIndexedParameterNameSource = true
                                }, STRICT = true);

                                // Update > Parameter Name Source
                                parameterNameSource = LDKF.stringPrototypeTrim(LDKF.removeFromSource(parameterNameSource, {comments: true}));

                                // Loop
                                LDKF.iterateJavaScriptSource(parameterSource, function(character, index) {
                                    // Logic
                                    if (hasIndexedParameterValueSource) {
                                        // Update > Parameter Value Source Iterator
                                        parameterValueSourceIterator = index;

                                        // Loop
                                        while (parameterValueSourceIterator ^ parameterSourceLength) {
                                            // Initialization > Character
                                            var character = LDKF.stringPrototypeCharacterAt(parameterSource, parameterValueSourceIterator += 1);

                                            // Update > Parameter Value Source
                                            character ? parameterValueSource += character : parameterValueSourceIterator = parameterSourceLength
                                        }

                                        // Target > Stop
                                        this.stop()
                                    }

                                    else
                                        // Update > Has Indexed Parameter Value Source
                                        hasIndexedParameterValueSource = character == '='
                                }, STRICT = true, STRICT = false, STRICT = parameterValueSourceIterator, STRICT = true);

                                // Initialization > Parameter
                                var parameter = new LDKD.FunctionParameter(parameterSource);

                                // Modification > Parameter > (Name, Type)
                                parameter.name = parameterNameSource;
                                parameter.type = LDKF.stringPrototypeBeginsWith(parameterNameSource, "...") ? (isDestructuredParameterSource ? "destructured" : "rest") : "default";
                                parameter.valueSource = parameterValueSource;

                                // Parameter > Evaluate Value Source
                                EVALUATE_PARAMETER_VALUES && parameter.evaluateValueSource(STRICT = true);

                                // Update > Parameters
                                parameters[parametersIterator] = parameter
                            }

                            // Return
                            return parameters
                        };

                        // Parameters Length --- NOTE (Lapys) -> Unfortunately, the `Function.prototype.length` property does not defer the length toward non-default parameters.
                        LapysDevelopmentKit.Functions.functionPrototypeParametersLength = function functionPrototypeParametersLength(routine, SOURCE_STRING) { return LDKF.functionPrototypeParameters(routine, SOURCE_STRING).length || +0 };

                        // Parameters Source --- UPDATE REQUIRED (Lapys) -> Stress-test eventually.
                        LapysDevelopmentKit.Functions.functionPrototypeParametersSource = function functionPrototypeParametersSource(routine, SOURCE_STRING) {
                            // Initialization > (Function Parameters (Source), Iterator)
                            var functionParametersSource = "",
                                iterator = +0,
                                source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Logic
                            if (LDKF.functionPrototypeIsClass(routine, STRICT = source)) {
                                // Initialization > (Function Body Source, Lookup Syntax (Length))
                                var functionBodySource = LDKF.functionPrototypeBody(routine, STRICT = source),
                                    lookupSyntax = ['c', 'o', 'n', 's', 't', 'r', 'u', 'c', 't', 'o', 'r'],
                                    lookupSyntaxLength = 11;

                                // Loop
                                LDKF.iterateJavaScriptSource(functionBodySource, function(character, index) {
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
                                                LDKF.iterateJavaScriptSource(functionBodySource, function(character, index) {
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
                                    LDKF.iterateJavaScriptSource(functionHeadSource, function(character, index) {
                                        // Logic > ...
                                        if (character == '>' && LDKF.stringPrototypeCharacterAt(functionHeadSource, index - 1) == '=') { iterator = index - 2; this.stop() }
                                    }, STRICT = true, STRICT = true);

                                else {
                                    // Initialization > Syntax Group Depth
                                    var syntaxGroupDepth = +0;

                                    // Loop
                                    LDKF.iterateJavaScriptSource(functionHeadSource, function(character, index) {
                                        // Logic > ...
                                        if (character == '(') { functionHeadSourceIndex = index; iterator = index - 1; this.stop() }
                                    }, STRICT = true, STRICT = true);

                                    LDKF.iterateJavaScriptSource(functionHeadSource, function(character, index) {
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

                        // Source Begins With `async` Keyword
                        LapysDevelopmentKit.Functions.functionPrototypeSourceBeginsWith_async_Keyword = function functionPrototypeSourceBeginsWith_async_Keyword(routine, SOURCE_STRING) {
                            // Initialization > Source
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Return
                            return LDKF.stringPrototypeFirst(source) == 'a' && LDKF.stringPrototypeCharacterAt(source, 1) == 's' && LDKF.stringPrototypeCharacterAt(source, 2) == 'y' && LDKF.stringPrototypeCharacterAt(source, 3) == 'n' && LDKF.stringPrototypeCharacterAt(source, 4) == 'c'
                        };

                        // Source Begins With `function` Keyword
                        LapysDevelopmentKit.Functions.functionPrototypeSourceBeginsWith_function_Keyword = function functionPrototypeSourceBeginsWith_function_Keyword(routine, SOURCE_STRING) {
                            // Initialization > Source
                            var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine);

                            // Return
                            return LDKF.stringPrototypeFirst(source) == 'f' && LDKF.stringPrototypeCharacterAt(source, 1) == 'u' && LDKF.stringPrototypeCharacterAt(source, 2) == 'n' && LDKF.stringPrototypeCharacterAt(source, 3) == 'c' && LDKF.stringPrototypeCharacterAt(source, 4) == 't' && LDKF.stringPrototypeCharacterAt(source, 5) == 'i' && LDKF.stringPrototypeCharacterAt(source, 6) == 'o' && LDKF.stringPrototypeCharacterAt(source, 7) == 'n'
                        };

                        /* Test
                            --- NOTE (Lapys) -> Silently fail any possible exceptions thrown from calling a Routine.
                                - Literally an excuse for an inline `try, catch` statement.
                        */
                        LapysDevelopmentKit.Functions.functionPrototypeTest = function functionPrototypeTest(routine) { try { return routine() } catch (error) {} };

                        // To Source String
                        LapysDevelopmentKit.Functions.functionPrototypeToSourceString = function functionPrototypeToSourceString(routine) {
                            // Logic
                            if (LDKF.isNull(routine))
                                // Return
                                return "";

                            else {
                                // Initialization > Source (Length)
                                var source = LDKF.stringPrototypeTrim(LDKF.toString(routine)), sourceLength = LDKF.stringPrototypeLength(source);

                                // Update > Source
                                (LDKF.stringPrototypeFirst(source) == '(' && LDKF.stringPrototypeLast(source, STRICT = sourceLength) == ')') && (source = LDKF.stringPrototypeCut(source, 1, STRICT = sourceLength));

                                // Return
                                return source
                            }
                        };

                // Get DOM Nodes
                LapysDevelopmentKit.Functions.getDOMNodes = function getDOMNodes(accessor, identifier, modifier, DOCUMENT) {
                    // Initialization > (Length, Document, List (Length), (Nodes) (Iterator, Length))
                    var length = LDKF.getArgumentsLength(arguments),
                        document = arguments[length - 1],
                        list = new LDKD.NodeList, listLength = +0,
                        nodes = null, nodesIterator = null, nodesLength = null;

                    // Modification > List > Length
                    LDKF.objectPrototypeSetProperty(list, "length", listLength, STRICT = true);

                    // Update > (Identifier, Modifier)
                    identifier = LDKF.isArrayLike(identifier) ? LDKF.toArray(identifier) : [identifier];
                    modifier = length > 2 ? (LDKF.isArrayLike(modifier) ? LDKF.toArray(modifier) : [modifier]) : [];

                    // Initialization > Identifier (Length, Iterator)
                    var identifierLength = LDKF.arrayLikePrototypeLength(identifier),
                        identifierIterator = identifierLength,
                        modifierLength = length > 2 ? LDKF.arrayLikePrototypeLength(modifier) : +0;

                    // Loop
                    while (identifierIterator) {
                        // Initialization > Identifier Element
                        var identifierElement = LDKF.arrayLikePrototypeElementAt(identifier, identifierLength - (identifierIterator -= 1) - 1);

                        // Logic --- NOTE (Lapys) -> Do nothing if the specified identifier is falsy (with the exception of strings).
                        if (identifierElement || LDKF.isString(identifierElement)) {
                            // Update > (Nodes) (Length, Iterator)
                            nodes = LDKF.functionPrototypeCall(accessor, LDKF, LDKF.toString(identifierElement), STRICT = document);
                            nodesLength = LDKF.arrayLikePrototypeLength(nodes);
                            nodesIterator = nodesLength;

                            // Loop > Update > (Nodes Iterator, List)
                            while (nodesIterator) { nodesIterator -= 1; LDKF.objectPrototypeSetProperty(list, LDKF.toString(listLength + nodesIterator), LDKF.arrayLikePrototypeElementAt(nodes, nodesIterator), STRICT = true) }

                            // Modification > List > Length
                            LDKF.objectPrototypeSetProperty(list, "length", listLength += nodesLength, STRICT = true)
                        }
                    }

                    // Logic
                    if (modifierLength) {
                        // Function > Modify
                        function modify(modifier) {
                            // Logic
                            if (modifier == "all") { LDKF.arrayLikePrototypeLock(list); return list }
                            else if (modifier == "first") return listLength ? LDKF.objectPrototypeGetProperty(list, '0', STRICT = true) : null;
                            else if (modifier == "last") return listLength ? LDKF.objectPrototypeGetProperty(list, LDKF.toString(listLength - 1), STRICT = true) : null;
                            else if (LDKF.isPositiveIntegerNumber(modifier)) return modifier < listLength ? LDKF.objectPrototypeGetProperty(list, LDKF.toString(modifier), STRICT = true) : null;
                            else LDKF.throwTypeError("Invalid modifier: `" + LDKF.toPrettyString(modifier) + "`")
                        }

                        // Logic
                        if (modifierLength == 1)
                            // Return
                            return modify(LDKF.arrayLikePrototypeFirst(modifier));

                        else {
                            // Initialization > (Modifications (Length), Modified List (Length), Modifier Iterator)
                            var modifications = [], modificationsLength = +0,
                                modifiedList = new LDKD.NodeList, modifiedListLength = +0,
                                modifierIterator = modifierLength;

                            // Modification > Modified List > Length
                            LDKF.objectPrototypeSetProperty(modifiedList, "length", modifiedListLength, STRICT = true);

                            // Loop
                            while (modifierIterator) {
                                // Update > Modifications (Length)
                                modifications[modificationsLength] = modify(LDKF.arrayLikePrototypeElementAt(modifier, modifierLength - (modifierIterator -= 1) - 1));
                                modificationsLength += 1
                            }

                            // Initialization > Modifications Iterator
                            var modificationsIterator = modificationsLength;

                            // Loop
                            while (modificationsIterator) {
                                // Initialization > Modification
                                var modification = modifications[modificationsLength - (modificationsIterator -= 1) - 1];

                                // Logic
                                if (LDKF.isArrayLike(modification)) {
                                    // Initialization > Modification (Length, Iterator)
                                    var modificationLength = LDKF.arrayLikePrototypeLength(modification),
                                        modificationIterator = modificationLength;

                                    // Loop > Update > (Modification Iterator, Modified List)
                                    while (modificationIterator) { modificationIterator -= 1; LDKF.objectPrototypeSetProperty(modifiedList, LDKF.toString(modifiedListLength + modificationIterator), LDKF.arrayLikePrototypeElementAt(modification, modificationIterator), STRICT = true); }

                                    // Modification > Modified List > Length
                                    LDKF.objectPrototypeSetProperty(modifiedList, "length", modifiedListLength += modificationLength, STRICT = true)
                                }

                                else {
                                    // Update > Modified List
                                    LDKF.objectPrototypeSetProperty(modifiedList, LDKF.toString(modifiedListLength), modification, STRICT = true);
                                    LDKF.objectPrototypeSetProperty(modifiedList, "length", modifiedListLength += 1, STRICT = true)
                                }
                            }

                            // Update > Modified List
                            LDKF.arrayLikePrototypeLock(modifiedList);

                            // Return
                            return modifiedList
                        }
                    }

                    else if (listLength == 1)
                        // Return
                        return LDKF.objectPrototypeGetProperty(list, '0', STRICT = true);

                    else if (listLength) {
                        // Update > List
                        LDKF.arrayLikePrototypeLock(list);

                        // Return
                        return list
                    }

                    else
                        // Return
                        return null
                };

                // Get HTML Elements By Class Attribute [Value]
                LapysDevelopmentKit.Functions.getHTMLElementsByClassAttribute = function getHTMLElementsByClassAttribute(classAttributeValue, modifier, DOCUMENT) {
                    // Return
                    return LDKF.getDOMNodes(LDKF.documentPrototypeGetElementsByClassName, classAttributeValue, LDKF.getArgumentsLength(arguments) > 1 ? modifier : ANY, STRICT = DOCUMENT)
                };

                // Get HTML Elements By Tag Name
                LapysDevelopmentKit.Functions.getHTMLElementsByTagName = function getHTMLElementsByTagName(tagName, modifier, DOCUMENT) {
                    // Return
                    return LDKF.getDOMNodes(LDKF.documentPrototypeGetElementsByTagName, tagName, LDKF.getArgumentsLength(arguments) > 1 ? modifier : ANY, STRICT = DOCUMENT);
                };

                // Get Nodes By CSS Selector [Source]
                LapysDevelopmentKit.Functions.getNodesByCSSSelector = function getNodesByCSSSelector(cssSelectorSource, modifier, DOCUMENT) {
                    // Return
                    return !modifier || modifier == "first" ?
                        LDKF.documentPrototypeQuerySelector(cssSelectorSource, STRICT = DOCUMENT) || null :
                        LDKF.getDOMNodes(LDKF.documentPrototypeQuerySelectorAll, cssSelectorSource, LDKF.getArgumentsLength(arguments) > 1 ? modifier : ANY, STRICT = DOCUMENT)
                };

                // Get Property By Name --- WARN (Lapys) -> Defer to the `LapysDevelopmentKit.Functions.objectPrototypeGetProperty` method instead.
                LapysDevelopmentKit.Functions.getPropertyByName = function getPropertyByName(object, propertyName) { return object ? object[propertyName] : undefined };

                // HTML Collection > Prototype
                    // Item
                    LapysDevelopmentKit.Functions.htmlCollectionPrototypeItem = function htmlCollectionPrototypeItem(htmlCollection, index) { return LDKF.functionPrototypeCall(LDKO.htmlCollectionPrototypeItem, htmlCollection, index) };

                    // Length
                    LapysDevelopmentKit.Functions.htmlCollectionPrototypeLength = function htmlCollectionPrototypeLength(htmlCollection) { return LDKF.functionPrototypeCall(LDKO.htmlCollectionPrototypeLengthAccessor, htmlCollection) };

                // HTML Element > Prototype
                    // Blur --- CHECKPOINT (Lapys)
                    // Click --- CHECKPOINT (Lapys)
                    // Focus --- CHECKPOINT (Lapys)

                // Is Array
                LapysDevelopmentKit.Functions.isArray = function isArray(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.array, STRICT = true) && LDKF.isNull(LDKF.objectGetPrototypeOf(LDKF.objectGetPrototypeOf(LDKF.objectGetPrototypeOf(argument, STRICT = true), STRICT = true), STRICT = true)) };

                // Is Array-Like --- NOTE (Lapys) -> Array-like object created by LapysJS or provided by the current environment.
                LapysDevelopmentKit.Functions.isArrayLike = function isArrayLike(argument) {
                    // Return
                    return LDKF.objectPrototypeInstanceOf(argument, LDKD.FunctionParameterList) ||
                        LDKF.objectPrototypeInstanceOf(argument, LDKD.NodeList) ||
                        LDKF.objectPrototypeIsOfConstructor(argument, LDKO.array, STRICT = true) ||
                        LDKF.isNativeArrayLike(argument)
                };

                // Is Attribute
                LapysDevelopmentKit.Functions.isAttr = function isAttr(argument) { return LDKF.objectPrototypeConstructor(argument) === LDKO.attr };

                // Is Audio Parameter Map
                LapysDevelopmentKit.Functions.isAudioParamMap = function isAudioParamMap(argument) { return LDKF.objectPrototypeConstructor(argument) === LDKO.audioParamMap };

                // Is Boolean --- NOTE (Lapys) -> Variants of this method are available for free private use.
                LapysDevelopmentKit.Functions.isBoolean = function isBoolean(argument) { return typeof argument == "boolean" };
                    // Is Negative Boolean
                    LapysDevelopmentKit.Functions.isNegativeBoolean = function isNegativeBoolean(argument) { return LDKF.isBoolean(argument) && argument === false };

                    // Is Positive Boolean
                    LapysDevelopmentKit.Functions.isPositiveBoolean = function isPositiveBoolean(argument) { return LDKF.isBoolean(argument) && argument === true };

                // Is Constructible
                LapysDevelopmentKit.Functions.isConstructible = function isConstructible(argument) { return !LDKF.isNonConstructible(argument) };

                // Is CSS Style Declaration-Like
                LapysDevelopmentKit.Functions.isCSSStyleDeclarationLike = function isCSSStyleDeclarationLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.cssStyleDeclaration) || (!LDKC.Assertions.has_CSSStyleDeclaration_Constructor && LDKT.isCSSStyleDeclarationLike(argument)) };

                // Is Document-Like
                LapysDevelopmentKit.Functions.isDocumentLike = function isDocumentLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.document, STRICT = true) || (!LDKC.Assertions.has_Document_Constructor && LDKT.isDocumentLike(argument)) };

                // Is Element-Like
                LapysDevelopmentKit.Functions.isElementLike = function isElementLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.element) };

                // Is Error-Like
                LapysDevelopmentKit.Functions.isErrorLike = function isErrorLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.error, STRICT = true) };

                // Is Element-Like
                LapysDevelopmentKit.Functions.isElementLike = function isElementLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.element) || (!LDKC.Assertions.has_Element_Constructor && LDKT.isElementLike(argument)) };

                // Is Event-Like
                LapysDevelopmentKit.Functions.isEventLike = function isEventLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.event) || (!LDKC.Assertions.has_Event_Constructor && LDKT.isEventLike(argument)) };

                // Is Event Target-Like
                LapysDevelopmentKit.Functions.isEventTargetLike = function isEventTargetLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.eventTarget) };

                // Is DOM Implementation-Like
                LapysDevelopmentKit.Functions.isDOMImplementationLike = function isDOMImplementationLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.domImplementation) || (!LDKC.Assertions.has_DOMImplementation_Constructor && LDKT.isDOMImplementationLike(argument)) };

                // Is Function --- WARN (Lapys) -> All variations of this method must not be deferred to.
                LapysDevelopmentKit.Functions.isFunction = function isFunction(argument, EVALUATE_PRIMITIVE_TYPE_ONLY) {
                    // Logic
                    if (typeof argument == "function")
                        // Return
                        return true;

                    else if (!EVALUATE_PRIMITIVE_TYPE_ONLY && LDKT.canParseStrings()) {
                        // Initialization > Argument Is Function
                        var argumentIsFunction = false;

                        // Logic
                        if (LDKC.Assertions.has_ActiveXObject_Constructor)
                        switch (LDKC.Assertions.activeXObjectType) {
                            case "function": case "undefined":
                                // Logic > Update > Argument Is Function
                                switch (typeof argument) {
                                    case "object": argumentIsFunction = LDKF.functionPrototypeIsDefault(argument); break;
                                    case "string": argumentIsFunction = argument === "[Interface prototype object]" || argument === "[object]" || argument === "[object NodeList]"
                                }
                        }

                        // Return
                        return argumentIsFunction
                    }

                    else
                        // Return
                        return false
                };
                    // Is Native Function
                    LapysDevelopmentKit.Functions.isNativeFunction = function isNativeFunction(routine, SOURCE_STRING, EVALUATE_PRIMITIVE_TYPE_ONLY) { var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine); return LDKF.isFunction(routine, STRICT = EVALUATE_PRIMITIVE_TYPE_ONLY) && LDKF.functionPrototypeIsNative(routine, STRICT = source) };

                    // Is User-Defined Function
                    LapysDevelopmentKit.Functions.isUserDefinedFunction = function isUserDefinedFunction(routine, SOURCE_STRING, EVALUATE_PRIMITIVE_TYPE_ONLY) { var source = SOURCE_STRING || LDKF.functionPrototypeToSourceString(routine); return LDKF.isFunction(routine, STRICT = EVALUATE_PRIMITIVE_TYPE_ONLY) && LDKF.functionPrototypeIsUserDefined(routine, STRICT = source) };

                // Is HTML All Collection-Like
                LapysDevelopmentKit.Functions.isHTMLAllCollectionLike = function isHTMLAllCollectionLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.htmlAllCollection) || (!LDKC.Assertions.has_HTMLAllCollection_Constructor && LDKT.isHTMLAllCollectionLike(argument)) };

                // Is HTML Body Element-Like
                LapysDevelopmentKit.Functions.isHTMLBodyElementLike = function isHTMLBodyElementLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.htmlBodyElement) || (!LDKC.Assertions.has_HTMLBodyElement_Constructor && LDKT.isHTMLBodyElementLike(argument)) };

                // Is HTML Collection-Like
                LapysDevelopmentKit.Functions.isHTMLCollectionLike = function isHTMLCollectionLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.htmlCollection) || (!LDKC.Assertions.has_HTMLCollection_Constructor && LDKT.isHTMLCollectionLike(argument)) };

                // Is HTML Frame Set Element-Like
                LapysDevelopmentKit.Functions.isHTMLFrameSetElementLike = function isHTMLFrameSetElementLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.htmlFrameSetElementLike) || (!LDKC.Assertions.has_HTMLFrameSetElement_Constructor && LDKT.isHTMLFrameSetElementLike(argument)) };

                // Is Location-Like
                LapysDevelopmentKit.Functions.isLocationLike = function isLocationLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.location) || (!LDKC.Assertions.has_Location_Constructor && LDKT.isLocationLike(argument)) };

                // Is Named Node Map-Like
                LapysDevelopmentKit.Functions.isNamedNodeMapLike = function isNamedNodeMapLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.namedNodeMap) || (!LDKC.Assertions.has_NamedNodeMap_Constructor || LDKT.isNamedNodeMapLike(argument)) };

                // Is Native Array-Like --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Array-like object provided by the current environment.
                LapysDevelopmentKit.Functions.isNativeArrayLike = function isNativeArrayLike(argument) {
                    // Return
                    return LDKF.isHTMLCollectionLike(argument)
                };

                // Is Node-Like
                LapysDevelopmentKit.Functions.isNodeLike = function isNodeLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.node) || (!LDKC.Assertions.has_Node_Constructor || LDKT.isNodeLike(argument)) };

                // Is Node List-Like
                LapysDevelopmentKit.Functions.isNodeListLike = function isNodeListLike(argument) { return LDKF.objectPrototypeIsOfConstructor(argument, LDKO.nodeList) || (!LDKC.Assertions.has_NodeList_Constructor || LDKT.isNodeListLike(argument)) };

                // Is Non-Constructible
                LapysDevelopmentKit.Functions.isNonConstructible = function isNonConstructible(argument) { return LDKF.isNull(argument) || LDKF.isVoid(argument) };

                // Is Non-Void
                LapysDevelopmentKit.Functions.isNonVoid = function isNonVoid(argument) { return !LDKF.isVoid(argument) };

                // Is Null
                LapysDevelopmentKit.Functions.isNull = function isNull(argument) { return null === argument };

                // Is Number --- WARN (Lapys) -> All variations of this method must not be deferred to.
                LapysDevelopmentKit.Functions.isNumber = function isNumber(argument) { return typeof argument == "number" };
                    // Is Integer Number
                    LapysDevelopmentKit.Functions.isIntegerNumber = function isIntegerNumber(argument) { return LDKF.isNumber(argument) && LDKF.numberPrototypeIsInteger(argument) };

                    // Is Not-A-Number
                    LapysDevelopmentKit.Functions.isNaN = function isNaN(argument) { return LDKF.isNumber(argument) && LDKF.numberPrototypeIsNaN(argument) };

                    // Is Positive Number
                    LapysDevelopmentKit.Functions.isPositiveNumber = function isPositiveNumber(argument) { return LDKF.isNumber(argument) && LDKF.numberPrototypeIsPositive(argument) };

                    // Is Positive Integer Number
                    LapysDevelopmentKit.Functions.isPositiveIntegerNumber = function isPositiveIntegerNumber(argument) { return LDKF.isNumber(argument) && LDKF.numberPrototypeIsPositiveInteger(argument) };

                // Is Number-Like
                LapysDevelopmentKit.Functions.isNumberLike = function isNumberLike(argument) { return LDKF.isBoolean(argument) || LDKF.isNumber(argument) };

                // Is Object
                LapysDevelopmentKit.Functions.isObject = function isObject(argument) { return LDKF.objectPrototypeConstructor(argument) === LDKO.object };

                // Is Object-Like
                LapysDevelopmentKit.Functions.isObjectLike = function isObjectLike(argument) { return typeof argument == "object" && !LDKF.isNull(argument) };

                // Is Primitive --- NOTE (Lapys) -> Assert if the Argument is a JavaScript value not defined (by standard) to contain structure-like behaviors.
                LapysDevelopmentKit.Functions.isPrimitive = function isPrimitive(argument) { return LDKF.isBoolean(argument) || LDKF.isNull(argument) || LDKF.isNumber(argument) || LDKF.isString(argument) || LDKF.isVoid(argument) || LDKF.isFunction(argument) };

                // Is Regular Expression --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Oddly enough, regular expression objects may be represented as primitive function types in legacy JavaScript environments (i.e.: `typeof /(?:)/ == "function"`).
                LapysDevelopmentKit.Functions.isRegularExpression = function isRegularExpression(argument) {};

                // Is String --- WARN (Lapys) -> All variations of this method must not be deferred to.
                LapysDevelopmentKit.Functions.isString = function isString(argument) { return typeof argument == "string" };
                    // Is ASCII Character String
                    LapysDevelopmentKit.Functions.isASCIICharacterString = function isASCIICharacterString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsASCIICharacter(argument, STRICT = STRING_LENGTH)) };

                    // Is Character Encoding String
                    LapysDevelopmentKit.Functions.isCharacterEncodingString = function isCharacterEncodingString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsCharacterEncoding(argument, STRICT = STRING_LENGTH)) };

                    // Is Color Code String
                    LapysDevelopmentKit.Functions.isColorCodeString = function isColorCodeString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsColorCode(argument, STRICT = STRING_LENGTH)) };

                    // Is CSS Source String
                    LapysDevelopmentKit.Functions.isCSSSourceString = function isCSSSourceString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsCSSSource(argument, STRICT = STRING_LENGTH)) };

                    // Is Date String
                    LapysDevelopmentKit.Functions.isDateString = function isDateString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsDate(argument, STRICT = STRING_LENGTH)) };

                    // Is Language Code String
                    LapysDevelopmentKit.Functions.isLanguageCodeString = function isLanguageCodeString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsLanguageCode(argument, STRICT = STRING_LENGTH)) };

                    // Is URL String
                    LapysDevelopmentKit.Functions.isURLString = function isURLString(argument, STRING_LENGTH) { return LDKF.isString(argument) && (!argument || LDKF.stringPrototypeIsURL(argument, STRICT = STRING_LENGTH)) };

                // Is Symbol
                LapysDevelopmentKit.Functions.isSymbol = function isSymbol(argument) { return typeof argument == "symbol" };

                // Is Type Error
                LapysDevelopmentKit.Functions.isTypeError = function isTypeError(argument) { return LDKF.objectPrototypeConstructor(argument) === LDKO.typeError };

                // Is Void --- NOTE (Lapys) -> Unfortunately, `HTMLAllCollection` objects are also seen as void in modern host environments.
                LapysDevelopmentKit.Functions.isVoid = function isVoid(argument) { return typeof argument == "undefined" };

                /* Iterate [JavaScript] Source [String]
                        --- NOTE (Lapys) -> Iterate through JavaScript source syntax.
                            - The `this` object for the Handler points to an `Iterator` object.
                            - Returns an `Iterator` object.
                            - The `IGNORE` flag eventually gets parsed as
                                `{
                                    comments: {multiline: <boolean>, singleline: <boolean>},
                                    delimiters: {
                                        arrays: <boolean>, objects: <boolean>, syntax: <boolean>,
                                        strings: {literals: "double" | "both" | "none" | "single", templates: <boolean>}
                                    }
                                }`.
                        --- WARN (Lapys) ->
                            - The handler is executed with `value, key` arguments rather than the reverse (`key, value`)
                                because this use-case (iterating through source code) is not publicly available to the library user (unless Debug Mode is enabled).
                            - This method does not handle escaped string tokens properly.
                */
                LapysDevelopmentKit.Functions.iterateJavaScriptSource = function iterateJavaScriptSource(source, handler, IGNORE, IS_FUNCTION, STARTING_ITERATION_INDEX, PARSE_FROM_STARTING_ITERATION_INDEX) {
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
                            currentSyntaxGroup = null;

                    // Constant > Iterator
                    var ITERATOR = new LDKD.Iterator;
                        // Modification > Iterator > ... --- REDACT (Lapys)
                        ITERATOR.jump = function jump(index) { sourceIterator -= index; (sourceIterator < +0) && (sourceIterator = +0); }; // NOTE (Lapys) -> Jump by a certain Index
                        ITERATOR.oniterationend = null;
                        ITERATOR.stop = function stop() { sourceIterator = +0 };
                        ITERATOR.then = function then(handler) {
                            // Event > Iterator > Iteration End
                            ITERATOR.oniterationend = handler;

                            // Iterator > On Iteration End
                            sourceIterator || LDKF.isNull(ITERATOR.oniterationend) || ITERATOR.oniterationend(sourceLength);

                            // Deletion
                            delete ITERATOR.then
                        };

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
                        (!STARTING_ITERATION_INDEX || sourceIndex == STARTING_ITERATION_INDEX || sourceIndex > STARTING_ITERATION_INDEX) && ((
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
                        ) || LDKF.functionPrototypeCall(handler, ITERATOR, character, sourceIndex))
                    }

                    // Update > Source Length
                    sourceLength += forcedStartingSourceIterationIndex;

                    // Iterator > On Iteration End
                    sourceIterator || LDKF.isNull(ITERATOR.oniterationend) || ITERATOR.oniterationend(sourceLength);

                    // Return
                    return ITERATOR
                };

                /* Iterate Object
                        --- NOTE (Lapys) -> Index properties of an object.
                            - The Handler is only called with an `Iterator` object and property identifier argument.

                        --- WARN (Lapys) -> Exceptions thrown while iterating will be silently failed.
                */
                LapysDevelopmentKit.Functions.iterateObject = function iterateObject(object, handler, DEEP_SEARCH) {
                    // Constant > Iterator
                    var ITERATOR = new LDKD.Iterator;

                    // Initialization > Stop Iteration
                    var stopIteration = false;

                    // Modification > Iterator > Stop
                    ITERATOR.stop = function stop() { stopIteration = true };

                    // Logic
                    if (DEEP_SEARCH) {
                        // Initialization > (Property (Names, Symbols)) (Length, Iterator)
                        var propertyNames = LDKF.objectGetOwnPropertyNames(object),
                                propertyNamesLength = LDKF.arrayPrototypeLength(propertyNames), propertyNamesIterator = propertyNamesLength,
                            propertySymbols = LDKF.objectGetOwnPropertySymbols(object),
                                propertySymbolsLength = LDKF.arrayPrototypeLength(propertySymbols), propertySymbolsIterator = propertySymbolsLength;

                        // Loop > Handler
                        while (!stopIteration && propertyNamesIterator) try { LDKF.functionPrototypeCall(handler, ITERATOR, propertyNames[propertyNamesLength - (propertyNamesIterator -= 1) - 1]) } catch (error) {}
                        while (!stopIteration && propertySymbolsIterator) try { LDKF.functionPrototypeCall(handler, ITERATOR, propertySymbols[propertySymbolsLength - (propertySymbolsIterator -= 1) - 1]) } catch (error) {}
                    }

                    else {
                        // Initialization > (Property Identifier, Stop Iteration)
                        var propertyIdentifier, stopIteration = false;

                        // Loop > Error Handling > Logic > ...
                        for (propertyIdentifier in object) try { if (stopIteration) break; LDKF.functionPrototypeCall(handler, ITERATOR, propertyIdentifier) } catch (error) {}
                    }

                    // Return
                    return ITERATOR
                };

                /* Number */
                LapysDevelopmentKit.Functions.number = function number(argument) {
                    // Logic
                    if (LDKF.isNumber(argument))
                        // Return
                        return argument;

                    else if (LDKF.getArgumentsLength(arguments))
                        // Logic > Return
                        if (LDKF.isPrimitive(argument)) return LDKF.toNumber(argument);
                        else if (LDKF.isArray(argument)) return LDKF.arrayPrototypeLength(argument);
                        else if (LDKF.isArrayLike(argument)) return LDKF.arrayLikePrototypeLength(argument);
                        else return LDKC.Numbers.NaN;

                    else
                        // Return
                        return +0
                };
                    // Prototype
                        // Is Even
                        LapysDevelopmentKit.Functions.numberPrototypeIsEven = function numberPrototypeIsEven(number, PROCESS_AS_INTEGERS) { return !!(number && !(number & 1) && (PROCESS_AS_INTEGERS || LDKF.numberPrototypeIsInteger(number))) };

                        // Is Integer
                        LapysDevelopmentKit.Functions.numberPrototypeIsInteger = function numberPrototypeIsInteger(number) { return number == LDKM.int(number) };

                        // Is Not-A-Number --- NOTE (Lapys) -> Fortunately, `NaN` is the only JavaScript value that does not compare with itself.
                        LapysDevelopmentKit.Functions.numberPrototypeIsNaN = function numberPrototypeIsNaN(number) { return number !== number };

                        // Is Negative
                        LapysDevelopmentKit.Functions.numberPrototypeIsNegative = function numberPrototypeIsNegative(number) { return number < -0 || LDKF.numberPrototypeIsNegativeZero(number) };

                        // Is Negative Zero
                        LapysDevelopmentKit.Functions.numberPrototypeIsNegativeZero = function numberPrototypeIsNegativeZero(number) { return LDKF.objectIs(number, -0) };

                        // Is Non-Integer
                        LapysDevelopmentKit.Functions.numberPrototypeIsNonInteger = function numberPrototypeIsNonInteger(number) { return !LDKF.numberPrototypeIsInteger(number) };

                        // Is Odd
                        LapysDevelopmentKit.Functions.numberPrototypeIsOdd = function numberPrototypeIsOdd(number, PROCESS_AS_INTEGERS) { return !!(number && (number & 1) && (PROCESS_AS_INTEGERS || LDKF.numberPrototypeIsInteger(number))) };

                        // is Positive Zero
                        LapysDevelopmentKit.Functions.numberPrototypeIsPositiveZero = function numberPrototypeIsPositiveZero(number) { return LDKF.objectIs(number, +0) };

                        // is Positive
                        LapysDevelopmentKit.Functions.numberPrototypeIsPositive = function numberPrototypeIsPositive(number) { return number > +0 || LDKF.numberPrototypeIsPositiveZero(number) };

                        // is Positive Integer
                        LapysDevelopmentKit.Functions.numberPrototypeIsPositiveInteger = function numberPrototypeIsPositiveInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsPositive(number) };

                        // Is Prime --- UPDATE REQUIRED (Lapys) -> Assert if the number is prime without division (use proper primality tests).
                        LapysDevelopmentKit.Functions.numberPrototypeIsPrime = function numberPrototypeIsPrime(number, PROCESS_AS_INTEGERS) {
                            // Logic
                            if (number) {
                                // Logic
                                if (number == 1 || number == 2)
                                    // Return
                                    return false;

                                else if (!PROCESS_AS_INTEGERS && LDKF.numberPrototypeIsNonInteger(number))
                                    return null;

                                else if (number) {
                                    // Initialization > (Is Prime, Possible Factor)
                                    var isPrime = true, possibleFactor = 1;

                                    // Loop > Update > Is Prime
                                    while (isPrime && (possibleFactor += 1) ^ number)
                                        (number % possibleFactor) || (isPrime = false);

                                    // Return
                                    return isPrime
                                }
                            }

                            else
                                // Return
                                return false
                        };

                         /* Shift Right
                                --- NOTE (Lapys) -> Hopefully, right-shifting causes sign extension.
                                --- WARN (Lapys) -> Only for integer overflow purposes.
                        */
                        LapysDevelopmentKit.Functions.numberPrototypeShiftRight = function numberPrototypeShiftRight(number, length) { return number >> (LDKF.getArgumentsLength(arguments) > 1 ? length : LDKC.Numbers.integerSize - 1) };

                /* Object */
                LapysDevelopmentKit.Functions.object = function object(argument) { return LDKF.isObjectLike(argument) ? argument : LDKO.object(argument) };
                    // Create
                    LapysDevelopmentKit.Functions.objectCreate = function objectCreate(url) { return LDKO.objectCreate(url) };

                    // Define Property
                    LapysDevelopmentKit.Functions.objectDefineProperty = function objectDefineProperty(object, propertyName, descriptor) { return LDKO.objectDefineProperty(object, propertyName, descriptor) };

                    // Get Own Non-Getter-Setter Property Identifiers
                    LapysDevelopmentKit.Functions.objectGetOwnNonGetterSetterPropertyIdentifiers = function objectGetOwnNonGetterSetterPropertyIdentifiers(object) {
                        // Initialization
                            // (Property Names) (Iterator, Length)
                            var propertyNames = LDKF.objectGetOwnPropertyNames(object),
                                propertyNamesLength = LDKF.arrayPrototypeLength(propertyNames),
                                propertyNamesIterator = propertyNamesLength,

                            // (Property Symbols) (Iterator, Length)
                            propertySymbols = LDKF.objectGetOwnPropertySymbols(object),
                                propertySymbolsLength = LDKF.arrayPrototypeLength(propertySymbols),
                                propertySymbolsIterator = propertySymbolsLength,

                            // Non-Getter-Setter Property Identifiers (Length)
                            nonGetterSetterPropertyIdentifiers = [], nonGetterSetterPropertyIdentifiersLength = +0;

                        // Loop
                        while (propertyNamesIterator) {
                            // Initialization > Property (Name, Descriptor)
                            var propertyName = propertyNames[propertyNamesLength - (propertyNamesIterator -= 1) - 1],
                                propertyDescriptor = LDKF.objectGetOwnPropertyDescriptor(object, propertyName);

                            // Update > Non-Getter-Setter Property Names
                            (LDKF.objectPrototypeHasProperty(propertyDescriptor, "get") || LDKF.objectPrototypeHasProperty(propertyDescriptor, "set")) ||
                            (nonGetterSetterPropertyIdentifiers[(nonGetterSetterPropertyIdentifiersLength += 1) - 1] = propertyName)
                        }

                        // Loop
                        while (propertySymbolsIterator) {
                            // Initialization > Property (Symbol, Descriptor)
                            var propertySymbol = propertySymbols[propertySymbolsLength - (propertySymbolsIterator -= 1) - 1],
                                propertyDescriptor = LDKF.objectGetOwnPropertyDescriptor(object, propertySymbol);

                            // Update > Non-Getter-Setter Property Names
                            (LDKF.objectPrototypeHasProperty(propertyDescriptor, "get") || LDKF.objectPrototypeHasProperty(propertyDescriptor, "set")) ||
                            (nonGetterSetterPropertyIdentifiers[(nonGetterSetterPropertyIdentifiersLength += 1) - 1] = propertySymbol)
                        }

                        // Return
                        return nonGetterSetterPropertyIdentifiers
                    };

                    // Get Own Property Descriptor
                    LapysDevelopmentKit.Functions.objectGetOwnPropertyDescriptor = function objectGetOwnPropertyDescriptor(object, propertyName) { return LDKO.objectGetOwnPropertyDescriptor(object, propertyName) };

                    // Get Own Property Names
                    LapysDevelopmentKit.Functions.objectGetOwnPropertyNames = function objectGetOwnPropertyNames(object) { return LDKO.objectGetOwnPropertyNames(object) };

                    // Get Own Property Symbols
                    LapysDevelopmentKit.Functions.objectGetOwnPropertySymbols = function objectGetOwnPropertySymbols(object) { return LDKO.objectGetOwnPropertySymbols(object) };

                    // Get Prototype Of
                    LapysDevelopmentKit.Functions.objectGetPrototypeOf = function objectGetPrototypeOf(object) { return LDKO.objectGetPrototypeOf(object) };

                    // Has Same Inheritance
                    LapysDevelopmentKit.Functions.objectHasSameInheritance = function objectHasSameInheritance(objectA, objectB) { return LDKF.objectPrototypeConstructor(objectA) === LDKF.objectPrototypeConstructor(objectB) && LDKF.objectPrototypePrototype(objectA) === LDKF.objectPrototypePrototype(objectB) };

                    // Is
                    LapysDevelopmentKit.Functions.objectIs = function objectIs(objectA, objectB) { return objectA === objectB ? +0 !== objectA || 1 / objectA == 1 / objectB: objectA !== objectA && objectB !== objectB };

                    // Prototype
                        // Clone --- CHECKPOINT (Lapys) --- UPDATE REQUIRED (Lapys) -> Must be extremely fast.
                        LapysDevelopmentKit.Functions.objectPrototypeClone = function objectPrototypeClone(object, DEEP_CLONE) { return object };

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

                        // `__defineGetter__`
                        LapysDevelopmentKit.Functions.objectPrototype___defineGetter___ = function objectPrototype___defineGetter___(object, propertyName, accessor) { return LDKF.functionPrototypeCall(LDKO.objectPrototype___defineGetter___, object, propertyName, accessor) };

                        // `__defineSetter__`
                        LapysDevelopmentKit.Functions.objectPrototype___defineSetter___ = function objectPrototype___defineSetter___(object, propertyName, mutator) { return LDKF.functionPrototypeCall(LDKO.objectPrototype___defineSetter___, object, propertyName, mutator) };

                        /* Define Property [By Name]
                                --- NOTE (Lapys) -> Non-natively defined way of using the `Object.defineProperty` method.
                                    -
                                    - Enumerable is `false` by default unless a specific `TypeError` is thrown.
                        */
                        LapysDevelopmentKit.Functions.objectPrototypeDefineProperty = function objectPrototypeDefineProperty(object, propertyName, propertyDescriptor) {
                            // Initialization > Descriptor
                            var descriptor = {configurable: false, enumerable: false};

                            // Update > Property Descriptor
                            LDKF.isObject(propertyDescriptor) || (propertyDescriptor = {configurable: false, enumerable: false, value: propertyDescriptor, writable: false});

                            // Logic
                            if (propertyDescriptor) {
                                LDKF.objectPrototypeHasProperty(propertyDescriptor, "configurable") && (descriptor.configurable = !!propertyDescriptor.configurable);
                                LDKF.objectPrototypeHasProperty(propertyDescriptor, "enumerable") && (descriptor.enumerable = !!propertyDescriptor.enumerable)
                            }

                            // Logic
                            if (propertyDescriptor && LDKF.objectPrototypeHasProperty(propertyDescriptor, "value"))
                                // Logic
                                if (LDKF.objectPrototypeHasProperty(propertyDescriptor, "get") || LDKF.objectPrototypeHasProperty(propertyDescriptor, "set"))
                                    // Error
                                    LDKF.throwTypeError("Cannot execute `LapysDevelopmentKit.Functions.objectPrototypeDefineProperty`: invalid property descriptor specified");

                                else {
                                    // Modification > Descriptor > (Value, Writable)
                                    descriptor.value = propertyDescriptor.value;
                                    descriptor.writable = !!propertyDescriptor.writable
                                }

                            else if (propertyDescriptor && (LDKF.objectPrototypeHasProperty(propertyDescriptor, "get") || LDKF.objectPrototypeHasProperty(propertyDescriptor, "set"))) {
                                // Logic > ...
                                if (LDKF.objectPrototypeHasProperty(propertyDescriptor, "get")) { var accessor = propertyDescriptor.get; descriptor.get = LDKF.isFunction(accessor) ? accessor : function() { return accessor } }
                                if (LDKF.objectPrototypeHasProperty(propertyDescriptor, "set")) { var mutator = propertyDescriptor.set; descriptor.set = LDKF.isFunction(mutator) ? mutator : function() { return mutator } }
                            }

                            else {
                                // Modification > Descriptor > (Value, Writable)
                                descriptor.value = undefined;
                                descriptor.writable = false
                            }

                            // Error Handling
                            try {
                                // Modification > Object > [Property Name]
                                LDKF.objectDefineProperty(object, propertyName, descriptor)
                            } catch (error) {
                                // Logic
                                if (LDKF.isTypeError(error) && LDKF.stringPrototypeIncludes(LDKF.errorPrototypeGetMessage(error), "redefine")) {
                                    // Modification > ...
                                    descriptor.enumerable = true;
                                    LDKF.objectDefineProperty(object, propertyName, descriptor)
                                }

                                else
                                    // Error
                                    throw error
                            }

                            // Return
                            return object
                        };

                        // Delete Property [By Name]
                        LapysDevelopmentKit.Functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, propertyName) { delete object[propertyName]; return object };

                        // Depth --- CHECKPOINT (Lapys) -> Fix.
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
                                    // Iterator, Length
                                    recordedReferencesIterator = +0, recordedReferencesLength = +0,

                                // Recorded Depth Tree --- NOTE (Lapys) -> For miscellaneous actions, see code below for uses.
                                    // Iterator, Length
                                    recordedDepthTreeIterator = null, recordedDepthTreeLength = null;

                            // Initialization > (Object Property Identifiers) (Length, Iterator)
                            var objectPropertyIdentifiers = LDKF.objectGetOwnNonGetterSetterPropertyIdentifiers(object),
                                objectPropertyIdentifiersLength = LDKF.arrayPrototypeLength(objectPropertyIdentifiers),
                                objectPropertyIdentifiersIterator = objectPropertyIdentifiersLength;

                            // Loop --- NOTE (Lapys) -> Populate the Depth Tree with an initial layer.
                            while (objectPropertyIdentifiersIterator) {
                                // Initialization > Object Property (Identifier, Value)
                                var objectPropertyIdentifier = objectPropertyIdentifiers[objectPropertyIdentifiersLength - (objectPropertyIdentifiersIterator -= 1) - 1],
                                    objectPropertyValue = object[objectPropertyIdentifier];

                                // Update > Depth Tree
                                (LDKF.isConstructible(objectPropertyValue) && LDKF.objectHasSameInheritance(object, objectPropertyValue)) &&
                                (depthTree[(depthTreeLength += 1) - 1] = objectPropertyValue)
                            }

                            // Loop --- NOTE (Lapys) -> Recur through the Object's properties.
                            do {
                                // Logic
                                if (recordedDepthTreeLength) {
                                    // Initialization > (Sub-Object) (Property Identifiers (Length, Iterator))
                                    var subobject = depthTree[depthTreeIterator],
                                        subobjectPropertyIdentifiers = LDKF.objectGetOwnNonGetterSetterPropertyIdentifiers(subobject),
                                        subobjectPropertyIdentifiersLength = LDKF.arrayPrototypeLength(subobject),
                                        subobjectPropertyIdentifiersIterator = subobjectPropertyIdentifiersLength;

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
                                        while (subobjectPropertyIdentifiersIterator) {
                                            // Initialization > Sub-Object Property (Identifier, Value)
                                            var subobjectPropertyIdentifier = subobjectPropertyIdentifiers[subobjectPropertyIdentifiersLength - (subobjectPropertyIdentifiersIterator -= 1) - 1],
                                                subobjectPropertyValue = subobject[subobjectPropertyIdentifier];

                                            // Update > Depth Tree
                                            (LDKF.isConstructible(subobjectPropertyValue) && LDKF.objectHasSameInheritance(object, subobjectPropertyValue)) &&
                                            (depthTree[(depthTreeLength += 1) - 1] = subobjectPropertyValue)
                                        }

                                        // Update > Depth Tree Iterator
                                        depthTreeIterator += 1
                                    }
                                }

                                // Logic --- NOTE (Lapys) -> Represents when the search goes to a deeper layer/ level (e.g.: `<...>.ondepthsearchincremented = f() { ... }`).
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
                            hasRecursiveReference && (depth = LDKC.Numbers.Infinity);

                            // Return
                            return depth
                        };

                        // Every
                        LapysDevelopmentKit.Functions.objectPrototypeEvery = function objectPrototypeEvery(object) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop > Logic > Return
                            while (iterator ^ 1) if (!arguments[length - (iterator -= 1)](object)) return false;

                            // Return
                            return true
                        };

                        // Get Property [By Name] --- FLAG (Lapys) -> Must not throw an exception if the `SILENCE_EXCEPTIONS` flag is `true`, this is violated in Netscape Navigator.
                        LapysDevelopmentKit.Functions.objectPrototypeGetProperty = function objectPrototypeGetProperty(object, propertyName, SILENCE_EXCEPTIONS) {
                            // Error Handling > ...
                            try { return object[propertyName] }
                            catch (error) { if (!SILENCE_EXCEPTIONS) throw error }
                        };

                        // Has Own Property
                        LapysDevelopmentKit.Functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, propertyName) { return LDKF.functionPrototypeCall(LDKO.objectPrototypeHasOwnProperty, object, propertyName) };

                        // Has Property [By Name] --- FLAG (Lapys) -> Must not throw an exception if the `SILENCE_EXCEPTIONS` flag is `true`, this is violated in Netscape Navigator.
                        LapysDevelopmentKit.Functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyName, SILENCE_EXCEPTIONS) {
                            // Error Handling > ...
                            try { return LDKF.isConstructible(object) ? propertyName in object : false }
                            catch (error) { if (!SILENCE_EXCEPTIONS) throw error }

                            // Return
                            return false
                        };

                        // Instance Of
                        LapysDevelopmentKit.Functions.objectPrototypeInstanceOf = function objectPrototypeInstanceOf(object, constructor, ARGUMENTS_ARE_VALID) { return (ARGUMENTS_ARE_VALID || (LDKF.isConstructible(object) && LDKF.isFunction(constructor))) && object instanceof constructor };

                        // Is Of Constructor --- NOTE (Lapys) -> Basically the `LapysDevelopmentKit.Functions.objectPrototypeInstanceOf` method with a few extras.
                        LapysDevelopmentKit.Functions.objectPrototypeIsOfConstructor = function objectPrototypeIsOfConstructor(object, constructor, ASSERT_BY_CONSTRUCTOR_VALUE) {
                            // Initialization > Is Of Constructor
                            var isOfConstructor = LDKF.isConstructible(object) && LDKF.isFunction(constructor);

                            // Logic
                            if (isOfConstructor)
                                // Logic > Update > Is Of Constructor
                                switch (typeof object) {
                                    case "boolean": isOfConstructor = constructor === LDKO.boolean; break;
                                    case "function": isOfConstructor = constructor === LDKO["function"]; break;
                                    case "number": isOfConstructor = constructor === LDKO.number; break;
                                    case "string": isOfConstructor = constructor === LDKO.string; break;
                                    case "symbol": isOfConstructor = constructor === LDKO.symbol; break;
                                    case "undefined": isOfConstructor = false; break;
                                    default: isOfConstructor = LDKF.objectPrototypeInstanceOf(object, constructor, STRICT = true)
                                }

                            // Logic
                            if (ASSERT_BY_CONSTRUCTOR_VALUE)
                                // Error Handling > Update > Is Of Constructor
                                try { isOfConstructor = isOfConstructor && LDKF.objectPrototypeInstanceOf(new constructor, constructor) }
                                catch (error) { LDKF.isTypeError(error) || (isOfConstructor = false) }

                            // Return
                            return isOfConstructor
                        };

                        // `__lookupGetter__`
                        LapysDevelopmentKit.Functions.objectPrototype___lookupGetter___ = function objectPrototype___lookupGetter___(object, propertyName) { return LDKF.functionPrototypeCall(LDKO.objectPrototype___lookupGetter___, object, propertyName) };

                        // `__lookupSetter__`
                        LapysDevelopmentKit.Functions.objectPrototype___lookupSetter___ = function objectPrototype___lookupSetter___(object, propertyName) { return LDKF.functionPrototypeCall(LDKO.objectPrototype___lookupSetter___, object, propertyName) };

                        // Prototype
                        LapysDevelopmentKit.Functions.objectPrototypePrototype = function objectPrototypePrototype(object) { return LDKF.objectGetPrototypeOf(object) };

                        // Request Accessor
                        LapysDevelopmentKit.Functions.objectPrototypeRequestAccessor = function objectPrototypeRequestAccessor(object, propertyName) {
                            // Initialization > Descriptor
                            var descriptor = LDKF.objectGetOwnPropertyDescriptor(object, propertyName);

                            // Return
                            return (LDKF.objectPrototypeHasProperty(descriptor, "get", STRICT = true) ? descriptor.get : (LDKC.Assertions.has___lookupGetter___Method ? LDKF.objectPrototype___lookupGetter___(object, propertyName) : null)) || null
                        };

                        // Request Mutator
                        LapysDevelopmentKit.Functions.objectPrototypeRequestMutator = function objectPrototypeRequestMutator(object, propertyName) {
                            // Initialization > Descriptor
                            var descriptor = LDKF.objectGetOwnPropertyDescriptor(object, propertyName);

                            // Return
                            return (LDKF.objectPrototypeHasProperty(descriptor, "set", STRICT = true) ? descriptor.set : (LDKC.Assertions.has___lookupSetter___Method ? LDKF.objectPrototype___lookupSetter___(object, propertyName) : null)) || null
                        };

                        // Set Property [By Name] --- FLAG (Lapys) -> Must not throw an exception if the `SILENCE_EXCEPTIONS` flag is `true`, this is violated in Netscape Navigator.
                        LapysDevelopmentKit.Functions.objectPrototypeSetProperty = function objectPrototypeSetProperty(object, propertyName, propertyValue, SILENCE_EXCEPTIONS) {
                            // Error Handling > ...
                            try { return object[propertyName] = propertyValue }
                            catch (error) { if (!SILENCE_EXCEPTIONS) throw error }
                        };

                        // Some
                        LapysDevelopmentKit.Functions.objectPrototypeSome = function objectPrototypeSome(object) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop > Logic > Return
                            while (iterator ^ 1) if (arguments[length - (iterator -= 1)](object)) return true;

                            // Return
                            return false
                        };

                        // Value Of
                        LapysDevelopmentKit.Functions.objectPrototypeValueOf = function objectPrototypeValueOf(object, SILENCE_EXCEPTIONS) {
                            // Error Handling > ...
                            try { return object.valueOf() }
                            catch (error) { if (!SILENCE_EXCEPTIONS) throw error }

                            // Return
                            return object
                        };

                    // Set Prototype Of
                    LapysDevelopmentKit.Functions.objectSetPrototypeOf = function objectSetPrototypeOf(object, prototype) { return LDKO.objectSetPrototypeOf(object, prototype) };

                // Remove From Source --- NOTE (Lapys) -> Alternative way to get ignored syntaxes from the `LapysDevelopmentKit.Functions.iterateJavaScriptSource` method`s `IGNORE` flag parameter.
                LapysDevelopmentKit.Functions.removeFromSource = function removeFromSource(source, options, IS_FUNCTION, STARTING_ITERATION_INDEX, PARSE_FROM_STARTING_ITERATION_INDEX) { var stream = ""; LDKF.iterateJavaScriptSource(source, function(character) { stream += character }, STRICT = options, STRICT = IS_FUNCTION, STRICT = STARTING_ITERATION_INDEX, STRICT = PARSE_FROM_STARTING_ITERATION_INDEX); return stream };

                // Request Consideration Of Native Method Of Object By Conditional Fallback Value
                LapysDevelopmentKit.Functions.requestConsiderationOfNativeMethodOfObjectByConditionalFallbackValue = function requestConsiderationOfNativeMethodOfObjectByConditionalFallbackValue(conditionalFallbackValue) {
                    // Initialization > Iterator
                    var iterator = LDKF.arrayPrototypeLength(LDKS.Registry.Consideration.OfNativeMethodOfObject);

                    // Loop
                    while (iterator) {
                        // Initialization > (Consideration, Conditional Fallbacks Iterator)
                        var consideration = LDKS.Registry.Consideration.OfNativeMethodOfObject[iterator -= 1],
                            conditionalFallbacksIterator = LDKF.arrayPrototypeLength(consideration.conditionalFallbacks);

                        // Loop > Logic > Return
                        while (conditionalFallbacksIterator) if (consideration.conditionalFallbacks[conditionalFallbacksIterator -= 1].value === conditionalFallbackValue) return consideration
                    }

                    // Return
                    return null
                };

                // Request Animation Frame
                LapysDevelopmentKit.Functions.requestAnimationFrame = function requestAnimationFrame(frame) { return LDKF.functionPrototypeCall(LDKO.requestAnimationFrame, GLOBAL, frame) };

                // Set Interval
                LapysDevelopmentKit.Functions.setInterval = function setInterval(handler, interval) { return LDKO.setIntervalCall === LDKO.functionPrototypeCall ? LDKF.functionPrototypeCall(LDKO.setInterval, GLOBAL, handler, interval) : LDKO.setInterval(handler, interval) };

                // Set Timeout
                LapysDevelopmentKit.Functions.setTimeout = function setTimeout(handler, delay) { return LDKO.setTimeoutCall === LDKO.functionPrototypeCall ? LDKF.functionPrototypeCall(LDKO.setTimeout, GLOBAL, handler, delay) : LDKO.setTimeout(handler, delay) };

                /* Size Of
                        --- CHECKPOINT (Lapys) -> Update this.
                        --- CITE (Lapys) -> https://gist.github.com/zensh/4975495
                        --- NOTE (Lapys) -> `sizeof` operator inspired from C. Returns size in bytes.
                        --- WARN (Lapys) -> This method is only a rough approximation of the actual byte-size of JavaScript values based on the ECMAScript standards.
                            - Accessors (i.e.: getters) are ignored while Methods are accounted for.
                            - Performs a deep, recursive search for non-primitive values.
                            - Property names are accounted for as well.

                            This method is as inaccurate (but very consistent) as it gets, better to defer to other software currently until such an operation is added into the JavaScript programming language.
                */
                LapysDevelopmentKit.Functions.sizeof = function sizeof(argument, REFERENCES, REFERENCES_LENGTH) {
                    // Logic
                    if (LDKF.isConstructible(argument)) {
                        // Initialization > (Argument Type, Byte Size)
                        var argumentType = typeof argument, byteSize = +0;

                        // Logic
                        if (argumentType == "boolean")
                            // Update > Byte Size
                            byteSize = 4;

                        else if (argumentType == "number")
                            // Update > Byte Size
                            byteSize = 8;

                        else if (argumentType == "string")
                            // Update > Byte Size
                            byteSize = LDKF.stringPrototypeLength(argument) * 2;

                        else if (argumentType == "symbol")
                            // Update > Byte Size --- NOTE (Lapys) -> Assume Symbols are pointers.
                            byteSize = LDKC.Numbers.referenceSize;

                        else if (argumentType == "object" || LDKF.isFunction(argument)) {
                            // Initialization > References (Length)
                            var references = REFERENCES || [argument], referencesLength = REFERENCES ? LDKF.arrayPrototypeLength(references) : 1;

                            // Loop --- NOTE (Lapys) -> To genuinely get the size of the function, we need a Disassembler to get which expressions and statements actually take up memory.
                            LDKF.iterateObject(argument, function(propertyName) {
                                // Constant > Iterator
                                var iterator = this;

                                // Logic
                                if (LDKF.objectPrototypeHasOwnProperty(argument, propertyName)) {
                                    // Initialization > (Property Value) Thrown Exception On Access
                                    var propertyValue = ANY, propertyValueThrownExceptionOnAccess = false;

                                    // Update > Byte Size --- UPDATE REQUIRED (Lapys) -> Should the value of its property name be accounted for as well?
                                    byteSize += LDKF.sizeof(propertyName);

                                    // Error Handling > Update > Property Value --- NOTE (Lapys)
                                    try { propertyValue = argument[propertyName] } catch (error) { propertyValueThrownExceptionOnAccess = true }

                                    // Logic
                                    if (!propertyValueThrownExceptionOnAccess) {
                                        // Initialization > Property Value Is (Primitive, Referenced)
                                        var propertyValueIsPrimitive = !LDKF.isFunction(propertyValue) && LDKF.isPrimitive(propertyValue),
                                            propertyValueIsReferenced = false;

                                        // Logic
                                        if (!propertyValueIsPrimitive) {
                                            // Initialization > References Iterator
                                            var referencesIterator = referencesLength;

                                            // Loop > Update > ... --- NOTE (Lapys) -> Assert the property is a cyclic reference.
                                            while (!propertyValueIsReferenced && referencesIterator) propertyValueIsReferenced = propertyValue === references[referencesIterator -= 1]
                                        }

                                        // Logic
                                        if (!propertyValueIsReferenced) {
                                            // Logic
                                            if (propertyValueIsPrimitive)
                                                // Update > Byte Size --- NOTE (Lapys) -> Primitive values within an object are stored within the object.
                                                byteSize += LDKF.sizeof(propertyValue, STRICT = references);

                                            else {
                                                // Update > ... --- NOTE (Lapys) -> Assume non-primitive values are reference pointers.
                                                byteSize += LDKC.Numbers.referenceSize;
                                                references[referencesLength] = propertyValue; referencesLength += 1;
                                                byteSize += LDKF.sizeof(propertyValue, STRICT = references)
                                            }
                                        }
                                    }
                                }
                            }, STRICT = true);

                            window.references = references
                        }

                        // Return
                        return byteSize
                    }

                    else
                        // Return
                        return +0
                };

                /* String */
                    // Prototype
                        // After
                        LapysDevelopmentKit.Functions.stringPrototypeAfter = function stringPrototypeAfter(string, substring, STRING_LENGTH) { return LDKF.stringPrototypeAfterFromBack(string, substring, STRICT = STRING_LENGTH) };

                        // After From
                        LapysDevelopmentKit.Functions.stringPrototypeAfterFrom = function stringPrototypeAfterFrom(string, substring, STRING_LENGTH) {
                            // Initialization > String (After, Length)
                            var stringAfter = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Update > Substring
                                LDKF.isString(substring) && (substring = [substring]);

                                // Initialization > Substring (Includes Null Terminator Character, Iterator)
                                var substringIncludesNullTerminatorCharacter = false, substringIterator = LDKF.arrayPrototypeLength(substring);

                                // Loop
                                while (substringIterator) {
                                    // Initialization > (Substring Element, String Iterator)
                                    var substringElement = substring[substringIterator -= 1],
                                        substringElementLength = LDKF.stringPrototypeLength(substringElement),
                                        stringIterator = LDKF.stringPrototypeIndexFrom(string, substringElement, STRICT = stringLength, STRICT = substringElementLength);

                                    // Update > Substring Includes Null Terminator Character
                                    substringIncludesNullTerminatorCharacter || (substringIncludesNullTerminatorCharacter = substringElement == '\0');

                                    // Logic
                                    if (~stringIterator) {
                                        // (Loop > )Update > ...
                                        stringIterator += substringElementLength - 1;
                                        while (stringIterator ^ stringLength) { stringAfter += LDKF.stringPrototypeCharacterAt(string, stringIterator); stringIterator += 1 }
                                        substringIterator = +0
                                    }

                                    else if (!substringIterator && substringIncludesNullTerminatorCharacter) { /* Some code here... */ }
                                }
                            }

                            // Return
                            return stringAfter
                        };

                        // After From Back
                        LapysDevelopmentKit.Functions.stringPrototypeAfterFromBack = function stringPrototypeAfterFromBack(string, substring, STRING_LENGTH) {
                            // Initialization > String (After, Length)
                            var stringAfter = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Update > Substring
                                LDKF.isString(substring) && (substring = [substring]);

                                // Initialization > Substring (Includes Null Terminator Character, Iterator)
                                var substringIncludesNullTerminatorCharacter = false, substringIterator = LDKF.arrayPrototypeLength(substring);

                                // Loop
                                while (substringIterator) {
                                    // Initialization > (Substring Element, String Iterator)
                                    var substringElement = substring[substringIterator -= 1],
                                        substringElementLength = LDKF.stringPrototypeLength(substringElement),
                                        stringIterator = LDKF.stringPrototypeIndexFromBack(string, substringElement, STRICT = stringLength, STRICT = substringElementLength);

                                    // Update > Substring Includes Null Terminator Character
                                    substringIncludesNullTerminatorCharacter || (substringIncludesNullTerminatorCharacter = substringElement == '\0');

                                    // Logic
                                    if (~stringIterator) {
                                        // (Loop > )Update > ...
                                        stringIterator += substringElementLength - 1;
                                        while (stringIterator ^ stringLength) { stringAfter += LDKF.stringPrototypeCharacterAt(string, stringIterator); stringIterator += 1 }
                                        substringIterator = +0
                                    }

                                    else if (!substringIterator && substringIncludesNullTerminatorCharacter)
                                        // Update > String After
                                        stringAfter = string
                                }
                            }

                            // Return
                            return stringAfter
                        };

                        // After From Front
                        LapysDevelopmentKit.Functions.stringPrototypeAfterFromFront = function stringPrototypeAfterFromFront(string, substring, STRING_LENGTH) {
                            // Initialization > String (After, Length)
                            var stringAfter = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Update > Substring
                                LDKF.isString(substring) && (substring = [substring]);

                                // Initialization > Substring (Includes Null Terminator Character, Iterator)
                                var substringIncludesNullTerminatorCharacter = false, substringIterator = LDKF.arrayPrototypeLength(substring);

                                // Loop
                                while (substringIterator) {
                                    // Initialization > (Substring Element, String Iterator)
                                    var substringElement = substring[substringIterator -= 1],
                                        substringElementLength = LDKF.stringPrototypeLength(substringElement),
                                        stringIterator = LDKF.stringPrototypeIndexFromFront(string, substringElement, STRICT = stringLength, STRICT = substringElementLength);

                                    // Update > Substring Includes Null Terminator Character
                                    substringIncludesNullTerminatorCharacter || (substringIncludesNullTerminatorCharacter = substringElement == '\0');

                                    // Logic
                                    if (~stringIterator) {
                                        // (Loop > )Update > ...
                                        stringIterator += substringElementLength - 1;
                                        while (stringIterator ^ stringLength) { stringAfter += LDKF.stringPrototypeCharacterAt(string, stringIterator); stringIterator += 1 }
                                        substringIterator = +0
                                    }
                                }
                            }

                            // Return
                            return stringAfter
                        };

                        // Before
                        LapysDevelopmentKit.Functions.stringPrototypeBefore = function stringPrototypeBefore(string, substring, STRING_LENGTH) { return LDKF.stringPrototypeBeforeFromFront(string, substring, STRICT = STRING_LENGTH) };

                        // Before From
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeFrom = function stringPrototypeBeforeFrom(string, substring, STRING_LENGTH) {
                            // Initialization > String (Before, Length)
                            var stringBefore = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Update > Substring
                                LDKF.isString(substring) && (substring = [substring]);

                                // Initialization > Substring (Includes Null Terminator Character, Iterator)
                                var substringIncludesNullTerminatorCharacter = false, substringIterator = LDKF.arrayPrototypeLength(substring);

                                // Loop
                                while (substringIterator) {
                                    // Initialization > (Substring Element, String Iterator)
                                    var substringElement = substring[substringIterator -= 1],
                                        stringIterator = LDKF.stringPrototypeIndexFrom(string, substringElement, STRICT = stringLength);

                                    // Update > Substring Includes Null Terminator Character
                                    substringIncludesNullTerminatorCharacter || (substringIncludesNullTerminatorCharacter = substringElement == '\0');

                                    // Logic
                                    if (~stringIterator) {
                                        // (Loop > )Update > ...
                                        while (stringIterator) stringBefore = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) + stringBefore;
                                        substringIterator = +0
                                    }

                                    else if (!substringIterator && substringIncludesNullTerminatorCharacter) { /* Some code here... */ }
                                }
                            }

                            // Return
                            return stringBefore
                        };

                        // Before From Back
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeFromBack = function stringPrototypeBeforeFromBack(string, substring, STRING_LENGTH) {
                            // Initialization > String (Before, Length)
                            var stringBefore = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Update > Substring
                                LDKF.isString(substring) && (substring = [substring]);

                                // Initialization > Substring (Includes Null Terminator Character, Iterator)
                                var substringIncludesNullTerminatorCharacter = false, substringIterator = LDKF.arrayPrototypeLength(substring);

                                // Loop
                                while (substringIterator) {
                                    // Initialization > (Substring Element, String Iterator)
                                    var substringElement = substring[substringIterator -= 1],
                                        stringIterator = LDKF.stringPrototypeIndexFromBack(string, substringElement, STRICT = stringLength);

                                    // Update > Substring Includes Null Terminator Character
                                    substringIncludesNullTerminatorCharacter || (substringIncludesNullTerminatorCharacter = substringElement == '\0');

                                    // Logic
                                    if (~stringIterator) {
                                        // (Loop > )Update > ...
                                        while (stringIterator) stringBefore = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) + stringBefore;
                                        substringIterator = +0
                                    }
                                }
                            }

                            // Return
                            return stringBefore
                        };

                        // Before From Front
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeFromFront = function stringPrototypeBeforeFromFront(string, substring, STRING_LENGTH) {
                            // Initialization > String (Before, Length)
                            var stringBefore = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Update > Substring
                                LDKF.isString(substring) && (substring = [substring]);

                                // Initialization > Substring (Includes Null Terminator Character, Iterator)
                                var substringIncludesNullTerminatorCharacter = false, substringIterator = LDKF.arrayPrototypeLength(substring);

                                // Loop
                                while (substringIterator) {
                                    // Initialization > (Substring Element, String Iterator)
                                    var substringElement = substring[substringIterator -= 1],
                                        stringIterator = LDKF.stringPrototypeIndexFromFront(string, substringElement, STRICT = stringLength);

                                    // Update > Substring Includes Null Terminator Character
                                    substringIncludesNullTerminatorCharacter || (substringIncludesNullTerminatorCharacter = substringElement == '\0');

                                    // Logic
                                    if (~stringIterator) {
                                        // (Loop > )Update > ...
                                        while (stringIterator) stringBefore = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) + stringBefore;
                                        substringIterator = +0
                                    }

                                    else if (!substringIterator && substringIncludesNullTerminatorCharacter)
                                        // Update > String Before
                                        stringBefore = string
                                }
                            }

                            // Return
                            return stringBefore
                        };

                        // Begins With
                        LapysDevelopmentKit.Functions.stringPrototypeBeginsWith = function stringPrototypeBeginsWith(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return substring ? LDKF.stringPrototypeSlice(string, +0, (SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) - 1, STRICT = STRING_LENGTH) == substring : true };

                        // Camel --- NOTE (Lapys) -> Or Bumpy-case, Pascal-case e.t.c.
                        LapysDevelopmentKit.Functions.stringPrototypeCamel = function stringPrototypeCamel(string, LOWER_CAMEL) {
                            // Initialization > String (Camel, Length, Iterator)
                            var stringCamel = "", stringLength = LDKF.stringPrototypeLength(string), stringIterator = stringLength;

                            // Loop
                            while (stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                // Update > String Camel --- MINIFY (Lapys)
                                LDKF.stringPrototypeIsAlphabet(character) && (stringCamel = (stringIterator ? ((stringIterator ? LDKF.stringPrototypeCharacterAt(string, stringIterator - 1) : "") == ' ' ? LDKF.stringPrototypeUpper(character) : LDKF.stringPrototypeLower(character)) : (LOWER_CAMEL ? LDKF.stringPrototypeLower : LDKF.stringPrototypeUpper)(character, STRICT = 1)) + stringCamel)
                            }

                            // Return
                            return stringCamel
                        };

                        // Character At --- NOTE (Lapys) -> Slower than array-like indexing because legacy environments do not support such.
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(string, index) { return string ? (LDKT.canParseStrings() ? LDKF.functionPrototypeCall(LDKO.stringPrototypeCharacterAt, string, index) || string[index] : string[index]) || null : null };

                        // Character Code At
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, index) {
                            // Logic > ...
                            if (string) {
                                // Logic
                                if (LDKO.stringPrototypeCharacterCodeAt) {
                                    // Initialization > Character Code
                                    var characterCode = LDKF.functionPrototypeCall(LDKO.stringPrototypeCharacterCodeAt, string, index);

                                    // Return
                                    return LDKF.isNumber(characterCode) ? characterCode : -1
                                }

                                else
                                    /* Logic > Return
                                            --- WARN (Lapys) -> ASCII characters only.
                                                Honestly, asserting the whole UTF character set was slowing down development with any text editor (including Notepad on Windows).
                                                Although the speed detriment did not show on any development environment running this code block.
                                    */
                                    switch (LDKF.stringPrototypeCharacterAt(string, index)) { case ' ': return 32; case '!': return 33; case '"': return 34; case '#': return 35; case '$': return 36; case '%': return 37; case '&': return 38; case '\'': return 39; case '(': return 40; case ')': return 41; case '*': return 42; case '+': return 43; case ',': return 44; case '-': return 45; case '.': return 46; case '/': return 47; case '0': return 48; case '1': return 49; case '2': return 50; case '3': return 51; case '4': return 52; case '5': return 53; case '6': return 54; case '7': return 55; case '8': return 56; case '9': return 57; case ':': return 58; case ';': return 59; case '<': return 60; case '=': return 61; case '>': return 62; case '?': return 63; case '@': return 64; case 'A': return 65; case 'B': return 66; case 'C': return 67; case 'D': return 68; case 'E': return 69; case 'F': return 70; case 'G': return 71; case 'H': return 72; case 'I': return 73; case 'J': return 74; case 'K': return 75; case 'L': return 76; case 'M': return 77; case 'N': return 78; case 'O': return 79; case 'P': return 80; case 'Q': return 81; case 'R': return 82; case 'S': return 83; case 'T': return 84; case 'U': return 85; case 'V': return 86; case 'W': return 87; case 'X': return 88; case 'Y': return 89; case 'Z': return 90; case '[': return 91; case '\\': return 92; case ']': return 93; case '^': return 94; case '_': return 95; case '`': return 96; case 'a': return 97; case 'b': return 98; case 'c': return 99; case 'd': return 100; case 'e': return 101; case 'f': return 102; case 'g': return 103; case 'h': return 104; case 'i': return 105; case 'j': return 106; case 'k': return 107; case 'l': return 108; case 'm': return 109; case 'n': return 110; case 'o': return 111; case 'p': return 112; case 'q': return 113; case 'r': return 114; case 's': return 115; case 't': return 116; case 'u': return 117; case 'v': return 118; case 'w': return 119; case 'x': return 120; case 'y': return 121; case 'z': return 122; case '{': return 123; case '|': return 124; case '}': return 125; case '~': return 126; case 'Ç': return 199; case 'ü': return 252; case 'é': return 233; case 'â': return 226; case 'ä': return 228; case 'à': return 224; case 'å': return 229; case 'ç': return 231; case 'ê': return 234; case 'ë': return 235; case 'è': return 232; case 'ï': return 239; case 'î': return 238; case 'ì': return 236; case 'Ä': return 196; case 'Å': return 197; case 'É': return 201; case 'æ': return 230; case 'Æ': return 198; case 'ô': return 244; case 'ö': return 246; case 'ò': return 242; case 'û': return 251; case 'ù': return 249; case 'ÿ': return 255; case 'Ö': return 214; case 'Ü': return 220; case 'ø': return 248; case '£': return 163; case 'Ø': return 216; case '×': return 215; case 'ƒ': return 402; case 'á': return 225; case 'í': return 237; case 'ó': return 243; case 'ú': return 250; case 'ñ': return 241; case 'Ñ': return 209; case 'ª': return 170; case 'º': return 186; case '¿': return 191; case '®': return 174; case '¬': return 172; case '½': return 189; case '¼': return 188; case '¡': return 161; case '«': return 171; case '»': return 187; case '░': return 9617; case '▒': return 9618; case '▓': return 9619; case '│': return 9474; case '┤': return 9508; case 'Á': return 193; case 'Â': return 194; case 'À': return 192; case '©': return 169; case '╣': return 9571; case '║': return 9553; case '╗': return 9559; case '╝': return 9565; case '¢': return 162; case '¥': return 165; case '┐': return 9488; case '└': return 9492; case '┴': return 9524; case '┬': return 9516; case '├': return 9500; case '─': return 9472; case '┼': return 9532; case 'ã': return 227; case 'Ã': return 195; case '╚': return 9562; case '╔': return 9556; case '╩': return 9577; case '╦': return 9574; case '╠': return 9568; case '═': return 9552; case '╬': return 9580; case '¤': return 164; case 'ð': return 240; case 'Ð': return 208; case 'Ê': return 202; case 'Ë': return 203; case 'È': return 200; case 'ı': return 305; case 'Í': return 205; case 'Î': return 206; case 'Ï': return 207; case '┘': return 9496; case '┌': return 9484; case '█': return 9608; case '▄': return 9604; case '¦': return 166; case 'Ì': return 204; case '▀': return 9600; case 'Ó': return 211; case 'ß': return 223; case 'Ô': return 212; case 'Ò': return 210; case 'õ': return 245; case 'Õ': return 213; case 'µ': return 181; case 'þ': return 254; case 'Þ': return 222; case 'Ú': return 218; case 'Û': return 219; case 'Ù': return 217; case 'ý': return 253; case 'Ý': return 221; case '¯': return 175; case '´': return 180; case '≡': return 8801; case '±': return 177; case '‗': return 8215; case '¾': return 190; case '¶': return 182; case '§': return 167; case '÷': return 247; case '¸': return 184; case '°': return 176; case '¨': return 168; case '·': return 183; case '¹': return 185; case '³': return 179; case '²': return 178; case '■': return 9632; case 'ñ': return 241; case 'Ñ': return 209; case '@': return 64; case '¿': return 191; case '?': return 63; case '¡': return 161; case '!': return 33; case ':': return 58; case '/': return 47; case '\\': return 92; case 'á': return 225; case 'é': return 233; case 'í': return 237; case 'ó': return 243; case 'ú': return 250; case 'Á': return 193; case 'É': return 201; case 'Í': return 205; case 'Ó': return 211; case 'Ú': return 218; case 'ä': return 228; case 'ë': return 235; case 'ï': return 239; case 'ö': return 246; case 'ü': return 252; case 'Ä': return 196; case 'Ë': return 203; case 'Ï': return 207; case 'Ö': return 214; case 'Ü': return 220; case '½': return 189; case '¼': return 188; case '¾': return 190; case '¹': return 185; case '³': return 179; case '²': return 178; case 'ƒ': return 402; case '±': return 177; case '×': return 215; case '÷': return 247; case '$': return 36; case '£': return 163; case '¥': return 165; case '¢': return 162; case '¤': return 164; case '®': return 174; case '©': return 169; case 'ª': return 170; case 'º': return 186; case '°': return 176; case '"': return 34; case '\'': return 39; case '(': return 40; case ')': return 41; case '[': return 91; case ']': return 93; case '{': return 123; case '}': return 125; case '«': return 171; case '»': return 187; case '': return 0; case '': return 1; case '': return 2; case '': return 3; case '': return 4; case '': return 5; case '': return 6; case '': return 7; case '': return 8; case '  ': return 9; case '': return 16; case '': return 17; case '': return 18; case '': return 19; case '': return 20; case '': return 21; case '': return 22; case '': return 23; case '': return 24; case '': return 25; case ' ': return 32; case '!': return 33; case '"': return 34; case '#': return 35; case '$': return 36; case '%': return 37; case '&': return 38; case '\'': return 39; case '(': return 40; case ')': return 41; case '0': return 48; case '1': return 49; case 'ħ': return 295; default: return LDKC.Numbers.NaN }
                            }

                            else
                                // Return
                                return -1
                        };

                        // Concatenate
                        LapysDevelopmentKit.Functions.stringPrototypeConcatenate = function stringPrototypeConcatenate(string, concatenationString) {
                            // Initialization > (Length, Iterator)
                            var length = LDKF.getArgumentsLength(arguments), iterator = length;

                            // Loop
                            while (iterator -= 1) string += arguments[length - iterator];

                            // Return
                            return string
                        };

                        // CSS Selector Source To HTML Element --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeCSSSelectorSourceToHTMLElement = function stringPrototypeCSSSelectorSourceToHTMLElement(source) {
                            // Logic
                            if (LDKF.stringPrototypeIsEmpty(source))
                                // Error
                                LDKF.throwDOMException("The selector provided must not be an empty string");

                            else {
                                // Initialization > (Element, Former Source)
                                var element = null, formerSource = source;

                                // Update > Source
                                source = LDKF.stringPrototypeTrim(source);

                                // Initialization > (Source (Length, Iterator), Attributes, Inner HTML, Is Valid Source, Tag Name, (Former) Mode)
                                var sourceLength = LDKF.stringPrototypeLength(source), sourceIterator = sourceLength;
                                var attributes = ["class=", "id=", "role="], attributesIndex = 2,
                                    innerHTML = "", isValidSource = sourceLength, tagName = "";
                                var formerMode = null, mode = "tag-name";

                                // Loop
                                while (isValidSource && (sourceIterator && ~sourceIterator)) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                    // Loop
                                    switch (mode) {
                                        // [Attribute Name]
                                        case "attribute-name":
                                            // Logic
                                            if (character == ']')
                                                // Update > Mode
                                                mode = "request-mode";

                                            else if (character == '-' || character == ' ' || character == '\n' || LDKF.stringPrototypeIsAlphabet(character) || LDKF.stringPrototypeIsDigit(character))
                                                // Update > Attributes
                                                attributes[attributesIndex] += character;

                                            else if (character == '=') {
                                                // Update > (Attributes, Mode)
                                                attributes[attributesIndex] += '=';
                                                mode = "attribute-value";
                                            }

                                            else if ((character == '~' || character == '^' || character == '|' || character == '$') && LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator) == '=') {
                                                // Update > (Attributes, Mode, Source Iterator)
                                                attributes[attributesIndex] += character + '=';
                                                mode = "attribute-value";
                                                sourceIterator -= 1
                                            }

                                            else
                                                // Update > Is Valid Source
                                                isValidSource = false;

                                            // ...
                                            break;

                                        case "attribute-value": case "attribute-value-token":
                                            // Logic
                                            if (character == '"')
                                                // Update > (Mode, Is Valid Source)
                                                LDKF.stringPrototypeLast(attributes[attributesIndex]) == '=' ||
                                                (function(previousCharacter) { return previousCharacter == '"' || previousCharacter == '\'' })(LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator - 2)) ?
                                                    mode = "attribute-value-delimiter-doubleQuotes" :
                                                    isValidSource = false;

                                            else if (character == '\'')
                                                // Update > (Mode, Is Valid Source)
                                                LDKF.stringPrototypeLast(attributes[attributesIndex]) == '=' ||
                                                (function(previousCharacter) { return previousCharacter == '"' || previousCharacter == '\'' })(LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator - 2)) ?
                                                    mode = "attribute-value-delimiter-singleQuotes" :
                                                    isValidSource = false;

                                            else if (character == ']' || ((character == ' ' || character == '\n') && mode == "attribute-value-token")) {
                                                // Update > (Is Valid Source, Mod)
                                                (LDKF.stringPrototypeLast(attributes[attributesIndex]) == '=') && (isValidSource = false);
                                                mode = "request-mode"
                                            }

                                            else if ((character == '~' || character == '#' || character == '.' || character == '[') && mode == "attribute-value-token") {
                                                // Update > (Mode, Source Iterator)
                                                mode = "request-mode";
                                                sourceIterator += 1
                                            }

                                            else if (character == ' ' || character == '\n') {
                                                // Initialization > Previous Character
                                                var previousCharacter = LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator - 2);

                                                // Loop > Update > Character
                                                while (character == ' ' || character == '\n') character = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                                // Update > (Is Valid Source, Source Iterator)
                                                ((previousCharacter == '=' && character == ']') || (previousCharacter != '=' && character != ']')) && (isValidSource = false);
                                                sourceIterator += 1
                                            }

                                            else
                                                // Update > Attributes
                                                attributes[attributesIndex] += character;

                                            // ...
                                            break;

                                        case "attribute-value-delimiter-doubleQuotes": case "attribute-value-delimiter-singleQuotes":
                                            // Logic
                                            if (character == '\\') {
                                                // Initialization > Next Character
                                                var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator);

                                                // Logic
                                                if (
                                                    nextCharacter == '\\' ||
                                                    (mode == "attribute-value-delimiter-doubleQuotes" && nextCharacter == '"') ||
                                                    (mode == "attribute-value-delimiter-singleQuotes" && nextCharacter == '\'')
                                                ) {
                                                    // Update > (Attributes, Source Iterator)
                                                    attributes[attributesIndex] += nextCharacter;
                                                    sourceIterator -= 1
                                                }
                                            }

                                            else if (
                                                (character == '"' && mode == "attribute-value-delimiter-doubleQuotes") ||
                                                (character == '\'' && mode == "attribute-value-delimiter-singleQuotes")
                                            )
                                                // Update > Mode
                                                mode = "attribute-value";

                                            else
                                                // Update > Attributes
                                                attributes[attributesIndex] += character;

                                            // ...
                                            break;

                                        // [Inner HTML]
                                        case "inner-html":
                                            // Update > Inner HTML
                                            innerHTML += character;

                                            // ...
                                            break;

                                        // [Request Mode]
                                        case "request-mode":
                                            // Logic
                                            if (character == ':')
                                                // Update > Mode
                                                mode = "inner-html";

                                            else if (character == '.') {
                                                // Update > (Attributes, Mode)
                                                attributes[attributesIndex += 1] = "class~=";
                                                mode = "attribute-value-token"
                                            }

                                            else if (character == '#') {
                                                // Update > (Attributes, Mode)
                                                attributes[attributesIndex += 1] = "id~=";
                                                mode = "attribute-value-token"
                                            }

                                            else if (character == '~') {
                                                // Update > (Attributes, Mode)
                                                attributes[attributesIndex += 1] = "role~=";
                                                mode = "attribute-value-token"
                                            }

                                            else if (character == '[') {
                                                // Update > (Attributes, Mode)
                                                attributes[attributesIndex += 1] = "";
                                                mode = "attribute-name"
                                            }

                                            else if (character != ' ' && character != '\n')
                                                // Update > Is Valid Source
                                                isValidSource = false;

                                            // ...
                                            break;

                                        // [Tag Name]
                                        case "tag-name":
                                            // Logic
                                            if (character == '*') {
                                                // Update > (Mode, Tag Name)
                                                mode = "request-mode";
                                                tagName = LDKF.arrayPrototypeRandom(LDKC.Strings.htmlElementTagNames);
                                            }

                                            else if (character == ' ' || character == '\n' || LDKF.stringPrototypeIsAlphabet(character) || (character == '-' || LDKF.stringPrototypeIsDigit(character)) && (sourceIterator ^ (sourceLength - 1)))
                                                // Update > Tag Name
                                                tagName += character;

                                            else if (character == ':' || character == '.' || character == '#' || character == '~' || character == '[') {
                                                // Update > (Mode, Source Iterator)
                                                mode = "request-mode";
                                                sourceIterator += 1
                                            }

                                            else
                                                // Update > Is Valid Source
                                                isValidSource = false
                                    }

                                    // Update > Former Mode
                                    formerMode = mode
                                }

                                // Update > Is Valid Source
                                (mode == "attribute-value-delimiter-doubleQuotes" || mode == "attribute-value-delimiter-singleQuotes") && (isValidSource = false);

                                // Logic
                                if (isValidSource) {
                                    // Initialization > Attributes (Names, Length, Iterator)
                                    var attributesNames = [],
                                        attributesLength = attributesIndex + 1,
                                        attributesIterator = attributesLength;

                                    // Loop
                                    while (attributesIterator && isValidSource) {
                                        // Initialization > Attribute
                                        var attribute = LDKF.stringPrototypeTrimLeft(attributes[attributesIterator -= 1], [' ', '\n']);

                                        // Update > Is Valid Source
                                        LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeFirst(attribute)) || (isValidSource = false);

                                        // Logic
                                        if (isValidSource) {
                                            attributes[attributesIterator] = attribute
                                        }
                                    }

                                    // Logic
                                    if (isValidSource) {
                                        var formerSourceIterator = LDKF.stringPrototypeLength(formerSource), innerHTMLRightTrim = "";
                                        while (formerSourceIterator) {
                                            var character = LDKF.stringPrototypeCharacterAt(formerSource, formerSourceIterator -= 1);
                                            character == ' ' || character == '\n' ?
                                                innerHTMLRightTrim = character + innerHTMLRightTrim:
                                                formerSourceIterator = +0
                                        }
                                        innerHTMLRightTrim && (innerHTML += innerHTMLRightTrim);

                                        element = LDKF.documentPrototypeCreateElement(tagName);
                                        attributesIterator = attributesLength;
                                        while (attributesIterator) {
                                            var attribute = attributes[attributesIterator -= 1],
                                                attributeLength = LDKF.stringPrototypeLength(attribute), attributeIterator = attributeLength,
                                                attributeName = "", attributeValue = "",
                                                hasIndexedAttributeValue = false;
                                            while (attributeIterator) {
                                                var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);
                                                if (hasIndexedAttributeValue) attributeValue += character;
                                                else if (character == '=') hasIndexedAttributeValue = true;
                                                else attributeName += character
                                            }
                                            LDKF.elementPrototypeSetAttribute(element, attributeName, attributeValue)
                                        }

                                        // SET THE INNER HTML
                                    }
                                }

                                // Error
                                isValidSource || LDKF.throwDOMException("The selector provided must be a valid CSS selector");

                                // Return
                                return element
                            }
                        };

                        // Cut
                        LapysDevelopmentKit.Functions.stringPrototypeCut = function stringPrototypeCut(string, length, STRING_LENGTH) { return LDKF.stringPrototypeCutLeft(LDKF.stringPrototypeCutRight(string, length, STRING_LENGTH), length, STRING_LENGTH) };

                        // Cut At
                        LapysDevelopmentKit.Functions.stringPrototypeCutAt = function stringPrototypeCutAt(string, index, STRING_LENGTH) {
                            // Initialization > (Cut, String Length)
                            var cut = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Initialization > String Iterator
                                var stringIterator = +0;

                                // (Logic > )Loop > Update > Cut
                                while (stringIterator ^ index) cut += LDKF.stringPrototypeCharacterAt(string, (stringIterator += 1) - 1);
                                if (index < stringLength) while (index ^ stringLength - 1) cut += LDKF.stringPrototypeCharacterAt(string, index += 1)
                            }

                            // Return
                            return cut
                        };

                        // Cut Left
                        LapysDevelopmentKit.Functions.stringPrototypeCutLeft = function stringPrototypeCutLeft(string, length, STRING_LENGTH) {
                            // Logic
                            if (length) {
                                // Initialization > (Cut, String Length)
                                var cut = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                                // Logic > Loop > Update > (Cut, Length)
                                if (stringLength && length < stringLength) while (length ^ stringLength) { cut += LDKF.stringPrototypeCharacterAt(string, length); length += 1 }

                                // Return
                                return cut
                            }

                            else
                                // Return
                                return string
                        };

                        // Cut Right
                        LapysDevelopmentKit.Functions.stringPrototypeCutRight = function stringPrototypeCutRight(string, length, STRING_LENGTH) {
                            // Logic
                            if (length) {
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
                            }

                            else
                                // Return
                                return string
                        };

                        // Cut Through
                        LapysDevelopmentKit.Functions.stringPrototypeCutThrough = function stringPrototypeCutThrough(string, indexA, indexB, STRING_LENGTH) {
                            // Initialization > (Cut, String Length)
                            var cut = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength) {
                                // Initialization > String Iterator
                                var stringIterator = +0;

                                // (Loop > )Update > ...
                                (indexA > stringLength) && (indexA = stringLength);
                                while (stringIterator ^ indexA) cut += LDKF.stringPrototypeCharacterAt(string, (stringIterator += 1) - 1);

                                // (Logic > )Update > ...
                                stringIterator = indexB;
                                if (stringIterator < stringLength) while (stringIterator ^ (stringLength - 1)) cut += LDKF.stringPrototypeCharacterAt(string, stringIterator += 1);
                            }

                            // Return
                            return cut
                        };

                        // Ends With --- MINIFY (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeEndsWith = function stringPrototypeEndsWith(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { if (substring) { var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string); return LDKF.stringPrototypeSlice(string, stringLength - (SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)), stringLength, STRICT = stringLength) == substring } else return true };

                        // First
                        LapysDevelopmentKit.Functions.stringPrototypeFirst = function stringPrototypeFirst(string) { return LDKF.stringPrototypeCharacterAt(string, +0) };

                        // Identifier --- NOTE (Lapys) -> To Identifier-like-casing.
                        LapysDevelopmentKit.Functions.stringPrototypeIdentifier = function stringPrototypeIdentifier(string, STRING_LENGTH) {
                            // Initialization > String Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Return
                            return LDKF.stringPrototypeLower(LDKF.stringPrototypeFirst(string)) + LDKF.stringPrototypeSlice(string, 1, stringLength, STRICT = stringLength)
                        };

                        // Includes
                        LapysDevelopmentKit.Functions.stringPrototypeIncludes = function stringPrototypeIncludes(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > (String, Substring) Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);

                            // Logic
                            if (!substringLength)
                                // Return
                                return true;

                            else if (stringLength == substringLength)
                                // Return
                                return string == substring;

                            else if (substringLength == 1) {
                                // Initialization > (Stop Length, String Iterator)
                                var stopLength = LDKM.int(stringLength / 4, STRICT = true),
                                    stringIterator = stringLength - ((stopLength * 3) - 1);

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic > Return
                                    if (
                                        LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator) == substring ||
                                        LDKF.stringPrototypeCharacterAt(string, stringLength - stopLength - stringIterator) == substring ||
                                        LDKF.stringPrototypeCharacterAt(string, stringIterator + stopLength) == substring ||
                                        LDKF.stringPrototypeCharacterAt(string, stringIterator) == substring
                                    ) return true
                                }

                                // Return
                                return false
                            }

                            else if (
                                LDKF.stringPrototypeBeginsWith(string, substring, STRICT = stringLength, STRICT = substringLength) ||
                                LDKF.stringPrototypeEndsWith(string, substring, STRICT = stringLength, STRICT = substringLength)
                            )
                                // Return
                                return true;

                            else if (stringLength > substringLength) {
                                // Initialization > String Iterator
                                var stringIterator = stringLength;

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic
                                    if (LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator - 1) == LDKF.stringPrototypeFirst(substring)) {
                                        // Initialization > String (Index)
                                        var index = substringLength - 1, stringIndex = stringLength - stringIterator - 1;

                                        // Loop > Update > Index
                                        while (index ^ 1 && LDKF.stringPrototypeCharacterAt(string, stringIndex + index) == LDKF.stringPrototypeCharacterAt(substring, index)) index -= 1;

                                        // Logic
                                        if (index == 1 && LDKF.stringPrototypeCharacterAt(string, stringIndex + 1) == LDKF.stringPrototypeCharacterAt(substring, 1))
                                            // Return
                                            return true
                                    }

                                    else if (LDKF.stringPrototypeCharacterAt(string, stringIterator) == LDKF.stringPrototypeLast(substring, STRICT = substringLength)) {
                                        // Initialization > Index
                                        var index = +0;

                                        // Loop > Update > Index
                                        while (index ^ (substringLength - 1) && LDKF.stringPrototypeCharacterAt(string, stringIterator - index) == LDKF.stringPrototypeCharacterAt(substring, substringLength - index - 1)) index += 1;

                                        // Logic > Return
                                        if (index == substringLength - 1 && LDKF.stringPrototypeCharacterAt(string, stringIterator - index) == LDKF.stringPrototypeFirst(substring))
                                            return true
                                    }
                                }

                                // Return
                                return false
                            }

                            else
                                // Return
                                return false
                        };

                        // Index
                        LapysDevelopmentKit.Functions.stringPrototypeIndex = function stringPrototypeIndex(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeIndexFrom(string, substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Index From
                        LapysDevelopmentKit.Functions.stringPrototypeIndexFrom = function stringPrototypeIndexFrom(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > (String, Substring) Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);

                            // Logic
                            if (!substringLength)
                                // Return
                                return -0;

                            else if (stringLength == substringLength)
                                // Return
                                return string == substring ? +0 : -1;

                            else if (substringLength == 1) {
                                // Initialization > (Stop Length, String (Index, Iterator))
                                var stopLength = LDKM.int(stringLength / 4, STRICT = true),
                                    stringIndex = -1,
                                    stringIterator = stringLength - ((stopLength * 3) - 1);

                                // Initialization > Stop Indexes
                                var stopIndexes = [];

                                // Loop
                                while (!~stringIndex && stringIterator) {
                                    // Update > (String Iterator, Stop Indexes)
                                    stringIterator -= 1;
                                    stopIndexes[+0] = stringLength - stringIterator;
                                    stopIndexes[1] = stringLength - stopLength - stringIterator;
                                    stopIndexes[2] = stringIterator + stopLength;
                                    stopIndexes[3] = stringIterator;

                                    // Logic > Return
                                    if (
                                        ((LDKF.stringPrototypeCharacterAt(string, stopIndexes[+0]) == substring) && (stringIndex = stopIndexes[+0] + 1)) ||
                                        ((LDKF.stringPrototypeCharacterAt(string, stopIndexes[1]) == substring) && (stringIndex = stopIndexes[1] + 1)) ||
                                        ((LDKF.stringPrototypeCharacterAt(string, stopIndexes[2]) == substring) && (stringIndex = stopIndexes[2] + 1)) ||
                                        ((LDKF.stringPrototypeCharacterAt(string, stopIndexes[3]) == substring) && (stringIndex = stopIndexes[3] + 1))
                                    ) return stringIndex - 1
                                }

                                // Return
                                return -1
                            }

                            else if (LDKF.stringPrototypeBeginsWith(string, substring, STRICT = stringLength, STRICT = substringLength))
                                // Return
                                return +0;

                            else if (LDKF.stringPrototypeEndsWith(string, substring, STRICT = stringLength, STRICT = substringLength))
                                // Return
                                return stringLength - substringLength;

                            else if (stringLength > substringLength) {
                                // Initialization > String Iterator
                                var stringIterator = stringLength;

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic
                                    if (LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator - 1) == LDKF.stringPrototypeFirst(substring)) {
                                        // Initialization > String (Index)
                                        var index = substringLength - 1, stringIndex = stringLength - stringIterator - 1;

                                        // Loop > Update > Index
                                        while (index ^ 1 && LDKF.stringPrototypeCharacterAt(string, stringIndex + index) == LDKF.stringPrototypeCharacterAt(substring, index)) index -= 1;

                                        // Logic
                                        if (index == 1 && LDKF.stringPrototypeCharacterAt(string, stringIndex + 1) == LDKF.stringPrototypeCharacterAt(substring, 1))
                                            // Return
                                            return stringIndex
                                    }

                                    else if (LDKF.stringPrototypeCharacterAt(string, stringIterator) == LDKF.stringPrototypeLast(substring, STRICT = substringLength)) {
                                        // Initialization > Index
                                        var index = +0;

                                        // Loop > Update > Index
                                        while (index ^ (substringLength - 1) && LDKF.stringPrototypeCharacterAt(string, stringIterator - index) == LDKF.stringPrototypeCharacterAt(substring, substringLength - index - 1)) index += 1;

                                        // Logic > Return
                                        if (index == substringLength - 1 && LDKF.stringPrototypeCharacterAt(string, stringIterator - index) == LDKF.stringPrototypeFirst(substring))
                                            return stringIterator - substringLength + 1
                                    }
                                }

                                // Return
                                return -1
                            }

                            else
                                // Return
                                return -1
                        };

                        // Index From Back
                        LapysDevelopmentKit.Functions.stringPrototypeIndexFromBack = function stringPrototypeIndexFromBack(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > (String, Substring) Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);

                            // Logic
                            if (!substringLength)
                                // Return
                                return -0;

                            else if (stringLength == substringLength)
                                // Return
                                return string == substring ? +0 : -1;

                            else if (substringLength == 1) {
                                // Initialization > String Iterator
                                var stringIterator = stringLength;

                                // Loop > Logic > Return
                                while (stringIterator) if (LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1) == substring) return stringLength - stringIterator - 1;

                                // Return
                                return -1
                            }

                            else if (LDKF.stringPrototypeBeginsWith(string, substring, STRICT = stringLength, STRICT = substringLength))
                                // Return
                                return +0;

                            else if (LDKF.stringPrototypeEndsWith(string, substring, STRICT = stringLength, STRICT = substringLength))
                                // Return
                                return stringLength - substringLength;

                            else if (stringLength > substringLength) {
                                // Initialization > String Iterator
                                var stringIterator = stringLength;

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic
                                    if (LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator - 1) == LDKF.stringPrototypeFirst(substring)) {
                                        // Initialization > Substring Iterator
                                        var substringIterator = +0;

                                        // Loop > Update > (String, Substring) Iterator
                                        do { stringIterator -= 1; substringIterator += 1 } while (
                                            stringIterator && substringIterator ^ substringLength &&
                                            LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator - 1) == LDKF.stringPrototypeCharacterAt(substring, substringIterator)
                                        );

                                        // Logic > Return
                                        if (substringIterator == substringLength)
                                            return (stringLength - stringIterator - 1) - substringIterator
                                    }
                                }

                                // Return
                                return -1
                            }

                            else
                                // Return
                                return -1
                        };

                        // Index From Front
                        LapysDevelopmentKit.Functions.stringPrototypeIndexFromFront = function stringPrototypeIndexFromFront(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > (String, Substring) Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);

                            // Logic
                            if (!substringLength)
                                // Return
                                return -0;

                            else if (stringLength == substringLength)
                                // Return
                                return string == substring ? +0 : -1;

                            else if (substringLength == 1) {
                                // Initialization > String Iterator
                                var stringIterator = stringLength;

                                // Loop > Logic > Return
                                while (stringIterator) if (LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) == substring) return stringIterator;

                                // Return
                                return -1
                            }

                            else if (LDKF.stringPrototypeBeginsWith(string, substring, STRICT = stringLength, STRICT = substringLength))
                                // Return
                                return +0;

                            else if (LDKF.stringPrototypeEndsWith(string, substring, STRICT = stringLength, STRICT = substringLength))
                                // Return
                                return stringLength - substringLength;

                            else if (stringLength > substringLength) {
                                // Initialization > String Iterator
                                var stringIterator = stringLength;

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic
                                    if (LDKF.stringPrototypeCharacterAt(string, stringIterator) == LDKF.stringPrototypeLast(substring, STRICT = substringLength)) {
                                        // Initialization > Substring Iterator
                                        var substringIterator = 1;

                                        // Loop > Update > (String, Substring) Iterator
                                        do { stringIterator -= 1; substringIterator += 1 } while (
                                            stringIterator && substringIterator ^ substringLength - 1 &&
                                            LDKF.stringPrototypeCharacterAt(string, stringIterator) == LDKF.stringPrototypeCharacterAt(substring, substringLength - substringIterator)
                                        );

                                        // Logic > Return
                                        if (substringIterator == substringLength - 1)
                                            return stringIterator - 1
                                    }
                                }

                                // Return
                                return -1
                            }

                            else
                                // Return
                                return -1
                        };

                        // Instance
                        LapysDevelopmentKit.Functions.stringPrototypeInstance = function stringPrototypeInstance(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > (Instance, String (Length, Iterator), Substring Length)
                            var instance = {count: +0, instances: []},
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIterator = stringLength,
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);

                            // Logic
                            if (substringLength)
                                // Logic
                                if (substringLength == 1) {
                                    // Loop
                                    while (stringIterator)
                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1) == substring) {
                                            // Update > (Instance > ...)
                                            instance.instances[instance.count] = stringLength - stringIterator - 1;
                                            instance.count += 1
                                        }
                                }

                                else {
                                    // Loop
                                    while (stringIterator)
                                        // Logic
                                        if (stringIterator == substringLength - 1)
                                            // Update > String Iterator
                                            stringIterator = +0;

                                        else if (LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1) == LDKF.stringPrototypeFirst(substring)) {
                                            // Initialization > (String Index, Substring Iterator)
                                            var stringIndex = stringLength - stringIterator - 1,
                                                substringIterator = substringLength - 1;

                                            // Loop
                                            while (substringIterator) {
                                                // Update > Substring Iterator
                                                substringIterator -= 1;

                                                // Logic
                                                if (LDKF.stringPrototypeCharacterAt(string, stringIndex + (substringLength - substringIterator - 1)) != LDKF.stringPrototypeCharacterAt(substring, substringLength - substringIterator - 1))
                                                    // Update > Substring Iterator
                                                    substringIterator = +0;

                                                else if (!substringIterator && LDKF.stringPrototypeCharacterAt(string, stringIndex + (substringLength - 1)) == LDKF.stringPrototypeLast(substring, STRICT = substringLength)) {
                                                    // Update > (Instance > ...)
                                                    instance.instances[instance.count] = stringIndex;
                                                    instance.count += 1
                                                }
                                            }
                                        }
                                }

                            else
                                // Loop
                                while (stringIterator) {
                                    // Update > (Instance > ...)
                                    instance.instances[instance.count] = stringLength - (stringIterator -= 1) - 1;
                                    instance.count += 1
                                }

                            // Return
                            return instance
                        };

                        // Is Alphabet
                        LapysDevelopmentKit.Functions.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.alphabets, string, STRICT = 52) };

                        // Is ASCII Character
                        LapysDevelopmentKit.Functions.stringPrototypeIsASCIICharacter = function stringPrototypeIsASCIICharacter(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.asciiCharacters, string, STRICT = 315) };

                        // Is Character Encoding --- MINIFY (Lapys) -> Hexadecimal is asserted as valid encoding.`
                        LapysDevelopmentKit.Functions.stringPrototypeIsCharacterEncoding = function stringPrototypeIsCharacterEncoding(string, STRING_LENGTH) { string = LDKF.stringPrototypeLower(LDKF.stringPrototypeRemoveAll(string, ' ', STRICT = STRING_LENGTH, STRICT = 1)); return string == "ascii" || string == "cp1047" || string == "cp37" || string == "cp437" || string == "cp720" || string == "cp737" || string == "cp850" || string == "cp852" || string == "cp855" || string == "cp857" || string == "cp858" || string == "cp860" || string == "cp861" || string == "cp862" || string == "cp863" || string == "cp865" || string == "cp866" || string == "cp869" || string == "cp872" || string == "cp930" || string == "euc-jis-2004" || string == "euc-jp" || string == "euc-kr" || string == "gbk" || string == "gb18030" || string == "gb2312" || string == "hexadecimal" || string == "hkscs" || string == "iso8859-1" || string == "iso8859-10" || string == "iso8859-11" || string == "iso8859-13" || string == "iso8859-14" || string == "iso8859-15" || string == "iso8859-16" || string == "iso8859-2" || string == "iso8859-3" || string == "iso8859-5" || string == "iso8859-6" || string == "iso8859-7" || string == "iso8859-8" || string == "iso8859-9" || string == "iso-2022-jp" || string == "iso-2022-jp-2004" || string == "iso-2022-kr" || string == "ksx1001" || string == "macroman" || string == "shift_jis-2004" || string == "shiftjis" || string == "utf-16" || string == "utf-32" || string == "utf-8" || string == "windows-1250" || string == "windows-1251" || string == "windows-1252" || string == "windows-1253" || string == "windows-1254" || string == "windows-1255" || string == "windows-1256" || string == "windows-1257" || string == "windows-1258" };

                        // Is CMYK Color --- NOTE (Lapys) -> There is no drafted support for a `CMYKA` color code standard.
                        LapysDevelopmentKit.Functions.stringPrototypeIsCMYKColor = function stringPrototypeIsCMYKColor(string, STRING_LENGTH) {
                            // Initialization > String (Length, Is CMYK Color)
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIsCMYKColor = (stringLength && (stringLength ^ 1) && (stringLength ^ 2) && (stringLength ^ 3) && (stringLength ^ 4) && (stringLength ^ 5) && (stringLength ^ 6) && (stringLength ^ 7) && (stringLength ^ 8) && (stringLength ^ 9) && (stringLength ^ 10) && (stringLength ^ 11) && (stringLength ^ 12)) && (
                                    LDKF.stringPrototypeFirst(string) == 'c' &&
                                    LDKF.stringPrototypeCharacterAt(string, 1) == 'm' &&
                                    LDKF.stringPrototypeCharacterAt(string, 2) == 'y' &&
                                    LDKF.stringPrototypeCharacterAt(string, 3) == 'k' &&
                                    LDKF.stringPrototypeCharacterAt(string, 4) == '('
                                );

                            // Logic
                            if (stringIsCMYKColor) {
                                // Initialization > (Color ((Range) (Delimiter, Delimiters (Length)), Ranges (Length)), String Iterator)
                                var colorRange = "",
                                    colorRangeDelimiter = "",
                                    colorRangeDelimiters = [],
                                    colorRangeDelimitersLength = +0,
                                    colorRanges = [],
                                    colorRangesLength = +0,
                                    stringIterator = stringLength - 5;

                                // Loop
                                while (stringIterator) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                    // Logic
                                    if (character == ')') {
                                        // Initialization > Delimiter
                                        var delimiter = character;

                                        // Loop > Update > Delimiter
                                        while (stringIterator) delimiter += LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                        // Update > String Is CMYK Color
                                        stringIsCMYKColor = LDKF.stringPrototypeTrimRight(delimiter) == ')'
                                    }

                                    else if (character == ',' || character == ' ' || character == '\n') {
                                        // Update > Color Range Delimiter
                                        colorRangeDelimiter += character;

                                        // Logic
                                        if (colorRange) {
                                            // Update > (Color Ranges (Length), Color Range)
                                            colorRanges[colorRangesLength] = colorRange;
                                            colorRange = "";
                                            colorRangesLength += 1
                                        }
                                    }

                                    else {
                                        // Update > Color Range
                                        colorRange += character;

                                        // Logic
                                        if (colorRangeDelimiter) {
                                            // Update > (Color Delimiters (Length), Color Delimiter)
                                            colorRangeDelimiters[colorRangeDelimitersLength] = colorRangeDelimiter;
                                            colorRangeDelimiter = "";
                                            colorRangeDelimitersLength += 1
                                        }
                                    }
                                }

                                // Logic
                                if (stringIsCMYKColor) {
                                    // Logic > Update > ...
                                    if (colorRange) { colorRanges[colorRangesLength] = colorRange; colorRangesLength += 1 }
                                    if (colorRangeDelimiter) { colorRangeDelimiters[colorRangeDelimitersLength] = colorRangeDelimiter; colorRangeDelimitersLength += 1 }

                                    // Update > String Is CMYK Color
                                    stringIsCMYKColor = colorRangesLength == 4 && colorRangeDelimitersLength == 3;

                                    // Logic
                                    if (stringIsCMYKColor) {
                                        // Initialization > Color Range Delimiters Iterator
                                        var colorRangeDelimitersIterator = colorRangeDelimitersLength;

                                        // Loop
                                        while (colorRangeDelimitersIterator) {
                                            // Update > Color Range Delimiter
                                            colorRangeDelimiter = LDKF.stringPrototypeTrim(colorRangeDelimiters[colorRangeDelimitersIterator -= 1], [' ', '\n']);

                                            // Logic > Update > Color Range Delimiters
                                            if (colorRangeDelimiter == ',') colorRangeDelimiters[colorRangeDelimitersIterator] = ',';
                                            else if (!colorRangeDelimiter) colorRangeDelimiters[colorRangeDelimitersIterator] = ' '
                                        }

                                        // Update > String Is CMYK Color
                                        stringIsCMYKColor = (colorRangeDelimiters[+0] == ',' && colorRangeDelimiters[1] == ',' && colorRangeDelimiters[2] == ',') ||
                                            (colorRangeDelimiters[+0] == ' ' && colorRangeDelimiters[1] == ' ' && colorRangeDelimiters[2] == ' ');

                                        // Logic
                                        if (stringIsCMYKColor) {
                                            // Initialization > (Color Range Type, Color Range Iterator)
                                            var colorRangeType = null,
                                                colorRangesIterator = colorRangesLength;

                                            // Loop
                                            while (stringIsCMYKColor && colorRangesIterator) {
                                                // Update > Color Range
                                                colorRange = LDKF.stringPrototypeTrim(colorRanges[colorRangesIterator -= 1], [' ', '\n']);

                                                // Initialization > Color Range Length
                                                var colorRangeLength = LDKF.stringPrototypeLength(colorRange);

                                                // Logic
                                                if (LDKF.stringPrototypeLast(colorRange, STRICT = colorRangeLength) == '%')
                                                    // Logic
                                                    if (colorRangeType && colorRangeType != "ratio")
                                                        // Update > String Is CMYK Color
                                                        stringIsCMYKColor = false;

                                                    else {
                                                        // Update > ((Color Range) (Length, Type), String Is CMYK Color)
                                                        colorRange = LDKF.stringPrototypeCutRight(colorRange, 1, STRICT = colorRangeLength);
                                                        colorRangeLength -= 1;
                                                        colorRangeType = "ratio";

                                                        stringIsCYMKColor = LDKF.stringPrototypeIsPositiveNumericInteger(colorRange, STRICT = colorRangeLength) ||
                                                            LDKF.stringPrototypeIsPositiveNumericDecimal(colorRange, STRICT = colorRangeLength);

                                                        // Logic
                                                        if (stringIsCMYKColor) {
                                                            // Update > (Color Range, String Is CMYK Color)
                                                            colorRange = LDKF.toNumber(colorRange);
                                                            stringIsCMYKColor = colorRange > -1 && colorRange <= 100
                                                        }
                                                    }

                                                else
                                                    // Logic
                                                    if (colorRangeType && colorRangeType != "unit")
                                                        // Update > String Is CMYK Color
                                                        stringIsCMYKColor = false;

                                                    else {
                                                        // Update > (Color Range Type, String Is CMYK Color)
                                                        colorRangeType = "unit";
                                                        stringIsCMYKColor = colorRange == '0' || colorRange == '1' || colorRange == '2' || colorRange == '3' || colorRange == '4' || colorRange == '5' || colorRange == '6' || colorRange == '7' || colorRange == '8' || colorRange == '9' || colorRange == "10" || colorRange == "11" || colorRange == "12" || colorRange == "13" || colorRange == "14" || colorRange == "15" || colorRange == "16" || colorRange == "17" || colorRange == "18" || colorRange == "19" || colorRange == "20" || colorRange == "21" || colorRange == "22" || colorRange == "23" || colorRange == "24" || colorRange == "25" || colorRange == "26" || colorRange == "27" || colorRange == "28" || colorRange == "29" || colorRange == "30" || colorRange == "31" || colorRange == "32" || colorRange == "33" || colorRange == "34" || colorRange == "35" || colorRange == "36" || colorRange == "37" || colorRange == "38" || colorRange == "39" || colorRange == "40" || colorRange == "41" || colorRange == "42" || colorRange == "43" || colorRange == "44" || colorRange == "45" || colorRange == "46" || colorRange == "47" || colorRange == "48" || colorRange == "49" || colorRange == "50" || colorRange == "51" || colorRange == "52" || colorRange == "53" || colorRange == "54" || colorRange == "55" || colorRange == "56" || colorRange == "57" || colorRange == "58" || colorRange == "59" || colorRange == "60" || colorRange == "61" || colorRange == "62" || colorRange == "63" || colorRange == "64" || colorRange == "65" || colorRange == "66" || colorRange == "67" || colorRange == "68" || colorRange == "69" || colorRange == "70" || colorRange == "71" || colorRange == "72" || colorRange == "73" || colorRange == "74" || colorRange == "75" || colorRange == "76" || colorRange == "77" || colorRange == "78" || colorRange == "79" || colorRange == "80" || colorRange == "81" || colorRange == "82" || colorRange == "83" || colorRange == "84" || colorRange == "85" || colorRange == "86" || colorRange == "87" || colorRange == "88" || colorRange == "89" || colorRange == "90" || colorRange == "91" || colorRange == "92" || colorRange == "93" || colorRange == "94" || colorRange == "95" || colorRange == "96" || colorRange == "97" || colorRange == "98" || colorRange == "99" || colorRange == "100" || colorRange == "101" || colorRange == "102" || colorRange == "103" || colorRange == "104" || colorRange == "105" || colorRange == "106" || colorRange == "107" || colorRange == "108" || colorRange == "109" || colorRange == "110" || colorRange == "111" || colorRange == "112" || colorRange == "113" || colorRange == "114" || colorRange == "115" || colorRange == "116" || colorRange == "117" || colorRange == "118" || colorRange == "119" || colorRange == "120" || colorRange == "121" || colorRange == "122" || colorRange == "123" || colorRange == "124" || colorRange == "125" || colorRange == "126" || colorRange == "127" || colorRange == "128" || colorRange == "129" || colorRange == "130" || colorRange == "131" || colorRange == "132" || colorRange == "133" || colorRange == "134" || colorRange == "135" || colorRange == "136" || colorRange == "137" || colorRange == "138" || colorRange == "139" || colorRange == "140" || colorRange == "141" || colorRange == "142" || colorRange == "143" || colorRange == "144" || colorRange == "145" || colorRange == "146" || colorRange == "147" || colorRange == "148" || colorRange == "149" || colorRange == "150" || colorRange == "151" || colorRange == "152" || colorRange == "153" || colorRange == "154" || colorRange == "155" || colorRange == "156" || colorRange == "157" || colorRange == "158" || colorRange == "159" || colorRange == "160" || colorRange == "161" || colorRange == "162" || colorRange == "163" || colorRange == "164" || colorRange == "165" || colorRange == "166" || colorRange == "167" || colorRange == "168" || colorRange == "169" || colorRange == "170" || colorRange == "171" || colorRange == "172" || colorRange == "173" || colorRange == "174" || colorRange == "175" || colorRange == "176" || colorRange == "177" || colorRange == "178" || colorRange == "179" || colorRange == "180" || colorRange == "181" || colorRange == "182" || colorRange == "183" || colorRange == "184" || colorRange == "185" || colorRange == "186" || colorRange == "187" || colorRange == "188" || colorRange == "189" || colorRange == "190" || colorRange == "191" || colorRange == "192" || colorRange == "193" || colorRange == "194" || colorRange == "195" || colorRange == "196" || colorRange == "197" || colorRange == "198" || colorRange == "199" || colorRange == "200" || colorRange == "201" || colorRange == "202" || colorRange == "203" || colorRange == "204" || colorRange == "205" || colorRange == "206" || colorRange == "207" || colorRange == "208" || colorRange == "209" || colorRange == "210" || colorRange == "211" || colorRange == "212" || colorRange == "213" || colorRange == "214" || colorRange == "215" || colorRange == "216" || colorRange == "217" || colorRange == "218" || colorRange == "219" || colorRange == "220" || colorRange == "221" || colorRange == "222" || colorRange == "223" || colorRange == "224" || colorRange == "225" || colorRange == "226" || colorRange == "227" || colorRange == "228" || colorRange == "229" || colorRange == "230" || colorRange == "231" || colorRange == "232" || colorRange == "233" || colorRange == "234" || colorRange == "235" || colorRange == "236" || colorRange == "237" || colorRange == "238" || colorRange == "239" || colorRange == "240" || colorRange == "241" || colorRange == "242" || colorRange == "243" || colorRange == "244" || colorRange == "245" || colorRange == "246" || colorRange == "247" || colorRange == "248" || colorRange == "249" || colorRange == "250" || colorRange == "251" || colorRange == "252" || colorRange == "253" || colorRange == "254" || colorRange == "255"
                                                    }
                                            }
                                        }
                                    }
                                }
                            }

                            // Return
                            return stringIsCMYKColor
                        };

                        /* Is Color
                            --- CHECKPOINT (Lapys) -> Check for browser colors only and perform conversions on the side.
                            --- MINIFY (Lapys)
                            --- UPDATE REQUIRED (Lapys) -> Update to browser standards.
                            --- WARN (Lapys) -> The color codes tested for are case-specific only (meaning they do not have variations in white-space or such).
                        */
                        LapysDevelopmentKit.Functions.stringPrototypeIsColor = function stringPrototypeIsColor(string, TEST_FOR_COLOR_CODES) { return false };

                        // Is Color Code --- NOTE (Lapys) -> Any color or color code.
                        LapysDevelopmentKit.Functions.stringPrototypeIsColorCode = function stringPrototypeIsColorCode(string, STRING_LENGTH) {
                            // Initialization > String Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Return
                            return LDKF.stringPrototypeIsColor(string) ||
                                LDKF.stringPrototypeIsCMYKColor(string) ||
                                LDKF.stringPrototypeIsHexadecimalColor(string, STRICT = stringLength) ||
                                (LDKF.stringPrototypeIsHSLColor(string, STRICT = stringLength) || LDKF.stringPrototypeIsHSLAColor(string, STRICT = stringLength)) ||
                                (LDKF.stringPrototypeIsRGBColor(string, STRICT = stringLength) || LDKF.stringPrototypeIsRGBAColor(string, STRICT = stringLength))
                        };

                        // Is CSS Character Sequence
                        LapysDevelopmentKit.Functions.stringPrototypeIsCSSCharacterSequence = function stringPrototypeIsCSSCharacterSequence(string, IGNORE_DIGITS) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.cssCharacterSequences, string, STRICT = 157) && (!IGNORE_DIGITS || !LDKF.stringPrototypeIsDigit(string)) };

                        // Is CSS Source --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeIsCSSSource = function stringPrototypeIsCSSSource(string, STRING_LENGTH) {
                            // Update > String
                            string = LDKF.stringPrototypeTrim(string);

                            // Initialization > String (Length, Iterator, Is CSS Source)
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIterator = stringLength,
                                stringIsCSSSource = true; // NOTE (Lapys) -> Empty CSS style sheets are also valid CSS source files.

                            // Initialization > ((Next, Significant) (Character), Data, Token Type (Stack))
                            var character = null, nextCharacter = null, significantCharacter = null,
                                data = {isIndexingAttributeValue: false},
                                tokenType = "plaintext", tokenTypeStack = [];

                            // Loop --- NOTE (Lapys) -> Begin assertion...
                            while (stringIsCSSSource && stringIterator) {
                                // Update > (Next) Character
                                character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);
                                nextCharacter = LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator);

                                // Constant > Indexed Character Sequence
                                var indexedCharacterSequence = character == '\\' && LDKF.stringPrototypeIsCSSCharacterSequence(character + nextCharacter);

                                // Logic
                                switch (tokenType) {
                                    // [Attribute]
                                    case "attribute":
                                        // Logic > Update > ...
                                        if (significantCharacter == '[') { stringIterator += 1; tokenType = "attribute-name" }
                                        else if (significantCharacter == ']') tokenType = "plaintext";

                                        // ...
                                        break;

                                    // [Attribute Name]
                                    case "attribute-name":
                                        // Logic
                                        if (character == ']' || character == '=' || (nextCharacter == '=' && (character == '~' || character == '|' || character == '^' || character == '$' || character == '*')))
                                            // Logic
                                            if (significantCharacter == '[')
                                                // Update > String Is CSS Source
                                                stringIsCSSSource = false;

                                            else {
                                                // Update > Significant Character
                                                significantCharacter = character;

                                                // Logic > Update > ...
                                                if (significantCharacter == ']') tokenType = "plaintext";
                                                else if (significantCharacter == '=') { tokenType = "attribute-value" }
                                                else { significantCharacter = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1) || nextCharacter; tokenType = "attribute-value" }
                                            }

                                        else if (character == ' ' || character == '\n') {
                                            // Initialization > String Index
                                            var stringIndex;

                                            // (Loop > )Update > ...
                                            stringIndex = stringLength - stringIterator - 1;
                                            do { character = LDKF.stringPrototypeCharacterAt(string, stringIndex -= 1) } while (character == ' ' || character == '\n');

                                            // Logic
                                            if (character != '[') {
                                                // (Loop > )Update > ...
                                                stringIndex = stringLength - stringIterator - 1;
                                                do { character = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) } while (character == ' ' || character == '\n');
                                                stringIsCSSSource = character == ']' || (character == '=' || (nextCharacter == '=' && (character == '~' || character == '|' || character == '^' || character == '$' || character == '*')))
                                            }
                                        }

                                        else  if (
                                            (significantCharacter == '[' && LDKF.stringPrototypeIsDigit(significantCharacter)) ||
                                            (!indexedCharacterSequence && !LDKF.stringPrototypeIsCSSCharacterSequence(character, STRICT = true))
                                        )
                                            // Update > String Is  CSS Source
                                            stringIsCSSSource = false;

                                        else
                                            // Update > Significant Character
                                            significantCharacter = character;

                                        // ...
                                        break;

                                    // [Attribute Value]
                                    case "attribute-value":
                                        // Logic
                                        if (character == ']') {
                                            data.isIndexingAttributeValue = false
                                        }

                                        else if (character == ' ' || character == '\n') {
                                            // Initialization > String Index
                                            var stringIndex;

                                            // (Loop > )Update > ...
                                            stringIndex = stringLength - stringIterator - 1;
                                            do { character = LDKF.stringPrototypeCharacterAt(string, stringIndex -= 1) } while (character == ' ' || character == '\n');

                                            // Logic
                                            if (character != '=') {
                                                // (Loop > )Update > ...
                                                stringIndex = stringLength - stringIterator - 1;
                                                do { character = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) } while (character == ' ' || character == '\n');

                                                if (character == 'i' || character == 's') {
                                                    stringIndex = stringLength - stringIterator - 1;
                                                    do { character = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) } while (character == ' ' || character == '\n');
                                                    stringIsCSSSource = character == ']'
                                                }

                                                else if (character != ']')
                                                    stringIsCSSSource = false
                                            }
                                        }

                                        else if (character == '"' || character == '\'') {
                                            data.isIndexingAttributeValue = true;
                                            tokenType = "string"
                                        }
                                        else if (character == '\b' || character == '\n' || character == '\r' || character == '\t' || character == '\0' || character == '\1' || character == '\2' || character == '\3' || character == '\4' || character == '\5' || character == '\6' || character == '\7' || character == '\u0008' || character == '\u0009' || character == '\u0010' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '' || character == '') stringIsCSSSource = false;
                                        else {
                                            data.isIndexingAttributeValue = true;
                                            significantCharacter = character
                                        }

                                        // ...
                                        break;

                                    // [(Class | ID) Attribute Value]
                                    case "class-attribute-value":
                                    case "id-attribute-value":
                                        // Logic > ...
                                        if (character == '.' || character == '#' || character == ':' || character == '[') { stringIterator += 1; tokenType = "plaintext" }
                                        else if (!indexedCharacterSequence && !LDKF.stringPrototypeIsCSSCharacterSequence(character, STRICT = true)) stringIsCSSSource = false;

                                        // ...
                                        break;

                                    // [Comment]
                                    case "comment":
                                        // ...
                                        break;

                                    // [Declaration Block]
                                    case "declaration-block":
                                        // ...
                                        break;

                                    // [Namespace]
                                    case "namespace":
                                        // ...
                                        break;

                                    // [Plain Text]
                                    case "plaintext":
                                        // Logic > ...
                                        if (character == '[') { significantCharacter = character; tokenType = "attribute" }
                                        else if (character == '.') if (LDKF.stringPrototypeIsDigit(nextCharacter)) stringIsCSSSource = false; else { significantCharacter = character; tokenType = "class-attribute-value" }
                                        else if (character == '#') if (LDKF.stringPrototypeIsDigit(nextCharacter)) stringIsCSSSource = false; else { significantCharacter = character; tokenType = "id-attribute-value" }
                                        else if (character == '@') tokenType = "namespace";
                                        else if (character == ':') tokenType = "pseudo";
                                        else if (character == '{') tokenType = "declaration-block";
                                        else if (character == '/' && LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator) == '*') { stringIterator && (stringIterator -= 1); tokenType = "comment" }
                                        else if (character != ' ' && character != '\n') stringIsCSSSource = false;

                                        // ...
                                        break;

                                    // [Pseudo]
                                    case "pseudo":
                                        // ...
                                        break;

                                    // [String]
                                    case "string":
                                }

                                // Update > Token
                                indexedCharacterSequence && (stringIterator && (stringIterator -= 1))
                            }

                            // Return
                            return stringIsCSSSource
                        };

                        // Is Date --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeIsDate = function stringPrototypeIsDate(string) { return true };

                        // Is Digit
                        LapysDevelopmentKit.Functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.digits, string, STRICT = 10) };

                        // Is DOM Element Tag Name
                        LapysDevelopmentKit.Functions.stringPrototypeIsDOMElementTagName = function stringPrototypeIsDOMElementTagName(string, STRING_LENGTH, USE_NATIVE_FEATURES) {
                            // Logic
                            if (USE_NATIVE_FEATURES) {
                                // Initialization > Is DOM Element Tag Name
                                var isDOMElementTagName = false;

                                // Error Handling > ...
                                try { LDKF.documentPrototypeCreateElement(LDKC.Objects.document, string); isDOMElementTagName = true }
                                catch (error) {}

                                // Return
                                return isDOMElementTagName
                            }

                            else {
                                // Initialization > String (Length, Iterator)
                                var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                    stringIterator = stringLength;

                                // Loop
                                while (stringIterator) {
                                    // Initialization > Character
                                    var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                    // Logic > Return
                                    if (!(
                                        character == '_' || LDKF.stringPrototypeIsAlphabet(character) ||
                                        (stringIterator && (character == '-' || LDKF.stringPrototypeIsDigit(character)))
                                    )) return false
                                }

                                // Return
                                return !!stringLength
                            }
                        };

                        // Is Empty
                        LapysDevelopmentKit.Functions.stringPrototypeIsEmpty = function stringPrototypeIsEmpty(string) { return !string };

                        // Is Hexadecimal Color
                        LapysDevelopmentKit.Functions.stringPrototypeIsHexadecimalColor = function stringPrototypeIsHexadecimalColor(string, STRING_LENGTH) {
                            // Initialization > String Length
                            var stringLength = stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Return --- MINIFY (Lapys) -> Not sure if this is really minified.
                            return LDKF.stringPrototypeFirst(string) == '#' && (
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 1)) &&
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 2)) &&
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 3))
                            ) && ((stringLength == 4) || ((
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 4))
                            ) && ((stringLength == 5) || ((
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 5)) &&
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 6))
                            ) && ((stringLength == 7) || ((
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 7)) &&
                                LDKF.stringPrototypeIsHexadecimalDigit(LDKF.stringPrototypeCharacterAt(string, 8))
                            ) && (stringLength == 9)))))))
                        };

                        // Is Hexadecimal Digit
                        LapysDevelopmentKit.Functions.stringPrototypeIsHexadecimalDigit = function stringPrototypeIsHexadecimalDigit(string) { return string == 'a' || string == 'A' || string == 'b' || string == 'B' || string == 'c' || string == 'C' || string == 'd' || string == 'D' || string == 'e' || string == 'E' || string == 'f' || string == 'F' || LDKF.stringPrototypeIsDigit(string) };

                        // Is HSL Color
                        LapysDevelopmentKit.Functions.stringPrototypeIsHSLColor = function stringPrototypeIsHSLColor(string, STRING_LENGTH, TEST_FOR_ALPHA) {
                            // Initialization > String (Index, Length, Is HSL Color)
                            var stringIndex = +0,
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIsHSLColor = !!(stringLength && (stringLength ^ 1) && (stringLength ^ 2) && (stringLength ^ 3) && (stringLength ^ 4) && (stringLength ^ 5) && (stringLength ^ 6) && (stringLength ^ 7) && (stringLength ^ 8) && (stringLength ^ 9) && (stringLength ^ 10) && (stringLength ^ 11)) && (
                                    LDKF.stringPrototypeFirst(string) == 'h' &&
                                    LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == 's' &&
                                    LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == 'l'
                                );

                            // Logic
                            if (stringIsHSLColor) {
                                // Update > Test For Alpha
                                TEST_FOR_ALPHA = !!TEST_FOR_ALPHA;

                                // Update > String Is HSL Color
                                TEST_FOR_ALPHA && (stringIsHSLColor = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == 'a');
                                stringIsHSLColor && (stringIsHSLColor = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == '(');

                                // Logic
                                if (stringIsHSLColor) {
                                    // Initialization > (Has Indexed Trim, Hue (Length), String Iterator)
                                    var delimiter = null,
                                        hasIndexedTrim = false,
                                        hue = "", hueLength = +0,
                                        stringIterator = stringLength - stringIndex - 1;

                                    // Loop
                                    while (stringIsHSLColor && stringIterator) {
                                        // Initialization > Character
                                        var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                        // Logic
                                        if (hasIndexedTrim)
                                            // Logic > Update > ...
                                            if (character == ',' || character == ' ' || character == '\n') { delimiter = character == ',' ? "comma-separated" : "white-space"; stringIndex = stringIterator - 1; stringIterator = +0 }
                                            else { hue += character; hueLength += 1 }

                                        else {
                                            // Update > (Has Indexed Trim, String Iterator)
                                            hasIndexedTrim = character != ' ' && character != '\n';
                                            stringIterator += 1
                                        }
                                    }

                                    // Update > Hue
                                    hue = LDKF.stringPrototypeTrimRight(hue, [' ', '\n']);

                                    // Logic > Update > Hue --- MINIFY (Lapys)
                                    if ((hueLength && (hueLength ^ 1) && (hueLength ^ 2) && (hueLength ^ 3)) && ((LDKF.stringPrototypeCharacterAt(hue, hueLength - 3) == 'd' && LDKF.stringPrototypeCharacterAt(hue, hueLength - 2) == 'e' && LDKF.stringPrototypeCharacterAt(hue, hueLength - 1) == 'g') || (LDKF.stringPrototypeCharacterAt(hue, hueLength - 3) == 'r' && LDKF.stringPrototypeCharacterAt(hue, hueLength - 2) == 'a' && LDKF.stringPrototypeLast(hue, STRICT = hueLength) == 'd'))) hue = LDKF.stringPrototypeCutRight(hue, 3, STRICT = hueLength);
                                    else if ((hueLength && (hueLength ^ 1) && (hueLength ^ 2) && (hueLength ^ 3) && (hueLength ^ 4)) && (LDKF.stringPrototypeCharacterAt(hue, hueLength - 4) == 't' && LDKF.stringPrototypeCharacterAt(hue, hueLength - 3) == 'u' && LDKF.stringPrototypeCharacterAt(hue, hueLength - 2) == 'r' && LDKF.stringPrototypeLast(hue, STRICT = hueLength) == 'n')) hue = LDKF.stringPrototypeCutRight(hue, 4, STRICT = hueLength);

                                    // Update > String Is HSL Color
                                    stringIsHSLColor = hue && (LDKF.stringPrototypeIsPositiveNumericInteger(hue) || LDKF.stringPrototypeIsPositiveNumericDecimal(hue));

                                    // Logic
                                    if (stringIsHSLColor) {
                                        // Initialization > (Has Indexed Delimiter, (Luminosity, Saturation) (Length))
                                        var hasIndexedDelimiter = false,
                                            luminosity = "", luminosityLength = +0,
                                            saturation = "", saturationLength = +0;

                                        // Update > (Has Indexed Trim, String Iterator)
                                        hasIndexedTrim = false;
                                        stringIterator = stringIndex;

                                        // Loop
                                        while (stringIsHSLColor && stringIterator) {
                                            // Initialization > Character
                                            var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                            // Logic
                                            if (hasIndexedTrim) {
                                                // Logic
                                                if (hasIndexedDelimiter) {
                                                    // Logic
                                                    if (character == ')' || !stringIterator) {
                                                        // Update > (Luminosity (Length), String Is HSL Color)
                                                        luminosity = LDKF.stringPrototypeTrimRight(luminosity, [' ', '\n']);
                                                        luminosityLength = LDKF.stringPrototypeLength(luminosity);
                                                        luminosity = LDKF.stringPrototypeCutRight(luminosity, 1, STRICT = luminosityLength);
                                                        luminosityLength -= 1;
                                                        stringIsHSLColor = LDKF.stringPrototypeIsPositiveNumericInteger(luminosity, STRICT = luminosityLength) || LDKF.stringPrototypeIsPositiveNumericDecimal(luminosity, STRICT = luminosityLength);

                                                        // Logic
                                                        if (stringIsHSLColor) {
                                                            // Update > (Luminosity, String Is HSL Color)
                                                            luminosity = LDKF.toNumber(luminosity);
                                                            stringIsHSLColor = luminosity > -1 && luminosity <= 100;

                                                            // Logic
                                                            if (stringIsHSLColor) {
                                                                // (Loop > )Update > Delimiter
                                                                delimiter = character;
                                                                while (stringIterator) delimiter += LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);
                                                                delimiter = LDKF.stringPrototypeTrimRight(delimiter);

                                                                // Update > String Is HSL Color
                                                                stringIsHSLColor = delimiter == ')'
                                                            }
                                                        }
                                                    }

                                                    else {
                                                        // Update > Luminosity
                                                        luminosity += character;
                                                        luminosityLength += 1
                                                    }
                                                }

                                                else {
                                                    // Logic
                                                    if (character == ',' || character == ' ' || character == '\n') {
                                                        // Update > String Is HSL Color
                                                        stringIsHSLColor = (character == ',' && delimiter == "comma-separated") ||
                                                            ((character == ' ' || character == '\n') && delimiter == "white-space");

                                                        // Logic
                                                        if (stringIsHSLColor) {
                                                            // Update > (Has Indexed (Delimiter, Trim), Saturation (Length), String Is HSL Color)
                                                            hasIndexedDelimiter = true;
                                                            hasIndexedTrim = false;
                                                            saturation = LDKF.stringPrototypeTrimRight(saturation, [' ', '\n']);
                                                            saturationLength = LDKF.stringPrototypeLength(saturation);
                                                            saturation = LDKF.stringPrototypeCutRight(saturation, 1, STRICT = saturationLength);
                                                            saturationLength -= 1;
                                                            stringIsHSLColor = LDKF.stringPrototypeIsPositiveNumericInteger(saturation, STRICT = saturationLength) || LDKF.stringPrototypeIsPositiveNumericDecimal(saturation, STRICT = saturationLength);

                                                            // Logic
                                                            if (stringIsHSLColor) {
                                                                // Update > (Saturation, String Is HSL Color)
                                                                saturation = LDKF.toNumber(saturation);
                                                                stringIsHSLColor = saturation > -1 && saturation <= 100
                                                            }
                                                        }
                                                    }

                                                    else {
                                                        // Update > Saturation (Length)
                                                        saturation += character;
                                                        saturationLength += 1
                                                    }
                                                }
                                            }

                                            else {
                                                // Update > (Has Indexed Trim, String Iterator)
                                                hasIndexedTrim = character != ' ' && character != '\n';
                                                stringIterator += 2
                                            }
                                        }
                                    }
                                }
                            }

                            // Return
                            return stringIsHSLColor
                        };

                        // Is HSLA Color
                        LapysDevelopmentKit.Functions.stringPrototypeIsHSLAColor = function stringPrototypeIsHSLAColor(string, STRING_LENGTH) { return LDKF.stringPrototypeIsHSLColor(string, STRICT = STRING_LENGTH, STRICT = true) };

                        // Is JavaScript Source --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeIsJavaScriptSource = function stringPrototypeIsJavaScriptSource(string) { return true };

                        // Is Language Code
                        LapysDevelopmentKit.Functions.stringPrototypeIsLanguageCode = function stringPrototypeIsLanguageCode(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.languageCodes, string, STRICT = 741) };

                        // Is Lower
                        LapysDevelopmentKit.Functions.stringPrototypeIsLower = function stringPrototypeIsLower(string, STRING_LENGTH) {
                            // Initialization > String Iterator
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Loop > Logic > Return
                            while (stringIterator) if (LDKF.stringPrototypeIsUpperCharacter(LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1))) return false;

                            // Return
                            return true
                        };

                        // Is Lower Character
                        LapysDevelopmentKit.Functions.stringPrototypeIsLowerCharacter = function stringPrototypeIsLowerCharacter(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.lowercaseAlphabets, string, STRICT = 26) };

                        /* Is Numeric Decimal
                                --- NOTE (Lapys) -> If the String begins with a decimal, it is assumed the source is a zero-point decimal.
                                --- WARN (Lapys) -> Does not evaluate the String source, rather it asserts if the String contains a single (not multiple) decimal point.
                                --- WARN (Lapys) -> Tolerates leading/ trailing zeros.
                        */
                        LapysDevelopmentKit.Functions.stringPrototypeIsNumericDecimal = function stringPrototypeIsNumericDecimal(string, STRING_LENGTH, TEST_FOR_SCIENTIFIC_NOTATION) {
                            // Initialization > (Has Indexed (Trim After) Sign, String ((Cut) Length, Is Numeric Decimal, Iterator))
                            var hasIndexedSign = false, hasIndexedTrimAfterSign = false,
                                stringCutLength = +0,
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIsNumericDecimal = !!stringLength,
                                stringIterator = stringLength;

                            // Loop
                            while (stringIsNumericDecimal && stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                // Logic
                                if (character == ' ' || character == '\n' || character == '\0') {
                                    // Update > (Has Indexed Trim After Sign, String Cut Length)
                                    hasIndexedTrimAfterSign = hasIndexedSign;
                                    stringCutLength += 1
                                }

                                else if (character == '-')
                                    // Logic
                                    if (hasIndexedTrimAfterSign)
                                        // Update > String Is Numeric Decimal
                                        stringIsNumericDecimal = false;

                                    else {
                                        // Update > (Has Indexed Sign, String Cut Length)
                                        hasIndexedSign = true;
                                        stringCutLength += 1
                                    }

                                else
                                    // String Iterator
                                    stringIterator = +0
                            }

                            // Logic
                            if (stringIsNumericDecimal) {
                                // Update > String Length
                                stringLength -= stringCutLength;

                                // Logic
                                if (stringLength) {
                                    // Update > String (Iterator)
                                    string = LDKF.stringPrototypeCutLeft(string, stringCutLength);
                                    stringIterator = stringLength;

                                    // Logic
                                    if (LDKF.stringPrototypeFirst(string) == '.') {
                                        // Update > (String) (Iterator, Length)
                                        string = '0' + string;
                                        stringIterator += 1;
                                        stringLength += 1
                                    }

                                    // Logic
                                    if (LDKF.stringPrototypeLast(string, STRICT = stringLength) == '.')
                                        // Update > String Is Numeric Decimal
                                        stringIsNumericDecimal = false;

                                    else {
                                        // Initialization > Decimal Point Index
                                        var decimalPointIndex = -1;

                                        // Loop > Update > Decimal Point Index
                                        while (stringIsNumericDecimal && stringIterator)
                                            (LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) == '.') && (decimalPointIndex = ~decimalPointIndex ? stringIsNumericDecimal = false : stringIterator);

                                        // Update > String Is Numeric Decimal
                                        ~decimalPointIndex || (stringIsNumericDecimal = false);

                                        // Logic
                                        if (stringIsNumericDecimal)
                                            // Logic
                                            if (!LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeFirst(string)) || !LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeLast(string, STRICT = stringLength)))
                                                // Update > String Is Numeric Decimal
                                                stringIsNumericDecimal = false;

                                            else {
                                                // Initialization > Has Indexed Scientific Notation
                                                var hasIndexedScientificNotation = false;

                                                // Update > String Iterator
                                                stringIterator = stringLength;

                                                // Loop
                                                while (stringIsNumericDecimal && stringIterator) {
                                                    // Initialization > Character
                                                    var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                                    // Logic
                                                    if (TEST_FOR_SCIENTIFIC_NOTATION) {
                                                        // Logic
                                                        if (character == 'e') {
                                                            // Update > (Is Numeric Decimal, Has Indexed Scientific Notation)
                                                            (hasIndexedScientificNotation || (stringIterator == decimalPointIndex || stringIterator < decimalPointIndex)) && (stringIsNumericDecimal = false);
                                                            hasIndexedScientificNotation = true
                                                        }
                                                    }

                                                    // Logic > Update > String Is Numeric Decimal
                                                    if (
                                                        (decimalPointIndex ^ stringIterator) &&
                                                        ((TEST_FOR_SCIENTIFIC_NOTATION ? character != 'e' : true) && !LDKF.stringPrototypeIsDigit(character))
                                                    ) stringIsNumericDecimal = false;
                                                    else if (!stringIterator) stringIsNumericDecimal = true
                                                }
                                            }
                                    }
                                }

                                else
                                    // Update > String Is Numeric Decimal
                                    stringIsNumericDecimal = false
                            }

                            // Return
                            return stringIsNumericDecimal
                        };

                        // Is Numeric Integer --- WARN (Lapys) -> Tolerates leading/ trailing zeros.
                        LapysDevelopmentKit.Functions.stringPrototypeIsNumericInteger = function stringPrototypeIsNumericInteger(string, STRING_LENGTH) {
                            // Initialization > (Has Indexed (Trim After) Sign, String ((Cut) Length, Is Numeric Integer, Iterator))
                            var hasIndexedSign = false, hasIndexedTrimAfterSign = false,
                                stringCutLength = +0,
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIsNumericInteger = !!stringLength,
                                stringIterator = stringLength;

                            // Loop
                            while (stringIsNumericInteger && stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                // Logic
                                if (character == ' ' || character == '\n' || character == '\0') {
                                    // Update > (Has Indexed Trim After Sign, String Cut Length)
                                    hasIndexedTrimAfterSign = hasIndexedSign;
                                    stringCutLength += 1
                                }

                                else if (character == '-' || character == '+')
                                    // Logic
                                    if (hasIndexedTrimAfterSign)
                                        // Update > String Is Numeric Integer
                                        stringIsNumericInteger = false;

                                    else {
                                        // Update > (Has Indexed Sign, String Cut Length)
                                        hasIndexedSign = true;
                                        stringCutLength += 1
                                    }

                                else
                                    // Update > String Iterator
                                    stringIterator = +0
                            }

                            // Logic
                            if (stringIsNumericInteger) {
                                // Update > String Length
                                stringLength -= stringCutLength;

                                // Logic
                                if (stringLength) {
                                    // Update > String (Iterator)
                                    string = LDKF.stringPrototypeCutLeft(string, stringCutLength);
                                    stringIterator = stringLength;

                                    // Loop > Update > String Is Numeric Integer
                                    while (stringIsNumericInteger && stringIterator)
                                        stringIsNumericInteger = LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1))
                                }

                                else
                                    // Update > String Is Numeric Integer
                                    stringIsNumericInteger = false
                            }

                            // Return
                            return stringIsNumericInteger
                        };

                        // Is Positive Numeric Decimal
                        LapysDevelopmentKit.Functions.stringPrototypeIsPositiveNumericDecimal = function stringPrototypeIsPositiveNumericDecimal(string, STRING_LENGTH, TEST_FOR_SCIENTIFIC_NOTATION) {
                            // Initialization > String Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Return
                            return !LDKF.stringPrototypeIsSignedOperator(string, STRICT = stringLength, STRICT = true) && LDKF.stringPrototypeIsNumericDecimal(string, STRICT = stringLength, STRICT = TEST_FOR_SCIENTIFIC_NOTATION)
                        };

                        // Is Positive Numeric Integer
                        LapysDevelopmentKit.Functions.stringPrototypeIsPositiveNumericInteger = function stringPrototypeIsPositiveNumericInteger(string, STRING_LENGTH) {
                            // Initialization > String Length
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Return
                            return !LDKF.stringPrototypeIsSignedOperator(string, STRICT = stringLength, STRICT = true) && LDKF.stringPrototypeIsNumericInteger(string, STRICT = stringLength)
                        };

                        // Is RGB Color --- NOTE (Lapys) -> It`s odd how the `rgb(...)` syntax is not treated as a function call but rather as a token.
                        LapysDevelopmentKit.Functions.stringPrototypeIsRGBColor = function stringPrototypeIsRGBColor(string, STRING_LENGTH, TEST_FOR_ALPHA) {
                            // Initialization > String (Index, Length, Is RGB Color)
                            var stringIndex = +0,
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIsRGBColor = !!(stringLength && (stringLength ^ 1) && (stringLength ^ 2) && (stringLength ^ 3) && (stringLength ^ 4) && (stringLength ^ 5) && (stringLength ^ 6) && (stringLength ^ 7) && (stringLength ^ 8) && (stringLength ^ 9)) && (
                                    LDKF.stringPrototypeFirst(string) == 'r' &&
                                    LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == 'g' &&
                                    LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == 'b'
                                );

                            // Logic
                            if (stringIsRGBColor) {
                                // Update > Test For Alpha
                                TEST_FOR_ALPHA = !!TEST_FOR_ALPHA;

                                // Update > String Is RGB Color
                                TEST_FOR_ALPHA && (stringIsRGBColor = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == 'a');
                                stringIsRGBColor && (stringIsRGBColor = LDKF.stringPrototypeCharacterAt(string, stringIndex += 1) == '(');

                                // Logic
                                if (stringIsRGBColor) {
                                    // Initialization > (Color ((Range) ((Delimiter(s)) (Length), Ranges (Length))), Is Indexing (Color Range, Trim), String Iterator)
                                    var colorRange = "",
                                        colorRangeDelimiter = "",
                                        colorRangeDelimiters = [],
                                        colorRangeDelimitersLength = +0,
                                        colorRanges = [],
                                        colorRangesLength = +0,
                                        isIndexingColorRange = true,
                                        isIndexingTrim = false,
                                        stringIterator = stringLength - (stringIndex + 1);

                                    // Loop
                                    while (stringIsRGBColor && (stringIterator -= 1)) {
                                        // Initialization > Character
                                        var character = LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator - 1);

                                        // Logic
                                        if (character == 'e' || character == '.' || character == '%' || LDKF.stringPrototypeIsDigit(character)) {
                                            // Update > Color Range
                                            colorRange += character;

                                            // Logic
                                            if (!isIndexingColorRange) {
                                                // Update >  (Color Range Delimiter(s), Is Indexing Color Range)
                                                colorRangeDelimiters[colorRangeDelimitersLength] = colorRangeDelimiter;
                                                colorRangeDelimitersLength += 1;

                                                colorRangeDelimiter = "";
                                                isIndexingColorRange = true
                                            }

                                            // Update > Is Indexing Trim
                                            isIndexingTrim = false
                                        }

                                        else if (character == ' ' || character == ',' || character == '/' || character == '\n') {
                                            // Logic
                                            if (stringLength - stringIterator - 1 == stringIndex + 1)
                                                // Update > Is Indexing Trim
                                                isIndexingTrim = true;

                                            else if (!isIndexingTrim) {
                                                // Update > Color Range Delimiter
                                                colorRangeDelimiter += character;

                                                // Logic
                                                if (isIndexingColorRange) {
                                                    // Update > ((Color Range(s)) Length, Is Indexing Color Range)
                                                    colorRanges[colorRangesLength] = colorRange;
                                                    colorRangesLength += 1;

                                                    colorRange = "";
                                                    isIndexingColorRange = false
                                                }
                                            }
                                        }

                                        else
                                            // Update > String Is RGB Color
                                            stringIsRGBColor = false
                                    }

                                    // Logic
                                    if (stringIsRGBColor) {
                                        // Logic > Update > Color Ranges (Length)
                                        if (colorRange) { colorRanges[colorRangesLength] = colorRange; colorRangesLength += 1 }

                                        // Update > String Is RGB Color
                                        stringIsRGBColor = (colorRangesLength == (3 + TEST_FOR_ALPHA) && colorRangeDelimitersLength == (2 + TEST_FOR_ALPHA)) &&
                                            (!colorRangeDelimiter || LDKF.stringPrototypeIsEmpty(LDKF.stringPrototypeTrim(colorRangeDelimiter, [' ', '\n'])));

                                        // Logic
                                        if (stringIsRGBColor) {
                                            // Initialization > Color Range Delimiters Iterator
                                            var colorRangeDelimitersIterator = colorRangeDelimitersLength;

                                            // Loop
                                            while (stringIsRGBColor && colorRangeDelimitersIterator) {
                                                // Update > Color Range Delimiter
                                                colorRangeDelimiter = colorRangeDelimiters[colorRangeDelimitersIterator -= 1];

                                                // Initialization > Color Range Delimiter (Trim, Is Valid)
                                                var colorRangeDelimiterTrim = LDKF.stringPrototypeTrim(colorRangeDelimiter, [' ', '\n']),
                                                    colorRangeDelimiterIsValid = colorRangeDelimiterTrim == ',' || colorRangeDelimiterTrim == '/';

                                                // Logic
                                                if (colorRangeDelimiterIsValid)
                                                    // Update > Color Range Delimiters
                                                    colorRangeDelimiters[colorRangeDelimitersIterator] = colorRangeDelimiterTrim;

                                                else {
                                                    // Initialization > Color Range Delimiter Iterator
                                                    var colorRangeDelimiterIterator = LDKF.stringPrototypeLength(colorRangeDelimiter);

                                                    // Loop --- NOTE (Lapys) -> Check if the Color Range Delimiter is made of white-space (or newlines) alone.
                                                    while (colorRangeDelimiterIterator) {
                                                        // Initialization > Color Range Delimiter Character
                                                        var colorRangeDelimiterCharacter = LDKF.stringPrototypeCharacterAt(colorRangeDelimiter, colorRangeDelimiterIterator -= 1);

                                                        // Logic
                                                        if (colorRangeDelimiterCharacter != ' ' && colorRangeDelimiterCharacter != '\n') {
                                                            // Update > Color Range Delimiter (Is Valid, Iterator)
                                                            colorRangeDelimiterIsValid = false;
                                                            colorRangeDelimiterIterator = +0
                                                        }

                                                        else if (!colorRangeDelimiterIterator && (colorRangeDelimiterCharacter == ' ' || colorRangeDelimiterCharacter == '\n')) {
                                                            // Update > Color Range (Delimiters, Delimiter Is Void)
                                                            colorRangeDelimiters[colorRangeDelimitersIterator] = ' ';
                                                            colorRangeDelimiterIsValid = true
                                                        }
                                                    }
                                                }

                                                // Update > String Is RGB Color
                                                stringIsRGBColor = colorRangeDelimiterIsValid
                                            }

                                            // Logic
                                            if (stringIsRGBColor) {
                                                // Update > String Is RGB Color
                                                stringIsRGBColor = (colorRangeDelimiters[+0] == ' ' && colorRangeDelimiters[1] == ' ' && (!TEST_FOR_ALPHA || colorRangeDelimiters[2] == '/')) ||
                                                    (colorRangeDelimiters[+0] == ',' && colorRangeDelimiters[1] == ',' && (!TEST_FOR_ALPHA || colorRangeDelimiters[2] == ','));

                                                // Logic
                                                if (stringIsRGBColor) {
                                                    // Initialization > Color (Range Type, Ranges Iterator)
                                                    var colorRangeType = null,
                                                        colorRangesIterator = colorRangesLength;

                                                    // Loop
                                                    while (stringIsRGBColor && colorRangesIterator) {
                                                        // Logic
                                                        if (colorRangesIterator == colorRangesLength && TEST_FOR_ALPHA) {
                                                            // Initialization > Alpha Range (Length)
                                                            var alphaRange = LDKF.stringPrototypeTrim(colorRanges[colorRangesIterator -= 1], [' ', '\n']),
                                                                alphaRangeLength = LDKF.stringPrototypeLength(alphaRange);

                                                            // Logic
                                                            if (LDKF.stringPrototypeLast(alphaRange, STRICT = alphaRangeLength) == '%') {
                                                                // Update > (Alpha Range (Length), String Is RGB Color)
                                                                alphaRange = LDKF.stringPrototypeCutRight(alphaRange, 1, STRICT = alphaRangeLength);
                                                                alphaRangeLength -= 1;
                                                                stringIsRGBColor = LDKF.stringPrototypeIsNumericInteger(alphaRange, STRICT = alphaRangeLength) ||
                                                                    LDKF.stringPrototypeIsPositiveNumericDecimal(alphaRange, STRICT = alphaRangeLength, STRICT = true);

                                                                // Logic > Update > (Alpha Range (Length), String Is RGB Color)
                                                                if (stringIsRGBColor) {
                                                                    alphaRange = LDKF.toNumber(alphaRange);
                                                                    stringIsRGBColor = alphaRange > -1 && alphaRange <= 100 && !LDKF.objectIs(alphaRange, -0)
                                                                }
                                                            }

                                                            else {
                                                                // Logic
                                                                if (LDKF.stringPrototypeFirst(alphaRange) == '0') {
                                                                    // Update > Alpha Range (Length)
                                                                    alphaRange = '0' + LDKF.stringPrototypeTrimLeft(alphaRange, '0');
                                                                    alphaRangeLength = LDKF.stringPrototypeLength(alphaRange)
                                                                }

                                                                // Update > String Is RGB Color
                                                                stringIsRGBColor = alphaRange == '1' || ((
                                                                    LDKF.stringPrototypeFirst(alphaRange) == '.' ||
                                                                    (LDKF.stringPrototypeFirst(alphaRange) == '0' && LDKF.stringPrototypeCharacterAt(alphaRange, 1) == '.')
                                                                ) && LDKF.stringPrototypeIsPositiveNumericDecimal(alphaRange, STRICT = alphaRangeLength))
                                                            }
                                                        }

                                                        else {
                                                            // Initialization > Color Range (Length)
                                                            var colorRange = LDKF.stringPrototypeTrim(colorRanges[colorRangesIterator -= 1]),
                                                                colorRangeLength = LDKF.stringPrototypeLength(colorRange);

                                                            // Logic
                                                            if (LDKF.stringPrototypeLast(colorRange, STRICT = colorRangeLength) == '%')
                                                                // Logic
                                                                if (colorRangeType == "unit")
                                                                    // Update >  String Is RGB Color
                                                                    stringIsRGBColor = false;

                                                                else {
                                                                    // Update > (Color Range (Length, Type), String Is RGB Color)
                                                                    colorRange = LDKF.stringPrototypeCutRight(colorRange, 1, STRICT = colorRangeLength);
                                                                    colorRangeLength -= 1;
                                                                    colorRangeType = "ratio";
                                                                    stringIsRGBColor = LDKF.stringPrototypeIsNumericInteger(colorRange, STRICT = colorRangeLength) ||
                                                                        LDKF.stringPrototypeIsPositiveNumericDecimal(colorRange, STRICT = colorRangeLength, STRICT = true);

                                                                    // Logic > Update > (Color Range (Length), String Is RGB Color)
                                                                    if (stringIsRGBColor) {
                                                                        colorRange = LDKF.toNumber(colorRange);
                                                                        stringIsRGBColor = colorRange > -1 && colorRange <= 100 && !LDKF.objectIs(colorRange, -0)
                                                                    }
                                                                }

                                                            else
                                                                // Logic
                                                                if (colorRangeType == "ratio")
                                                                    // Update > String Is RGB Color
                                                                    stringIsRGBColor = false;

                                                                else {
                                                                    // Update > (Color Range Type, String Is RGB Color) --- MINIFY (Lapys) -> Faster than logical testing.
                                                                    colorRangeType = "unit";
                                                                    stringIsRGBColor = colorRange == '0' || colorRange == '1' || colorRange == '2' || colorRange == '3' || colorRange == '4' || colorRange == '5' || colorRange == '6' || colorRange == '7' || colorRange == '8' || colorRange == '9' || colorRange == "10" || colorRange == "11" || colorRange == "12" || colorRange == "13" || colorRange == "14" || colorRange == "15" || colorRange == "16" || colorRange == "17" || colorRange == "18" || colorRange == "19" || colorRange == "20" || colorRange == "21" || colorRange == "22" || colorRange == "23" || colorRange == "24" || colorRange == "25" || colorRange == "26" || colorRange == "27" || colorRange == "28" || colorRange == "29" || colorRange == "30" || colorRange == "31" || colorRange == "32" || colorRange == "33" || colorRange == "34" || colorRange == "35" || colorRange == "36" || colorRange == "37" || colorRange == "38" || colorRange == "39" || colorRange == "40" || colorRange == "41" || colorRange == "42" || colorRange == "43" || colorRange == "44" || colorRange == "45" || colorRange == "46" || colorRange == "47" || colorRange == "48" || colorRange == "49" || colorRange == "50" || colorRange == "51" || colorRange == "52" || colorRange == "53" || colorRange == "54" || colorRange == "55" || colorRange == "56" || colorRange == "57" || colorRange == "58" || colorRange == "59" || colorRange == "60" || colorRange == "61" || colorRange == "62" || colorRange == "63" || colorRange == "64" || colorRange == "65" || colorRange == "66" || colorRange == "67" || colorRange == "68" || colorRange == "69" || colorRange == "70" || colorRange == "71" || colorRange == "72" || colorRange == "73" || colorRange == "74" || colorRange == "75" || colorRange == "76" || colorRange == "77" || colorRange == "78" || colorRange == "79" || colorRange == "80" || colorRange == "81" || colorRange == "82" || colorRange == "83" || colorRange == "84" || colorRange == "85" || colorRange == "86" || colorRange == "87" || colorRange == "88" || colorRange == "89" || colorRange == "90" || colorRange == "91" || colorRange == "92" || colorRange == "93" || colorRange == "94" || colorRange == "95" || colorRange == "96" || colorRange == "97" || colorRange == "98" || colorRange == "99" || colorRange == "100" || colorRange == "101" || colorRange == "102" || colorRange == "103" || colorRange == "104" || colorRange == "105" || colorRange == "106" || colorRange == "107" || colorRange == "108" || colorRange == "109" || colorRange == "110" || colorRange == "111" || colorRange == "112" || colorRange == "113" || colorRange == "114" || colorRange == "115" || colorRange == "116" || colorRange == "117" || colorRange == "118" || colorRange == "119" || colorRange == "120" || colorRange == "121" || colorRange == "122" || colorRange == "123" || colorRange == "124" || colorRange == "125" || colorRange == "126" || colorRange == "127" || colorRange == "128" || colorRange == "129" || colorRange == "130" || colorRange == "131" || colorRange == "132" || colorRange == "133" || colorRange == "134" || colorRange == "135" || colorRange == "136" || colorRange == "137" || colorRange == "138" || colorRange == "139" || colorRange == "140" || colorRange == "141" || colorRange == "142" || colorRange == "143" || colorRange == "144" || colorRange == "145" || colorRange == "146" || colorRange == "147" || colorRange == "148" || colorRange == "149" || colorRange == "150" || colorRange == "151" || colorRange == "152" || colorRange == "153" || colorRange == "154" || colorRange == "155" || colorRange == "156" || colorRange == "157" || colorRange == "158" || colorRange == "159" || colorRange == "160" || colorRange == "161" || colorRange == "162" || colorRange == "163" || colorRange == "164" || colorRange == "165" || colorRange == "166" || colorRange == "167" || colorRange == "168" || colorRange == "169" || colorRange == "170" || colorRange == "171" || colorRange == "172" || colorRange == "173" || colorRange == "174" || colorRange == "175" || colorRange == "176" || colorRange == "177" || colorRange == "178" || colorRange == "179" || colorRange == "180" || colorRange == "181" || colorRange == "182" || colorRange == "183" || colorRange == "184" || colorRange == "185" || colorRange == "186" || colorRange == "187" || colorRange == "188" || colorRange == "189" || colorRange == "190" || colorRange == "191" || colorRange == "192" || colorRange == "193" || colorRange == "194" || colorRange == "195" || colorRange == "196" || colorRange == "197" || colorRange == "198" || colorRange == "199" || colorRange == "200" || colorRange == "201" || colorRange == "202" || colorRange == "203" || colorRange == "204" || colorRange == "205" || colorRange == "206" || colorRange == "207" || colorRange == "208" || colorRange == "209" || colorRange == "210" || colorRange == "211" || colorRange == "212" || colorRange == "213" || colorRange == "214" || colorRange == "215" || colorRange == "216" || colorRange == "217" || colorRange == "218" || colorRange == "219" || colorRange == "220" || colorRange == "221" || colorRange == "222" || colorRange == "223" || colorRange == "224" || colorRange == "225" || colorRange == "226" || colorRange == "227" || colorRange == "228" || colorRange == "229" || colorRange == "230" || colorRange == "231" || colorRange == "232" || colorRange == "233" || colorRange == "234" || colorRange == "235" || colorRange == "236" || colorRange == "237" || colorRange == "238" || colorRange == "239" || colorRange == "240" || colorRange == "241" || colorRange == "242" || colorRange == "243" || colorRange == "244" || colorRange == "245" || colorRange == "246" || colorRange == "247" || colorRange == "248" || colorRange == "249" || colorRange == "250" || colorRange == "251" || colorRange == "252" || colorRange == "253" || colorRange == "254" || colorRange == "255"
                                                                }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            // Return
                            return stringIsRGBColor
                        };

                        // Is RGBA Color
                        LapysDevelopmentKit.Functions.stringPrototypeIsRGBAColor = function stringPrototypeIsRGBAColor(string, STRING_LENGTH) { return LDKF.stringPrototypeIsRGBColor(string, STRICT = STRING_LENGTH, STRICT = true) };

                        /* Is Signed Operator
                                --- NOTE ---
                                    #Lapys:
                                        - Tests a collection of `'-'` and `'+'` characters and evaluates if they become operator `'+'` mathematically.
                                        - A `null` return means the String is malformed within this context.
                        */
                        LapysDevelopmentKit.Functions.stringPrototypeIsSignedOperator = function stringPrototypeIsSignedOperator(string, STRING_LENGTH, IS_EXPRESSION) {
                            // Initialization > (Has Indexed Trim, Operator Is Malformed, String (Length, Is Signed, Iterator))
                            var hasIndexedTrim = false,
                                operatorIsMalformed = false,
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIsSigned = false,
                                stringIterator = stringLength;

                            // Loop
                            while (!operatorIsMalformed && stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1);

                                // Update > Has Indexed Trim
                                hasIndexedTrim = character != ' ' || character != '\n' || character != '\0';

                                // Logic > Update > ...
                                if (character == '-') stringIsSigned = !stringIsSigned;
                                else if (character != '+' && (character != ' ' && character != '\n' && (hasIndexedTrim || character != '\0'))) operatorIsMalformed = true
                            }

                            // Return
                            return operatorIsMalformed ? (IS_EXPRESSION ? stringIsSigned : null) : stringIsSigned
                        };

                        // Is Upper
                        LapysDevelopmentKit.Functions.stringPrototypeIsUpper = function stringPrototypeIsUpper(string, STRING_LENGTH) {
                            // Initialization > String Iterator
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Loop > Logic > Return
                            while (stringIterator) if (LDKF.stringPrototypeIsLowerCharacter(LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1))) return false;

                            // Return
                            return true
                        };

                        // Is Upper Character
                        LapysDevelopmentKit.Functions.stringPrototypeIsUpperCharacter = function stringPrototypeIsUpperCharacter(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.uppercaseAlphabets, string, STRICT = 26) };

                        // Is URL --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Functions.stringPrototypeIsURL = function stringPrototypeIsURL(string) { return true };

                        // Is Variable Character
                        LapysDevelopmentKit.Functions.stringPrototypeIsVariableCharacter = function stringPrototypeIsVariableCharacter(string) { return LDKF.arrayPrototypeIncludes(LDKC.Strings.variableCharacters, string, STRICT = 64) };

                        // Is Variable Identifier
                        LapysDevelopmentKit.Functions.stringPrototypeIsVariableIdentifier = function stringPrototypeIsVariableIdentifier(string, STRING_LENGTH, USE_NATIVE_FEATURES) {
                            // Logic
                            if (USE_NATIVE_FEATURES) {
                                // Initialization > Is Variable Identifier
                                var isVariableIdentifier = false;

                                // Error Handling > ...
                                try { LDKF.eval("var " + string); isVariableIdentifier = true }
                                catch (error) {}

                                // Return
                                return isVariableIdentifier
                            }

                            else {
                                // Initialization > String (Length, Iterator)
                                var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                    stringIterator = stringLength;

                                // Loop > Logic > Return
                                while (stringIterator) if (!LDKF.stringPrototypeIsVariableCharacter(LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1))) return false;

                                // Return
                                return !!stringLength
                            }
                        };

                        // Kebab --- NOTE (Lapys) -> Or Dash case, Lisp case, Param case, Spinal case, Train case e.t.c.
                        LapysDevelopmentKit.Functions.stringPrototypeKebab = function stringPrototypeKebab(string, TRAIN) {
                            // Initialization > String (Kebab, Length, Iterator)
                            var stringKebab = "", stringLength = LDKF.stringPrototypeLength(string), stringIterator = stringLength;

                            // Loop
                            while (stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                // Update > String Kebab --- MINIFY (Lapys)
                                LDKF.stringPrototypeIsAlphabet(character) && (stringKebab = (TRAIN ? LDKF.stringPrototypeUpper : LDKF.stringPrototypeLower)((stringIterator ? LDKF.stringPrototypeCharacterAt(string, stringIterator - 1) : "") == ' ' ? '-' + character : character) + stringKebab)
                            }

                            // Return
                            return stringKebab
                        };

                        // Last
                        LapysDevelopmentKit.Functions.stringPrototypeLast = function stringPrototypeLast(string, STRING_LENGTH) { return LDKF.stringPrototypeCharacterAt(string, (STRING_LENGTH || LDKF.stringPrototypeLength(string)) - 1) };

                        // Length --- NOTE (Lapys) -> Similar to the `LapysDevelopmentKit.Functions.arrayPrototypeLength` method: Strings manage their own length.
                        LapysDevelopmentKit.Functions.stringPrototypeLength = function stringPrototypeLength(string) { return string.length };

                        // Lower
                        LapysDevelopmentKit.Functions.stringPrototypeLower = function stringPrototypeLower(string, STRING_LENGTH) {
                            // Initialization > String (Iterator, Lowercase)
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringLowercase = "";

                            // Loop
                            while (stringIterator) {
                                // Initialization > (Character, Index)
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1),
                                    index = LDKF.arrayPrototypeIndexFrom(LDKC.Strings.uppercaseAlphabets, character, STRICT = 26);

                                // Update > String Lowercase
                                stringLowercase = (~index ? LDKC.Strings.lowercaseAlphabets[index] : character) + stringLowercase
                            }

                            // Return
                            return stringLowercase
                        };

                        // Remove
                        LapysDevelopmentKit.Functions.stringPrototypeRemove = function stringPrototypeRemove(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeRemoveFrom(string, substring, STRICT = STRING_LENGTH || LDKF.stringPrototypeLength(string), STRICT = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) };

                        // Remove All
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveAll = function stringPrototypeRemoveAll(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceAll(string, substring, function() { return "" }, STRICT = STRING_LENGTH || LDKF.stringPrototypeLength(string), STRICT = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) };

                        // Remove From
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveFrom = function stringPrototypeRemoveFrom(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFrom(string, substring, function() { return "" }, STRICT = STRING_LENGTH || LDKF.stringPrototypeLength(string), STRICT = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) };

                        // Remove From Back
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveFromBack = function stringPrototypeRemoveFromBack(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFromBack(string, substring, function() { return "" }, STRICT = STRING_LENGTH || LDKF.stringPrototypeLength(string), STRICT = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) };

                        // Remove From Front
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveFromFront = function stringPrototypeRemoveFromFront(string, substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFromFront(string, substring, function() { return "" }, STRICT = STRING_LENGTH || LDKF.stringPrototypeLength(string), STRICT = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) };

                        // Replace
                        LapysDevelopmentKit.Functions.stringPrototypeReplace = function stringPrototypeReplace(string, substring, replacer, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFrom(string, substring, replacer || "", STRICT = STRING_LENGTH || LDKF.stringPrototypeLength(string), STRICT = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring)) };

                        // Replace All --- NOTE (Lapys) -> The Replacer parameter would normally be a string, but the routine can be made more general-purpose by having the parameter be a handler function.
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceAll = function stringPrototypeReplaceAll(string, substring, replacer, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > (Replacement, (String, Substring) Length)
                            var replacement = "",
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string), stringIterator = stringLength,
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);

                            // Logic > Update > Replacer
                            if (LDKF.isString(replacer)) { var replacerString = replacer; replacer = function() { return replacerString } }
                            else if (LDKF.getArgumentsLength(arguments) < 3) replacer = function() { return "" };

                            // Loop
                            while (stringIterator) {
                                // Initialization > String Index
                                var stringIndex = stringLength - (stringIterator -= 1) - 1;

                                // Logic
                                if (LDKF.stringPrototypeCharacterAt(string, stringIndex) == LDKF.stringPrototypeFirst(substring)) {
                                    // Initialization > Substring Iterator
                                    var substringIterator = 1;

                                    // Loop > Update > Substring Iterator
                                    while (substringIterator ^ substringLength && LDKF.stringPrototypeCharacterAt(string, stringIndex + substringIterator) == LDKF.stringPrototypeCharacterAt(substring, substringIterator)) substringIterator += 1;

                                    // Logic > Update > ...
                                    if (substringIterator ^ substringLength) replacement += LDKF.stringPrototypeCharacterAt(string, stringIndex);
                                    else { replacement += LDKF.functionPrototypeCall(replacer, string, stringIndex, stringIndex + substringLength); stringIterator -= substringLength - 1 }
                                }

                                else
                                    // Update > Replacement
                                    replacement += LDKF.stringPrototypeCharacterAt(string, stringIndex)
                            }

                            // Return
                            return replacement
                        };

                        // Replace From
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceFrom = function stringPrototypeReplaceFrom(string, substring, replacer, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > ((String, Substring) Length, String Index)
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);
                            var stringIndex = LDKF.stringPrototypeIndexFrom(string, substring, STRICT = stringLength, STRICT = substringLength);

                            // Logic
                            if (~stringIndex) {
                                // Initialization > Replacement
                                var replacement = "";

                                // Logic > Update > Replacer
                                if (LDKF.isString(replacer)) { var replacerString = replacer; replacer = function() { return replacerString } }
                                else if (LDKF.getArgumentsLength(arguments) < 3) replacer = function() { return "" };

                                // (Loop > )Update > Replacement
                                while (stringLength ^ stringIndex + substringLength) replacement = LDKF.stringPrototypeCharacterAt(string, stringLength -= 1) + replacement;
                                replacement = LDKF.functionPrototypeCall(replacer, string, stringIndex, stringIndex + substringLength) + replacement;
                                while (stringIndex) replacement = LDKF.stringPrototypeCharacterAt(string, stringIndex -= 1) + replacement;

                                // Return
                                return replacement
                            }

                            else
                                // Return
                                return string
                        };

                        // Replace From Back --- WARN (Lapys) -> Code duplication of the `LapysDevelopmentKit.Functions.stringPrototypeReplaceFrom` method.
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceFromBack = function stringPrototypeReplaceFromBack(string, substring, replacer, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > ((String, Substring) Length, String Index)
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);
                            var stringIndex = LDKF.stringPrototypeIndexFromBack(string, substring, STRICT = stringLength, STRICT = substringLength);

                            // Logic
                            if (~stringIndex) {
                                // Initialization > Replacement
                                var replacement = "";

                                // Logic > Update > Replacer
                                if (LDKF.isString(replacer)) { var replacerString = replacer; replacer = function() { return replacerString } }
                                else if (LDKF.getArgumentsLength(arguments) < 3) replacer = function() { return "" };

                                // (Loop > )Update > Replacement
                                while (stringLength ^ stringIndex + substringLength) replacement = LDKF.stringPrototypeCharacterAt(string, stringLength -= 1) + replacement;
                                replacement = LDKF.functionPrototypeCall(replacer, string, stringIndex, stringIndex + substringLength) + replacement;
                                while (stringIndex) replacement = LDKF.stringPrototypeCharacterAt(string, stringIndex -= 1) + replacement;

                                // Return
                                return replacement
                            }

                            else
                                // Return
                                return string
                        };

                        // Replace From Front --- CHECKPOINT (Lapys) -> Performs `LapysDevelopmentKit.Functions.stringPrototypeReplaceFromBack` instead. --- WARN (Lapys) -> Code duplication of the `LapysDevelopmentKit.Functions.stringPrototypeReplaceFrom` method.
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceFromFront = function stringPrototypeReplaceFromFront(string, substring, replacer, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Initialization > ((String, Substring) Length, String Index)
                            var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                substringLength = SUBSTRING_LENGTH || LDKF.stringPrototypeLength(substring);
                            var stringIndex = LDKF.stringPrototypeIndexFromFront(string, substring, STRICT = stringLength, STRICT = substringLength);

                            // Logic
                            if (~stringIndex) {
                                // Initialization > Replacement
                                var replacement = "";

                                // Logic > Update > Replacer
                                if (LDKF.isString(replacer)) { var replacerString = replacer; replacer = function() { return replacerString } }
                                else if (LDKF.getArgumentsLength(arguments) < 3) replacer = function() { return "" };

                                // (Loop > )Update > Replacement
                                while (stringLength ^ stringIndex + substringLength) replacement = LDKF.stringPrototypeCharacterAt(string, stringLength -= 1) + replacement;
                                replacement = LDKF.functionPrototypeCall(replacer, string, stringIndex, stringIndex + substringLength) + replacement;
                                while (stringIndex) replacement = LDKF.stringPrototypeCharacterAt(string, stringIndex -= 1) + replacement;

                                // Return
                                return replacement
                            }

                            else
                                // Return
                                return string
                        };

                        // Slice
                        LapysDevelopmentKit.Functions.stringPrototypeSlice = function stringPrototypeSlice(string, indexA, indexB, STRING_LENGTH) {
                            // Initialization > (Slice, String Length)
                            var slice = "", stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                            // Logic
                            if (stringLength)
                                // Logic
                                if (indexA < indexB + 1 && indexA < stringLength + 1) {
                                    // (Loop > )Update > ...
                                    (indexB > stringLength - 1) && (indexB = stringLength - 1);
                                    while (indexA ^ indexB + 1) { slice += string[indexA]; indexA += 1 }
                                }

                                else if (indexA > indexB) {
                                    // Update > Slice
                                    slice += LDKF.stringPrototypeSlice(string, +0, indexB > stringLength - 1 ? stringLength : indexB);
                                    (indexA < stringLength) && (slice += LDKF.stringPrototypeSlice(string, indexA, stringLength))
                                }

                            // Return
                            return slice
                        };

                        // Snake --- NOTE (Lapys) -> Or Pothole case, Screaming-Snake case e.t.c.
                        LapysDevelopmentKit.Functions.stringPrototypeSnake = function stringPrototypeSnake(string, SCREAMING_SNAKE) {
                            // Initialization > String (Snake, Length, Iterator)
                            var stringSnake = "", stringLength = LDKF.stringPrototypeLength(string), stringIterator = stringLength;

                            // Loop
                            while (stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                // Update > String Snake --- MINIFY (Lapys)
                                LDKF.stringPrototypeIsAlphabet(character) && (stringSnake = (SCREAMING_SNAKE ? LDKF.stringPrototypeUpper : LDKF.stringPrototypeLower)((stringIterator ? LDKF.stringPrototypeCharacterAt(string, stringIterator - 1) : "") == ' ' ? '_' + character : character) + stringSnake)
                            }

                            // Return
                            return stringSnake
                        };

                        // Split
                        LapysDevelopmentKit.Functions.stringPrototypeSplit = function stringPrototypeSplit(string, delimiter, STRING_LENGTH, DELIMITER_LENGTH) {
                            // Initialization > (Array (Length), String (Length, Iterator))
                            var array = [], arrayLength = +0,
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string), stringIterator = stringLength;

                            // Logic
                            if (delimiter) {
                                // Initialization > (Delimiter Length, String (Includes Delimiter, Index))
                                var delimiterLength = DELIMITER_LENGTH || LDKF.stringPrototypeLength(delimiter),
                                    stringIncludesDelimiter = false,
                                    stringIndex = +0;

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic
                                    if (LDKF.stringPrototypeCharacterAt(string, stringLength - stringIterator - 1) == LDKF.stringPrototypeFirst(delimiter)) {
                                        // Initialization > Delimiter Iterator
                                        var delimiterIterator = 1;

                                        // Loop > Update > Delimiter Iterator
                                        while (delimiterIterator ^ delimiterLength && LDKF.stringPrototypeCharacterAt(string, (stringLength - stringIterator - 1) + delimiterIterator) == LDKF.stringPrototypeCharacterAt(delimiter, delimiterIterator)) delimiterIterator += 1;

                                        // Logic
                                        if (delimiterIterator == delimiterLength) {
                                            // Initialization > Index
                                            var index = stringIndex + !!stringIndex, slice = "";

                                            // Update > (Has Delimiter, String Index)
                                            stringIncludesDelimiter || (stringIncludesDelimiter = true);
                                            stringIndex = stringLength - stringIterator - 1;

                                            // Loop > Update > (Slice, Index)
                                            while (index ^ stringIndex) { slice += LDKF.stringPrototypeCharacterAt(string, index); index += 1 }

                                            // Logic > Update > Array (Length)
                                            if (slice) { array[arrayLength] = slice; arrayLength += 1 }
                                        }

                                        stringIterator = LDKF.numberPrototypeIsPositive(stringIterator - (delimiterLength - 1)) ? stringIterator - (delimiterLength - 1) : +0
                                    }
                                }

                                if (stringIncludesDelimiter) {
                                    // Logic
                                    if (stringIndex ^ stringLength - 1) {
                                        // Initialization > Slice
                                        var slice = "";

                                        // Loop > Update > Slice
                                        while (stringIndex ^ stringLength - 1) slice += LDKF.stringPrototypeCharacterAt(string, stringIndex += 1);

                                        // Update > Array
                                        array[arrayLength] = slice
                                    }
                                }

                                else
                                    // Update > Array
                                    LDKF.arrayPrototypeFree(array, STRICT = true)
                            }

                            else
                                // Loop > Update > Array (Length)
                                while (stringIterator) { array[arrayLength] = LDKF.stringPrototypeCharacterAt(string, stringLength - (stringIterator -= 1) - 1); arrayLength += 1 }

                            // Return
                            return array
                        };

                        // Start
                        LapysDevelopmentKit.Functions.stringPrototypeStart = function stringPrototypeStart(string, STRING_LENGTH) {
                            // Initialization > String (Start, Length, Iterator)
                            var stringStart = "",
                                stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringIterator = stringLength;

                            // Loop
                            while (stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                // Update > String Start --- MINIFY (Lapys)
                                stringStart = ((stringIterator ? LDKF.stringPrototypeCharacterAt(string, stringIterator - 1) : "") == ' ' ? LDKF.stringPrototypeUpper(character, STRICT = 1) : character) + stringStart
                            }

                            // Return
                            return stringStart
                        };

                        // Studly
                        LapysDevelopmentKit.Functions.stringPrototypeStudly = function stringPrototypeStudly(string, STRING_LENGTH) {
                            // Initialization > String (Iterator, Studly)
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(string), stringStudly = "";

                            // Loop > Update > String Studly
                            while (stringIterator) stringStudly = (LDKM.random() * 2 > 1 ? LDKF.stringPrototypeLower : LDKF.stringPrototypeUpper)(LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1), STRICT = 1) + stringStudly;

                            // Return
                            return stringStudly
                        };

                        // Swap --- NOTE (Lapys) -> Swap lower-case and upper-case characters of a String.
                        LapysDevelopmentKit.Functions.stringPrototypeSwap = function stringPrototypeSwap(string, STRING_LENGTH) {
                            // Initialization > (String Iterator, Swapped)
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(string), swapped = "";

                            // Loop
                            while (stringIterator) {
                                // Initialization > Character
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1);

                                // Logic > Update > Character
                                if (LDKF.stringPrototypeIsLower(character)) character = LDKF.stringPrototypeUpper(character);
                                else if (LDKF.stringPrototypeIsUpper(character)) character = LDKF.stringPrototypeLower(character);

                                // Update > Swapped
                                swapped = character + swapped
                            }

                            // Return
                            return swapped
                        };

                        // Title
                        LapysDevelopmentKit.Functions.stringPrototypeTitle = function stringPrototypeTitle(string, STRING_LENGTH) {
                            // Initialization > String Length
                            var stringLength = (STRING_LENGTH || LDKF.stringPrototypeLength(string)) + 1;

                            // Return
                            return LDKF.stringPrototypeCutLeft(LDKF.stringPrototypeStart(' ' + string, STRICT = stringLength), 1, STRICT = stringLength)
                        };

                        // To Debugging Message
                        LapysDevelopmentKit.Functions.stringPrototypeToDebuggingMessage = function stringPrototypeToDebuggingMessage(string) { return LDKI.Messages.Debugging.Prefix + string + LDKI.Messages.Debugging.Suffix };

                        // To Invalid Construction Error Message
                        LapysDevelopmentKit.Functions.stringPrototypeToInvalidConstructionErrorMessage = function stringPrototypeToInvalidConstructionErrorMessage(string) { return string + LDKI.Messages.Error.InvalidConstruction };

                        // Trim --- NOTE (Lapys) -> Also trims null termination characters (e.g.: `\0`) by default as well.
                        LapysDevelopmentKit.Functions.stringPrototypeTrim = function stringPrototypeTrim(string, substring) {
                            // Update > Arguments
                            arguments[+0] = LDKF.functionPrototypeApply(LDKF.stringPrototypeTrimRight, LDKF, arguments);

                            // Return
                            return LDKF.functionPrototypeApply(LDKF.stringPrototypeTrimLeft, LDKF, arguments)
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
                                trimmed = LDKF.stringPrototypeTrimLeft(trimmed, LDKC.Strings.trimmableCharacters);

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
                                trimmed = LDKF.stringPrototypeTrimRight(trimmed, LDKC.Strings.trimmableCharacters);

                            // Return
                            return trimmed
                        };

                        // Truncate
                        LapysDevelopmentKit.Functions.stringPrototypeTruncate = function stringPrototypeTruncate(string, maximumStringLength, replacer, STRING_LENGTH) { return LDKF.stringPrototypeTruncateFromFront(LDKF.stringPrototypeTruncateFromBack(string, maximumStringLength, replacer, STRICT = STRING_LENGTH), maximumStringLength, replacer) };

                        // Truncate From Back --- NOTE (Lapys) -> This routine is kinda odd because it`s really only useful in pretty-printing.
                        LapysDevelopmentKit.Functions.stringPrototypeTruncateFromBack = function stringPrototypeTruncateFromBack(string, maximumStringLength, replacer, STRING_LENGTH) {
                            // Initialization > Truncation
                            var truncation = "";

                            // Update > Replacer
                            replacer || (replacer = "");

                            // Logic
                            if (maximumStringLength) {
                                // Initialization > String (Length, Iterator)
                                var stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                    stringIterator = stringLength;

                                // Loop
                                while (stringIterator) {
                                    // Update > String Iterator
                                    stringIterator -= 1;

                                    // Logic > Update > ...
                                    if ((stringLength - stringIterator - 1) ^ maximumStringLength) truncation = LDKF.stringPrototypeCharacterAt(string, stringIterator) + truncation;
                                    else { truncation = (LDKF.isString(replacer) ? replacer : LDKF.functionPrototypeCall(replacer, string)) + truncation; stringIterator = +0 }
                                }
                            }

                            else
                                // Update > Truncation
                                truncation = LDKF.isString(replacer) ? replacer : LDKF.functionPrototypeCall(replacer, string);

                            // Return
                            return truncation
                        };

                        // Truncate From Front
                        LapysDevelopmentKit.Functions.stringPrototypeTruncateFromFront = function stringPrototypeTruncateFromFront(string, maximumStringLength, replacer, STRING_LENGTH) {
                            // Initialization > Truncation
                            var truncation = "";

                            // Update > Replacer
                            replacer || (replacer = "");

                            // Logic
                            if (maximumStringLength) {
                                // Initialization > String (Iterator, Length)
                                var stringIterator = +0,
                                    stringLength = STRING_LENGTH || LDKF.stringPrototypeLength(string);

                                // Loop
                                while (stringIterator ^ stringLength)
                                    // Logic > Update > (Truncation, String Iterator)
                                    if (stringIterator ^ maximumStringLength) { truncation += LDKF.stringPrototypeCharacterAt(string, stringIterator); stringIterator += 1 }
                                    else { truncation += LDKF.isString(replacer) ? replacer : LDKF.functionPrototypeCall(replacer, string); stringIterator = stringLength }
                            }

                            else
                                // Update > Truncation
                                truncation = LDKF.isString(replacer) ? replacer : LDKF.functionPrototypeCall(replacer, string);

                            // Return
                            return truncation
                        };

                        // Un-Escape Characters
                        LapysDevelopmentKit.Functions.stringPrototypeUnescapeCharacters = function stringPrototypeUnescapeCharacters(string) {
                            // Update > String
                            string = LDKF.stringPrototypeReplaceAll(string, '\b', "\\b", STRICT = null, STRICT = 1);
                            string = LDKF.stringPrototypeReplaceAll(string, '\f', "\\f", STRICT = null, STRICT = 1);
                            string = LDKF.stringPrototypeReplaceAll(string, '\n', "\\n", STRICT = null, STRICT = 1);
                            string = LDKF.stringPrototypeReplaceAll(string, '\r', "\\r", STRICT = null, STRICT = 1);
                            string = LDKF.stringPrototypeReplaceAll(string, '\t', "\\t", STRICT = null, STRICT = 1);
                            string = LDKF.stringPrototypeReplaceAll(string, '\v', "\\v", STRICT = null, STRICT = 1);

                            // Return
                            return string
                        };

                        // Upper
                        LapysDevelopmentKit.Functions.stringPrototypeUpper = function stringPrototypeUpper(string, STRING_LENGTH) {
                            // Initialization > String (Iterator, Lowercase)
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(string),
                                stringLowercase = "";

                            // Loop
                            while (stringIterator) {
                                // Initialization > (Character, Index)
                                var character = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1),
                                    index = LDKF.arrayPrototypeIndexFrom(LDKC.Strings.lowercaseAlphabets, character, STRICT = 26);

                                // Update > String Lowercase
                                stringLowercase = (~index ? LDKC.Strings.uppercaseAlphabets[index] : character) + stringLowercase
                            }

                            // Return
                            return stringLowercase
                        };

                // Throw Assert Error --- NOTE (Lapys) -> Exception handling functions defined here default to the `Error` constructor if their requested constructor is not defined.
                LapysDevelopmentKit.Functions.throwAssertError = function throwAssertError(message) { LDKF.functionPrototypeApply(LDKF.throwErrorByConstructor, LDKF, LDKF.arrayPrototypeConcatenate([LDKD.AssertError], arguments)) };

                // Throw Assertion Fail Error
                LapysDevelopmentKit.Functions.throwAssertionFailError = function throwAssertionFailError() { LDKF.throwAssertError("Assertion failed") };

                // Throw DOM Exception
                LapysDevelopmentKit.Functions.throwDOMException = function throwDOMException(message) { LDKF.functionPrototypeApply(LDKF.throwErrorByConstructor, LDKF, LDKF.arrayPrototypeConcatenate([LDKC.Assertions.has_DOMException_Constructor ? LDKO.domException : LDKO.error], arguments)) };

                // Throw Error
                LapysDevelopmentKit.Functions.throwError = function throwError() { LDKF.functionPrototypeApply(LDKF.throwErrorByConstructor, LDKF, LDKF.arrayPrototypeConcatenate([LDKO.error], arguments)) };

                // Throw Error By Constructor --- NOTE (Lapys) -> Of course, Constructor being an error constructor.
                LapysDevelopmentKit.Functions.throwErrorByConstructor = function throwErrorByConstructor(constructor, message, fileName, lineNumber, STACK) {
                    // Initialization > (Error, Length)
                    var error, length = LDKF.getArgumentsLength(arguments);

                    // Logic > ...
                    switch (length) {
                        case +0: error = null; break;
                        case 1: error = new constructor; break;
                        case 2: case 3: case 4: case 5:
                            // Logic > ...
                            switch (length) {
                                case 2: error = new constructor(message); break;
                                case 3: error = new constructor(message, fileName); break;
                                case 4: case 5:
                                    error = new constructor(message, fileName, lineNumber);
                                    (length ^ 5) || LDKF.errorCaptureStackTrace(error, STACK)
                            }

                            // Update > Error
                            LDKF.errorPrototypeSetMessage(error, length ? message : "")
                    }

                    // Error
                    throw error
                };

                // Throw Feature Error
                LapysDevelopmentKit.Functions.throwFeatureError = function throwFeatureError(feature, DEFER_FEATURE_STRING) {
                    // Update > Feature
                    DEFER_FEATURE_STRING || (feature = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? feature : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "FeatureError") ?
                        LDKF.throwErrorByConstructor(LDKD.FeatureError, feature) :
                        LDKF.throwLapysJSError(feature, STRICT = true)
                };

                // Throw Feature Not Available Error--- NOTE (Lapys) -> Native feature not available within the development environment.
                LapysDevelopmentKit.Functions.throwFeatureNotAvailableError = function throwFeatureNotAvailableError(feature, DEFER_FEATURE_STRING) {
                    // Update > Feature
                    DEFER_FEATURE_STRING || (feature = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? "The " + feature + " must be an available feature within this environment" : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "FeatureNotAvailableError") ?
                        LDKF.throwErrorByConstructor(LDKD.FeatureNotAvailableError, feature) :
                        LDKF.throwLapysJSError(feature, STRICT = true)
                };

                // Throw Feature Not Developed Error --- NOTE (Lapys) -> Internal library feature not yet planned for development.
                LapysDevelopmentKit.Functions.throwFeatureNotDevelopedError = function throwFeatureNotDevelopedError(feature, DEFER_FEATURE_STRING) {
                    // Update > Feature
                    DEFER_FEATURE_STRING || (feature = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? feature : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "FeatureNotDevelopedError") ?
                        LDKF.throwErrorByConstructor(LDKD.FeatureNotDevelopedError, feature) :
                        LDKF.throwLapysJSError(feature, STRICT = true)
                };

                // Throw Feature Not Available Warning --- NOTE (Lapys) -> Similar to the `LapysDevelopmentKit.throwFeatureNotAvailableError` method but "throws" a warning instead.
                LapysDevelopmentKit.Functions.throwFeatureNotAvailableWarning = function throwFeatureNotAvailableWarning(feature, DEFER_FEATURE_STRING) {
                    // Console > Warn
                    LDKF.consoleWarn(DEFER_FEATURE_STRING ? feature : LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? "The " + feature + " is not an available feature within this environment" : ""))
                };

                // Throw Feature Not Stable Warning --- NOTE (Lapys) -> Internal library feature not yet developed to a stable state.
                LapysDevelopmentKit.Functions.throwFeatureNotStableWarning = function throwFeatureNotStableWarning(feature, DEFER_FEATURE_STRING) {
                    // Console > Warn
                    LDKF.consoleWarn(DEFER_FEATURE_STRING ? feature : LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? "The " + feature + " is not a stable feature within this environment" : ""))
                };

                // Throw Feature Not Native Error --- NOTE (Lapys) -> Feature tested as non-native.
                LapysDevelopmentKit.Functions.throwFeatureNotNativeError = function throwFeatureNotNativeError(feature, DEFER_FEATURE_STRING) {
                    // Update > Feature
                    DEFER_FEATURE_STRING || (feature = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? "The " + feature + " must be a native feature within this environment" : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "FeatureNotNativeError") ?
                        LDKF.throwErrorByConstructor(LDKD.FeatureNotNativeError, feature) :
                        LDKF.throwLapysJSError(feature, STRICT = true)
                };

                // Throw Initiate Phase Error --- NOTE (Lapys) -> Internal library-specific exception for it`s Initiation phase.
                LapysDevelopmentKit.Functions.throwInitiatePhaseError = function throwInitiatePhaseError(message, DEFER_MESSAGE) {
                    // Update > Feature
                    DEFER_MESSAGE || (message = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? message : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "InitiatePhaseError") ?
                        LDKF.throwErrorByConstructor(LDKD.InitiatePhaseError, message) :
                        LDKF.throwLapysJSError(message, STRICT = true)
                };

                // Throw LapysJS Error --- NOTE (Lapys) -> Internal library-specific exception.
                LapysDevelopmentKit.Functions.throwLapysJSError = function throwLapysJSError(message, DEFER_MESSAGE) {
                    // Update > Message
                    DEFER_MESSAGE || (message = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(message) ? message : ""));

                    // Logic > Error
                    if (LDKF.objectPrototypeHasProperty(LDKD, "LapysJSError")) LDKF.throwErrorByConstructor(LDKD.LapysJSError, message);
                    else throw message
                };

                // Throw Non-Specified Error --- NOTE (Lapys) -> Permitted non-specified exception (not necessarily an `Error` object).
                LapysDevelopmentKit.Functions.throwNonSpecifiedError = function throwNonSpecifiedError() { throw ANY };

                // Throw Public Access Allowed Warning --- NOTE (Lapys) -> Some private features of the library have become public.
                LapysDevelopmentKit.Functions.throwPublicAccessAllowedWarning = function throwPublicAccessAllowedWarning() {
                    // Console > Warn
                    LDKF.consoleWarn(LDKF.stringPrototypeToDebuggingMessage("Public access to the private features of LapysJS has been allowed"))
                };

                // Throw Reset Phase Error
                LapysDevelopmentKit.Functions.throwResetPhaseError = function throwResetPhaseError(message, DEFER_MESSAGE) {
                    // Update > Feature
                    DEFER_MESSAGE || (message = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? message : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "ResetPhaseError") ?
                        LDKF.throwErrorByConstructor(LDKD.ResetPhaseError, message) :
                        LDKF.throwLapysJSError(message, STRICT = true)
                };

                // Throw Terminate Phase Error --- NOTE (Lapys) -> Internal library-specific exception for it`s Termination phase.
                LapysDevelopmentKit.Functions.throwTerminatePhaseError = function throwTerminatePhaseError(message, DEFER_MESSAGE) {
                    // Update > Feature
                    DEFER_MESSAGE || (message = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? message : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "TerminatePhaseError") ?
                        LDKF.throwErrorByConstructor(LDKD.TerminatePhaseError, message) :
                        LDKF.throwLapysJSError(message, STRICT = true)
                };

                // Throw Type Error
                LapysDevelopmentKit.Functions.throwTypeError = function throwTypeError(message) { LDKF.functionPrototypeApply(LDKF.throwErrorByConstructor, LDKF, LDKF.arrayPrototypeConcatenate([LDKO.typeError], arguments)) };

                // Throw Update Phase Error --- NOTE (Lapys) -> Internal library-specific exception for it`s Update phase.
                LapysDevelopmentKit.Functions.throwUpdatePhaseError = function throwUpdatePhaseError(message, DEFER_MESSAGE) {
                    // Update > Feature
                    DEFER_MESSAGE || (message = LDKF.stringPrototypeToDebuggingMessage(LDKF.getArgumentsLength(arguments) ? message : ""));

                    // Error
                    LDKF.objectPrototypeHasProperty(LDKD, "UpdatePhaseError") ?
                        LDKF.throwErrorByConstructor(LDKD.UpdatePhaseError, message) :
                        LDKF.throwLapysJSError(message, STRICT = true)
                };

                // To Array --- NOTE (Lapys) -> Converts only array-like objects into pure `Array``s.
                LapysDevelopmentKit.Functions.toArray = function toArray(arrayLike, ARRAY_LIKE_LENGTH, IS_ARGUMENTS_OBJECT) {
                    // Logic
                    if (IS_ARGUMENTS_OBJECT)
                        // Return
                        return LDKF.arrayPrototypeClone(arrayLike);

                    else if (LDKF.isArray(arrayLike))
                        // Return
                        return arrayLike;

                    else if (LDKF.isArrayLike(arrayLike)) {
                        // Initialization > (Array, Iterator)
                        var array = [], iterator = ARRAY_LIKE_LENGTH || LDKF.arrayLikePrototypeLength(arrayLike);

                        // Loop > Update > (Iterator, Array)
                        while (iterator) { iterator -= 1; array[iterator] = LDKF.arrayLikePrototypeElementAt(arrayLike, iterator) }

                        // Return
                        return array
                    }

                    else
                        // Error
                        LDKF.throwTypeError("Can not parse " + LDKF.toPrettyString(arrayLike) + " to array-like object.")
                };

                // To Number
                LapysDevelopmentKit.Functions.toNumber = function toNumber(argument) {
                    // Initialization > Number
                    var number = argument;

                    // Logic
                    if (LDKF.isNumber(argument))
                        // Update > Number
                        number = argument - +0;

                    else {
                        // Initialization > Is Casted
                        var isCasted = false;

                        // Error Handling > Logic > Update > Number --- NOTE (Lapys) -> Unfortunately, converting an Argument to number can be very error-prone.
                        try { number = argument - +0; isCasted = true } catch (error) {}
                        try { if (!isCasted) { number = LDKO.number(argument); isCasted = true } } catch (error) {}
                        try { if (!isCasted) { number = LDKF.toNumber(LDKF.toString(argument)); isCasted = true } } catch (error) {}
                    }

                    // Return
                    return number
                };

                // To Pretty String --- NOTE (Lapys) -> This routine is kinda odd because it`s really only useful in pretty-printing.
                LapysDevelopmentKit.Functions.toPrettyString = function toPrettyString(argument) {
                    // Logic
                    if (LDKF.isString(argument))
                        // Return
                        return LDKF.stringPrototypeLength(argument) == 1 ? '\'' + argument + '\'' : '"' + LDKF.stringPrototypeTruncateFromFront(LDKF.stringPrototypeUnescapeCharacters(argument), 30, "...") + '"';

                    else if (LDKF.isFunction(argument))
                        // Return
                        return LDKF.functionPrototypeHead(argument) + " { ... }";

                    else if (LDKF.isObjectLike(argument))
                        // Logic
                        if (LDKF.isArray(argument))
                            // Return
                            return "[...]";

                        else if (LDKF.isObject(argument))
                            // Return
                            return "{ ... }";

                        else if (LDKF.isRegularExpression(argument))
                            // Return
                            return '/' + LDKF.stringPrototypeTruncateFromFront(LDKF.stringPrototypeUnescapeCharacters(LDKF.regularExpressionPrototypeSource(argument)), 30, "...") + '/';

                        else {
                            // Initialization > Constructor
                            var constructor = LDKF.objectPrototypeConstructor(argument);

                            // Return
                            return constructor === LDKO.object ? "{ ... }" : LDKF.functionPrototypeName(constructor) + " { ... }"
                        }

                    else if (LDKF.isSymbol(argument))
                        // Return
                        return "Symbol(...)";

                    else
                        // Return
                        return LDKF.toString(argument)
                };

                // To String
                LapysDevelopmentKit.Functions.toString = function toString(argument, USE_STRING_CONCATENATION) {
                    // Initialization > String
                    var string = null;

                    // Error Handling > ...
                    try { (USE_STRING_CONCATENATION || !LDKF.isSymbol(argument)) && (string = "" + argument) }
                    catch (error) { if (!USE_STRING_CONCATENATION) try { LDKF.objectPrototypeHasProperty(LDKO, "string") && (string = LDKO.string(argument)) } catch (error) {} }

                    // Error
                    LDKF.isNull(string) && LDKF.throwTypeError("Cannot convert argument to a string");

                    // Return
                    return string
                };

            /* Information */
                // Messages
                    // Debugging > (Vendor String, Prefix, Suffix)
                    LapysDevelopmentKit.Information.Messages.Debugging.VendorString = "[LapysJS v" + VERSION + ']';
                    LapysDevelopmentKit.Information.Messages.Debugging.Prefix = LDKI.Messages.Debugging.VendorString + " ->\n\t";
                    LapysDevelopmentKit.Information.Messages.Debugging.Suffix = '\n';

                    // Error > ... --- REDACT
                    LapysDevelopmentKit.Information.Messages.Error.CompatibleWithLibrarySuffix = " is not compatible with the LapysJS library";
                    LapysDevelopmentKit.Information.Messages.Error.InvalidConstruction = " cannot be invoked without `new`";
                    LapysDevelopmentKit.Information.Messages.Error.JavaScriptEngineSupportSuffix = " must be supported by this JavaScript engine";
                    LapysDevelopmentKit.Information.Messages.Error.LibraryIsPreinstalled = "The LapysJS library is already installed";
                    LapysDevelopmentKit.Information.Messages.Error.NativeToEnvironmentSuffix = " must be native to this development environment";

                /* Temporary Data */
                    // DOM
                    LapysDevelopmentKit.tmp.dom = {};

                    // Settings
                    LapysDevelopmentKit.tmp.settings = typeof LapysJS != "undefined" && LDKF.isConstructible(LapysJS) ? LapysJS : {};

                /* Settings */
                    // Debug Mode --- NOTE (Lapys) -> Allows global & public access to the Lapys Development Kit if set to `true`.
                    LapysDevelopmentKit.Information.Settings.DebugMode = !!LDK.tmp.settings.debug;

                    // Ignore Missing Features --- NOTE (Lapys) -> Prevent errors & warnings of non-available features being thrown.
                    LapysDevelopmentKit.Information.Settings.IgnoreMissingFeatures = !!LDK.tmp.settings.universal || !!LDK.tmp.settings.ignoreMissingFeatures;

                    // Ignore Warnings
                    LapysDevelopmentKit.Information.Settings.IgnoreWarnings = (function(warnings) {
                        // Logic --- CHECKPOINT (Lapys)
                        if (warnings)
                            // Logic
                            if (typeof warnings == "object") {
                                var ignoredWarnings = [];
                                if ("public-access" in warnings) {}
                            }

                            else
                                // Return
                                return !warnings;

                        else
                            // Return
                            return true
                    })(LDK.tmp.settings.warn);

                    // Public Mode --- NOTE (Lapys) -> Prevents spoof testing for native JavaScript features before integration into the Lapys Development Kit if set to `true`.
                    LapysDevelopmentKit.Information.Settings.PublicMode = !!LDK.tmp.settings.public;

            /* Test
                    --- NOTE ---
                        #Lapys:
                            All type-testing methods (e.g.: `LapysDevelopmentKit.Test.isDocumentLike`) here are poorly defined because
                            they only defer to the properties of the proposed Argument to be tested (a.k.a.: Duck-typing (https://en.wikipedia.org/wiki/Duck_typing)).

                    --- WARN (Lapys) -> Only use these for special-case assertion.
                        - Constructor properties are also not tested as well.
            */
                // Can Parse Strings
                LapysDevelopmentKit.Test.canParseStrings = function canParseStrings() { return LDKF.isFunction(LDKO.stringPrototypeCharacterAt, STRICT = true) && (LapysDevelopmentKit.Test.canParseStrings = function canParseStrings() { return true })() };

                // Is Browser Environment --- WARN (Lapys) -> Used only as a reference object, not a routine.
                LapysDevelopmentKit.Test.isBrowserEnvironment = function isBrowserEnvironment() { return LDKC.Assertions.isBrowserEnvironment };

                // Is Constructor --- NOTE (Lapys) -> Tests if a constructor exist; For semantics, really.
                LapysDevelopmentKit.Test.isConstructor = function isConstructor(argument) { return LDKF.isNonVoid(argument) };

                // Is CSS Style Declaration-Like
                LapysDevelopmentKit.Test.isCSSStyleDeclarationLike = function isCSSStyleDeclarationLike(argument) {
                    // Return
                    return LDKF.isCSSSourceString(LDKF.objectPrototypeGetProperty(argument, "cssText", STRICT = true))
                };

                // Is Document-Like
                LapysDevelopmentKit.Test.isDocumentLike = function isDocumentLike(argument, ASSERT_BY_RECURSION) {
                    // Return
                    return (
                        LDKT.isEventTargetLike(argument) &&
                        LDKT.isNodeLike(argument, STRICT = ASSERT_BY_RECURSION, STRICT = ["nodeName", "nodeType", "nodeValue"])
                    ) && (
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "activeElement", STRICT = true), LDKT.isElementLike, LDKF.isNull) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "alinkColor", STRICT = true)) &&
                        LDKT.isHTMLCollectionLike(LDKF.objectPrototypeGetProperty(argument, "anchors", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "appendChild", STRICT = true)) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "bgColor", STRICT = true)) &&
                        (ASSERT_BY_RECURSION ? LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "body", STRICT = true), LDKT.isHTMLFrameSetElementLike, LDKT.isHTMLBodyElementLike, LDKF.isNull) : true) &&
                        LDKF.isCharacterEncodingString(LDKF.objectPrototypeGetProperty(argument, "charset", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "cloneNode", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "close", STRICT = true)) &&
                        (function(propertyValue) { return propertyValue === "BackCompat" || propertyValue === "CSS1Compat" })(LDKF.objectPrototypeGetProperty(argument, "compatMode")) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "cookie")) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "createAttribute", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "createComment", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "createDocumentFragment", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "createElement", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "createTextNode", STRICT = true)) &&
                        (function(propertyValue) { return propertyValue === "inherit" || propertyValue === "Inherit" || propertyValue === "off" || propertyValue === "on" })(LDKF.objectPrototypeGetProperty(argument, "designMode")) &&
                        (function(propertyValue) { return !propertyValue || propertyValue === "ltr" || propertyValue === "rtl" })(LDKF.objectPrototypeGetProperty(argument, "dir")) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "doctype"), LDKF.isObjectLike, LDKF.isNull) &&
                        LDKT.isElementLike(LDKF.objectPrototypeGetProperty(argument, "documentElement")) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "domain"), LDKF.isString, LDKF.isNull) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "elementFromPoint", STRICT = true)) &&
                        LDKT.isNodeListLike(LDKF.objectPrototypeGetProperty(argument, "embeds", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "execCommand", STRICT = true)) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "fgColor", STRICT = true)) &&
                        LDKT.isHTMLCollectionLike(LDKF.objectPrototypeGetProperty(argument, "forms")) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getElementById", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getElementsByName", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getElementsByTagName", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "hasChildNodes", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "hasFocus", STRICT = true)) &&
                        LDKT.isHTMLCollectionLike(LDKF.objectPrototypeGetProperty(argument, "images", STRICT = true)) &&
                        LDKT.isDOMImplementationLike(LDKF.objectPrototypeGetProperty(argument, "implementation", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "insertBefore", STRICT = true)) &&
                        LDKF.isDateString(LDKF.objectPrototypeGetProperty(argument, "lastModified", STRICT = true)) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "linkColor", STRICT = true)) &&
                        LDKT.isNodeListLike(LDKF.objectPrototypeGetProperty(argument, "links")) &&
                        LDKT.isLocationLike(LDKF.objectPrototypeGetProperty(argument, "location")) &&
                        LDKF.objectPrototypeGetProperty(argument, "nodeName", STRICT = true) === "#document" &&
                        LDKF.objectPrototypeGetProperty(argument, "nodeType", STRICT = true) === 9 &&
                        LDKF.isNull(LDKF.objectPrototypeGetProperty(argument, "nodeValue", STRICT = true)) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onreadystatechange", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onselectionchange", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onselectstart", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "open", STRICT = true)) &&
                        LDKT.isHTMLCollectionLike(LDKF.objectPrototypeGetProperty(argument, "plugins", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "queryCommandEnabled", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "queryCommandIndeterm", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "queryCommandState", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "queryCommandSupported", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "queryCommandValue", STRICT = true)) &&
                        (function(propertyValue) { return propertyValue === "complete" || propertyValue === "interactive" || propertyValue === "loading" })(LDKF.objectPrototypeGetProperty(argument, "readyState", STRICT = true)) &&
                        LDKF.isURLString(LDKF.objectPrototypeGetProperty(argument, "referrer", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "removeChild", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "replaceChild", STRICT = true)) &&
                        LDKT.isHTMLCollectionLike(LDKF.objectPrototypeGetProperty(argument, "scripts", STRICT = true)) &&
                        LDKF.objectPrototypeHasProperty(argument, "styleSheets", STRICT = true) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "title", STRICT = true)) &&
                        LDKF.isURLString(LDKF.objectPrototypeGetProperty(argument, "URL", STRICT = true)) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "vlinkColor", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "write", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "writeln", STRICT = true))
                    )
                };

                // Is DOM Implementation-Like
                LapysDevelopmentKit.Test.isDOMImplementationLike = function isDOMImplementationLike(argument) {
                    // Return
                    return LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "hasFeature", STRICT = true))
                };

                // Is Element-Like
                LapysDevelopmentKit.Test.isElementLike = function isElementLike(argument) {
                    // Return
                    return LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "appendChild", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "blur", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "cloneNode", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "contains", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "focus", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getAttribute", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getAttributeNode", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getBoundingClientRect", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getClientRects", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getElementsByTagName", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "hasChildNodes", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "insertAdjacentElement", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "insertAdjacentHTML", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "insertAdjacentText", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "insertBefore", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "normalize", STRICT = true)) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "parentElement", STRICT = true), LDKT.isElementLike, LDKF.isNull) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "removeAttribute", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "removeAttributeNode", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "removeChild", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "replaceChild", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "scrollIntoView", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "setAttribute", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "setAttributeNode", STRICT = true))
                };

                // Is Event-Like
                LapysDevelopmentKit.Test.isEventLike = function isEventLike(argument) {
                    // Return
                    return (
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getAttribute", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "removeAttribute", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "setAttribute", STRICT = true))
                    ) || (
                        LDKF.objectPrototypeGetProperty(argument, "AT_TARGET", STRICT = true) === 2 &&
                        LDKF.isBoolean(LDKF.objectPrototypeGetProperty(argument, "bubbles", STRICT = true)) &&
                        LDKF.objectPrototypeGetProperty(argument, "BUBBLING_PHASE", STRICT = true) === 3 &&
                        LDKF.isBoolean(LDKF.objectPrototypeGetProperty(argument, "cancelable", STRICT = true)) &&
                        LDKF.isBoolean(LDKF.objectPrototypeGetProperty(argument, "cancelBubble", STRICT = true)) &&
                        LDKF.objectPrototypeGetProperty(argument, "CAPTURING_PHASE", STRICT = true) === 1 &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeHasProperty(argument, "currentTarget", STRICT = true), LDKT.isEventTargetLike, LDKF.isNull) &&
                        LDKF.isBoolean(LDKF.objectPrototypeGetProperty(argument, "defaultPrevented", STRICT = true)) &&
                        (function(propertyValue) { return propertyValue === 0 || propertyValue === 1 || propertyValue === 2 || propertyValue === 3 })(LDKF.objectPrototypeGetProperty(argument, "eventPhase", STRICT = true)) &&
                        LDKF.isBoolean(LDKF.objectPrototypeGetProperty(argument, "isTrusted", STRICT = true)) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeHasProperty(argument, "srcElement", STRICT = true), LDKT.isEventTargetLike, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeHasProperty(argument, "target", STRICT = true), LDKT.isEventTargetLike, LDKF.isNull) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeHasProperty(argument, "timeStamp", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeHasProperty(argument, "type", STRICT = true))
                    )
                };

                // Is Event Target-Like
                LapysDevelopmentKit.Test.isEventTargetLike = function isEventTargetLike(argument) {
                    // Return
                    return LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onclick", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondblclick", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondragstart", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onkeydown", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onkeypress", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onkeyup", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmousedown", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmousemove", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmouseout", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmouseover", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmouseup", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmousewheel", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull)
                };

                // Is HTML All Collection-Like
                LapysDevelopmentKit.Test.isHTMLAllCollectionLike = function isHTMLAllCollectionLike(argument) {
                    // Return
                    return LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "item", STRICT = true)) &&
                        LDKF.isPositiveIntegerNumber(LDKF.objectPrototypeGetProperty(argument, "length", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "namedItem", STRICT = true))
                };

                // Is HTML Body Element-Like
                LapysDevelopmentKit.Test.isHTMLBodyElementLike = function isHTMLBodyElementLike(argument, ASSERT_BY_RECURSION) {
                    // Return
                    return (
                        LDKT.isElementLike(argument, STRICT = ASSERT_BY_RECURSION) &&
                        LDKT.isNodeLike(argument, STRICT = ASSERT_BY_RECURSION, STRICT = ["nodeName", "nodeType", "nodeValue"])
                    ) && (
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "aLink", STRICT = true)) &&
                        LDKT.isNamedNodeMapLike(LDKF.objectPrototypeGetProperty(argument, "attributes", STRICT = true)) &&
                        LDKF.objectPrototypeHasProperty(argument, "background", STRICT = true) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "bgColor", STRICT = true)) &&
                        LDKT.isHTMLCollectionLike(LDKF.objectPrototypeGetProperty(argument, "children", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "className", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "clientHeight", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "clientLeft", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "clientTop", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "clientWidth", STRICT = true)) &&
                        (function(propertyValue) { return propertyValue === "false" || propertyValue === "inherit" || propertyValue === "true" })(LDKF.objectPrototypeGetProperty(argument, "contentEditable", STRICT = true)) &&
                        (function(propertyValue) { return !propertyValue || propertyValue === "auto" || propertyValue === "ltr" || propertyValue === "rtl" })(LDKF.objectPrototypeGetProperty(argument, "dir", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "id", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "innerHTML", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "innerText", STRICT = true)) &&
                        LDKF.isBoolean(LDKF.objectPrototypeGetProperty(argument, "isContentEditable", STRICT = true)) &&
                        (function(propertyValue) { if (LDKF.isString(propertyValue)) if (LDKF.stringPrototypeIncludes(propertyValue, '-', STRICT = null, STRICT = 1)) return LDKF.stringPrototypeBeforeFromBack(propertyValue, '-'); else if (LDKF.stringPrototypeIncludes(propertyValue, ',', STRICT = null, STRICT = 1)) return LDKF.arrayPrototypeEvery(LDKF.arrayPrototypeBuild(LDKF.stringPrototypeSplit(propertyValue, ','), function(index, languageCode) { return LDKF.stringPrototypeTrim(languageCode) }), function(index, languageCode) { return LDKF.stringPrototypeIsLanguageCode(languageCode) }); else return LDKF.isLanguageCodeString(propertyValue); else return false })(LDKF.objectPrototypeGetProperty(argument, "lang", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "link", STRICT = true)) &&
                        LDKF.objectPrototypeEvery(LDKF.objectPrototypeGetProperty(argument, "nodeName", STRICT = true), LDKF.stringPrototypeIsUpper, LDKF.stringPrototypeIsDOMElementTagName, LDKF.isString) &&
                        LDKF.objectPrototypeGetProperty(argument, "nodeType", STRICT = true) === 1 &&
                        LDKF.isNull(LDKF.objectPrototypeGetProperty(argument, "nodeValue", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "offsetHeight", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "offsetLeft", STRICT = true)) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "offsetParent", STRICT = true), LDKT.isElementLike, LDKF.isNull) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "offsetTop", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "offsetWidth", STRICT = true)) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onclick", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "oncontextmenu", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "oncopy", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "oncut", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondblclick", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondrag", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondragend", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondragenter", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondragleave", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondragover", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondragstart", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ondrop", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onkeydown", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onkeypress", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onkeyup", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmousedown", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmousemove", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmouseout", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmouseover", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onmouseup", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onoffline", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ononline", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onpaste", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onselect", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "onselectstart", STRICT = true), LDKF.isUserDefinedFunction, LDKF.isNull) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "outerHTML", STRICT = true)) &&
                        (ASSERT_BY_RECURSION ? LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ownerDocument", STRICT = true), LDKT.isDocumentLike, LDKF.isNull) : true) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "scrollHeight", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "scrollLeft", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "scrollTop", STRICT = true)) &&
                        LDKF.isPositiveNumber(LDKF.objectPrototypeGetProperty(argument, "scrollWidth", STRICT = true)) &&
                        LDKT.isCSSStyleDeclarationLike(LDKF.objectPrototypeGetProperty(argument, "style", STRICT = true)) &&
                        LDKF.isIntegerNumber(LDKF.objectPrototypeGetProperty(argument, "tabIndex", STRICT = true)) &&
                        LDKF.objectPrototypeEvery(LDKF.objectPrototypeGetProperty(argument, "tagName", STRICT = true), LDKF.stringPrototypeIsUpper, LDKF.stringPrototypeIsDOMElementTagName, LDKF.isString) &&
                        LDKF.isColorCodeString(LDKF.objectPrototypeGetProperty(argument, "text", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "title", STRICT = true)) &&
                        LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "vLink", STRICT = true))
                    )
                };

                // Is HTML Collection-Like
                LapysDevelopmentKit.Test.isHTMLCollectionLike = function isHTMLCollectionLike(argument) {
                    // Return
                    return LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "item", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "namedItem", STRICT = true))
                };

                // Is HTML Frame Set Element-Like
                LapysDevelopmentKit.Test.isHTMLFrameSetElementLike = function isHTMLFrameSetElementLike(argument, ASSERT_BY_RECURSION) {
                    // Return
                    return LDKT.isElementLike(argument, STRICT = ASSERT_BY_RECURSION) &&
                        LDKT.isNodeLike(argument, STRICT = ASSERT_BY_RECURSION, STRICT = ["nodeName", "nodeType", "nodeValue"])
                };

                // Is Location-Like
                LapysDevelopmentKit.Test.isLocationLike = function isLocationLike(argument) {
                    // Return
                    return LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "assign", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "reload", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "replace", STRICT = true))
                };

                // Is Named Node Map-Like
                LapysDevelopmentKit.Test.isNamedNodeMapLike = function isNamedNodeMapLike(argument) {
                    // Return
                    return LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "getNamedItem", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "item", STRICT = true)) &&
                        LDKF.isPositiveIntegerNumber(LDKF.objectPrototypeGetProperty(argument, "length", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "removeNamedItem", STRICT = true)) &&
                        LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "setNamedItem", STRICT = true))
                };

                // Is Node-Like
                LapysDevelopmentKit.Test.isNodeLike = function isNodeLike(argument, ASSERT_BY_RECURSION, IGNORE) {
                    // Update > Ignore
                    IGNORE || (IGNORE = ANY);

                    // Return
                    return (LDKF.arrayPrototypeIncludes(IGNORE, "childNodes") || LDKT.isNodeListLike(LDKF.objectPrototypeGetProperty(argument, "childNodes", STRICT = true))) &&
                        (ASSERT_BY_RECURSION ? (LDKF.arrayPrototypeIncludes(IGNORE, "firstChild") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "firstChild"), LDKT.isNodeLike, LDKF.isNull)) : true) &&
                        (ASSERT_BY_RECURSION ? (LDKF.arrayPrototypeIncludes(IGNORE, "nextSibling") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "nextSibling", STRICT = true), LDKT.isNodeLike, LDKF.isNull)) : true) &&
                        (LDKF.arrayPrototypeIncludes(IGNORE, "nodeName") || LDKF.isString(LDKF.objectPrototypeGetProperty(argument, "nodeName", STRICT = true))) &&
                        (LDKF.arrayPrototypeIncludes(IGNORE, "nodeType") || LDKF.isPositiveIntegerNumber(LDKF.objectPrototypeGetProperty(argument, "nodeType", STRICT = true))) &&
                        (LDKF.arrayPrototypeIncludes(IGNORE, "nodeValue") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "nodeValue", STRICT = true), LDKF.isString, LDKF.isNull)) &&
                        (ASSERT_BY_RECURSION ? (LDKF.arrayPrototypeIncludes(IGNORE, "lastChild") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "lastChild"), LDKT.isNodeLike, LDKF.isNull)) : true) &&
                        (ASSERT_BY_RECURSION ? (LDKF.arrayPrototypeIncludes(IGNORE, "ownerDocument") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "ownerDocument", STRICT = true), LDKT.isDocumentLike, LDKF.isNull)) : true) &&
                        (LDKF.arrayPrototypeIncludes(IGNORE, "parentNode") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "parentNode", STRICT = true), LDKT.isElementLike, LDKT.isNodeLike, LDKF.isNull)) &&
                        (ASSERT_BY_RECURSION ? (LDKF.arrayPrototypeIncludes(IGNORE, "previousSibling") || LDKF.objectPrototypeSome(LDKF.objectPrototypeGetProperty(argument, "previousSibling", STRICT = true), LDKT.isNodeLike, LDKF.isNull)) : true)
                };

                // Is Node List-Like
                LapysDevelopmentKit.Test.isNodeListLike = function isNodeListLike(argument) {
                    // Return
                    return LDKF.isNodeListLike(argument) || (LDKF.isNativeFunction(LDKF.objectPrototypeGetProperty(argument, "item", STRICT = true)))
                };

                // Object > Prototype
                    // Consider Native Constructor Of Object
                    LapysDevelopmentKit.Test.objectPrototypeConsiderNativeConstructorOfObject = function objectPrototypeConsiderNativeConstructorOfObject(object, propertyName, CONSTRUCTOR, THROWN_FEATURE_STRING_ON_CONSTRUCTOR_NOT_NATIVE_ERROR) {
                        // Constant > (Consideration, Considered)
                        var consideration = new LDKD.Consideration, considered = consideration.data;

                        // Modification > ...
                        consideration.alternateConditions = [];
                        consideration.conditionalFallbacks = [];
                        consideration.conditions = [];
                        consideration.context = LDKD.ConsiderationPrototype.contexts["NATIVE_FEATURE_ASSERTION"];
                        consideration.forcedConditions = [];

                        considered.constructorRoutine = CONSTRUCTOR || LDKF.objectPrototypeGetProperty(object, propertyName, STRICT = true);
                        considered.object = object;
                        considered.propertyName = propertyName;
                        considered["THROWN_FEATURE_STRING_ON_CONSTRUCTOR_NOT_NATIVE_ERROR"] = THROWN_FEATURE_STRING_ON_CONSTRUCTOR_NOT_NATIVE_ERROR;

                        // Return
                        return consideration
                    };

                    // Consider Native Method Of Object
                    LapysDevelopmentKit.Test.objectPrototypeConsiderNativeMethodOfObject = function objectPrototypeConsiderNativeMethodOfObject(object, propertyName, METHOD, THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR, REGISTER_CONSIDERATION_IN_STORAGE) {
                        // Constant > (Consideration, Considered)
                        var consideration = new LDKD.Consideration, considered = consideration.data;

                        // Modification > ...
                        consideration.alternateConditions = [];
                        consideration.conditionalFallbacks = [];
                        consideration.conditions = [];
                        consideration.context = LDKD.ConsiderationPrototype.contexts["NATIVE_FEATURE_ASSERTION"];
                        consideration.forcedConditions = [];

                        considered.method = METHOD || LDKF.objectPrototypeGetProperty(object, propertyName, STRICT = true);
                        considered.object = object;
                        considered.propertyName = propertyName;
                        considered["THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR"] = THROWN_FEATURE_STRING_ON_METHOD_NOT_NATIVE_ERROR;

                        // Update > (((Lapys Development Kit > Storage) > Registry) > Consideration > Of Native Method Of Object)
                        REGISTER_CONSIDERATION_IN_STORAGE && LDKF.arrayPrototypePush(LDKS.Registry.Consideration.OfNativeMethodOfObject, consideration);

                        // Return
                        return consideration
                    };

                    // Consider Native Object Of Object
                    LapysDevelopmentKit.Test.objectPrototypeConsiderNativeObjectOfObject = function objectPrototypeConsiderNativeObjectOfObject(object, propertyName, OBJECT, THROWN_FEATURE_STRING_ON_OBJECT_NOT_NATIVE_ERROR) {
                        // Constant > (Consideration, Considered)
                        var consideration = new LDKD.Consideration, considered = consideration.data;

                        // Modification > ...
                        consideration.alternateConditions = [];
                        consideration.conditionalFallbacks = [];
                        consideration.conditions = [];
                        consideration.context = LDKD.ConsiderationPrototype.contexts["NATIVE_FEATURE_ASSERTION"];
                        consideration.forcedConditions = [];

                        considered.childObject = OBJECT || LDKF.objectPrototypeGetProperty(object, propertyName, STRICT = true);
                        considered.object = object;
                        considered.propertyName = propertyName;
                        considered["THROWN_FEATURE_STRING_ON_OBJECT_NOT_NATIVE_ERROR"] = THROWN_FEATURE_STRING_ON_OBJECT_NOT_NATIVE_ERROR;

                        // Return
                        return consideration
                    };

                    // Is Native Constructor Of Object --- NOTE (Lapys) -> Is there any way to improve this test?
                    LapysDevelopmentKit.Test.objectPrototypeIsNativeConstructorOfObject = function objectPrototypeIsNativeConstructorOfObject(object, propertyName, CONSTRUCTOR, ASSERT_BY_CONSTRUCTOR_VALUE) {
                        // Initialization > Constructor
                        var constructor = CONSTRUCTOR || LDKF.objectPrototypeGetProperty(object, propertyName);

                        // Return
                        return LDKT.objectPrototypeIsNativeMethodOfObject(object, propertyName, STRICT = constructor)
                    };

                    // Is Native Method Of Object
                    LapysDevelopmentKit.Test.objectPrototypeIsNativeMethodOfObject = function objectPrototypeIsNativeMethodOfObject(object, propertyName, METHOD) {
                        // Initialization > Method
                        var method = METHOD || LDKF.objectPrototypeGetProperty(object, propertyName);

                        // Return
                        return LDKT.canParseStrings() && (
                            LDKF.isFunction(method) && LDKF.functionPrototypeHasStandardSource(method) &&
                            LDKF.functionPrototypeIsNative(method) && (LDKF.functionPrototypeName(method) || propertyName) == propertyName
                        )
                    };

                // Request `document` Prototype
                LapysDevelopmentKit.Test.request_document_Prototype = function request_document_Prototype() {
                    // Constant > Evaluation
                    var evaluation = LDKC.Assertions.has_Document_Constructor ? LDKO.documentPrototype : (LDKC.Assertions.has_HTMLDocument_Constructor ? LDKO.htmlDocumentPrototype : null);

                    // Return
                    return (LapysDevelopmentKit.Test.request_document_Prototype = function request_document_Prototype() { return evaluation })()
                };

                // String > Prototype
                    // Consider CSS Source --- CHECKPOINT (Lapys) -> Must keep track of nested tokens.
                    LapysDevelopmentKit.Test.stringPrototypeConsiderCSSSource = function stringPrototypeConsiderCSSSource(source) {
                        // Constant > (Consideration, Considered)
                        var consideration = new LDKD.Consideration, considered = consideration.data;

                        // Update > Source
                        source = LDKF.stringPrototypeTrim(source, '\0');

                        // Initialization > Source (Length, Iterator, Is Valid)
                        var sourceLength = LDKF.stringPrototypeLength(source),
                            sourceIterator = sourceLength,
                            sourceIsValid = true; // NOTE (Lapys) -> Empty CSS style sheets are also valid.

                        // Initialization > (Sub) (Token, Tokens (Length))
                        var subtoken = "", subtokens = [""],  subtokensLength = +0,
                            token = "", tokens = [], tokensLength = +0;

                        // Initialization > Token Type (Stack)
                        var tokenType = "plaintext", tokenTypeStack = [];

                        // Loop
                        while (sourceIsValid && sourceIterator) {
                            // Constant > Character; Initialization > Update Token
                            var character = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);
                            var updateToken = true;

                            // Logic
                            switch (tokenType) {
                                // [Attribute Selector]
                                case "attribute-selector":
                                    // Logic > ...
                                        // [Selector]
                                        if (character == ']')
                                            // Logic > ...
                                            if (LDKF.stringPrototypeLast(token) == '[') sourceIsValid = false;
                                            else { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "plaintext" }

                                        // [Assignment]
                                        else if (character == '=')
                                            // Logic > ...
                                            if (token) { tokenType = "attribute-value" }
                                            else sourceIsValid = false;

                                        else if (
                                            (character == '~' || character == '|' || character == '^' || character == '$' || character == '*') &&
                                            LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator) == '='
                                        )
                                            // Logic > ...
                                            if (token) { token += LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1); tokenType = "attribute-value" }
                                            else sourceIsValid = false;

                                        // [Whitespace]
                                        else if (character == ' ' || character == '\n') {
                                            // Logic
                                            if (LDKF.stringPrototypeLast(token) != '[') {
                                                // Loop > Update > Character
                                                while ((character == ' ' || character == '\n') && sourceIterator) character = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                                // Update > Source (Is Valid, Iterator)
                                                (character == '=' || character == ']' || (
                                                    (character == '~' || character == '|' || character == '^' || character == '$' || character == '*') &&
                                                    LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator) == '='
                                                )) || (sourceIsValid = false);
                                                sourceIterator += 1
                                            }

                                            // Update > Update Token
                                            updateToken = false
                                        }

                                        // [Escape Sequence]
                                        else if (character == '\\') {
                                            // Constant > Next Character
                                            var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                            // Update > (Token | Source Is Valid)
                                            (
                                                nextCharacter == '!' || nextCharacter == '"' || nextCharacter == '#' || nextCharacter == '$' || nextCharacter == '%' || nextCharacter == '&' || nextCharacter == '\'' || nextCharacter == '(' || nextCharacter == ')' || nextCharacter == '*' || nextCharacter == '+' ||
                                                nextCharacter == ',' || nextCharacter == '.' || nextCharacter == '/' || nextCharacter == ':' || nextCharacter == ';' || nextCharacter == '<' || nextCharacter == '=' || nextCharacter == '>' || nextCharacter == '?' || nextCharacter ==' @' ||
                                                nextCharacter == '[' || nextCharacter == '\\' || nextCharacter == ']' || nextCharacter == '^' || nextCharacter == '`' || nextCharacter == '{' || nextCharacter == '|' || nextCharacter == '}' || nextCharacter == '~' ||
                                                LDKF.stringPrototypeIsDigit(nextCharacter)
                                            ) ? token += nextCharacter : sourceIsValid = false
                                        }

                                        // [Invalid Syntax]
                                        else if (!(
                                            character == '_' || LDKF.stringPrototypeIsAlphabet(character) || (
                                                (character == '-' || LDKF.stringPrototypeIsDigit(character)) &&
                                                LDKF.stringPrototypeLast(token) != '['
                                            )
                                        )) sourceIsValid = false;

                                        // ...
                                        break;

                                // [Attribute Value]
                                case "attribute-value":
                                    // Logic
                                        // [Selector]
                                        if (character == ']')
                                            // Logic > ...
                                            if (LDKF.stringPrototypeLast(token) == '=') sourceIsValid = false;
                                            else { tokens[tokensLength] = {source: token + character, type: tokenType}; tokensLength += 1; token = ""; tokenType = "plaintext"; updateToken = false }

                                        // [Whitespace]
                                        else if (character == ' ' || character == '\n') {
                                            // Logic
                                            if (LDKF.stringPrototypeLast(token) != '=') {
                                                // Loop > Update > Character
                                                while ((character == ' ' || character == '\n') && sourceIterator) character = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                                // Update > (Character, Source Iterator)
                                                (character == ']') || (sourceIsValid = false);
                                                sourceIterator += 1
                                            }

                                            // Update > Update Token
                                            updateToken = false
                                        }

                                        // [String]
                                        else if (character == '"' || character == '\'') {
                                            // Logic
                                            if (LDKF.stringPrototypeLast(token) != '=') {
                                                // Update > Character; Loop > Update > Character
                                                character = LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator);
                                                while ((character == ' ' || character == '\n') && sourceIterator) character = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                                // Update > Source (Is Valid, Iterator)
                                                (character == ']') || (sourceIsValid = false);
                                                sourceIterator += 1
                                            }

                                            // Update > Token Type
                                            LDKF.arrayPrototypePush(tokenTypeStack, tokenType);
                                            tokenType = character == '"' ? "double-quoted-string" : "single-quoted-string"
                                        }

                                        // [Escape Sequence]
                                        else if (character == '\\') {
                                            // Constant > Next Character
                                            var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                            // Update > (Token | Source Is Valid)
                                            (
                                                nextCharacter == '!' || nextCharacter == '"' || nextCharacter == '#' || nextCharacter == '$' || nextCharacter == '%' || nextCharacter == '&' || nextCharacter == '\'' || nextCharacter == '(' || nextCharacter == ')' || nextCharacter == '*' || nextCharacter == '+' ||
                                                nextCharacter == ',' || nextCharacter == '.' || nextCharacter == '/' || nextCharacter == ':' || nextCharacter == ';' || nextCharacter == '<' || nextCharacter == '=' || nextCharacter == '>' || nextCharacter == '?' || nextCharacter ==' @' ||
                                                nextCharacter == '[' || nextCharacter == '\\' || nextCharacter == ']' || nextCharacter == '^' || nextCharacter == '`' || nextCharacter == '{' || nextCharacter == '|' || nextCharacter == '}' || nextCharacter == '~' ||
                                                LDKF.stringPrototypeIsDigit(nextCharacter)
                                            ) ? token += nextCharacter : sourceIsValid = false
                                        }

                                        // [Invalid Syntax]
                                        else if (!(character == '_' || character == '-' || LDKF.stringPrototypeIsAlphabet(character) || LDKF.stringPrototypeIsDigit(character))) sourceIsValid = false;

                                    // ...
                                    break;

                                // [(Class | ID) Attribute Selector]
                                case "class-attribute-selector":
                                case "id-attribute-selector":
                                    // Logic > ...
                                        // [Selector]
                                        if (character == '.' || character == '#' || character == ':' || character == '[')
                                            // Logic > ...
                                             if (token) { sourceIterator += 1; tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "plaintext"; updateToken = false }
                                             else sourceIsValid = false;

                                        // [Escape Sequence]
                                        else if (character == '\\') {
                                            // Constant > Next Character
                                            var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                            // Update > (Token | Source Is Valid)
                                            (
                                                nextCharacter == '!' || nextCharacter == '"' || nextCharacter == '#' || nextCharacter == '$' || nextCharacter == '%' || nextCharacter == '&' || nextCharacter == '\'' || nextCharacter == '(' || nextCharacter == ')' || nextCharacter == '*' || nextCharacter == '+' ||
                                                nextCharacter == ',' || nextCharacter == '.' || nextCharacter == '/' || nextCharacter == ':' || nextCharacter == ';' || nextCharacter == '<' || nextCharacter == '=' || nextCharacter == '>' || nextCharacter == '?' || nextCharacter ==' @' ||
                                                nextCharacter == '[' || nextCharacter == '\\' || nextCharacter == ']' || nextCharacter == '^' || nextCharacter == '`' || nextCharacter == '{' || nextCharacter == '|' || nextCharacter == '}' || nextCharacter == '~' ||
                                                LDKF.stringPrototypeIsDigit(nextCharacter)
                                            ) ? token += nextCharacter : sourceIsValid = false
                                        }

                                        // [Invalid Syntax]
                                        else if (!(
                                            character == '_' || character == '-' || LDKF.stringPrototypeIsAlphabet(character) || (
                                                LDKF.stringPrototypeIsDigit(character) &&
                                                LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator - 2) != (tokenType == "class-attribute-selector" ? '.' : '#')
                                            )
                                        )) sourceIsValid = false;

                                    // ...
                                    break;

                                // [Comment]
                                case "comment":
                                    // ...
                                    break;

                                // [(Double, Single) Quoted String]
                                case "double-quoted-string":
                                case "single-quoted-string":
                                    // Logic
                                        // [Escape Sequences]
                                        if (character == '\\') {
                                            // Constant > Next Character
                                            var nextCharacter = LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1);

                                            // Update > (Sub Token, Token, Update Token)
                                            subtoken += character + nextCharacter;
                                            token += character + nextCharacter;
                                            updateToken = false
                                        }

                                        // ...
                                        else {
                                            // Constant > Delimiter
                                            var delimiter = tokenType == "double-quoted-string" ? '"' : '\'';

                                            // Logic
                                            if (character == delimiter) {
                                                // Update > ((Sub) Tokens (Length), Sub Token, Token Type)
                                                subtokens[subtokensLength] = tokens[tokensLength] = {source: delimiter + subtoken + delimiter, type: tokenType};
                                                subtokensLength += 1; tokensLength += 1;
                                                subtoken = "";
                                                tokenType = LDKF.arrayPrototypePop(tokenTypeStack)
                                            }

                                            else
                                                // Update > Sub Token
                                                subtoken += character
                                        }

                                    // ...
                                    break;

                                // [Namespace]
                                case "namespace":
                                    // ...
                                    break;

                                // [Plain Text]
                                case "plaintext":
                                    // Logic > ...
                                        // [Namespace]
                                        if (character == '@') { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "namespace" }

                                        // [Selector]
                                        else if (character == '.') { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "class-attribute-selector" }
                                        else if (character == '#') { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "id-attribute-selector" }
                                        else if (character == ':') { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "pseudo-selector" }
                                        else if (character == '[') { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "attribute-selector" }
                                        else if (LDKF.stringPrototypeIsAlphabet(character)) { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "selector" }

                                        // [Comment]
                                        else if (character == '/' && LDKF.stringPrototypeCharacterAt(source, sourceLength - sourceIterator) == '*') { token += LDKF.stringPrototypeCharacterAt(source, sourceLength - (sourceIterator -= 1) - 1); tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1; token = ""; tokenType = "comment"; }

                                        // [Invalid Syntax]
                                        else if (character != ' ' && character != '\n') sourceIsValid = false
                            }

                            // Update > Token
                            updateToken && (token += character)
                        }

                        // Update > Source Is Valid
                        sourceIsValid = tokenType == "attribute-selector" || tokenType == "class-attribute-selector" || tokenType == "id-attribute-selector" || tokenType == "namespace" || tokenType == "plaintext";

                        // Logic
                        if (sourceIsValid) {
                            // Logic > Update > Tokens (Length)
                            if (token) { tokens[tokensLength] = {source: token, type: tokenType}; tokensLength += 1 }

                            // Initialization > Tokens Iterator
                            var tokensIterator = tokensLength;

                            // Loop --- NOTE (Lapys) -> Remove empty plaintext tokens (a token is empty if its `source` has no characters that constitute it).
                            while (tokensIterator) {
                                // Constant > Token
                                var token = tokens[tokensLength - (tokensIterator -= 1) - 1];

                                // Logic
                                if (!token.source && token.type == "plaintext") {
                                    // Initialization > Tokens Index
                                    var tokensIndex = tokensLength - tokensIterator - 1;

                                    // Update > Tokens Length; Loop > Update > Tokens
                                    tokensLength -= 1; while (tokensIndex ^ tokensLength) tokens[tokensIndex] = tokens[tokensIndex += 1]
                                }
                            }
                        }

                        // Modification > ...
                        consideration.context = LDKD.ConsiderationPrototype.contexts["SOURCE_STRING_TOKENS"];

                        considered.source = source;
                        considered.sourceIsValid = sourceIsValid;
                        considered.subtokens = subtokens;
                        considered.subtokensLength = subtokensLength;
                        considered.tokens = tokens;
                        considered.tokensLength = tokensLength; // WARN (Lapys) -> Crucial since the actual size of the Tokens array may not be this value.
                        considered.type = "css";

                        // Return
                        return consideration
                    };

                    // Consider JavaScript Source
                    LapysDevelopmentKit.Test.stringPrototypeConsiderJavaScriptSource = function stringPrototypeConsiderJavaScriptSource(source) {
                        // Constant > (Consideration, Considered)
                        var consideration = new LDKD.Consideration, considered = consideration.data;

                        // Modification > ...
                        consideration.context = LDKD.ConsiderationPrototype.contexts["SOURCE_STRING_TOKENS"];

                        considered.source = source;
                        considered.sourceIsValid = sourceIsValid;
                        considered.tokens = tokens;
                        considered.tokensLength = tokensLength; // WARN (Lapys) -> Crucial since the actual size of the Tokens array may not be this value.
                        considered.type = "javascript";

                        // Return
                        return consideration
                    };

                // Supports Custom HTML Elements
                LapysDevelopmentKit.Test.supportsCustomHTMLElements = function supportsCustomHTMLElements() { return (LDKC.Assertions.has_CustomElementRegistry_Constructor || LDKC.Assertions.has_registerElement_Method) && (LapysDevelopmentKit.Test.supportsCustomHTMLElements = function supportsCustomHTMLElements() { return true })() };

            /* Mathematics --- NOTE (Lapys) -> `-0` and `+0` are treated comparatively equally. */
                // Absolute
                LapysDevelopmentKit.Mathematics.abs = function abs(number, PROCESS_AS_INTEGERS) {
                    // Logic > ...
                    if (PROCESS_AS_INTEGERS) { var mask = LDKF.numberPrototypeShiftRight(number); return (mask ^ number) - mask }
                    else return LDKF.numberPrototypeIsNegative(number) ? -number : number
                };

                // Average
                LapysDevelopmentKit.Mathematics.avg = function avg() {
                    // Initialization > (Length, Iterator, Sum)
                    var length = LDKF.getArgumentsLength(arguments), iterator = length,
                        sum = null;

                    // Logic
                    if (length) {
                        // (Loop > )Update > Sum
                        sum = +0;
                        while (iterator) sum += arguments[iterator -= 1];
                        sum /= length
                    }

                    // Return
                    return sum
                };

                // Ceiling
                LapysDevelopmentKit.Mathematics.ceil = function ceil(number) { return LDKM.int(number) + !!(number % 1) };

                // Integer
                LapysDevelopmentKit.Mathematics.int = function int(number, USE_BITWISE_OPERATORS) { return USE_BITWISE_OPERATORS ? number | +0 : number - number % 1 };

                // Unsign
                LapysDevelopmentKit.Mathematics.unsign = function unsign(number) { return number >>> +0 };

                // Integer Multiplication --- CITE (Lapys) -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill`.
                LapysDevelopmentKit.Mathematics.imul = function imul(numberA, numberB) {
                    // Initialization > Number (A, B) (Maximum, Minimum)
                    var numberAMaximum = (numberA >>> 16) & 0xFFFF, numberAMinimum = numberA & 0xFFFF,
                        numberBMaximum = (numberB >>> 16) & 0xFFFF, numberBMinimum = numberB & 0xFFFF;

                    // Return --- NOTE (Lapys) -> Sign unsigned value.
                    return ((numberAMinimum * numberBMinimum) + LDKM.int(LDKM.unsign(((numberAMaximum * numberBMinimum + numberAMinimum * numberBMaximum) << 16)), STRICT = true))
                };

                // Maximum
                LapysDevelopmentKit.Mathematics.max = function max() {
                    // Initialization > Iterator
                    var iterator = LDKF.getArgumentsLength(arguments);

                    // Logic
                    if (iterator) {
                        // Initialization > Maximum
                        var maximum = arguments[+0];

                        // Loop > Update > Maximum
                        while (iterator -= 1) (maximum < arguments[iterator]) && (maximum = arguments[iterator]);

                        // Return
                        return maximum
                    }

                    else
                        // Return
                        return null
                };

                // Maximum Integer
                LapysDevelopmentKit.Mathematics.maxInt = function maxInt() {
                    // Initialization > Iterator
                    var iterator = LDKF.getArgumentsLength(arguments);

                    // Logic
                    if (iterator) {
                        // Initialization > Maximum
                        var maximum = arguments[+0];

                        // Loop > Update > Maximum
                        while (iterator -= 1) (maximum ^ (maximum - ((maximum - arguments[iterator]) & LDKF.numberPrototypeShiftRight(maximum - arguments[iterator])))) && (maximum = arguments[iterator]);

                        // Return
                        return maximum
                    }

                    else
                        // Return
                        return null
                };

                // Minimum
                LapysDevelopmentKit.Mathematics.min = function min() {
                    // Initialization > Iterator
                    var iterator = LDKF.getArgumentsLength(arguments);

                    // Logic
                    if (iterator) {
                        // Initialization > Minimum
                        var minimum = arguments[+0];

                        // Loop > Update > Minimum
                        while (iterator -= 1) (arguments[iterator] < minimum) && (minimum = arguments[iterator]);

                        // Return
                        return minimum
                    }

                    else
                        // Return
                        return null
                };

                // Minimum Integer
                LapysDevelopmentKit.Mathematics.minInt = function minInt() {
                    // Initialization > Iterator
                    var iterator = LDKF.getArgumentsLength(arguments);

                    // Logic
                    if (iterator) {
                        // Initialization > Minimum
                        var minimum = arguments[+0];

                        // Loop > Update > Minimum
                        while (iterator -= 1) (minimum ^ (minimum - ((minimum - arguments[iterator]) & LDKF.numberPrototypeShiftRight(arguments[iterator] - minimum)))) && (minimum = arguments[iterator]);

                        // Return
                        return minimum
                    }

                    else
                        // Return
                        return null
                };

                // Percentage
                LapysDevelopmentKit.Mathematics.perc = function perc(base, exponent) { return LDKF.getArgumentsLength(arguments) == 1 ? base / 100 : base * (exponent / 100) };

                // Random
                LapysDevelopmentKit.Mathematics.random = function random() { return LDKM.random.randomizer() };
                    // Generate Seed ---- NOTE (Lapys) -> Creates a XOR FNV 1A state.
                    LapysDevelopmentKit.Mathematics.random.generateSeeder = function xfnv1a(seed) {
                        // Initialization > (Iterator, Length, ...)
                        var iterator = +0,
                            length = LDKF.stringPrototypeLength(seed ? seed : seed = ""),
                            tmp = LDKM.unsign(0x811C9DC5) /* NOTE (Lapys) -> Unsign the number within a specific range. */;

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
                            return LDKM.unsign(tmp += tmp << 5)
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
                            return LDKM.unsign(tmp) / 4294967296
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

                // Step --- NOTE (Lapys) -> Return a set of the multiples of Number divided by the Count lower than or equal to the Number.
                LapysDevelopmentKit.Mathematics.step = function step(number, count, REVERSE_STEPPING_ORDER) {
                    // Initialization > (Difference, Steps)
                    var difference = number / count, steps = [];

                    // Logic
                    if (REVERSE_STEPPING_ORDER) {
                        // Initialization > Has Stopped
                        var hasStepped = false;

                        // Loop
                        while (count) {
                            // Update > (Steps, Has Stopped)
                            steps[count -= 1] = (hasStepped && steps[count + 1]) + difference;
                            hasStepped || (hasStepped = true)
                        }
                    }

                    else {
                        // Initialization > Steps Index
                        var stepsIndex = +0;

                        // Loop
                        while (count) {
                            // Update > (Steps, Count, Steps Index)
                            steps[stepsIndex] = (stepsIndex && steps[stepsIndex - 1]) + difference;
                            count -= 1; stepsIndex += 1
                        }
                    }

                    // Return
                    return steps
                };

            /* Storage */
                // Records
                LapysDevelopmentKit.Storage.Records.AnimationFrameID = +0;

                // Registry > ... --- REDACT (Lapys)
                LapysDevelopmentKit.Storage.Registry.Consideration = {OfNativeMethodOfObject: []};
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
                    /* Character At
                            --- WARN ---
                                #Lapys: This is the core method that allows security-checking and prevents spoofing.
                                    Hence it must be asserted, defined & referenced first.
                    */
                    LapysDevelopmentKit.Objects.stringPrototypeCharacterAt = LDKI.Settings.PublicMode ? "".charAt : (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty("", "charAt", STRICT = true);

                        // Logic > ...
                        if (
                            LDKT.objectPrototypeIsNativeMethodOfObject("", "charAt", STRICT = method) ||
                            (function() { try { return LDKF.functionPrototypeCall(method, ' ', +0) == ' ' } catch (error) {} return false })()
                        ) return method;
                        else LDKF.throwFeatureNotNativeError("`String.prototype.charAt` method")
                    })();

                    // Character Code At
                    LapysDevelopmentKit.Objects.stringPrototypeCharacterCodeAt = LDKI.Settings.PublicMode ? "".charCodeAt : (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty("", "charCodeAt", STRICT = true);

                        // Logic > ...
                        if (
                            LDKT.objectPrototypeIsNativeMethodOfObject("", "charCodeAt", STRICT = method) ||
                            (function() { try { return LDKF.isNumber(LDKF.functionPrototypeCall(method, ' ', +0)) } catch (error) {} return false })()
                        ) return method;
                        else LDKF.throwFeatureNotNativeError("`String.prototype.charAt` method")
                    })();

                // Function --- NOTE (Lapys) -> May throw a `FeatureNotNativeError` if `Function` or `Function.prototype.apply` are not native.
                LapysDevelopmentKit.Objects["function"] = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Function", STRICT = null, STRICT = "`Function` constructor").requestNativeConstructor()
                    // Prototype
                    LapysDevelopmentKit.Objects.functionPrototype = LDKF.getPropertyByName(LDKO["function"], "prototype");
                        /* Apply, Call
                                --- NOTE (Lapys) -> Unfortunately, there is no genuine way to use these features privately.
                                --- WARN (Lapys) -> These methods are critical to the library as well because they prevent the values of `Function.prototype.apply` and `Function.prototype.call` being a concern if they are invalidated.
                                    Unfortunately, the `apply` and `call` methods of these properties are exposed to the user.
                        */
                        LapysDevelopmentKit.Objects.functionPrototypeApply = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.functionPrototype, "apply", STRICT = null, STRICT = "`Function.prototype.apply` method").requestNativeMethod();
                        LapysDevelopmentKit.Objects.functionPrototypeCall = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.functionPrototype, "call", STRICT = null, STRICT = "`Function.prototype.call` method").requestNativeMethod();

                /* Objects
                        --- WARN(Lapys) -> Exposes the `Object.prototype.constructor` property to the user.
                            We implicitly trust the user has not changed the prototype-based `constructor` property for object literals.
                */
                LapysDevelopmentKit.Objects.object = LDKT.objectPrototypeConsiderNativeConstructorOfObject(null, "Object", STRICT = LDKF.objectPrototypeGetProperty(ANY, "constructor", STRICT = true), STRICT = "`Object` constructor")
                    .addCondition(function(constructor) {
                        // Initialization > Constructor Is Native
                        var constructorIsNative = false;

                        // Error Handling
                        try {
                            // Update > Constructor Is Native --- NOTE (Lapys) -> Test all literals to naïvely confirm.
                            constructorIsNative = (function(array) { return LDKF.isObjectLike(array) })(constructor([])) &&
                                (function(boolean) { return LDKF.isObjectLike(boolean) && LDKF.isNumber(boolean - +0) })(constructor(false)) &&
                                (function(number) { return LDKF.isObjectLike(number) && LDKF.isNumber(number - +0) })(constructor(+0)) &&
                                (function(string) { return LDKF.isObjectLike(string) && LDKF.isString(string + "") })(constructor("")) &&
                                (function(regularExpression) { return LDKF.isObjectLike(regularExpression) || LDKF.isFunction(regularExpression, STRICT = true) })(constructor(/(?:)/)) &&
                                (function(routine) { return LDKF.isFunction(routine) })(constructor(function() {}))
                        } catch (error) {}

                        // Return
                        return constructorIsNative
                    })
                    .requestNativeConstructor();

                    // Get Prototype Of
                    LapysDevelopmentKit.Objects.objectGetPrototypeOf = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "getPrototypeOf", STRICT = null, STRICT = "`Object.getPrototypeOf` method")
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "getPrototypeOf") || LDKF.isVoid(method) },
                            value: (function() {
                                // Function > Request Prototype Of --- WARN (Lapys) -> We trust the user has not corrupted the Object`s `constructor` property.
                                function requestPrototypeOf(object) {
                                    // Error Handling
                                    try {
                                        // Initialization > Constructor
                                        var constructor = object.constructor;

                                        // Return
                                        return LDKF.objectPrototypeIsOfConstructor(object, constructor, STRICT = true) ? constructor.prototype : null
                                    } catch (error) {}

                                    // Return
                                    return null
                                }

                                // Return
                                return LDKC.has___proto___Property ?
                                    function getPrototypeOf(object) {
                                        // Initialization > Prototype
                                        var prototype;

                                        // Error Handling > Update > Prototype
                                        try { prototype = object.__proto__ } catch (error) {}

                                        // Update > Prototype
                                        LDKF.isVoid(prototype) && (prototype = requestPrototypeOf(object));

                                        // Logic > ...
                                        if (LDKF.isObjectLike(prototype)) return prototype;
                                        else LDKF.throwTypeError("Object prototype must be an object itself")
                                    } :
                                    function getPrototypeOf(object) { return requestPrototypeOf(object) }
                            })()
                        })
                        .requestNativeMethod();

                    // Prototype --- NOTE (Lapys) -> Fortunately, the `prototype` property of constructors (or functions) are immutable.
                    LDKO.objectPrototype = LDKO.object.prototype;
                        // `__defineGetter__`
                        LapysDevelopmentKit.Objects.objectPrototype___defineGetter___ = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.objectPrototype, "__defineGetter__", STRICT = null, STRICT = "`Object.prototype.__defineGetter__` method").requestNativeMethod();

                        // `__defineSetter__`
                        LapysDevelopmentKit.Objects.objectPrototype___defineSetter___ = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.objectPrototype, "__defineSetter__", STRICT = null, STRICT = "`Object.prototype.__defineSetter__` method").requestNativeMethod();

                        // Has Own Property
                        LapysDevelopmentKit.Objects.objectPrototypeHasOwnProperty = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.objectPrototype, "hasOwnProperty", STRICT = null, STRICT = "`Object.prototype.hasOwnProperty` method")
                            .addConditionalFallback({
                                condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "hasOwnProperty") || LDKF.isVoid(method) },
                                value: function hasOwnProperty(propertyName) {
                                    // Loop > Logic > Return; Return
                                    for (var currentPropertyName in this) if (currentPropertyName === propertyName) return true;
                                    return false
                                }
                            })
                            .requestNativeMethod();

                        // `__lookupGetter__`
                        LapysDevelopmentKit.Objects.objectPrototype___lookupGetter___ = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.objectPrototype, "__lookupGetter__", STRICT = null, STRICT = "`Object.prototype.__lookupGetter__` method").requestNativeMethod();

                        // `__lookupSetter__`
                        LapysDevelopmentKit.Objects.objectPrototype___lookupSetter___ = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.objectPrototype, "__lookupSetter__", STRICT = null, STRICT = "`Object.prototype.__lookupSetter__` method").requestNativeMethod();

                    // Set Prototype Of
                    LapysDevelopmentKit.Objects.objectSetPrototypeOf = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "setPrototypeOf", STRICT = null, STRICT = "`Object.setPrototypeOf` method")
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "setPrototypeOf") || LDKF.isVoid(method) },
                            value: function setPrototypeOf(object, prototype, SILENCE_EXCEPTIONS) {
                                // ... | Error
                                LDKF.isFunction(LDKO.objectPrototype___proto___Mutator) ?
                                    LDKF.functionPrototypeCall(LDKO.objectPrototype___proto___Mutator, object, prototype) :
                                    (SILENCE_EXCEPTIONS || LDKF.throwFeatureError("`Object.setPrototypeOf` method cannot be executed because some features are not available"))
                            }
                        })
                        .requestNativeMethod();

                // Type Error
                LapysDevelopmentKit.Objects.typeError = (function() {
                    // Initialization > Constructor
                    var constructor;

                    // Error Handling > ...
                    try { undefined[""] } catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Return
                    return constructor
                })();
                    // Prototype
                    LapysDevelopmentKit.Objects.typeErrorPrototype = LDKO.typeError.prototype;

                /* Object */
                    // Assign
                    LapysDevelopmentKit.Objects.objectAssign = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "assign", STRICT = null, STRICT = "`Object.assign` method")
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "assign") || LDKF.isVoid(method) },
                            value: function assign(target) {
                                // Initialization > Length
                                var length = LDKF.getArgumentsLength(arguments);

                                // Error
                                LDKF.isObjectLike(target) || LDKF.throwTypeError("Cannot convert `undefined` or `null` to object");

                                // Logic
                                if (length ^ 1) {
                                    // Initialization > Iterator
                                    var iterator = length;

                                    // Loop
                                    while (iterator -= 1) {
                                        // Constant > Object
                                        var object = LDKF.object(arguments[iterator]);

                                        // Loop
                                        LDKF.iterateObject(object, function(name) {
                                            // Modification > Target > [Name]
                                            (LDKF.objectPrototypeHasOwnProperty(object, name) && LDKF.objectGetOwnPropertyDescriptor(object, name).enumerable) &&
                                            LDKF.objectPrototypeSetProperty(target, name, LDKF.objectPrototypeGetProperty(object, name, STRICT = true), STRICT = true)
                                        }, STRICT = true)
                                    }
                                }

                                // Return
                                return target
                            }
                        })
                        .requestNativeMethod();

                    // Create
                    LapysDevelopmentKit.Objects.objectCreate = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "create", STRICT = null, STRICT = "`Object.create` method")
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "create") || LDKF.isVoid(method) },
                            value: function create(url) {
                                // Initialization > (Object, Constructor)
                                var object = new function() {}, constructor = LDKF.objectPrototypeGetProperty(object, "constructor", STRICT = true);

                                // Logic
                                    // NOTE (Lapys) -> Return non-identified prototype-based object.
                                    if (LDKF.objectPrototypeIsOfConstructor(object, constructor)) {
                                        // Modification > Constructor > Prototype
                                        constructor.prototype = url;

                                        // Return
                                        return new constructor
                                    }

                                    // NOTE (Lapys) -> Return identified (in this case `constructor`) prototype-based object.
                                    else {
                                        // Update > Constructor
                                        constructor = function() {};

                                        // Modification > Constructor > Prototype
                                        constructor.prototype = url;

                                        // Return
                                        return new constructor
                                    }
                            }
                        })
                        .requestNativeMethod();

                    // Define Property
                    LapysDevelopmentKit.Objects.objectDefineProperty = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "defineProperty", STRICT = null, STRICT = "`Object.defineProperty` method", STRICT = true)
                        .addForcedCondition(function(method) {
                            // Initialization > (Consideration, Considered, Method Is Standard)
                            var consideration = this, considered = consideration.data, methodIsStandard = true;

                            // Modification > Considered > (Legacy Method, Method Has Legacy Functionality)
                            considered.legacyMethod = null;
                            considered.methodHasLegacyFunctionality = false;

                            // Error Handling
                            try { method({}, "", {}) }
                            catch (error) {
                                // Modification > Considered > (Legacy Method, Method Has Legacy Functionality)
                                considered.legacyMethod = method;
                                considered.methodHasLegacyFunctionality = LDKF.isTypeError(error);

                                // Update > Method Is Standard
                                methodIsStandard = false
                            }

                            // Return
                            return methodIsStandard
                        })
                        .addConditionalFallback({
                            condition: function(method) { return this.data.methodHasLegacyFunctionality || (!LDKF.objectPrototypeHasProperty(LDKO.object, "defineProperty") || LDKF.isVoid(method)) },
                            value: function defineProperty(object, propertyName, descriptor) { // WARN (Lapys) -> By the default, the defined property will be configurable, enumerable and writable.
                                // Initialization > (Consideration, Legacy Functionality Succeeded)
                                var consideration = LDKF.requestConsiderationOfNativeMethodOfObjectByConditionalFallbackValue(LDKF.getArgumentsCallee(arguments)),
                                    legacyFunctionalitySucceeded = false;

                                // Logic
                                if (consideration.data.methodHasLegacyFunctionality)
                                    // Error Handling > ...
                                    try { consideration.data.legacyMethod(object, propertyName, descriptor); legacyFunctionalitySucceeded = true }
                                    catch (error) { legacyFunctionalitySucceeded = false; if (!LDKF.isTypeError(error)) throw error }

                                // Logic
                                if (!legacyFunctionalitySucceeded) {
                                    // Initialization > Descriptor Has (Accessor, Mutator, Value)
                                    var descriptorHasAccessor = LDKF.objectPrototypeHasProperty(descriptor, "get", STRICT = true),
                                        descriptorHasMutator = LDKF.objectPrototypeHasProperty(descriptor, "set", STRICT = true),
                                        descriptorHasValue = LDKF.objectPrototypeHasProperty(descriptor, "value", STRICT = true);

                                    // Error
                                    ((descriptorHasAccessor || descriptorHasMutator) && descriptorHasValue) && LDKF.throwTypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");

                                    // ...
                                    descriptorHasAccessor && LDKF.objectPrototype___defineGetter___(object, propertyName, LDKF.objectPrototypeGetProperty(descriptor, "get", STRICT = true));
                                    descriptorHasMutator && LDKF.objectPrototype___defineSetter___(object, propertyName, LDKF.objectPrototypeGetProperty(descriptor, "set", STRICT = true));

                                    // Modification > Object > [Property Name]
                                    object[propertyName] = LDKF.objectPrototypeGetProperty(descriptor, "value", STRICT = true)
                                }
                            }
                        })
                        .requestNativeMethod();

                    // Get Own Property Descriptor
                    LapysDevelopmentKit.Objects.objectGetOwnPropertyDescriptor = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "getOwnPropertyDescriptor", STRICT = null, STRICT = "`Object.getOwnPropertyDescriptor` method", STRICT = true)
                        .addForcedCondition(function(method) {
                            // Initialization > (Consideration, Considered, Method Is Standard)
                            var consideration = this, considered = consideration.data, methodIsStandard = true;

                            // Modification > Considered > (Legacy Method, Method Has Legacy Functionality)
                            considered.legacyMethod = null;
                            considered.methodHasLegacyFunctionality = false;

                            // Error Handling
                            try { method({}, "") }
                            catch (error) {
                                // Modification > Considered > (Legacy Method, Method Has Legacy Functionality)
                                considered.legacyMethod = method;
                                considered.methodHasLegacyFunctionality = LDKF.isTypeError(error);

                                // Update > Method Is Standard
                                methodIsStandard = false
                            }

                            // Return
                            return methodIsStandard
                        })
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertyDescriptor") || LDKF.isVoid(method) },
                            value: function getOwnPropertyDescriptor(object, propertyName) {
                                // Initialization > (Consideration, Descriptor, Legacy Functionality Succeeded)
                                var consideration = LDKF.requestConsiderationOfNativeMethodOfObjectByConditionalFallbackValue(LDKF.getArgumentsCallee(arguments)),
                                    descriptor = null,
                                    legacyFunctionalitySucceeded = false;

                                // Logic > Error Handling > (Update > Descriptor)
                                if (consideration.data.methodHasLegacyFunctionality) try { descriptor = consideration.data.legacyMethod(object, propertyName); legacyFunctionalitySucceeded = true } catch (error) {}

                                // Logic
                                if (!legacyFunctionalitySucceeded) {
                                    // Initialization > (Accessor, Is (Enumerable, Getter Or Setter), Mutator)
                                    var accessor = null,
                                        isEnumerable = LDKF.arrayPrototypeIncludes(LDKF.objectGetOwnPropertyNames(object), propertyName),
                                        isGetterOrSetter = false,
                                        mutator = null;

                                    // Update > (Accessor, Mutator)
                                    LDKC.Assertions.has___lookupGetter___Method && (accessor = LDKF.functionPrototypeCall(LDKF.objectPrototype___lookupGetter___, object, propertyName));
                                    LDKC.Assertions.has___lookupSetter___Method && (mutator = LDKF.functionPrototypeCall(LDKF.objectPrototype___lookupSetter___, object, propertyName));

                                    // Return
                                    return !LDKF.isNull(accessor) || !LDKF.isNull(mutator) ?
                                        {configurable: null, enumerable: isEnumerable, get: accessor || undefined, set: mutator || undefined} :
                                        {configurable: null, enumerable: isEnumerable, value: object[propertyName], writable: null}
                                }

                                // Return
                                return descriptor
                            }
                        })
                        .requestNativeMethod();

                    // Get Own Property Names
                    LapysDevelopmentKit.Objects.objectGetOwnPropertyNames = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "getOwnPropertyNames", STRICT = null, STRICT = "`Object.getOwnPropertyNames` method")
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertyNames") || LDKF.isVoid(method) },
                            value: function getOwnPropertyNames(object) {
                                // Initialization > Property Names (Length)
                                var propertyNames = [], propertyNamesLength = +0;

                                // Loop > Update > Property Names
                                for (var propertyName in object) LDKF.objectPrototypeHasOwnProperty(object, propertyName) && LDKF.isString(propertyName) && (propertyNames[(propertyNamesLength += 1) - 1] = propertyName);

                                // Return
                                return propertyNames
                            }
                        })
                        .requestNativeMethod();

                    // Get Own Property Symbols
                    LapysDevelopmentKit.Objects.objectGetOwnPropertySymbols = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.object, "getOwnPropertySymbols", STRICT = null, STRICT = "`Object.getOwnPropertySymbols` method")
                        .addConditionalFallback({
                            condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertySymbols") || LDKF.isVoid(method) },
                            value: function getOwnPropertySymbols() {
                                // Initialization > Property Symbols (Length)
                                var propertySymbols = [], propertySymbolsLength = +0;

                                // Loop > Update > Property Symbols
                                for (var propertySymbol in object) LDKF.objectPrototypeHasOwnProperty(object, propertySymbol) && LDKF.isSymbol(propertySymbol) && (propertySymbols[(propertySymbolsLength += 1) - 1] = propertySymbol);

                                // Return
                                return propertySymbols
                            }
                        })
                        .requestNativeMethod();

            /* Environment
                    --- NOTE (Lapys) -> Fortunately, the `typeof` keyword does not assert `ReferenceError`'s.
                    --- UPDATE REQUIRED (Lapys) -> Assert the user agent into this namespace.
                        Sources here: `https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser` and
                            `https://stackoverflow.com/questions/39120772/how-to-detect-safari-10-browser-in-javascript/39621764#39621764`
            */
            (function() {
                // Initialization > (Is Browser) Environment
                var ENVIRONMENT = LapysDevelopmentKit.Environment,
                    isBrowserEnvironment = false;

                // Logic
                    // [Browser Environment]
                    if (typeof window != "undefined") {
                        // Update > Is Browser Environment
                        isBrowserEnvironment = true;

                        // Modification > Environment > Type
                        ENVIRONMENT.Type = "browser";

                        // Logic
                            // [Angular JS]
                            if (typeof angular == "object" && LDKF.objectPrototypeConstructor(angular) === LDKO.object && LDKF.toString(angular) == "[object Object]") {
                                // (Modification; Update) > ...
                                ENVIRONMENT.Type = "framework";
                                LDKF.arrayPrototypePush(ENVIRONMENT.Vendors, new LDKD.Vendor("Angular", angular))
                            }

                            // [Electron JS]
                            if (LDKF.objectPrototypeHasProperty(window, "process") && typeof process != "undefined" && LDKF.functionPrototypeTest(function() { return process && LDKF.objectPrototypeHasProperty(process, "type") && process.type && LDKF.objectPrototypeHasProperty(process, "versions") && LDKF.isString(LDKF.objectPrototypeGetProperty(LDKF.objectPrototypeGetProperty(process, "versions", STRICT = true), "electron")) })) {
                                // (Modification; Update) > ...
                                ENVIRONMENT.Type = "framework";
                                LDKF.arrayPrototypePush(ENVIRONMENT.Vendors, new LDKD.Vendor("Electron JS", process))
                            }

                            // [jQuery]
                            if (typeof jQuery == "function" && LDKF.functionPrototypeIsUserDefined(jQuery) && typeof $ == "function" && LDKF.functionPrototypeIsUserDefined($)) {
                                // (Modification; Update) > ...
                                ENVIRONMENT.Type = "framework";
                                LDKF.arrayPrototypePush(ENVIRONMENT.Vendors, new LDKD.Vendor("jQuery", jQuery))
                            }

                            // [React JS]
                            if (typeof React == "object" && LDKF.objectPrototypeConstructor(React) === LDKO.object && LDKF.toString(React) == "[object Object]") {
                                // (Modification; Update) > ...
                                ENVIRONMENT.Type = "framework";
                                LDKF.arrayPrototypePush(ENVIRONMENT.Vendors, new LDKD.Vendor("React JS", React))
                            }

                            // [Vue JS]
                            if (typeof Vue == "function" && LDKF.functionPrototypeIsUserDefined(Vue)) {
                                // (Modification; Update) > ...
                                ENVIRONMENT.Type = "framework";
                                LDKF.arrayPrototypePush(ENVIRONMENT.Vendors, new LDKD.Vendor("Vue JS", Vue))
                            }
                    }

                    // [Node.js Runtime Environment]
                    if (typeof global != "undefined" && typeof module != "undefined" && LDKF.functionPrototypeTest(function() { var moduleExports = module.exports; return LDKF.toString(global) == "[object global]" && LDKF.objectPrototypeConstructor(global) === LDKO.object && typeof moduleExports == "object" && LDKF.toString(moduleExports) == "[object Object]" })) {
                        // Modification
                            // Environment > Type, Vendors
                            ENVIRONMENT.Type || (ENVIRONMENT.Type = "runtime");
                            LDKF.arrayPrototypePush(ENVIRONMENT.Vendors, new LDKD.Vendor("Node.js"))
                    }

                // Modification > ...
                LapysDevelopmentKit.Constants.Assertions.isBrowserEnvironment = isBrowserEnvironment
            })();

            /* Objects --- NOTE (Lapys) -> Test and define the `eval` function. */
                // Evaluate
                LapysDevelopmentKit.Objects.eval = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "eval", STRICT = null, STRICT = "`eval` function")
                    .addCondition(function(method) {
                        // Initialization > Method Is Standard
                        var methodIsStandard = false;

                        // Error Handling
                        try {
                            // Update > Method Is Standard
                            methodIsStandard = (function(array) { return LDKF.isObjectLike(array) })(method([])) &&
                                (function(boolean) { return LDKF.isBoolean(boolean) })(method(false)) &&
                                (function(number) { return LDKF.isNumber(number) })(method(+0)) &&
                                (function(string) { return LDKF.isString(string) })(method("\"\"")) &&
                                (function(regularExpression) { return LDKF.isObjectLike(regularExpression) })(method(/(?:)/)) &&
                                (function(routine) { return LDKF.isFunction(routine, STRICT = true) })(method(function() {})) &&
                                (function(evaluatedSource) { return LDKF.isVoid(evaluatedSource) })(method()) &&
                                (function(evaluatedSource) { return LDKF.isVoid(evaluatedSource) })(method("")) &&
                                (function(evaluatedSource) { return LDKF.isObjectLike(evaluatedSource) })(method("[]")) &&
                                (function(evaluatedSource) { return LDKF.isBoolean(evaluatedSource) })(method("false")) &&
                                (function(evaluatedSource) { return LDKF.isNumber(evaluatedSource) })(method("+0")) &&
                                (function(evaluatedSource) { return LDKF.isObjectLike(evaluatedSource) })(method("/(?:)/")) &&
                                (function(evaluatedSource) { return LDKF.isFunction(evaluatedSource, STRICT = true) })(method("(function() { return function() {} })()"))
                        } catch (error) {}

                        // Return
                        return methodIsStandard
                    })
                    .requestNativeMethod();

            /* Constants --- NOTE (Lapys) -> Constants are derived from objects. */
                // Assertions
                    // Allows `class` Keyword --- NOTE (Lapys) -> Some environments allow but disapprove the `class` constructor syntax.
                    LapysDevelopmentKit.Constants.Assertions.allows_class_Keyword = LDKF.functionPrototypeTest(function() { var allowsClassKeyword = false; try { LDKF.eval("(class {})"); allowsClassKeyword = true } catch (error) {} return allowsClassKeyword });

                    // Has `__defineGetter__` Method
                    LapysDevelopmentKit.Constants.Assertions.has___defineGetter___Method = LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "__defineGetter__", STRICT = true) && LDKF.isNativeFunction(LDKO.objectPrototype___defineGetter___);

                    // Has `__defineSetter__` Method
                    LapysDevelopmentKit.Constants.Assertions.has___defineSetter___Method = LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "__defineSetter__", STRICT = true) && LDKF.isNativeFunction(LDKO.objectPrototype___defineSetter___);

                    // Has `__lookupGetter__` Method
                    LapysDevelopmentKit.Constants.Assertions.has___lookupGetter___Method = LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "__lookupGetter__", STRICT = true) && LDKF.isNativeFunction(LDKO.objectPrototype___lookupGetter___);

                    // Has `__lookupSetter__` Method
                    LapysDevelopmentKit.Constants.Assertions.has___lookupSetter___Method = LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "__lookupSetter__", STRICT = true) && LDKF.isNativeFunction(LDKO.objectPrototype___lookupSetter___);

                    // Has `__proto__` Property
                    LapysDevelopmentKit.Constants.Assertions.has___proto___Property = LDKF.objectPrototypeHasProperty(ANY, "__proto__", STRICT = true) && LDKF.isObjectLike(LDKF.objectPrototypeGetProperty(ANY, "__proto__", STRICT = true));

                    // Is ... Environment
                    LapysDevelopmentKit.Constants.Assertions.isAngularEnvironment = LDKF.arrayPrototypeHas(LDKE.Vendors, "Angular");
                    LapysDevelopmentKit.Constants.Assertions.isElectronJSEnvironment = LDKF.arrayPrototypeHas(LDKE.Vendors, "Electron JS");
                    LapysDevelopmentKit.Constants.Assertions.isjQueryEnvironment = LDKF.arrayPrototypeHas(LDKE.Vendors, "jQuery");
                    LapysDevelopmentKit.Constants.Assertions.isNodejsEnvironment = LDKF.arrayPrototypeHas(LDKE.Vendors, "Node.js");
                    LapysDevelopmentKit.Constants.Assertions.isReactJSEnvironment = LDKF.arrayPrototypeHas(LDKE.Vendors, "React JS");
                    LapysDevelopmentKit.Constants.Assertions.isVueJSEnvironment = LDKF.arrayPrototypeHas(LDKE.Vendors, "Vue JS");

        /* Global */
            /* LapysJS --- NOTE (Lapys) -> Purposely made complicated as a JavaScript object. */
            (function() {
                // Initialization > (Constructor, Prototype)
                var constructor = function LapysJS() {}, prototype = constructor.prototype;

                // Modification > Prototype > ...
                prototype.constructor = undefined;
                prototype.evaluationScope = new LDKD.Scope;

                /* Class > LapysJS */
                function LapysJS() {}
                    // Prototype
                    LapysJS.prototype = constructor.prototype;
                        // Temporary Data
                        LapysJS.prototype.tmp = {};

                        // To String
                        LapysJS.prototype.toString = function toString() { return LDKI.Messages.Debugging.VendorString };

                        // Value Of
                        LapysJS.prototype.valueOf = function valueOf() { return LDKF.functionPrototypeCall(LapysJS.prototype.toString, this) };

                // Constant > (LapysJS, ...)
                var LAPYS_JS = new LapysJS, VENDOR = new LDKD.Vendor("LapysJS", LAPYS_JS);
                    // Evaluation Scope > ...
                    LAPYS_JS.evaluationScope.getArgumentsCallee = LDKF.getArgumentsCallee;
                    LAPYS_JS.evaluationScope.getArgumentsLength = LDKF.getArgumentsLength;
                    LAPYS_JS.evaluationScope.objectPrototypeInstanceOf = LDKF.objectPrototypeInstanceOf;
                    LAPYS_JS.evaluationScope.throwTypeError = LDKF.throwTypeError;

                    // Host
                    LAPYS_JS.host = GLOBAL;

                    // Load Vendor --- NOTE (Lapys) -> The capitalized parameters here are not argument flags, but rather constants.
                    LAPYS_JS.loadVendor = function $loadVendor(VENDOR_NAME, VENDOR_NAMESPACE, VENDOR_HANDLER) {
                        // Logic
                        if (LDKF.isString(VENDOR_NAME)) {
                            // Logic
                            if (LDKF.isFunction(VENDOR_HANDLER)) {
                                // Update > ...
                                LDKF.isConstructible(VENDOR_NAMESPACE) || (VENDOR_NAMESPACE = GLOBAL);
                                LDKF.arrayPrototypePush(LDKE.Vendors, new LDKD.Vendor(VENDOR_NAME, VENDOR_NAMESPACE));

                                // Warn
                                LDKF.throwPublicAccessAllowedWarning();

                                // Return
                                return LDKF.functionPrototypeCall(VENDOR_HANDLER, VENDOR_NAMESPACE, LapysDevelopmentKit)
                            }

                            else
                                // Error
                                LDKF.throwTypeError(LDKF.toPrettyString(VENDOR_HANDLER) + " must be a string")
                        }

                        else
                            // Error
                            LDKF.throwTypeError(LDKF.toPrettyString(VENDOR_NAME) + " must be a string")
                    };

                    // Processing Duration
                    LAPYS_JS.processingDuration = {};

                    // To String
                    VENDOR.toString = function toString() { return LDKF.functionPrototypeCall(LapysJS.prototype.toString, LAPYS_JS) };

                    // Version
                    LAPYS_JS.version = VERSION;

                    // Warnings
                    LAPYS_JS.warnings = [];
                        // ...
                        LAPYS_JS.warnings.classesNotSupported = false;
                        LAPYS_JS.warnings.consoleNotSupported = false;
                        LAPYS_JS.warnings.crossSiteRequestsNotSupported = false;
                        LAPYS_JS.warnings.customHTMLElementsNotSupported = false;

                // Update > ...
                LDKF.arrayPrototypePush(LDKE.Vendors, VENDOR);

                // Definition > LapysJS
                try { LDKF.objectDefineProperty(GLOBAL, "LapysJS", {configurable: false, enumerable: false, value: LAPYS_JS, writable: false}) }
                catch (error) { GLOBAL["LapysJS"] = LAPYS_JS }
            })();

        /* Lapys Development Kit --- NOTE (Lapys) -> Continue updating the LDK */
            /* Data, Objects --- NOTE (Lapys) -> Refine LapysJS` error system. */
                // Error
                LapysDevelopmentKit.Objects.error = (function() {
                    // Initialization > Constructor (Is Valid)
                    var constructor, constructorIsValid = false;

                    // Error Handling
                    try { LDKF.throwTypeError() }
                    catch (error) {
                        // Update > Constructor (Is Valid)
                        constructor = LDKF.objectPrototypeConstructor(LDKF.objectPrototypePrototype(error));
                        constructorIsValid = LDKT.objectPrototypeIsNativeConstructorOfObject({Error: constructor}, "Error", STRICT = constructor, STRICT = true)
                    }

                    // Update > Constructor
                    constructorIsValid || (constructor = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Error", STRICT = null, STRICT = "`Error` constructor").requestNativeConstructor());

                    // Return
                    return constructor
                })();
                    // Capture Stack Trace
                    LapysDevelopmentKit.Objects.errorCaptureStackTrace = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.error, "captureStackTrace").requestNativeMethod();
                        // ...
                        LapysJS.evaluationScope.errorCaptureStackTrace = LDKF.errorCaptureStackTrace;

                    // Prototype
                    LapysDevelopmentKit.Objects.errorPrototype = LDKO.error.prototype;

                // Assert Error
                LapysDevelopmentKit.Data.AssertError = LDKF.createCustomErrorConstructor("AssertError", LDKO.error);

                // LapysJS Error
                LapysDevelopmentKit.Data.LapysJSError = LDKF.createCustomErrorConstructor("LapysJSError", LDKO.error);

                // Feature Error
                LapysDevelopmentKit.Data.FeatureError = LDKF.createCustomErrorConstructor("FeatureError", LDKD.LapysJSError);
                    // Feature Not Available Error
                    LapysDevelopmentKit.Data.FeatureNotAvailableError = LDKF.createCustomErrorConstructor("FeatureNotAvailableError", LDKD.FeatureError);

                    // Feature Not Developed Error
                    LapysDevelopmentKit.Data.FeatureNotDevelopedError = LDKF.createCustomErrorConstructor("FeatureNotDevelopedError", LDKD.FeatureError);

                    // Feature Not Native Error
                    LapysDevelopmentKit.Data.FeatureNotNativeError = LDKF.createCustomErrorConstructor("FeatureNotNativeError", LDKD.FeatureError);

                // Phase Error
                LapysDevelopmentKit.Data.PhaseError = LDKF.createCustomErrorConstructor("PhaseError", LDKD.LapysJSError);
                    // Initiate Phase Error
                    LapysDevelopmentKit.Data.InitiatePhaseError = LDKF.createCustomErrorConstructor("InitiatePhaseError", LDKD.PhaseError);

                    // Reset Phase Error
                    LapysDevelopmentKit.Data.ResetPhaseError = LDKF.createCustomErrorConstructor("ResetPhaseError", LDKD.PhaseError);

                    // Terminate Phase Error
                    LapysDevelopmentKit.Data.TerminatePhaseError = LDKF.createCustomErrorConstructor("TerminatePhaseError", LDKD.PhaseError);

                    // Update Phase Error
                    LapysDevelopmentKit.Data.UpdatePhaseError = LDKF.createCustomErrorConstructor("UpdatePhaseError", LDKD.PhaseError);

            /* (Constants, Constants > ...), Data, Objects
                    --- NOTE ---
                        #Lapys:
                            Collect a myriad of native JavaScript values.
                            We`ll also consider essential Web APIs such as the DOM only come about in browser environments.
            */
                // Abort Error --- NOTE (Lapys) -> Internal (or non-common) JavaScript errors are not excluded from this list of values.
                LapysDevelopmentKit.Objects.abortError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "AbortError").requestNativeConstructor();

                // Active X Object
                LapysDevelopmentKit.Objects.activeXObject = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "ActiveXObject").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_ActiveXObject_Constructor = LDKT.isConstructor(LDKO.activeXObject);
                    LapysDevelopmentKit.Constants.Assertions.activeXObjectType = LDKO.activeXObject ? typeof LDKO.activeXObject : null;

                    // Prototype
                    LapysDevelopmentKit.Objects.activeXObjectPrototype = LDKF.getPropertyByName(LDKO.activeXObject, "prototype");

                // Array --- NOTE (Lapys) -> Best to explicitly request for the `Array` constructor than implicitly retrieve it via alternate means (e.g.: `[].constructor` e.t.c.).
                LapysDevelopmentKit.Objects.array = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Array", STRICT = null, STRICT = "`Array` constructor").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.arrayPrototype = LDKF.getPropertyByName(LDKO.array, "prototype");

                // Attribute
                LapysDevelopmentKit.Objects.attr = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Attr")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // Prototype
                    LapysDevelopmentKit.Objects.attrPrototype = LDKF.getPropertyByName(LDKO.attr, "prototype");

                // Audio Parameter Map
                LapysDevelopmentKit.Objects.audioParamMap = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "AudioParamMap")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // Prototype
                    LapysDevelopmentKit.Objects.audioParamMapPrototype = LDKF.getPropertyByName(LDKO.audioParamMap, "prototype");

                // Boolean
                LapysDevelopmentKit.Objects.boolean = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Boolean", STRICT = null, STRICT = "`Boolean` constructor").requestNativeConstructor();

                // (Cancel, Request) Animation Frame
                (function() {
                    // Initialization > (Cancel, Request) Animation Frame Fallback
                    var cancelAnimationFrameFallback = function cancelAnimationFrame(frameID) {
                        // Initialization > (Length, Iterator)
                        var length = LDKF.arrayPrototypeLength(LDKS.Registry.TimeoutID), iterator = length;

                        // Loop
                        while (iterator)
                            // Logic
                            if (LDKS.Registry.TimeoutID[iterator -= 1].index === frameID) {
                                // Update > (((Lapys Development Kit > Storage) > Registry) > Timeout ID, Iterator)
                                LDKF.arrayPrototypeCutAt(LDKS.Registry.TimeoutID, iterator, STRICT = length);
                                iterator = +0
                            }
                    }, requestAnimationFrameFallback = function requestAnimationFrame(frame) {
                        // Constant > (Animation Frame, Timeout) ID
                        var animationFrameID = LDKS.Records.AnimationFrameID,
                            timeoutID = LDKF.setTimeout(function() {
                                // Frame; ...
                                LDKF.arrayPrototypeHas(LDKS.Registry.TimeoutID, animationFrameID) && frame();
                                LDKF.clearTimeout(timeoutID)
                            }, LDKC.Numbers.frameRate);

                        // Modification > ((Lapys Development Kit > Storage) > Records) > Animation Frame ID
                        LDKS.Records.AnimationFrameID += 1;

                        // Update > (((Lapys Development Kit > Storage) > Registry) > Timeout IDs) --- REDACT (Lapys)
                        LDKF.arrayPrototypePush(LDKS.Registry.TimeoutID, {
                            id: timeoutID, index: animationFrameID,
                            valueOf: function valueOf() { return animationFrameID }
                        });

                        // Return
                        return animationFrameID
                    };

                    // Initialization > (Cancel, Request) Animation Frame
                    var
                        cancelAnimationFrame = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "cancelAnimationFrame")
                            .addConditionalFallback(cancelAnimationFrameFallback, STRICT = true)
                            .requestNativeMethod(),
                        requestAnimationFrame = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "requestAnimationFrame")
                            .addConditionalFallback(requestAnimationFrameFallback, STRICT = true)
                            .requestNativeMethod();

                        // Logic
                        if (
                            (
                                cancelAnimationFrame === cancelAnimationFrameFallback &&
                                requestAnimationFrame !== requestAnimationFrameFallback
                            ) || (
                                cancelAnimationFrame !== cancelAnimationFrameFallback &&
                                requestAnimationFrame === requestAnimationFrameFallback
                            )
                        ) {
                            // Update > (Cancel, Request) Animation Frame
                            cancelAnimationFrame = cancelAnimationFrameFallback;
                            requestAnimationFrame = requestAnimationFrameFallback
                        }

                        // ...
                        LapysDevelopmentKit.Objects.cancelAnimationFrame = cancelAnimationFrame;
                        LapysDevelopmentKit.Objects.requestAnimationFrame = requestAnimationFrame
                })();

                // Clear Interval
                LapysDevelopmentKit.Objects.clearInterval = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "clearInterval", STRICT = null, STRICT = "`clearInterval` function")
                    .addAlternateCondition(function(method) { return LDKC.Assertions.isNodejsEnvironment && LDKF.functionPrototypeIsUserDefined(method) })
                    .requestNativeMethod();

                    // Call
                    LapysDevelopmentKit.Objects.clearIntervalCall = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.clearInterval, "call", STRICT = null, STRICT = "`clearInterval.call` method").requestNativeMethod();

                // Clear Timeout
                LapysDevelopmentKit.Objects.clearTimeout = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "clearTimeout", STRICT = null, STRICT = "`clearTimeout` function")
                    .addAlternateCondition(function(method) { return LDKC.Assertions.isNodejsEnvironment && LDKF.functionPrototypeIsUserDefined(method) })
                    .requestNativeMethod();

                    // Call
                    LapysDevelopmentKit.Objects.clearTimeoutCall = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.clearTimeout, "call", STRICT = null, STRICT = "`clearTimeout.call` method").requestNativeMethod();

                // Clock
                LapysDevelopmentKit.Constants.Objects.clock = new LDKD.Clock;

                // Console --- NOTE (Lapys) -> Internet Explorer 10 and 11 define the `Console` constructor within it`s JavaScript engine.
                LapysDevelopmentKit.Objects.console = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Console").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Console_Constructor = LDKT.isConstructor(LDKO.console);

                    // Prototype
                    LapysDevelopmentKit.Objects.consolePrototype = LDKF.getPropertyByName(LDKO.console, "prototype");

                // Console
                LapysDevelopmentKit.Constants.Objects.console = LDKT.objectPrototypeConsiderNativeObjectOfObject(GLOBAL, "console")
                    .addCondition(function(object) { return !LDKC.Assertions.has_Console_Constructor || LDKF.objectPrototypeIsOfConstructor(LDKC.Objects.console, LDKO.console) })
                    .requestNativeObject();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_console_Object = LDKF.isNonVoid(LDKC.Objects.console);

                    // ...
                    (function() {
                        // Initialization > Former Source
                        var formerSource = null;

                        // [Group]
                        LapysDevelopmentKit.Constants.Objects.consoleGroup = LDKF.isObjectLike(LDKO.consolePrototype) || LDKC.Assertions.has_console_Object ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKC.Objects.console, "group", STRICT = null, STRICT = "`console.group` method")
                                .addAlternateCondition(function(method) { var source = LDKF.functionPrototypeToSourceString(method); formerSource = source; return LDKF.functionPrototypeName(method, STRICT = source) == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" && LDKF.functionPrototypeIsUserDefined(method, STRICT = source) })
                                .requestNativeMethod() :
                            undefined;

                        // [Group Collapsed]
                        LapysDevelopmentKit.Constants.Objects.consoleGroupCollapsed = LDKF.isObjectLike(LDKO.consolePrototype) || LDKC.Assertions.has_console_Object ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKC.Objects.console, "groupCollapsed", STRICT = null, STRICT = "`console.groupCollapsed` method")
                                .addAlternateCondition(function(method) { var source = LDKF.functionPrototypeToSourceString(method); return formerSource == source && (LDKF.functionPrototypeName(method, STRICT = source) == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" && LDKF.functionPrototypeIsUserDefined(method, STRICT = source)) })
                                .requestNativeMethod() :
                            undefined;

                        // [Group End]
                        LapysDevelopmentKit.Constants.Objects.consoleGroupEnd = LDKF.isObjectLike(LDKO.consolePrototype) || LDKC.Assertions.has_console_Object ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKC.Objects.console, "groupEnd", STRICT = null, STRICT = "`console.groupEnd` method")
                                .addAlternateCondition(function(method) { var source = LDKF.functionPrototypeToSourceString(method); return formerSource == source && (LDKF.functionPrototypeName(method, STRICT = source) == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" && LDKF.functionPrototypeIsUserDefined(method, STRICT = source)) })
                                .requestNativeMethod() :
                            undefined;

                        // [Log]
                        LapysDevelopmentKit.Constants.Objects.consoleLog = LDKF.isObjectLike(LDKO.consolePrototype) || LDKC.Assertions.has_console_Object ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKC.Objects.console, "log", STRICT = null, STRICT = "`console.log` method")
                                .addAlternateCondition(function(method) { var source = LDKF.functionPrototypeToSourceString(method); return formerSource == source && (LDKF.functionPrototypeName(method, STRICT = source) == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" && LDKF.functionPrototypeIsUserDefined(method, STRICT = source)) })
                                .requestNativeMethod() :
                            undefined;

                        // [Warn]
                        LapysDevelopmentKit.Constants.Objects.consoleWarn = LDKF.isObjectLike(LDKO.consolePrototype) || LDKC.Assertions.has_console_Object ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKC.Objects.console, "warn", STRICT = null, STRICT = "`console.warn` method")
                                .addAlternateCondition(function(method) { var source = LDKF.functionPrototypeToSourceString(method); return formerSource == source && (LDKF.functionPrototypeName(method, STRICT = source) == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" && LDKF.functionPrototypeIsUserDefined(method, STRICT = source)) })
                                .requestNativeMethod() :
                            undefined
                    })();

                // Constraint Error
                LapysDevelopmentKit.Objects.constraintError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "ConstraintError").requestNativeConstructor();

                // Constraint Not Satisfied Error
                LapysDevelopmentKit.Objects.constraintNotSatisfiedError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "ConstraintNotSatisfiedError").requestNativeConstructor();

                // CSS Numeric Array
                LapysDevelopmentKit.Objects.cssNumericArray = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "CSSNumericArray")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // Prototype
                    LapysDevelopmentKit.Objects.cssNumericArrayPrototype = LDKF.getPropertyByName(LDKO.cssNumericArray, "prototype");

                // CSS Rule List
                LapysDevelopmentKit.Objects.cssRuleList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "CSSRuleList")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // Prototype
                    LapysDevelopmentKit.Objects.cssRuleListPrototype = LDKF.getPropertyByName(LDKO.cssRuleList, "prototype");

                // CSS Style Declaration
                LapysDevelopmentKit.Objects.cssStyleDeclaration = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "CSSStyleDeclaration")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_CSSStyleDeclaration_Constructor = LDKT.isConstructor(LDKO.cssStyleDeclaration);

                    // Prototype
                    LapysDevelopmentKit.Objects.cssStyleDeclarationPrototype = LDKF.getPropertyByName(LDKO.cssStyleDeclaration, "prototype");

                // Custom Element Registry
                LapysDevelopmentKit.Objects.customElementRegistry = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "CustomElementRegistry")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_CustomElementRegistry_Constructor = LDKT.isConstructor(LDKO.customElementRegistry);

                    // Prototype
                    LapysDevelopmentKit.Objects.customElementRegistryPrototype = LDKF.getPropertyByName(LDKO.customElementRegistry, "prototype");
                        // Define
                        LapysDevelopmentKit.Objects.customElementRegistryPrototypeDefine = LDKF.isObjectLike(LDKO.customElementRegistryPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.customElementRegistryPrototype, "define", STRICT = null, STRICT = "`CustomElementRegistry.prototype.define` method").requestNativeMethod() :
                            undefined;

                // Custom Elements
                LapysDevelopmentKit.Constants.Objects.customElements = LDKT.objectPrototypeConsiderNativeObjectOfObject(GLOBAL, "customElements")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .addCondition(function(object) { return !LDKC.Assertions.has_CustomElementRegistry_Constructor || LDKF.objectPrototypeIsOfConstructor(object, LDKO.customElementRegistry) })
                    .requestNativeObject();

                // Data Error
                LapysDevelopmentKit.Objects.dataError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DataError").requestNativeConstructor();

                // Data Clone Error
                LapysDevelopmentKit.Objects.dataCloneError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DataCloneError").requestNativeConstructor();

                // Data Transfer Item List
                LapysDevelopmentKit.Objects.dataTransferItemList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DataTransferItemList").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.dataTransferItemListPrototype = LDKF.getPropertyByName(LDKO.dataTransferItemList, "prototype");

                // Date
                LapysDevelopmentKit.Objects.date = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Date", STRICT = null, STRICT = "`Date` constructor").requestNativeConstructor();
                    // Now
                    LapysDevelopmentKit.Objects.dateNow = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.date, "now", STRICT = null, STRICT = "`Date.now` method")
                        .addCondition(function(method) { var returnValue = LDKF.functionPrototypeCall(method, LDKO.date); return LDKF.isNumber(returnValue) && LDKF.numberPrototypeIsPositiveInteger(returnValue) })
                        .requestNativeMethod();

                // Devices Not Found Error
                LapysDevelopmentKit.Objects.devicesNotFoundError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DevicesNotFoundError").requestNativeConstructor();

                // (HTML) Document --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Unfortunately, not all web environments support the public `Document` constructor.
                LapysDevelopmentKit.Objects.document = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Document")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .addAlternateCondition(function(constructorRoutine) { return LDKF.isObjectLike(constructorRoutine) && (LDKF.numberPrototypeIsNaN(LDKF.toNumber(constructorRoutine)) && LDKF.toString(constructorRoutine) == "[object Document]") })
                    .requestNativeConstructor();

                LapysDevelopmentKit.Objects.htmlDocument = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLDocument")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .addAlternateCondition(function(constructorRoutine) { return LDKF.isObjectLike(constructorRoutine) && (LDKF.numberPrototypeIsNaN(LDKF.toNumber(constructorRoutine)) && LDKF.toString(constructorRoutine) == "[object HTMLDocument]") })
                    .requestNativeConstructor();

                LapysDevelopmentKit.Constants.Objects.document = LDKC.Assertions.isBrowserEnvironment ?
                    LDKT.objectPrototypeConsiderNativeObjectOfObject(GLOBAL, "document", STRICT = null, STRICT = "`document` object") // NOTE (Lapys) -> At least the `document` object is consistent on ALL web environments.
                        .addCondition(function(object) { return LDKF.objectPrototypeIsOfConstructor(object, LDKO.document, STRICT = true) })
                        .addAlternateCondition(function(object) { return LDKF.isDocumentLike(object) })
                        .requestNativeObject() :
                    undefined;
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Document_Constructor = LDKT.isConstructor(LDKO.document);
                    LapysDevelopmentKit.Constants.Assertions.has_HTMLDocument_Constructor = LDKT.isConstructor(LDKO.htmlDocument);

                    // Prototype
                    LapysDevelopmentKit.Objects.documentPrototype = LDKF.getPropertyByName(LDKO.document, "prototype");
                    LapysDevelopmentKit.Objects.htmlDocumentPrototype = LDKF.getPropertyByName(LDKO.htmlDocument, "prototype");
                        // Create Element
                        LapysDevelopmentKit.Objects.documentPrototypeCreateElement = LDKT.request_document_Prototype() || LDKC.Objects.document ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKT.request_document_Prototype() || LDKC.Objects.document, "createElement", STRICT = null, STRICT = "`Document.prototype.createElement` method")
                                .addCondition(LDKT.isBrowserEnvironment)
                                .requestNativeMethod() :
                            undefined;

                        // Get Elements By Class Name
                        LapysDevelopmentKit.Objects.documentPrototypeGetElementsByClassName = LDKT.request_document_Prototype() || LDKC.Objects.document ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKT.request_document_Prototype() || LDKC.Objects.document, "getElementsByClassName")
                                .addCondition(LDKT.isBrowserEnvironment)
                                .addConditionalFallback({
                                    condition: function(method, object) { return !LDKF.objectPrototypeHasProperty(object, "getElementsByClassName") || LDKF.isVoid(method) },
                                    value: function getElementsByClassName(className) {
                                        // Initialization > (Elements (Length), (HTML Collection) (Length, Iterator))
                                        var elements = [], elementsLength = +0,
                                            htmlCollection = LDKF.documentPrototypeGetElementsByTagName(className, STRICT = this),
                                            htmlCollectionLength = LDKF.htmlCollectionPrototypeLength(htmlCollection),
                                            htmlCollectionIterator = htmlCollectionLength;

                                        // Loop
                                        while (htmlCollectionIterator) {
                                            // Constant > HTML Element
                                            var htmlElement = LDKF.htmlCollectionPrototypeItem(htmlCollection, htmlCollectionLength - (htmlCollectionIterator -= 1) - 1);

                                            // Logic
                                            if (className) {
                                                // Logic
                                                if (LDKF.elementPrototypeGetAttribute(htmlElement, "class") == className) {
                                                    // Update > Elements (Length)
                                                    elements[elementsLength] = htmlElement;
                                                    elementsLength += 1
                                                }
                                            }

                                            else if (LDKF.elementPrototypeHasAttribute(htmlElement, "class")) {
                                                // Update > Elements (Length)
                                                elements[elementsLength] = htmlElement;
                                                elementsLength += 1
                                            }
                                        }

                                        // Return
                                        return elements
                                    }
                                })
                                .requestNativeMethod() :
                            undefined;

                        // Get Elements By Tag Name
                        LapysDevelopmentKit.Objects.documentPrototypeGetElementsByTagName = LDKT.request_document_Prototype() || LDKC.Objects.document ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKT.request_document_Prototype() || LDKC.Objects.document, "getElementsByTagName", STRICT = null, STRICT = "`Document.prototype.getElementsByTagName` method")
                                .addCondition(LDKT.isBrowserEnvironment)
                                .requestNativeMethod() :
                            undefined;

                        // Query Selector --- CHECKPOINT (Lapys)
                        // Query Selector All --- CHECKPOINT (Lapys)

                        // Register Element
                        LapysDevelopmentKit.Objects.documentPrototypeRegisterElement = LDKT.request_document_Prototype() || LDKC.Objects.document ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKT.request_document_Prototype() || LDKC.Objects.document, "registerElement")
                                .addCondition(LDKT.isBrowserEnvironment)
                                .requestNativeMethod() :
                            undefined;

                            // ...
                            LapysDevelopmentKit.Constants.Assertions.has_registerElement_Method = LDKF.isConstructible(LDKO.documentPrototypeRegisterElement) && LDKF.isNativeFunction(LDKO.documentPrototypeRegisterElement);

                // Document Fragment
                LapysDevelopmentKit.Objects.documentFragment = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DocumentFragment")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                // Document Type
                LapysDevelopmentKit.Objects.documentType = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DocumentType")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.documentTypePrototype = LDKF.getPropertyByName(LDKO.documentType, "prototype");

                // DOM Error
                LapysDevelopmentKit.Objects.domError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMError")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                // DOM Exception
                LapysDevelopmentKit.Objects.domException = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMException")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_DOMException_Constructor = LDKT.isConstructor(LDKO.domException);

                // DOM Implementation
                LapysDevelopmentKit.Objects.domImplementation = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMImplementation")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_DOMImplementation_Constructor = LDKT.isConstructor(LDKO.domImplementation);

                // DOM Rectangle
                LapysDevelopmentKit.Objects.domRect = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMRect")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.domRectPrototype = LDKF.getPropertyByName(LDKO.domRect, "prototype");

                // DOM Rectangle List
                LapysDevelopmentKit.Objects.domRectList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMRectList")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.domRectListPrototype = LDKF.getPropertyByName(LDKO.domRectList, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.domRectListPrototypeItem = LDKF.isObjectLike(LDKO.domRectListPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.domRectListPrototype, "item", STRICT = null, STRICT = "`DOMRectList.prototype.item` method").requestNativeMethod() :
                            undefined;

                // DOM String List
                LapysDevelopmentKit.Objects.domStringList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMStringList")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.domStringListPrototype = LDKF.getPropertyByName(LDKO.domStringList, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.domStringListPrototypeItem = LDKF.isObjectLike(LDKO.domStringListPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.domStringListPrototype, "item", STRICT = null, STRICT = "`DOMStringList.prototype.item` method").requestNativeMethod() :
                            undefined;

                // DOM Token List
                LapysDevelopmentKit.Objects.domTokenList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "DOMTokenList")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.domTokenListPrototype = LDKF.getPropertyByName(LDKO.domTokenList, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.domTokenListPrototypeItem = LDKF.isObjectLike(LDKO.domTokenListPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.domTokenListPrototype, "item", STRICT = null, STRICT = "`DOMTokenList.prototype.item` method").requestNativeMethod() :
                            undefined;

                // Encoding Error
                LapysDevelopmentKit.Objects.encodingError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "EncodingError").requestNativeConstructor();

                // Element
                LapysDevelopmentKit.Objects.element = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Element")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .addAlternateCondition(function(constructorRoutine) { return LDKF.isObjectLike(constructorRoutine) && (LDKF.numberPrototypeIsNaN(LDKF.toNumber(constructorRoutine)) && LDKF.toString(constructorRoutine) == "[object Element]") })
                    .requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Element_Constructor = LDKT.isConstructor(LDKO.element);

                    // Prototype
                    LapysDevelopmentKit.Objects.elementPrototype = LDKF.getPropertyByName(LDKO.element, "prototype");
                        // Get Attribute
                        LapysDevelopmentKit.Objects.elementPrototypeGetAttribute = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "getAttribute", STRICT = null, STRICT = "`Element.prototype.getAttribute` method").requestNativeMethod() :
                            undefined;

                        // Get Attribute Node
                        LapysDevelopmentKit.Objects.elementPrototypeGetAttributeNode = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "getAttributeNode", STRICT = null, STRICT = "`Element.prototype.getAttributeNode` method").requestNativeMethod() :
                            undefined;

                        // Get Bounding Client Rectangle
                        LapysDevelopmentKit.Objects.elementPrototypeGetBoundingClientRect = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "getBoundingClientRect", STRICT = null, STRICT = "`Element.prototype.getBoundingClientRect` method").requestNativeMethod() :
                            undefined;

                        // Get Client Rectangles
                        LapysDevelopmentKit.Objects.elementPrototypeGetClientRects = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "getClientRects", STRICT = null, STRICT = "`Element.prototype.getClientRects` method").requestNativeMethod() :
                            undefined;

                        // Get Elements By Tag Name
                        LapysDevelopmentKit.Objects.elementPrototypeGetElementsByTagName = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "getElementsByTagName", STRICT = null, STRICT = "`Element.prototype.getElementsByTagName` method").requestNativeMethod() :
                            undefined;

                        // Has Attribute
                        LapysDevelopmentKit.Objects.elementPrototypeHasAttribute = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "hasAttribute", STRICT = null, STRICT = "`Element.prototype.hasAttribute` method")
                                .addConditionalFallback({ // NOTE (Lapys) -> If the old DOM 3 Core specification is not adhered, the fallback value is valid.
                                    condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.elementPrototype, "hasAttribute") || LDKF.isVoid(method) },
                                    value: function hasAttribute(attributeName) { return !LDKF.isNull(LDKF.elementPrototypeGetAttribute(attributeName))  }
                                })
                                .requestNativeMethod() :
                            undefined;

                        // Has Attribute Node
                        LapysDevelopmentKit.Objects.elementPrototypeHasAttributeNode = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "hasAttributeNode", STRICT = null, STRICT = "`Element.prototype.hasAttributeNode` method")
                                .addConditionalFallback({
                                    condition: function(method) { return !LDKF.objectPrototypeHasProperty(LDKO.elementPrototype, "hasAttributeNode") || LDKF.isVoid(method) },
                                    value: function hasAttribute(attributeName) { return !LDKF.isNull(LDKF.elementPrototypeGetAttributeNode(attributeName))  }
                                })
                                .requestNativeMethod() :
                            undefined;

                        // Insert Adjacent Element
                        LapysDevelopmentKit.Objects.elementPrototypeInsertAdjacentElement = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "insertAdjacentElement", STRICT = null, STRICT = "`Element.prototype.insertAdjacentElement` method")
                                .requestNativeMethod() :
                            undefined;

                        // Insert Adjacent HTML
                        LapysDevelopmentKit.Objects.elementPrototypeInsertAdjacentHTML = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "insertAdjacentHTML", STRICT = null, STRICT = "`Element.prototype.insertAdjacentHTML` method").requestNativeMethod() :
                            undefined;

                        // Insert Adjacent Text
                        LapysDevelopmentKit.Objects.elementPrototypeInsertAdjacentText = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "insertAdjacentText", STRICT = null, STRICT = "`Element.prototype.insertAdjacentText` method").requestNativeMethod() :
                            undefined;

                        // Remove Attribute
                        LapysDevelopmentKit.Objects.elementPrototypeRemoveAttribute = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "removeAttribute", STRICT = null, STRICT = "`Element.prototype.removeAttribute` method").requestNativeMethod() :
                            undefined;

                        // Remove Attribute Node
                        LapysDevelopmentKit.Objects.elementPrototypeRemoveAttributeNode = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "removeAttributeNode", STRICT = null, STRICT = "`Element.prototype.removeAttributeNode` method").requestNativeMethod() :
                            undefined;

                        // Set Attribute
                        LapysDevelopmentKit.Objects.elementPrototypeSetAttribute = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "setAttribute", STRICT = null, STRICT = "`Element.prototype.setAttribute` method").requestNativeMethod() :
                            undefined;

                        // Set Attribute Node
                        LapysDevelopmentKit.Objects.elementPrototypeSetAttributeNode = LDKF.isObjectLike(LDKO.elementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.elementPrototype, "setAttributeNode", STRICT = null, STRICT = "`Element.prototype.setAttributeNode` method").requestNativeMethod() :
                            undefined;

                // Evaluation Error
                LapysDevelopmentKit.Objects.evalError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "EvalError").requestNativeConstructor();

                // Event
                LapysDevelopmentKit.Objects.event = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Event").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Event_Constructor = LDKT.isConstructor(LDKO.event);

                // Event Exception
                LapysDevelopmentKit.Objects.eventException = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "EventException").requestNativeConstructor();

                // Event Target
                LapysDevelopmentKit.Objects.eventTarget = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "EventTarget").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_EventTarget_Constructor = LDKT.isConstructor(LDKO.eventTarget);

                    // Prototype
                    LapysDevelopmentKit.Objects.eventTargetPrototype = LDKF.getPropertyByName(LDKO.eventTarget, "prototype");
                        // ...
                        LDKF.isObjectLike(LDKO.eventTargetPrototype) && (function() {
                            // Initialization > Has (`attachEvent`, `detachEvent`) Method
                            var has_attachEvent_Method = false,
                                has_detachEvent_Method = false;

                            // Modification > ((Lapys Development Kit > Objects) > Event Target > Prototype) > Attach Event
                            LapysDevelopmentKit.Objects.eventTargetPrototypeAttachEvent = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.eventTargetPrototype, "attachEvent").requestNativeMethod();
                                // Update > ...
                                has_attachEvent_Method = LDKF.isConstructible(LDKO.eventTargetPrototypeAttachEvent) && LDKF.isNativeFunction(LDKO.eventTargetPrototypeAttachEvent);

                            // Modification > ((Lapys Development Kit > Objects) > Event Target > Prototype) > Detach Event
                            LapysDevelopmentKit.Objects.eventTargetPrototypeDetachEvent = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.eventTargetPrototype, "detachEvent").requestNativeMethod();
                                // Update > ...
                                has_detachEvent_Method = LDKF.isConstructible(LDKO.eventTargetPrototypeDetachEvent) && LDKF.isNativeFunction(LDKO.eventTargetPrototypeDetachEvent);

                            // Modification > (Lapys Development Kit > Objects) > Event Target > Prototype
                                // Add Event Listener
                                LapysDevelopmentKit.Objects.eventTargetPrototypeAddEventListener = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.eventTargetPrototype, "addEventListener")
                                    .requestNativeMethod();

                                (LDKF.isConstructible(LDKO.eventTargetPrototypeAddEventListener) && LDKF.isNativeFunction(LDKO.eventTargetPrototypeAddEventListener)) ||
                                (has_attachEvent_Method ? LDKO.eventTargetPrototypeAddEventListener = LDKO.eventTargetPrototypeAttachEvent : LDKF.throwFeatureNotNativeError("`EventTarget.prototype.addEventListener` method"));

                                // Remove Event Listener
                                LapysDevelopmentKit.Objects.eventTargetPrototypeRemoveEventListener = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.eventTargetPrototype, "removeEventListener")
                                    .requestNativeMethod();

                                (LDKF.isConstructible(LDKO.eventTargetPrototypeRemoveEventListener) && LDKF.isNativeFunction(LDKO.eventTargetPrototypeRemoveEventListener)) ||
                                (has_detachEvent_Method ? LDKO.eventTargetPrototypeRemoveEventListener = LDKO.eventTargetPrototypeDetachEvent : LDKF.throwFeatureNotNativeError("`EventTarget.prototype.removeEventListener` method"))
                        })();

                // File
                LapysDevelopmentKit.Objects.file = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "File").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.filePrototype = LDKF.getPropertyByName(LDKO.file, "prototype");

                // File List
                LapysDevelopmentKit.Objects.fileList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "FileList").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.fileListPrototype = LDKF.getPropertyByName(LDKO.fileList, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.fileListPrototypeItem = LDKF.isObjectLike(LDKO.fileListPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.fileListPrototype, "item", STRICT = null, STRICT = "`FileList.prototype.item` method").requestNativeMethod() :
                            undefined;

                // Hierarchy Request Error
                LapysDevelopmentKit.Objects.hierarchyRequestError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HierarchyRequestError").requestNativeConstructor();

                // HTML All Collection
                LapysDevelopmentKit.Objects.htmlAllCollection = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLAllCollection").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_HTMLAllCollection_Constructor = LDKT.isConstructor(LDKO.htmlAllCollection);

                    // Prototype
                    LapysDevelopmentKit.Objects.htmlAllCollectionPrototype = LDKF.getPropertyByName(LDKO.htmlAllCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.htmlAllCollectionPrototypeItem = LDKF.isObjectLike(LDKO.htmlAllCollectionPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.htmlAllCollectionPrototype, "item", STRICT = null, STRICT = "`HTMLAllCollection.prototype.item` method").requestNativeMethod() :
                            undefined;

                // HTML Audio Element
                LapysDevelopmentKit.Objects.htmlAudioElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLAudioElement").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlAudioElementPrototype = LDKF.getPropertyByName(LDKO.htmlAudioElement, "prototype");

                // HTML Body Element
                LapysDevelopmentKit.Objects.htmlBodyElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLBodyElement").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_HTMLBodyElement_Constructor = LDKT.isConstructor(LDKO.htmlBodyElement);

                    // Prototype
                    LapysDevelopmentKit.Objects.htmlBodyElementPrototype = LDKF.getPropertyByName(LDKO.htmlBodyElement, "prototype");

                // HTML Collection
                LapysDevelopmentKit.Objects.htmlCollection = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLCollection").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_HTMLCollection_Constructor = LDKT.isConstructor(LDKO.htmlCollection);

                    // Prototype
                    LapysDevelopmentKit.Objects.htmlCollectionPrototype = LDKF.getPropertyByName(LDKO.htmlCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.htmlCollectionPrototypeItem = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKF.isObjectLike(LDKO.htmlCollectionPrototype) ? LDKO.htmlCollectionPrototype : {}, "item", STRICT = null, STRICT = "`HTMLCollection.prototype.item` method")
                            .addConditionalFallback({condition: function(method) { return LDKF.isVoid(method) }, value: function item(index) { return this[index] || null } })
                            .requestNativeMethod();

                        // Length [Accessor]
                        LapysDevelopmentKit.Objects.htmlCollectionPrototypeLengthAccessor = LDKF.objectPrototypeRequestAccessor(LDKF.isObjectLike(LDKO.htmlCollectionPrototype) ? LDKO.htmlCollectionPrototype : {}, "length") ||
                            function length() { var length = +0; while (!LDKF.isNull(LDKF.htmlCollectionPrototypeItem(this, length))) length += 1; return length };

                // HTML Document
                LapysDevelopmentKit.Objects.htmlDocument = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLDocument").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlDocumentPrototype = LDKF.getPropertyByName(LDKO.htmlDocument, "prototype");

                // HTML Element
                LapysDevelopmentKit.Objects.htmlElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLElement").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlElementPrototype = LDKF.getPropertyByName(LDKO.htmlElement, "prototype");
                        // Blur
                        LapysDevelopmentKit.Objects.htmlElementPrototypeBlur = LDKF.isObjectLike(LDKO.htmlElementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.htmlElementPrototype, "blur", STRICT = null, STRICT = "`HTMLElement.prototype.blur` method").requestNativeMethod() :
                            undefined;

                        // Click
                        LapysDevelopmentKit.Objects.htmlElementPrototypeClick = LDKF.isObjectLike(LDKO.htmlElementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.htmlElementPrototype, "click", STRICT = null, STRICT = "`HTMLElement.prototype.click` method").requestNativeMethod() :
                            undefined;

                        // Focus
                        LapysDevelopmentKit.Objects.htmlElementPrototypeFocus = LDKF.isObjectLike(LDKO.htmlElementPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.htmlElementPrototype, "focus", STRICT = null, STRICT = "`HTMLElement.prototype.focus` method").requestNativeMethod() :
                            undefined;

                // HTML Form Controls Collection
                LapysDevelopmentKit.Objects.htmlFormControlsCollection = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLFormControlsCollection").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlFormControlsCollectionPrototype = LDKF.getPropertyByName(LDKO.htmlFormControlsCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.htmlFormControlsCollectionPrototypeItem = LDKF.isObjectLike(LDKO.htmlFormControlsCollectionPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.htmlFormControlsCollectionPrototype, "item", STRICT = null, STRICT = "`HTMLFormControlsCollection.prototype.item` method").requestNativeMethod() :
                            undefined;

                // HTML Frame Set Element
                LapysDevelopmentKit.Objects.htmlFrameSetElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLFrameSetElement").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_HTMLFrameSetElement_Constructor = LDKT.isConstructor(LDKO.htmlFrameSetElement);

                // HTML Head Element
                LapysDevelopmentKit.Objects.htmlHeadElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLHeadElement").requestNativeConstructor();

                // HTML Image Element
                LapysDevelopmentKit.Objects.htmlImageElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLImageElement").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlImageElementPrototype = LDKF.getPropertyByName(LDKO.htmlImageElement, "prototype");

                // HTML Input Element
                LapysDevelopmentKit.Objects.htmlInputElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLInputElement").requestNativeConstructor();

                // HTML Internal Frame Element
                LapysDevelopmentKit.Objects.htmlIFrameElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLIFrameElement").requestNativeConstructor();

                // HTML HTML Element
                LapysDevelopmentKit.Objects.htmlHTMLElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLHtmlElement").requestNativeConstructor();

                // HTML LapysJS Element --- CHECKPOINT (Lapys)

                // HTML Options Collection
                LapysDevelopmentKit.Objects.htmlOptionsCollection = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLOptionsCollection").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlOptionsCollectionPrototype = LDKF.getPropertyByName(LDKO.htmlOptionsCollection, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.htmlOptionsCollectionPrototypeItem = LDKF.isObjectLike(LDKO.htmlOptionsCollectionPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.htmlOptionsCollectionPrototype, "item", STRICT = null, STRICT = "`HTMLOptionsCollection.prototype.item` method").requestNativeMethod() :
                            undefined;

                // HTML Table Element
                LapysDevelopmentKit.Objects.htmlTableElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTableElement").requestNativeConstructor();

                // HTML Table Caption Element
                LapysDevelopmentKit.Objects.htmlTableCaptionElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTableCaptionElement").requestNativeConstructor();

                // HTML Table Cell Element
                LapysDevelopmentKit.Objects.htmlTableCellElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTableCellElement").requestNativeConstructor();

                // HTML Table Column Element
                LapysDevelopmentKit.Objects.htmlTableColumnElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTableColumnElement").requestNativeConstructor();

                // HTML Table Row Element
                LapysDevelopmentKit.Objects.htmlTableRowElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTableRowElement").requestNativeConstructor();

                // HTML Table Section Element
                LapysDevelopmentKit.Objects.htmlTableSectionElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTableSectionElement").requestNativeConstructor();

                // HTML TextArea Element
                LapysDevelopmentKit.Objects.htmlTextAreaElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTextAreaElement").requestNativeConstructor();

                // HTML Time Element
                LapysDevelopmentKit.Objects.htmlTimeElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTimeElement").requestNativeConstructor();

                // HTML Title Element
                LapysDevelopmentKit.Objects.htmlTitleElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLTitleElement").requestNativeConstructor();

                // HTML Script Element
                LapysDevelopmentKit.Objects.htmlScriptElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLScriptElement").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlScriptElementPrototype = LDKF.getPropertyByName(LDKO.htmlScriptElement, "prototype");

                // HTML Style Element
                LapysDevelopmentKit.Objects.htmlStyleElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLStyleElement").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlStyleElementPrototype = LDKF.getPropertyByName(LDKO.htmlStyleElement, "prototype");

                // HTML Unknown Element
                LapysDevelopmentKit.Objects.htmlUnknownElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLUnknownElement").requestNativeConstructor();

                // HTML Video Element
                LapysDevelopmentKit.Objects.htmlVideoElement = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "HTMLVideoElement").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.htmlVideoElementPrototype = LDKF.getPropertyByName(LDKO.htmlVideoElement, "prototype");

                // Index Size Error
                LapysDevelopmentKit.Objects.indexSizeError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "IndexSizeError").requestNativeConstructor();

                // Internal Error
                LapysDevelopmentKit.Objects.internalError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "InternalError").requestNativeConstructor();

                // Invalid Access Error
                LapysDevelopmentKit.Objects.invalidAccessError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "InvalidAccessError").requestNativeConstructor();

                // Invalid Character Error
                LapysDevelopmentKit.Objects.invalidCharacterError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "InvalidCharacterError").requestNativeConstructor();

                // Invalid Modification Error
                LapysDevelopmentKit.Objects.invalidModificationError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "InvalidModificationError").requestNativeConstructor();

                // Invalid Node Type Error
                LapysDevelopmentKit.Objects.invalidNodeTypeError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "InvalidNodeTypeError").requestNativeConstructor();

                // Invalid State Error
                LapysDevelopmentKit.Objects.invalidStateError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "InvalidStateError").requestNativeConstructor();

                // Location
                LapysDevelopmentKit.Objects.location = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Location")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Location_Constructor = LDKT.isConstructor(LDKO.location);

                // Map
                LapysDevelopmentKit.Objects.map = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Map").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.mapPrototype = LDKF.getPropertyByName(LDKO.map, "prototype");
                        // Get
                        LapysDevelopmentKit.Objects.mapPrototypeGet = LDKF.isObjectLike(LDKO.mapPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.mapPrototype, "get", STRICT = null, STRICT = "`Map.prototype.get` method").requestNativeMethod() :
                            undefined;

                // Math
                LapysDevelopmentKit.Objects.math = LDKT.objectPrototypeConsiderNativeObjectOfObject(GLOBAL, "Math", STRICT = null, STRICT = "`Math` object").requestNativeObject();

                // Media Error
                LapysDevelopmentKit.Objects.mediaError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MediaError").requestNativeConstructor();

                // Media Key Error
                LapysDevelopmentKit.Objects.mediaKeyError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MediaKeyError").requestNativeConstructor();

                // Media Key Status Map
                LapysDevelopmentKit.Objects.mediaKeyStatusMap = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MediaKeyStatusMap").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.mediaKeyStatusMapPrototype = LDKF.getPropertyByName(LDKO.mediaKeyStatusMap, "prototype");
                        // Get
                        LapysDevelopmentKit.Objects.mediaKeyStatusMapPrototypeGet = LDKF.isObjectLike(LDKO.mediaKeyStatusMapPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.mediaKeyStatusMapPrototype, "get", STRICT = null, STRICT = "`MediaKeyStatusMap.prototype.get` method").requestNativeMethod() :
                            undefined;

                // Media List
                LapysDevelopmentKit.Objects.mediaList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MediaList").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.mediaListPrototype = LDKF.getPropertyByName(LDKO.mediaList, "prototype");
                        // Get
                        LapysDevelopmentKit.Objects.mediaListPrototypeItem = LDKF.isObjectLike(LDKO.mediaListPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.mediaListPrototype, "item", STRICT = null, STRICT = "`MediaList.prototype.item` method").requestNativeMethod() :
                            undefined;

                // Media Stream Error
                LapysDevelopmentKit.Objects.mediaStreamError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MediaStreamError").requestNativeConstructor();

                // Microsoft Media Key Error
                LapysDevelopmentKit.Objects.msMediaKeyError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MSMediaKeyError").requestNativeConstructor();

                // MIDI Input Map
                LapysDevelopmentKit.Objects.midiInputMap = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MIDIInputMap").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.midiInputMapPrototype = LDKF.getPropertyByName(LDKO.midiInputMap, "prototype");
                        // Get
                        LapysDevelopmentKit.Objects.midiInputMapPrototypeGet = LDKF.isObjectLike(LDKO.midiInputMapPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.midiInputMapPrototype, "get", STRICT = null, STRICT = "`MIDIInputMap.prototype.get` method").requestNativeMethod() :
                            undefined;

                // MIDI Output Map
                LapysDevelopmentKit.Objects.midiOutputMap = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MIDIOutputMap").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.midiOutputMapPrototype = LDKF.getPropertyByName(LDKO.midiOutputMap, "prototype");
                        // Get
                        LapysDevelopmentKit.Objects.midiOutputMapPrototypeGet = LDKF.isObjectLike(LDKO.midiOutputMapPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.midiOutputMapPrototype, "get", STRICT = null, STRICT = "`MIDIOutputMap.prototype.get` method").requestNativeMethod() :
                            undefined;

                // MIME Type Array
                LapysDevelopmentKit.Objects.mimeTypeArray = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MIMETypeArray").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.mimeTypeArrayPrototype = LDKF.getPropertyByName(LDKO.mimeTypeArray, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.mimeTypeArrayPrototypeItem = LDKF.isObjectLike(LDKO.mimeTypeArrayPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.mimeTypeArrayPrototype, "item", STRICT = null, STRICT = "`MIMETypeArray.prototype.item` method").requestNativeMethod() :
                            undefined;

                // Mutation Event
                LapysDevelopmentKit.Objects.mutationEvent = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MutationEvent").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.mutationEventPrototype = LDKF.getPropertyByName(LDKO.mutationEvent, "prototype");

                // Mutation Observer
                LapysDevelopmentKit.Objects.mutationObserver = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "MutationObserver").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.mutationObserverPrototype = LDKF.getPropertyByName(LDKO.mutationObserver, "prototype");

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_MutationObserver_Constructor = LDKT.isConstructor(LDKO.mutationObserver);

                // Named Node Map
                LapysDevelopmentKit.Objects.namedNodeMap = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NamedNodeMap").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_NamedNodeMap_Constructor = LDKT.isConstructor(LDKO.namedNodeMap);

                    // Prototype
                    LapysDevelopmentKit.Objects.namedNodeMapPrototype = LDKF.getPropertyByName(LDKO.namedNodeMap, "prototype");
                        // Item
                        LapysDevelopmentKit.Objects.namedNodeMapPrototypeItem = LDKF.isObjectLike(LDKO.namedNodeMapPrototype) ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.namedNodeMapPrototype, "item").requestNativeMethod() :
                            undefined;

                // Namespace Error
                LapysDevelopmentKit.Objects.namespaceError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NamespaceError");

                // Navigator User Media Error
                LapysDevelopmentKit.Objects.navigatorUserMediaError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NavigatorUserMediaError");

                // Network Error
                LapysDevelopmentKit.Objects.networkError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NetworkError");

                // No Modification Allowed Error
                LapysDevelopmentKit.Objects.noModificationAllowedError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NoModificationAllowedError");

                // Node
                LapysDevelopmentKit.Objects.node = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Node")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Node_Constructor = LDKT.isConstructor(LDKO.node);

                    // Prototype --- CHECKPOINT (Lapys)
                        // Append Child --- CHECKPOINT (Lapys)
                        // Clone Node --- CHECKPOINT (Lapys)
                        // Contains --- CHECKPOINT (Lapys)
                        // Document Type Node --- CHECKPOINT (Lapys)
                        // Element Node --- CHECKPOINT (Lapys)
                        // Has Child Nodes --- CHECKPOINT (Lapys)
                        // Insert Before --- CHECKPOINT (Lapys)
                        // Normalize --- CHECKPOINT (Lapys)
                        // Remove Child --- CHECKPOINT (Lapys)
                        // Replace Child --- CHECKPOINT (Lapys)

                // Node List --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects.nodeList = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NodeList")
                    .addCondition(LDKT.isBrowserEnvironment)
                    .requestNativeConstructor();

                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_NodeList_Constructor = LDKT.isConstructor(LDKO.nodeList);

                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Not Allowed Error
                LapysDevelopmentKit.Objects.notAllowedError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NotAllowedError");

                // Not Found Error
                LapysDevelopmentKit.Objects.notFoundError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NotFoundError");

                // Not Readable Error
                LapysDevelopmentKit.Objects.notReadableError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NotReadableError");

                // Not Supported Error
                LapysDevelopmentKit.Objects.notSupportedError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "NotSupportedError");

                // Notification --- CHECKPOINT (Lapys)

                // Number --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Object > Prototype
                    // `__proto__` Accessor
                    LapysDevelopmentKit.Objects.objectPrototype___proto___Accessor = LDKC.Assertions.has___proto___Property ? LDKF.objectPrototypeRequestAccessor(ANY, "__proto__") : null;

                    // `__proto__` Mutator
                    LapysDevelopmentKit.Objects.objectPrototype___proto___Mutator = LDKC.Assertions.has___proto___Property ? LDKF.objectPrototypeRequestMutator(ANY, "__proto__") : null;

                // Operation Error
                LapysDevelopmentKit.Objects.operationError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "OperationError");

                // Over-Constrained Error
                LapysDevelopmentKit.Objects.overConstrainedError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "OverconstrainedError");

                // Performance
                LapysDevelopmentKit.Objects.performance = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "Performance").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_Performance_Constructor = LDKT.isConstructor(LDKO.performance);

                    // Prototype
                    LapysDevelopmentKit.Objects.performancePrototype = LDKF.getPropertyByName(LDKO.performance, "prototype");
                        // Now
                        LapysDevelopmentKit.Objects.performancePrototypeNow = LDKC.Assertions.has_Performance_Constructor ?
                            LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.performancePrototype, "now", STRICT = null, STRICT = "`performance.now` method").requestNativeMethod() :
                            undefined;

                // Performance
                LapysDevelopmentKit.Constants.Objects.performance = LDKT.objectPrototypeConsiderNativeObjectOfObject(GLOBAL, "performance")
                    .addCondition(function(object) { return !LDKC.Assertions.has_Performance_Constructor || LDKF.objectPrototypeIsOfConstructor(object, LDKO.performance) })
                    .requestNativeObject();

                // Permission Denied Error
                LapysDevelopmentKit.Objects.permissionDeniedError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "PermissionDeniedError");

                // Plugin Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Quota Exceeded Error
                LapysDevelopmentKit.Objects.quotaExceededError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "QuotaExceededError");

                // Radio Node List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Range --- CHECKPOINT (Lapys)

                // Range Error
                LapysDevelopmentKit.Objects.rangeError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "RangeError");

                // Read-Only Error
                LapysDevelopmentKit.Objects.readOnlyError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "ReadOnlyError");

                // Reference Error
                LapysDevelopmentKit.Objects.referenceError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "ReferenceError");

                // Regular Expression --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Safe Array --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Safe Number --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Security Error
                LapysDevelopmentKit.Objects.securityError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "SecurityError");

                // Selection --- CHECKPOINT (Lapys)
                // Set --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Set Interval
                LapysDevelopmentKit.Objects.setInterval = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "setInterval", STRICT = null, STRICT = "`setInterval` function")
                    .addAlternateCondition(function(method) { return LDKC.Assertions.isNodejsEnvironment && LDKF.functionPrototypeIsUserDefined(method) })
                    .requestNativeMethod();

                    // Call
                    LapysDevelopmentKit.Objects.setIntervalCall = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.setInterval, "call", STRICT = null, STRICT = "`setInterval.call` method").requestNativeMethod();

                // Set Timeout
                LapysDevelopmentKit.Objects.setTimeout = LDKT.objectPrototypeConsiderNativeMethodOfObject(GLOBAL, "setTimeout", STRICT = null, STRICT = "`setTimeout` function")
                    .addAlternateCondition(function(method) { return LDKC.Assertions.isNodejsEnvironment && LDKF.functionPrototypeIsUserDefined(method) })
                    .requestNativeMethod();

                    // Call
                    LapysDevelopmentKit.Objects.setTimeoutCall = LDKT.objectPrototypeConsiderNativeMethodOfObject(LDKO.setTimeout, "call", STRICT = null, STRICT = "`setTimeout.call` method").requestNativeMethod();

                // Source Buffer List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Speech Recognition Error
                LapysDevelopmentKit.Objects.speechRecognitionError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "SpeechRecognitionError");

                // String --- NOTE (Lapys) -> Best to explicitly request for the `String` constructor than implicitly retrieve it via alternate means (e.g.: `"".constructor` e.t.c.).
                LapysDevelopmentKit.Objects.string = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "String", STRICT = null, STRICT = "`String` constructor").requestNativeConstructor();
                    // Prototype
                    LapysDevelopmentKit.Objects.stringPrototype = LDKF.getPropertyByName(LDKO.string, "prototype");

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

                // Symbol --- CHECKPOINT (Lapys)
                    // Iterator --- CHECKPOINT (Lapys)
                    // Species --- CHECKPOINT (Lapys) -> Might be useful for class constructor behavior?
                    // To String Tag --- CHECKPOINT (Lapys)

                // Syntax Error
                LapysDevelopmentKit.Objects.syntaxError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "SyntaxError");

                // Text --- CHECKPOINT (Lapys)
                // Text Track Cue List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Cue By ID --- CHECKPOINT (Lapys)

                // Text Track List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get Track By ID --- CHECKPOINT (Lapys)

                // Timeout Error
                LapysDevelopmentKit.Objects.timeoutError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "TimeoutError");

                // Touch --- CHECKPOINT (Lapys)
                // Touch List --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Track Start Error
                LapysDevelopmentKit.Objects.trackStartError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "TrackStartError");

                // Transaction Inactive Error
                LapysDevelopmentKit.Objects.transactionInactiveError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "TransactionInactiveError");

                // Type Mismatch Error
                LapysDevelopmentKit.Objects.typeMismatchError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "TypeMismatchError");

                // Unknown Error
                LapysDevelopmentKit.Objects.unknownError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "UnknownError");

                // URI Error
                LapysDevelopmentKit.Objects.uriError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "URIError");

                // URL Mismatch Error
                LapysDevelopmentKit.Objects.urlMismatchError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "URLMismatchError");

                // Version Error
                LapysDevelopmentKit.Objects.versionError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "VersionError");

                // Weak Map --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Get --- CHECKPOINT (Lapys)

                // Weak Set --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Webkit Speech Recognition Error
                LapysDevelopmentKit.Objects.webkitSpeechRecognitionError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "webkitSpeechRecognitionError");

                // Webkit Speech Grammar List ---  CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)
                        // Item --- CHECKPOINT (Lapys)

                // Window --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // Wrong Document Error
                LapysDevelopmentKit.Objects.wrongDocumentError = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "WrongDocumentError");

                // XML Document --- CHECKPOINT (Lapys)
                    // Prototype --- CHECKPOINT (Lapys)

                // XML HTTP Request
                LapysDevelopmentKit.Objects.xmlHttpRequest = LDKT.objectPrototypeConsiderNativeConstructorOfObject(GLOBAL, "XMLHttpRequest").requestNativeConstructor();
                    // ...
                    LapysDevelopmentKit.Constants.Assertions.has_XMLHttpRequest_Constructor = LDKT.isConstructor(LDKO.xmlHttpRequest);

                    // Prototype
                    LapysDevelopmentKit.Objects.xmlHttpRequestPrototype = LDKF.getPropertyByName(LDKO.xmlHttpRequest, "prototype");

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

    /* Phase */
        /* Initiate --- CHECKPOINT (Lapys) */
        function Initiate() {
            /* Function --- NOTE (Lapys) -> Split the Initiate phase into various named modules. */
                /* Parse Settings */
                function ParseSettings() {
                    // Logic --- NOTE (Lapys) -> Process the various configuration settings of the library.
                        // [Debug Mode]
                        if (LDKI.Settings.DebugMode) {
                            // Global > Lapys Development Kit
                            LDKF.objectPrototypeSetProperty(GLOBAL, "LapysDevelopmentKit", LapysDevelopmentKit, STRICT = true);
                                // ...
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDK", LapysDevelopmentKit, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKC", LapysDevelopmentKit.Constants, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKD", LapysDevelopmentKit.Data, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKE", LapysDevelopmentKit.Environment, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKF", LapysDevelopmentKit.Functions, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKI", LapysDevelopmentKit.Information, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKM", LapysDevelopmentKit.Mathematics, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKO", LapysDevelopmentKit.Objects, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKS", LapysDevelopmentKit.Storage, STRICT = true);
                                LDKF.objectPrototypeSetProperty(GLOBAL, "LDKT", LapysDevelopmentKit.Test, STRICT = true);

                            // Warn
                            LDKF.throwPublicAccessAllowedWarning()
                        }
                }

                /* Throw Warnings */
                function ThrowWarnings() {
                    // [Browser Environment Warnings] Logic
                    if (LDKC.Assertions.isBrowserEnvironment) {
                        // Logic > ... --- WARN (Lapys) -> Some warnings here are silenced.
                            // [ActiveX Object or XML HTTP Request]
                            if (!(LDKC.Assertions.has_ActiveXObject_Constructor || LDKC.Assertions.has_XMLHttpRequest_Constructor)) {
                                LapysJS.warnings.crossSiteRequestsNotSupported = true;
                                LDKF.throwFeatureNotAvailableWarning("`ActiveXObject` or `XMLHttpRequest` constructor")
                            }

                            // [Classes]
                            if (!LDKC.Assertions.allows_class_Keyword) {
                                LapysJS.warnings.classesNotSupported = true;
                                LDKF.throwFeatureNotAvailableWarning("`class` keyword")
                            }

                            // [Console]
                            if (!LDKC.Assertions.has_console_Object) {
                                LapysJS.warnings.consoleNotSupported = true;
                                LDKF.throwFeatureNotAvailableWarning("global `console` object")
                            }

                            // [Custom Elements]
                            LDKT.supportsCustomHTMLElements() || (LapysJS.warnings.customHTMLElementsNotSupported = true)
                    }
                }

            /* Main */
            (function Main() {
                // ...
                ParseSettings();
                ThrowWarnings();

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
                        // Public Mode --- CHECKPOINT (Lapys)

                    // Array > Prototype
                        // Add
                        LDKF.objectDefineProperty(LDKO.arrayPrototype, "add", {configurable: true, enumerable: false, value: function add() { if (LDKF.isArrayLike(this)) { var iterator = LDKF.getArgumentsLength(arguments); if (iterator) { var arrayLength = LDKF.arrayPrototypeLength(this); while (iterator) { iterator -= 1; this[arrayLength + iterator] = arguments[iterator] } } return this } else LDKF.throwTypeError("`this` object must be an array") }, writable: true});

                        // Add To Back --- CHECKPOINT (Lapys)
                        // Add To Front --- CHECKPOINT (Lapys)
                        // Build --- CHECKPOINT (Lapys)
                        // Clone --- CHECKPOINT (Lapys)
                        // Copy
                        LDKF.objectDefineProperty(LDKO.arrayPrototype, "copy", {configurable: true, enumerable: false, value: function copy(array) {
                            // Logic
                            if (LDKF.isArrayLike(this))
                                // Logic > ...
                                if (LDKF.isArrayLike(array)) { LDKF.arrayPrototypeFree(this); LDKF.arrayPrototypeConcatenate(this, array); return this }
                                else LDKF.throwTypeError("Argument must be an array");

                            else
                                // Error
                                LDKF.throwTypeError("`this` object must be an array")
                        }, writable: true});

                        // Contains --- CHECKPOINT (Lapys)
                        // Cut --- CHECKPOINT (Lapys)
                        // Cut At --- CHECKPOINT (Lapys)
                        // Cut Left --- CHECKPOINT (Lapys)
                        // Cut Right --- CHECKPOINT (Lapys)
                        // Cut Through --- CHECKPOINT (Lapys)
                        // Entries --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> To fix bugs in older platforms, this property must be enumerable.
                        // Filter --- CHECKPOINT (Lapys)
                        // Filter Left --- CHECKPOINT (Lapys)
                        // Filter Right --- CHECKPOINT (Lapys)
                        // Free --- CHECKPOINT (Lapys)
                        // Has --- CHECKPOINT (Lapys)
                        // Insert At --- CHECKPOINT (Lapys)
                        // Insert Through --- CHECKPOINT (Lapys)
                        // Instance --- CHECKPOINT (Lapys)
                        // Intersect --- CHECKPOINT (Lapys)
                        // Is --- CHECKPOINT (Lapys)
                        // Is Subset --- CHECKPOINT (Lapys)
                        // Is Superset --- CHECKPOINT (Lapys)
                        // Keys --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> To fix bugs in older platforms, this property must be enumerable.
                        // Like --- CHECKPOINT (Lapys)
                        // Match --- CHECKPOINT (Lapys)
                        // Only --- CHECKPOINT (Lapys)
                        // Pad --- CHECKPOINT (Lapys)
                        // Pad Left --- CHECKPOINT (Lapys)
                        // Pad Right --- CHECKPOINT (Lapys)
                        // Random --- CHECKPOINT (Lapys)
                        // Random Index --- CHECKPOINT (Lapys)
                        // Remove --- CHECKPOINT (Lapys)
                        // Remove All --- CHECKPOINT (Lapys)
                        // Remove Duplicate --- CHECKPOINT (Lapys)
                        // Remove Duplicate From Back --- CHECKPOINT (Lapys)
                        // Remove Duplicate From Front --- CHECKPOINT (Lapys)
                        // Remove Duplicates --- CHECKPOINT (Lapys)
                        // Remove Duplicates From Back --- CHECKPOINT (Lapys)
                        // Remove Duplicates From Front --- CHECKPOINT (Lapys)
                        // Remove From --- CHECKPOINT (Lapys)
                        // Remove From Back --- CHECKPOINT (Lapys)
                        // Remove From Front --- CHECKPOINT (Lapys)
                        // Remove Repeat --- CHECKPOINT (Lapys)
                        // Remove Repeat From Back --- CHECKPOINT (Lapys)
                        // Remove Repeat From Front --- CHECKPOINT (Lapys)
                        // Remove Repeats --- CHECKPOINT (Lapys)
                        // Repeat --- CHECKPOINT (Lapys)
                        // Repeated --- CHECKPOINT (Lapys)
                        // Replace --- CHECKPOINT (Lapys)
                        // Replace All --- CHECKPOINT (Lapys)
                        // Replace Duplicate --- CHECKPOINT (Lapys)
                        // Replace Duplicate From Back --- CHECKPOINT (Lapys)
                        // Replace Duplicate From Front --- CHECKPOINT (Lapys)
                        // Replace Duplicates --- CHECKPOINT (Lapys)
                        // Replace Duplicates From Back --- CHECKPOINT (Lapys)
                        // Replace Duplicates From Front --- CHECKPOINT (Lapys)
                        // Replace From --- CHECKPOINT (Lapys)
                        // Replace From Back --- CHECKPOINT (Lapys)
                        // Replace From Front --- CHECKPOINT (Lapys)
                        // Replace Repeat --- CHECKPOINT (Lapys)
                        // Replace Repeat From Back --- CHECKPOINT (Lapys)
                        // Replace Repeat From Front --- CHECKPOINT (Lapys)
                        // Replace Repeats --- CHECKPOINT (Lapys)
                        // Shift Left --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Uses the `LapysDevelopmentKit.Functions.arrayPrototypeRotateLeft` method.
                        // Shift Right --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Uses the `LapysDevelopmentKit.Functions.arrayPrototypeRotateRight` method.
                        // Shuffle --- CHECKPOINT (Lapys)
                        // Swap --- CHECKPOINT (Lapys)
                        // Trim --- CHECKPOINT (Lapys)
                        // Trim Left --- CHECKPOINT (Lapys)
                        // Trim Right --- CHECKPOINT (Lapys)
                        // Union --- CHECKPOINT (Lapys)

                    // Date > Prototype
                        // Now --- CHECKPOINT (Lapys)
                        // To ISO String --- CHECKPOINT (Lapys)

                    // Element > Prototype
                        // Momentum Scroll By --- CHECKPOINT (Lapys)
                        // Momentum Scroll Into View --- CHECKPOINT (Lapys)
                        // Momentum Scroll To --- CHECKPOINT (Lapys)

                    // Event Target > Prototype
                        // Add Event Listener --- CHECKPOINT (Lapys)
                        // Get Event Listeners --- CHECKPOINT (Lapys)
                        // Handle Event Listener --- CHECKPOINT (Lapys)
                        // Has Event Listener --- CHECKPOINT (Lapys)
                        // Instance Event Listener --- CHECKPOINT (Lapys)
                        // Invoke Event Listener --- CHECKPOINT (Lapys)
                        // Remove Event Listener --- CHECKPOINT (Lapys)
                        // Remove All Events Listener --- CHECKPOINT (Lapys)
                        // Run Event Listener --- CHECKPOINT (Lapys)
                        // Run Instance Event Listener --- CHECKPOINT (Lapys)

                    // Function > Prototype --- CHECKPOINT (Lapys)
                        // Inherit --- CHECKPOINT (Lapys)

                    // Object > Prototype
                        // Define [Property]
                        LDKF.objectDefineProperty(LDKO.objectPrototype, "def", {configurable: true, enumerable: false, value: function define(name, descriptor) { LDKF.objectPrototypeDefineProperty(this, name, descriptor); return this }, writable: true});

                        // Define [Properties] --- CHECKPOINT (Lapys)
                        // Define Constant --- CHECKPOINT (Lapys)
                        // Define Constants --- CHECKPOINT (Lapys)
                        // Delete
                        LDKF.objectDefineProperty(LDKO.objectPrototype, "del", {configurable: true, enumerable: false, value: function deleteProperty(name) { if (LDKF.getArgumentsLength(arguments)) { LDKF.objectPrototypeDeleteProperty(this, name); try { return LDKF.objectPrototypeHasOwnProperty(this, name) } catch (error) {} } else return false }, writable: true});

                        // Describe
                        LDKF.objectDefineProperty(LDKO.objectPrototype, "desc", {configurable: true, enumerable: false, value: function describe(name) { return LDKF.getArgumentsLength(arguments) ? LDKF.objectGetOwnPropertyDescriptor(this, name) || null : null }, writable: true});

                        // Free --- CHECKPOINT (Lapys)
                        // Freeze --- CHECKPOINT (Lapys)
                         // Has
                        LDKF.objectDefineProperty(LDKO.objectPrototype, "has", {configurable: true, enumerable: false, value: function hasProperty(name) { return LDKF.getArgumentsLength(arguments) ? LDKF.objectPrototypeHasProperty(this, name) : false }, writable: true});

                        // Has Own
                        LDKF.objectDefineProperty(LDKO.objectPrototype, "hasOwn", {configurable: true, enumerable: false, value: function hasOwnProperty(name) { return LDKF.getArgumentsLength(arguments) ? LDKF.objectPrototypeHasOwnProperty(this, name) : false }, writable: true});

                        // Keys --- CHECKPOINT (Lapys)
                        // Melt --- CHECKPOINT (Lapys)
                        // Prototype --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> The `__proto__` property.
                        // Prototype Chain --- CHECKPOINT (Lapys)
                        // Undefine --- CHECKPOINT (Lapys)
                        // Values --- CHECKPOINT (Lapys)

                    // String > Prototype
                        // To HTML
                        LDKF.objectDefineProperty(LDKO.stringPrototype, "toHTML", {configurable: true, enumerable: false, value: function toHTML() { return LDKF.stringPrototypeCSSSelectorSourceToHTMLElement(LDKF.toString(this)) }, writable: true});

                        // Trim --- CHECKPOINT (Lapys)
                        // Trim End --- CHECKPOINT (Lapys)
                        // Trim Left --- CHECKPOINT (Lapys)
                        // Trim Right --- CHECKPOINT (Lapys)
                        // Trim Start --- CHECKPOINT (Lapys)

                    /* Global */
                        // Application --- CHECKPOINT (Lapys)
                        // Array --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                            // Distinct --- CHECKPOINT (Lapys)
                            // Get Depth --- CHECKPOINT (Lapys)

                        // Assert
                        LDKF.objectDefineProperty(GLOBAL, "assert", {configurable: true, enumerable: false, value: function assert(expression, onfail) { return LDKF.functionPrototypeApply(LDKF.assert, LDKF, arguments) }, writable: true});

                        // Audio --- CHECKPOINT (Lapys)
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
                        // Class --- NOTE (Lapys) -> Not a constructor.
                        LDKF.objectDefineProperty(GLOBAL, "Class", {configurable: true, enumerable: false, value: function Class() { return LDKF.functionPrototypeApply(LDKF.createClass, LDKF, arguments) }, writable: true});

                        // Copy --- CHECKPOINT (Lapys)
                        // Create Attribute --- CHECKPOINT (Lapys)
                        // Create Document Fragment --- CHECKPOINT (Lapys)
                        // Create Element --- CHECKPOINT (Lapys)
                        // Cut --- CHECKPOINT (Lapys)
                        // Document --- CHECKPOINT (Lapys)
                            // File Size --- CHECKPOINT (Lapys)
                        // Download --- CHECKPOINT (Lapys)
                        // [Is] Execute[-able] --- CHECKPOINT (Lapys)
                        // File --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                        // Float --- CHECKPOINT (Lapys)
                        // Free Input --- CHECKPOINT (Lapys)
                        // Function --- NOTE (Lapys) -> Not the constructor.
                            // Extend --- CHECKPOINT (Lapys)
                        // Global This --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Does not always match the global object.
                        // Group --- NOTE (Lapys) -> Group of objects that can be simultaneously invoked or processed (e.g.: `(new Group.flatten(document.all)).style.boxSizing = "inherit"`)
                        // Image --- CHECKPOINT (Lapys)
                        // Integer
                        LDKF.objectDefineProperty(GLOBAL, "int", {configurable: true, enumerable: true, value: function int(number) { return LDKM.int(number) }, writable: true});

                        // Interval --- CHECKPOINT (Lapys)
                        // Is Array
                        LDKF.objectDefineProperty(GLOBAL, "isArray", {configurable: true, enumerable: false, value: function isArray(array) { return LDKF.getArgumentsLength(arguments) ? LDKF.isArray(array) : false }, writable: true});

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
                        // Number --- NOTE (Lapys) -> Not the constructor.
                        LDKF.objectDefineProperty(GLOBAL, "num", {configurable: true, enumerable: true, value: function num(value) { return LDKF.number(value) }, writable: true});

                        // Object --- NOTE (Lapys) -> Not the constructor.
                        LDKF.objectDefineProperty(GLOBAL, "obj", {configurable: true, enumerable: true, value: function obj(value) { return LDKF.object(value) }, writable: true});
                            // Assign
                            LDKF.objectDefineProperty(LDKO.object, "assign", {configurable: true, enumerable: false, value: LDKO.objectAssign, writable: true});

                            // Concatenate --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Similar to the `Object.assign` method but does not source concatenate.
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

                        // Assign --- NOTE (Lapys) -> Shorthand for the `Object.assign` method.
                        LDKF.objectDefineProperty(GLOBAL, "assign", {configurable: true, enumerable: false, value: LDKO.objectAssign, writable: true});

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
                        // Pseudo Integer --- CHECKPOINT (Lapys)
                        // Pseudo Number --- CHECKPOINT (Lapys)
                        // Random --- CHECKPOINT (Lapys)
                        // Random Set --- CHECKPOINT (Lapys)
                        // Ranged Number --- CHECKPOINT (Lapys)
                        // Regular Expression --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                        // Repeat --- CHECKPOINT (Lapys)
                        // Safe Array --- CHECKPOINT (Lapys)
                        // Safe Integer --- CHECKPOINT (Lapys)
                        // Safe Number --- CHECKPOINT (Lapys)
                        // String --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                        // Strict[ly Watch] Input --- CHECKPOINT (Lapys)
                        // Symbol --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Not the constructor.
                        // Timeout --- CHECKPOINT (Lapys)
                        // Video --- CHECKPOINT (Lapys)
                        // When --- CHECKPOINT (Lapys)

                        // NOTE (Lapys) -> The following functions here are only suggested if performance is not a major concern; In its case: form over function.
                        // $a  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Parent Nodes Recursively (Ancestors) By Query Selector
                        // $c --- NOTE (Lapys) -> Get Elements By Class Attribute Value
                        LDKC.Assertions.isBrowserEnvironment && LDKF.objectDefineProperty(GLOBAL, "$c", {configurable: true, enumerable: false, value: function $c(className) { var length = LDKF.getArgumentsLength(arguments), iterator = length, modifiers = []; while (iterator -= 1) modifiers[iterator - 1] = arguments[iterator]; return LDKF.getHTMLElementsByClassAttribute(className, modifiers, STRICT = this === GLOBAL ? LDKC.Objects.document : this) }, writable: true});

                        // $d  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Immediate Children (Descendants) By Query Selector
                        // $i  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Elements By ID Attribute Value
                        // $n  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Next Sibling Nodes By Query Selector
                        // $p  --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Get Previous Sibling Nodes By Query Selector
                        // $t --- NOTE (Lapys) -> Get Elements By Tag Name
                        LDKC.Assertions.isBrowserEnvironment && LDKF.objectDefineProperty(GLOBAL, "$t", {configurable: true, enumerable: false, value: function $t(tagName) { var length = LDKF.getArgumentsLength(arguments), iterator = length, modifiers = []; while (iterator -= 1) modifiers[iterator - 1] = arguments[iterator]; return LDKF.getHTMLElementsByTagName(tagName, modifiers, STRICT = this === GLOBAL ? LDKC.Objects.document : this) }, writable: true});

                        // $$ --- NOTE (Lapys) -> Get Nodes By Query Selector
                        LDKC.Assertions.isBrowserEnvironment && LDKF.objectDefineProperty(GLOBAL, "$$", {configurable: true, enumerable: false, value: function $$(selector) { var length = LDKF.getArgumentsLength(arguments), iterator = length, modifiers = []; while (iterator -= 1) modifiers[iterator - 1] = arguments[iterator]; return LDKF.getNodesByCSSSelector(selector, modifiers, STRICT = this === GLOBAL ? LDKC.Objects.document : this)}, writable: true});

                // Return
                return +0
            })()

            // Return
            return +0
        }

        /* Terminate --- CHECKPOINT (Lapys) */
        function Terminate() {
            // Return
            return +0
        }

        /* Update --- CHECKPOINT (Lapys) */
        function Update() {
            // Return
            return +0
        }

    /* Initiate
            --- NOTE ---
                #Lapys:
                    - Update the LapysJS object.
                    - Modify object prototypes (e.g.: `Array.prototype`, `Function.prototype` e.t.c.)
                        while adding polyfills for missing modern features.
                    - Initiate global functions and objects (e.g.: `array`, `func` e.t.c.)
    */
    try { LDKF.objectDefineProperty(LapysJS.processingDuration, "initiate", {value: LDKF.functionPrototypeMeasure(Initiate)}) }
    catch (error) { var message = LDKF.errorPrototypeGetMessage(error); message = LDKF.isNull(message) ? "" : ":\n\t\r" + message; LDKF.throwInitiatePhaseError("Error initializing library" + message) }

    /* Update
            --- NOTE ---
                #Lapys:
                    - Integrate LapysJS components (e.g.: `Accordion`, `Tooltip`) during runtime.
                    - Integrate LapysJS features during runtime.
    */
    try { LDKF.objectDefineProperty(LapysJS.processingDuration, "update", {value: LDKF.functionPrototypeMeasure(Update)}) }
    catch (error) { var message = LDKF.errorPrototypeGetMessage(error); message = LDKF.isNull(message) ? "" : ":\n\t\r" + message; LDKF.throwInitiatePhaseError("Error integrating library runtime" + message) }

    /* Terminate
            --- NOTE ---
                #Lapys:
                    - Notify user of the state of the library and library installation completion.
    */
    try {
        // ...
        LDKF.objectDefineProperty(LapysJS.processingDuration, "terminate", {value: LDKF.functionPrototypeMeasure(Terminate)});
        LDKF.objectDefineProperty(LapysJS.processingDuration, "valueOf", {value: function valueOf() { return LapysJS.processingDuration.initiate + LapysJS.processingDuration.update + LapysJS.processingDuration.terminate }});

        // Print
        if (LDKC.Assertions.has_console_Object) {
            LDKF.consoleGroup("LapysJS v" + VERSION + " | " + "https://www.lapys.dev/projects/LapysJS");
                LDKF.consoleLog("Processing Duration =", LapysJS.processingDuration.valueOf());
                LDKF.consoleLog('\n');
            LDKF.consoleGroupEnd()
        }

        else { /* Some code here... */ }
    } catch (error) { var message = LDKF.errorPrototypeGetMessage(error); message = LDKF.isNull(message) ? "" : ":\n\t\r" + message; LDKF.throwInitiatePhaseError("Error completing library installation" + message) }

    // Return
    return +0
})();
