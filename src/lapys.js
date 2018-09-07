/** Function > Main
    @author: Lapys Dev Team
    @description: LapysJS is a code library challenged/ designed to stand out from other code sources using native & simplistic means.
    @version: 0.0.4
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Returns 1 if there`s an error, returns 0 otherwise.

            - The library initializes with the idea of all pre-scripted code before it
                being vulnerable and subject to unknown changes by the developer,

                but it still trusts the developer to not tamper with natively-defined code before initialization
                and stores a backup of such re-usable code.

            - Over its years of development, the library is still a bare-bones version of what it could be and code could still be improved (innovative re-factoring).

    --- RULES ---
        #Lapys:
            - Invalid Keywords
                -- await
                -- class
                -- const
                -- let
                -- with
                -- ...
                -- =>

            - Invalid Objects
                -- AudioContext
                -- AudioNode
                -- EventTarget

            - Avoid returning values in `catch` blocks.
            - Must be compatible with 'modern' legacy browsers.
            - Prefix poly-filled properties & methods with the `$` character.
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
                    #Lapys: Represents hidden data.
        */
        hidden = {},

        // LapysJS Development Kit
        LapysJSDevelopmentKit = {
            /* Components
                    --- NOTE ---
                        #Lapys: Dynamic interfaces.
            */
            components: ['accordion', 'carousel', 'draggable', 'dropdown', 'dynamic-text', 'dynamic-time', 'marquee', 'table', 'toast', 'tooltip'],

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
                    return number < -0 ? -number : number
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

                // Create Element
                createElement: function createElement(tagName, selector, html) {
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
                        selector && LDKF.setSelectorOnElement(element, selector)

                        // Modification > Element > Inner HTML
                        html && LDKF.set.elementPrototypeInnerHTML(element, html);

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
                    // Initialization > (String, Iterator, (Decremented) Length, Separator)
                    var string = '',
                        iterator = 0,
                        length = array.length,
                        decrementedLength = length - 1,
                        separator = arguments.length > 1 ? LDKF.string(arguments[1]) : ', ';

                    /* Loop
                            Index Array.

                        > Update > String
                    */
                    for (iterator; iterator != length; iterator += 1)
                        string += array[iterator] + (iterator == decrementedLength ? '' : separator);

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
                indexOfString: function indexOfString(string, character) {
                    // Initialization > (Iterator, Length)
                    var iterator = 0,
                        length = string.length;

                    // Loop > Logic > Return
                    for (iterator; iterator != length; iterator += 1)
                        if (string[iterator] === character)
                            return iterator;

                    // Return
                    return -1
                },

                // Integer
                int: function integer(number) {
                    // Return
                    return LDKF.isNumber(number) ? number | 0 : LDKF.number(number) | 0
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
                    try { return typeof arg == 'object' && arg.constructor === LDKO.attr }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Boolean
                isBoolean: function isBoolean(arg) { return typeof arg == 'boolean' },

                // Is Character Data
                isCharacterData: function isCharacterData(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.characterData }
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
                    try { return typeof arg == 'object' && arg.constructor === LDKO.document }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Document Fragment
                isDocumentFragment: function isDocumentFragment(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.documentFragment }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Document Type
                isDocumentType: function isDocumentType(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.documentType }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Element
                isElement: function isElement(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.element }
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
                                /* Blur, Focus, Stop
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
                    try { return typeof arg == 'undefined' && arg.constructor === LDKO.htmlAllCollection }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Collection
                isHTMLCollection: function isHTMLCollection(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.htmlCollection }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Document
                isHTMLDocument: function isHTMLDocument(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.htmlDocument }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is HTML Element
                isHTMLElement: function isHTMLElement(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.htmlElement }
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

                // Is Input Element
                isInputElement: function isInputElement(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && (arg.constructor === LDKO.htmlInputElement || arg.constructor === LDKO.htmlTextareaElement) }
                    catch (error) {}

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

                // Is Mobile Viewport
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
                            while (matchesIterator) {
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

                // Is Node
                isNode: function isNode(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.node }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Node List
                isNodeList: function isNodeList(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.nodeList }
                    catch (error) {}

                    // Return
                    return !1
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

                // Is Processing Instruction
                isProcessingInstruction: function isProcessingInstruction(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.processingInstruction }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is Pure Object
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
                    try { return typeof arg == 'object' && arg.constructor === LDKO.window }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Is XML HTTP Request --- CHECKPOINT ---
                isXmlHttpRequest: function isXmlHttpRequest(arg) {
                    // Error Handling > Return
                    try { return typeof arg == 'object' && arg.constructor === LDKO.xmlHttpRequest }
                    catch (error) {}

                    // Return
                    return !1
                },

                // Last Index Of String
                lastIndexOfString: function lastIndexOfString(string, character) {
                    // Initialization > Iterator
                    var iterator = string.length;

                    // Loop > Logic > Return
                    while (iterator)
                        if (string[iterator -= 1] === character)
                            return iterator;

                    // Return
                    return -1
                },

                /* Lend Array
                        --- NOTE ---
                            #Lapys: Same as `Array.prototype.push` with only 1 argument.
                */
                lendArray: function lendArray(array, item) {
                    // Initialization > Length
                    var length;

                    // Update > Array
                    array[(length = array.length += 1) - 1] = item;

                    // Return
                    return length - 1
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
                            #Lapys: Returns the integer exponent of a number.

                        --- UPDATE REQUIRED ---
                            #Lapys: Non-integer exponents should return safe numeral values.
                */
                pow: function pow(base, exponent) {
                    // Error
                    LDKF.isSafeNumber(base) || LDKF.throwError('pow', 'argument', LDKF.debugMessage('Argument 0', ['must', 'a'], 'safe number'));
                    LDKF.isSafeNumber(exponent) || LDKF.throwError('pow', 'argument', LDKF.debugMessage('Argument 1', ['must', 'a'], 'safe number'));

                    // Function
                        // Power
                        function pow(base, exponent) {
                            // Initialization > Result
                            var result = 1;

                            // Logic > Return
                            if (exponent < 0)
                                return 1 / pow(base, -exponent);

                            /* Loop
                                    [while statement]

                                > Update > (Result, Exponent, Base)
                            */
                            while (exponent > 0) {
                                (exponent & 1) && (result *= base);
                                exponent >>= 1;
                                base *= base
                            }

                            // Return
                            return result
                        }

                        // Root
                        function root(base, exponent) {
                            // Initialization > ((Former) Result, EPS, Difference)
                            var formerResult = LDKF.int(LDKF.random() * 10),
                                eps = .001,
                                difference = 2147483647,
                                result;

                            /* Loop
                                    [while statement]

                                > Update > ((Former) Result, Difference)
                            */
                            while (difference > eps) {
                                result = ((exponent - 1) * formerResult + base / pow(formerResult, exponent - 1)) / exponent;
                                difference = LDKF.abs(result - formerResult);
                                formerResult = result
                            }

                            // Return
                            return result
                        }

                    /* Logic
                            [if:else if statement]

                            --- NOTE ---
                                #Lapys: The `root` function is still quirky with the results.

                        > Return
                    */
                    if (LDKF.int(exponent) === exponent)
                        // Return
                        return pow(base, exponent);

                    else if (LDKF.int(1 / exponent) === 1 / exponent)
                        // Return
                        return root(base, 1 / exponent);

                    /* Return
                            --- NOTE ---
                                #Lapys: This is only returned for non-integer exponents
                                    that are not rooted.
                    */
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
                    // Initialization > (Amount, Match, String)
                    var amount = arguments.length > 2 ? arguments[2] : 1,
                        match = LapysJSDevelopmentKit.functions.string(arguments[1]),
                        string = LapysJSDevelopmentKit.functions.string(arguments[0]);

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

                // Replace Character String
                replaceCharString: function replaceCharString() {
                    // Initialization > (Amount, Replacement, Match, String)
                    var amount = arguments.length > 3 ? arguments[3] : 1,
                        replacement = arguments.length > 2 ? LapysJSDevelopmentKit.functions.string(arguments[2]) : '',
                        match = LapysJSDevelopmentKit.functions.string(arguments[1]),
                        string = LapysJSDevelopmentKit.functions.string(arguments[0]);

                    /* Logic
                            [if statement]
                    */
                    if (arguments.length && match) {
                        // Initialization > (Iterator, Length, Stream)
                        var iterator = 0,
                            length = string.length,
                            stream = '';

                        /* Logic
                                [switch:case statement]

                            > Update > Amount
                        */
                        switch (amount) {
                            // All
                            case 'all': amount = length
                        }

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

                                        > Update > (Allow Stream, Amount, Iterator)
                                    */
                                    if (allowStream) {
                                        allowStream = !1;
                                        amount -= 1;
                                        iterator += decrementedMatchLength
                                    }
                                }

                            // Update > Stream
                            character && (allowStream ? stream += character : stream += replacement)
                        }

                        // Return
                        return stream
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
                        // Initialization > (Iterator, Length)
                        var iterator = 0,
                            length = array.length;

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

                        // Logic > Loop > Update > Rend
                        if (length > -1)
                            for (iterator; iterator < arrayLength; iterator += 1)
                                rend[rendIterator += 1] = array[iterator];

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
                trimLeftString: function trimLeftString(string) {
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
                trimRightString: function trimRightString(string) {
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
                trimString: function trimString(string) {
                    // Return
                    return LDKF.trimLeftString(LDKF.trimRightString(string))
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

                // Character Data
                characterData: window.CharacterData,

                /* Clear Timeout
                        --- WARN ---
                            #Lapys: Here, we can only hope that the `clearTimeout` and `setTimeout` functions are native.
                */
                clearTimeout: window.clearTimeout,

                // Date
                date: window.Date,
                    // Prototype
                    datePrototype: window.Date.prototype,

                // Descriptions
                descriptions: {},

                // Document Type
                documentType: window.DocumentType,

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

                // XML HTTP Request
                xmlHttpRequest: window.XMLHttpRequest
            },

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

                    // Get Own Property Descriptor
                    LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor = LapysJSDevelopmentKit.objects.object.getOwnPropertyDescriptor;

                    /* Get Own Property Descriptors
                            --- NOTE ---
                                #Lapys: Credit to MDN (https://gist.github.com/jhermsmeier/9a34b06a107bbf5d2c91)
                    */
                    LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptors = LapysJSDevelopmentKit.objects.object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(){var a=arguments[0],b=arguments[1],c='function'==typeof a.__lookupGetter__&&'function'==typeof a.__lookupSetter__,d=c?a.__lookupGetter__(b)||a.__lookupSetter__(b):null;return null==d?{configurable:!0,writable:!0,enumerable:!0,value:a[b]}:{configurable:!0,enumerable:!0,get:a.__lookupGetter__(b),set:a.__lookupSetter__(b)}};

                    // Keys
                    LapysJSDevelopmentKit.functions.objectKeys = LapysJSDevelopmentKit.objects.object.keys;

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

                        // Document Element
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeDocumentElement = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'documentElement');

                        // HTML Collection
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetElementsByTagName = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'getElementsByTagName');

                        // Query Selector
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQuerySelector = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'querySelector');

                        // Query Selector All
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeQuerySelectorAll = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'querySelectorAll');

                        // Ready State
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeReadyState = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'readyState');

                        // Write
                        LapysJSDevelopmentKit.objects.descriptions.documentPrototypeWrite = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'write');

                // HTML Input Element
                LapysJSDevelopmentKit.objects.htmlInputElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'input').constructor;

                // HTML Script Element
                LapysJSDevelopmentKit.objects.htmlScriptElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'script').constructor;
                    // Prototype
                    LapysJSDevelopmentKit.objects.htmlScriptElementPrototype = LapysJSDevelopmentKit.objects.htmlScriptElement.prototype;

                // HTML Textarea Element
                LapysJSDevelopmentKit.objects.htmlTextareaElement = LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.call(LapysJSDevelopmentKit.objects.descriptions.windowDocument.get.call(window), 'textarea').constructor;

                // Descriptions
                    // HTML Script Element > Prototype
                        // Source
                        LapysJSDevelopmentKit.objects.descriptions.htmlScriptElementPrototypeSrc = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlScriptElementPrototype, 'src');

                // Parameters
                LapysJSDevelopmentKit.objects.parameter = function Parameter() {};
                    // Prototype
                    LapysJSDevelopmentKit.objects.parameterPrototype = LapysJSDevelopmentKit.objects.parameter.prototype;

                // Parameters List
                LapysJSDevelopmentKit.objects.parameterList = function ParameterList() {};
                    // Prototype
                    (LapysJSDevelopmentKit.objects.parameterListPrototype = LapysJSDevelopmentKit.objects.parameterList.prototype).__proto__ = LapysJSDevelopmentKit.objects.arrayPrototype;

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

                // Get
                    // Document > Prototype
                        // All
                        LapysJSDevelopmentKit.functions.get.documentPrototypeAll = function documentPrototypeAll() {
                            // Return
                            return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeAll.get.call(arguments.length ? arguments[0] : LapysJSDevelopmentKit.functions.get.windowDocument())
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
                    // Create Element
                    LapysJSDevelopmentKit.functions.documentPrototypeCreateElement = function documentPrototypeCreateElement() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeCreateElement.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                    // Document Element
                    LapysJSDevelopmentKit.functions.documentPrototypeDocumentElement = function documentPrototypeDocumentElement() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeDocumentElement.get.call(arguments[0])
                    };

                    // Get Elements By Tag Name
                    LapysJSDevelopmentKit.functions.documentPrototypeGetElementsByTagName = function documentPrototypeGetElementsByTagName() {
                        // Return
                        return LapysJSDevelopmentKit.objects.descriptions.documentPrototypeGetElementsByTagName.value.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
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

                    // Set Attribute
                    LapysJSDevelopmentKit.functions.elementPrototypeSetAttribute = function elementPrototypeSetAttribute() {
                        // Return
                        return LapysJSDevelopmentKit.objects.elementPrototypeSetAttribute.apply(arguments[0], LapysJSDevelopmentKit.functions.rendArray(arguments, 1))
                    };

                // Performance > Prototype
                    // Now
                    LapysJSDevelopmentKit.functions.performancePrototypeNow = function performancePrototypeNow() {
                        // Return
                        return LapysJSDevelopmentKit.objects.performancePrototypeNow.call(arguments[0])
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

                // Node
                LapysJSDevelopmentKit.objects.node = LapysJSDevelopmentKit.objects.element.__proto__;
                    // Prototype
                    LapysJSDevelopmentKit.objects.nodePrototype = LapysJSDevelopmentKit.objects.node.prototype || (LapysJSDevelopmentKit.objects.node = window.Node).prototype;

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
                        LapysJSDevelopmentKit.objects.descriptions.elementPrototypeInnerHTML = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.elementPrototype, 'innerHTML');

                    // HTML All Collection > Prototype
                        // Length
                        LapysJSDevelopmentKit.objects.descriptions.htmlAllCollectionPrototypeLength = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlAllCollectionPrototype, 'length');

                    // HTML Collection > Prototype
                        // Length
                        LapysJSDevelopmentKit.objects.descriptions.htmlCollectionPrototypeLength = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.htmlCollectionPrototype, 'length');

                    // Node > Prototype
                        // Child Nodes
                        LapysJSDevelopmentKit.objects.descriptions.nodePrototypeChildNodes = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.nodePrototype, 'childNodes');

                    // Node List > Prototype
                        // Length
                        LapysJSDevelopmentKit.objects.descriptions.nodeListPrototypeLength = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.nodeListPrototype, 'length');

                    // Regular Expression > Prototype
                        // Test
                        LapysJSDevelopmentKit.objects.descriptions.regexPrototypeTest = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.regexPrototype, 'test');

                    // String > Prototype
                        // Match
                        LapysJSDevelopmentKit.objects.descriptions.stringPrototypeMatch = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.stringPrototype, 'match');

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
                    // LapysJS Development Kit
                        // Components
                        LDKF.isArray(LapysJS.components) && (LDK.components = LapysJS.components);

                        // Debug Mode
                        LDK.debugMode = !!LapysJS.debugMode;

                    // Window > LapysJS
                    window.LapysJS = void 0;

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
                            // Group
                            LDKO.consoleGroup = LDKO.console.group;

                            // Group End
                            LDKO.consoleGroupEnd = LDKO.console.groupEnd;

                            // Log
                            LDKO.consoleLog = LDKO.console.log;

                            // Warn
                            LDKO.consoleWarn = LDKO.console.warn;

                        // Descriptions
                            /* Document > Prototype > Current Script
                                    --- NOTE ---
                                        #Lapys: Credit to GitHub (https://github.com/JamesMGreene/document.currentScript)
                            */
                            LDKO.descriptions.documentPrototypeCurrentScript = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.documentPrototype, 'currentScript') || (function(){function b(i){if(i&&LDKF.isString(i)){var j=0,k=LDKF.get.htmlCollectionPrototypeLength(g);for(j;j!=k;j+=1){var l=g[j];if(LDKO.descriptions.htmlScriptElementPrototypeSrc.get.call(l)===i)return l}}}function c(){var k,i=0,j=LDKF.get.htmlCollectionPrototypeLength(g);for(i;i!=j;i+=1)if(!LDKO.descriptions.htmlScriptElementPrototypeSrc.get.call(g[i])){if(k)return;k=g[i]}return k}function d(i,j){var k,l,m,n=LDKF.isNumber(j);return j=n?j:LDKF.isNumber(e.skipStackDepth)?e.skipStackDepth:0,i&&LDKF.isString(i)&&(n?l=LDKO.descriptions.stringPrototypeMatch.value.call(i,/((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/):(l=LDKO.descriptions.stringPrototypeMatch.call(i,/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),!(l&&l[1])&&(l=LDKO.descriptions.stringPrototypeMatch.call(i,/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),l&&l[1]&&(k=l[1]))),l&&l[1]&&(0<j?(m=LDKF.rendString(i,LDKF.indexOfString(i,l[0])+l[0].length),k=d(m,j-1)):k=l[1])),k}function e(){var i=LDKF.get.htmlCollectionPrototypeLength(g);if(i){if(1==i)return g[0];if('readyState'in g[0])for(var j=i;j;)if('interactive'==g[j-=1].readyState)return g[j];if('loading'==LDKO.descriptions.documentPrototypeReadyState.get.call(LDKF.get.windowDocument()))return g[i-1];try{throw new LDKO.error}catch(m){var k=d(m.stack),l=b(k);l||k!=h||(l=c())}return l}}var f=LDKF.get.windowDocument(),g=LDKF.documentPrototypeGetElementsByTagName(LDKF.get.windowDocument(),'script'),h=location.href;return e.skipStackDepth=1,{configurable:!0,enumerable:!0,get:e}})();

                        // Get Computed Style
                        LDKO.getComputedStyle = window.getComputedStyle;

                        // Function > Prototype
                            // Bind
                            LDKO.funcPrototypeBind = LDKO.funcPrototype.bind;

                        // Navigator
                        LDKO.navigator = navigator.constructor;
                            // Prototype
                            LDKO.navigatorPrototype = LDKO.navigator.prototype;

                        // Descriptions
                            // Navigator > Prototype > User Agent
                            LapysJSDevelopmentKit.objects.descriptions.navigatorPrototypeUserAgent = LapysJSDevelopmentKit.functions.objectGetOwnPropertyDescriptor(LapysJSDevelopmentKit.objects.navigatorPrototype, 'userAgent');

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

                        // Get
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

                        /* Query Line
                                --- CHECKPOINT ---
                                --- NOTE ---
                                    #Lapys: Built on a whim. Returns the source code of the current line that executes this method.
                        */
                        LDKF.queryLine = function queryLine() {};

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

                        // Set
                            // Element > Prototype
                                // Inner HTML
                                LDKF.set.elementPrototypeInnerHTML = function elementPrototypeInnerHTML() {
                                    // Return
                                    return LDKO.descriptions.elementPrototypeInnerHTML.set.call(arguments[0], arguments[1])
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
                        --- CHECKPOINT ---
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

                            // Application --- CHECKPOINT ---

                            // Array
                            window.array = function array(arg) {
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
                                    LDKF.iterateObject(LDKR.browser, function(key, value, description) { LDKF.objectDefineProperty(browser, key, description) });

                                    // Return
                                    return browser
                                })()
                            });

                            // Cancel On DOM Element Added --- CHECKPOINT ---
                            LDKF.objectDefineProperty(window, 'cancelOnDOMElementAdded', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: function cancelOnDOMElementAdded() {}
                            })
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

                        // Loop > Clear Timeout
                        while (timeoutIndex != timeoutStart)
                            LDKF.clearTimeout(timeoutIndex -= 1);

                        // Console > (...)
                        LDKF.consoleGroup('LapysJS | ' + LDKO.descriptions.htmlScriptElementPrototypeSrc.get.call(LapysJS.script) + ' (by ' + AUTHOR + ')');
                            LDKF.consoleLog('     LapysJS.processingDuration =', LapysJS.totalProcessingDuration);
                            LDKF.consoleLog('     LapysJS.ready =', !0);
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
                    LDKF.objectDefineProperty(LapysJS, 'processingDuration', {value: {}});

            /* Error Handling
                    --- NOTE ---
                        #Lapys: Begin building the library, not just the LDK.
            */
                // {Initialization}
                try {
                    // Initialization > Start Timestamp
                    var startTimestamp = LDKF.performancePrototypeNow(LDKF.get.windowPerformance());

                    // Update > Current Phase
                    CURRENT_PHASE = 'initialization';

                    // Initialization
                    INIT();

                    // Modification > (LapysJS > Processing Duration) > Initialization
                    LapysJS.processingDuration.init = LDKF.performancePrototypeNow(LDKF.get.windowPerformance()) - startTimestamp
                } catch (error) {
                    // Error
                    throw LDKF.error('Error in installation process: ' + error.message)
                }

                // {Update}
                try {
                    // Initialization > Start Timestamp
                    var startTimestamp = LDKF.performancePrototypeNow(LDKF.get.windowPerformance());

                    // Update > Current Phase
                    CURRENT_PHASE = 'update';

                    // Update
                    UPDATE();

                    // Modification > (LapysJS > Processing Duration) > Update
                    LapysJS.processingDuration.update = LDKF.performancePrototypeNow(LDKF.get.windowPerformance()) - startTimestamp
                } catch (error) {
                    // Error
                    throw LDKF.error('Error in update process: ' + error.message)
                }

                // {Terminate}
                try {
                    // Initialization > Start Timestamp
                    var startTimestamp = LDKF.performancePrototypeNow(LDKF.get.windowPerformance());

                    // Update > Current Phase
                    CURRENT_PHASE = 'termination';

                    // Terminate
                    TERMINATE();

                    // Modification > (LapysJS > Processing Duration) > Terminate
                    LapysJS.processingDuration.terminate = LDKF.performancePrototypeNow(LDKF.get.windowPerformance()) - startTimestamp
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
