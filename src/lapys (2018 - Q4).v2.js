/**
    @author: Lapys Dev Team
    @description: LapysJS is a minimalistic JavaScript library that incorporates native features only.
    @version: 0.0.5
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Modules are encased as functions.
            - Successful integration returns a 0, otherwise a 1.
            - Supported development environments:
                -- Google Chrome (browser)
                -- Internet Explorer (browser)
                    --- Internet Explorer 8
                    --- Internet Explorer 9
                    --- Internet Explorer 10
                    --- Internet Explorer 11
                -- Microsoft Edge (browser)
                -- Mozilla Firefox (browser)
                -- Node (development environment)
                -- Opera (browser)
                -- Tor (browser)
            - The library tries to be as independent of mutable native code as developers/ users could override key features necessary for scripting.
                -- 'Native' in the sense of JavaScript built-in & non-primitive methods, objects, properties & values,
                    all other vanilla features are allowed (such as control structures, language-specific keywords, primitive values and so on).
            - Over its years of development, the library is still a bare-bones version of what it could be (and code could definitely be re-factored).

    --- UPDATE REQUIRED ---
        #Lapys:
            - Target development environments:
                -- Avast SafeZone Browser (browser) --- NOTE (Lapys) -> Untested...
                -- Internet Explorer (browser) --- NOTE (Lapys) -> The library script freezes synchronously.
                    --- Internet Explorer 5
                    --- Internet Explorer 7
                -- Safari (browser)
                -- UC Browser (browser) --- NOTE (Lapys) -> Untested...
                -- others...
*/
/* Function */
    /* Main
            --- UPDATE REQUIRED ---
                #Lapys:
                    - Invoke the `Main` function (with the current defined arguments) without using any function prototype methods.
    */
    (function Main(GLOBAL, args) {
        /* Global Data
                --- WARN ---
                    #Lapys: Private global data.
                        - For compatibility & legacy reasons,
                            the `const` keyword will not be used to define constants and
                            the `let` keyword will not be used to locally define variables.
        */
            // Author --- NOTE (Lapys) -> Author of the library.
            var AUTHOR = "Lapys",

            // Description --- NOTE (Lapys) -> Description of the library.
            DESCRIPTION = "LapysJS is a minimalistic JavaScript library that incorporates native features only.",

            // Development Environment --- NOTE (Lapys) -> Different types of platforms that implement JavaScript.
            DEVELOPMENT_ENVIRONMENT = (function() {
                // Initialization > (Development Environment, Iterator, Length)
                var DEVELOPMENT_ENVIRONMENT = args[0], iterator = args.length, length = iterator;

                // Loop --- NOTE (Lapys) -> Remove the Development Environment object from the script Arguments.
                while (iterator) {
                    // Initialization > Index
                    var index = length - (iterator -= 1) - 1;

                    // Update > Arguments
                    args[index] = args[index + 1]
                }

                // Return
                return DEVELOPMENT_ENVIRONMENT
            })(),
                // Is Browser
                DEVELOPMENT_ENVIRONMENT_IS_BROWSER = DEVELOPMENT_ENVIRONMENT.includes("Browser"),

                // Is Node JS
                DEVELOPMENT_ENVIRONMENT_IS_NODEJS = DEVELOPMENT_ENVIRONMENT.includes("Node JS"),

            // Global Main
            GLOBAL_MAIN = GLOBAL.valueOf(),

            // Library {Is} Pre-Installed --- NOTE (Lapys) -> This value may get updated in the code.
            LIBRARY_PREINSTALLED = !1,

            // Target --- NOTE (Lapys) -> The initial `this` pointer.
            THAT = this,

            // URL --- NOTE (Lapys) -> External hyperlink reference to the library's open source code.
            URL = "https://www.github.com/LapysDev/LapysJS",

            // Version --- NOTE (Lapys) -> Current version of the library.
            VERSION = "0.0.5";

        /* Polyfill > (Constructor > Prototype)
                --- NOTE ---
                    #Lapys: Try to polyfill the `__proto__` property if the development environment does not implement it.
                        - At this point, it is improbable to code without mutable native JavaScript features.
        */
        try { '__proto__'in{}||Object.defineProperty(Object.prototype,'__proto__',{configurable:!1,enumerable:!1,get:function(){try{return LDKO.objectGetPrototypeOf(this)}catch(b){}return Object.getPrototypeOf(this)},set:function(b){var c=this;try{try{return LDKO.objectSetPrototypeOf(c,b)}catch(e){}return Object.setPrototypeOf(c,b)}catch(e){for(var d in b)try{object[d]=b[d]}catch(f){}}return c}}) }
        catch (error) {}

        /* Global Data --- NOTE (Lapys) -> Private data. */
            // Hidden --- NOTE (Lapys) -> Uniquely-valued private object.
            var hidden = {},

            // Undefined
            undefined = void 0;

        /* Global Data --- NOTE (Lapys) -> Protected data. */
            /* Lapys Development Kit */
            var LapysDevelopmentKit = {
                // Features --- NOTE (Lapys) -> Custom LapysJS
                features: {
                    // Document Object Model
                    DOM: {
                        // Custom Elements --- NOTE (Lapys) -> To be registered.
                        customElements: ["jumbotron-element", "toast-element", "tooltip-element"],

                        // Dynamic Elements --- NOTE (Lapys) -> That can be implemented (or not).
                        dynamicElements: ["accordion", "carousel", "draggable", "dropdown", "dynamic-text", "dynamic-time", "marquee", "scrollbar", "table", "toast", "tooltip"],

                        // Dynamic Features --- NOTE (Lapys) -> Also optional.
                        dynamicFeatures: ["focus-attribute", "script-attribute"]
                    }
                },

                // Functions --- NOTE (Lapys) -> 'Immutable', private modules.
                functions: {
                    /* Get --- NOTE (Lapys) -> Getter-based functions. */
                    get: new function Get() {},

                    // Object
                        // Prototype
                            // Delete Property
                            objectPrototypeDeleteProperty: function objectPrototypeDeleteProperty(object, key) {
                                // Error Handling > Deletion
                                try { return delete object[key] }
                                catch (error) {}

                                // Return
                                return !1
                            },

                            // Get Constructor --- NOTE (Lapys) -> Built because the `constructor` property is mutable.
                            objectPrototypeGetConstructor: function objectPrototypeGetConstructor(object) {
                                // Initialization > Constructor
                                var constructor;

                                // Error Handling > Update > Constructor
                                try { constructor = LDKF.isConstructible(object) ? object.constructor || null : null }
                                catch (error) {}

                                // Function > Is Valid Constructor
                                function isValidConstructor() { return typeof constructor == "function" || typeof constructor == "object" }

                                // Logic
                                if (!isValidConstructor(constructor)) {
                                    // Error Handling
                                    try {
                                        // Initialization > Prototype
                                        var prototype = LDKF.objectPrototypeGet__Proto__(object);

                                        // Update > Constructor
                                        prototype && (constructor = prototype.constructor)
                                    } catch (error) {}

                                    // Logic
                                    if (!isValidConstructor(constructor)) { /* Some code here... */ }
                                }

                                // Return
                                return constructor
                            },

                            // Get Property
                            objectPrototypeGetProperty: function objectPrototypeGetProperty(object, key) {
                                // Error Handling > Logic > Return
                                try { if (LDKF.objectPrototypeHasProperty(object, key)) return object[key] }
                                catch (error) {}

                                // Return
                                return
                            },

                            // Has Property
                            objectPrototypeHasProperty: function objectPrototypeHasProperty(object, propertyKey) {
                                // Error Handling > Return
                                try { return propertyKey in object } catch (error) {}

                                // Return
                                return !1
                            },

                            // Set Properties
                            objectPrototypeSetProperties: function objectPrototypeSetProperties(object, keys, values) {
                                // Initialization > (Iterator, Length)
                                var iterator = (keys || values).length, length = iterator;

                                /* Loop
                                        Index Keys (or Values).
                                */
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Modification > Object > [Key]
                                    LDKF.objectPrototypeSetProperty(object, keys[index], values[index])
                                }

                                // Return
                                return values
                            },

                            // Set Property
                            objectPrototypeSetProperty: function objectPrototypeSetProperty(object, key, value) { try { return object[key] = value } catch (error) {} },

                            // Set Getter
                            objectPrototypeSetGetter: function objectPrototypeSetGetter(object, key, getter) {
                                // Error Handling > Return
                                try { return LDKF.objectDefineProperty(object, key, {configurable: !0, enumerable: !0, get: getter}) }
                                catch (error) {}
                            },

                            // Set Getter-Setter
                            objectPrototypeSetGetterSetter: function objectPrototypeSetGetterSetter(object, key, getter_setter) {
                                // Error Handling > Return
                                try { return LDKF.objectDefineProperty(object, key, {configurable: !0, enumerable: !0, get: getter_setter.getter, set: getter_setter.setter}) }
                                catch (error) {}
                            },

                            // Set Setter
                            objectPrototypeSetSetter: function objectPrototypeSetSetter(object, key, setter) {
                                // Error Handling > Return
                                try { return LDKF.objectDefineProperty(object, key, {configurable: !0, enumerable: !0, set: setter}) }
                                catch (error) {}
                            },

                    /* Set --- NOTE (Lapys) -> Setter-based functions. */
                    set: new function Set() {}
                },

                // Information --- NOTE (Lapys) -> Information presented to the user from the library.
                info: {
                    // Debugging Messages
                    debugMessages: {},

                    // Defaults
                    defaults: {},

                    // Error Messages
                    errorMessages: {}
                },

                // Objects --- NOTE (Lapys) -> 'Immutable', private values.
                objects: {
                    /* Custom --- NOTE (Lapys) -> Custom LapysJS data types or objects (except `LapysJSError`). */
                    custom: new function Custom() {},

                    // Descriptions
                    descriptions: {}
                },

                // Options --- NOTE (Lapys) -> Options that affect how the library is integrated into the runtime environment.
                options: {
                    // Allow Application Features --- NOTE (Lapys) -> Basically spawn in the `app` object or not.
                    allowAppFeatures: !0,

                    // Debug Mode --- NOTE (Lapys) -> Allow the LDK to be public.
                    debugMode: !1
                },

                // Random --- NOTE (Lapys) -> Private methods & properties.
                random: {
                    // Create Object --- NOTE (Lapys) -> Custom library objects.
                    createObject: {},

                    // Environment Features --- NOTE (Lapys) -> Specifics for the current standard of JavaScript being executed.
                    environmentFeatures: {},

                    /* Global Regular Expression Patterns
                            --- NOTE ---
                                #Lapys: Reminiscent of the GREP (g/re/p) text editing program.
                    */
                    GREP: {
                        // All
                        '.': function all(string) {
                            // Return
                            return !LDKF.stringPrototypeIncludes(string, '\n')
                        },

                        // All Existing Occurrences
                        '+': function all_existing_occurrences(string, matches, patterns) {
                            // Return
                            return LDKRg.test_occurrence(string, matches, patterns, 1, LDKO.infinity)
                        },

                        // All Occurrences
                        '*': function all_occurrences(string, matches, patterns) {
                            // Return
                            return LDKRg.test_occurrence(string, matches, patterns, 0, LDKO.infinity)
                        },

                        // Alphanumerics
                        "\\w": (function() {
                            // Initialization > Method
                            var method = function alphanumerics(string) {
                                // Return
                                return LDKRg["\\d"](string) || LDKRg.test_pattern(string,
                                    LDKF.arrayPrototypeConcatenate([], method.additionalMatches, LDKRs.alphabets.lowercase, LDKRs.alphabets.uppercase)
                                )
                            };

                            // Modification > Method > Additional Matches
                            method.additionalMatches = ['_'];

                            // Return
                            return method
                        })(),

                        // Backspace
                        "[\\b]": function backspace(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\u0008'])
                        },

                        // Carriage Return
                        "\\r": function carriage_return(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\u000D'])
                        },

                        // Digits
                        "\\d": (function() {
                            // Initialization > Method
                            var method = function digits(string) {
                                // Return
                                return LDKRg.test_pattern(string, LDKF.arrayPrototypeConcatenate([], method.additionalMatches, LDKRs.digits))
                            };

                            // Modification > Method > Additional Matches
                            method.additionalMatches = [];

                            // Return
                            return method
                        })(),

                        // First
                        '^': function first(string, match) {
                            // Return
                            return LDKF.stringPrototypeRange(string, 0, match.length) == match
                        },

                        // Form Feed
                        "\\f": function form_feed(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\u000C'])
                        },

                        // Get Pattern Matches --- CHECKPOINT --- NOTE (Lapys) -> Simulate a quasi-form of JavaScript regular expressions.
                        getPatternMatches: function getPatternMatches(string, pattern) {
                            // Initialization > (Formatted Pattern, Matches)
                            var formattedPattern = "",
                                matches = [];

                            // Functions
                                // Expand Match List
                                function expandMatchList(matchList) {}

                                // Is Expandable Match List
                                function isExpandableMatchList(arg) {}

                            // Return
                            return matches
                        },

                        // Last
                        '$': function last(string, match) {
                            // Return
                            return LDKF.stringPrototypeRange(string, -match.length, -0) == match
                        },

                        // Line Feed
                        "\\n": function line_feed(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\u000A'])
                        },

                        // Look-Ahead
                        "?=": function look_ahead(string, matches, patterns) {
                            // Initialization > (Matches (Iterator, Length), Patterns Length, Index, Look-Ahead Matches)
                            var matchesIterator = matches.length, matchesLength = matchesIterator,
                                patternsLength = patterns.length,
                                index = -1,
                                lookAheadMatches = [];

                            /* Loop
                                    Index Matches.
                            */
                            while (matchesIterator) {
                                // Initialization > (Match, Patterns Iterator)
                                var match = matches[matchesIterator -= 1],
                                    patternsIterator = patternsLength;

                                // Loop > Update > Look-Ahead Matches
                                while (patternsIterator)
                                    lookAheadMatches[index += 1] = match + patterns[patternsIterator -= 1]
                            }

                            // Return
                            return LDKRg.test_pattern(string, lookAheadMatches)
                        },

                        // Negative Alphanumerics
                        "\\W": function negative_alphanumerics(string) {
                            // Return
                            return !LDKRg["\\w"](string)
                        },

                        // Negative Digits
                        "\\D": function negative_digits(string) {
                            // Return
                            return !LDKRg["\\d"](string)
                        },

                        // Negative Look-Ahead
                        "?!": function negative_look_ahead(string, matches, patterns) {
                            // Return
                            return LDKRg.test_pattern(string, matches) && !LDKRg["?="](string, matches, patterns)
                        },

                        // Negative White Space
                        "\\S": function negative_whitespace(string) {
                            // Return
                            return !LDKRg["\\s"](string)
                        },

                        // Null Character
                        "\\0": function null_character(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\x00'])
                        },

                        // Null-Single Occurrences
                        '?': function null_single_occurrences(string, matches, patterns) {
                            // Return
                            return LDKRg.test_occurrence(string, matches, patterns, 0, 1)
                        },

                        // Tab
                        "\\t": function tab(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\u0009'])
                        },

                        // Test Control Character --- CHECKPOINT (Lapys) -> Regular expression `\cX`
                        test_control_character: function test_control_character(string) {},

                        // Test Null Pattern
                        test_null_pattern: function test_null_pattern(matches) {
                            // Initialization > Matches Iterator
                            var matchesIterator = matches.length, valid;

                            /* Loop
                                    Index Matches.

                                    --- NOTE ---
                                        #Lapys: Search the current Matches to see if there is a non-empty string amongst.
                            */
                            while (matchesIterator)
                                // Logic > Return
                                if (matches[matchesIterator -= 1] === "")
                                    return !0;

                            // Return
                            return !1
                        },

                        /* Test Occurrence
                                --- NOTE ---
                                    #Lapys: Determine if a string has a character a certain amount of times.
                        */
                        test_occurrence: function test_occurrence(string, matches, patterns, start, stop) {
                            /* Logic
                                    [if statement]
                            */
                            if (start < stop + 1 && LDKF.isPositiveInteger(start) && (LDKF.isPositiveInteger(stop) || LDKF.isPositiveInfinity(stop))) {
                                // Update > Stop
                                LDKF.isPositiveInfinity(stop) && (stop = string.length);

                                // Initialization > (Matches (Iterator, Length), Occurrence (Iterator, Matches))
                                var matchesIterator = matches.length, matchesLength = matchesIterator,
                                    occurrenceIterator = -1,
                                    occurrenceMatches = [];

                                /* Loop
                                        Index Matches.
                                */
                                while (matchesIterator) {
                                    // Initialization > (Match, Patterns Iterator)
                                    var match = matches[matchesIterator -= 1],
                                        patternsIterator = patterns.length;

                                    /* Loop
                                            Index Patterns.
                                    */
                                    while (patternsIterator) {
                                        // Initialization > (Pattern, Match (Iterator, Length))
                                        var pattern = patterns[patternsIterator -= 1],
                                            matchIterator = match.length, matchLength = matchIterator;

                                        /* Loop
                                                Iterate through Match.
                                        */
                                        while (matchIterator) {
                                            // Initialization > (Match Index, Pattern (Iterator, Length))
                                            var matchIndex = matchLength - (matchIterator -= 1) - 1,
                                                patternIterator = pattern.length, patternLength = patternIterator;

                                            /* Loop
                                                    Iterate through Pattern.
                                            */
                                            while (patternIterator) {
                                                // Initialization > Pattern Index
                                                var patternIndex = patternLength - (patternIterator -= 1) - 1;

                                                /* Logic
                                                        [if:else if statement]
                                                */
                                                if (match[matchIndex + patternIndex] != pattern[patternIndex])
                                                    // [Break]
                                                    break;

                                                else if (!patternIterator) {
                                                    // Update > Match Iterator
                                                    matchIterator -= patternLength - 1;

                                                    // Function > Update Occurrence Match
                                                    (function updateOccurrenceMatch(string, index, repeat, start, stop) {
                                                        // Update > Stop
                                                        stop += 1;

                                                        /* Loop
                                                                [while statement]
                                                        */
                                                        while (start != stop) {
                                                            // Initialization > (Iterator, Stream, String (Iterator, Length))
                                                            var iterator = start,
                                                                stream = "",
                                                                stringIterator = string.length, stringLength = stringIterator;

                                                            /* Logic
                                                                    [if:else statement]
                                                            */
                                                            if (iterator)
                                                                /* Loop
                                                                        Iterate through String.
                                                                */
                                                                while (stringIterator > 0) {
                                                                    // Initialization > String Index
                                                                    var stringIndex = stringLength - (stringIterator -= 1) - 1;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (index == stringIndex)
                                                                        // Loop
                                                                        while (iterator) {
                                                                            // Update > (Iterator, Stream, String Iterator)
                                                                            iterator -= 1;
                                                                            stream += repeat;
                                                                            stringIterator -= repeat.length - 1
                                                                        }

                                                                    else
                                                                        // Update > Stream
                                                                        stream += string[stringIndex]
                                                                }

                                                            else
                                                                // Update > Stream
                                                                stream = LDKF.stringPrototypeRange(string, 0, index) + LDKF.stringPrototypeRange(string, index + repeat.length, -0);

                                                            // Update > (Occurrence Matches, Start)
                                                            occurrenceMatches[occurrenceIterator += 1] = stream;
                                                            start += 1
                                                        }
                                                    })(match, matchIndex, pattern, start, stop)
                                                }
                                            }
                                        }
                                    }
                                }

                                /* Logic
                                        [if:else statement]
                                */
                                if (start == stop) {
                                    // Initialization > Amount
                                    var amount = start || stop;

                                    /* Loop
                                            Index Matches.
                                    */
                                    while (matchesLength) {
                                        // Update > Matches (Length)
                                        matchesLength -= 1;
                                        matches[matchesLength] = LDKF.stringPrototypeRepeat(matches[matchesLength], amount)
                                    }
                                }

                                else
                                    // Update > Matches
                                    LDKF.arrayPrototypeConcatenate(matches, occurrenceMatches);

                                // Return
                                return LDKRg.test_pattern(string, matches)
                            }

                            // Return
                            return !1
                        },
                            // Test Specific Occurrence
                            test_specific_occurrence: function test_specific_occurrence(string, matches, patterns, occurrence) {
                                // Return
                                return LDKRg.test_occurrence(string, matches, patterns, occurrence, occurrence)
                            },

                        /* Test Pattern
                                --- NOTE ---
                                    #Lapys: Determine if a string is made up of only the Matches (patterns) given.
                        */
                        test_pattern: function test_pattern(string, matches) {
                            // Initialization
                                // Matches Length
                                var matchesLength = matches.length,

                                // Iterator, Length
                                iterator = string.length, length = iterator,

                                // Valid --- NOTE (Lapys) -> Store falsy/ truthy pattern tests as strings of 0's and 1's in this variable. If there is a 0, this gets changed to `false`.
                                valid = "";

                            // Logic > Return
                            if (!matchesLength) return null;

                            /* Logic
                                    If
                                        the String is non-empty.
                            */
                            if (length) {
                                /* Loop
                                        Iterate through String.
                                */
                                while (iterator > 0) {
                                    // Initialization > (Index, Length, Matches (Found, Iterator))
                                    var index = length - (iterator -= 1) - 1,
                                        matchesFound = !1,
                                        matchesIterator = matchesLength;

                                    /* Loop
                                            Index Matches.
                                    */
                                    while (matchesIterator) {
                                        // Initialization > (Match) (Found, Iterator, Length)
                                        var match = matches[matchesIterator -= 1],
                                            matchFound = !1,
                                            matchIterator = match.length, matchLength = matchIterator;

                                        /* Loop
                                                Iterate through Match.
                                        */
                                        while (matchIterator) {
                                            // Initialization > Match Index
                                            var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                            // Logic
                                            if (string[index + matchIndex] != match[matchIndex])
                                                // [Break]
                                                break;

                                            else if (!matchIterator) {
                                                // Update > (Iterator, Match Found, Valid)
                                                iterator -= matchLength - 1;
                                                matchFound = matchesFound = !0;
                                                valid += '1'
                                            }
                                        }

                                        // Update > Valid
                                        (!matchesFound && !matchesIterator) && (valid += '0')
                                    }
                                }

                                // Update > Iterator
                                iterator = valid.length;

                                /* Loop
                                        Iterate through Valid.
                                */
                                while (iterator)
                                    // Logic
                                    if (valid[iterator -= 1] == '0') {
                                        // Update > Valid
                                        valid = !1;

                                        // [Break]
                                        break
                                    }

                                    else if (!iterator)
                                        // Update > Valid
                                        valid = !0
                            }

                            else
                                // Return
                                return LDKRg.test_null_pattern(matches);

                            // Return
                            return valid
                        },

                        // Vertical Tab
                        "\\v": function vertical_tab(string) {
                            // Return
                            return LDKRg.test_pattern(string, ['\u000B'])
                        },

                        // White Space
                        "\\s": function whitespace(string) {
                            // Return
                            return LDKRg.test_pattern(string, [
                                ' ', '\f', '\n', '\r', '\t', '\v', '\u00a0', '\u1680',
                                '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009',
                                '\u200a', '\u2028', '\u2029', '\u202f', '\u205f', '\u3000', '\ufeff'
                            ])
                        }
                    },

                    // Strings --- NOTE (Lapys) -> Generic string collections.
                    strings: {
                        // Alphabets
                        alphabets: {
                            // Lowercase
                            lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

                            // Uppercase
                            uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                        },

                        // Digits
                        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                    }
                },

                /* (Constructor > Prototype) */
                __proto__: new function LapysDevelopmentKit() {}
            }, LDK = LapysDevelopmentKit,
                LDKF = LDK.functions,
                    LDKFg = LDKF.get, LDKFs = LDKF.set,
                LDKI = LDK.info,
                LDKO = LDK.objects,
                    LDKOc = LDKO.custom,
                    LDKOd = LDKO.descriptions,
                LDKR = LDK.random,
                    LDKRg = LDKR.GREP,
                    LDKRs = LDKR.strings,

            // LapysJS --- NOTE (Lapys) -> The library's public access to the global environment.
            LapysJS = LDKF.objectPrototypeSetProperty(GLOBAL_MAIN, "LapysJS", (function(LapysJS) {
                // Logic --- NOTE (Lapys) -> Perform user-specified modifications to the library's features.
                if (LDKF.objectPrototypeHasProperty(GLOBAL_MAIN, "LapysJS")) {
                    // Initialization > LapysJS
                    var $LapysJS = (function($LapysJS) {
                        /* Update > Library {Is} Pre-Installed
                                --- UPDATE REQUIRED ---
                                    #Lapys: Stronger testing for pre-defined `LapysJS` and currently defined `LapysJS` required.
                        */
                        (LapysJS.constructor + '' == LDKF.objectPrototypeGetConstructor($LapysJS) + '') && (LIBRARY_PREINSTALLED = !0);

                        // Return
                        return LIBRARY_PREINSTALLED ? {} : ($LapysJS || {})
                    })(LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "LapysJS"));

                    // Logic --- NOTE (Lapys) -> The library pretty much goes avoids an error state at this point.
                    if (!LIBRARY_PREINSTALLED) {
                        /* Initialization > Lapys Development Kit
                            --- NOTE ---
                                #Lapys: Allow a pseudo-LDK because the original LDK has not been set up yet.
                                    - The actual values in the original LDK do not have to be coherent with the ones here.
                                    - The pseudo-LDK still defers to the same standards that govern the original LDK.
                                    - Values from the pseudo-LDK can also be transferred to the original LDK to prevent code duplication.
                        */
                        var $LDK = {
                            // Functions
                            functions: {
                                // Array
                                    // Prototype
                                        // Free
                                        arrayPrototypeFree: LDKF.arrayPrototypeFree = function arrayPrototypeFree(array) {
                                            // Initialization > Iterator
                                            var iterator = array.length;

                                            // Loop > Deletion
                                            while (iterator)
                                                LDKF.objectPrototypeDeleteProperty(array, iterator -= 1);

                                            // Modification > Array > Length
                                            array.length = 0;

                                            // Return
                                            return array
                                        },

                                        // Shallow Clone
                                        arrayPrototypeShallowClone: LDKF.arrayPrototypeShallowClone = function arrayPrototypeShallowClone(array) {
                                            // Initialization > (Clone, Iterator, Length)
                                            var clone = [], iterator = array.length, length = iterator;

                                            /* Loop
                                                    Index Array.
                                            */
                                            while (iterator) {
                                                // Initialization > Index
                                                var index = length - (iterator -= 1) - 1;

                                                // Update > Clone
                                                clone[index] = array[index]
                                            }

                                            // Return
                                            return clone
                                        },

                                // Is Array
                                isArray: function isArray(arg) { return typeof arg == "object" && !!arg && LDKF.objectPrototypeGetConstructor(arg) === [].constructor },

                                // Object
                                    // Prototype
                                        // Is Exact To
                                        objectPrototypeIsExactTo: LDKF.objectPrototypeIsExactTo = function objectPrototypeIsExactTo(objectA, objectB) { return LDKF.objectIs(objectA, objectB) },

                                        // Is Similar To
                                        objectPrototypeIsSimilarTo: LDKF.objectPrototypeIsSimilarTo = function objectPrototypeIsSimilarTo(objectA, objectB) { try { return objectA == objectB } catch (error) {} return !1 }
                            },

                            // Random
                            random: {
                                // Update Features List
                                updateFeaturesList: function updateFeaturesList(features, featuresUpdates) {
                                    // Initialization > (Iterator, Length, Valid Features)
                                    var iterator = featuresUpdates.length, length = iterator,
                                        validFeatures = $LDKF.arrayPrototypeShallowClone(features);

                                    // Update > Features
                                    $LDKF.arrayPrototypeFree(features);

                                    /* Loop
                                            Index Features Update.
                                    */
                                    while (iterator) {
                                        // Initialization > Features Update
                                        var featuresUpdate = featuresUpdates[length - (iterator -= 1) - 1];

                                        // Update > Features
                                        LDKF.arrayPrototypeIncludes(validFeatures, featuresUpdate) && (features[features.length] = featuresUpdate)
                                    }

                                    // Return
                                    return features
                                }
                            }
                        }, $LDKF = $LDK.functions, $LDKR = $LDK.random;

                        // Modification
                            // Lapys Development Kit
                                // Features
                                    // DOM
                                        // Custom Elements
                                        LDKF.objectPrototypeHasProperty($LapysJS, "customElements") && (function(customElements) {
                                            // Update > (Lapys Development Kit > Features > DOM > Custom Elements)
                                            $LDKF.isArray(customElements) && $LDKR.updateFeaturesList(LDK.features.DOM.customElements, customElements)
                                        })(LDKF.objectPrototypeGetProperty($LapysJS, "customElements"));

                                        // Dynamic Elements
                                        LDKF.objectPrototypeHasProperty($LapysJS, "dynamicElements") && (function(dynamicElements) {
                                            // Update > (Lapys Development Kit > Features > DOM > Dynamic Elements)
                                            $LDKF.isArray(dynamicElements) && $LDKR.updateFeaturesList(LDK.features.DOM.dynamicElements, dynamicElements)
                                        })(LDKF.objectPrototypeGetProperty($LapysJS, "dynamicElements"));

                                        // Dynamic Features
                                        LDKF.objectPrototypeHasProperty($LapysJS, "dynamicFeatures") && (function(dynamicFeatures) {
                                            // Update > (Lapys Development Kit > Features > DOM > Dynamic Elements)
                                            $LDKF.isArray(dynamicFeatures) && $LDKR.updateFeaturesList(LDK.features.DOM.dynamicFeatures, dynamicFeatures)
                                        })(LDKF.objectPrototypeGetProperty($LapysJS, "dynamicFeatures"));

                                // Information
                                    // Defaults
                                        // CSS Value
                                        LDKF.objectPrototypeHasProperty($LapysJS, "defaultCSSValue") && (LDKI.defaults.cssValue = LDKF.objectPrototypeGetProperty($LapysJS, "defaultCSSValue"));

                                // Options
                                    // Allow Application Features
                                    LDKF.objectPrototypeHasProperty($LapysJS, "allowAppFeatures") && (LDK.options.allowAppFeatures = !!LDKF.objectPrototypeGetProperty($LapysJS, "allowAppFeatures"));

                                    // Debug Mode
                                    LDK.options.debugMode = !!LDKF.objectPrototypeGetProperty($LapysJS, "debugMode");
                    }
                }

                // Return
                return LapysJS
            })({
                /* Temporary Data
                        --- NOTE ---
                            #Lapys: Store non-protected private data here. This is the only level of private access users are allowed.
                                - This will be very useful for non-global evaluation strings and so on.
                */
                tmp: new function TemporaryData() {
                    // Initialization > Target
                    var that = this;

                    // Modification > Target
                        // Cache --- NOTE (Lapys) -> Contains items recorded by the library.
                        that.cache = {
                            // Exponents
                            exponents: [],

                            // Timeouts
                            timeouts: []
                        };

                        // Document Object Model
                        that.DOM = {
                            // Focused Elements
                            focusedElements: [],

                            // Scripted Elements
                            scriptedElements: [],

                            // Tooltip
                            tooltip: {
                                // Elements
                                elements: [],

                                // Links
                                links: [],

                                // Tooltips
                                tooltips: []
                            },

                            // Watch
                            watch: {
                                // On Attribute Added
                                onAttributeAdded: [],

                                // On Attribute Count Change
                                onAttributeCountChange: [],

                                // On Attribute Removed
                                onAttributeRemoved: [],

                                // On Attribute Value Change
                                onAttributeValueChange: [],

                                // On Element Added
                                onElementAdded: [],

                                // On Element Count Change
                                onElementCountChange: [],

                                // On Element Inner HTML Change
                                onElementInnerHTMLChange: [],

                                // On Element Removed
                                onElementRemoved: [],

                                // On Node Added
                                onNodeAdded: [],

                                // On Node Count Change
                                onNodeCountChange: [],

                                // On Node Removed
                                onNodeRemoved: []
                            }
                        };

                        // Objects
                        that.objects = {};

                    // Return
                    return that
                },

                /* (Constructor > Prototype) */
                __proto__: new function LapysJS() {}
            }));

        /* {Debug Mode} Logic
                [if statement]
        */
        if (LDK.options.debugMode) {
            // Modification > Global
                // Lapys Development Kit
                LDKF.objectPrototypeSetProperties(GLOBAL_MAIN, ["LapysDevelopmentKit", "LDK"], [LapysDevelopmentKit, LDK]);
                    // (...)
                    LDKF.objectPrototypeSetProperties(
                        GLOBAL_MAIN,
                        ["LDKF", "LDKFg", "LDKFs", "LDKI", "LDKO", "LDKOc", "LDKOd", "LDKR", "LDKRg", "LDKRs"],
                        [LDKF, LDKFg, LDKFs, LDKI, LDKO, LDKOc, LDKOd, LDKR, LDKRg, LDKRs]
                    )
        }

        /* Modification */
            /* Lapys Development Kit */
                /* Information */
                    // Debugging Messages
                        // Prefix
                        LDKI.debugMessages.prefix = "LapysJS [v" + VERSION + "] ->\n\t";

                    // Defaults
                        // CSS Value
                        LDKF.objectPrototypeHasProperty(LDKI.defaults, "cssValue") || (LDKI.defaults.cssValue = "initial");

                    // Error Messages
                        // Native to Environment
                        LDKI.errorMessages.native_to_environment = " must be native to this development environment to install the library"

                /* Function --- NOTE (Lapys) -> Mathematical methods such as `abs` and `ceil` are not prefixed. */
                    // Absolute
                    LDKF.abs = function abs(arg) { return LDKF.isNegativeNumber(LDKF.isNumber(arg) ? arg : arg = LDKF.number(arg)) ? -arg : arg };

                    // Add Class List to Element
                    LDKF.addClassListToElement = function addClassListToElement(element, classLists) {
                        // Initialization > (Iterator, Length)
                        var iterator = arguments.length - 1, length = iterator + 1;

                        /* Loop
                                Index Arguments.
                        */
                        while (iterator) {
                            // Initialization > Class Name
                            var className = arguments[length - (iterator -= 1) - 1];

                            /* Logic
                                    [if:else statement]
                            */
                            if (LDKF.isArrayObject(className)) {
                                // Initialization > Class List (Iterator, Length)
                                var classListIterator = className.length,
                                    classListLength = classListIterator;

                                /* Loop
                                        Index Class Name.

                                        --- NOTE ---
                                            #Lapys: Expand on the array object initially.
                                */
                                while (classListIterator) {
                                    // Initialization > Class List Item
                                    var classListItem = className[classListLength - (classListIterator -= 1) - 1];

                                    // Modification > Element > Class --- NOTE (Lapys) -> Call this function again to re-expand on array object children.
                                    LDKF.isArrayObject(classListItem) ?
                                        LDKF.addClassListToElement(element, classListItem) :
                                        LDKF.addClassNameToElement(element, classListItem)
                                }
                            }

                            else
                                // Modification > Element > Class
                                LDKF.addClassNameToElement(element, className)
                        }
                    };

                    // Add Class Name to Element --- CHECKPOINT ---
                    // Add Event to Node --- CHECKPOINT ---

                    // Object > Prototype > Is Equal To
                    LDKF.objectPrototypeIsEqualTo = function objectPrototypeIsEqualTo(objectA, objectB) { return objectA === objectB };

                    // Array
                        // Prototype
                            // Add to Back
                            LDKF.arrayPrototypeAddToBack = function arrayPrototypeAddToBack(array, items) {
                                // Update > Items
                                items = LDKF.arrayPrototypeRange(arguments, 1, -0);

                                // Initialization > ((New) Array Length, Iterator, Length)
                                var arrayLength = array.length, newArrayLength,
                                    iterator = items.length, length = iterator;

                                /* Loop
                                        Index Items.
                                */
                                while (iterator) {
                                    // Initialization > Array Iterator
                                    var arrayIterator = newArrayLength = arrayLength + (length - (iterator -= 1) - 1);

                                    /* Loop
                                            Index Array.
                                    */
                                    while (arrayIterator) {
                                        // Update > Array (Iterator)
                                        arrayIterator -= 1;
                                        array[arrayIterator + 1] = array[arrayIterator]
                                    }

                                    // Update > Array
                                    array[0] = items[iterator]
                                }

                                // Modification > Array > Length
                                array.length = newArrayLength + 1;

                                // Return
                                return array
                            };

                            // Add to Front
                            LDKF.arrayPrototypeAddToFront = function arrayPrototypeAddToFront(array, items) {
                                // Update > Items
                                items = LDKF.arrayPrototypeRange(arguments, 1, -0);

                                // Initialization > ((New) Array Length, Iterator, Length)
                                var arrayLength = array.length, newArrayLength,
                                    iterator = items.length, length = iterator;

                                /* Loop
                                        Index Items.
                                */
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Update > Array
                                    array[newArrayLength = arrayLength + index] = items[index]
                                }

                                // Modification > Array > Length
                                array.length = newArrayLength + 1;

                                // Return
                                return array
                            };

                            // Build
                            LDKF.arrayPrototypeBuild = function arrayPrototypeBuild(array, maps) {
                                // Update > Maps
                                maps = LDKF.arrayPrototypeRange(arguments, 1, -0);

                                // Initialization > (Iterator, Length, Maps Length)
                                var iterator = array.length, length = iterator,
                                    mapsLength = maps.length;

                                /* Loop
                                        Index Array.
                                */
                                while (iterator) {
                                    // Initialization > (Index, Maps Iterator)
                                    var index = length - (iterator -= 1) - 1,
                                        mapsIterator = mapsLength;

                                    /* Loop
                                            Index Maps.

                                        > Update > Array
                                    */
                                    while (mapsIterator)
                                        array[index] = maps[mapsLength - (mapsIterator -= 1) - 1].call(array, array[index])
                                }

                                // Return
                                return array
                            };

                            // Concatenate
                            LDKF.arrayPrototypeConcatenate = function arrayPrototypeConcatenate(array, concatenation) {
                                // Initialization > (Iterator, Length, Index)
                                var iterator = concatenation.length, length = iterator,
                                    index = array.length - 1;

                                // Loop > Update > Array
                                while (iterator)
                                    array[index += 1] = concatenation[length - (iterator -= 1) - 1];

                                // Update > Array
                                (arguments.length > 2) && LDKF.arrayPrototypeConcatenate.apply(LDKF, LDKF.arrayPrototypeAddToBack(LDKF.arrayPrototypeRange(arguments, 2, -0), array));

                                // Return
                                return array
                            };

                            // Cut Index
                            LDKF.arrayPrototypeCutIndex = function arrayPrototypeCutIndex(array, match) {
                                // Logic
                                if (this === hidden || LDKF.isPositiveInteger(match)) {
                                    // Initialization > (Length, Iterator)
                                    var length = array.length, iterator = length - match;

                                    // Loop
                                    while (iterator > 0) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Array
                                        array[index] = array[index + 1]
                                    }

                                    // Update > Array
                                    (match < length) && (array.length -= 1)
                                }

                                // Return
                                return array
                            };

                            // Implode --- NOTE (Lapys) -> Implode an array into a string.
                            LDKF.arrayPrototypeImplode = function arrayPrototypeImplode(array, separator) {
                                // Initialization > (Iterator, Length, Stream)
                                var iterator = array.length, length = iterator,
                                    stream = "";

                                // Update > Separator
                                separator = arguments.length > 1 ? LDKF.string(separator) : "";

                                // Loop > Update > Stream
                                while (iterator)
                                    stream += array[length - (iterator -= 1) - 1] + (!iterator || iterator == length ? "" : separator);

                                // Return
                                return stream
                            };

                            // Includes
                            LDKF.arrayPrototypeIncludes = function arrayPrototypeIncludes(array, item) {
                                // Return
                                return LDKF.arrayPrototypeLastIndex(array, item) != -1
                            };

                            // Index
                            LDKF.arrayPrototypeIndex = function arrayPrototypeIndex(array, item) {
                                // Initialization > (Iterator, Length)
                                var iterator = array.length, length = iterator;

                                // Loop > Logic > Return
                                while (iterator) {
                                    // Initialization > Index
                                    var index = length - (iterator -= 1) - 1;

                                    // Logic > Return
                                    if (LDKF.objectPrototypeIsEqualTo(array[index], item))
                                        return index
                                }

                                // Return
                                return -1
                            };

                            // Last Index
                            LDKF.arrayPrototypeLastIndex = function arrayPrototypeLastIndex(array, item) {
                                // Initialization > Iterator
                                var iterator = array.length;

                                // Loop > Logic > Return
                                while (iterator)
                                    if (LDKF.objectPrototypeIsEqualTo(array[iterator -= 1], item))
                                        return iterator;

                                // Return
                                return -1
                            };

                            // Range
                            LDKF.arrayPrototypeRange = function arrayPrototypeRange(array, start, stop) {
                                // Update > Array
                                array = LDKF.arrayPrototypeShallowClone(array);

                                // Initialization > (Length, Range)
                                var length = array.length, range = [];

                                // Logic
                                if (!LDKF.isNegativeInfinity(stop) && LDKF.isNumber(start) && LDKF.isNumber(stop)) {
                                    // Update > (Start, Stop)
                                    (LDKF.isNaN(start) || LDKF.isNegativeInfinity(start)) && (start = 0);
                                    LDKF.isNaN(stop) && (stop = 0);
                                    LDKF.isPositiveInfinity(stop) && (stop = length);
                                    LDKF.isPositiveInfinity(start) && (start = stop);

                                    // Loop > Update > (Start, Stop)
                                    while (LDKF.isNegativeNumber(start)) start = length + start;
                                    while (LDKF.isNegativeNumber(stop)) stop = length + stop;

                                    // Logic
                                    if (start > stop) {
                                        // Initialization > Former Start
                                        var formerStart = start;

                                        // Update > (Array, Start, Stop)
                                        LDKF.arrayPrototypeReverse(array);
                                        start = stop;
                                        stop = formerStart
                                    }

                                    // Logic
                                    if (start < stop) {
                                        // Update > Stop
                                        (stop > length) && (stop = length);

                                        // Loop > Update > Range
                                        for (start; start != stop; start += 1)
                                            range[range.length] = array[start]
                                    }

                                    // Return
                                    return range
                                }

                                // Return
                                return null
                            };

                            // Remove From Back
                            LDKF.arrayPrototypeRemoveFromBack = function arrayPrototypeRemoveFromBack(array, items) {
                                // Update > Items
                                items = LDKF.arrayPrototypeRange(arguments, 1, -0);

                                // Initialization > (Iterator, Length)
                                var iterator = items.length, length = iterator;

                                /* Loop
                                        Index Items.
                                */
                                while (iterator) {
                                    // Initialization > (Array (Iterator, Length), Item)
                                    var arrayIterator = array.length, arrayLength = arrayIterator,
                                        item = items[length - (iterator -= 1) - 1];

                                    /* Loop
                                            Index Array.
                                    */
                                    while (arrayIterator) {
                                        // Initialization > Array Index
                                        var arrayIndex = arrayLength - (arrayIterator -= 1) - 1;

                                        // Logic
                                        if (LDKF.objectPrototypeIsEqualTo(array[arrayIndex], item)) {
                                            // Update > Array
                                            LDKF.arrayPrototypeCutIndex.call(hidden, array, arrayIndex);

                                            // [Break]
                                            break
                                        }
                                    }
                                }

                                // Return
                                return array
                            };

                            // Remove From Front
                            LDKF.arrayPrototypeRemoveFromFront = function arrayPrototypeRemoveFromFront(array, items) {
                                // Update > Items
                                items = LDKF.arrayPrototypeRange(arguments, 1, -0);

                                // Initialization > (Iterator, Length)
                                var iterator = items.length, length = iterator;

                                /* Loop
                                        Index Items.
                                */
                                while (iterator) {
                                    // Initialization > (Array Iterator, Item)
                                    var arrayIterator = array.length,
                                        item = items[length - (iterator -= 1) - 1];

                                    /* Loop
                                            Index Array.
                                    */
                                    while (arrayIterator) {
                                        // Update > Array Iterator
                                        arrayIterator -= 1;

                                        // Logic
                                        if (LDKF.objectPrototypeIsEqualTo(array[arrayIterator], item)) {
                                            // Update > Array
                                            LDKF.arrayPrototypeCutIndex.call(hidden, array, arrayIterator);

                                            // [Break]
                                            break
                                        }
                                    }
                                }

                                // Return
                                return array
                            };

                            // Reverse
                            LDKF.arrayPrototypeReverse = function arrayPrototypeReverse(array) {
                                // Initialization > (Iterator, Length)
                                var iterator = -1, length = array.length;

                                // Loop
                                while (iterator < length - 1) {
                                    // Initialization > Item
                                    var item = array[iterator += 1];

                                    // Update > Array
                                    array[iterator] = array[length -= 1];
                                    array[length] = item
                                }

                                // Return
                                return array
                            };

                            /* Sort
                                    --- NOTE ---
                                        #Lapys: Sorting priorities ->
                                            - Uppercase alphabets
                                            - '_' characters
                                            - Lowercase alphabets
                                            - Numeral Digits
                                            - Miscellaneous ->
                                                --  !"#$%&'()*+,-./:;<=>?@[\]^_`{}~
                                                -- Miscellaneous
                            */
                            LDKF.arrayPrototypeSort = function arrayPrototypeSort(array, sorter) {
                                // Initialization
                                    // Iterator, Length
                                    var iterator = array.length, length = iterator,

                                    // Priorities --- NOTE (Lapys) -> For basic non-string sorts, the Priorities variable will remain blank.
                                    priorities = [],

                                    // Un-sortable --- NOTE (Lapys) -> Store non-prioritized items (in order) here.
                                    unsortable = [],

                                    // Un-sortable Index
                                    unsortableIndex = -1;

                                // Function
                                    // Set Priorities --- NOTE (Lapys) -> Once priorities are set, it can not be changed.
                                    function setPriorities() {
                                        // Update > Priorities --- NOTE (Lapys) -> In this order, which places uppercase alphabets as the highest priority.
                                        priorities.length || (priorities = LDKF.arrayPrototypeConcatenate([],
                                            LDKR.strings.alphabets.uppercase,
                                            ['_'],
                                            LDKR.strings.alphabets.lowercase,
                                            LDKR.strings.digits,
                                            [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ',', ' ', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~']
                                        ));

                                        // Return
                                        return priorities
                                    };

                                    // Update Un-sortable
                                    function updateUnsortable(item) {
                                        // Update > (Un-sortable, Array) --- NOTE (Lapys) -> Non-sortable items are temporarily removed from the Array.
                                        unsortable[unsortableIndex += 1] = item;
                                        LDKF.arrayPrototypeRemoveFromBack(array, item)
                                    }

                                // Update > Sorter
                                (arguments.length > 1) || (sorter = function sorter(currentItem, nextItem) {
                                    // Logic
                                    if (LDKF.isNumber(currentItem) && LDKF.isNumber(nextItem))
                                        // Return
                                        return currentItem > nextItem;

                                    else {
                                        // Update > (Current, Next) Item
                                        currentItem = LDKF.string(currentItem);
                                        nextItem = LDKF.string(nextItem);

                                        // Logic
                                        if (!currentItem || currentItem == nextItem)
                                            // Return --- NOTE (Lapys) -> Do not swap similar items or empty items.
                                            return !1;

                                        // Logic
                                        if (currentItem && !nextItem)
                                            // Return --- NOTE (Lapys) -> Empty strings get the highest priority.
                                            return !0;

                                        // Set Priorities
                                        setPriorities();

                                        // Initialization > (Current, Next) Item (Iterator, Length)
                                        var currentItemIterator = currentItem.length, currentItemLength = currentItemIterator,
                                            nextItemIterator = nextItem.length, nextItemLength = nextItemIterator;

                                        /* Logic
                                                [if:else statement]

                                                --- NOTE ---
                                                    #Lapys: For some reason, testing the alternative condition
                                                        with single-character strings fail.
                                        */
                                        if (nextItemLength == 1) {
                                            // Initialization > (Current, Next) Item Priority
                                            var currentItemPriority = LDKF.arrayPrototypeIndex(priorities, currentItem[0]),
                                                nextItemPriority = LDKF.arrayPrototypeIndex(priorities, nextItem[0]);

                                            // Logic > Return
                                            if (currentItemPriority != nextItemPriority) return currentItemPriority > nextItemPriority

                                            // Return
                                            return !0
                                        }

                                        else {
                                            /* Loop
                                                    Iterate Current Item.
                                            */
                                            while (currentItemIterator) {
                                                // Initialization > (Current, Next) Item Index
                                                var currentItemIndex = currentItemLength - (currentItemIterator -= 1) - 1,
                                                    nextItemIndex = nextItemLength - (nextItemIterator -= 1) - 1;

                                                // Logic
                                                if (currentItemIterator && !nextItemIterator)
                                                    // Return --- NOTE (Lapys) -> Next Item is smaller than the Current Item
                                                    return !0;

                                                else {
                                                    // Initialization > (Current, Next) Item Priority
                                                    var currentItemPriority = LDKF.arrayPrototypeIndex(priorities, currentItem[currentItemIndex]),
                                                        nextItemPriority = LDKF.arrayPrototypeIndex(priorities, nextItem[nextItemIndex]);

                                                    // Logic > Return
                                                    if (!currentItemIndex && currentItemPriority == -1) return hidden;
                                                    if (currentItemPriority != nextItemPriority) return currentItemPriority > nextItemPriority
                                                }
                                            }

                                            // Logic
                                            if (nextItemIterator)
                                                // Return --- NOTE (Lapys) -> Next Item is larger than the Current Item
                                                return !1
                                        }
                                    }
                                });

                                /* Loop
                                        Index Array.
                                */
                                while (iterator) {
                                    // Initialization > ((Next) Index, Swapped)
                                    var index = length - (iterator -= 1) - 1,
                                        nextIndex = index + 1,
                                        swapped = !1;

                                    // Logic
                                    if (index != -1 && nextIndex != length) {
                                        // Initialization > (Item, Swap)
                                        var item = array[index],
                                            swap = sorter(item, array[nextIndex]);

                                        // Logic
                                        if (swap === hidden) {
                                            // Update Un-sortable
                                            updateUnsortable(item);

                                            // Update > Iterator
                                            iterator = (length = array.length)
                                        }

                                        else if (swap) {
                                            // Update > (Array, Swapped)
                                            LDKF.arrayPrototypeSwap(array, index, nextIndex);
                                            swapped = !0
                                        }
                                    }

                                    else if (index == length - 1) {
                                        // Initialization > Item --- NOTE (Lapys) -> Test for the last item.
                                        var item = array[index];

                                        // Logic
                                        if (!LDKF.isNumber(item) && !LDKRg.test_pattern(LDKF.string(array[index]), setPriorities())) {
                                            // Update Un-sortable
                                            updateUnsortable(array[index]);

                                            // Update > Iterator
                                            iterator = (length = array.length)
                                        }
                                    }

                                    // Update > Iterator
                                    swapped && (iterator += 2)
                                }

                                // Update > Length
                                length -= 1;

                                // Initialization > Un-sortable Length
                                var unsortableLength = (unsortableIndex += 1);

                                // Loop > Update > Array --- NOTE (Lapys) -> All unsorted items get re-appended back into the Array.
                                while (unsortableIndex > 0)
                                    array[length += 1] = unsortable[unsortableLength - (unsortableIndex -= 1) - 1];

                                // Return
                                return array
                            };

                            // Swap
                            LDKF.arrayPrototypeSwap = function arrayPrototypeSwap(array, indexA, indexB) {
                                // Initialization > Item
                                var item = array[indexB];

                                // Update > Array
                                array[indexB] = array[indexA];
                                array[indexA] = item;
                                (arguments.length > 3) && LDKF.arrayPrototypeSwap.apply(LDKF, [array, indexB, arguments[3]]);

                                // Return
                                return array
                            };

                    // Ceiling
                    LDKF.ceil = function ceil(arg) { return LDKF.isInteger(LDKF.isNumber(arg) ? arg : arg = LDKF.number(arg)) ? arg : LDKF.floor(arg) + 1 };

                    // Clear Interval
                    LDKF.clearInterval = function clearInterval(timeoutID) {
                        // Initialization > (Timeouts, Iterator)
                        var timeouts = LapysJS.tmp.cache.timeouts,
                            iterator = timeouts.length;

                        /* Loop
                                Index Timeouts.
                        */
                        while (iterator) {
                            // Initialization > Timeout
                            var timeout = timeouts[iterator -= 1];

                            // Clear Timeout
                            (timeout.init == timeoutID) && LDKF.clearTimeout(timeout.current)
                        }
                    };

                    // Clear Timeout
                    LDKF.clearTimeout = function clearTimeout(timeoutID) { return LDKO.clearTimeout.call(GLOBAL_MAIN, timeoutID) };

                    // Console
                        // Group
                        LDKF.consoleGroup = function consoleGroup() {
                            // Error Handling > Return
                            try { return LDKO.consoleGroup.apply(this, arguments) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return LDKO.consoleGroup.apply(GLOBAL_MAIN, arguments) }
                            catch (error) {}

                            // Return
                            return LDKF.consoleLog.apply(this, arguments)
                        };

                        // Group End
                        LDKF.consoleGroupEnd = function consoleGroupEnd() {
                            // Error Handling > Return
                            try { return LDKO.consoleGroupEnd.apply(this, arguments) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return LDKO.consoleGroupEnd.apply(GLOBAL_MAIN, arguments) }
                            catch (error) {}

                            // Return
                            return LDKF.consoleLog.apply(this, arguments)
                        };

                        // Log
                        LDKF.consoleLog = function consoleLog() {
                            // Error Handling > Return
                            try { return LDKO.consoleLog.apply(this, arguments) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return LDKO.consoleLog.apply(GLOBAL_MAIN, arguments) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return console.log.apply(this, arguments) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return console.log.apply(GLOBAL_MAIN, arguments) }
                            catch (error) {}
                        };

                        // Warn
                        LDKF.consoleWarn = function consoleWarn() {
                            // Error Handling > Return
                            try { return LDKO.consoleWarn.apply(this, arguments) }
                            catch (error) {}

                            // Error Handling > Return
                            try { return LDKO.consoleWarn.apply(GLOBAL_MAIN, arguments) }
                            catch (error) {}

                            // Return
                            return LDKF.consoleLog.apply(this, arguments)
                        };

                    // CSS Syntax To CSS Property-Value List
                    LDKF.cssSyntaxToCSSPropertyValueList = function cssSyntaxToCSSPropertyValueList(source) {
                        // Initialization > CSS Property-Value List
                        var cssPropertyValueList = new LDKOc.cssPropertyValueList;

                        // Logic
                        if (arguments.length) {
                            // Initialization > ((Allow, Current) Stream, Current Stream Lock, (Properties, Values) (Index), Iterator, Length)
                            var allowStream = !0,
                                currentStream = "properties",
                                currentStreamLock = null,
                                properties = [], values = [],
                                propertiesIndex = -1, valuesIndex = -1,
                                iterator = source.length, length = iterator;

                            /* Loop
                                    Iterate through Source.
                            */
                            while (iterator > 0) {
                                // Initialization > (Index, Character)
                                var index = length - (iterator -= 1) - 1,
                                    character = source[index];

                                /* Logic
                                        [if:else if statement]
                                */
                                if (allowStream) {
                                    // Logic
                                    if (character == '/' && source[index + 1] == '*') {
                                        // Update > Allow Stream
                                        allowStream = !1;

                                        // [Continue]
                                        continue
                                    }

                                    // Logic
                                    if (character == ':') {
                                        // Update > Current Stream (Lock)
                                        currentStream = "values";
                                        currentStreamLock = null;

                                        // [Continue]
                                        continue
                                    }

                                    else if (character == ';') {
                                        // Update > Current Stream (Lock)
                                        currentStream = "properties";
                                        currentStreamLock = null;

                                        // [Continue]
                                        continue
                                    }

                                    // Logic
                                    if (currentStream == "properties") {
                                        // Update > Properties (Index)
                                        (currentStream == currentStreamLock) || (propertiesIndex += 1);
                                        properties[propertiesIndex] ? properties[propertiesIndex] += character : properties[propertiesIndex] = (character == ' ' || character == '\n' ? "" : character)
                                    }

                                    else if (currentStream == "values") {
                                        // Update > Values (Index)
                                        (currentStream == currentStreamLock) || (valuesIndex += 1);
                                        values[valuesIndex] ? values[valuesIndex] += character : values[valuesIndex] = (character == ' ' || character == '\n' ? "" : character)
                                    }

                                    // Update > Current Stream-Lock
                                    currentStreamLock = currentStream
                                }

                                else if (character == '*' && source[index + 1] == '/') {
                                    // Update > (Allow Stream, Iterator)
                                    allowStream = !0;
                                    iterator -= 1;

                                    // [Continue]
                                    continue
                                }
                            }

                            // Update > Iterator
                            iterator = properties.length;

                            /* Loop
                                    Index Property (or Values).
                            */
                            while (iterator) {
                                // Update > (Iterator, CSS Property-Value List)
                                iterator -= 1;
                                LDKF.arrayPrototypeAddToFront(cssPropertyValueList, new LDKOc.cssPropertyValue(
                                    LDKF.stringPrototypeTrimRight(properties[iterator]),
                                    LDKF.stringPrototypeTrimRight(values[iterator])
                                ))
                            }
                        }

                        // Return
                        return cssPropertyValueList
                    };

                    // Document
                        // Prototype
                            // Get Elements By Tag Name
                            LDKF.documentPrototypeGetElementsByTagName = function documentPrototypeGetElementsByTagName(that, arg) { return LDKOd.documentPrototypeGetElementsByTagName.value.call(that, arg) };

                            // Query Selector
                            LDKF.documentPrototypeQuerySelector = function documentPrototypeQuerySelector(that, arg) { return LDKOd.documentPrototypeQuerySelector.value.call(that, arg) };

                            // Query Selector All
                            LDKF.documentPrototypeQuerySelectorAll = function documentPrototypeQuerySelectorAll(that, arg) { return LDKOd.documentPrototypeQuerySelectorAll.value.call(that, arg) };

                    // Error
                        // Prototype
                            // Set Message
                            LDKF.errorPrototypeSetMessage = function errorPrototypeSetMessage(error, message) {
                                // Modification > Error > (Description, Message)
                                error.description = message;
                                error.message = message;

                                // Return
                                return message
                            }

                    // Floor
                    LDKF.floor = function floor(arg) { return LDKF.isInteger(LDKF.isNumber(arg) ? arg : arg = LDKF.number(arg)) ? arg : LDKF.int(arg) };

                    // Has Class Name --- CHECKPOINT ---

                    // Has Class List
                    LDKF.hasClassList = function hasClassList(element, classLists) {
                        // Initialization > (Iterator, Length)
                        var iterator = arguments.length - 1, length = iterator + 1;

                        /* Loop
                                Index Arguments.
                        */
                        while (iterator) {
                            // Initialization > Class Name
                            var className = arguments[length - (iterator -= 1) - 1];

                            /* Logic
                                    [if:else statement]
                            */
                            if (LDKF.isArrayObject(className)) {
                                // Initialization > Class List (Iterator, Length)
                                var classListIterator = className.length,
                                    classListLength = classListIterator;

                                /* Loop
                                        Index Class Name.
                                */
                                while (classListIterator) {
                                    // Initialization > Class List Item
                                    var classListItem = className[classListLength - (classListIterator -= 1) - 1];

                                    // Logic
                                    if (LDKF.isArrayObject(classListItem)) {
                                        // Logic > Return
                                        if (!LDKF.hasClassList(element, classListItem)) return !1
                                    }

                                    else if (!LDKF.hasClassName(element, classListItem))
                                        // Return
                                        return !1
                                }
                            }

                            else if (!LDKF.hasClassName(element, className))
                                // Return
                                return !1
                        }

                        // Return
                        return !0
                    };

                    // Has Event --- CHECKPOINT ---

                    // Integer
                    LDKF.int = function int(arg, strict) {
                        // Update > Argument
                        LDKF.isNumber(arg) || (arg = LDKF.number(arg));

                        // Return
                        return strict ? LDKF.number(LDKFg.numberPrototypeCharacteristics(arg)) : arg - arg % 1
                    };

                    // Is Array
                    LDKF.isArray = function isArray(arg) {
                        // Initialization > Result
                        var result = !1;

                        // Function > Test
                        function test() { return LDKF.isConstructible(arg) && typeof arg == 'object' && LDKF.objectPrototypeGetConstructor(arg) === LDKO.array }

                        // Error Handling > Update > Result
                        try { LDKF.isNull(arg.__proto__.__proto__.__proto__) && (result = test())
                        } catch (error) { result = test() }

                        // Return
                        return result
                    };

                    // Is Array-Like
                    LDKF.isArrayLike = function isArrayLike(arg) { return LDKF.isArray(arg) || LDKF.isStrictlyArrayLike(arg) };

                    // Is Array Object
                    LDKF.isArrayObject = function isArrayObject(arg) { return LDKF.isArray(arg) || LDKF.isStrictlyArrayObject(arg) };

                    // Is Constructible
                    LDKF.isConstructible = function isConstructible(arg) { return !LDKF.isNonConstructible(arg) };

                    // Is Error-Like
                    LDKF.isErrorLike = function isErrorLike(arg) {
                        // Initialization > Constructor
                        var constructor = LDKF.objectPrototypeGetConstructor(arg);

                        // Return
                        return constructor === LDKO.domError || constructor === LDKO.domException ||
                            constructor === LDKO.error || constructor === LDKO.evalError ||
                            constructor === LDKO.lapysJSError ||
                            constructor === LDKO.mediaError ||
                            constructor === LDKO.overconstrainedError ||
                            constructor === LDKO.rangeError || constructor === LDKO.referenceError ||
                            constructor === LDKO.syntaxError ||
                            constructor === LDKO.typeError ||
                            constructor === LDKO.uriError ||
                            LDKF.arrayPrototypeIncludes(LDKF.objectPrototypeGet__Proto__Tree(arg), LDKO.error)
                    };

                    // Is Even Number
                    LDKF.isEvenNumber = function isEvenNumber(arg) { return LDKF.isInteger(arg) && !(arg % 2) };

                    // Is Finite
                    LDKF.isFinite = function isFinite(arg) {
                        // Logic
                        if (LDKF.isNumber(arg)) {
                            // Initialization > ((Negative, Positive) Infinity (String), String)
                            var negativeInfinity = -LDKO.infinity, negativeInfinityString = LDKF.string(negativeInfinity),
                                positiveInfinity = -negativeInfinity, positiveInfinityString = LDKF.string(positiveInfinity),
                                string = LDKF.string(arg);

                            // Logic > Return
                            if (LDKF.isNaN(arg)) return null;
                            else if (string == positiveInfinityString || string == negativeInfinityString) return !1;

                            // Return
                            return !0
                        }

                        // Return
                        return null
                    };

                    // Is Function
                    LDKF.isFunction = function isFunction(arg) {
                        // Return
                        return typeof arg == "function" || (function() {
                            // Logic > Return
                            if (
                                LDKF.objectPrototypeHasProperty(GLOBAL_MAIN, "ActiveXObject") && LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ActiveXObject") &&
                                (function(arg) { return LDKF.isNativeFunction(arg) && LDKFg.functionPrototypeName(arg) == "ActiveXObject" })(LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "ActiveXObject"))
                            ) return typeof arg == "object" && (function(source) {
                                // Logic
                                if (LDKF.isVoid(source))
                                    // Return --- NOTE (Lapys) -> No idea why Internet Explorer 8 still throws an error here in it's developer console.
                                    return !0;

                                else {
                                    // Initialization > Match (Length)
                                    var match = "function", matchLength = match.length;

                                    // Loop --- NOTE (Lapys) -> Trim the 'source code'.
                                    while (source && (source[0] == ' ' || source[0] == '\n')) {
                                        // Initialization > (Iterator, Length, Stream)
                                        var iterator = source.length - 1, length = iterator + 1,
                                            stream = "";

                                        // Loop > Update > Stream
                                        while (iterator) stream += source[length - (iterator -= 1) - 1];

                                        // Update > Source
                                        source = stream
                                    }

                                    // Initialization > (Iterator, Length)
                                    var iterator = source.length, length = iterator;

                                    // Loop
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Logic > Return
                                        if (index == matchLength) return !0;

                                        // Logic > Return
                                        if (source[index] != match[index]) return !1;
                                        else if (!iterator) return !0
                                    }
                                }
                            })(arg + "");

                            // Return
                            return !1
                        })()
                    };

                    // Is Infinite
                    LDKF.isInfinite = function isInfinite(arg) { return !LDKF.isFinite(arg) };

                    // Is Integer
                    LDKF.isInteger = function isInteger(arg) { return arg == LDKF.int(arg) };

                    // Is Native Function
                    LDKF.isNativeFunction = function isNativeFunction(arg) {
                        // Logic
                        if (LDKF.isFunction(arg)) {
                            // Initialization > (Allow Stream, Matches (Length), Source, Iterator, Length, Stream-Lock Character)
                            var allowStream = !0,
                                matches = ["[Command Line API]", "[native code]"], // NOTE (Lapys) -> The matches determine if the Argument is a native function.
                                matchesLength = matches.length,
                                source = LDKFg.functionPrototypeSourceCode(arg),
                                iterator = source.length, length = iterator,
                                streamLockCharacter = null;

                            // Logic > Return
                            if (!source) return !0;

                            /* Loop
                                    Iterate through Source.
                            */
                            while (iterator) {
                                // Initialization > (Index, Character)
                                var index = length - (iterator -= 1) - 1, character = source[index];

                                if (allowStream) {
                                    // Logic
                                    if (character == '/' && source[index + 1] == '*') {
                                        // Update > Allow Stream
                                        allowStream = !1;

                                        // [Continue]
                                        continue
                                    }

                                    // Logic
                                    if (character == '"' || character == '\'') {
                                        // Update > (Allow Stream, Stream-Lock Character)
                                        allowStream = !1;
                                        streamLockCharacter = character;

                                        // [Continue]
                                        continue
                                    }

                                    // Initialization > Matches Iterator
                                    var matchesIterator = matchesLength;

                                    /* Loop
                                            Index Matches.
                                    */
                                    while (matchesIterator) {
                                        // Initialization > (Match) (Iterator, Length)
                                        var match = matches[matchesIterator -= 1],
                                            matchIterator = match.length, matchLength = matchIterator;

                                        /* Loop
                                                Iterate through Match.
                                        */
                                        while (matchIterator) {
                                            // Initialization > Match (Index, Character)
                                            var matchIndex = matchLength - (matchIterator -= 1) - 1,
                                                matchCharacter = match[matchIndex];

                                            // Logic > (...)
                                            if (matchCharacter != source[index + matchIndex]) break;
                                            else if (!matchIterator) return !0
                                        }
                                    }
                                }

                                else if (character == '*' && source[index + 1] == '/') {
                                    // Update > Allow Stream
                                    allowStream = !0;

                                    // [Continue]
                                    continue
                                }

                                else if (character == streamLockCharacter) {
                                    // Update > (Allow Stream, Stream-Lock Character)
                                    allowStream = !0;
                                    streamLockCharacter = null;

                                    // [Continue]
                                    continue
                                }
                            }
                        }

                        // Return
                        return !1
                    };

                    // Is Not-a-Number
                    LDKF.isNaN = function isNaN(arg) { return LDKF.isNumber(arg) && LDKF.string(arg) == "NaN" };

                    // Is Negative Infinity
                    LDKF.isNegativeInfinity = function isNegativeInfinity(arg) { return LDKF.isNegativeNumber(arg) && LDKF.isInfinite(arg) };

                    // Is Negative Integer
                    LDKF.isNegativeInteger = function isNegativeInteger(arg) { return LDKF.isNegativeNumber(arg) && LDKF.isInteger(arg) };

                    // Is Negative Number
                    LDKF.isNegativeNumber = function isNegativeNumber(arg) { return LDKF.isNumber(arg) && (arg < 0 || LDKF.isNegativeZero(arg)) };

                    // Is Negative Zero
                    LDKF.isNegativeZero = function isNegativeZero(arg) { return LDKF.objectIs(arg, -0) };

                    // Is Non-Constructible
                    LDKF.isNonConstructible = function isNonConstructible(arg)  { return LDKF.isNull(arg) || LDKF.isVoid(arg) };

                    // Is Non-Integer
                    LDKF.isNonInteger = function isNonInteger(arg)  { return !LDKF.isInteger(arg) };

                    // Is Null
                    LDKF.isNull = function isNull(arg) { return (!arg && arg === null && typeof arg == "object") };

                    // Is Number
                    LDKF.isNumber = function isNumber(arg) { return LDKF.isConstructible(arg) && typeof arg == "number" };

                    // Is Odd Number
                    LDKF.isOddNumber = function isOddNumber(arg) { return LDKF.isInteger(arg) && arg % 2 };

                    // Is Positive Infinity
                    LDKF.isPositiveInfinity = function isPositiveInfinity(arg) { return LDKF.isPositiveNumber(arg) && LDKF.isInfinite(arg) };

                    // Is Positive Integer
                    LDKF.isPositiveInteger = function isPositiveInteger(arg) { return LDKF.isPositiveNumber(arg) && LDKF.isInteger(arg) };

                    // Is Positive Number
                    LDKF.isPositiveNumber = function isPositiveNumber(arg) { return LDKF.isNumber(arg) && (arg > 0 || LDKF.isPositiveZero(arg)) };

                    // Is Positive Zero
                    LDKF.isPositiveZero = function isPositiveZero(arg) { return LDKF.objectIs(arg, 0) };

                    // Is Safe Integer
                    LDKF.isSafeInteger = function isSafeInteger(arg) { return LDKF.isInteger(arg) && LDKF.isSafeNumber(arg) };

                    // Is Safe Number
                    LDKF.isSafeNumber = function isSafeNumber(arg) { return LDKF.isFinite(arg) && !LDKF.isNaN(arg) && arg >= -LDKO.numberMaxSafeInteger && arg <= LDKO.numberMaxSafeInteger };

                    // Is Strictly Array-Like --- CHECKPOINT ---

                    // Is Strictly Array Object
                    LDKF.isStrictlyArrayObject = function isStrictlyArrayObject(arg) {
                        // Initialization > Constructor
                        var constructor = LDKF.objectPrototypeGetConstructor(arg);

                        // Return
                        return LDKF.string(arg) == "[object Arguments]" || (
                            LDKF.isConstructible(arg) &&
                            (constructor === LDKO.array || constructor === LDKOc.lapysJSNodeList)
                        )
                    };

                    // Is String
                    LDKF.isString = function isString(arg) { return typeof arg == "string" };

                    LDKF.isRegex = function isRegex(arg) { return typeof arg == "object" && LDKF.objectPrototypeGetConstructor(arg) === LDKO.regex };

                    // Is Symbol
                    LDKF.isSymbol = function isSymbol(arg) { return typeof arg == "symbol" };

                    // Is Void
                    LDKF.isVoid = function isVoid(arg) { return typeof arg == "undefined" };

                    /* Iterate Object
                            --- NOTE ---
                                #Lapys: Perform a deep search through an object and it's prototype.
                                    - Returns current indexed object.
                                    - Returns property descriptions.
                    */
                    LDKF.iterateObject = function iterateObject(object, iteration, condition, isStrict) {
                        // Logic
                        if (arguments.length && LDKF.isConstructible(object) && LDKF.isFunction(iteration)) {
                            // Update > (Condition, Is Strict)
                            (arguments.length > 2) || (condition = function condition() { return !0 });
                            isStrict = !!isStrict;

                            // Initialization
                                // (Descriptions, Iterated Objects, Keys, State, Values)
                                var descriptions = [], iteratedObjects = [], keys = [], state = !0, values = [],

                                // Iteration Tree --- NOTE (Lapys) -> Set of objects to iterate through.
                                iterationTree = LDKF.arrayPrototypeAddToBack(LDKF.objectPrototypeGet__Proto__Tree(object), object),
                                iterationTreeIterator = iterationTree.length, iterationTreeLength = iterationTreeIterator;

                            // Function > Update Sequence
                            function updateSequence(key, value, description, iteratedObject) {
                                // Initialization > (Iterator, Length)
                                var iterator = keys.length, length = iterator;

                                // Loop > Logic > Return
                                while (iterator)
                                    if (keys[iterator -= 1] == key) return;

                                // Logic
                                if (!iterator && value !== hidden) {
                                    // Update > (Descriptions, Iterated Objects, Keys, Values)
                                    descriptions[length] = description || null;
                                    iteratedObjects[length] = iteratedObject;
                                    keys[length] = key;
                                    values[length] = value
                                }
                            }

                            /* Loop
                                    Index Iteration Tree.
                            */
                            while (iterationTreeIterator) {
                                // Initialization
                                    // Iteration Tree Object
                                    var iterationTreeObject = iterationTree[iterationTreeLength - (iterationTreeIterator -= 1) - 1],

                                    // (Object Descriptors (Keys)) (Iterator, Length)
                                    objectDescriptors = (function() { try { return LDKF.objectGetOwnPropertyDescriptors(iterationTreeObject) } catch (error) {} return LDKF.objectGetOwnPropertyDescriptors(LDKF.object(iterationTreeObject)) })(),
                                    objectDescriptorsKeys = (function() { try { return LDKF.objectKeys(objectDescriptors) } catch (error) {} return LDKF.objectKeys(LDKF.object(objectDescriptors)) })(),
                                    objectDescriptorsKeysIterator = objectDescriptorsKeys.length, objectDescriptorsKeysLength = objectDescriptorsKeysIterator,

                                    // (Object Keys) (Iterator, Length)
                                    objectKeys = (function() { try { return LDKF.objectKeys(iterationTreeObject) } catch (error) {} return LDKF.objectKeys(LDKF.object(iterationTreeObject)) })(),
                                    objectKeysIterator = iterationTreeObject.length, objectKeysLength = objectKeysIterator;

                                // Loop
                                for (var key in iterationTreeObject) {
                                    // Initialization > Value
                                    var value;

                                    // Error Handling > Update > Value
                                    try { value = iterationTreeObject[key] } catch (error) { value = hidden }

                                    // Update Sequence
                                    updateSequence(key, value, LDKF.objectGetOwnPropertyDescriptor(iterationTreeObject, key), iterationTreeObject)
                                }

                                /* Loop
                                        Index Object Descriptors Keys.
                                */
                                while (objectDescriptorsKeysIterator) {
                                    // Initialization > (Descriptor, Keys, Value)
                                    var descriptor = objectDescriptors[key],
                                        key = objectDescriptorsKeys[objectDescriptorsKeysLength - (objectDescriptorsKeysIterator -= 1) - 1],
                                        value = (function(descriptor) {
                                            // Logic
                                            if (descriptor)
                                                // Logic
                                                if (LDKF.objectPrototypeHasProperty(descriptor, "get")) {
                                                    // Initialization > Value
                                                    var value;

                                                    // Error Handling > Update > Value
                                                    try { value = descriptor.get.call(iterationTreeObject) }
                                                    catch (error) { value = error }

                                                    // Return
                                                    return value
                                                }

                                                else
                                                    // Return
                                                    return descriptor.value;

                                            // Error Handling > Return
                                            try { return iterationTreeObject[key] } catch (error) {}

                                            // Return
                                            return hidden
                                        })(descriptor);

                                    // Update Sequence
                                    updateSequence(key, value, descriptor, iterationTreeObject)
                                }

                                /* Loop
                                        Index Object Keys.
                                */
                                while (objectKeysIterator) {
                                    // Initialization > (Key, Value)
                                    var key = objectKeys[objectKeysLength - (objectKeysIterator -= 1) - 1], value;

                                    // Error Handling > Update > Value
                                    try { value = iterationTreeObject[key] } catch (error) { value = hidden }

                                    // Update Sequence
                                    updateSequence(key, value, LDKF.objectGetOwnPropertyDescriptor(iterationTreeObject, key), iterationTreeObject)
                                }
                            }

                            // Initialization > (Iterator, Length)
                            var iterator = (keys || values).length, length = iterator;

                            // Loop
                            while (iterator && state) {
                                // Initialization > (Index, Key, Value, Arguments, Target, Iteration State)
                                var index = length - (iterator -= 1) - 1,
                                    descriptor = descriptions[index], iteratedObject = iteratedObjects[index], key = keys[index], value = values[index],
                                    args = [key, value, descriptor, iteratedObject], that = object,
                                    iterationState;

                                // Logic
                                if (iterationState = condition.apply(that, args)) {
                                    // Update > State
                                    isStrict && (state = iterationState);

                                    // Iteration
                                    (iterationState && state) && iteration.apply(that, args)
                                }
                            }
                        }
                    };

                    // Number
                    LDKF.number = function number(arg) {
                        // Logic > (...)
                        if (!arguments.length) return 0;
                        else if (LDKF.isNumber(arg)) return arg;
                        else
                            // Logic > (...)
                            if (LDKF.isSymbol(arg)) return LDKF.number(LDKF.string(arg));
                            else {
                                // Error Handling > (...)
                                try { return arg - 0 }
                                catch (error) { try { return LDKO.number(arg) } catch (error) {} }

                                // Return
                                return LDKF.number(LDKF.string(arg))
                            }
                    };

                    // Object
                    LDKF.object = function object(arg) { return LDKO.object(arg) };
                        // Prototype
                            // Get (Constructor > Prototype)
                            LDKF.objectPrototypeGet__Proto__ = function objectPrototypeGet__Proto__(object) {
                                // Logic > Error Handling > Return
                                if (LDKF.isConstructible(object))
                                    try { return object.__proto__ }
                                    catch (error) {}

                                // Return
                                return null
                            };

                            // Get (Constructor > Prototype) Tree
                            LDKF.objectPrototypeGet__Proto__Tree = function objectPrototypeGet__Proto__Tree(object) {
                                // Initialization > (Index, Prototype(s))
                                var index = -1, prototype, prototypes = [];

                                // Loop > Update > Prototypes
                                while (prototype = LDKF.objectPrototypeGet__Proto__(object))
                                    prototypes[index += 1] = (object = prototype);

                                // Return
                                return prototypes
                            };

                    // Object Create
                    LDKF.objectCreate = function objectCreate() { return LDKO.objectCreate.apply(this, arguments) };

                    // Object Define Property
                    LDKF.objectDefineProperty = function objectDefineProperty() { return LDKO.objectDefineProperty.apply(this, arguments) };

                    // Object Get Own Property Descriptor
                    LDKF.objectGetOwnPropertyDescriptor = function objectGetOwnPropertyDescriptor(object, key) {
                        try { return LDKO.objectGetOwnPropertyDescriptor.apply(this, arguments) }
                        catch (error) {}

                        // Error Handling
                        try {
                            // Initialization > Defaults
                            var defaults = {
                                // Configurable, Enumerable
                                configurable: !0, enumerable: !0,

                                // Get, Set
                                get: undefined, set: undefined,

                                // Value
                                value: undefined,

                                // Writable
                                writable: !0
                            };

                            // Loop > Logic > Return
                            for (var propertyKey in objects)
                                if (key == propertyKey) return {configurable: defaults.configurable, enumerable: !0, value: (function() { try { return object[key] } catch (error) {} return defaults.value })(), writable: defaults.writable};

                            // Return
                            return {configurable: defaults.configurable, enumerable: defaults.enumerable, value: (function() { try { return object[key] } catch (error) {} return defaults.value })(), writable: defaults.writable}
                        } catch (error) {}

                        // Return
                        return null
                    };

                    // Object Get Own Property Descriptors
                    LDKF.objectGetOwnPropertyDescriptors = function objectGetOwnPropertyDescriptors() { return LDKO.objectGetOwnPropertyDescriptors.apply(this, arguments) };

                    // Object Is
                    LDKF.objectIs = function objectIs(argA, argB) { return argA === argB ? 0 !== argA || 1 / argA == 1 / argB: argA !== argA && argB !==argB };

                    // Object Keys
                    LDKF.objectKeys = function objectKeys() { return LDKO.objectKeys.apply(this, arguments) };

                    // Percentage
                    LDKF.perc = function perc(number, base) {
                        // Logic
                        if (arguments.length == 1) {
                            // Update > (Base, Number)
                            base = number;
                            number = 1
                        }

                        // Return
                        return number * (base / 100)
                    };

                    // Power
                    LDKF.pow = function pow(base, exponent) {
                        // Initialization > Power
                        var power = null;

                        // Initialization > (Exponents, Iterator, Length)
                        var exponents = LapysJS.tmp.cache.exponents,
                            iterator = exponents.length, length = iterator;

                        // Loop
                        while (iterator) {
                            // Initialization > Exponent
                            var $exponent = exponents[iterator -= 1];

                            // Logic > Return
                            if (LDKF.objectIs($exponent.base, base) && LDKF.objectIs($exponent.exponent, exponent))
                                return $exponent.power
                        }

                        // Initialization > (Base, Exponent) Properties
                        var baseProperties = {
                            // Absolute
                            abs: LDKF.abs(base),

                            // Is Finite
                            isFinite: LDKF.isFinite(base),

                            // Is Not a Number
                            isNaN: LDKF.isNaN(base),

                            // Is Negative Infinity
                            isNegativeInfinity: LDKF.isNegativeInfinity(base),

                            // Is Negative Number
                            isNegativeNumber: LDKF.isNegativeNumber(base),

                            // Is Negative Zero
                            isNegativeZero: LDKF.isNegativeZero(base),

                            // Is Positive Infinity
                            isPositiveInfinity: LDKF.isPositiveInfinity(base),

                            // Is Positive Zero
                            isPositiveZero: LDKF.isPositiveZero(base)
                        }, exponentProperties = {
                            // Is Even Number
                            isEvenNumber: LDKF.isEvenNumber(exponent),

                            // Is Finite
                            isFinite: LDKF.isFinite(exponent),

                            // Is Infinite
                            isInfinite: LDKF.isInfinite(exponent),

                            // Is Not a Number
                            isNaN: LDKF.isNaN(exponent),

                            // Is Negative Infinity
                            isNegativeInfinity: LDKF.isNegativeInfinity(exponent),

                            // Is Negative Integer
                            isNegativeInteger: LDKF.isNegativeInteger(exponent),

                            // Is Negative Number
                            isNegativeNumber: LDKF.isNegativeNumber(exponent),

                            // Is Non-Integer
                            isNonInteger: LDKF.isNonInteger(exponent),

                            // Is Odd Number
                            isOddNumber: LDKF.isOddNumber(exponent),

                            // Is Positive Infinity
                            isPositiveInfinity: LDKF.isPositiveInfinity(exponent),

                            // Is Positive Number
                            isPositiveNumber: LDKF.isPositiveNumber(exponent)
                        };

                        // Function > Power
                            // Integer
                            function pow_integer(base, exponent) {
                                // Initialization > Multiplier
                                var multiplier = base;

                                // Update > Base
                                base = 1;

                                // Loop > Update > (Base, Exponent)
                                while (exponent) {
                                    base *= multiplier;
                                    exponent -= 1
                                }

                                // Return
                                return base
                            }

                            // Inverted
                            function pow_inverted(base, exponent) {
                                // Return
                                return 1 / pow(base, LDKF.abs(exponent))
                            }

                            /* Rational
                                    --- NOTE ---
                                        #Lapys: Features Newton's theorem.

                                    --- UPDATE REQUIRED ---
                                        #Lapys: Should return only safe values despite the 53-bit ECMAScript number limit.
                            */
                            function pow_rational(base, exponent, strict) {
                                /* Initialization > (Denominator, Numerator, Limit, Previous (Denominator, Exponent))
                                        --- NOTE ---
                                            #Lapys: Denominator and numerator of the exponent.
                                */
                                var denominator = 1, numerator,
                                    limit = LDKO.numberMaxSafeInteger,
                                    previousDenominator, previousExponent;

                                /* Loop
                                        [while statement]

                                        --- NOTE ---
                                            #Lapys: Convert exponent to rational.

                                    > Update > (Previous) (Denominator, Exponent)
                                */
                                while (
                                    denominator < limit && exponent < limit &&
                                    LDKF.isNonInteger(exponent)
                                ) {
                                    previousDenominator = denominator;
                                    previousExponent = exponent;
                                    denominator *= 10;
                                    exponent *= 10
                                }

                                /* Logic
                                        [if:else statement]

                                        --- NOTE ---
                                            #Lapys: Prevent infinitely recurring decimals (such as `1 / 3`) from
                                                overflowing the result or synchronously bottle-necking the computation.
                                */
                                if (
                                    (denominator < limit && LDKF.isSafeNumber(denominator)) &&
                                    (exponent < limit && LDKF.isSafeNumber(exponent))
                                ) {
                                    /* Update > Numerator
                                            --- NOTE ---
                                                #Lapys: Base ^ Exponent = Base ^ (Numerator / Denominator)
                                    */
                                    numerator = exponent;

                                    // Initialization > (...)
                                    var t_x = numerator,
                                        t_y = denominator,
                                        temp;

                                    /* Loop
                                            [while statement]

                                        > Update > (...)
                                    */
                                    while (t_y) {
                                        temp = t_x % t_y;
                                        t_x = t_y;
                                        t_y = temp
                                    }

                                    /* Update > (Denominator, Numerator)
                                            --- NOTE ---
                                                #Lapys: Simplifying the Numerator ÷ Denominator expression to its lowest terms.
                                    */
                                    denominator /= t_x;
                                    numerator /= t_x;

                                    /* Initialization > (Previous Power, Base Raised by Numerator, Previous Power Raised by Denominator)
                                            --- NOTE ---
                                                #Lapys:
                                                    - Exponent = Base ^ (Numerator / Denominator)

                                                    - Rising both sides to the Denominator`s power.
                                                        -- Base ^ Numerator = Exponent ^ Denominator

                                                    - Passing all terms to one side of the equation.
                                                        -- (Base ^ Numerator) - (Exponent ^ Denominator) = 0

                                                    - Finding the root with Newton`s Method.
                                    */
                                    var previousPower = 1,
                                        baseRaisedByNumerator = base,
                                        previousPowerRaisedByDenominator;

                                    /* Loop
                                            [for statement]

                                        > Update > Base Raised by Numerator
                                    */
                                    for (var iterator = 1; iterator < numerator; iterator += 1)
                                        baseRaisedByNumerator *= base;

                                    /* Loop
                                            [while statement]

                                            --- NOTE ---
                                                #Lapys: The level of strictness determines how `precision` of the result.
                                    */
                                    while (strict > .001) {
                                        // Update > Previous Power Raised by Denominator
                                        previousPowerRaisedByDenominator = previousPower;

                                        /* Loop
                                                [for statement]

                                            > Update > Previous Power Raised by Denominator
                                        */
                                        for (var iterator = 1; iterator < denominator; iterator += 1)
                                            previousPowerRaisedByDenominator *= previousPower;

                                        // Update > Power
                                        power = previousPower - (previousPowerRaisedByDenominator - baseRaisedByNumerator) / (denominator * (previousPowerRaisedByDenominator / previousPower));

                                        /* Update > Strict
                                                --- NOTE ---
                                                    #Lapys: Newton`s Method iterations.
                                        */
                                        strict = ((power - previousPower) / previousPower) * 100;

                                        // Update > (Strict, Previous Power)
                                        (strict < 0) && (strict = -strict);
                                        previousPower = power
                                    }
                                }

                                else
                                    // Error Handling
                                    try {
                                        // Function
                                            // Power {Irrational}
                                            function pow_irrational(base, exponent) {
                                                // Logic > Return
                                                if (!base) return 0;
                                                else if (!exponent) return 1;
                                                else if (LDKF.isNegativeNumber(exponent)) return 1 / pow_irrational(base, exponent);
                                                else if (exponent > 0 && exponent < 1) return root(base, 1 / exponent);
                                                else if (!(LDKF.int(exponent) % 2))  return LDKF.pow_irrational(pow_irrational(base, exponent / 2), 2);
                                                else return base * pow_irrational(base, exponent - 1)
                                            }

                                            // Root
                                            function root(base, exponent) {
                                                // Initialization > (Constant, Iterator, Matrix)
                                                var constant = 6, iterator = 0,
                                                    matrix = [1, 1, 1, 1, 1, 1];

                                                // Loop > Update > Matrix
                                                for (iterator; iterator < constant - 1; iterator += 1)
                                                    matrix[iterator + 1] = (1 / exponent) * ((exponent - 1) * matrix[iterator] + base / pow_irrational(matrix[iterator], exponent - 1));

                                                // Return
                                                return power = matrix[constant - 1]
                                            }

                                        // Return
                                        return pow_irrational(base, exponent)
                                    } catch (error) { power = null }

                                // Return
                                return power
                            }

                        // Logic --- NOTE (Lapys) -> By-pass error handling with exponentiation if the condition is `false`.
                        if (LDKO.numberMaxSafeInteger)
                            // Logic
                            if (
                                (baseProperties.isPositiveZero && exponentProperties.isNegativeInteger && exponentProperties.isOddNumber) ||
                                (!base && exponentProperties.isFinite && exponentProperties.isNegativeNumber && (exponentProperties.isEvenNumber || exponentProperties.isNonInteger)) ||
                                (!base && exponentProperties.isNegativeInfinity)
                            ) {
                                // Warn
                                LDKF.throwWarning('Pole error in floating-point operation');

                                // Return
                                return LDKO.infinity
                            }

                            else if (baseProperties.isNegativeZero && exponentProperties.isNegativeInteger && exponentProperties.isOddNumber) {
                                // Warn
                                LDKF.throwWarning('Pole error in floating-point operation');

                                // Return
                                return -LDKO.infinity
                            }

                            else if (!base && exponentProperties.isOddNumber && exponent.isPositiveNumber)
                                // Return
                                return LDKF.isNegativeZero(base) ? -0 : 0;

                            else if (
                                (!base && ((exponentProperties.isNonInteger && exponentProperties.isPositiveNumber) || (exponentProperties.isEvenNumber && exponentProperties.isPositiveNumber))) ||
                                (baseProperties.abs > 1 && exponentProperties.isNegativeInfinity) ||
                                (baseProperties.abs < 1 && exponentProperties.isPositiveInfinity) ||
                                (baseProperties.isNegativeInfinity && (exponentProperties.isNegativeNumber || exponentProperties.isEvenNumber)) ||
                                (baseProperties.isPositiveInfinity && exponentProperties.isNegativeNumber)
                            )
                                // Return
                                return 0;

                            else if (baseProperties.isNegativeInfinity && exponentProperties.isNegativeNumber && exponentProperties.isOddNumber)
                                // Return
                                return -0;

                            else if (base == 1 || !exponent || (base == -1 && exponentProperties.isInfinite))
                                // Return
                                return 1;

                            else if (baseProperties.isFinite && baseProperties.isNegativeNumber && exponentProperties.isFinite && exponentProperties.isNonInteger) {
                                // Warn
                                LDKF.throwWarning('Domain error in floating-point operation');

                                // Return
                                return LDKO.nan
                            }

                            else if (
                                (baseProperties.abs < 1 && exponentProperties.isNegativeInfinity) ||
                                (baseProperties.abs > 1 && exponentProperties.isPositiveInfinity) ||
                                (baseProperties.isNegativeInfinity && (exponentProperties.isEvenNumber || exponentProperties.isPositiveNumber)) ||
                                (baseProperties.isPositiveInfinity && exponentProperties.isPositiveNumber)
                            )
                                // Return
                                return LDKO.infinity;

                            else if (baseProperties.isNegativeInfinity && exponentProperties.isOddNumber && exponentProperties.isPositiveNumber)
                                // Return
                                return -LDKO.infinity;

                            else if (baseProperties.isNaN || exponentProperties.isNaN)
                                // Return
                                return LDKO.nan;

                        // Logic > Update > Power
                        if (LDKF.isNegativeNumber(exponent)) power = pow_inverted(base, exponent);
                        else if (LDKF.isInteger(exponent)) power = pow_integer(base, exponent);
                        else {
                            power = pow_rational(base, exponent, 1);
                            LDKF.isSafeNumber(power) || (power = null)
                        }

                        // Update > Exponents
                        LDKF.isNull(power) || (exponents[length] = {base: base, exponent: exponent, power: power});

                        // Return
                        return power
                    };

                    // Pseudo Number
                        // Prototype
                            // Add
                            LDKF.pseudoNumberPrototypeAdd = function pseudoNumberPrototypeAdd() {
                                // Initialization > ((Pseudo Number), (A, B) (String))
                                var pseudoNumber = new LDKOc.pseudoNumber,
                                    pseudoNumberA = arguments[0].clone(),
                                    pseudoNumberAString = pseudoNumberA.toString(),
                                    pseudoNumberB = arguments[1].clone(),
                                    pseudoNumberBString = pseudoNumberB.toString();

                                // Logic
                                if (pseudoNumberBString.length > pseudoNumberAString.length) {
                                    // Initialization > Temporary Data
                                    var tmp = pseudoNumberA;

                                    // Update > Pseudo Number (A, B) String
                                    pseudoNumberAString = (pseudoNumberA = pseudoNumberB).toString();
                                    pseudoNumberBString = (pseudoNumberB = tmp).toString()
                                }

                                /* Loop
                                        Iterate through Pseudo Number (A | B) String.

                                        --- NOTE ---
                                            #Lapys: Parse the pseudo number strings for calculations.
                                */
                                while (pseudoNumberAString.length != pseudoNumberBString.length) {
                                    // Loop
                                    while (pseudoNumberA.characteristics.length != pseudoNumberB.characteristics.length) {
                                        // Modification > Pseudo Number B > Characteristics
                                        pseudoNumberB.characteristics = '0' + pseudoNumberB.characteristics;

                                        // Update > Pseudo Number B String
                                        pseudoNumberBString = pseudoNumberB.toString()
                                    }

                                    // Loop
                                    while (
                                        pseudoNumberA.characteristics.length == pseudoNumberB.characteristics.length &&
                                        pseudoNumberA.mantissa.length != pseudoNumberB.mantissa.length
                                    ) {
                                        // Modification > Pseudo Number B > Mantissa
                                        pseudoNumberB.mantissa += '0';

                                        // Update > Pseudo Number B String
                                        pseudoNumberBString = pseudoNumberB.toString()
                                    }
                                }

                                // Initialization > (Carried Value, (In) Characteristics, Mantissa, Pseudo Number (A, B) String Iterator)
                                var carriedValue = 0,
                                    characteristics = "", mantissa = "",
                                    inCharacteristics = !1,
                                    pseudoNumberAStringIterator = pseudoNumberAString.length,
                                    pseudoNumberBStringIterator = pseudoNumberBString.length, pseudoNumberBStringLength = pseudoNumberBStringIterator;

                                /* Loop
                                        Iterate through Pseudo Number A String.
                                */
                                while (pseudoNumberAStringIterator) {
                                    // Initialization > (Keep Carried Value, Pseudo Number (A, B) Digit)
                                    var keepCarriedValue = !1,
                                        pseudoNumberADigit = pseudoNumberAString[pseudoNumberAStringIterator -= 1],
                                        pseudoNumberBDigit = pseudoNumberBString[pseudoNumberBStringIterator -= 1];

                                    // Initialization > Pseudo Number Digit
                                    var pseudoNumberDigit = LDKF.string(carriedValue + LDKF.number(pseudoNumberADigit) + LDKF.number(pseudoNumberBDigit));

                                    /* Logic
                                            [if statement]
                                    */
                                    if (pseudoNumberDigit > 9) {
                                        // Update > (Keep) Carried Value
                                        carriedValue = LDKF.number(LDKF.stringPrototypeRange(pseudoNumberDigit, 0, -1));
                                        keepCarriedValue = !0
                                    }

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (inCharacteristics)
                                        // Update > Characteristics
                                        characteristics = pseudoNumberDigit[pseudoNumberDigit.length - 1] + characteristics;

                                    else {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (pseudoNumberADigit == '.' || pseudoNumberBDigit == '.') {
                                            // Update > (Keep Carried Value, In Characteristics)
                                            keepCarriedValue = !0;
                                            inCharacteristics = !0
                                        }

                                        else
                                            // Update > Mantissa
                                            mantissa = pseudoNumberDigit[pseudoNumberDigit.length - 1] + mantissa
                                    }

                                    // Logic
                                    if (!pseudoNumberAStringIterator || !pseudoNumberBStringIterator) {
                                        // Update > Characteristics
                                        characteristics = carriedValue + characteristics;

                                        // [Break]
                                        break
                                    }

                                    // Update > Carried Value
                                    keepCarriedValue || (carriedValue = 0)
                                }

                                // Return
                                return characteristics + '.' + mantissa
                            };

                            // Divide --- CHECKPOINT ---
                            LDKF.pseudoNumberPrototypeDivide = function pseudoNumberPrototypeDivide() {};

                            // Multiply --- CHECKPOINT ---
                            LDKF.pseudoNumberPrototypeMultiply = function pseudoNumberPrototypeMultiply() {};

                            // Subtract --- CHECKPOINT ---
                            LDKF.pseudoNumberPrototypeSubtract = function pseudoNumberPrototypeSubtract() {};

                    /* Recur Object
                            --- CHECKPOINT ---
                            --- NOTE ---
                                #Lapys: Perform a recursive search through an object and its children that inherit the same constructor-prototype values.
                                    - Returns current indexed object.
                                    - Returns property descriptions.
                    */
                    LDKF.recurObject = function recurObject(object, iteration, condition, isStrict) {};

                    // Remove Class List from Element
                    LDKF.removeClassListFromElement = function removeClassListFromElement(element, classLists) {
                        // Initialization > (Iterator, Length)
                        var iterator = arguments.length - 1, length = iterator + 1;

                        /* Loop
                                Index Arguments.
                        */
                        while (iterator) {
                            // Initialization > Class Name
                            var className = arguments[length - (iterator -= 1) - 1];

                            /* Logic
                                    [if:else statement]
                            */
                            if (LDKF.isArrayObject(className)) {
                                // Initialization > Class List (Iterator, Length)
                                var classListIterator = className.length,
                                    classListLength = classListIterator;

                                /* Loop
                                        Index Class Name.
                                */
                                while (classListIterator) {
                                    // Initialization > Class List Item
                                    var classListItem = className[classListLength - (classListIterator -= 1) - 1];

                                    // Modification > Element > Class
                                    LDKF.isArrayObject(classListItem) ?
                                        LDKF.removeClassListFromElement(element, classListItem) :
                                        LDKF.removeClassNameFromElement(element, classListItem)
                                }
                            }

                            else
                                // Modification > Element > Class
                                LDKF.removeClassNameFromElement(element, className)
                        }
                    };

                    // Remove Class Name from Element --- CHECKPOINT ---
                    // Remove Event from Node --- CHECKPOINT ---

                    /* Repeat Object
                            --- CHECKPOINT ---
                            --- NOTE ---
                                #Lapys: Perform a primitive recursive search through an object and its children that inherit the same constructor-prototype values.
                                    - Returns current indexed object.
                    */
                    LDKF.repeatObject = function repeatObject(object, iteration, condition, isStrict) {};

                    /* Scan Object
                            --- NOTE ---
                                #Lapys: Perform a linear, shallow search through an object's properties.
                    */
                    LDKF.scanObject = function scanObject(object, iteration, condition, isStrict) {
                        // Logic
                        if (arguments.length && LDKF.isConstructible(object) && LDKF.isFunction(iteration)) {
                            // Update > (Condition, Is Strict)
                            (arguments.length > 2) || (condition = function condition() { return !0 });
                            isStrict = !!isStrict;

                            // Initialization
                                // (Keys, State, Values)
                                var keys = [], state = !0, values = [],

                                // (Object Keys) (Iterator, Length)
                                objectKeys = (function() { try { return LDKF.objectKeys(object) } catch (error) {} return LDKF.objectKeys(LDKF.object(object)) })(),
                                objectKeysIterator = object.length, objectKeysLength = objectKeysIterator;

                            // Function > Update Sequence
                            function updateSequence(key, value) {
                                // Initialization > (Iterator, Length)
                                var iterator = keys.length, length = iterator;

                                // Loop > Logic > Return
                                while (iterator)
                                    if (keys[iterator -= 1] == key) return;

                                // Logic
                                if (!iterator && value !== hidden) {
                                    // Update > (Keys, Values)
                                    keys[length] = key;
                                    values[length] = value
                                }
                            }

                            // Loop
                            for (var key in object) {
                                // Initialization > Value
                                var value;

                                // Error Handling > Update > Value
                                try { value = object[key] } catch (error) { value = hidden }

                                // Update Sequence
                                updateSequence(key, value)
                            }

                            /* Loop
                                    Index Object Keys.
                            */
                            while (objectKeysIterator) {
                                // Initialization > (Key, Value)
                                var key = objectKeys[objectKeysLength - (objectKeysIterator -= 1) - 1], value;

                                // Error Handling > Update > Value
                                try { value = object[key] } catch (error) { value = hidden }

                                // Update Sequence
                                updateSequence(key, value)
                            }

                            // Initialization > (Iterator, Length)
                            var iterator = (keys || values).length, length = iterator;

                            // Loop
                            while (iterator && state) {
                                // Initialization > (Index, Key, Value, Arguments, Target, Iteration State)
                                var index = length - (iterator -= 1) - 1,
                                    key = keys[index], value = values[index],
                                    args = [key, value], that = object,
                                    iterationState;

                                // Logic
                                if (iterationState = condition.apply(that, args)) {
                                    // Update > State
                                    isStrict && (state = iterationState);

                                    // Iteration
                                    (iterationState && state) && iteration.apply(that, args)
                                }
                            }
                        }
                    };

                    /* Search Object
                            --- CHECKPOINT ---
                            --- NOTE ---
                                #Lapys: Perform a deep search through an object and it's prototype tree.
                                    - Returns current indexed object.
                                    - Returns property descriptions.
                    */
                    LDKF.searchObject = function searchObject(object, iteration, condition, isStrict) {};

                    // Set Interval
                    LDKF.setInterval = function setInterval(callback, delay) {
                        // Initialization > (Timeout, Target)
                        var timeout = {}, that = this;

                        // Function > Interval
                        function interval() {
                            // Return
                            return LDKF.setTimeout.call(that, function() {
                                // Callback
                                callback.call(that);

                                // Modification > Timeout > Current
                                timeout.current = interval()
                            }, delay)
                        }

                        // Update > (LapysJS > Temporary Data > Cache > Timeouts)
                        LapysJS.tmp.cache.timeouts[LapysJS.tmp.cache.timeouts.length] = timeout;

                        // Return
                        return timeout.current = timeout.init = LDKF.setTimeout.call(that, function() {
                            // Callback
                            callback.call(that);

                            // Modification > Timeout > Current
                            timeout.current = interval()
                        }, delay)
                    };

                    // Set Timeout
                    LDKF.setTimeout = function setTimeout(callback, delay) {
                        // Initialization > Target
                        var that = this;

                        // Return
                        return LDKO.setTimeout.call(GLOBAL_MAIN, function() {
                            // Callback
                            callback.call(that);

                            // Clear Timeout > Timeout Identifier
                            LDKO.clearTimeout.call(GLOBAL_MAIN, timeoutID)
                        }, delay)
                    };

                    // String
                    LDKF.string = function string(arg) {
                        // Logic > (...)
                        if (!arguments.length) return "";
                        else if (LDKF.isString(arg)) return arg;
                        else {
                            if (LDKF.isSymbol(arg)) return LDKO.string(arg);
                            else try { return arg + "" } catch (error) {}
                            return LDKO.string(arg)
                        }
                    };
                        // Prototype
                            // Alphabetize
                            LDKF.stringPrototypeAlphabetize = function stringPrototypeAlphabetize(string) {
                                // Initialization > (Iterator, Length, Stream)
                                var iterator = string.length, length = iterator,
                                    stream = "";

                                /* Loop
                                        Iterate through String.
                                */
                                while (iterator) {
                                    // Initialization > Character
                                    var character = string[length - (iterator -= 1) - 1];

                                    // Update > Stream
                                    LDKF.stringPrototypeIsAlphabet(character) && (stream += character)
                                }

                                // Return
                                return stream
                            };

                            // Camel
                            LDKF.stringPrototypeCamel = function stringPrototypeCamel(string) {
                                // Initialization > (Iterator, Length, Stream)
                                var iterator = string.length, length = iterator,
                                    stream = "";

                                /* Loop
                                        Iterate through String.
                                */
                                while (iterator) {
                                    // Initialization > (Index, Character)
                                    var index = length - (iterator -= 1) - 1,
                                        character = string[index], previousCharacter = string[index - 1];

                                    // Update > Stream
                                    stream += previousCharacter && LDKF.stringPrototypeIsAlphabet(character) && !LDKF.stringPrototypeIsAlphabet(previousCharacter) ? LDKF.stringPrototypeUpper(character) : character
                                }

                                // Return
                                return stream
                            };

                            /* Character Code At
                                    --- NOTE ---
                                        #Lapys: Because this method relies on C++ `char` to `int` conversion in the background,
                                            we'll ascertain default character codes to pre-selected characters (for the scope of this script).
                            */
                            LDKF.stringPrototypeCharacterCodeAt = function stringPrototypeCharacterCodeAt(string, characterIndex) {
                                // Logic > Return --- NOTE (Lapys) -> It's much faster to use a `switch` statement than guess the character code via algorithmic means.
                                switch (string[characterIndex]) {
                                    case ' ': return 32; break; case '_': return 95; break;

                                    case '0': return 48; break;
                                    case '1': return 49; break; case '2': return 50; break; case '3': return 51; break;
                                    case '4': return 52; break; case '5': return 53; break; case '6': return 54; break;
                                    case '7': return 55; break; case '8': return 56; break; case '9': return 57; break;

                                    case 'A': return 65; break; case 'a': return 97; break;
                                    case 'B': return 66; break; case 'b': return 98; break;
                                    case 'C': return 67; break; case 'c': return 99; break;
                                    case 'D': return 68; break; case 'd': return 100; break;
                                    case 'E': return 69; break; case 'e': return 101; break;
                                    case 'F': return 70; break; case 'f': return 102; break;
                                    case 'G': return 71; break; case 'g': return 103; break;
                                    case 'H': return 72; break; case 'h': return 104; break;
                                    case 'I': return 73; break; case 'i': return 105; break;
                                    case 'J': return 74; break; case 'j': return 106; break;
                                    case 'K': return 75; break; case 'k': return 107; break;
                                    case 'L': return 76; break; case 'l': return 108; break;
                                    case 'M': return 77; break; case 'm': return 109; break;
                                    case 'N': return 78; break; case 'n': return 110; break;
                                    case 'O': return 79; break; case 'o': return 111; break;
                                    case 'P': return 80; break; case 'p': return 112; break;
                                    case 'Q': return 81; break; case 'q': return 113; break;
                                    case 'R': return 82; break; case 'r': return 114; break;
                                    case 'S': return 83; break; case 's': return 115; break;
                                    case 'T': return 84; break; case 't': return 116; break;
                                    case 'U': return 85; break; case 'u': return 117; break;
                                    case 'V': return 86; break; case 'v': return 118; break;
                                    case 'W': return 87; break; case 'w': return 119; break;
                                    case 'X': return 88; break; case 'x': return 120; break;
                                    case 'Y': return 89; break; case 'y': return 121; break;
                                    case 'Z': return 90; break; case 'z': return 122; break;
                                    default: return null
                                }
                            };

                            // Cut
                            LDKF.stringPrototypeCut = function stringPrototypeCut(string, amount) {
                                // Initialization > Stream
                                var stream = "";

                                // Logic
                                if (LDKF.isFinite(amount) || LDKF.isNaN(amount))
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isSafeInteger(amount)) {
                                        // Initialization > (Absolute Amount, Length)
                                        var absoluteAmount = LDKF.abs(amount),
                                            length = string.length;

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (absoluteAmount < length)
                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (amount > 0) {
                                                // Initialization > Iterator
                                                var iterator = length - amount;

                                                // Loop > Update > Stream
                                                while (iterator)
                                                    stream += string[length - (iterator -= 1) - 1]
                                            }

                                            else {
                                                // Initialization > Iterator
                                                var iterator = length;

                                                // Loop > Update > Stream
                                                while (iterator != absoluteAmount)
                                                    stream += string[length - (iterator -= 1) - 1]
                                            }
                                    }

                                    else
                                        // Update > Stream
                                        stream = string;

                                // Return
                                return stream
                            };

                            // Explode
                            LDKF.stringPrototypeExplode = function stringPrototypeExplode(string, separators) {
                                // Update > Separators
                                (arguments.length > 1) || (separators = [hidden]);
                                LDKF.isArray(separators) || (separators = [separators]);

                                // Initialization > (Array (Index), Iterator, Length, Separators, Stream)
                                var array = [], arrayIndex = -1,
                                    iterator = string.length, length = iterator,
                                    separatorsLength = separators.length,
                                    stream = "";

                                /* Logic
                                        [if:else statement]
                                */
                                if (separators[0] === hidden && separatorsLength == 1)
                                    /* Loop
                                            Iterate through String.
                                    */
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Array
                                        array[arrayIndex += 1] = string[index]
                                    }

                                else {
                                    /* Loop
                                            Iterate through String.
                                    */
                                    while (iterator) {
                                        // Initialization > (Index, Separated, Separators Iterator)
                                        var index = length - (iterator -= 1) - 1,
                                            separated = !1,
                                            separatorsIterator = separatorsLength;

                                        /* Loop
                                                Index Separators.
                                        */
                                        while (separatorsIterator) {
                                            // Initialization > (Separator) (Iterator, Length)
                                            var separator = separators[separatorsLength - (separatorsIterator -= 1) - 1],
                                                separatorIterator = separator.length, separatorLength = separatorIterator;

                                            /* Loop
                                                    Iterate through Separator.
                                            */
                                            while (separatorIterator) {
                                                // Initialization > Separator Index
                                                var separatorIndex = separatorLength - (separatorIterator -= 1) - 1;

                                                /* Logic
                                                        [if:else if statement]
                                                */
                                                if (string[index + separatorIndex] != separator[separatorIndex])
                                                    // [Break]
                                                    break;

                                                else if (!separatorIterator) {
                                                    // Update > (Array, Iterator, Separated, Stream)
                                                    array[arrayIndex += 1] = stream;
                                                    iterator -= separatorLength - 1;
                                                    separated = !0;
                                                    stream = ""
                                                }
                                            }

                                            // Logic > Break
                                            if (separated) break
                                        }

                                        // Update > Stream
                                        separated || (stream += string[index])
                                    }

                                    // Update > Array
                                    stream && (array[arrayIndex += 1] = stream)
                                }

                                // Return
                                return array
                            };

                            // Includes
                            LDKF.stringPrototypeIncludes = function stringPrototypeIncludes(string, match) {
                                // Initialization > (Iterator, Length, Match Length, Stream)
                                var iterator = string.length, length = iterator,
                                    matchLength = match.length,
                                    stream = "";

                                /* Loop
                                        Iterate through String.
                                */
                                while (iterator) {
                                    // Initialization > (Index, Match Iterator)
                                    var index = length - (iterator -= 1) - 1,
                                        matchIterator = matchLength;

                                    /* Loop
                                            Iterate through Match.
                                    */
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic > (...)
                                        if (string[index + matchIndex] != match[matchIndex]) break;
                                        else if (!matchIterator) return !0
                                    }
                                }

                                // Return
                                return !1
                            };

                            // Index
                            LDKF.stringPrototypeIndex = function stringPrototypeIndex(string, match) {
                                // Initialization > (Iterator, Length, Match Length, Stream)
                                var iterator = string.length, length = iterator,
                                    matchLength = match.length,
                                    stream = "";

                                /* Loop
                                        Iterate through String.
                                */
                                while (iterator) {
                                    // Initialization > (Index, Match Iterator)
                                    var index = length - (iterator -= 1) - 1,
                                        matchIterator = matchLength;

                                    /* Loop
                                            Iterate through Match.
                                    */
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic > (...)
                                        if (string[index + matchIndex] != match[matchIndex]) break;
                                        else if (!matchIterator) return index
                                    }
                                }

                                // Return
                                return -1
                            };

                            // Inject
                            LDKF.stringPrototypeInject = function stringPrototypeInject(string, substring, matchIndex) {
                                // Logic
                                if (arguments.length > 2 && !LDKF.isNaN(matchIndex) && LDKF.isNumber(matchIndex)) {
                                    // Initialization > (Iterator, Length, Stream)
                                    var iterator = string.length, length = iterator, stream = "";

                                    // Update > (Match Index, Sub String)
                                    substring = LDKF.string(substring);
                                    LDKF.isInfinite(matchIndex) && (matchIndex = LDKF.isPositiveNumber(matchIndex) ? length : 0);

                                    // Loop > Update > Match Index
                                    while (!LDKF.objectIs(matchIndex, -0) && LDKF.isNegativeNumber(matchIndex)) matchIndex = length + matchIndex;

                                    // Logic
                                    if (LDKF.objectIs(matchIndex, -0))
                                        // Update > Stream
                                        stream += string + substring;

                                    else
                                        // Loop
                                        while (iterator) {
                                            // Initialization > (Index, Character)
                                            var index = length - (iterator -= 1) - 1, character = string[index];

                                            // Logic
                                            if (index == matchIndex) {
                                                // Initialization > Sub-String (Iterator, Length)
                                                var substringIterator = substring.length, substringLength = substringIterator;

                                                // Loop > Update > Stream
                                                while (substringIterator)
                                                    stream += substring[substringLength - (substringIterator -= 1) - 1];

                                                // Update > Stream
                                                stream += character
                                            }

                                            else
                                                // Update > Stream
                                                stream += character
                                        }

                                    // Return
                                    return stream
                                }

                                // Return
                                return string
                            };

                            // Is Alphabet
                            LDKF.stringPrototypeIsAlphabet = function stringPrototypeIsAlphabet(character) { return LDKF.arrayPrototypeIncludes(LDKRs.alphabets.lowercase, character) || LDKF.arrayPrototypeIncludes(LDKRs.alphabets.uppercase, character) };

                            // Is Alphanumeric --- NOTE (Lapys) -> Inclusive conditioning.
                            LDKF.stringPrototypeIsAlphanumeric = function stringPrototypeIsAlphanumeric(character) { return LDKF.stringPrototypeIsAlphabet(character) || LDKF.stringPrototypeIsDigit(character) };

                            // Is Digit
                            LDKF.stringPrototypeIsDigit = function stringPrototypeIsDigit(character) { return LDKF.arrayPrototypeIncludes(LDKRs.digits, character) };

                            // Is Variable Character
                            LDKF.stringPrototypeIsVariableCharacter = function stringPrototypeIsVariableCharacter(character) {
                                // Logic
                                if (arguments.length) {
                                    // Update > Character
                                    character = LDKF.string(character)[0];

                                    // Logic > Return
                                    if (
                                        !(
                                            character == ' ' ||
                                            (character == '(' || character == ')')
                                        ) &&
                                        (
                                            LDKF.stringPrototypeIsAlphabet(character) || LDKF.stringPrototypeIsDigit(character) ||
                                            (character == '$' || character == '_') ||
                                            (function() {
                                                // Initialization > Is Variable Character
                                                var isVariableCharacter = !0;

                                                // Error Handling > (...)
                                                try { LDKO.eval("var " + character) }
                                                catch (error) { (LDKF.objectPrototypeGetConstructor(error) === LDKO.syntaxError) && (isVariableCharacter = !1) }

                                                // Return
                                                return isVariableCharacter
                                            })()
                                        )
                                    )
                                        return !0;
                                }

                                // Return
                                return !1
                            };

                            // Is Variable Name
                            LDKF.stringPrototypeIsVariableName = function stringPrototypeIsVariableName(string) {
                                // Initialization > Iterator
                                var iterator = string.length;

                                // Loop > Logic > Return
                                while (iterator)
                                    if (!LDKF.stringPrototypeIsVariableCharacter(string[iterator -= 1]))
                                        return !1;

                                // Return
                                return !0
                            };

                            // Last Index
                            LDKF.stringPrototypeLastIndex = function stringPrototypeLastIndex(string, match) {
                                // Initialization > (Iterator, Match Length, Stream)
                                var iterator = string.length,
                                    matchLength = match.length,
                                    stream = "";

                                /* Loop
                                        Iterate through String.
                                */
                                while (iterator) {
                                    // Initialization > Match Iterator
                                    var matchIterator = matchLength;

                                    // Update > Iterator
                                    iterator -= 1;

                                    /* Loop
                                            Iterate through Match.
                                    */
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic > (...)
                                        if (string[iterator + matchIndex] != match[matchIndex]) break;
                                        else if (!matchIterator) return iterator
                                    }
                                }

                                // Return
                                return -1
                            };

                            // Lower
                            LDKF.stringPrototypeLower = function stringPrototypeLower(string) {
                                // Initialization > (Iterator, Length, Stream)
                                var iterator = string.length, length = iterator,
                                    stream = "";

                                // Loop > Update > Stream
                                while (iterator)
                                    stream += LDKF.stringPrototypeLowerCharacter(string[length - (iterator -= 1) - 1]);

                                // Return
                                return stream
                            };

                            // Lower Character
                            LDKF.stringPrototypeLowerCharacter = function stringPrototypeLowerCharacter(character) {
                                // Initialization > Index
                                var index;

                                // Logic > Return
                                if ((index = LDKF.arrayPrototypeIndex(LDKRs.alphabets.uppercase, character)) != -1)
                                    return LDKRs.alphabets.lowercase[index];

                                // Return
                                return character
                            };

                            // Range --- NOTE (Lapys) -> Return a sub-string within certain indexes of a string.
                            LDKF.stringPrototypeRange = function stringPrototypeRange(string, start, stop) {
                                // Update > String
                                string = LDKF.string(string);

                                // Initialization > (Length, Stream)
                                var length = string.length, stream = "";

                                // Logic
                                if (!LDKF.isNegativeInfinity(stop) && LDKF.isNumber(start) && LDKF.isNumber(stop)) {
                                    // Update > (Start, Stop)
                                    (LDKF.isNaN(start) || LDKF.isNegativeInfinity(start)) && (start = 0);
                                    LDKF.isNaN(stop) && (stop = 0);
                                    LDKF.isPositiveInfinity(stop) && (stop = length);
                                    LDKF.isPositiveInfinity(start) && (start = stop);

                                    // Loop > Update > (Start, Stop)
                                    while (LDKF.isNegativeNumber(start)) start = length + start;
                                    while (LDKF.isNegativeNumber(stop)) stop = length + stop;

                                    // Logic
                                    if (start > stop) {
                                        // Initialization > Former Start
                                        var formerStart = start;

                                        // Update > (String, Start, Stop)
                                        string = LDKF.stringPrototypeReverse(string);
                                        start = stop;
                                        stop = formerStart
                                    }

                                    // Logic
                                    if (start < stop) {
                                        // Update > Stop
                                        (stop > length) && (stop = length);

                                        // Update > (Start, Stop)
                                        start -= 1; stop -= 1;

                                        // Loop > Update > Stream
                                        while (start != stop)
                                            stream += string[start += 1]
                                    }

                                    // Return
                                    return stream
                                }

                                // Return
                                return null
                            };

                            // Remove
                                // All
                                LDKF.stringPrototypeRemoveAll = function stringPrototypeRemoveAll(string, matches) { return LDKF.stringPrototypeReplaceAll(string, matches, '') };

                                // All From Back
                                LDKF.stringPrototypeRemoveAllFromBack = function stringPrototypeRemoveAllFromBack(string, matches) { return LDKF.stringPrototypeReplaceAllFromBack(string, matches, '') };

                                // All From Front
                                LDKF.stringPrototypeRemoveAllFromFront = function stringPrototypeRemoveAllFromFront(string, matches) { return LDKF.stringPrototypeReplaceAllFromFront(string, matches, '') };

                                // From Back
                                LDKF.stringPrototypeRemoveFromBack = function stringPrototypeRemoveFromBack(string, matches) { return LDKF.stringPrototypeReplaceFromBack(string, matches, '') };

                                // From Front
                                LDKF.stringPrototypeRemoveFromFront = function stringPrototypeRemoveFromFront(string, matches) { return LDKF.stringPrototypeReplaceFromFront(string, matches, '') };

                            // Repeat
                            LDKF.stringPrototypeRepeat = function stringPrototypeRepeat(string, amount) {
                                // Initialization > Stream
                                var stream = "";

                                // Logic
                                if (LDKF.isPositiveNumber(amount)) {
                                    /* Logic
                                            [if:else statement]

                                            --- NOTE ---
                                                #Lapys: Infinite to the local machine's (or the current environment's) limit.
                                                    - 'Why..?'. I'll ask 'Why not?'

                                            --- WARN ---
                                                #Lapys: Executing this condition could be dangerous as under-the-hood code could be wasting memory on the local machine.
                                    */
                                    if (LDKF.isInfinite(amount)) {
                                        // Warn
                                        LDKF.throwWarning('Invalid count value');

                                        // Update > Stream
                                        stream += string;
                                        stream = (function() {
                                            // Initialization > (Condition, Test)
                                            var condition = true, test = function test() { return condition };

                                            // Function > End
                                            function end() {
                                                // Update > (Condition, Test)
                                                condition = false;
                                                test = null
                                            }

                                            // Error Handling
                                            try {
                                                // Loop > Update > Stream
                                                while (test()) stream += stream
                                            } catch (error) {
                                                // Error Handling
                                                try {
                                                    // Initialization > String Stream
                                                    var stringStream = string;

                                                    // Loop
                                                    while (test()) {
                                                        // Update > (String) Stream
                                                        stream += stringStream;
                                                        stringStream += stringStream
                                                    }
                                                } catch (error) {
                                                    // Error Handling
                                                    try {
                                                        // Initialization > String Stream
                                                        var stringStream = string;

                                                        // Loop
                                                        while (test()) {
                                                            // Update > (String) Stream
                                                            stream += stringStream;
                                                            stringStream += string
                                                        }
                                                    } catch (error) {
                                                        // Error Handling
                                                        try {
                                                            // Loop
                                                            while (test()) {
                                                                // Initialization > (Iterator, Length)
                                                                var iterator = string.length, length = iterator;

                                                                // Loop > Update > Stream
                                                                while (iterator > 0)
                                                                    stream += string[length - (iterator -= 1) - 1]
                                                            }
                                                        } catch (error) {
                                                            // End
                                                            end()
                                                        }
                                                    }
                                                }
                                            }

                                            // Return --- NOTE (Lapys) -> For my machine when developing this, it reached a string length of 1,073,741,799.
                                            return stream
                                        })()
                                    }

                                    else {
                                        // Initialization > Integer Amount
                                        var integerAmount = LDKF.int(amount);

                                        // Loop
                                        while (integerAmount) {
                                            // Update > (Integer Amount, String)
                                            integerAmount -= 1;
                                            stream += string
                                        }

                                        // Logic
                                        if (amount != (integerAmount = LDKF.int(amount))) {
                                            // Update > Amount
                                            amount -= integerAmount;

                                            // Initialization > (Iterator, Amount Percentage, (Integer) String Iteration Count)
                                            var iterator = -1,
                                                amountPercentage = amount * 100,
                                                stringIterationCount = LDKF.perc(string.length, amountPercentage),
                                                integerStringIterationCount = LDKF.int(stringIterationCount);

                                            // Loop
                                            while (integerStringIterationCount) {
                                                // Update > (Integer String Iteration Count, Stream)
                                                integerStringIterationCount -= 1;
                                                stream += string[iterator += 1]
                                            }

                                            // Update > Stream --- NOTE (Lapys) -> Handle the percentage mantissa.
                                            (stringIterationCount - LDKF.int(stringIterationCount) > .5) && (stream += string[iterator += 1])
                                        }
                                    }
                                }

                                else
                                    // Return
                                    return null;

                                // Return
                                return stream
                            };

                            // Replace
                                // All
                                LDKF.stringPrototypeReplaceAll = function stringPrototypeReplaceAll(string, matches, substitute) {
                                    // Update > Matches
                                    LDKF.isArrayObject(matches) || (matches = [matches]);

                                    // Initialization > (Iterator, (Matches) Length, Stream)
                                    var iterator = string.length, length = iterator,
                                        matchesLength = matches.length,
                                        stream = "";

                                    // Loop
                                    while (iterator > 0) {
                                        // Initialization > (Index, Match Found, Matches Iterator)
                                        var index = length - (iterator -= 1) - 1,
                                            matchFound = !1,
                                            matchesIterator = matchesLength;

                                        // Loop
                                        while (!matchFound && matchesIterator) {
                                            // Initialization > Match (Iterator)
                                            var match = matches[matchesLength - (matchesIterator -= 1) - 1],
                                                matchIterator = match.length, matchLength = matchIterator;

                                            // Loop
                                            while (matchIterator) {
                                                // Initialization > Match Index
                                                var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                // Logic
                                                if (string[index + matchIndex] != match[matchIndex])
                                                    // [Break]
                                                    break;

                                                else if (!matchIterator) {
                                                    // Update > (Iterator, Match Found, Stream)
                                                    iterator -= matchLength - 1;
                                                    matchFound = !0;
                                                    stream += substitute
                                                }
                                            }
                                        }

                                        // Update > Stream
                                        matchFound || (stream += string[index])
                                    }

                                    // Return
                                    return stream
                                };

                                // All From Back
                                LDKF.stringPrototypeReplaceAllFromBack = function stringPrototypeReplaceAllFromBack(string, matches, substitute) {
                                    // Update > Matches
                                    LDKF.isArrayObject(matches) || (matches = [matches]);
                                    matches = LDKF.arrayPrototypeShallowClone(matches);

                                    // Initialization > (Iterator, Length, Matches (Found, Length), Stream)
                                    var iterator = string.length, length = iterator,
                                        matchesFound = -1,
                                        matchesLength = matches.length,
                                        stream = "";

                                    // Loop
                                    while (iterator > 0) {
                                        // Initialization > (Index, Match Found, Matches Iterator)
                                        var index = length - (iterator -= 1) - 1,
                                            matchFound = !1,
                                            matchesIterator = matchesLength;

                                        // Loop
                                        while (!matchFound && matchesIterator && matchesFound != matchesLength) {
                                            // Initialization > (Matches Index, Match)
                                            var matchesIndex = matchesLength - (matchesIterator -= 1) - 1,
                                                match = matches[matchesIndex];

                                            // Logic
                                            if (LDKF.isString(match)) {
                                                // Initialization > Match (Iterator, Length)
                                                var matchIterator = match.length, matchLength = matchIterator;

                                                // Loop
                                                while (matchIterator) {
                                                    // Initialization > Match Index
                                                    var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                    // Logic
                                                    if (string[index + matchIndex] != match[matchIndex])
                                                        // Break
                                                        break;

                                                    else if (!matchIterator) {
                                                        // Update > (Iterator, Matches, Match Found, Matches Found, Stream)
                                                        iterator -= matchLength - 1;
                                                        matches[matchesIndex] = null;
                                                        matchFound = !0;
                                                        matchesFound += 1;
                                                        stream += substitute
                                                    }
                                                }
                                            }
                                        }

                                        // Update > Stream
                                        matchFound || (stream += string[index])
                                    }

                                    // Return
                                    return stream
                                };

                                // All From Front
                                LDKF.stringPrototypeReplaceAllFromFront = function stringPrototypeReplaceAllFromFront(string, matches, substitute) {
                                    // Update > Matches
                                    LDKF.isArrayObject(matches) || (matches = [matches]);
                                    matches = LDKF.arrayPrototypeShallowClone(matches);

                                    // Initialization > Reverse Substitute
                                    var reverseSubstitute = LDKF.stringPrototypeReverse(substitute);

                                    // Initialization > (Iterator, Length, Matches (Found, Length), (Reverse) Stream)
                                    var iterator = string.length, length = iterator,
                                        matchesFound = -1,
                                        matchesLength = matches.length,
                                        reverseStream = "", stream = "";

                                    // Loop
                                    while (iterator > 0) {
                                        // Initialization > (Index, Match Found, Matches Iterator)
                                        var index = length - (iterator -= 1) - 1,
                                            matchFound = !1,
                                            matchesIterator = matchesLength;

                                        // Loop
                                        while (!matchFound && matchesIterator && matchesFound != matchesLength) {
                                            // Initialization > (Matches Index, Match)
                                            var matchesIndex = matchesLength - (matchesIterator -= 1) - 1,
                                                match = matches[matchesIndex];

                                            // Logic
                                            if (LDKF.isString(match)) {
                                                // Initialization > Match (Iterator, Length)
                                                var matchIterator = match.length, matchLength = matchIterator;

                                                // Loop
                                                while (matchIterator) {
                                                    // Initialization > Match Index
                                                    var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                    // Logic
                                                    if (string[iterator - matchIndex] != match[matchIterator])
                                                        // Break
                                                        break;

                                                    else if (!matchIterator) {
                                                        // Update > (Iterator, Matches, Match Found, Matches Found, Reverse Substitute)
                                                        iterator -= matchLength - 1;
                                                        matches[matchesIndex] = null;
                                                        matchFound = !0;
                                                        matchesFound += 1;
                                                        reverseStream += reverseSubstitute
                                                    }
                                                }
                                            }
                                        }

                                        // Update > Reverse Stream
                                        matchFound || (reverseStream += string[iterator])
                                    }

                                    // Update > Iterator
                                    iterator = reverseStream.length;

                                    // Loop > Update > Stream
                                    while (iterator)
                                        stream += reverseStream[iterator -= 1];

                                    // Return
                                    return stream
                                };

                                // From Back
                                LDKF.stringPrototypeReplaceFromBack = function stringPrototypeReplaceFromBack(string, matches, substitute) {
                                    // Update > Matches
                                    LDKF.isArrayObject(matches) || (matches = [matches]);

                                    // Initialization > (Iterator, (Matches) Length, Match Found, Stream)
                                    var iterator = string.length, length = iterator,
                                        matchFound = !1,
                                        matchesLength = matches.length,
                                        stream = "";

                                    // Loop
                                    while (iterator > 0) {
                                        // Initialization > (Index, Match Found, Matches Iterator)
                                        var index = length - (iterator -= 1) - 1,
                                            $matchFound = !1,
                                            matchesIterator = matchesLength;

                                        // Loop
                                        while (!matchFound && matchesIterator) {
                                            // Initialization > (Match) (Iterator, Length)
                                            var match = matches[matchesLength - (matchesIterator -= 1) - 1],
                                                matchIterator = match.length, matchLength = matchIterator;

                                            // Loop
                                            while (matchIterator) {
                                                // Initialization > Match Index
                                                var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                // Logic
                                                if (string[index + matchIndex] != match[matchIndex])
                                                    // [Break]
                                                    break;

                                                else if (!matchIterator) {
                                                    // Update > (Iterator, Match Found, Stream)
                                                    iterator -= matchLength - 1;
                                                    matchFound = $matchFound = !0;
                                                    stream += substitute
                                                }
                                            }
                                        }

                                        // Update > Stream
                                        $matchFound || (stream += string[index])
                                    }

                                    // Return
                                    return stream
                                };

                                // From Front
                                LDKF.stringPrototypeReplaceFromFront = function stringPrototypeReplaceFromFront(string, matches, substitute) {
                                    // Update > Matches
                                    LDKF.isArrayObject(matches) || (matches = [matches]);

                                    // Initialization > Reverse Substitute
                                    var reverseSubstitute = LDKF.stringPrototypeReverse(substitute);

                                    // Initialization > (Iterator, (Matches) Length, Match Found, (Reverse) Stream)
                                    var iterator = string.length, length = iterator,
                                        matchFound = !1,
                                        matchesLength = matches.length,
                                        reverseStream = "", stream = "";

                                    // Loop
                                    while (iterator > 0) {
                                        // Initialization > (Index, Match Found, Matches Iterator)
                                        var index = length - (iterator -= 1) - 1,
                                            $matchFound = !1,
                                            matchesIterator = matchesLength;

                                        // Loop
                                        while (!matchFound && matchesIterator) {
                                            // Initialization > (Match) (Iterator, Length)
                                            var match = matches[matchesLength - (matchesIterator -= 1) - 1],
                                                matchIterator = match.length, matchLength = matchIterator;

                                            // Loop
                                            while (matchIterator) {
                                                // Initialization > Match Index
                                                var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                                // Logic
                                                if (string[iterator - matchIndex] != match[matchIterator])
                                                    // [Break]
                                                    break;

                                                else if (!matchIterator) {
                                                    // Update > (Iterator, Match Found, Reverse Stream)
                                                    iterator -= matchLength - 1;
                                                    matchFound = $matchFound = !0;
                                                    reverseStream += reverseSubstitute
                                                }
                                            }
                                        }

                                        // Update > Reverse Stream
                                        $matchFound || (reverseStream += string[iterator])
                                    }

                                    // Update > Iterator
                                    iterator = reverseStream.length;

                                    // Loop > Update > Stream
                                    while (iterator)
                                        stream += reverseStream[iterator -= 1];

                                    // Return
                                    return stream
                                };

                            // Reverse
                            LDKF.stringPrototypeReverse = function stringPrototypeReverse(string) {
                                // Initialization > (Iterator, Stream)
                                var iterator = string.length, stream = "";

                                // Loop > Update > Stream
                                while (iterator)
                                    stream += string[iterator -= 1];

                                // Return
                                return stream
                            };

                            // Trim
                            LDKF.stringPrototypeTrim = function stringPrototypeTrim(string, matches) {
                                // Update > Matches
                                (arguments.length > 1) || (matches = [' ', '\n']);
                                LDKF.isArray(matches) || (matches = [matches]);

                                // Return
                                return LDKF.stringPrototypeTrimLeft(LDKF.stringPrototypeTrimRight(string, matches), matches)
                            };

                            // Trim Left
                            LDKF.stringPrototypeTrimLeft = function stringPrototypeTrimLeft(string, matches) {
                                // Update > Matches
                                (arguments.length > 1) || (matches = [' ', '\n']);
                                LDKF.isArray(matches) || (matches = [matches]);

                                // Initialization > (Iterator, Length, Stream)
                                var iterator = matches.length, length = matches.length,
                                    stream = string;

                                /* Loop
                                        Iterate through Stream.
                                */
                                while (iterator) {
                                    // Initialization > (Match) (Iterator, Length)
                                    var match = matches[iterator -= 1],
                                        matchIterator = match.length, matchLength = matchIterator;

                                    /* Loop
                                            Iterate through Match.
                                    */
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic
                                        if (stream[matchIndex] != match[matchIndex])
                                            // [Break]
                                            break;

                                        else if (!matchIterator) {
                                            // Update > (Iterator, Stream)
                                            iterator = length;
                                            stream = LDKF.stringPrototypeCut(stream, matchLength)
                                        }
                                    }
                                }

                                // Return
                                return stream
                            };

                            // Trim Right
                            LDKF.stringPrototypeTrimRight = function stringPrototypeTrimRight(string, matches) {
                                // Update > Matches
                                (arguments.length > 1) || (matches = [' ', '\n']);
                                LDKF.isArray(matches) || (matches = [matches]);

                                // Initialization > (Iterator, Length, Stream (Length))
                                var iterator = matches.length, length = matches.length,
                                    stream = string, streamLength = stream.length;

                                /* Loop
                                        Iterate through Stream.
                                */
                                while (iterator) {
                                    // Initialization > (Match) (Iterator, Length)
                                    var match = matches[iterator -= 1],
                                        matchIterator = match.length, matchLength = matchIterator;

                                    /* Loop
                                            Iterate through Match.
                                    */
                                    while (matchIterator) {
                                        // Initialization > Match Index
                                        var matchIndex = matchLength - (matchIterator -= 1) - 1;

                                        // Logic
                                        if (stream[streamLength - matchIndex - 1] != match[matchIterator])
                                            // [Break]
                                            break;

                                        else if (!matchIterator) {
                                            // Update > (Iterator, Stream Length)
                                            iterator = length;
                                            streamLength = (stream = LDKF.stringPrototypeCut(stream, -matchLength)).length
                                        }
                                    }
                                }

                                // Return
                                return stream
                            };

                            // Upper
                            LDKF.stringPrototypeUpper = function stringPrototypeUpper(string) {
                                // Initialization > (Iterator, Length, Stream)
                                var iterator = string.length, length = iterator,
                                    stream = "";

                                // Loop > Update > Stream
                                while (iterator)
                                    stream += LDKF.stringPrototypeUpperCharacter(string[length - (iterator -= 1) - 1]);

                                // Return
                                return stream
                            };

                            // Upper Character
                            LDKF.stringPrototypeUpperCharacter = function stringPrototypeUpperCharacter(character) {
                                // Initialization > Index
                                var index;

                                // Logic > Return
                                if ((index = LDKF.arrayPrototypeIndex(LDKRs.alphabets.lowercase, character)) != -1)
                                    return LDKRs.alphabets.uppercase[index];

                                // Return
                                return character
                            };

                    /* To Debug Message
                            --- NOTE ---
                                #Lapys: Debugging messages the user might receive.
                    */
                    LDKF.toDebugMessage = function toDebugMessage(message) {
                        // Update > Message
                        message = LDKF.string(message);

                        // Return
                        return LDKI.debugMessages.prefix + message + (function(character) {
                            // Return
                            return LDKF.stringPrototypeIsAlphabet(character) || LDKF.stringPrototypeIsDigit(character) ? '.' : ""
                        })(message[message.length - 1]) + (DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? '\r' : '\n')
                    };

                    // Throw DOM Exception
                    LDKF.throwDOMException = function throwDOMException(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { LDKF.documentPrototypeQuerySelector(LDKFg.windowDocument(), '') }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Error
                    LDKF.throwError = function throwError(message, stack) {
                        // Logic > Update > (Message, Stack)
                        if (LDKF.isErrorLike(message)) {
                            stack = message.stack;
                            message = message.message
                        }

                        else {
                            message = arguments.length ? LDKF.string(message) : "";
                            stack = arguments.length > 1 ? LDKF.string(stack) : null
                        }

                        // Loop > Update > Message
                        while (LDKF.stringPrototypeRange(message, 0, LDKI.debugMessages.prefix.length) == LDKI.debugMessages.prefix) message = LDKF.stringPrototypeRange(message, LDKI.debugMessages.prefix.length, -0);
                        while (LDKF.stringPrototypeRange(message, -2, -0) == ".\r") message = LDKF.stringPrototypeRange(message, 0, -2);

                        // Update > Message
                        message = LDKF.toDebugMessage(LDKF.stringPrototypeReplaceAll(message, '\n', "\n\t"));

                        /* Logic
                                [if:else statement]
                        */
                        if (LDKO.lapysJSError) {
                            // Initialization > Error Object
                            var errorObject = new LDKO.lapysJSError(message);

                            // Modification > Error Object > Stack
                            LDKF.isNull(stack) || (errorObject.stack = stack);

                            // Error
                            throw errorObject
                        }

                        else
                            // Error
                            LDKF.throwReferenceError(message)
                    };

                    // Throw Fallback Error
                    LDKF.throwFallbackError = function throwFallbackError(message) { throw LDKF.string(message) };

                    // Throw Range Error
                    LDKF.throwRangeError = function throwRangeError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { (function a(){a()})() }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    /* Throw Reference Error
                            --- NOTE ---
                                #Lapys: If there is a viable (and consistent) way to get this method done without native methods & properties?
                    */
                    LDKF.throwReferenceError = function throwReferenceError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Logic
                        if (LDKO.eval) {
                            // Initialization > Variable Name
                            var variableName = 'a';

                            // Error Handling
                            try {
                                // Loop > Update > Variable Name
                                while (LDKF.objectPrototypeHasProperty(GLOBAL_MAIN, variableName))
                                    variableName += variableName;

                                // Execution
                                LDKO.eval(variableName)
                            } catch (error) {
                                // (...)
                                LDKF.errorPrototypeSetMessage(error, message);

                                // Error
                                throw error
                            }
                        }

                        else {
                            /* Initialization > (...)
                                    --- NOTE ---
                                        #Lapys: A few concerns...
                                            - What ambiguous, non-intrusive variable name could we use to invoke a reference error?
                                            - What if the variable reference name is pre-defined, and what if accessing it produces a fault that is not a reference error?
                            */
                            var hasVariable = LDKF.objectPrototypeHasProperty(GLOBAL_MAIN, "LAPYS_JS"),
                                formerVariableValue = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "LAPYS_JS");

                            /* Error Handling > Modification > Global > (...)
                                    --- NOTE ---
                                        #Lapys: In case the variable was pre-defined as a setter,
                                            and setting its value causes an error.
                            */
                            try { LDKF.objectPrototypeSetProperty(GLOBAL_MAIN, "LAPYS_JS", undefined) }
                            catch (error) {}

                            // Deletion
                            LDKF.objectPrototypeDeleteProperty(GLOBAL_MAIN, "LAPYS_JS");

                            try {
                                // (...) --- NOTE (Lapys) -> Hopefully, this causes the error.
                                LAPYS_JS;

                                // Logic > Error
                                if (LDKO.referenceError) throw new LDKO.referenceError(LDKF.string(message));
                                else LDKF.throwFallbackError(message)
                            } catch (error) {
                                // Logic > Error Handling > Modification > Global > (...)
                                if (hasVariable)
                                    try { LDKF.objectPrototypeSetProperty(GLOBAL_MAIN, "LAPYS_JS", formerVariableValue) }
                                    catch (error) {}

                                // (...)
                                (error === message) || LDKF.errorPrototypeSetMessage(error, message);

                                // Error
                                throw error
                            }
                        }
                    };

                    // Throw Syntax Error
                    LDKF.throwSyntaxError = function throwSyntaxError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { LDKO.eval('(') }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Type Error
                    LDKF.throwTypeError = function throwTypeError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { hidden.hidden() }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw URI Error
                    LDKF.throwURIError = function throwURIError(message) {
                        // Update > Message
                        arguments.length || (message = "");

                        // Error Handling > (...)
                        try { LDKO.decodeURIComponent("a%AFc") }
                        catch (error) {
                            // (...)
                            LDKF.errorPrototypeSetMessage(error, message);

                            // Error
                            throw error
                        }
                    };

                    // Throw Warning
                    LDKF.throwWarning = function throwWarning(message) {
                        // Initialization > Arguments
                        var args = LDKF.arrayPrototypeShallowClone(arguments);

                        // Update > Arguments
                        LDKF.arrayPrototypeAddToBack(args, LDKI.debugMessages.prefix);
                        LDKF.arrayPrototypeAddToFront(args, DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? '\r' : '\n');

                        // Warn
                        LDKF.consoleWarn.apply(GLOBAL_MAIN, args);

                        // Return
                        return LDKF.toDebugMessage(LDKF.stringPrototypeReplaceAll(arguments.length ? LDKF.arrayPrototypeImplode(LDKF.arrayPrototypeBuild(args, function(item) { return LDKF.string(item) }), "") : "", '\n', "\n\t"));
                    };

                    /* Get */
                        // Function
                            // Prototype
                                // Name
                                LDKFg.functionPrototypeName = function functionPrototypeName(method) {
                                    // Initialization > Name
                                    var name = "";

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isFunction(method)) {
                                        // Initialization > (Source, Length, Type)
                                        var source = LDKFg.functionPrototypeSourceCode(method), length = source.length,
                                            type = LDKFg.functionPrototypeType(method);

                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (LDKF.stringPrototypeRange(type, 0, 5) == "class")
                                            // Loop
                                            for (var iterator = 5 + 1; iterator != length; iterator += 1) {
                                                // Initialization > Character
                                                var character = source[iterator];

                                                // Logic > (...)
                                                if (LDKF.stringPrototypeIsVariableCharacter(character)) name += character;
                                                else break
                                            }

                                        else if (LDKF.stringPrototypeRange(type, 0, 7) == "default")
                                            // Loop
                                            for (var iterator = 8 + 1; iterator != length; iterator += 1) {
                                                // Initialization > Character
                                                var character = source[iterator];

                                                // Logic > (...)
                                                if (LDKF.stringPrototypeIsVariableCharacter(character)) name += character;
                                                else break
                                            }

                                        else if (LDKF.stringPrototypeRange(type, 0, 5) != "arrow")
                                            // Update > Name
                                            name = null
                                    }

                                    else
                                        // Update > Name
                                        name = null;

                                    // Return
                                    return name
                                };

                                // Source Code
                                LDKFg.functionPrototypeSourceCode = function functionPrototypeSourceCode(method) { return LDKF.stringPrototypeTrim(LDKF.string(method) || "") };

                                // Type --- NOTE (Lapys) -> Syntax type of the function... (e.g.: arrow, class, default)
                                LDKFg.functionPrototypeType = function functionPrototypeType(method) {
                                    // Initialization > (Is Native, Type, Source)
                                    var isNative = LDKF.isNativeFunction(method),
                                        type = "", source = LDKFg.functionPrototypeSourceCode(method);

                                    // Logic > Update > Type
                                    if (LDKF.stringPrototypeRange(source, 0, 5) == "class") type = isNative ? "class-native" : "class";
                                    else if (LDKF.stringPrototypeRange(source, 0, 8) == "function") type = isNative ? "default-native" : "default";
                                    else if (LDKF.stringPrototypeIsVariableCharacter(source[0]) || source[0] == '(') type = isNative ? "arrow-native" : "arrow";
                                    else if (isNative) type = "native";
                                    else type = null;

                                    // Return
                                    return type
                                };

                        // Number
                            // Prototype
                                // Characteristics --- UPDATE REQUIRED (Lapys) -> There has to be a more code-efficient way of programming this method.
                                LDKFg.numberPrototypeCharacteristics = function numberPrototypeCharacteristics(number) {
                                    // Initialization > (Stream, String)
                                    var stream = "",
                                        string = LDKF.string(number);

                                    // Logic
                                    if (LDKF.stringPrototypeIncludes(string, 'e')) {
                                        // Initialization > (Exponent, String Last Character)
                                        var exponent = "",
                                            stringLastCharacter = string[string.length - 1];

                                        // Function
                                            // Cut Right Character
                                            function cutRightCharacter(string) {
                                                // Initialization > (Iterator, Length, Stream)
                                                var iterator = string.length - 1, length = iterator,
                                                    stream = "";

                                                // Logic > Loop > Update > Stream
                                                if (string) while (iterator) stream += string[length - (iterator -= 1) - 1];

                                                // Return
                                                return stream
                                            }

                                            // Trim Right
                                            function trimRight(string) {
                                                // Loop > Update > String
                                                while (!LDKF.stringPrototypeIsDigit(string[string.length - 1]))
                                                    string = cutRightCharacter(string);

                                                // Return
                                                return string
                                            }

                                        // Loop
                                        while (LDKF.stringPrototypeIsDigit(stringLastCharacter)) {
                                            // Update > (Exponent, String (Last Character))
                                            exponent = stringLastCharacter + exponent;
                                            string = cutRightCharacter(string);
                                            stringLastCharacter = string[string.length - 1]
                                        }

                                        // Update > Exponent
                                        exponent = LDKF.number(exponent);

                                        // Logic
                                        if (stringLastCharacter == 'e' || stringLastCharacter == '+') {
                                            // Update > String
                                            string = trimRight(string);

                                            // Loop
                                            while (exponent) {
                                                // Update > (String, Exponent)
                                                string = LDKF.stringPrototypeIncludes(string, '.') ?
                                                    LDKF.stringPrototypeInject(LDKF.stringPrototypeRemoveFromBack(string, '.'), '.', LDKF.stringPrototypeIndex(string, '.') + 1) :
                                                    string + '0';
                                                exponent -= 1
                                            }
                                        }

                                        else if (stringLastCharacter == '-') {
                                            // Update > String
                                            string = trimRight(string);

                                            // Loop
                                            while (exponent) {
                                                // Update > (String, Exponent)
                                                string = (function() {
                                                    // Initialization > Index
                                                    var index = LDKF.stringPrototypeIndex(string, '.') - 1;

                                                    // Update > String
                                                    string = LDKF.stringPrototypeRemoveFromBack(string, '.');
                                                    string = index > -1 ? LDKF.stringPrototypeInject(string, '.', index) : '.0' + string;

                                                    // Return
                                                    return string
                                                })();
                                                exponent -= 1
                                            }

                                            // Update > String
                                            string || (string = '0')
                                        }
                                    }

                                    // Initialization > (Iterator, Length)
                                    var iterator = string.length, length = iterator;

                                    // Loop
                                    while (iterator) {
                                        // Initialization > Character
                                        var character = string[length - (iterator -= 1) - 1];

                                        // Logic > (...)
                                        if (character == '.') break;
                                        else stream += character
                                    }

                                    // Return
                                    return stream
                                };

                                // Mantissa --- UPDATE REQUIRED (Lapys) -> There has to be a more code-efficient way of programming this method.
                                LDKFg.numberPrototypeMantissa = function numberPrototypeMantissa(number) {
                                    // Initialization > String
                                    var string = LDKF.string(number);

                                    // Logic
                                    if (LDKF.stringPrototypeIncludes(string, '.')) {
                                        // Initialization > Stream
                                        var stream = "";

                                        // Logic
                                        if (LDKF.stringPrototypeIncludes(string, 'e')) {
                                            // Initialization > (Exponent, String Last Character)
                                            var exponent = "",
                                                stringLastCharacter = string[string.length - 1];

                                            // Function
                                                // Cut Right Character
                                                function cutRightCharacter(string) {
                                                    // Initialization > (Iterator, Length, Stream)
                                                    var iterator = string.length - 1, length = iterator,
                                                        stream = "";

                                                    // Logic > Loop > Update > Stream
                                                    if (string) while (iterator) stream += string[length - (iterator -= 1) - 1];

                                                    // Return
                                                    return stream
                                                }

                                                // Trim Right
                                                function trimRight(string) {
                                                    // Loop > Update > String
                                                    while (!LDKF.stringPrototypeIsDigit(string[string.length - 1]))
                                                        string = cutRightCharacter(string);

                                                    // Return
                                                    return string
                                                }

                                            // Loop
                                            while (LDKF.stringPrototypeIsDigit(stringLastCharacter)) {
                                                // Update > (Exponent, String (Last Character))
                                                exponent = stringLastCharacter + exponent;
                                                string = cutRightCharacter(string);
                                                stringLastCharacter = string[string.length - 1]
                                            }

                                            // Update > Exponent
                                            exponent = LDKF.number(exponent);

                                            // Logic
                                            if (stringLastCharacter == 'e' || stringLastCharacter == '+') {
                                                // Update > String
                                                string = trimRight(string);

                                                // Loop
                                                while (exponent && LDKF.stringPrototypeIncludes(string, '.')) {
                                                    // Update > (String, Exponent)
                                                    string = LDKF.stringPrototypeInject(LDKF.stringPrototypeRemoveFromBack(string, '.'), '.', LDKF.stringPrototypeIndex(string, '.') + 1);
                                                    exponent -= 1
                                                }
                                            }

                                            else if (stringLastCharacter == '-') {
                                                // Update > String
                                                string = trimRight(string);

                                                // Loop
                                                while (exponent) {
                                                    // Update > (String, Exponent)
                                                    string = (function() {
                                                        // Initialization > Index
                                                        var index = LDKF.stringPrototypeIndex(string, '.') - 1;

                                                        // Update > String
                                                        string = LDKF.stringPrototypeRemoveFromBack(string, '.');
                                                        string = index > -1 ? LDKF.stringPrototypeInject(string, '.', index) : '.0' + string;

                                                        // Return
                                                        return string
                                                    })();

                                                    exponent -= 1
                                                }
                                            }
                                        }

                                        // Initialization > (Mantissa Found, Iterator, Length)
                                        var mantissaFound = !1,
                                            iterator = string.length, length = iterator;

                                        // Loop
                                        while (iterator) {
                                            // Initialization > Character
                                            var character = string[length - (iterator -= 1) - 1];

                                            // Update > (Stream | Mantissa Found)
                                            mantissaFound ? stream += character : ((character == '.') && (mantissaFound = !0))
                                        }

                                        // Return
                                        return stream
                                    }

                                    // Return
                                    return '0'
                                };

                        // Window
                            // Document
                            LDKFg.windowDocument = function windowDocument() { return DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKOd.windowDocument.get.call(arguments.length ? arguments[0] : GLOBAL_MAIN) : null };

                    /* Set */

                /* Objects */
                    // Array
                    LDKO.array = [].constructor;
                        // Prototype
                        LDKO.arrayPrototype = LDKO.array.prototype;

                    // Boolean
                    LDKO.boolean = (!0).constructor;

                    // Decode URI Component
                    LDKO.decodeURIComponent = (function() {
                        // Initialization > Decode URI Component
                        var decodeURIComponent = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "decodeURIComponent");

                        // Logic > (...)
                        if (LDKF.isNativeFunction(decodeURIComponent) && LDKFg.functionPrototypeName(decodeURIComponent) == "decodeURIComponent") return decodeURIComponent;
                        else LDKF.throwError("`decodeURIComponent` function" + LDKI.errorMessages.native_to_environment)
                    })();

                    /* Evaluate
                            --- NOTE ---
                                #Lapys: Should allow for relatively safe syntax testing (if the `eval` function is native).
                    */
                    LDKO.eval = (function() {
                        // Initialization > Eval
                        var $eval = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "eval");

                        // Logic > (...)
                        if (LDKF.isNativeFunction($eval) && (function(name) { return !name || name == "eval" })(LDKFg.functionPrototypeName($eval))) return $eval;
                        else LDKF.throwError("`eval` function" + LDKI.errorMessages.native_to_environment)
                    })();

                    // Syntax Error
                    LDKO.syntaxError = (function() {
                        // Initialization > Syntax Error
                        var syntaxError;

                        // Error Handling > (...)
                        try { LDKF.throwSyntaxError() }
                        catch (error) { syntaxError = error.constructor }

                        // Return
                        return syntaxError
                    })();

                /* Random */
                    // Environment Features
                        // Class Keyword {Is} Valid
                        LDKR.environmentFeatures.classKeywordValid = (function() {
                            // Initialization > Class Keyword Valid
                            var classKeywordValid = !0;

                            // Error Handling > (...)
                            try { LDKO.eval("new class {}") }
                            catch (error) { (error.constructor === LDKO.syntaxError) && (classKeywordValid = !1) }

                            // Return
                            return classKeywordValid
                        })();

                    // Create Object
                    LDKR.createObject = function createObject(constructor, properties, prototype) {
                        // Initialization > (Object, Length)
                        var object = {}, length = arguments.length;

                        // Update > Constructor
                        LDKF.isFunction(constructor) || LDKF.isString(constructor) || (constructor = LDKF.string(constructor));

                        // Logic
                        if (constructor)
                            /* Logic
                                    [if:else if statement]
                            */
                            if (LDKF.isFunction(constructor))
                                // Error Handling
                                try {
                                    // Update > Object
                                    object = new constructor
                                } catch (error) {}

                            else if (LDKF.isString(constructor))
                                // Error Handling
                                try {
                                    // Update > Object
                                    object = LDKO.eval("(function() { return new (function " + constructor + "() {}) })()")
                                } catch (error) {
                                    // Error
                                    (error.constructor == LDKO.syntaxError) && LDKF.throwError("Invalid constructor name: '" + constructor + "'");
                                    throw error
                                }

                        // Modification > Object > (Constructor > Prototype)
                        (length > 2) && (object.__proto__ = LDKF.objectCreate(prototype));

                        // (Lapys Development Kit > Functions) > Iterate Object
                        (length > 1) && LDKF.iterateObject(properties, function iteration(key, value, description) {
                            // Error Handling
                            try {
                                // Modification > Object > [Key]
                                LDKF.objectDefineProperty(object, key, description)
                            } catch (error) {
                                // Initialization > Delimiter
                                var delimiter = '\'';

                                // Update > Delimiter
                                (LDKF.isString(key) && LDKF.stringPrototypeIncludes(key, '\'')) && (LDKF.stringPrototypeIncludes(key, '"') ? LDKF.stringPrototypeIncludes(key, '`') || (delimiter = '`') : delimiter = '"');

                                /* Logic
                                        [if:else statement]

                                        --- NOTE ---
                                            #Lapys: Just allow the warning print out 'aesthetically'.
                                */
                                if (LDKF.isNumber(key) || LDKF.isRegex(key) || LDKF.isString(key)) {
                                    // Update > Key
                                    key = LDKF.string(key);
                                    (key.length > 35) && (key = LDKF.stringPrototypeRange(key, 0, 32) + "...");

                                    // Warn
                                    LDKF.throwWarning("Unable to define property " + delimiter + key + delimiter + " on object: ", object)
                                }

                                else
                                    // Warn
                                    LDKF.throwWarning("Unable to define property ", key, " on object: ", object)
                            }
                        }, function condition(key, value, description, iteratedObject) {
                            // Error Handling > Return
                            try { return iteratedObject === properties && !LDKF.objectPrototypeHasProperty(properties.__proto__, key) }
                            catch (error) {}
                        });

                        // Return
                        return object
                    };
                        // Array
                        LDKR.createObject.array = function createArrayObject(constructor, items, properties) {
                            // Initialization > Array
                            var array = [];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length) {
                                // Update > Array
                                array = LDKR.createObject(constructor, properties, LDKO.arrayPrototype);

                                // Modification > Array > Length
                                array.length = 0;

                                // Initialization > Iterator
                                var iterator;

                                // Logic
                                if (LDKF.isArrayObject(items) && (iterator = items.length)) {
                                    // Initialization > Length
                                    var length = iterator;

                                    /* Loop
                                            Index Items.

                                            --- NOTE ---
                                                #Lapys: Inject the items into Array.
                                    */
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Array
                                        array.length += 1;
                                        array[index] = items[index]
                                    }
                                }
                            }

                            // Return
                            return array
                        };

                        // Class
                        LDKR.createObject["class"] = function createClassObject(name, body, extension) { return LDKO.eval("(function() { return class " + name + (arguments.length > 2 ? " extends " + extension + " " : "") + " {" + (arguments.length > 1 ? body : "") + "} })()") };

                        // Function Array
                        LDKR.createObject.functionArray = function createFunctionArray(items, properties, method) {
                            // Initialization > Function Array
                            var functionArray = arguments.length > 3 ? method : function() { return functionArray[arguments[0] ] };

                            // Deletion
                            delete functionArray.length;

                            // Modification > Function Array
                                // (Constructor > Prototype)
                                functionArray.__proto__ = (function() {
                                    // Update > Properties
                                    properties = LDKF.object(properties);

                                    // Modification > Properties > (Constructor > Prototype)
                                    properties.__proto__ = LDKF.objectCreate(LDKO.arrayPrototype);

                                    // Return
                                    return properties
                                })();

                                // Length
                                functionArray.length = 0;

                            // Logic
                            if (arguments.length) {
                                // Initialization > Iterator
                                var iterator;

                                // Logic
                                if (LDKF.isArrayObject(items) && (iterator = items.length)) {
                                    // Initialization > Length
                                    var length = iterator;

                                    /* Loop
                                            Index Items.

                                            --- NOTE ---
                                                #Lapys: Inject the items into Array.
                                    */
                                    while (iterator) {
                                        // Initialization > Index
                                        var index = length - (iterator -= 1) - 1;

                                        // Update > Function Array
                                        functionArray.length += 1;
                                        functionArray[index] = items[index]
                                    }
                                }
                            }

                            // Return
                            return functionArray
                        };

                        // Object
                        LDKR.createObject.object = LDKR.createObject;

                /* Object */
                    // Clear Interval
                    LDKO.clearInterval = LDKO.clearTimeout = (function() {
                        // Initialization > Clear Timeout
                        var clearTimeout = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "clearTimeout");

                        // Logic > (...)
                        if (
                            (function() {
                                // Logic > Return
                                if (DEVELOPMENT_ENVIRONMENT_IS_BROWSER) return LDKFg.functionPrototypeName(clearTimeout) == "clearTimeout";
                                else if (DEVELOPMENT_ENVIRONMENT_IS_NODEJS) return !LDKFg.functionPrototypeName(clearTimeout);
                                else return !0
                            })() &&
                            (function() {
                                // Logic > Return
                                if (DEVELOPMENT_ENVIRONMENT_IS_BROWSER) return LDKF.isNativeFunction(clearTimeout);
                                else if (DEVELOPMENT_ENVIRONMENT_IS_NODEJS) return !0;
                                else return !0
                            })()
                        ) return clearTimeout;
                        else LDKF.throwError("`clearTimeout` function" + LDKI.errorMessages.native_to_environment)
                    })();

                    // Console
                    LDKO.console = (function() {
                        // Initialization > Console
                        var console = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "console");

                        // Logic > (...)
                        if (
                            typeof console == "object" &&
                            (function(consoleString) { return consoleString == "[object console]" || consoleString == "[object Console]" || consoleString == "[object Object]" })(LDKF.string(console))
                        ) return console;
                        else LDKF.throwError("`console` object" + LDKI.errorMessages.native_to_environment)
                    })();
                        // Group
                        LDKO.consoleGroup = (function() {
                            // Initialization > Group
                            var group = LDKF.objectPrototypeGetProperty(LDKO.console, "group"),
                                groupName = LDKFg.functionPrototypeName(group);

                            // Logic > (...)
                            if (
                                (LDKF.isNativeFunction(group) || groupName == "__BROWSERTOOLS_CONSOLE_SAFEFUNC") &&
                                (function(name) { return !name || name == "group" || name == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" })(groupName)
                            ) return group;
                            else LDKF.throwError("`console.group` method" + LDKI.errorMessages.native_to_environment)
                        })();

                        // Group End
                        LDKO.consoleGroupEnd = (function() {
                            // Initialization > Group End
                            var groupEnd = LDKF.objectPrototypeGetProperty(LDKO.console, "groupEnd"),
                                groupEndName = LDKFg.functionPrototypeName(groupEnd);

                            // Logic > (...)
                            if (
                                (LDKF.isNativeFunction(groupEnd) || groupEndName == "__BROWSERTOOLS_CONSOLE_SAFEFUNC") &&
                                (function(name) { return !name || name == "groupEnd" || name == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" })(groupEndName)
                            ) return groupEnd;
                            else LDKF.throwError("`console.groupEnd` method" + LDKI.errorMessages.native_to_environment)
                        })();

                        // Log
                        LDKO.consoleLog = (function() {
                            // Initialization > Log
                            var log = LDKF.objectPrototypeGetProperty(LDKO.console, "log"),
                                logName = LDKFg.functionPrototypeName(log);

                            // Logic > (...)
                            if (
                                (LDKF.isNativeFunction(log) || logName == "__BROWSERTOOLS_CONSOLE_SAFEFUNC") &&
                                (function(name) { return !name || name == "log" || name == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" })(logName)
                            ) return log;
                            else LDKF.throwError("`console.log` method" + LDKI.errorMessages.native_to_environment)
                        })();

                        // Warn
                        LDKO.consoleWarn = (function() {
                            // Initialization > Warn
                            var warn = LDKF.objectPrototypeGetProperty(LDKO.console, "warn"),
                                warnName = LDKFg.functionPrototypeName(warn);

                            // Logic > (...)
                            if (
                                (LDKF.isNativeFunction(warn) || warnName == "__BROWSERTOOLS_CONSOLE_SAFEFUNC") &&
                                (function(name) { return !name || name == "warn" || name == "__BROWSERTOOLS_CONSOLE_SAFEFUNC" })(warnName)
                            ) return warn;
                            else LDKF.throwError("`console.warn` method" + LDKI.errorMessages.native_to_environment)
                        })();

                    // CSS Property-Value --- NOTE (Lapys) -> An object representative of a CSS style declaration.
                    LDKO.cssPropertyValue = function CSSPropertyValue() {
                        // Initialization > Target
                        var that = this;

                        /* Logic
                                [if statement]
                        */
                        if (that !== GLOBAL_MAIN) {
                            // Modification > Target --- CHECKPOINT ---
                                // Add To Back
                                LDKF.objectDefineProperty(that, "addToBack", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function addToBack() {},

                                    // Writable
                                    writable: !1
                                });

                                // Add To Front
                                LDKF.objectDefineProperty(that, "addToFront", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function addToFront() {},

                                    // Writable
                                    writable: !1
                                });

                                // Full Value
                                that.fullValue = null;

                                // Get Property-Value
                                LDKF.objectDefineProperty(that, "getPropertyValue", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function getPropertyValue() {},

                                    // Writable
                                    writable: !1
                                });

                                // Includes
                                LDKF.objectDefineProperty(that, "includes", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function includes() {},

                                    // Writable
                                    writable: !1
                                });

                                // Priority
                                that.priority = null;

                                // Property
                                that.property = null;

                                // Remove From Back
                                LDKF.objectDefineProperty(that, "removeFromBack", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function removeFromBack() {},

                                    // Writable
                                    writable: !1
                                });

                                // Remove From Front
                                LDKF.objectDefineProperty(that, "removeFromFront", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function removeFromFront() {},

                                    // Writable
                                    writable: !1
                                });

                                // Set Property-Value
                                LDKF.objectDefineProperty(that, "setPropertyValue", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function setPropertyValue(property, value) {
                                        // Update > Value
                                        value = LDKF.stringPrototypeTrim(value);

                                        // Modification > Target > (...) --- CHECKPOINT ---
                                        that.fullValue = value;
                                        that.priority = (function(value) {})(value);
                                        that.property = property;
                                        that.value = (function(value) {})(value);

                                        // Return
                                        return that.toCSSSyntax()
                                    },

                                    // Writable
                                    writable: !1
                                });

                                // To CSS Syntax
                                LDKF.objectDefineProperty(that, "toCSSSyntax", {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !0,

                                    // Value
                                    value: function toCSSSyntax() { return that.property + ": " + that.fullValue },

                                    // Writable
                                    writable: !1
                                });

                                // Value
                                that.value = null
                        }

                        // Return
                        return that
                    };

                    // CSS Property-Value List --- NOTE (Lapys) -> Contains a list of `CSSPropertyValue` objects only.
                    LDKO.cssPropertyValueList = function CSSPropertyValueList() {};

                    /* Custom
                            --- NOTE ---
                                #Lapys: All custom LapysJS objects are constructed here.
                    */
                        // CSS Property-Value
                        LDKOc.cssPropertyValue = function cssPropertyValue(property, value) {
                            // Initialization > CSS Property-Value
                            var cssPropertyValue = LDKR.createObject(LDKO.cssPropertyValue);

                            // Logic
                            if (arguments.length) {
                                // Update > Value
                                (arguments.length > 1) || (value = LDKI.defaults.cssValue);

                                // CSS Property-Value > Set Property Value
                                cssPropertyValue.setPropertyValue(property, value)
                            }

                            // Return
                            return cssPropertyValue
                        };

                        // CSS Property-Value List
                        LDKOc.cssPropertyValueList = function cssPropertyValueList(items) {
                            // Initialization > Arguments
                            var args = arguments;

                            // Return
                            return new function cssPropertyValueList() {
                                // Initialization > (CSS Property-Value List, Index, Iterator, Length)
                                var cssPropertyValueList = LDKR.createObject.array(LDKO.cssPropertyValueList),
                                    index = -1,
                                    iterator = args.length, length = iterator;

                                /* Loop
                                        Index Arguments.
                                */
                                while (iterator) {
                                    // Initialization > Argument
                                    var arg = args[length - (iterator -= 1) - 1];

                                    // Logic
                                    if (LDKF.objectPrototypeGetConstructor(arg) === LDKO.cssPropertyValue) {
                                        // Update > CSS Property-Value List
                                        LDKF.arrayPrototypeAddToFront(cssPropertyValueList, arg);

                                        // Modification > CSS Property-Value List > [Index] --- NOTE (Lapys) -> Make the list 'immutable'.
                                        LDKF.objectDefineProperty(cssPropertyValueList, index += 1, {configurable: !1, enumerable: !0, value: arg, writable: !1})
                                    }
                                }

                                // Return
                                return cssPropertyValueList
                            }
                        };

                        // LapysJS Error
                        LDKOc.lapysJSError = function LapysJSError(message) { return new LDKO.lapysJSError(arguments.length ? message : "") };

                        // LapysJS Node List
                        LDKOc.lapysJSNodeList = function LapysJSNodeList(items) {
                            // Return
                            return LDKR.createObject.array(LDKO.lapysJSNodeList, arguments)
                        };

                        // Pseudo Number
                        LDKOc.pseudoNumber = function PseudoNumber(characteristics, mantissa) {
                            // Initialization > Pseudo Number
                            var pseudoNumber = new LDKO.pseudoNumber;

                            // Logic
                            if (LDKF.isConstructible(characteristics) && characteristics.constructor === LDKO.pseudoNumber) {
                                // Modification > Pseudo Number > (Characteristics, Mantissa)
                                pseudoNumber.characteristics = characteristics.characteristics;
                                pseudoNumber.mantissa = characteristics.mantissa
                            }

                            else if (arguments.length) {
                                // Initialization > (Mantissa Given, (Characteristics, Mantissa) Number)
                                var mantissaGiven = arguments.length > 1,
                                    characteristicsNumber = LDKF.number(characteristics) || 0,
                                    mantissaNumber = mantissaGiven ? LDKF.number(mantissa) || 0 : 0;

                                // Logic
                                if (LDKF.isSafeNumber(characteristicsNumber) && LDKF.isSafeNumber(mantissaNumber)) {
                                    // Update > (Characteristics, Mantissa)
                                    characteristics = characteristicsNumber;
                                    mantissa = mantissaNumber;

                                    // Modification > Pseudo Number > Mantissa
                                    pseudoNumber.mantissa = 0;

                                    // Logic
                                    if (LDKF.isInteger(characteristics))
                                        // Modification > Pseudo Number > Characteristics
                                        pseudoNumber.characteristics = LDKF.string(characteristics);

                                    else {
                                        // Modification > Pseudo Number > Characteristics
                                        pseudoNumber.characteristics = LDKF.string(LDKF.int(characteristics));

                                        // Update > Characteristics
                                        characteristics = LDKF.number(LDKFg.numberPrototypeMantissa(characteristics));

                                        // Loop > Update > Characteristics
                                        while (LDKF.isNonInteger(characteristics))
                                            characteristics *= 10;

                                        // Modification > Pseudo Number > Mantissa
                                        pseudoNumber.mantissa = characteristics
                                    }

                                    // Logic
                                    if (LDKF.isInteger(mantissa))
                                        // Modification > Pseudo Number > Mantissa
                                        pseudoNumber.mantissa += mantissa;

                                    else {
                                        // Loop > Update > Mantissa
                                        while (LDKF.isNonInteger(mantissa))
                                            mantissa *= 10;

                                        // Modification > Pseudo Number > Mantissa
                                        pseudoNumber.mantissa += mantissa
                                    }

                                    // Modification > Pseudo Number > Mantissa
                                    pseudoNumber.mantissa = LDKF.string(pseudoNumber.mantissa)
                                }

                                else {
                                    // Modification > Pseudo Number > (Characteristics, Mantissa)
                                    pseudoNumber.characteristics = characteristics;
                                    pseudoNumber.mantissa = mantissaGiven ? mantissa : '0'
                                }
                            }

                            else {
                                // Modification > Pseudo Number > (Characteristics, Mantissa)
                                pseudoNumber.characteristics = '0';
                                pseudoNumber.mantissa = '0'
                            }

                            // Modification > Pseudo Number
                                // Clone
                                LDKF.objectDefineProperty(pseudoNumber, "clone", {
                                    // Value
                                    value: function clone() { return new LDKOc.pseudoNumber(pseudoNumber.characteristics, pseudoNumber.mantissa) }
                                });

                                // To Number
                                LDKF.objectDefineProperty(pseudoNumber, "toNumber", {
                                    // Value
                                    value: function toNumber() { return LDKF.number(pseudoNumber.toString()) }
                                });

                                // To String
                                LDKF.objectDefineProperty(pseudoNumber, "toString", {
                                    // Value
                                    value: function toString() { return pseudoNumber.characteristics + '.' + pseudoNumber.mantissa }
                                });

                            // Return
                            return pseudoNumber
                        };

                    // DOM Error
                    LDKO.domError = (function() {
                        // Initialization > DOM Error
                        var domError = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DOMError");

                        // Logic > Return
                        if (LDKFg.functionPrototypeName(domError) == "DOMError" && LDKF.isNativeFunction(domError))
                            return domError
                    })();

                    // Error
                    LDKO.error = LapysJS.tmp.objects.error = (function() {
                        // Initialization > Error Object
                        var errorObject;

                        // Error Handling > (...)
                        try { hidden.hidden() }
                        catch (error) {
                            // Update > Error Object
                            errorObject = error.__proto__;
                            errorObject = errorObject ? errorObject.__proto__.constructor :
                                (function(errorObject) {
                                    // Logic > Error
                                    if (LDKFg.functionPrototypeName(errorObject) == "Error" && LDKF.isNativeFunction(errorObject)) return errorObject;
                                    else LDKF.throwError("`Error` constructor" + LDKI.errorMessages.native_to_environment)
                                })(LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "Error"));
                        }

                        // Return
                        return errorObject
                    })();

                    // Evaluation Error
                    LDKO.evalError = (function() {
                        // Initialization > Evaluation Error
                        var evalError = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "EvalError");

                        // Logic > Return
                        if (LDKFg.functionPrototypeName(evalError) == "EvalError" && LDKF.isNativeFunction(evalError))
                            return evalError
                    })();

                    // Infinity
                    LDKO.infinity = 1 / 0;

                    /* LapysJS Error
                            --- NOTE ---
                                #Lapys: Simulate a custom error object in JavaScript.
                    */
                    LDKO.lapysJSError = LDKR.environmentFeatures.classKeywordValid ?
                        LDKR.createObject["class"]("LapysJSError", "", "LapysJS.tmp.objects.error") :
                        function LapysJSError() {
                            // Initialization > (Constructor, Error Object)
                            var constructor = function LapysJSError() { return LDKO.error.apply(this, arguments) },
                                errorObject;

                            /* Error Handling > Update > Error Object
                                    --- NOTE ---
                                        #Lapys: Internet Explorer 9 states that using the `new` keyword
                                            does not support the Error Object being updated.
                            */
                            try { errorObject = new constructor.apply(this, arguments) }
                            catch (error) { errorObject = constructor.apply(this, arguments) }

                            // (...)
                            (constructor.__proto__ = LDKO.error.prototype).constructor = constructor;

                            // Return
                            return errorObject
                        };

                    // LapysJS Node List --- NOTE (Lapys) -> Responsible for lists of nodes returned by the script's features & functions.
                    LDKO.lapysJSNodeList = function LapysJSNodeList() {};

                    // Media Error
                    LDKO.mediaError = (function() {
                        // Initialization > Media Error
                        var mediaError = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "MediaError");

                        // Logic > Return
                        if (LDKFg.functionPrototypeName(mediaError) == "MediaError" && LDKF.isNativeFunction(mediaError))
                            return mediaError
                    })();

                    // Not-a-Number
                    LDKO.nan = 0 / 0;

                    // Number
                    LDKO.number = .0.constructor;
                        // Maximum Safe Integer
                        LDKO.numberMaxSafeInteger = LDKF.pow(2, 53) - 1 || 9007199254740991;

                    // Object
                    LDKO.object = ({}).constructor;
                        // Create
                        LDKO.objectCreate = (function() {
                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.object, "create")) {
                                // Initialization > Create
                                var create = LDKF.objectPrototypeGetProperty(LDKO.object, "create");

                                // Logic > (...)
                                if (LDKFg.functionPrototypeName(create) == "create" && LDKF.isNativeFunction(create)) return create;
                                else LDKF.throwError("`Object.create` function" + LDKI.errorMessages.native_to_environment)
                            }

                            else
                                // Return
                                return function create(prototype, descriptors) {
                                    // Update > Descriptors
                                    (arguments.length > 1) || (descriptors = {});

                                    // Logic
                                    if (typeof prototype !== "function" && typeof prototype !== "object")
                                        // Error
                                        LDKF.throwTypeError("Object prototype may only be an Object: " + prototype);

                                    else if (LDKF.isNull(prototype))
                                        // Error
                                        throw new LDKO.error("This environment's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");

                                    // Logic > Error
                                    if (!LDKF.isNull(descriptors) && typeof descriptors != "object")
                                        throw new LDKO.error("This environment's implementation of Object.create is a shim and doesn't support and doesn't accept a non-object second argument.");

                                    // Initialization > Object
                                    var object = function() {};

                                    // Modification > Object > Prototype
                                    object.prototype = prototype;

                                    // Update > Object
                                    object = new object;

                                    // (Lapys Development Kit > Functions) > Scan Object > Descriptors
                                    LDKF.scanObject(descriptors, function iterator(key, value) {
                                        // Initialization > Descriptor
                                        var descriptor = value;

                                        // (Modification > Object > [Key]) | Error
                                        LDKF.isObject(descriptor) ? LDKF.objectDefineProperty(object, key, descriptor) : LDKF.throwTypeError("Property description must be a descriptor: " + LDKF.string(descriptor))
                                    });

                                    // Return
                                    return object
                                }
                        })();

                        // Define Property
                        LDKO.objectDefineProperty = (function() {
                            // Initialization > Define Property
                            var defineProperty = LDKF.objectPrototypeGetProperty(LDKO.object, "defineProperty");

                            // Logic > (...)
                            if (LDKFg.functionPrototypeName(defineProperty) == "defineProperty" && LDKF.isNativeFunction(defineProperty)) return defineProperty;
                            else LDKF.throwError("`Object.defineProperty` function" + LDKI.errorMessages.native_to_environment)
                        })();

                        // Get Own Property Descriptor
                        LDKO.objectGetOwnPropertyDescriptor = (function() {
                            // Initialization > Get Own Property Descriptor
                            var getOwnPropertyDescriptor = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyDescriptor");

                            // Logic > (...)
                            if (LDKFg.functionPrototypeName(getOwnPropertyDescriptor) == "getOwnPropertyDescriptor" && LDKF.isNativeFunction(getOwnPropertyDescriptor)) return getOwnPropertyDescriptor;
                            else LDKF.throwError("`Object.getOwnPropertyDescriptor` function" + LDKI.errorMessages.native_to_environment)
                        })();

                        // Has Own Property
                        LDKO.objectHasOwnProperty = (function() {
                            // Initialization > Has Own Property
                            var hasOwnProperty = LDKF.objectPrototypeGetProperty(LDKO.object, "hasOwnProperty");

                            // Logic > (...)
                            if (LDKFg.functionPrototypeName(hasOwnProperty) == "hasOwnProperty" && LDKF.isNativeFunction(hasOwnProperty)) return hasOwnProperty;
                            else LDKF.throwError("`Object.hasOwnProperty` function" + LDKI.errorMessages.native_to_environment)
                        })();

                        // Prototype
                            // Property Is Enumerable
                            LDKO.objectPrototypePropertyIsEnumerable = (function() {
                                // Initialization > Property Is Enumerable
                                var propertyIsEnumerable = LDKF.objectPrototypeGetProperty(LDKO.object, "propertyIsEnumerable");

                                // Logic > (...)
                                if (LDKFg.functionPrototypeName(propertyIsEnumerable) == "propertyIsEnumerable" && LDKF.isNativeFunction(propertyIsEnumerable)) return propertyIsEnumerable;
                                else LDKF.throwError("`Object.propertyIsEnumerable` function" + LDKI.errorMessages.native_to_environment)
                            })();

                        // Keys
                        LDKO.objectKeys = (function() {
                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.object, "keys")) {
                                // Initialization > Keys
                                var keys = LDKF.objectPrototypeGetProperty(LDKO.object, "keys");

                                // Logic > (...)
                                if (LDKFg.functionPrototypeName(keys) == "keys" && LDKF.isNativeFunction(keys)) return keys;
                                else LDKF.throwError("`Object.keys` function" + LDKI.errorMessages.native_to_environment)
                            }

                            else
                                // Return
                                return (function() {
                                    // Initialization
                                        // Enumerate --- NOTE (Lapys) -> Are enumerations allowed in this version of JavaScript?
                                        var enumerate = LDKO.objectPrototypePropertyIsEnumerable.call({toString: null}, "toString"),

                                        // Enumerations --- NOTE (Lapys) -> Default properties to index with the `Object.keys` method.
                                        enumerations = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],

                                        // Enumerations Length
                                        enumerationsLength = enumerations.length;

                                    // Return
                                    return function keys(object) {
                                        // Error
                                        (typeof object !== "function" && (typeof object !== "object" || LDKF.isNull(object))) && LDKF.throwTypeError("Object.keys called on non-object");

                                        // Initialization > (Iterator, Property, Result)
                                        var iterator, property, result = [];

                                        // Loop > Update > Result
                                        for (property in object)
                                            LDKO.objectHasOwnProperty.call(object, property) && (result[result.length] = property);

                                        // Logic
                                        if (!enumerate)
                                            /* Loop
                                                    Index Enumerations.
                                            */
                                            for (iterator; iterator != enumerationsLength; iterator += 1) {
                                                // Initialization > Enumeration
                                                var enumeration = enumerations[iterator];

                                                // Update > Result
                                                LDKO.objectHasOwnProperty.call(object, enumeration) && (result[result.length] = enumeration)
                                            }

                                        // Return
                                        return result
                                    }
                                })()
                        })();

                        // Get Own Property Descriptors
                        LDKO.objectGetOwnPropertyDescriptors = (function() {
                            // Logic
                            if (LDKF.objectPrototypeHasProperty(LDKO.object, "getOwnPropertyDescriptors")) {
                                // Initialization > Get Own Property Descriptors
                                var getOwnPropertyDescriptors = LDKF.objectPrototypeGetProperty(LDKO.object, "getOwnPropertyDescriptors");

                                // Logic > (...)
                                if (LDKFg.functionPrototypeName(getOwnPropertyDescriptors) == "getOwnPropertyDescriptors" && LDKF.isNativeFunction(getOwnPropertyDescriptors)) return getOwnPropertyDescriptors;
                                else LDKF.throwError("`Object.getOwnPropertyDescriptors` function" + LDKI.errorMessages.native_to_environment)
                            }

                            else
                                // Return
                                return function getOwnPropertyDescriptors(a){var b={},c=LDKF.objectKeys(a),d=0,e=c.length;try{for(d;d!=e;d+=1){f=c[d];var g=LDKF.objectGetOwnPropertyDescriptor(a,f);g&&(b[f]=g)}for(var f in a){var g=LDKF.objectGetOwnPropertyDescriptor(a,f);g&&(b[f]=g)}}catch(h){}return b}
                        })();

                    // Over-constrained Error
                    LDKO.overconstrainedError = (function() {
                        // Initialization > Over-constrained Error
                        var overconstrainedError = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "OverconstrainedError");

                        // Logic > Return
                        if (LDKFg.functionPrototypeName(overconstrainedError) == "OverconstrainedError" && LDKF.isNativeFunction(overconstrainedError))
                            return overconstrainedError
                    })();

                    // Pseudo-Number
                    LDKO.pseudoNumber = function PseudoNumber() {};

                    // Range Error
                    LDKO.rangeError = (function() {
                        // Initialization > Range Error
                        var rangeError;

                        // Error Handling > (...)
                        try { LDKF.throwRangeError() }
                        catch (error) { rangeError = error.constructor }

                        // Return
                        return rangeError
                    })();

                    // Reference Error
                    LDKO.referenceError = (function() {
                        // Initialization > Reference Error
                        var referenceError;

                        // Error Handling > (...)
                        try { LDKF.throwReferenceError() }
                        catch (error) { referenceError = error.constructor }

                        // Return
                        return referenceError
                    })();

                    // Regular Expression
                    LDKO.regex = / /.constructor;

                    // Set Timeout
                    LDKO.setTimeout = (function() {
                        // Initialization > Set Timeout
                        var setTimeout = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "setTimeout");

                        // Logic > (...)
                        if (
                            LDKFg.functionPrototypeName(setTimeout) == "setTimeout" &&
                            (function() {
                                // Logic > Return
                                if (DEVELOPMENT_ENVIRONMENT_IS_BROWSER) return LDKF.isNativeFunction(setTimeout);
                                else if (DEVELOPMENT_ENVIRONMENT_IS_NODEJS) return !0;
                                else return !0
                            })()
                        ) return setTimeout;
                        else LDKF.throwError(LDKF.toDebugMessage("`setTimeout` function" + LDKI.errorMessages.native_to_environment))
                    })();

                    // String
                    LDKO.string = "".constructor;

                    // Symbol
                    LDKO.symbol = (function() {
                        // Logic
                        if (LDKF.objectPrototypeHasProperty(GLOBAL_MAIN, "Symbol")) {
                            // Initialization > Symbol
                            var symbol = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "Symbol");

                            // Logic > (...)
                            if (LDKFg.functionPrototypeName(symbol) == "Symbol" && LDKF.isNativeFunction(symbol)) return symbol;
                            else LDKF.throwError(LDKF.toDebugMessage("`Symbol`" + LDKI.errorMessages.native_to_environment))
                        }
                    })();

                    // Type Error
                    LDKO.typeError = (function() {
                        // Initialization > Type Error
                        var typeError;

                        // Error Handling > (...)
                        try { LDKF.throwTypeError() }
                        catch (error) { typeError = error.constructor }

                        // Return
                        return typeError
                    })();

                    // Uniform Resource Identifier Error
                    LDKO.uriError = (function() {
                        // Initialization > Type Error
                        var uriError;

                        // Error Handling > (...)
                        try { LDKF.throwURIError() }
                        catch (error) { uriError = error.constructor }

                        // Return
                        return uriError
                    })();

                    // Window
                    LDKO.window = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectPrototypeGetConstructor(GLOBAL_MAIN) : undefined;
                        // Prototype
                        LDKO.windowPrototype = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKO.window.prototype : undefined;

                    /* Descriptions */
                        // Window
                            // Document
                            LDKOd.windowDocument = (function(descriptor) {
                                // Modification > Descriptor > Get
                                descriptor && (LDKF.objectPrototypeHasProperty(descriptor, "get") || (descriptor.get = function document() { return GLOBAL_MAIN.document }));

                                // Return
                                return descriptor
                            })(LDKF.objectGetOwnPropertyDescriptor(GLOBAL_MAIN || {}, "document") || LDKF.objectGetOwnPropertyDescriptor(LDKO.windowPrototype || {}, "document"));

                    // Document
                    LDKO.document = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? (function() {
                        // Initialization > (Prototypes, Iterator)
                        var prototypes = LDKF.objectPrototypeGet__Proto__Tree(LDKFg.windowDocument()),
                            iterator = prototypes.length;

                        // Loop
                        while (iterator) {
                            // Initialization > Prototype (String)
                            var prototype = prototypes[iterator -= 1],
                                prototypeString = LDKF.string(prototype);

                            // Logic
                            if (prototypeString == "[object Document]" || prototypeString == "[object DocumentPrototype]") {
                                // Modification > (Lapys Development Kit > Objects) > Document Prototype
                                LDKO.documentPrototype = prototype;

                                // Return
                                return LDKF.objectPrototypeGetConstructor(prototype)
                            }
                        }
                    })() : undefined;

                    // HTML Document
                    LDKO.htmlDocument = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectPrototypeGetConstructor(LDKFg.windowDocument()) : undefined;
                        // Prototype
                        LDKO.htmlDocumentPrototype = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKO.htmlDocument.prototype : undefined;

                    /* Descriptions */
                        // Document
                            // Prototype
                                // All
                                LDKOd.documentPrototypeAll = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ?
                                    LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "all") || LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlDocumentPrototype, "all") || {get: function all() { return LDKFg.windowDocument(this).all }} :
                                    undefined;

                                // Create Document Fragment
                                LDKOd.documentPrototypeCreateDocumentFragment = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "createDocumentFragment") : undefined;

                                // Create Element
                                LDKOd.documentPrototypeCreateElement = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "createElement") : undefined;

                                // Create Range
                                LDKOd.documentPrototypeCreateRange = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "createRange") : undefined;

                                // Execute Command
                                LDKOd.documentPrototypeExecCommand = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "execCommand") : undefined;

                                // Get Elements by Tag Name
                                LDKOd.documentPrototypeGetElementsByTagName = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "getElementsByTagName") : undefined;

                                // Get Selection
                                LDKOd.documentPrototypeGetSelection = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ?
                                    LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "getSelection") || LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlDocumentPrototype, "getSelection") :
                                    undefined;

                                // Query Command Enabled
                                LDKOd.documentPrototypeQueryCommandEnabled = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "queryCommandEnabled") : undefined;

                                // Query Command Supported
                                LDKOd.documentPrototypeQueryCommandSupported = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "queryCommandSupported") : undefined;

                                // Query Selector
                                LDKOd.documentPrototypeQuerySelector = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "querySelector") : undefined;

                                // Query Selector All
                                LDKOd.documentPrototypeQuerySelectorAll = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "querySelectorAll") : undefined;

                                // Ready State
                                LDKOd.documentPrototypeReadyState = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ?
                                    LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "readyState") || {get: function readyState() { return LDKFg.windowDocument(this).readyState }} :
                                    undefined;

                                // Title
                                LDKOd.documentPrototypeTitle = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "title") : undefined;

                                // Write
                                LDKOd.documentPrototypeWrite = DEVELOPMENT_ENVIRONMENT_IS_BROWSER ? LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype || LDKO.htmlDocumentPrototype, "write") : undefined;

                    // DOM Exception
                    LDKO.domException = (function domException() {
                        // Initialization > DOM Exception
                        var domException;

                        // Error Handling
                        try {
                            /* Logic
                                    [if:else statement]
                            */
                            if (DEVELOPMENT_ENVIRONMENT_IS_BROWSER)
                                // Error
                                LDKF.throwDOMException();

                            else {
                                // Initialization > DOM Exception
                                var domException = LDKF.objectPrototypeGetProperty(GLOBAL_MAIN, "DOMException");

                                // Logic > Return
                                if (LDKFg.functionPrototypeName(domException) == "DOMException" && LDKF.isNativeFunction(domException))
                                    return domException
                            }
                        } catch (error) {
                            // Update > DOM Exception
                            domException = error.constructor
                        }

                        // Return
                        return domException
                    })();

            /* LapysJS */
            console.log("LapysJS", LapysJS);

        /* {Library Pre-Installation Test} Logic
                [if statement]
        */
        if (LIBRARY_PREINSTALLED) {
            // Error
            LDKF.throwError("Library has already been installed");

            // Return
            return 1
        }

        /* {Environment Specifications} Logic
                [if:else if statement]

                --- CHECKPOINT ---
                --- NOTE ---
                    #Lapys: Determine which development environment is being used and
                        prepare the library installation based on that.
        */
        if (DEVELOPMENT_ENVIRONMENT_IS_BROWSER) {}

        else if (DEVELOPMENT_ENVIRONMENT_IS_NODEJS) {}

        else if (DEVELOPMENT_ENVIRONMENT.environments) {
            // Warn
            LDKF.throwWarning("Library could not detect the current development environment");
        }

        // Return
        return 0
    }).apply(this, (function() {
        // Initialization > (Arguments, Development Environment, Global)
        var args = [], DEVELOPMENT_ENVIRONMENT = {
            // Add
            add: function add(environment) {
                // Initialization > Environments
                var environments =  DEVELOPMENT_ENVIRONMENT.environments;

                // Update > Environments
                DEVELOPMENT_ENVIRONMENT.includes(environment) || (environments[environments.length] = environment)
            },

            // Environments
            environments: [],

            // Includes
            includes: function includes(environment) {
                // Initialization > (Environments, Iterator)
                var environments = DEVELOPMENT_ENVIRONMENT.environments,
                    iterator = environments.length;

                // Loop > Logic > Return
                while (iterator)
                    if (environments[iterator -= 1] === environment)
                        return !0;

                // Return
                return !1
            },

            /* (Constructor > Prototype) */
            __proto__: new function DevelopmentEnvironment() {}
        }, GLOBAL = {
            // Add
            add: function add(arg, referenceName) {
                // Modification > Global > Objects
                GLOBAL.objects[referenceName] = arg
            },

            // Define
            define: function define(arg, referenceName) {
                // Logic > Modification > Global > (Defined) Main > Argument
                if (!GLOBAL.definedMain) {
                    GLOBAL.definedMain = !0;
                    GLOBAL.main = arg
                }

                // Global > Add
                GLOBAL.add(arg, referenceName)
            },

            // Defined Main
            definedMain: !1,

            // Main --- NOTE (Lapys) -> The commonly referenced global object.
            main: null,

            // Objects --- NOTE (Lapys) -> Some development environments may contain multiple global objects.
            objects: {},

            /* Value Of */
            valueOf: function valueOf() { return GLOBAL.main },

            /* (Constructor > Prototype) */
            __proto__: new function Global() {}
        };

        /* Logic
                [if:else if:else statement]

                --- NOTE ---
                    #Lapys: Get the global object and return the current development environment as well.
        */
            // {Browser}
            if (typeof window != "undefined") {
                // Development Environment > Add > (...)
                DEVELOPMENT_ENVIRONMENT.add("Browser");

                // Global > Define > (...)
                GLOBAL.define(window, "window");

                // {Electron JS}
                if (
                    "process" in window && (function() {
                        // Error Handling
                        try {
                            // Initialization > Process
                            var process;

                            // Logic > Return
                            if (process = window.process)
                                return "type" in process && process.type && "versions" && process && typeof process.versions["electron"] == "string"
                        } catch (error) {}
                    })()
                ) DEVELOPMENT_ENVIRONMENT.add("Electron JS")
            }

            // {Node JS}
            if (
                typeof global != "undefined" && typeof module != "undefined" && (function() {
                    // Error Handling
                    try {
                        // Logic
                        return global + "" == "[object global]" && global.constructor === ({}).constructor &&
                            typeof module.exports == "object" && module.exports + "" == "[object Object]"
                    } catch (error) {}
                })()
            ) {
                // Development Environment > Add > (...)
                DEVELOPMENT_ENVIRONMENT.add("Node JS");

                // Global > (...)
                GLOBAL.define(global, "global");
                GLOBAL.add(module, "module");

                // Update > Arguments
                args[1] = [DEVELOPMENT_ENVIRONMENT];

                /* Initialization > (Argument Value, Iterator, Length, Index)
                        --- NOTE ---
                            #Lapys: Update the Arguments array.
                */
                var argv = (function() {
                    // Error Handling
                    try {
                        // Logic
                        if ("process" in global) {
                            // Initialization > Process
                            var process = global.process;

                            /* Logic
                                    [if statement]
                            */
                            if (
                                "argv" in process &&
                                typeof process == "object" && process + "" == "[object process]" &&
                                typeof process.__proto__ == "object"
                            ) {
                                // Initialization > Argument Value
                                var argv = process.argv;

                                // Logic > Return
                                if (
                                    typeof argv == "object" && !!argv &&
                                    argv.constructor === [].constructor
                                ) return argv
                            }
                        }
                    } catch (error) {}

                    // Return
                    return []
                })(), iterator = argv.length, length = iterator, index = args[1].length - 1;

                // Loop > Update > Arguments
                while (iterator)
                    args[1][index += 1] = argv[length - (iterator -= 1) - 1]
            }

        // Logic > Update > Arguments
        if (!args.length || !args[0]) {
            args[0] = GLOBAL;
            (args.length > 1) || (args[1] = [DEVELOPMENT_ENVIRONMENT])
        }

        // Return
        return args
    })());
