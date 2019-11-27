/** Main
    @author: LapysDev Team
    @description: LapysJS is a general-purpose, semantic and universal JavaScript library
    @version: 0.0.10
    @url: https://www.github.com/LapysDev/LapysJS

    --- CODE ---
        #Lapys:
            class ConstructorName {
                var CONSTANT; var variable;

                function ConstantFunction(ConstantParameter, FLAG_PARAMETER) {}
                function variableFunction(variableParameter, FLAG_PARAMETER) {}
            };

            _Native Name_

    --- CONSIDERATIONS ---
        #Lapys:
            - Defer to object literals (`{}`) instead of array literals (`[]`) for internally managed and locally-scoped collections and lists.
                (Although the structure`s meaning & significance would be strongly-dependent on its identifier name rather than syntax).
            - Implement prototype-less objects as a substitute for `{}` object literals.

    --- NOTE ---
        #Lapys:
            - Details:
                -- Average Cumulative Processing Duration: --ms
                -- Average File Upload Speed: --ms
                -- Average Phase Processing Duration: --ms
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
            - Prevent repeated dynamic lookups (e.g.: `for (var iterator = 0; iterator ^ [1, 0, 1].length; iterator += 1) ...`).
            - Private functions should not strictly assert its parameters.
            - `arguments` objects can only be parsed in JavaScript`s Strict Mode.

            This is to keep the language somewhat universally readable and similar to other programming languages.

    --- UPDATE ---
        #Lapys:
            - Blur all elements when main window is blurred.
            - Lookup CSS rules from the `document.styleSheets[0].cssRules` form.
            - Lookup DOM updates with the `MutationObserver` API.
            - Utilize the `DOMTreeInserted` event types from the Chrome V8 engine.

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

    /* Namespace > Lapys Development Kit */
    var LapysDevelopmentKit = {
        Constants: {Assertions: {}, Data: {}, Numbers: {}, Objects: {}, Strings: {}},
        Environment: {},
        Functions: {},
        Information: {
            Directives: {DebugMode: false, IgnoreMissingFeatures: false},
            Messages: {Debugging: {}, Error: {}}
        },
        Mathematics: {},
        Objects: {},
        Records: {Lists: {}, Values: {}},
        Types: {} // NOTE (Lapys) -> Non-cryptic, more readable form of data.
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

    // Return
    return 0;
})();
