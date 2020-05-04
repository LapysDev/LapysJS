/** Main
    @author: LapysDev Team
    @description: LapysJS is a general-purpose, semantic and universal JavaScript library
    @version: 0.0.11
    @url: https://www.github.com/LapysDev/LapysJS

    --- CODE ---
        #Lapys:
            class ConstructorName {
                var CONSTANT; var variable;

                function ConstantFunction(ConstantParameter, FLAG_PARAMETER) {}
                function variableFunction(variableParameter, FLAG_PARAMETER) {}
            };

            _Native Name_

    --- CONSIDERATION ---
        #Lapys:
            - Defer to object literals (`{}`) instead of array literals (`[]`) for internally managed and locally-scoped collections and lists.
                (Although the structure`s meaning & significance would be strongly-dependent on its identifier name rather than syntax).
            - Implement prototype-less objects as a substitute for `{}` object literals.

    --- NOTE ---
        #Lapys:
            - Details:
                -- Average File Upload Speed: --ms
                -- Supported Development Environments:
                        --- Android (browser)
                        --- Internet Explorer 3 - 11 (browser) --- NOTE (Lapys) -> Deprecated.
                        --- Google Chrome (browser)
                        --- Microsoft Edge (browser)
                        --- Mozilla Firefox (browser)
                        --- Netscape Navigator 2 - 9 (browser) --- NOTE (Lapys) -> Deprecated.
                        --- Node.js (runtime)
                        --- Safari (browser)
                        --- others...

                -- Supported Environment Standards:
                    --- ECMAScript 2, 3rd Edition (1999) - current...
                    --- JavaScript v1.3 - current...

            - Notes:
                -- The library makes an effort to use only native features of JavaScript to allow for universal compatibility with legacy & modern host environments.

                    It also avoids liberal use of vendor-specific (or environment-restricted) features & APIs.
                    This is mainly due to "subtle" inconsistencies in the adaptation of the ECMAScript standard for JavaScript in consumer software and custom runtimes
                    (Hence the need for conditional comments (by Microsoft), fallbacks, polyfills, shims & shivs (by John Resig and Sam Ruby) and so on).

                    Of course, this supports the concept of spoof-proofing [https://en.m.wikipedia.org/wiki/Spoofing_attack] which is a discipline that prevents data being masqueraded and falsified.
                    Unfortunately, the JavaScript language adoption is limited in the context of its everyday-use APIs coupled with such security;
                    which leads to most versions of the language being impossible to spoof-proof.

                    Conversely, this decision supports the design standards of the Lapys Development Kit into JavaScript such as:
                        --- meaning within the code and respective documentation must be clear and explicit,
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
            - Defer to the shorter syntax `for (;;)` instead of `while (true)` for infinite loops.
            - Dynamically created (and destroyed) object properties should be accessed with the string property notation only (to further differentiate custom data & persistent data).
            - Due to the ECMAScript standard supporting multiple zero types, it is a rule to explicitly & strictly differentiate between each of those values (e.g.: `-0` and `+0`) except in special cases (e.g.: boolean inferences).
            - Even common methods and routines must be parsed through function calls & references.
            - Inline function expressions are only allowed in:
                -- Defining the `Main` function or
                -- Defining a phase: `Initiate`, `Update`, `Reset` or `Terminate` or
                -- If the alternative is less efficient/ preferable.
            - "Like"`s denote inheritance and polymorphism; "Variant"`s denote context and typing.
            - Loops must not be terminated with the `break` or `return` statement if feasible (for design & optimization purposes).
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
            - Non-persistent object properties must be delimited as strings (e.g.: `{"property-name": propertyValue}` not `{propertyName: propertyValue}`)
            - Object properties (except the `prototype` property) must be initially declared within the object before accessing/ mutating them.
            - Prevent repeated dynamic lookups (e.g.: `for (var iterator = 0; iterator ^ [1, 0, 1].length; iterator += 1) ...`).
            - Private functions should not strictly assert its parameters.
            - `arguments` objects can only be parsed in JavaScript`s Strict Mode.

            This is to keep the language somewhat universally readable and similar to other programming languages.

    --- WARN ---
        #Lapys:
            The class & constant parameter naming convention are similar which may lead to unwanted conflicts.
            Unfortunately there is no feature to specify constant parameters within function signatures explicitly in JavaScript.
*/
+(function Main() {
    /* Constants > ... */
    var AUTHOR = "Lapys";
    var DESCRIPTION = "LapysJS is a general-purpose, semantic and universal JavaScript library";
    var URL = "https://www.github.com/LapysDev/LapysJS";
    var VERSION = "0.0.10";

    /* Global > ... */
        // [Data & Information]
        var GLOBAL; // NOTE (Lapys) -> The global host object or namespace of the current environment.
        var SETTINGS = {}; // NOTE (Lapys) -> Script directives namespace which determine how the library will be installed.

        // [State]
        var ANY = {}; // NOTE (Lapys) -> Generalized data (although unique in value).
        var ERROR = {message: null};
            // NOTE (Lapys) -> Denotes a silent exception when returned from a function.
            // WARN (Lapys) -> Does not take precedence over common/ default errors (e.g.: returning `-1` when an index is unfounded).
        var FLAG; // NOTE (Lapys) -> Argument to a logical function parameter; Also known as an Argument Flag.
        var TMP; // NOTE (Lapys) -> Global variable for critical or temporary data.

    /* Polyfills > ... */
    var undefined = void +0; // WARN (Lapys) -> Should not be legal but inadvertently is.

    /* Namespace > Lapys ... --- NOTE (Lapys) -> Definitions only. */
    var LapysDevelopmentKit = {
        Constants: {
            Alphabets: null,
            ASCIICharacters: null,
            Array: {ASCIISortComparator: null, BubbleSorter: null, InsertionSorter: null, MergeSorter: null, Sorter: null, TimSorter: null, TimSorterRunSize: 32},
            BinaryDigits: null,
            CSSLengthUnits: null,
            CSSSourceCharacterSequences: null,
            DecimalDigits: null,
            DigitCarry: 0,
            DigitsCarry: 0,
            FrameRate: null,
            Has_cancelAnimationFrame_Function: false,
            Has_Document_Constructor: false,
            Has_Element_Constructor: false,
            Has_HTMLDocument_Constructor: false,
            Has_HTMLElement_Constructor: false,
            Has_requestAnimationFrame_Function: false,
            HexadecimalDigits: null,
            HTMLElementTagNames: null,
            Imperatives: {Array: null, BigArray: null, BigNumber: null, String: null},
            Infinity: null,
            IntegerBitSize: null,
            IsCommandLineEnvironment: null,
            IsTextEnvironment: null,
            IsWebBrowserEnvironment: null,
            PointerBitSize: null,
            JavaScriptSourceKeywords: null,
            JavaScriptSourceLineTerminators: null,
            JavaScriptSourceSpoofTokens: null,
            JavaScriptSourceWhitespaceCharacterSequences: null,
            LanguageCodes: null,
            LowercaseAlphabets: null,
            MaximumArrayLength: null,
            MaximumIntegerValue: null,
            MaximumSafeIntegerValue: null,
            NaN: null,
            NumberComponent: null,
            OctalDigits: null,
            SortableCharacters: null,
            SourceTypes: null,
            SymbolCharacters: null,
            TokenTypes: null,
            TrimmableSequences: null,
            UppercaseAlphabets: null
        },
        Environment: {},
        Functions: {
            arrayVariantPrototypeAfter: null,
            arrayVariantPrototypeAfterFromBack: null,
            arrayVariantPrototypeAfterFromFront: null,
            arrayVariantPrototypeAfterIndex: null,
            arrayVariantPrototypeBefore: null,
            arrayVariantPrototypeBeforeFromBack: null,
            arrayVariantPrototypeBeforeFromFront: null,
            arrayVariantPrototypeBeforeIndex: null,
            arrayVariantPrototypeClone: null,
            arrayVariantPrototypeConcatenate: null,
            arrayVariantPrototypeCopy: null,
            arrayVariantPrototypeCount: null,
            arrayVariantPrototypeCut: null,
            arrayVariantPrototypeCutAt: null,
            arrayVariantPrototypeCutLeft: null,
            arrayVariantPrototypeCutRight: null,
            arrayVariantPrototypeCycle: null,
            arrayVariantPrototypeDepth: null,
            arrayVariantPrototypeElementAt: null,
            arrayVariantPrototypeEvery: null,
            arrayVariantPrototypeFill: null,
            arrayVariantPrototypeFind: null,
            arrayVariantPrototypeFindFromBack: null,
            arrayVariantPrototypeFindFromFront: null,
            arrayVariantPrototypeFirst: null,
            arrayVariantPrototypeFlatten: null,
            arrayVariantPrototypeFrequency: null,
            arrayVariantPrototypeIncludes: null,
            arrayVariantPrototypeIndex: null,
            arrayVariantPrototypeIndexFromBack: null,
            arrayVariantPrototypeIndexFromFront: null,
            arrayVariantPrototypeInsertAt: null,
            arrayVariantPrototypeLast: null,
            arrayVariantPrototypeLength: null,
            arrayVariantPrototypeLike: null,
            arrayVariantPrototypeMap: null,
            arrayVariantPrototypePop: null,
            arrayVariantPrototypePush: null,
            arrayVariantPrototypeRemove: null,
            arrayVariantPrototypeRemoveDuplicate: null,
            arrayVariantPrototypeRemoveDuplicateFromBack: null,
            arrayVariantPrototypeRemoveDuplicateFromFront: null,
            arrayVariantPrototypeRemoveDuplicates: null,
            arrayVariantPrototypeRemoveFromBack: null,
            arrayVariantPrototypeRemoveFromFront: null,
            arrayVariantPrototypeRemoveRepeat: null,
            arrayVariantPrototypeRemoveRepeatFromBack: null,
            arrayVariantPrototypeRemoveRepeatFromFront: null,
            arrayVariantPrototypeRemoveRepeats: null,
            arrayVariantPrototypeRepeat: null,
            arrayVariantPrototypeReplace: null,
            arrayVariantPrototypeReplaceDuplicate: null,
            arrayVariantPrototypeReplaceDuplicateFromBack: null,
            arrayVariantPrototypeReplaceDuplicateFromFront: null,
            arrayVariantPrototypeReplaceDuplicates: null,
            arrayVariantPrototypeReplaceFromBack: null,
            arrayVariantPrototypeReplaceFromFront: null,
            arrayVariantPrototypeReplaceRepeat: null,
            arrayVariantPrototypeReplaceRepeatFromBack: null,
            arrayVariantPrototypeReplaceRepeatFromFront: null,
            arrayVariantPrototypeReplaceRepeats: null,
            arrayVariantPrototypeResize: null,
            arrayVariantPrototypeSetIndex: null,
            arrayVariantPrototypeShift: null,
            arrayVariantPrototypeSimilar: null,
            arrayVariantPrototypeSlice: null,
            arrayVariantPrototypeSome: null,
            arrayVariantPrototypeSort: null,
            characterIsAlphabet: null,
            characterIsBinary: null,
            characterIsDecimal: null,
            characterIsHexadecimal: null,
            characterIsLowercaseAlphabet: null,
            characterIsOctal: null,
            characterIsUppercaseAlphabet: null,
            digitDecrement: null,
            digitDivide: null,
            digitIncrement: null,
            digitMultiply: null,
            digitSubtract: null,
            digitSum: null,
            digitsPrototypeDecrement: null,
            digitsPrototypeDivide: null,
            digitsPrototypeIncrement: null,
            digitsPrototypeMultiply: null,
            digitsPrototypeSubtract: null,
            digitsPrototypeSum: null,
            evaluate: null,
            functionIsArrow: null,
            functionIsAsynchronous: null,
            functionIsAsynchronousArrow: null,
            functionIsAsynchronousGenerator: null,
            functionIsGenerator: null,
            functionIsNative: null,
            functionIsNativeAsynchronous: null,
            functionIsNativeAsynchronousArrow: null,
            functionIsNativeAsynchronousGenerator: null,
            functionIsNativeArrow: null,
            functionIsNativeGenerator: null,
            functionPrototypeApply: null,
            functionPrototypeArity: null,
            functionPrototypeBody: null,
            functionPrototypeCall: null,
            functionPrototypeDyadicCall: null,
            functionPrototypeFirst: null,
            functionPrototypeHead: null,
            functionPrototypeLast: null,
            functionPrototypeMonoadicCall: null,
            functionPrototypeName: null,
            functionPrototypeParameters: null,
            functionPrototypeParametersSource: null,
            functionPrototypePrototype: null,
            functionPrototypeNiladicCall: null,
            functionPrototypeTriadicCall: null,
            functionPrototypeToSourceString: null,
            isArray: null,
            isBigInteger: null,
            isBoolean: null,
            isConstructible: null,
            isFunction: null,
            isNonConstructible: null,
            isNull: null,
            isNumber: null,
            isObjectLike: null, // NOTE (Lapys) -> Inherits the `Object` constructor.
            isPrimitiveVariant: null, // NOTE (Lapys) -> Is strictly of the `Object` constructor or a non-`Object` based constructor.
            isString: null,
            isSymbol: null,
            isVoid: null,
            is_ANY_: null,
            is_ERROR_: null,
            is_FLAG_: null,
            is_TMP_: null,
            numberPrototypeIsBitwiseEven: null,
            numberPrototypeIsBitwiseInteger: null,
            numberPrototypeIsBitwiseOdd: null,
            numberPrototypeIsEven: null,
            numberPrototypeIsFinite: null,
            numberPrototypeIsInfinite: null,
            numberPrototypeIsInteger: null,
            numberPrototypeIsNaN: null,
            numberPrototypeIsOdd: null,
            numberPrototypeIsSafe: null,
            objectAssign: null,
            objectDefineProperty: null,
            objectGetOwnPropertyDescriptor: null,
            objectGetOwnPropertyDescriptors: null,
            objectGetOwnPropertyNames: null,
            objectGetOwnPropertySymbols: null,
            objectGetOwnPropertyValues: null,
            objectGetProtoypeOf: null,
            objectKeys: null,
            objectPrototypeAssign: null,
            objectPrototypeClone: null,
            objectPrototypeConcatenate: null,
            objectPrototypeConstructor: null,
            objectPrototypeCopy: null,
            objectPrototypeDefineProperty: null,
            objectPrototypeDeleteProperty: null,
            objectPrototypeDescribeAllProperty: null,
            objectPrototypeDescribeProperty: null,
            objectPrototypeDepth: null,
            objectPrototypeGetProperty: null,
            objectPrototypeHasProperty: null,
            objectPrototypeInstanceOf: null,
            objectPrototypeSetProperty: null,
            objectSetPrototypeOf: null,
            objectValues: null,
            stringVariantIsCSSLength: null,
            stringVariantIsEscaped: null,
            stringVariantIsLowercase: null,
            stringVariantIsRotationOf: null,
            stringVariantIsScriptLineTerminatorToken: null,
            stringVariantIsScriptNumericLiteralToken: null,
            stringVariantIsScriptWhitespaceToken: null,
            stringVariantIsUppercase: null,
            stringVariantPrototypeAfter: null,
            stringVariantPrototypeAfterCharacter: null,
            stringVariantPrototypeAfterCharacterFromBack: null,
            stringVariantPrototypeAfterCharacterFromFront: null,
            stringVariantPrototypeAfterFromBack: null,
            stringVariantPrototypeAfterFromFront: null,
            stringVariantPrototypeAfterIndex: null,
            stringVariantPrototypeBefore: null,
            stringVariantPrototypeBeforeCharacter: null,
            stringVariantPrototypeBeforeCharacterFromBack: null,
            stringVariantPrototypeBeforeCharacterFromFront: null,
            stringVariantPrototypeBeforeFromBack: null,
            stringVariantPrototypeBeforeFromFront: null,
            stringVariantPrototypeBeforeIndex: null,
            stringVariantPrototypeBeginsWith: null,
            stringVariantPrototypeCharacterAt: null,
            stringVariantPrototypeCharacterCodeAt: null,
            stringVariantPrototypeCount: null,
            stringVariantPrototypeCut: null,
            stringVariantPrototypeCutAt: null,
            stringVariantPrototypeCutLeft: null,
            stringVariantPrototypeCutRight: null,
            stringVariantPrototypeEndsWith: null,
            stringVariantPrototypeFirst: null,
            stringVariantPrototypeFrequency: null,
            stringVariantPrototypeIncludes: null,
            stringVariantPrototypeIncludesCharacter: null,
            stringVariantPrototypeIndex: null,
            stringVariantPrototypeIndexCharacter: null,
            stringVariantPrototypeIndexCharacterFromBack: null,
            stringVariantPrototypeIndexCharacterFromFront: null,
            stringVariantPrototypeIndexFromBack: null,
            stringVariantPrototypeIndexFromFront: null,
            stringVariantPrototypeInsertAt: null,
            stringVariantPrototypeLast: null,
            stringVariantPrototypeRandomize: null,
            stringVariantPrototypeRemove: null,
            stringVariantPrototypeRemoveAll: null,
            stringVariantPrototypeRemoveFromBack: null,
            stringVariantPrototypeRemoveFromFront: null,
            stringVariantPrototypeRepeat: null,
            stringVariantPrototypeReplace: null,
            stringVariantPrototypeReplaceAll: null,
            stringVariantPrototypeReplaceFromBack: null,
            stringVariantPrototypeReplaceFromFront: null,
            stringVariantPrototypeSlice: null,
            stringVariantPrototypeTrim: null,
            stringVariantPrototypeTrimLeft: null,
            stringVariantPrototypeTrimRight: null,
            stringVariantToElement: null,
            stringVariantToHTML: null,
            throwError: null,
            throw_ERROR_: null
        },
        Information: {
            Directives: {DebugMode: false, IgnoreMissingFeatures: false},
            Messages: {Debugging: {}, Error: {}}
        },
        Mathematics: {
            abs: null,
            ceil: null,
            clamp: null,
            floor: null,
            int: null,
            invadd: null,
            invmul: null,
            log2: null,
            max: null,
            min: null,
            perc: null,
            pow: null,
            powint: null,
            randint: null,
            random: null,
            round: null
        },
        Objects: {
            Array: null,
            ArrayFrom: null,
            ArrayPrototype: null,
            ArrayPrototypeForeach: null,
            ArrayPrototypePop: null,
            ArrayPrototypePush: null,
            cancelAnimationFrame: null,
            CSSNumericArray: null,
            CSSNumericArrayPrototype: null,
            CSSNumericArrayPrototypeForeach: null,
            Document: null,
            Element: null,
            HTMLAllCollection: null,
            HTMLAllCollectionPrototype: null,
            HTMLAllCollectionPrototypeForeach: null,
            HTMLCanvasElement: null,
            HTMLCanvasElementPrototype: null,
            HTMLCollection: null,
            HTMLCollectionPrototype: null,
            HTMLCollectionProtoypeForeach: null,
            HTMLDocument: null,
            HTMLElement: null,
            HTMLElementPrototype: null,
            HTMLElementPrototypeChildren: null,
            HTMLFormControlsCollection: null,
            HTMLFormControlsCollectionPrototype: null,
            HTMLFormControlsCollectionPrototypeForeach: null,
            HTMLOptionsCollection: null,
            HTMLOptionsCollectionPrototype: null,
            HTMLOptionsCollectionPrototypeForeach: null,
            NodeList: null,
            NodeListPrototype: null,
            NodeListPrototypeForeach: null,
            requestAnimationFrame: null
        },
        Records: {Lists: {}, Values: {}},
        Types: { // NOTE (Lapys) -> Non-cryptic, more readable form of data.
            AssertionError: null, // NOTE (Lapys) -> Exception type raised from the `assert` function.
            BigArray: null, // NOTE (Lapys) -> Arbitrary-length array.
            BigArrayPrototype: null,
            BigArrayPrototypeCutAt: null,
            BigArrayPrototypeElementAt: null,
            BigArrayPrototypeFree: null,
            BigArrayPrototypeIndex: null,
            BigArrayPrototypeIndexFromBack: null,
            BigArrayPrototypeIndexFromFront: null,
            BigArrayPrototypeLength: null,
            BigArrayPrototypeMaximumLength: null,
            BigArrayPrototypePop: null,
            BigArrayPrototypePush: null,
            BigArrayPrototypeResize: null,
            BigNumber: null, // NOTE (Lapys) -> Arbitrary-precision numeric type.
            BigNumberClone: null,
            BigNumberCopy: null,
            BigNumberDecrement: null,
            BigNumberDivide: null,
            BigNumberExponentiate: null,
            BigNumberIncrement: null,
            BigNumberInfinity: null,
            BigNumberIsEqual: null,
            BigNumberIsGreater: null,
            BigNumberIsLesser: null,
            BigNumberModularize: null,
            BigNumberMultiply: null,
            BigNumberNaN: null,
            BigNumberPrototype: null,
            BigNumberPrototypeDecrement: null,
            BigNumberPrototypeDivide: null,
            BigNumberPrototypeExponentiate: null,
            BigNumberPrototypeIncrement: null,
            BigNumberPrototypeIsArbitrary: null,
            BigNumberPrototypeIsEqualTo: null,
            BigNumberPrototypeIsFinite: null,
            BigNumberPrototypeIsGreaterThan: null,
            BigNumberPrototypeIsInfinite: null,
            BigNumberPrototypeIsNaN: null,
            BigNumberPrototypeIsLesserThan: null,
            BigNumberPrototypeModularize: null,
            BigNumberPrototypeRoot: null,
            BigNumberPrototypeSign: null,
            BigNumberPrototypeSubtract: null,
            BigNumberPrototypeSum: null,
            BigNumberPrototypeUnsign: null,
            BigNumberRoot: null,
            BigNumberSign: null,
            BigNumberSigned: null,
            BigNumberSubtract: null,
            BigNumberSum: null,
            BigNumberUnsign: null,
            CharacterArray: null, // NOTE (Lapys) -> Negates the dependent utility of the `String.prototype.charAt` method.
            ClampedArray: null, // NOTE (Lapys) -> Array of immutable length.
            ClampedArrayPrototype: null,
            ClampedArrayPrototypeLength: null,
            ClampedNumber: null, // NOTE (Lapys) -> Fixed-width numeric type.
            ClampedNumberClone: null,
            ClampedNumberCopy: null,
            ClampedNumberDecrement: null,
            ClampedNumberDivide: null,
            ClampedNumberExponentiate: null,
            ClampedNumberIncrement: null,
            ClampedNumberIsEqual: null,
            ClampedNumberIsGreater: null,
            ClampedNumberIsLesser: null,
            ClampedNumberModularize: null,
            ClampedNumberMultiply: null,
            ClampedNumberNaN: null,
            ClampedNumberPrototype: null,
            ClampedNumberPrototypeDecrement: null,
            ClampedNumberPrototypeDivide: null,
            ClampedNumberPrototypeExponentiate: null,
            ClampedNumberPrototypeIncrement: null,
            ClampedNumberPrototypeIsEqualTo: null,
            ClampedNumberPrototypeIsFinite: null,
            ClampedNumberPrototypeIsGreaterThan: null,
            ClampedNumberPrototypeIsInfinite: null,
            ClampedNumberPrototypeIsLesserThan: null,
            ClampedNumberPrototypeIsNaN: null,
            ClampedNumberPrototypeIsSafe: null,
            ClampedNumberPrototypeMaximum: null,
            ClampedNumberPrototypeMinimum: null,
            ClampedNumberPrototypeModularize: null,
            ClampedNumberPrototypeMultiply: null,
            ClampedNumberPrototypeRoot: null,
            ClampedNumberPrototypeSubtract: null,
            ClampedNumberPrototypeSum: null,
            ClampedNumberPrototypeSubtract: null,
            ClampedNumberPrototypeUnsign: null,
            ClampedNumberRoot: null,
            ClampedNumberSign: null,
            ClampedNumberSigned: null,
            ClampedNumberSubtract: null,
            ClampedNumberSum: null,
            ClampedNumberUnsign: null,
            Clock: null, // NOTE (Lapys) -> Asynchronous, date-time, event-driven based namespace type.
            ClockPrototype: null,
            ClockPrototypeAlways: null,
            ClockPrototypeDate: null,
            ClockPrototypeEnd: null, // NOTE (Lapys) -> Pause all `Frame` objects.
            ClockPrototypeFormat: null, // NOTE (Lapys) -> Returns a date-time format (e.g: UTC, e.t.c.)
            ClockPrototypeGetDate: null,
            ClockPrototypeGetDay: null,
            ClockPrototypeGetHour: null,
            ClockPrototypeGetMillisecond: null,
            ClockPrototypeGetMinute: null,
            ClockPrototypeGetMonth: null,
            ClockPrototypeGetSecond: null,
            ClockPrototypeGetTime: null,
            ClockPrototypeGetTimezoneOffset: null,
            ClockPrototypeGetYear: null,
            ClockPrototypeNext: null,
            ClockPrototypeNow: null,
            ClockPrototypePause: null,
            ClockPrototypeStart: null,
            ClockPrototypeStop: null,
            ClockPrototypeTick: null,
            ClockPrototypeTimer: null,
            ClockPrototypeUTC: null,
            ClockPrototypeUTCGetDay: null,
            ClockPrototypeUTCGetDate: null,
            ClockPrototypeUTCGetHour: null,
            ClockPrototypeUTCGetMillisecond: null,
            ClockPrototypeUTCGetMinute: null,
            ClockPrototypeUTCGetMonth: null,
            ClockPrototypeUTCGetSecond: null,
            ClockPrototypeUTCGetYear: null,
            ClockPrototypeToDateString: null,
            ClockPrototypeToGMTDateString: null,
            ClockPrototypeToISODateString: null,
            ClockPrototypeToLocaleDateString: null,
            ClockPrototypeToLocaleTimeString: null,
            ClockPrototypeToString: null,
            ClockPrototypeToTimeString: null,
            ClockPrototypeToUTCDateString: null,
            ClockPrototypeValueOf: null,
            ClockPrototypeWind: null,
            ClockTotal: null,
            DOMCollection: null, // NOTE (Lapys) -> Abstraction for `HTML...Collection` and `NodeList` "variant"`s on the DOM.
            Enumeration: null, // NOTE (Lapys) -> `enum` type from the C programming language.
            Frame: null, // NOTE (Lapys) -> Unit of action in a moment of time.
            FramePrototype: null,
            FramePrototypeAction: null,
            FramePrototypeID: null,
            FramePrototypePause: null,
            FramePrototypePlay: null,
            FramePrototypePlaying: null,
            Imperative: null, // NOTE (Lapys) -> Context for "variant"`s (e.g.: array variants, string variants, e.t.c.).
            Iterable: null, // NOTE (Lapys) -> Allow conventional native iteration through an object.
            ParseError: null, // NOTE (Lapys) -> Generic exception type raised from parsing source code.
            ParseSyntaxError: null, // NOTE (Lapys) -> Exception type raised from parsing source code.
            Parser: null, // NOTE (Lapys) -> Namespace type for evaluating source code.
            ParserPrototype: null,
            ParserPrototypeTokenizeAsScriptSource: null,
            ParserPrototypeTokenizeAsUMLSource: null,
            ParserPrototypeTokenizeAsXMLSource: null,
            ParserPrototypeValidateAsScriptSource: null,
            ParserPrototypeValidateAsUMLSource: null,
            ParserPrototypeValidateAsXMLSource: null,
            Primitive: null, // NOTE (Lapys) -> Non-prototyped object.
            SafeNumber: null, // NOTE (Lapys) -> Union of `BigNumber` and `Number` types.
            SafeNumberClone: null,
            SafeNumberCopy: null,
            SafeNumberDecrement: null,
            SafeNumberDivide: null,
            SafeNumberExponentiate: null,
            SafeNumberIncrement: null,
            SafeNumberIsEqual: null,
            SafeNumberIsGreater: null,
            SafeNumberIsLesser: null,
            SafeNumberModularize: null,
            SafeNumberMultiply: null,
            SafeNumberPrototype: null,
            SafeNumberPrototypeDecrement: null,
            SafeNumberPrototypeDivide: null,
            SafeNumberPrototypeExponentiate: null,
            SafeNumberPrototypeIncrement: null,
            SafeNumberPrototypeIsEqualTo: null,
            SafeNumberPrototypeIsFinite: null,
            SafeNumberPrototypeIsGreaterThan: null,
            SafeNumberPrototypeIsInfinite: null,
            SafeNumberPrototypeIsLesserThan: null,
            SafeNumberPrototypeIsNaN: null,
            SafeNumberPrototypeIsSafe: null,
            SafeNumberPrototypeModularize: null,
            SafeNumberPrototypeMultiply: null,
            SafeNumberPrototypeRoot: null,
            SafeNumberPrototypeSign: null,
            SafeNumberPrototypeSubtract: null,
            SafeNumberPrototypeSum: null,
            SafeNumberPrototypeUnsign: null,
            SafeNumberRoot: null,
            SafeNumberSign: null,
            SafeNumberSigned: null,
            SafeNumberSubtract: null,
            SafeNumberSum: null,
            SafeNumberUnsign: null,
            Token: null, // NOTE (Lapys) -> Unit of expression within source code.
            TokenPrototype: null,
            TokenPrototypeSource: null,
            TokenPrototypeSubtokens: null,
            TokenPrototypeToString: null,
            TokenList: null, // NOTE (Lapys) -> Ordered collection of `Tokens` objects.
            TokenListPrototype: null,
            TokenListPrototypeFirst: null,
            TokenListPrototypeLast: null,
            TokenListPrototypeLength: null,
            TokenListPrototypeOf: null // NOTE (Lapys) -> Hierarchical relationship assertion.
        }
    };
    var LapysJS = (function() {
        // Class > (LapysJS, ...)
        function LapysJS() {}

        function Task() {}
        function TaskList() {}

        // Modification
            // LapysJS > Prototype
            LapysJS.prototype = {
                author: AUTHOR,
                components: {
                    Accordion: null,
                    Carousel: null,
                    Dropdown: null,
                    DynamicTime: null, // -> `[Object DynamicHTMLTimeElement]`
                    DynamicText: null,
                    Roulette: null,
                    Table: null,
                    Toast: null,
                    Tooltip: null
                },
                constructor: null,
                createNamespace: null,
                description: DESCRIPTION,
                namespaces: null,
                ready: false,
                tasks: {
                    listening: new TaskList, // NOTE (Lapys) -> Event listeners.
                    pending: new TaskList // NOTE (Lapys) -> Asynchronous tasks.
                },
                toString: null,
                valueOf: null,
                version: VERSION
            };

            // Task > Prototype
            Task.prototype = {};

            // Task List > Prototype
            TaskList.prototype = {
                length: 0
            };

        // Return
        return new LapysJS
    })();

    /* Shorthands */
    var LDK = LapysDevelopmentKit;
    var LDKC = LapysDevelopmentKit.Constants;
    var LDKE = LapysDevelopmentKit.Environment;
    var LDKF = LapysDevelopmentKit.Functions;
    var LDKI = LapysDevelopmentKit.Information;
    var LDKM = LapysDevelopmentKit.Mathematics;
    var LDKO = LapysDevelopmentKit.Objects;
    var LDKR = LapysDevelopmentKit.Records;
    var LDKS = LapysDevelopmentKit.States;
    var LDKT = LapysDevelopmentKit.Types;

    /* [Pre-]Modification > Lapys Development Kit */
        // Constants
            // Alphabets
            LapysDevelopmentKit.Constants.Alphabets = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

            // ASCII Characters
            LapysDevelopmentKit.Constants.ASCIICharacters = ['\0', '\1', '\2', '\3', '\4', '\5', '\6', '\a', '\b', '\t', '\n', '\v', '\f', '\r', '\16', '\17', '\20', '\21', '\22', '\23', '\24', '\25', '\26', '\27', '\u0018', '\u0019', '\u001A', '\u001B', '\u001C', '\u001D', '\u001E', '\u001F', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' , '{' , '|' , '}' , '~' , '\u007F'];

            // Binary Digits
            LapysDevelopmentKit.Constants.BinaryDigits = ['0', '1'];

    /* Modification */
        // Array
            // Is Array-Like
            // Of
            // Prototype
                // [Is] Empty
                // First
                // Free
                // Last
                // Random
                // Random Index
                // Remove

        // CSS Numeric Array
            // Prototype
                // First
                // Last
                // Random
                // Random Index

        // Document
            // Pending --- NOTE (Lapys) -> Accessor to the value `LapysJS.tasks["pending"].length`.

        // Element
        // HTML All Collection
            // Prototype
                // Clear --- NOTE (Lapys) -> Removes all `HTMLElement` objects from their parent node.
                // [Is] Empty
                // First
                // Last
                // Pop
                // Random
                // Random Index
                // Remove

        // HTML Canvas Element
            // Prototype
                // To Blob

        // HTML Collection
            // Is HTML Collection-Like
            // Prototype
                // Clear --- NOTE (Lapys) -> Removes all `HTMLElement` objects from their parent node.
                // [Is] Empty
                // First
                // Get
                // Last
                // Pop
                // Random
                // Random Index
                // Remove

        // HTML Document
            // Prototype
                // Get Elements By Class Name
                // Get Element By ID
                // Get Elements By ID
                // Inspect Children By CSS Selector
                // Inspect Descendants By CSS Selector

        // HTML Element
            // Prototype
                // Ancestors
                // Children
                // Get Children By Class Name
                // Get Children By ID
                // Get Children By Element Tag Name
                // Inspect Ancestors By CSS Selector
                // Inspect Children By CSS Selector
                // Inspect Descendants By CSS Selector
                // Inspect Next Siblings By CSS Selector
                // Inspect Previous Siblings By CSS Selector
                // Inspect Siblings By CSS Selector
                // Next Siblings
                // Previous Siblings
                // Purge
                // Role
                // Root
                // Script
                // Siblings

        // HTML Form Controls Collection
            // Prototype
                // Clear --- NOTE (Lapys) -> Removes all `HTMLElement` objects from their parent node.
                // [Is] Empty
                // First
                // Get
                // Last
                // Pop
                // Random
                // Random Index
                // Remove

        // HTML Input Element, HTML Text Area Element
            // Prototype
                // Ignore [Value]
                // Pass [Value]

        // HTML Options Collection
            // Prototype
                // Clear --- NOTE (Lapys) -> Removes all `HTMLElement` objects from their parent node.
                // [Is] Empty
                // First
                // Get
                // Last
                // Pop
                // Random
                // Random Index
                // Remove

        // Mathematics
            // Average
            // Clamp
            // Integer
            // Percent
            // Sigmoid

        // Node
            // Prototype
                // Ancestor Nodes
                // Child Nodes
                // Descendant Nodes
                // Next Sibling Node
                // Next Sibling Nodes
                // Previous Sibling Node
                // Previous Sibling Nodes
                // Root Node
                // Sibling Nodes

        // Node List
            // Prototype
                // Clear --- NOTE (Lapys) -> Removes all `HTMLElement` objects from their parent node.
                // [Is] Empty
                // First
                // Last
                // Pop
                // Random
                // Random Index
                // Remove

        // Style Property Map
            // Prototype
                // For Each

        // Style Property Map Read-Only
                // Prototype
                    // For Each

        /* Global */
            // Array
            // Array-Like
            // Assert
            // Assertion Error
            // Average
            // Big Number
            // Boolean
            // Ceiling
            // Check
            // Clamp
            // Clamp Integer
            // Clear
            // Clock
            // Copy
            // Create Attribute
            // Create Document
            // Create DocumentFragment
            // Create Element
            // Create Window
            // Cut
            // DOM Collection
            // Enumeration
            // Function
            // Integer
            // Interval
            // Iterable
            // Iterate
            // Floor
            /* LapysJS */
            // Log
            // Maximum
            // Minimum
            // Number
            // On Attribute Added
            // On Attribute Change
            // On Attribute Count Change
            // On Attribute Removed
            // On DOM Change
            // On DOM Node Added
            // On DOM Node Count Change
            // On DOM Node Removed
            // On DOM Ready
            // On Node Added
            // On Node Change
            // On Node Count Change
            // On Node Removed
            // Parse Error
            // Parse Syntax Error
            // Parser
            // Paste
            // Percent
            // Preload
            // Primitive
            // Random
            // Random Integer
            // Regular Expression
            // Repeat
            // Safe Number
            // Serve
            // Sigmoid
            // Size Of
            // Stack
                // Prototype
                    // Pop
                    // Push
                    // Size

            // Step
            // Stop
            // String
            // Symbol
            // Timeout

        /* LapysJS */
            // Create Namespace
            // Namespaces
            // To String
            // Value Of

        /* Lapys Development Kit --- WARN (Lapys) -> For testing purposes only. */
        window.LapysDevelopmentKit = LapysDevelopmentKit;
        window.LDK = LapysDevelopmentKit;
        window.LDKC = LapysDevelopmentKit.Constants;
        window.LDKE = LapysDevelopmentKit.Environment;
        window.LDKF = LapysDevelopmentKit.Functions;
        window.LDKI = LapysDevelopmentKit.Information;
        window.LDKM = LapysDevelopmentKit.Mathematics;
        window.LDKO = LapysDevelopmentKit.Objects;
        window.LDKR = LapysDevelopmentKit.Records;
        window.LDKS = LapysDevelopmentKit.States;
        window.LDKT = LapysDevelopmentKit.Types;

    /* Event */
        // Global > Blur --- NOTE (Lapys) -> Blur all elements when main window is blurred.

    /* Phase */
        // Initiate
        function Initiate() {}

        // Update
        function Update() {}

        // Terminate
        function Terminate() {}

    /* ... */
    Initiate(); Update(); Terminate();

    // Return
    return 0;
})();
