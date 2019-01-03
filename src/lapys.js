/**
    @author: Lapys Dev Team
    @description: LapysJS is an intuitive, minimalist web library for quick development.
    @version: 0.0.7
    @url: https://www.github.com/LapysDev/LapysJS

    --- CODE ---
        #Lapys:
            - LapysJS
                - allowAppModel
                - allowGlobalObjects
                - components
                    -- Accordion
                    -- Carousel
                    -- Dropdown
                    -- Marquee
                    -- Media
                        --- Audio
                        --- Video
                    -- Picture-in-Picture
                    -- Toast
                    -- Tooltip
                    -- Table

                - debugMode
                - features
                    -- focus-attribute
                    -- momentum-scrolling
                    -- smooth-scrolling
                    -- script-attribute

                - lockPrototype
                - lockAllPrototypes

            - app
            - array
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
            - bits
                -- and
                -- or
                -- shiftLeft
                -- shiftRight
                -- twosComplement

            - bool
                -- and
                -- nand
                -- or
                -- nor
                -- xnor
                -- xor
                -- not
                    --- <sibling-properties>
            - browser
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
            - float
            - freeInput
            - func
            - Function.prototype.bind
            - int
            - interval
            - len
            - Math
                -- <LapysDevelopmentKit.math>
            - max
            - maxg
            - min
            - ming
            - momentumScrollBy
            - momentumScrollTo
            - now // Opposite of `once`
            - num
            - Object.concat
            - Object.create
            - Object.defineProperty
            - Object.getOwnPropertyDescriptor
            - Object.getOwnPropertyDescriptors
            - Object.getOwnPropertyNames
            - Object.getOwnPropertyValues
            - Object.getPrototypeOf
            - Object.keys
            - Object.prototype.def
            - Object.prototype.desc
            - Object.prototype.free
            - Object.prototype.freeze
            - Object.prototype.import
            - Object.prototype.keys
            - Object.prototype.melt
            - Object.prototype.__proto__
            - Object.prototype.__protoChain__
            - Object.prototype.undef
            - Object.prototype.values
            - Object.setPrototypeOf
            - Object.values
            - Object.watch
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
            - print
            - rand
            - rands // Random Set
            - regex
            - repeat
            - str
            - strictInput
            - String.prototype.trim
            - String.prototype.trimEnd
            - String.prototype.trimLeft
            - String.prototype.trimRight
            - String.prototype.trimStart
            - sym
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
                    --- Internet Explorer 5
                    --- Internet Explorer 6
                    --- Internet Explorer 7
                    --- Internet Explorer 8
                    --- Internet Explorer 9
                    --- Internet Explorer 10
                    --- Internet Explorer 11
                -- Microsoft Edge (browser)
                -- Android (browser)
                -- Node (development environment)
                -- Tor (browser)

            - The library makes an effort to use only native features of JavaScript to allow for interoperable compatibility with legacy environments
                    and also avoids over-use (if any) of specific vendor (or engine-dependent) features (e.g.: The `requestAnimationFrame` function).
                    -- To compensate for the lack of modern JavaScript features in legacy environments, the library uses an LDK and intuitive solutions to bypass such problems,
                        that is not to say that such a solution is infallible or perfectly executable (e.g.: The `console` object's methods).
                        --- Accessors for example are not available with some ECMAScript standards,
                            so alternative features (such as functions) are in place for older environments and accessors are used typically with more modern standards (or APIs).

                    -- Another case scenario with varying JavaScript environments is the situation of immutable object properties (e.g.: `Arguments.prototype.length` and `<constructor>.prototype`).

            - Over its years of development, the library is still a bare-bones version of what it could be (and code could definitely be re-factored).

    --- UPDATE REQUIRED ---
        #Lapys:
            - `Function.prototype.apply` and `Function.prototype.call` must be used non-natively from the LDK.
            - Target development environments (these environments may lack a core & modern JavaScript feature or not work for some other reasons..):
                -- Samsung Internet --- NOTE (Lapys) -> Untested...
                -- Avast SafeZone Browser (browser) --- NOTE (Lapys) -> Untested...
                -- others...
*/
(function main() {
    /* Initialization */
        // Arguments --- NOTE (Lapys) -> The arguments received by the main sub-routine.
        var args = [],

        // Author
        AUTHOR = "Lapys",

        // Description
        DESCRIPTION = "LapysJS is an intuitive, minimalist web library for quick development.",

        // Lapys Development Kit
        LapysDevelopmentKit = new (function LapysDevelopmentKit() {
            // Initialization > Target
            var that = this;

            // Modification > Target
                // Constants
                that.constants = {defaults: {}, number: {}, string: {}};

                // Data --- NOTE (Lapys) -> Custom data objects.
                that.data = {};

                // Environment --- NOTE (Lapys) -> Properties of the current development environment.
                that.environment = {global: null, state: "unknown", type: "standard", vendors: []};

                // Functions
                that.functions = {};

                // Information --- NOTE (Lapys) -> For testing (and debugging) purposes.
                that.information = {messages: {debugging: {}, error: {}}};

                // Math
                that.math = {};

                // Objects --- NOTE (Lapys) -> Different from the conventional Lapys Development Kit
                that.objects = {};

                // Settings --- NOTE (Lapys) -> Determine how the development kit integrates.
                that.settings = {};

                // Test --- NOTE (Lapys) -> Unit code tests.
                that.test = {};

            // Return
            return that
        }),

        // Strict --- NOTE (Lapys) -> Cause alternative logical paths within a function or method.
        STRICT = false,

        // State --- NOTE (Lapys) -> A zero state means null errors.
        STATE = 0,

        // Undefined --- NOTE (Lapys) -> Specify `undefined`.
        undefined = void 0,

        // Uniform Resource Locator
        URL = "https://www.github.com/LapysDev/LapysJS",

        // Version
        VERSION = "0.0.7";

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
            /* Information */
                // Messages
                    // Debugging
                        // Prefix
                        LapysDevelopmentKit.information.messages.debugging.prefix = "[LapysJS v" + VERSION + "] ->\n    ";

                        // Suffix
                        LapysDevelopmentKit.information.messages.debugging.suffix = "\n";

                    // Error
                        // Compatible with Library Suffix
                        LapysDevelopmentKit.information.messages.error.compatibleWithLibrarySuffix = " is not compatible with this library";

                        // JavaScript Engine Support Suffix
                        LapysDevelopmentKit.information.messages.error.javaScriptEngineSupportSuffix = " must be supported by this JavaScript engine";

                        // Native to Environment Suffix
                        LapysDevelopmentKit.information.messages.error.nativeToEnvironmentSuffix = " must be native to this development environment to install the library";

            /* Test */
                // Environment Vendor Is --- NOTE (Lapys) -> Test that the specified vendor is currently existing.
                LapysDevelopmentKit.test.environmentVendorIs = function environmentVendorIs(vendor) {
                    // Initialization > Iterator
                    var iterator = LDKF.arrayPrototypeLength(LDKE.vendors);

                    // Loop > Logic > Return
                    while (iterator) if (LDKE.vendors[iterator -= 1] == vendor) return true;

                    // Return
                    return false
                };

                // Get Native Constructor
                LapysDevelopmentKit.test.getNativeConstructor = function getNativeConstructor(constructor, constructorName, STRICT) { if (LDKT.isNativeConstructor(constructor, constructorName, STRICT)) return constructor };

                // Get Native Error
                LapysDevelopmentKit.test.getNativeError = function getNativeError(error, errorName, STRICT) { if (LDKT.isNativeError(error, errorName, STRICT)) return error };

                // Get Object Native Constructor By Name
                LapysDevelopmentKit.test.getObjectNativeConstructorByName = function getObjectNativeConstructorByName(object, constructorName, STRICT) { return LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(object, constructorName), constructorName, STRICT) };

                // Get Object Native Error By Name
                LapysDevelopmentKit.test.getObjectNativeErrorByName = function getObjectNativeErrorByName(object, errorName, STRICT) { return LDKT.getNativeError(LDKF.objectPrototypeGetProperty(object, errorName), errorName, STRICT) };

                // Is Console Method --- NOTE (Lapys) -> For the `console` object's methods.
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

                // Is Native Constructor
                LapysDevelopmentKit.test.isNativeConstructor = function isNativeConstructor(constructor, constructorName, STRICT) {
                    // Logic
                    if (!LDKF.isVoid(constructor))
                        // Logic > (...)
                        if (
                            (STRICT ? (LDKF.toString(constructor) == "[object " + constructorName + ']' && typeof constructor == "object") : false) ||
                            (LDKF.functionPrototypeGetName(constructor) == constructorName && LDKF.functionPrototypeIsNative(constructor))
                        ) return true;
                        else LDKF.error.nativeToEnvironment('`' + constructorName + "` constructor");

                    // Return
                    return false
                };

                // Is Native Error
                LapysDevelopmentKit.test.isNativeError = function isNativeError(error, errorName, STRICT) {
                    // Logic
                    if (STRICT ? !LDKF.isVoid(error) : true)
                        // Logic > Return
                        if (
                            (LDKF.functionPrototypeToSourceString(error) == errorName) ||
                            ((LDKF.functionPrototypeGetName(error) || errorName) == errorName && LDKF.functionPrototypeIsNative(error))
                        ) return true;
                        else if (STRICT) LDKF.error.nativeToEnvironment('`' + errorName + "` constructor");

                    // Return
                    return false
                };

                // Throw Error --- WARN (Lapys) -> Defer to `LapysDevelopmentKit.functions.error` instead.
                LapysDevelopmentKit.test.throwError = function throwError(message) { throw (LDKI.messages.debugging.prefix + message + LDKI.messages.debugging.suffix) };

                /* Method Is Standard
                        --- NOTE ---
                            #Lapys: Crude version of `LapysDevelopmentKit.functions.functionPrototypeIsNative`
                                for testing `Function.prototype.apply` and `Function.prototype.call` to be native methods.
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
                                function isSafeNumber(arg) { return typeof arg == "number" && arg < 9007199254740991 && (function(stream) { return arg != "Infinity" && arg != "-Infinity" && arg != "NaN" })(arg + "") }

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
                        // Logic > Error
                        switch (error) {
                            case STRING_PROTOTYPE_CHAR_AT_METHOD_IS_USER_DEFINED:
                                LDKT.throwError("`String.prototype.charAt` method" + LDKI.messages.error.nativeToEnvironmentSuffix)
                        }
                    }

                    // Return
                    return false
                };

                // Function > Prototype
                    // Apply Method Is Standard
                    LapysDevelopmentKit.test.functionPrototypeApplyMethodIsStandard = function functionPrototypeApplyMethodIsStandard() { return LDKT.methodIsStandard(LDKO.functionPrototypeApply = functionPrototypeApplyMethodIsStandard.apply, ['a', 'p', 'p', 'l', 'y'], 5) };
                    LDKT.functionPrototypeApplyMethodIsStandard() || LDKT.throwError("`Function.prototype.apply` method" + LDKI.messages.error.nativeToEnvironmentSuffix);

                    // Call Method Is Standard
                    LapysDevelopmentKit.test.functionPrototypeCallMethodIsStandard = function functionPrototypeCallMethodIsStandard() { return LDKT.methodIsStandard(LDKO.functionPrototypeCall = functionPrototypeCallMethodIsStandard.call, ['c', 'a', 'l', 'l'], 4) };
                    LDKT.functionPrototypeCallMethodIsStandard() || LDKT.throwError("`Function.prototype.call` method" + LDKI.messages.error.nativeToEnvironmentSuffix);

            /* Functions */
                // Get Arguments Length
                LapysDevelopmentKit.functions.getArgumentsLength = function getArgumentsLength(argumentsList) { return argumentsList.length };

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

            /* Functions */
                // Error
                LapysDevelopmentKit.functions.error = function error(message) {
                    // Logic > Error
                    if (LDKF.objectPrototypeHasProperty(LDKD, "lapysJSError")) throw new LDKD.lapysJSError(LDKF.toDebugMessage.apply(LDKD, arguments));
                    else throw LDKF.toDebugMessage.apply(LDKF, arguments)
                };
                    // Library Is Pre-Installed
                    LapysDevelopmentKit.functions.error.libraryIsPreInstalled = function libraryIsPreInstalled() { LDKF.error("Library is already installed") };

                    // Native To Environment
                    LapysDevelopmentKit.functions.error.nativeToEnvironment = function nativeToEnvironment(feature) { LDKF.error(LDKF.toString(feature) + LDKI.messages.error.nativeToEnvironmentSuffix) };

                // To Debug Message --- CHECKPOINT ---
                LapysDevelopmentKit.functions.toDebugMessage = function toDebugMessage(message) { return LDKI.messages.debugging.prefix + LDKF.toString(message) + LDKI.messages.debugging.suffix };

            /* Objects */
                /* String > Prototype > Character At
                        --- WARN ---
                            #Lapys: Specifically for legacy versions of the Internet Explorer web browser.
                                - Fortunately, syntactic indexing still works for non-string objects.
                                - Unfortunately, this takes priority over default string character indexing in most other programming languages.
                */
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
                        if (' '[0] != ' ') LDKF.error.nativeToEnvironment("`String.prototype.charAt` constructor")
                    }
                })();

            /* Functions */
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
                        // Logic > Error --- WARN (Lapys) -> Prevent erroneously using this method with a non-string.
                        if (typeof string != "string") LDKF.error("First argument must be a string");

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
                                        var iterator = 0;

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
                    LapysDevelopmentKit.functions.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(character) { return character == 'a' || character == 'A' || character == 'b' || character == 'B' || character == 'c' || character == 'C' || character == 'd' || character == 'D' || character == 'e' || character == 'E' || character == 'f' || character == 'F' || character == 'g' || character == 'G' || character == 'h' || character == 'H' || character == 'i' || character == 'I' || character == 'j' || character == 'J' || character == 'k' || character == 'K' || character == 'l' || character == 'L' || character == 'm' || character == 'M' || character == 'n' || character == 'N' || character == 'o' || character == 'O' || character == 'p' || character == 'P' || character == 'q' || character == 'Q' || character == 'r' || character == 'R' || character == 's' || character == 'S' || character == 't' || character == 'T' || character == 'u' || character == 'U' || character == 'v' || character == 'V' || character == 'w' || character == 'W' || character == 'x' || character == 'X' || character == 'y' || character == 'Y' || character == 'z' || character == 'Z' };

                    // Is Digit
                    LapysDevelopmentKit.functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(character) { return character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9' };

                    // Is Numeric
                    LapysDevelopmentKit.functions.stringPrototypeIsNumeric = function stringPrototypeIsNumeric(string) { var iterator = LDKF.stringPrototypeLength(string); while (iterator) if (!LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(string, iterator -= 1))) return false; return true };

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
                        if (begin < end) while (begin != end) stream += LDKF.stringPrototypeCharacterAt(string, (begin += 1) - 1);

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
                                if (matchesLength) while (LDKF.stringPrototypeCharacterAt(string, iterator) == matches[0]) iterator += 1;
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

                                        else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, iterator) == LDKF.stringPrototypeCharacterAt(match, 0)) {
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
                                    while (index && LDKF.stringPrototypeCharacterAt(string, index) == matches[0]) { index -= 1; iterator += 1 }
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

                                        else if (!matchIterator && LDKF.stringPrototypeCharacterAt(string, length - iterator - (matchLength - 1) - 1) == LDKF.stringPrototypeCharacterAt(match, 0)) {
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

                // Is Constructible
                LapysDevelopmentKit.functions.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                // Is Non-Constructible
                LapysDevelopmentKit.functions.isNonConstructible = function isNonConstructible(arg) { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                // Is Null
                LapysDevelopmentKit.functions.isNull = function isNull(arg) { return arg === null && typeof arg == "object" };

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
                            if (LDKF.stringPrototypeCharacterAt(source, 0) == 'c' && LDKF.stringPrototypeCharacterAt(source, 1) == 'l' && LDKF.stringPrototypeCharacterAt(source, 2) == 'a' && LDKF.stringPrototypeCharacterAt(source, 3) == 's' && LDKF.stringPrototypeCharacterAt(source, 4) == 's') return "class";
                            else if (LDKF.stringPrototypeCharacterAt(source, 0) == 'f' && LDKF.stringPrototypeCharacterAt(source, 1) == 'u' && LDKF.stringPrototypeCharacterAt(source, 2) == 'n' && LDKF.stringPrototypeCharacterAt(source, 3) == 'c' && LDKF.stringPrototypeCharacterAt(source, 4) == 't' && LDKF.stringPrototypeCharacterAt(source, 5) == 'i' && LDKF.stringPrototypeCharacterAt(source, 6) == 'o' && LDKF.stringPrototypeCharacterAt(source, 7) == 'n') return (function() {
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
                                LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeCharacterAt(source, 0)) ||
                                LDKF.stringPrototypeCharacterAt(source, 0) == '_' || LDKF.stringPrototypeCharacterAt(source, 0) == '$' || LDKF.stringPrototypeCharacterAt(source, 0) == '(' ||
                                LDKF.stringPrototypeIncludes(source, "=>")
                            ) return "arrow";

                        // Return
                        return null
                    };

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
                        while (iterator > 0) {
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

            /* Functions */
                // Object > Prototype
                    // Has Own Property
                    LapysDevelopmentKit.functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, propertyName) { return LDKO.objectPrototypeHasOwnProperty.call(object, propertyName) };

            /* Objects */
                // Object
                    // Create
                    LapysDevelopmentKit.objects.objectCreate = (function() {
                        // Initialization > Method
                        var method;

                        // Logic
                        if (LDKF.objectPrototypeHasProperty(LDKO.object, "create")) {
                            // Update > Method
                            method = LDKF.objectPrototypeGetProperty(LDKO.object, "create");

                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.create` method")
                        }

                        else
                            // Update > Method
                            method = function create(prototype) {
                                // Function > Constructor
                                function constructor() {}

                                // Modification > Constructor > Prototype
                                constructor.prototype = prototype;

                                // Initialization > Object
                                var object = new constructor;

                                // Modification > Object > Constructor
                                LDKF.isConstructible(prototype) && (object.constructor = constructor);

                                // Return
                                return object
                            };

                        // Return
                        return method
                    })();

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
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.defineProperty` method")

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
                        if (
                            LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertyDescriptor") &&
                            (function() {
                                // Initialization > Is Standard
                                var isStandard = true;

                                // Update > Method
                                method = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyDescriptor");

                                // Error Handling > (...)
                                try { method({}, "") }
                                catch (error) { isStandard = false }

                                // Return
                                return isStandard
                            })()
                        )
                            // Error
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.getOwnPropertyDescriptor` method");

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
                            LDKF.functionPrototypeIsNative(method) || LDKF.error.nativeToEnvironment("`Object.getOwnPropertyNames` method")
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
                                finally { LDKF.objectPrototypeSetProperty(object, propertyName, ownValue); return object[propertyName] }

                                // Return
                                return object[propertyName]
                            }

                            // Update > Method
                            method = LDKC.is__Proto__Defined ?
                                function getPrototypeOf(object) { return getPrototypeValue(object, "__proto__") } :
                                function getPrototypeOf(object) {
                                    // Error Handling > Return
                                    try { return getPrototypeValue(object, "constructor").prototype || LDKO.objectPrototype }
                                    catch (error) {}
                                }
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
                    // Create
                    LapysDevelopmentKit.functions.objectCreate = function objectCreate(prototype) { return LDKO.objectCreate(prototype) };

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
                        LapysDevelopmentKit.functions.objectPrototypeConstructor = function objectPrototypeConstructor(object, STRICT) {
                            // Initialization > (Constructor, Is Constructible)
                            var constructor, isConstructible = LDKF.isConstructible(object);

                            // Error Handling
                            try { if (typeof (constructor = isConstructible ? object.constructor : undefined) != "function") throw {} }
                            catch (error) {
                                // Error Handling > Update > Constructor --- NOTE (Lapys) -> It is assumed the object is of the `Object` constructor.
                                try { constructor = isConstructible ? (LDKF.objectPrototypeGet__Proto__(object) || {}).constructor : undefined }
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

                        // Prototype --- NOTE (Lapys) -> Same as `<object>.__proto__ || Object.getPrototypeOf(<object>)`, not `<object>.prototype`.
                        LapysDevelopmentKit.functions.objectPrototypePrototype = function objectPrototypePrototype(object) { return LDKF.objectGetPrototypeOf(object) || LDKF.objectPrototypeGet__Proto__(object) };

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
                            isWithinScope = 0,
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
                                    (function(stream) { return stream == "class " || stream == "class\n" })(LDKF.stringPrototypeSlice(source, iterator, iterator + 6)) ||
                                    (function(stream) { return stream == "function " || stream == "function(" || stream == "function\n" })(LDKF.stringPrototypeSlice(source, iterator, iterator + 9))
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
                                var iterator = 6; while (LDKF.stringPrototypeCharacterAt(source, iterator) == '_' || LDKF.stringPrototypeCharacterAt(source, iterator) == '$' || LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeCharacterAt(source, iterator))) stream += LDKF.stringPrototypeCharacterAt(source, (iterator += 1) - 1); return stream;

                                // [Break]
                                break;

                            // Default
                            case "default":
                                // (...)
                                var iterator = 9; while (LDKF.stringPrototypeCharacterAt(source, iterator) == '_' || LDKF.stringPrototypeCharacterAt(source, iterator) == '$' || LDKF.stringPrototypeIsAlphabet(LDKF.stringPrototypeCharacterAt(source, iterator))) stream += LDKF.stringPrototypeCharacterAt(source, (iterator += 1) - 1); return stream;

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
                                ) { var argv = process.argv; if (!!argv && typeof argv == "object" && LDKF.isArray(argv)) return argv }
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
            /* Objects */
                // Array
                LapysDevelopmentKit.objects.array = LDKF.objectPrototypeConstructor([]);

                // Function
                LapysDevelopmentKit.objects["function"] = LDKF.objectPrototypeConstructor(function() {});
                    // Prototype
                    LapysDevelopmentKit.objects.functionPrototype = (function() {
                        // Initialization > Prototype
                        var prototype = LDKO["function"] === LDKF.objectPrototypeConstructor(LDKO["function"]) ?
                            LDKF.objectPrototypeGet__Proto__(LDKO["function"]) :
                            LDKF.objectPrototypeGet__Proto__(function() {});

                        // Logic
                        if (!LDKF.isConstructible(prototype) && LDKF.objectPrototypeHasProperty(LDKO["function"], "prototype")) {
                            // Update > Prototype
                            prototype = LDKF.objectPrototypeGetProperty(LDKO["function"], "prototype");

                            // Logic > Return
                            if (!LDKF.functionPrototypeGetName(prototype) && LDKF.functionPrototypeIsNative(prototype)) return prototype;
                            else return
                        }

                        // Return
                        return prototype
                    })();

                // Number
                LapysDevelopmentKit.objects.number = LDKF.objectPrototypeConstructor(0);

                // Regular Expression
                LapysDevelopmentKit.objects.regularExpression = LDKF.objectPrototypeConstructor(/ /);

                // String
                LapysDevelopmentKit.objects.string = LDKF.objectPrototypeConstructor("");

                // Symbol
                LapysDevelopmentKit.objects.symbol = LDKF.objectPrototypeGetProperty(GLOBAL, "Symbol");

            /* Functions */
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
                LapysDevelopmentKit.functions.isFunction = function isFunction(arg, STRICT) {
                    // Return
                    return typeof arg == "function" || (function() {
                        // Logic > Return
                        if (
                            LDKF.objectPrototypeHasProperty(GLOBAL, "ActiveXObject") &&
                            (function(method) { return (function(stream) { return stream == "function" || stream == "undefined" })(typeof method) && LDKF.functionPrototypeIsNative(method, STRICT = true) })(LDKF.objectPrototypeGetProperty(GLOBAL, "ActiveXObject"))
                        ) return typeof arg == "object" && LDKF.functionPrototypeIsDefault(arg, STRICT)

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

                // Function > Prototype --- NOTE (Lapys) -> Try to convert `Function.prototype.apply` and `Function.prototype.call` to constant methods.
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

            /* Functions */
                // Evaluate
                LapysDevelopmentKit.functions.eval = function eval(source) { return LDKO.eval(source) };

            /* Objects */
                // Abort Error
                LapysDevelopmentKit.objects.abortError = LDKT.getObjectNativeErrorByName(GLOBAL, "AbortError");

                // Constraint Error
                LapysDevelopmentKit.objects.constraintError = LDKT.getObjectNativeErrorByName(GLOBAL, "ConstraintError");

                // Constraint Not Satisfied Error
                LapysDevelopmentKit.objects.constraintNotSatisfiedError = LDKT.getObjectNativeErrorByName(GLOBAL, "ConstraintNotSatisfiedError");

                // Data Error
                LapysDevelopmentKit.objects.dataError = LDKT.getObjectNativeErrorByName(GLOBAL, "DataError");

                // Data Clone Error
                LapysDevelopmentKit.objects.dataCloneError = LDKT.getObjectNativeErrorByName(GLOBAL, "DataCloneError");

                // Devices Not Found Error
                LapysDevelopmentKit.objects.devicesNotFoundError = LDKT.getObjectNativeErrorByName(GLOBAL, "DevicesNotFoundError");

                // DOM Error
                LapysDevelopmentKit.objects.domError = LDKC.isBrowserEnvironment ? LDKT.getObjectNativeErrorByName(GLOBAL, "DOMError", STRICT = true) : false;

                // DOM Exception
                LapysDevelopmentKit.objects.domException = LDKC.isBrowserEnvironment ? LDKT.getObjectNativeErrorByName(GLOBAL, "DOMException", STRICT = true) : false;

                // Encoding Error
                LapysDevelopmentKit.objects.encodingError = LDKT.getObjectNativeErrorByName(GLOBAL, "EncodingError");

                // Type Error
                LapysDevelopmentKit.objects.typeError = (function() {
                    // Initialization > Constructor
                    var constructor;

                    // Error Handling > (...)
                    try { undefined[""] }
                    catch (error) { constructor = LDKF.objectPrototypeConstructor(error) }

                    // Return
                    return constructor
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
                        try { throw new LDKO.typeError }
                        catch (error) {
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
                    LapysDevelopmentKit.objects.errorPrototype = LDKF.objectPrototypeGet__Proto__(new LDKO.error);

                // Evaluation Error
                LapysDevelopmentKit.objects.evalError = LDKT.getObjectNativeErrorByName(GLOBAL, "EvalError", STRICT = true);

                // Hierarchy Request Error
                LapysDevelopmentKit.objects.hierarchyRequestError = LDKT.getObjectNativeErrorByName(GLOBAL, "HierarchyRequestError");

                // Index Size Error
                LapysDevelopmentKit.objects.indexSizeError = LDKT.getObjectNativeErrorByName(GLOBAL, "IndexSizeError");

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
                        constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "InternalError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return
                    }

                    // Return
                    return constructor
                })();

                // Invalid Access Error
                LapysDevelopmentKit.objects.invalidAccessError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidAccessError");

                // Invalid Character Error
                LapysDevelopmentKit.objects.invalidCharacterError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidCharacterError");

                // Invalid Modification Error
                LapysDevelopmentKit.objects.invalidModificationError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidModificationError");

                // Invalid Node Type Error
                LapysDevelopmentKit.objects.invalidNodeTypeError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidNodeTypeError");

                // Invalid State Error
                LapysDevelopmentKit.objects.invalidStateError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidStateError");

                // Media Error
                LapysDevelopmentKit.objects.mediaError = LDKT.getObjectNativeErrorByName(GLOBAL, "MediaError", STRICT = true);

                // Media Key Error
                LapysDevelopmentKit.objects.mediaKeyError = LDKT.getObjectNativeErrorByName(GLOBAL, "MediaKeyError");

                // Media Stream Error
                LapysDevelopmentKit.objects.mediaStreamError = LDKT.getObjectNativeErrorByName(GLOBAL, "MediaStreamError");

                // Microsoft Media Key Error
                LapysDevelopmentKit.objects.MSMediaKeyError = LDKT.getObjectNativeErrorByName(GLOBAL, "MSMediaKeyError");

                // Namespace Error
                LapysDevelopmentKit.objects.namespaceError = LDKT.getObjectNativeErrorByName(GLOBAL, "NamespaceError");

                // Navigator User Media Error
                LapysDevelopmentKit.objects.navigatorUserMediaError = LDKT.getObjectNativeErrorByName(GLOBAL, "NavigatorUserMediaError");

                // Network Error
                LapysDevelopmentKit.objects.networkError = LDKT.getObjectNativeErrorByName(GLOBAL, "NetworkError");

                // No Modification Allowed Error
                LapysDevelopmentKit.objects.noModificationAllowedError = LDKT.getObjectNativeErrorByName(GLOBAL, "NoModificationAllowedError");

                // Not Allowed Error
                LapysDevelopmentKit.objects.notAllowedError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotAllowedError");

                // Not Found Error
                LapysDevelopmentKit.objects.notFoundError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotFoundError");

                // Not Readable Error
                LapysDevelopmentKit.objects.notReadableError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotReadableError");

                // Not Supported Error
                LapysDevelopmentKit.objects.notSupportedError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotSupportedError");

                // Operation Error
                LapysDevelopmentKit.objects.operationError = LDKT.getObjectNativeErrorByName(GLOBAL, "OperationError");

                // Over-Constrained Error
                LapysDevelopmentKit.objects.overConstrainedError = LDKT.getObjectNativeErrorByName(GLOBAL, "OverconstrainedError");

                // Permission Denied Error
                LapysDevelopmentKit.objects.permissionDeniedError = LDKT.getObjectNativeErrorByName(GLOBAL, "PermissionDeniedError");

                // Quota Exceeded Error
                LapysDevelopmentKit.objects.quotaExceededError = LDKT.getObjectNativeErrorByName(GLOBAL, "QuotaExceededError");

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
                        constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "RangeError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return
                    }

                    // Return
                    return constructor
                })();

                // Read-Only Error
                LapysDevelopmentKit.objects.readOnlyError = LDKT.getObjectNativeErrorByName(GLOBAL, "ReadOnlyError");

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
                        constructor = LDKF.objectPrototypeGetProperty(GLOBAL, "ReferenceError");

                        // Logic > Return
                        if (test()) return constructor;
                        else return
                    }

                    // Return
                    return constructor
                })();

                // Security Error
                LapysDevelopmentKit.objects.securityError = LDKT.getObjectNativeErrorByName(GLOBAL, "SecurityError");

                // Speech Recognition Error
                LapysDevelopmentKit.objects.speechRecognitionError = LDKT.getObjectNativeErrorByName(GLOBAL, "SpeechRecognitionError");

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

                // Timeout Error
                LapysDevelopmentKit.objects.timeoutError = LDKT.getObjectNativeErrorByName(GLOBAL, "TimeoutError");

                // Track Start Error
                LapysDevelopmentKit.objects.trackStartError = LDKT.getObjectNativeErrorByName(GLOBAL, "TrackStartError");

                // Transaction Inactive Error
                LapysDevelopmentKit.objects.transactionInactiveError = LDKT.getObjectNativeErrorByName(GLOBAL, "TransactionInactiveError");

                // Type Mismatch Error
                LapysDevelopmentKit.objects.typeMismatchError = LDKT.getObjectNativeErrorByName(GLOBAL, "TypeMismatchError");

                // Unknown Error
                LapysDevelopmentKit.objects.unknownError = LDKT.getObjectNativeErrorByName(GLOBAL, "UnknownError");

                // URI Error --- NOTE (Lapys) -> Can be generated via code like `decodeURIComponent("a%AFc")`
                LapysDevelopmentKit.objects.uriError = LDKT.getObjectNativeErrorByName(GLOBAL, "URIError");

                // URL Mismatch Error
                LapysDevelopmentKit.objects.urlMismatchError = LDKT.getObjectNativeErrorByName(GLOBAL, "URLMismatchError");

                // Version Error
                LapysDevelopmentKit.objects.versionError = LDKT.getObjectNativeErrorByName(GLOBAL, "VersionError");

                // Webkit Speech Recognition Error
                LapysDevelopmentKit.objects.webkitSpeechRecognitionError = LDKT.getObjectNativeErrorByName(GLOBAL, "webkitSpeechRecognitionError");

                // Wrong Document Error
                LapysDevelopmentKit.objects.wrongDocumentError = LDKT.getObjectNativeErrorByName(GLOBAL, "WrongDocumentError");

            /* Constants */
                // Has Class Keyword
                LapysDevelopmentKit.constants.hasClassKeyword = (function() {
                    // Initialization > Has Class Keyword
                    var hasClassKeyword = true;

                    // Error Handling > (...)
                    try { LDKO.eval("(class {})") }
                    catch (error) { hasClassKeyword = false }

                    // Return
                    return hasClassKeyword
                })();

        /* Global */
            /* LapysJS --- NOTE (Lapys) -> Initial test for if the library is pre-installed here. */
            (function() {
                // Error
                LDKF.objectPrototypeHasProperty(GLOBAL, "LapysJS") && LDKF.error.libraryIsPreInstalled();

                // Modification > Global > LapysJS
                LDKF.objectDefineProperty(GLOBAL, "LapysJS", {
                    // Configurable
                    configurable: false,

                    // Enumerable
                    enumerable: false,

                    // Value
                    value: new ((function() {
                        // Function > LapysJS --- NOTE (Lapys) -> Constructor...
                        function LapysJS() {};

                        // Modification > LapysJS > Prototype
                        LapysJS.prototype = {tmp: {}};

                        // Return
                        return LapysJS
                    })()),

                    // Writable
                    writable: false
                })
            })();
                // Temporary Data
                    // Error
                    LapysJS.tmp.error = LDKO.error;
                        // Capture Stack Trace
                        LapysJS.tmp.errorCaptureStackTrace = LDKO.errorCaptureStackTrace;

                    // Function > Prototype
                        // Is Native
                        LapysJS.tmp.functionPrototypeIsNative = LDKF.functionPrototypeIsNative;

        /* Lapys Development Kit */
            /* Data */
                // LapysJS Error
                LapysDevelopmentKit.data.lapysJSError = (function() {
                    // Initialization > Constructor
                    var constructor = LDKC.hasClassKeyword ?
                        LDKO.eval("(function() {" +
                            "return class LapysJSError extends LapysJS.tmp.error {" +
                                "constructor(message, stack) {" +
                                    "var length = arguments.length;" +
                                    "(length ? (length == 1 ? super(message) : super(message, stack)) : super());" +
                                    "(typeof LapysJS.tmp.errorCaptureStackTrace == \"function\" && LapysJS.tmp.functionPrototypeIsNative(LapysJS.tmp.errorCaptureStackTrace)) && LapysJS.tmp.errorCaptureStackTrace(this, LapysJSError)" +
                                "}" +
                            "}" +
                        "})()") :
                        function LapysJSError() { return LDKO.error.apply(LDKO, arguments) };

                    // Return
                    return function LapysJSError(message, stack) {
                        // Initialization > (Length, LapysJS Error)
                        var length = LDKF.getArgumentsLength(arguments),
                            lapysJSError = length ? (length == 1 ? new constructor(message) : new constructor(message, stack)) : new constructor;

                        // Modification > LapysJS Error > (__Prototype__, Name)
                        LDKC.hasClassKeyword || LDKF.objectPrototypeSet__Proto__(lapysJSError, LDKF.objectCreate(LDKO.errorPrototype));
                        LDKF.objectPrototypeSetProperty(lapysJSError, "name", "LapysJSError");

                        // Return
                        return lapysJSError
                    }
                })();

                // LapysJS Node List
                // LapysJS Pseudo Number
                // LapysJS Promise
                // LapysJS Safe Number

            /* Functions */
                // Error > Prototype
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

                // Is Attribute --- CHECKPOINT ---

                // Is Document
                LapysDevelopmentKit.functions.isDocument = function isDocument(arg) {
                    // Return
                    return LDKF.isConstructible(arg) && (
                        (LDKF.objectPrototypeConstructor(arg) === LDKO.document && LDKF.objectPrototypePrototype(arg) === LDKO.documentPrototype) ||
                        arg instanceof LDKO.document
                    )
                };

                // Is Document-Like --- NOTE (Lapys) -> The first of confusing test methods.
                LapysDevelopmentKit.functions.isDocumentLike = function isDocumentLike(arg) { return LDKF.isDocument(arg) || LDKF.isHTMLDocument(arg) || LDKF.isXMLDocument(arg) };

                // Is Element
                LapysDevelopmentKit.functions.isElement = function isElement(arg) {
                    // Return
                    return LDKF.isConstructible(arg) && (
                        (LDKF.objectPrototypeConstructor(arg) === LDKO.element && LDKF.objectPrototypePrototype(arg) === LDKO.elementPrototype) ||
                        arg instanceof LDKO.element
                    )
                };

                // Is Element-Like
                LapysDevelopmentKit.functions.isElementLike = function isElementLike(arg) { return LDKF.isElement(arg) || LDKF.isHTMLElement(arg) };

                // Is Event --- CHECKPOINT ---
                // Is Event Target --- CHECKPOINT (Lapys) -> or Document, EventTarget or Node

                // Is HTML Document
                LapysDevelopmentKit.functions.isHTMLDocument = function isHTMLDocument(arg) {
                    // Return
                    return LDKF.isConstructible(arg) && (
                        (LDKF.objectPrototypeConstructor(arg) === LDKO.htmlDocument && LDKF.objectPrototypePrototype(arg) === LDKO.htmlDocumentPrototype) ||
                        arg instanceof LDKO.htmlDocument
                    )
                };

                // Is HTML Element
                LapysDevelopmentKit.functions.isHTMLElement = function isHTMLElement(arg) {
                    // Return
                    return LDKF.isConstructible(arg) && (
                        (LDKF.objectPrototypeConstructor(arg) === LDKO.htmlElement && LDKF.objectPrototypePrototype(arg) === LDKO.htmlElementPrototype) ||
                        arg instanceof LDKO.htmlElement
                    )
                };

                // Is Node
                LapysDevelopmentKit.functions.isNode = function isNode(arg) {
                    // Initialization > (Constructor, Prototype)
                    var constructor = LDKF.objectPrototypeConstructor(arg),
                        prototype = LDKF.objectPrototypePrototype(arg);

                    // Return
                    return LDKF.isConstructible(arg) && (
                        LDKF.isDocumentLike(arg) || LDKF.isElementLike(arg) || (
                            (constructor === LDKO.node && prototype === LDKO.nodePrototype) ||
                            (constructor === LDKO.analyserNode && prototype === LDKO.analyserNodePrototype) ||
                            (constructor === LDKO.audioBufferSourceNode && prototype === LDKO.audioBufferSourceNodePrototype) ||
                            (constructor === LDKO.audioDestinationNode && prototype === LDKO.audioDestinationNodePrototype) ||
                            (constructor === LDKO.audioNode && prototype === LDKO.audioNodePrototype) ||
                            (constructor === LDKO.audioScheduledSourceNode && prototype === LDKO.audioScheduledSourceNodePrototype) ||
                            (constructor === LDKO.audioWorklet && prototype === LDKO.audioWorkletPrototype) ||
                            (constructor === LDKO.biquadFilterNode && prototype === LDKO.biquadFilterNodePrototype) ||
                            (constructor === LDKO.channelSplitterNode && prototype === LDKO.channelSplitterNodePrototype) ||
                            (constructor === LDKO.characterMergerNode && prototype === LDKO.characterMergerNodePrototype) ||
                            (constructor === LDKO.constantSourceNode && prototype === LDKO.constantSourceNodePrototype) ||
                            (constructor === LDKO.convolverNode && prototype === LDKO.convolverNodePrototype) ||
                            (constructor === LDKO.delayNode && prototype === LDKO.delayNodePrototype) ||
                            (constructor === LDKO.dynamicsCompressorNode && prototype === LDKO.dynamicsCompressorNodePrototype) ||
                            (constructor === LDKO.gainNode && prototype === LDKO.gainNodePrototype) ||
                            (constructor === LDKO.iIRFilterNode && prototype === LDKO.iIRFilterNodePrototype) ||
                            (constructor === LDKO.mediaElementAudioSourceNode && prototype === LDKO.mediaElementAudioSourceNodePrototype) ||
                            (constructor === LDKO.mediaStreamAudioDestinationNode && prototype === LDKO.mediaStreamAudioDestinationNodePrototype) ||
                            (constructor === LDKO.mediaStreamAudioSourceNode && prototype === LDKO.mediaStreamAudioSourceNodePrototype) ||
                            (constructor === LDKO.oscillatorNode && prototype === LDKO.oscillatorNodePrototype) ||
                            (constructor === LDKO.pannerNode && prototype === LDKO.pannerNodePrototype) ||
                            (constructor === LDKO.scriptProcessorNode && prototype === LDKO.scriptProcessorNodePrototype) ||
                            (constructor === LDKO.stereoPannerNode && prototype === LDKO.stereoPannerNodePrototype) ||
                            (constructor === LDKO.waveShaperNode && prototype === LDKO.waveShaperNodePrototype) ||
                            arg instanceof LDKO.node
                        )
                    )
                };

                // Is JSON {Object} --- CHECKPOINT ---
                // Is Regular Expression --- CHECKPOINT ---
                // Is Symbol --- CHECKPOINT ---

                // Is XML Document
                LapysDevelopmentKit.functions.isXMLDocument = function isXMLDocument(arg) {
                    // Return
                    return LDKF.isConstructible(arg) && (
                        (LDKF.objectPrototypeConstructor(arg) === LDKO.xmlDocument && LDKF.objectPrototypePrototype(arg) === LDKO.xmlDocumentPrototype) ||
                        arg instanceof LDKO.xmlDocument
                    )
                };

                // Is Window --- CHECKPOINT ---

                // Throw Abort Error
                LapysDevelopmentKit.functions.throwAbortError = function throwAbortError(message) {
                    // Error Handling
                    try { throw new LDKO.abortError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Constraint Error
                LapysDevelopmentKit.functions.throwConstraintError = function throwConstraintError(message) {
                    // Error Handling
                    try { throw new LDKO.constraintError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Constraint Not Satisfied Error
                LapysDevelopmentKit.functions.throwConstraintNotSatisfiedError = function throwConstraintNotSatisfiedError(message) {
                    // Error Handling
                    try { throw new LDKO.constraintNotSatisfiedError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Data Error
                LapysDevelopmentKit.functions.throwDataError = function throwDataError(message) {
                    // Error Handling
                    try { throw new LDKO.dataError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Data Clone Error
                LapysDevelopmentKit.functions.throwDataCloneError = function throwDataCloneError(message) {
                    // Error Handling
                    try { throw new LDKO.dataCloneError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Devices Not Found Error
                LapysDevelopmentKit.functions.throwDevicesNotFoundError = function throwDevicesNotFoundError(message) {
                    // Error Handling
                    try { throw new LDKO.devicesNotFoundError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw DOM Error
                LapysDevelopmentKit.functions.throwDOMError = function throwDOMError(message) {
                    // Error Handling
                    try { throw new LDKO.domError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw DOM Exception
                LapysDevelopmentKit.functions.throwDOMException = function throwDOMException(message) {
                    // Error Handling
                    try { throw new LDKO.domException }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Encoding Error
                LapysDevelopmentKit.functions.throwEncodingError = function throwEncodingError(message) {
                    // Error Handling
                    try { throw new LDKO.encodingError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Error
                LapysDevelopmentKit.functions.throwError = function throwError(message) {
                    // Error Handling
                    try { throw new LDKO.error }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Evaluation Error
                LapysDevelopmentKit.functions.throwEvalError = function throwEvalError(message) {
                    // Error Handling
                    try { throw new LDKO.evalError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Hierarchy Request Error
                LapysDevelopmentKit.functions.throwHierarchyRequestError = function throwHierarchyRequestError(message) {
                    // Error Handling
                    try { throw new LDKO.hierarchyRequestError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Index Size Error
                LapysDevelopmentKit.functions.throwIndexSizeError = function throwIndexSizeError(message) {
                    // Error Handling
                    try { throw new LDKO.indexSizeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Internal Error
                LapysDevelopmentKit.functions.throwInternalError = function throwInternalError(message) {
                    // Error Handling
                    try { throw new LDKO.internalError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Invalid Access Error
                LapysDevelopmentKit.functions.throwInvalidAccessError = function throwInvalidAccessError(message) {
                    // Error Handling
                    try { throw new LDKO.invalidAccessError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Invalid Character Error
                LapysDevelopmentKit.functions.throwInvalidCharacterError = function throwInvalidCharacterError(message) {
                    // Error Handling
                    try { throw new LDKO.invalidCharacterError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Invalid Modification Error
                LapysDevelopmentKit.functions.throwInvalidModificationError = function throwInvalidModificationError(message) {
                    // Error Handling
                    try { throw new LDKO.invalidModificationError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Invalid Node Type Error
                LapysDevelopmentKit.functions.throwInvalidNodeTypeError = function throwInvalidNodeTypeError(message) {
                    // Error Handling
                    try { throw new LDKO.invalidNodeTypeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Invalid State Error
                LapysDevelopmentKit.functions.throwInvalidStateError = function throwInvalidStateError(message) {
                    // Error Handling
                    try { throw new LDKO.invalidStateError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Media Error
                LapysDevelopmentKit.functions.throwMediaError = function throwMediaError(message) {
                    // Error Handling
                    try { throw new LDKO.mediaError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Media Key Error
                LapysDevelopmentKit.functions.throwMediaKeyError = function throwMediaKeyError(message) {
                    // Error Handling
                    try { throw new LDKO.mediaKeyError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Media Stream Error
                LapysDevelopmentKit.functions.throwMediaStreamError = function throwMediaStreamError(message) {
                    // Error Handling
                    try { throw new LDKO.mediaStreamError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Microsoft Media Key Error
                LapysDevelopmentKit.functions.throwMSMediaKeyError = function throwMSMediaKeyError(message) {
                    // Error Handling
                    try { throw new LDKO.msMediaKeyError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Namespace Error
                LapysDevelopmentKit.functions.throwNamespaceError = function throwNamespaceError(message) {
                    // Error Handling
                    try { throw new LDKO.namespaceError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Navigator User Media Error
                LapysDevelopmentKit.functions.throwNavigatorUserMediaError = function throwNavigatorUserMediaError(message) {
                    // Error Handling
                    try { throw new LDKO.navigatorUserMediaError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Network Error
                LapysDevelopmentKit.functions.throwNetworkError = function throwNetworkError(message) {
                    // Error Handling
                    try { throw new LDKO.networkError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw No Modification Allowed Error
                LapysDevelopmentKit.functions.throwNoModificationAllowedError = function throwNoModificationAllowedError(message) {
                    // Error Handling
                    try { throw new LDKO.noModificationAllowedError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Not Allowed Error
                LapysDevelopmentKit.functions.throwNotAllowedError = function throwNotAllowedError(message) {
                    // Error Handling
                    try { throw new LDKO.notAllowedError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Not Found Error
                LapysDevelopmentKit.functions.throwNotFoundError = function throwNotFoundError(message) {
                    // Error Handling
                    try { throw new LDKO.notFoundError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Not Readable Error
                LapysDevelopmentKit.functions.throwNotReadableError = function throwNotReadableError(message) {
                    // Error Handling
                    try { throw new LDKO.notReadableError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Not Supported Error
                LapysDevelopmentKit.functions.throwNotSupportedError = function throwNotSupportedError(message) {
                    // Error Handling
                    try { throw new LDKO.notReadableError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Operation Error
                LapysDevelopmentKit.functions.throwOperationError = function throwOperationError(message) {
                    // Error Handling
                    try { throw new LDKO.operationError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Over-Constrained Error
                LapysDevelopmentKit.functions.throwOverConstrainedError = function throwOverConstrainedError(message) {
                    // Error Handling
                    try { throw new LDKO.overConstrainedError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Permission Denied Error
                LapysDevelopmentKit.functions.throwPermissionDeniedError = function throwPermissionDeniedError(message) {
                    // Error Handling
                    try { throw new LDKO.permissionDeniedError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Quota Exceeded Error
                LapysDevelopmentKit.functions.throwQuotaExceededError = function throwQuotaExceededError(message) {
                    // Error Handling
                    try { throw new LDKO.quotaExceededError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Range Error
                LapysDevelopmentKit.functions.throwRangeError = function throwRangeError(message) {
                    // Error Handling
                    try { throw new LDKO.rangeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Read-Only Error
                LapysDevelopmentKit.functions.throwReadOnlyError = function throwReadOnlyError(message) {
                    // Error Handling
                    try { throw new LDKO.readOnlyError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Range Error
                LapysDevelopmentKit.functions.throwRangeError = function throwRangeError(message) {
                    // Error Handling
                    try { throw new LDKO.rangeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Reference Error
                LapysDevelopmentKit.functions.throwReferenceError = function throwReferenceError(message) {
                    // Error Handling
                    try { throw new LDKO.referenceError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Security Error
                LapysDevelopmentKit.functions.throwSecurityError = function throwSecurityError(message) {
                    // Error Handling
                    try { throw new LDKO.securityError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Speech Recognition Error
                LapysDevelopmentKit.functions.throwSpeechRecognitionError = function throwSpeechRecognitionError(message) {
                    // Error Handling
                    try { throw new LDKO.rangeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Syntax Error
                LapysDevelopmentKit.functions.throwSyntaxError = function throwSyntaxError(message) {
                    // Error Handling
                    try { throw new LDKO.syntaxError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Timeout Error
                LapysDevelopmentKit.functions.throwTimeoutError = function throwTimeoutError(message) {
                    // Error Handling
                    try { throw new LDKO.timeoutError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Track Start Error
                LapysDevelopmentKit.functions.throwTrackStartError = function throwTrackStartError(message) {
                    // Error Handling
                    try { throw new LDKO.trackStartError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Transaction Inactive Error
                LapysDevelopmentKit.functions.throwTransactionInactiveError = function throwTransactionInactiveError(message) {
                    // Error Handling
                    try { throw new LDKO.transactionInactiveError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Type Error
                LapysDevelopmentKit.functions.throwTypeError = function throwTypeError(message) {
                    // Error Handling
                    try { throw new LDKO.typeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Type Mismatch Error
                LapysDevelopmentKit.functions.throwTypeMismatchError = function throwTypeMismatchError(message) {
                    // Error Handling
                    try { throw new LDKO.typeMismatchError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Unknown Error
                LapysDevelopmentKit.functions.throwUnknownError = function throwUnknownError(message) {
                    // Error Handling
                    try { throw new LDKO.unknownError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw URI Error
                LapysDevelopmentKit.functions.throwURIError = function throwURIError(message) {
                    // Error Handling
                    try { throw new LDKO.uriError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw URL Mismatch Error
                LapysDevelopmentKit.functions.throwURLMismatchError = function throwURLMismatchError(message) {
                    // Error Handling
                    try { throw new LDKO.rangeError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Version Error
                LapysDevelopmentKit.functions.throwVersionError = function throwVersionError(message) {
                    // Error Handling
                    try { throw new LDKO.versionError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Webkit Speech Recognition Error
                LapysDevelopmentKit.functions.throwWebkitSpeechRecognitionError = function throwWebkitSpeechRecognitionError(message) {
                    // Error Handling
                    try { throw new LDKO.webkitSpeechRecognitionError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

                // Throw Wrong Document Error
                LapysDevelopmentKit.functions.throwWrongDocumentError = function throwWrongDocumentError(message) {
                    // Error Handling
                    try { throw new LDKO.versionError }
                    catch (error) { LDKF.errorPrototypeSetMessage(error, message); throw error; return error }
                };

            /* Constants, Objects */
                // Active X Object
                LapysDevelopmentKit.objects.activeXObject = LDKT.getObjectNativeConstructorByName(GLOBAL, "ActiveXObject");
                    // Prototype
                    LapysDevelopmentKit.objects.activeXObjectPrototype = LDKF.objectPrototypeGetProperty(LDKO.activeXObject, "prototype");

                // Analyser Node
                LapysDevelopmentKit.objects.analyserNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AnalyserNode");
                    // Prototype
                    LapysDevelopmentKit.objects.analyserNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.analyserNode, "prototype");

                // Animation Event
                LapysDevelopmentKit.objects.animationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "AnimationEvent", STRICT = true);

                // Application Cache Error Event
                LapysDevelopmentKit.objects.applicationCacheErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ApplicationCacheErrorEvent");

                // Attribute
                LapysDevelopmentKit.objects.attr = LDKT.getObjectNativeConstructorByName(GLOBAL, "Attr", STRICT = true);

                // Audio Buffer Source Node
                LapysDevelopmentKit.objects.audioBufferSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AudioBufferSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.audioBufferSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.audioBufferSourceNode, "prototype");

                // Audio Destination Node
                LapysDevelopmentKit.objects.audioDestinationNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AudioDestinationNode");
                    // Prototype
                    LapysDevelopmentKit.objects.audioDestinationNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.audioDestinationNode, "prototype");

                // Audio Node
                LapysDevelopmentKit.objects.audioNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AudioNode");
                    // Prototype
                    LapysDevelopmentKit.objects.audioNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.audioNode, "prototype");

                // Audio Processing Event
                LapysDevelopmentKit.objects.audioProcessingEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "AudioProcessingEvent");

                // Audio Scheduled Source Node
                LapysDevelopmentKit.objects.audioScheduledSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AudioScheduledSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.audioScheduledSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.audioScheduledSourceNode, "prototype");

                // Audio Worklet Node
                LapysDevelopmentKit.objects.audioWorkletNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AudioWorkletNode");
                    // Prototype
                    LapysDevelopmentKit.objects.audioWorkletNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.audioWorkletNode, "prototype");

                // Before Install Prompt Event
                LapysDevelopmentKit.objects.beforeInstallPromptEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "BeforeInstallPromptEvent");

                // Before Unload Event
                LapysDevelopmentKit.objects.beforeUnloadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "BeforeUnloadEvent", STRICT = true);

                // Bi-quad Filter Node
                LapysDevelopmentKit.objects.biquadFilterNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "BiquadFilterNode");
                    // Prototype
                    LapysDevelopmentKit.objects.biquadFilterNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.biquadFilterNode, "prototype");

                // Blob Event
                LapysDevelopmentKit.objects.blobEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "BlobEvent");

                // Channel Splitter Node
                LapysDevelopmentKit.objects.channelSplitterNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ChannelSplitterNode");
                    // Prototype
                    LapysDevelopmentKit.objects.channelSplitterNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.channelSplitterNode, "prototype");

                // Character Data
                LapysDevelopmentKit.objects.characterData = LDKT.getObjectNativeConstructorByName(GLOBAL, "CharacterData", STRICT = true);

                // Channel Merger Node
                LapysDevelopmentKit.objects.characterMergerNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "CharacterMergerNode");
                    // Prototype
                    LapysDevelopmentKit.objects.characterMergerNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.characterMergerNode, "prototype");

                // Clear Timeout
                LapysDevelopmentKit.objects.clearTimeout = (function() {
                    // Initialization > (..., Method)
                    var environmentVendorIsNode_js = LDKT.environmentVendorIs("Node.js"),
                        method = LDKF.objectPrototypeGetProperty(GLOBAL, "clearTimeout");

                    // Logic > (...)
                    if (
                        (environmentVendorIsNode_js ? "clearTimeout" : LDKF.functionPrototypeGetName(method)) == "clearTimeout" &&
                        (environmentVendorIsNode_js || LDKF.functionPrototypeIsNative(method))
                    ) return method;
                    else LDKF.error.nativeToEnvironment("`clearTimeout` function")
                })();

                // Clipboard Event
                LapysDevelopmentKit.objects.clipboardEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ClipboardEvent");

                // Close Event
                LapysDevelopmentKit.objects.closeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "CloseEvent", STRICT = true);

                // Composition Event
                LapysDevelopmentKit.objects.compositionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "CompositionEvent", STRICT = true);

                // Console --- NOTE (Lapys) -> The test for the `console` methods are similar to most other native constructor tests.
                LapysDevelopmentKit.constants.console = (function() {
                    // Initialization > (Object, (Has) Prototype)
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "console"),
                        prototype = LDKF.objectPrototypeGet__Proto__(object),
                        hasPrototype = !LDKF.isVoid(prototype);

                    // Modification > (Lapys Development Kit > Objects) > (Console > Prototype)
                    hasPrototype && (LDKO.consolePrototype = prototype);

                    // Logic > (...)
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
                    LapysDevelopmentKit.objects.consoleGroupEnd = (function() {
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

                // Constant Source Node
                LapysDevelopmentKit.objects.constantSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ConstantSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.constantSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.constantSourceNode, "prototype");

                // Convolver Node
                LapysDevelopmentKit.objects.convolverNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ConvolverNode");
                    // Prototype
                    LapysDevelopmentKit.objects.convolverNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.convolverNode, "prototype");

                // Custom Event
                LapysDevelopmentKit.objects.customEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "CustomEvent", STRICT = true);

                // Date
                LapysDevelopmentKit.objects.date = LDKT.getObjectNativeConstructorByName(GLOBAL, "Date");

                // Delay Node
                LapysDevelopmentKit.objects.delayNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "DelayNode");
                    // Prototype
                    LapysDevelopmentKit.objects.delayNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.delayNode, "prototype");

                // Device Motion Event
                LapysDevelopmentKit.objects.deviceMotionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DeviceMotionEvent", STRICT = true);

                // Device Orientation Event
                LapysDevelopmentKit.objects.deviceOrientationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DeviceOrientationEvent", STRICT = true);

                // Document --- NOTE (Lapys) -> The constant points to the document initiating this script.
                LapysDevelopmentKit.objects.document = LDKT.getObjectNativeConstructorByName(GLOBAL, "Document", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.documentPrototype = LDKF.objectPrototypeGetProperty(LDKO.document, "prototype");

                // HTML Document
                LapysDevelopmentKit.objects.htmlDocument = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLDocument", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlDocumentPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlDocument, "prototype");

                // XML Document
                LapysDevelopmentKit.objects.xmlDocument = LDKT.getObjectNativeConstructorByName(GLOBAL, "XMLDocument", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.xmlDocumentPrototype = LDKF.objectPrototypeGetProperty(LDKO.xmlDocument, "prototype");

                // Document
                LapysDevelopmentKit.constants.document = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "document");

                    // Logic
                    if (LDKC.isBrowserEnvironment)
                        // Logic > (...)
                        if (
                            (function(stream) { return stream == "[object]" || stream == "[object Document]" || stream == "[object HTMLDocument]" })(LDKF.toString(object)) &&
                            (function(constructor) { return LDKF.isNull(constructor) || constructor === LDKO.document || constructor === LDKO.htmlDocument || constructor === LDKO.object })(LDKF.objectPrototypeConstructor(object, STRICT = true)) &&
                            (function(prototype) { return LDKF.isVoid(prototype) || (LDKF.isVoid(LDKO.documentPrototype) ? false : prototype === LDKO.documentPrototype) || (LDKF.isVoid(LDKO.htmlDocumentPrototype) ? false : prototype === LDKO.htmlDocumentPrototype) })(LDKF.objectPrototypePrototype(object))
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`document` object")
                })();

                // Document Fragment
                LapysDevelopmentKit.objects.documentFragment = LDKT.getObjectNativeConstructorByName(GLOBAL, "DocumentFragment", STRICT = true);

                // Document Type
                LapysDevelopmentKit.objects.documentType = LDKT.getObjectNativeConstructorByName(GLOBAL, "DocumentType", STRICT = true);

                // DOM Rectangle
                LapysDevelopmentKit.objects.domRect = LDKT.getObjectNativeConstructorByName(GLOBAL, "DOMRect");

                // Drag Event
                LapysDevelopmentKit.objects.dragEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DragEvent", STRICT = true);

                // Dynamics Compressor Node
                LapysDevelopmentKit.objects.dynamicsCompressorNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "DynamicsCompressorNode");
                    // Prototype
                    LapysDevelopmentKit.objects.dynamicsCompressorNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.dynamicsCompressorNode, "prototype");

                // Element
                LapysDevelopmentKit.objects.element = LDKT.getObjectNativeConstructorByName(GLOBAL, "Element", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.elementPrototype = LDKF.objectPrototypeGetProperty(LDKO.element, "prototype");

                // Enter Picture-in-Picture Event
                LapysDevelopmentKit.objects.enterPictureInPictureEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "EnterPictureInPictureEvent");

                // Error Event
                LapysDevelopmentKit.objects.errorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ErrorEvent", STRICT = true);

                // Event
                LapysDevelopmentKit.objects.event = LDKT.getObjectNativeConstructorByName(GLOBAL, "Event", STRICT = true);

                // Event Target
                LapysDevelopmentKit.objects.eventTarget = LDKT.getObjectNativeConstructorByName(GLOBAL, "EventTarget");

                // File
                LapysDevelopmentKit.objects.file = LDKT.getObjectNativeConstructorByName(GLOBAL, "File", STRICT = true);

                // Focus Event
                LapysDevelopmentKit.objects.focusEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "FocusEvent", STRICT = true);

                // Font Face Set Load Event
                LapysDevelopmentKit.objects.fontFaceSetLoadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "FontFaceSetLoadEvent");

                // Gain Node
                LapysDevelopmentKit.objects.gainNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "GainNode");
                    // Prototype
                    LapysDevelopmentKit.objects.gainNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.gainNode, "prototype");

                // Gamepad Event
                LapysDevelopmentKit.objects.gamepadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "GamepadEvent");

                // Hash Change Event
                LapysDevelopmentKit.objects.hashChangeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "HashChangeEvent");

                // HTML All Collection
                LapysDevelopmentKit.objects.htmlAllCollection = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLAllCollection", STRICT = true);

                // HTML Audio Element
                LapysDevelopmentKit.objects.htmlAudioCollection = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLAudioCollection", STRICT = true);

                // HTML Body Element
                LapysDevelopmentKit.objects.htmlBodyElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLBodyElement", STRICT = true);

                // HTML Collection
                LapysDevelopmentKit.objects.htmlCollection = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLCollection", STRICT = true);

                // HTML Element
                LapysDevelopmentKit.objects.htmlElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlElement, "prototype");

                // HTML Head Element
                LapysDevelopmentKit.objects.htmlHeadElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLHeadElement", STRICT = true);

                // HTML Image Element
                LapysDevelopmentKit.objects.htmlImageElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLImageElement", STRICT = true);

                // HTML Input Element
                LapysDevelopmentKit.objects.htmlInputElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLInputElement", STRICT = true);

                // HTML Internal Frame Element
                LapysDevelopmentKit.objects.htmlIFrameElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLIFrameElement", STRICT = true);

                // HTML HTML Element
                LapysDevelopmentKit.objects.htmlHtmlElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLHtmlElement", STRICT = true);

                // HTML Table Element
                LapysDevelopmentKit.objects.htmlTableElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableElement", STRICT = true);

                // HTML Table Caption Element
                LapysDevelopmentKit.objects.htmlTableCaptionElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableCaptionElement", STRICT = true);

                // HTML Table Cell Element
                LapysDevelopmentKit.objects.htmlTableCellElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableCellElement", STRICT = true);

                // HTML Table Column Element
                LapysDevelopmentKit.objects.htmlTableColumnElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableColumnElement", STRICT = true);

                // HTML Table Row Element
                LapysDevelopmentKit.objects.htmlTableRowElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableRowElement", STRICT = true);

                // HTML Table Section Element
                LapysDevelopmentKit.objects.htmlTableSectionElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableSectionElement", STRICT = true);

                // HTML Textarea Element
                LapysDevelopmentKit.objects.htmlTextAreaElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTextAreaElement", STRICT = true);

                // HTML Time Element
                LapysDevelopmentKit.objects.htmlTimeElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTimeElement", STRICT = true);

                // HTML Title Element
                LapysDevelopmentKit.objects.htmlTitleElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTitleElement", STRICT = true);

                // HTML Script Element
                LapysDevelopmentKit.objects.htmlScriptElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLScriptElement", STRICT = true);

                // HTML Style Element
                LapysDevelopmentKit.objects.htmlStyleElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLStyleElement", STRICT = true);

                // HTML Unknown Element
                LapysDevelopmentKit.objects.htmlUnknownElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLUnknownElement", STRICT = true);

                // HTML Video Element
                LapysDevelopmentKit.objects.htmlVideoElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLVideoElement", STRICT = true);

                // IDB Version Change Event
                LapysDevelopmentKit.objects.iDBVersionChangeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "IDBVersionChangeEvent", STRICT = true);

                // IIR Filter Node
                LapysDevelopmentKit.objects.iIRFilterNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "IIRFilterNode");
                    // Prototype
                    LapysDevelopmentKit.objects.iIRFilterNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.iIRFilterNode, "prototype");

                // Image
                LapysDevelopmentKit.objects.image = (function() {
                    // Error Handling > Return
                    try { return LDKT.getObjectNativeConstructorByName(GLOBAL, "Image") } catch (error) {}

                    // Return
                    return LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "Image"), "HTMLImageElement", STRICT = true)
                })();

                // Input Event
                LapysDevelopmentKit.objects.inputEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "InputEvent");

                // Keyboard Event
                LapysDevelopmentKit.objects.keyboardEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "KeyboardEvent", STRICT = true);

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

                // Media Element Audio Source Node
                LapysDevelopmentKit.objects.mediaElementAudioSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaElementAudioSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaElementAudioSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaElementAudioSourceNode, "prototype");

                // Media Encrypted Event
                LapysDevelopmentKit.objects.mediaEncryptedEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaEncryptedEvent");

                // Media Key Message Event
                LapysDevelopmentKit.objects.mediaKeyMessageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaKeyMessageEvent");

                // Media List
                LapysDevelopmentKit.objects.mediaList = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaList", STRICT = true);

                // Media Query List Event
                LapysDevelopmentKit.objects.mediaQueryListEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaQueryListEvent");

                // Media Stream Audio Destination Node
                LapysDevelopmentKit.objects.mediaStreamAudioDestinationNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamAudioDestinationNode");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamAudioDestinationNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamAudioDestinationNode, "prototype");

                // Media Stream Audio Source Node
                LapysDevelopmentKit.objects.mediaStreamAudioSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamAudioSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamAudioSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamAudioSourceNode, "prototype");

                // Media Stream Event
                LapysDevelopmentKit.objects.mediaStreamEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamEvent");

                // Media Stream Track Event
                LapysDevelopmentKit.objects.mediaStreamTrackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamTrackEvent");

                // Message Event
                LapysDevelopmentKit.objects.messageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MessageEvent", STRICT = true);

                // MIDI Connection Event
                LapysDevelopmentKit.objects.mIDIConnectionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MIDIConnectionEvent");

                // MIDI Message Event
                LapysDevelopmentKit.objects.mIDIMessageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MIDIMessageEvent");

                // Mouse Event
                LapysDevelopmentKit.objects.mouseEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MouseEvent", STRICT = true);

                // Mouse Wheel
                LapysDevelopmentKit.objects.mouseWheelEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MouseWheelEvent", STRICT = true);

                // Mutation Event
                LapysDevelopmentKit.objects.mutationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaEncryptedEvent", STRICT = true);

                // Named Node Map
                LapysDevelopmentKit.objects.namedNodeMap = LDKT.getObjectNativeConstructorByName(GLOBAL, "NamedNodeMap", STRICT = true);

                // Node
                LapysDevelopmentKit.objects.node = LDKT.getObjectNativeConstructorByName(GLOBAL, "Node", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.nodePrototype = LDKF.objectPrototypeGetProperty(LDKO.node, "prototype");

                // Node List
                LapysDevelopmentKit.objects.nodeList = LDKT.getObjectNativeConstructorByName(GLOBAL, "NodeList", STRICT = true);

                // Notification
                LapysDevelopmentKit.objects.notification = LDKT.getObjectNativeConstructorByName(GLOBAL, "Notification");

                // Offline Audio Completion Event
                LapysDevelopmentKit.objects.offlineAudioCompletionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "OfflineAudioCompletionEvent");

                // Oscillator Node
                LapysDevelopmentKit.objects.oscillatorNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "OscillatorNode");
                    // Prototype
                    LapysDevelopmentKit.objects.oscillatorNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.oscillatorNode, "prototype");

                // Page Transition Event
                LapysDevelopmentKit.objects.pageTransitionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PageTransitionEvent", STRICT = true);

                // Panner Node
                LapysDevelopmentKit.objects.pannerNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "PannerNode", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.pannerNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.pannerNode, "prototype");

                // Payment Request Update Event
                LapysDevelopmentKit.objects.paymentRequestUpdateEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PaymentRequestUpdateEvent");

                // Performance
                LapysDevelopmentKit.objects.performance = LDKT.getObjectNativeConstructorByName(GLOBAL, "Performance", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.performancePrototype = LDKF.objectPrototypeGetProperty(LDKO.performance, "prototype");

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
                            (function(prototype) { return prototype === LDKO.performancePrototype || LDKF.isVoid(prototype) })(LDKF.objectPrototypePrototype(object))
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`performance` object")
                })();

                // Pointer Event
                LapysDevelopmentKit.objects.pointerEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PointerEvent", STRICT = true);

                // Pop State Event
                LapysDevelopmentKit.objects.popStateEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PopStateEvent", STRICT = true);

                // Presentation Connection Available Event
                LapysDevelopmentKit.objects.presentationConnectionAvailableEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PresentationConnectionAvailableEvent");

                // Presentation Connection Close Event
                LapysDevelopmentKit.objects.presentationConnectionCloseEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PresentationConnectionCloseEvent");

                // Progress Event
                LapysDevelopmentKit.objects.progressEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ProgressEvent", STRICT = true);

                // Promise Rejection Event
                LapysDevelopmentKit.objects.promiseRejectionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PromiseRejectionEvent");

                // Radio Node List
                LapysDevelopmentKit.objects.radioNodeList = LDKT.getObjectNativeConstructorByName(GLOBAL, "RadioNodeList");

                // Range
                LapysDevelopmentKit.objects.range = LDKT.getObjectNativeConstructorByName(GLOBAL, "Range", STRICT = true);

                // Regular Expression
                LapysDevelopmentKit.objects.regularExpression = LDKT.getObjectNativeConstructorByName(GLOBAL, "RegExp");
                    // Prototype
                    LapysDevelopmentKit.objects.regularExpressionPrototype = LDKF.objectPrototypeGetProperty(LDKO.regularExpression, "prototype");

                // RTC Data Channel Event
                LapysDevelopmentKit.objects.rTCDataChannelEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCDataChannelEvent");

                // RTC DTMF Tone Change Event
                LapysDevelopmentKit.objects.rTCDTMFToneChangeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCDTMFToneChangeEvent");

                // RTC Peer Connection Ice Event
                LapysDevelopmentKit.objects.rTCPeerConnectionIceEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCPeerConnectionIceEvent");

                // RTC Track Event
                LapysDevelopmentKit.objects.rTCTrackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCTrackEvent");

                // Script Processor Node
                LapysDevelopmentKit.objects.scriptProcessorNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ScriptProcessorNode");
                    // Prototype
                    LapysDevelopmentKit.objects.scriptProcessorNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.scriptProcessorNode, "prototype");

                // Security Policy Violation Event
                LapysDevelopmentKit.objects.securityPolicyViolationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SecurityPolicyViolationEvent");

                // Selection
                LapysDevelopmentKit.objects.selection = LDKT.getObjectNativeConstructorByName(GLOBAL, "Selection", STRICT = true);

                // Sensor Error Event
                LapysDevelopmentKit.objects.sensorErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SensorErrorEvent");

                // Set Timeout
                LapysDevelopmentKit.objects.setTimeout = (function() {
                    // Initialization > (..., Method)
                    var environmentVendorIsNode_js = LDKT.environmentVendorIs("Node.js"),
                        method = LDKF.objectPrototypeGetProperty(GLOBAL, "setTimeout");

                    // Logic > (...)
                    if (
                        LDKF.functionPrototypeGetName(method) == "setTimeout" &&
                        (environmentVendorIsNode_js || LDKF.functionPrototypeIsNative(method))
                    ) return method;
                    else LDKF.error.nativeToEnvironment("`setTimeout` function")
                })();

                // Speech Synthesis Error Event
                LapysDevelopmentKit.objects.speechSynthesisErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SpeechSyntehsisErrorEvent");

                // Speech Synthesis Event
                LapysDevelopmentKit.objects.speechSynthesisEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SpeechSynthesisEvent");

                // Stereo Panner Node
                LapysDevelopmentKit.objects.stereoPannerNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "StereoPannerNode");
                    // Prototype
                    LapysDevelopmentKit.objects.stereoPannerNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.stereoPannerNode, "prototype");

                // Storage Event
                LapysDevelopmentKit.objects.storageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "StorageEvent", STRICT = true);

                // Text
                LapysDevelopmentKit.objects.text = LDKT.getObjectNativeConstructorByName(GLOBAL, "Text", STRICT = true);

                // Text Event
                LapysDevelopmentKit.objects.textEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TextEvent", STRICT = true);

                // Touch
                LapysDevelopmentKit.objects.touch = LDKT.getObjectNativeConstructorByName(GLOBAL, "Touch");

                // Touch Event
                LapysDevelopmentKit.objects.touchEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TouchEvent");

                // Track Event
                LapysDevelopmentKit.objects.trackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TrackEvent", STRICT = true);

                // Transition Event
                LapysDevelopmentKit.objects.transitionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TransitionEvent", STRICT = true);

                // UI Event
                LapysDevelopmentKit.objects.uIEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "UIEvent", STRICT = true);

                // URL
                LapysDevelopmentKit.objects.url = LDKT.getObjectNativeConstructorByName(GLOBAL, "URL", STRICT = true);

                // USB Connection Event
                LapysDevelopmentKit.objects.uSBConnectionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "USBConnectionEvent");

                // Wave Shaper Node
                LapysDevelopmentKit.objects.waveShaperNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "WaveShaperNode");
                    // Prototype
                    LapysDevelopmentKit.objects.waveShaperNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.waveShaperNode, "prototype");

                // Web GL Context Event
                LapysDevelopmentKit.objects.webGLContextEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "WebGLContextEvent", STRICT = true);

                // Webkit Speech Recognition Event
                LapysDevelopmentKit.objects.webkitSpeechRecognitionEvent = LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "webkitSpeechRecognitionEvent"), "SpeechRecognitionEvent", STRICT = true);

                // Wheel Event
                LapysDevelopmentKit.objects.wheelEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "WheelEvent", STRICT = true);

                // Window
                LapysDevelopmentKit.objects.window = LDKT.getObjectNativeConstructorByName(GLOBAL, "Window", STRICT = true);

                // XML HTTP Request Event Target
                LapysDevelopmentKit.objects.xmlHttpRequestEventTarget = LDKT.getObjectNativeConstructorByName(GLOBAL, "XMLHttpRequestEventTarget", STRICT = true);

    /* Function */
        // Initiate
        function INITIATE() {}

        // Update
        function UPDATE() {}

        // Terminate
        function TERMINATE() { console.log(LapysJS) }

    // Initiate
    try { STATE || INITIATE() } catch (error) { STATE = -1 }

    // Update
    try { STATE || UPDATE() } catch (error) { STATE = -2 }

    // Terminate
    try { STATE || TERMINATE() } catch (error) { STATE = -3 }

    // Return
    return STATE
})()
