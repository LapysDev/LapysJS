/**
    @author: Lapys Dev Team
    @description: LapysJS is an intuitive, minimalist web library for quick development.
    @version: 0.0.7
    @url: https://www.github.com/LapysDev/LapysJS

    --- CODE ---
        #Lapys:
            - Array.prototype.every
            - Array.prototype.filter
            - Array.prototype.forEach
            - Array.prototype.includes
            - Array.prototype.indexOf
            - Array.prototype.lastIndexOf
            - Array.prototype.map
            - Array.prototype.reduce
            - Array.prototype.reduceRight
            - Array.prototype.some
            - check
            - copy
            - createAttr
            - createDocumentFragment
            - createElement
            - cut
            - Date.prototype.now
            - Date.prototype.toISOString
            - download
            - Element.prototype.momentumScrollIntoView
            - exec
            - file
            - freeInput
            - Function.prototype.bind
            - interval
            - len
            - max
            - maxg
            - min
            - ming
            - momentumScrollBy
            - momentumScrollTo
            - now // Opposite of `once`
            - Object.concat
            - Object.create
            - Object.defineProperty
            - Object.free
            - Object.freeze
            - Object.getOwnPropertyDescriptor
            - Object.getOwnPropertyDescriptors
            - Object.getOwnPropertyNames
            - Object.getOwnPropertyValues
            - Object.getPrototypeOf
            - Object.keys
            - Object.melt
            - Object.prototype.__proto__
            - Object.setPrototypeOf
            - Object.values
            - once
            - onAttributeAdded
            - onAttributeChange
            - onAttributeCountChange
            - onAttributeRemoved
            - onDOMChange
            - onDOMNodeAdded
            - onDOMNodeCountChange
            - onDOMNodeRemoved
            - onDOMReady
            - onElementAdded
            - onElementChange
            - onElementCountChange
            - onElementRemoved
            - onNodeAdded
            - onNodeCountChange
            - onNodeRemoved
            - onPropertyAdded
            - onPropertyChange
            - onPropertyCountChange
            - onPropertyRemoved
            - paste
            - rand
            - rands // Random Set
            - repeat
            - strictInput
            - String.prototype.trim
            - String.prototype.trimEnd
            - String.prototype.trimLeft
            - String.prototype.trimRight
            - String.prototype.trimStart
            - timeout
            - when
            - $a
            - $c
            - $i
            - $$
            - $t

    --- NOTE ---
        #Lapys:
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
        // Arguments --- NOTE (Lapys) -> The arguments received by the main sub-routine.
        var args = [],

        // Lapys Development Kit
        LapysDevelopmentKit = {
            // Constants
            constants: {defaults: {}, number: {}, string: {}},

            // Data
            data: {},

            // Environment
            environment: {global: null, state: "unknown", type: "standard", vendors: []},

            // Functions
            functions: {},

            // Information
            information: {messages: {debugging: {}, "default": {}, error: {}}},

            // Math
            math: {series: {}},

            // Objects --- NOTE (Lapys) -> Different from the conventional Lapys Development Kit.
            objects: {},

            // Settings
            settings: {},

            // Test
            test: {}
        },

        // State --- NOTE (Lapys) -> A zero state means null errors.
        STATE = 0,

        // Undefined --- NOTE (Lapys) -> Specify `undefined`.
        undefined = void 0;

    /* Definition */
        // Lapys Development Kit (...)
        var LDK = LapysDevelopmentKit,
            LDKC = LapysDevelopmentKit.constants,
            LDKD = LapysDevelopmentKit.data,
            LDKE = LapysDevelopmentKit.environment,
            LDKF = LapysDevelopmentKit.functions,
            LDKI = LapysDevelopmentKit.information,
            LDKM = LapysDevelopmentKit.math,
            LDKO = LapysDevelopmentKit.objects,
            LDKS = LapysDevelopmentKit.settings,
            LDKT = LapysDevelopmentKit.test;

    /* Modification */
        /* Lapys Development Kit */
            /* Functions */
                // Object > Is
                LapysDevelopmentKit.functions.objectIs = function objectIs(objectA, objectB) { return objectA === objectB ? 0 !== objectA || 1 / objectA == 1 / objectB: objectA !== objectA && objectB !== objectB };

                // Number > Prototype
                    // Is Finite
                    LapysDevelopmentKit.functions.numberPrototypeIsFinite = function numberPrototypeIsFinite(number) { return !LDKF.numberPrototypeIsInfinite(number) };

                    // Is Infinite
                    LapysDevelopmentKit.functions.numberPrototypeIsInfinite = function numberPrototypeIsInfinite(number) { var string = LDKF.toString(number); return LDKF.isNumber(number) && string == "Infinity" || string == "-Infinity" };

                    // Is Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsInteger = function numberPrototypeIsInteger(number) { return number == LDKM.int(number) };

                    // Is NaN
                    LapysDevelopmentKit.functions.numberPrototypeIsNaN = function numberPrototypeIsNaN(number) { return LDKF.isNumber(number) && LDKF.toString(number) == "NaN" };

                    // Is Negative
                    LapysDevelopmentKit.functions.numberPrototypeIsNegative = function numberPrototypeIsNegative(number) { return number < 0 || LDKF.numberPrototypeIsNegativeZero(number) };

                    // Is Negative Zero
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeZero = function numberPrototypeIsNegativeZero(number) { return LDKF.objectIs(number, -0) };

                    // Is Positive
                    LapysDevelopmentKit.functions.numberPrototypeIsPositive = function numberPrototypeIsPositive(number) { return number > 0 || LDKF.numberPrototypeIsPositiveZero(number) };

                    // Is Positive Infinity
                    LapysDevelopmentKit.functions.numberPrototypeIsPositiveInfinity = function numberPrototypeIsPositiveInfinity(number) { return LDKF.numberPrototypeIsInfinite(number) && LDKF.numberPrototypeIsPositive(number) };

                    // Is Positive Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsPositiveInteger = function numberPrototypeIsPositiveInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsPositive(number) };

                    // Is Positive Zero
                    LapysDevelopmentKit.functions.numberPrototypeIsPositiveZero = function numberPrototypeIsPositiveZero(number) { return LDKF.objectIs(number, 0) };

                    // Is Safe
                    LapysDevelopmentKit.functions.numberPrototypeIsSafe = function numberPrototypeIsSafe(number) { return number < LDKC.number.maximumValue && LDKF.numberPrototypeIsFinite(number) && !LDKF.numberPrototypeIsNaN(number) };

                    // Is Safe Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsSafeInteger = function numberPrototypeIsSafeInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsSafe(number) };

            /* Math */
                // Absolute
                LapysDevelopmentKit.math.abs = function abs(number) { return LDKF.numberPrototypeIsNegative(number) ? -number : number };

                // Integer
                LapysDevelopmentKit.math.int = function int(number) { return number - number % 1 };

                // Power --- UPDATE REQUIRED (Lapys)
                LapysDevelopmentKit.math.pow = function pow(base, exponent) {
                    // Logic
                    if (LDKF.numberPrototypeIsPositiveInteger(exponent)) {
                        // Initialization > Number
                        var number = 1;

                        // Loop > Update > (Exponent, Number)
                        while (exponent) { number *= base; exponent -= 1 }

                        // Return
                        return number
                    }
                };

            /* Constants */
                // Number
                    // Infinity
                    LapysDevelopmentKit.constants.number.infinity = 1 / 0;

                    // Maximum Value
                    LapysDevelopmentKit.constants.number.maximumValue = LDKM.pow(2, 53) - 1;

                    // Not-a-Number
                    LapysDevelopmentKit.constants.number.nan = 0 / 0;

                // String
                    // Alphabets --- NOTE (Lapys) -> Code duplication, I know.
                    LapysDevelopmentKit.constants.string.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

                    // Alphanumerics --- NOTE (Lapys) -> Code duplication, I know.
                    LapysDevelopmentKit.constants.string.alphanumerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

                    // Digits
                    LapysDevelopmentKit.constants.string.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

                    // Lowercase Alphabets
                    LapysDevelopmentKit.constants.string.lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

                    // Uppercase Alphabets
                    LapysDevelopmentKit.constants.string.uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

                    // {Explicit} Variable Characters --- NOTE (Lapys) -> Code duplication, I know.
                    LapysDevelopmentKit.constants.string.variableCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '$'];

            /* Data */
                // Series --- WARN (Lapys) -> Crude array for internal arithmetic only.
                LapysDevelopmentKit.data.series = (function() {
                    // Initialization > Constructor
                    var constructor = function Series(begin, end) {
                        // Initialization > Target
                        var that = this;

                        // Logic > Return
                        if (begin > end) return new LDKD.series(end, begin);

                        // Initialization > Length
                        var length = LDKF.getArgumentsLength(arguments);

                        // Modification > Target
                            // Add To Front
                            that.addToFront = function addToFront(number) {
                                // Initialization > Length
                                var length = LDKF.getArgumentsLength(arguments);

                                // Logic
                                if (length)
                                    // Logic
                                    if (length == 1) {
                                        // Update > Number
                                        number = LDKF.toNumber(number);

                                        // Modification > Target > (First, Last)
                                        that.length || (that.first = number);
                                        that.last = that[(that.length += 1) - 1] = number
                                    }

                                    else {
                                        // Initialization > Iterator
                                        var iterator = length;

                                        // Loop > Update > Target
                                        while (iterator) that.addToFront(arguments[length - (iterator -= 1) - 1])
                                    }
                            };

                            // First
                            that.first = null;

                            // Is Empty
                            that.isEmpty = false;

                            // Length
                            that.length = 0;

                            // Last
                            that.last = null;

                            // Type
                            that.type = "arithmetic";

                        // Logic
                        switch (length) {
                            // [0]
                            case 0: that.isEmpty = true; break;

                            // [Default]
                            default:
                                // Initialization > Iterator
                                var iterator = length;

                                // Modification > Target > (First, Last)
                                that.first = begin;
                                length == 1 ? that.last = begin : that.last = end;

                                // Loop
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Modification > Target > (..., Length)
                                    that[index] = arguments[index];
                                    that.length += 1
                                }
                        }

                        // Return
                        return that
                    };

                    // Return
                    return function Series() {
                        // Initialization > (Length, Series)
                        var length = LDKF.getArgumentsLength(arguments),
                            series = new constructor;

                        // Logic
                        if (length) {
                            // Initialization > Iterator
                            var iterator = length;

                            // Loop > Update > Series
                            while (iterator) series.addToFront(arguments[length - (iterator -= 1) - 1])
                        }

                        // Return
                        return series
                    }
                })();
                    // Infinite
                    LapysDevelopmentKit.data.series.infinite = function infinite(begin, end) {
                        // Initialization > (Length, Series)
                        var length = LDKF.getArgumentsLength(arguments),
                            series = new LDKD.series;

                        // Logic
                        if (length) {
                            // Logic > Update > (Begin, End)
                            if (length == 1) { end = begin; begin = 0 }

                            // Logic > Return
                            if (begin > end) return LDKD.series.infinite(end, begin);

                            // Modification > Series > (First, Is Empty, Last, Length)
                            series.first = LDKF.toNumber(begin);
                            series.isEmpty = false;
                            series.last = LDKF.toNumber(end);
                            series.length = series.last - series.first
                        }

                        else {
                            // Modification > Series > (Is Empty, Length)
                            series.isEmpty = true;
                            series.length = null
                        }

                        // Modification > Series
                            // Point --- NOTE (Lapys) -> Returns the `point` argument locally, not the function itself.
                            series.point = function point(point) {
                                // Update > Point
                                point = LDKF.toNumber(point);

                                // Logic > Return
                                if (!series.first && !series.last) return 0;
                                if (LDKF.numberPrototypeIsInfinite(point) || LDKF.numberPrototypeIsNaN(point)) return LDKC.number.nan;

                                // Logic
                                if (LDKF.numberPrototypeIsNegativeZero(point))
                                    // Update > Point
                                    point = series.last;

                                else
                                    // Loop > Update > Point
                                    while (point < series.first) point = series.last - LDKM.abs(point);
                                    while (point > series.last) point -= series.last;

                                // Return
                                return point
                            };

                            // Type
                            series.type = "infinite";

                        // Return
                        return series
                    };

            /* Information */
                // Error Messages
                    // Compatible with Library Suffix
                    LapysDevelopmentKit.information.messages.error.compatibleWithLibrarySuffix = " is not compatible with this library";

                    // JavaScript Engine Support Suffix
                    LapysDevelopmentKit.information.messages.error.javaScriptEngineSupportSuffix = " must be supported by this JavaScript engine";

                    // Native to Environment Suffix
                    LapysDevelopmentKit.information.messages.error.nativeToEnvironmentSuffix = " must be native to this development environment to install the library";

            /* Objects */
                // String > Prototype > Character At --- NOTE (Lapys) -> Specifically for legacy versions of the Internet Explorer web browser.
                LapysDevelopmentKit.objects.stringPrototypeCharAt = (function() {
                    // Initialization > Method
                    var method = (function() {
                        // Error Handling
                        try { return "".constructor.prototype.charAt }
                        catch (error) {}
                    })();

                    // Error Handling
                    try {
                        // Logic > (...)
                        if (
                            typeof method == "function" && (function(stream) {
                                // Return
                                return stream == "function charAt() { [native code] }" ||
                                    stream == "function charAt() {\n    [native code]\n}" ||
                                    stream == "\nfunction charAt() {\n    [native code]\n}\n"
                            })(method + "")
                        ) return method;
                        else throw {}
                    } catch (error) {
                        // Logic > Error
                        if (' '[0] != ' ') throw LDKF.error("`String.prototype.charAt` constructor" + LDKI.messages.error.nativeToEnvironmentSuffix)
                    }
                })();

            /* Functions */
                // Error --- CHECKPOINT ---
                LapysDevelopmentKit.functions.error = function error(message) { throw message };

                // Is Number
                LapysDevelopmentKit.functions.isNumber = function isNumber(arg) { return typeof arg == "number" };

                // Is Void
                LapysDevelopmentKit.functions.isVoid = function isVoid(arg) { return typeof arg == "undefined" };

                // To Number
                LapysDevelopmentKit.functions.toNumber = function toNumber(arg) {
                    // Logic
                    if (LDKF.isNumber(arg))
                        // Return
                        return arg - 0;

                    else {
                        // Error Handling
                        try {
                            // Update > Argument
                            arg = arg - 0
                        } catch (error) {
                            // Error Handling
                            try {
                                // Update > Argument
                                arg = LDKO.number(arg)
                            } catch (error) {
                                // Error Handling > Update > Argument
                                try { arg = LDKF.toNumber(LDKF.string(arg)) }
                                catch (error) {}
                            }
                        }

                        // Return
                        return arg
                    }
                };

                // To String
                LapysDevelopmentKit.functions.toString = function toString(arg) { try { return arg + "" } catch (error) {} return LDKO.string(arg) };

                // String > Prototype
                    // Character At
                    LapysDevelopmentKit.functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(string, index) {
                        // Logic > Return
                        if (LDKF.getArgumentsLength(arguments) < 2) return undefined;

                        // Return
                        return string[index] || LDKO.stringPrototypeCharAt.call(string, index) || undefined
                    };

                    // Length
                    LapysDevelopmentKit.functions.stringPrototypeLength = function stringPrototypeLength(string) { var length = 0; while (!LDKF.isVoid(LDKF.stringPrototypeCharacterAt(string, length))) length += 1; return length };

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
                                if (string[index + matchIndex] != match[matchIndex])
                                    // [Break]
                                    break;

                                else if (!matchIterator && string[index + matchIndex] == match[matchIndex])
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
                                var match = matches[matchesIterator -= 1],
                                    matchIterator = LDKF.stringPrototypeLength(match), matchLength = matchIterator;

                                // Logic
                                if (matchLength)
                                    // Logic
                                    if (matchLength == 1) {
                                        // Initialization > Iterator
                                        var iterator = 0;

                                        // Loop > Update > Iterator
                                        while (iterator != length && string[iterator] != match)
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
                                                if (string[index + matchIndex] != match[matchIndex])
                                                    // [Break]
                                                    break;

                                                else if (!matchIterator && string[index + matchIndex] == match[matchIndex])
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
                    LapysDevelopmentKit.functions.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(character) { return character == 'a' || character == 'A' || character == 'b' || character == 'B' || character == 'c' || character == 'C' || character == 'd' || character == 'D' || character == 'e' || character == 'E' || character == 'f' || character == 'F' || character == 'g' || character == 'G' || character == 'h' || character == 'H' || character == 'i' || character == 'I' || character == 'j' || character == 'J' || character == 'k' || character == 'K' || character == 'l' || character == 'L' || character == 'm' || character == 'M' || character == 'n' || character == 'N' || character == 'o' || character == 'O' || character == 'p' || character == 'P' || character == 'q' || character == 'Q' || character == 'r' || character == 'R' || character == 's' || character == 'S' || character == 't' || character == 'T' || character == 'u' || character ==' U' || character == 'v' || character == 'V' || character == 'w' || character == 'W' || character == 'x' || character == 'X' || character == 'y' || character == 'Y' || character == 'z' || character == 'Z' };

                    // Is Digit
                    LapysDevelopmentKit.functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(character) { return character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9' };

                    // Is Numeric
                    LapysDevelopmentKit.functions.stringPrototypeIsNumeric = function stringPrototypeIsNumeric(string) { var iterator = LDKF.stringPrototypeLength(string); while (iterator) if (!LDKF.stringPrototypeIsDigit(string[iterator -= 1])) return false; return true };

                    // Slice
                    LapysDevelopmentKit.functions.stringPrototypeSlice = function stringPrototypeSlice(string, begin, end) {
                        // Initialization > ((Arguments) Length, Series, Stream)
                        var argumentsLength = LDKF.getArgumentsLength(arguments),
                            length = LDKF.stringPrototypeLength(string),
                            series = LDKD.series.infinite(length),
                            stream = "";

                        // Logic > Return
                        if (!string) return stream;

                        // Update > End
                        (argumentsLength < 2) && (begin = 0);
                        (argumentsLength < 3) && (end = length);

                        // Logic > Update > Begin
                        if (!LDKF.numberPrototypeIsSafeInteger(begin)) begin = 0;
                        else begin = series.point(begin);

                        // Logic
                        if (!LDKF.numberPrototypeIsSafeInteger(end)) {
                            // Logic > Update > End
                            if (LDKF.numberPrototypeIsPositiveInfinity(end)) end = length;
                            else end = 0
                        }

                        else
                            // Update > End
                            end = series.point(end);

                        // Logic > Loop > Update > Stream
                        if (begin < end) while (begin != end) stream += string[(begin += 1) - 1];

                        // Return
                        return stream
                    };

                    // Trim
                    LapysDevelopmentKit.functions.stringPrototypeTrim = function stringPrototypeTrim(string, matches) {
                        // Initialization > Length
                        var length = LDKF.getArgumentsLength(arguments);

                        // Logic
                        if (length == 1)
                            // Update > String
                            string = LDKF.stringPrototypeTrimLeft(LDKF.stringPrototypeTrimRight(string));

                        else if (length == 2)
                            // Update > String
                            string = LDKF.stringPrototypeTrimLeft(LDKF.stringPrototypeTrimRight(string, matches), matches);

                        else if (length) {
                            // Initialization > Iterator
                            var iterator = length;

                            // Loop > Update > String
                            while (iterator != 1) string = LDKF.stringPrototypeTrim(string, arguments[length - (iterator -= 1)]);
                        }

                        else
                            // Return
                            return "";

                        // Return
                        return string
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
                            var iterator = 0, stream = "";

                            // Updates > Matches
                            length == 1 ? matches = [' ', '\n'] : (LDKF.isArray(matches) || (matches = [matches]));

                            // Initialization > Matches (Iterator, Length)
                            var matchesIterator = LDKF.arrayPrototypeLength(matches), matchesLength = matchesIterator;

                            // Logic
                            if (LDKF.stringPrototypeLength(matches[0]) == 1 && (!matchesLength || matchesLength == 1)) {
                                // Logic > Loop > Update > Iterator
                                if (matchesLength) while (string[iterator] == matches[0]) iterator += 1;
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
                                        if (string[iterator + matchIterator] != match[matchIterator])
                                            // [Break]
                                            break;

                                        else if (!matchIterator && string[iterator] == match[0]) {
                                            // Update > (Iterator, Matches Iterator)
                                            iterator += matchLength;
                                            matchesIterator = matchesLength
                                        }
                                    }
                                }

                            // Update > (Length, Stream)
                            length = LDKF.stringPrototypeLength(string) - 1;
                            stream = iterator ? LDKF.stringPrototypeSlice(string, iterator, -0) : string;

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
                            var iterator = 0, stream = "";

                            // Updates > Matches
                            length == 1 ? matches = [' ', '\n'] : (LDKF.isArray(matches) || (matches = [matches]));

                            // Initialization > Matches (Iterator, Length)
                            var matchesIterator = LDKF.arrayPrototypeLength(matches), matchesLength = matchesIterator;

                            // Update > Length
                            length = LDKF.stringPrototypeLength(string);

                            // Logic
                            if (LDKF.stringPrototypeLength(matches[0]) == 1 && (!matchesLength || matchesLength == 1)) {
                                // Logic
                                if (matchesLength) {
                                    // Initialization > Index
                                    var index = length - 1;

                                    // Loop > Update > (Index, Iterator)
                                    while (index && string[index] == matches[0]) { index -= 1; iterator += 1 }
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
                                        if (string[length - iterator - (matchLength - matchIterator - 1) - 1] != match[matchIterator])
                                            // [Break]
                                            break;

                                        else if (!matchIterator && string[length - iterator - (matchLength - 1) - 1] == match[0]) {
                                            // Update > (Iterator, Matches Iterator)
                                            iterator += matchLength;
                                            matchesIterator = matchesLength;
                                        }
                                    }
                                }

                            // Update > Stream
                            stream = iterator ? LDKF.stringPrototypeSlice(string, 0, length - (iterator + 1) + 1) : string;

                            // Return
                            return stream
                        }

                        else
                            // Return
                            return ""
                    };

                // Array > Prototype
                    // Add To Front
                    LapysDevelopmentKit.functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, item) { array[LDKF.arrayPrototypeLength(array)] = item };

                    // Length --- NOTE (Lapys) -> Luckily, the `for...in` statement is compatible with most modern browsers.
                    LapysDevelopmentKit.functions.arrayPrototypeLength = function arrayPrototypeLength(array) { var key, length = 0; for (key in array) LDKF.stringPrototypeIsNumeric(key) && (length += 1); return length };

                // Get Arguments Length --- NOTE (Lapys) -> Oddly enough, the `arguments.length` property is not mutable.
                LapysDevelopmentKit.functions.getArgumentsLength = function getArgumentsLength(argumentsList) { return argumentsList.length };

                // Is Constructible
                LapysDevelopmentKit.functions.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                // Is Non-Constructible
                LapysDevelopmentKit.functions.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                // Is Null
                LapysDevelopmentKit.functions.isNull = function isNull(arg) { return arg === null };

                // Object > Prototype
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

                // Function > Prototype
                    // Get Syntax Type
                    LapysDevelopmentKit.functions.functionPrototypeGetSyntaxType = function functionPrototypeGetSyntaxType(method) {
                        // Initialization > Source
                        var source = LDKF.functionPrototypeToSourceString(method);

                        // Logic
                        if (source != "undefined")
                            // Logic > Return
                            if (source[0] == 'c' && source[1] == 'l' && source[2] == 'a' && source[3] == 's' && source[4] == 's') return "class";
                            else if (source[0] == 'f' && source[1] == 'u' && source[2] == 'n' && source[3] == 'c' && source[4] == 't' && source[5] == 'i' && source[6] == 'o' && source[7] == 'n') return (function() {
                                // Initialization > (Iterator, Length)
                                var iterator = 7, length = LDKF.stringPrototypeLength(source);

                                // Loop
                                while (iterator != length) {
                                    // Initialization > Character
                                    var character = source[iterator += 1];

                                    // Logic > Return
                                    if (character == '(') return false;
                                    else if (character == '*') return true
                                }
                            })() ? "generator" : "default";
                            else if (
                                // NOTE (Lapys) -> Not all arrow functions begin with English characters.
                                LDKF.stringPrototypeIsAlphabet(source[0]) ||
                                source[0] == '_' || source[0] == '$' || source[0] == '(' ||
                                LDKF.stringPrototypeIncludes(source, "=>")
                            ) return "arrow";

                        // Return
                        return null
                    };

                    // Is Native
                    LapysDevelopmentKit.functions.functionPrototypeIsNative = function functionPrototypeIsNative(method) {
                        // Initialization > ((Allow) Stream (Lock), Source, Iterator, Length)
                        var allowStream = true,
                            source = LDKF.functionPrototypeToSourceString(method),
                            iterator = LDKF.stringPrototypeLength(source),
                            length = iterator,
                            stream = "",
                            streamLock = null;

                        // Logic > Return
                        if (LDKF.isNonConstructible(method)) return false;
                        if (LDKF.isNull(LDKF.functionPrototypeGetSyntaxType(method))) return true;

                        // Loop
                        while (iterator > 0) {
                            // Initialization > Character
                            var character = source[length - (iterator -= 1) - 1];

                            // Logic
                            if (allowStream) {
                                // Logic
                                if (character == '/' && source[length - iterator] == '/') {
                                    // Update > ((Allow) Stream (Lock), Iterator)
                                    allowStream = false;
                                    iterator -= 1;
                                    streamLock = "//";

                                    // [Continue]
                                    continue
                                }

                                else if (character == '/' && source[length - iterator] == '*') {
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

                            else if (character == '*' && source[length - iterator] == '/') {
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

                    // To Source String
                    LapysDevelopmentKit.functions.functionPrototypeToSourceString = function functionPrototypeToSourceString(method) { return LDKF.stringPrototypeTrim(LDKF.toString(method) || "") };

            /* Constants */
                // Has __Define__ Getter Property
                LapysDevelopmentKit.constants.has__Define__GetterProperty = typeof __defineGetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__DefineGetter__ = __defineGetter__);

                // Has __Define__ Setter Property
                LapysDevelopmentKit.constants.has__Define__SetterProperty = typeof __defineSetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__DefineSetter__ = __defineSetter__);

                // Has __Lookup__ Getter Property
                LapysDevelopmentKit.constants.has__Lookup__GetterProperty = typeof __lookupGetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__LookupGetter__ = __lookupGetter__);

                // Has __Lookup__ Setter Property
                LapysDevelopmentKit.constants.has__Lookup__SetterProperty = typeof __lookupSetter__ == "function" && LDKF.functionPrototypeIsNative(LDKO.objectPrototype__LookupSetter__ = __lookupSetter__);

                // Is Browser Environment --- UPDATE REQUIRED (Lapys) -> Test here should be improved.
                LapysDevelopmentKit.constants.isBrowserEnvironment = typeof window == "object" && LDKF.isConstructible(window);

                // Is __Prototype__ Defined
                LapysDevelopmentKit.constants.is__Proto__Defined = LDKF.objectPrototypeHasProperty({}, "__proto__");

            /* Objects */
                // Object --- UPDATE REQUIRED (Lapys) -> Should be parsed without native methods.
                LapysDevelopmentKit.objects.object = ({}).constructor;
                    /* Prototype --- UPDATE REQUIRED (Lapys) -> Should be parsed without native methods. */
                    LapysDevelopmentKit.objects.objectPrototype = LDKO.object.prototype;
                        // Has Own Property
                        LapysDevelopmentKit.objects.objectPrototypeHasOwnProperty = (function() {
                            // Initialization > Method
                            var method;

                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.objectPrototype, "hasOwnProperty")) {
                                // Update > Method
                                method = LDKF.objectPrototypeGetProperty(LDKO.objectPrototype, "hasOwnProperty");

                                // Error
                                LDKF.functionPrototypeIsNative(method) || LDKF.error("`Object.prototype.hasOwnProperty` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
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

            /* Functions */
                // Object > Prototype
                    // Has Own Property --- UPDATE REQUIRED (Lapys) -> Should not use the `Function.prototype.call` method.
                    LapysDevelopmentKit.functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, propertyName) { return LDKO.objectPrototypeHasOwnProperty.call(object, propertyName) };

            /* Objects */
                // Object
                    // Define Property
                    LapysDevelopmentKit.objects.objectDefineProperty = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (
                            LDKF.objectPrototypeHasProperty(LDKO.object, "defineProperty") && (function() {
                                // Initialization > Is Standard
                                var isStandard = true;

                                // Update > Method
                                method = LDKF.objectPrototypeGetProperty(LDKO.object, "defineProperty");

                                // Error Handling > (...)
                                try { method({}, "", {}) }
                                catch (error) { isStandard = false }

                                // Return
                                return isStandard
                            })()
                        )
                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error("`Object.defineProperty` method" + LDKI.messages.error.nativeToEnvironmentSuffix);

                        else
                            // Return
                            return function defineProperty(object, key, descriptor) {
                                // Error Handling > Return
                                try { return method(object, key, descriptor) }
                                catch (error) {}

                                // Modification > Object > [Key]
                                (LDKC.has__Define__GetterProperty && LDKF.objectPrototypeHasProperty(descriptor, "get")) &&
                                LDKO.objectPrototype__DefineGetter__.call(object, key, LDKF.objectPrototypeGetProperty(descriptor, "get"));

                                (LDKC.has__Define__SetterProperty && LDKF.objectPrototypeHasProperty(descriptor, "set")) &&
                                LDKO.objectPrototype__DefineSetter__.call(object, key, LDKF.objectPrototypeGetProperty(descriptor, "set"));

                                LDKF.objectPrototypeHasProperty(descriptor, "value") &&
                                LDKF.objectPrototypeSetProperty(object, key, LDKF.objectPrototypeGetProperty(descriptor, "value"));

                                // Return
                                return object
                            };

                        // Return
                        return method
                    })();

                    // Get Own Property Descriptor
                    LapysDevelopmentKit.objects.objectGetOwnPropertyDescriptor = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertyDescriptor")) {
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyDescriptor");

                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error("`Object.getOwnPropertyDescriptor` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
                        }

                        else
                            // Update > Method
                            method = function getOwnPropertyDescriptor(object, key) {
                                // Initialization > (Getter, Setter, Has __Lookup__ Properties, Is Accessor)
                                var getter, setter,
                                    has__Lookup__Properties = LDKC.has__Lookup__GetterProperty && LDKC.has__Lookup__SetterProperty,
                                    isAccessor = has__Lookup__Properties ?
                                        (getter = LDKO.objects.objectPrototype__LookupGetter__.call(object, key)) ||
                                        (setter = LDKO.objects.objectPrototype__LookupSetter__.call(object, key)) :
                                        null;

                                // Return
                                return LDKF.isNull(isAccessor) ?
                                    {configurable: true, enumerable: true, value: LDKF.objectPrototypeGetProperty(object, key), writable: true} :
                                    {configurable: true, enumerable: true, get: getter, set: setter}
                            };

                        // Return
                        return method
                    })();

                    // Get Own Property Names
                    LapysDevelopmentKit.objects.objectGetOwnPropertyNames = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertyNames")) {
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyNames");

                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error("`Object.getOwnPropertyNames` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
                        }

                        else
                            // Update > Method --- UPDATE REQUIRED (Lapys) -> Should also return non-enumerable properties as well.
                            method = function getOwnPropertyNames(object) {
                                // Initialization > (Index, Key, Property Names)
                                var index = -1, key, propertyNames = [];

                                // Loop > Update > Property Names
                                for (key in object) LDKF.objectPrototypeHasOwnProperty(object, key) && (propertyNames[index += 1] = key);

                                // Return
                                return propertyNames
                            };

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
                                try { if (LDKF.objectPrototypeHasOwnProperty(object, propertyName)) { ownValue = object[propertyName]; delete object[propertyName]; return object[propertyName] } }
                                catch (error) { throw error }
                                finally { LDKF.objectPrototypeSetProperty(object, propertyName, ownValue) }

                                // Return
                                return object[propertyName]
                            }

                            // Update > Method
                            method = LDKC.is__Proto__Defined ?
                                function getPrototypeOf(object) { return getPrototypeValue(object, "__proto__") } :
                                function getPrototypeOf(object) { return getPrototypeValue(object, "constructor").prototype || LDKO.objectPrototype }
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
                            LDKF.functionPrototypeIsNative(method) || LDKF.error("`Object.keys` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
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
                            }
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
                            LDKF.functionPrototypeIsNative(method) || LDKF.error("`Object.setPrototypeOf` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
                        }

                        else if (LDKC.is__Proto__Defined)
                            // Update > Method
                            method = function setPrototypeOf(object, prototype) { LDKF.objectPrototypeSetProperty(object, "__proto__", prototype) };

                        // Update > Method
                        (typeof method == "function") || (method = undefined);

                        // Return
                        return method
                    })();

            /* Functions */
                // Object
                    // Define Property
                    LapysDevelopmentKit.functions.objectDefineProperty = function objectDefineProperty(object, key, descriptor) { return LDKO.objectDefineProperty(object, key, descriptor) };

                    // Get Own Property Descriptor
                    LapysDevelopmentKit.functions.objectGetOwnPropertyDescriptor = function objectGetOwnPropertyDescriptor(object, propertyName) { return LDKO.objectGetOwnPropertyDescriptor(object, propertyName) };

                    // Get Own Property Names
                    LapysDevelopmentKit.functions.objectGetOwnPropertyNames = function objectGetOwnPropertyNames(object) { return LDKO.objectGetOwnPropertyNames(object) };

                    // Get Prototype Of
                    LapysDevelopmentKit.functions.objectGetPrototypeOf = function objectGetPrototypeOf(object) { return LDKO.objectGetPrototypeOf(object) };

                    // Keys
                    LapysDevelopmentKit.functions.objectKeys = function objectKeys(object) { return LDKO.objectKeys(object) };

                    /* Prototype */
                        // Get __Proto__
                        LapysDevelopmentKit.functions.objectPrototypeGet__Proto__ = function objectPrototypeGet__Proto__(object) {
                            // Initialization > __Prototype__
                            var __proto__ = undefined;

                            // Error Handling
                            try {
                                // Logic > Update > __Prototype__
                                if (LDKF.objectPrototypeHasProperty(object, "__proto__")) __proto__ = object.__proto__;
                                else if (typeof LDKO.objectGetPrototypeOf == "function") __proto__ = LDKF.objectGetPrototypeOf(object)
                            } catch (error) {}

                            // Return
                            return __proto__
                        };

                        // Set __Proto__ --- WARN (NOTE) -> Accessors are not available in some environments.
                        LapysDevelopmentKit.functions.objectPrototypeSet__Proto__ = function objectPrototypeSet__Proto__(object, __proto__) {
                            // Error Handling
                            try {
                                // Logic > (...)
                                    // {...}
                                    if (LDKF.objectPrototypeHasProperty(object, "__proto__")) LDKF.objectPrototypeSetProperty(object, "__proto__", __proto__);

                                    // {...}
                                    else if (typeof LDKO.objectSetPrototypeOf == "function") LDKF.objectSetPrototypeOf(object, __proto__);

                                    // {...} NOTE (Lapys) -> Shamelessly mimic mutating an object's prototype.
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

                        // Constructor
                        LapysDevelopmentKit.functions.objectPrototypeConstructor = function objectPrototypeConstructor(object) {
                            // Initialization > (Constructor, Is Constructible)
                            var constructor, isConstructible = LDKF.isConstructible(object);

                            // Error Handling
                            try { if (typeof (constructor = isConstructible ? object.constructor : undefined) != "function") throw {} }
                            catch (error) {
                                // Error Handling > Update > Constructor
                                try { constructor = isConstructible ? (LDKF.objectPrototypeGet__Proto__(object) || {}).constructor : undefined }
                                catch (error) { constructor = undefined }
                            }

                            // Update > Constructor
                            (typeof constructor != "function" && !LDKF.isNull(constructor)) && (constructor = undefined);

                            // Return
                            return constructor
                        };

                    // Set Prototype Of
                    LapysDevelopmentKit.functions.objectSetPrototypeOf = function objectSetPrototypeOf(object, __proto__) { return LDKO.objectSetPrototypeOf(object, __proto__) };

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
                            isWithinScope = 0,
                            iterator = -1,
                            scopeLock = null, scopeLockLevel = 0,
                            stream = "", streamLock = null;

                        // Loop
                        while (!bodyIsIndexed) {
                            // Update > Character
                            character = source[iterator += 1];

                            // Logic
                            if (allowStream) {
                                // Logic
                                if (character == '/' && source[iterator + 1] == '/') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = "//";

                                    // [Continue]
                                    continue
                                }

                                else if (character == '/' && source[iterator + 1] == '*') {
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
                                                if (source[iterator] == '(')
                                                    // Return
                                                    return false;

                                                // {}
                                                else if (source[iterator] != ' ')
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
                                            if (character == '=' && source[iterator + 1] == '>') {
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

                                // {Scope Hierarchy Logic} Logic > Update > Within Scope
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

                            else if (character == '*' && source[iterator + 1] == '/') {
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
                            (character = source[iterator += 1]) && (stream += character);

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
                            isWithinScope = 0,
                            iterator = -1,
                            scopeLock = null,
                            stream = "", streamLock = null,
                            wasWithinScope = 1;

                        // Loop
                        while (true) {
                            // Update > Character
                            character = source[iterator += 1];

                            // Logic
                            if (allowStream) {
                                // Logic
                                if (character == '/' && source[iterator + 1] == '/') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = "//"
                                }

                                else if (character == '/' && source[iterator + 1] == '*')
                                    // Update > Allow Stream
                                    allowStream = false;

                                else if (character == '\'' || character == '"') {
                                    // Update > (Allow) Stream (Lock)
                                    allowStream = false;
                                    streamLock = character
                                }

                                // Update > Was Within Scope --- NOTE (Lapys) -> Implicit `extends` keyword scopes are only valid with `class` or `function` syntax-ed functions.
                                (syntaxType == "class") && (
                                    (function(stream) { return stream == "class " || stream == "class\n" })(LDKF.stringPrototypeSlice(source, iterator, iterator + 6)) ||
                                    (function(stream) { return stream == "function " || stream == "function(" || stream == "function\n" })(LDKF.stringPrototypeSlice(source, iterator, iterator + 9))
                                ) && (wasWithinScope -= 1);

                                // Logic > [Break]
                                if (
                                    ((character == '=' && source[iterator + 1] == '>') && syntaxType == "arrow" && !isWithinScope) ||
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

                            else if (character == '*' && source[iterator + 1] == '/')
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
                                break;

                            // Class
                            case "class":
                                // (...)
                                var iterator = 6; while (LDKF.stringPrototypeIsAlphabet(source[iterator])) stream += source[(iterator += 1) - 1]; return stream;
                                break;

                            // Default
                            case "default":
                                // (...)
                                var iterator = 9; while (LDKF.stringPrototypeIsAlphabet(source[iterator])) stream += source[(iterator += 1) - 1]; return stream;
                                break;

                            // Generator
                            case "generator":
                                // Initialization > (Iterator, Character)
                                var iterator = LDKF.stringPrototypeIndex(source, '*') + 1,
                                    character = source[iterator];

                                // Loop
                                while (character == ' ' || LDKF.stringPrototypeIsAlphabet(character)) {
                                    // Update > (Stream, Character)
                                    (character == ' ') || (stream += character);
                                    character = source[iterator += 1]
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
                                    var character = source[length - (iterator -= 1) - 1];

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
                            character = head[length - (iterator -= 1) - 1];

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
                        parameters[0] = LDKF.stringPrototypeTrimLeft(parameters[0], [' ', '(']);
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
                                        var character = parameter[iterator += 1];

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
                                        var character = parameter[iterator += 1];

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

                    // Is Arrow
                    LapysDevelopmentKit.functions.functionPrototypeIsArrow = function functionPrototypeIsArrow(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "arrow" };

                    // Is Class
                    LapysDevelopmentKit.functions.functionPrototypeIsClass = function functionPrototypeIsClass(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "class" };

                    // Is Generator
                    LapysDevelopmentKit.functions.functionPrototypeIsGenerator = function functionPrototypeIsGenerator(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "generator" };

                    // Is Default
                    LapysDevelopmentKit.functions.functionPrototypeIsDefault = function functionPrototypeIsDefault(method) { return LDKF.functionPrototypeGetSyntaxType(method) == "default" };

                    // Is Native Arrow
                    LapysDevelopmentKit.functions.functionPrototypeIsNativeArrow = function functionPrototypeIsArrow(method) { return LDKF.functionPrototypeIsArrow(method) && LDKF.functionPrototypeIsNative(method) };

                    // Is Native Class
                    LapysDevelopmentKit.functions.functionPrototypeIsNativeClass = function functionPrototypeIsClass(method) { return LDKF.functionPrototypeIsClass(method) && LDKF.functionPrototypeIsNative(method) };

                    // Is Native Generator
                    LapysDevelopmentKit.functions.functionPrototypeIsNativeGenerator = function functionPrototypeIsGenerator(method) { return LDKF.functionPrototypeIsGenerator(method) && LDKF.functionPrototypeIsNative(method) };

                    // Is Native Default
                    LapysDevelopmentKit.functions.functionPrototypeIsNativeDefault = function functionPrototypeIsClass(method) { return LDKF.functionPrototypeIsDefault(method) && LDKF.functionPrototypeIsNative(method) };

                    // Is User-Defined
                    LapysDevelopmentKit.functions.functionPrototypeIsUserDefined = function functionPrototypeIsUserDefined(method) { return !LDKF.functionPrototypeIsNative(method) };

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

                    // {Angular JS} Logic
                    if (typeof angular == "object" && LDKF.objectPrototypeConstructor(angular) === LDKO.object && LDKF.toString(angular) == "[object Object]") {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "angular"
                    }

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
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework";
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "Electron JS"
                    }

                    // {jQuery} Logic
                    if (
                        typeof jQuery == "function" && LDKF.functionPrototypeIsUserDefined(jQuery) &&
                        typeof $ == "function" && LDKF.functionPrototypeIsUserDefined($)
                    ) {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "jQuery"
                    }

                    // {React JS} Logic
                    if (typeof React == "object" && LDKF.objectPrototypeConstructor(React) === LDKO.object && LDKF.toString(React) == "[object Object]") {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "React JS"
                    }

                    // {Vue JS} Logic
                    if (typeof Vue == "function" && LDKF.functionPrototypeIsUserDefined(Vue)) {
                        // Modification > (Lapys Development Kit > Environment) > (Type, Vendors)
                        LapysDevelopmentKit.environment.type = "framework"
                        LapysDevelopmentKit.environment.vendors[LDKF.arrayPrototypeLength(LapysDevelopmentKit.environment.vendors)] = "Vue JS"
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
                    // Modification > (Lapys Development Kit > Environment) > (Global(s), Type, Vendors)
                    LapysDevelopmentKit.environment.global = global;
                    LapysDevelopmentKit.environment.globals = LDKC.isBrowserEnvironment ? [global, module, window] : [global, module];
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
                                    typeof LDKF.objectPrototypeGet__Proto__(process) == "object"
                                ) { var argv = process.argv; if (!!argv && typeof argv == "object" && LDKF.objectPrototypeConstructor(arg) === LDKF.objectPrototypeConstructor([])) return argv }
                            }
                        } catch (error) {}

                        // Return
                        return []
                    })(), iterator = LDKF.arrayPrototypeLength(argv), length = iterator;

                    // Loop > Update > Arguments --- NOTE (Lapys) -> Update the global `args` variable.
                    while (iterator) LDKF.arrayPrototypeAddToFront(args, argv[length - (iterator -= 1) - 1])
                }
            })();

    /* Initialization */
        // Global
        var GLOBAL = LapysDevelopmentKit.environment.global;

    /* Modification */
        /* Lapys Development Kit */
            // Objects
                // Array
                LapysDevelopmentKit.objects.array = LDKF.objectPrototypeConstructor([]);

                // Function
                LapysDevelopmentKit.objects["function"] = LDKF.objectPrototypeConstructor(function() {});

                // Number
                LapysDevelopmentKit.objects.number = LDKF.objectPrototypeConstructor(0);

                // Regular Expression
                LapysDevelopmentKit.objects.regularExpression = LDKF.objectPrototypeConstructor(/ /);

                // String
                LapysDevelopmentKit.objects.string = LDKF.objectPrototypeConstructor("");

                // Symbol
                LapysDevelopmentKit.objects.symbol = LDKF.objectPrototypeGetProperty(GLOBAL, "Symbol");

            // Functions
                // Regular Expression
                LapysDevelopmentKit.functions.regularExpression = function regularExpression(source) { return LDKF.getArgumentsLength(arguments) ? LDKO.regularExpression(source) : new LDKO.regularExpression };

                // String > Prototype
                    // Is Empty
                    LapysDevelopmentKit.functions.stringPrototypeIsEmpty = function stringPrototypeIsEmpty(string) { return !string };

                // Symbol
                LapysDevelopmentKit.functions.symbol = function symbol(description) { return LDKF.getArgumentsLength(arguments) ? LDKO.symbol(description) : new LDKO.symbol };

                // Is Array
                LapysDevelopmentKit.functions.isArray = function isArray(arg) {
                    // Logic > Error Handling > Return
                    if (LDKC.is__Proto__Defined)
                        try { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKF.objectPrototypeConstructor(arg) === LDKO.array && LDKF.isNull(LDKF.objectPrototypeGet__Proto__(LDKF.objectPrototypeGet__Proto__(LDKF.objectPrototypeGet__Proto__(arg)))) }
                        catch (error) {}

                    // Error Handling > Return
                    try { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKF.objectPrototypeConstructor(arg) === LDKO.array }
                    catch (error) {}

                    // Return
                    return false
                };

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
                    else if (LDKF.isSymbol(arg)) return LDKF.toString(arg) == "Symbol()";
                    else if (LDKF.isVoid(arg)) return true;
                    else return LDKF.isObject(arg) && LDKF.objectIs(LDKF.arrayPrototypeLength(LDKF.objectKeys(arg)), 0)
                };

                // Is False Boolean
                LapysDevelopmentKit.functions.isFalseBoolean = function isFalseBoolean(arg) { return LDKF.isBoolean(arg) && !arg };

                // Is Function
                LapysDevelopmentKit.functions.isFunction = function isFunction(arg) {
                    // Return
                    return typeof arg == "function" || (function() {
                        // Logic > Return
                        if (
                            LDKF.objectPrototypeHasProperty(GLOBAL, "ActiveXObject") &&
                            (function(method) { return method && LDKF.functionPrototypeIsNative(method) })(LDKF.objectPrototypeGetProperty(GLOBAL, "ActiveXObject"))
                        ) return typeof arg == "object" && LDKF.functionPrototypeIsDefault(arg)

                        // Return
                        return false
                    })()
                };

                // Is Regular Expression
                LapysDevelopmentKit.functions.isRegularExpression = function isRegularExpression(arg) { return typeof arg == "object" && LDKF.isConstructible(arg) && LDKF.objectPrototypeConstructor(arg) === LDKO.regularExpression };

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
                    else if (LDKF.isSymbol(arg)) return new LDKF.symbol;
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

            /* Objects */
                // Abort Error
                LapysDevelopmentKit.objects.abortError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "AbortError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "AbortError") == "AbortError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Constraint Error
                LapysDevelopmentKit.objects.constraintError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "ConstraintError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "ConstraintError") == "ConstraintError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Constraint Not Satisfied Error
                LapysDevelopmentKit.objects.constraintNotSatisfiedError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "ConstraintNotSatisfiedError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "ConstraintNotSatisfiedError") == "ConstraintNotSatisfiedError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Data Error
                LapysDevelopmentKit.objects.dataError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "DataError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "DataError") == "DataError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Data Clone Error
                LapysDevelopmentKit.objects.dataCloneError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "DataCloneError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "DataCloneError") == "DataCloneError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Devices Not Found Error
                LapysDevelopmentKit.objects.devicesNotFoundError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "DevicesNotFoundError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "DevicesNotFoundError") == "DevicesNotFoundError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // DOM Error
                LapysDevelopmentKit.objects.domError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "DOMError");

                    // Logic
                    if (!LDKF.isVoid(constructor))
                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(constructor) || "DOMError") == "DOMError" && (LDKF.functionPrototypeToSourceString(constructor) == "[object DOMError]" || LDKF.functionPrototypeIsNative(constructor))) return constructor;
                        else if (LDKC.isBrowserEnvironment) LDKF.error("`DOMError` constructor" + LDKI.messages.error.nativeToEnvironmentSuffix)
                })();

                // DOM Exception
                LapysDevelopmentKit.objects.domException = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "DOMException");

                    // Logic
                    if (!LDKF.isVoid(constructor))
                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(constructor) || "DOMException") == "DOMException" && (LDKF.functionPrototypeToSourceString(constructor) == "[object DOMException]" || LDKF.functionPrototypeIsNative(constructor))) return constructor;
                        else if (LDKC.isBrowserEnvironment) LDKF.error("`DOMException` constructor" + LDKI.messages.error.nativeToEnvironmentSuffix)
                })();

                // Encoding Error
                LapysDevelopmentKit.objects.encodingError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "EncodingError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "EncodingError") == "EncodingError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Error
                LapysDevelopmentKit.objects.error = (function() {
                    // Initialization > (Is Standard, Object)
                    var isStandard = true, constructor;

                    // Function > Test
                    function test() { return LDKF.functionPrototypeGetName(constructor) == "Error" || LDKF.functionPrototypeIsNative(constructor) }

                    // Logic
                    if (LDKC.is__Proto__Defined)
                        // Error Handling
                        try {
                            // (...)
                            undefined[""]
                        } catch (error) {
                            // Update > Object
                            constructor = LDKF.objectPrototypeConstructor(LDKF.objectPrototypeGet__Proto__(LDKF.objectPrototypeGet__Proto__(error)));
                            test() || (isStandard = false)
                        }

                    else
                        // Update > Is Standard
                        isStandard = false;

                    // Logic
                    if (!isStandard) {
                        // Update > Object
                        constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "Error");

                        // Error
                        test() || LDKF.error("`Error` constructor" + LDKI.messages.error.nativeToEnvironmentSuffix)
                    }

                    // Return
                    return constructor
                })();

                // Evaluation Error
                LapysDevelopmentKit.objects.evalError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "EvalError");

                    // Logic
                    if (!LDKF.isVoid(constructor))
                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(constructor) || "EvalError") == "EvalError" && ((function(stream) { return stream == "EvalError" || stream == "[object Error]" })(LDKF.functionPrototypeToSourceString(constructor)) || LDKF.functionPrototypeIsNative(constructor))) return constructor;
                        else LDKF.error("`EvalError` constructor" + LDKI.messages.error.nativeToEnvironmentSuffix)
                })();

                // Hierarchy Request Error
                LapysDevelopmentKit.objects.hierarchyRequestError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "HierarchyRequestError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "HierarchyRequestError") == "HierarchyRequestError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Index Size Error
                LapysDevelopmentKit.objects.indexSizeError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "IndexSizeError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "IndexSizeError") == "IndexSizeError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Internal Error --- CHECKPOINT ---
                LapysDevelopmentKit.objects.internalError = (function() {
                    // Initialization > Method
                    var constructor;

                    // Function > Test
                    function test() { return (LDKF.functionPrototypeGetName(constructor) || "InternalError") == "InternalError" && LDKF.functionPrototypeIsNative(constructor) }

                    // Error Handling > (...)
                    try { (function InternalError(){InternalError()})() }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Logic
                    if (!test()) {
                        // Update > Method
                        constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "InternalError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return
                    }

                    // Return
                    return constructor
                })();

                // Invalid Access Error
                LapysDevelopmentKit.objects.invalidAccessError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "InvalidAccessError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "InvalidAccessError") == "InvalidAccessError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Invalid Character Error
                LapysDevelopmentKit.objects.invalidCharacterError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "invalidCharacterError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "invalidCharacterError") == "invalidCharacterError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Invalid Modification Error
                LapysDevelopmentKit.objects.invalidModificationError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "InvalidModificationError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "InvalidModificationError") == "InvalidModificationError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Invalid Node Type Error
                LapysDevelopmentKit.objects.invalidNodeTypeError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "InvalidNodeTypeError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "InvalidNodeTypeError") == "InvalidNodeTypeError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Invalid State Error
                LapysDevelopmentKit.objects.invalidStateError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "InvalidStateError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "InvalidStateError") == "InvalidStateError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Media Error
                LapysDevelopmentKit.objects.mediaError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "MediaError");

                    // Logic
                    if (!LDKF.isVoid(constructor))
                        // Logic > (...)
                        if ((LDKF.functionPrototypeGetName(constructor) || "MediaError") == "MediaError" && (LDKF.functionPrototypeToSourceString(constructor) == "[object MediaError]" || LDKF.functionPrototypeIsNative(constructor))) return constructor;
                        else LDKF.error("`MediaError` constructor" + LDKI.messages.error.nativeToEnvironmentSuffix)
                })();

                // Media Key Error
                LapysDevelopmentKit.objects.mediaKeyError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "MediaKeyError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "MediaKeyError") == "MediaKeyError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Media Stream Error
                LapysDevelopmentKit.objects.mediaStreamError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "MediaStreamError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "MediaStreamError") == "MediaStreamError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Microsoft Media Key Error
                LapysDevelopmentKit.objects.msMediaKeyError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "MSMediaKeyError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "MSMediaKeyError") == "MSMediaKeyError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Namespace Error
                LapysDevelopmentKit.objects.namespaceError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NamespaceError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NamespaceError") == "NamespaceError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Navigator User Media Error
                LapysDevelopmentKit.objects.navigatorUserMediaError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NavigatorUserMediaError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NavigatorUserMediaError") == "NavigatorUserMediaError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Network Error
                LapysDevelopmentKit.objects.networkError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NetworkError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NetworkError") == "NetworkError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // No Modification Allowed Error
                LapysDevelopmentKit.objects.noModificationAllowedError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NoModificationAllowedError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NoModificationAllowedError") == "NoModificationAllowedError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Not Allowed Error
                LapysDevelopmentKit.objects.notAllowedError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NotAllowedError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NotAllowedError") == "NotAllowedError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Not Found Error
                LapysDevelopmentKit.objects.notFoundError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NotFoundError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NotFoundError") == "NotFoundError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Not Readable Error
                LapysDevelopmentKit.objects.notReadableError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NotReadableError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NotReadableError") == "NotReadableError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Not Supported Error
                LapysDevelopmentKit.objects.notSupportedError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "NotSupportedError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "NotSupportedError") == "NotSupportedError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Operation Error
                LapysDevelopmentKit.objects.operationError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "OperationError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "OperationError") == "OperationError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Over-Constrained Error
                // Permission Denied Error
                LapysDevelopmentKit.objects.permissionDeniedError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "PermissionDeniedError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "PermissionDeniedError") == "PermissionDeniedError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Quota Exceeded Error
                LapysDevelopmentKit.objects.quotaExceededError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "QuotaExceededError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "QuotaExceededError") == "QuotaExceededError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Range Error --- CHECKPOINT ---

                // Read-Only Error
                LapysDevelopmentKit.objects.readOnlyError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "ReadOnlyError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "ReadOnlyError") == "ReadOnlyError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Reference Error --- CHECKPOINT ---

                // Security Error
                LapysDevelopmentKit.objects.securityError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "SecurityError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "SecurityError") == "SecurityError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Speech Recognition Error
                LapysDevelopmentKit.objects.speechRecognitionError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "SpeechRecognitionError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "SpeechRecognitionError") == "SpeechRecognitionError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Syntax Error --- CHECKPOINT ---
                // Timeout Error
                LapysDevelopmentKit.objects.timeoutError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "TimeoutError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "TimeoutError") == "TimeoutError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Track Start Error
                LapysDevelopmentKit.objects.trackStartError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "TrackStartError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "TrackStartError") == "TrackStartError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Transaction Inactive Error
                LapysDevelopmentKit.objects.transactionInactiveError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "TransactionInactiveError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "TransactionInactiveError") == "TransactionInactiveError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Type Error --- CHECKPOINT ---
                // Type Mismatch Error
                LapysDevelopmentKit.objects.typeMismatchError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "TypeMismatchError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "TypeMismatchError") == "TypeMismatchError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Unknown Error
                LapysDevelopmentKit.objects.unknownError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "UnknownError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "UnknownError") == "UnknownError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // URL Error --- CHECKPOINT --
                // URL Mismatch Error
                LapysDevelopmentKit.objects.urlMismatchError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "URLMismatchError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "URLMismatchError") == "URLMismatchError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Version Error
                LapysDevelopmentKit.objects.versionError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "VersionError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "VersionError") == "VersionError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Webkit Speech Recognition Error
                LapysDevelopmentKit.objects.webkitSpeechRecognitionError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "webkitSpeechRecognitionError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "webkitSpeechRecognitionError") == "webkitSpeechRecognitionError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

                // Wrong Document Error
                LapysDevelopmentKit.objects.wrongDocumentError = (function() {
                    // Initialization > Method
                    var constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "WrongDocumentError");

                    // Logic > Return
                    if ((LDKF.functionPrototypeGetName(constructor) || "WrongDocumentError") == "WrongDocumentError" && LDKF.functionPrototypeIsNative(constructor)) return constructor
                })();

    /* Function */
        // Initiate
        function INITIATE() {}

        // Update
        function UPDATE() {}

        // Terminate
        function TERMINATE() {}

    // Initiate
    try { STATE || INITIATE() } catch (error) { STATE = -1 }

    // Update
    try { STATE || UPDATE() } catch (error) { STATE = -2 }

    // Terminate
    try { STATE || TERMINATE() } catch (error) { STATE = -3 }

    // Return
    return STATE
})()
