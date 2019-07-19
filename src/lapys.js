/** Main
    @author: Lapys Dev Team
    @description: LapysJS is a general-purpose, semantic and universal JavaScript library
    @version: 0.0.9
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Details:
                -- Average Cumulative Processing Duration: 0ms
                -- Average File Upload Speed: 0ms
                -- Average Phase Processing Duration: 0ms
                -- Supported Development Environments:
                        --- Android (browser)
                        --- Internet Explorer 5 - 11 (browser)
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
                    This is mainly due to subtle inconsistencies in the adaptation of the ECMAScript standard for JavaScript in consumer software and custom runtimes
                    (Hence the need for conditional comments (by Microsoft), fallbacks, polyfills, shims & shivs (by John Resig and Sam Ruby) and so on).

                    Of course, this supports the concept of spoof-proofing [https://en.m.wikipedia.org/wiki/Spoofing_attack] which is a prevention discipline that prevents
                    data being masqueraded and falsified.
                    Unfortunately, the JavaScript language adoption is limited in the context of its everyday-use APIs and spoofing;
                    which leads to most versions of the language being impossible to spoof-proof.

                    Conversely, this decision supports the design standards of the Lapys Development Kit into JavaScript such as:
                        --- software to be executed has four phases: Initiate, Update, Reset, Terminate (also known as RIUT),
                        --- private and public features are independent & separate but still communicate between each other (private being the main authority),
                        --- multiple solutions (often special-purpose) are deferred in favor of a single general-purpose solution when feasible,
                        --- and so on...

    --- RULES ---
        #Lapys:
            - All expressions/ statements/ values must be intentional (avoid the methodologies of Sloppy Mode in JavaScript [https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode]).
            - All features must be alphabetically defined & ordered for readability if feasible.
            - All non-universal features are banned (e.g.: Arrow functions, class objects, REST parameters and so on).
            - Avoid naming an object property `constructor`, instead defer to `constructorRoutine`.
            - Avoid naming an object property `function`, instead defer to `routine`.
            - Avoid the `break` statement in repetition structures; This encourages a first-entry, first-exit design.
            - Due to the ECMAScript standard supporting multiple zero types, it is a rule to explicitly & strictly differentiate between each of those values (e.g.: `-0` and `+0`) except in special cases.
            - Memory management due to the JavaScript garbage collector should be kept to a minimum:
                -- Avoid local function declarations.
                -- Defer string literals instead of string concatenation.
                -- Defer to parameter labels instead of the `arguments` object.
                -- Limit evaluating function expressions.
                -- Limit the amount of exceptions thrown.
                -- Prevent coercing primitive values to objects.
                -- Use of some native functions.
            - Inline function expressions are only allowed in:
                -- Defining the `Main` function or
                -- Defining a phase: `Initiate`, `Update`, `Reset` or `Terminate` or
                -- If the alternative is less efficient/ preferable.

            This is to keep the language somewhat universally readable and similar to other programming languages.

    --- UPDATE REQUIRED ---
        #Lapys:
            - Target development environments (these may lack a core (and/ or modern) JavaScript feature or not work for unknown reasons...):
                -- Internet Explorer 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- Netscape Navigator 2 - 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- others...
*/
+(function Main() {
    /* Constants > ... */
    var AUTHOR = "Lapys";
    var DESCRIPTION = "LapysJS is a general-purpose, semantic and universal JavaScript library";
    var URL = "https://www.github.com/LapysDev/LapysJS";
    var VERSION = "0.0.9";

    /* Global > ... */
    var ANY = {}; // NOTE (Lapys) -> Represents non-unique data; Can also represent the result of a failed process.
    var GLOBAL; // NOTE (Lapys) -> The global namespace of the current environment.
    var SETTINGS = {}; // NOTE (Lapys) -> Namespace for script directives which determine how the library will be installed.
    var STRICT; // NOTE (Lapys) -> Represents an argument to a logical or non-essential function parameter; Also known as an Argument Flag.
    var TMP; // NOTE (Lapys) -> Global variable for temporary data.

    /* Polyfills > ... */
    var undefined = void +0; // NOTE (Lapys) -> Should not be allowed but it is.

    /* Namespace > ... */
    var LapysDevelopmentKit = new (function LapysDevelopmentKit() {
        // Constant > Lapys Development Kit
        var LapysDevelopmentKit = this;

        // Modification > Lapys Development Kit
            // Constants
            LapysDevelopmentKit.Constants = new (function Constants() {});
                // ...
                LapysDevelopmentKit.Constants.Assertions = {};
                LapysDevelopmentKit.Constants.Data = {};
                LapysDevelopmentKit.Constants.Keywords = {};
                LapysDevelopmentKit.Constants.Numbers = {};
                LapysDevelopmentKit.Constants.Objects = {};
                LapysDevelopmentKit.Constants.Strings = {};

            // Environment --- NOTE (Lapys) -> Data container about the current host environment/ runtime.
            LapysDevelopmentKit.Environment = new (function Environment() {});

            // Functions --- WARN (Lapys) -> Avoid using the functions within this namespace for high-frequency events.
            LapysDevelopmentKit.Functions = new (function Functions() {});

            // Information
            LapysDevelopmentKit.Information = new (function Information() {});
                // Messages
                LapysDevelopmentKit.Information.Messages = {Debugging: {}, Error: {}};

                // Settings --- NOTE (Lapys) -> Compile-time directives that influence the code.
                LapysDevelopmentKit.Information.Settings = {DebugMode: false, IgnoreMissingFeatures: false};

            // Mathematics
            LapysDevelopmentKit.Mathematics = new (function Mathematics() {});

            // Objects --- NOTE (Lapys) -> Native structures & values.
            LapysDevelopmentKit.Objects = new (function Objects() {});

            // Records
            LapysDevelopmentKit.Records = new (function Records() {});
                // ...
                LapysDevelopmentKit.Records.Lists = {};
                LapysDevelopmentKit.Records.Values = {};

            /* Types
                    --- NOTE (Lapys) -> Namespace for custom-defined data types.
                    --- WARN (Lapys) -> Type assertion & exception handling will not be utilized for speed in performance.
            */
            LapysDevelopmentKit.Types = new (function Types() {});

        // Return
        return LapysDevelopmentKit
    });

    /* Shorthands */
    var LDK = LapysDevelopmentKit;
    var LDKC = LapysDevelopmentKit.Constants;
    var LDKE = LapysDevelopmentKit.Environment;
    var LDKF = LapysDevelopmentKit.Functions;
    var LDKI = LapysDevelopmentKit.Information;
    var LDKM = LapysDevelopmentKit.Mathematics;
    var LDKO = LapysDevelopmentKit.Objects;
    var LDKR = LapysDevelopmentKit.Records;
    var LDKT = LapysDevelopmentKit.Types;

    /* [Pre-]Modification --- NOTE (Lapys) -> Required features that must be hoisted first. */
        /* Lapys Development Kit */
            /* Functions --- NOTE (Lapys) -> Fortunately, these objects manage their own properties; They are spoof-proof. --- REDACT (Lapys) */
            LapysDevelopmentKit.Functions.argumentsPrototypeArgumentAt = function argumentsPrototypeArgumentAt(argumentListObject, index) { return argumentListObject[index] };
            LapysDevelopmentKit.Functions.argumentsPrototypeCallee = function argumentsPrototypeCallee(argumentListObject) { return argumentListObject.callee };
            LapysDevelopmentKit.Functions.argumentsPrototypeLength = function argumentsPrototypeLength(argumentListObject) { return argumentListObject.length };
            LapysDevelopmentKit.Functions.argumentsPrototypeSetIndex = function argumentsPrototypeSetIndex(argumentListObject, index, argument) { return (argumentListObject[index] = argument) };

            LapysDevelopmentKit.Functions.arrayPrototypeElementAt = function arrayPrototypeElementAt(array, index) { return array[index] };
            LapysDevelopmentKit.Functions.arrayPrototypeLength = function arrayPrototypeLength(array) { return array.length };
            LapysDevelopmentKit.Functions.arrayPrototypeSetIndex = function arrayPrototypeSetIndex(array, index, element) { array[index] = element };
            LapysDevelopmentKit.Functions.arrayPrototypeResize = function arrayPrototypeResize(array, length) { array.length = length };

            LapysDevelopmentKit.Functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, propertyIdentifier, SILENCE_EXCEPTIONS) { try { return delete object[propertyIdentifier] } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };
            LapysDevelopmentKit.Functions.objectPrototypeGetProperty = function objectPrototypeGetProperty(object, propertyIdentifier, SILENCE_EXCEPTIONS) { try { return object[propertyIdentifier] } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };
            LapysDevelopmentKit.Functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyIdentifier, SILENCE_EXCEPTIONS) { try { return propertyIdentifier in object } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };
            LapysDevelopmentKit.Functions.objectPrototypeIsOfConstructor = function objectPrototypeGetProperty(object, constructor, SILENCE_EXCEPTIONS) { try { return object instanceof constructor } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY }
            LapysDevelopmentKit.Functions.objectPrototypeSetProperty = function objectPrototypeSetProperty(object, propertyIdentifier, propertyValue, SILENCE_EXCEPTIONS) { try { return object[propertyIdentifier] = propertyValue } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };

            LapysDevelopmentKit.Functions.functionPrototypePrototype = function functionPrototypePrototype(routine) { return routine.prototype };
            LapysDevelopmentKit.Functions.getArgumentsLength = function getArgumentsLength(argumentListObject) { return /*LDKF.argumentsPrototypeLength(argumentListObject) || */argumentListObject.length };
            LapysDevelopmentKit.Functions.isString = function isString(argument) { return typeof argument == "string" };
            LapysDevelopmentKit.Functions.stringPrototypeLength = function stringPrototypeLength(string) { return string.length };
            LapysDevelopmentKit.Functions.throwError = function throwError(error) { throw error };
            LapysDevelopmentKit.Functions.toString = function toString(argument) { return LDKF.isString(argument) ? argument : LDKO.string(argument) };

            /* Mathematics > [Integer] Power */
            LapysDevelopmentKit.Mathematics.powInt = function powInt(base, exponent) { if (exponent) { var multiplier = base; while (exponent -= 1) base *= multiplier; return base } else return 1 };

            /* Types > --- REDACT (Lapys)
                    : Array Imperative --- NOTE (Lapys) -> Container for array-like access & manipulation functions.
                    : Clock --- NOTE (Lapys) -> Structure type for asynchronous and multi-threaded processes.
                    : Enumeration --- NOTE (Lapys) -> List of enumerable options represented as integers, labeled as strings.
                    : Safe String --- NOTE (Lapys) -> String type that does not rely on the `String.prototype.charAt` method to be universally compatible. --- MINIFY (Lapys)
            */
            LapysDevelopmentKit.Types.ArrayImperative = function ArrayImperative(accessor, mutator, requester, allocator) { this.getIndex = accessor; this.getLength = requester; this.setIndex = mutator; this.setLength = allocator };
            LapysDevelopmentKit.Types.Clock = function Clock() { this.timed = false; this.timeElapsed = +0 };
            LapysDevelopmentKit.Types.Enumeration = function Enumeration(values) { var argumentsIterator = LDKF.getArgumentsLength(arguments); while (argumentsIterator) { argumentsIterator -= 1; this[LDKF.toString(arguments[argumentsIterator])] = argumentsIterator } return this };
            LapysDevelopmentKit.Types.SafeString = function SafeString(characters) { var argumentsIterator = LDKF.getArgumentsLength(arguments); this.length = argumentsIterator; while (argumentsIterator) { argumentsIterator -= 1; this[argumentsIterator] = arguments[argumentsIterator] } };

    /* Modification */
        /* Lapys Development Kit */
            /* Constants */
                // Data > ... --- MINIFY (Lapys) --- NOTE (Lapys) -> Functions and values are defined separately here. --- REDACT (Lapys)
                LapysDevelopmentKit.Constants.Data.ArrayImperative = new LDKT.ArrayImperative(LDKF.arrayPrototypeElementAt, LDKF.arrayPrototypeSetIndex, LDKF.arrayPrototypeLength, LDKF.arrayPrototypeResize);
                LapysDevelopmentKit.Constants.Data.ArraySortType = new LDKT.Enumeration("ASCII_SORT", "CUSTOM_SORT", "NATIVE_SORT");
                LapysDevelopmentKit.Constants.Data.Clock = new LDKT.Clock;

                LapysDevelopmentKit.Constants.Data.ArrayASCIISortComparator = function ArrayASCIISortComparator(argumentA, argumentB) {
                    // Constant > ((String (A, B)) (Length), Iterator)
                    var STRING_A = LDKF.toString(argumentA), STRING_B = LDKF.toString(argumentB);
                    var STRING_A_LENGTH = LDKF.stringPrototypeLength(STRING_A), STRING_B_LENGTH = LDKF.stringPrototypeLength(STRING_B);
                    var LENGTH = LDKM.min(STRING_A_LENGTH, STRING_B_LENGTH);
                    var iterator = +0;

                    // Loop
                    while (iterator ^ LENGTH) {
                        // Constant > Character (A, B)
                        var CHARACTER_A = LDKF.stringPrototypeCharacterAt(STRING_A, iterator), CHARACTER_B = LDKF.stringPrototypeCharacterAt(STRING_B, iterator);

                        // Logic > Return
                        if (CHARACTER_A > CHARACTER_B) return STRING_A;
                        else if (CHARACTER_A < CHARACTER_B) return STRING_B;

                        // Update > Iterator
                        iterator += 1
                    }

                    // Return
                    return STRING_A_LENGTH < STRING_B_LENGTH ? STRING_B : STRING_A
                };
                LapysDevelopmentKit.Constants.Data.ArrayCustomSortComparator = function ArrayCustomSortComparator(argumentA, argumentB) {
                    // Logic
                    if ((LDKF.isBoolean(argumentA) || LDKF.isNumber(argumentA)) && (LDKF.isBoolean(argumentB) || LDKF.isNumber(argumentB)))
                        // Return
                        return LDKM.min(argumentA, argumentB);

                    else {
                        // Constant > Argument (A, B) Is String
                        var ARGUMENT_A_IS_STRING = LDKF.isString(argumentA), ARGUMENT_B_IS_STRING = LDKF.isString(argumentB);

                        // Logic
                        if (ARGUMENT_A_IS_STRING && ARGUMENT_B_IS_STRING) {
                            // Constant > ((Argument (A, B)) (Length), Iterator)
                            var ARGUMENT_A_LENGTH = LDKF.stringPrototypeLength(argumentA), ARGUMENT_B_LENGTH = LDKF.stringPrototypeLength(argumentB);
                            var LENGTH = LDKM.min(ARGUMENT_A_LENGTH, ARGUMENT_B_LENGTH);
                            var iterator = +0;

                            // Loop
                            while (iterator ^ LENGTH) {
                                // Constant > Character (A, B) (Index)
                                var CHARACTER_A = LDKF.stringPrototypeCharacterAt(ARGUMENT_A, iterator), CHARACTER_B = LDKF.stringPrototypeCharacterAt(ARGUMENT_B, iterator);
                                var CHARACTER_A_INDEX = LDKF.arrayPrototypeIndex(LDKC.Strings.SortableCharacters, CHARACTER_A), CHARACTER_B_INDEX = LDKF.arrayPrototypeIndex(LDKC.Strings.SortableCharacters, CHARACTER_B);

                                // Logic > Return
                                if (CHARACTER_A_INDEX > CHARACTER_B_INDEX) return argumentA;
                                else if (CHARACTER_A_INDEX < CHARACTER_B_INDEX) return argumentB;

                                // Update > Iterator
                                iterator += 1
                            }

                            // Logic > Return
                            return ARGUMENT_A_LENGTH < ARGUMENT_B_LENGTH ? ARGUMENT_B : ARGUMENT_A
                        }
                        else if (ARGUMENT_A_IS_STRING)
                            // Return
                            return argumentA;

                        else if (ARGUMENT_B_IS_STRING)
                            // Return
                            return argumentB;

                        else {
                            // Constant > Argument (A, B) Is Null
                            var ARGUMENT_A_IS_NULL = LDKF.isNull(argumentA), ARGUMENT_B_IS_NULL = LDKF.isNull(argumentB);

                            // Logic > Return
                            if (!(ARGUMENT_A_IS_NULL || LDKF.isVoid(argumentA))) return argumentA;
                            else if (!(ARGUMENT_B_IS_NULL || LDKF.isVoid(argumentB))) return argumentB;
                            else if (ARGUMENT_A_IS_NULL) return argumentA;
                            else if (ARGUMENT_B_IS_NULL) return argumentB;
                            else return argumentA
                        }
                    }
                };
                LapysDevelopmentKit.Constants.Data.ArrayInsertionSort = function ArrayInsertionSort(array, startIndex, endIndex, COMPARATOR, IMPERATIVE) {
                    // Update > (Comparator, Imperative)
                    COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                    IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                    // Initialization > Array Iterator
                    var arrayIterator = startIndex + 1;

                    // Loop
                    while (arrayIterator ^ endIndex) {
                        // Initialization > Array Index
                        var arrayIndex = arrayIterator - 1;

                        // Update > Temporary
                        TMP = IMPERATIVE.getIndex(array, arrayIterator);

                        // Loop
                        while (COMPARATOR(IMPERATIVE.getIndex(array, arrayIndex), TMP) === TMP && arrayIndex >= startIndex) {
                            // Update > Array (Index)
                            IMPERATIVE.setIndex(array, arrayIndex + 1, IMPERATIVE.getIndex(array, arrayIndex));
                            arrayIndex -= 1
                        }

                        // Update > Array (Iterator)
                        IMPERATIVE.setIndex(array, arrayIndex + 1, TMP);
                        arrayIterator += 1
                    }
                };
                LapysDevelopmentKit.Constants.Data.ArrayTimSort = function ArrayTimSort(array, COMPARATOR, IMPERATIVE) {
                    // Update > (Comparator, Imperative)
                    COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                    IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                    // Constant > Array Length; Initialization > Array Iterator
                    var ARRAY_LENGTH = IMPERATIVE.getLength(array);
                    var arrayIterator = +0;

                    // Loop > Update > Array (Iterator) --- NOTE (Lapys) -> Sort individual ranges of the array.
                    while (arrayIterator < ARRAY_LENGTH) { LDKC.Data.ArrayInsertionSort(array, arrayIterator, LDKM.min(arrayIterator + (LDKC.Numbers.ArrayTimSortRun - 1), ARRAY_LENGTH - 1), STRICT = COMPARATOR, STRICT = IMPERATIVE); arrayIterator += LDKC.Numbers.ArrayTimSortRun }

                    var arraySize = LDKC.Numbers.ArrayTimSortRun;
                    while (arraySize < ARRAY_LENGTH) {
                        var arrayStartIndex = +0;

                        while (arrayStartIndex < ARRAY_LENGTH) {
                            var arraySplitIndex = arrayStartIndex + arraySize - 1;
                            var arrayEndIndex = LDKM.min((arrayStartIndex + (arraySize * 2)) - 1, ARRAY_LENGTH - 1);
                            LDKC.Data.ArrayTimSortMerge(array, arrayStartIndex, arraySplitIndex, arrayEndIndex, STRICT = COMPARATOR, STRICT = IMPERATIVE);
                            arrayStartIndex += arraySize * 2
                        }

                        arraySize *= 2
                    }
                };
                    // UPDATE REQUIRED (Lapys) -> Currently inaccurate.
                    LapysDevelopmentKit.Constants.Data.ArrayTimSortMerge = function ArrayTimSortMerge(array, startIndex, splitIndex, endIndex, COMPARATOR, IMPERATIVE) {
                        // Update > (Comparator, Imperative)
                        COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                        // : Initialization > (End, Start) (Array) Iterator
                        // : Constant > (End, Start) Array (Length)
                        var arrayIterator, endArrayIterator = +0, startArrayIterator = startIndex;
                        var END_ARRAY = [], END_ARRAY_LENGTH = endIndex - splitIndex;
                        var START_ARRAY = [], START_ARRAY_LENGTH = splitIndex - startIndex + 1;

                        // (Loop > )Update > (End, Start) Array (Iterator)
                        arrayIterator = +0; while (arrayIterator ^ START_ARRAY_LENGTH) { IMPERATIVE.setIndex(START_ARRAY, arrayIterator, IMPERATIVE.getIndex(array, arrayIterator + startIndex)); arrayIterator += 1 }
                        arrayIterator = +0; while (arrayIterator ^ END_ARRAY_LENGTH) { IMPERATIVE.setIndex(END_ARRAY, arrayIterator, IMPERATIVE.getIndex(array, arrayIterator + 1 + splitIndex)); arrayIterator += 1 }

                        // Update > Array Iterator; Loop
                        arrayIterator = +0;
                        while ((arrayIterator ^ START_ARRAY_LENGTH) && (endArrayIterator ^ END_ARRAY_LENGTH))  {
                            // Logic > Update > (Array, (End | Start) Array Iterator)
                            if (COMPARATOR(IMPERATIVE.getIndex(START_ARRAY, arrayIterator), IMPERATIVE.getIndex(END_ARRAY, endArrayIterator)) === IMPERATIVE.getIndex(START_ARRAY, arrayIterator)) { IMPERATIVE.setIndex(array, startArrayIterator, IMPERATIVE.getIndex(START_ARRAY, arrayIterator)); arrayIterator += 1 }
                            else { IMPERATIVE.setIndex(array, startArrayIterator, IMPERATIVE.getIndex(END_ARRAY, endArrayIterator)); endArrayIterator += 1 }

                            // Update > Start Array Iterator
                            startArrayIterator += 1
                        }

                        // Loop > Update > (Array, (End, Start) (Array Iterator))
                        while (arrayIterator ^ START_ARRAY_LENGTH) { IMPERATIVE.setIndex(array, startArrayIterator, IMPERATIVE.getIndex(START_ARRAY, arrayIterator)); arrayIterator += 1; startArrayIterator += 1 }
                        while (endArrayIterator ^ END_ARRAY_LENGTH) { IMPERATIVE.setIndex(array, startArrayIterator, IMPERATIVE.getIndex(END_ARRAY, endArrayIterator)); endArrayIterator += 1; startArrayIterator += 1 }
                    };

                // Numbers > ...
                LapysDevelopmentKit.Constants.Numbers.ArrayTimSortRun = 32;
                LapysDevelopmentKit.Constants.Numbers.FrameRate = 1000 / 60; // NOTE (Lapys) -> Lock-time controlled asynchronous processes to 60 frames a second.
                LapysDevelopmentKit.Constants.Numbers["Infinity"] = 1 / +0;
                LapysDevelopmentKit.Constants.Numbers.IntegerSize = 32; // NOTE (Lapys) -> 32-bits for JavaScript engines, but most implementations use 53 bits.
                LapysDevelopmentKit.Constants.Numbers.MaximumArrayLength = LDKM.powInt(2, 32) - 1; // NOTE (Lapys) -> Maximum length of array.
                LapysDevelopmentKit.Constants.Numbers.MaximumIntegerValue = LDKM.powInt(2, 53) - 1;
                LapysDevelopmentKit.Constants.Numbers["NaN"] = +0 / +0;
                LapysDevelopmentKit.Constants.Numbers.PointerSize = 4; // NOTE (Lapys) -> Assumed size of pointers/ referrers in JavaScript (e.g.: object properties).

                // Keywords --- NOTE (Lapys) -> Utilize
                LapysDevelopmentKit.Constants.Keywords["extends"] = new LDKT.SafeString('e', 'x', 't', 'e', 'n', 'd', 's');

                // Strings > ...
                LapysDevelopmentKit.Constants.Strings.Alphabets = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];
                LapysDevelopmentKit.Constants.Strings.ASCIICharacters = ['\0', '\2', '\3', '\4', '\5', '\6', '\7', '\x08', '\t', '\n', '', '', '', '', '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '', '', '', '', '', '', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', '', '€', '\x81', '‚', '\u0192', '„', '\u2026', '\u2020', '\u2021', 'ˆ', '\u2030', '\u0160', '\u2039', '\u0152', '', 'Ž', '', '\x90', '\u2018', '\u2019', '“', '”', '\u2022', '\u2013', '\u2014', '˜', '\u2122', '\u0161', '›', '\u0153', '', 'ž', '\u0178', ' ', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '­', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ'];
                LapysDevelopmentKit.Constants.Strings.BinaryDigits = ['0', '1'];
                LapysDevelopmentKit.Constants.Strings.CSSCharacterSequences = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "\\!", "\\\"", "\\#", "\\$", "\\%", "\\&", "\\'", "\\(", "\\)", "\\*", "\\+", "\\,", "\\.", "\\/", "\\0", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\\8", "\\9", "\\:", "\\:", "\\;", "\\<", "\\=", "\\>", "\\?", "\\@", "\\A", "\\B", "\\C", "\\D", "\\E", "\\F", "\\G", "\\H", "\\I", "\\J", "\\K", "\\L", "\\M", "\\N", "\\O", "\\P", "\\Q", "\\R", "\\S", "\\T", "\\U", "\\V", "\\W", "\\X", "\\Y", "\\Z", "\\[", "\\\\", "\\]", "\\^", "\\_", "\\`", "\\a", "\\b", "\\c", "\\d", "\\e", "\\f", "\\g", "\\h", "\\i", "\\j", "\\k", "\\l", "\\m", "\\n", "\\o", "\\p", "\\q", "\\r", "\\s", "\\t", "\\u", "\\v", "\\w", "\\x", "\\y", "\\z", "\\{", "\\|", "\\}", "\\~", '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                LapysDevelopmentKit.Constants.Strings.DecimalDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                LapysDevelopmentKit.Constants.Strings.HexadecimalDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];
                LapysDevelopmentKit.Constants.Strings.HTMLElementTagNames = ['a', "address", 'b', "blockquote", "body", "br", "cite", "code", "dd", "dl", "dt", "em", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "html", 'i', "img", "input", "kbd", "li", "link", "meta", "ol", "option", 'p', "pre", "select", "strong", "textarea", "title", "ul", "var"];
                LapysDevelopmentKit.Constants.Strings.LanguageCodes = ["aa", "aar", "ab", "abk", "ace", "ach", "ada", "ady", "ae", "af", "afa", "afh", "afr", "ain", "ak", "aka", "akk", "alb", "ale", "alt", "am", "amh", "an", "ang", "anp", "apa", "ar", "ara", "arc", "arg", "arm", "arn", "arp", "art", "arw", "as", "asm", "ast", "ath", "aus", "av", "ava", "ave", "awa", "ay", "aym", "az", "aze", "ba", "bad", "bai", "bak", "bal", "bam", "ban", "baq", "bas", "bat", "be", "bej", "bel", "bem", "ben", "ber", "bg", "bh", "bho", "bi", "bih", "bik", "bis", "bla", "bm", "bn", "bnt", "bo", "bod", "bos", "br", "bra", "bre", "bs", "btk", "bua", "bug", "bul", "bur", "byn", "ca", "cad", "cai", "car", "cat", "cau", "ce", "ceb", "cel", "ces", "ch", "cha", "chb", "che", "chg", "chi", "chk", "chm", "chn", "cho", "chp", "chr", "chu", "chv", "chy", "cmc", "cnr", "co", "cop", "cor", "cos", "cpe", "cpf", "cpp", "cr", "cre", "crh", "crp", "cs", "csb", "cu", "cus", "cv", "cy", "cym", "cze", "da", "dak", "dan", "dar", "day", "de", "del", "den", "deu", "dgr", "din", "div", "doi", "dra", "dsb", "dua", "dum", "dut", "dv", "dyu", "dz", "dzo", "ee", "efi", "egy", "eka", "el", "ell", "elx", "en", "eng", "enm", "eo", "epo", "es", "est", "et", "eu", "eus", "ewe", "ewo", "fa", "fan", "fao", "fas", "fat", "ff", "fi", "fij", "fil", "fin", "fiu", "fj", "fo", "fon", "fr", "fra", "fre", "frm", "fro", "frr", "frs", "fry", "ful", "fur", "fy", "ga", "gaa", "gay", "gba", "gd", "gem", "geo", "ger", "gez", "gil", "gl", "gla", "gle", "glg", "glv", "gmh", "gn", "goh", "gon", "gor", "got", "grb", "grc", "gre", "grn", "gsw", "gu", "guj", "gv", "gwi", "ha", "hai", "hat", "hau", "haw", "he", "heb", "her", "hi", "hil", "him", "hin", "hit", "hmn", "hmo", "ho", "hr", "hrv", "hsb", "ht", "hu", "hun", "hup", "hy", "hye", "hz", "ia", "iba", "ibo", "ice", "id", "ido", "ie", "ig", "ii", "iii", "ijo", "ik", "iku", "ile", "ilo", "ina", "inc", "ind", "ine", "inh", "io", "ipk", "ira", "iro", "is", "isl", "it", "ita", "iu", "ja", "jav", "jbo", "jpn", "jpr", "jrb", "jv", "ka", "kaa", "kab", "kac", "kal", "kam", "kan", "kar", "kas", "kat", "kau", "kaw", "kaz", "kbd", "kg", "kha", "khi", "khm", "kho", "ki", "kik", "kin", "kir", "kj", "kk", "kl", "km", "kmb", "kn", "ko", "kok", "kom", "kon", "kor", "kos", "kpe", "kr", "krc", "krl", "kro", "kru", "ks", "ku", "kua", "kum", "kur", "kut", "kv", "kw", "ky", "la", "lad", "lah", "lam", "lao", "lat", "lav", "lb", "lezlim", "lg", "li", "lin", "lit", "ln", "lo", "lol", "loz", "lt", "ltz", "lu", "lua", "lub", "lug", "lui", "lun", "luo", "lus", "lv", "mac", "mad", "mag", "mah", "mai", "mak", "mal", "man", "mao", "map", "mar", "mas", "may", "mdf", "mdr", "men", "mg", "mga", "mh", "mi", "mic", "min", "mis", "mk", "mkd", "mkh", "ml", "mlg", "mlt", "mn", "mnc", "mnl", "mno", "moh", "mon", "mos", "mr", "mri", "ms", "msa", "mt", "mul", "mun", "mus", "mwl", "mwr", "my", "mya", "myn", "myv", "na", "nah", "nai", "nap", "nau", "nav", "nb", "nbl", "nd", "nde", "ndo", "nds", "ne", "nep", "new", "ng", "nia", "nic", "niu", "nl", "nld", "nn", "nno", "no", "nob", "nog", "non", "nor", "nqo", "nr", "nso", "nub", "nv", "nwc", "ny", "nya", "nym", "nyn", "nyo", "nzi", "oc", "oci", "oj", "oji", "om", "or", "ori", "orm", "os", "osa", "oss", "ota", "oto", "pa", "paa", "pag", "pal", "pam", "pan", "pap", "pau", "pcm", "peo", "per", "phi", "phn", "pi", "pl", "pli", "pol", "pon", "por", "pra", "pro", "ps", "pt", "pus", "qaa", "qtz", "qu", "que", "raj", "rap", "rar", "rm", "rn", "ro", "roa", "roh", "rom", "ron", "ru", "rum", "run", "rup", "rus", "rw", "sa", "sad", "sag", "sah", "sai", "sal", "sam", "san", "sas", "sat", "sc", "scn", "sco", "sd", "sel", "sem", "sg", "sga", "sgn", "shn", "si", "sid", "sin", "sio", "sit", "sk", "sl", "sla", "slk", "slo", "slv", "sm", "sma", "sme", "smi", "smj", "smn", "smo", "sms", "sn", "sna", "snd", "snk", "so", "sog", "som", "son", "sot", "spa", "sq", "sqi", "sr", "srd", "srp", "srr", "ss", "ssa", "ssw", "st", "su", "suk", "sun", "sus", "sux", "sv", "sw", "swa", "swe", "sws", "syc", "syr", "ta", "tah", "tai", "tam", "tat", "te", "tel", "tem", "ter", "tet", "tg", "tgk", "tgl", "th", "tha", "ti", "tib", "tig", "tir", "tiv", "tk", "tkl", "tl", "tlh", "tli", "tmh", "tn", "to", "tog", "ton", "tpi", "tr", "ts", "tsi", "tsn", "tso", "tt", "tuk", "tum", "tup", "tur", "tut", "tvl", "tw", "twi", "ty", "tyv", "udm", "ug", "uga", "uig", "uk", "ukr", "umb", "und", "ur", "urd", "uz", "uzb", "vai", "venve", "vi", "vie", "vo", "vol", "vot", "wa", "wak", "wal", "war", "was", "wel", "wen", "wln", "wo", "wol", "xal", "xh", "xho", "yao", "yap", "yi", "yid", "yo", "yor", "ypk", "za", "zap", "zbl", "zen", "zgh", "zh", "zha", "zho", "znd", "zu", "zul", "zun", "zxx", "zza"];
                LapysDevelopmentKit.Constants.Strings.LowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                LapysDevelopmentKit.Constants.Strings.NativeFunctionCodes = [new LDKT.SafeString('[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'), new LDKT.SafeString('[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')];
                LapysDevelopmentKit.Constants.Strings.OctalDigits = ['0', '1', '2', '3', '4', '5', '6', '7'];
                LapysDevelopmentKit.Constants.Strings.TrimmableCharacters = ['\0', '\n', ' '];
                LapysDevelopmentKit.Constants.Strings.UppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                LapysDevelopmentKit.Constants.Strings.SortableCharacters = ['_', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '[', ']', '{', '}', '<', '>', '«', '»', '\\', '/', '+', '-', '×', '÷', '=', '@', '\'', '"', '*', '#', '$', '%', '&', '|'];
                LapysDevelopmentKit.Constants.Strings.VariableCharacters = ['$', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            /* Functions
                    --- NOTE ---
                        #Lapys: Some of the methods defined here have the suffix `Like` or `Variant` attached to their names to signify the method performs type assertion for a general assortment of object types.
                            The wordings used are different:
                                - `Like` to denote it performs type assertion.
                                - `Variant` to denote it performs the exact same operations on a numerable set of types.
            */
                // Array-Like Prototype --- WARN (Lapys) -> The methods defined here throw no exceptions when they fail.
                    // Element At
                    LapysDevelopmentKit.Functions.arrayLikePrototypeElementAt = function arrayLikePrototypeElementAt(arrayLike, index) {
                        // Logic > Return
                        if (arrayLike instanceof LDKT.SafeArray) return LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeElementAt, arrayLike, index);
                        else if (LDKF.isArray(arrayLike) || LDKF.isSourceBufferList(arrayLike) || LDKF.isTextTrackCueList(arrayLike) || LDKF.isTextTrackList(arrayLike) || LDKF.isTypedArray(arrayLike)) return arrayLike[index]
                        else if (LDKF.isMapVariant(arrayLike)) return LDKF.mapVariantPrototypeElementAt(arrayLike, index);
                        else if (LDKF.isCSSNumericArray(arrayLike)) return LDKF.cssNumericArrayPrototypeElementAt(arrayLike, index);
                        else if (LDKF.isCSSRuleList(arrayLike)) return LDKF.cssRuleListPrototypeItem(arrayLike, index);
                        else if (LDKF.isCSSStyleDeclaration(arrayLike)) return LDKF.cssStyleDeclarationPrototypeItem(arrayLike, index);
                        else if (LDKF.isDOMRectList(arrayLike)) return LDKF.domRectListPrototypeItem(arrayLike, index);
                        else if (LDKF.isDOMStringList(arrayLike)) return LDKF.domStringListPrototypeItem(arrayLike, index);
                        else if (LDKF.isDOMTokenList(arrayLike)) return LDKF.domTokenListPrototypeItem(arrayLike, index);
                        else if (LDKF.isFileList(arrayLike)) return LDKF.fileListPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLAllCollection(arrayLike)) return LDKF.htmlAllCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLCollection(arrayLike)) return LDKF.htmlCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLFormControlsCollection(arrayLike)) return LDKF.htmlFormControlsCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isHTMLOptionsCollection(arrayLike)) return LDKF.htmlOptionsCollectionPrototypeItem(arrayLike, index);
                        else if (LDKF.isMediaList(arrayLike)) return LDKF.mediaListPrototypeItem(arrayLike, index);
                        else if (LDKF.isMIMETypeArray(arrayLike)) return LDKF.mimeTypeArrayPrototypeItem(arrayLike, index);
                        else if (LDKF.isNamedNodeMap(arrayLike)) return LDKF.namedNodeMapPrototypeItem(arrayLike, index);
                        else if (LDKF.isNodeList(arrayLike)) return LDKF.nodeListPrototypeItem(arrayLike, index);
                        else if (LDKF.isPluginArray(arrayLike)) return LDKF.pluginArrayPrototypeItem(arrayLike, index);
                        else if (LDKF.isRadioNodeList(arrayLike)) return LDKF.radioNodeListPrototypeItem(arrayLike, index);
                        else if (LDKF.isSet(arrayLike)) return LDKF.setPrototypeElementAt(arrayLike, index);
                        else if (LDKF.isStylePropertyMap(arrayLike)) return LDKF.stylePropertyMapPrototypeElementAt(arrayLike, index);
                        else if (LDKF.isStyleSheetList(arrayLike)) return LDKF.styleSheetListPrototypeItem(arrayLike, index);
                        else if (LDKF.isSVGLengthList(arrayLike)) return LDKF.svgLengthListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGNumberList(arrayLike)) return LDKF.svgNumberListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGPointList(arrayLike)) return LDKF.svgPointListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGStringList(arrayLike)) return LDKF.svgStringListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isSVGTransformList(arrayLike)) return LDKF.svgTransformListPrototypeGetItem(arrayLike, index);
                        else if (LDKF.isTouchList(arrayLike)) return LDKF.touchListPrototypeItem(arrayLike, index);
                        else if (LDKF.is_webkit_SpeechGrammerList(arrayLike)) return LDKF._webkit_SpeechGrammarListPrototype(arrayLike, index)
                    };

                    // Set Index
                    LapysDevelopmentKit.Functions.arrayLikePrototypeSetIndex = function arrayLikePrototypeSetIndex(arrayLike, index, value) {
                        // Logic > Return
                        if (arrayLike instanceof LDKT.SafeArray) return LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeSetIndex, arrayLike, index);
                        else if (LDKF.isArray(arrayLike) || LDKF.isSourceBufferList(arrayLike) || LDKF.isTextTrackCueList(arrayLike) || LDKF.isTextTrackList(arrayLike) || LDKF.isTypedArray(arrayLike)) return (arrayLike[index] = value);
                        else if (LDKF.isCSSStyleDeclaration(arrayLike)) return LDKF.cssStyleDeclarationPrototypeSetIndex(arrayLike, index, value);
                        else if (LDKF.isMap(arrayLike)) return LDKF.mapPrototypeSetIndex(arrayLike, index, value);
                        else if (LDKF.isSet(arrayLike)) return LDKF.setPrototypeSetIndex(arrayLike, index, value);
                        else if (LDKF.isStylePropertyMap(arrayLike)) return LDKF.stylePropertyMapPrototypeSetIndex(arrayLike, index);
                        else if (LDKF.isSVGLengthList(arrayLike)) return LDKF.svgLengthListPrototypeRemoveItem(arrayLike, index);
                        else if (LDKF.isSVGNumberList(arrayLike)) return LDKF.svgNumberListPrototypeRemoveItem(arrayLike, index);
                        else if (LDKF.isSVGPointList(arrayLike)) return LDKF.svgPointListPrototypeRemoveItem(arrayLike, index);
                        else if (LDKF.isSVGStringList(arrayLike)) return LDKF.svgStringListPrototypeRemoveItem(arrayLike, index);
                        else if (LDKF.isSVGTransformList(arrayLike)) return LDKF.svgTransformListPrototypeRemoveItem(arrayLike, index)
                    };

                // Array > Prototype --- NOTE (Lapys) -> Imperatives assert how the specified array will be accessed/ modified.
                    // Index
                    LapysDevelopmentKit.Functions.arrayPrototypeIndex = function arrayPrototypeIndex(array, element, ARRAY_LENGTH, IMPERATIVE) { return LDKF.functionPrototypeApply(LDKF.arrayPrototypeIndexFrom, LDKF, arguments) };

                    // Index From
                    LapysDevelopmentKit.Functions.arrayPrototypeIndexFrom = function arrayPrototypeIndexFrom(array, element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Array Length, Imperative)
                        ARRAY_LENGTH || (ARRAY_LENGTH = LDKF.arrayPrototypeLength(array));
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                        // Logic
                        if (ARRAY_LENGTH) {
                            // Constant > Gradient Stop (Indexes, Length)
                            var GRADIENT_STOP_INDEXES = [], GRADIENT_STOP_LENGTH = LDKM.int(ARRAY_LENGTH / 4);

                            // Initialization > Array (Index, Iterator)
                            var arrayIndex = -1, arrayIterator = ARRAY_LENGTH - ((GRADIENT_STOP_LENGTH * 3) - 1);

                            // Loop
                            while (!~arrayIndex && arrayIterator) {
                                // Update > (Array Iterator, Gradient Stop Indexes)
                                arrayIterator -= 1;
                                GRADIENT_STOP_INDEXES[+0] = ARRAY_LENGTH - arrayIterator;
                                GRADIENT_STOP_INDEXES[1] = ARRAY_LENGTH - GRADIENT_STOP_LENGTH - arrayIterator;
                                GRADIENT_STOP_INDEXES[2] = arrayIterator + GRADIENT_STOP_LENGTH;
                                GRADIENT_STOP_INDEXES[3] = arrayIterator;

                                // Logic > Update > Array Index
                                if (IMPERATIVE.getIndex(array, GRADIENT_STOP_INDEXES[+0]) === element) arrayIndex = GRADIENT_STOP_INDEXES[+0];
                                else if (IMPERATIVE.getIndex(array, GRADIENT_STOP_INDEXES[1]) === element) arrayIndex = GRADIENT_STOP_INDEXES[1];
                                else if (IMPERATIVE.getIndex(array, GRADIENT_STOP_INDEXES[2]) === element) arrayIndex = GRADIENT_STOP_INDEXES[2];
                                else if (IMPERATIVE.getIndex(array, GRADIENT_STOP_INDEXES[3]) === element) arrayIndex = GRADIENT_STOP_INDEXES[3]
                            }

                            // Return
                            return arrayIndex
                        }

                        // Return
                        return -1
                    };

                    /* Sort
                            --- NOTE (Lapys) -> Utilizes the TimSort [https://en.wikipedia.org/wiki/Timsort] algorithm.
                            --- WARN (Lapys) -> The `SORT_TYPE` flag only denotes the comparator to be used when sorting (the `COMPARATOR` argument).
                                In the case of `NATIVE_SORT`-ing, the array specified will not have any `ArrayImperative` data on it.
                    */
                    LapysDevelopmentKit.Functions.arrayPrototypeSort = function arrayPrototypeSort(array, SORT_TYPE, COMPARATOR, IMPERATIVE) {
                        // Logic
                        switch (SORT_TYPE) {
                            /*
                                : [ASCII Sort] --- NOTE (Lapys) -> Changes the comparator to prefer ASCII code precedence.
                                : [Native Sort] --- NOTE (Lapys) -> Uses the native sorting algorithm proffered.
                            */
                            case LDKC.Data.ArraySortType["ASCII_SORT"]: return LDKF.arrayPrototypeSort(array, STRICT = LDKC.Data.ArraySortType["CUSTOM_SORT"], STRICT = LDKC.Data.ArrayASCIISortComparator, STRICT = IMPERATIVE);
                            case LDKC.Data.ArraySortType["NATIVE_SORT"]: return LDKF.functionPrototypeCall(LDKO.arrayPrototypeSort, array); break;

                            // [Custom Sort] --- NOTE (Lapys) -> Defaults to the library`s chosen comparator & sorting algorithm.
                            default: case LDKC.Data.ArraySortType["CUSTOM_SORT"]:
                                // Update > (Array, Comparator, Imperative)
                                COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                                IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                                LDKC.Data.ArrayTimSort(array, STRICT = COMPARATOR, STRICT = IMPERATIVE);

                                // Return
                                return array
                        }
                    };

                // CSS Numeric Array > Prototype
                    // Element At
                    LapysDevelopmentKit.Functions.cssNumericArrayPrototypeElementAt = function cssNumericArrayPrototypeElementAt(cssNumericArray, index) {
                        // Logic
                        if (index < LDKF.cssNumericArrayPrototypeLength(cssNumericArray)) {
                            // Initialization > Element; Constant > Array Iterator
                            var element = undefined; var ARRAY_ITERATOR = LDKF.cssNumericArrayPrototypeEntries(cssNumericArray);

                            // Loop > Update > (Element, Index)
                            while (index) { element = ARRAY_ITERATOR.next().value; index -= 1 }

                            // Return
                            return element[1]
                        }

                        else
                            // Return
                            return undefined
                    };

                // CSS Style Declaration > Prototype
                    // Set Index
                    LapysDevelopmentKit.Functions.cssStyleDeclarationPrototypeSetIndex = function cssStyleDeclarationPrototypeSetIndex(cssStyleDeclaration, index, value) { (index < LDKF.cssStyleDeclarationPrototypeLength(cssStyleDeclaration)) && LDKF.cssStyleDeclarationPrototypeSetProperty(LDKF.cssStyleDeclarationPrototypeItem(cssStyleDeclaration, index), value) };

                // Evaluate
                LapysDevelopmentKit.Functions["eval"] = function evaluate(source, STRICT_EVALUATION) { STRICT_EVALUATION || (source = "(function() { return " + source + " })()"); return LDKF.functionPrototypeCall(LDKO.eval, GLOBAL, source) };

                // Function > Prototype
                    // Apply --- WARN (Lapys) -> Still references the `Function.prototype.apply.call` method which is not spoof-proof.
                    LapysDevelopmentKit.Functions.functionPrototypeApply = function functionPrototypeApply(routine, that, argumentListObject) { return LDKO.functionPrototypeApply.call(routine, that, argumentListObject) };

                    // Asynchronous Apply
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousApply = function functionPrototypeAsynchronousApply(routine, that, argumentListObject) { var animationFrameId = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(animationFrameId); LDKF.functionPrototypeApply(routine, that, argumentListObject) }) };

                    // Asynchronous Call
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousCall = function functionPrototypeAsynchronousCall(routine, that, argumentA) { var argumentList = arguments, animationFrameId = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(animationFrameId); LDKF.functionPrototypeApply(LDKF.functionPrototypeCall, LDKF, argumentList) }) };

                    // Call
                    LapysDevelopmentKit.Functions.functionPrototypeCall = function functionPrototypeCall(routine, that, argumentA) { var argumentsIterator = LDKM.max(+0, LDKF.getArgumentsLength(arguments) - 2), argumentList = [argumentA]; while (argumentsIterator -= 1) { argumentList[argumentsIterator] = arguments[argumentsIterator + 2] } return LDKF.functionPrototypeApply(routine, that, argumentList) };

                // Is Big Integer
                LapysDevelopmentKit.Functions.isBigInt = function isBigInt(argument) { return typeof argument == "bigint" };

                // Is Boolean
                LapysDevelopmentKit.Functions.isBoolean = function isBoolean(argument) { return typeof argument == "boolean" };

                // Is Constructible
                LapysDevelopmentKit.Functions.isConstructible = function isConstructible(argument) { return !LDKF.isNull(argument) && !LDKF.isVoid(argument) };

                // Is Map-Variant
                LapysDevelopmentKit.Functions.isMapVariant = function isMapVariant(argument) { return LDKF.isAudioParamMap(arrayLike) || LDKF.isMap(arrayLike) || LDKF.isMediaKeyStatusMap(arrayLike) || LDKF.isMIDIInputMap(arrayLike) || LDKF.isMIDIOutputMap(arrayLike) };

                // Is Null
                LapysDevelopmentKit.Functions.isNull = function isNull(argument) { return argument === null };

                // Is Number
                LapysDevelopmentKit.Functions.isNumber = function isNumber(argument) { return typeof argument == "number" };

                // Is Symbol
                LapysDevelopmentKit.Functions.isSymbol = function isSymbol(argument) { return typeof argument == "symbol" };

                // Is Void --- WARN (Lapys) -> `HTMLAllCollection` objects are asserted as `true`.
                LapysDevelopmentKit.Functions.isVoid = function isVoid(argument) { return typeof argument == "undefined" };

                // Map > Prototype
                LapysDevelopmentKit.Functions.mapPrototypeSetIndex = function mapPrototypeSetIndex(map, index, value) {
                    // Logic
                    if (index < LDKF.mapPrototypeSize(map)) {
                        // Initialization > Element; Constant > Map Iterator
                        var element = undefined; var MAP_ITERATOR = LDKF.mapPrototypeEntries(map);

                        // Loop > Update > (Element, Index)
                        while (index) { element = MAP_ITERATOR.next().value; index -= 1 }

                        // Return
                        return LDKF.mapPrototypeSet(map, element[+0], value)
                    }

                    else
                        // Return
                        return undefined
                };

                // Map-Variant > Prototype > Element At
                LapysDevelopmentKit.Functions.mapVariantPrototypeElementAt = function mapVariantPrototypeElementAt(mapVariant, index) {
                    // Logic
                    if (index < LDKF.mapPrototypeSize(mapVariant)) {
                        // Initialization > Element; Constant > Map Iterator
                        var element = undefined; var MAP_ITERATOR = LDKF.mapPrototypeEntries(mapVariant);

                        // Loop > Update > (Element, Index)
                        while (index) { element = MAP_ITERATOR.next().value; index -= 1 }

                        // Return
                        return element[1]
                    }

                    else
                        // Return
                        return undefined
                };

                // Object > Prototype > Has Own Property
                LapysDevelopmentKit.Functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(object, propertyIdentifier) { return LDKF.functionPrototypeCall(LDKO.objectPrototypeHasOwnProperty, object, propertyIdentifier) };

                // Set > Prototype
                    // Element At
                    LapysDevelopmentKit.Functions.setPrototypeElementAt = function setPrototypeElementAt(set, index) {
                        // Logic
                        if (index < LDKF.setPrototypeSize(set)) {
                            // Initialization > Element; Constant > Set Iterator
                            var element = undefined; var SET_ITERATOR = LDKF.setPrototypeEntries(set);

                            // Loop > Update > (Element, Index)
                            while (index) { element = SET_ITERATOR.next().value; index -= 1 }

                            // Return
                            return element[1]
                        }

                        else
                            // Return
                            return undefined
                    };

                    // Set Index
                    LapysDevelopmentKit.Functions.setPrototypeSetIndex = function setPrototypeSetIndex(set, index, value) {
                        // Logic
                        if (index < LDKF.setPrototypeSize(arrayLike)) {
                            // Initialization > Element; Constant > Set Iterator
                            var element = undefined; var SET_ITERATOR = LDKF.setPrototypeEntries(arrayLike);

                            // Loop > Update > (Element, Index)
                            while (index) { element = SET_ITERATOR.next().value; index -= 1 }

                            // Deletion; Update > Array-Like
                            LDKF.setPrototypeDelete(arrayLike, element[1]);
                            LDKF.setPrototypeAdd(arrayLike, value)
                        }
                    };

                /* String > Prototype
                        --- NOTE ---
                            #Lapys: While substrings are primarily strings, they can also be array types.
                                Denoting a substring as an array type allows each method below assert the substring as its elements.

                                For example:
                                    The `LapysDevelopmentKit.Functions.stringPrototypeTrim` method has its `substring` parameter default to the array `['\0', '\n', ' ']`
                                    which allows it to trim the string if it leads/ trails with any of the array's character elements (in any order).
                */
                    // After
                    LapysDevelopmentKit.Functions.stringPrototypeAfter = function stringPrototypeAfter(string, substring, STRING_LENGTH) { return LDKF.stringPrototypeAfterFromFront(string, substring, STRICT = STRING_LENGTH) };

                    // After Character
                    LapysDevelopmentKit.Functions.stringPrototypeAfterCharacter = function stringPrototypeAfterCharacter(string, character, STRING_LENGTH) { return LDKF.stringPrototypeAfterCharacterFromFront(string, character, STRICT = STRING_LENGTH) };

                    // After Character From Back
                    LapysDevelopmentKit.Functions.stringPrototypeAfterCharacterFromBack = function stringPrototypeAfterCharacterFromBack(string, character, STRING_LENGTH) {
                        // Update > String Length
                        STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(string));

                        // Initialization > (After, String (Has Indexed Character, Iterator))
                        var after = ""; var stringHasIndexedCharacter = false, stringIterator = STRING_LENGTH;

                        // Loop > Update > (After, String Has Indexed Character)
                        while (stringIterator) stringHasIndexedCharacter ? after += LDKF.stringPrototypeCharacterAt(string, STRING_LENGTH - (stringIterator -= 1) - 1) : stringHasIndexedCharacter = LDKF.stringPrototypeCharacterAt(string, STRING_LENGTH - (stringIterator -= 1) - 1) == character;

                        // Return
                        return after
                    };

                    // After Character From Front
                    LapysDevelopmentKit.Functions.stringPrototypeAfterCharacterFromFront = function stringPrototypeAfterCharacterFromFront(string, character, STRING_LENGTH) {
                        // Update > String Length
                        STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(string));

                        // Initialization > (After, String (Has Indexed Character, Iterator))
                        var after = ""; var stringHasIndexedCharacter = false, stringIterator = STRING_LENGTH;

                        // Loop > ...
                        while (stringIterator) { var stringCharacter = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1); stringCharacter == character ? stringIterator = +0 : after = stringCharacter + after }

                        // Return
                        return after
                    };

                    // After From Back
                    LapysDevelopmentKit.Functions.stringPrototypeAfterFromBack = function stringPrototypeAfterFromBack(string, substring, STRING_LENGTH) {
                        LDKF.isString(substring) && (substring = [substring]);
                    };

                    // After From Front
                    LapysDevelopmentKit.Functions.stringPrototypeAfterFromFront = function stringPrototypeAfterFromFront(string, substring, STRING_LENGTH) {
                        LDKF.isString(substring) && (substring = [substring]);
                    };

                    // Before
                    LapysDevelopmentKit.Functions.stringPrototypeBefore = function stringPrototypeBefore(string, substring, STRING_LENGTH) { return LDKF.stringPrototypeBeforeFromBack(string, substring, STRICT = STRING_LENGTH) };

                    // Before Character
                    LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacter = function stringPrototypeBeforeCharacter(string, character, STRING_LENGTH) { return LDKF.stringPrototypeBeforeCharacterFromBack(string, character, STRICT = STRING_LENGTH) };

                    // Before Character From Back
                    LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacterFromBack = function stringPrototypeBeforeCharacterFromBack(string, character, STRING_LENGTH) {
                        // Update > String Length
                        STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(string));

                        // Initialization > (Before, String Iterator)
                        var before = ""; var stringIterator = STRING_LENGTH;

                        // Loop > ...
                        while (stringIterator) { var stringCharacter = LDKF.stringPrototypeCharacterAt(string, STRING_LENGTH - (stringIterator -= 1) - 1); stringCharacter == character ? stringIterator = +0 : before += stringCharacter }

                        // Return
                        return before
                    };

                    // Before Character From Front
                    LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacterFromFront = function stringPrototypeBeforeCharacterFromFront(string, character, STRING_LENGTH) {
                        // Update > String Length
                        STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(string));

                        // Initialization > (Before, String Iterator)
                        var before = ""; var stringHasIndexedCharacter = false, stringIterator = STRING_LENGTH;

                        // Loop > Update > (Before | String Has Indexed Character)
                        while (stringIterator) stringHasIndexedCharacter ? before = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) + before : stringHasIndexedCharacter = LDKF.stringPrototypeCharacterAt(string, stringIterator -= 1) == character;

                        // Return
                        return before
                    };

                    // Before From Back
                    LapysDevelopmentKit.Functions.stringPrototypeBeforeFromBack = function stringPrototypeBeforeFromBack(string, substring, STRING_LENGTH) {
                        LDKF.isString(substring) && (substring = [substring]);
                    };

                    // Before From Front
                    LapysDevelopmentKit.Functions.stringPrototypeBeforeFromFront = function stringPrototypeBeforeFromFront(string, substring, STRING_LENGTH) {
                        LDKF.isString(substring) && (substring = [substring]);
                    };

                    // Character At
                    LapysDevelopmentKit.Functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(string, index) { return string[index] || LDKF.functionPrototypeCall(LDKO.stringPrototypeCharacterAt, string, index) || null };

                    // Character Code At
                    LapysDevelopmentKit.Functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, index) { return LDKF.functionPrototypeCall(LDKO.stringPrototypeCharacterCodeAt, string, index) || -1 };

                    // Cut Left
                    // Cut Right

                    // Remove
                    // Remove From Back
                    // Remove From Front

                    // Replace
                    // Replace From Back
                    // Replace From Front

                // Style Property Map > Prototype
                    // Element At
                    LapysDevelopmentKit.Functions.stylePropertyMapPrototypeElementAt = function stylePropertyMapPrototypeElementAt(stylePropertyMap, index) {
                        // Logic
                        if (index < LDKF.mapPrototypeSize(stylePropertyMap)) {
                            // Initialization > Element; Constant > Map Iterator
                            var element = undefined; var MAP_ITERATOR = LDKF.stylePropertyMapPrototypeEntries(stylePropertyMap);

                            // Loop > Update > (Element, Index)
                            while (index) { element = MAP_ITERATOR.next().value; index -= 1 }

                            // Return
                            return element[1]
                        }

                        else
                            // Return
                            return undefined
                    };

                    // Set Index
                    LapysDevelopmentKit.Functions.stylePropertyMapPrototypeSetIndex = function stylePropertyMapPrototypeSetIndex(stylePropertyMap, index, value) {
                        // Logic
                        if (index < LDKF.stylePropertyMapPrototypeSize(stylePropertyMap)) {
                            // Initialization > Element; Constant > Map Iterator
                            var element = undefined; var MAP_ITERATOR = LDKF.stylePropertyMapPrototypeEntries(stylePropertyMap);

                            // Loop > Update > (Element, Index)
                            while (index) { element = MAP_ITERATOR.next().value; index -= 1 }

                            // Return
                            return LDKF.stylePropertyMapPrototypeSet(stylePropertyMap, element[+0], value)
                        }

                        else
                            // Return
                            return undefined
                    };

                // To Number
                LapysDevelopmentKit.Functions.toNumber = function toNumber(argument) {
                    // Logic > Return
                    if (LDKF.isNumber(argument)) return argument;
                    else if (LDKF.isNull(argument)) return +0;
                    else if (LDKF.isBoolean(argument) || LDKF.isString(argument)) return +argument;
                    else if (LDKF.isVoid(argument)) return LDKC.Numbers.NaN;
                    else if (LDKF.isSymbol(argument)) return LDKF.toNumber(LDKF.toString(argument));
                    else /*if (LDKF.isObjectLike(argument))*/ return LDKO.number(argument)
                };

            /* Mathematics --- REDACT (Lapys) */
            LapysDevelopmentKit.Mathematics.ceil = function ceil(number) { var integer = LDKM.int(number); return integer + (number > integer) };
            LapysDevelopmentKit.Mathematics.int = function int(number) { return number - number % 1 };
            LapysDevelopmentKit.Mathematics.max = function max(numberA, numberB) { return numberA > numberB ? numberA : numberB };
            LapysDevelopmentKit.Mathematics.min = function min(numberA, numberB) { return numberA < numberB ? numberA : numberB };
            LapysDevelopmentKit.Mathematics.perc = function perc(base, exponent) { return +!!exponent && (base * (exponent / 100)) };
            LapysDevelopmentKit.Mathematics.round = function round(number) { var integer = LDKM.int(number); return integer + (number - integer >= .5) };

            /* Objects */
                // Evaluate --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects.eval = eval;

                // Function --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects["function"] = Function;
                    // Prototype
                    LapysDevelopmentKit.Objects.functionPrototype = LDKO["function"].prototype;
                        // Apply --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Objects.functionPrototypeApply = LDKO.functionPrototype.apply;

                // Object --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects.object = Object;
                    // Prototype
                    LapysDevelopmentKit.Objects.objectPrototype = LDKO.object.prototype;
                        // Has Own Property --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Objects.objectPrototypeHasOwnProperty = LDKO.objectPrototype.hasOwnProperty;

                // String --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects.string = String;
                    // Prototype
                    LapysDevelopmentKit.Objects.stringPrototype = LDKO.string.prototype;
                        // : Character At --- CHECKPOINT (Lapys)
                        // : Character Code At --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Objects.stringPrototypeCharacterAt = LDKO.stringPrototype.charAt;
                        LapysDevelopmentKit.Objects.stringPrototypeCharacterCodeAt = LDKO.stringPrototype.charCodeAt;

            /* Records */
                // Lists --- REDACT (Lapys)
                LapysDevelopmentKit.Records.Lists.ClockData = [];
                LapysDevelopmentKit.Records.Lists.ClockDataLength = +0;

            /* Types */
                /* Assertion ---  NOTE (Lapys) -> ??? */
                LapysDevelopmentKit.Types.Assertion = function Assertion() {};

                // Clock
                    // Prototype
                    LapysDevelopmentKit.Types.ClockPrototype = LDKT.Clock.prototype;
                        // Check
                        LapysDevelopmentKit.Types.ClockPrototype.check = function check(condition, ontrue, onfalse) { var evaluation, id; try { evaluation = condition() } catch (error) {} id = LDKF.functionPrototypeCall(LDKT.ClockPrototype.wind, this, function() { if (evaluation) { LDKF.functionPrototypeCall(LDKT.ClockPrototype.stop, id); ontrue() } else onfalse() }); return id };

                        // Measure
                        LapysDevelopmentKit.Types.ClockPrototype.measure = function measure() { return LDKC.Assertions.has_Performance_Constructor ? LDKF.functionPrototypeCall(LDKO.performancePrototypeNow, LDKC.Objects.performance) : LDKF.functionPrototypeCall(LDKO.dateNow, LDKO.date) };

                        // Stop
                        LapysDevelopmentKit.Types.ClockPrototype.stop = function stop(id) {
                            // Logic
                            if (id) {
                                // Constant > Clock Data Index
                                var CLOCK_DATA_INDEX = LDKF.arrayPrototypeIndex(LDKR.Lists.ClockData, id, STRICT = LDKR.Lists.ClockDataLength, STRICT = function(clockData) { return clockData.id });

                                // Logic
                                if (~CLOCK_DATA_INDEX) {
                                    // Constant > Clock Data
                                    var CLOCK_DATA = LDKR.Lists.ClockData[CLOCK_DATA_INDEX];

                                    // Logic > ...
                                    if (CLOCK_DATA.hasDelay) LDKF.clearInterval(CLOCK_DATA.referenceID);
                                    else if (CLOCK_DATA.hasInterval) LDKF.clearTimeout(CLOCK_DATA.referenceID);
                                    else CLOCK_DATA.requestHandler = function() { LDKF.cancelAnimationFrame(CLOCK_DATA.referenceID) };

                                    // Update > (... > Clock Data)
                                    LDKF.arrayPrototypeCutAt(LDKR.Lists.ClockData, CLOCK_DATA_INDEX);

                                    // Return
                                    return true
                                }
                            }

                            // Return
                            return false
                        };

                        // Thread --- UPDATE REQUIRED (Lapys) -> More abstraction and features.
                        LapysDevelopmentKit.Types.ClockPrototype.thread = function thread(handler) {
                            // Constant > (Handler, Worker File) Source
                            var HANDLER_SOURCE = handler + "",
                                WORKER_FILE_SOURCE = "self.onmessage = function onmessage(event) { (" + HANDLER_SOURCE + ").call(self, event) }";

                            // Constant > Worker (File (URL))
                            var WORKER_FILE = new LDKO.file([WORKER_FILE_SOURCE], "", {type: "text/javascript"}),
                                WORKER_FILE_URL = LDKF.urlCreateObjectURL(WORKER_FILE),
                                WORKER = new LDKO.worker(WORKER_FILE_URL);

                            // Worker > Post Message
                            LDKF.workerPrototypePostMessage(WORKER, {})
                        };

                        // Tick
                        LapysDevelopmentKit.Types.ClockPrototype.tick = function tick(handler, delay) {
                            // Constant > Clock Data
                            var CLOCK_DATA = {
                                id: LDKR.Lists.ClockDataLength + 1,
                                hasDelay: (LDKF.getArgumentsLength(arguments) || 1) == 1,
                                referenceID: null
                            };

                            // Update > (... > Clock Data)
                            LDKR.Lists.ClockData[(LDKR.Lists.ClockDataLength += 1) - 1] = CLOCK_DATA;

                            // Logic
                            if (CLOCK_DATA.hasDelay)
                                // Modification > Clock Data > Reference ID
                                CLOCK_DATA.referenceID = LDKF.setTimeout(function() { LDKF.clearTimeout(CLOCK_DATA.referenceID); handler() }, delay || +0);

                            else {
                                // Modification > Clock Data > (Request Handler, Reference ID)
                                CLOCK_DATA.requestHandler = function() { handler() };
                                CLOCK_DATA.referenceID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(CLOCK_DATA.referenceID); CLOCK_DATA.requestHandler() });
                            }

                            // Return
                            return CLOCK_DATA.id
                        };

                        // Timestamp --- NOTE (Lapys) -> Measures time (in milliseconds) elapsed between each call; Every next succeeding call resets the timer.
                        LapysDevelopmentKit.Types.ClockPrototype.timestamp = function timestamp() {
                            // Constant > Clock
                            var CLOCK = this;

                            // Modification > Clock > Timed
                            CLOCK.timed = !CLOCK.timed;

                            // Logic
                            if (CLOCK.timed) {
                                // Clock > Check
                                LDKF.functionPrototypeCall(LDKT.ClockPrototype.check, CLOCK, function() { return !CLOCK.timed }, function() {}, function() { CLOCK.timeElapsed += LDKC.Constants.Number.FrameRate })

                                // Return
                                return true
                            }

                            else {
                                // Constant > Clock Time Elapsed
                                var CLOCK_TIME_ELAPSED = CLOCK.timeElapsed;

                                // Modification > Clock > Time Elapsed
                                CLOCK.timeElapsed = +0;

                                // Return
                                return CLOCK_TIME_ELAPSED
                            }
                        };

                        // Wind
                        LapysDevelopmentKit.Types.ClockPrototype.wind = function wind(handler, interval) {
                            // Constant > Clock Data
                            var CLOCK_DATA = {
                                id: LDKR.Lists.ClockDataLength + 1,
                                hasInterval: (LDKF.getArgumentsLength(arguments) || 1) == 1,
                                referenceID: null
                            };

                            // Update > (... > Clock Data)
                            LDKR.Lists.ClockData[(LDKR.Lists.ClockDataLength += 1) - 1] = CLOCK_DATA;

                            // Logic
                            if (CLOCK_DATA.hasInterval)
                                // Modification > Clock Data > Reference ID
                                CLOCK_DATA.referenceID = LDKF.setInterval(function() { handler() }, interval || +0);

                            else {
                                // Initialization > Evaluate Handler
                                var evaluateHandler = false;

                                // Modification > Clock Data > Request Handler
                                CLOCK_DATA.requestHandler = function() {
                                    // Cancel Animation Frame
                                    LDKF.cancelAnimationFrame(CLOCK_DATA.referenceID);

                                    // Modification > Clock Data > Reference ID; ...
                                    CLOCK_DATA.referenceID = LDKF.requestAnimationFrame(CLOCK_DATA.requestHandler);
                                    evaluateHandler ? handler() : evaluateHandler = true
                                };

                                // Clock Data > Request Handler
                                CLOCK_DATA.requestHandler()
                            }

                            // Return
                            return CLOCK_DATA.id
                        };

                /* Iterator --- NOTE (Lapys) -> Semantic type for repetition-based function handlers. */
                LapysDevelopmentKit.Types.Iterator = function Iterator() { this.done = true };

                /* Pseudo Number --- NOTE (Lapys) -> Infinite width decimal type. */
                LapysDevelopmentKit.Types.PseudoNumber = function PseudoNumber() { this.characteristics = new LDKT.SafeArray; LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePush, this.characteristics, '0'); this.mantissa = new LDKT.SafeArray; LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePush, this.mantissa, '0') };
                    // Add
                    LapysDevelopmentKit.Types.PseudoNumberAdd =
                    LapysDevelopmentKit.Types.PseudoNumber.add = function add(pseudoNumberA, pseudoNumberB) {
                        return new LDKT.PseudoNumber
                    };

                    // From Number
                    LapysDevelopmentKit.Types.PseudoNumberFromNumber =
                    LapysDevelopmentKit.Types.PseudoNumber.fromNumber = function fromNumber(number) {
                        // Constant > Pseudo Number; Initialization > (Characteristics, Mantissa)
                        var PSEUDO_NUMBER = new LDKT.PseudoNumber;
                        var characteristics = '0', mantissa = '0';

                        // Logic > ...
                        if (LDKF.isBigInt(number)) characteristics = LDKF.stringPrototypeRemoveFromFront(LDKF.toString(number), 'n');
                        else if (LDKF.numberPrototypeIsSafe(number)) { var STRING = LDKF.toString(number); characteristics = LDKF.stringPrototypeBefore(STRING, '.'); mantissa = LDKF.stringPrototypeAfter(STRING, '.') }

                        // Return
                        return PSEUDO_NUMBER
                    };
                    LapysDevelopmentKit.Functions.numberPrototypeIsFinite = function numberPrototypeIsFinite(number) { return number !== LDKC.Numbers.Infinity };
                    LapysDevelopmentKit.Functions.numberPrototypeIsNaN = function numberPrototypeIsNaN(number) { return number !== number };
                    LapysDevelopmentKit.Functions.numberPrototypeIsSafe = function numberPrototypeIsSafe(number) { return number < LDKC.Numbers.MaximumIntegerValue && LDKF.numberPrototypeIsFinite(number) && !LDKF.numberPrototypeIsNaN(number) };

                    // Prototype
                    LapysDevelopmentKit.Types.PseudoNumberPrototype = LDKT.PseudoNumber.prototype;
                        // Add
                        LapysDevelopmentKit.Types.PseudoNumberPrototype.add = function add(pseudoNumber) { LDKF.functionPrototypeCall(LDKT.PseudoNumberPrototypeAssign, this, LDKT.PseudoNumberAdd(this, pseudoNumber)) };

                        // Assign
                        LapysDevelopmentKit.Types.PseudoNumberPrototypeAssign =
                        LapysDevelopmentKit.Types.PseudoNumberPrototype.assign = function assign(pseudoNumber) { LDKF.functionPrototypeCall(LDKT.PseudoNumberPrototypeFree, this); this.characteristics = pseudoNumber.characteristics; this.value = pseudoNumber.value; return this };

                        // Free
                        LapysDevelopmentKit.Types.PseudoNumberPrototypeFree =
                        LapysDevelopmentKit.Types.PseudoNumberPrototype.free = function free() { LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeFree, this.characteristics); LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeFree, this.mantissa) };

                        // Value Of
                        LapysDevelopmentKit.Types.PseudoNumberPrototype.valueOf = function valueOf() { return this.characteristics + '.' + this.mantissa };

                /* Ranged Number --- NOTE (Lapys) -> Fixed-width number type. */
                LapysDevelopmentKit.Types.RangedNumber = function RangedNumber() {};

                /* Safe Array
                        --- NOTE (Lapys) -> Infinite-length array type.
                        --- WARN (Lapys) -> While the length is non-finite, the memory allocated is not.
                */
                LapysDevelopmentKit.Types.SafeArray = function SafeArray() {
                    // Modification > Target > (Depth, (Maximum) Length, Width)
                    this.depth = 1;
                    this.MAXIMUM_LENGTH = LDKT.SafeArrayPrototype.MAXIMUM_LENGTH;
                    this.length = +0;
                    this.width = +0
                };
                    // Prototype
                    LapysDevelopmentKit.Types.SafeArrayPrototype = LDKT.SafeArray.prototype;
                        // Cut At
                        LapysDevelopmentKit.Types.SafeArrayPrototype.cutAt = function cutAt(index) {
                            // Constant > Safe Array (Length)
                            var SAFE_ARRAY = this;
                            var SAFE_ARRAY_LENGTH = SAFE_ARRAY.length;

                            // Logic
                            if (SAFE_ARRAY_LENGTH)
                                // Logic
                                if (index == SAFE_ARRAY_LENGTH)
                                    // Update > Safe Array
                                    LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePop, SAFE_ARRAY);

                                else if (!index && SAFE_ARRAY_LENGTH == 1)
                                    // Update > Safe Array
                                    LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeFree, SAFE_ARRAY);

                                else {
                                    // (Loop > )Update > Safe Array
                                    while (index ^ (SAFE_ARRAY_LENGTH - 1)) LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeSetIndex, SAFE_ARRAY, index, LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeElementAt, SAFE_ARRAY, index += 1));
                                    LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePop, SAFE_ARRAY)
                                }
                        };

                        // Element At
                        LapysDevelopmentKit.Types.SafeArrayPrototypeElementAt =
                        LapysDevelopmentKit.Types.SafeArrayPrototype.elementAt = function elementAt(index) {
                            // Initialization > Safe Array (Depth)
                            var safeArray = this;
                            var safeArrayDepth = safeArray.depth;

                            // Logic
                            if (safeArrayDepth == 1)
                                // Return
                                return safeArray[index];

                            else if (!index) {
                                // Loop > Update > Safe Array; Return
                                while (safeArrayDepth -= 1) safeArray = safeArray[index];
                                return safeArray[index]
                            }

                            else {
                                // Constant > Safe Array Maximum Length
                                var SAFE_ARRAY_MAXIMUM_LENGTH = safeArray.MAXIMUM_LENGTH;

                                // Initialization > Safe Array ((Former) Index (Length))
                                var safeArrayIndexLength = +0;
                                var safeArrayFormerIndex = +0, safeArrayIndex = +0;

                                // Loop
                                while (safeArrayDepth -= 1) {
                                    // Constant > Safe Subarray Maximum Breadth
                                    var SAFE_SUBARRAY_MAXIMUM_BREADTH = LDKM.powInt(SAFE_ARRAY_MAXIMUM_LENGTH, safeArrayDepth);

                                    // Update > Safe Array (Former) Index
                                    safeArrayFormerIndex = safeArrayIndex;
                                    safeArrayIndex = +0;

                                    // (Loop > )Update > Safe Array Index
                                    while ((
                                        (safeArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH) +
                                        safeArrayIndexLength
                                    ) <= index) safeArrayIndex += 1;
                                    safeArrayIndex -= 1;

                                    // Update > Safe Array (Index Length)
                                    safeArrayIndexLength += safeArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH;
                                    safeArray = safeArray[safeArrayIndex]
                                }

                                // (Loop > )Update > Safe Array Index
                                safeArrayIndex = +0;
                                while ((safeArrayIndex + safeArrayIndexLength) < index) safeArrayIndex += 1;

                                // Return
                                return safeArray[safeArrayIndex]
                            }
                        };

                        // For Each
                        LapysDevelopmentKit.Types.SafeArrayPrototype.foreach = function foreach(handler) {
                            // Initialization > Safe Array (Length)
                            var SAFE_ARRAY = this;
                            var safeArrayLength = SAFE_ARRAY.length, safeArrayIterator = safeArrayLength;

                            // Loop
                            while (safeArrayIterator) {
                                // Constant > Safe Array Index; Handler
                                var SAFE_ARRAY_INDEX = safeArrayLength - (safeArrayIterator -= 1) - 1;
                                LDKF.functionPrototypeCall(handler, SAFE_ARRAY, SAFE_ARRAY.elementAt(SAFE_ARRAY_INDEX), SAFE_ARRAY_INDEX)
                            }
                        };

                        // Free
                        LapysDevelopmentKit.Types.SafeArrayPrototypeFree =
                        LapysDevelopmentKit.Types.SafeArrayPrototype.free = function free(PERSIST_UNUSED_MEMORY) {
                            // Constant > Safe Array
                            var SAFE_ARRAY = this;

                            // Logic
                            if (PERSIST_UNUSED_MEMORY) {
                                // Initialization > Safe Array Index
                                var safeArrayIndex = +0;

                                // Loop > (Deletion; Update > Safe Array Index)
                                while (LDKF.objectPrototypeHasOwnProperty(SAFE_ARRAY, safeArrayIndex)) {
                                    delete SAFE_ARRAY[safeArrayIndex];
                                    safeArrayIndex += 1
                                }
                            }

                            // Deletion
                            delete SAFE_ARRAY[+0];

                            // Modification > Safe Array > (Depth, Length, Width)
                            SAFE_ARRAY.depth = 1;
                            SAFE_ARRAY.length = +0;
                            SAFE_ARRAY.width = +0;
                        };

                        // Index --- FLAG (Lapys) -> Utilize the `LapysDevelopmentKit.Functions.functionPrototypeCall` method.
                        LapysDevelopmentKit.Types.SafeArrayPrototype.index = function index(element) {
                            // Constant > Safe Array
                            var SAFE_ARRAY = this;

                            // Return
                            return SAFE_ARRAY.depth == 1 ?
                                LDKF.arrayPrototypeIndex(SAFE_ARRAY, element, STRICT = SAFE_ARRAY.length) :
                                LDKF.arrayPrototypeIndex(SAFE_ARRAY, element, STRICT = SAFE_ARRAY.length, STRICT = LDKC.Data.SafeArrayImperative)
                        };

                        // Maximum Length
                        LapysDevelopmentKit.Types.SafeArrayPrototype.MAXIMUM_LENGTH = LDKC.Numbers.MaximumArrayLength;

                        // Pop --- FLAG (Lapys) -> Utilize the `LapysDevelopmentKit.Functions.functionPrototypeCall` method.
                        LapysDevelopmentKit.Types.SafeArrayPrototypePop =
                        LapysDevelopmentKit.Types.SafeArrayPrototype.pop = function pop(PARENT, INDEX) {
                            // Constant > Safe Array (Length)
                            var SAFE_ARRAY = this;
                            var SAFE_ARRAY_LENGTH = SAFE_ARRAY.length;

                            // Logic
                            if (SAFE_ARRAY_LENGTH == 1)
                                // Update > Safe Array
                                LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeFree, SAFE_ARRAY);

                            else if (SAFE_ARRAY_LENGTH) {
                                // Initialization > Safe Array (Depth, Has Parent)
                                var safeArrayDepth = SAFE_ARRAY.depth;
                                var SAFE_ARRAY_HAS_PARENT = LDKF.getArgumentsLength(arguments);

                                // Logic
                                if (safeArrayDepth == 1) {
                                    // Deletion; Modification > Safe Array > Width
                                    delete SAFE_ARRAY[SAFE_ARRAY.length - 1];
                                    SAFE_ARRAY.width -= 1;
                                    (SAFE_ARRAY_HAS_PARENT && SAFE_ARRAY_LENGTH == 1) && delete PARENT[INDEX]
                                }

                                else {
                                    // Initialization > Safe Array Index
                                    var safeArrayIndex = +0;

                                    // (Loop > )Update > Safe Array Index
                                    while (LDKF.objectPrototypeHasOwnProperty(SAFE_ARRAY, safeArrayIndex)) safeArrayIndex += 1;
                                    safeArrayIndex -= 1;

                                    // Update > Safe Array
                                    LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePop, SAFE_ARRAY[safeArrayIndex], STRICT = SAFE_ARRAY, STRICT = safeArrayIndex)
                                }

                                // Modification > Safe Array > (Length, Width)
                                SAFE_ARRAY.length -= 1;
                                (SAFE_ARRAY_HAS_PARENT && !SAFE_ARRAY.width) && (PARENT.width = PARENT.MAXIMUM_LENGTH);

                                // (Loop > )Update > Safe Array Depth
                                safeArrayDepth = 1;
                                while (LDKM.powInt(SAFE_ARRAY.MAXIMUM_LENGTH, safeArrayDepth) < SAFE_ARRAY.length) safeArrayDepth += 1;

                                // Logic
                                if (LDKM.powInt(SAFE_ARRAY.MAXIMUM_LENGTH, safeArrayDepth) == SAFE_ARRAY.length) {
                                    // Initialization > Safe (Array Iterator, Subarray)
                                    var safeArrayIterator = SAFE_ARRAY.MAXIMUM_LENGTH;
                                    var SAFE_SUBARRAY = SAFE_ARRAY[+0];

                                    // Modification > Safe Array > Depth
                                    SAFE_ARRAY.depth -= 1;

                                    // Loop > Update > Safe Array (Iterator)
                                    while (safeArrayIterator) { safeArrayIterator -= 1; SAFE_ARRAY[safeArrayIterator] = SAFE_SUBARRAY[safeArrayIterator] }
                                }
                            }
                        };

                        // Push --- FLAG (Lapys) -> Utilize the `LapysDevelopmentKit.Functions.functionPrototypeCall` method.
                        LapysDevelopmentKit.Types.SafeArrayPrototypePush =
                        LapysDevelopmentKit.Types.SafeArrayPrototype.push = function push(element) {
                            // Constant > Safe Array
                            var SAFE_ARRAY = this;

                            // Logic --- NOTE (Lapys) -> The array (or its children/ containers) have overflown (reached a length greater than their maximum length).
                            if (SAFE_ARRAY.length && !(SAFE_ARRAY.length % SAFE_ARRAY.MAXIMUM_LENGTH)) {
                                // Logic --- NOTE (Lapys) -> Clamp all the array`s contents into a subarray that is the first element of the array.
                                if (SAFE_ARRAY.length == LDKM.powInt(SAFE_ARRAY.width, SAFE_ARRAY.depth)) {
                                    // Constant > Safe Array First; Initialization > Safe Array Iterator
                                    var SAFE_ARRAY_FIRST = SAFE_ARRAY[+0];
                                    var safeArrayIterator = SAFE_ARRAY.width;

                                    // Update > Safe Array
                                    SAFE_ARRAY[+0] = new LDKT.SafeArray;
                                    SAFE_ARRAY[+0][+0] = SAFE_ARRAY_FIRST;

                                    // Modification > Safe Array > (Depth, (Maximum) Length, Width)
                                    SAFE_ARRAY[+0].depth = SAFE_ARRAY.depth;
                                    SAFE_ARRAY[+0].length = LDKM.powInt(safeArrayIterator, SAFE_ARRAY.depth);
                                    SAFE_ARRAY[+0].MAXIMUM_LENGTH = SAFE_ARRAY.MAXIMUM_LENGTH;
                                    SAFE_ARRAY[+0].width = safeArrayIterator;

                                    // Loop > Update > Safe Array
                                    while (safeArrayIterator -= 1) { SAFE_ARRAY[+0][safeArrayIterator] = SAFE_ARRAY[safeArrayIterator]; delete SAFE_ARRAY[safeArrayIterator] }

                                    // Modification > Safe Array > Depth
                                    SAFE_ARRAY.depth += 1
                                }

                                // Modification > Safe Array > Width
                                SAFE_ARRAY.width = +0
                            }

                            // Logic
                            if (SAFE_ARRAY.depth == 1)
                                // Update > Safe Array
                                SAFE_ARRAY[SAFE_ARRAY.length] = element;

                            else {
                                // Initialization > (Evaluation, Safe Array Index)
                                var evaluation = true, safeArrayIndex = +0;

                                // Loop
                                while (evaluation) {
                                    // Initialization > Safe Subarray
                                    var safeSubarray;

                                    // Logic --- NOTE (Lapys) -> Assert the width of the array.
                                    if (LDKF.objectPrototypeHasOwnProperty(SAFE_ARRAY, safeArrayIndex)) {
                                        // Update > Safe Subarray
                                        safeSubarray = SAFE_ARRAY[safeArrayIndex];

                                        // Logic
                                        if (safeSubarray.length ^ LDKM.powInt(SAFE_ARRAY.MAXIMUM_LENGTH, safeSubarray.depth)) {
                                            // Update > (Evaluation, Safe Subarray)
                                            evaluation = false;
                                            LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePush, safeSubarray, element)
                                        }

                                        else
                                            // Update > Safe Array Index
                                            safeArrayIndex += 1
                                    }

                                    else {
                                        // Initialization > Safe Array Depth
                                        var safeArrayDepth = SAFE_ARRAY.depth - 1;

                                        // Update > (Evaluation, Safe (Subarray, Array))
                                        evaluation = false;
                                        safeSubarray = new LDKT.SafeArray;
                                        SAFE_ARRAY[safeArrayIndex] = safeSubarray;

                                        // Modification > Safe Subarray > (Depth, Maximum Length)
                                        safeSubarray.depth = safeArrayDepth;
                                        safeSubarray.MAXIMUM_LENGTH = SAFE_ARRAY.MAXIMUM_LENGTH;

                                        // Loop
                                        while (safeArrayDepth -= 1) {
                                            // (Modification, Update) > ...
                                            safeSubarray[+0] = new LDKT.SafeArray;
                                            safeSubarray[+0].depth = safeArrayDepth;
                                            safeSubarray[+0].MAXIMUM_LENGTH = SAFE_ARRAY.MAXIMUM_LENGTH;
                                            safeSubarray = safeSubarray[+0]
                                        }

                                        // Update > Safe Array
                                        LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePush, SAFE_ARRAY[safeArrayIndex], element)
                                    }
                                }
                            }

                            // Modification > Safe Array > (Length, Width)
                            SAFE_ARRAY.length += 1;
                            SAFE_ARRAY.width += 1
                        };

                        // Resize
                        LapysDevelopmentKit.Types.SafeArrayPrototypeResize =
                        LapysDevelopmentKit.Types.SafeArrayPrototype.resize = function resize(length) { var SAFE_ARRAY = this, SAFE_ARRAY_LENGTH = SAFE_ARRAY.length; if (length ^ SAFE_ARRAY_LENGTH) { var safeArrayIterator; if (length > SAFE_ARRAY_LENGTH) { safeArrayIterator = length - SAFE_ARRAY_LENGTH; this.length = length; while (safeArrayIterator) { LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePush, SAFE_ARRAY, undefined); safeArrayIterator -= 1 } } else { safeArrayIterator = SAFE_ARRAY_LENGTH - length; this.length -= safeArrayIterator; while (safeArrayIterator) { LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypePop, SAFE_ARRAY); safeArrayIterator -= 1 } } } };

                        // Set Index
                        LapysDevelopmentKit.Types.SafeArrayPrototypeSetIndex =
                        LapysDevelopmentKit.Types.SafeArrayPrototype.setIndex = function setIndex(index, element) {
                            // Initialization > Safe Array (Depth)
                            var safeArray = this;
                            var safeArrayDepth = safeArray.depth;

                            // Logic
                            if (safeArrayDepth == 1)
                                // Return
                                return (safeArray[index] = element);

                            else if (!index) {
                                // Loop > Update > Safe Array; Return
                                while (safeArrayDepth -= 1) safeArray = safeArray[index];
                                return (safeArray[index] = element)
                            }

                            else {
                                // Constant > Safe Array Maximum Length
                                var SAFE_ARRAY_MAXIMUM_LENGTH = safeArray.MAXIMUM_LENGTH;

                                // Initialization > Safe Array ((Former) Index (Length))
                                var safeArrayIndexLength = +0;
                                var safeArrayFormerIndex = +0, safeArrayIndex = +0;

                                // Loop
                                while (safeArrayDepth -= 1) {
                                    // Constant > Safe Subarray Maximum Breadth
                                    var SAFE_SUBARRAY_MAXIMUM_BREADTH = LDKM.powInt(SAFE_ARRAY_MAXIMUM_LENGTH, safeArrayDepth);

                                    // Update > Safe Array (Former) Index
                                    safeArrayFormerIndex = safeArrayIndex;
                                    safeArrayIndex = +0;

                                    // (Loop > )Update > Safe Array Index
                                    while ((
                                        (safeArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH) +
                                        safeArrayIndexLength
                                    ) <= index) safeArrayIndex += 1;
                                    safeArrayIndex -= 1;

                                    // Update > Safe Array (Index Length)
                                    safeArrayIndexLength += safeArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH;
                                    safeArray = safeArray[safeArrayIndex]
                                }

                                // (Loop > )Update > Safe Array Index
                                safeArrayIndex = +0;
                                while ((safeArrayIndex + safeArrayIndexLength) < index) safeArrayIndex += 1;

                                // Update > Safe Array
                                safeArray[safeArrayIndex] = element
                            }
                        };

                    // ...
                    LapysDevelopmentKit.Constants.Data.SafeArrayImperative = new LDKT.ArrayImperative(
                        function SafeArrayPrototypeElementAt(safeArray, index) { return LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeElementAt, safeArray, index) },
                        function SafeArrayPrototypeSetIndex(safeArray, index, element) { return LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeSetIndex, safeArray, index, element) },
                        function SafeArrayPrototypeLength(safeArray) { return safeArray.length },
                        function SafeArrayPrototypeResize(safeArray, length) { return LDKF.functionPrototypeCall(LDKT.SafeArrayPrototypeResize, safeArray, length) }
                    );

                // Safe Number --- NOTE (Lapys) -> Performant `PseudoNumber` type.
                LapysDevelopmentKit.Types.SafeNumber = function SafeNumber() {};

                // Scope --- NOTE (Lapys) -> Semantic type for context-based storage.
                LapysDevelopmentKit.Types.Scope = function Scope() {};

                // Vendor --- NOTE (Lapys) -> Container for data about third-party JavaScript software.
                LapysDevelopmentKit.Types.Vendor = function Vendor(name, namespace) { this.name = name; this.namespace = namespace };
                    // Prototype
                    LapysDevelopmentKit.Types.VendorPrototype = LDKT.Vendor.prototype;
                        // To String
                        LapysDevelopmentKit.Types.VendorPrototype.toString = function toString() { return LDKF.toString(LDKF.objectPrototypeHasProperty(this, "name") ? this.name : "") };

            /* Environment > ... */
            (function LapysDevelopmentKitEnvironmentModule() {
                // Error Handling > Update > Global
                try { GLOBAL = LDKO["function"]("return this")() || LDKF.eval("this") }
                catch (error) { GLOBAL = typeof self == "undefined" ? (typeof window == "undefined" ? (typeof global == "undefined" ? undefined : global) : window) : self }
            })();

    GLOBAL.LapysDevelopmentKit = LapysDevelopmentKit;
    GLOBAL.LDK = LapysDevelopmentKit;
    GLOBAL.LDKC = LDKC;
    GLOBAL.LDKE = LDKE;
    GLOBAL.LDKI = LDKI;
    GLOBAL.LDKF = LDKF;
    GLOBAL.LDKM = LDKM;
    GLOBAL.LDKO = LDKO;
    GLOBAL.LDKR = LDKR;
    GLOBAL.LDKT = LDKT;

    // Return
    return +0
})();
