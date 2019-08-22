/** Main
    @author: Lapys Dev Team
    @description: LapysJS is a general-purpose, semantic and universal JavaScript library
    @version: 0.0.9
    @url: https://www.github.com/LapysDev/LapysJS

    --- CODE ---
        #Lapys:
            class ConstructorName {
                var CONSTANT; var variable;

                function(variableParameter, ConstantParameter, FLAG_PARAMETER) {}
                function Constant(...) {}
                function variable(...) {}
            };

            _Native Name_

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
                    This is mainly due to "subtle" inconsistencies in the adaptation of the ECMAScript standard for JavaScript in consumer software and custom runtimes
                    (Hence the need for conditional comments (by Microsoft), fallbacks, polyfills, shims & shivs (by John Resig and Sam Ruby) and so on).

                    Of course, this supports the concept of spoof-proofing [https://en.m.wikipedia.org/wiki/Spoofing_attack] which is a discipline that prevents data being masqueraded and falsified.
                    Unfortunately, the JavaScript language adoption is limited in the context of its everyday-use APIs and spoofing;
                    which leads to most versions of the language being impossible to spoof-proof.

                    Conversely, this decision supports the design standards of the Lapys Development Kit into JavaScript such as:
                        --- software to be executed has four phases: Initiate, Update, Reset, Terminate (also known as RIUT),
                        --- private and public features are independent & separate but still communicable (private being the main authority),
                        --- multiple solutions (often special-purpose) are deferred in favor of a single general-purpose solution when feasible,
                        --- and so on...

    --- RULES ---
        #Lapys:
            - All expressions/ statements/ values must be intentional (avoid the methodologies of Sloppy Mode in JavaScript [https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode]).
            - All features must be alphabetically defined & ordered for readability if feasible.
            - All non-universal features are banned (e.g.: APIs, classes, lambdas, REST features and so on).
            - Avoid naming an object property `constructor`, instead defer to `constructorRoutine`.
            - Avoid naming an object property `function`, instead defer to `routine`.
            - Avoid the `break` statement in repetition structures; This encourages a first-entry, first-exit design.
            - Due to the ECMAScript standard supporting multiple zero types, it is a rule to explicitly & strictly differentiate between each of those values (e.g.: `-0` and `+0`) except in special cases.
            - Inline function expressions are only allowed in:
                -- Defining the `Main` function or
                -- Defining a phase: `Initiate`, `Update`, `Reset` or `Terminate` or
                -- If the alternative is less efficient/ preferable.
            - Memory management via the JavaScript garbage collector should be kept to a minimum:
                -- Avoid local function declarations.
                -- Avoid unnecessary property/ variable definition/ initialization.
                -- Defer string literals instead of string concatenation.
                -- Defer to parameter labels instead of the `arguments` object.
                -- Limit evaluating function expressions.
                -- Limit the liberal use of explicit exceptions handlers (e.g: the `try... catch` block).
                -- Limit the use of object literals.
                -- Prevent coercing primitive values to objects.
                -- Use of some native functions.
            - Minimum number size should be 32 bits.
            - Non-literal digits must be represented as character strings (with collective digits denoted as an `Array` or `BigArray` (usually within a `BigNumber`)); Digits do not have an exclusive type or wrapper class.
            - Private functions should not strictly assert its parameters.

            This is to keep the language somewhat universally readable and similar to other programming languages.

    --- UPDATE REQUIRED ---
        #Lapys:
            - Blur all elements when main window is blurred.
            - Lookup CSS rules from the `document.styleSheets[0].cssRules` form.
            - Lookup DOM updates with the `MutationObserver` API.
            - Target development environments (these may lack a core (and/ or modern) JavaScript feature or not work for unknown reasons...):
                -- Internet Explorer 3 - 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- Netscape Navigator 2 - 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- others...

    --- WARN ---
        #Lapys:
            The constant & constructor parameter naming convention are similar which may lead to unwanted conflicts.
            Unfortunately there is no feature to specify constant parameters within the function signature explicitly in JavaScript.
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
    var TMP; // NOTE (Lapys) -> Global variable for critical, temporary data (may be used in denoting status or swapping values).

    /* Polyfills > ... */
    var undefined = void +0; // WARN (Lapys) -> Should not be legal but it is.

    /* Namespace > Lapys Development Kit */
    var LapysDevelopmentKit = {
        Constants: {Assertions: {}, Data: {}, Keywords: {}, Numbers: {}, Objects: {}, Strings: {}},
        Environment: {},
        Functions: {},
        Information: {Directives: {DebugMode: false, IgnoreMissingFeatures: false}, Messages: {Debugging: {}, Error: {}}},
        Mathematics: {},
        Objects: {},
        Records: {Lists: {}, Values: {}},
        Types: {}
    };

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
            /* Functions --- NOTE (Lapys) -> Fortunately, these objects manage their own properties; They are genuinely spoof-proof. --- REDACT (Lapys) */
            LapysDevelopmentKit.Functions.argumentsPrototypeArgumentAt = function argumentsPrototypeArgumentAt(ArgumentListObject, Index) { return ArgumentListObject[Index] };
            LapysDevelopmentKit.Functions.argumentsPrototypeCallee = function argumentsPrototypeCallee(ArgumentListObject) { return ArgumentListObject.callee };
            LapysDevelopmentKit.Functions.argumentsPrototypeLength = function argumentsPrototypeLength(ArgumentListObject) { return ArgumentListObject.length };
            LapysDevelopmentKit.Functions.argumentsPrototypeSetIndex = function argumentsPrototypeSetIndex(ArgumentListObject, Index, Argument) { return (ArgumentListObject[Index] = Argument) };

            // : NOTE (Lapys) -> Array methods are similar to array imperative methods and therefore will not provide imperatives as a modifier.
            LapysDevelopmentKit.Functions.arrayPrototypeElementAt = function arrayPrototypeElementAt(Array, Index) { return Array[Index] };
            LapysDevelopmentKit.Functions.arrayPrototypeLength = function arrayPrototypeLength(Array) { return Array.length };
            LapysDevelopmentKit.Functions.arrayPrototypeSetIndex = function arrayPrototypeSetIndex(Array, Index, Element) { Array[Index] = Element };
            LapysDevelopmentKit.Functions.arrayPrototypeResize = function arrayPrototypeResize(Array, Length) { Array.length = Length };

            LapysDevelopmentKit.Functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(Object, PropertyIdentifier, IGNORE_EXCEPTIONS) { try { return delete Object[PropertyIdentifier] } catch (Error) { IGNORE_EXCEPTIONS || LDKF.throwError(Error) } return ANY };
            LapysDevelopmentKit.Functions.objectPrototypeGetProperty = function objectPrototypeGetProperty(Object, PropertyIdentifier, IGNORE_EXCEPTIONS) { try { return Object[PropertyIdentifier] } catch (Error) { IGNORE_EXCEPTIONS || LDKF.throwError(Error) } return ANY };
            LapysDevelopmentKit.Functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(Object, PropertyIdentifier, IGNORE_EXCEPTIONS) { try { return PropertyIdentifier in Object } catch (Error) { IGNORE_EXCEPTIONS || LDKF.throwError(Error) } return ANY };
            LapysDevelopmentKit.Functions.objectPrototypeIsOfConstructor = function objectPrototypeIsOfConstructor(Object, Constructor, IGNORE_EXCEPTIONS) { try { return Object instanceof Constructor } catch (Error) { IGNORE_EXCEPTIONS || LDKF.throwError(Error) } return ANY }
            LapysDevelopmentKit.Functions.objectPrototypeSetProperty = function objectPrototypeSetProperty(Object, PropertyIdentifier, PropertyValue, IGNORE_EXCEPTIONS) { try { return Object[PropertyIdentifier] = PropertyValue } catch (Error) { IGNORE_EXCEPTIONS || LDKF.throwError(Error) } return ANY };

            LapysDevelopmentKit.Functions.functionPrototypePrototype = function functionPrototypePrototype(Routine) { return Routine.prototype };

            LapysDevelopmentKit.Functions.stringPrototypeCharacterAt = function stringPrototypeCharacterAt(String, Index) { return String[Index] || LDKF.functionPrototypeMonoadicCall(LDKO.stringPrototypeCharacterAt, String, Index) || null };
            LapysDevelopmentKit.Functions.stringPrototypeLength = function stringPrototypeLength(String) { return String.length };

            LapysDevelopmentKit.Functions.getArgumentsLength = function getArgumentsLength(ArgumentListObject) { return /*LDKF.argumentsPrototypeLength(ArgumentListObject) || */ArgumentListObject.length };
            LapysDevelopmentKit.Functions.isString = function isString(Argument) { return typeof Argument == "string" };
            LapysDevelopmentKit.Functions.throwError = function throwError(Error) { throw Error };
            LapysDevelopmentKit.Functions.toString = function toString(Argument) { return LDKF.isString(Argument) ? Argument : LDKO.string(Argument) };

            /* Types > --- REDACT (Lapys)
                    : Array Imperative --- NOTE (Lapys) -> Container for array-like basic access & manipulation functions.
                    : Clock --- NOTE (Lapys) -> Structure type for asynchronous and multi-threaded processes.
                    : Enumeration --- NOTE (Lapys) -> List of enumerable options represented as integers, labeled as strings.
                    : Safe String --- NOTE (Lapys) -> String type that does not rely on the `String.prototype.charAt` method to be universally compatible. --- MINIFY (Lapys)
            */
            LapysDevelopmentKit.Types.ArrayImperative = function ArrayImperative(Accessor, Mutator, Requester, Allocator) { this.getIndex = Accessor; this.getLength = Requester; this.setIndex = Mutator; this.setLength = Allocator };
            LapysDevelopmentKit.Types.Clock = function Clock() { this.timed = false; this.timeElapsed = +0 };
            LapysDevelopmentKit.Types.Enumeration = function Enumeration(Values) { var argumentsIterator = LDKF.getArgumentsLength(arguments); while (argumentsIterator) { argumentsIterator -= 1; this[LDKF.toString(arguments[argumentsIterator])] = argumentsIterator + 1 } return this };
            LapysDevelopmentKit.Types.SafeString = function SafeString(Characters) { var argumentsIterator = LDKF.getArgumentsLength(arguments); this.length = argumentsIterator; while (argumentsIterator) { argumentsIterator -= 1; this[argumentsIterator] = arguments[argumentsIterator] } };

    /* Modification */
        /* Lapys Development Kit */
            /* Constants */
                // Data > ... --- MINIFY (Lapys) --- NOTE (Lapys) -> Functions and values are defined separately here. --- REDACT (Lapys)
                LapysDevelopmentKit.Constants.Data.ArrayImperative = new LDKT.ArrayImperative(LDKF.arrayPrototypeElementAt, LDKF.arrayPrototypeSetIndex, LDKF.arrayPrototypeLength, LDKF.arrayPrototypeResize);
                LapysDevelopmentKit.Constants.Data.ArraySortType = new LDKT.Enumeration("ASCII_SORT", "CUSTOM_SORT", "NATIVE_SORT");
                LapysDevelopmentKit.Constants.Data.Clock = new LDKT.Clock;
                LapysDevelopmentKit.Constants.Data.NumberComponent = new LDKT.Enumeration("CHARACTERISTICS", "MANTISSA");
                LapysDevelopmentKit.Constants.Data.SourceTypes = new LDKT.Enumeration("abap", "actionscript", "apl", "applescript", "arduino", "arff", "asciidoc", "asm", "asp", "autohotkey", "autoit", "bash", "basic", "batch", "bison", "brainfuck", "bro", 'c', "c#", "c++", "cil", "clojure", "cmake", "coffeescript", "crystal", "csp", "css", 'd', "dart", "diff", "django", "docker", "eiffel", "elixir", "elm", "erb", "erlang", "f#", "flow", "fortran", "gherkin", "git", "glsl", "gml", "go", "graphql", "haml", "haskell", "haxe", "hcl", "html", "html", "http", "java", "javascript", "json", "kotlin", "less", "lisp", "livescript", "lua", "makefile", "markdown", "markup", "mathml", "matlab", "objective-c", "ocaml", "open-cl", "pascal", "perl", "php", "powershell", "processing", "python", 'q', 'r', "regex", "ruby", "rust", "sass", "scala", "shell", "sql", "svg", "swift", "tcl", "typescript", "vlm", "xml", "yaml");
                LapysDevelopmentKit.Constants.Data.StringImperative = new LDKT.ArrayImperative(LDKF.stringPrototypeCharacterAt, null, LDKF.stringPrototypeLength, null);

                LapysDevelopmentKit.Constants.Data.ArrayASCIISortComparator = function ArrayASCIISortComparator(ArgumentA, ArgumentB) {
                    // Constant > ((String (A, B)) (Length), Iterator)
                    var STRING_A = LDKF.toString(ArgumentA), STRING_B = LDKF.toString(ArgumentB);
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
                LapysDevelopmentKit.Constants.Data.ArrayCustomSortComparator = function ArrayCustomSortComparator(ArgumentA, ArgumentB) {
                    // Logic
                    if ((LDKF.isBoolean(ArgumentA) || LDKF.isNumber(ArgumentA)) && (LDKF.isBoolean(ArgumentB) || LDKF.isNumber(ArgumentB)))
                        // Return
                        return LDKM.min(ArgumentA, ArgumentB);

                    else {
                        // Constant > Argument (A, B) Is String
                        var ARGUMENT_A_IS_STRING = LDKF.isString(ArgumentA), ARGUMENT_B_IS_STRING = LDKF.isString(ArgumentB);

                        // Logic
                        if (ARGUMENT_A_IS_STRING && ARGUMENT_B_IS_STRING) {
                            // Constant > ((Argument (A, B)) (Length), Iterator)
                            var ARGUMENT_A_LENGTH = LDKF.stringPrototypeLength(ArgumentA), ARGUMENT_B_LENGTH = LDKF.stringPrototypeLength(ArgumentB);
                            var LENGTH = LDKM.min(ARGUMENT_A_LENGTH, ARGUMENT_B_LENGTH);
                            var iterator = +0;

                            // Loop
                            while (iterator ^ LENGTH) {
                                // Constant > Character (A, B) (Index)
                                var CHARACTER_A = LDKF.stringPrototypeCharacterAt(ARGUMENT_A, iterator), CHARACTER_B = LDKF.stringPrototypeCharacterAt(ARGUMENT_B, iterator);
                                var CHARACTER_A_INDEX = LDKF.arrayPrototypeIndex(LDKC.Strings.SortableCharacters, CHARACTER_A), CHARACTER_B_INDEX = LDKF.arrayPrototypeIndex(LDKC.Strings.SortableCharacters, CHARACTER_B);

                                // Logic > Return
                                if (CHARACTER_A_INDEX > CHARACTER_B_INDEX) return ArgumentA;
                                else if (CHARACTER_A_INDEX < CHARACTER_B_INDEX) return ArgumentB;

                                // Update > Iterator
                                iterator += 1
                            }

                            // Logic > Return
                            return ARGUMENT_A_LENGTH < ARGUMENT_B_LENGTH ? ARGUMENT_B : ARGUMENT_A
                        }
                        else if (ARGUMENT_A_IS_STRING)
                            // Return
                            return ArgumentA;

                        else if (ARGUMENT_B_IS_STRING)
                            // Return
                            return ArgumentB;

                        else {
                            // Constant > Argument (A, B) Is Null
                            var ARGUMENT_A_IS_NULL = LDKF.isNull(ArgumentA), ARGUMENT_B_IS_NULL = LDKF.isNull(ArgumentB);

                            // Logic > Return
                            if (!(ARGUMENT_A_IS_NULL || LDKF.isVoid(ArgumentA))) return ArgumentA;
                            else if (!(ARGUMENT_B_IS_NULL || LDKF.isVoid(ArgumentB))) return ArgumentB;
                            else if (ARGUMENT_A_IS_NULL) return ArgumentA;
                            else if (ARGUMENT_B_IS_NULL) return ArgumentB;
                            else return ArgumentA
                        }
                    }
                };
                LapysDevelopmentKit.Constants.Data.ArrayInsertionSort = function ArrayInsertionSort(Array, StartIndex, EndIndex, COMPARATOR, IMPERATIVE) {
                    // Update > (Comparator, Imperative)
                    COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                    IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                    // Initialization > Array Iterator
                    var arrayIterator = StartIndex + 1;

                    // Loop
                    while (arrayIterator ^ EndIndex) {
                        // Initialization > Array Index
                        var arrayIndex = arrayIterator - 1;

                        // Update > Temporary
                        TMP = IMPERATIVE.getIndex(Array, arrayIterator);

                        // Loop
                        while (COMPARATOR(IMPERATIVE.getIndex(Array, arrayIndex), TMP) === TMP && arrayIndex >= StartIndex) {
                            // Update > Array (Index)
                            IMPERATIVE.setIndex(Array, arrayIndex + 1, IMPERATIVE.getIndex(Array, arrayIndex));
                            arrayIndex -= 1
                        }

                        // Update > Array (Iterator)
                        IMPERATIVE.setIndex(Array, arrayIndex + 1, TMP);
                        arrayIterator += 1
                    }
                };
                LapysDevelopmentKit.Constants.Data.ArrayTimSort = function ArrayTimSort(Array, COMPARATOR, IMPERATIVE) {
                    // Update > (Comparator, Imperative)
                    COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                    IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                    // Constant > Array Length; Initialization > Array Iterator
                    var ARRAY_LENGTH = IMPERATIVE.getLength(Array);
                    var arrayIterator = +0;

                    // Loop > Update > Array (Iterator) --- NOTE (Lapys) -> Sort individual ranges of the array.
                    while (arrayIterator < ARRAY_LENGTH) { LDKC.Data.ArrayInsertionSort(Array, arrayIterator, LDKM.min(arrayIterator + (LDKC.Numbers.ArrayTimSortRun - 1), ARRAY_LENGTH - 1), STRICT = COMPARATOR, STRICT = IMPERATIVE); arrayIterator += LDKC.Numbers.ArrayTimSortRun }

                    var arraySize = LDKC.Numbers.ArrayTimSortRun;
                    while (arraySize < ARRAY_LENGTH) {
                        var arrayStartIndex = +0;

                        while (arrayStartIndex < ARRAY_LENGTH) {
                            var arraySplitIndex = arrayStartIndex + arraySize - 1;
                            var arrayEndIndex = LDKM.min((arrayStartIndex + (arraySize * 2)) - 1, ARRAY_LENGTH - 1);
                            LDKC.Data.ArrayTimSortMerge(Array, arrayStartIndex, arraySplitIndex, arrayEndIndex, STRICT = COMPARATOR, STRICT = IMPERATIVE);
                            arrayStartIndex += arraySize * 2
                        }

                        arraySize *= 2
                    }
                };
                    // UPDATE REQUIRED (Lapys) -> Currently inaccurate.
                    LapysDevelopmentKit.Constants.Data.ArrayTimSortMerge = function ArrayTimSortMerge(Array, StartIndex, SplitIndex, EndIndex, COMPARATOR, IMPERATIVE) {
                        // Update > (Comparator, Imperative)
                        COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                        // : Initialization > (End, Start) (Array) Iterator
                        // : Constant > (End, Start) Array (Length)
                        var arrayIterator, endArrayIterator = +0, startArrayIterator = StartIndex;
                        var END_ARRAY = [], END_ARRAY_LENGTH = EndIndex - SplitIndex;
                        var START_ARRAY = [], START_ARRAY_LENGTH = SplitIndex - StartIndex + 1;

                        // (Loop > )Update > (End, Start) Array (Iterator)
                        arrayIterator = +0; while (arrayIterator ^ START_ARRAY_LENGTH) { IMPERATIVE.setIndex(START_ARRAY, arrayIterator, IMPERATIVE.getIndex(Array, arrayIterator + StartIndex)); arrayIterator += 1 }
                        arrayIterator = +0; while (arrayIterator ^ END_ARRAY_LENGTH) { IMPERATIVE.setIndex(END_ARRAY, arrayIterator, IMPERATIVE.getIndex(Array, arrayIterator + 1 + SplitIndex)); arrayIterator += 1 }

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
                        while (arrayIterator ^ START_ARRAY_LENGTH) { IMPERATIVE.setIndex(Array, startArrayIterator, IMPERATIVE.getIndex(START_ARRAY, arrayIterator)); arrayIterator += 1; startArrayIterator += 1 }
                        while (endArrayIterator ^ END_ARRAY_LENGTH) { IMPERATIVE.setIndex(Array, startArrayIterator, IMPERATIVE.getIndex(END_ARRAY, endArrayIterator)); endArrayIterator += 1; startArrayIterator += 1 }
                    };

                // Numbers > ...
                LapysDevelopmentKit.Constants.Numbers.ArrayTimSortRun = 32;
                LapysDevelopmentKit.Constants.Numbers.FrameRate = 1000 / 60; // NOTE (Lapys) -> Lock-time controlled asynchronous processes to 60 frames a second.
                LapysDevelopmentKit.Constants.Numbers["Infinity"] = 1 / +0;
                LapysDevelopmentKit.Constants.Numbers.IntegerSize = 32; // NOTE (Lapys) -> 32-bits for JavaScript engines, but most implementations use 53 bits.
                LapysDevelopmentKit.Constants.Numbers.MaximumArrayLength = 4294967295; // -> (2 ** 32) - 1 --- NOTE (Lapys) -> Maximum length of array.
                LapysDevelopmentKit.Constants.Numbers.MaximumIntegerValue = 9007199254740991; // -> (2 ** 53) - 1
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
                LapysDevelopmentKit.Constants.Strings.HexadecimalDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
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
                    LapysDevelopmentKit.Functions.arrayLikePrototypeElementAt = function arrayLikePrototypeElementAt(ArrayLike, Index) {
                        // Logic > Return
                        if (ArrayLike instanceof LDKT.BigArray) return LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, ArrayLike, Index);
                        else if (LDKF.isArray(ArrayLike) || LDKF.isSourceBufferList(ArrayLike) || LDKF.isTextTrackCueList(ArrayLike) || LDKF.isTextTrackList(ArrayLike) || LDKF.isTypedArray(ArrayLike)) return ArrayLike[Index];
                        else if (LDKF.isMapVariant(ArrayLike)) return LDKF.mapVariantPrototypeElementAt(ArrayLike, Index);
                        else if (LDKF.isCSSNumericArray(ArrayLike)) return LDKF.cssNumericArrayPrototypeElementAt(ArrayLike, Index);
                        else if (LDKF.isCSSRuleList(ArrayLike)) return LDKF.cssRuleListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isCSSStyleDeclaration(ArrayLike)) return LDKF.cssStyleDeclarationPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isDOMRectList(ArrayLike)) return LDKF.domRectListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isDOMStringList(ArrayLike)) return LDKF.domStringListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isDOMTokenList(ArrayLike)) return LDKF.domTokenListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isFileList(ArrayLike)) return LDKF.fileListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isHTMLAllCollection(ArrayLike)) return LDKF.htmlAllCollectionPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isHTMLCollection(ArrayLike)) return LDKF.htmlCollectionPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isHTMLFormControlsCollection(ArrayLike)) return LDKF.htmlFormControlsCollectionPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isHTMLOptionsCollection(ArrayLike)) return LDKF.htmlOptionsCollectionPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isMediaList(ArrayLike)) return LDKF.mediaListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isMIMETypeArray(ArrayLike)) return LDKF.mimeTypeArrayPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isNamedNodeMap(ArrayLike)) return LDKF.namedNodeMapPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isNodeList(ArrayLike)) return LDKF.nodeListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isPluginArray(ArrayLike)) return LDKF.pluginArrayPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isRadioNodeList(ArrayLike)) return LDKF.radioNodeListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isSet(ArrayLike)) return LDKF.setPrototypeElementAt(ArrayLike, Index);
                        else if (LDKF.isStylePropertyMap(ArrayLike)) return LDKF.stylePropertyMapPrototypeElementAt(ArrayLike, Index);
                        else if (LDKF.isStyleSheetList(ArrayLike)) return LDKF.styleSheetListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.isSVGLengthList(ArrayLike)) return LDKF.svgLengthListPrototypeGetItem(ArrayLike, Index);
                        else if (LDKF.isSVGNumberList(ArrayLike)) return LDKF.svgNumberListPrototypeGetItem(ArrayLike, Index);
                        else if (LDKF.isSVGPointList(ArrayLike)) return LDKF.svgPointListPrototypeGetItem(ArrayLike, Index);
                        else if (LDKF.isSVGStringList(ArrayLike)) return LDKF.svgStringListPrototypeGetItem(ArrayLike, Index);
                        else if (LDKF.isSVGTransformList(ArrayLike)) return LDKF.svgTransformListPrototypeGetItem(ArrayLike, Index);
                        else if (LDKF.isTouchList(ArrayLike)) return LDKF.touchListPrototypeItem(ArrayLike, Index);
                        else if (LDKF.is_webkit_SpeechGrammerList(ArrayLike)) return LDKF._webkit_SpeechGrammarListPrototype(ArrayLike, Index)
                    };

                    // Set Index
                    LapysDevelopmentKit.Functions.arrayLikePrototypeSetIndex = function arrayLikePrototypeSetIndex(ArrayLike, Index, Value) {
                        // Logic > Return
                        if (ArrayLike instanceof LDKT.BigArray) return LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeSetIndex, ArrayLike, Index);
                        else if (LDKF.isArray(ArrayLike) || LDKF.isSourceBufferList(ArrayLike) || LDKF.isTextTrackCueList(ArrayLike) || LDKF.isTextTrackList(ArrayLike) || LDKF.isTypedArray(ArrayLike)) return (ArrayLike[Index] = Value);
                        else if (LDKF.isCSSStyleDeclaration(ArrayLike)) return LDKF.cssStyleDeclarationPrototypeSetIndex(ArrayLike, Index, Value);
                        else if (LDKF.isMap(ArrayLike)) return LDKF.mapPrototypeSetIndex(ArrayLike, Index, Value);
                        else if (LDKF.isSet(ArrayLike)) return LDKF.setPrototypeSetIndex(ArrayLike, Index, Value);
                        else if (LDKF.isStylePropertyMap(ArrayLike)) return LDKF.stylePropertyMapPrototypeSetIndex(ArrayLike, Index, Value);
                        else if (LDKF.isSVGLengthList(ArrayLike)) return LDKF.svgLengthListPrototypeReplaceItem(ArrayLike, Index, Value);
                        else if (LDKF.isSVGNumberList(ArrayLike)) return LDKF.svgNumberListPrototypeReplaceItem(ArrayLike, Index, Value);
                        else if (LDKF.isSVGPointList(ArrayLike)) return LDKF.svgPointListPrototypeReplaceItem(ArrayLike, Index, Value);
                        else if (LDKF.isSVGStringList(ArrayLike)) return LDKF.svgStringListPrototypeReplaceItem(ArrayLike, Index, Value);
                        else if (LDKF.isSVGTransformList(ArrayLike)) return LDKF.svgTransformListPrototypeReplaceItem(ArrayLike, Inde, Valuex)
                    };

                /* Array > Prototype
                        --- NOTE (Lapys) -> Imperatives assert how the specified array will be accessed/ modified.
                        --- WARN (Lapys) -> Not all methods use imperatives.
                */
                    // Clone --- NOTE (Lapys) -> Retroactively the standard for creating similar array-likes from another array-like`s constructor.
                    LapysDevelopmentKit.Functions.arrayPrototypeClone = function arrayPrototypeClone(Array, IS_EMPTY, IMPERATIVE) {
                        // Constant > Array Clone; Initialization > Array Iterator
                        var ARRAY_CLONE; var arrayIterator = IMPERATIVE.getLength(Array);

                        // Logic > ... > Update > Array Clone
                        if (Array instanceof LDKT.BigArray) ARRAY_CLONE = new LDKT.BigArray(null, Array.MAXIMUM_LENGTH);
                        else try { ARRAY_CLONE = new (LDKF.objectPrototypeConstructor(Array)) } catch (Error) { ARRAY_CLONE = [] }

                        // Logic
                        if (!IS_EMPTY) {
                            // Update > Array Clone
                            IMPERATIVE.setLength(ARRAY_CLONE, arrayIterator);

                            // Loop > Update > Array (Iterator, Clone)
                            while (arrayIterator) { arrayIterator -= 1; IMPERATIVE.setIndex(ARRAY_CLONE, arrayIterator, IMPERATIVE.getIndex(Array, arrayIterator)) }
                        }

                        // Return
                        return ARRAY_CLONE
                    };

                    // Count
                    LapysDevelopmentKit.Functions.arrayPrototypeCount = function arrayPrototypeCount(Array, Element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Array Length, Imperative)
                        ARRAY_LENGTH || (ARRAY_LENGTH = LDKF.arrayPrototypeLength(Array));
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                        // Logic
                        if (ARRAY_LENGTH) {
                            // Initialization > (Array Iterator, Element Count)
                            var arrayIterator = ARRAY_LENGTH, elementCount = +0;

                            // Loop > Update > Element Count
                            while (arrayIterator) (IMPERATIVE.getIndex(Array, arrayIterator -= 1) === Element) && (elementCount += 1);

                            // Return
                            return elementCount
                        }

                        else
                            // Return
                            return +0
                    };

                    // Includes
                    LapysDevelopmentKit.Functions.arrayPrototypeIncludes = function arrayPrototypeIncludes(Array, Element, ARRAY_LENGTH, IMPERATIVE) { return !!~LDKF.arrayPrototypeIndexFrom(Array, Element, STRICT = ARRAY_LENGTH, STRICT = IMPERATIVE) };

                    // Index
                    LapysDevelopmentKit.Functions.arrayPrototypeIndex = function arrayPrototypeIndex(Array, Element, ARRAY_LENGTH, IMPERATIVE) { return LDKF.arrayPrototypeIndexFrom(Array, Element, STRICT = ARRAY_LENGTH, STRICT = IMPERATIVE) };

                    // Index From
                    LapysDevelopmentKit.Functions.arrayPrototypeIndexFrom = function arrayPrototypeIndexFrom(Array, Element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Imperative, Array Length)
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                        // Logic
                        if (ARRAY_LENGTH) {
                            // : Constant > Gradient Stop Length
                            // : Initialization > Array Iterator
                            var GRADIENT_STOP_LENGTH = LDKM.int(ARRAY_LENGTH / 4);
                            var arrayIterator = ARRAY_LENGTH - ((GRADIENT_STOP_LENGTH * 3) - 1);

                            // Loop
                            while (arrayIterator) {
                                // Update > Array Iterator
                                arrayIterator -= 1;

                                // Logic > ... --- NOTE (Lapys) -> Each block here represents a stop index within the gradient search.
                                if (IMPERATIVE.getIndex(Array, ARRAY_LENGTH - arrayIterator) === Element) return ARRAY_LENGTH - arrayIterator;
                                else if (IMPERATIVE.getIndex(Array, ARRAY_LENGTH - GRADIENT_STOP_LENGTH - arrayIterator) === Element) return ARRAY_LENGTH - GRADIENT_STOP_LENGTH - arrayIterator;
                                else if (IMPERATIVE.getIndex(Array, arrayIterator + GRADIENT_STOP_LENGTH) === Element) return arrayIterator + GRADIENT_STOP_LENGTH;
                                else if (IMPERATIVE.getIndex(Array, arrayIterator) === Element) return arrayIterator
                            }
                        }

                        // Return
                        return -1
                    };

                    // Index From Back
                    LapysDevelopmentKit.Functions.arrayPrototypeIndexFromBack = function arrayPrototypeIndexFromBack(Array, Element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Array Length, Imperative)
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                        // : Initialization > Array Iterator
                        // : Loop > Logic > Return
                        var arrayIterator = ARRAY_LENGTH;
                        while (arrayIterator) if (IMPERATIVE.getIndex(Array, ARRAY_LENGTH - (arrayIterator -= 1) - 1) === Element) return ARRAY_LENGTH - arrayIterator - 1;

                        // Return
                        return -1
                    };

                    // Index From Front
                    LapysDevelopmentKit.Functions.arrayPrototypeIndexFromFront = function arrayPrototypeIndexFromFront(Array, Element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > Imperative
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);

                        // : Initialization > Array Iterator
                        // : Loop > Logic > Return
                        var arrayIterator = ARRAY_LENGTH || IMPERATIVE.getLength(Array);
                        while (arrayIterator) if (IMPERATIVE.getIndex(Array, arrayIterator -= 1) === Element) return arrayIterator;

                        // Return
                        return -1
                    };

                    // Insert At
                    LapysDevelopmentKit.Functions.arrayPrototypeInsertAt = function arrayPrototypeInsertAt(Array, Element, Index, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Imperative, Array Length)
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                        // Logic
                        if (ARRAY_LENGTH) {
                            // Initialization > Array Iterator
                            var arrayIterator = ARRAY_LENGTH + 1;

                            // (Loop > )Update > ...
                            IMPERATIVE.setLength(Array, ARRAY_LENGTH + 1);
                            while (arrayIterator ^ Index) { arrayIterator -= 1; IMPERATIVE.setIndex(Array, arrayIterator, IMPERATIVE.getIndex(Array, arrayIterator - 1)) }
                            IMPERATIVE.setIndex(Array, Index, Element)
                        }

                        else
                            // Update > Array
                            IMPERATIVE.setIndex(Array, +0, Element);

                        // Return
                        return Array
                    };

                    // Instance
                    LapysDevelopmentKit.Functions.arrayPrototypeInstance = function arrayPrototypeInstance(Array, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Imperative, Array Length)
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                        // Logic
                        if (ARRAY_LENGTH) {
                            // Initialization > Array (Indexed (Length), Instances, Iterator, ...)
                            var arrayIndexed = [], arrayIndexedLength = +0;
                            var arrayInstances = [];
                            var arrayIterator = ARRAY_LENGTH;

                            var instanceValueOf = function valueOf() { return this.element };

                            // Loop
                            while (arrayIterator) {
                                // Constant > Element
                                var ELEMENT = IMPERATIVE.getIndex(Array, arrayIterator -= 1);

                                // Logic
                                if (!LDKF.arrayPrototypeIncludes(arrayIndexed, ELEMENT, STRICT = arrayIndexedLength)) {
                                    // Update > Array Indexed
                                    arrayIndexed[arrayIndexedLength] = ELEMENT;
                                    arrayIndexedLength +=1;

                                    // Update > Array Instances
                                    LDKF.arrayPrototypePush(arrayInstances, {count: LDKF.arrayPrototypeCount(Array, ELEMENT, STRICT = ARRAY_LENGTH, STRICT = IMPERATIVE), element: ELEMENT, valueOf: instanceValueOf})
                                }
                            }

                            // Return
                            return arrayInstances
                        }

                        else
                            // Return
                            return {}
                    };

                    // Pop
                    LapysDevelopmentKit.Functions.arrayPrototypePop = function arrayPrototypePop(Array, ARRAY_LENGTH, IMPERATIVE) {
                        // Logic
                        if (ARRAY_LENGTH !== -0 || ARRAY_LENGTH !== +0) {
                            // Update > (Imperative, Array Length)
                            IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                            ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                            // Logic
                            if (ARRAY_LENGTH) {
                                // Constant > Popped Element
                                var POPPED_ELEMENT = IMPERATIVE.getIndex(Array, ARRAY_LENGTH - 1);

                                // Update > Array
                                IMPERATIVE.setLength(Array, ARRAY_LENGTH - 1);

                                // Return
                                return POPPED_ELEMENT
                            }
                        }

                        // Return
                        return +0
                    };

                    // Push
                    LapysDevelopmentKit.Functions.arrayPrototypePush = function arrayPrototypePush(Array, Element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Imperative, Array Length)
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                        // Update > Array
                        IMPERATIVE.setLength(Array, ARRAY_LENGTH + 1);
                        IMPERATIVE.setIndex(Array, ARRAY_LENGTH, Element);

                        // Return --- NOTE (Lapys) -> Assume array-like `push` methods are standard.
                        return ARRAY_LENGTH + 1
                    };

                    // Shift
                    LapysDevelopmentKit.Functions.arrayPrototypeShift = function arrayPrototypeShift(Array, ARRAY_LENGTH, IMPERATIVE) {
                        // Logic
                        if (ARRAY_LENGTH !== -0 || ARRAY_LENGTH !== +0) {
                            // Update > (Imperative, Array Length)
                            IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                            ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                            // Logic
                            if (ARRAY_LENGTH) {
                                // Constant > Shifted Element
                                var SHIFTED_ELEMENT = IMPERATIVE.getIndex(Array, +0);

                                // Initialization > Array Iterator
                                var arrayIterator = ARRAY_LENGTH;

                                // (Loop > )Update > Array
                                while (arrayIterator -= 1) IMPERATIVE.setIndex(Array, ARRAY_LENGTH - arrayIterator - 1, IMPERATIVE.getIndex(Array, ARRAY_LENGTH - arrayIterator));
                                IMPERATIVE.setLength(Array, ARRAY_LENGTH - 1);

                                // Return
                                return SHIFTED_ELEMENT
                            }
                        }

                        // Return
                        return +0
                    };

                    /* Sort
                            --- NOTE (Lapys) -> Utilizes the TimSort [https://en.wikipedia.org/wiki/Timsort] algorithm.
                            --- WARN (Lapys) -> The `SORT_TYPE` flag only denotes the comparator to be used when sorting (the `COMPARATOR` argument).
                                In the case of `NATIVE_SORT`-ing, the array specified will not have any `ArrayImperative` data on it.
                    */
                    LapysDevelopmentKit.Functions.arrayPrototypeSort = function arrayPrototypeSort(Array, SORT_TYPE, COMPARATOR, IMPERATIVE) {
                        // Logic
                        switch (SORT_TYPE) {
                            /*
                                : [ASCII Sort] --- NOTE (Lapys) -> Changes the comparator to prefer ASCII code precedence.
                                : [Native Sort] --- NOTE (Lapys) -> Uses the native sorting algorithm proffered.
                            */
                            case LDKC.Data.ArraySortType["ASCII_SORT"]: return LDKF.arrayPrototypeSort(Array, STRICT = LDKC.Data.ArraySortType["CUSTOM_SORT"], STRICT = LDKC.Data.ArrayASCIISortComparator, STRICT = IMPERATIVE);
                            case LDKC.Data.ArraySortType["NATIVE_SORT"]: return LDKF.functionPrototypeNiladicCall(LDKO.arrayPrototypeSort, Array); break;

                            // [Custom Sort] --- NOTE (Lapys) -> Defaults to the library`s chosen comparator & sorting algorithm.
                            default: case LDKC.Data.ArraySortType["CUSTOM_SORT"]:
                                // Update > (Array, Comparator, Imperative)
                                COMPARATOR || (COMPARATOR = LDKC.Data.ArrayCustomSortComparator);
                                IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                                LDKC.Data.ArrayTimSort(Array, STRICT = COMPARATOR, STRICT = IMPERATIVE);

                                // Return
                                return Array
                        }
                    };

                    // Unshift
                    LapysDevelopmentKit.Functions.arrayPrototypeUnshift = function arrayPrototypeUnshift(Array, Element, ARRAY_LENGTH, IMPERATIVE) {
                        // Update > (Imperative, Array Length)
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        ARRAY_LENGTH || (ARRAY_LENGTH = IMPERATIVE.getLength(Array));

                        // Logic
                        if (ARRAY_LENGTH) {
                            // Update > Array
                            IMPERATIVE.setLength(Array, ARRAY_LENGTH + 1);
                            IMPERATIVE.setIndex(Array, ARRAY_LENGTH, IMPERATIVE.getIndex(Array, ARRAY_LENGTH - 1));

                            // Initialization > Array Iterator; Update > Array
                            var arrayIterator = ARRAY_LENGTH;
                            while (arrayIterator ^ 1) IMPERATIVE.setIndex(Array, arrayIterator -= 1, IMPERATIVE.getIndex(Array, arrayIterator - 1));
                        }

                        // Update > Array
                        IMPERATIVE.setIndex(Array, +0, Element);

                        // Return --- NOTE (Lapys) -> Assume array-like `push` methods are standard.
                        return ARRAY_LENGTH + 1
                    };

                // CSS Numeric Array > Prototype
                    // Element At
                    LapysDevelopmentKit.Functions.cssNumericArrayPrototypeElementAt = function cssNumericArrayPrototypeElementAt(CSSNumericArray, index) {
                        // Logic
                        if (index < LDKF.cssNumericArrayPrototypeLength(CSSNumericArray)) {
                            // Initialization > Element; Constant > Array Iterator
                            var element = undefined; var ARRAY_ITERATOR = LDKF.cssNumericArrayPrototypeEntries(CSSNumericArray);

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
                    LapysDevelopmentKit.Functions.cssStyleDeclarationPrototypeSetIndex = function cssStyleDeclarationPrototypeSetIndex(CSSStyleDeclaration, Index, Value) { (Index < LDKF.cssStyleDeclarationPrototypeLength(CSSStyleDeclaration)) && LDKF.cssStyleDeclarationPrototypeSetProperty(LDKF.cssStyleDeclarationPrototypeItem(CSSStyleDeclaration, Index), Value) };

                // Digit --- NOTE (Lapys) -> The global variable `TMP` represents the carry flag.
                    // Add
                    LapysDevelopmentKit.Functions.digitAdd = function digitAdd(DigitA, DigitB, BASE) {
                        // Update > Base
                        BASE || (BASE = 10);

                        // : Initialization > Addition
                        // : Constant > Digits
                        var addition;
                        var DIGITS = LDKF.getDigitsFromBase(BASE);

                        var DIGIT_A_ENDIAN = LDKF.arrayPrototypeIndex(DIGITS, DigitA, STRICT = BASE);
                        var DIGIT_B_ENDIAN = LDKF.arrayPrototypeIndex(DIGITS, DigitB, STRICT = BASE);

                        // Logic > Update > (Addition, ...)
                        if (DIGIT_A_ENDIAN + DIGIT_B_ENDIAN < BASE) { addition = DIGITS[DIGIT_A_ENDIAN + DIGIT_B_ENDIAN]; TMP = false }
                        else { addition = DIGITS[(DIGIT_A_ENDIAN + DIGIT_B_ENDIAN) - BASE]; TMP = true }

                        // Return
                        return addition
                    };

                    // Divide
                    // Increment
                    LapysDevelopmentKit.Functions.digitIncrement = function digitIncrement(Digit, BASE) {
                        // Update > Base
                        BASE || (BASE = 10);

                        // Constant > (Digits, Digit Endian)
                        var DIGITS = LDKF.getDigitsFromBase(BASE);
                        var DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(DIGITS, Digit, STRICT = BASE);

                        // Logic > ...
                        if (DIGIT_ENDIAN + 1 == BASE) { TMP = true; return DIGITS[+0] }
                        else { TMP = false; return DIGITS[DIGIT_ENDIAN + 1] }
                    };

                    // Multiply
                    // Subtract

                // Digits
                    // Add --- WARN (Lapys) -> Can not perform source addition.
                    LapysDevelopmentKit.Functions.digitsAdd = function digitsAdd(DigitsA, DigitsB, BASE, IMPERATIVE, COMPONENT) {
                        // Update > (Base, Component, Imperative, ...)
                        BASE || (BASE = 10);
                        COMPONENT || (COMPONENT = LDKC.Data.NumberComponent["CHARACTERISTICS"]);
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.ArrayImperative);
                        TMP = false;

                        // Initialization > (Addition, ...)
                        var addition;
                        var digitsALength = IMPERATIVE.getLength(DigitsA), digitsBLength = IMPERATIVE.getLength(DigitsB);
                        var smallerDigits, smallerDigitsLengthDifference;

                        // Constant > (Base Digits, ...)
                        var BASE_DIGITS = LDKF.getDigitsFromBase(BASE);
                        var LAST_BASE_DIGIT = BASE_DIGITS[BASE - 1];

                        // Logic
                        if (digitsALength ^ digitsBLength) {
                            // Initialization > Digits Length Difference
                            var digitsLengthDifference = digitsALength - digitsBLength;

                            // Logic > Update > ...
                            if (digitsLengthDifference < +0) { digitsLengthDifference = -digitsLengthDifference; smallerDigits = DigitsA }
                            else smallerDigits = DigitsB;

                            // Update > Smaller Digits Length Difference
                            smallerDigitsLengthDifference = digitsLengthDifference;

                            // Loop --- NOTE (Lapys) -> Pad the digits to be of equal length.
                            while (digitsLengthDifference) {
                                // Update > Digits Length Difference
                                digitsLengthDifference -= 1;

                                // Logic > Update > Smaller Digits
                                switch (COMPONENT) {
                                    case LDKC.Data.NumberComponent["CHARACTERISTICS"]: LDKF.arrayPrototypeUnshift(smallerDigits, '0', STRICT = null, STRICT = IMPERATIVE); break;
                                    case LDKC.Data.NumberComponent["MANTISSA"]: LDKF.arrayPrototypePush(smallerDigits, '0', STRICT = null, STRICT = IMPERATIVE)
                                }
                            }

                            // Update > Digits (A | B) Length
                            smallerDigits === DigitsA ? digitsALength += smallerDigitsLengthDifference : digitsBLength += smallerDigitsLengthDifference
                        }

                        // Initialization > Iterator
                        var iterator = digitsALength || digitsBLength;

                        // Update > Addition
                        addition = LDKF.arrayPrototypeClone(DigitsA || DigitsB, STRICT = true, STRICT = IMPERATIVE);
                        IMPERATIVE.setLength(addition, iterator);

                        // Loop
                        while (iterator) {
                            // : Update > Iterator
                            // : Initialization > Digit (A, B)
                            iterator -= 1;
                            var digitA = IMPERATIVE.getIndex(DigitsA, iterator), digitB = IMPERATIVE.getIndex(DigitsB, iterator);

                            // Logic > Update > (Addition, ...)
                            if (digitA === LAST_BASE_DIGIT && TMP) IMPERATIVE.setIndex(addition, iterator, digitB, STRICT = BASE);
                            else if (digitB === LAST_BASE_DIGIT && TMP) IMPERATIVE.setIndex(addition, iterator, digitA, STRICT = BASE);
                            else { TMP && (digitA = LDKF.digitIncrement(digitA)); IMPERATIVE.setIndex(addition, iterator, LDKF.digitAdd(digitA, digitB), STRICT = BASE) }
                        }

                        // Loop --- NOTE (Lapys) -> Reset the digits to their original length.
                        while (smallerDigitsLengthDifference) {
                            // Update > Smaller Digits Length Difference
                            smallerDigitsLengthDifference -= 1;

                            // Logic > Update > Smaller Digits
                            switch (COMPONENT) {
                                case LDKC.Data.NumberComponent["CHARACTERISTICS"]: LDKF.arrayPrototypeShift(smallerDigits, STRICT = null, STRICT = IMPERATIVE); break;
                                case LDKC.Data.NumberComponent["MANTISSA"]: LDKF.arrayPrototypePop(smallerDigits, STRICT = null, STRICT = IMPERATIVE)
                            }
                        }

                        // Return
                        return addition
                    };

                    // Compare
                    // Divide
                    // Increment
                    LapysDevelopmentKit.Functions.digitsIncrement = function digitsIncrement(Digits, BASE, IMPERATIVE) {
                        // Update > (Base, Imperative, ...)
                        BASE || (BASE = 10);
                        IMPERATIVE || (IMPERATIVE = LDKC.Data.BigArrayImperative);
                        TMP = false;

                        // Initialization > Digits Iterator
                        var digitsIterator = IMPERATIVE.getLength(Digits);

                        // Logic
                        if (digitsIterator)
                            // Loop > Update > Digits (Iterator)
                            do { digitsIterator -= 1; IMPERATIVE.setIndex(Digits, digitsIterator, LDKF.digitIncrement(IMPERATIVE.getIndex(Digits, digitsIterator), STRICT = BASE)) }
                            while (digitsIterator && TMP);

                        // Return
                        return Digits
                    };

                    // Modulo
                    // Multiply
                    // Power
                    // Subtract

                // Evaluate
                LapysDevelopmentKit.Functions["eval"] = function evaluate(Source, STRICT_EVALUATION) { STRICT_EVALUATION || (Source = "(function() { return " + Source + " })()"); return LDKF.functionPrototypeMonoadicCall(LDKO.eval, GLOBAL, Source) };

                /* Function > Prototype
                        --- WARN ---
                            #Lapys:
                                - The `LapysDevelopmentKit.Functions.functionPrototypeApply` method references the non spoof-proof method `Function.prototype.apply.call`.
                                - The `LapysDevelopmentKit.Functions.functionPrototype...Call` method references the non spoof-proof method `Function.prototype.call.call`.
                                    - Each method does not have its asynchronous counterpart as it is not deemed necessary as of writing.
                */
                    // Apply
                    LapysDevelopmentKit.Functions.functionPrototypeApply = function functionPrototypeApply(Routine, That, ArgumentListObject) { return ArgumentListObject ? LDKO.functionPrototypeApply.call(Routine, That, ArgumentListObject) : LDKO.functionPrototypeApply.call(Routine, That) };

                    // Asynchronous Apply
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousApply = function functionPrototypeAsynchronousApply(Routine, That, ArgumentListObject) { var ANIMATION_FRAME_ID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(ANIMATION_FRAME_ID); LDKF.functionPrototypeApply(Routine, That, ArgumentListObject) }) };

                    // Asynchronous Call
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousCall = function functionPrototypeAsynchronousCall(Routine, That, Argument) { var ARGUMENT_LIST = arguments, ANIMATION_FRAME_ID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(ANIMATION_FRAME_ID); LDKF.functionPrototypeApply(LDKF.functionPrototypeCall, LDKF, ARGUMENT_LIST) }) };

                    // Asynchronous Dyadic Call
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousDyadicCall = function functionPrototypeAsynchronousDyadicCall(Routine, That, ArgumentA, ArgumentB) { var ANIMATION_FRAME_ID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(ANIMATION_FRAME_ID); LDKF.functionPrototypeDyadicCall(Routine, That, ArgumentA, ArgumentB) }) };

                    // Asynchronous Monadic Call
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousMonoadicCall = function functionPrototypeAsynchronousMonoadicCall(Routine, That, Argument) { var ANIMATION_FRAME_ID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(ANIMATION_FRAME_ID); LDKF.functionPrototypeMonoadicCall(Routine, That, Argument) }) };

                    // Asynchronous Niladic Call
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousNiladicCall = function functionPrototypeAsynchronousNiladicCall(Routine, That) { var ANIMATION_FRAME_ID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(ANIMATION_FRAME_ID); LDKF.functionPrototypeNiladicCall(Routine, That) }) };

                    // Asynchronous Triadic Call
                    LapysDevelopmentKit.Functions.functionPrototypeAsynchronousTriadicCall = function functionPrototypeAsynchronousTriadicCall(Routine, That, ArgumentA, ArgumentB, ArgumentC) { var ANIMATION_FRAME_ID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(ANIMATION_FRAME_ID); LDKF.functionPrototypeTriadicCall(Routine, That, ArgumentA, ArgumentB, ArgumentC) }) };

                    // Body --- CHECKPOINT (Lapys)

                    // Call --- WARN (Lapys) -> Semantics only. Less redundant to use the `LapysDevelopmentKit.Functions.functionPrototypeAsynchronousApply` method instead.
                    LapysDevelopmentKit.Functions.functionPrototypeCall = function functionPrototypeCall(Routine, That, Argument) {
                        // Constant > Arguments Length
                        var ARGUMENTS_LENGTH = LDKF.getArgumentsLength(arguments);

                        // Logic > ...
                        if (ARGUMENTS_LENGTH) { var argumentsIterator = LDKM.max(+0, LDKF.getArgumentsLength(arguments) - 2); var ARGUMENT_LIST = [Argument]; while (argumentsIterator -= 1) { ARGUMENT_LIST[argumentsIterator] = arguments[argumentsIterator + 2] } return LDKF.functionPrototypeApply(Routine, That, ARGUMENT_LIST) }
                        else return LDKF.functionPrototypeNiladicCall(Routine, That)
                    };

                    // Dyadic Call
                    LapysDevelopmentKit.Functions.functionPrototypeDyadicCall = function functionPrototypeDyadicCall(Routine, That, ArgumentA, ArgumentB) { return LDKO.functionPrototypeCall.call(Routine, That, ArgumentA, ArgumentB) };

                    // Head --- CHECKPOINT (Lapys)
                    // Is Arrow Function --- CHECKPOINT (Lapys)
                    // Is Asynchronous Function --- CHECKPOINT (Lapys)
                    // Is Asynchronous Generator Function --- CHECKPOINT (Lapys)
                    // Is Generator Function --- CHECKPOINT (Lapys)
                    // Is Native Function --- CHECKPOINT (Lapys)

                    // Monoadic Call
                    LapysDevelopmentKit.Functions.functionPrototypeMonoadicCall = function functionPrototypeMonoadicCall(Routine, That, Argument) { return LDKO.functionPrototypeCall.call(Routine, That, Argument) };

                    // Niladic Call
                    LapysDevelopmentKit.Functions.functionPrototypeNiladicCall = function functionPrototypeNiladicCall(Routine, That) { return LDKO.functionPrototypeCall.call(Routine, That) };

                    // Parameters --- CHECKPOINT (Lapys)
                    // Parameter Source --- CHECKPOINT (Lapys)
                    // To Source String --- CHECKPOINT (Lapys)
                    // To String --- CHECKPOINT (Lapys)

                    // Triadic Call
                    LapysDevelopmentKit.Functions.functionPrototypeTriadicCall = function functionPrototypeTriadicCall(Routine, That, ArgumentA, ArgumentB, ArgumentC) { return LDKO.functionPrototypeCall.call(Routine, That, ArgumentA, ArgumentB, ArgumentC) };

                /* Get Digits From Base
                        --- MINIFY (Lapys)
                        --- WARN ---
                            #Lapys:
                                - Non-common radixes are assumed to use alphanumeric digits.
                                - This method does not recognize a myriad of non-standard number systems (e.g.: The sexagesimal number system).
                */
                LapysDevelopmentKit.Functions.getDigitsFromBase = function getDigitsFromBase(base) { switch (base) { case 2: return LDKC.Strings.BinaryDigits; case 8: return LDKC.Strings.OctalDigits; case 10: return LDKC.Strings.DecimalDigits; case 16: return LDKC.Strings.HexadecimalDigits; default: var DIGITS = []; if (base == 1 || base == 3 || base == 4 || base == 5 || base == 7 || base == 9) while (base) { base -= 1; switch (base) { case -0: case +0: DIGITS[base] = '0'; break; case 1: DIGITS[base] = '1'; break; case 2: DIGITS[base] = '2'; break; case 3: DIGITS[base] = '3'; break; case 4: DIGITS[base] = '4'; break; case 5: DIGITS[base] = '5'; break; case 6: DIGITS[base] = '6'; break; case 7: DIGITS[base] = '7'; break; case 8: DIGITS[base] = '8'; break; case 9: DIGITS[base] = '9' } } else if (base < 37) { var ALPHABET_DIGIT_COUNT = 26, DECIMAL_DIGIT_COUNT = 10; var alphabetDigitIterator = ALPHABET_DIGIT_COUNT, decimalDigitIterator = DECIMAL_DIGIT_COUNT; var digitsLength = +0; while (base) { base -= 1; decimalDigitIterator ? DIGITS[digitsLength] = LDKC.Strings.DecimalDigits[DECIMAL_DIGIT_COUNT - (decimalDigitIterator -= 1) - 1] : DIGITS[digitsLength] = LDKC.Strings.UppercaseAlphabets[ALPHABET_DIGIT_COUNT - (alphabetDigitIterator -= 1) - 1]; digitsLength += 1 } } return DIGITS } };

                // Is Big Integer
                LapysDevelopmentKit.Functions.isBigInt = function isBigInt(Argument) { return typeof Argument == "bigint" };

                // Is Boolean
                LapysDevelopmentKit.Functions.isBoolean = function isBoolean(Argument) { return typeof Argument == "boolean" };

                // Is Constructible
                LapysDevelopmentKit.Functions.isConstructible = function isConstructible(Argument) { return !LDKF.isNull(Argument) && !LDKF.isVoid(Argument) };

                // Is Map-Variant
                LapysDevelopmentKit.Functions.isMapVariant = function isMapVariant(Argument) { return LDKF.isAudioParamMap(arrayLike) || LDKF.isMap(arrayLike) || LDKF.isMediaKeyStatusMap(arrayLike) || LDKF.isMIDIInputMap(arrayLike) || LDKF.isMIDIOutputMap(arrayLike) };

                // Is Null
                LapysDevelopmentKit.Functions.isNull = function isNull(Argument) { return Argument === null };

                // Is Number
                LapysDevelopmentKit.Functions.isNumber = function isNumber(Argument) { return typeof Argument == "number" };

                // Is Symbol
                LapysDevelopmentKit.Functions.isSymbol = function isSymbol(Argument) { return typeof Argument == "symbol" };

                // Is Void --- WARN (Lapys) -> `HTMLAllCollection` objects are asserted as `true`.
                LapysDevelopmentKit.Functions.isVoid = function isVoid(Argument) { return typeof Argument == "undefined" };

                // Map > Prototype
                LapysDevelopmentKit.Functions.mapPrototypeSetIndex = function mapPrototypeSetIndex(Map, index, Value) {
                    // Logic
                    if (index < LDKF.mapPrototypeSize(Map)) {
                        // Initialization > Element; Constant > Map Iterator
                        var element = undefined; var MAP_ITERATOR = LDKF.mapPrototypeEntries(Map);

                        // Loop > Update > (Element, Index)
                        while (index) { element = MAP_ITERATOR.next().value; index -= 1 }

                        // Return
                        return LDKF.mapPrototypeSet(Map, element[+0], Value)
                    }

                    else
                        // Return
                        return undefined
                };

                // Map-Variant > Prototype > Element At
                LapysDevelopmentKit.Functions.mapVariantPrototypeElementAt = function mapVariantPrototypeElementAt(MapVariant, Index) {
                    // Logic
                    if (Index < LDKF.mapPrototypeSize(MapVariant)) {
                        // Initialization > Element; Constant > Map Iterator
                        var element = undefined; var MAP_ITERATOR = LDKF.mapPrototypeEntries(MapVariant);

                        // Loop > Update > (Element, Index)
                        while (Index) { element = MAP_ITERATOR.next().value; Index -= 1 }

                        // Return
                        return element[1]
                    }

                    else
                        // Return
                        return undefined
                };

                // Number > Prototype
                    // Is Finite
                    LapysDevelopmentKit.Functions.numberPrototypeIsFinite = function numberPrototypeIsFinite(Number) { return Number !== LDKC.Numbers["Infinity"] && Number !== -LDKC.Numbers["Infinity"] };

                    // Is Integer
                    LapysDevelopmentKit.Functions.numberPrototypeIsInteger = function numberPrototypeIsInteger(Number) { return Number === LDKM.int(Number) };

                    // Is Not-A-Number
                    LapysDevelopmentKit.Functions.numberPrototypeIsNaN = function numberPrototypeIsNaN(Number) { return Number !== Number };

                    // Is Overflown
                    LapysDevelopmentKit.Functions.numberPrototypeIsOverflown = function numberPrototypeIsOverflown(Number) { return Number >= LDKC.Numbers.MaximumIntegerValue || Number <= -LDKC.Numbers.MaximumIntegerValue };

                    // Is Safe --- NOTE (Lapys) -> Numbers redacted to scientific notation in string form are implicitly also not safe.
                    LapysDevelopmentKit.Functions.numberPrototypeIsSafe = function numberPrototypeIsSafe(Number) { return LDKF.numberPrototypeIsFinite(Number) && !LDKF.numberPrototypeIsNaN(Number) && !LDKF.numberPrototypeIsOverflown(Number) };

                // Object > Prototype
                    // Constructor --- CHECKPOINT (Lapys)
                    LapysDevelopmentKit.Functions.objectPrototypeConstructor = function objectPrototypeConstructor(Object) { return Object.constructor };

                    // Has Own Property
                    LapysDevelopmentKit.Functions.objectPrototypeHasOwnProperty = function objectPrototypeHasOwnProperty(Object, PropertyIdentifier) { return LDKF.functionPrototypeMonoadicCall(LDKO.objectPrototypeHasOwnProperty, Object, PropertyIdentifier) };

                // Set > Prototype
                    // Element At
                    LapysDevelopmentKit.Functions.setPrototypeElementAt = function setPrototypeElementAt(Set, index) {
                        // Logic
                        if (index < LDKF.setPrototypeSize(Set)) {
                            // Initialization > Element; Constant > Set Iterator
                            var element = undefined; var SET_ITERATOR = LDKF.setPrototypeEntries(Set);

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
                    LapysDevelopmentKit.Functions.setPrototypeSetIndex = function setPrototypeSetIndex(Set, index, Value) {
                        // Logic
                        if (index < LDKF.setPrototypeSize(Set)) {
                            // Initialization > Element; Constant > Set Iterator
                            var element = undefined; var SET_ITERATOR = LDKF.setPrototypeEntries(Set);

                            // Loop > Update > (Element, Index)
                            while (index) { element = SET_ITERATOR.next().value; index -= 1 }

                            // Deletion; Update > Array-Like
                            LDKF.setPrototypeDelete(Set, element[1]);
                            LDKF.setPrototypeAdd(Set, Value)
                        }
                    };

                // String
                    // Assert As Source --- CONSIDERATION (Lapys) -> Should there be an assertion method?
                    // Parse As Source [Tokens] --- WARN (Lapys) -> These methods do not assert the source to be valid.
                    LapysDevelopmentKit.Functions.stringParseAsSource = function stringParseAsSource(Source, SourceType, SOURCE_LENGTH) {
                        // Logic > Return
                        switch (SourceType || LDKC.Data.SourceTypes["javascript"]) {
                            case LDKC.Data.SourceTypes["css"]: return LDKF.stringParseCSSSource(Source, STRICT = SOURCE_LENGTH);
                            case LDKC.Data.SourceTypes["html"]: return LDKF.stringParseHTMLSource(Source, STRICT = SOURCE_LENGTH);
                            case LDKC.Data.SourceTypes["javascript"]: return LDKF.stringParseJavaScriptSource(Source, STRICT = SOURCE_LENGTH);
                            default: return []
                        }
                    };
                        // CSS
                        LapysDevelopmentKit.Functions.stringParseCSSSource = function stringParseCSSSource(Source, SOURCE_LENGTH) {};

                        // HTML
                        LapysDevelopmentKit.Functions.stringParseHTMLSource = function stringParseHTMLSource(Source, SOURCE_LENGTH) {};

                        // JavaScript
                        LapysDevelopmentKit.Constants.Data.StringSourceTokenDelimiters = new LDKT.Enumeration("curly-braces", "double-quoted-string", "multiline-comment", "parenthesis", "regular-expression", "single-quoted-string", "singleline-comment", "square-braces", "template-string");

                        LapysDevelopmentKit.Functions.stringParseJavaScriptSource = function stringParseJavaScriptSource(Source, SOURCE_LENGTH) {
                            // Update > Source Length
                            SOURCE_LENGTH || (SOURCE_LENGTH = LDKF.stringPrototypeLength(Source));

                            // Constant > (Tokens, ...)
                            var TOKEN_DELIMITERS = LapysDevelopmentKit.Constants.Data.StringSourceTokenDelimiters;
                            var TOKENS = [];

                            // Initialization > (Current Token, ...) --- NOTE (Lapys) -> Parse the source`s tokens.
                            var currentToken = new LDKT.Token; // NOTE (Lapys) -> The first token is actually the source itself.
                            var tokenDelimiterHierarchy = [], tokenDelimiterHierarchyDepth = +0;

                            // Initialization > Source Iterator; Loop
                            var sourceIterator = SOURCE_LENGTH;
                            while (sourceIterator) {
                                // Constant > Character
                                var CHARACTER = LDKF.stringPrototypeCharacterAt(Source, SOURCE_LENGTH - (sourceIterator -= 1) - 1);

                                // Initialization > (Current (Super Token, Token Delimiter), Next Token)
                                var currentSupertoken = currentToken.supertoken;
                                var currentTokenDelimiter = tokenDelimiterHierarchyDepth ? tokenDelimiterHierarchy[tokenDelimiterHierarchyDepth - 1] : +null;

                                var nextToken = currentToken;
                                var nextTokenDelimiter = currentTokenDelimiter;
                                var nextTokenDelimiterCharacterSequence = null;

                                if (!(
                                    currentTokenDelimiter == TOKEN_DELIMITERS["double-quoted-string"] ||
                                    currentTokenDelimiter == TOKEN_DELIMITERS["multiline-comment"] ||
                                    currentTokenDelimiter == TOKEN_DELIMITERS["regular-expression"] ||
                                    currentTokenDelimiter == TOKEN_DELIMITERS["single-quoted-string"] ||
                                    currentTokenDelimiter == TOKEN_DELIMITERS["singleline-comment"] ||
                                    currentTokenDelimiter == TOKEN_DELIMITERS["template-string"]
                                ))
                                    if (CHARACTER == '"') { nextTokenDelimiter = TOKEN_DELIMITERS["double-quoted-string"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (CHARACTER == '\'') { nextTokenDelimiter = TOKEN_DELIMITERS["single-quoted-string"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (CHARACTER == '(') { nextTokenDelimiter = TOKEN_DELIMITERS["parenthesis"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (
                                        CHARACTER == '/' &&
                                        (
                                            sourceIterator && (
                                                LDKF.stringPrototypeCharacterAt(Source, SOURCE_LENGTH - sourceIterator) != '*' &&
                                                LDKF.stringPrototypeCharacterAt(Source, SOURCE_LENGTH - sourceIterator) != '/'
                                            )
                                        )
                                    ) { nextTokenDelimiter = TOKEN_DELIMITERS["regular-expression"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (CHARACTER == '[') { nextTokenDelimiter = TOKEN_DELIMITERS["square-braces"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (CHARACTER == '`') { nextTokenDelimiter = TOKEN_DELIMITERS["template-string"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (CHARACTER == '{') { nextTokenDelimiter = TOKEN_DELIMITERS["curly-braces"]; nextTokenDelimiterCharacterSequence = CHARACTER }
                                    else if (CHARACTER == '*' && LDKF.stringPrototypeCharacterAt(Source, SOURCE_LENGTH - sourceIterator - 2) == '/') { nextTokenDelimiter = TOKEN_DELIMITERS["multiline-comment"]; nextTokenDelimiterCharacterSequence = "/*" }
                                    else if (CHARACTER == '/' && LDKF.stringPrototypeCharacterAt(Source, SOURCE_LENGTH - sourceIterator - 2) == '/') { nextTokenDelimiter = TOKEN_DELIMITERS["singleline-comment"]; nextTokenDelimiterCharacterSequence = "//" }

                                if (!LDKF.isNull(nextTokenDelimiterCharacterSequence)) {
                                    var subtoken = new LDKT.Token;

                                    currentToken.addSubtoken(subtoken);
                                    subtoken.source = nextTokenDelimiterCharacterSequence;
                                    nextToken = subtoken;

                                    tokenDelimiterHierarchy[tokenDelimiterHierarchyDepth] = nextTokenDelimiter;
                                    tokenDelimiterHierarchyDepth += 1
                                }

                                else if (
                                    (CHARACTER == '}' && currentTokenDelimiter == TOKEN_DELIMITERS["curly-braces"]) ||
                                    (CHARACTER == ')' && currentTokenDelimiter == TOKEN_DELIMITERS["parenthesis"]) ||
                                    (CHARACTER == ']' && currentTokenDelimiter == TOKEN_DELIMITERS["square-braces"]) ||

                                    (CHARACTER == '\n' && currentTokenDelimiter == TOKEN_DELIMITERS["singleline-comment"]) ||
                                    ((CHARACTER == '/' && LDKF.stringPrototypeCharacterAt(Source, SOURCE_LENGTH - sourceIterator - 2) == '*') && currentTokenDelimiter == TOKEN_DELIMITERS["multiline-comment"])
                                ) {
                                    nextToken = currentToken.supertoken;
                                    tokenDelimiterHierarchyDepth -= 1
                                }

                                else if (
                                    (CHARACTER == '"' && currentTokenDelimiter == TOKEN_DELIMITERS["double-quoted-string"]) ||
                                    (CHARACTER == '`' && currentTokenDelimiter == TOKEN_DELIMITERS["regular-expression"]) ||
                                    (CHARACTER == '\'' && currentTokenDelimiter == TOKEN_DELIMITERS["single-quoted-string"]) ||
                                    (CHARACTER == '`' && currentTokenDelimiter == TOKEN_DELIMITERS["template-string"])
                                ) {
                                    var CHARACTER_IS_ESCAPED = false;

                                    var iterator = SOURCE_LENGTH - sourceIterator - 1;
                                    while (iterator) {
                                        iterator -= 1;
                                        LDKF.stringPrototypeCharacterAt(Source, iterator) == '\\' ? CHARACTER_IS_ESCAPED = !CHARACTER_IS_ESCAPED : iterator = +0
                                    }

                                    if (!CHARACTER_IS_ESCAPED) {
                                        nextToken = currentToken.supertoken;
                                        tokenDelimiterHierarchyDepth -= 1
                                    }
                                }

                                // (Loop > )Modification > [Token] > Source
                                currentToken.source += CHARACTER;
                                while (!LDKF.isNull(currentSupertoken)) { currentSupertoken.source += CHARACTER; currentSupertoken = currentSupertoken.supertoken }

                                // Update > Current Token
                                currentToken = nextToken
                            }

                            // Update > Current Token
                            (currentToken.source == Source) || (currentToken = currentToken.supertoken);

                            // Constant > Current Token Subtokens --- NOTE (Lapys) -> After parsing, the current token becomes the first ancestor/ god token that was initialized.
                            var CURRENT_TOKEN_SUBTOKENS = currentToken.subtokens;
                            var CURRENT_TOKEN_SUBTOKENS_LENGTH = currentToken.subtokenCount;
                            var currentTokenSubtokensIterator = CURRENT_TOKEN_SUBTOKENS_LENGTH;

                            // Loop > Update > Tokens
                            while (currentTokenSubtokensIterator) {
                                // Constant > Current Token Subtoken
                                var CURRENT_TOKEN_SUBTOKEN = CURRENT_TOKEN_SUBTOKENS[CURRENT_TOKEN_SUBTOKENS_LENGTH - (currentTokenSubtokensIterator -= 1) - 1];

                                // Modification > Current Token Subtoken > Super Token --- NOTE (Lapys) -> Remove all references to the ancestor/ god token.
                                CURRENT_TOKEN_SUBTOKEN.supertoken = null;

                                // Update > Tokens
                                LDKF.arrayPrototypePush(TOKENS, CURRENT_TOKEN_SUBTOKEN)
                            }

                            // Return
                            return TOKENS
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
                        LapysDevelopmentKit.Functions.stringPrototypeAfter = function stringPrototypeAfter(String, Substring, STRING_LENGTH) { return LDKF.stringPrototypeAfterFrom(String, Substring, STRICT = STRING_LENGTH) };

                        // After Character
                        LapysDevelopmentKit.Functions.stringPrototypeAfterCharacter = function stringPrototypeAfterCharacter(String, Character, STRING_LENGTH) { return LDKF.stringPrototypeAfterCharacterFrom(String, Character, STRICT = STRING_LENGTH) };

                        // After Character From
                        LapysDevelopmentKit.Functions.stringPrototypeAfterCharacterFrom = function stringPrototypeAfterCharacterFrom(String, Character, STRING_LENGTH) { STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String)); var stringIndex = LDKF.stringPrototypeIndexCharacterFrom(String, Character, STRICT = STRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeAfterIndex(String, stringIndex, STRICT = STRING_LENGTH) : null };

                        // After Character From Back
                        LapysDevelopmentKit.Functions.stringPrototypeAfterCharacterFromBack = function stringPrototypeAfterCharacterFromBack(String, Character, STRING_LENGTH) { STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String)); var stringIndex = LDKF.stringPrototypeIndexCharacterFromBack(String, Character, STRICT = STRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeAfterIndex(String, stringIndex, STRICT = STRING_LENGTH) : null };

                        // After Character From Front
                        LapysDevelopmentKit.Functions.stringPrototypeAfterCharacterFromFront = function stringPrototypeAfterCharacterFromFront(String, Character, STRING_LENGTH) { STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String)); var stringIndex = LDKF.stringPrototypeIndexCharacterFromFront(String, Character, STRICT = STRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeAfterIndex(String, stringIndex, STRICT = STRING_LENGTH) : null };

                        // After From
                        LapysDevelopmentKit.Functions.stringPrototypeAfterFrom = function stringPrototypeAfterFrom(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String)); var stringIndex = LDKF.stringPrototypeIndexFrom(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeAfterIndex(String, stringIndex, STRICT = STRING_LENGTH) : null };

                        // After From Back
                        LapysDevelopmentKit.Functions.stringPrototypeAfterFromBack = function stringPrototypeAfterFromBack(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String)); var stringIndex = LDKF.stringPrototypeIndexFromBack(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeAfterIndex(String, stringIndex, STRICT = STRING_LENGTH) : null };

                        // After From Front
                        LapysDevelopmentKit.Functions.stringPrototypeAfterFromFront = function stringPrototypeAfterFromFront(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String)); var stringIndex = LDKF.stringPrototypeIndexFromFront(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeAfterIndex(String, stringIndex, STRICT = STRING_LENGTH) : null };

                        // After Index
                        LapysDevelopmentKit.Functions.stringPrototypeAfterIndex = function stringPrototypeAfterIndex(String, index, STRING_LENGTH) {
                            // Initialization > After
                            var after = "";

                            // Loop > (Update > ...)
                            STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                            while (index ^ (STRING_LENGTH - 1)) after += LDKF.stringPrototypeCharacterAt(String, index += 1);

                            // Return
                            return after
                        };

                        // Before
                        LapysDevelopmentKit.Functions.stringPrototypeBefore = function stringPrototypeBefore(String, Substring, STRING_LENGTH) { return LDKF.stringPrototypeBeforeFromBack(String, Substring, STRICT = STRING_LENGTH) };

                        // Before Character
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacter = function stringPrototypeBeforeCharacter(String, Character, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeBeforeCharacterFrom(String, Character, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Before Character From
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacterFrom = function stringPrototypeBeforeCharacterFrom(String, Character, STRING_LENGTH) { var stringIndex = LDKF.stringPrototypeIndexCharacterFrom(String, Character, STRICT = STRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeBeforeIndex(String, stringIndex) : null };

                        // Before Character From Back
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacterFromBack = function stringPrototypeBeforeCharacterFromBack(String, Character, STRING_LENGTH) { var stringIndex = LDKF.stringPrototypeIndexCharacterFromBack(String, Character, STRICT = STRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeBeforeIndex(String, stringIndex) : null };

                        // Before Character From Front
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeCharacterFromFront = function stringPrototypeBeforeCharacterFromFront(String, Character, STRING_LENGTH) { var stringIndex = LDKF.stringPrototypeIndexCharacterFromFront(String, Character, STRICT = STRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeBeforeIndex(String, stringIndex) : null };

                        // Before From
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeFrom = function stringPrototypeBeforeFrom(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { var stringIndex = LDKF.stringPrototypeIndexFrom(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeBeforeIndex(String, stringIndex) : null };

                        // Before From Back
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeFromBack = function stringPrototypeBeforeFromBack(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { var stringIndex = LDKF.stringPrototypeIndexFromBack(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeBeforeIndex(String, stringIndex) : null };

                        // Before From Front
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeFromFront = function stringPrototypeBeforeFromFront(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { var stringIndex = LDKF.stringPrototypeIndexFromFront(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH); return ~stringIndex ? LDKF.stringPrototypeBeforeIndex(String, stringIndex) : null };

                        // Before Index
                        LapysDevelopmentKit.Functions.stringPrototypeBeforeIndex = function stringPrototypeBeforeIndex(String, index) {
                            // Initialization > Before
                            var before = "";

                            // Loop > Update > Before
                            while (index) before = LDKF.stringPrototypeCharacterAt(String, index -= 1) + before;

                            // Return
                            return before
                        };

                        // Character Code At
                        LapysDevelopmentKit.Functions.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(String, Index) { return LDKF.functionPrototypeMonoadicCall(LDKO.stringPrototypeCharacterCodeAt, String, Index) || -1 };

                        // Count
                        LapysDevelopmentKit.Functions.stringPrototypeCount = function stringPrototypeCount(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Update > (Sub)String Length
                            STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                            SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                            // Initialization > Count
                            var count = +0;

                            // Logic
                            if (SUBSTRING_LENGTH ^ 1) {
                                // Logic
                                if (String == Substring)
                                    // Update > Count
                                    count = 1;

                                else if (STRING_LENGTH > SUBSTRING_LENGTH) {
                                    // Initialization > String Iterator
                                    var stringIterator = STRING_LENGTH;

                                    // Loop
                                    while (stringIterator)
                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(String, stringIterator -= 1) == LDKF.stringPrototypeLast(Substring, STRICT = SUBSTRING_LENGTH)) {
                                            // Initialization > Substring Iterator
                                            var substringIterator = SUBSTRING_LENGTH - 1;

                                            // Loop
                                            while (stringIterator && substringIterator)
                                                // Logic
                                                if (LDKF.stringPrototypeCharacterAt(String, stringIterator -= 1) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator -= 1)) {
                                                    // Update > (Sub)String Iterator
                                                    stringIterator += SUBSTRING_LENGTH - substringIterator - 1;
                                                    substringIterator = +0
                                                }

                                                else if (!substringIterator) {
                                                    // Update > (String Iterator, Count)
                                                    stringIterator += SUBSTRING_LENGTH - 1;
                                                    count += 1;
                                                }
                                        }
                                }
                            }

                            else {
                                // Initialization > String Iterator
                                var stringIterator = STRING_LENGTH;

                                // Loop > Update > Count
                                while (stringIterator) (LDKF.stringPrototypeCharacterAt(String, stringIterator -= 1) == Substring) && (count += 1)
                            }

                            // Return
                            return count
                        };

                        // Cut At
                        LapysDevelopmentKit.Functions.stringPrototypeCutAt = function stringPrototypeCutAt(String, Index, STRING_LENGTH) {
                            // Initialization > (Cut, String Iterator)
                            var cut = "";
                            var stringIterator = STRING_LENGTH || LDKF.stringPrototypeLength(String);

                            // Loop > Update > (String Iterator, Cut)
                            while (stringIterator) { stringIterator -= 1; (stringIterator === Index) || (cut = LDKF.stringPrototypeCharacterAt(String, stringIterator) + cut) }

                            // Return
                            return cut
                        };

                        // Cut Left
                        LapysDevelopmentKit.Functions.stringPrototypeCutLeft = function stringPrototypeCutLeft(String, Length, STRING_LENGTH) {
                            // Initialization > (Cut, String Iterator)
                            var cut = "";
                            var stringIterator = (STRING_LENGTH || LDKF.stringPrototypeLength(String)) - Length;

                            // Logic > Loop > Update > Cut
                            if (stringIterator > -0) while (stringIterator) cut = LDKF.stringPrototypeCharacterAt(String, (stringIterator -= 1) + Length) + cut;

                            // Return
                            return cut
                        };

                        // Cut Right
                        LapysDevelopmentKit.Functions.stringPrototypeCutRight = function stringPrototypeCutRight(String, Length, STRING_LENGTH) {
                            // Initialization > (Cut, String Iterator)
                            var cut = "";
                            var stringIterator = (STRING_LENGTH || LDKF.stringPrototypeLength(String)) - Length;

                            // Logic > Loop > Update > Cut
                            if (stringIterator > -0) while (stringIterator) cut = LDKF.stringPrototypeCharacterAt(String, stringIterator -= 1) + cut;

                            // Return
                            return cut
                        };

                        // Cut Through
                        LapysDevelopmentKit.Functions.stringPrototypeCutThrough = function stringPrototypeCutThrough(String, StartIndex, EndIndex, STRING_LENGTH) {
                            // Initialization > (Cut, String Iterator)
                            var cut = "";
                            var stringIterator;

                            // (Loop > )Update > ...
                            stringIterator = (STRING_LENGTH || LDKF.stringPrototypeLength(String)) - EndIndex;
                            while (stringIterator) cut = LDKF.stringPrototypeCharacterAt(String, EndIndex + (stringIterator -= 1)) + cut;

                            // (Loop > )Update > ...
                            stringIterator = StartIndex;
                            while (stringIterator) cut = LDKF.stringPrototypeCharacterAt(String, stringIterator -= 1) + cut;

                            // Return
                            return cut
                        };

                        // First
                        LapysDevelopmentKit.Functions.stringPrototypeFirst = function stringPrototypeFirst(String) { return String ? LDKF.stringPrototypeCharacterAt(String, +0) : null };

                        // Includes
                        LapysDevelopmentKit.Functions.stringPrototypeIncludes = function stringPrototypeIncludes(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return !!~LDKF.stringPrototypeIndex(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Includes Character
                        LapysDevelopmentKit.Functions.stringPrototypeIncludesCharacter = function stringPrototypeIncludesCharacter(String, Character, STRING_LENGTH, SUBSTRING_LENGTH) { return !!~LDKF.stringPrototypeIndexCharacter(String, Character, STRICT = STRING_LENGTH) };

                        // Index Character
                        LapysDevelopmentKit.Functions.stringPrototypeIndexCharacter = function stringPrototypeIndexCharacter(String, Character, STRING_LENGTH) { return LDKF.stringPrototypeIndexCharacterFrom(String, Character, STRICT = STRING_LENGTH) };

                        // Index Character From
                        LapysDevelopmentKit.Functions.stringPrototypeIndexCharacterFrom = function stringPrototypeIndexCharacterFrom(String, Character, STRING_LENGTH) { return LDKF.arrayPrototypeIndexFrom(String, Character, STRICT = STRING_LENGTH, STRICT = LDKC.Data.StringImperative) };

                        // Index Character From Back
                        LapysDevelopmentKit.Functions.stringPrototypeIndexCharacterFromBack = function stringPrototypeIndexCharacterFromBack(String, Character, STRING_LENGTH) { return LDKF.arrayPrototypeIndexFromBack(String, Character, STRICT = STRING_LENGTH, STRICT = LDKC.Data.StringImperative) };

                        // Index Character From Front
                        LapysDevelopmentKit.Functions.stringPrototypeIndexCharacterFromFront = function stringPrototypeIndexCharacterFromFront(String, Character, STRING_LENGTH) { return LDKF.arrayPrototypeIndexFromFront(String, Character, STRICT = STRING_LENGTH, STRICT = LDKC.Data.StringImperative) };

                        // Index
                        LapysDevelopmentKit.Functions.stringPrototypeIndex = function stringPrototypeIndex(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeIndexFrom(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Index From
                        LapysDevelopmentKit.Functions.stringPrototypeIndexFrom = function stringPrototypeIndexFrom(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Logic
                            if (String == Substring)
                                // Return
                                return +0;

                            else {
                                // Update > (Sub)String Length
                                STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                                SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                                // Logic
                                if (STRING_LENGTH) {
                                    // Constant > (Gradient Stop Length, Substring (First, Last) Character)
                                    var GRADIENT_STOP_LENGTH = LDKM.int(STRING_LENGTH / 4);

                                    var SUBSTRING_FIRST_CHARACTER = LDKF.stringPrototypeFirst(Substring);
                                    var SUBSTRING_LAST_CHARACTER = LDKF.stringPrototypeLast(Substring, STRICT = SUBSTRING_LENGTH);

                                    // Initialization > String (Index, Iterator)
                                    var stringIndex = -1, stringIterator = STRING_LENGTH - ((GRADIENT_STOP_LENGTH * 3) - 1);

                                    // Loop --- NOTE (Lapys) -> Unlike the `LapysDevelopmentKit.Functions.stringPrototypeIndexFromBack` and `LapysDevelopmentKit.Functions.stringPrototypeIndexFromFront` methods, there is some iteration redundancies that could be manually optimized.
                                    while (!~stringIndex && stringIterator) {
                                        // Update > String Iterator
                                        stringIterator -= 1;

                                        // Logic > ... --- NOTE (Lapys) -> Each block here represents a stop index within the gradient search.
                                        if (LDKF.stringPrototypeCharacterAt(String, STRING_LENGTH - stringIterator) === SUBSTRING_FIRST_CHARACTER) { stringIndex = STRING_LENGTH - stringIterator; var substringIterator = SUBSTRING_LENGTH; while (substringIterator -= 1) if (LDKF.stringPrototypeCharacterAt(String, stringIndex + substringIterator) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { stringIndex = -1; substringIterator = 1 } }
                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, STRING_LENGTH - stringIterator) === SUBSTRING_LAST_CHARACTER) { stringIndex = STRING_LENGTH - stringIterator; var substringIterator = SUBSTRING_LENGTH - 1; while (substringIterator) { substringIterator -= 1; if (LDKF.stringPrototypeCharacterAt(String, stringIndex - (SUBSTRING_LENGTH - substringIterator - 1)) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { substringIterator = +0; stringIndex = -1 } else if (!substringIterator) stringIndex -= SUBSTRING_LENGTH - 1 } }

                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, STRING_LENGTH - GRADIENT_STOP_LENGTH - stringIterator) === SUBSTRING_FIRST_CHARACTER) { stringIndex = STRING_LENGTH - GRADIENT_STOP_LENGTH - stringIterator; var substringIterator = SUBSTRING_LENGTH; while (substringIterator -= 1) if (LDKF.stringPrototypeCharacterAt(String, stringIndex + substringIterator) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { stringIndex = -1; substringIterator = 1 } }
                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, STRING_LENGTH - GRADIENT_STOP_LENGTH - stringIterator) === SUBSTRING_LAST_CHARACTER) { stringIndex = STRING_LENGTH - GRADIENT_STOP_LENGTH - stringIterator; var substringIterator = SUBSTRING_LENGTH - 1; while (substringIterator) { substringIterator -= 1; if (LDKF.stringPrototypeCharacterAt(String, stringIndex - (SUBSTRING_LENGTH - substringIterator - 1)) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { substringIterator = +0; stringIndex = -1 } else if (!substringIterator) stringIndex -= SUBSTRING_LENGTH - 1 } }

                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, stringIterator + GRADIENT_STOP_LENGTH) === SUBSTRING_FIRST_CHARACTER) { stringIndex = stringIterator + GRADIENT_STOP_LENGTH; var substringIterator = SUBSTRING_LENGTH; while (substringIterator -= 1) if (LDKF.stringPrototypeCharacterAt(String, stringIndex + substringIterator) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { stringIndex = -1; substringIterator = 1 } }
                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, stringIterator + GRADIENT_STOP_LENGTH) === SUBSTRING_LAST_CHARACTER) { stringIndex = stringIterator + GRADIENT_STOP_LENGTH; var substringIterator = SUBSTRING_LENGTH - 1; while (substringIterator) { substringIterator -= 1; if (LDKF.stringPrototypeCharacterAt(String, stringIndex - (SUBSTRING_LENGTH - substringIterator - 1)) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { substringIterator = +0; stringIndex = -1 } else if (!substringIterator) stringIndex -= SUBSTRING_LENGTH - 1 } }

                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, stringIterator) === SUBSTRING_FIRST_CHARACTER) { stringIndex = stringIterator; var substringIterator = SUBSTRING_LENGTH; while (substringIterator -= 1) if (LDKF.stringPrototypeCharacterAt(String, stringIndex + substringIterator) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { stringIndex = -1; substringIterator = 1 } }
                                        if (!~stringIndex && LDKF.stringPrototypeCharacterAt(String, stringIterator) === SUBSTRING_LAST_CHARACTER) { stringIndex = stringIterator; var substringIterator = SUBSTRING_LENGTH - 1; while (substringIterator) { substringIterator -= 1; if (LDKF.stringPrototypeCharacterAt(String, stringIndex - (SUBSTRING_LENGTH - substringIterator - 1)) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { substringIterator = +0; stringIndex = -1 } else if (!substringIterator) stringIndex -= SUBSTRING_LENGTH - 1 } }
                                    }

                                    // Return
                                    return stringIndex
                                }

                                // Return
                                return -1
                            }
                        };

                        // Index From Back
                        LapysDevelopmentKit.Functions.stringPrototypeIndexFromBack = function stringPrototypeIndexFromBack(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Logic
                            if (String == Substring)
                                // Return
                                return +0;

                            else {
                                // Update > (Sub)String Length
                                STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                                SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                                // Logic
                                if (STRING_LENGTH) {
                                    // Constant > Substring First Character
                                    var SUBSTRING_FIRST_CHARACTER = LDKF.stringPrototypeFirst(Substring);

                                    // Initialization > String Index
                                    var stringIndex = -1, stringIterator = STRING_LENGTH;

                                    // Loop
                                    while (!~stringIndex && (stringIterator ^ (SUBSTRING_LENGTH - 1)))
                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(String, STRING_LENGTH - (stringIterator -= 1) - 1) == SUBSTRING_FIRST_CHARACTER) {
                                            // Initialization > Substring Iterator
                                            var substringIterator = SUBSTRING_LENGTH;

                                            // (Loop > )Update > ...
                                            stringIndex = STRING_LENGTH - stringIterator - 1;
                                            while (substringIterator -= 1) if (LDKF.stringPrototypeCharacterAt(String, stringIndex + substringIterator) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { stringIndex = -1; substringIterator = 1 } else if (!substringIterator) stringIterator = SUBSTRING_LENGTH - 1
                                        }

                                    // Return
                                    return stringIndex
                                }

                                else
                                    // Return
                                    return -1
                            }
                        };

                        // Index From Front
                        LapysDevelopmentKit.Functions.stringPrototypeIndexFromFront = function stringPrototypeIndexFromFront(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Logic
                            if (String == Substring)
                                // Return
                                return +0;

                            else {
                                // Update > (Sub)String Length
                                STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                                SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                                // Logic
                                if (STRING_LENGTH) {
                                    // : Constant > Substring Last Character
                                    // : Initialization > String (Index, Iterator)
                                    var SUBSTRING_LAST_CHARACTER = LDKF.stringPrototypeLast(Substring, STRICT = SUBSTRING_LENGTH);
                                    var stringIndex = -1, stringIterator = STRING_LENGTH;

                                    // Loop
                                    while (!~stringIndex && (stringIterator ^ (SUBSTRING_LENGTH - 1)))
                                        // Logic
                                        if (LDKF.stringPrototypeCharacterAt(String, stringIterator -= 1) == SUBSTRING_LAST_CHARACTER) {
                                            // Initialization > Substring Iterator
                                            var substringIterator = SUBSTRING_LENGTH - 1;

                                            // Update > String Index
                                            stringIndex = stringIterator;

                                            // Loop
                                            while (substringIterator) {
                                                // Update >  Substring Iterator
                                                substringIterator -= 1;

                                                // Logic > Update > String (Index, Iterator)
                                                if (LDKF.stringPrototypeCharacterAt(String, stringIndex - (SUBSTRING_LENGTH - substringIterator - 1)) != LDKF.stringPrototypeCharacterAt(Substring, substringIterator)) { stringIndex = -1; substringIterator = +0 }
                                                else if (!substringIterator) { stringIterator = SUBSTRING_LENGTH - 1; stringIndex -= stringIterator }
                                            }
                                        }

                                    // Return
                                    return stringIndex
                                }

                                else
                                    // Return
                                    return -1
                            }
                        };

                        // Insert At
                        LapysDevelopmentKit.Functions.stringPrototypeInsertAt = function stringPrototypeInsertAt(String, Substring, Index, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeBeforeIndex(String, Index) + Substring + LDKF.stringPrototypeAfterIndex(String, Index - 1, STRICT = (STRING_LENGTH || LDKF.stringPrototypeLength(String))) };

                        // Instance Characters
                        LapysDevelopmentKit.Functions.stringPrototypeInstanceCharacters = function stringPrototypeInstanceCharacters(String, STRING_LENGTH) { return LDKF.arrayPrototypeInstance(String, STRICT = STRING_LENGTH, STRICT = LDKC.Data.StringImperative) };

                        // Last
                        LapysDevelopmentKit.Functions.stringPrototypeLast = function stringPrototypeLast(String, STRING_LENGTH) { return String ? LDKF.stringPrototypeCharacterAt(String, (STRING_LENGTH || LDKF.stringPrototypeLength(String)) - 1) : null };

                        // Remove
                        LapysDevelopmentKit.Functions.stringPrototypeRemove = function stringPrototypeRemove(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeRemoveFrom(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Remove From
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveFrom = function stringPrototypeRemoveFrom(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFrom(String, Substring, "", STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Remove From Back
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveFromBack = function stringPrototypeRemoveFromBack(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFromBack(String, Substring, "", STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Remove From Front
                        LapysDevelopmentKit.Functions.stringPrototypeRemoveFromFront = function stringPrototypeRemoveFromFront(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFromFront(String, Substring, "", STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Replace
                        LapysDevelopmentKit.Functions.stringPrototypeReplace = function stringPrototypeReplace(String, Substring, STRING_LENGTH, SUBSTRING_LENGTH) { return LDKF.stringPrototypeReplaceFrom(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH) };

                        // Replace From
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceFrom = function stringPrototypeReplaceFrom(String, Substring, Substitute, STRING_LENGTH, SUBSTRING_LENGTH) {
                            // Update > (Sub)String Length
                            STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                            SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                            // Initialization > String Index
                            var stringIndex = LDKF.stringPrototypeIndexFrom(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH);

                            // Return
                            return ~stringIndex ? LDKF.stringPrototypeInsertAt(LDKF.stringPrototypeCutThrough(String, stringIndex, stringIndex + SUBSTRING_LENGTH, STRICT = STRING_LENGTH), Substitute, stringIndex, STRICT = STRING_LENGTH - SUBSTRING_LENGTH, STRICT = SUBSTRING_LENGTH) : String
                        };

                        // Replace From Back
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceFromBack = function stringPrototypeReplaceFromBack(String, Substring, Substitute, STRING_LENGTH, SUBSTRING_LENGTH, SUBSTRING_INDEX) {
                            // Update > (Sub)String Length
                            STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                            SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                            // Initialization > String Index
                            var stringIndex = LDKF.stringPrototypeIndexFromBack(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH);

                            // Return
                            return ~stringIndex ? LDKF.stringPrototypeInsertAt(LDKF.stringPrototypeCutThrough(String, stringIndex, stringIndex + SUBSTRING_LENGTH, STRICT = STRING_LENGTH), Substitute, stringIndex, STRICT = STRING_LENGTH - SUBSTRING_LENGTH, STRICT = SUBSTRING_LENGTH) : String
                        };

                        // Replace From Front
                        LapysDevelopmentKit.Functions.stringPrototypeReplaceFromFront = function stringPrototypeReplaceFromFront(String, Substring, Substitute, STRING_LENGTH, SUBSTRING_LENGTH, SUBSTRING_INDEX) {
                            // Update > (Sub)String Length
                            STRING_LENGTH || (STRING_LENGTH = LDKF.stringPrototypeLength(String));
                            SUBSTRING_LENGTH || (SUBSTRING_LENGTH = LDKF.stringPrototypeLength(Substring));

                            // Initialization > String Index
                            var stringIndex = LDKF.stringPrototypeIndexFromFront(String, Substring, STRICT = STRING_LENGTH, STRICT = SUBSTRING_LENGTH);

                            // Return
                            return ~stringIndex ? LDKF.stringPrototypeInsertAt(LDKF.stringPrototypeCutThrough(String, stringIndex, stringIndex + SUBSTRING_LENGTH, STRICT = STRING_LENGTH), Substitute, stringIndex, STRICT = STRING_LENGTH - SUBSTRING_LENGTH, STRICT = SUBSTRING_LENGTH) : String
                        };

                        // Substring At --- WARN (Lapys) -> For development & testing purposes only.
                        LapysDevelopmentKit.Functions.stringPrototypeSubstringAt = function stringPrototypeSubstringAt(String, Index, substringLength, IGNORE_EXCEPTIONS) {
                            // Initialization > Substring (After, Before)
                            var substringAfter = "", substringBefore = "";

                            // Logic
                            if (IGNORE_EXCEPTIONS) {
                                // : Constant > String Length
                                // : Initialization > Substring Iterator
                                var STRING_LENGTH = LDKF.stringPrototypeLength(String);
                                var substringIterator = +0;

                                // Initialization > Update Substring (After, Before)
                                var updateSubstringAfter = true, updateSubstringBefore = true;

                                // Loop
                                while (substringIterator ^ substringLength) {
                                    // Logic > Update > (Update) Substring (After, Before)
                                    if (updateSubstringAfter) { substringAfter += LDKF.stringPrototypeCharacterAt(String, Index + substringIterator + 1); ((Index + substringIterator + 1) ^ (STRING_LENGTH - 1)) || (updateSubstringAfter = false) }
                                    if (updateSubstringBefore) { substringBefore = LDKF.stringPrototypeCharacterAt(String, Index - substringIterator - 1) + substringBefore; (Index - substringIterator - 1) || (updateSubstringBefore = false) }

                                    // Update > Substring Iterator
                                    substringIterator += 1
                                }
                            }

                            else
                                // Loop
                                while (substringLength) {
                                    // Update > Substring (After, Before, Length)
                                    substringAfter = LDKF.stringPrototypeCharacterAt(String, Index + substringLength) + substringAfter;
                                    substringBefore += LDKF.stringPrototypeCharacterAt(String, Index - substringLength);
                                    substringLength -= 1
                                }

                            // Return
                            return substringBefore + LDKF.stringPrototypeCharacterAt(String, Index) + substringAfter
                        };

                // Style Property Map > Prototype
                    // Element At
                    LapysDevelopmentKit.Functions.stylePropertyMapPrototypeElementAt = function stylePropertyMapPrototypeElementAt(StylePropertyMap, index) {
                        // Logic
                        if (index < LDKF.stylePropertyMapPrototypeSize(StylePropertyMap)) {
                            // Initialization > Element; Constant > Map Iterator
                            var element = undefined; var MAP_ITERATOR = LDKF.stylePropertyMapPrototypeEntries(StylePropertyMap);

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
                    LapysDevelopmentKit.Functions.stylePropertyMapPrototypeSetIndex = function stylePropertyMapPrototypeSetIndex(StylePropertyMap, index, Value) {
                        // Logic
                        if (index < LDKF.stylePropertyMapPrototypeSize(StylePropertyMap)) {
                            // Initialization > Element; Constant > Map Iterator
                            var element = undefined; var MAP_ITERATOR = LDKF.stylePropertyMapPrototypeEntries(StylePropertyMap);

                            // Loop > Update > (Element, Index)
                            while (index) { element = MAP_ITERATOR.next().value; index -= 1 }

                            // Return
                            return LDKF.stylePropertyMapPrototypeSet(StylePropertyMap, element[+0], Value)
                        }

                        else
                            // Return
                            return undefined
                    };

                // To Number
                LapysDevelopmentKit.Functions.toNumber = function toNumber(Argument) {
                    // Logic > Return
                    if (LDKF.isNumber(Argument)) return Argument;
                    else if (LDKF.isNull(Argument)) return +0;
                    else if (LDKF.isBoolean(Argument) || LDKF.isString(Argument)) return +Argument;
                    else if (LDKF.isVoid(Argument)) return LDKC.Numbers.NaN;
                    else if (LDKF.isSymbol(Argument)) return LDKF.toNumber(LDKF.toString(Argument));
                    else /*if (LDKF.isObjectLike(Argument))*/ return LDKO.number(Argument)
                };

            /* Mathematics --- REDACT (Lapys) */
            LapysDevelopmentKit.Mathematics.abs = function abs(Number) { return Number < +0 ? -Number : Number };
            LapysDevelopmentKit.Mathematics.ceil = function ceil(Number) { var integer = LDKM.int(Number); return integer + (Number > integer) };
            LapysDevelopmentKit.Mathematics.clamp = function clamp(Number, Minimum, Maximum) { return LDKM.min(LDKM.max(Number, Minimum), Maximum) };
            LapysDevelopmentKit.Mathematics.int = function int(Number) { return Number - Number % 1 };
            LapysDevelopmentKit.Mathematics.max = function max(NumberA, NumberB) { return NumberA > NumberB ? NumberA : NumberB };
            LapysDevelopmentKit.Mathematics.min = function min(NumberA, NumberB) { return NumberA < NumberB ? NumberA : NumberB };
            LapysDevelopmentKit.Mathematics.perc = function perc(Base, Exponent) { return +!!Exponent && (Base * (Exponent / 100)) };
            LapysDevelopmentKit.Mathematics.pow = Math.pow; // CHECKPOINT (Lapys)
            LapysDevelopmentKit.Mathematics.powInt = function powInt(Base, exponent) { if (exponent) { var MULTIPLIER = Base; while (exponent -= 1) Base *= MULTIPLIER; return Base } else return 1 };
            LapysDevelopmentKit.Mathematics.round = function round(Number) { var INTEGER = LDKM.int(Number); return INTEGER + (Number - INTEGER >= .5) };

            /* Objects */
                // Evaluate --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects.eval = eval;

                // Function --- CHECKPOINT (Lapys)
                LapysDevelopmentKit.Objects["function"] = Function;
                    // Prototype
                    LapysDevelopmentKit.Objects.functionPrototype = LDKO["function"].prototype;
                        // Apply --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Objects.functionPrototypeApply = LDKO.functionPrototype.apply;

                        // Call --- CHECKPOINT (Lapys)
                        LapysDevelopmentKit.Objects.functionPrototypeCall = LDKO.functionPrototype.call;

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
                /* Big Array
                        --- NOTE (Lapys) -> Arbitrary-length array type.
                        --- WARN (Lapys) -> The length is algorithmically infinite, but implementation-restricted (`Number.MAX_SAFE_INTEGER`) and theoretically memory-limited.
                */
                LapysDevelopmentKit.Types.BigArray = function BigArray(Length, MaximumLength) {
                    // Modification > Target > (Depth, (Maximum) Length, Width)
                    this.depth = 1;
                    this.MAXIMUM_LENGTH = MaximumLength || LDKT.BigArrayPrototype.MAXIMUM_LENGTH;
                    this.length = +0;
                    this.width = +0;

                    // Logic
                    if (Length > +0) {
                        // Initialization > Iterator; Loop > ...
                        var iterator = Length;
                        while (iterator) { iterator -= 1; LDKF.functionPrototypeNiladicCall(LDKT.BigArrayPrototypePush, this) }
                    }
                };
                    // Prototype
                    LapysDevelopmentKit.Types.BigArrayPrototype = LDKT.BigArray.prototype;
                        // Copy
                        LapysDevelopmentKit.Types.BigArrayPrototypeCopy =
                        LapysDevelopmentKit.Types.BigArrayPrototype.copy = function copy(BigArray, BIG_ARRAY_LENGTH) {
                            // : Constant > Big Array
                            // : Initialization > Big Array Iterator
                            var BIG_ARRAY = this;
                            var bigArrayIterator = BIG_ARRAY_LENGTH || BigArray.length;

                            // Deletion; Update > Big Array
                            LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeFree, BIG_ARRAY, STRICT = false);
                            LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeResize, BIG_ARRAY, bigArrayIterator);

                            // Loop
                            while (bigArrayIterator) {
                                // Update > Big Array (Iterator)
                                bigArrayIterator -= 1;
                                LDKF.functionPrototypeDyadicCall(LDKT.BigArrayPrototypeSetIndex, BIG_ARRAY, bigArrayIterator, LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigArray, bigArrayIterator))
                            }
                        };

                        // Cut At
                        LapysDevelopmentKit.Types.BigArrayPrototype.cutAt = function cutAt(index) {
                            // Constant > Big Array (Length)
                            var BIG_ARRAY = this;
                            var BIG_ARRAY_LENGTH = BIG_ARRAY.length;

                            // Logic
                            if (BIG_ARRAY_LENGTH)
                                // Logic
                                if (index == BIG_ARRAY_LENGTH)
                                    // Update > Big Array
                                    LDKF.functionPrototypeNiladicCall(LDKT.BigArrayPrototypePop, BIG_ARRAY);

                                else if (!index && BIG_ARRAY_LENGTH == 1)
                                    // Update > Big Array
                                    LDKF.functionPrototypeNiladicCall(LDKT.BigArrayPrototypeFree, BIG_ARRAY);

                                else {
                                    // (Loop > )Update > Big Array
                                    while (index ^ (BIG_ARRAY_LENGTH - 1)) LDKF.functionPrototypeDyadicCall(LDKT.BigArrayPrototypeSetIndex, BIG_ARRAY, index, LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BIG_ARRAY, index += 1));
                                    LDKF.functionPrototypeNiladicCall(LDKT.BigArrayPrototypePop, BIG_ARRAY)
                                }
                        };

                        // Element At
                        LapysDevelopmentKit.Types.BigArrayPrototypeElementAt =
                        LapysDevelopmentKit.Types.BigArrayPrototype.elementAt = function elementAt(Index) {
                            // Initialization > Big Array (Depth)
                            var bigArray = this;
                            var bigArrayDepth = bigArray.depth;

                            // Logic
                            if (bigArrayDepth == 1)
                                // Return
                                return bigArray[Index];

                            else if (!Index) {
                                // Loop > Update > Big Array; Return
                                while (bigArrayDepth -= 1) bigArray = bigArray[Index];
                                return bigArray[Index]
                            }

                            else {
                                // Constant > Big Array Maximum Length
                                var BIG_ARRAY_MAXIMUM_LENGTH = bigArray.MAXIMUM_LENGTH;

                                // Initialization > Big Array ((Former) Index (Length))
                                var bigArrayIndexLength = +0;
                                var bigArrayFormerIndex = +0, bigArrayIndex = +0;

                                // Loop
                                while (bigArrayDepth -= 1) {
                                    // Constant > Safe Subarray Maximum Breadth
                                    var SAFE_SUBARRAY_MAXIMUM_BREADTH = LDKM.powInt(BIG_ARRAY_MAXIMUM_LENGTH, bigArrayDepth);

                                    // Update > Big Array (Former) Index
                                    bigArrayFormerIndex = bigArrayIndex;
                                    bigArrayIndex = +0;

                                    // (Loop > )Update > Big Array Index
                                    while ((
                                        (bigArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH) +
                                        bigArrayIndexLength
                                    ) <= Index) bigArrayIndex += 1;
                                    bigArrayIndex -= 1;

                                    // Update > Big Array (Index Length)
                                    bigArrayIndexLength += bigArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH;
                                    bigArray = bigArray[bigArrayIndex]
                                }

                                // (Loop > )Update > Big Array Index
                                bigArrayIndex = +0;
                                while ((bigArrayIndex + bigArrayIndexLength) < Index) bigArrayIndex += 1;

                                // Return
                                return bigArray[bigArrayIndex]
                            }
                        };

                        // For Each
                        LapysDevelopmentKit.Types.BigArrayPrototype.foreach = function foreach(Handler) {
                            // Initialization > Big Array (Length)
                            var BIG_ARRAY = this;
                            var bigArrayLength = BIG_ARRAY.length, bigArrayIterator = bigArrayLength;

                            // Loop
                            while (bigArrayIterator) {
                                // Constant > Big Array Index; Handler
                                var BIG_ARRAY_INDEX = bigArrayLength - (bigArrayIterator -= 1) - 1;
                                LDKF.functionPrototypeDyadicCall(Handler, BIG_ARRAY, BIG_ARRAY.elementAt(BIG_ARRAY_INDEX), BIG_ARRAY_INDEX)
                            }
                        };

                        // Free
                        LapysDevelopmentKit.Types.BigArrayPrototypeFree =
                        LapysDevelopmentKit.Types.BigArrayPrototype.free = function free(PERSIST_UNUSED_MEMORY) {
                            // Constant > Big Array
                            var BIG_ARRAY = this;

                            // Logic
                            if (PERSIST_UNUSED_MEMORY) {
                                // Initialization > Big Array Index
                                var bigArrayIndex = +0;

                                // Loop > (Deletion; Update > Big Array Index)
                                while (LDKF.objectPrototypeHasOwnProperty(BIG_ARRAY, bigArrayIndex)) {
                                    delete BIG_ARRAY[bigArrayIndex];
                                    bigArrayIndex += 1
                                }
                            }

                            // Deletion
                            delete BIG_ARRAY[+0];

                            // Modification > Big Array > (Depth, Length, Width)
                            BIG_ARRAY.depth = 1;
                            BIG_ARRAY.length = +0;
                            BIG_ARRAY.width = +0;
                        };

                        // Index
                        LapysDevelopmentKit.Types.BigArrayPrototype.index = function index(Element) {
                            // Constant > Big Array
                            var BIG_ARRAY = this;

                            // Return
                            return BIG_ARRAY.depth == 1 ?
                                LDKF.arrayPrototypeIndex(BIG_ARRAY, Element, STRICT = BIG_ARRAY.length) :
                                LDKF.arrayPrototypeIndex(BIG_ARRAY, Element, STRICT = BIG_ARRAY.length, STRICT = LDKC.Data.BigArrayImperative)
                        };

                        // Maximum Length
                        LapysDevelopmentKit.Types.BigArrayPrototype.MAXIMUM_LENGTH = LDKC.Numbers.MaximumArrayLength;

                        // Pop
                        LapysDevelopmentKit.Types.BigArrayPrototypePop =
                        LapysDevelopmentKit.Types.BigArrayPrototype.pop = function pop(PARENT, INDEX) {
                            // Constant > Big Array (Length)
                            var BIG_ARRAY = this;
                            var BIG_ARRAY_LENGTH = BIG_ARRAY.length;

                            // Logic
                            if (BIG_ARRAY_LENGTH == 1)
                                // Update > Big Array
                                LDKF.functionPrototypeNiladicCall(LDKT.BigArrayPrototypeFree, BIG_ARRAY);

                            else if (BIG_ARRAY_LENGTH) {
                                // Initialization > Big Array (Depth, Has Parent)
                                var bigArrayDepth = BIG_ARRAY.depth;
                                var BIG_ARRAY_HAS_PARENT = LDKF.getArgumentsLength(arguments);

                                // Logic
                                if (bigArrayDepth == 1) {
                                    // Deletion; Modification > Big Array > Width
                                    delete BIG_ARRAY[BIG_ARRAY.length - 1];
                                    BIG_ARRAY.width -= 1;
                                    (BIG_ARRAY_HAS_PARENT && BIG_ARRAY_LENGTH == 1) && delete PARENT[INDEX]
                                }

                                else {
                                    // Initialization > Big Array Index
                                    var bigArrayIndex = +0;

                                    // (Loop > )Update > Big Array Index
                                    while (LDKF.objectPrototypeHasOwnProperty(BIG_ARRAY, bigArrayIndex)) bigArrayIndex += 1;
                                    bigArrayIndex -= 1;

                                    // Update > Big Array
                                    LDKF.functionPrototypeDyadicCall(LDKT.BigArrayPrototypePop, BIG_ARRAY[bigArrayIndex], STRICT = BIG_ARRAY, STRICT = bigArrayIndex)
                                }

                                // Modification > Big Array > (Length, Width)
                                BIG_ARRAY.length -= 1;
                                (BIG_ARRAY_HAS_PARENT && !BIG_ARRAY.width) && (PARENT.width = PARENT.MAXIMUM_LENGTH);

                                // (Loop > )Update > Big Array Depth
                                bigArrayDepth = 1;
                                while (LDKM.powInt(BIG_ARRAY.MAXIMUM_LENGTH, bigArrayDepth) < BIG_ARRAY.length) bigArrayDepth += 1;

                                // Logic
                                if (LDKM.powInt(BIG_ARRAY.MAXIMUM_LENGTH, bigArrayDepth) == BIG_ARRAY.length) {
                                    // Initialization > Safe (Array Iterator, Subarray)
                                    var bigArrayIterator = BIG_ARRAY.MAXIMUM_LENGTH;
                                    var SAFE_SUBARRAY = BIG_ARRAY[+0];

                                    // Modification > Big Array > Depth
                                    BIG_ARRAY.depth -= 1;

                                    // Loop > Update > Big Array (Iterator)
                                    while (bigArrayIterator) { bigArrayIterator -= 1; BIG_ARRAY[bigArrayIterator] = SAFE_SUBARRAY[bigArrayIterator] }
                                }
                            }
                        };

                        // Push
                        LapysDevelopmentKit.Types.BigArrayPrototypePush =
                        LapysDevelopmentKit.Types.BigArrayPrototype.push = function push(Element) {
                            // Constant > Big Array
                            var BIG_ARRAY = this;

                            // Logic --- NOTE (Lapys) -> The array (or its children/ containers) have overflown (reached a length greater than their maximum length).
                            if (BIG_ARRAY.length && !(BIG_ARRAY.length % BIG_ARRAY.MAXIMUM_LENGTH)) {
                                // Logic --- NOTE (Lapys) -> Clamp all the array`s contents into a subarray that is the first element of the array.
                                if (BIG_ARRAY.length == LDKM.powInt(BIG_ARRAY.width, BIG_ARRAY.depth)) {
                                    // Constant > Big Array First; Initialization > Big Array Iterator
                                    var BIG_ARRAY_FIRST = BIG_ARRAY[+0];
                                    var bigArrayIterator = BIG_ARRAY.width;

                                    // Update > Big Array
                                    BIG_ARRAY[+0] = new LDKT.BigArray;
                                    BIG_ARRAY[+0][+0] = BIG_ARRAY_FIRST;

                                    // Modification > Big Array > (Depth, (Maximum) Length, Width)
                                    BIG_ARRAY[+0].depth = BIG_ARRAY.depth;
                                    BIG_ARRAY[+0].length = LDKM.powInt(bigArrayIterator, BIG_ARRAY.depth);
                                    BIG_ARRAY[+0].MAXIMUM_LENGTH = BIG_ARRAY.MAXIMUM_LENGTH;
                                    BIG_ARRAY[+0].width = bigArrayIterator;

                                    // Loop > Update > Big Array
                                    while (bigArrayIterator -= 1) { BIG_ARRAY[+0][bigArrayIterator] = BIG_ARRAY[bigArrayIterator]; delete BIG_ARRAY[bigArrayIterator] }

                                    // Modification > Big Array > Depth
                                    BIG_ARRAY.depth += 1
                                }

                                // Modification > Big Array > Width
                                BIG_ARRAY.width = +0
                            }

                            // Logic
                            if (BIG_ARRAY.depth == 1)
                                // Update > Big Array
                                BIG_ARRAY[BIG_ARRAY.length] = Element;

                            else {
                                // Initialization > (Evaluation, Big Array Index)
                                var evaluation = true, bigArrayIndex = +0;

                                // Loop
                                while (evaluation) {
                                    // Initialization > Safe Subarray
                                    var safeSubarray;

                                    // Logic --- NOTE (Lapys) -> Assert the width of the array.
                                    if (LDKF.objectPrototypeHasOwnProperty(BIG_ARRAY, bigArrayIndex)) {
                                        // Update > Safe Subarray
                                        safeSubarray = BIG_ARRAY[bigArrayIndex];

                                        // Logic
                                        if (safeSubarray.length ^ LDKM.powInt(BIG_ARRAY.MAXIMUM_LENGTH, safeSubarray.depth)) {
                                            // Update > (Evaluation, Safe Subarray)
                                            evaluation = false;
                                            LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, safeSubarray, Element)
                                        }

                                        else
                                            // Update > Big Array Index
                                            bigArrayIndex += 1
                                    }

                                    else {
                                        // Initialization > Big Array Depth
                                        var bigArrayDepth = BIG_ARRAY.depth - 1;

                                        // Update > (Evaluation, Safe (Subarray, Array))
                                        evaluation = false;
                                        safeSubarray = new LDKT.BigArray;
                                        BIG_ARRAY[bigArrayIndex] = safeSubarray;

                                        // Modification > Safe Subarray > (Depth, Maximum Length)
                                        safeSubarray.depth = bigArrayDepth;
                                        safeSubarray.MAXIMUM_LENGTH = BIG_ARRAY.MAXIMUM_LENGTH;

                                        // Loop
                                        while (bigArrayDepth -= 1) {
                                            // (Modification, Update) > ...
                                            safeSubarray[+0] = new LDKT.BigArray;
                                            safeSubarray[+0].depth = bigArrayDepth;
                                            safeSubarray[+0].MAXIMUM_LENGTH = BIG_ARRAY.MAXIMUM_LENGTH;
                                            safeSubarray = safeSubarray[+0]
                                        }

                                        // Update > Big Array
                                        LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_ARRAY[bigArrayIndex], Element)
                                    }
                                }
                            }

                            // Modification > Big Array > (Length, Width)
                            BIG_ARRAY.length += 1;
                            BIG_ARRAY.width += 1
                        };

                        // Resize
                        LapysDevelopmentKit.Types.BigArrayPrototypeResize =
                        LapysDevelopmentKit.Types.BigArrayPrototype.resize = function resize(Length) {
                            // Constant > Big Array (Length)
                            var BIG_ARRAY = this, BIG_ARRAY_LENGTH = BIG_ARRAY.length;

                            // Logic
                            if (Length ^ BIG_ARRAY_LENGTH) {
                                // Initialization > Big Array Iterator
                                var bigArrayIterator;

                                // Logic
                                if (Length > BIG_ARRAY_LENGTH) {
                                    // Update > Big Array Iterator
                                    bigArrayIterator = Length - BIG_ARRAY_LENGTH;

                                    // Loop
                                    while (bigArrayIterator) {
                                        // Update > Big Array (Iterator)
                                        LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_ARRAY, undefined);
                                        bigArrayIterator -= 1
                                    }
                                }

                                else {
                                    // Update > Big Array IterTOR
                                    bigArrayIterator = BIG_ARRAY_LENGTH - Length;

                                    // Loop
                                    while (bigArrayIterator) {
                                        // Update > Big Array (Iterator)
                                        LDKF.functionPrototypeNiladicCall(LDKT.BigArrayPrototypePop, BIG_ARRAY);
                                        bigArrayIterator -= 1
                                    }
                                }
                            }
                        };

                        // Set Index
                        LapysDevelopmentKit.Types.BigArrayPrototypeSetIndex =
                        LapysDevelopmentKit.Types.BigArrayPrototype.setIndex = function setIndex(Index, Element) {
                            // Initialization > Big Array (Depth)
                            var bigArray = this;
                            var bigArrayDepth = bigArray.depth;

                            // Logic
                            if (bigArrayDepth == 1)
                                // Return
                                return (bigArray[Index] = Element);

                            else if (!Index) {
                                // Loop > Update > Big Array; Return
                                while (bigArrayDepth -= 1) bigArray = bigArray[Index];
                                return (bigArray[Index] = Element)
                            }

                            else {
                                // Constant > Big Array Maximum Length
                                var BIG_ARRAY_MAXIMUM_LENGTH = bigArray.MAXIMUM_LENGTH;

                                // Initialization > Big Array ((Former) Index (Length))
                                var bigArrayIndexLength = +0;
                                var bigArrayFormerIndex = +0, bigArrayIndex = +0;

                                // Loop
                                while (bigArrayDepth -= 1) {
                                    // Constant > Safe Subarray Maximum Breadth
                                    var SAFE_SUBARRAY_MAXIMUM_BREADTH = LDKM.powInt(BIG_ARRAY_MAXIMUM_LENGTH, bigArrayDepth);

                                    // Update > Big Array (Former) Index
                                    bigArrayFormerIndex = bigArrayIndex;
                                    bigArrayIndex = +0;

                                    // (Loop > )Update > Big Array Index
                                    while ((
                                        (bigArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH) +
                                        bigArrayIndexLength
                                    ) <= Index) bigArrayIndex += 1;
                                    bigArrayIndex -= 1;

                                    // Update > Big Array (Index Length)
                                    bigArrayIndexLength += bigArrayIndex * SAFE_SUBARRAY_MAXIMUM_BREADTH;
                                    bigArray = bigArray[bigArrayIndex]
                                }

                                // (Loop > )Update > Big Array Index
                                bigArrayIndex = +0;
                                while ((bigArrayIndex + bigArrayIndexLength) < Index) bigArrayIndex += 1;

                                // Return
                                return (bigArray[bigArrayIndex] = Element)
                            }
                        };

                    // ...
                    LapysDevelopmentKit.Constants.Data.BigArrayImperative = new LDKT.ArrayImperative(
                        function BigArrayPrototypeElementAt(BigArray, Index) { return LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigArray, Index) },
                        function BigArrayPrototypeSetIndex(BigArray, Index, Element) { return LDKF.functionPrototypeDyadicCall(LDKT.BigArrayPrototypeSetIndex, BigArray, Index, Element) },
                        function BigArrayPrototypeLength(BigArray) { return BigArray.length },
                        function BigArrayPrototypeResize(BigArray, Length) { return LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeResize, BigArray, Length) }
                    );

                /* Big Number
                        --- CITE (Lapys) -> https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic
                        --- NOTE (Lapys) -> Arbitrary-precision number.
                        --- WARN (Lapys) ->
                            - The implementation of `BigNumber``s here are implicitly limited due to maximum size of it`s storage mechanism (which is `BigArray``s).
                                `String``s could have been used instead to store the digits, but it was decided for `BigNumber``s to scale with the practical limits of `BigArray``s.
                            - Locked to the decimal number system (base 10).
                */
                LapysDevelopmentKit.Types.BigNumber = function BigNumber(Value) {
                    // Logic > ...
                    if (Value) {
                        var BIG_NUMBER = LDKT.BigNumberFromNumber(Value);

                        this.characteristics = BIG_NUMBER.characteristics;
                        this.mantissa = BIG_NUMBER.mantissa
                    }

                    else {
                        this.characteristics = new LDKT.BigArray;
                        this.mantissa = new LDKT.BigArray;

                        LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, this.characteristics, '0');
                        LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, this.mantissa, '0')
                    }

                    // Modification > Target > Signed
                    this.signed = false
                };
                    // Add
                    LapysDevelopmentKit.Types.BigNumberAdd =
                    LapysDevelopmentKit.Types.BigNumber.add = function add(BigNumberA, BigNumberB, PARSE_AS_SOURCE) {
                        // Constant > Addition
                        var ADDITION = PARSE_AS_SOURCE ? BigNumberA : new LDKT.BigNumber;

                        // Update > (Addition > Mantissa)
                        LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeCopy, ADDITION.mantissa, LDKF.digitsAdd(BigNumberA.mantissa, BigNumberB.mantissa, STRICT = 10, STRICT = LDKC.Data.BigArrayImperative, STRICT = LDKC.Data.NumberComponent["MANTISSA"]));

                        // Update > (Addition > Characteristics)
                        TMP && LDKF.digitsIncrement(ADDITION.characteristics, STRICT = 10, STRICT = LDKC.Data.BigArrayImperative);
                        TMP && LDKF.arrayPrototypeUnshift(ADDITION.characteristics, LDKF.getDigitsFromBase(10)[1], STRICT = null, STRICT = LDKC.Data.BigArrayImperative);

                        LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeCopy, ADDITION.characteristics, LDKF.digitsAdd(BigNumberA.characteristics, BigNumberB.characteristics, STRICT = 10, STRICT = LDKC.Data.BigArrayImperative, STRICT = LDKC.Data.NumberComponent["CHARACTERISTICS"]));

                        TMP && LDKF.arrayPrototypeUnshift(ADDITION.characteristics, LDKF.getDigitsFromBase(10)[1], STRICT = null, STRICT = LDKC.Data.BigArrayImperative);

                        // Return
                        return ADDITION
                    };

                    // Divide --- CHECKPOINT (Lapys)

                    // Equal --- NOTE (Lapys) -> Precision tolerance is not taken into account.
                    LapysDevelopmentKit.Types.BigNumberEquals =
                    LapysDevelopmentKit.Types.BigNumber.equals = function equals(BigNumberA, BigNumberB) {
                        // Constant > Big Number A (Characteristics, Mantissa) Length
                        var BIG_NUMBER_A_CHARACTERISTICS_LENGTH = BigNumberA.characteristics.length;
                        var BIG_NUMBER_A_MANTISSA_LENGTH = BigNumberA.mantissa.length;

                        // Logic
                        if (
                            BIG_NUMBER_A_CHARACTERISTICS_LENGTH == BigNumberB.characteristics.length &&
                            BIG_NUMBER_A_MANTISSA_LENGTH == BigNumberB.mantissa.length
                        ) {
                            // Initialization > Characteristics Iterator; Loop
                            var characteristicsIterator = BIG_NUMBER_A_CHARACTERISTICS_LENGTH;
                            while (characteristicsIterator) {
                                // Update > Characteristics Iterator
                                characteristicsIterator -= 1;

                                // Logic > Return
                                if (
                                    LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberA.characteristics, characteristicsIterator) !==
                                    LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberB.characteristics, characteristicsIterator)
                                ) return false
                            }

                            // Initialization > Mantissa Iterator; Loop
                            var mantissaIterator = BIG_NUMBER_A_CHARACTERISTICS_LENGTH;
                            while (mantissaIterator) {
                                // Update > Mantissa Iterator
                                mantissaIterator -= 1;

                                // Logic > Return
                                if (
                                    LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberA.mantissa, mantissaIterator) !==
                                    LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberB.mantissa, mantissaIterator)
                                ) return false
                            }

                            // Return
                            return true
                        }

                        // Return
                        return false
                    };

                    // From Number --- WARN (Lapys) -> Assumes the argument is only of type `BigNumber` or `Number`.
                    LapysDevelopmentKit.Types.BigNumberFromNumber =
                    LapysDevelopmentKit.Types.BigNumber.fromNumber = function fromNumber(Number) {
                        // Constant > Big Number
                        var BIG_NUMBER = new LDKT.BigNumber;

                        // Logic
                        if (Number instanceof LDKT.BigNumber) {
                            // Modification > Big Number > (Characteristics, Mantissa)
                            LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeCopy, BIG_NUMBER.characteristics, Number.characteristics);
                            LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeCopy, BIG_NUMBER.mantissa, Number.mantissa)
                        }

                        else if (LDKF.isBigInt(Number)) {
                            // Update > Number
                            Number = LDKF.toString(Number);

                            // : Constant > Characteristics Length
                            // : Initialization > Characteristics Iterator
                            var CHARACTERISTICS_LENGTH = LDKF.stringPrototypeLength(Number);
                            var characteristicsIterator = CHARACTERISTICS_LENGTH;

                            // Modification > Big Number > Characteristics
                            BIG_NUMBER.characteristics.length = +0;

                            // Loop > Update > (Big Number > Characteristics)
                            while (characteristicsIterator)
                                LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_NUMBER.characteristics, LDKF.stringPrototypeCharacterAt(Number, CHARACTERISTICS_LENGTH - (characteristicsIterator -= 1) - 1))
                        }

                        else if (LDKF.numberPrototypeIsSafe(Number)) {
                            // Update > Number
                            Number = LDKF.numberPrototypeIsInteger(Number) ? LDKF.toString(Number) + ".0" : LDKF.toString(Number);

                            // Constant > (Characteristics, Mantissa)
                            var CHARACTERISTICS = LDKF.stringPrototypeBeforeCharacter(Number, '.');
                            var MANTISSA = LDKF.stringPrototypeAfterCharacter(Number, '.');

                            // Modification > Big Number > (Characteristics, Mantissa)
                            BIG_NUMBER.characteristics = new LDKT.BigArray;
                            BIG_NUMBER.mantissa = new LDKT.BigArray;

                            // Logic
                            if (CHARACTERISTICS) {
                                // : Constant > Characteristics Length
                                // : Initialization > Characteristics Characteristics
                                var CHARACTERISTICS_LENGTH = LDKF.stringPrototypeLength(CHARACTERISTICS);
                                var characteristicsIterator = CHARACTERISTICS_LENGTH;

                                // Loop > Update > ...
                                while (characteristicsIterator) LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_NUMBER.characteristics, LDKF.stringPrototypeCharacterAt(CHARACTERISTICS, CHARACTERISTICS_LENGTH - (characteristicsIterator -= 1) - 1))
                            }

                            else
                                // Update > (Big Number > Characteristics)
                                LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_NUMBER.characteristics, '0');

                            // Logic
                            if (MANTISSA) {
                                // : Constant > Mantissa Length
                                // : Initialization > Mantissa Characteristics
                                var MANTISSA_LENGTH = LDKF.stringPrototypeLength(MANTISSA);
                                var mantissaIterator = MANTISSA_LENGTH;

                                // Loop > Update > ...
                                while (mantissaIterator) LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_NUMBER.mantissa, LDKF.stringPrototypeCharacterAt(MANTISSA, MANTISSA_LENGTH - (mantissaIterator -= 1) - 1))
                            }

                            else
                                // Update > (Big Number > Mantissa)
                                LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypePush, BIG_NUMBER.mantissa, '0');
                        }

                        // Return
                        return BIG_NUMBER
                    };

                    // Lesser Than
                    LapysDevelopmentKit.Types.BigNumberLesserThan =
                    LapysDevelopmentKit.Types.BigNumber.lesserThan = function lesserThan(BigNumberA, BigNumberB) {
                        // Logic
                        if (BigNumberA === BigNumberB)
                            // Return
                            return false;

                        else {
                            // Constant > Big Number (A, B) Characteristics Length
                            var BIG_NUMBER_A_CHARACTERISTICS_LENGTH = BigNumberA.characteristics.length;
                            var BIG_NUMBER_B_CHARACTERISTICS_LENGTH = BigNumberB.characteristics.length;

                            // Logic
                            if (BIG_NUMBER_A_CHARACTERISTICS_LENGTH < BIG_NUMBER_B_CHARACTERISTICS_LENGTH)
                                // Return
                                return true;

                            else if (BIG_NUMBER_A_CHARACTERISTICS_LENGTH == BIG_NUMBER_B_CHARACTERISTICS_LENGTH) {
                                // Constant > Base Digits
                                var BASE_DIGITS = LDKF.getDigitsFromBase(10);

                                // : Constant > Characteristic Length
                                // : Initialization > Characteristic Iterator
                                var CHARACTERISTICS_LENGTH = BIG_NUMBER_A_CHARACTERISTICS_LENGTH || BIG_NUMBER_B_CHARACTERISTICS_LENGTH;
                                var characteristicsIterator = CHARACTERISTICS_LENGTH;

                                // Loop
                                while (characteristicsIterator) {
                                    // Update > Characteristics Iterator
                                    characteristicsIterator -= 1;

                                    // Constant > Big Number (A, B) Characteristic (Digit)
                                    var BIG_NUMBER_A_CHARACTERISTIC_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberA.characteristics, CHARACTERISTICS_LENGTH - characteristicsIterator - 1);
                                    var BIG_NUMBER_A_CHARACTERISTIC_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_A_CHARACTERISTIC_DIGIT, STRICT = 10);

                                    var BIG_NUMBER_B_CHARACTERISTIC_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberB.characteristics, CHARACTERISTICS_LENGTH - characteristicsIterator - 1);
                                    var BIG_NUMBER_B_CHARACTERISTIC_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_B_CHARACTERISTIC_DIGIT, STRICT = 10);

                                    // Logic > Return
                                    if (BIG_NUMBER_A_CHARACTERISTIC_DIGIT_ENDIAN < BIG_NUMBER_B_CHARACTERISTIC_DIGIT_ENDIAN) return true;
                                    else if (BIG_NUMBER_A_CHARACTERISTIC_DIGIT_ENDIAN > BIG_NUMBER_B_CHARACTERISTIC_DIGIT_ENDIAN) return false
                                }

                                // Logic
                                if (LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberA) && !LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberB))
                                    // Return
                                    return false;

                                else if (!LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberA) && LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberB))
                                    // Return
                                    return true;

                                else {
                                    // : Constant > Mantissa Length
                                    // : Initialization > Mantissa Iterator
                                    var MANTISSA_LENGTH = LDKM.min(BigNumberA.mantissa.length, BigNumberB.mantissa.length);
                                    var mantissaIterator = MANTISSA_LENGTH;

                                    // Loop
                                    while (mantissaIterator) {
                                        // Update > Mantissa Iterator
                                        mantissaIterator -= 1;

                                        // Constant > Big Number (A, B) Mantissa Digit (Endian)
                                        var BIG_NUMBER_A_MANTISSA_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberA.mantissa, MANTISSA_LENGTH - mantissaIterator - 1);
                                        var BIG_NUMBER_A_MANTISSA_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_A_MANTISSA_DIGIT, STRICT = 10);

                                        var BIG_NUMBER_B_MANTISSA_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberB.mantissa, MANTISSA_LENGTH - mantissaIterator - 1);
                                        var BIG_NUMBER_B_MANTISSA_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_B_MANTISSA_DIGIT, STRICT = 10);

                                        // Logic > Return
                                        if (BIG_NUMBER_A_MANTISSA_DIGIT_ENDIAN < BIG_NUMBER_B_MANTISSA_DIGIT_ENDIAN) return true;
                                        else if (BIG_NUMBER_A_MANTISSA_DIGIT_ENDIAN > BIG_NUMBER_B_MANTISSA_DIGIT_ENDIAN) return false
                                    }
                                }

                                // Return
                                return MANTISSA_LENGTH == BigNumberA.mantissa.length && MANTISSA_LENGTH != BigNumberB.mantissa.length
                            }

                            else
                                // Return
                                return false
                        }
                    };

                    // Lesser Than Or Equal To
                    LapysDevelopmentKit.Types.BigNumberLesserThanOrEquals =
                    LapysDevelopmentKit.Types.BigNumber.lesserThanOrEquals = function lesserThanOrEquals(BigNumberA, BigNumberB) { return LDKT.BigNumberEquals(BigNumberA, BigNumberB) || LDKT.BigNumberLesserThan(BigNumberA, BigNumberB) };

                    // Greater Than
                    LapysDevelopmentKit.Types.BigNumberGreaterThan =
                    LapysDevelopmentKit.Types.BigNumber.greaterThan = function greaterThan(BigNumberA, BigNumberB) {
                        // Logic
                        if (BigNumberA === BigNumberB)
                            // Return
                            return false;

                        else {
                            // Constant > Big Number (A, B) Characteristics Length
                            var BIG_NUMBER_A_CHARACTERISTICS_LENGTH = BigNumberA.characteristics.length;
                            var BIG_NUMBER_B_CHARACTERISTICS_LENGTH = BigNumberB.characteristics.length;

                            // Logic
                            if (BIG_NUMBER_A_CHARACTERISTICS_LENGTH > BIG_NUMBER_B_CHARACTERISTICS_LENGTH)
                                // Return
                                return true;

                            else if (BIG_NUMBER_A_CHARACTERISTICS_LENGTH == BIG_NUMBER_B_CHARACTERISTICS_LENGTH) {
                                // Constant > Base Digits
                                var BASE_DIGITS = LDKF.getDigitsFromBase(10);

                                // : Constant > Characteristic Length
                                // : Initialization > Characteristic Iterator
                                var CHARACTERISTICS_LENGTH = BIG_NUMBER_A_CHARACTERISTICS_LENGTH || BIG_NUMBER_B_CHARACTERISTICS_LENGTH;
                                var characteristicsIterator = CHARACTERISTICS_LENGTH;

                                // Loop
                                while (characteristicsIterator) {
                                    // Update > Characteristics Iterator
                                    characteristicsIterator -= 1;

                                    // Constant > Big Number (A, B) Characteristic (Digit)
                                    var BIG_NUMBER_A_CHARACTERISTIC_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberA.characteristics, CHARACTERISTICS_LENGTH - characteristicsIterator - 1);
                                    var BIG_NUMBER_A_CHARACTERISTIC_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_A_CHARACTERISTIC_DIGIT, STRICT = 10);

                                    var BIG_NUMBER_B_CHARACTERISTIC_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberB.characteristics, CHARACTERISTICS_LENGTH - characteristicsIterator - 1);
                                    var BIG_NUMBER_B_CHARACTERISTIC_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_B_CHARACTERISTIC_DIGIT, STRICT = 10);

                                    // Logic > Return
                                    if (BIG_NUMBER_A_CHARACTERISTIC_DIGIT_ENDIAN > BIG_NUMBER_B_CHARACTERISTIC_DIGIT_ENDIAN) return true;
                                    else if (BIG_NUMBER_A_CHARACTERISTIC_DIGIT_ENDIAN < BIG_NUMBER_B_CHARACTERISTIC_DIGIT_ENDIAN) return false
                                }

                                // Logic
                                if (LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberA) && !LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberB))
                                    // Return
                                    return true;

                                else if (!LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberA) && LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeHasSignificantMantissa, BigNumberB))
                                    // Return
                                    return false;

                                else {
                                    // : Constant > Mantissa Length
                                    // : Initialization > Mantissa Iterator
                                    var MANTISSA_LENGTH = LDKM.min(BigNumberA.mantissa.length, BigNumberB.mantissa.length);
                                    var mantissaIterator = MANTISSA_LENGTH;

                                    // Loop
                                    while (mantissaIterator) {
                                        // Update > Mantissa Iterator
                                        mantissaIterator -= 1;

                                        // Constant > Big Number (A, B) Mantissa Digit (Endian)
                                        var BIG_NUMBER_A_MANTISSA_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberA.mantissa, MANTISSA_LENGTH - mantissaIterator - 1);
                                        var BIG_NUMBER_A_MANTISSA_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_A_MANTISSA_DIGIT, STRICT = 10);

                                        var BIG_NUMBER_B_MANTISSA_DIGIT = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, BigNumberB.mantissa, MANTISSA_LENGTH - mantissaIterator - 1);
                                        var BIG_NUMBER_B_MANTISSA_DIGIT_ENDIAN = LDKF.arrayPrototypeIndex(BASE_DIGITS, BIG_NUMBER_B_MANTISSA_DIGIT, STRICT = 10);

                                        // Logic > Return
                                        if (BIG_NUMBER_A_MANTISSA_DIGIT_ENDIAN > BIG_NUMBER_B_MANTISSA_DIGIT_ENDIAN) return true;
                                        else if (BIG_NUMBER_A_MANTISSA_DIGIT_ENDIAN < BIG_NUMBER_B_MANTISSA_DIGIT_ENDIAN) return false
                                    }
                                }

                                // Return
                                return MANTISSA_LENGTH != BigNumberA.mantissa.length && MANTISSA_LENGTH == BigNumberB.mantissa.length
                            }

                            else
                                // Return
                                return false
                        }
                    };

                    // Greater Than Or Equal To
                    LapysDevelopmentKit.Types.BigNumberGreaterThanOrEquals =
                    LapysDevelopmentKit.Types.BigNumber.greaterThanOrEquals = function greaterThanOrEquals(BigNumberA, BigNumberB) { return LDKT.BigNumberEquals(BigNumberA, BigNumberB) || LDKT.BigNumberGreaterThan(BigNumberA, BigNumberB) };

                    // Modulo --- CHECKPOINT (Lapys)
                    // Multiply --- CHECKPOINT (Lapys)
                    // Power --- CHECKPOINT (Lapys)
                    // Subtract --- CHECKPOINT (Lapys)

                    // Prototype
                    LapysDevelopmentKit.Types.BigNumberPrototype = LapysDevelopmentKit.Types.BigNumber.prototype;
                        // Add
                        LapysDevelopmentKit.Types.BigNumberPrototypeAdd =
                        LapysDevelopmentKit.Types.BigNumberPrototype.add = function add(BigNumber) { return LDKT.BigNumberAdd(this, BigNumber, STRICT = true) };

                        // Copy
                        LapysDevelopmentKit.Types.BigNumberPrototypeCopy =
                        LapysDevelopmentKit.Types.BigNumberPrototype.copy = function copy(BigNumber, CONVERT_TO_BIG_NUMBER) {
                            // Update > Big Number
                            CONVERT_TO_BIG_NUMBER && (BigNumber = LDKT.BigNumberFromNumber(BigNumber));

                            // Modification > Target > (Characteristics, Mantissa)
                            this.characteristics = BigNumber.characteristics;
                            this.mantissa = BigNumber.mantissa;

                            // Return
                            return this
                        };

                        // Decrement --- CHECKPOINT (Lapys)
                        // Divide
                        LapysDevelopmentKit.Types.BigNumberPrototypeDivide =
                        LapysDevelopmentKit.Types.BigNumberPrototype.divide = function divide(BigNumber) { return LDKT.BigNumberDivide(this, BigNumber, STRICT = true) };

                        // Has Significant Characteristics
                        LapysDevelopmentKit.Types.BigNumberPrototypeHasSignificantCharacteristics =
                        LapysDevelopmentKit.Types.BigNumberPrototype.hasSignificantCharacteristics = function hasSignificantCharacteristics() { var CHARACTERISTICS = this.characteristics; return !(CHARACTERISTICS.length == 1 && LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, CHARACTERISTICS, +0) === '0') };

                        // Has Significant Mantissa
                        LapysDevelopmentKit.Types.BigNumberPrototypeHasSignificantMantissa =
                        LapysDevelopmentKit.Types.BigNumberPrototype.hasSignificantMantissa = function hasSignificantMantissa() { var MANTISSA = this.mantissa; return !(MANTISSA.length == 1 && LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, MANTISSA, +0) === '0') };

                        // Increment --- CHECKPOINT (Lapys)

                        // Is Equal To
                        LapysDevelopmentKit.Types.BigNumberPrototypeIsEqualTo =
                        LapysDevelopmentKit.Types.BigNumberPrototype.isEqualTo = function isEqualTo(BigNumber) { return LDKT.BigNumberEquals(this, BigNumber) };

                        // Is Greater Than
                        LapysDevelopmentKit.Types.BigNumberPrototypeIsGreaterThan =
                        LapysDevelopmentKit.Types.BigNumberPrototype.isGreaterThan = function isGreaterThan(BigNumber) { return LDKT.BigNumberGreaterThan(this, BigNumber) };

                        // Is Greater Than
                        LapysDevelopmentKit.Types.BigNumberPrototypeIsGreaterThanOrEqualTo =
                        LapysDevelopmentKit.Types.BigNumberPrototype.isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(BigNumber) { return LDKT.BigNumberGreaterThanOrEquals(this, BigNumber) };

                        // Is Lesser Than
                        LapysDevelopmentKit.Types.BigNumberPrototypeIsLesserThan =
                        LapysDevelopmentKit.Types.BigNumberPrototype.isLesserThan = function isLesserThan(BigNumber) { return LDKT.BigNumberLesserThan(this, BigNumber) };

                        // Is Lesser Than
                        LapysDevelopmentKit.Types.BigNumberPrototypeIsLesserThanOrEqualTo =
                        LapysDevelopmentKit.Types.BigNumberPrototype.isLesserThanOrEqualTo = function isLesserThanOrEqualTo(BigNumber) { return LDKT.BigNumberLesserThanOrEquals(this, BigNumber) };

                        // Is Overflown
                        LapysDevelopmentKit.Types.BigNumberPrototypeIsOverflown =
                        LapysDevelopmentKit.Types.BigNumberPrototype.isOverflown = function isOverflown() { return LDKT.BigNumberLesserThanOrEqualTo(this, -LDKC.Numbers.MaximumIntegerValue) || LDKT.BigNumberGreaterThanOrEqualTo(this, LDKC.Numbers.MaximumIntegerValue) };

                        // Modulo
                        LapysDevelopmentKit.Types.BigNumberPrototypeModulo =
                        LapysDevelopmentKit.Types.BigNumberPrototype.modulo = function modulo(BigNumber) { return LDKT.BigNumberModulo(this, BigNumber, STRICT = true) };

                        // Multiply
                        LapysDevelopmentKit.Types.BigNumberPrototypeMultiply =
                        LapysDevelopmentKit.Types.BigNumberPrototype.multiply = function multiply(BigNumber) { return LDKT.BigNumberMultiply(this, BigNumber, STRICT = true) };

                        // Power
                        LapysDevelopmentKit.Types.BigNumberPrototypePower =
                        LapysDevelopmentKit.Types.BigNumberPrototype.power = function power(BigNumber) { return LDKT.BigNumberPower(this, BigNumber, STRICT = true) };

                        // Sign
                        LapysDevelopmentKit.Types.BigNumberPrototypeSign =
                        LapysDevelopmentKit.Types.BigNumberPrototype.sign = function sign(BigNumber) { this.signed = true; return this };

                        // Signed
                        LapysDevelopmentKit.Types.BigNumberPrototype.signed = false;

                        // Subtract
                        LapysDevelopmentKit.Types.BigNumberPrototypeSubtract =
                        LapysDevelopmentKit.Types.BigNumberPrototype.subtract = function subtract(BigNumber) { return LDKT.BigNumberSubtract(this, BigNumber, STRICT = true) };

                        // To Number
                        LapysDevelopmentKit.Types.BigNumberPrototypeToNumber =
                        LapysDevelopmentKit.Types.BigNumberPrototype.toNumber = function toNumber() { return LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeIsOverflown, this) ? this : LDKF.toNumber(LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeToString, this)) };

                        // To String
                        LapysDevelopmentKit.Types.BigNumberPrototypeToString =
                        LapysDevelopmentKit.Types.BigNumberPrototype.toString = function toString() {
                            // Initialization > String
                            var string = "";

                            // ... --- NOTE (Lapys) -> Concatenate the characteristics component.
                            var characteristicsIterator = this.characteristics.length;
                            while (characteristicsIterator) string = LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, this.characteristics, characteristicsIterator -= 1) + string;

                            // ... --- NOTE (Lapys) -> Concatenate the mantissa component.
                            var MANTISSA_LENGTH = this.mantissa.length;
                            if (MANTISSA_LENGTH) { var mantissaIterator = MANTISSA_LENGTH; string += '.'; while (mantissaIterator) string += LDKF.functionPrototypeMonoadicCall(LDKT.BigArrayPrototypeElementAt, this.mantissa, MANTISSA_LENGTH - (mantissaIterator -= 1) - 1) }

                            // Return
                            return string
                        };

                        // Unsign
                        LapysDevelopmentKit.Types.BigNumberPrototypeUnsign =
                        LapysDevelopmentKit.Types.BigNumberPrototype.unsign = function unsign(BigNumber) { this.signed = false; return this };

                /* Clock */
                    // Prototype
                    LapysDevelopmentKit.Types.ClockPrototype = LDKT.Clock.prototype;
                        // Check
                        LapysDevelopmentKit.Types.ClockPrototype.check = function check(Condition, Ontrue, Onfalse) { var evaluation, id; try { evaluation = Condition() } catch (error) {} id = LDKF.functionPrototypeMonoadicCall(LDKT.ClockPrototype.wind, this, function() { if (evaluation) { LDKF.functionPrototypeNiladicCall(LDKT.ClockPrototype.stop, id); Ontrue() } else Onfalse() }); return id };

                        // Measure
                        LapysDevelopmentKit.Types.ClockPrototype.measure = function measure() { return LDKC.Assertions.has_Performance_Constructor ? LDKF.functionPrototypeNiladicCall(LDKO.performancePrototypeNow, LDKC.Objects.performance) : LDKF.functionPrototypeNiladicCall(LDKO.dateNow, LDKO.date) };

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
                                hasDelay: (LDKF.getArgumentsLength(arguments) || 1) ^ 1,
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
                                LDKF.functionPrototypeTriadicCall(LDKT.ClockPrototype.check, CLOCK, function() { return !CLOCK.timed }, function() {}, function() { CLOCK.timeElapsed += LDKC.Constants.Number.FrameRate })

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
                                hasInterval: (LDKF.getArgumentsLength(arguments) || 1) ^ 1,
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

                /* Ranged Number --- NOTE (Lapys) -> Fixed-width number type. */
                LapysDevelopmentKit.Types.RangedNumber = function RangedNumber(MinimumValue, MaximumValue, Value) {
                    // Logic
                    if (MinimumValue instanceof LDKT.RangedNumber) {
                        // Constant > Ranged Number
                        var RANGED_NUMBER = LDKT.RangedNumberFromNumber(MinimumValue);

                        // Modification > Target > (Clamped, ..., Value)
                        this.clamped = RANGED_NUMBER.clamped;
                        this.MAXIMUM_VALUE = RANGED_NUMBER.MAXIMUM_VALUE;
                        this.MINIMUM_VALUE = RANGED_NUMBER.MINIMUM_VALUE;
                        this.value = RANGED_NUMBER.value
                    }

                    else {
                        // Modification > Target > (Clamped, ..., Value)
                        this.clamped = true;
                        this.MAXIMUM_VALUE = LDKC.Numbers["Infinity"];
                        this.MINIMUM_VALUE = -LDKC.Numbers["Infinity"];
                        this.value = Value || +0
                    }
                };
                    // Add
                    LapysDevelopmentKit.Types.RangedNumberAdd =
                    LapysDevelopmentKit.Types.RangedNumber.add = function add(RangedNumberA, RangedNumberB, PARSE_AS_SOURCE) {
                        // Constant > Addition
                        var ADDITION = PARSE_AS_SOURCE ? RangedNumberA : new LDKT.RangedNumber;

                        // ...
                        ADDITION.value = RangedNumberA.value + RangedNumberB.value;
                        ADDITION.clamped ? LDKT.RangedNumberClamp(ADDITION) : LDKT.RangedNumberOverflow(ADDITION);

                        // Return
                        return ADDITION
                    };

                    // Clamp
                    LapysDevelopmentKit.Types.RangedNumberClamp = function clamp(RangedNumber) {
                        // Constant > Ranged Number (Maximum, Minimum) Value
                        var RANGED_NUMBER_MAXIMUM_VALUE = RangedNumber.MAXIMUM_VALUE;
                        var RANGED_NUMBER_MINIMUM_VALUE = RangedNumber.MINIMUM_VALUE;

                        // Initialization > Ranged Number Value
                        var rangedNumberValue = RangedNumber.value;

                        // Logic
                        if (RANGED_NUMBER_MAXIMUM_VALUE > RANGED_NUMBER_MINIMUM_VALUE)
                            // Logic > Update > Ranged Number Value
                            if (rangedNumberValue < RANGED_NUMBER_MINIMUM_VALUE) rangedNumberValue = RANGED_NUMBER_MINIMUM_VALUE;
                            else if (rangedNumberValue > RANGED_NUMBER_MAXIMUM_VALUE) rangedNumberValue = RANGED_NUMBER_MAXIMUM_VALUE;

                        // Return
                        return RangedNumber
                    };

                    // Divide
                    LapysDevelopmentKit.Types.RangedNumberDivide =
                    LapysDevelopmentKit.Types.RangedNumber.divide = function divide(RangedNumberA, RangedNumberB, PARSE_AS_SOURCE) {
                        // Constant > Division
                        var DIVISION = PARSE_AS_SOURCE ? RangedNumberA : new LDKT.RangedNumber;

                        // ...
                        DIVISION.value = RangedNumberA.value / RangedNumberB.value;
                        DIVISION.clamped ? LDKT.RangedNumberClamp(DIVISION) : LDKT.RangedNumberOverflow(DIVISION);

                        // Return
                        return DIVISION
                    };

                    // Equals
                    LapysDevelopmentKit.Types.RangedNumberEquals =
                    LapysDevelopmentKit.Types.RangedNumber.equals = function equals(RangedNumberA, RangedNumberB) { return RangedNumberA.value == RangedNumberB.value };

                    // From Number
                    LapysDevelopmentKit.Types.RangedNumberFromNumber =
                    LapysDevelopmentKit.Types.RangedNumber.fromNumber = function fromNumber(Number) {
                        // Constant > Ranged Number
                        var RANGED_NUMBER = new LDKT.RangedNumber;

                        // Logic > ...
                        if (Number instanceof LDKT.RangedNumber) { RANGED_NUMBER.clamped = Number.clamped; RANGED_NUMBER.MAXIMUM_VALUE = Number.MAXIMUM_VALUE; RANGED_NUMBER.MINIMUM_VALUE = Number.MINIMUM_VALUE; RANGED_NUMBER.value = Number.value }
                        else if (LDKF.isBigInt(Number)) RANGED_NUMBER.value = Number;
                        else if (LDKF.numberPrototypeIsSafe(Number)) RANGED_NUMBER.value = Number;

                        // Return
                        return RANGED_NUMBER
                    };

                    // Greater Than
                    LapysDevelopmentKit.Types.RangedNumberGreaterThan =
                    LapysDevelopmentKit.Types.RangedNumber.greaterThan = function greaterThan(RangedNumberA, RangedNumberB) { return RangedNumberA.value > RangedNumberB.value };

                    // Greater Than Or Equal To
                    LapysDevelopmentKit.Types.RangedNumberGreaterThanOrEquals =
                    LapysDevelopmentKit.Types.RangedNumber.greaterThanOrEquals = function greaterThanOrEquals(RangedNumberA, RangedNumberB) { return RangedNumberA.value >= RangedNumberB.value };

                    // Lesser Than
                    LapysDevelopmentKit.Types.RangedNumberLesserThan =
                    LapysDevelopmentKit.Types.RangedNumber.lesserThan = function lesserThan(RangedNumberA, RangedNumberB) { return RangedNumberA.value < RangedNumberB.value };

                    // Lesser Than Or Equal To
                    LapysDevelopmentKit.Types.RangedNumberLesserThanOrEquals =
                    LapysDevelopmentKit.Types.RangedNumber.lesserThanOrEquals = function lesserThanOrEquals(RangedNumberA, RangedNumberB) { return RangedNumberA.value <= RangedNumberB.value };

                    // Modulo
                    LapysDevelopmentKit.Types.RangedNumberModulo =
                    LapysDevelopmentKit.Types.RangedNumber.modulo = function modulo(RangedNumberA, RangedNumberB, PARSE_AS_SOURCE) {
                        // Constant > Modulus
                        var MODULUS = PARSE_AS_SOURCE ? RangedNumberA : new LDKT.RangedNumber;

                        // ...
                        MODULUS.value = RangedNumberA.value % RangedNumberB.value;
                        MODULUS.clamped ? LDKT.RangedNumberClamp(MODULUS) : LDKT.RangedNumberOverflow(MODULUS);

                        // Return
                        return MODULUS
                    };

                    // Multiply
                    LapysDevelopmentKit.Types.RangedNumberMultiply =
                    LapysDevelopmentKit.Types.RangedNumber.multiply = function multiply(RangedNumberA, RangedNumberB, PARSE_AS_SOURCE) {
                        // Constant > Multiplication
                        var MULTIPLICATION = PARSE_AS_SOURCE ? RangedNumberA : new LDKT.RangedNumber;

                        // ...
                        MULTIPLICATION.value = RangedNumberA.value * RangedNumberB.value;
                        MULTIPLICATION.clamped ? LDKT.RangedNumberClamp(MULTIPLICATION) : LDKT.RangedNumberOverflow(MULTIPLICATION);

                        // Return
                        return MULTIPLICATION
                    };

                    // Overflow
                    LapysDevelopmentKit.Types.RangedNumberOverflow = function overflow(RangedNumber) {
                        // Constant > Ranged Number (Maximum, Minimum) Value
                        var RANGED_NUMBER_MAXIMUM_VALUE = RangedNumber.MAXIMUM_VALUE;
                        var RANGED_NUMBER_MINIMUM_VALUE = RangedNumber.MINIMUM_VALUE;

                        // Initialization > Ranged Number Value
                        var rangedNumberValue = RangedNumber.value;

                        // Logic
                        if (RANGED_NUMBER_MAXIMUM_VALUE > RANGED_NUMBER_MINIMUM_VALUE)
                            // Logic > Update > Ranged Number Value
                            if (rangedNumberValue < RANGED_NUMBER_MINIMUM_VALUE) rangedNumberValue = RANGED_NUMBER_MAXIMUM_VALUE - rangedNumberValue;
                            else if (rangedNumberValue > RANGED_NUMBER_MAXIMUM_VALUE) rangedNumberValue = RANGED_NUMBER_MINIMUM_VALUE + rangedNumberValue;

                        // Return
                        return RangedNumber
                    };

                    // Power
                    LapysDevelopmentKit.Types.RangedNumberPower =
                    LapysDevelopmentKit.Types.RangedNumber.power = function power(RangedNumberA, RangedNumberB, PARSE_AS_SOURCE) {
                        // Constant > Power
                        var POWER = PARSE_AS_SOURCE ? RangedNumberA : new LDKT.RangedNumber;

                        // ...
                        POWER.value = LDKM.pow(RangedNumberA.value, RangedNumberB.value);
                        POWER.clamped ? LDKT.RangedNumberClamp(POWER) : LDKT.RangedNumberOverflow(POWER);

                        // Return
                        return POWER
                    };

                    // Sign
                    LapysDevelopmentKit.Types.RangedNumberSign =
                    LapysDevelopmentKit.Types.RangedNumber.sign = function sign(RangedNumber, PARSE_AS_SOURCE) {
                        // Constant > Ranged Number
                        var RANGED_NUMBER;

                        // Logic > ...
                        if (PARSE_AS_SOURCE) RANGED_NUMBER = RangedNumber;
                        else if (RANGED_NUMBER) { RANGED_NUMBER = new LDKT.RangedNumber; LDKF.functionPrototypeMonoadicCall(LDKT.RangedNumberPrototypeCopy, RANGED_NUMBER, RangedNumber) }

                        // ...
                        (RANGED_NUMBER.value > -0) && (RANGED_NUMBER.value = -RANGED_NUMBER.value);
                        RANGED_NUMBER.clamped ? LDKT.RangedNumberClamp(RANGED_NUMBER) : LDKT.RangedNumberOverflow(RANGED_NUMBER);

                        // Return
                        return RANGED_NUMBER
                    };

                    // Subtract
                    LapysDevelopmentKit.Types.RangedNumberSubtract =
                    LapysDevelopmentKit.Types.RangedNumber.subtract = function subtract(RangedNumberA, RangedNumberB, PARSE_AS_SOURCE) {
                        // Constant > Subtraction
                        var SUBTRACTION = PARSE_AS_SOURCE ? RangedNumberA : new LDKT.RangedNumber;

                        // ...
                        SUBTRACTION.value = RangedNumberA.value - RangedNumberB.value;
                        SUBTRACTION.clamped ? LDKT.RangedNumberClamp(SUBTRACTION) : LDKT.RangedNumberOverflow(SUBTRACTION);

                        // Return
                        return SUBTRACTION
                    };

                    // Unsign
                    LapysDevelopmentKit.Types.RangedNumberUnsign =
                    LapysDevelopmentKit.Types.RangedNumber.unsign = function unsign(RangedNumber, PARSE_AS_SOURCE) {
                        // Constant > Ranged Number
                        var RANGED_NUMBER;

                        // Logic > ...
                        if (PARSE_AS_SOURCE) RANGED_NUMBER = RangedNumber;
                        else if (RANGED_NUMBER) { RANGED_NUMBER = new LDKT.RangedNumber; LDKF.functionPrototypeMonoadicCall(LDKT.RangedNumberPrototypeCopy, RANGED_NUMBER, RangedNumber) }

                        // ...
                        (RANGED_NUMBER.value < +0) && (RANGED_NUMBER.value = -RANGED_NUMBER.value);
                        RANGED_NUMBER.clamped ? LDKT.RangedNumberClamp(RANGED_NUMBER) : LDKT.RangedNumberOverflow(RANGED_NUMBER);

                        // Return
                        return RANGED_NUMBER
                    };

                    // Prototype
                    LapysDevelopmentKit.Types.RangedNumberPrototype = LapysDevelopmentKit.Types.RangedNumber.prototype;
                        // ...
                        LapysDevelopmentKit.Types.RangedNumberPrototype.add = function add(RangedNumber) { return LDKT.RangedNumberAdd(this, RangedNumber, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototypeCopy =
                        LapysDevelopmentKit.Types.RangedNumberPrototype.copy = function copy(RangedNumber) { this.MAXIMUM_VALUE = RangedNumber.MAXIMUM_VALUE; this.MINIMUM_VALUE = RangedNumber.MINIMUM_VALUE; this.value = RangedNumber.value };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.decrement = function decrement() { this.value -= 1; LDKT.RangedNumberClamp(this); return this };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.divide = function divide(RangedNumber) { return LDKT.RangedNumberDivide(this, RangedNumber, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.increment = function increment() { this.value += 1; LDKT.RangedNumberClamp(this); return this };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.isEqualTo = function isEqualTo(RangedNumber) { return LDKT.RangedNumberEquals(this, RangedNumber) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.isGreaterThan = function isGreaterThan(RangedNumber) { return LDKT.RangedNumberGreaterThan(this, RangedNumber) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(RangedNumber) { return LDKT.RangedNumberGreaterThanOrEquals(this, RangedNumber) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.isLesserThan = function isLesserThan(RangedNumber) { return LDKT.RangedNumberLesserThan(this, RangedNumber) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.isLesserThanOrEqualTo = function isLesserThanOrEqualTo(RangedNumber) { return LDKT.RangedNumberLesserThanOrEquals(this, RangedNumber) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.modulo = function modulo(RangedNumber) { return LDKT.RangedNumberModulo(this, RangedNumber, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.multiply = function multiply(RangedNumber) { return LDKT.RangedNumberMultiply(this, RangedNumber, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.power = function power(RangedNumber) { return LDKT.RangedNumberPower(this, RangedNumber, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.sign = function sign() { return LDKT.RangedNumberSign(this, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.subtract = function subtract(RangedNumber) { return LDKT.RangedNumberSubtract(this, RangedNumber, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.unsign = function unsign() { return LDKT.RangedNumberUnsign(this, STRICT = true) };
                        LapysDevelopmentKit.Types.RangedNumberPrototypeToNumber =
                        LapysDevelopmentKit.Types.RangedNumberPrototype.toNumber = function toNumber() { return this.value };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.toString = function toString() { return LDKF.toString(this.value) };
                        LapysDevelopmentKit.Types.RangedNumberPrototype.value = +0;
                        LapysDevelopmentKit.Types.RangedNumberPrototype.valueOf = function valueOf() { return LDKF.functionPrototypeNiladicCall(LDKT.RangedNumberPrototypeToNumber, this) };

                /* Safe Number
                        --- NOTE (Lapys) -> Defers between the `BigNumber` and `Number` types for performance.
                        --- WARN (Lapys) -> Does not support `BigInt``s.
                */
                LapysDevelopmentKit.Types.SafeNumber = function SafeNumber(Value) { this.value = Value ? LDKT.SafeNumberFromNumber(Value).value : +0 };
                    // Add --- CHECKPOINT (Lapys)
                    // From Number --- WARN (Lapys) -> Assumes the argument is only of type `BigNumber` or `Number`.
                    LapysDevelopmentKit.Types.SafeNumberFromNumber =
                    LapysDevelopmentKit.Types.SafeNumber.fromNumber = function fromNumber(Number) {
                        // Constant > Safe Number
                        var SAFE_NUMBER = new LDKT.SafeNumber;

                        // Logic > Modification > Safe Number > Value
                        if (Number instanceof LDKT.BigNumber) SAFE_NUMBER.value = Number;
                        else if (LDKF.numberPrototypeIsOverflown(Number)) SAFE_NUMBER.value = LDKT.BigNumberFromNumber(Number);
                        else SAFE_NUMBER.value = Number || +0;

                        // Return
                        return SAFE_NUMBER
                    };

                    // Prototype
                        // To Big Number
                        LapysDevelopmentKit.Types.SafeNumberPrototypeToBigNumber =
                        LapysDevelopmentKit.Types.SafeNumber.prototype.toBigNumber = function toBigNumber() { return this.value instanceof LDKT.BigNumber ? this.value : LDKT.BigNumberFromNumber(this.value) };

                        // To Number
                        LapysDevelopmentKit.Types.SafeNumberPrototypeToNumber =
                        LapysDevelopmentKit.Types.SafeNumber.prototype.toNumber = function toNumber() { return this.value };

                        // To String
                        LapysDevelopmentKit.Types.SafeNumberPrototypeToString =
                        LapysDevelopmentKit.Types.SafeNumber.prototype.toString = function toString() { var VALUE = this.value; return VALUE instanceof LDKT.BigNumber ? LDKF.functionPrototypeNiladicCall(LDKT.BigNumberPrototypeToString, VALUE) : LDKF.toString(VALUE) };

                /* Token --- NOTE (Lapys) -> Semantic type for string source parsing. */
                LapysDevelopmentKit.Types.Token = function Token(Source) { this.source = Source || ""; this.subtokens = null };
                    // Prototype
                    LapysDevelopmentKit.Types.TokenPrototype = LapysDevelopmentKit.Types.Token.prototype;
                        // Add Subtoken
                        LapysDevelopmentKit.Types.TokenPrototype.addSubtoken = function addSubtoken(Token) { if (LDKF.isNull(this.subtokens)) { this.subtokenCount = 1; this.subtokens = [Token] } else { this.subtokens[this.subtokenCount] = Token; this.subtokenCount += 1 } Token.supertoken = this };

                        // Subtoken(s, Count)
                        LapysDevelopmentKit.Types.TokenPrototype.subtokenCount = +0;
                        LapysDevelopmentKit.Types.TokenPrototype.subtokens = [];

                        // Super Token
                        LapysDevelopmentKit.Types.TokenPrototype.supertoken = null;

                        // To String
                        LapysDevelopmentKit.Types.TokenPrototype.toString = function toString() { return this.source };

                /* Vendor --- NOTE (Lapys) -> Container for data about third-party JavaScript software. */
                LapysDevelopmentKit.Types.Vendor = function Vendor(name, namespace) { this.name = name; this.namespace = namespace };
                    // Prototype > To String
                    LapysDevelopmentKit.Types.Vendor.prototype.toString = function toString() { return LDKF.toString(LDKF.objectPrototypeHasProperty(this, "name") ? this.name : "") };

        /* Update > Global */
        try { GLOBAL = LDKO["function"]("return this")() || LDKF.eval("this") }
        catch (error) { GLOBAL = typeof self == "undefined" ? (typeof window == "undefined" ? (typeof global == "undefined" ? undefined : global) : window) : self }

    /* ... --- CHECKPOINT (Lapys) -> Update this */
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
