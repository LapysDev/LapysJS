/** Namespace > Lapys Development Kit
    @author: Lapys
    @description: Lapys Development Kit is built as a base on which other libraries can be quickly developed and strongly tested.
    @version: 0.0.12
    @url: https://www.github.com/LapysDev/LapysJS

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

            - Notes: The library makes an effort to use only native features of JavaScript to allow for universal compatibility with legacy & modern host environments.
                GOALS
                    It also avoids liberal use of vendor-specific (or environment-restricted) features & APIs (except where possible).
                    This is mainly due to "subtle" inconsistencies in the adaptation of the ECMAScript standard for JavaScript in consumer software and custom runtimes
                    (Hence the need for conditional comments (by Microsoft), fallbacks, polyfills, shims & shivs (by John Resig and Sam Ruby) and so on).

                SECURITY
                    Originally, the library completely stood by the idea of the implementation of spoof-proofing [https://en.m.wikipedia.org/wiki/Spoofing_attack] in JavaScript,
                    but with recent internally-tested developments, the concept is now deemed imprpbable in JavaScript (with cross-site scripting and other types of attacks).
                    Such level of security is best left to other high-level programming languages such as C++.

                DESIGN
                    On a different note, the Lapys Development Kit will still make an effort to stay consistent with its original goals and design principles, which are as follows:
                        -- code must have explicit meaning and must be clear amongst not only a select few programmers.
                        -- data access must be explicitly implied if it is to be implemented,
                                 with private features staying private (Sloppy mode [https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode]) and
                                 public features not being only an interface to private features or completely independent.
                        -- and so on...

    --- RULES ---
        #Lapys: You may skip through all of this if you choose so, but before you make edits to the code you are implored to brief through the rules responsible for how this library was made in JavaScript.
            - All expressions/ statements/ values must be intentional (avoid the methodologies of Sloppy Mode in JavaScript).
            - All features must be lexicographically (alphabetically) defined & ordered for readability if feasible.
            - All non-universal features are banned (e.g.: APIs, classes, lambdas, null dereferences, REST features and so on).
            - Avoid naming an object property `constructor`, instead defer to `constructorObject`.
            - Avoid naming an object property `function`, instead defer to `procedure`.
            - Avoid the `break` (or `return`) statement in repetition structures;
                Use globally-scoped (within its context) variables instead (this encourages a first-entry, first-exit design).
            - Defer to object literals (`{}`) instead of array literals (`[]`) for internally managed and locally-scoped collections and lists.
               (Although the structure`s meaning & significance would be strongly-dependent on its identifier name rather than syntax).
            - Dynamically created (and destroyed) object properties should be accessed with the string property notation only (to further differentiate custom data & persistent data) e.g.:
                    object["property"] ?? (object = {"property": null})  // -> `"property"` is a dynamically-created property and not expected to have existed within the object`s prototype (or be an integral part of the object).
                    object.property ?? (object = {property: null}) // -> `property` is an integral part of the object (probably inherited from its prototype)
            - Due to the ECMAScript standard supporting multiple zero types, it is a rule to explicitly & strictly differentiate between each of those values (e.g.: `-0` and `+0`) except in special cases (e.g.: boolean inferences).
            - Implement prototype-less objects as a substitute for `{}` object literals for all possible objects.
            - Inline function expressions are only allowed if the alternative is less efficient/ preferable.
            - "Like"`s denote inheritance and polymorphism; "Variant"`s denote context and typing.
            - Memory management via the JavaScript garbage collector should be kept to a minimum:
                -- Avoid local function declarations.
                -- Avoid unnecessary property/ variable declaration/ definition/ initialization.
                -- Defer to parameter names instead of the `arguments` object.
                -- Defer to string literals instead of string concatenation.
                -- Limit the invocation of functions.
                -- Limit the liberal use of explicit exceptions handlers (e.g: the `try... catch` block).
                -- Limit the use of object literals.
                -- Prevent coercing primitive values to objects.
                -- Use of some native functions.

            - Object properties (except the `prototype` property) must be initially declared within the object before accessing/ mutating them.
            - Prevent repeated dynamic lookups (e.g.: `for (var iterator = [1, 0, 1].length; iterator--;) ...` instead of `for (var iterator = 0; iterator ^ [1, 0, 1].length; iterator += 1) ...`).
            - `arguments` objects can only be parsed in JavaScript`s Strict Mode.

    --- WARN ---
        #Lapys:
            The class & constant parameter naming convention are similar which may lead to unwanted conflicts.
            Unfortunately there is no feature to specify constant parameters within function signatures explicitly in JavaScript.
*/
var LapysDevelopmentKit = new function LapysDevelopmentKit() { // NOTE (Lapys) -> The IIFE expression here also acts as sort of a `Main` entry procedure for this script.
    /* Evaluation > Lapys Development Kit */
    var LDK = {
        // [Assertions]
       Assertions: {
            Has_cancelAnimationFrame_Function: false,
            Has_Document_Constructor: false,
            Has_Element_Constructor: false,
            Has_HTMLDocument_Constructor: false,
            Has_HTMLElement_Constructor: false,
            Has_requestAnimationFrame_Function: false,
            IsCommandLineEnvironment: false,
            IsTextEnvironment: false,
            IsWebBrowserEnvironment: false
        },

        // [Constants]
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
            HexadecimalDigits: null,
            HTMLElementTagNames: null,
            Imperatives: {Array: null, BigArray: null, BigNumber: null, String: null},
            Infinity: null,
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

        // [Functions]
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

        // [Mathematics]
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

        // [Objects]
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

        // [Types]
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
        },

        // [Constructor & Prototype]
        constructor: LapysDevelopmentKit,
        __proto__: LapysDevelopmentKit.prototype
    };

    /* Shorthand > Lapys Development Kit ...  */
    var LDKA = null;
    var LDKC = null;
    var LDKF = null;
    var LDKM = null;
    var LDKO = null;
    var LDKT = null;

    /*Constants > ... */
    var AUTHOR = "Lapys";
    var DESCRIPTION = "Lapys Development Kit is built as a base on which other libraries can be quickly developed and strongly tested.";
    var URL = "https://www.github.com/LapysDev/LapysJS";
    var VERSION = "0.0.12";

    /*Global > ... */
        // [Data & Information]
        var GLOBAL; // NOTE (Lapys) -> Global host object or namespace of the current script environment.

        // [State]
        var ANY = {}; // NOTE (Lapys) -> Unique object representing generalized data.
        var ERROR = {message: null}; // NOTE (Lapys) -> Crude fallback to exception types.
            // WARN (Lapys) -> Does not take precedence over native error types (e,g.: `DOMException`, `ReferenceError`, `TypeError` and so on).
        var FLAG; // NOTE (Lapys) -> Denotes a non-necessary logical implementation of a function`s code (e.g.: `ArraySort(FLAG = TIM_SORT)` instead of `ArrayTimSort()`).
        var FLAGS = {
            "AUXILIARY": false,
            "CARRY": false,
            "DIRECTION": false,
            "OVERFLOW": false,
            "PARITY": false,
            "SIGN": false,
            "TRAP": false,
            "ZERO": false
        };
        var TMP; // NOTE (Lapys) -> Useful for holding/ transferring discard-able, temporary data.

    /* Polyfills > ... */
    var undefined = void 0; // WARN (Lapys) -> Should not be legal but inadvertently is.

    // Return
    return LDK
};
