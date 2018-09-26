/** Function > Main
    @author: Lapys Dev Team
    @description: LapysJS is a code library challenged/ designed to stand out from other code sources using native & simplistic means.
    @version: 0.0.4
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Returns 1 if there`s an error, returns 0 otherwise.

            - Could also be called MinimalistJS.

            - Most of it`s modules are encased within functions.

            - The script is tested in Google Chrome first and made compatible with other browsers after.

            - The library initializes with the idea of all pre-scripted code before it executes
                being vulnerable and subject to unknown changes by the developer,

                but it still trusts the developer to not tamper with natively-defined code before initialization
                and stores a backup of such re-usable code.

            - Over its years of development, the library is still a bare-bones version of what it could be and code could still be improved (innovative re-factoring).

    --- RULES ---
        #Lapys:
            - Invalid Keywords/ Operators:
                -- await -- class -- const -- let -- with
                -- ... -- =>

            - Invalid Objects:
                -- AudioContext -- AudioNode
                -- EventTarget

            - Avoid returning values in `catch` blocks.
            - Must be compatible with 'modern' legacy browsers.
            - Prefix poly-filled properties & methods with the `$` character.
            - Prefix substitute properties/ variables with the `_` character.
            - All external/ sourced script code must be credited to the author and poly-filled.

    --- UPDATE REQUIRED ---
        #Lapys:
            - The following code should not be subject to editing by the developer before script execution:
                -- `Object.create` method.
                -- `Object.defineProperty` method.
                -- `Object.getOwnPropertyDescriptor` method.
                -- `Object.getOwnPropertyDescriptors` method.
                -- `Object.keys` method.
*/
window && (function Main(args) {
    /* Global Data */
        // Author
        var AUTHOR = 'Lapys Dev Team',

        // Description
        DESCRIPTION = 'LapysJS is a code library challenged/ designed to stand out from other code sources using native & simplistic means.',

        // URL
        URL = 'https://www.github.com/LapysDev/LapysJS',

        // Version
        VERSION = '0.0.4',

        /* Hidden
                --- NOTE ---
                    #Lapys:
                        - Represents hidden data.
                        - Sometimes used for invoking a different behavior from a feature.

                --- WARN ---
                    #Lapys: Do not make this public even when in Debug Mode.
        */
        hidden = {},

        // LapysJS Development Kit
        LapysJSDevelopmentKit = {
            /* Allow App Features
                    --- NOTE ---
                        #Lapys:
                            - Allow responsive mobile-application like features to be extended onto the script.
                            - Increases total processing duration by about 30 milliseconds.
            */
            allowAppFeatures: !0,

            /* Components
                    --- NOTE ---
                        #Lapys: Dynamic interfaces.
            */
            components: ['accordion', 'carousel', 'draggable', 'dropdown', 'dynamic-text', 'dynamic-time', 'marquee', 'table', 'toast', 'tooltip'],

            /* Custom Elements
                    --- NOTE ---
                        #Lapys: Feature-based interfaces.
            */
            customElements: ['jumbotron-element'],

            /* Debug Mode
                    --- NOTE ---
                        #Lapys: Allow public access to the LDK.
            */
            debugMode: !1,

            /* Features
                    --- NOTE ---
                        #Lapys: DOM-based features and utilities.
            */
            features: {
                // Active
                active: [],

                // Value Of
                valueOf: function valueOf() { return ['focus-attribute', 'script-attribute'] }
            },

            /* Functions
                    --- NOTE ---
                        #Lapys: Function library.
            */
            functions: {
                // Absolute
                abs: function abs(number) {
                    // Update > Number
                    LDKF.isNumber(number) || (number = LDKF.number(number));

                    // Return
                    return LDKF.isNegativeNumber(number) ? -number : number
                },

                // Add Class To Element
                addClassToElement: function addClassToElement() {
                    // Initialization > (Element, Class (List, Value, Iterator, Length))
                    var element = arguments[0],
                        classList = LDKF.rendArray(arguments, 1),
                        classValue = LDKF.joinStringToArray(LDKF.elementPrototypeGetAttribute(element, 'class') || ''),
                        iterator = 0,
                        length = classList.length;

                    /* Loop
                            Index Class List.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Class Name
                        var className = classList[iterator];

                        /* Logic
                                [if:else statement]
                        */
                        if (LDKF.isArray(className)) {
                            // Initialization > (Class Name) (Iterator, Length)
                            var classNameIterator = 0,
                                classNameLength = className.length;

                            /* Loop
                                    Index Class Name.

                                > Update > Class Name
                            */
                            for (classNameIterator; classNameIterator != classNameLength; classNameIterator += 1)
                                LDKF.isInArray(classValue, className[classNameIterator]) || (classValue[classValue.length] = className[classNameIterator])
                        }

                        else
                            // Update > Class Name
                            LDKF.isInArray(classValue, className) || (classValue[classValue.length] = className)
                    }

                    // Modification > Element > Class
                    LDKF.elementPrototypeSetAttribute(element, 'class', classValue = LDKF.joinArrayToString(classValue, ' '));

                    // Return
                    return classValue
                },

                // Add Event To Node
                addEventToNode: function addEventToNode(node, type, listener, options) {
                    // Return
                    return LDKO.addEvent.call(node, LDKO.addEvent === LDKO.windowPrototype.attachEvent ? 'on' + LDKF.string(type) : type, listener, options || !1)
                },

                /* Alphabetize String
                        --- NOTE ---
                            #Lapys:
                                - Remove all non-alphabet characters from a string.
                                - One quirk of this function and it`s siblings is that it also removes white-spaces.
                */
                alphabetizeString: function alphabetizeString(string) {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = 0,
                        length = string.length,
                        stream = '';

                    /* Loop
                            Iterate through String.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Character
                        var character = string[iterator];

                        // Update > Stream
                        LDKF.isAlphabet(character) && (stream += character)
                    }

                    // Return
                    return stream
                },

                /* Build Array
                        --- NOTE ---
                            #Lapys: Update all an array`s numerically keyed items with a function.
                */
                buildArray: function buildArray(array, build) {
                    // Initialization > Iterator
                    var iterator = array.length;

                    /* Loop
                            Index Array.
                    */
                    while (iterator) {
                        // Initialization > Item
                        var item = array[iterator -= 1];

                        // Error Handling > Update > Array
                        try { array[iterator] = build.call(array, item, {previousValue: array[iterator - 1], nextValue: array[iterator + 1]}) }
                        catch (error) { array[iterator] = error }
                    }

                    // Return
                    return array
                },

                // Camel String
                camelString: function camelString(string) {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = 1,
                        length = string.length,
                        stream = LDKF.upperStringChar(string[0]);

                    /* Loop
                            Iterate through String.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > (Previous) Character
                        var character = string[iterator],
                            previousCharacter = string[iterator - 1];

                        // Update > Stream
                        stream += previousCharacter && LDKF.isAlphabet(character) && !LDKF.isAlphabet(previousCharacter) ? LDKF.upperStringChar(character) : character
                    }

                    // Return
                    return stream
                },

                /* Character Code At String
                        --- NOTE ---
                            #Lapys:
                                - A crude fallback to the `String.prototype.charCodeAt` method.
                                - The method `charCodeAtString` will evolve with more characters over time.
                */
                charCodeAtString: function charCodeAtString(string, index) {
                    // Initialization > Character
                    var character = string[index],
                        code;

                    /* Logic
                            [switch:case statement]

                        --- NOTE ---
                            #Lapys: Test for `[\s\w]` regular expression characters only.

                        > Return
                    */
                    switch (character) {
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
                        case 'Z': return 90; break; case 'z': return 122
                    }

                    // Return
                    return 0 / 0
                },

                /* Clear Interval
                        --- NOTE ---
                            #Lapys: Use the `LapysJSDevelopmentKit.random.intervals` object to reference already existing intervals.
                */
                clearInterval: function clearInterval() {
                    // Initialization > (Interval ID, Interval)
                    var intervalID = arguments[0],
                        iterator = LapysJSDevelopmentKit.random.intervals.length;

                    /* Loop
                            Index (LapysJS Development Kit > Random > Intervals)
                    */
                    while (iterator) {
                        // Update > Iterator
                        iterator -= 1;

                        /* Logic
                                [if statement]
                        */
                        if (iterator == intervalID) {
                            // Update > (LapysJS Development Kit > Random > Intervals)
                            LapysJSDevelopmentKit.random.intervals[iterator] = !1;

                            // Break
                            break
                        }
                    }
                },

                // Clear Timeout
                clearTimeout: function clearTimeout() {
                    // Return
                    return LapysJSDevelopmentKit.objects.clearTimeout.apply(window, arguments)
                },

                /* Copy in Array
                        --- NOTE ---
                            #Lapys: Detect if an array has a duplicate item.
                */
                copyInArray: function copyInArray(array) {
                    // Initialization > (Iterator, Index)
                    var iterator = array.length,
                        index = [];

                    /* Loop
                            Index Array.
                    */
                    while (iterator) {
                        // Initialization > Item
                        var item = array[iterator -= 1];

                        /* Logic
                                [if:else statement]
                        */
                        if (LDKF.isInArray(index, item))
                            // Return
                            return !0

                        else
                            // Update > Index
                            index[iterator] = item
                    }

                    // Return
                    return !1
                },

                // Count Character String
                countCharString: function countCharString(string, match) {
                    // Initialization > (Count, Iterator, Length)
                    var count = 0,
                        iterator = 0,
                        length = string.length;

                    /* Loop
                            Iterate through String.
                    */
                    for (iterator; iterator < length; iterator += 1) {
                        // Initialization > (Match (Iterator, Length), Decremented Match Length)
                        var matchIterator = 0,
                            matchLength = match.length,
                            decrementedMatchLength = matchLength - 1;

                        /* Logic
                                [if:else statement]
                        */
                        if (string[iterator] == match)
                            // Update > Count
                            count += 1;

                        else
                            /* Loop
                                    Iterate through Match.
                            */
                            for (matchIterator; matchIterator != matchLength; matchIterator += 1)
                                /* Logic
                                        [if:else if statement]
                                */
                                if (string[iterator + matchIterator] != match[matchIterator])
                                    // Break
                                    break;

                                else if (matchIterator == decrementedMatchLength) {
                                    // Update > (Count, Iterator)
                                    count += 1;
                                    iterator += decrementedMatchLength;

                                    // Break
                                    break
                                }
                    }

                    // Return
                    return count
                },

                // Create Element
                createElement: function createElement(tagName, selector, html, properties) {
                    // Initialization > Length
                    var length = arguments.length;

                    /* Logic
                            [if:else statement]
                    */
                    if (length) {
                        // Error
                        LDKF.isString(tagName) || LDKF.throwError('createElement', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'string'));

                        // Update > (Selector, HTML)
                        (length > 1) || (selector = '');
                        (length > 2) || (html = '');

                        // Update > Tag Name
                        tagName = LDKF.trimString(tagName);

                        /* Logic
                                [switch:case statement]
                        */
                        switch (tagName) {
                            // [Random]
                            case '*': tagName = LDKR.tagNames[LDKF.int(LDKF.random() * LDKR.tagNames.length)]
                        }

                        // Initialization > Element
                        var element = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), tagName);

                        // (LapysJS Development Kit > Functions) > Set Selector On Element > Element
                        selector && LDKF.setSelectorOnElement(element, selector);

                        // Modification > Element > Inner HTML
                        html && LDKF.set.elementPrototypeInnerHTML(element, html);

                        // (LapysJS Development Kit > Functions) > Iterate Object > Properties
                        properties && LDKF.iterateObject(LDKF.object(properties), function(key, value, description) {
                            // Modification > Element > [Key]
                            LDKF.objectDefineProperty(element, key, description)
                        });

                        // Return
                        return element
                    }

                    else
                        // Error
                        LDKF.throwError('createElement', 'argument', [1, 0])
                },

                // Debug Message
                debugMessage: function debugMessage() {
                    // Initialization > (Length, Stack Set, Option, Description, Is Alphabet)
                    var length = arguments.length,
                        stackSet = arguments[0],
                        option = length > 1 ? arguments[1] : [],
                        description = length > 2 ? arguments[2] : [],
                        isAlphabet = LDKF.isAlphabet;

                    /* Logic
                            [if statement]
                    */
                    if (length) {
                        // Initialization > Message
                        var message = '';

                        // Error
                        (length == 1) && LDKF.throwError(debugMessage('debugMessage', 'argument', [2, 0]));

                        // Update > (Description, Option, Stack Set)
                        LDKF.isArray(description) || (description = [LDKF.string(description)]);
                        LDKF.isArray(option) || (option = [LDKF.string(option)]);
                        LDKF.isArray(stackSet) || (stackSet = [LDKF.string(stackSet)]);

                        // Function
                            // Is Vowel
                            function isVowel(character) {
                                // Return
                                return character == 'a' || character == 'A' ||
                                    character == 'e' || character == 'E' ||
                                    character == 'i' || character == 'I' ||
                                    character == 'o' || character == 'O' ||
                                    character == 'u' || character == 'U'
                            }

                            // Join
                            function join(list, separator, end) {
                                // Update > List
                                LDKF.isArray(list) || (list = [list]);

                                // Initialization > (Iterator, (Pre) (Decremented) Length, Stream)
                                var iterator = 0,
                                    length = list.length,
                                    decrementedLength = length - 1,
                                    preDecrementedLength = decrementedLength - 1,
                                    stream = '';

                                /* Logic
                                        [if:else if:Else statement]
                                */
                                if (list.length == 1)
                                    // Update > Stream
                                    stream = LDKF.string(list[0]);

                                else if (list.length == 2)
                                    // Update > Stream
                                    stream = LDKF.string(list[0]) + ' ' + end + ' ' + LDKF.string(list[1]);

                                else
                                    /* Loop
                                            Index List.

                                        > Update > Stream
                                    */
                                    for (iterator; iterator != length; iterator += 1)
                                        stream += LDKF.string(list[iterator]) + (iterator == preDecrementedLength ? ' ' + end + ' ' : (iterator == decrementedLength ? '' : separator + ' '));

                                // Return
                                return stream
                            }

                        /* Logic
                                [switch:case statement]
                        */
                        switch (option[0]) {
                            // Argument
                            case 'argument':
                                // Update > Message
                                message = "Failed to execute '" + LDKF.string(stackSet[0]) + "'" + (stackSet.length == 1 ? "" : " on '" + stackSet[1] + "'") +
                                    (description.length ? ": " + (option[1] == "required" ? "only " + join(description, ",", "or") + " argument(s) required" : (description.length == 1 ? description[0] : description[0] + " argument(s) required, but only " + description[1] + " present")) : "");
                                break;

                            // Must
                            case 'must':
                                // Update > Message
                                message = stackSet[0] + ' must ' + (option[1] == 'a' || option[1] == 'an' ? 'be ' + (isVowel((function(string) {
                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                    var allowStream = !1,
                                        iterator = 0,
                                        length = string.length,
                                        stream = '';

                                    /* Loop
                                            Iterate through String.
                                    */
                                    for (iterator; iterator != length; iterator += 1) {
                                        // Initialization > Character
                                        var character = string[iterator];

                                        /* Update > (Allow) Stream
                                                --- NOTE ---
                                                    #Lapys: The stream contains only the alphabetical characters of the String.
                                        */
                                        (!allowStream && isAlphabet(character)) && (allowStream = !0);
                                        allowStream && (stream += character)
                                    }

                                    // Return
                                    return stream[0]
                                })(description[0])) ? 'an' : 'a') : '') + (option.length == 1 ? '' : ' ') + join(description, ',', 'or');
                                break;

                            // Not
                            case 'not':
                                // Update > Message
                                message = stackSet[0] + ' is not ' + (option[1] == 'a' || option[1] == 'an' ? (isVowel((function(string) {
                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                    var allowStream = !1,
                                        iterator = 0,
                                        length = string.length,
                                        stream = '';

                                    /* Loop
                                            Iterate through String.
                                    */
                                    for (iterator; iterator != length; iterator += 1) {
                                        // Initialization > Character
                                        var character = string[iterator];

                                        /* Update > (Allow) Stream
                                                --- NOTE ---
                                                    #Lapys: The stream contains only the alphabetical characters of the String.
                                        */
                                        (!allowStream && isAlphabet(character)) && (allowStream = !0);
                                        allowStream && (stream += character)
                                    }

                                    // Return
                                    return stream[0]
                                })(description[0])) ? 'an' : 'a') : '') + (option.length == 1 ? '' : ' ') + join(description, ',', 'or');
                                break;

                            // Only
                            case 'only':
                        }

                        // Return
                        return message
                    }

                    // Return
                    return ''
                },

                /* Decode URI Component
                        --- WARN ---
                            #Lapys: Used to encode the URI Error.
                */
                decodeURIComponent: window.decodeURIComponent,

                // Delete Event From Node
                delEventFromNode: function delEventFromNode(node, type, listener, options) {
                    // Return
                    return LDKO.delEvent.call(node, LDKO.delEvent === LDKO.windowPrototype.dettachEvent ? 'on' + LDKF.string(type) : type, listener, options || !1)
                },

                // Digitize String
                digitizeString: function digitizeString(string) {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = 0,
                        length = string.length,
                        stream = '';

                    /* Loop
                            Iterate through String.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Character
                        var character = string[iterator];

                        // Update > Stream
                        LDKF.isDigit(character) && (stream += character)
                    }

                    // Return
                    return stream
                },

                // Error
                error: function error(message) {
                    // Initialization > Error Constructor
                    var errorConstructor = LDKO.error;

                    // Update > Message
                    arguments.length || (message = '');

                    /* Logic
                            [if:else statement]
                    */
                    if (LDKR.classKeywordValid) {
                        // Initialization > Error (Object, Type)
                        var errorObject,
                            errorType = 'LapysJS.tmp.LDKO.';

                        // Modification > LapysJS > (LapysJS Development Kit > Objects)
                        LapysJS.tmp.LDKO = LDKO;

                        /* Logic
                                [if:else statement]
                        */
                        if (LDKF.isError(message)) {
                            /* Logic
                                    [switch:case:default statement]
                            */
                            switch (message.constructor) {
                                // DOM Error
                                case LDKO.domError: errorType += 'domError'; break;

                                // DOM Exception
                                case LDKO.domException: errorType += 'domException'; break;

                                // Evaluation Error
                                case LDKO.evalError: errorType += 'evalError'; break;

                                // Media Error
                                case LDKO.mediaError: errorType += 'mediaError'; break;

                                // Over-Constrained Error
                                case LDKO.overconstrainedError: errorType += 'overconstrainedError'; break;

                                // Range Error
                                case LDKO.rangeError: errorType += 'rangeError'; break;

                                // Reference Error
                                case LDKO.referenceError: errorType += 'referenceError'; break;

                                // Syntax Error
                                case LDKO.syntaxError: errorType += 'syntaxError'; break;

                                // Type Error
                                case LDKO.typeError: errorType += 'typeError'; break;

                                // URI Error
                                case LDKO.uriError: errorType += 'uriError'; break;

                                // [Default]
                                default: errorType += 'error'
                            }

                            // Update > Message
                            message = message.message
                        }

                        else {
                            // Update > (Error Type, Message)
                            errorType += 'error';
                            message = LDKF.string(message)
                        }

                        // Update > Error Object
                        errorObject = LDKO.eval("new (class LapysJSError extends " + errorType + " {})('" + (function(message) {
                            // Initialization > (Iterator, Length, Stream)
                            var iterator = 0,
                                length = message.length,
                                stream = '';

                            /* Loop
                                    Iterate through Message.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > Character
                                var character = message[iterator];

                                // Update > Stream
                                stream += character == "'" ? "\\'" : character;
                            }

                            // Return
                            return stream
                        })(message) + "')");

                        // Deletion
                        delete LapysJS.tmp.LDKO;

                        // Modification > (LapysJS Development Kit > Objects) > LapysJS Error
                        LDKO.lapysJSError || (LDKO.lapysJSError = errorObject.constructor);

                        // Return
                        return errorObject
                    }

                    else {
                        // Update > Message
                        message = LDKF.isError(message) ? message.message : LDKF.string(message);

                        // Function > LapysJS Error
                        function LapysJSError() { return errorConstructor.apply(this, arguments) };

                        // Initialization > Error Object
                        var errorObject;

                        /* Error Handling > Update > Error Object
                                --- NOTE ---
                                    #Lapys: Internet Explorer 9 states that using the `new` keyword
                                        does not support the Error Object being updated.
                        */
                        try { errorObject = new LapysJSError.apply(this, arguments) }
                        catch (error) { errorObject = LapysJSError.apply(this, arguments) }

                        // Modification > Error Object > (Constructor > Prototype)(> Constructor)
                        errorObject.__proto__ = Object.create(errorConstructor.prototype);
                        errorObject.__proto__.constructor = LapysJSError;

                        // Modification > (LapysJS Development Kit > Objects) > LapysJS Error
                        LDKO.lapysJSError || (LDKO.lapysJSError = errorObject.constructor);

                        // Return
                        return errorObject
                    }
                },

                // Exponent
                exp: function exp() {
                    // Return
                    return LDKF.pow(LDKO.E, arguments[0])
                },

                // Filter Array
                filterArray: function filterArray(array, match) {
                    // Initialization > (Filter, Iterator, Length)
                    var filter = [],
                        iterator = 0,
                        length = array.length;

                    /* Loop
                            Index Array.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Item
                        var item = array[iterator];

                        // Update > Filter
                        match.call(array, item) && (filter[filter.length] = item)
                    }

                    // Return
                    return filter
                },

                /* Get
                        --- NOTE ---
                            #Lapys: Library of query functions.

                        --- WARN ---
                            #Lapys: Do not redefine.
                */
                get: {},

                // Get After Character String
                getAfterCharString: function getAfterCharString(string, character, index) {
                    // Initialization > (Count, Iterator, Length, Match (Count), Stream)
                    var count = 0,
                        iterator = 0,
                        length = string.length,
                        match = character,
                        matchCount = LDKF.countCharString(string, match),
                        stream = '';

                    // Update > Index
                    (index == 'first') && (index = 0);
                    (index == 'last') && (index = matchCount - 1);
                    (index < 0) && (index -= 1);
                    arguments.length > 2 ? index += 1 : index = 1;

                    /* Logic
                            [if:else statement]
                    */
                    if (LDKF.isInString(string, match))
                        /* Logic
                                [if:else statement]
                        */
                        if (index > matchCount || index < 0 || !LDKF.isSafeNumber(index))
                            // Return
                            return stream;

                        else {
                            /* Loop
                                    Iterate through String.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > (Character, Match (Iterator, Length), Decremented Match Length)
                                var character = string[iterator],
                                    matchIterator = 0,
                                    matchLength = match.length,
                                    decrementedMatchLength = matchLength - 1;

                                /* Logic
                                        [if:else statement]
                                */
                                if (count == index)
                                    // Update > Stream
                                    stream += character;

                                else
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (character == match)
                                        // Update > Count
                                        count += 1;

                                    else
                                        /* Loop
                                                Iterate through Match.
                                        */
                                        for (matchIterator; matchIterator != matchLength; matchIterator += 1)
                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (string[iterator + matchIterator] != match[matchIterator])
                                                // Break
                                                break;

                                            else if (matchIterator == decrementedMatchLength) {
                                                // Update > (Count, Iterator)
                                                count += 1;
                                                iterator += decrementedMatchLength;

                                                // Break
                                                break
                                            }
                            }

                            // Return
                            return stream
                        }

                    else
                        // Return
                        return stream
                },

                /* Get Array Copies
                        --- NOTE ---
                            #Lapys: Return all duplicated items from the array in a new array.
                */
                getArrayCopies: function getArrayCopies(array) {
                    // Initialization > (Copies, Frequencies, Iterator, Length)
                    var copies = [],
                        frequencies = LDKF.getArrayFrequencies(array),
                        iterator = 0,
                        length = frequencies.length;

                    /* Loop
                            Index Frequencies.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Frequency
                        var frequency = frequencies[iterator];

                        // Update > Copies
                        (frequency.frequency == 1) || (copies[copies.length] = frequency.item)
                    }

                    // Return
                    return copies
                },

                // Get Array Frequencies
                getArrayFrequencies: function getArrayFrequencies(array) {
                    // Initialization > (Frequencies, Values, Iterator, Length)
                    var frequencies = [],
                        values = []
                        iterator = array.length,
                        length = iterator - 1;

                    /* Loop
                            Index Array.
                    */
                    while (iterator) {
                        // Initialization > Item
                        var item = array[length - (iterator -= 1)];

                        /* Logic
                                [if:else statement]
                        */
                        if (LDKF.isInArray(values, item)) {
                            // Initialization > Frequency Iterator
                            var frequencyIterator = frequencies.length;

                            /* Loop
                                    Index Frequencies.
                            */
                            while (frequencyIterator) {
                                // Initialization > Frequency
                                var frequency = frequencies[frequencyIterator -= 1];

                                // Modification > Frequency > Frequency
                                (frequency.item === item) && (frequency.frequency += 1)
                            }
                        }

                        else
                            // Update > Frequencies
                            frequencies[frequencies.length] = {frequency: 1, item: values[values.length] = item}
                    }

                    return frequencies
                },

                /* Get Array Mode
                        --- NOTE ---
                            #Lapys: Returns the highest occurring element in an array.
                */
                getArrayMode: function getArrayMode(array) {
                    // Initialization > (Frequencies, Iterator, Length, Maximum Frequency, Mode)
                    var frequencies = LDKF.getArrayFrequencies(array),
                        iterator = frequencies.length,
                        length = iterator - 1,
                        maxFrequency = (frequencies[0] || {}).frequency,
                        mode = [];

                    /* Loop
                            Index Frequencies.
                    */
                    while (iterator) {
                        // Initialization > Frequency
                        var frequency = frequencies[iterator -= 1].frequency;

                        // Update > Maximum Frequency
                        (maxFrequency < frequency) && (maxFrequency = frequency)
                    }

                    // Update > Iterator
                    iterator = frequencies.length;

                    /* Loop
                            Index Frequencies.
                    */
                    while (iterator) {
                        // Initialization > Frequency
                        var frequency = frequencies[length - (iterator -= 1)];

                        // Update > Mode
                        (frequency.frequency == maxFrequency) && (mode[mode.length] = frequency.item)
                    }

                    // Return
                    return mode.length > 1 ? null : mode[0]
                },

                /* Get Array Reverse Mode
                        --- NOTE ---
                            #Lapys:
                                - No idea what the opposite of a mathematical mode is called.
                                - Returns the least occurring element in an array.
                */
                getArrayRMode: function getArrayRMode(array) {
                    // Initialization > (Frequencies, Iterator, Length, Minimum Frequency, Reverse Mode)
                    var frequencies = LDKF.getArrayFrequencies(array),
                        iterator = frequencies.length,
                        length = iterator - 1,
                        minFrequency = (frequencies[0] || {}).frequency,
                        rmode = [];

                    /* Loop
                            Index Frequencies.
                    */
                    while (iterator) {
                        // Initialization > Frequency
                        var frequency = frequencies[iterator -= 1].frequency;

                        // Update > Minimum Frequency
                        (minFrequency > frequency) && (minFrequency = frequency)
                    }

                    // Update > Iterator
                    iterator = frequencies.length;

                    /* Loop
                            Index Frequencies.
                    */
                    while (iterator) {
                        // Initialization > Frequency
                        var frequency = frequencies[length - (iterator -= 1)];

                        // Update > Reverse Mode
                        (frequency.frequency == minFrequency) && (rmode[rmode.length] = frequency.item)
                    }

                    // Return
                    return rmode.length > 1 ? null : rmode[0]
                },

                // Get Before Character String
                getBeforeCharString: function getBeforeCharString(string, character, index) {
                    // Initialization > (Count, Iterator, Length, Match (Count), Stream)
                    var count = 0,
                        iterator = 0,
                        length = string.length,
                        match = character,
                        matchCount = LDKF.countCharString(string, match),
                        stream = '';

                    // Update > Index
                    (index == 'first') && (index = 0);
                    (index == 'last') && (index = matchCount - 1);
                    (index < 0) && (index -= 1);
                    arguments.length > 2 ? index += 1 : index = 1;

                    /* Logic
                            [if:else statement]
                    */
                    if (LDKF.isInString(string, match))
                        /* Logic
                                [if:else statement]
                        */
                        if (index > matchCount || index < 0 || !LDKF.isSafeNumber(index))
                            // Return
                            return string;

                        else {
                            /* Loop
                                    Iterate through String.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > (Character, Match (Iterator, Length), Decremented Match Length)
                                var character = string[iterator],
                                    matchIterator = 0,
                                    matchLength = match.length,
                                    decrementedMatchLength = matchLength - 1;

                                /* Logic
                                        [if:else statement]
                                */
                                if (character == match)
                                    // Update > Count
                                    count += 1;

                                else
                                    /* Loop
                                            Iterate through Match.
                                    */
                                    for (matchIterator; matchIterator != matchLength; matchIterator += 1)
                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (string[iterator + matchIterator] != match[matchIterator])
                                            // Break
                                            break;

                                        else if (matchIterator == decrementedMatchLength) {
                                            // Update > (Count, Iterator)
                                            count += 1;
                                            iterator += decrementedMatchLength;

                                            // Break
                                            break
                                        }

                                // Logic > Break
                                if (count == index)
                                    break;

                                // Update > Stream
                                stream += character
                            }

                            // Return
                            return stream
                        }

                    else
                        // Return
                        return string
                },

                // Get Computed Style
                getComputedStyle: function getComputedStyle(element) {
                    // Return
                    return LDKO.getComputedStyle.call(window, element)
                },

                // Get Object Depth
                getObjectDepth: function getObjectDepth(object) {
                    // Initialization > Depth
                    var depth = 0;

                    /* Logic
                            [if statement]
                    */
                    if (LDKF.isConstructible(object)) {
                        // Initialization > (Constructor, Prototype, Indexed, Tree)
                        var constructor = object.constructor,
                            prototype = object.__proto__,
                            indexed = [],
                            tree = [];

                        // Function
                            // Match
                            function match(value) {
                                // Error Handling > Return
                                try { return value.constructor === constructor && value.__proto__ === prototype }
                                catch (error) {}

                                // Return
                                return !1
                            }

                            // Recur
                            (function recur(subObject, subTree, subDepth) {
                                /* Update > Depth
                                        --- NOTE ---
                                            #Lapys: Update the Depth.
                                */
                                (depth < subDepth) && (depth = subDepth);

                                // ((LapysJS Development Kit > Functions) > Iterate Object) > Sub Object
                                LDKF.iterateObject(subObject, function(key, value, description) {
                                    /* Logic
                                            [if statement]

                                            --- NOTE ---
                                                #Lapys: Updating the Indexed with the Value prevents infinite recursion,
                                                    somewhat...

                                            > Update > (Sub Tree, Indexed)
                                    */
                                    if (!LDKF.isInArray(indexed, value) && (description && !('get' in description))) {
                                        subTree[subTree.length] = {dive: match(value), value: value};
                                        indexed[indexed.length] = value
                                    }
                                }, function(key, value, description, iteratorObject) {
                                    /* Logic
                                            [if statement]

                                            --- NOTE ---
                                                #Lapys: If the object contains itself.
                                    */
                                    if (object === value) {
                                        // Update > (Depth, Sub Tree)
                                        depth = LDKO.infinity;
                                        subTree = [];

                                        // Return
                                        return !1
                                    }

                                    // Return
                                    return subObject === iteratorObject
                                }, !0);

                                // Initialization > (Iterator, Length)
                                var iterator = 0,
                                    length = subTree.length;

                                /* Loop
                                        Index Sub Tree.

                                        --- NOTE ---
                                            #Lapys: Index the current branch tree.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > Branch
                                    var branch = subTree[iterator];

                                    /* Recur
                                            --- NOTE ---
                                                #Lapys:
                                                    - Update the Depth.
                                                    - Should we recursively dive into this branch?
                                    */
                                    branch.dive && recur(branch.value, [], subDepth + 1)
                                }
                            })(object, tree, depth += 1)
                    }

                    // Return
                    return depth
                },

                // Get Prototypes
                getPrototypes: function getPrototypes(object) {
                    /* Logic
                            [if statement]
                    */
                    if (LapysJSDevelopmentKit.functions.isConstructible(object)) {
                        // Initialization > Prototype(s)
                        var proto = object.__proto__,
                            protos = [proto];

                        // Loop > Update > Prototypes
                        while (proto.__proto__)
                            protos[protos.length] = (proto = proto.__proto__);

                        // Return
                        return protos
                    }

                    // Return
                    return null
                },

                /* Get Regular Expression Characters
                        --- NOTE ---
                            #Lapys: Mostly used to determine which characters in a string have
                                meaning in a regular expression match.
                */
                getRegexChars: function getRegexChars(string) {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = 0,
                        length = string.length,
                        stream = [];

                    /* Loop
                            Iterate through String.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > (Next) Character
                        var character = string[iterator],
                            nextCharacter = string[iterator + 1];

                        /* Logic
                                [if:else if statement]
                        */
                        if (character == '\\' && (nextCharacter == 'b' || nextCharacter == 'B' || nextCharacter == 'c' || nextCharacter == 'd' || nextCharacter == 'D' || nextCharacter == 'f' || nextCharacter == 'n' || nextCharacter == 'r' || nextCharacter == 's' || nextCharacter == 'S' || nextCharacter == 't' || nextCharacter == 'v' || nextCharacter == 'w' || nextCharacter == 'W' || nextCharacter == '0' || nextCharacter == 'x' || nextCharacter == 'u')) {
                            // Initialization > Slice
                            var slice = character + nextCharacter;

                            // Update > Stream
                            LDKF.isInArray(stream, slice) || (stream[stream.length] = slice)
                        }

                        else if (character == '\\' || character == '^' || character == '$' || character == '*' || character == '+' || character == '?' || character == '.' || character == '(' || character == ':' || character == '=' || character == '!' || character == '|' || character == '{' || character == ',' || character == '[')
                            // Update > Stream
                            LDKF.isInArray(stream, character) || (stream[stream.length] = character)
                    }

                    // Return
                    return stream
                },

                /* Join Array To String
                        --- NOTE ---
                            #Lapys: Convert arrays to character separated strings.
                */
                joinArrayToString: function joinArrayToString(array) {
                    // Initialization > (String, Iterator, (Decremented) Length, (Separator) (Is Function, String))
                    var string = '',
                        iterator = 0,
                        length = array.length,
                        decrementedLength = length - 1,
                        separator = arguments.length > 1 ? arguments[1] : ', ',
                        separatorIsFunction = LDKF.isFunction(separator),
                        separatorString = LDKF.string(separator);

                    /* Loop
                            Index Array.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Item
                        var item = array[iterator];

                        // Update > String
                        string += separatorIsFunction ? separator.call(array, item, iterator) : (iterator == decrementedLength ? item : item + separatorString)
                    }

                    // Return
                    return string
                },

                /* Join String To Array
                        --- NOTE ---
                            #Lapys: Convert character separated strings to arrays.
                */
                joinStringToArray: function joinStringToArray(string) {
                    // Initialization > (Array, Iterator, Length, Index, Separator)
                    var array = [],
                        iterator = 0,
                        length = string.length,
                        index = 0,
                        separator = arguments.length > 1 ? LDKF.string(arguments[1]) : ' ';

                    /* Logic
                            [if:else statement]
                    */
                    if (separator)
                        /* Loop
                                Iterate through String.
                        */
                        for (iterator; iterator != length; iterator += 1) {
                            // Initialization > Character
                            var character = string[iterator];

                            // Update > (Array, Index)
                            array[index] || (array[index] = '');
                            (character == separator) || (array[index] += character);
                            (character == separator) && (!index || array[index - 1]) && (index += 1)
                        }

                    else {
                        // Update > Index
                        index = -1;

                        // Loop > Update > Array
                        for (iterator; iterator != length; iterator += 1)
                            array[index += 1] = string[iterator]
                    }

                    // Return
                    return array
                },

                /* Internal Multiplication
                        --- NOTE ---
                            #Lapys:
                                - Responsible for C-like 32-bit multiplication.
                                - Credit to MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill)
                */
                imul: function imul(a, b) {var c=(a>>>16)&0xFFFF,d=a&0xFFFF,e=(b>>>16)&0xFFFF,f=b&0xFFFF;return((d*f)+(((c*f+d*e)<<16)>>>0)|0)},

                // Index Of String
                indexOfString: function indexOfString(string, match) {
                    // Initialization > (Iterator, Length)
                    var iterator = 0,
                        length = string.length;

                    /* Loop
                            Iterate through String.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Character
                        var character = string[iterator];

                        /* Logic
                                [if:else statement]
                        */
                        if (character == match)
                            // Return
                            return iterator;

                        else {
                            // Initialization > Match (Iterator, Length)
                            var matchIterator = 0,
                                matchLength = match.length;

                            /* Loop
                                    Iterate through Match.
                            */
                            for (matchIterator; matchIterator != matchLength; matchIterator += 1)
                                /* Logic
                                        [if:else if statement]
                                */
                                if (string[iterator + matchIterator] != match[matchIterator])
                                    // Break
                                    break;

                                else if (matchIterator == matchLength - 1)
                                    // Return
                                    return iterator
                        }
                    }

                    // Return
                    return -1
                },

                /* Integer
                        --- NOTE ---
                            #Lapys:
                                - The following cryptic hacks can be implemented as well.
                                    -- ~~x -- x >> 0 -- x | 0 -- x & -1 -- x ^ 0
                                        where x = number

                                - This function should be able to handle larger numbers as well by stringifying them.
                */
                int: function integer(number) {
                    // Initialization > Integer
                    var int = LDKF.isNumber(number) ? number | 0 : (number = LDKF.number(number)) | 0;

                    /* Logic
                            [if statement]

                            --- NOTE ---
                                #Lapys: If the expected integer result is incorrect.
                    */
                    if (int < number - 1 || int > number + 1) {
                        // Initialization > (String, Iterator, Length, (Allow) Stream)
                        var allowStream = !0,
                            string = LDKF.string(number),
                            iterator = 0,
                            length = string.length,
                            stream = '';

                        /* Loop
                                Iterate through String.
                        */
                        for (iterator; iterator != length; iterator += 1) {
                            // Initialization > Digit
                            var digit = string[iterator];

                            /* Logic
                                    [if:else if statement]

                                > Update > Allow Stream
                            */
                            if (digit == '.')
                                allowStream = !1;

                            else if (digit == 'e' || digit == 'f' || digit == 'F' || digit == 'x' || digit == '+' || digit == '-')
                                allowStream = !0;

                            // Update > Stream
                            allowStream && (stream += digit)
                        }

                        // Return
                        return +stream
                    }

                    // Return
                    return int
                },

                /* Is Alphabet
                        --- NOTE ---
                            #Lapys: Brute-force method to avoid using volatile `String` properties.
                */
                isAlphabet: function isAlphabet(character) {
                    // Return
                    return character == 'a' || character == 'A' ||
                        character == 'b' || character == 'B' ||
                        character == 'c' || character == 'C' ||
                        character == 'd' || character == 'D' ||
                        character == 'e' || character == 'E' ||
                        character == 'f' || character == 'F' ||
                        character == 'g' || character == 'G' ||
                        character == 'h' || character == 'H' ||
                        character == 'i' || character == 'I' ||
                        character == 'j' || character == 'J' ||
                        character == 'k' || character == 'K' ||
                        character == 'l' || character == 'L' ||
                        character == 'm' || character == 'M' ||
                        character == 'n' || character == 'N' ||
                        character == 'o' || character == 'O' ||
                        character == 'p' || character == 'P' ||
                        character == 'q' || character == 'Q' ||
                        character == 'r' || character == 'R' ||
                        character == 's' || character == 'S' ||
                        character == 't' || character == 'T' ||
                        character == 'u' || character == 'U' ||
                        character == 'v' || character == 'V' ||
                        character == 'w' || character == 'W' ||
                        character == 'x' || character == 'X' ||
                        character == 'y' || character == 'Y' ||
                        character == 'z' || character == 'Z'
                },

                // Is Array
                isArray: function isArray(arg) {
                    // Error Handling
                    try {
                        // Return
                        return typeof arg == 'object' && !arg.__proto__.__proto__.__proto__ && arg.constructor === LDKO.array
                    } catch (error) {}

                    // Return
                    return !1
                },

                // Is Array-Like
                isArrayLike: function isArrayLike(arg) {
                    // Return
                    return LDKF.isArray(arg) || LDKF.isStrictlyArrayLike(arg)
                },

                /* Is Arrow Function
                        --- NOTE ---
                            #Lapys: Of course, simply searching for the `function` keyword in
                                the function`s source code would`ve worked as well.
                */
                isArrowFunction: function isArrowFunction(arg) {
                    /* Logic
                            [if statement]
                    */
                    if (LDKF.isFunction(arg)) {
                        // Initialization > (Allow Stream, Code, Iterator, Length, Stream Lock, Within Parameters)
                        var allowStream = !0,
                            code = LDKF.string(arg),
                            iterator = 0,
                            length = code.length,
                            streamLock,
                            withinParameters = 0;

                        /* Loop
                                Iterate through Code.
                        */
                        for (iterator; iterator != length; iterator += 1) {
                            // Initialization > (Next) Character
                            var character = code[iterator],
                                nextCharacter = code[iterator + 1];

                            /* Logic
                                    [if:else if statement]
                            */
                            if (allowStream) {
                                /* Logic
                                        [if:else if statement]

                                        --- WARN ---
                                            #Lapys: Ignore comments & strings.

                                    > Update > (Allow Stream, Stream Lock)
                                */
                                if (character == '"' || character == "'") {
                                    allowStream = !1;
                                    streamLock = character
                                }

                                else if (character == '/' && nextCharacter == '/') {
                                    allowStream = !1;
                                    streamLock = 'single-line-comment'
                                }

                                else if (character == '/' && nextCharacter == '*') {
                                    allowStream = !1;
                                    streamLock = 'multi-line-comment'
                                }
                            }

                            else if (
                                ((character == '"' || character == "'") && character == streamLock) ||
                                (character == '\n' && 'single-line-comment' == streamLock) ||
                                ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                            ) {
                                // Update > (Allow Stream, Stream Lock)
                                allowStream = !0;
                                streamLock = ''
                            }

                            /* Logic
                                    [if statement]
                            */
                            if (allowStream) {
                                // Update > Within Parameters
                                (character == '(' && !withinParameters) && (withinParameters += 1);

                                /* Logic
                                        [if:else if statement]
                                */
                                if (!withinParameters || withinParameters == 2) {
                                    // Logic > Return
                                    if (character == '{')
                                        return !1;

                                    if (character == '=' && nextCharacter == '>')
                                        return !0
                                }

                                else if (character == ')' && withinParameters)
                                    // Update > Within Parameters
                                    withinParameters += 1
                            }
                        }
                    }

                    // Return
                    return !1
                },

                // Is Attribute
                isAttr: function isAttr(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.attr) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.attrPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Boolean
                isBoolean: function isBoolean(arg) { return typeof arg == 'boolean' },

                // Is Character Data
                isCharacterData: function isCharacterData(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.characterData) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.characterDataPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Class
                isClass: function isClass(arg) {
                    // Return
                    return LDKF.isFunction(arg) ? (function(code) { return code[0] == 'c' && code[1] == 'l' && code[2] == 'a' && code[3] == 's' && code[4] == 's' })(LDKF.trimLeftString(LDKF.string(arg))) : !1
                },

                // Is Constructible
                isConstructible: function isConstructible(arg) { return !(LapysJSDevelopmentKit.functions.isNull(arg) || LapysJSDevelopmentKit.functions.isVoid(arg)) },

                // Is Default Function
                isDefaultFunction: function isDefaultFunction(arg) {
                    // Return
                    return LDKF.isFunction(arg) ? (function(code) { return code[0] == 'f' && code[1] == 'u' && code[2] == 'n' && code[3] == 'c' && code[4] == 't' && code[5] == 'i' && code[6] == 'o' && code[7] == 'n' })(LDKF.trimLeftString(LDKF.string(arg))) : !1
                },

                // Is Digit
                isDigit: function isDigit(character) {
                    // Return
                    return character == '0' || character == '1' || character == '2' || character == '3' || character == '4' || character == '5' || character == '6' || character == '7' || character == '8' || character == '9'
                },

                // Is Document
                isDocument: function isDocument(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.document) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.documentPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Document Fragment
                isDocumentFragment: function isDocumentFragment(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.documentFragment) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.documentFragmentPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Document Type
                isDocumentType: function isDocumentType(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.documentType) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.documentTypePrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Element
                isElement: function isElement(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.element) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.elementPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Error
                isError: function isError(arg) {
                    /* Logic
                            [if statement]
                    */
                    if (LDKF.isConstructible(arg)) {
                        // Initialization > Constructor
                        var constructor = arg.constructor;

                        // Logic > Return
                        if (
                            constructor == LDKO.domError || constructor == LDKO.domException ||
                            constructor == LDKO.error || constructor == LDKO.evalError ||
                            constructor == LDKO.lapysJSError ||
                            constructor == LDKO.mediaError ||
                            constructor == LDKO.overconstrainedError ||
                            constructor == LDKO.rangeError || constructor == LDKO.referenceError ||
                            constructor == LDKO.syntaxError ||
                            constructor == LDKO.typeError ||
                            constructor == LDKO.uriError
                        )
                            return !0
                    }

                    // Return
                    return !1
                },

                // Is Evaluation String
                isEvaluationString: function isEvaluationString(code) {
                    // Initialization > Valid
                    var valid = !1;

                    if (!LDKF.isString(code))
                        return valid;

                    // Error Handling
                    try {
                        // Execution
                        LDKO.eval('(function(){' + code + '})');

                        // Update > Valid
                        valid = !0
                    } catch (error) {
                        // Error Handling
                        try {
                            // Execution
                            LDKO.eval('(function(){(' + code + ')})');

                            // Update > Valid
                            valid = !0
                        }
                        catch (error) {}
                    }

                    // Return
                    return valid
                },

                // Is Even Number
                isEvenNumber: function isEvenNumber(arg) {
                    // Return
                    return LDKF.isInteger(arg) && !(arg % 2)
                },

                // Is Executable
                isExecutable: function isExecutable(data) {
                    // Initialization > (Evaluation, Test in Sandbox, Sandbox Properties, Length)
                    var evaluation = {completed: !1, feedback: null, value: null},
                        testInSandbox = !!arguments[1],
                        sandboxProperties = arguments[2],
                        length = arguments.length;

                    /* Logic
                            [if statement]
                    */
                    if (length) {
                        // Initialization > Code
                        var code = LDKF.string(data);

                        /* Logic
                                [if:else statement]
                        */
                        if (testInSandbox) {
                            /* Initialization > Sandbox
                                    --- NOTE ---
                                        #Lapys: Try to hide the newly window via it`s features.
                            */
                            var sandbox = LDKF.windowOpen(window, 'about:blank', '', 'alwaysLowered=yes,alwaysRaised=no,chrome=yes,close=no,dialog=yes,fullscreen=no,left=0,height=1,menubar=no,outerWidth=0,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,top=0,width=1');

                            // LapysJS Development Kit > Functions
                                /* Window (Blur, Focus, Stop)
                                        --- NOTE ---
                                            #Lapys: Keep the current window in focus.
                                */
                                LDKF.windowBlur(sandbox);
                                LDKF.windowFocus(window);
                                LDKF.windowStop(sandbox);

                            // Modification > Sandbox > Evaluation
                            sandbox.evaluation = {completed: !1, feedback: null, value: !1};

                            /* (LapysJS Development Kit > Functions) > Iterate Object > Sandbox Properties
                                    --- NOTE ---
                                        #Lapys: Add user-defined properties to the sandbox.
                            */
                            (length > 2) && LDKF.iterateObject(sandboxProperties, function(key, value, description) {
                                // Modification > Sandbox > [Key]
                                description && LDKF.objectDefineProperty(sandbox, key, description)
                            }, function(key, value, description, iteratorObject) {
                                // Return
                                return iteratorObject === sandboxProperties
                            }, !0);

                            /* Logic
                                    [if:else statement]
                            */
                            if (LDKF.isFunction(data)) {
                                // Modification > Sandbox > Evaluation Test
                                sandbox.evaluationTest = (function() { return data.call(sandbox) });

                                // ((LapysJS Development Kit) > Functions) > Document Prototype Write > [Document]
                                LDKF.documentPrototypeWrite(
                                    // [Document]
                                    LDKF.get.windowDocument(sandbox),

                                    // Document
                                    '<!DOCTYPE html>' +
                                    '<html hidden>' +
                                        '<head>' +
                                            // Stylesheets
                                                // Document Stylesheet
                                                '<style media=all type=text/css>' +
                                                    /* All
                                                            --- NOTE ---
                                                                #Lapys: Hide all the new window`s elements.
                                                    */
                                                    '* {' +
                                                        'cursor: none !important;' +
                                                        'display: none !important;' +
                                                        'filter: opacity(0) !important;' +
                                                        'opacity: 0 !important;' +
                                                        'pointer-events: none !important;' +
                                                        'touch-action: none !important;' +
                                                        'user-drag: none !important;' +
                                                        'user-select: none !important;' +
                                                        'visibility: hidden !important' +
                                                    '}' +
                                                '</style>' +

                                            // Scripts
                                                // Document Script
                                                '<script language=javascript type=text/javascript>' +
                                                    // Error Handling
                                                    'try {' +
                                                        // Modification > Evaluation > (Feedback, Value)
                                                        'evaluation.value = !0;' +
                                                        'evaluation.feedback = window.evaluationTest()' +
                                                    '} catch (error) {' +
                                                        // Modification > Evaluation > (Feedback, Value)
                                                        'evaluation.feedback = error;' +
                                                        'evaluation.value = !1' +
                                                    '}' +

                                                    // Modification > Evaluation > Completed
                                                    'evaluation.completed = !0' +
                                                '</script>' +

                                                // Document Script
                                                '<script language=javascript type=text/javascript> window.close() </script>' +
                                        '</head>' +
                                    '</html>'
                                )
                            }

                            else
                                // ((LapysJS Development Kit) > Functions) > Document Prototype Write > [Document]
                                LDKF.documentPrototypeWrite(
                                    // [Document]
                                    LDKF.get.windowDocument(sandbox),

                                    // Document
                                    '<!DOCTYPE html>' +
                                    '<html hidden>' +
                                        '<head>' +
                                            // Stylesheets
                                                // Document Stylesheet
                                                '<style media=all type=text/css>' +
                                                    /* All
                                                            --- NOTE ---
                                                                #Lapys: Hide all the new window`s elements.
                                                    */
                                                    '* {' +
                                                        'cursor: none !important;' +
                                                        'display: none !important;' +
                                                        'filter: opacity(0) !important;' +
                                                        'opacity: 0 !important;' +
                                                        'pointer-events: none !important;' +
                                                        'touch-action: none !important;' +
                                                        'user-drag: none !important;' +
                                                        'user-select: none !important;' +
                                                        'visibility: hidden !important' +
                                                    '}' +
                                                '</style>' +

                                            // Scripts
                                                // Document Script
                                                '<script language=javascript type=text/javascript>' +
                                                    // Error Handling
                                                    'try {' +
                                                        // Modification > Evaluation > (Feedback, Value)
                                                        'evaluation.feedback = null;' +
                                                        'evaluation.value = !0;' +

                                                        // (...)
                                                        code +
                                                    '} catch (error) {' +
                                                        // Modification > Evaluation > (Feedback, Value)
                                                        'evaluation.feedback = error;' +
                                                        'evaluation.value = !1' +
                                                    '}' +

                                                    // Modification > Evaluation > Completed
                                                    'evaluation.completed = !0' +
                                                '</script>' +

                                                // Document Script
                                                '<script language=javascript type=text/javascript>' +
                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    'if (!evaluation.completed) {' +
                                                        // Error Handling
                                                        'try {' +
                                                            // Modification > Evaluation > (Feedback, Value)
                                                            'evaluation.feedback = null;' +
                                                            'evaluation.value = !0;' +

                                                            // Execution
                                                            "window.eval('" + LDKF.replaceCharString(code, "'", "\\'", 'all') + "')" +
                                                        '} catch (error) {' +
                                                            // Modification > Evaluation > (Feedback, Value)
                                                            'evaluation.feedback = error;' +
                                                            'evaluation.value = !1' +
                                                        '}' +

                                                        // Modification > Evaluation > Completed
                                                        'evaluation.completed = !0' +
                                                    '}' +
                                                '</script>' +

                                                // Document Script
                                                '<script language=javascript type=text/javascript> window.close() </script>' +
                                        '</head>' +
                                    '</html>'
                                );

                            // Update > Evaluation
                            evaluation = sandbox.evaluation
                        }

                        else
                            // Error Handling
                            try {
                                // Execution
                                LDKO.eval('(function(){' + code + '})');

                                // Update > Evaluation
                                evaluation = {completed: !0, feedback: null, value: !0}
                            } catch (error) {
                                // Update > Evaluation
                                evaluation = {completed: !0, feedback: error, value: !1}
                            }
                    }

                    // Return
                    return evaluation
                },

                /* Is Finite
                        --- NOTE ---
                            #Lapys: Maybe less redundant methods are required here?
                */
                isFinite: function isFinite(arg) {
                    // Initialization > String
                    var string = LDKF.string(arg);

                    // Return
                    return LDKF.isNumber(arg) && (string !== 'Infinity' && string !== '-Infinity')
                },

                // Is Function
                isFunction: function isFunction(arg) { return typeof arg == 'function' },

                // Is HTML All Collection
                isHTMLAllCollection: function isHTMLAllCollection(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'undefined' && arg.constructor === LDKO.htmlAllCollection) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.htmlAllCollectionPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Collection
                isHTMLCollection: function isHTMLCollection(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.htmlCollection) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.htmlCollectionPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Document
                isHTMLDocument: function isHTMLDocument(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.htmlDocument) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.htmlDocumentPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Element
                isHTMLElement: function isHTMLElement(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.htmlElement) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.htmlElementPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Input Element
                isHTMLInputElement: function isHTMLInputElement(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.htmlInputElement) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.htmlInputElementPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is In Array
                isInArray: function isInArray(array, item) {
                    // Initialization > Iterator
                    var iterator = array.length;

                    // Loop > Logic > Return
                    while (iterator)
                        if (array[iterator -= 1] === item)
                            return !0;

                    // Return
                    return !1
                },

                // Is Infinite
                isInfinite: function isInfinite(arg) {
                    // Return
                    return !LDKF.isFinite(arg)
                },

                // Is Input Element
                isInputElement: function isInputElement(arg) {
                    // Error Handling
                    try {
                        // Initialization > Prototypes
                        var prototypes = LDKF.getPrototypes(arg);

                        // Return
                        return (typeof arg == 'object' && (arg.constructor === LDKO.htmlInputElement || arg.constructor === LDKO.htmlTextareaElement)) ||
                            (LDKF.isInArray(prototypes, LDKO.htmlInputElement) || LDKF.isInArray(prototypes, LDKO.htmlTextareaElement))
                    } catch (error) {}

                    // Return
                    return !1
                },

                // Is In String
                isInString: function isInString(string, match) {
                    // Initialization > (...)
                    var iterator = 0,
                        length = string.length,
                        matchIterator = 0,
                        matchLength = match.length,
                        decrementedMatchLength = matchLength - 1;

                    /* Logic
                            [if statement]
                    */
                    if (matchLength)
                        /* Logic
                                [if:else statement]
                        */
                        if (matchLength == 1) {
                            // Update > Iterator
                            iterator = length;

                            // Loop > Logic > Return
                            while (iterator) {
                                if (string[iterator -= 1] === match)
                                    return !0
                            }
                        }

                        else
                            /* Loop
                                    Iterate through String.
                            */
                            for (iterator; iterator != length; iterator += 1)
                                /* Loop
                                        Iterate through Match.
                                */
                                for (matchIterator = 0; matchIterator != matchLength; matchIterator += 1) {
                                    // Logic > Break
                                    if (string[iterator + matchIterator] != match[matchIterator])
                                        break;

                                    // Logic > Return
                                    if (matchIterator == decrementedMatchLength)
                                        return !0
                                }

                    // Return
                    return !1
                },

                // Is Integer
                isInteger: function isInteger(arg) {
                    // Return
                    return LDKF.isNumber(arg) && (function(remainder) { return !remainder || remainder == 1 || remainder == -1 })(arg % 2)
                },

                /* Is Mobile Viewport
                        --- UPDATE REQUIRED ---
                            #Lapys: Browser sniffing can still be vulnerable.
                */
                isMobileViewport: function isMobileViewport() {
                    // Return
                    return window.orientation > -1 || LDKO.descriptions.regexPrototypeTest.value.call(/Android|BB|BlackBerry|IEMobile|iPad|iPhone|iPod|Kindle|Opera Mini|PlayBook|Silk|webOS|Windows Phone/i, LDKF.get.navigatorPrototypeUserAgent(LDKF.get.windowNavigator()))
                },

                /* Is Not a Number
                        --- NOTE ---
                            #Lapys: Maybe less redundant methods are required here?
                */
                isNaN: function isNaN(arg) {
                    // Return
                    return LDKF.isNumber(arg) && LDKF.string(arg) == 'NaN'
                },

                // Is Native Function
                isNativeFunction: function isNativeFunction(arg) {
                    // Initialization > (Code, (Matches) (Length))
                    var code = '',
                        matches = ['[Command Line API]', '[native code]'],
                        matchesLength = matches.length;

                    /* Logic
                            [if statement]
                    */
                    if (LapysJSDevelopmentKit.functions.isFunction(arg)) {
                        // Error Handling > Update > Code
                        try { code = arg + '' }
                        catch (error) {}

                        // Initialization > (Allow Stream, Iterator, Length, Stream Lock)
                        var allowStream = !0,
                            iterator = 0,
                            length = code.length,
                            streamLock;

                        /* Loop
                                Iterate through Code.
                        */
                        for (iterator; iterator != length; iterator += 1) {
                            // Initialization > (Character, Matches Iterator)
                            var character = code[iterator],
                                matchesIterator = matchesLength;

                            /* Logic
                                    [if:else if statement]
                            */
                            if (allowStream) {
                                // Initialization > Next Character
                                var nextCharacter = code[iterator + 1];

                                // Update > (Allow Stream, Stream Lock)
                                if (character == '"' || character == "'") {
                                    allowStream = !1;
                                    streamLock = character
                                }

                                else if (character == '/' && nextCharacter == '/') {
                                    allowStream = !1;
                                    streamLock = 'single-line-comment'
                                }

                                else if (character == '/' && nextCharacter == '*') {
                                    allowStream = !1;
                                    streamLock = 'multi-line-comment'
                                }
                            }

                            else if (
                                ((character == '"' || character == "'") && character == streamLock) ||
                                (character == '\n' && 'single-line-comment' == streamLock) ||
                                ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                            ) {
                                // Update > (Allow Stream, Stream Lock)
                                allowStream = !0;
                                streamLock = ''
                            }

                            /* Loop
                                    [while statement]

                                    --- NOTE ---
                                        #Lapys: Search the current index of string to a given length
                                            if the Match is there by character matching.
                            */
                            while (allowStream && matchesIterator) {
                                // Initialization > (Found Match, (Match) (Iterator, Length))
                                var foundMatch = !0,
                                    match = matches[matchesIterator -= 1],
                                    matchIterator = 0,
                                    matchLength = match.length;

                                /* Loop
                                        Iterate through Match.
                                */
                                for (matchIterator; matchIterator != matchLength; matchIterator += 1)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (code[iterator + matchIterator] != match[matchIterator]) {
                                        // Update > Found Match
                                        foundMatch = !1;

                                        // Break
                                        break
                                    }

                                // Logic > Return
                                if (foundMatch)
                                    return !0
                            }
                        }

                        // Return
                        return !1
                    }

                    // Return
                    return !1
                },

                // Is Negative Infinity
                isNegativeInfinity: function isNegativeInfinity(arg) {
                    // Return
                    return LDKF.isInfinite(arg) && LDKF.isNegativeNumber(arg)
                },

                // Is Negative Integer
                isNegativeInteger: function isNegativeInteger(arg) {
                    // Return
                    return LDKF.isInteger(arg) && LDKF.isNegativeNumber(arg)
                },

                // Is Negative Number
                isNegativeNumber: function isNegativeNumber(arg) {
                    // Return
                    return LDKF.isNumber(arg) && (arg < 0 || LDKF.isNegativeZero(arg))
                },

                // Is Negative Zero
                isNegativeZero: function isNegativeZero(arg) {
                    // Return
                    return LDKF.objectIs(arg, -0)
                },

                // Is Node
                isNode: function isNode(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.node) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.nodePrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Node List
                isNodeList: function isNodeList(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.nodeList) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.nodeListPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Non-Integer
                isNonInteger: function isNonInteger(arg) {
                    // Return
                    return !LDKF.isInteger(arg)
                },

                // Is Null
                isNull: function isNull(arg) { return arg === null },

                // Is Number
                isNumber: function isNumber(arg) { return typeof arg == 'number' },

                // Is Object
                isObject: function isObject(arg) {
                    // Return
                    return LDKF.isConstructible(arg) && !LDKF.isArray(arg) && !LDKF.isBoolean(arg) && !LDKF.isFunction(arg) && !LDKF.isNumber(arg) && !LDKF.isRegex(arg) && !LDKF.isString(arg) && !LDKF.isSymbol(arg)
                },

                // Is Odd Number
                isOddNumber: function isOddNumber(arg) {
                    // Return
                    return LDKF.isInteger(arg) && arg % 2
                },

                // Is Positive Infinity
                isPositiveInfinity: function isPositiveInfinity(arg) {
                    // Return
                    return LDKF.isInfinite(arg) && LDKF.isPositiveNumber(arg)
                },

                // Is Positive Integer
                isPositiveInteger: function isPositiveInteger(arg) {
                    // Return
                    return LDKF.isInteger(arg) && LDKF.isPositiveNumber(arg)
                },

                // Is Positive Number
                isPositiveNumber: function isPositiveNumber(arg) {
                    // Return
                    return LDKF.isNumber(arg) && (arg > 0 || LDKF.isPositiveZero(arg))
                },

                // Is Positive Zero
                isPositiveZero: function isPositiveZero(arg) {
                    // Return
                    return LDKF.objectIs(arg, 0)
                },

                // Is Processing Instruction
                isProcessingInstruction: function isProcessingInstruction(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.processingInstruction) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.processingInstructionPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                /* Is Pure Object
                        --- NOTE ---
                            #Lapys: Is the object a construct of the `{}` syntax.
                */
                isPureObject: function isPureObject(arg) {
                    // Error Handling
                    try {
                        // Return
                        return typeof arg == 'object' && !arg.__proto__.__proto__ && arg.constructor === LDKO.object
                    } catch (error) {}

                    // Return
                    return !1
                },

                // Is Regular Expression
                isRegex: function isRegex(arg) {
                    // Error Handling
                    try {
                        // Return
                        return typeof arg == 'object' && !arg.__proto__.__proto__.__proto__ && arg.constructor === (/ /).constructor
                    } catch (error) {}

                    // Return
                    return !1
                },

                // Is Safe Integer
                isSafeInteger: function isSafeInteger(arg) {
                    // Return
                    return LDKF.isSafeNumber(arg) && LDKF.int(arg) === arg
                },

                // Is Safe Number
                isSafeNumber: function isSafeNumber(arg) {
                    // Return
                    return LDKF.isNumber(arg) && LDKF.isFinite(arg) && !LDKF.isNaN(arg)
                },

                /* Is Same Source Object
                        --- NOTE ---
                            #Lapys: Meant to act as a deep comparison between two objects.
                */
                isSameSourceObject: function isSameSourceObject(argA, argB) {
                    // Initialization > Properties (A, B)
                    var propertiesA = [],
                        propertiesB = [];

                    /* Logic
                            [if statement]
                    */
                    if (argA === argB) {
                        // LapysJS Development Kit Function > Iterate Object
                        LDKF.iterateObject(argA, function(key, value, description) {
                            // Update > Properties A
                            propertiesA[propertiesA.length] = {key: key, value: value, description: description}
                        });

                        LDKF.iterateObject(argB, function(key, value, description) {
                            // Update > Properties B
                            propertiesB[propertiesB.length] = {key: key, value: value, description: description}
                        });

                        // Initialization > Length (A, B)
                        var lengthA = propertiesA.length,
                            lengthB = propertiesB.length;

                        /* Logic
                                [if statement]
                        */
                        if (lengthA === lengthB) {
                            // Initialization > Iterator
                            var iterator = lengthA;

                            /* Loop
                                    [while statement]
                            */
                            while (iterator) {
                                // Update > Iterator
                                iterator -= 1;

                                // Initialization > Property ((A, B) ((Key, Value, Description)))
                                var propertyA = propertiesA[iterator],
                                    propertyAKey = propertyA.key,
                                    propertyAValue = propertyA.value,
                                    propertyADescription = propertyA.description,
                                    propertyB = propertiesB[iterator],
                                    propertyBKey = propertyB.key,
                                    propertyBValue = propertyB.value,
                                    propertyBDescription = propertyB.description;

                                /* Logic
                                        [if statement]

                                        --- WARN ---
                                            #Lapys: Exceptions in comparisons.

                                    > Logic > Return
                                */
                                if (
                                    (propertyADescription && propertyBDescription) &&
                                    (!LDKF.isNaN(propertyAValue) && !LDKF.isNaN(propertyBValue))
                                )
                                    if (
                                        propertyAKey !== propertyBKey ||
                                        propertyADescription.configurable !== propertyBDescription.configurable ||
                                        propertyADescription.enumerable !== propertyBDescription.enumerable ||
                                        propertyADescription.get !== propertyBDescription.get ||
                                        propertyADescription.set !== propertyBDescription.set ||
                                        propertyAValue !== propertyBValue ||
                                        propertyADescription.writable !== propertyBDescription.writable
                                    )
                                        return !1
                            }

                            // Return
                            return !0
                        }
                    }

                    // Return
                    return !1
                },

                // Is Strictly Array-Like
                isStrictlyArrayLike: function isStrictlyArrayLike(arg) {
                    // Error Handling > Return
                    try { return LDKF.isHTMLAllCollection(arg) || LDKF.isHTMLCollection(arg) || LDKF.isNodeList(arg) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is String
                isString: function isString(arg) { return typeof arg == 'string' },

                // Is Symbol
                isSymbol: function isSymbol(arg) { return typeof arg == 'symbol' },

                // Is Void
                isVoid: function isVoid(arg) { return arguments.length ? arg === void 0 : !1 },

                // Is Window
                isWindow: function isWindow(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.window) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.windowPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is XML HTTP Request
                isXmlHttpRequest: function isXmlHttpRequest(arg) {
                    // Error Handling > Return
                    try { return (typeof arg == 'object' && arg.constructor === LDKO.xmlHttpRequest) || LDKF.isInArray(LDKF.getPrototypes(arg), LDKO.xmlHttpRequestPrototype) }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Last Index Of String
                lastIndexOfString: function lastIndexOfString(string, match) {
                    // Initialization > Iterator
                    var iterator = string.length;

                    // Loop > Logic > Return
                    while (iterator) {
                        // Initialization > Character
                        var character = string[iterator -= 1];

                        /* Logic
                                [if:else statement]
                        */
                        if (character == match)
                            // Return
                            return iterator;

                        else {
                            // Initialization > Match (Iterator, Length)
                            var matchIterator = match.length;

                            /* Loop
                                    Iterate through Match.
                            */
                            while (matchIterator) {
                                // Update > Match Iterator
                                matchIterator -= 1;

                                /* Logic
                                        [if:else if statement]
                                */
                                if (string[iterator + matchIterator] != match[matchIterator])
                                    // Break
                                    break;

                                else if (!matchIterator)
                                    // Return
                                    return iterator
                            }
                        }
                    }

                    // Return
                    return -1
                },

                /* Lend Array
                        --- NOTE ---
                            #Lapys: Same as `Array.prototype.push` or `Array.prototype.unshift` with only 1 argument.
                */
                lendArray: function lendArray(array, item, reverse) {
                    // Initialization > Length
                    var length;

                    // Update > Array
                    reverse ? (function(array) {
                        // Update > Length
                        length = (array.length += 1) - 1;

                        // Loop > Update > (Length, Array)
                        while (length) {
                            length -= 1;
                            array[length + 1] = array[length]
                        }

                        // Update > (Array, Length)
                        array[0] = item;
                        length = array.length;

                        // Return
                        return item
                    })(array) : array[(length = array.length += 1) - 1] = item;

                    // Return
                    return length - 1
                },

                // Lower String
                lowerString: function lowerString(string) {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = 0,
                        length = string.length,
                        stream = '';

                    /* Loop
                            Iterate through String.

                        > Update > Stream
                    */
                    for (iterator; iterator != length; iterator += 1)
                        stream += LDKF.lowerStringChar(string[iterator]);

                    // Return
                    return stream
                },

                // Lower String Character
                lowerStringChar: function lowerStringChar(character) {
                    /* Logic
                            [switch:case:default statement]

                        > Return
                    */
                    switch (character) {
                        case 'A': return 'a'; break;
                        case 'B': return 'b'; break;
                        case 'C': return 'c'; break;
                        case 'D': return 'd'; break;
                        case 'E': return 'e'; break;
                        case 'F': return 'f'; break;
                        case 'G': return 'g'; break;
                        case 'H': return 'h'; break;
                        case 'I': return 'i'; break;
                        case 'J': return 'j'; break;
                        case 'K': return 'k'; break;
                        case 'L': return 'l'; break;
                        case 'M': return 'm'; break;
                        case 'N': return 'n'; break;
                        case 'O': return 'o'; break;
                        case 'P': return 'p'; break;
                        case 'Q': return 'q'; break;
                        case 'R': return 'r'; break;
                        case 'S': return 's'; break;
                        case 'T': return 't'; break;
                        case 'U': return 'u'; break;
                        case 'V': return 'v'; break;
                        case 'W': return 'w'; break;
                        case 'X': return 'x'; break;
                        case 'Y': return 'y'; break;
                        case 'Z': return 'z'; break;
                        default: return character
                    }
                },

                // Maximum
                max: function maximum() {
                    // Initialization > (Numbers, Iterator, Maximum)
                    var numbers = arguments,
                        iterator = arguments.length,
                        maximum = numbers[0];

                    /* Logic
                            [if statement]
                    */
                    if (iterator) {
                        // Loop > Update > Maximum
                        while (iterator)
                            (numbers[iterator -= 1] > maximum) && (maximum = numbers[iterator]);

                        // Return
                        return maximum
                    }

                    // Return
                    return -LDKO.infinity
                },

                // Maximum
                min: function minimum() {
                    // Initialization > (Numbers, Iterator, Minimum)
                    var numbers = arguments,
                        iterator = arguments.length,
                        minimum = numbers[0];

                    /* Logic
                            [if statement]
                    */
                    if (iterator) {
                        // Loop > Update > Minimum
                        while (iterator)
                            (numbers[iterator -= 1] < minimum) && (minimum = numbers[iterator]);

                        // Return
                        return minimum
                    }

                    // Return
                    return LDKO.infinity
                },

                // Number
                number: function number(arg) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (!arguments.length)
                        /* Return
                                --- NOTE ---
                                    #Lapys: No arguments given.
                        */
                        return 0;

                    else if (LDKF.isNumber(arg))
                        // Return
                        return arg;

                    else {
                        /* Error Handling > Return
                                --- NOTE ---
                                    #Lapys: Try concatenating the Argument with an empty string.
                                        We`re watching for errors because some JavaScript values are not concatenation-friendly.
                        */
                        try { return arg - 0 }
                        catch (error) {}

                        try { return LDKO.number(arg) }
                        catch (error) {}

                        // Return
                        return LDKO.number(LDKF.string(arg))
                    }
                },

                // Object
                object: ({}).constructor,

                /* Power
                        --- NOTE ---
                            #Lapys: Returns the exponent of a number.

                        --- UPDATE REQUIRED ---
                            #Lapys:
                                - Should be more efficient in handling decimal exponents.
                                - Independence of JavaScript`s 53-bit numbers? (Internet Explorer`s JavaScript numbers can handle more than 53-bits)
                */
                pow: function pow(base, exponent) {
                    /* Logic
                            [if statement]
                    */
                    if (arguments.length) {
                        /* Initialization > (Absolute Base, (Base, Exponent) Properties, Iterator, Result)
                                --- NOTE ---
                                    #Lapys: Used for speeding up the Error Handling check.
                        */
                        var absoluteBase = LDKF.abs(base),
                            baseProperties = {
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
                            }, iterator = hidden.pow.length,
                            result;

                        /* Loop
                                Index (Hidden > Power).

                                --- NOTE ---
                                    #Lapys: This may not necessarily be faster, but it keeps results more consistent.
                        */
                        while (iterator) {
                            // Initialization > Former Result
                            var formerResult = hidden.pow[iterator -= 1];

                            // Logic > Return
                            if (LDKF.objectIs(formerResult.base, base) && LDKF.objectIs(formerResult.exponent, exponent))
                                return formerResult.result
                        }

                        /* {Error Handling} Logic
                                [if:else if statement]
                        */
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
                            (absoluteBase > 1 && exponentProperties.isNegativeInfinity) ||
                            (absoluteBase < 1 && exponentProperties.isPositiveInfinity) ||
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
                            (absoluteBase < 1 && exponentProperties.isNegativeInfinity) ||
                            (absoluteBase > 1 && exponentProperties.isPositiveInfinity) ||
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

                        /* Update > Result
                                --- NOTE ---
                                    #Lapys: What`s going on here is a test of multiple `pow` algorithms
                                        and returning the best result.
                        */
                        result = (function pow(base, exponent) {
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

                                /* Initialization > ((Previous) Result, Tolerance, Base Raised by Numerator, Previous Result Raised by Denominator)
                                        --- NOTE ---
                                            #Lapys:
                                                - Exponent = Base ^ (Numerator / Denominator)

                                                - Rising both sides to the Denominator`s power.
                                                    -- Base ^ Numerator = Exponent ^ Denominator

                                                - Passing all terms to one side of the equation.
                                                    -- (Base ^ Numerator) - (Exponent ^ Denominator) = 0

                                                - Finding the root with Newton`s Method.
                                */
                                var result, previousResult = 1, tolerance = 1,
                                    baseRaisedByNumerator = base,
                                    previousResultRaisedByDenominator;

                                /* Loop
                                        [for statement]

                                    > Update > Base Raised by Numerator
                                */
                                for (var iterator = 1; iterator < numerator; iterator += 1)
                                    baseRaisedByNumerator *= base;

                                /* Loop
                                        [while statement]

                                        --- NOTE ---
                                            #Lapys: The level of tolerance determines how `precision` of the result.
                                */
                                while (tolerance > .001) {
                                    // Update > Previous Result Raised by Denominator
                                    previousResultRaisedByDenominator = previousResult;

                                    /* Loop
                                            [for statement]

                                        > Update > Previous Result Raised by Denominator
                                    */
                                    for (var iterator = 1; iterator < denominator; iterator += 1)
                                        previousResultRaisedByDenominator *= previousResult;

                                    // Update > Result
                                    result = previousResult - (previousResultRaisedByDenominator - baseRaisedByNumerator) / (denominator * (previousResultRaisedByDenominator / previousResult));

                                    /* Update > Tolerance
                                            --- NOTE ---
                                                #Lapys: Newton`s Method iterations.
                                    */
                                    tolerance = ((result - previousResult) / previousResult) * 100;

                                    // Update > (Tolerance, Previous Result)
                                    (tolerance < 0) && (tolerance = -tolerance);
                                    previousResult = result;
                                }

                                // Return
                                return result
                            }

                            else
                                // Return
                                return (function(base, exponent) {
                                    // Initialization > (Return) Result
                                    var result, returnResult;

                                    /* Error Handling
                                            --- NOTE ---
                                                #Lapys: Try to prevent the result from overflowing.
                                    */
                                    try {
                                        // Function
                                            // Power
                                            function pow(base, exponent) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                    // {Null Base}
                                                    if (!base)
                                                        // Return
                                                        return result = 0;

                                                    // {Null Exponent}
                                                    else if (!exponent)
                                                        // Return
                                                        return result = 1;

                                                    // {Negative Exponent}
                                                    else if (LDKF.isNegativeNumber(exponent))
                                                        // Return
                                                        return result = 1 / pow(base, exponent);

                                                    // {Fractional Exponent}
                                                    else if (exponent > 0 && exponent < 1)
                                                        // Return
                                                        return result = root(base, 1 / exponent);

                                                    // {Fractional Exponent}
                                                    else if (!(LDKF.int(exponent) % 2)) {
                                                        // Initialization > Half Power
                                                        var halfPower = pow(base, exponent / 2);

                                                        // Return
                                                        return result = halfPower * halfPower
                                                    }

                                                    // {Integer Exponent}
                                                    else
                                                        // Return
                                                        return result = base * pow(base, exponent - 1)
                                            }

                                            // Root
                                            function root(base, exponent) {
                                                // Initialization > (Constant, Iterator, Matrix)
                                                var constant = 6, iterator = 0,
                                                    matrix = [1, 1, 1, 1, 1, 1];

                                                // Loop > Update > Matrix
                                                for (iterator; iterator < constant - 1; iterator += 1)
                                                    matrix[iterator + 1] = (1 / exponent) * ((exponent - 1) * matrix[iterator] + base / pow(matrix[iterator], exponent - 1));

                                                // Return
                                                return result = matrix[constant - 1]
                                            }

                                        // Return
                                        return pow(base, exponent)
                                    } catch (error) {
                                        // Update > Return Result
                                        returnResult = error.constructor === LDKO.rangeError
                                    }

                                    // Return
                                    return returnResult ? result : LDKO.nan
                                })(base, exponent)
                        })(base, exponent);

                        // Update > (Result, Hidden > Power)
                        LDKF.isSafeNumber(result) || (result = new LDKF.error('Result not computable in JavaScript only'));
                        hidden.pow[iterator] = {base: base, exponent: exponent, result: result};

                        // Return
                        return result
                    }

                    // Return
                    return LDKO.nan
                },

                /* Random
                        --- NOTE ---
                            #Lapys:
                                - Returns a pseudo-random number.
                                - This method tries to alleviate the need for the `Math.random` method.
                */
                random: function random() {
                    // Return
                    return LDKRNG.generateRandomNumber()
                },

                /* Remove Character String
                        --- NOTE ---
                            #Lapys: Remove a specified set of characters from a string
                                a specified number of times.
                */
                removeCharString: function removeCharString() {
                    // Initialization > (Match, String, Amount)
                    var match = LapysJSDevelopmentKit.functions.string(arguments[1]),
                        string = LapysJSDevelopmentKit.functions.string(arguments[0]),
                        amount = arguments.length > 2 ? (arguments[2] === 'all' ? LDKF.countCharString(string, match) : arguments[2]) : 1;

                    /* Logic
                            [if statement]
                    */
                    if (arguments.length && match) {
                        // Initialization > (Iterator, Length, Stream)
                        var iterator = 0,
                            length = string.length,
                            stream = '';

                        /* Loop
                                Iterate through String.
                        */
                        for (iterator; iterator < length; iterator += 1) {
                            // Initialization > (Allow Stream, Character)
                            var allowStream = !0,
                                character = string[iterator];

                            /* Logic
                                    [if statement]
                            */
                            if (amount)
                                /* Logic
                                        [if:else if statement]
                                */
                                if (character == match) {
                                    // Update > (Allow Stream, Amount)
                                    allowStream = !1;
                                    amount -= 1
                                }

                                else if (character == match[0]) {
                                    // Initialization > (Match (Iterator, Length), Decremented Match Length)
                                    var matchIterator = 0,
                                        matchLength = match.length,
                                        decrementedMatchLength = matchLength - 1;

                                    /* Loop
                                            Iterate through Match.
                                    */
                                    for (matchIterator; matchIterator != matchLength; matchIterator += 1)
                                        /* Logic
                                                [if statement]
                                        */
                                        if (string[iterator + matchIterator] != match[matchIterator]) {
                                            // Update > Allow Stream
                                            allowStream = !1;

                                            // Break
                                            break
                                        }

                                    /* Logic
                                            [if statement]

                                        > Update > (Amount, Character)
                                    */
                                    if (allowStream) {
                                        amount -= 1;
                                        character = string[iterator += matchLength]
                                    }
                                }

                            // Update > Stream
                            allowStream && character && (stream += character)
                        }

                        // Return
                        return stream
                    }

                    // Return
                    return string
                },

                /* Repeat
                        --- NOTE ---
                            #Lapys: A simple brute force repeat with no end,
                                unlike the `iterate...` methods.
                */
                repeat: function repeat(callback, iterationCount) {
                    /* Loop
                            [while statement]
                    */
                    while (iterationCount) {
                        // Callback
                        callback.call(this, iterationCount);

                        // Update > Iteration Count
                        iterationCount -= 1
                    }
                },

                // Repeat Asynchronously
                repeatAsync: function repeatAsync(callback, iterationCount) {
                    // Initialization > (Original Iteration Count, Request, Target)
                    var originalIterationCount = iterationCount,
                        request, that = this;

                    // Function > Repeat
                    (function repeat() {
                        /* Logic
                                [if:else statement]
                        */
                        if (iterationCount != -1) {
                            // Callback
                            (iterationCount == originalIterationCount) || callback.call(that, iterationCount);

                            // Update > (Iteration Count, Request)
                            iterationCount -= 1;
                            request = LDKF.requestAnimationFrame(repeat)
                        }

                        else
                            // Cancel Animation Frame > Request
                            LDKF.cancelAnimationFrame(request)
                    })()
                },

                // Replace Character String
                replaceCharString: function replaceCharString() {
                    // Initialization > (Amount, Replacement, Match (Length), String)
                    var amount = arguments.length > 3 ? arguments[3] : 1,
                        replacement = arguments.length > 2 ? LapysJSDevelopmentKit.functions.string(arguments[2]) : '',
                        match = LapysJSDevelopmentKit.functions.string(arguments[1]),
                        matchLength = match.length - 1,
                        string = LapysJSDevelopmentKit.functions.string(arguments[0]);

                    /* Logic
                            [if statement]
                    */
                    if (arguments.length && match && string) {
                        // Initialization > (Iterator, Length)
                        var iterator = 0,
                            length = string.length;

                        /* Logic
                                [switch:case statement]

                            > Update > Amount
                        */
                        switch (amount) {
                            // All
                            case 'all': amount = length
                        }

                        // Function > Replace
                        function replace(string, index, replacement) {
                            // Initialization > (Iterator, Length, Stream)
                            var iterator = 0,
                                length = string.length,
                                stream = '';

                            /* Loop
                                    Iterate through String.
                            */
                            for (iterator; iterator < length; iterator += 1)
                                /* Logic
                                        [if:else statement]
                                */
                                if (iterator == index) {
                                    // Update > (Stream, Iterator)
                                    stream += replacement;
                                    iterator += matchLength
                                }

                                else
                                    // Update > Stream
                                    stream += string[iterator];

                            // Return
                            return stream
                        }

                        // Initialization > Index
                        var index = 0;

                        /* Loop
                                [while statement]

                            > Update > (String, Amount)
                        */
                        while (amount) {
                            ((index = LDKF.indexOfString(string, match)) != -1) && (string = replace(string, index, replacement));
                            amount -= 1
                        }
                    }

                    // Return
                    return string
                },

                // Remove Item Array
                removeItemArray: function removeItemArray() {
                    // Initialization > (Array, Match, Amount)
                    var array = arguments[0],
                        match = arguments[1],
                        amount = arguments.length > 2 ? arguments[2] : 1;

                    /* Logic
                            [if statement]
                    */
                    if (arguments.length) {
                        // Initialization > Length
                        var length = array.length;

                        /* Logic
                                [if:else statement]
                        */
                        if (length == 1)
                            // Update > Array
                            (array[0] === match) && (array.length = 0);

                        else {
                            // Initialization > Iterator
                            var iterator = 0;

                            /* Loop
                                    Index Array.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > Item
                                var item = array[iterator];

                                /* Logic
                                        [if statement]
                                */
                                if (amount > 0 && item === match) {
                                    // Initialization > End (Array, Iterator)
                                    var endArray = [],
                                        endIterator = iterator + 1;

                                    /* Loop
                                            Index Array.

                                        > Update > End Array
                                    */
                                    for (endIterator; endIterator < length; endIterator += 1)
                                        endArray[endArray.length] = array[endIterator];

                                    // Update > Array
                                    array.length = iterator;

                                    // Initialization > End Length
                                    var endLength = endArray.length;

                                    /* Loop
                                            Index End Array.

                                        > Update > Array
                                    */
                                    for (endIterator = 0; endIterator < endLength; endIterator += 1)
                                        array[iterator + endIterator] = endArray[endIterator];

                                    // Update > (Iterator, Length, Amount)
                                    iterator = 0;
                                    length = array.length;
                                    amount -= 1
                                }
                            }
                        }
                    }

                    // Return
                    return array
                },

                /* Rend Array
                        --- NOTE ---
                            #Lapys: Same as `Array.prototype.slice` with only 1 argument.
                */
                rendArray: function rendArray(array, length) {
                    /* Logic
                            [if statement]
                    */
                    if (arguments.length > 1) {
                        // Update > Length
                        length = length | 0;

                        // Initialization > ((Rend) (Iterator), Array Length)
                        var rend = [],
                            rendIterator = -1,
                            iterator = length,
                            arrayLength = array.length;

                        // Logic
                        if (length > -1)
                            // Loop > Update > Rend
                            for (iterator; iterator < arrayLength; iterator += 1)
                                rend[rendIterator += 1] = array[iterator];

                        else {
                            // Update > (Iterator, Length)
                            iterator = 0;
                            length += arrayLength;

                            // Loop > Update > Rend
                            for (iterator; iterator < length; iterator += 1)
                                rend[iterator] = array[iterator];
                        }

                        // Return
                        return rend
                    }

                    // Return
                    return []
                },

                // Rend String
                rendString: function rendString(string, length) {
                    /* Logic
                            [if statement]
                    */
                    if (arguments.length > 1) {
                        // Update > Length
                        length = length | 0;

                        // Initialization > (Rend (Iterator), Array Length)
                        var rend = '',
                            iterator = length,
                            stringLength = string.length;

                        /* Logic
                                [if:else statement]
                        */
                        if (length > -1)
                            // Loop > Update > Rend
                            for (iterator; iterator < stringLength; iterator += 1)
                                rend += string[iterator];

                        else {
                            // Initialization > Count
                            var count = -1;

                            // Update > Iterator
                            iterator = stringLength + iterator;

                            // Loop > Update > (Iterator, Rend)
                            while (iterator > 0) {
                                iterator -= 1;
                                rend += string[count += 1]
                            }
                        }

                        // Return
                        return rend
                    }

                    // Return
                    return ''
                },

                // Reverse Array
                reverseArray: function reverseArray(array) {
                    // Initialization > (Index, Iterator, Length, Reverse)
                    var index = -1,
                        iterator = array.length,
                        length = iterator,
                        reverse = [];

                    // Loop > Update
                        // Reverse
                        while (iterator)
                            reverse[index += 1] = array[iterator -= 1];

                        // Array
                        for (iterator; iterator != length; iterator += 1)
                            array[iterator] = reverse[iterator];

                    // Return
                    return array
                },

                // Reverse String
                reverseString: function reverseString(string) {
                    // Initialization > (Iterator, Stream)
                    var iterator = string.length,
                        stream = '';

                    // Loop > Update > Stream
                    while (iterator)
                        stream += string[iterator -= 1];

                    // Return
                    return stream
                },

                /* Set
                        --- NOTE ---
                            #Lapys: Library of manipulation functions.

                        --- WARN ---
                            #Lapys: Do not redefine.
                */
                set: {},

                /* Set Interval
                        --- NOTE ---
                            #Lapys:
                                - This might cause the `setTimeout` ID to increase exponentially, but it`s preferable in this case to hoping that the `setInterval` function is not tampered with.
                                - This will also cause the `LapysJSDevelopmentKit.random.intervals` object to gradually increase in size.
                */
                setInterval: function setInterval() {
                    // Initialization > (Handler, Delay, Arguments (List), (Clear, Set) Timeout, Intervals, Interval ID, Timeout)
                    var handler = arguments[0],
                        delay = arguments.length > 1 ? arguments[1] : 0,
                        args = LapysJSDevelopmentKit.functions.rendArray(arguments, 2),
                        argList,
                        clearTimeout = LapysJSDevelopmentKit.objects.clearTimeout,
                        setTimeout = LapysJSDevelopmentKit.objects.setTimeout,
                        intervals = LapysJSDevelopmentKit.random.intervals,
                        intervalID = intervals.length,
                        timeout = 0;

                    // Update > (LapysJS Development Kit > Random > Intervals)
                    LapysJSDevelopmentKit.random.intervals[intervalID] = !0;

                    // Function > Interval
                    (function interval() {
                        /* Logic
                                [if statement]
                        */
                        if (LapysJSDevelopmentKit.random.intervals[intervalID]) {
                            // Update > (Arguments List, Iterator, Length)
                            argList = argList || [function() { handler.apply(window, args); clearTimeout(timeout); interval() }, delay],
                            iterator = 0,
                            length = args.length;

                            // Logic > Loop > Update > Arguments List
                            if (!argList.length)
                                for (iterator; iterator != length; iterator += 1)
                                    argList[argList.length] = args[iterator];

                            // Update > Timeout
                            timeout = setTimeout.apply(window, argList)
                        }
                    })();

                    // Return
                    return intervalID
                },

                // Set Timeout
                setTimeout: function setTimeout() {
                    // Return
                    return LapysJSDevelopmentKit.objects.setTimeout.apply(window, arguments)
                },

                // Set Selector On Element
                setSelectorOnElement: function setSelectorOnElement(element, selector) {
                    // Initialization > (Allow Mode Change, Iterator, Length, Mode (Lock), Properties (Index))
                    var allowModeChange = !0,
                        iterator = 0,
                        length = selector.length,
                        mode = '',
                        modeLock,
                        properties = {attributes: [], class: [], id: []},
                        propertiesIndex = {attributes: -1, class: -1, id: -1};

                    // Error Handling
                    try { LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), selector) }
                    catch (error) { LDKF.throwError('setSelectorOnElement', 'argument', LDKF.debugMessage("'" + selector + "'", ['not', 'a'], 'valid selector')) }

                    // Update > Selector
                    selector = LDKF.string(selector);

                    if (selector) {
                        /* Loop
                                Iterate through Selector.
                        */
                        for (iterator; iterator != length; iterator += 1) {
                            // Initialization > Character
                            var character = selector[iterator];

                            /* Logic
                                    [if:else if statement]

                                    --- WARN ---
                                        #Lapys: Take attribute values into consideration (the values could contain values such as `.` and `#`).
                            */
                            if (allowModeChange) {
                                /* Logic
                                        [if:else if statement]
                                */
                                if (character == '[') {
                                    // Update > (Allow Mode Change, Mode)
                                    allowModeChange = !1;
                                    mode = 'attribute';

                                    // Modification > Properties Index > Attributes
                                    propertiesIndex.attributes += 1
                                }

                                else if (character == '.') {
                                    // Update > Mode
                                    mode = 'class';

                                    // Modification > Properties Index > Class
                                    propertiesIndex.class += 1
                                }

                                else if (character == '#') {
                                    // Update > Mode
                                    mode = 'id';

                                    // Modification > Properties Index > ID
                                    propertiesIndex.id += 1
                                }
                            }

                            else if (character == ']')
                                // Update > Allow Mode Change
                                allowModeChange = !0;

                            /* Logic
                                    [switch:case statement]

                                > Update > (Properties > ...)
                            */
                            switch (mode) {
                                // Attribute
                                case 'attribute':
                                    properties.attributes[propertiesIndex.attributes] ?
                                        properties.attributes[propertiesIndex.attributes] += character :
                                        properties.attributes[propertiesIndex.attributes] = character;
                                    break;

                                // Class
                                case 'class':
                                    properties.class[propertiesIndex.class] ?
                                        properties.class[propertiesIndex.class] += character :
                                        properties.class[propertiesIndex.class] = character;
                                    break;

                                // ID
                                case 'id':
                                    properties.id[propertiesIndex.id] ?
                                        properties.id[propertiesIndex.id] += character :
                                        properties.id[propertiesIndex.id] = character
                            }
                        }

                        /* Logic
                                [if statement]
                        */
                        if (properties.attributes.length) {
                            // Initialization > Attributes
                            var attributes = properties.attributes;

                            // Update > (Iterator, Length)
                            iterator = 0; length = attributes.length;

                            /* Loop
                                    Index Attributes.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > Attribute
                                var attribute = attributes[iterator];

                                // Update > Attribute
                                (attribute[attribute.length - 1] == ']') || (attribute += ']');
                                attribute = LDKF.rendString(LDKF.rendString(attribute, 1), -1);

                                // Modification > Element > [Name]
                                LDKF.elementPrototypeSetAttribute(
                                    // Element
                                    element,

                                    // {Name}
                                    (function name(attribute) {
                                        // Initialization > (Allow Stream, Iterator, Length, Stream)
                                        var allowStream = !0,
                                            iterator = 0,
                                            length = attribute.length,
                                            stream = '';

                                        /* Loop
                                                Iterate through Attribute.
                                        */
                                        for (iterator; iterator != length; iterator += 1) {
                                            // Initialization > Character
                                            var character = attribute[iterator];

                                            // Update > (Allow) Stream
                                            (character == '=') && (allowStream = !1);
                                            allowStream && (stream += character)
                                        }

                                        // Return
                                        return stream
                                    })(attribute),

                                    // {Value}
                                    (function value(attribute) {
                                        // Initialization > (Allow Stream, Iterator, Length, Stream)
                                        var allowStream = !1,
                                            iterator = 0,
                                            length = attribute.length,
                                            stream = '';

                                        /* Loop
                                                Iterate through Attribute.
                                        */
                                        for (iterator; iterator != length; iterator += 1) {
                                            // Initialization > Character
                                            var character = attribute[iterator];

                                            // Update > (Allow) Stream
                                            allowStream && (stream += character);
                                            (character == '=') && (allowStream = !0)
                                        }

                                        // Update > Stream
                                        (
                                            (stream[0] == '"' || stream[0] == "'") &&
                                            (stream[stream.length - 1] == '"' || stream[stream.length - 1] == "'")
                                        ) && (stream = LDKF.rendString(LDKF.rendString(stream, 1), -1));

                                        // Return
                                        return stream
                                    })(attribute)
                                )
                            }
                        }

                        /* Logic
                                [if statement]
                        */
                        if (properties.class.length) {
                            // Initialization > Classes
                            var classes = properties.class;

                            // Update > (Iterator, Length)
                            iterator = 0; length = classes.length;

                            /* Loop
                                    Index Classes.

                                > Modification > Element > Class
                            */
                            for (iterator; iterator != length; iterator += 1)
                                LDKF.addClassToElement(element, LDKF.rendString(classes[iterator], 1))
                        }

                        // Modification > Element > ID
                        properties.id.length && LDKF.elementPrototypeSetAttribute(element, 'id', LDKF.rendString(properties.id[properties.id.length - 1], 1))
                    }

                    // Return
                    return selector
                },

                /* Sigmoid
                        --- NOTE ---
                            #Lapys: Return number closer to 1.
                */
                sigmoid: function sigmoid(number) {
                    // Return
                    return 1 / (1 + LDKF.exp(-number))
                },

                // Sort Array
                sortArray: function sortArray(array) {
                    /* Initialization > (Copy, Length, Sorted)
                            --- NOTE ---
                                #Lapys: Make a shallow copy of the Array.
                    */
                    var copy = (function(array) {
                        // Initialization > (Copy, Iterator, Length, Sorted)
                        var copy = [],
                            iterator = 0,
                            length = array.length;

                        // Loop > Update > Copy
                        for (iterator; iterator != length; iterator += 1)
                            copy[iterator] = array[iterator];

                        // Return
                        return copy
                    })(array),
                        iterator = 0,
                        length = array.length,
                        sorted = [];

                    /* Function > Find Match
                            --- NOTE ---
                                #Lapys: Find the highest prioritized item in the array.
                    */
                    function findMatch(array) {
                        /* Return
                                --- UPDATE REQUIRED ---
                                    #Lapys: For now, we return our value based on numbers.
                        */
                        return LDKF.max.apply(LDKF, array)
                    }

                    /* Loop
                            [while statement]
                    */
                    while (sorted.length != length) {
                        // Initialization > (Match, Iterator)
                        var match = findMatch(copy),
                            iterator = copy.length;

                        /* Loop
                                Index Copy.
                        */
                        while (iterator) {
                            // Initialization > Item
                            var item = copy[iterator -= 1];

                            /* Logic
                                    [if statement]

                                > Update > (Sorted, Copy)
                            */
                            if (item === match) {
                                sorted[sorted.length] = item;
                                LDKF.removeItemArray(copy, item)
                            }
                        }
                    }

                    /* Loop
                            Index Sorted.

                        > Update > Array
                    */
                    for (iterator; iterator != length; iterator += 1)
                        array[iterator] = sorted[iterator];

                    // Return
                    return array
                },

                // String
                string: function string(arg) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (!arguments.length)
                        /* Return
                                --- NOTE ---
                                    #Lapys: No arguments given.
                        */
                        return '';

                    else if (LapysJSDevelopmentKit.functions.isString(arg))
                        // Return
                        return arg;

                    else {
                        /* Error Handling > Return
                                --- NOTE ---
                                    #Lapys: Try concatenating the Argument with an empty string.
                                        We`re watching for errors because some JavaScript values are not concatenation-friendly.
                        */
                        try { return arg + '' }
                        catch (error) {}

                        // Return
                        return LapysJSDevelopmentKit.objects.string(arg)
                    }
                },

                // Symbol
                symbol: window.Symbol,

                // Throw Error
                throwError: function throwError() {
                    // Initialization > (Message, Length, Stack)
                    var message = '',
                        length = arguments.length,
                        stack = hidden;

                    /* Logic
                            [if statement]
                    */
                    if (length)
                        /* Logic
                                [if:else statement]
                        */
                        if (length == 1) {
                            // Initialization > Error Message
                            var errorMessage = arguments[0];

                            /* Logic
                                    [if:else statement]
                            */
                            if (LDKF.isError(errorMessage)) {
                                // Update > (Stack, Message)
                                stack = errorMessage.stack;
                                message = errorMessage.message
                            }

                            else
                                // Update > Message
                                message = LDKF.string(errorMessage)
                        }

                        else
                            // Update > Message
                            message = LDKF.debugMessage.apply(LDKF, arguments);

                    // Initialization > Error
                    var error = message ? LDKF.error(LDKI.errorMessagePrefix + message) : LDKF.error();

                    // Modification > Error > Stack
                    (stack === hidden) || (error.stack = stack);

                    // Error
                    throw error
                },

                // Throw Warning
                throwWarning: function warn() {
                    // Error Handling
                    try {
                        // Error
                        LapysJSDevelopmentKit.functions.throwError.apply(LapysJSDevelopmentKit, arguments)
                    } catch (error) {
                        // LapysJS Development Kit > Functions > Console Warn
                        LapysJSDevelopmentKit.functions.consoleWarn(error.message)
                    }
                },

                /* Trim Left String
                        --- NOTE ---
                            #Lapys: We are fully aware that there are `String.prototype` methods
                                but the library is trying to achieve convenience & independence from the native
                                JavaScript library to avoid it breaking down from unforeseen changes made
                                by the developer.
                */
                trimLeftString: function trimLeftString(string, match) {
                    /* Logic
                            [if statement]
                    */
                    if (arguments.length) {
                        // Initialization > (Allow Stream, Iterator, Length, Stream)
                        var allowStream = !1,
                            iterator = 0,
                            length = string.length,
                            stream = '';

                        /* Loop
                                Iterate through String.
                        */
                        for (iterator; iterator != length; iterator += 1) {
                            // Initialization > Character
                            var character = string[iterator];

                            /* Logic
                                    [if:else if statement]
                            */
                            if (allowStream)
                                // Update > Stream
                                stream += character;

                            else if (LapysJSDevelopmentKit.functions.isString(match)) {
                                /* Logic
                                        [if:else statement]
                                */
                                if (match) {
                                    // Update > Stream
                                    stream = string;

                                    // Loop > Update > Stream
                                    while (!LapysJSDevelopmentKit.functions.indexOfString(stream, match))
                                        stream = LapysJSDevelopmentKit.functions.replaceCharString(stream, match, '');

                                    // Return
                                    return stream
                                }

                                else {
                                    // Update > Allow (Stream)
                                    allowStream = !0;
                                    stream += character
                                }
                            }

                            else if (character != ' ' && character != '\n') {
                                // Update > Allow (Stream)
                                allowStream = !0;
                                stream += character
                            }
                        }

                        // Return
                        return stream
                    }

                    // Return
                    return ''
                },

                // Trim Right String
                trimRightString: function trimRightString(string, match) {
                    /* Logic
                            [if statement]
                    */
                    if (arguments.length) {
                        // Initialization > (Allow Stream, Index, Iterator, Stream)
                        var allowStream = !1,
                            index = -1,
                            iterator = string.length,
                            stream = '';

                        /* Loop
                                Iterate through String.
                        */
                        while (iterator) {
                            // Initialization > Character
                            var character = string[iterator -= 1];

                            /* Logic
                                    [if:else if statement]
                            */
                            if (allowStream)
                                // Update > Stream
                                stream += string[index += 1];

                            else if (LapysJSDevelopmentKit.functions.isString(match)) {
                                /* Logic
                                        [if:else statement]
                                */
                                if (match) {
                                    // Update > Stream
                                    stream = string;

                                    // Initialization > Match Length
                                    var matchLength = match.length - 1;

                                    // Loop > Update > Stream
                                    while (LapysJSDevelopmentKit.functions.lastIndexOfString(stream, match) + matchLength == stream.length - 1)
                                        stream = LapysJSDevelopmentKit.functions.reverseString(LapysJSDevelopmentKit.functions.replaceCharString(LapysJSDevelopmentKit.functions.reverseString(stream), match, ''));

                                    // Return
                                    return stream
                                }

                                else {
                                    // Update > Allow (Stream)
                                    allowStream = !0;
                                    stream += string[index += 1]
                                }
                            }

                            else if (character != ' ' && character != '\n') {
                                // Update > Allow (Stream)
                                allowStream = !0;
                                stream += string[index += 1]
                            }
                        }

                        // Return
                        return stream
                    }

                    // Return
                    return ''
                },

                // Trim String
                trimString: function trimString() {
                    // Initialization > (Arguments, Array, Iterator, Length)
                    var args = [LDKF.trimRightString.apply(LDKF, arguments)],
                        array = LDKF.rendArray(arguments, 1),
                        iterator = 0,
                        length = array.length;

                    // Loop > Update > Arguments
                    for (iterator; iterator != length; iterator += 1)
                        args[args.length] = array[iterator];

                    // Return
                    return LDKF.trimLeftString.apply(LDKF, args)
                },

                // Upper String
                upperString: function upperString(string) {
                    // Initialization > (Iterator, Length, Stream)
                    var iterator = 0,
                        length = string.length,
                        stream = '';

                    /* Loop
                            Iterate through String.

                        > Update > Stream
                    */
                    for (iterator; iterator != length; iterator += 1)
                        stream += LDKF.upperStringChar(string[iterator]);

                    // Return
                    return stream
                },

                // Upper String Character
                upperStringChar: function upperStringChar(character) {
                    /* Logic
                            [switch:case:default statement]

                        > Return
                    */
                    switch (character) {
                        case 'a': return 'A'; break;
                        case 'b': return 'B'; break;
                        case 'c': return 'C'; break;
                        case 'd': return 'D'; break;
                        case 'e': return 'E'; break;
                        case 'f': return 'F'; break;
                        case 'g': return 'G'; break;
                        case 'h': return 'H'; break;
                        case 'i': return 'I'; break;
                        case 'j': return 'J'; break;
                        case 'k': return 'K'; break;
                        case 'l': return 'L'; breaddk;
                        case 'm': return 'M'; break;
                        case 'n': return 'N'; break;
                        case 'o': return 'O'; break;
                        case 'p': return 'P'; break;
                        case 'q': return 'Q'; break;
                        case 'r': return 'R'; break;
                        case 's': return 'S'; break;
                        case 't': return 'T'; break;
                        case 'u': return 'U'; break;
                        case 'v': return 'V'; break;
                        case 'w': return 'W'; break;
                        case 'x': return 'X'; break;
                        case 'y': return 'Y'; break;
                        case 'z': return 'Z'; break;
                        default: return character
                    }
                }
            },

            /* Information
                    --- NOTE ---
                        #Lapys: Miscellaneous proprietary information.
            */
            information: {
                // Browser Incompatibility Error Message
                browserIncompatibilityErrorMessage: 'LapysJS is not compatible with this browser',

                // Current Phase
                currentPhase: null,

                // Error Message Prefix
                errorMessagePrefix: '[LapysJS v' + VERSION + '] => ',

                // Fullscreen Message
                fullscreenMessage: "Press the 'Esc' key to exit fullscreen"
            },

            /* Objects
                    --- NOTE ---
                        #Lapys: Object library.
                            - The Object Library acts as a backup for many of JavaScript`s volatile features.
            */
            objects: {
                // Array
                array: [].constructor,
                    // Prototype
                    arrayPrototype: [].__proto__,

                // Boolean
                boolean: (!0).constructor,
                    // Prototype
                    booleanPrototype: (!0).__proto__,

                // Character Data
                characterData: window.CharacterData,
                    // Prototype
                    characterDataPrototype: (window.CharacterData || {}).prototype,

                /* Clear Timeout
                        --- WARN ---
                            #Lapys: Here, we can only hope that the `clearTimeout` and `setTimeout` functions are native.
                */
                clearTimeout: window.clearTimeout,

                /* Custom Element Registry
                        --- NOTE ---
                            #Lapys: Querying & registering custom elements.
                */
                customElementRegistry: window.CustomElementRegistry,

                // Custom Elements
                customElements: window.customElements,

                // Date
                date: window.Date,
                    // Prototype
                    datePrototype: window.Date.prototype,

                // Descriptions
                descriptions: {},

                // Document Type
                documentType: window.DocumentType,
                    // Prototype
                    documentTypePrototype: (window.DocumentType || {}).prototype,

                // DOM Error
                domError: window.DOMError,

                // Error
                error: (function error() {
                    // Initialization > Error Object
                    var errorObject;

                    // Error Handling > Update > Error Object
                    try { LDKO.eval('#') }
                    catch (error) { errorObject = error.__proto__.__proto__.constructor }

                    // Return
                    return errorObject
                })(),

                // Evaluation
                eval: window.eval,

                // Evaluation Error
                evalError: window.EvalError,

                // Euler`s Number
                E: 2.718281828459045,

                // File
                file: window.File,
                    // Prototype
                    filePrototype: (window.File || {}).prototype,

                // Function
                func: (function() {}).constructor,
                    // Prototype
                    funcPrototype: (function() {}).__proto__,

                // Infinity
                infinity: 1 / 0,

                // Media Error
                mediaError: window.MediaError,

                // Not A Number
                nan: 0 / 0,

                // Number
                number: .0.constructor,
                    // Maximum Safe Integer
                    numberMaxSafeInteger: .0.constructor.MAX_SAFE_INTEGER,

                    // Prototype
                    numberPrototype: .0.__proto__,

                // Object
                object: ({}).constructor,
                    // Prototype
                    objectPrototype: ({}).__proto__,

                // Over-Constrained Error
                overconstrainedError: window.OverconstrainedError,

                // Processing Instruction
                processingInstruction: window.ProcessingInstruction,
                    // Prototype
                    processingInstructionPrototype: (window.ProcessingInstruction || {}).prototype,

                // Promise
                promise: window.Promise,
                    // Prototype
                    promisePrototype: (window.Promise || {}).prototype,
                        // Then
                        promisePrototypeThen: ((window.Promise || {}).prototype || {}).then,

                // Range Error
                rangeError: (function rangeError() {
                    // Initialization > Error Object
                    var errorObject;

                    // Error Handling > Update > Error Object
                    try { (function a(){a()})() }
                    catch (error) { errorObject = error.constructor }

                    // Return
                    return errorObject
                })(),

                // Regular Expression
                regex: / /.constructor,
                    // Prototype
                    regexPrototype: / /.__proto__,

                /* Set Timeout
                        --- WARN ---
                            #Lapys: Here, we can only hope that the `clearTimeout` and `setTimeout` functions are native.
                */
                setTimeout: window.setTimeout,

                // String
                string: ''.constructor,
                    // Prototype
                    stringPrototype: ''.__proto__,

                // Type Error
                typeError: (function typeError() {
                    // Initialization > Error Object
                    var errorObject;

                    // Error Handling > Update > Error Object
                    try { hidden.hello() }
                    catch (error) { errorObject = error.constructor }

                    // Return
                    return errorObject
                })(),

                // Window
                window: __proto__.constructor,
                    // Prototype
                    windowPrototype: __proto__,

                // {Cross-Domain Request} X Domain Request
                xDomainRequest: window.XDomainRequest,
                    // Prototype
                    xDomainRequestPrototype: (window.XDomainRequest || {}).prototype,
                        // Open
                        xDomainRequestPrototypeOpen: ((window.XDomainRequest || {}).prototype || {}).open,

                        // Send
                        xDomainRequestPrototypeSend: ((window.XDomainRequest || {}).prototype || {}).send,

                // XML HTTP Request
                xmlHttpRequest: window.XMLHttpRequest,
                    // Prototype
                    xmlHttpRequestPrototype: (window.XMLHttpRequest || {}).prototype,
                        // Open
                        xmlHttpRequestPrototypeOpen: ((window.XMLHttpRequest || {}).prototype || {}).open,

                        // Send
                        xmlHttpRequestPrototypeSend: ((window.XMLHttpRequest || {}).prototype || {}).send
            },

            /* (Constructor > Prototype) */
            __proto__: new (function LapysJSDevelopmentKit() {}),

            /* Random
                    --- NOTE ---
                        #Lapys: Container for miscellaneous but useful data.
            */
            random: {
                /* Call Stack Size
                        --- NOTE ---
                            #Lapys: Keep track of functions that could potentially be overloaded.
                */
                callStackSize: 0,

                /* Debug
                        --- NOTE ---
                            #Lapys: For explicitly debugging code.
                */
                debug: (function() {
                    // Initialization > Debug
                    var debug = function LapysJSDebugger() { return log.apply(this, arguments) };

                    /* Function
                            --- NOTE ---
                                #Lapys: All debugging methods.
                    */
                        // Log
                        function log() {
                            // (LapysJS Development Kit > Functions) > Console Log
                            LapysJSDevelopmentKit.functions.consoleLog.apply(LapysJSDevelopmentKit, arguments);

                            // Return
                            return arguments.length > 1 ? null : arguments[0]
                        };

                    // Modification > Debug > Log
                    debug.log = log;

                    // Return
                    return debug
                })(),

                // Intervals
                intervals: [],

                // Maximum Call Stack Size
                maxCallStackSize: (function a(){try{return 1+a()}catch(b){return 1}})(),

                // Special Characters
                specialCharacters: '�',

                // Tag Names
                tagNames: ['a', 'audio', 'br', 'button', 'canvas', 'caption', 'div', 'dl', 'element', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'img', 'input', 'li', 'ol', 'p', 'q', 'script', 'style', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video', 'lapysjs-element'],

                // Value Types
                valueTypes: ['boolean', 'function', 'number', 'object', 'string', 'symbol']
            }
        };
            /* Functions
                    --- NOTE ---
                        #Lapys: Functions required to add values to the LapysJS Development Kit.
            */
                // Object
                    // Create
                    LapysJSDevelopmentKit.functions.objectCreate = LapysJSDevelopmentKit.objects.object.create;

                    // Define Property
                    LapysJSDevelopmentKit.functions.objectDefineProperty = LapysJSDevelopmentKit.objects.object.defineProperty;

                    /* Get Own Property Descriptor
                            --- NOTE ---
                                #Lapys: Credit to MDN (https://gist.github.com/jhermsmeier/9a34b06a107bbf5d2c91)
                    */
                    LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor = LapysJSDevelopmentKit.objects.object.getOwnPropertyDescriptor || function getOwnPropertyDescriptor(){var a=arguments[0],b=arguments[1],c='function'==typeof a.__lookupGetter__&&'function'==typeof a.__lookupSetter__,d=c?a.__lookupGetter__(b)||a.__lookupSetter__(b):null;return null==d?{configurable:!0,writable:!0,enumerable:!0,value:a[b]}:{configurable:!0,enumerable:!0,get:a.__lookupGetter__(b),set:a.__lookupSetter__(b)}};

                    // Get Own Property Descriptors
                    LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptors = LapysJSDevelopmentKit.objects.object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(a){var b={},c=LapysJSDevelopmentKit.functions.objectKeys(a),d=0,e=c.length;try{for(d;d!=e;d+=1){f=c[d];var g=LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(a,f);g&&(b[f]=g)}for(var f in a){var g=LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(a,f);g&&(b[f]=g)}}catch(h){}return b};

                    // Keys
                    LapysJSDevelopmentKit.functions.objectKeys = LapysJSDevelopmentKit.objects.object.keys;

                    /* Is
                            --- NOTE ---
                                #Lapys: Credit to MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill)
                    */
                    LapysJSDevelopmentKit.functions.objectIs = LapysJSDevelopmentKit.objects.object.is || function is(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b};

                    // Prototype
                        // To String
                        LapysJSDevelopmentKit.functions.objectPrototypeToString = (function objectPrototypeToString() {
                            // Initialization > Method
                            var method = LapysJSDevelopmentKit.objects.objectPrototype.toString;

                            // Return
                            return function objectPrototypeToString() { return arguments.length ? method.call(arguments[0]) : '' }
                        })();

            /* Objects
                    --- NOTE ---
                        #Lapys: Necessary functions and objects are added here to
                            prepare the library.
            */
                // Add Event
                LapysJSDevelopmentKit.objects.addEvent = (function() {
                    // Initialization > (Methods, Index, Length)
                    var methods = [LapysJSDevelopmentKit.objects.windowPrototype.addEventListener, LapysJSDevelopmentKit.objects.windowPrototype.attachEvent],
                        index = 0,
                        length = methods.length;

                    // Loop > Update > Index
                    while (!LapysJSDevelopmentKit.functions.isNativeFunction(methods[index]) && index != length)
                        index += 1;

                    // Return
                    return index == length ? null : methods[index]
                })();

                // Cancel Animation Frame
                LapysJSDevelopmentKit.objects.cancelAnimationFrame = (function() {
                    // Initialization > (Methods, Iterator, Length)
                    var methods = [window.cancelAnimationFrame, window.mozCancelAnimationFrame, window.webkitCancelAnimationFrame],
                        iterator = 0,
                        length = methods.length;

                    /* Loop
                            Index Methods.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Method
                        var method = methods[iterator];

                        // Logic > Return
                        if (LapysJSDevelopmentKit.functions.isNativeFunction(method))
                            return method
                    }
                })();

                // Date > Prototype
                    // Get Milliseconds
                    LapysJSDevelopmentKit.objects.datePrototypeGetMilliseconds = LapysJSDevelopmentKit.objects.datePrototype.getMilliseconds;

                // Descriptions
                    // XML Domain Request
                        // Response Text
                        LapysJSDevelopmentKit.objects.descriptions.xDomainRequestPrototypeResponseText = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.xDomainRequestPrototype || {}, 'responseText');

                    // XML HTTP Request
                        // Response Text
                        LapysJSDevelopmentKit.objects.descriptions.xmlHttpRequestPrototypeResponseText = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.xmlHttpRequestPrototype, 'responseText');

                    // Window
                        // Blur
                        LapysJSDevelopmentKit.objects.descriptions.windowBlur = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'blur');

                        // Focus
                        LapysJSDevelopmentKit.objects.descriptions.windowFocus = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'focus');

                        // Open
                        LapysJSDevelopmentKit.objects.descriptions.windowOpen = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'open');

                        // Stop
                        LapysJSDevelopmentKit.objects.descriptions.windowStop = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'stop');

                        // Prototype
                            // Document
                            LapysJSDevelopmentKit.objects.descriptions.windowDocument = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'document') || LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.windowPrototype, 'document');

                            // Navigator
                            LapysJSDevelopmentKit.objects.descriptions.windowNavigator = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'navigator') || LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.windowPrototype, 'navigator');

                            // Name
                            LapysJSDevelopmentKit.objects.descriptions.windowName = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'name');

                            // Performance
                            LapysJSDevelopmentKit.objects.descriptions.windowPerformance = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(window, 'performance') || LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.windowPrototype, 'performance');

                /* Document > Prototype
                        --- NOTE ---
                            #Lapys: Collect the `Document` prototype from the current window document object.
                */
                LapysJSDevelopmentKit.objects.documentPrototype = (function documentPrototype() {
                    // Initialization > (Prototypes, Iterator)
                    var protos = LapysJSDevelopmentKit.functions.getPrototypes(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window)),
                        iterator = protos.length;

                    /* Loop
                            Index Prototypes.
                    */
                    while (iterator) {
                        // Initialization > Prototype String
                        var protoString = LapysJSDevelopmentKit.functions.objectPrototypeToString(protos[iterator -= 1]);

                        // Logic
                        if (protoString == '[object Document]' || protoString == '[object DocumentPrototype]') {
                            // Modification > (LapysJS Development Kit > Objects) > Document
                            LapysJSDevelopmentKit.objects.document = protos[iterator].constructor;

                            // Return
                            return protos[iterator]
                        }
                    }
                })();
                    // Register Element
                    LapysJSDevelopmentKit.objects.documentPrototypeRegisterElement = LapysJSDevelopmentKit.objects.documentPrototype.registerElement;

                // Delete Event
                LapysJSDevelopmentKit.objects.delEvent = (function() {
                    // Initialization > (Methods, Index, Length)
                    var methods = [LapysJSDevelopmentKit.objects.windowPrototype.removeEventListener, LapysJSDevelopmentKit.objects.windowPrototype.detachEvent],
                        index = 0,
                        length = methods.length;

                    // Loop > Update > Index
                    while (!LapysJSDevelopmentKit.functions.isNativeFunction(methods[index]) && index != length)
                        index += 1;

                    // Return
                    return index == length ? null : methods[index]
                })();

                /* Event Observer
                        --- NOTE ---
                            #Lapys: The library's object for anything event-based.
                */
                LapysJSDevelopmentKit.objects.eventObserver = function EventObserver() {
                    // Initialization > (Observer, Properties)
                    var observer = this,
                        properties = {then: null};

                    // Modification > Observer
                        // Then
                        LapysJSDevelopmentKit.functions.objectDefineProperty(observer, 'then', {
                            // Configurable
                            configurable: !0,

                            // Get
                            get: function then() { return properties.then },

                            // Set
                            set: function then() { return properties.then = LapysJSDevelopmentKit.functions.isFunction(arguments[0]) ? arguments[0] : null }
                        });

                    // Return
                    return observer
                };
                    // Prototype
                    LapysJSDevelopmentKit.objects.eventObserverPrototype = LapysJSDevelopmentKit.objects.eventObserver.prototype;

                // HTML Document
                LapysJSDevelopmentKit.objects.htmlDocument = LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window).constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlDocumentPrototype = LapysJSDevelopmentKit.objects.htmlDocument.prototype;

                // Descriptions
                    // Document > Prototype
                        // All
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeAll = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'all') || LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlDocumentPrototype, 'all');

                        // Create Document Fragment
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateDocumentFragment = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'createDocumentFragment');

                        // Create Element
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'createElement');

                        // Create Range
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateRange = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'createRange');

                        // Document Element
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeDocumentElement = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'documentElement');

                        // Execute Command
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeExecCommand = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'execCommand');

                        // Get Elements by Tag Name
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetElementsByTagName = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'getElementsByTagName');

                        // Get Selection
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetSelection = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'getSelection');

                        // Query Command Enabled
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQueryCommandEnabled = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'queryCommandEnabled');

                        // Query Command Supported
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQueryCommandSupported = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'queryCommandSupported');

                        // Query Selector
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQuerySelector = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'querySelector');

                        // Query Selector All
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQuerySelectorAll = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'querySelectorAll');

                        // Ready State
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeReadyState = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'readyState');

                        // Title
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeTitle = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'title');

                        // Write
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeWrite = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'write');

                // HTML Internal-Frame Element
                LapysJSDevelopmentKit.objects.htmlIFrameElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'iframe').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlIFrameElementPrototype = LapysJSDevelopmentKit.objects.htmlIFrameElement.prototype;

                // HTML Input Element
                LapysJSDevelopmentKit.objects.htmlInputElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'input').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlInputElementPrototype = LapysJSDevelopmentKit.objects.htmlInputElement.prototype;

                // HTML Meta Element
                LapysJSDevelopmentKit.objects.htmlMetaElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'meta').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlMetaElementPrototype = LapysJSDevelopmentKit.objects.htmlMetaElement.prototype;

                // HTML Script Element
                LapysJSDevelopmentKit.objects.htmlScriptElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'script').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlScriptElementPrototype = LapysJSDevelopmentKit.objects.htmlScriptElement.prototype;

                // HTML Textarea Element
                LapysJSDevelopmentKit.objects.htmlTextareaElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'textarea').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlTextareaElementPrototype = LapysJSDevelopmentKit.objects.htmlTextareaElement.prototype;
                        // Blur
                        LapysJSDevelopmentKit.objects.htmlTextareaElementPrototypeBlur = LapysJSDevelopmentKit.objects.htmlTextareaElementPrototype.blur;

                        // Select
                        LapysJSDevelopmentKit.objects.htmlTextareaElementPrototypeSelect = LapysJSDevelopmentKit.objects.htmlTextareaElementPrototype.select;

                // Descriptions
                    // HTML Internal-Frame Element > Prototype
                        // Content Window
                        LapysJSDevelopmentKit.objects.descriptions.htmlIFrameElementPrototypeContentWindow = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlIFrameElementPrototype, 'contentWindow');

                    // HTML Input Element > Prototype
                        // Value
                        LapysJSDevelopmentKit.objects.descriptions.htmlInputElementPrototypeValue = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlInputElementPrototype, 'value');

                    // HTML Script Element > Prototype
                        // Source
                        LapysJSDevelopmentKit.objects.descriptions.htmlScriptElementPrototypeSrc = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlScriptElementPrototype, 'src');

                    // HTML Textarea Element > Prototype
                        // Value
                        LapysJSDevelopmentKit.objects.descriptions.htmlTextareaElementPrototypeValue = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlTextareaElementPrototype, 'value');

                /* Parameter
                        --- NOTE ---
                            #Lapys: Function parameter.
                */
                LapysJSDevelopmentKit.objects.parameter = function Parameter() {};
                    // Prototype
                    LapysJSDevelopmentKit.objects.parameterPrototype = LapysJSDevelopmentKit.objects.parameter.prototype;

                /* Parameters List
                        --- NOTE ---
                            #Lapys: List of function parameters.
                */
                LapysJSDevelopmentKit.objects.parameterList = function ParameterList() {};
                    // Prototype
                    (LapysJSDevelopmentKit.objects.parameterListPrototype = LapysJSDevelopmentKit.objects.parameterList.prototype).__proto__ = LapysJSDevelopmentKit.objects.arrayPrototype;

                // Range
                LapysJSDevelopmentKit.objects.range = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateRange.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window)).constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.rangePrototype = LapysJSDevelopmentKit.objects.range.prototype;
                        // Clone Contents
                        LapysJSDevelopmentKit.objects.rangePrototypeCloneContents = LapysJSDevelopmentKit.objects.rangePrototype.cloneContents;

                        // Select Node Contents
                        LapysJSDevelopmentKit.objects.rangePrototypeSelectNodeContents = LapysJSDevelopmentKit.objects.rangePrototype.selectNodeContents;

                // Request Animation Frame
                LapysJSDevelopmentKit.objects.requestAnimationFrame = (function() {
                    // Initialization > (Methods, Iterator, Length)
                    var methods = [window.requestAnimationFrame, window.mozRequestAnimationFrame, window.msRequestAnimationFrame, window.webkitRequestAnimationFrame],
                        iterator = 0,
                        length = methods.length;

                    /* Loop
                            Index Methods.
                    */
                    for (iterator; iterator != length; iterator += 1) {
                        // Initialization > Method
                        var method = methods[iterator];

                        // Logic > Return
                        if (LapysJSDevelopmentKit.functions.isNativeFunction(method))
                            return method
                    }
                })();

                // Selection
                LapysJSDevelopmentKit.objects.selection = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetSelection.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window)).constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.selectionPrototype = LapysJSDevelopmentKit.objects.selection.prototype;
                        // Add Range
                        LapysJSDevelopmentKit.objects.selectionPrototypeAddRange = LapysJSDevelopmentKit.objects.selectionPrototype.addRange;

                        // Get Range At
                        LapysJSDevelopmentKit.objects.selectionPrototypeGetRangeAt = LapysJSDevelopmentKit.objects.selectionPrototype.getRangeAt;

                        // Remove All Ranges
                        LapysJSDevelopmentKit.objects.selectionPrototypeRemoveAllRanges = LapysJSDevelopmentKit.objects.selectionPrototype.removeAllRanges;

            /* Functions
                    --- NOTE ---
                        #Lapys: Prototype-based functions with getters and setters are added here.
            */
                // Date > Prototype
                    // Get Milliseconds
                    LapysJSDevelopmentKit.functions.datePrototypeGetMilliseconds = function datePrototypeGetMilliseconds() {
                        // Return
                        return LapysJSDevelopmentKit.objects.datePrototypeGetMilliseconds.call(arguments[0])
                    };

                /* Get */
                    /* Ancestor Element
                            --- NOTE ---
                                #Lapys: Return the first element currently on the DOM.
                    */
                    LapysJSDevelopmentKit.functions.get.ancestorElement = function ancestorElement() {
                        // Return
                        return LapysJSDevelopmentKit.functions.get.documentPrototypeAll(arguments.length ? arguments[0] : LapysJSDevelopmentKit.functions.get.windowDocument())[0] || null
                    };

                    // Document > Prototype
                        // All
                        LapysJSDevelopmentKit.functions.get.documentPrototypeAll = function documentPrototypeAll() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeAll.get.call(arguments.length ? arguments[0] : LapysJSDevelopmentKit.functions.get.windowDocument())
                        };

                    /* File Data
                            --- NOTE ---
                                #Lapys: Return currently acceptable & valid data from JavaScript file request features.
                    */
                    LapysJSDevelopmentKit.functions.get.fileData = function fileData(requestType, source, properties) {
                        /* Initialization > (Browser, Host (Name), (Valid) Protocol, Protocol is Valid, Request)
                                --- NOTE ---
                                    #Lapys: The number of valid protocols must be at least two for consistent semantic messages.
                        */
                        var browser = LapysJSDevelopmentKit.random.browser.valueOf(),
                            host = LapysJSDevelopmentKit.functions.get._locationHost(),
                            hostname = LapysJSDevelopmentKit.functions.get._locationHostName(),
                            protocol = LapysJSDevelopmentKit.functions.alphabetizeString(LapysJSDevelopmentKit.functions.get._locationProtocol()),
                            validProtocol = ['about', 'chrome', 'data', 'http', 'https'],
                            protocolIsValid = LDKF.isInArray(validProtocol, protocol),
                            request = new LDKO.xmlHttpRequest;

                        /* Logic
                                [if:else statement]

                                --- NOTE ---
                                    #Lapys: The conditions for the testing also confuse the author (they were from a previous version of this script).
                        */
                        if (
                            (
                                protocolIsValid ||
                                (!protocolIsValid && (browser == 'edge' || browser == 'ie'))
                            ) &&
                            !(browser == 'edge' && (host == 'localhost' || hostname == 'localhost' || hostname == '127.0.0.1'))
                        ) {
                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (LDKF.isBoolean(request.withCredentials))
                                    // Request > Open
                                    LDKO.xmlHttpRequestPrototypeOpen.call(request, requestType, source, !0);

                                else if (LDKF.isNativeFunction(window.XDomainRequest))
                                    // Request > Open
                                    LDKO.xDomainRequestPrototypeOpen.call(request = new LDKO.xDomainRequest, requestType, source, !0);

                                else {
                                    // Warn
                                    LDKF.throwWarning('Cross-Origin Resource Sharing (CORS) is not supported by this development environment');

                                    // Return
                                    return null
                                }

                                // (LapysJS Development Kit > Functions) > Iterate Object > Properties
                                LDKF.iterateObject(properties, function(key, value) {
                                    // Modification > Request > [Key]
                                    request[key] = value
                                }, function(key, value, description, iteratorObject) {
                                    // Error Handling > Return
                                    try { return iteratorObject === properties && 'value' in description }
                                    catch (error) {}

                                    // Return
                                    return !1
                                });

                                // Request > Send
                                LDKF.isXmlHttpRequest(request) ? LDKO.xmlHttpRequestPrototypeSend.call(request) : LDKO.xDomainRequestPrototypeSend.call(request);

                                // Return
                                return request
                            }
                        }

                        else
                            // Warn
                            LDKF.throwWarning("The current document protocol must match the following: " + LDKF.joinArrayToString(LDKF.buildArray(LDKF.rendArray(validProtocol, -1), function(item) { return "'" + item + "'" }), ', ') + " and '" + validProtocol[validProtocol.length - 1] + "'; Or the server may understand the request and not support it");

                        // Return
                        return null
                    };

                    // Navigator > Prototype
                        // User Agent
                        LapysJSDevelopmentKit.functions.get.navigatorPrototypeUserAgent = function navigatorPrototypeUserAgent() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.navigatorPrototypeUserAgent.get.call(arguments.length ? arguments[0] : LapysJSDevelopmentKit.functions.get.windowNavigator())
                        };

                    // Window
                        // Document
                        LapysJSDevelopmentKit.functions.get.windowDocument = function windowDocument() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(arguments.length ? arguments[0] : window)
                        };

                        // Name
                        LapysJSDevelopmentKit.functions.get.windowName = function windowName() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.windowName.get.apply(arguments.length ? arguments[0] : window, LDKF.rendArray(arguments, 1))
                        };

                        // Navigator
                        LapysJSDevelopmentKit.functions.get.windowNavigator = function windowNavigator() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.windowNavigator.get.call(arguments.length ? arguments[0] : window)
                        };

                        // Performance
                        LapysJSDevelopmentKit.functions.get.windowPerformance = function windowPerformance() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.windowPerformance.get.call(arguments.length ? arguments[0] : window)
                        };

                // Document > Prototype
                    // Create Document Fragment
                    LapysJSDevelopmentKit.functions.documentPrototypeCreateDocumentFragment = function documentPrototypeCreateDocumentFragment() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateDocumentFragment.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Create Element
                    LapysJSDevelopmentKit.functions.documentPrototypeCreateElement = function documentPrototypeCreateElement() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Create Range
                    LapysJSDevelopmentKit.functions.documentPrototypeCreateRange = function documentPrototypeCreateRange() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateRange.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Document Element
                    LapysJSDevelopmentKit.functions.documentPrototypeDocumentElement = function documentPrototypeDocumentElement() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeDocumentElement.get.call(arguments[0])
                    };

                    // Execute Command
                    LapysJSDevelopmentKit.functions.documentPrototypeExecCommand = function documentPrototypeExecCommand() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeExecCommand.value.apply(arguments[0], LDKF.rendArray(arguments, 1))
                    };

                    // Get Elements By Tag Name
                    LapysJSDevelopmentKit.functions.documentPrototypeGetElementsByTagName = function documentPrototypeGetElementsByTagName() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetElementsByTagName.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Get Selection
                    LapysJSDevelopmentKit.functions.documentPrototypeGetSelection = function documentPrototypeGetSelection() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetSelection.value.call(arguments[0])
                    };

                    // Query Command Enabled
                    LapysJSDevelopmentKit.functions.documentPrototypeQueryCommandEnabled = function documentPrototypeQueryCommandEnabled() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQueryCommandEnabled.value.apply(arguments[0], LDKF.rendArray(arguments, 1))
                    };

                    // Query Command Supported
                    LapysJSDevelopmentKit.functions.documentPrototypeQueryCommandSupported = function documentPrototypeQueryCommandSupported() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQueryCommandSupported.value.apply(arguments[0], LDKF.rendArray(arguments, 1))
                    };

                    // Query Selector
                    LapysJSDevelopmentKit.functions.documentPrototypeQuerySelector = function documentPrototypeQuerySelector() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQuerySelector.value.apply(arguments[0], LDKF.rendArray(arguments, 1))
                    };

                    // Query Selector All
                    LapysJSDevelopmentKit.functions.documentPrototypeQuerySelectorAll = function documentPrototypeQuerySelectorAll() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQuerySelectorAll.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Write
                    LapysJSDevelopmentKit.functions.documentPrototypeWrite = function documentPrototypeWrite() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeWrite.value.apply(arguments[0], LDKF.rendArray(arguments, 1))
                    };

                // Element > Prototype
                    // Get Attribute
                    LapysJSDevelopmentKit.functions.elementPrototypeGetAttribute = function elementPrototypeGetAttribute() {
                        // Return
                        return LapysJSDevelopmentKit.objects.elementPrototypeGetAttribute.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Has Attribute
                    LapysJSDevelopmentKit.functions.elementPrototypeHasAttribute = function elementPrototypeHasAttribute() {
                        // Return
                        return LapysJSDevelopmentKit.objects.elementPrototypeHasAttribute.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Query Selector
                    LapysJSDevelopmentKit.functions.elementPrototypeQuerySelectorAll = function elementPrototypeQuerySelectorAll() {
                        // Return
                        return LapysJSDevelopmentKit.objects.elementPrototypeQuerySelectorAll.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Remove Attribute
                    LapysJSDevelopmentKit.functions.elementPrototypeRemoveAttribute = function elementPrototypeRemoveAttribute() {
                        // Return
                        return LapysJSDevelopmentKit.objects.elementPrototypeRemoveAttribute.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Set Attribute
                    LapysJSDevelopmentKit.functions.elementPrototypeSetAttribute = function elementPrototypeSetAttribute() {
                        // Return
                        return LapysJSDevelopmentKit.objects.elementPrototypeSetAttribute.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                // HTML Element > Prototype
                    // Focus
                    LapysJSDevelopmentKit.functions.htmlElementPrototypeFocus = function htmlElementPrototypeFocus() {
                        // Return
                        return LapysJSDevelopmentKit.objects.htmlElementPrototypeFocus.call(arguments[0])
                    };

                // HTML Textarea Element > Prototype
                    // Blur
                    LapysJSDevelopmentKit.functions.htmlTextareaElementPrototypeBlur = function htmlTextareaElementPrototypeBlur() {
                        // Return
                        return LapysJSDevelopmentKit.objects.htmlTextareaElementPrototypeBlur.call(arguments[0])
                    };

                    // Select
                    LapysJSDevelopmentKit.functions.htmlTextareaElementPrototypeSelect = function htmlTextareaElementPrototypeSelect() {
                        // Return
                        return LapysJSDevelopmentKit.objects.htmlTextareaElementPrototypeSelect.call(arguments[0])
                    };

                // Node > Prototype
                    // Append Child
                    LapysJSDevelopmentKit.functions.nodePrototypeAppendChild = function nodePrototypeAppendChild() {
                        // Return
                        return LapysJSDevelopmentKit.objects.nodePrototypeAppendChild.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Remove Child
                    LapysJSDevelopmentKit.functions.nodePrototypeRemoveChild = function nodePrototypeRemoveChild() {
                        // Return
                        return LapysJSDevelopmentKit.objects.nodePrototypeRemoveChild.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                // Performance > Prototype
                    // Now
                    LapysJSDevelopmentKit.functions.performancePrototypeNow = function performancePrototypeNow() {
                        // Return
                        return LapysJSDevelopmentKit.objects.performancePrototypeNow.call(arguments.length ? arguments[0] : LapysJSDevelopmentKit.functions.get.windowPerformance())
                    };

                // Range > Prototype
                    // Clone Contents
                    LapysJSDevelopmentKit.functions.rangePrototypeCloneContents = function rangePrototypeCloneContents() {
                        // Return
                        return LapysJSDevelopmentKit.objects.rangePrototypeCloneContents.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Select Node Contents
                    LapysJSDevelopmentKit.functions.rangePrototypeSelectNodeContents = function rangePrototypeSelectNodeContents() {
                        // Return
                        return LapysJSDevelopmentKit.objects.rangePrototypeSelectNodeContents.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                // Selection > Prototype
                    // Add Range
                    LapysJSDevelopmentKit.functions.selectionPrototypeAddRange = function selectionPrototypeAddRange() {
                        // Return
                        return LapysJSDevelopmentKit.objects.selectionPrototypeAddRange.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Get Range At
                    LapysJSDevelopmentKit.functions.selectionPrototypeGetRangeAt = function selectionPrototypeGetRangeAt() {
                        // Return
                        return LapysJSDevelopmentKit.objects.selectionPrototypeGetRangeAt.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Remove All Ranges
                    LapysJSDevelopmentKit.functions.selectionPrototypeRemoveAllRanges = function selectionPrototypeRemoveAllRanges() {
                        // Return
                        return LapysJSDevelopmentKit.objects.selectionPrototypeRemoveAllRanges.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                // Window
                    // Blur
                    LapysJSDevelopmentKit.functions.windowBlur = function windowBlur() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.windowBlur.value.call(arguments.length ? arguments[0] : window)
                    };

                    // Focus
                    LapysJSDevelopmentKit.functions.windowFocus = function windowFocus() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.windowFocus.value.call(arguments.length ? arguments[0] : window)
                    };

                    // Open
                    LapysJSDevelopmentKit.functions.windowOpen = function windowOpen() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.windowOpen.value.apply(arguments.length ? arguments[0] : window, LDKF.rendArray(arguments, 1))
                    };

                    // Stop
                    LapysJSDevelopmentKit.functions.windowStop = function windowStop() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.windowStop.value.call(arguments.length ? arguments[0] : window)
                    };

            /* Objects
                    --- NOTE ---
                        #Lapys: Add all other necessary objects to the LapysJS Development Kit.
            */
                // Document Fragment
                LapysJSDevelopmentKit.objects.documentFragment = (function() {
                    // Return
                    return (function() {
                        // Initialization > (Native Code, Stream)
                        var nativeCode = LapysJSDevelopmentKit.functions.string(window.DocumentFragment),
                            stream = LapysJSDevelopmentKit.functions.removeCharString(LapysJSDevelopmentKit.functions.trimLeftString(nativeCode), ' ');

                        // Return
                        return stream[0] == 'f' && stream[1] == 'u' && stream[2] == 'n' && stream[3] == 'c' && stream[4] == 't' && stream[5] == 'i' && stream[6] == 'o' && stream[7] == 'n' &&
                            stream[8] == 'D' && stream[9] == 'o' && stream[10] == 'c' && stream[11] == 'u' && stream[12] == 'm' && stream[13] == 'e' && stream[14] == 'n' && stream[15] == 't' && stream[16] == 'F' && stream[17] == 'r' && stream[18] == 'a' && stream[19] == 'g' && stream[20] == 'm' && stream[21] == 'e' && stream[22] == 'n' && stream[23] == 't'
                    })() && LapysJSDevelopmentKit.functions.isNativeFunction(window.DocumentFragment) ?
                        window.DocumentFragment :
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateDocumentFragment.value.call(LapysJSDevelopmentKit.functions.get.windowDocument()).constructor
                })();
                    // Prototype
                    LapysJSDevelopmentKit.objects.documentFragmentPrototype = LapysJSDevelopmentKit.objects.documentFragment.prototype;

                // DOM Exception
                LapysJSDevelopmentKit.objects.domException = (function domException() {
                    // Initialization > Error Object
                    var errorObject;

                    // Error Handling > Update > Error Object
                    try { LapysJSDevelopmentKit.functions.documentPrototypeQuerySelector(LapysJSDevelopmentKit.functions.get.windowDocument(), '') }
                    catch (error) { errorObject = error.constructor }

                    // Return
                    return errorObject
                })();

                /* File Manager
                        --- NOTE ---
                            #Lapys: Object for managing file-based procedures.
                */
                LapysJSDevelopmentKit.objects.fileManager = new (function FileManager() {
                    /* Initialization > (File (Manager), Properties)
                            --- NOTE ---
                                #Lapys: Representation of a file from a machine.

                            --- WARN ---
                                #Lapys: LapysJS file objects are not the same as the ones in the browser,
                                    this allows for a relatively universal representation of a file regardless of the browser.
                    */
                    var file = function File() {
                        // Initialization > (File, Options, Length, Details, Properties, Target)
                        var file = new (function File() {}),
                            options = arguments,
                            length = options.length,
                            details = length > 2 ? LDKF.customObject('', options[2]) : {},
                            properties = {
                                // Attributes
                                attributes: {
                                    // Hidden
                                    hidden: !1,

                                    // Read-Only
                                    readOnly: !1
                                },

                                // Character Encoding Set
                                charset: 'UTF-8',

                                // Content
                                content: null,

                                // Location
                                location: null,

                                // Modified
                                modified: new LDKO.date,

                                // Name
                                name: length ? LapysJSDevelopmentKit.functions.string(options[0]) : '',

                                /* On Load End
                                        --- NOTE ---
                                            #Lapys: Executes when a file is finished loading.
                                */
                                onloadend: null,

                                /* Size
                                        --- UPDATE REQUIRED ---
                                            #Lapys: How will this be best implemented?
                                */
                                size: 0,

                                // Type
                                type: length > 1 ? LapysJSDevelopmentKit.functions.string(options[1]) : null
                            }, that = this;

                        // Modification
                            /* File
                                    --- NOTE ---
                                        #Lapys: Methods & properties related to the file and modifying it.
                            */
                                // Attribute
                                LDKF.objectDefineProperty(file, 'attributes', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function attributes() {
                                        // Return
                                        return LDKF.customObject('FileAttributes', properties.attributes)
                                    }
                                });

                                // Character Encoding Set
                                LDKF.objectDefineProperty(file, 'charset', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function charset() {
                                        // Return
                                        return properties.charset
                                    }
                                });

                                // Clear Line
                                LDKF.objectDefineProperty(file, 'clearLine', {
                                    // Configurable
                                    configurable: !0,

                                    // Value
                                    value: function clearLine() {
                                        /* Logic
                                                [if statement]
                                        */
                                        if (!properties.attributes.readOnly) {
                                            // Initialization > (Character, Content, Newline Found)
                                            var character = !0, content = properties.content || '',
                                                newlineFound = !1;

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (content) {
                                                /* Loop
                                                        [while statement]
                                                */
                                                while (character && !newlineFound) {
                                                    // Update > (Character, Newline Found, Content)
                                                    character = content[content.length - 1];
                                                    (character == '\n') && (newlineFound = !0);
                                                    content = LapysJSDevelopmentKit.functions.rendString(content, -1)
                                                }

                                                // Return
                                                return properties.content = content
                                            }

                                            // Return
                                            return null
                                        }
                                    },

                                    // Writable
                                    writable: !0
                                });

                                // Content
                                LDKF.objectDefineProperty(file, 'content', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function content() {
                                        // Return
                                        return properties.content
                                    }
                                });

                                // Full Name
                                LDKF.objectDefineProperty(file, 'fullName', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function fullName() {
                                        // Return
                                        return properties.name + (properties.type ? '.' + properties.type : '')
                                    }
                                });

                                // Hidden Property
                                (that === hidden) && LDKF.objectDefineProperty(file, '[[HiddenProperty]]', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !1,

                                    // Value
                                    value: properties,

                                    // Writable
                                    writable: !1
                                });

                                // Location
                                LDKF.objectDefineProperty(file, 'location', {
                                    // Get
                                    get: function location() {
                                        // Return
                                        return properties.location
                                    },

                                    // Set
                                    set: function location() {
                                        // Return
                                        return properties.location = LDKF.string(arguments[0])
                                    }
                                });

                                // Last Modified
                                LDKF.objectDefineProperty(file, 'lastModified', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function lastModified() {
                                        // Return
                                        return properties.modified
                                    }
                                });

                                // Name
                                LDKF.objectDefineProperty(file, 'name', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function name() {
                                        // Return
                                        return properties.name
                                    }
                                });

                                // On Load End
                                LDKF.objectDefineProperty(file, 'onloadend', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function onloadend() {
                                        // Return
                                        return properties.onloadend
                                    },

                                    // Set
                                    set: function onloadend(listener) {
                                        // Return
                                        return LDKF.isFunction(listener) ? properties.onloadend = listener : properties.onloadend
                                    }
                                });

                                // Size
                                LDKF.objectDefineProperty(file, 'size', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function size() {
                                        // Return
                                        return properties.size = (properties.content || '').length
                                    }
                                });

                                // Type
                                LDKF.objectDefineProperty(file, 'type', {
                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function type() {
                                        // Return
                                        return properties.type
                                    }
                                });

                                // Write
                                LDKF.objectDefineProperty(file, 'write', {
                                    // Configurable
                                    configurable: !0,

                                    // Value
                                    value: function write() {
                                        /* Logic
                                                [if statement]
                                        */
                                        if (!properties.attributes.readOnly) {
                                            // Initialization > (Content, Data)
                                            var content = properties.content,
                                                data = LDKF.string(arguments[0]);

                                            // Modification > Properties > Content
                                            properties.content = content ? content + data : data;

                                            // Return
                                            return data
                                        }
                                    },

                                    // Writable
                                    writable: !0
                                });

                                // Write Line
                                LDKF.objectDefineProperty(file, 'writeLine', {
                                    // Configurable
                                    configurable: !0,

                                    // Value
                                    value: function writeLine() {
                                        // Logic > Return
                                        if (!properties.attributes.readOnly)
                                            return file.write(LDKF.string(arguments[0]) + '\n')
                                    },

                                    // Writable
                                    writable: !0
                                });

                            // Properties
                                // Attributes
                                    // Hidden
                                    properties.attributes.hidden = !!details.hidden;

                                    // Read-Only
                                    properties.attributes.readOnly = !!details.readOnly;

                                // Character Encoding Set
                                ('charset' in details) && ((details.charset === hidden) || (properties.charset = LapysJSDevelopmentKit.functions.string(details.charset)));

                                // Content
                                ('content' in details) && (properties.content = details.content);

                                /* Location
                                        --- NOTE ---
                                            #Lapys: The instant a file is created in the local machine,
                                                it`s location by default is the document address.
                                */
                                properties.location = 'location' in details ? LapysJSDevelopmentKit.functions.string(details.location) : LDKO._locationHref;

                        // Return
                        return file
                    }, fileManager = this,
                    properties = {};

                    /* Modification > File Manager
                            --- NOTE ---
                                #Lapys: File access, modification, query and more...
                    */
                        /* Create
                                --- NOTE ---
                                    #Lapys: Create a new file object.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'create', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: properties.create = function create(name, type, options) {
                                // Return
                                return file.apply(this, arguments)
                            }
                        });

                        /* Current Directory
                                --- NOTE ---
                                    #Lapys: Return the current directory of the window document.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'dir', {
                            // Get
                            get: function currentDirectory() {
                                // Return
                                return LDKO._locationHref
                            }
                        });

                        /* Download
                                --- NOTE ---
                                    #Lapys: Load a newly created file object onto the local machine.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'download', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: function download(name, type, options) {
                                // Update > (Name, Options, Type)
                                name = arguments.length ? LDKF.string(name) : '*';
                                options = LDKF.customObject('', options);
                                type = arguments.length > 1 ? LDKF.string(type) : 'text/plain';

                                /* Logic
                                        [switch:case statement]
                                */
                                switch (type) {
                                    case 'css': type = 'text/css'; break;
                                    case 'html': type = 'text/html'; break;
                                    case 'js': type = 'text/javascript'; break;
                                    case 'txt': type = 'text/plain'
                                }

                                /* Initialization > (Ancestor, Downloader, File)
                                        --- NOTE ---
                                            #Lapys: Could there be more options we use to describe the file we want to download?
                                */
                                var ancestor = LDKF.get.ancestorElement(),
                                    downloader = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'a'),
                                    file = properties.create(name, type, {
                                        // Character Encoding Set
                                        charset: 'charset' in options ? LDKF.string(options.charset) : hidden,

                                        // Content
                                        content: 'content' in options ? LDKF.string(options.content) : '',

                                        /* Location
                                                --- UPDATE REQUIRED ---
                                                    #Lapys: Sets the system address of where the file should be saved on the local address.
                                        */
                                        location: 'location' in options ? LDKF.string(options.location) : '',

                                        // Name
                                        name: name
                                    });

                                // Modification > Downloader > (Download, Hyperlink Reference)
                                LDKF.elementPrototypeSetAttribute(downloader, 'download', name);
                                LDKF.elementPrototypeSetAttribute(downloader, 'href', 'data:' + type + ';charset=' + file.charset + ',' + window.encodeURIComponent(file.content));

                                // Insertion
                                LDKF.nodePrototypeAppendChild(ancestor, downloader);

                                // Downloader > Click
                                LDKO.htmlElementPrototypeClick.call(downloader);

                                // Deletion
                                LDKF.nodePrototypeRemoveChild(ancestor, downloader);

                                // Return
                                return file
                            }
                        });

                        /* Import
                                --- NOTE ---
                                    #Lapys: Inject a file into the current document through different but specified means.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'import', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value --- CHECKPOINT ---
                            value: function _import(source) {
                                // Initialization > File
                                var file = (source || {}).constructor === file ? file : properties.read.apply(window, arguments);

                                // Modification > File > On Load End
                                file.onloadend = function onloadend() {
                                    // Initialization > ((Current) Location, Document, Type)
                                    var currentLocation = LDKO._locationHref,
                                        location = file.location,
                                        document = LDKF.get.windowDocument(),
                                        type = file.type;

                                    /* Logic
                                            [if:else if:else statement]

                                            --- NOTE ---
                                                #Lapys: Differing and default actions for differing file types.
                                    */
                                        // {CSS}
                                        if (type == 'css') {
                                            var stylesheet;

                                            if (location === currentLocation) {
                                                stylesheet = LDKF.documentPrototypeCreateElement(document, 'style');
                                            }

                                            else {
                                                stylesheet = LDKF.documentPrototypeCreateElement(document, 'link');
                                            }

                                            LDKF.elementPrototypeSetAttribute(stylesheet, 'media', 'all');
                                            LDKF.elementPrototypeSetAttribute(stylesheet, 'type', 'text/javascript');

                                            // Return
                                            return stylesheet
                                        }

                                        // {JavaScript}
                                        else if (type == 'js')
                                            if (location === currentLocation) {}
                                            else {}

                                        // {[Default]}
                                        else {
                                            // Initialization > Recipient
                                            var recipient = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'body') || LDKF.get.ancestorElement();

                                            // Modification > Recipient > Inner HTML
                                            LDKF.set.elementPrototypeInnerHTML(recipient, LDKF.get.elementPrototypeInnerHTML(recipient) + (file.content || ''))
                                        }
                                };

                                // Return
                                return file
                            }
                        });

                        /* Open
                                --- UPDATE REQUIRED ---
                                    #Lapys: (Request to) open a file from the local machine.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'open', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: function open() {}
                        });

                        /* Read
                                --- NOTE ---
                                    #Lapys: Return relative data from a file in the local machine in the form of a `File` object.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'read', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: properties.read = function read(source, options) {
                                /* Logic
                                        [if statement]
                                */
                                if (arguments.length) {
                                    // Update > (Options, Source)
                                    options = LDKF.object(options);
                                    source = LDKF.string(source);

                                    /* Initialization > (File (Properties), Is XML HTTP Request)
                                            --- NOTE ---
                                                #Lapys: Creating a file with the `hidden` object allows for private access
                                                    to the file object properties.
                                    */
                                    var file = properties.create.call(hidden),
                                        fileProperties = file['[[HiddenProperty]]'],
                                        isXmlHttpRequest;

                                    // Modification > File > On Load End
                                    ('onloadend' in options) && (file.onloadend = options.onloadend);

                                    // Initialization > Request
                                    var request = LDKF.get.fileData('GET', source, {
                                        // On Load End
                                        onloadend: function onloadend() {
                                            // Modification > File Properties
                                                // Attributes
                                                fileProperties.attributes = {
                                                    /* Hidden
                                                            --- UPDATE REQUIRED ---
                                                                #Lapys: How to detect if a file on the local machine is hidden.
                                                    */
                                                    hidden: !1,

                                                    // Read-Only
                                                    readOnly: !1
                                                };

                                                /* Character Encoding Set
                                                        --- UPDATE REQUIRED ---
                                                            #Lapys:
                                                                - There has to be a native way to detect file encoding.
                                                                - Encoding JS (https://github.com/polygonplanet/encoding.js) may be a prospective framework.
                                                */
                                                fileProperties.charset = null;

                                                // Content
                                                fileProperties.content = isXmlHttpRequest ? LDKO.descriptions.xmlHttpRequestPrototypeResponseText.get.call(request) : LDKO.descriptions.xDomainRequestPrototypeResponseText.get.call(request);

                                                // Name
                                                fileProperties.name = LDKF.getBeforeCharString(LDKF.getAfterCharString(source, '/', 'last') || source, '.', 'last');

                                                // Type
                                                fileProperties.type = LDKF.alphabetizeString(LDKF.removeCharString(source, fileProperties.name)) || null;

                                                // On Load End
                                                LDKF.isFunction(fileProperties.onloadend) && fileProperties.onloadend.call(file)
                                        }
                                    });

                                    // Update > Is XML HTTP Request
                                    isXmlHttpRequest = LDKF.isXmlHttpRequest(request);

                                    // Deletion
                                    delete file['[[HiddenProperty]]'];

                                    // Return
                                    return file
                                }
                            }
                        });

                        /* Remove
                                --- UPDATE REQUIRED ---
                                    #Lapys: (Request to) remove a file from the local machine.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'remove', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: function remove() {}
                        });

                        /* Write
                                --- UPDATE REQUIRED ---
                                    #Lapys: (Request to) edit a specified file from the local machine.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fileManager, 'write', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: function write() {}
                        });

                    // Return
                    return fileManager
                });

                /* Font Manager
                        --- CHECKPOINT ---
                        --- NOTE ---
                            #Lapys: Object for managing font-based functions.
                */
                LapysJSDevelopmentKit.objects.fontManager = new (function FontManager() {
                    // Initialization > (Font (Manager), Properties)
                    var font = function Font() {
                        // Initialization > (Font, Properties, Target)
                        var font = new (function Font() {}),
                            properties = {
                                // Name
                                name: null,

                                // Type
                                type: null
                            }, that = this;

                        // Modification > Font
                            // Name
                            LDKF.objectDefineProperty(font, 'name', {
                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function name() {
                                    // Return
                                    return properties.name
                                }
                            });

                            // Hidden Property
                            (that === hidden) && LDKF.objectDefineProperty(font, '[[HiddenProperty]]', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !1,

                                // Value
                                value: properties,

                                // Writable
                                writable: !1
                            });

                            // Type
                            LDKF.objectDefineProperty(font, 'type', {
                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function type() {
                                    // Return
                                    return properties.type
                                }
                            });

                        // Return
                        return font
                    }, fontManager = this,
                    properties = {};

                    /* Modification > Font Manager
                            --- NOTE ---
                                #Lapys: Font events, injection and more...
                    */
                        /* Import
                                --- NOTE ---
                                    #Lapys: Inject a new font into the current document.
                        */
                        LapysJSDevelopmentKit.functions.objectDefineProperty(fontManager, 'import', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Value
                            value: function _import(name, type) {}
                        });

                    // Return
                    return fontManager
                });

                // HTML All Collection
                LapysJSDevelopmentKit.objects.htmlAllCollection = LapysJSDevelopmentKit.functions.get.documentPrototypeAll().constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlAllCollectionPrototype = LapysJSDevelopmentKit.objects.htmlAllCollection.prototype;

                // HTML Collection
                LapysJSDevelopmentKit.objects.htmlCollection = LapysJSDevelopmentKit.functions.documentPrototypeGetElementsByTagName(LapysJSDevelopmentKit.functions.get.windowDocument(), '').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlCollectionPrototype = LapysJSDevelopmentKit.objects.htmlCollection.prototype;

                // HTML Element
                LapysJSDevelopmentKit.objects.htmlElement = LapysJSDevelopmentKit.functions.documentPrototypeDocumentElement(LapysJSDevelopmentKit.functions.get.windowDocument()).__proto__.__proto__.constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlElementPrototype = LapysJSDevelopmentKit.objects.htmlElement.prototype;
                        // Click
                        LapysJSDevelopmentKit.objects.htmlElementPrototypeClick = LapysJSDevelopmentKit.objects.htmlElementPrototype.click;

                        // Focus
                        LapysJSDevelopmentKit.objects.htmlElementPrototypeFocus = LapysJSDevelopmentKit.objects.htmlElementPrototype.focus;

                // Element
                LapysJSDevelopmentKit.objects.element = LapysJSDevelopmentKit.objects.htmlElement.__proto__;
                    /* Prototype
                            --- NOTE ---
                                #Lapys: The conditional fallback is only for legacy browsers
                                    (The `class` keyword is not valid in such browsers).
                    */
                    LapysJSDevelopmentKit.objects.elementPrototype = LapysJSDevelopmentKit.objects.element.prototype || (LapysJSDevelopmentKit.objects.element = window.Element).prototype;
                        // Get Attribute Node
                        LapysJSDevelopmentKit.objects.elementPrototypeGetAttributeNode = LapysJSDevelopmentKit.objects.elementPrototype.getAttributeNode;

                        // Get Attribute
                        LapysJSDevelopmentKit.objects.elementPrototypeGetAttribute = LapysJSDevelopmentKit.objects.elementPrototype.getAttribute;

                        // Has Attribute
                        LapysJSDevelopmentKit.objects.elementPrototypeHasAttribute = function hasAttribute(name) {
                            // Return
                            return !LapysJSDevelopmentKit.functions.isNull(LapysJSDevelopmentKit.objects.elementPrototypeGetAttribute.apply(this, arguments))
                        };

                        // Query Selector All
                        LapysJSDevelopmentKit.objects.elementPrototypeQuerySelectorAll = LapysJSDevelopmentKit.objects.elementPrototype.querySelectorAll;

                        // Remove Attribute
                        LapysJSDevelopmentKit.objects.elementPrototypeRemoveAttribute = LapysJSDevelopmentKit.objects.elementPrototype.removeAttribute;

                        // Set Attribute
                        LapysJSDevelopmentKit.objects.elementPrototypeSetAttribute = LapysJSDevelopmentKit.objects.elementPrototype.setAttribute;

                // Attribute
                LapysJSDevelopmentKit.objects.attr = (function() {
                    // Initialization > Element
                    var element = LapysJSDevelopmentKit.functions.documentPrototypeCreateElement(LapysJSDevelopmentKit.functions.get.windowDocument(), 'a');

                    // Modification > Element > [Name]
                    LapysJSDevelopmentKit.objects.elementPrototypeSetAttribute.call(element, 'a', '');

                    // Return
                    return LapysJSDevelopmentKit.objects.elementPrototypeGetAttributeNode.call(element, 'a').constructor
                })();
                    // Prototype
                    LapysJSDevelopmentKit.objects.attrPrototype = LapysJSDevelopmentKit.objects.attr.prototype;

                // Node
                LapysJSDevelopmentKit.objects.node = LapysJSDevelopmentKit.objects.element.__proto__;
                    // Prototype
                    LapysJSDevelopmentKit.objects.nodePrototype = LapysJSDevelopmentKit.objects.node.prototype || (LapysJSDevelopmentKit.objects.node = window.Node).prototype;
                        // Append Child
                        LapysJSDevelopmentKit.objects.nodePrototypeAppendChild = LapysJSDevelopmentKit.objects.nodePrototype.appendChild;

                        // Remove Child
                        LapysJSDevelopmentKit.objects.nodePrototypeRemoveChild = LapysJSDevelopmentKit.objects.nodePrototype.removeChild;

                // Node List
                LapysJSDevelopmentKit.objects.nodeList = LapysJSDevelopmentKit.functions.documentPrototypeQuerySelectorAll(LapysJSDevelopmentKit.functions.get.windowDocument(), '*').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.nodeListPrototype = LapysJSDevelopmentKit.objects.nodeList.prototype;

                // Reference Error
                LapysJSDevelopmentKit.objects.referenceError = (function referenceError() {
                    // Initialization > (Error Object, Stream)
                    var errorObject,
                        stream = 'a';

                    // Error Handling
                    try {
                        // Loop > Update > Stream
                        while (stream in window)
                            stream += 'a';

                        // Execution
                        LapysJSDevelopmentKit.objects.eval(stream)
                    }
                    catch (error) {
                        // Update > Error Object
                        errorObject = error.constructor
                    }

                    // Return
                    return errorObject
                })();

                // Syntax Error
                LapysJSDevelopmentKit.objects.syntaxError = (function syntaxError() {
                    // Initialization > Error Object
                    var errorObject;

                    // Error Handling > Update > Error Object
                    try { LapysJSDevelopmentKit.objects.eval('#') }
                    catch (error) { errorObject = error.constructor }

                    // Return
                    return errorObject
                })();

                // URI Error
                LapysJSDevelopmentKit.objects.uriError = (function uriError() {
                    // Initialization > (Error Object, Method)
                    var errorObject,
                        method = LapysJSDevelopmentKit.functions.decodeURIComponent;

                    /* Logic
                            [if:else statement]
                    */
                    if (LapysJSDevelopmentKit.functions.isNativeFunction(method))
                        // Error Handling > Update > Error Object
                        try { method('a%AFc') }
                        catch (error) { errorObject = error.constructor }

                    else
                        // Return
                        return window.URIError;

                    // Return
                    return errorObject
                })();

                /* Descriptions
                        --- NOTE ---
                            #Lapys: Define all other descriptions here.
                */
                    // Element > Prototype
                        // Inner HTML
                        LapysJSDevelopmentKit.objects.descriptions.elementPrototypeInnerHTML = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.elementPrototype, 'innerHTML') || LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlElementPrototype, 'innerHTML');

                    // HTML All Collection > Prototype
                        // Length
                        LapysJSDevelopmentKit.objects.descriptions.htmlAllCollectionPrototypeLength = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlAllCollectionPrototype, 'length');

                    // HTML Collection > Prototype
                        // Length
                        LapysJSDevelopmentKit.objects.descriptions.htmlCollectionPrototypeLength = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlCollectionPrototype, 'length');

                    // HTML Element > Prototype
                        // Inner Text
                        LapysJSDevelopmentKit.objects.descriptions.htmlElementPrototypeInnerText = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlElementPrototype, 'innerText');

                        // On Click
                        LapysJSDevelopmentKit.objects.descriptions.htmlElementPrototypeOnClick = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlElementPrototype, 'onclick');

                        // Style
                        LapysJSDevelopmentKit.objects.descriptions.htmlElementPrototypeStyle = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlElementPrototype, 'style');

                    // Node > Prototype
                        // Child Nodes
                        LapysJSDevelopmentKit.objects.descriptions.nodePrototypeChildNodes = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.nodePrototype, 'childNodes');

                        // Parent Node
                        LapysJSDevelopmentKit.objects.descriptions.nodeListPrototypeParentNode = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.nodePrototype, 'parentNode');

                        // Text Content
                        LapysJSDevelopmentKit.objects.descriptions.nodePrototypeTextContent = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.nodePrototype, 'textContent');

                    // Node List > Prototype
                        // Length
                        LapysJSDevelopmentKit.objects.descriptions.nodeListPrototypeLength = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.nodeListPrototype, 'length');

                    // Regular Expression > Prototype
                        // Test
                        LapysJSDevelopmentKit.objects.descriptions.regexPrototypeTest = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.regexPrototype, 'test');

                    // String > Prototype
                        // Match
                        LapysJSDevelopmentKit.objects.descriptions.stringPrototypeMatch = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.stringPrototype, 'match');

                        // Replace
                        LapysJSDevelopmentKit.objects.descriptions.stringPrototypeReplace = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.stringPrototype, 'replace');

            /* Random
                    --- NOTE ---
                        #Lapys: Miscellaneous but useful values.
            */
                // Class Keyword Valid
                LapysJSDevelopmentKit.random.classKeywordValid = (function classKeywordValid() {
                    // Initialization > Is Valid
                    var isValid = !1;

                    // Logic > Error Handling > (Update > Is Valid)
                    if (LapysJSDevelopmentKit.functions.isFunction(LapysJSDevelopmentKit.objects.eval))
                        try { LapysJSDevelopmentKit.objects.eval('class a {}'); isValid = !0 }
                        catch (error) {}

                    // Return
                    return isValid
                })();

                /* Browser
                        --- NOTE ---
                            #Lapys: Browser-related information.
                */
                LapysJSDevelopmentKit.random.browser = (function() {
                    // Browser
                    var browser = {},
                        define = LapysJSDevelopmentKit.functions.objectDefineProperty;

                    // Modification > Browser
                        // {Google} Chrome
                        define(browser, 'chrome', {
                            configurable: !0, enumerable: !0,
                            get: function chrome() {return!!(LDKF.isObject(window.chrome)&&LDKF.isObject((window.chrome||hidden).webstore))}
                        });

                        // {Microsoft} Edge
                        define(browser, 'edge', {
                            configurable: !0, enumerable: !0,
                            get: function edge() {return LDKF.isObject(window.msCredentials)}
                        });

                        // {Mozilla} Firefox
                        define(browser, 'firefox', {
                            configurable: !0, enumerable: !0,
                            get: function firefox() {return LDKF.isObject(window.InstallTrigger)}
                        });

                        // {Microsoft} Internet Explorer
                        define(browser, 'ie', {
                            configurable: !0, enumerable: !0,
                            get: function internetExplorer() {var a=LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LDKO.documentPrototype,'documentMode')||LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LDKO.documentPrototype,'documentMode');return LapysJSDevelopmentKit.functions.isNumber(LapysJSDevelopmentKit.functions.isVoid(a)?LapysJSDevelopmentKit.functions.get.windowDocument().documentMode:a.get.call(LapysJSDevelopmentKit.functions.get.windowDocument()))}
                        });

                        // Opera
                        define(browser, 'opera', {
                            configurable: !0, enumerable: !0,
                            get: function opera() {return!!((!!window.opr&&!!window.opr.addons)||!!window.opera||LDKF.indexOfString(LDKF.get.navigatorPrototypeUserAgent(LDKF.get.windowNavigator()),'OPR/')!=-1)}
                        });

                        // Safari
                        define(browser, 'safari', {
                            configurable: !0, enumerable: !0,
                            get: function safari() {return!!(LDKO.descriptions.regexPrototypeTest.value.call(/constructor/i,LDKO.htmlElement)||LDKF.objectPrototypeToString(!window.safari||window.safari.pushNotification)=='[object SafariRemoteNotification]')}
                        });

                        // Value Of
                        define(browser, 'valueOf', {
                            // Value
                            value: function valueOf() {
                                // Initialization > Current
                                var current = [];

                                // (LapysJS Development Kit > Functions) > Iterate Object > Browser
                                LapysJSDevelopmentKit.functions.iterateObject(browser, function(key, value) {
                                    // Update > Current
                                    value.call(browser) && (current[current.length] = key);
                                }, function(key, value, description, iteratorObject) { return key != 'valueOf' && browser === iteratorObject }, !0);

                                // Initialization > Length
                                var length = current.length;

                                // Return
                                return length ? (length == 1 ? current[0] : current) : null
                            }
                        });

                    // Return
                    return browser
                })();

                /* Max Timeout Counter
                        --- NOTE ---
                            #Lapys: Delay till all timeouts are 'removed'.

                        --- WARN ---
                            #Lapys: Update when using either the `setInterval` or `setTimeout` function.
                */
                LapysJSDevelopmentKit.functions.objectDefineProperty(LapysJSDevelopmentKit.random, 'maxTimeoutCounter', new (function Object() {
                    // Initialization > (Target, Counter)
                    let that = this,
                        counter = 0;

                    // Modification > Target
                        // Get
                        that.get = function getMaxTimeoutCounter() {
                            // Return
                            return counter
                        };

                        // Set
                        that.set = function setMaxTimeoutCounter() {
                            // Initialization > Number
                            var number = LDKF.number(arguments[0]);

                            // Return
                            return number > counter ? counter = number : counter
                        };

                    // Return
                    return that
                }));

                /* Pseudo Number
                        --- CHECKPOINT ---
                            #Lapys: Basic operations must be functional.

                        --- NOTE ---
                            #Lapys:
                                - Allows for much larger number of digits in a numeral.
                                - Sacrifices speed for size.
                */
                LapysJSDevelopmentKit.random.pseudoNumber = function PseudoNumber(characteristics, mantissa) {
                    // Initialization > Pseudo Number
                    var pseudoNumber = this;

                    // Modification > Pseudo Number
                        /* Characteristics
                                --- NOTE ---
                                    #Lapys: Digits before the decimal point.
                        */
                        pseudoNumber.characteristics = arguments.length ? characteristics : '0';

                        /* Mantissa
                                --- NOTE ---
                                    #Lapys: Digits after the decimal point.
                        */
                        pseudoNumber.mantissa = arguments.length > 1 ? mantissa : '0';

                    // Return
                    return pseudoNumber
                };
                    // Addition
                    LapysJSDevelopmentKit.random.pseudoNumber.add = function add(pseudoNumberA, pseudoNumberB) {};

                    // Divide
                    LapysJSDevelopmentKit.random.pseudoNumber.div = function divide(pseudoNumberA, pseudoNumberB) {};

                    // Exponentiate
                    LapysJSDevelopmentKit.random.pseudoNumber.exp = function exponentiate(pseudoNumberA, pseudoNumberB) {};

                    // Multiply
                    LapysJSDevelopmentKit.random.pseudoNumber.mul = function multiply(pseudoNumberA, pseudoNumberB) {};

                    // Subtraction
                    LapysJSDevelopmentKit.random.pseudoNumber.sub = function subtract(pseudoNumberA, pseudoNumberB) {};

                // Random Number Generator
                LapysJSDevelopmentKit.random.RNG = {
                    /* Algorithms
                            --- NOTE ---
                                #Lapys:
                                    - Byte-wise procedures required to generate pseudo-random numbers.
                                    - All credits go to the respective authors.
                    */
                    algorithms: {
                        // Randomizer
                        randomizer: function sfc32(a, b, c, d) {return function(){a>>>=0;b>>>=0;c>>>=0;d>>>=0;var t=(a+b)|0;a=b^b>>>9;b=c+(c<<3)|0;c=(c<<21|c>>>11);d=d+1|0;t=t+d|0;c=c+t|0;return(t>>>0)/4294967296}},

                        // Seeder
                        seeder: function xfnv1a(k) {for(var i=0,h=2166136261>>>0;i<k.length;i+=1)h=LapysJSDevelopmentKit.functions.imul(h^LDKF.charCodeAtString(k,i),16777619);return function(){h+=h<<13;h^=h>>>7;h+=h<<3;h^=h>>>17;return(h+=h<<5)>>>0}}
                    },

                    // Generate Random Number
                    generateRandomNumber: function generateRandomNumber() {
                        // Return
                        return LapysJSDevelopmentKit.random.RNG.generatedNumber = LapysJSDevelopmentKit.random.RNG.randomizer()
                    }
                };

                /* Timeout Start
                        --- NOTE ---
                            #Lapys: Necessary to 'remove' all timeouts created in this library.
                */
                    // Error Handling
                    try { LapysJSDevelopmentKit.random.timeoutStart = LapysJSDevelopmentKit.functions.setTimeout(function() {}) }
                    catch (error) { LapysJSDevelopmentKit.random.timeoutStart = 1 }

    // Definition
        // LapysJS Development Kit
        var LDK = LapysJSDevelopmentKit,
            // Components
            LDKC = LDK.components,

            // Features
            LDKf = LDK.features,

            // Functions
            LDKF = LDK.functions,

            // Information
            LDKI = LDK.information,

            // Objects
            LDKO = LDK.objects,
                // Backups
                LDKOB = LDKO.backups,

            // Random
            LDKR = LDK.random,
                // Debug
                debug = LDKR.debug,

                // Random Number Generator
                LDKRNG = LDKR.RNG;

    /* Logic
            [if statement]

            --- NOTE ---
                #Lapys: If custom settings are applied to the library.
    */
    if (typeof LapysJS == 'object') {
        // Initialization > Constructor
        var constructor = (window.LapysJS || {}).constructor;

        /* Logic
                [if statement]
        */
        if (typeof constructor == 'function')
            /* Logic
                    [if statement]
            */
            if (constructor.name != 'LapysJS') {
                // Modification
                    /* LapysJS Development Kit
                            --- NOTE ---
                                #Lapys:
                                    - Allow pre-defined options for the library.
                                    - The features that these options affect also have an effect on the total processing time for the script.
                    */
                        // Allow App Features
                        ('allowAppFeatures' in LapysJS) && (LDK.allowAppFeatures = !!LapysJS.allowAppFeatures);

                        // Components
                        LDKF.isArray(LapysJS.components) && (LDK.components = LapysJS.components);

                        // Debug Mode
                        LDK.debugMode = !!LapysJS.debugMode;

                    /* Window > LapysJS
                            --- NOTE ---
                                #Lapys: Try to allow LapysJS be re-defined by the library.
                    */
                    LDKF.objectDefineProperty(window, 'LapysJS', {configurable: !0, enumerable: !0, value: void 0, writable: !0});

                // Deletion
                delete window.LapysJS
            }
    }

    /* Logic
            [if statement]

        > Modification > Window > (...)
    */
    if (LDK.debugMode) {
        window.LapysJSDevelopmentKit = window.LDK = LDK;
        window.LDKF = LDKF;
        window.LDKI = LDKI;
        window.LDKO = LDKO;
        window.LDKOB = LDKOB;
        window.LDKR = LDKR;
            window.debug = LDKR.debug;
        window.LDKRNG = LDKRNG
    }

    /* Logic
            [if statement]

            --- WARN ---
                #Lapys: Do not re-install the library.

            > Error Handling
    */
    if (typeof LapysJS == 'undefined')
        try {
            /* Global Data */
                // LapysJS Features
                var LapysJSFeatures = LDK.features.valueOf();

                // LapysJS
                LDKF.objectDefineProperty(window, 'LapysJS', {
                    // Configurable
                    configurable: !1,

                    // Enumerable
                    enumerable: !1,

                    // Value
                    value: new (function LapysJS() {
                        // Initialization > (Target, Prototype)
                        let that = this,
                            proto;

                        // Modification
                            // Target
                                // (Constructor > Prototype)
                                LDKF.objectDefineProperty(that, '__proto__', {value: proto = new (function LapysJS() {})});

                                // Temporary Data
                                LDKF.objectDefineProperty(that, 'tmp', {value: {
                                    // Function Arrays
                                    functionArrays: []
                                }});

                            // Prototype
                                // Constructor > Name
                                LDKF.objectDefineProperty(proto.constructor = LapysJS, 'name', {value: 'LapysJS'});

                        // Return
                        return that
                    }),

                    // Writable
                    writable: !1
                });
                    // Add Feature
                    LDKF.objectDefineProperty(LapysJS, 'addFeature', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !0,

                        // Value
                        value: function addFeature() {
                            // Initialization > (Features, Iterator, Length)
                            var features = arguments,
                                iterator = 0,
                                length = features.length;

                            /* Loop
                                    Index Features.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > Feature
                                var feature = features[iterator];

                                // (Update > (LapysJS Development Kit > Features > Active) | Warn)
                                LDKF.isInArray(LapysJSFeatures, feature) ?
                                    LDK.features.active[LDK.features.active.length] = feature :
                                    LDKF.throwWarning(feature, ['not', 'a'], 'feature of LapysJS')
                            }

                            // Return
                            return LDK.features.active
                        },

                        // Writable
                        writable: !1
                    });

                    // Clear Features
                    LDKF.objectDefineProperty(LapysJS, 'clearFeatures', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !0,

                        // Value
                        value: function clearFeatures() {
                            // Update > (LapysJS Development Kit > Features > Active)
                            LDKF.resetArray(LDK.features.active)

                            // Return
                            return LDK.features.active
                        },

                        // Writable
                        writable: !1
                    });

                    // Remove Feature
                    LDKF.objectDefineProperty(LapysJS, 'removeFeature', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !0,

                        // Value
                        value: function removeFeature() {
                            // Initialization > (Features, Iterator, Length)
                            var features = arguments,
                                iterator = 0,
                                length = features.length;

                            /* Loop
                                    Index Features.
                            */
                            for (iterator; iterator != length; iterator += 1) {
                                // Initialization > Feature
                                var feature = features[iterator];

                                // (Update > (LapysJS Development Kit > Features > Active) | Warn)
                                LDKF.isInArray(LapysJSFeatures, feature) ?
                                    LDKF.removeItemArray(LDK.features.active, feature) :
                                    LDKF.throwWarning(feature, ['not', 'a'], 'feature of LapysJS')
                            }

                            // Return
                            return LDK.features.active
                        },

                        // Writable
                        writable: !1
                    });

                // LapysJS Error
                LDKF.objectDefineProperty(window, 'LapysJSError', {
                    // Configurable
                    configurable: !0,

                    // Enumerable
                    enumerable: !1,

                    // Value
                    value: (new LDKF.error).constructor,

                    // Writable
                    writable: !0
                });

                /* LapysJS Object
                        --- NOTE ---
                            #Lapys: Any value that is a LapysJS object lets the developer know
                                the object is a substitute value for another value that could not be parsed.
                */
                LDKF.objectDefineProperty(window, 'LapysJSObject', {
                    // Configurable
                    configurable: !0,

                    // Enumerable
                    enumerable: !1,

                    // Value
                    value: function LapysJSObject() {
                        // Initialization > (Object, Properties)
                        var object = {},
                            properties = arguments[0];

                        // ((LapysJS Development Kit > Functions) > Iterate Object) > Properties
                        LDKF.iterateObject(properties, function(key, value, description) {
                            // Error Handling > Modification > Object > [Key]
                            try { (key === '__proto__') || LDKF.objectDefineProperty(object, key, description) }
                            catch (error) {}
                        }, function(key, value, description, iteratorObject) { return properties === iteratorObject }, !0);

                        /* Modification > Object > (Constructor, Prototype)
                                --- NOTE ---
                                    #Lapys: This makes the object a LapysJS object.
                        */
                        object.__proto__ = LapysJSObject.prototype;

                        // Return
                        return object
                    },

                    // Writable
                    writable: !0
                });

            /* {Prerequisites} Logic
                    [if statement]

                    --- NOTE ---
                        #Lapys: Requirements for the library to run properly.
            */
                // {`clearTimeout`}
                try {
                    if (typeof clearTimeout != 'function' || (function() {
                        // Initialization > (Native Code, Stream)
                        var nativeCode = LDKF.string(window.clearTimeout),
                            stream = LDKF.removeCharString(LDKF.trimLeftString(nativeCode), ' ');

                        /* Return
                                --- NOTE ---
                                    #Lapys:
                                        - Brute-force method that is still faster than a `for...` statement.
                                        - The beauty of this test is that it works even in legacy browsers.
                        */
                        return stream[0] != 'f' || stream[1] != 'u' || stream[2] != 'n' || stream[3] != 'c' || stream[4] != 't' || stream[5] != 'i' || stream[6] != 'o' || stream[7] != 'n' ||
                            stream[8] != 'c' || stream[9] != 'l' || stream[10] != 'e' || stream[11] != 'a' || stream[12] != 'r' || stream[13] != 'T' || stream[14] != 'i' || stream[15] != 'm' || stream[16] != 'e' || stream[17] != 'o' || stream[18] != 'u' || stream[19] != 't'
                    })() || !LDKF.isNativeFunction(window.clearTimeout)) throw 1
                } catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'clearTimeout' function should not be altered or must be native to this development environment.") }

                // {`getComputedStyle`}
                try {
                    if (typeof getComputedStyle != 'function' || (function() {
                        // Initialization > (Native Code, Stream)
                        var nativeCode = LDKF.string(window.getComputedStyle),
                            stream = LDKF.removeCharString(LDKF.trimLeftString(nativeCode), ' ');

                        // Return
                        return stream[0] != 'f' || stream[1] != 'u' || stream[2] != 'n' || stream[3] != 'c' || stream[4] != 't' || stream[5] != 'i' || stream[6] != 'o' || stream[7] != 'n' ||
                            stream[8] != 'g' || stream[9] != 'e' || stream[10] != 't' || stream[11] != 'C' || stream[12] != 'o' || stream[13] != 'm' || stream[14] != 'p' || stream[15] != 'u' || stream[16] != 't' || stream[17] != 'e' || stream[18] != 'd' || stream[19] != 'S' || stream[20] != 't' || stream[21] != 'y' || stream[22] != 'l' || stream[23] != 'e'
                    })() || !LDKF.isNativeFunction(window.getComputedStyle)) throw 1
                } catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'getComputedStyle' function should not be altered or must be native to this development environment.") }

                // {`console`}
                try { if (typeof console != 'object' || (LDKF.string(window.console) != '[object console]' && LDKF.string(window.console) != '[object Console]' && LDKF.string(window.console) != '[object Object]')) throw 1 }
                catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'console' object should not be altered or must be native to this development environment.") }

                // {`Date`}
                try { if (typeof Date != 'function' || (function() {
                    // Initialization > (Native Code, Stream)
                    var nativeCode = LDKF.string(window.Date),
                        stream = LDKF.removeCharString(LDKF.trimLeftString(nativeCode), ' ');

                    // Return
                    return stream[0] != 'f' || stream[1] != 'u' || stream[2] != 'n' || stream[3] != 'c' || stream[4] != 't' || stream[5] != 'i' || stream[6] != 'o' || stream[7] != 'n' ||
                        stream[8] != 'D' || stream[9] != 'a' || stream[10] != 't' || stream[11] != 'e'
                })() || !LDKF.isNativeFunction(window.Date)) throw 1
                } catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'Date' function should not be altered or must be native to this development environment.") }

                // {`eval`}
                try {
                    if (typeof eval != 'function' || (function() {
                        // Initialization > (Native Code, Stream)
                        var nativeCode = LDKF.string(window.eval),
                            stream = LDKF.removeCharString(LDKF.trimLeftString(nativeCode), ' ');

                        // Return
                        return stream[0] != 'f' || stream[1] != 'u' || stream[2] != 'n' || stream[3] != 'c' || stream[4] != 't' || stream[5] != 'i' || stream[6] != 'o' || stream[7] != 'n' ||
                            stream[8] != 'e' || stream[9] != 'v' || stream[10] != 'a' || stream[11] != 'l'
                    })() || !LDKF.isNativeFunction(window.eval)) throw 1
                } catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'eval' function should not be altered or must be native to this development environment.") }

                // {`location`}
                try { if (typeof location != 'object' || (!LDKF.isAlphabet(LDKF.string(window.location)[0]) && !LDKF.isDigit(LDKF.string(window.location)[0]))) throw 1 }
                catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'location' object should not be altered or must be native to this development environment.") }

                // {`Math`}
                try { if (typeof Math != 'object' || LDKF.string(window.Math) != '[object Math]') throw 1 }
                catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'Math' object should not be altered or must be native to this development environment.") }

                // {`navigator`}
                try { if (typeof navigator != 'object' || LDKF.string(window.navigator) != '[object Navigator]') throw 1 }
                catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'navigator' object should not be altered or must be native to this development environment.") }

                // {`performance`}
                try { if (typeof performance != 'object' || LDKF.string(window.performance) != '[object Performance]') throw 1 }
                catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'performance' object should not be altered or must be native to this development environment.") }

                // {`screen`}
                try { if (typeof screen != 'object' || LDKF.string(window.screen) != '[object Screen]') throw 1 }
                catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'screen' object should not be altered or must be native to this development environment.") }

                // {`setTimeout`}
                try {
                    if (typeof setTimeout != 'function' || (function() {
                        // Initialization > (Native Code, Stream)
                        var nativeCode = LDKF.string(window.setTimeout),
                            stream = LDKF.removeCharString(LDKF.trimLeftString(nativeCode), ' ');

                        // Return
                        return stream[0] != 'f' || stream[1] != 'u' || stream[2] != 'n' || stream[3] != 'c' || stream[4] != 't' || stream[5] != 'i' || stream[6] != 'o' || stream[7] != 'n' ||
                            stream[8] != 's' || stream[9] != 'e' || stream[10] != 't' || stream[11] != 'T' || stream[12] != 'i' || stream[13] != 'm' || stream[14] != 'e' || stream[15] != 'o' || stream[16] != 'u' || stream[17] != 't'
                    })() || !LDKF.isNativeFunction(window.setTimeout)) throw 1
                } catch (error) { LDKF.throwError(LDKI.browserIncompatibilityErrorMessage + ": The 'setTimeout' function should not be altered or must be native to this development environment.") }

            /* Modification */
                // Hidden
                    // Event Reference List
                    LDKF.objectDefineProperty(hidden, 'eventReferenceList', {value: []});

                    // Freezer
                    LDKF.objectDefineProperty(hidden, 'freezer', {value: []});

                    // Fullscreen Element
                    hidden.fullscreenElement = null;

                    /* Power
                            --- NOTE ---
                                #Lapys: Cache all `LapysJSDevelopmentKit.functions.pow` results.
                    */
                    hidden.pow = [];

                    // Watch List
                    hidden.watchList = {
                        // On Element Added
                        onElementAdded: [],

                        // On Element Count Change
                        onElementCountChange: [],

                        // On Element Removed
                        onElementRemoved: [],

                        // On HTML Change
                        onHTMLChange: [],

                        // On Node Added
                        onNodeAdded: [],

                        // On Node Count Change
                        onNodeCountChange: [],

                        // On Node Removed
                        onNodeRemoved: [],

                        // Strictly Watched Elements
                        strictlyWatchedElements: [],

                        // Written Elements
                        writtenElements: []
                    };

                /* LapysJS Development Kit
                        --- NOTE ---
                            #Lapys: Store copies of much needed data privately,
                                this prevents dependence on volatile/ vulnerable (easily change-able) properties and objects in JavaScript.
                */
                    // Objects
                        // Console
                        LDKO.console = console;
                            // Clear
                            LDKO.consoleClear = LDKO.console.clear;

                            // Group
                            LDKO.consoleGroup = LDKO.console.group;

                            // Group End
                            LDKO.consoleGroupEnd = LDKO.console.groupEnd;

                            // Log
                            LDKO.consoleLog = LDKO.console.log;

                            // Warn
                            LDKO.consoleWarn = LDKO.console.warn;

                        // Get Computed Style
                        LDKO.getComputedStyle = window.getComputedStyle;

                        // Function > Prototype
                            // Bind
                            LDKO.funcPrototypeBind = LDKO.funcPrototype.bind;

                        // Location
                        LDKO._location = location;
                        LDKO.location = LDKO._location.constructor;
                            // Hyperlink Reference
                            LDKO._locationHref = LDKO._location.href;

                            // Prototype
                            LDKO.locationPrototype = LDKO.location.prototype;

                        // Descriptions
                            /* Document > Prototype > Current Script
                                    --- NOTE ---
                                        #Lapys: Credit to GitHub (https://github.com/JamesMGreene/document.currentScript)
                            */
                            LDKO.descriptions.documentPrototypeCurrentScript = LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype, 'currentScript') || (function(){function b(i){if(i&&LDKF.isString(i)){var j=0,k=LDKF.get.htmlCollectionPrototypeLength(g);for(j;j!=k;j+=1){var l=g[j];if(LDKO.descriptions.htmlScriptElementPrototypeSrc.get.call(l)===i)return l}}}function c(){var k,i=0,j=LDKF.get.htmlCollectionPrototypeLength(g);for(i;i!=j;i+=1)if(!LDKO.descriptions.htmlScriptElementPrototypeSrc.get.call(g[i])){if(k)return;k=g[i]}return k}function d(i,j){var k,l,m,n=LDKF.isNumber(j);return j=n?j:LDKF.isNumber(e.skipStackDepth)?e.skipStackDepth:0,i&&LDKF.isString(i)&&(n?l=LDKO.descriptions.stringPrototypeMatch.value.call(i,/((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/):(l=LDKO.descriptions.stringPrototypeMatch.value.call(i,/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),!(l&&l[1])&&(l=LDKO.descriptions.stringPrototypeMatch.value.call(i,/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),l&&l[1]&&(k=l[1]))),l&&l[1]&&(0<j?(m=LDKF.rendString(i,LDKF.indexOfString(i,l[0])+l[0].length),k=d(m,j-1)):k=l[1])),k}function e(){var i=LDKF.get.htmlCollectionPrototypeLength(g);if(i){if(1==i)return g[0];if('readyState'in g[0])for(var j=i;j;)if('interactive'==g[j-=1].readyState)return g[j];if('loading'==LDKO.descriptions.documentPrototypeReadyState.get.call(LDKF.get.windowDocument()))return g[i-1];try{throw new LDKO.error}catch(m){var k=d(m.stack),l=b(k);l||k!=h||(l=c())}return l}}var f=LDKF.get.windowDocument(),g=LDKF.documentPrototypeGetElementsByTagName(LDKF.get.windowDocument(),'script'),h=LDKO._locationHref;return e.skipStackDepth=1,{configurable:!0,enumerable:!0,get:e}})();

                            // Location
                                // Host
                                LDKO.descriptions._locationHost = (function() {
                                    // Error Handling > Return
                                    try { return LDKF.objectGetOwnPropertyDescriptor(LDKO._location, 'host') }
                                    catch (error) {}

                                    // Return
                                    return LDKF.objectGetOwnPropertyDescriptor(LDKO.locationPrototype, 'host')
                                })();

                                // Host Name
                                LDKO.descriptions._locationHostName = (function() {
                                    // Error Handling > Return
                                    try { return LDKF.objectGetOwnPropertyDescriptor(LDKO._location, 'hostname') }
                                    catch (error) {}

                                    // Return
                                    return LDKF.objectGetOwnPropertyDescriptor(LDKO.locationPrototype, 'hostname')
                                })();

                                // Protocol
                                LDKO.descriptions._locationProtocol = (function() {
                                    // Error Handling > Return
                                    try { return LDKF.objectGetOwnPropertyDescriptor(LDKO._location, 'protocol') }
                                    catch (error) {}

                                    // Return
                                    return LDKF.objectGetOwnPropertyDescriptor(LDKO.locationPrototype, 'protocol')
                                })();

                        // Math
                        LDKO.math = Math;
                            // Exponent
                            LDKO.mathExp = LDKO.math.exp;

                            // Logarithm
                            LDKO.mathLog = LDKO.math.log;

                            // Power
                            LDKO.mathPow = LDKO.math.pow;

                        // Navigator
                        LDKO.navigator = navigator.constructor;
                            // Prototype
                            LDKO.navigatorPrototype = LDKO.navigator.prototype;

                        // Descriptions
                            // Navigator > Prototype > User Agent
                            LDKO.descriptions.navigatorPrototypeUserAgent = LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'userAgent');

                        // Performance
                        LDKO.performance = performance.constructor;
                            // Prototype
                            LDKO.performancePrototype = LDKO.performance.prototype;
                                // Now
                                LDKO.performancePrototypeNow = LDKO.performancePrototype.now;

                    // Functions
                        /* All Nodes
                                --- NOTE ---
                                    #Lapys: Return all descendant nodes of a node
                                        in a descending hierarchy (direct children, ..., grandchildren).
                        */
                        LDKF.allNodes = function allNodes(node) {
                            // Initialization > (Children, Iterator, Length, Descendants)
                            var children = LDKF.get.nodePrototypeChildNodes(node),
                                iterator = 0,
                                length = LDKF.get.nodeListPrototypeLength(children),
                                descendants = [];

                            /* Loop
                                    Index Descendants.

                                > Update > Descendants
                            */
                            for (iterator; iterator != length; iterator += 1)
                                descendants[descendants.length] = children[iterator];

                            // Update > (Iterator, Length)
                            iterator = 0;
                            length = descendants.length;

                            /* Function > Recur
                                    --- NOTE ---
                                        #Lapys: As long as descendant nodes are available,
                                            re-iterate the current children`s children.
                            */
                            (function recur() {
                                /* Loop
                                        Index Descendants.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > (Descendant, Children (Iterator, Length))
                                    var descendant = descendants[iterator],
                                        children = LDKF.get.nodePrototypeChildNodes(descendant),
                                        childrenIterator = 0,
                                        childrenLength = LDKF.get.nodeListPrototypeLength(children);

                                    /* Loop
                                            Index Children.
                                    */
                                    for (childrenIterator; childrenIterator != childrenLength; childrenIterator += 1) {
                                        // Initialization > Child
                                        var child = children[childrenIterator];

                                        // Update > Descendants
                                        LDKF.isInArray(descendants, child) || (descendants[descendants.length] = child)
                                    }
                                }

                                // Update > Length
                                length = descendants.length;

                                // Recur
                                (iterator != length) && recur()
                            })();

                            // Return
                            return descendants
                        };

                        // Cancel Animation Frame
                        LDKF.cancelAnimationFrame = function cancelAnimationFrame(frame) {
                            // Logic > Return
                            if (!LDKF.isVoid(frame))
                                return LDKO.cancelAnimationFrame.call(window, frame)
                        };

                        // Clone Object
                        LDKF.cloneObject = function clone(object) {
                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length) {
                                // Logic > Return
                                if (!LDKF.isConstructible(object))
                                    return LDKF.isNull(object) ? null : void 0;

                                // Initialization > Constructor (Name)
                                var constructor = object.constructor,
                                    constructorName = LDKF.get.funcPrototypeName(constructor);

                                /* Function
                                        --- NOTE ---
                                            #Lapys: For cloning JavaScript values.
                                */
                                    // Clone Array
                                    function cloneArray(array) {
                                        // Initialization > (Clone, Prototype)
                                        var clone = [],
                                            prototype = array.__proto__;

                                        // LapysJS Development Kit Functions > Iterate Object
                                        LDKF.iterateObject(array, function(key, value, description) {
                                            // Modification > Clone > [Key]
                                            (key in prototype) || LDKF.objectDefineProperty(clone, key, description)
                                        });

                                        // Return
                                        return clone
                                    }

                                    // Clone Boolean
                                    function cloneBoolean(boolean) {
                                        // Return
                                        return !!boolean
                                    }

                                    // Clone Function
                                    function cloneFunction(method) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (LDKF.isNativeFunction(LDKO.funcPrototypeBind))
                                            // Return
                                            return LDKO.funcPrototypeBind.call(method, {});

                                        else {
                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (LDKF.isNativeFunction(method))
                                                // Error
                                                LDKF.throwError('clone', 'argument', 'Native functions can not be cloned');

                                            else if (LDKF.isClass(method))
                                                // Return
                                                return LDKO.eval(LDKF.string(method));

                                            // Return
                                            return LDKF.customFunction(
                                                // {Name}
                                                LDKF.get.funcPrototypeName(method) || '',

                                                // {Parameters}
                                                LDKF.get.funcPrototypeParameters(method),

                                                // {Body}
                                                (function(body) {
                                                    // Update > Body
                                                    body = LDKF.trimString(body);

                                                    // Initialization > Length
                                                    var length = body.length;

                                                    // Update > Body
                                                    (body[length - 1] == '}') && (body = LDKF.rendString(body, -1));
                                                    (body[0] == '{') && (body = LDKF.rendString(body, 1));

                                                    // Return
                                                    return LDKF.trimString(body)
                                                })(LDKF.get.funcPrototypeBody(method)),

                                                // {Is Arrow Function}
                                                LDKF.isArrowFunction(method)
                                            )
                                        }
                                    }

                                    /* Clone Number
                                            --- NOTE ---
                                                #Lapys: Specifically this method works.
                                    */
                                    function cloneNumber(number) {
                                        // Return
                                        return number - 0
                                    }

                                    // Clone Object
                                    function cloneObject(object) {
                                        // Error Handling
                                        try {
                                            // Initialization > Clone
                                            var clone = LDKF.customObject(constructorName),
                                                prototype = object.__proto__,
                                                symbol = LDKF.symbol;

                                            // LapysJS Development Kit Functions > Iterate Object
                                                // Object
                                                LDKF.iterateObject(object, function(key, value, description, iteratorObject) {
                                                    // Error Handling
                                                    try {
                                                        // Modification > Clone > [Key]
                                                        description && LDKF.objectDefineProperty(clone, key, description)
                                                    }

                                                    catch (error) {
                                                        // Warn
                                                        LDKF.throwWarning("Could not clone property '" + key + "'")
                                                    }
                                                }, function(key, value, description, iteratorObject) { return iteratorObject !== prototype }, !0);

                                                /* Symbol
                                                        --- NOTE ---
                                                            #Lapys: Modern JavaScript objects contain Symbol properties.
                                                */
                                                LDKF.iterateObject(symbol, function(key, value) {
                                                    // Error Handling
                                                    try {
                                                        // Logic
                                                        if (LDKF.isSymbol(value)) {
                                                            // Initialization > Description
                                                            var description = LDKF.objectGetOwnPropertyDescriptor(object, value);

                                                            // Modification > Clone > [Key]
                                                            description && LDKF.objectDefineProperty(clone, value, description)
                                                        }
                                                    }

                                                    catch (error) {
                                                        // Warn
                                                        LDKF.throwWarning("Could not clone property Symbol." + key)
                                                    }
                                                });

                                            // Modification > Clone > (Constructor > Prototype)
                                            clone.__proto__ = LDKF.objectCreate(object.__proto__);

                                            // Return
                                            return clone
                                        } catch (error) {}

                                        // Error Handling > Return
                                        try { return clonePrototype(object) }
                                        catch (error) {}

                                        // Error
                                        LDKF.throwError(['clone', constructorName], 'argument', 'Object can not be cloned')
                                    }

                                    /* Clone Prototype
                                            --- NOTE ---
                                                #Lapys: Relic of a previous version of LapysJS. Might still be used.
                                    */
                                    function clonePrototype(prototype) {}

                                    // Clone Regular Expression
                                    function cloneRegex(regex) {
                                        // Return
                                        return LDKF.regex(LDKF.get.regexPrototypeSource(regex), LDKF.get.regexPrototypeFlags(regex))
                                    }

                                    // Clone String
                                    function cloneString(string) {
                                        // Return
                                        return string + ''
                                    }

                                    // Clone Symbol
                                    function cloneSymbol(symbol) {
                                        // Return
                                        return LDKF.symbol(LDKF.rendString(LDKF.rendString(LDKF.string(symbol), 'Symbol('.length), -')'.length))
                                    }

                                /* Logic
                                        [if:else if statement]

                                    > Return
                                */
                                if (LDKF.isArray(object))
                                    return cloneArray(object);

                                else if (LDKF.isBoolean(object))
                                    return cloneBoolean(object);

                                else if (LDKF.isFunction(object))
                                    return cloneFunction(object);

                                else if (LDKF.isNumber(object))
                                    return cloneNumber(object);

                                else if (LDKF.isObject(object))
                                    return cloneObject(object);

                                else if (LDKF.isRegex(object))
                                    return cloneRegex(object);

                                else if (LDKF.isString(object))
                                    return cloneString(object);

                                else if (LDKF.isSymbol(object))
                                    return cloneSymbol(object);

                                // Error
                                LDKF.throwError(['clone', constructorName], 'argument', 'Object can not be cloned')
                            }

                            // Error
                            LDKF.throwError("'cloneObject'", 'argument', [1, 0])
                        };

                        // Console Clear
                        LDKF.consoleClear = function consoleClear() {
                            // Return
                            return LDKO.consoleClear.apply(LDKO.console, arguments)
                        };

                        // Console Group
                        LDKF.consoleGroup = function consoleGroup() {
                            // Return
                            return LDKO.consoleGroup.apply(LDKO.console, arguments)
                        };

                        // Console Group End
                        LDKF.consoleGroupEnd = function consoleGroupEnd() {
                            // Return
                            return LDKO.consoleGroupEnd.apply(LDKO.console, arguments)
                        };

                        // Console Log
                        LDKF.consoleLog = function consoleLog() {
                            // Return
                            return LDKO.consoleLog.apply(LDKO.console, arguments)
                        };

                        // Console Warn
                        LDKF.consoleWarn = function consoleWarn() {
                            // Return
                            return LDKO.consoleWarn.apply(LDKO.console, arguments)
                        };

                        // Custom Array
                        LDKF.customArray = function customArray() {
                            // Initialization > (Array, Name, Items, Properties)
                            var array = [],
                                name = arguments[0],
                                items = arguments[1],
                                properties = arguments[2];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length) {
                                // Error
                                LDKF.isString(name) || LDKF.throwError('customObject', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'string'));

                                /* Logic
                                        [if statement]
                                */
                                if (name)
                                    // Error
                                    try { LDKO.eval('(function ' + name + '() {})') }
                                    catch (error) { LDKF.throwError('customArray', 'argument', LDKF.debugMessage("'" + name + "'", ['must', 'a'], 'valid object name')) }

                                // Update > Array
                                (array = LDKF.customObject(name, properties, LDKO.arrayPrototype)).length = 0;

                                /* Logic
                                        [if statement]
                                */
                                if (LDKF.isArray(items) && items.length) {
                                    // Initialization > (Iterator, Length)
                                    var iterator = 0,
                                        length = items.length;

                                    /* Loop
                                            Index Items.

                                        > Update > Array
                                    */
                                    for (iterator; iterator != length; iterator += 1)
                                        LDKF.lendArray(array, items[iterator])
                                }
                            }

                            // Return
                            return array
                        };

                        /* Custom Function
                                --- NOTE ---
                                    #Lapys:
                                        - A myriad of code used to create functions more conveniently than the `Function` function.
                                        - Personally, I mostly use it to mess around with non-native functions.
                        */
                        LDKF.customFunction = function customFunction() {
                            // Initialization > (Name, Length, Method)
                            var name = LDKF.string(arguments[0]),
                                parameters = arguments[1],
                                code = arguments[2],
                                length = arguments.length,
                                method = LDKO.funcPrototype;

                            /* Logic
                                    [if statement]
                            */
                            if (length) {
                                // Error Handling > Execution
                                try { LDKO.eval('(function ' + name + '(){})') }
                                catch (error) { LDKF.throwError('customFunction', 'argument', LDKF.debugMessage("'" + name + "'", ['must', 'a'], 'valid function name')) }

                                // Update > (Parameters, Code)
                                (length > 1) && !LDKF.isArray(parameters) && (
                                    parameters = (parameters || {}).constructor === LDKO.parameterList ?
                                        (function(parameters) {
                                            // Initialization > Iterator
                                            var iterator = parameters.length;

                                            // Loop > Update > Parameters
                                            while (iterator)
                                                parameters[iterator -= 1] = parameters[iterator].valueOf();

                                            // Return
                                            return parameters
                                        })(parameters) :
                                        (LDKF.isFunction(parameters) ?
                                            LDKF.get.funcPrototypeParameters(parameters) :
                                            [parameters]
                                        )
                                );
                                (length > 2) && (
                                    code = LDKF.isFunction(code) ?
                                        LDKF.get.funcPrototypeBody(code) :
                                        (LDKF.isString(code) ?
                                            code :
                                            'return ' + LDKF.string(code)
                                        )
                                );

                                // Function > To Parameter Code
                                function toParameterCode(parameters) {
                                    // Initialization > (Iterator, (Decremented) Length, Stream)
                                    var iterator = 0,
                                        length = parameters.length,
                                        decrementedLength = length - 1,
                                        stream = '';

                                    /* Loop
                                            Index Parameters.

                                        > Update > Stream
                                    */
                                    for (iterator; iterator != length; iterator += 1)
                                        stream += LDKF.string(parameters[iterator]) + (iterator == decrementedLength ? '' : ', ');

                                    // Return
                                    return stream
                                }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (length == 1)
                                    // Return
                                    return LDKO.eval('(function ' + name + '() {})');

                                else if (length == 2)
                                    // Error Handling > Return
                                    try { return LDKO.eval('(function ' + name + '(' + toParameterCode(parameters) + ') {})') }
                                    catch (error) { LDKF.throwError(error) }

                                else if (length == 3 || !arguments[3])
                                    // Error Handling
                                    try {
                                        // Return
                                        return LDKO.eval('(function ' + name + '(' + toParameterCode(parameters) + ') {' + code + '})')
                                    } catch (error) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (error.constructor === LDKO.syntaxError)
                                            // Error Handling > Return
                                            try { return LDKO.eval('(function ' + name + '(' + toParameterCode(parameters) + ') {(' + code + ')})') }
                                            catch (error) { LDKF.throwError(error) }

                                        else
                                            // Error
                                            LDKF.throwError(error)
                                    }

                                else if (arguments[3]) {
                                    // Initialization > Delimit Code
                                    var delimitCode = (function(string) {
                                        // Initialization > (Allow Stream, Iterator, Length, Stream (Lock))
                                        var allowStream = !0,
                                            iterator = 0,
                                            length = string.length,
                                            stream = '',
                                            streamLock;

                                        /* Loop
                                                Iterate through String.
                                        */
                                        for (iterator; iterator != length; iterator += 1) {
                                            // Initialization > Character
                                            var character = string[iterator];

                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (allowStream) {
                                                // Initialization > Next Character
                                                var nextCharacter = code[iterator + 1];

                                                // Update > (Allow Stream, Stream Lock)
                                                if (character == '"' || character == "'" || character == '(' || character == '[' || character == '{') {
                                                    allowStream = !1;
                                                    streamLock = character
                                                }

                                                else if (character == '/' && nextCharacter == '/') {
                                                    allowStream = !1;
                                                    streamLock = 'single-line-comment'
                                                }

                                                else if (character == '/' && nextCharacter == '*') {
                                                    allowStream = !1;
                                                    streamLock = 'multi-line-comment'
                                                }
                                            }

                                            else if (
                                                ((character == '"' || character == "'") && character == streamLock) ||
                                                (character == '(' && streamLock == ')') ||
                                                (character == '[' && streamLock == ']') ||
                                                (character == '{' && streamLock == '}') ||
                                                (character == '\n' && 'single-line-comment' == streamLock) ||
                                                ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                                            ) {
                                                // Update > (Allow Stream, Stream Lock)
                                                allowStream = !0;
                                                streamLock = ''
                                            }

                                            // Update > Stream
                                            allowStream && (stream += character)
                                        }

                                        // Update > Iterator
                                        iterator = (stream = LDKF.trimString(stream)).length;

                                        /* Loop
                                                Iterate through String.
                                        */
                                        while (iterator) {
                                            // Initialization > Character
                                            var character = stream[iterator -= 1];

                                            // Logic > Return
                                            if (character == ' ' || character == '\n')
                                                return !0
                                        }
                                    })(code);

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (parameters != '') {
                                        // Update > (Length, Parameters)
                                        length = parameters.length;
                                        parameters = toParameterCode(parameters);
                                        (length != 1 || (function(string) {
                                            // Initialization > Iterators
                                            var iterator = LDKF.trimLeftString(string).length;

                                            /* Loop
                                                    Iterate through String.
                                            */
                                            while (iterator) {
                                                // Initialization > Character
                                                var character = string[iterator -= 1];

                                                // Logic > Return
                                                if (!LDKF.isAlphabet(character) && character != ' ' && character != '\n')
                                                    return !0
                                            }
                                        })(parameters)) && (parameters = '(' + parameters + ')')
                                    }

                                    else
                                        // Update > Parameters
                                        parameters = '()';

                                    // Error Handling
                                    try {
                                        // Return
                                        return LDKO.eval(parameters + ' =>' + (delimitCode ? ' {' + code + '}' : code))
                                    } catch (error) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (error.constructor === LDKO.syntaxError)
                                            // Error Handling > Return
                                            try { return LDKO.eval(parameters + ' =>' + (delimitCode ? ' {(' + code + ')}' : code)) }
                                            catch (error) { LDKF.throwError(error) }

                                        else
                                            // Error
                                            LDKF.throwError(error)
                                    }
                                }
                            }

                            // Return
                            return method
                        };

                        /* Custom Function Array
                                --- WARN ---
                                    #Lapys:
                                        - This method stores the resulting Function Arrays into the `LapysJS.tmp.functionArrays` list,
                                            thereby incrementing it (which in turn means more memory).

                                        - But this only happens if the function body is not custom-defined.
                        */
                        LDKF.customFunctionArray = function customFunctionArray() {
                            // Initialization > (Function Array, Name, Items, Properties, Body)
                            var functionArray,
                                name = arguments[0],
                                items = arguments[1],
                                properties = arguments[2],
                                body = arguments[3];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length) {
                                // Error
                                LDKF.isString(name) || LDKF.throwError('customFunctionArray', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'string'));

                                // Logic > Error Handling
                                if (name)
                                    try { LDKO.eval('(function ' + name + '() {})') }
                                    catch (error) { LDKF.throwError('customFunctionArray', 'argument', LDKF.debugMessage("'" + name + "'", ['must', 'a'], 'valid object name')) }

                                // Update > (Function Array, (LapysJS > Temporary Data > Function Arrays))
                                functionArray = LDKF.customFunction(name, '', arguments.length > 3 ? body : 'return LapysJS.tmp.functionArrays[' + LapysJS.tmp.functionArrays.length + '][arguments[0]]');
                                (arguments.length > 3) || (LapysJS.tmp.functionArrays[LapysJS.tmp.functionArrays.length] = functionArray);

                                // Deletion
                                delete functionArray.length;

                                // Modification > Function Array > (Constructor > Prototype)
                                functionArray.__proto__ = LDKF.objectCreate(LDKO.arrayPrototype);

                                /* Logic
                                        [if statement]
                                */
                                if (LDKF.isArray(items) && items.length) {
                                    // Initialization > (Iterator, Length)
                                    var iterator = 0,
                                        length = items.length;

                                    /* Loop
                                            Index Items.

                                        > Update > Function Array
                                    */
                                    for (iterator; iterator != length; iterator += 1)
                                        LDKF.lendArray(functionArray, items[iterator])
                                }

                                // (LapysJS Development Kit > Functions) > Iterate Object
                                (arguments.length > 2) && LDKF.iterateObject(properties, function(key, value, description) {
                                    // Error  Handling
                                    try {
                                        // Modification > Function Array > [Key]
                                        LDKF.objectDefineProperty(functionArray, key, description)
                                    } catch (error) {
                                        // Warn
                                        LDKF.throwWarning("Unable to define property '" + key + "' on custom (function) array")
                                    }
                                });

                                // Return
                                return functionArray
                            }

                            // Return
                            return (function() {
                                // Initialization > Function Array
                                var functionArray = (function() { return functionArray[arguments[0]] });

                                // Deletion
                                delete functionArray.length;

                                // Modification > Function Array > (Constructor > Prototype)
                                functionArray.__proto__ = LDKF.objectCreate(LDKO.arrayPrototype);

                                // Return
                                return functionArray
                            })()
                        };

                        // Custom Object
                        LDKF.customObject = function customObject() {
                            // Initialization > (Object, Name, Properties, Prototype)
                            var object = {},
                                name = arguments[0],
                                properties = arguments[1],
                                prototype = arguments[2];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length) {
                                // Error
                                LDKF.isString(name) || LDKF.throwError('customObject', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'string'));

                                /* Logic
                                        [if statement]

                                    > Error Handling
                                */
                                if (name)
                                    try {
                                        // Update > Object
                                        object = LDKO.eval('(function() { return new (function ' + name + '() {}) })()')
                                    } catch (error) {
                                        // Error
                                        LDKF.throwError('customObject', 'argument', LDKF.debugMessage("'" + name + "'", ['must', 'a'], 'valid object name'))
                                    }

                                // Modification > Object > (Constructor > Prototype)
                                (arguments.length > 2) && (object.__proto__ = LDKF.objectCreate(prototype));

                                // LapysJS Development Kit > Iterate Object > Properties
                                (arguments.length > 1) && LDKF.iterateObject(properties, function(key, value, description) {
                                    try {
                                        // Modification > Object > [Key]
                                        LDKF.objectDefineProperty(object, key, description)
                                    } catch (error) {
                                        // Warn
                                        LDKF.throwWarning("Unable to define property '" + key + "' on custom object")
                                    }
                                }, function(key) {
                                    // Error Handling > Return
                                    try { return !(key in properties.__proto__) }
                                    catch (error) {}
                                })
                            }

                            // Return
                            return object
                        };

                        /* Evaluation
                                --- NOTE ---
                                    #Lapys: We don`t use the `LDKF.eval` syntax until
                                        the Initialization function.
                        */
                        LDKF.eval = LDKO.eval;

                        /* Get */
                            // Function > Prototype
                                // Body
                                LDKF.get.funcPrototypeBody = function funcPrototypeBody(method) {
                                    // Initialization > ((Allow, Force) Stream, Code, Iterator, Length, (Ending, Opening) Function Head Delimiter Count, Stream (Lock))
                                    var allowStream = !0,
                                        code = LDKF.trimLeftString(LDKF.string(method)),
                                        iterator = 0,
                                        length = code.length,
                                        forceStream = !1,
                                        endingFunctionHeadDelimiterCount = 0,
                                        openingFunctionHeadDelimiterCount = 0,
                                        stream = '',
                                        streamLock;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isFunction(method))
                                        /* Logic
                                                [if:else statement]

                                                --- NOTE ---
                                                    #Lapys: Differentiate between the multiple kinds of function expressions.
                                        */
                                        if (LDKF.isArrowFunction(method))
                                            /* Logic
                                                    [if:else statement]


                                                    --- NOTE ---
                                                        #Lapys: Determine if the function arrow expression`s parameters are defined
                                                            with parenthesis delimiters.
                                            */
                                            if (code[0] == '(')
                                                /* Loop
                                                        iterate through Code.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > Character
                                                    var character = code[iterator];

                                                    /* Logic
                                                            [if:else statement]
                                                    */
                                                    if (forceStream)
                                                        // Update > Stream
                                                        stream += character;

                                                    else {
                                                        /* Logic
                                                                [if statement]
                                                        */
                                                        if (allowStream) {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Update > (Allow Stream, Stream Lock)
                                                            */
                                                            if (character == '"' || character == "'") {
                                                                allowStream = !1;
                                                                streamLock = character
                                                            }

                                                            else if (character == '/' && nextCharacter == '/') {
                                                                allowStream = !1;
                                                                streamLock = 'single-line-comment'
                                                            }

                                                            else if (character == '/' && nextCharacter == '*') {
                                                                allowStream = !1;
                                                                streamLock = 'multi-line-comment'
                                                            }
                                                        }

                                                        else if (
                                                            ((character == '"' || character == "'") && character == streamLock) ||
                                                            (character == '\n' && 'single-line-comment' == streamLock) ||
                                                            ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                                                        ) {
                                                            // Update > (Allow Stream, Stream Lock)
                                                            allowStream = !0;
                                                            streamLock = ''
                                                        }

                                                        /* Logic
                                                                [if statement]
                                                        */
                                                        if (allowStream)
                                                            /* Logic
                                                                    [if:else statement]
                                                            */
                                                            if (endingFunctionHeadDelimiterCount == openingFunctionHeadDelimiterCount) {
                                                                /* Logic
                                                                        [if statement]

                                                                    > Update > (Iterator, Force Stream)
                                                                */
                                                                if (character == '=' && code[iterator + 1] == '>') {
                                                                    iterator += 1;
                                                                    forceStream = !0
                                                                }
                                                            }

                                                            else {
                                                                // Update > (Ending, Opening) Function Head Delimiter Count
                                                                (character == '(') && (openingFunctionHeadDelimiterCount += 1);
                                                                (character == ')') && (endingFunctionHeadDelimiterCount += 1)
                                                            }
                                                    }
                                                }

                                            else
                                                /* Loop
                                                        Iterate through Code.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > Character
                                                    var character = code[iterator];

                                                    /* Logic
                                                            [if:else if statement]
                                                    */
                                                    if (forceStream)
                                                        // Update > Stream
                                                        stream += character;

                                                    else if (character == '=' && code[iterator + 1] == '>') {
                                                        // Update > (Force Stream, Iterator)
                                                        forceStream = !0;
                                                        iterator += 1
                                                    }
                                                }

                                        else {
                                            /* Loop
                                                    Iterate through Code.
                                            */
                                            for (iterator; iterator != length; iterator += 1) {
                                                // Initialization > Character
                                                var character = code[iterator];

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (forceStream)
                                                    // Update > Stream
                                                    stream += character;

                                                else {
                                                    /* Logic
                                                            [if:else if statement]
                                                    */
                                                    if (allowStream) {
                                                        /* Logic
                                                                [if:else if statement]

                                                            > Update > (Allow Stream, Stream Lock)
                                                        */
                                                        if (character == '"' || character == "'") {
                                                            allowStream = !1;
                                                            streamLock = character
                                                        }

                                                        else if (character == '/' && nextCharacter == '/') {
                                                            allowStream = !1;
                                                            streamLock = 'single-line-comment'
                                                        }

                                                        else if (character == '/' && nextCharacter == '*') {
                                                            allowStream = !1;
                                                            streamLock = 'multi-line-comment'
                                                        }
                                                    }

                                                    else if (
                                                        ((character == '"' || character == "'") && character == streamLock) ||
                                                        (character == '\n' && 'single-line-comment' == streamLock) ||
                                                        ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                                                    ) {
                                                        // Update > (Allow Stream, Stream Lock)
                                                        allowStream = !0;
                                                        streamLock = ''
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (allowStream)
                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (endingFunctionHeadDelimiterCount == openingFunctionHeadDelimiterCount) {
                                                            /* Logic
                                                                    [if statement]

                                                                > Update > (Force Stream, Iterator)
                                                            */
                                                            if (character == '{') {
                                                                forceStream = !0;
                                                                iterator -= 1
                                                            }
                                                        }

                                                        else {
                                                            // Update > (Ending, Opening) Function Head Delimiter Count
                                                            (character == '(') && (openingFunctionHeadDelimiterCount += 1);
                                                            (character == ')') && (endingFunctionHeadDelimiterCount += 1)
                                                        }
                                                }
                                            }
                                        }

                                    else
                                        // Error
                                        LDKF.throwError('funcPrototypeBody', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'function'));

                                    // Return
                                    return stream
                                };

                                // Head
                                LDKF.get.funcPrototypeHead = function funcPrototypeHead(method) {
                                    // Initialization > (Allow Stream, Code, Iterator, Length, (Ending, Opening) Function Head Delimiter Count, Opening Function Head Delimiter Matched, Stream (Lock))
                                    var allowStream = !0,
                                        code = LDKF.trimLeftString(LDKF.string(method)),
                                        iterator = 0,
                                        length = code.length,
                                        endingFunctionHeadDelimiterCount = 0,
                                        openingFunctionHeadDelimiterCount = 1,
                                        openingFunctionHeadDelimiterMatched = !1,
                                        stream = '',
                                        streamLock;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isFunction(method)) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (LDKF.isArrowFunction(method))
                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (code[0] == '(')
                                                /* Loop
                                                        Iterate through Code.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > Character
                                                    var character = code[iterator];

                                                    /* Logic
                                                            [if:else if statement]
                                                    */
                                                    if (allowStream) {
                                                        /* Logic
                                                                [if:else if statement]

                                                            > Update > (Allow Stream, Stream Lock)
                                                        */
                                                        if (character == '"' || character == "'") {
                                                            allowStream = !1;
                                                            streamLock = character
                                                        }

                                                        else if (character == '/' && nextCharacter == '/') {
                                                            allowStream = !1;
                                                            streamLock = 'single-line-comment'
                                                        }

                                                        else if (character == '/' && nextCharacter == '*') {
                                                            allowStream = !1;
                                                            streamLock = 'multi-line-comment'
                                                        }
                                                    }

                                                    else if (
                                                        ((character == '"' || character == "'") && character == streamLock) ||
                                                        (character == '\n' && 'single-line-comment' == streamLock) ||
                                                        ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                                                    ) {
                                                        // Update > (Allow Stream, Stream Lock)
                                                        allowStream = !0;
                                                        streamLock = ''
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (allowStream)
                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (endingFunctionHeadDelimiterCount == openingFunctionHeadDelimiterCount)
                                                            // Break
                                                            break;

                                                        else {
                                                            // Update > (Ending Function Head Delimiter Count, Opening Function Head Delimiter (Count | Matched), Stream)
                                                            (character == '(') && (openingFunctionHeadDelimiterMatched ? openingFunctionHeadDelimiterCount += 1 : openingFunctionHeadDelimiterMatched = !0);
                                                            (character == ')') && (endingFunctionHeadDelimiterCount += 1)
                                                        }

                                                    // Update > Stream
                                                    stream += character
                                                }

                                            else
                                                /* Loop
                                                        Iterate through Code.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > Character
                                                    var character = code[iterator];

                                                    /* Logic
                                                            [if:else statement]

                                                        > Update > (Allow) Stream
                                                    */
                                                    if (allowStream) {
                                                        (character == ' ') && (allowStream = !1);
                                                        stream += character
                                                    }

                                                    else
                                                        // Break
                                                        break
                                                }

                                        else
                                            /* Logic
                                                    [if statement]

                                                    --- NOTE ---
                                                        #Lapys: Functions that contain parameters and functions that are not classes.
                                            */
                                            if (LDKF.isInString(code, '(') && LDKF.indexOfString(code, '(') < LDKF.indexOfString(code, ')') && !LDKF.isClass(method))
                                                /* Loop
                                                        Iterate through Code.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > (Next) Character
                                                    var character = code[iterator],
                                                        nextCharacter = code[iterator + 1];

                                                    /* Logic
                                                            [if:else if statement]
                                                    */
                                                    if (allowStream) {
                                                        /* Logic
                                                                [if:else if statement]

                                                            > Update > (Allow Stream, Stream Lock)
                                                        */
                                                        if (character == '"' || character == "'") {
                                                            allowStream = !1;
                                                            streamLock = character
                                                        }

                                                        else if (character == '/' && nextCharacter == '/') {
                                                            allowStream = !1;
                                                            streamLock = 'single-line-comment'
                                                        }

                                                        else if (character == '/' && nextCharacter == '*') {
                                                            allowStream = !1;
                                                            streamLock = 'multi-line-comment'
                                                        }
                                                    }

                                                    else if (
                                                        ((character == '"' || character == "'") && character == streamLock) ||
                                                        (character == '\n' && 'single-line-comment' == streamLock) ||
                                                        ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                                                    ) {
                                                        // Update > (Allow Stream, Stream Lock)
                                                        allowStream = !0;
                                                        streamLock = ''
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (allowStream)
                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (endingFunctionHeadDelimiterCount == openingFunctionHeadDelimiterCount)
                                                            // Break
                                                            break;

                                                        else {
                                                            // Update > (Ending Function Head Delimiter Count, Opening Function Head Delimiter (Count | Matched), Stream)
                                                            (character == '(') && (openingFunctionHeadDelimiterMatched ? openingFunctionHeadDelimiterCount += 1 : openingFunctionHeadDelimiterMatched = !0);
                                                            (character == ')') && (endingFunctionHeadDelimiterCount += 1)
                                                        }

                                                    // Update > Stream
                                                    stream += character
                                                }
                                    }

                                    else
                                        // Error
                                        LDKF.throwError('funcPrototypeHead', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'function'));

                                    // Return
                                    return stream
                                };

                                /* Name
                                        --- NOTE ---
                                            #Lapys: Legacy browsers may not have the `name` property on function objects.
                                */
                                LDKF.get.funcPrototypeName = function funcPrototypeName(method) {
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isFunction(method)) {
                                        // Initialization > Code
                                        var code = LDKF.trimLeftString(LDKF.string(method));

                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (LDKF.isArrowFunction(method))
                                            // Return
                                            return '';

                                        else if (LDKF.isClass(method))
                                            // Return
                                            return (function(code) {
                                                // Update > Code
                                                code = LDKF.trimLeftString(code);

                                                // Initialization > (Iterator, Length, Stream)
                                                var iterator = 0,
                                                    length = code.length,
                                                    stream = '';

                                                /* Loop
                                                        Iterate through Code.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > Character
                                                    var character = code[iterator];

                                                    // Logic > Break
                                                    if (character == ' ')
                                                        break;

                                                    // Update > Stream
                                                    stream += character
                                                }

                                                // Return
                                                return stream
                                            })(LDKF.rendString(code, 5 /* => 'class'.length */));

                                        // Return
                                        return  (function(code) {
                                            // Update > Code
                                            code = LDKF.trimLeftString(code);

                                            // Initialization > (Iterator, Length, Stream)
                                            var iterator = 0,
                                                length = code.length,
                                                stream = '';

                                            /* Loop
                                                    Iterate through Code.
                                            */
                                            for (iterator; iterator != length; iterator += 1) {
                                                // Initialization > Character
                                                var character = code[iterator];

                                                // Logic > Break
                                                if (character == '(')
                                                    break;

                                                // Update > Stream
                                                stream += character
                                            }

                                            // Return
                                            return stream
                                        })(LDKF.rendString(code, 8 /* => 'function'.length */))
                                    }

                                    else
                                        // Error
                                        LDKF.throwError('funcPrototypeName', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'function'))
                                };

                                // Parameters
                                LDKF.get.funcPrototypeParameters = function funcPrototypeParameters(method) {
                                    // Initialization > Parameters
                                    var params = LDKF.customArray('ParameterList');

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isFunction(method)) {
                                        // Initialization > (Allow Stream, Head, Index, Stream Lock)
                                        var allowStream = !0,
                                            head = LDKF.trimString(LDKF.get.funcPrototypeHead(method)),
                                            index = 0,
                                            streamLock;

                                        /* Logic
                                                [if statement]
                                        */
                                        if (head) {
                                            // Logic > Loop > Update > Head
                                            if (LDKF.isDefaultFunction(method))
                                                while (head && head[0] != '(')
                                                    head = LDKF.rendString(head, 1);

                                            // Update > Head
                                            (head[0] == '(') || (head = '(' + head + ')');

                                            // Initialization > (Iterator, (Decremented) Length)
                                            var iterator = 0,
                                                length = head.length,
                                                decrementedLength = length  -1;

                                            /* Loop
                                                    Iterate through Head.
                                            */
                                            for (iterator; iterator != length; iterator += 1) {
                                                // Initialization > (Next) Character
                                                var character = head[iterator],
                                                    nextCharacter = head[iterator + 1];

                                                /* Logic
                                                        [if:else if statement]
                                                */
                                                if (allowStream) {
                                                    /* Logic
                                                            [if:else if statement]

                                                        > Update > (Allow Stream, Stream Lock)
                                                    */
                                                    if (character == '"' || character == "'") {
                                                        allowStream = !1;
                                                        streamLock = character
                                                    }

                                                    else if (character == '/' && nextCharacter == '/') {
                                                        allowStream = !1;
                                                        streamLock = 'single-line-comment'
                                                    }

                                                    else if (character == '/' && nextCharacter == '*') {
                                                        allowStream = !1;
                                                        streamLock = 'multi-line-comment'
                                                    }
                                                }

                                                else if (
                                                    ((character == '"' || character == "'") && character == streamLock) ||
                                                    (character == '\n' && 'single-line-comment' == streamLock) ||
                                                    ((character == '*' && code[iterator + 1] == '/') && 'multi-line-comment' == streamLock)
                                                ) {
                                                    // Update > (Allow Stream, Stream Lock)
                                                    allowStream = !0;
                                                    streamLock = ''
                                                }

                                                // Update > (Index | Parameters)
                                                allowStream &&
                                                (character == ',' ? index += 1 : (
                                                    (!iterator || iterator == decrementedLength) ||
                                                    (LDKF.isVoid(params[index]) ? LDKF.lendArray(params, character) : params[index] += character)
                                                ))
                                            }
                                        }
                                    }

                                    else
                                        // Error
                                        LDKF.throwError('funcPrototypeParameters', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'function'));

                                    // Initialization > (Iterator, Length)
                                    var iterator = 0,
                                        length = params.length;

                                    // Modification > Parameters > (Constructor > Prototype)
                                    params.__proto__ = LDKO.parameterListPrototype;

                                    /* Loop
                                            Index Parameters.
                                    */
                                    for (iterator; iterator != length; iterator += 1) {
                                        // Initialization > Parameter
                                        var param = LDKF.trimString(params[iterator]);

                                        // Modification > Parameters
                                            // Value Of
                                            LDKF.objectDefineProperty(params[iterator] = {
                                                // Address
                                                address: (function(param) {
                                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                                    var allowStream = !0,
                                                        iterator = 0,
                                                        length = param.length,
                                                        stream = '';

                                                    /* Loop
                                                            Iterate through Parameter.
                                                    */
                                                    for (iterator; iterator != length; iterator += 1) {
                                                        // Initialization > Character
                                                        var character = param[iterator];

                                                        // Logic > Break
                                                        if (character == ' ')
                                                            break;

                                                        // Update > Stream
                                                        stream += character
                                                    }

                                                    // Return
                                                    return LDKF.trimString(stream)
                                                })(param),

                                                // Value
                                                value: (function(param) {
                                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                                    var allowStream = !1,
                                                        iterator = 0,
                                                        length = param.length,
                                                        stream = '';

                                                    /* Loop
                                                            Iterate through Parameter.
                                                    */
                                                    for (iterator; iterator != length; iterator += 1) {
                                                        // Initialization > Character
                                                        var character = param[iterator];

                                                        /* Logic
                                                                [if:else if statement]
                                                        */
                                                        if (allowStream)
                                                            // Update > Stream
                                                            stream += character;

                                                        else if (character == '=')
                                                            // Update > Allow Stream
                                                            allowStream = !0
                                                    }

                                                    // Update > Stream
                                                    stream = LDKF.trimString(stream);

                                                    // Error Handling
                                                    try {
                                                        // Return
                                                        return stream ? LDKO.eval(stream) : null
                                                    } catch (error) {
                                                        // Error Handling > Logic > Return
                                                        try {
                                                            if (error.constructor === LDKO.syntaxError)
                                                                return stream ? LDKO.eval('(' + stream + ')') : null
                                                        } catch (error) {}
                                                    }

                                                    // Return
                                                    return stream
                                                })(param)
                                            }, 'valueOf', (function() {
                                                /* initialization > Parameter
                                                        --- NOTE ---
                                                            #Lapys: The `let` keyword would`ve allowed local copies of the
                                                                `param` variable exist for each iteration.
                                                */
                                                var parameter = param;

                                                // Return
                                                return {value: function valueOf() { return parameter }}
                                            })());

                                            /* Constructor > Prototype
                                                    --- NOTE ---
                                                        #Lapys: Another way to create custom objects (reference to the `LDKF.customObject` syntax).
                                            */
                                            params[iterator].__proto__ = LDKO.parameterPrototype
                                    }

                                    // Return
                                    return params
                                };

                            // HTML All Collection > Prototype
                                // Length
                                LDKF.get.htmlAllCollectionPrototypeLength = function htmlAllCollectionPrototypeLength() {
                                    // Return
                                    return LDKO.descriptions.htmlAllCollectionPrototypeLength.get.call(arguments[0])
                                };

                            // HTML Collection > Prototype
                                // Length
                                LDKF.get.htmlCollectionPrototypeLength = function htmlCollectionPrototypeLength() {
                                    // Return
                                    return LDKO.descriptions.htmlCollectionPrototypeLength.get.call(arguments[0])
                                };

                            // HTML Element > Prototype
                                // Inner HTML
                                LDKF.get.elementPrototypeInnerHTML = function elementPrototypeInnerHTML() {
                                    // Return
                                    return LDKO.descriptions.elementPrototypeInnerHTML.get.call(arguments[0])
                                };

                                // Inner Text
                                LDKF.get.htmlElementPrototypeInnerText = function htmlElementPrototypeInnerText() {
                                    // Return
                                    return LDKO.descriptions.htmlElementPrototypeInnerText.get.call(arguments[0])
                                };

                                // Style
                                LDKF.get.htmlElementPrototypeStyle = function htmlElementPrototypeStyle() {
                                    // Return
                                    return LDKO.descriptions.htmlElementPrototypeStyle.get.call(arguments[0])
                                };

                            // HTML Input Element > Prototype
                                // Value
                                LDKF.get.htmlInputElementPrototypeValue = function htmlInputElementPrototypeValue() {
                                    // Return
                                    return LDKO.descriptions.htmlInputElementPrototypeValue.get.call(arguments[0])
                                };

                            // HTML Textarea Element > Prototype
                                // Value
                                LDKF.get.htmlTextareaElementPrototypeValue = function htmlTextareaElementPrototypeValue() {
                                    // Return
                                    return LDKO.descriptions.htmlTextareaElementPrototypeValue.get.call(arguments[0])
                                };

                            // Location
                                // Host
                                LDKF.get._locationHost = function _locationHost() {
                                    // Initialization > Result
                                    var result;

                                    // Error Handling
                                    try {
                                        // Update > Result
                                        result = LDKO.descriptions._locationHost.get.call(arguments.length ? arguments[0] : LDKO._location)
                                    } catch (error) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (error.constructor === LDKO.typeError && error.message === 'Invalid calling object')
                                            /* Update > Result
                                                    --- WARN ---
                                                        #Lapys: There should be an alternative way to access values like these.
                                            */
                                            result = location.host;

                                        else
                                            // Error
                                            throw error
                                    }

                                    // Return
                                    return result
                                };

                                // Host Name
                                LDKF.get._locationHostName = function _locationHostName() {
                                    // Initialization > Result
                                    var result;

                                    // Error Handling
                                    try {
                                        // Update > Result
                                        result = LDKO.descriptions._locationHostName.get.call(arguments.length ? arguments[0] : LDKO._location)
                                    } catch (error) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (error.constructor === LDKO.typeError && error.message === 'Invalid calling object')
                                            // Update > Result
                                            result = location.hostname;

                                        else
                                            // Error
                                            throw error
                                    }

                                    // Return
                                    return result
                                };

                                // Protocol
                                LDKF.get._locationProtocol = function _locationProtocol() {
                                    // Initialization > Result
                                    var result;

                                    // Error Handling
                                    try {
                                        // Update > Result
                                        result = LDKO.descriptions._locationProtocol.get.call(arguments.length ? arguments[0] : LDKO._location)
                                    } catch (error) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (error.constructor === LDKO.typeError && error.message === 'Invalid calling object')
                                            // Update > Result
                                            result = location.protocol;

                                        else
                                            // Error
                                            throw error
                                    }

                                    // Return
                                    return result
                                };

                            // Node > Prototype
                                // Child Nodes
                                LDKF.get.nodePrototypeChildNodes = function nodePrototypeChildNodes() {
                                    // Return
                                    return LDKO.descriptions.nodePrototypeChildNodes.get.call(arguments[0])
                                };

                            // Node List > Prototype
                                // Length
                                LDKF.get.nodeListPrototypeLength = function nodeListPrototypeLength() {
                                    // Return
                                    return LDKO.descriptions.nodeListPrototypeLength.get.call(arguments[0])
                                };

                                // Parent Node
                                LDKF.get.nodeListPrototypeParentNode = function nodeListPrototypeParentNode() {
                                    // Return
                                    return LDKO.descriptions.nodeListPrototypeParentNode.get.call(arguments[0])
                                };

                        /* Iterate Array
                                --- NOTE ---
                                    #Lapys: Iterate all numerical keys (and other specified keys) of an array.
                        */
                        LDKF.iterateArray = function iterateArray() {
                            // Initialization > (Object, Callback, Test, Stop, Item, Iterations (Keys))
                            var array = arguments[0],
                                callback = arguments[1],
                                test = arguments.length > 2 ? arguments[2] : (function() { return !0 }),
                                stop = arguments[3];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length && LDKF.isConstructible(array) && LDKF.isArray(array)) {
                                // Error
                                LDKF.isFunction(callback) || LDKF.throwError('Second argument', ['must', 'a'], 'function');
                                LDKF.isFunction(test) || LDKF.throwError('Third argument', ['must', 'a'], 'function');

                                // ((LapysJS Development Kit > Functions) > Iterate Object) > Array
                                LDKF.iterateObject(array, function(key) {
                                    // Callback
                                    (key == 'length') || callback.apply(array, arguments)
                                }, function(key, value, description, iteratorObject) {
                                    // Return
                                    return array === iteratorObject && test.apply(array, arguments)
                                }, stop)
                            }

                            // Return
                            return array
                        };

                        /* Iterate Object
                                --- CODE ---
                                    #Lapys: iterateObject(object, callback, condition, stopOnConditionFail)

                                --- NOTE ---
                                    #Lapys: Index all directly/ indirectly defined/ inherited properties from an object.
                        */
                        LDKF.iterateObject = function iterateObject() {
                            // Initialization > (Object, Callback, Test, Stop, Item, Iterations (Keys))
                            var object = arguments[0],
                                callback = arguments[1],
                                test = arguments.length > 2 ? arguments[2] : (function() { return !0 }),
                                stop = arguments[3],
                                item,
                                iterations = [],
                                iterationsKeys = [];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length && LDKF.isConstructible(object)) {
                                // Error
                                LDKF.isFunction(callback) || LDKF.throwError('Second argument', ['must', 'a'], 'function');
                                LDKF.isFunction(test) || LDKF.throwError('Third argument', ['must', 'a'], 'function');

                                // Initialization > (Condition, Objectified Object, Prototype, Indexes, Iterator, Length)
                                var condition = test(),
                                    objectifiedObject = LDKF.object(object),
                                    proto = object.__proto__,
                                    indexes = [object, objectifiedObject, proto],
                                    iterator = 0,
                                    length = indexes.length;

                                // Function > Iterate
                                function iterate(key, value, description, iteratorObject) {
                                    // Update > Condition
                                    condition = test.apply(object, arguments)
                                }

                                /* Loop
                                        Index Indexes.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > Index
                                    var index = indexes[iterator];

                                    /* Logic
                                            [if statement]
                                    */
                                    if (LDKF.isConstructible(index)) {
                                        // Initialization > (Descriptors (Keys (Iterator, Length)), Keys (Iterator, Length))
                                        var descriptors = LDKF.objectGetOwnPropertyDescriptors(index),
                                            descriptorsKeys = LDKF.objectKeys(descriptors),
                                            descriptorsKeysIterator = 0,
                                            descriptorsKeysLength = descriptorsKeys.length,
                                            keys = LDKF.objectKeys(index),
                                            keysIterator = 0,
                                            keysLength = keys.length;

                                        /* Loop
                                                Index Index.
                                        */
                                        for (item in index) {
                                            // Initialization > Iterator
                                            var iteration = {description: LDKF.objectGetOwnPropertyDescriptor(index, item), iteratorObject: index, key: item};

                                            /* Logic
                                                    [if:else statement
                                            */
                                            if (iteration.description)
                                                // Modification > Iterator > Value
                                                iteration.value = 'value' in iteration.description ? iteration.description.value : iteration.description.get;

                                            else {
                                                // Modification > Iterator > Description
                                                iteration.description = null;

                                                // Error Handling > Modification > Iteration > Value
                                                try { iteration.value = object[iteration.key] }
                                                catch (error) { iteration.value = error }
                                            }

                                            // Update > Iterations
                                            iterations[iterations.length] = iteration
                                        }

                                        for (descriptorsKeysIterator = 0; descriptorsKeysIterator != descriptorsKeysLength; descriptorsKeysIterator += 1) {
                                            // Initialization > (Descriptors Keys, Iteration)
                                            var descriptorsKey = descriptorsKeys[descriptorsKeysIterator],
                                                iteration = {description: descriptors[descriptorsKey], iteratorObject: index, key: descriptorsKey};

                                            /* Logic
                                                    [if:else statement
                                            */
                                            if (iteration.description)
                                                // Modification > Iterator > Value
                                                iteration.value = 'value' in iteration.description ? iteration.description.value : iteration.description.get;

                                            else {
                                                // Modification > Iterator > Description
                                                iteration.description = null;

                                                // Error Handling > Modification > Iteration > Value
                                                try { iteration.value = object[iteration.key] }
                                                catch (error) { iteration.value = error }
                                            }

                                            // Update > Iterations
                                            iterations[iterations.length] = iteration
                                        }

                                        for (keysIterator = 0; keysIterator != keysLength; keysIterator += 1) {
                                            // Initialization > (Key, Iteration)
                                            var key = keys[keysIterator],
                                                iteration = {description: LDKF.objectGetOwnPropertyDescriptor(index, key), iteratorObject: index, key: key};

                                            /* Logic
                                                    [if:else statement
                                            */
                                            if (iteration.description)
                                                // Modification > Iterator > Value
                                                iteration.value = 'value' in iteration.description ? iteration.description.value : iteration.description.get;

                                            else {
                                                // Modification > Iterator > Description
                                                iteration.description = null;

                                                // Error Handling > Modification > Iteration > Value
                                                try { iteration.value = object[iteration.key] }
                                                catch (error) { iteration.value = error }
                                            }

                                            // Update > Iterations
                                            iterations[iterations.length] = iteration
                                        }
                                    }
                                }

                                // Update > (Iterator, Length)
                                iterator = 0;
                                length = iterations.length;

                                /* Loop
                                        Index Iterations.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > (Iteration, Key, Value, Description, Iterator Object)
                                    var iteration = iterations[iterator],
                                        key = iteration.key,
                                        value = iteration.value,
                                        description = iteration.description,
                                        iteratorObject = iteration.iteratorObject;

                                    // Update > Key
                                    LDKF.isString(key) || (key = LDKF.string(key));

                                    /* Logic
                                            [if statement]

                                            --- NOTE ---
                                                #Lapys: Prevent properties from being repeated.
                                    */
                                    if (!LDKF.isInArray(iterationsKeys, key)) {
                                        // Update > (Iterations Keys, Condition)
                                        iterationsKeys[iterationsKeys.length] = key;
                                        condition = test.call(object, key, value, description, iteratorObject);

                                        // Callback
                                        condition && callback.call(object, key, value, description, iteratorObject);

                                        // Update > Iterator
                                        (!condition && stop) && (iterator = length - 1)
                                    }
                                }
                            }

                            // Return
                            return object
                        };

                        /* Query Event Reference
                                --- NOTE ---
                                    #Lapys: Return a sequence of argument sets based on specified input.
                        */
                        LDKF.queryEventReference = function queryEventReference() {
                            // Initialization > (Type, Listener, Options, Reference)
                            var type = arguments[0],
                                listener = arguments[1],
                                options = arguments.length > 2 ? arguments[2] : {capture: !1, once: !1, passive: !1},
                                reference = [];

                            /* Logic
                                    [if:else statement]
                            */
                            if (arguments.length > 1) {
                                // Error
                                LDKF.isArray(listener) || (LDKF.isFunction(listener) ? listener = [listener] : LDKF.throwError('queryEventReference', 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], ['listener function', 'a set of listener functions'])));

                                // Update > (Options, Type)
                                LDKF.isArray(options) || (options = [options]);
                                LDKF.isArray(type) || (type = [LDKF.string(type)]);

                                // Error
                                (LDKF.filterArray(listener, function(value) { return LDKF.isFunction(value) }).length == listener.length) || LDKF.throwError('queryEventReference', 'argument', 'All listeners must be listener functions');

                                // Update > (Options, Type)
                                LDKF.buildArray(options, function(value) { return LDKF.isPureObject(value) ? (function(value) { try { return {capture: !!value.capture, once: !!value.once, passive: !!value.passive} } catch (error) {} return {capture: !1, once: !1, passive: !1} })(value) : {capture: !!value, once: !1, passive: !1} });
                                LDKF.buildArray(type, function(value) { return LDKF.string(value) });

                                // Initialization > (Iterator, () Length)
                                var iterator = 0,
                                    listenerLength = listener.length,
                                    optionsLength = options.length,
                                    typeLength = type.length;

                                /* Logic
                                        If
                                            the arguments are of the same length.
                                */
                                if (optionsLength == listenerLength && typeLength == listenerLength && optionsLength == typeLength)
                                    /* Loop
                                            Index Reference.

                                        > Update > Reference
                                    */
                                    for (iterator; iterator != typeLength; iterator += 1)
                                        reference[reference.length] = {listener: listener[iterator], options: options[iterator], type: type[iterator]};

                                else {
                                    // Initialization > ((Listener, Options, Type) Iterator, Length)
                                    var listenerIterator = -1, optionsIterator = -1, typeIterator = -1,
                                        length = LDKF.max(listenerLength, optionsLength, typeLength);

                                    // Update > (Listener, Options, Type) Length
                                    listenerLength -= 1;
                                    optionsLength -= 1;
                                    typeLength -= 1;

                                    /* Loop
                                            Index Reference.
                                    */
                                    for (iterator; iterator != length; iterator += 1) {
                                        // Update >
                                            // (Listener, Options, Type) Iterator
                                            listenerIterator += 1;
                                            optionsIterator += 1;
                                            typeIterator += 1;

                                            // Reference
                                            reference[reference.length] = {
                                                listener: listenerIterator > listenerLength ? listener[listenerIterator = 0] : listener[listenerIterator],
                                                options: optionsIterator > optionsLength ? options[optionsIterator = 0] : options[optionsIterator],
                                                type: typeIterator > typeLength ? type[typeIterator = 0] : type[typeIterator]
                                            }
                                    }
                                }

                                // Return
                                return reference
                            }

                            else
                                // Error
                                LDKF.throwError('queryEventReference', 'argument', [2, 0]);

                            // Return
                            return reference
                        };

                        /* Recur Object
                                --- NOTE ---
                                    #Lapys: Recursively iterate through an object.

                                --- UPDATE REQUIRED ---
                                    #Lapys: The `parentPath` parameter should actually contain all ancestors of the indexed object.
                        */
                        LDKF.recurObject = function recurObject() {
                            // Initialization > (Object, Callback, Test, Stop)
                            var object = arguments[0],
                                callback = arguments[1],
                                test = arguments.length > 2 ? arguments[2] : (function() { return !0 }),
                                stop = arguments[3];

                            /* Logic
                                    [if statement]
                            */
                            if (arguments.length && LDKF.isConstructible(object)) {
                                // Initialization > (Condition, Constructor, Prototype, Indexed, Sequences)
                                var condition,
                                    constructor = object.constructor,
                                    prototype = object.__proto__,
                                    indexed = [],
                                    sequences = [];

                                // Error
                                LDKF.isFunction(callback) || LDKF.throwError('Second argument', ['must', 'a'], 'function');
                                LDKF.isFunction(test) || LDKF.throwError('Third argument', ['must', 'a'], 'function');

                                // Function
                                    // Iterate
                                    function iterate(key, value, description, parent, parentPath) {
                                        // Callback
                                        callback.apply(object, arguments)
                                    }

                                    // Match
                                    function match(value) {
                                        // Error Handling > Return
                                        try { return value.constructor === constructor && value.__proto__ === prototype }
                                        catch (error) {}

                                        // Return
                                        return !1
                                    }

                                    // Recur
                                    function recur(object) {
                                        // Initialization > Parent (Path)
                                        var parent = arguments.length > 1 ? arguments[1] : null,
                                            parentPath = LDKF.isNull(parent) ? null : [parent];

                                        // Modification > (LapysJS Development Kit > Random) > Call Stack Size
                                        LDKR.callStackSize += 1;

                                        // ((LapysJS Development Kit > Functions) > Iterate Object) > Object
                                        LDKF.iterateObject(indexed[indexed.length] = object, function(key, value, description) {
                                            // Update > Sequences
                                            sequences[sequences.length] = {key: key, value: value, description: description, parent: parent, parentPath: parentPath}
                                        }, function(key, value, description, iteratorObject) { return object === iteratorObject }, !0);

                                        // Initialization > (Iterator, Length)
                                        var iterator = 0,
                                            length = sequences.length;

                                        /* Loop
                                                Index Sequences.
                                        */
                                        for (iterator; iterator != length; iterator += 1) {
                                            // Initialization > (Sequence, Value)
                                            var sequence = sequences[iterator],
                                                value = sequence.value;

                                            /* Recur > Value
                                                    --- WARN ---
                                                        #Lapys: The first condition prevents infinitely deep objects from being
                                                            recursively called without end.
                                            */
                                            (function() {
                                                // Initialization > Iterator
                                                var iterator = indexed.length;

                                                /* Loop
                                                        Index Indexed.
                                                */
                                                while (iterator) {
                                                    // Initialization > Index
                                                    var index = indexed[iterator -= 1];

                                                    // Error Handling > Logic > Return
                                                    try {
                                                        if (index == value || index === value || LDKF.isSameSourceObject(index, value))
                                                            return !0;
                                                    } catch (error) {}
                                                }

                                                // Return
                                                return !1
                                            })() || (match(value) && recur(value, object))
                                        }
                                    }

                                // Recur > Object
                                recur(object);

                                // Initialization > (Iterator, Length)
                                var iterator = 0,
                                    length = sequences.length;

                                /* Loop
                                        Index Sequences.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > (Sequence, Key, Value, Description, Parent (Path))
                                    var sequence = sequences[iterator],
                                        key = sequence.key,
                                        value = sequence.value,
                                        description = sequence.description,
                                        parent = sequence.parent,
                                        parentPath = sequence.parentPath;

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (condition = test(key, value, description))
                                        // Iterate
                                        iterate(key, value, description, parent, parentPath);

                                    else if (stop)
                                        // Break
                                        break
                                }
                            }

                            // Return
                            return object
                        };

                        /* Recur Object Property
                                --- NOTE ---
                                    #Lapys: Recursively index the object until the specified property name given is found.

                                --- WARN ---
                                    #Lapys: This method may deadlock all JavaScript processing or be relatively slow if the searched for property is not found
                                        and the object specified is large (e.g.: the global `window` object).
                        */
                        LDKF.recurObjectProperty = function recurObjectProperty() {
                            // Initialization > (Object, Name, Iterator, Length, Match (Found), Indexed)
                            var object = arguments[0],
                                name = arguments[1],
                                iterator = 0,
                                length = 0,
                                match,
                                matchFound = !1,
                                indexed = [];

                            // Function
                                // Includes
                                function includes(array, match) {
                                    // Initialization > Iterator
                                    var iterator = array.length;

                                    /* Loop
                                            Index Array.
                                    */
                                    while (iterator) {
                                        // Initialization > Item
                                        var item = array[iterator -= 1];

                                        // Logic > Return
                                        if (
                                            LDKF.isSameSourceObject(match, item) ||
                                            (LDKF.isNaN(match) && LDKF.isNaN(item))
                                        )
                                            return !0
                                    }
                                }

                                // Match
                                function match(object, key) {
                                    // Error Handling > Return
                                    try { return key in object }
                                    catch (error) {}
                                }

                                // Found
                                function found(object, key) {
                                    // Initialization > Description
                                    var description = LDKF.objectGetOwnPropertyDescriptor(object, key);

                                    // Update > Match
                                    match = new LapysJSObject({object: object, key: key})
                                }

                            /* Logic
                                    [if:else statement]
                            */
                            if (match(object, name)) {
                                // Found > Object
                                found(object, name);

                                // Update > Match Found
                                matchFound = !0
                            }

                            else {
                                // Update > Indexed
                                indexed[indexed.length] = object;

                                // ((LapysJS Development Kit > Functions) > Iterate Object) > Object
                                LDKF.iterateObject(object, function(key, value) {
                                    // Update > Indexed
                                    indexed[indexed.length] = value
                                })
                            }

                            /* Loop
                                    [while statement]

                                    --- NOTE ---
                                        #Lapys:
                                            - Recursively search for the specified property name.
                                            - Benefit of using a `while` statement is that the call stack size can be ignored.
                            */
                            while (!matchFound && length !== indexed.length) {
                                // Update > Length
                                length = indexed.length;

                                /* Loop
                                        Index Indexed.
                                */
                                for (iterator; !matchFound && iterator != length; iterator += 1) {
                                    // Initialization > Index
                                    var index = indexed[iterator];

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (match(index, name)) {
                                        // Found > Index
                                        found(index, name);

                                        // Update > Match Found
                                        matchFound = !0
                                    }

                                    else {
                                        // ((LapysJS Development Kit > Functions) > Iterate Object) > Index
                                        LDKF.iterateObject(index, function(key, value) {
                                            // Update > Indexed
                                            includes(indexed, value) || (indexed[indexed.length] = value)
                                        })
                                    }
                                }
                            }

                            // Return
                            return matchFound ? match : LDKF.error(LDKF.debugMessage('recurObjectProperty', 'argument', 'Could not index property'))
                        };

                        // Request Animation Frame
                        LDKF.requestAnimationFrame = function requestAnimationFrame(frame) {
                            // Logic > Return
                            if (!LDKF.isVoid(frame))
                                return LDKO.requestAnimationFrame.call(window, frame)
                        };

                        // Reset Array
                        LDKF.resetArray = function resetArray(array) {
                            // Initialization > Iterator
                            var iterator = array.length;

                            // Loop > Deletion
                            while (iterator)
                                delete array[iterator -= 1];

                            // Modification > Array > Length
                            array.length = 0;

                            // Return
                            return array
                        };

                        /* Set */
                            // Document > Prototype
                                // Title
                                LDKF.set.documentPrototypeTitle = function documentPrototypeTitle() {
                                    // Return
                                    return LDKO.descriptions.documentPrototypeTitle.set.call(arguments[0], arguments[1])
                                };

                            // Element > Prototype
                                // Inner HTML
                                LDKF.set.elementPrototypeInnerHTML = function elementPrototypeInnerHTML() {
                                    // Return
                                    return LDKO.descriptions.elementPrototypeInnerHTML.set.call(arguments[0], arguments[1])
                                };

                            // HTML Textarea Element > Prototype
                                // Value
                                LDKF.set.htmlTextareaElementPrototypeValue = function htmlTextareaElementPrototypeValue() {
                                    // Return
                                    return LDKO.descriptions.htmlTextareaElementPrototypeValue.set.call(arguments[0], arguments[1])
                                };

                            // Node > Prototype
                                // Text Content
                                LDKF.set.nodePrototypeTextContent = function nodePrototypeTextContent() {
                                    // Return
                                    return LDKO.descriptions.nodePrototypeTextContent.set.call(arguments[0], arguments[1])
                                };

                            // Window
                                // Name
                                LapysJSDevelopmentKit.functions.set.windowName = function windowName() {
                                    // Return
                                    return LapysJSDevelopmentKit.objects.descriptions.windowName.set.apply(arguments[0], LDKF.rendArray(arguments, 1))
                                };

                        // Update Event Type
                        LDKF.updateEventType = function updateEventType(type) {
                            /* Logic
                                    [switch:case:default statement]
                            */
                            switch (type) {
                                // Predefined Events
                                    // Animation
                                    case '$animation': return ['animationend', 'animationiteration', 'animationstart']; break;

                                    // Before
                                    case '$before': return ['beforecopy', 'beforecut', 'beforepaste']; break;

                                    // Can Play
                                    case '$canplay': return ['canplay', 'canplaythrough']; break;

                                    // Device
                                    case '$device': return ['devicemotion', 'deviceorientation', 'deviceorientationabsolute']; break;

                                    // Drag
                                    case '$drag': return ['drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart']; break;

                                    // Key
                                    case '$key': return ['keydown', 'keypress', 'keyup']; break;

                                    // Load
                                    case '$load': return ['load', 'loadeddata', 'loadedmetadata', 'loadstart']; break;

                                    // Message
                                    case '$message': return ['message', 'messageerror']; break;

                                    // Mouse
                                    case '$mouse': return ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel']; break;

                                    // Page
                                    case '$page': return ['pagehide', 'pageshow']; break;

                                    // Play
                                    case '$play': return ['play', 'playing']; break;

                                    // Pointer
                                    case '$pointer': return ['pointercancel', 'pointerdown', 'pointerenter', 'pointermove', 'pointerleave', 'pointerout', 'pointerover', 'pointerup']; break;

                                    // Touch
                                    case '$touch': return ['touchcancel', 'touchend', 'touchmove', 'touchstart']; break;

                                // Custom Events
                                    // Edit
                                    case '$edit': return ['change', 'input']; break;

                                // [Default]
                                default: return [type]
                            }
                        };

                    // Random
                        // Random Number Generator
                            /* Seeder
                                    --- NOTE ---
                                        #Lapys: Function that generates a random seed.
                            */
                            LDKRNG.seeder = LDKRNG.algorithms.seeder(LDKF.string(LDKF.datePrototypeGetMilliseconds(new LDKO.date)));

                            /* Randomizer
                                    --- NOTE ---
                                        #Lapys:
                                            - Function that generates a random number.
                                            - This specific randomizer requires 4 seeds.
                            */
                            LDKRNG.randomizer = LDKRNG.algorithms.randomizer(LDKF.string(LDKRNG.seeder()), LDKF.string(LDKRNG.seeder()), LDKF.string(LDKRNG.seeder()), LDKF.string(LDKRNG.seeder()));

                            /* Generated Number
                                    --- NOTE ---
                                        #Lapys: Might be worthwhile to store the randomly generated number.
                            */
                            LDKRNG.generatedNumber = LDKRNG.generateRandomNumber();

                // LapysJS
                    // Script
                    LDKF.objectDefineProperty(LapysJS, 'script', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !0,

                        // Value
                        value: LDKO.descriptions.documentPrototypeCurrentScript.get.call(document),

                        // Writable
                        writable: !1
                    });

            /* Function */
                /* Initialization
                        --- NOTE ---
                            #Lapys: Begin installing the components of the Library,
                                not just the LapysJS Development Kit.
                */
                function INIT() {
                    /* Modification
                            --- NOTE ---
                                #Lapys: Install all other public methods & properties.
                    */
                        // Window
                            // Absolute
                            window.abs = function abs() { return LDKF.abs.apply(this, arguments) };

                            /* Application
                                    --- NOTE ---
                                        #Lapys: Not all documents on the world-wide web are made to be applications.
                            */
                            LDK.allowAppFeatures && (window.app = (function() {
                                // Initialization > (Application, Prototype, Get Meta Element Content, (Get, Has, Set) Viewport Property, Storage)
                                var application = new (function Application() {}),
                                    app = application,
                                    prototype = app.__proto__,
                                    getMetaElementContent = function getMetaElementContent() {
                                        // Initialization > (Query, Meta)
                                        var attribute = arguments.length > 1 ? arguments[1] : 'content',
                                            query = arguments[0],
                                            meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), query);

                                        /* Logic
                                                [if statement]
                                        */
                                        if (meta) {
                                            // Initialization > Content
                                            var content = LDKF.elementPrototypeGetAttribute(meta, 'content');

                                            // Logic > Return
                                            if (content)
                                                return LDKF.isNaN(+content) ? content : +content
                                        }

                                        // Return
                                        return null
                                    }, getViewportProperty = function getViewportProperty() {
                                        // Initialization > (Meta, Property)
                                        var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport'),
                                            property = arguments[0];

                                        /* Logic
                                                [if statement]
                                        */
                                        if (meta) {
                                            // Initialization > (Properties, Iterator)
                                            var properties = LDKF.joinStringToArray(LDKF.elementPrototypeGetAttribute(meta, 'content') || '', ','),
                                                iterator = properties.length;

                                            // Update > Properties
                                            LDKF.buildArray(properties, function(item) { return LDKF.trimString(item) });

                                            /* Loop
                                                    Index Properties.
                                            */
                                            while (iterator) {
                                                // Initialization > (Item, Name)
                                                var item = properties[iterator -= 1],
                                                    name = (function(property) {
                                                        // Initialization > (Iterator, Length, Stream)
                                                        var iterator = 0,
                                                            length = property.length,
                                                            stream = '';

                                                        /* Loop
                                                                Iterate through Property.
                                                        */
                                                        for (iterator; iterator != length; iterator += 1) {
                                                            // Initialization > Character
                                                            var character = property[iterator];

                                                            /* Logic
                                                                    [if:else statement]
                                                            */
                                                            if (character == '=')
                                                                // Break
                                                                break;

                                                            else
                                                                // Update > Stream
                                                                stream += character
                                                        }

                                                        // Return
                                                        return stream
                                                    })(item);

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (LDKF.trimString(name) == property) {
                                                    // Initialization > Value
                                                    var value = LDKF.trimString(LDKF.rendString(item, name.length));

                                                    // Loop > Update > Value
                                                    while (!LDKF.isAlphabet(value[0]) && !LDKF.isDigit(value[0]))
                                                        value = LDKF.rendString(value, 1);

                                                    // Return
                                                    return LDKF.isNaN(+value) ? value : +value
                                                }
                                            }
                                        }

                                        // Return
                                        return null
                                    }, hasViewportProperty = function hasViewportProperty() {
                                        // Initialization > (Meta, Property)
                                        var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport'),
                                            property = arguments[0];

                                        /* Loop
                                                [if statement]
                                        */
                                        if (meta) {
                                            // Initialization > Properties
                                            var properties = LDKF.joinStringToArray(LDKF.elementPrototypeGetAttribute(meta, 'content') || '', ',');

                                            // Update > Properties
                                            LDKF.buildArray(properties, function(item) {
                                                // Update > Item
                                                item = LDKF.trimString(item);

                                                // Initialization > (Iterator, Length, Stream)
                                                var iterator = 0,
                                                    length = item.length,
                                                    stream = '';

                                                /* Loop
                                                        Iterate through Item.
                                                */
                                                for (iterator; iterator != length; iterator += 1) {
                                                    // Initialization > Character
                                                    var character = item[iterator];

                                                    /* Logic
                                                            [if:else statement]
                                                    */
                                                    if (character == '=')
                                                        // Break
                                                        break;

                                                    else
                                                        // Update > Stream
                                                        stream += character
                                                }

                                                // Return
                                                return stream
                                            });

                                            // Return
                                            return LDKF.isInArray(properties, property)
                                        }

                                        // Return
                                        return !1
                                    }, setMetaElementContent = function setMetaElementContent() {
                                        // Initialization > (Query, (Force) Properties, Meta)
                                        var query = arguments[0],
                                            forceProperties = arguments.length > 2 ? arguments[2] : [],
                                            properties = arguments[1],
                                            meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), query);

                                        /* Logic
                                                [if statement]
                                        */
                                        if (!meta) {
                                            // Update > Meta
                                            meta = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'meta');

                                            // Initialization > (Ancestor, Head)
                                            var ancestor = LDKF.get.ancestorElement(),
                                                head = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'head');

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (!head) {
                                                // Update > Head
                                                head = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'head');

                                                // Insertion
                                                ancestor && LDKF.nodePrototypeAppendChild(ancestor, head)
                                            }

                                            // Insertion
                                            ancestor && LDKF.nodePrototypeAppendChild(head, meta)
                                        }

                                        // ((LapysJS Development Kit) > Functions) > Iterate Object > Properties
                                        LDKF.iterateObject(properties, function(key, value) {
                                            // Update > Value
                                            LDKF.isString(value) || (value = LDKF.string(value));

                                            // Logic > Modification > Meta > [Key]
                                            if (LDKF.isInArray(forceProperties, key))
                                                LDKF.elementPrototypeSetAttribute(meta, key, value);

                                            else if (!LDKF.elementPrototypeHasAttribute(meta, key))
                                                LDKF.elementPrototypeSetAttribute(meta, key, value)
                                        }, function(key, value, description, iteratorObject) {
                                            // Return
                                            return properties === iteratorObject
                                        }, !0)
                                    }, setViewportProperty = function setViewportProperty() {
                                        // Initialization > (Meta, Property, Value)
                                        var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport'),
                                            property = arguments[0],
                                            value = arguments[1];

                                        // Logic > Update > Value
                                        switch (property) {
                                            // Initial Scale
                                            case 'initial-scale': value = value == LDKF.int(value) ? value + '.0' : value; break;

                                            // Maximum Scale
                                            case 'maximum-scale': value = value == LDKF.int(value) ? value + '.0' : value; break;

                                            // Minimum Scale
                                            case 'minimum-scale': value = value == LDKF.int(value) ? value + '.0' : value; break;

                                            // User Scalable
                                            case 'user-scalable': value = value ? 'yes' : 'no'
                                        }

                                        /* Logic
                                                [if statement]
                                        */
                                        if (!meta) {
                                            // Initialization > Head
                                            var head = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'head');

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (!head) {
                                                // Initialization > Ancestor
                                                var ancestor = LDKF.get.ancestorElement();

                                                // Insertion
                                                LDKF.nodePrototypeAppendChild(ancestor, head = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'head'))
                                            }

                                            // Update > Meta
                                            meta = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'meta');

                                            // Modification > Meta > Name
                                            LDKF.elementPrototypeSetAttribute(meta, 'name', 'viewport');

                                            // Insertion
                                            LDKF.nodePrototypeAppendChild(head, meta)
                                        }

                                        // Initialization > (Properties, Iterator)
                                        var properties = LDKF.joinStringToArray(LDKF.elementPrototypeGetAttribute(meta, 'content') || '', ','),
                                            iterator = properties.length;

                                        // Update > Properties
                                        LDKF.buildArray(properties, function(item) { return LDKF.trimString(item) });

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (hasViewportProperty(property)) {
                                            // Function
                                                // Get Property Name
                                                function getPropertyName(property) {
                                                    // Initialization > (Iterator, Length, Stream)
                                                    var iterator = 0,
                                                        length = property.length,
                                                        stream = '';

                                                    /* Loop
                                                            Iterate through Property.
                                                    */
                                                    for (iterator; iterator != length; iterator += 1) {
                                                        // Initialization > Character
                                                        var character = property[iterator];

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (character == '=' || character == ',')
                                                            // Break
                                                            break;

                                                        else
                                                            // Update > Stream
                                                            stream += character
                                                    }

                                                    // Return
                                                    return stream
                                                }

                                                // Get Property Value
                                                function getPropertyValue(property) {
                                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                                    var allowStream = !1,
                                                        iterator = 0,
                                                        length = property.length,
                                                        stream = '';

                                                    /* Loop
                                                            Iterate through Property.
                                                    */
                                                    for (iterator; iterator != length; iterator += 1) {
                                                        // Initialization > Character
                                                        var character = property[iterator];

                                                        /* Logic
                                                                [if:else if statement]
                                                        */
                                                        if (allowStream)
                                                            // Update > Stream
                                                            stream += character;

                                                        else if (character == '=')
                                                            // Update > Allow Stream
                                                            allowStream = !0
                                                    }

                                                    // Return
                                                    return stream
                                                }

                                            /* Loop
                                                    Index Properties.
                                            */
                                            while (iterator) {
                                                // Initialization > (Properties Item) (Name, Value)
                                                var propertiesItem = properties[iterator -= 1],
                                                    propertiesItemName = getPropertyName(propertiesItem),
                                                    propertiesItemValue = getPropertyValue(propertiesItem);

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (property == propertiesItemName) {
                                                    /* Logic
                                                            [if:else statement]

                                                        > Update > Properties
                                                    */
                                                    if (propertiesItemName == 'minimal-ui')
                                                        value ?
                                                            LDKF.isInArray(properties, propertiesItemName) || (properties[properties.length] = propertiesItemName) :
                                                            LDKF.isInArray(properties, propertiesItemName) && LDKF.removeItemArray(properties, propertiesItemName);

                                                    else
                                                        properties[iterator] = propertiesItemName + '=' + (function(leadingWhitespaceLength) {
                                                            // Initialization > Stream
                                                            var stream = '';

                                                            /* Loop
                                                                    [while statement]

                                                                > Update > (Stream, Leading Whitespace Length)
                                                            */
                                                            while (leadingWhitespaceLength) {
                                                                stream += ' ';
                                                                leadingWhitespaceLength -= 1
                                                            }

                                                            // Return
                                                            return stream + value
                                                        })(propertiesItemValue.length - LDKF.trimLeftString(propertiesItemValue).length);

                                                    // Break
                                                    break
                                                }
                                            }
                                        }

                                        else
                                            /* Logic
                                                    [if:else statement]

                                                > Update > Properties
                                            */
                                            if (property == 'minimal-ui')
                                                value && (properties[properties.length] = 'minimal-ui');

                                            else
                                                properties[properties.length] = property + '=' + value;

                                        // Modification > Meta > Content
                                        LDKF.elementPrototypeSetAttribute(meta, 'content', LDKF.joinArrayToString(properties, ', '));

                                        // Return
                                        return LDKF.isNaN(+value) ? value : +value
                                    }, storage = {
                                        // Connection
                                        connection: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'connection'),

                                        // Cookie
                                        cookie: LDKF.objectGetOwnPropertyDescriptor(LDKO.documentPrototype, 'cookie') || ({get: function() { return LDKF.get.windowDocument().cookie }}),

                                        // Device Pixel Ratio
                                        devicePixelRatio: LDKF.objectGetOwnPropertyDescriptor(window, 'devicePixelRatio'),

                                        // Do not Track
                                        doNotTrack: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'doNotTrack'),

                                        // Language
                                        language: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'language'),

                                        // Languages
                                        languages: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'languages'),

                                        // Online
                                        online: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'onLine'),

                                        // Platform
                                        platform: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'platform'),

                                        // Plugins
                                        plugins: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'plugins'),

                                        // User Agent
                                        userAgent: LDKO.descriptions.navigatorPrototypeUserAgent,

                                        // Vendor
                                        vendor: LDKF.objectGetOwnPropertyDescriptor(LDKO.navigatorPrototype, 'vendor'),

                                        // Viewport
                                        viewport: (function() {
                                            // Initialization > Viewport
                                            var viewport = new (function ApplicationViewport() {});

                                            // Modification > Viewport
                                                // Height
                                                LDKF.objectDefineProperty(viewport, 'height', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function height() {
                                                        // Return
                                                        return getViewportProperty('height')
                                                    },

                                                    // Set
                                                    set: function height() {
                                                        // Initialization > Measurement
                                                        var measurement = LDKF.string(arguments[0]);

                                                        // (...)
                                                        setViewportProperty('height', measurement);
                                                        (function msAppWindow() {
                                                            // Initialization > Meta
                                                            var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=msapplication-window');

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (!meta) {
                                                                // Initialization > (Ancestor, Document, Head, Meta)
                                                                var ancestor = LDKF.get.ancestorElement(),
                                                                    document = LDKF.get.windowDocument(),
                                                                    head = LDKF.documentPrototypeQuerySelector(document, 'head'),
                                                                    meta = LDKF.documentPrototypeCreateElement(document, 'meta');

                                                                // Insertion
                                                                head || (ancestor && LDKF.nodePrototypeAppendChild(ancestor, head = LDKF.documentPrototypeCreateElement(document, 'head')));

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (ancestor) {
                                                                    // Modification > Meta > Name
                                                                    LDKF.elementPrototypeSetAttribute(meta, 'name', 'msapplication-window');

                                                                    // Insertion
                                                                    LDKF.nodePrototypeAppendChild(head, meta)
                                                                }
                                                            }

                                                            // Initialization > (Properties, Iterator)
                                                            var properties = LDKF.joinStringToArray(LDKF.elementPrototypeGetAttribute(meta, 'content') || '', ';'),
                                                                iterator = properties.length;

                                                            // Function
                                                                // Get Property Name
                                                                function getPropertyName(property) {
                                                                    // Initialization > (Iterator, Length, Stream)
                                                                    var iterator = 0,
                                                                        length = property.length,
                                                                        stream = '';

                                                                    /* Loop
                                                                            Iterate through Property.
                                                                    */
                                                                    for (iterator; iterator != length; iterator += 1) {
                                                                        // Initialization > Character
                                                                        var character = property[iterator];

                                                                        /* Logic
                                                                                [if:else statement]
                                                                        */
                                                                        if (character == '=' || character == ',')
                                                                            // Break
                                                                            break;

                                                                        else
                                                                            // Update > Stream
                                                                            stream += character
                                                                    }

                                                                    // Return
                                                                    return stream
                                                                }

                                                                // Get Property Value
                                                                function getPropertyValue(property) {
                                                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                                                    var allowStream = !1,
                                                                        iterator = 0,
                                                                        length = property.length,
                                                                        stream = '';

                                                                    /* Loop
                                                                            Iterate through Property.
                                                                    */
                                                                    for (iterator; iterator != length; iterator += 1) {
                                                                        // Initialization > Character
                                                                        var character = property[iterator];

                                                                        /* Logic
                                                                                [if:else if statement]
                                                                        */
                                                                        if (allowStream)
                                                                            // Update > Stream
                                                                            stream += character;

                                                                        else if (character == '=')
                                                                            // Update > Allow Stream
                                                                            allowStream = !0
                                                                    }

                                                                    // Return
                                                                    return stream
                                                                }

                                                            /* Loop
                                                                    Index Properties.
                                                            */
                                                            while (iterator) {
                                                                // Initialization > (Property, Name, Value)
                                                                var property = properties[iterator -= 1],
                                                                    name = getPropertyName(property),
                                                                    value = getPropertyValue(property);

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (name == 'height') {
                                                                    // Update > Properties
                                                                    properties[iterator] = name + '=' + (function(leadingWhitespaceLength) {
                                                                        // Initialization > Stream
                                                                        var stream = '';

                                                                        /* Loop
                                                                                [while statement]

                                                                            > Update > (Stream, Leading Whitespace Length)
                                                                        */
                                                                        while (leadingWhitespaceLength) {
                                                                            stream += ' ';
                                                                            leadingWhitespaceLength -= 1
                                                                        }

                                                                        // Return
                                                                        return stream + measurement
                                                                    })(value.length - LDKF.trimLeftString(value).length);

                                                                    // Break
                                                                    break
                                                                }
                                                            }

                                                            /* Update > Properties
                                                                    --- NOTE ---
                                                                        #Lapys: This only happens if the `height` property was not indexed earlier.
                                                            */
                                                            iterator || (properties[properties.length] = 'height=' + measurement);

                                                            // Modification > Meta > Content
                                                            LDKF.elementPrototypeSetAttribute(meta, 'content', LDKF.joinArrayToString(properties, '; '))
                                                        })();

                                                        // Return
                                                        return LDKF.isNaN(+measurement) ? measurement : +measurement
                                                    }
                                                });

                                                // Initial Scale
                                                LDKF.objectDefineProperty(viewport, 'initialScale', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function initialScale() {
                                                        // Return
                                                        return getViewportProperty('initial-scale')
                                                    },

                                                    // Set
                                                    set: function initialScale() {
                                                        // Return
                                                        return setViewportProperty('initial-scale', arguments[0])
                                                    }
                                                });

                                                // Maximum Scale
                                                LDKF.objectDefineProperty(viewport, 'maximumScale', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function maximumScale() {
                                                        // Return
                                                        return getViewportProperty('maximum-scale')
                                                    },

                                                    // Set
                                                    set: function maximumScale() {
                                                        // Return
                                                        return setViewportProperty('maximum-scale', arguments[0])
                                                    }
                                                });

                                                // Minimal User-Interface
                                                LDKF.objectDefineProperty(viewport, 'minimalUI', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function minimalUI() {
                                                        // Return
                                                        return hasViewportProperty('minimal-ui')
                                                    },

                                                    // Set
                                                    set: function minimalUI() {
                                                        // Return
                                                        return setViewportProperty('minimal-ui', arguments[0])
                                                    }
                                                });

                                                // Minimum Scale
                                                LDKF.objectDefineProperty(viewport, 'minimumScale', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function minimumScale() {
                                                        // Return
                                                        return getViewportProperty('minimum-scale')
                                                    },

                                                    // Set
                                                    set: function minimumScale() {
                                                        // Return
                                                        return setViewportProperty('minimum-scale', arguments[0])
                                                    }
                                                });

                                                // Target Density Pixels
                                                LDKF.objectDefineProperty(viewport, 'targetDensityDPI', {
                                                    configurable: !0,
                                                    enumerable: !0,
                                                    get: function targetDensityDPI() {
                                                        // Initialization > Meta
                                                        var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport');

                                                        // Return
                                                        return meta ? (function(dpi) { return LDKF.isNaN(+dpi) ? dpi : +dpi })(LDKF.elementPrototypeGetAttribute(meta, 'target-densitydpi')) : null
                                                    },

                                                    // Set
                                                    set: function targetDensityDPI(dpi) {
                                                        // Warning
                                                        LDKF.isSafeNumber(dpi) || LDKF.throwWarning('Density pixels must be measured in numbers');

                                                        // Initialization > Meta
                                                        var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport');

                                                        // (...)
                                                        meta ? LDKF.elementPrototypeSetAttribute(meta, 'target-densitydpi', arguments[0]) : (function() {
                                                            // Update > Meta
                                                            meta = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'meta');

                                                            // Modification > Meta > (Name, Target Density Pixels)
                                                            LDKF.elementPrototypeSetAttribute(meta, 'name', 'viewport');
                                                            LDKF.elementPrototypeSetAttribute(meta, 'target-densitydpi', dpi);

                                                            // Initialization > (Ancestor, Head)
                                                            var ancestor = LDKF.get.ancestorElement(),
                                                                head = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'head');

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (!head) {
                                                                // Update > Head
                                                                head = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'head');

                                                                // Insertion
                                                                ancestor && LDKF.nodePrototypeAppendChild(ancestor, head)
                                                            }

                                                            // Insertion
                                                            ancestor && LDKF.nodePrototypeAppendChild(head, meta)
                                                        })();

                                                        // Return
                                                        return dpi
                                                    }
                                                });

                                                // User Scalable
                                                LDKF.objectDefineProperty(viewport, 'userScalable', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function userScalable() {
                                                        // Return
                                                        return getViewportProperty('user-scalable')
                                                    },

                                                    // Set
                                                    set: function userScalable() {
                                                        // Return
                                                        return setViewportProperty('user-scalable', arguments[0])
                                                    }
                                                });

                                                // Width
                                                LDKF.objectDefineProperty(viewport, 'width', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function width() {
                                                        // Return
                                                        return getViewportProperty('width')
                                                    },

                                                    // Set
                                                    set: function width() {
                                                        // Initialization > Measurement
                                                        var measurement = LDKF.string(arguments[0]);

                                                        // (...)
                                                        setViewportProperty('width', measurement);
                                                        (function msAppWindow() {
                                                            // Initialization > Meta
                                                            var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=msapplication-window');

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (!meta) {
                                                                // Initialization > (Ancestor, Document, Head, Meta)
                                                                var ancestor = LDKF.get.ancestorElement(),
                                                                    document = LDKF.get.windowDocument(),
                                                                    head = LDKF.documentPrototypeQuerySelector(document, 'head'),
                                                                    meta = LDKF.documentPrototypeCreateElement(document, 'meta');

                                                                // Insertion
                                                                head || (ancestor && LDKF.nodePrototypeAppendChild(ancestor, head = LDKF.documentPrototypeCreateElement(document, 'head')));

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (ancestor) {
                                                                    // Modification > Meta > Name
                                                                    LDKF.elementPrototypeSetAttribute(meta, 'name', 'msapplication-window');

                                                                    // Insertion
                                                                    LDKF.nodePrototypeAppendChild(head, meta)
                                                                }
                                                            }

                                                            // Initialization > (Properties, Iterator)
                                                            var properties = LDKF.joinStringToArray(LDKF.elementPrototypeGetAttribute(meta, 'content') || '', ';'),
                                                                iterator = properties.length;

                                                            // Function
                                                                // Get Property Name
                                                                function getPropertyName(property) {
                                                                    // Initialization > (Iterator, Length, Stream)
                                                                    var iterator = 0,
                                                                        length = property.length,
                                                                        stream = '';

                                                                    /* Loop
                                                                            Iterate through Property.
                                                                    */
                                                                    for (iterator; iterator != length; iterator += 1) {
                                                                        // Initialization > Character
                                                                        var character = property[iterator];

                                                                        /* Logic
                                                                                [if:else statement]
                                                                        */
                                                                        if (character == '=' || character == ',')
                                                                            // Break
                                                                            break;

                                                                        else
                                                                            // Update > Stream
                                                                            stream += character
                                                                    }

                                                                    // Return
                                                                    return stream
                                                                }

                                                                // Get Property Value
                                                                function getPropertyValue(property) {
                                                                    // Initialization > ((Allow) Stream, Iterator, Length)
                                                                    var allowStream = !1,
                                                                        iterator = 0,
                                                                        length = property.length,
                                                                        stream = '';

                                                                    /* Loop
                                                                            Iterate through Property.
                                                                    */
                                                                    for (iterator; iterator != length; iterator += 1) {
                                                                        // Initialization > Character
                                                                        var character = property[iterator];

                                                                        /* Logic
                                                                                [if:else if statement]
                                                                        */
                                                                        if (allowStream)
                                                                            // Update > Stream
                                                                            stream += character;

                                                                        else if (character == '=')
                                                                            // Update > Allow Stream
                                                                            allowStream = !0
                                                                    }

                                                                    // Return
                                                                    return stream
                                                                }

                                                            /* Loop
                                                                    Index Properties.
                                                            */
                                                            while (iterator) {
                                                                // Initialization > (Property, Name, Value)
                                                                var property = properties[iterator -= 1],
                                                                    name = getPropertyName(property),
                                                                    value = getPropertyValue(property);

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (name == 'width') {
                                                                    // Update > Properties
                                                                    properties[iterator] = name + '=' + (function(leadingWhitespaceLength) {
                                                                        // Initialization > Stream
                                                                        var stream = '';

                                                                        /* Loop
                                                                                [while statement]

                                                                            > Update > (Stream, Leading Whitespace Length)
                                                                        */
                                                                        while (leadingWhitespaceLength) {
                                                                            stream += ' ';
                                                                            leadingWhitespaceLength -= 1
                                                                        }

                                                                        // Return
                                                                        return stream + measurement
                                                                    })(value.length - LDKF.trimLeftString(value).length);

                                                                    // Break
                                                                    break
                                                                }
                                                            }

                                                            /* Update > Properties
                                                                    --- NOTE ---
                                                                        #Lapys: This only happens if the `width` property was not indexed earlier.
                                                            */
                                                            iterator || (properties[properties.length] = 'width=' + measurement);

                                                            // Modification > Meta > Content
                                                            LDKF.elementPrototypeSetAttribute(meta, 'content', LDKF.joinArrayToString(properties, '; '))
                                                        })();

                                                        // Return
                                                        return LDKF.isNaN(+measurement) ? measurement : +measurement
                                                    }
                                                });

                                            // Return
                                            return viewport
                                        })()
                                    };

                                // Modification > Application
                                    // Abstract
                                    LDKF.objectDefineProperty(app, 'abstract', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function abstract() {
                                            // Return
                                            return getMetaElementContent('meta[name=abstract')
                                        },

                                        // Set
                                        set: function abstract() {
                                            // Return
                                            return setMetaElementContent('meta[name=abstract', {content: arguments[0], name: 'abstract'}, ['content'])
                                        }
                                    });

                                    // Application
                                    LDKF.objectDefineProperty(app, 'app', {
                                        // Get
                                        get: function app() { return application }
                                    });

                                    // Author
                                    LDKF.objectDefineProperty(app, 'author', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function author() {
                                            // Return
                                            return getMetaElementContent('meta[name=author')
                                        },

                                        // Set
                                        set: function author() {
                                            // Return
                                            return setMetaElementContent('meta[name=author', {content: arguments[0], name: 'author'}, ['content'])
                                        }
                                    });

                                    // Cache Control
                                    LDKF.objectDefineProperty(app, 'cacheControl', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function cacheControl() {
                                            // Return
                                            return getMetaElementContent('meta[name=cache-control')
                                        },

                                        // Set
                                        set: function cacheControl() {
                                            // Return
                                            return setMetaElementContent('meta[name=cache-control', {content: arguments[0], name: 'cache-control'}, ['content'])
                                        }
                                    });

                                    // Category
                                    LDKF.objectDefineProperty(app, 'category', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function category() {
                                            // Return
                                            return getMetaElementContent('meta[name=category')
                                        },

                                        // Set
                                        set: function category() {
                                            // Return
                                            return setMetaElementContent('meta[name=category', {content: arguments[0], name: 'category'}, ['content'])
                                        }
                                    });

                                    // Character-Set Encoding
                                    LDKF.objectDefineProperty(app, 'charset', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function charset() {
                                            // Return
                                            return getMetaElementContent('meta[charset', 'charset')
                                        },

                                        // Set
                                        set: function charset() {
                                            // Return
                                            return setMetaElementContent('meta[charset', {charset: LDKF.string(arguments[0])}, ['charset'])
                                        }
                                    });

                                    // Classification
                                    LDKF.objectDefineProperty(app, 'classification', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function classification() {
                                            // Return
                                            return getMetaElementContent('meta[name=Classification], meta[name=classification]')
                                        },

                                        // Set
                                        set: function classification() {
                                            // Return
                                            return setMetaElementContent('meta[name=Classification], meta[name=classification]', {content: arguments[0], name: 'Classification'}, ['content'])
                                        }
                                    });

                                    /* Color
                                            --- NOTE ---
                                                #Lapys: Set the main color of the application.
                                    */
                                    LDKF.objectDefineProperty(prototype, 'color', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function color() {
                                            // Return
                                            return getMetaElementContent('meta[name=theme-color')
                                        },

                                        // Set
                                        set: function color() {
                                            // Initialization > Hue
                                            var hue = LDKF.string(arguments[0]);

                                            // (...)
                                            setMetaElementContent('meta[name=apple-mobile-web-app-status-bar-style', {content: hue, name: 'apple-mobile-web-app-status-bar-style'}, ['content']);
                                            setMetaElementContent('meta[name=msapplication-navbutton-color', {content: hue, name: 'msapplication-navbutton-color'}, ['content']);
                                            setMetaElementContent('meta[name=theme-color', {content: hue, name: 'theme-color'}, ['content']);

                                            // Return
                                            return hue
                                        }
                                    });

                                    // Connection
                                    LDKF.objectDefineProperty(prototype, 'connection', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function connection() {
                                            // Return
                                            return storage.connection.get.call(LDKF.get.windowNavigator())
                                        }
                                    });

                                    // Cookies
                                    LDKF.objectDefineProperty(prototype, 'cookies', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function cookies() {
                                            // Return
                                            return storage.cookie.get.apply(LDKF.get.windowDocument(), arguments)
                                        },

                                        // Set
                                        set: function cookies() {
                                            // Return
                                            return storage.cookie.set.apply(LDKF.get.windowDocument(), arguments)
                                        }
                                    });

                                    // Copyright
                                    LDKF.objectDefineProperty(app, 'copyright', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function copyright() {
                                            // Return
                                            return getMetaElementContent('meta[name=copyright')
                                        },

                                        // Set
                                        set: function copyright() {
                                            // Return
                                            return setMetaElementContent('meta[name=copyright', {content: arguments[0], name: 'copyright'}, ['content'])
                                        }
                                    });

                                    // Coverage
                                    LDKF.objectDefineProperty(app, 'coverage', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function coverage() {
                                            // Return
                                            return getMetaElementContent('meta[name=coverage')
                                        },

                                        // Set
                                        set: function coverage() {
                                            // Return
                                            return setMetaElementContent('meta[name=coverage', {content: arguments[0], name: 'coverage'}, ['content'])
                                        }
                                    });

                                    /* Custom
                                            --- NOTE ---
                                                #Lapys: Define and remove custom-defined `HTMLMetaElement` (`<meta>`) elements.
                                    */
                                    LDKF.objectDefineProperty(app, 'custom', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Value
                                        value: (function() {
                                            // Initialization > Custom
                                            var custom = new (function Custom() {});

                                            // Modification > Custom
                                                // Remove
                                                LDKF.objectDefineProperty(custom, 'remove', {
                                                    // Value
                                                    value: function remove() {
                                                        // Initialization > Name
                                                        var name = arguments[0];

                                                        // Error
                                                        arguments.length || LDKF.throwError('remove', 'argument', [1, 0]);

                                                        // Initialization > Element
                                                        var element = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), "meta[name='" + name + "'");

                                                        // Logic > Error Handling
                                                        if (element)
                                                            try {
                                                                // Deletion
                                                                LDKF.nodePrototypeRemoveChild(LDKF.get.nodeListPrototypeParentNode(element), element);

                                                                // Return
                                                                return !0
                                                            } catch (error) {}

                                                        // Return
                                                        return !1
                                                    }
                                                });

                                                // Set
                                                LDKF.objectDefineProperty(custom, 'set', {
                                                    // Value
                                                    value: function set() {
                                                        // Initialization > (Content, Name)
                                                        var content = arguments.length > 1 ? arguments[1] : '',
                                                            name = arguments[0];

                                                        // Error
                                                        arguments.length || LDKF.throwError('set', ['argument', 'required'], [1, 2]);

                                                        // Return
                                                        return setMetaElementContent("meta[name='" + LDKF.string(name) + "'", {content: content, name: name}, ['content'])
                                                    }
                                                });

                                            // Return
                                            return custom
                                        })()
                                    });

                                    // Description
                                    LDKF.objectDefineProperty(app, 'description', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function description() {
                                            // Return
                                            return getMetaElementContent('meta[name=description')
                                        },

                                        // Set
                                        set: function description() {
                                            // Return
                                            return setMetaElementContent('meta[name=description', {content: arguments[0], name: 'description'}, ['content'])
                                        }
                                    });

                                    // Designer
                                    LDKF.objectDefineProperty(app, 'designer', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function designer() {
                                            // Return
                                            return getMetaElementContent('meta[name=designer')
                                        },

                                        // Set
                                        set: function designer() {
                                            // Return
                                            return setMetaElementContent('meta[name=designer', {content: arguments[0], name: 'designer'}, ['content'])
                                        }
                                    });

                                    // Device Pixel Ratio
                                    LDKF.objectDefineProperty(prototype, 'dpRatio', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function dpRatio() {
                                            // Return
                                            return storage.devicePixelRatio.get.apply(window, arguments)
                                        },

                                        // Set
                                        set: function dpRatio() {
                                            // Return
                                            return storage.devicePixelRatio.set.apply(window, arguments)
                                        }
                                    });

                                    // Directory
                                    LDKF.objectDefineProperty(app, 'directory', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function directory() {
                                            // Return
                                            return getMetaElementContent('meta[name=directory')
                                        },

                                        // Set
                                        set: function directory() {
                                            // Return
                                            return setMetaElementContent('meta[name=directory', {content: arguments[0], name: 'directory'}, ['content'])
                                        }
                                    });

                                    // Distribution
                                    LDKF.objectDefineProperty(app, 'distribution', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function distribution() {
                                            // Return
                                            return getMetaElementContent('meta[name=distribution')
                                        },

                                        // Set
                                        set: function distribution() {
                                            // Return
                                            return setMetaElementContent('meta[name=distribution', {content: arguments[0], name: 'distribution'}, ['content'])
                                        }
                                    });

                                    // Do Not Track
                                    LDKF.objectDefineProperty(prototype, 'doNotTrack', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function doNotTrack() {
                                            // Return
                                            return storage.doNotTrack.get.apply(LDKF.get.windowNavigator(), arguments)
                                        }
                                    });

                                    // Expires
                                    LDKF.objectDefineProperty(app, 'expires', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function expires() {
                                            // Return
                                            return getMetaElementContent('meta[http-equiv=Expires], meta[http-equiv=expires]')
                                        },

                                        // Set
                                        set: function expires() {
                                            // Return
                                            return setMetaElementContent('meta[http-equiv=Expires], meta[http-equiv=expires]', {content: arguments[0], 'http-equiv': 'Expires'}, ['content'])
                                        }
                                    });

                                    // Height
                                    LDKF.objectDefineProperty(prototype, 'height', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function height() {
                                            // Return
                                            return storage.viewport.height
                                        },

                                        // Set
                                        set: function height() {
                                            // Return
                                            return storage.viewport.height = arguments[0]
                                        }
                                    });

                                    // Identifier URL
                                    LDKF.objectDefineProperty(app, 'identifierURL', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function identifierURL() {
                                            // Return
                                            return getMetaElementContent('meta[name=identifier-URL], meta[name=identifier-url]')
                                        },

                                        // Set
                                        set: function identifierURL() {
                                            // Return
                                            return setMetaElementContent('meta[name=identifier-URL], meta[name=identifier-url]', {content: arguments[0], name: 'identifier-URL'}, ['content'])
                                        }
                                    });

                                    // Keywords
                                    LDKF.objectDefineProperty(app, 'keywords', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function keywords() {
                                            // Return
                                            return getMetaElementContent('meta[name=keywords')
                                        },

                                        // Set
                                        set: function keywords() {
                                            // Return
                                            return setMetaElementContent('meta[name=keywords', {content: arguments[0], name: 'keywords'}, ['content'])
                                        }
                                    });

                                    // Language
                                    LDKF.objectDefineProperty(app, 'lang', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function language() {
                                            // Return
                                            return getMetaElementContent('meta[name=language')
                                        },

                                        // Set
                                        set: function language() {
                                            // Return
                                            return setMetaElementContent('meta[name=language', {content: arguments[0], name: 'language'}, ['content'])
                                        }
                                    });

                                    // Languages
                                    LDKF.objectDefineProperty(prototype, 'langs', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function languages() {
                                            // Return
                                            return LDKF.customArray('ApplicationLanguages', storage.languages.get.apply(LDKF.get.windowNavigator(), arguments))
                                        }
                                    });

                                    /* Name
                                            --- NOTE ---
                                                #Lapys: The name of the application.
                                    */
                                    LDKF.objectDefineProperty(prototype, 'name', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function name() {
                                            // Return
                                            return LDKF.get.windowName()
                                        },

                                        // Set
                                        set: function name() {
                                            // Initialization > (Document, Name)
                                            var document = LDKF.get.windowDocument(),
                                                name = LDKF.string(arguments[0]);

                                            // Modification
                                                // Document > Title
                                                LDKF.set.documentPrototypeTitle(document, name);

                                                // Window > Name
                                                LDKF.set.windowName(window, name);

                                            // (...)
                                            setMetaElementContent('meta[name=application-name', {content: name, name: 'application-name'}, ['content']);

                                            // Return
                                            return LDKF.get.windowName()
                                        }
                                    });

                                    // Navigator
                                    LDKF.objectDefineProperty(prototype, 'nav', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function navigator() {
                                            // Return
                                            return LDKF.get.windowNavigator()
                                        }
                                    });

                                    // Online
                                    LDKF.objectDefineProperty(prototype, 'online', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function online() {
                                            // Return
                                            return storage.online.get.call(LDKF.get.windowNavigator())
                                        }
                                    });

                                    /* Open Graph */
                                    LDKF.objectDefineProperty(prototype, 'openGraph', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Value
                                        value: (function() {
                                            // Initialization > Open Graph
                                            var openGraph = new (function OpenGraph() {});

                                            // Modification > Open Graph
                                                // Audio
                                                LDKF.objectDefineProperty(openGraph, 'audio', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function audio() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:audio']")
                                                    },

                                                    // Set
                                                    set: function audio() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:audio']", {content: arguments[0], name: 'og:audio'}, ['content'])
                                                    }
                                                });
                                                    // Album
                                                    LDKF.objectDefineProperty(openGraph, 'audioAlbum', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function audioAlbum() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:audio:album']")
                                                        },

                                                        // Set
                                                        set: function audioAlbum() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:audio:album']", {content: arguments[0], name: 'og:audio:album'}, ['content'])
                                                        }
                                                    });

                                                    // Artist
                                                    LDKF.objectDefineProperty(openGraph, 'audioArtist', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function audioArtist() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:audio:artist']")
                                                        },

                                                        // Set
                                                        set: function audioArtist() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:audio:artist']", {content: arguments[0], name: 'og:audio:artist'}, ['content'])
                                                        }
                                                    });

                                                    // Title
                                                    LDKF.objectDefineProperty(openGraph, 'audioTitle', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function audioTitle() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:audio:title']")
                                                        },

                                                        // Set
                                                        set: function audioTitle() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:audio:title']", {content: arguments[0], name: 'og:audio:title'}, ['content'])
                                                        }
                                                    });

                                                    // Type
                                                    LDKF.objectDefineProperty(openGraph, 'audioType', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function audioType() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:audio:type']")
                                                        },

                                                        // Set
                                                        set: function audioType() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:audio:type']", {content: arguments[0], name: 'og:audio:type'}, ['content'])
                                                        }
                                                    });

                                                // Country Name
                                                LDKF.objectDefineProperty(openGraph, 'countryName', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function countryName() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:country-name']")
                                                    },

                                                    // Set
                                                    set: function countryName() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:country-name']", {content: arguments[0], name: 'og:country-name'}, ['content'])
                                                    }
                                                });

                                                // Description
                                                LDKF.objectDefineProperty(openGraph, 'description', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function description() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:description']")
                                                    },

                                                    // Set
                                                    set: function description() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:description']", {content: arguments[0], name: 'og:description'}, ['content'])
                                                    }
                                                });

                                                // Email
                                                LDKF.objectDefineProperty(openGraph, 'email', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function email() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:email']")
                                                    },

                                                    // Set
                                                    set: function email() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:email']", {content: arguments[0], name: 'og:email'}, ['content'])
                                                    }
                                                });

                                                // Fax Number
                                                LDKF.objectDefineProperty(openGraph, 'faxNumber', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function faxNumber() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:fax_number']")
                                                    },

                                                    // Set
                                                    set: function faxNumber() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:fax_number']", {content: arguments[0], name: 'og:fax_number'}, ['content'])
                                                    }
                                                });

                                                // Image
                                                LDKF.objectDefineProperty(openGraph, 'image', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function image() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:image']")
                                                    },

                                                    // Set
                                                    set: function image() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:image']", {content: arguments[0], name: 'og:image'}, ['content'])
                                                    }
                                                });

                                                // Latitude
                                                LDKF.objectDefineProperty(openGraph, 'latitude', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function latitude() {
                                                        // Initialization > Data
                                                        var data = getMetaElementContent("meta[name='og:latitude']");

                                                        // Return
                                                        return LDKF.isNaN(+data) ? data : +data
                                                    },

                                                    // Set
                                                    set: function latitude() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:latitude']", {content: arguments[0], name: 'og:latitude'}, ['content'])
                                                    }
                                                });

                                                // Locality
                                                LDKF.objectDefineProperty(openGraph, 'locality', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function locality() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:locality']")
                                                    },

                                                    // Set
                                                    set: function locality() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:locality']", {content: arguments[0], name: 'og:locality'}, ['content'])
                                                    }
                                                });

                                                // Longitude
                                                LDKF.objectDefineProperty(openGraph, 'longitude', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function longitude() {
                                                        // Initialization > Data
                                                        var data = getMetaElementContent("meta[name='og:longitude']");

                                                        // Return
                                                        return LDKF.isNaN(+data) ? data : +data
                                                    },

                                                    // Set
                                                    set: function longitude() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:longitude']", {content: arguments[0], name: 'og:longitude'}, ['content'])
                                                    }
                                                });

                                                // Page ID
                                                LDKF.objectDefineProperty(openGraph, 'pageID', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function pageID() {
                                                        // Initialization > Data
                                                        var data = getMetaElementContent("meta[name='fb:page_id']");

                                                        // Return
                                                        return LDKF.isNaN(+data) ? data : +data
                                                    },

                                                    // Set
                                                    set: function pageID() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='fb:page_id']", {content: arguments[0], name: 'fb:page_id'}, ['content'])
                                                    }
                                                });

                                                // Phone Number
                                                LDKF.objectDefineProperty(openGraph, 'phoneNumber', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function phoneNumber() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:phone_number']")
                                                    },

                                                    // Set
                                                    set: function phoneNumber() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:phone_number']", {content: arguments[0], name: 'og:phone_number'}, ['content'])
                                                    }
                                                });

                                                // Points
                                                LDKF.objectDefineProperty(openGraph, 'points', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function points() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:points']")
                                                    },

                                                    // Set
                                                    set: function points() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:points']", {content: arguments[0], name: 'og:points'}, ['content'])
                                                    }
                                                });

                                                // Postal Code
                                                LDKF.objectDefineProperty(openGraph, 'postalCode', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function postalCode() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:postal-code']")
                                                    },

                                                    // Set
                                                    set: function postalCode() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:postal-code']", {content: arguments[0], name: 'og:postal-code'}, ['content'])
                                                    }
                                                });

                                                // Region
                                                LDKF.objectDefineProperty(openGraph, 'region', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function region() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:region']")
                                                    },

                                                    // Set
                                                    set: function region() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:region']", {content: arguments[0], name: 'og:region'}, ['content'])
                                                    }
                                                });

                                                // Site Name
                                                LDKF.objectDefineProperty(openGraph, 'siteName', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function siteName() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:site_name']")
                                                    },

                                                    // Set
                                                    set: function siteName() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:site_name']", {content: arguments[0], name: 'og:site_name'}, ['content'])
                                                    }
                                                });

                                                // Street Address
                                                LDKF.objectDefineProperty(openGraph, 'streetAddress', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function streetAddress() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:street-address']")
                                                    },

                                                    // Set
                                                    set: function streetAddress() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:street-address']", {content: arguments[0], name: 'og:street-address'}, ['content'])
                                                    }
                                                });

                                                // Title
                                                LDKF.objectDefineProperty(openGraph, 'title', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function title() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:title']")
                                                    },

                                                    // Set
                                                    set: function title() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:title']", {content: arguments[0], name: 'og:title'}, ['content'])
                                                    }
                                                });

                                                // Type
                                                LDKF.objectDefineProperty(openGraph, 'type', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function type() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:type']")
                                                    },

                                                    // Set
                                                    set: function type() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:type']", {content: arguments[0], name: 'og:type'}, ['content'])
                                                    }
                                                });

                                                // Uniform Resource Locator
                                                LDKF.objectDefineProperty(openGraph, 'url', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function url() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:url']")
                                                    },

                                                    // Set
                                                    set: function url() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:url']", {content: arguments[0], name: 'og:url'}, ['content'])
                                                    }
                                                });

                                                // Video
                                                LDKF.objectDefineProperty(openGraph, 'video', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function video() {
                                                        // Return
                                                        return getMetaElementContent("meta[name='og:video']")
                                                    },

                                                    // Set
                                                    set: function video() {
                                                        // Return
                                                        return setMetaElementContent("meta[name='og:video']", {content: arguments[0], name: 'og:video'}, ['content'])
                                                    }
                                                });
                                                    // Height
                                                    LDKF.objectDefineProperty(openGraph, 'videoHeight', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function videoHeight() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:video:height']")
                                                        },

                                                        // Set
                                                        set: function videoHeight() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:video:height']", {content: arguments[0], name: 'og:video:height'}, ['content'])
                                                        }
                                                    });

                                                    // Type
                                                    LDKF.objectDefineProperty(openGraph, 'videoType', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function videoType() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:video:type']")
                                                        },

                                                        // Set
                                                        set: function videoType() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:video:type']", {content: arguments[0], name: 'og:video:type'}, ['content'])
                                                        }
                                                    });

                                                    // Width
                                                    LDKF.objectDefineProperty(openGraph, 'videoWidth', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function videoWidth() {
                                                            // Return
                                                            return getMetaElementContent("meta[name='og:video:width']")
                                                        },

                                                        // Set
                                                        set: function videoWidth() {
                                                            // Return
                                                            return setMetaElementContent("meta[name='og:video:width']", {content: arguments[0], name: 'og:video:width'}, ['content'])
                                                        }
                                                    });

                                            // Return
                                            return openGraph
                                        })()
                                    });

                                    // Owner
                                    LDKF.objectDefineProperty(app, 'owner', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function owner() {
                                            // Return
                                            return getMetaElementContent('meta[name=owner')
                                        },

                                        // Set
                                        set: function owner() {
                                            // Return
                                            return setMetaElementContent('meta[name=owner', {content: arguments[0], name: 'owner'}, ['content'])
                                        }
                                    });

                                    // Platform
                                    LDKF.objectDefineProperty(prototype, 'platform', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function platform() {
                                            // Return
                                            return storage.platform.get.call(LDKF.get.windowNavigator())
                                        }
                                    });

                                    // Plugins
                                    LDKF.objectDefineProperty(prototype, 'plugins', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function plugins() {
                                            // Return
                                            return storage.plugins.get.call(LDKF.get.windowNavigator())
                                        }
                                    });

                                    // Pragma
                                    LDKF.objectDefineProperty(app, 'pragma', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function pragma() {
                                            // Return
                                            return getMetaElementContent('meta[http-equiv=Pragma], meta[http-equiv=pragma]')
                                        },

                                        // Set
                                        set: function pragma() {
                                            // Return
                                            return setMetaElementContent('meta[http-equiv=Pragma], meta[http-equiv=pragma]', {content: arguments[0], 'http-equiv': 'Pragma'}, ['content'])
                                        }
                                    });

                                    // Rating
                                    LDKF.objectDefineProperty(app, 'rating', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function rating() {
                                            // Return
                                            return getMetaElementContent('meta[name=rating')
                                        },

                                        // Set
                                        set: function rating() {
                                            // Return
                                            return setMetaElementContent('meta[name=rating', {content: arguments[0], name: 'rating'}, ['content'])
                                        }
                                    });

                                    // Reply To
                                    LDKF.objectDefineProperty(app, 'replyTo', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function replyTo() {
                                            // Return
                                            return getMetaElementContent('meta[name=reply-to')
                                        },

                                        // Set
                                        set: function replyTo() {
                                            // Return
                                            return setMetaElementContent('meta[name=reply-to', {content: arguments[0], name: 'reply-to'}, ['content'])
                                        }
                                    });

                                    // Revised
                                    LDKF.objectDefineProperty(app, 'revised', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function revised() {
                                            // Return
                                            return getMetaElementContent('meta[name=revised')
                                        },

                                        // Set
                                        set: function revised() {
                                            // Return
                                            return setMetaElementContent('meta[name=revised', {content: arguments[0], name: 'revised'}, ['content'])
                                        }
                                    });

                                    // Revisit After
                                    LDKF.objectDefineProperty(app, 'revisitAfter', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function revisitAfter() {
                                            // Return
                                            return getMetaElementContent('meta[name=revisit-after')
                                        },

                                        // Set
                                        set: function revisitAfter() {
                                            // Return
                                            return setMetaElementContent('meta[name=revisit-after', {content: arguments[0], name: 'revisit-after'}, ['content'])
                                        }
                                    });

                                    // Robots
                                    LDKF.objectDefineProperty(app, 'robots', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function robots() {
                                            // Return
                                            return getMetaElementContent('meta[name=robots')
                                        },

                                        // Set
                                        set: function robots() {
                                            // Return
                                            return setMetaElementContent('meta[name=robots', {content: arguments[0], name: 'robots'}, ['content'])
                                        }
                                    });

                                    /* Services */
                                    LDKF.objectDefineProperty(app, 'services', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Value
                                        value: (function() {
                                            // Initialization > Services
                                            var services = new (function Services() {});

                                            /* Function > Application Service
                                                    --- NOTE ---
                                                        #Lapys: Define the constructor for each Application Service.
                                            */
                                            function ApplicationService() {};

                                            // Modification > Services
                                                // Apple
                                                LDKF.objectDefineProperty(services, 'apple', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Apple
                                                        var apple = new ApplicationService;

                                                        // Modification > Apple
                                                            // Format Detection
                                                            LDKF.objectDefineProperty(apple, 'formatDetection', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function formatDetection() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=format-detection')
                                                                },

                                                                // Set
                                                                set: function formatDetection() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=format-detection', {content: arguments[0], name: 'format-detection'}, ['content'])
                                                                }
                                                            });

                                                            // Mobile Web App Capable
                                                            LDKF.objectDefineProperty(apple, 'mobileWebAppCapable', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function mobileWebAppCapable() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=apple-mobile-web-app-capable')
                                                                },

                                                                // Set
                                                                set: function mobileWebAppCapable() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=apple-mobile-web-app-capable', {content: arguments[0] ? 'yes' : 'no', name: 'apple-mobile-web-app-capable'}, ['content'])
                                                                }
                                                            });

                                                            /* Mobile Web App Status Bar Style
                                                                    --- NOTE ---
                                                                        #Lapys: Believe it or not, this is just asking for a color... -_-
                                                            */
                                                            LDKF.objectDefineProperty(apple, 'mobileWebAppStatusBarStyle', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function mobileWebAppStatusBarStyle() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=apple-mobile-web-app-status-bar-style')
                                                                },

                                                                // Set
                                                                set: function mobileWebAppStatusBarStyle() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=apple-mobile-web-app-status-bar-style', {content: arguments[0], name: 'apple-mobile-web-app-status-bar-style'}, ['content'])
                                                                }
                                                            });

                                                            // Touch Fullscreen
                                                            LDKF.objectDefineProperty(apple, 'touchFullscreen', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function touchFullscreen() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=touch-fullscreen')
                                                                },

                                                                // Set
                                                                set: function touchFullscreen() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=touch-fullscreen', {content: arguments[0] ? 'yes' : 'no', name: 'touch-fullscreen'}, ['content'])
                                                                }
                                                            });

                                                            // Viewport
                                                            LDKF.objectDefineProperty(apple, 'viewport', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function viewport() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=viewport')
                                                                },

                                                                // Set
                                                                set: function viewport() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=viewport', {content: arguments[0], name: 'viewport'}, ['content'])
                                                                }
                                                            });

                                                        // Return
                                                        return apple
                                                    })()
                                                });

                                                // Blog Catalog
                                                LDKF.objectDefineProperty(services, 'blogCatalog', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Blog Catalog
                                                        var blogCatalog = new ApplicationService;

                                                        // Modification > Blog Catalog
                                                            // Blog Catalog
                                                            LDKF.objectDefineProperty(blogCatalog, 'blogCatalog', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function blogCatalog() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=blog-catalog')
                                                                },

                                                                // Set
                                                                set: function blogCatalog() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=blog-catalog', {name: 'blog-catalog'})
                                                                }
                                                            });

                                                        // Return
                                                        return blogCatalog
                                                    })()
                                                });

                                                // Claim ID
                                                LDKF.objectDefineProperty(services, 'claimID', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Claim ID
                                                        var claimID = new ApplicationService;

                                                        // Modification > Claim ID
                                                            // Micro ID
                                                            LDKF.objectDefineProperty(claimID, 'microID', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function microID() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=microid')
                                                                },

                                                                // Set
                                                                set: function microID() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=microid', {content: arguments[0], name: 'microid'}, ['content'])
                                                                }
                                                            });

                                                        // Return
                                                        return claimID
                                                    })()
                                                });

                                                // Internet Explorer
                                                LDKF.objectDefineProperty(services, 'ie', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Internet Explorer
                                                        var internetExplorer = new ApplicationService;

                                                        // Modification > Internet Explorer
                                                            // Application Name
                                                            LDKF.objectDefineProperty(internetExplorer, 'appName', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function appName() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=application-name')
                                                                },

                                                                // Set
                                                                set: function appName() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=application-name', {content: arguments[0], name: 'application-name'}, ['content'])
                                                                }
                                                            });

                                                            // Microsoft Application Navigation Button Color
                                                            LDKF.objectDefineProperty(internetExplorer, 'msAppNavButtonColor', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function msAppNavButtonColor() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=msapplication-navbutton-color')
                                                                },

                                                                // Set
                                                                set: function msAppNavButtonColor() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=msapplication-navbutton-color', {content: arguments[0], name: 'msapplication-navbutton-color'}, ['content'])
                                                                }
                                                            });

                                                            // Microsoft Application Start URL
                                                            LDKF.objectDefineProperty(internetExplorer, 'msAppStartURL', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function msAppStartURL() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=msapplication-starturl')
                                                                },

                                                                // Set
                                                                set: function msAppStartURL() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=msapplication-starturl', {content: arguments[0], name: 'msapplication-starturl'}, ['content'])
                                                                }
                                                            });

                                                            // Microsoft Application Task
                                                            LDKF.objectDefineProperty(internetExplorer, 'msAppTask', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function msAppTask() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=msapplication-task')
                                                                },

                                                                // Set
                                                                set: function msAppTask() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=msapplication-task', {content: arguments[0], name: 'msapplication-task'}, ['content'])
                                                                }
                                                            });

                                                            // Microsoft Application Tooltip
                                                            LDKF.objectDefineProperty(internetExplorer, 'msAppTooltip', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function msAppTooltip() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=msapplication-tooltip')
                                                                },

                                                                // Set
                                                                set: function msAppTooltip() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=msapplication-tooltip', {content: arguments[0], name: 'msapplication-tooltip'}, ['content'])
                                                                }
                                                            });

                                                            // Microsoft Application Window
                                                            LDKF.objectDefineProperty(internetExplorer, 'msAppWindow', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function msAppWindow() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=msapplication-window')
                                                                },

                                                                // Set
                                                                set: function msAppWindow() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=msapplication-window', {content: arguments[0], name: 'msapplication-window'}, ['content'])
                                                                }
                                                            });

                                                            // Microsoft Smart Tags Prevent Parsing
                                                            LDKF.objectDefineProperty(internetExplorer, 'msSmartTagsPreventParsing', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function msSmartTagsPreventParsing() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=mssmarttagspreventparsing')
                                                                },

                                                                // Set
                                                                set: function msSmartTagsPreventParsing() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=mssmarttagspreventparsing', {content: arguments[0] ? 'true' : 'false', name: 'mssmarttagspreventparsing'}, ['content'])
                                                                }
                                                            });

                                                            // Page Enter
                                                            LDKF.objectDefineProperty(internetExplorer, 'pageEnter', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function pageEnter() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[http-equiv=Page-Enter')
                                                                },

                                                                // Set
                                                                set: function pageEnter() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[http-equiv=Page-Enter', {content: arguments[0], 'http-equiv': 'Page-Enter'}, ['content'])
                                                                }
                                                            });

                                                            // Page Exit
                                                            LDKF.objectDefineProperty(internetExplorer, 'pageExit', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function pageExit() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[http-equiv=Page-Exit')
                                                                },

                                                                // Set
                                                                set: function pageExit() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[http-equiv=Page-Exit', {content: arguments[0], 'http-equiv': 'Page-Exit'}, ['content'])
                                                                }
                                                            });

                                                            // X-UA Compatible
                                                            LDKF.objectDefineProperty(internetExplorer, 'xUACompatible', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function xUACompatible() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[http-equiv=X-UA-Compatible')
                                                                },

                                                                // Set
                                                                set: function xUACompatible() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[http-equiv=X-UA-Compatible', {content: arguments[0], 'http-equiv': 'X-UA-Compatible'}, ['content'])
                                                                }
                                                            });

                                                        // Return
                                                        return internetExplorer
                                                    })()
                                                });

                                                // Rails
                                                LDKF.objectDefineProperty(services, 'rails', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Claim ID
                                                        var rails = new ApplicationService;

                                                        // Modification > Claim ID
                                                            // CSRF Parameter
                                                            LDKF.objectDefineProperty(rails, 'csrfParam', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function CSRFParameter() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=csrf-parameter')
                                                                },

                                                                // Set
                                                                set: function CSRFParameter() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=csrf-parameter', {content: arguments[0], name: 'csrf-parameter'}, ['content'])
                                                                }
                                                            });

                                                            // CSRF Token
                                                            LDKF.objectDefineProperty(rails, 'csrfToken', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function CSRFToken() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=csrf-token')
                                                                },

                                                                // Set
                                                                set: function CSRFToken() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=csrf-token', {content: arguments[0], name: 'csrf-token'}, ['content'])
                                                                }
                                                            });

                                                        // Return
                                                        return rails
                                                    })()
                                                });

                                                // Tweet Meme
                                                LDKF.objectDefineProperty(services, 'tweetMeme', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Claim ID
                                                        var tweetMeme = new ApplicationService;

                                                        // Modification > Claim ID
                                                            // Micro ID
                                                            LDKF.objectDefineProperty(tweetMeme, 'title', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Get
                                                                get: function title() {
                                                                    // Return
                                                                    return getMetaElementContent('meta[name=tweetmeme-title')
                                                                },

                                                                // Set
                                                                set: function title() {
                                                                    // Return
                                                                    return setMetaElementContent('meta[name=tweetmeme-title', {content: arguments[0], name: 'tweetmeme-title'}, ['content'])
                                                                }
                                                            });

                                                        // Return
                                                        return tweetMeme
                                                    })()
                                                });

                                            // Return
                                            return services
                                        })()
                                    });

                                    // Summary
                                    LDKF.objectDefineProperty(app, 'summary', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function summary() {
                                            // Return
                                            return getMetaElementContent('meta[name=summary')
                                        },

                                        // Set
                                        set: function summary() {
                                            // Return
                                            return setMetaElementContent('meta[name=summary', {content: arguments[0], name: 'summary'}, ['content'])
                                        }
                                    });

                                    // Theme Color
                                    LDKF.objectDefineProperty(app, 'themeColor', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function themeColor() {
                                            // Return
                                            return getMetaElementContent('meta[name=theme-color')
                                        },

                                        // Set
                                        set: function themeColor() {
                                            // Return
                                            return setMetaElementContent('meta[name=theme-color', {content: arguments[0], name: 'theme-color'}, ['content'])
                                        }
                                    });

                                    // Topic
                                    LDKF.objectDefineProperty(app, 'topic', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function topic() {
                                            // Return
                                            return getMetaElementContent('meta[name=topic')
                                        },

                                        // Set
                                        set: function topic() {
                                            // Return
                                            return setMetaElementContent('meta[name=topic', {content: arguments[0], name: 'topic'}, ['content'])
                                        }
                                    });

                                    // Uniform Resource Locator
                                    LDKF.objectDefineProperty(app, 'url', {
                                        // Configurable
                                        configurable: !0,

                                        // Get
                                        get: function url() {
                                            // Return
                                            return getMetaElementContent('meta[name=url')
                                        },

                                        // Set
                                        set: function url() {
                                            // Return
                                            return setMetaElementContent('meta[name=url', {content: arguments[0], name: 'url'}, ['content'])
                                        }
                                    });

                                    // User Agent
                                    LDKF.objectDefineProperty(prototype, 'userAgent', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function userAgent() {
                                            // Return
                                            return storage.userAgent.get.call(LDKF.get.windowNavigator())
                                        }
                                    });

                                    // Vendor
                                    LDKF.objectDefineProperty(prototype, 'vendor', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function vendor() {
                                            // Return
                                            return storage.vendor.get.call(LDKF.get.windowNavigator())
                                        }
                                    });

                                    /* Viewport */
                                    LDKF.objectDefineProperty(prototype, 'viewport', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function viewport() {
                                            // Return
                                            return storage.viewport
                                        },

                                        // Set
                                        set: function viewport(responsiveness) {
                                            // Initialization > Meta
                                            var meta = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport');

                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (responsiveness) {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (!meta) {
                                                    // Update > Meta
                                                    meta = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'meta');

                                                    // Initialization > (Ancestor, Head)
                                                    var ancestor = LDKF.get.ancestorElement(),
                                                        head = LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'head');

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (!head) {
                                                        // Update > Head
                                                        head = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'head');

                                                        // Insertion
                                                        ancestor && LDKF.nodePrototypeAppendChild(ancestor, head)
                                                    }

                                                    /* Logic
                                                            [if:else statement]
                                                    */
                                                    if (ancestor)
                                                        // Insertion
                                                        LDKF.nodePrototypeAppendChild(head, meta);

                                                    else
                                                        // Return
                                                        return !1
                                                }

                                                /* Modification > Meta
                                                        --- NOTE ---
                                                            #Lapys: Default values by the library.
                                                */
                                                    // Content
                                                    LDKF.elementPrototypeSetAttribute(meta, 'content',
                                                        // {Height}
                                                        'height=' + 'device-height' + ', ' +

                                                        // {Initial Scale}
                                                        'initial-scale=' + '1.0' + ', ' +

                                                        // {Maximum Scale}
                                                        'maximum-scale=' + '2.0' + ', ' +

                                                        // {Minimal User-Interface}
                                                        'minimal-ui' + ', ' +

                                                        // {Minimum Scale}
                                                        'minimum-scale=' + '0.1' + ', ' +

                                                        // {User Scalable}
                                                        'user-scalable=' + 'yes' + ', ' +

                                                        // {Width}
                                                        'width=' + 'device-width'
                                                    );

                                                    // Name
                                                    LDKF.elementPrototypeSetAttribute(meta, 'name', 'viewport');

                                                    // Target Density Pixels
                                                    LDKF.elementPrototypeSetAttribute(meta, 'target-densitydpi', '96');

                                                // Return
                                                return !0
                                            }

                                            else if (meta) {
                                                // Modification > Meta > (Content, Target Density Pixels)
                                                LDKF.elementPrototypeRemoveAttribute(meta, 'content');
                                                LDKF.elementPrototypeRemoveAttribute(meta, 'target-densitydpi');

                                                // Return
                                                return !0
                                            }

                                            // Return
                                            return !1
                                        }
                                    });

                                    // Viewport Element
                                    LDKF.objectDefineProperty(prototype, 'viewportElement', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function viewportElement() {
                                            // Return
                                            return LDKF.documentPrototypeQuerySelector(LDKF.get.windowDocument(), 'meta[name=viewport') || null
                                        }
                                    });

                                    // Width
                                    LDKF.objectDefineProperty(prototype, 'width', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function width() {
                                            // Return
                                            return storage.viewport.width
                                        },

                                        // Set
                                        set: function width() {
                                            // Return
                                            return storage.viewport.width = arguments[0]
                                        }
                                    });

                                    // X-UA Compatible
                                    LDKF.objectDefineProperty(prototype, 'xUACompatible', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function xUACompatible() {
                                            // Return
                                            return getMetaElementContent('meta[http-equiv=X-UA-Compatible')
                                        },

                                        // Set
                                        set: function xUACompatible() {
                                            // Return
                                            return setMetaElementContent('meta[http-equiv=X-UA-Compatible', {content: arguments[0], 'http-equiv': 'X-UA-Compatible'}, ['content'])
                                        }
                                    });

                                // Return
                                return app
                            })());

                            /* Array
                                    --- NOTE ---
                                        #Lapys: Creates an array from a given set of arguments while
                                            flattening any array-like object and adding it to the returned array.
                            */
                            window.array = LDKF.windowArray = function array(arg) {
                                // Initialization > (Array, Iterator, Length)
                                var array = [],
                                    iterator = 0,
                                    length = arguments.length;

                                /* Loop
                                        Index Arguments.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > Argument
                                    var argument = arguments[iterator];

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isArrayLike(argument)) {
                                        // Initialization > Array-Like (Iterator, Length)
                                        var arrayLikeIterator = 0, arrayLikeLength;

                                        /* Logic
                                                [if:else if statement]

                                            > Update > Array-Like Length
                                        */
                                        if (LDKF.isArray(argument)) arrayLikeLength = argument.length;
                                        else if (LDKF.isHTMLAllCollection(argument)) arrayLikeLength = LDKF.get.htmlAllCollectionPrototypeLength(argument);
                                        else if (LDKF.isHTMLCollection(argument)) arrayLikeLength = LDKF.get.htmlCollectionPrototypeLength(argument);
                                        else if (LDKF.isNodeList(argument)) arrayLikeLength = LDKF.get.nodeListPrototypeLength(argument);

                                        /* Loop
                                                [for statement]

                                            > Update > Array
                                        */
                                        for (arrayLikeIterator; arrayLikeIterator != arrayLikeLength; arrayLikeIterator += 1)
                                            array[array.length] = argument[arrayLikeIterator]
                                    }

                                    else
                                        // Update > Array
                                        array[array.length] = argument
                                }

                                // Return
                                return array
                            };

                            // Boolean
                            window.bool = function bool(arg) {
                                // Initialization > (Iterator, Length, (False, Truth) Count)
                                var iterator = 0,
                                    length = arguments.length,
                                    falseCount = 0,
                                    truthCount = 0;

                                /* Loop
                                        Index Arguments.

                                    > Update > (Truth, False) Count
                                */
                                for (iterator; iterator != length; iterator += 1)
                                    arguments[iterator] ? truthCount += 1 : falseCount += 1;

                                // Return
                                return truthCount > falseCount
                            };

                            // Browser
                            LDKF.objectDefineProperty(window, 'browser', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: (function() {
                                    // Initialization > Browser
                                    var browser = new (function Browser() {});

                                    // ((LapysJS Development Kit > Functions) > Iterate Object) > ((LapysJS Development Kit > Random) > Browser)
                                    LDKF.iterateObject(LDKR.browser, function(key, value, description) {
                                        // Modification > Browser > [Key]
                                        LDKF.objectDefineProperty(browser, key, description)
                                    }, function(key, value, description, iteratorObject) { return this === iteratorObject }, !0);

                                    // Return
                                    return browser
                                })()
                            });

                            /* Cancel On DOM Element Added
                                    --- NOTE ---
                                        #Lapys: Returns `true` if the method successfully removed `EventObserver` from
                                            their event-runtime queue, otherwise returns `false`
                            */
                            LDKF.objectDefineProperty(window, 'cancelOnDOMElementAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMElementAdded = function cancelOnDOMElementAdded() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onElementAdded,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM Element Added > [Item > Callback]
                                            cancelOnDOMElementAdded(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On DOM Element Count Change
                            LDKF.objectDefineProperty(window, 'cancelOnDOMElementCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMElementCountChange = function cancelOnDOMElementCountChange() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onElementCountChange,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM Element Count Change > [Item > Callback]
                                            cancelOnDOMElementCountChange(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On DOM Element Removed
                            LDKF.objectDefineProperty(window, 'cancelOnDOMElementRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMElementRemoved = function cancelOnDOMElementRemoved() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onElementRemoved,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM Element Removed > [Item > Callback]
                                            cancelOnDOMElementRemoved(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On DOM HTML Change
                            LDKF.objectDefineProperty(window, 'cancelOnDOMHTMLChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMHTMLChange = function cancelOnDOMHTMLChange() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onHTMLChange,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM HTML Change > [Item > Callback]
                                            cancelOnDOMHTMLChange(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On DOM Node Added
                            LDKF.objectDefineProperty(window, 'cancelOnDOMNodeAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMNodeAdded = function cancelOnDOMNodeAdded() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onNodeAdded,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM Node Added > [Item > Callback]
                                            cancelOnDOMNodeAdded(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On DOM Node Count Change
                            LDKF.objectDefineProperty(window, 'cancelOnDOMNodeCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMNodeCountChange = function cancelOnDOMNodeCountChange() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onNodeCountChange,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM Node Count Change > [Item > Callback]
                                            cancelOnDOMNodeCountChange(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On DOM Node Removed
                            LDKF.objectDefineProperty(window, 'cancelOnDOMNodeRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnDOMNodeRemoved = function cancelOnDOMNodeRemoved() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onNodeRemoved,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) && (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On DOM Node Removed > [Item > Callback]
                                            cancelOnDOMNodeRemoved(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On Element Added
                            LDKF.objectDefineProperty(window, 'cancelOnElementAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnElementAdded = function cancelOnElementAdded() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onElementAdded,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On Element Added > [Item > Callback]
                                            cancelOnElementAdded(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On Element Count Change
                            LDKF.objectDefineProperty(window, 'cancelOnElementCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnElementCountChange = function cancelOnElementCountChange() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onElementCountChange,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On Element Count Change > [Item > Callback]
                                            cancelOnElementCountChange(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On Element Removed
                            LDKF.objectDefineProperty(window, 'cancelOnElementRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnElementRemoved = function cancelOnElementRemoved() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onElementRemoved,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On Element Removed > [Item > Callback]
                                            cancelOnElementRemoved(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On HTML Change
                            LDKF.objectDefineProperty(window, 'cancelOnHTMLChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnHTMLChange = function cancelOnHTMLChange() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onHTMLChange,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On HTML Change > [Item > Callback]
                                            cancelOnHTMLChange(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On Node Added
                            LDKF.objectDefineProperty(window, 'cancelOnNodeAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnNodeAdded = function cancelOnNodeAdded() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onNodeAdded,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On Node Added > [Item > Callback]
                                            cancelOnNodeAdded(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On Node Count Change
                            LDKF.objectDefineProperty(window, 'cancelOnNodeCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnNodeCountChange = function cancelOnNodeCountChange() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onNodeCountChange,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On Node Count Change > [Item > Callback]
                                            cancelOnNodeCountChange(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            // Cancel On Node Removed
                            LDKF.objectDefineProperty(window, 'cancelOnNodeRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowCancelOnNodeRemoved = function cancelOnNodeRemoved() {
                                    // Initialization > (Watch List, Iterator)
                                    var watchList = hidden.watchList.onNodeRemoved,
                                        iterator = watchList.length;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback, Node)
                                        var callback = arguments[0],
                                            node = arguments[1];

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Logic
                                            if (item.callback === callback && item.node === node) {
                                                // Update > Watch List
                                                LDKF.removeItemArray(watchList, item);

                                                // Return
                                                return !0
                                            }
                                        }

                                        // Return
                                        return !1
                                    }

                                    else {
                                        // Initialization > (Array, Document)
                                        var array = [],
                                            document = LDKF.get.windowDocument();

                                        /* Loop
                                                Index Watch List.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = watchList[iterator -= 1];

                                            // Update > Array
                                            (item.node === document) || (array[array.length] = item)
                                        }

                                        // Initialization > Length
                                        var length = iterator = array.length;

                                        /* Loop
                                                Index Array.
                                        */
                                        while (iterator) {
                                            // Initialization > Item
                                            var item = array[iterator -= 1];

                                            // Cancel On Node Removed > [Item > Callback]
                                            cancelOnNodeRemoved(item.callback, item.node)
                                        }

                                        // Return
                                        return !!length
                                    }
                                }
                            });

                            /* Chain
                                    --- NOTE ---
                                        #Lapys:
                                            - Execute a list of functions in order.
                                            - The key here is that each successive function is called only after the current one is completed.
                            */
                            window.chain = function chain() {
                                // Initialization > (Callbacks, Iterator, Length)
                                var callbacks = arguments,
                                    iterator = callbacks.length,
                                    length = iterator;

                                /* Logic
                                        [if statement]
                                */
                                if (length) {
                                    // Loop > Error
                                    while (iterator)
                                        LDKF.isFunction(callbacks[iterator -= 1]) || LDKF.throwError('chain', 'argument', 'This function accepts functions only as arguments');

                                    // Update > Length
                                    (length % 2) && (length = LDKF.lendArray(callbacks, function() {}, !0));
                                    length -= 1;

                                    // Initialization > (Click Event Attacher, Current Return Value, Element, Execution Iteration Count, (Initial, Previous) Lapse, Promises)
                                    var clickEventAttacher = LDKO.descriptions.htmlElementPrototypeOnClick.set,
                                        currentReturnValue,
                                        element = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'lapysjs-element'),
                                        executionIterationCount = 0,
                                        initialLapse = now(),
                                        previousLapse = 0,
                                        promises = LDKO.promise;

                                    // Update > Promises
                                    promises = LDKF.get.funcPrototypeName(promises) == 'Promise' && LDKF.isNativeFunction(promises);

                                    // Function
                                        // Now
                                        function now() { return LDKF.performancePrototypeNow() }

                                        // Set Click Event
                                        function setClickEvent() { return clickEventAttacher.call(arguments[0], arguments[1]) }

                                        // Update Lapse
                                        function updateLapse() { return now() - initialLapse }

                                        // Execute
                                        (promises ?
                                            function execute() {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (iterator < length + 2) {
                                                    // Initialization > Callback (A, B)
                                                    var callbackA = arguments[0],
                                                        callbackB = arguments[1];

                                                    // Update > Previous Lapse
                                                    previousLapse = updateLapse() - previousLapse;

                                                    // Promise
                                                    LDKO.promisePrototypeThen.call(new LDKO.promise(function(resolve, reject) {
                                                        // Callback A, Resolve, Reject
                                                        callbackA(executionIterationCount ? previousLapse : 0);
                                                        resolve(null);
                                                        reject(null)
                                                    }), function() {
                                                        // Promise
                                                        LDKO.promisePrototypeThen.call(new LDKO.promise(function(resolve, reject) {
                                                            // Update > Current Return Value
                                                            currentReturnValue = callbackB(updateLapse() - previousLapse);

                                                            // Resolve, Reject
                                                            resolve(null);
                                                            reject(null)
                                                        }), function() {
                                                            // Update > Execution Iteration Count
                                                            executionIterationCount += 1;

                                                            // Execute
                                                            execute(callbacks[iterator += 1], callbacks[iterator += 1])
                                                        })
                                                    })
                                                }
                                            } : function execute() {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (iterator < length + 2) {
                                                    // Initialization
                                                        // Callback (A, B)
                                                        var callbackA = arguments[0],
                                                            callbackB = arguments[1];

                                                        // Called, Repeated, Request
                                                        var called = !1,
                                                            repeated = !1,
                                                            request;

                                                    // Update > Previous Lapse
                                                    previousLapse = updateLapse() - previousLapse;

                                                    // Callback A
                                                    callbackA(executionIterationCount ? previousLapse : !0);

                                                    // Function
                                                        // Call
                                                        function call() {
                                                            // Update > (Called, Current Return Value)
                                                            called = !0;
                                                            currentReturnValue = callbackB(updateLapse() - previousLapse);

                                                            // Set Click Event > Element
                                                            setClickEvent(element, repeat);

                                                            // Function > Repeat Click
                                                            function repeatClick() {
                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (repeated)
                                                                    // Cancel Animation Frame > Request
                                                                    LDKF.cancelAnimationFrame(request);

                                                                else {
                                                                    // Element > Click
                                                                    LDKO.htmlElementPrototypeClick.call(element);

                                                                    // Update > Request
                                                                    request = LDKF.requestAnimationFrame(repeatClick)
                                                                }
                                                            }

                                                            // Repeat Click
                                                            repeatClick()
                                                        }

                                                        // Call Click
                                                        function callClick() {
                                                            /* Logic
                                                                    [if:else statement]
                                                            */
                                                            if (called)
                                                                // Cancel Animation Frame > Request
                                                                LDKF.cancelAnimationFrame(request);

                                                            else {
                                                                // Element > Click
                                                                LDKO.htmlElementPrototypeClick.call(element);

                                                                // Update > Request
                                                                request = LDKF.requestAnimationFrame(callClick)
                                                            }
                                                        }

                                                        // Repeat
                                                        function repeat() {
                                                            // Update > (Execution Iteration Count, Repeated)
                                                            executionIterationCount += 1;
                                                            repeated = !0;

                                                            // Set Click Event | Execute
                                                            iterator == length ?
                                                                setClickEvent(element, null) :
                                                                execute(callbacks[iterator += 1], callbacks[iterator += 1])
                                                        }

                                                    // Set Click Event > Element
                                                    setClickEvent(element, call);

                                                    // Call Click
                                                    callClick()
                                                }
                                            }
                                        )(callbacks[iterator = 0], callbacks[iterator += 1]);

                                    // Return
                                    return currentReturnValue
                                }
                            };

                            /* Check
                                    --- NOTE ---
                                        #Lapys: Asynchronously check a condition and execute callbacks based on the result (like an asynchronous `while` statement).
                                            - If the condition is false, keep checking the condition
                                            - If the condition is true, terminate the sequence.
                            */
                            window.check = function check() {
                                // Initialization > (Condition, Fail, Success, Length, Request)
                                var condition = arguments[0],
                                    fail = arguments[2] || null, failIsFunction,
                                    success = arguments[1] || null, successIsFunction,
                                    length = arguments.length,
                                    request;

                                /* Logic
                                        [if statement]
                                */
                                if (length) {
                                    // Error
                                    (failIsFunction = LDKF.isFunction(fail)) || LDKF.isNull(fail) || LDKF.throwError('check', 'argument', LDKF.debugMessage('Fail callback', ['must', 'be'], ['function', 'null']));
                                    (successIsFunction = LDKF.isFunction(success)) || LDKF.isNull(success) || LDKF.throwError('check', 'argument', LDKF.debugMessage('Success callback', ['must', 'be'], ['function', 'null']));

                                    /* Logic
                                            [if statement]
                                    */
                                    if (failIsFunction || length == 2) {
                                        // Function
                                            // Test
                                            function test() { return !!(LDKF.isFunction(condition) ? condition() : condition) }

                                            // Check
                                            (function check() {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (test()) {
                                                    // Success
                                                    successIsFunction && success();

                                                    // Cancel Animation Frame > Request
                                                    LDKF.cancelAnimationFrame(request)
                                                }

                                                else {
                                                    // Fail
                                                    failIsFunction && fail();

                                                    // Update > Request
                                                    request = LDKF.requestAnimationFrame(check)
                                                }
                                            })()
                                    }
                                }
                            };

                            // Clear
                            LDKF.objectDefineProperty(window, 'clear', {
                                // Configurable
                                configurable: !0,

                                // Get
                                get: function clear() {
                                    // Console > Clear
                                    LDKF.consoleClear();

                                    // Return
                                    return clear
                                },

                                // Set
                                set: function clear(data) {
                                    // Modification > Window > Clear
                                    LDKF.objectDefineProperty(window, 'clear', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Value
                                        value: data,

                                        // Writable
                                        writable: !0
                                    });

                                    // Return
                                    return data
                                }
                            });

                            // Copy
                            window.copy = function copy() {
                                // Initialization > (Command, Data, Document, Input, Text)
                                var command = 'copy',
                                    data = arguments[0],
                                    document = LDKF.get.windowDocument(),
                                    input = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'textarea'),
                                    text = '';

                                /* Logic
                                        [if statement]
                                */
                                if (arguments.length && document)
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.documentPrototypeQueryCommandEnabled(document, command) || LDKF.documentPrototypeQueryCommandSupported(document, command)) {
                                        // Initialization > (Ancestor, Input Style)
                                        var ancestor = LDKF.get.ancestorElement(),
                                            inputStyle = LDKF.get.htmlElementPrototypeStyle(input);

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Text
                                        */
                                        if (LDKF.isInputElement(data))
                                            text = LDKF.isHTMLInputElement(data) ? LDKF.get.htmlInputElementPrototypeValue(data) : LDKF.get.htmlTextareaElementPrototypeValue(data);

                                        else if (LDKF.isHTMLElement(data))
                                            text = LDKF.get.htmlElementPrototypeInnerText(data);

                                        else
                                            text = LDKF.string(data);

                                        // Modification
                                            // Input
                                                // Text Content
                                                LDKF.set.nodePrototypeTextContent(input, text);

                                                // Value
                                                LDKF.set.htmlTextareaElementPrototypeValue(input, text);

                                            // Input Style
                                                // Pointer Events
                                                inputStyle.pointerEvents = 'none';

                                                // Position
                                                inputStyle.position = 'fixed';

                                                // Opacity
                                                inputStyle.opacity = 0;

                                        // Insertion
                                        LDKF.nodePrototypeAppendChild(ancestor, input);

                                        // Input > Focus
                                        LDKF.htmlElementPrototypeFocus(input);

                                        // Initialization > (Selection, Range)
                                        var selection = LDKF.documentPrototypeGetSelection(document),
                                            range = LDKF.documentPrototypeCreateRange(document);

                                        // Range > Select Node Contents > Input
                                        LDKF.rangePrototypeSelectNodeContents(range, input);

                                        // Selection
                                            // Remove All Ranges
                                            LDKF.selectionPrototypeRemoveAllRanges(selection);

                                            // Add Range > Range
                                            LDKF.selectionPrototypeAddRange(selection, range);

                                            // [Range] > Clone Contents
                                            LDKF.rangePrototypeCloneContents(LDKF.selectionPrototypeGetRangeAt(selection, 0));

                                        // Input > Select
                                        LDKF.htmlTextareaElementPrototypeSelect(input);

                                        // Document > Execute Command > [Command]
                                        LDKF.documentPrototypeExecCommand(document, command)

                                        // Input > Blur
                                        LDKF.htmlTextareaElementPrototypeBlur(input);

                                        // (LapysJS Development Kit > Functions) > Set Timeout
                                        LDKF.setTimeout(function() {
                                            // Selection > Remove All Ranges
                                            LDKF.selectionPrototypeRemoveAllRanges(selection);

                                            // Deletion
                                            LDKF.nodePrototypeRemoveChild(ancestor, input)
                                        });

                                        // Return
                                        return LDKF.get.htmlTextareaElementPrototypeValue(input)
                                    }

                                    else {
                                        // Warn
                                        LDKF.throwWarning(command, 'argument', "Query command '" + command + "' not supported in this browser");

                                        // Return
                                        return null
                                    }
                            };

                            /* Create Document Fragment
                                    --- NOTE ---
                                        #Lapys: May be a tad bit slow...

                                    --- WARN ---
                                        #Lapys: Can not import `HTMLBodyElement`, `HTMLHeadElement` and `HTMLHtmlElement` objects.
                            */
                            window.createDocumentFragment = LDKF.windowCreateDocumentFragment = function createDocumentFragment() {
                                // Initialization > (Document (Fragment), Iterator, Length, Target)
                                var document = LDKF.get.windowDocument(),
                                    documentFragment = LDKF.documentPrototypeCreateDocumentFragment(document),
                                    iterator = 0,
                                    length = arguments.length,
                                    that = this;

                                /* Loop
                                        Index Arguments.
                                */
                                for (iterator; iterator != length; iterator += 1) {
                                    // Initialization > Content
                                    var content = arguments[iterator];

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (that == hidden) {
                                        // Initialization > Container
                                        var container = LDKF.documentPrototypeCreateElement(document, 'a');

                                        // Modification > Container > Text Content
                                        LDKF.set.nodePrototypeTextContent(container, content);

                                        // Insertion
                                        LDKF.nodePrototypeAppendChild(documentFragment, LDKF.get.nodePrototypeChildNodes(container)[0])
                                    }

                                    else if (LDKF.isNode(content))
                                        // Insertion
                                        LDKF.nodePrototypeAppendChild(documentFragment, content);

                                    else {
                                        // Initialization > Container
                                        var container = LDKF.documentPrototypeCreateElement(document, 'body');

                                        // Modification > Container > Inner HTML
                                        LDKF.set.elementPrototypeInnerHTML(container, content);

                                        // Initialization > (Nodes) (Iterator, Length)
                                        var nodes = LDKF.windowArray.apply(window, LDKF.get.nodePrototypeChildNodes(container)),
                                            nodesIterator = 0,
                                            nodesLength = nodes.length;

                                        // Loop > Insertion
                                        for (nodesIterator; nodesIterator != nodesLength; nodesIterator += 1)
                                            LDKF.nodePrototypeAppendChild(documentFragment, nodes[nodesIterator])
                                    }
                                }

                                // Return
                                return documentFragment
                            };
                                /* HTML
                                        --- NOTE ---
                                            #Lapys: Considers all arguments as nodes.
                                */
                                LDKF.objectDefineProperty(window.createDocumentFragment, 'html', {
                                    // Configurable
                                    configurable: !0,

                                    // Value
                                    value: function html() {
                                        // Return
                                        return LDKF.windowCreateDocumentFragment.apply(window, arguments)
                                    }
                                });

                                /* Text
                                        --- NOTE ---
                                            #Lapys: Considers all arguments as text nodes.
                                */
                                LDKF.objectDefineProperty(window.createDocumentFragment, 'text', {
                                    // Configurable
                                    configurable: !0,

                                    // Value
                                    value: function text() {
                                        // Return
                                        return LDKF.windowCreateDocumentFragment.apply(hidden, arguments)
                                    }
                                });

                            // Create Element
                            window.createElement = LDKF.createElement;

                            // Cube Root
                            window.cbrt = function cbrt(number) {
                                // Return
                                return arguments.length ? LDKO.mathExp(LDKO.mathLog(number) / 3) || LDKO.mathPow(number, 1 / 3) : LDKO.nan
                            };

                            // Cut
                            window.cut = function cut() {
                                // Initialization > (Command, Data, Document, Input, Text)
                                var command = 'cut',
                                    data = arguments[0],
                                    document = LDKF.get.windowDocument(),
                                    input = LDKF.documentPrototypeCreateElement(LDKF.get.windowDocument(), 'textarea'),
                                    text = '';

                                /* Logic
                                        [if statement]
                                */
                                if (arguments.length && document)
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.documentPrototypeQueryCommandEnabled(document, command) || LDKF.documentPrototypeQueryCommandSupported(document, command)) {
                                        // Initialization > (Ancestor, Input Style)
                                        var ancestor = LDKF.get.ancestorElement(),
                                            inputStyle = LDKF.get.htmlElementPrototypeStyle(input);

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (ancestor === data)
                                            LDKF.throwError(command, 'argument', 'Unable to remove argument node');

                                        else if (LDKF.isHTMLElement(data)) {
                                            // Initialization > Parent
                                            var parent = LDKF.get.nodeListPrototypeParentNode(data);

                                            // Update > Text
                                            text = LDKF.isInputElement(data) ? (LDKF.isHTMLInputElement(data) ? LDKF.get.htmlInputElementPrototypeValue(data) : LDKF.get.htmlTextareaElementPrototypeValue(data)) : LDKF.get.htmlElementPrototypeInnerText(data);

                                            // Error Handling
                                            try {
                                                // Insertion | Error
                                                parent ? LDKF.nodePrototypeRemoveChild(parent, data) : LDKF.throwError(command, 'argument', 'Parent node from argument missing')
                                            } catch (error) {
                                                // Error
                                                LDKF.throwError(command, 'argument', 'Unable to remove argument node')
                                            }
                                        }

                                        else
                                            // Update > Text
                                            text = LDKF.string(data);

                                        // Modification
                                            // Input
                                                // Text Content
                                                LDKF.set.nodePrototypeTextContent(input, text);

                                                // Value
                                                LDKF.set.htmlTextareaElementPrototypeValue(input, text);

                                            // Input Style
                                                // Pointer Events
                                                inputStyle.pointerEvents = 'none';

                                                // Position
                                                inputStyle.position = 'fixed';

                                                // Opacity
                                                inputStyle.opacity = 0;

                                        // Insertion
                                        LDKF.nodePrototypeAppendChild(ancestor, input);

                                        // Input > Focus
                                        LDKF.htmlElementPrototypeFocus(input);

                                        // Initialization > (Selection, Range)
                                        var selection = LDKF.documentPrototypeGetSelection(document),
                                            range = LDKF.documentPrototypeCreateRange(document);

                                        // Range > Select Node Contents > Input
                                        LDKF.rangePrototypeSelectNodeContents(range, input);

                                        // Selection
                                            // Remove All Ranges
                                            LDKF.selectionPrototypeRemoveAllRanges(selection);

                                            // Add Range > Range
                                            LDKF.selectionPrototypeAddRange(selection, range);

                                            // [Range] > Clone Contents
                                            LDKF.rangePrototypeCloneContents(LDKF.selectionPrototypeGetRangeAt(selection, 0));

                                        // Input > Select
                                        LDKF.htmlTextareaElementPrototypeSelect(input);

                                        // Document > Execute Command > [Command]
                                        LDKF.documentPrototypeExecCommand(document, command)

                                        // Input > Blur
                                        LDKF.htmlTextareaElementPrototypeBlur(input);

                                        // (LapysJS Development Kit > Functions) > Set Timeout
                                        LDKF.setTimeout(function() {
                                            // Selection > Remove All Ranges
                                            LDKF.selectionPrototypeRemoveAllRanges(selection);

                                            // Deletion
                                            LDKF.nodePrototypeRemoveChild(ancestor, input)
                                        });

                                        // Return
                                        return LDKF.get.htmlTextareaElementPrototypeValue(input)
                                    }

                                    else {
                                        // Warn
                                        LDKF.throwWarning(command, 'argument', "Query command '" + command + "' not supported in this browser");

                                        // Return
                                        return null
                                    }
                            };

                            /* Execute
                                    --- NOTE ---
                                        #Lapys: Twin function of `eval`, tests if an evaluation string is executable,
                                            if the second argument is true, the string is tested on a sandbox window instead.
                            */
                            LDKF.objectDefineProperty(window, 'exec', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !1,

                                // Value
                                value: function exec(code, sandboxTesting) {
                                    // Initialization > (Evaluation, Result, Prototype)
                                    var evaluation = LDKF.isExecutable(code, !!sandboxTesting),
                                        result = {completedEvaluation: evaluation.completed, feedback: evaluation.feedback, value: evaluation.value},
                                        prototype = LDKF.objectCreate(LDKO.booleanPrototype);

                                    // Modification > Prototype
                                        // Value Of
                                        LDKF.objectDefineProperty(prototype, 'valueOf', {
                                            // Value
                                            value: function valueOf() {
                                                // Return
                                                return evaluation.value
                                            }
                                        });

                                        // (Constructor > Prototype)
                                        result.__proto__ = prototype;

                                    // Return
                                    return result
                                },

                                // Writable
                                writable: !0
                            });

                            // File
                            LDKF.objectDefineProperty(window, 'file', {
                                // Configurable
                                configurable: !0,

                                // Get
                                get: function file() {
                                    // Return
                                    return LDKO.fileManager
                                }
                            });

                            // Float
                            LDKF.objectDefineProperty(window, 'float', {
                                // Value
                                value: function float() {
                                    // Return
                                    return LDKF.number(arguments[0])
                                }
                            });

                            // Font
                            LDKF.objectDefineProperty(window, 'font', {
                                // Configurable
                                configurable: !0,

                                // Get
                                get: function font() {
                                    // Return
                                    return LDKO.fontManager
                                }
                            });

                            /* On DOM Element Added
                                    --- NOTE ---
                                        #Lapys:
                                            - This method and its siblings listen for DOM updates on an
                                                asynchronous frame-by-frame basis and execute based on that.

                                            - They do not execute based on their suggested names.

                                            - In this case, adding x more DOM elements in a single JavaScript frame
                                                will not execute this function x times, rather once on that single frame.
                            */
                            LDKF.objectDefineProperty(window, 'onDOMElementAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMElementAdded() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMElementAdded', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMElementAdded', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onElementAdded[hidden.watchList.onElementAdded.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Element Added > Callback Reference
                                                LDKF.windowCancelOnDOMElementAdded(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.get.htmlAllCollectionPrototypeLength(LDKF.get.documentPrototypeAll())
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onElementAdded.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onElementAdded[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result > formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMElementAdded', 'argument', [1, 0])
                                }
                            });

                            // On DOM Element Count Change
                            LDKF.objectDefineProperty(window, 'onDOMElementCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMElementCountChange() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMElementCountChange', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMElementCountChange', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onElementCountChange[hidden.watchList.onElementCountChange.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Element Count Change > Callback Reference
                                                LDKF.windowCancelOnDOMElementCountChange(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.get.htmlAllCollectionPrototypeLength(LDKF.get.documentPrototypeAll())
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onElementCountChange.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onElementCountChange[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result != formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMElementCountChange', 'argument', [1, 0])
                                }
                            });

                            // On DOM Element Removed
                            LDKF.objectDefineProperty(window, 'onDOMElementRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMElementRemoved() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMElementRemoved', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMElementRemoved', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onElementRemoved[hidden.watchList.onElementRemoved.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Element Removed > Callback Reference
                                                LDKF.windowCancelOnDOMElementRemoved(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.get.htmlAllCollectionPrototypeLength(LDKF.get.documentPrototypeAll())
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onElementRemoved.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onElementRemoved[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result < formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMElementRemoved', 'argument', [1, 0])
                                }
                            });

                            // On DOM HTML Change
                            LDKF.objectDefineProperty(window, 'onDOMHTMLChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMHTMLChange() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMHTMLChange', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMHTMLChange', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onHTMLChange[hidden.watchList.onHTMLChange.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result (Node))
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0,
                                            resultNode = LDKF.get.ancestorElement();

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Node Count Change > Callback Reference
                                                LDKF.windowCancelOnDOMNodeCountChange(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Error Handling
                                                try {
                                                    // Update > Result Node
                                                    resultNode || (resultNode = LDKF.get.ancestorElement());

                                                    // Return
                                                    return LDKO.descriptions.elementPrototypeInnerHTML.get.call(resultNode)
                                                } catch (error) {}

                                                // Return
                                                return ''
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onHTMLChange.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onHTMLChange[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result != formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMHTMLChange', 'argument', [1, 0])
                                }
                            });

                            // On DOM Node Added
                            LDKF.objectDefineProperty(window, 'onDOMNodeAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMNodeAdded() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMNodeAdded', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMNodeAdded', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onNodeAdded[hidden.watchList.onNodeAdded.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Node Added > Callback Reference
                                                LDKF.windowCancelOnDOMNodeAdded(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.allNodes(LDKF.get.windowDocument()).length
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onNodeAdded.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onNodeAdded[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result > formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMNodeAdded', 'argument', [1, 0])
                                }
                            });

                            // On DOM Node Count Change
                            LDKF.objectDefineProperty(window, 'onDOMNodeCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMNodeCountChange() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMNodeCountChange', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMNodeCountChange', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onNodeCountChange[hidden.watchList.onNodeCountChange.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Node Count Change > Callback Reference
                                                LDKF.windowCancelOnDOMNodeCountChange(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.allNodes(LDKF.get.windowDocument()).length
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onNodeCountChange.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onNodeCountChange[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result != formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMNodeCountChange', 'argument', [1, 0])
                                }
                            });

                            // On DOM Node Removed
                            LDKF.objectDefineProperty(window, 'onDOMNodeRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onDOMNodeRemoved() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[0],
                                            callbackReference = callback,
                                            node = LDKF.get.windowDocument();

                                        // Error
                                        LDKF.isFunction(callback) || LDKF.throwError('onDOMNodeRemoved', 'argument', LDKF.debugMessage('Argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onDOMNodeRemoved', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onNodeRemoved[hidden.watchList.onNodeRemoved.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On DOM Node Removed > Callback Reference
                                                LDKF.windowCancelOnDOMNodeRemoved(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.allNodes(LDKF.get.windowDocument()).length
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onNodeRemoved.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onNodeRemoved[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result < formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onDOMNodeRemoved', 'argument', [1, 0])
                                }
                            });

                            // On Element Added
                            LDKF.objectDefineProperty(window, 'onElementAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onElementAdded() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onElementAdded', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onElementAdded', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onElementAdded', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onElementAdded[hidden.watchList.onElementAdded.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Element Added > Callback Reference
                                                LDKF.windowCancelOnElementAdded(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.get.nodeListPrototypeLength(LDKF.elementPrototypeQuerySelectorAll(node, '*'))
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onElementAdded.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onElementAdded[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result > formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onElementAdded', 'argument', [1, 0])
                                }
                            });

                            // On Element Count Change
                            LDKF.objectDefineProperty(window, 'onElementCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onElementCountChange() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onElementCountChange', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onElementCountChange', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onElementCountChange', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onElementCountChange[hidden.watchList.onElementCountChange.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Element Count Change > Callback Reference
                                                LDKF.windowCancelOnElementCountChange(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.get.nodeListPrototypeLength(LDKF.elementPrototypeQuerySelectorAll(node, '*'))
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onElementCountChange.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onElementCountChange[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result != formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onElementCountChange', 'argument', [1, 0])
                                }
                            });

                            // On Element Removed
                            LDKF.objectDefineProperty(window, 'onElementRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onElementRemoved() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onElementRemoved', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onElementRemoved', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onElementRemoved', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onElementRemoved[hidden.watchList.onElementRemoved.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Element Removed > Callback Reference
                                                LDKF.windowCancelOnElementRemoved(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.get.nodeListPrototypeLength(LDKF.elementPrototypeQuerySelectorAll(node, '*'))
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onElementRemoved.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onElementRemoved[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result < formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onElementRemoved', 'argument', [1, 0])
                                }
                            });

                            // On HTML Change
                            LDKF.objectDefineProperty(window, 'onHTMLChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onHTMLChange() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onElementAdded', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onHTMLChange', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onHTMLChange', 'argument', 'Callback given has already been registered into the  Event watch list') :
                                            hidden.watchList.onHTMLChange[hidden.watchList.onHTMLChange.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Node Count Change > Callback Reference
                                                LDKF.windowCancelOnNodeCountChange(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Error Handling
                                                try { return node && LDKO.descriptions.elementPrototypeInnerHTML.get.call(node) }
                                                catch (error) {}

                                                // Return
                                                return ''
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onHTMLChange.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onHTMLChange[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result != formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onHTMLChange', 'argument', [1, 0])
                                }
                            });

                            // On Node Added
                            LDKF.objectDefineProperty(window, 'onNodeAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onNodeAdded() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onNodeAdded', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onNodeAdded', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onNodeAdded', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onNodeAdded[hidden.watchList.onNodeAdded.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Node Added > Callback Reference
                                                LDKF.windowCancelOnNodeAdded(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.allNodes(node)
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onNodeAdded.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onNodeAdded[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result > formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onNodeAdded', 'argument', [1, 0])
                                }
                            });

                            // On Node Count Change
                            LDKF.objectDefineProperty(window, 'onNodeCountChange', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onNodeCountChange() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onNodeCountChange', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onNodeCountChange', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onNodeCountChange', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onNodeCountChange[hidden.watchList.onNodeCountChange.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Node Count Change > Callback Reference
                                                LDKF.windowCancelOnNodeCountChange(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.allNodes(node)
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onNodeCountChange.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onNodeCountChange[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result != formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onNodeCountChange', 'argument', [1, 0])
                                }
                            });

                            // On Node Removed
                            LDKF.objectDefineProperty(window, 'onNodeRemoved', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function onNodeRemoved() {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Callback (Reference), Node)
                                        var callback = arguments[1],
                                            callbackReference = callback,
                                            node = arguments[0];

                                        // Error
                                        LDKF.isNode(node) || LDKF.throwError('onNodeRemoved', 'argument', LDKF.debugMessage('First argument', ['must', 'a'], 'node'));
                                        LDKF.isFunction(callback) || LDKF.throwError('onNodeRemoved', 'argument', LDKF.debugMessage('Second argument', ['must', 'a'], 'function'));

                                        // Error | (Update > Watch List)
                                        isRegistered() ?
                                            LDKF.throwError('onNodeRemoved', 'argument', 'Callback given has already been registered into the DOM Event watch list') :
                                            hidden.watchList.onNodeRemoved[hidden.watchList.onNodeRemoved.length] = {callback: callback, node: node};

                                        // Initialization > (Event Observer, Former Result, Promises, Request, Result)
                                        var eventObserver = new LDKO.eventObserver,
                                            formerResult = getResult(),
                                            promises, request,
                                            result = 0;

                                        // Modification > Event Observer > Then
                                        eventObserver.then = function then(callback, delay) {
                                            // Update > Delay
                                            LDKF.isVoid(delay) && (delay = 0);

                                            // Error Handling
                                            try {
                                                // Error
                                                LDKF.isFunction(callback) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'function'));
                                                (LDKF.isSafeNumber(delay) && delay > -1) || LDKF.throwError(['then', 'EventObserver'], 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'positive safe numeral'))
                                            } catch (error) {
                                                // (LapysJS Development Kit > Functions) > Window Cancel On Node Removed > Callback Reference
                                                LDKF.windowCancelOnNodeRemoved(callbackReference);

                                                // Error
                                                throw error
                                            }

                                            // Update > Promises
                                            promises || (promises = []);
                                            promises[promises.length] = {callback: callback, delay: delay};

                                            // Return
                                            return eventObserver
                                        };

                                        // Function
                                            // Get Result
                                            function getResult() {
                                                // Return
                                                return LDKF.allNodes(node)
                                            }

                                            // Is Registered
                                            function isRegistered() {
                                                // Initialization > Iterator
                                                var iterator = hidden.watchList.onNodeRemoved.length;

                                                /* Loop
                                                        Index the Watch List.
                                                */
                                                while (iterator) {
                                                    // Initialization > Item
                                                    var item = hidden.watchList.onNodeRemoved[iterator -= 1];

                                                    // Logic > Return
                                                    if (item.callback === callback && item.node === node)
                                                        return !0
                                                }
                                            }

                                            // Event Loop
                                            (function eventLoop() {
                                                // Function > Event Condition
                                                function eventCondition() {
                                                    // Return
                                                    return result < formerResult
                                                }

                                                // Update > Result
                                                result = getResult();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (eventCondition()) {
                                                    // Callback
                                                    callback.call(node);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (promises) {
                                                        // Initialization > (Iterator, Length, Promise Request, Promises Status)
                                                        var iterator = 0,
                                                            length = promises.length,
                                                            promiseRequest,
                                                            promisesStatus = [];

                                                        // Function > Fulfill Promise
                                                        (function fulfillPromise() {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (iterator != length)
                                                                /* Logic
                                                                        [if:else statement]
                                                                */
                                                                if (promisesStatus[iterator] != 'pending') {
                                                                    // Initialization > (Promise, Callback, Delay)
                                                                    var promise = promises[iterator],
                                                                        callback = promise.callback,
                                                                        delay = promise.delay;

                                                                    /* Logic
                                                                            [if:else statement]
                                                                    */
                                                                    if (delay) {
                                                                        // Initialization > Timeout
                                                                        var timeout;

                                                                        // Update > Timeout
                                                                        timeout = LDKF.setTimeout(function() {
                                                                            // Update > (Promises Status, Iterator)
                                                                            promisesStatus[iterator] = 'kept';
                                                                            iterator += 1;

                                                                            // Callback
                                                                            callback.call(node);

                                                                            // Clear Timeout > Timeout
                                                                            LDKF.clearTimeout(timeout)
                                                                        }, delay);

                                                                        // Update > Promises Status
                                                                        promisesStatus[iterator] = 'pending'
                                                                    }

                                                                    else {
                                                                        // Update > (Promises Status, Iterator)
                                                                        promisesStatus[iterator] = 'kept';
                                                                        iterator += 1;

                                                                        // Callback
                                                                        callback.call(node)
                                                                    }
                                                                }

                                                            // (Cancel Animation Frame > Fulfill Promise) | (Update > Promise Request)
                                                            iterator == length ?
                                                                LDKF.cancelAnimationFrame(fulfillPromise) :
                                                                promiseRequest = LDKF.requestAnimationFrame(fulfillPromise)
                                                        })()
                                                    }

                                                    // Update > Former Result
                                                    formerResult = result
                                                }

                                                // Update > Former Result
                                                (formerResult === result) || (formerResult = result);

                                                // (Update > Request) | (Cancel Animation Frame > Request)
                                                isRegistered() ? request = LDKF.requestAnimationFrame(eventLoop) : LDKF.cancelAnimationFrame(request)
                                            })();

                                        // Return
                                        return eventObserver
                                    }

                                    // Error
                                    LDKF.throwError('onNodeRemoved', 'argument', [1, 0])
                                }
                            });

                            // Power
                            window.pow = function pow(number, exponent) {
                                // Return
                                return arguments.length ? LDKO.mathExp(LDKO.mathLog(number) * exponent) || LDKO.mathPow(number, exponent) : LDKO.nan
                            };

                            // Register Element
                            LDKF.objectDefineProperty(window, 'registerElement', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.windowRegisterElement = function registerElement(name, constructor) {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (arguments.length) {
                                        // Initialization > (Custom Elements, Document)
                                        var customElements = LDKO.customElements || hidden,
                                            document = LDKF.get.windowDocument();

                                        // Error Handling
                                        try { LDKF.documentPrototypeCreateElement(document, name) }
                                        catch (error) { (error.constructor === LDKO.domException) && LDKF.throwError('registerElement', 'argument', LDKF.debugMessage(name, ['must', 'a'], 'valid element name')) }

                                        // Modification > (LapysJS > Temporary Data > (LapysJS Development Kit > Objects))
                                        LapysJS.tmp.LDKO = LapysJSDevelopmentKit.objects;

                                        // Update > (Constructor, Options)
                                        (arguments.length > 1) || (constructor = LDKF.eval('(function() { return class HTML' + LDKF.alphabetizeString(LDKF.camelString(name)) + 'Element extends LapysJS.tmp.htmlElement {} })()'));
                                        (arguments.length > 2) || (options = null);

                                        // Deletion
                                        delete LapysJS.tmp.LDKO;

                                        // Error
                                        LDKF.isClass(constructor) || LDKF.throwError('registerElement', 'argument', LDKF.debugMessage('registerElement', 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'class object')));
                                        (constructor.__proto__ === LDKO.htmlElement) || LDKF.throwError('registerElement', 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'must extend to the `HTMLElement` constructor'));

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (LDKF.isObject(customElements) && customElements.constructor === LDKO.customElementRegistry)
                                            // Custom Elements > Define > [Name]
                                            LDKF.isNativeFunction(customElements.define) && customElements.define.call(customElements, name, constructor, options);

                                        else if (LDKF.isNativeFunction(LDKO.documentPrototypeRegisterElement))
                                            // Document > Register Element > [Name]
                                            LDKO.documentPrototypeRegisterElement.call(document, name, constructor, options);

                                        else
                                            // Warn
                                            LDKF.throwWarning('registerElement', 'argument', 'Custom elements are not supported within this browser')
                                    }

                                    // Return
                                    return LDKR.classKeywordValid && LDKF.isNativeFunction(LDKO.customElementRegistry)
                                },

                                // Writable
                                writable: !0
                            });

                            // Root
                            window.root = (Math.root = function root(number, exponent) {
                                // Return
                                return arguments.length ? LDKO.mathExp(LDKO.mathLog(number) * (1 / exponent)) || LDKO.mathPow(number, 1 / exponent) : LDKO.nan
                            });

                            // Square Root
                            window.sqrt = function sqrt(number) {
                                // Return
                                return arguments.length ? LDKO.mathExp(LDKO.mathLog(number) / 2) || LDKO.mathPow(number, .5) : LDKO.nan
                            }
                }

                /* Update
                        --- NOTE ---
                            #Lapys: Asynchronously update the dynamic features of LapysJS.
                */
                function UPDATE() {}

                /* Terminate
                        --- NOTE ---
                            #Lapys: Round up all synchronous features with the library.
                */
                function TERMINATE() {
                    // Initialization > Timeout Index
                    var timeoutIndex;

                    // Update > Timeout Index
                    timeoutIndex = LDKF.setTimeout(function() {
                        // Initialization > Timeout Start
                        var timeoutStart = LDKR.timeoutStart;

                        // Update > Timeout Index
                        timeoutIndex += 1;

                        // Loop > Clear Timeout > [Timeout Index]
                        while (timeoutIndex != timeoutStart)
                            LDKF.clearTimeout(timeoutIndex -= 1);

                        // Console > (...)
                        LDKF.consoleGroup('LapysJS | ' + LDKO.descriptions.htmlScriptElementPrototypeSrc.get.call(LapysJS.script) + ' (by ' + AUTHOR + ')');
                            LDKF.consoleLog('     LapysJS.processingDuration =', LapysJS.totalProcessingDuration);
                            LDKF.consoleLog('     LapysJS.ready =', (function() {
                                // Initialization > State
                                var state = !0;

                                // Modification > LapysJS > Ready
                                LDKF.objectDefineProperty(LapysJS, 'ready', {value: state});

                                // Return
                                return state
                            })());
                        LDKF.consoleGroupEnd()
                    })
                }

            /* Global Data */
                // Current Phase
                var CURRENT_PHASE = null;

            /* Modification */
                // LapysJS
                    // Current Phase
                    LDKF.objectDefineProperty(LapysJS, 'currentPhase', {
                        // Get
                        get: function getCurrentPhase() { return CURRENT_PHASE },

                        // Set
                        set: function setCurrentPhase() { return CURRENT_PHASE = arguments[0] }
                    });

                    // Processing Duration
                    LDKF.objectDefineProperty(LapysJS, 'processingDuration', {value: (function() {
                        // Initialization > Processing Duration
                        var processingDuration = {};

                        // Modification > [Object] > Value Of
                        (processingDuration.__proto__ = LDKF.objectCreate(LDKO.number.prototype)).valueOf = function valueOf() {
                            // Return
                            return LapysJS.totalProcessingDuration
                        };

                        // Return
                        return processingDuration
                    })()});

            /* Error Handling
                    --- NOTE ---
                        #Lapys: Begin building the library, not just the LDK.
            */
                // {Initialization}
                try {
                    // Initialization > Start Timestamp
                    var startTimestamp = LDKF.performancePrototypeNow();

                    // Update > Current Phase
                    CURRENT_PHASE = 'initialization';

                    // Initialization
                    INIT();

                    // Modification > (LapysJS > Processing Duration) > Initialization
                    LapysJS.processingDuration.init = LDKF.performancePrototypeNow() - startTimestamp
                } catch (error) {
                    // Error
                    throw LDKF.error('Error in installation process: ' + error.message)
                }

                // {Update}
                try {
                    // Initialization > Start Timestamp
                    var startTimestamp = LDKF.performancePrototypeNow();

                    // Update > Current Phase
                    CURRENT_PHASE = 'update';

                    // Update
                    UPDATE();

                    // Modification > (LapysJS > Processing Duration) > Update
                    LapysJS.processingDuration.update = LDKF.performancePrototypeNow() - startTimestamp
                } catch (error) {
                    // Error
                    throw LDKF.error('Error in update process: ' + error.message)
                }

                // {Terminate}
                try {
                    // Initialization > Start Timestamp
                    var startTimestamp = LDKF.performancePrototypeNow();

                    // Update > Current Phase
                    CURRENT_PHASE = 'termination';

                    // Terminate
                    TERMINATE();

                    // Modification > (LapysJS > Processing Duration) > Terminate
                    LapysJS.processingDuration.terminate = LDKF.performancePrototypeNow() - startTimestamp
                } catch (error) {
                    // Error
                    LDKF.error('Error in terminate process: ' + error.message)
                }

            // Modification > LapysJS > Total Processing Duration
            LDKF.objectDefineProperty(LapysJS, 'totalProcessingDuration', {value: LapysJS.processingDuration.init + LapysJS.processingDuration.update + LapysJS.processingDuration.terminate});

            // Update > Current Phase
            CURRENT_PHASE = null
        } catch (error) {
            // Error
            throw LDKF.error(error)
        }

    else
        // Return
        return 1;

    // Return
    return 0
})([])
