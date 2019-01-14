/**
    @author: Lapys Dev Team
    @description: LapysJS is an intuitive, minimalist web library for quick development.
    @version: 0.0.7
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Supported development environments:
                -- Android (browser)
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
                -- Node (runtime)
                -- Opera (browser)
                -- Safari (browser)
                -- UC Browser (browser)

            - The library makes an effort to use only native features of JavaScript to allow for interoperable compatibility with legacy environments
                    and also avoids over-use (if any) of specific vendor (or engine-dependent) features (e.g.: The `requestAnimationFrame` function).
                    -- To compensate for the lack of modern JavaScript features in legacy environments, the library uses an LDK and intuitive solutions to bypass such problems,
                        that is not to say that such a solution is infallible or perfectly executable (e.g.: The `console` object's methods).
                    -- Accessors for example are not available with some ECMAScript standards,
                        so alternative features (such as functions) are in place for older environments and accessors are used typically with more modern standards (or APIs).
                    -- Another case scenario with varying JavaScript environments is the situation of immutable object properties (e.g.: `Arguments.prototype.length` and `<constructor>.prototype`).

            - Over its years of development, the library is still a bare-bones version of what it could be.

    --- UPDATE REQUIRED ---
        #Lapys:
            - `DOMStringList`, `DOMStringMap`, `HTMLBodyElement` and `StyleSheetList` need interfaces within the LDK.
            - Test all explicitly requested methods & properties.
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

                // Information
                that.information = {data: {lists: {}}, messages: {debugging: {}, error: {}}};

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

        // Private --- NOTE (Lapys) -> Object passed around within the Lapys Development Kit only.
        PRIVATE = null,

        // Strict --- NOTE (Lapys) -> Cause alternative logical paths within a function or method.
        STRICT = false,

        // State --- NOTE (Lapys) -> A zero state means null errors.
        STATE = 0,
            // Initiate Error
            INITIATE_ERROR_STATE = -2,

            // Update Error
            UPDATE_ERROR_STATE = -3,

            // Terminate Error
            TERMINATE_ERROR_STATE = -4,

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
                // Data
                    // Lists
                        // Frames
                        LapysDevelopmentKit.information.data.lists.frames = [];

                        // Timeouts
                        LapysDevelopmentKit.information.data.lists.timeouts = [];

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
                // Arguments to Console Stream
                LapysDevelopmentKit.test.argumentsToConsoleStream = function argumentsToConsoleStream() {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = LDKF.getArgumentsLength(arguments), length = iterator, stream = "";

                    // Loop > Update > Stream
                    while (iterator) stream += LDKF.toString(arguments[length - (iterator -= 1) - 1]) + (iterator ? ' ' : "");

                    // Return
                    return stream
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

                // Is Constructible Object --- WARN (Lapys) -> Defer to `LapysDevelopmentKit.functions.isConstructible`, instead.
                LapysDevelopmentKit.test.isConstructibleObject = function isConstructibleObject(arg, constructor, prototype, STRICT) {
                    // Return
                    return (STRICT ? true : typeof arg == "object") && LDKF.isConstructible(arg) && (
                        (LDKF.objectPrototypeConstructor(arg) === constructor && LDKF.objectPrototypePrototype(arg) === prototype) ||
                        arg instanceof constructor
                    )
                };

                // Is Native Constructor
                LapysDevelopmentKit.test.isNativeConstructor = function isNativeConstructor(constructor, constructorName, STRICT) {
                    // Logic
                    if (!LDKF.isVoid(constructor))
                        // Logic > (...)
                        if (
                            (STRICT ? ((function(stream) { return stream == "[object " + constructorName + ']' || stream == "[object " + constructorName + "Constructor]" })(LDKF.toString(constructor))  && typeof constructor == "object") : false) ||
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

                // Is Strictly Constructible Object
                LapysDevelopmentKit.test.isStrictlyConstructibleObject = function isStrictlyConstructibleObject(arg, constructor, prototype, STRICT) {
                    // Return
                    return (STRICT ? true : typeof arg == "object") && LDKF.isConstructible(arg) && (
                        LDKF.objectPrototypeConstructor(arg) === constructor &&
                        (function(argPrototype) { return LDKC.hasActiveXObjectConstructor && LDKF.isVoid(argPrototype) ? true : argPrototype === prototype })(LDKF.objectPrototypePrototype(arg))
                    )
                };

                // Throw Error --- WARN (Lapys) -> Defer to `LapysDevelopmentKit.functions.error` instead.
                LapysDevelopmentKit.test.throwError = function throwError(message) { throw (LDKI.messages.debugging.prefix + message + LDKI.messages.debugging.suffix) };

                /* Method Is Standard
                        --- NOTE ---
                            #Lapys: Crude version of `LapysDevelopmentKit.functions.functionPrototypeIsNative`
                                for testing `Function.prototype.apply` and `Function.prototype.call` to be native methods.

                                - Defer to `LapysDevelopmentKit.functions.functionPrototypeIsNative` instead.
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

                    // Is Negative Infinity
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeInfinity = function numberPrototypeIsNegativeInfinity(number) { return LDKF.numberPrototypeIsInfinite(number) && LDKF.numberPrototypeIsNegative(number) };

                    // Is Negative Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeInteger = function numberPrototypeIsNegativeInteger(number) { return LDKF.numberPrototypeIsInteger(number) && LDKF.numberPrototypeIsNegative(number) };

                    // Is Negative Zero
                    LapysDevelopmentKit.functions.numberPrototypeIsNegativeZero = function numberPrototypeIsNegativeZero(number) { return LDKF.objectIs(number, -0) };

                    // Is Non-Integer
                    LapysDevelopmentKit.functions.numberPrototypeIsNonInteger = function numberPrototypeIsNonInteger(number) { return !LDKF.numberPrototypeIsInteger(number) };

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
                    LapysDevelopmentKit.functions.error.libraryIsPreInstalled = function libraryIsPreInstalled() { return LDKF.error("The library is already installed") };

                    // Native To Environment
                    LapysDevelopmentKit.functions.error.nativeToEnvironment = function nativeToEnvironment(feature) { return LDKF.error("The " + LDKF.toString(feature) + LDKI.messages.error.nativeToEnvironmentSuffix) };

                    // Type --- NOTE (Lapys) -> Types of LapysJS Error.
                    LapysDevelopmentKit.functions.error.type = {
                        // Initiate
                        initiate: function initiate(message) { throw new LDKD.lapysJSInitiateError(LDKF.toDebugMessage.apply(LDKD, arguments)) },

                        // Update
                        update: function update(message) { throw new LDKD.lapysJSUpdateError(LDKF.toDebugMessage.apply(LDKD, arguments)) },

                        // Terminate
                        terminate: function terminate(message) { throw new LDKD.lapysJSTerminateError(LDKF.toDebugMessage.apply(LDKD, arguments)) }
                    };

                // To Debug Message
                LapysDevelopmentKit.functions.toDebugMessage = function toDebugMessage(message) { return LDKI.messages.debugging.prefix + LDKF.toString(message) + LDKI.messages.debugging.suffix };

            /* Objects */
                // String > Prototype
                    /* Character At
                            --- WARN ---
                                #Lapys: Specifically for legacy versions of the Internet Explorer web browser.
                                    - Fortunately, syntactic indexing still works for non-string objects.
                                    - Unfortunately, this takes priority over default string character indexing in most other programming languages.
                    */
                    LapysDevelopmentKit.objects.stringPrototypeCharacterAt = (function() {
                        // Initialization > Method
                        var method = (function() {
                            // Error Handling > Return
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
                            if (' '[0] != ' ') LDKF.error.nativeToEnvironment("`String.prototype.charAt` method")
                        }
                    })();

                    // Character Code At
                    LapysDevelopmentKit.objects.stringPrototypeCharacterCodeAt = (function() {
                        // Initialization > Method
                        var method = (function() {
                            // Error Handling > Return
                            try { return "".constructor.prototype.charCodeAt }
                            catch (error) {}
                        })();

                        // Logic > (...)
                        if (
                            typeof method == "function" &&
                            (function(stream) {
                                // Return
                                return stream == "function charCodeAt() { [native code] }" ||
                                    stream == "function charCodeAt() {\n    [native code]\n}" ||
                                    stream == "\nfunction charCodeAt() {\n    [native code]\n}\n"
                            })(method + "")
                        ) return method;
                        else LDKF.error.nativeToEnvironment("`String.prototype.charCodeAt` method")
                    })();

            /* Functions */
                // Is Number
                LapysDevelopmentKit.functions.isNumber = function isNumber(arg) { return typeof arg == "number" };

                // Is Void --- NOTE (Lapys) -> Unfortunately, `HTMLAllCollection` objects are also seen as void.
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
                        if (typeof string != "string") LDKF.error("Argument specified must be a string");

                        // Logic > Return
                        if (LDKF.getArgumentsLength(arguments) < 2) return undefined;

                        // Return
                        return string[index] || LDKO.stringPrototypeCharacterAt.call(string, index) || undefined
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
                    LapysDevelopmentKit.functions.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(character) { return character && (character == 'a' || character == 'A' || character == 'b' || character == 'B' || character == 'c' || character == 'C' || character == 'd' || character == 'D' || character == 'e' || character == 'E' || character == 'f' || character == 'F' || character == 'g' || character == 'G' || character == 'h' || character == 'H' || character == 'i' || character == 'I' || character == 'j' || character == 'J' || character == 'k' || character == 'K' || character == 'l' || character == 'L' || character == 'm' || character == 'M' || character == 'n' || character == 'N' || character == 'o' || character == 'O' || character == 'p' || character == 'P' || character == 'q' || character == 'Q' || character == 'r' || character == 'R' || character == 's' || character == 'S' || character == 't' || character == 'T' || character == 'u' || character == 'U' || character == 'v' || character == 'V' || character == 'w' || character == 'W' || character == 'x' || character == 'X' || character == 'y' || character == 'Y' || character == 'z' || character == 'Z') };

                    // Is Digit
                    LapysDevelopmentKit.functions.stringPrototypeIsDigit = function stringPrototypeIsDigit(character) { return character && (character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9') };

                    // Is Numeric
                    LapysDevelopmentKit.functions.stringPrototypeIsNumeric = function stringPrototypeIsNumeric(string) { var iterator = LDKF.stringPrototypeLength(string); while (iterator) if (!LDKF.stringPrototypeIsDigit(LDKF.stringPrototypeCharacterAt(string, iterator -= 1))) return false; return !!string };

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
                            while (iterator != 1) string = LDKF.stringPrototypeTrim(string, arguments[length - (iterator -= 1)])
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
                    LapysDevelopmentKit.functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, element) { array[LDKF.arrayPrototypeLength(array)] = element };

                    // Length --- NOTE (Lapys) -> Fortunately, the `length` property of arrays is consistent with the object itself.
                    LapysDevelopmentKit.functions.arrayPrototypeLength = function arrayPrototypeLength(array) { return array.length };

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

                // Has __Prototype__ Accessor
                LapysDevelopmentKit.constants.has__Proto__Accessor = LDKF.objectPrototypeHasProperty({}, "__proto__");

                // Is Browser Environment --- UPDATE REQUIRED (Lapys) -> Test here should be improved.
                LapysDevelopmentKit.constants.isBrowserEnvironment = typeof window == "object" && LDKF.isConstructible(window);

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
                                try { if (LDKF.objectPrototypeHasOwnProperty(object, propertyName)) { ownValue = object[propertyName]; delete object[propertyName]; return object[propertyName] } }
                                catch (error) { throw error }
                                finally { LDKF.objectPrototypeSetProperty(object, propertyName, ownValue); return object[propertyName] }

                                // Return
                                return object[propertyName]
                            }

                            // Update > Method
                            method = LDKC.has__Proto__Accessor ?
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

                        else if (LDKC.has__Proto__Accessor)
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
                        // Constant
                        LapysDevelopmentKit.functions.objectDefineConstantProperty = function objectDefineConstantProperty(object, key, descriptor) {
                            // Modification > Descriptor > (Configurable, Writable)
                            LDKF.objectDefineProperty(descriptor, "configurable", {enumerable: true, value: false});
                            LDKF.objectPrototypeHasProperty(descriptor, "value") && LDKF.objectDefineProperty(descriptor, "writable", {enumerable: true, value: false});

                            // Modification > Object > [Key]
                            LDKF.objectDefineProperty(object, key, descriptor)
                        };

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
                    // Prototype
                    LapysDevelopmentKit.objects.arrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.array, "prototype");

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
                    // Prototype
                    LapysDevelopmentKit.objects.regularExpressionPrototype = LDKF.objectPrototypeGetProperty(LDKO.regularExpression, "prototype");

                // String
                LapysDevelopmentKit.objects.string = LDKF.objectPrototypeConstructor("");

                // Symbol
                LapysDevelopmentKit.objects.symbol = LDKF.objectPrototypeGetProperty(GLOBAL, "Symbol");
                    // Prototype
                    LapysDevelopmentKit.objects.symbolPrototype = LDKF.objectPrototypeGetProperty(LDKO.symbol, "prototype");

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
                    if (LDKC.has__Proto__Accessor)
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
                            !LDKF.isVoid(LDKF, "activeXObject") || (
                                LDKF.objectPrototypeHasProperty(GLOBAL, "ActiveXObject") &&
                                (function(method) { return (function(stream) { return stream == "function" || stream == "undefined" })(typeof method) && LDKF.functionPrototypeIsNative(method, STRICT = true) })(LDKF.objectPrototypeGetProperty(GLOBAL, "ActiveXObject"))
                            )
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
                LapysDevelopmentKit.functions.eval = function evaluate(source) { return LDKO.eval.call(GLOBAL, source) };

            /* Objects */
                // Abort Error
                LapysDevelopmentKit.objects.abortError = LDKT.getObjectNativeErrorByName(GLOBAL, "AbortError");
                    // Prototype
                    LapysDevelopmentKit.objects.abortErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.abortError, "prototype")

                // Constraint Error
                LapysDevelopmentKit.objects.constraintError = LDKT.getObjectNativeErrorByName(GLOBAL, "ConstraintError");
                    // Prototype
                    LapysDevelopmentKit.objects.constraintErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.constraintError, "prototype")

                // Constraint Not Satisfied Error
                LapysDevelopmentKit.objects.constraintNotSatisfiedError = LDKT.getObjectNativeErrorByName(GLOBAL, "ConstraintNotSatisfiedError");
                    // Prototype
                    LapysDevelopmentKit.objects.constraintNotSatisfiedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.constraintNotSatisfiedError, "prototype")

                // Data Error
                LapysDevelopmentKit.objects.dataError = LDKT.getObjectNativeErrorByName(GLOBAL, "DataError");
                    // Prototype
                    LapysDevelopmentKit.objects.dataErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.dataError, "prototype")

                // Data Clone Error
                LapysDevelopmentKit.objects.dataCloneError = LDKT.getObjectNativeErrorByName(GLOBAL, "DataCloneError");
                    // Prototype
                    LapysDevelopmentKit.objects.dataCloneErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.dataCloneError, "prototype")

                // Devices Not Found Error
                LapysDevelopmentKit.objects.devicesNotFoundError = LDKT.getObjectNativeErrorByName(GLOBAL, "DevicesNotFoundError");
                    // Prototype
                    LapysDevelopmentKit.objects.devicesNotFoundErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.devicesNotFoundError, "prototype")

                // DOM Error
                LapysDevelopmentKit.objects.domError = LDKC.isBrowserEnvironment ? LDKT.getObjectNativeErrorByName(GLOBAL, "DOMError", STRICT = true) : false;
                    // Prototype
                    LapysDevelopmentKit.objects.domErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.domError, "prototype")

                // DOM Exception
                LapysDevelopmentKit.objects.domException = LDKC.isBrowserEnvironment ? LDKT.getObjectNativeErrorByName(GLOBAL, "DOMException", STRICT = true) : false;
                    // Prototype
                    LapysDevelopmentKit.objects.domExceptionPrototype = LDKF.objectPrototypeGetProperty(LDKO.domException, "prototype")

                // Encoding Error
                LapysDevelopmentKit.objects.encodingError = LDKT.getObjectNativeErrorByName(GLOBAL, "EncodingError");
                    // Prototype
                    LapysDevelopmentKit.objects.encodingErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.encodingError, "prototype")

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
                    // Prototype
                    LapysDevelopmentKit.objects.typeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.typeError, "prototype")

                // Error
                LapysDevelopmentKit.objects.error = (function() {
                    // Initialization > (Is Standard, Object)
                    var isStandard = true, constructor;

                    // Function > Test
                    function test() { return LDKF.functionPrototypeGetName(constructor) == "Error" || LDKF.functionPrototypeIsNative(constructor) }

                    // Logic
                    if (LDKC.has__Proto__Accessor)
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
                    // Prototype
                    LapysDevelopmentKit.objects.evalErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.evalError, "prototype")

                // Event Exception
                LapysDevelopmentKit.objects.eventException = LDKT.getObjectNativeErrorByName(GLOBAL, "EventException");
                    // Prototype
                    LapysDevelopmentKit.objects.eventExceptionPrototype = LDKF.objectPrototypeGetProperty(LDKO.eventException, "prototype")

                // Hierarchy Request Error
                LapysDevelopmentKit.objects.hierarchyRequestError = LDKT.getObjectNativeErrorByName(GLOBAL, "HierarchyRequestError");
                    // Prototype
                    LapysDevelopmentKit.objects.hierarchyRequestErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.hierarchyRequestError, "prototype")

                // Index Size Error
                LapysDevelopmentKit.objects.indexSizeError = LDKT.getObjectNativeErrorByName(GLOBAL, "IndexSizeError");
                    // Prototype
                    LapysDevelopmentKit.objects.indexSizeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.indexSizeError, "prototype")

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
                    // Prototype
                    LapysDevelopmentKit.objects.internalErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.internalError, "prototype")

                // Invalid Access Error
                LapysDevelopmentKit.objects.invalidAccessError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidAccessError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidAccessErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidAccessError, "prototype")

                // Invalid Character Error
                LapysDevelopmentKit.objects.invalidCharacterError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidCharacterError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidCharacterErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidCharacterError, "prototype")

                // Invalid Modification Error
                LapysDevelopmentKit.objects.invalidModificationError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidModificationError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidModificationErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidModificationError, "prototype")

                // Invalid Node Type Error
                LapysDevelopmentKit.objects.invalidNodeTypeError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidNodeTypeError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidNodeTypeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidNodeTypeError, "prototype")

                // Invalid State Error
                LapysDevelopmentKit.objects.invalidStateError = LDKT.getObjectNativeErrorByName(GLOBAL, "InvalidStateError");
                    // Prototype
                    LapysDevelopmentKit.objects.invalidStateErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.invalidStateError, "prototype")

                // Media Error
                LapysDevelopmentKit.objects.mediaError = LDKT.getObjectNativeErrorByName(GLOBAL, "MediaError", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mediaErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaError, "prototype")

                // Media Key Error
                LapysDevelopmentKit.objects.mediaKeyError = LDKT.getObjectNativeErrorByName(GLOBAL, "MediaKeyError");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaKeyErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaKeyError, "prototype")

                // Media Stream Error
                LapysDevelopmentKit.objects.mediaStreamError = LDKT.getObjectNativeErrorByName(GLOBAL, "MediaStreamError");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamError, "prototype")

                // Microsoft Media Key Error
                LapysDevelopmentKit.objects.msMediaKeyError = LDKT.getObjectNativeErrorByName(GLOBAL, "MSMediaKeyError");
                    // Prototype
                    LapysDevelopmentKit.objects.msMediaKeyErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.msMediaKeyError, "prototype")

                // Namespace Error
                LapysDevelopmentKit.objects.namespaceError = LDKT.getObjectNativeErrorByName(GLOBAL, "NamespaceError");
                    // Prototype
                    LapysDevelopmentKit.objects.namespaceErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.namespaceError, "prototype")

                // Navigator User Media Error
                LapysDevelopmentKit.objects.navigatorUserMediaError = LDKT.getObjectNativeErrorByName(GLOBAL, "NavigatorUserMediaError");
                    // Prototype
                    LapysDevelopmentKit.objects.navigatorUserMediaErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.navigatorUserMediaError, "prototype")

                // Network Error
                LapysDevelopmentKit.objects.networkError = LDKT.getObjectNativeErrorByName(GLOBAL, "NetworkError");
                    // Prototype
                    LapysDevelopmentKit.objects.networkErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.networkError, "prototype")

                // No Modification Allowed Error
                LapysDevelopmentKit.objects.noModificationAllowedError = LDKT.getObjectNativeErrorByName(GLOBAL, "NoModificationAllowedError");
                    // Prototype
                    LapysDevelopmentKit.objects.noModificationAllowedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.noModificationAllowedError, "prototype")

                // Not Allowed Error
                LapysDevelopmentKit.objects.notAllowedError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotAllowedError");
                    // Prototype
                    LapysDevelopmentKit.objects.notAllowedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notAllowedError, "prototype")

                // Not Found Error
                LapysDevelopmentKit.objects.notFoundError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotFoundError");
                    // Prototype
                    LapysDevelopmentKit.objects.notFoundErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notFoundError, "prototype")

                // Not Readable Error
                LapysDevelopmentKit.objects.notReadableError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotReadableError");
                    // Prototype
                    LapysDevelopmentKit.objects.notReadableErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notReadableError, "prototype")

                // Not Supported Error
                LapysDevelopmentKit.objects.notSupportedError = LDKT.getObjectNativeErrorByName(GLOBAL, "NotSupportedError");
                    // Prototype
                    LapysDevelopmentKit.objects.notSupportedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.notSupportedError, "prototype")

                // Operation Error
                LapysDevelopmentKit.objects.operationError = LDKT.getObjectNativeErrorByName(GLOBAL, "OperationError");
                    // Prototype
                    LapysDevelopmentKit.objects.operationErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.operationError, "prototype")

                // Over-Constrained Error
                LapysDevelopmentKit.objects.overConstrainedError = LDKT.getObjectNativeErrorByName(GLOBAL, "OverconstrainedError");
                    // Prototype
                    LapysDevelopmentKit.objects.overConstrainedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.overConstrainedError, "prototype")

                // Permission Denied Error
                LapysDevelopmentKit.objects.permissionDeniedError = LDKT.getObjectNativeErrorByName(GLOBAL, "PermissionDeniedError");
                    // Prototype
                    LapysDevelopmentKit.objects.permissionDeniedErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.permissionDeniedError, "prototype")

                // Quota Exceeded Error
                LapysDevelopmentKit.objects.quotaExceededError = LDKT.getObjectNativeErrorByName(GLOBAL, "QuotaExceededError");
                    // Prototype
                    LapysDevelopmentKit.objects.quotaExceededErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.quotaExceededError, "prototype")

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
                    // Prototype
                    LapysDevelopmentKit.objects.rangeErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.rangeError, "prototype")

                // Read-Only Error
                LapysDevelopmentKit.objects.readOnlyError = LDKT.getObjectNativeErrorByName(GLOBAL, "ReadOnlyError");
                    // Prototype
                    LapysDevelopmentKit.objects.readOnlyErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.readOnlyError, "prototype")

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
                    // Prototype
                    LapysDevelopmentKit.objects.referenceErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.referenceError, "prototype")

                // Security Error
                LapysDevelopmentKit.objects.securityError = LDKT.getObjectNativeErrorByName(GLOBAL, "SecurityError");
                    // Prototype
                    LapysDevelopmentKit.objects.securityErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.securityError, "prototype")

                // Speech Recognition Error
                LapysDevelopmentKit.objects.speechRecognitionError = LDKT.getObjectNativeErrorByName(GLOBAL, "SpeechRecognitionError");
                    // Prototype
                    LapysDevelopmentKit.objects.speechRecognitionErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.speechRecognitionError, "prototype")

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
                    LapysDevelopmentKit.objects.syntaxErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.syntaxError, "prototype")

                // Timeout Error
                LapysDevelopmentKit.objects.timeoutError = LDKT.getObjectNativeErrorByName(GLOBAL, "TimeoutError");
                    // Prototype
                    LapysDevelopmentKit.objects.timeoutErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.timeoutError, "prototype")

                // Track Start Error
                LapysDevelopmentKit.objects.trackStartError = LDKT.getObjectNativeErrorByName(GLOBAL, "TrackStartError");
                    // Prototype
                    LapysDevelopmentKit.objects.trackStartErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.trackStartError, "prototype")

                // Transaction Inactive Error
                LapysDevelopmentKit.objects.transactionInactiveError = LDKT.getObjectNativeErrorByName(GLOBAL, "TransactionInactiveError");
                    // Prototype
                    LapysDevelopmentKit.objects.transactionInactiveErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.transactionInactiveError, "prototype")

                // Type Mismatch Error
                LapysDevelopmentKit.objects.typeMismatchError = LDKT.getObjectNativeErrorByName(GLOBAL, "TypeMismatchError");
                    // Prototype
                    LapysDevelopmentKit.objects.typeMismatchErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.typeMismatchError, "prototype")

                // Unknown Error
                LapysDevelopmentKit.objects.unknownError = LDKT.getObjectNativeErrorByName(GLOBAL, "UnknownError");
                    // Prototype
                    LapysDevelopmentKit.objects.unknownErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.unknownError, "prototype")

                // URI Error --- NOTE (Lapys) -> Can be generated via code like `decodeURIComponent("a%AFc")`
                LapysDevelopmentKit.objects.uriError = LDKT.getObjectNativeErrorByName(GLOBAL, "URIError");
                    // Prototype
                    LapysDevelopmentKit.objects.uriErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.uriError, "prototype")

                // URL Mismatch Error
                LapysDevelopmentKit.objects.urlMismatchError = LDKT.getObjectNativeErrorByName(GLOBAL, "URLMismatchError");
                    // Prototype
                    LapysDevelopmentKit.objects.urlMismatchErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.urlMismatchError, "prototype")

                // Version Error
                LapysDevelopmentKit.objects.versionError = LDKT.getObjectNativeErrorByName(GLOBAL, "VersionError");
                    // Prototype
                    LapysDevelopmentKit.objects.versionErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.versionError, "prototype")

                // Webkit Speech Recognition Error
                LapysDevelopmentKit.objects.webkitSpeechRecognitionError = LDKT.getObjectNativeErrorByName(GLOBAL, "webkitSpeechRecognitionError");
                    // Prototype
                    LapysDevelopmentKit.objects.webkitSpeechRecognitionErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.webkitSpeechRecognitionError, "prototype")

                // Wrong Document Error
                LapysDevelopmentKit.objects.wrongDocumentError = LDKT.getObjectNativeErrorByName(GLOBAL, "WrongDocumentError");
                    // Prototype
                    LapysDevelopmentKit.objects.wrongDocumentErrorPrototype = LDKF.objectPrototypeGetProperty(LDKO.wrongDocumentError, "prototype")

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

            /* Functions */
                // Create Function
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
                        name = (function(stream) {
                            // Error Handling > (...)
                            try { stream && LDKF.eval("var " + stream) } catch (error) { LDKF.error("Invalid name `" + name + "` for function") }

                            // Return
                            return stream
                        })(name ? LDKF.toString(name) : "");

                        // Update > Options
                        LDKF.isString(options) && (options = {params: [options]});
                        LDKF.isArray(options) && (options = {params: options});

                        // Error
                        LDKF.isJSON(options) ?
                            (
                                !LDKF.objectPrototypeHasProperty(options, "params") &&
                                !LDKF.objectPrototypeHasProperty(options, "type")
                            ) && LDKF.error("The second argument given must either have a `params` or `type` property") :
                            LDKF.error("The second argument must be options for the function or parameters");

                        // Initialization > (Parameters (Count), Type)
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

                        // Logic
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
                            source += (parameters ? (parameters + (LDKF.stringPrototypeCharacterAt(source, 0) ? ')' : "")) : "()") + " => ";

                            // Logic
                            if (length != 2) {
                                // Error Handling
                                try {
                                    // Execution
                                    LDKF.eval(source + body)
                                } catch (error) {
                                    // Initialization > Delimiter
                                    var delimter = LDKF.stringPrototypeIncludes(body, '\n') ? '\n' : ' ';

                                    // Update > Body
                                    body = '{' + delimter + body + delimter + '}'
                                }

                                // Update > Source
                                source += body
                            }

                            else
                                // Update > Source
                                source += "{}"
                        }

                        else {
                            // Update > (Body, Source)
                            body = (function() {
                                // Initialization > Delimiter
                                var delimter = LDKF.stringPrototypeIncludes(body, '\n') ? '\n' : ' ';

                                // Return
                                return delimter + body + delimter
                            })();
                            source += type == "class" ?
                                "class" + (name ? ' ' + name + ' ' : ' ') + "{ constructor(" + parameters + ") {" + body + "} }" :
                                "function" + (type == "generator" ? '*' : "") + (name ? ' ' + name : "") + "(" + parameters + ") { " + body + '}'
                        }
                    }

                    // Return
                    return LDKF.eval("(function() { return (" + source + ") })()")
                };

        /* Global */
            /* LapysJS --- NOTE (Lapys) -> Initial test for if the library is pre-installed here. */
            (function() {
                // Error
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
                            LDKS[setting] = LDKF.objectPrototypeHasProperty(options, setting) ?
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
                                        case "number": return 0; break;

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
                            LDKS[setting] = LDKF.objectPrototypeHasProperty(options, setting) ?
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
                            var constructor = LDKF.createFunction("LapysJS");

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
                            LapysJS.processingDuration.initiate = 0;

                            // Update
                            LapysJS.processingDuration.update = 0;

                            // Terminate
                            LapysJS.processingDuration.terminate = 0;

                            // Value Of
                            LDKF.objectDefineConstantProperty(LDKF.objectPrototypePrototype(LapysJS.processingDuration), "valueOf", {
                                // Value
                                value: function valueOf() { return LapysJS.processingDuration.initiate + LapysJS.processingDuration.update + LapysJS.processingDuration.terminate }
                            });

                        // Return
                        return LapysJS
                    })(),

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
                        LDKF.eval("(function() {" +
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
                    // LapysJS Initiate Error --- NOTE (Lapys) -> Code duplication follows here...
                    LapysDevelopmentKit.data.lapysJSInitiateError = (function() {
                        // Initialization > Constructor
                        var constructor = LDKC.hasClassKeyword ?
                            LDKF.eval("(function() {" +
                                "return class LapysJSInitiateError extends LapysJS.tmp.error {" +
                                    "constructor(message, stack) {" +
                                        "var length = arguments.length;" +
                                        "(length ? (length == 1 ? super(message) : super(message, stack)) : super());" +
                                        "(typeof LapysJS.tmp.errorCaptureStackTrace == \"function\" && LapysJS.tmp.functionPrototypeIsNative(LapysJS.tmp.errorCaptureStackTrace)) && LapysJS.tmp.errorCaptureStackTrace(this, LapysJSInitiateError)" +
                                    "}" +
                                "}" +
                            "})()") :
                            function LapysJSInitiateError() { return LDKD.lapysJSError.apply(LDKO, arguments) };

                        // Return
                        return function LapysJSInitiateError(message, stack) {
                            // Initialization > (Length, LapysJS Initiate Error)
                            var length = LDKF.getArgumentsLength(arguments),
                                lapysJSInitiateError = length ? (length == 1 ? new constructor(message) : new constructor(message, stack)) : new constructor;

                            // Modification > LapysJS Initiate Error > (__Prototype__, Name)
                            LDKC.hasClassKeyword || LDKF.objectPrototypeSet__Proto__(lapysJSInitiateError, (function() { try { return LDKF.objectCreate(LDKO.lapysJSErrorPrototype) } catch (error) {} return LDKF.objectCreate(LDKO.errorPrototype) })());
                            LDKF.objectPrototypeSetProperty(lapysJSInitiateError, "name", "LapysJSInitiateError");

                            // Return
                            return lapysJSInitiateError
                        }
                    })();

                    // LapysJS Update Error
                    LapysDevelopmentKit.data.lapysJSUpdateError = (function() {
                        // Initialization > Constructor
                        var constructor = LDKC.hasClassKeyword ?
                            LDKF.eval("(function() {" +
                                "return class LapysJSUpdateError extends LapysJS.tmp.error {" +
                                    "constructor(message, stack) {" +
                                        "var length = arguments.length;" +
                                        "(length ? (length == 1 ? super(message) : super(message, stack)) : super());" +
                                        "(typeof LapysJS.tmp.errorCaptureStackTrace == \"function\" && LapysJS.tmp.functionPrototypeIsNative(LapysJS.tmp.errorCaptureStackTrace)) && LapysJS.tmp.errorCaptureStackTrace(this, LapysJSUpdateError)" +
                                    "}" +
                                "}" +
                            "})()") :
                            function LapysJSUpdateError() { return LDKD.lapysJSError.apply(LDKO, arguments) };

                        // Return
                        return function LapysJSUpdateError(message, stack) {
                            // Initialization > (Length, LapysJS Update Error)
                            var length = LDKF.getArgumentsLength(arguments),
                                lapysJSUpdateError = length ? (length == 1 ? new constructor(message) : new constructor(message, stack)) : new constructor;

                            // Modification > LapysJS Update Error > (__Prototype__, Name)
                            LDKC.hasClassKeyword || LDKF.objectPrototypeSet__Proto__(lapysJSUpdateError, (function() { try { return LDKF.objectCreate(LDKO.lapysJSErrorPrototype) } catch (error) {} return LDKF.objectCreate(LDKO.errorPrototype) })());
                            LDKF.objectPrototypeSetProperty(lapysJSUpdateError, "name", "LapysJSUpdateError");

                            // Return
                            return lapysJSUpdateError
                        }
                    })();

                    // LapysJS Terminate Error
                    LapysDevelopmentKit.data.lapysJSTerminateError = (function() {
                        // Initialization > Constructor
                        var constructor = LDKC.hasClassKeyword ?
                            LDKF.eval("(function() {" +
                                "return class LapysJSTerminateError extends LapysJS.tmp.error {" +
                                    "constructor(message, stack) {" +
                                        "var length = arguments.length;" +
                                        "(length ? (length == 1 ? super(message) : super(message, stack)) : super());" +
                                        "(typeof LapysJS.tmp.errorCaptureStackTrace == \"function\" && LapysJS.tmp.functionPrototypeIsNative(LapysJS.tmp.errorCaptureStackTrace)) && LapysJS.tmp.errorCaptureStackTrace(this, LapysJSTerminateError)" +
                                    "}" +
                                "}" +
                            "})()") :
                            function LapysJSTerminateError() { return LDKD.lapysJSError.apply(LDKO, arguments) };

                        // Return
                        return function LapysJSTerminateError(message, stack) {
                            // Initialization > (Length, LapysJS Terminate Error)
                            var length = LDKF.getArgumentsLength(arguments),
                                lapysJSTerminateError = length ? (length == 1 ? new constructor(message) : new constructor(message, stack)) : new constructor;

                            // Modification > LapysJS Terminate Error > (__Prototype__, Name)
                            LDKC.hasClassKeyword || LDKF.objectPrototypeSet__Proto__(lapysJSTerminateError, (function() { try { return LDKF.objectCreate(LDKO.lapysJSErrorPrototype) } catch (error) {} return LDKF.objectCreate(LDKO.errorPrototype) })());
                            LDKF.objectPrototypeSetProperty(lapysJSTerminateError, "name", "LapysJSTerminateError");

                            // Return
                            return lapysJSTerminateError
                        }
                    })();

                    // Prototype
                    LapysDevelopmentKit.data.lapysJSErrorPrototype = LDKF.objectPrototypePrototype(new LDKD.lapysJSError);

                // LapysJS Node List
                // LapysJS Pseudo Number
                // LapysJS Promise
                // LapysJS Safe Number

            /* Functions */
                // Error > Prototype
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

                // Is Abort Error
                LapysDevelopmentKit.functions.isAbortError = function isAbortError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.abortError, LDKO.abortErrorPrototype) };

                // Is Active X Object
                LapysDevelopmentKit.functions.isActiveXObject = function isActiveXObject(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.activeXObject, LDKO.activeXObjectPrototype) };

                // Is Analyser Node
                LapysDevelopmentKit.functions.isAnalyserNode = function isAnalyserNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.analyserNode, LDKO.analyserNodePrototype) };

                // Is Animation Event
                LapysDevelopmentKit.functions.isAnimationEvent = function isAnimationEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.animationEvent, LDKO.animationEventPrototype) };

                // Is Animation Playback Event
                LapysDevelopmentKit.functions.isAnimationPlaybackEvent = function isAnimationPlaybackEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.animationPlaybackEvent, LDKO.animationPlaybackEventPrototype) };

                // Is Application Cache Error Event
                LapysDevelopmentKit.functions.isApplicationCacheErrorEvent = function isApplicationCacheErrorEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.applicationCacheErrorEvent, LDKO.applicationCacheErrorEventPrototype) };

                // Is Arguments
                LapysDevelopmentKit.functions.isArguments = function isArguments(arg) { return LDKF.objectPrototypeConstructor(arg) === LDKO.object && LDKF.isFunction(LDKF.objectPrototypeGetProperty(arg, "callee")) && LDKF.objectPrototypeHasProperty(arg, "length") && (function(stream) { return stream == "[object Arguments]" || stream == "[object Object]" })(LDKF.toString(arg)) };

                // Is Array-Like --- NOTE (Lapys) -> The first of confusingly named test methods.
                LapysDevelopmentKit.functions.isArrayLike = function isArrayLike(arg) { return LDKF.isArray(arg) || LDKF.isStrictlyArrayLike(arg) };

                // Is Attribute
                LapysDevelopmentKit.functions.isAttribute = function isAttribute(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.attribute, LDKO.attributePrototype) };

                // Is Audio Buffer Source Node
                LapysDevelopmentKit.functions.isAudioBufferSourceNode = function isAudioBufferSourceNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.audioBufferSourceNode, LDKO.audioBufferSourceNodePrototype) };

                // Is Audio Destination Node
                LapysDevelopmentKit.functions.isAudioDestinationNode = function isAudioDestinationNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.audioDestinationNode, LDKO.audioDestinationNodePrototype) };

                // Is Audio Node
                LapysDevelopmentKit.functions.isAudioNode = function isAudioNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.audioNode, LDKO.audioNodePrototype) };

                // Is Audio Processing Event
                LapysDevelopmentKit.functions.isAudioProcessingEvent = function isAudioProcessingEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.audioProcessingEvent, LDKO.audioProcessingEventPrototype) };

                // Is Audio Scheduled Source Node
                LapysDevelopmentKit.functions.isAudioScheduledSourceNode = function isAudioScheduledSourceNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.audioScheduledSourceNode, LDKO.audioScheduledSourceNodePrototype) };

                // Is Audio Worklet
                LapysDevelopmentKit.functions.isAudioWorklet = function isAudioWorklet(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.audioWorklet, LDKO.audioWorkletPrototype) };

                // Is Before Install Prompt Event
                LapysDevelopmentKit.functions.isBeforeInstallPromptEvent = function isBeforeInstallPromptEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.beforeInstallPromptEvent, LDKO.beforeInstallPromptEventPrototype) };

                // Is Before Load Event
                LapysDevelopmentKit.functions.isBeforeLoadEvent = function isBeforeLoadEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.beforeLoadEvent, LDKO.beforeLoadEventPrototype) };

                // Is Before Unload Event
                LapysDevelopmentKit.functions.isBeforeUnloadEvent = function isBeforeUnloadEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.beforeUnloadEvent, LDKO.beforeUnloadEventPrototype) };

                // Is Big 64-Bit Integer Array
                LapysDevelopmentKit.functions.isBigInt64Array = function isBigInt64Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.bigInt64Array, LDKO.bigInt64ArrayPrototype) };

                // Is Big Unsigned 64-Bit Integer Array
                LapysDevelopmentKit.functions.isBigUint64Array = function isBigUint64Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.isBigUint64Array, LDKO.isBigUint64ArrayPrototype) };

                // Is Bi-quad Filter Node
                LapysDevelopmentKit.functions.isBiquadFilterNode = function isBiquadFilterNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.biquadFilterNode, LDKO.biquadFilterNodePrototype) };

                // Is Blob Event
                LapysDevelopmentKit.functions.isBlobEvent = function isBlobEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.blobEvent, LDKO.blobEventPrototype) };

                // Is Channel Splitter Node
                LapysDevelopmentKit.functions.isChannelSplitterNode = function isChannelSplitterNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.channelSplitterNode, LDKO.channelSplitterNodePrototype) };

                // Is Character Merger Node
                LapysDevelopmentKit.functions.isCharacterMergerNode = function isCharacterMergerNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.characterMergerNode, LDKO.characterMergerNodePrototype) };

                // Is Clipboard Event
                LapysDevelopmentKit.functions.isClipboardEvent = function isClipboardEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.clipboardEvent, LDKO.clipboardEventPrototype) };

                // Is Close Event
                LapysDevelopmentKit.functions.isCloseEvent = function isCloseEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.closeEvent, LDKO.closeEventPrototype) };

                // Is Composition Event
                LapysDevelopmentKit.functions.isCompositionEvent = function isCompositionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.compositionEvent, LDKO.compositionEventPrototype) };

                // Is Constant Source Node
                LapysDevelopmentKit.functions.isConstantSourceNode = function isConstantSourceNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.constantSourceNode, LDKO.constantSourceNodePrototype) };

                // Is Constraint Error
                LapysDevelopmentKit.functions.isConstraintError = function isConstraintError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.constraintError, LDKO.constraintErrorPrototype) };

                // Is Constraint Not Satisfied Error
                LapysDevelopmentKit.functions.isConstraintNotSatisfiedError = function isConstraintNotSatisfiedError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.constraintNotSatisfiedError, LDKO.constraintNotSatisfiedErrorPrototype) };

                // Is Convolver Node
                LapysDevelopmentKit.functions.isConvolverNode = function isConvolverNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.convolverNode, LDKO.convolverNodePrototype) };

                // Is CSS Numeric Array
                LapysDevelopmentKit.functions.isCSSNumericArray = function isCSSNumericArray(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.cssNumericArray, LDKO.cssNumericArrayPrototype) };

                // Is Custom Event
                LapysDevelopmentKit.functions.isCustomEvent = function isCustomEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.customEvent, LDKO.customEventPrototype) };

                // Is Data Error
                LapysDevelopmentKit.functions.isDataError = function isDataError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.dataError, LDKO.dataErrorPrototype) };

                // Is Data Clone Error
                LapysDevelopmentKit.functions.isDataCloneError = function isDataCloneError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.dataCloneError, LDKO.dataCloneErrorPrototype) };

                // Is Delay Node
                LapysDevelopmentKit.functions.isDelayNode = function isDelayNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.delayNode, LDKO.delayNodePrototype) };

                // Is Detached View Control Event
                LapysDevelopmentKit.functions.isDetachedViewControlEvent = function isDetachedViewControlEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.detachedViewControl, LDKO.detachedViewControlPrototype) };

                // Is Device Light Event
                LapysDevelopmentKit.functions.isDeviceLightEvent = function isDeviceLightEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.deviceLightEvent, LDKO.deviceLightEventPrototype) };

                // Is Device Motion Event
                LapysDevelopmentKit.functions.isDeviceMotionEvent = function isDeviceMotionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.deviceMotionEvent, LDKO.deviceMotionEventPrototype) };

                // Is Device Orientation Event
                LapysDevelopmentKit.functions.isDeviceOrientationEvent = function isDeviceOrientationEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.deviceOrientationEvent, LDKO.deviceOrientationEventPrototype) };

                // Is Devices Not Found Error
                LapysDevelopmentKit.functions.isDevicesNotFoundError = function isDevicesNotFoundError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.devicesNotFoundError, LDKO.devicesNotFoundErrorPrototype) };

                // Is Document
                LapysDevelopmentKit.functions.isDocument = function isDocument(arg) { return LDKC.hasDocumentConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.document, LDKO.documentPrototype) : LDKF.isStrictlyDocumentLike(arg) };

                // Is Document-Like
                LapysDevelopmentKit.functions.isDocumentLike = function isDocumentLike(arg) { return LDKF.isDocument(arg) || LDKF.isStrictlyDocumentLike(arg) };

                // Is DOM Error
                LapysDevelopmentKit.functions.isDOMError = function isDOMError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.domError, LDKO.domErrorPrototype) };

                // Is DOM Exception
                LapysDevelopmentKit.functions.isDOMException = function isDOMException(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.domException, LDKO.domExceptionPrototype) };

                // Is Drag Event
                LapysDevelopmentKit.functions.isDragEvent = function isDragEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.dragEvent, LDKO.dragEventPrototype) };

                // Is Dynamics Compressor Node
                LapysDevelopmentKit.functions.isDynamicsCompressorNode = function isDynamicsCompressorNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.dynamicsCompressorNode, LDKO.dynamicsCompressorNodePrototype) };

                // Is Element
                LapysDevelopmentKit.functions.isElement = function isElement(arg) { return LDKC.hasElementConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.element, LDKO.elementPrototype) : LDKF.isStrictlyElementLike(arg) };

                // Is Element-Like
                LapysDevelopmentKit.functions.isElementLike = function isElementLike(arg) { return LDKF.isElement(arg) || LDKF.isStrictlyElementLike(arg) };

                // Is Encoding Error
                LapysDevelopmentKit.functions.isEncodingError = function isEncodingError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.encodingError, LDKO.encodingErrorPrototype) };

                // Is Enter Picture-in-Picture Event
                LapysDevelopmentKit.functions.isEnterPictureInPictureEvent = function isEnterPictureInPictureEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.enterPictureInPictureEvent, LDKO.enterPictureInPictureEventPrototype) };

                // Is Error
                LapysDevelopmentKit.functions.isError = function isError(arg) { return LDKC.hasErrorConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.error, LDKO.errorPrototype) : LDKF.isStrictlyErrorLike(arg) };

                // Is Error-Like
                LapysDevelopmentKit.functions.isErrorLike = function isErrorLike(arg) { return LDKF.isError(arg) || LDKF.isStrictlyErrorLike(arg) };

                // Is Error Event
                LapysDevelopmentKit.functions.isErrorEvent = function isErrorEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.errorEvent, LDKO.errorEventPrototype) };

                // Is Evaluation Error
                LapysDevelopmentKit.functions.isEvalError = function isEvalError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.evalError, LDKO.evalErrorPrototype) };

                // Is Event
                LapysDevelopmentKit.functions.isEvent = function isEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.event, LDKO.eventPrototype) };

                // Is Event Exception
                LapysDevelopmentKit.functions.isEventException = function isEventException(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.eventException, LDKO.eventExceptionPrototype) };

                // Is Event-Like --- NOTE (Lapys) -> Oddly enough, `KeyEvent` is not an `Event`-based object.
                LapysDevelopmentKit.functions.isEventLike = function isEventLike(arg) { return LDKF.isEvent(arg) || LDKF.isStrictlyEventLike(arg) };

                // Is Event Source
                LapysDevelopmentKit.functions.isEventSource = function isEventSource(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.eventSource, LDKO.eventSourcePrototype) };

                // Is Event Target
                LapysDevelopmentKit.functions.isEventTarget = function isEventTarget(arg) { return LDKC.hasEventTargetConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.eventTarget, LDKO.eventTargetPrototype) : LDKF.isEventTargetLike(arg) };

                // Is Event Target-Like
                LapysDevelopmentKit.functions.isEventTargetLike = function isEventTargetLike(arg) { return LDKF.isEventTarget(arg) || LDKF.isStrictlyEventTargetLike(arg) };

                // Is Focus Event
                LapysDevelopmentKit.functions.isFocusEvent = function isFocusEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.focusEvent, LDKO.focusEventPrototype) };

                // Is Font Face Set Load Event
                LapysDevelopmentKit.functions.isFontFaceSetLoadEvent = function isFontFaceSetLoadEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.fontFaceSetLoadEvent, LDKO.fontFaceSetLoadEventPrototype) };

                // Is Gain Node
                LapysDevelopmentKit.functions.isGainNode = function isGainNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.gainNode, LDKO.gainNodePrototype) };

                // Is Gamepad Event
                LapysDevelopmentKit.functions.isGamepadEvent = function isGamepadEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.gamepadEvent, LDKO.gamepadEventPrototype) };

                // Is Hash Change Event
                LapysDevelopmentKit.functions.isHashChangeEvent = function isHashChangeEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.hashChangeEvent, LDKO.hashChangeEventPrototype) };

                // Is Hierarchy Request Error
                LapysDevelopmentKit.functions.isHierarchyRequestError = function isHierarchyRequestError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.hierarchyRequestError, LDKO.hierarchyRequestErrorPrototype) };

                // Is HTML All Collection
                LapysDevelopmentKit.functions.isHTMLAllCollection = function isHTMLAllCollection(arg) { return !arg && LDKF.isVoid(arg) && (LDKC.hasHTMLAllCollectionConstructor ? LDKF.objectPrototypePrototype(arg) === LDKO.htmlAllCollectionPrototype : LDKF.isStrictlyHTMLAllCollectionLike(arg)) };

                // Is HTML All Collection-Like
                LapysDevelopmentKit.functions.isHTMLAllCollectionLike = function isHTMLAllCollectionLike(arg) { return LDKF.isHTMLAllCollection(arg) || LDKF.isStrictlyHTMLAllCollectionLike(arg) };

                // Is HTML Collection
                LapysDevelopmentKit.functions.isHTMLCollection = function isHTMLCollection(arg) { return LDKC.hasHTMLCollectionConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.htmlCollection, LDKO.htmlCollectionPrototype) : LDKF.isStrictlyHTMLCollectionLike(arg) };

                // Is HTML Collection-Like
                LapysDevelopmentKit.functions.isHTMLCollectionLike = function isHTMLCollectionLike(arg) { return LDKF.isHTMLCollection(arg) || LDKF.isStrictlyHTMLCollectionLike(arg) };

                // Is HTML Document
                LapysDevelopmentKit.functions.isHTMLDocument = function isHTMLDocument(arg) { return LDKC.hasHTMLDocumentConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.htmlDocument, LDKO.htmlDocumentPrototype) : LDKF.isStrictlyHTMLDocumentLike(arg) };

                // Is HTML Document-Like
                LapysDevelopmentKit.functions.isHTMLDocumentLike = function isHTMLDocumentLike(arg) { return LDKF.isHTMLDocument(arg) || LDKF.isStrictlyHTMLDocumentLike(arg) };

                // Is HTML Element
                LapysDevelopmentKit.functions.isHTMLElement = function isHTMLElement(arg) { return LDKC.hasHTMLElementConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.htmlElement, LDKO.htmlElementPrototype) : LDKF.isHTMLElementLike(arg) };

                // Is HTML Element-Like
                LapysDevelopmentKit.functions.isHTMLElementLike = function isHTMLElementLike(arg) { return LDKF.isHTMLElement(arg) || LDKF.isStrictlyHTMLElementLike(arg) };

                // Is IDB Version Change Event
                LapysDevelopmentKit.functions.isIDBVersionChangeEvent = function isIDBVersionChangeEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.idbVersionChangeEvent, LDKO.idbVersionChangeEventPrototype) };

                // Is IIR Filter Node
                LapysDevelopmentKit.functions.isIIRFilterNode = function isIIRFilterNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.iirFilterNode, LDKO.iirFilterNodePrototype) };

                // Is Index Size Error
                LapysDevelopmentKit.functions.isIndexSizeError = function isIndexSizeError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.indexSizeError, LDKO.indexSizeErrorPrototype) };

                // Is Input Event
                LapysDevelopmentKit.functions.isInputEvent = function isInputEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.inputEvent, LDKO.inputEventPrototype) };

                // Is Internal Error
                LapysDevelopmentKit.functions.isInternalError = function isInternalError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.internalError, LDKO.internalErrorPrototype) };

                // Is Invalid Access Error
                LapysDevelopmentKit.functions.isInvalidAccessError = function isInvalidAccessError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.invalidAccessError, LDKO.invalidAccessErrorPrototype) };

                // Is Invalid Character Error
                LapysDevelopmentKit.functions.isInvalidCharacterError = function isInvalidCharacterError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.invalidCharacterError, LDKO.invalidCharacterErrorPrototype) };

                // Is Invalid Modification Error
                LapysDevelopmentKit.functions.isInvalidModificationError = function isInvalidModificationError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.invalidModificationError, LDKO.invalidModificationErrorPrototype) };

                // Is Invalid Node Type Error
                LapysDevelopmentKit.functions.isInvalidNodeTypeError = function isInvalidNodeTypeError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.invalidNodeTypeError, LDKO.invalidNodeTypeErrorPrototype) };

                // Is Invalid State Error
                LapysDevelopmentKit.functions.isInvalidStateError = function isInvalidStateError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.invalidStateError, LDKO.invalidStateErrorPrototype) };

                // Is JSON {Object}
                LapysDevelopmentKit.functions.isJSON = function isJSON(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.object, LDKO.objectPrototype) || typeof arg == "object" };

                // Is Keyboard Event
                LapysDevelopmentKit.functions.isKeyboardEvent = function isKeyboardEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.keyboardEvent, LDKO.keyboardEventPrototype) };

                // Is Media Element Audio Source Node
                LapysDevelopmentKit.functions.isMediaElementAudioSourceNode = function isMediaElementAudioSourceNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaElementAudioSourceNode, LDKO.mediaElementAudioSourceNodePrototype) };

                // Is Media Encrypted Event
                LapysDevelopmentKit.functions.isMediaEncryptedEvent = function isMediaEncryptedEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaEncryptedEvent, LDKO.mediaEncryptedEventPrototype) };

                // Is Media Error
                LapysDevelopmentKit.functions.isMediaError = function isMediaError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaError, LDKO.mediaErrorPrototype) };

                // Is Media Key Error
                LapysDevelopmentKit.functions.isMediaKeyError = function isMediaKeyError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaKeyError, LDKO.mediaKeyErrorPrototype) };

                // Is Media Key Message Event
                LapysDevelopmentKit.functions.isMediaKeyMessageEvent = function isMediaKeyMessageEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaKeyMessageEvent, LDKO.mediaKeyMessageEventPrototype) };

                // Is Media Query List Event
                LapysDevelopmentKit.functions.isMediaQueryListEvent = function isMediaQueryListEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaQueryListEvent, LDKO.mediaQueryListEventPrototype) };

                // Is Media Recorder Error Event
                LapysDevelopmentKit.functions.isMediaRecorderErrorEvent = function isMediaRecorderErrorEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaRecorderErrorEvent, LDKO.mediaRecorderErrorEventPrototype) };

                // Is Media Stream Error
                LapysDevelopmentKit.functions.isMediaStreamError = function isMediaStreamError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaStreamError, LDKO.mediaStreamErrorPrototype) };

                // Is Media Stream Audio Destination Node
                LapysDevelopmentKit.functions.isMediaStreamAudioDestinationNode = function isMediaStreamAudioDestinationNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaStreamAudioDestinationNode, LDKO.mediaStreamAudioDestinationNodePrototype) };

                // Is Media Stream Audio Source Node
                LapysDevelopmentKit.functions.isMediaStreamAudioSourceNode = function isMediaStreamAudioSourceNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaStreamAudioSourceNode, LDKO.mediaStreamAudioSourceNodePrototype) };

                // Is Media Stream Error Event
                LapysDevelopmentKit.functions.isMediaStreamErrorEvent = function isMediaStreamErrorEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaStreamErrorEvent, LDKO.mediaStreamErrorEventPrototype) };

                // Is Media Stream Event
                LapysDevelopmentKit.functions.isMediaStreamEvent = function isMediaStreamEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaStreamEvent, LDKO.mediaStreamEventPrototype) };

                // Is Media Stream Track Event
                LapysDevelopmentKit.functions.isMediaStreamTrackEvent = function isMediaStreamTrackEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mediaStreamTrackEvent, LDKO.mediaStreamTrackEventPrototype) };

                // Is Message Event
                LapysDevelopmentKit.functions.isMessageEvent = function isMessageEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.messageEvent, LDKO.messageEventPrototype) };

                // Is MIDI Connection Event
                LapysDevelopmentKit.functions.isMIDIConnectionEvent = function isMIDIConnectionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.midiConnectionEvent, LDKO.midiConnectionEventPrototype) };

                // Is MIDI Message Event
                LapysDevelopmentKit.functions.isMIDIMessageEvent = function isMIDIMessageEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.midiMessageEvent, LDKO.midiMessageEventPrototype) };

                // Is MIME Type Array
                LapysDevelopmentKit.functions.isMIMETypeArray = function isMIMETypeArray(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mimeTypeArray, LDKO.mimeTypeArrayPrototype) };

                // Is Mouse Event
                LapysDevelopmentKit.functions.isMouseEvent = function isMouseEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mouseEvent, LDKO.mouseEventPrototype) };

                // Is Mouse Scroll Event
                LapysDevelopmentKit.functions.isMouseScrollEvent = function isMouseScrollEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mouseScrollEvent, LDKO.mouseScrollEventPrototype) };

                // Is Mouse Wheel Event
                LapysDevelopmentKit.functions.isMouseWheelEvent = function isMouseWheelEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mouseWheelEvent, LDKO.mouseWheelEventPrototype) };

                // Is MS DCC Event
                LapysDevelopmentKit.functions.isMSDCCEvent = function isMSDCCEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSDCCEvent, LDKO.MSDCCEventPrototype) };

                // Is MS DSH Event
                LapysDevelopmentKit.functions.isMSDSHEvent = function isMSDSHEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSDSHEvent, LDKO.MSDSHEventPrototype) };

                // Is MS Gesture Event
                LapysDevelopmentKit.functions.isMSGestureEvent = function isMSGestureEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSGestureEvent, LDKO.MSGestureEventPrototype) };

                // Is MS Manipulation Event
                LapysDevelopmentKit.functions.isMSManipulationEvent = function isMSManipulationEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSManipulationEvent, LDKO.MSManipulationEventPrototype) };

                // Is MS Media Key Error
                LapysDevelopmentKit.functions.isMSMediaKeyError = function isMSMediaKeyError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.msMediaKeyError, LDKO.msMediaKeyErrorPrototype) };

                // Is MS Media Key Message Event
                LapysDevelopmentKit.functions.isMSMediaKeyMessageEvent = function isMSMediaKeyMessageEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSMediaKeyMessageEvent, LDKO.MSMediaKeyMessageEventPrototype) };

                // Is MS Media Key Needed Event
                LapysDevelopmentKit.functions.isMSMediaKeyNeededEvent = function isMSMediaKeyNeededEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSMediaKeyNeededEvent, LDKO.MSMediaKeyNeededEventPrototype) };

                // Is MS Quality Event
                LapysDevelopmentKit.functions.isMSQualityEvent = function isMSQualityEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSQualityEvent, LDKO.MSQualityEventPrototype) };

                // Is MS Site Mode Event
                LapysDevelopmentKit.functions.isMSSiteModeEvent = function isMSSiteModeEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSSiteModeEvent, LDKO.MSSiteModeEventPrototype) };

                // Is MS Video Receivers Event
                LapysDevelopmentKit.functions.isMSVideoReceiversEvent = function isMSVideoReceiversEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.MSVideoReceiversEvent, LDKO.MSVideoReceiversEventPrototype) };

                // Is Mutation Event
                LapysDevelopmentKit.functions.isMutationEvent = function isMutationEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.mutationEvent, LDKO.mutationEventPrototype) };

                // Is Named Node Map
                LapysDevelopmentKit.functions.isNamedNodeMap = function isNamedNodeMap(arg) { return LDKC.hasNamedNodeMapConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.namedNodeMap, LDKO.namedNodeMapPrototype) : LDKF.isStrictlyNamedNodeMapLike(arg) };

                // Is Named Node Map-Like
                LapysDevelopmentKit.functions.isNamedNodeMapLike = function isNamedNodeMapLike(arg) { return LDKF.isNamedNodeMap(arg) || LDKF.isStrictlyNamedNodeMapLike(arg) };

                // Is Namespace Error
                LapysDevelopmentKit.functions.isNamespaceError = function isNamespaceError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.namespaceError, LDKO.namespaceErrorPrototype) };

                // Is Navigator User Media Error
                LapysDevelopmentKit.functions.isNavigatorUserMediaError = function isNavigatorUserMediaError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.navigatorUserMediaError, LDKO.navigatorUserMediaErrorPrototype) };

                // Is Network Error
                LapysDevelopmentKit.functions.isNetworkError = function isNetworkError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.networkError, LDKO.networkErrorPrototype) };

                // Is No Modification Allowed Error
                LapysDevelopmentKit.functions.isNoModificationAllowedError = function isNoModificationAllowedError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.noModificationAllowedError, LDKO.noModificationAllowedErrorPrototype) };

                // Is Node
                LapysDevelopmentKit.functions.isNode = function isNode(arg) { return LDKC.hasNodeConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.node, LDKO.nodePrototype) : LDKF.isStrictlyNodeLike(arg) };

                // Is Node-Like
                LapysDevelopmentKit.functions.isNodeLike = function isNodeLike(arg) { return LDKF.isNode(arg) || LDKF.isStrictlyNodeLike(arg) };

                // Is Node List
                LapysDevelopmentKit.functions.isNodeList = function isNodeList(arg) { return LDKC.hasNodeListConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.nodeList, LDKO.nodeListPrototype) : LDKF.isStrictlyNodeListLike(arg) };

                // Is Node List-Like
                LapysDevelopmentKit.functions.isNodeListLike = function isNodeListLike(arg) { return LDKF.isNodeList(arg) || LDKF.isStrictlyNodeListLike(arg) };

                // Is Not Allowed Error
                LapysDevelopmentKit.functions.isNotAllowedError = function isNotAllowedError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.notAllowedError, LDKO.notAllowedErrorPrototype) };

                // Is Not Found Error
                LapysDevelopmentKit.functions.isNotFoundError = function isNotFoundError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.notFoundError, LDKO.notFoundErrorPrototype) };

                // Is Not Readable Error
                LapysDevelopmentKit.functions.isNotReadableError = function isNotReadableError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.notReadableError, LDKO.notReadableErrorPrototype) };

                // Is Not Supported Error
                LapysDevelopmentKit.functions.isNotSupportedError = function isNotSupportedError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.notSupportedError, LDKO.notSupportedErrorPrototype) };

                // Is Notify Paint Event
                LapysDevelopmentKit.functions.isNotifyPaintEvent = function isNotifyPaintEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.notifyPaintEvent, LDKO.notifyPaintEventPrototype) };

                // Is Offline Audio Completion Event
                LapysDevelopmentKit.functions.isOfflineAudioCompletionEvent = function isOfflineAudioCompletionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.offlineAudioCompletionEvent, LDKO.offlineAudioCompletionEventPrototype) };

                // Is Operation Error
                LapysDevelopmentKit.functions.isOperationError = function isOperationError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.operationError, LDKO.operationErrorPrototype) };

                // Is Oscillator Node
                LapysDevelopmentKit.functions.isOscillatorNode = function isOscillatorNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.oscillatorNode, LDKO.oscillatorNodePrototype) };

                // Is Over-Constrained Error
                LapysDevelopmentKit.functions.isOverConstrainedError = function isOverConstrainedError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.overConstrainedError, LDKO.overConstrainedErrorPrototype) };

                // Is Overflow Event
                LapysDevelopmentKit.functions.isOverflowEvent = function isOverflowEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.overflowEvent, LDKO.overflowEventPrototype) };

                // Is Page Transition Event
                LapysDevelopmentKit.functions.isPageTransitionEvent = function isPageTransitionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.pageTransitionEvent, LDKO.pageTransitionEventPrototype) };

                // Is Panner Node
                LapysDevelopmentKit.functions.isPannerNode = function isPannerNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.pannerNode, LDKO.pannerNodePrototype) };

                // Is Payment Request Update Event
                LapysDevelopmentKit.functions.isPaymentRequestUpdateEvent = function isPaymentRequestUpdateEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.paymentRequestUpdateEvent, LDKO.paymentRequestUpdateEventPrototype) };

                // Is Permission Denied Error
                LapysDevelopmentKit.functions.isPermissionDeniedError = function isPermissionDeniedError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.permissionDeniedError, LDKO.permissionDeniedErrorPrototype) };

                // Is Plugin Array
                LapysDevelopmentKit.functions.isPluginArray = function isPluginArray(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.pluginArray, LDKO.pluginArrayPrototype) };

                // Is Pointer Event
                LapysDevelopmentKit.functions.isPointerEvent = function isPointerEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.pointerEvent, LDKO.pointerEventPrototype) };

                // Is Pop-Up Blocked Event
                LapysDevelopmentKit.functions.isPopupBlockedEvent = function isPopupBlockedEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.popUpBlockedEvent, LDKO.popUpBlockedEventPrototype) };

                // Is Pop State Event
                LapysDevelopmentKit.functions.isPopStateEvent = function isPopStateEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.popStateEvent, LDKO.popStateEventPrototype) };

                // Is Presentation Connection Available Event
                LapysDevelopmentKit.functions.isPresentationConnectionAvailableEvent = function isPresentationConnectionAvailableEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.presentationConnectionAvailableEvent, LDKO.presentationConnectionAvailableEventPrototype) };

                // Is Presentation Connection Close Event
                LapysDevelopmentKit.functions.isPresentationConnectionCloseEvent = function isPresentationConnectionCloseEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.presentationConnectionCloseEvent, LDKO.presentationConnectionCloseEventPrototype) };

                // Is Progress Event
                LapysDevelopmentKit.functions.isProgressEvent = function isProgressEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.progressEvent, LDKO.progressEventPrototype) };

                // Is Promise Rejection Event
                LapysDevelopmentKit.functions.isPromiseRejectionEvent = function isPromiseRejectionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.promiseRejectionEvent, LDKO.promiseRejectionEventPrototype) };

                // Is Quota Exceeded Error
                LapysDevelopmentKit.functions.isQuotaExceededError = function isQuotaExceededError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.quotaExceededError, LDKO.quotaExceededErrorPrototype) };

                // Is Range Error
                LapysDevelopmentKit.functions.isRangeError = function isRangeError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rangeError, LDKO.rangeErrorPrototype) };

                // Is Read-Only Error
                LapysDevelopmentKit.functions.isReadOnlyError = function isReadOnlyError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.readOnlyError, LDKO.readOnlyErrorPrototype) };

                // Is Reference Error
                LapysDevelopmentKit.functions.isReferenceError = function isReferenceError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.referenceError, LDKO.referenceErrorPrototype) };

                // Is Regular Expression
                LapysDevelopmentKit.functions.isRegularExpression = function isRegularExpression(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.regularExpression, LDKO.regularExpressionPrototype) };

                // Is RTC Data Channel Event
                LapysDevelopmentKit.functions.isRTCDataChannelEvent = function isRTCDataChannelEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcDataChannelEvent, LDKO.rtcDataChannelEventPrototype) };

                // Is RTC DTMF Tone Change Event
                LapysDevelopmentKit.functions.isRTCDTMFToneChangeEvent = function isRTCDTMFToneChangeEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcDTMFToneChangeEvent, LDKO.rtcDTMFToneChangeEventPrototype) };

                // Is RTC DTLS Transport State Changed Event
                LapysDevelopmentKit.functions.isRTCDTLSTransportStateChangedEvent = function isRTCDTLSTransportStateChangedEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcDTLSTransportStateChangedEvent, LDKO.rtcDTLSTransportStateChangedEventPrototype) };

                // Is RTC ICE Candidate Pair Changed Event
                LapysDevelopmentKit.functions.isRTCICECandidatePairChangedEvent = function isRTCICECandidatePairChangedEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcICECandidatePairChangedEvent, LDKO.rtcICECandidatePairChangedEventPrototype) };

                // Is RTC ICE Gatherer Event
                LapysDevelopmentKit.functions.isRTCICEGathererEvent = function isRTCICEGathererEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcICEGathererEvent, LDKO.rtcICEGathererEventPrototype) };

                // Is RTC ICE Transport State Changed Event
                LapysDevelopmentKit.functions.isRTCICETransportStateChangedEvent = function isRTCICETransportStateChangedEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcICETransportStateChangedEvent, LDKO.rtcICETransportStateChangedEventPrototype) };

                // Is RTC Peer Connection ICE Event
                LapysDevelopmentKit.functions.isRTCPeerConnectionICEEvent = function isRTCPeerConnectionICEEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcPeerConnectionICEEvent, LDKO.rtcPeerConnectionICEEventPrototype) };

                // Is RTC Source Conflict Event
                LapysDevelopmentKit.functions.isRTCSsrcConflictEvent = function isRTCSsrcConflictEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcSsrcConflictEvent, LDKO.rtcSsrcConflictEventPrototype) };

                // Is RTC Track Event
                LapysDevelopmentKit.functions.isRTCTrackEvent = function isRTCTrackEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.rtcTrackEvent, LDKO.rtcTrackEventPrototype) };

                // Is Script Processor Node
                LapysDevelopmentKit.functions.isScriptProcessorNode = function isScriptProcessorNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.scriptProcessorNode, LDKO.scriptProcessorNodePrototype) };

                // Is Scroll Area Event
                LapysDevelopmentKit.functions.isScrollAreaEvent = function isScrollAreaEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.scrollAreaEvent, LDKO.scrollAreaEventPrototype) };

                // Is Security Error
                LapysDevelopmentKit.functions.isSecurityError = function isSecurityError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.securityError, LDKO.securityErrorPrototype) };

                // Is Security Policy Violation Event
                LapysDevelopmentKit.functions.isSecurityPolicyViolationEvent = function isSecurityPolicyViolationEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.securityPolicyViolationEvent, LDKO.securityPolicyViolationEventPrototype) };

                // Is Sensor Error Event
                LapysDevelopmentKit.functions.isSensorErrorEvent = function isSensorErrorEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.sensorErrorEvent, LDKO.sensorErrorEventPrototype) };

                // Is Speech Recognition Error
                LapysDevelopmentKit.functions.isSpeechRecognitionError = function isSpeechRecognitionError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.speechRecognitionError, LDKO.speechRecognitionErrorPrototype) };

                // Is Speech Synthesis Error Event
                LapysDevelopmentKit.functions.isSpeechSynthesisErrorEvent = function isSpeechSynthesisErrorEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.speechSynthesisErrorEvent, LDKO.speechSynthesisErrorEventPrototype) };

                // Is Speech Synthesis Event
                LapysDevelopmentKit.functions.isSpeechSynthesisEvent = function isSpeechSynthesisEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.speechSynthesisEvent, LDKO.speechSynthesisEventPrototype) };

                // Is Stereo Panner Node
                LapysDevelopmentKit.functions.isStereoPannerNode = function isStereoPannerNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.stereoPannerNode, LDKO.stereoPannerNodePrototype) };

                // Is Storage Event
                LapysDevelopmentKit.functions.isStorageEvent = function isStorageEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.storageEvent, LDKO.storageEventPrototype) };

                // Is Strictly Array-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyArrayLike = function isStrictlyArrayLike(arg) {
                    // Return
                    return LDKF.isArguments(arg) ||
                        LDKF.isBigInt64Array(arg) || LDKF.isBigUint64Array(arg) ||
                        LDKF.isCSSNumericArray(arg) ||
                        LDKF.isFloat32Array(arg) || LDKF.isFloat64Array(arg) ||
                        LDKF.isHTMLAllCollection(arg) || LDKF.isHTMLCollection(arg) ||
                        LDKF.isInt8Array(arg) || LDKF.isInt16Array(arg) || LDKF.isInt32Array(arg) ||
                        LDKF.isMIMETypeArray(arg) ||
                        LDKF.isNamedNodeMap(arg) || LDKF.isNodeList(arg) ||
                        LDKF.isPluginArray(arg) ||
                        LDKF.isUint8Array(arg) || LDKF.isUint8ClampedArray(arg) || LDKF.isUint16Array(arg) || LDKF.isUint32Array(arg)
                };

                // Is Strictly Document-Like
                LapysDevelopmentKit.functions.isStrictlyDocumentLike = function isStrictlyDocumentLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasDocumentConstructor ? arg instanceof LDKO.document : (
                            LDKF.isNodeLike(arg) &&
                            (LDKF.objectPrototypeHasProperty(arg, "activeElement") ? LDKF.isHTMLElementLike(LDKF.objectPrototypeGetProperty(arg, "activeElement")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "alinkColor") ? LDKF.stringPrototypeIsHexadecimal(LDKF.objectPrototypeGetProperty(arg, "alinkColor")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "all") ? LDKF.isHTMLAllCollection(LDKF.objectPrototypeGetProperty(arg, "all")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "anchors") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "anchors")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "applets") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "applets")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "bgColor") ? LDKF.stringPrototypeIsHexadecimal(LDKF.objectPrototypeGetProperty(arg, "bgColor")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "body") ? LDKF.isHTMLBodyElement(LDKF.objectPrototypeGetProperty(arg, "body")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "charset") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "charset")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "clear") ? LDKT.isDocumentPrototypeClearMethod(LDKF.objectPrototypeGetProperty(arg, "clear")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "close") ? LDKT.isDocumentPrototypeCloseMethod(LDKF.objectPrototypeGetProperty(arg, "close")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "compatMode") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "compatMode")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "cookie") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "cookie")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "createAttribute") ? LDKT.isDocumentPrototypeCreateAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "createAttribute")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "createComment") ? LDKT.isDocumentPrototypeCreateCommentMethod(LDKF.objectPrototypeGetProperty(arg, "createComment")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "createDocumentFragment") ? LDKT.isDocumentPrototypeCreateDocumentFragmentMethod(LDKF.objectPrototypeGetProperty(arg, "createDocumentFragment")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "createElement") ? LDKT.isDocumentPrototypeCreateElementMethod(LDKF.objectPrototypeGetProperty(arg, "createElement")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "createTextNode") ? LDKT.isDocumentPrototypeCreateTextNodeMethod(LDKF.objectPrototypeGetProperty(arg, "createTextNode")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "designMode") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "designMode")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "doctype") ? (function(documentType) { return LDKC.hasDocumentTypeConstructor ? documentType : true })(LDKF.objectPrototypeGetProperty(arg, "doctype")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "documentElement") ? LDKF.isHTMLElementLike(LDKF.objectPrototypeGetProperty(arg, "documentElement")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "domain") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "domain")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "elementFromPoint") ? LDKT.isDocumentPrototypeElementFromPointMethod(LDKF.objectPrototypeGetProperty(arg, "elementFromPoint")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "embeds") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "embeds")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "execCommand") ? LDKT.isDocumentPrototypeExecCommandMethod(LDKF.objectPrototypeGetProperty(arg, "execCommand")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "fgColor") ? LDKF.stringPrototypeIsHexadecimal(LDKF.objectPrototypeGetProperty(arg, "fgColor")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "firstChild") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "firstChild")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "forms") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "forms")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "getElementById") ? LDKT.isDocumentPrototypeGetElementByIdMethod(LDKF.objectPrototypeGetProperty(arg, "getElementById")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "getElementsByName") ? LDKT.isDocumentPrototypeGetElementsByNameMethod(LDKF.objectPrototypeGetProperty(arg, "getElementsByName")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "getElementsByTagName") ? LDKT.isDocumentPrototypeGetElementsByTagNameMethod(LDKF.objectPrototypeGetProperty(arg, "getElementsByTagName")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "hasFocus") ? LDKF.isFunction(LDKT.isDocumentPrototypeHasFocusMethod(arg, "hasFocus")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "images") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "images")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "implementation") ? LDKF.objectPrototypeGetProperty(arg, "implementation") : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "lastChild") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "lastChild")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "lastModified") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "lastModified")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "linkColor") ? LDKF.stringPrototypeIsHexadecimal(LDKF.objectPrototypeGetProperty(arg, "linkColor")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "links") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "links")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "nextSibling") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "nextSibling")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "previousSibling") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "previousSibling")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onclick") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onclick")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "oncontextmenu") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncontextmenu")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "ondblclick") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondblclick")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "ondragstart") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragstart")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onkeydown") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeydown")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onkeypress") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeypress")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onkeyup") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeyup")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onmousedown") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousedown")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onmousemove") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousemove")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onmouseout") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseout")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onmouseover") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseover")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onmousewheel") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousewheel")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onreadystatechange") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onreadystatechange")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onselectionchange") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselectionchange")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "onselectstart") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselectstart")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "open") ? LDKT.isDocumentPrototypeOpenMethod(LDKF.objectPrototypeGetProperty(arg, "open")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "parentNode") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "parentNode")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "plugins") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "plugins")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "queryCommandEnabled") ? LDKT.isDocumentPrototypeQueryCommandEnabledMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandEnabled")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "queryCommandIndeterm") ? LDKT.isDocumentPrototypeQueryCommandIndetermMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandIndeterm")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "queryCommandState") ? LDKT.isDocumentPrototypeQueryCommandStateMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandState")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "queryCommandSupported") ? LDKT.isDocumentPrototypeQueryCommandSupportedMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandSupported")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "queryCommandValue") ? LDKT.isDocumentPrototypeQueryCommandValueMethod(LDKF.objectPrototypeGetProperty(arg, "queryCommandValue")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "readyState") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "readyState")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "referrer") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "referrer")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "scripts") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "scripts")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "styleSheets") ? LDKF.isStyleSheetList(LDKF.objectPrototypeGetProperty(arg, "styleSheets")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "title") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "title")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "vlinkColor") ? LDKF.stringPrototypeIsHexadecimal(LDKF.objectPrototypeGetProperty(arg, "vlinkColor")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "write") ? LDKT.isDocumentPrototypeWriteMethod(LDKF.objectPrototypeGetProperty(arg, "write")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "writeln") ? LDKT.isDocumentPrototypeWriteLineMethod(LDKF.objectPrototypeGetProperty(arg, "writeln")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "URL") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "URL")) : true)
                        )
                    )
                };

                // Is Strictly Element-Like
                LapysDevelopmentKit.functions.isStrictlyElementLike = function isStrictlyElementLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasElementConstructor ? arg instanceof LDKO.element : (
                            LDKT.isComponent(arg) || (
                                LDKF.isNodeLike(arg) &&
                                (LDKF.objectPrototypeHasProperty(arg, "childNodes") ? LDKF.isNodeList(LDKF.objectPrototypeGetProperty(arg, "childNodes")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "children") ? LDKF.isHTMLCollection(LDKF.objectPrototypeGetProperty(arg, "children")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "className") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "className")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "clientHeight") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientHeight")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "clientLeft") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientLeft")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "clientTop") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientTop")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "clientWidth") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "clientWidth")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "getAttribute") ? LDKT.isElementPrototypeGetAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "getAttribute")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "getAttributeNode") ? LDKT.isElementPrototypeGetAttributeNodeMethod(LDKF.objectPrototypeGetProperty(arg, "getAttributeNode")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "getBoundingClientRect") ? LDKT.isElementPrototypeGetBoundingClientRectangleMethod(LDKF.objectPrototypeGetProperty(arg, "getBoundingClientRect")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "getClientRects") ? LDKT.isElementPrototypeGetClientRectanglesMethod(LDKF.objectPrototypeGetProperty(arg, "getClientRects")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "getElementsByTagName") ? LDKT.isElementPrototypeGetElementsByTagNameMethod(LDKF.objectPrototypeGetProperty(arg, "getElementsByTagName")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "id") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "id")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "innerHTML") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "innerHTML")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "insertAdjacentElement") ? LDKT.isElementPrototypeInsertAdjacentElementMethod(LDKF.objectPrototypeGetProperty(arg, "insertAdjacentElement")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "insertAdjacentHTML") ? LDKT.isElementPrototypeInsertAdjacentHTMLMethod(LDKF.objectPrototypeGetProperty(arg, "insertAdjacentHTML")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "insertAdjacentText") ? LDKT.isElementPrototypeInsertAdjacentTextMethod(LDKF.objectPrototypeGetProperty(arg, "insertAdjacentText")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "nextSibling") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "nextSibling")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onbeforecopy") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforecopy")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onbeforecut") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforecut")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onbeforepaste") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onbeforepaste")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "outerHTML") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "outerHTML")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "parentNode") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "parentNode")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "previousSibling") ? LDKF.isNodeLike(LDKF.objectPrototypeGetProperty(arg, "previousSibling")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "removeAttribute") ? LDKT.isElementPrototypeRemoveAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "removeAttribute")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "removeAttributeNode") ? LDKT.isElementPrototypeRemoveAttributeNodeMethod(LDKF.objectPrototypeGetProperty(arg, "removeAttributeNode")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "scrollHeight") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollHeight")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "setAttribute") ? LDKT.isElementPrototypeScrollIntoViewMethod(LDKF.objectPrototypeGetProperty(arg, "setAttribute")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "scrollLeft") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollLeft")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "scrollTop") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollTop")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "scrollWidth") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "scrollWidth")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "setAttribute") ? LDKT.isElementPrototypeSetAttributeMethod(LDKF.objectPrototypeGetProperty(arg, "setAttribute")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "setAttributeNode") ? LDKT.isElementPrototypeSetAttributeNodeMethod(LDKF.objectPrototypeGetProperty(arg, "setAttributeNode")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "tagName") ? LDKT.isElementName(LDKF.objectPrototypeGetProperty(arg, "tagName")) : true)
                            )
                        )
                    )
                };

                // Is Strictly Error-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyErrorLike = function isStrictlyErrorLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKF.isAbortError(arg) ||
                        LDKF.isConstraintError(arg) || LDKF.isConstraintNotSatisfiedError(arg) ||
                        LDKF.isDataError(arg) || LDKF.isDataCloneError(arg) || LDKF.isDevicesNotFoundError(arg) || LDKF.isDOMError(arg) || LDKF.isDOMException(arg) ||
                        LDKF.isEncodingError(arg) || LDKF.isEvalError(arg) || LDKF.isEventException(arg) ||
                        LDKF.isHierarchyRequestError(arg) ||
                        LDKF.isIndexSizeError(arg) || LDKF.isInternalError(arg) || LDKF.isInvalidAccessError(arg) || LDKF.isInvalidCharacterError(arg) || LDKF.isInvalidModificationError(arg) || LDKF.isInvalidNodeTypeError(arg) || LDKF.isInvalidStateError(arg) ||
                        LDKF.isMediaError(arg) || LDKF.isMediaKeyError(arg) || LDKF.isMediaStreamError(arg) || LDKF.isMSMediaKeyError(arg) ||
                        LDKF.isNamespaceError(arg) || LDKF.isNavigatorUserMediaError(arg) || LDKF.isNetworkError(arg) || LDKF.isNoModificationAllowedError(arg) || LDKF.isNotAllowedError(arg) || LDKF.isNotFoundError(arg) || LDKF.isNotReadableError(arg) || LDKF.isNotSupportedError(arg) ||
                        LDKF.isOperationError(arg) || LDKF.isOverConstrainedError(arg) ||
                        LDKF.isPermissionDeniedError(arg) || LDKF.isQuotaExceededError(arg) ||
                        LDKF.isRangeError(arg) || LDKF.isReadOnlyError(arg) || LDKF.isReferenceError(arg) ||
                        LDKF.isSecurityError(arg) || LDKF.isSpeechRecognitionError(arg) || LDKF.isSyntaxError(arg) ||
                        LDKF.isTimeoutError(arg) || LDKF.isTrackStartError(arg) || LDKF.isTransactionInactiveError(arg) || LDKF.isTypeError(arg) || LDKF.isTypeMismatchError(arg) ||
                        LDKF.isUnknownError(arg) || LDKF.isURIError(arg) || LDKF.isURLMismatchError(arg) ||
                        LDKF.isVersionError(arg) ||
                        LDKF.isWebkitSpeechRecognitionError(arg) || LDKF.isWrongDocumentError(arg) ||
                        LDKT.isStrictlyConstructibleObject(arg, LDKO.error, LDKO.errorPrototype)
                    )
                };

                // Is Strictly Event-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyEventLike = function isStrictlyEventLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasEventConstructor ? arg instanceof LDKO.event : (
                            STRICT
                        )
                    )
                };

                // Is Strictly Event Target-Like
                LapysDevelopmentKit.functions.isStrictlyEventTargetLike = function isStrictlyEventTargetLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasEventTargetConstructor ? arg instanceof LDKO.eventTarget : (
                            (LDKF.objectPrototypeHasProperty(arg, "addEventListener") ? LDKT.isEventTargetPrototypeAddEventListenerMethod(LDKF.objectPrototypeGetProperty(arg, "addEventListener")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "attachEvent") ? LDKT.isEventTargetPrototypeAttachEventMethod(LDKF.objectPrototypeGetProperty(arg, "attachEvent")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "detachEvent") ? LDKT.isEventTargetPrototypeDetachEventMethod(LDKF.objectPrototypeGetProperty(arg, "detachEvent")) : true) &&
                            (LDKF.objectPrototypeHasProperty(arg, "removeEventListener") ? LDKT.isEventTargetPrototypeRemoveEventListenerMethod(LDKF.objectPrototypeGetProperty(arg, "removeEventListener")) : true)
                        )
                    )
                };

                // Is Strictly HTML All Collection-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyHTMLAllCollectionLike = function isStrictlyHTMLAllCollectionLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLAllCollectionConstructor ? arg instanceof LDKO.htmlAllCollection : STRICT
                    )
                };

                // Is Strictly HTML Collection-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyHTMLCollectionLike = function isStrictlyHTMLCollectionLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLCollectionConstructor ? arg instanceof LDKO.htmlCollection : STRICT
                    )
                };

                // Is Strictly HTML Document-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLDocumentLike = function isStrictlyHTMLDocumentLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLDocumentConstructor ? arg instanceof LDKO.htmlDocument : STRICT
                    )
                };

                // Is Strictly HTML Element-Like
                LapysDevelopmentKit.functions.isStrictlyHTMLElementLike = function isStrictlyHTMLElementLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasHTMLElementConstructor ? arg instanceof LDKO.htmlElement : (
                            LDKT.isComponent(arg) || (
                                LDKF.isElementLike(arg) &&
                                (LDKF.objectPrototypeHasProperty(arg, "accessKey") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "accessKey")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "blur") ? LDKT.isHTMLElementPrototypeBlurMethod(LDKF.objectPrototypeGetProperty(arg, "blur")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "click") ? LDKT.isHTMLElementPrototypeClickMethod(LDKF.objectPrototypeGetProperty(arg, "click")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "contentEditable") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "contentEditable")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "dir") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "dir")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "focus") ? LDKT.isHTMLElementPrototypeFocusMethod(LDKF.objectPrototypeGetProperty(arg, "focus")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "innerText") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "innerText")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "lang") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "lang")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "offsetHeight") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetHeight")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "offsetLeft") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetLeft")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "offsetTop") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetTop")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "offsetWidth") ? LDKF.numberPrototypeIsPositive(LDKF.objectPrototypeGetProperty(arg, "offsetWidth")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onblur") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onblur")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onchange") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onchange")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onclick") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onclick")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "oncontextmenu") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncontextmenu")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "oncopy") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncopy")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "oncuechange") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncuechange")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "oncut") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oncut")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondblclick") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondblclick")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondrag") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondrag")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondragend") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragend")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondragenter") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragenter")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondragleave") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragleave")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondragover") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragover")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondragstart") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondragstart")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ondrop") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "ondrop")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onfocus") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onfocus")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "oninvalid") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "oninvalid")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onkeydown") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeydown")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onkeypress") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeypress")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onkeyup") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onkeyup")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onload") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onload")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmousedown") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousedown")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmouseenter") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseenter")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmouseleave") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseleave")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmousemove") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousemove")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmouseout") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseout")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmouseover") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseover")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmouseup") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmouseup")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onmousewheel") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onmousewheel")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onpaste") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onpaste")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onresize") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onresize")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onscroll") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onscroll")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onselect") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselect")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "onselectstart") ? LDKT.isEventHandler(LDKF.objectPrototypeGetProperty(arg, "onselectstart")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "outerText") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "outerText")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "spellcheck") ? LDKF.isBoolean(LDKF.objectPrototypeGetProperty(arg, "spellcheck")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "tabIndex") ? LDKF.numberPrototypeIsPositiveInteger(LDKF.objectPrototypeGetProperty(arg, "tabIndex")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "title") ? LDKF.isString(LDKF.objectPrototypeGetProperty(arg, "title")) : true)
                            )
                        )
                    )
                };

                // Is Strictly Named Node Map-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyNamedNodeMapLike = function isStrictlyNamedNodeMapLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasNamedNodeMapConstructor ? arg instanceof LDKO.namedNodeMap : STRICT
                    )
                };

                // Is Strictly Node-Like
                LapysDevelopmentKit.functions.isStrictlyNodeLike = function isStrictlyNodeLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasNodeConstructor ? arg instanceof LDKO.node : (
                            LDKF.isEventTargetLike(arg) || (
                                (LDKF.objectPrototypeHasProperty(arg, "appendChild") ? LDKT.isNodePrototypeAppendChildMethod(LDKF.objectPrototypeGetProperty(arg, "appendChild")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "childNodes") ? LDKF.isNodeList(LDKF.objectPrototypeGetProperty(arg, "childNodes")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "cloneNode") ? LDKT.isNodePrototypeCloneNodeMethod(LDKF.objectPrototypeGetProperty(arg, "cloneNode")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "contains") ? LDKT.isNodePrototypeContainsMethod(LDKF.objectPrototypeGetProperty(arg, "contains")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "hasChildNodes") ? LDKT.isNodePrototypeHasChildNodesMethod(LDKF.objectPrototypeGetProperty(arg, "hasChildNodes")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "insertBefore") ? LDKT.isNodePrototypeInsertBeforeMethod(LDKF.objectPrototypeGetProperty(arg, "insertBefore")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "nodeName") ? LDKT.isElementName(LDKF.objectPrototypeGetProperty(arg, "nodeName")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "nodeType") ? (function(nodeType) { return LDKF.numberPrototypeIsPositiveInteger(nodeType) && nodeType == LDKO.nodePrototypeElementNode })(LDKF.objectPrototypeGetProperty(arg, "nodeType")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "normalize") ? LDKT.isNodePrototypeNormalizeMethod(LDKF.objectPrototypeGetProperty(arg, "normalize")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "ownerDocument") ? LDKF.isDocumentLike(LDKF.objectPrototypeGetProperty(arg, "ownerDocument")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "removeChild") ? LDKT.isNodePrototypeRemoveChildMethod(LDKF.objectPrototypeGetProperty(arg, "removeChild")) : true) &&
                                (LDKF.objectPrototypeHasProperty(arg, "replaceChild") ? LDKT.isNodePrototypeReplaceChildMethod(LDKF.objectPrototypeGetProperty(arg, "replaceChild")) : true)
                            )
                        )
                    )
                };

                // Is Strictly Node List-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyNodeListLike = function isStrictlyNodeListLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasNodeListConstructor ? arg instanceof LDKO.nodeList : STRICT
                    )
                };

                // Is Strictly XML Document-Like --- CHECKPOINT ---
                LapysDevelopmentKit.functions.isStrictlyXMLDocumentLike = function isStrictlyXMLDocumentLike(arg) {
                    // Return
                    return typeof arg == "object" && (
                        LDKC.hasXMLDocumentConstructor ? arg instanceof LDKO.xmlDocument : STRICT
                    )
                };

                // Is Syntax Error
                LapysDevelopmentKit.functions.isSyntaxError = function isSyntaxError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.syntaxError, LDKO.syntaxErrorPrototype) };

                // Is SVG Zoom Event
                LapysDevelopmentKit.functions.isSVGZoomEvent = function isSVGZoomEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.svgZoomEvent, LDKO.svgZoomEventPrototype) };

                // Is Symbol
                LapysDevelopmentKit.functions.isSymbol = function isSymbol(arg) { return typeof arg == "symbol" && LDKT.isStrictlyConstructibleObject(arg, LDKO.symbol, LDKO.symbolPrototype, STRICT = true) };

                // Is Text Event
                LapysDevelopmentKit.functions.isTextEvent = function isTextEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.textEvent, LDKO.textEventPrototype) };

                // Is Time Event
                LapysDevelopmentKit.functions.isTimeEvent = function isTimeEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.timeEvent, LDKO.timeEventPrototype) };

                // Is Timeout Error
                LapysDevelopmentKit.functions.isTimeoutError = function isTimeoutError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.timeoutError, LDKO.timeoutErrorPrototype) };

                // Is Touch Event
                LapysDevelopmentKit.functions.isTouchEvent = function isTouchEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.touchEvent, LDKO.touchEventPrototype) };

                // Is Track Event
                LapysDevelopmentKit.functions.isTrackEvent = function isTrackEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.trackEvent, LDKO.trackEventPrototype) };

                // Is Track Start Error
                LapysDevelopmentKit.functions.isTrackStartError = function isTrackStartError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.trackStartError, LDKO.trackStartErrorPrototype) };

                // Is Transition Event
                LapysDevelopmentKit.functions.isTransitionEvent = function isTransitionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.transitionEvent, LDKO.transitionEventPrototype) };

                // Is Transaction Inactive Error
                LapysDevelopmentKit.functions.isTransactionInactiveError = function isTransactionInactiveError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.transactionInactiveError, LDKO.transactionInactiveErrorPrototype) };

                // Is Type Error
                LapysDevelopmentKit.functions.isTypeError = function isTypeError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.typeError, LDKO.typeErrorPrototype) };

                // Is Type Mismatch Error
                LapysDevelopmentKit.functions.isTypeMismatchError = function isTypeMismatchError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.typeMismatchError, LDKO.typeMismatchErrorPrototype) };

                // Is UI Event
                LapysDevelopmentKit.functions.isUIEvent = function isUIEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.uiEvent, LDKO.uiEventPrototype) };

                // Is Unknown Error
                LapysDevelopmentKit.functions.isUnknownError = function isUnknownError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.unknownError, LDKO.unknownErrorPrototype) };

                // Is Unsigned 8-Bit Integer Array
                LapysDevelopmentKit.functions.isUint8Array = function isUint8Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.uint8Array, LDKO.uint8ArrayPrototype) };

                // Is Unsigned 8-Bit Integer Clamped Array
                LapysDevelopmentKit.functions.isUint8ClampedArray = function isUint8ClampedArray(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.uint8ClampedArray, LDKO.uint8ClampedArrayPrototype) };

                // Is Unsigned 16-Bit Integer Array
                LapysDevelopmentKit.functions.isUint16Array = function isUint16Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.uint16Array, LDKO.uint16ArrayPrototype) };

                // Is Unsigned 32-Bit Integer Array
                LapysDevelopmentKit.functions.isUint32Array = function isUint32Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.uint32Array, LDKO.uint32ArrayPrototype) };

                // Is URI Error
                LapysDevelopmentKit.functions.isURIError = function isURIError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.uriError, LDKO.uriErrorPrototype) };

                // Is URL Mismatch Error
                LapysDevelopmentKit.functions.isURLMismatchError = function isURLMismatchError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.urlMismatchError, LDKO.urlMismatchErrorPrototype) };

                // Is USB Connection Event
                LapysDevelopmentKit.functions.isUSBConnectionEvent = function isUSBConnectionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.usbConnectionEvent, LDKO.usbConnectionEventPrototype) };

                // Is Version Error
                LapysDevelopmentKit.functions.isVersionError = function isVersionError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.versionError, LDKO.versionErrorPrototype) };

                // Is VR Display Event
                LapysDevelopmentKit.functions.isVRDisplayEvent = function isVRDisplayEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.vrDisplayEvent, LDKO.vrDisplayEventPrototype) };

                // Is Wave Shaper Node
                LapysDevelopmentKit.functions.isWaveShaperNode = function isWaveShaperNode(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.waveShaperNode, LDKO.waveShaperNodePrototype) };

                // Is Web GL Context Event
                LapysDevelopmentKit.functions.isWebGLContextEvent = function isWebGLContextEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.webGLContextEvent, LDKO.webGLContextEventPrototype) };

                // Is Webkit Animation Event
                LapysDevelopmentKit.functions.isWebkitAnimationEvent = function isWebkitAnimationEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.webkitAnimationEvent, LDKO.webkitAnimationEventPrototype) };

                // Is Webkit Speech Recognition Error
                LapysDevelopmentKit.functions.isWebkitSpeechRecognitionError = function isWebkitSpeechRecognitionError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.webkitSpeechRecognitionError, LDKO.webkitSpeechRecognitionErrorPrototype) };

                // Is Webkit Speech Recognition Event
                LapysDevelopmentKit.functions.isWebkitSpeechRecognitionEvent = function isWebkitSpeechRecognitionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.webkitSpeechRecognitionEvent, LDKO.webkitSpeechRecognitionEventPrototype) };

                // Is Webkit Transition Event
                LapysDevelopmentKit.functions.isWebkitTransitionEvent = function isWebkitTransitionEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.webkitTransitionEvent, LDKO.webkitTransitionEventPrototype) };

                // Is Wheel Event
                LapysDevelopmentKit.functions.isWheelEvent = function isWheelEvent(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.wheelEvent, LDKO.wheelEventPrototype) };

                // Is Window
                LapysDevelopmentKit.functions.isWindow = function isWindow(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.window, LDKO.windowPrototype) };

                // Is Wrong Document Error
                LapysDevelopmentKit.functions.isWrongDocumentError = function isWrongDocumentError(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.wrongDocumentError, LDKO.wrongDocumentErrorPrototype) };

                // Is XML Document
                LapysDevelopmentKit.functions.isXMLDocument = function isXMLDocument(arg) { return LDKC.hasXMLDocumentConstructor ? LDKT.isStrictlyConstructibleObject(arg, LDKO.xmlDocument, LDKO.xmlDocumentPrototype) : LDKF.isStrictlyXMLDocumentLike(arg) };

                // Is XML Document-Like
                LapysDevelopmentKit.functions.isXMLDocumentLike = function isXMLDocumentLike(arg) { return LDKF.isXMLDocument(arg) || LDKF.isStrictlyXMLDocumentLike(arg) };

                // Is XML HTTP Request Event Target
                LapysDevelopmentKit.functions.isXMLHTTPRequestEventTarget = function isXMLHTTPRequestEventTarget(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.xmlHTTPRequestEventTarget, LDKO.xmlHTTPRequestEventTargetPrototype) };

                // Is 8-Bit Integer Array
                LapysDevelopmentKit.functions.isInt8Array = function isInt8Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.int8Array, LDKO.int8ArrayPrototype) };

                // Is 16-Bit Integer Array
                LapysDevelopmentKit.functions.isInt16Array = function isInt16Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.int16Array, LDKO.int16ArrayPrototype) };

                // Is 32-Bit Float Array
                LapysDevelopmentKit.functions.isFloat32Array = function isFloat32Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.float32Array, LDKO.float32ArrayPrototype) };

                // Is 32-Bit Integer Array
                LapysDevelopmentKit.functions.isInt32Array = function isInt32Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.int32Array, LDKO.int32ArrayPrototype) };

                // Is 64-Bit Float Array
                LapysDevelopmentKit.functions.isFloat64Array = function isFloat64Array(arg) { return LDKT.isStrictlyConstructibleObject(arg, LDKO.float64Array, LDKO.float64ArrayPrototype) };

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

                // Throw Event Exception
                LapysDevelopmentKit.functions.throwEventException = function throwEventException(message) {
                    // Error Handling
                    try { throw new LDKO.eventException }
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

            /* Constants, Objects
                    --- NOTE ---
                        #Lapys: If the requested objects are not globally available via it's variable name,
                            then use an alternative method to return said object.
            */
                // Active X Object
                LapysDevelopmentKit.objects.activeXObject = LDKT.getObjectNativeConstructorByName(GLOBAL, "ActiveXObject");
                    // Prototype
                    LapysDevelopmentKit.objects.activeXObjectPrototype = LDKF.objectPrototypeGetProperty(LDKO.activeXObject, "prototype");

                // Has Active X Object Constructor
                LapysDevelopmentKit.constants.hasActiveXObjectConstructor = !LDKF.isVoid(LDKO.activeXObject);

                // Analyser Node
                LapysDevelopmentKit.objects.analyserNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "AnalyserNode");
                    // Prototype
                    LapysDevelopmentKit.objects.analyserNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.analyserNode, "prototype");

                // Animation Event
                LapysDevelopmentKit.objects.animationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "AnimationEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.animationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.animationEvent, "prototype");

                // Animation Playback Event
                LapysDevelopmentKit.objects.animationPlaybackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "AnimationPlaybackEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.animationPlaybackPrototype = LDKF.objectPrototypeGetProperty(LDKO.animationPlayback, "prototype");

                // Application Cache Error Event
                LapysDevelopmentKit.objects.applicationCacheErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ApplicationCacheErrorEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.applicationCacheErrorEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.applicationCacheErrorEvent, "prototype");

                // Attribute
                LapysDevelopmentKit.objects.attribute = LDKT.getObjectNativeConstructorByName(GLOBAL, "Attr", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.attributePrototype = LDKF.objectPrototypeGetProperty(LDKO.attribute, "prototype");

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
                    // Prototype
                    LapysDevelopmentKit.objects.audioProcessingEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.audioProcessingEvent, "prototype");

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
                    // Prototype
                    LapysDevelopmentKit.objects.beforeInstallPromptPrototype = LDKF.objectPrototypeGetProperty(LDKO.beforeInstallPrompt, "prototype");

                // Before Load Event
                LapysDevelopmentKit.objects.beforeLoadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "BeforeLoadEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.beforeLoadEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.beforeLoadEvent, "prototype");

                // Before Unload Event
                LapysDevelopmentKit.objects.beforeUnloadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "BeforeUnloadEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.beforeUnloadEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.beforeUnloadEvent, "prototype");

                // Big Unsigned 64-Bit Integer Array
                LapysDevelopmentKit.objects.bigUint64Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "BigUint64Array");
                    // Prototype
                    LapysDevelopmentKit.objects.bigUint64ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.bigUint64Array, "prototype");

                // Big 64-Bit Integer Array
                LapysDevelopmentKit.objects.bigInt64Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "BigInt64Array");
                    // Prototype
                    LapysDevelopmentKit.objects.bigInt64ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.bigInt64Array, "prototype");

                // Bi-quad Filter Node
                LapysDevelopmentKit.objects.biquadFilterNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "BiquadFilterNode");
                    // Prototype
                    LapysDevelopmentKit.objects.biquadFilterNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.biquadFilterNode, "prototype");

                // Blob Event
                LapysDevelopmentKit.objects.blobEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "BlobEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.blobEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.blobEvent, "prototype");

                // Cancel Animation Frame
                LapysDevelopmentKit.objects.cancelAnimationFrame = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "mozCancelAnimationFrame") ||
                        LDKF.objectPrototypeGetProperty(GLOBAL, "msCancelAnimationFrame") ||
                        LDKF.objectPrototypeGetProperty(GLOBAL, "webkitCancelAnimationFrame") ||
                        LDKF.objectPrototypeGetProperty(GLOBAL, "cancelAnimationFrame");

                    // Logic
                    if (!LDKF.isVoid(method))
                        // Logic > (...)
                        if (
                            (function(stream) { return stream == "mozCancelAnimationFrame" || stream == "msCancelAnimationFrame" || stream == "cancelAnimationFrame" || stream == "webkitCancelAnimationFrame" })(LDKF.functionPrototypeGetName(method)) &&
                            LDKF.functionPrototypeIsNative(method)
                        ) return method;
                        else LDKF.error.nativeToEnvironment("`cancelAnimationFrame` function");

                    else
                        // Return
                        return function cancelAnimationFrame(handle) { return LDKF.clearTimeout(handle) }
                })();

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
                    // Prototype
                    LapysDevelopmentKit.objects.clipboardEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.clipboardEvent, "prototype");

                // Close Event
                LapysDevelopmentKit.objects.closeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "CloseEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.closeEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.closeEvent, "prototype");

                // Composition Event
                LapysDevelopmentKit.objects.compositionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "CompositionEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.compositionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.compositionEvent, "prototype");

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

                // Constant Source Node
                LapysDevelopmentKit.objects.constantSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ConstantSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.constantSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.constantSourceNode, "prototype");

                // Convolver Node
                LapysDevelopmentKit.objects.convolverNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ConvolverNode");
                    // Prototype
                    LapysDevelopmentKit.objects.convolverNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.convolverNode, "prototype");

                // CSS Numeric Array
                LapysDevelopmentKit.objects.cssNumericArray = LDKT.getObjectNativeConstructorByName(GLOBAL, "CSSNumericArray");
                    // Prototype
                    LapysDevelopmentKit.objects.cssNumericArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.cssNumericArray, "prototype");

                // Custom Element Registry
                LapysDevelopmentKit.objects.customElementRegistry = LDKT.getObjectNativeConstructorByName(GLOBAL, "CustomElementRegistry");
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

                // Supports Custom Elements
                LapysDevelopmentKit.constants.supportsCustomElements = !LDKF.isVoid(LDKO.customElementRegistry);

                // Custom Elements
                LapysDevelopmentKit.constants.customElements = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "customElements");

                    // Logic
                    if (LDKC.isBrowserEnvironment && LDKC.supportsCustomElements)
                        // Logic > (...)
                        if (
                            typeof object == "object" &&
                            LDKF.toString(object) == "[object CustomElementRegistry]" &&
                            LDKF.objectPrototypeConstructor(customElements) === LDKO.customElementRegistry &&
                            LDKF.objectPrototypePrototype(customElements) === LDKO.customElementRegistryPrototype
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`customElements` object")
                })();

                // Custom Event
                LapysDevelopmentKit.objects.customEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "CustomEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.customEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.customEvent, "prototype");

                // Date
                LapysDevelopmentKit.objects.date = LDKT.getObjectNativeConstructorByName(GLOBAL, "Date");
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

                // Delay Node
                LapysDevelopmentKit.objects.delayNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "DelayNode");
                    // Prototype
                    LapysDevelopmentKit.objects.delayNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.delayNode, "prototype");

                // Detached View Control Event
                LapysDevelopmentKit.objects.detachedViewControlEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DetachedViewControlEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.detachedViewControlEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.detachedViewControlEvent, "prototype");

                // Device Light Event
                LapysDevelopmentKit.objects.deviceLightEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DeviceLightEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.deviceLightEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.deviceLightEvent, "prototype");

                // Device Motion Event
                LapysDevelopmentKit.objects.deviceMotionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DeviceMotionEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.deviceMotionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.deviceMotionEvent, "prototype");

                // Device Orientation Event
                LapysDevelopmentKit.objects.deviceOrientationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DeviceOrientationEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.deviceOrientationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.deviceOrientationEvent, "prototype");

                // Document --- NOTE (Lapys) -> Yes, this can actually be `undefined`.
                LapysDevelopmentKit.objects.document = LDKT.getObjectNativeConstructorByName(GLOBAL, "Document", STRICT = true);
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

                // Has Document Constructor
                LapysDevelopmentKit.constants.hasDocumentConstructor = !LDKF.isVoid(LDKO.document);

                // HTML Document --- NOTE (Lapys) -> Yes, this can actually be `undefined`.
                LapysDevelopmentKit.objects.htmlDocument = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLDocument", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlDocumentPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlDocument, "prototype");

                // Has HTML Document Constructor
                LapysDevelopmentKit.constants.hasHTMLDocumentConstructor = !LDKF.isVoid(LDKO.htmlDocument);

                // XML Document
                LapysDevelopmentKit.objects.xmlDocument = (function() {
                    // Error Handling > Return
                    try { return LDKT.getObjectNativeConstructorByName(GLOBAL, "XMLDocument", STRICT = true) } catch (error) {}

                    // Return
                    return LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "XMLDocument"), "Document", STRICT = true)
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.xmlDocumentPrototype = LDKF.objectPrototypeGetProperty(LDKO.xmlDocument, "prototype");

                // Has XML Document Constructor
                LapysDevelopmentKit.constants.hasXMLDocumentConstructor = !LDKF.isVoid(LDKO.xmlDocument);

                // Document --- NOTE (Lapys) -> The constant points to the document initiating this script.
                LapysDevelopmentKit.constants.document = (function() {
                    // Initialization > Object
                    var object = LDKF.objectPrototypeGetProperty(GLOBAL, "document");

                    // Logic
                    if (LDKC.isBrowserEnvironment)
                        // Logic > (...)
                        if (
                            typeof object == "object" &&
                            (function(stream) { return stream == "[object]" || stream == "[object Document]" || stream == "[object HTMLDocument]" })(LDKF.toString(object)) &&
                            (function(constructor) { return LDKF.isNull(constructor) || constructor === LDKO.document || constructor === LDKO.htmlDocument || constructor === LDKO.object })(LDKF.objectPrototypeConstructor(object, STRICT = true)) &&
                            (function(prototype) { return LDKF.isVoid(prototype) || (LDKF.isVoid(LDKO.documentPrototype) ? false : prototype === LDKO.documentPrototype) || (LDKF.isVoid(LDKO.htmlDocumentPrototype) ? false : prototype === LDKO.htmlDocumentPrototype) })(LDKF.objectPrototypePrototype(object))
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`document` object")
                })();

                // Document > Prototype
                    // Create Element
                    LapysDevelopmentKit.objects.documentPrototypeCreateElement = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasDocumentConstructor ? LDKO.documentPrototype : LDKC.document, "createElement");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKF.functionPrototypeGetName(method) == "createElement" && LDKF.functionPrototypeIsNative(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Document.prototype.createElement` method")
                    })();

                // Document Fragment
                LapysDevelopmentKit.objects.documentFragment = LDKT.getObjectNativeConstructorByName(GLOBAL, "DocumentFragment", STRICT = true);

                // Document Type --- CHECKPOINT (Lapys) -> Has Document Type?
                LapysDevelopmentKit.objects.documentType = LDKT.getObjectNativeConstructorByName(GLOBAL, "DocumentType", STRICT = true);

                // DOM Rectangle
                LapysDevelopmentKit.objects.domRect = LDKT.getObjectNativeConstructorByName(GLOBAL, "DOMRect");

                // Drag Event
                LapysDevelopmentKit.objects.dragEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "DragEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.dragEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.dragEvent, "prototype");

                // Dynamics Compressor Node
                LapysDevelopmentKit.objects.dynamicsCompressorNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "DynamicsCompressorNode");
                    // Prototype
                    LapysDevelopmentKit.objects.dynamicsCompressorNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.dynamicsCompressorNode, "prototype");

                // Element --- NOTE (Lapys) -> Yes, this can actually be `undefined`.
                LapysDevelopmentKit.objects.element = LDKT.getObjectNativeConstructorByName(GLOBAL, "Element", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.elementPrototype = LDKF.objectPrototypeGetProperty(LDKO.element, "prototype");

                // Enter Picture-in-Picture Event
                LapysDevelopmentKit.objects.enterPictureInPictureEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "EnterPictureInPictureEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.enterPictureInPictureEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.enterPictureInPictureEvent, "prototype");

                // Error Event
                LapysDevelopmentKit.objects.errorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ErrorEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.errorEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.errorEvent, "prototype");

                // Event
                LapysDevelopmentKit.objects.event = LDKT.getObjectNativeConstructorByName(GLOBAL, "Event", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.eventPrototype = LDKF.objectPrototypeGetProperty(LDKO.event, "prototype");

                // Event Source
                LapysDevelopmentKit.objects.eventSource = LDKT.getObjectNativeConstructorByName(GLOBAL, "EventSource", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.eventSourcePrototype = LDKF.objectPrototypeGetProperty(LDKO.eventSource, "prototype");

                // Event Target
                LapysDevelopmentKit.objects.eventTarget = LDKT.getObjectNativeConstructorByName(GLOBAL, "EventTarget");
                    // Prototype
                    LapysDevelopmentKit.objects.eventTargetPrototype = LDKF.objectPrototypeGetProperty(LDKO.eventTarget, "prototype");

                // File
                LapysDevelopmentKit.objects.file = LDKT.getObjectNativeConstructorByName(GLOBAL, "File", STRICT = true);

                // Focus Event
                LapysDevelopmentKit.objects.focusEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "FocusEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.focusEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.focusEvent, "prototype");

                // Font Face Set Load Event
                LapysDevelopmentKit.objects.fontFaceSetLoadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "FontFaceSetLoadEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.fontFaceSetLoadEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.fontFaceSetLoadEvent, "prototype");

                // Gain Node
                LapysDevelopmentKit.objects.gainNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "GainNode");
                    // Prototype
                    LapysDevelopmentKit.objects.gainNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.gainNode, "prototype");

                // Gamepad Event
                LapysDevelopmentKit.objects.gamepadEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "GamepadEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.gamepadEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.gamepadEvent, "prototype");

                // Has Element Constructor
                LapysDevelopmentKit.constants.hasElementConstructor = !LDKF.isVoid(LDKO.element);

                // Has Error Constructor
                LapysDevelopmentKit.constants.hasErrorConstructor = !LDKF.isVoid(LDKO.error);

                // Has Event Constructor
                LapysDevelopmentKit.constants.hasEventConstructor = !LDKF.isVoid(LDKO.event);

                // Has Event Target Constructor
                LapysDevelopmentKit.constants.hasEventTargetConstructor = !LDKF.isVoid(LDKO.eventTarget);

                // Hash Change Event
                LapysDevelopmentKit.objects.hashChangeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "HashChangeEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.hashChangeEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.hashChangeEvent, "prototype");

                // HTML All Collection
                LapysDevelopmentKit.objects.htmlAllCollection = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLAllCollection", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlAllCollectionPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlAllCollection, "prototype");
                        // Length
                        LapysDevelopmentKit.objects.htmlAllCollection && (LapysDevelopmentKit.objects.htmlAllCollectionPrototypeLengthDescriptor = (function(descriptor) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor;
                            else return {get: function length() {
                                // Return
                                return LDKF.isHTMLAllCollection(this) ? (function(length) {
                                    // Return
                                    return LDKF.numberPrototypeIsPositiveInteger(length) ? length : LDKF.error.nativeToEnvironment("`HTMLAllCollection.prototype.length` accessor")
                                })(LDKF.objectPrototypeGetProperty(this, "length")) : LDKF.throwTypeError("Illegal invocation")
                            }}
                        })(LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlAllCollectionPrototype, "length")));

                // Has HTML All Collection Constructor
                LapysDevelopmentKit.constants.hasHTMLAllCollectionConstructor = !LDKF.isVoid(LDKO.htmlAllCollection);

                // HTML Audio Element
                LapysDevelopmentKit.objects.htmlAudioElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLAudioElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlAudioElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlAudioElement, "prototype");

                // HTML Body Element
                LapysDevelopmentKit.objects.htmlBodyElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLBodyElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlBodyElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlBodyElement, "prototype");

                // HTML Collection
                LapysDevelopmentKit.objects.htmlCollection = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLCollection", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlCollectionPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlCollection, "prototype");
                        // Length
                        LapysDevelopmentKit.objects.htmlCollection && (LapysDevelopmentKit.objects.htmlCollectionPrototypeLengthDescriptor = (function(descriptor) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor;
                            else return {get: function length() {
                                // Return
                                return LDKF.isHTMLCollection(this) ? (function(length) {
                                    // Return
                                    return LDKF.numberPrototypeIsPositiveInteger(length) ? length : LDKF.error.nativeToEnvironment("`HTMLCollection.prototype.length` accessor")
                                })(LDKF.objectPrototypeGetProperty(this, "length")) : LDKF.throwTypeError("Illegal invocation")
                            }}
                        })(LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlCollectionPrototype, "length")));

                // Has HTML Collection Constructor
                LapysDevelopmentKit.constants.hasHTMLCollectionConstructor = !LDKF.isVoid(LDKO.htmlCollection);

                // HTML Element --- NOTE (Lapys) -> Yes, this can actually be `undefined`.
                LapysDevelopmentKit.objects.htmlElement = LapysJS.tmp.htmlElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlElement, "prototype");

                // Has HTML Element Constructor
                LapysDevelopmentKit.constants.hasHTMLElementConstructor = !LDKF.isVoid(LDKO.htmlElement);

                // HTML Head Element
                LapysDevelopmentKit.objects.htmlHeadElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLHeadElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlHeadElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlHeadElement, "prototype");

                // HTML Image Element
                LapysDevelopmentKit.objects.htmlImageElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLImageElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlImageElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlImageElement, "prototype");

                // HTML Input Element
                LapysDevelopmentKit.objects.htmlInputElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLInputElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlInputElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlInputElement, "prototype");

                // HTML Internal Frame Element
                LapysDevelopmentKit.objects.htmlIFrameElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLIFrameElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlIFrameElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlIFrameElement, "prototype");

                // HTML HTML Element
                LapysDevelopmentKit.objects.htmlHtmlElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLHtmlElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlHtmlElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlHtmlElement, "prototype");

                // HTML Table Element
                LapysDevelopmentKit.objects.htmlTableElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableElement, "prototype");

                // HTML Table Caption Element
                LapysDevelopmentKit.objects.htmlTableCaptionElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableCaptionElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableCaptionElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableCaptionElement, "prototype");

                // HTML Table Cell Element
                LapysDevelopmentKit.objects.htmlTableCellElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableCellElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableCellElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableCellElement, "prototype");

                // HTML Table Column Element
                LapysDevelopmentKit.objects.htmlTableColumnElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableColumnElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableColumnElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableColumnElement, "prototype");

                // HTML Table Row Element
                LapysDevelopmentKit.objects.htmlTableRowElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableRowElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableRowElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableRowElement, "prototype");

                // HTML Table Section Element
                LapysDevelopmentKit.objects.htmlTableSectionElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTableSectionElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTableSectionElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTableSectionElement, "prototype");

                // HTML Textarea Element
                LapysDevelopmentKit.objects.htmlTextAreaElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTextAreaElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTextAreaElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTextAreaElement, "prototype");

                // HTML Time Element
                LapysDevelopmentKit.objects.htmlTimeElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTimeElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTimeElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTimeElement, "prototype");

                // HTML Title Element
                LapysDevelopmentKit.objects.htmlTitleElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLTitleElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlTitleElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlTitleElement, "prototype");

                // HTML Script Element
                LapysDevelopmentKit.objects.htmlScriptElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLScriptElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlScriptElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlScriptElement, "prototype");

                // HTML Style Element
                LapysDevelopmentKit.objects.htmlStyleElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLStyleElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlStyleElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlStyleElement, "prototype");

                // HTML Unknown Element
                LapysDevelopmentKit.objects.htmlUnknownElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLUnknownElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlUnknownElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlUnknownElement, "prototype");

                // Has HTML Unknown Element Constructor
                LapysDevelopmentKit.constants.hasHTMLUnknownElementConstructor = !LDKF.isVoid(LDKO.htmlUnknownElement);

                // HTML Video Element
                LapysDevelopmentKit.objects.htmlVideoElement = LDKT.getObjectNativeConstructorByName(GLOBAL, "HTMLVideoElement", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.htmlVideoElementPrototype = LDKF.objectPrototypeGetProperty(LDKO.htmlVideoElement, "prototype");

                // IDB Version Change Event
                LapysDevelopmentKit.objects.idbVersionChangeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "IDBVersionChangeEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.idbVersionChangeEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.idbVersionChangeEvent, "prototype");

                // IIR Filter Node
                LapysDevelopmentKit.objects.iirFilterNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "IIRFilterNode");
                    // Prototype
                    LapysDevelopmentKit.objects.iirFilterNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.iirFilterNode, "prototype");

                // Image
                LapysDevelopmentKit.objects.image = (function() {
                    // Error Handling > Return
                    try { return LDKT.getObjectNativeConstructorByName(GLOBAL, "Image", STRICT = true) } catch (error) {}

                    // Return
                    return LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "Image"), "HTMLImageElement", STRICT = true)
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.imagePrototype = LDKF.objectPrototypeGetProperty(LDKO.image, "prototype");

                // Input Event
                LapysDevelopmentKit.objects.inputEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "InputEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.inputEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.inputEvent, "prototype");

                // Keyboard Event
                LapysDevelopmentKit.objects.keyboardEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "KeyboardEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.keyboardEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.keyboardEvent, "prototype");

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
                    // Prototype
                    LapysDevelopmentKit.objects.mediaEncryptedEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaEncryptedEvent, "prototype");

                // Media Key Message Event
                LapysDevelopmentKit.objects.mediaKeyMessageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaKeyMessageEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaKeyMessageEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaKeyMessageEvent, "prototype");

                // Media List
                LapysDevelopmentKit.objects.mediaList = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaList", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mediaListPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaList, "prototype");

                // Media Query List Event
                LapysDevelopmentKit.objects.mediaQueryListEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaQueryListEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaQueryListEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaQueryListEvent, "prototype");

                // Media Recorder Error Event
                LapysDevelopmentKit.objects.mediaRecorderErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaRecorderErrorEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaRecorderErrorEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaRecorderErrorEvent, "prototype");

                // Media Stream Audio Destination Node
                LapysDevelopmentKit.objects.mediaStreamAudioDestinationNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamAudioDestinationNode");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamAudioDestinationNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamAudioDestinationNode, "prototype");

                // Media Stream Audio Source Node
                LapysDevelopmentKit.objects.mediaStreamAudioSourceNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamAudioSourceNode");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamAudioSourceNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamAudioSourceNode, "prototype");

                // Media Stream Error Event
                LapysDevelopmentKit.objects.mediaStreamErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamErrorEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamErrorEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamErrorEvent, "prototype");

                // Media Stream Event
                LapysDevelopmentKit.objects.mediaStreamEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamEvent, "prototype");

                // Media Stream Track Event
                LapysDevelopmentKit.objects.mediaStreamTrackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MediaStreamTrackEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mediaStreamTrackEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mediaStreamTrackEvent, "prototype");

                // Message Event
                LapysDevelopmentKit.objects.messageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MessageEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.messageEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.messageEvent, "prototype");

                // MIDI Connection Event
                LapysDevelopmentKit.objects.midiConnectionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MIDIConnectionEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.midiConnectionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.midiConnectionEvent, "prototype");

                // MIDI Message Event
                LapysDevelopmentKit.objects.midiMessageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MIDIMessageEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.midiMessageEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.midiMessageEvent, "prototype");

                // MIME Type Array
                LapysDevelopmentKit.objects.mimeTypeArray = LDKT.getObjectNativeConstructorByName(GLOBAL, "MimeTypeArray", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mimeTypeArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.mimeTypeArray, "prototype");
                        // Length
                        LapysDevelopmentKit.objects.mimeTypeArray && (LapysDevelopmentKit.objects.mimeTypeArrayPrototypeLengthDescriptor = (function(descriptor) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor;
                            else return {get: function length() {
                                // Return
                                return LDKF.isMIMETypeArray(this) ? (function(length) {
                                    // Return
                                    return LDKF.numberPrototypeIsPositiveInteger(length) ? length : LDKF.error.nativeToEnvironment("`MimeTypeArray.prototype.length` accessor")
                                })(LDKF.objectPrototypeGetProperty(this, "length")) : LDKF.throwTypeError("Illegal invocation")
                            }}
                        })(LDKF.objectGetOwnPropertyDescriptor(LDKO.mimeTypeArrayPrototype, "length")));

                // Mouse Event
                LapysDevelopmentKit.objects.mouseEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MouseEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mouseEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mouseEvent, "prototype");

                // Mouse Scroll Event
                LapysDevelopmentKit.objects.mouseScrollEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MouseScrollEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.mouseScrollEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mouseScrollEvent, "prototype");

                // Mouse Wheel
                LapysDevelopmentKit.objects.mouseWheelEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MouseWheelEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mouseWheelEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mouseWheelEvent, "prototype");

                // MS DCC Event
                LapysDevelopmentKit.objects.MSDCCEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSDCCEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.MSDCCEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSDCCEvent, "prototype");

                // MS DSH Event
                LapysDevelopmentKit.objects.MSDSHEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSDSHEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.MSDSHEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSDSHEvent, "prototype");

                // MS Gesture Event
                LapysDevelopmentKit.objects.MSGestureEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSGestureEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.MSGestureEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSGestureEvent, "prototype");

                // MS Manipulation Event
                LapysDevelopmentKit.objects.MSManipulationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSManipulationEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.MSManipulationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSManipulationEvent, "prototype");

                // MS Media Key Message Event
                LapysDevelopmentKit.objects.MSMediaKeyMessageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSMediaKeyMessageEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.MSMediaKeyMessageEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSMediaKeyMessageEvent, "prototype");

                // MS Media Key Needed Event
                LapysDevelopmentKit.objects.MSMediaKeyNeededEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSMediaKeyNeededEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.MSMediaKeyNeededEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSMediaKeyNeededEvent, "prototype");

                // MS Quality Event
                LapysDevelopmentKit.objects.MSQualityEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSQualityEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.MSQualityEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSQualityEvent, "prototype");

                // MS Site Mode Event
                LapysDevelopmentKit.objects.MSSiteModeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSSiteModeEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.MSSiteModeEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSSiteModeEvent, "prototype");

                // MS Video Receivers Event
                LapysDevelopmentKit.objects.MSVideoReceiversEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MSVideoReceiversEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.MSVideoReceiversEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.MSVideoReceiversEvent, "prototype");

                // Mutation Event
                LapysDevelopmentKit.objects.mutationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "MutationEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.mutationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.mutationEvent, "prototype");

                // Named Node Map
                LapysDevelopmentKit.objects.namedNodeMap = LDKT.getObjectNativeConstructorByName(GLOBAL, "NamedNodeMap", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.namedNodeMapPrototype = LDKF.objectPrototypeGetProperty(LDKO.namedNodeMap, "prototype");
                        // Length
                        LapysDevelopmentKit.objects.namedNodeMap && (LapysDevelopmentKit.objects.namedNodeMapPrototypeLengthDescriptor = (function(descriptor) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor;
                            else return {get: function length() {
                                // Return
                                return LDKF.isNamedNodeMap(this) ? (function(length) {
                                    // Return
                                    return LDKF.numberPrototypeIsPositiveInteger(length) ? length : LDKF.error.nativeToEnvironment("`NamedNodeMap.prototype.length` accessor")
                                })(LDKF.objectPrototypeGetProperty(this, "length")) : LDKF.throwTypeError("Illegal invocation")
                            }}
                        })(LDKF.objectGetOwnPropertyDescriptor(LDKO.namedNodeMapPrototype, "length")));

                // Has Named Node Map Constructor
                LapysDevelopmentKit.constants.hasNamedNodeMapConstructor = !LDKF.isVoid(LDKO.namedNodeMap);

                // Node
                LapysDevelopmentKit.objects.node = LDKT.getObjectNativeConstructorByName(GLOBAL, "Node", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.nodePrototype = LDKF.objectPrototypeGetProperty(LDKO.node, "prototype");
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

                // Has Node Constructor
                LapysDevelopmentKit.constants.hasNodeConstructor = !LDKF.isVoid(LDKO.node);

                // Node List
                LapysDevelopmentKit.objects.nodeList = LDKT.getObjectNativeConstructorByName(GLOBAL, "NodeList", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.nodeListPrototype = LDKF.objectPrototypeGetProperty(LDKO.nodeList, "prototype");
                        // Length
                        LapysDevelopmentKit.objects.nodeList && (LapysDevelopmentKit.objects.nodeListPrototypeLengthDescriptor = (function(descriptor) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor;
                            else return {get: function length() {
                                // Return
                                return LDKF.isNodeList(this) ? (function(length) {
                                    // Return
                                    return LDKF.numberPrototypeIsPositiveInteger(length) ? length : LDKF.error.nativeToEnvironment("`NodeList.prototype.length` accessor")
                                })(LDKF.objectPrototypeGetProperty(this, "length")) : LDKF.throwTypeError("Illegal invocation")
                            }}
                        })(LDKF.objectGetOwnPropertyDescriptor(LDKO.nodeListPrototype, "length")));

                // Has Node List Constructor
                LapysDevelopmentKit.constants.hasNodeListConstructor = !LDKF.isVoid(LDKO.nodeList);

                // Notification
                LapysDevelopmentKit.objects.notification = LDKT.getObjectNativeConstructorByName(GLOBAL, "Notification");

                // Notify Paint Event
                LapysDevelopmentKit.objects.notifyPaintEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "NotifiyPaintEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.notifyPaintEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.notifyPaintEvent, "prototype");

                // Offline Audio Completion Event
                LapysDevelopmentKit.objects.offlineAudioCompletionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "OfflineAudioCompletionEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.offlineAudioCompletionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.offlineAudioCompletionEvent, "prototype");

                // Oscillator Node
                LapysDevelopmentKit.objects.oscillatorNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "OscillatorNode");
                    // Prototype
                    LapysDevelopmentKit.objects.oscillatorNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.oscillatorNode, "prototype");

                // Overflow Event
                LapysDevelopmentKit.objects.overflowEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "OverflowEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.overflowEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.overflowEvent, "prototype");

                // Page Transition Event
                LapysDevelopmentKit.objects.pageTransitionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PageTransitionEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.pageTransitionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.pageTransitionEvent, "prototype");

                // Panner Node
                LapysDevelopmentKit.objects.pannerNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "PannerNode", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.pannerNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.pannerNode, "prototype");

                // Payment Request Update Event
                LapysDevelopmentKit.objects.paymentRequestUpdateEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PaymentRequestUpdateEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.paymentRequestUpdateEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.paymentRequestUpdateEvent, "prototype");

                // Performance
                LapysDevelopmentKit.objects.performance = LDKT.getObjectNativeConstructorByName(GLOBAL, "Performance", STRICT = true);
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
                            (function(prototype) { return prototype === LDKO.performancePrototype || LDKF.isVoid(prototype) })(LDKF.objectPrototypePrototype(object))
                        ) return object;
                        else LDKF.error.nativeToEnvironment("`performance` object")
                })();

                // Plugin Array
                LapysDevelopmentKit.objects.pluginArray = LDKT.getObjectNativeConstructorByName(GLOBAL, "PluginArray", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.pluginArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.pluginArray, "prototype");
                        // Length
                        LapysDevelopmentKit.objects.pluginArray && (LapysDevelopmentKit.objects.pluginArrayPrototypeLengthDescriptor = (function(descriptor) {
                            // Logic > Return
                            if (LDKF.objectPrototypeHasProperty(descriptor, "get")) return descriptor;
                            else return {get: function length() {
                                // Return
                                return LDKF.isPluginArray(this) ? (function(length) {
                                    // Return
                                    return LDKF.numberPrototypeIsPositiveInteger(length) ? length : LDKF.error.nativeToEnvironment("`PluginArray.prototype.length` accessor")
                                })(LDKF.objectPrototypeGetProperty(this, "length")) : LDKF.throwTypeError("Illegal invocation")
                            }}
                        })(LDKF.objectGetOwnPropertyDescriptor(LDKO.pluginArrayPrototype, "length")));

                // Pointer Event
                LapysDevelopmentKit.objects.pointerEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PointerEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.pointerEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.pointerEvent, "prototype");

                // Pop-Up Blocked Event
                LapysDevelopmentKit.objects.popUpBlockedEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PopUpBlockedEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.popUpBlockedEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.popUpBlockedEvent, "prototype");

                // Pop State Event
                LapysDevelopmentKit.objects.popStateEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PopStateEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.popStateEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.popStateEvent, "prototype");

                // Presentation Connection Available Event
                LapysDevelopmentKit.objects.presentationConnectionAvailableEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PresentationConnectionAvailableEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.presentationConnectionAvailableEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.presentationConnectionAvailableEvent, "prototype");

                // Presentation Connection Close Event
                LapysDevelopmentKit.objects.presentationConnectionCloseEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PresentationConnectionCloseEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.presentationConnectionCloseEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.presentationConnectionCloseEvent, "prototype");

                // Progress Event
                LapysDevelopmentKit.objects.progressEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ProgressEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.progressEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.progressEvent, "prototype");

                // Promise Rejection Event
                LapysDevelopmentKit.objects.promiseRejectionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "PromiseRejectionEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.promiseRejectionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.promiseRejectionEvent, "prototype");

                // Radio Node List
                LapysDevelopmentKit.objects.radioNodeList = LDKT.getObjectNativeConstructorByName(GLOBAL, "RadioNodeList");

                // Range
                LapysDevelopmentKit.objects.range = LDKT.getObjectNativeConstructorByName(GLOBAL, "Range", STRICT = true);

                // Regular Expression
                LapysDevelopmentKit.objects.regularExpression = LDKT.getObjectNativeConstructorByName(GLOBAL, "RegExp");
                    // Prototype
                    LapysDevelopmentKit.objects.regularExpressionPrototype = LDKF.objectPrototypeGetProperty(LDKO.regularExpression, "prototype");

                // Request Animation Frame
                LapysDevelopmentKit.objects.requestAnimationFrame = (function() {
                    // Initialization > Method
                    var method = LDKF.objectPrototypeGetProperty(GLOBAL, "mozRequestAnimationFrame") ||
                        LDKF.objectPrototypeGetProperty(GLOBAL, "msRequestAnimationFrame") ||
                        LDKF.objectPrototypeGetProperty(GLOBAL, "webkitRequestAnimationFrame") ||
                        LDKF.objectPrototypeGetProperty(GLOBAL, "requestAnimationFrame");

                    // Logic
                    if (!LDKF.isVoid(method))
                        // Logic > (...)
                        if (
                            (function(stream) { return stream == "mozRequestAnimationFrame" || stream == "msRequestAnimationFrame" || stream == "requestAnimationFrame" || stream == "webkitRequestAnimationFrame" })(LDKF.functionPrototypeGetName(method)) &&
                            LDKF.functionPrototypeIsNative(method)
                        ) return method;
                        else LDKF.error.nativeToEnvironment("`requestAnimationFrame` function");

                    else
                        // Return
                        return function requestAnimationFrame(method) { return LDKF.setTimeout(method, 0) }
                })();

                // RTC Data Channel Event
                LapysDevelopmentKit.objects.rtcDataChannelEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCDataChannelEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcDataChannelEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcDataChannelEvent, "prototype");

                // RTC DTMF Tone Change Event
                LapysDevelopmentKit.objects.rtcDTMFToneChangeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCDTMFToneChangeEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcDTMFToneChangeEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcDTMFToneChangeEvent, "prototype");

                // RTC DTLS Transport State Changed Event
                LapysDevelopmentKit.objects.rtcDTLSTransportStateChangedEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCDtlsTransportStateChangedEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcDTLSTransportStateChangedEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcDTLSTransportStateChangedEvent, "prototype");

                // RTC ICE Candidate Pair Changed Event
                LapysDevelopmentKit.objects.rtcICECandidatePairChangedEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCIceCandidatePairChangedEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcICECandidatePairChangedEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcICECandidatePairChangedEvent, "prototype");

                // RTC ICE Gatherer Event
                LapysDevelopmentKit.objects.rtcICEGathererEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCIceGathererEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcICEGathererEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcICEGathererEvent, "prototype");

                // RTC ICE Transport State Changed Event
                LapysDevelopmentKit.objects.rtcICETransportStateChangedEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCIceTransportStateChangedEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcICETransportStateChangedEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcICETransportStateChangedEvent, "prototype");

                // RTC Peer Connection ICE Event
                LapysDevelopmentKit.objects.rtcPeerConnectionICEEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCPeerConnectionIceEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcPeerConnectionICEEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcPeerConnectionICEEvent, "prototype");

                // RTC Source Conflict Event
                LapysDevelopmentKit.objects.rtcSsrcConflictEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCSsrcConflictEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcSsrcConflictEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcSsrcConflictEvent, "prototype");

                // RTC Track Event
                LapysDevelopmentKit.objects.rtcTrackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "RTCTrackEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.rtcTrackEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.rtcTrackEvent, "prototype");

                // Script Processor Node
                LapysDevelopmentKit.objects.scriptProcessorNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "ScriptProcessorNode");
                    // Prototype
                    LapysDevelopmentKit.objects.scriptProcessorNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.scriptProcessorNode, "prototype");

                // Scroll Area Event
                LapysDevelopmentKit.objects.scrollAreaEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "ScrollAreaEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.scrollAreaEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.scrollAreaEvent, "prototype");

                // Security Policy Violation Event
                LapysDevelopmentKit.objects.securityPolicyViolationEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SecurityPolicyViolationEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.securityPolicyViolationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.securityPolicyViolationEvent, "prototype");

                // Selection
                LapysDevelopmentKit.objects.selection = LDKT.getObjectNativeConstructorByName(GLOBAL, "Selection", STRICT = true);

                // Sensor Error Event
                LapysDevelopmentKit.objects.sensorErrorEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SensorErrorEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.sensorErrorEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.sensorErrorEvent, "prototype");

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
                    // Prototype
                    LapysDevelopmentKit.objects.speechSynthesisErrorEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.speechSynthesisErrorEvent, "prototype");

                // Speech Synthesis Event
                LapysDevelopmentKit.objects.speechSynthesisEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SpeechSynthesisEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.speechSynthesisEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.speechSynthesisEvent, "prototype");

                // Stereo Panner Node
                LapysDevelopmentKit.objects.stereoPannerNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "StereoPannerNode");
                    // Prototype
                    LapysDevelopmentKit.objects.stereoPannerNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.stereoPannerNode, "prototype");

                // Storage Event
                LapysDevelopmentKit.objects.storageEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "StorageEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.storageEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.storageEvent, "prototype");

                // SVG Zoom Event
                LapysDevelopmentKit.objects.svgZoomEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "SVGZoomEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.svgZoomEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.svgZoomEvent, "prototype");

                // Text
                LapysDevelopmentKit.objects.text = LDKT.getObjectNativeConstructorByName(GLOBAL, "Text", STRICT = true);

                // Text Event
                LapysDevelopmentKit.objects.textEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TextEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.textEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.textEvent, "prototype");

                // Time Event
                LapysDevelopmentKit.objects.timeEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TimeEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.timeEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.timeEvent, "prototype");

                // Touch
                LapysDevelopmentKit.objects.touch = LDKT.getObjectNativeConstructorByName(GLOBAL, "Touch");

                // Touch Event
                LapysDevelopmentKit.objects.touchEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TouchEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.touchEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.touchEvent, "prototype");

                // Track Event
                LapysDevelopmentKit.objects.trackEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TrackEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.trackEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.trackEvent, "prototype");

                // Transition Event
                LapysDevelopmentKit.objects.transitionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "TransitionEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.transitionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.transitionEvent, "prototype");

                // Unsigned 8-Bit Integer Array
                LapysDevelopmentKit.objects.uint8Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Uint8Array", STRICT = true);

                // Unsigned 8-Bit Integer Clamped Array
                LapysDevelopmentKit.objects.uint8ClampedArray = LDKT.getObjectNativeConstructorByName(GLOBAL, "Uint8ClampedArray");

                // Unsigned 16-Bit Integer Array
                LapysDevelopmentKit.objects.uint16Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Uint16Array", STRICT = true);

                // Unsigned 32-Bit Integer Array
                LapysDevelopmentKit.objects.uint32Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Uint32Array", STRICT = true);

                // UI Event
                LapysDevelopmentKit.objects.uiEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "UIEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.uiEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.uiEvent, "prototype");

                // URL
                LapysDevelopmentKit.objects.url = LDKT.getObjectNativeConstructorByName(GLOBAL, "URL", STRICT = true);

                // USB Connection Event
                LapysDevelopmentKit.objects.usbConnectionEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "USBConnectionEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.usbConnectionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.usbConnectionEvent, "prototype");

                // VR Display Event
                LapysDevelopmentKit.objects.vrDisplayEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "VRDisplayEvent");
                    // Prototype
                    LapysDevelopmentKit.objects.vrDisplayEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.vrDisplayEvent, "prototype");

                // Wave Shaper Node
                LapysDevelopmentKit.objects.waveShaperNode = LDKT.getObjectNativeConstructorByName(GLOBAL, "WaveShaperNode");
                    // Prototype
                    LapysDevelopmentKit.objects.waveShaperNodePrototype = LDKF.objectPrototypeGetProperty(LDKO.waveShaperNode, "prototype");

                // Web GL Context Event
                LapysDevelopmentKit.objects.webGLContextEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "WebGLContextEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.webGLContextEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.webGLContextEvent, "prototype");

                // Webkit Animation Event
                LapysDevelopmentKit.objects.webkitAnimationEvent = (function() {
                    // Error Handling > Return
                    try { return LDKT.getObjectNativeConstructorByName(GLOBAL, "WebKitAnimationEvent", STRICT = true) }
                    catch (error) {}

                    // Return
                    return LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "WebKitAnimationEvent"), "AnimationEvent", STRICT = true)
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.webkitAnimationEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.webkitAnimationEvent, "prototype");

                // Webkit Speech Recognition Event
                LapysDevelopmentKit.objects.webkitSpeechRecognitionEvent = LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "webkitSpeechRecognitionEvent"), "SpeechRecognitionEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.webkitSpeechRecognitionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.webkitSpeechRecognitionEvent, "prototype");

                // Webkit Transition Event
                LapysDevelopmentKit.objects.webkitTransitionEvent = (function() {
                    // Error Handling > Return
                    try { return LDKT.getObjectNativeConstructorByName(GLOBAL, "WebKitTransitionEvent", STRICT = true) }
                    catch (error) {}

                    // Return
                    return LDKT.getNativeConstructor(LDKF.objectPrototypeGetProperty(GLOBAL, "WebKitTransitionEvent"), "TransitionEvent", STRICT = true)
                })();
                    // Prototype
                    LapysDevelopmentKit.objects.webkitTransitionEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.webkitTransitionEvent, "prototype");

                // Wheel Event
                LapysDevelopmentKit.objects.wheelEvent = LDKT.getObjectNativeConstructorByName(GLOBAL, "WheelEvent", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.wheelEventPrototype = LDKF.objectPrototypeGetProperty(LDKO.wheelEvent, "prototype");

                // Window
                LapysDevelopmentKit.objects.window = LDKT.getObjectNativeConstructorByName(GLOBAL, "Window", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.windowPrototype = LDKF.objectPrototypeGetProperty(LDKO.window, "prototype");

                // XML HTTP Request Event Target
                LapysDevelopmentKit.objects.xmlHTTPRequestEventTarget = LDKT.getObjectNativeConstructorByName(GLOBAL, "XMLHttpRequestEventTarget", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.xmlHTTPRequestEventTargetPrototype = LDKF.objectPrototypeGetProperty(LDKO.xmlHTTPRequestEventTarget, "prototype");

                // 8-Bit Integer Array
                LapysDevelopmentKit.objects.int8Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Int8Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.int8ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.int8Array, "prototype");

                // 16-Bit Integer Array
                LapysDevelopmentKit.objects.int16Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Int16Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.int16ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.int16Array, "prototype");

                // 32-Bit Float Array
                LapysDevelopmentKit.objects.float32Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Float32Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.float32ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.float32Array, "prototype");

                // 32-Bit Integer Array
                LapysDevelopmentKit.objects.int32Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Int32Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.int32ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.int32Array, "prototype");

                // 64-Bit Float Array
                LapysDevelopmentKit.objects.float64Array = LDKT.getObjectNativeConstructorByName(GLOBAL, "Float64Array", STRICT = true);
                    // Prototype
                    LapysDevelopmentKit.objects.float64ArrayPrototype = LDKF.objectPrototypeGetProperty(LDKO.float64Array, "prototype");

            /* Test
                    --- NOTE ---
                        #Lapys: Tests for `Element`, `EventTarget`, `HTMLElement` and `Node` methods.
            */
                // Is {Registered} Component --- NOTE (Lapys) -> Is the Argument a component like an Accordion or Picture-in-Picture 'window'?
                LapysDevelopmentKit.test.isComponent = function isComponent(arg) {
                    /* Initialization > (Component Registries, Iterator)
                            --- NOTE ---
                                #Lapys: If there's no way to test if an Argument is an element via the `Element` or `HTMLElement` constructors,
                                    then check the library's component registries.
                    */
                    var componentRegistries = LDKF.arrayPrototypeSourceConcatenate(
                        LDKI.data.lists.accordions,
                            LDKI.data.lists.accordionBodies,
                            LDKI.data.lists.accordionHeads
                    ), iterator = LDKF.arrayPrototypeLength(componentRegistries);

                    // Loop
                    while (iterator) {
                        // Initialization > Component Registry (Iterator)
                        var componentRegistry = componentRegistries[iterator -= 1],
                            componentRegistryIterator = LDKF.arrayPrototypeLength(componentRegistry);

                        // Loop > Logic > Return
                        while (componentRegistryIterator) if (componentRegistry[componentRegistryIterator -= 1] === arg) return true
                    }
                };

                // Is Document Prototype Clear Method
                LapysDevelopmentKit.test.isDocumentPrototypeClearMethod - function isDocumentPrototypeClearMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "clear" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Close Method
                LapysDevelopmentKit.test.isDocumentPrototypeCloseMethod - function isDocumentPrototypeCloseMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "close" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Attribute Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateAttributeMethod - function isDocumentPrototypeCreateAttributeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createAttribute" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Comment Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateCommentMethod - function isDocumentPrototypeCreateCommentMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createComment" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Document Fragment Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateDocumentFragmentMethod - function isDocumentPrototypeCreateDocumentFragmentMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createDocumentFragment" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Element Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateElementMethod - function isDocumentPrototypeCreateElementMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createElement" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Create Text Node Method
                LapysDevelopmentKit.test.isDocumentPrototypeCreateTextNodeMethod - function isDocumentPrototypeCreateTextNodeMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "createTextNode" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Element From Point Method
                LapysDevelopmentKit.test.isDocumentPrototypeElementFromPointMethod - function isDocumentPrototypeElementFromPointMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "elementFromPoint" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Execute Command Method
                LapysDevelopmentKit.test.isDocumentPrototypeExecCommandMethod - function isDocumentPrototypeExecCommandMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "execCommand" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Get Element By ID Method
                LapysDevelopmentKit.test.isDocumentPrototypeGetElementByIdMethod - function isDocumentPrototypeGetElementByIdMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getElementById" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Get Elements By Name Method
                LapysDevelopmentKit.test.isDocumentPrototypeGetElementsByNameMethod - function isDocumentPrototypeGetElementsByNameMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "getElementsByName" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Get Elements By Tag Name Method
                LapysDevelopmentKit.test.isDocumentPrototypeGetElementsByTagNameMethod - function isDocumentPrototypeGetElementsByTagNameMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "getElementsByName" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Has Focus Method
                LapysDevelopmentKit.test.isDocumentPrototypeHasFocusMethod - function isDocumentPrototypeHasFocusMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "hasFocus" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Open Method
                LapysDevelopmentKit.test.isDocumentPrototypeOpenMethod - function isDocumentPrototypeOpenMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "open" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Enabled Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandEnabledMethod - function isDocumentPrototypeQueryCommandEnabledMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "queryCommandEnabled" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Indeterm Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandIndetermMethod - function isDocumentPrototypeQueryCommandIndetermMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "queryCommandIndeterm" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command State Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandStateMethod - function isDocumentPrototypeQueryCommandStateMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "queryCommandState" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Supported Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandSupportedMethod - function isDocumentPrototypeQueryCommandSupportedMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "queryCommandSupported" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Query Command Value Method
                LapysDevelopmentKit.test.isDocumentPrototypeQueryCommandValueMethod - function isDocumentPrototypeQueryCommandValueMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "queryCommandValue" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Write Method
                LapysDevelopmentKit.test.isDocumentPrototypeWriteMethod - function isDocumentPrototypeWriteMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "write" && LDKF.functionPrototypeIsNative(method) };

                // Is Document Prototype Write Line Method
                LapysDevelopmentKit.test.isDocumentPrototypeWriteLineMethod - function isDocumentPrototypeWriteLineMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetTagName(method) == "writeln" && LDKF.functionPrototypeIsNative(method) };

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

                // Is HTML Element Prototype Blur Method
                LapysDevelopmentKit.test.isHTMLElementPrototypeBlurMethod = function isHTMLElementPrototypeBlurMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "blur" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Element Prototype Click Method
                LapysDevelopmentKit.test.isHTMLElementPrototypeClickMethod = function isHTMLElementPrototypeClickMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "click" && LDKF.functionPrototypeIsNative(method) };

                // Is HTML Element Prototype Focus Method
                LapysDevelopmentKit.test.isHTMLElementPrototypeFocusMethod = function isHTMLElementPrototypeFocusMethod(method) { return LDKF.isFunction(method) && LDKF.functionPrototypeGetName(method) == "focus" && LDKF.functionPrototypeIsNative(method) };

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

            /* Functions */
                // Array --- NOTE (Lapys) -> Also flattens array-like objects once when appended to returned array.
                LapysDevelopmentKit.functions.array = function array(elements) {
                    // Initialization > (Array, Index, Iterator, Length)
                    var array = [], index = -1,
                        iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                    // Loop
                    while (iterator) {
                        // Initialization > Argument
                        var argument = arguments[length - (iterator -= 1) - 1];

                        // Logic
                        if (LDKF.isArrayLike(argument)) {
                            // Initialization > Argument (Iterator, Length)
                            var argumentIterator = LDKF.arrayLikePrototypeLength(argument), argumentLength = argumentIterator;

                            // Loop > Update > Array --- NOTE (Lapys) -> The Argument's native `item` method is not utilized here.
                            while (argumentIterator) array[index += 1] = LDKF.objectPrototypeGetProperty(argument, argumentLength - (argumentIterator -= 1) - 1)
                        }

                        else
                            // Update > Array
                            array[index += 1] = argument
                    }

                    // Return
                    return array
                };
                    // Prototype
                        // Add To Back
                        LapysDevelopmentKit.functions.arrayPrototypeAddToBack = function arrayPrototypeAddToBack(array, element) {
                            // Initialization > (Array) Length
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments);

                            // Function > Add To Back
                            function addToBack(element) {
                                // Initialization > Iterator
                                var iterator = arrayLength;

                                // Loop > Update > Array
                                while (iterator) array[iterator] = array[iterator -= 1];

                                // Update > Array (Length)
                                array[0] = element;
                                arrayLength += 1
                            }

                            // Logic
                            if (length == 2)
                                // Update > Add To Back
                                addToBack(element);

                            else if (length > 2) {
                                // Initialization > Iterator
                                var iterator = length;

                                // Loop > Update > Array
                                while (iterator != 1) addToBack(arguments[iterator -= 1])
                            }

                            // Return
                            return array
                        };

                        // Add To Front
                        LapysDevelopmentKit.functions.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, element) {
                            // Initialization > (Array) Length
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                length = LDKF.getArgumentsLength(arguments);

                            // Function > Add To Front
                            function addToFront(element) {
                                // Update > Array (Length)
                                array[arrayLength] = element;
                                arrayLength += 1
                            }

                            // Logic
                            if (length == 2)
                                // Update > Array
                                addToFront(element);

                            else if (length > 2) {
                                // Initialization > Iterator
                                var iterator = length;

                                // Loop > Update > Array
                                while (iterator != 1) addToFront(arguments[length - (iterator -= 1)])
                            }

                            // Return
                            return array
                        };

                        // Build
                        LapysDevelopmentKit.functions.arrayPrototypeBuild = function arrayPrototypeBuild(array, callbacks) {
                            // Initialization > ((Array) Length, Iterator)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > (Callback, Array Iterator)
                                var callback = arguments[length - (iterator -= 1)], arrayIterator = arrayLength;

                                // Loop
                                while (arrayIterator) {
                                    // Initialization > Index
                                    var index = arrayLength - (arrayIterator -= 1) - 1;

                                    // Update > Array
                                    array[index] = callback(array[index], index, array)
                                }
                            }

                            // Return
                            return array
                        };

                        // Construct
                        LapysDevelopmentKit.functions.arrayPrototypeConstruct = function arrayPrototypeConstruct(array, callback, returnValue) {
                            // Initialization > (Iterator, Length)
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Update > Return Value
                            (LDKF.getArgumentsLength(arguments) < 3) && (returnValue = array[0]);

                            // Loop
                            while (iterator) {
                                // Initialization > Index
                                var index = length - (iterator -= 1) - 1;

                                // Update > Return Value
                                returnValue = callback(returnValue, array[index], index, array)
                            }

                            // Return
                            return returnValue
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
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (arrayLength && iterator != 1) {
                                // Initialization > Index
                                var index = arguments[length - (iterator -= 1)];

                                // (Update > Index) | Error
                                LDKF.numberPrototypeIsSafeInteger(index) ?
                                    index = (index % arrayLength && LDKD.series.infinite(1, arrayLength).point(index)) :
                                    LDKF.error("Invalid array index: `" + LDKF.toString(index) + '`');

                                // Initialization > Array Iterator
                                var arrayIterator = arrayLength;

                                // Loop
                                while (arrayIterator)
                                    // Logic
                                    if ((arrayIterator -= 1) == index) {
                                        // Loop
                                        while (arrayIterator != arrayLength) array[arrayIterator] = array[arrayIterator += 1];

                                        // Update > Array Length
                                        arrayLength -= 1;

                                        // [Break]
                                        break
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
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Argument
                                var argument = arguments[length - (iterator -= 1)];

                                // Logic
                                if (LDKF.numberPrototypeIsPositiveInteger(argument)) {
                                    // Logic
                                    if (argument > arrayLength - 1) {
                                        // Update > Array (Length)
                                        LDKF.arrayPrototypeFree(array);
                                        arrayLength = 0
                                    }

                                    else if (argument) {
                                        // Initialization > Array Iterator
                                        var arrayIterator = arrayLength;

                                        // Loop
                                        while (arrayIterator) {
                                            // Initialization > Index
                                            var index = arrayLength - (arrayIterator -= 1) - 1;

                                            // Update > Array
                                            array[index] = array[argument + index]
                                        }

                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength - argument)
                                    }
                                }

                                else
                                    // Error
                                    LDKF.error("Invalid array length: `" + LDKF.toString(argument) + '`')
                            }

                            // Return
                            return array
                        };

                        // Cut Right
                        LapysDevelopmentKit.functions.arrayPrototypeCutRight = function arrayPrototypeCutRight(array, lengths) {
                            // Initialization > (Iterator, (Array) Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Argument
                                var argument = arguments[length - (iterator -= 1)];

                                // Logic
                                if (LDKF.numberPrototypeIsPositiveInteger(argument)) {
                                    // Logic
                                    if (argument > arrayLength - 1) {
                                        // Update > Array (Length)
                                        LDKF.arrayPrototypeFree(array);
                                        arrayLength = 0
                                    }

                                    else if (argument)
                                        // Update > Array
                                        LDKF.arrayPrototypeResize(array, arrayLength - argument)
                                }

                                else
                                    // Error
                                    LDKF.error("Invalid array length: `" + LDKF.toString(argument) + '`')
                            }

                            // Return
                            return array
                        };

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
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (!callback(array[iterator -= 1])) return false;

                            // Return
                            return true
                        };

                        // Filter
                        LapysDevelopmentKit.functions.arrayPrototypeFilter = function arrayPrototypeFilter(array, callbacks) {
                            // Initialization > Length
                            var length = LDKF.getArgumentsLength(arguments);

                            // Logic
                            if (length == 1)
                                // Update > Array
                                LDKF.arrayPrototypeFilterLeft(LDKF.arrayPrototypeFilterRight(array));

                            else if (length == 2)
                                // Update > Array
                                LDKF.arrayPrototypeFilterLeft(LDKF.arrayPrototypeFilterRight(array, callbacks), callbacks);

                            else if (length) {
                                // Initialization > Iterator
                                var iterator = length;

                                // Loop > Update > Array
                                while (iterator != 1) LDKF.arrayPrototypeFilter(array, arguments[length - (iterator -= 1)])
                            }

                            // Return
                            return array
                        };

                        // Filter Left
                        LapysDevelopmentKit.functions.arrayPrototypeFilterLeft = function arrayPrototypeFilterLeft(array, callbacks) {
                            // Initialization > (Iterator, Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Iterator, Length)
                                var index = 0, iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                                // Loop
                                while (iterator != 1) {
                                    // Initialization > Callback
                                    var callback = arguments[length - (iterator -= 1)];

                                    // Logic
                                    if (LDKF.isFunction(callback))
                                        // Loop > Update > Index
                                        while (callback(array[index]) && index != arrayLength) index += 1;

                                    else {
                                        // Initialization > (Callback (Array, Iterator, Length), Filtered)
                                        var callbackArray = callback,
                                            callbackIterator = LDKF.arrayPrototypeLength(callbackArray), callbackLength = callbackIterator,
                                            filtered = false;

                                        // Loop
                                        while (callbackIterator && index != arrayLength) {
                                            // Initialization > (Allow Filter, Callback)
                                            var allowFilter = false,
                                                callback = callbackArray[callbackLength - (callbackIterator -= 1) - 1];

                                            // Loop
                                            while (callback(array[index]) && index != arrayLength) {
                                                // Update > (Index, Allow Filter, Callback Iterator)
                                                allowFilter || (index += 1);
                                                allowFilter = true;
                                                callbackIterator = callbackLength;

                                                // [Break]
                                                break
                                            }

                                            // Logic > [Break]
                                            if (!allowFilter && !callbackIterator) break
                                        }
                                    }
                                }

                                // Update > Array
                                LDKF.arrayPrototypeCutLeft(array, index)
                            }

                            // Return
                            return array
                        };

                        // Filter Right
                        LapysDevelopmentKit.functions.arrayPrototypeFilterRight = function arrayPrototypeFilterRight(array, callbacks) {
                            // Initialization > (Iterator, Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array);

                            // Logic
                            if (arrayLength) {
                                // Initialization > (Iterator, Length)
                                var index = arrayLength - 1, iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                                // Loop
                                while (iterator != 1) {
                                    // Initialization > Callback
                                    var callback = arguments[length - (iterator -= 1)];

                                    // Logic
                                    if (LDKF.isFunction(callback))
                                        // Loop > Update > Index
                                        while (callback(array[index]) && index != -1) index -= 1;

                                    else {
                                        // Initialization > (Callback (Array, Iterator, Length), Filtered)
                                        var callbackArray = callback,
                                            callbackIterator = LDKF.arrayPrototypeLength(callbackArray), callbackLength = callbackIterator,
                                            filtered = false;

                                        // Loop
                                        while (callbackIterator && index != -1) {
                                            // Initialization > (Allow Filter, Callback)
                                            var allowFilter = false,
                                                callback = callbackArray[callbackLength - (callbackIterator -= 1) - 1];

                                            // Loop
                                            while (callback(array[index]) && index != -1) {
                                                // Update > (Index, Allow Filter, Callback Iterator)
                                                allowFilter || (index -= 1);
                                                allowFilter = true;
                                                callbackIterator = callbackLength;

                                                // [Break]
                                                break
                                            }

                                            // Logic > [Break]
                                            if (!allowFilter && !callbackIterator) break
                                        }
                                    }
                                }

                                // Update > Array
                                LDKF.arrayPrototypeResize(array, index + 1)
                            }

                            // Return
                            return array
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
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array), length = iterator;

                            // Loop
                            while (iterator) {
                                // Initialization > Index
                                var index = length - (iterator -= 1) - 1;

                                // Callback
                                callback(array[index], index, array)
                            }
                        };

                        // Free
                        LapysDevelopmentKit.functions.arrayPrototypeFree = function arrayPrototypeFree(array) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Deletion
                            while (iterator) delete array[iterator -= 1];

                            // Update > Array
                            LDKF.arrayPrototypeResize(array, 0);

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
                        LapysDevelopmentKit.functions.arrayPrototypeIndex = function arrayPrototypeIndex(array, element) {
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

                        // Insert
                        LapysDevelopmentKit.functions.arrayPrototypeInsert = function arrayPrototypeInsert(array, element, indexes) {
                            // Initialization > (Iterator, (Array) Length)
                            var arrayLength = LDKF.arrayPrototypeLength(array),
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 2) {
                                // Initialization > Index
                                var index = arguments[length - (iterator -= 1) + 1];

                                // Error
                                LDKF.numberPrototypeIsSafeInteger(index) || LDKF.error("Invalid array index: `" + LDKF.toString(index) + '`');

                                // Logic
                                if (-index > arrayLength - 1) {
                                    // Update > Array
                                    LDKF.arrayPrototypeShiftRight(array, -index - (arrayLength - 1));
                                    array[0] = element
                                }

                                else {
                                    // Update > Index
                                    LDKF.numberPrototypeIsNegative(index) && (index = LDKD.series.infinite(1, arrayLength).point(index));

                                    // Initialization > Array Iterator
                                    var arrayIterator = arrayLength;

                                    // Logic
                                    if (index > arrayLength - 1)
                                        array[index] = element;

                                    else
                                        // Loop
                                        while (arrayIterator)
                                            // Logic
                                            if ((arrayIterator -= 1) == index) {
                                                // Loop
                                                arrayIterator = arrayLength;

                                                // Loop
                                                while (arrayIterator != index) {
                                                    // Update > Array (Iterator)
                                                    arrayIterator -= 1;
                                                    array[arrayIterator + 1] = array[arrayIterator]
                                                }

                                                // Update > Array
                                                array[index] = element;

                                                // Update > Array Length
                                                arrayLength += 1;

                                                // [Break]
                                                break
                                            }
                                }
                            }

                            // Return
                            return array
                        };

                        // Is Filled With --- CHECKPOINT ---

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

                        // Last Index
                        LapysDevelopmentKit.functions.arrayPrototypeLastIndex = function arrayPrototypeLastIndex(array, element) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (array[iterator -= 1] === element) return iterator;

                            // Return
                            return -1
                        };

                        // Only --- CHECKPOINT ---
                        // Pad --- CHECKPOINT ---
                        // Pad Left --- CHECKPOINT ---
                        // Pad Right --- CHECKPOINT ---
                        // Remove --- CHECKPOINT ---
                        // Remove All --- CHECKPOINT ---
                        // Remove Duplicated --- CHECKPOINT ---
                        // Remove Duplicated From Back --- CHECKPOINT ---
                        // Remove Duplicated From Front --- CHECKPOINT ---
                        // Remove Duplicates --- CHECKPOINT ---
                        // Remove Duplicates From Back --- CHECKPOINT ---
                        // Remove Duplicates From Front --- CHECKPOINT ---
                        // Remove From Back --- CHECKPOINT ---
                        // Remove From Front --- CHECKPOINT ---
                        // Remove Repeated --- CHECKPOINT ---
                        // Remove Repeated From Back --- CHECKPOINT ---
                        // Remove Repeated From Front --- CHECKPOINT ---
                        // Remove Repeats --- CHECKPOINT ---
                        // Replace --- CHECKPOINT ---
                        // Replace All --- CHECKPOINT ---
                        // Replace All From Back --- CHECKPOINT ---
                        // Replace All From Front --- CHECKPOINT ---
                        // Replace Duplicated --- CHECKPOINT ---
                        // Replace Duplicated From Back --- CHECKPOINT ---
                        // Replace Duplicated From Front --- CHECKPOINT ---
                        // Replace Repeats --- CHECKPOINT ---
                        // Resize
                        LapysDevelopmentKit.functions.arrayPrototypeResize = function arrayPrototypeResize(array, length) { LDKF.objectPrototypeSetProperty(array, "length", length) };

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

                        // Shallow Concatenate
                        LapysDevelopmentKit.functions.arrayPrototypeShallowConcatenate = function arrayPrototypeShallowConcatenate() {
                            // Initialization > (Arguments, Index, Iterator, Length)
                            var args = [], index = 0,
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Update > Arguments
                            args[index] = [];

                            // Loop > Update > Arguments
                            while (iterator) args[index += 1] = arguments[length - (iterator -= 1) - 1];

                            // Return
                            return LDKF.arrayPrototypeSourceConcatenate.apply(LDKF, args)
                        };

                        // Shift Left --- CHECKPOINT ---

                        // Shift Right
                        LapysDevelopmentKit.functions.arrayPrototypeShiftRight = function arrayPrototypeShiftRight(array, length) {
                            // Logic
                            if (LDKF.numberPrototypeIsPositiveInteger(length)) {
                                // Initialization > Array (Iterator, Length)
                                var arrayIterator = LDKF.arrayPrototypeLength(array), arrayLength = arrayIterator;

                                // Loop
                                while (arrayIterator) {
                                    // Update > Array (Iterator)
                                    arrayIterator -= 1;
                                    array[arrayIterator + length] = array[arrayIterator]
                                }

                                // Loop > Deletion --- NOTE (Lapys) -> Free up some memory.
                                while (arrayIterator != length) delete array[(arrayIterator += 1) - 1];

                                // Return
                                return array
                            }

                            else
                                // Error
                                LDKF.error("Invalid array length: `" + LDKF.toString(index) + '`')
                        };

                        // Shuffle --- CHECKPOINT ---

                        // Some
                        LapysDevelopmentKit.functions.arrayPrototypeSome = function arrayPrototypeSome(array, callback) {
                            // Initialization > Iterator
                            var iterator = LDKF.arrayPrototypeLength(array);

                            // Loop > Logic > Return
                            while (iterator) if (callback(array[iterator -= 1])) return true;

                            // Return
                            return false
                        };

                        // Source Concatenate
                        LapysDevelopmentKit.functions.arrayPrototypeSourceConcatenate = function arrayPrototypeSourceConcatenate(array) {
                            // Initialization > (Index, Iterator, Length)
                            var index = LDKF.arrayPrototypeLength(array) - 1,
                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                            // Loop
                            while (iterator != 1) {
                                // Initialization > Concatenation (Iterator, Length)
                                var concatenation = arguments[length - (iterator -= 1)],
                                    concatenationIterator = LDKF.arrayLikePrototypeLength(concatenation),
                                    concatenationLength = concatenationIterator;

                                // Loop > Update > Array
                                while (concatenationIterator) array[index += 1] = concatenation[concatenationLength - (concatenationIterator -= 1) - 1]
                            }

                            // Return
                            return array
                        };

                        // Trim --- CHECKPOINT ---
                        // Trim Left --- CHECKPOINT ---
                        // Trim Right --- CHECKPOINT ---

                    // Size
                    LapysDevelopmentKit.functions.array.size = function size(length, elements) {
                        // Initialization > Array
                        var array = [];

                        // Update > Array
                        LDKF.arrayPrototypeResize(array, length);

                        // Return
                        return array
                    };

                // Array-Like > Prototype
                    // Length
                    LapysDevelopmentKit.functions.arrayLikePrototypeLength = function arrayLikePrototypeLength(arrayLike) {
                        // Logic
                        if (LDKF.isArguments(arrayLike)) return LDKF.getArgumentsLength(arrayLike);
                        else if (LDKF.isArray(arrayLike)) return LDKF.arrayPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLAllCollection(arrayLike)) return LDKF.htmlAllCollectionPrototypeLength(arrayLike);
                        else if (LDKF.isHTMLCollection(arrayLike)) return LDKF.htmlCollectionPrototypeLength(arrayLike);
                        else if (LDKF.isMIMETypeArray(arrayLike)) return LDKF.mimeTypeArrayPrototypeLength(arrayLike);
                        else if (LDKF.isNodeList(arrayLike)) return LDKF.nodeListPrototypeLength(arrayLike);
                        else if (LDKF.isPluginArray(arrayLike)) return LDKF.pluginArrayPrototypeLength(arrayLike);

                        // Initialization > (Key, Length)
                        var key, length = -1;

                        // Loop > Update > Length
                        for (key in arrayLike)
                            LDKF.stringPrototypeIsNumeric(key) && (function(index) { (index > length) && (length = index) })(LDKF.toNumber(key));

                        // Return
                        return length + 1
                    };

                // Cancel Animation Frame
                LapysDevelopmentKit.functions.cancelAnimationFrame = function cancelAnimationFrame(handle) { return LDKO.cancelAnimationFrame.call(GLOBAL, handle) };

                // Clear Interval --- WARN (Lapys) -> Only for semantics, defer to `LapysDevelopmentKit.functions.clearTimeout` instead.
                LapysDevelopmentKit.functions.clearInterval = function clearInterval(timeoutId) { return LDKF.clearTimeout(timeoutId) };

                // Clear Timeout
                LapysDevelopmentKit.functions.clearTimeout = function clearTimeout(timeoutId) {
                    // Initialization > Iterator
                    var iterator = LDKF.arrayPrototypeLength(LDKI.data.lists.timeouts);

                    // Loop
                    while (iterator) {
                        // Initialization > Stored Timeout
                        var storedTimeout = LDKI.data.lists.timeouts[iterator -= 1];

                        // Logic
                        if (timeoutId == storedTimeout.initialId) {
                            // Update > (Timeout ID, (Lapys Development Kit > Information > Data > Lists) > Timeouts)
                            timeoutId = storedTimeout.currentId;
                            LDKI.data.lists.timeouts[iterator] = null;

                            // [Break]
                            break
                        }
                    }

                    // Return
                    return LDKO.clearTimeout.call === LDKO.functionPrototypeCall ?
                        LDKO.clearTimeout.call(GLOBAL, timeoutId) :
                        LDKO.clearTimeout(timeoutId)
                };

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

                // Date
                    // Now
                    LapysDevelopmentKit.functions.dateNow = function dateNow() { return LDKO.dateNow() };

                // Document > Prototype
                    // Create Element
                    LapysDevelopmentKit.functions.documentPrototypeCreateElement = function documentPrototypeCreateElement(localName) {
                        // Return
                        return LDKF.getArgumentsLength(arguments) == 1 ?
                            LDKO.documentPrototypeCreateElement.call(LDKC.document, localName) :
                            LDKO.documentPrototypeCreateElement.call(arguments[0], arguments[1])
                    };

                // Function > Prototype
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
                        })(arguments), timestamp = LDKC.clock.time();

                        // Method
                        method.apply(this, args);

                        // Return
                        return LDKC.clock.time() - timestamp
                    };

                // HTML All Collection > Prototype
                    // Length
                    LapysDevelopmentKit.functions.htmlAllCollectionPrototypeLength = function htmlAllCollectionPrototypeLength(htmlAllCollection) { return LDKO.htmlAllCollectionPrototypeLengthDescriptor.get.call(htmlAllCollection) };

                // HTML Collection > Prototype
                    // Length
                    LapysDevelopmentKit.functions.htmlCollectionPrototypeLength = function htmlCollectionPrototypeLength(htmlCollection) { return LDKO.htmlCollectionPrototypeLengthDescriptor.get.call(htmlCollection) };

                // MIME Type Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.mimeTypeArrayPrototypeLength = function mimeTypeArrayPrototypeLength(mimeTypeArray) { return LDKO.mimeTypeArrayPrototypeLengthDescriptor.get.call(mimeTypeArray) };

                // Node List > Prototype
                    // Length
                    LapysDevelopmentKit.functions.nodeListPrototypeLength = function nodeListPrototypeLength(nodeList) { return LDKO.nodeListPrototypeLengthDescriptor.get.call(nodeList) };

                // Object > Prototype
                    // Iterate --- NOTE (Lapys) -> Index all properties of an object.
                    LapysDevelopmentKit.functions.objectPrototypeIterate = function objectPrototypeIterate(object, callback) {
                        // Initialization > (Key, (Property) (Names, Symbols) (Iterator, Length), Properties (Iterator, Length))
                        var key,
                            propertyNames = (function() { try { return LDKF.objectGetOwnPropertyNames(object) || [] } catch (error) {} })(),
                            propertyNamesIterator = LDKF.arrayPrototypeLength(propertyNames), propertyNamesLength = propertyNamesIterator,
                            propertySymbols = (function() { try { return LDKF.isFunction(LDKO.objectGetOwnPropertySymbols) ? LDKF.objectGetOwnPropertySymbols(object) : [] } catch (error) {} })(),
                            propertySymbolsIterator = LDKF.arrayPrototypeLength(propertySymbols), propertySymbolsLength = propertySymbolsIterator,
                            property, properties = [],
                            propertiesIterator = 0, propertiesLength;

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

                // Performance > Prototype
                    // Now
                    LapysDevelopmentKit.functions.performancePrototypeNow = function performancePrototypeNow(performance) { return LDKO.performancePrototypeNow.call(LDKF.getArgumentsLength(performance) ? performance : LDKC.performance) };

                // Plugin Array > Prototype
                    // Length
                    LapysDevelopmentKit.functions.pluginArrayPrototypeLength = function pluginArrayPrototypeLength(pluginArray) { return LDKO.pluginArrayPrototypeLengthDescriptor.get.call(pluginArray) };

                // Register Custom Element
                LapysDevelopmentKit.functions.registerCustomElement = function registerCustomElement() {
                    // Return
                    return LDKC.supportsCustomElements ?
                        LDKO.customElementRegistryPrototypeDefine.apply(LDKC.customElements, arguments) :
                        LDKO.documentPrototypeRegisterElement.apply(LDKC.document, arguments)
                };

                // Request Animation Frame
                LapysDevelopmentKit.functions.requestAnimationFrame = function requestAnimationFrame(method) { return LDKO.requestAnimationFrame.call(GLOBAL, method) };

                // Set Interval
                LapysDevelopmentKit.functions.setInterval = function setInterval(method, delay) {
                    // Initialization > (Index, Timeout)
                    var index = (function() {
                        // Initialization > Index
                        var index = 0;

                        // Loop
                        while (LDKI.data.lists.timeouts[index]) index += 1;

                        // Return
                        return index
                    })(), timeout = (function setInterval() { return LDKF.setTimeout(function() { method(); LDKI.data.lists.timeouts[index].currentId = setInterval(method, delay) }, delay) })();

                    // Update > (Lapys Development Kit > Information > Data > List > Timeouts)
                    LDKI.data.lists.timeouts[index] = {currentId: timeout, initialId: timeout};

                    // Return
                    return timeout
                };

                // Set Timeout
                LapysDevelopmentKit.functions.setTimeout = function setTimeout(method, delay) {
                    // Initialization > Timeout (ID)
                    var timeout = function() { method(); LDKF.clearTimeout(timeoutId) },
                        timeoutId =  LDKO.setTimeout.call === LDKO.functionPrototypeCall ? LDKO.setTimeout.call(GLOBAL, timeout, delay) : LDKO.setTimeout(timeout, delay);

                    // Return
                    return timeoutId
                };

                // String > Prototype
                    // Character Code At
                    LapysDevelopmentKit.functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, index) { return LDKO.stringPrototypeCharacterCodeAt.call(string, index) };

                    // Is Hexadecimal --- CHECKPOINT ---
                    // Is Lower Character
                    LapysDevelopmentKit.functions.stringPrototypeIsLowerCharacter = function stringPrototypeIsLowerCharacter(character) { return character && !LDKF.arrayPrototypeIncludes(LDKC.string.uppercaseAlphabets, character) };

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
                            while (iterator > 0) {
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

                    // Remove All
                    LapysDevelopmentKit.functions.stringPrototypeRemoveAll = function stringPrototypeRemoveAll(string, matches, replacement) { return LDKF.stringPrototypeReplaceAll(string, matches, "") };

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

                    // To Upper
                    LapysDevelopmentKit.functions.stringPrototypeToUpper = function stringPrototypeToUpper(string) {
                        // Initialization > (Iterator, Length, Stream)
                        var iterator = LDKF.stringPrototypeLength(string), length = iterator,
                            stream = "";

                        // Loop
                        while (iterator) {
                            // Initialization > (Character< Index)
                            var character = LDKF.stringPrototypeCharacterAt(string, length - (iterator -= 1) - 1), index = LDKF.arrayPrototypeLastIndex(LDKC.string.lowercaseAlphabets, character);

                            // Update > Character
                            stream += ~index ? LDKC.string.uppercaseAlphabets[index] : character
                        }

                        // Return
                        return stream
                    };

            /* Constants */
                // HTML Div Element
                LapysDevelopmentKit.constants.htmlDivElement = LDKF.documentPrototypeCreateElement("div");

                // Supports Standard Custom Elements
                LapysDevelopmentKit.constants.supportsStandardCustomElements = LDKC.hasClassKeyword && LDKC.supportsCustomElements;

            /* Objects */
                // Element > Prototype
                    // Get Attribute
                    LapysDevelopmentKit.objects.elementPrototypeGetAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getAttribute");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetAttributeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getAttribute` method")
                    })();

                    // Get Attribute Node
                    LapysDevelopmentKit.objects.elementPrototypeGetAttributeNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getAttributeNode");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetAttributeNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getAttribute` method")
                    })();

                    // Get Bounding Client Rectangle
                    LapysDevelopmentKit.objects.elementPrototypeGetBoundingClientRectangle = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getBoundingClientRect");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetBoundingClientRectangleMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getBoundingClientRect` method")
                    })();

                    // Get Client Rectangles
                    LapysDevelopmentKit.objects.elementPrototypeGetClientRectangles = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getBoundingClientRect");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetBoundingClientRectangleMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getBoundingClientRect` method")
                    })();

                    // Get Elements By Tag Name
                    LapysDevelopmentKit.objects.elementPrototypeGetElementsByTagName = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "getElementsByTagName");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeGetElementsByTagNameMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.getElementsByTagName` method")
                    })();

                    // Has Attribute
                    LapysDevelopmentKit.objects.elementPrototypeHasAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "hasAttribute");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
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

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeInsertAdjacentElementMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.insertAdjacentElement` method")
                    })();

                    // Insert Adjacent HTML
                    LapysDevelopmentKit.objects.elementPrototypeInsertAdjacentHTML = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "insertAdjacentHTML");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeInsertAdjacentHTMLMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.insertAdjacentHTML` method")
                    })();

                    // Insert Adjacent Text
                    LapysDevelopmentKit.objects.elementPrototypeInsertAdjacentText = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "insertAdjacentText");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeInsertAdjacentTextMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.insertAdjacentText` method")
                    })();

                    // Remove Attribute
                    LapysDevelopmentKit.objects.elementPrototypeRemoveAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "removeAttribute");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeRemoveAttributeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.removeAttribute` method")
                    })();

                    // Remove Attribute Node
                    LapysDevelopmentKit.objects.elementPrototypeRemoveAttributeNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "removeAttributeNode");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeRemoveAttributeNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.removeAttributeNode` method")
                    })();

                    // Set Attribute
                    LapysDevelopmentKit.objects.elementPrototypeSetAttribute = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "setAttribute");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isElementPrototypeSetAttributeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Element.prototype.setAttribute` method")
                    })();

                    // Set Attribute Node
                    LapysDevelopmentKit.objects.elementPrototypeSetAttributeNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasElementConstructor ? LDKO.elementPrototype : LDKC.htmlDivElement, "setAttributeNode");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isHTMLElementPrototypeBlurMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`HTMLElement.prototype.blur` method")
                    })();

                    // Click
                    LapysDevelopmentKit.objects.htmlElementPrototypeClick = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasHTMLElementConstructor ? LDKO.htmlElementPrototype : LDKC.htmlDivElement, "click");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isHTMLElementPrototypeClickMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`HTMLElement.prototype.click` method")
                    })();

                    // Focus
                    LapysDevelopmentKit.objects.htmlElementPrototypeFocus = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasHTMLElementConstructor ? LDKO.htmlElementPrototype : LDKC.htmlDivElement, "focus");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
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
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeAppendChildMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.appendChild` method")
                    })();

                    // Clone Node
                    LapysDevelopmentKit.objects.nodePrototypeCloneNode = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "cloneNode");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeCloneNodeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.cloneNode` method")
                    })();

                    // Contains
                    LapysDevelopmentKit.objects.nodePrototypeContains = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "contains");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeContainsMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.contains` method")
                    })();

                    // Has Child Nodes
                    LapysDevelopmentKit.objects.nodePrototypeHasChildNodes = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "hasChildNodes");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeHasChildNodesMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.hasChildNodes` method")
                    })();

                    // Insert Before
                    LapysDevelopmentKit.objects.nodePrototypeInsertBefore = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "insertBefore");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeInsertBeforeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.insertBefore` method")
                    })();

                    // Normalize
                    LapysDevelopmentKit.objects.nodePrototypeNormalize = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "normalize");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeNormalizeMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.normalize` method")
                    })();

                    // Remove Child
                    LapysDevelopmentKit.objects.nodePrototypeRemoveChild = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "removeChild");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
                            // Logic > (...)
                            if (LDKT.isNodePrototypeRemoveChildMethod(method)) return method;
                            else LDKF.error.nativeToEnvironment("`Node.prototype.removeChild` method")
                    })();

                    // Replace Child
                    LapysDevelopmentKit.objects.nodePrototypeReplaceChild = (function() {
                        // Initialization > Method
                        var method = LDKF.objectPrototypeGetProperty(LDKC.hasNodeConstructor ? LDKO.nodePrototype : LDKC.htmlDivElement, "replaceChild");

                        // Logic
                        if (LDKC.isBrowserEnvironment)
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
                // Clock
                LapysDevelopmentKit.data.clock = (function() {
                    // Initialization > Constructor
                    var constructor = function Clock() {
                        // Initialization > Target
                        var that = this;

                        // Modification > Target
                            // Frame
                            that.frame = function frame(method, delay) {
                                // Initialization > (Frame, Has Recorded Initial ID, Index, Set Current ID)
                                var frame, hasRecordedInitialId = false, index = (function() {
                                    // Initialization > Index
                                    var index = 0;

                                    // Loop
                                    while (LDKI.data.lists.frames[index]) index += 1;

                                    // Return
                                    return index
                                })(), setCurrentId = delay ? function setCurrentId() {
                                    // Modification > Frame > Current ID
                                    frame.currentId = LDKF.setTimeout(function() {
                                        // Logic
                                        if (LDKI.data.lists.frames[index] /* --- NOTE (Lapys) -> or `frame`. */) {
                                            // Method
                                            method();

                                            // (...) > Request Animation Frame > Animation Frame
                                            LDKF.requestAnimationFrame(animationFrame)
                                        }
                                    }, delay)
                                } : function setCurrentId() { frame.currentId = (LDKM.random() * 10) | 0 };

                                // Function
                                    // Frame
                                    function animationFrame() {
                                        // Update > Frame
                                        frame = LDKI.data.lists.frames[index];

                                        // Logic
                                        if (frame) {
                                            // Set Current ID --- NOTE (Lapys) -> Implicitly calls a timeout if Delay is set.
                                            setCurrentId();

                                            // Logic --- NOTE (Lapys) -> Set the initial ID.
                                            if (!hasRecordedInitialId) {
                                                // Modification > Frame > Initial ID
                                                frame.initialId = frame.currentId;

                                                // Update > Has Recorded Initial ID
                                                hasRecordedInitialId = true
                                            }

                                            // Logic --- NOTE (Lapys) -> If there's a delay, the Current ID set is returned from a timeout (`setTimeout`) already (hence, do not run another timeout (`requestAnimationFrame`)).
                                            if (!delay) {
                                                // Method
                                                method();

                                                // (...) > Request Animation Frame > Animation Frame
                                                LDKF.requestAnimationFrame(animationFrame)
                                            }
                                        }
                                    }

                                // Update > (Lapys Development Kit > Data > Lists > Frames) --- NOTE (Lapys) -> Or `frame`.
                                LDKI.data.lists.frames[index] = {};

                                // Animation Frame
                                animationFrame();

                                // Return
                                return frame.currentId
                            };

                            // Stop
                            that.stop = function stop(tickId) {
                                // Initialization > Iterator
                                var iterator = LDKF.arrayPrototypeLength(LDKI.data.lists.frames);

                                // Loop
                                while (iterator) {
                                    // Initialization > Frame
                                    var frame = LDKI.data.lists.frames[iterator -= 1];

                                    // Logic
                                    if (frame.initialId == tickId) {
                                        // Update > (Lapys Development Kit > Data > Lists > Frames)
                                        LDKI.data.lists.frames[iterator] = null;

                                        // [Break]
                                        break
                                    }
                                }
                            };

                            // Tick --- NOTE (Lapys) -> Play a single frame of animation.
                            that.tick = function tick(method, delay) {
                                // Initialization > Frame ID
                                var frameId = that.frame(function() {
                                    // Method
                                    frameId && method();

                                    // (Target > Stop) > Frame ID
                                    that.stop(frameId)
                                }, delay);

                                // Return
                                return frameId
                            };

                            // Time {Stamp}
                            that.time = function time() { return LDKC.performanceIsVoid ? LDKF.dateNow() : LDKF.performancePrototypeNow(LDKC.performance) };

                        // Return
                        return that
                    };

                    // Return
                    return function Clock() { return new constructor }
                })();

                // Component --- NOTE (Lapys) -> All components extend to this constructor (which extends to `HTMLElement`).
                LapysDevelopmentKit.data.component = LapysJS.tmp.htmlComponentElement =
                    LDKC.supportsStandardCustomElements ?
                        LDKF.eval("(function() { return (class HTMLComponentElement extends LapysJS.tmp.htmlElement {}) })()") :
                        (function() {
                            // Function > HTML Component Element --- NOTE (Lapys) -> Constructor
                            function HTMLComponentElement() {};

                            // Modification > HTML Component Element > Prototype
                            HTMLComponentElement.prototype = (function(prototype) {
                                // Modification > Prototype > Constructor
                                LDKF.objectDefineProperty(prototype, "constructor", {configurable: true, enumerable: false, value: HTMLComponentElement, writable: true});

                                // Return
                                return prototype
                            })(LDKF.objectCreate(LDKO.htmlElementPrototype));

                            // Return
                            return HTMLComponentElement
                        })();

                    // Accordion --- CHECKPOINT ---
                    LDKD.component.accordion = (function() {
                        // Initialization
                            /* Accordion */
                                // Constructor
                                var AccordionConstructor = LDKC.supportsStandardCustomElements ?
                                    (function() {
                                        // Initialization > Constructor
                                        var constructor = LDKF.eval("(function() { return (class HTMLAccordionElement extends LapysJS.tmp.htmlComponentElement {}) })()");

                                        // Register
                                        LDKF.registerCustomElement("accordion-component", constructor);

                                        // Return
                                        return constructor
                                    })() :
                                    (function() {
                                        // Function > HTML Accordion Element
                                        function HTMLAccordionElement() {};

                                        // Initialization > Prototype
                                        var prototype = (function(prototype) {
                                            // Modification > Prototype > Constructor
                                            LDKF.objectDefineProperty(prototype, "constructor", {configurable: true, enumerable: false, value: HTMLAccordionElement, writable: true});

                                            // Return
                                            return prototype
                                        })(LDKF.objectCreate(LDKD.component));

                                        // Modification > HTML Accordion Element > Prototype
                                        HTMLAccordionElement.prototype = prototype;

                                        // Return
                                        return HTMLAccordionElement
                                    })(),

                                // Manager
                                AccordionManager = {
                                    // Assert --- CHECKPOINT --- NOTE (Lapys) -> Is the Accordion specified really an Accordion?
                                    ASSERT: function ASSERT(accordion) {

                                    },

                                    // Call --- NOTE (Lapys) -> Global method for calling non-test methods.
                                    CALL: function CALL(method, accordion) {
                                        // Initialization > Is Accordion
                                        var isAccordion = AccordionManager.ASSERT(accordion);

                                        // Logic
                                        if (isAccordion) {
                                            // Accordion Manager > Correct > Accordion
                                            AccordionManager.CORRECT(accordion, STRICT = isAccordion);

                                            // Initialization > (Arguments, Index, Iterator, Length)
                                            var args = [], index = 0,
                                                iterator = LDKF.getArgumentsLength(arguments), length = iterator;

                                            // Update > Arguments
                                            args[0] = accordion;

                                            // Loop > Update > Arguments
                                            while (iterator != 2) args[index += 1] = arguments[length - (iterator -= 1) - 1];

                                            // Return
                                            return method.apply(this, args)
                                        }

                                        else
                                            // Error
                                            LDKF.error("`this` must be an HTMLAccordionElement")
                                    },

                                    // Correct --- CHECKPOINT --- NOTE (Lapys) -> Ensure the Accordion is still syntactically similar to a default Accordion.
                                    CORRECT: function CORRECT(accordion, STRICT) {
                                        // Logic
                                        if (STRICT || AccordionManager.ASSERT(accordion)) {
                                            // Modification > Accordion > Class
                                            LDKC.supportsStandardCustomElements || LDKC.hasHTMLUnknownElementConstructor || LDKF.elementPrototypeAddToClass(accordion, "accordion")
                                        }

                                        else
                                            // Error
                                            LDKF.error("`this` must be an HTMLAccordionElement")
                                    },

                                    // Create --- NOTE (Lapys) -> Create a default Accordion.
                                    CREATE: function CREATE() {
                                        // Initialization > Accordion
                                        var accordion;

                                        // Logic
                                        if (LDKC.supportsStandardCustomElements)
                                            // Update > Accordion
                                            accordion = new AccordionConstructor;

                                        else {
                                            // Update > Accordion
                                            accordion = LDKC.hasHTMLUnknownElementConstructor ?
                                                LDKF.documentPrototypeCreateElement("accordion") :
                                                LDKF.documentPrototypeCreateElement("div");

                                            // Modification > Accordion > Constructor
                                            LDKF.objectPrototypeSetProperty(accordion, "constructor", AccordionConstructor);

                                            // Error > (...) --- NOTE (Lapys) -> Throws a `TypeError` object in some legacy environments.
                                            try { LDKF.objectSetPrototypeOf(accordion, AccordionPrototype) }
                                            catch (error) { if (!LDKF.isTypeError(error)) throw error }
                                        }

                                        // Return
                                        return accordion
                                    },

                                    // Register --- CHECKPOINT ---
                                    REGISTER: function REGISTER(accordion) {},

                                    // Registry --- NOTE (Lapys) -> List of `HTMLElement` objects registered as Accordions.
                                    REGISTRY: LDKI.data.lists.accordions = [],

                                    // Unregister --- CHECKPOINT ---
                                    UNREGISTER: function UNREGISTER(accordion) {},

                                    // Get Bodies --- CHECKPOINT ---
                                    getBodies: function getBodies(accordion) {},

                                    // Get Head --- CHECKPOINT ---
                                    getHead: function getHead(accordion) {},

                                    // Replace Head --- CHECKPOINT --- NOTE (Lapys) -> Swap the specified Accordion Head and current Accordion Head for the specified Accordion (while registering the specified Accordion Head).
                                    replaceHead: function replaceHead(accordion, accordionHead) {},

                                    // Set Body --- CHECKPOINT --- NOTE (Lapys) -> Register a new Accordion Body and insert it within the specified Accordion.
                                    setBody: function setBody(accordion, accordionBody) {}
                                },

                                // Prototype
                                AccordionPrototype,

                            /* Accordion Component --- NOTE (Lapys) -> All accordion components inherit from this. */
                                // Constructor
                                AccordionComponentConstructor,

                                // Manager
                                AccordionComponentManager = {
                                    // Get Accordion --- CHECKPOINT --- NOTE (Lapys) -> Get ancestor Accordion.
                                    getAccordion: function getAccordion(accordionComponent) {},

                                    // Set Accordion --- CHECKPOINT --- NOTE (Lapys) -> Insert into specified Accordion.
                                    setAccordion: function setAccordion(accordionComponent, accordion) {}
                                },

                                // Prototype
                                AccordionComponentPrototype,

                                /* Accordion Body */
                                    // Constructor
                                    AccordionBodyConstructor,

                                    // Manager
                                    AccordionBodyManager = {
                                        // Assert --- CHECKPOINT ---
                                        ASSERT: function ASSERT(accordionBody) {},

                                        // Call --- CHECKPOINT ---
                                        CALL: function CALL(method, accordionBody) {},

                                        // Correct --- CHECKPOINT ---
                                        CORRECT: function CORRECT(accordionBody, STRICT) {},

                                        // Create --- CHECKPOINT ---
                                        CREATE: function CREATE() {},

                                        // Register --- CHECKPOINT ---
                                        REGISTER: function REGISTER(accordionBody) {},

                                        // Registry
                                        REGISTRY: LDKI.data.lists.accordionBodies = [],

                                        // Unregister --- CHECKPOINT ---
                                        UNREGISTER: function UNREGISTER(accordionBody) {},

                                        // Close --- CHECKPOINT ---
                                        close: function close(accordionBody) {},

                                        // Get State --- CHECKPOINT ---
                                        getState: function getState(accordionBody) {},

                                        // Open --- CHECKPOINT ---
                                        open: function open(accordionBody) {},

                                        // Set State --- CHECKPOINT ---
                                        setState: function setState(accordionBody, state) {},

                                        // Toggle State --- CHECKPOINT ---
                                        toggleState: function toggleState(accordionBody) {}
                                    },

                                    // Prototype
                                    AccordionBodyPrototype,

                                /* Accordion Head */
                                    // Constructor
                                    AccordionHeadConstructor,

                                    // Manager
                                    AccordionHeadManager = {
                                        // Assert --- CHECKPOINT ---
                                        ASSERT: function ASSERT(accordionHead) {},

                                        // Call --- CHECKPOINT ---
                                        CALL: function CALL(method, accordionHead) {},

                                        // Correct --- CHECKPOINT ---
                                        CORRECT: function CORRECT(accordionHead, STRICT) {},

                                        // Create --- CHECKPOINT ---
                                        CREATE: function CREATE() {},

                                        // Register --- CHECKPOINT ---
                                        REGISTER: function REGISTER(accordionHead) {},

                                        // Registry
                                        REGISTRY: LDKI.data.lists.accordionHeads = [],

                                        // Unregister --- CHECKPOINT ---
                                        UNREGISTER: function UNREGISTER(accordionHead) {}
                                    },

                                    // Prototype
                                    AccordionHeadPrototype;

                        // Return
                        return function Accordion(head, bodies) {
                            // Initialization > (Accordion, Length)
                            var accordion = AccordionManager.CREATE(),
                                length = LDKF.getArgumentsLength(arguments);

                            // Return
                            return accordion
                        }
                    })();

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
                // Internal Multiplication --- CITE (Lapys) -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill`.
                LapysDevelopmentKit.math.imul = function imul(numberA, numberB) {
                    // Initialization > Number (A, B) (Maximum, Minimum)
                    var numberAMaximum = (numberA >>> 16) & 0xFFFF, numberAMinimum = numberA & 0xFFFF,
                        numberBMaximum = (numberB >>> 16) & 0xFFFF, numberBMinimum = numberB & 0xFFFF;

                    // Return --- NOTE (Lapys) -> Sign unsigned value.
                    return ((numberAMinimum * numberBMinimum) + (((numberAMaximum * numberBMinimum + numberAMinimum * numberBMaximum)<<16)>>>0) | 0)
                };

                // Random
                LapysDevelopmentKit.math.random = function random() { return LDKM.random.randomizer() };
                    // Generate Seed ---- NOTE (Lapys) -> Creates a XOR FNV 1A state.
                    LapysDevelopmentKit.math.random.generateSeeder = function xfnv1a(seed) {
                        // Initialization > (Iterator, Length, ...)
                        var iterator = 0,
                            length = LDKF.stringPrototypeLength(seed ? seed : seed = ""),
                            tmp = 2166136261 >>> 0 /* NOTE (Lapys) -> Un-sign the number within a specific range. */;

                        // Loop
                        while (iterator != length) {
                            // Update > (..., Iterator)
                            tmp = LDKM.imul(tmp ^ LDKF.stringPrototypeCharacterCodeAt(seed, iterator), 16777619);
                            iterator += 1
                        }

                        // Return
                        return function seeder() {
                            // Update > (...)
                            tmp += tmp << 13; tmp ^= tmp >>> 7;
                            tmp += tmp << 3; tmp ^= tmp >>> 17;

                            // Return
                            return (tmp += tmp << 5) >>> 0
                        }
                    };

                    // Generate Randomizer --- NOTE (Lapys) -> Or use Mulberry 32 (although it doesn't care about the Birthday Problem).
                    LapysDevelopmentKit.math.random.generateRandomizer = function sfc32(hashA, hashB, hashC, hashD) {
                        // Return
                        return function randomizer() {
                            // Update > Hash (A, B, C, D)
                            hashA >>>= 0; hashB >>>= 0; hashC >>>= 0; hashD >>>= 0;

                            // Initialization > Temporary
                            var tmp = (hashA + hashB) | 0;

                            // Update > (Hash (A, B, C, D), Temporary)
                            hashA = hashB ^ hashB >>> 9; hashB = hashC + (hashC << 3) | 0; hashC = (hashC << 21 | hashC >>> 11); hashD = hashD + 1 | 0;
                            tmp = tmp + hashD | 0;
                            hashC = hashC + tmp | 0;

                            // Return
                            return (tmp >>> 0) / 4294967296
                        }
                    };

                    // Randomizer
                    LapysDevelopmentKit.math.random.randomizer = (function(seeder) { return LDKM.random.generateRandomizer(seeder(), seeder(), seeder(), seeder()) })(LDKM.random.generateSeeder(""));

            /* Constants */
                // Clock
                LapysDevelopmentKit.constants.clock = new LDKD.clock;

                // Performance Is Void
                LapysDevelopmentKit.constants.performanceIsVoid = LDKF.isVoid(LDKC.performance);

    /* Function */
        /* Initiate
                --- NOTE ---
                    #Lapys:
                        - Update the LapysJS objects.
                        - Modify object prototypes.
                        - Initiate global functions and objects.
        */
        function INITIATE() {
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
                    LDKF.objectDefineConstantProperty(LapysJS, "debugMode", {value: LDKS.debugMode});

                    // Features --- CHECKPOINT ---
                    LDKF.objectDefineConstantProperty(LapysJS, "features", {value: LDKS.features});
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
                    if (LDKF.arrayPrototypeIncludes(LDKS.prototypes, "Array")) {
                        // Add
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "add", function add(element) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeAddToBack.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Add To Back
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "addToBack", function addToBack(element) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeAddToBack.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Add To Front
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "addToFront", function addToFront(element) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeAddToFront.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Build
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "build", function build() {
                            // Return
                            return LDKF.isArray(this) && (function(args) {
                                // Initialization > (Iterator, Length)
                                var iterator = LDKF.getArgumentsLength(args), length = iterator;

                                // Loop
                                while (iterator != 1) {
                                    // Initialization > Argument
                                    var arg = args[length - (iterator -= 1)];

                                    // Error
                                    LDKF.isFunction(arg) || LDKF.error("Argument specified `" + LDKF.toString(arg) + "` must be a function")
                                }

                                // Return
                                return true
                            })(arguments) ? LDKF.arrayPrototypeBuild.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Construct
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "construct", function construct(callback, returnValue) {
                            // Return
                            return LDKF.isArray(this) && LDKF.isFunction(callback) ? (LDKF.getArgumentsLength(arguments) == 1 ? LDKF.arrayPrototypeConstruct(this, callback) : LDKF.arrayPrototypeConstruct(this, callback, returnValue)) : LDKF.error("`this` must be an array")
                        });

                        // Cut
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "cut", function cut(index) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeCut.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Cut Index
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "cutIndex", function cutIndex(index) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeCutIndex.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Cut Left
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "cutLeft", function cutLeft(index) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeCutLeft.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Cut Right
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "cutRight", function cutRight(index) {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeCutRight.apply(LDKF, LDKF.arrayPrototypeSourceConcatenate([this], arguments)) : LDKF.error("`this` must be an array")
                        });

                        // Distinct
                        LDKF.objectSetInnumerableVariableGetterProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "distinct", function distinct() {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeDistinct(this) : LDKF.error("`this` must be an array")
                        });

                        // Every
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "every", function every(callback) {
                            // Return
                            return LDKF.isArray(this) && LDKF.isFunction(callback) ? LDKF.arrayPrototypeEvery(this, callback) : true
                        });

                        // Filter --- NOTE (Lapys) -> Different from the LDK's implementation? Maybe.
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "filter", function filter(callback) {
                            // Initialization > Target
                            var that = this;

                            // Logic
                            if (LDKF.isArray(this) && LDKF.isFunction(callback)) {
                                // Initialization > (Filter, Index, Iterator, Length)
                                var filter = [], index = -1,
                                    iterator = LDKF.arrayPrototypeLength(that), length = iterator;

                                // Loop
                                while (iterator) {
                                    // Initialization > Array Index
                                    var arrayIndex = length - (iterator -= 1) - 1;

                                    // Update > Filter
                                    callback(array[arrayIndex], arrayIndex, array) && (filter[index += 1] = array[arrayIndex])
                                }

                                // Return
                                return filter
                            }

                            // Return
                            return []
                        });

                        // First
                        LDKF.objectSetInnumerableVariableGetterProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "first", function first() {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeFirst(this) : LDKF.error("`this` must be an array")
                        });

                        // Flatten --- CHECKPOINT ---

                        // For Each
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "forEach", function forEach(callback) {
                            // Error
                            LDKF.isFunction(callback) || LDKF.error('`' + LDKF.toString(callback) + "` is not a function");

                            // (...)
                            LDKF.isArray(this) && LDKF.arrayPrototypeForEach(this, callback)
                        });

                        // Free --- CHECKPOINT ---

                        // Includes
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "includes", function includes(element) {
                            // Return
                            return LDKF.getArgumentsLength(arguments) && LDKF.isArray(this) ? LDKF.arrayPrototypeIncludes(this, element) : false
                        });

                        // Index Of
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "indexOf", function indexOf(element) {
                            // Return
                            return LDKF.getArgumentsLength(arguments) && LDKF.isArray(this) ? LDKF.arrayPrototypeIndex(this, element) : -1
                        });

                        // Insert --- CHECKPOINT ---
                        // Is Filled With --- CHECKPOINT ---
                        // Last --- CHECKPOINT ---
                        LDKF.objectSetInnumerableVariableGetterProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "last", function last() {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeLast(this) : LDKF.error("`this` must be an array")
                        });

                        // Last Index Of
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "lastIndexOf", function lastIndexOf(element) {
                            // Return
                            return LDKF.getArgumentsLength(arguments) && LDKF.isArray(this) ? LDKF.arrayPrototypeLastIndex(this, element) : -1
                        });

                        // Map
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "map", function map(callback) {
                            // Return
                            return LDKF.isArray(this) && LDKF.isFunction(callback) ? LDKF.arrayPrototypeBuild(this, callback) : []
                        });

                        // Only --- CHECKPOINT ---
                        // Pad --- CHECKPOINT ---
                        // Pad Left --- CHECKPOINT ---
                        // Pad Right --- CHECKPOINT ---

                        // Reduce
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "reduce", function reduce(callback, returnValue) {
                            // Error
                            LDKF.isFunction(callback) || LDKF.error('`' + LDKF.toString(callback) + "` is not a function");

                            // Logic > Return
                            if (LDKF.isArray(this) && LDKF.arrayPrototypeLength(this))
                                return LDKF.getArgumentsLength(arguments) > 2 ? LDKF.arrayPrototypeConstruct(this, callback, returnValue) : LDKF.arrayPrototypeConstruct(this, callback);

                            // Error
                            LDKF.error("Reduce of empty array with no initial value")
                        });

                        // Reduce Right
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "reduceRight", function reduceRight(callback, returnValue) {
                            // Error
                            LDKF.isFunction(callback) || LDKF.error('`' + LDKF.toString(callback) + "` is not a function");

                            // Logic > Return
                            if (LDKF.isArray(this) && LDKF.arrayPrototypeLength(this)) {
                                // Initialization > Array --- NOTE (Lapys) -> Cheap solutions.
                                var array = LDKF.arrayPrototypeReverse(this);

                                // Return
                                return LDKF.getArgumentsLength(arguments) > 2 ? LDKF.arrayPrototypeConstruct(array, callback, returnValue) : LDKF.arrayPrototypeConstruct(array, callback)
                            }

                            // Error
                            LDKF.error("Reduce of empty array with no initial value")
                        });

                        // Remove --- CHECKPOINT ---
                        // Remove All --- CHECKPOINT ---
                        // Remove Duplicated --- CHECKPOINT ---
                        // Remove Duplicated From Back --- CHECKPOINT ---
                        // Remove Duplicated From Front --- CHECKPOINT ---
                        // Remove Duplicates --- CHECKPOINT ---
                        // Remove Duplicates From Back --- CHECKPOINT ---
                        // Remove Duplicates From Front --- CHECKPOINT ---
                        // Remove From Back --- CHECKPOINT ---
                        // Remove From Front --- CHECKPOINT ---
                        // Remove Repeated --- CHECKPOINT ---
                        // Remove Repeated From Back --- CHECKPOINT ---
                        // Remove Repeated From Front --- CHECKPOINT ---
                        // Remove Repeats --- CHECKPOINT ---
                        // Replace --- CHECKPOINT ---
                        // Replace All --- CHECKPOINT ---
                        // Replace All From Back --- CHECKPOINT ---
                        // Replace All From Front --- CHECKPOINT ---
                        // Replace Duplicated --- CHECKPOINT ---
                        // Replace Duplicated From Back --- CHECKPOINT ---
                        // Replace Duplicated From Front --- CHECKPOINT ---
                        // Replace Repeats --- CHECKPOINT ---

                        // Reverse
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "reverse", function reverse() {
                            // Return
                            return LDKF.isArray(this) ? LDKF.arrayPrototypeReverse(this) : LDKO.object(this)
                        });

                        // Shift Left --- CHECKPOINT ---
                        // Shift Right --- CHECKPOINT ---

                        // Some
                        LDKF.objectSetInnumerableVariableProperty.whenPropertyIsVoid(LDKO.arrayPrototype, "some", function some(callback) {
                            // Return
                            return LDKF.isArray(this) && LDKF.isFunction(callback) ? LDKF.arrayPrototypeSome(this, callback) : false
                        });

                        // Trim --- CHECKPOINT ---
                        // Trim Left --- CHECKPOINT ---
                        // Trim Right --- CHECKPOINT ---
                    }

                // Date > Prototype --- CHECKPOINT ---
                    // Now
                    // To ISO String

                // Element > Prototype
                    // Momentum Scroll By
                    // Momentum Scroll into View
                    // Momentum Scroll To

                // Function > Prototype
                    // Bind
                    // Then

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
                    {name: "LDKS", value: LapysDevelopmentKit.settings},
                    {name: "LDKT", value: LapysDevelopmentKit.test}
                ]);

                // Length
                // Mathematics
                // Maximum
                // {Get} Maximum {Object}
                // Minimum
                // {Get} Minimum {Object}
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
                        - Integrate components.
                        - Integrate features.
        */
        function UPDATE() {}

        /* Terminate
                --- NOTE ---
                    #Lapys:
                        - ...
        */
        function TERMINATE() {}

    // Initiate
    try { STATE || LDKF.objectDefineConstantProperty(LapysJS.processingDuration, "initiate", {value: LDKF.functionPrototypeMeasure(INITIATE)}) }
    catch (error) {
        // Update > (Private, State)
        PRIVATE = error;
        STATE = INITIATE_ERROR_STATE
    }

    // Update
    try { STATE || LDKF.objectDefineConstantProperty(LapysJS.processingDuration, "update", {value: LDKF.functionPrototypeMeasure(UPDATE)}) }
    catch (error) {
        // Update > (Private, State)
        PRIVATE = error;
        STATE = UPDATE_ERROR_STATE
    }

    // Terminate
    try { STATE || LDKF.objectDefineConstantProperty(LapysJS.processingDuration, "terminate", {value: LDKF.functionPrototypeMeasure(TERMINATE)}) }
    catch (error) {
        // Update > (Private, State)
        PRIVATE = error;
        STATE = TERMINATE_ERROR_STATE
    }

    // Logic
    switch (STATE) {
        // Initiate Error
        case INITIATE_ERROR_STATE: LDKF.error.type.initiate("Error initializing library:\n\t\r" + LDKF.errorPrototypeGetMessage(PRIVATE)); break;

        // Update Error
        case UPDATE_ERROR_STATE: LDKF.error.type.update("Error integrating library runtime:\n\t\r" + LDKF.errorPrototypeGetMessage(PRIVATE)); break;

        // Terminate Error
        case TERMINATE_ERROR_STATE: LDKF.error.type.terminate("Error completing library integration:\n\t\r" + LDKF.errorPrototypeGetMessage(PRIVATE))
    }

    // {Console Messages} Console > Group --- NOTE (Lapys) -> Unfortunately, the `document.currentScript` accessor is not consistent amongst all environments.
    LDKF.consoleGroup("LapysJS v" + VERSION);
        // Console > Log
        LDKF.consoleLog("Debug Mode =", LapysJS.debugMode);
        LDKF.consoleLog("Processing Duration =", (function(processingDuration) { return LDKF.isNumber(processingDuration) ? processingDuration : (LapysJS.processingDuration.initiate + LapysJS.processingDuration.update + LapysJS.processingDuration.terminate) })(LapysJS.processingDuration.valueOf()));
        LDKF.consoleLog('\n');
    LDKF.consoleGroupEnd();

    // Return
    return STATE
})()
