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
            - Prevent repeated dynamic lookups (e.g.: `for (var iterator = 0; iterator ^ [1, 0, 1].length; iterator += 1) ...`).
            - Private functions should not strictly assert its parameters.
            - `arguments` objects can only be parsed in JavaScript`s Strict Mode.

            This is to keep the language somewhat universally readable and similar to other programming languages.

    --- UPDATE ---
        #Lapys:
            - Blur all elements when main window is blurred.

    --- WARN ---
        #Lapys:
            The class & constant parameter naming convention are similar which may lead to unwanted conflicts.
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

    /* Namespace > Lapys ... */
    var LapysDevelopmentKit = {
        Constants: {},
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
    var LapysJS;

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
        /* Constants */
            // Alphabets
            LapysDevelopmentKit.Constants.Alphabets = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

            // ASCII Characters --- CHECKPOINT (Lapys) -> ASCII characters 129 to 255. --- NOTE (Lapys) -> Ordered by code.
            LapysDevelopmentKit.Constants.ASCIICharacters = ['\0', '\1', '\2', '\3', '\4', '\5', '\6', '\a', '\b', '\t', '\n', '\v', '\f', '\r', '\16', '\17', '\20', '\21', '\22', '\23', '\24', '\25', '\26', '\27', '\u0018', '\u0019', '\u001A', '\u001B', '\u001C', '\u001D', '\u001E', '\u001F', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' , '{' , '|' , '}' , '~' , '\u007F'];

            // Array
                // ASCII Sort Comparator
                // Bubble Sorter
                // Insertion Sorter
                // Merge Sorter
                // Sorter
                // Tim Sorter
                    // Run Size

            // `Array` Imperative
            // Binary Digits
            LapysDevelopmentKit.Constants.BinaryDigits = ['0', '1'];

            // `BigArray`  Imperative
            // `BigNumber` Imperative
            // CSS Length Units
            // CSS Source Character Sequences
            // Decimal Digits
            // Frame Rate
            // Hexadecimal Digits
            // HTML Element Tag Names
            // Infinity
            // Integer Bit Size
            // Pointer Bit Size
            // JavaScript Source Keywords
            // JavaScript Source Line Terminators
            // JavaScript Source Spoof Tokens
            // JavaScript Source Whitespace Character Sequences
            // Language Codes
            // Lowercase Alphabets
            // Maximum Array Length
            // Maximum Integer Value
            // Maximum Safe Integer Value
            // Not-A-Number
            // Number Component
            // Octal Digits
            // Sortable Characters
            // Source Types
            // Symbol Characters
            // `String` Imperative
            // Token Types
            // Trimmable Sequences
            // Uppercase Alphabets

        /* Functions */
            // Array-Variant
                // Prototype
                    // After [From]
                    // After From Back
                    // After From Front
                    // After Index
                    // Before [From]
                    // Before From Back
                    // Before From Front
                    // Before Index
                    // Clone
                    // Concatenate
                    // Copy
                    // Count [Element]
                    // Cut
                    // Cut At
                    // Cut Left
                    // Cut Right
                    // Cycle
                    // Depth
                    // Element At [Index]
                    // Every
                    // Fill [From]
                    // Find [From]
                    // Find From Back
                    // Find From Front
                    // First
                    // Flatten
                    // Frequency [Of]
                    // Includes
                    // Index [From]
                    // Index From Back
                    // Index From Front
                    // Insert At
                    // [Get] Length
                    // Last
                    // Like
                    // Map
                    // Pop
                    // Push
                    // Remove [From]
                    // Remove Duplicate [From]
                    // Remove Duplicate From Back
                    // Remove Duplicate From Front
                    // Remove Duplicates
                    // Remove From Back
                    // Remove From Front
                    // Remove Repeat [From]
                    // Remove Repeat From Back
                    // Remove Repeat From Front
                    // Remove Repeats
                    // Repeat
                    // Replace [From]
                    // Replace Duplicate [From]
                    // Replace Duplicate From Back
                    // Replace Duplicate From Front
                    // Replace Duplicates
                    // Replace From Back
                    // Replace From Front
                    // Replace Repeat [From]
                    // Replace Repeat From Back
                    // Replace Repeat From Front
                    // Replace Repeats
                    // Resize
                    // Set Index
                    // Shift
                    // Similar
                    // Slice
                    // Some
                    // Sort

            // Character
                // Is Alphabet
                // Is Binary
                // Is Decimal
                // Is Hexadecimal
                // Is Lowercase Alphabet
                // Is Octal
                // Is Uppercase Alphabet

            // Digit --- NOTE (Lapys) -> `TMP` variable represents carry.
                // Decrement
                // Divide
                // Increment
                // Multiply
                // Subtract
                // Sum

            // Digits --- NOTE (Lapys) -> `TMP` variable represents carry.
                // Prototype
                    // Decrement
                    // Divide
                    // Increment
                    // Multiply
                    // Subtract
                    // Sum

            // Evaluate

            // Function
                // Prototype
                    // Apply
                    // Arity [| Length]
                    // Body [Source]
                    // Call
                    // Dyadic Call
                    // First
                    // Head [Source]
                    // Is Arrow
                    // Is Asynchronous
                    // Is Asynchronous Arrow
                    // Is Asynchronous Generator
                    // Is Generator
                    // Is Native
                    // Is Native Asynchronous
                    // Is Native Asynchronous Arrow
                    // Is Native Asynchronous Generator
                    // Is Native Arrow
                    // Is Native Generator
                    // Last
                    // Monoadic Call
                    // Name
                    // Parameters
                    // Parameters Source
                    // Prototype
                    // Niladic Call
                    // Triadic Call
                    // To Source String

            // Is Array
            // Is Big Integer
            // Is Boolean
            // Is Constructible
            // Is Function
            // Is Non-Constructible
            // Is Null
            // Is Number
            // Is Object-Like --- NOTE (Lapys) -> Inherits the `Object` constructor.
            // Is Primitive-Variant --- NOTE (Lapys) -> Is strictly of the `Object` constructor or another non-`Object` based constructor.
            // Is String
            // Is Symbol
            // Is Void

            // Is `ANY`
            // Is `ERROR`
            // Is `FLAG`
            // Is `TMP`

            // Number
                // Prototype
                    // Is Bitwise Even
                    // Is Bitwise Integer
                    // Is Bitwise Odd
                    // Is Even
                    // Is Finite
                    // Is Infinite
                    // Is Integer
                    // Is Not-A-Number
                    // Is Odd
                    // Is Safe

            // Object
                // Assign
                // Define Property
                // Get Own Property Descriptor
                // Get Own Property Descriptors
                // Get Own Property Names
                // Get Own Property Symbols
                // Get Own Property Values
                // Get Prototype Of
                // Keys
                // Prototype
                    // Assign
                    // Clone
                    // Concatenate
                    // Constructor
                    // Copy
                    // Define Property
                    // Delete Property [By Identifier]
                    // Describe All Properties
                    // Describe Property [By Identifier]
                    // Depth
                    // Get Property [Value By Identifier]
                    // Has Property [Identifier]
                    // Instance Of
                    // Set Property
                // Set Prototype Of
                // Values

            // String-Variant
                // Is CSS Length
                // Is Escaped [Sequence]
                // Is Lowercase
                // Is Rotation Of
                // Is Script Line Terminator Token
                // Is Script Numeric Literal Token
                // Is Script Whitespace [Sequence] Token
                // Is Uppercase
                // Prototype
                    // After [From]
                    // After Character [From]
                    // After Character From Back
                    // After Character From Front
                    // After From Back
                    // After From Front
                    // After Index
                    // Before [From]
                    // Before Character [From]
                    // Before Character From Back
                    // Before Character From Front
                    // Before From Back
                    // Before From Front
                    // Before Index
                    // Begins With
                    // Character At
                    // Character Code At
                    // Count [Character]
                    // Cut
                    // Cut At
                    // Cut Left
                    // Cut Right
                    // Ends With
                    // First
                    // Frequency [Of]
                    // Includes
                    // Includes Character
                    // Index [From]
                    // Index Character [From]
                    // Index Character From Back
                    // Index Character From Front
                    // Index From Back
                    // Index From Front
                    // Insert At
                    // Last
                    // Randomize
                    // Remove
                    // Remove All
                    // Remove From Back
                    // Remove From Front
                    // Repeat
                    // Replace
                    // Replace All
                    // Replace From Back
                    // Replace From Front
                    // Slice
                    // Trim
                    // Trim Left
                    // Trim Right

                // To [HTML] Element
                // To HTML [DOM Tree]

            // Throw Error
            // Throw `ERROR`

        /* Mathematics */
            // Absolute
            // Ceiling
            // Clamp
            // Floor
            // Integer
            // Invert Additively
            // Invert Multiplicatively
            // Logarithm [Base 2]
            // Maximum
            // Minimum
            // Percent
            // Power
            // Power [Integer]
            // Random
            // Random [Integer]
            // Round

        /* Types */
            // Assertion Error
            // Big Array
                // Prototype
                    // Cut At
                    // Element At
                    // Free
                    // Index [From]
                    // Index From Back
                    // Index From Front
                    // Length
                    // Maximum Length
                    // Pop
                    // Push
                    // Resize

            // Big Number
                // Clone
                // Copy
                // Decrement
                // Divide
                // Exponentiate
                // Increment
                // Infinity
                // Is Equal
                // Is Greater
                // Is Lesser
                // Modularize
                // Multiply
                // Not-A-Number
                // Prototype
                    // Decrement
                    // Divide
                    // Exponentiate
                    // Increment
                    // Is Arbitrary
                    // Is Equal To
                    // Is Finite
                    // Is Greater Than
                    // Is Infinite
                    // Is Not-A-Number
                    // Is Lesser Than
                    // Modularize
                    // Multiply
                    // Root
                    // Sign
                    // Subtract
                    // Sum
                    // Unsign

                // Root
                // Sign
                // Signed
                // Subtract
                // Sum
                // Unsign

            // Character Array --- NOTE (Lapys) -> Negates the dependent utility of the `String.prototype.charAt` method.
            // Clamped Array
                // Prototype
                    // Length

            // Clamped Number
                // Clone
                // Copy
                // Decrement
                // Divide
                // Exponentiate
                // Increment
                // Is Equal
                // Is Greater
                // Is Lesser
                // Modularize
                // Multiply
                // Not-A-Number
                // Prototype
                    // Decrement
                    // Divide
                    // Exponentiate
                    // Increment
                    // Is Equal To
                    // Is Finite
                    // Is Greater Than
                    // Is Infinite
                    // Is Lesser Than
                    // Is Not-A-Number
                    // Is Safe
                    // Maximum
                    // Minimum
                    // Modularize
                    // Multiply
                    // Root
                    // Subtract
                    // Sum
                    // Unsign

                // Root
                // Sign
                // Signed
                // Subtract
                // Sum
                // Unsign

            // Clock
                // Prototype
                    // Always
                    // Date
                    // End --- NOTE (Lapys) -> Pause all `Frame` objects.
                    // Format --- NOTE (Lapys) -> Returns a date-time format (e.g.: UTC, e.t.c.)
                    // Get Date
                    // Get Day
                    // Get Hour
                    // Get Millisecond
                    // Get Minute
                    // Get Month
                    // Get Second
                    // Get Time
                    // Get Timezone Offset
                    // Get Year
                    // Next
                    // Now
                    // Pause
                    // Start
                    // Stop
                    // Tick
                    // Timer
                    // UTC
                        // Get Day
                        // Get Date
                        // Get Hour
                        // Get Millisecond
                        // Get Minute
                        // Get Month
                        // Get Second
                        // Get Year

                    // Wind
                    // To Date String
                    // To GMT Date String
                    // To ISO Date String
                    // To Locale Date String
                    // To Locale Time String
                    // To String
                    // To Time String
                    // To UTC Date String
                    // Value Of

                // Total

            // DOM Collection
            // Enumeration
            // Frame
                // Prototype
                    // Action
                    // ID
                    // Pause
                    // Play
                    // [Is] Playing

            // Imperative --- NOTE (Lapys) -> Context for "variant"`s (e.g.: array variants, string variants, e.t.c.).
            // Iterable
            // Parse Error
            // Parse Syntax Error
            // Parser
                // Prototype
                    // Tokenize As Script Source --- NOTE (Lapys) -> For example: JavaScript.
                    // Tokenize As UML Source --- NOTE (Lapys) -> For example: CSS.
                    // Tokenize As XML Source --- NOTE (Lapys) -> For example: HTML.
                    // Validate As Script Source
                    // Validate As UML Source
                    // Validate As XML Source

            // Primitive
            // Safe Number
                // Clone
                // Copy
                // Decrement
                // Divide
                // Exponentiate
                // Increment
                // Is Equal
                // Is Greater
                // Is Lesser
                // Modularize
                // Multiply
                // Prototype
                    // Decrement
                    // Divide
                    // Exponentiate
                    // Increment
                    // Is Equal To
                    // Is Finite
                    // Is Greater Than
                    // Is Infinite
                    // Is Lesser Than
                    // Is Not-A-Number
                    // Is Safe
                    // Modularize
                    // Multiply
                    // Root
                    // Sign
                    // Subtract
                    // Sum
                    // Unsign

                // Root
                // Sign
                // Signed
                // Subtract
                // Sum
                // Unsign

            // Token
                // Prototype
                    // Source
                    // Sub Tokens
                    // To String

            // Token List
                // Prototype
                    // First
                    // For Each
                    // Last
                    // Length
                    // Of --- NOTE (Lapys) -> Hierarchical relationship assertion.
                    // Random
                    // Random Index

        /* Constants, Objects */
            // Has `cancelAnimationFrame` Function
            // Has `Document` Constructor
            // Has `Element` Constructor
            // Has `HTMLDocument` Constructor
            // Has `HTMLElement` Constructor`
            // Has `requestAnimationFrame` Function
            // Is Command-Line Environment
            // Is Text Environment
            // Is Web Browser Environment

            // Array
                // From
                // Is Array-Like
                // Of
                // Prototype
                    // [Is] Empty
                    // First
                    // For Each
                    // Free
                    // Last
                    // Pop
                    // Push
                    // Random
                    // Random Index
                    // Remove

            // Cancel Animation Frame
            // CSS Numeric Array
                // Prototype
                    // First
                    // For Each
                    // Last
                    // Random
                    // Random Index

            // Document
            // Element
            // HTML All Collection
                // Prototype
                    // Clear --- NOTE (Lapys) -> Removes all `HTMLElement` objects from their parent node.
                    // [Is] Empty
                    // First
                    // For Each
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
                    // For Each
                    // Get
                    // Last
                    // Pop
                    // Random
                    // Random Index
                    // Remove

            // HTML Document
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
                    // For Each
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
                    // For Each
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
                    // For Each
                    // Last
                    // Pop
                    // Random
                    // Random Index
                    // Remove

            // Request Animation Frame
            // Style Property Map
                // Prototype
                    // For Each

            // Style Property Map Read-Only
                // Prototype
                    // For Each

    /* Modification */
        // Document
            // Pending --- NOTE (Lapys) -> Accessor to the value `LapysJS.tasks["pending"].length`.

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
            // Author
            // Create Namespace
            // Description
            // Namespaces
            // Ready[?]
            // Tasks
                // Listening --- NOTE (Lapys) -> Event listeners.
                // Pending --- NOTE (Lapys) -> Asynchronous tasks.
            // To String
            // Value Of
            // Version

    /* Event */
        // Global > Blur

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
