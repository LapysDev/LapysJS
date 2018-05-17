/** Function > Main
    @author: Lapys Dev Team
    @description: LapysJS is a JavaScript library designed to challenge the status quo of the JavaScript language and its other related vendors.
    @version: 0.0.3
    @url: https://github.com/LapysDev/LapysJS

    --- NOTE ---
        #lapys:
            - The Main function will return `1` if there`s an error and `0` if it ran successfully.
            - `1` represents an object (such as an error) being returned by this function.

    --- RULES ---
        #lapys:
            - All event callbacks will not be arrow functions and will use the `event` parameter if necessary.
            - Avoid use of the `for... in` statement for arrays.
            - Do not use ambiguous function or variable names e.g.: `aFunctionWithAReallyLongFunctionName`.
            - Do not use custom LapysJS functions and variables within the LapysJS Script.
            - Do not use template strings from ES6 and above.
            - Do not use the `__proto__` syntax, defer to the `constructor.prototype` set instead — unless required.
            - Do not use the `~` syntax for basic arithmetic.
            - Intentional errors allowed in an `eval` function:
                'error 001'
            - Opt for using `!` rather than `!!` when convenient.
            - The use of function parameters are heavily restricted.
*/
(function Main(args) {
    /* {Global Object Test} Logic
            [if statement]

            --- NOTE ---
                #lapys: Stop all processing if the
                    global object is not truthy.

        > Return
    */
    if (!window)
        return 1;

    /* {Browser Compatibility Test} Error Handling
            --- NOTE ---
                #lapys: Syntaxes that must be available for use
                    so LapysJS can initialize and install correctly.
    */
    try {
        /* {Evaluation Function} Evaluate
                --- NOTE ---
                    #lapys: The `eval` method must be defined.
        */
        eval;

        /* {Evaluation Function Variable} Error
                --- NOTE ---
                    #lapys: The `eval` method must be a function.
        */
        if (typeof eval != 'function') throw new Error;

        // Execution
            // {Alternative for Statement}
            eval('(function() { for(;1;) continue })');

            // {Arrow Functions}
            eval('a => b');

            // {Implied Object Reference}
            eval('typeof a');

            // {Default Function Parameters}
            eval('(function(a = 0) {})');

            // {delete Keyword}
            eval('0 || delete ({a: 0}).a');

            // {in Keyword}
            eval("'a' in window");

            // {Memory Allocation}
            eval("if (typeof (({}).a = 0, function() { const b = 1; let c = 2; }) != 'function') throw new Error");

            // {'Self'-Executing Functions}
            eval('(a => {return})()');

            // {Spread Operator}
            eval('[...[]]')
    }

    catch (error) {
        /* Execution > Error
                --- NOTE ---
                    #lapys: Prevent compressors and minifiers
                        from truncating the error type.
        */
        eval('throw new (class LapysJSError extends Error { constructor() { super("LapysJS is not compatible with this browser.\\n\\t" + error.message + "\\r") } })')
    }

    /* Global Data */
        // LapysJS Development Kit
        const LapysJSDevelopmentKit = new (class LapysJSDevelopmentKit extends (class DevelopmentKit {}) {
            // Constructor
            constructor() {
                // Super
                super();

                // Initialization > (Target, (...))
                let that = this,
                    objectDefProp = Object.defineProperty,
                    $that = that.constructor.prototype;

                // Modification > Target
                    // Constants
                    objectDefProp($that, 'constants', {
                        // Value
                        value: new (class LapysJSDevelopmentKitConstants extends (class Constants {}) {
                            // Constructor
                            constructor() {
                                // Super
                                super();

                                // Initialization > Target
                                let that = this;

                                // Modification > Target
                                    // Animation Tick Speed
                                    objectDefProp(that, 'ANIMATION_TICK_SPEED', {value: 1 / 60});

                                    // Character Array
                                    objectDefProp(that, 'CHAR_ARRAY', {value: [
                                        // Alpha-numerals
                                        '0123456789abcdefghijklmnopqrstuvwxyz',

                                        // Special Characters
                                        '~!@#$%^&*()_{}|:"<>?[]\\;\',./*-+'
                                    ]});

                                    // Clipboard
                                    objectDefProp(that, 'CLIPBOARD', {value: new (class LapysJSClipboard { constructor() { this.content = args[0] } })});

                                    // Metrics Table
                                    objectDefProp(that, 'METRICS_TABLE', {
                                        // Value
                                        value: {
                                            // Angle
                                            angle: [
                                                'deg', 'degree', 'degrees',
                                                'grad',
                                                'rad',
                                                'turn'
                                            ],

                                            // CSS Unit
                                            css: [
                                                'ch',
                                                'em', 'rel unit', 'rel unit', 'relative unit', 'relative units',
                                                'ex', 'x height', 'x-height',
                                                'pc', 'pica', 'picas',
                                                'pixel', 'pixels', 'px',
                                                'point', 'points', 'pt',
                                                'rem', 'root em', 'root rel unit', 'root rel units', 'root relative unit', 'root relative units',
                                                'viewport height', 'vh',
                                                'viewport max', 'viewport maximum', 'vmax',
                                                'viewport min', 'viewport minimum', 'vmin',
                                                'viewport width', 'vw'
                                            ],

                                            // Distance
                                            distance: [
                                                'centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm',
                                                'feet', 'ft', 'foot',
                                                'in', 'inch', 'inches', 'inchs',
                                                'kilometer', 'kilometers', 'kilometre', 'kilometres', 'km',
                                                'm', 'meter', 'meters', 'metre', 'metres',
                                                'mile', 'miles', 'mi',
                                                'millimeter', 'millimeters', 'millimetre', 'millimetres', 'mm',
                                                'pc', 'pica', 'picas',
                                                'pixel', 'pixels', 'px',
                                                'yard', 'yards', 'yd'
                                            ],

                                            // Frequency
                                            frequency: [
                                                'Hertz', 'hz', 'Hz',
                                                'khz', 'kHz', 'kiloHertz', 'kilo Hertz'
                                            ],

                                            // Metric Prefixes
                                            metricPrefixes: [
                                                'centi',
                                                'deci',
                                                'deka',
                                                'giga',
                                                'hecto',
                                                'kilo',
                                                'mega',
                                                'micro', 'milli',
                                                'nano',
                                                'tera'
                                            ],

                                            // Resolution
                                            resolution: [
                                                'densityPerCentimeter', 'densityPerCentimeters', 'densityPerCentimetre', 'densityPerCentimetres', 'density per centimeter', 'density per centimeters', 'density per centimetre', 'density per centimetres', 'dpcm',
                                                'densityPerInch', 'densityPerInches', 'density per inch', 'density per inches', 'dpi',
                                                'densityPerPixel', 'densityPerPixels', 'density per pixel', 'density per pixels', 'dppx'
                                            ],

                                            // Speed
                                            speed: [
                                                'meters per second', 'metres per second', 'm/s',
                                                'miles per hour', 'mph'
                                            ],

                                            // Temperature
                                            temperature: [
                                                'celsius', 'Celsius', 'degree celsius', 'degrees celsius', 'C', '°C',
                                                'degree fahrenheit', 'degrees fahrenheit', 'fahrenheit', 'Fahrenheit', 'F', '°F',
                                            ],

                                            // Time
                                            time: [
                                                'century', 'centuries',
                                                'day', 'days', 'dy', 'dys',
                                                'decade', 'decades',
                                                'hour', 'hours', 'hr', 'hrs',
                                                'millennia', 'millennium', 'millennium', 'millenary',
                                                'millisecond', 'milliseconds', 'ms', 'msec', 'msecs',
                                                'min', 'mins', 'minute', 'minutes',
                                                'mo', 'month', 'months',
                                                's', 'sec', 'secs', 'second', 'seconds',
                                                'week', 'weeks', 'wk', 'wks',
                                                'year', 'years', 'yr'
                                            ],

                                            // Volume
                                            volume: [
                                                'bushel', 'bushels',
                                                'c', 'cup', 'cups',
                                                'fl oz', 'fluid ounce', 'fluid ounces',
                                                'gal', 'gallon', 'gallons',
                                                'liter', 'liters', 'litre', 'litres', 'l', 'L',
                                                'milliliter', 'milliliters', 'millilitre', 'millilitres', 'ml', 'mL',
                                                'peck', 'pecks',
                                                'pint', 'pints', 'pt',
                                                'qt', 'quart', 'quarts',
                                                'tablespoon', 'tablespoons', 'tbsp',
                                                'teaspoon', 'teaspoons', 'tsp'
                                            ],

                                            // Weight
                                            weight: [
                                                'g', 'gram', 'grams',
                                                'kilogram', 'kilograms', 'kg',
                                                'lb', 'pound', 'pounds',
                                                'metric ton', 'metric tons', 't', 'ton', 'tons',
                                                'milligram', 'milligrams', 'mg',
                                                'ounce', 'ounces', 'oz',
                                                't', 'ton', 'tons'
                                            ]
                                        }
                                    });

                                    // Features
                                    objectDefProp(that, 'FEATURES', {
                                        // Value
                                        value: {
                                            // Active
                                            active: [],

                                            // Value
                                            value: ['data-focus', 'html-javascript']
                                        }
                                    });

                                    // Regular Expression Set
                                    objectDefProp(that, 'REGEX_SET', {value: '�'});

                                    // Version
                                    objectDefProp(that, 'VERSION', {value: '0.0.3'})
                            }
                        })
                    })
            }
        }),

        // Temporary Data
        tmp = new (function LapysJSTemporaryData() {
            // Initialization > Target
            let that = this;

            // Modification > Target
                // Element
                that.element = document.createElement('lapysjs-element');

                // Object
                that.object = new (function() {});

                // Objects
                that.objects = {
                    // Coordinates
                    coordinates: [0, 0]
                };

                // Temporary Data
                that.tmp = void 0;

                // Value
                that.value = Number()
        });

    /* Function */
        /* Initialize
                --- NOTE ---
                    #lapys: Install the library.
        */
        function init(window, global, document, undefined, tmp) {
            // Error Handling
            try {
                /* {Library Pre-installation Test} Logic
                        [if statement]

                        --- NOTE ---
                            #lapys: Prevent the library from reinstalling itself.
                */
                if (typeof LapysJS == 'undefined') {
                    /* Global Data */
                        // LapysJS Development Kit
                        const LDK = this,

                        // Maximum Call Stack Size
                        maximumCallStackSize = (tmp.value = 0, function main() {
                            /* Error Handling
                                    --- NOTE ---
                                        #lapys: Overload the given stack
                                            to get it`s size.
                            */
                            try {
                                // Update > Temporary Data > Value
                                tmp.value += 1;

                                // Main
                                main()
                            } catch (error) {}

                            // Return
                            return tmp.value
                        })(),

                        // Processing Time
                        processingTime = tmp.processingTime = (function() {
                            // Error Handling > Return
                            try { return performance.now() }
                            catch (error) { return ((window.performance=window.performance||{}).now=function now(){return Date.now?Date.now():+new Date;(function(){if(!1=="performance"in window&&(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!1=="now"in window.performance){var a=Date.now();performance.timing&&performance.timing.navigationStart&&(a=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-a}}})()})(); }
                        })();

                    /* Cache/ Polyfill */
                        // Modification > LapysJS Development Kit
                            // Attribute
                            LDK.attr = Attr;
                                // Prototype
                                LDK.attrProto = LDK.attr.prototype;

                            // Boolean
                            LDK.bool = Boolean;
                                // Prototype
                                LDK.boolProto = LDK.bool.prototype;

                            // Create Element
                            LDK.createElement = function createElement() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data, metadata;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // LapysJS > Error
                                    LDK.isString(args[0]) || LapysJS.error(args[0], 'must', 'string');

                                    /* Logic
                                            [if statement]

                                        > Update > (Metadata, Arguments)
                                    */
                                    if (args[0][0] == ':') {
                                        metadata = LDK.true;
                                        args[0] = args[0].slice(':'.length)
                                    }

                                    // Update > Arguments
                                    (args[0] != '*') || (args[0] = LDK.randomElementList.randomElement);

                                    // Error Handling
                                    try {
                                        // Update > Data
                                        data = document.createElement(args[0])
                                    } catch (error) {
                                        // LapysJS > Warn
                                        LapysJS.warn(args[0], 'must', 'valid element tag name');

                                        // Return
                                        return LDK.null
                                    }

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i of args)
                                        /* Logic
                                                [if statement]
                                        */
                                        if (LDK.isObject(i)) {
                                            /* Loop
                                                    [for:in statement]

                                                > (...)
                                            */
                                            for (let j in i)
                                                j in data ? (LDK.isObject(i[j]) ? (function() {
                                                    /* Loop
                                                            [for:in statement]

                                                        > Update > Data
                                                    */
                                                    for (let k in i[j])
                                                        data[j][k] = i[j][k]
                                                })() : data[j] = i[j]) : data[j] = i[j];

                                            // Break
                                            break
                                        }

                                    // Update > Arguments
                                    args = (function(a){for(let i in a)a[i]=LDK.string(a[i]);return a})(args.filter(a=>{return!LDK.isObject(a)})).slice(1);

                                    /* Logic
                                            [if statement]
                                    */
                                    if (args.length)
                                        /* Logic
                                                [if:else statement]

                                            > Modification > Data
                                        */
                                        if (args.length < 2 && metadata)
                                            // Inner HTML
                                            data.innerHTML = args[0];

                                        else {
                                            // Inner HTML, Selector
                                            (args.length < 2) || (data.innerHTML = args[1]);
                                            data.selector = args[0]
                                        }

                                    // Return
                                    return data
                                }

                                // Return
                                return LDK.null
                            };

                            // Document
                            LDK.doc = Document;
                            LDK.$doc = document;
                                // Create Attribute
                                LDK.docCreateAttr = (function() {let a=LDK.$doc.createAttribute;return(function createAttribute(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Create Comment
                                LDK.docCreateComment = (function() {let a=LDK.$doc.createComment;return(function createComment(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Create Document Fragment
                                LDK.docCreateDocFrag = (function() {let a=LDK.$doc.createDocumentFragment;return(function createDocumentFragment(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Create Element
                                LDK.docCreateEle = (function() {let a=LDK.$doc.createElement;return(function createElement(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Create Event
                                LDK.docCreateEvent = (function() {let a=LDK.$doc.createEvent;return(function createEvent(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Create Range
                                LDK.docCreateRange = (function() {let a=LDK.$doc.createRange;return(function createRange(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Create Text Node
                                LDK.docCreateText = (function() {let a=LDK.$doc.createTextNode;return(function createTextNode(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Execute Command
                                LDK.docExecCom = (function() {let a=LDK.$doc.execCommand;return(function execCommand(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Get Elements By Class Name
                                LDK.docGetEleByClass = (function() {let a=LDK.$doc.getElementsByClassName;return(function getElementsByClassName(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Get Element By ID
                                LDK.docGetEleByID = (function() {let a=LDK.$doc.getElementById;return(function getElementById(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Get Elements By Tag Name
                                LDK.docGetEleByTag = (function() {let a=LDK.$doc.getElementsByTagName;return(function getElementsByTagName(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Prototype
                                LDK.docProto = LDK.doc.prototype;

                                // Query Command Enabled
                                LDK.docQueComEnabled = (function() {let a=LDK.$doc.queryCommandEnabled;return(function queryCommandEnabled(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Query Command Supported
                                LDK.docQueComSupported = (function() {let a=LDK.$doc.queryCommandSupported;return(function queryCommandSupported(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Query Selector
                                LDK.docQueSel = (function() {let a=LDK.$doc.querySelector;return(function querySelector(){return a.apply(LDK.$doc, [...arguments])})})();

                                // Query Selector All
                                LDK.docQueSelAll = (function() {let a=LDK.$doc.querySelectorAll;return(function querySelectorAll(){return a.apply(LDK.$doc, [...arguments])})})();

                            // Document Fragment
                            LDK.docFrag = DocumentFragment;
                                // Prototype
                                LDK.docFragProto = LDK.docFrag.prototype;

                            // Documents
                            LDK.docs = [LDK.doc, LDK.docFrag];
                                // Prototype
                                LDK.docsProto = [LDK.docProto, LDK.docFragProto];

                            // Error
                            LDK.err = Error,
                                // Prototype
                                LDK.errProto = LDK.err.prototype;

                            // False
                            LDK.false = !1;

                            // File
                            LDK.file = File;
                                // Prototype
                                LDK.fileProto = LDK.file.prototype;

                            // HTML All Collection
                            LDK.htmlAllCollection = HTMLAllCollection;
                                // Prototype
                                LDK.htmlAllCollectionProto = LDK.htmlAllCollection.prototype;

                            // HTML Collection
                            LDK.htmlCollection = HTMLCollection;
                                // Prototype
                                LDK.htmlCollectionProto = LDK.htmlCollection.prototype;

                            // HTML Document
                            LDK.htmlDoc = HTMLDocument;
                                // Prototype
                                LDK.htmlDocProto = LDK.htmlDoc.prototype;

                            // HTML Element
                            LDK.htmlEle = HTMLElement;
                                // Prototype
                                LDK.htmlEleProto = LDK.htmlEle.prototype;

                            // HTML Input Element
                            LDK.htmlInputEle = HTMLInputElement;
                                // Prototype
                                LDK.htmlInputEleProto = LDK.htmlInputEle.prototype;

                            // HTML Table Element
                            LDK.htmlTableEle = HTMLTableElement;
                                // Prototype
                                LDK.htmlTableEleProto = LDK.htmlTableEle.prototype;

                            // HTML Text Area Element
                            LDK.htmlTextAreaEle = HTMLTextAreaElement;
                                // Prototype
                                LDK.htmlTextAreaEleProto = LDK.htmlTextAreaEle.prototype;

                            // Named Node Map
                            LDK.namedNodeMap = NamedNodeMap;
                                // Prototype
                                LDK.namedNodeMapProto = LDK.namedNodeMap.prototype;

                            // Number
                            LDK.number = Number;
                                // Is Finite
                                LDK.numberIsFinite = function isFinite() { return LDK.number.isFinite.apply(LDK.number, [...arguments]) };

                                // Is Not A Number
                                LDK.numberIsNaN = function isNaN() { return LDK.number.isNaN.apply(LDK.number, [...arguments]) };

                                // Is Infinite
                                LDK.numberIsInfinite = (function() { return arguments[0]+'' == 'NaN' ? LDK.false : !LDK.numberIsFinite.apply(LDK.number, [...arguments]) });

                                // Is Safe Integer
                                LDK.numberIsSafeInteger = function isFinite() { return LDK.number.isSafeInteger.apply(LDK.number, [...arguments]) };

                                // Max Safe Integer
                                LDK.numberMaxSafeInt = LDK.number.MAX_SAFE_INTEGER;

                                // Max Value
                                LDK.numberMaxVal = LDK.number.MAX_VALUE;

                                // Min Safe Integer
                                LDK.numberMinSafeInt = LDK.number.MIN_SAFE_INTEGER;

                                // Min Value
                                LDK.numberMinVal = LDK.number.MIN_VALUE;

                                // Parse Float
                                LDK.numberParseFloat = function parseFloat() { return LDK.number.parseFloat.apply(LDK.number, [...arguments]) };

                                // Parse Integer
                                LDK.numberParseInt = function parseInt() { return LDK.number.parseInt.apply(LDK.number, [...arguments]) };

                                // Parse Measurement
                                LDK.numberParseMeasurement = function parseMeasurement() { return LDK.number.parseMeasurement.apply(LDK.number, [...arguments]) };

                                // Parse Number
                                LDK.numberParseNumber = function parseNumber() { return LDK.number.parseNumber.apply(LDK.number, [...arguments]) };

                                // Prototype
                                LDK.numberProto = LDK.number.prototype;

                            // Infinity
                            LDK.infinity = LDK.number.POSITIVE_INFINITY || 1 / 0;

                            // Object
                            LDK.object = Object;
                                // Create
                                LDK.objectCreate = LDK.object.create;

                                // Define Properties
                                LDK.objectDefProps = LDK.object.defineProperties;

                                // Define Property
                                LDK.objectDefProp = LDK.object.defineProperty;

                                // Get Own Property Descriptor
                                LDK.objectGetOwnPropDesc = LDK.object.getOwnPropertyDescriptor;

                                // Get Own Property Descriptors
                                LDK.objectGetOwnPropDescs = LDK.object.getOwnPropertyDescriptors;

                                // Keys
                                LDK.objectKeys = LDK.object.keys;

                                // Prototype
                                LDK.objectProto = LDK.object.prototype;

                                // Assign
                                (typeof LDK.object.assign=='function')||LDK.objectDefProp(LDK.object,'assign',{configurable:LDK.true,value:function assign(){'use strict';if(arguments[0]==null)throw LDK.typeError('Cannot convert undefined or null to object');var to=LDK.object(arguments[0]);for(var index=1;index<arguments.length;index+=1){var nextSource=arguments[index];if(nextSource!=null)for(var nextKey in nextSource){if(LDK.objectProto.hasOwnProperty.call(nextSource,nextKey))to[nextKey]=nextSource[nextKey]}return to}},writable:LDK.true});
                                LDK.objectAssign = LDK.object.assign;

                                // Is
                                (typeof LDK.object.is=='function')||(LDK.object.is=function is(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b});
                                LDK.objectIs = LDK.object.is;

                                // Value
                                (typeof LDK.object.values=='function')||LDK.objectDefProp(LDK.object,'values',{configurable:LDK.true,value:function values(e){let a=e,b=LDK.objectKeys(a),c=[];for(let d of b)c.push(a[d]);return c},writable:!0});
                                LDK.objectValues = LDK.object.values;

                            // Null
                            LDK.null = null;

                            // Type Error
                            LDK.typeError = TypeError;
                                // Prototype
                                LDK.typeErrorProto = LDK.typeError.prototype;

                            // Undefined
                            LDK.undefined = void 0;

                            // Array
                            LDK.array = Array;
                                // From
                                (typeof LDK.array.from=='function')||LDK.objectDefProp(LDK.array,'from',{value:function from(){var a=LDK.objectProto.toString,b=function(f){return'function'==typeof f||'[object Function]'===a.call(f)},c=function(f){var g=+f;return LDK.numberIsNaN(g)?0:0!=g&&LDK.numberIsFinite(g)?(0<g?1:-1)*Math.floor(Math.abs(g)):g},d=Math.pow(2,53)-1,e=function(f){var g=c(f);return Math.min(Math.max(g,0),d)};return function(g){var h=this,i=LDK.object(g);if(null==g)throw new LDK.typeError('Array.from requires an array-like object - not null or undefined');var l,j=1<arguments.length?arguments[1]:LDK.undefined;if('undefined'!=typeof j){if(!b(j))throw new typeError('Array.from: when provided, the second argument must be a function');2<arguments.length&&(l=arguments[2])}for(var p,m=e(i.length),n=b(h)?LDK.object(new h(m)):LDK.array(m),o=0;o<m;)p=i[o],n[o]=j?'undefined'==typeof l?j(p,o):j.call(l,p,o):p,o+=1;return n.length=m,n}}(),writable:LDK.true});
                                LDK.arrayFrom = LDK.array.from;

                                // Prototype
                                LDK.arrayProto = LDK.array.prototype;
                                    // Index Of
                                    (typeof LDK.arrayProto.indexOf=='function')||LDK.objectDefProp(LDK.arrayProto,'indexOf',{value:function indexOf(){if(this===LDK.null)throw LDK.typeError("'this' is null or not defined");var a,c=LDK.object(this),b=c.length>>>0;if(0===b)return -1;a=LDK.numberParseFloat(arguments[1])||0;LDK.infinity===Math.abs(a)&&(a=0);if(a>=b)return -1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===arguments[0])return a;a += 1}return -1},writable:LDK.true});

                                    // Last Index Of
                                    (typeof LDK.arrayProto.lastIndexOf=='function')||LDK.objectDefProp(LDK.arrayProto,'lastIndexOf',{value:function lastIndexOf(){if(this===LDK.undefined||this===LDK.null)throw LDK.typeError("'this' is null or not defined");var n,k,t=LDK.object(this),len=t.length>>>0;if(len===0){return -1}n=len-1;if(arguments.length>1){n=LDK.number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==(1/0)&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}}for(k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k -= 1){if(k in t&&t[k]===arguments[0]){return k}}return -1},writable: LDK.true});

                            // Element
                            LDK.ele = Element;
                                // Prototype
                                LDK.eleProto = LDK.ele.prototype;

                                // Text Content
                                LDK.objectDefProp&&LDK.objectGetOwnPropDesc&&LDK.objectGetOwnPropDesc(LDK.eleProto,'textContent')&&!LDK.objectGetOwnPropDesc(LDK.eleProto,'textContent').get&&function(){var a=LDK.objectGetOwnPropDesc(LDK.eleProto,'innerText');LDK.objectDefProp(LDK.eleProto,'textContent',{get:function(){return a.get.call(this)},set:function(b){return a.set.call(this,b)}})}();

                            // Event
                            LDK.event = Event;
                                // Prototype
                                LDK.eventProto = LDK.event.prototype;

                            // Event Target
                            LDK.eventTarget = EventTarget;
                                // Prototype
                                LDK.eventTargetProto = LDK.eventTarget.prototype;

                            // Function
                            LDK.func = Function;
                                // Prototype
                                LDK.funcProto = LDK.func.prototype;
                                    // Bind
                                    (typeof LDK.funcProto=='function')||LDK.objectDefProp(LDK.funcProto,'bind',{value:function bind(){var a;try{a=eval('(function(){return('+this+')})()')}catch(e){a=this}return a}});

                            // Math
                                // Cube Root
                                'cbrt'in LDK.object(Math)||(Math.cbrt=function cbrt(a){var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b});

                            // Mutation Observer
                            !(typeof MutationObserver!='function'&&typeof WebKitMutationObserver=='function')||LDK.objectDefProp(window,'MutationObserver',{value:WebKitMutationObserver});

                            // Node
                            LDK.node = Node;
                                // Prototype
                                LDK.nodeProto = LDK.node.prototype;

                            // Node List
                            LDK.nodeList = NodeList;
                                // Prototype
                                LDK.nodeListProto = LDK.nodeList.prototype;

                            // Not A Number
                            LDK.nan = NaN;

                            // Promise
                            LDK.promise = Promise,
                                // Prototype
                                LDK.promiseProto = (LDK.promise || tmp).prototype,

                            // Reference Error
                            LDK.refError = ReferenceError;
                                // Prototype
                                LDK.refErrorProto = LDK.refError.prototype;

                            // Regular Expression
                            LDK.regex = RegExp;
                                // Prototype
                                LDK.regexProto = LDK.regex.prototype;

                            // String
                            LDK.string = String;
                                // Prototype
                                LDK.stringProto = LDK.string.prototype;

                            // Symbol
                            LDK.symbol = Symbol;
                                // Prototype
                                LDK.symbolProto = LDK.symbol.prototype;

                            // Text
                            LDK.text = Text;
                                // Prototype
                                LDK.textProto = LDK.text.prototype;

                            // True
                            LDK.true = !0;

                            // Window
                            LDK.window = Window;
                                // Prototype
                                LDK.windowProto = LDK.window.prototype

                    /* Function */
                        // Modification > LapysJS Development Kit
                            // Custom Event
                            LDK.customEvent = function customEvent() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = LDK.string(args[0]),
                                    metadata = args[1];

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (args.length) {
                                    // Error Handling
                                    try { eval('(function ' + data + '() {})') } catch (error) { return new Event('') }

                                    // Initialization > Alpha
                                    let alpha = (function() {
                                        // Initialization > (Metadata, Alpha, Beta)
                                        let metadata = LDK.namedObject(data[0].toUpperCase() + data.slice(data[0].length) + 'Event'),
                                            _metadata = metadata.constructor.prototype,
                                            alpha = LDK.eventProto,
                                            beta = new Event('');

                                        /* Loop
                                                Index Alpha.

                                            > Error Handling
                                        */
                                        for (let i in alpha)
                                            try {
                                                // Modification > Metadata > [Loop Counter]
                                                _metadata[i] = alpha[i]
                                            }

                                            catch (error) {
                                                // Modification > Metadata > [Loop Counter]
                                                metadata[i] = beta[i]
                                            }

                                        // Modification > Metadata
                                            // Type
                                            metadata.type = data;

                                            // (...)
                                            metadata.__proto__ = LDK.objectCreate(alpha);

                                        // Return
                                        return metadata
                                    })();

                                    /* Loop
                                            Index Metadata.

                                        > Modification > Alpha > [Loop Iterator]
                                    */
                                    for (let i in metadata)
                                        alpha[i] = metadata[i];

                                    // Return
                                    return alpha
                                }

                                // Return
                                return new Event('')
                            };

                            // Get Constructor
                            LDK.getConstructor = function getConstructor() {
                                // Return
                                return LDK.isNonConstructible(arguments[0]) ? tmp.object : arguments[0].constructor
                            };

                            // Get Empty HTML Collection
                            LDK.getEmptyHTMLCollection = function getEmptyHTMLCollection() {
                                // Return
                                return (()=>{let a='a',b=LDK.docGetEleByTag(a);while(b.length)b=LDK.docGetEleByTag(a+='a');return b})()
                            };

                            // Get Empty Node List
                            LDK.getEmptyNodeList = function getEmptyNodeList() {
                                // Return
                                return (()=>{let a='a',b=LDK.docQueSelAll(a);while(b.length)b=LDK.docQueSelAll(a+='a');return b})()
                            };

                            // Get Event Coordinate
                            LDK.getEventCoord = function getEventCoord() {
                                // Initialization > (Arguments, Data, Metadata, Alpha)
                                let args = [...arguments],
                                    data = LDK.namedArray('EventCoordinatesList'),
                                    metadata = event || new Event(''),
                                    alpha = 0;

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push((function() {
                                        /* Logic
                                                [switch:case statement]

                                            > Return
                                        */
                                        switch (data.true) {
                                            // X
                                            case i == 0 || LDK.string(i).toLowerCase() == 'x':
                                                return 'clientX' in metadata ? metadata.clientX : (isArrayLike(metadata.changedTouches) ? metadata.changedTouches[0].clientX : alpha);
                                                break;

                                            // Y
                                            case i == 1 || LDK.string(i).toLowerCase() == 'y':
                                                return 'clientY' in metadata ? metadata.clientY : (isArrayLike(metadata.changedTouches) ? metadata.changedTouches[0].clientY : alpha);
                                                break;

                                            // Z
                                            case i == 2 || LDK.string(i).toLowerCase() == 'z':
                                                return alpha
                                        }
                                    })());

                                // Return
                                return data.length > 1 ? data : data[0]
                            };

                            // Get Event Target
                            LDK.getEventTarget = function getEventTarget() {
                                // Return
                                return event.target || event.srcElement || event.originalTarget
                            };

                            // Get Safe Random String
                            LDK.getSafeRandomString = function getSafeRandomString() {
                                // Return
                                return LDK.constants.REGEX_SET.randomize()
                            };

                            // Get Source Code
                            LDK.getSourceCode = function getSourceCode() {
                                // Initialization > Data
                                let data = arguments[0];

                                // Return
                                return LDK.isFunction(data) ? data + '' : LDK.null
                            };

                            // Is Array
                            LDK.isArray = function isArray() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.array && typeof i == 'object') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Array-Like
                            LDK.isArrayLike = function isArrayLike() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(
                                        LDK.isConstructible(i) ? (
                                            (
                                                i.constructor == LDK.array ||
                                                i.constructor == LDK.htmlAllCollection ||
                                                i.constructor == LDK.htmlCollection ||
                                                i.constructor == LDK.nodeList
                                            )
                                        ) : LDK.false
                                    );

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Boolean
                            LDK.isBool = function isBool() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.bool && typeof i == 'boolean') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Constructible
                            LDK.isConstructible = function isConstructible() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(i !== LDK.null && i !== LDK.undefined);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Document
                            LDK.isDocument = function isDocument() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? ((i.constructor == LDK.doc || i.constructor == LDK.htmlDoc) && typeof i == 'object') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Document-Like
                            LDK.isDocumentLike = function isDocumentLike() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        (
                                            i.constructor == LDK.doc ||
                                            i.constructor == LDK.docFrag ||
                                            i.constructor == LDK.htmlDoc
                                        ) && typeof i == 'object'
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Element
                            LDK.isElement = function isElement() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        (function(){let a=i.__proto__,b=[];while(a!=LDK.null){b.push(a);a=a.__proto__}return b.indexOf(LDK.eleProto)>-1})() &&
                                        typeof i == 'object'
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Event Target
                            LDK.isEventTarget = function isEventTarget() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        (function(){let a=i.__proto__,b=[];while(a!=LDK.null){b.push(a);a=a.__proto__}return b.indexOf(LDK.eventTargetProto)>-1})() &&
                                        typeof i == 'object'
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // is Executable String
                            LDK.isExecutableString = function isExecutableString() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = [],
                                    metadata = window;

                                /* Loop
                                        Index Arguments.

                                    > Error Handling
                                */
                                for (let i of args)
                                    try {
                                        // Execution
                                        LDK.isString(i) || eval('error 001');

                                        // Execution
                                        eval('(function(){' + i + '})');

                                        // Update > Data
                                        data.push(LDK.true)
                                    } catch (error) {
                                        // Update > Data
                                        data.push(LDK.false)
                                    }

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Function
                            LDK.isFunction = function isFunction() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.func && typeof i == 'function') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Native Function
                            LDK.isNativeFunction = function isNativeFunction() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        ((LDK.getSourceCode(i) || '') + '\n').replace(/\/\/[^\n]{0,}\n|(\/\*[^\*]{0,}\*\/|\/\*[^\/]{0,}\*\/)/g, '').indexOf('[native code]') > -1 &&
                                        LDK.isFunction(i) &&
                                        typeof i == 'function'
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Node
                            LDK.isNode = function isNode() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        (function(){let a=i.__proto__,b=[];while(a!=LDK.null){b.push(a);a=a.__proto__}return b.indexOf(LDK.nodeProto)>-1})() &&
                                        typeof i == 'object'
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Non-Constructible
                            LDK.isNonConstructible = function isNonConstructible() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(i === LDK.null || i === LDK.undefined);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Null
                            LDK.isNull = function isNull() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(i === LDK.null);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Number
                            LDK.isNumber = function isNumber() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.number && typeof i == 'number') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Object
                            LDK.isObject = function isObject() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        !LDK.isArray(i) && !LDK.isBool(i) && !LDK.isFunction(i) &&
                                        !LDK.isNumber(i) && !LDK.isRegex(i) && !LDK.isString(i) &&
                                        !LDK.isSymbol(i)
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Regular Expression
                            LDK.isRegex = function isRegex() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.regex && typeof i == 'object') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Strictly Array-Like
                            LDK.isStrictlyArrayLike = function isStrictlyArrayLike() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(
                                        LDK.isConstructible(i) ? (
                                            (
                                                i.constructor == LDK.htmlAllCollection ||
                                                i.constructor == LDK.htmlCollection ||
                                                i.constructor == LDK.nodeList
                                            )
                                        ) : LDK.false
                                    );

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Strictly Document-Like
                            LDK.isStrictlyDocumentLike = function isStrictlyDocumentLike() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (
                                        (
                                            i.constructor == LDK.docFrag
                                        ) && typeof i == 'object'
                                    ) : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is String
                            LDK.isString = function isString() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.string && typeof i == 'string') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Symbol
                            LDK.isSymbol = function isSymbol() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.symbol && typeof i == 'symbol') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Undefined
                            LDK.isUndefined = function isUndefined() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(i === LDK.undefined);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Is Window
                            LDK.isWindow = function isWindow() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(LDK.isConstructible(i) ? (i.constructor == LDK.window && typeof i == 'object') : LDK.false);

                                // Return
                                return args.length > 0 ? data.indexOf(LDK.false) < 0 : LDK.false
                            };

                            // Named Array
                            LDK.namedArray = function namedArray() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (args.length) {
                                    // Initialization > Data
                                    let data = LDK.string(args[0]);

                                    /* Error Handling
                                            --- NOTE ---
                                                #lapys: Make sure the name given is valid.
                                    */
                                    try { eval('(function ' + data + '() {})') } catch (error) { return [] }

                                    // Return
                                    return (function() {
                                        // Initialization > Alpha
                                        let alpha = eval('function ' + data + '(){this.constructor.prototype.splice=LDK.arrayProto.splice;this.length=LDK.arrayProto.length}let metadata=new ' + data + ';metadata.__proto__=LDK.objectCreate(LDK.arrayProto);metadata');

                                        /* Loop
                                                Index Arguments.

                                            > Update > Alpha
                                        */
                                        for (let i of args.slice(1))
                                            alpha.push(i);

                                        // Return
                                        return alpha
                                    })()
                                }

                                // Return
                                return []
                            };

                            // Named Object
                            LDK.namedObject = function namedObject() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (arguments.length) {
                                    // Initialization > (Data, Metadata, Alpha, Source)
                                    let data = LDK.string(arguments[0]),
                                        metadata = arguments[1],
                                        alpha = arguments[2],
                                        source = {};

                                    // Modification > Source > Prototype
                                    LDK.objectDefProp(source, 'prototype', {get: function() { return alpha }});

                                    // Error Handling
                                    try { data = eval('new (function ' + data + '() {' + (arguments.length > 2 ? 'this.__proto__ = LDK.objectCreate(source.prototype)' : '') + '})') } catch (error) { return {} }

                                    /* Loop
                                            Index Metadata.

                                        > Modification > Data > [Loop Counter]
                                    */
                                    for (let i in metadata)
                                        data[i] = metadata[i];

                                    // Return
                                    return data
                                }

                                // Return
                                return {}
                            };

                            // To Array
                            LDK.toArray = function toArray() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    LDK.isArrayLike(i) ? data = data.concat(LDK.arrayFrom(i)) : data.push(i);

                                // Return
                                return data
                            };

                    /* Global Data */
                        // Modification
                            // LapysJS Development Kit
                                // Default
                                LDK.$default = (new function Object() {
                                    // Initialization > Target
                                    let that = this;

                                    // Modification > Target
                                        // Array
                                        that.Array = [];

                                        // Boolean
                                        that.Boolean = LDK.false;

                                        // Function
                                        that.Function = (function() {});

                                        // HTML All Collection
                                        LDK.objectDefProp(that, 'HTMLAllCollection', {get: function() { return document.all }});

                                        // HTML Collection
                                        that.HTMLCollection = LDK.getEmptyHTMLCollection();

                                        // Node List
                                        that.NodeList = LDK.getEmptyNodeList();

                                        // Number
                                        that.Number = 0;

                                        // Null
                                        that.null = LDK.null;

                                        // Object
                                        that.object = {};

                                        // Regular Expression
                                        that.RegExp = /(?:)/;

                                        // String
                                        that.String = '';

                                        // Symbol
                                        that.Symbol = LDK.symbol();

                                        // Undefined
                                        that.undefined = LDK.undefined;

                                        // Unknown
                                        that.unknown = (function() {
                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (LDK.isConstructible(arguments[0]))
                                                // Error Handling > Return
                                                try {
                                                    return new arguments[0].constructor
                                                }

                                                catch (error) {
                                                    return eval('new (function ' + arguments[0].constructor.name + '(){})')
                                                }

                                            else
                                                // Return
                                                return arguments[0]
                                        })
                                });

                                // Plugins
                                LDK.plugins = ['accordion', 'carousel', 'dropdown', 'dynamic-text', 'dynamic-time', 'marquee', 'media', 'option-box', 'placeholder', 'roulette', 'select-box'];

                                // Random Element List
                                LDK.randomElementList = ['a', 'audio', 'br', 'button', 'canvas', 'caption', 'div', 'dl', 'element', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'img', 'input', 'li', 'ol', 'p', 'q', 'script', 'style', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video', 'lapysjs-element'];

                            // Temporary Data
                                // Functions
                                tmp.functions = {
                                    // Absolute
                                    abs: Math.abs,

                                    // Add Event Listener
                                    addEventListener: (function() {
                                        // Initialization > Data
                                        let data = LDK.eventTargetProto.addEventListener;

                                        // Return
                                        return (function addEventListener() { return data.apply(arguments[0], [...arguments].slice(1)) })
                                    })(),

                                    // Clear
                                    clear: console.clear,

                                    // Cube Root
                                    cbrt: Math.cbrt,

                                    // Decode URI
                                    decodeURI: window.decodeURI,

                                    // Decode URI Component
                                    decodeURIComponent: window.decodeURIComponent,

                                    // Encode URI
                                    encodeURI: window.encodeURI,

                                    // Encode URI Component
                                    encodeURIComponent: window.encodeURIComponent,

                                    // Escape
                                    escape: window.escape,

                                    // Evaluate
                                    eval: (function() {
                                        // Initialization > Data
                                        let data = eval;

                                        // Return
                                        return (function eval() { return data.apply(this, [...arguments]) })
                                    })(),

                                    // Group
                                    group: console.group,

                                    // Group End
                                    groupEnd: console.groupEnd,

                                    // Log
                                    log: console.log,

                                    // Maximum
                                    max: Math.max,

                                    // Minimum
                                    min: Math.min,

                                    // Power
                                    pow: Math.pow,

                                    // Random
                                    random: Math.random,

                                    // Request Animation Frame
                                    requestAnimationFrame: (function() {
                                        // Initialization > (Data, Metadata, Alpha)
                                        let data = window.requestAnimationFrame,
                                            metadata = [window.webkitRequestAnimationFrame],
                                            alpha = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Data, Alpha)
                                        */
                                        while (!LDK.isFunction(data) && alpha in metadata) {
                                            data = metadata[alpha]
                                            alpha += 1
                                        }

                                        // Return
                                        return (function requestAnimationFrame() { return data.apply(window, [...arguments]) })
                                    })(),

                                    // Set Interval
                                    setInterval: (function() {
                                        // Initialization > Data
                                        let data = window.setInterval;

                                        // Return
                                        return (function setInterval() { return data.apply(window, [...arguments]) })
                                    })(),

                                    // Set Timeout
                                    setTimeout: (function() {
                                        // Initialization > Data
                                        let data = window.setTimeout;

                                        // Return
                                        return (function setTimeout() { return data.apply(window, [...arguments]) })
                                    })(),

                                    // Square Root
                                    sqrt: Math.sqrt,

                                    // Stringify
                                    stringify: JSON.stringify,

                                    // Warn
                                    warn: console.warn
                                };
                                    // Get Event Listeners
                                    tmp.functions.getEventListeners = (function() {
                                        // Initialization > (Data, Metadata)
                                        let data = window.getEventListeners,
                                            metadata = 0;

                                        /* Function > Main
                                                --- NOTE ---
                                                    #lapys: Please define `getEventListeners`! XD
                                        */
                                        (function main() {
                                            // Update > Data
                                            data = window.getEventListeners;

                                            // Error Handling > (...)
                                            try {
                                                LDK.isNativeFunction(data) ?
                                                    tmp.functions.getEventListeners = data :
                                                    tmp.functions.setTimeout(main, 1 / LDK.constants.ANIMATION_TICK_SPEED)
                                            } catch (error) { LapysJS.warn("LapysJS could not import private 'getEventListeners' function.") }
                                        })();

                                        // Return
                                        return data
                                    })();

                                // Objects
                                    // Console
                                    tmp.objects.console = LDK.objectAssign(LDK.namedObject('LapysJSConsole'), console);

                                    // JSON
                                    tmp.objects.JSON = LDK.objectAssign(LDK.namedObject('LapysJSJSON'), JSON);

                                    // Math
                                    tmp.objects.Math = LDK.objectAssign(LDK.namedObject('LapysJSMath'), Math);

                                    // Storage
                                    const perm = tmp.objects.storage = {
                                        // Cooler
                                        cooler: LDK.namedArray('LapysJSCooler'),

                                        // Event Nodes List
                                        eventNodesList: LDK.namedArray('LapysJSEventNodesList'),

                                        // Fullscreen Element
                                        fullscreenElement: LDK.null,

                                        // Modified Nodes List
                                        modifiedNodesList: LDK.namedArray('LapysJSModifiedNodesList'),

                                        // Modified Plugins List
                                        modifiedPluginsList: LDK.namedArray('LapysJSModifiedPluginsList'),

                                        // Screen Tip Nodes List
                                        screenTipNodesList: LDK.namedArray('LapysJSScreenTipNodesList'),

                                        // Scripted Nodes
                                        scriptedNodesList: LDK.namedArray('LapysJSScriptedNodesList'),

                                        // Strictly Watched Elements
                                        strictlyWatchedElements: LDK.namedArray('LapysJSStrictWatchList'),

                                        // Title
                                        title: '',

                                        // Vendors
                                        vendors: LDK.namedArray('LapysJSVendors'),

                                        // Written Nodes List
                                        writtenNodesList: LDK.namedArray('LapysJSWrittenNodesList')
                                    };

                                // Value
                                tmp.value = window;

                        // LapysJS Debugger
                        LDK.objectDefProp(tmp.value, 'LapysJSDebugger', {
                            // Configurable
                            configurable: LDK.true,

                            // Enumerable
                            enumerable: LDK.true,

                            // Get
                            get: function LapysJSDebugger() {
                                // Return
                                return LapysJS.debug
                            }
                        });

                        // LapysJS Error
                        LDK.objectDefProp(tmp.value, 'LapysJSError', {
                            // Value
                            value: function LapysJSError() {
                                /* Return
                                        --- NOTE ---
                                            #lapys: Prevent the name of the Error
                                                from being redacted or truncated by compressors/ minifiers.
                                */
                                return eval("new (class LapysJSError extends Error{constructor(){super([...arguments]);LDK.err.captureStackTrace(this,LapysJSError)}})(LDK.string(arguments[0]) + '\\r')")
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // LapysJS
                        LDK.objectDefProp(tmp.value, 'LapysJS', {
                            // Value
                            value: (function main() {
                                // Initialization > (Data, Lapys, (...))
                                let data = 0, lapys, $lapys,
                                    $LapysJSError = LapysJSError.bind({});

                                /* Loop
                                        Iterate over Maximum Call Stack Size.

                                    > Update > Data
                                */
                                for (let i = 0; i < maximumCallStackSize; i += 1)
                                    data += .0005;

                                // Update > (Data, Lapys)
                                data = LDK.numberParseInt(data);
                                lapys = eval('new' + '(class LapysJS extends '.repeat(data) + '(class LapysJS {})' + '{})'.repeat(data));
                                $lapys = lapys.constructor.prototype;

                                // Function
                                    /* Lexicalize
                                            --- NOTE ---
                                                #lapys: Grammatically structure strings of list items.
                                    */
                                    function lexicalize() {
                                        /* Initialization > (Data, Metadata, Alpha)
                                                --- NOTE ---
                                                    #lapys: Initialized the Item List, Grammar Syntax and Message.
                                        */
                                        let data = arguments[0],
                                            metadata = [arguments[1], arguments[2], arguments[3]],
                                            alpha = '';

                                        /* Logic
                                                [if statement]

                                                --- NOTE ---
                                                    #lapys: Should items in the list be delimited?
                                        */
                                        if (metadata[2])
                                            /* Loop
                                                    Index Data.

                                                > Update > Data
                                            */
                                            for (let i in data)
                                                data[i] = metadata[2] + data[i] + metadata[2];

                                        // Update > Alpha
                                        alpha = data.length > 2 ? data.slice(0, -1).join(metadata[0]) + metadata[1] + data[data.length - 1] : (data.length > 1 ? data[0] + metadata[1] + data[1] : data[0]);

                                        // Return
                                        return alpha
                                    }

                                    // Message
                                    function message() {
                                        // Initialization > (Arguments, Data, Target)
                                        let args = [...arguments],
                                            data = '',
                                            that = this;

                                        /* Loop
                                                Index Arguments.
                                        */
                                        for (let i in args) {
                                            // Initialization > Data
                                            let data = args[i];

                                            /* Logic
                                                    [if:else if:else statement]

                                                > Update > Arguments
                                            */
                                            if (LDK.isNonConstructible(data))
                                                args[i] = LDK.string(data);

                                            else if ((function(){let a=data,b=a.__proto__,c=[];while(b){c.push(b);b=b.__proto__}return c.indexOf(LDK.errProto)>-1})() && that == $lapys.error)
                                                args[i] = LDK.string(data.message);

                                            else if ((function(){let a=data,b=a.__proto__,c=[];while(b){c.push(b);b=b.__proto__}return c.indexOf(LDK.eleProto)>-1})() && that == $lapys.error)
                                                args[i] = LDK.string(data) || data.selector;

                                            else
                                                args[i] = LDK.isArray(data) ? (function(){let a=[...data];for(let i in a)a[i]=LDK.string(a[i]);return a})() : LDK.string(data)
                                        }

                                        /* Logic
                                                [if statement]
                                        */
                                        if (args.length)
                                            /* Logic
                                                    If
                                                        there is only 1 arguments,

                                                    else if
                                                        there are 3 arguments (use special command syntax).
                                            */
                                            if (args.length == 1)
                                                // Update > Data
                                                data = '[LapysJS v' + LDK.constants.VERSION + '] => ' + LDK.string(args[0]);

                                            else if (args.length > 2) {
                                                // Initialization > Argument Set
                                                let argSet = [args[0], args[2]];

                                                // Function > Parse Message
                                                function parseMessage() {
                                                    // Initialization > (Data, Metadata)
                                                    let data = [...arguments[0]],
                                                        metadata = arguments[1];

                                                    // Return
                                                    return (LDK.isArray(data[0]) ? lexicalize(data[0], ', ', ' and ', "'") : "'" + data[0] + "'") +
                                                        metadata + (LDK.isArray(data[1]) ? lexicalize(data[1], ', ', ' or ') : data[1])
                                                }

                                                /* Logic
                                                        [switch:case:default statement]

                                                    > ((Update > Data) | Error)
                                                */
                                                switch (args[1]) {
                                                    // Argument
                                                    case 'argument':
                                                        !LDK.isArray(argSet[0]) ?
                                                            (function() { throw new LDK.typeError('Arguments 0 must be an array.') })() :
                                                            data = 'Failed to execute ' + argSet[0][0] + ' on ' + argSet[0][1] + ': ' +
                                                            (LDK.isArray(argSet[1]) ? (argSet[1][0] + ' argument' + (argSet[1][0] > 1 ? 's' : '') + ' required, but ' + (argSet[1][1] < 2 ? 'only ' + argSet[1][1] : argSet[1][1]) + ' present') : argSet[1]);
                                                        break;

                                                    // Must
                                                    case 'must':
                                                        data = parseMessage(argSet, ' must be' + (argSet[0].length == 1 || !LDK.isArray(argSet[0]) ? (function() {
                                                            // Return
                                                            return (LDK.isArray(argSet[1]) ?
                                                                (function(){let a=[...argSet[1]];for(let i in a)a[i]=(function(){try{let b=a[i].trim();while(b&&!b[0].match(/\w/))b=b.slice(1);while(b&&!b[b.length-1].match(/\w/))b=b.slice(0,-1);return b.trim()}catch(e){}return a[i]})();return a})()[0] :
                                                                (function(){let a=(' '+argSet[1]).slice(1).trim();while(a&&!a[0].match(/\w/))a=a.slice(1);while(a&&!a[a.length-1])a=a.slice(0,-1);return a.trim()})()
                                                            )[0].match(/[aeiou]/) ? ' an ' : ' a '
                                                        })() : ' '));
                                                        break;

                                                    case 'not':
                                                        data = parseMessage(argSet, (LDK.isArray(args[0]) ? (args[0].length > 1 ? ' are' : ' is') : ' is') + ' not' + (argSet[0].length == 1 || !LDK.isArray(argSet[0]) ? (function() {
                                                            // Return
                                                            return (LDK.isArray(argSet[1]) ?
                                                                (function(){let a=[...argSet[1]];for(let i in a)a[i]=(function(){let b=a[i].trim();while(b&&!b[0].match(/\w/))b=b.slice(1);while(b&&!b[b.length-1].match(/\w/))b=b.slice(0,-1);return b.trim()})();return a})()[0] :
                                                                (function(){let a=(' '+argSet[1]).slice(1).trim();while(a&&!a[0].match(/\w/))a=a.slice(1);while(a&&!a[a.length-1])a=a.slice(0,-1);return a.trim()})()
                                                            )[0].match(/[aeiou]/) ? ' an ' : ' a '
                                                        })() : ' '));
                                                        break;

                                                    case 'only':
                                                        data = parseMessage(argSet, ' can only be of value' + (LDK.isArray(argSet[1]) && argSet[1].length > 1 ? 's ' : ' '));
                                                        break;

                                                    default:
                                                        throw new LDK.refError('Expected valid command for lexical error message manipulation.')
                                                }

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (args.length > 3) {
                                                    // Update > Arguments
                                                    args = args.slice(3);

                                                    /* Loop
                                                            Index Arguments.

                                                        > Update > Data
                                                    */
                                                    for (let i of args)
                                                        data += LDK.string(i)
                                                }

                                                // Update > Data
                                                data += '.'
                                            }

                                        // Return
                                        return data
                                    }

                                // Modification > Lapys
                                    // Debug
                                    LDK.objectDefProp($lapys, 'debug', {
                                        // Value
                                        value: (function() {
                                            // Initialization > Source
                                            let source = function LapysJSDebugger() {
                                                // Initialization > (Arguments, Argument Set, Data, Target)
                                                let args = [...arguments],
                                                    argSet = args.slice(1),
                                                    data = args[0],
                                                    that = LapysJSDebugger;

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (args.length) {
                                                    /* Logic
                                                            [switch:case:default statement]

                                                        > Return
                                                    */
                                                    switch (data) {
                                                        // Format Characters
                                                        case 'format-chars':
                                                            return that.formatChar.apply(that, argSet);
                                                            break;

                                                        // Hello
                                                        case 'hello':
                                                            return that.hello.apply(that, argSet)
                                                    }

                                                    // Lapys > Error
                                                    $lapys.error(data, 'not', 'valid option')
                                                }

                                                /* Return
                                                        --- NOTE ---
                                                            #lapys: Returning a `null` response.
                                                */
                                                return LDK.null
                                            };

                                            // Modification > Source
                                            LDK.objectDefProps(source, {
                                                // Format Text
                                                formatChar: {
                                                    // Value
                                                    value: function formatChar() {
                                                        // Initialization > (Arguments, Data)
                                                        let args = [...arguments],
                                                            data = args[args.length - 1];

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (args.length) {
                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (data == 0 || data == 'list' || args.length == 1) {
                                                                // Update > (Arguments, Data)
                                                                args = args.slice(0, -1);
                                                                data = '';

                                                                /* Loop
                                                                        Index Arguments.

                                                                    > Update > Data
                                                                */
                                                                for (let i of args)
                                                                    data += ' ' + (LDK.isArray(i) ? i.join(' ').trim() : LDK.string(i).trim()) + ' ';

                                                                // Update > Data
                                                                data = (function() {
                                                                    // Initialization > Metadata
                                                                    let metadata = data;

                                                                    /* Loop
                                                                            [while statement]

                                                                        > Update > Metadata
                                                                    */
                                                                    while (metadata.match(/  /))
                                                                        metadata = metadata.replace(/  /g, ' ');

                                                                    // Return
                                                                    return metadata.trim().split(' ')
                                                                })()
                                                            }
                                                        }

                                                        else
                                                            // LapysJS > Error
                                                            LapysJS.error(["'formatChar'", "'LapysJSDebugger'"], 'argument', [1, 0]);

                                                        // Return
                                                        return data
                                                    }
                                                },

                                                // Hello
                                                hello: {
                                                    // Value
                                                    value: function hello() {
                                                        // Initialization > Data
                                                        let data = 'Hello, World!';

                                                        // [Function]
                                                        (tmp.objects.console.log || tmp.functions.log).call($lapys, data);

                                                        // Return
                                                        return data
                                                    },

                                                    // Writable
                                                    writable: LDK.true
                                                }
                                            });

                                            // Return
                                            return source
                                        })()
                                    });

                                    // Cooler
                                    LDK.objectDefProp($lapys, 'cooler', {
                                        // Get
                                        get: function cooler() {
                                            // Return
                                            return $lapys.permanentData.cooler
                                        }
                                    });

                                    // Error
                                    LDK.objectDefProp($lapys, 'error', {
                                        // Value
                                        value: function error() {
                                            // Initialization > Data
                                            let data = (function(){let a=this,b=a.__proto__,c=[];while(b){c.push(b);b=b.__proto__}return c.indexOf(LDK.errProto)>-1}).call(this) ? this.constructor : $LapysJSError;

                                            // Error
                                            throw new data(message.apply(error, [...arguments]))
                                        }
                                    });

                                    // LapysJS
                                    LDK.objectDefProp($lapys, 'LapysJS', {value: $lapys});

                                    // Miscellaneous
                                    LDK.objectDefProp($lapys, 'miscellaneous', {
                                        // Value
                                        value: LDK.namedObject('LapysJSMiscellaneousData', {
                                            // Custom Event
                                            customEvent: LDK.customEvent,

                                            // Import
                                            'import': (function() {
                                                /* Initialization > (Data, Metadata, Source, Target)
                                                        --- NOTE ---
                                                            #lapys: Whereas the Source is the actual function
                                                                to be executing.
                                                */
                                                let data, metadata, source = (function() {
                                                    // Initialization > (Arguments, Argument Set, Data, Target)
                                                    let args = [...arguments],
                                                        argSet = args.slice(1),
                                                        data = args[0],
                                                        that = this;

                                                    /* Logic
                                                            [switch:case:default statement]

                                                        > Return
                                                    */
                                                    switch (data) {
                                                        // CSS
                                                        case 'css':
                                                            return that.css.apply(that, argSet);
                                                            break;

                                                        // File
                                                        case 'file':
                                                            return that.file.apply(that, argSet);
                                                            break;

                                                        // Font
                                                        case 'font':
                                                            return that.font.apply(that, argSet);
                                                            break;

                                                        // JavaScript
                                                        case 'js':
                                                            return that.js.apply(that, argSet)
                                                    }

                                                    // Lapys > Error
                                                    $lapys.error(data, 'not', 'valid option');

                                                    /* Return
                                                            --- NOTE ---
                                                                #lapys: Returning a `null` response.
                                                    */
                                                    return LDK.null
                                                }), that = this;

                                                // Error Handling > Execution
                                                try { eval('metadata=function import(){return source.apply(import,[...arguments])}') } catch (error) { eval('metadata=function Import(){return source.apply(Import,[...arguments])}') }

                                                // Update > Data
                                                data = metadata;

                                                // Modification > Data
                                                LDK.objectDefProps(data, {
                                                    // CSS
                                                    css: {
                                                        // Value
                                                        value: function css() {
                                                            // Initialization > (Arguments, Data)
                                                            let args = [...arguments],
                                                                data = {
                                                                    // Indent
                                                                    indent: (function() {
                                                                        // Initialization > (Data, Metadata)
                                                                        let data = document.head || document.body || document.documentElement,
                                                                            metadata = data.getElementsByTagName('style')[data.getElementsByTagName('style').length - 1] ||
                                                                                data.getElementsByTagName('link')[data.getElementsByTagName('link').length - 1] ||
                                                                                data.getElementsByTagName('script')[data.getElementsByTagName('script').length - 1] ||
                                                                                tmp.element;

                                                                        // Return
                                                                        return LDK.getConstructor(metadata.previousSibling) == Text ? metadata.previousSibling.wholeText : '\r'
                                                                    })()
                                                                };

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (args.length) {
                                                                /* Loop
                                                                        Index Arguments.
                                                                */
                                                                for (let i of args)
                                                                    /* Logic
                                                                            If
                                                                                Argument is an object.
                                                                    */
                                                                    if (LDK.isObject(i)) {
                                                                        /* Loop
                                                                                Index Argument.
                                                                        */
                                                                        for (let j in i)
                                                                            /* Logic
                                                                                    [if:else if:else statement]
                                                                            */
                                                                            if (j == 'content') {
                                                                                // Modification > Argument > Source
                                                                                i.src = i.content;

                                                                                // Deletion
                                                                                delete i.content
                                                                            }

                                                                            else if (j != 'id' && j != 'media' && j != 'mode' && j != 'name' && j != 'rel' && j != 'src' && j != 'type') {
                                                                                // Deletion
                                                                                delete i[j];

                                                                                // LapysJS > Warn
                                                                                LapysJS.warn(j, 'not', 'valid option so it has been ignored')
                                                                            }

                                                                            else
                                                                                // Modification > Argument > [Loop Iterator]
                                                                                i[j] = LDK.string(i[j]);

                                                                        // LapysJS > Error
                                                                        (args.indexOf(i) == args.length - 1) || LapysJS.error('The JSON options argument must be either be the only parameter or the last formal parameter.');
                                                                        (args.length < 5) || !(!('id' in i) && !('name' in i)) || LapysJS.error("The given JSON object requires an 'id' or 'name' parameter.");
                                                                        'mode' in i || LapysJS.error("The given JSON object requires a 'mode' parameter.");
                                                                        (args.length > 2) || 'src' in i || LapysJS.error("The given JSON object requires a 'src' parameter.");

                                                                        // Break
                                                                        break
                                                                    }

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (!LDK.isObject(args[args.length - 1])) {
                                                                    // Initialization > Data
                                                                    let data = LDK.string(args[args.length - 1]);

                                                                    // LapysJS > Error
                                                                    !(data != 0 && data != 1 && data != 'external' && data != 'false' && data != 'internal' && data != 'true') || LapysJS.error(data, 'not', 'valid mode of importation or a JSON option set');
                                                                }

                                                                /* Loop
                                                                        Index Arguments.
                                                                */
                                                                for (let i in args)
                                                                    /* Logic
                                                                            [if:else if:else statement]
                                                                    */
                                                                    if (LDK.isBool(args[i]) || LDK.isNumber(args[i]))
                                                                        // Modification Argument > [Loop Iterator]
                                                                        (i != args.length - 1) || (args[i] = args[i] ? 'external' : 'internal');

                                                                    else if (LDK.isObject(args[i]))
                                                                        /* Loop
                                                                                Index Argument.

                                                                            > Modification > Argument > [Loop Iterator]
                                                                        */
                                                                        for (let j in args[i])
                                                                            args[i][j] = LDK.string(args[i][j]);

                                                                    else
                                                                        // Modification Argument > [Loop Iterator]
                                                                        args[i] = LDK.string(args[i]);

                                                                // LapysJS > Error
                                                                !(
                                                                    (!LDK.isObject(args[0]) && args.length == 1) ||
                                                                    (!LDK.isObject(args[1]) && args.length == 2)
                                                                ) || LapysJS.error('More options required to import file.');

                                                                // Initialization > (Mode, Object)
                                                                let mode = args[args.length - 1],
                                                                    object = {};

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (LDK.isObject(mode)) {
                                                                    // Update > Mode
                                                                    mode = mode.mode;

                                                                    // Deletion
                                                                    delete args[args.length - 1].mode
                                                                }

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (LDK.isObject(args[0]))
                                                                    // Update > Object
                                                                    object = LDK.objectAssign(object, args[0]);

                                                                else if (!LDK.isObject(args[0]) && LDK.isObject(args[1])) {
                                                                    // Update > Object
                                                                    object = LDK.objectAssign(object, args[1]);

                                                                    // Modification > Object > (ID | Name)
                                                                    object[args[0].trimLeft()[0] == '#' ? 'id' : 'name'] = args[0]
                                                                }

                                                                else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1]) && args.length == 3) {
                                                                    // Update > Object
                                                                    !LDK.isObject(args[2]) || (object = LDK.objectAssign(object, args[2]));

                                                                    // Modification > Object > ((ID | Name), Source)
                                                                    object[args[0].trimLeft()[0] == '#' ? 'id' : 'name'] = args[0];
                                                                    object.src = args[1]
                                                                }

                                                                else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1]) && !LDK.isObject(args[2]) && args.length > 3) {
                                                                    // Update > Object
                                                                    !LDK.isObject(args[3]) || (object = LDK.objectAssign(object, args[3]));

                                                                    // Modification > Object > ((ID | Name), Source, Type)
                                                                    object[args[0].trimLeft()[0] == '#' ? 'id' : 'name'] = args[0];
                                                                    object.src = args[1];
                                                                    object.type = args[2]
                                                                }

                                                                else
                                                                    // LapysJS > Error
                                                                    LapysJS.error('Invalid argument list provided.');

                                                                // Modification > Data
                                                                    // Element
                                                                    data.element = LDK.docCreateEle(mode == 'external' ? 'link' : 'style');

                                                                    // Type
                                                                    'type' in object ? data.element.type = object.type : 'text/css';

                                                                    // ID | Data ID
                                                                    'id' in object ? data.element.id = object.id : data.element.setAttribute('data-id', object.name);

                                                                /* Loop
                                                                        Index Object.

                                                                    > Modification > Data > Element > [Loop Iterator]
                                                                */
                                                                for (let i in object)
                                                                    !(i != 'id' && i != 'name' && i != 'src' && i != 'type') || (data.element[i] = object[i]);

                                                                // Lapys > Miscellaneous > Request
                                                                mode == 'external' ? $lapys.miscellaneous.request('GET', object.src, {onloadend: event => {
                                                                    /* Logic
                                                                            If
                                                                                the source file was found without any problems.
                                                                    */
                                                                    if (LDK.getEventTarget().status == 200) {
                                                                        // Modification > Data > Element > Hyperlink Reference
                                                                        data.element.href = object.src;

                                                                        // Insertion
                                                                        (document.head || document.body || document.documentElement).appendChild(data.element);
                                                                        data.element.insertAdjacentHTML('beforebegin', data.indent)
                                                                    }

                                                                    else
                                                                        // LapysJS > Warn
                                                                        LapysJS.warn('The source stylesheet could not be found.')
                                                                }}) : (function() {
                                                                    // Modification > Data > Element > Inner HTML
                                                                    data.element.innerHTML = object.src;

                                                                    // Insertion
                                                                    (document.head || document.body || document.documentElement).appendChild(data.element);
                                                                    data.element.insertAdjacentHTML('beforebegin', data.indent)
                                                                })()
                                                            }

                                                            // Return
                                                            return data.element
                                                        }
                                                    },

                                                    // File
                                                    file: {
                                                        // Value
                                                        value: function file() {
                                                            // Error Handling
                                                            try {
                                                                // Return
                                                                return window.file.read.apply(window.file, [...arguments])
                                                            }

                                                            catch (error) {
                                                                // Error
                                                                throw error.constructor == LDK.typeError ? $LapysJSError("Cannot find global 'file' object.") : error
                                                            }
                                                        }
                                                    },

                                                    // Font
                                                    font: {
                                                        // Value
                                                        value: function font() {
                                                            // Initialization > (Arguments, Data)
                                                            let args = [...arguments],
                                                                data = {
                                                                    // Element
                                                                    element: LDK.docCreateEle('style'),

                                                                    // Indent
                                                                    indent: (function() {
                                                                        // Initialization > (Data, Metadata)
                                                                        let data = document.head || document.body || document.documentElement,
                                                                            metadata = data.getElementsByTagName('script')[data.getElementsByTagName('script').length - 1] ||
                                                                                data.getElementsByTagName('style')[data.getElementsByTagName('style').length - 1] ||
                                                                                data.getElementsByTagName('link')[data.getElementsByTagName('link').length - 1] ||
                                                                                tmp.element;

                                                                        // Return
                                                                        return LDK.getConstructor(metadata.previousSibling) == Text ? metadata.previousSibling.wholeText : '\r'
                                                                    })()
                                                                };

                                                            // Function
                                                                // Interpolate
                                                                function interpolate(object) {
                                                                    // Lapys > Miscellaneous > Request
                                                                    $lapys.miscellaneous.request('GET', object.src, {onloadend: event => {
                                                                        /* Logic
                                                                                If
                                                                                    the source file was found without any problems.
                                                                        */
                                                                        if (LDK.getEventTarget().status == 200) {
                                                                            // Modification > (Data > Inner HTML) > Inner HTML
                                                                            data.element.innerHTML = ' @font-face { ' +
                                                                                'font-family: ' + (object.name.indexOf(' ') > -1 ? "'" + object.name + "'" : object.name) + '; ' +
                                                                                "src: url('" + object.src + "')"  + ('format' in object ? " format('" + object.format + "')" : '') + ' ' +
                                                                            '} ';

                                                                            // Insertion
                                                                            (document.head || document.body || document.documentElement).appendChild(data.element);
                                                                            data.element.insertAdjacentHTML('beforebegin', data.indent)
                                                                        }

                                                                        else
                                                                            // LapysJS > Warn
                                                                            LapysJS.warn('The source font file could not be found.')
                                                                    }})
                                                                }

                                                                // Objectify
                                                                function objectify() {
                                                                    // Initialization > Data
                                                                    let data = arguments[0];

                                                                    /* Loop
                                                                            Index Data.
                                                                    */
                                                                    for (let i in data)
                                                                        /* Logic
                                                                                [if:else statement]

                                                                                --- NOTE ---
                                                                                    #lapys: Remove invalid options.
                                                                        */
                                                                        if (i != 'format' && i != 'name' && i != 'src') {
                                                                            // Deletion
                                                                            delete data[i];

                                                                            // LapysJS > Warn
                                                                            LapysJS.warn(i, 'not', 'valid option so it has been ignored')
                                                                        }

                                                                        else
                                                                            // Modification > Data > [Loop Counter]
                                                                            data[i] = LDK.string(data[i]);

                                                                    // LapysJS > Error
                                                                    'name' in data || LapysJS.error("The given JSON object requires a 'name' parameter.");
                                                                    'src' in data || LapysJS.error("The given JSON object requires a 'src' (source) parameter.");

                                                                    // Return
                                                                    return data
                                                                }

                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (LDK.isObject(args[0]))
                                                                // Interpolate
                                                                interpolate(objecify(args[0]));

                                                            else if (!LDK.isObject(args[0]) && LDK.isObject(args[1])) {
                                                                // Modification > Arguments > Name
                                                                args[1].name = args[0];

                                                                // Interpolate
                                                                interpolate(objectify(args[1]))
                                                            }

                                                            else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1]) && LDK.isObject(args[2])) {
                                                                // Modification > Arguments > (Name, Source)
                                                                args[2].name = args[0];
                                                                args[2].src = args[1];

                                                                // Interpolate
                                                                interpolate(objectify(args[2]))
                                                            }

                                                            else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1]) && !LDK.isObject(args[2]) && args.length == 3)
                                                                // Interpolate
                                                                interpolate(objectify({format: args[2], name: args[0], src: args[1]}));

                                                            else
                                                                // LapysJS > Error
                                                                LapysJS.error('Invalid argument list provided.');

                                                            // Return
                                                            return data.element
                                                        }
                                                    },

                                                    // JavaScript
                                                    js: {
                                                        // Value
                                                        value: function javascript() {
                                                            // Initialization > (Arguments, Data)
                                                            let args = [...arguments],
                                                                data = {
                                                                    // Indent
                                                                    indent: (function() {
                                                                        // Initialization > (Data, Metadata)
                                                                        let data = document.head || document.body || document.documentElement,
                                                                            metadata = data.getElementsByTagName('script')[data.getElementsByTagName('script').length - 1] ||
                                                                                data.getElementsByTagName('style')[data.getElementsByTagName('style').length - 1] ||
                                                                                data.getElementsByTagName('link')[data.getElementsByTagName('link').length - 1] ||
                                                                                tmp.element;

                                                                        // Return
                                                                        return LDK.getConstructor(metadata.previousSibling) == Text ? metadata.previousSibling.wholeText : '\r'
                                                                    })()
                                                                };

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (args.length) {
                                                                /* Loop
                                                                        Index Arguments.
                                                                */
                                                                for (let i of args)
                                                                    /* Logic
                                                                            If
                                                                                Argument is an object.
                                                                    */
                                                                    if (LDK.isObject(i)) {
                                                                        /* Loop
                                                                                Index Argument.
                                                                        */
                                                                        for (let j in i)
                                                                            /* Logic
                                                                                    [if:else if:else statement]
                                                                            */
                                                                            if (j == 'content') {
                                                                                // Modification > Argument > Source
                                                                                i.src = i.content;

                                                                                // Deletion
                                                                                delete i.content
                                                                            }

                                                                            else if (j != 'async' && j != 'defer' && j != 'id' && j != 'mode' && j != 'name' && j != 'src' && j != 'type') {
                                                                                // Deletion
                                                                                delete i[j];

                                                                                // LapysJS > Warn
                                                                                LapysJS.warn(j, 'not', 'valid option so it has been ignored')
                                                                            }

                                                                            else
                                                                                // Modification > Argument > [Loop Iterator]
                                                                                i[j] = LDK.string(i[j]);

                                                                        // LapysJS > Error
                                                                        (args.indexOf(i) == args.length - 1) || LapysJS.error('The JSON options argument must be either be the only parameter or the last formal parameter.');
                                                                        (args.length < 5) || !(!('id' in i) && !('name' in i)) || LapysJS.error("The given JSON object requires an 'id' or 'name' parameter.");
                                                                        'mode' in i || LapysJS.error("The given JSON object requires a 'mode' parameter.");
                                                                        (args.length > 2) || 'src' in i || LapysJS.error("The given JSON object requires a 'src' parameter.");

                                                                        // Break
                                                                        break
                                                                    }

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (!LDK.isObject(args[args.length - 1])) {
                                                                    // Initialization > Data
                                                                    let data = LDK.string(args[args.length - 1]);

                                                                    // LapysJS > Error
                                                                    !(data != 0 && data != 1 && data != 'external' && data != 'false' && data != 'internal' && data != 'true') || LapysJS.error(data, 'not', 'valid mode of importation or a JSON option set');
                                                                }

                                                                /* Loop
                                                                        Index Arguments.
                                                                */
                                                                for (let i in args)
                                                                    /* Logic
                                                                            [if:else if:else statement]
                                                                    */
                                                                    if (LDK.isBool(args[i]) || LDK.isNumber(args[i]))
                                                                        // Modification Argument > [Loop Iterator]
                                                                        (i != args.length - 1) || (args[i] = args[i] ? 'external' : 'internal');

                                                                    else if (LDK.isObject(args[i]))
                                                                        /* Loop
                                                                                Index Argument.

                                                                            > Modification > Argument > [Loop Iterator]
                                                                        */
                                                                        for (let j in args[i])
                                                                            args[i][j] = LDK.string(args[i][j]);

                                                                    else
                                                                        // Modification Argument > [Loop Iterator]
                                                                        args[i] = LDK.string(args[i]);

                                                                // LapysJS > Error
                                                                !(
                                                                    (!LDK.isObject(args[0]) && args.length == 1) ||
                                                                    (!LDK.isObject(args[1]) && args.length == 2)
                                                                ) || LapysJS.error('More options required to import file.');

                                                                // Initialization > (Mode, Object)
                                                                let mode = args[args.length - 1],
                                                                    object = {};

                                                                /* Logic
                                                                        [if statement]
                                                                */
                                                                if (LDK.isObject(mode)) {
                                                                    // Update > Mode
                                                                    mode = mode.mode;

                                                                    // Deletion
                                                                    delete args[args.length - 1].mode
                                                                }

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (LDK.isObject(args[0]))
                                                                    // Update > Object
                                                                    object = LDK.objectAssign(object, args[0]);

                                                                else if (!LDK.isObject(args[0]) && LDK.isObject(args[1])) {
                                                                    // Update > Object
                                                                    object = LDK.objectAssign(object, args[1]);

                                                                    // Modification > Object > (ID | Name)
                                                                    object[args[0].trimLeft()[0] == '#' ? 'id' : 'name'] = args[0]
                                                                }

                                                                else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1]) && args.length == 3) {
                                                                    // Update > Object
                                                                    !LDK.isObject(args[2]) || (object = LDK.objectAssign(object, args[2]));

                                                                    // Modification > Object > ((ID | Name), Source)
                                                                    object[args[0].trimLeft()[0] == '#' ? 'id' : 'name'] = args[0];
                                                                    object.src = args[1]
                                                                }

                                                                else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1]) && !LDK.isObject(args[2]) && args.length > 3) {
                                                                    // Update > Object
                                                                    !LDK.isObject(args[3]) || (object = LDK.objectAssign(object, args[3]));

                                                                    // Modification > Object > ((ID | Name), Source, Type)
                                                                    object[args[0].trimLeft()[0] == '#' ? 'id' : 'name'] = args[0];
                                                                    object.src = args[1];
                                                                    object.type = args[2]
                                                                }

                                                                else
                                                                    // LapysJS > Error
                                                                    LapysJS.error('Invalid argument list provided.');

                                                                // Modification > Data
                                                                    // Element
                                                                    data.element = LDK.docCreateEle('script');

                                                                    // Type
                                                                    'type' in object ? data.element.type = object.type : 'text/css';

                                                                    // ID | Data ID
                                                                    'id' in object ? data.element.id = object.id : data.element.setAttribute('data-id', object.name);

                                                                /* Loop
                                                                        Index Object.

                                                                    > Modification > Data > Element > [Loop Iterator]
                                                                */
                                                                for (let i in object)
                                                                    !(i != 'id' && i != 'name' && i != 'src' && i != 'type') || (data.element[i] = object[i]);

                                                                // Lapys > Miscellaneous > Request
                                                                mode == 'external' ? $lapys.miscellaneous.request('GET', object.src, {onloadend: event => {
                                                                    /* Logic
                                                                            If
                                                                                the source file was found without any problems.
                                                                    */
                                                                    if (LDK.getEventTarget().status == 200) {
                                                                        // Modification > Data > Element > Source
                                                                        data.element.src = object.src;

                                                                        // Insertion
                                                                        (document.head || document.body || document.documentElement).appendChild(data.element);
                                                                        data.element.insertAdjacentHTML('beforebegin', data.indent)
                                                                    }

                                                                    else
                                                                        // LapysJS > Warn
                                                                        LapysJS.warn('The source script could not be found.')
                                                                }}) : (function() {
                                                                    // Modification > Data > Element > Inner HTML
                                                                    data.element.innerHTML = object.src;

                                                                    // Insertion
                                                                    (document.head || document.body || document.documentElement).appendChild(data.element);
                                                                    data.element.insertAdjacentHTML('beforebegin', data.indent)
                                                                })()
                                                            }

                                                            // Return
                                                            return data.element
                                                        }
                                                    }
                                                });

                                                // Return
                                                return data
                                            })(),

                                            // Named Array
                                            namedArray: LDK.namedArray,

                                            // Named Object
                                            namedObject: LDK.namedObject,

                                            /* Request
                                                    --- NOTE ---
                                                        #lapys: Perform an XML HTTP request.
                                            */
                                            request: function request() {
                                                // Initialization > (Arguments, Data, (...))
                                                let args = [...arguments],
                                                    data = new XMLHttpRequest,
                                                    metadata = args[0],
                                                    alpha = args[1],
                                                    beta = args[2];

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if ('withCredentials' in data)
                                                    // Data > Open
                                                    data.open(metadata, alpha, LDK.true);

                                                else if ('XDomainRequest' in window)
                                                    // Data > Open
                                                    (data = new XDomainRequest).open(metadata, alpha);

                                                else {
                                                    // Update > Data
                                                    data = LDK.null;

                                                    // Lapys > Warn
                                                    $lapys.warn('CORS is not supported by this browser.')
                                                }

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (data !== LDK.null) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (LDK.isObject(beta))
                                                        /* Loop
                                                                Index Beta.

                                                            > Modification > Data > [Loop Counter]
                                                        */
                                                        for (let i in beta)
                                                            data[i] = beta[i];

                                                    // Data > Send
                                                    data.send()
                                                }

                                                // Return
                                                return data
                                            }
                                        })
                                    });
                                        // Definition
                                        LDK.objectDefProp($lapys, 'misc', {
                                            // Get
                                            get: function miscellaneous() {
                                                // Return
                                                return $lapys.miscellaneous
                                            }
                                        });

                                    // Permanent Data
                                    LDK.objectDefProp($lapys, 'permanentData', {
                                        // Configurable
                                        configurable: LDK.false,

                                        // Enumerable
                                        enumerable: LDK.false,

                                        // Value
                                        value: (function() {
                                            // Initialization > Data
                                            let data = LDK.namedObject('LapysJSPermanentData'),
                                                $data = data.constructor.prototype;

                                            // Modification > Data
                                            LDK.objectDefProps($data, {
                                                // Cooler
                                                cooler: {
                                                    // Get
                                                    get: function cooler() {
                                                        // Return
                                                        return LDK.namedArray.apply(LDK, ['LapysJSCooler'].concat([...perm.cooler]))
                                                    }
                                                },

                                                // Coordinates
                                                coordinates: {
                                                    // Get
                                                    get: function coordinates() {
                                                        // Initialization > (...)
                                                        let beta = LDK.namedArray('LapysJSCoordinates'), data = [
                                                            function getX() { return tmp.objects.coordinates[0] },
                                                            function setX() { tmp.objects.coordinates[0] = arguments[0] }
                                                        ], metadata = [
                                                            function getY() { return tmp.objects.coordinates[1] },
                                                            function setY() { tmp.objects.coordinates[1] = arguments[0] }
                                                        ], alpha = {
                                                            // X
                                                            0: {get: data[0], set: data[1]}, x: {get: data[0], set: data[1]},

                                                            // Y
                                                            1: {get: metadata[0], set: metadata[1]}, y: {get: metadata[0], set: metadata[1]}
                                                        };

                                                        // Modification > Beta > [Object]
                                                        LDK.objectDefProps(beta, alpha);

                                                        // Return
                                                        return beta
                                                    }
                                                },

                                                // Event Nodes List
                                                eventNodesList: {
                                                    // Get
                                                    get: function eventNodesList() {
                                                        // Return
                                                        return LDK.namedArray.apply(LDK, ['LapysJSEventNodesList'].concat([...perm.eventNodesList]))
                                                    }
                                                },

                                                // Fullscreen Element
                                                fullscreenElement: {
                                                    // Get
                                                    get: function fullscreenElement() {
                                                        // Return
                                                        return perm.fullscreenElement
                                                    }
                                                },

                                                // Modified Nodes List
                                                modifiedNodesList: {
                                                    // Get
                                                    get: function modifiedNodesList() {
                                                        // Return
                                                        return perm.modifiedNodesList
                                                    }
                                                },

                                                // Modified Plugins List
                                                modifiedPluginsList: {
                                                    // Get
                                                    get: function modifiedPluginsList() {
                                                        // Return
                                                        return perm.modifiedPluginsList
                                                    }
                                                },

                                                // Plugins
                                                plugins: {
                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Data
                                                        let data = LDK.namedArray('LapysJSPlugins');

                                                        // Modification > Data
                                                        LDK.objectDefProps(data, {
                                                            // Carousel
                                                            Carousel: {
                                                                // Enumerable
                                                                enumerable: LDK.true,

                                                                // Value
                                                                value: (function() {
                                                                    // Initialization > (Data, Metadata)
                                                                    let data = function Carousel() {
                                                                        // Return
                                                                        return LDK.docCreateEle('div')
                                                                    }, metadata;

                                                                    /* Execution
                                                                            --- NOTE ---
                                                                                #lapys: Prevent the class name from being modified.
                                                                    */
                                                                    eval("metadata=class Carousel{constructor(){return data()}}");

                                                                    // Return
                                                                    return metadata
                                                                })()
                                                            }
                                                        });

                                                        for (let i of data)
                                                            data.push(i);

                                                        // Return
                                                        return data
                                                    })()
                                                },

                                                // Regular Expression Set
                                                regexSet: {
                                                    // Value
                                                    value: LDK.constants.REGEX_SET
                                                },

                                                // Screen Tip Nodes List
                                                screenTipNodesList: {
                                                    // Get
                                                    get: function screenTipNodesList() {
                                                        // Return
                                                        return perm.screenTipNodesList
                                                    }
                                                },

                                                // Strictly Watched Elements
                                                strictlyWatchedElements: {
                                                    // Get
                                                    get: function strictlyWatchedElements() {
                                                        // Return
                                                        return perm.strictlyWatchedElements
                                                    }
                                                },

                                                // Written Nodes List
                                                writtenNodesList: {
                                                    // Get
                                                    get: function writtenNodesList() {
                                                        // Return
                                                        return perm.writtenNodesList
                                                    }
                                                }
                                            });

                                            // Return
                                            return data
                                        })(),

                                        // Writable
                                        writable: LDK.false
                                    });
                                        // Definition
                                        LDK.objectDefProp($lapys, 'perm', {
                                            // Get
                                            get: function permanentData() {
                                                // Return
                                                return $lapys.permanentData
                                            }
                                        });

                                    // Plugins
                                    LDK.objectDefProp($lapys, 'plugins', {
                                        // Get
                                        get: function plugins() {
                                            // Return
                                            return $lapys.permanentData.plugins
                                        }
                                    });

                                    // Script
                                    LDK.objectDefProp($lapys, 'script', {
                                        // Value
                                        value: document.currentScript
                                    });
                                        // Function
                                            // Script
                                                // Disable LapysJS Feature
                                                LDK.objectDefProp($lapys.script, 'disableLapysJSFeature', {
                                                    // Value
                                                    value: function disableLapysJSFeature() {
                                                        // Initialization > (Data, Metadata, Alpha)
                                                        let data = $lapys.debug.formatChar([...arguments], 'list'),
                                                            metadata = LDK.constants.FEATURES,
                                                            alpha = metadata.active;

                                                        /* Loop
                                                                Index Data.
                                                        */
                                                        for (let i of data) {
                                                            // Lapys > Warn
                                                            (metadata.value.indexOf(i) > -1) || $lapys.warn(i, 'not', 'feature of LapysJS');

                                                            // Update > Alpha
                                                            alpha.removeElement(i)
                                                        }

                                                        // Modification > Lapys > Script > Lapys Features
                                                        $lapys.script.setAttribute('lapys-features', LDK.constants.FEATURES.active.join(' '));
                                                        $lapys.script.getAttribute('lapys-features') || $lapys.script.removeAttribute('lapys-features');

                                                        // Return
                                                        return LDK.constants.FEATURES.active
                                                    }
                                                });

                                                // Enable LapysJS Feature
                                                LDK.objectDefProp($lapys.script, 'enableLapysJSFeature', {
                                                    // Value
                                                    value: function enableLapysJSFeature() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = $lapys.debug.formatChar([...arguments], 'list'),
                                                            metadata = LDK.constants.FEATURES.value;

                                                        /* Loop
                                                                Index Data.
                                                        */
                                                        for (let i = 0; i < data.length; i += 1) {
                                                            // Initialization > Alpha
                                                            let alpha = data[i];

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (metadata.indexOf(alpha) < 0) {
                                                                // Lapys > Warn
                                                                $lapys.warn(alpha, 'not', 'feature of LapysJS and so has been ignored');

                                                                // Update > Data
                                                                data[i] = LDK.undefined
                                                            }
                                                        }

                                                        // Update
                                                            // Data
                                                            data = data.filter(a=>{return !LDK.isUndefined(a)});

                                                            // (LapysJS Development Kit > Constants > Features > Active)
                                                            LDK.arrayProto.push.apply(LDK.constants.FEATURES.active, data);

                                                            // Metadata
                                                            metadata = [];

                                                        /* Loop
                                                                Index LapysJS Development Kit > Constants > Features > Active

                                                            > Update > Metadata
                                                        */
                                                        for (let i of LDK.constants.FEATURES.active)
                                                            (metadata.indexOf(i) > -1) || metadata.push(i);

                                                        /* Loop
                                                                [while statement]

                                                            > Update > (LapysJS Development Kit > Constants > Features > Active)
                                                        */
                                                        while (LDK.constants.FEATURES.active[0])
                                                            LDK.constants.FEATURES.active.pop(1);

                                                        // Update > (LapysJS Development Kit > Constants > Features > Active)
                                                        LDK.arrayProto.push.apply(LDK.constants.FEATURES.active, metadata);

                                                        // Modification > Lapys > Script > Lapys Features
                                                        $lapys.script.setAttribute('lapys-features', LDK.constants.FEATURES.active.join(' '));

                                                        // Return
                                                        return LDK.constants.FEATURES.active
                                                    }
                                                });

                                            // Watch
                                            (function watch() {
                                                // Set Timeout
                                                tmp.functions.setTimeout(function() {
                                                    // Lapys > Script > Enable LapysJS Feature
                                                    $lapys.script.getAttribute('lapys-features') && $lapys.script.enableLapysJSFeature.apply($lapys.script, $lapys.debug.formatChar($lapys.script.getAttribute('lapys-features'), 'list'));
                                                })
                                            })();

                                    // To String
                                    LDK.objectDefProp($lapys, 'toString', {
                                        // Value
                                        value: function toString() {
                                            // Return
                                            return 'LapysJS [v' + LDK.constants.VERSION + ']'
                                        }
                                    });

                                    // Value Of
                                    LDK.objectDefProp($lapys, 'valueOf', {
                                        // Value
                                        value: function valueOf() {
                                            // Return
                                            return LDK.true
                                        }
                                    });

                                    // Vendors
                                    LDK.objectDefProp($lapys, 'vendors', {
                                        // Get
                                        get: function vendors() {
                                            // Return
                                            return perm.vendors
                                        }
                                    });

                                    // Warn
                                    LDK.objectDefProp($lapys, 'warn', {
                                        // Value
                                        value: function warn() {
                                            // Initialization > Arguments
                                            let args = [...arguments];

                                            // Return
                                            if (args[0] == tmp) {
                                                // Warn
                                                (tmp.objects.console.warn || tmp.functions.warn).call($lapys, message.apply(warn, ['This feature is still in development.']));

                                                // Return
                                                return LapysJS
                                            }

                                            // Return
                                            return (tmp.objects.console.warn || tmp.functions.warn).call($lapys, message.apply(warn, args))
                                        }
                                    });

                                // Return
                                return lapys
                            })()
                        });

                        // Absolute
                        LDK.objectDefProp(tmp.value, 'abs', {
                            // Value
                            value: function abs() {let a=arguments[0];return a<1?(LDK.objectIs(a,0)?a:-a):a},

                            // Writable
                            writable: LDK.true
                        });

                        // Application
                        LDK.objectDefProp(tmp.value, 'app', {
                            // Value
                            value: (function() {
                                // Initialization > (Data, Metadata)
                                let data = LDK.namedObject('Application'),
                                    $data = LDK.isFunction(window.Application) ? data : data.constructor.prototype,
                                    metadata = {
                                        // Get Content
                                        getContent: function getContent() {
                                            // Initialization > Data
                                            let data = LDK.docQueSel(arguments[0]);

                                            // Return
                                            return data ? data.content || '' : LDK.null
                                        },

                                        // Set Content
                                        setContent: function setContent() {
                                            // Initialization > (Data, Metadata)
                                            let data = LDK.string(arguments[1]),
                                                metadata = LDK.docQueSel(arguments[0]);

                                            // [Function]
                                            document.head || (function() {
                                                // Initialization > (Data, Metadata)
                                                let data = document.children[0],
                                                    metadata = LDK.docCreateEle('head');

                                                // Insertion
                                                data.appendChild(metadata);
                                                data.children[0] || data.insertBefore(metadata, data.children[0])
                                            })();

                                            // (Modification > (...) > Data) | [Function]
                                            metadata ? metadata.setAttribute(arguments.length > 3 ? LDK.string(arguments[3]) : 'content', data) : (function() {
                                                // Initialization > (Metadata, Alpha, Beta)
                                                let metadata = LDK.docCreateEle('meta'),
                                                    alpha = (function() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = document.head,
                                                            metadata = data.getElementsByTagName('link')[data.getElementsByTagName('link').length - 1] ||
                                                                data.getElementsByTagName('script')[data.getElementsByTagName('script').length - 1] ||
                                                                data.getElementsByTagName('style')[data.getElementsByTagName('style').length - 1] ||
                                                                tmp.element;

                                                        // Return
                                                        return LDK.getConstructor(metadata.previousSibling) == Text ? metadata.previousSibling.wholeText : '\r'
                                                    })(),
                                                    beta = LDK.object(arguments[2]);

                                                // Modification > Metadata > (...)
                                                metadata.setAttribute(arguments.length > 3 ? LDK.string(arguments[3]) : 'content', data);

                                                /* Loop
                                                        Index Beta.

                                                    > Modification > Metadata > [Loop Iterator]
                                                */
                                                for (let i in beta)
                                                    metadata[i] = LDK.string(beta[i]);

                                                // Insertion
                                                document.head.appendChild(metadata)
                                                metadata.insertAdjacentHTML('beforebegin', alpha)
                                            }).apply(this, [...arguments])
                                        }
                                    };

                                // Modification > Application
                                    // Application
                                    LDK.objectDefProp($data, 'app', {value: data});

                                    // Author
                                    LDK.objectDefProp($data, 'author', {
                                        // Get
                                        get: function getAuthor() {
                                            // Return
                                            return metadata.getContent('meta[name=author')
                                        },

                                        // Set
                                        set: function setAuthor() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[name=author', arguments[0], {name: 'author'})
                                        }
                                    });

                                    // Cache Control
                                    LDK.objectDefProp($data, 'cacheControl', {
                                        // Get
                                        get: function getCacheControl() {
                                            // Return
                                            return metadata.getContent('meta[http-equiv=cache-control')
                                        },

                                        // Set
                                        set: function setCacheControl() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[http-equiv=cache-control', arguments[0], {httpEquiv: 'cache-control'})
                                        }
                                    });

                                    // Character Set
                                    'charset' in $data || LDK.objectDefProp($data, 'charset', {
                                        // Get
                                        get: function getCharset() {
                                            // Return
                                            return metadata.getContent('meta[charset')
                                        },

                                        // Set
                                        set: function setCharset() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[charset', arguments[0], {}, 'charset')
                                        }
                                    });

                                    // Connection
                                    !('connection' in navigator) || 'connection' in $data || LDK.objectDefProp($data, 'connection', {get: function connection() {return $data.nav.connection}});

                                    // Cookies
                                    'cookies' in $data || LDK.objectDefProp($data, 'cookies', {get: function cookies() {return document.cookie}});

                                    // Copyright
                                    'copyright' in $data || LDK.objectDefProp($data, 'copyright', {
                                        // Get
                                        get: function getCopyright() {
                                            // Return
                                            return metadata.getContent('meta[name=copyright')
                                        },

                                        // Set
                                        set: function setCopyright() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[name=copyright', arguments[0], {name: 'copyright'})
                                        }
                                    });

                                    // Description
                                    'description' in $data || LDK.objectDefProp($data, 'description', {
                                        // Get
                                        get: function getDescription() {
                                            // Return
                                            return metadata.getContent('meta[name=description')
                                        },

                                        // Set
                                        set: function setDescription() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[name=description', arguments[0], {name: 'description'})
                                        }
                                    });

                                    // Device Pixel Ratio
                                    !('devicePixelRatio' in window) || 'dpRatio' in $data || LDK.objectDefProp($data, 'dpRatio', {get: function devicePixelRatio() {return window.devicePixelRatio}});

                                    // Do Not Track
                                    !('doNotTrack' in navigator) || 'doNotTrack' in $data || LDK.objectDefProp($data, 'doNotTrack', {get: function doNotTrack() {return $data.nav.doNotTrack}});

                                    // Height
                                    'height' in $data || LDK.objectDefProp($data, 'height', {
                                        // Get
                                        get: function getHeight() {return $data.viewport.height},

                                        // Set
                                        set: function setHeight() {$data.viewport.height=arguments[0]}
                                    });

                                    // Keywords
                                    'keywords' in $data || LDK.objectDefProp($data, 'keywords', {
                                        // Get
                                        get: function getKeywords() {
                                            // Return
                                            return metadata.getContent('meta[name=keywords')
                                        },

                                        // Set
                                        set: function setKeywords() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[name=keywords', arguments[0], {name: 'keywords'})
                                        }
                                    });

                                    // Minimal UI
                                    'minimalUI' in $data || LDK.objectDefProp($data, 'minimalUI', {
                                        // Get
                                        get: function getMinimalUI() {return $data.viewport.minimalUI},

                                        // Set
                                        set: function setMinimalUI() {$data.viewport.minimalUI=arguments[0]}
                                    });

                                    // Name
                                    'name' in $data || LDK.objectDefProp($data, 'name', {
                                        // Get
                                        get: function getName() {return window.short_name||window.name||document.title},

                                        // Set
                                        set: function setName() {let a=arguments[0];document.title=window.name=window.short_name=data}
                                    });

                                    // Navigator
                                    'nav' in $data || LDK.objectDefProp($data, 'nav', {get: function navigator() {return window.navigator}});

                                    // Languages
                                    'lang' in $data || LDK.objectDefProp($data, 'lang', {get: function language() {return LDK.namedArray.apply(LDK, ['Languages'].concat($data.nav.languages||[]))}});

                                    // Online
                                    !('onLine' in navigator) || 'online' in $data || LDK.objectDefProp($data, 'online', {get: function online() {return $data.nav.onLine}});

                                    // Platform
                                    !('platform' in navigator) || 'platform' in $data || LDK.objectDefProp($data, 'platform', {get: function platform() {return $data.nav.platform}});

                                    // Plugins
                                    !('plugins' in navigator) || 'plugins' in $data || LDK.objectDefProp($data, 'plugins', {get: function plugins() {return $data.nav.plugins}});

                                    // Robots
                                    'robots' in $data || LDK.objectDefProp($data, 'robots', {
                                        // Get
                                        get: function getRobots() {
                                            // Return
                                            return metadata.getContent('meta[name=robots')
                                        },

                                        // Set
                                        set: function setRobots() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[name=robots', arguments[0], {name: 'robots'})
                                        }
                                    });

                                    // Theme Color
                                    'themeColor' in $data || LDK.objectDefProp($data, 'themeColor', {
                                        // Get
                                        get: function getThemeColor() {
                                            // Return
                                            return metadata.getContent('meta[name=theme-color')
                                        },

                                        // Set
                                        set: function setThemeColor() {
                                            // Metadata > Set Content
                                            metadata.setContent('meta[name=theme-color', arguments[0], {name: 'theme-color'})
                                        }
                                    });

                                    // User Agent
                                    !('userAgent' in navigator) || 'userAgent' in $data || LDK.objectDefProp($data, 'userAgent', {get: function userAgent() {return $data.nav.userAgent}});

                                    // User Scalable
                                    'userScalable' in $data || LDK.objectDefProp($data, 'userScalable', {
                                        // Get
                                        get: function getUserScalable() {return $data.viewport.userScalable},

                                        // Set
                                        set: function setUserScalable() {$data.viewport.userScalable=arguments[0]}
                                    });

                                    // Vendor
                                    !('vendor' in navigator) || 'vendor' in $data || LDK.objectDefProp($data, 'vendor', {get: function vendor() {return $data.nav.vendor}});

                                    // Viewport
                                    'viewport' in $data || LDK.objectDefProp($data, 'viewport', {
                                        // Value
                                        value: (function() {
                                            // Initialization > Data
                                            let data = LDK.namedObject('LapysJSViewport'),
                                                $data = data.constructor.prototype;

                                            // Modification > Data
                                            LDK.objectDefProps($data, {
                                                // Height
                                                height: {
                                                    // Get
                                                    get: function getHeight() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport'),
                                                            metadata = ((data || tmp.object).content || '').getAfterChar('height').getBeforeChar(',').replace('=', '');

                                                        // Return
                                                        return data ? (LDK.numberIsSafeInteger(+metadata) ? +metadata : metadata) : LDK.null
                                                    },

                                                    // Set
                                                    set: function setHeight() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(arguments[0]),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = metadata.content.match(/height[^=]{0,}=[^,]{1,}(,|)/) ? metadata.content.replace(/height[^=]{0,}=[^,]{1,}(,|)/, alpha => {
                                                                // Return
                                                                return alpha.getBeforeChar('=') + '=' + data + ','
                                                            }).trimRightChar(',') : metadata.content + ', height=' + data;

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'height=' + data;

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // Initial Scale
                                                initialScale: {
                                                    // Get
                                                    get: function getInitialScale() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport'),
                                                            metadata = ((data || tmp.object).content || '').getAfterChar('initial-scale').getBeforeChar(',').replace('=', '');

                                                        // Return
                                                        return data ? metadata : LDK.null
                                                    },

                                                    // Set
                                                    set: function setInitialScale() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(LDK.numberParseNumber(arguments[0])),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        // Update > Data
                                                        data = data.getBeforeChar('.') + '.' + (data.getAfterChar('.') || 0);

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = metadata.content.match(/initial-scale[^=]{0,}=[^,]{1,}(,|)/) ? metadata.content.replace(/initial-scale[^=]{0,}=[^,]{1,}(,|)/, alpha => {
                                                                // Return
                                                                return alpha.getBeforeChar('=') + '=' + data + ','
                                                            }).trimRightChar(',') : metadata.content + ', initial-scale=' + data;

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'initial-scale=' + data;

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // Maximum Scale
                                                maximumScale: {
                                                    // Get
                                                    get: function getMaximumScale() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport'),
                                                            metadata = ((data || tmp.object).content || '').getAfterChar('maximum-scale').getBeforeChar(',').replace('=', '');

                                                        // Return
                                                        return data ? metadata : LDK.null
                                                    },

                                                    // Set
                                                    set: function setMaximumScale() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(LDK.numberParseNumber(arguments[0])),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        // Update > Data
                                                        data = data.getBeforeChar('.') + '.' + (data.getAfterChar('.') || 0);

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = metadata.content.match(/maximum-scale[^=]{0,}=[^,]{1,}(,|)/) ? metadata.content.replace(/maximum-scale[^=]{0,}=[^,]{1,}(,|)/, alpha => {
                                                                // Return
                                                                return alpha.getBeforeChar('=') + '=' + data + ','
                                                            }).trimRightChar(',') : metadata.content + ', maximum-scale=' + data;

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'maximum-scale=' + data;

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // Minimal UI
                                                minimalUI: {
                                                    // Get
                                                    get: function getMinimalUI() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport');

                                                        // Return
                                                        return ((data || tmp.object).content || '').indexOf('minimal-ui') > -1;
                                                    },

                                                    // Set
                                                    set: function setMinimalUI() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.isString(arguments[0]) ? (arguments[0] == 'yes' ? LDK.true : LDK.false) : !!arguments[0],
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = (function() {let a=metadata.content.replace(/minimal-ui/g, '');return data?a+', minimal-ui':a})();

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'minimal-ui';

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // Minimal Scale
                                                minimumScale: {
                                                    // Get
                                                    get: function getMinimumScale() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport'),
                                                            metadata = ((data || tmp.object).content || '').getAfterChar('minimum-scale').getBeforeChar(',').replace('=', '');

                                                        // Return
                                                        return data ? metadata : LDK.null
                                                    },

                                                    // Set
                                                    set: function setMinimumScale() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(LDK.numberParseNumber(arguments[0])),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        // Update > Data
                                                        data = data.getBeforeChar('.') + '.' + (data.getAfterChar('.') || 0);

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = metadata.content.match(/minimum-scale[^=]{0,}=[^,]{1,}(,|)/) ? metadata.content.replace(/minimum-scale[^=]{0,}=[^,]{1,}(,|)/, alpha => {
                                                                // Return
                                                                return alpha.getBeforeChar('=') + '=' + data + ','
                                                            }).trimRightChar(',') : metadata.content + ', minimum-scale=' + data;

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'minimum-scale=' + data;

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // Target Density DPI
                                                targetDensityDPI: {
                                                    // Get
                                                    get: function getTargetDensityDPI() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport');

                                                        // Return
                                                        return data ? +data.getAttribute('target-densitydpi').trim() : LDK.null
                                                    },

                                                    // Set
                                                    set: function setTargetDensityDPI() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(arguments[0]),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            metadata.setAttribute('target-densitydpi', data);

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Name
                                                                delta.name = 'viewport';

                                                                // Target Density DPI
                                                                delta.setAttribute('target-densitydpi', data);

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // User Scalable
                                                userScalable: {
                                                    // Get
                                                    get: function getUserScalable() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport'),
                                                            metadata = ((data || tmp.object).content || '').getAfterChar('user-scalable').getBeforeChar(',').replace('=', '');

                                                        // Return
                                                        return data ? (metadata == 'yes' ? LDK.true : LDK.false) : LDK.null
                                                    },

                                                    // Set
                                                    set: function setUserScalable() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(arguments[0]),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        // Update > Data
                                                        data = data == 'yes' ? 'yes' : (data == 'no' ? 'no' : (!data ? 'no' : 'yes'));

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = metadata.content.match(/user-scalable[^=]{0,}=[^,]{1,}(,|)/) ? metadata.content.replace(/user-scalable[^=]{0,}=[^,]{1,}(,|)/, alpha => {
                                                                // Return
                                                                return alpha.getBeforeChar('=') + '=' + data + ','
                                                            }).trimRightChar(',') : metadata.content + ', user-scalable=' + data;

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'user-scalable=' + data;

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                },

                                                // Width
                                                width: {
                                                    // Get
                                                    get: function getWidth() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.docQueSel('meta[name=viewport'),
                                                            metadata = ((data || tmp.object).content || '').getAfterChar('width').getBeforeChar(',').replace('=', '');

                                                        // Return
                                                        return data ? (LDK.numberIsSafeInteger(+metadata) ? +metadata : metadata) : LDK.null
                                                    },

                                                    // Set
                                                    set: function setWidth() {
                                                        // Initialization > (Data, Metadata)
                                                        let data = LDK.string(arguments[0]),
                                                            metadata = LDK.docQueSel('meta[name=viewport');

                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (metadata)
                                                            // Modification > Metadata > Content
                                                            metadata.content = metadata.content.match(/width[^=]{0,}=[^,]{1,}(,|)/) ? metadata.content.replace(/width[^=]{0,}=[^,]{1,}(,|)/, alpha => {
                                                                // Return
                                                                return alpha.getBeforeChar('=') + '=' + data + ','
                                                            }).trimRightChar(',') : metadata.content + ', width=' + data;

                                                        else {
                                                            // Initialization > (Alpha, Beta, Delta)
                                                            let alpha = document.head || document.body || document.documentElement,
                                                                beta = alpha.getElementsByTagName('meta')[alpha.getElementsByTagName('meta').length - 1] ||
                                                                    alpha.getElementsByTagName('link')[alpha.getElementsByTagName('link').length - 1] ||
                                                                    alpha.getElementsByTagName('style')[alpha.getElementsByTagName('style').length - 1] ||
                                                                    alpha.getElementsByTagName('script')[alpha.getElementsByTagName('script').length - 1] ||
                                                                    tmp.element,
                                                                delta = LDK.docCreateEle('meta');

                                                            // Modification > Delta
                                                                // Content
                                                                delta.content = 'width=' + data;

                                                                // Name
                                                                delta.name = 'viewport';

                                                            // Insertion
                                                            alpha.appendChild(delta);
                                                            delta.insertAdjacentHTML('beforebegin', LDK.getConstructor(beta.previousSibling) == Text ? beta.previousSibling.wholeText : '\r')
                                                        }
                                                    }
                                                }
                                            });

                                            // Return
                                            return data
                                        })()
                                    });

                                    // Width
                                    'width' in $data || LDK.objectDefProp($data, 'width', {
                                        // Get
                                        get: function getWidth() {return $data.viewport.width},

                                        // Set
                                        set: function setWidth() {$data.viewport.width=arguments[0]}
                                    });

                                // Return
                                return data
                            })()
                        });

                        // Array
                        LDK.objectDefProp(tmp.value, 'array', {
                            // Value
                            value: function Array() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    LDK.arrayProto.push.apply(data, LDK.isArrayLike(i) ? LDK.arrayFrom(i) : [i]);

                                // Return
                                return data
                            }
                        });

                        // Boolean
                        LDK.objectDefProp(tmp.value, 'bool', {
                            // Value
                            value: function Boolean() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 0,
                                    metadata = 0;

                                /* Loop
                                        Index Arguments.

                                    > Update > (Data, Metadata)
                                */
                                for (let i of args)
                                    i ? data += 1 : metadata += 1;

                                // Return
                                return data > metadata
                            }
                        });

                        // Browser
                        LDK.objectDefProp(tmp.value, 'browser', {
                            // Value
                            value: (function() {
                                // Initialization > Data
                                let data = LDK.namedObject('Browser'),
                                    $data = data.constructor.prototype;

                                // Modification > Data
                                LDK.objectDefProps($data, {
                                    // Chrome
                                    chrome: {
                                        configurable: LDK.true, enumerable: LDK.true,
                                        get: function chrome() {return!!(window.chrome&&window.chrome.webstore)}
                                    },

                                    // Firefox
                                    firefox: {
                                        configurable: LDK.true, enumerable: LDK.true,
                                        get: function firefox() {return typeof InstallTrigger!='undefined'}
                                    },

                                    // Internet Explorer
                                    ie: {
                                        configurable: LDK.true, enumerable: LDK.true,
                                        get: function internetExplorer() {return!!document.documentMode}
                                    },

                                    // Opera
                                    opera: {
                                        configurable: LDK.true, enumerable: LDK.true,
                                        get: function opera() {return!!((!!window.opr&&!!opr.addons)||!!window.opera||navigator.userAgent.indexOf('OPR/')>-1)}
                                    },

                                    // Safari
                                    safari: {
                                        configurable: LDK.true, enumerable: LDK.true,
                                        get: function safari() {return!!(/constructor/i.test(LDK.htmlEle)||LDK.string(!window.safari||safari.pushNotification)=='[object SafariRemoteNotification]')}
                                    }
                                });
                                    // Primitive Value
                                    LDK.objectDefProp(data, '[[PrimitiveValue]]', {
                                        // Get
                                        get: (function() {
                                            /* Loop
                                                    Index Data.
                                            */
                                            for (let i in $data)
                                                /* Logic
                                                        [if statement]

                                                    > Return
                                                */
                                                if ($data[i])
                                                    return i;

                                            // Return
                                            return LDK.null
                                        })
                                    });

                                    // To String
                                    $data.toString = function toString() {return data['[[PrimitiveValue]]']};

                                // Return
                                return data
                            })()
                        });

                        // Clear
                        LDK.objectDefProp(tmp.value, 'clear', {
                            // Get
                            get: function clear() {
                                // [Function]
                                (tmp.objects.console.clear || tmp.functions.clear)();

                                // Return
                                return clear
                            }
                        });

                        // Cube Root
                        LDK.objectDefProp(tmp.value, 'cbrt', {
                            // Value
                            value: function cbrt() {
                                // Return
                                return tmp.functions.cbrt.apply(tmp.objects.Math, [...arguments])
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Chain
                        LDK.objectDefProp(tmp.value, 'chain', {
                            // Value
                            value: function chain() {
                                // Initialization > (Arguments, Data, Metadata, Alpha, Beta, Delta)
                                let args = [...arguments],
                                    data = (function() {
                                        // Return
                                        return performance.now()
                                    }),
                                    metadata = 0,
                                    alpha = data(),
                                    beta = 0,
                                    delta = typeof Promise == 'function' && LDK.isNativeFunction(window.Promise) ? function main(callbackA, callbackB) {
                                        // Initialization > Gamma
                                        let gamma = data() - alpha;

                                        // Update > Alpha
                                        alpha = data();

                                        // Callback A
                                        callbackA(beta += gamma);

                                        !LDK.isFunction(callbackB) || (new Promise(function() {
                                            // Argument (0, 1)
                                            arguments[0](LDK.null);
                                            arguments[1](LDK.null)
                                        })).then(function() {
                                            // Update > (Gamma, Alpha)
                                            gamma = data() - alpha;
                                            alpha = data();

                                            // Callback B
                                            callbackB(beta += gamma);

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (args[metadata + 2]) {
                                                // Update > Metadata
                                                metadata += 2;

                                                // Main
                                                main(args[metadata], args[metadata + 1])
                                            }
                                        })
                                    } : function main(callbackA, callbackB) {
                                        // Initialization > Gamma
                                        let gamma = data() - alpha;

                                        // Update > Alpha
                                        alpha = data();

                                        // Callback A
                                        callbackA(beta += gamma);

                                        // [Element] > Click
                                        !LDK.isFunction(callbackB) || LDK.createElement('*', {onclick: function() {
                                            // Update > (Gamma, Alpha)
                                            gamma = data() - alpha;
                                            alpha = data();

                                            // Callback B
                                            callbackB(beta += gamma);

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (args[metadata + 2]) {
                                                // Update > Metadata
                                                metadata += 2;

                                                // Main
                                                main(args[metadata], args[metadata + 1])
                                            }
                                        }}).click()
                                    };

                                /* Loop
                                        Index Arguments.

                                    > Update > Argument
                                */
                                for (let i in args)
                                    !LDK.isString(args[i]) || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Delta
                                !args.length || delta(args[metadata], args[metadata + 1]);

                                // Return
                                return alpha
                            }
                        });

                        // Check
                        LDK.objectDefProp(tmp.value, 'check', {
                            // Value
                            value: function check() {
                                // Initialization > (Arguments, Data, Metadata, Alpha, Beta)
                                let args = [...arguments].slice(0, 3),
                                    data = args[0], metadata = args[1], alpha = args[2],
                                    beta = LDK.namedObject('LapysJSCondition', {
                                        // Condition, Value
                                        condition: data, value: !!(LDK.isFunction(data) ? data() : data),

                                        // On (Fail, Success)
                                        onfail: LDK.isFunction(metadata) ? metadata : func(metadata),
                                        onsuccess: LDK.isFunction(alpha) ? alpha : func(alpha),
                                    }, LDK.nodeProto);

                                // Function > Main
                                (function main() {
                                    // Initialization > (Data, Metadata)
                                    let data = beta.condition,
                                        metadata = beta.value;

                                    // Modification > Beta
                                        // Value
                                        beta.value = !!(LDK.isFunction(data) ? data() : data);

                                        // On (Fail, Success)
                                        LDK.isFunction(beta.onfail) || (beta.onfail = func(beta.onfail));
                                        LDK.isFunction(beta.onsuccess) || (beta.onsuccess = func(beta.onsuccess));

                                    // Beta > On Fail
                                    metadata || beta.onfail.call(beta);

                                    // (Beta > On Success) | (Request Animation Frame > Main)
                                    metadata ? beta.onsuccess.call(beta) : tmp.functions.requestAnimationFrame(main)
                                })();

                                // Return
                                return beta
                            }
                        });

                        // Copy
                        LDK.isFunction(tmp.value.copy) || LDK.objectDefProp(tmp.value, 'copy', {
                            // Value
                            value: function copy() {
                                /* Initialization > (Data, Metadata, Alpha, Beta)
                                        --- NOTE ---
                                            #lapys: <textarea>`s are useful for
                                                collecting multi-line text.
                                */
                                let data = arguments[0],
                                    metadata = document.designMode,
                                    alpha = LDK.docCreateEle('textarea'),
                                    beta = document.head || document.documentElement;

                                /* Logic
                                        [if statement]
                                */
                                if (LDK.docQueComEnabled('copy') && LDK.docQueComSupported('copy'))
                                    // Error Handling
                                    try {
                                        // Update > Data
                                        data = LDK.constants.CLIPBOARD.content = LDK.isElement(data) ? LDK.isString(data.value) ? data.value : data.innerHTML : LDK.string(data);

                                        // Modification > Document > Design Mode
                                        document.designMode = 'on';

                                        // Modification > Alpha > (Content Editable, Value)
                                        alpha.contentEditable = LDK.true;
                                        alpha.setAttribute('value', alpha.value = data);

                                        // Insertion
                                        beta.appendChild(alpha);

                                        // Alpha > Focus
                                        alpha.focus();

                                        // Select > Alpha
                                        select(alpha);

                                        // LapysJS Development Kit > Document Execute Command
                                        LDK.docExecCom('copy', LDK.false, LDK.null);

                                        // Alpha > Blur
                                        alpha.blur();

                                        // Deletion
                                        alpha.remove();

                                        // Modification > Document > Design Mode
                                        document.designMode = metadata
                                    }

                                    catch (error) {
                                        // LapysJS > Error
                                        LapysJS.error("Query command 'copy' can not be executed.")
                                    }

                                else
                                    // LapysJS > Warn
                                    LapysJS.warn("Query command 'copy' is not supported.")

                                // Return
                                return arguments.length ? data : LDK.null
                            }
                        });

                        // Cut
                        LDK.isFunction(tmp.value.cut) || LDK.objectDefProp(tmp.value, 'cut', {
                            // Value
                            value: function cut() {
                                /* Initialization > (Data, Metadata, Alpha, Beta)
                                        --- NOTE ---
                                            #lapys: <textarea>`s are useful for
                                                collecting multi-line text.
                                */
                                let data = arguments[0],
                                    metadata = document.designMode,
                                    alpha = LDK.docCreateEle('textarea'),
                                    beta = document.head || document.documentElement;

                                /* Logic
                                        [if statement]
                                */
                                if (LDK.docQueComEnabled('cut') && LDK.docQueComSupported('cut'))
                                    // Error Handling
                                    try {
                                        // Update > Data
                                        data = LDK.constants.CLIPBOARD.content = LDK.isElement(data) ? LDK.isString(data.value) ? (function() {
                                            // Modification > Data > Value
                                            data.value = LDK.docCreateEle(data.tagName).value;

                                            // Return
                                            return data.value
                                        })() : (function() {
                                            // Modification > Data > Inner HTML
                                            data.innerHTML = LDK.docCreateEle(data.tagName).innerHTML;

                                            // Return
                                            return data.innerHTML
                                        })() : LDK.string(data);

                                        // Modification > Document > Design Mode
                                        document.designMode = 'on';

                                        // Modification > Alpha > (Content Editable, Value)
                                        alpha.contentEditable = LDK.true;
                                        alpha.setAttribute('value', alpha.value = data);

                                        // Insertion
                                        beta.appendChild(alpha);

                                        // Alpha > Focus
                                        alpha.focus();

                                        // Select > Alpha
                                        select(alpha);

                                        // LapysJS Development Kit > Document Execute Command
                                        LDK.docExecCom('cut', LDK.false, LDK.null);

                                        // Alpha > Blur
                                        alpha.blur();

                                        // Deletion
                                        alpha.remove();

                                        // Modification > Document > Design Mode
                                        document.designMode = metadata
                                    }

                                    catch (error) {
                                        // LapysJS > Error
                                        LapysJS.error("Query command 'cut' can not be executed.")
                                    }

                                else
                                    // LapysJS > Warn
                                    LapysJS.warn("Query command 'cut' is not supported.")

                                // Return
                                return arguments.length ? data : LDK.null
                            }
                        });

                        // Create Document Fragment
                        LDK.objectDefProp(tmp.value, 'createDocumentFragment', {
                            // Value
                            value: function createDocumentFragment() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = LDK.docCreateDocFrag();

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i in args)
                                    args[i] = LDK.isElement(args[i]) ? args[i] : new LDK.text(LDK.string(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > Insertion
                                */
                                for (let i of args)
                                    data.appendChild(i);

                                // Return
                                return data
                            }
                        });
                            // Definition
                            LDK.objectDefProp(tmp.value, 'createDocFrag', {
                                // Value
                                value: function createDocumentFragment() { return window.createDocumentFragment.apply(window, [...arguments]) },

                                // Writable
                                writable: LDK.true
                            });

                        // Create Element
                        LDK.objectDefProp(tmp.value, 'createElement', {
                            // Value
                            value: function createElement() {
                                // Return
                                return LDK.createElement.apply(LDK, [...arguments])
                            }
                        });

                        /* Execute
                                --- NOTE ---
                                    #lapys: Determine if an evaluation string
                                        will throw an error if called.
                        */
                        LDK.objectDefProp(tmp.value, 'exec', {
                            // Value
                            value: function execute() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Error Handling
                                */
                                for (let i of args)
                                    try {
                                        // Execution
                                        eval(LDK.isString(i) ? '(function(){' + i + '})' : i);

                                        // Update > Data
                                        data.push(LDK.true)
                                    } catch (error) {
                                        // Update > Data
                                        data.push(LDK.false)
                                    }

                                // Return
                                return data.length ? (data.length > 1 ? data : data[0]) : LDK.null
                            }
                        });

                        // File
                        LDK.objectDefProp(tmp.value, 'file', {
                            // Value
                            value: function File() {}
                        });
                            // Modification > File
                                // Create
                                LDK.objectDefProp(file, 'create', {
                                    // Value
                                    value: function create() {}
                                });

                                // Open
                                LDK.objectDefProp(file, 'open', {
                                    // Value
                                    value: function open() {}
                                });

                                // Read
                                LDK.objectDefProp(file, 'read', {
                                    // Value
                                    value: function read() {
                                        // Return
                                        return LapysJS.miscellaneous.request.apply(LapysJS.miscellaneous, LDK.arrayProto.addElementToFront.apply(['GET', LDK.string(arguments[0])], [...arguments].slice(1)))
                                    }
                                });

                                // Write
                                LDK.objectDefProp(file, 'write', {
                                    // Value
                                    value: function write() {}
                                });

                        // Float
                        LDK.objectDefProp(tmp.value, 'float', {
                            // Value
                            value: function float() {
                                // Return
                                return LDK.numberParseFloat.apply(LDK.numberProto, [...arguments])
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Function
                        LDK.objectDefProp(tmp.value, 'func', {
                            // Value
                            value: function Function() {
                                /* Logic
                                        [switch statement]

                                    ((>> Error Handling) > Return | > Error)
                                */
                                switch (arguments.length) {
                                    // 0
                                    case 0:
                                        return (function() {});
                                        break;

                                    // 1
                                    case 1:
                                        try { return eval.call(LDK.null, '(function() {' + (LDK.isFunction(arguments[0]) ? arguments[0].getBody() : LDK.string(arguments[0])) + '})') }
                                        catch (error) { return eval.call(LDK.null, '(function() {' + (LDK.isFunction(arguments[0]) ? arguments[0].getBody() : LDK.string(arguments[0])) + '\n})') }
                                        break;

                                    // 2
                                    case 2:
                                        try { return eval.call(LDK.null, '(function(' + (LDK.isArray(arguments[0]) ? arguments[0].join(', ') : LDK.string(arguments[0])) + ') {' + (LDK.isFunction(arguments[1]) ? arguments[1].getBody() : LDK.string(arguments[1])) + '})') }
                                        catch (error) {
                                            try { return eval.call(LDK.null, '(function(' + (LDK.isArray(arguments[0]) ? arguments[0].join(', ') : LDK.string(arguments[0])) + ') {' + (LDK.isFunction(arguments[1]) ? arguments[1].getBody() : LDK.string(arguments[1])) + '\n})') }
                                            catch (error) {
                                                try { return eval.call(LDK.null, '(function(' + (LDK.isArray(arguments[0]) ? arguments[0].join(', ') : LDK.string(arguments[0])) + '\n) {' + (LDK.isFunction(arguments[1]) ? arguments[1].getBody() : LDK.string(arguments[1])) + '})') }
                                                catch (error) { return eval.call(LDK.null, '(function(' + (LDK.isArray(arguments[0]) ? arguments[0].join(', ') : LDK.string(arguments[0])) + '\n) {' + (LDK.isFunction(arguments[1]) ? arguments[1].getBody() : LDK.string(arguments[1])) + '\n})') }
                                            }
                                        }
                                        break;

                                    // 3
                                    case 3:
                                        try { return eval.call(LDK.null, '(function' + (LDK.string(arguments[0]) ? ' ' + LDK.string(arguments[0]) : '') + '(' + (LDK.isArray(arguments[1]) ? arguments[1].join(', ') : LDK.string(arguments[1])) + ') {' + (LDK.isFunction(arguments[2]) ? arguments[2].getBody() : LDK.string(arguments[2])) + '})') }
                                        catch (error) {
                                            try { return eval.call(LDK.null, '(function' + (LDK.string(arguments[0]) ? ' ' + LDK.string(arguments[0]) : '') + '(' + (LDK.isArray(arguments[1]) ? arguments[1].join(', ') : LDK.string(arguments[1])) + ') {' + (LDK.isFunction(arguments[2]) ? arguments[2].getBody() : LDK.string(arguments[2])) + '\n})') }
                                            catch (error) {
                                                try { return eval.call(LDK.null, '(function' + (LDK.string(arguments[0]) ? ' ' + LDK.string(arguments[0]) : '') + '(' + (LDK.isArray(arguments[1]) ? arguments[1].join(', ') : LDK.string(arguments[1])) + '\n) {' + (LDK.isFunction(arguments[2]) ? arguments[2].getBody() : LDK.string(arguments[2])) + '})') }
                                                catch (error) { return eval.call(LDK.null, '(function' + (LDK.string(arguments[0]) ? ' ' + LDK.string(arguments[0]) : '') + '(' + (LDK.isArray(arguments[1]) ? arguments[1].join(', ') : LDK.string(arguments[1])) + '\n) {' + (LDK.isFunction(arguments[2]) ? arguments[2].getBody() : LDK.string(arguments[2])) + '\n})') }
                                            }
                                        }
                                        break;

                                    // [Default]
                                    default:
                                        LapysJS.error('Invalid number of arguments given.')
                                }
                            }
                        });

                        // Generate Key
                        LDK.objectDefProp(tmp.value, 'generateKey', {
                            // Value
                            value: function generateKey() {
                                // Initialization > (Data, Metadata, Alpha)
                                let data = LDK.string(arguments[0]),
                                    metadata = LDK.numberParseNumber(arguments[1]),
                                    alpha = '';

                                /* Loop
                                        Iterate over Metadata.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < metadata; i += 1)
                                    alpha += data[LDK.numberParseInt(tmp.functions.random() * data.length)];

                                // Return
                                return alpha
                            }
                        });

                        // Integer
                        LDK.objectDefProp(tmp.value, 'int', {
                            // Value
                            value: function integer() {
                                // Return
                                return LDK.numberParseInt.apply(LDK.numberProto, [...arguments])
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Interval
                        LDK.objectDefProp(tmp.value, 'interval', {
                            // Value
                            value: function interval() {
                                // Initialization > (Arguments, Data, Metadata, Alpha, Target)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args[1],
                                    alpha = args[2],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Update > Data
                                    !LDK.isString(data) || (data = func(data));

                                    // LapysJS
                                        // Error
                                        LDK.isFunction(data) || LapysJS.error(data, 'must', ['evaluation string', 'function']);

                                        // Warn
                                        LDK.numberIsSafeInteger(+metadata) || LapysJS.warn(metadata, 'must', 'safe numeral');

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (args.length > 2) {
                                        // Initialization > Beta
                                        let beta = -1;

                                        // Function > Interval
                                        (function interval() {
                                            // Data
                                            (beta < 0) || data.call(that);

                                            // Update > Beta
                                            beta += 1;

                                            // Set Timeout
                                            (beta > alpha - 1) || tmp.functions.setTimeout(interval, +metadata)
                                        })();

                                        // Return
                                        return tmp.functions.setInterval(function() {}, LDK.infinity)
                                    }

                                    else
                                        // Return
                                        return tmp.functions.setInterval.apply(that, args)
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Log
                        LDK.objectDefProp(tmp.value, 'log', {
                            // Value
                            value: function log() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // [Function]
                                (tmp.objects.console.log || tmp.functions.log).apply(tmp.objects.console || window.console, args);

                                // Return
                                return args.length > 1 ? args : args[0]
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Math
                            // Average
                            LDK.isFunction(Math.avg) || LDK.objectDefProp(Math, 'avg', {
                                // Value
                                value: function avg() {
                                    // Initialization > (Arguments, Data)
                                    let args = [...arguments],
                                        data = 0;

                                    /* Loop
                                            [for:of statement]

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        data += i;

                                    // Return
                                    return data / args.length
                                },

                                // Writable
                                writable: LDK.true
                            });

                            // Invert
                            LDK.isFunction(Math.invert) || LDK.objectDefProp(Math, 'invert', {
                                // Value
                                value: function invert() {
                                    // Return
                                    return 1 / arguments[0]
                                },

                                // Writable
                                writable: LDK.true
                            });

                            // Random > Range
                            LDK.objectDefProp(Math.random, 'range', {
                                // Value
                                value: function range() {
                                    // Initialization > (Arguments, Data, Target)
                                    let args = [...arguments].sort(),
                                        data = max(args[0], args[1]) - min(args[0], args[1]),
                                        that = this;

                                    // Function
                                        /* Main
                                                --- NOTE ---
                                                    #lapys: Return the best number value.
                                        */
                                        function main() {
                                            // Initialization > Data
                                            let data = LDK.string(arguments[0]);

                                            /* Logic
                                                    [if statement]

                                                > Return
                                            */
                                            if (data.indexOf('x') > -1)
                                                return LDK.numberParseInt(data);

                                            // Return
                                            return LDK.numberParseFloat(data)
                                        }

                                        /* Maximum
                                                --- NOTE ---
                                                    #lapys: Try to return a numeric value.
                                        */
                                        function max() {
                                            // Initialization > Arguments
                                            let args = [...arguments];

                                            // Return
                                            return (LDK.isFunction(window.max) ? (function(){let a=window.max.apply(window,args);return LDK.isNumber(a)?a:tmp.functions.max.apply(tmp.objects.Math,args)}) : (function() {let a=tmp.functions.max.apply(tmp.objects.Math,args);return LDK.isNumber(a)?a:window.max.apply(window,args)}))()
                                        }

                                        /* Minimum
                                                --- NOTE ---
                                                    #lapys: Try to return a numeric value.
                                        */
                                        function min() {
                                            // Initialization > Arguments
                                            let args = [...arguments];

                                            // Return
                                            return (LDK.isFunction(window.min) ? (function(){let a=window.min.apply(window,args);return LDK.isNumber(a)?a:tmp.functions.min.apply(tmp.objects.Math,args)}) : (function() {let a=tmp.functions.min.apply(tmp.objects.Math,args);return LDK.isNumber(a)?a:window.min.apply(window,args)}))()
                                        }

                                    /* Logic
                                            [if statement]

                                        > Return
                                    */
                                    if (data > -1 && data < 2)
                                        return min(args[0], args[1]) + that();

                                    // Update > Data
                                    data = that() * (max(main(args[0]), main(args[1])) - min(main(args[0]), main(args[1]))) + min(main(args[0]), main(args[1]));

                                    // Return
                                    return +LDK.string((data < (max(main(args[0]), main(args[1]))) + 1) || max(main(args[0]), main(args[1]))).replace('true', LDK.string((data > min(main(args[0]), main(args[1])) - 1) || min(main(args[0]), main(args[1]))).replace('true', data))
                                },

                                // Writable
                                writable: LDK.true
                            });
                                // Definition
                                LDK.objectDefProp(tmp.functions.random, 'range', Math.random.range);

                            // Range
                            LDK.isFunction(Math.range) || LDK.objectDefProp(Math, 'range', {
                                // Value
                                value: function range() {
                                    // Initialization > Arguments
                                    let args = [...arguments];

                                    // Return
                                    return tmp.functions.max.apply(tmp.functions, args) - tmp.functions.min.apply(tmp.functions, args)
                                },

                                // Writable
                                writable: LDK.true
                            });

                            // Root
                            LDK.isFunction(Math.root) || LDK.objectDefProp(Math, 'root', {
                                // Value
                                value: function root() {
                                    // Initialization > Arguments
                                    let args = [...arguments];

                                    // Return
                                    return tmp.functions.pow(LDK.numberParseNumber(args[0]), (1 / LDK.numberParseNumber(args[1])))
                                },

                                // Writable
                                writable: LDK.true
                            });

                            // Statistics
                            'stat' in Math || LDK.objectDefProp(Math, 'stat', {
                                // Value
                                value: LDK.namedObject('MathStatistics', {
                                    // Arithmetic Mean
                                    aMean: function arithmeticMean() {
                                        // Initialization > (Arguments, Data)
                                        let args = [...arguments],
                                            data = 0;

                                        /* Loop
                                                [for:of statement]

                                            > Update > Data
                                        */
                                        for (let i of args)
                                            data += i;

                                        // Return
                                        return data / args.length
                                    },

                                    // Geometric Mean
                                    gMean: function geometricMean() {
                                        // Initialization > (Arguments, Data, Metadata)
                                        let args = [...arguments],
                                            data = 1,
                                            metadata = args.length;

                                        /* Loop
                                                [for statement]

                                            > Update > Data
                                        */
                                        for (let i of args)
                                            data *= i;

                                        // Return
                                        return tmp.functions.pow(data, 1 / metadata)
                                    },

                                    // Harmonic Mean
                                    hMean: function harmonicMean() {
                                        // Initialization > (Arguments, Data)
                                        let args = [...arguments],
                                            data = 0;

                                        /* Loop
                                                [for statement]

                                            > Update > Data
                                        */
                                        for (let i of args)
                                            data += 1 / i;

                                        // Return
                                        return args.length / data
                                    },

                                    // Mean Absolute Deviation
                                    meanAbsDev: function meanAbsoluteDeviation() {
                                        // Initialization > (Arguments, Data, Metadata)
                                        let args = [...arguments],
                                            data = 0,
                                            metadata = (function() {let a=[...arguments],b=0;for(let i of a)b+=i;return b/a.length}).apply(this, args);

                                        /* Loop
                                                [for statement]

                                            > Update > Data
                                        */
                                        for (let i of args)
                                            data += Math.abs(i - metadata);

                                        // Return
                                        return data / args.length
                                    },

                                    // Median
                                    median: function median() {
                                        // Initialization > Arguments
                                        let args = [...arguments].sort();

                                        // Return
                                        return ((args.length / 2) in args ? args[args.length / 2] : [args[LDK.numberParseInt(args.length / 2)], args[LDK.numberParseInt(args.length / 2) + 1]]).removeDuplicatedElements()
                                    },

                                    // Mode
                                    mode: function mode() {
                                        // Initialization > Data
                                        let data = [...arguments].getCommonElements();

                                        // Return
                                        return data.length > 1 ? data : data[0]
                                    },

                                    // Skew Coefficient
                                    skewCoeff: function skewCoefficient() {
                                        // Initialization
                                            // Arguments, Target, Mean, Median, Mode, Standard Deviation
                                            let args = [...arguments],
                                                that = this,
                                                mean = (function() {let a=[...arguments],b=0;for(let i of a)b+=i;return b/a.length}),
                                                median = (function() {let a=[...arguments].sort();return((a.length / 2) in a ? a[a.length / 2] : [a[LDK.numberParseInt(a.length / 2)], a[LDK.numberParseInt(a.length / 2) + 1]]).removeDuplicatedElements()}),
                                                mode = (function() {let a=[...arguments].getCommonElements();return a.length>1?median.apply(this,a):a[0]}),
                                                sDev = (function() {let a=this,$b=(function(){let a=[...arguments],b=0,c=(function() {let a=[...arguments],b=0;for(let i of a)b+=i;return b/a.length}),d=c.apply(this, a);for(let i of a)b+=tmp.functions.pow(i-d,2);return b/a.length-1});return tmp.functions.sqrt($b.apply(a, [...arguments]))});

                                            // Mean, Median, Mode, Standard Deviation
                                            let $mean = mean.apply(that, args),
                                                $median = median.apply(that, args),
                                                $mode = mode.apply(that, args),
                                                $sDev = sDev.apply(that, args);

                                        // Return
                                        return [
                                            ($mean - (LDK.isArray($mode) ? mean.apply(that, $mode) : $mode)) - $sDev,
                                            (3 * ($mean - (LDK.isArray($median) ? mean.apply(that, $median) : $median))) / $sDev
                                        ]
                                    },

                                    // Standard Deviation
                                    sDev: function standardDeviation() {
                                        // Initialization > (Target, Variation Coefficient)
                                        let that = this,
                                            $var = (function() {let a=[...arguments],b=0,c=(function() {let a=[...arguments],b=0;for(let i of a)b+=i;return b/a.length}),d=c.apply(this, a);for(let i of a)b+=tmp.functions.pow(i-d,2);return b/a.length-1});

                                        // Return
                                        return tmp.functions.sqrt($var.apply(that, [...arguments]))
                                    },

                                    // Variance
                                    'var': function variationCoefficient() {
                                        // Initialization > (Arguments, Data, Metadata)
                                        let args = [...arguments],
                                            data = 0,
                                            mean = (function() {let a=[...arguments],b=0;for(let i of a)b+=i;return b/a.length}),
                                            metadata = mean.apply(this, args);

                                        /* Loop
                                                [for statement]

                                            > Update > Data
                                        */
                                        for (let i of args)
                                            data += tmp.functions.pow(i - metadata, 2);

                                        // Return
                                        return data / args.length - 1
                                    }
                                })
                            });

                        // Maximum
                        LDK.objectDefProp(tmp.value, 'max', {
                            // Value
                            value: function max() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = args[0];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Function > Test
                                    function test() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = 0;

                                        /* Logic
                                                [if:else if:else statement]

                                            > (Update > Metadata) | Return
                                        */
                                        if ((LDK.numberIsNaN(data) && LDK.isNumber(data)) || LDK.isNonConstructible(data) || LDK.isSymbol(data))
                                            metadata = 0;

                                        else if (LDK.isArrayLike(data) || LDK.isObject(data))
                                            metadata = 'length' in data ? data.length : LDK.objectKeys(data).length;

                                        else if (LDK.isBool(data))
                                            metadata = data ? 1: 0;

                                        else if (LDK.isFunction(data) || LDK.isString(data))
                                            metadata = 'length' in LDK.object(data) ? data.length : data();

                                        else if (LDK.isRegex(data))
                                            metadata = data.source.length;

                                        else if (!LDK.numberIsFinite(data))
                                            return LDK.infinity;

                                        else
                                            metadata = LDK.numberParseNumber(data);

                                        // Return
                                        return LDK.numberParseNumber(metadata)
                                    }

                                    /* Loop
                                            Index Arguments.

                                        > Update > Result
                                    */
                                    for (let i of args)
                                        (test(i) < test(result) + 1) || (result = i);

                                    // Return
                                    return test(result)
                                }

                                // Return
                                return 0
                            }
                        });

                        // (Get) Maximum (Object)
                        LDK.objectDefProp(tmp.value, 'maxg', {
                            // Value
                            value: function maxg() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = args[0];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Function > Test
                                    function test() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = 0;

                                        /* Logic
                                                [if:else if:else statement]

                                            > (Update > Metadata) | Return
                                        */
                                        if ((LDK.numberIsNaN(data) && LDK.isNumber(data)) || LDK.isNonConstructible(data) || LDK.isSymbol(data))
                                            metadata = 0;

                                        else if (LDK.isArrayLike(data) || LDK.isObject(data))
                                            metadata = 'length' in data ? data.length : LDK.objectKeys(data).length;

                                        else if (LDK.isBool(data))
                                            metadata = data ? 1: 0;

                                        else if (LDK.isFunction(data) || LDK.isString(data))
                                            metadata = 'length' in LDK.object(data) ? data.length : data();

                                        else if (LDK.isRegex(data))
                                            metadata = data.source.length;

                                        else if (!LDK.numberIsFinite(data))
                                            return LDK.infinity;

                                        else
                                            metadata = LDK.numberParseNumber(data);

                                        // Return
                                        return LDK.numberParseNumber(metadata)
                                    }

                                    /* Loop
                                            Index Arguments.

                                        > Update > Result
                                    */
                                    for (let i of args)
                                        (test(i) < test(result) + 1) || (result = i);

                                    // Return
                                    return result
                                }

                                // Return
                                return 0
                            }
                        });

                        // Minimum
                        LDK.objectDefProp(tmp.value, 'min', {
                            // Value
                            value: function min() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = args[0];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Function > Test
                                    function test() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = 0;

                                        /* Logic
                                                [if:else if:else statement]

                                            > (Update > Metadata) | Return
                                        */
                                        if ((LDK.numberIsNaN(data) && LDK.isNumber(data)) || LDK.isNonConstructible(data) || LDK.isSymbol(data))
                                            metadata = 0;

                                        else if (LDK.isArrayLike(data) || LDK.isObject(data))
                                            metadata = 'length' in data ? data.length : LDK.objectKeys(data).length;

                                        else if (LDK.isBool(data))
                                            metadata = data ? 1: 0;

                                        else if (LDK.isFunction(data) || LDK.isString(data))
                                            metadata = 'length' in LDK.object(data) ? data.length : data();

                                        else if (LDK.isRegex(data))
                                            metadata = data.source.length;

                                        else if (!LDK.numberIsFinite(data))
                                            return LDK.infinity;

                                        else
                                            metadata = LDK.numberParseNumber(data);

                                        // Return
                                        return LDK.numberParseNumber(metadata)
                                    }

                                    /* Loop
                                            Index Arguments.

                                        > Update > Result
                                    */
                                    for (let i of args)
                                        (test(i) > test(result) + 1) || (result = i);

                                    // Return
                                    return test(result)
                                }

                                // Return
                                return 0
                            }
                        });

                        // (Get) Minimum (Object)
                        LDK.objectDefProp(tmp.value, 'ming', {
                            // Value
                            value: function ming() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = args[0];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Function > Test
                                    function test() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = 0;

                                        /* Logic
                                                [if:else if:else statement]

                                            > (Update > Metadata) | Return
                                        */
                                        if ((LDK.numberIsNaN(data) && LDK.isNumber(data)) || LDK.isNonConstructible(data) || LDK.isSymbol(data))
                                            metadata = 0;

                                        else if (LDK.isArrayLike(data) || LDK.isObject(data))
                                            metadata = 'length' in data ? data.length : LDK.objectKeys(data).length;

                                        else if (LDK.isBool(data))
                                            metadata = data ? 1: 0;

                                        else if (LDK.isFunction(data) || LDK.isString(data))
                                            metadata = 'length' in LDK.object(data) ? data.length : data();

                                        else if (LDK.isRegex(data))
                                            metadata = data.source.length;

                                        else if (!LDK.numberIsFinite(data))
                                            return LDK.infinity;

                                        else
                                            metadata = LDK.numberParseNumber(data);

                                        // Return
                                        return LDK.numberParseNumber(metadata)
                                    }

                                    /* Loop
                                            Index Arguments.

                                        > Update > Result
                                    */
                                    for (let i of args)
                                        (test(i) > test(result) + 1) || (result = i);

                                    // Return
                                    return result
                                }

                                // Return
                                return 0
                            }
                        });

                        // Number
                        LDK.objectDefProp(tmp.value, 'num', {
                            // Value
                            value: function Number() {
                                // Return
                                return LDK.numberParseNumber.apply(LDK.number, [...arguments])
                            }
                        });

                        // Object
                        LDK.objectDefProp(tmp.value, 'obj', {
                            // Value
                            value: function Object() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = {};

                                /* Loop
                                        Index Arguments.

                                    > (...)
                                */
                                for (let i of args)
                                    LDK.isObject(i) ? data = LDK.objectAssign(data, LDK.object(i)) : data['[[PrimitiveValue]]'] = i;

                                /* Logic
                                        [if statement]

                                    > Modification > Data
                                */
                                if ('[[PrimitiveValue]]' in data) {
                                    // To String
                                    LDK.objectDefProp(data, 'toString', {
                                        // Configurable
                                        configurable: LDK.true,

                                        // Enumerable
                                        enumerable: LDK.false,

                                        // Value
                                        value: function toString() {
                                            // Return
                                            return LDK.string(this['[[PrimitiveValue]]'])
                                        },

                                        // Writable
                                        writable: LDK.true
                                    });

                                    // Value Of
                                    LDK.objectDefProp(data, 'valueOf', {
                                        // Configurable
                                        configurable: LDK.true,

                                        // Enumerable
                                        enumerable: LDK.false,

                                        // Value
                                        value: function valueOf() {
                                            // Return
                                            return this['[[PrimitiveValue]]']
                                        },

                                        // Writable
                                        writable: LDK.true
                                    })
                                }

                                // Return
                                return data
                            }
                        });

                        // Parse Measurement
                        LDK.objectDefProp(tmp.value, 'parseMeasurement', {
                            // Value
                            value: function parseMeasurement() {
                                // Return
                                return LDK.numberParseMeasurement.apply(LDK.number, [...arguments])
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Parse Number
                        LDK.objectDefProp(tmp.value, 'parseNumber', {
                            // Value
                            value: function parseNumber() {
                                // Return
                                return LDK.numberParseNumber.apply(LDK.number, [...arguments])
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Paste
                        LDK.isFunction(tmp.value.paste) || LDK.objectDefProp(tmp.value, 'paste', {
                            // Value
                            value: function paste() {
                                // Initialization > (Data, Metadata, Alpha, Beta)
                                let data = arguments[0],
                                    metadata = document.designMode,
                                    alpha = document.head || document.documentElement;

                                /* Logic
                                        [if statement]
                                */
                                if (LDK.docQueComEnabled('paste') && LDK.docQueComSupported('paste'))
                                    // Error Handling
                                    try {
                                        // LapysJS > Error
                                        LDK.isNode(data) || LapysJS.error(data, 'must', 'node');

                                        // Modification > Document > Design Mode
                                        document.designMode = 'on';

                                        // Modification > Data > Content Editable
                                        data.contentEditable = LDK.true;

                                        // Data > Focus
                                        data.focus();

                                        // Select > Data
                                        select(data);

                                        // LapysJS Development Kit > Document Execute Command
                                        LDK.docExecCom('paste', LDK.false, LDK.null);

                                        // Data > Blur
                                        data.blur();

                                        // Modification > Document > Design Mode
                                        document.designMode = metadata
                                    }

                                    catch (error) {
                                        // LapysJS > Error
                                        LapysJS.error("Query command 'paste' can not be executed.")
                                    }

                                else
                                    // LapysJS > Warn
                                    LapysJS.warn("Query command 'paste' is not supported.")

                                // Return
                                return arguments.length ? data : LDK.null
                            }
                        });

                        // Power
                        LDK.objectDefProp(tmp.value, 'pow', {
                            // Value
                            value: function pow() {
                                // Return
                                return tmp.functions.pow.apply(tmp.objects.Math, [...arguments])
                            }
                        });

                        // Random
                        LDK.objectDefProp(tmp.value, 'rand', {
                            // Value
                            value: function random() {
                                // Initialization > (Arguments, Data, Metadata, Alpha)
                                let args = [...arguments].sort(),
                                    data = LDK.isString(args[args.length - 1]) ? args.slice(0, -1) : args,
                                    metadata = args.length > 1 ? args[args.length - 1] : LDK.null,
                                    alpha = tmp.functions.random();

                                // Function > Test
                                function test() {
                                    // Return
                                    return data.length > 1 ? tmp.functions.random.range(maxg.apply(min, data), ming.apply(min, data)) : data[0]
                                };

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (args.length) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (LDK.isString(metadata))
                                        /* Logic
                                                [switch:case:default statement]

                                            > Return
                                        */
                                        switch (metadata) {
                                            // Switch
                                            case 'switch':
                                                return data.randomElement;

                                            // Default
                                            default:
                                                return test()
                                        }

                                    // Return
                                    return test()
                                }

                                // Return
                                return alpha
                            }
                        });

                        // Range
                        LDK.objectDefProp(tmp.value, 'range', {
                            // Value
                            value: function range() {
                                // Initialization > (Arguments, Data, Start, Stop, Step)
                                let args = [...arguments],
                                    data = [],
                                    start = args[0],
                                    stop = args[1],
                                    step = args[2];

                                /* Logic
                                        [if statement]

                                    > Update > (Stop, Start)
                                */
                                if (LDK.isNonConstructible(stop)) {
                                    stop = start;
                                    start = 0
                                }

                                // Update > Step
                                !LDK.isNonConstructible(step) || (step = 1);

                                /* Logic
                                        [if statement]

                                    > Return
                                */
                                if ((step > 0 && start > stop - 1) || (step < 0 && start < stop + 1))
                                    return [];

                                /* Loop
                                        [for statement]

                                    > Update > Data
                                */
                                for (let i = start; step > 0 ? i < stop : i > stop; i += step)
                                    data.push(i);

                                // Return
                                return data
                            }
                        });

                        // Register Element
                        LDK.objectDefProp(tmp.value, 'registerElement', {
                            // Value
                            value: function registerElement() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Function > Register
                                    function register() {
                                        // Initialization > (Arguments, Data)
                                        let args = [...arguments],
                                            data = args[0];

                                        /* Logic
                                                [if:else if statement]

                                            > Return
                                        */
                                        if ('customElements' in window && LDK.isFunction((window.customElements || tmp.object).define))
                                            return customElements.define.apply(customElements, args);

                                        else if (LDK.isFunction(LDK.$doc.registerElement))
                                            return LDK.$doc.registerElement.apply(LDK.$doc, args);

                                        // LapysJS > Error
                                        LapysJS.error(LDK.string(data) + " could not be added to the 'CustomElementRegistry' because CustomElements are not yet supported in this browser.")
                                    }

                                    /* Logic
                                            [if:else if:else statement]

                                        > (...)
                                    */
                                    if (!LDK.isArray(args[0]) && !LDK.isArray(args[1]))
                                        register.apply(window, LDK.arrayProto.addElementToFront.apply([
                                            LDK.string(args[0]),
                                            args.length > 1 ? args[1] : eval('(function(){return class HTMLCustomElement extends HTMLElement{}})()'),
                                            args.length > 2 ? args[2] : LDK.null
                                        ], args.slice(3)));

                                    else if (LDK.isArray(args[0]) && !LDK.isArray(args[1]))
                                        for (let i of args[0])
                                            register.apply(window, LDK.arrayProto.addElementToFront.apply([
                                                LDK.string(i),
                                                args.length > 1 ? args[1] : eval('(function(){return class HTMLCustomElement extends HTMLElement{}})()'),
                                                args.length > 2 ? args[2] : LDK.null
                                            ], args.slice(3)));

                                    else
                                        LapysJS.error(["'registerElement'", "'" + that.constructor.name + "'"], 'argument', 'Invalid argument set given')
                                }

                                // Return
                                return 'CustomElementRegistry' in window
                            }
                        });

                        // Regular Expression
                        LDK.objectDefProp(tmp.value, 'regex', {
                            // Value
                            value: function RegExp() {
                                // Initialization > (Arguments, Argument Set, Data, Flags, Source)
                                let args = [...arguments],
                                    argSet = args.slice(0, -1),
                                    data = args[0],
                                    flags = [LDK.string(args[args.length - 1])],
                                    source = '';

                                /* Logic
                                        [if statement]
                                */
                                if (args.length)
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (args.length == 1)
                                        // Return
                                        return LDK.isRegex(data) ? LDK.regex(data.source, data.flags) : LDK.regex(LDK.string(data));

                                    else {
                                        /* Loop
                                                Index Argument Set.

                                            > Update > (Flags, Source)
                                        */
                                        for (let i of argSet) {
                                            !LDK.isRegex(i) || flags.push(i.flags);
                                            source += LDK.isRegex(i) ? i.source : LDK.string(i);
                                        }

                                        // Return
                                        return LDK.regex(source, flags.removeDuplicatedElements().join(''))
                                    }

                                // Return
                                return LDK.regex()
                            }
                        });

                        // Release Input
                        LDK.objectDefProp(tmp.value, 'releaseInput', {
                            // Value
                            value: function releaseInput() {
                                // Initialization > (...)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args[1],
                                    alpha = args[2];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Initialization > Beta
                                    let beta = [...perm.strictlyWatchedElements];

                                    // LapysJS > Error
                                    LDK.isElement(data) || LapysJS.error(data, 'must', 'element');

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (args.length == 1) {
                                        /* Loop
                                                Index Beta.
                                        */
                                        for (let i of beta)
                                            /* Logic
                                                    [if statement]
                                            */
                                            if (i.element == data) {
                                                // Update > (Permanent Data > Strictly Watched Elements)
                                                perm.strictlyWatchedElements.removeElement(i);

                                                // Break
                                                break
                                            }
                                    }

                                    else if (args.length == 2) {
                                        // LapysJS > Error
                                        LDK.isRegex(metadata) || LDK.isString(metadata) || LapysJS.error(metadata, 'must', ['regular expression', 'string']);

                                        /* Loop
                                                Index Beta.
                                        */
                                        for (let i of beta)
                                            /* Logic
                                                    [if statement]
                                            */
                                            if (i.element == data && (i.match == metadata || (i.match.flags == metadata.flags && i.match.source == metadata.source && LDK.isRegex(metadata)))) {
                                                // Update > (Permanent Data > Strictly Watched Elements)
                                                perm.strictlyWatchedElements.removeElement(i);

                                                // Break
                                                break
                                            }
                                    }

                                    else if (args.length == 3) {
                                        // LapysJS > Error
                                        (args.length < 3) || LDK.isFunction(alpha) || LDK.isString(alpha) || LapysJS.error(alpha, 'must', ['evaluation string', 'function']);

                                        // Update > Alpha
                                        (args.length < 3) || !LDK.isString(alpha) || (alpha = func(alpha));

                                        /* Loop
                                                Index Beta.
                                        */
                                        for (let i of beta)
                                            /* Logic
                                                    [if statement]
                                            */
                                            if (i.element == data && (i.match == metadata || (i.match.flags == metadata.flags && i.match.source == metadata.source && LDK.isRegex(metadata))) && LDK.getSourceCode(i) == LDK.getSourceCode(alpha)) {
                                                // Update > (Permanent Data > Strictly Watched Elements)
                                                perm.strictlyWatchedElements.removeElement(i);

                                                // Break
                                                break
                                            }
                                    }

                                    // Return
                                    return data
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Repeat
                        LDK.objectDefProp(tmp.value, 'repeat', {
                            // Value
                            value: function repeat() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Logic
                                        [if:else statement]
                                */
                                if (args.length > 1) {
                                    // Initialization > Repeater
                                    let repeater = LDK.namedObject('LapysJSIterator', {
                                        // Iteration Count
                                        iterationCount: args.slice(-1)[0],

                                        // Methods
                                        methods: args.slice(0, -1),

                                        // Object
                                        object: LDK.null,

                                        // Sequence
                                        sequence: 'defer'
                                    });

                                    /* Logic
                                            [if statement]
                                    */
                                    if (args[args.length - 1] == 'async' || args[args.length - 1] == 'defer') {
                                        // Modification > Repeater > Sequence
                                        (args[args.length - 1] != 'async') || (repeater.sequence = 'async');

                                        // Update > Arguments
                                        args = args.slice(0, -1);

                                        // Modification > Repeater > (Iteration Count, Methods)
                                        repeater.iterationCount = args.slice(-1)[0];
                                        repeater.methods = args.slice(0, -1)
                                    }

                                    // Modification > Repeater > Iteration Count
                                    repeater.iterationCount = tmp.functions.abs(
                                        LDK.isRegex(repeater.iterationCount) || LDK.isString(repeater.iterationCount) ? (
                                            LDK.isRegex(repeater.iterationCount) ?
                                                (repeater.object = repeater.iterationCount.source, repeater.iterationCount.source.length) :
                                                (repeater.object = repeater.iterationCount, repeater.iterationCount.length)
                                        ) : (repeater.object = repeater.iterationCount, LDK.string(repeater.iterationCount) == 'Infinity' ? LDK.infinity : LDK.numberParseNumber(repeater.iterationCount))
                                    );

                                    // Initialization > (Data, Metadata, Alpha, Beta Iterator)
                                    let data = repeater.iterationCount,
                                        metadata = repeater.methods,
                                        alpha = repeater.object,
                                        beta = LDK.isFunction(alpha) ? alpha.getParameters() : [],
                                        iterator = 0;

                                    /* Loop
                                            Index Metadata.

                                        > Modification > Repeater > Methods
                                    */
                                    for (let i in metadata)
                                        !LDK.isString(metadata[i]) || (repeater.methods[i] = func(metadata[i]));

                                    /* Loop
                                            Index Metadata.

                                        > LapysJS > Error
                                    */
                                    for (let i of metadata)
                                        LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                    // Initialization > Iteration Count
                                    let iterationCount = 1;

                                    // Function > Iterate
                                    function iterate() {
                                        // Initialization > (Indexer, Methods)
                                        let indexer = 0,
                                            methods = repeater.methods,
                                            $methods = methods.length;

                                        /* Loop
                                                [while statement]
                                        */
                                        while (indexer < $methods) {
                                            // Initialization > Miscellaneous Data
                                            let misc = [iterationCount - 1, LDK.isFunction(alpha) ? beta : LDK.null];

                                            // Initialization > (Key, Value)
                                            let key = LDK.isFunction(alpha) ? misc[1][misc[0]].address : LDK.objectKeys(alpha)[misc[0]],
                                                value = LDK.isFunction(alpha) ? misc[1][misc[0]].value : LDK.objectValues(alpha)[misc[0]];

                                            // Methods
                                            methods[indexer].call(repeater, indexer, iterationCount, data, alpha, LDK.numberIsSafeInteger(+key) ? +key : key, value);

                                            // Update > Indexer
                                            indexer += 1
                                        }

                                        // Update > Iteration Count
                                        iterationCount += 1
                                    }

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (repeater.sequence == 'async' || !LDK.numberIsSafeInteger(repeater.iterationCount)) {
                                        // Update > Iterator
                                        iterator = -1;

                                        // Initialization > Metadata
                                        let metadata = LDK.true;

                                        // Function > Iteration
                                        (function iteration() {
                                            // Iterate
                                            metadata || iterate();

                                            // Update > (Iterator, Metadata)
                                            iterator += 1;
                                            metadata = LDK.false;

                                            // Request Animation Frame > Iteration
                                            (iterator > data - 1) || tmp.functions.requestAnimationFrame(iteration)
                                        })()
                                    }

                                    else
                                        /* Loop
                                                [while statement]
                                        */
                                        while (iterator < data) {
                                            // Iterate
                                            iterate();

                                            // Update > Iterator
                                            iterator += 1
                                        }

                                    // Modification > Arguments > Iteration Count
                                    args.iterationCount = repeater.iterationCount
                                }

                                else
                                    // LapysJS > Error
                                    LapysJS.error(["'repeat'", "'" + that.constructor.name + "'"], 'argument', [2, args.length]);

                                // Return
                                return args.iterationCount
                            }
                        });

                        // Root
                        LDK.objectDefProp(tmp.value, 'root', {
                            // Value
                            value: function root() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // Return
                                return tmp.functions.pow(LDK.numberParseNumber(args[0]), (1 / LDK.numberParseNumber(args[1])))
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Select
                        LDK.objectDefProp(tmp.value, 'select', {
                            // Value
                            value: function select() {
                                // Initialization > Data
                                let data = arguments[0];

                                // LapysJS > Error
                                args.length || LapysJS.error(["'select'", "'Window'"], 'argument', [1, 0]);
                                LDK.isElement(data) || LapysJS.error(data, 'must', 'element');

                                /* Logic
                                        [if statement]
                                */
                                if (typeof getSelection == 'function') {
                                    // Initialization > (Metadata, Alpha)
                                    let metadata = LDK.docCreateRange(),
                                        alpha = getSelection();

                                    // Metadata > Select Node Contents
                                    metadata.selectNodeContents(data);

                                    // Alpha > (Remove All Ranges, Add Range)
                                    alpha.removeAllRanges();
                                    alpha.addRange(metadata)
                                }

                                // Data > Select
                                !LDK.isFunction(data.select) || data.select();

                                // Return
                                return data
                            }
                        });

                        // Sequence
                        LDK.objectDefProp(tmp.value, 'sequence',{
                            // Value
                            value: function sequence() {
                                // Initialization > (Data, Metadata)
                                let data = LDK.string(arguments[0]),
                                    metadata = arguments[1];

                                /* Logic
                                        [switch:case:default statement]

                                    > (...)
                                */
                                switch (metadata) {
                                    // Decode URI
                                    case 'decodeURI':
                                        data = LDK.isNativeFunction(tmp.functions.decodeURI) ? tmp.functions.decodeURI(data) : data;
                                        break;

                                    // Decode URI Component
                                    case 'decodeURIComponent':
                                        data = LDK.isNativeFunction(tmp.functions.decodeURIComponent) ? tmp.functions.decodeURIComponent(data) : data;
                                        break;

                                    // Encode
                                    case 'encode':
                                        data = tmp.functions.escape(data);
                                        break;

                                    // Encode URI
                                    case 'encodeURI':
                                        data = LDK.isNativeFunction(tmp.functions.encodeURI) ? tmp.functions.encodeURI(data) : data;
                                        break;

                                    // Encode URI Component
                                    case 'encodeURIComponent':
                                        data = LDK.isNativeFunction(tmp.functions.encodeURIComponent) ? tmp.functions.encodeURIComponent(data) : data;
                                        break;

                                    // HTML
                                    case 'html':
                                        tmp.element.innerHTML = data;
                                        data = tmp.element.innerHTML;
                                        break;

                                    // [Default]
                                    default:
                                        LapysJS.error(metadata, 'only', ['html', 'decodeURI', 'decodeURIComponent', 'encode', 'encodeURI', 'encodeURIComponent'])
                                }

                                // Return
                                return data
                            },

                            // Writable
                            writable: LDK.true
                        });

                        /* Sleep
                                --- NOTE ---
                                    #lapys: Inspired from PHP syntax.
                        */
                        LDK.objectDefProp(tmp.value, 'sleep', {
                            // Value
                            value: function sleep() {
                                // Initialization > (Data, Metadata)
                                let data = arguments[0],
                                    metadata = (new Date).getTime();

                                /* Loop
                                        [for statement]
                                */
                                for (let i = 0; i < 1e7; i += 1)
                                    /* Logic
                                            [if:else if:else statement]

                                        > Break
                                    */
                                    if ((new Date().getTime() - metadata) > data)
                                        break
                            }
                        });

                        // Strict Input
                        LDK.objectDefProp(tmp.value, 'strictInput', {
                            // Value
                            value: function strictInput() {
                                // Initialization > (...)
                                let args = [...arguments].slice(0, 3),
                                    data = args[0],
                                    metadata = args[1],
                                    alpha = args[2],
                                    beta = (function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join(''),
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // LapysJS > Error
                                    LDK.isElement(data) || LapysJS.error(data, 'must', 'element');
                                    (function(){let a=data,b=a.__proto__,c=[];while(b){c.push(b);b=b.__proto__}return c.indexOf(LDK.htmlInputEleProto)>-1||c.indexOf(LDK.htmlTextAreaEleProto)>-1})() || LapysJS.error(data, 'must', ["'input'", "'textarea' element"]);
                                    (args.length > 1) || LapysJS.error(["'strictInput'", "'" + that.constructor.name + "'"], 'argument', 'Missing input match');

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if ((a=>{for(let i in a)a[i]=a[i].element;return a})(perm.strictlyWatchedElements).indexOf(data) > -1)
                                        // LapysJS > Error
                                        LapysJS.error('Can only watch an element with a single input match, not more.');

                                    else {
                                        // LapysJS > Error
                                        LDK.isRegex(metadata) || LDK.isString(metadata) || LapysJS.error(metadata, 'must', ['regular expression', 'string']);
                                        (args.length < 3) || LDK.isFunction(alpha) || LDK.isString(alpha) || LapysJS.error(alpha, 'must', ['evaluation string', 'function']);

                                        // Update > Alpha
                                        (args.length < 3) || !LDK.isString(alpha) || (alpha = func(alpha));

                                        // Initialization > (Delta, Upsilon)
                                        let delta = LDK.isRegex(metadata) ? LDK.regex(metadata.source, metadata.flags.replace('g', '') + 'g') : LDK.regex(metadata.replace(LDK.regex('['+beta.replace(/(?:)/g, '\\\\').slice(0, -'\\\\'.length)+']', 'g'), data => {
                                            // Return
                                            return data.replace('\\', '')
                                        }), 'g'), upsilon = '';

                                        // Update > (Permanent Data > Strictly Watched Elements)
                                        perm.strictlyWatchedElements.push({element: data, function: alpha, match: metadata});

                                        // (Data > Event > (Change, Input, Key Down)) | Watch
                                        alpha ? (function watch() {
                                            // Initialization > (Gamma, Epsilon)
                                            let gamma = data.value,
                                                epsilon = gamma.match(delta);

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (gamma && gamma != (epsilon || [LDK.constants.REGEX_SET]).join(''))
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (upsilon != gamma) {
                                                    // Alpha
                                                    alpha.call(that);

                                                    // Update > Upsilon
                                                    upsilon = gamma
                                                }

                                            // Request Animation Frame > Watch
                                            data && tmp.functions.requestAnimationFrame(watch)
                                        })() : (function watch() {
                                            // Initialization > (Gamma, Epsilon)
                                            let gamma = data.value,
                                                epsilon = gamma.match(delta);

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (gamma && gamma != (epsilon || [LDK.constants.REGEX_SET]).join('')) {
                                                // Modification > Data > Value
                                                data.value = '';
                                                !epsilon || (data.value = epsilon.join(''))
                                            }

                                            // Request Animation Frame > Watch
                                            data && tmp.functions.requestAnimationFrame(watch)
                                        })()
                                    }

                                    // Return
                                    return data
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // String
                        LDK.objectDefProp(tmp.value, 'str', {
                            // Value
                            value: function String() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = '';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data += (function() {
                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (LDK.isArrayLike(i)) {
                                            // Initialization > Data
                                            let data = [...i];

                                            /* Loop
                                                    Index Data.
                                            */
                                            for (let i in data) {
                                                // Initialization > Metadata
                                                let metadata = data[i];

                                                // Update > Data
                                                data[i] = LDK.isString(metadata) ? '"' + metadata.replace(/"/g, '\\"') + '"' : LDK.string(metadata);
                                            }

                                            // Return
                                            return '[' + data.join(', ') + ']'
                                        }

                                        else if (LDK.isFunction(i)) {
                                            // Initialization > Data
                                            let data = LDK.string(i);

                                            // Return
                                            return data.length > 300 ? (data.getBeforeChar('(') + '(' + i.getHead() + ') { … }') : data
                                        }

                                        else if (LDK.isObject(i)) {
                                            // Initialization > Data
                                            let data = '';

                                            /* Loop
                                                    Index [Loop Iterator].
                                            */
                                            for (let j in i) {
                                                // Initialization > Metadata
                                                let metadata = i[j];

                                                // Update > Data
                                                data += j + ': ' + (LDK.isString(metadata) ? '"' + metadata.replace(/"/g, '\\"') + '"' : LDK.string(metadata)) + ', ';
                                            }

                                            // Return
                                            return '{' + data.trimRightChar(', ') + '}'
                                        }

                                        else if (LDK.getConstructor(i) == LDK.attr)
                                            // Return
                                            return i.name + "='" + i.value + "'";

                                        // Return
                                        return LDK.string(i)
                                    })();

                                // Return
                                return data
                            }
                        });

                        // Stringify
                        LDK.objectDefProp(tmp.value, 'stringify', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function stringify() {
                                // Initialization > (Data, Metadata, Alpha)
                                let data = arguments[0],
                                    metadata = arguments[1],
                                    alpha = data;

                                // Function
                                    // Parse String
                                    function parseString() {
                                        // Initialization > Data
                                        let data = arguments[0];

                                        /* Loop
                                                Index Data.
                                        */
                                        for (let i in data) {
                                            // Initialization > Metadata
                                            let metadata = data[i];

                                            // Modification > Data > [Loop Iterator]
                                            data[i] = (function() {
                                                /* Logic
                                                        [if statement]

                                                    > Return
                                                */
                                                if (LDK.isElement(metadata))
                                                    return metadata.selector;

                                                // Return
                                                return string(metadata)
                                            })()
                                        }

                                        // Return
                                        return data
                                    }

                                    // String
                                    function string() {
                                        // Return
                                        return LDK.string.apply(LDK, [...arguments])
                                    }

                                /* Logic
                                        [if:else statement]
                                */
                                if (metadata) {
                                    // Initialization > Beta
                                    let beta = data.__proto__;

                                    /* Loop
                                            Index Beta.

                                        > Modification > Data > [Loop Iterator]
                                    */
                                    for (let i in data)
                                        data[i] = string(data[i]);

                                    // Error Handling
                                    try {
                                        /* Loop
                                                [while statement]
                                        */
                                        while (beta != beta.__proto__) {
                                            /* Loop
                                                    Index Beta.

                                                > Modification > Data > [Loop Iterator]
                                            */
                                            for (let i in beta)
                                                data[i] = string(beta[i]);

                                            // Update > Beta
                                            beta = beta.__proto__
                                        }
                                    } catch (error) {}

                                    // Update > Alpha
                                    alpha = data
                                }

                                else
                                    // Update > Alpha
                                    alpha = parseString(data);

                                // Return
                                return alpha
                            }
                        });

                        // Symbol
                        LDK.objectDefProp(tmp.value, 'sym', {
                            // Value
                            value: function Symbol() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments].slice(1),
                                    data = arguments[0];

                                /* Loop
                                        Index Arguments.

                                    > Error Handling > (Update > Data)
                                */
                                for (let i of args)
                                    try {
                                        data += i
                                    } catch (error) { data = LDK.string(data); data += LDK.string(i) }

                                // Return
                                return LDK.symbol(data)
                            }
                        });

                        // Timeout
                        LDK.objectDefProp(tmp.value, 'timeout', {
                            // Value
                            value: function timeout() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args[1],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Update > Data
                                    !LDK.isString(data) || (data = func(data));

                                    // LapysJS
                                        // Error
                                        LDK.isFunction(data) || LapysJS.error(data, 'must', ['evaluation string', 'function']);

                                        // Warn
                                        LDK.numberIsSafeInteger(+metadata) || LapysJS.warn(metadata, 'must', 'safe numeral');

                                    // Return
                                    return tmp.functions.setTimeout.apply(that, args)
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // When
                        LDK.objectDefProp(tmp.value, 'when', {
                            // Value
                            value: function when() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    $args = args.length,
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length)
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (!(args.length % 2)) {
                                        /* Loop
                                                Index Arguments.

                                            > Update > Arguments
                                        */
                                        for (let i = 0; i < $args; i += 1)
                                            !(i % 2) || !LDK.isString(args[i]) || (args[i] = func(args[i]));

                                        /* Loop
                                                Index Arguments.

                                            > LapysJS > Error
                                        */
                                        for (let i = 0; i < $args; i += 1)
                                            !(i % 2) || LDK.isFunction(args[i]) || LapysJS.error(args[i], 'must', ['evaluation string', 'function']);

                                        /* Loop
                                                Index Arguments.
                                        */
                                        for (let i = 0; i < $args; i += 2)
                                            /* Logic
                                                    [if statement]

                                                > Return
                                            */
                                            if (args[i])
                                                return args[i + 1].call(that, args[i])
                                    }

                                    else
                                        // LapysJS > Error
                                        LapysJS.error(["'when'", "'" + that.constructor.name + "'"], 'argument', 'uneven amount of arguments provided')
                            }
                        });

                    // Array Data
                        // Update > Temporary Data > Value
                        tmp.value = LDK.arrayProto;

                        // Add Element
                        LDK.objectDefProp(tmp.value, 'addElement', {
                            // Value
                            value: function addElement() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    $args = args.length - 1,
                                    that = this;

                                /* Loop
                                        Iterate over Arguments.

                                    > Update > Target
                                */
                                for (let i = $args; i > -1; i -= 1)
                                    that.unshift(args[i]);

                                // Return
                                return that
                            }
                        });

                        // Add Element To Back
                        LDK.objectDefProp(tmp.value, 'addElementToBack', {
                            // Value
                            value: function addElementToBack() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    $args = args.length - 1,
                                    that = this;

                                /* Loop
                                        Iterate over Arguments.

                                    > Update > Target
                                */
                                for (let i = $args; i > -1; i -= 1)
                                    that.unshift(args[i]);

                                // Return
                                return that
                            }
                        });

                        // Add Element To Front
                        LDK.objectDefProp(tmp.value, 'addElementToFront', {
                            // Value
                            value: function addElementToFront() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    that.push(args[i]);

                                // Return
                                return that
                            }
                        });

                        // Build
                        LDK.objectDefProp(tmp.value, 'build', {
                            // Value
                            value: function build() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    !LDK.isString(args[i]) || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isFunction(args[i]) || LapysJS.error(args[i], 'must', ['evaluation string', 'function']);

                                /* Loop
                                        Index Target.
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    /* Loop
                                            Index Arguments.

                                        > Update > Target
                                    */
                                    for (let j = 0; j < args.length; j += 1)
                                        that[i] = args[j].call(that, that[i]);

                                // Return
                                return that
                            }
                        });

                        // Collate
                        LDK.objectDefProp(tmp.value, 'collate', {
                            // Value
                            value: function collate() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(1),
                                    data = arguments[0],
                                    that = this;

                                /* Logic
                                        [if:else statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments
                                    */
                                    for (let i = 0; i < args.length; i += 1)
                                        !LDK.isString(args[i]) || (args[i] = func(args[i]));

                                    /* Loop
                                            Index Arguments.

                                        > LapysJS > Error
                                    */
                                    for (let i of args)
                                        LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i of args)
                                        /* Loop
                                                Index Target.

                                            > Update > Data
                                        */
                                        for (let j of that)
                                            data = i.call(that, data, j);

                                    // Return
                                    return data
                                }

                                else
                                    // LapysJS > Error
                                    LapysJS.error(["'collate'", "'Array'"], 'argument', [2, arguments.length])
                            }
                        });

                        // Crush
                        LDK.objectDefProp(tmp.value, 'crush', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function crush() {
                                // Initialization > Data
                                let data = tmp.functions.abs(LDK.numberParseInt(arguments[0]));

                                // Return
                                return this.squash(-data).squash(data)
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Distinct
                        LDK.objectDefProp(tmp.value, 'distinct', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function distinct() {let a=[],b=this;for(let i of b)(a.indexOf(i)>-1)||a.push(i);b.length=0;for(let i of a)b.push(i);return b},

                            // Writable
                            writable: LDK.true
                        });

                        // Fill
                        LDK.objectDefProp(tmp.value, 'fill', {
                            // Value
                            value: function fill() {let a=arguments[0];if(LDK.null==this)throw new TypeError('this is null or not defined');for(var b=LDK.object(this),c=b.length>>>0,d=arguments[1],e=d>>0,f=0>e?tmp.functions.max(c+e,0):tmp.functions.min(e,c),g=arguments[2],h=void 0===g?c:g>>0,i=0>h?tmp.functions.max(c+h,0):tmp.functions.min(h,c);f<i;)b[f]=a,f+=1;return b},

                            // Writable
                            writable: LDK.true
                        });

                        // Filled With
                        LDK.objectDefProp(tmp.value, 'filledWith', {
                            // Value
                            value: function filledWith() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = [...this];

                                // Return
                                return !LDK.arrayProto.removeElement.apply(that, args).length
                            }
                        });

                        // First Element
                        LDK.objectDefProp(tmp.value, 'firstElement', tmp.tmp = {
                            // Get
                            get: function firstElement() {return this[0]}
                        });
                            // Definition
                            LDK.objectDefProp(LDK.htmlAllCollectionProto, 'firstElement', tmp.tmp);
                            LDK.objectDefProp(LDK.htmlCollectionProto, 'firstElement', tmp.tmp);
                            LDK.objectDefProp(LDK.nodeListProto, 'firstElement', tmp.tmp);

                        // Flatten
                        LDK.objectDefProp(tmp.value, 'flatten', {
                            // Value
                            value: function flatten() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Beta, Target)
                                let arg = [],
                                    data = [...this],
                                    metadata = LDK.arrayProto.concat.apply(arg, data),
                                    alpha = arguments.length ? LDK.numberParseNumber(arguments[0]) : LDK.infinity,
                                    beta = 1,
                                    that = this;

                                // Update > Data
                                data = metadata;

                                /* Loop
                                        [while statement]

                                    > Update > (Beta, Metadata, Data)
                                */
                                while ((a=>{for(let i of a)if(LDK.isArray(i))return LDK.true;return LDK.false})(data) && beta < alpha) {
                                    beta += 1;
                                    metadata = LDK.arrayProto.concat.apply(arg, data);
                                    data = metadata
                                }

                                /* Loop
                                        [while statement]

                                    > Update > Target
                                */
                                while (that[0])
                                    that.pop(1);

                                // Update > Data
                                LDK.arrayProto.push.apply(that, data);

                                // Return
                                return that
                            }
                        });
                        // Free
                        LDK.objectDefProp(tmp.value, 'free', {
                            // Value
                            value: function free() {let a=this;while(a[0])a.pop(1);return a}
                        });

                        // Get Common Element
                        LDK.objectDefProp(tmp.value, 'getCommonElement', {
                            // Value
                            value: function getCommonElement() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                // Return
                                return alpha.removeDuplicatedElements()[0]
                            }
                        });

                        // Get Common Elements
                        LDK.objectDefProp(tmp.value, 'getCommonElements', {
                            // Value
                            value: function getCommonElements() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                // Return
                                return alpha.removeDuplicatedElements()
                            }
                        });

                        // Get Duplicated Element
                        LDK.objectDefProp(tmp.value, 'getDuplicatedElement', {
                            // Value
                            value: function getDuplicatedElement() {
                                // Initialization > (Data, Target)
                                let data = [],
                                    that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]

                                        > Return
                                    */
                                    if (data.indexOf(i) < 0 && [...that].removeElement(i).indexOf(i) > -1)
                                        return i;

                                // Return
                                return data[0]
                            }
                        });

                        // Get Duplicated Elements
                        LDK.objectDefProp(tmp.value, 'getDuplicatedElements', {
                            // Value
                            value: function getDuplicatedElements() {
                                // Initialization > (Data, Target)
                                let data = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    !(data.indexOf(i) < 0 && [...that].removeElement(i).indexOf(i) > -1) || data.push(i);

                                // Return
                                return data
                            }
                        });

                        // Get Element Type
                        LDK.objectDefProp(tmp.value, 'getElementType', {
                            // Value
                            value: function getElementType() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = [],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Error
                                    */
                                    for (let i of args)
                                        !(LDK.isConstructible(i) && !LDK.isFunction(i)) || LapysJS.error(i, 'must', ['constructor function', 'non-constructible']);

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i = 0; i < that.length; i += 1) {
                                        // Initialization > Metadata
                                        let metadata = that[i];

                                        // Update > Target
                                        LDK.isConstructible(metadata) ?
                                            ((args.indexOf(metadata.constructor) < 0) || !args.removeElement(metadata.constructor) || data.push(metadata)) :
                                            ((args.indexOf(metadata) < 0) || !args.removeElement(metadata) || data.push(metadata))
                                    }
                                }

                                // Return
                                return data
                            }
                        });

                        // Get Element Types
                        LDK.objectDefProp(tmp.value, 'getElementTypes', {
                            // Value
                            value: function getElementTypes() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = [],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Error
                                    */
                                    for (let i of args)
                                        !(LDK.isConstructible(i) && !LDK.isFunction(i)) || LapysJS.error(i, 'must', ['constructor function', 'non-constructible']);

                                    /* Loop
                                            Index Arguments.

                                        > Update > Target
                                    */
                                    for (let i of that)
                                        LDK.isConstructible(i) ? ((args.indexOf(i.constructor) < 0) || data.push(i)) : ((args.indexOf(i) < 0) || data.push(i))
                                }

                                // Return
                                return data
                            }
                        });

                        // Get Falsy Element
                        LDK.objectDefProp(tmp.value, 'getFalsyElement', {
                            // Value
                            value: function getFalsyElement() {let a=this;for(let i of a)if(!i)return i}
                        });

                        // Get Falsy Elements
                        LDK.objectDefProp(tmp.value, 'getFalsyElements', {
                            // Value
                            value: function getFalsyElements() {let a=this,b=[];for(let i of a)i||b.push(i);return b}
                        });

                        // Get Repeated Element
                        LDK.objectDefProp(tmp.value, 'getRepeatedElement', {
                            // Value
                            value: function getRepeatedElement() {
                                // Initialization > (Data, Target)
                                let data = [],
                                    that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]

                                        > Return
                                    */
                                    if (data.indexOf(i) < 0 && [...that].removeElement(i).indexOf(i) > -1)
                                        return i;

                                // Return
                                return data[0]
                            }
                        });

                        // Get Repeated Elements
                        LDK.objectDefProp(tmp.value, 'getRepeatedElements', {
                            // Value
                            value: function getRepeatedElements() {
                                // Initialization > (Data, Target)
                                let data = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    !(data.indexOf(i) < 0 && [...that].removeElement(i).indexOf(i) > -1) || data.push(i);

                                // Return
                                return data
                            }
                        });

                        // Get Truthy Element
                        LDK.objectDefProp(tmp.value, 'getTruthyElement', {
                            // Value
                            value: function getTruthyElement() {let a=this;for(let i of a)if(i)return i}
                        });

                        // Get Truthy Elements
                        LDK.objectDefProp(tmp.value, 'getTruthyElements', {
                            // Value
                            value: function getTruthyElements() {let a=this,b=[];for(let i of a)!i||b.push(i);return b}
                        });

                        // Get Uncommon Element
                        LDK.objectDefProp(tmp.value, 'getUncommonElement', {
                            // Value
                            value: function getUncommonElement() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                // Return
                                return alpha.removeDuplicatedElements()[0]
                            }
                        });

                        // Get Uncommon Elements
                        LDK.objectDefProp(tmp.value, 'getUncommonElements', {
                            // Value
                            value: function getUncommonElements() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                // Return
                                return alpha.removeDuplicatedElements()
                            }
                        });

                        // Has Element
                        LDK.objectDefProp(tmp.value, 'hasElement', {
                            // Value
                            value: function hasElement() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = [],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(that.indexOf(i) > -1);

                                // Return
                                return args.length ? data.indexOf(LDK.true) > -1 : LDK.null
                            }
                        });

                        // Has Element Set
                        LDK.objectDefProp(tmp.value, 'hasElementSet', {
                            // Value
                            value: function hasElementSet() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = [],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(that.indexOf(i) > -1);

                                // Return
                                return args.length ? data.indexOf(LDK.false) < 0 : LDK.null
                            }
                        });

                        // Last Element
                        LDK.objectDefProp(tmp.value, 'lastElement', tmp.tmp = {
                            // Get
                            get: function lastElement() {return this[this.length-1]}
                        });
                            // Definition
                            LDK.objectDefProp(LDK.htmlAllCollectionProto, 'lastElement', tmp.tmp);
                            LDK.objectDefProp(LDK.htmlCollectionProto, 'lastElement', tmp.tmp);
                            LDK.objectDefProp(LDK.nodeListProto, 'lastElement', tmp.tmp);

                        // Match
                        LDK.objectDefProp(tmp.value, 'match', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function match() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = [...this];

                                // Return
                                return !LDK.arrayProto.removeElement.apply(that, args).length
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Mode
                        LDK.objectDefProp(tmp.value, 'mode', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function mode() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                // Return
                                return alpha.removeDuplicatedElements()
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Pad
                        LDK.objectDefProp(tmp.value, 'pad', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function pad() {
                                // Initialization > (Arguments, Target, Data)
                                let args = [...arguments],
                                    that = this,
                                    data = LDK.arrayProto.stretch.apply(that, [tmp.functions.abs(LDK.numberParseInt(args[0]))].concat(args.slice(1))).slice(that.length).concat(
                                        LDK.arrayProto.stretch.apply(that, [-tmp.functions.abs(LDK.numberParseInt(args[0]))].concat(args.slice(1)))
                                    );

                                // Modification > Target > Length
                                that.length = 0;

                                // Update > Target
                                LDK.arrayProto.push.apply(that, data);

                                // Return
                                return that
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Random Element
                        LDK.objectDefProp(tmp.value, 'randomElement', {
                            // Get
                            get: function randomElement() {
                                // Return
                                return this[LDK.numberParseInt(Math.random() * this.length)]
                            }
                        });

                        // Randomize
                        LDK.objectDefProp(tmp.value, 'randomize', {
                            // Value
                            value: function randomize() {
                                // Initialization > (Data, Metadata, Target)
                                let data = [],
                                    metadata = LDK.numberParseNumber(arguments[0]),
                                    that = [...this],
                                    $that = that.length;

                                /* Loop
                                        Iterate over Target.

                                    > Update > Data
                                */
                                for (let i = 0; i < $that; i += 1)
                                    data.push((function() {let a=that[LDK.numberParseInt(tmp.functions.random()*that.length)];that[that.indexOf(a)]=tmp;that=that.filter(a=>{return a!==tmp});return a})());

                                // Return
                                return arguments.length ? (metadata in data ? data[metadata] : data) : data
                            }
                        });

                        // Remove Common Element
                        LDK.objectDefProp(tmp.value, 'removeCommonElement', {
                            // Value
                            value: function removeCommonElement() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Return
                                */
                                for (let i of alpha)
                                    return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Common Element From Back
                        LDK.objectDefProp(tmp.value, 'removeCommonElementFromBack', {
                            // Value
                            value: function removeCommonElementFromBack() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Return
                                */
                                for (let i of alpha)
                                    return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Common Element From Front
                        LDK.objectDefProp(tmp.value, 'removeCommonElementFromFront', {
                            // Value
                            value: function removeCommonElementFromFront() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this.reverse();

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Return
                                */
                                for (let i of alpha)
                                    return that.removeElement(i).reverse();

                                // Return
                                return that.reverse()
                            }
                        });

                        // Remove Common Elements
                        LDK.objectDefProp(tmp.value, 'removeCommonElements', {
                            // Value
                            value: function removeCommonElements() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Update > Target
                                */
                                for (let i of alpha)
                                    that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Duplicated Element
                        LDK.objectDefProp(tmp.value, 'removeDuplicatedElement', {
                            // Value
                            value: function removeDuplicatedElement() {let a=[],b=this;for(let i of b)a.push((function(){let a=[...b],c=0;while(a.indexOf(i)>-1){c+=1;a.removeElement(i)}return{count:c,element:i}})());for(let i of a)if(i.count>1){let c=i.element;b[b.indexOf(c)]=tmp;b.removeElement(c);b[b.indexOf(tmp)]=c;break}return b}
                        });

                        // Remove Duplicated Element From Back
                        LDK.objectDefProp(tmp.value, 'removeDuplicatedElementFromBack', {
                            // Value
                            value: function removeDuplicatedElementFromBack() {let a=[],b=this;for(let i of b)a.push((function(){let a=[...b],c=0;while(a.indexOf(i)>-1){c+=1;a.removeElement(i)}return{count:c,element:i}})());for(let i of a)if(i.count>1){let c=i.element;b[b.indexOf(c)]=tmp;b.removeElement(c);b[b.indexOf(tmp)]=c;break}return b}
                        });

                        // Remove Duplicated Element From Front
                        LDK.objectDefProp(tmp.value, 'removeDuplicatedElementFromFront', {
                            // Value
                            value: function removeDuplicatedElementFromFront() {let a=[],b=this.reverse();for(let i of b)a.push((function(){let a=[...b],c=0;while(a.indexOf(i)>-1){c+=1;a.removeElement(i)}return{count:c,element:i}})());for (let i of a)if (i.count>1){let c=i.element;b[b.indexOf(c)]=tmp;b.removeElement(c);b[b.indexOf(tmp)]=c;break}return b.reverse()}
                        });

                        // Remove Duplicated Elements
                        LDK.objectDefProp(tmp.value, 'removeDuplicatedElements', {
                            // Value
                            value: function removeDuplicatedElements() {let a=[],b=this;for(let i of b)(a.indexOf(i)>-1)||a.push(i);b.length=0;for(let i of a)b.push(i);return b}
                        });

                        // Remove Duplicated Elements From Back
                        LDK.objectDefProp(tmp.value, 'removeDuplicatedElementsFromBack', {
                            // Value
                            value: function removeDuplicatedElementsFromBack() {let a=[],b=this;for(let i of b)(a.indexOf(i)>-1)||a.push(i);b.length=0;for(let i of a)b.push(i);return b}
                        });

                        // Remove Duplicated Elements From Front
                        LDK.objectDefProp(tmp.value, 'removeDuplicatedElementsFromFront', {
                            // Value
                            value: function removeDuplicatedElementsFromFront() {let a=[],b=this.reverse();for(let i of b)(a.indexOf(i)>-1)||a.push(i);b.length=0;for(let i of a)b.push(i);return b.reverse()}
                        });

                        // Remove Element
                        LDK.objectDefProp(tmp.value, 'removeElement', {
                            // Value
                            value: function removeElement() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i of args)
                                    (that.indexOf(i) < 0) || that.splice(that.indexOf(i), 1);

                                // Return
                                return that
                            }
                        });

                        // Remove Element From Back
                        LDK.objectDefProp(tmp.value, 'removeElementFromBack', {
                            // Value
                            value: function removeElementFromBack() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i of args)
                                    (that.indexOf(i) < 0) || that.splice(that.indexOf(i), 1);

                                // Return
                                return that
                            }
                        });

                        // Remove Element From Front
                        LDK.objectDefProp(tmp.value, 'removeElementFromFront', {
                            // Value
                            value: function removeElementFromFront() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i of args)
                                    (that.lastIndexOf(i) < 0) || that.splice(that.lastIndexOf(i), 1);

                                // Return
                                return that
                            }
                        });

                        // Remove Element Type
                        LDK.objectDefProp(tmp.value, 'removeElementType', {
                            // Value
                            value: function removeElementType() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Error
                                    */
                                    for (let i of args)
                                        !(LDK.isConstructible(i) && !LDK.isFunction(i)) || LapysJS.error(i, 'must', ['constructor function', 'non-constructible']);

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i = 0; i < that.length; i += 1) {
                                        // Initialization > Metadata
                                        let metadata = that[i];

                                        // Update > Target
                                        LDK.isConstructible(metadata) ?
                                            ((args.indexOf(metadata.constructor) < 0) || !args.removeElement(metadata.constructor) || that.removeElement(metadata)) :
                                            ((args.indexOf(metadata) < 0) || !args.removeElement(metadata) || that.removeElement(metadata))
                                    }
                                }

                                // Return
                                return that
                            }
                        });

                        // Remove Element Types
                        LDK.objectDefProp(tmp.value, 'removeElementTypes', {
                            // Value
                            value: function removeElementTypes() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Error
                                    */
                                    for (let i of args)
                                        !(LDK.isConstructible(i) && !LDK.isFunction(i)) || LapysJS.error(i, 'must', ['constructor function', 'non-constructible']);

                                    /* Loop
                                            Index Arguments.

                                        > Update > Target
                                    */
                                    for (let i of that)
                                        LDK.isConstructible(i) ? ((args.indexOf(i.constructor) < 0) || that.removeElement(i)) : ((args.indexOf(i) < 0) || that.removeElement(i))
                                }

                                // Return
                                return that
                            }
                        });

                        // Remove Elements
                        LDK.objectDefProp(tmp.value, 'removeElements', {
                            // Value
                            value: function removeElements() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Loop
                                            [while statement]

                                        > Update > Target
                                    */
                                    while (that.indexOf(i) > -1)
                                        that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Falsy Element
                        LDK.objectDefProp(tmp.value, 'removeFalsyElement', {
                            // Value
                            value: function removeFalsyElement() {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (!i)
                                        // Return
                                        return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Falsy Element From Back
                        LDK.objectDefProp(tmp.value, 'removeFalsyElementFromBack', {
                            // Value
                            value: function removeFalsyElementFromBack() {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (!i)
                                        // Return
                                        return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Falsy Element From Front
                        LDK.objectDefProp(tmp.value, 'removeFalsyElementFromFront', {
                            // Value
                            value: function removeFalsyElementFromFront() {
                                // Initialization > Target
                                let that = this.reverse();

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (!i)
                                        // Return
                                        return that.removeElement(i);

                                // Return
                                return that.reverse()
                            }
                        });

                        // Remove Falsy Elements
                        LDK.objectDefProp(tmp.value, 'removeFalsyElements', {
                            // Value
                            value: function removeFalsyElements() {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let i of that)
                                    i || that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Repeated Element
                        LDK.objectDefProp(tmp.value, 'removeRepeatedElement', {
                            // Value
                            value: function removeRepeatedElement() {let a=[],c=this;for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.count>1&&c.indexOf(i.element)>-1){c.removeElement(i.element);break}return c}
                        });

                        // Remove Repeated Element From Back
                        LDK.objectDefProp(tmp.value, 'removeRepeatedElementFromBack', {
                            // Value
                            value: function removeRepeatedElementFromBack() {let a=[],c=this;for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.count>1&&c.indexOf(i.element)>-1){c.removeElement(i.element);break}return c}
                        });

                        // Remove Repeated Element From Front
                        LDK.objectDefProp(tmp.value, 'removeRepeatedElementFromFront', {
                            // Value
                            value: function removeRepeatedElementFromFront() {let a=[],c=this.reverse();for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.count>1&&c.indexOf(i.element)>-1){c.removeElement(i.element);break}return c.reverse()}
                        });

                        // Remove Repeated Elements
                        LDK.objectDefProp(tmp.value, 'removeRepeatedElements', {
                            // Value
                            value: function removeRepeatedElements() {let a=[],c=this;for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)while(i.count>1&&c.indexOf(i.element)>-1)c.removeElement(i.element);return c}
                        });

                        // Remove Truthy Element
                        LDK.objectDefProp(tmp.value, 'removeTruthyElement', {
                            // Value
                            value: function removeTruthyElement() {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (i)
                                        // Return
                                        return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Truthy Element From Back
                        LDK.objectDefProp(tmp.value, 'removeTruthyElementFromBack', {
                            // Value
                            value: function removeTruthyElementFromBack() {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (i)
                                        // Return
                                        return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Truthy Element From Front
                        LDK.objectDefProp(tmp.value, 'removeTruthyElementFromFront', {
                            // Value
                            value: function removeTruthyElementFromFront() {
                                // Initialization > Target
                                let that = this.reverse();

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (i)
                                        // Return
                                        return that.removeElement(i);

                                // Return
                                return that.reverse()
                            }
                        });

                        // Remove Truthy Elements
                        LDK.objectDefProp(tmp.value, 'removeTruthyElements', {
                            // Value
                            value: function removeTruthyElements() {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let i of that)
                                    !i || that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Uncommon Element
                        LDK.objectDefProp(tmp.value, 'removeUncommonElement', {
                            // Value
                            value: function removeUncommonElement() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Return
                                */
                                for (let i of alpha)
                                    return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Uncommon Element From Back
                        LDK.objectDefProp(tmp.value, 'removeUncommonElementFromBack', {
                            // Value
                            value: function removeUncommonElementFromBack() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Return
                                */
                                for (let i of alpha)
                                    return that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Remove Uncommon Element From Front
                        LDK.objectDefProp(tmp.value, 'removeUncommonElementFromFront', {
                            // Value
                            value: function removeUncommonElementFromFront() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this.reverse();

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Return
                                */
                                for (let i of alpha)
                                    return that.removeElement(i).reverse();

                                // Return
                                return that.reverse()
                            }
                        });

                        // Remove Uncommon Elements
                        LDK.objectDefProp(tmp.value, 'removeUncommonElements', {
                            // Value
                            value: function removeUncommonElements() {
                                // Initialization > (Data, Metadata, Alpha, Target)
                                let data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Update > Target
                                */
                                for (let i of alpha)
                                    that.removeElement(i);

                                // Return
                                return that
                            }
                        });

                        // Repeat
                        LDK.objectDefProp(tmp.value, 'repeat', {
                            // Value
                            value: function repeat() {
                                // Initialization > (Data, Target)
                                let data = LDK.numberParseInt(arguments[0]),
                                    that = this;

                                // LapysJS > Error
                                LDK.numberIsSafeInteger(data) || LapysJS.error(data, 'must', 'safe integer');

                                /* Logic
                                        [if:else statement]
                                */
                                if (data) {
                                    // Initialization > Target
                                    let $that = [...that];

                                    /* Loop
                                            Iterate over decremented Data.

                                        > Update > Target
                                    */
                                    for (let i = 0; i < data - 1; i += 1)
                                        LDK.arrayProto.push.apply(that, $that)
                                }

                                else
                                    // Modification > Target > Length
                                    that.length = 0;

                                // Return
                                return that
                            }
                        });

                        // Replace Common Element
                        LDK.objectDefProp(tmp.value, 'replaceCommonElement', {
                            // Value
                            value: function replaceCommonElement() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha) {
                                    // Update > Target
                                    that[that.indexOf(i)] = arg;

                                    // Break
                                    break
                                }

                                // Return
                                return that
                            }
                        });

                        // Replace Common Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceCommonElementFromBack', {
                            // Value
                            value: function replaceCommonElementFromBack() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha) {
                                    // Update > Target
                                    that[that.indexOf(i)] = arg;

                                    // Break
                                    break
                                }

                                // Return
                                return that
                            }
                        });

                        // Replace Common Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceCommonElementFromFront', {
                            // Value
                            value: function replaceCommonElementFromFront() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this.reverse();

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha) {
                                    // Update > Target
                                    that[that.indexOf(i)] = arg;

                                    // Break
                                    break
                                }

                                // Return
                                return that.reverse()
                            }
                        });

                        // Replace Common Elements
                        LDK.objectDefProp(tmp.value, 'replaceCommonElements', {
                            // Value
                            value: function replaceCommonElements() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = 0,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.max(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Update > Target
                                */
                                for (let i of alpha)
                                    that[that.indexOf(i)] = arg;

                                // Return
                                return that
                            }
                        });

                        // Replace Duplicated Element
                        LDK.objectDefProp(tmp.value, 'replaceDuplicatedElement', {
                            // Value
                            value: function replaceDuplicatedElement() {let a=[],b=this,e=arguments[0];for(let i of b)a.push((function(){let a=[...b],c=0;while(a.indexOf(i)>-1){c+=1;a.removeElement(i)}return{count:c,element:i}})());for(let i of a)if(i.count>1){let c=i.element;b[b.indexOf(c)]=tmp;b[b.indexOf(c)]=e;b[b.indexOf(tmp)]=c;break}return b}
                        });

                        // Replace Duplicated Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceDuplicatedElementFromBack', {
                            // Value
                            value: function replaceDuplicatedElementFromBack() {let a=[],b=this,e=arguments[0];for(let i of b)a.push((function(){let a=[...b],c=0;while(a.indexOf(i)>-1){c+=1;a.removeElement(i)}return{count:c,element:i}})());for(let i of a)if(i.count>1){let c=i.element;b[b.indexOf(c)]=tmp;b[b.indexOf(c)]=e;b[b.indexOf(tmp)]=c;break}return b}
                        });

                        // Replace Duplicated Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceDuplicatedElementFromFront', {
                            // Value
                            value: function replaceDuplicatedElementFromFront() {let a=[],b=this.reverse(),e=arguments[0];for(let i of b)a.push((function(){let a=[...b],c=0;while(a.indexOf(i)>-1){c+=1;a.removeElement(i)}return{count:c,element:i}})());for(let i of a)if(i.count>1){let c=i.element;b[b.indexOf(c)]=tmp;b[b.indexOf(c)]=e;b[b.indexOf(tmp)]=c;break}return b.reverse()}
                        });

                        // Replace Duplicated Elements
                        LDK.objectDefProp(tmp.value, 'replaceDuplicatedElements', {
                            // Value
                            value: function replaceDuplicatedElements() {let a=[],b=this,c=arguments[0];for(let i of b)a.push(a.indexOf(i)<0?i:c);b.length=0;LDK.arrayProto.push.apply(b,a);return b}
                        });

                        // Replace Duplicated Elements From Back
                        LDK.objectDefProp(tmp.value, 'replaceDuplicatedElementsFromBack', {
                            // Value
                            value: function replaceDuplicatedElementsFromBack() {let a=[],b=this,c=arguments[0];for(let i of b)a.push(a.indexOf(i)<0?i:c);b.length=0;LDK.arrayProto.push.apply(b,a);return b}
                        });

                        // Replace Duplicated Elements From Front
                        LDK.objectDefProp(tmp.value, 'replaceDuplicatedElementsFromFront', {
                            // Value
                            value: function replaceDuplicatedElementsFromFront() {let a=[],b=this.reverse(),c=arguments[0];for(let i of b)a.push(a.indexOf(i)<0?i:c);b.length=0;LDK.arrayProto.push.apply(b,a);return b.reverse()}
                        });

                        // Replace Element
                        LDK.objectDefProp(tmp.value, 'replaceElement', {
                            // Value
                            value: function replaceElement() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(0, -1),
                                    data = arguments[arguments.length - 1]
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i of args)
                                    (that.indexOf(i) > -1) && (that[that.indexOf(i)] = data);

                                // Return
                                return that
                            }
                        });

                        // Replace Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceElementFromBack', {
                            // Value
                            value: function replaceElementFromBack() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(0, -1),
                                    data = arguments[arguments.length - 1]
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i of args)
                                    (that.indexOf(i) > -1) && (that[that.indexOf(i)] = data);

                                // Return
                                return that
                            }
                        });

                        // Replace Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceElementFromFront', {
                            // Value
                            value: function replaceElementFromFront() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(0, -1),
                                    data = arguments[arguments.length - 1]
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Target
                                */
                                for (let i of args)
                                    (that.indexOf(i) > -1) && (that[that.lastIndexOf(i)] = data);

                                // Return
                                return that
                            }
                        });

                        // Replace Element Type
                        LDK.objectDefProp(tmp.value, 'replaceElementType', {
                            // Value
                            value: function replaceElementType() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(0, -1),
                                    data = arguments[arguments.length - 1],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Error
                                    */
                                    for (let i of args)
                                        !(LDK.isConstructible(i) && !LDK.isFunction(i)) || LapysJS.error(i, 'must', ['constructor function', 'non-constructible']);

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i = 0; i < that.length; i += 1) {
                                        // Initialization > Metadata
                                        let metadata = that[i];

                                        // Update > Target
                                        LDK.isConstructible(metadata) ?
                                            ((args.indexOf(metadata.constructor) < 0) || !args.removeElement(metadata.constructor) || (that[that.indexOf(metadata)] = data)) :
                                            ((args.indexOf(metadata) < 0) || !args.removeElement(metadata) || (that[that.indexOf(metadata)] = data))
                                    }
                                }

                                // Return
                                return that
                            }
                        });

                        // Replace Element Types
                        LDK.objectDefProp(tmp.value, 'replaceElementTypes', {
                            // Value
                            value: function replaceElementTypes() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(0, -1),
                                    data = arguments[arguments.length - 1],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Error
                                    */
                                    for (let i of args)
                                        !(LDK.isConstructible(i) && !LDK.isFunction(i)) || LapysJS.error(i, 'must', ['constructor function', 'non-constructible']);

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i = 0; i < that.length; i += 1) {
                                        // Initialization > Metadata
                                        let metadata = that[i];

                                        // Update > Target
                                        LDK.isConstructible(metadata) ?
                                            ((args.indexOf(metadata.constructor) < 0) || (that[that.indexOf(metadata)] = data)) :
                                            ((args.indexOf(metadata) < 0) || (that[that.indexOf(metadata)] = data))
                                    }
                                }

                                // Return
                                return that
                            }
                        });

                        // Replace Elements
                        LDK.objectDefProp(tmp.value, 'replaceElements', {
                            // Value
                            value: function replaceElements() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments].slice(0, -1),
                                    data = arguments[arguments.length - 1],
                                    that = this;

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Loop
                                            [while statement]

                                        > Update > Target
                                    */
                                    while (that.indexOf(i) > -1 && i != data)
                                        that[that.indexOf(i)] = data;

                                // Return
                                return that
                            }
                        });

                        // Replace Falsy Element
                        LDK.objectDefProp(tmp.value, 'replaceFalsyElement', {
                            // Value
                            value: function replaceFalsyElement() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (!i) {
                                        // Update > Target
                                        that[that.indexOf(i)] = data;

                                        // Break
                                        break
                                    }

                                // Return
                                return that
                            }
                        });

                        // Replace Falsy Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceFalsyElementFromBack', {
                            // Value
                            value: function replaceFalsyElementFromBack() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (!i) {
                                        // Update > Target
                                        that[that.indexOf(i)] = data;

                                        // Break
                                        break
                                    }

                                // Return
                                return that
                            }
                        });

                        // Replace Falsy Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceFalsyElementFromFront', {
                            // Value
                            value: function replaceFalsyElementFromFront() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this.reverse();

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (!i) {
                                        // Update > Target
                                        that[that.indexOf(i)] = data;

                                        // Break
                                        break
                                    }

                                // Return
                                return that.reverse()
                            }
                        });

                        // Replace Falsy Elements
                        LDK.objectDefProp(tmp.value, 'replaceFalsyElements', {
                            // Value
                            value: function replaceFalsyElements() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let i of that)
                                    i || (that[that.indexOf(i)] = data);

                                // Return
                                return that
                            }
                        });

                        // Replace Repeated Element
                        LDK.objectDefProp(tmp.value, 'replaceRepeatedElement', {
                            // Value
                            value: function replaceRepeatedElement() {let a=[],c=this,d=arguments[0];for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.count>1&&c.indexOf(i.element)>-1){c[c.indexOf(i.element)]=d;break}return c}
                        });

                        // Replace Repeated Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceRepeatedElementFromBack', {
                            // Value
                            value: function replaceRepeatedElementFromBack() {let a=[],c=this,d=arguments[0];for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.count>1&&c.indexOf(i.element)>-1){c[c.indexOf(i.element)]=d;break}return c}
                        });

                        // Replace Repeated Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceRepeatedElementFromFront', {
                            // Value
                            value: function replaceRepeatedElementFromFront() {let a=[],c=this.reverse(),d=arguments[0];for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.count>1&&c.indexOf(i.element)>-1){c[c.indexOf(i.element)]=d;break}return c.reverse()}
                        });

                        // Replace Repeated Elements
                        LDK.objectDefProp(tmp.value, 'replaceRepeatedElements', {
                            // Value
                            value: function replaceRepeatedElements() {let a=[],c=this,d=arguments[0];for(let i of c)a.push((function(){let a=[...c],b=0;while(a.indexOf(i)>-1){b+=1;a.removeElement(i)}return{count:b,element:i}})());for(let i of a)if(i.element!=d)while(i.count>1&&c.indexOf(i.element)>-1)c[c.indexOf(i.element)]=d;return c}
                        });

                        // Replace Truthy Element
                        LDK.objectDefProp(tmp.value, 'replaceTruthyElement', {
                            // Value
                            value: function replaceTruthyElement() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (i) {
                                        // Update > Target
                                        that[that.indexOf(i)] = data;

                                        // Break
                                        break
                                    }

                                // Return
                                return that
                            }
                        });

                        // Replace Truthy Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceTruthyElementFromBack', {
                            // Value
                            value: function replaceTruthyElementFromBack() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this;

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (i) {
                                        // Update > Target
                                        that[that.indexOf(i)] = data;

                                        // Break
                                        break
                                    }

                                // Return
                                return that
                            }
                        });

                        // Replace Truthy Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceTruthyElementFromFront', {
                            // Value
                            value: function replaceTruthyElementFromFront() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this.reverse();

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Logic
                                            [if statement]
                                    */
                                    if (i) {
                                        // Update > Target
                                        that[that.indexOf(i)] = data;

                                        // Break
                                        break
                                    }

                                // Return
                                return that.reverse()
                            }
                        });

                        // Replace Truthy Elements
                        LDK.objectDefProp(tmp.value, 'replaceTruthyElements', {
                            // Value
                            value: function replaceTruthyElements() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let i of that)
                                    !i || (that[that.indexOf(i)] = data);

                                // Return
                                return that
                            }
                        });

                        // Replace Uncommon Element
                        LDK.objectDefProp(tmp.value, 'replaceUncommonElement', {
                            // Value
                            value: function replaceUncommonElement() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = LDK.Infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha) {
                                    // Update > Target
                                    that[that.indexOf(i)] = arg;

                                    // Break
                                    break
                                }

                                // Return
                                return that
                            }
                        });

                        // Replace Uncommon Element From Back
                        LDK.objectDefProp(tmp.value, 'replaceUncommonElementFromBack', {
                            // Value
                            value: function replaceUncommonElementFromBack() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha) {
                                    // Update > Target
                                    that[that.indexOf(i)] = arg;

                                    // Break
                                    break
                                }

                                // Return
                                return that
                            }
                        });

                        // Replace Uncommon Element From Front
                        LDK.objectDefProp(tmp.value, 'replaceUncommonElementFromFront', {
                            // Value
                            value: function replaceUncommonElementFromFront() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this.reverse();

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha) {
                                    // Update > Target
                                    that[that.indexOf(i)] = arg;

                                    // Break
                                    break
                                }

                                // Return
                                return that.reverse()
                            }
                        });

                        // Replace Uncommon Elements
                        LDK.objectDefProp(tmp.value, 'replaceUncommonElements', {
                            // Value
                            value: function replaceUncommonElements() {
                                // Initialization > (Argument, Data, Metadata, Alpha, Target)
                                let arg = arguments[0],
                                    data = [],
                                    metadata = LDK.infinity,
                                    alpha = [],
                                    that = this;

                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let i of that)
                                    data.push((function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [...that],
                                            metadata = 0;

                                        /* Loop
                                                [while statement]

                                            > Update > (Metadata, Data)
                                        */
                                        while (data.indexOf(i) > -1) {
                                            metadata += 1;
                                            data.removeElement(i)
                                        }

                                        // Return
                                        return {count: metadata, element: i}
                                    })());

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i of data)
                                    metadata = tmp.functions.min(metadata, i.count);

                                /* Loop
                                        Index Target.

                                    > Update > Alpha
                                */
                                for (let i = 0; i < that.length; i += 1)
                                    (data[i].count != metadata) || alpha.push(that[i]);

                                /* Loop
                                        Index Alpha.

                                    > Update > Target
                                */
                                for (let i of alpha)
                                    that[that.indexOf(i)] = arg;

                                // Return
                                return that
                            }
                        });

                        // Squash
                        LDK.objectDefProp(tmp.value, 'squash', {
                            // Value
                            value: function squash() {
                                // Initialization > (Data, Target)
                                let data = LDK.numberParseInt(arguments[0]),
                                    that = this,
                                    $that;

                                // LapysJS > Error
                                LDK.numberIsSafeInteger(data) || LapysJS.error(data, 'must', 'safe integer');

                                // Update > Target
                                $that = data > -1 ? that.slice(0, -data) : that.slice(-data);

                                // Modification > Target > Length
                                that.length = 0;

                                // Update > Target
                                LDK.arrayProto.push.apply(that, $that);

                                // Return
                                return that
                            }
                        });

                        // Stretch
                        LDK.objectDefProp(tmp.value, 'stretch', {
                            // Value
                            value: function stretch() {
                                // Initialization > (Data, Metadata, Target)
                                let data = LDK.numberParseInt(arguments[0]),
                                    metadata = [...arguments].slice(1),
                                    that = this,
                                    $that = that.length;

                                // LapysJS > Error
                                LDK.numberIsSafeInteger(data) || LapysJS.error(data, 'must', 'safe integer');

                                // Modification > Target > Length
                                data > -1 ? (metadata.length ? (function() {
                                    /* Loop
                                            Iterate over Data.

                                        > Update > Target
                                    */
                                    for (let i = 0; i < data; i += 1)
                                        LDK.arrayProto.push.apply(that, metadata);

                                })() : that.length += data) : (function() {
                                    // Initialization > Alpha
                                    let alpha = [];

                                    // Modification > Alpha > Length
                                    metadata.length ? (function() {
                                        /* Loop
                                                Iterate over Data.

                                            > Update > Alpha
                                        */
                                        for (let i = 0; i < -data; i += 1)
                                            LDK.arrayProto.push.apply(alpha, metadata)
                                    })() : alpha.length = -data;

                                    // Update > Alpha
                                    LDK.arrayProto.push.apply(alpha, that);

                                    // Modification > Target > Length
                                    that.length = 0;

                                    // Update > Target
                                    LDK.arrayProto.push.apply(that, alpha)
                                })();

                                // Return
                                return that
                            }
                        });

                        // Swap
                        LDK.objectDefProp(tmp.value, 'swap', {
                            // Value
                            value: function swap() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments].filter(data => { return LDK.isNumber(data) }),
                                    that = this;

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i = 0; i < args.length; i += 1) {
                                    // Initialization > Data
                                    let data = args[i];

                                    /* Logic
                                            [if statement]
                                    */
                                    if (data in that && (+i + 1) in args) {
                                        // Initialization > (Metadata, Alpha)
                                        let metadata = that[data],
                                            alpha = that[args[+i + 1]];

                                        // Modification > Target > (...)
                                        that[data] = alpha;
                                        that[args[+i + 1]] = metadata
                                    }
                                }

                                // Return
                                return that
                            }
                        });

                        // Transform
                        LDK.objectDefProp(tmp.value, 'transform', {
                            // Value
                            value: function transform() {
                                // Initialization > (Arguments, Target, Data)
                                let args = [...arguments],
                                    that = this,
                                    data = LDK.arrayProto.filter.apply(that, args);

                                // Modification > Target > Length
                                that.length = 0;

                                // Update > Target
                                LDK.arrayProto.push.apply(that, data);

                                // Return
                                return that
                            }
                        });

                        // Trim
                        LDK.objectDefProp(tmp.value, 'trim', {
                            // Value
                            value: function trim() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                // Return
                                return LDK.arrayProto.trimLeft.apply(LDK.arrayProto.trimRight.apply(that, args), args)
                            }
                        });

                        // Trim Left
                        LDK.objectDefProp(tmp.value, 'trimLeft', {
                            // Value
                            value: function trimLeft() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this,
                                    $that = [...that];

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    !LDK.isString(args[i]) || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                /* {Indexer} Loop
                                        Index Target.
                                */
                                indexer: for (let i = 0; i < that.length; i += 1)
                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let j of args)
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (j.call($that, $that[i]))
                                            // Update > Target
                                            $that[i] = tmp;

                                        else
                                            // Break
                                            break indexer;

                                // Update > Target
                                $that = $that.filter(data => { return data != tmp });

                                // Modification > Target > Length
                                that.length = 0;

                                // Update > Target
                                LDK.arrayProto.push.apply(that, $that);

                                // Return
                                return that
                            }
                        });

                        // Trim Right
                        LDK.objectDefProp(tmp.value, 'trimRight', {
                            // Value
                            value: function trimRight() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this.reverse(),
                                    $that = [...that];

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    !LDK.isString(args[i]) || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                /* {Indexer} Loop
                                        Index Target.
                                */
                                indexer: for (let i = 0; i < that.length; i += 1)
                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let j of args)
                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (j.call($that, $that[i]))
                                            // Update > Target
                                            $that[i] = tmp;

                                        else
                                            // Break
                                            break indexer;

                                // Update > Target
                                $that = $that.filter(data => { return data != tmp });

                                // Modification > Target > Length
                                that.length = 0;

                                // Update > Target
                                LDK.arrayProto.push.apply(that, $that);

                                // Return
                                return that.reverse()
                            }
                        });

                    /* Boolean Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.bool;

                        // Compare
                        LDK.objectDefProp(tmp.value, 'compare', {
                            // Value
                            value: {
                                // AND
                                and: function and() {return arguments[0]&&arguments[1]},

                                // NAND
                                nand: function nand() {return!(arguments[0]&&arguments[1])},

                                // NOR
                                nor: function nor() {return!(arguments[0]||arguments[1])},

                                // NOT
                                not: function not() {return!arguments[0]},

                                // OR
                                or: function or() {return arguments[0]||arguments[1]},

                                // XNOR
                                xnor: function xnor() {return!([...arguments].filter(LDK.bool).length%2)},

                                // XOR
                                xor: function xor() {return!!([...arguments].filter(LDK.bool).length%2)}
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Is All False
                        LDK.objectDefProp(tmp.value, 'isAllFalse', {
                            // Value
                            value: function isAllFalse() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(!i);

                                // Return
                                return args.length ? data.indexOf(LDK.false) < 0 : LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Is All True
                        LDK.objectDefProp(tmp.value, 'isAllTrue', {
                            // Value
                            value: function isAllTrue() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(!i);

                                // Return
                                return args.length ? data.indexOf(LDK.true) < 0 : LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Is False
                        LDK.objectDefProp(tmp.value, 'isFalse', {
                            // Value
                            value: function isFalse() {
                                // Initialization > Data
                                let data = arguments[0];

                                // LapysJS > Error
                                !(!arguments.length || arguments.length > 1) || LapysJS.error.call(new LDK.typeError, ["'isFalse'", "'Boolean'"], 'argument', [1, arguments.length]);

                                // Return
                                return !data
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Is Falsy
                        LDK.objectDefProp(tmp.value, 'isFalsy', {
                            // Value
                            value: function isFalsy() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 0,
                                    metadata = 0;

                                /* Loop
                                        Index Arguments.

                                    > Update > (Data, Metadata)
                                */
                                for (let i of args)
                                    i ? data += 1 : metadata += 1;

                                // Return
                                return args.length ? metadata > data : LDK.true
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Is True
                        LDK.objectDefProp(tmp.value, 'isTrue', {
                            // Value
                            value: function isTrue() {
                                // Initialization > Data
                                let data = arguments[0];

                                // LapysJS > Error
                                !(!arguments.length || arguments.length > 1) || LapysJS.error.call(new LDK.typeError, ["'isFalse'", "'Boolean'"], 'argument', [1, arguments.length]);

                                // Return
                                return data
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Is Truthy
                        LDK.objectDefProp(tmp.value, 'isTruthy', {
                            // Value
                            value: function isTruthy() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 0,
                                    metadata = 0;

                                /* Loop
                                        Index Arguments.

                                    > Update > (Data, Metadata)
                                */
                                for (let i of args)
                                    i ? data += 1 : metadata += 1;

                                // Return
                                return data > metadata
                            },

                            // Writable
                            writable: LDK.true
                        });

                    /* Document Fragment Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.docFragProto;

                        // Get Elements By Class Name
                        LDK.isFunction(tmp.value.getElementsByClassName) || LDK.objectDefProp(tmp.value, 'getElementsByClassName', {
                            // Value
                            value: function getElementsByClassName() {let a=arguments[0];try{LDK.docGetEleByClass(a)}catch(e){throw e}return LDK.arrayProto.addElement.apply(LDK.namedArray('HTMLCollection'), LDK.toArray(this.querySelectorAll("[class='"+a+"']")))}
                        });

                        // Get Elements By Tag Name
                        LDK.isFunction(tmp.value.getElementsByTagName) || LDK.objectDefProp(tmp.value, 'getElementsByTagName', {
                            // Value
                            value: function getElementsByTagName() {let a=arguments[0];try{LDK.docGetEleByTag(a)}catch(e){throw e}return LDK.arrayProto.addElement.apply(LDK.namedArray('HTMLCollection'), LDK.toArray(this.querySelectorAll(a)))}
                        });

                    /* Element Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.eleProto;

                        // Add Attribute
                        LDK.objectDefProp(tmp.value, 'addAttr', {
                            // Value
                            value: function addAttribute() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments].filter(a=>{return LDK.isConstructible(a)}),
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Modification > Target > [Loop Iterator]
                                */
                                for (let i of args)
                                    i.constructor == LDK.attr ? that.getAttribute(i.name) || that.setAttribute(i.name, i.value) : that.getAttribute(LDK.string(i)) || that.setAttribute(LDK.string(i), '');

                                // Return
                                return args.length > 1 ? (a=>{for(let i in a)a[i]=a[i].constructor==LDK.attr?a[i]:that.getAttributeNode(LDK.string(a[i]));return a})(args) : (args[0].constructor == LDK.attr ? args[0] : that.getAttributeNode(LDK.string(args[0])))
                            }
                        });

                        // Delete Attribute
                        LDK.objectDefProp(tmp.value, 'delAttr', {
                            // Value
                            value: function removeAttribute() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Logic
                                        [if:else statement]
                                */
                                if (args.length)
                                    /* Loop
                                            Index Arguments.

                                        > Modification > Target > [Loop Iterator]
                                    */
                                    for (let i of args)
                                        that.removeAttribute(LDK.string(i));

                                else
                                    /* Loop
                                            [while statement]

                                        > Modification > Target > (...)
                                    */
                                    while (that.attributes[0])
                                        that.removeAttributeNode(that.attributes[0]);

                                // Return
                                return that.attributes.length ? that.attributes : that
                            }
                        });

                        // Get Attribute
                        LDK.objectDefProp(tmp.value, 'getAttr', {
                            // Value
                            value: function getAttribute() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = [],
                                    metadata = [],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        LDK.isConstructible(i) ? (LDK.isArray(i) ? i : data.push(i)) : data.push(LDK.false);

                                    /* Loop
                                            Index Arguments.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        metadata.push(LDK.isBool(i) ? '' : (i.constructor == LDK.attr ? i.value : that.getAttribute(LDK.string(i))));

                                    // Return
                                    return metadata.length > 1 ? metadata : metadata[0]
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Get Attribute Node
                        LDK.objectDefProp(tmp.value, 'getAttrNode', {
                            // Value
                            value: function getAttributeNode() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = [],
                                    metadata = [],
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        LDK.isConstructible(i) ? (LDK.isArray(i) ? i : data.push(i)) : data.push(LDK.false);

                                    /* Loop
                                            Index Arguments.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        metadata.push(LDK.isBool(i) ? '' : (i.constructor == LDK.attr ? i : that.getAttributeNode(LDK.string(i))));

                                    // Return
                                    return metadata.length > 1 ? metadata : metadata[0]
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Get Element By ID
                        LDK.isFunction(tmp.value.getElementById) || LDK.objectDefProp(tmp.value, 'getElementById', {
                            // Value
                            value: function getElementById() {let a=arguments[0];try{LDK.docGetEleByID(a)}catch(e){throw e}return this.querySelector("[id='"+a+"']")}
                        });

                        // Has Attribute
                        LDK.objectDefProp(tmp.value, 'hasAttr', {
                            // Value
                            value: function hasAttribute() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = [],
                                    metadata = [],
                                    that = this,
                                    $that = [...that.attributes];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        LDK.isConstructible(i) ? (LDK.isArray(i) ? i : data.push(i)) : data.push(LDK.false);

                                    /* Loop
                                            Index Arguments.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        metadata.push(LDK.isBool(i) ? i : (i.constructor == LDK.attr ? $that.indexOf(i) > -1 : that.hasAttribute(LDK.string(i))));

                                    // Return
                                    return metadata.length > 1 ? metadata : metadata[0]
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Insert Adjacent Comment
                        LDK.objectDefProp(tmp.value, 'insertAdjacentComment', {
                            // Value
                            value: function insertAdjacentComment() {
                                // Return
                                return LDK.eleProto.insertAdjacentHTML.call(this, arguments[0], '<!--' + LDK.string(arguments[1]) + '-->')
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Insert After
                        LDK.objectDefProp(tmp.value, 'insertAfter', {
                            // Value
                            value: function insertAfter() {
                                // Initialization > (Data, Metadata, Target)
                                let data = arguments[0],
                                    metadata = arguments[1],
                                    that = this;

                                // Insertion
                                LDK.eleProto.insertBefore.call(that, data, metadata);

                                // Return
                                return LDK.eleProto.insertBefore.call(that, metadata, data)
                            },

                            // Writable
                            writable: LDK.true
                        });

                        LDK.objectDefProp(tmp.value, 'insertChild', {
                            // Value
                            value: function insertChild() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args[1],
                                    that = this;

                                /* Logic
                                        [if:else statement]
                                */
                                if (args.length) {
                                    /* Logic
                                            [if statement]

                                        > Update > (Data, Metadata)
                                    */
                                    if (args.length == 1) {
                                        data = 'end';
                                        metadata = args[0]
                                    }

                                    // LapysJS > Error
                                    LDK.isNode(metadata) || LapysJS.error(metadata, 'must', 'node');

                                    /* Logic
                                            [switch:case:default statement]
                                    */
                                    switch (data) {
                                        // Begin
                                        case 'begin':
                                            // Insertion
                                            LDK.eleProto.appendChild.call(that, metadata);
                                            LDK.eleProto.insertBefore.call(that, metadata, that.firstChild);
                                            break;

                                        // End
                                        case 'end':
                                            // Insertion
                                            LDK.eleProto.appendChild.call(that, metadata);
                                            break;

                                        // [Default]
                                        default:
                                            // LapysJS > Error
                                            LapysJS.error(data, 'only', ["'begin'", "'end'"])
                                    }

                                    // Return
                                    return metadata
                                }

                                else
                                    // LapysJS > Error
                                    LapysJS.error(["'insertChild'", "'" + that.constructor.name + "'"], 'argument', [2, 0])
                            }
                        });

                        // Replace Attribute
                        LDK.objectDefProp(tmp.value, 'replAttr', {
                            // Value
                            value: function replaceAttribute() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = [],
                                    metadata = [],
                                    that = this,
                                    $that = [...that.attributes];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        LDK.isConstructible(i) ? (LDK.isArray(i) ? LDK.arrayProto.push.apply(data, i) : data.push(i)) : data.push(LDK.false);

                                    /* Logic
                                            [if statement]
                                    */
                                    if (args.length > 1) {
                                        // Initialization > (Data, Metadata, Alpha)
                                        let data = args[0],
                                            metadata = args[1],
                                            alpha = args[2];

                                        /* Logic
                                                [if statement]
                                        */
                                        if (LDK.isArray(data) && LDK.isArray(metadata)) {
                                            // Initialization > (Epsilon, Gamma)
                                            let epsilon = [],
                                                gamma = LDK.namedObject('NamedNodeMap', {}, LDK.namedNodeMapProto);

                                            /* Loop
                                                    Index Data.
                                            */
                                            for (let i in data) {
                                                // Update > Metadata
                                                (i in metadata) || (metadata[i] = '');

                                                // Initialization > (Beta, Delta)
                                                let beta = LDK.getConstructor(data[i]) == LDK.attr,
                                                    delta = LDK.getConstructor(metadata[i]) == LDK.attr;

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (args.length == 2) {
                                                    // Initialization > Epsilon
                                                    let epsilon = beta ? data[i].value : that.getAttribute(LDK.string(data[i]));

                                                    // Modification > Target > (...)
                                                    beta ? that.removeAttributeNode(data[i]) : that.removeAttribute(LDK.string(data[i]));
                                                    delta ? that.setAttributeNode(metadata[i]) : that.setAttribute(LDK.string(metadata[i]), epsilon)
                                                }

                                                else {
                                                    // Modification > Target > (...)
                                                    beta ? that.removeAttributeNode(data[i]) : that.removeAttribute(LDK.string(data[i]));
                                                    delta ? that.setAttributeNode(metadata[i]) : that.setAttribute(LDK.string(metadata[i]), LDK.isArray(alpha) ? LDK.string(LDK.getConstructor(alpha[i]) == LDK.attr ? alpha[i].value : alpha[i]) : LDK.string(LDK.getConstructor(alpha) ? alpha.value : alpha));
                                                }

                                                // Update > Epsilon
                                                epsilon.push(delta ? metadata[i] : that.getAttributeNode(LDK.string(metadata[i])));

                                                /* Loop
                                                        Index Epsilon.
                                                */
                                                for (let i in epsilon) {
                                                    // Initialization > Delta
                                                    let delta = epsilon[i];

                                                    // Modification > Gamma > (...)
                                                    gamma[i] = delta;
                                                    gamma[delta.name] = delta
                                                }
                                            }

                                            // Return
                                            return gamma
                                        }

                                        else if (LDK.isArray(data) && !LDK.isArray(metadata)) {
                                            // Initialization > (Epsilon, Gamma)
                                            let epsilon = [],
                                                gamma = LDK.namedObject('NamedNodeMap', {}, LDK.namedNodeMapProto);

                                            /* Loop
                                                    Index Data.
                                            */
                                            for (let i of data) {
                                                // Initialization > (Beta, Delta)
                                                let beta = LDK.getConstructor(i) == LDK.attr,
                                                    delta = LDK.getConstructor(metadata) == LDK.attr;

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (args.length == 2) {
                                                    // Initialization > Epsilon
                                                    let epsilon = LDK.getConstructor(i) == LDK.attr ? i.value : that.getAttribute(LDK.string(i));

                                                    // Modification > Target > (...)
                                                    beta ? that.removeAttributeNode(i) : that.removeAttribute(LDK.string(i));
                                                    delta ? that.setAttributeNode(metadata) : that.setAttribute(LDK.string(metadata), epsilon)
                                                }

                                                else {
                                                    // Modification > Target > (...)
                                                    beta ? that.removeAttributeNode(i) : that.removeAttribute(LDK.string(i));
                                                    delta ? that.setAttributeNode(metadata) : that.setAttribute(LDK.string(metadata), LDK.getConstructor(alpha) == LDK.attr ? alpha.value : alpha)
                                                }

                                                // Update > Epsilon
                                                epsilon.push(delta ? metadata : that.getAttributeNode(metadata));

                                                /* Loop
                                                        Index Epsilon.
                                                */
                                                for (let i in epsilon) {
                                                    // Initialization > Delta
                                                    let delta = epsilon[i];

                                                    // Modification > Gamma > (...)
                                                    gamma[i] = delta;
                                                    gamma[delta.name] = delta
                                                }
                                            }

                                            // Return
                                            return gamma
                                        }

                                        else if (!LDK.isArray(data)) {
                                            // Initialization > (Beta, Delta)
                                            let beta = LDK.getConstructor(data) == LDK.attr,
                                                delta = LDK.getConstructor(metadata) == LDK.attr;

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (args.length == 2) {
                                                // Initialization > Epsilon
                                                let epsilon = beta ? data.value : that.getAttribute(data = LDK.string(data));

                                                // Modification > Target > (...)
                                                beta ? that.removeAttributeNode(data) : that.removeAttribute(LDK.string(data));
                                                delta ? that.setAttributeNode(metadata) : that.setAttribute(LDK.string(metadata), epsilon)
                                            }

                                            else {
                                                // Modification > Target > (...)
                                                beta ? that.removeAttributeNode(data) : that.removeAttribute(LDK.string(data));
                                                delta ? that.setAttributeNode(metadata) : that.setAttribute(LDK.string(metadata), LDK.string(alpha))
                                            }

                                            // Return
                                            return delta ? metadata : that.getAttributeNode(LDK.string(metadata))
                                        }

                                        // Return
                                        return that.attributes.length ? that.attributes : that
                                    }

                                    else if (args.length)
                                        // LapysJS > Error
                                        LapysJS.error(["'replaceAttribute'", "'" + that.constructor.name + "'"], 'argument', [2, $args])
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Script
                        LDK.objectDefProp(tmp.value, 'script', {
                            // Get
                            get: function getScript() {
                                // Error Handling
                                try {
                                    // Initialization > (Data, Metadata)
                                    let data = this.hasAttribute('script') ? tmp.functions.eval('(function() {' + this.getAttribute('script') + '})') : LDK.null,
                                        metadata = data.getBody();

                                    // Modification > Data > To String
                                    LDK.objectDefProp(data, 'toString', {
                                        // Value
                                        value: function toString() {
                                            // Return
                                            return metadata
                                        }
                                    });

                                    // Return
                                    return data
                                } catch (error) {}

                                // Return
                                return LDK.null
                            },

                            // Set
                            set: function setScript() {
                                // Initialization > (Data, Metadata, Target)
                                let data, metadata = LDK.string(arguments[0]),
                                    that = this;

                                // Error Handling
                                try {
                                    // Execution
                                    eval('data = (function(){' + metadata + '})')
                                } catch (error) {
                                    // Error Handling
                                    try {
                                        // Execution
                                        eval('data = (function(){' + metadata + '\n})')
                                    } catch (error) {
                                        // LapysJS > Error
                                        LapysJS.error("Invalid element script attribute value: '" + metadata + "'.")
                                    }
                                }

                                // Update > (Permanent Data > Scripted Nodes List)
                                ((a=>{for(let i in a)a[i]=a[i].element;return a})(perm.scriptedNodesList).indexOf(that) > -1) || perm.scriptedNodesList.push({element: that, script: metadata});

                                // Modification > Target > Script
                                that.setAttribute('script', metadata);

                                // Data
                                data.call(that)
                            }
                        });

                        // Selector
                        LDK.objectDefProp(tmp.value, 'selector', {
                            // Get
                            get: function getSelector() {
                                // Initialization > (Data, Target, Class, ID, Attributes, Regular Expression)
                                let data = '',
                                    that = this,
                                    $class = (that.hasAttribute('class') ? LapysJS.debug.formatChar(that.getAttribute('class'), 'list') : []),
                                    $id = that.hasAttribute('id') ? that.getAttribute('id') : '',
                                    $attributes = (that.attributes.length ? (function(){let a=LDK.arrayFrom(that.attributes);for(let i in a)a[i]=a[i].name;a.removeElement('class','id');return a})() : []),
                                    regex = /[ \[\]='"`]/g;

                                /* Logic
                                        [if statement]
                                */
                                if ($class.length) {
                                    /* Loop
                                            Index Class.

                                        > Update > Data
                                    */
                                    for (let i of $class)
                                        !i || (data += i.match(regex) ? '' : '.' + i);

                                    /* Loop
                                            Index Class.
                                    */
                                    for (let i of $class)
                                        /* Logic
                                                [if statement]
                                        */
                                        if (data.indexOf('.' + i) < 0) {
                                            // Update > Data
                                            data += "[class*='";

                                            // Break
                                            break
                                        }

                                    /* Loop
                                            Index Class.

                                        > Update > Data
                                    */
                                    for (let i of $class)
                                        (data.replace(/\[class\*='.*'/g, '').indexOf('.' + i) > -1) || (data += ($class['LapysJS toggle'] ? ' ' : ($class['LapysJS toggle'] = LDK.true, '')) + i.replace(/'/g, "\\'"));

                                    // Update > Data
                                    (data.indexOf("[class*='") < 0) || (data += "']")
                                }

                                // Update > Data
                                !$id || (data += $id.match(regex) ? ($id.indexOf("'") > -1 ? ($id.indexOf('"') > -1 ? "[id='" + $id.replace(/'/g, "\\'") + "']" : '[id="' + $id + '"]') : "[id='" + $id + "']") : '#' + $id)

                                /* Loop
                                        Index Attributes.
                                */
                                for (let i of $attributes) {
                                    // Initialization > Metadata
                                    let metadata = that.getAttribute(i);

                                    /* Update > Data
                                            --- NOTE ---
                                                #lapys: The characters in the regular expression
                                                    determine if the attribute value should be delimited with quotes or not.
                                    */
                                    data += metadata.replace(regex, '') == metadata ? '[' + i + '=' + metadata + ']' : (metadata.indexOf("'") > -1 ? (metadata.indexOf('"') > -1 ? '[' + i + "='" + metadata.replace(/'/g, "\\'") + "']" : '[' + i + '="' + metadata + '"]') : '[' + i + "='" + metadata + "']");
                                }

                                // Return
                                return that.tagName.toLowerCase() + data
                            },

                            // Set
                            set: function setSelector() {
                                // Initialization > (Data, Target)
                                let data = LDK.string(arguments[0]),
                                    that = this;

                                // Error Handling
                                try { LDK.docQueSel(data) }
                                catch (error) {
                                    // Initialization > Metadata
                                    let metadata = error.message.getAfterChar(':').trimLeft().trimRightChar('.');

                                    // LapysJS > Error
                                    LapysJS.error(["'setSelector'", "'" + that.constructor.name + "'"], 'argument', metadata || "'" + data + "' is not a valid selector")
                                }

                                // Initialization > Beta
                                let beta = [LapysJS.perm.regexSet.randomize(), LapysJS.perm.regexSet.randomize()];

                                // Update > Data
                                data = data.replace(/'[^']{0,}'/g, data => {
                                    // Return
                                    return data.replace(/\./g, beta[0])
                                }).replace(/"[^"]{0,}"/g, data => {
                                    // Return
                                    return data.replace(/\./g, beta[0])
                                }).replace(/'[^']{0,}'/g, data => {
                                    // Return
                                    return data.replace(/#/g, beta[1])
                                }).replace(/"[^"]{0,}"/g, data => {
                                    // Return
                                    return data.replace(/#/g, beta[1])
                                });

                                // Initialization > (Data, Attributes, Class, ID, Mode)
                                let $data = data.length,
                                    $attributes = '',
                                    $class = '',
                                    $id = '',
                                    mode = {value: LDK.null};

                                /* Modification > Mode > (Attributes, Class, ID)
                                        --- NOTE ---
                                            #lapys: These act as locks to guide the rules of how attributes are selected.
                                */
                                mode.attributes = LDK.false;
                                mode.class = LDK.false;
                                mode.id = LDK.false;

                                /* Loop
                                        Index Data.
                                */
                                for (let i = 0; i < $data; i += 1) {
                                    // Initialization > Metadata
                                    let metadata = data[i];

                                    /* Logic
                                            [switch:case statement]

                                        > (...)
                                    */
                                    switch (metadata) {
                                        // Attribute
                                        case '[':
                                            mode.value = 'attributes';
                                            break;

                                        // Class
                                        case '.':
                                            mode.value = 'class';
                                            break;

                                        // ID
                                        case '#':
                                            (!mode.id && i != data.indexOf(metadata)) && (mode.id = LDK.true);
                                            mode.value = 'id'
                                    }

                                    /* Logic
                                            [if:else if statement]

                                        > Update
                                    */
                                    if (mode.value == 'attributes' && !mode.attributes)
                                        // Attributes
                                        $attributes += metadata;

                                    else if (mode.value == 'class' && !mode.class)
                                        // Class
                                        $class += metadata;

                                    else if (mode.value == 'id' && !mode.id)
                                        // ID
                                        $id += metadata
                                }

                                // Update > (Attributes, Class, ID)
                                $attributes = (a=>{for(let i=0;i<a.length;i+=1)a[i]=a[i].slice(0,-']'.length);return a})($attributes.trim().split('[').filter(LDK.bool));
                                $class = $class.trim().split('.').filter(LDK.bool);
                                $id = [$id.trim().slice('#'.length)];

                                /* Loop
                                        Index Attributes.
                                */
                                for (let i of $attributes) {
                                    // Initialization > Metadata
                                    let metadata = i.getBeforeChar('=');

                                    // Modification > Target > [Metadata]
                                    (metadata != 'class' && metadata != 'id') && that.setAttribute(metadata, (function() {
                                        // Initialization > Alpha
                                        let alpha = i.getAfterChar('=');

                                        // Update > Alpha
                                        ((alpha.endsWith('"') && alpha.startsWith('"')) || (alpha.endsWith("'") && alpha.startsWith("'"))) && (alpha = alpha.slice(1, -1));

                                        // Return
                                        return alpha.replace(LDK.regex(beta[0], 'g'), '.').replace(LDK.regex(beta[1], 'g'), '#')
                                    })())
                                }

                                // Modification > Target
                                    // Class
                                    that.setAttribute('class', ((that.getAttribute('class') || '') + $class.join(' ')).trim());

                                    // ID
                                    $id[0] && that.setAttribute('id', $id[0])
                            }
                        });

                        // Set Attribute
                        LDK.objectDefProp(tmp.value, 'setAttr', {
                            // Value
                            value: function setAttribute() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments].filter(a=>{return LDK.isConstructible(a)}),
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length)
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (args.length == 1) {
                                        // Initialization > Data
                                        let data = args[0];

                                        // Modification > Target > Data
                                        LDK.isNonConstructible(data) || (data.constructor == LDK.attr ? that.setAttributeNode(data) : that.setAttribute(data = LDK.string(data), ''));

                                        // Return
                                        return LDK.isConstructible(data) ? that.getAttributeNode(data.constructor == LDK.attr ? data.name : data) : LDK.null
                                    }

                                    else if (args.length == 2) {
                                        // Initialization > (Data, Metadata)
                                        let data = args[0],
                                            metadata = args[1];

                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (LDK.isArray(data) && LDK.isArray(metadata)) {
                                            let alpha = [],
                                                beta = LDK.namedObject('NamedNodeMap', {}, LDK.namedNodeMapProto);

                                            /* Loop
                                                    [for:in statement]
                                            */
                                            for (let i in data) {
                                                // Initialization > (Delta, Epsilon)
                                                let delta = data[i],
                                                    epsilon = LDK.isConstructible(delta) ? (delta.constructor == LDK.attr ? delta.name : LDK.string(delta)) : LDK.null;

                                                // Modification > Target > [Loop Iterator]
                                                LDK.isNonConstructible(delta) || that.setAttribute(delta.constructor == LDK.attr ? delta.name : LDK.string(delta), i in metadata ? (metadata[i].constructor == LDK.attr ? metadata[i].value : LDK.string(metadata[i])) : '');

                                                // Update > Alpha
                                                LDK.isNonConstructible(epsilon) || alpha.push(that.getAttributeNode(delta))
                                            }

                                            /* Loop
                                                    Index Alpha.
                                            */
                                            for (let i in alpha) {
                                                // Initialization > Delta
                                                let delta = alpha[i];

                                                // Modification > Beta > (...)
                                                beta[i] = delta;
                                                beta[delta.name] = delta
                                            }

                                            // Return
                                            return beta
                                        }

                                        else if (LDK.isArray(data) && !LDK.isArray(metadata)) {
                                            // Initialization > (Alpha, Beta)
                                            let alpha = [],
                                                beta = LDK.namedObject('NamedNodeMap', {}, LDK.namedNodeMapProto);

                                            /* Loop
                                                    [for:of statement]

                                                > Modification > Target > [Loop Iterator]
                                            */
                                            for (let i of data) {
                                                // Initialization > Delta
                                                let delta = i.constructor == LDK.attr ? i.name : LDK.string(i);

                                                // Modification > Target > [Loop Iterator]
                                                LDK.isNonConstructible(i) || that.setAttribute(delta, LDK.string(metadata));

                                                // Update > Alpha
                                                alpha.push(that.getAttributeNode(delta))
                                            }

                                            /* Loop
                                                    Index Alpha.
                                            */
                                            for (let i in alpha) {
                                                // Initialization > Delta
                                                let delta = alpha[i];

                                                // Modification > Beta > (...)
                                                beta[i] = delta;
                                                beta[delta.name] = delta
                                            }

                                            // Return
                                            return beta
                                        }

                                        else if (!LDK.isArray(data)) {
                                            // Modification > Target > Data
                                            that.setAttribute(LDK.string(data), LDK.string(metadata));

                                            // Return
                                            return that.attributes[LDK.string(data)]
                                        }
                                    }

                                    else if (args.length > 2) {
                                        /* Loop
                                                [for:in statement]

                                            > Modification > Target > [Loop Iterator]
                                        */
                                        for (let i of args)
                                            i.constructor == LDK.attr ? that.setAttributeNode(i) : (LDK.isArray(i) ? that.setAttribute(LDK.string(i[0]), 1 in i ? LDK.string(i[1]) : '') : that.setAttribute(LDK.string(i), ''));

                                        // Return
                                        return args.length > 1 ? (a=>{for(let i in a)a[i]=a[i].constructor==LDK.attr?a[i]:that.getAttributeNode(LDK.string(a[i]));return a})(args).filter(LDK.bool) : (args[0].constructor == LDK.attr ? args[0] : that.getAttributeNode(LDK.string(args[0])))
                                    }

                                // Return
                                return LDK.null
                            }
                        });

                        // Write
                        LDK.objectDefProp(tmp.value, 'write', {
                            // Value
                            value: function write() {
                                // Initialization > (Arguments, Target)
                                let data = (a=>{for(let i in a)a[i]=LDK.string(a[i]);return a})([...arguments]).join(''),
                                    that = this;

                                /* Logic
                                        [if:else statement]
                                */
                                if (perm.writtenNodesList.indexOf(that) > -1)
                                    // Modification > Target > Inner HTML
                                    that.innerHTML += data;

                                else {
                                    // Update > Permanent Data > Written Nodes List
                                    perm.writtenNodesList.push(that);

                                    // Modification > Target > Inner HTML
                                    that.innerHTML = data
                                }

                                // Return
                                return data
                            }
                        });

                    /* Event Target Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.eventTargetProto;

                        // Ancestor Query Selector
                        LDK.objectDefProp(tmp.value, 'ancestorQuerySelector', {
                            // Value
                            value: function ancestorQuerySelector() {
                                // Initialization > (...)
                                let that = LDK.isDocument(this) || LDK.isWindow(this) ? document.children[0] : this,
                                    data = LDK.string(arguments[0]),
                                    metadata = (function(){let a=this,b=this,c=a=>{return a.parentElement||a.parentNode||a.parent},d=[];try{while(c(a)&&c(a)!=window){d.push(a);a=c(a)}return document.contains(b)?d.concat(document,window):d}catch(e){}return LDK.null}).call(that).slice(1),
                                    alpha = (metadata.indexOf(document) > -1 ? document : that);

                                // Update > Alpha
                                alpha = LDK.toArray(alpha.querySelectorAll(data));

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i of alpha)
                                    /* Logic
                                            [if statement]

                                        > Return
                                    */
                                    if (metadata.indexOf(i) > -1)
                                        return i;

                                // Return
                                return LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Ancestor Query Selector All
                        LDK.objectDefProp(tmp.value, 'ancestorQuerySelectorAll', {
                            // Value
                            value: function ancestorQuerySelectorAll() {
                                // Initialization > (...)
                                let that = LDK.isDocument(this) || LDK.isWindow(this) ? document.children[0] : this,
                                    data = LDK.string(arguments[0]),
                                    metadata = (function(){let a=this,b=this,c=a=>{return a.parentElement||a.parentNode||a.parent},d=[];try{while(c(a)&&c(a)!=window){d.push(a);a=c(a)}return document.contains(b)?d.concat(document,window):d}catch(e){}return LDK.null}).call(that).slice(1),
                                    alpha = (metadata.indexOf(document) > -1 ? document : that),
                                    beta = LDK.namedArray('NodeList');

                                // Update > Alpha
                                alpha = LDK.toArray(alpha.querySelectorAll(data));

                                /* Loop
                                        Index Alpha.

                                    > Update > Beta
                                */
                                for (let i of alpha)
                                    (metadata.indexOf(i) < 0) || beta.push(i);

                                // Return
                                return beta
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // {LapysJS} Ancestor Query Selector
                        LDK.objectDefProp(tmp.value, '$_', {
                            // Value
                            value: function LapysJSAncestorQuerySelector() {
                                // Initialization > (Arguments, Target, Data, Metadata, Alpha)
                                let args = [...arguments],
                                    that = this,
                                    data = LDK.eventTargetProto.$$.apply(document.contains(that) ? document : that, args),
                                    metadata = LDK.namedArray('LapysJSNodeList'),
                                    alpha = (function(){let a=this,b=a=>{return a.parentElement||a.parentNode||a.parent},c=[],d=this;try{while(b(a)&&b(a)!=window){c.push(a);a=b(a)}return LDK.namedArray.apply(LDK,LDK.arrayProto.addElementToFront.apply(['NodeList'],document.contains(d)?c.concat(document,window):c)).removeDuplicatedElements()}catch(e){}return LDK.null}).call(that).removeElement(that);

                                /* Logic
                                        [if statement]
                                */
                                if (LDK.isArrayLike(data)) {
                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        (alpha.indexOf(i) < 0) || metadata.push(i);

                                    // Return
                                    return metadata
                                }

                                // Return
                                return data
                            }
                        });

                        // Children
                        LDK.objectDefProp(tmp.value, '$x', {
                            // Value
                            get: function children() {
                                // Initialization > Target
                                let that = LDK.isWindow(this) ? document : this;

                                // Return
                                return LDK.arrayProto.addElement.apply(LDK.namedArray('HTMLCollection'), LDK.toArray(that.childNodes || that.children || []))
                            }
                        });

                        // Delete Event
                        LDK.objectDefProp(tmp.value, 'delEvent', {
                            // Value
                            value: function removeEvent() {
                                // Initialization > (Arguments, Target, Default Modifier, Event List, Parse Event, Quasi Event)
                                let args = [...arguments],
                                    that = this,
                                    defaultModifier = {capture: LDK.false, once: LDK.false, passive: LDK.false},
                                    eventList = {listener: [], modifier: [], type: []},
                                    parseEvent = LDK.isNativeFunction(LDK.eventTargetProto.removeEventListener) ? (function() {
                                        // Initialization > Arguments
                                        let args = [LDK.string(arguments[0])].concat([...arguments].slice(1));

                                        // Return
                                        return LDK.eventTargetProto.removeEventListener.apply(that, args)
                                    }) : (function() {
                                        // Initialization > Arguments
                                        let args = ['on' + LDK.string(arguments[0])].concat([...arguments].slice(1));

                                        // Return
                                        return LDK.eventTargetProto.detachEvent.apply(that, args)
                                    }), quasiEvent = LDK.namedObject('QuasiEvent', {target: that});

                                // Modification > Permanent Data > Event Nodes List
                                perm.eventNodesList = perm.eventNodesList.filter(a=>{return !LDK.isUndefined(a)});

                                /* Logic
                                        [if:else statement]
                                */
                                if (
                                    !LDK.isObject(args[0]) &&
                                    (function() {
                                        // Initialization > Data
                                        let data = (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.string(a[i]);return a})(LDK.isArray(args[0]) ? args[0] : [args[0]]);

                                        /* Loop
                                                [for:of statement]
                                        */
                                        for (let i of data)
                                            /* Logic
                                                    [if statement]

                                                > Return
                                            */
                                            if (LDK.isExecutableString(i) && i.replace(/[a-zA-Z_\$]{0,}/g, '').trim())
                                                return LDK.false;

                                        // Return
                                        return LDK.true
                                    })() &&
                                    args.length == 1
                                ) {
                                    // Initialization > Query Events
                                    let queryEvents = LDK.isNativeFunction(tmp.functions.getEventListeners) ? (function() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = tmp.functions.getEventListeners(data);

                                        // Return
                                        return metadata
                                    }) : (function() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = {};

                                        /* Loop
                                                [for:of statement]
                                        */
                                        for (let i of perm.eventNodesList)
                                            /* Logic
                                                    [if statement]
                                            */
                                            if (i.target == data)
                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if ('type' in i)
                                                    // Update > Metadata
                                                    i.type in metadata ? metadata[i.type].push(i) : metadata[i.type] = [i];

                                                else {
                                                    /* Loop
                                                            [for statement]
                                                    */
                                                    for (let j = 0; j < i.types.length; j += 1) {
                                                        // Initialization > Alpha
                                                        let alpha = (function() {
                                                            // Initialization > Data
                                                            let data = {
                                                                // Listener
                                                                listener: i.listeners[j],

                                                                // Types
                                                                type: i.types[j]
                                                            };

                                                            // Update > Data
                                                            data = LDK.isBool(i.modifiers[j]) ? LDK.objectAssign({
                                                                // Once
                                                                once: LDK.false,

                                                                // Passive
                                                                passive: LDK.false,

                                                                // Use Capture
                                                                useCapture: i.modifiers[j]
                                                            }, data) : LDK.objectAssign({
                                                                // Once
                                                                once: i.modifiers[j].once,

                                                                // Passive
                                                                passive: i.modifiers[j].passive,

                                                                // Use Capture
                                                                useCapture: i.modifiers[j].capture
                                                            }, data);

                                                            // Return
                                                            return data
                                                        })();

                                                        // Update > Metadata
                                                        i.types[j] in metadata ? metadata[i.types[j]].push(alpha) : metadata[i.types[j]] = [alpha]
                                                    }
                                                }

                                        // Return
                                        return metadata
                                    });

                                    // Modification
                                        // Quasi Event
                                            // Types
                                            LDK.isArray(args[0]) && args[0].length > 1 ? quasiEvent.types = (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.string(a[i]);return a})(args[0]) : quasiEvent.type = LDK.string(args[0]);

                                            // Listeners
                                            'types' in quasiEvent ? quasiEvent.listeners = [] : quasiEvent.listener = LDK.null;

                                            // Modifiers
                                            'types' in quasiEvent ? quasiEvent.modifiers = [] : quasiEvent.modifier = LDK.null;

                                        // Event List > Types
                                        eventList.types = 'types' in quasiEvent ? quasiEvent.types : [quasiEvent.type];

                                    // Initialization > Data
                                    let data = queryEvents(quasiEvent.target);

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of eventList.types) {
                                        /* Loop
                                                Index Data.
                                        */
                                        for (let j in data)
                                            /* Logic
                                                    [if statement]
                                            */
                                            if (i == j)
                                                /* Loop
                                                        [for:of statement]

                                                    > Parse Event
                                                */
                                                for (let k of data[j])
                                                    parseEvent(k.type, k.listener, {capture: k.useCapture, once: k.once, passive: k.passive});

                                        /* Loop
                                                [for:of statement]

                                            > Error Handling
                                        */
                                        for (let j of perm.eventNodesList)
                                            try { j.type }
                                            catch (error) {
                                                // Modification > Permanent Data > Event Nodes List
                                                perm.eventNodesList = perm.eventNodesList.filter(a=>{return !LDK.isUndefined(a)})
                                            }

                                        /* Loop
                                                [for statement]
                                        */
                                        for (let j = 0; j < perm.eventNodesList.length; j += 1) {
                                            // Initialization > Metadata
                                            let metadata = perm.eventNodesList[j];

                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (metadata.type == i)
                                                // Update > Permanent Data > Event Nodes List
                                                perm.eventNodesList[j] = LDK.undefined;

                                            else if ((metadata.types || []).indexOf(i) > -1)
                                                /* Loop
                                                        [while statement]
                                                */
                                                while ((metadata.types || []).indexOf(i) > -1 && ('type' in metadata || 'types' in metadata)) {
                                                    // Initialization > Alpha
                                                    let alpha = metadata.types.indexOf(i);

                                                    // Update > Metadata > (Listeners, Modifiers, Types)
                                                    metadata.listeners.removeElement(metadata.listeners[alpha]);
                                                    metadata.modifiers.removeElement(metadata.modifiers[alpha]);
                                                    metadata.types.removeElement(metadata.types[alpha]);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (metadata.listeners.length == 1) {
                                                        // Modification > Metadata > Listener
                                                        metadata.listener = metadata.listeners[0];

                                                        // Deletion
                                                        delete metadata.listeners
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (metadata.modifiers.length == 1) {
                                                        // Modification > Metadata > Modifier
                                                        metadata.modifier = metadata.modifiers[0];

                                                        // Deletion
                                                        delete metadata.modifiers
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (metadata.types.length == 1) {
                                                        // Modification > Metadata > Type
                                                        metadata.type = metadata.types[0];

                                                        // Deletion
                                                        delete metadata.types;

                                                        /* Logic
                                                                [if statement]
                                                        */
                                                        if (metadata.type == i) {
                                                            // Deletion
                                                            delete metadata.type;

                                                            // Modification > Permanent Data > Event Nodes List > [Loop Iterator]
                                                            perm.eventNodesList[j] = LDK.undefined
                                                        }
                                                    }
                                                }
                                        }

                                        /* Loop
                                                [for statement]

                                            > Update > Permanent Data > Event Nodes List
                                        */
                                        for (let j = 0; j < perm.eventNodesList.length; j += 1)
                                            LDK.isUndefined(perm.eventNodesList[j]) && perm.eventNodesList.removeElement(perm.eventNodesList[j])
                                    }
                                }

                                else {
                                    // Function
                                        // Parse Array
                                        function parseArray() {
                                            // Initialization > (Data, Listeners, Type)
                                            let data = [...arguments[0]],
                                                listeners = data.slice(1),
                                                type = LDK.string(data[0]);

                                            // LapysJS > Error
                                            listeners.length || LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', 'Expected array to be in format: [<event type>, <event listener>]');

                                            /* Loop
                                                    Index Listeners.

                                                > Update > Listeners
                                            */
                                            for (let i = 0; i < listeners.length; i += 1)
                                                LDK.isString(listeners[i]) && (listeners[i] = func(listeners[i]));

                                            /* Loop
                                                    Index Listeners.

                                                > LapysJS > Error
                                            */
                                            for (let i of listeners)
                                                LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                            /* Loop
                                                    Index Listeners.

                                                > Update > Event List > (Listener, Modifier, Type)
                                            */
                                            for (let i of listeners) {
                                                eventList.listener.push(i);
                                                eventList.modifier.push(defaultModifier);
                                                eventList.type.push(type)
                                            }
                                        }

                                        // Parse Object
                                        function parseObject() {
                                            // Initialization > (Data, Metadata)
                                            let data = LDK.objectAssign({}, arguments[0]),
                                                metadata = (a=>{for(let i in a)a[i]=!!a[i];return a});

                                            /* Loop
                                                    Index Data.

                                                > LapysJS > Error
                                            */
                                            for (let i = 0; i < data.length; i += 1)
                                                (i != 'capture' && i != 'listener' && i != 'once' && i != 'passive' && i != 'type' && i != 'useCapture') && LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', "Unexpected object configuration '" + i + "'");

                                            // LapysJS > Error
                                            ('listener' in data) || LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', "Expected object configuration 'listener' in JSON object");
                                            ('type' in data) || LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', "Expected object configuration 'type' in JSON object");

                                            // Deletion
                                            ('capture' in data || 'once' in data || 'passive' in data) && (delete data.useCapture);

                                            // Update > Data
                                            ('capture' in data || 'once' in data || 'passive' in data || 'useCapture' in data) || (data = LDK.objectAssign(defaultModifier, data));

                                            // Modification > Data
                                                // Listener
                                                LDK.isArray(data.listener) || (data.listener = [data.listener]);

                                                // Modifier
                                                data.modifier = 'useCapture' in data ?
                                                    (LDK.isArray(data.useCapture) ? metadata(data.useCapture) : [!!data.useCapture]) :
                                                    (LDK.isArray(data.capture) || LDK.isArray(data.once) || LDK.isArray(data.passive) ?
                                                        (function() {
                                                            // Initialization > (Alpha, Beta)
                                                            let alpha = {capture: data.capture, once: data.once, passive: data.passive},
                                                                beta = {};

                                                            // Modification > Beta > (Capture, Once, Passive)
                                                            beta.capture = LDK.isArray(alpha.capture) ? metadata(alpha.capture) : [!!alpha.capture];
                                                            beta.once = LDK.isArray(alpha.once) ? metadata(alpha.once) : [!!alpha.once];
                                                            beta.passive = LDK.isArray(alpha.passive) ? metadata(alpha.passive) : [!!alpha.passive];

                                                            // Return
                                                            return [beta]
                                                        })() :
                                                        [{capture: [!!data.capture], once: [!!data.once], passive: [!!data.passive]}]
                                                    );

                                                // Type
                                                LDK.isArray(data.type) || (data.type = [LDK.string(data.type)]);

                                            /* Loop
                                                    [for statement]

                                                > Update > Data > Listener
                                            */
                                            for (let i = 0; i < data.listener.length; i += 1)
                                                LDK.isString(data.listener[i]) && (data.listener[i] = func(data.listener[i]));

                                            /* Loop
                                                    [for:of statement]

                                                > LapysJS > Error
                                            */
                                            for (let i of data.listener)
                                                LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                            // Initialization > (Alpha, Beta, Delta)
                                            let alpha = (data.modifier.length = tmp.functions.max(data.listener.length, data.modifier.length, data.type.length)),
                                                beta = [...data.listener],
                                                delta = [...data.type];

                                            /* Loop
                                                    [for statement]

                                                > Update > Data > Modifier
                                            */
                                            for (let i = 0; i < data.modifier.length; i += 1)
                                                LDK.isUndefined(data.modifier[i]) && (data.modifier[i] = defaultModifier);

                                            /* Loop
                                                    [while statement]

                                                > Update > Data > Listener
                                            */
                                            while (data.listener.length < alpha)
                                                LDK.arrayProto.push.apply(data.listener, beta);

                                            /* Loop
                                                    [while statement]

                                                > Update > Data > Type
                                            */
                                            while (data.listener.length > alpha)
                                                LDK.arrayProto.push.apply(data.type, delta);

                                            // Modification > Data > (Listener, Type) > Length
                                            data.listener.length = data.type.length = alpha;

                                            // Initialization > Gamma
                                            let gamma = [];

                                            // Modification > Gamma > Length
                                            gamma.length = data.modifier.length;

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (LDK.isObject(data.modifier[0])) {
                                                // Initialization > (Gamma, Epsilon, Upsilon, Pi)
                                                let $gamma = gamma.length = tmp.functions.max(data.modifier[0].capture.length, data.modifier[0].once.length, data.modifier[0].passive.length),
                                                    epsilon = [...data.modifier[0].capture],
                                                    upsilon = [...data.modifier[0].once],
                                                    pi = [...data.modifier[0].passive];

                                                /* Loop
                                                        [while statement]

                                                    > Update > Data > Modifier > Capture
                                                */
                                                while (data.modifier[0].capture.length < $gamma)
                                                    LDK.arrayProto.push.apply(data.modifier[0].capture, epsilon);

                                                /* Loop
                                                        [while statement]

                                                    > Update > Data > Modifier > Once
                                                */
                                                while (data.modifier[0].once.length < $gamma)
                                                    LDK.arrayProto.push.apply(data.modifier[0].once, upsilon);

                                                /* Loop
                                                        [while statement]

                                                    > Update > Data > Modifier > Passive
                                                */
                                                while (data.modifier[0].passive.length < $gamma)
                                                    LDK.arrayProto.push.apply(data.modifier[0].passive, pi);

                                                // Modification > Data > Modifier > (Capture, Once, Passive) > Length
                                                data.modifier[0].capture.length = data.modifier[0].once.length = data.modifier[0].passive.length
                                            }

                                            /* Loop
                                                    [for statement]

                                                > Update > Data > Modifier
                                            */
                                            for (let i = 0; i < data.modifier.length; i += 1)
                                                LDK.isNonConstructible(data.modifier[i]) && (data.modifier[i] = defaultModifier);

                                            /* Loop
                                                    [for statement]
                                            */
                                            for (let i = 0; i < data.type.length; i += 1)
                                                /* Loop
                                                        Index Gamma.

                                                    > Update > Event List > (Listener, Modifier, Type)
                                                */
                                                for (let j = 0; j < gamma.length; j += 1) {
                                                    eventList.listener.push(data.listener[i]);
                                                    eventList.modifier.push(
                                                        LDK.isObject(data.modifier[i]) ? {
                                                            // Capture
                                                            capture: !!data.modifier[i].capture[j],

                                                            // Once
                                                            once: !!data.modifier[i].once[j],

                                                            // Passive
                                                            passive: !!data.modifier[i].passive[j]
                                                        } : !!data.modifier[j]
                                                    );
                                                    eventList.type.push(LDK.string(data.type[i]))
                                                }
                                        }

                                    /* Logic
                                            [if statement]
                                    */
                                    if (LDK.isConstructible(args[0]))
                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (
                                            LDK.isObject(args[0]) ||
                                            (LDK.isArray(args[0]) && ((LDK.isExecutableString((args[0] || tmp.object)[1]) || LDK.isFunction((args[0] || tmp.object)[1])) && LDK.string((args[0] || ['', ''])[1]).replace(/[a-zA-Z_\$]{0,}/g, '').trim()))
                                        )
                                            /* Loop
                                                    Index Arguments.
                                            */
                                            for (let i of args) {
                                                // LapysJS > Error
                                                LDK.isConstructible(i) || LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', 'Unexpected non-constructible value parsed');

                                                // Parse Array | (Parse Array | LapysJS > Error)
                                                LDK.isObject(i) ? parseObject(i) : (LDK.isArray(i) ? parseArray(i) : LapysJS.error(i, 'must', ['array', 'object']));

                                                // Update > Default Modifier
                                                defaultModifier = {capture: LDK.false, once: LDK.false, passive: LDK.false}
                                            }

                                        else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1])) {
                                            // Update > Argument (0, 1, 2)
                                            LDK.isArray(args[0]) || (args[0] = [args[0]]);
                                            LDK.isArray(args[1]) || (args[1] = [args[1]]);
                                            args.length > 2 ? (LDK.isArray(args[2]) || (args[2] = [args[2]])) : args[2] = [defaultModifier];

                                            /* Loop
                                                    Index Argument 0.

                                                > Update > Argument 1
                                            */
                                            for (let i = 0; i < args[0].length; i += 1)
                                                args[0][i] = LDK.string(args[0][i]);

                                            /* Loop
                                                    Index Argument 1.

                                                > Update > Argument 1
                                            */
                                            for (let i = 0; i < args[1].length; i += 1)
                                                LDK.isString(args[1][i]) && (args[1][i] = func(args[1][i]));

                                            /* Loop
                                                    Index Argument 1.

                                                > LapysJS > Error
                                            */
                                            for (let i of args[1])
                                                LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                            /* Loop
                                                    Index Argument 2.

                                                > Update > Argument 2
                                            */
                                            for (let i = 0; i < args[2].length; i += 1)
                                                args[2][i] = LDK.isObject(args[2][i]) ? LDK.objectAssign({}, args[2][i]) : !!args[2][i];

                                            /* Loop
                                                    Index Argument 2.
                                            */
                                            for (let i of args[2])
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (LDK.isObject(i))
                                                    /* Loop
                                                            Index [Loop Iterator]

                                                        > Deletion
                                                    */
                                                    for (let j in i)
                                                        (j != 'capture' && j != 'once' && j != 'passive') && (delete i[j]);

                                            // Initialization > (Data, Metadata, Alpha, Beta)
                                            let data = tmp.functions.max(args[0].length, args[1].length, args[2].length),
                                                metadata = [...args[0]],
                                                alpha = [...args[1]],
                                                beta = [...args[2]];

                                            /* Loop
                                                    [while statement]

                                                > Update > Argument 0
                                            */
                                            while (args[0].length < data)
                                                LDK.arrayProto.push.apply(args[0], metadata);

                                            /* Loop
                                                    [while statement]

                                                > Update > Argument 1
                                            */
                                            while (args[1].length < data)
                                                LDK.arrayProto.push.apply(args[1], alpha);

                                            /* Loop
                                                    [while statement]

                                                > Update > Argument 2
                                            */
                                            while (args[2].length < data)
                                                LDK.arrayProto.push.apply(args[2], beta);

                                            // Modification > Argument (0, 1, 2) > Length
                                            args[0].length = args[1].length = args[2].length = data;

                                            /* Loop
                                                    Index Arguments.

                                                > Update > Event List
                                            */
                                            for (let i = 0; i < args[0].length; i += 1) {
                                                // Listener
                                                eventList.listener.push(args[1][i]);

                                                // Modifier
                                                eventList.modifier.push(args[2][i]);

                                                // Type
                                                eventList.type.push(args[0][i])
                                            }
                                        }

                                        else
                                            // LapysJS > Error
                                            LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', 'Invalid argument set given');

                                    else
                                        // LapysJS > Error
                                        LapysJS.error(["'removeEvent'", "'EventTarget'"], 'argument', 'Unexpected non-constructible value parsed');

                                    // Modification > Quasi Event > (Listener(s), Modifier(s), Type(s))
                                    eventList.listener.length > 1 ? quasiEvent.listeners = eventList.listener : quasiEvent.listener = eventList.listener[0];
                                    eventList.modifier.length > 1 ? quasiEvent.modifiers = eventList.modifier : quasiEvent.modifier = eventList.modifier[0];
                                    eventList.type.length > 1 ? quasiEvent.types = eventList.type : quasiEvent.type = eventList.type[0];

                                    // Initialization > Data
                                    let data = [];

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of perm.eventNodesList)
                                        /* Logic
                                                [if statement]
                                        */
                                        if (i.target == quasiEvent.target)
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (LDK.getSourceCode(i.listener) == quasiEvent.listener && LDK.isConstructible(quasiEvent.listener)) &&
                                                (tmp.functions.stringify(i.modifier) == tmp.functions.stringify(quasiEvent.modifier) && LDK.isConstructible(quasiEvent.modifier)) &&
                                                (i.type == quasiEvent.type && LDK.isConstructible(quasiEvent.type))
                                            ) {
                                                // Update > Permanent Data > Event Nodes List
                                                perm.eventNodesList.removeElement(i);

                                                // Parse Event
                                                parseEvent(i.type, i.listener, i.modifier);

                                                // Break
                                                break
                                            }

                                            else if (
                                                (function() {
                                                    /* Initialization > (A, B, C)
                                                            --- NOTE ---
                                                                #lapys:
                                                                    A = Listeners
                                                                    B = Modifiers
                                                                    C = Types
                                                    */
                                                    let a = (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.getSourceCode(a[i]);return data[0]=a})(i.listeners || []).indexOf(LDK.getSourceCode(quasiEvent.listener)),
                                                        b = (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=tmp.functions.stringify(a[i]);return data[1]=a})(i.modifiers || []).indexOf(tmp.functions.stringify(quasiEvent.modifier)),
                                                        c = (a=>{a=[...a];return data[2]=a})(i.types || []).indexOf(quasiEvent.type);

                                                    // Return
                                                    return (a > -1 && b > -1 && c > -1) && (a == b && a == c && b == c)
                                                })()
                                            ) {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (data[0].length == data[1].length && data[0].length == data[2].length && data[1].length == data[2].length) {
                                                    // Update > Data
                                                    data[0] = (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.getSourceCode(a[i]);return a})(i.listeners || []).indexOf(LDK.getSourceCode(quasiEvent.listener));
                                                    data[1] = (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=tmp.functions.stringify(a[i]);return a})(i.modifiers || []).indexOf(tmp.functions.stringify(quasiEvent.modifier));
                                                    data[2] = (a=>{a=[...a];return a})(i.types || []).indexOf(quasiEvent.type);

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (data[0] == data[1] && data[0] == data[2] && data[1] == data[2]) {
                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (
                                                            LDK.getSourceCode(i.listeners[data[2]]) == LDK.getSourceCode(quasiEvent.listener) &&
                                                            tmp.functions.stringify(i.modifiers[data[2]]) == tmp.functions.stringify(quasiEvent.modifier) &&
                                                            i.types[data[2]] == quasiEvent.type
                                                        ) {
                                                            // Parse Event
                                                            parseEvent(i.types[data[2]], i.listeners[data[0]], i.modifiers[data[1]]);

                                                            // Update > [Loop Iterator]
                                                            i.listeners.removeElement(i.listeners[data[0]]);
                                                            i.modifiers.removeElement(i.modifiers[data[1]]);
                                                            i.types.removeElement(i.types[data[2]]);

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (i.listeners.length == 1) {
                                                                // Modification > [Loop Iterator] > Listener
                                                                i.listener = i.listeners[0];

                                                                // Deletion
                                                                delete i.listeners
                                                            }

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (i.modifiers.length == 1) {
                                                                // Modification > [Loop Iterator] > Modifier
                                                                i.modifier = i.modifiers[0];

                                                                // Deletion
                                                                delete i.modifiers
                                                            }

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (i.types.length == 1) {
                                                                // Modification > [Loop Iterator] > Type
                                                                i.type = i.types[0];

                                                                // Deletion
                                                                delete i.types
                                                            }
                                                        }

                                                        else
                                                            // LapysJS > Warn
                                                            LapysJS.warn(["'removeEvent'", "'EventTarget'"], 'argument', 'Unexpected event argument pair given');

                                                        // Break
                                                        break
                                                    }
                                                }
                                            }

                                            else if (
                                                LDK.arrayProto.removeElement.apply(
                                                    (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.getSourceCode(a[i]);return data[0]=a})(i.listeners || []),
                                                    (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.getSourceCode(a[i]);return data[0]=a})(quasiEvent.listeners || [])
                                                ).length < i.listeners.length &&
                                                LDK.arrayProto.removeElement.apply(
                                                    (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=tmp.functions.stringify(a[i]);return data[1]=a})(i.modifiers || []),
                                                    (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=tmp.functions.stringify(a[i]);return data[1]=a})(quasiEvent.modifiers || [])
                                                ).length < i.modifiers.length &&
                                                LDK.arrayProto.removeElement.apply(
                                                    (a=>{a=[...a];return data[2]=a})(i.types || []),
                                                    (a=>{a=[...a];return data[2]=a})(quasiEvent.types || [])
                                                ).length < i.types.length
                                            ) {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (data[0].length == data[1].length && data[0].length == data[2].length && data[1].length == data[2].length) {
                                                    /* Loop
                                                            [for statement]
                                                    */
                                                    for (let j = 0; j < quasiEvent.listeners.length; j += 1)
                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (
                                                            LDK.getSourceCode(i.listeners[j]) == LDK.getSourceCode(quasiEvent.listeners[j]) &&
                                                            tmp.functions.stringify(i.modifiers[j]) == tmp.functions.stringify(quasiEvent.modifiers[j]) &&
                                                            i.types[j] == quasiEvent.types[j]
                                                        ) {
                                                            // Parse Event
                                                            parseEvent(i.types[j], i.listeners[j], i.modifiers[j]);

                                                            // Modification > [Loop Iterator] > (Listeners, Modifiers, Types)
                                                            i.listeners[j] = i.modifiers[j] = i.types[j] = tmp.object
                                                        }

                                                        else
                                                            // LapysJS > Warn
                                                            LapysJS.warn(["'removeEvent'", "'EventTarget'"], 'argument', 'Unexpected event argument pair at index ' + j);

                                                    // Modification > [Loop Iterator] > (Listeners, Modifiers, Types)
                                                    i.listeners = i.listeners.filter(a=>{return a!=tmp.object});
                                                    i.modifiers = i.modifiers.filter(a=>{return a!=tmp.object});
                                                    i.types = i.types.filter(a=>{return a!=tmp.object});

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (i.listeners.length == 1) {
                                                        // Modification > [Loop Iterator] > Listener
                                                        i.listener = i.listeners[0];

                                                        // Deletion
                                                        delete i.listeners
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (i.modifiers.length == 1) {
                                                        // Modification > [Loop Iterator] > Modifier
                                                        i.modifier = i.modifiers[0];

                                                        // Deletion
                                                        delete i.modifiers
                                                    }

                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (i.types.length == 1) {
                                                        // Modification > [Loop Iterator] > Type
                                                        i.type = i.types[0];

                                                        // Deletion
                                                        delete i.types
                                                    }

                                                    // Break
                                                    break
                                                }
                                            }

                                            else
                                                // LapysJS > Warn
                                                LapysJS.warn(["'removeEvent'", "'EventTarget'"], 'argument', 'Unexpected event argument pair given')
                                }

                                // Return
                                return quasiEvent
                            }
                        });

                        // Descendant Query Selector
                        LDK.objectDefProp(tmp.value, 'descendantQuerySelector', {
                            // Value
                            value: function descendantQuerySelector() {
                                // Initialization > (...)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = LDK.toArray(that.children),
                                    metadata = LDK.toArray(that.querySelectorAll(LDK.string(arguments[0]))),
                                    alpha = LDK.namedArray('NodeList');

                                /* Loop
                                        Index Metadata.
                                */
                                for (let i of metadata)
                                    /* Logic
                                            [if statement]

                                        > Return
                                    */
                                    if (data.indexOf(i) > -1)
                                        return i;

                                // Return
                                return LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Descendant Query Selector All
                        LDK.objectDefProp(tmp.value, 'descendantQuerySelectorAll', {
                            // Value
                            value: function descendantQuerySelectorAll() {
                                // Initialization > (...)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = LDK.toArray(that.children),
                                    metadata = LDK.toArray(that.querySelectorAll(LDK.string(arguments[0]))),
                                    alpha = LDK.namedArray('NodeList');

                                /* Loop
                                        Index Metadata.

                                    > Update > Alpha
                                */
                                for (let i of metadata)
                                    (data.indexOf(i) < 0) || alpha.push(i);

                                // Return
                                return alpha
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // {LapysJS} Descendant Query Selector
                        LDK.objectDefProp(tmp.value, '_$', {
                            // Value
                            value: function LapysJSDescendantQuerySelector() {
                                // Initialization > (Arguments, Target, Data, Metadata, Alpha)
                                let args = [...arguments],
                                    that = this,
                                    data = LDK.eventTargetProto.$$.apply(that, args),
                                    metadata = LDK.namedArray('LapysJSNodeList'),
                                    alpha = LDK.arrayFrom(that.children);

                                /* Logic
                                        [if statement]
                                */
                                if (LDK.isArrayLike(data)) {
                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        (alpha.indexOf(i) < 0) || metadata.push(i);

                                    // Return
                                    return metadata
                                }

                                // Return
                                return data
                            }
                        });

                        // First Child
                        LDK.objectDefProp(tmp.value, '$1', {
                            // Get
                            get: function firstChild() {
                                // Initialization > (Target, Data)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = that.children || [];

                                // Return
                                return that.firstElementChild || that.firstChild || data[0] || LDK.null
                            }
                        });

                        // Get Event
                        LDK.objectDefProp(tmp.value, 'getEvent', {
                            // Value
                            value: function getEvent() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data,
                                    that = this;

                                // Modification > Permanent Data > Event Nodes List
                                perm.eventNodesList = perm.eventNodesList.filter(a=>{return !LDK.isUndefined(a)});

                                // Update > Data
                                data = LDK.isNativeFunction(tmp.functions.getEventListeners) ?
                                    LDK.objectAssign({}, tmp.functions.getEventListeners(that)) :
                                    (function() {
                                        // Initialization > Data
                                        let data = {};

                                        /* Loop
                                                [for:of statement]
                                        */
                                        for (let i of perm.eventNodesList)
                                            /* Logic
                                                    [if statement]
                                            */
                                            if (i.target == that)
                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if ('type' in i)
                                                    // Update > Data
                                                    i.type in data ? data[i.type].push(i) : data[i.type] = [i];

                                                else {
                                                    /* Loop
                                                            [for statement]
                                                    */
                                                    for (let j = 0; j < i.types.length; j += 1) {
                                                        // Initialization > Alpha
                                                        let alpha = (function() {
                                                            // Initialization > Metadata
                                                            let metadata = {
                                                                // Listener
                                                                listener: i.listeners[j],

                                                                // Types
                                                                type: i.types[j]
                                                            };

                                                            // Update > Metadata
                                                            metadata = LDK.isBool(i.modifiers[j]) ? LDK.objectAssign({
                                                                // Once
                                                                once: LDK.false,

                                                                // Passive
                                                                passive: LDK.false,

                                                                // Use Capture
                                                                useCapture: i.modifiers[j]
                                                            }, metadata) : LDK.objectAssign({
                                                                // Once
                                                                once: i.modifiers[j].once,

                                                                // Passive
                                                                passive: i.modifiers[j].passive,

                                                                // Use Capture
                                                                useCapture: i.modifiers[j].capture
                                                            }, metadata);

                                                            // Return
                                                            return metadata
                                                        })();

                                                        // Update > Data
                                                        i.types[j] in data ? data[i.types[j]].push(alpha) : data[i.types[j]] = [alpha]
                                                    }
                                                }

                                        // Return
                                        return data
                                    })();

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Initialization > Metadata
                                    let metadata = LDK.isArray(args[0]) ? (a=>{a=[...a];let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.string(a[i]);return a})(args[0]) : LDK.string(args[0]);

                                    // Update > Data
                                    data = LDK.isArray(metadata) ? (function() {
                                        // Initialization > Alpha
                                        let alpha = {};

                                        /* Loop
                                                Index Metadata.

                                            > Modification > Alpha > [Loop Iterator]
                                        */
                                        for (let i of metadata)
                                            (i in data && !(i in alpha)) && (alpha[i] = data[i]);

                                        // Return
                                        return alpha
                                    })() : (metadata in data ? data[metadata] : LDK.null);

                                    console.log(data);
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (args.length > 1) {
                                        // Initialization > (Metadata, Alpha)
                                        let metadata = args[0],
                                            alpha = args[1];

                                        /* Logic
                                                [if statement]
                                        */
                                        if (LDK.isArray(alpha))
                                            /* Loop
                                                    Index Alpha.

                                                > (...)
                                            */
                                            for (let i of alpha)
                                                LDK.isArray(i) ? (function() {
                                                    /* Loop
                                                            [for:of statement]

                                                        > LapysJS > Error
                                                    */
                                                    for (let j of i)
                                                        LDK.isNumber(j) || LapysJS.error('Unexpected non-integer type in object passed as argument 1.')
                                                })() : (LDK.isNumber(i) || LapysJS.error('Unexpected non-integer type in object passed as argument 1.'));

                                        /* Logic
                                                [if statement]
                                        */
                                        if (LDK.isArray(metadata) && LDK.isArray(alpha)) {
                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (alpha.filter(a=>{return LDK.isArray(a)}).length) {
                                                // Initialization > Beta
                                                let beta = 0;

                                                /* Loop
                                                        Index Data.
                                                */
                                                for (let i in data) {
                                                    // Modification > Data > [Loop Iterator]
                                                    data[i] = LDK.isArray(alpha[beta]) ? (function() {
                                                        let epsilon = [];

                                                        for (let j of alpha[beta])
                                                            epsilon.push(j in data[i] ? data[i][j] : LDK.null);

                                                        return epsilon
                                                    })() : (alpha[beta] in data[i] ? data[i][alpha[beta]] : LDK.null);

                                                    // Update > Beta
                                                    beta += 1
                                                }
                                            }

                                            else {
                                                // Initialization > Beta
                                                let beta = {};

                                                /* Loop
                                                        Index Alpha.
                                                */
                                                for (let i = 0; i < alpha.length; i += 1) {
                                                    // Initialization > Delta
                                                    let delta = alpha[i];

                                                    /* Loop
                                                            Index Data.
                                                    */
                                                    for (let j in data) {
                                                        // Initialization > Epsilon
                                                        let epsilon = delta in data[j] ? data[j][delta] : LDK.null;

                                                        // (...)
                                                        j in beta ? beta[j].push(epsilon) : beta[j] = [epsilon]
                                                    }
                                                }

                                                // Update > Data
                                                data = beta
                                            }
                                        }

                                        else if (LDK.isArray(metadata) && LDK.isNumber(alpha))
                                            /* Loop
                                                    Index Data.

                                                > Modification > Data > [Loop Iterator]
                                            */
                                            for (let i in data)
                                                data[i] = alpha in data[i] ? data[i][alpha] : LDK.null;

                                        else if (!LDK.isArray(metadata) && LDK.isArray(alpha)) {
                                            // Initialization > Beta
                                            let beta = [];

                                            /* Loop
                                                    Index Alpha.

                                                > Update > Beta
                                            */
                                            for (let i of alpha)
                                                beta.push(i in data ? data[i] : LDK.null);

                                            // Update > Data
                                            data = beta
                                        }

                                        else if (!LDK.isArray(metadata) && LDK.isNumber(alpha))
                                            // Update > Data
                                            data = alpha in data ? data[alpha] : LDK.null;

                                        else
                                            // LapysJS > Error
                                            LapysJS.error(["'getEvent'", "'EventTarget'"], 'argument', 'Invalid argument set given')
                                    }

                                    else if (args.length != 1)
                                        // LapysJS > Error
                                        LapysJS.error(["'getEvent'", "'EventTarget'"], 'argument', 'Too many arguments')
                                }

                                // Return
                                data = LDK.isObject(data) ? LDK.namedObject('NamedEventMap', data) : (LDK.isArray(data) ? LDK.namedArray.apply(LDK, LDK.arrayProto.addElementToFront.apply(['NamedEventList'], data)) : data)
                            }
                        });

                        /* Has Event
                                --- CHECKPOINT ---
                                --- NOTE ---
                                    #lapys: Another time for now... phew
                        */
                        LDK.objectDefProp(tmp.value, 'hasEvent', {
                            // Value
                            value: function hasEvent() {
                                // Return
                                return LapysJS.warn(tmp)
                            }
                        });

                        // Last Child
                        LDK.objectDefProp(tmp.value, '$n', {
                            // Get
                            get: function lastChild() {
                                // Initialization > (Target, Data)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = that.children || [];

                                // Return
                                return that.lastElementChild || that.lastChild || data[data.length - 1] || LDK.null
                            }
                        });

                        // On Node Added
                        LDK.objectDefProp(tmp.value, 'onNodeAdded', {
                            // Value
                            value: function onNodeAdded() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isString(args[i]) && (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Function
                                    // Get Nodes
                                    function getNodes() {
                                        // Initialization > (Data, Metadata, Alpha, Beta)
                                        let data = [], metadata = [], alpha = [], beta = LDK.isWindow(that) ? LDK.docQueSelAll('*') : LDK.eleProto.querySelectorAll.call(that, '*');

                                        // Update > Data
                                        data.push(LDK.arrayFrom(that.childNodes));

                                        /* Loop
                                                Index Beta.

                                            > Update > Data
                                        */
                                        for (let i of beta)
                                            data.push(LDK.arrayFrom(i.childNodes));

                                        /* Loop
                                                [while statement]

                                            > Update > Data
                                        */
                                        while (data.filter(a=>{return LDK.isArray(a)}).length)
                                            data = LDK.arrayProto.concat.apply(metadata, data);

                                        /* Loop
                                                Index Data.

                                            > Update > Alpha
                                        */
                                        for (let i of data)
                                            (alpha.indexOf(i) > -1) || alpha.push(i);

                                        // Return
                                        return alpha
                                    }

                                    // Parse
                                    function parse() {
                                        /* Loop
                                                Index Arguments.

                                            > [Function]
                                        */
                                        for (let i of args)
                                            i.call(that)
                                    }

                                // Initialization > Count
                                let count = getNodes().length;

                                // Function > Watch
                                (function watch() {
                                    // Initialization > Count
                                    let $count = getNodes().length;

                                    /* Logic
                                            [if statement]
                                    */
                                    if (count < $count) {
                                        // Parse
                                        parse();

                                        // Update > Count
                                        count = $count
                                    }

                                    // Update > Count
                                    (count == $count) || (count = $count);

                                    // Request Animation Frame > Watch
                                    tmp.functions.requestAnimationFrame(watch)
                                })()
                            }
                        });

                        // On Node Attribute Added
                        LDK.objectDefProp(tmp.value, 'onNodeAttributeAdded', {
                            // Value
                            value: function onNodeAttributeAdded() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isString(args[i]) && (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Function
                                    // Get Nodes
                                    function getNodes() {
                                        // Return
                                        return that.attributes
                                    }

                                    // Parse
                                    function parse() {
                                        /* Loop
                                                Index Arguments.

                                            > [Function]
                                        */
                                        for (let i of args)
                                            i.call(that)
                                    }

                                // Initialization > Count
                                let count = getNodes().length;

                                // Function > Watch
                                (function watch() {
                                    // Initialization > Count
                                    let $count = getNodes().length;

                                    /* Logic
                                            [if statement]
                                    */
                                    if (count < $count) {
                                        // Parse
                                        parse();

                                        // Update > Count
                                        count = $count
                                    }

                                    // Update > Count
                                    (count == $count) || (count = $count);

                                    // Request Animation Frame > Watch
                                    tmp.functions.requestAnimationFrame(watch)
                                })()
                            }
                        });

                        // On Node Attribute Change
                        LDK.objectDefProp(tmp.value, 'onNodeAttributeChange', {
                            // Value
                            value: function onNodeAttributeChange() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isString(args[i]) && (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Function
                                    // Get Nodes
                                    function getNodes() {
                                        // Initialization > (Data, Metadata)
                                        let data = LDK.arrayFrom(that.attributes),
                                            metadata = [
                                                data.length,
                                                (function() {
                                                    // Initialization > Metadata
                                                    let metadata = '';

                                                    /* Loop
                                                            Index Data.

                                                        > Update > Metadata
                                                    */
                                                    for (let i of data)
                                                        metadata += (i.name + "='" + i.value.replace(/'/g, "\\'") + "' ");

                                                    // Return
                                                    return metadata
                                                })().trim()
                                            ]

                                        // Return
                                        return metadata
                                    }

                                    // Parse
                                    function parse() {
                                        /* Loop
                                                Index Arguments.

                                            > [Function]
                                        */
                                        for (let i of args)
                                            i.call(that)
                                    }

                                // Initialization > (Data, (...))
                                let data = getNodes(),
                                    count = data[0],
                                    info = data[1];

                                // Function > Watch
                                (function watch() {
                                    // Initialization > (Data, (...))
                                    let data = getNodes(),
                                        $count = data[0],
                                        $info = data[1];

                                    /* Logic
                                            [if statement]
                                    */
                                    if (count < $count || (info != $info && count < $count + 1)) {
                                        // Parse
                                        parse();

                                        // Update > (Count, Information)
                                        count = $count;
                                        info = $info
                                    }

                                    // Update > (Count, Information)
                                    (count == $count) || (count = $count);
                                    (info == $info) || (info = $info);

                                    // Request Animation Frame > Watch
                                    tmp.functions.requestAnimationFrame(watch)
                                })()
                            }
                        });

                        // On Node Attribute Count Change
                        LDK.objectDefProp(tmp.value, 'onNodeAttributeCountChange', {
                            // Value
                            value: function onNodeAttributeCountChange() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isString(args[i]) && (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Function
                                    // Get Nodes
                                    function getNodes() {
                                        // Return
                                        return that.attributes
                                    }

                                    // Parse
                                    function parse() {
                                        /* Loop
                                                Index Arguments.

                                            > [Function]
                                        */
                                        for (let i of args)
                                            i.call(that)
                                    }

                                // Initialization > Count
                                let count = getNodes().length;

                                // Function > Watch
                                (function watch() {
                                    // Initialization > Count
                                    let $count = getNodes().length;

                                    /* Logic
                                            [if statement]
                                    */
                                    if (count != $count) {
                                        // Parse
                                        parse();

                                        // Update > Count
                                        count = $count
                                    }

                                    // Update > Count
                                    (count == $count) || (count = $count);

                                    // Request Animation Frame > Watch
                                    tmp.functions.requestAnimationFrame(watch)
                                })()
                            }
                        });

                        // On Node Attribute Removed
                        LDK.objectDefProp(tmp.value, 'onNodeAttributeRemoved', {
                            // Value
                            value: function onNodeAttributeRemoved() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isString(args[i]) && (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Function
                                    // Get Nodes
                                    function getNodes() {
                                        // Return
                                        return that.attributes
                                    }

                                    // Parse
                                    function parse() {
                                        /* Loop
                                                Index Arguments.

                                            > [Function]
                                        */
                                        for (let i of args)
                                            i.call(that)
                                    }

                                // Initialization > Count
                                let count = getNodes().length;

                                // Function > Watch
                                (function watch() {
                                    // Initialization > Count
                                    let $count = getNodes().length;

                                    /* Logic
                                            [if statement]
                                    */
                                    if (count > $count) {
                                        // Parse
                                        parse();

                                        // Update > Count
                                        count = $count
                                    }

                                    // Update > Count
                                    (count == $count) || (count = $count);

                                    // Request Animation Frame > Watch
                                    tmp.functions.requestAnimationFrame(watch)
                                })()
                            }
                        });

                        // On Node Change --- CHECKPOINT ---
                        LDK.objectDefProp(tmp.value, 'onNodeChange', {
                            // Value
                            value: function onNodeChange() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    LDK.isString(args[i]) && (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > LapysJS > Error
                                */
                                for (let i of args)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                // Function
                                    // Get Nodes
                                    function getNodes() {
                                        // Return
                                        return that.outerHTML
                                    }

                                    // Parse
                                    function parse() {
                                        /* Loop
                                                Index Arguments.

                                            > [Function]
                                        */
                                        for (let i of args)
                                            i.call(that)
                                    }

                                // Initialization > Information
                                let info = getNodes().length;

                                // Function > Watch
                                (function watch() {
                                    // Initialization > Information
                                    let $info = getNodes().length;

                                    /* Logic
                                            [if statement]
                                    */
                                    if (info > $info) {
                                        // Parse
                                        parse();

                                        // Update > Information
                                        info = $info
                                    }

                                    // Update > Information
                                    (info == $info) || (info = $info);

                                    // Request Animation Frame > Watch
                                    tmp.functions.requestAnimationFrame(watch)
                                })()
                            }
                        });

                        // Penult Child
                        LDK.objectDefProp(tmp.value, '$n1', {
                            // Get
                            get: function penultChild() {
                                // Initialization > (Target, Data, Metadata)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = that.children || [],
                                    metadata = that.firstElementChild || that.firstChild || data[data.length - 1] || LDK.null;

                                // Return
                                return metadata ? metadata.previousSibling || LDK.null : LDK.null
                            }
                        });

                        // {LapysJS} Query Class List
                        LDK.objectDefProp(tmp.value, '$c', {
                            // Configurable
                            configurable: LDK.true,

                            // Enumerable
                            enumerable: LDK.true,

                            // Value
                            value: function LapysJSQueryClassList() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args.length > 1 ? args[1] : LDK.null;

                                // Return
                                return LDK.eventTargetProto.$$.call(this, data, 'class', metadata)
                            }
                        });

                        // {LapysJS} Query Element ID
                        LDK.objectDefProp(tmp.value, '$i', {
                            // Configurable
                            configurable: LDK.true,

                            // Enumerable
                            enumerable: LDK.true,

                            // Value
                            value: function LapysJSQueryElementId() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args.length > 1 ? args[1] : LDK.null;

                                // Return
                                return LDK.eventTargetProto.$$.call(this, data, 'id', metadata)
                            }
                        });

                        /* {LapysJS} Query Selector
                                --- NOTE ---
                                    #lapys: Might be kinda complex.
                        */
                        LDK.objectDefProp(tmp.value, '$$', {
                            // Value
                            value: function LapysJSQuerySelector() {
                                // Initialization > (Arguments, Name, Data, Modifier, Query, Target)
                                let args = [...arguments].slice(0, 3),
                                    name = 'LapysJSNodeList',
                                    data = LDK.namedArray(name),
                                    modifier = args[args.length - 1], query = LDK.string(args[0]).trim(),
                                    that = this, $that = LDK.isWindow(that) ? document : that;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Error Handling
                                    try {
                                        // Update > Data
                                        LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.querySelectorAll(query)))
                                    } catch (error) {
                                        // LapysJS > Error
                                        LapysJS.error(["'LapysJSQuerySelector'", "'" + that.constructor.name + "'"], 'argument', "'" + query + "' is not a valid selector")
                                    }

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (args.length == 1)
                                        // Return
                                        return (data.length > 1 ? data : data[0]) || LDK.null;

                                    else {
                                        // Function
                                            // Alternate
                                            function alternate(mod = modifier) {
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (
                                                    LDK.string(mod).match(/a(ttr|)(\*|)=[a-zA-Z_][a-zA-Z0-9$_\-]{0,}/) ||
                                                    mod == 'c' || mod == 'class' || mod == 'class-name' ||
                                                    mod == 'i' || mod == 'id' ||
                                                    mod == 't' || mod == 'tag' || mod == 'tag-name'
                                                ) {
                                                    /* Loop
                                                            [while statement]

                                                        > Update > Data
                                                    */
                                                    while (data[0])
                                                        data.pop(1);

                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (mod == 'c' || mod == 'class' || mod == 'class-name') {
                                                        // Update > Data
                                                        data = LDK.namedArray(name = 'LapysJSHTMLCollection');
                                                        query == '*' ?
                                                            LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.querySelectorAll('[class'))) :
                                                            LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.getElementsByClassName(query)));
                                                    }

                                                    else if (mod == 'i' || mod == 'id') {
                                                        // Update > Data
                                                        data = LDK.namedArray(name = 'LapysJSHTMLCollection');
                                                        query == '*' ?
                                                            LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.querySelectorAll('[id'))) :
                                                            LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.querySelectorAll("[id='" + query + "']")));
                                                    }

                                                    else if (mod == 't' || mod == 'tag' || mod == 'tag-name')
                                                        // Update > Data
                                                        LDK.arrayProto.push.apply(data = LDK.namedArray(name = 'LapysJSHTMLCollection'), LDK.arrayFrom($that.getElementsByTagName(query)));

                                                    else {
                                                        // Update > (Data, Modifier)
                                                        data = LDK.namedArray(name = 'LapysJSHTMLCollection');
                                                        mod = LDK.string(mod);

                                                        // Initialization > Attribute
                                                        let attribute = {
                                                            // Name
                                                            name: mod.getAfterChar('=').trim(),

                                                            // Modifier
                                                            modifier: mod.indexOf('*') > -1 ? 'all' : 'exact',

                                                            // Value
                                                            value: query
                                                        };

                                                        // Update > Data
                                                        attribute.value == '*' ?
                                                            LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.querySelectorAll('[' + attribute.name + ']'))) :
                                                            LDK.arrayProto.push.apply(data, LDK.arrayFrom($that.querySelectorAll(
                                                                '[' + attribute.name + (attribute.modifier == 'all' ? '*' : '') + "='" + attribute.value + "']"
                                                            )))
                                                    }

                                                    // Return
                                                    return (data.length > 1 ? data : data[0]) || LDK.null
                                                }

                                                // Return
                                                return data
                                            }

                                            // Modify
                                            function modify(mod = modifier) {
                                                /* Logic
                                                        [switch:case statement]
                                                */
                                                switch (mod) {
                                                    // First
                                                    case 'first': return data[0] || LDK.null; break;

                                                    // Last
                                                    case 'last': return data[data.length - 1] || LDK.null
                                                }

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (LDK.isNumber(mod))
                                                    // Return
                                                    return mod in data ? data[mod] : LDK.null;

                                                else if (LDK.isArray(mod)) {
                                                    // Initialization > Alpha
                                                    let alpha = [...data];

                                                    /* Loop
                                                            [while statement]

                                                        > Update > Data
                                                    */
                                                    while (data[0])
                                                        data.pop(1);

                                                    // Update > Modifier
                                                    mod = (a=>{for(let i in a)a[i]=LDK.numberParseNumber(a[i]);return a})(mod);

                                                    /* Loop
                                                            Index Modifier.

                                                        > Update > Data
                                                    */
                                                    for (let i of mod)
                                                        data.push(i in alpha ? alpha[i] : LDK.null)
                                                }

                                                // Return
                                                return data || LDK.null
                                            }

                                            // Update
                                            function update(mod = modifier) {
                                                // Initialization > (Data, Metadata)
                                                let $data = (data || {length: 0}).length,
                                                    metadata = LapysJS.perm.regexSet.randomize();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (mod == 'array' || ((metadata + LDK.string(mod)).match(metadata + '(\\+|\\-|)length') || tmp.object).index == 0)
                                                    /* Logic
                                                            [switch:case statement]
                                                    */
                                                    switch (mod) {
                                                        // Array
                                                        case 'array': return data ? data : LDK.namedArray(name); break;

                                                        // Length
                                                        case 'length': return $data; break;

                                                        // Incremented Length
                                                        case '+length': return data ? $data + 1 : $data; break;

                                                        // Decremented Length
                                                        case '-length': return data ? $data - 1 : $data
                                                    }

                                                // Return
                                                return data
                                            }

                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (args.length == 2)
                                            /* Logic
                                                    [if:else statement]

                                                > (Update > Data, Return)
                                            */
                                            if (modifier == 'first' || modifier == 'last' || LDK.isArray(modifier) || LDK.isNumber(modifier)) {
                                                data = modify();
                                                return update()
                                            }

                                            else {
                                                data = alternate();
                                                return update()
                                            }

                                        else if (args.length == 3) {
                                            // Update > Data
                                            data = alternate(args[1]);
                                            data = LDK.isArrayLike(data) ? modify(args[2]) : data;

                                            // Return
                                            return update()
                                        }
                                    }
                                }

                                // Return
                                return data
                            }
                        });

                        // {LapysJS} Query Tag Name
                        LDK.objectDefProp(tmp.value, '$t', {
                            // Configurable
                            configurable: LDK.true,

                            // Enumerable
                            enumerable: LDK.true,

                            // Value
                            value: function LapysJSQueryTagName() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args.length > 1 ? args[1] : LDK.null;

                                // Return
                                return LDK.eventTargetProto.$$.call(this, data, 'tag-name', metadata)
                            }
                        });

                        // Second Child
                        LDK.objectDefProp(tmp.value, '$2', {
                            // Get
                            get: function secondChild() {
                                // Initialization > (Target, Data, Metadata)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = that.children || [],
                                    metadata = that.firstElementChild || that.firstChild || data[0] || LDK.null;

                                // Return
                                return metadata ? metadata.nextSibling || LDK.null : LDK.null
                            }
                        });

                        // Third Child
                        LDK.objectDefProp(tmp.value, '$3', {
                            // Get
                            get: function thirdChild() {
                                // Initialization > (Target, Data, Metadata)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = that.children || [],
                                    metadata = that.firstElementChild || that.firstChild || data[0] || LDK.null;

                                // Return
                                return metadata ? (metadata.nextSibling ? (metadata.nextSibling.nextSibling || LDK.null) : LDK.null) : LDK.null
                            }
                        });

                        // Fourth Child
                        LDK.objectDefProp(tmp.value, '$4', {
                            // Get
                            get: function fourthChild() {
                                // Initialization > (Target, Data, Metadata)
                                let that = LDK.isWindow(this) ? document : this,
                                    data = that.children || [],
                                    metadata = that.firstElementChild || that.firstChild || data[0] || LDK.null;

                                // Return
                                return metadata ? (metadata.nextSibling ? (metadata.nextSibling.nextSibling ? metadata.nextSibling.nextSibling.nextSibling : LDK.null) : LDK.null) : LDK.null
                            }
                        });

                        // Replace Event --- CHECKPOINT ---
                        LDK.objectDefProp(tmp.value, 'replEvent', {
                            // Value
                            value: function replaceEvent() {
                                // Return
                                return LapysJS.warn(tmp)
                            }
                        });

                        // Set Event
                        LDK.objectDefProp(tmp.value, 'setEvent', {
                            // Value
                            value: function setEvent() {
                                // Initialization > (Arguments, Target, Default Modifier, Event List, Parse Event, Quasi Event)
                                let args = [...arguments],
                                    that = this,
                                    defaultModifier = {capture: LDK.false, once: LDK.false, passive: LDK.false},
                                    eventList = {listener: [], modifier: [], type: []},
                                    parseEvent = LDK.isNativeFunction(LDK.eventTargetProto.addEventListener) ? (function() {
                                        // Initialization > Arguments
                                        let args = [LDK.string(arguments[0])].concat([...arguments].slice(1));

                                        // Return
                                        return LDK.eventTargetProto.addEventListener.apply(that, args)
                                    }) : (function() {
                                        // Initialization > Arguments
                                        let args = ['on' + LDK.string(arguments[0])].concat([...arguments].slice(1));

                                        // Return
                                        return LDK.eventTargetProto.addEventListener.apply(that, args)
                                    }), quasiEvent = LDK.namedObject('QuasiEvent', {target: that});

                                // Modification > Permanent Data > Event Nodes List
                                perm.eventNodesList = perm.eventNodesList.filter(a=>{return !LDK.isUndefined(a)});

                                /* Logic
                                        [if:else statement]
                                */
                                if (args.length > 1) {
                                    // Function
                                        // Parse Array
                                        function parseArray() {
                                            // Initialization > (Data, Listeners, Type)
                                            let data = [...arguments[0]],
                                                listeners = data.slice(1),
                                                type = LDK.string(data[0]);

                                            // LapysJS > Error
                                            listeners.length || LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', 'Expected array to be in format: [<event type>, <event listener>]');

                                            /* Loop
                                                    Index Listeners.

                                                > Update > Listeners
                                            */
                                            for (let i = 0; i < listeners.length; i += 1)
                                                LDK.isString(listeners[i]) && (listeners[i] = func(listeners[i]));

                                            /* Loop
                                                    Index Listeners.

                                                > LapysJS > Error
                                            */
                                            for (let i of listeners)
                                                LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                            /* Loop
                                                    Index Listeners.

                                                > Update > Event List > (Listener, Modifier, Type)
                                            */
                                            for (let i of listeners) {
                                                eventList.listener.push(i);
                                                eventList.modifier.push(defaultModifier);
                                                eventList.type.push(type)
                                            }
                                        }

                                        // Parse Object
                                        function parseObject() {
                                            // Initialization > (Data, Metadata)
                                            let data = LDK.objectAssign({}, arguments[0]),
                                                metadata = (a=>{for(let i in a)a[i]=!!a[i];return a});

                                            /* Loop
                                                    Index Data.

                                                > LapysJS > Error
                                            */
                                            for (let i = 0; i < data.length; i += 1)
                                                (i != 'capture' && i != 'listener' && i != 'once' && i != 'passive' && i != 'type' && i != 'useCapture') && LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', "Unexpected object configuration '" + i + "'");

                                            // LapysJS > Error
                                            ('listener' in data) || LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', "Expected object configuration 'listener' in JSON object");
                                            ('type' in data) || LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', "Expected object configuration 'type' in JSON object");

                                            // Deletion
                                            ('capture' in data || 'once' in data || 'passive' in data) && (delete data.useCapture);

                                            // Update > Data
                                            ('capture' in data || 'once' in data || 'passive' in data || 'useCapture' in data) || (data = LDK.objectAssign(defaultModifier, data));

                                            // Modification > Data
                                                // Listener
                                                LDK.isArray(data.listener) || (data.listener = [data.listener]);

                                                // Modifier
                                                data.modifier = 'useCapture' in data ?
                                                    (LDK.isArray(data.useCapture) ? metadata(data.useCapture) : [!!data.useCapture]) :
                                                    (LDK.isArray(data.capture) || LDK.isArray(data.once) || LDK.isArray(data.passive) ?
                                                        (function() {
                                                            // Initialization > (Alpha, Beta)
                                                            let alpha = {capture: data.capture, once: data.once, passive: data.passive},
                                                                beta = {};

                                                            // Modification > Beta > (Capture, Once, Passive)
                                                            beta.capture = LDK.isArray(alpha.capture) ? metadata(alpha.capture) : [!!alpha.capture];
                                                            beta.once = LDK.isArray(alpha.once) ? metadata(alpha.once) : [!!alpha.once];
                                                            beta.passive = LDK.isArray(alpha.passive) ? metadata(alpha.passive) : [!!alpha.passive];

                                                            // Return
                                                            return [beta]
                                                        })() :
                                                        [{capture: [!!data.capture], once: [!!data.once], passive: [!!data.passive]}]
                                                    );

                                                // Type
                                                LDK.isArray(data.type) || (data.type = [LDK.string(data.type)]);

                                            /* Loop
                                                    [for statement]

                                                > Update > Data > Listener
                                            */
                                            for (let i = 0; i < data.listener.length; i += 1)
                                                LDK.isString(data.listener[i]) && (data.listener[i] = func(data.listener[i]));

                                            /* Loop
                                                    [for:of statement]

                                                > LapysJS > Error
                                            */
                                            for (let i of data.listener)
                                                LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                            // Initialization > (Alpha, Beta, Delta)
                                            let alpha = (data.modifier.length = tmp.functions.max(data.listener.length, data.modifier.length, data.type.length)),
                                                beta = [...data.listener],
                                                delta = [...data.type];

                                            /* Loop
                                                    [for statement]

                                                > Update > Data > Modifier
                                            */
                                            for (let i = 0; i < data.modifier.length; i += 1)
                                                LDK.isUndefined(data.modifier[i]) && (data.modifier[i] = defaultModifier);

                                            /* Loop
                                                    [while statement]

                                                > Update > Data > Listener
                                            */
                                            while (data.listener.length < alpha)
                                                LDK.arrayProto.push.apply(data.listener, beta);

                                            /* Loop
                                                    [while statement]

                                                > Update > Data > Type
                                            */
                                            while (data.listener.length > alpha)
                                                LDK.arrayProto.push.apply(data.type, delta);

                                            // Modification > Data > (Listener, Type) > Length
                                            data.listener.length = data.type.length = alpha;

                                            // Initialization > Gamma
                                            let gamma = [];

                                            // Modification > Gamma > Length
                                            gamma.length = data.modifier.length;

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (LDK.isObject(data.modifier[0])) {
                                                // Initialization > (Gamma, Epsilon, Upsilon, Pi)
                                                let $gamma = gamma.length = tmp.functions.max(data.modifier[0].capture.length, data.modifier[0].once.length, data.modifier[0].passive.length),
                                                    epsilon = [...data.modifier[0].capture],
                                                    upsilon = [...data.modifier[0].once],
                                                    pi = [...data.modifier[0].passive];

                                                /* Loop
                                                        [while statement]

                                                    > Update > Data > Modifier > Capture
                                                */
                                                while (data.modifier[0].capture.length < $gamma)
                                                    LDK.arrayProto.push.apply(data.modifier[0].capture, epsilon);

                                                /* Loop
                                                        [while statement]

                                                    > Update > Data > Modifier > Once
                                                */
                                                while (data.modifier[0].once.length < $gamma)
                                                    LDK.arrayProto.push.apply(data.modifier[0].once, upsilon);

                                                /* Loop
                                                        [while statement]

                                                    > Update > Data > Modifier > Passive
                                                */
                                                while (data.modifier[0].passive.length < $gamma)
                                                    LDK.arrayProto.push.apply(data.modifier[0].passive, pi);

                                                // Modification > Data > Modifier > (Capture, Once, Passive) > Length
                                                data.modifier[0].capture.length = data.modifier[0].once.length = data.modifier[0].passive.length
                                            }

                                            /* Loop
                                                    [for statement]

                                                > Update > Data > Modifier
                                            */
                                            for (let i = 0; i < data.modifier.length; i += 1)
                                                LDK.isNonConstructible(data.modifier[i]) && (data.modifier[i] = defaultModifier);

                                            /* Loop
                                                    [for statement]
                                            */
                                            for (let i = 0; i < data.type.length; i += 1)
                                                /* Loop
                                                        Index Gamma.

                                                    > Update > Event List > (Listener, Modifier, Type)
                                                */
                                                for (let j = 0; j < gamma.length; j += 1) {
                                                    eventList.listener.push(data.listener[i]);
                                                    eventList.modifier.push(
                                                        LDK.isObject(data.modifier[i]) ? {
                                                            // Capture
                                                            capture: !!data.modifier[i].capture[j],

                                                            // Once
                                                            once: !!data.modifier[i].once[j],

                                                            // Passive
                                                            passive: !!data.modifier[i].passive[j]
                                                        } : !!data.modifier[j]
                                                    );
                                                    eventList.type.push(LDK.string(data.type[i]))
                                                }
                                        }

                                    /* Logic
                                            [if statement]
                                    */
                                    if (LDK.isConstructible(args[0]))
                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (
                                            LDK.isObject(args[0]) ||
                                            (LDK.isArray(args[0]) && ((LDK.isExecutableString((args[0] || tmp.object)[1]) || LDK.isFunction((args[0] || tmp.object)[1])) && LDK.string((args[0] || ['', ''])[1]).replace(/[a-zA-Z_\$]{0,}/g, '').trim()))
                                        )
                                            /* Loop
                                                    Index Arguments.
                                            */
                                            for (let i of args) {
                                                // LapysJS > Error
                                                LDK.isConstructible(i) || LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', 'Unexpected non-constructible value parsed');

                                                // Parse Array | (Parse Array | LapysJS > Error)
                                                LDK.isObject(i) ? parseObject(i) : (LDK.isArray(i) ? parseArray(i) : LapysJS.error(i, 'must', ['array', 'object']));

                                                // Update > Default Modifier
                                                defaultModifier = {capture: LDK.false, once: LDK.false, passive: LDK.false}
                                            }

                                        else if (!LDK.isObject(args[0]) && !LDK.isObject(args[1])) {
                                            // Update > Argument (0, 1, 2)
                                            LDK.isArray(args[0]) || (args[0] = [args[0]]);
                                            LDK.isArray(args[1]) || (args[1] = [args[1]]);
                                            args.length > 2 ? (LDK.isArray(args[2]) || (args[2] = [args[2]])) : args[2] = [defaultModifier];

                                            /* Loop
                                                    Index Argument 0.

                                                > Update > Argument 1
                                            */
                                            for (let i = 0; i < args[0].length; i += 1)
                                                args[0][i] = LDK.string(args[0][i]);

                                            /* Loop
                                                    Index Argument 1.

                                                > Update > Argument 1
                                            */
                                            for (let i = 0; i < args[1].length; i += 1)
                                                LDK.isString(args[1][i]) && (args[1][i] = func(args[1][i]));

                                            /* Loop
                                                    Index Argument 1.

                                                > LapysJS > Error
                                            */
                                            for (let i of args[1])
                                                LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                            /* Loop
                                                    Index Argument 2.

                                                > Update > Argument 2
                                            */
                                            for (let i = 0; i < args[2].length; i += 1)
                                                args[2][i] = LDK.isObject(args[2][i]) ? LDK.objectAssign({}, args[2][i]) : !!args[2][i];

                                            /* Loop
                                                    Index Argument 2.
                                            */
                                            for (let i of args[2])
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (LDK.isObject(i))
                                                    /* Loop
                                                            Index [Loop Iterator]

                                                        > Deletion
                                                    */
                                                    for (let j in i)
                                                        (j != 'capture' && j != 'once' && j != 'passive') && (delete i[j]);

                                            // Initialization > (Data, Metadata, Alpha, Beta)
                                            let data = tmp.functions.max(args[0].length, args[1].length, args[2].length),
                                                metadata = [...args[0]],
                                                alpha = [...args[1]],
                                                beta = [...args[2]];

                                            /* Loop
                                                    [while statement]

                                                > Update > Argument 0
                                            */
                                            while (args[0].length < data)
                                                LDK.arrayProto.push.apply(args[0], metadata);

                                            /* Loop
                                                    [while statement]

                                                > Update > Argument 1
                                            */
                                            while (args[1].length < data)
                                                LDK.arrayProto.push.apply(args[1], alpha);

                                            /* Loop
                                                    [while statement]

                                                > Update > Argument 2
                                            */
                                            while (args[2].length < data)
                                                LDK.arrayProto.push.apply(args[2], beta);

                                            // Modification > Argument (0, 1, 2) > Length
                                            args[0].length = args[1].length = args[2].length = data;

                                            /* Loop
                                                    Index Arguments.

                                                > Update > Event List
                                            */
                                            for (let i = 0; i < args[0].length; i += 1) {
                                                // Listener
                                                eventList.listener.push(args[1][i]);

                                                // Modifier
                                                eventList.modifier.push(args[2][i]);

                                                // Type
                                                eventList.type.push(args[0][i])
                                            }
                                        }

                                        else
                                            // LapysJS > Error
                                            LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', 'Invalid argument set given');

                                    else
                                        // LapysJS > Error
                                        LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', 'Unexpected non-constructible value parsed');

                                    /* Loop
                                            Index Event List.

                                        > Parse Event
                                    */
                                    for (let i = 0; i < eventList.type.length; i += 1)
                                        parseEvent(eventList.type[i], eventList.listener[i], eventList.modifier[i]);

                                    // Modification > Quasi Event > (Listener(s), Modifier(s), Type(s))
                                    eventList.listener.length > 1 ? quasiEvent.listeners = eventList.listener : quasiEvent.listener = eventList.listener[0];
                                    eventList.modifier.length > 1 ? quasiEvent.modifiers = eventList.modifier : quasiEvent.modifier = eventList.modifier[0];
                                    eventList.type.length > 1 ? quasiEvent.types = eventList.type : quasiEvent.type = eventList.type[0];

                                    // Update > Permanent Data > Event Nodes List
                                    perm.eventNodesList.push(quasiEvent);
                                }

                                else
                                    // LapysJS > Error
                                    LapysJS.error(["'setEvent'", "'EventTarget'"], 'argument', 'Invalid argument set given');

                                // Return
                                return quasiEvent
                            }
                        });

                    /* Function Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.funcProto;

                        // Get Body
                        LDK.objectDefProp(tmp.value, 'getBody', {
                            // Value
                            value: function getBody() {
                                // Initialization > (Target, Data, Metadata, (...))
                                let that = this, data = LDK.getSourceCode(that), metadata = '',
                                    countEnd = 0, countStart = 0, end, start, tokenStop = LDK.false;

                                /* Update > (Data, Metadata)
                                        --- NOTE ---
                                            #lapys: Update functions whose heads are
                                                not delimited by parenthesis.
                                */
                                !(!data.startsWith('function') && data[0].match(/[a-zA-Z\$_]/)) || (data = '(' + data.slice(0, data.indexOf('=>')) + ')' + data.slice(data.indexOf('=>')));
                                data.startsWith('function') || (metadata = '=>');

                                /* Loop
                                        Iterate over Data.
                                */
                                for (let i in data) {
                                    // Initialization > Alpha
                                    let alpha = data[i];

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (tokenStop)
                                        // Update > Token Stop
                                        (tokenStop != alpha) || (tokenStop = LDK.false);

                                    else {
                                        // Update > Token Stop
                                        !(alpha == '"' || alpha == "'" || alpha == '`') || (tokenStop = alpha);

                                        /* Logic
                                                [switch:case statement]

                                            > Update > (...)
                                        */
                                        switch (alpha) {
                                            case '(':
                                                countStart += 1; start || (start = +i);
                                                break;

                                            case ')':
                                                countEnd += 1; end = i
                                        }
                                    }

                                    /* Logic
                                            [if statement]

                                            --- NOTE ---
                                                #lapys: The function head has been captured.
                                    */
                                    if (countEnd == countStart && countEnd) {
                                        // Initialization > Alpha
                                        let alpha = data.replace(data.slice(start, +end + 1), '');

                                        // Update > (Alpha, Metadata)
                                        alpha = metadata ? alpha.trimLeftChar(/ |\n|=>/) : alpha.trimLeftChar(/[^{]/);
                                        metadata = alpha.trimRight();
                                        (metadata[0] != '{') || (metadata = metadata.slice(1));
                                        (metadata[metadata.length - 1] != '}') || (metadata = metadata.slice(0, -1));

                                        // Return
                                        return metadata
                                    }
                                }

                                // LapysJS > Error
                                LapysJS.error('Could not get function body.')
                            }
                        });

                        // Get Head
                        LDK.objectDefProp(tmp.value, 'getHead', {
                            // Value
                            value: function getHead() {
                                // Initialization > (Target, Data, Metadata, (...))
                                let that = this, data = LDK.getSourceCode(that), metadata = '',
                                    countEnd = 0, countStart = 0, end, start, tokenStop = LDK.false;

                                /* Update > Data
                                        --- NOTE ---
                                            #lapys: Update functions whose heads are
                                                not delimited by parenthesis.
                                */
                                !(!data.startsWith('function') && data[0].match(/[a-zA-Z\$_]/)) || (data = '(' + data.slice(0, data.indexOf('=>')) + ')' + data.slice(data.indexOf('=>')));

                                /* Loop
                                        Iterate over Data.
                                */
                                for (let i in data) {
                                    // Initialization > Alpha
                                    let alpha = data[i];

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (tokenStop)
                                        // Update > Token Stop
                                        (tokenStop != alpha) || (tokenStop = LDK.false);

                                    else {
                                        // Update > Token Stop
                                        !(alpha == '"' || alpha == "'" || alpha == '`') || (tokenStop = alpha);

                                        /* Logic
                                                [switch:case statement]

                                            > Update > (...)
                                        */
                                        switch (alpha) {
                                            case '(':
                                                countStart += 1; start || (start = +i);
                                                break;

                                            case ')':
                                                countEnd += 1; end = i
                                        }
                                    }

                                    /* Logic
                                            [if statement]

                                            --- NOTE ---
                                                #lapys: The function head has been captured.
                                    */
                                    if (countEnd == countStart && countEnd) {
                                        // Update > Metadata
                                        metadata = data.slice(start + 1, +end);

                                        // Return
                                        return metadata
                                    }
                                }

                                // LapysJS > Error
                                LapysJS.error('Could not get function head.')
                            }
                        });

                        // Get Parameters
                        LDK.objectDefProp(tmp.value, 'getParameters', {
                            // Value
                            value: function getParameters() {
                                // Initialization > (Arguments, Target, Data, Metadata)
                                let args = [...arguments].filter(data => { return LDK.isNumber(data) }),
                                    that = this,
                                    data = that.getHead(),
                                    metadata = LDK.namedArray('ParameterList');

                                /* Logic
                                        [if:else statement]
                                */
                                if (data.indexOf('=') > -1) {
                                    // Initialization > (Alpha, Beta)
                                    let alpha = [
                                        [[], [], []],
                                        [LapysJS.perm.regexSet.randomize(), LapysJS.perm.regexSet.randomize(), LapysJS.perm.regexSet.randomize()]
                                    ], beta = LapysJS.perm.regexSet.randomize();

                                    // Update > Data
                                    data = data.replace(/\([^\)]{0,}\)/g, data => {
                                        // Update > Alpha
                                        alpha[0][0].push(data);

                                        // Return
                                        return alpha[1][0]
                                    }).replace(/\[[^\]]{0,}\]/g, data => {
                                        // Update > Alpha
                                        alpha[0][1].push(data);

                                        // Return
                                        return alpha[1][1]
                                    }).replace(/{[^}]{0,}}/g, data => {
                                        // Update > Alpha
                                        alpha[0][2].push(data);

                                        // Return
                                        return alpha[1][2]
                                    });

                                    // Update > Data
                                    data = (a=>{for(let i in a)a[i]=a[i].trim();return a})(data.split(',')).join(beta);

                                    /* Loop
                                            Index Alpha.

                                        > Update > Data
                                    */
                                    for (let i of alpha[0][2])
                                        data = data.replace(alpha[1][2], i);
                                    for (let i of alpha[0][1])
                                        data = data.replace(alpha[1][1], i);
                                    for (let i of alpha[0][0])
                                        data = data.replace(alpha[1][0], i);

                                    // Update > Data
                                    data = data.split(beta)
                                }

                                else
                                    // Update > Data
                                    data = (a=>{for(let i in a)a[i]=a[i].trim();return a})(data.split(','));

                                // Update > Data
                                data.removeElements('');

                                /* Loop
                                        Index Data.
                                */
                                for (let i of data) {
                                    // Initialization > (Alpha, Beta)
                                    let alpha = i.getBeforeChar('=').trim(),
                                        beta = LDK.namedObject('Parameter', {
                                            // Address
                                            address: alpha,

                                            // [Primitive Value]
                                            '[[PrimitiveValue]]': i,

                                            // To String
                                            toString: function toString() {
                                                // Return
                                                return i
                                            },

                                            // Value
                                            value: i.getAfterChar('=') || LDK.null
                                        });

                                    // Modification > Beta > To String
                                    LDK.objectDefProp(beta.constructor.prototype, 'toString', {value: function toString() {return i}});

                                    // Update > Metadata
                                    metadata.push(beta)
                                }

                                // Return
                                return (args.length ? (args.length == 1 ? metadata[args[0]] : (function() {
                                    // Initialization > Data
                                    let data = LDK.namedArray('ParameterList');

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        data.push(metadata[i] || LDK.null);

                                    // Return
                                    return data
                                })()) : metadata) || LDK.null
                            }
                        });

                    /* HTML Element Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.htmlEleProto;

                        // Add Class
                        LDK.objectDefProp(tmp.value, 'addClass', {
                            // Value
                            value: function addClass() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments].filter(data => {
                                    // Return
                                    return LDK.isArray(data) || LDK.isBool(data) || LDK.isNumber(data) || LDK.isString(data)
                                }), that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Modification > Target > Class
                                    that.hasAttribute('class') || that.setAttribute('class', '');

                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments.
                                    */
                                    for (let i in args)
                                        args[i] = LDK.isArray(args[i]) ? args[i] : [LDK.string(args[i])];

                                    // Initialization > Data
                                    let data = [];

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        data = data.concat(i);

                                    // Update > (Arguments, Data)
                                    args = data;
                                    data = LapysJS.debug.formatChar(LapysJS.debug.formatChar(that.getAttribute('class'), 'list').concat(LapysJS.debug.formatChar(args, 'list')), 'list');

                                    // Initialization > Metadata
                                    let metadata = [];

                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        (metadata.indexOf(i) > -1) || metadata.push(i);

                                    // Modification > Target > Class
                                    that.setAttribute('class', metadata.join(' '))
                                }

                                // Modification > Target > Class
                                that.getAttribute('class') || that.removeAttribute('class');

                                // Return
                                return that.getAttributeNode('class') || LDK.null
                            }
                        });

                        // Delete Class
                        LDK.objectDefProp(tmp.value, 'delClass', {
                            // Value
                            value: function removeClass() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments].filter(data => {
                                    // Return
                                    return LDK.isArray(data) || LDK.isBool(data) || LDK.isNumber(data) || LDK.isString(data)
                                }), that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Modification > Target > Class
                                    that.hasAttribute('class') || that.setAttribute('class', '');

                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments.
                                    */
                                    for (let i in args)
                                        args[i] = LDK.isArray(args[i]) ? args[i] : [LDK.string(args[i])];

                                    // Initialization > Data
                                    let data = [];

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        data = data.concat(i);

                                    // Update > (Arguments, Data)
                                    args = data;
                                    data = LapysJS.debug.formatChar(that.getAttribute('class'), 'list');

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        data.removeElement(i);

                                    // Modification > Target > Class
                                    that.setAttribute('class', data.join(' '))
                                }

                                else
                                    that.removeAttribute('class');

                                // Modification > Target > Class
                                that.getAttribute('class') || that.removeAttribute('class');

                                // Return
                                return that.getAttributeNode('class') || LDK.null
                            }
                        });

                        // Has Class
                        LDK.objectDefProp(tmp.value, 'hasClass', {
                            // Value
                            value: function hasClass() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = [],
                                    metadata = [],
                                    that = this,
                                    $that = LapysJS.debug.formatChar(that.getAttribute('class') || '', 'list');

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        LDK.isArray(i) ? LDK.arrayProto.push.apply(data, (a=>{for(let i in a)a[i]=LDK.string(a[i]);return a})(i)) : data.push(LDK.string(i));

                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        metadata.push($that.indexOf(i) > -1);

                                    // Return
                                    return metadata.length > 1 ? metadata : metadata[0]
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Replace Class
                        LDK.objectDefProp(tmp.value, 'replClass', {
                            // Value
                            value: function replaceClass() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    $args = args.length,
                                    that = this,
                                    $that = LapysJS.debug.formatChar(that.getAttribute('class') || '', 'list');

                                /* Logic
                                        [if:else if statement]
                                */
                                if ($args > 1) {
                                    // Initialization > (Data, Metadata)
                                    let data = args[0],
                                        metadata = args[1];

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (LDK.isArray(data) && LDK.isArray(metadata))
                                        /* Loop
                                                Index Data.

                                            > Update > Target
                                        */
                                        for (let i in data)
                                            $that.replaceElement(LDK.string(data[i]), i in metadata ? metadata[i] : '');

                                    else if (LDK.isArray(data) && !LDK.isArray(metadata)) {
                                        // Update > Metadata
                                        metadata = LDK.string(metadata);

                                        /* Loop
                                                Index Data.

                                            > Update > Target
                                        */
                                        for (let i of data)
                                            $that.replaceElement(LDK.string(i), metadata);
                                    }

                                    else if (!LDK.isArray(data))
                                        $that.replaceElement(LDK.string(data), LDK.string(metadata))
                                }

                                else if ($args)
                                    // LapysJS > Error
                                    LapysJS.error(["'replaceClass'", "'" + that.constructor.name + "'"], 'argument', [2, $args]);

                                // Modification > Target > Class
                                that.setAttribute('class', $that.join(' '))

                                // Modification > Target > Class
                                that.getAttribute('class') || that.removeAttribute('class');

                                // Return
                                return that.getAttributeNode('class') || LDK.null
                            }
                        });

                    /* Node Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.nodeProto;

                        // Parent
                        LDK.objectDefProp(tmp.value, 'parent', {
                            // Get
                            get: function parent() {let a=this;try{return a.parentElement||a.parentNode||a.parent}catch(e){}return LDK.null}
                        });

                        // Parent Path
                        LDK.objectDefProp(tmp.value, 'parentPath', {
                            // Get
                            get: function parentPath() {let a=this,b=a=>{return a.parentElement||a.parentNode||a.parent},c=[],d=this;try{while(b(a)&&b(a)!=window){c.push(a);a=b(a)}return LDK.namedArray.apply(LDK,LDK.arrayProto.addElementToFront.apply(['NodeList'],document.contains(d)?c.concat(document,window):c)).removeDuplicatedElements()}catch(e){}return LDK.null}
                        });

                    /* Number Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.numberProto;

                        // Ordinal
                        LDK.objectDefProp(tmp.value, 'ordinal', {
                            // Get
                            get: function ordinal() {
                                // Initialization > (Target, Data, Metadata)
                                let that = LDK.number(this),
                                    data = LDK.string(Math.abs(that)),
                                    metadata = LDK.string(that);

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (LDK.numberIsFinite(that)) {
                                    /* Logic
                                            [if:else if:else statement]

                                        > Update > Data
                                    */
                                    if (data.endsWith(1))
                                        data += 'st';

                                    else if (data.endsWith(2))
                                        data += 'nd';

                                    else if (data.endsWith(3))
                                        data += 'rd';

                                    else
                                        data += 'th';
                                }

                                else if (LDK.numberIsNaN(that))
                                    // Update > Data
                                    data = 'not a number';

                                else if (!LDK.numberIsFinite(that))
                                    // Update > Data
                                    data = 'infinity';

                                else
                                    // Update > Data
                                    data = '';

                                /* Logic
                                        [if statement]

                                    > Update > Data
                                */
                                if (metadata.startsWith('-'))
                                    data = 'negative ' + data;

                                // Return
                                return data
                            }
                        });

                        /* Parse Measurement
                                --- UPDATE REQUIRED ---
                                    #lapys: Complete and efficient use of the metrics table provided by the
                                        `LDK.constants.METRICS_TABLE` property is to be resolved.

                                        Basically, unit conversions should be possible.
                        */
                        LDK.objectDefProp(LDK.number, 'parseMeasurement', {
                            // Value
                            value: function parseMeasurement() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments].slice(0, 3),
                                    that = this;

                                /* Logic
                                        [if:else statement]
                                */
                                if (args.length) {
                                    // Function > Parse
                                    function parse() {
                                        // Initialization > Data
                                        let data = LDK.string(arguments[0]);

                                        /* Logic
                                                [if statement]

                                            > Return
                                        */
                                        if (data.indexOf('x') > -1)
                                            return LDK.numberParseInt.apply(LDK.number, [...arguments]);

                                        // Return
                                        return LDK.numberParseFloat.apply(LDK.number, [...arguments])
                                    }

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (args.length == 1)
                                        // Return
                                        return parse(args[0]);

                                    else if (args.length == 2) {
                                        // Initialization > Data
                                        let data = parse(args[0]);

                                        // Return
                                        return (LDK.numberIsSafeInteger(data) ? data : 0) + LDK.string(args[1])
                                    }

                                    else {
                                        // Initialization > (Data, Metadata, Alpha, Beta)
                                        let data = parse(args[0]),
                                            metadata = LDK.string(args[1]),
                                            alpha = LDK.string(args[2]),
                                            beta = LDK.string(data);

                                        // Return
                                        return beta
                                    }
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Parse Number
                        LDK.objectDefProp(LDK.number, 'parseNumber', {
                            // Value
                            value: function parseNumber() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Function > Parse
                                    function parse() {
                                        // Initialization > Data
                                        let data = LDK.string(arguments[0]);

                                        /* Logic
                                                [if statement]

                                            > Return
                                        */
                                        if (data.indexOf('x') > -1)
                                            return LDK.numberParseInt.apply(LDK.number, [...arguments]);

                                        // Return
                                        return LDK.numberParseFloat.apply(LDK.number, [...arguments])
                                    }

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i in args) {
                                        // Initialization > Metadata
                                        let metadata = args[i];

                                        /* Logic
                                                [if:else if statement]

                                            > Update > Arguments
                                        */
                                        if (LDK.isNonConstructible(metadata) || LDK.isSymbol(metadata) || LDK.numberIsNaN(metadata))
                                            args[i] = 0;

                                        else if (LDK.numberIsInfinite(metadata) && LDK.isNumber(metadata))
                                            args[i] = 1;

                                        else if (LDK.isBool(metadata))
                                            args[i] = metadata ? 1 : 0;

                                        else if (LDK.isNumber(metadata) || LDK.isString(metadata))
                                            args[i] = parse(metadata);

                                        else if (LDK.isArrayLike(metadata) || LDK.isObject(metadata))
                                            args[i] = LDK.objectKeys(metadata).length;

                                        else if (LDK.isFunction(metadata))
                                            args[i] = metadata.getParameters().length
                                    }

                                    // Initialization > Data
                                    let data = parse.apply(window, args);

                                    // Return
                                    return data
                                }

                                // Return
                                return LDK.null
                            }
                        });

                        // Spell
                        LDK.objectDefProp(tmp.value, 'spell', {
                            // Get
                            get: function spell() {
                                // Initialization > (Data, Metadata, Target, Alpha, Beta)
                                let data = LapysJS.perm.regexSet,
                                    metadata = '',
                                    that = this,
                                    $that = that + 0,
                                    alpha = that < 0 ? LDK.false : LDK.true,
                                    beta = LDK.string(that).getAfterChar('.').trim();

                                // Return
                                return (function() {
                                    // Update > Target
                                    that = LDK.numberParseInt(tmp.functions.abs(that));

                                    // Initialization > (...)
                                    let zero = ['zero'],
                                        ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
                                        tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
                                        hundreds = ['hundred'],
                                        thousands = ['thousand'],
                                        millions = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

                                    // Function
                                        // Parse Hundreds
                                        function parseHundreds() {
                                            // Initialization > Data
                                            let data = LDK.string(arguments[0]),
                                                metadata = data[0],
                                                alpha = data.slice(1);

                                            // Return
                                            return (parseOnes(+metadata) + ' ' + hundreds[0] + ' and ' + (function() {
                                                // Initialization > Data
                                                let data = +alpha;

                                                // Update > Data
                                                data = data == 0 ? '' : (data < 20 ? parseOnes(data) : parseTens(data));

                                                // Return
                                                return data
                                            })()).trimRightChar(/and| /)
                                        }

                                        // Parse Millions
                                        function parseMillions() {
                                            // Initialization > Data
                                            let data = LDK.string(arguments[0]);

                                            // Function
                                                // Parse Billion
                                                function parseBillion() {
                                                    // Initialization > (Data, Metadata, Alpha)
                                                    let data = LDK.string(arguments[0]),
                                                        metadata = data.slice(0, data.length - 9),
                                                        alpha = data.slice(metadata.length);

                                                    // Return
                                                    return (function() {
                                                        // Initialization > Data
                                                        let data = +metadata;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? parseOnes(data) : (data < 100 ? parseTens(data) : parseHundreds(data)));

                                                        // Return
                                                        return data
                                                    })() + ' ' + millions[1] + (function() {
                                                        // Initialization > Data
                                                        let data = +alpha;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : (data < 1000 ? ' ' + parseHundreds(data) : (data < 1000000 ? ' ' + parseThousands(data) : ' ' + parseMillion(data)))));

                                                        // Return
                                                        return data
                                                    })()
                                                }

                                                // Parse Million
                                                function parseMillion() {
                                                    // Initialization > (Data, Metadata, Alpha)
                                                    let data = LDK.string(arguments[0]),
                                                        metadata = data.slice(0, data.length - 6),
                                                        alpha = data.slice(metadata.length);

                                                    return (function() {
                                                        // Initialization > Data
                                                        let data = +metadata;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? parseOnes(data) : (data < 100 ? parseTens(data) : parseHundreds(data)));

                                                        // Return
                                                        return data
                                                    })() + ' ' + millions[0] + (function() {
                                                        // Initialization > Data
                                                        let data = +alpha;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : (data < 1000 ? ' ' + parseHundreds(data) : ' ' + parseThousands(data))));

                                                        // Return
                                                        return data
                                                    })()
                                                }

                                                // Parse Quadrillion
                                                function parseQuadrillion() {
                                                    // Initialization > (Data, Metadata, Alpha)
                                                    let data = LDK.string(arguments[0]),
                                                        metadata = data.slice(0, data.length - 15),
                                                        alpha = data.slice(metadata.length);

                                                    return (function() {
                                                        // Initialization > Data
                                                        let data = +metadata;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? parseOnes(data) : parseTens(data));

                                                        // Return
                                                        return data
                                                    })() + ' ' + millions[3] + (function() {
                                                        // Initialization > Data
                                                        let data = +alpha;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : (data < 1e3 ? ' ' + parseHundreds(data) : (data < 1e6 ? ' ' + parseThousands(data) : (data < 1e9 ? ' ' + parseMillion(data) : (data < 1e12 ? ' ' + parseBillion(data) : ' ' + parseTrillion(data)))))));

                                                        // Return
                                                        return data
                                                    })()
                                                }

                                                // Parse Trillion
                                                function parseTrillion() {
                                                    // Initialization > (Data, Metadata, Alpha)
                                                    let data = LDK.string(arguments[0]),
                                                        metadata = data.slice(0, data.length - 12),
                                                        alpha = data.slice(metadata.length);

                                                    // Return
                                                    return (function() {
                                                        // Initialization > Data
                                                        let data = +metadata;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? parseOnes(data) : (data < 100 ? parseTens(data) : parseHundreds(data)));

                                                        // Return
                                                        return data
                                                    })() + ' ' + millions[2] + (function() {
                                                        // Initialization > Data
                                                        let data = +alpha;

                                                        // Update > Data
                                                        data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : (data < 1000 ? ' ' + parseHundreds(data) : (data < 1000000 ? ' ' + parseThousands(data) : (data < 1000000000 ? ' ' + parseMillion(data) : ' ' + parseBillion(data))))));

                                                        // Return
                                                        return data
                                                    })()
                                                }

                                            /* Logic
                                                    [if:else if statement]

                                                > Update > Data
                                            */
                                            if (data.length > 6 && data.length < 10)
                                                data = parseMillion(data);

                                            else if (data.length > 9 && data.length < 13)
                                                data = parseBillion(data);

                                            else if (data.length > 12 && data.length < 16)
                                                data = parseTrillion(data);

                                            else if (data.length > 15 && data.length < 19)
                                                data = parseQuadrillion(data);

                                            // Return
                                            return data.trimRightChar(/and| /)
                                        }

                                        // Parse Ones
                                        function parseOnes() {
                                            // Return
                                            return ones[arguments[0] - 1]
                                        }

                                        // Parse Tens
                                        function parseTens() {
                                            // Initialization > Data
                                            let data = arguments[0];

                                            // Return
                                            return tens[+(LDK.string(data)[0]) - 2] + (data - +(LDK.string(data)[0] + '0') ? ' ' + parseOnes(data - +(LDK.string(data)[0] + '0')) : '')
                                        }

                                        // Parse Thousands
                                        function parseThousands() {
                                            // Initialization > Data
                                            let data = LDK.string(arguments[0]);

                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (data.length == 4) {
                                                // Initialization > (Metadata, Alpha)
                                                let metadata = data[0],
                                                    alpha = data.slice(1);

                                                // Update > Data
                                                data = parseOnes(+metadata) + ' ' + thousands[0] + (function() {
                                                    // Initialization > Data
                                                    let data = +alpha;

                                                    // Update > Data
                                                    data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : ' ' + parseHundreds(data)));

                                                    // Return
                                                    return data
                                                })()
                                            }

                                            else if (data.length == 5) {
                                                // Initialization > (Metadata, Alpha)
                                                let metadata = data.slice(0, 2),
                                                    alpha = data.slice(2);

                                                // Update > Data
                                                data = (function() {
                                                    // Initialization > Data
                                                    let data = +metadata;

                                                    // Update > Data
                                                    data = data == 0 ? '' : (data < 20 ? parseOnes(data) : parseTens(data));

                                                    // Return
                                                    return data
                                                })() + ' ' + thousands[0] + (function() {
                                                    // Initialization > Data
                                                    let data = +alpha;

                                                    // Update > Data
                                                    data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : ' ' + parseHundreds(data)));

                                                    // Return
                                                    return data
                                                })()
                                            }

                                            else if (data.length == 6) {
                                                // Initialization > (Metadata, Alpha)
                                                let metadata = data.slice(0, 3),
                                                    alpha = data.slice(3);

                                                // Update > Data
                                                data = (function() {
                                                    // Initialization > Data
                                                    let data = +metadata;

                                                    // Update > Data
                                                    data = data == 0 ? '' : (data < 20 ? parseOnes(data) : (data < 100 ? parseTens(data) : parseHundreds(data)));

                                                    // Return
                                                    return data
                                                })() + ' ' + thousands[0] + (function() {
                                                    // Initialization > Data
                                                    let data = +alpha;

                                                    // Update > Data
                                                    data = data == 0 ? '' : (data < 20 ? ' and ' + parseOnes(data) : (data < 100 ? ' and ' + parseTens(data) : ' ' + parseHundreds(data)));

                                                    // Return
                                                    return data
                                                })()
                                            }

                                            // Return
                                            return data.trimRightChar(/ and| /)
                                        }

                                        // Parse Zero
                                        function parseZero() {
                                            // Return
                                            return zero[0]
                                        }

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (LDK.numberIsSafeInteger(that)) {
                                        /* Logic
                                                [if:else if statement]

                                            > Update > Metadata
                                        */
                                        if (that == 0)
                                            metadata += parseZero();

                                        else if (that > 0 && that < 20)
                                            metadata += parseOnes(that);

                                        else if (that > 19 && that < 100)
                                            metadata += parseTens(that);

                                        else if (that > 99 && that < 1e3)
                                            metadata += parseHundreds(that);

                                        else if (that > 999 && that < 1e6)
                                            metadata += parseThousands(that);

                                        else if (that > 999999 && that < 1e20)
                                            metadata += parseMillions(that);

                                        /* Logic
                                                [if statement]

                                                --- NOTE ---
                                                    #lapys: Parse for decimal units.
                                        */
                                        if (beta) {
                                            // Update > Metadata
                                            metadata += ' point';

                                            /* Loop
                                                    Index Beta.

                                                > Update > Metadata
                                            */
                                            for (let i of beta)
                                                metadata += ' ' + parseOnes(i)
                                        }

                                        // Update > Metadata
                                        alpha || (metadata = 'negative ' + metadata);
                                        !metadata.endsWith(' point zero') || (metadata = metadata.slice(0, -' point zero'.length))
                                    }

                                    else if (LDK.numberIsNaN($that))
                                        // Update > Metadata
                                        metadata = 'not a number';

                                    else if (!LDK.numberIsFinite($that)) {
                                        // Update > Metadata
                                        metadata = 'infinity';
                                        alpha || (metadata = 'negative ' + metadata)
                                    }

                                    // Return
                                    return metadata ? metadata.replace(/\b\w/g,a=>{return a.toUpperCase()}).replace(/And/g, 'and').trim() : (function() {
                                        // LapysJS > Warn
                                        LapysJS.warn('Expected safe numeral from range ' + LDK.numberMinSafeInt + ' to ' + LDK.numberMaxSafeInt + '.');

                                        // Return
                                        return 'non-safe number'
                                    })()
                                })()
                            }
                        });

                    /* Object Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.objectProto;

                        // Clone
                        LDK.objectDefProp(tmp.value, 'clone', {
                            // Value
                            value: function clone() {
                                // Initialization > (Target, Data, Metadata)
                                let that = this,
                                    data = LDK.namedObject(that.constructor.name),
                                    metadata = {};

                                /* Logic
                                        [if:else statement]
                                */
                                if (LDK.isNode(that))
                                    // Update > Data
                                    data = LDK.nodeProto.cloneNode.call(that, LDK.true);

                                else {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (LDK.isArray(that))
                                        // Update > Data
                                        data = [...that];

                                    else if (LDK.isStrictlyArrayLike(that)) {
                                        // Initialization > Alpha
                                        let alpha = LDK.namedArray.apply(LDK, [that.constructor.name].concat(LDK.arrayFrom(that)));

                                        // Modification > Alpha > Prototype
                                        alpha.__proto__ = LDK.objectCreate(that.constructor.prototype);

                                        // Update > Data
                                        data = alpha
                                    }

                                    else if (LDK.isBool(that))
                                        // Update > Data
                                        data = !!that;

                                    else if (LDK.isFunction(that))
                                        // Error Handling
                                        try {
                                            // Update > Data
                                            data = func(that.name, (a=>{let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=a[i].address;return a})([...that.getParameters()]), that.getBody())
                                        } catch (error) {
                                            // Error Handling
                                            try {
                                                // Update > Data
                                                data = that.bind(metadata)
                                            } catch (error) {
                                                // LapysJS > Error
                                                LapysJS.error(["'clone'", "'" + that.constructor.name + "'"], 'argument', 'Unable to clone object')
                                            }
                                        }

                                    else if (LDK.isNumber(that))
                                        // Update > Target
                                        that = +LDK.string(that);

                                    else if (LDK.isObject(that)) {
                                        // Initialization > (Alpha, Beta)
                                        let alpha = LDK.objectAssign(metadata, that),
                                            beta = LDK.objectGetOwnPropDescs(that);

                                        /* Loop
                                                Index Beta.

                                            > Error Handling > (...)
                                        */
                                        for (let i in beta)
                                            try { LDK.objectDefProp(alpha, i, beta[i]) }
                                            catch (error) {}

                                        // Initialization > Alpha
                                        let $alpha = LDK.objectGetOwnPropDescs(alpha);

                                        /* Loop
                                                Index Alpha.

                                            > Modification > Data > [Loop Iterator]
                                        */
                                        for (let i in alpha)
                                            LDK.objectDefProp(data, i, $alpha[i]);

                                        // Modification > Data
                                            // Primitive Value
                                            ('[[PrimitiveValue]]' in data) || (data['[[PrimitiveValue]]'] = that);

                                            // Prototype
                                            data.__proto__ = LDK.objectCreate(that.constructor.prototype)
                                    }

                                    else if (LDK.isRegex(that))
                                        // Update > Data
                                        data = LDK.regex(that.source, that.flags);

                                    else if (LDK.isString(that))
                                        // Update > Data
                                        data = (' ' + that).slice(' '.length);

                                    else if (LDK.isSymbol(that))
                                        // Update > Data
                                        data = LDK.symbol(LDK.string(that).slice('Symbol('.length, -')'.length));

                                    else
                                        // LapysJS > Error
                                        LapysJS.error(["'clone'", "'" + that.constructor.name + "'"], 'argument', 'Unable to clone object')
                                }

                                // Return
                                return data
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Define
                        LDK.objectDefProp(tmp.value, 'def', {
                            // Value
                            value: function defineProperties() {
                                // Initialization > (Arguments, Names, Once (Object), Target, Values)
                                let args = [...arguments],
                                    names = args[0],
                                    once = LDK.false,
                                    onceObject,
                                    that = this,
                                    values = args.slice(1);

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    // Initialization > Default Property Descriptor
                                    let defaultPropertyDescriptor = {
                                        // Configurable
                                        configurable: LDK.true,

                                        // Enumerable
                                        enumerable: LDK.true,

                                        // Value
                                        value: LDK.undefined,

                                        // Writable
                                        writable: LDK.true
                                    };

                                    // Function
                                        // Define
                                        function define() {
                                            // Initialization > Data
                                            let data = update(arguments[1]);

                                            // Update > Once
                                            once = LDK.true;

                                            // Modification > Target > [Argument 0]
                                            LDK.objectDefProp(that, arguments[0], data);

                                            // Update > Once Object
                                            onceObject = 'get' in data ? data.get : data.value
                                        }

                                        // Objectify
                                        function objectify() {
                                            // Return
                                            return {
                                                // Configurable
                                                configurable: LDK.true,

                                                // Enumerable
                                                enumerable: LDK.true,

                                                // Value
                                                value: arguments[0],

                                                // Writable
                                                writable: LDK.true
                                            }
                                        }

                                        // Update
                                        function update() {
                                            // Initialization > Data
                                            let data = arguments[0];

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (LDK.isObject(data)) {
                                                // Update > Data
                                                data = LDK.objectAssign({}, data);

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if ('configurable' in data || 'enumerable' in data || 'get' in data || 'set' in data || 'value' in data || 'writable' in data) {
                                                    /* Loop
                                                            Index Data.

                                                        > Deletion
                                                    */
                                                    for (let i in data)
                                                        (i != 'configurable' && i != 'enumerable' && i != 'get' && i != 'set' && i != 'value' && i != 'writable') && (delete data[i]);

                                                    // Modification > Data
                                                        // Configurable
                                                        data.configurable = !!data.configurable;

                                                        // Enumerable
                                                        data.enumerable = !!data.enumerable;

                                                        // Get
                                                        ('get' in data) && (LDK.isFunction(data.get) || (data.get = func(data.get)));

                                                        // Set
                                                        ('set' in data) && (LDK.isFunction(data.set) || (data.set = func(data.set)));

                                                        // Writable
                                                        data.writable = !!data.writable;

                                                    /* Logic
                                                            [if:else statement]

                                                        > Deletion
                                                    */
                                                    if ('value' in data) {
                                                        delete data.get;
                                                        delete data.set
                                                    }

                                                    else {
                                                        delete data.value;
                                                        delete data.writable
                                                    }

                                                    // Modification > Data > (Value, Writable)
                                                    ('get' in data) || ('set' in data) || ('value' in data) || (data.value = LDK.undefined) || (data.writable = LDK.false)
                                                }

                                                else
                                                    // Update > Data
                                                    data = objectify(data)
                                            }

                                            else
                                                // Update > Data
                                                data = objectify(data);

                                            // Return
                                            return data
                                        }

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDK.isObject(names)) {
                                        /* Logic
                                                [if statement]
                                        */
                                        if (LDK.isObject(values[0]))
                                            /* Loop
                                                    Index Values.

                                                > LapysJS > Error
                                            */
                                            for (let i of values)
                                                LDK.isObject(i) || LapysJS.error(i, 'must', 'property description object');

                                        /* Loop
                                                Index Names.

                                            > Define
                                        */
                                        for (let i in names)
                                            define(i, names[i]);

                                        /* Logic
                                                [if statement]
                                        */
                                        if (LDK.isObject(values[0]))
                                            /* Loop
                                                    Index Values.
                                            */
                                            for (let i of values)
                                                /* Loop
                                                        [for:in statement]

                                                    > Define
                                                */
                                                for (let j in i)
                                                    define(j, i[j])
                                    }

                                    else {
                                        // Update > Names
                                        LDK.isArray(names) || (names = [names]);

                                        /* Loop
                                                [while statement]

                                            > Update > Names
                                        */
                                        while (names.filter(a=>{return LDK.isArray(a)}).length)
                                            names = LDK.arrayProto.concat.apply([], names);

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (values.length > 1) {
                                            // Initialization > Values
                                            let $values = [...values];

                                            /* Loop
                                                    [while statement]

                                                > Update > Values
                                            */
                                            while (values.length < names.length)
                                                LDK.arrayProto.push.apply(values, $values);

                                            // Modification > Values > Length
                                            values.length = names.length;

                                            /* Loop
                                                    Index Names.

                                                > Define
                                            */
                                            for (let i = 0; i < names.length; i += 1)
                                                define(LDK.string(names[i]), values[i])
                                        }

                                        else
                                            /* Loop
                                                    Index Names.

                                                > Define
                                            */
                                            for (let i of names)
                                                define(LDK.string(i), values[0])
                                    }
                                }

                                // Return
                                return once ? onceObject : LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Properties
                        LDK.objectDefProp(tmp.value, 'prop', {
                            // Value
                            value: function getProps() {
                                // Initialization > (Target, Data)
                                let that = this,
                                    data = LDK.objectProto.propDesc.apply(that, [...arguments]);

                                // Function > Update
                                function update() {
                                    // Initialization > Data
                                    let data = arguments[0];

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if ('get' in data)
                                        // Error Handling > (Update > Data)
                                        try { data = data.get.call(that) }
                                        catch (error) { data = error }

                                    else if ('value' in data)
                                        // Update > Data
                                        data = data.value;

                                    // Return
                                    return data
                                }

                                /* Logic
                                        [if:else if statement]
                                */
                                if (LDK.isObject(data))
                                    /* Loop
                                            Index Data.

                                        > Modification > Data > [Loop Iterator]
                                    */
                                    for (let i in data)
                                        data[i] = update(data[i]);

                                else if (LDK.isArray(data)) {
                                    // Initialization > Data
                                    let $data = data.length;

                                    /* Loop
                                            Index Data.

                                        > Update > Data
                                    */
                                    for (let i = 0; i < $data; i += 1)
                                        data[i] = update(data[i])
                                }

                                else
                                    // Update > Data
                                    data = update(data);

                                // Return
                                return data
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Properties Description
                        LDK.objectDefProp(tmp.value, 'propDesc', {
                            // Value
                            value: function getPropsDesc() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = LDK.namedArray('PropertyDescriptionList'),
                                    that = this;

                                /* Loop
                                        [while statement]

                                    > Update > Arguments
                                */
                                while (args.filter(a=>{return LDK.isArray(a)}).length)
                                    args = LDK.arrayProto.concat.apply([], args);

                                // Function > Describe
                                function describe() {
                                    // Return
                                    return LDK.objectGetOwnPropDesc(that, arguments[0])
                                }

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments.
                                    */
                                    for (let i = 0; i < args.length; i += 1)
                                        args[i] = LDK.string(args[i]);

                                    /* Loop
                                            Index Arguments.

                                        > Error Handling > (...)
                                    */
                                    for (let i of args)
                                        try { eval("({'" + i + "':''})") }
                                        catch (error) { LapysJS.error(["'getPropsDesc'", "'" + that.constructor.name + "'"], 'argument', "Invalid property name: '" + i + "'") }

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i of args)
                                        data.push(describe(i))
                                }

                                else
                                    // Return
                                    return (a=>{let $a=LDK.objectKeys(a),$$a=$a.length;for(let i=0;i<$$a;i+=1)a[$a[i]]=LDK.objectAssign(LDK.namedObject('PropertyDescription'),a[$a[i]]);return a})(LDK.objectAssign(LDK.namedObject('PropertyDescriptionMap'), LDK.objectGetOwnPropDescs(that)));

                                // Return
                                return data.length > 1 ? (a=>{let $a=a.length;for(let i=0;i<$a;i+=1)a[i]=LDK.objectAssign(LDK.namedObject('PropertyDescription'), a[i]);return a})(data) : LDK.objectAssign(LDK.namedObject('PropertyDescription'), data[0])
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Properties Keys
                        LDK.objectDefProp(tmp.value, 'propKeys', {
                            // Configurable
                            configurable: LDK.true,

                            // Get
                            get: function propKeys() {
                                // Initialization > (Target, Data, Metadata)
                                let that = this,
                                    data = LDK.objectGetOwnPropDescs(that),
                                    metadata = LDK.objectKeys(that);

                                // Modification > Metadata > All
                                metadata.all = [];

                                /* Loop
                                        Index Data.

                                    > Update > (Metadata > All)
                                */
                                for (let i in data)
                                    metadata.all.push(i);

                                // Return
                                return metadata
                            }
                        });

                        // Properties Values
                        LDK.objectDefProp(tmp.value, 'propValues', {
                            // Configurable
                            configurable: LDK.true,

                            // Get
                            get: function propValues() {
                                // Initialization > (Target, Data, Metadata)
                                let that = this,
                                    data = LDK.objectGetOwnPropDescs(that),
                                    metadata = LDK.objectValues(that);

                                // Modification > Metadata > All
                                metadata.all = [];

                                /* Loop
                                        Index Data.
                                */
                                for (let i in data) {
                                    // Initialization > Alpha
                                    let alpha = data[i];

                                    // Update > (Metadata > All)
                                    metadata.all.push('get' in alpha ? alpha.get.call(that) : alpha.value)
                                }

                                // Return
                                return metadata
                            }
                        });

                        // Undefine
                        LDK.objectDefProp(tmp.value, 'undef', {
                            // Value
                            value: function undefineProperties() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        [while statement]

                                    > Update > Arguments
                                */
                                while (args.filter(a=>{return LDK.isArray(a)}).length)
                                    args = LDK.arrayProto.concat.apply([], args);

                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments.
                                */
                                for (let i = 0; i < args.length; i += 1)
                                    args[i] = LDK.string(args[i]);

                                /* Loop
                                        Index Arguments.

                                    > Error Handling > (...)
                                */
                                for (let i of args)
                                    try { eval("({'" + i + "':''})") }
                                    catch (error) { LapysJS.error(["'undefineProp'", "'" + that.constructor.name + "'"], 'argument', "Invalid property name: '" + i + "'") }

                                /* Loop
                                        Index Arguments.

                                    > Deletion
                                */
                                for (let i of args)
                                    (i in that) && (delete that[i]);

                                // Return
                                return LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                        // Watch --- CHECKPOINT ---
                        LDK.objectDefProp(tmp.value, 'watch', {
                            // Configurable
                            configurable: LDK.true,

                            // Value
                            value: function watchProperties() {
                                // Initialization > (Arguments, Data, Metadata, Target)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args.slice(1),
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (data !== that) {
                                    // Update > Data
                                    LDK.isArray(data) || (data = [data]);

                                    /* Loop
                                            Index Data.
                                    */
                                    for (let i = 0; i < data.length; i += 1) {
                                        // Initialization > Metadata
                                        let metadata = LDK.string(data[i]);

                                        // Modification > Data > [Loop Iterator]
                                        data[i] = metadata in that ? metadata : tmp.object
                                    }

                                    // Update > Data
                                    data = data.filter(a=>{return a!=tmp.object})
                                }

                                /* Loop
                                        Index Metadata.

                                    > Modification > Metadata > [Loop Iterator]
                                */
                                for (let i = 0; i < metadata.length; i += 1)
                                    LDK.isString(metadata[i]) && (metadata[i] = func(metadata[i]));

                                /* Loop
                                        Index Metadata.

                                    > LapysJS > Error
                                */
                                for (let i of metadata)
                                    LDK.isFunction(i) || LapysJS.error(i, 'must', ['evaluation string', 'function']);

                                /* Logic
                                        [if statement]
                                */
                                if (args.length > 1) {
                                    // Function
                                        // Parse
                                        function parse() {
                                            // Initialization > Arguments
                                            let args = [...arguments];

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (args.length)
                                                /* Loop
                                                        Index Metadata.

                                                    > [Loop Iterator]
                                                */
                                                for (let i of metadata)
                                                    i.apply(that, args);

                                            else
                                                /* Loop
                                                        Index Metadata.

                                                    > [Loop Iterator]
                                                */
                                                for (let i of metadata)
                                                    i.call(that)
                                        }

                                        // Get Property Values
                                        function getPropValues() {
                                            // Initialization > Data
                                            let data = LDK.objectGetOwnPropDescs(that);

                                            /* Loop
                                                    Index Data.
                                            */
                                            for (let i in data) {
                                                // Initialization > Metadata
                                                let metadata = data[i];

                                                // Modification > Data > [Loop Iterator]
                                                data[i] = 'get' in metadata ? LDK.getSourceCode(metadata.get) : (function() {
                                                    // Initialization > Data
                                                    let data = metadata.value;

                                                    /* Logic
                                                            [if:else if statement]
                                                    */
                                                    if (LDK.isFunction(data))
                                                        // Return
                                                        return LDK.getSourceCode(data);

                                                    else if (LDK.isObject(data)) {
                                                        // Initialization > (Metadata, Alpha)
                                                        let metadata = LDK.objectGetOwnPropDescs(data),
                                                            alpha = '';

                                                        /* Loop
                                                                Index Metadata.

                                                            > Update > Alpha
                                                        */
                                                        for (let i in metadata)
                                                            alpha += "'" + i + "': " + LDK.string(metadata[i]) + '; ';

                                                        // Return
                                                        return alpha.trim()
                                                    }

                                                    // Return
                                                    return LDK.string(data)
                                                })()
                                            }

                                            // Return
                                            return data
                                        }

                                    /* Logic
                                            [if statement]
                                    */
                                    if (data == that) {
                                        // Initialization > (Properties, Object)
                                        let props = getPropValues(),
                                            object = that.clone();

                                        // Function > Watch
                                        (function watch() {
                                            // Initialization > Properties
                                            let $props = getPropValues(),
                                                _props = LDK.objectKeys(props),
                                                _$props = LDK.objectKeys($props);

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (_props.length < _$props.length) {
                                                // Initialization > Data
                                                let data = LDK.arrayProto.removeElement.apply([..._$props], [..._props]),
                                                    $data = data.length;

                                                /* Loop
                                                        Index Data.

                                                    > Parse
                                                */
                                                for (let i = 0; i < $data; i += 1)
                                                    parse((function() {
                                                        // Initialization > (Metadata, Alpha, Beta)
                                                        let metadata = data[i],
                                                            alpha = LDK.objectGetOwnPropDesc(that, metadata),
                                                            beta = LDK.namedObject('Property');

                                                        // Modification > Beta > [Metadata]
                                                        beta[metadata] = 'get' in alpha ? alpha.get : alpha.value;

                                                        // Return
                                                        return beta
                                                    })());

                                                // Update > (Object, Properties)
                                                object = that.clone();
                                                props = $props
                                            }

                                            else if (_props.length > _$props.length) {
                                                // Initialization > Data
                                                let data = LDK.arrayProto.removeElement.apply([..._props], [..._$props]),
                                                    $data = data.length;

                                                /* Loop
                                                        Index Data.

                                                    > Parse
                                                */
                                                for (let i = 0; i < $data; i += 1)
                                                    parse((function() {
                                                        // Initialization > (Metadata, Alpha, Beta)
                                                        let metadata = data[i],
                                                            alpha = LDK.objectGetOwnPropDesc(object, metadata),
                                                            beta = LDK.namedObject('Property');

                                                        // Update > Alpha
                                                        alpha || (alpha = LDK.objectGetOwnPropDesc(that, metadata));

                                                        // Error Handling > Modification > Beta > [Metadata]
                                                        try {
                                                            beta[metadata] = 'get' in alpha ? alpha.get : alpha.value;
                                                        } catch (error) {
                                                            beta[metadata] = eval("new (class LapysJSError extends Error{constructor(){super([...arguments]);LDK.err.captureStackTrace(this,LapysJSError)}})('Could not determine property \\'" + metadata + "\\'' + '\\r')");
                                                        }

                                                        // Return
                                                        return beta
                                                    })());

                                                // Update > (Object, Properties)
                                                object = that.clone();
                                                props = $props
                                            }

                                            else {
                                                /* Loop
                                                        Index Properties
                                                */
                                                for (let i in $props)
                                                    /* Logic
                                                            [if statement]

                                                        > Parse
                                                    */
                                                    if (props[i] != $props[i])
                                                        parse((function() {
                                                            // Initialization > (Data, Metadata)
                                                            let data = LDK.objectGetOwnPropDesc(that, i),
                                                                metadata = LDK.namedObject('Property');

                                                            // Modification > Metadata > [Loop Iterator]
                                                            metadata[i] = 'get' in data ? data.get : data.value;

                                                            // Return
                                                            return metadata
                                                        })());

                                                // Update > (Object, Properties)
                                                object = that.clone();
                                                props = $props
                                            }

                                            // Request Animation Frame > Watch
                                            tmp.functions.requestAnimationFrame(watch)
                                        })()
                                    }

                                    else {
                                        // Function > Get Value
                                        function getValue() {
                                            // Initialization > (Data, Metadata, Alpha)
                                            let data = arguments[0],
                                                metadata = arguments[1],
                                                alpha = LDK.objectGetOwnPropDesc(data, metadata);

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if ('get' in alpha)
                                                // Return
                                                return LDK.getSourceCode(alpha.get);

                                            else {
                                                // Initialization > Data
                                                let data = alpha.value;

                                                /* Logic
                                                        [if:else if statement]
                                                */
                                                if (LDK.isFunction(data))
                                                    // Return
                                                    return LDK.getSourceCode(data);

                                                else if (LDK.isObject(data)) {
                                                    // Initialization > (Alpha, Beta)
                                                    let alpha = LDK.objectGetOwnPropDescs(data),
                                                        beta = '';

                                                    /* Loop
                                                            Index Alpha.

                                                        > Update > Beta
                                                    */
                                                    for (let i in alpha)
                                                        beta += "'" + i + "': " + LDK.string(alpha[i]) + '; ';

                                                    // Return
                                                    return beta.trim()
                                                }

                                                // Return
                                                return LDK.string(data)
                                            }
                                        }

                                        /* Loop
                                                Index Data.
                                        */
                                        for (let i of data) {
                                            // Initialization > Property
                                            let prop = getValue(that, i);

                                            // Function > Watch
                                            (function watch() {
                                                // Initialization > Property
                                                let $prop = getValue(that, i);

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (prop != $prop) {
                                                    // Initialization > (Data, Metadata)
                                                    let data = LDK.objectGetOwnPropDesc(that, i),
                                                        metadata = LDK.namedObject('Property');

                                                    // Modification > Metadata > [Loop Iterator]
                                                    metadata[i] = 'get' in data ? data.get : data.value;

                                                    // Parse
                                                    parse.call(that, metadata);

                                                    // Update > Property
                                                    prop = $prop
                                                }

                                                // Request Animation Frame > Watch
                                                tmp.functions.requestAnimationFrame(watch)
                                            })()
                                        }
                                    }
                                }

                                else
                                    // LapysJS > Error
                                    LapysJS.error(["'watchProperties'", "'Object'"], 'argument', [2, args.length]);

                                // Return
                                return LDK.null
                            },

                            // Writable
                            writable: LDK.true
                        });

                    /* String Data */
                        // Update > Temporary Data > Value
                        tmp.value = LDK.stringProto;

                        // Camel
                        LDK.objectDefProp(tmp.value, 'camel', {
                            // Value
                            value: function camel() {
                                // Return
                                return this[0].toLowerCase()+this.replace(/\b\w/g,a=>{return a.toUpperCase()}).slice(1)
                            }
                        });

                        // Capital
                        LDK.objectDefProp(tmp.value, 'capital', {
                            // Value
                            value: function capital() {
                                // Return
                                return this.replace(/\b\w/g,a=>{return a.toUpperCase()})
                            }
                        });

                        // Get After Character
                        LDK.objectDefProp(tmp.value, 'getAfterChar', {
                            // Value
                            value: function getAfterChar() {
                                // Initialization > (Arguments, Data, Metadata, Alpha, Target)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args[1],
                                    alpha = '',
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Logic
                                            [if:else if statement]

                                        > Update > Data
                                    */
                                    if (LDK.isNumber(data))
                                        data = metadata ? that[that.length - data] : that[data];

                                    else if (LDK.isRegex(data))
                                        data = LDK.regex(data.source, data.flags.replace('g', ''));

                                    // Update > Data
                                    LDK.isRegex(data) || (data = LDK.string(data).replace(LDK.regex('[\\'+(function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join('').split('').join('\\')+']', 'g'), '\\$&'));

                                    // Update > Alpha
                                    alpha = LDK.isRegex(data) ?
                                        (function() {let a=LDK.string(that),b=0,c=a.length,d=a,e=a.match(data),f=a.match(LDK.regex(data.source,data.flags.replace('g','')+'g'));return e?(metadata?d.slice(d.lastIndexOf(f[f.length-1])+f[f.length-1].length-1):d.slice(d.indexOf(e[0])+e[0].length-1)).slice(1):''})() :
                                        that.slice(that[metadata ? 'lastIndexOf' : 'indexOf'](data.replace(/\\/g, '')) + (data.match(LDK.regex('[\\'+(function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join('').split('').join('\\')+']')) ? data.replace(/\\/g, '').length : data.length))
                                }

                                // Return
                                return that.match(data) ? alpha : ''
                            }
                        });

                        // Get Before Character
                        LDK.objectDefProp(tmp.value, 'getBeforeChar', {
                            // Value
                            value: function getBeforeChar() {
                                // Initialization > (Arguments, Data, Metadata, Alpha, Target)
                                let args = [...arguments],
                                    data = args[0],
                                    metadata = args[1],
                                    alpha = '',
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Logic
                                            [if:else if statement]

                                        > Update > Data
                                    */
                                    if (LDK.isNumber(data))
                                        data = metadata ? that[that.length - data] : that[data];

                                    else if (LDK.isRegex(data))
                                        data = LDK.regex(data.source, data.flags.replace('g', ''));

                                    // Update > Data
                                    LDK.isRegex(data) || (data = LDK.string(data).replace(LDK.regex('[\\'+(function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join('').split('').join('\\')+']', 'g'), '\\$&'));

                                    // Update > Alpha
                                    alpha = LDK.isRegex(data) ?
                                        (function() {let a=LDK.string(that),b=0,c=a.length,d=a,e=a.match(data),f=a.match(LDK.regex(data.source,data.flags.replace('g','')+'g'));return e?(metadata?d.slice(0,d.lastIndexOf(f[f.length-1])+f[f.length-1].length-1):d.slice(0,d.indexOf(e[0])+e[0].length-1)):''})() :
                                        that.slice(0, that[metadata ? 'lastIndexOf' : 'indexOf'](data.replace(/\\/g, '')) < 0 ? that[metadata ? 'lastIndexOf' : 'indexOf'](data.replace(/\\\./g, '.')) : that[metadata ? 'lastIndexOf' : 'indexOf'](data.replace(/\\/g, '')))
                                }

                                // Return
                                return that.match(data) ? alpha : LDK.string(that)
                            }
                        });

                        // Has Char
                        LDK.objectDefProp(tmp.value, 'hasChar', {
                            // Value
                            value: function hasChar() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = [],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(that.indexOf(i) > -1 || !!that.match(i));

                                // Return
                                return args.length ? data.indexOf(LDK.true) > -1 : LDK.null
                            }
                        });

                        // HTML
                        LDK.objectDefProp(tmp.value, 'html', {
                            // Get
                            get: function createElement() {
                                // Initialization > (Target, Data, Metadata)
                                let that = LDK.string(this),
                                    data = that.getBeforeChar(/\.|#|\[|:/).trim(),
                                    metadata = '';

                                // Update > Data
                                data = LDK.docCreateEle(data == '*' ? LDK.randomElementList.randomElement : data)

                                // Function > Ignore Strings
                                function ignoreStrings() {
                                    // Initialization > Data
                                    let data = LDK.string(arguments[0]);

                                    // Return
                                    return data.replace(/'[^']{0,}'/g, '').replace(/"[^"]{0,}"/g, '').replace(/`[^`]{0,}`/g, '')
                                }

                                /* Logic
                                        [if statement]

                                    > (...)
                                */
                                if (ignoreStrings(that).match(/\.|#|\[/))
                                    ignoreStrings(that).indexOf(':') > ignoreStrings(that).match(/\.|#|\[/).index || ignoreStrings(that).indexOf(':') < 0 ?
                                        !ignoreStrings(that.trimLeftChar(/[^\.#\[]/)).getBeforeChar(':') || (data.selector = metadata = (function() {
                                            // Initialization > (Data, Metadata)
                                            let data = that.trimLeftChar(/[^\.#\[]/),
                                                metadata = [[[], [], []], [LapysJS.perm.regexSet.randomize(), LapysJS.perm.regexSet.randomize(), LapysJS.perm.regexSet.randomize()]];

                                            // Update > Data
                                            data = data.replace(/'[^']{0,}'/g, data => {
                                                // Update > Metadata
                                                metadata[0][0].push(data);

                                                // Return
                                                return metadata[1][0]
                                            }).replace(/"[^"]{0,}"/g, data => {
                                                // Update > Metadata
                                                metadata[0][1].push(data);

                                                // Return
                                                return metadata[1][1]
                                            }).replace(/`[^`]{0,}`/g, data => {
                                                // Update > Metadata
                                                metadata[0][2].push(data);

                                                // Return
                                                return metadata[1][2]
                                            }).getBeforeChar(':');

                                            /* Loop
                                                    Index Metadata.

                                                > Update > Data
                                            */
                                            for (let i of metadata[0][2])
                                                data = data.replace(metadata[1][2], i);

                                            /* Loop
                                                    Index Metadata.

                                                > Update > Data
                                            */
                                            for (let i of metadata[0][1])
                                                data = data.replace(metadata[1][1], i);

                                            /* Loop
                                                    Index Metadata.

                                                > Update > Data
                                            */
                                            for (let i of metadata[0][0])
                                                data = data.replace(metadata[1][0], i);

                                            // Return
                                            return data
                                        })()) :
                                        LapysJS.error("HTML content (prefixed with a ':') must be specified after selector value.");

                                // Modification > Data > Inner HTML
                                (ignoreStrings(that).indexOf(':') < 0) || (data['value' in data && LDK.isString(data.value) && data.tagName != 'BUTTON' ? 'value' : 'innerHTML'] = that.replace(metadata, '').trimLeftChar(/[^:]/).slice(':'.length));

                                // Return
                                return data
                            }
                        });

                        // Is Registered
                        LDK.objectDefProp(tmp.value, 'isRegistered', {
                            // Get
                            get: function isRegistered() {
                                // Error Handling
                                try {
                                    // Initialization > (Target, Data)
                                    let that = this,
                                        data = LDK.docCreateEle(that);

                                    // Return
                                    return !that ?
                                        LDK.false :
                                        LDK.string(data).slice(0, -']'.length).endsWith('Element') && (data.toString().indexOf('HTMLUnknownElement') < 0) && (data.constructor !== HTMLElement)
                                } catch (error) {}

                                // Return
                                return LDK.false
                            }
                        });

                        // Lower
                        LDK.objectDefProp(tmp.value, 'lower', {
                            // Value
                            value: function lower() {
                                // Return
                                return LDK.stringProto.toLowerCase.call(LDK.string(this))
                            }
                        });

                        // Pascal
                        LDK.objectDefProp(tmp.value, 'pascal', {
                            // Value
                            value: function pascal() {
                                // Return
                                return this.replace(/\b\w/g,a=>{return a.toUpperCase()})
                            }
                        });

                        /* Remove Character
                                --- NOTE ---
                                    #lapys: Do not use a standard regular expression
                                        module to remove characters.
                        */
                        LDK.objectDefProp(tmp.value, 'removeChar', {
                            // Value
                            value: function removeChar() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (LDK.isNumber(i)) {
                                        /* Update > Target
                                                --- NOTE ---
                                                    #lapys: The string is converted to an array
                                                        to access the exact character using the given index.
                                        */
                                        that = that.split('');

                                        // Deletion
                                        delete that[i];

                                        // Update > Target
                                        that = that.filter(Boolean).join('')
                                    }

                                    else if (that.match(i))
                                        /* Loop
                                                Index all matches.

                                            > Update > Target
                                        */
                                        for (let j of that.match(i))
                                            that = that.slice(0, that.indexOf(j)) + that.slice(that.indexOf(j) + 1);

                                // Return
                                return LDK.string(that)
                            }
                        });

                        // Random Character
                        LDK.objectDefProp(tmp.value, 'randomChar', {
                            // Get
                            get: function randomChar() {
                                // Return
                                return this[LDK.numberParseInt(tmp.functions.random()*this.length)]
                            }
                        });

                        // Randomize
                        LDK.objectDefProp(tmp.value, 'randomize', {
                            // Value
                            value: function randomize() {
                                // Initialization > (Data, Target)
                                let data = '',
                                    that = (' ' + this).slice(' '.length),
                                    $that = that.length;

                                /* Loop
                                        Iterate over Target.

                                    > Update > Data
                                */
                                for (let i = 0; i < $that; i += 1)
                                    data += (function() {let a=that[LDK.numberParseInt(tmp.functions.random()*that.length)];that=that.replace(a,'');return a})();

                                // Return
                                return data
                            }
                        });

                        // Reverse
                        LDK.objectDefProp(tmp.value, 'reverse', {
                            // Value
                            value: function reverse() {
                                // Return
                                return this.split('').reverse().join('')
                            }
                        });

                        // Trim Character
                        LDK.objectDefProp(tmp.value, 'trimChar', {
                            // Value
                            value: function trimChar() {
                                // Return
                                return this.trimRightChar.apply(this.trimLeftChar.apply(this, [...arguments]), [...arguments])
                            }
                        });

                        // Trim Left Character
                        LDK.objectDefProp(tmp.value, 'trimLeftChar', {
                            // Value
                            value: function trimLeftChar() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = (function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join(''),
                                    that = (' ' + this).slice(' '.length),
                                    $that = that.length;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments
                                    */
                                    for (let i in args)
                                        args[i] = LDK.isRegex(args[i]) ? LDK.regex(args[i].source, args[i].flags.replace('g', '')) : LDK.string(args[i]).replace(LDK.regex('[\\'+(function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join('').split('').join('\\')+']', 'g'), '\\$&');

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i of args)
                                        /* Loop
                                                Iterate over Target.

                                                #lapys: Safer to program compared to a `while statement`.
                                        */
                                        for (let j = 0; j < $that; j += 1)
                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (LDK.isRegex(i))
                                                // Update > Target
                                                !(that && !(that.match(i) || {index: 1}).index) || (that = that.replace(i, ''));

                                            else {
                                                // Initialization > Metadata
                                                let metadata = i.replace(LDK.regex('['+data.replace(/(?:)/g, '\\\\').slice(0, -'\\\\'.length)+']', 'g'), data => {
                                                    // Return
                                                    return data.replace('\\', '')
                                                });

                                                // Update > Target
                                                !(that && metadata && that.slice(0, metadata.length) == metadata) || (that = that.slice(metadata.length))
                                            }
                                }

                                // Return
                                return that
                            }
                        });

                        // Trim Right Character
                        LDK.objectDefProp(tmp.value, 'trimRightChar', {
                            // Value
                            value: function trimRightChar() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = (function() {let a=LDK.constants.CHAR_ARRAY[0],b=LDK.constants.CHAR_ARRAY[1],c='';for(let i of a)try{(i==eval("'\\"+i+"'"))||(c+=i)}catch(e){c+=i}c+='\n';for(let i of b)try{(i==(b.match(i)||[])[0])||(c+=i)}catch(e){c+=i}return c.split('\n')})().join(''),
                                    that = (' ' + this).slice(' '.length),
                                    $that = that.length;

                                /* Logic
                                        [if statement]
                                */
                                if (args.length) {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments
                                    */
                                    for (let i in args)
                                        args[i] = LDK.isRegex(args[i]) ? LDK.regex(args[i].source, args[i].flags.replace('g', '')) : LDK.string(args[i]).replace(/\./g, '\\.');

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i of args)
                                        /* Loop
                                                Iterate over Target.

                                                #lapys: Safer to program compared to a `while statement`.
                                        */
                                        for (let j = 0; j < $that; j += 1)
                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (LDK.isRegex(i)) {
                                                // Initialization > (Metadata, Alpha)
                                                let metadata = LDK.regex(i.source, i.flags + 'g'),
                                                    alpha = that.match(metadata);

                                                // Update > Target
                                                !(alpha && that && that.lastIndexOf(alpha[alpha.length - 1]) + alpha[alpha.length - 1].length == that.length) || (that = that.slice(0, -alpha[alpha.length - 1].length))
                                            }

                                            else {
                                                // Initialization > Metadata
                                                let metadata = i.replace(LDK.regex('['+data.replace(/(?:)/g, '\\\\').slice(0, -'\\\\'.length)+']', 'g'), data => {
                                                    // Return
                                                    return data.replace('\\', '')
                                                });

                                                // Update > Target
                                                !(that && metadata && that.slice(-metadata.length) == metadata) || (that = that.slice(0, -metadata.length))
                                            }
                                }

                                // Return
                                return that
                            }
                        });

                        // Upper
                        LDK.objectDefProp(tmp.value, 'upper', {
                            // Value
                            value: function upper() {
                                // Return
                                return LDK.stringProto.toUpperCase.call(LDK.string(this))
                            }
                        });

                    /* Global Data */
                        // Document
                            // Main Element
                            LDK.objectDefProp(LDK.$doc, 'mainElement', {
                                // Configurable
                                configurable: LDK.true,

                                // Get
                                get: function mainElement() {
                                    // Return
                                    return LDK.docQueSel('main')
                                }
                            });

                            // Title Element
                            LDK.objectDefProp(LDK.$doc, 'titleElement', {
                                // Configurable
                                configurable: LDK.true,

                                // Get
                                get: function titleElement() {
                                    // Return
                                    return LDK.docQueSel('title')
                                }
                            });

                    // --- CHECKPOINT ---
                    window.LDK = LDK;
                    window.perm = perm;
                    window.tmp = tmp
                }

                /* Return
                        --- NOTE ---
                            #lapys: LapysJS initialized properly.
                */
                return 0
            } catch (error) {
                // Set Timeout
                setTimeout(function() {
                    // Execution > Error
                    eval('throw new (class LapysJSError extends Error { constructor() { super("LapysJS did not install properly.\\n\\t" + error.message + "\\r") } })')
                });

                // Return
                return 1
            }
        }

        /* Update
                --- NOTE ---
                    #lapys: Allow services from the library to execute
                        after installation.
        */
        function update() {
            // Error Handling
            try {
                /* Execution > Error
                        --- NOTE ---
                            #lapys: Detect if the previous phase that is not the first
                                has executed without errors.
                */
                !arguments[arguments.length - 1] || eval('throw new (class LapysJSProcessCycleError extends (class LapysJSError extends Error { constructor() { super() } }) { constructor() { super() } })');

                /* Global Data */
                    // LapysJS Development Kit
                    const LDK = this;

                /* Modification */
                    // Temporary Data
                        // Features
                        tmp.objects.features = LapysJS.script.getAttribute('lapys-features');

                /* Features */
                    // Data Focus
                    (function DataFocus() {
                        // Event > Window > Click
                        tmp.functions.addEventListener(window, 'click', function DataFocus(event) {
                            /* Logic
                                    [if statement]
                            */
                            if (LDK.constants.FEATURES.active.indexOf('data-focus') > -1) {
                                // Initialization > Data
                                let data = LDK.arrayFrom(LDK.docQueSelAll('.focusable'));

                                /* Logic
                                        [if:else statement]
                                */
                                if (data.length) {
                                    // Initialization > (Metadata, Alpha)
                                    let metadata = LDK.arrayFrom(LDK.docQueSelAll('[focus')),
                                        alpha = event.target;

                                    /* Logic
                                            [if statement]
                                    */
                                    if (data.indexOf(alpha) > -1) {
                                        /* Loop
                                                Index Metadata.

                                            > Modification > [Loop Iterator] > Focus
                                        */
                                        for (let i of metadata)
                                            i.removeAttribute('focus');

                                        // Modification > Alpha > Focus
                                        alpha.setAttribute('focus', '');

                                        // Error Handling > (...)
                                        try { LDK.htmlEleProto.focus.call(alpha) }
                                        catch (error) {}
                                    }
                                }

                                else {
                                    // Initialization > (Data, Metadata)
                                    let data = LDK.arrayFrom(LDK.docQueSelAll('[focus')),
                                        metadata = event.target;

                                    /* Loop
                                            Index Data.

                                        > Modification > [Loop Iterator] > Focus
                                    */
                                    for (let i of data)
                                        i.removeAttribute('focus');

                                    // Modification > Metadata > Focus
                                    metadata.setAttribute('focus', '');

                                    // Error Handling > (...)
                                    try { LDK.htmlEleProto.focus.call(metadata) }
                                    catch (error) {}
                                }
                            }
                        });

                        // Function > Watch
                        (function watch() {
                            /* Logic
                                    [if statement]
                            */
                            if (LDK.constants.FEATURES.active.indexOf('data-focus') > -1) {
                                // Initialization > Data
                                let data = LDK.arrayFrom(LDK.docQueSelAll('[focus'));

                                /* Logic
                                        [if statement]
                                */
                                if (data[1]) {
                                    // Update > Data
                                    data = data.slice(1);

                                    /* Loop
                                            Index Data.

                                        > Modification > [Loop Iterator] > Focus
                                    */
                                    for (let i of data)
                                        i.removeAttribute('focus')
                                }
                            }

                            // Request Animation Frame > Watch
                            tmp.functions.requestAnimationFrame(watch)
                        })()
                    })();

                    // LapysJS Script
                    (function LapysJSScript() {
                        // Initialization > (Data, Metadata, Alpha)
                        let data = 'lapys-features',
                            metadata = LapysJS.script,
                            alpha = metadata.getAttribute(data);

                        /* Logic
                                [if statement]
                        */
                        if (tmp.objects.features != alpha && metadata.hasAttribute(data)) {
                            // Metadata
                                // Disable LapysJS Feature
                                metadata.disableLapysJSFeature.apply(metadata, LDK.constants.FEATURES.value);

                                // Enable LapysJS Feature
                                metadata.enableLapysJSFeature.apply(metadata, LapysJS.debug.formatChar(alpha, 'list'));

                            // Modification > (Temporary Data > Objects) > Features
                            tmp.objects.features = alpha
                        }

                        // Request Animation Frame > LapysJS Script
                        tmp.functions.requestAnimationFrame(LapysJSScript)
                    })();

                    /* HTML JavaScript
                            --- NOTE ---
                                #lapys:
                                    - The code is minified to sustain some degree of speed.
                                    - What it is doing is checking if there has been any attribute change on
                                        any elements with the 'script' attribute on that specific attribute and updates
                                        the DOM.
                    */
                    (function HTMLJavaScript() {
                        // (...)
                        tmp.functions.addEventListener(window,'load',function(){let j=LDK.arrayFrom(LDK.docQueSelAll('[script'));for(let k of j)k.script.call(k)}),function a(){if(-1<LDK.constants.FEATURES.active.indexOf('html-javascript')){let j=LDK.arrayFrom(LDK.docQueSelAll('[script')),k=perm.scriptedNodesList;for(let l of k)l.element.hasAttribute('script')||k.removeElement(l);for(let l of j){let m=0,n=l.getAttribute('script');-1<(m=(o=>{o=[...o];for(let p=0;p<o.length;p+=1)o[p]=o[p].element;return o})(k).indexOf(l))?n!=k[m].script&&(k[m].script=n,l.script.call(l)):k.push({element:l,script:n})}}tmp.functions.requestAnimationFrame(a)}();
                    })();

                /* Return
                        --- NOTE ---
                            #lapys: LapysJS started services correctly.
                */
                return 0
            } catch (error) {
                // Set Timeout
                (error.constructor.name == 'LapysJSProcessCycleError') || setTimeout(function() {
                    // Execution > Error
                    eval('throw new (class LapysJSError extends Error { constructor() { super("Library services did not integrate correctly.\\n\\t" + error.message + "\\r") } })')
                });

                // Return
                return 1
            }
        }

        /* Terminate
                --- NOTE ---
                    #lapys: Termination process.
        */
        function terminate() {
            // Error Handling
            try {
                // Execution > Error
                !arguments[arguments.length - 1] || eval('throw new (class LapysJSProcessCycleError extends (class LapysJSError extends Error { constructor() { super() } }) { constructor() { super() } })');

                // Temporary Data > Functions > (...)
                tmp.functions.group('LapysJS | ' + (LapysJS.script.src.length > 150 ? LapysJS.script.src.slice(0, 150) + '...' : LapysJS.script.src) + ' (by Lapys Dev Team)');
                    tmp.functions.log('LapysJS.processingTime', tmp.processingTime);
                    tmp.functions.log('LapysJS.ready', LapysJSDevelopmentKit.true);
                tmp.functions.groupEnd();

                /* Return
                        --- NOTE ---
                            #lapys: The script ran smoothly.
                */
                return 0
            } catch (error) {
                // Set Timeout
                (error.constructor.name == 'LapysJSProcessCycleError') || setTimeout(function() {
                    // Execution > Error
                    eval('throw new (class LapysJSError extends Error { constructor() { super("Error in LapysJS round-up process.\\n\\t" + error.message + "\\r") } })')
                });

                // Return
                return 1
            }
        }

        /* {Terminate} Return
                --- NOTE ---
                    #lapys: Each function (phase) is passed as a final parameter to
                        the succeeding phase.
        */
        return terminate.call(
            LapysJSDevelopmentKit, window.parent, typeof global == 'undefined' ? void 0 : global, window.parent.document, void 0, tmp,

            // {Update}
            update.call(LapysJSDevelopmentKit, window.parent, typeof global == 'undefined' ? void 0 : global, window.parent.document, void 0, tmp,
                // {Initialize}
                init.call(
                    LapysJSDevelopmentKit, window.parent, typeof global == 'undefined' ? void 0 : global, window.parent.document, void 0, tmp,

                    // {[Function]}
                    (function() {})
                )
            )
        )
})([String()])
